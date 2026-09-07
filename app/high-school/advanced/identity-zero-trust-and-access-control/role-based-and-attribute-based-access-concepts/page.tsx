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
const previousLesson = `${modulePath}/conditional-access-and-policy-decisions`;
const nextLesson = `${modulePath}/privileged-access-management-concepts`;

const objectives = [
  "Explain role-based access control and attribute-based access control as different ways to model authorization decisions.",
  "Evaluate when roles, attributes, or a hybrid model produce clearer, more maintainable, and more least-privileged access.",
  "Identify role explosion, stale role membership, weak attribute quality, conflicting policy, excessive exception use, and unclear ownership as access-model risks.",
  "Connect RBAC and ABAC to conditional access, federation, workload identity, privileged access, environment separation, lifecycle, and governance.",
  "Build an Access Model Comparison that becomes the fifth artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const modelComparison = [
  {
    model: "Role-Based Access Control",
    shorthand: "RBAC",
    idea:
      "Permissions are grouped into roles, and identities receive access by being assigned to those roles.",
    strengths:
      "Clear business mapping, easier reviews when roles are well designed, simple explanation, good fit for stable job functions.",
    risks:
      "Role explosion, overbroad roles, stale membership, inherited access that no longer matches actual duties.",
    goodFit:
      "Counselor, teacher, reporting analyst, help-desk operator, application administrator, platform engineer.",
  },
  {
    model: "Attribute-Based Access Control",
    shorthand: "ABAC",
    idea:
      "Policy evaluates attributes about the identity, resource, action, environment, or context.",
    strengths:
      "Flexible and contextual, can express precise conditions, useful when access depends on several properties.",
    risks:
      "Complexity, unclear policy logic, stale attributes, poor attribute ownership, difficult troubleshooting if rules are not documented.",
    goodFit:
      "Environment-aware access, department + data classification decisions, time-bounded project access, workload-to-resource policy.",
  },
  {
    model: "Hybrid Access Model",
    shorthand: "RBAC + ABAC",
    idea:
      "Roles provide a stable baseline while attributes refine scope or conditions.",
    strengths:
      "Balances understandable role structure with contextual precision.",
    risks:
      "Can become hard to reason about if roles and attributes overlap, conflict, or lack clear precedence.",
    goodFit:
      "Production administration, partner support, sensitive reporting, workload access, multi-environment applications.",
  },
];

const roleDesignPrinciples = [
  {
    title: "Design roles around real responsibility",
    meaning:
      "A role should represent a recognizable business or technical function rather than a random collection of permissions.",
    review:
      "Can a manager or resource owner explain why this role exists?",
  },
  {
    title: "Keep roles narrow enough to review",
    meaning:
      "Roles should not combine unrelated resources simply because the same team sometimes uses both.",
    review:
      "Would every member of the role need every permission inside it?",
  },
  {
    title: "Separate standard and privileged roles",
    meaning:
      "Daily application work should remain distinct from administrative or security-sensitive access.",
    review:
      "Can a user perform normal duties without holding standing administrative access?",
  },
  {
    title: "Use environment-specific roles where needed",
    meaning:
      "Development, staging, and production should not automatically share the same access role.",
    review:
      "Does a lower-environment role accidentally include production permissions?",
  },
  {
    title: "Review role membership, not only role definition",
    meaning:
      "A well-designed role can still be risky if the wrong identities remain assigned to it.",
    review:
      "Are current members still performing the responsibility the role represents?",
  },
  {
    title: "Retire unused roles",
    meaning:
      "Obsolete roles can preserve forgotten permissions and confuse future reviewers.",
    review:
      "Is the role still attached to an active business or technical responsibility?",
  },
];

