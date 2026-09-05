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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = modulePath;
const nextLesson = `${modulePath}/authentication-and-session-design`;

const objectives = [
  "Explain how secure web architecture connects business purpose, assets, users, trust boundaries, data flows, identity, application services, APIs, data stores, administrative functions, suppliers, monitoring, and recovery.",
  "Evaluate fictional web architectures using least exposure, secure defaults, separation of responsibilities, least privilege, resilience, observability, privacy, and owner accountability.",
  "Distinguish architecture dependencies from security assumptions and explain why every trust boundary and dependency should have an owner, purpose, expected behavior, and review condition.",
  "Use fictional evidence to identify architecture-level strengths, weaknesses, Unknowns, single points of failure, excessive trust, monitoring gaps, and recovery dependencies without offensive exploitation.",
  "Create a professional fictional Web Architecture Review package containing assets, data flows, trust boundaries, owners, security goals, assumptions, design decisions, risks, validation questions, and public-safe diagrams."
];

const vocabulary = [
  [
    "Web architecture",
    "The fictional structure connecting browser-facing components, application services, identity, data services, APIs, administration, suppliers, monitoring, and recovery."
  ],
  [
    "Asset",
    "A fictional system, service, data set, account, API, workflow, administrative function, secret class, or business capability that needs protection."
  ],
  [
    "Trust boundary",
    "A conceptual point where data, identity, privilege, ownership, environment, or control assumptions change and should be re-evaluated."
  ],
  [
    "Data flow",
    "A fictional movement of information between users, browsers, application services, identity systems, APIs, data services, suppliers, or monitoring systems."
  ],
  [
    "Attack surface",
    "In A10, a high-level defensive concept describing which fictional components or interfaces are exposed to interaction. This lesson does not teach exploitation of those interfaces."
  ],
  [
    "Least exposure",
    "A design principle that keeps fictional services, administrative functions, data, and interfaces available only to the users or systems that need them."
  ],
  [
    "Secure default",
    "A fictional design state that starts with restrictive, safe assumptions and requires deliberate owner approval before adding access, exposure, or capability."
  ],
  [
    "Separation of responsibilities",
    "Dividing fictional browser, application, identity, data, administrative, monitoring, and recovery duties so one component does not unnecessarily hold every privilege."
  ],
  [
    "Dependency",
    "A fictional internal or third-party service that another component needs for authentication, data, messaging, monitoring, storage, recovery, or another business function."
  ],
  [
    "Single point of failure",
    "A fictional component whose failure could stop a critical service because no acceptable alternate path or recovery design exists."
  ],
  [
    "Observability",
    "The ability of fictional defenders and service owners to understand important system state through approved logs, health signals, audit records, and monitoring sources."
  ],
  [
    "Resilience",
    "A fictional system's ability to continue critical business functions, recover safely, and maintain essential visibility when one component or dependency fails."
  ],
  [
    "Assumption",
    "A fictional statement believed to be true for the architecture review but not yet fully validated."
  ],
  [
    "Compensating control",
    "A fictional defensive measure that reduces risk when the preferred architecture change cannot yet be implemented."
  ],
  [
    "Architecture decision record",
    "A fictional document explaining a design choice, security goal, alternatives, tradeoffs, owners, validation, residual risk, and review triggers."
  ]
];

const principles = [
  [
    "Start with business purpose",
    "A web system exists to support a fictional user or business capability. Security decisions should protect that purpose rather than treat controls as isolated settings.",
    "Which users, workflows, data, service levels, and business outcomes must the architecture protect?"
  ],
  [
    "Map trust boundaries",
    "Browser-to-application, application-to-identity, application-to-data, application-to-API, administration, supplier, monitoring, and recovery relationships all involve different trust assumptions.",
    "Where does identity, privilege, ownership, environment, or data sensitivity change?"
  ],
  [
    "Use least exposure",
    "Public-facing functions should not automatically expose administrative, data, monitoring, or recovery functions.",
    "Which fictional component truly needs to be reachable by which user or service?"
  ],
  [
    "Separate responsibilities",
    "A single fictional component should not unnecessarily hold browser-facing duties, administrative privilege, identity authority, data control, and recovery access at the same time.",
    "Can responsibilities be separated so one failure does not grant excessive capability?"
  ],
  [
    "Use secure defaults",
    "Default architecture states should minimize access, privilege, data exposure, and optional capability until an owner approves a business need.",
    "What is the safest reasonable default if no exception has been approved?"
  ],
  [
    "Treat dependencies as governed trust",
    "Internal and third-party services may be necessary, but they should have purpose, owner, expected behavior, monitoring, failure planning, and re-review conditions.",
    "What would change if this fictional dependency became unavailable, unexpected, or no longer trusted?"
  ],
  [
    "Design observability",
    "Important authentication, access, configuration, administrative, application, dependency, and recovery events should be visible to the correct fictional owners.",
    "Which defender questions must the architecture be able to answer later?"
  ],
  [
    "Design for failure",
    "A secure architecture assumes components, suppliers, monitoring sources, and recovery paths can fail.",
    "What critical business function continues if one fictional component or dependency becomes unavailable?"
  ],
  [
    "Protect privacy by architecture",
    "Minimization, data classification, separation, retention, access, logging, and supplier handling should be designed before unnecessary data spreads across the system.",
    "Can the same fictional business goal be achieved with less personal or sensitive information?"
  ],
  [
    "Make ownership explicit",
    "Architecture risks remain unresolved when no one owns the service, dependency, trust assumption, exception, monitoring source, or recovery decision.",
    "Who owns this fictional component, decision, validation, and re-review?"
  ]
];

