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

const modulePath = "/high-school/advanced/advanced-capstone";
const previousLesson = `${modulePath}/incident-response-phase`;
const nextLesson = `${modulePath}/risk-and-privacy-review-phase`;

const objectives = [
  "Explain how cloud shared responsibility separates provider capability from customer-controlled identity, configuration, data, monitoring, recovery, and governance decisions.",
  "Review workforce, privileged, federated, workload, monitoring, and recovery identities by purpose, owner, privilege, approval, lifecycle, evidence, and review trigger.",
  "Distinguish intended access design from current authorization evidence, successful authentication from permitted action, and service availability from governed cloud security.",
  "Evaluate cloud control evidence across access, configuration, logging, data protection, recovery, exceptions, ownership, and post-incident follow-up.",
  "Create a Cloud and Identity Governance Review that carries clear findings, evidence gaps, owners, residual questions, and handoffs into A20.7 risk and privacy review.",
];

const sharedResponsibilityAreas = [
  {
    area: "Underlying cloud platform",
    provider:
      "Operates the fictional physical facilities, foundational infrastructure, and managed-service platform capabilities described by the case.",
    customer:
      "Chooses how those capabilities are configured, which services are used, and how access, data, monitoring, and governance are managed.",
    northbridge:
      "Northbridge can rely on fictional managed-service capabilities while still owning role design, data use, configuration review, monitoring, and recovery decisions.",
  },
  {
    area: "Identity and access",
    provider:
      "Provides authentication, role, token, federation, and audit features in the fictional service model.",
    customer:
      "Defines who or what receives access, why it is needed, how much privilege is allowed, who approves it, and when it changes or ends.",
    northbridge:
      "The capstone must review both privileged human access and workload identities rather than assuming the identity platform makes access correct automatically.",
  },
  {
    area: "Data protection",
    provider:
      "Provides fictional storage, encryption, availability, and managed-service security capabilities.",
    customer:
      "Classifies data, limits access, chooses retention, defines purpose, reviews sharing, and validates recovery requirements.",
    northbridge:
      "Protected student-service data remains a Northbridge governance responsibility even when stored in a managed service.",
  },
  {
    area: "Configuration",
    provider:
      "Provides supported configuration controls and service defaults in the fictional environment.",
    customer:
      "Defines approved configuration, change governance, exceptions, validation, ownership, and drift review.",
    northbridge:
      "The 09:11 privileged event cannot be classified only by the fact that a cloud setting changed; task-level purpose and approval still matter.",
  },
  {
    area: "Logging and monitoring",
    provider:
      "Provides fictional audit and service-health signals.",
    customer:
      "Chooses which evidence is enabled, collected, retained, reviewed, protected, and connected to source-health monitoring.",
    northbridge:
      "Collector delay remains a customer-side decision-quality issue even though the underlying services may continue producing records.",
  },
  {
    area: "Recovery",
    provider:
      "Provides fictional backup, replication, or recovery capabilities available in the service model.",
    customer:
      "Defines recovery objectives, dependencies, identities, runbooks, test cadence, validation, and risk ownership.",
    northbridge:
      "Current backup status does not automatically prove complete restoration readiness.",
  },
];

