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
const modulePath = `${trackPath}/cloud-security-basics`;
const previousLesson = `${modulePath}/shared-responsibility-and-cloud-security-foundations`;
const nextLesson = `${modulePath}/secure-cloud-storage-and-data-protection`;

const objectives = [
  "Explain the difference between fictional human users, groups, service identities, application identities, federated identities, roles, policies, sessions, and temporary access.",
  "Evaluate fictional effective permissions by comparing assigned roles, inherited access, resource policies, service controls, session conditions, and business need.",
  "Apply least privilege, separation of duties, just-in-time access, approval, review, lifecycle, and break-glass concepts without accessing any real cloud account.",
  "Separate direct observations from supported findings, alternatives, confidence, limitations, impact boundaries, and missing evidence.",
  "Create a portfolio-safe fictional cloud identity-and-access review with identity maps, role analysis, findings, remediation, validation, monitoring, and owner decisions."
];
const vocabulary = [
  [
    "Human identity",
    "A fictional user account representing a person who signs in through an approved authentication and authorization process."
  ],
  [
    "Service identity",
    "A fictional nonhuman identity used by an application, automation, workload, function, or managed service."
  ],
  [
    "Federated identity",
    "A fictional identity authenticated by one trusted system and accepted by another through an approved trust relationship."
  ],
  [
    "Role",
    "A fictional collection of permissions assigned to users, groups, service identities, or sessions."
  ],
  [
    "Policy",
    "A fictional rule document or control describing which actions are allowed or denied on which resources under which conditions."
  ],
  [
    "Effective permission",
    "The fictional access that results after assigned roles, inheritance, resource policies, service controls, explicit denies, and session conditions are combined."
  ],
  [
    "Least privilege",
    "Granting only the fictional permissions needed for the approved task, for the shortest practical time, on the smallest practical scope."
  ],
  [
    "Separation of duties",
    "Dividing fictional approval, execution, review, and evidence responsibilities so one identity cannot complete every sensitive step alone."
  ],
  [
    "Privileged identity",
    "A fictional identity with powerful administrative, security, billing, identity, network, data, or recovery permissions."
  ],
  [
    "Temporary access",
    "Fictional access granted for a limited task and time with approval, expiration, monitoring, and review."
  ],
  [
    "Just-in-time access",
    "Fictional privileged access activated only when needed through an approved request and removed automatically after expiration."
  ],
  [
    "Standing privilege",
    "Fictional powerful access that remains continuously available rather than being activated only for a specific need."
  ],
  [
    "Break-glass identity",
    "A fictional emergency identity protected, monitored, rarely used, independently reviewed, and tested under strict procedures."
  ],
  [
    "Identity lifecycle",
    "The fictional process for creating, changing, reviewing, suspending, and removing identities and access as roles or business needs change."
  ],
  [
    "Access review",
    "A fictional periodic or event-driven review confirming whether identities, roles, permissions, and exceptions remain necessary and correctly owned."
  ],
  [
    "Privilege path",
    "A fictional sequence of memberships, roles, trust relationships, sessions, or delegated permissions that results in sensitive access."
  ]
];
const identityTypes = [
  {
    "type": "Human user",
    "purpose": "Supports fictional interactive work by an approved person.",
    "strong_controls": "Federated sign-in, strong authentication, lifecycle ownership, role-based access, session monitoring, and periodic review.",
    "common_gap": "Access remains after job change, group inheritance expands scope, or one person holds approval and execution duties.",
    "evidence": "Directory record, group membership, role assignment, sign-in audit, access review, manager approval, and lifecycle event."
  },
  {
    "type": "Service identity",
    "purpose": "Supports fictional application, function, job, automation, integration, or managed-service activity.",
    "strong_controls": "Single workload purpose, minimal role, protected credential or managed identity, rotation concept, monitoring, and owner review.",
    "common_gap": "Shared use, unknown owner, broad storage or database access, no expiration, stale credential, or missing workload mapping.",
    "evidence": "Workload configuration, identity assignment, role policy, invocation record, secret reference, deployment, and owner record."
  },
  {
    "type": "Federated identity",
    "purpose": "Allows a fictional external identity provider to authenticate users or workloads into the cloud tenant.",
    "strong_controls": "Approved trust, audience and issuer validation, role mapping, lifecycle synchronization, conditional access, and trust monitoring.",
    "common_gap": "Overbroad role mapping, stale partner access, unreviewed claim rules, or unclear offboarding ownership.",
    "evidence": "Federation configuration, claim mapping, partner agreement, sign-in audit, role session, lifecycle sync, and trust review."
  },
  {
    "type": "Privileged administrator",
    "purpose": "Performs fictional high-impact identity, security, network, data, billing, or recovery administration.",
    "strong_controls": "Separate admin identity, approval, just-in-time activation, strong authentication, session logging, peer review, and emergency process.",
    "common_gap": "Standing privilege, daily-use admin account, broad scope, shared credential, no approval, or incomplete monitoring.",
    "evidence": "Privileged role, activation request, approval, session record, administrative event, reviewer signoff, and expiration."
  },
  {
    "type": "Break-glass identity",
    "purpose": "Provides fictional emergency access when normal identity systems or approval paths are unavailable.",
    "strong_controls": "Very limited quantity, isolated protection, strong monitoring, tested access, documented owner, and independent post-use review.",
    "common_gap": "Never tested, unmonitored, used for convenience, weakly protected, or missing ownership.",
    "evidence": "Emergency procedure, custody record, test event, alert configuration, post-use review, and owner approval."
  },
  {
    "type": "External partner identity",
    "purpose": "Supports fictional vendor, contractor, school, customer, or partner access to approved resources.",
    "strong_controls": "Sponsor, expiration, limited role, contractual purpose, need-to-know scope, monitoring, and periodic recertification.",
    "common_gap": "No sponsor, long expiration, broad group membership, missing offboarding, or access beyond the partner task.",
    "evidence": "Sponsor approval, agreement, identity record, role assignment, sign-in audit, expiration, and access review."
  }
];
const permissionLayers = [
  {
    "layer": "Direct role assignment",
    "question": "Which fictional role is assigned directly to the identity at the tenant, account, project, or resource level?",
    "risk": "A broad role may apply farther than the owner realizes.",
    "evidence": "Role assignment record, scope, conditions, owner, approval, and expiration."
  },
  {
    "layer": "Group or team inheritance",
    "question": "Which fictional access is inherited through groups, teams, nested membership, or organizational units?",
    "risk": "Nested membership may create hidden privilege paths.",
    "evidence": "Group graph, membership source, lifecycle owner, role mapping, and review record."
  },
  {
    "layer": "Resource policy",
    "question": "Does the fictional storage, database, key, queue, function, or service define additional access?",
    "risk": "Resource policies may grant access even when the identity role appears narrow.",
    "evidence": "Resource policy, principal, action, resource, condition, source, and owner."
  },
  {
    "layer": "Service control or guardrail",
    "question": "Do fictional tenant, organization, project, or provider controls limit otherwise allowed actions?",
    "risk": "A role policy alone may overstate effective access when a higher-level deny exists.",
    "evidence": "Guardrail policy, inheritance, explicit deny, exception, test result, and control owner."
  },
  {
    "layer": "Session condition",
    "question": "Do fictional source, device, network, authentication, time, tag, approval, or session-duration conditions restrict access?",
    "risk": "Static role review may miss temporary or contextual restrictions.",
    "evidence": "Session record, condition evaluation, device context, network path, approval, and expiration."
  },
  {
    "layer": "Delegation or role chaining",
    "question": "Can the fictional identity assume another role or delegate access to a service or partner?",
    "risk": "A narrow starting role may lead to a powerful downstream role.",
    "evidence": "Trust policy, assume-role event, chain, session name, target role, conditions, and owner."
  },
  {
    "layer": "Explicit deny",
    "question": "Which fictional deny rules override an apparent allow?",
    "risk": "Ignoring explicit denies can exaggerate practical access.",
    "evidence": "Deny statement, scope, condition, inherited source, evaluation result, and exception."
  },
  {
    "layer": "Application authorization",
    "question": "Does the fictional application add its own permissions after cloud authentication succeeds?",
    "risk": "Cloud role and application role may combine to create or reduce access.",
    "evidence": "Application role, tenant mapping, business rule, session, object access, and audit record."
  }
];
const leastPrivilegeFields = [
  {
    "field": "Business task",
    "purpose": "Defines the exact fictional job the identity must complete.",
    "example": "Read approved course content and write generated export packages.",
    "quality": "Specific enough to compare with each permission."
  },
  {
    "field": "Required actions",
    "purpose": "Lists the fictional operations needed for the task.",
    "example": "List approved content, read selected objects, and write to the export collection.",
    "quality": "Avoids broad manage or administrator actions when narrower actions work."
  },
  {
    "field": "Required resources",
    "purpose": "Limits fictional access to the smallest practical resource scope.",
    "example": "One approved content collection and one export collection.",
    "quality": "Excludes unrelated collections, accounts, projects, and regions."
  },
  {
    "field": "Conditions",
    "purpose": "Restricts fictional access by source, service, network, tag, device, approval, time, or session.",
    "example": "Only from the export function's approved workload identity and private service path.",
    "quality": "Conditions are testable and do not silently break the workflow."
  },
  {
    "field": "Duration",
    "purpose": "Defines how long fictional access remains active.",
    "example": "Continuous minimal service role or two-hour approved administrator session.",
    "quality": "Temporary access expires automatically when possible."
  },
  {
    "field": "Owner and approver",
    "purpose": "Identifies who owns the fictional identity, role, resource, and final decision.",
    "example": "Operations owns the function; Identity Governance approves the role; Content Owner approves collection access.",
    "quality": "Approval and execution duties are separated for sensitive access."
  },
  {
    "field": "Monitoring and review",
    "purpose": "Defines fictional logs, alerts, reviews, and evidence used to confirm appropriate use.",
    "example": "Invocation audit, storage access events, role-change alert, and quarterly recertification.",
    "quality": "Coverage, retention, ownership, and source health are verified."
  },
  {
    "field": "Removal and validation",
    "purpose": "Explains how fictional excess access is removed and the approved workflow is tested.",
    "example": "Remove archive-secondary read access, run staged export validation, monitor errors, and preserve rollback.",
    "quality": "The change is reversible, reviewed, and supported by completion evidence."
  }
];
const accessReviewRecords = [
  {
    "id": "NLC-IAM-01",
    "identity": "export-automation-role",
    "type": "Service identity role",
    "owner": "Learning Operations Team",
    "assigned": "Read approved-content and archive-secondary; write export-packages",
    "needed": "Read approved-content; write export-packages",
    "finding": "Read access to archive-secondary exceeds the documented workflow.",
    "confidence": "High",
    "limit": "No supplied evidence supports misuse."
  },
  {
    "id": "NLC-IAM-02",
    "identity": "content-admin-group",
    "type": "Human administrator group",
    "owner": "Content Platform Owner",
    "assigned": "Manage course content, storage policy, and retention settings",
    "needed": "Content editors need object management; policy and retention changes require separate approval",
    "finding": "One group combines daily content work with sensitive policy administration.",
    "confidence": "High",
    "limit": "Effective access must include application and resource-policy correlation."
  },
  {
    "id": "NLC-IAM-03",
    "identity": "migration-partner-role",
    "type": "Federated partner role",
    "owner": "Migration Program Sponsor",
    "assigned": "Read source collections and write staging packages",
    "needed": "Migration completed forty-five fictional days ago",
    "finding": "The partner role and trust remain active without a current business need.",
    "confidence": "High",
    "limit": "No post-migration sign-in or data access is supported by the supplied records."
  },
  {
    "id": "NLC-IAM-04",
    "identity": "cloud-security-admin",
    "type": "Privileged administrator",
    "owner": "Cloud Security Operations",
    "assigned": "Standing tenant-wide security administration",
    "needed": "Periodic policy review and incident response",
    "finding": "Standing privilege can be reduced to approved just-in-time activation.",
    "confidence": "Medium-High",
    "limit": "Emergency response timing requirements require owner validation."
  },
  {
    "id": "NLC-IAM-05",
    "identity": "backup-restore-service",
    "type": "Service identity",
    "owner": "Continuity and Recovery Team",
    "assigned": "Read backups and restore to approved recovery targets",
    "needed": "Continuous backup verification and approved restore tests",
    "finding": "The assigned role matches the documented task and resource scope.",
    "confidence": "High",
    "limit": "Key access and network conditions require separate confirmation."
  },
  {
    "id": "NLC-IAM-06",
    "identity": "learning-support-user",
    "type": "Human support user",
    "owner": "Learning Support Manager",
    "assigned": "View support cases and limited application status",
    "needed": "Troubleshoot user-reported access and course-progress issues",
    "finding": "The role appears aligned with current duties and excludes direct database access.",
    "confidence": "High",
    "limit": "Application-level permissions must remain included in future reviews."
  },
  {
    "id": "NLC-IAM-07",
    "identity": "emergency-admin-01",
    "type": "Break-glass identity",
    "owner": "Identity Governance Lead",
    "assigned": "Emergency tenant administration",
    "needed": "Use only when normal federation and privileged activation are unavailable",
    "finding": "Ownership and alerting exist, but the last access test is overdue.",
    "confidence": "High",
    "limit": "Protection strength cannot be inferred beyond supplied custody and monitoring records."
  },
  {
    "id": "NLC-IAM-08",
    "identity": "analytics-reader-group",
    "type": "Human analyst group",
    "owner": "Learning Data Owner",
    "assigned": "Read aggregated progress dataset",
    "needed": "Read de-identified reporting views",
    "finding": "Group membership includes one user whose fictional role changed to content operations.",
    "confidence": "High",
    "limit": "No evidence supports access after the role change."
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional access question",
    "detail": "Restate the approved identities, resources, business tasks, owners, time window, evidence sources, privacy limits, and prohibited real-account actions.",
    "output": "Identity-review objective and scope."
  },
  {
    "step": "2",
    "title": "Build the identity inventory",
    "detail": "Record fictional human, service, federated, partner, privileged, and emergency identities with owners, sponsors, lifecycle state, and business purpose.",
    "output": "Cloud identity register."
  },
  {
    "step": "3",
    "title": "Map assigned and effective access",
    "detail": "Compare fictional direct roles, group inheritance, resource policies, guardrails, explicit denies, session conditions, delegation, and application authorization.",
    "output": "Effective-permission and privilege-path map."
  },
  {
    "step": "4",
    "title": "Compare with least privilege",
    "detail": "Match fictional actions, resources, conditions, duration, owners, approvals, monitoring, and removal rules to the documented business task.",
    "output": "Least-privilege gap register."
  },
  {
    "step": "5",
    "title": "Test alternatives and impact",
    "detail": "Consider fictional migration, emergency, backup, integration, support, ownership, and compensating-control explanations without assuming misuse.",
    "output": "Alternative explanations and bounded findings."
  },
  {
    "step": "6",
    "title": "Design safe remediation",
    "detail": "Assign fictional owners, approvals, staged changes, expiration, validation, rollback, monitoring, communication, and completion evidence.",
    "output": "Identity-remediation action plan."
  },
  {
    "step": "7",
    "title": "Review lifecycle and recurrence",
    "detail": "Confirm fictional joiner, mover, leaver, partner expiration, service-owner review, privileged activation, emergency testing, and periodic recertification.",
    "output": "Identity-governance and review schedule."
  },
  {
    "step": "8",
    "title": "Report and close",
    "detail": "Document fictional observations, findings, alternatives, confidence, limitations, residual risk, reviewer approval, and portfolio-safe communication.",
    "output": "Reviewed cloud IAM package."
  }
];
const findings = [
  {
    "id": "NLC-IAM-F01",
    "statement": "The fictional export automation role has read access to one storage collection beyond its documented business requirement.",
    "support": "Role assignment, effective-access record, business workflow, storage scope, application configuration, and migration history.",
    "alternative": "A continuing migration dependency is possible but not supported by current owner records.",
    "confidence": "High",
    "limitation": "No evidence supports misuse, data access, or external disclosure."
  },
  {
    "id": "NLC-IAM-F02",
    "statement": "The content-admin group combines routine content work with sensitive storage-policy and retention administration.",
    "support": "Group membership, role mapping, application duties, storage policy permissions, and change history.",
    "alternative": "A small-team staffing model may explain the design but does not remove separation-of-duties risk.",
    "confidence": "High",
    "limitation": "Actual use of the sensitive actions is not established by assignment alone."
  },
  {
    "id": "NLC-IAM-F03",
    "statement": "The migration partner role and federation trust are stale because the project ended and no current sponsor approval is supplied.",
    "support": "Project closure, role assignment, federation configuration, sponsor record, expiration field, and access review.",
    "alternative": "A delayed post-migration validation task is possible but undocumented.",
    "confidence": "High",
    "limitation": "No post-project sign-in or resource access is supported by the supplied logs."
  },
  {
    "id": "NLC-IAM-F04",
    "statement": "The cloud-security administrator can reduce standing privilege through approved just-in-time activation.",
    "support": "Privilege scope, task frequency, activation capability, incident workflow, session logging, and owner review.",
    "alternative": "Continuous access may be required for specific emergency duties, but that need requires documented validation.",
    "confidence": "Medium-High",
    "limitation": "Availability and response-time requirements must be tested before implementation."
  },
  {
    "id": "NLC-IAM-F05",
    "statement": "The emergency administrator has ownership and monitoring but requires an overdue controlled access test.",
    "support": "Emergency procedure, identity owner, alert configuration, custody record, and test schedule.",
    "alternative": "A recent undocumented test is possible but no evidence is supplied.",
    "confidence": "High",
    "limitation": "The lesson does not test or use any real emergency identity."
  },
  {
    "id": "NLC-IAM-F06",
    "statement": "The analytics-reader group contains one stale member after a fictional job change.",
    "support": "HR role-change record, group membership, data-owner requirement, lifecycle synchronization, and access review.",
    "alternative": "Temporary dual-role access is possible but no approved exception is supplied.",
    "confidence": "High",
    "limitation": "No post-change data access is supported by the supplied evidence."
  }
];
const commonMistakes = [
  "Reviewing only direct fictional role assignments and ignoring groups, resource policies, guardrails, delegation, explicit denies, session conditions, and application permissions.",
  "Treating a broad role as proof that the identity used every permission.",
  "Treating a service identity as proof of a specific human actor or intent.",
  "Assuming all managed identities, temporary credentials, or federated sessions are automatically least privilege.",
  "Leaving temporary migration, partner, incident, or project access active after the business need ends.",
  "Using one shared fictional service identity for several unrelated workloads without clear ownership or evidence.",
  "Assigning daily-use and privileged administration to the same human account when separation is practical.",
  "Keeping standing privilege because just-in-time access requires additional design or testing.",
  "Creating a break-glass identity without independent ownership, protection, monitoring, testing, and post-use review.",
  "Removing access without validating service dependencies, rollback, monitoring, and owner approval.",
  "Failing to document who owns the identity, role, resource, approval, review, and final risk decision.",
  "Treating absence of sign-in records as proof of no activity without verifying source health, retention, and event coverage.",
  "Ignoring role changes, departures, sponsor loss, application retirement, and service-owner changes.",
  "Using or exposing any real cloud account, identity, role, policy, session, credential, tenant, storage, database, log, owner, or private record."
];
const quizQuestions = [
  {
    "question": "What is a fictional effective permission?",
    "choices": [
      "The access that remains after roles, groups, resource policies, guardrails, denies, conditions, delegation, and application rules are combined.",
      "Only the directly assigned role.",
      "Only the permissions shown on one dashboard.",
      "Every permission that appears in documentation."
    ],
    "answer": 0,
    "explanation": "Effective access may differ from the visible direct role because several policy layers interact."
  },
  {
    "question": "Which statement about a broad fictional service role is strongest?",
    "choices": [
      "The role exceeds the documented business need and should be reviewed; misuse is not proven by assignment alone.",
      "The role proves data theft.",
      "The provider is automatically responsible.",
      "Every permission was used."
    ],
    "answer": 0,
    "explanation": "Role breadth supports a least-privilege finding, not an automatic misuse finding."
  },
  {
    "question": "What is separation of duties?",
    "choices": [
      "Dividing approval, execution, review, and evidence responsibilities so one identity cannot complete every sensitive step alone.",
      "Giving every administrator the same role.",
      "Using one service identity for all workloads.",
      "Removing all approval requirements."
    ],
    "answer": 0,
    "explanation": "Separation of duties reduces single-person control over sensitive actions."
  },
  {
    "question": "What is the purpose of just-in-time fictional access?",
    "choices": [
      "Activate privileged access only for an approved need and remove it automatically after the session expires.",
      "Keep privilege permanently available.",
      "Avoid monitoring administrator sessions.",
      "Replace identity ownership."
    ],
    "answer": 0,
    "explanation": "Just-in-time access reduces standing privilege while preserving approved work."
  },
  {
    "question": "What should happen to a fictional partner role after the project ends?",
    "choices": [
      "Review the business need, sponsor, expiration, sign-in evidence, resources, and remove or renew it through an approved decision.",
      "Leave it active indefinitely.",
      "Delete all records of the role.",
      "Assume the partner still needs access."
    ],
    "answer": 0,
    "explanation": "External access requires current sponsorship, purpose, scope, and expiration."
  },
  {
    "question": "Which control is most important for a fictional break-glass identity?",
    "choices": [
      "Strict protection, rare use, independent monitoring, controlled testing, ownership, and post-use review.",
      "Daily use for convenience.",
      "Shared access by every administrator.",
      "No alerting so attackers cannot detect it."
    ],
    "answer": 0,
    "explanation": "Emergency identities require stronger, not weaker, governance."
  },
  {
    "question": "What makes a fictional cloud IAM finding defensible?",
    "choices": [
      "It connects business need, effective access, owners, evidence, alternatives, confidence, limitations, remediation, validation, and monitoring.",
      "It relies on the role name alone.",
      "It assumes every permission was used.",
      "It hides access-review gaps."
    ],
    "answer": 0,
    "explanation": "Defensible IAM analysis connects actual business need to effective permission and bounded evidence."
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

export default function CloudIdentitiesLeastPrivilegePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I13
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.2 Cloud Identities, Roles, and Least Privilege
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders review fictional cloud users, service
            identities, groups, roles, policies, federation, sessions,
            privilege paths, temporary access, emergency accounts, lifecycle,
            access reviews, and least-privilege evidence without touching any
            real cloud tenant.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I13: Cloud Security Basics"
          lessonTitle="Cloud Identities, Roles, and Least Privilege"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud identity records.",
            "I will not sign in to, query, change, test, assume, activate, disable, export, or inspect any real cloud identity, tenant, account, role, policy, session, credential, storage service, database, network, or private record.",
            "I will compare fictional business need with effective access rather than relying only on role names.",
            "I will distinguish over-permission, stale access, lifecycle gaps, and governance risk from proof of misuse or intent.",
            "I will preserve owners, approvals, alternatives, confidence, limitations, validation, rollback, monitoring, and portfolio safety.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Role Name Does Not Reveal the Full Privilege Path"
        >
          <p className="leading-8">
            The fictional Northbridge export automation role appears simple,
            but its effective access comes from a direct role, storage resource
            policy, workload identity, project guardrail, private-service
            condition, and application configuration. A completed migration
            left one extra storage collection in scope. The assignment supports
            a least-privilege gap, but it does not prove the service used that
            access or that any data was disclosed.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak analysis
              </p>

              <p className="mt-2 leading-7">
                Read the role name, count every listed permission as used, blame
                the identity owner, and remove access without checking
                dependencies or rollback.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional analysis
              </p>

              <p className="mt-2 leading-7">
                Map effective access, business need, ownership, lifecycle,
                session conditions, application dependencies, alternatives,
                evidence limits, and a staged validation plan.
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
          title="Cloud Access Can Expand through Layers That No Single Team Sees"
        >
          <p className="leading-8">
            Fictional cloud access may come from direct role assignment, nested
            group membership, resource policy, service controls, federation,
            delegated role assumptions, explicit denies, session conditions,
            and application authorization. A narrow role can become powerful
            through chaining. A broad role may be reduced by guardrails. A
            periodic access review must therefore evaluate effective access,
            business need, ownership, lifecycle, monitoring, and practical
            dependencies together.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Identityâ€“Taskâ€“Accessâ€“Lifecycle Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Identity", "Which fictional person, workload, service, partner, administrator, or emergency account is involved, and who owns it?"],
              ["Task", "Which fictional business action must the identity perform, on which resource, under which conditions, and for how long?"],
              ["Access", "Which fictional roles, groups, resource policies, guardrails, denies, sessions, and application rules create effective permission?"],
              ["Lifecycle", "How is the fictional identity created, approved, reviewed, changed, suspended, expired, monitored, and removed?"],
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
            Cloud Identity and Privilege Terms
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
            Identity Types
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Identity Patterns and Their Risks
          </h2>

          <div className="mt-6 grid gap-5">
            {identityTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong controls
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_controls}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common gap
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.common_gap}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Review evidence
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
            Effective Access
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Permission Layers to Review
          </h2>

          <div className="mt-6 grid gap-5">
            {permissionLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.layer}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Analysis risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence needed
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
            Least-Privilege Worksheet
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Reviewable Access Decision
          </h2>

          <div className="mt-6 grid gap-5">
            {leastPrivilegeFields.map((item) => (
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
            Access Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Identity Review Records
          </h2>

          <div className="mt-6 grid gap-5">
            {accessReviewRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.identity}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.type}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Owner", item.owner],
                    ["Assigned access", item.assigned],
                    ["Business need", item.needed],
                    ["Finding", item.finding],
                    ["Limitation", item.limit],
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
            Complete a Fictional Cloud Identity Review
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
          title="Fake Northbridge Cloud Identity Dashboard"
          subtitle="Training dashboard for fictional IAM evidence only."
          metrics={[
            {
              label: "Identities reviewed",
              value: "8",
              note: "Human, service, partner, privileged, emergency, support, analytics, and recovery identities are mapped.",
            },
            {
              label: "Least-privilege gaps",
              value: "5",
              note: "Broad role, combined duties, stale partner trust, standing privilege, and stale group membership require action.",
            },
            {
              label: "Supported misuse events",
              value: "0",
              note: "The supplied fictional evidence supports governance gaps but no confirmed misuse.",
            },
          ]}
        />

        <FakeAlertCard
          title="Completed Migration Left a Broad Service Role Active"
          severity="High"
          time="10:32 AM"
          source="Fake Cloud IAM Review Console"
          details="The fictional export automation role can read archive-secondary even though the current business workflow requires only approved-content and export-packages."
          recommendation="Confirm effective access across direct roles, resource policies, guardrails, conditions, and application configuration. Preserve the migration explanation, verify owner and dependency needs, avoid claiming misuse, stage the permission reduction, validate the export workflow, retain rollback, monitor access and failures, and document completion."
        />

        <FakeLogPanel
          title="Fake Northbridge IAM Review Records"
          logs={[
            "09:00 REVIEW scope='cloud identities and roles' tenant='NLC'",
            "09:08 IDENTITY count='8' owners='mapped'",
            "09:14 ROLE export-automation='approved-content,archive-secondary,export-packages'",
            "09:18 REQUIREMENT export-automation='approved-content,export-packages'",
            "09:24 HISTORY archive-secondary='migration access' project='closed'",
            "09:31 PARTNER migration-role='active' sponsor='expired'",
            "09:37 ADMIN cloud-security='standing privilege' activation='available'",
            "09:43 BREAKGLASS owner='assigned' alerting='enabled' test='overdue'",
            "09:49 GROUP analytics-reader='stale member detected'",
            "09:55 SUPPORT role='aligned' database_access='none'",
            "10:02 FINDING overpermission='supported' misuse='not supported'",
            "10:10 ACTION stage='permission reduction' rollback='preserved'",
            "10:18 VALIDATION export_test='required' monitoring='enabled'",
            "10:25 REVIEW lifecycle='joiner,mover,leaver,partner,service'",
            "10:32 PORTFOLIO fictionalization='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge IAM Findings and Limits
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

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

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
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
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

        <AnalyzeEvidenceCard
          title="What Does the Broad Export Role Actually Prove?"
          evidence={[
            "The fictional role can read approved-content and archive-secondary and can write export-packages.",
            "The current export workflow requires approved-content read and export-packages write.",
            "Archive-secondary access was added during a completed migration.",
            "No current exception or sponsor approval supports continued archive-secondary access.",
            "The supplied audit records do not show post-migration reads from archive-secondary.",
            "A staged permission reduction and export validation are available.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The role is broader than the documented business need and should be reduced through an approved, tested change; misuse or data access is not proven.",
            "The service identity stole data from archive-secondary.",
            "Every listed permission was used.",
            "No action is needed because the role belongs to automation.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an over-permission and lifecycle finding while preserving the misuse and impact limits."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud IAM Analysis"
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
          title="Build the Northbridge Cloud Identity and Least-Privilege Review"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Identity Inventory, Effective Access, Findings, and Remediation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud identity review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identity register with type, owner, sponsor, lifecycle state, and business purpose.</li>
                <li>Assigned-role, group, resource-policy, guardrail, deny, session, delegation, and application map.</li>
                <li>Effective-permission and privilege-path diagram.</li>
                <li>Least-privilege worksheet for all eight fictional identities.</li>
                <li>Findings with alternatives, confidence, limitations, and impact boundaries.</li>
                <li>Staged remediation with approval, expiration, validation, rollback, monitoring, and completion evidence.</li>
                <li>Joiner, mover, leaver, partner, service-identity, privileged, and break-glass review schedule.</li>
                <li>Technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not access or modify any real identity system or cloud tenant.
            Complete the lab only with fictional records displayed in this
            lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Broad Service Role Has No Supported Misuse"
          scenario="The fictional export automation role exceeds the documented business need, but the supplied records do not show post-migration access to the extra collection."
          choices={[
            {
              label: "Choice A",
              response:
                "Report the over-permission and lifecycle gap, preserve the no-supported-misuse limitation, assign owners, stage the permission reduction, validate the workflow, monitor, and document completion.",
              outcome:
                "Best defensive choice. The role is improved without overstating impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "State that the service identity stole data because the role allowed it.",
              outcome:
                "Unsupported. Capability is not proof of action or intent.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the role because no misuse is confirmed.",
              outcome:
                "Unsafe. Unnecessary privilege remains a valid defensive finding.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Privileged Administrator Has Standing Access"
          scenario="The fictional cloud-security administrator performs occasional policy reviews and incident response, and the platform supports approved temporary activation."
          choices={[
            {
              label: "Choice A",
              response:
                "Validate response-time and emergency requirements, design just-in-time activation, separate approval, preserve break-glass coverage, log sessions, test rollback, and monitor the transition.",
              outcome:
                "Best defensive choice. Standing privilege is reduced safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove the role immediately without testing incident-response availability.",
              outcome:
                "Unsafe. Unplanned removal may damage defensive readiness.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep permanent privilege because temporary activation requires planning.",
              outcome:
                "Weak. Convenience alone does not justify continuous high privilege.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Identities, Roles, and Least-Privilege Checklist"
          items={[
            "I can distinguish fictional human, service, federated, partner, privileged, support, recovery, and emergency identities.",
            "I can identify identity owners, sponsors, business purposes, lifecycle state, and review requirements.",
            "I can calculate fictional effective access using direct roles, groups, resource policies, guardrails, denies, conditions, delegation, and application authorization.",
            "I can map privilege paths and distinguish assigned capability from observed use.",
            "I can compare permissions with exact business actions, resources, conditions, duration, approvals, monitoring, and removal rules.",
            "I can identify standing privilege, stale partner access, broad service roles, stale memberships, combined duties, and overdue emergency testing.",
            "I can preserve alternatives, confidence, limitations, source-health boundaries, and no-supported-misuse conclusions.",
            "I can design staged access changes with approval, validation, rollback, monitoring, communication, and completion evidence.",
            "I can create joiner, mover, leaver, partner, service-identity, privileged, and break-glass review schedules.",
            "I will use only fictional evidence and never access or expose real cloud identities, roles, policies, sessions, credentials, tenants, owners, logs, or private records.",
          ]}
        />

        <MiniQuiz
          title="I13.2 Mini Quiz: Cloud Identities, Roles, and Least Privilege"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Identity, Roles, and Least-Privilege Review for the Northbridge Learning Cloud. Include identity inventory, owner and sponsor map, direct roles, groups, resource policies, guardrails, denies, session conditions, delegation, application permissions, effective access, privilege paths, business need, findings, alternatives, confidence, limitations, remediation, validation, rollback, monitoring, lifecycle reviews, and a portfolio-safety statement."
          tips={[
            "Use only fictional tenants, identities, roles, groups, policies, sessions, credentials, owners, resources, logs, dates, and decisions.",
            "Do not treat assigned permission as proof of use, misuse, intent, or impact.",
            "Map every access decision to a business task, resource scope, owner, approval, expiration, and evidence source.",
            "Make remediation reversible, validated, monitored, and reviewable.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud access is created by several interacting layers rather than one role name.",
            "Least privilege compares effective access with a specific business task, resource scope, condition, duration, and owner.",
            "Service identities require the same ownership, review, monitoring, and lifecycle discipline as human identities.",
            "Broad access supports a governance finding but does not independently prove misuse or intent.",
            "Temporary partner, migration, project, and privileged access should expire or be explicitly renewed.",
            "Just-in-time privilege can reduce standing access when emergency and availability requirements are safely validated.",
            "Portfolio artifacts should use fully fictional identity evidence and never expose real cloud accounts or credentials.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I13
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