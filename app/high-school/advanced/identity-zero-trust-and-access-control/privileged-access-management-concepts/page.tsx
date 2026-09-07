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
const modulePath = `${trackPath}/identity-zero-trust-and-access-control`;
const previousLesson = `${modulePath}/role-based-and-attribute-based-access-concepts`;
const nextLesson = `${modulePath}/identity-logging-and-monitoring`;

const objectives = [
  "Explain privileged access as a higher-impact identity boundary that deserves stronger separation, approval, duration limits, monitoring, lifecycle, and review.",
  "Distinguish privileged eligibility, active privilege, standing privilege, just-in-time activation, emergency access, and post-use review as separate governance concepts.",
  "Evaluate fictional privileged-access records for broad scope, stale eligibility, missing approval, excessive duration, weak ownership, incomplete evidence, and unreviewed emergency use.",
  "Connect privileged access management to RBAC/ABAC, conditional access, federation, zero trust, workload identity, environment separation, monitoring, and governance.",
  "Build a Privileged Access Governance Register that becomes the sixth artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const privilegeCategories = [
  {
    category: "Identity administration",
    description:
      "Capabilities that create, change, disable, or assign identity and access relationships.",
    examples:
      "Managing roles, groups, federation trust, access policy, or privileged eligibility.",
    architectureConcern:
      "Identity administration can change who else receives access, so errors can have organization-wide impact.",
  },
  {
    category: "Platform administration",
    description:
      "Capabilities that change cloud, server, network, platform, or infrastructure configuration.",
    examples:
      "Changing infrastructure settings, service configuration, or administrative control-plane state.",
    architectureConcern:
      "Platform privilege can change the security posture of many dependent services at once.",
  },
  {
    category: "Application administration",
    description:
      "Capabilities that change application configuration, user access, integrations, or sensitive business workflows.",
    examples:
      "Managing application settings, roles, integrations, or operational configuration.",
    architectureConcern:
      "Application administrators may indirectly control sensitive data access and workflow behavior.",
  },
  {
    category: "Data administration",
    description:
      "Capabilities that change sensitive data platforms, permissions, retention, or data-management settings.",
    examples:
      "Managing database roles, storage permissions, backup policy, or sensitive data controls.",
    architectureConcern:
      "Data administration should remain separate from ordinary data use where practical.",
  },
  {
    category: "Security administration",
    description:
      "Capabilities that change security controls, logging, monitoring, alerting, keys, policies, or defensive configuration.",
    examples:
      "Managing security policy, monitoring configuration, or protective platform controls.",
    architectureConcern:
      "Security administrators can alter the controls used to detect and review other privileged actions.",
  },
  {
    category: "Emergency / recovery administration",
    description:
      "Exceptional high-impact access reserved for incidents, recovery, or major service disruption.",
    examples:
      "Emergency administrative role, recovery operator, break-glass identity.",
    architectureConcern:
      "Emergency access should exist before it is needed but remain strongly bounded, monitored, reviewed, and rarely used.",
  },
];

const lifecycleStages = [
  {
    stage: "Eligible",
    meaning:
      "The identity is approved to request a privileged role but does not currently hold active administrative capability.",
    evidence:
      "Role responsibility, eligibility approval, owner, review date, and current workforce or workload status.",
  },
  {
    stage: "Requested",
    meaning:
      "The identity requests privileged capability for a defined task.",
    evidence:
      "Task purpose, resource, requested role, expected duration, ticket or change reference, and approver.",
  },
  {
    stage: "Approved",
    meaning:
      "An accountable reviewer confirms the task and privilege request are appropriate.",
    evidence:
      "Approval, task scope, expiration, conditions, and separation-of-duties checks where applicable.",
  },
  {
    stage: "Activated",
    meaning:
      "The privileged capability becomes usable for the approved time window and resource scope.",
    evidence:
      "Activation timestamp, principal, privileged role, resource, session context, and policy result.",
  },
  {
    stage: "Observed",
    meaning:
      "Privileged activity is logged and monitored using safe administrative evidence.",
    evidence:
      "Administrative audit, policy decision, resource changes, source health, and alert ownership.",
  },
  {
    stage: "Deactivated",
    meaning:
      "The time-bounded privileged capability ends after the task, expiration, or manual closure.",
    evidence:
      "Deactivation timestamp, session end, role no longer active, and closure state.",
  },
  {
    stage: "Reviewed",
    meaning:
      "The organization confirms the privileged activity matched the approved purpose and resolves any exceptions.",
    evidence:
      "Post-use review, approved-vs-observed comparison, exceptions, owner decision, and remediation.",
  },
  {
    stage: "Revalidated or retired",
    meaning:
      "Eligibility itself is reviewed periodically and removed when the job, service, ownership, or business need changes.",
    evidence:
      "Eligibility review, manager/resource-owner confirmation, role-change event, or retirement record.",
  },
];

