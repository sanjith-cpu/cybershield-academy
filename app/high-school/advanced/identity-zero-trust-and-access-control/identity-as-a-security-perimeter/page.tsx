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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/zero-trust-principles`;

const objectives = [
  "Explain why identity can function as a security perimeter across human users, administrators, workloads, applications, external parties, and temporary operators.",
  "Distinguish authentication, authorization, identity ownership, resource ownership, trust relationships, and access paths as separate architecture concerns.",
  "Evaluate fictional identity records using purpose, privilege, resource scope, approval, environment, lifecycle, evidence freshness, and monitoring.",
  "Identify identity-perimeter risks such as shared identities, unowned accounts, stale external access, permanent privilege, cross-environment access, and missing workload ownership.",
  "Build an Identity Perimeter Map that becomes the first artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const identityTypes = [
  {
    type: "Workforce identity",
    purpose:
      "Represents an employee, student worker, contractor, or other approved human user who needs access to business applications and services.",
    perimeterEffect:
      "A workforce identity becomes a security boundary when authentication strength, role, lifecycle, session context, and approved resources influence access.",
    evidence:
      "Identity source, employment or sponsorship state, role, authentication evidence, access review, owner, and last lifecycle confirmation.",
  },
  {
    type: "Privileged identity",
    purpose:
      "Represents administrative capability that can change identities, policies, applications, infrastructure, data, logging, or other security-sensitive state.",
    perimeterEffect:
      "Privilege creates a higher-impact identity boundary because one action can change the architecture itself.",
    evidence:
      "Privileged role purpose, approval, time window, activation record, owner, session evidence, and post-use review.",
  },
  {
    type: "Workload identity",
    purpose:
      "Represents an application, service, job, function, or automation process that needs to authenticate to another service.",
    perimeterEffect:
      "Workload identity lets the architecture authorize a named non-human principal instead of trusting network location or copied credentials.",
    evidence:
      "Workload owner, service purpose, environment, resource scope, identity binding, deployment relationship, and service-access logs.",
  },
  {
    type: "External identity",
    purpose:
      "Represents a partner, vendor, guest, consultant, or other party outside the organization's normal workforce identity lifecycle.",
    perimeterEffect:
      "External identity crosses an organizational trust boundary and therefore needs sponsorship, bounded access, review, and expiration.",
    evidence:
      "Sponsor, business reason, allowed resources, expiration, review cadence, federation or guest relationship, and activity evidence.",
  },
  {
    type: "Temporary identity",
    purpose:
      "Represents short-duration access for migration, recovery, support, audit, or another bounded operational need.",
    perimeterEffect:
      "Time becomes part of the security boundary because access should stop when the task ends.",
    evidence:
      "Request, approver, start time, expiration, exact resource scope, owner, use evidence, and closure review.",
  },
  {
    type: "Service or legacy account",
    purpose:
      "Represents older automated or application access that may not use modern workload identity.",
    perimeterEffect:
      "Long-lived or shared credentials can create hidden identity boundaries when ownership, lifecycle, and access purpose are unclear.",
    evidence:
      "Current owner, business need, credential lifecycle metadata, allowed resources, monitoring, rotation, revocation, and retirement plan.",
  },
];

const perimeterDimensions = [
  { dimension: "Identity", question: "Who or what is acting?", evidence: "Stable identity record, identity type, source, sponsor, workload binding, or privileged role." },
  { dimension: "Authentication", question: "How is the identity verified?", evidence: "Authentication method or federation context recorded as safe metadata." },
  { dimension: "Authorization", question: "What exact resource and action can the identity access?", evidence: "Role, entitlement, policy decision, resource scope, action scope, and environment." },
  { dimension: "Purpose", question: "Why does this access exist?", evidence: "Business need, application dependency, support requirement, operational responsibility, or approved workflow." },
  { dimension: "Ownership", question: "Who is accountable for the identity and the resource?", evidence: "Identity owner, sponsor, service owner, resource owner, or platform owner." },
  { dimension: "Lifecycle", question: "When should access change or end?", evidence: "Review date, expiration, employment change, service retirement, project end, or temporary-access closure." },
  { dimension: "Context", question: "Which environment, application, role, or session conditions matter?", evidence: "Production vs. staging, privileged vs. standard use, application sensitivity, device or session policy metadata." },
  { dimension: "Evidence", question: "What proves the architecture claim is still current?", evidence: "Access review, authentication events, workload activity, policy history, owner confirmation, and source health." },
];

const perimeterPrinciples = [
  { title: "Identity should be named", meaning: "Important access should be tied to a specific human, workload, service, or external principal rather than a vague shared identity.", review: "Can the reviewer tell who or what performed the action?" },
  { title: "Authentication does not equal authorization", meaning: "Verifying an identity does not automatically grant permission to every reachable resource.", review: "Does the architecture separately define what the identity may actually do?" },
  { title: "Privilege changes the impact", meaning: "Administrative identities deserve stronger controls because they can modify security boundaries for many other identities.", review: "Is privileged access separated, bounded, monitored, and reviewed?" },
  { title: "Workloads need identities too", meaning: "Applications and services should not rely only on private network placement or embedded shared credentials.", review: "Does each important workload authenticate as an approved non-human principal?" },
  { title: "External access needs sponsorship", meaning: "A partner or guest relationship should remain tied to a current business owner and explicit need.", review: "Who sponsors the identity and when does access expire or get reviewed?" },
  { title: "Environment is part of scope", meaning: "Development, test, staging, and production access should not be treated as interchangeable.", review: "Can lower-environment identities reach production resources?" },
  { title: "Lifecycle is part of security", meaning: "Access that was appropriate last year may no longer be appropriate after role, project, service, or ownership changes.", review: "What event or date should reduce, revoke, or retire the access?" },
  { title: "Evidence should match the claim", meaning: "A current access claim should be supported by current identity, policy, activity, and ownership evidence.", review: "Is the evidence fresh enough to support the present architecture?" },
];

const vocabulary = [
  { term: "Identity perimeter", definition: "The set of identity, authentication, authorization, ownership, lifecycle, and contextual decisions that determine who or what can reach protected resources." },
  { term: "Principal", definition: "A human or non-human identity that can request or receive access to a resource." },
  { term: "Authentication", definition: "The process of verifying the claimed identity of a user, workload, service, or other principal." },
  { term: "Authorization", definition: "The decision about which resources and actions an authenticated identity is allowed to use." },
  { term: "Entitlement", definition: "A specific permission, role membership, resource access, or capability assigned to an identity." },
  { term: "Workload identity", definition: "A non-human identity representing an application, service, job, or automation process." },
  { term: "Privileged identity", definition: "An identity with elevated administrative or security-sensitive capabilities." },
  { term: "External identity", definition: "An identity belonging to a partner, vendor, guest, consultant, or other party outside the normal workforce lifecycle." },
  { term: "Identity lifecycle", definition: "The creation, activation, change, review, suspension, revocation, and retirement of identity access over time." },
  { term: "Sponsor", definition: "The internal person or team accountable for an external identity's business need and continued access." },
  { term: "Standing privilege", definition: "Elevated access that remains continuously available rather than being activated for a limited approved period." },
  { term: "Access path", definition: "The identity-to-resource relationship through which a principal can request or receive an action on a protected service or data resource." },
];

const identityRecords = [
  {
    id: "IDN-01",
    identity: "Counselor Workforce Group",
    type: "Workforce",
    purpose: "Use Student Services Portal for approved student-support workflows",
    resources: "Student Services Portal",
    actions: "Application workflows allowed by counselor role",
    environment: "Production",
    owner: "Student Services Operations",
    approval: "Role-based workforce assignment",
    lifecycle: "Reviewed quarterly and on employment/role change",
    monitoring: "Authentication + application authorization events",
    status: "Confirmed",
    concern: "Access remains appropriate only while the user has a current counselor role.",
  },
  {
    id: "IDN-02",
    identity: "Cloud Platform Administrator",
    type: "Privileged",
    purpose: "Perform approved platform administration",
    resources: "Cloud management plane",
    actions: "Time-bounded administrative changes",
    environment: "Production",
    owner: "Platform Engineering",
    approval: "Privileged activation workflow",
    lifecycle: "Just-in-time activation; post-use review required",
    monitoring: "Privileged activation + management audit",
    status: "Conditional",
    concern: "One emergency activation has incomplete post-use review evidence.",
  },
  {
    id: "IDN-03",
    identity: "Student Portal Workload",
    type: "Workload",
    purpose: "Authenticate application service to approved backend resources",
    resources: "Student Support Database + Generated Report Storage",
    actions: "Application-specific read/write operations",
    environment: "Production",
    owner: "Application Team",
    approval: "Application architecture approval",
    lifecycle: "Reviewed on deployment and dependency change",
    monitoring: "Workload authentication + resource access logs",
    status: "Confirmed",
    concern: "Network privacy is not treated as a substitute for workload identity.",
  },
  {
    id: "IDN-04",
    identity: "Scheduling Partner Guest",
    type: "External",
    purpose: "Support approved scheduling integration administration",
    resources: "Scheduling Integration Service",
    actions: "Narrow integration support functions",
    environment: "Production",
    owner: "Integration Owner",
    approval: "Sponsor + partner-access approval",
    lifecycle: "Expires in 30 days unless renewed",
    monitoring: "External sign-in + integration administration events",
    status: "Conditional",
    concern: "Sponsor is current, but renewal decision is due soon.",
  },
  {
    id: "IDN-05",
    identity: "Legacy Reporting Account",
    type: "Legacy service account",
    purpose: "Historical scheduled reporting job",
    resources: "Generated Report Storage + scheduling metadata",
    actions: "Legacy report generation",
    environment: "Production",
    owner: "Unknown",
    approval: "Historical / not current",
    lifecycle: "No current review date",
    monitoring: "Partial",
    status: "Blocked",
    concern: "Current owner, business need, rotation, revocation, and retirement path are unresolved.",
  },
  {
    id: "IDN-06",
    identity: "Analytics Staging Workload",
    type: "Workload",
    purpose: "Process synthetic staging analytics data",
    resources: "Staging Analytics Dataset",
    actions: "Staging analytics processing",
    environment: "Staging",
    owner: "Analytics Team",
    approval: "Staging deployment approval",
    lifecycle: "Reviewed on deployment",
    monitoring: "Workload + dataset access events",
    status: "Confirmed",
    concern: "Production data and production resources are explicitly out of scope.",
  },
  {
    id: "IDN-07",
    identity: "Temporary Migration Operator",
    type: "Temporary privileged",
    purpose: "Support approved data migration validation",
    resources: "Migration control service",
    actions: "Migration-specific operational actions",
    environment: "Production",
    owner: "Migration Project Owner",
    approval: "Time-bounded migration approval",
    lifecycle: "Expires at project checkpoint",
    monitoring: "Activation + migration-control audit",
    status: "Conditional",
    concern: "Access should be revoked immediately when the project checkpoint closes.",
  },
];

const accessPaths = [
  { path: "PATH-01", source: "Counselor Workforce Group", destination: "Student Services Portal", decision: "Allow role-appropriate application workflows after approved workforce authentication.", trustChange: "Workforce identity becomes application authorization context.", owner: "Application Owner", evidence: "Authentication events + counselor-role authorization records." },
  { path: "PATH-02", source: "Student Portal Workload", destination: "Student Support Database", decision: "Allow application-specific database actions through workload identity.", trustChange: "Application service becomes a named non-human principal.", owner: "Application + Data Platform", evidence: "Workload identity binding + database access telemetry." },
  { path: "PATH-03", source: "Cloud Platform Administrator", destination: "Cloud Management Plane", decision: "Allow approved administrative changes during time-bounded privileged activation.", trustChange: "Normal workforce identity enters privileged administrative context.", owner: "Platform Engineering", evidence: "Activation approval + management audit + post-use review." },
  { path: "PATH-04", source: "Scheduling Partner Guest", destination: "Scheduling Integration Service", decision: "Allow only partner-support functions tied to sponsor and current review.", trustChange: "External identity crosses organizational boundary into narrow application scope.", owner: "Integration Owner", evidence: "Sponsor record + external sign-in + integration audit." },
  { path: "PATH-05", source: "Analytics Staging Workload", destination: "Production Student Support Database", decision: "Deny because staging workload has no production purpose or approval.", trustChange: "Environment boundary prevents lower-environment identity from production data access.", owner: "Analytics + Data Platform", evidence: "Environment policy + identity scope + access decision record." },
  { path: "PATH-06", source: "Legacy Reporting Account", destination: "Generated Report Storage", decision: "Blocked pending ownership and lifecycle resolution.", trustChange: "Legacy service identity lacks current accountability.", owner: "Unknown", evidence: "Legacy access record + incomplete lifecycle evidence." },
];

const dashboardMetrics = [
  { label: "Identity records reviewed", value: "7", note: "Workforce, privileged, workload, external, legacy, staging, and temporary identities" },
  { label: "Confirmed identities", value: "3", note: "Counselor workforce, production workload, and staging workload have current evidence" },
  { label: "Conditional identities", value: "3", note: "Privileged review, partner renewal, and temporary migration closure require follow-up" },
  { label: "Blocked identities", value: "1", note: "Legacy Reporting Account has no current owner or lifecycle evidence" },
];

const logs = [
  "[08:12] IDN-01 counselor-workforce owner=StudentServices review=CURRENT state=CONFIRMED",
  "[08:39] IDN-02 platform-admin access=JIT post_review=PARTIAL state=CONDITIONAL",
  "[09:03] IDN-03 student-portal-workload env=PROD scope=DB+REPORT state=CONFIRMED",
  "[09:28] IDN-04 scheduling-partner sponsor=CURRENT renewal_due=30d state=CONDITIONAL",
  "[09:54] IDN-05 legacy-reporting owner=UNKNOWN lifecycle=STALE state=BLOCKED",
  "[10:17] IDN-06 analytics-staging prod_scope=NONE state=CONFIRMED",
  "[10:41] IDN-07 migration-operator expires=PROJECT_CHECKPOINT state=CONDITIONAL",
];

const antiPatterns = [
  { title: "Shared administrative account", problem: "Multiple people act through one identity, weakening accountability and making lifecycle decisions difficult.", better: "Use named identities with separate privileged activation." },
  { title: "Private network means trusted", problem: "A workload is authorized only because it runs on an internal or private network.", better: "Use named workload identity plus resource-level authorization." },
  { title: "External guest without sponsor", problem: "No internal owner remains accountable for why the external identity still has access.", better: "Require sponsor, business purpose, expiration, and recurring review." },
  { title: "Permanent privileged access", problem: "Administrative capability remains available even when the user is not performing an approved privileged task.", better: "Use separate, time-bounded, monitored privileged access." },
  { title: "Production identity reused in staging", problem: "Environment boundaries weaken and lower-trust workflows gain production access relationships.", better: "Use environment-specific identities and resource scope." },
  { title: "Legacy service account with no owner", problem: "The organization cannot confidently decide whether access is still required, safe, or revocable.", better: "Resolve business need and ownership, modernize the identity, or retire the account." },
  { title: "Authentication-only thinking", problem: "A successful sign-in is treated as permission to reach every available resource.", better: "Separate authentication from resource-specific authorization." },
  { title: "Access review by role name only", problem: "A reviewer approves access because the entitlement name looks familiar without checking purpose, resource, privilege, lifecycle, or evidence.", better: "Review why access exists and what it actually allows." },
];

const scenarioOneChoices = [
  { label: "Choice A", response: "Keep IDN-05 Blocked, identify whether the legacy reporting service is still required, assign an accountable owner, map exact resource scope, and replace or retire the identity before treating it as governed.", outcome: "Best. A working account is not automatically an acceptable identity boundary.", tone: "best" as const },
  { label: "Choice B", response: "Mark IDN-05 Confirmed because it has been used for years without a known incident.", outcome: "Risky. Age and lack of a known incident do not establish current purpose, ownership, or lifecycle control.", tone: "risk" as const },
  { label: "Choice C", response: "Share the legacy identity with more teams so someone is always able to maintain the job.", outcome: "Risky. Sharing increases ambiguity and weakens accountability.", tone: "risk" as const },
];

const scenarioTwoChoices = [
  { label: "Choice A", response: "Deny the staging workload production access and keep environment-specific workload identities, even if both environments use the same application code.", outcome: "Best. Environment is part of identity scope and production data should not be reachable without explicit production purpose.", tone: "best" as const },
  { label: "Choice B", response: "Allow access because the workload is owned by the same Analytics Team.", outcome: "Risky. Team ownership alone does not create production authorization.", tone: "risk" as const },
  { label: "Choice C", response: "Allow read-only access permanently because read access is never sensitive.", outcome: "Risky. Read access can still expose restricted production data and should require approved purpose.", tone: "risk" as const },
];

const quizQuestions = [
  { question: "Why can identity function as a security perimeter?", choices: ["Because identity decisions can determine who or what may access protected resources even when services are reachable over shared networks.", "Because usernames replace all other security controls.", "Because only human users need authorization.", "Because private networks eliminate identity risk."], answer: 0, explanation: "Identity becomes a perimeter when authentication, authorization, context, ownership, and lifecycle determine access to protected resources." },
  { question: "What is the difference between authentication and authorization?", choices: ["Authentication verifies identity; authorization determines allowed resources and actions.", "Authentication chooses permissions; authorization verifies passwords.", "They are the same process.", "Authorization applies only to administrators."], answer: 0, explanation: "A verified identity still needs a separate decision about what it is allowed to do." },
  { question: "Why is workload identity stronger than trusting private network location alone?", choices: ["It gives the application a named non-human principal that can be scoped and reviewed.", "It makes authorization unnecessary.", "It makes the network public.", "It allows all workloads to share one credential."], answer: 0, explanation: "Workload identity creates a reviewable identity-to-resource relationship independent of network location." },
  { question: "What should an external identity have?", choices: ["A current sponsor, business purpose, bounded resource scope, review or expiration, and monitoring.", "Permanent access by default.", "No owner because the person works for another company.", "Administrator access so support is easier."], answer: 0, explanation: "External access should remain tied to a current internal sponsor and explicit business need." },
  { question: "A staging workload requests production database access but has no production purpose. What is the strongest decision?", choices: ["Allow because the same team owns both environments.", "Deny and preserve environment-specific identity scope.", "Allow permanently if access is read-only.", "Allow because the database is private."], answer: 1, explanation: "Environment boundaries should prevent lower-environment identities from gaining production access without approved purpose." },
  { question: "What is the strongest status for a legacy service account with Unknown owner and no current lifecycle evidence?", choices: ["Confirmed", "Blocked or Unknown until purpose, ownership, scope, lifecycle, and retirement are resolved", "Public", "Automatically accepted because it is old"], answer: 1, explanation: "An unowned service identity cannot be confidently governed." },
  { question: "What makes an identity access review stronger?", choices: ["Approving based only on entitlement name.", "Reviewing identity, purpose, resource, actions, privilege, owner, lifecycle, activity evidence, and current business need.", "Keeping all existing access to avoid disruption.", "Ignoring workload identities."], answer: 1, explanation: "Access review should evaluate the real identity-to-resource relationship, not only labels." },
];

const checklistItems = [
  "Every important access path identifies a named human or non-human principal.",
  "Authentication and authorization are treated as separate architecture decisions.",
  "Workforce access is tied to role and lifecycle.",
  "Privileged access is separated from normal user activity.",
  "Privileged access is bounded, monitored, approved, and reviewed.",
  "Workloads use named identities where practical.",
  "Workload resource scope matches the application dependency.",
  "External identities have current sponsors.",
  "External identities have explicit review or expiration.",
  "Temporary identities have clear start and end conditions.",
  "Production and lower-environment identities remain separated.",
  "Legacy identities have current owners or remain Blocked.",
  "Resource owners can explain why each major identity has access.",
  "Access evidence is current enough to support the present architecture.",
  "Identity telemetry covers authentication, authorization, privileged activity, and lifecycle events.",
  "Service retirement includes identity retirement.",
  "No lesson activity requires accessing, guessing, testing, or modifying any real account or credential.",
];

const takeaways = [
  "Identity can act as a security perimeter because access decisions can follow the principal rather than relying only on network location.",
  "Human, privileged, workload, external, temporary, and legacy identities have different architecture risks.",
  "Authentication verifies identity; authorization decides what that identity may do.",
  "Workload identity gives applications a named, reviewable non-human principal.",
  "External access should have a sponsor, purpose, scope, review, and expiration.",
  "Environment is part of identity scope; staging identities should not automatically reach production.",
  "Privileged access deserves stronger approval, time limits, monitoring, and post-use evidence.",
  "Unowned legacy identities should remain visible as risk rather than being normalized.",
  "Access reviews should evaluate purpose, privilege, lifecycle, ownership, and evidence rather than role names alone.",
  "The Identity Perimeter Map becomes the foundation for A13.2 Zero Trust Principles.",
];

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">{title}</h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100">
        A13 Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function IdentityAsSecurityPerimeterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">A13.1</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">Identity, Zero Trust, and Access Control</span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Lesson A13.1</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">Identity as a Security Perimeter</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Modern applications are distributed across cloud services, APIs, devices, networks, partners, and workloads. In that environment, identity can become one of the most important boundaries for deciding who or what may reach protected resources.
          </p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional identity records and synthetic access evidence only. It does not involve real credentials, accounts, authentication testing, or private identity systems.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A13: Identity, Zero Trust, and Access Control"
          lessonTitle="Identity as a Security Perimeter"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.1 Entry Readiness"
          items={[
            "I understand basic authentication and authorization concepts.",
            "I can distinguish a human user from an application or workload identity.",
            "I understand that private network placement does not automatically prove authorization.",
            "I will use only fictional identity records and safe synthetic evidence.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="The Network Is No Longer the Only Place Where Trust Changes">
          <p className="leading-8">
            A counselor signing in to a web application, a workload reading a database, an administrator changing cloud policy, and a partner managing an integration can all reach important resources through different paths. The strongest common question is not simply “Which network are they on?” It is “Who or what is this identity, why does it need access, and what exactly should it be allowed to do?”
          </p>
          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">Identity becomes a perimeter when access follows verified purpose, privilege, scope, lifecycle, and evidence.</p>
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for This Lesson">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div key={objective} className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Identity Types" title="Different Principals Create Different Security Boundaries">
          <div className="grid gap-5 md:grid-cols-2">
            {identityTypes.map((item) => (
              <article key={item.type} className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
                <h3 className="text-xl font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">Perimeter effect</p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">{item.perimeterEffect}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Useful evidence</p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Perimeter Dimensions" title="An Identity Boundary Is More Than a Login">
          <div className="grid gap-5 md:grid-cols-2">
            {perimeterDimensions.map((item) => (
              <article key={item.dimension} className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">Core question: {item.question}</p>
                <p className="mt-3 text-sm leading-7 text-white">Evidence: {item.evidence}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Identity Principles" title="Eight Principles for Identity-Perimeter Architecture">
          <div className="grid gap-5 md:grid-cols-2">
            {perimeterPrinciples.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.meaning}</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">Review: {item.review}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Vocabulary" title="Identity-Perimeter Terms">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article key={item.term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.definition}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Fictional Identity Register" title="Seven Northbridge Identity Records">
          <div className="grid gap-5">
            {identityRecords.map((item) => (
              <article key={item.id} className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">{item.type}</span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">{item.status}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{item.identity}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Resources", item.resources],
                    ["Actions", item.actions],
                    ["Environment", item.environment],
                    ["Owner", item.owner],
                    ["Approval", item.approval],
                    ["Lifecycle", item.lifecycle],
                    ["Monitoring", item.monitoring],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">{label}</p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">Architecture concern</p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">{item.concern}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Identity Perimeter Dashboard"
          subtitle="Fictional identity ownership, lifecycle, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Reporting Identity Has No Current Owner"
          severity="High"
          time="09:54"
          source="Fictional Identity Governance Review"
          details="IDN-05 remains active in production, but the current owner, business need, lifecycle review, monitoring coverage, and retirement path are unresolved."
          recommendation="Keep the identity Blocked until ownership and business need are established and the account is modernized or retired."
        />

        <Section eyebrow="Access Paths" title="Map Identity-to-Resource Relationships, Not Just Accounts">
          <p className="leading-8">
            An identity inventory tells you what identities exist. An access path explains what each identity can reach and why. This relationship is what turns identity into an architecture boundary.
          </p>
          <div className="mt-6 grid gap-5">
            {accessPaths.map((item) => (
              <article key={item.path} className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">{item.path}</span>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">Source identity</p><p className="mt-2 text-sm leading-7 text-blue-50">{item.source}</p></div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">Destination</p><p className="mt-2 text-sm leading-7 text-purple-50">{item.destination}</p></div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Access decision</p><p className="mt-2 text-sm leading-7 text-emerald-50">{item.decision}</p></div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">Trust change</p><p className="mt-2 text-sm leading-7 text-yellow-50">{item.trustChange}</p></div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">Owner</p><p className="mt-2 text-sm leading-7 text-slate-200">{item.owner}</p></div>
                  <div className="rounded-xl border border-slate-700 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">Evidence</p><p className="mt-2 text-sm leading-7 text-slate-200">{item.evidence}</p></div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel title="Fictional Identity Perimeter Review Log" logs={logs} />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Identity"
          question="What is the strongest architecture decision for IDN-05?"
          evidence={[
            "The identity is active in production.",
            "The account supports a historical reporting job.",
            "The current accountable owner is Unknown.",
            "No current lifecycle review is documented.",
            "Monitoring is Partial.",
            "The retirement path is unresolved.",
          ]}
          options={[
            "Mark the identity Confirmed because it still works.",
            "Keep the identity Blocked until current need, ownership, scope, lifecycle, monitoring, and retirement are resolved.",
            "Share the identity with more teams.",
            "Ignore it because it is a service account.",
          ]}
          bestAnswer={1}
          explanation="A working identity is not automatically a governed identity. Missing ownership and lifecycle evidence are material architecture gaps."
        />

        <Section eyebrow="Identity Anti-Patterns" title="Eight Ways Identity Stops Functioning as a Strong Perimeter">
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">Why it fails: {item.problem}</p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">Better approach: {item.better}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Authentication vs. Authorization" title="A Verified Identity Still Needs a Resource Decision">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">Authentication asks: Who or what is this?</h3>
              <p className="mt-3 leading-7 text-cyan-100">Authentication establishes identity context. It may rely on workforce identity, workload identity, federation, or another approved mechanism.</p>
              <div className="mt-5 grid gap-3">
                {["Identity source", "Principal type", "Authentication context", "Federation relationship", "Session or workload context", "Source-health evidence"].map((item) => (
                  <div key={item} className="rounded-xl border border-cyan-300/20 bg-slate-950/20 p-3 text-sm text-cyan-50">{item}</div>
                ))}
              </div>
            </article>
            <article className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">Authorization asks: What may this identity do?</h3>
              <p className="mt-3 leading-7 text-purple-100">Authorization uses identity and policy context to decide which resources, actions, and environments are permitted.</p>
              <div className="mt-5 grid gap-3">
                {["Resource", "Action", "Role or entitlement", "Environment", "Business purpose", "Approval and lifecycle"].map((item) => (
                  <div key={item} className="rounded-xl border border-purple-300/20 bg-slate-950/20 p-3 text-sm text-purple-50">{item}</div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <ScenarioDecisionLab title="Scenario Decision Lab 1 — Unowned Legacy Identity" scenario="A production reporting account still works, but no current owner, approval record, lifecycle review, or clear retirement plan exists." choices={scenarioOneChoices} />

        <ScenarioDecisionLab title="Scenario Decision Lab 2 — Staging Workload Requests Production Data" scenario="The Analytics Staging Workload needs synthetic staging data, but a developer proposes granting permanent read-only access to the production student-support database for convenience." choices={scenarioTwoChoices} />

        <Section eyebrow="Safe Fictional Lab" title="Build an Identity Perimeter Map">
          <p className="leading-8">Use fictional identities, resources, approvals, owners, policies, and synthetic evidence only. Do not access or inspect any real identity platform.</p>
          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional identity records.",
              "Include workforce, privileged, workload, external, temporary, and legacy identity types.",
              "Give every identity a stable ID.",
              "State the identity purpose.",
              "Record environment.",
              "Record the resource or application being accessed.",
              "Record allowed action scope.",
              "Assign identity owner or sponsor.",
              "Assign resource owner.",
              "Record approval path.",
              "Record review cadence or expiration.",
              "Record monitoring evidence.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Create at least ten identity-to-resource access paths.",
              "Identify at least two environment-boundary decisions.",
              "Identify at least two privileged-access relationships.",
              "Identify at least two workload identities.",
              "Identify at least two external or temporary identities.",
              "Identify one unowned legacy identity and keep it Blocked.",
              "Add change triggers for role change, employment change, project end, service retirement, provider change, ownership change, and architecture change.",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">Use fictional names, safe metadata, and synthetic evidence only. Do not use real usernames, passwords, tokens, private account identifiers, internal identity exports, or production access details.</p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Staging-to-Production Access"
          question="What is the strongest decision for PATH-05?"
          evidence={[
            "The identity belongs to the Analytics Team.",
            "The workload runs in staging.",
            "Its approved purpose is synthetic staging analytics.",
            "The requested destination is the production Student Support Database.",
            "No production business purpose or approval is documented.",
          ]}
          options={[
            "Allow because the same team owns the workload.",
            "Deny and preserve environment-specific identity scope until a legitimate production purpose and approval exist.",
            "Allow permanent read-only access.",
            "Allow because the production database is private.",
          ]}
          bestAnswer={1}
          explanation="Authorization depends on purpose, resource, environment, and approval. Team ownership and private networking do not create production authorization."
        />

        <Section eyebrow="Advanced Challenge" title="Redesign a Fictional Identity Perimeter">
          <p className="leading-8">A fictional organization has shared admin accounts, two legacy service identities, permanent vendor access, one staging workload that can reach production, and weak access-review evidence. Redesign the identity perimeter conceptually.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Named workforce identities",
              "Separate privileged identities or privileged activation",
              "Workload identities for applications",
              "Environment-specific workload scope",
              "External sponsor requirements",
              "External expiration and review",
              "Temporary access lifecycle",
              "Legacy identity modernization or retirement",
              "Resource-specific authorization",
              "Identity and resource ownership",
              "Authentication evidence",
              "Authorization evidence",
              "Monitoring coverage",
              "Review cadence",
              "Change triggers",
              "Blocked findings that must close before approval",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <DefenderChecklist title="A13.1 Defender Checklist" items={checklistItems} />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz title="A13.1 Mini Quiz: Identity as a Security Perimeter" questions={quizQuestions} />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Identity Perimeter Map"
          prompt="Create the first artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Identity Perimeter Map with at least twelve identities and ten access paths. Include identity ID, type, purpose, environment, resource, action scope, identity owner or sponsor, resource owner, approval, lifecycle, monitoring evidence, status, concern, next action, and change trigger."
          tips={[
            "Include workforce, privileged, workload, external, temporary, and legacy identity types.",
            "Show authentication and authorization as separate ideas.",
            "Include at least two workload identities and two privileged identities.",
            "Include at least one staging-to-production denial.",
            "Keep one unowned legacy identity Blocked.",
            "Use fictional provider-neutral records and no real credentials.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A13.2?">
          <p className="leading-8">A13.2 moves into Zero Trust Principles. Before continuing, make sure you can explain why identity reduces assumed trust but does not eliminate the need for resource authorization, monitoring, lifecycle, and architecture evidence.</p>
          <div className="mt-6 grid gap-4">
            {[
              "I can explain identity as a security perimeter.",
              "I can distinguish authentication from authorization.",
              "I can distinguish workforce, privileged, workload, external, temporary, and legacy identities.",
              "I can evaluate identity access by purpose, scope, environment, owner, lifecycle, and evidence.",
              "I can explain why private network placement does not replace identity or authorization.",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index + 1}</span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Identity Perimeter Map Look Professional">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Use stable identity IDs", detail: "Make every human, workload, external, temporary, and legacy record easy to reference later in A13." },
              { title: "Separate identity from access path", detail: "Identity records explain who or what exists; path records explain which resource/action relationship exists." },
              { title: "Show ownership", detail: "Include both identity owner/sponsor and resource owner when those responsibilities differ." },
              { title: "Show lifecycle", detail: "Access should have review dates, expirations, project triggers, role-change triggers, or retirement conditions." },
              { title: "Show environment", detail: "Make production, staging, development, and recovery scope visible." },
              { title: "Show evidence", detail: "Authentication, authorization, access review, workload activity, and monitoring should support each major claim." },
              { title: "Keep uncertainty visible", detail: "Use Conditional, Unknown, or Blocked when current evidence does not justify Confirmed." },
              { title: "Connect forward", detail: "A13.2 will use this map to identify where trust is explicit, assumed, excessive, or insufficiently verified." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Lesson Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Identity architecture does not require accessing real accounts</h2>
          <p className="mt-3 leading-7">Do not guess passwords, test authentication, enumerate users, access real identity platforms, use tokens, attempt privilege escalation, or inspect private account data. All identities, access paths, approvals, logs, and evidence in this lesson are fictional and defensive.</p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">A13.1 Identity as a Security Perimeter Complete</h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">You now have an identity-perimeter model built around principal type, authentication, authorization, purpose, privilege, ownership, environment, lifecycle, access paths, and current evidence. Next, A13.2 focuses on Zero Trust Principles.</p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}