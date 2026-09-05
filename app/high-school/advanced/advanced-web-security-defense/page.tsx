import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousModule = `${trackPath}/malware-defense-concepts`;

const lessons = [
  {
    "number": "A10.1",
    "title": "Secure Web Architecture Principles",
    "slug": "secure-web-architecture-principles",
    "summary": "Learn how professional defenders reason about a secure web system as a set of trust boundaries, users, browser-facing components, application services, identity services, data services, APIs, third-party dependencies, monitoring sources, administrative functions, and recovery paths. Focus on secure-by-design architecture, least exposure, separation of responsibilities, resilience, and reviewable assumptions without offensive exploitation.",
    "skills": [
      "Identify fictional web assets, trust boundaries, data flows, dependencies, owners, and high-value security questions",
      "Separate public-facing, application, identity, data, administrative, monitoring, and recovery responsibilities conceptually",
      "Evaluate architecture choices through least exposure, secure defaults, redundancy, observability, privacy, and resilience",
      "Document assumptions, dependencies, failure modes, validation questions, and owner decisions before implementation details"
    ],
    "defensiveLab": "Create a fictional Northbridge web architecture review showing browser-facing services, application logic, identity, data, APIs, suppliers, monitoring, and recovery dependencies with trust boundaries, owner questions, assumptions, risks, and defensive design decisions."
  },
  {
    "number": "A10.2",
    "title": "Authentication and Session Design",
    "slug": "authentication-and-session-design",
    "summary": "Study authentication and session design from the defender perspective. Compare identity proof, login flows, multi-factor concepts, recovery paths, session lifecycle, timeout, renewal, logout, device context, user communication, and monitoring without teaching credential attacks, session theft, bypass, or account takeover techniques.",
    "skills": [
      "Distinguish authentication, authorization, identity proof, account recovery, and session management",
      "Evaluate fictional login and recovery designs through friction, risk, privacy, accessibility, abuse resistance, and support impact",
      "Reason about session creation, duration, renewal, termination, device changes, and high-risk events conceptually",
      "Connect authentication and session decisions to monitoring, user communication, incident response, and recovery"
    ],
    "defensiveLab": "Review a fictional Northbridge sign-in and session lifecycle, identify trust assumptions and failure points, compare safer design choices, and produce an authentication/session decision matrix without testing real accounts or bypass methods."
  },
  {
    "number": "A10.3",
    "title": "Authorization and Access Control Design",
    "slug": "authorization-and-access-control-design",
    "summary": "Learn how web applications decide what authenticated users and services are allowed to do. Study least privilege, role-based and attribute-aware concepts, object ownership, administrative separation, deny-by-default thinking, change approval, access review, and auditability without teaching privilege escalation or access-control bypass.",
    "skills": [
      "Separate authentication from authorization and explain why both decisions must be enforced independently",
      "Model fictional users, roles, resources, actions, ownership relationships, and administrative privileges",
      "Evaluate access decisions through least privilege, deny-by-default, separation of duties, reviewability, and business need",
      "Design fictional access-review, exception, escalation, logging, and recertification processes"
    ],
    "defensiveLab": "Build a fictional Northbridge access-control matrix for users, support staff, administrators, services, and data objects, then review over-permission, ownership, exceptions, audit requirements, and approval paths."
  },
  {
    "number": "A10.4",
    "title": "Input Handling and Output Safety",
    "slug": "input-handling-and-output-safety",
    "summary": "Study safe web data handling as a design problem. Learn to treat external input as untrusted, define expected formats and bounds, normalize carefully, validate by context, keep data and control meaning separate, encode output for its destination, handle errors safely, and log without exposing sensitive information. No attack payloads or exploitation strings are used.",
    "skills": [
      "Classify fictional input sources and define expected type, format, size, range, ownership, and business meaning",
      "Explain allow-list style validation, normalization, context-aware output handling, and safe error behavior conceptually",
      "Recognize why validation, storage, output, logging, and user feedback are separate defensive decisions",
      "Design fictional test cases using safe inert values rather than attack payloads"
    ],
    "defensiveLab": "Review fictional Northbridge form, profile, search, upload-metadata, and support-ticket fields using safe inert examples, then create an input/output safety matrix covering validation, storage, display, errors, logging, privacy, and owner decisions."
  },
  {
    "number": "A10.5",
    "title": "API Security Concepts",
    "slug": "api-security-concepts",
    "summary": "Learn how defenders reason about APIs as contracts between users, applications, services, and data. Study authentication, authorization, object ownership, input schemas, rate and resource protection concepts, error handling, versioning, dependency trust, monitoring, secrets, and documentation without offensive API enumeration or exploitation.",
    "skills": [
      "Identify fictional API callers, resources, actions, trust boundaries, owners, and business purposes",
      "Separate caller identity, permission, object ownership, input validation, resource limits, and response exposure",
      "Evaluate API design through least privilege, explicit contracts, safe errors, observability, resilience, and dependency trust",
      "Create defensive API review questions without probing, fuzzing, enumeration, or unauthorized requests"
    ],
    "defensiveLab": "Build a fictional Northbridge API defense review for account, support, reporting, and administrative service interactions using abstract requests and responses, access decisions, validation, logging, error handling, dependencies, and owner questions."
  },
  {
    "number": "A10.6",
    "title": "Secure Headers and Browser Protections",
    "slug": "secure-headers-and-browser-protections",
    "summary": "Study browser-facing security protections as layers that reduce classes of web risk. Learn the defensive purpose of transport enforcement, content restrictions, framing protections, content-type handling, referrer controls, cookie attributes, and browser policy decisions at a conceptual level without bypass testing or exploit construction.",
    "skills": [
      "Explain the defensive purpose of major browser-facing policy categories without treating any one control as complete protection",
      "Connect transport, content, framing, cookie, referrer, and browser policy decisions to specific security goals",
      "Evaluate compatibility, deployment assumptions, monitoring, exceptions, rollout, and rollback conceptually",
      "Review fictional response-policy summaries for missing layers, unsafe exceptions, and owner accountability"
    ],
    "defensiveLab": "Review a fictional Northbridge browser-protection policy board covering secure transport, content restrictions, frame controls, cookie protections, referrer limits, compatibility, exceptions, monitoring, and rollout decisions without testing bypasses."
  },
  {
    "number": "A10.7",
    "title": "Secrets and Configuration Management",
    "slug": "secrets-and-configuration-management",
    "summary": "Learn how web defenses depend on safe handling of secrets, credentials, environment-specific configuration, certificates, keys, service identities, feature settings, and administrative values. Focus on separation from code, least privilege, rotation concepts, access governance, logging, deployment controls, and incident response without exposing or using real secrets.",
    "skills": [
      "Distinguish fictional secrets, public configuration, sensitive configuration, service identities, and ordinary application settings",
      "Explain why secrets should be separated from source code, logs, public output, client-facing bundles, and unnecessary users",
      "Evaluate secret ownership, least privilege, rotation concepts, expiration, access review, recovery, and emergency response",
      "Design fictional configuration-change approval, validation, rollback, and monitoring workflows"
    ],
    "defensiveLab": "Create a fictional Northbridge secrets-and-configuration register using invented labels only, documenting owner, purpose, environment, sensitivity, access need, rotation concept, monitoring, change approval, rollback, and incident-response expectations."
  },
  {
    "number": "A10.8",
    "title": "Logging and Monitoring for Web Apps",
    "slug": "logging-and-monitoring-for-web-apps",
    "summary": "Design web logging and monitoring around defender questions. Study authentication events, authorization decisions, application errors, configuration changes, administrative activity, API health, dependency failures, security-relevant state changes, source health, privacy, retention, correlation, alert quality, and recovery validation using fictional data only.",
    "skills": [
      "Choose fictional web events based on defender questions and decision value rather than maximum collection",
      "Separate security events, business events, application health, audit events, and debugging detail",
      "Evaluate source health, privacy, minimization, retention, correlation, false positives, and alert lineage",
      "Connect web monitoring to incident response, user support, service ownership, recovery, and continuous improvement"
    ],
    "defensiveLab": "Build a fictional Northbridge web monitoring plan with defender questions, event categories, owners, source-health rules, privacy limits, baseline context, correlation, escalation, retention, and recovery-validation signals."
  },
  {
    "number": "A10.9",
    "title": "Web Security Review Process",
    "slug": "web-security-review-process",
    "summary": "Learn a structured defensive review process for web systems before and after change. Connect architecture, trust boundaries, authentication, sessions, authorization, input/output safety, APIs, browser protections, secrets, configuration, logging, privacy, resilience, deployment, exceptions, evidence, and owner sign-off into one review workflow.",
    "skills": [
      "Define fictional review purpose, scope, system boundaries, owners, evidence, assumptions, and exclusions",
      "Use a consistent defensive checklist across architecture, identity, data handling, APIs, browser controls, secrets, monitoring, and resilience",
      "Prioritize findings by evidence, business impact, exploit-independent risk reasoning, reachability, exposure, and control strength",
      "Write remediation owners, validation criteria, accepted-risk decisions, deadlines, and re-review triggers"
    ],
    "defensiveLab": "Run a fictional Northbridge web security review using supplied architecture notes, configuration summaries, access matrices, monitoring records, and change documents, then produce findings, owners, priorities, validation questions, and accepted-risk decisions."
  },
  {
    "number": "A10.10",
    "title": "Web Defense Architecture Lab",
    "slug": "web-defense-architecture-lab",
    "summary": "Integrate the complete A10 pathway in a fictional web defense architecture case. Review trust boundaries, identity and sessions, access control, data handling, APIs, browser protections, secrets, logging, third-party dependencies, monitoring, resilience, privacy, change management, findings, remediation, and executive communication without offensive exploitation.",
    "skills": [
      "Run a complete fictional web defense architecture review from scope through closure",
      "Connect architecture, authentication, sessions, authorization, input/output safety, APIs, browser protections, secrets, monitoring, and resilience",
      "Compare design alternatives through security, usability, business continuity, privacy, ownership, validation, and operational complexity",
      "Produce a professional architecture review package and public-safe portfolio artifact using invented information only"
    ],
    "defensiveLab": "Complete the fictional Northbridge Web Defense Architecture Review package containing architecture map, trust boundaries, identity/session review, access matrix, input/output plan, API review, browser controls, secrets/configuration register, monitoring plan, findings, remediation roadmap, and executive summary."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Define the web defense objective",
    "description": "Identify the fictional service, users, business function, sensitive data, owners, external dependencies, security goals, review scope, assumptions, exclusions, and public-safe boundaries before evaluating individual controls.",
    "output": "Web defense purpose, scope, owner, asset, and assumption register"
  },
  {
    "step": "2",
    "title": "Map architecture and trust boundaries",
    "description": "Describe fictional browser-facing components, application services, identity, data stores, APIs, administrative functions, suppliers, monitoring, and recovery paths and identify where trust changes.",
    "output": "Abstract web architecture and trust-boundary map"
  },
  {
    "step": "3",
    "title": "Review authentication and sessions",
    "description": "Evaluate fictional sign-in, MFA concepts, recovery, session creation, duration, renewal, termination, device context, monitoring, usability, and support impact without credential attacks or bypass testing.",
    "output": "Authentication and session decision matrix"
  },
  {
    "step": "4",
    "title": "Review authorization and access",
    "description": "Map fictional roles, resources, actions, ownership, service identities, administrative capabilities, least privilege, deny-by-default decisions, exceptions, and review requirements.",
    "output": "Authorization and access-control matrix"
  },
  {
    "step": "5",
    "title": "Review data handling",
    "description": "Identify fictional input sources, expected formats, validation responsibilities, normalization assumptions, storage rules, output contexts, error behavior, logging, and privacy considerations using safe inert examples.",
    "output": "Input, output, error, and data-handling safety matrix"
  },
  {
    "step": "6",
    "title": "Review APIs and browser protections",
    "description": "Evaluate fictional API contracts, caller identity, permissions, object ownership, schema expectations, safe errors, versioning, browser-facing protections, cookie policy, transport expectations, exceptions, and compatibility.",
    "output": "API and browser-protection review package"
  },
  {
    "step": "7",
    "title": "Protect secrets and configuration",
    "description": "Classify fictional secrets and sensitive configuration, define ownership, environment separation, least privilege, change approval, rotation concepts, logging limits, rollback, recovery, and emergency handling.",
    "output": "Secrets and configuration governance register"
  },
  {
    "step": "8",
    "title": "Design logging and monitoring",
    "description": "Choose fictional web events that answer defender questions, protect privacy, show source health, support correlation, reveal important state changes, and help validate incidents, changes, and recovery.",
    "output": "Web monitoring questions, event map, source-health rules, and escalation plan"
  },
  {
    "step": "9",
    "title": "Review findings and remediation",
    "description": "Prioritize fictional findings by evidence, exposure, business impact, control strength, reachability, privacy, resilience, owner capacity, and compensating controls without offensive proof-of-concept exploitation.",
    "output": "Finding register, remediation owners, validation criteria, and accepted-risk decisions"
  },
  {
    "step": "10",
    "title": "Validate, communicate, and improve",
    "description": "Confirm fictional design changes through safe review evidence, monitor results, document residual risk, communicate to technical and business audiences, record exceptions, and define re-review triggers.",
    "output": "Validated web defense architecture review and improvement roadmap"
  }
];

