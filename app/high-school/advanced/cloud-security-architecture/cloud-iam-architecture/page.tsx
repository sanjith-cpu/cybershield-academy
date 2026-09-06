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
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousLesson = `${modulePath}/cloud-architecture-and-shared-responsibility`;
const nextLesson = `${modulePath}/storage-security-and-data-exposure`;

const objectives = [
  "Explain cloud IAM architecture as the design of identities, roles, trust relationships, privilege, lifecycle, and evidence rather than simply a list of user accounts.",
  "Distinguish workforce identities, privileged identities, service identities, workload identities, temporary identities, and external identities by purpose, trust, and lifecycle.",
  "Evaluate role design, least privilege, separation of duties, access reviews, session context, approval paths, and environment boundaries using fictional cloud evidence.",
  "Identify IAM architecture gaps such as shared credentials, stale access, overbroad roles, missing ownership, weak workload identity, and unreviewed external access.",
  "Build a Cloud IAM Architecture Matrix that becomes the second artifact in the A12 Cloud Security Architecture Assessment.",
];

const identityTypes = [
  {
    type: "Workforce identity",
    purpose:
      "Represents an employee or approved staff member who needs access to cloud consoles, applications, dashboards, or operational workflows.",
    architectureQuestions:
      "How is the person verified? Which roles are assigned? Who approves access? What happens when the person changes jobs or leaves?",
    evidence:
      "Directory lifecycle record, role assignment, approval, access review, authentication policy.",
  },
  {
    type: "Privileged identity",
    purpose:
      "Represents a human identity with authority to change sensitive configuration, identity, data access, release state, or security controls.",
    architectureQuestions:
      "Is privileged access separate from daily access? Is stronger authentication required? Are approvals and audit records present?",
    evidence:
      "Privileged role record, approval, session/audit evidence, review cadence, emergency-access policy.",
  },
  {
    type: "Workload identity",
    purpose:
      "Represents an application, service, automation, function, job, or other non-human workload that needs to call another service.",
    architectureQuestions:
      "Can the workload use an identity rather than a long-lived shared credential? What exact resource and action does it require?",
    evidence:
      "Workload identity record, service-to-service authorization, environment scope, owner, rotation or federation metadata.",
  },
  {
    type: "Service account",
    purpose:
      "A non-human account used by an application, service, automation process, or integration.",
    architectureQuestions:
      "Is the account uniquely owned? Is it still needed? Does it have excessive privilege? Could a more modern workload identity reduce secret dependency?",
    evidence:
      "Service-account inventory, owner, purpose, permissions, last-use metadata, credential lifecycle.",
  },
  {
    type: "Temporary identity",
    purpose:
      "Provides short-lived access for a project, incident, migration, contractor period, or limited administrative task.",
    architectureQuestions:
      "When does access expire? Who approved it? Is the role narrower than permanent administration?",
    evidence:
      "Approval, start/end date, temporary role, expiration control, closure evidence.",
  },
  {
    type: "External identity",
    purpose:
      "Represents a partner, vendor, guest, contractor, or other person whose primary identity belongs outside the organization.",
    architectureQuestions:
      "Who sponsors the identity? Which data and services can it reach? How is access revoked when the relationship ends?",
    evidence:
      "Sponsor record, federation or guest identity record, role assignment, review, expiration, contract or business owner.",
  },
];