const pamPrinciples = [
  {
    title: "Eligibility is not active privilege",
    meaning:
      "A person can be approved to perform administrative work without holding the capability continuously.",
    review:
      "Can the architecture distinguish who may request privilege from who currently has it?",
  },
  {
    title: "Privileged identities should be named",
    meaning:
      "Administrative activity should be attributable to a specific person or workload.",
    review:
      "Can reviewers connect each privileged action to a named principal?",
  },
  {
    title: "Scope should match the task",
    meaning:
      "Administrative access should be limited to the resource, action family, environment, and duration required for the approved work.",
    review:
      "Does the activation provide more capability than the task requires?",
  },
  {
    title: "Time reduces exposure",
    meaning:
      "Shorter active privilege windows reduce the time high-impact access remains available.",
    review:
      "Does privilege end automatically when the approved window expires?",
  },
  {
    title: "Approval should be accountable",
    meaning:
      "Sensitive privilege should be approved by an owner who can judge the task, resource, and business impact.",
    review:
      "Who approved the access and were they the right owner?",
  },
  {
    title: "Emergency access is exceptional",
    meaning:
      "Break-glass or recovery access should not become a convenient alternate admin path.",
    review:
      "Is emergency use rare, justified, monitored, and reviewed after use?",
  },
  {
    title: "Monitoring should survive privilege",
    meaning:
      "A privileged user should not be able to silently operate outside the evidence model.",
    review:
      "Are important admin changes logged and are source-health checks independent enough to support confidence?",
  },
  {
    title: "Eligibility needs lifecycle",
    meaning:
      "Even inactive privileged eligibility can become stale after role, team, project, or ownership changes.",
    review:
      "When was eligibility last revalidated and what event should remove it?",
  },
];

const standingPrivilegeRisks = [
  {
    risk: "Permanent admin role",
    problem:
      "High-impact capability remains available during routine work even when no privileged task is active.",
    better:
      "Separate normal access from eligible, time-bounded privileged activation.",
  },
  {
    risk: "Shared emergency account",
    problem:
      "Multiple people may use one privileged identity, weakening accountability.",
    better:
      "Use named emergency processes with strong custody and post-use evidence.",
  },
  {
    risk: "Privilege broader than resource ownership",
    problem:
      "An administrator can change systems outside the responsibility they actually own.",
    better:
      "Scope privilege to approved services, environments, or administration domains.",
  },
  {
    risk: "No expiration",
    problem:
      "A temporary privileged task silently becomes standing access.",
    better:
      "Use explicit duration and automatic deactivation where practical.",
  },
  {
    risk: "Eligibility never reviewed",
    problem:
      "Former team members or obsolete functions remain capable of requesting high-impact roles.",
    better:
      "Review eligibility on schedule and on role, project, or ownership changes.",
  },
  {
    risk: "Post-use review skipped",
    problem:
      "The organization cannot confirm that observed activity matched the approved task.",
    better:
      "Review sensitive or emergency administrative activity after the session.",
  },
];

const evidenceDomains = [
  {
    domain: "Eligibility evidence",
    question:
      "Why is this principal allowed to request this privileged role?",
    examples:
      "Job responsibility, service ownership, approved admin function, manager/resource-owner confirmation.",
  },
  {
    domain: "Request evidence",
    question:
      "What privileged task is being requested?",
    examples:
      "Resource, change reason, requested role, environment, expected duration.",
  },
  {
    domain: "Approval evidence",
    question:
      "Who approved the access and under what conditions?",
    examples:
      "Approver, approval timestamp, scope, conditions, expiration.",
  },
  {
    domain: "Activation evidence",
    question:
      "When did privilege become active?",
    examples:
      "Activation time, role, principal, target resource, policy decision.",
  },
  {
    domain: "Activity evidence",
    question:
      "What administrative changes occurred during the session?",
    examples:
      "Safe management audit metadata, configuration changes, role changes, policy changes.",
  },
  {
    domain: "Deactivation evidence",
    question:
      "When did active privilege end?",
    examples:
      "Session closure, activation expiration, role state returned to inactive.",
  },
  {
    domain: "Post-use evidence",
    question:
      "Did observed activity match the approved purpose?",
    examples:
      "Reviewer decision, exceptions, unexplained changes, closure confirmation.",
  },
  {
    domain: "Eligibility lifecycle evidence",
    question:
      "Should this identity remain eligible to request the role?",
    examples:
      "Current team membership, service ownership, project state, role-change trigger, review date.",
  },
];