const identityTypes = [
  {
    type: "Standard workforce identity",
    purpose:
      "Supports ordinary staff access to approved application functions.",
    risk:
      "Access can become stale when job responsibilities change or when role scope is broader than business need.",
    evidence:
      "Role purpose, manager approval, access review, lifecycle event, authentication record.",
    governance:
      "Least privilege, periodic review, timely change or removal, and documented owner.",
  },
  {
    type: "Privileged administrator",
    purpose:
      "Performs limited administrative actions that can affect identity, configuration, service state, or governance.",
    risk:
      "High authority creates greater consequence if access is stale, overly broad, unapproved, or difficult to trace.",
    evidence:
      "Separate privileged role, approval, task scope, activation time, event record, owner, review, revocation.",
    governance:
      "Bounded privilege, strong approval, traceability, time limits where appropriate, and post-task confirmation.",
  },
  {
    type: "Federated identity",
    purpose:
      "Allows a fictional external or connected identity source to establish a trusted identity relationship.",
    risk:
      "Trust depends on both sides maintaining correct lifecycle, authentication, claims, ownership, and review.",
    evidence:
      "Federation configuration summary, trust owner, claim mapping, lifecycle process, review record.",
    governance:
      "Defined trust purpose, limited claims, accountable owners, monitoring, and periodic review.",
  },
  {
    type: "Portal workload identity",
    purpose:
      "Allows the fictional portal application to access approved back-end services on behalf of application workflows.",
    risk:
      "Broad service permissions can affect more data or services than the application actually requires.",
    evidence:
      "Workload purpose, allowed resources, role mapping, application architecture, audit records, review date.",
    governance:
      "Scoped destinations, narrow permissions, ownership, rotation or lifecycle controls, and access review.",
  },
  {
    type: "Worker workload identity",
    purpose:
      "Allows the background worker to process jobs and reach queue and protected-data services.",
    risk:
      "This identity connects availability, data, and job-integrity concerns across several dependencies.",
    evidence:
      "Worker purpose, queue relationship, data access mapping, role scope, change history, owner review.",
    governance:
      "Purpose-bound access, explicit owner, dependency-aware review, and removal of unused permissions.",
  },
  {
    type: "Monitoring service identity",
    purpose:
      "Allows monitoring components to receive or collect permitted security and service evidence.",
    risk:
      "Excessive collection or access can create privacy, retention, and unnecessary exposure concerns.",
    evidence:
      "Source list, collection purpose, identity scope, retention expectation, access review, source-health record.",
    governance:
      "Purpose limitation, minimal collection rights, protected evidence access, retention review, and health monitoring.",
  },
  {
    type: "Recovery operator identity",
    purpose:
      "Allows approved recovery actions during restoration or resilience exercises.",
    risk:
      "Recovery access is highly sensitive because it may reach backups, configuration, protected data, or restoration controls.",
    evidence:
      "Recovery role purpose, approval, activation, exercise or incident record, completion review, revocation.",
    governance:
      "Restricted activation, separation of duties where appropriate, evidence preservation, review, and post-use closure.",
  },
];

const accessReviewDimensions = [
  {
    dimension: "Purpose",
    question:
      "Why does this person or workload need access, and which business or technical outcome does the access support?",
    weakSignal:
      "Access exists because it was historically assigned but no current purpose is documented.",
  },
  {
    dimension: "Scope",
    question:
      "Which resources, actions, environments, data, and administrative capabilities are actually required?",
    weakSignal:
      "The role grants broad access to resources that the workload or job function does not use.",
  },
  {
    dimension: "Owner",
    question:
      "Who is accountable for confirming that the access remains necessary and appropriate?",
    weakSignal:
      "The role exists but no service, identity, or business owner accepts responsibility for review.",
  },
  {
    dimension: "Approval",
    question:
      "What authorized process granted or activated the access?",
    weakSignal:
      "Authentication succeeds but no evidence explains why the privilege was approved.",
  },
  {
    dimension: "Lifecycle",
    question:
      "What event should create, change, suspend, expire, or remove the access?",
    weakSignal:
      "The access persists after role, service, project, or recovery need changes.",
  },
  {
    dimension: "Evidence",
    question:
      "What records show current role assignment, action history, review, and decision context?",
    weakSignal:
      "A design document says access should be narrow, but current authorization evidence is missing.",
  },
  {
    dimension: "Review trigger",
    question:
      "What event should cause immediate re-evaluation outside the normal review cycle?",
    weakSignal:
      "Major service or ownership changes occur without triggering an access review.",
  },
  {
    dimension: "Residual risk",
    question:
      "What meaningful exposure remains even when the current access is considered necessary?",
    weakSignal:
      "A highly privileged role is accepted with no documented rationale, compensating control, or owner decision.",
  },
];

const identityEvidence = [
  {
    id: "ID-EV-01",
    subject:
      "Privileged administrator role",
    evidence:
      "Synthetic role inventory confirms a named privileged role with an approved maintenance purpose.",
    supports:
      "The role exists and has a documented purpose.",
    limitation:
      "Does not prove the exact 09:11 action was included in the approved task.",
    status:
      "Partially validated",
  },
  {
    id: "ID-EV-02",
    subject:
      "09:11 privileged action",
    evidence:
      "Identity and application records agree that the fictional action occurred.",
    supports:
      "The event itself is confirmed.",
    limitation:
      "Does not prove intent, exact authorization, or direct service causation.",
    status:
      "Event confirmed; meaning unresolved",
  },
  {
    id: "ID-EV-03",
    subject:
      "Worker workload identity",
    evidence:
      "Architecture shows the worker requires queue and protected-data relationships.",
    supports:
      "The workload identity has a legitimate business purpose.",
    limitation:
      "Current exact authorization scope is not fully represented in the briefing evidence.",
    status:
      "Review required",
  },
  {
    id: "ID-EV-04",
    subject:
      "Portal workload identity",
    evidence:
      "Application architecture and role mapping identify approved back-end service relationships.",
    supports:
      "Expected application-to-service access can be documented.",
    limitation:
      "Current authorization still needs periodic review and change-triggered validation.",
    status:
      "Strong design evidence",
  },
  {
    id: "ID-EV-05",
    subject:
      "Monitoring service identity",
    evidence:
      "Source inventory identifies the fictional monitoring services and collection purpose.",
    supports:
      "The monitoring identity has a defined operational purpose.",
    limitation:
      "A20.7 still needs to review whether all collected fields and retention remain proportionate.",
    status:
      "Security evidence strong; privacy review pending",
  },
  {
    id: "ID-EV-06",
    subject:
      "Recovery operator role",
    evidence:
      "Recovery records identify an approved fictional recovery role and owner.",
    supports:
      "Recovery access is governed by a named role and process.",
    limitation:
      "Older full-restoration evidence means complete recovery-readiness confidence remains bounded.",
    status:
      "Access governed; recovery evidence partly stale",
  },
];

