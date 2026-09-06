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
const previousLesson = `${modulePath}/cloud-logging-and-monitoring-design`;
const nextLesson = `${modulePath}/backup-recovery-and-resilience`;

const objectives = [
  "Explain cloud secret and key governance through purpose, identity, scope, ownership, environment, lifecycle, evidence, and monitoring rather than through secret values themselves.",
  "Distinguish workload identity, managed secret references, service credentials, encryption key references, certificates, and external integration credentials by use and governance responsibility.",
  "Evaluate fictional secret and key metadata for overbroad scope, unclear ownership, stale rotation evidence, environment crossover, missing revocation paths, and unnecessary long-lived credentials.",
  "Connect secret and key handling to IAM, logging, storage, network, deployment, and resilience architecture without exposing or using any real credential material.",
  "Build a Cloud Secrets and Key Governance Register that becomes the sixth artifact in the A12 Cloud Security Architecture Assessment.",
];

const credentialCategories = [
  {
    category: "Workload identity",
    purpose:
      "Allows an application or service to authenticate as a named non-human principal without embedding a reusable human credential.",
    architectureQuestions:
      "Which workload owns the identity? What exact resources can it access? Is the identity environment-specific? What evidence proves the binding is current?",
    preferredUse:
      "Use platform or federated workload identity where practical so access is tied to workload purpose and lifecycle.",
  },
  {
    category: "Managed secret reference",
    purpose:
      "Represents a protected application secret stored through an approved secret-management service and referenced by a workload at runtime.",
    architectureQuestions:
      "Who owns the secret? Which workloads may retrieve it? What environment does it belong to? What rotation and revocation expectations apply?",
    preferredUse:
      "Keep secret values out of source code, documentation, tickets, chat, and portfolio artifacts.",
  },
  {
    category: "Service integration credential",
    purpose:
      "Allows an application to authenticate to an approved external or managed service when workload federation is not available.",
    architectureQuestions:
      "Is the credential uniquely tied to one integration? Is access narrow? How is expiration, rotation, revocation, and ownership handled?",
    preferredUse:
      "Prefer narrow, dedicated, time-bounded or regularly rotated credentials rather than shared or multipurpose secrets.",
  },
  {
    category: "Encryption key reference",
    purpose:
      "Identifies the cryptographic key or managed key service used to protect data or another key without exposing the underlying key material.",
    architectureQuestions:
      "Which data or service depends on the key? Who can administer it? Who can use it? What separation and lifecycle evidence exists?",
    preferredUse:
      "Document key identifiers, owners, purpose, policy, and lifecycle metadata only — never key material.",
  },
  {
    category: "Certificate reference",
    purpose:
      "Represents a certificate used for approved service identity, secure communication, or trust establishment.",
    architectureQuestions:
      "Which service uses it? Who owns renewal? What happens before expiration? Is trust scope limited to the intended service?",
    preferredUse:
      "Track certificate purpose, owner, issuer class, environment, renewal, expiration, and replacement evidence.",
  },
  {
    category: "Emergency credential",
    purpose:
      "Supports narrowly defined recovery or emergency access when normal identity paths are unavailable.",
    architectureQuestions:
      "Who authorizes use? How is access protected? How is use logged and reviewed? How is the credential rotated or replaced after use?",
    preferredUse:
      "Keep emergency credentials exceptional, strongly governed, separately owned, and subject to immediate post-use review.",
  },
];

const lifecycleStates = [
  {
    state: "Requested",
    meaning:
      "A service owner has documented the business or technical need for an identity, secret, key reference, certificate, or integration credential.",
    evidence:
      "Purpose, owner, target environment, intended consumer, required scope, approval.",
  },
  {
    state: "Provisioned",
    meaning:
      "The credential or key reference exists through an approved platform or process.",
    evidence:
      "Metadata record, owner, creation date, service binding, environment, policy reference.",
  },
  {
    state: "Active",
    meaning:
      "The workload or service currently depends on the credential or key reference.",
    evidence:
      "Current workload mapping, use evidence, access policy, monitoring, owner confirmation.",
  },
  {
    state: "Rotating",
    meaning:
      "The credential or certificate is being replaced or renewed while preserving service continuity.",
    evidence:
      "Rotation window, old/new reference metadata, owner, test evidence, rollback or recovery plan.",
  },
  {
    state: "Revoked",
    meaning:
      "The credential or identity can no longer be used because access was deliberately removed.",
    evidence:
      "Revocation record, incident/change reference, owner, affected-service validation.",
  },
  {
    state: "Retired",
    meaning:
      "The credential, key reference, certificate, or identity is no longer needed because the service or integration ended.",
    evidence:
      "Retirement approval, dependency closure, removal from workload configuration, monitoring confirmation.",
  },
];

