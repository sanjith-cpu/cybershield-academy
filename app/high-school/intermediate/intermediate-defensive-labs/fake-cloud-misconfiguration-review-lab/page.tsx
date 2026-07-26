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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-web-defense-review-lab`;
const nextLesson = `${modulePath}/fake-incident-response-tabletop`;

const objectives = [
  "Define a fictional cloud-misconfiguration review scope covering accounts, subscriptions, projects, resources, identities, storage, networks, encryption, logging, suppliers, owners, approved evidence, privacy limits, and decision authority.",
  "Evaluate fictional cloud configuration, effective access, network exposure, storage policy, encryption state, logging health, change history, business context, and shared-responsibility evidence.",
  "Distinguish fictional configuration weakness, possible exposure, confirmed access, confirmed disclosure, service impact, source gaps, confidence, and residual risk.",
  "Choose proportionate fictional actions such as restrict, roll back, harden, monitor, validate, rotate, restore logging, coordinate, escalate, or close with documented rationale.",
  "Create a portfolio-safe fictional cloud-misconfiguration review package with an evidence register, effective-state matrix, findings, owner communication, validation, metrics, and improvement recommendations."
];
const vocabulary = [
  [
    "Cloud resource",
    "A fictional hosted identity, storage service, compute service, database, network component, application, log source, secret store, or management object."
  ],
  [
    "Shared responsibility",
    "A fictional division of security duties among the cloud provider, customer organization, application team, supplier, and service owner."
  ],
  [
    "Cloud identity",
    "A fictional user, role, group, service principal, managed identity, application identity, supplier identity, or emergency administrator used in a cloud environment."
  ],
  [
    "Resource policy",
    "A fictional rule that defines who or what may access a cloud resource and under which conditions."
  ],
  [
    "Effective access",
    "The fictional permissions that actually exist after roles, groups, inherited policies, direct grants, conditions, exceptions, and public settings are combined."
  ],
  [
    "Public exposure",
    "A fictional condition in which a resource can be reached from a broad external audience without the intended restrictions."
  ],
  [
    "Network boundary",
    "A fictional control that limits which services, sources, routes, identities, or environments can reach a cloud resource."
  ],
  [
    "Encryption at rest",
    "A fictional control that protects stored data using an approved encryption process and key arrangement."
  ],
  [
    "Encryption in transit",
    "A fictional control that protects data while it moves between approved clients, services, networks, or suppliers."
  ],
  [
    "Key ownership",
    "A fictional record of who manages, rotates, approves, monitors, and recovers encryption keys or related secrets."
  ],
  [
    "Logging coverage",
    "A fictional assessment of whether important identity, configuration, access, network, application, and administrative events are recorded and delivered."
  ],
  [
    "Configuration drift",
    "A fictional difference between the approved baseline and the effective deployed cloud state."
  ],
  [
    "Cloud change record",
    "A fictional approved record describing who changed a resource, what changed, why, when, through which process, and how it should be validated or rolled back."
  ],
  [
    "Misconfiguration",
    "A fictional setting or control state that does not match the approved design and may create unnecessary risk."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after restriction, rollback, hardening, monitoring, validation, or other corrective action."
  ],
  [
    "Cloud-defense finding",
    "A fictional evidence-limited conclusion about a cloud control state, possible exposure, confirmed behavior, owners, actions, validation, and uncertainty."
  ]
];
const cloudRecords = [
  {
    "id": "NBR-CLD-01",
    "resource": "Fictional confidential document storage",
    "finding": "A resource policy changed outside the approved window and now includes a broad read condition.",
    "source": "Configuration history and policy evaluator",
    "health": "Healthy",
    "context": "The storage resource contains fictional confidential project files.",
    "owner": "Cloud Storage Owner and Data Owner",
    "risk": "Possible external read exposure.",
    "decision": "Restrict to the approved identity group, prepare rollback, and validate effective access.",
    "limit": "No unauthorized access or disclosure is confirmed."
  },
  {
    "id": "NBR-CLD-02",
    "resource": "Fictional analytics test bucket",
    "finding": "A staging storage resource permits public listing but contains only synthetic training data.",
    "source": "Storage configuration monitor",
    "health": "Healthy",
    "context": "The resource is staging, but the baseline prohibits public listing in every environment.",
    "owner": "Analytics Platform Owner",
    "risk": "Baseline drift and unsafe deployment pattern.",
    "decision": "Remove public listing, verify no production copy inherited the setting, and add a deployment check.",
    "limit": "No real data or production exposure is present in the supplied evidence."
  },
  {
    "id": "NBR-CLD-03",
    "resource": "Fictional production database",
    "finding": "The database accepts connections from a broader internal network range than documented.",
    "source": "Network policy and connection records",
    "health": "Healthy",
    "context": "Only two approved application services require access.",
    "owner": "Database Owner and Cloud Network Owner",
    "risk": "Unnecessary internal reachability.",
    "decision": "Narrow the network boundary to approved services and validate application function.",
    "limit": "No unauthorized connection is confirmed."
  },
  {
    "id": "NBR-CLD-04",
    "resource": "Fictional backup vault",
    "finding": "Encryption is enabled, but the key rotation test is overdue.",
    "source": "Encryption configuration and key-governance register",
    "health": "Healthy",
    "context": "The vault protects fictional backup data for a critical service.",
    "owner": "Backup Owner and Key Management Owner",
    "risk": "Recovery and key-governance assurance are incomplete.",
    "decision": "Retain the current vault, complete the approved rotation test, and validate restore readiness.",
    "limit": "Encryption failure or data exposure is not confirmed."
  },
  {
    "id": "NBR-CLD-05",
    "resource": "Fictional serverless application",
    "finding": "The application identity retains write access to a configuration store after the feature was retired.",
    "source": "Identity entitlement and application dependency records",
    "health": "Healthy",
    "context": "The current function needs read-only access.",
    "owner": "Application Owner and Identity Owner",
    "risk": "Unused write capability.",
    "decision": "Remove write access, test the application, and monitor for failures.",
    "limit": "No unauthorized configuration change is confirmed."
  },
  {
    "id": "NBR-CLD-06",
    "resource": "Fictional cloud audit source",
    "finding": "Administrative activity logs stopped arriving thirty-eight minutes ago.",
    "source": "Telemetry health monitor",
    "health": "Healthy",
    "context": "The source covers privileged configuration changes across several cloud services.",
    "owner": "Telemetry Owner and Cloud Platform Owner",
    "risk": "Current monitoring blind spot.",
    "decision": "Restore or fail over the source, preserve the gap, and use compensating configuration records.",
    "limit": "The gap does not prove malicious activity occurred."
  },
  {
    "id": "NBR-CLD-07",
    "resource": "Fictional supplier-managed notification service",
    "finding": "The supplier role can modify message templates and delivery configuration.",
    "source": "Role assignment and supplier agreement",
    "health": "Healthy",
    "context": "The supplier requires delivery troubleshooting but not permanent template administration.",
    "owner": "Supplier Owner and Communications Service Owner",
    "risk": "Supplier privilege exceeds current need.",
    "decision": "Reduce to troubleshooting permissions and use a time-limited elevation process for template changes.",
    "limit": "No harmful modification is confirmed."
  },
  {
    "id": "NBR-CLD-08",
    "resource": "Fictional web application secret store",
    "finding": "One retired application identity remains listed as a reader.",
    "source": "Secret-store policy and application inventory",
    "health": "Healthy",
    "context": "The application was decommissioned two months ago.",
    "owner": "Application Owner and Secret Management Owner",
    "risk": "Orphaned secret access path.",
    "decision": "Remove the identity, validate effective access, and review related stores.",
    "limit": "No secret retrieval is observed in the supplied period."
  },
  {
    "id": "NBR-CLD-09",
    "resource": "Fictional cloud firewall rule",
    "finding": "A temporary broad inbound rule remains active after a migration ended.",
    "source": "Network configuration history and migration record",
    "health": "Healthy",
    "context": "The migration completed four days ago.",
    "owner": "Cloud Network Owner",
    "risk": "Unnecessary external reachability to a management service.",
    "decision": "Remove the temporary rule, validate approved administration paths, and monitor.",
    "limit": "No successful unauthorized connection is confirmed."
  },
  {
    "id": "NBR-CLD-10",
    "resource": "Fictional managed application platform",
    "finding": "One required security configuration is inherited from a parent policy but not visible in the application team's local view.",
    "source": "Effective-policy evaluator",
    "health": "Healthy",
    "context": "The written local checklist incorrectly marks the control as missing.",
    "owner": "Cloud Platform Owner and Application Owner",
    "risk": "Documentation and review inconsistency rather than confirmed control absence.",
    "decision": "Document the inherited control, verify effective state, and improve the checklist.",
    "limit": "Local visibility is incomplete, but the effective control is present."
  }
];
const reviewQuestions = [
  {
    "question": "What is the effective cloud state?",
    "strong": "Combine fictional direct settings, inherited policies, roles, groups, network rules, public conditions, exceptions, and deployment versions.",
    "weak": "Review only the local resource screen.",
    "review": "Which inherited or hidden setting changes the actual result?"
  },
  {
    "question": "Which owner controls the decision?",
    "strong": "Identify fictional resource, data, identity, network, supplier, platform, telemetry, risk, and business owners separately.",
    "weak": "Assume the analyst can change every resource.",
    "review": "Who has authority to approve restriction, rollback, risk acceptance, or service impact?"
  },
  {
    "question": "What exposure is directly supported?",
    "strong": "Separate fictional policy state, reachability, successful access, data read, data change, disclosure, and service impact.",
    "weak": "Treat a broad policy as confirmed disclosure.",
    "review": "Which evidence proves each impact level?"
  },
  {
    "question": "Does the configuration match the approved baseline?",
    "strong": "Compare fictional current state, change record, exception, environment, resource type, data classification, and inherited policy.",
    "weak": "Assume every difference is harmful.",
    "review": "Is the difference approved, inherited, temporary, or unsupported?"
  },
  {
    "question": "Is logging sufficient?",
    "strong": "Evaluate fictional identity, configuration, access, network, administrative, service, supplier, delivery, parsing, and coverage records.",
    "weak": "Treat one audit source as complete visibility.",
    "review": "What cannot be concluded during a source gap?"
  },
  {
    "question": "Which shared-responsibility duty applies?",
    "strong": "Identify fictional provider, platform, customer, application, supplier, identity, data, and service responsibilities.",
    "weak": "Assume the provider secures every customer setting.",
    "review": "Which party owns the misconfiguration and its validation?"
  },
  {
    "question": "Which action is proportionate?",
    "strong": "Choose fictional restrict, roll back, harden, rotate, restore logging, monitor, reduce access, coordinate, escalate, or close.",
    "weak": "Delete the resource or shut down the environment for every finding.",
    "review": "What is the least disruptive action that reduces risk and uncertainty?"
  },
  {
    "question": "How will the result be validated?",
    "strong": "Confirm fictional effective access, network reachability, encryption, key operation, source health, service function, owner signoff, and residual risk.",
    "weak": "Close when the change ticket is marked complete.",
    "review": "What evidence proves the intended cloud state now exists?"
  }
];
const controlMatrix = [
  {
    "control": "Identity and access",
    "purpose": "Limit fictional cloud capability to approved users, services, suppliers, applications, and emergency roles.",
    "evidence": "Role assignments, groups, policies, activity, owner records, exceptions, and effective-access evaluation.",
    "failure": "A retired identity or supplier role retains unnecessary access.",
    "validation": "Confirm all direct, inherited, conditional, and exception paths after change."
  },
  {
    "control": "Storage access",
    "purpose": "Restrict fictional stored data to approved identities, services, networks, and business uses.",
    "evidence": "Resource policy, public setting, data classification, access records, change history, and owner approval.",
    "failure": "A broad read condition exists outside the approved design.",
    "validation": "Evaluate effective policy and approved positive and negative access cases."
  },
  {
    "control": "Network boundary",
    "purpose": "Limit fictional cloud services to the minimum approved communication paths.",
    "evidence": "Firewall rules, service endpoints, route policies, connection records, exceptions, and application dependencies.",
    "failure": "A temporary broad inbound rule remains after migration.",
    "validation": "Confirm approved paths function and unauthorized paths are unavailable."
  },
  {
    "control": "Encryption and keys",
    "purpose": "Protect fictional data at rest and in transit with approved ownership, rotation, recovery, and monitoring.",
    "evidence": "Encryption state, key owner, rotation record, restore test, transport setting, and exception history.",
    "failure": "Key rotation or recovery assurance is overdue.",
    "validation": "Complete approved rotation and recovery testing without exposing real secrets."
  },
  {
    "control": "Logging and monitoring",
    "purpose": "Record fictional identity, configuration, network, access, service, supplier, and administrative events.",
    "evidence": "Audit delivery, parsing, completeness, timeliness, coverage, ownership, alerts, and source-health records.",
    "failure": "Administrative logs stop arriving.",
    "validation": "Restore or fail over, reconstruct the gap, and verify current coverage."
  },
  {
    "control": "Configuration baseline",
    "purpose": "Define fictional approved settings by environment, resource type, data sensitivity, owner, and business function.",
    "evidence": "Baseline, deployment version, inherited policy, exception, change record, and effective-state result.",
    "failure": "A staging or temporary configuration drifts into long-term use.",
    "validation": "Compare effective state with the correct approved baseline."
  },
  {
    "control": "Supplier access",
    "purpose": "Limit fictional supplier capability to the approved service, task, duration, support model, and oversight.",
    "evidence": "Supplier agreement, role assignment, exception, activity, sponsor, service need, and expiration.",
    "failure": "A supplier keeps permanent administration that is only occasionally required.",
    "validation": "Reduce standing access and test time-limited elevation."
  },
  {
    "control": "Change and rollback",
    "purpose": "Ensure fictional cloud changes are approved, scoped, tested, monitored, reversible, and validated.",
    "evidence": "Change record, owner approval, implementation, test, monitoring, rollback, and post-change review.",
    "failure": "A broad rule or resource policy remains after a temporary task.",
    "validation": "Restore the approved state and verify service and security outcomes."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the cloud-review scope",
    "detail": "Identify fictional account, project, resource, identity, data, network, service, supplier, environment, owners, privacy, authority, and decisions.",
    "output": "Cloud review charter."
  },
  {
    "step": "2",
    "title": "Inventory resources and evidence",
    "detail": "List fictional resources, classifications, dependencies, owners, identities, policies, network paths, keys, logs, suppliers, changes, and source health.",
    "output": "Resource and evidence register."
  },
  {
    "step": "3",
    "title": "Calculate effective state",
    "detail": "Combine fictional direct settings, inherited controls, roles, groups, conditions, exceptions, public access, deployment version, and parent policies.",
    "output": "Effective-state matrix."
  },
  {
    "step": "4",
    "title": "Compare context and baseline",
    "detail": "Review fictional environment, business need, data sensitivity, change, migration, supplier, project, application, and shared-responsibility records.",
    "output": "Context and baseline assessment."
  },
  {
    "step": "5",
    "title": "Write findings and impact limits",
    "detail": "Document fictional observations, conclusions, alternatives, source gaps, confidence, possible exposure, confirmed access, confirmed impact, and residual risk.",
    "output": "Findings matrix."
  },
  {
    "step": "6",
    "title": "Choose and authorize actions",
    "detail": "Assign fictional restriction, rollback, hardening, key, logging, identity, network, supplier, monitoring, communication, and escalation actions.",
    "output": "Action and ownership plan."
  },
  {
    "step": "7",
    "title": "Validate the cloud outcome",
    "detail": "Confirm fictional effective access, network reachability, encryption, key operation, logging, service function, owner signoff, and residual risk.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Close and improve",
    "detail": "Complete fictional peer review, closure criteria, policy checks, automation, training, supplier controls, metrics, runbooks, and next review.",
    "output": "Closure and improvement package."
  }
];
const findings = [
  {
    "id": "NBR-CLD-F01",
    "statement": "The fictional confidential storage policy has a confirmed unsupported broad-read condition requiring immediate restriction.",
    "support": "Healthy policy evaluator, outside-window change, confidential classification, broad read condition, and no approved exception.",
    "alternative": "A temporary approved sharing need may exist but is not documented.",
    "confidence": "High",
    "impact": "Possible external reachability is supported; unauthorized access and disclosure are unconfirmed.",
    "next": "Restrict to the approved identity group, review access records, validate effective policy, and obtain owner signoff."
  },
  {
    "id": "NBR-CLD-F02",
    "statement": "The fictional staging bucket contains a baseline violation but not production or real-data exposure.",
    "support": "Public listing, staging environment, synthetic data classification, healthy monitor, and baseline prohibition.",
    "alternative": "The staging design may have intentionally supported a public demonstration, but no exception exists.",
    "confidence": "High",
    "impact": "Unsafe pattern and configuration drift are confirmed; production exposure is unconfirmed.",
    "next": "Remove public listing and verify no production copy inherited the setting."
  },
  {
    "id": "NBR-CLD-F03",
    "statement": "The fictional production database has unnecessary internal network reachability.",
    "support": "Broad network range, two approved application dependencies, healthy connection and policy records, and no current exception.",
    "alternative": "An undocumented support service may require temporary access.",
    "confidence": "High",
    "impact": "Excess reachability is confirmed; unauthorized connection is unconfirmed.",
    "next": "Narrow the boundary and validate application and administration paths."
  },
  {
    "id": "NBR-CLD-F04",
    "statement": "The fictional backup vault should remain in service while overdue key-rotation and restore assurance are completed.",
    "support": "Encryption enabled, current owner, critical backup dependency, overdue rotation test, and no encryption-failure evidence.",
    "alternative": "The current key process may still operate correctly despite overdue testing.",
    "confidence": "High",
    "impact": "Assurance weakness is confirmed; data exposure or backup failure is unconfirmed.",
    "next": "Complete approved rotation and restore validation."
  },
  {
    "id": "NBR-CLD-F05",
    "statement": "The fictional cloud audit-source gap is a High-priority monitoring risk but not proof of malicious cloud activity.",
    "support": "Healthy telemetry monitor, current thirty-eight-minute gap, privileged coverage, and available compensating configuration records.",
    "alternative": "A nonsecurity delivery failure may explain the outage.",
    "confidence": "High",
    "impact": "Monitoring visibility is reduced; malicious activity during the gap is unconfirmed.",
    "next": "Restore or fail over, preserve the gap, reconstruct events, and validate current delivery."
  },
  {
    "id": "NBR-CLD-F06",
    "statement": "The fictional inherited platform control is present even though the local application checklist marks it missing.",
    "support": "Effective-policy evaluator, parent policy, current deployment, and incomplete local visibility.",
    "alternative": "The inherited control may not cover every route or resource type.",
    "confidence": "High",
    "impact": "Documentation inconsistency is confirmed; control absence is not.",
    "next": "Document the inheritance, validate coverage, and improve the checklist."
  }
];
const commonMistakes = [
  "Accessing, testing, changing, or scanning real cloud accounts or resources without explicit authorization.",
  "Treating a fictional broad policy as proof that data was accessed or disclosed.",
  "Reviewing only direct resource settings while ignoring inherited policies, roles, groups, exceptions, and parent controls.",
  "Assuming the cloud provider secures every customer identity, policy, network, logging, data, and application setting.",
  "Deleting a resource before understanding service dependency, business impact, retention, and rollback.",
  "Removing a service identity without validating application function.",
  "Treating a source gap as proof of malicious activity.",
  "Treating encryption enabled as proof that key governance and recovery are complete.",
  "Treating staging drift as irrelevant because it contains synthetic data.",
  "Allowing permanent supplier administration when time-limited elevation would meet the need.",
  "Closing a change ticket without validating effective access or reachability.",
  "Reporting possible public exposure as confirmed disclosure.",
  "Ignoring documentation errors when the effective control is actually present.",
  "Using or exposing real credentials, secrets, keys, employee data, school records, company cloud identifiers, private resources, supplier access, logs, incidents, or confidential cloud-security information."
];
const quizQuestions = [
  {
    "question": "What does a fictional broad storage policy prove?",
    "choices": [
      "The effective access condition may be unsafe, but unauthorized access and disclosure still require separate evidence.",
      "A confirmed breach occurred.",
      "Every stored file was downloaded.",
      "The cloud provider caused the issue."
    ],
    "answer": 0,
    "explanation": "Configuration state, successful access, and disclosure are different conclusions."
  },
  {
    "question": "Why must inherited fictional cloud policies be reviewed?",
    "choices": [
      "The effective state may differ from the local resource view because parent controls, roles, conditions, and exceptions also apply.",
      "Inherited policies are always unsafe.",
      "Local settings never matter.",
      "Only providers can view effective access."
    ],
    "answer": 0,
    "explanation": "Cloud decisions should use the actual combined state."
  },
  {
    "question": "How should the fictional production database network rule be handled?",
    "choices": [
      "Narrow it to approved application and administration paths, then validate service function.",
      "Delete the database.",
      "Report confirmed intrusion.",
      "Leave it because no unauthorized connection is shown."
    ],
    "answer": 0,
    "explanation": "Unnecessary reachability should be corrected without overstating impact."
  },
  {
    "question": "What is the safest response to the fictional backup-vault finding?",
    "choices": [
      "Retain the vault, complete the approved key-rotation and restore tests, and document residual risk.",
      "Disable encryption.",
      "Delete all backups.",
      "Ignore the overdue test because encryption is enabled."
    ],
    "answer": 0,
    "explanation": "The service remains valid, but assurance work is overdue."
  },
  {
    "question": "What does the fictional cloud audit-source gap prove?",
    "choices": [
      "Monitoring visibility is reduced, but malicious activity during the gap is not automatically confirmed.",
      "An attacker changed cloud resources.",
      "The provider is compromised.",
      "Every missing event is harmful."
    ],
    "answer": 0,
    "explanation": "A telemetry gap creates risk and uncertainty, not automatic incident evidence."
  },
  {
    "question": "Why should the fictional supplier role be reduced?",
    "choices": [
      "Permanent template administration exceeds the documented troubleshooting need, while time-limited elevation can preserve support capability.",
      "All supplier access is malicious.",
      "The supplier changed a template.",
      "Suppliers should never access cloud services."
    ],
    "answer": 0,
    "explanation": "The decision applies least privilege without removing valid support."
  },
  {
    "question": "When is a fictional cloud-misconfiguration review complete?",
    "choices": [
      "After effective access, reachability, encryption, logging, service function, owner signoff, residual risk, and follow-up are validated.",
      "When the ticket is marked complete.",
      "When the alert disappears.",
      "When one configuration screen looks correct."
    ],
    "answer": 0,
    "explanation": "Completion requires validation of the actual cloud outcome."
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

export default function FakeCloudMisconfigurationReviewLabPage() {
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
              Module I16
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.5 Fake Cloud Misconfiguration Review Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional cloud identities, storage policies, network
            exposure, encryption, logging, suppliers, inherited controls,
            changes, business context, and effective configuration without
            accessing or testing real cloud environments.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I16: Intermediate Defensive Labs"
          lessonTitle="Fake Cloud Misconfiguration Review Lab"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge cloud resources, identities, policies, networks, encryption records, logs, suppliers, owners, changes, and decisions.",
            "I will not access, test, change, scan, or interact with real cloud accounts, resources, identities, storage, networks, keys, secrets, or private data.",
            "I will not request or expose real credentials, secrets, keys, employee data, school records, company cloud identifiers, supplier access, logs, incidents, or confidential cloud-security information.",
            "I will distinguish configuration weakness, possible exposure, confirmed access, confirmed disclosure, service impact, source gaps, confidence, and residual risk.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Public-Looking Policy Is Not Automatic Proof of Data Disclosure"
        >
          <p className="leading-8">
            A fictional confidential storage policy now contains a broad read
            condition. The policy state is a serious control problem and should
            be corrected immediately. However, no unauthorized access or
            disclosure is confirmed. Professional cloud review separates
            effective configuration, reachability, successful access, data
            handling, impact, ownership, and validation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak cloud review
              </p>

              <p className="mt-2 leading-7">
                Read only the local setting, assume disclosure, ignore
                inherited policies, delete resources broadly, blame the
                provider, and close when a ticket says complete.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional cloud review
              </p>

              <p className="mt-2 leading-7">
                Define scope, calculate effective state, compare the baseline,
                preserve impact limits, assign owners, act proportionately,
                validate outcomes, and improve controls.
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
          title="Cloud Misconfigurations Can Create Risk before Any Incident Occurs"
        >
          <p className="leading-8">
            Fictional cloud risks may involve public settings, broad internal
            networks, stale identities, supplier privilege, orphaned secret
            access, weak logging, overdue key testing, temporary rules, or
            documentation errors. Strong review corrects unsafe capability while
            preserving service function and avoiding unsupported incident claims.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Resource–Identity–Exposure–Control–Validation Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Resource", "Which fictional account, project, storage, database, application, network, key, log source, supplier service, or secret store is involved?"],
              ["Identity", "Which fictional user, role, group, service, application, supplier, or emergency identity has capability?"],
              ["Exposure", "Which fictional public condition, network path, policy, successful access, data read, data change, disclosure, or service effect is supported?"],
              ["Control", "Which fictional access, network, encryption, key, logging, baseline, supplier, change, and inherited controls apply?"],
              ["Validation", "Which fictional effective state, reachability, source health, service function, owner signoff, residual risk, and follow-up prove the outcome?"],
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
            Cloud Misconfiguration and Effective-State Terms
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
            Cloud Evidence Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Northbridge Cloud Records
          </h2>

          <div className="mt-6 grid gap-5">
            {cloudRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.resource}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.health}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Finding", item.finding],
                    ["Source", item.source],
                    ["Business context", item.context],
                    ["Owner", item.owner],
                    ["Risk", item.risk],
                    ["Decision", item.decision],
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
            Review Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Final Cloud Disposition
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong review
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak review
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Control Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Cloud Defense Controls
          </h2>

          <div className="mt-6 grid gap-5">
            {controlMatrix.map((item) => (
              <article
                key={item.control}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.control}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Evidence", item.evidence],
                    ["Failure example", item.failure],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.control}-${label}`}
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
            Cloud Review Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Scope to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
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
          title="Fake Northbridge Cloud Review Dashboard"
          subtitle="Training dashboard for fictional cloud evidence only."
          metrics={[
            {
              label: "Cloud records reviewed",
              value: "10",
              note: "Storage, network, identity, encryption, logging, supplier, secret, migration, and inherited-policy conditions are represented.",
            },
            {
              label: "Control changes required",
              value: "8",
              note: "Restriction, reduction, rollback, source restoration, key testing, documentation, and validation actions remain open.",
            },
            {
              label: "Confirmed data disclosure",
              value: "0",
              note: "The fictional evidence supports possible exposure and control weakness but no confirmed disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Confidential Storage Policy Contains Unsupported Broad Read Access"
          severity="High"
          time="10:06 PM"
          source="Fake Northbridge Cloud Defense Console"
          details="A fictional confidential storage resource changed outside the approved window and now contains a broad read condition. No unauthorized access or disclosure is confirmed in the supplied evidence."
          recommendation="Restrict the policy to the approved identity group, review access evidence, validate inherited and direct permissions, assign the storage and data owners, preserve impact limits, and confirm the final effective state."
        />

        <FakeLogPanel
          title="Fake Northbridge Cloud Review Timeline"
          logs={[
            "18:00 STORAGE confidential-policy='broad-read'",
            "18:08 STORAGE staging-listing='public'",
            "18:16 NETWORK database-range='broader-than-baseline'",
            "18:24 ENCRYPTION vault='enabled'",
            "18:32 KEY rotation-test='overdue'",
            "18:40 IDENTITY app-write='stale'",
            "18:48 SOURCE cloud-audit='delivery-stopped'",
            "18:56 SUPPLIER role='excess-template-admin'",
            "19:04 SECRET retired-app='reader'",
            "19:12 FIREWALL migration-rule='still-active'",
            "19:20 POLICY inherited-control='present'",
            "19:28 ACTION storage-restrict='approved'",
            "19:36 ACTION network-narrow='planned'",
            "19:44 ACTION source-failover='opened'",
            "19:52 VALIDATION effective-state='pending'",
            "20:00 REPORT disclosure='unconfirmed'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Cloud Findings with Confidence and Limits
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

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact statement", item.impact],
                    ["Next action", item.next],
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
          title="Did the Broad Storage Policy Confirm Data Disclosure?"
          evidence={[
            "The fictional resource contains confidential project files.",
            "The policy changed outside the approved window.",
            "The effective policy includes a broad read condition.",
            "No approved exception is recorded.",
            "No supplied record confirms unauthorized access.",
            "No supplied record confirms data disclosure.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "An unsupported broad-read condition and possible exposure are confirmed, while unauthorized access and disclosure remain unconfirmed.",
            "The policy proves every file was disclosed.",
            "No action is required because no access record is shown.",
            "The cloud provider must be responsible.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion preserves both the serious control weakness and the limits of the impact evidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional Cloud Reviews"
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
          title="Build the Northbridge Fake Cloud Misconfiguration Review Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Effective State, Exposure, Ownership, Actions, and Validation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge cloud records to
                create a complete, evidence-limited misconfiguration review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Cloud review charter with account, project, environment, resource, identity, data, owners, privacy, authority, and deadlines.</li>
                <li>Resource and evidence register covering policies, roles, networks, encryption, keys, logging, suppliers, changes, dependencies, and source health.</li>
                <li>Effective-state matrix for direct settings, inherited controls, conditions, groups, public access, exceptions, and deployment versions.</li>
                <li>Exposure and impact matrix separating policy state, reachability, successful access, data read, data change, disclosure, and service effect.</li>
                <li>Findings with evidence, alternatives, confidence, limitations, owners, actions, rollback, and residual risk.</li>
                <li>Storage, network, identity, supplier, key, logging, and configuration action plan.</li>
                <li>Validation, closure criteria, metrics, automation, training, policy, supplier, and runbook improvements.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not access, test, change, scan, or interact with real cloud
            accounts, resources, identities, storage, networks, keys, secrets,
            or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants to Delete the Confidential Storage Resource"
          scenario="The fictional policy is unsafe, but the resource supports an active service and no unauthorized access or disclosure is confirmed."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict the policy to approved identities, preserve the service, review access records, validate effective state, and escalate only if impact evidence changes.",
              outcome:
                "Best cloud-defense choice. The control is corrected without unnecessary service loss.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the resource immediately.",
              outcome:
                "Overbroad. The supplied evidence supports targeted restriction and validation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the policy unchanged because disclosure is unconfirmed.",
              outcome:
                "Unsafe. The misconfiguration creates unnecessary capability.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Backup Vault's Key Test Is Overdue"
          scenario="The fictional vault is encrypted and supports a critical backup function, but rotation and restore assurance are incomplete."
          choices={[
            {
              label: "Choice A",
              response:
                "Retain the vault, complete the approved rotation and restore tests, verify ownership and monitoring, and document residual risk.",
              outcome:
                "Best assurance choice. Critical service continues while governance is validated.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the backups because the test is overdue.",
              outcome:
                "Unsafe. The response would harm recovery capability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the issue because encryption is enabled.",
              outcome:
                "Weak. Encryption state alone does not prove rotation and recovery readiness.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Fake Cloud Misconfiguration Review Checklist"
          items={[
            "I can define a fictional cloud-review scope covering accounts, projects, environments, resources, identities, data, networks, suppliers, owners, privacy, authority, and deadlines.",
            "I can evaluate fictional direct settings, inherited policies, roles, groups, conditions, exceptions, public access, deployment versions, and parent controls.",
            "I can distinguish fictional configuration weakness, reachability, successful access, data read, data change, disclosure, service impact, source gaps, and residual risk.",
            "I can review fictional identity, storage, network, encryption, key, logging, baseline, supplier, and change controls.",
            "I can apply fictional shared-responsibility concepts to provider, platform, customer, application, supplier, identity, data, and service owners.",
            "I can choose fictional restrict, roll back, harden, rotate, restore logging, reduce access, monitor, coordinate, escalate, or close decisions proportionately.",
            "I can assign fictional resource, data, identity, network, platform, supplier, telemetry, risk, communication, and business owners correctly.",
            "I can validate fictional effective access, reachability, encryption, key operation, source health, service function, owner signoff, and residual risk.",
            "I can improve fictional automation, policy checks, supplier elevation, stale-access cleanup, logging, key testing, training, metrics, and governance.",
            "I will use only fictional evidence and never expose real credentials, secrets, keys, cloud identifiers, employee data, school records, suppliers, incidents, or confidential information.",
          ]}
        />

        <MiniQuiz
          title="I16.5 Mini Quiz: Fake Cloud Misconfiguration Review Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Fake Cloud Misconfiguration Review Package for Northbridge. Include the review charter, resource inventory, evidence register, effective-state matrix, exposure and impact matrix, shared-responsibility map, control matrix, findings, owner and escalation map, restriction and rollback plan, identity and supplier actions, logging restoration, encryption and key assurance, validation, closure criteria, residual risk, metrics, improvements, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional cloud accounts, resources, identities, policies, networks, keys, logs, suppliers, owners, changes, decisions, dates, and outcomes.",
            "Do not access, test, change, scan, or interact with any real cloud environment.",
            "Do not treat policy state, public settings, broad networks, source gaps, encryption, or ticket completion as automatic proof.",
            "Show how serious possible exposure can require immediate correction while disclosure remains unconfirmed.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud review should use effective state, not only the local resource view.",
            "Configuration weakness, reachability, successful access, and disclosure are different evidence levels.",
            "Shared responsibility requires clear provider, platform, customer, application, supplier, identity, data, and service ownership.",
            "Encryption enabled does not replace key-rotation and recovery assurance.",
            "Source gaps reduce visibility but do not prove malicious activity.",
            "Corrective actions should reduce risk while preserving valid service dependencies.",
            "Portfolio artifacts should use fully fictional evidence and never expose real cloud resources or secrets.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I16
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