const objectives = [
  "Explain how secure web architecture uses trust boundaries, separation of responsibilities, least exposure, secure defaults, resilience, monitoring, and owner accountability.",
  "Evaluate fictional authentication and session design through identity assurance, recovery, MFA concepts, session lifecycle, usability, privacy, monitoring, and support impact.",
  "Design fictional authorization and access-control models using least privilege, deny-by-default thinking, object ownership, roles, administrative separation, exceptions, and review.",
  "Apply safe input and output design principles through expected schemas, validation, normalization, context-aware handling, safe errors, logging, and privacy without using attack payloads.",
  "Evaluate fictional APIs through caller identity, permissions, object ownership, validation, resource protection concepts, error handling, versioning, dependencies, monitoring, and resilience.",
  "Explain browser-facing defensive protections and secrets/configuration management as layered controls with owners, exceptions, rollout, monitoring, validation, and rollback.",
  "Design privacy-aware web logging and monitoring around defender questions, source health, baselines, correlation, false positives, retention, incident response, and recovery validation.",
  "Build a complete fictional Web Defense Architecture Review connecting architecture, identity, access, data handling, APIs, browser protections, secrets, monitoring, findings, remediation, and executive communication."
];

const rolePreview = [
  {
    "role": "Architecture before controls",
    "mission": "A secure fictional web review begins with assets, users, trust boundaries, data flows, dependencies, owners, and failure modes before individual settings are judged.",
    "doesNotReplace": "Business requirements, privacy, usability, resilience, change ownership, monitoring, or recovery planning.",
    "readiness": "Architecture, data sensitivity, external dependencies, administrative paths, monitoring, recovery, and trust assumptions are documented."
  },
  {
    "role": "Identity before convenience",
    "mission": "Authentication and session decisions balance identity assurance, recovery, friction, accessibility, privacy, support impact, and risk.",
    "doesNotReplace": "Authorization, least privilege, secure recovery, monitoring, account governance, or user communication.",
    "readiness": "Sign-in, MFA concepts, recovery, session lifecycle, high-risk events, support ownership, and monitoring expectations are defined."
  },
  {
    "role": "Authorization before feature access",
    "mission": "Authenticated users and services receive only the fictional capabilities required for their role, object, ownership relationship, or approved business purpose.",
    "doesNotReplace": "Independent server-side decisions, administrative separation, exceptions, access review, or auditability.",
    "readiness": "Roles, resources, actions, ownership, service identities, deny-by-default decisions, exceptions, and review owners are mapped."
  },
  {
    "role": "Data safety before trust",
    "mission": "Every fictional external input is treated according to an expected contract, and every output is handled according to its destination and sensitivity.",
    "doesNotReplace": "Business validation, safe storage, output context, error design, logging limits, privacy, or owner review.",
    "readiness": "Input source, expected format, bounds, normalization, storage, display, error, logging, and privacy decisions are documented."
  },
  {
    "role": "API contract before connectivity",
    "mission": "Fictional APIs expose only the resources and actions needed by approved callers under explicit identity, authorization, validation, error, version, and monitoring rules.",
    "doesNotReplace": "Object ownership, least privilege, service identity governance, dependency trust, resilience, or rate/resource planning.",
    "readiness": "Callers, resources, actions, trust boundaries, schemas, permissions, owners, dependencies, monitoring, and error behavior are defined."
  },
  {
    "role": "Layers before single controls",
    "mission": "Browser protections, transport expectations, cookies, headers, secrets, configuration, logging, and architecture work as complementary layers rather than one magic setting.",
    "doesNotReplace": "Secure application design, authorization, input/output safety, dependency review, testing, monitoring, or incident response.",
    "readiness": "Each control has a purpose, owner, compatibility assumptions, exception process, monitoring signal, validation method, and rollback plan."
  },
  {
    "role": "Observability before guesswork",
    "mission": "Web monitoring is designed around defender questions and important security or business state changes instead of collecting everything.",
    "doesNotReplace": "Privacy, minimization, source-health review, baseline context, correlation, retention, or human judgment.",
    "readiness": "Defender questions, event categories, owners, source health, baselines, privacy limits, correlation, escalation, and review cadence are defined."
  },
  {
    "role": "Review before release confidence",
    "mission": "A fictional web system is considered review-ready only when findings, assumptions, exceptions, validation evidence, remediation owners, residual risk, and re-review triggers are visible.",
    "doesNotReplace": "Engineering ownership, business acceptance, monitoring, recovery, governance, or continuous improvement.",
    "readiness": "Scope, evidence, findings, priorities, owners, validation, accepted risk, deadlines, monitoring, and re-review conditions are documented."
  }
];

