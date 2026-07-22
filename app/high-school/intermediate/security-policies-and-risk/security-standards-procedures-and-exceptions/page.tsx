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
const previousLesson = `${modulePath}/risk-treatment-and-control-selection`;
const nextLesson = `${modulePath}/third-party-and-supply-chain-risk`;

const objectives = [
  "Explain how fictional policies, standards, baselines, procedures, guidelines, controls, exceptions, waivers, and approvals form one security-governance hierarchy.",
  "Distinguish fictional mandatory requirements from recommended practices, operating instructions, temporary deviations, compensating controls, and residual-risk decisions.",
  "Build a fictional document hierarchy connecting business direction, measurable requirements, implementation steps, evidence, ownership, review cycles, and enforcement.",
  "Evaluate fictional exception requests through scope, business reason, control objective, compensating controls, risk, authority, expiration, monitoring, validation, and removal planning.",
  "Create a portfolio-safe fictional standards, procedures, and exceptions package with document maps, review records, findings, action plans, and leadership communication."
];
const vocabulary = [
  [
    "Policy",
    "A fictional leadership-approved statement of required security direction, scope, accountability, and expected outcomes."
  ],
  [
    "Standard",
    "A fictional mandatory and measurable rule that translates policy into specific requirements."
  ],
  [
    "Baseline",
    "A fictional approved minimum configuration or control state for a defined asset, identity, service, data class, or technology type."
  ],
  [
    "Procedure",
    "A fictional step-by-step method for carrying out a policy, standard, control, review, change, incident, or recovery task."
  ],
  [
    "Guideline",
    "A fictional recommended practice that supports consistent decisions while allowing justified flexibility."
  ],
  [
    "Control objective",
    "A fictional statement describing the security or business outcome a safeguard must achieve."
  ],
  [
    "Control evidence",
    "A fictional record showing whether a control is designed, implemented, operated, tested, monitored, reviewed, and improved."
  ],
  [
    "Exception",
    "A fictional authorized temporary departure from a policy, standard, baseline, or control requirement."
  ],
  [
    "Waiver",
    "A fictional formal decision that a requirement will not apply to a defined scope, with authority, rationale, controls, and review."
  ],
  [
    "Compensating control",
    "A fictional alternate safeguard that addresses the same control objective when the preferred control is not practical."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after current and compensating controls, dependencies, limitations, and uncertainty are considered."
  ],
  [
    "Exception owner",
    "The fictional person accountable for business need, scope, actions, monitoring, expiration, and closure."
  ],
  [
    "Approval authority",
    "The fictional person or committee permitted to approve a document, exception, waiver, or residual-risk decision."
  ],
  [
    "Review cycle",
    "The fictional interval or trigger for checking whether a document, control, exception, or requirement remains current and effective."
  ],
  [
    "Sunset plan",
    "A fictional sequence for removing an exception, retiring a workaround, implementing the preferred control, and confirming closure."
  ],
  [
    "Document hierarchy",
    "A fictional map showing how policy direction flows into standards, baselines, procedures, guidelines, controls, evidence, exceptions, and reviews."
  ]
];
const treatmentOptions = [
  {
    "option": "Policy direction",
    "when": "States fictional mandatory direction, scope, accountability, and expected outcomes.",
    "example": "Northbridge requires confidential learning records to use approved access, encryption, monitoring, retention, and recovery controls.",
    "evidence": "Approved version, leadership approval, effective date, audience, communication, review date, and exception reference.",
    "limit": "Policy language may be too broad to test without standards and controls."
  },
  {
    "option": "Standards and baselines",
    "when": "Translate policy into measurable requirements and minimum approved states.",
    "example": "Confidential storage must use approved encryption, named ownership, object logging, versioning, retention, and tested recovery.",
    "evidence": "Requirement identifiers, scope, thresholds, control mapping, configuration profile, validation, and approval.",
    "limit": "A copied baseline may not fit every service, dependency, or business need."
  },
  {
    "option": "Procedures and guidelines",
    "when": "Explain repeatable steps and recommended decision practices.",
    "example": "The supplier offboarding procedure lists sponsor confirmation, access removal, evidence capture, monitoring review, notification, and closure.",
    "evidence": "Step list, roles, tools, approvals, records, timing, escalation, training, and review history.",
    "limit": "A procedure may be current on paper but misaligned with actual tools and workflow."
  },
  {
    "option": "Controls and evidence",
    "when": "Operate the preventive, detective, corrective, recovery, governance, administrative, technical, or physical safeguard.",
    "example": "Temporary privileged activation limits standing access and produces approval and session evidence.",
    "evidence": "Design, configuration, operating records, tests, metrics, failures, remediation, monitoring, and assurance.",
    "limit": "A stated control does not prove effective operation."
  },
  {
    "option": "Exceptions, waivers, and review",
    "when": "Manage justified deviations and verify that documents and controls remain current and effective.",
    "example": "A sixty-day legacy logging exception uses narrow access, private routing, function logs, daily review, versioning, and a replacement milestone.",
    "evidence": "Requirement, reason, scope, controls, risk, approval, expiration, monitoring, sunset plan, validation, and closure.",
    "limit": "A temporary exception can become unmanaged permanent risk when review and expiration fail."
  }
];
const controlFamilies = [
  {
    "family": "Purpose and control objective",
    "purpose": "Explain the fictional security or business outcome the document must achieve.",
    "examples": "Connect a policy requirement to confidentiality, integrity, availability, privacy, recovery, or accountability.",
    "evidence": "Business objective, risk scenario, policy mapping, owner approval, and control objective.",
    "failure": "Rules appear without explaining the protected outcome."
  },
  {
    "family": "Scope and exclusions",
    "purpose": "Identify affected fictional services, assets, identities, data, suppliers, users, locations, actions, and exclusions.",
    "examples": "Define whether the standard covers production, testing, partners, backups, exports, and legacy systems.",
    "evidence": "Asset inventory, data map, service catalog, supplier list, scope statement, and approved exclusions.",
    "failure": "The document says all systems while important systems are silently excluded."
  },
  {
    "family": "Mandatory language",
    "purpose": "Distinguish fictional must, shall, should, may, recommended, and prohibited statements.",
    "examples": "Use must for approved requirements and should for guidance with justified flexibility.",
    "evidence": "Controlled wording, definitions, reviewer comments, approval history, and communication.",
    "failure": "Teams cannot tell which statements are mandatory."
  },
  {
    "family": "Ownership and authority",
    "purpose": "Name fictional content, control, asset, data, risk, approval, review, exception, and escalation owners.",
    "examples": "Assign a policy owner, control owner, risk owner, reviewer, and approval authority.",
    "evidence": "Responsibility matrix, charters, approvals, owner records, and escalation paths.",
    "failure": "The document assigns everything to security without accountable roles."
  },
  {
    "family": "Measurability and evidence",
    "purpose": "Define fictional criteria, frequency, thresholds, expected outcomes, records, and validation.",
    "examples": "Require quarterly access review with scope, completion target, decisions, and evidence retention.",
    "evidence": "Control records, test results, metrics, source health, exceptions, and validation notes.",
    "failure": "The document requires strong or regular security without measurable criteria."
  },
  {
    "family": "Operational and business fit",
    "purpose": "Ensure fictional requirements match tools, staffing, dependencies, accessibility, workflow, and minimum service.",
    "examples": "Stage a role reduction so approved exports continue while excess reads are denied.",
    "evidence": "Process map, dependency review, user validation, test results, rollback, and owner approval.",
    "failure": "The requirement is impossible to perform or creates unapproved disruption."
  },
  {
    "family": "Exception and escalation path",
    "purpose": "Explain how fictional deviations are requested, evaluated, approved, monitored, expired, and removed.",
    "examples": "Require exact requirement, business reason, controls, risk, authority, expiration, and sunset plan.",
    "evidence": "Exception register, approvals, monitoring, milestones, renewals, escalation, and closure records.",
    "failure": "Teams create informal workarounds because no governed path exists."
  },
  {
    "family": "Lifecycle and review",
    "purpose": "Keep fictional documents current through versions, dates, review cycles, change triggers, archive, and retirement.",
    "examples": "Review annually and after major service, supplier, incident, or legal change.",
    "evidence": "Version history, review calendar, change log, approvals, publication, archive, and retirement evidence.",
    "failure": "Obsolete documents remain published with no owner or current review."
  }
];
const selectionCriteria = [
  {
    "criterion": "Requirement and objective",
    "strong": "The fictional request identifies the exact policy, standard, baseline, or control and the outcome it protects.",
    "weak": "The request says security requirement without naming the requirement or objective.",
    "question": "What exact requirement is being deviated from, and why does it exist?"
  },
  {
    "criterion": "Business reason and alternatives",
    "strong": "The fictional reason is specific, current, evidence-supported, and compares practical alternatives.",
    "weak": "The request is based on convenience or an unsupported deadline.",
    "question": "Why can the preferred control not be met, and what alternatives were considered?"
  },
  {
    "criterion": "Narrow scope",
    "strong": "The fictional exception is limited to named assets, identities, data, suppliers, actions, regions, and time periods.",
    "weak": "The request covers an entire environment when only one workflow needs deviation.",
    "question": "What is the smallest scope that supports the approved business need?"
  },
  {
    "criterion": "Compensating controls",
    "strong": "The fictional alternate safeguards address the same objective and are owned, implemented, evidenced, tested, and monitored.",
    "weak": "The listed controls are unrelated or exist only on paper.",
    "question": "How do the alternate controls reduce the same risk?"
  },
  {
    "criterion": "Risk and confidence",
    "strong": "The fictional request records inherent and residual risk, assumptions, evidence, alternatives, confidence, and limitations.",
    "weak": "Possible impact is stated as confirmed harm or uncertainty is hidden.",
    "question": "What risk remains, and how strong is the evidence?"
  },
  {
    "criterion": "Authority and ownership",
    "strong": "The fictional request assigns requester, asset, data, control, risk, approval, review, and escalation owners.",
    "weak": "The requester silently approves their own residual business risk.",
    "question": "Who owns the need, controls, decision, monitoring, and closure?"
  },
  {
    "criterion": "Expiration and sunset",
    "strong": "The fictional request includes start, expiration, milestones, replacement actions, extension rules, and removal criteria.",
    "weak": "The exception renews automatically or has no end state.",
    "question": "When and how will the deviation end?"
  },
  {
    "criterion": "Monitoring and closure",
    "strong": "The fictional request defines indicators, source health, thresholds, review cadence, validation, residual-risk approval, and closure evidence.",
    "weak": "The record closes when a ticket changes without testing business and control outcomes.",
    "question": "What proves the exception remained safe and is truly closed?"
  }
];
const treatmentRecords = [
  {
    "id": "NBR-EXC-01",
    "risk": "Quarterly supplier access review",
    "treatment": "Expired",
    "controls": "Limited service scope and network restriction remain, but complete activity review is pending.",
    "owner": "Third-Party Risk Owner",
    "validation": "Remove the account or formally renew narrow access; confirm approved service and denied former access.",
    "residual": "Medium likelihood, High potential impact, Medium-High confidence.",
    "limit": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-EXC-02",
    "risk": "Object-access logging for confidential storage",
    "treatment": "Active 60 Days",
    "controls": "Narrow service role, private route, function logs, daily review, versioning, and change monitoring.",
    "owner": "Support Data Owner",
    "validation": "Replace the connector, receive expected object events, test retention and access, and close the exception.",
    "residual": "Medium residual risk with Medium confidence.",
    "limit": "Storage activity is partially observable rather than completely unmonitored."
  },
  {
    "id": "NBR-EXC-03",
    "risk": "Temporary privileged activation",
    "treatment": "Draft",
    "controls": "Narrow role, protected emergency account, session logging, approval review, and weekly testing.",
    "owner": "Identity Governance",
    "validation": "Test response timing and approve only the minimum justified scope if a gap remains.",
    "residual": "Residual risk not yet approved.",
    "limit": "The claimed emergency response requirement is incomplete."
  },
  {
    "id": "NBR-EXC-04",
    "risk": "Backup coverage for historical support data",
    "treatment": "Review Required",
    "controls": "Restricted access, version history, source-data preservation, retention, and proposed reconstruction test.",
    "owner": "Support Data Owner",
    "validation": "Complete a timed reconstruction test or add backup coverage.",
    "residual": "Depends on reconstruction evidence and owner decision.",
    "limit": "No current data loss is confirmed."
  },
  {
    "id": "NBR-EXC-05",
    "risk": "Annual Information Security Policy review",
    "treatment": "Overdue",
    "controls": "Existing standards, active controls, risk register, and interim governance review remain in place.",
    "owner": "Security Policy Owner",
    "validation": "Complete review, challenge, approval, publication, communication, and owner acknowledgement.",
    "residual": "Medium governance risk with High confidence.",
    "limit": "The overdue date does not prove the policy is inaccurate or ineffective."
  },
  {
    "id": "NBR-EXC-06",
    "risk": "Full recovery exercise for critical reporting",
    "treatment": "Temporary Deviation",
    "controls": "Technical restore, healthy monitoring, and partial service testing were completed.",
    "owner": "Business Service Executive",
    "validation": "Assign a business validator and repeat the complete exercise within thirty fictional days.",
    "residual": "Medium residual recovery risk.",
    "limit": "Technical recovery succeeded; complete business validation is missing."
  },
  {
    "id": "NBR-EXC-07",
    "risk": "Documented denominator for policy-compliance metric",
    "treatment": "Corrective Action",
    "controls": "Raw control records and the asset inventory remain available for review.",
    "owner": "Security Metrics Owner",
    "validation": "Define scope, denominator, exclusions, confidence, source health, trend, and intended decision use.",
    "residual": "Medium decision-quality risk.",
    "limit": "The measured systems may still perform strongly."
  },
  {
    "id": "NBR-EXC-08",
    "risk": "Current supplier offboarding procedure",
    "treatment": "Improvement Open",
    "controls": "Manual sponsor notification and identity-team review currently operate.",
    "owner": "Governance Improvement Lead",
    "validation": "Assign owners, update the procedure, run an exercise, and validate timely access removal and evidence.",
    "residual": "Medium-High recurrence risk.",
    "limit": "Some operational improvements may exist outside the supplied records."
  }
];
const implementationSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional document question",
    "detail": "State the policy objective, scope, assets, identities, data, suppliers, owners, authority, evidence, review window, privacy limits, and required decision.",
    "output": "Standards and exceptions review charter."
  },
  {
    "step": "2",
    "title": "Map the document hierarchy",
    "detail": "Connect fictional policy, standards, baselines, procedures, guidelines, controls, evidence, exceptions, enforcement, and review.",
    "output": "Document and control hierarchy."
  },
  {
    "step": "3",
    "title": "Validate document quality",
    "detail": "Review fictional purpose, scope, language, ownership, measurability, operational fit, exception process, lifecycle, and current evidence.",
    "output": "Document-quality matrix."
  },
  {
    "step": "4",
    "title": "Review exceptions and waivers",
    "detail": "Evaluate fictional requirement, objective, reason, scope, controls, risk, confidence, authority, expiration, monitoring, and sunset plan.",
    "output": "Exception and waiver register."
  },
  {
    "step": "5",
    "title": "Prioritize gaps",
    "detail": "Compare fictional active exposure, expired approval, business impact, control coverage, evidence quality, dependency, remediation readiness, and deadlines.",
    "output": "Risk-ranked document backlog."
  },
  {
    "step": "6",
    "title": "Assign corrections",
    "detail": "Define fictional policy, standard, procedure, control, risk, asset, data, supplier, review, and approval owners with due dates.",
    "output": "Owned correction plan."
  },
  {
    "step": "7",
    "title": "Validate implementation",
    "detail": "Test fictional business function, required and prohibited behavior, control evidence, monitoring, communication, training, rollback, and residual risk.",
    "output": "Implementation and validation record."
  },
  {
    "step": "8",
    "title": "Close and reassess",
    "detail": "Confirm fictional owner signoff, exception removal, current documents, effective controls, review triggers, lessons learned, and portfolio safety.",
    "output": "Closure and reassessment package."
  }
];
const findings = [
  {
    "id": "NBR-STD-F01",
    "statement": "The fictional supplier-access exception is no longer defensible in its current state because it expired while the account remained active and no renewed approval is supplied.",
    "support": "Exception record, expiration, account status, project closure, sponsor record, access scope, and review procedure.",
    "alternative": "A current business need may justify a narrow renewed exception after authorized review.",
    "confidence": "High",
    "limitation": "No unauthorized use, malicious intent, or disclosure is confirmed."
  },
  {
    "id": "NBR-STD-F02",
    "statement": "The fictional archive-secondary logging exception is defensible only while its compensating controls remain healthy and the connector replacement follows the sixty-day sunset plan.",
    "support": "Logging standard, legacy limitation, narrow role, private route, function logs, daily review, versioning, approval, and milestones.",
    "alternative": "Immediate migration may be possible if application testing succeeds sooner.",
    "confidence": "Medium-High",
    "limitation": "Object activity remains partially observable during the exception."
  },
  {
    "id": "NBR-STD-F03",
    "statement": "The fictional emergency privileged-access exception should not be approved until response timing and the claimed business need are tested.",
    "support": "Draft request, role scope, temporary activation design, emergency process, session logging, owner interview, and missing timing evidence.",
    "alternative": "A narrow standing role may be justified if the tested response objective cannot otherwise be met.",
    "confidence": "Medium",
    "limitation": "The required emergency response time is incomplete."
  },
  {
    "id": "NBR-STD-F04",
    "statement": "The fictional historical backup deviation requires successful reconstruction evidence or added backup coverage before residual risk can be accepted.",
    "support": "Data classification, backup standard, scope map, retention, source records, recovery objective, owner statement, and missing test.",
    "alternative": "The collection may be fully reproducible within the approved recovery window.",
    "confidence": "Medium-High",
    "limitation": "No current data loss or failed reconstruction is confirmed."
  },
  {
    "id": "NBR-STD-F05",
    "statement": "The fictional policy-compliance dashboard should be corrected before leadership uses it for broad decisions because its denominator and exclusions are unclear.",
    "support": "Metric definition, dashboard, asset inventory, excluded systems, control records, and owner response.",
    "alternative": "The reported percentage may be accurate for the measured scope.",
    "confidence": "High",
    "limitation": "The finding concerns interpretation rather than proof of weak controls."
  },
  {
    "id": "NBR-STD-F06",
    "statement": "The safest correction sequence begins with expired access and active exception risk, followed by incomplete recovery and backup decisions, then document and metric improvements.",
    "support": "Active account, expired approval, confidential data, recovery ownership, backup uncertainty, policy review, metric ambiguity, and remediation readiness.",
    "alternative": "An active incident or major business deadline could change the order.",
    "confidence": "High",
    "limitation": "Final priority requires fictional risk-owner authority."
  }
];
const commonMistakes = [
  "Treating fictional policy, standard, baseline, procedure, guideline, and control as interchangeable documents.",
  "Writing standards with vague words such as secure, strong, appropriate, or regular without measurable criteria.",
  "Writing procedures that do not match actual tools, staffing, authority, or workflow.",
  "Enforcing a guideline as mandatory even though it was never approved as a standard.",
  "Using an exception to avoid difficult work rather than manage a temporary justified constraint.",
  "Approving an exception without identifying the exact requirement and control objective.",
  "Allowing the exception requester to accept their own residual business risk without authority.",
  "Using a compensating control that does not address the same objective as the preferred control.",
  "Creating exceptions with broad scope, no expiration, no milestones, no monitoring, and no sunset plan.",
  "Automatically renewing fictional exceptions without new evidence and owner review.",
  "Treating an expired exception as proof of compromise, misuse, or confirmed impact.",
  "Closing an exception when a ticket changes without validating business function, controls, denied behavior, monitoring, and residual risk.",
  "Leaving old versions published without archive, retirement, communication, and effective-date control.",
  "Using or exposing any real company policy, standard, procedure, exception, supplier contract, employee record, school data, credential, audit evidence, or confidential governance information."
];
const quizQuestions = [
  {
    "question": "What is the difference between a fictional policy and standard?",
    "choices": [
      "A policy states required direction and outcomes, while a standard translates that direction into specific mandatory and measurable requirements.",
      "A standard is always optional.",
      "A policy contains only technical settings.",
      "They are identical."
    ],
    "answer": 0,
    "explanation": "Policies provide direction; standards define measurable mandatory requirements."
  },
  {
    "question": "What is the main purpose of a fictional procedure?",
    "choices": [
      "Explain the step-by-step method for carrying out a requirement or control.",
      "Accept residual risk.",
      "Replace leadership policy.",
      "Describe only optional ideas."
    ],
    "answer": 0,
    "explanation": "Procedures turn requirements into repeatable operational actions."
  },
  {
    "question": "What makes a fictional exception defensible?",
    "choices": [
      "Exact requirement, business reason, narrow scope, compensating controls, risk, authority, expiration, monitoring, validation, and sunset plan.",
      "A note saying temporary.",
      "No owner or review date.",
      "Automatic renewal."
    ],
    "answer": 0,
    "explanation": "A defensible exception is narrow, owned, controlled, time-bound, and reviewable."
  },
  {
    "question": "What does an expired fictional supplier exception prove?",
    "choices": [
      "The approval is stale and requires removal or renewal, but misuse and impact are not proven.",
      "The supplier stole data.",
      "A confirmed breach occurred.",
      "The account is harmless."
    ],
    "answer": 0,
    "explanation": "The evidence supports a governance and access gap, not unsupported incident claims."
  },
  {
    "question": "When is a fictional compensating control appropriate?",
    "choices": [
      "When the preferred control is not practical and the alternate safeguard addresses the same objective with evidence, ownership, monitoring, and residual-risk approval.",
      "Whenever it is cheaper.",
      "When no review is desired.",
      "When the organization wants a permanent undocumented workaround."
    ],
    "answer": 0,
    "explanation": "Compensating controls must address the same objective and be validated."
  },
  {
    "question": "Why should fictional exceptions have expiration dates?",
    "choices": [
      "To force reassessment, prevent permanent unmanaged deviations, and support a sunset or renewal decision.",
      "Expiration proves the risk is removed.",
      "Only suppliers need expiration.",
      "Dates replace monitoring."
    ],
    "answer": 0,
    "explanation": "Expiration keeps temporary risk decisions from becoming invisible permanent conditions."
  },
  {
    "question": "What makes a fictional standards-and-exceptions finding defensible?",
    "choices": [
      "It links the exact requirement, objective, scope, evidence, controls, risk, alternatives, confidence, limitations, authority, expiration, validation, and closure.",
      "It relies on one document title.",
      "It assumes every deviation caused harm.",
      "It hides remaining risk."
    ],
    "answer": 0,
    "explanation": "Defensible analysis makes the complete document, control, and decision chain visible."
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

export default function SecurityStandardsProceduresExceptionsPage() {
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
            I14.5 Security Standards, Procedures, and Exceptions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional organizations translate policy into measurable
            standards, approved baselines, repeatable procedures, useful
            guidelines, effective controls, defensible exceptions, and
            reviewable closure.
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
          lessonTitle="Security Standards, Procedures, and Exceptions"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge policies, standards, baselines, procedures, controls, exceptions, evidence, owners, and decisions.",
            "I will not request, expose, or evaluate any real company policy, standard, procedure, exception, supplier contract, employee record, school data, credential, audit evidence, or confidential governance information.",
            "I will distinguish mandatory direction, measurable requirements, operating instructions, recommendations, control evidence, exceptions, waivers, and residual-risk acceptance.",
            "I will not treat a document gap, expired exception, or deviation as proof of compromise or confirmed harm.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Temporary Exception Can Become a Permanent Hidden Control Gap"
        >
          <p className="leading-8">
            The fictional Northbridge organization has several reasonable
            deviations: a legacy connector cannot generate the preferred
            storage logs, one historical collection may be reproducible, and
            one emergency role may require faster activation. Other deviations
            are weaker: a supplier exception expired while access remained
            active, a policy review is overdue, and a recovery exercise lacks
            business validation. The goal is to make every deviation narrow,
            owned, evidence-based, monitored, time-bound, and removable.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak exception process</p>
              <p className="mt-2 leading-7">Approve vague requests, allow broad scope, skip compensating controls, renew automatically, and close without proving the preferred control was restored.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional exception process</p>
              <p className="mt-2 leading-7">Identify the exact requirement and objective, limit scope, validate controls, assign authority, set milestones and expiration, monitor risk, and prove safe closure.</p>
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
          title="Documents and Exceptions Determine How Security Direction Becomes Accountable Operation"
        >
          <p className="leading-8">
            A fictional policy may say protect confidential information, but a
            standard must define required outcomes, a baseline must define
            minimum settings, a procedure must explain execution, a control
            must operate, evidence must prove performance, and an exception
            process must manage justified deviations. Without those links,
            documents can create confidence without actual control.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Directionâ€“Requirementâ€“Operationâ€“Exception Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Direction", "Which fictional policy, mission, risk appetite, leadership decision, or business objective defines the required outcome?"],
              ["Requirement", "Which fictional standard, baseline, scope, threshold, frequency, owner, and evidence make the outcome measurable?"],
              ["Operation", "Which fictional procedure, control, tool, role, training, workflow, monitoring, validation, and review perform the requirement?"],
              ["Exception", "Which fictional reason, narrow scope, compensating controls, residual risk, approval, expiration, monitoring, sunset, and closure manage a deviation?"],
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
            Documents, Controls, Exceptions, and Review Terms
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
            Document Hierarchy
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Five Layers from Policy Direction to Review
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
            Document Quality
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Document Quality for Fictional Treatment Plans
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
            Exception Review Criteria
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Approving a Fictional Exception
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
            Exception Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Standards and Exception Records
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
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Standards, Procedures, Exceptions, and Closure
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
          title="Fake Northbridge Standards and Exceptions Dashboard"
          subtitle="Training dashboard for fictional document and exception evidence only."
          metrics={[
            { label: "Records reviewed", value: "8", note: "Supplier access, storage logging, privilege, backup, policy review, recovery, metrics, and offboarding deviations are mapped." },
            { label: "Immediate decisions", value: "4", note: "Expired supplier access, backup uncertainty, recovery validation, and emergency privilege require owner action." },
            { label: "Confirmed incidents", value: "0", note: "The supplied fictional evidence supports document and control gaps but no confirmed incident or disclosure." },
          ]}
        />

        <FakeAlertCard
          title="Expired Exception Still Protects an Active Supplier Account"
          severity="High"
          time="2:10 PM"
          source="Fake Standards and Exceptions Console"
          details="A fictional supplier access exception expired thirty days ago, but the related account remains active and no renewed sponsor or risk-owner approval is attached."
          recommendation="Confirm the exact requirement, control objective, current business need, scope, activity, compensating controls, residual risk, authority, expiration, and owner. Remove or narrowly renew the access, validate expected service behavior, monitor, and document closure without claiming misuse."
        />

        <FakeLogPanel
          title="Fake Northbridge Exception Review Records"
          logs={[
            "09:00 CHARTER scope='standards procedures and exceptions'",
            "09:08 HIERARCHY policy='direction' standard='mandatory'",
            "09:16 PROCEDURE supplier-offboarding owner='missing'",
            "09:24 EXCEPTION supplier-access status='expired'",
            "09:32 ACCOUNT supplier='active'",
            "09:40 EXCEPTION storage-logging status='active 60 days'",
            "09:48 CONTROL function-logs='healthy' object-logs='partial'",
            "09:56 EXCEPTION emergency-role evidence='timing incomplete'",
            "10:04 BACKUP historical-collection reconstruction-test='missing'",
            "10:12 POLICY annual-review='overdue'",
            "10:20 RECOVERY business-validation='missing'",
            "10:28 METRIC denominator='unclear'",
            "10:36 FINDING confirmed-incident='not supported'",
            "10:44 PRIORITY expired-access='first'",
            "10:52 CLOSE requires='control + business + owner validation'",
            "11:00 REVIEW automatic-renewal='prohibited'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Standards and Exception Findings
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
          title="What Does the Expired Supplier Exception Support?"
          evidence={[
            "The fictional supplier project ended.",
            "The access exception expired thirty days ago.",
            "The supplier account remains active.",
            "The account has limited service scope.",
            "No renewed sponsor or risk-owner approval is supplied.",
            "Post-expiration activity evidence is incomplete.",
            "No unauthorized use or disclosure is shown.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The expired exception and active account create an immediate governance and access decision requiring removal or narrow renewal, but misuse and impact are not proven.",
            "The supplier stole confidential records.",
            "A confirmed breach occurred.",
            "No action is required because the scope is limited.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes the stale approval and current capability while preserving the activity and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Standards, Procedures, and Exceptions"
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
          title="Build the Northbridge Standards, Procedures, and Exceptions Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Requirements, Operations, Exceptions, Evidence, and Closure</h3>
              <p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge records to complete an end-to-end standards, procedures, and exceptions review.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Review charter with scope, objectives, evidence, owners, authority, privacy, and decisions.</li>
                <li>Policy, standard, baseline, procedure, guideline, control, exception, evidence, and review hierarchy.</li>
                <li>Document-quality matrix covering scope, language, ownership, measurability, fit, exceptions, and lifecycle.</li>
                <li>Exception register with requirements, reasons, scope, controls, risk, confidence, and limitations.</li>
                <li>Approval, expiration, milestone, monitoring, renewal, escalation, and sunset map.</li>
                <li>Risk-ranked findings with alternatives, owners, due dates, validation, and decision needs.</li>
                <li>Implementation and closure evidence for restored controls and approved business function.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Complete the lab only with fictional evidence displayed on this page. Do not use real company, supplier, employee, school, credential, policy, audit, exception, or confidential governance information.</div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Legacy Connector Cannot Meet the Preferred Logging Standard"
          scenario="The fictional archive-secondary connector cannot produce the required object logs for sixty days, but narrow access, private routing, function logs, versioning, and daily review are available."
          choices={[
            { label: "Choice A", response: "Approve a narrow time-bound exception only after validating the compensating controls, residual risk, owners, milestones, monitoring, replacement plan, and closure tests.", outcome: "Best exception choice. The same control objective remains addressed during transition.", tone: "best" },
            { label: "Choice B", response: "Ignore the standard until the replacement is ready.", outcome: "Unsafe. The deviation would be unmanaged and unowned.", tone: "risk" },
            { label: "Choice C", response: "Claim the storage was compromised because object logs are incomplete.", outcome: "Unsupported. The evidence shows reduced visibility, not confirmed compromise.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="An Emergency Team Requests Standing Privilege"
          scenario="The fictional on-call team believes temporary activation may be too slow, but the required response time has not been tested."
          choices={[
            { label: "Choice A", response: "Keep the request in draft, test activation and emergency access, define the response target, compare narrower alternatives, and approve only the minimum justified scope with expiration and monitoring.", outcome: "Best exception choice. Business need is validated before residual risk is accepted.", tone: "best" },
            { label: "Choice B", response: "Approve permanent tenant-wide standing privilege immediately.", outcome: "Unsafe. Scope and business need are not supported.", tone: "risk" },
            { label: "Choice C", response: "Reject every emergency-access option without testing.", outcome: "Weak. A narrow exception may be justified after evidence-based review.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Security Standards, Procedures, and Exceptions Checklist"
          items={[
            "I can distinguish fictional policy, standard, baseline, procedure, guideline, control, evidence, exception, and waiver.",
            "I can explain how fictional direction becomes measurable requirements and repeatable operations.",
            "I can evaluate fictional document purpose, scope, mandatory language, ownership, measurability, operational fit, exception paths, and lifecycle.",
            "I can identify the exact fictional requirement and control objective affected by an exception.",
            "I can evaluate fictional exception reason, scope, compensating controls, risk, confidence, and limitations.",
            "I can assign fictional request, asset, data, control, risk, approval, monitoring, review, and escalation owners.",
            "I can design fictional expiration, milestone, renewal, monitoring, validation, sunset, and closure requirements.",
            "I can distinguish an expired approval from proof of misuse or confirmed impact.",
            "I can validate fictional control restoration and approved business function before closing an exception.",
            "I will use only fictional evidence and never expose real policies, standards, procedures, exceptions, supplier contracts, employee records, school data, credentials, audits, or confidential governance information.",
          ]}
        />

        <MiniQuiz
          title="I14.5 Mini Quiz: Security Standards, Procedures, and Exceptions"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Security Standards, Procedures, and Exceptions Package for Northbridge. Include the review charter, document hierarchy, policy-to-control map, document-quality matrix, requirement identifiers, control objectives, procedures, evidence expectations, exception register, compensating controls, residual-risk decisions, owners, approvals, expiration, milestones, monitoring, renewal rules, sunset plans, validation, closure, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional documents, requirements, controls, owners, suppliers, evidence, dates, risks, exceptions, and decisions.",
            "Do not treat an expired exception, overdue review, weak metric, missing owner, or partial log source as proof of compromise or confirmed harm.",
            "Make every exception traceable to the exact requirement and control objective.",
            "Show how the preferred control will be restored or why an authorized alternative is accepted.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Policies state direction, standards define measurable mandatory requirements, baselines define minimum states, and procedures explain execution.",
            "Guidelines support decisions but are not automatically mandatory standards.",
            "A control is not effective merely because a document says it exists.",
            "Exceptions should identify the exact requirement, objective, scope, controls, risk, authority, expiration, monitoring, and sunset plan.",
            "Compensating controls must address the same risk objective as the preferred control.",
            "Expired exceptions require action but do not automatically prove misuse, compromise, or impact.",
            "Portfolio artifacts should use fully fictional document and exception evidence and never expose real organizational records.",
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