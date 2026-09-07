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
const previousLesson = `${modulePath}/federation-and-single-sign-on-concepts`;
const nextLesson = `${modulePath}/role-based-and-attribute-based-access-concepts`;

const objectives = [
  "Explain conditional access as a policy decision process that combines identity, resource, privilege, environment, session, device, lifecycle, and evidence context.",
  "Distinguish allow, deny, step-up, limited-access, Conditional, Unknown, and review outcomes as different ways a policy can respond to uncertainty and risk.",
  "Evaluate fictional policy decisions for missing context, stale evidence, excessive trust, conflicting rules, weak ownership, broad exceptions, and inappropriate precedence.",
  "Connect conditional access to federation, zero trust, privileged access, environment separation, workload identity, monitoring, and resource-specific authorization.",
  "Build a Conditional Access Decision Matrix that becomes the fourth artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const signalDomains = [
  {
    domain: "Identity",
    purpose:
      "Establishes who or what is requesting access and what identity population the principal belongs to.",
    examples:
      "Workforce user, privileged administrator, workload identity, partner identity, temporary operator.",
    caution:
      "A valid identity does not automatically justify every resource or action.",
  },
  {
    domain: "Resource",
    purpose:
      "Describes the application, dataset, administrative plane, service, or workflow being requested.",
    examples:
      "Student Services Portal, report storage, cloud management plane, scheduling console.",
    caution:
      "Policies should distinguish ordinary applications from more sensitive resources.",
  },
  {
    domain: "Privilege",
    purpose:
      "Describes the impact of the requested action.",
    examples:
      "Standard workflow, sensitive data access, configuration change, identity administration.",
    caution:
      "High-impact actions often deserve stronger approval, verification, or session controls.",
  },
  {
    domain: "Environment",
    purpose:
      "Identifies whether the access is for development, staging, production, recovery, or another boundary.",
    examples:
      "Staging workload, production database, recovery console.",
    caution:
      "Environment should be explicit so lower-trust identities do not inherit production access.",
  },
  {
    domain: "Session context",
    purpose:
      "Provides current information about the active user or workload session.",
    examples:
      "Normal workforce session, privileged activation, temporary project window, external support session.",
    caution:
      "Session context should support the decision without becoming the only source of trust.",
  },
  {
    domain: "Device context",
    purpose:
      "Adds relevant information about an approved managed device or device state when that matters to the resource.",
    examples:
      "Managed device, approved browser posture, device state current, device state Unknown.",
    caution:
      "Device context should be proportionate and privacy-conscious; it should not substitute for identity and authorization.",
  },
  {
    domain: "Lifecycle",
    purpose:
      "Shows whether the identity or access relationship is still current.",
    examples:
      "Role active, partner review due, temporary access expiring, project closed.",
    caution:
      "A previously valid policy decision can become inappropriate when lifecycle conditions change.",
  },
  {
    domain: "Evidence health",
    purpose:
      "Indicates whether the information used by policy is current, complete, delayed, stale, or Unknown.",
    examples:
      "Current identity source, stale device state, delayed policy feed, missing sponsor review.",
    caution:
      "Unknown evidence should not silently be treated as trusted evidence.",
  },
];

const decisionOutcomes = [
  {
    outcome: "Allow",
    meaning:
      "Current identity, purpose, resource, privilege, context, and policy evidence support the requested action.",
    example:
      "A counselor uses the Student Services Portal with an active workforce role and current application authorization.",
  },
  {
    outcome: "Deny",
    meaning:
      "The request conflicts with policy, lacks approved purpose, crosses an unauthorized boundary, or exceeds allowed scope.",
    example:
      "A staging workload requests production student data without approved production purpose.",
  },
  {
    outcome: "Step-up",
    meaning:
      "The user can continue only after stronger verification appropriate to a more sensitive action.",
    example:
      "A standard session requests a privileged administrative activation.",
  },
  {
    outcome: "Limited access",
    meaning:
      "The request is allowed only within a narrower capability or resource scope.",
    example:
      "A partner support identity can use approved integration-support functions but not unrelated administration.",
  },
  {
    outcome: "Conditional",
    meaning:
      "The request can proceed only while a documented condition remains satisfied and is reviewed.",
    example:
      "A temporary migration operator is approved until the migration checkpoint.",
  },
  {
    outcome: "Unknown / review",
    meaning:
      "Current evidence is insufficient to justify a strong allow or deny decision without additional governance review.",
    example:
      "A device-state source is stale and the resource owner has not defined the fallback decision.",
  },
];