const evidencePreview = [
  {
    "id": "WEB-01",
    "source": "Fictional architecture map",
    "observation": "Northbridge Support Portal includes browser-facing pages, an application service, Identity Service I, Data Service D, API Service P, Monitoring M, Recovery R, and Supplier S.",
    "supports": "A structured trust-boundary and dependency review.",
    "limits": "A diagram does not prove any component is insecure or exposed in a particular way.",
    "responseUse": "Identify security goals, trust changes, sensitive data, administrative paths, dependencies, monitoring, recovery, and owner questions."
  },
  {
    "id": "WEB-02",
    "source": "Fictional authentication design summary",
    "observation": "Standard users and administrators follow different fictional authentication and recovery paths, while session duration and device-change behavior are documented separately.",
    "supports": "Review of assurance, session lifecycle, user friction, recovery, and administrative risk.",
    "limits": "The design summary does not prove implementation quality or account compromise.",
    "responseUse": "Compare assurance, recovery, session, administrative separation, user support, privacy, and monitoring decisions."
  },
  {
    "id": "WEB-03",
    "source": "Fictional access-control matrix",
    "observation": "Support staff may update assigned cases, managers may review team cases, and administrative functions are separated into a distinct role.",
    "supports": "A least-privilege and object-ownership review.",
    "limits": "Role labels alone do not prove every resource/action decision is correctly enforced.",
    "responseUse": "Review resources, actions, ownership, exceptions, administrative privileges, auditability, and access recertification."
  },
  {
    "id": "WEB-04",
    "source": "Fictional data-handling register",
    "observation": "Profile, search, case-note, and report fields have different expected formats, business meanings, storage needs, output contexts, and privacy levels.",
    "supports": "Context-specific input and output safety review.",
    "limits": "A field list does not prove safe validation, storage, display, logging, or error behavior.",
    "responseUse": "Define expected schemas, bounds, normalization, storage, output handling, errors, logging, privacy, and safe inert test cases."
  },
  {
    "id": "WEB-05",
    "source": "Fictional API and dependency map",
    "observation": "Portal functions call Identity, Case, Reporting, and Supplier services under different service identities and business purposes.",
    "supports": "API contract, authorization, dependency, error, resilience, and monitoring review.",
    "limits": "Service connectivity does not prove overexposure, authorization failure, or dependency compromise.",
    "responseUse": "Review caller identity, permissions, object ownership, schemas, response exposure, versioning, dependency trust, and observability."
  },
  {
    "id": "WEB-06",
    "source": "Fictional monitoring and configuration summary",
    "observation": "Authentication, access decisions, administrative changes, application errors, configuration changes, and recovery events are logged, but one source has unclear ownership.",
    "supports": "Monitoring coverage and configuration-governance review.",
    "limits": "Collected events do not automatically prove useful detection, adequate privacy, or healthy source coverage.",
    "responseUse": "Map defender questions to event categories, source owners, health, baselines, retention, privacy, correlation, and escalation."
  }
];

