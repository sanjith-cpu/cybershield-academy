import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const previousModule =
  "/high-school/intermediate/logs-and-event-monitoring";
const modulePath =
  "/high-school/intermediate/defensive-security-tools";
const nextModule =
  "/high-school/intermediate/identity-and-access-management";

const lessons = [
  {
    number: "I5.1",
    title: "Defensive Tooling and Safe Use",
    slug: "defensive-tooling-and-safe-use",
    focus:
      "Introduce the purpose, limits, ownership, authorization, evidence handling, change control, validation, and documentation expectations that guide professional defensive-tool use.",
    lab:
      "Review a fictional tool request and produce an Authorized Tool Use Plan covering scope, owner, data sources, safety boundary, evidence handling, rollback, validation, and reporting.",
    skills: [
      "Tool purpose and evidence limits",
      "Authorization and scope",
      "Read-only versus change-capable actions",
      "Ownership, rollback, and validation",
    ],
  },
  {
    number: "I5.2",
    title: "Endpoint Protection and EDR Concepts",
    slug: "endpoint-protection-and-edr-concepts",
    focus:
      "Study how endpoint protection and endpoint detection and response tools observe processes, files, services, users, devices, alerts, prevention actions, isolation states, and recovery evidence.",
    lab:
      "Analyze a fictional endpoint alert packet and separate the detection label, recorded behavior, control action, execution evidence, persistence evidence, gaps, confidence, and safe next step.",
    skills: [
      "Detection versus prevention",
      "Process, file, user, and device context",
      "Alert severity limitations",
      "Containment and recovery validation",
    ],
  },
  {
    number: "I5.3",
    title: "Firewalls and Network Security Tools",
    slug: "firewalls-and-network-security-tools",
    focus:
      "Explore host and network firewalls, access rules, zones, directions, ports, protocols, applications, connection states, network monitoring, and the difference between a policy decision and a complete security conclusion.",
    lab:
      "Review a fictional firewall-rule change and build a Rule Validation Worksheet containing business purpose, source, destination, service, owner, least privilege, test, rollback, evidence, and monitoring.",
    skills: [
      "Firewall rules and network zones",
      "Allow, deny, reject, and drop outcomes",
      "Least-privilege network access",
      "Rule testing and post-change monitoring",
    ],
  },
  {
    number: "I5.4",
    title: "Vulnerability Scanners and Configuration Assessment",
    slug: "vulnerability-scanners-and-configuration-assessment",
    focus:
      "Learn how authorized scanners and configuration-assessment tools identify missing updates, exposed services, weak settings, software versions, evidence quality, false positives, and remediation priorities.",
    lab:
      "Evaluate a fictional scan report without running any scans. Confirm asset ownership, finding evidence, exposure, exploitability context, business impact, compensating controls, priority, owner, and validation plan.",
    skills: [
      "Authorized assessment scope",
      "Finding evidence and confidence",
      "Exposure and business impact",
      "Remediation ownership and validation",
    ],
  },
  {
    number: "I5.5",
    title: "SIEM and Log Management Basics",
    slug: "siem-and-log-management-basics",
    focus:
      "Examine how security information and event management tools collect, normalize, search, correlate, alert, retain, and display evidence from identity, endpoint, system, application, network, web, and cloud sources.",
    lab:
      "Review a fictional SIEM correlation rule and document its data sources, fields, time window, trigger logic, evidence limits, expected patterns, false-positive risks, tuning options, owner, and validation.",
    skills: [
      "Collection and normalization",
      "Search and correlation",
      "Alert-rule logic",
      "Retention, tuning, and evidence gaps",
    ],
  },
  {
    number: "I5.6",
    title: "Email, Web, and DNS Security Controls",
    slug: "email-web-and-dns-security-controls",
    focus:
      "Study how email gateways, secure web gateways, DNS filters, browser protections, reputation systems, attachment controls, URL analysis, policy decisions, and user reporting support layered defense.",
    lab:
      "Analyze a fictional message-and-web-control sequence and identify what each layer observed, allowed, blocked, rewritten, quarantined, or reported without accessing any real message, file, or website.",
    skills: [
      "Layered email and web defense",
      "DNS and reputation context",
      "Policy actions and evidence limits",
      "User reporting and safe escalation",
    ],
  },
  {
    number: "I5.7",
    title: "Tool Validation, Tuning, and False Positives",
    slug: "tool-validation-tuning-and-false-positives",
    focus:
      "Learn how defenders validate tool health, data freshness, coverage, rules, thresholds, exclusions, alerts, baselines, false positives, false negatives, ownership, and change history.",
    lab:
      "Tune a fictional monitoring rule using supplied evidence. Preserve the original logic, identify noisy expected patterns, protect high-risk coverage, propose a narrow change, test it, document rollback, and monitor the outcome.",
    skills: [
      "Tool-health validation",
      "False positives and false negatives",
      "Safe threshold and rule tuning",
      "Change records, rollback, and monitoring",
    ],
  },
  {
    number: "I5.8",
    title: "Defensive Tool Analysis Lab",
    slug: "defensive-tool-analysis-lab",
    focus:
      "Integrate endpoint, firewall, vulnerability, SIEM, email, web, DNS, inventory, change, owner, and validation evidence into one professional defensive-tool review.",
    lab:
      "Complete a fictional Tool Effectiveness Review that compares five tools, identifies coverage and visibility gaps, separates alerts from verified findings, prioritizes improvements, and produces an executive summary.",
    skills: [
      "Multi-tool evidence correlation",
      "Coverage and visibility gaps",
      "Tool effectiveness and limitations",
      "Prioritized defensive improvement plan",
    ],
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the defensive question",
    detail:
      "Identify the fictional asset, user, application, business function, tool, time window, owner, and decision the review must support.",
  },
  {
    step: "2",
    title: "Confirm authorization and scope",
    detail:
      "Record who approved the work, which systems and evidence are included, which actions are read-only, and which changes require separate approval.",
  },
  {
    step: "3",
    title: "Preserve tool and source evidence",
    detail:
      "Capture original alerts, findings, rules, timestamps, fields, actions, tool-health state, data freshness, source records, and known limitations.",
  },
  {
    step: "4",
    title: "Correlate and validate",
    detail:
      "Compare the tool output with identity, endpoint, system, application, network, web, inventory, change, owner, and business evidence.",
  },
  {
    step: "5",
    title: "Document action and outcome",
    detail:
      "State facts, conclusions, alternatives, gaps, confidence, impact, owner, narrow authorized action, rollback, validation, monitoring, and residual risk.",
  },
];