const cloudControlAreas = [
  {
    control: "Identity governance",
    expected:
      "Human and workload access has purpose, owner, approval, scope, lifecycle, and review.",
    evidence:
      "Role inventory, approval records, workload mappings, review records, synthetic audit events.",
    finding:
      "Privileged role design is strong, while task-level mapping for the 09:11 action remains unresolved.",
  },
  {
    control: "Configuration governance",
    expected:
      "Changes are approved, scoped, versioned, validated, reversible where appropriate, and linked to owners.",
    evidence:
      "Change record, configuration summary, owner confirmation, post-change validation.",
    finding:
      "Approved maintenance exists, but specific action-to-task mapping still needs evidence.",
  },
  {
    control: "Data protection",
    expected:
      "Protected data has limited access, defined purpose, encryption, retention, classification, and recovery expectations.",
    evidence:
      "Data classification, workload access mapping, policy, recovery records, privacy review inputs.",
    finding:
      "Security controls are described, while A20.7 will examine data-purpose and minimization decisions.",
  },
  {
    control: "Monitoring",
    expected:
      "Important cloud and identity events are observable, source health is monitored, and evidence is protected.",
    evidence:
      "Synthetic audit records, collector health, source inventory, retention and access notes.",
    finding:
      "Collector delay demonstrated why health evidence must remain part of security interpretation.",
  },
  {
    control: "Recovery",
    expected:
      "Backups, restoration, dependencies, identities, configuration, and service validation are reviewed together.",
    evidence:
      "Backup status, recovery-role evidence, restoration record, service validation, risk acceptance.",
    finding:
      "Current backups exist, while full restoration evidence is older than the preferred review window.",
  },
  {
    control: "Exception governance",
    expected:
      "Temporary deviations have reason, scope, owner, risk, expiration, compensating controls, and review.",
    evidence:
      "Exception record, approval, expiration date, compensating control, closure evidence.",
    finding:
      "No major unresolved cloud exception is confirmed yet; later risk review should preserve any temporary monitoring or access exception.",
  },
];

const federationQuestions = [
  {
    question:
      "What is the trust purpose?",
    explanation:
      "A federation relationship should exist for a documented business reason rather than convenience alone.",
  },
  {
    question:
      "Which identity information is trusted?",
    explanation:
      "Only the claims or attributes needed for the intended access decision should be relied on.",
  },
  {
    question:
      "Who owns each side?",
    explanation:
      "Federation needs accountable owners for the identity source and the relying service.",
  },
  {
    question:
      "How does lifecycle propagate?",
    explanation:
      "Role changes, suspension, termination, or service changes should affect downstream access appropriately.",
  },
  {
    question:
      "How is trust reviewed?",
    explanation:
      "Configuration, claims, ownership, business need, and exception state should be reviewed periodically and after material change.",
  },
  {
    question:
      "What happens when federation is degraded?",
    explanation:
      "The service should have defined safe behavior when trusted identity evidence is unavailable or delayed.",
  },
];

