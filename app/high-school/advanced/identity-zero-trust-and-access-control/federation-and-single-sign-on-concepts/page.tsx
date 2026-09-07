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
const previousLesson = `${modulePath}/zero-trust-principles`;
const nextLesson = `${modulePath}/conditional-access-and-policy-decisions`;

const objectives = [
  "Explain federation and single sign-on as trust architecture involving identity providers, relying services, identity assertions, ownership, lifecycle, and monitoring.",
  "Distinguish authentication source, federation trust, application authorization, SSO session, external sponsorship, and local fallback access as separate design concerns.",
  "Evaluate fictional federation relationships for excessive trust, stale ownership, broad application scope, weak lifecycle controls, and incomplete evidence.",
  "Analyze how federation can improve identity lifecycle and user experience while still requiring resource-specific authorization and zero-trust review.",
  "Build a Federation Trust Register that becomes the third artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const federationRoles = [
  {
    role: "Identity provider",
    purpose:
      "Authenticates the user or workload and provides identity context to another service.",
    architectureConcern:
      "The relying service should understand exactly what identity source it trusts and under what conditions.",
    evidence:
      "Provider owner, trust configuration metadata, lifecycle, supported identity populations, monitoring, and change history.",
  },
  {
    role: "Relying service",
    purpose:
      "Consumes trusted identity context and still decides what the identity may do inside the application.",
    architectureConcern:
      "Federated authentication should not be confused with broad application authorization.",
    evidence:
      "Application owner, accepted identity source, role mapping, resource policy, access review, and authorization logs.",
  },
  {
    role: "Federation relationship",
    purpose:
      "Defines the trust connection between an identity source and a relying service.",
    architectureConcern:
      "The relationship needs purpose, scope, ownership, lifecycle, and review just like any other security dependency.",
    evidence:
      "Trust ID, owner, relying service, identity provider, identity population, review date, and status.",
  },
  {
    role: "SSO session",
    purpose:
      "Lets an already authenticated user move across approved relying services without repeating the full login experience every time.",
    architectureConcern:
      "Convenience should not create unlimited trust across all connected applications.",
    evidence:
      "Session policy metadata, application-specific authorization decisions, session expiration, and monitoring.",
  },
  {
    role: "External federation",
    purpose:
      "Lets an outside organization authenticate its users while the internal organization controls what those users may access.",
    architectureConcern:
      "Technical trust must remain tied to sponsor, business purpose, population scope, review, and expiration.",
    evidence:
      "External organization owner, sponsor, identity population, allowed applications, review date, and activity evidence.",
  },
  {
    role: "Fallback or local account",
    purpose:
      "Provides exceptional access when a federated path is unavailable or inappropriate.",
    architectureConcern:
      "Fallback identities can silently bypass normal lifecycle and monitoring if not strongly governed.",
    evidence:
      "Business reason, owner, emergency purpose, storage method metadata, review cadence, use evidence, and retirement plan.",
  },
];