const accessModels = [
  {
    model: "Role-based access control",
    idea:
      "Permissions are grouped into roles associated with job or workload responsibilities.",
    strength:
      "Makes common access patterns understandable and easier to review when roles remain narrow and well-defined.",
    risk:
      "Role sprawl or broad catch-all roles can make least privilege difficult to maintain.",
  },
  {
    model: "Attribute-based decisions",
    idea:
      "Access decisions consider attributes such as department, assignment, environment, sensitivity, device state, or workload metadata.",
    strength:
      "Can express context and dynamic policy more precisely than static role membership alone.",
    risk:
      "Poorly governed attributes, stale data, or overly complex conditions can make decisions hard to explain.",
  },
  {
    model: "Resource-level permissions",
    idea:
      "Permissions are granted directly or indirectly to a specific resource or resource group.",
    strength:
      "Can keep access narrow when the resource set is clearly defined.",
    risk:
      "Large numbers of direct grants become difficult to inventory and review.",
  },
  {
    model: "Just-in-time privileged access",
    idea:
      "High-impact permissions are activated only when needed and for a limited period.",
    strength:
      "Reduces standing administrative privilege and creates explicit activation evidence.",
    risk:
      "Weak approval or expiration controls can turn temporary access into permanent privilege.",
  },
  {
    model: "Workload-to-workload identity",
    idea:
      "Applications authenticate to each other using platform or federated workload identities instead of copied human credentials.",
    strength:
      "Improves ownership, scoping, rotation, and auditability while reducing dependence on shared secrets.",
    risk:
      "Overbroad identity bindings or cross-environment trust can still create excessive privilege.",
  },
];

const iamPrinciples = [
  {
    title: "Least privilege",
    meaning:
      "Grant only the actions and resources required for the approved purpose.",
    review:
      "Compare assigned permissions to actual business or workload need.",
  },
  {
    title: "Separation of duties",
    meaning:
      "High-impact workflows should not depend on one identity having unchecked authority across approval, execution, and review.",
    review:
      "Look for independent approval, role separation, and auditable handoffs.",
  },
  {
    title: "Identity lifecycle",
    meaning:
      "Access should change when people join, change jobs, leave, finish projects, or when workloads are retired.",
    review:
      "Check provisioning, role changes, expiration, disablement, and closure evidence.",
  },
  {
    title: "Strong authentication",
    meaning:
      "Authentication strength should match the sensitivity and privilege of the access path.",
    review:
      "Look for stronger controls around privileged, remote, sensitive, or externally federated access.",
  },
  {
    title: "Explicit ownership",
    meaning:
      "Every role, privileged path, service identity, and external identity should have an accountable owner.",
    review:
      "Unowned identities and roles are architecture debt.",
  },
  {
    title: "Environment separation",
    meaning:
      "Development, test, and production identities and privileges should not casually cross boundaries.",
    review:
      "Confirm environment-specific roles, workload identities, and approvals.",
  },
  {
    title: "Reviewable policy",
    meaning:
      "IAM design should be explainable enough that another reviewer can understand who can do what and why.",
    review:
      "Avoid opaque role chains and undocumented inherited access.",
  },
  {
    title: "Evidence freshness",
    meaning:
      "Access evidence must match the current people, workloads, roles, resources, and architecture.",
    review:
      "Stale access reviews or old role inventories should not be treated as current proof.",
  },
];

const vocabulary = [
  {
    term: "Identity and access management (IAM)",
    definition:
      "The architecture, policy, processes, and technology used to establish identities and control what they can access.",
  },
  {
    term: "Principal",
    definition:
      "A human or non-human identity that can be authenticated and authorized to perform actions.",
  },
  {
    term: "Role",
    definition:
      "A named collection of permissions or access expectations associated with a responsibility or workload purpose.",
  },
  {
    term: "Privilege",
    definition:
      "The authority to perform an action or access a resource, especially when the action can change sensitive state or security controls.",
  },
  {
    term: "Standing privilege",
    definition:
      "Permission that remains continuously available to an identity rather than being activated only when needed.",
  },
  {
    term: "Just-in-time access",
    definition:
      "Temporary permission activated for a limited purpose and period, usually with approval and audit evidence.",
  },
  {
    term: "Workload identity",
    definition:
      "A non-human identity representing an application, service, automation, or job.",
  },
  {
    term: "Federation",
    definition:
      "A trust relationship that allows one identity system to authenticate users or workloads for another service.",
  },
  {
    term: "Access review",
    definition:
      "A periodic or event-driven check that confirms identities still need their current roles and permissions.",
  },
  {
    term: "Separation of duties",
    definition:
      "Dividing sensitive responsibilities among different identities or roles to reduce unchecked authority.",
  },
  {
    term: "Break-glass access",
    definition:
      "Highly controlled emergency access intended for exceptional recovery situations and subject to strict ownership and review.",
  },
  {
    term: "Entitlement",
    definition:
      "A specific permission, role membership, resource grant, or access capability assigned to an identity.",
  },
];