const findings = [
  {
    id: "CLOUD-ID-NB-01",
    finding:
      "The 09:11 privileged action is confirmed, but exact task-level authorization remains unresolved.",
    evidence:
      "Two synthetic event sources agree on the action; maintenance approval exists; summarized task evidence is incomplete.",
    impact:
      "The capstone cannot yet classify the event as expected maintenance or unauthorized activity.",
    owner:
      "Fictional Identity Governance Owner",
    handoff:
      "A20.7 should treat this as an evidence and governance gap, not as a confirmed breach.",
  },
  {
    id: "CLOUD-ID-NB-02",
    finding:
      "Worker workload identity has a valid architectural purpose but incomplete current scope evidence.",
    evidence:
      "Architecture requires queue and protected-data access; current exact authorization map is not fully supplied.",
    impact:
      "Risk cannot be rated confidently until necessary access is compared with current scope.",
    owner:
      "Fictional Cloud Platform Owner",
    handoff:
      "A20.7 should assess residual risk once current synthetic role scope is defined.",
  },
  {
    id: "CLOUD-ID-NB-03",
    finding:
      "Monitoring identity purpose is defined, but privacy proportionality remains pending.",
    evidence:
      "The source inventory and monitoring review explain what data supports defensive decisions.",
    impact:
      "Security visibility may be justified while individual fields, access, and retention still require privacy review.",
    owner:
      "Fictional Monitoring Owner + Privacy Reviewer",
    handoff:
      "A20.7 should review purpose, minimization, access, and retention.",
  },
  {
    id: "CLOUD-ID-NB-04",
    finding:
      "Recovery access is governed, while full restoration evidence is not as fresh as desired.",
    evidence:
      "Recovery role and current backup status are documented; full restoration validation is older.",
    impact:
      "Recovery confidence remains bounded and may require refreshed validation or explicit risk ownership.",
    owner:
      "Fictional Recovery Owner",
    handoff:
      "A20.7 should capture the evidence-freshness issue as residual risk if not resolved.",
  },
  {
    id: "CLOUD-ID-NB-05",
    finding:
      "Cloud shared responsibility is documented clearly enough to separate platform capability from Northbridge governance.",
    evidence:
      "Architecture and control records distinguish provider features from customer identity, configuration, monitoring, data, and recovery decisions.",
    impact:
      "Later risk statements can assign ownership more accurately.",
    owner:
      "Fictional Cloud Governance Owner",
    handoff:
      "A20.7 should use these ownership boundaries when assigning risk and treatment.",
  },
];

const quizQuestions = [
  {
    question:
      "What does cloud shared responsibility mean in the A20 capstone?",
    choices: [
      "The provider is responsible for every security decision.",
      "Northbridge is responsible for every physical infrastructure detail.",
      "Provider capabilities and customer-controlled identity, configuration, data, monitoring, recovery, and governance responsibilities must be distinguished.",
      "Responsibility cannot be assigned in cloud environments.",
    ],
    answer: 2,
    explanation:
      "Shared responsibility separates platform capability from the customer's configuration, identity, data, evidence, recovery, and governance decisions.",
  },
  {
    question:
      "A privileged user successfully authenticated. What does that prove?",
    choices: [
      "The user was authorized for every action taken afterward.",
      "The authentication event occurred successfully, while action-level authorization still requires additional evidence.",
      "The activity was malicious.",
      "The activity matched the change ticket.",
    ],
    answer: 1,
    explanation:
      "Authentication proves an identity event, not complete authorization or business purpose for every later action.",
  },
  {
    question:
      "What is the strongest treatment of the worker workload identity when its business purpose is clear but exact current authorization scope is incomplete?",
    choices: [
      "Declare it overprivileged immediately.",
      "Assume the permissions are correct because the service works.",
      "Preserve the legitimate purpose, mark current scope as a review need, and compare required access with supplied authorization evidence.",
      "Remove the workload identity from the architecture.",
    ],
    answer: 2,
    explanation:
      "Missing authorization evidence creates uncertainty. It does not automatically prove excessive or correct access.",
  },
  {
    question:
      "Why is a recovery operator identity high sensitivity?",
    choices: [
      "Because recovery access may reach backups, configuration, protected data, or restoration controls.",
      "Because recovery identities never need review.",
      "Because recovery is unrelated to security.",
      "Because backup access proves successful restoration.",
    ],
    answer: 0,
    explanation:
      "Recovery access can affect critical data and restoration outcomes, so purpose, activation, ownership, and post-use review matter.",
  },
  {
    question:
      "What is the strongest conclusion about monitoring service identity?",
    choices: [
      "More collection is always better.",
      "Its defensive purpose can be valid while privacy purpose, minimization, access, and retention still require review.",
      "Monitoring identities do not need ownership.",
      "Collection purpose proves every field is necessary.",
    ],
    answer: 1,
    explanation:
      "Security usefulness and privacy proportionality are connected but distinct decisions.",
  },
  {
    question:
      "What is the best evidence that a cloud access control is governed?",
    choices: [
      "A design diagram alone.",
      "Successful login alone.",
      "Purpose, owner, approval, role scope, lifecycle, review, and relevant action evidence together.",
      "A policy statement with no implementation evidence.",
    ],
    answer: 2,
    explanation:
      "Governance requires both expected design and evidence that access is owned, approved, scoped, reviewed, and changed appropriately.",
  },
  {
    question:
      "What is safest for the A20 cloud and identity review?",
    choices: [
      "Use only fictional Northbridge roles, configurations, records, and synthetic evidence.",
      "Connect to a real cloud tenant for validation.",
      "Test real credentials against a public service.",
      "Copy actual school access logs into the portfolio.",
    ],
    answer: 0,
    explanation:
      "The capstone demonstrates cloud and identity reasoning without real systems, credentials, accounts, or private records.",
  },
];