const workflow = [
  [
    "1. Define purpose and scope",
    "Identify the fictional web service, user groups, business workflows, security goals, sensitive data, availability needs, privacy goals, owners, exclusions, and public-safe boundaries.",
    "Architecture review charter."
  ],
  [
    "2. Inventory assets",
    "List browser-facing components, application services, identity services, data services, APIs, administrative functions, suppliers, monitoring sources, recovery services, and important data classes.",
    "Asset and owner register."
  ],
  [
    "3. Map data flows",
    "Describe how fictional users and services exchange authentication context, requests, responses, case data, reporting data, administrative actions, monitoring events, and recovery information.",
    "High-level data-flow map."
  ],
  [
    "4. Mark trust boundaries",
    "Identify where identity, privilege, network environment, application responsibility, data sensitivity, supplier ownership, or administrative authority changes.",
    "Trust-boundary map."
  ],
  [
    "5. Review exposure",
    "Ask which fictional functions must be user-facing, service-facing, administrator-only, internal, monitored, or recovery-only.",
    "Exposure and access-purpose matrix."
  ],
  [
    "6. Review dependencies",
    "Document internal and supplier dependencies, expected behavior, owners, service importance, monitoring, alternatives, failure effect, and recovery expectations.",
    "Dependency register."
  ],
  [
    "7. Review observability",
    "Identify which important fictional state changes and decisions must be visible to application, identity, service, monitoring, privacy, and recovery owners.",
    "Defender-question and visibility map."
  ],
  [
    "8. Review resilience",
    "Identify single points of failure, alternate workflows, recovery paths, dependency failure modes, monitoring dependencies, and acceptable degraded operation.",
    "Resilience and continuity map."
  ],
  [
    "9. Record architecture decisions",
    "For each important design choice, document security goal, alternatives, tradeoffs, owner, assumptions, validation, residual risk, and review triggers.",
    "Architecture decision records."
  ],
  [
    "10. Review and improve",
    "Prioritize fictional architecture findings, assign owners, define validation questions, record accepted risk, and set re-review conditions after meaningful change.",
    "Web architecture review package."
  ]
];

const zones = [
  [
    "Zone A — Browser / User Interface",
    "Presents the fictional Support Portal to approved users and collects only the information needed for supported workflows.",
    "Treat browser-originated state and data as untrusted until validated by the application and relevant owners.",
    "Which data is displayed? Which actions are available? Which state belongs only on the server side? Which privacy and session assumptions apply?"
  ],
  [
    "Zone B — Application Service",
    "Coordinates fictional business logic, user workflows, authorization checks, validation, service calls, and response generation.",
    "Acts as a central decision point but should not assume that browser, API, supplier, or identity data is automatically trustworthy.",
    "Which responsibilities belong here? Which privileges are necessary? Which actions require independent authorization and audit?"
  ],
  [
    "Zone C — Identity Service",
    "Provides fictional authentication, session, recovery, and identity context to approved web services.",
    "Identity information should be validated, scoped, monitored, and kept separate from application authorization decisions.",
    "Which identity facts are needed? How does recovery work? How does session state affect risk? Which owner reviews high-risk changes?"
  ],
  [
    "Zone D — Data Service",
    "Stores fictional account, case, reporting, and service information under controlled access.",
    "Data sensitivity, ownership, purpose, access need, retention, backup, and monitoring should be explicit.",
    "Which data classes exist? Who may access them? How are administrative and application access separated? Which data should not be stored?"
  ],
  [
    "Zone E — API Services",
    "Provides fictional internal service contracts for account, case, reporting, and administrative workflows.",
    "Every caller, action, resource, input, output, and dependency relationship needs explicit defensive expectations.",
    "Who calls the API? What may they do? Which objects do they own? Which requests are valid? Which events should be logged?"
  ],
  [
    "Zone F — Administrative Functions",
    "Supports fictional privileged service configuration, user support, workflow administration, and security-sensitive changes.",
    "Administrative capability should be separated, least-privileged, strongly owned, monitored, and inaccessible to ordinary users.",
    "Which actions are privileged? Who approves access? How are changes reviewed? Which emergency paths exist and how are they governed?"
  ],
  [
    "Zone G — Monitoring and Audit",
    "Receives fictional security, health, access, application, configuration, dependency, and recovery events needed for defender questions.",
    "Monitoring should preserve source health, integrity, privacy, ownership, and decision relevance.",
    "Which events answer real defender questions? Which data should be minimized? What happens when a source becomes Degraded or Blind?"
  ],
  [
    "Zone H — Recovery and Continuity",
    "Supports fictional backup, restoration, alternate workflow, configuration recovery, and service continuity planning.",
    "Recovery needs separate ownership, dependency awareness, validation, monitoring, rollback, and return-to-service criteria.",
    "Which dependencies must exist for recovery? Which state is trusted? What business gap is acceptable? How is successful recovery validated?"
  ],
  [
    "Zone I — Supplier / External Dependency",
    "Provides a fictional third-party service required for a limited business function.",
    "Supplier access should be purpose-limited, owner-approved, monitored, documented, and designed for failure or change.",
    "Why is the dependency needed? What data is shared? Which service level matters? What happens if the supplier is unavailable or changes behavior?"
  ]
];