const vocabulary = [
  {
    term: "Privileged access",
    definition:
      "Administrative or high-impact access capable of changing identities, policies, infrastructure, applications, data controls, or security state.",
  },
  {
    term: "Privileged eligibility",
    definition:
      "Approval to request or activate a privileged role without holding that privilege continuously.",
  },
  {
    term: "Standing privilege",
    definition:
      "Administrative capability that remains continuously available rather than being activated only when needed.",
  },
  {
    term: "Just-in-time access",
    definition:
      "A model in which privileged capability is activated for a limited approved period instead of remaining permanently active.",
  },
  {
    term: "Privileged activation",
    definition:
      "The event that changes an eligible identity into an identity with currently active privileged capability.",
  },
  {
    term: "Break-glass access",
    definition:
      "Exceptional emergency access reserved for serious recovery or identity-system failure scenarios.",
  },
  {
    term: "Post-use review",
    definition:
      "A review that compares privileged activity with the approved task after the administrative session ends.",
  },
  {
    term: "Separation of duties",
    definition:
      "Dividing sensitive responsibilities so one person does not control every critical step without independent review.",
  },
  {
    term: "Privileged session",
    definition:
      "A bounded period in which a named identity is operating with active administrative capability.",
  },
  {
    term: "Privilege scope",
    definition:
      "The specific administrative resources, actions, environments, and duration made available during a privileged session.",
  },
  {
    term: "Eligibility review",
    definition:
      "A recurring or event-triggered decision about whether an identity should remain able to request privileged access.",
  },
  {
    term: "Administrative evidence",
    definition:
      "Safe metadata showing approvals, activation, high-impact changes, deactivation, monitoring, and review without exposing secrets.",
  },
];

