import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/threat-modeling`;
const previousModule = `${trackPath}/security-architecture`;
const nextModule = `${trackPath}/advanced-networking-defense`;

const lessons = [
  {
    number: "A3.1",
    title: "Why Threat Modeling Exists",
    slug: "why-threat-modeling-exists",
    summary:
      "Explain threat modeling as a structured defensive process for understanding what matters, what could go wrong, which assumptions require review, and where design effort should be focused before problems occur.",
    skills: [
      "Explain the purpose and timing of threat modeling",
      "Separate threat modeling from prediction and fear-based guessing",
      "Connect models to design, review, and risk decisions",
      "Define a safe, authorized, fictional modeling scope",
    ],
    portfolio:
      "Create a fictional threat-model charter with purpose, scope, stakeholders, boundaries, assumptions, and review goals.",
  },
  {
    number: "A3.2",
    title: "Assets, Actors, and Entry Points",
    slug: "assets-actors-and-entry-points",
    summary:
      "Identify fictional assets that require protection, the human and non-human actors that interact with them, and the approved interfaces through which data, authority, or requests enter a system.",
    skills: [
      "Classify data, identity, service, operational, and trust assets",
      "Distinguish users, administrators, services, suppliers, and unknown actors",
      "Document interfaces without testing real systems",
      "Connect assets and entry points to owners and business purpose",
    ],
    portfolio:
      "Build a fictional asset, actor, interface, owner, and dependency register.",
  },
  {
    number: "A3.3",
    title: "Data Flows and Trust Boundaries",
    slug: "data-flows-and-trust-boundaries",
    summary:
      "Map how fictional information and requests move between components while marking changes in identity, ownership, sensitivity, authority, location, technology, and control assumptions.",
    skills: [
      "Create clear fictional data-flow diagrams",
      "Recognize meaningful trust changes",
      "Label stores, processes, actors, and transfer paths",
      "Document validation and evidence needs at boundary crossings",
    ],
    portfolio:
      "Produce a fictional data-flow and trust-boundary diagram with a boundary review table.",
  },
  {
    number: "A3.4",
    title: "Abuse Cases and Misuse Thinking",
    slug: "abuse-cases-and-misuse-thinking",
    summary:
      "Use safe, non-operational misuse thinking to describe how legitimate features, permissions, workflows, or assumptions might produce harmful outcomes without providing instructions for carrying them out.",
    skills: [
      "Write outcome-focused fictional abuse cases",
      "Avoid operational attack instructions",
      "Connect misuse possibilities to assets and controls",
      "Include accidental, process, supplier, and insider-related scenarios",
    ],
    portfolio:
      "Create a fictional abuse-case library with affected assets, preconditions, impact, existing controls, and safe review questions.",
  },
  {
    number: "A3.5",
    title: "Threat Categories Conceptually",
    slug: "threat-categories-conceptually",
    summary:
      "Use conceptual categories to organize defensive questions about identity, integrity, confidentiality, availability, privilege, accountability, privacy, safety, and dependency risk.",
    skills: [
      "Use categories as prompts rather than proof",
      "Avoid forcing every concern into one label",
      "Connect categories to system context and evidence",
      "Document uncategorized and cross-category concerns",
    ],
    portfolio:
      "Build a fictional threat-category worksheet that records questions, evidence, affected assets, and model limitations.",
  },
  {
    number: "A3.6",
    title: "Risk Ranking in Threat Models",
    slug: "risk-ranking-in-threat-models",
    summary:
      "Rank fictional threat scenarios using defined likelihood, impact, exposure, control strength, uncertainty, and business-context criteria while keeping assumptions and evidence visible.",
    skills: [
      "Define consistent fictional ranking scales",
      "Separate impact from likelihood and uncertainty",
      "Avoid false mathematical precision",
      "Record owners, evidence, assumptions, and residual risk",
    ],
    portfolio:
      "Create a fictional threat-risk matrix with scoring rationale, confidence, uncertainty, and review triggers.",
  },
  {
    number: "A3.7",
    title: "Choosing Mitigations",
    slug: "choosing-mitigations",
    summary:
      "Select fictional design, prevention, detection, response, recovery, governance, privacy, and communication safeguards that address causes and outcomes without creating unacceptable new risks.",
    skills: [
      "Map mitigations to specific modeled concerns",
      "Compare prevention, detection, response, and recovery options",
      "Identify control dependencies and side effects",
      "Assign owners, validation evidence, and completion criteria",
    ],
    portfolio:
      "Develop a fictional mitigation plan with priorities, owners, dependencies, evidence, tradeoffs, and residual risk.",
  },
  {
    number: "A3.8",
    title: "Documenting Assumptions and Limits",
    slug: "documenting-assumptions-and-limits",
    summary:
      "Record what a fictional model includes, excludes, assumes, cannot verify, and must revisit so readers do not mistake an incomplete planning artifact for a guarantee.",
    skills: [
      "Separate fact, assumption, hypothesis, and unknown",
      "Document scope exclusions and evidence gaps",
      "Set expiration dates and review triggers",
      "Communicate model confidence without hiding uncertainty",
    ],
    portfolio:
      "Create a fictional assumptions, exclusions, limitations, unknowns, and review-trigger register.",
  },
  {
    number: "A3.9",
    title: "Reviewing a Threat Model",
    slug: "reviewing-a-threat-model",
    summary:
      "Evaluate a fictional threat model for scope, completeness, consistency, evidence, owner participation, decision quality, mitigation traceability, and change readiness.",
    skills: [
      "Use structured peer and stakeholder review",
      "Check traceability from assets to mitigations",
      "Find stale assumptions and missing dependencies",
      "Document disagreements, decisions, and follow-up owners",
    ],
    portfolio:
      "Produce a fictional threat-model quality review, issue log, decision record, and revision plan.",
  },
  {
    number: "A3.10",
    title: "Threat Modeling Workshop Lab",
    slug: "threat-modeling-workshop-lab",
    summary:
      "Integrate the complete A3 process in a safe fictional workshop covering scope, assets, actors, entry points, data flows, boundaries, abuse cases, categories, ranking, mitigations, assumptions, and review.",
    skills: [
      "Facilitate a structured fictional modeling workshop",
      "Maintain evidence and decision traceability",
      "Balance technical, privacy, service, and leadership perspectives",
      "Communicate prioritized outcomes without operational attack detail",
    ],
    portfolio:
      "Produce a complete fictional threat-model package and leadership-ready defensive summary.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the decision",
    description:
      "State which fictional design, service, change, workflow, or risk decision the model is expected to support.",
    output: "Threat-model purpose and decision statement",
  },
  {
    step: "2",
    title: "Set scope and boundaries",
    description:
      "Document fictional systems, environments, interfaces, teams, data, suppliers, time periods, exclusions, and authorization limits.",
    output: "Scope, exclusion, and safety charter",
  },
  {
    step: "3",
    title: "Understand the system",
    description:
      "Describe the fictional mission, users, critical functions, components, owners, dependencies, data, and expected behavior.",
    output: "System context and dependency map",
  },
  {
    step: "4",
    title: "Identify assets and actors",
    description:
      "Record what requires protection and which fictional human, service, device, workload, supplier, and unknown actors interact with it.",
    output: "Asset, actor, owner, and interface register",
  },
  {
    step: "5",
    title: "Map flows and trust",
    description:
      "Draw fictional information and request flows while marking changes in identity, authority, sensitivity, ownership, location, and control.",
    output: "Data-flow and trust-boundary diagram",
  },
  {
    step: "6",
    title: "Develop misuse questions",
    description:
      "Describe safe, outcome-focused fictional ways that features, workflows, permissions, assumptions, or dependencies could fail or be misused.",
    output: "Abuse-case and threat-question library",
  },
  {
    step: "7",
    title: "Organize and rank",
    description:
      "Group fictional concerns conceptually and rank them using defined impact, likelihood, exposure, control, uncertainty, and mission criteria.",
    output: "Prioritized threat-risk register",
  },
  {
    step: "8",
    title: "Choose mitigations",
    description:
      "Select fictional design, prevention, detection, response, recovery, governance, privacy, and communication controls.",
    output: "Mitigation and residual-risk plan",
  },
  {
    step: "9",
    title: "Validate and review",
    description:
      "Check fictional traceability, assumptions, evidence, owner participation, control coverage, tradeoffs, disagreement, and missing context.",
    output: "Review findings and decision log",
  },
  {
    step: "10",
    title: "Maintain the model",
    description:
      "Define fictional owners, versions, review cadence, change triggers, evidence updates, archived decisions, and model retirement.",
    output: "Threat-model lifecycle plan",
  },
];

const objectives = [
  "Explain threat modeling as a structured defensive decision process rather than a prediction, attack plan, or guarantee.",
  "Define a safe fictional modeling scope with clear purpose, authorization, exclusions, stakeholders, assumptions, and review goals.",
  "Identify fictional assets, actors, interfaces, dependencies, data flows, stores, processes, and meaningful trust boundaries.",
  "Develop safe, non-operational fictional abuse cases and conceptual threat questions without teaching harmful procedures.",
  "Rank fictional threat scenarios using consistent impact, likelihood, exposure, control, uncertainty, and mission criteria.",
  "Choose layered fictional mitigations with owners, dependencies, validation evidence, tradeoffs, and residual-risk decisions.",
  "Document fictional facts, assumptions, hypotheses, unknowns, limitations, confidence, review triggers, and change history.",
  "Build and review a portfolio-ready fictional threat model that is ethical, defensive, traceable, privacy-safe, and useful to multiple audiences.",
];

const evidencePreview = [
  {
    id: "TM-01",
    source: "Fictional system-context brief",
    observation:
      "A student-services portal supports account access, document submission, counselor review, notifications, and archival storage.",
    supports:
      "The model must consider identity, privacy, availability, workflow, storage, notification, and recovery assets.",
    limits:
      "The brief does not prove how the fictional system is actually configured or monitored.",
    designUse:
      "Use it to establish purpose, stakeholders, critical functions, and initial scope questions.",
  },
  {
    id: "TM-02",
    source: "Fictional data-flow diagram",
    observation:
      "Uploaded records move from a public interface through validation, processing, storage, review, and archival services.",
    supports:
      "Multiple fictional trust, ownership, identity, sensitivity, and technology changes exist.",
    limits:
      "A diagram alone does not prove every real flow, exception, retry path, or failure mode.",
    designUse:
      "Identify boundary questions, validation needs, evidence sources, and recovery dependencies.",
  },
  {
    id: "TM-03",
    source: "Fictional role matrix",
    observation:
      "One support role can reset accounts, view submission status, modify notification settings, and initiate archival reprocessing.",
    supports:
      "Privilege concentration and separation-of-duty questions deserve review.",
    limits:
      "The matrix does not prove inappropriate use or effective permission state.",
    designUse:
      "Create identity, approval, monitoring, lifecycle, and recovery threat questions.",
  },
  {
    id: "TM-04",
    source: "Fictional change request",
    observation:
      "A new supplier integration will receive status updates and return document-processing results.",
    supports:
      "The model must address supplier trust, data minimization, validation, availability, logging, and exit planning.",
    limits:
      "The request does not define the final data fields, controls, contract terms, or operational design.",
    designUse:
      "Record assumptions and require owner decisions before ranking or mitigation selection.",
  },
  {
    id: "TM-05",
    source: "Fictional recovery exercise",
    observation:
      "The portal returned to service, but delayed notifications caused duplicate submissions and unclear user status.",
    supports:
      "Availability, integrity, communication, workflow state, and user-experience concerns are connected.",
    limits:
      "One exercise does not prove the frequency or full impact of future failures.",
    designUse:
      "Develop abuse cases and mitigations involving degraded service, validation, and communication.",
  },
  {
    id: "TM-06",
    source: "Fictional model review note",
    observation:
      "The current model lists technical components but omits privacy owners, support workflows, archival deletion, and supplier failure assumptions.",
    supports:
      "The model is incomplete across ownership, lifecycle, privacy, and operational dependencies.",
    limits:
      "The review note does not determine which omitted concern should rank highest.",
    designUse:
      "Open review findings, assign owners, update assumptions, and preserve disagreement.",
  },
];

const portfolioArtifacts = [
  "Fictional threat-model purpose, decision, scope, authorization, stakeholders, exclusions, and safety boundary",
  "System context, mission, critical functions, users, environments, owners, and dependency map",
  "Asset register covering data, identity, service, operational, privacy, safety, trust, and recovery value",
  "Actor and interface register covering human, service, device, workload, supplier, and unknown actors",
  "Data-flow diagram with stores, processes, transfer paths, trust boundaries, validation points, and evidence needs",
  "Safe fictional abuse-case and misuse-question library without operational attack instructions",
  "Conceptual threat-category worksheet linked to assets, flows, assumptions, evidence, and model limits",
  "Threat-risk register with impact, likelihood, exposure, control strength, uncertainty, confidence, and rationale",
  "Mitigation map covering design, prevention, detection, response, recovery, governance, privacy, and communication",
  "Assumption, exclusion, limitation, unknown, evidence-gap, expiration, and review-trigger register",
  "Peer-review findings, disagreement log, decision record, version history, and maintenance plan",
  "Leadership summary, technical appendix, portfolio reflection, and full fictionalization statement",
];

const risks = [
  {
    risk: "Modeling without a decision",
    description:
      "Creating a fictional threat list without defining which architecture, change, service, or risk decision the work must support.",
    control:
      "Begin with a decision statement, success criteria, owner, audience, and review deadline.",
  },
  {
    risk: "Unclear scope",
    description:
      "Mixing fictional systems, environments, suppliers, data, and responsibilities without documenting what is included or excluded.",
    control:
      "Publish a scope map, exclusions, assumptions, boundaries, and authorization statement.",
  },
  {
    risk: "Diagram equals reality",
    description:
      "Treating a fictional diagram as complete proof of effective flows, permissions, controls, exceptions, retries, and failures.",
    control:
      "Link every important claim to evidence, owners, assumptions, confidence, and validation needs.",
  },
  {
    risk: "Category checklist thinking",
    description:
      "Using conceptual threat labels mechanically while ignoring business purpose, privacy, safety, workflow, supplier, or recovery context.",
    control:
      "Use categories as prompts and preserve uncategorized, cross-category, and context-specific concerns.",
  },
  {
    risk: "Operational misuse detail",
    description:
      "Writing fictional abuse cases as step-by-step instructions instead of defensive outcome and control questions.",
    control:
      "Describe affected assets, conditions, outcomes, evidence, and mitigations without procedures for causing harm.",
  },
  {
    risk: "False precision",
    description:
      "Presenting fictional numerical rankings as objective truth even when evidence, likelihood, control state, and impact remain uncertain.",
    control:
      "Define scales, explain rationale, record uncertainty, compare alternatives, and require owner review.",
  },
  {
    risk: "Mitigation without validation",
    description:
      "Listing fictional controls without owners, dependencies, completion criteria, evidence, side effects, or residual-risk decisions.",
    control:
      "Trace every mitigation to a modeled concern and define how design and effectiveness will be reviewed.",
  },
  {
    risk: "Stale threat model",
    description:
      "Allowing fictional architecture, suppliers, identities, data, workflows, assumptions, and controls to change while the model remains unchanged.",
    control:
      "Use versioning, change triggers, review cadence, ownership, archived decisions, and model retirement.",
  },
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
        href={`${modulePath}/why-threat-modeling-exists`}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Start A3.1
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

export default function ThreatModelingModulePage() {
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
              Module A3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              10 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3 Threat Modeling
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders build safe fictional models of
            assets, actors, entry points, data flows, trust boundaries, misuse
            possibilities, risk, mitigations, assumptions, and review
            decisions. The goal is not to predict every problem. The goal is to
            make better design and risk decisions before uncertainty becomes
            unmanaged exposure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Module", "A3", "Third module in the High School Advanced track."],
            ["Lessons", "10", "Ten threat-modeling lessons plus one module assessment."],
            ["Assessment", "25", "Twenty-five hidden-answer questions after A3.10."],
            ["Portfolio", "1", "One integrated fictional professional threat-model package."],
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
          title="How Do Professionals Identify What Could Go Wrong Before Choosing What to Defend?"
        >
          <p className="max-w-4xl leading-8">
            Threat modeling is a disciplined conversation about fictional
            mission, assets, actors, interfaces, dependencies, flows, trust,
            misuse possibilities, uncertainty, risk, and controls. A useful
            model does not claim to discover every possible threat. It helps
            teams make traceable decisions, challenge assumptions, prioritize
            limited effort, select mitigations, and revisit the design when the
            system or its environment changes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Understand before ranking",
                "Begin with fictional purpose, assets, actors, workflows, data, dependencies, and trust rather than starting with a generic threat list.",
              ],
              [
                "Model decisions, not fear",
                "Describe bounded outcomes, evidence, uncertainty, and controls without exaggeration or operational harmful detail.",
              ],
              [
                "Maintain the model",
                "Treat fictional assumptions, mitigations, owners, evidence, and rankings as living decisions that require review when context changes.",
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
          title="Threat Modeling Must Remain Fictional, Authorized, Defensive, and Non-Operational"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                This module includes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Invented organizations, systems, identities, assets, actors,
                  interfaces, diagrams, records, assumptions, and decisions.
                </li>
                <li>
                  Conceptual threat questions, safe misuse outcomes, risk
                  reasoning, mitigation planning, review, and documentation.
                </li>
                <li>
                  Static supplied evidence and portfolio-ready defensive
                  artifacts.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                This module does not authorize
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                <li>
                  Accessing, scanning, testing, probing, changing, bypassing, or
                  investigating any real system.
                </li>
                <li>
                  Using real credentials, private records, internal diagrams,
                  configurations, logs, supplier data, or recovery details.
                </li>
                <li>
                  Writing operational instructions for exploitation, evasion,
                  persistence, credential theft, malware, or destructive action.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 leading-7 text-yellow-50">
            Every A3 activity is a planning and reasoning exercise using only
            supplied fictional information. It does not grant permission to
            access, test, configure, monitor, investigate, recover, or modify
            real devices, accounts, networks, applications, cloud services, or
            organizational systems.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
            Ten Steps from Modeling Purpose to Maintained Decisions
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
              A3 Lesson Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Complete All Ten Lessons
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              Each lesson uses fictional system context, professional
              defensive reasoning, safe evidence review, hidden-answer checks,
              and one connected portfolio artifact.
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
            Threat-Model Evidence You Will Learn to Analyze
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
                    ["Modeling use", item.designUse],
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
          eyebrow="Threat-Model Risk Preview"
          title="Common Modeling Failures You Will Learn to Recognize"
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
          title="Build a Complete Fictional Threat-Model Package"
        >
          <p className="max-w-4xl leading-8">
            By the end of A3, you will have one connected professional
            threat-model package rather than ten unrelated worksheets. Each
            lesson strengthens the same fictional case and prepares you for the
            final workshop lab, review, and leadership communication.
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
            Every artifact must use invented organizations, systems, assets,
            actors, identities, interfaces, data flows, diagrams, risks,
            evidence, suppliers, dates, decisions, and outcomes. Never upload or
            reproduce real internal models, credentials, private records,
            configurations, logs, supplier information, or confidential
            technical details.
          </div>
        </SectionCard>

        <section className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-200">
            A3 Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Complete the 25-Question Assessment
          </h2>
          <p className="mt-4 max-w-3xl leading-7">
            After A3.10, test your ability to reason about threat-model purpose,
            assets, actors, entry points, data flows, trust boundaries, abuse
            cases, conceptual categories, risk ranking, mitigations,
            assumptions, limitations, review, and lifecycle ownership.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
            >
              Open A3 Module Test
            </Link>

            <Link
              href={`${modulePath}/threat-modeling-workshop-lab`}
              className="rounded-xl border border-purple-300/50 px-5 py-3 font-bold text-purple-100 transition hover:bg-purple-300/10"
            >
              Review A3.10 First
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Begin Threat Modeling
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Start with why threat modeling exists before moving through scope,
            assets, actors, entry points, flows, trust boundaries, abuse cases,
            categories, risk ranking, mitigations, assumptions, review, and the
            final workshop lab.
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