const trustBoundaries = [
  [
    "Browser → Application",
    "Data and actions move from a user-controlled fictional environment into server-side business logic.",
    "Validation, session context, authorization, safe output, error handling, request purpose, privacy, and monitoring.",
    "A browser request is not automatically trusted because it came from an authenticated user."
  ],
  [
    "Application → Identity",
    "Application decisions depend on identity and session context owned by another fictional service.",
    "Identity purpose, session lifecycle, recovery, failure behavior, data minimization, monitoring, and service ownership.",
    "Identity confirmation does not automatically authorize every application action."
  ],
  [
    "Application → Data",
    "Business logic requests access to fictional sensitive or important records.",
    "Least privilege, object ownership, service identity, data classification, logging, retention, backup, and audit.",
    "Application connectivity does not mean every data action is permitted."
  ],
  [
    "Application → API",
    "The application becomes a caller of another fictional service contract.",
    "Caller identity, authorization, schemas, ownership, errors, versioning, monitoring, resilience, and dependency trust.",
    "Internal service status does not eliminate the need for authorization and validation."
  ],
  [
    "Application → Supplier",
    "Data or service requests cross into a fictional third-party ownership domain.",
    "Business purpose, data minimization, expected behavior, contractual role, monitoring, outage planning, and re-review.",
    "A contracted supplier is not automatically trusted for unlimited data or capability."
  ],
  [
    "Administrator → Administrative Function",
    "A fictional user receives higher-impact capability than ordinary service users.",
    "Strong identity, least privilege, approval, separation, logging, change review, session controls, and emergency access governance.",
    "Employment role or seniority does not automatically justify every administrative capability."
  ],
  [
    "Production → Monitoring",
    "Security and operational events leave source systems and enter fictional visibility pipelines.",
    "Source health, integrity, minimization, retention, access, correlation, alert quality, and privacy.",
    "A collected log does not automatically mean the event is complete, independent, or correctly interpreted."
  ],
  [
    "Production → Recovery",
    "Fictional operational state must be preserved or restored through separate resilience processes.",
    "Trust, provenance, dependencies, owner approval, validation, rollback, re-containment, and monitoring.",
    "A backup or available service does not automatically mean recovery is trustworthy or complete."
  ]
];

const evidenceSet = [
  [
    "ARCH-01",
    "Fictional architecture diagram",
    "Current",
    "The Support Portal connects to Identity I, Data D, API P, Monitoring M, Recovery R, and Supplier S.",
    "A high-level dependency and trust-boundary review.",
    "The diagram does not prove that permissions, validation, monitoring, or resilience are correct.",
    "Asset inventory, boundary mapping, dependency review, and owner questions."
  ],
  [
    "ARCH-02",
    "Fictional service-owner note",
    "Current",
    "Administrative Console F is used only for privileged configuration and support operations.",
    "Administrative separation as an explicit design goal.",
    "Does not prove the console is inaccessible to ordinary users or that privilege is minimal.",
    "Administrative access, session, logging, approval, and monitoring review."
  ],
  [
    "ARCH-03",
    "Fictional data inventory",
    "Current",
    "Case Data D contains support case content, service metadata, and minimized fictional user contact fields.",
    "Data classification, privacy, access, retention, logging, and recovery review.",
    "Does not prove data minimization or retention is implemented correctly.",
    "Privacy and data-governance questions."
  ],
  [
    "ARCH-04",
    "Fictional API contract summary",
    "Conditional",
    "API P documents caller roles and resource categories, but object-ownership rules are not fully described.",
    "A useful API contract exists but one authorization assumption remains incomplete.",
    "Does not prove an access-control failure.",
    "Record an architecture Unknown and assign API/application owners."
  ],
  [
    "ARCH-05",
    "Fictional monitoring design",
    "Healthy",
    "Authentication, authorization decisions, administrative changes, application errors, configuration changes, and recovery events are monitored.",
    "Good high-level observability coverage.",
    "Does not prove alert quality, complete source health, appropriate retention, or privacy minimization.",
    "Monitoring coverage and defender-question review."
  ],
  [
    "ARCH-06",
    "Fictional recovery map",
    "Current",
    "Recovery R depends on Identity I, Data D, and Monitoring M for staged validation.",
    "Recovery is treated as an architecture dependency rather than an isolated backup function.",
    "Does not prove recovery points are trustworthy or that recovery targets are met.",
    "Resilience, dependency, and single-point-of-failure review."
  ],
  [
    "ARCH-07",
    "Fictional supplier record",
    "Current",
    "Supplier S receives only a limited fictional service identifier and status value for one support function.",
    "Purpose limitation and data minimization are design goals.",
    "Does not prove all supplier processing, retention, access, or failure handling is acceptable.",
    "Third-party trust, privacy, monitoring, and failure-planning review."
  ],
  [
    "ARCH-08",
    "Fictional change record",
    "Current",
    "A planned feature would allow the browser-facing portal to call a new reporting function directly rather than through the existing application service.",
    "A meaningful architecture change is proposed.",
    "Does not prove the design is insecure.",
    "Review trust-boundary change, exposure, authorization ownership, data handling, monitoring, and rollback before approval."
  ]
];

const designDecisions = [
  [
    "Keep administrative functions separate",
    "Privileged configuration and support operations should not share the same exposure and user pathways as ordinary portal actions.",
    "Additional ownership and operational complexity.",
    "Confirm ordinary users cannot reach administrative capabilities and privileged changes remain auditable."
  ],
  [
    "Route business actions through the application service",
    "Centralized server-side business logic can keep authorization, validation, ownership, logging, and service coordination consistent.",
    "The application service becomes a critical component that needs resilience and observability.",
    "Confirm important decisions remain server-controlled and recovery/monitoring dependencies are documented."
  ],
  [
    "Separate identity from application authorization",
    "Identity answers who or what the caller is; the application still decides what the caller may do.",
    "More explicit policy design and owner coordination.",
    "Review resource/action decisions independently of successful sign-in."
  ],
  [
    "Minimize supplier data",
    "Supplier S needs only limited fictional service context, not full support-case content.",
    "May require translation or integration logic inside the application.",
    "Review shared data fields, purpose, retention, monitoring, and failure behavior."
  ],
  [
    "Preserve monitoring during recovery",
    "Recovery decisions require healthy fictional evidence rather than blind restoration.",
    "Monitoring becomes a recovery dependency that must itself be resilient.",
    "Confirm recovery validation sources are Healthy before staged progression."
  ],
  [
    "Use explicit architecture change review",
    "New browser-facing or supplier relationships can alter trust boundaries, exposure, ownership, data flow, and monitoring needs.",
    "Changes require structured review before release.",
    "Document the changed boundary, owner, security goal, validation evidence, rollback, and re-review trigger."
  ]
];

