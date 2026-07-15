import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/identity-and-access-management`;

const lessons = [
  {
    number: "I6.1",
    title: "Identity, Authentication, and Authorization",
    slug: "identity-authentication-and-authorization",
    focus:
      "Build a clear mental model of identity, accounts, authentication, authorization, sessions, trust, and access decisions.",
    lab:
      "Analyze fictional sign-in and access evidence to separate who an account claims to be, how access was verified, and what the account was permitted to do.",
  },
  {
    number: "I6.2",
    title: "Accounts, Roles, and Least Privilege",
    slug: "accounts-roles-and-least-privilege",
    focus:
      "Connect users, service accounts, groups, roles, permissions, ownership, business need, and minimum necessary access.",
    lab:
      "Review a fictional access matrix and identify excessive, missing, inherited, temporary, and unowned permissions.",
  },
  {
    number: "I6.3",
    title: "Passwords, MFA, and Authentication Factors",
    slug: "passwords-mfa-and-authentication-factors",
    focus:
      "Understand password controls, MFA, authentication factors, recovery, remembered sessions, device trust, and evidence limitations.",
    lab:
      "Compare fictional sign-in sequences and determine which controls were used, which failed, and what remains unknown.",
  },
  {
    number: "I6.4",
    title: "Access Control Models and Permissions",
    slug: "access-control-models-and-permissions",
    focus:
      "Explore role-based, attribute-based, rule-based, discretionary, mandatory, and resource-level access concepts.",
    lab:
      "Map fictional access decisions to the correct model and identify where broad permissions or conflicting rules create risk.",
  },
  {
    number: "I6.5",
    title: "Privileged Access and Administrative Accounts",
    slug: "privileged-access-and-administrative-accounts",
    focus:
      "Examine administrative identities, privileged roles, elevation, separation of duties, approval, monitoring, and emergency access.",
    lab:
      "Evaluate fictional privileged-access requests using owner, purpose, duration, approval, device, MFA, logging, rollback, and review evidence.",
  },
  {
    number: "I6.6",
    title: "Account Lifecycle and Access Reviews",
    slug: "account-lifecycle-and-access-reviews",
    focus:
      "Follow accounts through creation, change, transfer, temporary access, inactivity, suspension, removal, and periodic recertification.",
    lab:
      "Review a fictional joiner-mover-leaver packet and build an access-remediation plan with owners and due dates.",
  },
  {
    number: "I6.7",
    title: "Identity Logs and Access Monitoring",
    slug: "identity-logs-and-access-monitoring",
    focus:
      "Interpret sign-ins, failures, MFA, lockouts, role changes, group changes, sessions, conditional access, and identity alerts.",
    lab:
      "Build a fictional identity timeline and separate expected activity, policy enforcement, suspicious patterns, and evidence gaps.",
  },
  {
    number: "I6.8",
    title: "Identity and Access Management Lab",
    slug: "identity-and-access-management-lab",
    focus:
      "Integrate account, role, authentication, permission, lifecycle, privileged-access, logging, owner, and business evidence.",
    lab:
      "Produce a fictional Identity and Access Review Report with confirmed facts, findings, priorities, owners, validation, and residual risk.",
  },
];

const objectives = [
  "Explain the difference between identity, account, authentication, authorization, permission, role, session, and access decision.",
  "Evaluate fictional access using business purpose, owner, least privilege, separation of duties, duration, approval, device, and authentication context.",
  "Interpret fictional identity logs without assuming that a successful sign-in proves the physical person, safe intent, or approved later activity.",
  "Identify excessive access, stale accounts, orphaned permissions, risky role combinations, weak recovery, and incomplete monitoring.",
  "Design safe fictional account-lifecycle, privileged-access, access-review, and remediation workflows.",
  "Create a portfolio-ready Identity and Access Review Report supported by traceable evidence and accountable owners.",
];

const workflow = [
  {
    step: "1",
    title: "Identify the subject and resource",
    detail:
      "Determine which fictional user, service account, device, application, role, group, system, or data resource is involved.",
  },
  {
    step: "2",
    title: "Confirm the business need",
    detail:
      "Record the owner, job or service purpose, requested access, environment, duration, sensitivity, and required outcome.",
  },
  {
    step: "3",
    title: "Verify authentication context",
    detail:
      "Review password, MFA, device, location, session, recovery, conditional-access, and sign-in evidence without overstating identity certainty.",
  },
  {
    step: "4",
    title: "Evaluate authorization",
    detail:
      "Compare roles, groups, permissions, inheritance, exceptions, conflicts, and least-privilege requirements.",
  },
  {
    step: "5",
    title: "Validate lifecycle and ownership",
    detail:
      "Check creation, change, review, inactivity, expiration, transfer, suspension, removal, and accountable ownership.",
  },
  {
    step: "6",
    title: "Remediate and monitor",
    detail:
      "Use narrow approved changes, preserve evidence, prepare rollback, verify business function, monitor, and document residual risk.",
  },
];

const evidencePreview = [
  {
    source: "Identity provider",
    record:
      "Fictional sign-in, MFA, session, application, device, location, policy, result, and reason.",
    question:
      "What does the record directly prove, and what does it not prove about the physical user or later activity?",
  },
  {
    source: "Directory and group membership",
    record:
      "Fictional account, role, group, permission, owner, change time, requester, and approver.",
    question:
      "Is the access direct, inherited, role-based, temporary, excessive, missing, or unowned?",
  },
  {
    source: "Application access",
    record:
      "Fictional user, resource, action, result, session, request ID, privilege, and time.",
    question:
      "Was the action permitted, and did the business owner approve that exact level of access?",
  },
  {
    source: "Lifecycle and ticket records",
    record:
      "Fictional joiner, mover, leaver, exception, expiration, recertification, owner, rollback, and validation details.",
    question:
      "Does documented intent match the current technical state?",
  },
];

const portfolioSections = [
  "Executive summary and scope",
  "Identity and account inventory",
  "Authentication and MFA review",
  "Role, group, and permission matrix",
  "Privileged-access review",
  "Lifecycle and access-review findings",
  "Identity monitoring and evidence gaps",
  "Prioritized remediation roadmap",
  "Validation, monitoring, and residual risk",
  "Evidence appendix with traceable fictional records",
];

function LessonCard({
  number,
  title,
  slug,
  focus,
  lab,
}: {
  number: string;
  title: string;
  slug: string;
  focus: string;
  lab: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-cyan-950/10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
          {number}
        </span>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
          Live
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>

      <div className="mt-5 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
          Lesson focus
        </p>
        <p className="mt-2 text-sm leading-6 text-blue-50">{focus}</p>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
          Defensive lab
        </p>
        <p className="mt-2 text-sm leading-6 text-emerald-50">{lab}</p>
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={`${modulePath}/${slug}`}
          className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
        >
          Open {number}
        </Link>
      </div>
    </article>
  );
}

export default function IdentityAndAccessManagementModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-200">
              Module I6
            </span>
            <span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
              8 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Identity and Access Management
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders connect identities, accounts, authentication,
            roles, permissions, sessions, privileged access, lifecycle,
            monitoring, and business ownership to make safer access decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/identity-authentication-and-authorization`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I6.1
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-4">
          {[
            ["8", "Detailed lessons"],
            ["1", "Integrated lab"],
            ["25", "Module-test questions"],
            ["1", "Portfolio report"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-3xl font-black text-cyan-300">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
            Main Question
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How can an organization give the right identities the right access
            for the right reason and duration—while preserving evidence,
            accountability, privacy, and business function?
          </h2>
          <p className="mt-5 max-w-5xl leading-8 text-cyan-50">
            Identity and access management is not only about passwords. It
            combines account ownership, authentication strength, roles,
            permissions, sessions, device trust, privileged access, lifecycle,
            monitoring, recertification, and safe remediation.
          </p>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Use Only Fictional, Authorized, Read-Only Identity Evidence
          </h2>
          <p className="mt-4 leading-8 text-yellow-50">
            Students do not access real accounts, request credentials, test
            passwords, bypass MFA, change permissions, create privileged users,
            inspect private identity data, or use live administrative consoles.
            Every scenario uses fictional users, devices, applications,
            sign-ins, roles, groups, tickets, logs, and organizations.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six Steps for Reviewing Identity and Access
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {item.step}
                </div>
                <h3 className="mt-4 font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Learning Objectives
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            What You Will Be Able to Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7 text-blue-50">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Lessons
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Complete All Eight Lessons
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.number} {...lesson} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Evidence Students Will Learn to Correlate
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.source}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.record}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6 text-yellow-50">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
            Portfolio Outcome
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Identity and Access Review Report
          </h2>
          <p className="mt-4 max-w-5xl leading-8 text-emerald-50">
            The final portfolio artifact will evaluate a fictional identity and
            access environment using traceable evidence, accountable owners,
            safe recommendations, validation, monitoring, and residual risk.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioSections.map((section) => (
              <div
                key={section}
                className="rounded-xl border border-emerald-300/25 bg-slate-950/60 p-4 text-sm font-semibold text-emerald-50"
              >
                {section}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-purple-200">
            Module Assessment
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            I6 Module Test: 25 Questions
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            The assessment covers identity concepts, authentication, MFA,
            authorization, roles, permissions, privileged access, account
            lifecycle, access reviews, identity monitoring, and integrated
            analysis. Answers remain hidden until revealed.
          </p>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
          >
            Open I6 Module Test
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Begin Module I6
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/identity-authentication-and-authorization`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I6.1
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}