const iamRecords = [
  {
    id: "IAM-01",
    identity: "Counselor Workforce Group",
    type: "Workforce",
    purpose: "Use the student-support application",
    environment: "Production",
    role: "CounselorAppUser",
    scope: "Application only",
    approval: "Department manager + application owner",
    review: "Quarterly",
    owner: "Identity Platform Team",
    status: "Confirmed",
    concern:
      "Application authorization still depends on current student-assignment data.",
  },
  {
    id: "IAM-02",
    identity: "Cloud Platform Administrators",
    type: "Privileged workforce",
    purpose: "Administer shared cloud platform services",
    environment: "Production",
    role: "PlatformAdmin-JIT",
    scope: "Shared platform resources",
    approval: "Privileged access workflow",
    review: "Monthly + per activation",
    owner: "Platform Engineering Manager",
    status: "Conditional",
    concern:
      "One emergency activation did not include a linked post-use review record.",
  },
  {
    id: "IAM-03",
    identity: "StudentPortal Workload",
    type: "Workload",
    purpose: "Read/write application database through approved service path",
    environment: "Production",
    role: "PortalDatabaseClient",
    scope: "Student-support database only",
    approval: "Application + Data Platform",
    review: "On architecture change",
    owner: "Application Team",
    status: "Confirmed",
    concern:
      "No direct access to analytics or backup storage.",
  },
  {
    id: "IAM-04",
    identity: "Notification Worker",
    type: "Workload",
    purpose: "Send approved notifications",
    environment: "Production",
    role: "NotificationQueueConsumer",
    scope: "Notification queue and provider integration",
    approval: "Notification service owner",
    review: "Quarterly",
    owner: "Notification Team",
    status: "Confirmed",
    concern:
      "Candidate migration may replace one long-lived integration credential with workload federation.",
  },
  {
    id: "IAM-05",
    identity: "Report Maintenance Account",
    type: "Service account",
    purpose: "Legacy scheduled report task",
    environment: "Production",
    role: "LegacyReportWriter",
    scope: "Report storage + scheduling job",
    approval: "Historical",
    review: "Overdue",
    owner: "Unknown",
    status: "Blocked",
    concern:
      "Ownership and current business need are not established.",
  },
  {
    id: "IAM-06",
    identity: "Vendor Support Guest",
    type: "External",
    purpose: "Assist with approved scheduling integration support",
    environment: "Support tenant",
    role: "VendorSupportReadOnly",
    scope: "Integration health metadata only",
    approval: "Integration owner",
    review: "Every 30 days",
    owner: "Integration Owner",
    status: "Conditional",
    concern:
      "Guest expiration is current, but sponsor review is due in 8 days.",
  },
  {
    id: "IAM-07",
    identity: "Temporary Migration Operator",
    type: "Temporary privileged",
    purpose: "Run approved data migration workflow",
    environment: "Staging only",
    role: "MigrationOperator",
    scope: "Migration staging resources",
    approval: "Change owner + data owner",
    review: "Expires automatically",
    owner: "Migration Project Owner",
    status: "Confirmed",
    concern:
      "Must not be promoted into production or converted into permanent access.",
  },
];

const accessReviewSignals = [
  {
    signal: "Identity no longer exists",
    meaning:
      "The account or workforce record is disabled or absent.",
    action:
      "Remove access and investigate why entitlement cleanup did not happen automatically.",
  },
  {
    signal: "Role no longer matches job",
    meaning:
      "The person's current responsibilities differ from the role's original purpose.",
    action:
      "Reapprove, reduce, or remove access.",
  },
  {
    signal: "No recent use",
    meaning:
      "The identity has not used an entitlement for an extended period.",
    action:
      "Review whether access is still required rather than assuming inactivity alone proves it is unnecessary.",
  },
  {
    signal: "Owner missing",
    meaning:
      "No accountable person or team can explain why the identity or role exists.",
    action:
      "Treat as a governance gap and block expansion until ownership is resolved.",
  },
  {
    signal: "Environment mismatch",
    meaning:
      "A test or staging identity appears in production scope.",
    action:
      "Investigate and restore environment separation.",
  },
  {
    signal: "Privilege increased",
    meaning:
      "A role or entitlement now has broader authority than at the previous review.",
    action:
      "Require explicit justification, approval, and renewed risk review.",
  },
];