const policyPrinciples = [
  {
    title: "Purpose comes before convenience",
    meaning:
      "Policies should begin with why access is needed, not with which access can be granted most easily.",
    review:
      "Can the organization state the approved business or technical purpose?",
  },
  {
    title: "Use the minimum necessary signals",
    meaning:
      "A strong policy uses relevant context without collecting or relying on unnecessary information.",
    review:
      "Does each signal materially improve the decision?",
  },
  {
    title: "Resource sensitivity matters",
    meaning:
      "A low-impact application and a high-impact administrative plane may need different decision conditions.",
    review:
      "Is the policy proportionate to resource and action sensitivity?",
  },
  {
    title: "Step-up should be targeted",
    meaning:
      "Stronger verification should protect more sensitive actions without adding unnecessary friction to routine work.",
    review:
      "Is stronger verification triggered by meaningful privilege or resource changes?",
  },
  {
    title: "Policy should fail visibly",
    meaning:
      "Missing or stale evidence should produce a defined state such as deny, limit, review, or Unknown rather than silent trust.",
    review:
      "What happens when a context source is unavailable or stale?",
  },
  {
    title: "Exceptions should not override ownership",
    meaning:
      "An exception still needs a named owner, reason, expiration, compensating control, and target state.",
    review:
      "Is the exception temporary, reviewable, and tied to closure?",
  },
  {
    title: "Precedence should be understandable",
    meaning:
      "When several policies apply, the resulting decision should be predictable and explainable.",
    review:
      "Can another reviewer explain which rule controlled the final outcome?",
  },
  {
    title: "Decisions need evidence",
    meaning:
      "Policy results should be logged well enough to support review without exposing sensitive credentials or unnecessary personal data.",
    review:
      "Can the organization explain why the decision occurred using safe metadata?",
  },
];

const precedenceModels = [
  {
    model: "Deny overrides allow",
    use:
      "A specific high-risk or out-of-scope condition prevents a broader general allow from taking effect.",
    example:
      "A workforce role normally allows portal access, but a terminated identity state denies it.",
    caution:
      "The rule should be documented so reviewers understand why access was denied.",
  },
  {
    model: "Specific resource rule overrides broad baseline",
    use:
      "A sensitive application can require stronger conditions than the general workforce baseline.",
    example:
      "Standard workforce access is allowed broadly, but the management plane requires privileged activation.",
    caution:
      "Avoid creating hidden one-off rules that no owner reviews.",
  },
  {
    model: "Step-up before privileged allow",
    use:
      "The policy can require stronger verification before the privileged role becomes usable.",
    example:
      "A platform engineer has admin eligibility but must activate privilege before management actions.",
    caution:
      "Eligibility and active privilege should remain distinguishable.",
  },
  {
    model: "Conditional exception with expiration",
    use:
      "A temporary operational need can be supported without becoming permanent standing access.",
    example:
      "Migration access remains valid only through the approved project checkpoint.",
    caution:
      "Expired exceptions should not continue silently.",
  },
  {
    model: "Unknown evidence requires review",
    use:
      "The policy avoids pretending uncertain context is trusted.",
    example:
      "A stale device-state source causes a sensitive request to move to review instead of automatic allow.",
    caution:
      "The fallback decision should be designed before the evidence source fails.",
  },
  {
    model: "Environment boundary blocks cross-scope access",
    use:
      "Lower-environment identities are denied access to production unless there is an explicit production purpose and approval.",
    example:
      "Staging analytics workload cannot read production student data.",
    caution:
      "Same team ownership does not replace environment-specific authorization.",
  },
];

