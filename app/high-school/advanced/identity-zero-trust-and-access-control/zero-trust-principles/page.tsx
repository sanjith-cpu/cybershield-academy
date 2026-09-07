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
const previousLesson = `${modulePath}/identity-as-a-security-perimeter`;
const nextLesson = `${modulePath}/federation-and-single-sign-on-concepts`;

const objectives = [
  "Explain zero trust as an architecture strategy that reduces assumed trust through explicit verification, least privilege, bounded access, continuous evidence, and policy-aware decisions.",
  "Distinguish identity verification, resource authorization, contextual access, segmentation, session evaluation, monitoring, and lifecycle review as related but separate zero-trust capabilities.",
  "Evaluate fictional access relationships for excessive standing trust, missing context, weak ownership, stale evidence, overbroad access, and unreviewed exceptions.",
  "Connect zero-trust principles to human identity, workload identity, privileged access, device and session context, application sensitivity, monitoring, and governance.",
  "Build a Zero Trust Principles Assessment that becomes the second artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const principles = [
  {
    principle: "Verify explicitly",
    meaning:
      "Access decisions should use relevant identity and policy evidence rather than assuming trust because the user or workload is already inside a network or organization.",
    architectureQuestion:
      "What evidence supports the identity, resource, action, environment, and current access decision?",
    evidence:
      "Authentication context, workload identity, policy result, resource sensitivity, role, session context, and monitoring.",
  },
  {
    principle: "Use least privilege",
    meaning:
      "Grant only the access required for the approved purpose, resource, action, environment, and time window.",
    architectureQuestion:
      "What is the smallest practical access scope that still supports the business or service need?",
    evidence:
      "Role or entitlement scope, access review, task duration, approval, resource ownership, and activity evidence.",
  },
  {
    principle: "Assume trust can change",
    meaning:
      "A valid access relationship today may become inappropriate after role, device, project, service, provider, or risk-context changes.",
    architectureQuestion:
      "What events should cause the access decision to be reviewed or changed?",
    evidence:
      "Lifecycle triggers, device/session state, role changes, project end, policy updates, and owner review.",
  },
  {
    principle: "Protect each resource",
    meaning:
      "A successful sign-in to one application should not automatically create access to unrelated services or data.",
    architectureQuestion:
      "Which resource-specific authorization decision protects each important service or dataset?",
    evidence:
      "Application authorization, service roles, workload permissions, data access policy, and environment scope.",
  },
  {
    principle: "Limit standing privilege",
    meaning:
      "High-impact administrative access should not remain continuously available when it is only needed for occasional tasks.",
    architectureQuestion:
      "Can privileged capability be time-bounded, separately approved, and reviewed after use?",
    evidence:
      "Privileged activation records, approval, duration, session evidence, and post-use review.",
  },
  {
    principle: "Use workload identity",
    meaning:
      "Applications and services should authenticate as named non-human principals rather than depending only on network location or shared secrets.",
    architectureQuestion:
      "Does the service have a distinct workload identity with resource-specific authorization?",
    evidence:
      "Workload binding, service owner, resource policy, deployment relationship, and service-access logs.",
  },
  {
    principle: "Observe and reassess",
    meaning:
      "Identity and policy decisions should be supported by current telemetry, lifecycle evidence, and source health.",
    architectureQuestion:
      "Can the organization tell whether the identity, policy, and activity evidence are still current?",
    evidence:
      "Authentication, authorization, policy-change, privileged-action, workload, review, and source-health telemetry.",
  },
  {
    principle: "Make exceptions explicit",
    meaning:
      "A temporary deviation from the preferred access model should have an owner, reason, risk, review date, and target state.",
    architectureQuestion:
      "Is this access intentionally exceptional, or is it simply ungoverned drift?",
    evidence:
      "Exception record, owner, expiration, compensating control, approval, and closure requirement.",
  },
];