const governancePrinciples = [
  {
    title: "Identity before secret",
    meaning:
      "Prefer a workload identity over a copied reusable secret when the platform and architecture support it.",
    review:
      "Can the workload authenticate as itself without storing a long-lived shared credential?",
  },
  {
    title: "One purpose, narrow scope",
    meaning:
      "Credentials and key references should serve a clearly defined workload, service, integration, or data-protection purpose.",
    review:
      "Does the access include only the resources and actions required?",
  },
  {
    title: "Environment separation",
    meaning:
      "Development, test, staging, and production credentials should not be casually reused across environments.",
    review:
      "Can lower-environment credentials reach production resources?",
  },
  {
    title: "Explicit ownership",
    meaning:
      "Every secret, key reference, certificate, integration credential, and emergency credential needs an accountable owner.",
    review:
      "Can someone explain why it exists, where it is used, and when it should be replaced or retired?",
  },
  {
    title: "Rotation and renewal",
    meaning:
      "Credentials and certificates should have a planned replacement lifecycle appropriate to their risk and service dependence.",
    review:
      "Is there current evidence that the rotation or renewal process works?",
  },
  {
    title: "Revocation readiness",
    meaning:
      "The architecture should be able to remove access quickly when a credential is no longer trusted or needed.",
    review:
      "Who can revoke it and how does the dependent service recover?",
  },
  {
    title: "No values in logs",
    meaning:
      "Security logging should capture secret-management events without recording the sensitive values themselves.",
    review:
      "Do logs show access, change, rotation, and failure metadata without exposing credential content?",
  },
  {
    title: "Retirement closes the loop",
    meaning:
      "Old secrets and keys should not remain active after applications, integrations, or environments are retired.",
    review:
      "Does service retirement include credential and key cleanup evidence?",
  },
];

const vocabulary = [
  {
    term: "Secret",
    definition:
      "Sensitive authentication or authorization material that should not be exposed in source code, logs, documentation, or public artifacts.",
  },
  {
    term: "Credential",
    definition:
      "Information or identity material used to prove that a human or workload is allowed to authenticate.",
  },
  {
    term: "Workload identity",
    definition:
      "A named non-human identity representing an application, service, job, or automation process.",
  },
  {
    term: "Key reference",
    definition:
      "A safe identifier or metadata pointer to a cryptographic key managed by an approved key service, without exposing key material.",
  },
  {
    term: "Rotation",
    definition:
      "Replacing credential or key material according to policy, risk, expiration, or change while preserving service continuity.",
  },
  {
    term: "Revocation",
    definition:
      "Removing the ability for a credential, identity, certificate, or key authorization to continue being used.",
  },
  {
    term: "Certificate",
    definition:
      "A digital identity artifact used to support trust or secure communication between approved systems.",
  },
  {
    term: "Secret-management service",
    definition:
      "A platform used to store, govern, audit, and deliver secret material to approved identities or workloads.",
  },
  {
    term: "Key-management service",
    definition:
      "A platform used to manage cryptographic keys, permissions, lifecycle, audit evidence, and protected key operations.",
  },
  {
    term: "Credential sprawl",
    definition:
      "The growth of redundant, duplicated, unowned, or poorly tracked credentials across code, systems, people, or environments.",
  },
  {
    term: "Long-lived credential",
    definition:
      "A reusable credential that remains valid for an extended period and therefore requires stronger lifecycle and revocation governance.",
  },
  {
    term: "Emergency credential",
    definition:
      "Exceptional access material reserved for tightly controlled recovery or emergency use when normal identity paths are unavailable.",
  },
];

