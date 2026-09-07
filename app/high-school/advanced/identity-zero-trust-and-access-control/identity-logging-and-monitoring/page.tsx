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
const previousLesson = `${modulePath}/privileged-access-management-concepts`;
const nextLesson = `${modulePath}/access-reviews-and-governance`;

const objectives = [
  "Explain identity monitoring as an evidence system spanning authentication, authorization, privileged activity, lifecycle, federation, workload identity, policy changes, and source health.",
  "Distinguish event collection, decision context, alerting, evidence freshness, source health, ownership, retention, and review as separate monitoring concerns.",
  "Evaluate fictional identity telemetry for blind spots, stale sources, missing authorization context, weak alert ownership, overcollection, and incomplete privileged evidence.",
  "Connect identity monitoring to zero trust, conditional access, federation, RBAC/ABAC, privileged access, workload identity, access reviews, and governance.",
  "Build an Identity Monitoring Coverage Matrix that becomes the seventh artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const telemetryDomains = [
  {
    domain: "Authentication telemetry",
    purpose:
      "Shows when human or non-human identities successfully or unsuccessfully establish identity context.",
    examples:
      "Workforce sign-in, workload authentication, partner federation sign-in, privileged re-authentication.",
    evidenceQuestion:
      "Can the organization tell which principal authenticated, through which trusted identity path, and when?",
  },
  {
    domain: "Authorization telemetry",
    purpose:
      "Shows which resource/action decision was allowed, denied, limited, stepped up, or reviewed.",
    examples:
      "Portal role decision, workload-to-database policy, partner limited-access decision, environment-boundary denial.",
    evidenceQuestion:
      "Can the organization explain why an authenticated identity could or could not perform the requested action?",
  },
  {
    domain: "Privileged activity telemetry",
    purpose:
      "Shows eligibility changes, activation, high-impact administrative actions, deactivation, and review state.",
    examples:
      "JIT activation, role assignment change, management-plane configuration change, emergency admin use.",
    evidenceQuestion:
      "Can reviewers connect privileged actions to a named principal, approved task, time window, and post-use review?",
  },
  {
    domain: "Identity lifecycle telemetry",
    purpose:
      "Shows creation, role changes, sponsor changes, suspension, revocation, expiration, and retirement.",
    examples:
      "Workforce role change, partner expiration, project closure, workload retirement, admin eligibility removal.",
    evidenceQuestion:
      "Can the monitoring model detect when access should change because the identity lifecycle changed?",
  },
  {
    domain: "Federation and SSO telemetry",
    purpose:
      "Shows trust health, federated sign-ins, identity-provider relationships, and relying-service use.",
    examples:
      "Federation health, partner SSO, relying-service authorization, provider-change record.",
    evidenceQuestion:
      "Can the organization see both identity-provider health and downstream application authorization?",
  },
  {
    domain: "Workload identity telemetry",
    purpose:
      "Shows service-to-service authentication and resource access for non-human principals.",
    examples:
      "Application workload to database, staging workload to analytics dataset, service-to-storage access.",
    evidenceQuestion:
      "Can a reviewer distinguish workload identity activity from ordinary user activity?",
  },
  {
    domain: "Policy-change telemetry",
    purpose:
      "Shows changes to access rules, role definitions, attribute logic, conditional-access decisions, and exceptions.",
    examples:
      "Role scope change, policy precedence update, attribute-source change, exception creation or closure.",
    evidenceQuestion:
      "Can the team tell when the rules that control identity access changed?",
  },
  {
    domain: "Source-health telemetry",
    purpose:
      "Shows whether identity evidence sources themselves are current, delayed, stale, partial, or unavailable.",
    examples:
      "Identity feed health, device-context feed delay, federation log gap, privileged audit source stale.",
    evidenceQuestion:
      "Can the organization distinguish no event from no evidence source?",
  },
];