const federationPrinciples = [
  {
    title: "Federation moves trust; it does not remove trust",
    meaning:
      "Instead of every application verifying identity independently, a relying service accepts identity context from an approved identity source.",
    review:
      "Which identity source is being trusted, for which population, and for which relying service?",
  },
  {
    title: "SSO improves experience, not authorization scope",
    meaning:
      "One sign-in can reduce repeated authentication, but each application still needs its own authorization decisions.",
    review:
      "Can a user reach only the applications and functions appropriate to their role?",
  },
  {
    title: "Identity source and resource owner are different responsibilities",
    meaning:
      "An identity team can establish who the person is while an application owner decides what that person may do.",
    review:
      "Are authentication ownership and application authorization ownership both clear?",
  },
  {
    title: "Claims or attributes should have purpose",
    meaning:
      "Identity context should be limited to what a relying service actually needs to make access decisions.",
    review:
      "Is the application receiving only relevant identity metadata?",
  },
  {
    title: "Trust relationships need lifecycle",
    meaning:
      "Federation should be reviewed when applications, providers, business partnerships, ownership, or identity populations change.",
    review:
      "What events trigger review or retirement of the federation trust?",
  },
  {
    title: "External federation needs sponsorship",
    meaning:
      "An outside organization may authenticate its own users, but the internal organization still owns the decision to accept and authorize them.",
    review:
      "Who sponsors the external population and when is the relationship reviewed?",
  },
  {
    title: "Fallback access should remain exceptional",
    meaning:
      "Local accounts can become unmanaged bypass paths if they are permanent, shared, or weakly monitored.",
    review:
      "Is fallback access named, bounded, monitored, reviewed, and tested only through safe administrative assurance?",
  },
  {
    title: "Monitoring should cover both trust and use",
    meaning:
      "Strong evidence includes federation health, identity sign-ins, application authorization, policy changes, and source health.",
    review:
      "Can the organization tell whether the trust relationship is healthy and whether access decisions are behaving as intended?",
  },
];

const trustDimensions = [
  {
    dimension: "Identity source",
    question:
      "Which provider or authority establishes the identity?",
    evidence:
      "Identity-provider record, owner, supported population, and current trust metadata.",
  },
  {
    dimension: "Relying service",
    question:
      "Which application accepts the federated identity?",
    evidence:
      "Application owner, service inventory, federation configuration record, and access policy.",
  },
  {
    dimension: "Identity population",
    question:
      "Which users or workloads are included?",
    evidence:
      "Workforce group, partner population, contractor cohort, or approved service identities.",
  },
  {
    dimension: "Purpose",
    question:
      "Why does the trust relationship exist?",
    evidence:
      "Business process, service dependency, partnership requirement, or approved user experience goal.",
  },
  {
    dimension: "Identity context",
    question:
      "Which attributes or claims are actually needed?",
    evidence:
      "Role, group, organization, employment state, or other minimal identity metadata.",
  },
  {
    dimension: "Authorization boundary",
    question:
      "What can a successfully federated identity do?",
    evidence:
      "Application roles, resource permissions, entitlement mapping, and authorization logs.",
  },
  {
    dimension: "Lifecycle",
    question:
      "When should the trust relationship change or end?",
    evidence:
      "Application retirement, provider change, contract end, owner change, identity-population change, or review date.",
  },
  {
    dimension: "Monitoring",
    question:
      "What evidence shows federation and SSO remain healthy and properly used?",
    evidence:
      "Sign-in telemetry, authorization events, trust changes, source health, and access reviews.",
  },
];

const vocabulary = [
  {
    term: "Federation",
    definition:
      "A trust arrangement in which one identity system provides identity context that another service accepts for authentication decisions.",
  },
  {
    term: "Identity provider",
    definition:
      "The system or authority that authenticates an identity and provides trusted identity context to a relying service.",
  },
  {
    term: "Relying service",
    definition:
      "An application or service that accepts federated identity context and then applies its own authorization rules.",
  },
  {
    term: "Single sign-on",
    definition:
      "A user experience in which one successful authentication can support access to multiple approved services without repeating the full sign-in flow each time.",
  },
  {
    term: "Identity assertion",
    definition:
      "A signed or otherwise trusted statement from an identity source that conveys identity context to a relying service.",
  },
  {
    term: "Claim",
    definition:
      "A piece of identity-related information such as role, organization, or account state used by a relying service.",
  },
  {
    term: "Attribute mapping",
    definition:
      "The controlled translation of identity information from one system into the fields or roles expected by another system.",
  },
  {
    term: "Trust relationship",
    definition:
      "The documented agreement that one system will accept identity context from another system under defined conditions.",
  },
  {
    term: "Session",
    definition:
      "A bounded period in which an authenticated identity interacts with a relying service under current policy.",
  },
  {
    term: "External federation",
    definition:
      "Federated access involving an identity provider outside the organization, such as a partner or contractor identity source.",
  },
  {
    term: "Fallback identity",
    definition:
      "A local or alternate identity used when normal federation is unavailable or inappropriate.",
  },
  {
    term: "Trust lifecycle",
    definition:
      "The creation, approval, review, modification, suspension, and retirement of a federation relationship.",
  },
];