const vocabulary = [
  {
    term: "Conditional access",
    definition:
      "A policy decision process that uses identity plus relevant context to determine whether access should be allowed, denied, stepped up, limited, or reviewed.",
  },
  {
    term: "Policy signal",
    definition:
      "A piece of context used in an access decision, such as identity type, resource, privilege, environment, lifecycle, session, or device state.",
  },
  {
    term: "Policy decision",
    definition:
      "The resulting outcome produced after applicable policy rules evaluate the request and available evidence.",
  },
  {
    term: "Step-up verification",
    definition:
      "A requirement for stronger verification before allowing a more sensitive action or resource.",
  },
  {
    term: "Limited access",
    definition:
      "An outcome that permits only a narrower capability or resource scope instead of full access.",
  },
  {
    term: "Policy precedence",
    definition:
      "The documented order or conflict-resolution logic used when multiple policies apply to the same request.",
  },
  {
    term: "Default decision",
    definition:
      "The defined outcome used when no more specific policy rule applies.",
  },
  {
    term: "Fail-visible behavior",
    definition:
      "A design in which stale, missing, or conflicting evidence produces an explicit outcome rather than silent trust.",
  },
  {
    term: "Exception",
    definition:
      "A documented temporary deviation from the preferred policy with owner, reason, expiration, risk, and target state.",
  },
  {
    term: "Policy drift",
    definition:
      "The gradual difference between intended access policy and actual active rules or exceptions.",
  },
  {
    term: "Decision evidence",
    definition:
      "Safe metadata showing which principal, resource, context, rule, and outcome supported an access decision.",
  },
  {
    term: "Policy owner",
    definition:
      "The person or team accountable for the purpose, scope, review, and lifecycle of an access-control rule.",
  },
];

const policyRecords = [
  {
    id: "POL-01",
    request: "Counselor → Student Services Portal",
    identity: "Active counselor workforce identity",
    resource: "Student Services Portal",
    purpose: "Student-support workflow",
    privilege: "Standard counselor application functions",
    environment: "Production",
    session: "Normal workforce session",
    device: "Managed device state current",
    lifecycle: "Role current",
    outcome: "Allow",
    owner: "Student Services Application Owner",
    evidence: "Current identity + role + app authorization + policy log",
    status: "Confirmed",
    concern:
      "Role change must trigger immediate reassessment.",
  },
  {
    id: "POL-02",
    request: "Platform Engineer → Cloud Management Plane",
    identity: "Active platform engineer",
    resource: "Cloud Management Plane",
    purpose: "Approved administrative change",
    privilege: "High-impact administration",
    environment: "Production",
    session: "Standard workforce session",
    device: "Managed device state current",
    lifecycle: "Admin eligibility current",
    outcome: "Step-up",
    owner: "Platform Engineering",
    evidence: "Eligibility + privileged activation policy + audit",
    status: "Confirmed",
    concern:
      "Privilege must remain inactive until the step-up and activation complete.",
  },
  {
    id: "POL-03",
    request: "Scheduling Partner → Integration Console",
    identity: "Approved partner identity",
    resource: "Scheduling Integration Console",
    purpose: "Integration support",
    privilege: "Narrow support actions",
    environment: "Production",
    session: "Partner support session",
    device: "Partner device state not used",
    lifecycle: "Sponsor current; review due in 30 days",
    outcome: "Limited access",
    owner: "Integration Owner",
    evidence: "Sponsor + federation + app authorization + review date",
    status: "Conditional",
    concern:
      "The relationship must be reviewed before renewal.",
  },
  {
    id: "POL-04",
    request: "Analytics Staging Workload → Production Student Support Database",
    identity: "Valid staging workload identity",
    resource: "Production Student Support Database",
    purpose: "No approved production purpose",
    privilege: "Requested read access",
    environment: "Cross-environment",
    session: "Workload session",
    device: "Not applicable",
    lifecycle: "Staging workload current",
    outcome: "Deny",
    owner: "Analytics + Data Platform",
    evidence: "Workload identity + environment policy + denial record",
    status: "Blocked",
    concern:
      "Successful authentication does not create production authorization.",
  },
  {
    id: "POL-05",
    request: "Temporary Migration Operator → Migration Console",
    identity: "Named temporary privileged identity",
    resource: "Migration Console",
    purpose: "Approved migration validation",
    privilege: "Migration-specific operations",
    environment: "Production",
    session: "Temporary privileged session",
    device: "Managed project device",
    lifecycle: "Expires at migration checkpoint",
    outcome: "Conditional",
    owner: "Migration Project Owner",
    evidence: "Temporary approval + activation + expiration + audit",
    status: "Conditional",
    concern:
      "Access must close when the project checkpoint ends.",
  },
  {
    id: "POL-06",
    request: "Reporting Analyst → Sensitive Report Export",
    identity: "Active reporting analyst",
    resource: "Sensitive Report Export Function",
    purpose: "Approved reporting task",
    privilege: "Sensitive export",
    environment: "Production",
    session: "Normal workforce session",
    device: "Device-state source stale",
    lifecycle: "Role current",
    outcome: "Review",
    owner: "Analytics Product Owner",
    evidence: "Identity current; device evidence stale; export policy current",
    status: "Unknown",
    concern:
      "The fallback decision for stale device evidence is not fully defined.",
  },
  {
    id: "POL-07",
    request: "Legacy Reporting Account → Generated Report Storage",
    identity: "Legacy service account",
    resource: "Generated Report Storage",
    purpose: "Historical scheduled report",
    privilege: "Legacy write access",
    environment: "Production",
    session: "Long-lived automated access",
    device: "Not applicable",
    lifecycle: "No current review date",
    outcome: "Deny",
    owner: "Unknown",
    evidence: "Partial legacy logs + stale lifecycle metadata",
    status: "Blocked",
    concern:
      "Ownership, current need, modernization, and exception status are unresolved.",
  },
];