const secretRecords = [
  {
    id: "SEC-01",
    name: "Student Portal Workload Identity",
    type: "Workload identity",
    purpose: "Authenticate portal workload to approved managed services",
    environment: "Production",
    consumer: "Student Portal",
    scope: "Application database + report storage only",
    owner: "Application Team",
    lifecycle: "Active",
    rotation: "Identity binding reviewed on architecture change",
    revocation: "Disable workload binding and redeploy approved configuration",
    monitoring: "Identity and service-access events",
    status: "Confirmed",
    concern:
      "No reusable human credential is embedded in the application.",
  },
  {
    id: "SEC-02",
    name: "Notification Integration Credential",
    type: "Service integration credential",
    purpose: "Authenticate Notification Worker to approved external notification service",
    environment: "Production",
    consumer: "Notification Worker",
    scope: "Notification API only",
    owner: "Notification Team",
    lifecycle: "Active",
    rotation: "Quarterly or on provider/owner change",
    revocation: "Disable old integration credential and activate approved replacement",
    monitoring: "Credential access metadata + integration authentication failures",
    status: "Conditional",
    concern:
      "Migration to workload federation is planned but not yet complete.",
  },
  {
    id: "SEC-03",
    name: "Report Storage Encryption Key Reference",
    type: "Key reference",
    purpose: "Protect generated report storage",
    environment: "Production",
    consumer: "Managed storage service",
    scope: "Report storage encryption operations",
    owner: "Data Protection Owner",
    lifecycle: "Active",
    rotation: "Managed policy with annual governance review",
    revocation: "Controlled key-policy change with data-availability review",
    monitoring: "Key administration and use metadata",
    status: "Confirmed",
    concern:
      "No key material appears in the architecture record.",
  },
  {
    id: "SEC-04",
    name: "Scheduling Integration Certificate Reference",
    type: "Certificate reference",
    purpose: "Support approved service trust for scheduling integration",
    environment: "Production",
    consumer: "Scheduling Integration Service",
    scope: "Scheduling integration endpoint",
    owner: "Integration Owner",
    lifecycle: "Active",
    rotation: "Renewal due in 45 days",
    revocation: "Replace certificate and remove previous trust reference",
    monitoring: "Certificate lifecycle and integration authentication events",
    status: "Conditional",
    concern:
      "Renewal owner is confirmed, but replacement validation has not started.",
  },
  {
    id: "SEC-05",
    name: "Legacy Reporting Service Credential",
    type: "Long-lived service credential",
    purpose: "Historical scheduled reporting integration",
    environment: "Production",
    consumer: "Legacy Report Job",
    scope: "Report storage + schedule service",
    owner: "Unknown",
    lifecycle: "Active",
    rotation: "Overdue",
    revocation: "Unknown",
    monitoring: "Partial",
    status: "Blocked",
    concern:
      "Current owner, business need, rotation evidence, and revocation path are not established.",
  },
  {
    id: "SEC-06",
    name: "Staging Analytics Credential",
    type: "Managed secret reference",
    purpose: "Authenticate staging analytics process",
    environment: "Staging",
    consumer: "Analytics Staging Job",
    scope: "Staging analytics dataset only",
    owner: "Analytics Team",
    lifecycle: "Active",
    rotation: "Every 90 days",
    revocation: "Disable secret version and replace staging configuration",
    monitoring: "Secret access metadata",
    status: "Confirmed",
    concern:
      "Production access is explicitly excluded.",
  },
  {
    id: "SEC-07",
    name: "Emergency Recovery Credential",
    type: "Emergency credential",
    purpose: "Support controlled recovery when normal identity path is unavailable",
    environment: "Production recovery",
    consumer: "Authorized Recovery Operators",
    scope: "Recovery administration only",
    owner: "Recovery Owner",
    lifecycle: "Active / exceptional",
    rotation: "After use and on scheduled emergency-access review",
    revocation: "Immediate replacement after use or trust concern",
    monitoring: "Emergency access activation + post-use review",
    status: "Confirmed",
    concern:
      "Use requires dual approval and post-use review.",
  },
];