const privilegedRecords = [
  {
    id: "PAM-01",
    identity: "Platform Engineer — Production Admin Eligible",
    privilege: "Cloud Platform Administrator",
    purpose: "Approved production platform maintenance",
    eligibility: "Current; reviewed this quarter",
    approval: "Change owner + platform lead",
    duration: "Up to 60 minutes per approved task",
    scope: "Production platform administration only",
    environment: "Production",
    monitoring: "Activation + management audit + policy log",
    postReview: "Required for each activation",
    owner: "Platform Engineering",
    status: "Confirmed",
    concern:
      "Eligibility is stable, but active privilege remains task-bound and time-limited.",
  },
  {
    id: "PAM-02",
    identity: "Identity Engineer — IAM Admin Eligible",
    privilege: "Identity Policy Administrator",
    purpose: "Approved identity-policy maintenance",
    eligibility: "Current",
    approval: "Identity Security Lead",
    duration: "45 minutes",
    scope: "Identity policy and role configuration",
    environment: "Production",
    monitoring: "Identity admin audit + policy change log",
    postReview: "Required for sensitive policy changes",
    owner: "Identity Team",
    status: "Confirmed",
    concern:
      "Identity administration must remain separate from everyday workforce access.",
  },
  {
    id: "PAM-03",
    identity: "Emergency Recovery Operator",
    privilege: "Emergency Administrative Access",
    purpose: "Critical recovery when normal privileged workflow is unavailable",
    eligibility: "Emergency-only",
    approval: "Incident commander + recovery owner",
    duration: "Until incident stabilization, then immediate closure",
    scope: "Recovery-critical services only",
    environment: "Production / Recovery",
    monitoring: "Emergency activation + admin audit + incident timeline",
    postReview: "Mandatory",
    owner: "Resilience + Security",
    status: "Conditional",
    concern:
      "One fictional prior emergency session has incomplete post-use review evidence.",
  },
  {
    id: "PAM-04",
    identity: "Database Operations Engineer",
    privilege: "Database Administrator Eligible",
    purpose: "Approved database maintenance",
    eligibility: "Current",
    approval: "Data Platform Owner",
    duration: "90 minutes",
    scope: "Student Support Database administration",
    environment: "Production",
    monitoring: "DB admin audit + change record",
    postReview: "Required for sensitive schema/permission changes",
    owner: "Data Platform",
    status: "Confirmed",
    concern:
      "Privilege should not extend to unrelated analytics or identity systems.",
  },
  {
    id: "PAM-05",
    identity: "Former Migration Project Administrator",
    privilege: "Migration Console Administrator",
    purpose: "Historical migration project",
    eligibility: "Project ended",
    approval: "Historical",
    duration: "Originally project-bound",
    scope: "Migration Console",
    environment: "Production",
    monitoring: "Historical audit only",
    postReview: "Project closure complete",
    owner: "Migration Project Owner",
    status: "Blocked",
    concern:
      "Eligibility remains assigned after the project ended and should be removed.",
  },
  {
    id: "PAM-06",
    identity: "Scheduling Integration Support Lead",
    privilege: "Integration Administrator Eligible",
    purpose: "Approved integration maintenance",
    eligibility: "Current",
    approval: "Integration Owner",
    duration: "30 minutes",
    scope: "Scheduling Integration Service only",
    environment: "Production",
    monitoring: "Integration admin + federation logs",
    postReview: "Required for privilege activation",
    owner: "Integration Owner",
    status: "Conditional",
    concern:
      "Partner-related support changes require explicit external-impact review.",
  },
  {
    id: "PAM-07",
    identity: "Legacy Shared Admin Account",
    privilege: "Historical Application Administrator",
    purpose: "Legacy application maintenance",
    eligibility: "Unknown",
    approval: "Unknown",
    duration: "Standing",
    scope: "Legacy reporting application",
    environment: "Production",
    monitoring: "Partial",
    postReview: "None current",
    owner: "Unknown",
    status: "Blocked",
    concern:
      "Shared identity, standing privilege, missing owner, and incomplete monitoring make the access unacceptable.",
  },
];

const dashboardMetrics = [
  {
    label: "Privileged records reviewed",
    value: "7",
    note: "Platform, IAM, emergency, database, migration, integration, and legacy administration",
  },
  {
    label: "Standing privileged paths",
    value: "1",
    note: "Only the blocked legacy shared admin still has standing privilege",
  },
  {
    label: "Time-bounded models",
    value: "5",
    note: "Current governed admin paths use bounded activation windows",
  },
  {
    label: "Open governance issues",
    value: "3",
    note: "Emergency post-review, obsolete migration eligibility, and legacy shared admin require closure",
  },
];