const dashboardMetrics = [
  {
    label: "Policy decisions reviewed",
    value: "7",
    note: "Workforce, privileged, partner, cross-environment, temporary, sensitive-export, and legacy decisions",
  },
  {
    label: "Strong explicit outcomes",
    value: "5 / 7",
    note: "Two records remain Unknown/Blocked because evidence or ownership is insufficient",
  },
  {
    label: "Step-up decisions",
    value: "1",
    note: "Privileged management-plane access requires stronger verification and activation",
  },
  {
    label: "Open review conditions",
    value: "3",
    note: "Partner renewal, temporary migration expiration, and stale device evidence require follow-up",
  },
];

const logs = [
  "[08:08] POL-01 counselor->student-services identity=CURRENT device=CURRENT outcome=ALLOW",
  "[08:31] POL-02 platform-engineer->management-plane privilege=HIGH outcome=STEP_UP",
  "[08:55] POL-03 partner->integration sponsor=CURRENT review_due=30d outcome=LIMITED",
  "[09:19] POL-04 staging-workload->prod-db purpose=NONE outcome=DENY state=BLOCKED",
  "[09:44] POL-05 migration-operator expires=PROJECT_CHECKPOINT outcome=CONDITIONAL",
  "[10:07] POL-06 analyst->sensitive-export device_state=STALE outcome=REVIEW state=UNKNOWN",
  "[10:33] POL-07 legacy-reporting owner=UNKNOWN lifecycle=STALE outcome=DENY state=BLOCKED",
];

