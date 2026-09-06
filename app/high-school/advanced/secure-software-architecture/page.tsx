import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/secure-software-architecture`;
const previousModule = `${trackPath}/advanced-web-security-defense`;
const nextModule = `${trackPath}/cloud-security-architecture`;

const lessons = [
  {
    number: "A11.1",
    title: "Security in the Software Lifecycle",
    href: `${modulePath}/security-in-the-software-lifecycle`,
    focus:
      "Understand where security belongs across planning, design, implementation, review, testing, release, operation, maintenance, and retirement.",
    lab:
      "Map security questions, evidence, owners, and decision points across a fictional software lifecycle.",
    outcome:
      "A lifecycle security map that connects early design choices to later validation and operational learning.",
  },
  {
    number: "A11.2",
    title: "Secure Design Requirements",
    href: `${modulePath}/secure-design-requirements`,
    focus:
      "Turn broad security goals into clear requirements for identity, authorization, data handling, logging, resilience, configuration, and change.",
    lab:
      "Convert a fictional product brief into measurable security requirements with owners and evidence expectations.",
    outcome:
      "A secure requirements register separating goals, assumptions, constraints, and acceptance evidence.",
  },
  {
    number: "A11.3",
    title: "Threat Modeling for Software",
    href: `${modulePath}/threat-modeling-for-software`,
    focus:
      "Apply threat-modeling reasoning to components, trust boundaries, data flows, dependencies, privileged actions, assumptions, and defensive controls.",
    lab:
      "Review a supplied fictional architecture and record assets, trust boundaries, risk statements, safeguards, and Unknowns.",
    outcome:
      "A bounded software threat model supporting design decisions without offensive testing.",
  },
  {
    number: "A11.4",
    title: "Secrets Management Concepts",
    href: `${modulePath}/secrets-management-concepts`,
    focus:
      "Study how teams govern credentials, keys, tokens, and sensitive configuration through ownership, storage boundaries, access, rotation, and redaction.",
    lab:
      "Review metadata-only fictional secret records and design safer ownership, separation, rotation, and monitoring.",
    outcome:
      "A secrets governance model that never exposes or tests real secret values.",
  },
  {
    number: "A11.5",
    title: "Dependency and Supply Chain Risk Concepts",
    href: `${modulePath}/dependency-and-supply-chain-risk-concepts`,
    focus:
      "Understand how libraries, packages, build tools, vendors, registries, versions, provenance, maintenance, and update paths affect software risk.",
    lab:
      "Analyze a fictional dependency inventory and prioritize governance actions using impact, maintenance, exposure, provenance, and replacement difficulty.",
    outcome:
      "A dependency risk register and supply-chain review workflow focused on prevention and governance.",
  },
  {
    number: "A11.6",
    title: "Secure Error Handling and Logging",
    href: `${modulePath}/secure-error-handling-and-logging`,
    focus:
      "Design user-facing errors and defender-facing logging so both are useful without exposing unnecessary sensitive information.",
    lab:
      "Classify fictional events into user messages, operational logs, security telemetry, and protected diagnostic channels.",
    outcome:
      "An error-and-logging design balancing usability, privacy, observability, and investigation needs.",
  },
  {
    number: "A11.7",
    title: "Code Review for Security",
    href: `${modulePath}/code-review-for-security`,
    focus:
      "Learn how security-focused code review checks design intent, trust boundaries, authorization assumptions, data handling, dependencies, errors, and configuration.",
    lab:
      "Review inert pseudocode and fictional design notes, recording findings, questions, owners, and required evidence.",
    outcome:
      "A security code-review checklist and bounded finding register for defensive peer review.",
  },
  {
    number: "A11.8",
    title: "Testing Security Requirements Safely",
    href: `${modulePath}/testing-security-requirements-safely`,
    focus:
      "Connect security requirements to safe validation using test environments, expected results, configuration review, integration evidence, and release criteria.",
    lab:
      "Create a fictional security validation plan with boundaries, expected results, owners, evidence needs, and stop conditions.",
    outcome:
      "A safe requirements-validation matrix with no live-system probing or exploit procedures.",
  },
  {
    number: "A11.9",
    title: "Secure Deployment Concepts",
    href: `${modulePath}/secure-deployment-concepts`,
    focus:
      "Study artifact approval, environment separation, configuration baselines, change control, rollback, monitoring, access, and post-release validation.",
    lab:
      "Review a fictional release packet and classify evidence as sufficient, missing, stale, or blocking.",
    outcome:
      "A secure deployment readiness checklist and release decision record.",
  },
  {
    number: "A11.10",
    title: "Secure Software Design Lab",
    href: `${modulePath}/secure-software-design-lab`,
    focus:
      "Integrate lifecycle, requirements, threat modeling, secrets, dependencies, logging, code review, testing, deployment, and governance.",
    lab:
      "Complete a fictional capstone assessment using supplied architecture, requirements, dependency records, review notes, and release evidence.",
    outcome:
      "The portfolio-ready Secure Software Design Assessment.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand the software and its purpose",
    detail:
      "Start with users, business goals, important data, components, trust boundaries, dependencies, environments, privileged actions, and operational expectations. Security decisions are only meaningful when the intended behavior is clear.",
  },
  {
    number: "02",
    title: "Turn goals into secure design requirements",
    detail:
      "Translate ideas such as least privilege, privacy, integrity, resilience, safe defaults, auditability, and secure change into requirements with owners, evidence, scope, and acceptance conditions.",
  },
  {
    number: "03",
    title: "Review architecture and implementation evidence",
    detail:
      "Compare design decisions against requirements using threat models, dependency records, configuration summaries, code-review evidence, logging design, error handling, and documented assumptions.",
  },
  {
    number: "04",
    title: "Validate before release",
    detail:
      "Require safe evidence that security expectations were checked in authorized environments, important changes were reviewed, deployment controls are ready, and unresolved risk is visible.",
  },
  {
    number: "05",
    title: "Operate, learn, and improve",
    detail:
      "Monitoring, maintenance, dependency updates, configuration changes, incidents, and new requirements feed back into the next lifecycle decision.",
  },
];

const objectives = [
  "Explain how security fits across the full software lifecycle instead of appearing only at the end.",
  "Write secure design requirements that can be assigned, reviewed, validated, and governed.",
  "Use software threat modeling to connect assets, trust boundaries, assumptions, risks, and controls.",
  "Evaluate secrets, dependencies, error handling, logging, and code-review evidence as architecture concerns.",
  "Design safe validation and deployment-readiness processes using fictional or explicitly authorized evidence only.",
  "Produce a professional Secure Software Design Assessment with findings, priorities, owners, validation needs, and residual risk.",
];

const readiness = [
  {
    title: "Architecture thinking",
    status: "Required",
    detail:
      "You should be comfortable reasoning about components, trust boundaries, identities, authorization, APIs, configuration, logging, and monitoring from earlier Advanced modules.",
  },
  {
    title: "Threat modeling",
    status: "Reused",
    detail:
      "A11 reuses the risk-question approach from A3, but now applies it directly to software lifecycle and design decisions.",
  },
  {
    title: "Web defense foundations",
    status: "Reused",
    detail:
      "A10 authentication, authorization, API, secrets, input/output, browser, and monitoring concepts become inputs to secure software architecture.",
  },
  {
    title: "Offensive testing",
    status: "Not required",
    detail:
      "This module does not require scanning, probing, exploit development, credential attacks, bypass testing, or testing real applications.",
  },
];

const roles = [
  {
    role: "Security Architect",
    question:
      "Can the design explain where trust begins and ends, which controls protect important actions, and which assumptions still need evidence?",
  },
  {
    role: "Software Engineer",
    question:
      "Can implementation choices be traced back to requirements, reviewed safely, tested, maintained, and deployed with clear ownership?",
  },
  {
    role: "Application Security Reviewer",
    question:
      "Can you identify design gaps from supplied evidence without turning the review into unauthorized offensive testing?",
  },
  {
    role: "Release Engineer",
    question:
      "Can you decide whether artifacts, configuration, monitoring, rollback, approvals, and validation evidence are ready for release?",
  },
  {
    role: "Risk Owner",
    question:
      "Can you understand what is known, what remains uncertain, which risks are accepted, and what evidence is still required?",
  },
  {
    role: "Security Program Lead",
    question:
      "Can you build repeatable security gates and feedback loops that improve software without making delivery impossible?",
  },
];

const evidence = [
  {
    id: "SSA-01",
    source: "Product requirement",
    observation:
      "The fictional service lets customers view records and lets approved staff perform higher-impact account actions.",
    question:
      "Which security requirements should differ between ordinary customer access and privileged staff actions?",
  },
  {
    id: "SSA-02",
    source: "Architecture diagram",
    observation:
      "The design includes a browser client, application service, identity provider, API layer, database, logging service, and third-party dependency.",
    question:
      "Where are the trust boundaries, important data flows, privileged actions, and dependency assumptions?",
  },
  {
    id: "SSA-03",
    source: "Dependency inventory",
    observation:
      "One business-critical library is several versions behind the team's approved baseline and is maintained externally.",
    question:
      "What evidence is needed before deciding whether to update, replace, isolate, or formally accept the risk?",
  },
  {
    id: "SSA-04",
    source: "Release packet",
    observation:
      "A release has functional-test and code-review evidence, but one high-impact security requirement has no recorded validation result.",
    question:
      "Should the release pause, proceed under a governed exception, or wait for additional evidence?",
  },
];

const decisions = [
  {
    title: "Requirement decision",
    prompt:
      "A team writes, “The application must be secure.” Is that enough?",
    strong:
      "No. Convert the goal into specific requirements with scope, owner, rationale, expected evidence, and acceptance conditions.",
  },
  {
    title: "Dependency decision",
    prompt:
      "A dependency is old but stable. Should the team automatically update it or automatically leave it alone?",
    strong:
      "Neither. Review maintenance, provenance, exposure, compatibility, validation evidence, replacement options, and rollback before deciding.",
  },
  {
    title: "Release decision",
    prompt:
      "A deadline has arrived, but a high-impact requirement has no validation evidence. What should happen?",
    strong:
      "Make the missing evidence visible, identify the accountable risk owner, and use the formal release or exception process rather than hiding uncertainty.",
  },
];

const risks = [
  {
    risk: "Security added too late",
    weak: "Wait until release week for one final security review.",
    strong:
      "Place requirements, review questions, evidence, and checkpoints throughout the lifecycle.",
  },
  {
    risk: "Unclear requirements",
    weak: "Use broad statements such as “secure authentication” without defining expected behavior.",
    strong:
      "State scope, owner, rationale, expected behavior, evidence, and acceptance criteria.",
  },
  {
    risk: "Dependency blindness",
    weak: "Treat third-party packages as invisible implementation details.",
    strong:
      "Track important dependencies, versions, provenance, maintenance, update paths, and replacement risk.",
  },
  {
    risk: "Unsafe logging",
    weak: "Log everything because more information always seems better.",
    strong:
      "Record useful security events while minimizing sensitive data and defining access, retention, and redaction.",
  },
  {
    risk: "Release by deadline alone",
    weak: "Treat the calendar as proof that the software is ready.",
    strong:
      "Use release criteria, evidence, exceptions, rollback, monitoring, and accountable risk decisions.",
  },
];

const boundaries = [
  {
    inScope:
      "Review fictional architecture diagrams, requirements, dependency metadata, release evidence, and inert pseudocode.",
    outScope:
      "Scan, probe, attack, or test a real application, account, API, repository, device, or network.",
  },
  {
    inScope:
      "Discuss threat models, misuse concerns, secure design requirements, and defensive controls conceptually.",
    outScope:
      "Create exploit payloads, bypass procedures, credential attacks, privilege-escalation instructions, or offensive automation.",
  },
  {
    inScope:
      "Use metadata-only fictional secret records and configuration summaries.",
    outScope:
      "Expose, retrieve, validate, test, or use real passwords, tokens, keys, cookies, or credentials.",
  },
  {
    inScope:
      "Create safe validation plans using expected outcomes, fictional evidence, and authorized test boundaries.",
    outScope:
      "Provide live-system fuzzing, enumeration, exploitation, authentication bypass, or destructive-testing instructions.",
  },
];

const portfolio = [
  {
    title: "System and lifecycle context",
    detail:
      "Summarize the fictional product, users, important data, components, environments, trust boundaries, dependencies, and lifecycle stages.",
  },
  {
    title: "Security requirements register",
    detail:
      "Record requirements with rationale, scope, owner, expected evidence, acceptance criteria, dependencies, and status.",
  },
  {
    title: "Software threat model",
    detail:
      "Document assets, trust boundaries, data flows, assumptions, misuse concerns, existing controls, planned controls, and Unknowns.",
  },
  {
    title: "Secrets and dependency review",
    detail:
      "Assess metadata-only secret governance plus important library, package, vendor, registry, build, version, and update risks.",
  },
  {
    title: "Review and validation evidence",
    detail:
      "Summarize code-review findings, security-test coverage, logging/error behavior, configuration evidence, and gaps.",
  },
  {
    title: "Deployment readiness",
    detail:
      "Record artifact approval, environment controls, configuration baseline, monitoring, rollback, blockers, exceptions, and post-release checks.",
  },
  {
    title: "Findings and priorities",
    detail:
      "Separate observation, interpretation, potential impact, uncertainty, owner, recommended action, and validation requirement.",
  },
  {
    title: "Executive summary",
    detail:
      "Explain the strongest controls, most important risks, unresolved Unknowns, release posture, and next actions in clear language.",
  },
];

function Badge({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "purple" | "emerald" | "yellow";
}) {
  const toneClass = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    purple: "border-purple-400/30 bg-purple-400/10 text-purple-100",
    emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    yellow: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
  }[tone];

  return (
    <span
      className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/security-in-the-software-lifecycle`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Begin A11.1
      </Link>
    </div>
  );
}

export default function SecureSoftwareArchitectureModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <Badge>High School Advanced</Badge>
            <Badge tone="purple">Module A11</Badge>
            <Badge tone="emerald">10 Lessons + Module Test</Badge>
            <Badge tone="yellow">Application, Cloud & Identity</Badge>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Secure Software Architecture
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Build Security Into Software Before Release Day
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Secure software is not created by adding one security check at the
            end. It comes from a lifecycle where product goals, design
            requirements, threat models, dependencies, secrets, logging,
            review, testing, deployment, and maintenance support the same
            defensive expectations.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            A11 teaches you to review software as a connected system of
            decisions. You will practice asking whether requirements are clear,
            whether architecture supports them, whether evidence is strong
            enough, whether dependencies and secrets are governed, and whether
            release risk is understood before software moves forward.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading
          eyebrow="Module Snapshot"
          title="What A11 Adds to the Advanced Track"
          description="A10 focused on defensive web architecture. A11 expands the view to the full software lifecycle: how secure intent becomes requirements, design, review evidence, validation, release decisions, maintenance, and governance."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Primary Question",
              value:
                "How do teams design, build, review, test, and release software so security is part of the lifecycle?",
            },
            {
              label: "Main Focus",
              value:
                "Lifecycle, design requirements, dependencies, secrets, review, testing, deployment, and risk decisions.",
            },
            {
              label: "Portfolio",
              value: "Secure Software Design Assessment",
            },
            {
              label: "Assessment",
              value: "25 questions across all A11 lessons.",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                {item.label}
              </p>
              <p className="mt-3 leading-7 text-slate-200">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Module Professional Meaning"
            title="The Main Question and Safety Boundary"
            description="Software security professionals need technical depth, but professional work still depends on authorization, scope, privacy, change control, evidence, and responsible communication."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-cyan-400/25 bg-cyan-400/10 p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                Main Question
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Can we explain why this software should be trusted to perform
                its intended job safely?
              </h3>
              <p className="mt-4 leading-8 text-cyan-50">
                A strong answer connects requirements, architecture,
                implementation evidence, dependency choices, secrets
                governance, logging, review, validation, deployment, and
                operational learning. It also makes uncertainty visible instead
                of pretending every risk has disappeared.
              </p>
            </article>

            <article className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
                Safety Boundary
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Defensive architecture and review only
              </h3>
              <p className="mt-4 leading-8 text-yellow-50">
                A11 uses fictional systems, inert pseudocode, supplied evidence,
                metadata-only secret records, and safe design exercises. It
                does not authorize scanning, probing, exploit development,
                credential attacks, bypass testing, fuzzing, destructive
                testing, or testing real software without permission.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Module Entry Readiness"
          title="What You Should Bring Into A11"
          description="You do not need professional software-engineering experience. The goal is to practice security reasoning and design review, not to build or attack a production application."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {readiness.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-100">
                  {item.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Professional Workflow"
            title="Five Steps for Secure Software Decisions"
            description="The workflow is deliberately repeatable so a reviewer can show how evidence moves from understanding the system to requirements, architecture, validation, release, and continuous improvement."
          />

          <div className="grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 md:grid-cols-[110px_1fr]"
              >
                <span className="text-4xl font-black text-cyan-300">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Learning Outcomes"
          title="Six Capabilities You Will Build"
          description="By the end of A11, you should be able to move beyond isolated controls and reason about whether software security is supported across the complete development and release process."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective, index) => (
            <article
              key={objective}
              className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                {index + 1}
              </span>
              <p className="mt-4 leading-7 text-blue-50">{objective}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Role Readiness Preview"
            title="How Different Professionals Read the Same Design"
            description="Secure software architecture is collaborative. Different roles ask different questions, but strong teams connect those questions through shared evidence and explicit ownership."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                  {item.role}
                </p>
                <p className="mt-3 leading-7 text-purple-50">
                  {item.question}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Lesson Roadmap"
          title="A11.1–A11.10"
          description="Each lesson contributes to the final Secure Software Design Assessment. Complete them in order so later lessons can reuse the requirements, evidence models, review habits, and decision frameworks built earlier."
        />

        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <article
              key={lesson.number}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
            >
              <div className="grid lg:grid-cols-[170px_1fr]">
                <div className="flex flex-col justify-between border-b border-slate-800 bg-[linear-gradient(180deg,_rgba(34,211,238,0.14),_rgba(168,85,247,0.08))] p-6 lg:border-b-0 lg:border-r">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Lesson
                    </p>
                    <p className="mt-2 text-4xl font-black text-white">
                      {lesson.number}
                    </p>
                  </div>
                  <p className="mt-8 text-xs font-semibold text-slate-400">
                    Step {index + 1} of 10
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-white">
                    {lesson.title}
                  </h3>

                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        Focus
                      </p>
                      <p className="mt-2 text-sm leading-7 text-cyan-50">
                        {lesson.focus}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                        Defensive Lab
                      </p>
                      <p className="mt-2 text-sm leading-7 text-emerald-50">
                        {lesson.lab}
                      </p>
                    </div>

                    <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                        Portfolio Contribution
                      </p>
                      <p className="mt-2 text-sm leading-7 text-purple-50">
                        {lesson.outcome}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={lesson.href}
                    className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Fictional Evidence Preview"
            title="What a Software Architecture Review Might Receive"
            description="A11 repeatedly separates observation from interpretation. You will work from supplied evidence, record what it actually supports, and mark Unknowns when evidence is missing."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead className="bg-slate-900">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-800 p-4">ID</th>
                  <th className="border-b border-slate-800 p-4">Source</th>
                  <th className="border-b border-slate-800 p-4">Observation</th>
                  <th className="border-b border-slate-800 p-4">Review Question</th>
                </tr>
              </thead>
              <tbody className="bg-slate-950/70">
                {evidence.map((item) => (
                  <tr key={item.id} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-mono text-sm font-black text-cyan-300">
                      {item.id}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm font-semibold text-white">
                      {item.source}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {item.observation}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-purple-100">
                      {item.question}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 text-blue-50">
            <p className="text-lg font-black">Evidence discipline</p>
            <p className="mt-2 leading-7">
              A missing fact should not become an invented conclusion.
              “Unknown,” “not supplied,” “not yet validated,” and “requires
              owner confirmation” are professional outcomes when the evidence
              does not support a stronger claim.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Decision Preview"
          title="Architecture Is a Series of Defensible Decisions"
          description="The goal is not to memorize one perfect pattern. The goal is to make decisions that can be explained using requirements, evidence, constraints, ownership, uncertainty, and validation."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {decisions.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                {item.title}
              </p>
              <p className="mt-3 font-semibold leading-7 text-white">
                {item.prompt}
              </p>
              <div className="mt-5 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                <span className="font-black">Strong approach: </span>
                {item.strong}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Portfolio Outcome"
            title="Secure Software Design Assessment"
            description="The A11 portfolio is not a vulnerability report. It is a structured defensive architecture assessment showing how lifecycle, requirements, evidence, validation, deployment, and residual risk connect."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Section {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-black text-emerald-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-purple-400/25 bg-purple-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-200">
              Public-Safe Portfolio Version
            </p>
            <h3 className="mt-3 text-2xl font-black text-white">
              Show the reasoning without exposing sensitive implementation details
            </h3>
            <p className="mt-4 max-w-4xl leading-8 text-purple-50">
              Use fictional names, abstract architecture, synthetic evidence,
              generic dependency labels, metadata-only configuration examples,
              and no real credentials, private endpoints, customer information,
              proprietary source code, or internal vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Risk Preview"
          title="Common Secure-Software Failure Patterns"
          description="These are defensive architecture and governance problems. A11 teaches you how to reduce them through better lifecycle design, evidence, ownership, and review."
        />

        <div className="grid gap-5">
          {risks.map((item) => (
            <article
              key={item.risk}
              className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:grid-cols-[0.7fr_1fr_1fr]"
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                  Risk
                </p>
                <h3 className="mt-2 text-lg font-black text-white">
                  {item.risk}
                </h3>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak approach
                </p>
                <p className="mt-2 text-sm leading-7 text-red-50">
                  {item.weak}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Stronger approach
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-50">
                  {item.strong}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Conceptual Boundaries"
            title="What A11 Practices — and What It Does Not"
            description="These boundaries keep the module useful, ethical, defensive, and school-appropriate."
          />

          <div className="grid gap-5">
            {boundaries.map((item, index) => (
              <article
                key={item.inScope}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 md:grid-cols-[80px_1fr_1fr]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    In scope
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.inScope}
                  </p>
                </div>

                <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    Out of scope
                  </p>
                  <p className="mt-2 text-sm leading-7 text-red-50">
                    {item.outScope}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading
          eyebrow="Module Test"
          title="A11 Secure Software Architecture — 25 Questions"
          description="After all ten lessons, the test checks whether you can connect software lifecycle security, design requirements, threat modeling, secrets, dependency risk, logging, code review, safe validation, and deployment decisions."
        />

        <div className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                Assessment Coverage
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                From secure intent to release evidence
              </h3>
              <p className="mt-4 max-w-4xl leading-8 text-yellow-50">
                Expect questions about SDLC security, secure requirements,
                software threat models, secrets, dependencies, error handling,
                logging, code review, safe testing strategy, deployment
                readiness, evidence quality, ownership, exceptions, and
                residual risk.
              </p>
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-yellow-300 px-6 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
            >
              Open Module Test
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading
            eyebrow="Module Navigation"
            title="Start A11"
            description="Begin with the lifecycle. Every later lesson depends on understanding when security decisions are made, who owns them, what evidence they require, and how they feed the next stage."
          />

          <Navigation />

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              After A11
            </p>
            <p className="mt-2 text-lg font-black text-white">
              A12 — Cloud Security Architecture
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
              A12 extends the architecture mindset into cloud identity, storage,
              networks, logging, secrets, resilience, configuration, and
              governance.
            </p>
            <Link
              href={nextModule}
              className="mt-4 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-black text-slate-300 transition hover:border-purple-400 hover:text-purple-100"
            >
              Preview A12 route
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}