const decisionQuestions = [
  [
    "Architecture",
    "Which fictional assets, trust boundaries, data flows, administrative paths, dependencies, suppliers, monitoring sources, and recovery services matter to the web security objective?"
  ],
  [
    "Authentication",
    "How should identity proof, MFA concepts, recovery, session creation, renewal, termination, device changes, and support balance assurance with usability and privacy?"
  ],
  [
    "Authorization",
    "Which fictional user or service may perform which action on which resource, under what ownership or business condition, and who reviews exceptions?"
  ],
  [
    "Data handling",
    "What inputs are accepted, how are they validated and normalized, where are they stored, how are they safely displayed, and what must never appear in logs or errors?"
  ],
  [
    "APIs",
    "Which callers, resources, actions, schemas, service identities, ownership rules, error behaviors, dependencies, and monitoring signals define the fictional API contract?"
  ],
  [
    "Browser protections",
    "Which layered browser-facing protections support transport, content, framing, cookies, referrer privacy, and compatibility without becoming the only line of defense?"
  ],
  [
    "Secrets and monitoring",
    "Which fictional secrets/configuration values require restricted handling, and which web events provide useful, healthy, privacy-aware defender visibility?"
  ],
  [
    "Review and remediation",
    "Which findings are supported, what is their business impact, who owns remediation, how will success be validated, what residual risk is accepted, and when is re-review required?"
  ]
];

