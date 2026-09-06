import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/cloud-security-architecture`;
const previousLesson = `${modulePath}/cloud-architecture-review-lab`;
const nextModule = `${trackPath}/identity-zero-trust-and-access-control`;

const coverage = [
  {
    domain: "Shared Responsibility",
    lessons: "A12.1",
    focus:
      "Provider-operated capabilities, customer-owned configuration, shared outcomes, ownership, accountability, and evidence boundaries.",
    review:
      "Know why shared responsibility should clarify ownership instead of making responsibility vague.",
  },
  {
    domain: "Cloud IAM Architecture",
    lessons: "A12.2",
    focus:
      "Human identities, workload identities, least privilege, privileged access, external access, separation of duties, lifecycle, and access evidence.",
    review:
      "Know why private network location does not replace identity and why workload identity is preferred where practical.",
  },
  {
    domain: "Storage Security and Data Exposure",
    lessons: "A12.3",
    focus:
      "Data classification, public/private exposure, access scope, retention, encryption responsibilities, copies, backups, lineage, and ownership.",
    review:
      "Know why encryption alone does not prove storage security and why secondary copies expand the protected data boundary.",
  },
  {
    domain: "Cloud Network Boundaries",
    lessons: "A12.4",
    focus:
      "Public ingress, private service paths, partner connectivity, administrative access, egress, environment separation, trust boundaries, and monitoring.",
    review:
      "Know why public exposure should be limited and why internal/private network placement is not the same as authorization.",
  },
  {
    domain: "Cloud Logging and Monitoring",
    lessons: "A12.5",
    focus:
      "Telemetry domains, source health, identity context, configuration changes, data access, alerting, retention, evidence quality, and visibility gaps.",
    review:
      "Know the difference between no-event and no-source states.",
  },
  {
    domain: "Secrets and Key Handling",
    lessons: "A12.6",
    focus:
      "Workload identity, managed secret references, service credentials, key references, certificates, emergency access, rotation, revocation, environment separation, and retirement.",
    review:
      "Know why architecture documentation should use safe metadata and never secret values.",
  },
  {
    domain: "Backup, Recovery, and Resilience",
    lessons: "A12.7",
    focus:
      "Availability, redundancy, backup, restoration, recovery, RTO, RPO, dependencies, failure domains, recovery ownership, and current exercise evidence.",
    review:
      "Know why healthy backups do not automatically prove full service recovery.",
  },
  {
    domain: "Cloud Misconfiguration Prevention",
    lessons: "A12.8",
    focus:
      "Secure baselines, desired vs. observed state, drift, preventive guardrails, detective controls, exceptions, remediation, and closure evidence.",
    review:
      "Know why configuration assurance is continuous and why a valid exception remains different from the preferred baseline.",
  },
  {
    domain: "Cloud Governance",
    lessons: "A12.9–A12.10",
    focus:
      "Policy, standards, ownership, service inventory, risk acceptance, review cadence, evidence, lifecycle, architecture decisions, blockers, and release recommendations.",
    review:
      "Know why unowned risk should not be silently accepted and why finding impact matters more than a simple majority of passing controls.",
  },
];

const questions = [
  {
    question:
      "Which statement best describes cloud shared responsibility?",
    choices: [
      "The cloud provider owns all security because it operates the infrastructure.",
      "The customer owns all security because it uses the service.",
      "Security responsibility is divided by service model and control area, with provider, customer, and sometimes shared obligations that should be explicitly mapped.",
      "Responsibility does not need owners when both provider and customer are involved.",
    ],
    answer: 2,
    explanation:
      "Shared responsibility should clarify who operates, configures, governs, monitors, and provides evidence for each security outcome.",
  },
  {
    question:
      "A provider encrypts a managed storage platform by default. What does the customer still need to own?",
    choices: [
      "Nothing related to the stored data.",
      "Data classification, access scope, public/private exposure, retention, identity, monitoring, and other customer configuration decisions.",
      "Only physical disk replacement.",
      "Only provider hiring decisions.",
    ],
    answer: 1,
    explanation:
      "Provider-operated encryption does not replace customer responsibility for data handling, identity, exposure, lifecycle, and governance.",
  },
  {
    question:
      "Which is the strongest IAM design for a production application calling a managed database?",
    choices: [
      "A shared employee account used by all application instances.",
      "A named workload identity scoped to the required database actions.",
      "A permanent administrator account embedded in application code.",
      "Anonymous access because the database is private.",
    ],
    answer: 1,
    explanation:
      "Workload identity provides a named non-human principal and supports narrow, reviewable service authorization.",
  },
  {
    question:
      "Why should privileged cloud access be treated differently from normal workforce access?",
    choices: [
      "Because privileged actions can change identity, configuration, data access, network state, logging, and recovery controls.",
      "Because administrators should never access cloud systems.",
      "Because privileged access does not need logging.",
      "Because public users should share administrator roles.",
    ],
    answer: 0,
    explanation:
      "Privileged actions can materially change the security architecture and therefore require stronger identity, approval, monitoring, and review.",
  },
  {
    question:
      "Which statement best describes a secure cloud storage review?",
    choices: [
      "Confirm encryption is enabled and stop.",
      "Review data purpose, classification, access, exposure, copies, retention, encryption responsibility, logging, ownership, and evidence.",
      "Only review the primary database.",
      "Assume private storage is least-privileged.",
    ],
    answer: 1,
    explanation:
      "Cloud storage security is broader than encryption and includes data lifecycle, exposure, access, secondary copies, and ownership.",
  },
  {
    question:
      "Why should backup repositories be included in the protected data boundary?",
    choices: [
      "Because backups often contain data with the same sensitivity as production.",
      "Because backup data is always public.",
      "Because backups do not need identity controls.",
      "Because only providers can read backups.",
    ],
    answer: 0,
    explanation:
      "Backup copies often contain the same protected data and therefore need appropriate access, retention, encryption, and recovery governance.",
  },
  {
    question:
      "When can public cloud storage be appropriate?",
    choices: [
      "Whenever it is easier for developers.",
      "When the business purpose requires public content, the data is classified for public release, publishing is controlled, and exposure is intentionally reviewed.",
      "Whenever encryption is enabled.",
      "When ownership is unknown.",
    ],
    answer: 1,
    explanation:
      "Public exposure can be appropriate when it matches the business purpose and data classification and remains controlled.",
  },
  {
    question:
      "What is a cloud trust boundary?",
    choices: [
      "Only the border between two IP subnets.",
      "A point where assumptions about trust, exposure, identity, privilege, data, ownership, or control change.",
      "Any service with encryption.",
      "Only the internet edge.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries are broader than network addressing and describe meaningful changes in architecture assumptions.",
  },
  {
    question:
      "Why is a private network path not enough to prove application access is authorized?",
    choices: [
      "Because network location and identity are different controls.",
      "Because private networks cannot carry traffic.",
      "Because every private service should be public.",
      "Because authentication is only needed on the internet.",
    ],
    answer: 0,
    explanation:
      "Private reachability can reduce exposure, but services should still authenticate and authorize approved identities or workloads.",
  },
  {
    question:
      "What is the strongest design for a cloud partner integration?",
    choices: [
      "Broad internal network access because the partner is under contract.",
      "A narrow integration path with explicit identity, minimized data, ownership, monitoring, and lifecycle review.",
      "A shared employee account for the vendor.",
      "No monitoring because the integration is approved.",
    ],
    answer: 1,
    explanation:
      "Partner access should remain purpose-specific and bounded even when the business relationship is trusted.",
  },
  {
    question:
      "Why is outbound egress part of cloud security architecture?",
    choices: [
      "Because workloads may connect to external destinations unrelated to approved dependencies.",
      "Because outbound traffic is always malicious.",
      "Because applications never need external services.",
      "Because egress replaces IAM.",
    ],
    answer: 0,
    explanation:
      "Outbound communication should align to documented business or technical dependencies and remain reviewable.",
  },
  {
    question:
      "A dashboard shows zero suspicious storage events, but the storage log source stopped reporting six hours ago. What is the correct conclusion?",
    choices: [
      "No suspicious activity occurred.",
      "The affected monitoring claim is Conditional or Unknown because no-source and no-event are different states.",
      "The dashboard is fully Confirmed.",
      "The logs should be deleted.",
    ],
    answer: 1,
    explanation:
      "A monitoring system cannot use silence as evidence when the required source is not healthy.",
  },
  {
    question:
      "What should an actionable cloud security alert include?",
    choices: [
      "Only a severity label.",
      "Useful context such as identity, resource, environment, action, owner, and evidence needed for review.",
      "A secret value for verification.",
      "No timestamps.",
    ],
    answer: 1,
    explanation:
      "Good alerts reduce investigation uncertainty and help the reviewer understand what happened and who owns the next step.",
  },
  {
    question:
      "Why should security logs avoid secret values and unnecessary sensitive payloads?",
    choices: [
      "Because monitoring systems can become another location exposing protected information.",
      "Because logs should never contain identity context.",
      "Because security events should be anonymous.",
      "Because retention becomes impossible otherwise.",
    ],
    answer: 0,
    explanation:
      "Monitoring should collect enough evidence for decisions without creating unnecessary exposure of secrets or sensitive data.",
  },
  {
    question:
      "Which is the strongest way to represent a cloud secret in architecture documentation?",
    choices: [
      "The real secret value.",
      "A safe reference plus purpose, consumer, scope, environment, owner, lifecycle, rotation, revocation, and monitoring metadata.",
      "A screenshot of the live credential.",
      "A copied token for testing.",
    ],
    answer: 1,
    explanation:
      "Architecture review needs governance metadata, not sensitive secret material.",
  },
  {
    question:
      "A production service credential has no owner, overdue rotation, and no documented revocation path. What status is most appropriate?",
    choices: [
      "Confirmed",
      "Blocked or Unknown until ownership, need, lifecycle, and revocation are resolved",
      "Public",
      "Accepted automatically because it is old",
    ],
    answer: 1,
    explanation:
      "An unowned credential without lifecycle evidence should not be treated as governed.",
  },
  {
    question:
      "What does Recovery Time Objective (RTO) describe?",
    choices: [
      "The acceptable data-loss window.",
      "The target amount of time within which a service or capability should be restored.",
      "The number of backup copies.",
      "The time between user logins.",
    ],
    answer: 1,
    explanation:
      "RTO is the target recovery duration for restoring service capability.",
  },
  {
    question:
      "What does Recovery Point Objective (RPO) describe?",
    choices: [
      "The target acceptable amount of data loss expressed as a time window.",
      "The maximum number of cloud administrators.",
      "The provider billing cycle.",
      "The number of storage regions.",
    ],
    answer: 0,
    explanation:
      "RPO represents how much recent data loss the business can tolerate.",
  },
  {
    question:
      "Why does a successful backup job not prove full service recovery?",
    choices: [
      "Because backup is unrelated to recovery.",
      "Because identity, keys, configuration, network, applications, external dependencies, monitoring, and restoration validation may still fail.",
      "Because backups can never be restored.",
      "Because only providers perform recovery.",
    ],
    answer: 1,
    explanation:
      "A backup is one part of a larger recovery dependency chain.",
  },
  {
    question:
      "A recovery exercise passed 10 months ago, but the architecture changed significantly afterward. What is the strongest conclusion?",
    choices: [
      "The old exercise fully proves current recovery readiness.",
      "Recovery readiness should remain Conditional until the current architecture is validated.",
      "Recovery exercises are unnecessary.",
      "Architecture changes never affect resilience.",
    ],
    answer: 1,
    explanation:
      "Material architecture changes can invalidate prior recovery assumptions and evidence.",
  },
  {
    question:
      "What is configuration drift?",
    choices: [
      "A difference between approved expected state and current observed state.",
      "Any cloud outage.",
      "A new user account.",
      "A backup restore.",
    ],
    answer: 0,
    explanation:
      "Drift is the difference between the approved baseline and the current observed configuration.",
  },
  {
    question:
      "What makes a cloud configuration exception well-governed?",
    choices: [
      "It has no expiration so teams do not have to revisit it.",
      "It includes reason, owner, risk, compensating control, expiration or review date, target state, and closure evidence.",
      "It is not documented.",
      "It automatically changes the secure baseline.",
    ],
    answer: 1,
    explanation:
      "A bounded exception stays visible and creates a managed path back to the preferred state.",
  },
  {
    question:
      "What is the main difference between a policy and a standard?",
    choices: [
      "A policy states a high-level requirement, while a standard translates it into more specific expected control or implementation requirements.",
      "They are always identical.",
      "A standard has no owner.",
      "Policies apply only to cloud providers.",
    ],
    answer: 0,
    explanation:
      "Standards make policy practical by defining more specific expected outcomes.",
  },
  {
    question:
      "What is required for a strong residual-risk acceptance?",
    choices: [
      "A technical team saying the issue is probably fine.",
      "A defined risk, current evidence, mitigation, residual impact, authorized risk owner, conditions, review date, and change triggers.",
      "Deleting the finding from the dashboard.",
      "A permanent exception with no owner.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance should be explicit, informed, authorized, and reviewable.",
  },
  {
    question:
      "A cloud architecture review has 20 strong controls but two unowned production blockers. What is the strongest release decision?",
    choices: [
      "Approve because most controls passed.",
      "Hold until the material blockers are resolved, while tracking bounded Conditional items separately.",
      "Convert the blockers to Accepted Risk without owners.",
      "Ignore the blockers because no incident has occurred.",
    ],
    answer: 1,
    explanation:
      "Release decisions should consider finding impact, not a simple majority of passing controls.",
  },
];

const reviewMap = [
  {
    result: "21–25 correct",
    meaning:
      "Strong A12 readiness. You can connect cloud architecture domains and reason from evidence, ownership, lifecycle, and governance.",
    action:
      "Review any missed questions, then proceed to A13.",
  },
  {
    result: "17–20 correct",
    meaning:
      "Good working understanding with a few architecture gaps.",
    action:
      "Use the targeted review map below for the missed domains before moving on.",
  },
  {
    result: "13–16 correct",
    meaning:
      "Partial understanding. You recognize many concepts but may be treating domains too independently.",
    action:
      "Revisit A12.5–A12.10 and any earlier domain where you missed multiple questions.",
  },
  {
    result: "0–12 correct",
    meaning:
      "Rebuild the architecture model before continuing.",
    action:
      "Review the full A12 module from shared responsibility through the capstone, focusing on why each control exists and what evidence supports it.",
  },
];

const targetedReview = [
  {
    misses: "Questions 1–2",
    lesson: "A12.1",
    topic: "Shared responsibility",
    revisit:
      "Provider vs. customer responsibility, customer configuration, ownership, and evidence boundaries.",
  },
  {
    misses: "Questions 3–4",
    lesson: "A12.2",
    topic: "Cloud IAM",
    revisit:
      "Workload identity, least privilege, privileged access, lifecycle, and ownership.",
  },
  {
    misses: "Questions 5–7",
    lesson: "A12.3",
    topic: "Storage security",
    revisit:
      "Classification, exposure, copies, retention, encryption responsibilities, backup sensitivity, and public-content decisions.",
  },
  {
    misses: "Questions 8–11",
    lesson: "A12.4",
    topic: "Network boundaries",
    revisit:
      "Trust boundaries, private vs. authorized access, partner connectivity, egress, and environment separation.",
  },
  {
    misses: "Questions 12–14",
    lesson: "A12.5",
    topic: "Logging and monitoring",
    revisit:
      "Source health, no-event vs. no-source, alert context, retention, and sensitive-data minimization.",
  },
  {
    misses: "Questions 15–16",
    lesson: "A12.6",
    topic: "Secrets and key handling",
    revisit:
      "Safe metadata, workload identity, ownership, rotation, revocation, environment separation, and retirement.",
  },
  {
    misses: "Questions 17–20",
    lesson: "A12.7",
    topic: "Recovery and resilience",
    revisit:
      "RTO, RPO, backup vs. recovery, current restoration evidence, dependencies, and failure domains.",
  },
  {
    misses: "Questions 21–22",
    lesson: "A12.8",
    topic: "Misconfiguration prevention",
    revisit:
      "Baseline, observed state, drift, exceptions, compensating controls, remediation, and closure evidence.",
  },
  {
    misses: "Questions 23–25",
    lesson: "A12.9–A12.10",
    topic: "Governance and architecture decisions",
    revisit:
      "Policy vs. standard, risk acceptance, decision authority, blockers, release criteria, and evidence-based recommendations.",
  },
];

const checklistItems = [
  "I can explain shared responsibility without making responsibility vague.",
  "I can distinguish human identity, workload identity, privileged access, and external identity.",
  "I can explain why storage security includes access, exposure, copies, retention, ownership, and evidence.",
  "I can identify public, private, partner, administrative, outbound, and environment trust boundaries.",
  "I can distinguish network location from identity and authorization.",
  "I can explain why monitoring depends on source health.",
  "I can distinguish no-event from no-source.",
  "I can explain how to document secrets and keys without exposing values.",
  "I can explain rotation, revocation, certificate renewal, and credential retirement.",
  "I can distinguish availability, backup, restoration, and recovery.",
  "I can explain RTO and RPO.",
  "I can identify recovery dependencies beyond the primary database.",
  "I can explain configuration baseline, observed state, drift, and exception.",
  "I can identify what makes an exception bounded and governable.",
  "I can distinguish policy, standard, procedure, guardrail, exception, and risk acceptance.",
  "I can explain service, control, evidence, and risk ownership.",
  "I can preserve Conditional, Unknown, and Blocked states when evidence does not support Confirmed.",
  "I can explain why a material blocker can hold a release even when many controls are strong.",
  "I can connect all A12 domains into one cloud architecture decision.",
];

const takeaways = [
  "Cloud security architecture is a connected system of responsibility, identity, data, networks, monitoring, secrets, resilience, configuration, and governance.",
  "Provider capabilities do not remove customer responsibility for configuration, ownership, evidence, and risk decisions.",
  "Private networking and encryption are useful controls but do not replace identity, authorization, lifecycle, or governance.",
  "Monitoring confidence depends on source health as well as event content.",
  "Architecture records should never expose real secret values.",
  "Backup health and recovery readiness are different claims.",
  "Configuration assurance is continuous because cloud state changes after deployment.",
  "Exceptions should be bounded, owned, time-limited, and connected to a target state.",
  "Residual risk requires explicit decision authority and review.",
  "Architecture release decisions should be based on evidence and finding impact, not a simple count of passing controls.",
];

export default function CloudSecurityArchitectureModuleTestPage() {
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
              A12 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Module A12 Assessment
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Cloud Security Architecture — Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your ability to reason across cloud shared responsibility,
            identity, storage, network boundaries, logging and monitoring,
            secrets, recovery, misconfiguration prevention, and governance.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All scenarios are fictional and defensive. The test focuses on
            architecture judgment, evidence quality, ownership, and safe
            security decision-making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A12 Module Test Readiness"
          items={[
            "I completed A12.1 through A12.10.",
            "I understand that this test uses one 25-question MiniQuiz with answers hidden until revealed.",
            "I will answer from architecture reasoning rather than memorizing isolated definitions.",
            "I am ready to identify Confirmed, Conditional, Unknown, Blocked, and Accepted Risk states when appropriate.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Test Coverage
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            What the 25 Questions Measure
          </h2>

          <div className="mt-6 grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.domain}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.lessons}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.domain}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.focus}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Review emphasis
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.review}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-200">
            Assessment
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            25-Question A12 Module Test
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            Work through all 25 questions before reviewing explanations. Focus
            on what the evidence actually supports and which architecture
            decision is most defensible.
          </p>

          <div className="mt-6">
            <MiniQuiz
              title="A12 Cloud Security Architecture Module Test"
              questions={questions}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Performance Guide
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Interpret Your Result
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviewMap.map((item) => (
              <article
                key={item.result}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.result}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Next action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Targeted Review Map
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Use Missed Questions to Find the Right Lesson
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Misses</th>
                  <th className="border-b border-slate-700 p-4">Lesson</th>
                  <th className="border-b border-slate-700 p-4">Topic</th>
                  <th className="border-b border-slate-700 p-4">Revisit</th>
                </tr>
              </thead>
              <tbody>
                {targetedReview.map((item) => (
                  <tr key={item.misses} className="align-top">
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-cyan-100">
                      {item.misses}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-purple-100">
                      {item.lesson}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-black text-white">
                      {item.topic}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.revisit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <DefenderChecklist
          title="A12 Final Readiness Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            A12 — Cloud Security Architecture Complete
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            You have completed the A12 module homepage, all ten Advanced
            lessons, the Cloud Security Architecture Assessment capstone, and
            the 25-question module test.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-100">
            The next Advanced module is A13 — Identity, Zero Trust, and Access
            Control.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-emerald-300/30 px-5 py-3 font-black text-emerald-50 transition hover:bg-emerald-300/10"
            >
              Back to A12.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-emerald-300/30 px-5 py-3 font-black text-emerald-50 transition hover:bg-emerald-300/10"
            >
              A12 Module Homepage
            </Link>

            <Link
              href={nextModule}
              className="rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
            >
              Continue to A13
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This assessment is defensive and fictional
          </h2>
          <p className="mt-3 leading-7">
            Do not use these questions as instructions to access, probe,
            configure, modify, restore, or test real cloud accounts, networks,
            storage, credentials, logs, backups, or production services. All
            scenarios are designed for safe architecture learning.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}