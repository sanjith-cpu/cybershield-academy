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
const previousLesson = `${modulePath}/asset-data-and-business-impact-analysis`;
const nextLesson = `${modulePath}/security-standards-procedures-and-exceptions`;

const objectives = [
  "Explain how fictional risk treatment connects avoidance, reduction, transfer, acceptance, monitoring, control selection, ownership, cost, feasibility, residual risk, and review.",
  "Distinguish fictional preventive, detective, corrective, recovery, deterrent, governance, physical, administrative, technical, and compensating controls.",
  "Compare fictional control options using risk reduction, business fit, evidence quality, dependency impact, implementation effort, operating cost, validation, and sustainability.",
  "Build a fictional treatment plan with owners, approvals, sequence, deadlines, validation, rollback, monitoring, residual-risk decisions, and closure evidence.",
  "Create a portfolio-safe fictional risk-treatment package with a treatment matrix, control rationale, control map, implementation plan, exceptions, findings, and leadership communication."
];
const vocabulary = [
  [
    "Risk treatment",
    "A fictional decision to avoid, reduce, transfer, accept, or monitor a risk using approved controls, ownership, evidence, funding, validation, and review."
  ],
  [
    "Risk avoidance",
    "A fictional decision to stop, remove, or not begin an activity when the risk exceeds acceptable business value or cannot be controlled adequately."
  ],
  [
    "Risk reduction",
    "A fictional decision to lower likelihood, impact, exposure, or uncertainty through one or more controls."
  ],
  [
    "Risk transfer",
    "A fictional decision to move part of the financial, operational, contractual, or service consequence to another party while retaining accountability for remaining risk."
  ],
  [
    "Risk acceptance",
    "A fictional authorized decision to retain residual risk for a defined scope, reason, period, owner, and review condition."
  ],
  [
    "Risk monitoring",
    "A fictional decision to observe a risk, control, dependency, indicator, or environmental change before or alongside another treatment."
  ],
  [
    "Preventive control",
    "A fictional safeguard intended to stop or reduce the chance of an unwanted event before it occurs."
  ],
  [
    "Detective control",
    "A fictional safeguard intended to identify an event, control failure, drift, or suspicious condition."
  ],
  [
    "Corrective control",
    "A fictional safeguard intended to fix a weakness, restore an approved state, or reduce recurrence after detection."
  ],
  [
    "Recovery control",
    "A fictional safeguard intended to restore services, data, identities, processes, communication, or business capability after disruption."
  ],
  [
    "Compensating control",
    "A fictional alternate safeguard used when the preferred control is not practical, provided it addresses the same risk objective within an approved scope."
  ],
  [
    "Control objective",
    "A fictional statement describing the security or business outcome a control must achieve."
  ],
  [
    "Control design",
    "A fictional description of how a control should work, who owns it, where it applies, which evidence it produces, and how it is tested."
  ],
  [
    "Control effectiveness",
    "A fictional judgment about whether a control is appropriately designed, implemented, operating, monitored, and reducing risk as intended."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after selected controls, dependencies, limitations, exceptions, and uncertainty are considered."
  ],
  [
    "Control assurance",
    "Fictional evidence that a control is designed, operating, tested, monitored, reviewed, and improved by accountable owners."
  ]
];
const treatmentOptions = [
  {
    "option": "Avoid",
    "when": "The fictional activity creates risk beyond appetite, offers limited business value, cannot be controlled reasonably, or depends on an unacceptable condition.",
    "example": "Retire the unsupported legacy export path instead of continuing to expose confidential data through an obsolete workflow.",
    "evidence": "Business-value review, risk scenario, control limits, cost, dependencies, alternatives, owner decision, and retirement plan.",
    "limit": "Avoidance may introduce operational, user, contractual, or transition effects that still require planning."
  },
  {
    "option": "Reduce",
    "when": "The fictional activity remains valuable and practical controls can lower likelihood, impact, exposure, or uncertainty.",
    "example": "Expire stale supplier access, reduce role scope, enable monitoring, strengthen review, and validate offboarding.",
    "evidence": "Control design, owner, implementation plan, validation, monitoring, rollback, operating evidence, and residual-risk estimate.",
    "limit": "Reduction rarely removes all risk and may create dependencies or unintended service effects."
  },
  {
    "option": "Transfer",
    "when": "A fictional contract, insurance concept, managed service, supplier obligation, or alternate provider can absorb part of the consequence or operation.",
    "example": "Use a fictional managed recovery provider with documented restoration duties and service commitments.",
    "evidence": "Contract scope, responsibility matrix, service level, incident duties, evidence rights, testing, exit plan, and retained-risk record.",
    "limit": "Accountability, data protection, oversight, and residual risk cannot be transferred completely."
  },
  {
    "option": "Accept",
    "when": "The fictional residual risk is within appetite, treatment cost exceeds benefit, temporary constraints exist, or the risk is low and monitored.",
    "example": "Accept a short-term reporting delay while a replacement control is implemented under a six-week approved exception.",
    "evidence": "Risk rationale, owner authority, scope, duration, controls, impact, residual risk, review trigger, expiration, and approval.",
    "limit": "Acceptance without authority, expiration, monitoring, and reassessment becomes unmanaged risk."
  },
  {
    "option": "Monitor",
    "when": "The fictional risk is changing, evidence is incomplete, exposure is low, controls are healthy, or a decision depends on a future trigger.",
    "example": "Monitor a low-volume supplier connection while collecting complete activity evidence and confirming business need.",
    "evidence": "Indicators, thresholds, sources, source health, owner, review cadence, escalation trigger, and decision deadline.",
    "limit": "Monitoring is not passive delay and does not replace action when supported risk exceeds tolerance."
  }
];
const controlFamilies = [
  {
    "family": "Governance and policy controls",
    "purpose": "Define fictional direction, authority, ownership, exceptions, escalation, review, and accountability.",
    "examples": "Policy approval, risk authority, exception process, responsibility matrix, review calendar, and decision log.",
    "evidence": "Approved documents, owner records, decisions, reviews, exceptions, escalation outcomes, and closure records.",
    "failure": "Requirements exist without accountable decisions or current ownership."
  },
  {
    "family": "Administrative and process controls",
    "purpose": "Standardize fictional onboarding, offboarding, access review, change, supplier review, incident response, backup, and recovery activities.",
    "examples": "Procedures, checklists, approvals, separation of duties, training, ticket workflows, and periodic reviews.",
    "evidence": "Completed records, approvals, training, tickets, reviews, exceptions, and operating metrics.",
    "failure": "Processes are documented but performed inconsistently or without evidence."
  },
  {
    "family": "Identity and access controls",
    "purpose": "Limit fictional access to approved people, services, partners, roles, tasks, times, conditions, and resources.",
    "examples": "Least privilege, temporary activation, strong authentication, federation controls, access review, expiration, and emergency access.",
    "evidence": "Role maps, session records, approvals, access reviews, lifecycle actions, denied tests, and owner validation.",
    "failure": "Broad or stale capability remains beyond current business need."
  },
  {
    "family": "Data-protection controls",
    "purpose": "Protect fictional data through classification, access, encryption, keys, retention, versioning, logging, backup, restore, and approved sharing.",
    "examples": "Data-owner approval, encryption, key separation, object logging, versioning, lifecycle, backup coverage, and restore tests.",
    "evidence": "Configuration, key records, access events, versions, retention, backups, restore results, and owner decisions.",
    "failure": "Important copies, keys, retention paths, or recovery requirements remain unprotected."
  },
  {
    "family": "Network and architecture controls",
    "purpose": "Limit fictional reachability, segmentation, egress, trust paths, administrative access, and alternate routes.",
    "examples": "Private endpoints, narrow routes, segmentation, egress restriction, management zones, service policies, and tested deny paths.",
    "evidence": "Architecture, routes, effective reachability, rules, flow records, change history, tests, and rollback.",
    "failure": "A wider path remains even though a narrow approved path exists."
  },
  {
    "family": "Monitoring and detection controls",
    "purpose": "Identify fictional access, changes, failures, drift, supplier activity, control exceptions, incidents, and recovery problems.",
    "examples": "Audit logs, source-health monitoring, alerts, detection logic, review queues, dashboards, thresholds, and escalation.",
    "evidence": "Expected events, delivery, parsing, retention, source health, alerts, investigations, tuning, and action records.",
    "failure": "Blind spots or unreliable metrics weaken detection and validation."
  },
  {
    "family": "Corrective and recovery controls",
    "purpose": "Restore fictional approved state, service, data, identities, controls, and business capability after failure or disruption.",
    "examples": "Rollback, remediation, restore, alternate process, reconfiguration, recovery exercise, user validation, and lessons learned.",
    "evidence": "Action logs, prior state, recovery points, restore tests, user checks, monitoring, owner signoff, and closure.",
    "failure": "A change is completed without proving service, data, and control recovery."
  },
  {
    "family": "Physical and environmental controls",
    "purpose": "Protect fictional facilities, equipment, people, power, communication, and alternate-work capabilities.",
    "examples": "Controlled entry, equipment protection, alternate site, power resilience, secure storage, and remote-work procedures.",
    "evidence": "Access records, inspections, tests, maintenance, exercises, incident records, and owner review.",
    "failure": "Technical plans assume facilities and people will always remain available."
  }
];
const selectionCriteria = [
  {
    "criterion": "Risk reduction",
    "strong": "The fictional control directly lowers likelihood, impact, exposure, uncertainty, or dependency for the stated scenario.",
    "weak": "The control is popular but does not address the actual risk path.",
    "question": "Which part of the risk scenario does this control change?"
  },
  {
    "criterion": "Business fit",
    "strong": "The fictional control supports required services, users, deadlines, accessibility, legal concepts, and minimum service levels.",
    "weak": "The control reduces risk but makes the approved service unusable.",
    "question": "Can the organization still perform the required business activity?"
  },
  {
    "criterion": "Feasibility",
    "strong": "The fictional control is technically and operationally practical with available people, skills, tools, suppliers, time, and authority.",
    "weak": "The plan depends on capabilities or approvals that do not exist.",
    "question": "Can accountable owners implement and sustain this control?"
  },
  {
    "criterion": "Evidence and confidence",
    "strong": "The fictional control choice is supported by relevant, healthy, current, traceable evidence with documented limitations.",
    "weak": "The control is chosen from assumption or one unverified alert.",
    "question": "How strongly does the evidence support the treatment choice?"
  },
  {
    "criterion": "Dependency impact",
    "strong": "The fictional control accounts for identities, data, networks, suppliers, users, recovery, monitoring, and alternate processes.",
    "weak": "The control breaks an undocumented dependency or creates a new concentration risk.",
    "question": "Which connected services or owners could be affected?"
  },
  {
    "criterion": "Validation and rollback",
    "strong": "The fictional control has approved tests, expected allowed and denied outcomes, monitoring, rollback, and decision thresholds.",
    "weak": "The control is deployed globally with no staged test or reversal plan.",
    "question": "How will success, failure, and safe reversal be proven?"
  },
  {
    "criterion": "Sustainability",
    "strong": "The fictional control has clear ownership, operating procedure, funding, maintenance, training, metrics, review, and lifecycle support.",
    "weak": "The control works once but cannot be maintained.",
    "question": "Who will operate, monitor, fund, and review the control over time?"
  },
  {
    "criterion": "Residual risk and assurance",
    "strong": "The fictional remaining risk, evidence confidence, exception need, owner authority, review date, and closure criteria are documented.",
    "weak": "The treatment is called complete without evaluating what remains.",
    "question": "What risk remains, who accepts it, and what proves closure?"
  }
];
const treatmentRecords = [
  {
    "id": "NBR-TRT-01",
    "risk": "Expired supplier access exception",
    "treatment": "Reduce",
    "controls": "Confirm sponsor, expire or renew account, narrow service access, enable complete activity logging, monitor, and validate offboarding.",
    "owner": "Third-Party Risk Owner",
    "validation": "Supplier access fails after removal or matches renewed scope; approved internal service continues.",
    "residual": "Low-Medium after verified removal or narrow renewal.",
    "limit": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-TRT-02",
    "risk": "Critical reporting service lacks business recovery owner",
    "treatment": "Reduce",
    "controls": "Assign business owner, confirm RTO and minimum service, test user validation, document escalation, and review residual recovery risk.",
    "owner": "Business Service Executive",
    "validation": "Business owner approves recovery priority and participates in the next exercise.",
    "residual": "Low after ownership and exercise evidence.",
    "limit": "Technical recovery capability already exists."
  },
  {
    "id": "NBR-TRT-03",
    "risk": "Incomplete quarterly access review",
    "treatment": "Reduce",
    "controls": "Complete overdue review, prioritize privileged access, document decisions, automate reminders, escalate delays, and monitor completion.",
    "owner": "Identity Governance",
    "validation": "All scoped roles are reviewed, decisions are recorded, and inappropriate access is removed if identified.",
    "residual": "Low-Medium depending on findings.",
    "limit": "No specific inappropriate access is confirmed before review."
  },
  {
    "id": "NBR-TRT-04",
    "risk": "Leadership compliance metric has unclear denominator",
    "treatment": "Reduce",
    "controls": "Define scope, denominator, exclusions, source health, confidence, trend, target, owner, and decision use.",
    "owner": "Security Metrics Owner",
    "validation": "A reviewer can reconstruct the measure and identify included and excluded systems.",
    "residual": "Low after corrected reporting.",
    "limit": "The measured controls may already perform strongly."
  },
  {
    "id": "NBR-TRT-05",
    "risk": "Supplier offboarding recurrence",
    "treatment": "Reduce",
    "controls": "Assign policy, procedure, control, sponsor, identity, monitoring, and review owners; test the process; track exceptions.",
    "owner": "Governance Improvement Lead",
    "validation": "A fictional offboarding exercise removes access, records evidence, notifies owners, and closes within the target.",
    "residual": "Medium-Low after repeated evidence.",
    "limit": "Current operational changes may be partially undocumented."
  },
  {
    "id": "NBR-TRT-06",
    "risk": "Historical support collection outside backup scope",
    "treatment": "Accept or Reduce",
    "controls": "Validate reproducibility, reconstruction time, classification, uniqueness, retention, owner approval, or add backup coverage.",
    "owner": "Support Data Owner",
    "validation": "A reconstruction or restore test meets the approved recovery objective.",
    "residual": "Depends on validation outcome.",
    "limit": "No current data loss is confirmed."
  },
  {
    "id": "NBR-TRT-07",
    "risk": "Standing privileged cloud-security role",
    "treatment": "Reduce",
    "controls": "Move to temporary activation, preserve emergency access, monitor sessions, test response timing, and review exceptions.",
    "owner": "Identity Governance",
    "validation": "Approved tasks succeed within target time; standing access is absent; emergency procedure works.",
    "residual": "Low-Medium after testing.",
    "limit": "One emergency duty may require a documented exception."
  },
  {
    "id": "NBR-TRT-08",
    "risk": "Unsupported legacy export path",
    "treatment": "Avoid",
    "controls": "Retire the legacy path, migrate approved workflows, preserve required records, validate users, monitor, and complete decommissioning.",
    "owner": "Application Service Owner",
    "validation": "Approved exports use the replacement path and the legacy route, role, and storage dependency are removed.",
    "residual": "Low after complete retirement.",
    "limit": "Transition effects require staged planning and user communication."
  }
];
const implementationSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional treatment decision",
    "detail": "Restate the risk scenario, asset, owner, scope, evidence, likelihood, impact, confidence, authority, appetite, and required decision.",
    "output": "Treatment decision record."
  },
  {
    "step": "2",
    "title": "Compare treatment options",
    "detail": "Evaluate fictional avoidance, reduction, transfer, acceptance, and monitoring using business value, feasibility, dependencies, cost, uncertainty, and timing.",
    "output": "Treatment-options matrix."
  },
  {
    "step": "3",
    "title": "Select control objectives",
    "detail": "Define the fictional outcome each preventive, detective, corrective, recovery, governance, technical, administrative, or compensating control must achieve.",
    "output": "Control-objective map."
  },
  {
    "step": "4",
    "title": "Design the control set",
    "detail": "Assign fictional scope, owner, implementation, evidence, dependencies, procedure, training, metrics, exception path, and lifecycle.",
    "output": "Control-design package."
  },
  {
    "step": "5",
    "title": "Plan sequence and change safety",
    "detail": "Document fictional prerequisites, staged rollout, validation, expected allowed and denied outcomes, rollback, communication, and monitoring.",
    "output": "Implementation and rollback plan."
  },
  {
    "step": "6",
    "title": "Validate effectiveness",
    "detail": "Test fictional design, operation, evidence, user function, business fit, failure behavior, recovery, source health, and owner approval.",
    "output": "Control-validation record."
  },
  {
    "step": "7",
    "title": "Evaluate residual risk",
    "detail": "Reassess fictional likelihood, impact, confidence, limitations, exceptions, dependencies, and remaining decisions after control validation.",
    "output": "Residual-risk decision."
  },
  {
    "step": "8",
    "title": "Monitor and close",
    "detail": "Track fictional metrics, failures, incidents, drift, exceptions, reviews, improvement actions, reassessment triggers, and closure evidence.",
    "output": "Treatment assurance and closure package."
  }
];
const findings = [
  {
    "id": "NBR-TRT-F01",
    "statement": "The fictional supplier-access risk should be reduced rather than merely monitored because the exception expired, the account remains active, and authorized owner action is available.",
    "support": "Expired exception, active account, completed project, sponsor record, limited service scope, incomplete activity evidence, and offboarding procedure.",
    "alternative": "A current business need may justify narrow renewal after formal approval.",
    "confidence": "High",
    "limitation": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-TRT-F02",
    "statement": "The fictional historical support collection requires either validated risk acceptance or added recovery protection; an undocumented backup exclusion is not a complete treatment.",
    "support": "Data classification, backup map, recovery objective, reproducibility claim, retention, owner record, and missing reconstruction test.",
    "alternative": "The collection may be safely reproducible within the approved time target.",
    "confidence": "Medium-High",
    "limitation": "No current data loss is confirmed."
  },
  {
    "id": "NBR-TRT-F03",
    "statement": "The fictional standing privileged role should move to temporary activation only after response timing, emergency access, session monitoring, and service dependencies are tested.",
    "support": "Role scope, task frequency, temporary activation capability, emergency process, session evidence, and owner review.",
    "alternative": "A narrow standing emergency role may remain necessary for one documented duty.",
    "confidence": "Medium-High",
    "limitation": "Availability impact is not fully known before staged validation."
  },
  {
    "id": "NBR-TRT-F04",
    "statement": "The fictional legacy export path is a strong avoidance candidate because it provides limited current value and requires broad access, wider routing, and unsupported dependencies.",
    "support": "Workflow inventory, user demand, role scope, network path, storage dependency, maintenance status, and replacement design.",
    "alternative": "A small user group may still require a temporary migration period.",
    "confidence": "High",
    "limitation": "Retirement must preserve required records and approved user workflows."
  },
  {
    "id": "NBR-TRT-F05",
    "statement": "The fictional treatment plan should prioritize active stale access and missing ownership before metric redesign and lower-impact documentation updates.",
    "support": "Current access capability, expired approval, critical recovery ownership gap, decision deadlines, business impact, and remediation readiness.",
    "alternative": "Leadership may reorder work during a major reporting deadline or active incident.",
    "confidence": "High",
    "limitation": "Final order requires fictional risk-owner approval."
  },
  {
    "id": "NBR-TRT-F06",
    "statement": "No fictional treatment can be considered complete until control effectiveness, business function, residual risk, owner approval, monitoring, and closure evidence are validated.",
    "support": "Treatment records, failed-change lessons, control objectives, operating evidence, recovery needs, exception rules, and review requirements.",
    "alternative": "Emergency containment may temporarily precede full validation when immediate risk requires action.",
    "confidence": "High",
    "limitation": "Emergency actions still require later review and evidence."
  }
];
const commonMistakes = [
  "Choosing a fictional control before defining the exact risk scenario and control objective.",
  "Treating avoidance, reduction, transfer, acceptance, and monitoring as interchangeable.",
  "Assuming risk transfer removes organizational accountability.",
  "Accepting fictional residual risk without documented authority, scope, reason, duration, controls, monitoring, and review.",
  "Calling monitoring a treatment when no thresholds, source health, owner, trigger, or decision deadline exist.",
  "Selecting a technically strong control that breaks required business service or accessibility.",
  "Deploying identity, network, storage, or process changes globally without staged validation and rollback.",
  "Listing fictional controls without checking design, implementation, operation, evidence, monitoring, ownership, and sustainability.",
  "Using a compensating control that does not address the same risk objective as the preferred control.",
  "Treating a completed ticket or configuration change as proof of control effectiveness.",
  "Ignoring people, supplier, process, facility, recovery, and communication controls because the risk appears technical.",
  "Failing to reassess residual likelihood, impact, confidence, and limitations after implementation.",
  "Closing treatment while exceptions, missing evidence, failed tests, ownership gaps, or review actions remain open.",
  "Using or exposing any real company controls, internal architecture, supplier contract, risk acceptance, employee record, school data, credential, incident evidence, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What is fictional risk treatment?",
    "choices": [
      "An approved decision to avoid, reduce, transfer, accept, or monitor risk using controls, owners, evidence, validation, residual-risk review, and follow-up.",
      "A severity score only.",
      "A guarantee that all risk is removed.",
      "A technical change with no business owner."
    ],
    "answer": 0,
    "explanation": "Risk treatment combines a decision, controls, accountability, evidence, and review."
  },
  {
    "question": "When is fictional risk avoidance most appropriate?",
    "choices": [
      "When the activity provides limited value, exceeds appetite, or cannot be controlled reasonably.",
      "Whenever any risk exists.",
      "Only after an incident occurs.",
      "When monitoring is unavailable."
    ],
    "answer": 0,
    "explanation": "Avoidance removes the activity or condition when keeping it is not justified."
  },
  {
    "question": "What does fictional risk transfer accomplish?",
    "choices": [
      "It moves part of a consequence or operational duty to another party while the organization retains oversight and residual risk.",
      "It removes all accountability.",
      "It proves the supplier is secure.",
      "It eliminates the need for contracts and monitoring."
    ],
    "answer": 0,
    "explanation": "Transfer changes responsibility for part of the consequence but not all accountability."
  },
  {
    "question": "What makes a fictional compensating control defensible?",
    "choices": [
      "It addresses the same control objective with documented scope, evidence, effectiveness, owner, residual risk, and review.",
      "It is cheaper than the preferred control.",
      "It has no expiration or owner.",
      "It avoids validation."
    ],
    "answer": 0,
    "explanation": "A compensating control must meaningfully address the original risk objective."
  },
  {
    "question": "What should happen before a major fictional control change?",
    "choices": [
      "Confirm dependencies, authority, prerequisites, staged testing, expected outcomes, monitoring, communication, and rollback.",
      "Deploy it globally immediately.",
      "Delete the prior configuration.",
      "Assume business function will continue."
    ],
    "answer": 0,
    "explanation": "Change safety requires dependency-aware and reversible implementation."
  },
  {
    "question": "Who should normally accept fictional residual business risk?",
    "choices": [
      "An authorized risk owner using current evidence, control results, confidence, limitations, and a review plan.",
      "Any analyst who implemented the control.",
      "The product vendor.",
      "The person who opened the ticket."
    ],
    "answer": 0,
    "explanation": "Residual-risk acceptance is an authorized business decision."
  },
  {
    "question": "What makes a fictional treatment finding defensible?",
    "choices": [
      "It links the scenario, options, selected controls, evidence, dependencies, business fit, validation, rollback, residual risk, owner, and review.",
      "It relies on one control label.",
      "It assumes implementation proves effectiveness.",
      "It hides remaining risk."
    ],
    "answer": 0,
    "explanation": "Defensible treatment reasoning shows why the selected option works and what remains."
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

export default function RiskTreatmentControlSelectionPage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14.4 Risk Treatment and Control Selection
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders compare fictional avoidance, reduction,
            transfer, acceptance, and monitoring while selecting controls that
            are proportionate, evidence-based, business-aware, testable,
            sustainable, and owned.
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
          lessonTitle="Risk Treatment and Control Selection"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge risks, controls, owners, evidence, treatment decisions, and validation records.",
            "I will not request, expose, or evaluate any real company control design, internal architecture, supplier contract, risk acceptance, employee record, school data, credential, incident evidence, or confidential business information.",
            "I will distinguish avoidance, reduction, transfer, acceptance, monitoring, control design, control operation, control effectiveness, and residual risk.",
            "I will not treat a completed change or ticket as proof that risk was reduced.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Strongest Control Is Not Always the Safest Control"
        >
          <p className="leading-8">
            The fictional Northbridge team wants to remove broad supplier,
            privileged, network, and storage access immediately. Some actions
            are clearly necessary, but an earlier least-privilege change broke
            an approved export workflow because a hidden dependency was not
            mapped. Strong risk treatment balances risk reduction with business
            need, evidence, dependencies, authority, staged validation,
            rollback, monitoring, recovery, sustainability, and residual risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak treatment
              </p>

              <p className="mt-2 leading-7">
                Choose the strictest control, deploy it globally, assume the
                ticket proves success, ignore dependencies, and close the risk
                without reviewing what remains.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional treatment
              </p>

              <p className="mt-2 leading-7">
                Compare options, define control objectives, assign owners,
                stage implementation, validate approved and denied behavior,
                preserve rollback, monitor, and obtain residual-risk approval.
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
          title="Treatment Decisions Determine Which Risks Are Changed, Retained, Shared, Watched, or Removed"
        >
          <p className="leading-8">
            Fictional organizations have limited time, funding, staff, tools,
            and authority. They must choose controls that reduce practical risk
            without creating a larger service, privacy, accessibility,
            recovery, supplier, or operational problem. A treatment plan is
            defensible only when the organization can explain why the option
            was selected, how it will work, how it will be tested, what it
            costs, who owns it, and what risk remains.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Scenario–Option–Control–Assurance Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Scenario", "Which fictional asset, threat, vulnerability, exposure, control condition, likelihood, impact, confidence, and owner define the risk?"],
              ["Option", "Should the fictional risk be avoided, reduced, transferred, accepted, monitored, or treated through a combination?"],
              ["Control", "Which fictional preventive, detective, corrective, recovery, governance, administrative, technical, physical, or compensating safeguards fit?"],
              ["Assurance", "Which fictional evidence, validation, rollback, monitoring, metrics, residual-risk decision, review, and closure prove the treatment works?"],
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
            Risk Treatment, Controls, and Assurance Terms
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
            Treatment Options
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Five Ways to Treat Fictional Risk
          </h2>

          <div className="mt-6 grid gap-5">
            {treatmentOptions.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.option}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["When it fits", item.when],
                    ["Fictional example", item.example],
                    ["Required evidence", item.evidence],
                    ["Important limit", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.option}-${label}`}
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
            Control Families
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Control Families for Fictional Treatment Plans
          </h2>

          <div className="mt-6 grid gap-5">
            {controlFamilies.map((item) => (
              <article
                key={item.family}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.family}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Examples
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure risk
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.failure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Selection Criteria
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Selecting a Fictional Control
          </h2>

          <div className="mt-6 grid gap-5">
            {selectionCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.criterion}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong selection
                    </p>

                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak selection
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
            Treatment Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Treatment Records
          </h2>

          <div className="mt-6 grid gap-5">
            {treatmentRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.risk}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.treatment}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Selected controls", item.controls],
                    ["Treatment owner", item.owner],
                    ["Validation", item.validation],
                    ["Residual risk", item.residual],
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
            Implementation Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Move from Risk Decision to Control Assurance
          </h2>

          <div className="mt-6 grid gap-4">
            {implementationSteps.map((item) => (
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
          title="Fake Northbridge Risk Treatment Dashboard"
          subtitle="Training dashboard for fictional treatment and control evidence only."
          metrics={[
            {
              label: "Treatment records",
              value: "8",
              note: "Supplier access, recovery ownership, access review, metrics, offboarding, backup, privilege, and legacy workflow risks are mapped.",
            },
            {
              label: "Immediate reductions",
              value: "4",
              note: "Stale access, missing ownership, incomplete access review, and unsupported broad privilege require prioritized action.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The supplied fictional evidence supports risk and control gaps but no confirmed incident or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Risk Treatment Deployed without Dependency Validation"
          severity="High"
          time="1:20 PM"
          source="Fake Risk Treatment Console"
          details="A fictional least-privilege role reduction was staged, but the approved export workflow failed because one metadata dependency was not documented in the control design."
          recommendation="Preserve the failed test as evidence, roll back, map the dependency, confirm whether it remains necessary, redesign the workflow, restore monitoring, retest approved success and denied excess access, document residual risk, and do not assume implementation alone proves control effectiveness."
        />

        <FakeLogPanel
          title="Fake Northbridge Treatment Review Records"
          logs={[
            "09:00 DECISION risk='supplier stale access' treatment='Reduce'",
            "09:08 CONTROL sponsor-review='required' account-expiration='required'",
            "09:16 VALIDATE supplier-access='remove or narrow renew'",
            "09:24 DECISION recovery-owner-gap treatment='Reduce'",
            "09:32 CONTROL business-owner='assign' exercise='schedule'",
            "09:40 DECISION historical-backup treatment='Accept or Reduce'",
            "09:48 EVIDENCE reconstruction-test='missing'",
            "09:56 DECISION privileged-role treatment='Reduce'",
            "10:04 CONTROL temporary-activation='planned'",
            "10:12 DECISION legacy-export treatment='Avoid'",
            "10:20 CHANGE role-reduction='staged'",
            "10:28 TEST export='failed' dependency='undocumented'",
            "10:30 ROLLBACK role='restored'",
            "10:40 REDESIGN dependency='replacement planned'",
            "10:52 ASSURANCE implementation='not equal effectiveness'",
            "11:00 CLOSE requires='validation + residual risk + owner'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Treatment Findings and Limits
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
          title="What Does the Failed Control Test Mean?"
          evidence={[
            "The fictional export role had broader storage access than the redesigned workflow appeared to require.",
            "A staged role reduction caused the approved export job to fail.",
            "Application review identified an undocumented metadata dependency.",
            "The change was rolled back.",
            "No unauthorized access or incident is shown.",
            "The dependency can be replaced and the narrower role can be retested.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The failed test shows that the control design missed a dependency; the team should preserve the evidence, roll back, redesign, and retest rather than abandon the risk-reduction goal.",
            "The broad role is permanently justified.",
            "The application was compromised.",
            "The risk never existed.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion uses failed validation to improve the treatment while preserving service and the original risk objective."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Risk Treatment and Control Selection"
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
          title="Build the Northbridge Risk Treatment and Control Selection Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Treatment Options, Control Objectives, Validation, Residual Risk, and Assurance
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end risk-treatment and control-selection review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Treatment charter with risk scenario, scope, owners, authority, evidence, appetite, privacy, and decisions.</li>
                <li>Avoid, reduce, transfer, accept, and monitor options matrix.</li>
                <li>Preventive, detective, corrective, recovery, governance, administrative, technical, physical, and compensating control map.</li>
                <li>Control objectives, design, owners, procedures, evidence, dependencies, metrics, and lifecycle.</li>
                <li>Implementation plan with prerequisites, sequence, staged tests, communication, monitoring, and rollback.</li>
                <li>Control-effectiveness validation and failed-test analysis.</li>
                <li>Residual-risk decision with confidence, limitations, exceptions, review triggers, and approval.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real company controls, architecture, supplier
            contracts, employee records, school data, credentials, incidents,
            or confidential business information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Preferred Control Would Break a Required Workflow"
          scenario="The fictional strictest role reduction would stop approved exports, but a narrower redesign can remove unnecessary access while preserving the business function."
          choices={[
            {
              label: "Choice A",
              response:
                "Select the narrower control set, document the objective, replace the dependency, stage the change, test approved and denied behavior, preserve rollback, monitor, and reassess residual risk.",
              outcome:
                "Best treatment choice. Risk reduction and business fit are both validated.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Deploy the strictest control and accept the outage without approval.",
              outcome:
                "Unsafe. The control creates known business impact outside authority.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep the broad role permanently because one test failed.",
              outcome:
                "Weak. The risk-reduction goal remains achievable through redesign.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Historical Data Collection May Be Reproducible"
          scenario="The fictional support data owner believes an older collection can be rebuilt, but no reconstruction test exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Compare acceptance and reduction, validate classification, uniqueness, reconstruction source, time, completeness, cost, owner authority, recovery target, monitoring, and residual risk before deciding.",
              outcome:
                "Best treatment choice. The decision is based on recovery evidence rather than assumption.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Accept the risk permanently because the data is old.",
              outcome:
                "Unsupported. Age alone does not establish low value or recoverability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Claim the data has already been lost.",
              outcome:
                "Unsupported. The evidence describes a treatment question, not confirmed loss.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Risk Treatment and Control Selection Checklist"
          items={[
            "I can compare fictional avoidance, reduction, transfer, acceptance, and monitoring.",
            "I can distinguish fictional preventive, detective, corrective, recovery, governance, administrative, technical, physical, and compensating controls.",
            "I can define a fictional control objective before selecting a control.",
            "I can compare fictional control options using risk reduction, business fit, feasibility, evidence, dependencies, validation, rollback, sustainability, and residual risk.",
            "I can assign fictional risk, treatment, control, evidence, implementation, monitoring, review, and approval owners.",
            "I can design fictional controls with scope, procedure, training, evidence, metrics, exceptions, lifecycle, and assurance.",
            "I can stage fictional changes and test expected allowed behavior, expected denied behavior, business function, monitoring, and rollback.",
            "I can distinguish implementation from control effectiveness.",
            "I can document fictional residual risk, confidence, limitations, exceptions, authority, review triggers, and closure evidence.",
            "I will use only fictional evidence and never expose real control designs, architecture, supplier contracts, employee data, school records, credentials, incidents, or confidential business information.",
          ]}
        />

        <MiniQuiz
          title="I14.4 Mini Quiz: Risk Treatment and Control Selection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Risk Treatment and Control Selection Package for Northbridge. Include the treatment charter, option comparison, control objectives, control-family map, business-fit analysis, evidence and confidence review, dependency analysis, implementation sequence, staged validation, expected allowed and denied behavior, rollback, monitoring, control assurance, residual-risk decision, exceptions, owners, review triggers, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional risks, assets, controls, owners, suppliers, evidence, dates, tests, metrics, and decisions.",
            "Do not treat a completed implementation, strict control, supplier contract, or transferred duty as proof that risk is eliminated.",
            "Make every control traceable to the exact risk objective and every treatment traceable to an authorized owner.",
            "Preserve failed tests, dependencies, alternatives, residual risk, and the difference between technical control operation and business risk acceptance.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Risk treatment includes avoidance, reduction, transfer, acceptance, and monitoring.",
            "Control selection should begin with the exact risk scenario and control objective.",
            "The strongest control is not always the safest control if it breaks required business service or recovery.",
            "Implementation does not prove control effectiveness.",
            "Risk transfer never removes all organizational accountability.",
            "Residual risk requires authorized ownership, current evidence, documented limits, and reassessment.",
            "Portfolio artifacts should use fully fictional treatment evidence and never expose real organizational records.",
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