const trustAssumptions = [
  {
    assumption: "Inside the corporate network means trusted",
    problem:
      "Network location does not prove the identity, business purpose, or authorization for a resource.",
    better:
      "Use identity and resource-specific authorization even on private networks.",
  },
  {
    assumption: "Authenticated once means trusted everywhere",
    problem:
      "A valid sign-in to one service does not justify access to every application or dataset.",
    better:
      "Evaluate authorization at each important resource boundary.",
  },
  {
    assumption: "Administrator means permanent admin",
    problem:
      "Continuous standing privilege increases the impact of mistakes, misuse, or identity compromise.",
    better:
      "Use separate, time-bounded privileged activation where practical.",
  },
  {
    assumption: "Same team means same environment access",
    problem:
      "Team ownership does not automatically justify staging identities accessing production resources.",
    better:
      "Keep environment-specific identity and resource scope.",
  },
  {
    assumption: "Partner is under contract, so broad access is fine",
    problem:
      "Business trust does not remove the need for narrow technical scope, sponsorship, monitoring, and review.",
    better:
      "Use explicit external identity, bounded resource access, and lifecycle governance.",
  },
  {
    assumption: "No alerts means everything is safe",
    problem:
      "Silence is not strong evidence when telemetry sources may be stale or incomplete.",
    better:
      "Monitor both identity events and source health.",
  },
];

const decisionContexts = [
  {
    context: "Identity confidence",
    question:
      "Is the principal the expected human or workload identity?",
    examples:
      "Workforce identity, workload identity, external identity, privileged identity, federation relationship.",
  },
  {
    context: "Resource sensitivity",
    question:
      "How important or sensitive is the requested application, data, control plane, or service?",
    examples:
      "Public content, internal application, sensitive report storage, restricted student-support data, management plane.",
  },
  {
    context: "Privilege level",
    question:
      "Is the requested action standard, sensitive, or administrative?",
    examples:
      "Read application data, update workflow, manage identity policy, change infrastructure configuration.",
  },
  {
    context: "Environment",
    question:
      "Is the access request for development, staging, production, or recovery?",
    examples:
      "Staging workload to staging data, production workload to production database, temporary recovery operator.",
  },
  {
    context: "Device or session context",
    question:
      "Does the policy consider relevant session or managed-device context without treating it as the only control?",
    examples:
      "Approved managed device, expected session posture, step-up requirement, temporary session restriction.",
  },
  {
    context: "Time and lifecycle",
    question:
      "Is access still appropriate at this moment and within its approved duration?",
    examples:
      "Temporary migration window, partner expiration, privileged activation window, workforce role change.",
  },
  {
    context: "Behavior and monitoring",
    question:
      "Does current activity or evidence suggest the access relationship should be reviewed?",
    examples:
      "Unexpected administrative activity, inactive external identity, stale source, unusual resource request.",
  },
  {
    context: "Ownership and policy",
    question:
      "Who is accountable for the identity, resource, policy, exception, and next decision?",
    examples:
      "Service owner, identity owner, sponsor, platform owner, risk owner.",
  },
];

const vocabulary = [
  {
    term: "Zero trust",
    definition:
      "An architecture strategy that reduces assumed trust by explicitly verifying access, limiting privilege, protecting resources, using current evidence, and continuously reassessing decisions.",
  },
  {
    term: "Assumed trust",
    definition:
      "Access confidence granted because of location, prior authentication, organizational relationship, or another condition without enough current resource-specific evidence.",
  },
  {
    term: "Explicit verification",
    definition:
      "Using relevant identity, resource, policy, context, and evidence to support an access decision.",
  },
  {
    term: "Least privilege",
    definition:
      "Limiting access to the minimum practical resources, actions, environment, and duration required for an approved purpose.",
  },
  {
    term: "Contextual access",
    definition:
      "An authorization decision that considers identity plus relevant conditions such as resource sensitivity, privilege, environment, device/session context, time, or risk.",
  },
  {
    term: "Standing access",
    definition:
      "Access that remains continuously available rather than being activated only when needed.",
  },
  {
    term: "Continuous evaluation",
    definition:
      "Reassessing access as identity, session, device, service, ownership, risk, or policy conditions change.",
  },
  {
    term: "Resource-centric authorization",
    definition:
      "Making access decisions for the specific protected resource rather than relying on broad network or organizational trust.",
  },
  {
    term: "Segmentation",
    definition:
      "Separating resources, environments, applications, or trust zones so one access relationship does not automatically extend to unrelated systems.",
  },
  {
    term: "Step-up verification",
    definition:
      "Requiring stronger identity assurance before allowing a more sensitive action or resource access.",
  },
  {
    term: "Policy decision",
    definition:
      "The allow, deny, limit, step-up, or review outcome produced by an access-control policy using available context.",
  },
  {
    term: "Exception",
    definition:
      "A documented, bounded deviation from the preferred access architecture with owner, reason, risk, expiration, and target state.",
  },
];