const objectives = [
  "Explain the purpose and limitations of major defensive security-tool categories.",
  "Distinguish tool alerts, observations, prevention actions, findings, and verified conclusions.",
  "Use authorization, scope, ownership, least privilege, rollback, and validation when reviewing or changing defensive controls.",
  "Correlate tool output with original identity, endpoint, system, application, network, web, inventory, and change evidence.",
  "Evaluate tool health, data freshness, visibility, false positives, false negatives, thresholds, exclusions, and coverage gaps.",
  "Create a professional fictional Defensive Tool Effectiveness Report with evidence, confidence, impact, priorities, owners, and safe recommendations.",
];

const evidencePreview = [
  {
    time: "10:00:00",
    source: "Change ticket",
    event:
      "Approved fictional monitoring-rule review begins for the report environment.",
    meaning:
      "Provides owner, scope, expected behavior, test plan, rollback, and maintenance context.",
  },
  {
    time: "10:02:12",
    source: "SIEM",
    event:
      "Correlation rule produces twelve alerts for repeated report-service restarts.",
    meaning:
      "Confirms the rule triggered but does not establish the reason for the restarts.",
  },
  {
    time: "10:03:00",
    source: "Application owner",
    event:
      "Eight restarts match a documented deployment test.",
    meaning:
      "Explains part of the alert volume using approved business context.",
  },
  {
    time: "10:04:16",
    source: "System logs",
    event:
      "Three restarts follow automatic recovery after a temporary dependency failure.",
    meaning:
      "Separates a second operational pattern from the deployment activity.",
  },
  {
    time: "10:05:44",
    source: "Endpoint evidence",
    event:
      "One restart remains linked to an unknown process and requires focused review.",
    meaning:
      "Shows why the rule should not be disabled merely because many alerts were expected.",
  },
  {
    time: "10:10:00",
    source: "Approved tuning plan",
    event:
      "Rule excludes the exact deployment test identifier but preserves recovery and unknown-process coverage.",
    meaning:
      "Demonstrates narrow tuning rather than broad suppression.",
  },
];