const takeaways = [
  "Cloud shared responsibility separates provider capability from customer-controlled identity, configuration, data, monitoring, recovery, and governance decisions.",
  "Authentication, authorization, business purpose, approval, and action-level evidence are related but not interchangeable.",
  "Human, privileged, federated, workload, monitoring, and recovery identities need different governance because their purposes and consequences differ.",
  "Workload identities should be reviewed by purpose, resource scope, owner, lifecycle, evidence, and change triggers just like human access.",
  "A design requirement does not prove current implementation, and a successful service does not prove least-privilege access.",
  "Security monitoring can have a valid purpose while still requiring privacy review for data minimization, access, and retention.",
  "Recovery access and recovery capability require evidence beyond current backup status.",
  "The entire A20 cloud and identity phase remains fictional, synthetic, defensive, non-operational, and publication-safe.",
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
        Module A20
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

export default function CloudIdentityReviewPhasePage() {
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
              A20.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.6
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud and Identity Review Phase
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The incident phase stabilized the fictional Northbridge service, but
            immediate recovery does not answer every governance question. A20.6
            reviews who and what can act in the cloud environment, why that access
            exists, which controls belong to the customer, and what evidence proves
            that access and configuration remain governed.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The focus is defensive governance: workforce access, privileged roles,
            workload identities, federation, monitoring identities, recovery
            access, configuration evidence, shared responsibility, lifecycle, and
            ownership. No real cloud account or identity system is used.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A20: Advanced Capstone"
          lessonTitle="Cloud and Identity Review Phase"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish successful authentication from authorization for a specific action.",
            "I understand that cloud provider capability does not replace customer identity and configuration governance.",
            "I can keep human and workload identities separate in a review.",
            "I will use only fictional Northbridge roles, records, services, and synthetic cloud evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Cloud Security Depends on Who Controls the Decision, Not Just Who Operates the Platform"
        >
          <p className="leading-8">
            A managed service can reduce the number of infrastructure tasks an
            organization performs directly, but it does not remove decisions about
            identity, privilege, configuration, data, logging, recovery, privacy,
            risk, and ownership.
          </p>

          <p className="mt-4 leading-8">
            The professional question is therefore not “Is the cloud secure?” It is
            “Which security outcome are we evaluating, which part belongs to the
            provider capability, which part belongs to Northbridge governance, and
            what evidence shows the customer-controlled part is being managed?”
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.6">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Shared Responsibility"
          title="Separate Platform Capability From Northbridge Governance"
        >
          <div className="grid gap-5">
            {sharedResponsibilityAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">{item.area}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                    <span className="font-black">Provider capability:</span>{" "}
                    {item.provider}
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Northbridge responsibility:</span>{" "}
                    {item.customer}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Capstone meaning:</span>{" "}
                  {item.northbridge}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Identity Types"
          title="Different Identities Need Different Governance"
        >
          <p className="leading-8">
            Identity review should not stop with employees. Modern environments
            also depend on application identities, worker identities, monitoring
            identities, recovery roles, and federation relationships. Each one has
            a purpose, owner, scope, lifecycle, and evidence requirement.
          </p>

          <div className="mt-6 grid gap-5">
            {identityTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.type}
                </h3>

                <p className="mt-3 leading-7 text-purple-100">
                  <span className="font-black">Purpose:</span> {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Risk:</span> {item.risk}
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Evidence:</span> {item.evidence}
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Governance:</span>{" "}
                  {item.governance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Cloud and Identity Review Board"
          subtitle="Synthetic shared-responsibility, identity, and governance snapshot"
          metrics={[
            {
              label: "Identity types",
              value: "7",
              note: "Workforce, privileged, federated, portal, worker, monitoring, recovery",
            },
            {
              label: "Shared responsibility areas",
              value: "6",
              note: "Platform, identity, data, configuration, monitoring, recovery",
            },
            {
              label: "Open identity questions",
              value: "2 major",
              note: "09:11 task authorization and worker workload scope",
            },
            {
              label: "Risk/privacy handoffs",
              value: "4",
              note: "Privilege, workload scope, monitoring purpose, recovery evidence freshness",
            },
          ]}
        />

        <FakeAlertCard
          title="Authentication Mistaken for Authorization"
          severity="High"
          time="A20.6 review"
          source="Synthetic Northbridge Identity Governance Queue"
          details="A draft incident follow-up says the 09:11 privileged action was authorized because the user authenticated successfully and the maintenance window was active."
          recommendation="Preserve successful authentication as evidence of identity use, then separately verify role purpose, task-level approval, action scope, ownership, and whether the action matched the approved maintenance task."
        />

        <FakeLogPanel
          title="Synthetic Northbridge Cloud and Identity Notes"
          logs={[
            "[IDENTITY] standard workforce access uses documented application roles",
            "[PRIV] privileged role has approved maintenance purpose and named fictional owner",
            "[09:11] privileged action confirmed; exact task-level authorization still unresolved",
            "[WORKLOAD] portal identity has defined back-end service relationships",
            "[WORKLOAD] worker identity requires queue and protected-data access; exact current scope review pending",
            "[MONITOR] monitoring identity has defined collection purpose; privacy minimization review pending",
            "[RECOVERY] recovery role governed; full restoration evidence remains older than preferred window",
            "[CLOUD] shared responsibility separates provider capabilities from Northbridge access and configuration decisions",
            "[SAFETY] all roles, cloud services, identities, records, and findings are fictional",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Authenticated or Authorized?"
          question="What is the strongest conclusion about the 09:11 privileged action?"
          evidence={[
            "The privileged identity authenticated successfully.",
            "The action is recorded by identity and application evidence.",
            "An approved maintenance window was active.",
            "The summarized task record does not explicitly map the exact action to the approved work.",
          ]}
          options={[
            "The action was fully authorized because authentication succeeded",
            "The action is confirmed and occurred in maintenance context, but task-level authorization remains unresolved",
            "The action was definitely unauthorized because the summary omits it",
            "The action can be ignored because the portal later recovered",
          ]}
          bestAnswer={1}
          explanation="Authentication and event occurrence are confirmed. Business authorization for the specific action still needs task-level evidence."
        />

        <Section
          eyebrow="Access Review"
          title="Eight Questions for Human and Workload Access"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {accessReviewDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Weak signal:</span>{" "}
                  {item.weakSignal}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Review"
          title="Six Identity Evidence Records From the Capstone"
        >
          <div className="grid gap-5">
            {identityEvidence.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.subject}</h3>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  <span className="font-black text-white">Evidence:</span>{" "}
                  {item.evidence}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Supports:</span> {item.supports}
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                    <span className="font-black">Limitation:</span>{" "}
                    {item.limitation}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Cloud Controls"
          title="Six Control Areas That Need Evidence, Not Just Policy"
        >
          <div className="grid gap-5">
            {cloudControlAreas.map((item) => (
              <article
                key={item.control}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">
                  {item.control}
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Expected:</span> {item.expected}
                </p>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Northbridge finding:</span>{" "}
                  {item.finding}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Workload Purpose vs. Scope"
          question="The worker service clearly needs access to the queue and protected-data service, but the exact current authorization map is incomplete. What is the strongest finding?"
          evidence={[
            "The architecture documents a legitimate worker business purpose.",
            "The worker processes approved background jobs.",
            "The exact current permission scope is not fully represented in the supplied evidence.",
            "No supplied evidence proves the role is either excessive or perfectly scoped.",
          ]}
          options={[
            "Declare the worker identity overprivileged",
            "Assume access is correct because the service normally works",
            "Treat the purpose as established, keep current scope as a validation gap, and compare required access with authorization evidence",
            "Remove the worker from the capstone",
          ]}
          bestAnswer={2}
          explanation="The business purpose is known, while current authorization scope remains uncertain. A professional review keeps those two facts separate."
        />

        <Section
          eyebrow="Federation"
          title="Federated Trust Still Needs Purpose, Owners, Lifecycle, and Degraded-State Planning"
        >
          <p className="leading-8">
            Federation does not eliminate identity governance. It moves part of the
            trust decision across an organizational or technical boundary. The
            relying service still needs to know what identity information it trusts,
            who owns that trust, how lifecycle changes propagate, and what happens
            when the relationship is degraded.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {federationQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Findings"
          title="Five Cloud and Identity Findings to Carry Into A20.7"
        >
          <div className="grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">
                    Owner: {item.owner}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-emerald-50">
                  <span className="font-black">Finding:</span> {item.finding}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Impact:</span> {item.impact}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">A20.7 handoff:</span>{" "}
                  {item.handoff}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Cloud and Identity Mistakes"
          title="What Weakens Governance Quality"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Treating provider capability as customer control evidence",
                detail:
                  "A feature existing in a cloud service does not prove Northbridge configured, owns, reviews, or validates it appropriately.",
              },
              {
                title: "Treating authentication as authorization",
                detail:
                  "A successful identity event proves access was established, not that every later action was approved or expected.",
              },
              {
                title: "Ignoring workload identities",
                detail:
                  "Applications, workers, monitoring services, and recovery tools can hold meaningful access that needs purpose and lifecycle governance.",
              },
              {
                title: "Using service success as least-privilege evidence",
                detail:
                  "An application working correctly does not prove its identity has only the permissions it needs.",
              },
              {
                title: "Treating monitoring as privacy-neutral",
                detail:
                  "Defensive collection still needs purpose, minimization, protected access, retention, and review.",
              },
              {
                title: "Treating backups as complete recovery governance",
                detail:
                  "Recovery also depends on identity, configuration, dependencies, restoration evidence, ownership, and risk.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build the Cloud and Identity Governance Review"
        >
          <p className="leading-8">
            Use only the fictional Northbridge architecture, identity records,
            change records, monitoring notes, and recovery evidence already
            provided. No cloud tenant, account, login, or live identity system is
            needed.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Build shared-responsibility notes",
                detail:
                  "For identity, data, configuration, monitoring, and recovery, separate provider capability from Northbridge responsibility.",
              },
              {
                title: "Task 2 — Inventory identities",
                detail:
                  "Record at least six fictional identities or identity types with purpose, owner, privilege, resources, lifecycle, and review trigger.",
              },
              {
                title: "Task 3 — Review privileged access",
                detail:
                  "Compare the 09:11 event with role purpose, maintenance scope, action evidence, ownership, and unresolved task authorization.",
              },
              {
                title: "Task 4 — Review workload access",
                detail:
                  "Compare portal and worker business purpose with required resources and current synthetic authorization evidence.",
              },
              {
                title: "Task 5 — Review cloud controls",
                detail:
                  "Assess identity, configuration, data, monitoring, recovery, and exception governance by expected state and evidence.",
              },
              {
                title: "Task 6 — Create A20.7 handoffs",
                detail:
                  "Identify which issues become residual risk, privacy review items, treatment decisions, or owner actions in the next phase.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision 1 — Privileged Event Authorization"
          scenario="The 09:11 privileged action is confirmed. The user authenticated successfully and maintenance was approved, but the exact task is not explicitly mapped in the supplied change evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the event confirmed, keep task authorization unresolved, request the fictional task-level mapping, and avoid labeling the action approved or unauthorized until evidence supports it.",
              outcome:
                "Best governance decision. It preserves strong event evidence without inventing action-level authorization.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark the action approved because the authentication succeeded.",
              outcome:
                "Risky. Authentication does not prove authorization for the specific action.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Mark the action unauthorized because it is not visible in the summarized change note.",
              outcome:
                "Caution. Missing summary detail creates uncertainty, not automatic proof of unauthorized activity.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Worker Identity Scope"
          scenario="The worker identity must process queue jobs and access protected data, but exact current permissions are not fully represented in the synthetic evidence."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the legitimate purpose, define the minimum resources required, compare that need with available role evidence, and carry any gap into risk review.",
              outcome:
                "Best access-review decision. Purpose and current scope are evaluated separately and defensibly.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume access is least privilege because the worker normally functions.",
              outcome:
                "Risky. Functional success does not prove authorization is appropriately scoped.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare the workload compromised because role evidence is incomplete.",
              outcome:
                "Risky. Missing evidence does not prove compromise.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Explain One Identity Finding to Four Different Reviewers"
        >
          <p className="leading-8">
            Use the worker workload identity as the example. Preserve the same
            underlying facts while changing the depth and decision focus for four
            professional audiences.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Cloud architect",
                detail:
                  "Explain the worker purpose, queue/data dependencies, trust boundaries, expected scope, and control design.",
              },
              {
                title: "Identity reviewer",
                detail:
                  "Explain role purpose, owner, required resources, lifecycle, review evidence, and current scope gap.",
              },
              {
                title: "Risk / privacy reviewer",
                detail:
                  "Explain potential overbreadth, data access, privacy impact, uncertainty, residual risk, and treatment need.",
              },
              {
                title: "Executive reviewer",
                detail:
                  "Explain why the issue matters, what is confirmed, what remains uncertain, who owns it, and what decision is needed.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="Cloud and Identity Review Phase Checklist"
          items={[
            "I can separate provider capability from Northbridge customer responsibility.",
            "I can review workforce, privileged, federated, workload, monitoring, and recovery identities separately.",
            "I can state the purpose and owner of each important identity.",
            "I can distinguish authentication from action-level authorization.",
            "I can compare required workload access with current authorization evidence.",
            "I can identify lifecycle and change events that should trigger access review.",
            "I can distinguish access design from implementation and review evidence.",
            "I can evaluate configuration governance using approved scope, owner, change, validation, and rollback evidence.",
            "I can connect monitoring identity purpose to later privacy review.",
            "I can distinguish current backup status from complete recovery readiness.",
            "I can carry evidence gaps forward as governed questions rather than unsupported findings.",
            "I can assign owners and handoffs to A20.7 risk and privacy review.",
            "I will use only fictional cloud services, identities, roles, records, and synthetic evidence.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.6 Knowledge Check">
          <MiniQuiz
            title="A20.6 Mini Quiz: Cloud and Identity Review Phase"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Cloud and Identity Governance Review"
          prompt="Create a fictional Northbridge Cloud and Identity Governance Review. Include a shared-responsibility map for identity, data, configuration, monitoring, and recovery; at least six identity types or named fictional identities; purpose, owner, required resources, privilege, approval, lifecycle, review trigger, evidence, and residual risk for each; a focused review of the 09:11 privileged event; a workload-identity review for the portal and worker services; federation governance questions; cloud control evidence for identity, configuration, data protection, monitoring, recovery, and exceptions; findings with stable IDs, owners, evidence, limitations, and treatment or review needs; and a clear handoff identifying which findings A20.7 should evaluate as risk or privacy decisions."
          tips={[
            "Keep authentication, authorization, approval, and business purpose separate.",
            "Treat workload identities as governed identities with purpose, owner, scope, lifecycle, and review.",
            "Do not treat a cloud feature as proof that the customer configured or governs it correctly.",
            "Carry monitoring collection purpose into A20.7 privacy review.",
            "Keep backup availability separate from validated restoration readiness.",
            "Use only fictional Northbridge cloud and identity evidence.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.7?"
        >
          <p className="leading-8">
            A20.7 moves into Risk and Privacy Review Phase. Before continuing,
            make sure the cloud and identity findings are expressed as evidence,
            uncertainty, ownership, and decision needs rather than unsupported
            security labels.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain why the 09:11 event is confirmed while task-level authorization remains unresolved.",
              "I can explain why the worker workload identity has a legitimate purpose but still needs current scope evidence.",
              "I can identify monitoring-data purpose and privacy questions that A20.7 should review.",
              "I can carry recovery evidence freshness into residual-risk analysis.",
              "I can assign each major cloud and identity finding to a fictional owner and next decision.",
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
          title="Make the Cloud and Identity Review Useful in the Final Capstone"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable identity IDs",
                detail:
                  "Later risk, privacy, and executive artifacts should be able to reference the same privileged and workload identity findings.",
              },
              {
                title: "Separate design from evidence",
                detail:
                  "Record what access should look like and what current synthetic evidence actually confirms.",
              },
              {
                title: "Record lifecycle triggers",
                detail:
                  "Role change, project completion, service redesign, ownership change, incident, or recovery use may trigger review.",
              },
              {
                title: "Link findings to owners",
                detail:
                  "Identity, cloud, monitoring, recovery, privacy, and risk owners should remain consistent across A20.",
              },
              {
                title: "Track open authorization questions",
                detail:
                  "Do not silently convert an unresolved action into approved or unauthorized status later.",
              },
              {
                title: "Carry privacy purpose forward",
                detail:
                  "Monitoring and audit collection should identify why data is needed so A20.7 can evaluate proportionality.",
              },
              {
                title: "Track recovery evidence age",
                detail:
                  "Fresh backup evidence and older restoration evidence should remain visibly different.",
              },
              {
                title: "Maintain publication safety",
                detail:
                  "Keep all cloud services, role names, identifiers, records, diagrams, and findings fictional and synthetic.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Cloud and identity review stays fictional, defensive, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Use only synthetic Northbridge cloud services, identities, roles,
            configurations, access records, change records, and recovery evidence
            supplied for CyberShield Academy. Do not connect to real cloud tenants,
            test credentials, enumerate accounts, inspect private access controls,
            change permissions, probe services, collect real logs, bypass identity
            protections, or investigate real organizations. The lesson evaluates
            governance, evidence, ownership, lifecycle, and defensive reasoning only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.6 Cloud and Identity Review Phase Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The capstone now has a shared-responsibility model, identity inventory,
            privileged and workload access review, cloud-control evidence, and
            clearly owned governance findings. Next, A20.7 turns those findings
            into risk, privacy, treatment, exception, and residual-risk decisions.
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