const attributePrinciples = [
  {
    title: "Attributes need trusted sources",
    meaning:
      "A policy is only as reliable as the systems that provide department, role, environment, device, project, ownership, or resource attributes.",
    review:
      "Who owns the attribute and how current is it?",
  },
  {
    title: "Use attributes that change the decision",
    meaning:
      "More attributes do not automatically create stronger security.",
    review:
      "Does this attribute meaningfully affect authorization?",
  },
  {
    title: "Separate identity and resource attributes",
    meaning:
      "Policy can evaluate who the principal is and what kind of resource is being requested.",
    review:
      "Are subject and resource attributes clearly distinguished?",
  },
  {
    title: "Make policy logic understandable",
    meaning:
      "Precise ABAC rules should still be readable enough that another reviewer can explain the outcome.",
    review:
      "Can the policy decision be explained without reconstructing hidden logic?",
  },
  {
    title: "Treat stale attributes as evidence problems",
    meaning:
      "An outdated department, project, device, or ownership value can produce the wrong access decision.",
    review:
      "What happens when the attribute source is stale or Unknown?",
  },
  {
    title: "Avoid unnecessary personal data",
    meaning:
      "Attributes should be limited to what the authorization decision actually requires.",
    review:
      "Is the policy using the minimum relevant metadata?",
  },
];

const decisionDimensions = [
  {
    dimension: "Business responsibility",
    rbac:
      "Often represented as a role such as Counselor or Reporting Analyst.",
    abac:
      "Could be represented by identity attributes such as department, function, or project.",
    question:
      "Is the responsibility stable enough to deserve a reusable role?",
  },
  {
    dimension: "Resource sensitivity",
    rbac:
      "May require a dedicated sensitive-data or admin role.",
    abac:
      "Can evaluate resource classification directly.",
    question:
      "Should the resource itself influence the decision?",
  },
  {
    dimension: "Environment",
    rbac:
      "Can use separate staging and production roles.",
    abac:
      "Can compare identity/workload environment against resource environment.",
    question:
      "Would environment-specific attributes reduce role duplication?",
  },
  {
    dimension: "Time",
    rbac:
      "Can assign a temporary role with expiration.",
    abac:
      "Can evaluate an approved project window or time-bounded attribute.",
    question:
      "Is the access stable or temporary?",
  },
  {
    dimension: "Privilege",
    rbac:
      "Privileged duties can be grouped into dedicated admin roles.",
    abac:
      "Additional context can restrict when the role becomes usable.",
    question:
      "Would a hybrid model better protect high-impact actions?",
  },
  {
    dimension: "External access",
    rbac:
      "Partner support can receive a narrow external support role.",
    abac:
      "Policy can also require sponsor, organization, contract, or expiration attributes.",
    question:
      "Does external access need both a role and lifecycle attributes?",
  },
  {
    dimension: "Workload access",
    rbac:
      "A workload can receive a service role with approved permissions.",
    abac:
      "Policy can compare workload, environment, application, and resource attributes.",
    question:
      "Would workload-to-resource matching benefit from attributes?",
  },
  {
    dimension: "Reviewability",
    rbac:
      "Role membership is often easy to review if roles are well named.",
    abac:
      "Policy may be more precise but harder to explain if attributes and rules are complex.",
    question:
      "Which model gives reviewers the clearest evidence?",
  },
];

const vocabulary = [
  {
    term: "RBAC",
    definition:
      "Role-Based Access Control: permissions are grouped into roles, and identities receive access through role assignment.",
  },
  {
    term: "ABAC",
    definition:
      "Attribute-Based Access Control: policy evaluates attributes about identities, resources, actions, or context.",
  },
  {
    term: "Role",
    definition:
      "A named collection of permissions associated with a recognizable business or technical responsibility.",
  },
  {
    term: "Role membership",
    definition:
      "The identities currently assigned to a role.",
  },
  {
    term: "Role explosion",
    definition:
      "The uncontrolled growth of many narrowly different roles that become difficult to understand and govern.",
  },
  {
    term: "Attribute",
    definition:
      "A piece of metadata used by policy, such as department, project, environment, resource class, or ownership state.",
  },
  {
    term: "Subject attribute",
    definition:
      "An attribute describing the requesting identity or workload.",
  },
  {
    term: "Resource attribute",
    definition:
      "An attribute describing the application, data, service, or object being accessed.",
  },
  {
    term: "Policy condition",
    definition:
      "A logical requirement that must be satisfied before a policy produces a specific access outcome.",
  },
  {
    term: "Hybrid model",
    definition:
      "An authorization design that combines roles with attributes or other contextual policy conditions.",
  },
  {
    term: "Entitlement",
    definition:
      "A specific permission, role membership, or access capability granted to an identity.",
  },
  {
    term: "Access model",
    definition:
      "The structured way an organization represents and decides authorization relationships.",
  },
];