const antiPatterns = [
  {
    title: "Shared administrator accounts",
    problem:
      "Multiple people use one identity, weakening accountability and making offboarding or review difficult.",
    better:
      "Use named identities with separate privileged activation and audit evidence.",
  },
  {
    title: "Permanent broad admin roles",
    problem:
      "Standing access keeps high-impact authority available even when it is rarely needed.",
    better:
      "Use narrower permanent roles and time-bounded privileged activation where appropriate.",
  },
  {
    title: "Human credentials inside workloads",
    problem:
      "Applications inherit the lifecycle and exposure problems of a human password or token.",
    better:
      "Prefer workload identity or narrowly scoped managed service credentials.",
  },
  {
    title: "Role names without purpose",
    problem:
      "Names like PowerUser or FullAccess do not explain why access exists or which business function needs it.",
    better:
      "Tie roles to clear purpose, resources, actions, owner, and review trigger.",
  },
  {
    title: "External guests with no sponsor",
    problem:
      "Access can outlive the business relationship because no internal owner is accountable.",
    better:
      "Require sponsorship, expiration, role scope, and recurring review.",
  },
  {
    title: "Test identities in production",
    problem:
      "Lower-environment accounts can bypass normal production lifecycle and ownership expectations.",
    better:
      "Maintain environment-specific identities and prohibit casual cross-environment reuse.",
  },
  {
    title: "Access review as a checkbox",
    problem:
      "Reviewers approve everything without comparing access to current purpose, use, or role.",
    better:
      "Review purpose, privilege, owner, use, environment, and change since the last review.",
  },
  {
    title: "Inherited access nobody can explain",
    problem:
      "Nested groups and indirect grants can create permissions that neither the user nor owner realizes are present.",
    better:
      "Preserve explainable entitlement paths and simplify unnecessary inheritance.",
  },
];

const dashboardMetrics = [
  {
    label: "Tracked principals",
    value: "148",
    note: "Workforce, privileged, workload, service, temporary, and guest identities",
  },
  {
    label: "Owned identities",
    value: "145 / 148",
    note: "Three legacy service identities still need ownership resolution",
  },
  {
    label: "Standing privileged roles",
    value: "4",
    note: "Target is to reduce two remaining broad standing assignments",
  },
  {
    label: "Access reviews current",
    value: "96%",
    note: "One legacy service account and two guest reviews are overdue",
  },
];

