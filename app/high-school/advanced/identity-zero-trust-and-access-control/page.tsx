import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/identity-zero-trust-and-access-control`;
const previousModule = `${trackPath}/cloud-security-architecture`;

const lessons = [
  {
    number: "A13.1",
    title: "Identity as a Security Perimeter",
    slug: "identity-as-a-security-perimeter",
    focus:
      "Treat identity as a primary security boundary across users, administrators, workloads, applications, devices, and external parties.",
    lab:
      "Build a fictional identity-perimeter map showing identity types, trust relationships, access paths, resources, owners, lifecycle, and evidence.",
    portfolio: "Identity Perimeter Map",
  },
  {
    number: "A13.2",
    title: "Zero Trust Principles",
    slug: "zero-trust-principles",
    focus:
      "Study zero trust as architecture thinking: verify explicitly, minimize assumed trust, apply least privilege, and continuously reassess access.",
    lab:
      "Evaluate a fictional environment against zero-trust principles and identify where trust is assumed instead of supported by current evidence.",
    portfolio: "Zero Trust Principles Assessment",
  },
  {
    number: "A13.3",
    title: "Federation and Single Sign-On Concepts",
    slug: "federation-and-single-sign-on-concepts",
    focus:
      "Understand federation, identity providers, relying services, SSO, trust relationships, lifecycle, ownership, and monitoring without handling real credentials.",
    lab:
      "Create a fictional federation trust map with identity providers, relying services, trust purpose, owners, lifecycle, and monitoring evidence.",
    portfolio: "Federation Trust Register",
  },
  {
    number: "A13.4",
    title: "Conditional Access and Policy Decisions",
    slug: "conditional-access-and-policy-decisions",
    focus:
      "Examine how identity, role, device context, application sensitivity, session context, environment, and business conditions can influence access decisions.",
    lab:
      "Build fictional conditional-access decision records and explain allow, deny, step-up, limited-access, or review outcomes using safe synthetic context.",
    portfolio: "Conditional Access Decision Matrix",
  },
  {
    number: "A13.5",
    title: "Role-Based and Attribute-Based Access Concepts",
    slug: "role-based-and-attribute-based-access-concepts",
    focus:
      "Compare role-based and attribute-based access models through purpose, maintainability, policy complexity, consistency, and least-privilege tradeoffs.",
    lab:
      "Design a fictional access model that combines roles and attributes while keeping authorization decisions understandable and reviewable.",
    portfolio: "Access Model Comparison",
  },
  {
    number: "A13.6",
    title: "Privileged Access Management Concepts",
    slug: "privileged-access-management-concepts",
    focus:
      "Study privileged identity separation, approval, time-bounded access, emergency access, monitoring, evidence, and post-use governance.",
    lab:
      "Create a fictional privileged-access register with role purpose, approval, duration, owner, monitoring, evidence, and review status.",
    portfolio: "Privileged Access Governance Register",
  },
  {
    number: "A13.7",
    title: "Identity Logging and Monitoring",
    slug: "identity-logging-and-monitoring",
    focus:
      "Design identity telemetry around authentication, authorization, privileged actions, policy changes, lifecycle events, source health, and alert ownership.",
    lab:
      "Build a fictional identity-monitoring coverage matrix using synthetic events, source-health records, alert ownership, and evidence states.",
    portfolio: "Identity Monitoring Coverage Matrix",
  },
  {
    number: "A13.8",
    title: "Access Reviews and Governance",
    slug: "access-reviews-and-governance",
    focus:
      "Evaluate access using purpose, privilege, ownership, lifecycle, evidence freshness, approvals, exceptions, removal decisions, and risk.",
    lab:
      "Run a fictional access-review board using synthetic identity, entitlement, ownership, expiration, and evidence records.",
    portfolio: "Access Review Decision Register",
  },
  {
    number: "A13.9",
    title: "Balancing Security and Usability",
    slug: "balancing-security-and-usability",
    focus:
      "Analyze how strong identity controls can remain usable, understandable, supportable, resilient, and proportionate to business risk.",
    lab:
      "Compare fictional access-control designs and recommend the strongest balance between security, usability, supportability, and operational resilience.",
    portfolio: "Security and Usability Tradeoff Review",
  },
  {
    number: "A13.10",
    title: "Zero Trust Design Lab",
    slug: "zero-trust-design-lab",
    focus:
      "Integrate identity perimeter, zero trust, federation, policy decisions, access models, privileged access, monitoring, governance, and usability.",
    lab:
      "Produce a complete fictional enterprise identity and zero-trust review with evidence, findings, owners, residual risk, and architecture recommendations.",
    portfolio: "Enterprise Identity and Zero-Trust Review",
  },
];

const outcomes = [
  "Explain why identity can function as a security perimeter across humans, workloads, applications, devices, administrators, and external parties.",
  "Apply zero-trust principles using explicit verification, least privilege, bounded trust, continuous evidence, and architecture-aware access decisions.",
  "Evaluate federation, SSO, conditional access, RBAC, ABAC, privileged access, and service identity designs using purpose, scope, ownership, lifecycle, and evidence.",
  "Design identity logging and monitoring that supports authentication, authorization, privileged activity, policy change, lifecycle review, source health, and accountable response.",
  "Perform access reviews and governance decisions that distinguish justified access, stale access, exceptions, residual risk, and removal requirements.",
  "Produce an Enterprise Identity and Zero-Trust Review that integrates architecture, governance, monitoring, usability, and evidence into one professional portfolio artifact.",
];

const workflow = [
  {
    step: "1",
    title: "Map identities and trust",
    description:
      "Identify human, privileged, workload, service, external, and temporary identities plus the resources and trust relationships they depend on.",
  },
  {
    step: "2",
    title: "Define access intent",
    description:
      "State why access exists, what scope is required, who approves it, what conditions apply, and when the access should end.",
  },
  {
    step: "3",
    title: "Evaluate verification and privilege",
    description:
      "Review authentication, authorization, federation, contextual policy, least privilege, and privileged-access boundaries.",
  },
  {
    step: "4",
    title: "Verify evidence and lifecycle",
    description:
      "Check monitoring, source health, access review, ownership, expiration, revocation, and change evidence.",
  },
  {
    step: "5",
    title: "Make a governance decision",
    description:
      "Classify the design as Confirmed, Conditional, Unknown, Blocked, or Accepted Risk and document the next action.",
  },
];

const evidencePreview = [
  {
    id: "IDN-01",
    label: "Workforce Identity",
    status: "Confirmed",
    note:
      "Central identity source, named owner, lifecycle review, and current authentication evidence.",
  },
  {
    id: "IDN-02",
    label: "Privileged Administrator",
    status: "Conditional",
    note:
      "Time-bounded access is active, but one emergency session is awaiting post-use review.",
  },
  {
    id: "IDN-03",
    label: "Student Portal Workload",
    status: "Confirmed",
    note:
      "Workload identity is scoped to approved application resources and monitored.",
  },
  {
    id: "IDN-04",
    label: "External Support Guest",
    status: "Conditional",
    note:
      "Sponsor is current, but the next access-review date is approaching.",
  },
  {
    id: "IDN-05",
    label: "Legacy Reporting Account",
    status: "Blocked",
    note:
      "No current owner, long-lived access, and no acceptable lifecycle evidence.",
  },
  {
    id: "IDN-06",
    label: "Federated Scheduling Service",
    status: "Confirmed",
    note:
      "Trust purpose, service owner, allowed scope, lifecycle, and monitoring are documented.",
  },
];

const coreQuestions = [
  "Who or what is requesting access?",
  "What resource or action is being requested?",
  "Why does the access exist?",
  "What evidence proves the identity and policy decision are current?",
  "How much privilege is actually required?",
  "Which conditions should influence the decision?",
  "Who owns the identity, resource, and access policy?",
  "When should access be reviewed, reduced, revoked, or retired?",
];

const principles = [
  {
    title: "Identity is more than a username",
    text:
      "Identity architecture includes workforce users, administrators, workloads, applications, service identities, external partners, temporary operators, and machine-to-machine trust.",
  },
  {
    title: "Zero trust is not zero access",
    text:
      "Zero trust reduces assumed trust by making access decisions explicit, contextual, least-privileged, observable, and continuously reviewable.",
  },
  {
    title: "Authentication is not authorization",
    text:
      "Proving who or what an identity is does not automatically prove that it should perform a particular action on a particular resource.",
  },
  {
    title: "Federation shifts trust",
    text:
      "Federation can reduce duplicate credentials and improve lifecycle control, but it creates trust relationships that require ownership, evidence, monitoring, and review.",
  },
  {
    title: "Least privilege is contextual",
    text:
      "Appropriate access depends on business purpose, resource, action, environment, time, identity type, and operational responsibility.",
  },
  {
    title: "Privileged access is exceptional",
    text:
      "Administrative capability deserves stronger approval, time limits, monitoring, separation, and post-use evidence.",
  },
  {
    title: "Evidence must stay current",
    text:
      "Access justified months ago may no longer be appropriate after role, service, data, ownership, provider, or architecture changes.",
  },
  {
    title: "Usability affects security",
    text:
      "Controls that are confusing or impractical may create unsafe workarounds, so identity architecture should be strong, understandable, and supportable.",
  },
];

const roles = [
  "Identity Security Architect",
  "IAM Engineer",
  "Cloud Security Engineer",
  "Security Operations Analyst",
  "Application Security Engineer",
  "Governance / Risk Analyst",
];

const portfolioParts = [
  "Identity Perimeter Map",
  "Zero Trust Principles Assessment",
  "Federation Trust Register",
  "Conditional Access Decision Matrix",
  "Access Model Comparison",
  "Privileged Access Governance Register",
  "Identity Monitoring Coverage Matrix",
  "Access Review Decision Register",
  "Security and Usability Tradeoff Review",
  "Enterprise Identity and Zero-Trust Review",
];

export default function IdentityZeroTrustAccessControlModulePage() {
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
              Module A13
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              10 Lessons + Module Test
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Module A13
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Identity, Zero Trust, and Access Control
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Develop advanced identity strategy across human users, privileged
            administrators, workloads, applications, external parties,
            federation, conditional access, least privilege, monitoring,
            governance, and zero-trust architecture.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The module is defensive and architecture-focused. Every identity
            record, access decision, log, policy, and scenario is fictional.
            No real passwords, tokens, accounts, or private identity systems are
            required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A13.1
            </Link>

            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous Module: A12
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Module Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Identity Architecture as a Continuous Security System
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Primary purpose", "Advanced identity strategy"],
              ["Core method", "Evidence-based access review"],
              ["Hands-on style", "Fictional architecture labs"],
              ["Portfolio outcome", "Enterprise identity and zero-trust review"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                  {label}
                </p>
                <p className="mt-2 text-lg font-black text-blue-50">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
            Main Question
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How should an organization decide who or what gets access, under
            which conditions, for how long, and with what evidence?
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-cyan-50">
            Identity security is strongest when the organization can explain
            the requesting identity, resource, business purpose, privilege,
            access conditions, approval, lifecycle, owner, monitoring, and
            review evidence for every important access relationship.
          </p>
        </section>

        <section className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Architecture and governance only — no credential attacks or real
            identity access
          </h2>

          <p className="mt-5 leading-8 text-yellow-50">
            This module teaches defensive identity architecture. Do not attempt
            credential attacks, password guessing, authentication bypass,
            session hijacking, privilege escalation, token theft, account
            enumeration, or access to real identity systems. Labs use fictional
            identities, synthetic policy decisions, safe metadata, and
            conceptual evidence.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Professional Review Pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A Five-Part Module-Level Identity Review
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            This is a practical review pattern for the module, not a rigid
            structure every lesson must repeat. Individual lessons will use the
            models that best fit federation, conditional access, privileged
            access, monitoring, governance, or usability.
          </p>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="flex gap-5 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-300 text-lg font-black text-slate-950">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-black text-purple-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-purple-100">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Learning Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six Capabilities You Will Build
          </h2>

          <div className="mt-6 grid gap-4">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-blue-50">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Core Architecture Questions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Identity Review Starts With Questions, Not Products
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coreQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Architecture Principles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Eight Ideas That Connect the Whole Module
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Lesson Roadmap
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten Advanced Identity Lessons
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Each lesson adds one evidence artifact and advances the final
            Enterprise Identity and Zero-Trust Review.
          </p>

          <div className="mt-7 grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {lesson.number}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    Portfolio: {lesson.portfolio}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white">
                  {lesson.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {lesson.lab}
                    </p>
                  </div>
                </div>

                <Link
                  href={`${modulePath}/${lesson.slug}`}
                  className="mt-5 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Open {lesson.number}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Northbridge Identity Evidence Package
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            A13 continues with a fictional Northbridge identity environment.
            These safe synthetic records provide continuity without using any
            real identity system or credential.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Career Connection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Roles That Use These Skills
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 font-black text-purple-50"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
            Portfolio Outcome
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Enterprise Identity and Zero-Trust Review
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-emerald-50">
            By A13.10, you will combine the module evidence into a professional
            fictional enterprise identity and zero-trust review. The final
            assessment will explain identity boundaries, trust relationships,
            policy decisions, privileged access, monitoring, governance,
            usability, evidence quality, findings, ownership, and recommended
            architecture decisions.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioParts.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-300/20 bg-slate-950/20 p-4 text-emerald-50"
              >
                <span className="font-black text-emerald-200">
                  {index + 1}.
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-200">
            Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A13 Identity, Zero Trust, and Access Control Test
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            After all ten lessons, take the 25-question module test covering
            identity perimeter, zero trust, federation and SSO, conditional
            access, RBAC and ABAC, privileged access management, identity
            monitoring, governance, and security-usability tradeoffs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
            >
              Open A13 Module Test
            </Link>

            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl border border-purple-300/30 px-5 py-3 font-black text-purple-50 transition hover:bg-purple-300/10"
            >
              Start With A13.1
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Continue the Advanced Track
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A12 Cloud Security Architecture
            </Link>

            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Begin A13.1
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}