const misusePatterns = [
  {
    title: "Secret in source code",
    problem:
      "Credential material becomes tied to repository history, developer access, build systems, and copies.",
    better:
      "Use workload identity or approved managed secret references and keep values out of source.",
  },
  {
    title: "One credential for many applications",
    problem:
      "Ownership and revocation become difficult because multiple services depend on the same access material.",
    better:
      "Use dedicated identities or narrowly scoped credentials per workload or integration.",
  },
  {
    title: "Production secret reused in test",
    problem:
      "A lower-trust environment gains production access material and blurs environment boundaries.",
    better:
      "Use separate environment-specific identities and credentials.",
  },
  {
    title: "Rotation without validation",
    problem:
      "The credential changes, but no one confirms dependent services can still authenticate correctly.",
    better:
      "Treat rotation as a controlled change with validation and recovery planning.",
  },
  {
    title: "Credential exists with no owner",
    problem:
      "No one is accountable for scope, rotation, revocation, or retirement.",
    better:
      "Block expansion and resolve ownership before treating the credential as governed.",
  },
  {
    title: "Secret value in logs",
    problem:
      "The monitoring platform becomes another location containing sensitive credential material.",
    better:
      "Log access metadata, identity, event type, outcome, and reference ID — never the value.",
  },
  {
    title: "Never-expiring integration credential",
    problem:
      "Access can survive service changes, ownership changes, or forgotten integrations.",
    better:
      "Use expiration, periodic rotation, federation, or another bounded lifecycle.",
  },
  {
    title: "Retired service, active credential",
    problem:
      "The application is gone but authentication material remains valid.",
    better:
      "Make credential retirement part of service decommissioning evidence.",
  },
];

const dependencyMap = [
  {
    service: "Student Portal",
    identityOrSecret: "SEC-01 Student Portal Workload Identity",
    dependency:
      "Database and report-storage access",
    architectureEffect:
      "Portal access can be removed by changing the workload binding without touching human credentials.",
  },
  {
    service: "Notification Worker",
    identityOrSecret: "SEC-02 Notification Integration Credential",
    dependency:
      "External notification provider",
    architectureEffect:
      "Integration remains dependent on a reusable credential until workload federation migration is complete.",
  },
  {
    service: "Generated Report Storage",
    identityOrSecret: "SEC-03 Key Reference",
    dependency:
      "Managed storage encryption",
    architectureEffect:
      "Data protection depends on key policy and service availability, but architecture documentation stores only the safe key reference.",
  },
  {
    service: "Scheduling Integration",
    identityOrSecret: "SEC-04 Certificate Reference",
    dependency:
      "Partner service trust",
    architectureEffect:
      "Certificate renewal is a service-availability dependency and should be tracked before expiration.",
  },
  {
    service: "Legacy Reporting Job",
    identityOrSecret: "SEC-05 Legacy Reporting Credential",
    dependency:
      "Historical report generation",
    architectureEffect:
      "Unknown ownership makes rotation, revocation, and retirement decisions unsafe and incomplete.",
  },
  {
    service: "Recovery Operations",
    identityOrSecret: "SEC-07 Emergency Recovery Credential",
    dependency:
      "Exceptional recovery path",
    architectureEffect:
      "Recovery capability depends on strong governance, narrow use, dual approval, logging, and post-use replacement.",
  },
];

const dashboardMetrics = [
  {
    label: "Governed identity/secret records",
    value: "7",
    note: "Workload, integration, key, certificate, staging, legacy, and emergency records",
  },
  {
    label: "Owned records",
    value: "6 / 7",
    note: "Legacy Reporting Service Credential has no confirmed owner",
  },
  {
    label: "Current lifecycle evidence",
    value: "5 / 7",
    note: "Certificate renewal is pending and legacy credential rotation is overdue",
  },
  {
    label: "Workload identity adoption",
    value: "3 / 5",
    note: "Two service integrations still depend on reusable credential material",
  },
];