const evidenceStates = [
  {
    state: "Current",
    meaning:
      "The source is available, timely, and recent enough for the decision being supported.",
    implication:
      "Evidence can support current architecture conclusions when other context is also valid.",
  },
  {
    state: "Delayed",
    meaning:
      "The source is functioning but arrives later than expected.",
    implication:
      "The team may need a more cautious decision for time-sensitive access or incident response.",
  },
  {
    state: "Partial",
    meaning:
      "Some relevant identity events are available but important context is missing.",
    implication:
      "Do not claim complete coverage; document exactly what remains unseen.",
  },
  {
    state: "Stale",
    meaning:
      "The source is too old to confidently represent current identity state.",
    implication:
      "Move the related conclusion to Conditional, Unknown, or another defined fallback.",
  },
  {
    state: "Missing",
    meaning:
      "The expected source is not available.",
    implication:
      "Treat the coverage gap as a finding and avoid interpreting silence as safety.",
  },
  {
    state: "Unknown",
    meaning:
      "The team cannot determine whether the evidence source is functioning or complete.",
    implication:
      "Escalate uncertainty into governance instead of silently trusting it.",
  },
];

const monitoringPrinciples = [
  {
    title: "Monitor decisions, not just logins",
    meaning:
      "Authentication is only the beginning. Identity monitoring should also show which resources and actions were authorized or denied.",
    review:
      "Can the team explain what the identity did after sign-in?",
  },
  {
    title: "Privileged activity needs stronger context",
    meaning:
      "High-impact actions should be tied to eligibility, activation, task scope, duration, and post-use review.",
    review:
      "Can each admin action be connected to an approved privileged session?",
  },
  {
    title: "Source health is part of security evidence",
    meaning:
      "A monitoring program is unreliable if it cannot tell whether its own identity sources are stale or missing.",
    review:
      "Can the team distinguish no suspicious activity from no telemetry?",
  },
  {
    title: "Alert ownership matters",
    meaning:
      "An alert is useful only if someone is accountable for reviewing it and deciding what happens next.",
    review:
      "Who owns triage and what is the expected response?",
  },
  {
    title: "Evidence should match the question",
    meaning:
      "Monitoring should collect the metadata needed for review rather than everything that might possibly be available.",
    review:
      "Does each source support a real identity or governance decision?",
  },
  {
    title: "Minimize sensitive content",
    meaning:
      "Identity logs should avoid passwords, secrets, full tokens, or unnecessary personal data.",
    review:
      "Can the decision be explained using safe metadata instead?",
  },
  {
    title: "Retention should support review",
    meaning:
      "Identity evidence should remain available long enough to support access reviews, incident investigation, governance, and audit needs.",
    review:
      "Is retention aligned with the decisions the organization expects to make?",
  },
  {
    title: "Coverage should include lifecycle",
    meaning:
      "A strong monitoring system observes identity creation, change, expiration, revocation, and retirement as well as active use.",
    review:
      "Can the team see when access should end, not just when it is used?",
  },
];

const alertDesign = [
  {
    scenario: "Privileged activation without expected approval evidence",
    severity: "High",
    context:
      "Named principal, privileged role, target resource, activation time, approval reference, session state.",
    owner:
      "Identity Security / Platform Security",
    action:
      "Review the activation evidence and confirm whether the privileged session is authorized.",
  },
  {
    scenario: "External identity reaches review date",
    severity: "Medium",
    context:
      "Partner identity, sponsor, relying service, current role, review due date, recent activity.",
    owner:
      "Application Owner / Sponsor",
    action:
      "Renew, reduce, or remove access based on current business need.",
  },
  {
    scenario: "Staging workload requests production resource",
    severity: "High",
    context:
      "Workload identity, source environment, destination resource, policy decision, application owner.",
    owner:
      "Application Security / Data Platform",
    action:
      "Confirm denial and review whether the request reflects misconfiguration or changed architecture.",
  },
  {
    scenario: "Identity evidence source becomes stale",
    severity: "High",
    context:
      "Source name, last healthy event, expected cadence, dependent policies, fallback decision.",
    owner:
      "Identity Platform / Monitoring Owner",
    action:
      "Restore source health and move dependent conclusions to the defined fallback state.",
  },
  {
    scenario: "Privileged eligibility remains after role change",
    severity: "High",
    context:
      "Identity, former team/role, privileged eligibility, role-change event, resource owner.",
    owner:
      "Privileged Access Governance",
    action:
      "Review and remove obsolete eligibility unless a new approved responsibility exists.",
  },
  {
    scenario: "Policy changed outside expected review window",
    severity: "Medium",
    context:
      "Policy ID, previous version, new version, change owner, approval record, impacted applications.",
    owner:
      "Policy Owner / Security Governance",
    action:
      "Validate the change and ensure resulting access decisions still match intent.",
  },
];