const federationRecords = [
  {
    id: "FED-01",
    relationship: "Workforce Identity Provider → Student Services Portal",
    provider: "Northbridge Workforce Identity Provider",
    relyingService: "Student Services Portal",
    population: "Counselor Workforce Group",
    purpose: "Workforce SSO for approved student-support workflows",
    identityContext: "Workforce state + counselor role",
    authorization: "Portal applies counselor-specific application permissions",
    owner: "Identity Team + Student Services Application Owner",
    lifecycle: "Quarterly trust review + application/role change trigger",
    monitoring: "Federation health + sign-in + application authorization logs",
    status: "Confirmed",
    concern:
      "Application authorization remains separate from federated authentication.",
  },
  {
    id: "FED-02",
    relationship: "Workforce Identity Provider → Cloud Administration Portal",
    provider: "Northbridge Workforce Identity Provider",
    relyingService: "Cloud Administration Portal",
    population: "Approved Platform Administrators",
    purpose: "Base workforce authentication before privileged activation",
    identityContext: "Workforce identity + admin eligibility",
    authorization: "Privileged access requires separate time-bounded activation",
    owner: "Identity Team + Platform Engineering",
    lifecycle: "Monthly privileged trust review",
    monitoring: "Federation + privileged activation + admin audit",
    status: "Conditional",
    concern:
      "One emergency privileged session has incomplete post-use review evidence.",
  },
  {
    id: "FED-03",
    relationship: "Partner Identity Provider → Scheduling Integration Console",
    provider: "Fictional Partner Identity Provider",
    relyingService: "Scheduling Integration Console",
    population: "Approved Partner Support Group",
    purpose: "Partner support for scheduling integration",
    identityContext: "Partner identity + support group",
    authorization: "Narrow support functions only",
    owner: "Integration Owner + Partner Sponsor",
    lifecycle: "Review due in 30 days",
    monitoring: "External federation + console authorization logs",
    status: "Conditional",
    concern:
      "Sponsor is current, but continued partner access must be reviewed.",
  },
  {
    id: "FED-04",
    relationship: "Workforce Identity Provider → Reporting Dashboard",
    provider: "Northbridge Workforce Identity Provider",
    relyingService: "Reporting Dashboard",
    population: "Reporting Analysts",
    purpose: "SSO to approved analytics reporting",
    identityContext: "Workforce state + reporting role",
    authorization: "Dashboard controls dataset/report scope",
    owner: "Analytics Product Owner",
    lifecycle: "Quarterly review",
    monitoring: "Federated sign-in + report access logs",
    status: "Confirmed",
    concern:
      "Reporting role must not imply access to unrelated operational datasets.",
  },
  {
    id: "FED-05",
    relationship: "Legacy Local Login → Generated Report Storage",
    provider: "Local legacy account",
    relyingService: "Generated Report Storage",
    population: "Legacy Reporting Job",
    purpose: "Historical automated report delivery",
    identityContext: "Long-lived local account metadata",
    authorization: "Legacy storage permissions",
    owner: "Unknown",
    lifecycle: "No current review date",
    monitoring: "Partial",
    status: "Blocked",
    concern:
      "Local fallback path bypasses the governed federation lifecycle and lacks accountable ownership.",
  },
  {
    id: "FED-06",
    relationship: "Workforce Identity Provider → HR Benefits Portal",
    provider: "Northbridge Workforce Identity Provider",
    relyingService: "HR Benefits Portal",
    population: "Active Workforce",
    purpose: "Employee self-service SSO",
    identityContext: "Active workforce state",
    authorization: "Portal limits users to their own benefits workflow",
    owner: "HR Systems Owner",
    lifecycle: "Annual trust review + provider/application change trigger",
    monitoring: "Federation + portal authorization telemetry",
    status: "Confirmed",
    concern:
      "SSO convenience does not expand access beyond each user's own workflow.",
  },
  {
    id: "FED-07",
    relationship: "Temporary Migration Identity Source → Migration Console",
    provider: "Temporary Project Identity Source",
    relyingService: "Migration Console",
    population: "Approved Migration Operators",
    purpose: "Time-bounded migration support",
    identityContext: "Named temporary operators",
    authorization: "Migration-specific actions only",
    owner: "Migration Project Owner",
    lifecycle: "Expires at migration checkpoint",
    monitoring: "Federation + migration audit",
    status: "Conditional",
    concern:
      "The trust relationship must be retired when the project window closes.",
  },
];

