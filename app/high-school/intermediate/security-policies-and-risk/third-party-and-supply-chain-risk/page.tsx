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
const previousLesson = `${modulePath}/security-standards-procedures-and-exceptions`;
const nextLesson = `${modulePath}/security-metrics-reporting-and-review`;

const objectives = [
  "Explain how fictional third-party and supply-chain risk connects business need, service dependency, data sharing, access, software components, contracts, controls, monitoring, incident duties, recovery, and exit planning.",
  "Distinguish fictional vendors, service providers, partners, subcontractors, software dependencies, open-source components, managed services, and fourth-party relationships.",
  "Build a fictional third-party risk review that documents ownership, due diligence, access boundaries, data handling, control evidence, service levels, incident communication, recovery, and offboarding.",
  "Evaluate fictional supplier risk using criticality, concentration, access, data sensitivity, control evidence, dependency, resilience, contract terms, monitoring, confidence, and residual risk.",
  "Create a portfolio-safe fictional supply-chain package with a supplier inventory, evidence register, findings, treatment plan, monitoring model, exit plan, and leadership summary."
];
const vocabulary = [
  [
    "Third party",
    "A fictional external organization or person that provides a product, service, platform, support function, integration, data-processing activity, or business capability."
  ],
  [
    "Fourth party",
    "A fictional subcontractor, dependency, platform, or service used by a third party to deliver its own service."
  ],
  [
    "Supply chain",
    "The fictional network of providers, software, services, people, infrastructure, data flows, dependencies, and handoffs required to deliver an organizational capability."
  ],
  [
    "Due diligence",
    "A fictional evidence-based review performed before or during a relationship to understand capability, controls, risk, ownership, and business fit."
  ],
  [
    "Supplier criticality",
    "A fictional judgment about how strongly a supplier affects essential services, users, data, recovery, deadlines, or organizational commitments."
  ],
  [
    "Concentration risk",
    "A fictional condition in which several important services rely on the same supplier, region, platform, technology, identity provider, or specialized person."
  ],
  [
    "Data processing",
    "Fictional collection, access, storage, transmission, transformation, analysis, retention, deletion, backup, or recovery involving organizational data."
  ],
  [
    "Access boundary",
    "The fictional identities, roles, systems, networks, data, actions, times, conditions, and environments a supplier is approved to reach."
  ],
  [
    "Service-level objective",
    "A fictional measurable target for availability, support, response, recovery, performance, or evidence delivery."
  ],
  [
    "Contractual control",
    "A fictional requirement documented in an agreement, such as incident notice, data handling, evidence rights, access limits, recovery, deletion, or subcontractor approval."
  ],
  [
    "Shared responsibility",
    "A fictional division of security, privacy, recovery, monitoring, support, and incident duties between the organization and supplier."
  ],
  [
    "Supplier monitoring",
    "Fictional ongoing review of service health, access, incidents, changes, evidence, exceptions, performance, and risk indicators."
  ],
  [
    "Offboarding",
    "A fictional controlled process for ending access, data handling, integrations, accounts, contracts, keys, connections, support, and retained copies."
  ],
  [
    "Exit plan",
    "A fictional documented method for transitioning away from a supplier while preserving service, data, evidence, recovery, and business continuity."
  ],
  [
    "Software component inventory",
    "A fictional record of libraries, packages, modules, versions, owners, sources, dependencies, licenses, and support status used in a software product."
  ],
  [
    "Residual supplier risk",
    "The fictional risk remaining after contractual, technical, administrative, monitoring, recovery, and exit controls are considered."
  ]
];
const treatmentOptions = [
  {
    "option": "Direct service providers",
    "when": "Provide fictional cloud, hosting, storage, identity, monitoring, communications, backup, support, or managed operational capabilities.",
    "example": "A cloud platform hosts several critical Northbridge services and creates concentration and shared-responsibility questions.",
    "evidence": "Service scope, responsibility map, architecture, data flow, access, service commitments, incidents, recovery tests, and exit plan.",
    "limit": "A healthy service today does not remove structural concentration or exit risk."
  },
  {
    "option": "Software and component suppliers",
    "when": "Provide fictional applications, libraries, packages, frameworks, updates, integrations, or development tools.",
    "example": "An aging export library remains concentrated in a critical reporting workflow.",
    "evidence": "Component inventory, source, version, support status, maintainer activity, update process, tests, owner, and replacement path.",
    "limit": "An aging component does not prove malicious behavior or exploitation."
  },
  {
    "option": "Partners and consultants",
    "when": "Provide fictional migration, implementation, troubleshooting, training, specialist support, or shared-program access.",
    "example": "A support account remains active after the project and exception ended.",
    "evidence": "Statement of work, sponsor, project dates, access scope, approvals, activity, deliverables, offboarding, and knowledge transfer.",
    "limit": "Stale access is a control gap but does not prove misuse."
  },
  {
    "option": "Fourth parties and subprocessors",
    "when": "Support a fictional supplier through subcontracted platforms, people, data-processing services, infrastructure, or components.",
    "example": "A communications vendor uses a subprocessor for delivery analytics and retention.",
    "evidence": "Subprocessor list, data map, change notices, equivalent controls, incident duties, access, retention, and termination obligations.",
    "limit": "Direct evidence may be weaker for distant fourth parties and should remain visible in residual risk."
  },
  {
    "option": "Open-source and community dependencies",
    "when": "Provide fictional libraries, frameworks, tools, packages, and components without a traditional supplier contract.",
    "example": "A community-maintained export package requires owner review, source verification, staged updates, and a replacement option.",
    "evidence": "Component inventory, source, version, verification, maintainer activity, update cadence, tests, license concept, owner, and replacement plan.",
    "limit": "Community software can be appropriate when ownership, provenance, testing, updates, and replacement are managed."
  }
];
const controlFamilies = [
  {
    "family": "Business need and criticality",
    "purpose": "Connects the fictional supplier to a documented service, user group, deadline, data set, recovery objective, and business owner.",
    "examples": "Service criticality, user population, minimum service, recovery target, owner, and alternate process.",
    "evidence": "Service catalog, BIA, owner approval, user dependency, deadlines, recovery objectives, and current usage.",
    "failure": "The relationship continues without a current business purpose or accountable owner."
  },
  {
    "family": "Responsibility and contract controls",
    "purpose": "Defines fictional service, security, privacy, access, monitoring, incident, recovery, evidence, subcontractor, and exit duties.",
    "examples": "Responsibility matrix, service scope, access clauses, notification duties, evidence rights, deletion, and transition support.",
    "evidence": "Agreement, responsibility map, approved changes, contacts, exercises, reviews, and issue records.",
    "failure": "Each party assumes the other owns an important control or incident action."
  },
  {
    "family": "Identity and access controls",
    "purpose": "Limits fictional supplier identities, roles, resources, actions, times, conditions, devices, locations, and sessions.",
    "examples": "Named accounts, narrow roles, strong authentication, temporary activation, sponsor review, monitoring, expiration, and offboarding.",
    "evidence": "Access register, approvals, role maps, sessions, reviews, denied tests, expirations, and closure records.",
    "failure": "Shared, broad, or stale access remains after the approved business need ends."
  },
  {
    "family": "Data and privacy controls",
    "purpose": "Governs fictional data purpose, classification, collection, access, locations, sharing, retention, backups, return, and deletion.",
    "examples": "Data map, minimization, encryption, retention, subprocessor review, deletion verification, and owner approval.",
    "evidence": "Processing inventory, data flows, access records, locations, retention schedule, deletion records, and owner decisions.",
    "failure": "The organization cannot identify every supplier copy, use, location, or deletion obligation."
  },
  {
    "family": "Security evidence and monitoring",
    "purpose": "Validates fictional control operation, changes, exceptions, incidents, access, service health, remediation, and risk indicators.",
    "examples": "Scoped assurance evidence, service metrics, access logs, source-health checks, alerts, findings, and review cadence.",
    "evidence": "Current reports, raw records, scope notes, limitations, remediation status, monitoring results, and owner review.",
    "failure": "One certification or marketing statement is treated as complete proof."
  },
  {
    "family": "Resilience and recovery controls",
    "purpose": "Protects fictional availability, recovery, data restoration, alternate service, support, communication, and minimum business capability.",
    "examples": "Service objectives, backups, restore tests, alternate process, recovery exercise, regional plan, and customer recovery.",
    "evidence": "Architecture, service history, recovery plan, test results, incidents, lessons learned, and owner validation.",
    "failure": "Service credits replace practical recovery planning and testing."
  },
  {
    "family": "Incident and change controls",
    "purpose": "Defines fictional notification, escalation, evidence preservation, investigation support, communication, remediation, and significant-change reporting.",
    "examples": "Incident contacts, notification targets, exercises, change notices, component alerts, evidence handoff, and lessons learned.",
    "evidence": "Clauses, contact tests, incident records, timelines, evidence packages, change history, and follow-up actions.",
    "failure": "The supplier controls timing and evidence while the customer lacks defined rights and contacts."
  },
  {
    "family": "Offboarding and exit controls",
    "purpose": "Ends fictional access, data processing, integrations, keys, accounts, contracts, support, knowledge dependence, and retained copies safely.",
    "examples": "Access removal, data export, deletion verification, integration shutdown, knowledge transfer, parallel service, and owner signoff.",
    "evidence": "Exit plan, migration test, access closure, data return, deletion records, continuity validation, and closure review.",
    "failure": "The contract ends while access, data, integrations, or hidden dependencies remain."
  }
];
const selectionCriteria = [
  {
    "criterion": "Service relevance",
    "strong": "The fictional evidence directly covers the exact supplier service, region, data, access, control, and time period used by Northbridge.",
    "weak": "A broad report is accepted even though the reviewed service is outside its scope.",
    "question": "Does this evidence apply to the exact relationship being assessed?"
  },
  {
    "criterion": "Current control operation",
    "strong": "The fictional supplier shows current implementation, operating records, tests, exceptions, remediation, and owner review.",
    "weak": "A policy statement is treated as proof that the control operates.",
    "question": "What evidence shows the control is working now?"
  },
  {
    "criterion": "Data and access boundary",
    "strong": "The fictional review identifies exact identities, roles, systems, actions, data, locations, retention, and subprocessors.",
    "weak": "The supplier is called limited without a documented boundary.",
    "question": "What can the supplier actually access, process, retain, and share?"
  },
  {
    "criterion": "Independence and traceability",
    "strong": "The fictional conclusion uses several traceable sources with different origins and preserves parent evidence.",
    "weak": "Several screenshots from one portal are counted as independent assurance.",
    "question": "Can another reviewer reconstruct the supplier conclusion?"
  },
  {
    "criterion": "Resilience and concentration",
    "strong": "The fictional review maps shared providers, regions, platforms, people, components, recovery paths, and alternate service.",
    "weak": "Current service health is treated as proof that concentration does not matter.",
    "question": "Which critical capabilities share the same dependency?"
  },
  {
    "criterion": "Incident and change readiness",
    "strong": "The fictional contacts, thresholds, notice timing, evidence handoff, significant changes, exercises, and escalation paths are tested.",
    "weak": "Contract language exists but no one has tested the process.",
    "question": "Will both parties know what to do during an incident or major change?"
  },
  {
    "criterion": "Offboarding feasibility",
    "strong": "The fictional organization can remove access, export data, verify deletion, replace integrations, preserve evidence, transfer knowledge, and continue minimum service.",
    "weak": "Exit planning begins only after termination is announced.",
    "question": "Can the organization leave safely without losing control of service or data?"
  },
  {
    "criterion": "Residual risk and ownership",
    "strong": "The fictional remaining risk, confidence, limitations, treatment, monitoring, risk owner, review date, and escalation triggers are documented.",
    "weak": "The supplier receives a rating but no accountable decision follows.",
    "question": "What risk remains, who owns it, and when is it reviewed?"
  }
];
const treatmentRecords = [
  {
    "id": "NBR-TPR-01",
    "risk": "Fictional Support Vendor",
    "treatment": "Immediate Review",
    "controls": "Confirm sponsor, remove or narrowly renew the account, preserve activity evidence, monitor, and validate offboarding.",
    "owner": "Third-Party Risk Owner",
    "validation": "Supplier access fails after removal or matches the newly approved narrow scope; approved internal support continues.",
    "residual": "Low-Medium after verified removal or renewal.",
    "limit": "No unauthorized use or disclosure is confirmed."
  },
  {
    "id": "NBR-TPR-02",
    "risk": "Fictional Cloud Platform",
    "treatment": "Concentration Management",
    "controls": "Maintain shared-responsibility maps, customer recovery, regional design, evidence access, service monitoring, and exit planning.",
    "owner": "Cloud Service Owner",
    "validation": "Regional and customer recovery exercises meet approved minimum-service objectives.",
    "residual": "Medium structural concentration risk.",
    "limit": "No current provider-controlled incident is supported."
  },
  {
    "id": "NBR-TPR-03",
    "risk": "Fictional Federation Partner",
    "treatment": "Expire or Renew",
    "controls": "Confirm sponsor, end stale trust and role, review sign-ins, test denied access, and document narrow renewal if required.",
    "owner": "Identity Governance",
    "validation": "Expired partner sessions fail while approved internal and renewed partner workflows behave as expected.",
    "residual": "Low after closure or narrow renewal.",
    "limit": "No post-program sign-in or resource access is confirmed."
  },
  {
    "id": "NBR-TPR-04",
    "risk": "Fictional Managed Monitoring Provider",
    "treatment": "Continuity Improvement",
    "controls": "Preserve internal evidence access, test alternate escalation, review read-only access, validate contacts, and monitor service quality.",
    "owner": "Security Operations",
    "validation": "Internal teams can receive evidence and escalate priority cases during a provider interruption.",
    "residual": "Medium-Low after alternate-process testing.",
    "limit": "The provider does not operate every source or investigation."
  },
  {
    "id": "NBR-TPR-05",
    "risk": "Fictional Backup Service",
    "treatment": "Scope Decision",
    "controls": "Validate reconstruction of the excluded collection or add backup coverage, then retest restore and owner approval.",
    "owner": "Recovery Owner",
    "validation": "Required data is restored or reconstructed within the approved recovery objective.",
    "residual": "Depends on the test outcome.",
    "limit": "No current backup failure or data loss is confirmed."
  },
  {
    "id": "NBR-TPR-06",
    "risk": "Fictional Open-Source Export Library",
    "treatment": "Staged Upgrade",
    "controls": "Verify source, test the supported version, preserve rollback, monitor application behavior, and maintain a replacement option.",
    "owner": "Application Product Owner",
    "validation": "Approved exports succeed, expected tests pass, and rollback remains available.",
    "residual": "Low-Medium after upgrade and replacement planning.",
    "limit": "No malicious component behavior is supported."
  },
  {
    "id": "NBR-TPR-07",
    "risk": "Fictional Communications Provider",
    "treatment": "Data and Continuity Review",
    "controls": "Minimize message content, confirm retention and deletion, restrict service identity, monitor delivery, and test alternate communication.",
    "owner": "Communications Service Owner",
    "validation": "Approved notifications work, excessive content is absent, and alternate communication succeeds.",
    "residual": "Low-Medium.",
    "limit": "No current misdelivery or privacy incident is confirmed."
  },
  {
    "id": "NBR-TPR-08",
    "risk": "Fictional Recovery Consultant",
    "treatment": "Controlled Temporary Access",
    "controls": "Use scheduled narrow access, automatic expiration, activity logging, evidence review, offboarding, and knowledge transfer.",
    "owner": "Continuity Manager",
    "validation": "Access expires after each exercise and internal teams retain required knowledge and records.",
    "residual": "Low when controls operate.",
    "limit": "No stale access is currently shown."
  }
];
const implementationSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional supplier question",
    "detail": "State the business need, service, criticality, users, data, access, dependencies, owners, evidence, review period, privacy limits, and required decisions.",
    "output": "Third-party review charter."
  },
  {
    "step": "2",
    "title": "Inventory suppliers and dependencies",
    "detail": "Map fictional providers, services, fourth parties, software components, data flows, access paths, regions, owners, and concentration.",
    "output": "Supplier and supply-chain register."
  },
  {
    "step": "3",
    "title": "Map responsibility and contract controls",
    "detail": "Assign fictional service, security, privacy, access, monitoring, incident, recovery, evidence, subcontractor, and exit duties.",
    "output": "Responsibility and contract-control matrix."
  },
  {
    "step": "4",
    "title": "Validate due diligence evidence",
    "detail": "Review fictional business need, scope, data, access, control evidence, resilience, incidents, changes, ownership, limitations, and current status.",
    "output": "Supplier evidence register."
  },
  {
    "step": "5",
    "title": "Assess supplier risk",
    "detail": "Evaluate fictional criticality, access, data sensitivity, concentration, control effectiveness, resilience, uncertainty, likelihood, impact, and confidence.",
    "output": "Third-party risk register."
  },
  {
    "step": "6",
    "title": "Select treatment and monitoring",
    "detail": "Define fictional access reduction, contractual correction, control improvement, alternate service, monitoring, exception, recovery, and owner actions.",
    "output": "Supplier treatment plan."
  },
  {
    "step": "7",
    "title": "Test offboarding and exit",
    "detail": "Validate fictional access removal, data export, deletion, dependency replacement, knowledge transfer, minimum service, communication, monitoring, and closure.",
    "output": "Exit and offboarding test record."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional findings, alternatives, confidence, limitations, residual risk, leadership decisions, reassessment triggers, and portfolio safety.",
    "output": "Reviewed supplier-risk package."
  }
];
const findings = [
  {
    "id": "NBR-TPR-F01",
    "statement": "The fictional Support Vendor requires immediate access review because its project and exception ended while one supplier account remains active.",
    "support": "Project closure, expired exception, account status, sponsor record, limited service scope, network restriction, and incomplete activity review.",
    "alternative": "A current support need may justify a narrow renewed agreement and access scope.",
    "confidence": "High",
    "limitation": "No unauthorized use, malicious intent, or disclosure is confirmed."
  },
  {
    "id": "NBR-TPR-F02",
    "statement": "The fictional Cloud Platform creates material concentration risk because several critical services share one provider and regional control plane.",
    "support": "Architecture, service inventory, provider dependency map, regional design, recovery plan, support model, and exit analysis.",
    "alternative": "Strong provider resilience and tested customer recovery may reduce practical risk.",
    "confidence": "High",
    "limitation": "No current provider-controlled disruption is supported."
  },
  {
    "id": "NBR-TPR-F03",
    "statement": "The fictional Federation Partner trust should expire unless a current sponsor approves a narrow renewed business purpose.",
    "support": "Program closure, sponsor expiration, active trust, role assignment, sign-in records, and partner-access policy.",
    "alternative": "A follow-up program may still require limited access.",
    "confidence": "High",
    "limitation": "No post-program sign-in or resource access is confirmed."
  },
  {
    "id": "NBR-TPR-F04",
    "statement": "The fictional Managed Monitoring Provider is an important evidence dependency and requires tested internal access and alternate escalation.",
    "support": "After-hours service scope, alert access, escalation records, internal log ownership, source limitations, and continuity plan.",
    "alternative": "Internal teams may already cover most urgent cases during provider disruption.",
    "confidence": "Medium-High",
    "limitation": "The provider does not control every source or investigation."
  },
  {
    "id": "NBR-TPR-F05",
    "statement": "The fictional open-source export library requires staged upgrade and replacement planning because the current version is aging and concentrated in a critical workflow.",
    "support": "Component inventory, version age, maintainer activity, update availability, application dependency, tests, and owner review.",
    "alternative": "The current version may remain stable and supported enough for a short transition.",
    "confidence": "Medium-High",
    "limitation": "No malicious behavior or confirmed exploitation is supported."
  },
  {
    "id": "NBR-TPR-F06",
    "statement": "No fictional supplier relationship should be considered closed until access, data return or deletion, integrations, keys, evidence, support, knowledge, monitoring, and owner signoff are validated.",
    "support": "Offboarding policy, access records, data map, contract controls, exit plans, supplier incidents, knowledge transfer, and closure requirements.",
    "alternative": "Some low-risk suppliers may require a simpler proportional closure process.",
    "confidence": "High",
    "limitation": "Closure evidence should match the actual service and data scope."
  }
];
const commonMistakes = [
  "Treating fictional third-party risk as a one-time questionnaire instead of a full lifecycle from business need through exit.",
  "Assuming a contract, certification, or assurance report proves every control for every service, region, and time period.",
  "Failing to map fourth parties, software components, subcontractors, and shared infrastructure.",
  "Allowing supplier access to remain active after a project, sponsor, exception, or contract ends.",
  "Using shared or permanent supplier administrator accounts instead of named, narrow, monitored, time-bound access.",
  "Treating risk transfer as removal of organizational accountability.",
  "Ignoring data locations, copies, retention, backups, deletion, and subprocessors.",
  "Relying on service credits instead of actual business recovery capability.",
  "Accepting incident-notification language without testing contacts, timing, evidence, and communication.",
  "Ignoring supplier concentration because each individual service appears healthy.",
  "Failing to preserve internal access to logs, configurations, data exports, and recovery evidence.",
  "Treating an active supplier account, aging component, or provider dependency as proof of compromise.",
  "Ending a contract without validating access removal, data return or deletion, integration shutdown, knowledge transfer, and minimum service.",
  "Using or exposing any real supplier contract, company architecture, employee identity, access record, school data, credentials, incident evidence, private vendor report, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What is fictional third-party risk management?",
    "choices": [
      "A lifecycle process for understanding business need, services, data, access, controls, dependencies, incidents, recovery, monitoring, and exit for external relationships.",
      "A one-time questionnaire only.",
      "A method for transferring all accountability.",
      "A list of supplier names."
    ],
    "answer": 0,
    "explanation": "Third-party risk management covers the complete relationship lifecycle."
  },
  {
    "question": "What is a fictional fourth party?",
    "choices": [
      "A subcontractor, platform, component, or service used by a third party to deliver its service.",
      "The organization's internal security team.",
      "Any customer.",
      "Only a second contract reviewer."
    ],
    "answer": 0,
    "explanation": "Fourth parties are dependencies behind the direct supplier."
  },
  {
    "question": "What does an expired fictional supplier exception with active access prove?",
    "choices": [
      "The approval and access require immediate review, but misuse and impact are not proven.",
      "The supplier stole data.",
      "A confirmed breach occurred.",
      "The account is harmless."
    ],
    "answer": 0,
    "explanation": "The evidence supports a lifecycle and access-control gap, not unsupported incident claims."
  },
  {
    "question": "Why is fictional supplier concentration risk important?",
    "choices": [
      "Several critical services may be affected by one provider, platform, region, identity dependency, or specialized capability.",
      "Concentration guarantees an outage.",
      "Only small suppliers create concentration.",
      "It matters only after termination."
    ],
    "answer": 0,
    "explanation": "Shared dependencies can expand disruption and recovery impact."
  },
  {
    "question": "What makes fictional supplier evidence useful?",
    "choices": [
      "It is relevant, current, scoped, traceable, owned, limited, and connected to the actual service and controls.",
      "It has a professional cover page.",
      "It is the oldest available report.",
      "It contains a high score."
    ],
    "answer": 0,
    "explanation": "Evidence must match the service, scope, controls, and decision."
  },
  {
    "question": "What should a fictional supplier exit plan include?",
    "choices": [
      "Access removal, data export or deletion, integration shutdown, key and account closure, evidence preservation, knowledge transfer, continuity, validation, and owner signoff.",
      "Only contract cancellation.",
      "Only deleting one account.",
      "No monitoring or testing."
    ],
    "answer": 0,
    "explanation": "Safe exit covers technical, data, operational, evidence, and business dependencies."
  },
  {
    "question": "What makes a fictional third-party finding defensible?",
    "choices": [
      "It links business need, supplier criticality, service, data, access, dependencies, evidence, controls, risk, alternatives, confidence, limitations, owners, treatment, monitoring, and exit.",
      "It relies on one vendor rating.",
      "It assumes every supplier gap caused harm.",
      "It ignores fourth parties."
    ],
    "answer": 0,
    "explanation": "Defensible supplier analysis connects the full relationship and preserves evidence boundaries."
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

export default function ThirdPartySupplyChainRiskPage() {
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
            I14.6 Third-Party and Supply Chain Risk
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
          lessonTitle="Third-Party and Supply Chain Risk"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge supplier, service, data, access, contract, component, monitoring, recovery, and exit records.",
            "I will not request, expose, or evaluate any real supplier contract, private vendor report, company architecture, employee identity, access record, school data, credential, incident evidence, or confidential business information.",
            "I will distinguish direct suppliers, fourth parties, software dependencies, concentration risk, shared responsibility, contractual controls, operating evidence, and residual risk.",
            "I will not treat an active supplier account, aging component, provider dependency, or evidence gap as proof of compromise.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Organization May Outsource a Service, but It Cannot Outsource Accountability"
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
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak supplier review</p>
              <p className="mt-2 leading-7">Approve vague requests, allow broad scope, skip compensating controls, renew automatically, and close without proving the preferred control was restored.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional supplier review</p>
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
          title="Use the Needâ€“Boundaryâ€“Evidenceâ€“Exit Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Need", "Which fictional business service, users, deadline, data, recovery objective, or specialized capability requires the supplier?"],
              ["Boundary", "Which fictional identities, roles, systems, data, regions, fourth parties, actions, responsibilities, and contract controls define the relationship?"],
              ["Evidence", "Which fictional access records, control reports, service metrics, incidents, tests, source-health notes, exceptions, and changes show current performance?"],
              ["Exit", "Which fictional access removal, data return or deletion, integration shutdown, replacement, continuity, knowledge transfer, validation, and owner signoff end the relationship safely?"],
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
            Third-Party, Supply-Chain, and Exit Terms
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
            Supplier Relationship Types
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Five Major Fictional Supplier and Component Types
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
            Supplier Control Families
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Supplier Control Families for Fictional Treatment Plans
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
            Due Diligence Criteria
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Approving or Renewing a Fictional Supplier
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
            Supplier Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Supplier and Component Records
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
            Review Suppliers, Dependencies, Controls, Monitoring, and Exit
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
          title="Fake Northbridge Third-Party Risk Dashboard"
          subtitle="Training dashboard for fictional supplier and supply-chain evidence only."
          metrics={[
            { label: "Relationships reviewed", value: "8", note: "Cloud, support, identity, monitoring, backup, software, communications, and recovery relationships are mapped." },
            { label: "Priority supplier actions", value: "4", note: "Stale access, stale federation, concentration, component aging, and backup scope require owner decisions." },
            { label: "Confirmed supplier incidents", value: "0", note: "The supplied fictional evidence supports lifecycle and control gaps but no confirmed supplier compromise or disclosure." },
          ]}
        />

        <FakeAlertCard
          title="Supplier Access Remains Active after Project and Exception End"
          severity="High"
          time="2:10 PM"
          source="Fake Third-Party Risk Console"
          details="A fictional support supplier retains one limited account after the project ended and the exception expired. Complete post-expiration activity review is not yet available."
          recommendation="Confirm the exact requirement, control objective, current business need, scope, activity, compensating controls, residual risk, authority, expiration, and owner. Remove or narrowly renew the access, validate expected service behavior, monitor, and document closure without claiming misuse."
        />

        <FakeLogPanel
          title="Fake Northbridge Supplier Review Records"
          logs={[
            "09:00 CHARTER scope='third-party and supply-chain risk'",
            "09:08 SUPPLIER support-vendor criticality='High'",
            "09:16 ACCESS supplier-account='active after closure'",
            "09:24 EXCEPTION supplier='expired'",
            "09:32 FEDERATION partner-trust='stale'",
            "09:40 PROVIDER cloud-platform concentration='Critical'",
            "09:48 MONITORING managed-provider alternate-escalation='untested'",
            "09:56 BACKUP historical-collection scope='excluded'",
            "10:04 COMPONENT export-library version='aging'",
            "10:12 COMMUNICATION alternate-channel='documented'",
            "10:20 CONSULTANT temporary-access='expires correctly'",
            "10:28 FINDING confirmed-supplier-incident='not supported'",
            "10:36 PRIORITY stale-access='first'",
            "10:44 EXIT data-return-and-deletion='required'",
            "10:52 ASSURANCE one-report='not complete proof'",
            "11:00 CLOSE requires='access + data + dependency + owner'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Supplier-Risk Findings and Limits
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
            "The fictional support project ended.",
            "The supplier exception expired.",
            "One limited supplier account remains active.",
            "The account can reach a narrow support service.",
            "Complete post-expiration activity evidence is unavailable.",
            "No unauthorized sign-in, record access, or disclosure is shown.",
            "The authorized owner can remove or narrowly renew the access.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The stale account and expired approval create an immediate third-party lifecycle risk requiring owner action, but supplier misuse and impact are not proven.",
            "The supplier stole confidential records.",
            "A confirmed supplier breach occurred.",
            "No action is required because the access is limited.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes the active capability and stale approval while preserving the activity and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Third-Party and Supply-Chain Risk Analysis"
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
          title="Build the Northbridge Third-Party and Supply-Chain Risk Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Suppliers, Fourth Parties, Access, Data, Controls, Monitoring, and Exit</h3>
              <p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge records to complete an end-to-end third-party and supply-chain risk review.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Third-party review charter with business need, scope, owners, evidence, privacy, and decisions.</li>
                <li>Supplier, fourth-party, component, service, data, access, region, dependency, and concentration register.</li>
                <li>Responsibility and contract-control matrix for security, privacy, monitoring, incidents, recovery, evidence, and exit.</li>
                <li>Due-diligence evidence review with source health, exceptions, confidence, alternatives, and limitations.</li>
                <li>Supplier risk register with criticality, access, data sensitivity, likelihood, impact, controls, and owners.</li>
                <li>Treatment and monitoring plan with thresholds, reviews, access reduction, recovery, and contractual actions.</li>
                <li>Offboarding and exit test with access closure, data return or deletion, dependency replacement, continuity, and signoff.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Complete the lab only with fictional evidence displayed on this page. Do not use real supplier contracts, access records, private reports, company architecture, employee data, school records, credentials, incidents, or confidential business information.</div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Supplier Certification Looks Strong, but the Reviewed Service Is Unclear"
          scenario="The fictional supplier provides a recent assurance report, but its scope does not clearly include the exact support service and region used by Northbridge."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the report as partial evidence, confirm scope and exclusions, collect service-specific control evidence, document limitations, and keep the risk review open until the decision boundary is supported.",
              outcome:
                "Best supplier-review choice. Evidence is used only within its actual scope.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Approve every supplier service because the report is recent.",
              outcome:
                "Unsupported. Evidence scope is unclear.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Reject the supplier automatically.",
              outcome:
                "Weak. Additional evidence may resolve the uncertainty.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Critical Cloud Provider Creates Concentration Risk"
          scenario="The fictional learning, identity, storage, monitoring, and recovery services rely on one cloud platform, but current provider service health is normal."
          choices={[
            {
              label: "Choice A",
              response:
                "Document concentration without claiming an outage, map provider and customer duties, test regional and customer recovery, preserve data and evidence access, define exit options, and obtain owner approval for residual risk.",
              outcome:
                "Best supply-chain choice. Current health and structural dependency are both represented.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Claim a provider incident because many services depend on it.",
              outcome:
                "Unsupported. Concentration is a risk condition, not a confirmed event.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore concentration because service health is currently normal.",
              outcome:
                "Weak. Structural risk remains even during healthy operation.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Third-Party and Supply-Chain Risk Checklist"
          items={[
            "I can identify fictional direct suppliers, fourth parties, software components, service dependencies, data flows, access paths, regions, and concentration.",
            "I can document fictional business need, service criticality, users, owners, responsibilities, and required evidence.",
            "I can evaluate fictional supplier data purpose, classification, access, locations, retention, sharing, backups, deletion, and subprocessors.",
            "I can review fictional supplier identities, roles, approvals, sessions, monitoring, reviews, expiration, and offboarding.",
            "I can distinguish contract language, supplier claims, assurance reports, technical configuration, operating evidence, and residual risk.",
            "I can evaluate fictional resilience, recovery, alternate processes, support, incidents, notification, evidence preservation, and change duties.",
            "I can identify fictional concentration risk across providers, regions, platforms, identities, people, and components.",
            "I can design fictional supplier treatment, monitoring, escalation, review, and reassessment.",
            "I can validate fictional access removal, data return or deletion, integration shutdown, dependency replacement, continuity, knowledge transfer, and closure.",
            "I will use only fictional evidence and never expose real supplier contracts, private reports, company systems, employee identities, school records, credentials, incidents, or confidential business information.",
          ]}
        />

        <MiniQuiz
          title="I14.6 Mini Quiz: Third-Party and Supply Chain Risk"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Third-Party and Supply-Chain Risk Package for Northbridge. Include the review charter, supplier inventory, fourth-party and component map, business criticality, service and responsibility boundaries, data flows, access model, due-diligence evidence, contract controls, service and recovery objectives, incident duties, monitoring indicators, concentration analysis, supplier risk register, treatment plan, offboarding and exit test, residual risk, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional suppliers, services, components, contracts, access records, data, owners, evidence, dates, incidents, and decisions.",
            "Do not treat a certification, active account, aging component, provider dependency, or fourth-party relationship as proof of compromise.",
            "Make every supplier conclusion traceable to the exact service, region, data, access, control, evidence, and time period.",
            "Show how the organization can continue minimum service and preserve data and evidence during supplier disruption or exit.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Third-party risk management covers the complete lifecycle from business need through exit.",
            "Fourth parties and software components can create hidden dependencies behind direct suppliers.",
            "Contracts define expectations, but operating evidence shows whether controls actually work.",
            "Risk transfer never removes all organizational accountability.",
            "Supplier concentration can be important even while current service health is normal.",
            "Offboarding is complete only after access, data, integrations, dependencies, evidence, knowledge, and owner signoff are validated.",
            "Portfolio artifacts should use fully fictional supplier evidence and never expose real organizational records.",
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