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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/threat-modeling`;
const previousLesson = modulePath;
const nextLesson = `${modulePath}/assets-actors-and-entry-points`;

const objectives = [
  "Explain threat modeling as a structured defensive decision process that helps teams understand a fictional system before choosing controls.",
  "Distinguish a threat model from an attack plan, vulnerability scan, risk register, architecture diagram, compliance checklist, and security guarantee.",
  "Define a safe fictional modeling purpose, scope, stakeholders, assumptions, exclusions, evidence needs, and review triggers.",
  "Connect threat modeling to design, change review, privacy, resilience, detection, response, recovery, governance, and risk ownership.",
  "Create a portfolio-ready fictional Threat-Model Charter using only invented organizations, systems, identities, data, diagrams, evidence, decisions, dates, and outcomes."
];

const vocabulary = [
  [
    "Threat modeling",
    "A structured fictional process for understanding what matters, how a system works, what could go wrong, which safeguards exist, what remains uncertain, and which defensive decisions deserve priority."
  ],
  [
    "Modeling purpose",
    "The exact fictional decision, design, change, review, or risk question that the threat model is expected to support."
  ],
  [
    "Scope",
    "The fictional systems, environments, users, data, interfaces, suppliers, workflows, locations, and time period included in the model."
  ],
  [
    "Exclusion",
    "A fictional component, environment, question, data set, or responsibility deliberately left outside the current model and documented for later review."
  ],
  [
    "Asset",
    "A fictional data set, identity, service, capability, device, process, relationship, reputation, safety outcome, or recovery function that has value and requires protection."
  ],
  [
    "Actor",
    "A fictional human, service, device, workload, supplier, administrator, automation, or unknown party that interacts with the system."
  ],
  [
    "Entry point",
    "An approved fictional interface through which data, requests, identities, files, messages, commands, or administrative actions enter a system."
  ],
  [
    "Data flow",
    "A fictional movement of information or requests between actors, processes, services, stores, zones, and external dependencies."
  ],
  [
    "Trust boundary",
    "A fictional point where identity, authority, ownership, sensitivity, technology, location, administration, or control assumptions change."
  ],
  [
    "Abuse case",
    "A safe, outcome-focused fictional description of how a legitimate feature, permission, workflow, dependency, or assumption could produce harm or policy failure."
  ],
  [
    "Threat question",
    "A defensive question used to test an assumption, boundary, asset, workflow, or control without providing operational instructions for causing harm."
  ],
  [
    "Mitigation",
    "A fictional design, prevention, detection, response, recovery, governance, privacy, communication, or process safeguard chosen to reduce a modeled concern."
  ],
  [
    "Residual risk",
    "The fictional risk that remains after selected mitigations are applied and validated."
  ],
  [
    "Assumption",
    "A fictional condition treated as true for the model even though it may require evidence, an owner, an expiration date, or later validation."
  ],
  [
    "Unknown",
    "A fictional question that cannot yet be answered with the supplied evidence and must remain visible rather than being guessed."
  ],
  [
    "Model confidence",
    "A documented fictional estimate of how reliable the model is based on scope, evidence, stakeholder participation, assumptions, freshness, and review quality."
  ]
];

const modelPurposes = [
  {
    "purpose": "Clarify the system before defending it",
    "question": "What fictional mission, users, assets, components, identities, data, workflows, dependencies, and boundaries exist?",
    "value": "Teams can discuss the same system instead of protecting different mental pictures.",
    "weakness_if_missing": "Controls are chosen for an incomplete or incorrect understanding of the system.",
    "artifact": "System context and scope statement"
  },
  {
    "purpose": "Expose hidden assumptions",
    "question": "Which fictional identities, suppliers, interfaces, workflows, locations, defaults, and recovery paths are being trusted without enough evidence?",
    "value": "Uncertainty becomes visible and reviewable rather than silently becoming architecture.",
    "weakness_if_missing": "Unverified assumptions are treated as facts until a change or failure reveals them.",
    "artifact": "Assumption and unknown register"
  },
  {
    "purpose": "Find important design questions early",
    "question": "Which fictional decisions should be reconsidered before implementation, deployment, integration, or approval?",
    "value": "The team can change a diagram, requirement, role, interface, or workflow before changes become expensive.",
    "weakness_if_missing": "Risk is discovered only after deployment, audit, incident, or failed recovery.",
    "artifact": "Design question and decision log"
  },
  {
    "purpose": "Prioritize limited effort",
    "question": "Which fictional scenarios matter most when mission impact, likelihood, exposure, control strength, uncertainty, and recoverability are considered together?",
    "value": "Resources are directed toward the most decision-relevant concerns rather than the longest list.",
    "weakness_if_missing": "Every concern appears equally urgent or dramatic language controls priority.",
    "artifact": "Threat-risk ranking rationale"
  },
  {
    "purpose": "Connect safeguards to causes and outcomes",
    "question": "Which fictional preventive, detective, response, recovery, privacy, governance, and communication controls address each concern?",
    "value": "Mitigations become traceable and gaps between layers are easier to identify.",
    "weakness_if_missing": "Teams list products or policies without knowing which modeled problem they address.",
    "artifact": "Threat-to-mitigation map"
  },
  {
    "purpose": "Improve detection and evidence",
    "question": "What fictional events, failures, denied actions, state changes, source-health records, and business outcomes must be observable?",
    "value": "Visibility is designed around defender questions before an incident occurs.",
    "weakness_if_missing": "The system may block or fail without enough evidence to understand what happened.",
    "artifact": "Evidence and detection requirements"
  }
];

const lifecycle = [
  {
    "step": "1",
    "title": "Define the decision",
    "questions": "Which fictional design, feature, integration, service, workflow, policy, or change must the model help someone decide?",
    "output": "Decision statement, audience, owner, deadline, and success criteria.",
    "evidence": "Project brief, approved change record, architecture objective, policy requirement, or risk question.",
    "stop": "Pause if the team cannot explain what decision the model will support."
  },
  {
    "step": "2",
    "title": "Set scope and authorization",
    "questions": "Which fictional systems, environments, users, data, suppliers, interfaces, workflows, and time periods are included or excluded?",
    "output": "Scope map, exclusions, authorization boundary, safety statement, and privacy limits.",
    "evidence": "Fictional ownership records, design documents, data-purpose notes, and stakeholder approval.",
    "stop": "Do not let scope expand silently during the workshop."
  },
  {
    "step": "3",
    "title": "Understand mission and context",
    "questions": "What must the fictional service accomplish, who depends on it, and what outcomes must remain confidential, accurate, available, private, safe, and recoverable?",
    "output": "Mission, critical outcomes, user groups, context diagram, and operating assumptions.",
    "evidence": "Fictional service catalog, user journeys, continuity requirements, owner interviews, and privacy purpose.",
    "stop": "Do not begin with a generic threat checklist before understanding the system."
  },
  {
    "step": "4",
    "title": "Identify assets, actors, and entry points",
    "questions": "What fictional value requires protection, who or what interacts with it, and through which approved interfaces?",
    "output": "Asset, actor, entry-point, owner, and dependency register.",
    "evidence": "Fictional inventories, role maps, interface lists, service diagrams, and workflow records.",
    "stop": "Avoid treating only servers and databases as assets."
  },
  {
    "step": "5",
    "title": "Map flows and trust boundaries",
    "questions": "How do fictional data and requests move, and where do identity, authority, sensitivity, ownership, technology, or administration assumptions change?",
    "output": "Data-flow diagram, stores, processes, transfer paths, trust boundaries, and validation points.",
    "evidence": "Fictional architecture views, API descriptions, workflow maps, data inventories, and supplier interfaces.",
    "stop": "Do not assume a diagram proves actual behavior or complete coverage."
  },
  {
    "step": "6",
    "title": "Develop safe threat questions",
    "questions": "How could a fictional feature, permission, dependency, workflow, default, failure, or assumption produce an unsafe outcome?",
    "output": "Outcome-focused abuse cases and defensive threat questions without operational harmful detail.",
    "evidence": "Fictional failure history, design reviews, support issues, policy exceptions, and stakeholder concerns.",
    "stop": "Do not write step-by-step instructions for causing harm."
  },
  {
    "step": "7",
    "title": "Rank with context and uncertainty",
    "questions": "Which fictional concerns matter most based on impact, likelihood, exposure, control strength, uncertainty, mission importance, privacy, safety, and recoverability?",
    "output": "Prioritized threat-risk register with rationale, confidence, and owner review.",
    "evidence": "Fictional control evidence, dependency data, incident lessons, business impact, recovery exercises, and assumptions.",
    "stop": "Do not present an unsupported score as objective truth."
  }
];

const stakeholders = [
  {
    "role": "Mission or business owner",
    "contribution": "Explains fictional critical outcomes, users, value, acceptable disruption, priority, and business consequences.",
    "questions": "Which functions must continue? Which harms matter most? Which residual risks require leadership decisions?",
    "decision": "Accepts or rejects business tradeoffs and residual risk."
  },
  {
    "role": "Security architect or facilitator",
    "contribution": "Structures the fictional workshop, maps relationships, challenges assumptions, documents decisions, and protects scope and safety.",
    "questions": "Does the model connect mission, assets, actors, flows, boundaries, threats, controls, evidence, and owners?",
    "decision": "Recommends whether the model is ready for review and where deeper work is required."
  },
  {
    "role": "System or application owner",
    "contribution": "Explains fictional components, interfaces, dependencies, states, errors, maintenance, deployment, support, and recovery behavior.",
    "questions": "What does the service actually do? Which paths and dependencies are required? Which assumptions are outdated?",
    "decision": "Confirms technical context and owns system changes."
  },
  {
    "role": "Identity and access owner",
    "contribution": "Explains fictional human, service, device, workload, supplier, emergency, and recovery identities.",
    "questions": "Who may do what, to which resource, for what purpose, under which conditions, for how long, and with which evidence?",
    "decision": "Approves identity and privilege requirements."
  },
  {
    "role": "Data or privacy owner",
    "contribution": "Explains fictional data purpose, fields, classification, users, sharing, retention, deletion, and privacy consequences.",
    "questions": "Is each data element necessary? Who owns it? Which flows and uses are authorized?",
    "decision": "Approves data purpose and privacy safeguards."
  },
  {
    "role": "Network, platform, or cloud owner",
    "contribution": "Explains fictional zones, connectivity, platform services, administrative paths, supplier connections, availability, and monitoring.",
    "questions": "Which paths are required, denied, temporary, privileged, monitored, resilient, and recoverable?",
    "decision": "Owns platform and connectivity controls."
  }
];

const qualityPrinciples = [
  {
    "principle": "Decision-centered",
    "strong": "The fictional model begins with a clear decision, owner, audience, deadline, and success criteria.",
    "weak": "The team creates a large threat list with no clear use.",
    "evidence": "Charter, decision statement, review agenda, and approved deliverables."
  },
  {
    "principle": "Context-first",
    "strong": "Mission, users, workflows, assets, actors, data, dependencies, and trust are understood before categories or controls are applied.",
    "weak": "Generic threat labels are copied onto an unfamiliar system.",
    "evidence": "System context, user journeys, inventories, data-flow diagram, and owner review."
  },
  {
    "principle": "Bounded scope",
    "strong": "Included and excluded fictional systems, environments, data, suppliers, workflows, and time periods are visible.",
    "weak": "The workshop silently expands until no conclusion is reliable.",
    "evidence": "Scope statement, exclusion register, authorization boundary, and change log."
  },
  {
    "principle": "Outcome-focused",
    "strong": "Safe fictional abuse cases describe affected assets, conditions, outcomes, evidence, and controls without operational harmful detail.",
    "weak": "The model becomes a procedure for causing harm.",
    "evidence": "Abuse-case template, facilitator review, safety statement, and revised wording."
  },
  {
    "principle": "Evidence-aware",
    "strong": "Facts, interpretations, assumptions, hypotheses, unknowns, source health, and confidence remain separate.",
    "weak": "A diagram, alert, score, or stakeholder opinion is treated as proof.",
    "evidence": "Evidence matrix, source notes, limitation fields, and confidence rationale."
  },
  {
    "principle": "Traceable",
    "strong": "Fictional assets connect to flows, boundaries, concerns, mitigations, owners, validation, and residual risk.",
    "weak": "Controls cannot be connected to the modeled concern they supposedly address.",
    "evidence": "Traceability map, identifiers, decision records, and validation plan."
  }
];

const evidenceMatrix = [
  {
    "id": "TM-01",
    "source": "Fictional project brief",
    "observation": "Northbridge plans a student-support portal for document submission, counselor review, notifications, and archival status.",
    "supports": "A threat model can help decide how identity, privacy, workflow, availability, integrity, support, and recovery should be designed.",
    "limits": "The brief does not define every component, flow, role, interface, data field, supplier, or control.",
    "model_use": "Create the decision statement, initial scope, stakeholders, mission outcomes, and evidence requests."
  },
  {
    "id": "TM-02",
    "source": "Fictional context diagram",
    "observation": "The portal connects to identity, document processing, notification, storage, logging, backup, and a supplier service.",
    "supports": "Multiple fictional systems and external dependencies belong in the context discussion.",
    "limits": "The diagram does not prove actual communication paths, effective permissions, data fields, monitoring, or failure behavior.",
    "model_use": "Identify assets, actors, entry points, data flows, boundaries, assumptions, and owners that require confirmation."
  },
  {
    "id": "TM-03",
    "source": "Fictional role summary",
    "observation": "A support role can reset accounts, view submission status, modify notification settings, and initiate document reprocessing.",
    "supports": "Privilege concentration, approval, evidence, separation-of-duty, lifecycle, and recovery questions deserve review.",
    "limits": "The summary does not prove misuse, effective permissions, or whether all actions are necessary.",
    "model_use": "Create identity and workflow threat questions while requesting exact role and business-purpose evidence."
  },
  {
    "id": "TM-04",
    "source": "Fictional data-purpose note",
    "observation": "The proposed supplier receives document status, student reference code, and processing result, but field necessity is not approved.",
    "supports": "Data minimization, purpose, supplier trust, retention, access, evidence, and exit require decisions.",
    "limits": "The note does not prove which fields will be implemented or whether alternative designs exist.",
    "model_use": "Open assumptions and require the data owner to approve a minimum field set before final ranking."
  },
  {
    "id": "TM-05",
    "source": "Fictional workflow map",
    "observation": "A rejected document can be resubmitted, reprocessed, reviewed, notified, and archived through several state changes.",
    "supports": "Integrity, authorization, duplicate action, stale state, error handling, evidence, and user communication are connected.",
    "limits": "The workflow map does not prove every exception, race condition, retry, or recovery path.",
    "model_use": "Develop outcome-focused abuse cases and state-transition questions without operational harmful detail."
  }
];

const commonMistakes = [
  "Beginning with a generic threat category list before understanding the fictional mission, users, workflows, assets, actors, data, dependencies, and boundaries.",
  "Treating a threat model as a prediction of every future event or a guarantee that the fictional system is secure.",
  "Confusing a threat model with a vulnerability scan, penetration test, incident investigation, compliance checklist, or architecture diagram.",
  "Modeling without a clear decision, audience, owner, scope, deadline, or success criteria.",
  "Allowing fictional scope to expand without documenting the new systems, data, suppliers, assumptions, owners, and review impact.",
  "Using only technical participants while excluding business, privacy, identity, operations, recovery, supplier, user, and leadership perspectives.",
  "Writing operational harmful instructions instead of safe, outcome-focused fictional abuse cases and defensive questions.",
  "Treating a diagram, stakeholder statement, alert, ranking score, or tool output as complete proof.",
  "Hiding assumptions, unknowns, exclusions, stale evidence, disagreement, or low confidence to make the model appear complete.",
  "Ranking concerns with dramatic language or unsupported numerical precision rather than consistent criteria and rationale.",
  "Selecting fictional mitigations without mapping them to specific concerns, owners, dependencies, validation, side effects, and residual risk.",
  "Focusing only on prevention while ignoring detection, response, recovery, privacy, governance, communication, and safe degraded operation.",
  "Completing one workshop and never updating the fictional model after changes, incidents, new data uses, supplier changes, or recovery lessons.",
  "Using real internal diagrams, hostnames, IP addresses, routes, logs, credentials, supplier details, configurations, private records, or incident information in a portfolio artifact."
];

const quizQuestions = [
  {
    "question": "What is the strongest description of threat modeling?",
    "choices": [
      "A process that guarantees every future attack will be predicted.",
      "A structured fictional process for understanding the system, asking what could go wrong, ranking concerns, choosing mitigations, and documenting uncertainty and ownership.",
      "A list of vulnerabilities produced by a scanner.",
      "A diagram showing network devices only."
    ],
    "answer": 1,
    "explanation": "Threat modeling supports defensive decisions by connecting context, concerns, controls, uncertainty, evidence, and ownership. It does not guarantee complete prediction."
  },
  {
    "question": "Why should a threat model begin with a clear decision statement?",
    "choices": [
      "It makes every threat automatically high risk.",
      "It defines what the model must help someone decide, who owns the decision, and which evidence and outputs are relevant.",
      "It replaces the need for system context.",
      "It allows the team to skip scope and stakeholder review."
    ],
    "answer": 1,
    "explanation": "A decision-centered model avoids producing a large list that has no clear audience or action."
  },
  {
    "question": "A fictional diagram shows a supplier connection. What does the diagram alone prove?",
    "choices": [
      "The connection is authorized and secure.",
      "The supplier owns every related risk.",
      "The documented view includes a supplier relationship, but actual data, permissions, controls, ownership, evidence, and failure behavior still require validation.",
      "The supplier is malicious."
    ],
    "answer": 2,
    "explanation": "A diagram is a model and starting point, not complete proof of effective behavior or risk."
  },
  {
    "question": "Which fictional abuse-case statement is safest and most useful?",
    "choices": [
      "A detailed procedure explaining how to bypass the portal.",
      "A legitimate account-reset workflow could create unauthorized access if identity proof, approval, evidence, and recovery checks fail.",
      "Every support administrator is untrustworthy.",
      "The portal will definitely be compromised."
    ],
    "answer": 1,
    "explanation": "The selected statement describes conditions and outcomes defensively without providing operational harmful instructions or unsupported attribution."
  },
  {
    "question": "When should a fictional threat model be reviewed?",
    "choices": [
      "Only after a confirmed incident.",
      "Only once, before the first release.",
      "When defined triggers occur, such as design changes, new suppliers, data changes, incidents, recovery lessons, control failures, architecture drift, or scheduled review.",
      "Whenever someone wants a longer document."
    ],
    "answer": 2,
    "explanation": "A maintained model changes with the system, its environment, evidence, and risk decisions."
  },
  {
    "question": "Which statement about threat-model confidence is strongest?",
    "choices": [
      "A completed workshop always produces high confidence.",
      "Confidence depends on scope, evidence, freshness, assumptions, stakeholder participation, review quality, and unresolved unknowns.",
      "Confidence should never be documented.",
      "A numerical ranking proves confidence automatically."
    ],
    "answer": 1,
    "explanation": "Confidence is a bounded assessment of model quality, not a feeling or automatic result of completion."
  },
  {
    "question": "What makes the A3.1 portfolio artifact safe to share?",
    "choices": [
      "Only passwords are removed from a real model.",
      "Real internal diagrams are blurred.",
      "Every organization, system, identity, data set, interface, diagram, evidence source, owner, decision, date, and outcome is invented.",
      "The real system is described without naming the company."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization prevents the artifact from exposing real systems, people, organizations, suppliers, controls, or private information."
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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        A3 Module Home
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Advanced Track
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

export default function WhyThreatModelingExistsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A3
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 1 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Threat-Model Foundations
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A3.1 Why Threat Modeling Exists
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn why professional defenders use threat modeling before and
            during design, change, integration, detection, recovery, and risk
            review. Build a fictional foundation that makes system context,
            assumptions, misuse possibilities, uncertainty, mitigations,
            evidence, ownership, and review decisions visible without teaching
            operational attack steps.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A3: Threat Modeling"
          lessonTitle="Why Threat Modeling Exists"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, assets, actors, entry points, data flows, diagrams, evidence, decisions, dates, and outcomes.",
            "I understand that threat modeling supports defensive decisions but does not predict every future event or prove that a system is secure.",
            "I will describe safe fictional outcomes and defender questions without providing operational instructions for causing harm.",
            "I will not upload, reproduce, lightly modify, or summarize real internal diagrams, credentials, hostnames, addresses, routes, logs, configurations, supplier records, recovery details, or private data.",
            "I will analyze only the supplied fictional evidence and will not access, scan, test, configure, investigate, monitor, recover, or change any real system.",
            "I will keep facts, interpretations, assumptions, hypotheses, unknowns, confidence, limitations, and review triggers separate.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Most Expensive Security Question Is Often the One Asked Too Late"
        >
          <p className="leading-8">
            A fictional Northbridge team is nearly ready to launch a
            student-support portal. The architecture diagram looks complete,
            but no one has formally asked which data and service outcomes matter
            most, how account reset and document reprocessing could be misused,
            what happens when notifications and identity recovery fail together,
            which supplier assumptions are unverified, or who owns residual
            risk. Threat modeling exists so those questions become visible while
            teams can still change the design, requirements, controls, evidence,
            workflow, and ownership.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Late reactive thinking
              </p>
              <p className="mt-2 leading-7">
                Build the fictional system, assume familiar patterns are safe,
                add tools, and wait for an incident, audit, privacy concern, or
                failed recovery to reveal hidden design questions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Threat-model thinking
              </p>
              <p className="mt-2 leading-7">
                Define the decision, understand the fictional system, challenge
                assumptions, describe safe misuse outcomes, rank concerns,
                choose mitigations, assign owners, and maintain the model as the
                system changes.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Security Decisions Depend on a Shared Understanding of the Fictional System"
        >
          <p className="leading-8">
            Teams often use the same words while imagining different systems.
            One person thinks the portal is only a website. Another includes the
            identity provider, notification service, document processor,
            supplier, backup, logging, support workflow, and archival process.
            Threat modeling creates a structured shared view and then asks how
            valuable outcomes, trust, authority, data, dependencies, failures,
            and controls interact. The result is not certainty. The result is a
            better documented decision.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Before implementation",
                "Change fictional requirements, roles, interfaces, data fields, trust boundaries, and dependencies before they become expensive.",
              ],
              [
                "Before approval",
                "Show which concerns, assumptions, mitigations, evidence needs, tradeoffs, and residual risks require owner decisions.",
              ],
              [
                "After change or lessons",
                "Update the fictional model when architecture, suppliers, data, controls, incidents, recovery exercises, or user needs change.",
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
          eyebrow="Core Concept"
          title="Threat Modeling Is a Decision Process, Not a Threat List"
        >
          <p className="leading-8">
            A useful fictional threat model connects a defined decision to
            system context, assets, actors, entry points, data flows, trust
            boundaries, safe abuse cases, assumptions, evidence, risk ranking,
            mitigations, owners, validation, residual risk, and review triggers.
            A long list of threats without those connections may look detailed
            while remaining difficult to act on.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {[
              [
                "Understand",
                "Describe the fictional mission, system, users, assets, actors, workflows, data, dependencies, and trust.",
              ],
              [
                "Question",
                "Ask safe outcome-focused questions about misuse, failure, error, privilege, privacy, suppliers, evidence, and recovery.",
              ],
              [
                "Decide",
                "Rank concerns and compare fictional design, prevention, detection, response, recovery, governance, and communication options.",
              ],
              [
                "Maintain",
                "Track owners, assumptions, validation, residual risk, revisions, disagreements, triggers, and retirement.",
              ],
            ].map(([title, detail], index) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-black text-purple-100">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Threat-Model Purposes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Reasons Professional Teams Build Threat Models
          </h2>

          <div className="mt-6 grid gap-5">
            {modelPurposes.map((item, index) => (
              <article
                key={item.purpose}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.purpose}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Professional question", item.question],
                    ["Decision value", item.value],
                    ["Failure if missing", item.weakness_if_missing],
                    ["Fictional artifact", item.artifact],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.purpose}-${label}`}
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Advanced Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Professional Threat-Model Reasoning
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>


        <SectionCard
          eyebrow="Professional Lifecycle"
          title="A Ten-Step Threat-Model Workflow"
        >
          <p className="leading-8">
            The workflow is iterative rather than perfectly linear. New
            fictional evidence may change scope, context, assumptions, ranking,
            mitigations, ownership, or confidence. The important professional
            habit is to make each change visible and traceable.
          </p>

          <div className="mt-6 grid gap-5">
            {lifecycle.map((item) => (
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
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>


        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Stakeholder Model
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Threat Models Improve When Different Owners Challenge the Same Fictional System
          </h2>

          <div className="mt-6 grid gap-5">
            {stakeholders.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.role}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Contribution", item.contribution],
                    ["Questions", item.questions],
                    ["Decision ownership", item.decision],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
          eyebrow="Quality Principles"
          title="A Useful Model Is Bounded, Traceable, Evidence-Aware, and Maintainable"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong}</p>
                </div>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak practice
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak}</p>
                </div>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>


        <SectionCard
          eyebrow="Fictional System Context"
          title="Northbridge Student-Support Portal: What the Team Knows So Far"
        >
          <p className="leading-8">
            The following visual is an invented training model. It shows enough
            context to ask defensive questions, but it does not prove real
            configuration, authorization, effective permissions, control
            behavior, supplier commitments, or complete data flows.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:items-center">
            <div className="grid gap-3">
              {[
                ["Students and families", "Submit fictional documents, review status, receive messages, and request help."],
                ["Counselors", "Review fictional submissions and communicate decisions."],
                ["Support staff", "Assist with accounts, status, notifications, and approved reprocessing."],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-50"
                >
                  <p className="font-black text-cyan-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6 text-center text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-200">
                Fictional service boundary
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                Northbridge Student-Support Portal
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Identity and sessions",
                  "Submission workflow",
                  "Document processing",
                  "Counselor review",
                  "Status and notifications",
                  "Logging and support",
                  "Storage and archival",
                  "Backup and recovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Identity provider", "Authenticates fictional human and service identities."],
                ["Processing supplier", "Returns fictional document-processing results."],
                ["Notification service", "Delivers fictional status messages through approved channels."],
                ["Archive and backup", "Preserves fictional records and supports restoration."],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The model must not assume that every displayed connection is
            necessary, authorized, monitored, resilient, or privacy-safe. Those
            are questions for later fictional evidence and owner decisions.
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Threat-Model Readiness Dashboard"
          subtitle="Fictional scope, stakeholder, evidence, assumption, and review status for training only."
          metrics={[
            {
              label: "Context completeness",
              value: "62%",
              note: "Core services are listed, but support workflows, supplier failure, archival deletion, and recovery communication remain incomplete.",
            },
            {
              label: "Open assumptions",
              value: "9",
              note: "Field necessity, privilege need, retry behavior, supplier retention, source health, and recovery dependencies require owners.",
            },
            {
              label: "Model status",
              value: "Draft",
              note: "The fictional model is useful for questions but not ready for final ranking or design approval.",
            },
          ]}
        />

        <FakeAlertCard
          title="Threat Model Requested after Design Approval"
          severity="High"
          time="11:24 AM"
          source="Fake Northbridge Design Governance Console"
          details="The fictional portal design was approved before support workflows, supplier data fields, privilege concentration, recovery communication, archival deletion, and evidence requirements were modeled. Several decisions now depend on undocumented assumptions."
          recommendation="Pause final release approval, define the modeling decision and scope, confirm stakeholders and evidence, document assumptions, model priority workflows and dependencies, choose mitigations, and record residual risk before proceeding."
        />

        <FakeLogPanel
          title="Fake Threat-Model Preparation Timeline"
          logs={[
            "09:00 PROJECT portal='student-support' phase='pre-release'",
            "09:08 DECISION launch-approval='requested' model='not-complete'",
            "09:16 CONTEXT systems='portal,idp,processor,notify,storage,logs,backup'",
            "09:24 WORKFLOW account-reset='documented' reprocessing='partial'",
            "09:31 DATA supplier-fields='status,reference,result' owner-approval='missing'",
            "09:38 IDENTITY support-role='broad' exact-need='unconfirmed'",
            "09:44 LOGGING notification-change='actor-context-missing'",
            "09:51 RECOVERY portal='restored' notifications='delayed' duplicates='observed'",
            "09:58 PRIVACY archival-deletion='not-modeled'",
            "10:05 SUPPLIER retention='unknown' failure-mode='unknown'",
            "10:12 ASSUMPTIONS open='9' expired='2'",
            "10:20 STAKEHOLDER privacy-owner='missing' recovery-owner='assigned'",
            "10:28 REVIEW model-confidence='medium-low'",
            "10:36 ACTION charter='required' scope='required'",
            "10:44 ACTION launch-approval='paused'",
            "11:00 WORKSHOP date='scheduled' participants='cross-functional'",
            "11:24 STATUS threat-model='draft' final-ranking='not-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Finalizing the Threat-Model Charter
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
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
                    ["Threat-model use", item.model_use],
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

        <AnalyzeEvidenceCard
          title="Is the Fictional Threat Model Ready for Final Risk Ranking?"
          question="Which conclusion is best supported by the fictional Northbridge evidence?"
          evidence={[
            "The project decision is final launch approval, but the threat-model charter is incomplete.",
            "The context diagram lists core services but omits several support, privacy, supplier, archival, and recovery details.",
            "Nine assumptions remain open and two have passed their review dates.",
            "A broad support role may control several sensitive workflows, but exact effective permissions and business need are unconfirmed.",
            "Supplier data-field necessity, retention, and failure behavior are not approved.",
            "A recovery exercise restored the portal but produced delayed notifications and duplicate submissions.",
            "Notification-setting changes lack enough actor and reason context for reliable review.",
            "Privacy and recovery stakeholders have not both completed the model review.",
          ]}
          options={[
            "Keep the model in draft, complete the charter and context, assign assumption owners, obtain missing stakeholder and evidence input, model priority workflows and failures, and only then finalize ranking and mitigations.",
            "Finalize the ranking because the architecture diagram already exists.",
            "Declare the portal unsafe and cancel it immediately.",
            "Add every possible threat category and mark all concerns High.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a useful but incomplete draft. Professional threat modeling preserves uncertainty, closes context and ownership gaps, and delays final ranking until the model is decision-ready."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make a Threat Model Look Complete without Being Decision-Ready"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build the Fictional Northbridge Threat-Model Charter"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Prepare the Model before the Workshop Begins
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented Northbridge records on this page. Your
                charter should tell every participant what decision the model
                supports, what is included, what is excluded, what evidence is
                available, what remains uncertain, which safety rules apply,
                and how the model will be reviewed and maintained.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional decision statement, audience, owner, deadline, and success criteria.</li>
                <li>Mission, critical outcomes, users, and service context.</li>
                <li>Included systems, environments, workflows, data, suppliers, and time period.</li>
                <li>Explicit exclusions and later-review questions.</li>
                <li>Stakeholder roles and decision ownership.</li>
                <li>Available evidence sources with limitations and source-health notes.</li>
                <li>Assumptions, hypotheses, unknowns, confidence, owners, and expiration dates.</li>
                <li>Safe abuse-case writing rule and prohibited operational detail.</li>
                <li>Planned outputs, review method, disagreement process, and approval path.</li>
                <li>Versioning, maintenance triggers, retirement criteria, and full fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity does not authorize access, testing, scanning,
            configuration, investigation, monitoring, evidence collection,
            recovery, or change involving any real system. Do not upload or use
            real internal models, diagrams, data, logs, credentials, routes,
            hostnames, supplier records, recovery details, or private
            information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Team Wants to Start with a Generic Threat Checklist"
          scenario="A fictional project team has not agreed on the portal decision, scope, users, data, workflows, suppliers, dependencies, or owners, but it wants to copy a large category checklist into a spreadsheet and begin scoring."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause scoring, define the decision and scope, build the fictional context, identify stakeholders and evidence, document assumptions, and then use categories only as prompts.",
              outcome:
                "Best professional choice. Context makes later threat questions and rankings relevant, bounded, and traceable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Copy every category, mark each one High, and call the model complete.",
              outcome:
                "Risky. The result may be long but disconnected from the fictional system and decision.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Skip threat modeling because no incident has occurred.",
              outcome:
                "Weak. Threat modeling is especially useful before design and approval decisions become fixed.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Asks for a Real Internal Diagram"
          scenario="A fictional student portfolio reviewer says the threat-model charter will look more authentic if the learner includes a real school network diagram and lightly changes the names."
          choices={[
            {
              label: "Choice A",
              response:
                "Refuse to use the real diagram and create a completely invented system, organization, identities, data, interfaces, evidence, decisions, dates, and outcomes.",
              outcome:
                "Best ethical choice. The portfolio can demonstrate skill without exposing real systems or confidential information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Blur the real labels but keep the routes, zones, and relationships.",
              outcome:
                "Unsafe. Structural and contextual details may still expose real architecture.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish the real diagram because the project is educational.",
              outcome:
                "Unsafe and unauthorized. Educational purpose does not remove confidentiality, privacy, or permission requirements.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Define Model Confidence without Pretending the Unknowns Are Solved"
        >
          <p className="leading-8">
            Create a fictional confidence method for the Northbridge threat
            model. Your method must consider scope completeness, stakeholder
            participation, evidence quality, source health, assumptions,
            unknowns, change freshness, review depth, disagreement, mitigation
            traceability, and unresolved owner decisions. Do not collapse all of
            those factors into one unexplained number.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required analysis",
                "Rate each confidence factor separately, explain the evidence and limitations, and identify which missing input could change the model most.",
              ],
              [
                "Required decision",
                "State whether the fictional model is suitable for questions, preliminary prioritization, mitigation planning, design approval, or only further discovery.",
              ],
              [
                "Required trigger",
                "Define which evidence, stakeholder review, architecture change, incident lesson, supplier update, or expired assumption requires reassessment.",
              ],
              [
                "Required communication",
                "Write one leadership statement that explains confidence without exaggerating certainty or hiding important unknowns.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Why Threat Modeling Exists Checklist"
          items={[
            "I can explain threat modeling as a structured defensive decision process rather than a prediction, test, scan, or guarantee.",
            "I can begin a fictional model with a decision, owner, audience, deadline, success criteria, scope, exclusions, and safety boundary.",
            "I can explain why mission, users, workflows, assets, actors, entry points, data, dependencies, and trust must be understood before ranking.",
            "I can distinguish facts, interpretations, assumptions, hypotheses, unknowns, confidence, and limitations.",
            "I can describe safe fictional abuse outcomes without providing operational harmful instructions.",
            "I can connect fictional concerns to design, prevention, detection, response, recovery, privacy, governance, and communication mitigations.",
            "I can explain why different stakeholder perspectives improve model completeness and decision quality.",
            "I can identify when a fictional model should be created, updated, reviewed, versioned, or retired.",
            "I can explain why diagrams, scores, alerts, and stakeholder statements require evidence and context.",
            "I can identify common modeling failures involving scope, context, ownership, false precision, stale assumptions, and missing validation.",
            "I can create a fictional threat-model charter that is traceable, evidence-aware, maintainable, and portfolio-ready.",
            "I will never include real internal diagrams, credentials, hostnames, addresses, routes, configurations, logs, supplier records, recovery details, or private information in a CyberShield artifact.",
          ]}
        />

        <MiniQuiz
          title="A3.1 Mini Quiz: Why Threat Modeling Exists"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Threat-Model Charter for the Northbridge Student-Support Portal. Include the decision, audience, owner, deadline, mission, critical outcomes, scope, exclusions, safety boundary, users, systems, data, workflows, suppliers, stakeholders, evidence sources, evidence limitations, assumptions, hypotheses, unknowns, confidence method, planned modeling steps, safe abuse-case rule, expected outputs, review process, disagreement process, approval path, version history, maintenance triggers, retirement criteria, reflection, and a statement that every organization, system, identity, asset, actor, interface, diagram, evidence source, owner, decision, date, and outcome is invented."
          tips={[
            "Write the fictional decision before listing threats or controls.",
            "Make scope and exclusions precise enough that another reviewer can tell what the model does not cover.",
            "Separate confirmed fictional context from assumptions and unknowns that still need owners.",
            "Explain how stakeholder review, evidence quality, and system change affect model confidence.",
            "Keep every detail completely invented, defensive, non-operational, privacy-safe, and appropriate for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready to Identify Assets, Actors, and Entry Points?"
        >
          <p className="leading-8">
            Before moving to A3.2, rate your readiness from 1 to 5 for each
            area: modeling purpose, decision statement, scope, exclusions,
            stakeholder participation, evidence quality, assumptions, safe
            misuse wording, confidence, maintenance, and complete
            fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why threat modeling is useful before design and approval decisions become fixed.",
              "I can distinguish a threat model from architecture, vulnerability management, testing, risk assessment, and incident response.",
              "I can write a fictional decision statement, scope, exclusion list, and safety boundary.",
              "I can identify which stakeholder perspectives and evidence sources the fictional model needs.",
              "I can document uncertainty and model confidence without guessing or hiding gaps.",
              "I can keep the entire portfolio artifact fully invented and safe to share.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one reason threat modeling improves a fictional design, one
            assumption that could weaken the Northbridge model, one stakeholder
            whose perspective is still needed, and one question you will carry
            into A3.2.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Threat modeling is a structured defensive decision process, not a prediction, attack plan, scanner, test, or guarantee.",
            "A useful model begins with a clear fictional decision, owner, audience, scope, exclusions, evidence needs, and safety boundary.",
            "System context must include mission, users, assets, actors, entry points, data, workflows, dependencies, suppliers, trust, privacy, operations, and recovery.",
            "Safe fictional abuse cases describe conditions and outcomes without providing operational instructions for causing harm.",
            "Facts, interpretations, assumptions, hypotheses, unknowns, confidence, and limitations should remain separate.",
            "Threat-model ranking should use consistent context and visible uncertainty rather than dramatic language or false precision.",
            "Mitigations should connect to specific modeled concerns and include owners, dependencies, validation, side effects, and residual risk.",
            "Different business, technical, identity, privacy, operations, recovery, supplier, user, and leadership perspectives improve model quality.",
            "Threat models should be updated when designs, data uses, suppliers, identities, incidents, recovery lessons, controls, or assumptions change.",
            "Every CyberShield threat-model artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems."
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A3
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, identify the fictional assets that require protection, the
            human and non-human actors that interact with them, and the approved
            entry points through which data, requests, identity, files, and
            administrative actions enter the system.
          </p>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}