const dashboardMetrics = [
  {
    label: "Federation relationships",
    value: "7",
    note: "Workforce, privileged, partner, reporting, legacy, HR, and temporary project relationships",
  },
  {
    label: "Confirmed",
    value: "3",
    note: "Student Services, Reporting Dashboard, and HR Benefits federation are current",
  },
  {
    label: "Conditional",
    value: "3",
    note: "Privileged review, partner renewal, and migration expiration require follow-up",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy local login lacks current ownership and federation lifecycle governance",
  },
];

const logs = [
  "[08:10] FED-01 workforce-idp->student-services trust=CURRENT authz=APP_ROLE state=CONFIRMED",
  "[08:34] FED-02 workforce-idp->admin-portal privilege=JIT post_review=PARTIAL state=CONDITIONAL",
  "[08:58] FED-03 partner-idp->scheduling sponsor=CURRENT review_due=30d state=CONDITIONAL",
  "[09:21] FED-04 workforce-idp->reporting role=ANALYST authz=DATASET_SCOPED state=CONFIRMED",
  "[09:47] FED-05 local-legacy->report-storage owner=UNKNOWN monitoring=PARTIAL state=BLOCKED",
  "[10:12] FED-06 workforce-idp->benefits population=ACTIVE_WORKFORCE state=CONFIRMED",
  "[10:38] FED-07 temp-idp->migration expires=PROJECT_CHECKPOINT state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "SSO means access to everything",
    problem:
      "One successful authentication is treated as authorization across all connected applications.",
    better:
      "Keep application and resource authorization separate from the SSO experience.",
  },
  {
    title: "Federation trust with no owner",
    problem:
      "Nobody is accountable for reviewing whether the trust relationship should continue.",
    better:
      "Assign provider, application, and business owners.",
  },
  {
    title: "External federation without sponsor",
    problem:
      "Partner users remain technically valid even after the business relationship changes.",
    better:
      "Tie external federation to current sponsor, business purpose, population, review, and expiration.",
  },
  {
    title: "Too many claims by default",
    problem:
      "Applications receive identity data they do not need for authorization.",
    better:
      "Send only the minimum relevant identity context.",
  },
  {
    title: "Fallback account becomes permanent",
    problem:
      "A temporary local access path silently becomes a standing bypass around federation governance.",
    better:
      "Keep fallback access named, bounded, monitored, and reviewed.",
  },
  {
    title: "Provider change without trust review",
    problem:
      "Applications continue relying on old assumptions after identity architecture changes.",
    better:
      "Trigger review on provider, application, ownership, or population changes.",
  },
  {
    title: "Federated identity controls application roles",
    problem:
      "The identity provider is assumed to determine every application permission.",
    better:
      "Let relying services maintain resource-specific authorization ownership.",
  },
  {
    title: "Monitoring only the identity provider",
    problem:
      "The team can see sign-ins but cannot explain what the user did inside each application.",
    better:
      "Monitor federation health plus relying-service authorization and activity.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep partner federation Conditional, preserve narrow application scope, and require sponsor review before the scheduled renewal date.",
    outcome:
      "Best. External federation can be legitimate while still remaining bounded and lifecycle-controlled.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Make the partner trust permanent because the identity provider is technically reliable.",
    outcome:
      "Risky. Technical reliability does not replace business sponsorship or access lifecycle.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Allow the partner identity into every SSO-connected application for convenience.",
    outcome:
      "Risky. Federation authentication should not create broad cross-application authorization.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the local legacy reporting login Blocked until ownership, current need, monitoring, and retirement are resolved.",
    outcome:
      "Best. A fallback or legacy path should not silently bypass the governed identity architecture.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because local accounts are outside federation scope.",
    outcome:
      "Risky. Local identities still create access paths and must be governed.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Share the local account with additional teams so it always has an operator.",
    outcome:
      "Risky. Sharing reduces accountability and increases standing trust.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is federation?",
    choices: [
      "A trust arrangement in which one identity system provides identity context that another service accepts.",
      "A method for giving every user the same permissions.",
      "A replacement for application authorization.",
      "A network segmentation technique.",
    ],
    answer: 0,
    explanation:
      "Federation moves identity verification trust across systems while the relying service still owns authorization.",
  },
  {
    question:
      "What does single sign-on improve most directly?",
    choices: [
      "User experience by reducing repeated authentication across approved services.",
      "Application authorization by granting all roles automatically.",
      "Network isolation.",
      "Data encryption.",
    ],
    answer: 0,
    explanation:
      "SSO reduces repeated sign-in friction but does not remove resource-specific authorization.",
  },
  {
    question:
      "Why should a relying service keep its own authorization logic?",
    choices: [
      "Because successful federated authentication only proves identity context, not permission to every resource or action.",
      "Because federation cannot identify users.",
      "Because SSO is only for administrators.",
      "Because identity providers should not be monitored.",
    ],
    answer: 0,
    explanation:
      "Authentication and authorization remain separate architecture decisions.",
  },
  {
    question:
      "What is the strongest design for external federation?",
    choices: [
      "Permanent broad access to all connected applications.",
      "Current sponsor, explicit business purpose, bounded population, narrow service scope, review or expiration, and monitoring.",
      "No internal owner because the users belong to another company.",
      "Local shared credentials.",
    ],
    answer: 1,
    explanation:
      "External federation should remain tied to current sponsorship and bounded technical access.",
  },
  {
    question:
      "Why can fallback local accounts be risky?",
    choices: [
      "They can become standing bypass paths around normal federation lifecycle and monitoring.",
      "They always improve zero trust.",
      "They cannot access resources.",
      "They automatically expire.",
    ],
    answer: 0,
    explanation:
      "Fallback access needs strong governance because it may not inherit normal federation lifecycle controls.",
  },
  {
    question:
      "What should happen when an identity provider or relying application changes significantly?",
    choices: [
      "Nothing; federation trust never needs review.",
      "Trigger a trust review because provider, application, population, ownership, or authorization assumptions may have changed.",
      "Delete all users.",
      "Grant broader SSO access.",
    ],
    answer: 1,
    explanation:
      "Federation trust should be lifecycle-managed as the underlying architecture changes.",
  },
  {
    question:
      "What is the strongest federation monitoring model?",
    choices: [
      "Monitor only whether the identity provider is online.",
      "Monitor federation health, sign-ins, relying-service authorization, policy changes, activity, and source health.",
      "Monitor only failed sign-ins.",
      "No monitoring is needed if SSO is enabled.",
    ],
    answer: 1,
    explanation:
      "Useful evidence spans both the trust relationship and what identities do inside relying services.",
  },
];

