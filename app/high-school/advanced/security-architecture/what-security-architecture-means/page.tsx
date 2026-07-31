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
const modulePath = `${trackPath}/security-architecture`;
const previousPage = modulePath;
const nextLesson = `${modulePath}/defense-in-depth-design`;

const objectives = [
  "Explain security architecture as the coordinated design of mission, assets, identities, data, networks, services, controls, trust, visibility, resilience, ownership, and change.",
  "Distinguish architecture, engineering, configuration, operations, policy, governance, products, and individual security controls in a fictional environment.",
  "Create a fictional system-context map showing users, services, identities, data, dependencies, trust boundaries, owners, assumptions, and critical outcomes.",
  "Evaluate whether a fictional design supports prevention, detection, response, recovery, privacy, service continuity, and professional accountability together.",
  "Produce a portfolio-ready architecture foundation using only invented organizations, systems, identities, records, diagrams, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Security architecture",
    "The intentional fictional arrangement of systems, identities, data, networks, services, controls, trust relationships, visibility, resilience, ownership, and change so the mission can operate safely."
  ],
  [
    "Mission",
    "The fictional purpose the organization or service must accomplish for its users and stakeholders."
  ],
  [
    "System context",
    "A high-level fictional view showing the system, users, external actors, connected services, data exchanges, owners, and boundaries."
  ],
  [
    "Asset",
    "A fictional system, identity, data set, service, device, process, supplier dependency, or capability that has value and requires protection."
  ],
  [
    "Dependency",
    "A fictional system, service, identity, data source, supplier, network, process, or person required for another function to operate."
  ],
  [
    "Trust relationship",
    "A fictional assumption that one identity, service, system, owner, or data source may rely on another under defined conditions."
  ],
  [
    "Trust boundary",
    "A point where fictional ownership, authority, sensitivity, identity, network, service, or control assumptions change."
  ],
  [
    "Security requirement",
    "A measurable fictional condition the architecture must satisfy, such as limiting access, preserving evidence, maintaining service, or restoring within an approved period."
  ],
  [
    "Control objective",
    "The fictional outcome a safeguard should achieve, such as prevent unauthorized access, detect unusual activity, preserve evidence, or restore service."
  ],
  [
    "Control implementation",
    "The fictional process, configuration, technology, role, or procedure used to achieve a control objective."
  ],
  [
    "Architecture decision",
    "A documented fictional choice among design options, including context, assumptions, tradeoffs, owner, rationale, consequences, and residual risk."
  ],
  [
    "Constraint",
    "A fictional limitation involving time, budget, law, privacy, supplier capability, performance, usability, staffing, legacy systems, or service continuity."
  ],
  [
    "Assumption",
    "A fictional condition treated as true for design purposes that should be documented and later validated."
  ],
  [
    "Failure mode",
    "A fictional way in which a system, control, identity, data source, service, dependency, or process may fail or become unreliable."
  ],
  [
    "Resilience",
    "The ability of a fictional service to continue safely, degrade predictably, recover from known states, and validate restored outcomes."
  ],
  [
    "Observability",
    "The fictional evidence and context needed to understand system state, actions, failures, changes, and control effectiveness."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after approved architecture controls and decisions are applied."
  ],
  [
    "Architecture governance",
    "The fictional ownership, review, versioning, exception, validation, change, and retirement process that keeps architecture aligned over time."
  ]
];
const architectureLayers = [
  {
    "layer": "Mission and users",
    "question": "What fictional outcome must the service provide, for whom, under which safety and availability expectations?",
    "includes": "Business purpose, user groups, critical functions, success measures, operating hours, support, and acceptable disruption.",
    "failure_if_missing": "The design protects technology without knowing which outcomes matter most.",
    "portfolio_output": "Mission and user-needs statement"
  },
  {
    "layer": "Assets and dependencies",
    "question": "Which fictional systems, identities, data, services, networks, suppliers, locations, and processes enable the mission?",
    "includes": "Asset inventory, ownership, criticality, dependency chains, single points of failure, and lifecycle state.",
    "failure_if_missing": "Important services or hidden dependencies remain unprotected and unrecoverable.",
    "portfolio_output": "Asset and dependency inventory"
  },
  {
    "layer": "Identity and authority",
    "question": "Which fictional humans, services, devices, and workloads may act, and who approves their permissions?",
    "includes": "Authentication, authorization, roles, privilege, lifecycle, emergency access, review, and monitoring.",
    "failure_if_missing": "The architecture cannot explain who may do what, why, or under whose authority.",
    "portfolio_output": "Identity and privilege map"
  },
  {
    "layer": "Data and privacy",
    "question": "What fictional information exists, why is it used, where does it move, who owns it, and how long is it retained?",
    "includes": "Classification, purpose, minimum necessary, flow, storage, access, sharing, retention, deletion, and evidence needs.",
    "failure_if_missing": "Security controls may overcollect, expose, misroute, or retain information without ownership.",
    "portfolio_output": "Data inventory and flow diagram"
  },
  {
    "layer": "Networks and trust boundaries",
    "question": "Where do fictional communication, ownership, sensitivity, and trust assumptions change?",
    "includes": "Zones, approved paths, denied paths, gateways, remote access, supplier connections, monitoring, and exceptions.",
    "failure_if_missing": "Connected systems may be treated as equally trusted and broad impact may spread.",
    "portfolio_output": "Trust-boundary and zone diagram"
  },
  {
    "layer": "Applications and services",
    "question": "How do fictional components provide the mission, validate requests, protect data, handle errors, and communicate with dependencies?",
    "includes": "Service responsibilities, interfaces, authentication, authorization, configuration, secrets, logging, error handling, and recovery.",
    "failure_if_missing": "Security decisions remain disconnected from how the service actually functions.",
    "portfolio_output": "Service responsibility map"
  },
  {
    "layer": "Prevention and hardening",
    "question": "Which fictional safeguards reduce the likelihood and scope of unsafe behavior?",
    "includes": "Secure defaults, least privilege, least functionality, segmentation, access limits, baselines, change control, and exceptions.",
    "failure_if_missing": "The architecture depends mainly on detecting problems after they occur.",
    "portfolio_output": "Preventive-control map"
  },
  {
    "layer": "Detection and visibility",
    "question": "Which fictional evidence sources answer important defender and owner questions?",
    "includes": "Logs, metrics, alerts, source health, time quality, context, access, retention, integrity, and case linkage.",
    "failure_if_missing": "The team cannot distinguish expected behavior, control failure, service degradation, or risk.",
    "portfolio_output": "Visibility and evidence-coverage map"
  },
  {
    "layer": "Response and recovery",
    "question": "How does the fictional architecture contain problems, preserve evidence, continue critical functions, restore service, and validate recovery?",
    "includes": "Playbooks, owner coordination, rollback, backup, restoration, continuity, communication, and residual monitoring.",
    "failure_if_missing": "The architecture may prevent some events but fail dangerously when disruption occurs.",
    "portfolio_output": "Response and recovery architecture"
  },
  {
    "layer": "Governance and change",
    "question": "Who owns fictional decisions, exceptions, suppliers, versions, validation, review cadence, residual risk, and retirement?",
    "includes": "Decision records, approvals, reviews, exceptions, metrics, evidence, change control, and lifecycle ownership.",
    "failure_if_missing": "The architecture becomes an outdated diagram rather than a maintained control system.",
    "portfolio_output": "Architecture governance plan"
  }
];
const architectureVsOtherWork = [
  {
    "discipline": "Security architecture",
    "primary_question": "How should the fictional system be structured so mission, trust, controls, visibility, resilience, ownership, and change work together?",
    "typical_output": "Context diagrams, trust boundaries, control patterns, requirements, decisions, tradeoffs, and governance.",
    "not_the_same_as": "Installing one product or writing one configuration.",
    "relationship": "Guides and constrains engineering, operations, policy, and technology choices."
  },
  {
    "discipline": "Security engineering",
    "primary_question": "How should an approved fictional architecture be implemented, tested, integrated, and maintained?",
    "typical_output": "Detailed designs, implementation plans, test cases, interfaces, configurations, and technical validation.",
    "not_the_same_as": "Owning the entire business and risk decision.",
    "relationship": "Turns architecture into working technical controls."
  },
  {
    "discipline": "Security operations",
    "primary_question": "How should fictional systems be monitored, triaged, supported, changed, responded to, and restored day to day?",
    "typical_output": "Runbooks, alerts, tickets, investigations, response actions, metrics, and lessons learned.",
    "not_the_same_as": "Defining every long-term design principle.",
    "relationship": "Provides operational evidence that architecture works or needs revision."
  },
  {
    "discipline": "Governance, risk, and compliance",
    "primary_question": "Which fictional obligations, risk decisions, evidence, policies, controls, ownership, and exceptions must be governed?",
    "typical_output": "Policies, risk registers, control mappings, audit evidence, exceptions, and owner decisions.",
    "not_the_same_as": "Designing every technical component.",
    "relationship": "Supplies requirements and receives evidence from architecture and operations."
  },
  {
    "discipline": "Privacy engineering",
    "primary_question": "How should fictional personal and sensitive information be minimized, used, protected, retained, deleted, and explained?",
    "typical_output": "Data inventories, purpose maps, field allowlists, privacy requirements, assessments, and lifecycle controls.",
    "not_the_same_as": "A single encryption or access-control decision.",
    "relationship": "Shapes architecture wherever data and user rights are involved."
  },
  {
    "discipline": "Product or platform selection",
    "primary_question": "Which fictional product or service best meets approved requirements and constraints?",
    "typical_output": "Requirements comparison, evaluation, procurement decision, and supplier-risk review.",
    "not_the_same_as": "Architecture itself.",
    "relationship": "Products should fit the architecture rather than define it by default."
  }
];
const architectureWorkflow = [
  {
    "step": "1",
    "title": "State the fictional mission",
    "questions": "What outcome must exist, who depends on it, which functions are critical, and what does safe operation mean?",
    "output": "Mission, users, critical functions, success measures, and operating assumptions.",
    "stop": "Do not design controls before the mission and critical outcomes are understood."
  },
  {
    "step": "2",
    "title": "Define the system context",
    "questions": "What is inside the fictional system, what is outside, and which users, services, suppliers, and environments interact with it?",
    "output": "System-context diagram and boundary statement.",
    "stop": "Pause if ownership or system limits are unclear."
  },
  {
    "step": "3",
    "title": "Inventory assets and dependencies",
    "questions": "Which fictional systems, identities, data, networks, services, suppliers, processes, and people enable the mission?",
    "output": "Asset, owner, criticality, lifecycle, and dependency inventory.",
    "stop": "Do not assume the most visible application is the only critical asset."
  },
  {
    "step": "4",
    "title": "Map trust and data flows",
    "questions": "Where do fictional authority, sensitivity, ownership, network, identity, and control assumptions change?",
    "output": "Trust-boundary, zone, and data-flow diagram.",
    "stop": "Pause if any path lacks a purpose or owner."
  },
  {
    "step": "5",
    "title": "Write measurable requirements",
    "questions": "What must the fictional architecture prevent, detect, preserve, continue, recover, explain, and validate?",
    "output": "Security, privacy, resilience, visibility, and governance requirements.",
    "stop": "Reject vague requirements such as be secure or use strong security."
  },
  {
    "step": "6",
    "title": "Design coordinated control layers",
    "questions": "Which fictional preventive, detective, response, recovery, identity, segmentation, logging, hardening, and governance controls work together?",
    "output": "Layered control architecture and responsibility map.",
    "stop": "Pause if all controls depend on the same platform, identity, owner, or data source."
  },
  {
    "step": "7",
    "title": "Analyze failures and tradeoffs",
    "questions": "What happens when fictional controls, identities, networks, suppliers, data sources, services, or administrators fail?",
    "output": "Failure-mode, dependency, tradeoff, and residual-risk matrix.",
    "stop": "Do not claim resilience without testing failure assumptions."
  },
  {
    "step": "8",
    "title": "Assign owners and decisions",
    "questions": "Who designs, approves, implements, operates, communicates, validates, accepts risk, and governs change?",
    "output": "Architecture RACI-style responsibility and decision map.",
    "stop": "Pause if no authorized owner exists for a critical decision or exception."
  },
  {
    "step": "9",
    "title": "Validate the architecture",
    "questions": "Which fictional evidence, review, test cases, recovery exercises, source checks, and effective-state checks prove the design works?",
    "output": "Architecture validation plan and evidence register.",
    "stop": "Do not treat a diagram or approved document as proof of effective behavior."
  },
  {
    "step": "10",
    "title": "Govern lifecycle and change",
    "questions": "How are fictional versions, exceptions, suppliers, owners, data flows, technologies, risks, and retirement reviewed over time?",
    "output": "Architecture governance, review, change, and retirement plan.",
    "stop": "Do not let the approved design drift silently."
  }
];
const ownerRoles = [
  {
    "role": "Business or mission owner",
    "owns": "Fictional mission, users, critical outcomes, acceptable disruption, value, and business residual risk.",
    "must_decide": "Whether the architecture supports the mission and whether remaining business risk is acceptable.",
    "evidence": "Mission statement, critical-function list, service priorities, and risk decision."
  },
  {
    "role": "Security architect",
    "owns": "Fictional security design principles, trust model, control patterns, architecture decisions, and integrated review.",
    "must_decide": "Whether the proposed design satisfies approved security requirements and documents limitations.",
    "evidence": "Architecture diagrams, requirements, decision records, and validation plan."
  },
  {
    "role": "System or application owner",
    "owns": "Fictional service function, component behavior, dependencies, configuration ownership, support, and lifecycle.",
    "must_decide": "Whether the system design and changes meet service needs.",
    "evidence": "Service map, component inventory, dependencies, and owner validation."
  },
  {
    "role": "Identity owner",
    "owns": "Fictional authentication, authorization, roles, privilege, lifecycle, emergency access, review, and identity evidence.",
    "must_decide": "Which identities and permissions are justified and how they are governed.",
    "evidence": "Identity map, access matrix, lifecycle, approvals, and review logs."
  },
  {
    "role": "Data or privacy owner",
    "owns": "Fictional data purpose, classification, fields, access, sharing, retention, deletion, and privacy requirements.",
    "must_decide": "Which data uses and flows are authorized and minimum necessary.",
    "evidence": "Data inventory, flow map, classification, owner approval, and lifecycle rules."
  },
  {
    "role": "Network or platform owner",
    "owns": "Fictional zones, communication paths, connectivity, platform services, availability, configuration, and monitoring.",
    "must_decide": "Which paths and platform capabilities are approved and supportable.",
    "evidence": "Zone map, flow allowlist, configuration baseline, and validation."
  },
  {
    "role": "Logging and detection owner",
    "owns": "Fictional evidence sources, context, source health, time quality, access, retention, integrity, coverage, and alert use.",
    "must_decide": "Whether defender and owner questions can be answered reliably.",
    "evidence": "Visibility map, source inventory, health checks, retention, and coverage review."
  },
  {
    "role": "Service continuity and recovery owner",
    "owns": "Fictional continuity, backup, restoration, dependency order, rollback, communication, exercises, and recovery validation.",
    "must_decide": "Whether the service can be restored to a known safe state within approved expectations.",
    "evidence": "Recovery sequence, backup records, exercises, health checks, and signoff."
  },
  {
    "role": "Supplier or contract owner",
    "owns": "Fictional external dependencies, service commitments, evidence, communication, change, support, exit, and supplier risk.",
    "must_decide": "Which supplier capabilities and risks are acceptable.",
    "evidence": "Supplier map, agreement requirements, review evidence, and contingency plan."
  },
  {
    "role": "Risk owner or leadership",
    "owns": "Fictional cross-functional tradeoffs, resources, exceptions, residual risk, and final acceptance.",
    "must_decide": "Which architecture option is approved and which remaining risks are accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision record, option comparison, exception, owner, deadline, and acceptance."
  }
];
const requirementsExamples = [
  {
    "category": "Access",
    "weak": "Only authorized users may access the system.",
    "strong": "Each fictional human and service identity must use an approved role, least privilege, named owner, expiration or lifecycle state, review evidence, and monitored administrative activity.",
    "validation": "Role-to-permission matrix, denied-path test, access review, and audit record."
  },
  {
    "category": "Data",
    "weak": "Sensitive data must be protected.",
    "strong": "The fictional service must use only approved fields for the stated purpose, encrypt protected data in approved states, restrict access by role, retain it for the approved period, and validate deletion.",
    "validation": "Data flow, field allowlist, access test, storage review, retention, and deletion evidence."
  },
  {
    "category": "Segmentation",
    "weak": "The network should be segmented.",
    "strong": "Fictional public, application, data, management, logging, backup, and supplier zones may communicate only through documented owner-approved paths with monitoring and exception review.",
    "validation": "Zone diagram, flow matrix, effective-path review, denied-path checks, and exception evidence."
  },
  {
    "category": "Visibility",
    "weak": "Enable logging.",
    "strong": "Fictional identity, application, database, administrative, change, backup, and recovery events must include reliable time, actor, action, target, result, source health, owner, retention, and access controls.",
    "validation": "Evidence coverage, sample records, time-quality test, source-health check, and access review."
  },
  {
    "category": "Recovery",
    "weak": "The service must have backups.",
    "strong": "The fictional service must restore application, identity, data consistency, logging, dependencies, and user access from approved recovery states and validate each outcome before closure.",
    "validation": "Recovery exercise, service checks, identity checks, data integrity, logging, owner signoff, and residual-risk record."
  },
  {
    "category": "Change",
    "weak": "Changes must be approved.",
    "strong": "Fictional architecture-impacting changes must identify owner, purpose, affected assets, trust boundaries, data flows, dependencies, risk, rollback, validation, communication, and review deadline.",
    "validation": "Change record, architecture diff, approval, implementation evidence, rollback test, and post-change review."
  }
];
const evidenceMatrix = [
  {
    "id": "A2-01",
    "source": "Fictional mission statement",
    "observation": "The service provides overnight support for three internal teams and must remain available during regional maintenance.",
    "supports": "Availability, identity continuity, support, and recovery are important architecture requirements.",
    "limits": "Does not define acceptable disruption or every dependency.",
    "architecture_use": "Ask the mission owner for measurable service and recovery expectations."
  },
  {
    "id": "A2-02",
    "source": "Fictional system-context diagram",
    "observation": "A public application connects to identity, internal service, database, logging, backup, and supplier systems.",
    "supports": "Multiple trust, ownership, data, and dependency boundaries exist.",
    "limits": "Does not prove actual communication paths or controls.",
    "architecture_use": "Create trust-boundary, data-flow, and owner maps."
  },
  {
    "id": "A2-03",
    "source": "Fictional identity matrix",
    "observation": "One support administrator can manage application, identity, database, and backup functions.",
    "supports": "Privilege and role concentration may increase impact and weaken independent review.",
    "limits": "Does not prove misuse or that every permission is unnecessary.",
    "architecture_use": "Review least privilege, role separation, emergency access, and monitoring."
  },
  {
    "id": "A2-04",
    "source": "Fictional flow record",
    "observation": "The application communicates directly with a backup-management interface not shown in the approved design.",
    "supports": "Effective behavior may not match the architecture diagram.",
    "limits": "Does not prove harmful traffic or intentional bypass.",
    "architecture_use": "Investigate ownership, purpose, path approval, monitoring, and correction."
  },
  {
    "id": "A2-05",
    "source": "Fictional logging map",
    "observation": "Application and identity activity are visible, but database administration and backup changes are not.",
    "supports": "The architecture lacks evidence for important administrative questions.",
    "limits": "Does not prove a security event occurred.",
    "architecture_use": "Expand evidence coverage with privacy, integrity, source-health, and retention controls."
  },
  {
    "id": "A2-06",
    "source": "Fictional recovery exercise",
    "observation": "The application returns, but identity synchronization and security logging remain incomplete.",
    "supports": "Application availability alone does not equal full service recovery.",
    "limits": "Does not prove the recovery design always fails.",
    "architecture_use": "Redesign the recovery sequence and validation gates."
  },
  {
    "id": "A2-07",
    "source": "Fictional architecture decision record",
    "observation": "A low-cost option combines identity, application, logging, and backup administration in one platform.",
    "supports": "The option reduces complexity but increases correlated-failure and privilege-concentration risk.",
    "limits": "Does not determine whether the option is unacceptable.",
    "architecture_use": "Compare cost, simplicity, resilience, ownership, recovery, and residual risk."
  },
  {
    "id": "A2-08",
    "source": "Fictional change log",
    "observation": "A supplier connection was added without updating the context diagram, data flow, trust boundaries, or evidence plan.",
    "supports": "Architecture drift and governance failure occurred.",
    "limits": "Does not prove the supplier connection is unsafe.",
    "architecture_use": "Require architecture review, owner validation, and updated documentation."
  }
];
const architecturePrinciples = [
  {
    "principle": "Mission before technology",
    "meaning": "Fictional controls and products should support defined user, service, data, and recovery outcomes.",
    "failure": "The team purchases tools before understanding what must be protected.",
    "evidence": "Mission, critical functions, user needs, and measurable requirements."
  },
  {
    "principle": "Explicit trust",
    "meaning": "Every fictional reliance between identities, systems, services, owners, data sources, and suppliers should be documented and validated.",
    "failure": "Internal or connected systems are trusted automatically.",
    "evidence": "Trust-boundary map, flow matrix, owner, condition, and validation."
  },
  {
    "principle": "Layered protection",
    "meaning": "Fictional preventive, detective, response, and recovery controls should provide meaningful independent value.",
    "failure": "Several controls fail together because they share one platform or identity.",
    "evidence": "Control-dependency and failure-mode review."
  },
  {
    "principle": "Least privilege and least functionality",
    "meaning": "Fictional identities, services, paths, data, and features receive only what the mission requires.",
    "failure": "Broad access and unnecessary services remain enabled for convenience.",
    "evidence": "Access matrix, service inventory, exceptions, review, and effective-state checks."
  },
  {
    "principle": "Evidence by design",
    "meaning": "The fictional architecture should produce reliable evidence for security, service, privacy, recovery, and governance questions.",
    "failure": "Important administrative actions cannot be reconstructed.",
    "evidence": "Logging coverage, source health, time quality, retention, integrity, and access."
  },
  {
    "principle": "Safe failure and recovery",
    "meaning": "Fictional systems should fail predictably, preserve critical functions, protect evidence, and restore from known states.",
    "failure": "A control outage removes both service and visibility.",
    "evidence": "Failure tests, fallback, rollback, recovery sequence, and validation."
  },
  {
    "principle": "Clear ownership",
    "meaning": "Every fictional asset, identity, data set, path, control, exception, dependency, decision, and residual risk needs an authorized owner.",
    "failure": "Everyone assumes another team owns the gap.",
    "evidence": "Responsibility map, approvals, actions, deadlines, and signoff."
  },
  {
    "principle": "Governed change",
    "meaning": "Fictional architecture evolves through visible, reviewed, tested, reversible, documented decisions.",
    "failure": "Suppliers, data flows, identities, and exceptions change without architecture review.",
    "evidence": "Version history, architecture diff, change record, validation, and review cadence."
  }
];
const commonMistakes = [
  "Starting with a fictional product name instead of the mission, users, data, dependencies, and requirements.",
  "Treating one diagram as the architecture rather than a view of the architecture.",
  "Listing controls without explaining which mission outcome, asset, boundary, or failure they address.",
  "Assuming connected or internal fictional systems are automatically trusted.",
  "Designing several controls that depend on the same platform, identity, administrator, or evidence source.",
  "Ignoring service continuity, recovery order, identity restoration, logging, and communication.",
  "Using vague requirements such as secure, strong, modern, or protected without measurable validation.",
  "Failing to assign owners for identities, data, paths, logs, backups, suppliers, exceptions, and residual risk.",
  "Treating an approved diagram as proof that effective configuration and behavior match the design.",
  "Collecting more fictional data and logs than the purpose requires.",
  "Focusing on prevention while neglecting detection, response, recovery, and improvement.",
  "Allowing architecture changes and supplier connections to drift without versioned review.",
  "Using real internal diagrams, configuration details, credentials, logs, or supplier architecture in a portfolio artifact.",
  "Making the fictional architecture so complex that it becomes difficult to operate, validate, recover, and govern."
];
const quizQuestions = [
  {
    "question": "What best describes security architecture?",
    "choices": [
      "A list of security products.",
      "The coordinated fictional design of mission, assets, identities, data, networks, controls, trust, visibility, resilience, ownership, and change.",
      "A network diagram only.",
      "A daily alert-triage process."
    ],
    "answer": 1,
    "explanation": "Security architecture coordinates the complete design and governance of how a fictional system operates safely."
  },
  {
    "question": "Why should architecture begin with the fictional mission?",
    "choices": [
      "Mission statements replace technical requirements.",
      "The mission identifies which users, functions, outcomes, dependencies, and recovery needs the design must support.",
      "The mission selects the product automatically.",
      "The mission eliminates tradeoffs."
    ],
    "answer": 1,
    "explanation": "Architecture should protect the outcomes that matter, not technology in isolation."
  },
  {
    "question": "A fictional diagram shows a supplier connection. What does the diagram alone prove?",
    "choices": [
      "The connection is secure.",
      "The connection is authorized.",
      "A documented relationship exists in the view, but actual paths, controls, ownership, and validation still require evidence.",
      "The supplier owns all related risk."
    ],
    "answer": 2,
    "explanation": "A diagram is a model, not proof of effective state or authorization."
  },
  {
    "question": "Which requirement is strongest?",
    "choices": [
      "Enable strong logging.",
      "Protect sensitive information.",
      "Fictional administrative events must record actor, action, target, result, reliable time, source health, owner, retention, and access controls.",
      "Use modern security."
    ],
    "answer": 2,
    "explanation": "Strong requirements are specific, measurable, owner-aware, and testable."
  },
  {
    "question": "What is a trust boundary?",
    "choices": [
      "Any line drawn on a diagram.",
      "A point where fictional ownership, authority, sensitivity, identity, network, service, or control assumptions change.",
      "A firewall product.",
      "A list of trusted employees."
    ],
    "answer": 1,
    "explanation": "Trust boundaries describe meaningful changes in assumptions and required validation."
  },
  {
    "question": "A fictional recovery exercise restores the application but not identity synchronization or logging. What is strongest?",
    "choices": [
      "Declare recovery complete because the webpage loads.",
      "Keep the case open and validate identity, data, dependencies, logging, access, service health, and owner outcomes.",
      "Disable logging permanently.",
      "Repeat only the application restore."
    ],
    "answer": 1,
    "explanation": "Recovery is an end-to-end service outcome, not merely application availability."
  },
  {
    "question": "What makes an A2.1 architecture portfolio artifact safe to share?",
    "choices": [
      "Only real hostnames are removed.",
      "Internal diagrams are blurred.",
      "Every organization, system, identity, data set, flow, owner, decision, date, and outcome is invented.",
      "The real architecture is summarized without credentials."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, systems, people, and confidential designs."
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
        A2 Module Home
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function WhatSecurityArchitectureMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Architecture Foundations
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.1 What Security Architecture Means
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn why security architecture is more than a diagram or product
            list. Build a fictional design foundation that connects mission,
            assets, identities, data, networks, services, trust, control
            layers, evidence, resilience, ownership, decisions, and change.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A2: Security Architecture"
          lessonTitle="What Security Architecture Means"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, services, data, flows, diagrams, owners, decisions, dates, and outcomes.",
            "I understand that a diagram is a model and does not prove effective configuration, authorization, or control behavior.",
            "I will begin with mission, users, assets, dependencies, trust, ownership, and requirements before selecting fictional tools.",
            "I will not upload or reproduce real internal architecture, credentials, configurations, logs, network details, supplier information, or private records.",
            "I will analyze only supplied fictional evidence and will not access, scan, test, change, or investigate any real system.",
            "I will document assumptions, limitations, tradeoffs, validation, residual risk, and change ownership.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Diagram Can Look Secure while the System Remains Fragile"
        >
          <p className="leading-8">
            A fictional architecture diagram shows a public application,
            identity provider, internal service, database, logging platform,
            backup service, and supplier. The diagram looks organized, but one
            support administrator controls several critical functions, database
            and backup administration are not logged, the application reaches
            an undocumented management interface, and recovery restores the
            application without identity synchronization. Architecture means
            understanding how those decisions interact—not merely drawing the
            boxes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Tool-first thinking
              </p>
              <p className="mt-2 leading-7">
                Add more products, trust the approved diagram, and assume each
                team will manage its own gap.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Architecture thinking
              </p>
              <p className="mt-2 leading-7">
                Start with mission and dependencies, map trust and ownership,
                define measurable requirements, coordinate control layers,
                analyze failure, and validate effective outcomes.
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
          title="Security Outcomes Depend on Relationships between Decisions"
        >
          <p className="leading-8">
            A strong fictional identity control may still fail if recovery
            cannot restore identity state. Segmentation may reduce spread but
            fail if exceptions are unmanaged. Logging may exist but remain
            unusable because timestamps, source health, ownership, or retention
            are missing. Security architecture connects these decisions so the
            mission remains preventable, visible, recoverable, supportable, and
            governed.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Mission aligned",
                "The fictional design protects the outcomes users and owners actually depend on.",
              ],
              [
                "Failure aware",
                "The fictional design expects controls, services, identities, suppliers, and evidence sources to fail.",
              ],
              [
                "Governed",
                "The fictional design has owners, requirements, validation, exceptions, versions, and residual-risk decisions.",
              ],
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

        <SectionCard
          eyebrow="Core Model"
          title="Mission → Context → Trust → Requirements → Controls → Validation"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Mission", "Define fictional users, critical functions, success, acceptable disruption, and operating assumptions."],
              ["Context", "Inventory fictional systems, identities, data, services, suppliers, networks, owners, and dependencies."],
              ["Trust", "Identify where fictional authority, sensitivity, ownership, identity, network, and control assumptions change."],
              ["Requirements", "Write measurable fictional prevention, detection, privacy, resilience, evidence, and governance outcomes."],
              ["Controls", "Coordinate fictional identity, segmentation, hardening, visibility, response, recovery, and ownership layers."],
              ["Validation", "Prove fictional effective behavior, service outcomes, evidence quality, recovery, and residual risk."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Architecture Decisions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Architecture Layers
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Connected Layers of a Defensible Design
          </h2>

          <div className="mt-6 grid gap-5">
            {architectureLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.layer}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Includes", item.includes],
                    ["Failure if missing", item.failure_if_missing],
                    ["Portfolio output", item.portfolio_output],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.layer}-${label}`}
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
            Architecture and Related Work
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Architecture Guides Other Disciplines without Replacing Them
          </h2>

          <div className="mt-6 grid gap-5">
            {architectureVsOtherWork.map((item) => (
              <article
                key={item.discipline}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.discipline}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Primary question", item.primary_question],
                    ["Typical output", item.typical_output],
                    ["Not the same as", item.not_the_same_as],
                    ["Relationship", item.relationship],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.discipline}-${label}`}
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
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Mission to Architecture Governance
          </h2>

          <div className="mt-6 grid gap-5">
            {architectureWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Architecture Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners with Different Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {ownerRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Owns", item.owns],
                    ["Must decide", item.must_decide],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
            Measurable Requirements
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Replace Vague Security Language with Testable Outcomes
          </h2>

          <div className="mt-6 grid gap-5">
            {requirementsExamples.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.category}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong requirement
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.validation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Architecture Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Principles for a Defensible Design
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {architecturePrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.meaning}</p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Failure pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.failure}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Architecture Foundation Dashboard"
          subtitle="Fictional mission, trust, identity, visibility, recovery, and governance review for training only."
          metrics={[
            {
              label: "Critical dependencies",
              value: "7",
              note: "Identity, database, logging, backup, supplier, support, and network services enable the mission.",
            },
            {
              label: "Architecture gaps",
              value: "4",
              note: "Privilege concentration, undocumented flow, evidence coverage, and incomplete recovery require design changes.",
            },
            {
              label: "Current status",
              value: "Review",
              note: "The architecture is not ready for approval until requirements and validation are complete.",
            },
          ]}
        />

        <FakeAlertCard
          title="Approved Diagram Does Not Match Effective Architecture"
          severity="High"
          time="2:16 PM"
          source="Fake Northbridge Architecture Review Console"
          details="The fictional application reaches an undocumented backup-management interface, one support identity controls several critical functions, database and backup administration lack evidence coverage, and recovery omits identity synchronization."
          recommendation="Pause architecture approval, confirm mission and ownership, update the context and flow diagrams, review privilege, add evidence requirements, redesign recovery validation, and document tradeoffs and residual risk."
        />

        <FakeLogPanel
          title="Fake Architecture Review Timeline"
          logs={[
            "13:00 MISSION service='overnight-support'",
            "13:05 CONTEXT systems='app,idp,service,db,logs,backup,supplier'",
            "13:12 IDENTITY support-admin='multi-domain-privilege'",
            "13:18 FLOW app-to-backup-mgmt='observed'",
            "13:19 DIAGRAM app-to-backup-mgmt='missing'",
            "13:25 LOGGING database-admin='not-covered'",
            "13:26 LOGGING backup-admin='not-covered'",
            "13:35 RECOVERY application='restored'",
            "13:36 RECOVERY identity-sync='incomplete'",
            "13:37 RECOVERY security-logs='incomplete'",
            "13:45 REQUIREMENT identity-recovery='missing'",
            "13:50 OWNER backup-admin='unclear'",
            "14:00 DECISION architecture-approval='paused'",
            "14:05 ACTION trust-map='update'",
            "14:10 ACTION requirements='rewrite'",
            "14:16 STATUS validation='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Architecture Approval
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
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
                    ["Architecture use", item.architecture_use],
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

        <AnalyzeEvidenceCard
          title="Should the Fictional Architecture Be Approved?"
          question="Should the fictional Northbridge architecture be approved in its current state?"
          evidence={[
            "The mission depends on overnight availability and coordinated recovery.",
            "One support administrator controls application, identity, database, and backup functions.",
            "The application reaches an undocumented management interface.",
            "Database and backup administrative actions are not logged.",
            "Application recovery succeeds, but identity synchronization and logging remain incomplete.",
            "Several asset and control owners are unclear.",
            "The approved diagram does not match effective behavior.",
          ]}
          options={[
            "Pause approval, update context and trust maps, rewrite measurable requirements, review privilege, add evidence coverage, redesign recovery validation, assign owners, and document residual risk.",
            "Approve because the application remains available.",
            "Approve because the architecture diagram was already signed.",
            "Add another security product without changing the design.",
          ]}
          bestAnswer={0}
          explanation="Architecture approval requires mission alignment, accurate context, clear trust and ownership, measurable requirements, coordinated controls, effective-state evidence, recovery validation, and documented residual risk."
        />

        <SectionCard
          eyebrow="Common Architecture Mistakes"
          title="What Advanced Defenders Must Avoid"
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
          title="Build a Fictional Architecture Foundation"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Rebuild the Northbridge Architecture Context
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                internal architecture, diagrams, network details,
                configurations, credentials, logs, system names, supplier
                information, or private records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Mission, users, critical functions, and success measures.</li>
                <li>System-context and boundary diagram.</li>
                <li>Asset, identity, data, service, supplier, and dependency inventory.</li>
                <li>Trust-boundary and data-flow map.</li>
                <li>Measurable security, privacy, visibility, resilience, and governance requirements.</li>
                <li>Layered control and control-dependency map.</li>
                <li>Owner, decision, exception, and residual-risk matrix.</li>
                <li>Failure-mode and tradeoff analysis.</li>
                <li>Architecture validation and evidence plan.</li>
                <li>Revision history, reflection, and complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity produces a fictional educational design only. It does
            not authorize access, scanning, testing, configuration, change,
            investigation, or collection involving any real system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants to Buy a Security Product First"
          scenario="A fictional project team wants to select a platform immediately, but the mission, critical functions, data, dependencies, trust boundaries, owners, recovery needs, and measurable requirements are incomplete."
          choices={[
            {
              label: "Choice A",
              response: "Pause product selection, define mission and context, write measurable requirements, compare architecture options, and then evaluate products against the approved design.",
              outcome: "Best professional choice. Products should support architecture rather than define it by default.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Buy the most advanced platform and design around it.",
              outcome: "Risky. The platform may not match the fictional mission, dependencies, ownership, or recovery needs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Let the supplier define the architecture.",
              outcome: "Unsafe. Supplier expertise can help, but mission, ownership, risk, and architecture decisions remain with authorized owners.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Diagram Was Approved, but the Flow Is Undocumented"
          scenario="A fictional flow record shows the application reaching a backup-management interface not present in the approved architecture diagram."
          choices={[
            {
              label: "Choice A",
              response: "Treat the mismatch as architecture drift, verify purpose and ownership, update the flow and trust maps, review controls, and validate the effective state.",
              outcome: "Best professional choice. Approved intent and actual behavior must be reconciled.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Ignore the flow because the diagram was approved.",
              outcome: "Risky. Documents do not override effective behavior.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Assume the flow is malicious.",
              outcome: "Unsafe. The mismatch requires review but does not prove intent or harm.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design for a Failure That Removes Both Control and Evidence"
        >
          <p className="leading-8">
            Extend the fictional Northbridge design with one correlated-failure
            scenario. Assume the same platform provides identity, logging, and
            administration. Explain what happens when that platform becomes
            unavailable or unreliable. Your response must preserve service,
            prevent uncontrolled privilege, retain minimum evidence, support
            safe fallback, assign owners, and define recovery validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required analysis",
                "Identify affected mission functions, trust boundaries, identities, evidence, dependencies, owners, and decisions.",
              ],
              [
                "Required design",
                "Propose fictional independent controls, fallback, communication, rollback, recovery order, validation, and residual-risk ownership.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Security Architecture Foundation Checklist"
          items={[
            "I can define the fictional mission, users, critical functions, success measures, operating assumptions, and acceptable disruption.",
            "I can identify fictional systems, identities, data, networks, services, suppliers, locations, processes, owners, and dependencies.",
            "I can distinguish architecture, engineering, operations, governance, privacy, and product selection.",
            "I can identify fictional trust relationships, trust boundaries, approved flows, denied flows, and validation points.",
            "I can write fictional requirements that are specific, measurable, owner-aware, and testable.",
            "I can connect fictional prevention, detection, response, recovery, identity, segmentation, logging, hardening, and governance controls.",
            "I can analyze fictional control dependencies, correlated failures, service effects, privacy impacts, and recovery challenges.",
            "I can assign fictional business, security, system, identity, data, network, logging, recovery, supplier, communication, and risk owners.",
            "I can distinguish fictional architecture intent from effective configuration and behavior.",
            "I can define fictional validation evidence, review cadence, exceptions, architecture versions, change control, and retirement.",
            "I can explain fictional residual risk and tradeoffs without claiming the design is perfectly secure.",
            "I will never use real internal architecture, diagrams, configurations, credentials, logs, supplier details, or private records in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.1 Mini Quiz: What Security Architecture Means"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Security Architecture Foundation Package for Northbridge. Include the mission, users, critical functions, context diagram, system boundary, asset inventory, identity map, data inventory, dependency map, trust boundaries, approved flows, measurable requirements, architecture layers, control dependencies, owner map, failure modes, tradeoffs, validation plan, architecture decision record, residual risk, governance, reflection, revision history, and a statement that every organization, system, identity, record, diagram, owner, decision, date, and outcome is invented."
          tips={[
            "Begin with fictional mission and critical outcomes rather than products.",
            "Show both the approved design and one fictional effective-state mismatch.",
            "Include at least one correlated control failure and explain how the design responds.",
            "Make requirements measurable and connect each one to evidence and an owner.",
            "Keep every architecture element completely invented, defensive, non-operational, and safe to share.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Design Defense in Depth?"
        >
          <p className="leading-8">
            Before moving to A2.2, rate your readiness from 1 to 5 for each area:
            mission definition, context mapping, trust boundaries, measurable
            requirements, control relationships, ownership, failure analysis,
            validation, and architecture governance.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why security architecture is more than a product list or diagram.",
              "I can create a fictional context map with mission, assets, identities, data, services, suppliers, owners, and dependencies.",
              "I can identify fictional trust changes and write measurable requirements.",
              "I can connect control layers to failure modes, evidence, recovery, and ownership.",
              "I can explain what the fictional evidence does and does not prove.",
              "I can keep the entire architecture portfolio fully invented and safe to share.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one architecture concept you can explain confidently, one
            assumption you would validate before approval, and one skill you
            will strengthen in A2.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Security architecture coordinates mission, assets, identities, data, networks, services, controls, trust, visibility, resilience, ownership, and change.",
            "A product, configuration, policy, diagram, or individual control is only one part of the architecture.",
            "Architecture begins with users, critical functions, dependencies, assumptions, and measurable outcomes.",
            "Trust boundaries identify where authority, ownership, sensitivity, identity, network, service, or control assumptions change.",
            "Strong fictional requirements are specific, measurable, owner-aware, and testable.",
            "Control layers should provide independent value rather than failing together through shared dependencies.",
            "Evidence, source health, time quality, privacy, retention, and ownership should be designed before incidents occur.",
            "Recovery must validate identity, data, dependencies, service, logging, access, communication, and residual risk—not only application availability.",
            "Architecture remains effective through owners, decisions, validation, exceptions, versioning, change control, and lifecycle governance.",
            "Every CyberShield architecture artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A2
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