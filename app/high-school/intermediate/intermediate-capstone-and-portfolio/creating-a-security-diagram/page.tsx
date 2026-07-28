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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const previousLesson = `${modulePath}/writing-an-incident-report`;
const nextLesson = `${modulePath}/creating-a-risk-recommendation`;

const objectives = [
  "Define a fictional security-diagram purpose, audience, scope, question, systems, identities, data, services, suppliers, evidence sources, trust boundaries, privacy rules, assumptions, and review standard.",
  "Choose the correct fictional diagram type for architecture, data flow, identity paths, evidence flow, incident sequence, control mapping, ownership, risk, or recovery.",
  "Represent fictional systems, users, services, networks, cloud resources, suppliers, controls, evidence sources, boundaries, flows, risks, owners, and limitations with clear labels and a consistent legend.",
  "Distinguish fictional architecture facts, inferred relationships, unknown connections, control states, evidence sources, risk points, owner responsibilities, and validated outcomes.",
  "Create a complete fictional security-diagram package with a project brief, source register, legend, primary diagram, annotations, evidence references, reviewer notes, accessibility review, revision history, and portfolio-safety statement."
];
const vocabulary = [
  [
    "Security diagram",
    "A fictional visual model that explains systems, identities, services, trust boundaries, data flows, controls, evidence sources, risks, owners, decisions, or recovery states."
  ],
  [
    "Diagram purpose",
    "The fictional question the visual must answer for a specific audience and decision."
  ],
  [
    "Scope boundary",
    "The fictional systems, identities, services, suppliers, data, time window, and evidence included or excluded from the visual."
  ],
  [
    "Trust boundary",
    "A fictional line where identity, ownership, network, security policy, administrative authority, or data-handling expectations change."
  ],
  [
    "Data flow",
    "A fictional movement of information between users, systems, services, applications, networks, suppliers, or storage locations."
  ],
  [
    "Identity path",
    "A fictional route through which a user, role, group, service account, supplier identity, or application gains access."
  ],
  [
    "Control point",
    "A fictional location where authentication, authorization, filtering, validation, logging, encryption, approval, monitoring, or recovery is applied."
  ],
  [
    "Evidence source",
    "A fictional log, configuration record, alert, owner statement, service record, diagram source, or validation result supporting a visual element."
  ],
  [
    "Risk point",
    "A fictional location where exposure, excessive access, source loss, weak validation, supplier dependency, or control failure may affect the system."
  ],
  [
    "Owner label",
    "A fictional role responsible for approving, operating, reviewing, validating, communicating, or accepting risk for a diagram element."
  ],
  [
    "Legend",
    "A fictional key explaining every symbol, line, arrow, color category, boundary, status, confidence marker, and annotation type."
  ],
  [
    "Directional arrow",
    "A fictional visual indicator showing the direction of data, identity, evidence, decision, communication, or recovery flow."
  ],
  [
    "Bidirectional flow",
    "A fictional connection where information moves in both directions and should not be represented as one-way without evidence."
  ],
  [
    "Assumption",
    "A fictional statement accepted for the diagram but not fully confirmed by supplied evidence."
  ],
  [
    "Unknown relationship",
    "A fictional possible connection that remains unconfirmed and should be marked rather than drawn as fact."
  ],
  [
    "Portfolio-safe diagram",
    "A fictional visual using invented systems, identities, services, evidence, dates, suppliers, addresses, labels, and outcomes."
  ]
];
const diagramTypes = [
  {
    "type": "Architecture diagram",
    "best_for": "Showing fictional systems, zones, networks, cloud services, suppliers, applications, storage, controls, and trust boundaries.",
    "include": "Components, zones, boundaries, owners, control points, service dependencies, evidence sources, and risk annotations.",
    "avoid": "Trying to show every event or decision on one static architecture view.",
    "question": "What exists, how is it organized, and where do trust or control expectations change?",
    "portfolio_value": "Demonstrates system understanding and security-boundary reasoning."
  },
  {
    "type": "Data-flow diagram",
    "best_for": "Showing how fictional information moves among users, applications, services, storage, suppliers, and external destinations.",
    "include": "Data type, direction, source, destination, processing, storage, encryption state, owner, and control points.",
    "avoid": "Drawing arrows without labels, direction, purpose, or evidence.",
    "question": "Where does the data come from, where does it go, and which controls protect each step?",
    "portfolio_value": "Demonstrates confidentiality, integrity, privacy, and control reasoning."
  },
  {
    "type": "Identity and access path diagram",
    "best_for": "Showing fictional users, roles, groups, nested groups, service accounts, suppliers, conditions, exceptions, and effective access.",
    "include": "Identity source, authentication, groups, roles, inherited access, conditions, resources, owners, and validation.",
    "avoid": "Showing only the visible role name when indirect access exists.",
    "question": "How does this identity gain capability, and where should access be limited or reviewed?",
    "portfolio_value": "Demonstrates IAM, least privilege, and effective-access analysis."
  },
  {
    "type": "Evidence-flow diagram",
    "best_for": "Showing fictional event generation, collection, transport, parsing, enrichment, correlation, alerting, storage, analyst review, and validation.",
    "include": "Event source, event time, collection time, source health, transformations, owners, gaps, compensating sources, and limitations.",
    "avoid": "Treating the alert console as the original source of truth.",
    "question": "How does evidence move from the system to the analyst, and where can delay or loss occur?",
    "portfolio_value": "Demonstrates logging, monitoring, source-health, and evidence-limit reasoning."
  },
  {
    "type": "Incident sequence diagram",
    "best_for": "Showing fictional events, alerts, decisions, actions, communications, recovery, and validation across roles over time.",
    "include": "Normalized timestamps, actors, systems, evidence references, decision points, owner authority, and uncertainty.",
    "avoid": "Mixing event, collection, alert, action, and validation time.",
    "question": "What happened in what order, who acted, and which evidence supports each step?",
    "portfolio_value": "Demonstrates incident coordination and timeline accuracy."
  },
  {
    "type": "Control and risk map",
    "best_for": "Showing fictional assets, threats, weaknesses, controls, control gaps, owners, likelihood, impact, response options, and residual risk.",
    "include": "Asset, risk statement, control state, owner, treatment, validation, dependency, and residual risk.",
    "avoid": "Using technical severity as the entire business-risk explanation.",
    "question": "Where is risk concentrated, which controls reduce it, and what decision remains?",
    "portfolio_value": "Demonstrates policy, risk, vulnerability, and recommendation reasoning."
  },
  {
    "type": "Ownership and responsibility map",
    "best_for": "Showing fictional identity, network, cloud, application, data, supplier, service, communications, recovery, and risk responsibilities.",
    "include": "Approver, operator, reviewer, validator, communicator, escalation path, and residual-risk owner.",
    "avoid": "Assigning every decision to the analyst or one security team.",
    "question": "Who owns each decision, action, validation, communication, and accepted risk?",
    "portfolio_value": "Demonstrates governance, authority, and cross-team coordination."
  },
  {
    "type": "Recovery-state diagram",
    "best_for": "Showing fictional current state, containment state, restoration steps, dependencies, testing, service acceptance, monitoring, and closure.",
    "include": "State transitions, entry criteria, owners, rollback, tests, blockers, acceptance, and residual risk.",
    "avoid": "Treating a completed change as proof that recovery is validated.",
    "question": "How does the service move safely from affected state to validated operation?",
    "portfolio_value": "Demonstrates recovery, validation, continuity, and closure reasoning."
  }
];
const diagramElements = [
  {
    "element": "System or service node",
    "meaning": "Represents a fictional endpoint, server, application, cloud service, identity provider, log source, storage resource, supplier platform, or business service.",
    "label": "Use a short invented name plus purpose, owner, and classification where needed.",
    "evidence": "Link the node to the fictional source proving it exists or matters.",
    "mistake": "Using real hostnames, addresses, tenant names, or company systems."
  },
  {
    "element": "User or identity node",
    "meaning": "Represents a fictional user, role, group, service account, supplier identity, administrator, or application identity.",
    "label": "Show identity type, owner, role, business need, and access state.",
    "evidence": "Reference approval, authentication, group, role, or owner records.",
    "mistake": "Showing a person’s real name or assuming identity equals intent."
  },
  {
    "element": "Trust boundary",
    "meaning": "Marks a fictional change in administrative control, network zone, identity authority, data handling, supplier ownership, or policy.",
    "label": "Name the boundary and explain what changes across it.",
    "evidence": "Reference architecture, policy, ownership, or configuration records.",
    "mistake": "Drawing a boundary only because the layout has empty space."
  },
  {
    "element": "Flow arrow",
    "meaning": "Shows fictional data, identity, evidence, communication, decision, or recovery movement.",
    "label": "Include direction, purpose, data or event type, protocol category when relevant, and control status.",
    "evidence": "Reference records supporting the direction and relationship.",
    "mistake": "Using an unlabeled arrow or implying a relationship that is not confirmed."
  },
  {
    "element": "Control marker",
    "meaning": "Shows fictional authentication, authorization, filtering, validation, logging, encryption, monitoring, approval, or recovery controls.",
    "label": "Name the control, owner, expected state, observed state, and validation status.",
    "evidence": "Reference policy, configuration, test, alert, or owner evidence.",
    "mistake": "Marking a control as effective only because it exists."
  },
  {
    "element": "Evidence marker",
    "meaning": "Links a fictional diagram item to logs, configuration, alerts, owner confirmation, source health, or validation.",
    "label": "Use a consistent evidence identifier and optional confidence or source-health note.",
    "evidence": "The marker itself should point to the evidence register.",
    "mistake": "Using evidence labels that do not appear anywhere else."
  },
  {
    "element": "Risk marker",
    "meaning": "Highlights fictional excessive access, policy drift, source gaps, weak validation, supplier dependency, exposed data, or service risk.",
    "label": "State the risk condition, possible impact, confirmed impact, owner, and current action.",
    "evidence": "Reference findings and control-state evidence.",
    "mistake": "Using dramatic risk symbols without explaining what is actually supported."
  },
  {
    "element": "Unknown or assumption marker",
    "meaning": "Shows a fictional relationship, state, owner, or impact that remains unconfirmed.",
    "label": "Describe the open question and evidence needed.",
    "evidence": "Reference the gap or conflicting records.",
    "mistake": "Drawing uncertain relationships with the same style as confirmed facts."
  }
];
const qualityChecks = [
  {
    "check": "Purpose and audience",
    "question": "Does the fictional diagram answer one clear question for one primary audience?",
    "pass": "The title, subtitle, scope, and annotations all support the same decision or learning claim.",
    "fail": "The diagram attempts to explain architecture, incident sequence, risk, ownership, and recovery at once without hierarchy."
  },
  {
    "check": "Scope accuracy",
    "question": "Are included and excluded fictional systems, identities, services, suppliers, data, and time periods explicit?",
    "pass": "The diagram boundary and notes match the project brief.",
    "fail": "The visual appears to represent the entire organization when only a small evidence set was reviewed."
  },
  {
    "check": "Legend consistency",
    "question": "Does every fictional shape, line, arrow, marker, status, and annotation have one consistent meaning?",
    "pass": "The same symbol means the same thing throughout the package.",
    "fail": "A dashed line means unknown in one place and encrypted in another."
  },
  {
    "check": "Flow direction",
    "question": "Are fictional data, identity, evidence, communication, and recovery flows directional and labeled?",
    "pass": "The reader can identify source, destination, purpose, and control point.",
    "fail": "Arrows are decorative or ambiguous."
  },
  {
    "check": "Evidence traceability",
    "question": "Can every important fictional node, relationship, risk, and control state be traced to evidence?",
    "pass": "Evidence identifiers connect diagram elements to the source register.",
    "fail": "The visual includes plausible but unsupported systems or relationships."
  },
  {
    "check": "Uncertainty handling",
    "question": "Are fictional assumptions, unknowns, alternate explanations, and source gaps visibly different from confirmed facts?",
    "pass": "Unconfirmed relationships are marked and linked to evidence requests.",
    "fail": "Possible relationships are drawn as established facts."
  },
  {
    "check": "Readability and accessibility",
    "question": "Can a reader understand the fictional diagram without relying only on color or tiny text?",
    "pass": "Labels, shapes, line patterns, spacing, contrast, text size, captions, and written summaries support accessibility.",
    "fail": "The reader must distinguish meaning from color alone."
  },
  {
    "check": "Portfolio safety",
    "question": "Is every fictional system, identity, address, supplier, message, incident, evidence item, date, and outcome invented?",
    "pass": "The diagram is fictional from the beginning and contains no private reconstruction.",
    "fail": "A real screenshot or architecture is lightly edited."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the question",
    "detail": "Choose the fictional audience, decision, learning claim, diagram type, scope, privacy boundary, evidence, deadline, and success criteria.",
    "output": "Diagram project brief."
  },
  {
    "step": "2",
    "title": "Build the source register",
    "detail": "List fictional architecture, identity, data, log, configuration, owner, service, risk, decision, and validation evidence.",
    "output": "Source and evidence register."
  },
  {
    "step": "3",
    "title": "Identify elements and relationships",
    "detail": "Map fictional systems, identities, services, suppliers, flows, boundaries, controls, owners, risks, unknowns, and dependencies.",
    "output": "Element inventory."
  },
  {
    "step": "4",
    "title": "Create the legend and layout",
    "detail": "Define fictional shapes, line styles, arrow types, status markers, evidence labels, risk markers, confidence notes, and page hierarchy.",
    "output": "Legend and wireframe."
  },
  {
    "step": "5",
    "title": "Draw and annotate",
    "detail": "Create the fictional diagram with clear labels, directions, boundaries, owners, controls, evidence references, assumptions, and reviewer notes.",
    "output": "Diagram draft."
  },
  {
    "step": "6",
    "title": "Validate technical meaning",
    "detail": "Check fictional source, destination, direction, relationship, effective state, ownership, evidence, risk, and uncertainty against the register.",
    "output": "Technical review record."
  },
  {
    "step": "7",
    "title": "Review readability and safety",
    "detail": "Check fictional hierarchy, spacing, labels, contrast, accessibility, audience fit, privacy, unsupported relationships, and portfolio safety.",
    "output": "Design and safety review."
  },
  {
    "step": "8",
    "title": "Revise and present",
    "detail": "Apply fictional feedback, record version changes, finalize the diagram package, explain limitations, and defend the learning claim.",
    "output": "Final diagram and presentation notes."
  }
];
const findings = [
  {
    "id": "NBR-DGM-F01",
    "statement": "The fictional architecture diagram shows all major systems but does not identify trust boundaries.",
    "support": "User, application, identity, cloud, supplier, storage, and logging nodes are present, while administrative and supplier boundaries are absent.",
    "alternative": "The author may have intended the page groups to imply zones.",
    "confidence": "High",
    "impact": "Readers cannot see where security expectations and ownership change.",
    "next": "Add named trust boundaries with control, owner, and evidence notes."
  },
  {
    "id": "NBR-DGM-F02",
    "statement": "The fictional data-flow arrows do not identify direction, data type, or purpose consistently.",
    "support": "Several lines connect services without arrowheads or labels.",
    "alternative": "The diagram may be intended as a topology rather than a data-flow view.",
    "confidence": "High",
    "impact": "Readers may misunderstand what moves between systems and which control protects it.",
    "next": "Add direction, data category, purpose, and control-point labels to every important flow."
  },
  {
    "id": "NBR-DGM-F03",
    "statement": "The fictional diagram presents one possible supplier-to-storage relationship as confirmed.",
    "support": "A solid arrow is drawn even though the evidence register contains only shared timing and no common identity, session, or access record.",
    "alternative": "The line may represent a question rather than a fact.",
    "confidence": "High",
    "impact": "The visual could create an unsupported incident narrative.",
    "next": "Change the line to an unknown marker and state the evidence needed to confirm the relationship."
  },
  {
    "id": "NBR-DGM-F04",
    "statement": "The fictional control markers show expected controls but not observed or validated state.",
    "support": "Authentication, authorization, logging, and encryption icons appear without status or evidence references.",
    "alternative": "The diagram may represent design intent only.",
    "confidence": "Medium-High",
    "impact": "Readers may assume controls are effective because they are drawn.",
    "next": "Label expected, observed, corrected, and validated states separately."
  },
  {
    "id": "NBR-DGM-F05",
    "statement": "The fictional diagram is visually attractive but difficult to interpret without color.",
    "support": "Risk, control, evidence, and unknown categories rely on color alone and use similar shapes.",
    "alternative": "The original display may have stronger contrast than the exported copy.",
    "confidence": "High",
    "impact": "Accessibility and printed readability are reduced.",
    "next": "Add shape, line-pattern, text-label, and icon differences plus a written summary."
  },
  {
    "id": "NBR-DGM-F06",
    "statement": "The fictional diagram package is ready after targeted revisions to boundaries, flows, uncertainty, control state, accessibility, and evidence labels.",
    "support": "System inventory, ownership, privacy, core layout, and evidence register are otherwise strong.",
    "alternative": "A new reviewer may identify additional audience-fit issues.",
    "confidence": "Medium-High",
    "impact": "Remaining problems affect clarity and supportability rather than the entire model.",
    "next": "Complete peer review, revise the legend, rehearse the explanation, and record the final version."
  }
];
const commonMistakes = [
  "Creating a fictional diagram before deciding which question, audience, and decision it should support.",
  "Combining architecture, data flow, identity, evidence, incident sequence, risk, ownership, and recovery into one unreadable page.",
  "Drawing relationships because they seem plausible rather than because fictional evidence supports them.",
  "Using unlabeled arrows that do not show direction, purpose, data type, or control state.",
  "Showing a role name without direct, inherited, nested, conditional, or exception-based access paths.",
  "Drawing a security control without identifying expected, observed, corrected, and validated state.",
  "Using color as the only way to distinguish risk, evidence, trust, status, or uncertainty.",
  "Leaving trust boundaries unnamed or unexplained.",
  "Adding icons and decoration that do not answer the diagram question.",
  "Using inconsistent symbols, line styles, status labels, or evidence identifiers.",
  "Showing possible exposure, unknown relationships, or assumptions as confirmed facts.",
  "Forgetting owners, authority, validation, residual risk, and next actions.",
  "Including real screenshots, architecture, hostnames, addresses, identities, suppliers, logs, messages, incidents, or confidential project information.",
  "Creating a diagram that becomes an instruction set for probing or changing real systems."
];
const quizQuestions = [
  {
    "question": "What should be decided before creating a fictional security diagram?",
    "choices": [
      "The purpose, audience, question, scope, diagram type, evidence, privacy boundary, and success criteria.",
      "The color palette only.",
      "The number of icons.",
      "The final file size."
    ],
    "answer": 0,
    "explanation": "A diagram should begin with the decision or learning claim it must support."
  },
  {
    "question": "What is a fictional trust boundary?",
    "choices": [
      "A point where identity, ownership, network, policy, administrative authority, or data-handling expectations change.",
      "Any line around a group of icons.",
      "A decorative border.",
      "A confirmed incident."
    ],
    "answer": 0,
    "explanation": "Trust boundaries represent meaningful changes in control or expectation."
  },
  {
    "question": "How should an unconfirmed fictional relationship be shown?",
    "choices": [
      "With a clearly different unknown or assumption marker plus the evidence needed for confirmation.",
      "As a solid confirmed arrow.",
      "It should always be deleted.",
      "As a High severity finding."
    ],
    "answer": 0,
    "explanation": "Uncertainty should be visible rather than silently converted into fact."
  },
  {
    "question": "What makes a fictional flow arrow useful?",
    "choices": [
      "It identifies direction, source, destination, purpose, data or event type, control point, and evidence.",
      "It is visually curved.",
      "It uses a bright color.",
      "It connects as many systems as possible."
    ],
    "answer": 0,
    "explanation": "A useful arrow communicates a supported relationship."
  },
  {
    "question": "Why should fictional control markers include status?",
    "choices": [
      "A control can be expected, observed, corrected, failed, or validated, and those states are not equivalent.",
      "Every drawn control is automatically effective.",
      "Status is only for incident timelines.",
      "Controls do not need evidence."
    ],
    "answer": 0,
    "explanation": "Existence does not prove effectiveness."
  },
  {
    "question": "What improves fictional diagram accessibility?",
    "choices": [
      "Using labels, shapes, line patterns, spacing, contrast, readable text, captions, and written summaries rather than color alone.",
      "Using smaller text to fit more systems.",
      "Removing the legend.",
      "Using one symbol for every element."
    ],
    "answer": 0,
    "explanation": "Accessible diagrams communicate meaning through multiple cues."
  },
  {
    "question": "What makes a fictional security diagram portfolio-safe?",
    "choices": [
      "Every system, identity, address, supplier, message, evidence item, date, incident, and outcome is invented.",
      "Only passwords are removed.",
      "Real architecture is used with different colors.",
      "A screenshot is cropped."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required."
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function CreatingASecurityDiagramPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 4 of 8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Diagram Builder</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.4 Creating a Security Diagram
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Create clear fictional security diagrams that explain architecture,
            data, identities, evidence, controls, trust boundaries, ownership,
            risk, recovery, uncertainty, and validation without exposing real
            systems or private information.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Creating a Security Diagram"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional systems, identities, services, suppliers, flows, evidence, controls, dates, addresses, risks, owners, and outcomes.",
            "I will not copy, lightly edit, upload, trace, or expose real architecture, network maps, cloud diagrams, identity paths, logs, screenshots, company systems, school systems, or confidential project material.",
            "I will draw only relationships supported by fictional evidence and mark assumptions or unknowns clearly.",
            "I will not create instructions for probing, accessing, scanning, changing, or testing real systems.",
            "I will create only defensive, fictional, privacy-safe, accessible, and portfolio-safe visuals.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Diagram Can Look Correct while Telling the Wrong Story">
          <p className="leading-8">
            A fictional diagram shows a supplier identity connected directly to
            confidential storage because two alerts happened during the same
            shift. The visual is polished, but no shared identity, session, or
            access record supports the relationship. Diagrams can create
            certainty faster than prose, so every node, boundary, arrow,
            control, risk, and status should have a purpose and evidence basis.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak diagram</p>
              <p className="mt-2 leading-7">
                Add plausible systems, use unlabeled arrows, hide uncertainty,
                omit boundaries, rely on color, draw controls as effective, and
                expose real architecture.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional diagram</p>
              <p className="mt-2 leading-7">
                Define the question, choose the right diagram type, cite
                evidence, label flows and boundaries, mark unknowns, show
                owners and control state, validate meaning, and protect privacy.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Visuals Shape Technical and Leadership Decisions">
          <p className="leading-8">
            Fictional diagrams help analysts understand flows, help service
            owners see dependencies, help leadership see risk and ownership,
            help recovery teams coordinate state changes, and help portfolio
            reviewers understand the student's reasoning. An inaccurate visual
            can also misdirect all of those decisions.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Question–Evidence–Model–Review–Explain Process">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Question", "Which fictional decision, learning claim, audience, scope, and time window should the diagram support?"],
              ["Evidence", "Which fictional records prove the systems, identities, flows, boundaries, controls, owners, risks, and outcomes?"],
              ["Model", "Which diagram type, symbols, arrows, boundaries, annotations, and hierarchy communicate the answer clearly?"],
              ["Review", "Are fictional relationships accurate, uncertainty visible, labels consistent, controls stateful, and privacy protected?"],
              ["Explain", "Can the student defend every important node, line, risk marker, evidence reference, limitation, and revision?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Security Diagram and Visual-Evidence Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Diagram Types</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Security Diagram Options</h2>
          <div className="mt-6 grid gap-5">
            {diagramTypes.map((item) => (
              <article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Best for", item.best_for],
                    ["Include", item.include],
                    ["Avoid", item.avoid],
                    ["Primary question", item.question],
                    ["Portfolio value", item.portfolio_value],
                  ].map(([label, detail]) => (
                    <div key={`${item.type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Language</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Core Diagram Elements</h2>
          <div className="mt-6 grid gap-5">
            {diagramElements.map((item) => (
              <article key={item.element} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.element}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Meaning", item.meaning],
                    ["Labeling rule", item.label],
                    ["Evidence rule", item.evidence],
                    ["Common mistake", item.mistake],
                  ].map(([label, detail]) => (
                    <div key={`${item.element}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Quality Review</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Checks before Finalizing the Diagram</h2>
          <div className="mt-6 grid gap-5">
            {qualityChecks.map((item) => (
              <article key={item.check} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.check}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.question}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Pass</p>
                    <p className="mt-2 text-sm leading-6">{item.pass}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Fail</p>
                    <p className="mt-2 text-sm leading-6">{item.fail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Diagram Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Question to Final Visual</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Security Diagram Review Dashboard"
          subtitle="Training dashboard for fictional visual quality only."
          metrics={[
            { label: "Supported diagram elements", value: "24", note: "Every fictional system, flow, boundary, control, risk, owner, and evidence marker links to the source register." },
            { label: "Unconfirmed relationships", value: "2", note: "Possible supplier-to-storage and phishing-to-cloud relationships remain marked as unknown." },
            { label: "Privacy review issues", value: "0", note: "All fictional names, systems, addresses, evidence, dates, suppliers, incidents, and outcomes are invented." },
          ]}
        />

        <FakeAlertCard
          title="Diagram Shows Unsupported Supplier-to-Storage Relationship"
          severity="High"
          time="3:16 PM"
          source="Fake Northbridge Diagram Quality Console"
          details="A fictional solid arrow links the supplier identity to confidential storage even though the source register contains only shared timing and no common identity, session, or access evidence."
          recommendation="Replace the solid arrow with an unknown marker, document the open question, cite the evidence gap, add required confirmation sources, and complete peer review before presentation."
        />

        <FakeLogPanel
          title="Fake Diagram Revision Timeline"
          logs={[
            "09:00 BRIEF diagram-type='architecture-and-flow'",
            "09:15 SCOPE systems='8'",
            "09:30 LEGEND symbols='defined'",
            "09:45 BOUNDARY supplier='missing'",
            "10:00 FLOW data-direction='partial'",
            "10:15 EVIDENCE markers='18'",
            "10:30 UNKNOWN supplier-storage='drawn-solid'",
            "10:45 CONTROL states='unlabeled'",
            "11:00 ACCESSIBILITY color-only='detected'",
            "11:15 REVIEW relationship='unsupported'",
            "11:30 REVISION trust-boundaries='added'",
            "11:45 REVISION flow-labels='added'",
            "12:00 REVISION unknown-marker='added'",
            "12:15 REVISION control-status='added'",
            "12:30 REVIEW accessibility='passed'",
            "12:45 FINAL diagram='presentation-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Diagram Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Visual-Quality Findings</h2>
          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Should the Supplier Identity Be Drawn as Connected to Confidential Storage?"
          evidence={[
            "The fictional supplier identity signed in to a support service.",
            "A confidential-storage policy changed later in the same shift.",
            "The systems use different identity records and owners.",
            "No common session, access record, or configuration actor is supplied.",
            "The grouped alert was created from temporal proximity.",
            "Later evidence could establish a relationship.",
          ]}
          question="Which diagram choice is strongest?"
          options={[
            "Keep the supplier and storage in separate supported flows and mark the possible relationship as unknown until additional evidence confirms it.",
            "Draw a solid arrow because the events occurred on the same shift.",
            "Remove both systems from the diagram.",
            "Label the supplier as the confirmed cause.",
          ]}
          bestAnswer={0}
          explanation="A diagram should preserve coordinated review without converting timing into a confirmed relationship."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Fictional Security Diagram">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Northbridge Fictional Security Diagram Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Architecture, Flows, Boundaries, Controls, Evidence, Risk, and Ownership</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only fictional Northbridge evidence to build one primary
                security diagram and supporting visual package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Diagram project brief with purpose, audience, question, scope, exclusions, privacy, evidence, deadline, and success criteria.</li>
                <li>Source register and element inventory covering systems, identities, services, suppliers, data, evidence, owners, risks, and controls.</li>
                <li>Legend defining every shape, line, arrow, boundary, control state, evidence marker, risk marker, confidence label, and unknown marker.</li>
                <li>Primary fictional diagram with clear hierarchy, labels, directions, trust boundaries, control points, evidence references, owners, and limitations.</li>
                <li>One supporting fictional data-flow, identity-path, evidence-flow, incident-sequence, risk, ownership, or recovery diagram.</li>
                <li>Annotation table explaining every important node, relationship, risk point, assumption, unknown, and validation result.</li>
                <li>Technical, readability, accessibility, privacy, unsupported-relationship, and audience-fit review records.</li>
                <li>Version history, reviewer feedback, final revision, presentation notes, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fully invented material. Do not copy, lightly edit, expose,
            trace, or recreate real architecture, identities, network maps,
            cloud diagrams, addresses, logs, screenshots, messages, suppliers,
            incidents, employee data, school systems, or confidential project
            information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Diagram Uses a Solid Arrow for an Unconfirmed Relationship"
          scenario="The fictional supplier sign-in and storage-policy change happened during one shift, but no shared identity, session, or access evidence connects them."
          choices={[
            { label: "Choice A", response: "Replace the solid arrow with an unknown relationship marker, cite the evidence gap, and list the records required for confirmation.", outcome: "Best diagram choice. The visual preserves uncertainty without hiding the review question.", tone: "best" },
            { label: "Choice B", response: "Keep the solid arrow because the events happened close together.", outcome: "Unsupported. Temporal proximity does not prove a relationship.", tone: "risk" },
            { label: "Choice C", response: "Label the supplier as the confirmed cause.", outcome: "Unsupported and misleading.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Requests the Original Real Network Diagram"
          scenario="The fictional portfolio visual demonstrates the learning claim, but the requested original diagram would reveal real systems, trust boundaries, addresses, suppliers, and private infrastructure."
          choices={[
            { label: "Choice A", response: "Provide only the fully invented portfolio-safe diagram, explain the fictionalization process, and preserve the professional design and reasoning.", outcome: "Best privacy choice. The artifact remains useful without exposing sensitive architecture.", tone: "best" },
            { label: "Choice B", response: "Share the real diagram after removing passwords.", outcome: "Unsafe. Architecture diagrams can expose sensitive relationships even without credentials.", tone: "risk" },
            { label: "Choice C", response: "Change the organization name but keep the real systems and flows.", outcome: "Unsafe. Light editing does not create a fictional artifact.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Creating a Security Diagram Checklist"
          items={[
            "I can define a fictional diagram purpose, audience, question, type, scope, evidence boundary, privacy rule, and success criteria.",
            "I can choose among fictional architecture, data-flow, identity-path, evidence-flow, incident-sequence, risk, ownership, and recovery diagrams.",
            "I can label fictional systems, identities, services, suppliers, data, flows, controls, owners, risks, evidence, assumptions, and unknowns.",
            "I can identify and explain fictional trust boundaries and changes in control or responsibility.",
            "I can distinguish fictional expected, observed, corrected, failed, and validated control states.",
            "I can trace fictional nodes, relationships, risk points, and outcomes to evidence identifiers and source-health notes.",
            "I can mark fictional assumptions and unknown relationships differently from confirmed facts.",
            "I can review fictional readability, hierarchy, spacing, labels, contrast, accessibility, consistency, privacy, and audience fit.",
            "I can explain fictional reviewer feedback, revisions, remaining limitations, and presentation choices.",
            "I will never expose or recreate real systems, addresses, identities, architecture, logs, screenshots, messages, suppliers, incidents, employee data, school systems, or confidential information.",
          ]}
        />

        <MiniQuiz title="I17.4 Mini Quiz: Creating a Security Diagram" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Northbridge Security Diagram Package. Include the project brief, audience, learning claim, scope, exclusions, privacy rules, source register, element inventory, legend, primary architecture diagram, supporting flow diagram, trust boundaries, identity paths, data flows, evidence sources, controls, owners, risks, assumptions, unknowns, annotations, evidence references, technical review, accessibility review, privacy review, version history, reviewer feedback, final revision, presentation notes, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, services, suppliers, addresses, evidence, dates, incidents, controls, and outcomes.",
            "Make every important line, arrow, boundary, symbol, and risk marker answer a clear question.",
            "Show unknown relationships differently from confirmed relationships.",
            "Do not rely on color alone to communicate meaning.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A security diagram should answer a clear question for a specific audience.",
            "The correct diagram type depends on whether the reader needs architecture, flow, identity, evidence, incident, risk, ownership, or recovery information.",
            "Every important node, relationship, boundary, control, and risk should be supported by fictional evidence.",
            "Assumptions and unknowns should never be drawn as confirmed facts.",
            "Controls should show expected, observed, corrected, failed, or validated state.",
            "Accessible diagrams use labels, shapes, line patterns, contrast, captions, and written explanation rather than color alone.",
            "Portfolio diagrams must be fully fictional and should never expose or recreate real infrastructure.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I17</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}