const portfolioParts = [
  {
    title: "Tool Inventory",
    detail:
      "List each fictional defensive tool, owner, purpose, data sources, protected assets, actions, retention, health checks, and evidence limitations.",
  },
  {
    title: "Coverage Map",
    detail:
      "Show which identity, endpoint, system, application, network, email, web, DNS, and cloud evidence each tool can and cannot observe.",
  },
  {
    title: "Alert and Finding Matrix",
    detail:
      "Separate raw alerts, direct observations, prevention actions, verified findings, false positives, evidence gaps, confidence, and impact.",
  },
  {
    title: "Validation Plan",
    detail:
      "Define safe checks for data freshness, rule logic, tool health, prevention state, recovery, user impact, and expected business function.",
  },
  {
    title: "Improvement Roadmap",
    detail:
      "Prioritize tuning, ownership, documentation, integration, visibility, maintenance, training, and follow-up monitoring.",
  },
  {
    title: "Executive Summary",
    detail:
      "Explain the strongest findings, tool strengths, limitations, highest-priority improvements, owners, confidence, and residual risk.",
  },
];

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
      </Link>
      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}


export default function DefensiveSecurityToolsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              8 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5: Defensive Security Tools
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders use endpoint protection, firewalls,
            vulnerability and configuration assessment, SIEM, email, web, DNS,
            and monitoring tools safely—without confusing tool output with a
            complete conclusion.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Level", "Intermediate"],
              ["Lessons", "8"],
              ["Assessment", "25 questions"],
              ["Portfolio", "Tool Effectiveness Report"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-lg font-black text-cyan-100">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Main Question
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              How can defenders use security tools to make stronger decisions
              without trusting alerts blindly?
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Security tools collect, filter, compare, detect, block, alert,
              scan, and summarize. They are valuable because they increase
              visibility and consistency. They are limited because every tool
              has scope, data, configuration, timing, ownership, and evidence
              boundaries. Professional defenders preserve the output, return to
              original evidence, add business context, validate the conclusion,
              and document what the tool cannot prove.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
              Safety Boundary
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Fictional, Authorized, and Defensive
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              Every account, device, address, domain, alert, rule, scan result,
              path, ticket, and organization in this module is fictional.
              Students review supplied evidence only. They do not scan real
              systems, alter real controls, access private data, test
              credentials, capture traffic, or visit suspicious destinations.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Use Defensive Tools in Five Controlled Steps
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Learning Objectives
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            By the End of Module I5, Students Will Be Able To
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-200">
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
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Lesson Sequence
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Eight Lessons from Tool Foundations to Integrated Analysis
            </h2>
          </div>

          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[0.3fr_1.2fr_1fr]">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                      {lesson.number}
                    </p>
                    <div className="mt-3 inline-flex rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-bold text-slate-300">
                      Lesson
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {lesson.focus}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {lesson.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                        Defensive Lab
                      </p>
                      <p className="mt-3 text-sm leading-6 text-emerald-50">
                        {lesson.lab}
                      </p>
                    </div>

                    <Link
                      href={`${modulePath}/${lesson.slug}`}
                      className="mt-5 inline-flex w-fit rounded-xl bg-emerald-300 px-4 py-2 font-black text-slate-950 transition hover:bg-emerald-200"
                    >
                      Open {lesson.number}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Evidence Preview
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A Tool Alert Is the Beginning of Review, Not the End
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            The preview below shows how one noisy SIEM rule can contain expected
            deployment activity, operational recovery events, and one
            unresolved finding. The correct response is not to trust every
            alert equally or disable the rule completely. It is to separate the
            patterns and tune only what the evidence supports.
          </p>

          <div className="mt-6 grid gap-3">
            {evidencePreview.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.3fr_1fr_1fr]"
              >
                <p className="font-mono text-sm font-black text-cyan-300">
                  {item.time}
                </p>
                <p className="text-sm font-black text-blue-200">
                  {item.source}
                </p>
                <p className="text-sm font-semibold text-white">
                  {item.event}
                </p>
                <p className="text-sm leading-6 text-slate-300">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio Outcome
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Build a Fictional Defensive Tool Effectiveness Report
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Students finish Module I5 with a professional portfolio artifact
            that evaluates tool purpose, coverage, evidence quality, health,
            alerts, findings, limitations, tuning, ownership, validation, and
            improvement priorities.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioParts.map((part) => (
              <div
                key={part.title}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-100">{part.title}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50">
                  {part.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
            Module Assessment
          </p>
          <div className="mt-2 grid gap-6 lg:grid-cols-[1fr_0.4fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-black text-white">
                I5 Module Test: Defensive Security Tools
              </h2>
              <p className="mt-4 leading-7 text-blue-50">
                Complete a 25-question assessment covering tool safety,
                authorization, endpoint protection, firewalls, vulnerability
                and configuration assessment, SIEM, email and web controls,
                tool health, false positives, false negatives, tuning,
                validation, and integrated tool analysis.
              </p>
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex justify-center rounded-xl bg-blue-300 px-5 py-3 font-black text-slate-950 transition hover:bg-blue-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue the Intermediate Track
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}