const antiPatterns = [
  {
    title: "Policy based on identity only",
    problem:
      "A valid identity receives the same treatment regardless of resource, privilege, environment, or purpose.",
    better:
      "Use resource and action context where it materially changes risk.",
  },
  {
    title: "Every sensitive action always blocked",
    problem:
      "The organization treats security as denying legitimate work rather than using proportional controls.",
    better:
      "Use step-up, limited access, or approved time-bounded access when appropriate.",
  },
  {
    title: "Device state becomes absolute trust",
    problem:
      "A managed device is treated as enough evidence to allow any resource.",
    better:
      "Use device context as one input, not a substitute for identity and authorization.",
  },
  {
    title: "Missing evidence silently allows",
    problem:
      "A stale or unavailable context source falls back to broad access without a defined decision.",
    better:
      "Use fail-visible outcomes such as deny, limit, review, or Unknown.",
  },
  {
    title: "Policy exceptions never expire",
    problem:
      "Temporary deviations become permanent because no owner or closure condition exists.",
    better:
      "Require owner, expiration, compensating control, target state, and closure.",
  },
  {
    title: "Broad allow overrides specific deny",
    problem:
      "A general workforce policy unintentionally bypasses a sensitive-resource restriction.",
    better:
      "Use understandable precedence that preserves specific protective rules.",
  },
  {
    title: "Policy has no owner",
    problem:
      "Nobody is accountable for whether the rule still reflects current business and architecture needs.",
    better:
      "Assign an accountable policy or resource owner.",
  },
  {
    title: "Decision logs expose too much",
    problem:
      "Telemetry records unnecessary sensitive identity or credential data.",
    better:
      "Log safe decision metadata without secrets or excessive personal data.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Require step-up verification and privileged activation before allowing the management-plane action.",
    outcome:
      "Best. The request is legitimate but high impact, so stronger verification and bounded privilege are proportionate.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow automatically because the user is a platform engineer.",
    outcome:
      "Risky. Eligibility should not automatically equal active administrative privilege.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Deny all platform administration permanently.",
    outcome:
      "Overly restrictive. Strong security should still support legitimate approved administration.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Move the sensitive export request to review or a safer fallback because the device-state evidence is stale and the policy does not yet define a confident automated decision.",
    outcome:
      "Best. Unknown evidence should produce a visible governance state instead of silent trust.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow because the user identity is current.",
    outcome:
      "Risky. The policy explicitly depends on device context for this sensitive action.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Treat stale device evidence as current for the rest of the month.",
    outcome:
      "Risky. That converts uncertainty into assumed trust without evidence.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is conditional access?",
    choices: [
      "A policy process that uses identity plus relevant context to decide whether access should be allowed, denied, stepped up, limited, or reviewed.",
      "A requirement to deny every risky request.",
      "A replacement for application authorization.",
      "A device-management product.",
    ],
    answer: 0,
    explanation:
      "Conditional access combines identity and relevant context to produce a policy decision.",
  },
  {
    question:
      "What is the strongest use of step-up verification?",
    choices: [
      "Require stronger verification when a more sensitive resource or privileged action is requested.",
      "Use it for every low-risk action regardless of context.",
      "Replace all authorization rules.",
      "Make all privileged users permanent administrators.",
    ],
    answer: 0,
    explanation:
      "Step-up should be targeted to meaningful increases in sensitivity or privilege.",
  },
  {
    question:
      "A staging workload successfully authenticates but requests production student data without an approved production purpose. What should the policy do?",
    choices: [
      "Allow because authentication succeeded.",
      "Deny because environment and purpose do not support production authorization.",
      "Allow if the network is private.",
      "Allow because the same team owns both environments.",
    ],
    answer: 1,
    explanation:
      "Identity verification does not create cross-environment authorization.",
  },
  {
    question:
      "What is fail-visible behavior?",
    choices: [
      "A design where missing or stale evidence produces an explicit outcome such as deny, limit, review, or Unknown.",
      "A design where evidence failures always become allow.",
      "A design where logs are disabled.",
      "A design where every user sees policy source code.",
    ],
    answer: 0,
    explanation:
      "Fail-visible behavior prevents uncertainty from being silently treated as trust.",
  },
  {
    question:
      "Why should policy precedence be documented?",
    choices: [
      "So reviewers can understand which rule controlled the final decision when multiple rules apply.",
      "So all policies can be ignored.",
      "So broad allow rules always win.",
      "So device state becomes the only control.",
    ],
    answer: 0,
    explanation:
      "Predictable precedence makes access decisions understandable and reviewable.",
  },
  {
    question:
      "What is the strongest way to handle a temporary access exception?",
    choices: [
      "Keep it active until someone notices it.",
      "Document owner, reason, risk, expiration, compensating control where needed, target state, and closure requirement.",
      "Convert it to permanent access after one renewal.",
      "Remove the original standard.",
    ],
    answer: 1,
    explanation:
      "A governed exception remains bounded and visible.",
  },
  {
    question:
      "A sensitive export policy depends on current device evidence, but that evidence is stale. What is the strongest response?",
    choices: [
      "Treat stale evidence as current.",
      "Use the defined fallback, such as review, limit, or deny, and investigate source health.",
      "Ignore the policy because the identity is valid.",
      "Allow permanently.",
    ],
    answer: 1,
    explanation:
      "A strong policy defines how to respond when a required evidence source is stale or unavailable.",
  },
];

const checklistItems = [
  "Every important policy decision identifies the requesting principal.",
  "The protected resource is explicit.",
  "Business or technical purpose is documented.",
  "Privilege level is considered when relevant.",
  "Environment is included in cross-environment decisions.",
  "Relevant session context is used proportionately.",
  "Relevant device context is used only when it improves the decision.",
  "Device context does not replace identity or authorization.",
  "Step-up verification protects more sensitive actions where appropriate.",
  "Limited-access outcomes are available when full access is unnecessary.",
  "Temporary access has explicit end conditions.",
  "External access is tied to sponsor and review.",
  "Missing or stale evidence produces a defined visible outcome.",
  "Policy precedence is documented.",
  "Specific protective rules are not bypassed by broad allow rules.",
  "Exceptions have owners, reasons, expirations, and target states.",
  "Policy changes are logged and reviewable.",
  "Decision logs avoid secrets and unnecessary personal data.",
  "Policy owners and resource owners are accountable.",
  "No lesson activity requires changing or testing policy in a real identity system.",
];