const portfolioArtifacts = [
  "Fictional web defense charter with service purpose, users, security goals, scope, owners, sensitive data, dependencies, assumptions, exclusions, and public-safe boundaries",
  "Abstract web architecture map covering browser-facing components, application services, identity, data, APIs, administration, suppliers, monitoring, recovery, and trust boundaries",
  "Authentication and session decision matrix covering identity assurance, MFA concepts, recovery, session lifecycle, timeout/renewal, device changes, support impact, privacy, monitoring, and exceptions",
  "Authorization matrix covering fictional roles, service identities, resources, actions, object ownership, administrative privileges, deny-by-default decisions, exceptions, auditability, and review owners",
  "Input and output safety register covering fictional field source, expected type, format, size, range, normalization, storage, display context, error handling, logging, privacy, and safe inert test cases",
  "API defense review covering fictional callers, resources, actions, service identities, permissions, object ownership, schemas, response exposure, errors, versions, dependencies, monitoring, and resilience",
  "Browser-protection policy board covering transport enforcement, content restrictions, framing, cookie protections, referrer privacy, compatibility, exceptions, rollout, monitoring, validation, and rollback",
  "Secrets and configuration governance register covering fictional secret/config type, owner, environment, sensitivity, access need, change approval, rotation concept, monitoring, recovery, and emergency handling",
  "Web logging and monitoring plan mapping fictional defender questions to authentication, authorization, application, API, admin, configuration, dependency, recovery, and user-impact events with source health and privacy limits",
  "Web security review checklist connecting architecture, identity, sessions, access, data handling, APIs, browser controls, secrets, configuration, logging, privacy, resilience, deployment, exceptions, and evidence",
  "Finding register with fictional evidence, affected asset, security principle, business impact, existing controls, priority, remediation owner, validation criteria, target date, residual risk, and re-review trigger",
  "Change and exception register covering fictional justification, owner, duration, compensating controls, monitoring, validation, rollback, expiration, and review approval",
  "Web Defense Architecture Lab package integrating fictional architecture, identity/session design, access control, data safety, APIs, browser protections, secrets, monitoring, findings, remediation, and executive review",
  "Executive briefing translating fictional web security findings into business impact, security goals, major design decisions, accepted risk, remediation ownership, validation, resilience, and next-review timing",
  "Privacy and data-governance review covering fictional minimization, sensitive fields, session/user data, logs, third parties, retention, distribution, access, monitoring purpose, and deletion expectations",
  "Public-safe Web Defense Architecture Review using only invented systems, users, services, data labels, diagrams, findings, owners, decisions, lessons, and outcomes"
];