const logs = [
  "[08:17] SEC-01 portal-workload identity=WORKLOAD scope=DB+REPORT status=CONFIRMED",
  "[08:46] SEC-02 notification-integration lifecycle=ACTIVE federation_migration=PLANNED",
  "[09:09] SEC-03 report-key-reference owner=DataProtection rotation_policy=CURRENT",
  "[09:34] SEC-04 scheduling-certificate renewal_due=45d validation=NOT_STARTED",
  "[10:01] SEC-05 legacy-reporting owner=UNKNOWN rotation=OVERDUE revocation=UNKNOWN status=BLOCKED",
  "[10:28] SEC-06 staging-analytics env=STAGING prod_scope=NONE status=CONFIRMED",
  "[10:55] SEC-07 emergency-recovery dual_approval=YES post_use_review=REQUIRED",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep SEC-05 Blocked, confirm whether the legacy reporting job is still required, assign an owner, map dependencies, define rotation and revocation, and retire the credential if the service is no longer needed.",
    outcome:
      "Best. Unowned long-lived credentials should not be treated as acceptable architecture debt.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave SEC-05 unchanged because it has not caused a known incident.",
    outcome:
      "Risky. Absence of a known incident does not establish ownership, need, or lifecycle control.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Copy SEC-05 into the staging environment so troubleshooting is easier.",
    outcome:
      "Risky. Reusing production credentials in lower environments expands exposure and weakens separation.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Track certificate ownership, renewal date, replacement validation, service dependency, and rollback/recovery evidence without storing certificate private material in the architecture artifact.",
    outcome:
      "Best. Lifecycle metadata is sufficient for architecture governance and avoids exposing sensitive material.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Paste the private certificate material into the design document so reviewers can verify it exists.",
    outcome:
      "Risky. Architecture artifacts should never contain private credential material.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore renewal until the certificate expires because the provider manages networking.",
    outcome:
      "Risky. Certificate lifecycle remains an organization responsibility when the service depends on it.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest way to document cloud secrets in an architecture portfolio?",
    choices: [
      "Include the real values for proof.",
      "Record purpose, owner, consumer, scope, environment, lifecycle, rotation, revocation, monitoring, and safe reference metadata without the value.",
      "Store screenshots of live credentials.",
      "Share copied tokens between workloads.",
    ],
    answer: 1,
    explanation:
      "Architecture review needs governance metadata, not secret values.",
  },
  {
    question:
      "Why is workload identity often preferable to a reusable service secret?",
    choices: [
      "Because workloads should not have authorization.",
      "Because it ties access to a named non-human principal and can reduce long-lived secret storage and sharing.",
      "Because workload identities should have administrator access.",
      "Because identity removes the need for monitoring.",
    ],
    answer: 1,
    explanation:
      "Workload identity improves purpose, scope, ownership, and lifecycle while reducing reusable credential exposure.",
  },
  {
    question:
      "What is the main problem with reusing a production credential in staging?",
    choices: [
      "Staging cannot authenticate.",
      "It weakens environment separation and gives a lower-trust environment access material tied to production.",
      "Production credentials never expire.",
      "It makes logging too detailed.",
    ],
    answer: 1,
    explanation:
      "Environment separation should include identity and credential boundaries.",
  },
  {
    question:
      "A credential has no owner, overdue rotation, and no documented revocation path. What is the strongest status?",
    choices: [
      "Confirmed",
      "Blocked or Unknown until ownership, need, lifecycle, and revocation are resolved",
      "Public",
      "Automatically trusted because it is old",
    ],
    answer: 1,
    explanation:
      "A credential without ownership or lifecycle evidence cannot be confidently governed.",
  },
  {
    question:
      "What should secret-management logs contain?",
    choices: [
      "The secret value.",
      "Metadata such as identity, reference ID, event type, outcome, owner context, and timestamp without sensitive values.",
      "Private keys.",
      "Full authentication tokens.",
    ],
    answer: 1,
    explanation:
      "Monitoring should capture governance evidence without exposing credential content.",
  },
  {
    question:
      "Why is certificate renewal an architecture concern?",
    choices: [
      "Because an expired certificate can interrupt a service dependency and trust relationship.",
      "Because certificates never affect availability.",
      "Because certificate values belong in public documentation.",
      "Because providers always renew every customer certificate automatically.",
    ],
    answer: 0,
    explanation:
      "Certificate lifecycle can affect service availability and trust, so ownership and renewal evidence matter.",
  },
  {
    question:
      "What should happen to credentials when a service is retired?",
    choices: [
      "Leave them active in case someone needs them later.",
      "Retire or revoke them as part of service decommissioning and record closure evidence.",
      "Copy them to a new service.",
      "Move them into logs.",
    ],
    answer: 1,
    explanation:
      "Credential retirement closes the service lifecycle and reduces forgotten access paths.",
  },
];

const checklistItems = [
  "Every secret, credential, key reference, certificate, and workload identity has a documented purpose.",
  "Workload identity is preferred over copied human or shared credentials where the architecture supports it.",
  "Each record has an accountable owner.",
  "Environment scope is explicit.",
  "Production credentials are not reused in lower environments.",
  "Resource and action scope are narrow enough for the approved purpose.",
  "Rotation or renewal expectations are documented.",
  "Revocation paths are documented.",
  "Service retirement includes credential retirement.",
  "Key references and certificate records contain metadata only, never private material.",
  "Logs capture access and lifecycle metadata without sensitive values.",
  "Emergency credentials are exceptional, narrowly scoped, strongly governed, and reviewed after use.",
  "Legacy long-lived credentials remain visible as risk until replaced or retired.",
  "Monitoring covers access, rotation, revocation, failure, and ownership changes.",
  "Change triggers cover new integrations, service migration, provider change, ownership change, environment change, certificate renewal, and service retirement.",
  "No lesson activity requires viewing, generating, copying, using, or accessing any real secret, token, password, private key, or production credential.",
];