const takeaways = [
  "Conditional access combines identity with relevant context instead of relying on identity alone.",
  "Policy outcomes can include allow, deny, step-up, limited access, Conditional, or review.",
  "Step-up verification is most useful when privilege or resource sensitivity increases.",
  "A managed device is one signal, not a universal trust guarantee.",
  "Environment should be part of policy when staging and production must remain separated.",
  "Stale or missing evidence should produce a visible outcome rather than silent trust.",
  "Policy precedence should be predictable and explainable.",
  "Exceptions should remain owned, bounded, and time-limited.",
  "Decision evidence should explain why access was allowed or denied without exposing credentials.",
  "The Conditional Access Decision Matrix will support A13.5 Role-Based and Attribute-Based Access Concepts.",
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

export default function ConditionalAccessAndPolicyDecisionsPage() {
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
              A13.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Conditional Access and Policy Decisions
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Strong access decisions consider more than whether an identity
            exists. They can evaluate the requested resource, privilege,
            environment, lifecycle, session, device context, and evidence
            health before deciding whether to allow, deny, step up, limit, or
            review access.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional policy records and synthetic evidence
            only. It does not require changing real access-control policies,
            testing live accounts, or interacting with private identity systems.
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
          lessonTitle="Conditional Access and Policy Decisions"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.4 Entry Readiness"
          items={[
            "I can distinguish authentication from authorization.",
            "I understand zero trust as explicit, least-privileged, reviewable access.",
            "I understand federation and SSO as trust relationships rather than universal authorization.",
            "I will use only fictional policy records and safe synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Good Access Policy Can Say More Than Yes or No"
        >
          <p className="leading-8">
            Consider three requests: a counselor opening a standard application,
            a platform engineer starting an administrative task, and a partner
            accessing a narrow support console. A mature identity architecture
            does not need to treat them identically. Policy can allow normal
            work, require stronger verification for sensitive actions, limit
            partner scope, and deny requests that cross an unauthorized
            environment boundary.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Conditional access turns context into a clear, explainable policy decision.
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
          eyebrow="Policy Signals"
          title="Eight Context Domains That Can Shape an Access Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {signalDomains.map((item) => (
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

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.caution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Decision Outcomes"
          title="Conditional Access Can Produce Several Useful Outcomes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {decisionOutcomes.map((item) => (
              <article
                key={item.outcome}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.outcome}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Policy Principles"
          title="Eight Principles for Reviewable Access Decisions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {policyPrinciples.map((item) => (
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
          eyebrow="Policy Precedence"
          title="When Several Rules Apply, the Final Decision Must Still Make Sense"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {precedenceModels.map((item) => (
              <article
                key={item.model}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.model}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.use}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Conditional Access and Policy Terms"
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
          eyebrow="Fictional Policy Register"
          title="Seven Northbridge Conditional Access Decisions"
        >
          <div className="grid gap-5">
            {policyRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.outcome}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.request}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Identity", item.identity],
                    ["Resource", item.resource],
                    ["Purpose", item.purpose],
                    ["Privilege", item.privilege],
                    ["Environment", item.environment],
                    ["Session", item.session],
                    ["Device", item.device],
                    ["Lifecycle", item.lifecycle],
                    ["Owner", item.owner],
                    ["Evidence", item.evidence],
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
          title="Northbridge Conditional Access Dashboard"
          subtitle="Fictional policy outcomes, open conditions, and decision-evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Sensitive Export Policy Has Stale Device Evidence"
          severity="High"
          time="10:07"
          source="Fictional Conditional Access Review"
          details="POL-06 involves a sensitive report export. The workforce identity is current, but the device-state source is stale and the policy's fallback behavior is not fully defined."
          recommendation="Keep the decision in Review/Unknown until the evidence source or documented fallback policy supports a confident outcome."
        />

        <Section
          eyebrow="Step-Up vs. Deny"
          title="Strong Security Can Preserve Legitimate Work"
        >
          <p className="leading-8">
            A sensitive request is not automatically an unacceptable request.
            Conditional access can distinguish a legitimate high-impact action
            from an unauthorized one. This lets the design use stronger
            verification and bounded privilege when appropriate instead of
            forcing every request into the same allow-or-deny pattern.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h3 className="text-xl font-black text-emerald-50">
                Step-up fits when purpose is legitimate
              </h3>
              <div className="mt-4 grid gap-3">
                {[
                  "Named identity",
                  "Approved sensitive task",
                  "Higher privilege requested",
                  "Current owner and approval",
                  "Stronger verification available",
                  "Session can be bounded and monitored",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-300/20 bg-slate-950/20 p-3 text-sm text-emerald-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-red-400/20 bg-red-400/10 p-6">
              <h3 className="text-xl font-black text-red-50">
                Deny fits when authorization is absent
              </h3>
              <div className="mt-4 grid gap-3">
                {[
                  "No approved purpose",
                  "Wrong environment",
                  "Resource outside role",
                  "Expired access",
                  "Unowned legacy identity",
                  "Policy explicitly prohibits the request",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-red-300/20 bg-slate-950/20 p-3 text-sm text-red-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Conditional Access Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Sensitive Export"
          question="What is the strongest decision for POL-06?"
          evidence={[
            "The reporting analyst identity is current.",
            "The export function is more sensitive than normal dashboard use.",
            "The policy depends on managed-device state for this action.",
            "The device-state source is stale.",
            "The policy fallback is not fully defined.",
          ]}
          options={[
            "Allow because the identity is current.",
            "Keep the decision in Review/Unknown until current device evidence or a documented fallback policy supports the request.",
            "Treat stale device evidence as current.",
            "Permanently deny all report exports.",
          ]}
          bestAnswer={1}
          explanation="When a required context source is stale, a strong policy uses a visible fallback rather than silently converting uncertainty into trust."
        />

        <Section
          eyebrow="Policy Anti-Patterns"
          title="Eight Ways Conditional Access Becomes Unreliable"
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
          title="Scenario Decision Lab 1 — Privileged Administrative Request"
          scenario="A platform engineer with current workforce identity and admin eligibility requests a production management-plane action from a normal session. The task is legitimate but high impact."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Stale Context Evidence"
          scenario="A reporting analyst requests a sensitive export. The user's role is current, but the device-state source required by policy is stale and the fallback decision has not been fully defined."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Conditional Access Decision Matrix"
        >
          <p className="leading-8">
            Use fictional principals, resources, policies, contexts, owners,
            and synthetic evidence only. Do not alter or test any real
            conditional-access policy.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional policy decision records.",
              "Give every record a stable POL ID.",
              "Record the principal type.",
              "Record the resource.",
              "State the business or technical purpose.",
              "Record requested privilege.",
              "Record environment.",
              "Record relevant session context.",
              "Record relevant device context or mark it Not Applicable.",
              "Record lifecycle state.",
              "Record evidence health.",
              "Assign policy owner and resource owner.",
              "Choose an outcome: Allow, Deny, Step-up, Limited, Conditional, or Review.",
              "Record the rule or precedence that drove the outcome.",
              "Classify overall state as Confirmed, Conditional, Unknown, Blocked, or Accepted Risk.",
              "Include at least two step-up decisions.",
              "Include at least two environment-boundary denials.",
              "Include at least two limited-access partner or external decisions.",
              "Include at least two stale-evidence scenarios with visible fallback outcomes.",
              "Include at least two temporary exceptions with owner, expiration, and target state.",
              "Add change triggers for role, resource sensitivity, provider, environment, device/session policy, ownership, and project lifecycle changes.",
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
              This is a fictional policy-design exercise. Do not modify live
              identity policies, attempt access-control bypass, test credentials,
              manipulate sessions, change device posture, or probe any real
              identity system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Privileged Step-Up"
          question="What is the strongest outcome for POL-02?"
          evidence={[
            "The platform engineer identity is current.",
            "Admin eligibility is documented.",
            "The requested resource is the production management plane.",
            "The requested action is high impact.",
            "The current session is a standard workforce session.",
            "A time-bounded privileged activation workflow is available.",
          ]}
          options={[
            "Allow immediately because admin eligibility exists.",
            "Require step-up verification and privileged activation before the action is allowed.",
            "Deny all administration permanently.",
            "Grant permanent standing administrator access.",
          ]}
          bestAnswer={1}
          explanation="Step-up is appropriate because the task is legitimate but crosses into higher privilege and a more sensitive resource boundary."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Policy Stack for a Fictional Enterprise"
        >
          <p className="leading-8">
            A fictional organization has a workforce baseline policy, sensitive
            application rules, privileged-access rules, partner restrictions,
            staging/production boundaries, and several temporary exceptions.
            Design a policy stack that produces predictable and reviewable
            outcomes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Workforce baseline",
              "Resource-specific rules",
              "Sensitive-action step-up",
              "Privileged activation policy",
              "External partner limited-access policy",
              "Environment-separation rule",
              "Temporary-access policy",
              "Legacy identity block rule",
              "Unknown-evidence fallback",
              "Deny precedence",
              "Exception precedence",
              "Policy ownership",
              "Decision logging",
              "Source-health monitoring",
              "Policy-change review",
              "Expiration and closure rules",
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
            A strong policy stack is not merely restrictive. It is predictable,
            proportionate, explainable, and capable of distinguishing routine
            access, sensitive access, legitimate privilege, exceptions, and
            unsupported requests.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.4 Mini Quiz: Conditional Access and Policy Decisions"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Conditional Access Decision Matrix"
          prompt="Create the fourth artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Conditional Access Decision Matrix with at least twelve policy decisions. Include policy ID, principal, resource, purpose, privilege, environment, session context, device context where relevant, lifecycle, evidence health, policy owner, resource owner, outcome, precedence rule, status, concern, next action, exception reference where needed, and change trigger."
          tips={[
            "Include Allow, Deny, Step-up, Limited, Conditional, and Review outcomes.",
            "Use device context only where it materially improves the decision.",
            "Include at least two stale-evidence scenarios with fail-visible outcomes.",
            "Include at least two privileged step-up decisions.",
            "Include at least two environment-boundary denials.",
            "Use fictional provider-neutral evidence only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.5?"
        >
          <p className="leading-8">
            A13.5 moves into Role-Based and Attribute-Based Access Concepts.
            Before continuing, make sure you can explain which pieces of context
            should shape a policy decision and why a strong outcome may be
            allow, deny, step-up, limit, or review depending on the request.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain conditional access as a policy decision process.",
              "I can distinguish allow, deny, step-up, limited, Conditional, and review outcomes.",
              "I can explain why resource sensitivity and privilege matter.",
              "I can explain fail-visible behavior for stale or missing evidence.",
              "I can explain why policy precedence and ownership must be reviewable.",
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
          title="How to Make the Conditional Access Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the request",
                detail:
                  "Show the principal, resource, action, and purpose before showing the policy outcome.",
              },
              {
                title: "Use context deliberately",
                detail:
                  "Record only the identity, privilege, environment, session, device, or lifecycle signals that matter to the decision.",
              },
              {
                title: "Show outcome and reason",
                detail:
                  "Another reviewer should be able to explain why the policy allowed, denied, stepped up, limited, or reviewed the request.",
              },
              {
                title: "Show precedence",
                detail:
                  "When several rules apply, document which specific rule controlled the result.",
              },
              {
                title: "Show evidence health",
                detail:
                  "Current, stale, missing, delayed, or Unknown evidence should remain visible.",
              },
              {
                title: "Show owners",
                detail:
                  "Policy owner and resource owner should be clear when those responsibilities differ.",
              },
              {
                title: "Show exceptions explicitly",
                detail:
                  "Use owner, expiration, compensating control, target state, and closure requirement.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.5 will compare role-based and attribute-based models using many of these same decision records.",
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
            Conditional-access learning does not require changing real policies
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt password guessing, authentication bypass, session
            manipulation, privilege escalation, device-state manipulation,
            policy bypass, or changes to any real identity platform. All policy
            decisions, signals, outcomes, logs, and evidence in this lesson are
            fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.4 Conditional Access and Policy Decisions Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a conditional-access model built around policy signals,
            outcomes, step-up verification, environment, lifecycle, evidence
            health, precedence, exceptions, and decision logging. Next, A13.5
            focuses on Role-Based and Attribute-Based Access Concepts.
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