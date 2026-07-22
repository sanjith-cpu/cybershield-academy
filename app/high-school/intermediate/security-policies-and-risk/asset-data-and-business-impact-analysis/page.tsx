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
const previousLesson = `${modulePath}/risk-identification-and-assessment`;
const nextLesson = `${modulePath}/risk-treatment-and-control-selection`;

const objectives = [
  "Explain how fictional asset, data, service, user, supplier, location, process, and recovery information supports business-impact analysis.",
  "Distinguish fictional asset value, data classification, service criticality, dependency, recovery time, recovery point, maximum tolerable disruption, and owner authority.",
  "Build a fictional asset and dependency register that connects systems, identities, data, suppliers, facilities, users, owners, controls, and recovery requirements.",
  "Evaluate fictional business impact across confidentiality, integrity, availability, privacy, safety, finance, operations, reputation, compliance, and recovery.",
  "Create a portfolio-safe fictional business-impact package with asset inventory, dependency map, impact tiers, recovery priorities, assumptions, findings, owners, and review triggers."
];
const vocabulary = [
  [
    "Asset",
    "A fictional person, service, system, application, device, data set, process, facility, supplier relationship, brand, reputation, or capability with organizational value."
  ],
  [
    "Asset owner",
    "The fictional person accountable for business use, lifecycle, support, access, change, protection, recovery, and retirement decisions for an asset."
  ],
  [
    "Data owner",
    "The fictional person accountable for classification, access, sharing, retention, quality, protection, recovery, and approved use of a data set."
  ],
  [
    "Business-impact analysis",
    "A fictional process for identifying critical activities, dependencies, disruption consequences, recovery priorities, and evidence needed for continuity decisions."
  ],
  [
    "Criticality",
    "A fictional judgment about how important an asset, service, data set, process, or supplier is to business objectives and users."
  ],
  [
    "Dependency",
    "A fictional person, process, identity, system, network, facility, supplier, key, data source, or service required for another activity to succeed."
  ],
  [
    "Upstream dependency",
    "A fictional resource or service that must operate before another process can function."
  ],
  [
    "Downstream dependency",
    "A fictional service, user group, report, partner, or process affected when an upstream activity fails."
  ],
  [
    "Recovery time objective",
    "A fictional target for how quickly a service or process should be restored after disruption."
  ],
  [
    "Recovery point objective",
    "A fictional target for the maximum acceptable amount of data loss measured in time."
  ],
  [
    "Maximum tolerable disruption",
    "A fictional longest period a process can remain unavailable before consequences become unacceptable."
  ],
  [
    "Minimum service level",
    "A fictional reduced but acceptable capability that must be available during recovery."
  ],
  [
    "Data classification",
    "A fictional label describing the sensitivity and handling needs of data, such as public, internal, confidential, or restricted."
  ],
  [
    "Impact tier",
    "A fictional ranking used to compare consequence severity and recovery priority across assets and services."
  ],
  [
    "Dependency concentration",
    "A fictional condition in which several important services rely on the same person, system, supplier, region, identity, or recovery path."
  ],
  [
    "Recovery priority",
    "A fictional ordered decision about which services, data, identities, dependencies, and users should be restored first."
  ]
];
const assetCategories = [
  {
    "category": "Business services",
    "examples": "Fictional learning portal, reporting service, support workflow, export function, identity service, and recovery service.",
    "owner": "Business Service Owner",
    "impact": "Loss may affect users, deadlines, operations, decisions, trust, and contractual commitments.",
    "evidence": "Service catalog, owner records, user population, criticality, support model, service levels, and incident history."
  },
  {
    "category": "Data assets",
    "examples": "Fictional public course content, confidential progress records, support attachments, audit records, reports, backups, and exports.",
    "owner": "Data Owner",
    "impact": "Loss or misuse may affect privacy, integrity, operations, reputation, compliance, and recovery.",
    "evidence": "Data inventory, classification, access, retention, lineage, copies, encryption, backup, and recovery records."
  },
  {
    "category": "Technology assets",
    "examples": "Fictional applications, databases, storage, networks, identity platforms, logging systems, endpoints, and recovery tools.",
    "owner": "Technology Asset Owner",
    "impact": "Failure may interrupt service delivery, evidence, access, communication, and recovery.",
    "evidence": "Asset register, configuration, dependencies, lifecycle, support, monitoring, changes, and test records."
  },
  {
    "category": "People and role assets",
    "examples": "Fictional administrators, service owners, teachers, support staff, analysts, approvers, and recovery coordinators.",
    "owner": "Functional Leader",
    "impact": "Concentration or unavailability may delay decisions, operations, escalation, validation, and recovery.",
    "evidence": "Role map, staffing plan, authority matrix, backup personnel, training, contact list, and exercise results."
  },
  {
    "category": "Supplier and partner assets",
    "examples": "Fictional cloud provider, support vendor, identity partner, software supplier, backup provider, and specialist contractor.",
    "owner": "Third-Party Risk Owner",
    "impact": "Failure may affect access, data, service, recovery, support, evidence, or contractual obligations.",
    "evidence": "Supplier register, contract, service scope, dependencies, access, incident duties, performance, and exit plan."
  },
  {
    "category": "Facility and location assets",
    "examples": "Fictional offices, remote-work locations, support rooms, recovery sites, and network facilities.",
    "owner": "Facilities and Continuity Owner",
    "impact": "Disruption may affect staff availability, communications, equipment, coordination, and recovery access.",
    "evidence": "Location register, occupancy, access, alternate site, remote-work capability, and continuity plan."
  },
  {
    "category": "Process assets",
    "examples": "Fictional onboarding, offboarding, access review, incident response, backup, restore, reporting, and supplier review processes.",
    "owner": "Process Owner",
    "impact": "Failure may create stale access, delayed recovery, weak evidence, missed decisions, or inconsistent control operation.",
    "evidence": "Procedure, workflow, owner, metrics, exceptions, tickets, reviews, incidents, and improvement actions."
  },
  {
    "category": "Reputation and trust assets",
    "examples": "Fictional student trust, teacher confidence, partner reliability, leadership credibility, and public reputation.",
    "owner": "Executive Leadership",
    "impact": "Damage may reduce adoption, increase complaints, delay partnerships, and create long-term recovery costs.",
    "evidence": "Feedback, complaints, communication records, user impact, service performance, leadership review, and trend data."
  }
];
const impactDimensions = [
  {
    "dimension": "Confidentiality",
    "question": "Could fictional information be accessed, shared, viewed, or inferred by an unauthorized person or service?",
    "evidence": "Classification, access paths, identities, policies, activity records, sharing, and supplier access.",
    "limit": "A control gap or broad permission does not prove disclosure occurred."
  },
  {
    "dimension": "Integrity",
    "question": "Could fictional data, configuration, evidence, decisions, or reports become incorrect, altered, incomplete, or untrustworthy?",
    "evidence": "Version history, approvals, checks, reconciliation, write access, change records, and validation.",
    "limit": "A writable path does not prove unauthorized modification."
  },
  {
    "dimension": "Availability",
    "question": "Could fictional users lose required service, data, communication, processing, or recovery capability?",
    "evidence": "Service health, dependencies, capacity, support, recovery tests, user needs, and incident history.",
    "limit": "A dependency weakness does not prove an outage will occur."
  },
  {
    "dimension": "Privacy",
    "question": "Could fictional personal information be used, retained, shared, or exposed outside approved purpose and need?",
    "evidence": "Data map, purpose, consent concept, retention, access, sharing, classification, and owner decisions.",
    "limit": "Potential privacy impact is not confirmed privacy harm."
  },
  {
    "dimension": "Safety and wellbeing",
    "question": "Could fictional disruption or incorrect information affect student, employee, or user safety and wellbeing?",
    "evidence": "Service purpose, user population, emergency dependency, accessibility, support path, and escalation.",
    "limit": "Safety impact should be stated only when the business process supports it."
  },
  {
    "dimension": "Financial",
    "question": "Could fictional disruption create recovery cost, lost productivity, supplier penalties, rework, or delayed revenue?",
    "evidence": "Cost model, staffing, contract, downtime estimate, rework, service usage, and recovery effort.",
    "limit": "Financial impact estimates should show assumptions and ranges."
  },
  {
    "dimension": "Operational",
    "question": "Could fictional teams miss deadlines, lose coordination, perform manual work, or fail to deliver required service?",
    "evidence": "Workflow, staffing, volume, deadlines, alternate process, dependencies, and minimum service level.",
    "limit": "Operational difficulty may vary by time of year and user demand."
  },
  {
    "dimension": "Reputation and compliance",
    "question": "Could fictional trust, partnership, policy obligations, legal duties, or leadership confidence be affected?",
    "evidence": "Commitments, policies, contracts, complaints, communication, user expectations, and leadership review.",
    "limit": "Reputational and compliance effects require context and should not be exaggerated."
  }
];
const recoveryFields = [
  {
    "field": "Service criticality",
    "purpose": "Ranks how strongly a fictional service supports mission, users, deadlines, decisions, safety, or commitments.",
    "example": "The reporting service is Tier 1 during grading periods and Tier 2 during normal weeks.",
    "quality": "Criticality can vary by season, user population, and business event."
  },
  {
    "field": "Maximum tolerable disruption",
    "purpose": "Defines the longest fictional outage before consequences become unacceptable.",
    "example": "Eight fictional hours during reporting deadlines.",
    "quality": "The value is supported by business owners rather than only technical preference."
  },
  {
    "field": "Recovery time objective",
    "purpose": "Sets the fictional target for restoring an approved service level.",
    "example": "Restore minimum reporting capability within four fictional hours.",
    "quality": "The target is shorter than the maximum tolerable disruption and has tested dependencies."
  },
  {
    "field": "Recovery point objective",
    "purpose": "Sets the fictional maximum acceptable data-loss window.",
    "example": "No more than thirty fictional minutes of reporting data.",
    "quality": "The target matches backup frequency, replication, application design, and business need."
  },
  {
    "field": "Minimum service level",
    "purpose": "Defines the fictional reduced capability required before full restoration.",
    "example": "Read-only reports for teachers while export and analytics remain unavailable.",
    "quality": "The reduced mode is documented, secure, tested, and understandable to users."
  },
  {
    "field": "Recovery dependencies",
    "purpose": "Identifies fictional identities, networks, data, keys, suppliers, staff, facilities, and monitoring required for restoration.",
    "example": "Identity service, database, reporting application, network path, backup key, and two trained operators.",
    "quality": "Dependencies are mapped in restore order and tested together."
  },
  {
    "field": "Recovery owner",
    "purpose": "Assigns fictional business and technical authority for priority, tradeoffs, validation, and residual risk.",
    "example": "Business Service Executive owns priority; Recovery Team Lead owns execution.",
    "quality": "Business decision authority and technical execution are both explicit."
  },
  {
    "field": "Validation and review",
    "purpose": "Defines fictional evidence that recovery works and the next test or reassessment trigger.",
    "example": "User acceptance, data checks, approved access, monitoring, restore timing, and quarterly exercise.",
    "quality": "Recovery is not closed until service, data, users, owners, and monitoring pass."
  }
];
const assetRecords = [
  {
    "id": "NBR-BIA-01",
    "asset": "Learning Portal",
    "owner": "Learning Service Owner",
    "classification": "Critical Service",
    "dependencies": "Identity service, application platform, progress database, network edge, monitoring, support team",
    "impact": "Student lesson access and teacher progress visibility could be interrupted.",
    "recovery": "RTO 2 hours; RPO 15 minutes; minimum service is lesson access without analytics.",
    "limit": "Impact varies outside active school hours."
  },
  {
    "id": "NBR-BIA-02",
    "asset": "Progress Database",
    "owner": "Learning Data Owner",
    "classification": "Confidential Data",
    "dependencies": "Database platform, encryption key, application identity, network path, backup vault, recovery operator",
    "impact": "Progress records could be unavailable, stale, or inconsistent.",
    "recovery": "RTO 3 hours; RPO 30 minutes; restore test passed in the last fictional quarter.",
    "limit": "No current data loss or corruption is confirmed."
  },
  {
    "id": "NBR-BIA-03",
    "asset": "Reporting Service",
    "owner": "Business Recovery Owner Missing",
    "classification": "Critical Service",
    "dependencies": "Progress database, report engine, identity service, export storage, two technical operators",
    "impact": "Teacher deadlines and leadership decisions could be delayed.",
    "recovery": "Procedure exists; RTO 4 hours; business validation owner is not confirmed.",
    "limit": "Technical recovery may still succeed despite the ownership gap."
  },
  {
    "id": "NBR-BIA-04",
    "asset": "Support Attachment Store",
    "owner": "Support Data Owner",
    "classification": "Confidential Data",
    "dependencies": "Support application, storage service, service identity, retention policy, object logging, backup decision",
    "impact": "Support investigations and user communication could be delayed.",
    "recovery": "RTO 8 hours; RPO 4 hours; one historical collection is outside backup scope.",
    "limit": "Some attachments may be reproducible from approved source records."
  },
  {
    "id": "NBR-BIA-05",
    "asset": "Identity Service",
    "owner": "Identity Governance",
    "classification": "Foundational Service",
    "dependencies": "Directory, authentication service, privileged access, federation, monitoring, emergency process",
    "impact": "Most user and administrator access could be disrupted.",
    "recovery": "RTO 1 hour; minimum service supports core users and emergency administration.",
    "limit": "Some service identities may continue through existing sessions."
  },
  {
    "id": "NBR-BIA-06",
    "asset": "Cloud Monitoring Platform",
    "owner": "Security Operations",
    "classification": "Critical Evidence Service",
    "dependencies": "Log sources, delivery pipeline, storage, parsing, access, time synchronization, analysts",
    "impact": "Detection, investigation, validation, and negative conclusions could weaken.",
    "recovery": "RTO 2 hours; RPO 15 minutes; temporary source buffering is documented.",
    "limit": "Operational services may continue while evidence quality decreases."
  },
  {
    "id": "NBR-BIA-07",
    "asset": "Support Vendor",
    "owner": "Third-Party Risk Owner",
    "classification": "Important Supplier",
    "dependencies": "Contract, sponsor, support platform, limited access, incident contact, offboarding",
    "impact": "Support response may slow and stale access risk may increase.",
    "recovery": "Alternate internal support process can operate at reduced capacity within 6 hours.",
    "limit": "No current supplier outage or misuse is confirmed."
  },
  {
    "id": "NBR-BIA-08",
    "asset": "Recovery Team",
    "owner": "Continuity Manager",
    "classification": "Critical People Capability",
    "dependencies": "Two trained operators, secure communication, procedures, recovery credentials, provider support, exercises",
    "impact": "Recovery may be delayed if both trained operators are unavailable.",
    "recovery": "One backup operator is in training; exercise scheduled in thirty fictional days.",
    "limit": "Current availability of the primary operators is not in question."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional BIA question",
    "detail": "State the services, processes, users, data, suppliers, locations, time period, authority, evidence, privacy limits, and required decisions.",
    "output": "Business-impact analysis charter."
  },
  {
    "step": "2",
    "title": "Inventory assets and owners",
    "detail": "Map fictional business, data, technology, people, supplier, facility, process, and reputation assets with accountable owners.",
    "output": "Asset and ownership register."
  },
  {
    "step": "3",
    "title": "Map dependencies",
    "detail": "Identify fictional upstream and downstream services, identities, data, networks, suppliers, facilities, people, keys, monitoring, and recovery paths.",
    "output": "Dependency and concentration map."
  },
  {
    "step": "4",
    "title": "Evaluate impact dimensions",
    "detail": "Assess fictional confidentiality, integrity, availability, privacy, safety, financial, operational, reputation, compliance, and recovery consequences.",
    "output": "Business-impact matrix."
  },
  {
    "step": "5",
    "title": "Set recovery priorities",
    "detail": "Document fictional criticality, maximum tolerable disruption, RTO, RPO, minimum service level, dependencies, owners, and validation.",
    "output": "Recovery-priority register."
  },
  {
    "step": "6",
    "title": "Validate assumptions and evidence",
    "detail": "Review fictional service volumes, deadlines, user needs, classifications, incident history, backup tests, supplier records, staffing, and limitations.",
    "output": "Evidence and assumption register."
  },
  {
    "step": "7",
    "title": "Identify gaps and actions",
    "detail": "Prioritize fictional missing owners, untested dependencies, concentration risk, incomplete backup scope, weak alternate processes, and stale records.",
    "output": "BIA findings and action plan."
  },
  {
    "step": "8",
    "title": "Review and communicate",
    "detail": "Confirm fictional priorities, tradeoffs, residual risk, leadership decisions, next exercises, reassessment triggers, and portfolio safety.",
    "output": "Reviewed business-impact package."
  }
];
const findings = [
  {
    "id": "NBR-BIA-F01",
    "statement": "The fictional Identity Service is the highest recovery priority because most user and administrator access depends on it and the minimum service target is one hour.",
    "support": "Service map, dependency register, user population, emergency-access design, monitoring, and recovery objective.",
    "alternative": "Some existing service sessions may temporarily reduce immediate disruption.",
    "confidence": "High",
    "limitation": "The exact user impact depends on session duration and time of disruption."
  },
  {
    "id": "NBR-BIA-F02",
    "statement": "The fictional Reporting Service has a governance-related recovery risk because its procedure and technical operators exist but business validation ownership is missing.",
    "support": "Service criticality, recovery procedure, operator roster, report deadlines, owner map, and escalation chart.",
    "alternative": "An informal business validator may exist outside the supplied records.",
    "confidence": "Medium-High",
    "limitation": "The ownership gap does not prove technical recovery will fail."
  },
  {
    "id": "NBR-BIA-F03",
    "statement": "The fictional Recovery Team has a people-concentration risk because only two trained operators currently hold the complete execution capability.",
    "support": "Training records, role map, exercise results, backup-operator status, procedure ownership, and contact list.",
    "alternative": "Provider support and partial team knowledge may reduce the impact.",
    "confidence": "High",
    "limitation": "The primary operators are currently available."
  },
  {
    "id": "NBR-BIA-F04",
    "statement": "The fictional Support Attachment Store requires a documented decision about the historical collection outside backup scope.",
    "support": "Data inventory, classification, backup map, retention, recovery objective, reproducibility claim, and owner review.",
    "alternative": "The collection may be safely reproducible from approved source records.",
    "confidence": "Medium-High",
    "limitation": "Reconstruction time and completeness have not been validated."
  },
  {
    "id": "NBR-BIA-F05",
    "statement": "The fictional Monitoring Platform is a critical evidence dependency even though most business services can continue during a short monitoring outage.",
    "support": "Detection use, incident workflow, validation needs, source buffering, analyst dependency, and recovery objective.",
    "alternative": "Temporary buffering and local application logs may preserve partial evidence.",
    "confidence": "High",
    "limitation": "Reduced evidence quality is not the same as direct business-service unavailability."
  },
  {
    "id": "NBR-BIA-F06",
    "statement": "The safest recovery order begins with identity, core data, learning service, monitoring, reporting, and support functions while supplier and full-feature restoration follow business deadlines.",
    "support": "Criticality, user dependencies, RTO, RPO, minimum service levels, data relationships, staffing, and alternate processes.",
    "alternative": "A major incident, deadline, or safety condition could change the order.",
    "confidence": "High",
    "limitation": "Final priority requires fictional business-owner approval."
  }
];
const commonMistakes = [
  "Treating fictional asset inventory as a list of devices while ignoring data, services, people, suppliers, processes, facilities, reputation, and recovery capability.",
  "Assigning technical owners but no business, data, risk, or recovery owners.",
  "Treating every system as equally critical.",
  "Setting fictional RTO and RPO values from technical preference without business evidence.",
  "Confusing recovery time objective with maximum tolerable disruption.",
  "Confusing recovery point objective with backup retention.",
  "Assuming a backup job proves that the full service and all dependencies can recover.",
  "Ignoring identity, key, network, supplier, monitoring, staffing, and facility dependencies during recovery planning.",
  "Treating potential business impact as confirmed impact.",
  "Using exact financial estimates without assumptions, ranges, owners, and evidence.",
  "Ignoring seasonal deadlines, user populations, minimum service levels, and alternate processes.",
  "Closing a business-impact gap when a document changes without testing the actual recovery path.",
  "Failing to reassess after major service, data, supplier, staffing, or technology changes.",
  "Using or exposing any real company asset inventory, employee record, supplier contract, school data, recovery plan, credential, architecture, or confidential business information."
];
const quizQuestions = [
  {
    "question": "What is the purpose of a fictional business-impact analysis?",
    "choices": [
      "Identify critical activities, dependencies, disruption consequences, recovery priorities, and evidence needed for continuity decisions.",
      "List only technical devices.",
      "Predict a confirmed future outage.",
      "Replace all risk assessment."
    ],
    "answer": 0,
    "explanation": "A BIA connects business needs, dependencies, impact, and recovery decisions."
  },
  {
    "question": "What is the difference between fictional RTO and RPO?",
    "choices": [
      "RTO is the target time to restore service, while RPO is the maximum acceptable data-loss window.",
      "They are identical.",
      "RPO is the outage limit and RTO is retention.",
      "RTO applies only to suppliers."
    ],
    "answer": 0,
    "explanation": "RTO measures restoration time; RPO measures acceptable data loss in time."
  },
  {
    "question": "Which asset should usually receive the highest fictional recovery priority?",
    "choices": [
      "The asset whose disruption most strongly affects critical users, services, dependencies, deadlines, and recovery objectives.",
      "The newest asset.",
      "The most expensive asset only.",
      "The asset with the longest name."
    ],
    "answer": 0,
    "explanation": "Recovery priority is based on business criticality and dependencies, not one simple attribute."
  },
  {
    "question": "What does a fictional missing recovery owner prove?",
    "choices": [
      "Business decision authority is unclear, but technical recovery failure is not automatically proven.",
      "The service will definitely fail.",
      "A confirmed incident occurred.",
      "No recovery procedure exists."
    ],
    "answer": 0,
    "explanation": "Ownership gaps create governance risk while preserving technical uncertainty."
  },
  {
    "question": "Why should fictional dependency concentration be documented?",
    "choices": [
      "Several critical services may fail or recover slowly if they rely on the same person, supplier, identity, key, region, or system.",
      "Dependencies never affect recovery.",
      "Only suppliers create concentration risk.",
      "Concentration automatically proves an outage."
    ],
    "answer": 0,
    "explanation": "Shared dependencies can expand impact and recovery delay."
  },
  {
    "question": "What makes a fictional recovery objective defensible?",
    "choices": [
      "It is supported by business owners, user needs, impact evidence, dependencies, technical capability, validation, and review.",
      "It is copied from another service.",
      "It is the shortest possible time.",
      "It has no named owner."
    ],
    "answer": 0,
    "explanation": "Recovery objectives should be business-supported and technically testable."
  },
  {
    "question": "What makes a fictional BIA finding defensible?",
    "choices": [
      "It links assets, owners, data, dependencies, impact dimensions, recovery objectives, evidence, alternatives, confidence, limitations, and actions.",
      "It relies on one spreadsheet score.",
      "It assumes all disruption causes maximum impact.",
      "It ignores recovery validation."
    ],
    "answer": 0,
    "explanation": "Defensible BIA reasoning is transparent, evidence-based, and owned."
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

export default function AssetDataBusinessImpactAnalysisPage() {
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
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I14.3 Asset, Data, and Business Impact Analysis
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders map fictional assets, data, services, users,
            suppliers, processes, dependencies, impact dimensions, recovery
            objectives, ownership, priorities, and evidence.
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
          lessonTitle="Asset, Data, and Business Impact Analysis"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge asset, service, data, supplier, dependency, impact, and recovery records.",
            "I will not request, expose, or evaluate any real company asset inventory, employee record, supplier contract, school data, recovery plan, credential, architecture, or confidential business information.",
            "I will distinguish asset value, ownership, classification, criticality, dependency, impact, RTO, RPO, maximum tolerable disruption, and minimum service level.",
            "I will not describe possible impact as confirmed impact.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Most Important Asset May Be a Service, Person, Dependency, or Decision—not a Device"
        >
          <p className="leading-8">
            The fictional Northbridge organization depends on learning,
            identity, reporting, monitoring, support, supplier, data, and
            recovery capabilities. One critical service has a strong technical
            procedure but no confirmed business recovery owner. One historical
            data collection is outside backup scope. One monitoring platform is
            essential for evidence even though business services can continue
            briefly without it. A useful BIA connects all of these relationships
            instead of ranking devices by cost alone.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak BIA
              </p>

              <p className="mt-2 leading-7">
                Inventory only servers, give every service the same priority,
                copy recovery numbers without business evidence, and ignore
                people, suppliers, data, identities, and alternate processes.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional BIA
              </p>

              <p className="mt-2 leading-7">
                Map all assets and dependencies, evaluate several impact
                dimensions, assign owners, define minimum service, set
                evidence-based recovery objectives, test dependencies, and
                review assumptions.
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
          title="Recovery Priorities Must Reflect Business Need and Dependency Order"
        >
          <p className="leading-8">
            A fictional service may have a short recovery target but still fail
            if identity, data, keys, networks, suppliers, people, or monitoring
            are unavailable. A less visible process may be more critical than a
            highly visible application. A BIA helps leaders decide what must
            continue, what can operate in reduced mode, what can wait, which
            dependencies create concentration risk, and which assumptions must
            be tested before a real disruption.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Asset–Dependency–Impact–Recovery Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Asset", "Which fictional service, data, person, process, supplier, facility, system, reputation, or capability has value and an owner?"],
              ["Dependency", "Which fictional identity, data, network, key, supplier, person, location, system, monitoring source, or process must function first?"],
              ["Impact", "Which fictional confidentiality, integrity, availability, privacy, safety, financial, operational, reputation, compliance, or recovery effects could occur?"],
              ["Recovery", "Which fictional priority, maximum disruption, RTO, RPO, minimum service, owner, test, validation, alternate process, and review are required?"],
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
            Asset, Impact, Dependency, and Recovery Terms
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
            Asset Categories
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Types of Fictional Assets to Include
          </h2>

          <div className="mt-6 grid gap-5">
            {assetCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.category}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Examples
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.examples}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Possible impact
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.impact}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Impact Dimensions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Ways a Fictional Disruption Could Matter
          </h2>

          <div className="mt-6 grid gap-5">
            {impactDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.dimension}
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

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Important limit
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
            Recovery Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for Fictional Recovery Priorities
          </h2>

          <div className="mt-6 grid gap-5">
            {recoveryFields.map((item) => (
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
            Asset and Recovery Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Asset Records
          </h2>

          <div className="mt-6 grid gap-5">
            {assetRecords.map((item) => (
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

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.classification}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Dependencies", item.dependencies],
                    ["Potential impact", item.impact],
                    ["Recovery target", item.recovery],
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
            Complete a Fictional Asset and Business-Impact Analysis
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
          title="Fake Northbridge Business-Impact Dashboard"
          subtitle="Training dashboard for fictional asset and recovery evidence only."
          metrics={[
            {
              label: "Assets reviewed",
              value: "8",
              note: "Services, data, identity, monitoring, supplier, people, and recovery assets are mapped.",
            },
            {
              label: "Critical dependencies",
              value: "6",
              note: "Identity, progress data, monitoring, recovery staff, keys, and network paths affect several services.",
            },
            {
              label: "Confirmed outages",
              value: "0",
              note: "The supplied fictional evidence supports impact scenarios and recovery gaps but no current outage or data loss.",
            },
          ]}
        />

        <FakeAlertCard
          title="Critical Reporting Service Has No Confirmed Business Recovery Owner"
          severity="High"
          time="11:05 AM"
          source="Fake Business-Impact Console"
          details="The fictional reporting service has a tested technical procedure and two operators, but the business owner responsible for recovery priority, user validation, and residual-risk decisions is not confirmed."
          recommendation="Assign an authorized business recovery owner, confirm critical periods, maximum tolerable disruption, RTO, RPO, minimum service level, users, dependencies, alternate process, validation, escalation, and next exercise. Preserve the technical strengths while addressing the governance gap without claiming recovery failure."
        />

        <FakeLogPanel
          title="Fake Northbridge BIA Review Records"
          logs={[
            "09:00 CHARTER scope='asset data and business impact analysis'",
            "09:08 ASSET learning-portal criticality='Critical Service'",
            "09:16 ASSET progress-database classification='Confidential'",
            "09:24 ASSET reporting-service business-recovery-owner='missing'",
            "09:32 ASSET identity-service RTO='1 hour'",
            "09:40 ASSET monitoring-platform evidence-critical='true'",
            "09:48 ASSET support-store backup-scope='historical collection excluded'",
            "09:56 PEOPLE recovery-team trained-operators='2'",
            "10:04 DEPENDENCY concentration='identity + keys + staff'",
            "10:12 IMPACT confirmed_outage='none'",
            "10:20 PRIORITY identity='1' data='2' learning='3'",
            "10:28 RECOVERY reporting RTO='4 hours' validation-owner='missing'",
            "10:36 RECOVERY support RPO='4 hours'",
            "10:44 ACTION assign-recovery-owner='required'",
            "10:52 ACTION validate-backup-exclusion='required'",
            "11:00 REVIEW exercise='schedule and test'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Business-Impact Findings and Limits
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
          title="What Does the Missing Recovery Owner Prove?"
          evidence={[
            "The fictional reporting service is business-critical during deadline periods.",
            "A technical recovery procedure exists.",
            "Two trained technical operators are assigned.",
            "The RTO is four fictional hours.",
            "No business owner is assigned to validate minimum service or accept recovery risk.",
            "No current outage or failed recovery is shown.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The service has a governance-related recovery gap requiring an authorized business owner, but technical recovery failure is not proven.",
            "The service will definitely fail.",
            "A confirmed outage occurred.",
            "No action is needed because technical operators exist.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes the ownership gap while preserving the technical and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Asset and Business-Impact Analysis"
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
          title="Build the Northbridge Asset, Data, and Business-Impact Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Assets, Dependencies, Impact, Recovery, Ownership, and Validation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end asset, data, and business-impact analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>BIA charter with scope, authority, services, users, evidence, privacy, and decisions.</li>
                <li>Asset and ownership register across business, data, technology, people, suppliers, facilities, processes, and reputation.</li>
                <li>Upstream, downstream, shared, and concentration dependency map.</li>
                <li>Impact matrix covering confidentiality, integrity, availability, privacy, safety, financial, operational, reputation, and compliance effects.</li>
                <li>Criticality, maximum disruption, RTO, RPO, minimum service, and recovery-priority register.</li>
                <li>Evidence, assumption, alternative, confidence, and limitation review.</li>
                <li>Findings with owners, due dates, validation, exercises, reassessment triggers, and residual risk.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real company, employee, supplier, school, recovery,
            credential, architecture, or confidential business information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Critical Service Has a Short RTO but an Untested Dependency"
          scenario="The fictional learning portal has a two-hour RTO, but its identity and key dependencies were not included in the last recovery exercise."
          choices={[
            {
              label: "Choice A",
              response:
                "Record the dependency gap, preserve the current RTO as provisional, test the full recovery chain, assign owners, measure actual timing, and update the objective if evidence requires.",
              outcome:
                "Best BIA choice. The recovery target remains evidence-based and testable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the two-hour target is guaranteed because it appears in the plan.",
              outcome:
                "Unsupported. Untested dependencies may change recovery time.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove the RTO entirely.",
              outcome:
                "Weak. The target should be validated, not abandoned.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Historical Data Collection Is outside Backup Scope"
          scenario="The fictional support attachment store excludes one older collection from backup, and the owner believes it can be reconstructed."
          choices={[
            {
              label: "Choice A",
              response:
                "Validate classification, uniqueness, reconstruction source, time, completeness, cost, owner approval, retention, minimum service, and residual risk before accepting the exclusion.",
              outcome:
                "Best BIA choice. The backup decision is tied to business evidence and recovery capability.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the collection is unnecessary because it is old.",
              outcome:
                "Unsupported. Age alone does not determine business value.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Claim data loss has already occurred.",
              outcome:
                "Unsupported. The evidence describes a recovery gap, not confirmed loss.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Asset, Data, and Business-Impact Analysis Checklist"
          items={[
            "I can identify fictional business, data, technology, people, supplier, facility, process, reputation, and recovery assets.",
            "I can assign fictional asset, data, service, supplier, process, risk, and recovery owners.",
            "I can map fictional upstream, downstream, shared, and concentrated dependencies.",
            "I can evaluate confidentiality, integrity, availability, privacy, safety, financial, operational, reputation, compliance, and recovery impact.",
            "I can distinguish potential impact from confirmed impact.",
            "I can explain fictional criticality, maximum tolerable disruption, RTO, RPO, minimum service level, and recovery priority.",
            "I can validate fictional recovery objectives through business evidence, technical capability, dependencies, testing, and owner approval.",
            "I can identify people, supplier, identity, key, network, monitoring, and facility concentration risk.",
            "I can write fictional findings with evidence, alternatives, confidence, limitations, owners, actions, exercises, and reassessment triggers.",
            "I will use only fictional evidence and never expose real asset inventories, company systems, employee data, school records, supplier contracts, recovery plans, credentials, or confidential business information.",
          ]}
        />

        <MiniQuiz
          title="I14.3 Mini Quiz: Asset, Data, and Business Impact Analysis"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Asset, Data, and Business-Impact Analysis Package for Northbridge. Include the BIA charter, asset and ownership register, data classifications, service map, user and supplier dependencies, dependency concentration analysis, impact dimensions, criticality tiers, maximum tolerable disruption, RTO, RPO, minimum service levels, recovery sequence, assumptions, alternatives, confidence, limitations, findings, owner actions, exercises, reassessment triggers, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional services, assets, data, suppliers, users, owners, recovery targets, evidence, dates, and decisions.",
            "Do not treat a dependency gap, backup exclusion, missing owner, or short recovery target as proof of an outage or confirmed data loss.",
            "Make every recovery objective traceable to business need, technical capability, dependency evidence, testing, and owner approval.",
            "Show both the full recovery target and the minimum acceptable service during disruption.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Assets include services, data, people, suppliers, processes, facilities, reputation, and recovery capability—not only devices.",
            "Business-impact analysis connects asset value, dependencies, consequences, recovery priorities, ownership, and evidence.",
            "RTO describes restoration time, while RPO describes acceptable data loss in time.",
            "Potential impact should remain separate from confirmed impact.",
            "Recovery objectives should be business-supported, technically feasible, dependency-aware, tested, and reviewed.",
            "Concentration risk can exist in people, suppliers, identities, keys, regions, systems, and recovery paths.",
            "Portfolio artifacts should use fully fictional BIA evidence and never expose real organizational records.",
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