const vocabulary = [
  {
    term: "Identity telemetry",
    definition:
      "Safe evidence about identity authentication, authorization, lifecycle, privilege, federation, policy, workload, and source health.",
  },
  {
    term: "Authorization event",
    definition:
      "A record showing a resource/action decision such as allow, deny, step-up, limited, or review.",
  },
  {
    term: "Source health",
    definition:
      "Evidence showing whether a telemetry source is current, delayed, stale, partial, missing, or Unknown.",
  },
  {
    term: "Coverage gap",
    definition:
      "A missing or incomplete telemetry area that prevents the organization from confidently answering a security question.",
  },
  {
    term: "Alert context",
    definition:
      "The identity, resource, policy, time, owner, and evidence information needed to understand an alert.",
  },
  {
    term: "Alert owner",
    definition:
      "The person or team accountable for reviewing and acting on an identity-related alert.",
  },
  {
    term: "Evidence freshness",
    definition:
      "How recent the evidence is compared with the decision it is expected to support.",
  },
  {
    term: "Decision logging",
    definition:
      "Recording safe metadata about why an access request was allowed, denied, limited, stepped up, or reviewed.",
  },
  {
    term: "Lifecycle event",
    definition:
      "An identity state change such as creation, role change, expiration, revocation, suspension, or retirement.",
  },
  {
    term: "Monitoring blind spot",
    definition:
      "An identity or access path that exists without enough evidence for review.",
  },
  {
    term: "Retention",
    definition:
      "The period identity telemetry remains available for operational, governance, review, or investigation purposes.",
  },
  {
    term: "Evidence minimization",
    definition:
      "Collecting the least sensitive data necessary to support the monitoring and governance decision.",
  },
];

const monitoringRecords = [
  {
    id: "MON-01",
    domain: "Workforce authentication + portal authorization",
    source: "Fictional Workforce Identity + Student Services App Logs",
    identity: "Counselor Workforce Group",
    resource: "Student Services Portal",
    events: "Sign-in + role authorization + application action summary",
    freshness: "Current",
    owner: "Identity Team + Student Services Application Owner",
    alerting: "Unexpected role denial / repeated access mismatch",
    retention: "Aligned to quarterly access review",
    status: "Confirmed",
    concern:
      "Authentication and authorization are both visible.",
  },
  {
    id: "MON-02",
    domain: "Privileged activation and admin activity",
    source: "Fictional Privileged Access + Management Audit",
    identity: "Platform Administrator",
    resource: "Cloud Management Plane",
    events: "Eligibility + activation + admin change + deactivation + post-review state",
    freshness: "Current",
    owner: "Platform Security",
    alerting: "Activation without expected approval / privilege outside window",
    retention: "Aligned to privileged-review requirements",
    status: "Confirmed",
    concern:
      "Emergency-session post-review remains a separate governance condition.",
  },
  {
    id: "MON-03",
    domain: "External federation and application use",
    source: "Fictional Partner Federation + Scheduling Console Logs",
    identity: "Scheduling Partner Support",
    resource: "Scheduling Integration Console",
    events: "Federated sign-in + app authorization + sponsor/review state",
    freshness: "Current",
    owner: "Integration Owner",
    alerting: "Review due / sponsor removed / unexpected function request",
    retention: "Aligned to partner access review",
    status: "Conditional",
    concern:
      "Access review is due in 30 days.",
  },
  {
    id: "MON-04",
    domain: "Workload authentication and database authorization",
    source: "Fictional Workload Identity + Database Access Logs",
    identity: "Student Portal Workload",
    resource: "Student Support Database",
    events: "Workload authentication + resource authorization + environment context",
    freshness: "Current",
    owner: "Application + Data Platform",
    alerting: "Environment mismatch / unexpected resource request",
    retention: "Aligned to application review",
    status: "Confirmed",
    concern:
      "Workload telemetry is distinguishable from human identity activity.",
  },
  {
    id: "MON-05",
    domain: "Sensitive export policy evidence",
    source: "Fictional Reporting Policy + Device Context Feed",
    identity: "Reporting Analyst",
    resource: "Sensitive Report Export",
    events: "Identity + policy decision + device context + export outcome",
    freshness: "Device feed stale",
    owner: "Analytics Product Owner + Identity Platform",
    alerting: "Stale device evidence / sensitive export review",
    retention: "Aligned to sensitive data governance",
    status: "Unknown",
    concern:
      "A stale device-context feed means current automated decisions cannot be fully trusted.",
  },
  {
    id: "MON-06",
    domain: "Identity lifecycle and privileged eligibility",
    source: "Fictional Workforce Lifecycle + PAM Eligibility Feed",
    identity: "Former Migration Project Administrator",
    resource: "Migration Admin Eligibility",
    events: "Project close + role change + privileged eligibility state",
    freshness: "Current",
    owner: "Privileged Access Governance",
    alerting: "Eligibility remains after project closure",
    retention: "Aligned to privileged lifecycle review",
    status: "Blocked",
    concern:
      "Monitoring correctly exposes obsolete eligibility that still needs removal.",
  },
  {
    id: "MON-07",
    domain: "Legacy reporting identity",
    source: "Historical Application Audit",
    identity: "Legacy Shared Admin / Reporting Account",
    resource: "Legacy Reporting Application",
    events: "Partial authentication + partial admin activity",
    freshness: "Partial",
    owner: "Unknown",
    alerting: "None reliable",
    retention: "Unknown",
    status: "Blocked",
    concern:
      "Missing ownership and incomplete telemetry prevent confident governance.",
  },
];