const logs = [
  "[08:05] PAM-01 platform-admin eligibility=CURRENT activation=60m state=CONFIRMED",
  "[08:27] PAM-02 iam-admin eligibility=CURRENT activation=45m state=CONFIRMED",
  "[08:51] PAM-03 emergency-admin use=RECOVERY post_review=PARTIAL state=CONDITIONAL",
  "[09:16] PAM-04 database-admin scope=STUDENT_SUPPORT_DB activation=90m state=CONFIRMED",
  "[09:42] PAM-05 migration-admin project=CLOSED eligibility=STILL_ASSIGNED state=BLOCKED",
  "[10:06] PAM-06 integration-admin activation=30m external_impact=REVIEW state=CONDITIONAL",
  "[10:31] PAM-07 legacy-shared-admin owner=UNKNOWN privilege=STANDING monitoring=PARTIAL state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Permanent administrator by default",
    problem:
      "High-impact access remains active during routine work when no privileged task is happening.",
    better:
      "Separate eligibility from time-bounded activation.",
  },
  {
    title: "Shared administrator identity",
    problem:
      "Multiple operators act through one account, weakening accountability and lifecycle control.",
    better:
      "Use named identities and attributable privileged sessions.",
  },
  {
    title: "Privilege follows team membership forever",
    problem:
      "A user remains eligible after role or project responsibilities change.",
    better:
      "Use recurring and event-triggered eligibility review.",
  },
  {
    title: "Emergency account becomes normal workflow",
    problem:
      "Break-glass access is used for convenience instead of actual recovery need.",
    better:
      "Keep emergency access exceptional and require strong post-use review.",
  },
  {
    title: "Approval without task scope",
    problem:
      "An approver confirms admin access without defining resource, action family, environment, or duration.",
    better:
      "Tie each activation to a clear task and bounded scope.",
  },
  {
    title: "Privilege expires only manually",
    problem:
      "Temporary admin access can remain active when a human forgets to close it.",
    better:
      "Use automatic expiration where practical and verify deactivation evidence.",
  },
  {
    title: "Admin monitoring has blind spots",
    problem:
      "High-impact actions occur without reliable audit or source-health evidence.",
    better:
      "Monitor privileged activation and meaningful administrative changes with source-health checks.",
  },
  {
    title: "Post-use review checks only that login occurred",
    problem:
      "The review does not compare approved task scope with observed administrative activity.",
    better:
      "Review whether actual actions matched the approved purpose and resolve differences.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Remove the obsolete migration-admin eligibility because the project has ended and no current privileged purpose remains.",
    outcome:
      "Best. Privileged eligibility needs lifecycle and should end with the responsibility that justified it.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep eligibility forever in case another migration happens someday.",
    outcome:
      "Risky. Future possibility does not justify current privileged eligibility.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Convert the role into permanent standing privilege so no approval is needed later.",
    outcome:
      "Risky. That increases exposure and weakens accountability.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the emergency-access record Conditional until the missing post-use review is completed and the observed actions are compared with the approved recovery purpose.",
    outcome:
      "Best. Emergency access should remain exceptional and fully reviewed after use.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the emergency session Confirmed because the incident ended successfully.",
    outcome:
      "Risky. Successful recovery does not replace governance evidence.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Skip review because emergency administrators must be trusted.",
    outcome:
      "Risky. High-impact emergency access deserves stronger, not weaker, evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the difference between privileged eligibility and active privilege?",
    choices: [
      "Eligibility means the identity may request or activate privilege; active privilege means the administrative capability is currently usable.",
      "They are the same thing.",
      "Eligibility is more powerful than active privilege.",
      "Active privilege applies only to workloads.",
    ],
    answer: 0,
    explanation:
      "Separating eligibility from active privilege is a core way to reduce standing administrative access.",
  },
  {
    question:
      "What is standing privilege?",
    choices: [
      "Administrative capability that remains continuously available.",
      "A time-bounded privileged activation.",
      "A completed post-use review.",
      "A resource owner approval.",
    ],
    answer: 0,
    explanation:
      "Standing privilege is continuously active access rather than access activated only for an approved task.",
  },
  {
    question:
      "Why is just-in-time privileged access useful?",
    choices: [
      "It reduces the time administrative capability remains active and ties privilege to an approved task.",
      "It eliminates the need for monitoring.",
      "It makes all users administrators.",
      "It removes ownership requirements.",
    ],
    answer: 0,
    explanation:
      "Time-bounded activation reduces exposure while preserving legitimate administration.",
  },
  {
    question:
      "A migration project has ended, but a former project administrator remains eligible for the migration admin role. What is the strongest action?",
    choices: [
      "Keep eligibility forever.",
      "Remove eligibility because the approved responsibility has ended.",
      "Convert it to standing privilege.",
      "Share the role with more users.",
    ],
    answer: 1,
    explanation:
      "Eligibility should follow current responsibility and lifecycle.",
  },
  {
    question:
      "What is strongest for emergency or break-glass access?",
    choices: [
      "Use it for routine tasks so the team stays familiar with it.",
      "Keep it exceptional, bounded, monitored, and subject to mandatory post-use review.",
      "Use a shared account with no owner.",
      "Disable all logging during emergencies.",
    ],
    answer: 1,
    explanation:
      "Emergency access should remain available for recovery but should not become an unreviewed alternate admin path.",
  },
  {
    question:
      "What should a strong post-use review compare?",
    choices: [
      "The approved task and scope against observed privileged activity.",
      "Only whether the user successfully signed in.",
      "Only the duration of the session.",
      "Only the user's job title.",
    ],
    answer: 0,
    explanation:
      "Post-use review should establish whether actual high-impact activity matched the approved purpose.",
  },
  {
    question:
      "What is the strongest conclusion for a shared legacy admin account with Unknown owner, standing privilege, and Partial monitoring?",
    choices: [
      "Confirmed because it is old.",
      "Blocked until the access is replaced, owned, monitored, and retired or redesigned.",
      "Accepted automatically because it supports production.",
      "Safe because several people know how to use it.",
    ],
    answer: 1,
    explanation:
      "Shared identity, standing privilege, missing ownership, and incomplete evidence create major privileged-access governance gaps.",
  },
];