const zeroTrustRecords = [
  {
    id: "ZT-01",
    relationship: "Counselor → Student Services Portal",
    principal: "Counselor Workforce Identity",
    resource: "Student Services Portal",
    purpose: "Approved student-support workflow",
    verification:
      "Current workforce authentication + counselor role",
    privilege: "Application-level counselor functions only",
    context: "Production; standard workforce session",
    monitoring: "Authentication + authorization telemetry",
    owner: "Student Services Operations",
    status: "Confirmed",
    concern:
      "Access must change if the workforce role changes.",
  },
  {
    id: "ZT-02",
    relationship: "Platform Administrator → Management Plane",
    principal: "Privileged Administrator",
    resource: "Cloud Management Plane",
    purpose: "Approved administrative change",
    verification:
      "Named workforce identity + privileged activation",
    privilege: "Time-bounded administration",
    context: "Production; privileged session",
    monitoring: "Activation + management audit + post-use review",
    owner: "Platform Engineering",
    status: "Conditional",
    concern:
      "One emergency activation lacks complete post-use review evidence.",
  },
  {
    id: "ZT-03",
    relationship: "Student Portal Workload → Student Support Database",
    principal: "Student Portal Workload Identity",
    resource: "Student Support Database",
    purpose: "Application data operations",
    verification:
      "Named workload identity",
    privilege: "Application-specific database actions",
    context: "Production workload only",
    monitoring: "Workload authentication + database access telemetry",
    owner: "Application + Data Platform",
    status: "Confirmed",
    concern:
      "Private network path is supporting context, not the authorization basis.",
  },
  {
    id: "ZT-04",
    relationship: "Scheduling Partner Guest → Integration Service",
    principal: "External Partner Identity",
    resource: "Scheduling Integration Service",
    purpose: "Narrow integration support",
    verification:
      "Approved external identity + current sponsor",
    privilege: "Limited support actions",
    context: "Production; partner support scope",
    monitoring: "External sign-in + administration logs",
    owner: "Integration Owner",
    status: "Conditional",
    concern:
      "Partner access review is due in 30 days.",
  },
  {
    id: "ZT-05",
    relationship: "Analytics Staging Workload → Production Database",
    principal: "Analytics Staging Workload",
    resource: "Production Student Support Database",
    purpose: "None approved",
    verification:
      "Staging workload identity is valid",
    privilege: "Requested read access",
    context: "Cross-environment request",
    monitoring: "Policy denial event",
    owner: "Analytics + Data Platform",
    status: "Blocked",
    concern:
      "Valid identity does not create production authorization.",
  },
  {
    id: "ZT-06",
    relationship: "Legacy Reporting Account → Report Storage",
    principal: "Legacy Reporting Service Account",
    resource: "Generated Report Storage",
    purpose: "Historical reporting job",
    verification:
      "Long-lived service credential metadata",
    privilege: "Report generation access",
    context: "Production",
    monitoring: "Partial",
    owner: "Unknown",
    status: "Blocked",
    concern:
      "Owner, lifecycle, review, and modernization path are unresolved.",
  },
  {
    id: "ZT-07",
    relationship: "Temporary Migration Operator → Migration Service",
    principal: "Temporary Privileged Identity",
    resource: "Migration Control Service",
    purpose: "Approved migration validation",
    verification:
      "Named identity + temporary privileged approval",
    privilege: "Migration-specific operations",
    context: "Production; approved project window",
    monitoring: "Activation + migration audit",
    owner: "Migration Project Owner",
    status: "Conditional",
    concern:
      "Access must expire at the project checkpoint.",
  },
];