const dashboardMetrics = [
  {
    label: "Monitoring domains reviewed",
    value: "7",
    note: "Workforce, privileged, external, workload, sensitive policy, lifecycle, and legacy monitoring",
  },
  {
    label: "Current sources",
    value: "5",
    note: "Most modern identity and authorization sources are current",
  },
  {
    label: "Stale / partial sources",
    value: "2",
    note: "Sensitive export device context is stale and legacy telemetry is partial",
  },
  {
    label: "Coverage blockers",
    value: "1",
    note: "Legacy identity monitoring lacks current ownership and sufficient evidence",
  },
];

const logs = [
  "[08:02] MON-01 counselor authn=CURRENT authz=ROLE_ALLOWED source_health=CURRENT state=CONFIRMED",
  "[08:26] MON-02 platform-admin activation=JIT admin_audit=CURRENT state=CONFIRMED",
  "[08:49] MON-03 partner federation=CURRENT review_due=30d state=CONDITIONAL",
  "[09:14] MON-04 portal-workload authn=WORKLOAD env=PROD authz=APP_SCOPE state=CONFIRMED",
  "[09:39] MON-05 sensitive-export device_feed=STALE policy_outcome=REVIEW state=UNKNOWN",
  "[10:03] MON-06 migration-admin project=CLOSED eligibility=STILL_ASSIGNED alert=OPEN state=BLOCKED",
  "[10:28] MON-07 legacy-admin telemetry=PARTIAL owner=UNKNOWN alerting=NONE state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Only successful logins are monitored",
    problem:
      "The organization can see authentication but not resource authorization, denied requests, or privilege decisions.",
    better:
      "Monitor the identity-to-resource decision path, not just sign-in.",
  },
  {
    title: "No source-health monitoring",
    problem:
      "A broken telemetry source looks like a quiet environment.",
    better:
      "Monitor whether identity evidence sources are current and complete.",
  },
  {
    title: "Privileged logs lack task context",
    problem:
      "Admin actions exist in isolation without approval, resource scope, or activation evidence.",
    better:
      "Link privilege activity to eligibility, activation, task, and review metadata.",
  },
  {
    title: "Alerts have no owner",
    problem:
      "Important identity findings appear but nobody is accountable for response.",
    better:
      "Assign clear alert ownership and expected action.",
  },
  {
    title: "Monitoring collects credentials",
    problem:
      "Logs contain secrets, tokens, or unnecessary sensitive data.",
    better:
      "Use safe metadata that explains identity decisions without exposing credentials.",
  },
  {
    title: "Retention is shorter than review cadence",
    problem:
      "Evidence disappears before quarterly or annual governance reviews occur.",
    better:
      "Align retention with operational and governance needs.",
  },
  {
    title: "Lifecycle changes are invisible",
    problem:
      "The team sees access use but not project closure, sponsor loss, role change, or retirement.",
    better:
      "Monitor identity lifecycle events as first-class security evidence.",
  },
  {
    title: "Unknown evidence becomes Confirmed",
    problem:
      "A stale or partial source is treated as if it proves current safety.",
    better:
      "Keep evidence state visible and use Conditional, Unknown, or Blocked where appropriate.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the sensitive-export monitoring state Unknown until the stale device-context source is restored or the documented fallback policy supports a safe decision.",
    outcome:
      "Best. Source health is part of the evidence, so stale context should remain visible.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat the device feed as current because no alerts were generated.",
    outcome:
      "Risky. Silence does not prove the source is healthy.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Disable device-context monitoring entirely without updating policy.",
    outcome:
      "Risky. That would create hidden drift between intended and actual decision evidence.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Escalate the obsolete privileged eligibility finding to its owner and require removal or documented re-approval.",
    outcome:
      "Best. Monitoring is valuable when it drives lifecycle correction.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Ignore the finding because the former administrator has not used the role recently.",
    outcome:
      "Risky. Unused privilege can still remain available and should be governed.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the role assigned forever but create an informational note.",
    outcome:
      "Risky. A note does not replace lifecycle action.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why should identity monitoring include authorization telemetry in addition to authentication?",
    choices: [
      "Because a successful sign-in does not explain which resources and actions were allowed or denied.",
      "Because authentication logs are never useful.",
      "Because authorization applies only to administrators.",
      "Because federation removes the need for application monitoring.",
    ],
    answer: 0,
    explanation:
      "Authentication identifies the principal; authorization telemetry explains the resource/action decision.",
  },
  {
    question:
      "What does source health tell a monitoring team?",
    choices: [
      "Whether the identity telemetry source itself is current, delayed, stale, partial, missing, or Unknown.",
      "Whether every user is trusted.",
      "Whether all access should be allowed.",
      "Whether an application has backups.",
    ],
    answer: 0,
    explanation:
      "Without source-health evidence, a quiet source may be mistaken for a quiet environment.",
  },
  {
    question:
      "What is strongest for privileged monitoring?",
    choices: [
      "Log only that an admin signed in.",
      "Connect eligibility, request, approval, activation, administrative activity, deactivation, and post-use review.",
      "Disable logging during admin sessions.",
      "Use one shared administrator identity.",
    ],
    answer: 1,
    explanation:
      "Privileged evidence should support the full lifecycle of high-impact access.",
  },
  {
    question:
      "A device-context feed used for sensitive export policy is stale. What is the strongest monitoring conclusion?",
    choices: [
      "Treat the feed as current.",
      "Keep the related conclusion Unknown/Conditional until the source or defined fallback is restored.",
      "Ignore the policy.",
      "Allow all exports permanently.",
    ],
    answer: 1,
    explanation:
      "Stale evidence should remain visible instead of being silently trusted.",
  },
  {
    question:
      "Why does alert ownership matter?",
    choices: [
      "Because alerts need an accountable person or team to review and act on them.",
      "Because alerts are self-resolving.",
      "Because every alert should go only to executives.",
      "Because ownership replaces monitoring.",
    ],
    answer: 0,
    explanation:
      "A technically correct alert has little value if nobody owns the response.",
  },
  {
    question:
      "What is a good reason to minimize identity log content?",
    choices: [
      "To avoid collecting secrets, tokens, or unnecessary personal data while still preserving decision evidence.",
      "To make all logs impossible to review.",
      "To remove timestamps.",
      "To hide privileged activity.",
    ],
    answer: 0,
    explanation:
      "Identity monitoring should use the least sensitive metadata needed to support security decisions.",
  },
  {
    question:
      "A project has ended but privileged eligibility remains assigned. What should identity monitoring help trigger?",
    choices: [
      "Removal or re-approval of the obsolete eligibility.",
      "Permanent standing privilege.",
      "No action unless the role is used.",
      "Deletion of all identity logs.",
    ],
    answer: 0,
    explanation:
      "Lifecycle monitoring should surface stale eligibility before it becomes ungoverned standing access.",
  },
];