const failureScenarios = [
  [
    "Identity Service I unavailable",
    "New fictional sign-ins and some session/recovery functions may be unavailable.",
    "Which already-established sessions remain acceptable, and which business functions should enter a safe degraded state?",
    "Use predefined continuity rules, user communication, monitoring, and owner-approved recovery rather than improvised bypass."
  ],
  [
    "Monitoring M Degraded",
    "The application may still operate, but defenders lose confidence in important visibility.",
    "Which high-risk changes or recovery actions should pause when required monitoring is unhealthy?",
    "Limit absence claims, preserve Unknowns, use alternate evidence, and define whether critical changes must wait."
  ],
  [
    "Supplier S unavailable",
    "One fictional support capability is reduced.",
    "Can the portal continue core support work without the supplier?",
    "Use a planned alternate workflow, bounded retry/failure behavior, user communication, and owner review."
  ],
  [
    "Data Service D unavailable",
    "Primary support-case functions may stop.",
    "Which read-only, queueing, or alternate fictional business modes are acceptable, if any?",
    "Use predefined continuity and recovery rather than bypassing data protections."
  ],
  [
    "Administrative Console F unavailable",
    "Privileged configuration work is delayed while ordinary users may continue.",
    "Which emergency changes are truly required and how are they governed?",
    "Use approved emergency ownership and recovery processes rather than exposing admin capability elsewhere."
  ],
  [
    "Recovery R unavailable",
    "Normal service may continue, but resilience is reduced.",
    "Should high-risk changes continue while recovery capability is unhealthy?",
    "Make risk acceptance explicit and prioritize restoration of recovery readiness."
  ]
];

const commonMistakes = [
  [
    "Start with individual controls",
    "A team may add settings without understanding trust boundaries, data flows, dependencies, business goals, or failure modes.",
    "Begin with purpose, assets, users, data, boundaries, owners, dependencies, monitoring, and recovery."
  ],
  [
    "Trust internal services automatically",
    "Internal status does not remove the need for caller identity, authorization, validation, monitoring, or least privilege.",
    "Treat every service relationship as a governed trust decision."
  ],
  [
    "Treat sign-in as permission",
    "Authentication answers identity; authorization answers allowed actions.",
    "Keep access-control decisions independent and resource-specific."
  ],
  [
    "Expose admin functions with ordinary user paths",
    "Privileged operations have higher impact and different identity, monitoring, and ownership requirements.",
    "Separate administrative functions, privileges, sessions, access review, and change monitoring."
  ],
  [
    "Ignore supplier failure",
    "A necessary third-party dependency can affect availability, privacy, data flows, and recovery.",
    "Document supplier purpose, data, monitoring, outage behavior, owners, alternatives, and re-review triggers."
  ],
  [
    "Make monitoring optional",
    "Important changes or recovery decisions become harder to validate without healthy visibility.",
    "Design monitoring as an architecture dependency with source health and owner accountability."
  ],
  [
    "Assume backup equals resilience",
    "Recovery also depends on trusted state, identity, data, monitoring, application behavior, owner approval, and continuity.",
    "Map recovery dependencies and staged validation into the architecture."
  ],
  [
    "Prove findings through exploitation",
    "A10 is designed to teach secure architecture and review without offensive testing.",
    "Use architecture evidence, trust assumptions, control gaps, business impact, owner decisions, and safe validation questions."
  ]
];

