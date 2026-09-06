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
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/threat-modeling-for-software`;
const nextLesson = `${modulePath}/dependency-and-supply-chain-risk-concepts`;

const objectives = [
  "Explain why secrets management is a lifecycle and governance problem rather than simply a storage problem.",
  "Distinguish secret values from metadata such as owner, purpose, environment, access scope, rotation date, expiration, and status.",
  "Evaluate fictional secret records for ownership, environment separation, least privilege, rotation, redaction, monitoring, and retirement readiness.",
  "Recognize common design weaknesses such as embedded secrets, shared secrets, stale credentials, overbroad access, weak ownership, missing rotation, and unsafe logging.",
  "Build a metadata-only secrets governance model that connects A11 requirements, threat modeling, review, testing, deployment, and maintenance.",
];

const lifecycle = [
  {
    stage: "Create",
    question: "Why does this secret exist and what system or workflow needs it?",
    securityWork:
      "Define business purpose, secret type, owner, environment, approved system, initial scope, expiration expectation, and whether a less-sensitive design could avoid the secret entirely.",
    evidence:
      "Secret metadata record, design requirement, architecture decision, approval note.",
  },
  {
    stage: "Store",
    question: "Where should the secret be kept?",
    securityWork:
      "Use approved managed storage or platform mechanisms rather than source code, shared documents, chat messages, tickets, or unprotected configuration.",
    evidence:
      "Storage policy, metadata reference, configuration design, repository review evidence.",
  },
  {
    stage: "Distribute",
    question: "How does the approved workload receive access?",
    securityWork:
      "Limit delivery to the intended service, environment, identity, and workflow. Avoid unnecessary copying or human exposure.",
    evidence:
      "Access policy summary, workload identity record, environment mapping, approval record.",
  },
  {
    stage: "Use",
    question: "What is the minimum access necessary for the secret's purpose?",
    securityWork:
      "Apply least privilege, environment separation, purpose limitation, and appropriate service identities. Do not expose values in logs, errors, dashboards, or user interfaces.",
    evidence:
      "Permission metadata, service-owner record, logging design, validation evidence.",
  },
  {
    stage: "Monitor",
    question: "How would the team know if governance or access changed?",
    securityWork:
      "Monitor ownership, access-policy changes, failed access, stale rotation, expiration, source health, configuration drift, and unauthorized copying indicators at a policy level.",
    evidence:
      "Dashboard status, audit summaries, source-health metrics, exception register.",
  },
  {
    stage: "Rotate",
    question: "How is the secret replaced safely without breaking the service?",
    securityWork:
      "Define rotation owner, schedule, compatibility window, dependent services, validation steps, rollback, and evidence that the old secret was retired.",
    evidence:
      "Rotation record, dependency map, validation result, rollback plan, retirement evidence.",
  },
  {
    stage: "Revoke",
    question: "When must access be removed immediately?",
    securityWork:
      "Revoke when purpose ends, ownership changes, a service is retired, access is no longer needed, or governance evidence indicates the secret should no longer be trusted.",
    evidence:
      "Revocation approval, access-removal record, service validation, follow-up review.",
  },
  {
    stage: "Retire",
    question: "How do we prove the secret is no longer active or needed?",
    securityWork:
      "Confirm old values are no longer referenced, dependent workflows use approved replacements, permissions are removed, and the metadata record is closed.",
    evidence:
      "Retirement status, dependency confirmation, owner sign-off, post-change validation.",
  },
];

const secretTypes = [
  {
    type: "Service credential",
    purpose:
      "Allows an approved service or workload to authenticate to another approved system.",
    governance:
      "Owner, system identity, environment, destination, access scope, rotation, retirement.",
  },
  {
    type: "API token",
    purpose:
      "Represents approved access to an API or external service.",
    governance:
      "Purpose, owner, allowed service, environment, scope, expiration, rotation, supplier dependency.",
  },
  {
    type: "Encryption key reference",
    purpose:
      "Supports approved protection or cryptographic operations.",
    governance:
      "Key owner, purpose, environment, rotation or lifecycle, service dependency, recovery policy.",
  },
  {
    type: "Signing key reference",
    purpose:
      "Supports approved integrity or authenticity operations.",
    governance:
      "Owner, signing purpose, protected use, rotation, revocation, audit, retirement.",
  },
  {
    type: "Database credential",
    purpose:
      "Allows an application or approved service identity to connect to a data service.",
    governance:
      "Application owner, database scope, environment, permissions, storage, rotation, monitoring.",
  },
  {
    type: "Webhook secret reference",
    purpose:
      "Supports validation of approved webhook interactions.",
    governance:
      "Integration owner, environment, supplier, rotation, logging boundary, retirement trigger.",
  },
];

const vocabulary = [
  {
    term: "Secret",
    definition:
      "A sensitive value used to authenticate, authorize, encrypt, sign, or otherwise protect a system interaction.",
  },
  {
    term: "Secret metadata",
    definition:
      "Non-secret information about a secret, such as owner, purpose, environment, type, scope, rotation date, status, and dependencies.",
  },
  {
    term: "Secret store",
    definition:
      "An approved managed system or platform mechanism designed to protect and control access to secret values.",
  },
  {
    term: "Least privilege",
    definition:
      "Limiting secret access and permissions to the minimum needed for the intended service and purpose.",
  },
  {
    term: "Environment separation",
    definition:
      "Keeping development, test, staging, and production secret access appropriately separated.",
  },
  {
    term: "Rotation",
    definition:
      "Replacing a secret with a new approved value according to policy or risk conditions while safely updating dependencies.",
  },
  {
    term: "Revocation",
    definition:
      "Ending the validity or access of a secret when it should no longer be trusted or used.",
  },
  {
    term: "Expiration",
    definition:
      "A defined point after which a secret should no longer be accepted without renewal or replacement.",
  },
  {
    term: "Redaction",
    definition:
      "Preventing sensitive secret values from appearing in logs, errors, dashboards, reports, or user-visible output.",
  },
  {
    term: "Secret sprawl",
    definition:
      "The uncontrolled copying or spread of secrets across repositories, files, systems, people, or environments.",
  },
  {
    term: "Workload identity",
    definition:
      "An identity assigned to a service or workload so it can authenticate without unnecessary shared human credentials.",
  },
  {
    term: "Break-glass access",
    definition:
      "A tightly governed emergency access path with explicit approval, monitoring, review, and limited use.",
  },
];

const governancePrinciples = [
  {
    title: "Avoid secrets when possible",
    detail:
      "If an approved workload identity or platform-native trust mechanism can meet the need without a long-lived secret, reducing secret count can reduce lifecycle burden.",
  },
  {
    title: "Store values in approved systems",
    detail:
      "Source code, shared documents, tickets, chat messages, screenshots, and ordinary configuration files are poor places for secret values.",
  },
  {
    title: "Separate environments",
    detail:
      "Development, test, staging, and production should not casually share the same secret values or access patterns.",
  },
  {
    title: "Limit access and scope",
    detail:
      "A secret should only reach the service, identity, environment, and resource needed for its purpose.",
  },
  {
    title: "Rotate and retire",
    detail:
      "Secrets should have a lifecycle. Teams need owners, review triggers, rotation procedures, validation, rollback, and evidence that old access is closed.",
  },
  {
    title: "Keep values out of evidence",
    detail:
      "Security reviews should usually rely on metadata, status, policy, ownership, and validation evidence rather than exposing actual secret values.",
  },
];

const records = [
  {
    id: "SEC-01",
    type: "Service credential",
    purpose: "Application service to internal record API",
    owner: "Application Platform Owner",
    environment: "Production",
    storage: "Approved managed secret store",
    scope: "Record API service identity only",
    rotation: "Every 90 days or on approved risk trigger",
    status: "Confirmed",
    concern: "None in supplied metadata",
    next: "Continue source-health and rotation review.",
  },
  {
    id: "SEC-02",
    type: "API token",
    purpose: "Scheduling integration",
    owner: "Integration Owner",
    environment: "Production",
    storage: "Approved managed secret store",
    scope: "Scheduling API minimum approved operations",
    rotation: "Every 60 days",
    status: "Conditional",
    concern: "Supplier dependency change planned next quarter",
    next: "Re-review scope and rotation before supplier migration.",
  },
  {
    id: "SEC-03",
    type: "Database credential",
    purpose: "Reporting job to reporting database",
    owner: "Unknown",
    environment: "Production",
    storage: "Approved store listed",
    scope: "Read-only reporting role",
    rotation: "No current owner or review date",
    status: "Unknown",
    concern: "Ownership and rotation governance incomplete",
    next: "Assign owner and rotation schedule before Confirmed status.",
  },
  {
    id: "SEC-04",
    type: "Webhook secret reference",
    purpose: "Notification provider callbacks",
    owner: "Notification Service Owner",
    environment: "Staging",
    storage: "Approved managed secret store",
    scope: "Staging notification callback only",
    rotation: "Every 90 days",
    status: "Confirmed",
    concern: "No production sharing allowed",
    next: "Keep staging and production metadata separate.",
  },
  {
    id: "SEC-05",
    type: "Signing key reference",
    purpose: "Approved release artifact signing",
    owner: "Release Engineering Owner",
    environment: "Build / Release",
    storage: "Protected signing service",
    scope: "Approved release pipeline only",
    rotation: "Policy-based lifecycle",
    status: "Confirmed",
    concern: "Emergency access path requires quarterly review",
    next: "Review emergency access evidence and approval logs.",
  },
  {
    id: "SEC-06",
    type: "Legacy shared credential",
    purpose: "Old maintenance integration",
    owner: "Legacy Service Owner",
    environment: "Production",
    storage: "Migration pending",
    scope: "Two legacy services",
    rotation: "Manual and overdue",
    status: "Blocked",
    concern: "Shared access and overdue migration increase lifecycle risk",
    next: "Replace with separate approved service identities and retire shared credential.",
  },
];

const commonMistakes = [
  {
    mistake: "Putting secrets in source code",
    why:
      "Repositories are designed for sharing and history, which can spread sensitive values far beyond the intended workload.",
    better:
      "Keep values in approved managed storage and reference them through approved runtime mechanisms.",
  },
  {
    mistake: "Sharing one secret across environments",
    why:
      "A lower-trust environment can become linked to production access and make ownership or incident scope harder to understand.",
    better:
      "Use environment-specific access and governance.",
  },
  {
    mistake: "Long-lived secrets with no review",
    why:
      "Access can remain active after business purpose, ownership, or dependency conditions change.",
    better:
      "Define rotation, expiration, review triggers, and retirement evidence.",
  },
  {
    mistake: "No owner",
    why:
      "Nobody is accountable for rotation, scope, incident response, or retirement.",
    better:
      "Assign a named role or team and an escalation path.",
  },
  {
    mistake: "Logging secret values",
    why:
      "Logs often have broader access and longer retention than the secret was intended to have.",
    better:
      "Log metadata and status, not secret values.",
  },
  {
    mistake: "Copying secrets for convenience",
    why:
      "Each copy creates another location to govern, rotate, revoke, and audit.",
    better:
      "Prefer centralized managed access and workload identity where appropriate.",
  },
  {
    mistake: "Rotating without dependency planning",
    why:
      "A secret change can break services when consumers, compatibility windows, and rollback are not understood.",
    better:
      "Map dependencies, validate the new path, retire the old value, and preserve rollback where appropriate.",
  },
  {
    mistake: "Retiring a service but leaving credentials active",
    why:
      "Unused credentials can survive the system they once supported.",
    better:
      "Treat secret revocation and retirement as required end-of-life evidence.",
  },
];

const reviewQuestions = [
  "What business purpose requires this secret?",
  "Could a safer identity or platform mechanism remove the need for a long-lived secret?",
  "Who owns the secret metadata and lifecycle?",
  "Which workload or person is allowed to use it?",
  "Which environment does it belong to?",
  "What is the minimum permission or scope needed?",
  "Where is the value stored?",
  "How is access delivered without unnecessary copying?",
  "What is the rotation or expiration expectation?",
  "What dependencies must be updated during rotation?",
  "What evidence proves the old secret is retired?",
  "How are policy changes and stale rotation monitored?",
  "Which logs or dashboards must never reveal the secret value?",
  "What future changes should trigger re-review?",
];

const dashboardMetrics = [
  {
    label: "Tracked secret records",
    value: "38",
    note: "Metadata-only inventory; no values displayed",
  },
  {
    label: "Owned records",
    value: "36 / 38",
    note: "Two production records need ownership remediation",
  },
  {
    label: "Rotation compliance",
    value: "92%",
    note: "Three records are overdue or lack current review dates",
  },
  {
    label: "Environment separation",
    value: "97%",
    note: "One legacy shared credential spans two services",
  },
];

const logs = [
  "[08:40] SEC-01 owner=Application Platform status=CONFIRMED rotation=current",
  "[09:05] SEC-02 supplier-change trigger opened for scheduling integration",
  "[09:22] SEC-03 owner=UNKNOWN rotation-review=missing",
  "[09:45] SEC-04 staging-only scope confirmed; production sharing=NOT ALLOWED",
  "[10:10] SEC-05 emergency-access review due this quarter",
  "[10:31] SEC-06 shared credential rotation overdue -> status=BLOCKED",
  "[11:02] REDACTION review confirms secret values absent from approved audit examples",
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of secrets management?",
    choices: [
      "Choosing a difficult password once.",
      "Managing the purpose, owner, storage, access, scope, rotation, monitoring, revocation, and retirement of sensitive credentials and keys across their lifecycle.",
      "Keeping all credentials in one shared document.",
      "Avoiding all authentication between services.",
    ],
    answer: 1,
    explanation:
      "Secrets management is a lifecycle and governance discipline, not only a storage choice.",
  },
  {
    question:
      "Why should security reviews use secret metadata instead of secret values whenever possible?",
    choices: [
      "Because values are not important to the software.",
      "Because metadata can support governance review without unnecessarily exposing the sensitive value.",
      "Because secret values should be emailed to reviewers separately.",
      "Because logs should contain full secrets for troubleshooting.",
    ],
    answer: 1,
    explanation:
      "Owner, purpose, scope, environment, rotation, and status usually support governance review without exposing the secret itself.",
  },
  {
    question:
      "Which situation is the strongest example of environment-separation risk?",
    choices: [
      "Development and production have separate secret records.",
      "A single shared credential is used by test and production services.",
      "A production secret has an owner.",
      "A staging token has a rotation date.",
    ],
    answer: 1,
    explanation:
      "Sharing the same credential across environments weakens isolation and complicates lifecycle governance.",
  },
  {
    question:
      "A production database credential has no owner or rotation date. What is the strongest status?",
    choices: [
      "Confirmed because it currently works.",
      "Unknown or incomplete until ownership and lifecycle governance are established.",
      "Safe because the database is internal.",
      "Not applicable.",
    ],
    answer: 1,
    explanation:
      "Missing ownership and lifecycle evidence means the governance requirement is incomplete.",
  },
  {
    question:
      "Why should secret values be excluded from logs?",
    choices: [
      "Logs cannot store text.",
      "Logs may have broader access and retention, creating additional exposure if secret values are recorded.",
      "Secrets are never used by software.",
      "Logging is always unnecessary.",
    ],
    answer: 1,
    explanation:
      "Logs should contain useful metadata and security evidence without recording secret values.",
  },
  {
    question:
      "What is an important part of safe secret rotation?",
    choices: [
      "Replace the secret without checking dependencies.",
      "Map dependent services, validate the replacement, maintain rollback where appropriate, and retire the old value.",
      "Post the new value in team chat.",
      "Keep old and new values active forever.",
    ],
    answer: 1,
    explanation:
      "Rotation is a coordinated lifecycle change involving dependencies, validation, rollback, and retirement.",
  },
  {
    question:
      "A service is permanently retired. What should happen to its secrets?",
    choices: [
      "Leave them active in case they are useful later.",
      "Revoke or retire them according to the approved process and preserve evidence that dependent access was removed.",
      "Copy them into documentation.",
      "Move them into source code.",
    ],
    answer: 1,
    explanation:
      "Retirement should remove unnecessary access and close the secret lifecycle.",
  },
];

const checklistItems = [
  "Every secret record has a clear business purpose.",
  "The team has considered whether a workload identity or safer design can eliminate the need for a long-lived secret.",
  "Secret values are stored only in approved managed mechanisms.",
  "Secret values are not embedded in source code, tickets, chat, dashboards, or ordinary documentation.",
  "Each secret has an accountable owner.",
  "Environment separation is explicit.",
  "Access scope follows least privilege.",
  "Rotation, expiration, revocation, and retirement expectations are defined.",
  "Dependencies are mapped before rotation.",
  "Logging and error handling redact secret values.",
  "Monitoring tracks governance state, access changes, stale rotation, and source health.",
  "Exceptions are time-bounded, owned, and reviewed.",
  "Retired services have corresponding secret-retirement evidence.",
  "Portfolio artifacts use metadata only and contain no real secret values.",
];

const takeaways = [
  "Secrets management is a lifecycle discipline covering creation, storage, distribution, use, monitoring, rotation, revocation, and retirement.",
  "Metadata can support strong governance review without exposing secret values.",
  "Ownership and purpose are foundational; an unowned secret is difficult to rotate, revoke, or retire safely.",
  "Environment separation and least privilege reduce the scope of a secret's impact.",
  "Rotation requires dependency planning, validation, rollback, and proof that old access is closed.",
  "Logs, errors, dashboards, and portfolio artifacts should never expose secret values.",
  "Shared and long-lived credentials increase lifecycle complexity and should be replaced where safer identity patterns are available.",
  "Secret retirement must be part of software and service retirement.",
  "A strong secrets governance model connects requirements, threat modeling, code review, deployment, monitoring, and maintenance.",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the record Unknown, assign an accountable owner, define rotation and retirement expectations, and collect the missing governance evidence before release.",
    outcome:
      "Best. The lifecycle gap remains visible and gets routed to the right owner.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because the credential currently works.",
    outcome:
      "Risky. Functional success does not replace ownership or lifecycle governance.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Copy the credential into a shared document so more people can manage it.",
    outcome:
      "Risky. This increases secret sprawl and exposure.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Plan a coordinated rotation with dependency mapping, validation, rollback, monitoring, and explicit retirement of the old credential.",
    outcome:
      "Best. Rotation becomes an evidence-based change rather than an unplanned break/fix event.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Change the secret immediately without telling dependent service owners.",
    outcome:
      "Risky. Unknown dependencies can fail and rollback may be unclear.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Leave the old credential active forever after introducing the new one.",
    outcome:
      "Caution. Compatibility may be useful briefly, but indefinite dual access defeats retirement.",
    tone: "caution" as const,
  },
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
        Module A11
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

export default function SecretsManagementConceptsPage() {
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
              A11.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secrets Management Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Software often depends on sensitive credentials, keys, tokens, and
            configuration to authenticate services and protect important
            operations. Secure architecture must govern those secrets across
            their entire lifecycle â€” without exposing the values themselves.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses metadata-only fictional records. You will work with
            ownership, purpose, scope, environment, storage class, rotation,
            status, dependencies, and retirement evidence. No real passwords,
            tokens, keys, cookies, or credentials are used or requested.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A11: Secure Software Architecture"
          lessonTitle="Secrets Management Concepts"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.4 Entry Readiness"
          items={[
            "I can connect security requirements to software design from A11.2.",
            "I understand how threat models expose assumptions, dependencies, and change triggers from A11.3.",
            "I understand that secret values themselves are sensitive and should not appear in school exercises or portfolio artifacts.",
            "I am prepared to use metadata-only fictional records throughout this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Secret Is More Than a Value"
        >
          <p className="leading-8">
            Imagine a fictional application needs a credential to connect to a
            reporting database. The team may know the credential exists, but
            secure architecture needs many more answers.
          </p>

          <p className="mt-4 leading-8">
            Who owns it? Which service is allowed to use it? Which environment
            does it belong to? What permissions does it carry? Where is it
            stored? When is it rotated? Which services depend on it? How would
            the team know rotation failed? What happens when the reporting job
            is retired?
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The value is secret. The governance should be visible.
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
          eyebrow="Why It Matters"
          title="Secrets Connect Architecture, Identity, Deployment, and Operations"
        >
          <p className="leading-8">
            Secrets are often treated as a small implementation detail, but
            their lifecycle touches architecture, identity, configuration,
            dependencies, deployment, logging, monitoring, incident response,
            and retirement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Architecture",
                text:
                  "Which services need trust relationships, and can a safer workload identity reduce long-lived secret use?",
              },
              {
                title: "Deployment",
                text:
                  "How does the approved workload receive access without copying secret values into code or ordinary configuration?",
              },
              {
                title: "Operations",
                text:
                  "Who owns rotation, monitoring, exceptions, revocation, and retirement after release?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Framework"
          title="Eight Stages of the Secret Lifecycle"
        >
          <p className="leading-8">
            A secret should have a beginning, controlled use, review points, and
            a clear end. A lifecycle model helps prevent forgotten credentials,
            uncontrolled copies, unclear ownership, and indefinite access.
          </p>

          <div className="mt-6 grid gap-5">
            {lifecycle.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[100px_1fr]">
                  <span className="text-4xl font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.stage}
                    </h3>
                    <p className="mt-2 font-semibold leading-7 text-cyan-100">
                      {item.question}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.securityWork}
                    </p>
                    <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                      Evidence: {item.evidence}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Secret Categories"
          title="What Software Teams Commonly Govern"
        >
          <p className="leading-8">
            The exact technology can differ, but the governance questions remain
            similar. In this lesson, we only discuss categories and metadata.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {secretTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Governance: {item.governance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Secrets Management Terms"
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
          eyebrow="Design Principles"
          title="Six Principles for Safer Secret Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {governancePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Secrets Governance Dashboard"
          subtitle="Fictional metadata only â€” no secret values"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Unowned Production Secret Record"
          severity="High"
          time="09:22"
          source="Fictional Secrets Governance Review"
          details="SEC-03 is a production database credential record with approved storage and read-only scope, but the owner and current rotation review are missing."
          recommendation="Keep status Unknown, assign an accountable owner, define the rotation schedule, and collect governance evidence before release approval."
        />

        <Section
          eyebrow="Fictional Secret Register"
          title="Metadata-Only Review"
        >
          <p className="leading-8">
            A security reviewer usually does not need to see the actual secret
            value. The register below shows how purpose, ownership, environment,
            storage, scope, rotation, and status can support governance review.
          </p>

          <div className="mt-6 grid gap-5">
            {records.map((item) => (
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

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Owner", item.owner],
                    ["Environment", item.environment],
                    ["Storage", item.storage],
                    ["Scope", item.scope],
                    ["Rotation", item.rotation],
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

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Concern
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.concern}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Next action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Secret Governance Log"
          logs={logs}
        />

        <Section
          eyebrow="Review Questions"
          title="Fourteen Questions for Every Secret Record"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Unowned Credential"
          question="What is the strongest conclusion about SEC-03?"
          evidence={[
            "The record is for a production reporting database credential.",
            "Approved managed storage is listed.",
            "Read-only scope is documented.",
            "Owner is Unknown.",
            "No current rotation review date is recorded.",
          ]}
          options={[
            "The secret is fully governed because storage and scope are documented.",
            "The record should remain Unknown or incomplete until ownership and rotation governance are established.",
            "The secret should be copied into a shared document so more people can manage it.",
            "The record can be ignored because the permission is read-only.",
          ]}
          bestAnswer={1}
          explanation="Storage and scope are useful controls, but lifecycle governance is incomplete without accountable ownership and a current rotation/review expectation."
        />

        <Section
          eyebrow="Environment Separation"
          title="Development, Test, and Production Should Not Blur Together"
        >
          <p className="leading-8">
            Different environments have different users, data, controls, and
            failure expectations. Sharing the same secret across environments
            can make a lower-trust environment part of the production trust
            model.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Question</th>
                  <th className="border-b border-slate-700 p-4">Weak pattern</th>
                  <th className="border-b border-slate-700 p-4">Stronger pattern</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Values",
                    "One shared credential for test and production",
                    "Environment-specific secret records and access",
                  ],
                  [
                    "Ownership",
                    "Everyone on the team can use the production secret",
                    "Only approved workload identities and accountable owners have access",
                  ],
                  [
                    "Storage",
                    "Local files or copied environment variables in documentation",
                    "Approved environment-specific managed storage",
                  ],
                  [
                    "Monitoring",
                    "No distinction between environments",
                    "Environment-aware governance, access, and source-health monitoring",
                  ],
                  [
                    "Retirement",
                    "Test credentials remain active indefinitely",
                    "Unused environment credentials are revoked and closed",
                  ],
                ].map(([question, weak, strong]) => (
                  <tr key={question} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-white">
                      {question}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-red-100">
                      {weak}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-emerald-100">
                      {strong}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Rotation"
          title="Rotation Is a Change Process, Not a Button"
        >
          <p className="leading-8">
            Replacing a secret can affect every service that depends on it.
            Strong teams understand dependencies, plan compatibility, validate
            the replacement, monitor the change, preserve rollback where
            appropriate, and confirm old access is retired.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Identify the secret owner and dependent services.",
              "Confirm the new secret or identity path is approved.",
              "Update the intended consumers only.",
              "Validate expected service behavior.",
              "Monitor errors and source health during the change.",
              "Keep rollback bounded and time-limited.",
              "Revoke or retire the old secret after successful validation.",
              "Update the metadata record and close the rotation evidence.",
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

        <Section
          eyebrow="Redaction"
          title="Logs Need Evidence â€” Not Secret Values"
        >
          <p className="leading-8">
            Logs should help defenders understand who or what requested access,
            which secret record or service was involved, whether access
            succeeded, when the event happened, and which policy applied.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Useful metadata",
                items:
                  "Secret record ID, service identity, environment, operation type, result, timestamp, policy decision, correlation identifier.",
              },
              {
                title: "Values to avoid",
                items:
                  "Secret value, token contents, passwords, private keys, session cookies, recovery codes, or unnecessary sensitive payloads.",
              },
              {
                title: "Access monitoring",
                items:
                  "Unexpected identity use, denied access, policy changes, stale rotation, exception use, or unusual ownership changes.",
              },
              {
                title: "Source health",
                items:
                  "Whether the audit source is delivering current events, parsing correctly, and meeting retention expectations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.items}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Mistakes"
          title="Eight Ways Secret Governance Breaks Down"
        >
          <div className="grid gap-5">
            {commonMistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.mistake}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.why}
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
          title="Scenario Decision Lab 1 â€” Missing Owner"
          scenario="A production database credential is stored in an approved secret system and has read-only scope. During release review, the team discovers that no owner or current rotation review is recorded."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Legacy Shared Credential Rotation"
          scenario="Two legacy services still use the same fictional shared credential. The team plans to replace it as part of a migration, but several dependent workflows have not yet been documented."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Metadata-Only Secret Governance Register"
        >
          <p className="leading-8">
            Use only fictional records. Do not enter any real password, token,
            key, cookie, credential, hostname, internal route, or production
            configuration.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least eight fictional secret records.",
              "Give each record a stable ID.",
              "Record type and business purpose.",
              "Assign an owner.",
              "Record environment and approved storage class.",
              "Define the minimum service or workload scope.",
              "Define rotation or expiration expectations.",
              "List dependent fictional services.",
              "Record monitoring and redaction expectations.",
              "Assign status: Confirmed, Conditional, Unknown, Blocked, or Retired.",
              "Add a next action for non-Confirmed records.",
              "Define change triggers and retirement conditions.",
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Shared Credential"
          question="What is the strongest architectural response to SEC-06?"
          evidence={[
            "SEC-06 is shared by two legacy services.",
            "Rotation is overdue.",
            "The migration plan intends to replace shared access with separate service identities.",
            "Some dependent workflows are not yet documented.",
            "The current status is Blocked.",
          ]}
          options={[
            "Rotate immediately without understanding dependencies.",
            "Keep the secret indefinitely because migration is difficult.",
            "Document dependencies, move toward separate approved service identities, validate the migration, and retire the shared credential when the new design is confirmed.",
            "Publish the credential internally so teams can troubleshoot faster.",
          ]}
          bestAnswer={2}
          explanation="The strongest response reduces shared access while respecting dependency, validation, rollback, and retirement requirements."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Secretless-or-Minimized Trust Pattern"
        >
          <p className="leading-8">
            Review a fictional internal service-to-service workflow and ask
            whether a long-lived shared secret is necessary at all.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Which workload needs to authenticate?",
              "Which service is the destination?",
              "What business purpose requires the trust relationship?",
              "Can an approved workload identity or platform-native mechanism reduce secret use?",
              "Which environment is in scope?",
              "What is the minimum permission needed?",
              "Who owns the trust relationship?",
              "What evidence validates the identity path?",
              "What logging should exist without exposing values?",
              "What happens when the workload is retired?",
              "What change triggers reopen the design?",
              "What residual risk remains?",
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
            The challenge is not to eliminate every secret. It is to minimize
            unnecessary long-lived secrets and make every remaining trust
            relationship governable.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.4 Mini Quiz: Secrets Management Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Secrets Governance Model"
          prompt="Create the fourth artifact for your A11 Secure Software Design Assessment: a metadata-only secrets governance model for a fictional application. Include at least eight secret records with ID, type, purpose, owner, environment, storage class, scope, rotation or expiration, dependencies, monitoring, status, next action, change trigger, and retirement condition. Do not include any secret values."
          tips={[
            "Use fictional metadata only.",
            "Include at least one Unknown record with missing ownership.",
            "Include at least one Blocked legacy shared-credential record.",
            "Include one environment-separation example.",
            "Include one rotation workflow with dependencies, validation, rollback, and retirement.",
            "Explain how the design minimizes secret sprawl and protects logs from secret values.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.5?"
        >
          <p className="leading-8">
            A11.5 moves from secret governance to dependency and software supply
            chain risk. Before continuing, make sure you can review secrets
            without ever needing to reveal the actual values.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish a secret value from secret metadata.",
              "I can explain why ownership, environment, scope, rotation, monitoring, and retirement are part of secret security.",
              "I can identify secret-sprawl and shared-credential risks conceptually.",
              "I can plan a rotation using dependency, validation, rollback, and retirement evidence.",
              "I can keep secret values out of logs, reports, dashboards, labs, and portfolio artifacts.",
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
          title="How to Make the Secrets Model Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use metadata only",
                detail:
                  "Never include real values. Show ID, purpose, owner, environment, scope, lifecycle, and status.",
              },
              {
                title: "Show environment separation",
                detail:
                  "Make clear which records belong to development, staging, production, build, or integration workflows.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every record should have an accountable owner or remain visibly Unknown.",
              },
              {
                title: "Show rotation dependencies",
                detail:
                  "Document the fictional services that must be updated or validated during rotation.",
              },
              {
                title: "Show redaction rules",
                detail:
                  "Explain which metadata may appear in logs and which secret values must never appear.",
              },
              {
                title: "Show exceptions",
                detail:
                  "If a legacy shared secret remains, make the exception time-bounded, owned, monitored, and tied to migration.",
              },
              {
                title: "Show retirement",
                detail:
                  "Record how service shutdown, supplier change, or architecture replacement closes the secret lifecycle.",
              },
              {
                title: "Connect to earlier A11 work",
                detail:
                  "Link secret records to requirements and threat-model concerns from A11.2 and A11.3.",
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
            Never use real secret values in CyberShield labs
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not request or authorize access to real passwords,
            tokens, keys, cookies, recovery codes, credentials, repositories,
            applications, APIs, devices, or networks. Use metadata-only
            fictional records and approved design evidence.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.4 Secrets Management Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a metadata-first secrets governance model covering
            ownership, scope, storage, environment separation, redaction,
            rotation, revocation, monitoring, and retirement. Next, A11.5
            expands software risk to Dependency and Supply Chain Risk Concepts.
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