const risks = [
  {
    "risk": "Architecture is skipped in favor of settings",
    "description": "A fictional team may configure individual controls without understanding data flows, trust boundaries, dependencies, administrative paths, or recovery needs.",
    "control": "Begin with assets, architecture, trust boundaries, sensitive data, dependencies, owners, security goals, failure modes, monitoring, and resilience."
  },
  {
    "risk": "Authentication is treated as authorization",
    "description": "A fictional user who successfully signs in may be incorrectly assumed to have permission for every resource or action.",
    "control": "Make authorization an independent server-side design decision based on business need, role, object ownership, context, least privilege, and deny-by-default principles."
  },
  {
    "risk": "Validation becomes one generic rule",
    "description": "Different fictional fields can have different business meaning, expected formats, bounds, storage, display contexts, privacy, and error behavior.",
    "control": "Define a field-specific contract and separate input validation, normalization, storage, output handling, logging, and user feedback."
  },
  {
    "risk": "API connectivity becomes implicit trust",
    "description": "A fictional internal or third-party service may be trusted simply because the application can reach it.",
    "control": "Define caller identity, permissions, object ownership, explicit contracts, dependency assumptions, errors, monitoring, resilience, and owner review."
  },
  {
    "risk": "One browser control becomes the whole defense",
    "description": "A fictional team may rely on one header, cookie attribute, or browser policy while weaknesses remain in architecture, access control, data handling, or secrets.",
    "control": "Use browser protections as layers within secure architecture, authorization, input/output safety, session design, secrets management, monitoring, and review."
  },
  {
    "risk": "Secrets appear in unsafe locations",
    "description": "Fictional credentials or sensitive configuration may drift into source code, logs, client-facing output, screenshots, documentation, or overly broad access.",
    "control": "Separate secret material from public/code contexts, minimize access, define owners, rotation concepts, change controls, logging limits, incident handling, and recovery."
  },
  {
    "risk": "Logging becomes excessive or useless",
    "description": "Collecting every fictional event may increase privacy exposure and noise while still failing to answer important defender questions.",
    "control": "Tie events to defender questions, source health, decision value, minimization, retention, baselines, correlation, escalation, and recovery validation."
  },
  {
    "risk": "Security review depends on offensive proof",
    "description": "A fictional team may think a finding is valid only after exploitation or bypass is demonstrated.",
    "control": "Use architecture, exposure, trust boundaries, control gaps, evidence, business impact, secure design principles, and safe validation questions without offensive exploitation."
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/secure-web-architecture-principles`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Begin A10.1
      </Link>
    </div>
  );
}

export default function AdvancedWebSecurityDefenseModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Application, Cloud, and Identity
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Fictional Defensive Training
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10 Advanced Web Security Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn professional secure-web design through architecture, trust
            boundaries, authentication, sessions, authorization, input and output
            safety, API security, browser protections, secrets, configuration,
            logging, monitoring, defensive review, remediation, and a fictional
            architecture lab without offensive exploitation steps.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["10 lessons", "A complete secure-web architecture and review pathway"],
            ["1 module test", "25 hidden-answer assessment questions"],
            ["1 connected portfolio", "Web defense architecture review package"],
            ["100% fictional", "No real exploitation, bypass testing, credential attacks, scanning, or unauthorized access"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-2xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Module Professional meaning"
          title="Design Web Defenses as a Connected Architecture, Not a Collection of Settings"
        >
          <p className="leading-8">
            Secure web design is not simply adding a login page, one browser
            header, or a validation rule. A professional fictional architecture
            connects business purpose, users, trust boundaries, authentication,
            sessions, authorization, data handling, APIs, browser protections,
            secrets, configuration, monitoring, privacy, resilience, change
            ownership, review evidence, remediation, validation, and recovery.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                Main question
              </p>
              <p className="mt-3 text-lg font-bold leading-8">
                How do professional defenders design and review a fictional web
                system so that identity, access, data handling, APIs, browser
                behavior, secrets, monitoring, resilience, privacy, and change
                management work together without relying on offensive
                exploitation to prove every security decision?
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Safety boundary
              </p>
              <p className="mt-3 leading-7">
                Every organization, user, account, role, browser, application,
                API, service, data object, secret label, configuration item,
                event, diagram, finding, and outcome is invented. A10 teaches
                secure design and defensive review, not exploitation, bypass,
                credential attacks, unauthorized testing, scanning, probing, or
                attacks against real web applications.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Entry Readiness"
          title="Before Beginning A10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "I understand that A10 teaches secure web design and defensive review without offensive exploitation steps.",
              "I will use only fictional architecture, users, roles, requests, responses, data labels, APIs, configuration, logs, findings, and diagrams.",
              "I can separate authentication, session management, authorization, data handling, API contracts, browser protections, secrets, configuration, monitoring, and recovery as connected but distinct decisions.",
              "I will use safe inert examples for input/output review and will not use attack payloads, bypass strings, exploit demonstrations, scanning, probing, or unauthorized requests.",
              "I will treat security findings as evidence-based design or control concerns with business impact, owners, validation criteria, and residual risk rather than as invitations to exploit a system.",
              "I will protect privacy through minimization, purpose limitation, fictionalization, safe logs, need-to-know, retention, and public-safe portfolio boundaries.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Web Defense Architecture Review Workflow"
        >
          <div className="grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required professional output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Outcomes"
          title="Eight Advanced Module Objectives"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Role Readiness Preview"
          title="Eight Principles That Keep Web Security Design Defensible"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {rolePreview.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.role}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Professional meaning
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.mission}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Must not replace
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.doesNotReplace}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Readiness requirement
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.readiness}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Lesson Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Complete All Ten A10 Lessons
          </h2>

          <div className="mt-6 grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950"
              >
                <div className="grid md:grid-cols-[0.24fr_1fr]">
                  <div className="flex min-h-44 flex-col justify-between border-b border-slate-700 bg-[linear-gradient(145deg,_rgba(34,211,238,0.16),_rgba(168,85,247,0.12),_rgba(15,23,42,0.95))] p-6 md:border-b-0 md:border-r">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                        Lesson {index + 1} of 10
                      </p>
                      <p className="mt-4 text-4xl font-black text-white">
                        {lesson.number}
                      </p>
                    </div>

                    <span className="mt-6 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      Advanced Defensive Lesson
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Skills developed
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>• {skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Safe fictional defensive lab
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.defensiveLab}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Web Defense Evidence You Will Learn to Reason About Safely
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Defensive response use", item.responseUse],
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

        <SectionCard
          eyebrow="Web Defense Decision Preview"
          title="Eight Questions Every Fictional Web Defense Review Must Answer"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {decisionQuestions.map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Fictional Web Defense Architecture Review"
        >
          <p className="leading-8">
            By the end of A10, you will have one connected fictional package
            showing how a professional web security review moves from architecture
            and trust boundaries to authentication, sessions, authorization, data
            safety, APIs, browser protections, secrets, configuration, monitoring,
            findings, remediation, validation, executive communication, privacy,
            resilience, and public-safe reflection.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Artifact {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{artifact}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Web Defense Risk Preview"
          title="Eight Web Security Design Mistakes This Module Will Teach You to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">{item.risk}</h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it is risky
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Conceptual Web Defense Boundaries"
          title="What A10 Teaches—and What It Deliberately Does Not Teach"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                A10 teaches
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                {[
                  "Secure web architecture, trust boundaries, assets, data flows, dependencies, least exposure, secure defaults, monitoring, resilience, and owner accountability",
                  "Authentication, MFA concepts, account recovery, session lifecycle, authorization, least privilege, object ownership, administrative separation, exceptions, and access review",
                  "Input contracts, validation, normalization, storage, context-aware output safety, safe errors, API contracts, browser protections, and privacy using inert fictional examples",
                  "Secrets and configuration governance, logging, monitoring, source health, change review, findings, remediation, validation, accepted risk, and re-review triggers",
                  "How to produce a professional fictional Web Defense Architecture Review without offensive exploitation or real-system testing",
                ].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-6 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                A10 does not teach
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                {[
                  "Exploit payloads, injection strings, bypass methods, credential attacks, session theft, privilege escalation, unauthorized access, or attack chaining",
                  "Scanning, probing, enumeration, fuzzing, brute force, exploit frameworks, offensive automation, or testing against real websites, APIs, accounts, or services",
                  "Instructions for defeating browser protections, authorization, authentication, rate limits, monitoring, secrets controls, or other defensive mechanisms",
                  "Use of real passwords, tokens, API keys, cookies, secrets, private requests, private responses, internal hostnames, real logs, real endpoints, or sensitive configuration",
                  "Publication of real organizations, users, architecture, suppliers, vulnerabilities, defensive controls, incident details, or other sensitive web security information",
                ].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Test"
          title="A10 Advanced Web Security Defense Assessment"
        >
          <p className="leading-8">
            Complete a 25-question hidden-answer assessment covering web
            architecture, trust boundaries, authentication, session design,
            authorization, access control, input and output safety, APIs,
            browser protections, secrets, configuration, logging, monitoring,
            privacy, secure review, remediation, validation, and integrated web
            defense architecture decisions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "25 questions",
                "Answers and explanations remain hidden until the student chooses to reveal them.",
              ],
              [
                "All ten lessons",
                "The assessment covers the complete A10 Advanced Web Security Defense pathway.",
              ],
              [
                "Design-focused",
                "Questions measure secure architecture, identity, access, data safety, APIs, browser controls, secrets, monitoring, review, and defensive judgment.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 font-black text-yellow-100 transition hover:bg-yellow-400/20"
            >
              Open A10 Module Test
            </Link>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Begin Advanced Web Security Defense
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Start with A10.1 to build the architecture-level view first:
            business purpose, users, assets, trust boundaries, data flows,
            identity, application services, APIs, data stores, suppliers,
            monitoring, administration, recovery, assumptions, and defensive
            design goals before individual web controls are reviewed.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}