const checklistItems = [
  "Privileged eligibility is separated from active privilege.",
  "Named identities are used for important administrative activity.",
  "Standard workforce access is separate from privileged capability.",
  "Privilege scope matches the approved task.",
  "Privilege scope identifies resource and environment.",
  "Privileged activation has an explicit duration.",
  "Privilege expires automatically where practical.",
  "Approvals are tied to accountable owners.",
  "Approvals document purpose and scope.",
  "Privileged activation is logged.",
  "Meaningful administrative actions are logged.",
  "Source health supports confidence in admin evidence.",
  "Post-use review compares approved purpose with observed activity.",
  "Emergency access is exceptional and strongly reviewed.",
  "Emergency access does not become normal workflow.",
  "Privileged eligibility has recurring review.",
  "Role, project, service, or ownership changes trigger eligibility review.",
  "Obsolete eligibility is removed.",
  "Shared legacy admin identities remain Blocked until redesigned or retired.",
  "No lesson activity requires obtaining, using, or escalating real privileged access.",
];

const takeaways = [
  "Privileged access is a higher-impact identity boundary because it can change the security state of other systems and identities.",
  "Eligibility and active privilege should be treated as different states.",
  "Standing privilege increases exposure and should be minimized where practical.",
  "Just-in-time access ties administrative capability to approved tasks and time windows.",
  "Privileged scope should match resource, action family, environment, and duration.",
  "Emergency access should exist but remain exceptional, bounded, monitored, and reviewed.",
  "Post-use review should compare observed administrative activity with the approved purpose.",
  "Eligibility itself needs lifecycle and should end when responsibility changes.",
  "Shared legacy admin accounts are difficult to govern because accountability is weak.",
  "The Privileged Access Governance Register will support A13.7 Identity Logging and Monitoring.",
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
        Module A13
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

export default function PrivilegedAccessManagementConceptsPage() {
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
              A13.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privileged Access Management Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privileged access can change identities, policies, infrastructure,
            applications, data controls, and security settings. That higher
            impact makes privileged identity one of the most important places
            to reduce standing trust and strengthen accountability.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays defensive and conceptual. It uses fictional
            privileged roles, synthetic activation records, and safe audit
            metadata only. It does not involve obtaining or using real
            administrator access.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A13: Identity, Zero Trust, and Access Control"
          lessonTitle="Privileged Access Management Concepts"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.6 Entry Readiness"
          items={[
            "I understand RBAC, ABAC, and hybrid access models.",
            "I can distinguish standard access from high-impact administrative access.",
            "I understand time-bounded and contextual policy decisions.",
            "I will use only fictional privileged-access records and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Best Time to Hold Administrative Power Is When an Approved Task Actually Needs It"
        >
          <p className="leading-8">
            A platform engineer may need production administration several
            times a month, but that does not mean the engineer needs permanent
            active administrative capability during every normal work session.
            Privileged access management separates the durable responsibility
            to perform admin work from the temporary state in which high-impact
            privilege becomes active.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Strong PAM asks who is eligible, why privilege is needed now, what it can reach, how long it lasts, and what evidence proves it ended correctly.
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
          eyebrow="Privilege Categories"
          title="Administrative Access Can Affect Different Security Domains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {privilegeCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.examples}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.architectureConcern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Privilege Lifecycle"
          title="Privilege Should Have a Beginning, Middle, and End"
        >
          <div className="grid gap-5">
            {lifecycleStages.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-black text-purple-50">{item.stage}</h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.meaning}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Evidence: {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="PAM Principles"
          title="Eight Principles for Governed Privileged Access"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {pamPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Standing Privilege"
          title="Why Permanently Active Administration Creates Extra Exposure"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {standingPrivilegeRisks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.risk}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Why it matters: {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better approach: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Model"
          title="Eight Evidence Domains for Privileged Access"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.domain}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Examples: {item.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Privileged Access Terms"
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
          eyebrow="Fictional Privileged Access Register"
          title="Seven Northbridge Privileged Identity Records"
        >
          <div className="grid gap-5">
            {privilegedRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.identity}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Privileged role", item.privilege],
                    ["Purpose", item.purpose],
                    ["Eligibility", item.eligibility],
                    ["Approval", item.approval],
                    ["Duration", item.duration],
                    ["Scope", item.scope],
                    ["Environment", item.environment],
                    ["Monitoring", item.monitoring],
                    ["Post-use review", item.postReview],
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
          title="Northbridge Privileged Access Dashboard"
          subtitle="Fictional eligibility, standing privilege, time-bounded activation, and review summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Obsolete Migration Admin Eligibility Still Assigned"
          severity="High"
          time="09:42"
          source="Fictional Privileged Access Review"
          details="PAM-05 belongs to a migration project that has already ended. The privileged eligibility remains assigned even though the approved responsibility no longer exists."
          recommendation="Remove the obsolete eligibility and record the lifecycle closure. Future migration work should use a new approved access request."
        />

        <Section
          eyebrow="Eligibility vs. Active Privilege"
          title="Stable Responsibility Does Not Require Permanent Administrative Power"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                Eligible
              </h3>
              <p className="mt-3 leading-7 text-cyan-100">
                The identity has a current job or service responsibility that
                permits requesting a specific privileged role.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Named identity",
                  "Approved responsibility",
                  "Role eligibility",
                  "Review date",
                  "Owner",
                  "No active privilege required",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-cyan-300/20 bg-slate-950/20 p-3 text-sm text-cyan-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">
                Active privilege
              </h3>
              <p className="mt-3 leading-7 text-purple-100">
                The identity is currently operating with high-impact capability
                for a specific approved task and time window.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Task purpose",
                  "Approver",
                  "Resource scope",
                  "Environment",
                  "Expiration",
                  "Monitoring + post-use review",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-purple-300/20 bg-slate-950/20 p-3 text-sm text-purple-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Privileged Access Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Obsolete Privileged Eligibility"
          question="What is the strongest decision for PAM-05?"
          evidence={[
            "The migration project has ended.",
            "The identity still has migration-admin eligibility.",
            "The original approval was project-specific.",
            "No current migration responsibility exists.",
            "The historical project closure is complete.",
          ]}
          options={[
            "Keep the eligibility forever in case it becomes useful again.",
            "Remove the privileged eligibility because the responsibility that justified it has ended.",
            "Convert eligibility to standing privilege.",
            "Share the eligibility with other teams.",
          ]}
          bestAnswer={1}
          explanation="Privileged eligibility should track current responsibility. Once the project ends, eligibility should be removed unless a new approved purpose exists."
        />

        <Section
          eyebrow="PAM Anti-Patterns"
          title="Eight Ways Privileged Access Becomes Hard to Govern"
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

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Project Ended, Privilege Remains"
          scenario="A migration administrator was legitimately eligible during a project. The project is now closed, but the privileged eligibility is still assigned."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Emergency Access Review"
          scenario="Emergency administrative access was used during a fictional recovery event. The system recovered successfully, but the post-use review is incomplete."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Privileged Access Governance Register"
        >
          <p className="leading-8">
            Use fictional privileged roles, identities, approvals, resources,
            owners, and synthetic audit evidence only. Do not access or modify
            any real privileged account.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional privileged-access records.",
              "Give every record a stable PAM ID.",
              "Record the named principal.",
              "Record the privileged role.",
              "State the approved administrative purpose.",
              "Record whether the principal is Eligible, Requested, Approved, Active, Deactivated, Reviewed, or Retired.",
              "Record the approver.",
              "Record resource scope.",
              "Record environment.",
              "Record activation duration.",
              "Record automatic or manual expiration behavior.",
              "Record monitoring evidence.",
              "Record post-use review status.",
              "Assign privileged-role owner.",
              "Assign resource owner.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Include at least three just-in-time privileged roles.",
              "Include at least two emergency/recovery scenarios.",
              "Include at least two obsolete eligibility findings.",
              "Include at least one shared legacy admin identity and keep it Blocked.",
              "Add change triggers for team, role, project, application, resource, environment, ownership, and recovery-process changes.",
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
              This is a fictional governance exercise. Do not obtain,
              activate, escalate, test, share, or use real administrative
              credentials or privileges. Do not modify any live access-control
              configuration.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Emergency Administrative Access"
          question="What is the strongest status for PAM-03?"
          evidence={[
            "Emergency access was used during a legitimate recovery event.",
            "The activation and administrative audit are available.",
            "The incident stabilized successfully.",
            "The mandatory post-use review is incomplete.",
            "Emergency access is designed to be exceptional.",
          ]}
          options={[
            "Confirmed because the recovery succeeded.",
            "Conditional until the post-use review confirms activity matched the approved emergency purpose.",
            "Blocked forever because emergency access should never exist.",
            "Ignored because emergency sessions are outside normal governance.",
          ]}
          bestAnswer={1}
          explanation="Emergency access can be legitimate, but strong governance requires complete post-use evidence before the session is treated as fully confirmed."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Privileged Access Model"
        >
          <p className="leading-8">
            A fictional organization gives twelve administrators permanent
            production admin roles, uses one shared emergency account, and
            reviews privilege only once a year. Redesign the model
            conceptually so responsibility stays usable while standing
            privilege is reduced.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Named privileged identities",
              "Separate normal and privileged roles",
              "Eligibility instead of continuous privilege",
              "Task-based activation",
              "Resource-specific scope",
              "Environment-specific scope",
              "Approver ownership",
              "Time-bounded activation",
              "Automatic expiration",
              "Privileged session evidence",
              "Administrative audit",
              "Post-use review",
              "Emergency access governance",
              "Emergency access custody",
              "Eligibility review cadence",
              "Lifecycle-triggered removal",
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
            The redesign should preserve legitimate administration while making
            high-impact capability more intentional, temporary, observable, and
            attributable.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.6 Mini Quiz: Privileged Access Management Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Privileged Access Governance Register"
          prompt="Create the sixth artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Privileged Access Governance Register with at least twelve records. Include PAM ID, principal, privileged role, purpose, eligibility state, request/approval state, approver, resource scope, environment, activation duration, expiration, monitoring evidence, post-use review, privileged-role owner, resource owner, status, concern, next action, and lifecycle trigger."
          tips={[
            "Separate eligibility from active privilege.",
            "Include platform, identity, application, data, security, and recovery administration.",
            "Include at least three just-in-time examples.",
            "Include at least two emergency/recovery examples.",
            "Include obsolete eligibility and shared legacy admin findings.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.7?"
        >
          <p className="leading-8">
            A13.7 moves into Identity Logging and Monitoring. Before
            continuing, make sure you can explain which privileged events need
            evidence: eligibility, request, approval, activation, activity,
            deactivation, post-use review, and eligibility lifecycle.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish privileged eligibility from active privilege.",
              "I can explain why standing privilege increases exposure.",
              "I can explain just-in-time privileged activation.",
              "I can explain why emergency access should be exceptional and reviewed.",
              "I can identify the evidence needed to review a privileged session.",
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
          title="How to Make the Privileged Access Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show the privilege state",
                detail:
                  "Make it obvious whether an identity is merely eligible or currently active with administrative power.",
              },
              {
                title: "Show task scope",
                detail:
                  "Record purpose, resource, environment, privilege family, and expected duration.",
              },
              {
                title: "Show approval",
                detail:
                  "The approver should be accountable for the resource or administrative function.",
              },
              {
                title: "Show activation and deactivation",
                detail:
                  "Time-bounded privilege should have clear start and end evidence.",
              },
              {
                title: "Show activity evidence",
                detail:
                  "Use safe administrative metadata that shows meaningful changes without exposing secrets.",
              },
              {
                title: "Show post-use review",
                detail:
                  "Compare approved task scope with observed activity, especially for sensitive or emergency sessions.",
              },
              {
                title: "Show eligibility lifecycle",
                detail:
                  "Role, project, team, service, and ownership changes should trigger eligibility reassessment.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.7 will turn these privileged events into an identity-monitoring coverage model.",
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
            PAM learning does not require obtaining or escalating real privilege
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt privilege escalation, administrator access,
            credential use, authentication bypass, session hijacking, or
            changes to any live identity or administrative system. All
            identities, privileged roles, activations, audits, and review
            evidence in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.6 Privileged Access Management Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a privileged-access model built around eligibility,
            approval, just-in-time activation, task scope, duration, monitoring,
            emergency access, deactivation, post-use review, and eligibility
            lifecycle. Next, A13.7 focuses on Identity Logging and Monitoring.
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