const logs = [
  "[08:22] IAM-01 counselor-group review=CURRENT owner=IdentityPlatform",
  "[08:41] IAM-02 platform-admin activation=EMERGENCY post-review=MISSING",
  "[09:03] IAM-03 portal-workload scope=student-db-only status=CONFIRMED",
  "[09:24] IAM-04 notification-worker federation-migration=PLANNED",
  "[09:52] IAM-05 report-maintenance owner=UNKNOWN review=OVERDUE status=BLOCKED",
  "[10:16] IAM-06 vendor-guest sponsor-review=8d status=CONDITIONAL",
  "[10:44] IAM-07 migration-operator env=STAGING expiry=AUTOMATIC status=CONFIRMED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep IAM-05 Blocked, identify whether the legacy task is still required, assign an owner, review its privilege and credential lifecycle, and retire it if it is unnecessary.",
    outcome:
      "Best. Unowned legacy access should not be normalized.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave IAM-05 unchanged because the account has existed for years without a known incident.",
    outcome:
      "Risky. Age and absence of known incidents do not establish need, ownership, or acceptable privilege.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Give IAM-05 broader permissions so the legacy job is less likely to fail.",
    outcome:
      "Risky. Broader privilege increases exposure without resolving ownership or business need.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the vendor role read-only, retain an internal sponsor, enforce expiration, review access regularly, and remove it when the support relationship ends.",
    outcome:
      "Best. External identity architecture needs clear sponsorship, scope, lifecycle, and evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Convert the vendor guest to a permanent internal administrator so support is easier.",
    outcome:
      "Risky. This expands privilege and obscures the external identity boundary.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the guest indefinitely because the SaaS provider is trusted.",
    outcome:
      "Risky. Provider trust does not eliminate customer responsibility for guest lifecycle and tenant access.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of cloud IAM architecture?",
    choices: [
      "A list of usernames.",
      "The design of identities, roles, permissions, trust relationships, privilege boundaries, lifecycle, ownership, and evidence across cloud services.",
      "Only the login page.",
      "Only the cloud provider's authentication system.",
    ],
    answer: 1,
    explanation:
      "IAM architecture connects authentication, authorization, privilege, lifecycle, ownership, and evidence.",
  },
  {
    question:
      "Why are workload identities often preferable to copied human credentials for applications?",
    choices: [
      "Because workloads do not need authorization.",
      "Because workload identity improves purpose, ownership, scoping, lifecycle, and auditability while reducing dependence on shared human secrets.",
      "Because human accounts cannot authenticate.",
      "Because workload identities should always have administrator access.",
    ],
    answer: 1,
    explanation:
      "Workload identities make non-human access more explicit and easier to scope and govern.",
  },
  {
    question:
      "What is the main security benefit of just-in-time privileged access?",
    choices: [
      "It gives everyone permanent administrator rights.",
      "It reduces standing privilege by activating high-impact access only when needed for a bounded period.",
      "It removes the need for approval.",
      "It makes audit evidence unnecessary.",
    ],
    answer: 1,
    explanation:
      "JIT access limits how long privileged authority remains available.",
  },
  {
    question:
      "A service account has no owner and an overdue review. What is the strongest status?",
    choices: [
      "Confirmed safe",
      "Blocked or Unknown until purpose, ownership, privilege, and lifecycle evidence are resolved",
      "Automatically trusted because it is non-human",
      "Permanent access",
    ],
    answer: 1,
    explanation:
      "Unowned access cannot be confidently governed or reviewed.",
  },
  {
    question:
      "Why does separation of duties matter for privileged cloud actions?",
    choices: [
      "Because no one should ever have any privilege.",
      "Because dividing approval, execution, and review reduces unchecked authority over high-impact changes.",
      "Because it removes the need for logging.",
      "Because privileged actions should be anonymous.",
    ],
    answer: 1,
    explanation:
      "Separation of duties reduces the risk that one identity can approve, perform, and hide a sensitive action alone.",
  },
  {
    question:
      "What is the strongest way to manage an external vendor identity?",
    choices: [
      "Give it permanent admin rights.",
      "Require an internal sponsor, narrow role, expiration, recurring review, and closure when the relationship ends.",
      "Share an internal employee account.",
      "Ignore it because the vendor is trusted.",
    ],
    answer: 1,
    explanation:
      "External access should be bounded by purpose, sponsorship, scope, time, and evidence.",
  },
  {
    question:
      "Why should test identities not casually appear in production?",
    choices: [
      "Because testing is never useful.",
      "Because environment separation is part of IAM architecture and lower-environment identities may bypass production lifecycle and ownership expectations.",
      "Because production does not require authentication.",
      "Because test identities are always malicious.",
    ],
    answer: 1,
    explanation:
      "Environment-specific identity boundaries reduce unexpected cross-environment privilege and lifecycle gaps.",
  },
];