const checklistItems = [
  "Every federation relationship has a stable ID.",
  "The identity provider is identified and owned.",
  "The relying service is identified and owned.",
  "The allowed identity population is explicit.",
  "Business or technical purpose is documented.",
  "Only necessary identity context is shared.",
  "Application authorization remains separate from federated authentication.",
  "SSO convenience does not create broad cross-application access.",
  "External federation has an internal sponsor.",
  "External populations have review or expiration.",
  "Privileged federation does not bypass privileged-access controls.",
  "Temporary federation has explicit end conditions.",
  "Fallback or local identities are named and governed.",
  "Fallback identities remain exceptional rather than permanent.",
  "Trust relationships have review triggers.",
  "Provider/application/owner/population changes trigger reassessment.",
  "Monitoring covers federation health and relying-service authorization.",
  "Source health supports confidence in federation telemetry.",
  "Blocked or unknown trust relationships remain visible.",
  "No lesson activity requires real credentials, login testing, or access to a live identity provider.",
];

const takeaways = [
  "Federation is a trust architecture, not simply a login convenience.",
  "The identity provider establishes identity context; the relying service still owns authorization.",
  "SSO reduces repeated authentication but should not create broad application access.",
  "Identity claims or attributes should be limited to what a relying service actually needs.",
  "External federation requires sponsorship, narrow scope, review, and lifecycle governance.",
  "Fallback local accounts can become hidden bypass paths if they are not strongly controlled.",
  "Provider, application, population, and ownership changes should trigger federation review.",
  "Monitoring should cover trust health plus application authorization and activity.",
  "Federation fits zero trust when trust is explicit, bounded, observable, and reviewable.",
  "The Federation Trust Register will support A13.4 Conditional Access and Policy Decisions.",
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

export default function FederationAndSingleSignOnConceptsPage() {
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
              A13.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Federation and Single Sign-On Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Federation lets one trusted identity source provide identity
            context to another application. Single sign-on can make that
            experience easier for users, but strong architecture still needs
            resource-specific authorization, ownership, lifecycle, and evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays provider-neutral and conceptual. It uses fictional
            identity providers, relying services, trust records, and synthetic
            logs only. No real credentials or live federation systems are used.
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
          lessonTitle="Federation and Single Sign-On Concepts"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.3 Entry Readiness"
          items={[
            "I can distinguish authentication from authorization.",
            "I understand zero trust as reducing assumed trust rather than blocking all access.",
            "I understand workforce, privileged, workload, external, and temporary identities.",
            "I will use only fictional federation relationships and safe metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="One Sign-In Can Simplify Identity Without Simplifying Every Authorization Decision"
        >
          <p className="leading-8">
            A counselor may authenticate once and then open several approved
            applications. That can improve usability and reduce duplicate
            identity stores. But the Student Services Portal, Reporting
            Dashboard, and Benefits Portal still have different data,
            responsibilities, and authorization requirements. Federation
            centralizes some identity trust; it does not erase application
            boundaries.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Federation answers “Which identity source do we trust?” while the
              relying service still answers “What may this identity do here?”
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
          eyebrow="Federation Roles"
          title="Six Parts of the Trust Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {federationRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.architectureConcern}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Useful evidence
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
          eyebrow="Federation Principles"
          title="Eight Principles for Strong Federation and SSO Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {federationPrinciples.map((item) => (
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
          eyebrow="Trust Dimensions"
          title="What Belongs in a Federation Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trustDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Core question: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Federation and SSO Terms"
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
          eyebrow="Fictional Federation Register"
          title="Seven Northbridge Trust Relationships"
        >
          <div className="grid gap-5">
            {federationRecords.map((item) => (
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
                    ["Identity provider", item.provider],
                    ["Relying service", item.relyingService],
                    ["Identity population", item.population],
                    ["Purpose", item.purpose],
                    ["Identity context", item.identityContext],
                    ["Authorization", item.authorization],
                    ["Owner", item.owner],
                    ["Lifecycle", item.lifecycle],
                    ["Monitoring", item.monitoring],
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
          title="Northbridge Federation Trust Dashboard"
          subtitle="Fictional federation ownership, lifecycle, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Local Login Bypasses Federation Governance"
          severity="High"
          time="09:47"
          source="Fictional Federation Governance Review"
          details="FED-05 uses a long-lived local identity for production report storage. The current owner is Unknown, monitoring is Partial, and there is no current trust-lifecycle review."
          recommendation="Keep the relationship Blocked until ownership, business need, monitoring, modernization, and retirement are resolved."
        />

        <Section
          eyebrow="SSO and Authorization"
          title="One Session Can Serve Multiple Applications Without Giving Every Application the Same Permissions"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                SSO experience
              </h3>
              <p className="mt-3 leading-7 text-cyan-100">
                The user authenticates to an approved identity source and can
                move between connected relying services without repeatedly
                entering credentials.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Shared authentication source",
                  "Bounded session lifetime",
                  "Consistent workforce lifecycle",
                  "Reduced duplicate local passwords",
                  "Central sign-in visibility",
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
                Application authorization
              </h3>
              <p className="mt-3 leading-7 text-purple-100">
                Each relying service still decides which resources and actions
                the authenticated identity may use.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Application role",
                  "Resource scope",
                  "Action permissions",
                  "Environment",
                  "Business purpose",
                  "Access review",
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
          title="Fictional Federation Trust Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Federation"
          question="What is the strongest status for FED-03?"
          evidence={[
            "The partner identity provider is documented.",
            "The allowed identity population is the approved Partner Support Group.",
            "The relying service is limited to the Scheduling Integration Console.",
            "The internal sponsor is current.",
            "The next access review is due in 30 days.",
          ]}
          options={[
            "Confirmed forever because the identity provider is trusted.",
            "Conditional until the scheduled review confirms the partner relationship should continue.",
            "Blocked because zero trust never allows federation.",
            "Automatically broaden access to all SSO applications.",
          ]}
          bestAnswer={1}
          explanation="External federation can be legitimate, but the trust relationship should stay tied to sponsorship, narrow scope, and lifecycle review."
        />

        <Section
          eyebrow="Federation Anti-Patterns"
          title="Eight Ways Federation Trust Becomes Too Broad"
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
          title="Scenario Decision Lab 1 — Partner Federation Renewal"
          scenario="A partner identity provider is healthy, the integration scope is narrow, and the internal sponsor is current. The federation review date is approaching."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Legacy Local Login"
          scenario="A legacy reporting job still uses a local production login outside the main federation model. The current owner is Unknown and monitoring is incomplete."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Federation Trust Register"
        >
          <p className="leading-8">
            Use fictional identity providers, relying services, identity
            populations, owners, sessions, and evidence. Do not access or
            configure any real federation environment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least ten fictional federation relationships.",
              "Give every relationship a stable FED ID.",
              "Record the identity provider.",
              "Record the relying service.",
              "Record the identity population.",
              "State business or technical purpose.",
              "Record the minimum identity context needed.",
              "Record application authorization ownership.",
              "Record provider owner.",
              "Record relying-service owner.",
              "Record sponsor for external federation.",
              "Record lifecycle review date or change trigger.",
              "Record monitoring evidence.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Include at least two workforce SSO relationships.",
              "Include at least one privileged federation relationship.",
              "Include at least two external or partner federation relationships.",
              "Include at least one temporary federation relationship.",
              "Include at least one fallback/local identity and evaluate whether it should remain.",
              "Add change triggers for provider, application, owner, population, partner, privilege, and service-retirement changes.",
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
              Use fictional providers, services, populations, and synthetic
              evidence only. Do not collect real account information, inspect
              live federation metadata, test authentication, alter SSO settings,
              or attempt to access any real identity system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Local Access"
          question="What is the strongest conclusion for FED-05?"
          evidence={[
            "The account is used in production.",
            "It exists outside the main federation model.",
            "The current owner is Unknown.",
            "Monitoring is Partial.",
            "No current lifecycle review is documented.",
          ]}
          options={[
            "Confirmed because local accounts are not part of federation.",
            "Blocked until purpose, ownership, monitoring, lifecycle, modernization, and retirement are resolved.",
            "Share the account with more operators.",
            "Ignore the account because it is automated.",
          ]}
          bestAnswer={1}
          explanation="A local or fallback identity still creates a trust path. It must be governed even when it sits outside federation."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Federation Architecture for a Fictional Organization"
        >
          <p className="leading-8">
            A fictional organization currently has three separate local
            application logins, one partner login, one permanent administrator
            account, and a legacy reporting account. Redesign the identity
            experience conceptually using federation and SSO while preserving
            application-specific authorization.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Primary workforce identity provider",
              "Approved relying services",
              "Identity population per service",
              "Application-specific authorization",
              "Minimal identity context",
              "Privileged federation boundary",
              "Time-bounded privileged activation",
              "External federation sponsor",
              "External federation expiration",
              "Temporary project federation",
              "Fallback/local account governance",
              "Federation lifecycle review",
              "Provider-change trigger",
              "Application-change trigger",
              "Monitoring and source health",
              "Blocked legacy trust that must be retired",
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
            The goal is not to centralize every authorization decision. A strong
            design centralizes identity where appropriate while preserving
            resource ownership and least-privilege authorization at each relying
            service.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.3 Mini Quiz: Federation and Single Sign-On Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Federation Trust Register"
          prompt="Create the third artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Federation Trust Register with at least ten trust relationships. Include federation ID, identity provider, relying service, identity population, purpose, minimal identity context, authorization owner, provider owner, relying-service owner, sponsor where needed, lifecycle, monitoring evidence, status, concern, next action, and change trigger."
          tips={[
            "Include workforce, privileged, external, and temporary federation examples.",
            "Show SSO convenience separately from application authorization.",
            "Use only minimal identity context needed by each relying service.",
            "Include at least one fallback/local identity and decide whether it should remain.",
            "Keep uncertain or unowned relationships Conditional, Unknown, or Blocked.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.4?"
        >
          <p className="leading-8">
            A13.4 moves into Conditional Access and Policy Decisions. Before
            continuing, make sure you can explain how federation establishes
            identity context while application authorization still uses its own
            policy and resource conditions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain federation as a trust relationship.",
              "I can distinguish identity provider from relying service.",
              "I can explain why SSO does not automatically grant application permissions.",
              "I can evaluate external federation using sponsor, scope, lifecycle, and evidence.",
              "I can explain why fallback local identities still require governance.",
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
          title="How to Make the Federation Trust Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable trust IDs",
                detail:
                  "Make every provider-to-service relationship easy to reference in later A13 lessons.",
              },
              {
                title: "Show both sides of trust",
                detail:
                  "List the identity provider and relying service instead of describing federation as a generic login feature.",
              },
              {
                title: "Separate authentication and authorization",
                detail:
                  "Record identity context separately from the permissions enforced by the relying service.",
              },
              {
                title: "Show population scope",
                detail:
                  "Make clear which workforce, partner, admin, temporary, or service population is included.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Use review dates and provider/application/owner/population changes as trust triggers.",
              },
              {
                title: "Show monitoring",
                detail:
                  "Federation health, sign-ins, authorization, policy change, and source-health evidence should support major claims.",
              },
              {
                title: "Keep fallback access visible",
                detail:
                  "Do not hide local identities just because they sit outside the federation architecture.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.4 will use these federation relationships when evaluating contextual policy decisions.",
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
            Federation concepts do not require testing real login systems
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt password guessing, account enumeration,
            authentication bypass, token theft, session hijacking, federation
            manipulation, privilege escalation, or access to real identity
            providers. All providers, applications, trust records, and logs in
            this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.3 Federation and Single Sign-On Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a federation model built around identity providers,
            relying services, SSO, application authorization, external trust,
            lifecycle, fallback access, ownership, and monitoring. Next, A13.4
            focuses on Conditional Access and Policy Decisions.
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