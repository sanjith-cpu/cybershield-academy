import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/web-security-defense`;

const lessons = [
  {
    number: "I8.1",
    title: "Web Applications, Browsers, and HTTP",
    slug: "web-applications-browsers-and-http",
    focus:
      "Build a defensive mental model of fictional browsers, clients, servers, requests, responses, URLs, methods, headers, status codes, cookies, sessions, and application data flows.",
    lab:
      "Map a supplied fictional web request from user action through browser, network, server, application, database, response, and rendered page.",
  },
  {
    number: "I8.2",
    title: "Authentication, Sessions, and Access Control",
    slug: "authentication-sessions-and-access-control",
    focus:
      "Examine fictional login flows, session identifiers, cookies, logout, timeouts, role checks, permissions, least privilege, and access-control evidence.",
    lab:
      "Review a fictional account and session timeline to distinguish expected access, weak controls, suspicious activity, and missing evidence.",
  },
  {
    number: "I8.3",
    title: "Input Validation and Injection Defense",
    slug: "input-validation-and-injection-defense",
    focus:
      "Understand why fictional applications must treat user-controlled input as untrusted and how allowlists, parameterization, encoding, validation, and least privilege reduce injection risk.",
    lab:
      "Analyze safe fictional request examples and design a defensive validation plan without creating or running harmful payloads.",
  },
  {
    number: "I8.4",
    title: "Cross-Site Scripting and Browser-Side Defense",
    slug: "cross-site-scripting-and-browser-side-defense",
    focus:
      "Study fictional reflected, stored, and client-side script-injection risks through safe examples, output encoding, sanitization, content security policy, and trusted rendering.",
    lab:
      "Classify supplied fictional rendering cases and recommend safe encoding, sanitization, and browser-policy controls.",
  },
  {
    number: "I8.5",
    title: "Request Forgery, Clickjacking, and User Action Protection",
    slug: "request-forgery-clickjacking-and-user-action-protection",
    focus:
      "Evaluate fictional cross-site request forgery, clickjacking, unsafe state-changing actions, anti-forgery tokens, same-site cookies, origin checks, confirmations, and frame protections.",
    lab:
      "Trace a fictional sensitive action and identify which server, browser, session, and user-verification controls should protect it.",
  },
  {
    number: "I8.6",
    title: "Secure Headers, Cookies, TLS, and Configuration",
    slug: "secure-headers-cookies-tls-and-configuration",
    focus:
      "Review fictional HTTPS, certificates, transport security, cookie attributes, browser headers, error handling, debug settings, default accounts, and secure configuration baselines.",
    lab:
      "Compare a fictional application configuration with a defensive baseline and write a prioritized remediation plan.",
  },
  {
    number: "I8.7",
    title: "Web Logs, Alerts, and Defensive Investigation",
    slug: "web-logs-alerts-and-defensive-investigation",
    focus:
      "Correlate fictional web-server, application, authentication, session, proxy, browser, database, user, and business records into evidence-based findings.",
    lab:
      "Build a normalized fictional timeline that separates requests, control actions, user activity, account activity, application impact, and evidence gaps.",
  },
  {
    number: "I8.8",
    title: "Web Security Defense Lab",
    slug: "web-security-defense-lab",
    focus:
      "Integrate application architecture, authentication, sessions, input handling, browser defense, request protection, configuration, logging, response, validation, and closure.",
    lab:
      "Produce a portfolio-ready fictional Web Security Defense Case Report using supplied safe evidence and defensive decision-making.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Map the application",
    detail:
      "Identify the fictional users, browser, client, server, routes, APIs, authentication, sessions, data stores, third parties, and business functions.",
  },
  {
    step: "2",
    title: "Identify trust boundaries",
    detail:
      "Mark where fictional user input, cookies, tokens, requests, files, headers, APIs, and external services cross into trusted processing.",
  },
  {
    step: "3",
    title: "Review preventive controls",
    detail:
      "Evaluate fictional validation, parameterization, encoding, authorization, session protection, browser policy, secure configuration, and least privilege.",
  },
  {
    step: "4",
    title: "Correlate defensive evidence",
    detail:
      "Use fictional web, application, identity, browser, proxy, database, user, and business records to build a defensible timeline.",
  },
  {
    step: "5",
    title: "Respond narrowly",
    detail:
      "Recommend fictional containment and remediation that addresses the confirmed weakness without disrupting unrelated application functions.",
  },
  {
    step: "6",
    title: "Validate and close",
    detail:
      "Test expected legitimate use and unsafe conditions, confirm owners, monitor behavior, document gaps, and record residual risk.",
  },
];

const objectives = [
  "Explain how fictional browsers, web servers, applications, APIs, sessions, cookies, databases, and users interact.",
  "Identify defensive controls for authentication, authorization, session handling, untrusted input, rendering, state-changing requests, and browser security.",
  "Evaluate fictional web-security findings using direct evidence, reasonable conclusions, alternative explanations, confidence, and evidence gaps.",
  "Separate suspicious requests, blocked activity, user actions, account activity, application behavior, data access, and confirmed business impact.",
  "Recommend narrow remediation with accountable owners, positive validation, negative validation, rollback, monitoring, and residual risk.",
  "Create a portfolio-ready fictional Web Security Defense Case Report using safe, inert, authorized evidence.",
];

const evidencePreview = [
  "A fictional user signs in through the approved application route.",
  "The application creates a fictional session cookie with secure attributes.",
  "A later request targets an administrative function from the same session.",
  "The application log records an authorization denial.",
  "The reverse proxy records the request and response status.",
  "No fictional database change or business action follows.",
];

const portfolioItems = [
  "Application architecture and trust-boundary map",
  "Authentication, session, and authorization worksheet",
  "Input-validation and output-encoding review",
  "Browser and request-protection control matrix",
  "Secure configuration and header baseline",
  "Normalized investigation timeline",
  "Findings with facts, confidence, impact, and owners",
  "Remediation, validation, monitoring, rollback, and closure plan",
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
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-cyan-950/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
          {number}
        </span>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
          Live
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>

      <div className="mt-5 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
          Lesson focus
        </p>
        <p className="mt-2 text-sm leading-7 text-blue-50">{focus}</p>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
          Defensive lab
        </p>
        <p className="mt-2 text-sm leading-7 text-emerald-50">{lab}</p>
      </div>

      <Link
        href={`${modulePath}/${slug}`}
        className="mt-5 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Open {number}
      </Link>
    </article>
  );
}

export default function WebSecurityDefenseModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_58%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-200">
              Module I8
            </span>

            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              In Progress
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8: Web Security Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders protect fictional web applications by mapping
            requests and trust boundaries, strengthening authentication and
            sessions, controlling untrusted input, protecting browser actions,
            improving configuration, correlating logs, validating fixes, and
            documenting evidence-based conclusions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I8.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Lessons", "8", "Eight connected lessons with a final integrated defensive lab."],
            ["Module test", "25 questions", "Hidden answers and explanations after each response."],
            ["Portfolio", "1 case report", "A fictional Web Security Defense Case Report."],
            ["Safety", "Defensive only", "No real exploitation, payload execution, account access, or unauthorized testing."],
          ].map(([label, value, detail]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              Main question
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              How can defenders reduce web-application risk without breaking
              legitimate user and business workflows?
            </h2>

            <p className="mt-4 leading-8 text-cyan-50">
              This module treats web security as an evidence and engineering
              problem. Students identify what the application should do, where
              trust changes, which controls should apply, what the logs prove,
              how to fix weaknesses narrowly, and how to validate both security
              and normal use.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
              Safety boundary
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Fictional, inert, authorized, and defensive
            </h2>

            <p className="mt-4 leading-8">
              All requests, pages, inputs, cookies, tokens, sessions, accounts,
              logs, devices, servers, databases, users, and organizations are
              fictional. Students analyze supplied safe evidence and defensive
              patterns. They do not test real websites, create harmful payloads,
              bypass access controls, access accounts, run exploit tools, or
              collect private data.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Professional workflow
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Six Steps Used Throughout Module I8
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

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            What You Will Be Able to Do
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

                <p className="text-sm font-semibold leading-7 text-blue-50">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>


        <section>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module lessons
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Eight Lessons from Architecture to Integrated Defense
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.number} {...lesson} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Fictional evidence preview
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            One Request, Several Evidence Layers
          </h2>

          <div className="mt-6 grid gap-3">
            {evidencePreview.map((item, index) => (
              <div
                key={item}
                className="grid gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4 md:grid-cols-[0.12fr_1fr]"
              >
                <p className="font-mono font-black text-cyan-300">
                  0{index + 1}
                </p>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
            <p className="font-black">Evidence-based conclusion</p>
            <p className="mt-2 leading-7">
              The fictional administrative request was attempted and denied by
              authorization controls. The available application and database
              evidence shows no confirmed state change. The investigation still
              documents the request source, session, user context, control
              action, monitoring, and any missing evidence.
            </p>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
              Portfolio outcome
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              Web Security Defense Case Report
            </h2>

            <p className="mt-4 leading-8 text-purple-50">
              By the end of I8.8, you will produce one integrated fictional case
              report that demonstrates application mapping, defensive control
              analysis, investigation, remediation, validation, monitoring, and
              professional closure.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {portfolioItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-purple-300/25 bg-slate-950/60 p-4 text-sm font-semibold leading-6 text-purple-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Module assessment
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              I8 Module Test
            </h2>

            <p className="mt-4 leading-8 text-emerald-50">
              Complete a twenty-five-question assessment covering application
              architecture, HTTP, authentication, sessions, access control,
              input handling, browser defense, request protection, secure
              configuration, logs, investigation, validation, and closure.
            </p>

            <div className="mt-5 rounded-xl border border-emerald-300/25 bg-slate-950/60 p-4 text-sm leading-7 text-emerald-50">
              Choices appear first. Answers and explanations remain hidden until
              the student reveals them through the quiz component.
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="mt-5 inline-flex rounded-xl bg-emerald-300 px-6 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
            >
              Open I8 Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Begin Web Security Defense
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I8.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}