import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/secure-coding-basics`;

const lessons = [
  {
    number: "I9.1",
    title: "Secure Development Lifecycle and Security Requirements",
    slug: "secure-development-lifecycle-and-security-requirements",
    focus:
      "Learn how fictional development teams include security requirements, ownership, review gates, acceptance criteria, privacy boundaries, misuse cases, and validation throughout planning, design, implementation, testing, deployment, and maintenance.",
    lab:
      "Build a fictional secure-development checklist for a student-support application and connect each requirement to an owner, evidence source, test, monitoring signal, and closure condition.",
    skills: [
      "Security requirements",
      "Lifecycle ownership",
      "Acceptance criteria",
      "Review gates",
    ],
  },
  {
    number: "I9.2",
    title: "Threat Modeling and Attack Surface Review",
    slug: "threat-modeling-and-attack-surface-review",
    focus:
      "Map fictional users, data, components, trust boundaries, entry points, dependencies, privileges, failure paths, and business workflows to identify where defensive controls are required.",
    lab:
      "Create a fictional data-flow and trust-boundary review for a school portal, then rank risks using evidence, likelihood, impact, existing controls, and remediation ownership.",
    skills: [
      "Trust boundaries",
      "Data-flow review",
      "Attack-surface inventory",
      "Risk prioritization",
    ],
  },
  {
    number: "I9.3",
    title: "Secure Input, Output, and Data Handling",
    slug: "secure-input-output-and-data-handling",
    focus:
      "Apply fictional server-side schemas, strict allowlists, parameterization, safe APIs, context-specific output handling, file controls, encryption decisions, data minimization, retention, and safe deletion.",
    lab:
      "Review a fictional profile and reporting feature for input contracts, database safety, rendering contexts, file handling, privacy rules, logging limits, and validation evidence.",
    skills: [
      "Input contracts",
      "Parameterization",
      "Output handling",
      "Data minimization",
    ],
  },
  {
    number: "I9.4",
    title: "Authentication, Session, and Access Control Code",
    slug: "authentication-session-and-access-control-code",
    focus:
      "Examine fictional identity verification, secure session creation, rotation, expiration, revocation, object authorization, tenant isolation, privileged operations, reauthentication, and least privilege.",
    lab:
      "Trace a fictional account from sign-in through session creation and protected object access, then identify missing checks and design positive and negative authorization tests.",
    skills: [
      "Session security",
      "Object authorization",
      "Tenant isolation",
      "Privilege checks",
    ],
  },
  {
    number: "I9.5",
    title: "Error Handling, Logging, and Secrets",
    slug: "error-handling-logging-and-secrets",
    focus:
      "Design fictional safe errors, structured security events, request correlation, privacy-aware logging, secret storage, service identities, rotation, redaction, and operational monitoring.",
    lab:
      "Improve a fictional application that reveals stack details, stores sensitive values in logs, and uses an overprivileged shared secret while preserving useful defender evidence.",
    skills: [
      "Safe errors",
      "Structured logging",
      "Secret management",
      "Evidence protection",
    ],
  },
  {
    number: "I9.6",
    title: "Dependency, Build, and Configuration Security",
    slug: "dependency-build-and-configuration-security",
    focus:
      "Review fictional libraries, packages, lockfiles, build pipelines, artifact integrity, runtime versions, environment settings, feature flags, deployment identities, configuration drift, and rollback.",
    lab:
      "Create a fictional dependency and deployment review that separates known risk, reachable code, business exposure, compensating controls, update testing, and residual risk.",
    skills: [
      "Dependency inventory",
      "Build integrity",
      "Secure configuration",
      "Change validation",
    ],
  },
  {
    number: "I9.7",
    title: "Secure Code Review and Testing",
    slug: "secure-code-review-and-testing",
    focus:
      "Use fictional peer review, focused checklists, static analysis, unit tests, integration tests, negative tests, abuse-case tests, regression tests, monitoring, and evidence-based findings.",
    lab:
      "Review a fictional pull request and supplied test evidence, separate tool warnings from confirmed weaknesses, recommend narrow fixes, and define reproducible validation.",
    skills: [
      "Code review",
      "Security testing",
      "Finding validation",
      "Regression prevention",
    ],
  },
  {
    number: "I9.8",
    title: "Secure Coding Basics Lab",
    slug: "secure-coding-basics-lab",
    focus:
      "Integrate fictional requirements, threat modeling, input and output safety, identity, sessions, access control, errors, logs, secrets, dependencies, configuration, review, testing, monitoring, and closure.",
    lab:
      "Produce a portfolio-ready fictional Secure Coding Review Report with architecture, requirements, findings, owners, remediation, positive tests, negative tests, rollback, residual risk, and closure criteria.",
    skills: [
      "Integrated review",
      "Professional findings",
      "Validation planning",
      "Portfolio reporting",
    ],
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the secure requirement",
    detail:
      "State what the fictional application must protect, who owns the requirement, which misuse must be prevented, and how success will be measured.",
  },
  {
    step: "2",
    title: "Map the design and trust boundaries",
    detail:
      "Identify fictional users, services, data, entry points, privileges, dependencies, transitions, failure paths, and business workflows.",
  },
  {
    step: "3",
    title: "Implement safe patterns",
    detail:
      "Use fictional validation, parameterization, safe rendering, authorization, least privilege, secret management, secure defaults, and structured evidence.",
  },
  {
    step: "4",
    title: "Review the code and configuration",
    detail:
      "Compare fictional implementation with requirements, architecture, approved patterns, runtime settings, dependencies, and deployment standards.",
  },
  {
    step: "5",
    title: "Test both success and failure",
    detail:
      "Confirm fictional legitimate workflows work while invalid, unauthorized, expired, duplicate, unsafe, and misconfigured conditions are denied.",
  },
  {
    step: "6",
    title: "Monitor, learn, and close",
    detail:
      "Use fictional logs, alerts, user feedback, business records, rollback readiness, residual risk, and owner approval to support closure.",
  },
];

const objectives = [
  "Explain how security requirements belong in every phase of a fictional software-development lifecycle.",
  "Create fictional threat models that connect assets, users, trust boundaries, misuse cases, controls, owners, and evidence.",
  "Apply defensive coding patterns for input, output, data, authentication, sessions, access control, errors, logs, secrets, dependencies, and configuration.",
  "Review fictional code and tool findings without treating every warning as proof of an exploitable weakness.",
  "Design positive, negative, abuse-case, regression, deployment, monitoring, and rollback validation.",
  "Produce a professional fictional secure-coding report with facts, conclusions, confidence, gaps, remediation, residual risk, and closure criteria.",
];

const evidencePreview = [
  {
    source: "Security requirement",
    record:
      "Fictional requirement SR-12 states that teachers may view only assigned student-support records.",
    supports:
      "A documented authorization and privacy expectation with an accountable owner.",
  },
  {
    source: "Code review",
    record:
      "A fictional route validates authentication but does not verify the requested record’s assignment relationship.",
    supports:
      "A specific object-authorization weakness in the reviewed code path.",
  },
  {
    source: "Negative test",
    record:
      "A fictional teacher account can request another teacher’s record before remediation.",
    supports:
      "The weakness produces an unauthorized result in the supplied safe test environment.",
  },
  {
    source: "Remediation",
    record:
      "The fictional server resolves the record, tenant, and assignment using trusted data before returning content.",
    supports:
      "A narrow server-side correction aligned with the requirement.",
  },
  {
    source: "Validation",
    record:
      "Assigned-record access succeeds while unassigned, wrong-tenant, missing-session, and expired-session cases are denied.",
    supports:
      "Positive and negative evidence for the remediated control.",
  },
  {
    source: "Monitoring",
    record:
      "Seven days of fictional monitoring show normal assigned access and no unexplained authorization denials.",
    supports:
      "Short-term operational stability within the monitored scope.",
  },
];

const portfolioSections = [
  "Executive summary and fictional scope",
  "Application architecture and trust boundaries",
  "Security requirements and acceptance criteria",
  "Threat model and attack-surface inventory",
  "Secure coding and configuration findings",
  "Confirmed facts, conclusions, alternatives, and evidence gaps",
  "Owners, remediation, due dates, and dependencies",
  "Positive, negative, abuse-case, and regression tests",
  "Deployment validation, monitoring, and rollback",
  "Residual risk, lessons learned, and closure approval",
];

export default function SecureCodingBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I9
            </span>

            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              8 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9: Secure Coding Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional development teams build security into
            requirements, architecture, implementation, review, testing,
            deployment, monitoring, and maintenance. This module focuses on
            defensive coding habits, professional evidence, safe validation, and
            clear ownership rather than offensive exploitation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson I9.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Lessons", "8", "Detailed defensive lessons"],
            ["Module test", "25", "Evidence-based questions"],
            ["Primary artifact", "1", "Secure Coding Review Report"],
            ["Safety model", "100%", "Fictional and authorized"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                {label}
              </p>

              <p className="mt-3 text-3xl font-black text-white">{value}</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            Main Question
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            How do developers turn security expectations into reliable,
            testable, maintainable code and configuration?
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-cyan-50">
            Secure coding is not one function, tool, scan, or checklist. A
            fictional application becomes safer when requirements, architecture,
            implementation, review, tests, deployment, monitoring, and ownership
            all agree. Defenders must also preserve legitimate workflows and
            explain exactly what their evidence proves.
          </p>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
            Safety Boundary
          </p>

          <h2 className="mt-3 text-2xl font-black text-white">
            Fictional, Inert, Authorized, and Defensive
          </h2>

          <p className="mt-4 leading-8 text-yellow-50">
            All applications, code examples, accounts, sessions, requests,
            values, files, packages, builds, services, logs, findings, users, and
            organizations in Module I9 are fictional. Do not create harmful
            payloads, exploit real software, access accounts, scan systems,
            modify deployments, expose credentials, or publish private source
            code or data.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Professional Workflow
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Six Steps from Requirement to Closure
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {item.step}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Learning Objectives
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            By the End of Module I9
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="font-semibold leading-7 text-blue-50">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Lessons
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Complete All Eight Lessons
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                      Lesson {index + 1} of 8
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      {lesson.number}: {lesson.title}
                    </h3>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl bg-cyan-400 px-4 py-2 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open Lesson
                  </Link>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Lesson focus
                    </p>

                    <p className="mt-2 leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Defensive lab
                    </p>

                    <p className="mt-2 leading-7 text-emerald-50">
                      {lesson.lab}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {lesson.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Fake Evidence Preview
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            One Fictional Authorization Finding
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Module I9 repeatedly asks you to connect a requirement to code,
            behavior, remediation, and validation. The preview below shows how
            separate records support a defensible finding without exposing real
            software or private data.
          </p>

          <div className="mt-6 grid gap-4">
            {evidencePreview.map((item) => (
              <div
                key={item.source}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Evidence source
                  </p>

                  <p className="mt-2 font-black text-cyan-100">
                    {item.source}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Fictional record
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    {item.record}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Supports
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-50">
                    {item.supports}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
            Portfolio Outcome
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Secure Coding Review Report
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-purple-50">
            By completing I9.8, you will produce a fictional portfolio artifact
            that demonstrates secure-development reasoning, evidence handling,
            professional findings, remediation planning, validation, monitoring,
            and closure.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioSections.map((section, index) => (
              <div
                key={section}
                className="flex gap-4 rounded-xl border border-purple-300/20 bg-slate-950/60 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="font-semibold leading-6 text-purple-50">
                  {section}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
            Module Assessment
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            I9 Module Test: Secure Coding Basics
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            After completing all eight lessons, take the twenty-five-question
            module test. The assessment covers lifecycle security, threat
            modeling, input and output safety, identity, sessions, access
            control, errors, logs, secrets, dependencies, configuration, review,
            testing, evidence, remediation, and closure.
          </p>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
          >
            Open I9 Module Test
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-3 text-2xl font-black text-white">
            Begin Secure Coding Basics
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I9.1
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