const checklistItems = [
  "Authentication telemetry covers human and workload identities.",
  "Authorization decisions are logged for important resources.",
  "Allow, deny, step-up, limited, and review outcomes are distinguishable.",
  "Privileged activation is observable.",
  "Privileged administrative actions are attributable to named identities.",
  "Deactivation and post-use review states are observable.",
  "Identity lifecycle events are monitored.",
  "Partner sponsor/review changes are observable.",
  "Federation health is monitored.",
  "Relying-service authorization is monitored separately from federation.",
  "Workload identity activity is distinguishable from user activity.",
  "Policy changes are observable.",
  "Source health is monitored.",
  "Stale or missing sources produce visible evidence states.",
  "Alerts include enough identity/resource context for triage.",
  "Every important alert has an accountable owner.",
  "Retention supports the intended governance review cadence.",
  "Logs avoid passwords, secrets, tokens, and unnecessary personal data.",
  "Coverage gaps are documented as findings.",
  "No lesson activity requires accessing or manipulating any real identity telemetry source.",
];

const takeaways = [
  "Identity monitoring should cover authentication and authorization, not only sign-ins.",
  "Privileged monitoring should connect eligibility, activation, activity, deactivation, and post-use review.",
  "Identity lifecycle events are security evidence because access should change when roles, sponsors, projects, or services change.",
  "Federation monitoring should include both trust health and relying-service authorization.",
  "Workload identities need their own service-to-resource telemetry.",
  "Source health helps distinguish no suspicious event from no evidence source.",
  "Alerts are useful only when they include context and have accountable owners.",
  "Identity logs should preserve safe decision metadata while minimizing secrets and unnecessary personal data.",
  "Coverage gaps and stale evidence should remain visible as Conditional, Unknown, or Blocked.",
  "The Identity Monitoring Coverage Matrix will support A13.8 Access Reviews and Governance.",
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

export default function IdentityLoggingAndMonitoringPage() {
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
              A13.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Identity Logging and Monitoring
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Identity controls are only as reviewable as the evidence they
            produce. Strong monitoring shows authentication, authorization,
            privileged activity, lifecycle changes, federation, workload
            identity, policy changes, source health, and alert ownership.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses synthetic identity events and fictional monitoring
            records only. It does not require accessing any real log platform,
            identity provider, account, or production monitoring system.
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
          lessonTitle="Identity Logging and Monitoring"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.7 Entry Readiness"
          items={[
            "I understand authentication, authorization, federation, and privileged-access concepts.",
            "I can explain why identity lifecycle affects access.",
            "I understand that stale evidence should not be treated as current.",
            "I will use only fictional monitoring records and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Control You Cannot Observe Is Hard to Defend or Govern"
        >
          <p className="leading-8">
            A workforce identity may authenticate correctly, a workload may
            receive a database decision, and an administrator may activate
            privilege exactly as designed. But if the organization cannot see
            those decisions, confirm source health, connect them to owners, and
            retain evidence long enough for review, the architecture becomes
            difficult to verify.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Identity monitoring should answer what happened, why the decision happened, whether the evidence is healthy, and who owns the next action.
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
          eyebrow="Telemetry Domains"
          title="Eight Identity Evidence Domains"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {telemetryDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                    Examples
                  </p>
                  <p className="mt-2 text-sm leading-7 text-blue-50">
                    {item.examples}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidenceQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence States"
          title="Freshness Changes How Much Confidence a Log Source Deserves"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.state}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Architecture implication: {item.implication}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Monitoring Principles"
          title="Eight Principles for Strong Identity Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {monitoringPrinciples.map((item) => (
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
          eyebrow="Alert Design"
          title="Alerts Need Context, Ownership, and a Real Decision"
        >
          <div className="grid gap-5">
            {alertDesign.map((item) => (
              <article
                key={item.scenario}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.severity}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {item.scenario}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Context
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.context}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.owner}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Expected action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.action}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Identity Monitoring Terms"
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
          eyebrow="Fictional Monitoring Register"
          title="Seven Northbridge Identity Monitoring Records"
        >
          <div className="grid gap-5">
            {monitoringRecords.map((item) => (
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
                  {item.domain}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Source", item.source],
                    ["Identity", item.identity],
                    ["Resource", item.resource],
                    ["Events", item.events],
                    ["Freshness", item.freshness],
                    ["Owner", item.owner],
                    ["Alerting", item.alerting],
                    ["Retention", item.retention],
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
          title="Northbridge Identity Monitoring Dashboard"
          subtitle="Fictional telemetry coverage, freshness, and governance summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Sensitive Export Context Source Is Stale"
          severity="High"
          time="09:39"
          source="Fictional Identity Monitoring Review"
          details="MON-05 depends on a device-context source that is stale. The workforce identity is current, but the evidence needed for the sensitive-export decision is not fully reliable."
          recommendation="Keep the decision in Review/Unknown until source health is restored or the documented fallback policy supports a safe outcome."
        />

        <Section
          eyebrow="Source Health"
          title="No Event Is Not the Same as No Source"
        >
          <p className="leading-8">
            Identity teams often focus on the content of logs but forget to
            monitor whether the log source itself is healthy. That creates one
            of the most dangerous interpretation errors in monitoring: assuming
            silence means nothing happened when the real problem is that the
            source stopped reporting.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Healthy source",
                detail:
                  "Expected identity events arrive within normal timing and coverage.",
              },
              {
                title: "Delayed source",
                detail:
                  "Events still arrive but may be too late for time-sensitive decisions.",
              },
              {
                title: "Partial source",
                detail:
                  "Some event classes are visible while other required context is missing.",
              },
              {
                title: "Stale source",
                detail:
                  "The most recent evidence is too old to support a current decision.",
              },
              {
                title: "Missing source",
                detail:
                  "Expected telemetry is unavailable and should be treated as a coverage gap.",
              },
              {
                title: "Unknown source health",
                detail:
                  "The team cannot establish whether the evidence feed is functioning.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Identity Monitoring Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Stale Device Context"
          question="What is the strongest conclusion for MON-05?"
          evidence={[
            "The reporting analyst identity is current.",
            "The requested action is a sensitive export.",
            "The conditional-access policy depends on device context.",
            "The device-context source is stale.",
            "The current fallback decision is Review/Unknown.",
          ]}
          options={[
            "Treat the device source as current because the user is valid.",
            "Keep the decision Review/Unknown until source health or the documented fallback supports a confident decision.",
            "Disable monitoring without changing policy.",
            "Allow all sensitive exports permanently.",
          ]}
          bestAnswer={1}
          explanation="Monitoring evidence is part of the access decision. Stale source health should remain visible instead of being converted into assumed trust."
        />

        <Section
          eyebrow="Monitoring Anti-Patterns"
          title="Eight Ways Identity Monitoring Creates False Confidence"
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
          title="Scenario Decision Lab 1 — Stale Identity Evidence Source"
          scenario="A sensitive export policy depends on device context, but the device-context source is stale. The identity itself is current and no suspicious alerts have appeared."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Obsolete Privileged Eligibility"
          scenario="Monitoring shows a former migration administrator still has privileged eligibility after the project closed. The role has not been used recently."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Identity Monitoring Coverage Matrix"
        >
          <p className="leading-8">
            Use fictional identities, sources, owners, alerts, and synthetic
            telemetry only. Do not access any real SIEM, identity provider, log
            store, or production monitoring system.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional identity-monitoring records.",
              "Give every record a stable MON ID.",
              "Record the identity domain.",
              "Record source name.",
              "Record principal type.",
              "Record resource or application.",
              "Record event types collected.",
              "Record evidence freshness.",
              "Record source-health state.",
              "Record alert conditions.",
              "Assign alert owner.",
              "Assign source owner.",
              "Record retention need.",
              "Record privacy/minimization note.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Not Applicable.",
              "Include authentication coverage.",
              "Include authorization coverage.",
              "Include privileged-access coverage.",
              "Include federation coverage.",
              "Include workload-identity coverage.",
              "Include lifecycle coverage.",
              "Include policy-change coverage.",
              "Include source-health coverage.",
              "Include at least two stale/partial evidence scenarios.",
              "Include at least one unowned legacy monitoring gap and keep it Blocked.",
              "Add change triggers for role, source, provider, application, policy, owner, environment, and retention changes.",
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
              Use fictional logs and safe metadata only. Do not collect real
              credentials, tokens, account exports, private logs, or production
              identity telemetry. Do not access or modify any live monitoring
              configuration.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Obsolete Eligibility Alert"
          question="What is the strongest response to MON-06?"
          evidence={[
            "The migration project is closed.",
            "The former administrator still has privileged eligibility.",
            "The lifecycle source is current.",
            "The monitoring alert is open.",
            "No new approved migration responsibility exists.",
          ]}
          options={[
            "Ignore the alert because the role has not been used recently.",
            "Escalate to the privileged-access owner and remove or explicitly re-approve the eligibility.",
            "Convert the eligibility to standing privilege.",
            "Disable the alert.",
          ]}
          bestAnswer={1}
          explanation="Monitoring should drive lifecycle action. Current evidence shows the justification ended, so the privileged relationship should be closed or formally re-approved."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Monitoring Model for a Fictional Identity Program"
        >
          <p className="leading-8">
            A fictional organization currently collects workforce sign-ins but
            does not log authorization decisions, privilege activation,
            workload identity, partner lifecycle, policy changes, or source
            health. Redesign the monitoring model conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Workforce authentication telemetry",
              "Application authorization telemetry",
              "Privileged eligibility changes",
              "Privileged activation",
              "Administrative activity",
              "Deactivation and post-use review",
              "Federation health",
              "Partner sign-in and authorization",
              "Workload authentication",
              "Workload resource access",
              "Identity lifecycle events",
              "Policy changes",
              "Exception changes",
              "Source-health monitoring",
              "Alert ownership",
              "Retention and minimization",
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
            A strong design should let another reviewer reconstruct identity
            decisions without relying on secrets, full tokens, or unnecessary
            personal data.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.7 Mini Quiz: Identity Logging and Monitoring"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Identity Monitoring Coverage Matrix"
          prompt="Create the seventh artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Identity Monitoring Coverage Matrix with at least twelve records. Include MON ID, telemetry domain, source, principal type, resource/application, event types, evidence freshness, source health, alert conditions, alert owner, source owner, retention, minimization note, status, concern, next action, and change trigger."
          tips={[
            "Include authentication and authorization as separate coverage areas.",
            "Include privileged, federation, workload, lifecycle, and policy-change telemetry.",
            "Include source health as its own evidence domain.",
            "Include at least two stale or partial source scenarios.",
            "Keep one legacy coverage gap Blocked.",
            "Use safe fictional metadata only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.8?"
        >
          <p className="leading-8">
            A13.8 moves into Access Reviews and Governance. Before continuing,
            make sure you can explain how monitoring evidence supports the
            question every access review must answer: should this identity
            still have this access now?
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish authentication telemetry from authorization telemetry.",
              "I can explain why privileged evidence needs more context.",
              "I can explain source health and evidence freshness.",
              "I can identify monitoring blind spots and ownership gaps.",
              "I can explain how identity monitoring supports lifecycle and governance decisions.",
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
          title="How to Make the Monitoring Coverage Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the decision",
                detail:
                  "Identify which identity or governance question each source is supposed to answer.",
              },
              {
                title: "Separate authn and authz",
                detail:
                  "Do not treat a successful sign-in as proof of what the user or workload did inside the resource.",
              },
              {
                title: "Show source health",
                detail:
                  "Current, Delayed, Partial, Stale, Missing, and Unknown should remain visible.",
              },
              {
                title: "Show alert ownership",
                detail:
                  "Every high-value alert should have a person or team accountable for triage and closure.",
              },
              {
                title: "Show lifecycle coverage",
                detail:
                  "Include creation, role change, sponsor change, expiration, revocation, and retirement events.",
              },
              {
                title: "Show privacy restraint",
                detail:
                  "Use safe identity and decision metadata without credentials, full tokens, or unnecessary personal data.",
              },
              {
                title: "Keep gaps visible",
                detail:
                  "A missing source should remain a finding instead of being hidden by a green dashboard.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.8 will use these monitoring records as evidence during access review and governance decisions.",
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
            Identity-monitoring learning does not require accessing real logs
          </h2>
          <p className="mt-3 leading-7">
            Do not access private identity logs, production SIEM platforms,
            real account telemetry, tokens, credentials, or live monitoring
            systems. Do not attempt account enumeration, authentication bypass,
            privilege escalation, or session manipulation. All telemetry and
            evidence in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.7 Identity Logging and Monitoring Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an identity-monitoring model built around
            authentication, authorization, privilege, lifecycle, federation,
            workload identity, policy changes, source health, alert ownership,
            retention, and evidence minimization. Next, A13.8 focuses on Access
            Reviews and Governance.
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