const accessModels = [
  {
    id: "ACM-01",
    useCase: "Counselor access to Student Services Portal",
    principal: "Counselor Workforce Group",
    resource: "Student Services Portal",
    proposedModel: "RBAC",
    role: "Counselor",
    attributes: "Active workforce state",
    decision:
      "Role grants standard counselor workflows; inactive workforce state removes eligibility.",
    owner: "Student Services Application Owner",
    evidence: "Role definition + membership review + application authorization logs",
    status: "Confirmed",
    concern:
      "Counselor role must not include unrelated reporting or administrative functions.",
  },
  {
    id: "ACM-02",
    useCase: "Platform administration",
    principal: "Platform Engineer",
    resource: "Cloud Management Plane",
    proposedModel: "Hybrid",
    role: "Platform Administrator Eligible",
    attributes: "Privileged activation active + production scope",
    decision:
      "Role establishes eligibility; contextual attributes control whether privilege is active.",
    owner: "Platform Engineering",
    evidence: "Role membership + activation approval + privileged audit",
    status: "Confirmed",
    concern:
      "Eligibility must remain separate from standing active privilege.",
  },
  {
    id: "ACM-03",
    useCase: "Partner support access",
    principal: "Scheduling Partner Support",
    resource: "Scheduling Integration Console",
    proposedModel: "Hybrid",
    role: "External Integration Support",
    attributes: "Sponsor current + partner organization + review not expired",
    decision:
      "Role defines support functions while attributes enforce external lifecycle conditions.",
    owner: "Integration Owner",
    evidence: "Role + sponsor + federation + review date + authorization logs",
    status: "Conditional",
    concern:
      "Partner review is due in 30 days.",
  },
  {
    id: "ACM-04",
    useCase: "Staging workload access",
    principal: "Analytics Staging Workload",
    resource: "Staging Analytics Dataset",
    proposedModel: "ABAC",
    role: "None required",
    attributes: "workload=analytics; environment=staging; resource.environment=staging",
    decision:
      "Allow when workload and resource environment/purpose match.",
    owner: "Analytics + Data Platform",
    evidence: "Workload identity + deployment metadata + resource attributes + access logs",
    status: "Confirmed",
    concern:
      "Policy must deny when the same staging workload requests production resources.",
  },
  {
    id: "ACM-05",
    useCase: "Sensitive report export",
    principal: "Reporting Analyst",
    resource: "Sensitive Report Export Function",
    proposedModel: "Hybrid",
    role: "Reporting Analyst",
    attributes: "resource.classification=sensitive + approved export purpose",
    decision:
      "Base role allows dashboard use; sensitive export requires additional contextual policy.",
    owner: "Analytics Product Owner",
    evidence: "Role review + resource class + policy decision log",
    status: "Conditional",
    concern:
      "The sensitive-export attribute source must remain current.",
  },
  {
    id: "ACM-06",
    useCase: "Legacy reporting service",
    principal: "Legacy Reporting Account",
    resource: "Generated Report Storage",
    proposedModel: "Legacy entitlement",
    role: "Historical local permission set",
    attributes: "None governed",
    decision:
      "Current design cannot be confidently explained as RBAC or ABAC.",
    owner: "Unknown",
    evidence: "Partial legacy logs + stale entitlement metadata",
    status: "Blocked",
    concern:
      "Owner, purpose, permission scope, lifecycle, and modernization path are unresolved.",
  },
  {
    id: "ACM-07",
    useCase: "Temporary migration access",
    principal: "Migration Operator",
    resource: "Migration Console",
    proposedModel: "Hybrid",
    role: "Migration Operator",
    attributes: "project=active + expiration=checkpoint",
    decision:
      "Role grants migration functions only while project lifecycle attributes remain valid.",
    owner: "Migration Project Owner",
    evidence: "Temporary role + project state + expiration + audit",
    status: "Conditional",
    concern:
      "Role membership must be removed when the project checkpoint closes.",
  },
];