const dashboardMetrics = [
  {
    label: "Zero-trust relationships reviewed",
    value: "7",
    note: "Workforce, privileged, workload, partner, cross-environment, legacy, and temporary access",
  },
  {
    label: "Explicitly verified",
    value: "5 / 7",
    note: "Two blocked legacy/cross-environment relationships fail purpose or ownership requirements",
  },
  {
    label: "Standing privileged paths",
    value: "0",
    note: "Privileged administration is modeled as time-bounded activation",
  },
  {
    label: "Open conditions",
    value: "3",
    note: "Privileged post-review, partner renewal, and temporary migration expiration require follow-up",
  },
];

const logs = [
  "[08:14] ZT-01 counselor->portal identity=CURRENT role=COUNSELOR decision=ALLOW",
  "[08:37] ZT-02 admin->management activation=JIT post_review=PARTIAL state=CONDITIONAL",
  "[09:01] ZT-03 portal-workload->database identity=WORKLOAD scope=APP_ONLY decision=ALLOW",
  "[09:24] ZT-04 partner->integration sponsor=CURRENT review_due=30d state=CONDITIONAL",
  "[09:49] ZT-05 staging-workload->prod-db purpose=NONE decision=DENY state=BLOCKED",
  "[10:13] ZT-06 legacy-reporting owner=UNKNOWN lifecycle=STALE state=BLOCKED",
  "[10:39] ZT-07 migration-operator expires=PROJECT_CHECKPOINT state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Zero trust means block everything",
    problem:
      "The organization treats zero trust as an access-denial slogan rather than a method for making better access decisions.",
    better:
      "Allow legitimate access when identity, purpose, resource, privilege, context, and evidence support it.",
  },
  {
    title: "One login unlocks every application",
    problem:
      "Authentication at one boundary becomes assumed authorization across unrelated resources.",
    better:
      "Use resource-specific authorization decisions.",
  },
  {
    title: "Internal network bypasses policy",
    problem:
      "Applications and users inside a private network receive broad access without identity-aware authorization.",
    better:
      "Keep identity and policy controls active regardless of network location.",
  },
  {
    title: "Permanent admin for convenience",
    problem:
      "Standing privilege remains available even when no approved administrative task is happening.",
    better:
      "Use time-bounded privileged activation and post-use review.",
  },
  {
    title: "Every session gets the same treatment",
    problem:
      "The policy ignores resource sensitivity, privilege, environment, or session context.",
    better:
      "Use proportionate contextual decisions for more sensitive access.",
  },
  {
    title: "Partner trust never expires",
    problem:
      "External access continues indefinitely after sponsorship or business need changes.",
    better:
      "Use sponsor, review date, expiration, and narrow resource scope.",
  },
  {
    title: "Monitoring only authentication",
    problem:
      "The team can see sign-ins but cannot explain authorization decisions, privilege use, policy changes, or resource access.",
    better:
      "Monitor the full identity-to-resource decision path.",
  },
  {
    title: "Exception becomes the new standard",
    problem:
      "A temporary deviation remains indefinitely because nobody owns closure.",
    better:
      "Keep exceptions bounded, owned, time-limited, and linked to a target state.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the staging-to-production request denied because a valid staging identity does not create a production business purpose or authorization.",
    outcome:
      "Best. Zero trust separates identity verification from resource-specific authorization.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow because the workload successfully authenticated.",
    outcome:
      "Risky. Authentication alone does not justify production access.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Allow because the workload is on a private network.",
    outcome:
      "Risky. Network location does not replace explicit resource authorization.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the partner relationship Conditional, preserve narrow access, and require sponsor review or expiration at the scheduled date.",
    outcome:
      "Best. External trust remains explicit, bounded, and reviewable.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Make partner access permanent because the company is under contract.",
    outcome:
      "Risky. Contractual trust does not justify indefinite technical access.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Broaden partner access to reduce support delays.",
    outcome:
      "Risky. Zero trust favors minimum practical scope rather than broad convenience access.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of zero trust?",
    choices: [
      "A rule that blocks all access.",
      "An architecture strategy that reduces assumed trust through explicit verification, least privilege, bounded access, current evidence, and continuous reassessment.",
      "A replacement for authorization.",
      "A network product.",
    ],
    answer: 1,
    explanation:
      "Zero trust is an architecture approach, not a single product or deny-everything rule.",
  },
  {
    question:
      "Why does successful authentication not automatically justify access to every resource?",
    choices: [
      "Because authentication verifies identity while authorization still needs resource-specific purpose and policy.",
      "Because authenticated users should never receive access.",
      "Because resources cannot have policies.",
      "Because networks decide all access.",
    ],
    answer: 0,
    explanation:
      "Zero trust keeps identity verification and resource authorization as separate decisions.",
  },
  {
    question:
      "What best represents least privilege?",
    choices: [
      "Giving every employee the same standard permissions.",
      "Granting only the minimum practical resources, actions, environment, and duration required for the approved purpose.",
      "Removing all access.",
      "Using one administrator account for the whole team.",
    ],
    answer: 1,
    explanation:
      "Least privilege is about proportional, purpose-specific access.",
  },
  {
    question:
      "A staging workload authenticates successfully but requests production student data without an approved production purpose. What should happen?",
    choices: [
      "Allow because authentication succeeded.",
      "Deny because verification does not create production authorization.",
      "Allow if the network is private.",
      "Allow permanently if access is read-only.",
    ],
    answer: 1,
    explanation:
      "Environment and business purpose are part of the authorization decision.",
  },
  {
    question:
      "Why is continuous evaluation important?",
    choices: [
      "Because role, ownership, device/session context, service, project, and risk conditions can change after the original access decision.",
      "Because every session should be blocked eventually.",
      "Because authentication evidence never matters.",
      "Because access reviews are only for auditors.",
    ],
    answer: 0,
    explanation:
      "Access that was justified before may become inappropriate as conditions change.",
  },
  {
    question:
      "What is the strongest way to handle privileged access?",
    choices: [
      "Permanent broad administration for all platform staff.",
      "Separate, time-bounded, approved, monitored privileged activation with post-use review where practical.",
      "Shared administrator credentials.",
      "No monitoring to protect administrator privacy.",
    ],
    answer: 1,
    explanation:
      "High-impact access benefits from stronger separation, time bounds, monitoring, and evidence.",
  },
  {
    question:
      "What makes an exception compatible with zero-trust governance?",
    choices: [
      "It is undocumented but temporary.",
      "It has an owner, reason, risk, compensating control where needed, review/expiration, target state, and closure evidence.",
      "It becomes permanent after one renewal.",
      "It removes the original standard.",
    ],
    answer: 1,
    explanation:
      "A governed exception remains visible and bounded instead of becoming hidden standing trust.",
  },
];