const takeaways = [
  "Cloud secret governance is about purpose, scope, ownership, lifecycle, monitoring, and evidence — not secret values.",
  "Workload identity can reduce dependence on reusable service credentials.",
  "Production and lower-environment credentials should remain separated.",
  "Long-lived or shared credentials create more lifecycle and revocation risk.",
  "Key and certificate records should contain safe metadata and references only.",
  "Rotation is a controlled change that needs validation, not just a date on a calendar.",
  "Revocation readiness matters when access must be removed quickly.",
  "Secret-management logs should never contain sensitive credential values.",
  "Service retirement should retire associated identities, secrets, keys, and certificates.",
  "The Cloud Secrets and Key Governance Register will connect directly to A12 resilience, configuration assurance, governance, and the final architecture review.",
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

export default function SecretsAndKeyHandlingInCloudPage() {
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
              A12.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cloud Security Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A12.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secrets and Key Handling in Cloud
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cloud applications need ways to identify workloads, authenticate to
            services, protect data, establish trust, and recover safely. Strong
            architecture keeps these decisions governed through identity,
            metadata, scope, ownership, lifecycle, and evidence.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson never displays or uses real secret values. All records
            are fictional metadata and safe references only.
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
          lessonTitle="Secrets and Key Handling in Cloud"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A12.6 Entry Readiness"
          items={[
            "I understand workload identity from A12.2.",
            "I understand monitoring and evidence quality from A12.5.",
            "I can distinguish architecture metadata from sensitive credential material.",
            "I will never include real secret values, tokens, passwords, or private key material in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Safest Secret in an Architecture Document Is the One That Never Appears"
        >
          <p className="leading-8">
            Architects need to know which services depend on identities,
            credentials, keys, certificates, and emergency access. They do not
            need the sensitive values themselves.
          </p>

          <p className="mt-4 leading-8">
            A professional record can say that a production workload uses a
            managed secret reference owned by the Integration Team, scoped to
            one external service, rotated quarterly, and monitored for access.
            That is enough to review the design.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Governance needs metadata. Applications need secrets. Portfolios do not.
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
          eyebrow="Credential Categories"
          title="Different Trust Mechanisms Need Different Governance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {credentialCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.category}
                </h3>
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

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Preferred design
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.preferredUse}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle"
          title="Secrets and Keys Need a Beginning, Middle, and End"
        >
          <div className="grid gap-5">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Principles"
          title="Eight Principles for Safer Cloud Credential Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governancePrinciples.map((item) => (
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
          title="Secrets, Keys, and Credential Terms"
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
          eyebrow="Fictional Governance Register"
          title="Seven Northbridge Identity, Secret, Key, and Certificate Records"
        >
          <div className="grid gap-5">
            {secretRecords.map((item) => (
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
                  {item.name}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Environment", item.environment],
                    ["Consumer", item.consumer],
                    ["Scope", item.scope],
                    ["Owner", item.owner],
                    ["Lifecycle", item.lifecycle],
                    ["Rotation / renewal", item.rotation],
                    ["Revocation", item.revocation],
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
          title="Northbridge Cloud Secrets Governance Dashboard"
          subtitle="Fictional identity, secret, key, and certificate lifecycle metrics"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Credential Has No Owner or Revocation Path"
          severity="High"
          time="10:01"
          source="Fictional Cloud Secrets Governance Review"
          details="SEC-05 is a long-lived production service credential with no confirmed owner, overdue rotation, partial monitoring, and no documented revocation path."
          recommendation="Keep SEC-05 Blocked until business need, owner, dependencies, scope, rotation, revocation, and retirement options are resolved."
        />

        <Section
          eyebrow="Dependency Awareness"
          title="Credential Changes Can Affect Application Availability"
        >
          <p className="leading-8">
            Secrets, keys, certificates, and workload identities are not isolated
            records. Applications depend on them. A rotation or revocation
            decision should therefore include service dependencies and
            validation.
          </p>

          <div className="mt-6 grid gap-5">
            {dependencyMap.map((item) => (
              <article
                key={item.identityOrSecret}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Service
                    </p>
                    <p className="mt-2 text-sm font-black text-cyan-50">
                      {item.service}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Identity / reference
                    </p>
                    <p className="mt-2 text-sm font-black text-purple-50">
                      {item.identityOrSecret}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Dependency
                    </p>
                    <p className="mt-2 text-sm text-blue-50">
                      {item.dependency}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Architecture effect: {item.architectureEffect}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Secret and Key Governance Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Credential"
          question="What is the strongest conclusion about SEC-05?"
          evidence={[
            "The credential is used by a historical production reporting job.",
            "No current accountable owner is documented.",
            "Rotation is overdue.",
            "The revocation path is Unknown.",
            "Monitoring coverage is Partial.",
          ]}
          options={[
            "The credential is Confirmed because it has existed for years.",
            "The credential should remain Blocked until business need, owner, scope, lifecycle, monitoring, revocation, and retirement are resolved.",
            "The credential should be copied to staging.",
            "Long-lived service credentials never require rotation.",
          ]}
          bestAnswer={1}
          explanation="A credential without current ownership or lifecycle evidence should not be treated as governed simply because it still works."
        />

        <Section
          eyebrow="Architecture Anti-Patterns"
          title="Eight Ways Credential Governance Breaks Down"
        >
          <div className="grid gap-5">
            {misusePatterns.map((item, index) => (
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
          eyebrow="Logging Without Exposure"
          title="Monitor Secret Events, Not Secret Values"
        >
          <p className="leading-8">
            Secret and key systems should produce useful audit evidence. That
            evidence should describe who or what accessed a secret reference,
            which record changed, when rotation occurred, whether a request
            succeeded, and which owner or service was involved.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Useful metadata",
                items: [
                  "Stable secret or key reference ID",
                  "Human or workload identity",
                  "Event type",
                  "Timestamp",
                  "Environment",
                  "Service owner",
                  "Outcome",
                  "Rotation or renewal event",
                  "Revocation event",
                  "Correlation or change reference",
                ],
              },
              {
                title: "Never include",
                items: [
                  "Passwords",
                  "Tokens",
                  "Secret values",
                  "Private key material",
                  "Raw integration credentials",
                  "Full emergency credential material",
                  "Unredacted protected payloads",
                  "Sensitive values copied from live systems",
                ],
              },
            ].map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-blue-300/20 bg-slate-950/20 p-3 text-sm leading-7 text-blue-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Unowned Long-Lived Credential"
          scenario="A production reporting job still uses a long-lived service credential. The credential works, but no current owner is documented, rotation is overdue, and the revocation path is Unknown."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Certificate Renewal Without Exposing Private Material"
          scenario="A scheduling integration certificate expires in 45 days. The integration owner is known, but replacement validation has not started."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Cloud Secrets and Key Governance Register"
        >
          <p className="leading-8">
            Use fictional metadata only. Do not create, view, copy, use, or
            simulate real credential values.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twelve fictional governance records.",
              "Include workload identity, managed secret reference, service integration credential, key reference, certificate reference, emergency credential, and one legacy credential.",
              "Give each record a stable ID.",
              "State purpose.",
              "Identify environment.",
              "Identify the consuming workload or service.",
              "Describe resource and action scope.",
              "Assign an accountable owner.",
              "Record lifecycle state.",
              "Record rotation or renewal expectations.",
              "Record revocation expectations.",
              "Record monitoring or audit evidence.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Revoked, or Retired.",
              "Identify at least two credentials that could be replaced by workload identity.",
              "Identify at least one environment-separation issue.",
              "Identify at least one stale or unowned credential.",
              "Define remediation or retirement.",
              "Add change triggers for service migration, provider change, owner change, environment change, integration change, certificate renewal, incident response, and retirement.",
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
              Use safe labels and metadata only. Never place a real password,
              token, private key, secret, credential, certificate private
              material, account credential, or recovery secret in this lab.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Certificate Renewal Readiness"
          question="What is the strongest conclusion about SEC-04?"
          evidence={[
            "The scheduling certificate supports a production integration.",
            "The accountable owner is known.",
            "Expiration is 45 days away.",
            "Renewal responsibility is documented.",
            "Replacement validation has not yet started.",
          ]}
          options={[
            "The certificate lifecycle is fully Confirmed.",
            "The certificate lifecycle is Conditional until replacement validation is completed before expiration.",
            "Private key material should be added to the architecture record.",
            "Expiration does not affect service architecture.",
          ]}
          bestAnswer={1}
          explanation="Ownership and a renewal date are useful, but a dependent service still needs replacement validation before lifecycle confidence is complete."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Reduce Credential Sprawl Across a Fictional Cloud Application"
        >
          <p className="leading-8">
            A fictional environment has fifteen reusable service credentials
            across five applications, three environments, two external
            integrations, and one recovery process. Redesign the credential
            architecture conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Workload identities that can replace reusable secrets",
              "Dedicated credentials for unavoidable external integrations",
              "Production vs. staging separation",
              "Owner for every credential or identity",
              "Narrow resource scope",
              "Rotation schedule",
              "Certificate renewal ownership",
              "Revocation process",
              "Emergency-access governance",
              "Monitoring without secret values",
              "Service-dependency mapping",
              "Retirement of unused credentials",
              "Change triggers",
              "Evidence required before declaring the new design ready",
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
            A strong redesign minimizes long-lived reusable credentials, keeps
            environment and ownership boundaries clear, and makes revocation and
            retirement predictable.
          </p>
        </Section>

        <DefenderChecklist
          title="A12.6 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A12.6 Mini Quiz: Secrets and Key Handling in Cloud"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cloud Secrets and Key Governance Register"
          prompt="Create the sixth artifact for your A12 Cloud Security Architecture Assessment: a fictional Cloud Secrets and Key Governance Register with at least twelve records. Include record ID, type, purpose, environment, consumer, resource/action scope, owner, lifecycle state, rotation or renewal expectation, revocation path, monitoring evidence, status, architecture concern, remediation or retirement decision, and change trigger. Never include secret values."
          tips={[
            "Use metadata and safe references only.",
            "Include workload identity, service credential, key reference, certificate, emergency access, and one legacy record.",
            "Show at least two opportunities to replace reusable credentials with workload identity.",
            "Include at least one Blocked unowned credential.",
            "Show environment separation clearly.",
            "Never place real or realistic secret values in the portfolio.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A12.7?"
        >
          <p className="leading-8">
            A12.7 moves into Backup, Recovery, and Resilience. Before continuing,
            make sure you can explain how recovery depends on identity, key
            access, emergency credentials, monitoring, and controlled lifecycle
            decisions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish workload identity from reusable credentials.",
              "I can document secret and key governance without exposing values.",
              "I can explain rotation, revocation, renewal, and retirement.",
              "I can identify environment crossover and unowned credential risk.",
              "I can connect credential lifecycle to application availability and recovery.",
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
          title="How to Make the Secrets Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use metadata only",
                detail:
                  "Record safe IDs, purpose, owner, environment, scope, and lifecycle without sensitive values.",
              },
              {
                title: "Separate identity from credential",
                detail:
                  "Make workload identities visually distinct from reusable service credentials and certificates.",
              },
              {
                title: "Show environment",
                detail:
                  "Production, staging, development, and recovery records should be clearly separated.",
              },
              {
                title: "Show dependencies",
                detail:
                  "Identify which application or service would be affected by rotation, revocation, renewal, or retirement.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every record needs an accountable service or platform owner.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Use Active, Rotating, Revoked, Retired, Conditional, or Blocked status where appropriate.",
              },
              {
                title: "Show modernization",
                detail:
                  "Highlight places where workload identity can replace long-lived credential material.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the register reusable in A12.7 resilience, A12.8 configuration assurance, A12.9 governance, and A12.10 architecture review.",
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
            Secret governance never requires exposing or using real secrets
          </h2>
          <p className="mt-3 leading-7">
            Do not view, request, copy, generate, test, use, store, or share
            real passwords, tokens, API credentials, private keys, recovery
            secrets, cloud account credentials, or certificate private
            material. All records in this lesson are fictional metadata only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A12.6 Secrets and Key Handling in Cloud Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a cloud governance model for workload identities,
            service credentials, key references, certificates, emergency access,
            ownership, rotation, revocation, monitoring, and retirement. Next,
            A12.7 focuses on Backup, Recovery, and Resilience.
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