const dashboardMetrics = [
  {
    label: "Access models reviewed",
    value: "7",
    note: "Workforce, privileged, partner, workload, sensitive reporting, legacy, and temporary access",
  },
  {
    label: "Pure RBAC",
    value: "1",
    note: "Counselor access maps cleanly to a stable business role",
  },
  {
    label: "Hybrid / ABAC",
    value: "5",
    note: "Context adds value for privilege, partner lifecycle, workload, sensitive data, and temporary access",
  },
  {
    label: "Blocked legacy model",
    value: "1",
    note: "Legacy Reporting Account lacks an accountable modern access model",
  },
];

const logs = [
  "[08:06] ACM-01 counselor->portal model=RBAC role=COUNSELOR state=CONFIRMED",
  "[08:29] ACM-02 platform-engineer->management model=HYBRID privilege=JIT state=CONFIRMED",
  "[08:53] ACM-03 partner->integration model=HYBRID sponsor=CURRENT review_due=30d state=CONDITIONAL",
  "[09:17] ACM-04 staging-workload->staging-data model=ABAC env_match=TRUE state=CONFIRMED",
  "[09:41] ACM-05 analyst->sensitive-export model=HYBRID attr_source=CURRENT state=CONDITIONAL",
  "[10:04] ACM-06 legacy-reporting model=UNGOVERNED owner=UNKNOWN state=BLOCKED",
  "[10:31] ACM-07 migration-operator model=HYBRID expires=CHECKPOINT state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "One giant workforce role",
    problem:
      "Many unrelated permissions are bundled together because broad access is easier to administer.",
    better:
      "Design roles around specific responsibilities and resource groups.",
  },
  {
    title: "Role per individual",
    problem:
      "Roles become personalized permission bundles and lose their value as reusable business abstractions.",
    better:
      "Use roles for common responsibilities and exceptions only when genuinely necessary.",
  },
  {
    title: "Role explosion",
    problem:
      "Tiny role variants multiply until nobody understands which one should be used.",
    better:
      "Use attributes or contextual policy when differences are based on environment, project, resource class, or time.",
  },
  {
    title: "Attributes with no owner",
    problem:
      "Policy depends on metadata that nobody is accountable for keeping current.",
    better:
      "Assign an authoritative source and owner to security-relevant attributes.",
  },
  {
    title: "ABAC rule nobody can explain",
    problem:
      "Policy becomes so complex that reviewers cannot understand why access is allowed.",
    better:
      "Keep rules readable, documented, testable through safe review, and tied to clear decisions.",
  },
  {
    title: "RBAC used for temporary context",
    problem:
      "New roles are created for every short project, environment, or exception.",
    better:
      "Use a hybrid model when stable responsibility and temporary context need to be separated.",
  },
  {
    title: "Role membership never reviewed",
    problem:
      "A strong role definition still produces excessive access when former members remain assigned.",
    better:
      "Review membership on role, team, project, and lifecycle changes.",
  },
  {
    title: "Attribute failure becomes allow",
    problem:
      "A stale or missing attribute silently removes a protective condition.",
    better:
      "Use visible fallback behavior such as deny, limit, review, or Unknown.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep a stable Platform Administrator Eligible role, then require contextual privileged activation and production scope before high-impact actions become available.",
    outcome:
      "Best. The hybrid design separates durable responsibility from temporary privilege.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Give every platform engineer permanent production administrator access.",
    outcome:
      "Risky. Eligibility should not automatically equal standing privilege.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Create a different permanent admin role for every possible maintenance task.",
    outcome:
      "Caution. That can create role explosion and difficult reviews.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Use a workload identity plus environment and resource attributes so staging workloads can reach staging resources but not production resources.",
    outcome:
      "Best. ABAC fits when environment matching directly affects the authorization decision.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Create one broad Analytics Workload role with access to both staging and production.",
    outcome:
      "Risky. That weakens environment separation.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Trust private networking instead of identity policy.",
    outcome:
      "Risky. Network location does not replace workload authorization.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the core idea of RBAC?",
    choices: [
      "Permissions are grouped into roles, and identities receive access through role membership.",
      "Every access decision uses device context.",
      "Permissions are granted only by network location.",
      "Each individual gets a unique policy with no shared structure.",
    ],
    answer: 0,
    explanation:
      "RBAC organizes permissions around reusable roles representing responsibilities.",
  },
  {
    question:
      "What is the core idea of ABAC?",
    choices: [
      "Policy evaluates attributes about identities, resources, actions, or context.",
      "Every user receives the same permissions.",
      "Roles are never used.",
      "Only IP addresses determine authorization.",
    ],
    answer: 0,
    explanation:
      "ABAC uses relevant attributes to evaluate authorization decisions.",
  },
  {
    question:
      "What is role explosion?",
    choices: [
      "The uncontrolled growth of many narrowly different roles that become difficult to manage.",
      "The automatic deletion of old roles.",
      "A privilege-escalation attack.",
      "A federation failure.",
    ],
    answer: 0,
    explanation:
      "Role explosion is a governance and maintainability problem caused by too many role variants.",
  },
  {
    question:
      "Why can a hybrid RBAC + ABAC model be useful?",
    choices: [
      "Roles can represent stable responsibilities while attributes refine environment, time, resource, or privilege conditions.",
      "It removes the need for ownership.",
      "It guarantees every policy is simple.",
      "It makes access reviews unnecessary.",
    ],
    answer: 0,
    explanation:
      "Hybrid models can combine understandable role structure with contextual precision.",
  },
  {
    question:
      "A staging workload needs access only to staging analytics data. Which approach is strongest?",
    choices: [
      "Use workload identity and environment/resource attributes to enforce an environment match.",
      "Give the workload permanent production access too.",
      "Use one shared account for every workload.",
      "Rely only on private networking.",
    ],
    answer: 0,
    explanation:
      "Environment-aware attributes are a strong fit for workload-to-resource decisions.",
  },
  {
    question:
      "What is a major risk of ABAC?",
    choices: [
      "Policy can become hard to explain if attribute sources, ownership, and logic are unclear.",
      "It cannot evaluate environment.",
      "It cannot support workload identity.",
      "It always creates standing privilege.",
    ],
    answer: 0,
    explanation:
      "ABAC precision can become complexity without strong attribute and policy governance.",
  },
  {
    question:
      "What should happen when a security-relevant attribute source becomes stale?",
    choices: [
      "Treat the stale value as current forever.",
      "Use a defined visible fallback such as deny, limit, review, or Unknown and investigate source health.",
      "Disable all authorization permanently.",
      "Ignore the attribute without documenting the change.",
    ],
    answer: 1,
    explanation:
      "A strong access model does not silently convert stale evidence into trust.",
  },
];