const checklistItems = [
  "Every important human and non-human identity has a documented purpose.",
  "Privileged identities are separated from ordinary daily access where appropriate.",
  "Roles are tied to specific business or workload responsibilities.",
  "Permissions are narrower than broad catch-all access whenever possible.",
  "Workloads use dedicated identities rather than copied human credentials.",
  "External identities have internal sponsors, narrow scope, expiration, and review.",
  "Temporary privileged access has approval and automatic or explicit expiration.",
  "Identity lifecycle covers join, move, leave, project end, service retirement, and architecture change.",
  "Access reviews compare privilege to current purpose rather than approving everything automatically.",
  "Environment-specific identities and roles remain separated.",
  "Shared or legacy service accounts are identified and reduced.",
  "Every role and identity has an accountable owner.",
  "IAM evidence is current enough to match the present architecture.",
  "Unknown ownership, stale reviews, and overbroad privilege remain visible.",
  "No lesson activity requires real cloud credentials, accounts, tenants, or identity consoles.",
];

const takeaways = [
  "Cloud IAM architecture is about identity purpose, privilege, trust, lifecycle, ownership, and evidence.",
  "Human, privileged, workload, service, temporary, and external identities require different governance.",
  "Least privilege is easier to maintain when roles have clear purposes and narrow scopes.",
  "Workload identity can reduce dependence on copied human credentials and long-lived shared secrets.",
  "Just-in-time access reduces standing privilege but still requires approval, expiration, and auditability.",
  "External identities need sponsors, scope, review, and closure.",
  "Access reviews should compare current access to current need rather than becoming checkbox exercises.",
  "Environment separation applies to identities as well as applications and data.",
  "Unowned legacy accounts are architecture debt and should not be treated as normal.",
  "The Cloud IAM Architecture Matrix becomes a foundation for A12 storage, network, secrets, monitoring, and governance lessons.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
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
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A12
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

export default function CloudIamArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A12.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud IAM Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud identity design determines which people and workloads can
            reach which services, with what privilege, for how long, under
            whose approval, and with what evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional identities, role records, access reviews,
            and audit evidence only. It does not involve signing in to, testing,
            or modifying any real cloud identity system.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A12: Cloud Security Architecture"
          lessonTitle="Cloud IAM Architecture"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.2 Entry Readiness"
          items={[
            "I understand shared responsibility from A12.1.",
            "I can distinguish provider identity capabilities from organization-controlled role and access decisions.",
            "I understand least privilege, ownership, evidence, and change triggers.",
            "I will use only fictional identities and synthetic access records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Cloud Account Is Not an IAM Architecture"
        >
          <p className="leading-8">
            A team can have strong authentication and still have weak identity
            architecture if roles are too broad, guests never expire, service
            accounts have no owners, workloads use human credentials, or
            administrators keep permanent privilege.
          </p>

          <p className="mt-4 leading-8">
            IAM architecture asks a bigger question:
            <strong className="text-white">
              {" "}can every access path explain who or what is acting, why the
              access exists, what it can reach, who approved it, and when it
              should end?
            </strong>
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Identity is a lifecycle, not a login event.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Identity Types"
          title="Cloud IAM Includes More Than Employees"
        >
          <p className="leading-8">
            One of the most important architecture habits is to separate human
            and non-human identities by purpose. Their lifecycle, privilege,
            authentication, ownership, and evidence needs are different.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {identityTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Architecture questions
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.architectureQuestions}
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-purple-50">
                    {item.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Access Models"
          title="Different Ways to Express Cloud Access"
        >
          <div className="grid gap-5">
            {accessModels.map((item) => (
              <article
                key={item.model}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.model}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Idea
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.idea}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strength
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strength}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.risk}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Principles"
          title="Eight IAM Principles That Keep Access Explainable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {iamPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Cloud IAM Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional IAM Matrix"
          title="Seven Northbridge Identity Records"
        >
          <div className="grid gap-5">
            {iamRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.identity}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Environment", item.environment],
                    ["Role", item.role],
                    ["Scope", item.scope],
                    ["Approval", item.approval],
                    ["Review", item.review],
                    ["Owner", item.owner],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.concern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud IAM Dashboard"
          subtitle="Fictional identity governance metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Service Account Has No Owner"
          severity="High"
          time="09:52"
          source="Fictional IAM Governance Review"
          details="IAM-05, the Report Maintenance Account, has an overdue access review and no confirmed accountable owner. Its current business need has not been established."
          recommendation="Keep the identity Blocked until purpose, ownership, privilege, credential lifecycle, and retirement need are resolved."
        />

        <Section
          eyebrow="Access Review"
          title="A Review Should Ask Whether Access Still Makes Sense"
        >
          <p className="leading-8">
            Access review is not just a list of accounts with Approve buttons.
            A useful review compares current privilege to current purpose,
            environment, ownership, use, and organizational change.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {accessReviewSignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Review action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Cloud IAM Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Service Account"
          question="What is the strongest conclusion about IAM-05?"
          evidence={[
            "The service account supports a legacy scheduled report task.",
            "The account's current business need has not been confirmed.",
            "The access review is overdue.",
            "No accountable owner is documented.",
            "The role can write to report storage and run the scheduling job.",
          ]}
          options={[
            "The identity is Confirmed because it has existed for years.",
            "The identity should remain Blocked or Unknown until purpose, ownership, privilege, and lifecycle evidence are resolved.",
            "The identity should receive more access so the job keeps working.",
            "Service accounts do not need owners.",
          ]}
          bestAnswer={1}
          explanation="An identity with real privilege but no confirmed purpose or owner cannot be confidently governed."
        />

        <Section
          eyebrow="IAM Anti-Patterns"
          title="Eight Designs That Create Identity Debt"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Human vs. Workload Identity"
          title="The Cloud Needs to Know What Is Acting"
        >
          <p className="leading-8">
            A human identity and an application identity should not be treated as
            interchangeable. Humans have job changes, managers, employment
            lifecycle, and interactive authentication. Workloads have service
            owners, deployment environments, runtime purpose, and
            service-to-service authorization.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Dimension</th>
                  <th className="border-b border-slate-700 p-4">Human identity</th>
                  <th className="border-b border-slate-700 p-4">Workload identity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose", "Job or approved human task", "Application or automation function"],
                  ["Lifecycle", "Join, move, leave, contract end", "Deploy, change, retire"],
                  ["Owner", "Manager + identity/application owner", "Service or application owner"],
                  ["Authentication", "Interactive sign-in and strong authentication", "Platform/federated workload authentication"],
                  ["Privilege review", "Job need and role review", "Service purpose and resource scope review"],
                  ["Environment", "User may access approved environments by role", "Should be environment-specific"],
                  ["Secrets", "Human credentials should not be embedded in applications", "Prefer managed workload identity where possible"],
                  ["Evidence", "Access review, role assignment, sign-in/audit evidence", "Identity binding, service authorization, deployment metadata"],
                ].map(([dimension, human, workload]) => (
                  <tr key={dimension} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {dimension}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {human}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-emerald-100">
                      {workload}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Unowned Legacy Service Account"
          scenario="A production service account runs an old report job. No current owner can explain why the account still exists, and its access review is overdue."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — External Vendor Guest"
          scenario="A scheduling vendor needs limited access to integration health metadata for support. Northbridge can provide a guest identity with a read-only role and 30-day expiration."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud IAM Architecture Matrix"
        >
          <p className="leading-8">
            Use fictional users, roles, workloads, services, and resources only.
            Do not sign in to or inspect any real cloud identity environment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least ten fictional IAM records.",
              "Include workforce, privileged, workload, service, temporary, and external identities.",
              "Give each identity a stable ID.",
              "State the identity purpose.",
              "Identify environment.",
              "List assigned role or entitlement.",
              "Describe resource and action scope.",
              "Record approval path.",
              "Record review cadence or expiration.",
              "Assign accountable owner.",
              "Record evidence supporting the access.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Identify at least two least-privilege gaps.",
              "Identify at least one separation-of-duties concern.",
              "Identify at least one workload identity that could replace a long-lived credential.",
              "Add lifecycle and change triggers.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This is an architecture and governance exercise. Use synthetic
              identities and permissions only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Emergency Privileged Access"
          question="What is the strongest conclusion about IAM-02?"
          evidence={[
            "The platform administrator role is activated just-in-time rather than permanently.",
            "A recent emergency activation has complete activation logs.",
            "The activation followed the emergency access workflow.",
            "The required post-use review record is missing.",
          ]}
          options={[
            "Privileged governance is fully Confirmed.",
            "The design is Conditional because JIT and activation evidence exist, but the missing post-use review leaves the emergency access process incomplete.",
            "The administrator should receive permanent access instead.",
            "Audit evidence is unnecessary for emergency access.",
          ]}
          bestAnswer={1}
          explanation="JIT access reduces standing privilege, but the complete control includes activation, use, audit, and post-use review."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Broad Administrator Role"
        >
          <p className="leading-8">
            A fictional cloud team currently uses one broad PlatformAdmin role
            for identity changes, network changes, storage policy, deployment,
            and logging configuration. Redesign the architecture to reduce
            unchecked privilege while keeping operations practical.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Separate role purposes",
              "Daily-access vs. privileged-access identities",
              "Just-in-time activation",
              "Approval path",
              "Separation of duties",
              "Emergency access",
              "Environment boundaries",
              "Logging and audit evidence",
              "Access review cadence",
              "Owner for each role",
              "Expiration or deactivation rules",
              "Change triggers",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            A strong redesign does not simply create more roles. It creates
            clearer authority boundaries that are understandable, reviewable,
            and connected to real responsibilities.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.2 Mini Quiz: Cloud IAM Architecture"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud IAM Architecture Matrix"
          prompt="Create the second artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud IAM Architecture Matrix with at least ten identity records. Include identity ID, type, purpose, environment, role or entitlement, resource/action scope, approval path, owner, review cadence or expiration, authentication context, evidence, status, risk concern, next action, and change trigger."
          tips={[
            "Include human and non-human identities.",
            "Include at least one privileged role, workload identity, external guest, temporary identity, and legacy service account.",
            "Show at least one just-in-time privileged design.",
            "Keep unowned or stale identities Unknown or Blocked.",
            "Include one example where workload identity reduces dependence on a long-lived credential.",
            "Use provider-neutral fictional names so the portfolio teaches IAM architecture rather than one vendor's interface.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.3?"
        >
          <p className="leading-8">
            A12.3 moves into Storage Security and Data Exposure. Before
            continuing, make sure you can explain how identity design controls
            which humans and workloads can reach cloud data.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish workforce, privileged, workload, service, temporary, and external identities.",
              "I can explain least privilege and separation of duties in cloud IAM.",
              "I can identify why workload identity is different from human credentials.",
              "I can evaluate access-review evidence and lifecycle gaps.",
              "I can keep stale, unowned, or overbroad identities visible as architecture risk.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the IAM Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Separate identity types",
                detail:
                  "Make workforce, privileged, workload, service, temporary, and external identities visually distinct.",
              },
              {
                title: "Show purpose before permissions",
                detail:
                  "A reviewer should understand why the identity exists before seeing what it can access.",
              },
              {
                title: "Show resource and action scope",
                detail:
                  "Avoid vague terms like broad access. State what resource class and action the role actually needs.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Include review cadence, expiration, disablement, project end, or service retirement.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every role and identity should have an accountable owner and a clear approval path.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Mark missing review evidence, stale approvals, and unowned identities clearly.",
              },
              {
                title: "Show privilege reduction",
                detail:
                  "Highlight JIT access, narrower roles, workload identity, and removal of shared accounts.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the IAM matrix easy to reuse in storage, network, secrets, monitoring, and governance reviews later in A12.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            IAM architecture review does not require real account access
          </h2>
          <p className="mt-3 leading-7">
            Do not use real usernames, cloud accounts, credentials, tenant IDs,
            role assignments, identity consoles, private access logs, or
            production systems. All identities and evidence in this lesson are
            fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.2 Cloud IAM Architecture Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an IAM architecture model for human and workload
            identities, role design, least privilege, privileged access,
            lifecycle, access reviews, external identities, and ownership.
            Next, A12.3 focuses on Storage Security and Data Exposure.
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