const labPhases: Array<[string, string[]]> = [
  [
    "Phase 1 — Create the architecture charter",
    [
      "Define the fictional Northbridge Support Portal purpose, users, business workflows, security goals, availability goals, privacy goals, owners, scope, exclusions, and public-safe boundary.",
      "State that no exploitation, scanning, probing, credential attacks, bypass testing, or real-system interaction is allowed.",
      "Identify the primary architecture question the review should answer."
    ]
  ],
  [
    "Phase 2 — Build the asset register",
    [
      "List Zone A through Zone I and assign each fictional component a purpose, owner, data class, criticality, and security goal.",
      "Identify which assets are browser-facing, internal, administrative, monitoring, recovery, or third-party.",
      "Mark which assets are necessary for critical business continuity."
    ]
  ],
  [
    "Phase 3 — Map data flows and trust boundaries",
    [
      "Draw safe abstract arrows showing user, identity, application, data, API, supplier, monitoring, and recovery relationships.",
      "Label what kind of fictional information crosses each boundary without using real requests, secrets, tokens, addresses, or payloads.",
      "Write a defender question for every trust boundary."
    ]
  ],
  [
    "Phase 4 — Review exposure and privilege",
    [
      "Identify which components should be public-facing, user-facing, service-only, admin-only, monitoring-only, or recovery-only.",
      "Document least-exposure and secure-default assumptions.",
      "Record any architecture Unknowns instead of inventing implementation details."
    ]
  ],
  [
    "Phase 5 — Review dependencies and resilience",
    [
      "Document Identity, Data, API, Supplier, Monitoring, and Recovery dependencies.",
      "Identify at least four fictional failure scenarios.",
      "Create continuity, monitoring, owner, and recovery questions for each."
    ]
  ],
  [
    "Phase 6 — Create architecture decision records",
    [
      "Write at least six design decisions.",
      "For each, include security goal, alternatives, tradeoffs, owner, assumptions, validation questions, residual risk, rollback concept, and review trigger.",
      "Do not use offensive proof-of-concept testing as validation."
    ]
  ],
  [
    "Phase 7 — Produce findings and priorities",
    [
      "Create at least eight fictional architecture findings or review notes.",
      "Classify each as Strength, Improvement, Risk, or Unknown.",
      "Assign evidence, owner, business effect, validation, and re-review trigger."
    ]
  ],
  [
    "Phase 8 — Build the public-safe package",
    [
      "Create an abstract architecture diagram with invented labels only.",
      "Write a one-page technical review summary.",
      "Write a one-page leadership summary focused on business value, major decisions, risks, owners, resilience, and next steps.",
      "Remove all real or sensitive implementation details."
    ]
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Module A10
      </Link>
      <Link href={trackPath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Advanced Track
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function SecureWebArchitecturePrinciplesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A10</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A10.1</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Secure Architecture</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A10.1 Secure Web Architecture Principles</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders review a web system as a connected architecture rather than a collection of settings. Map assets, users, data flows, trust boundaries, identity, application logic, APIs, data services, administration, suppliers, monitoring, recovery, privacy, resilience, secure defaults, and owner decisions using a fully fictional Northbridge web environment.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Secure Web Architecture Principles"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.1 teaches secure web architecture and defensive review without exploitation, scanning, probing, credential attacks, bypass testing, or real-system access.",
            "I will use only invented Northbridge users, services, APIs, data, suppliers, diagrams, decisions, logs, and findings.",
            "I will treat architecture diagrams as high-level evidence rather than proof that a control is correctly implemented.",
            "I will separate authentication, authorization, data handling, application logic, APIs, administration, monitoring, and recovery as connected but distinct responsibilities.",
            "I will record Unknowns and assumptions instead of inventing technical details not supplied by the fictional evidence.",
            "I will keep every portfolio artifact abstract, public-safe, and free of real system names, addresses, credentials, secrets, internal paths, or sensitive implementation details.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Secure Web App Is More Than the Page the User Sees">
          <p className="leading-8">
            A fictional support portal can have a polished login page and still have weak architecture. The application may depend on identity, data, APIs, suppliers, administration, monitoring, and recovery services with very different trust and privilege assumptions.
          </p>
          <p className="mt-4 leading-8">
            Professional defenders therefore ask architecture questions first: what must be public, what must remain internal, where trust changes, who owns each dependency, which data crosses each boundary, how administrative privilege is separated, what happens when a service fails, and whether defenders can still observe important state.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak architecture thinking</p>
              <p className="mt-2 leading-7">“The portal has authentication, so the architecture is secure.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defender architecture thinking</p>
              <p className="mt-2 leading-7">“Authentication is one layer. We also need explicit trust boundaries, authorization, data protection, API contracts, administrative separation, monitoring, resilience, recovery, privacy, and owner accountability.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A10.1">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Architecture Determines Which Security Decisions Are Even Possible">
          <p className="leading-8">
            If administrative capability is mixed into ordinary user functions, if monitoring depends on the same component it is supposed to observe, if recovery cannot function without a failed dependency, or if one service holds every privilege, later controls may be forced to compensate for a weak architecture.
          </p>
          <p className="mt-4 leading-8">
            Secure architecture reduces unnecessary trust and exposure before individual controls are configured. It also makes ownership, monitoring, failure, recovery, privacy, and review easier to reason about.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Secure Web Architecture Language">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Ten Secure Web Architecture Principles">
          <div className="grid gap-5">
            {principles.map(([principle, explanation, question], index) => (
              <article key={principle} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{principle}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{explanation}</p>
                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defender question</p>
                      <p className="mt-2 text-sm leading-6">{question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Professional Workflow" title="The Ten-Step Web Architecture Review Workflow">
          <div className="grid gap-5">
            {workflow.map(([step, detail, output]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{step}</h3>
                <p className="mt-2 leading-7 text-slate-300">{detail}</p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Output</p>
                  <p className="mt-2 text-sm leading-6">{output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Web Architecture Dashboard"
          subtitle="A10.1 — architecture review only"
          metrics={[
            { label: "Architecture zones", value: "9", note: "Browser, application, identity, data, APIs, administration, monitoring, recovery, and supplier" },
            { label: "Core evidence records", value: "8", note: "Architecture, service-owner, data, API, monitoring, recovery, supplier, and change records" },
            { label: "Trust boundaries", value: "8", note: "Every boundary requires a defensive question rather than automatic trust" },
            { label: "Primary design rule", value: "Least exposure", note: "Only users and services that need a capability should receive it" },
          ]}
        />

        <SectionCard eyebrow="Fictional Architecture" title="Nine Northbridge Web Architecture Zones">
          <div className="grid gap-5">
            {zones.map(([zone, purpose, trust, questions]) => (
              <article key={zone} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{zone}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Purpose</p>
                    <p className="mt-2 text-sm leading-6">{purpose}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Trust principle</p>
                    <p className="mt-2 text-sm leading-6">{trust}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Key questions</p>
                    <p className="mt-2 text-sm leading-6">{questions}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Architecture Review Warning"
          severity="High"
          time="Northbridge architecture review 10:15"
          source="A10.1 design-review board"
          details="A proposed portal redesign would place administrative configuration functions inside the same browser-facing pathway used by ordinary support users, with no separate owner, privilege boundary, monitoring requirement, or rollback plan."
          recommendation="Do not approve the architecture as written. Separate privileged administrative responsibility from ordinary user functions, define explicit identity and authorization requirements, minimize exposure, assign an owner, add change monitoring and validation, and document rollback and re-review conditions."
        />

        <SectionCard eyebrow="Trust Boundaries" title="Eight Boundaries That Must Never Be Treated as Automatic Trust">
          <div className="grid gap-5">
            {trustBoundaries.map(([boundary, change, focus, nonProof]) => (
              <article key={boundary} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{boundary}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">What changes</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{change}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defender focus</p>
                    <p className="mt-2 text-sm leading-6">{focus}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Not proof</p>
                    <p className="mt-2 text-sm leading-6">{nonProof}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Architecture Review Log"
          logs={[
            "10:00 | CHARTER | service=SupportPortal | purpose=case-support | scope=fictional-only",
            "10:03 | ASSET | Identity-I | owner=IdentityOwner | criticality=High",
            "10:04 | ASSET | Data-D | owner=DataOwner | sensitivity=High",
            "10:05 | BOUNDARY | Browser-to-App | trust=validate-and-authorize",
            "10:06 | BOUNDARY | App-to-Identity | authentication-not-authorization=true",
            "10:07 | BOUNDARY | App-to-Supplier | data_minimized=true | owner=SupplierOwner",
            "10:09 | MONITORING | source=M | health=Healthy | recovery_dependency=true",
            "10:11 | RECOVERY | R-depends-on=Identity-I,Data-D,Monitoring-M",
            "10:15 | REVIEW | admin-path-mixed-with-user-path=true | approval=hold",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Architecture Change"
          question="What is the strongest interpretation of ARCH-08?"
          evidence={[
            "ARCH-08 proposes a new browser-to-reporting relationship.",
            "The change would alter an existing trust boundary.",
            "Authorization ownership, data handling, monitoring, and rollback are not yet documented.",
            "No supplied evidence proves the design is insecure.",
          ]}
          options={[
            "The proposed feature is definitely vulnerable.",
            "The proposed feature changes architecture assumptions and should receive a defensive review of trust boundary, authorization, data handling, monitoring, ownership, resilience, and rollback before approval.",
            "The feature should be rejected because browser-facing functions are always unsafe.",
            "The feature can be approved because the reporting service is internal.",
          ]}
          bestAnswer={1}
          explanation="Architecture review should respond to changed trust and responsibility, not assume vulnerability or safety. The correct step is to review the changed boundary and its defensive consequences."
        />

        <SectionCard eyebrow="Fictional Evidence" title="Northbridge Architecture Evidence Set">
          <div className="grid gap-5">
            {evidenceSet.map(([id, source, health, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{health}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{source}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Limits", limits],
                    ["Review use", use],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Architecture Decisions" title="Six Fictional Design Decisions">
          <div className="grid gap-5">
            {designDecisions.map(([decision, reason, tradeoff, validation]) => (
              <article key={decision} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{decision}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Reason</p>
                    <p className="mt-2 text-sm leading-6">{reason}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Tradeoff</p>
                    <p className="mt-2 text-sm leading-6">{tradeoff}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Validation</p>
                    <p className="mt-2 text-sm leading-6">{validation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Convenient Admin Feature"
          scenario="A fictional product team wants to add administrative configuration controls directly into the ordinary Support Portal because it would be convenient for senior staff. The proposal does not define a separate privileged role, monitoring, approval workflow, or recovery plan."
          choices={[
            { label: "Choice A", response: "Approve the feature because senior staff are trusted.", outcome: "Employment role or trust in people does not replace least privilege, explicit authorization, administrative separation, monitoring, or change governance.", tone: "risk" },
            { label: "Choice B", response: "Require a separate privileged design with explicit authorization, strong ownership, least exposure, monitored changes, session considerations, validation, rollback, and re-review before approval.", outcome: "This treats administration as a higher-impact architecture responsibility rather than an ordinary user convenience feature.", tone: "best" },
            { label: "Choice C", response: "Ban all administrative web functions permanently.", outcome: "Administration may be necessary, but it should be designed and governed carefully rather than assumed impossible.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Resilience" title="Six Fictional Failure Scenarios">
          <div className="grid gap-5">
            {failureScenarios.map(([failure, effect, question, response]) => (
              <article key={failure} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{failure}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Business effect</p>
                    <p className="mt-2 text-sm leading-6">{effect}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Design question</p>
                    <p className="mt-2 text-sm leading-6">{question}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defensive response</p>
                    <p className="mt-2 text-sm leading-6">{response}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the API Architecture Note"
          question="What is the strongest response to ARCH-04?"
          evidence={[
            "API P documents caller roles and resource categories.",
            "Object-ownership rules are not fully described.",
            "The source is Conditional because one important design area is incomplete.",
            "No supplied evidence shows an authorization bypass.",
          ]}
          options={[
            "Declare that the API is vulnerable to unauthorized access.",
            "Record an authorization-design Unknown, assign the API/application owners, and require object-ownership and access rules to be documented and reviewed before claiming the contract is complete.",
            "Ignore the gap because caller roles are documented.",
            "Test the API against real objects to see whether access can be bypassed.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports an incomplete architecture assumption, not a proven vulnerability. A10 uses defensive review, ownership, and safe validation questions rather than unauthorized testing."
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Monitoring Is Down During a Major Change"
          scenario="Northbridge plans a fictional high-impact web configuration change, but Monitoring M is Degraded. The change is not an emergency, and the review plan says monitoring is required to validate important state after release."
          choices={[
            { label: "Choice A", response: "Proceed because monitoring is only useful after an incident.", outcome: "The architecture explicitly depends on monitoring for validation and safe change review.", tone: "risk" },
            { label: "Choice B", response: "Delay the non-emergency high-impact change until required monitoring is Healthy or an approved equivalent validation source is available.", outcome: "This respects observability as an architecture dependency and prevents blind change validation.", tone: "best" },
            { label: "Choice C", response: "Assume the change is safe because no alerts can be generated while monitoring is Degraded.", outcome: "A visibility gap cannot support a safety conclusion.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Eight Architecture Mistakes to Avoid">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, why, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build the Northbridge Web Architecture Review">
          <p className="leading-8">
            Use only the invented zones, assets, trust boundaries, evidence, and decisions on this page. The goal is architecture reasoning, ownership, resilience, privacy, and review—not exploitation or live security testing.
          </p>
          <div className="mt-6 grid gap-5">
            {labPhases.map(([phase, tasks]) => (
              <article key={phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {tasks.map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not test real websites, APIs, accounts, sessions, login pages, admin panels, services, or suppliers. Do not scan, probe, enumerate, fuzz, exploit, bypass, brute-force, attempt credential access, or construct attack payloads. Use only the fictional architecture evidence supplied in this lesson.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Redesign a Convenient but Over-Trusted Architecture">
          <p className="leading-8">
            A fictional Northbridge proposal combines ordinary user functions, administration, direct reporting-service access, supplier access, and recovery control inside one web-facing application role because the product team believes one component will be easier to maintain. Redesign it using the A10.1 principles.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Separate ordinary user, administrative, application, identity, API, data, monitoring, recovery, and supplier responsibilities.",
              "Identify at least six trust boundaries and the defender question at each boundary.",
              "Create least-exposure rules for every component and explain which capability stays internal.",
              "Define secure-default assumptions for user, service, and administrative access.",
              "Create a dependency map and identify at least three single-point-of-failure concerns.",
              "Design monitoring dependencies and state what should happen when a source is Degraded.",
              "Create a fictional continuity plan for identity, supplier, data, and monitoring failure.",
              "Write at least five architecture decision records with tradeoffs and validation questions.",
              "Create a privacy-minimization review for user, case, monitoring, and supplier data.",
              "Write a leadership summary explaining why the redesign improves security and resilience without offensive proof-of-concept testing.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.1 Secure Web Architecture Checklist"
          items={[
            "I can begin a web security review with business purpose, users, assets, data, trust boundaries, owners, dependencies, monitoring, and recovery.",
            "I can identify browser, application, identity, data, API, administrative, monitoring, recovery, and supplier responsibilities conceptually.",
            "I can explain why internal or authenticated relationships still require authorization, validation, ownership, and monitoring.",
            "I can apply least exposure and secure-default thinking to fictional web components.",
            "I can separate ordinary user capability from privileged administrative capability.",
            "I can treat suppliers as governed dependencies with limited purpose, data, owners, monitoring, and failure planning.",
            "I can design observability as an architecture requirement instead of an afterthought.",
            "I can identify single points of failure and connect them to continuity and recovery decisions.",
            "I can use architecture decision records to explain tradeoffs, validation, residual risk, and re-review triggers.",
            "I can record Unknowns rather than inventing implementation details.",
            "I can review architecture without scanning, probing, exploitation, bypass testing, or real-system access.",
            "I can create a public-safe fictional architecture portfolio artifact using abstract labels and no sensitive implementation details.",
          ]}
        />

        <MiniQuiz
          title="A10.1 Mini Quiz: Secure Web Architecture Principles"
          questions={[
            { question: "What should come first in a professional fictional web security architecture review?", choices: ["Choosing browser security headers.", "Defining business purpose, users, assets, data, trust boundaries, owners, dependencies, monitoring, and recovery needs.", "Testing the application for vulnerabilities.", "Writing an incident report."], answer: 1, explanation: "Architecture review begins with purpose and system structure so later controls can be evaluated in the correct context." },
            { question: "Why is an authenticated user request not automatically trusted?", choices: ["Authentication only establishes identity context; the application must still validate data and independently authorize the requested action.", "Authentication has no security value.", "Authenticated users should never access web applications.", "Only administrators can be trusted."], answer: 0, explanation: "Identity and authorization are distinct decisions. Authenticated input also still requires appropriate validation and context." },
            { question: "Which design best demonstrates least exposure?", choices: ["Place administrative functions in the same ordinary user interface for convenience.", "Make every internal API reachable by every application component.", "Expose only the user-facing functions that are needed and keep administrative, monitoring, data, and recovery capabilities within their required trust boundaries.", "Allow suppliers to access all data because they are contracted."], answer: 2, explanation: "Least exposure means providing only the reachability and capability required for a legitimate business purpose." },
            { question: "What does a Degraded monitoring source mean for an important architecture change?", choices: ["The change is automatically unsafe.", "The change is automatically safe because alerts cannot fire.", "Validation confidence is reduced, so the team should follow predefined rules about delay, alternate evidence, or explicit risk acceptance.", "Monitoring should be removed permanently."], answer: 2, explanation: "Source health affects the ability to validate important decisions. A visibility gap creates uncertainty rather than proof." },
            { question: "Why should administrative functions be architecturally separated from ordinary user functions?", choices: ["Administrators should use a completely different internet.", "Privileged actions have higher impact and need distinct authorization, ownership, monitoring, session, approval, and recovery controls.", "Ordinary users cannot use browsers.", "Administrative functions do not need monitoring."], answer: 1, explanation: "Administrative separation helps keep higher-impact capability under stronger and more explicit controls." },
            { question: "Which is the strongest way to treat a fictional supplier dependency?", choices: ["Trust it fully because a contract exists.", "Block all third-party services.", "Define purpose, data shared, owner, expected behavior, monitoring, failure handling, alternatives, privacy, and re-review conditions.", "Give the supplier direct administrative access so support is easier."], answer: 2, explanation: "Supplier trust should be explicit, limited, owned, monitored, and designed for failure or change." },
            { question: "What is the strongest A10.1 response to an incomplete architecture assumption?", choices: ["Exploit the application to see whether the assumption is wrong.", "Mark the point as Unknown, assign an owner, define the evidence or design documentation needed, and review it before making a stronger claim.", "Assume the safest possible implementation.", "Assume the worst possible implementation."], answer: 1, explanation: "Professional defensive review preserves Unknowns rather than inventing missing facts or using offensive testing to fill the gap." },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Secure Web Architecture Review"
          prompt="Create a fully fictional A10.1 Secure Web Architecture Review for Northbridge. Include business purpose; user groups; critical workflows; security goals; privacy goals; availability goals; scope; exclusions; owners; asset register; data classes; browser, application, identity, data, API, administrative, monitoring, recovery, and supplier zones; trust-boundary map; high-level data flows; least-exposure rules; secure defaults; dependency register; supplier purpose; administrative separation; monitoring dependencies; source-health expectations; single points of failure; continuity questions; recovery dependencies; architecture decision records; assumptions; Unknowns; compensating controls; findings; remediation owners; validation questions; accepted risk; re-review triggers; technical summary; leadership summary; and a public-safe abstract diagram. Every system, user, service, supplier, data label, event, owner, decision, and outcome must be invented."
          tips={[
            "Start with business purpose and trust boundaries before reviewing controls.",
            "Keep authentication, authorization, application logic, data, APIs, administration, monitoring, and recovery distinct.",
            "Treat every dependency as governed trust rather than automatic trust.",
            "Use least exposure, secure defaults, ownership, source health, and resilience throughout the review.",
            "Record Unknowns and assumptions instead of inventing implementation facts.",
            "Keep the artifact abstract and public-safe with no real hosts, addresses, credentials, secrets, requests, or defensive configuration details.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A10.2 Authentication and Session Design?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for explaining secure web architecture, trust boundaries, least exposure, secure defaults, administrative separation, dependency governance, monitoring, resilience, privacy, and owner accountability.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a web application is a connected architecture rather than only a user interface.",
              "I can identify assets, data flows, trust boundaries, dependencies, and owners.",
              "I can distinguish authentication from authorization at the architecture level.",
              "I can apply least exposure and secure defaults.",
              "I can explain why administrative capability needs stronger architectural separation.",
              "I can treat suppliers and internal services as governed dependencies.",
              "I can make monitoring and source health part of architecture design.",
              "I can identify resilience and recovery dependencies.",
              "I can document assumptions, Unknowns, architecture decisions, and review triggers.",
              "I am ready to focus specifically on authentication and session design in A10.2.",
            ].map((item) => <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>)}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Portfolio Build Guide" title="What a Strong A10.1 Portfolio Artifact Should Show">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A clear fictional business purpose and review boundary",
              "An asset register with owners and security goals",
              "An abstract architecture diagram with nine zones",
              "A trust-boundary map with defender questions",
              "High-level data flows without real requests or sensitive implementation details",
              "Least-exposure and secure-default decisions",
              "Administrative separation and privilege ownership",
              "Supplier purpose, minimization, monitoring, and failure planning",
              "Monitoring and source-health dependencies",
              "Recovery and continuity dependencies",
              "Architecture decision records with tradeoffs and validation",
              "Assumptions and Unknowns that remain visible",
              "Findings with owners and re-review triggers",
              "A technical summary and leadership summary",
              "A public-safe version containing invented abstract information only",
              "A reflection explaining why secure architecture can be reviewed without offensive exploitation",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Portfolio element {index + 1}</p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Secure web architecture begins with business purpose, users, assets, data, trust boundaries, owners, dependencies, monitoring, and recovery.",
            "Authentication, authorization, application logic, data, APIs, administration, monitoring, and recovery are connected but distinct responsibilities.",
            "Least exposure and secure defaults reduce unnecessary reachability, capability, privilege, and trust.",
            "Internal services and suppliers still require explicit purpose, authorization, validation, ownership, monitoring, privacy, and failure planning.",
            "Administrative capability should be separated from ordinary user functions because it carries different privilege and monitoring requirements.",
            "Observability is an architecture dependency: important decisions become harder to validate when required sources are Degraded or Blind.",
            "Resilience requires understanding single points of failure, alternate workflows, dependency behavior, recovery paths, and acceptable degraded operation.",
            "Architecture diagrams and summaries are evidence sources, not proof that controls are implemented correctly.",
            "Professional architecture review records assumptions, Unknowns, tradeoffs, owners, validation, residual risk, and re-review triggers.",
            "A10.1 establishes the structure that A10.2 will use to examine authentication and session design in greater depth.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Secure Architecture Review — No Offensive Web Testing</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.1 authorizes testing real websites, APIs, accounts, sessions, login flows, administrative interfaces, suppliers, or services. Do not scan, probe, enumerate, fuzz, brute-force, exploit, bypass authentication or authorization, attempt credential access, use attack payloads, or collect private web traffic. Use only the invented architecture evidence and safe conceptual review questions supplied in this lesson.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Authentication and Session Design</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.1 established the architecture foundation: purpose, assets, trust boundaries, least exposure, secure defaults, separation of responsibilities, dependencies, observability, resilience, privacy, and owner accountability. A10.2 will zoom into identity assurance, login design, recovery, session lifecycle, high-risk events, usability, privacy, support, and monitoring.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}