const checklistItems = [
  "Identity verification is explicit for important human and workload access.",
  "Authorization remains resource-specific.",
  "Private network location is not treated as automatic trust.",
  "Least privilege considers resource, action, environment, and duration.",
  "Privileged access is separate from standard access.",
  "Standing privilege is minimized where practical.",
  "Workload identities are used for important service-to-service access.",
  "Production and lower-environment identities remain separated.",
  "External identities have sponsors, narrow scope, review, and expiration.",
  "Temporary access has explicit end conditions.",
  "Access decisions consider relevant context without relying on any single context signal alone.",
  "Monitoring covers authentication, authorization, privilege, policy, and resource access.",
  "Source health supports confidence in monitoring evidence.",
  "Role, project, ownership, and service changes trigger access reassessment.",
  "Exceptions remain visible, owned, bounded, and time-limited.",
  "Unknown or stale evidence does not get treated as Confirmed.",
  "No lesson activity requires testing, bypassing, or attacking any real identity control.",
];

const takeaways = [
  "Zero trust reduces assumed trust; it does not eliminate legitimate access.",
  "Verify explicitly means using relevant identity, resource, policy, and context evidence.",
  "Authentication and authorization remain separate decisions.",
  "Least privilege should consider resource, action, environment, and time.",
  "Private network location does not replace identity-aware authorization.",
  "Privileged access should be more bounded and observable than normal access.",
  "Workload identity supports zero trust for service-to-service access.",
  "Continuous evaluation matters because role, session, project, provider, and ownership conditions change.",
  "Exceptions should remain explicit and temporary rather than becoming hidden standing trust.",
  "The Zero Trust Principles Assessment will support A13.3 Federation and Single Sign-On Concepts.",
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

export default function ZeroTrustPrinciplesPage() {
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
              A13.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Zero Trust Principles
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Zero trust is not a product, a firewall setting, or a command to
            deny everything. It is an architecture strategy for reducing
            assumed trust and making access decisions more explicit,
            least-privileged, observable, and reviewable.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional identities, synthetic policy decisions,
            and safe evidence only. It does not involve real accounts,
            authentication testing, bypass attempts, or credential use.
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
          lessonTitle="Zero Trust Principles"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.2 Entry Readiness"
          items={[
            "I understand identity as a security perimeter from A13.1.",
            "I can distinguish authentication from authorization.",
            "I understand workload, privileged, external, and temporary identities.",
            "I will use only fictional identity and policy evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Zero Trust Is About Better Decisions, Not More Denials"
        >
          <p className="leading-8">
            Imagine a counselor, an administrator, a production workload, and a
            partner all successfully authenticate. A weak design might treat
            that one fact as enough. A zero-trust design asks a deeper set of
            questions: Which resource is being requested? Which action? Which
            environment? How much privilege? For how long? What current evidence
            supports the decision?
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Zero trust reduces assumptions by making trust decisions explicit.
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
          eyebrow="Core Principles"
          title="Eight Ideas That Define Zero-Trust Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.principle}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.principle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Architecture question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.architectureQuestion}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Assumptions"
          title="Six Assumptions Zero Trust Tries to Remove"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trustAssumptions.map((item) => (
              <article
                key={item.assumption}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.assumption}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Why it fails: {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better approach: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Context"
          title="Access Decisions Can Use More Than Identity Alone"
        >
          <p className="leading-8">
            Zero trust does not mean every access decision must use every
            possible signal. It means the architecture should use the context
            that is relevant to the sensitivity and purpose of the request.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionContexts.map((item) => (
              <article
                key={item.context}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.context}</h3>
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
          title="Zero-Trust Architecture Terms"
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
          eyebrow="Fictional Zero-Trust Register"
          title="Seven Northbridge Access Relationships"
        >
          <div className="grid gap-5">
            {zeroTrustRecords.map((item) => (
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
                  {item.relationship}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Principal", item.principal],
                    ["Resource", item.resource],
                    ["Purpose", item.purpose],
                    ["Verification", item.verification],
                    ["Privilege", item.privilege],
                    ["Context", item.context],
                    ["Monitoring", item.monitoring],
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
          title="Northbridge Zero-Trust Architecture Dashboard"
          subtitle="Fictional access, verification, standing privilege, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Cross-Environment Access Denied by Policy"
          severity="High"
          time="09:49"
          source="Fictional Zero-Trust Policy Review"
          details="ZT-05 shows a valid staging workload identity requesting access to the production Student Support Database without an approved production purpose."
          recommendation="Keep the request Blocked. Successful identity verification does not create production authorization."
        />

        <Section
          eyebrow="Resource-Centric Authorization"
          title="A Good Identity Should Still Face the Right Resource Boundary"
        >
          <p className="leading-8">
            Zero trust is strongest when resources make their own authorization
            decisions based on the identity and policy context that matters.
            This prevents one broad trust decision from spreading across
            unrelated applications, data stores, and administrative services.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Application boundary",
                detail:
                  "A workforce identity may be valid but still needs the correct application role.",
              },
              {
                title: "Data boundary",
                detail:
                  "An application workload may reach a database only for approved operations.",
              },
              {
                title: "Administrative boundary",
                detail:
                  "Normal workforce access should not automatically include management-plane privilege.",
              },
              {
                title: "Environment boundary",
                detail:
                  "Staging identities should not automatically cross into production.",
              },
              {
                title: "Partner boundary",
                detail:
                  "External identities should remain limited to the specific integration or support purpose.",
              },
              {
                title: "Recovery boundary",
                detail:
                  "Emergency access should remain exceptional, bounded, monitored, and reviewed.",
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
          title="Fictional Zero-Trust Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Staging Workload"
          question="What is the strongest zero-trust conclusion for ZT-05?"
          evidence={[
            "The staging workload identity is valid.",
            "The workload runs in the staging environment.",
            "Its approved purpose is synthetic analytics processing.",
            "The requested destination is the production Student Support Database.",
            "No production business purpose or approval exists.",
          ]}
          options={[
            "Allow because authentication succeeded.",
            "Keep the access Blocked because explicit identity verification does not create production authorization.",
            "Allow because the destination is private.",
            "Allow read-only access permanently.",
          ]}
          bestAnswer={1}
          explanation="Zero trust separates identity verification from resource-specific authorization and preserves environment boundaries."
        />

        <Section
          eyebrow="Zero-Trust Anti-Patterns"
          title="Eight Ways Zero Trust Gets Reduced to a Slogan"
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
          title="Scenario Decision Lab 1 — Verified Identity, Wrong Resource"
          scenario="A staging analytics workload authenticates successfully and requests read access to a production database. No approved production purpose exists."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — External Partner Review"
          scenario="A partner identity has narrow integration access and a current internal sponsor, but the next access review is due in 30 days."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Zero Trust Principles Assessment"
        >
          <p className="leading-8">
            Use fictional identities, resources, policies, owners, sessions,
            environments, and evidence only. Do not test any real access-control
            system.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional identity-to-resource relationships.",
              "Include workforce, privileged, workload, external, temporary, and legacy identities.",
              "Give each relationship a stable ZT ID.",
              "Record principal and resource.",
              "State business or technical purpose.",
              "Record verification context.",
              "Record allowed action scope.",
              "Record environment.",
              "Record relevant session/device context where appropriate.",
              "Record monitoring evidence.",
              "Assign identity and resource owners.",
              "Classify whether trust is explicit, assumed, or unsupported.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Accepted Risk.",
              "Identify at least three examples of excessive standing trust.",
              "Identify at least two places where resource-specific authorization improves the design.",
              "Identify at least two privileged-access relationships.",
              "Identify at least two workload identity relationships.",
              "Identify at least two external or temporary relationships.",
              "Create at least two time-bounded exceptions with target states.",
              "Add change triggers for role, project, provider, device/session policy, service, ownership, environment, and architecture changes.",
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
              This is a fictional architecture assessment only. Do not attempt
              authentication bypass, privilege escalation, credential testing,
              token use, real account access, session manipulation, or policy
              changes in any live system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Trust"
          question="How should ZT-04 be classified?"
          evidence={[
            "The external identity has a current sponsor.",
            "The allowed resource is limited to the Scheduling Integration Service.",
            "The access purpose is documented.",
            "External sign-in and administration telemetry are available.",
            "The next access review is due in 30 days.",
          ]}
          options={[
            "Confirmed forever because the sponsor is current.",
            "Conditional until the scheduled review confirms the relationship should continue.",
            "Blocked because zero trust never allows partner access.",
            "Accepted Risk because all external access is risky.",
          ]}
          bestAnswer={1}
          explanation="Zero trust can support legitimate external access, but the relationship should remain bounded and reviewed as its lifecycle conditions change."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Transform an Assumption-Based Environment"
        >
          <p className="leading-8">
            A fictional organization currently trusts internal network
            location, gives administrators permanent privilege, lets one
            application sign-in unlock several resources, and leaves partner
            access active until someone remembers to remove it. Redesign the
            access model using zero-trust principles.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Named human and workload identities",
              "Resource-specific authorization",
              "Environment-specific access",
              "Least-privilege roles or entitlements",
              "Time-bounded privileged activation",
              "Partner sponsorship and expiration",
              "Temporary-access lifecycle",
              "Workload identity instead of network trust",
              "Relevant contextual access decisions",
              "Authentication monitoring",
              "Authorization monitoring",
              "Policy-change monitoring",
              "Source-health monitoring",
              "Exception governance",
              "Review/change triggers",
              "Blocked findings that must close",
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
        </Section>

        <DefenderChecklist
          title="A13.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.2 Mini Quiz: Zero Trust Principles"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Zero Trust Principles Assessment"
          prompt="Create the second artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Zero Trust Principles Assessment with at least twelve identity-to-resource relationships. Include relationship ID, principal, resource, purpose, verification context, privilege, environment, relevant session/device context, monitoring evidence, owners, trust assumption, status, concern, next action, exception reference where needed, and change trigger."
          tips={[
            "Show at least three places where assumed trust should be reduced.",
            "Include privileged, workload, external, temporary, and workforce access.",
            "Keep authentication separate from authorization.",
            "Use resource-specific and environment-specific decisions.",
            "Include at least two bounded exceptions.",
            "Use fictional provider-neutral evidence only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.3?"
        >
          <p className="leading-8">
            A13.3 moves into Federation and Single Sign-On Concepts. Before
            continuing, make sure you can explain how zero trust can support
            federated access without assuming that one successful sign-in
            should automatically unlock every connected application.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain zero trust without describing it as deny everything.",
              "I can distinguish identity verification from resource authorization.",
              "I can explain least privilege in terms of resource, action, environment, and time.",
              "I can identify excessive standing trust.",
              "I can explain why access should be reassessed as conditions change.",
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
          title="How to Make the Zero Trust Assessment Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Document the assumption first",
                detail:
                  "Show exactly what the current design assumes before proposing a stronger verification or authorization model.",
              },
              {
                title: "Separate principal and resource",
                detail:
                  "Every access relationship should clearly identify who or what is acting and what protected resource is being requested.",
              },
              {
                title: "Show least privilege",
                detail:
                  "Record exact action scope, environment, and duration instead of broad labels such as standard access.",
              },
              {
                title: "Show context proportionately",
                detail:
                  "Use only the device, session, privilege, or risk context that meaningfully improves the decision.",
              },
              {
                title: "Show evidence",
                detail:
                  "Authentication, authorization, policy, privileged activity, review, and source-health evidence should support major claims.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Partner, temporary, privileged, and workforce access should have clear review or change triggers.",
              },
              {
                title: "Keep exceptions bounded",
                detail:
                  "Make owner, expiration, compensating control, target state, and closure requirement visible.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.3 will use these trust relationships to analyze federation and single sign-on architecture.",
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
            Zero-trust architecture does not require attacking identity controls
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt password guessing, account enumeration,
            authentication bypass, session hijacking, privilege escalation,
            token theft, credential testing, or access to real identity systems.
            All decisions and evidence in this lesson are fictional and
            defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.2 Zero Trust Principles Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a zero-trust architecture model built around explicit
            verification, resource-specific authorization, least privilege,
            bounded trust, current evidence, lifecycle, monitoring, and
            exceptions. Next, A13.3 focuses on Federation and Single Sign-On
            Concepts.
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