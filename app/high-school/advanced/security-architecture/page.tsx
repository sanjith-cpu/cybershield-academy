import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/security-architecture`;
const previousModule =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const nextModule = `${trackPath}/threat-modeling`;

const lessons = [
  {
    "number": "A2.1",
    "title": "What Security Architecture Means",
    "slug": "what-security-architecture-means",
    "summary": "Define security architecture as the intentional arrangement of systems, identities, data, networks, controls, trust relationships, visibility, resilience, and ownership.",
    "skills": [
      "Separate architecture from individual tools",
      "Map business purpose to security design",
      "Identify assets, dependencies, owners, and assumptions",
      "Explain how architecture affects prevention, detection, response, and recovery"
    ],
    "portfolio": "Create a fictional security-architecture purpose statement and system context map."
  },
  {
    "number": "A2.2",
    "title": "Defense-in-Depth Design",
    "slug": "defense-in-depth-design",
    "summary": "Design multiple coordinated safeguards so one failed control does not automatically expose an entire fictional system or service.",
    "skills": [
      "Distinguish preventive, detective, corrective, and recovery controls",
      "Avoid duplicated controls that fail for the same reason",
      "Map control layers to assets and trust boundaries",
      "Validate whether each layer produces independent protection"
    ],
    "portfolio": "Build a fictional defense-in-depth control stack with failure and recovery paths."
  },
  {
    "number": "A2.3",
    "title": "Trust Boundaries and Security Zones",
    "slug": "trust-boundaries-and-security-zones",
    "summary": "Identify where identities, data, authority, ownership, networks, services, and assumptions change across a fictional architecture.",
    "skills": [
      "Recognize trust changes and security zones",
      "Document allowed and denied data flows",
      "Assign validation at boundary crossings",
      "Avoid assuming internal systems are automatically trusted"
    ],
    "portfolio": "Create a fictional trust-boundary diagram and boundary-control matrix."
  },
  {
    "number": "A2.4",
    "title": "Network Segmentation Strategy",
    "slug": "network-segmentation-strategy",
    "summary": "Use fictional segmentation to limit unnecessary communication, reduce impact, improve monitoring, and support recovery without creating brittle operations.",
    "skills": [
      "Group systems by purpose, sensitivity, ownership, and dependency",
      "Define approved communication paths conceptually",
      "Balance isolation with service availability",
      "Document exceptions, validation, and change ownership"
    ],
    "portfolio": "Design a fictional segmentation strategy and communication-allowlist review."
  },
  {
    "number": "A2.5",
    "title": "Identity-Centered Architecture",
    "slug": "identity-centered-architecture",
    "summary": "Treat identity, authentication, authorization, privilege, service accounts, lifecycle, and monitoring as central architectural controls.",
    "skills": [
      "Map human, service, device, and workload identities",
      "Separate authentication from authorization",
      "Apply least privilege and lifecycle ownership",
      "Plan identity logging, review, and recovery"
    ],
    "portfolio": "Create a fictional identity architecture with role, privilege, lifecycle, and monitoring maps."
  },
  {
    "number": "A2.6",
    "title": "Logging and Visibility by Design",
    "slug": "logging-and-visibility-by-design",
    "summary": "Plan fictional telemetry, context, time, ownership, retention, health, and access before incidents occur.",
    "skills": [
      "Choose evidence sources for defender questions",
      "Design source-health and time-quality checks",
      "Protect log privacy and integrity",
      "Connect visibility to triage, validation, and improvement"
    ],
    "portfolio": "Build a fictional visibility architecture and evidence-coverage map."
  },
  {
    "number": "A2.7",
    "title": "Resilience and Recovery Planning",
    "slug": "resilience-and-recovery-planning",
    "summary": "Design fictional services to continue safely, degrade predictably, restore from known states, and validate recovery after disruption.",
    "skills": [
      "Identify critical functions and dependencies",
      "Compare redundancy, backup, restoration, and continuity",
      "Define recovery ownership and validation",
      "Include communication and residual risk in recovery"
    ],
    "portfolio": "Create a fictional resilience map, recovery sequence, and validation checklist."
  },
  {
    "number": "A2.8",
    "title": "Secure Defaults and Hardening Strategy",
    "slug": "secure-defaults-and-hardening-strategy",
    "summary": "Reduce unnecessary exposure through fictional secure defaults, approved baselines, least functionality, configuration ownership, exception handling, and change validation.",
    "skills": [
      "Distinguish defaults, baselines, hardening, and exceptions",
      "Reduce unnecessary services, access, and data",
      "Preserve usability, supportability, and recovery",
      "Validate effective state rather than written intent alone"
    ],
    "portfolio": "Develop a fictional secure-baseline and exception-management package."
  },
  {
    "number": "A2.9",
    "title": "Architecture Tradeoffs and Constraints",
    "slug": "architecture-tradeoffs-and-constraints",
    "summary": "Compare fictional security, privacy, cost, performance, usability, complexity, reliability, legal, supplier, and time constraints without hiding residual risk.",
    "skills": [
      "Separate requirements from preferences",
      "Compare options using consistent criteria",
      "Identify second-order and long-term effects",
      "Document owner decisions and residual risk"
    ],
    "portfolio": "Create a fictional architecture decision record with options, tradeoffs, and owner signoff."
  },
  {
    "number": "A2.10",
    "title": "Security Architecture Design Lab",
    "slug": "security-architecture-design-lab",
    "summary": "Integrate all A2 concepts into a complete fictional architecture review involving trust, identity, segmentation, visibility, resilience, hardening, tradeoffs, and validation.",
    "skills": [
      "Build a defensible architecture from requirements",
      "Map trust boundaries and control layers",
      "Compare design alternatives and failure modes",
      "Communicate the final design to technical and leadership audiences"
    ],
    "portfolio": "Produce a complete fictional security architecture package and executive design brief."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Understand the mission",
    "description": "Define the fictional service purpose, users, critical functions, success conditions, operating environment, and business constraints.",
    "output": "Mission and architecture-context statement"
  },
  {
    "step": "2",
    "title": "Inventory assets and dependencies",
    "description": "Map fictional systems, identities, data, networks, suppliers, services, owners, locations, and operational dependencies.",
    "output": "Asset, identity, data, and dependency inventory"
  },
  {
    "step": "3",
    "title": "Draw trust boundaries and flows",
    "description": "Show where ownership, authority, sensitivity, network, identity, and control assumptions change.",
    "output": "Trust-boundary and data-flow diagram"
  },
  {
    "step": "4",
    "title": "Define security requirements",
    "description": "Translate fictional risks, obligations, privacy needs, service goals, and recovery expectations into measurable design requirements.",
    "output": "Security and resilience requirements register"
  },
  {
    "step": "5",
    "title": "Design layered controls",
    "description": "Combine prevention, detection, response, recovery, identity, segmentation, logging, hardening, and governance controls.",
    "output": "Defense-in-depth architecture"
  },
  {
    "step": "6",
    "title": "Analyze failures and tradeoffs",
    "description": "Test fictional assumptions, control dependencies, bypass paths, outages, privacy effects, usability costs, supplier limits, and recovery challenges.",
    "output": "Failure-mode and tradeoff matrix"
  },
  {
    "step": "7",
    "title": "Assign ownership",
    "description": "Name fictional design, system, identity, data, network, service, logging, recovery, supplier, communication, and risk owners.",
    "output": "Architecture responsibility map"
  },
  {
    "step": "8",
    "title": "Validate the design",
    "description": "Use fictional reviews, evidence, test cases, diagrams, configuration checks, control checks, and recovery exercises.",
    "output": "Architecture validation plan"
  },
  {
    "step": "9",
    "title": "Communicate the decision",
    "description": "Create technical, service-owner, leadership, privacy, and portfolio views from one approved architecture fact set.",
    "output": "Multi-audience architecture package"
  },
  {
    "step": "10",
    "title": "Govern change",
    "description": "Define fictional versioning, exceptions, approvals, monitoring, review cadence, retirement, and residual-risk ownership.",
    "output": "Architecture lifecycle and governance plan"
  }
];
const objectives = [
  "Explain security architecture as a coordinated system of trust, identity, data, network, control, visibility, resilience, and ownership decisions.",
  "Design fictional defense-in-depth controls that do not all fail for the same reason.",
  "Identify and document fictional trust boundaries, zones, communication paths, dependencies, and validation points.",
  "Create identity-centered, visibility-aware, resilient, and securely configured fictional architectures.",
  "Compare fictional architecture options using security, privacy, service, usability, performance, cost, complexity, supplier, and recovery criteria.",
  "Assign fictional owners for design, systems, identities, data, networks, services, logs, recovery, suppliers, communication, and residual risk.",
  "Validate fictional architecture decisions using evidence, failure cases, recovery tests, review records, and measurable outcomes.",
  "Build a portfolio-ready fictional architecture package that is safe, defensive, non-operational, and fully invented."
];
const evidencePreview = [
  {
    "id": "ARCH-01",
    "source": "Fictional system context diagram",
    "observation": "A public application, identity provider, internal service, database, logging platform, and backup service exchange information.",
    "supports": "The architecture contains multiple ownership and trust changes.",
    "limits": "Does not prove the actual controls or allowed paths are correct.",
    "design_use": "Use it to identify trust boundaries, dependencies, owners, and validation questions."
  },
  {
    "id": "ARCH-02",
    "source": "Fictional access matrix",
    "observation": "One support role can reach application, identity, database, and backup administration functions.",
    "supports": "Privilege concentration may increase impact and weaken separation of duties.",
    "limits": "Does not prove misuse occurred.",
    "design_use": "Review identity architecture, least privilege, approval, and emergency access."
  },
  {
    "id": "ARCH-03",
    "source": "Fictional network-flow record",
    "observation": "The application can communicate directly with systems outside the documented service zone.",
    "supports": "Segmentation and boundary assumptions may not match effective behavior.",
    "limits": "Does not prove harmful traffic occurred.",
    "design_use": "Compare intended and effective paths and assign corrective validation."
  },
  {
    "id": "ARCH-04",
    "source": "Fictional logging coverage map",
    "observation": "Identity and application events are visible, but database and backup administrative actions are not included.",
    "supports": "Important defender questions may be unanswerable.",
    "limits": "Does not prove an incident occurred.",
    "design_use": "Expand evidence coverage while protecting privacy, retention, integrity, and source health."
  },
  {
    "id": "ARCH-05",
    "source": "Fictional recovery exercise",
    "observation": "Application service returns, but identity synchronization and logging remain incomplete.",
    "supports": "Technical availability alone does not prove full recovery.",
    "limits": "Does not prove every future recovery will fail.",
    "design_use": "Define multi-system recovery sequence and validation gates."
  },
  {
    "id": "ARCH-06",
    "source": "Fictional architecture decision record",
    "observation": "A simpler design has lower cost but concentrates identity, application, and logging responsibilities in one platform.",
    "supports": "The design has efficiency benefits and correlated-failure risk.",
    "limits": "Does not determine the correct choice without mission and risk context.",
    "design_use": "Compare options and document owner acceptance of residual risk."
  }
];
const portfolioArtifacts = [
  "Fictional mission, system context, users, critical functions, and architecture assumptions",
  "Asset, identity, data, service, network, supplier, location, and dependency inventory",
  "Trust-boundary, security-zone, and approved data-flow diagrams",
  "Defense-in-depth control map with prevention, detection, response, recovery, and governance layers",
  "Identity architecture covering human, service, device, workload, privilege, lifecycle, and monitoring",
  "Segmentation and communication-path review with exceptions and validation",
  "Logging and visibility architecture with source health, time quality, privacy, retention, and access",
  "Resilience, backup, restoration, continuity, rollback, and recovery-validation package",
  "Secure-baseline, hardening, exception, effective-state, and change-control plan",
  "Architecture options, failure modes, tradeoffs, decision record, owner signoff, and residual risk",
  "Technical architecture review and leadership-ready executive brief",
  "Full fictionalization, safety boundary, revision history, and portfolio reflection"
];
const risks = [
  {
    "risk": "Tool-first architecture",
    "description": "Choosing fictional products or controls before defining mission, assets, trust, data, users, dependencies, and requirements.",
    "control": "Begin with context, requirements, and ownership before selecting design patterns."
  },
  {
    "risk": "Flat trust assumptions",
    "description": "Treating all fictional internal systems, users, devices, services, and networks as equally trusted.",
    "control": "Identify trust changes and validate every boundary crossing."
  },
  {
    "risk": "Correlated control failure",
    "description": "Using several fictional controls that depend on the same identity, platform, data source, administrator, or network path.",
    "control": "Review independence, diversity, failure modes, and fallback paths."
  },
  {
    "risk": "Invisible architecture",
    "description": "Designing fictional controls without evidence sources, source-health checks, time quality, and review ownership.",
    "control": "Plan logging and validation as part of the architecture rather than an afterthought."
  },
  {
    "risk": "Brittle segmentation",
    "description": "Creating fictional isolation that breaks service dependencies or leads to uncontrolled exceptions.",
    "control": "Map approved flows, service context, exception ownership, monitoring, and recovery."
  },
  {
    "risk": "Privilege concentration",
    "description": "Allowing one fictional identity or team to administer too many security-critical functions.",
    "control": "Use least privilege, role separation, approval, temporary access, monitoring, and review."
  },
  {
    "risk": "Recovery mismatch",
    "description": "Restoring one fictional system while identity, logging, data consistency, dependencies, and communication remain incomplete.",
    "control": "Validate recovery as an end-to-end service outcome."
  },
  {
    "risk": "Unmanaged architecture drift",
    "description": "Allowing fictional systems, data flows, exceptions, suppliers, identities, and controls to change without review.",
    "control": "Use architecture versioning, change control, evidence, review cadence, and owner signoff."
  }
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
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
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
      </Link>

      <Link
        href={`${modulePath}/what-security-architecture-means`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A2.1
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-bold text-emerald-100 transition hover:bg-emerald-400/20"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function SecurityArchitectureModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-purple-200">
              Module A2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              10 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2 Security Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional systems in which
            trust, identity, data, networks, controls, visibility, resilience,
            ownership, and change work together. This module moves beyond
            isolated tools and focuses on the complete security design.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Module", "A2", "Second module in the High School Advanced track."],
            ["Lessons", "10", "Ten architecture lessons plus one module assessment."],
            ["Assessment", "25", "Twenty-five hidden-answer questions after A2.10."],
            ["Portfolio", "1", "One integrated fictional security architecture package."],
          ].map(([label, value, detail]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                {label}
              </p>
              <p className="mt-3 text-4xl font-black text-white">{value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
            </article>
          ))}
        </section>

        <SectionCard
          eyebrow="Main Question"
          title="How Do Professionals Design Systems That Stay Secure When Individual Controls Fail?"
        >
          <p className="max-w-4xl leading-8">
            Security architecture is not a diagram filled with products. It is
            a documented set of fictional decisions about mission, trust,
            identities, data, networks, services, dependencies, prevention,
            detection, response, recovery, ownership, evidence, exceptions, and
            change. A strong design does not assume perfection. It expects
            controls, people, suppliers, data sources, and services to fail—and
            provides safe, visible, recoverable outcomes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Design for failure",
                "Assume that fictional identities, controls, services, logs, and dependencies may become unavailable or unreliable.",
              ],
              [
                "Design for evidence",
                "Make important fictional decisions and boundary crossings visible, traceable, reviewable, and privacy-aware.",
              ],
              [
                "Design for recovery",
                "Preserve critical functions, known restore points, owner coordination, communication, and measurable validation.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safety Boundary"
          title="Architecture Learning Must Remain Fictional, Defensive, and Non-Operational"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                This module includes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>Invented organizations, systems, identities, data flows, logs, diagrams, services, and decisions.</li>
                <li>Conceptual defensive architecture, ownership, tradeoff, monitoring, resilience, and validation exercises.</li>
                <li>Static evidence analysis and safe portfolio artifacts.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                This module does not authorize
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>Accessing, scanning, testing, bypassing, changing, or investigating real systems.</li>
                <li>Using real credentials, private records, internal diagrams, configuration exports, logs, or supplier information.</li>
                <li>Operational instructions for evading controls or exploiting architecture weaknesses.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Ten Steps from Mission to Governed Architecture
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.42fr_1fr] lg:items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Required output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Module Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              A2 Lesson Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Complete All Ten Lessons
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              Each lesson uses fictional architecture evidence, professional
              reasoning, safe case decisions, hidden-answer checks, and a
              portfolio artifact.
            </p>
          </div>

          <div className="grid gap-6">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70"
              >
                <div className="grid gap-0 lg:grid-cols-[0.28fr_1fr]">
                  <div className="border-b border-slate-800 bg-[linear-gradient(145deg,_rgba(34,211,238,0.15),_rgba(15,23,42,0.9))] p-6 lg:border-b-0 lg:border-r">
                    <p className="text-4xl font-black text-cyan-200">
                      {lesson.number}
                    </p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                      Lesson {index + 1} of 10
                    </p>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-slate-300">
                      {lesson.summary}
                    </p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                          Core skills
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                          {lesson.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                          Portfolio outcome
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {lesson.portfolio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`${modulePath}/${lesson.slug}`}
                        className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Open {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Architecture Evidence You Will Learn to Analyze
          </h2>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Design use", item.design_use],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Architecture Risk Preview"
          title="Common Design Failures You Will Learn to Recognize"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {risks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.risk}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong control
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Outcome"
          title="Build a Complete Fictional Security Architecture Package"
        >
          <p className="max-w-4xl leading-8">
            By the end of A2, you will have one connected architecture package
            rather than ten unrelated worksheets. Each lesson adds a new layer
            to the same fictional organization and concludes with an integrated
            design lab.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {portfolioArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-4 text-sm leading-6 text-purple-50"
              >
                <span className="mr-2 font-black text-purple-200">
                  {index + 1}.
                </span>
                {artifact}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Every artifact must use invented organizations, systems, identities,
            data, logs, diagrams, services, suppliers, decisions, dates, and
            outcomes. Do not upload or reproduce real internal architecture,
            configurations, credentials, private records, or confidential
            technical information.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-200">
            A2 Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Complete the 25-Question Assessment
          </h2>
          <p className="mt-4 max-w-3xl leading-7">
            After A2.10, test your ability to reason about mission, trust,
            defense in depth, segmentation, identity, visibility, resilience,
            hardening, tradeoffs, ownership, evidence, validation, and
            architecture governance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
            >
              Open A2 Module Test
            </Link>

            <Link
              href={`${modulePath}/security-architecture-design-lab`}
              className="rounded-xl border border-purple-300/50 px-5 py-3 font-bold text-purple-100 transition hover:bg-purple-300/10"
            >
              Review A2.10 First
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Begin Security Architecture
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Start with the meaning and purpose of security architecture before
            moving into layered controls, boundaries, segmentation, identity,
            visibility, recovery, hardening, tradeoffs, and the final design
            lab.
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