const checklistItems = [
  "Roles represent recognizable business or technical responsibilities.",
  "Role permissions are narrow enough to review.",
  "Standard and privileged roles are separated.",
  "Production and lower-environment access are separated where needed.",
  "Role membership is reviewed, not only role definitions.",
  "Unused roles are retired.",
  "Attributes have authoritative sources.",
  "Security-relevant attributes have owners.",
  "Attributes are limited to what changes the authorization decision.",
  "Subject and resource attributes are distinguishable.",
  "ABAC rules are understandable enough to review.",
  "Stale attributes produce visible policy outcomes.",
  "Hybrid models have clear precedence between role and attribute logic.",
  "External access includes sponsor and lifecycle conditions.",
  "Temporary access includes expiration or project-state attributes.",
  "Workload identity is used for important service-to-service decisions.",
  "Role explosion is monitored and reduced.",
  "Exceptions do not become hidden permanent roles.",
  "Access decisions are logged using safe metadata.",
  "No lesson activity requires changing roles or policies in a real identity platform.",
];

const takeaways = [
  "RBAC organizes permissions around reusable roles.",
  "ABAC uses attributes about identities, resources, actions, or context.",
  "RBAC is often strong for stable responsibilities; ABAC is useful when context changes the decision.",
  "Hybrid models can combine understandable role structure with contextual precision.",
  "Role explosion is a maintainability and governance risk.",
  "Role membership must be reviewed even when role definitions are well designed.",
  "Security-relevant attributes need authoritative sources and owners.",
  "Stale attributes should not silently become trusted policy input.",
  "A good access model balances least privilege, clarity, maintainability, and evidence.",
  "The Access Model Comparison will support A13.6 Privileged Access Management Concepts.",
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

export default function RoleBasedAndAttributeBasedAccessConceptsPage() {
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
              A13.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Role-Based and Attribute-Based Access Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Authorization models help organizations express who or what should
            access which resources. RBAC organizes permissions around stable
            responsibilities, while ABAC uses relevant attributes to make more
            contextual decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional roles, attributes, resources, and policy
            evidence only. It does not require changing real permissions or
            interacting with any private identity system.
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
          lessonTitle="Role-Based and Attribute-Based Access Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.5 Entry Readiness"
          items={[
            "I understand conditional access and policy outcomes from A13.4.",
            "I can distinguish authentication from authorization.",
            "I understand least privilege and resource-specific access.",
            "I will use only fictional access models and safe policy metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Best Access Model Is the One People Can Understand and Govern"
        >
          <p className="leading-8">
            Suppose every counselor needs the same basic application functions.
            A role can express that cleanly. But suppose a workload should reach
            only resources in its own environment, or a partner should retain
            access only while sponsorship is current. Those decisions may be
            easier to express with attributes. The goal is not to choose RBAC
            or ABAC as a winner; the goal is to design authorization that is
            least-privileged, understandable, maintainable, and reviewable.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Roles explain responsibility. Attributes explain context. Strong designs use each where it adds clarity.
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
          eyebrow="Access Models"
          title="RBAC, ABAC, and Hybrid Authorization"
        >
          <div className="grid gap-6">
            {modelComparison.map((item) => (
              <article
                key={item.shorthand}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.shorthand}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.model}</h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">{item.idea}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Strengths
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strengths}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Risks
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.risks}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Good fit
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.goodFit}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="RBAC Design"
          title="Six Principles for Strong Role Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {roleDesignPrinciples.map((item) => (
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
          eyebrow="ABAC Design"
          title="Six Principles for Attribute-Based Policy"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {attributePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
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
          eyebrow="Decision Dimensions"
          title="How to Decide Whether Roles or Attributes Fit Better"
        >
          <div className="grid gap-5">
            {decisionDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      RBAC view
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.rbac}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      ABAC view
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.abac}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-emerald-100">
                  Decision question: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Role and Attribute Access Terms"
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
          eyebrow="Fictional Access Model Register"
          title="Seven Northbridge Authorization Designs"
        >
          <div className="grid gap-5">
            {accessModels.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.proposedModel}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.useCase}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Principal", item.principal],
                    ["Resource", item.resource],
                    ["Role", item.role],
                    ["Attributes", item.attributes],
                    ["Decision", item.decision],
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
          title="Northbridge Access Model Dashboard"
          subtitle="Fictional RBAC, ABAC, hybrid, and legacy model summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Access Model Cannot Be Explained or Owned"
          severity="High"
          time="10:04"
          source="Fictional Access Model Review"
          details="ACM-06 uses a historical local permission set for production reporting. The current owner is Unknown, entitlement metadata is stale, and the design does not map cleanly to an accountable RBAC or ABAC model."
          recommendation="Keep the access Blocked until purpose, ownership, permission scope, lifecycle, and modernization are resolved."
        />

        <Section
          eyebrow="Role Explosion"
          title="When RBAC Starts Encoding Context as Endless Roles"
        >
          <p className="leading-8">
            Roles work best when they represent stable responsibilities.
            Trouble begins when every difference in environment, project,
            resource classification, time window, or partner state becomes a new
            role. That can produce dozens of nearly identical roles that are
            difficult to explain and review.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Good role distinction",
                example:
                  "Counselor vs. Platform Administrator — clearly different responsibilities.",
              },
              {
                title: "Potential role explosion",
                example:
                  "Reporting-Analyst-Prod-Export-ProjectA-UntilJune — too much changing context encoded in the role name.",
              },
              {
                title: "Good attribute candidate",
                example:
                  "environment=production or project=Migration-2026 when those values naturally change.",
              },
              {
                title: "Good hybrid model",
                example:
                  "Reporting Analyst role + resource classification + approved export purpose.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Access Model Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Platform Administration"
          question="Which model best fits ACM-02?"
          evidence={[
            "Platform engineering is a stable technical responsibility.",
            "Production administration is high impact.",
            "Not every platform engineer needs active privilege all the time.",
            "A privileged activation workflow already exists.",
            "Production scope should remain explicit.",
          ]}
          options={[
            "Permanent broad RBAC administration for every platform engineer.",
            "A hybrid model: stable admin eligibility role plus contextual privileged activation and production scope.",
            "One new permanent role for every maintenance task.",
            "No identity-based authorization.",
          ]}
          bestAnswer={1}
          explanation="A hybrid model separates durable role eligibility from temporary high-impact privilege and environment context."
        />

        <Section
          eyebrow="Access Model Anti-Patterns"
          title="Eight Ways Role and Attribute Models Become Hard to Govern"
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
          title="Scenario Decision Lab 1 — Platform Admin Model"
          scenario="Platform engineers have a stable administrative responsibility, but production privilege should only become active during approved maintenance work."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Workload Environment Boundary"
          scenario="An analytics workload should reach staging resources when it runs in staging, but the same identity should never automatically receive production data access."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Access Model Comparison"
        >
          <p className="leading-8">
            Use fictional identities, roles, attributes, resources, owners, and
            policy outcomes only. Do not inspect or change access in a real
            identity platform.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional access use cases.",
              "Give every record a stable ACM ID.",
              "Record principal and resource.",
              "State business or technical purpose.",
              "Identify whether the need is stable responsibility, changing context, or both.",
              "Propose RBAC, ABAC, or Hybrid.",
              "For RBAC, define role name and responsibility.",
              "For ABAC, define only the minimum relevant subject/resource/context attributes.",
              "For Hybrid, show which part belongs in the role and which part belongs in attributes.",
              "Assign role owner or policy owner.",
              "Assign resource owner.",
              "Record lifecycle or review trigger.",
              "Record decision evidence.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Include at least three pure RBAC examples.",
              "Include at least three ABAC examples.",
              "Include at least three hybrid examples.",
              "Include at least one role-explosion problem and redesign it.",
              "Include at least one stale-attribute problem with visible fallback behavior.",
              "Include at least one unowned legacy entitlement and keep it Blocked.",
              "Add change triggers for role, project, environment, resource class, owner, provider, and application changes.",
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
              This is a fictional authorization-design exercise. Do not change
              live roles, group memberships, identity attributes, permissions,
              or access policies in any real system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Staging Workload"
          question="Which access model best fits ACM-04?"
          evidence={[
            "The principal is a named workload identity.",
            "Its approved environment is staging.",
            "The destination resource is a staging analytics dataset.",
            "Production access must remain denied.",
            "Environment matching directly affects the decision.",
          ]}
          options={[
            "One broad Analytics Workload role with staging and production access.",
            "ABAC using workload and resource environment attributes, with explicit denial for environment mismatch.",
            "No identity policy because the network is private.",
            "A shared service account used by every analytics workload.",
          ]}
          bestAnswer={1}
          explanation="Attribute-based policy is a strong fit when workload-to-resource authorization depends directly on matching environment and resource context."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Role Catalog"
        >
          <p className="leading-8">
            A fictional organization has 86 access roles, many of which differ
            only by environment, project, quarter, or resource classification.
            Redesign the model conceptually so stable responsibilities remain
            roles while changing context moves into attributes where that
            improves clarity.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Identify duplicate role families",
              "Separate stable responsibility from changing context",
              "Consolidate near-duplicate roles",
              "Define authoritative attribute sources",
              "Assign attribute owners",
              "Create environment attributes",
              "Create project/lifecycle attributes",
              "Create resource classification attributes",
              "Keep privileged eligibility as a stable role",
              "Use contextual activation for privilege",
              "Preserve external sponsor conditions",
              "Document hybrid precedence",
              "Define stale-attribute fallback",
              "Create role retirement criteria",
              "Create membership review cadence",
              "Create policy evidence requirements",
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
            The objective is not to minimize the number of roles at any cost.
            The objective is to make each role meaningful and move changing
            context into policy only when that improves precision and
            maintainability.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.5 Mini Quiz: Role-Based and Attribute-Based Access Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Access Model Comparison"
          prompt="Create the fifth artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Access Model Comparison with at least twelve use cases. Include ACM ID, principal, resource, purpose, stable responsibility, changing context, proposed model, role definition where applicable, relevant attributes where applicable, policy/role owner, resource owner, lifecycle, evidence, status, concern, next action, and change trigger."
          tips={[
            "Include pure RBAC, pure ABAC, and hybrid examples.",
            "Show where role explosion can be reduced.",
            "Keep subject and resource attributes clearly separated.",
            "Include stale-attribute fallback behavior.",
            "Include privileged, workload, partner, and temporary access examples.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.6?"
        >
          <p className="leading-8">
            A13.6 moves into Privileged Access Management Concepts. Before
            continuing, make sure you can explain why privileged access often
            benefits from a hybrid model: a stable role or eligibility
            assignment combined with time-bounded, contextual activation.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain RBAC in terms of roles and membership.",
              "I can explain ABAC in terms of subject, resource, action, and context attributes.",
              "I can identify role explosion.",
              "I can identify attribute-source and attribute-quality risks.",
              "I can explain when a hybrid model improves clarity and least privilege.",
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
          title="How to Make the Access Model Comparison Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the access need",
                detail:
                  "Describe the real responsibility or context before choosing RBAC, ABAC, or Hybrid.",
              },
              {
                title: "Explain why the model fits",
                detail:
                  "Do not just label a row RBAC or ABAC; explain what makes that model clearer or more maintainable.",
              },
              {
                title: "Keep roles meaningful",
                detail:
                  "Use stable responsibilities rather than encoding every project, quarter, environment, or exception into role names.",
              },
              {
                title: "Keep attributes trustworthy",
                detail:
                  "Name the authoritative source, owner, expected freshness, and fallback behavior for important attributes.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Role membership, projects, partners, resources, and workloads all need review or retirement triggers.",
              },
              {
                title: "Show evidence",
                detail:
                  "Role reviews, policy decisions, workload identity, owner confirmation, and authorization logs should support the design.",
              },
              {
                title: "Keep legacy access visible",
                detail:
                  "Do not force an ungoverned legacy entitlement into a clean model just to make the diagram look complete.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.6 will apply these access-model ideas to privileged and administrative identities.",
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
            Access-model learning does not require changing real permissions
          </h2>
          <p className="mt-3 leading-7">
            Do not alter live roles, group membership, attributes, policies,
            privileged access, or permissions. Do not attempt access-control
            bypass or privilege escalation. All identities, roles, attributes,
            decisions, and logs in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.5 Role-Based and Attribute-Based Access Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an access-model framework for deciding when roles,
            attributes, or a hybrid approach best support least privilege,
            clarity, lifecycle, and reviewability. Next, A13.6 focuses on
            Privileged Access Management Concepts.
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