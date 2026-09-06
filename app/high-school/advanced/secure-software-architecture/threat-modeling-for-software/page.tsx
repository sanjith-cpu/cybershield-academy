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
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/secure-design-requirements`;
const nextLesson = `${modulePath}/secrets-management-concepts`;

const objectives = [
  "Explain how software threat modeling supports secure design without becoming a vulnerability scan, exploit exercise, or prediction of every possible future event.",
  "Identify assets, actors, trust boundaries, data flows, privileged actions, dependencies, assumptions, and important failure conditions in a fictional software design.",
  "Write bounded threat statements that connect a condition, affected security property, possible impact, existing safeguards, evidence, and uncertainty.",
  "Use secure design requirements from A11.2 as inputs to threat-model questions and mitigation decisions.",
  "Build a professional software threat model that becomes the third artifact in the A11 Secure Software Design Assessment.",
];

const threatModelFlow = [
  {
    step: "01",
    title: "Define the decision",
    question:
      "What architecture, release, change, or risk decision is this model supposed to support?",
    detail:
      "A threat model should have a purpose. Examples include reviewing a new privileged feature, a new external integration, a changed data flow, or a release design.",
    evidence:
      "Decision statement, scope, owners, deadline, success criteria.",
  },
  {
    step: "02",
    title: "Understand the system",
    question:
      "Who uses the software, what does it do, which data and actions matter, and which components participate?",
    detail:
      "Map users, services, identities, data stores, APIs, external services, administrative functions, queues, logs, and important operational dependencies.",
    evidence:
      "Architecture diagram, requirements register, data-flow notes, role list, dependency inventory.",
  },
  {
    step: "03",
    title: "Mark trust boundaries",
    question:
      "Where does data, identity, or control cross between different trust assumptions?",
    detail:
      "Trust boundaries can exist between browser and service, service and database, application and vendor, normal and privileged workflow, or production and external systems.",
    evidence:
      "Architecture diagram, integration contracts, identity design, environment map.",
  },
  {
    step: "04",
    title: "Ask what could go wrong",
    question:
      "What harmful or incorrect outcomes should the design prevent, detect, contain, or recover from?",
    detail:
      "Use outcome-focused questions such as unauthorized record access, incorrect privilege assignment, excess data sharing, missing audit evidence, unsafe dependency changes, or failure to recover.",
    evidence:
      "Requirements, design assumptions, workflows, prior lessons, stakeholder input.",
  },
  {
    step: "05",
    title: "Review controls and evidence",
    question:
      "Which current safeguards address the concern, and what evidence supports that claim?",
    detail:
      "Record existing controls, planned controls, validation evidence, monitoring, ownership, and limitations. Do not assume a control works simply because it appears on a diagram.",
    evidence:
      "Requirements, design notes, review evidence, validation results, logs, ownership records.",
  },
  {
    step: "06",
    title: "Rank and decide",
    question:
      "Which concerns deserve action first, and what should happen next?",
    detail:
      "Prioritize using business impact, exposure, privilege, sensitivity, control strength, evidence quality, dependency, and recovery difficultyâ€”not dramatic wording alone.",
    evidence:
      "Risk rationale, owner decision, mitigation plan, exception record, follow-up date.",
  },
  {
    step: "07",
    title: "Keep it current",
    question:
      "What future changes should reopen the model?",
    detail:
      "New roles, data uses, dependencies, suppliers, deployment models, privileged actions, incidents, and recovery lessons can invalidate old assumptions.",
    evidence:
      "Change triggers, review dates, maintenance records, incident lessons.",
  },
];

const systemElements = [
  {
    category: "Actors",
    examples:
      "Students, counselors, approved administrators, service accounts, support staff, external scheduling service.",
    question:
      "Which actors should be able to perform which actions, and under what conditions?",
  },
  {
    category: "Assets",
    examples:
      "Student-support records, appointment data, account state, authorization decisions, audit history, configuration, dependency metadata.",
    question:
      "What information or capability would matter if exposed, changed, unavailable, or untraceable?",
  },
  {
    category: "Components",
    examples:
      "Browser client, application service, identity provider, authorization service, API layer, database, logging service, notification service.",
    question:
      "Which component owns each security decision?",
  },
  {
    category: "Data flows",
    examples:
      "Identity claims to application, record requests to API, approved fields to scheduling integration, audit events to monitoring.",
    question:
      "What data crosses each boundary and why is it needed?",
  },
  {
    category: "Trust boundaries",
    examples:
      "User device to application, application to external vendor, standard user workflow to privileged administrative action.",
    question:
      "Where do assumptions about identity, authorization, environment, or ownership change?",
  },
  {
    category: "Privileged actions",
    examples:
      "Account recovery, role changes, data export approval, configuration changes, access reassignment.",
    question:
      "Which actions need stronger control, approval, evidence, and monitoring?",
  },
  {
    category: "Dependencies",
    examples:
      "Identity provider, messaging library, scheduling vendor, build system, logging platform.",
    question:
      "Which external or third-party components affect software security and lifecycle decisions?",
  },
  {
    category: "Assumptions",
    examples:
      "Assignment source is accurate, disabled identities stop receiving sessions, vendor receives only approved fields.",
    question:
      "Which beliefs are relied on but still need evidence or periodic review?",
  },
];

const threatStatementParts = [
  {
    part: "Condition",
    prompt:
      "What situation or design weakness creates the concern?",
    example:
      "If a counselor assignment is stale or incorrect...",
  },
  {
    part: "Affected asset or action",
    prompt:
      "What protected information, workflow, or capability could be affected?",
    example:
      "...student-support records linked to assignment-based access...",
  },
  {
    part: "Security property",
    prompt:
      "Which property matters: confidentiality, integrity, availability, least privilege, privacy, auditability, resilience?",
    example:
      "...could be exposed to a user without the intended assignment...",
  },
  {
    part: "Possible impact",
    prompt:
      "What business or user outcome could result?",
    example:
      "...causing inappropriate access to private records and weakening trust in the authorization model.",
  },
  {
    part: "Existing safeguards",
    prompt:
      "What current requirement or design feature reduces the concern?",
    example:
      "REQ-AUTHZ-03 checks the approved assignment source through the central authorization service.",
  },
  {
    part: "Evidence / uncertainty",
    prompt:
      "What evidence supports the safeguard and what remains Unknown?",
    example:
      "Current tests cover ordinary assignments, but no evidence is supplied for delayed assignment updates.",
  },
];

const vocabulary = [
  {
    term: "Threat model",
    definition:
      "A structured way to understand a system, ask what could go wrong, identify safeguards, prioritize concerns, and document uncertainty and ownership.",
  },
  {
    term: "Asset",
    definition:
      "Information, capability, service, workflow, evidence, or trust relationship that matters to the organization or users.",
  },
  {
    term: "Actor",
    definition:
      "A user, service, role, or external party that interacts with the software.",
  },
  {
    term: "Trust boundary",
    definition:
      "A point where identity, data, control, ownership, or environment moves between different trust assumptions.",
  },
  {
    term: "Data flow",
    definition:
      "The movement of information between actors, components, services, or storage locations.",
  },
  {
    term: "Privileged action",
    definition:
      "An action with greater impact or authority, such as changing roles, recovering accounts, modifying configuration, or exporting broad data.",
  },
  {
    term: "Threat statement",
    definition:
      "A bounded description connecting a condition, affected asset or action, possible security impact, safeguards, evidence, and uncertainty.",
  },
  {
    term: "Mitigation",
    definition:
      "A safeguard or design change intended to reduce the likelihood or impact of a threat concern.",
  },
  {
    term: "Residual risk",
    definition:
      "The risk remaining after existing and planned controls are considered.",
  },
  {
    term: "Assumption",
    definition:
      "A belief the design relies on that may need evidence, ownership, or future re-review.",
  },
  {
    term: "Unknown",
    definition:
      "A fact that is not established by the supplied evidence and should not be guessed.",
  },
  {
    term: "Change trigger",
    definition:
      "A future change that should cause the threat model or a specific concern to be revisited.",
  },
];

const fictionalConcerns = [
  {
    id: "TM-01",
    area: "Assignment-based authorization",
    condition:
      "The counselor assignment source becomes stale or contains an incorrect assignment.",
    asset:
      "Student-support records and assignment-based authorization decisions.",
    impact:
      "A counselor could receive access inconsistent with the intended assignment policy.",
    controls:
      "REQ-AUTHZ-03, central authorization service, assignment source, denial logging.",
    evidence:
      "Positive and negative tests exist for normal assignments; delayed-update behavior is not supplied.",
    status: "Conditional",
    owner: "Application Owner + Assignment Data Owner",
    next:
      "Define stale-assignment behavior and validate update timing in the authorized test environment.",
  },
  {
    id: "TM-02",
    area: "External scheduling integration",
    condition:
      "A future feature adds additional student data fields to the scheduling vendor flow.",
    asset:
      "Student privacy and approved data-minimization boundary.",
    impact:
      "The integration could receive more information than the approved business purpose requires.",
    controls:
      "REQ-DATA-02, approved field list, integration contract, data-owner review.",
    evidence:
      "Three fields are currently approved; no approval exists for future added fields.",
    status: "Confirmed concern",
    owner: "Data Owner + Integration Owner",
    next:
      "Treat new field requests as a change trigger requiring data-purpose and minimization review.",
  },
  {
    id: "TM-03",
    area: "Dependency governance",
    condition:
      "A business-critical dependency remains without an assigned owner.",
    asset:
      "Software maintenance, update decisions, provenance review, and release confidence.",
    impact:
      "Support, update, or replacement decisions may be delayed or unowned.",
    controls:
      "REQ-DEP-01 requires ownership, source, version, support status, and review trigger.",
    evidence:
      "Source, version, and support status exist; owner field is blank.",
    status: "Unknown",
    owner: "Engineering Lead",
    next:
      "Assign an accountable dependency owner before marking the requirement Confirmed.",
  },
  {
    id: "TM-04",
    area: "Privileged account recovery",
    condition:
      "A future recovery workflow permits one staff role to approve and complete the same high-impact account recovery.",
    asset:
      "Account integrity and privileged access governance.",
    impact:
      "A single role could gain excessive control over high-impact recovery decisions.",
    controls:
      "Planned separation-of-duty requirement, privileged audit logging, approval record.",
    evidence:
      "The proposed workflow is not yet implemented; only design notes are supplied.",
    status: "Design concern",
    owner: "Identity Owner + Product Owner",
    next:
      "Define the approval model before implementation and include it in A11.2 requirements.",
  },
  {
    id: "TM-05",
    area: "Logging privacy",
    condition:
      "A developer adds full request objects to privileged-action logs for easier troubleshooting.",
    asset:
      "Privacy, secret protection, log usability, and audit evidence.",
    impact:
      "Sensitive or unnecessary data could be recorded in telemetry.",
    controls:
      "REQ-LOG-04 defines required fields and forbids secret values.",
    evidence:
      "Current supplied events comply; future logging changes are not yet reviewed.",
    status: "Change-trigger concern",
    owner: "Application Owner + Monitoring Owner",
    next:
      "Require logging-schema review before expanding privileged-action event content.",
  },
  {
    id: "TM-06",
    area: "Notification-service dependency",
    condition:
      "The external notification provider becomes unavailable.",
    asset:
      "Student-record workflow availability and user communication.",
    impact:
      "Users could lose notifications, but the core workflow should remain available.",
    controls:
      "REQ-RES-02, queue behavior, retry design, failure logging.",
    evidence:
      "Partial failure-mode evidence exists; recovery evidence is incomplete.",
    status: "Conditional",
    owner: "Service Owner + Reliability Owner",
    next:
      "Complete safe failure-mode validation and recovery evidence before release.",
  },
];

const commonMistakes = [
  {
    mistake: "Starting with a generic threat list",
    why:
      "Without understanding the software, users, data, workflows, requirements, and trust boundaries, the model becomes generic and disconnected from design decisions.",
    better:
      "Begin with the fictional system and the decision the model must support.",
  },
  {
    mistake: "Treating a threat model as a vulnerability scan",
    why:
      "Threat modeling is architecture reasoning. It does not require probing, scanning, exploitation, or access to real systems.",
    better:
      "Use supplied diagrams, requirements, data flows, assumptions, and review evidence.",
  },
  {
    mistake: "Writing operational attack instructions",
    why:
      "A defensive school threat model should describe outcomes and safeguards, not teach harmful procedures.",
    better:
      "Use safe language such as unauthorized access, excess data sharing, missing authorization, or untraceable privileged change.",
  },
  {
    mistake: "Assuming every concern is equally urgent",
    why:
      "Teams lose focus when every item is labeled critical without considering business impact, exposure, privilege, control strength, and evidence.",
    better:
      "Rank concerns using consistent rationale.",
  },
  {
    mistake: "Confusing possibility with proof",
    why:
      "A threat statement identifies what could go wrong; it does not prove that the harmful outcome happened.",
    better:
      "Keep hypothetical concern, observed evidence, and confirmed impact separate.",
  },
  {
    mistake: "Ignoring Unknowns",
    why:
      "Missing evidence can create false confidence if the reviewer silently assumes the safest answer.",
    better:
      "Record Unknown, identify the owner, and request the evidence needed to resolve it.",
  },
  {
    mistake: "Never updating the model",
    why:
      "New roles, vendors, dependencies, data uses, deployment changes, and incidents can invalidate earlier assumptions.",
    better:
      "Define change triggers and review dates.",
  },
];

const reviewMatrix = [
  {
    question: "What are we protecting?",
    evidence:
      "Requirements register, data classification, workflow notes, business-impact statements.",
    weak:
      "Everything is important.",
    strong:
      "Name the important data, capabilities, evidence, trust relationships, and workflows.",
  },
  {
    question: "Who interacts with it?",
    evidence:
      "Role list, identity design, service-account inventory, external integration notes.",
    weak:
      "Users and admins.",
    strong:
      "Identify specific fictional roles, services, and external parties relevant to the decision.",
  },
  {
    question: "Where does trust change?",
    evidence:
      "Architecture diagram, data-flow map, integration contract, environment map.",
    weak:
      "At the firewall.",
    strong:
      "Mark every meaningful identity, ownership, environment, or data-purpose boundary.",
  },
  {
    question: "What could go wrong?",
    evidence:
      "Requirements, workflows, assumptions, stakeholder concerns, prior review findings.",
    weak:
      "Attackers might attack.",
    strong:
      "Describe specific undesirable outcomes such as unauthorized record access, excess data sharing, or missing audit evidence.",
  },
  {
    question: "What reduces the concern?",
    evidence:
      "Requirements, controls, review notes, validation results, monitoring design.",
    weak:
      "We have security tools.",
    strong:
      "Name the specific requirement or control and the evidence supporting it.",
  },
  {
    question: "What remains uncertain?",
    evidence:
      "Missing or stale evidence, unresolved assumptions, incomplete ownership.",
    weak:
      "Probably fine.",
    strong:
      "Record Unknown, evidence gap, owner, and next action.",
  },
];

const dashboardMetrics = [
  {
    label: "Modeled concerns",
    value: "16",
    note: "7 Confirmed, 5 Conditional, 4 Unknown or design-stage",
  },
  {
    label: "Trust boundaries",
    value: "6",
    note: "Browser, identity, API, data, logging, external scheduling",
  },
  {
    label: "Requirements linked",
    value: "11 / 16",
    note: "Five concerns need stronger requirement traceability",
  },
  {
    label: "Open model triggers",
    value: "3",
    note: "New role, new vendor field, dependency-owner assignment",
  },
];

const logs = [
  "[08:50] MODEL      decision=review scheduling integration + privileged recovery design",
  "[09:05] ASSET      student-support records classified as privacy-sensitive",
  "[09:18] BOUNDARY   application -> scheduling vendor marked external trust boundary",
  "[09:41] CONCERN    TM-02 new vendor field could exceed approved data purpose",
  "[10:07] CONCERN    TM-03 critical dependency owner remains UNKNOWN",
  "[10:26] CONTROL    REQ-AUTHZ-03 linked to TM-01 assignment-access concern",
  "[10:52] EVIDENCE   TM-06 failure-mode validation partial -> CONDITIONAL",
  "[11:20] TRIGGER    temporary counselor role requires model re-review before release",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Treat the new temporary counselor role as a change trigger, revisit authorization requirements and trust assumptions, and update the threat model before release.",
    outcome:
      "Best. A new role can change privilege, assignment, evidence, and monitoring assumptions.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Reuse the original model unchanged because the application architecture is otherwise the same.",
    outcome:
      "Risky. Role changes can alter authorization and approval assumptions even when components remain unchanged.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Add the role name to the diagram but leave the requirements and model decisions unchanged.",
    outcome:
      "Caution. Documentation improves, but the security decision is still incomplete.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the concern hypothetical, document the missing evidence, assign the owner, and request the validation needed to determine whether the safeguard is effective.",
    outcome:
      "Best. The threat model stays evidence-based and does not convert possibility into proof.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark the concern as confirmed harm because the evidence is incomplete.",
    outcome:
      "Risky. Missing evidence does not prove the harmful outcome occurred.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark the concern resolved because no incident has been reported.",
    outcome:
      "Risky. Lack of incident evidence does not prove the design safeguard is effective.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest description of software threat modeling?",
    choices: [
      "A process that guarantees every future attack will be predicted.",
      "A structured way to understand a software design, ask what could go wrong, review safeguards, prioritize concerns, and document uncertainty and ownership.",
      "A vulnerability scan against production.",
      "A list of offensive techniques to test against an application.",
    ],
    answer: 1,
    explanation:
      "Threat modeling is structured defensive reasoning about design, risk, evidence, and safeguards.",
  },
  {
    question:
      "Why should secure design requirements be included in the threat model?",
    choices: [
      "They define the expected security behavior that threat concerns and controls can be compared against.",
      "They replace the architecture diagram.",
      "They prove every control works.",
      "They allow real-system testing without authorization.",
    ],
    answer: 0,
    explanation:
      "Requirements provide the expected behavior and help connect threat concerns to design and validation evidence.",
  },
  {
    question:
      "Which is the best example of a trust boundary?",
    choices: [
      "A heading in a requirements document.",
      "The point where approved application data moves from the internal service to an external scheduling vendor.",
      "A color used on a dashboard.",
      "A developer's job title.",
    ],
    answer: 1,
    explanation:
      "A trust boundary exists where identity, data, ownership, environment, or control crosses into different assumptions.",
  },
  {
    question:
      "A threat statement identifies a possible harmful outcome. What does that prove?",
    choices: [
      "That the harmful outcome definitely happened.",
      "That an attacker is present.",
      "Only that the design should consider the possibility and review controls and evidence.",
      "That the system must immediately be shut down.",
    ],
    answer: 2,
    explanation:
      "Threat modeling describes plausible concerns; it does not prove exploitation or impact.",
  },
  {
    question:
      "A business-critical dependency has no owner. How should the model treat it?",
    choices: [
      "Ignore it because the package currently works.",
      "Record the governance concern and keep ownership status Unknown until it is assigned or formally handled.",
      "Assume the registry is the owner.",
      "Test the package against a real production service.",
    ],
    answer: 1,
    explanation:
      "Missing ownership is a legitimate model concern and evidence gap.",
  },
  {
    question:
      "Why do change triggers matter in threat modeling?",
    choices: [
      "They identify future changes that can invalidate earlier assumptions and require renewed review.",
      "They prevent the software from ever changing.",
      "They eliminate the need for requirements.",
      "They automatically assign severity.",
    ],
    answer: 0,
    explanation:
      "Threat models should evolve with new roles, data, dependencies, integrations, architecture, and incident lessons.",
  },
  {
    question:
      "Which response best handles missing evidence for a control?",
    choices: [
      "Assume the control works.",
      "Assume the control failed.",
      "Record the limitation as Unknown, identify the owner, and request appropriate evidence.",
      "Remove the concern from the model.",
    ],
    answer: 2,
    explanation:
      "Evidence discipline means preserving uncertainty instead of guessing.",
  },
];

const checklistItems = [
  "The threat model has a clear decision, audience, scope, owner, and review trigger.",
  "Users, services, roles, external parties, and privileged actors are identified.",
  "Important data, workflows, capabilities, and evidence sources are treated as assets when appropriate.",
  "Data flows and trust boundaries are documented.",
  "Threat concerns are written as safe, outcome-focused statements rather than operational harmful instructions.",
  "Security requirements are linked to relevant threat concerns.",
  "Existing controls are separated from evidence proving their behavior.",
  "Possible concern is not confused with confirmed harmful impact.",
  "Unknowns, stale evidence, and assumptions remain visible.",
  "Prioritization uses consistent business and security rationale.",
  "Each important concern has an owner and next action.",
  "Change triggers identify when the model must be revisited.",
  "No activity requires scanning, probing, exploitation, bypass testing, or unauthorized access to real systems.",
];

const takeaways = [
  "Software threat modeling is a design and decision process, not a vulnerability scan.",
  "A useful model starts with system purpose, actors, assets, data flows, trust boundaries, requirements, and assumptions.",
  "Threat statements should describe possible outcomes and safeguards without operational harmful detail.",
  "Requirements from A11.2 give the threat model a clear standard for expected behavior.",
  "Control presence and control effectiveness are different claims and require different evidence.",
  "A threat concern does not prove that harm occurred.",
  "Unknowns and assumptions should remain explicit until evidence resolves them.",
  "New roles, data uses, dependencies, integrations, and architecture changes should trigger model review.",
  "The final A11 threat model should help architecture and release decisions, not merely produce a long list of risks.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
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
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A11
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

export default function ThreatModelingForSoftwarePage() {
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
              A11.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Threat Modeling for Software
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Threat modeling helps a software team understand what matters,
            where trust changes, what undesirable outcomes should be considered,
            which safeguards reduce those concerns, and where evidence or
            ownership is still missing.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson is entirely defensive. You will analyze fictional
            architecture, requirements, trust boundaries, data flows,
            dependencies, assumptions, and supplied evidence. You will not scan,
            probe, exploit, or test a real application.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A11: Secure Software Architecture"
          lessonTitle="Threat Modeling for Software"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.3 Entry Readiness"
          items={[
            "I can explain the software lifecycle from A11.1.",
            "I can distinguish a security goal, requirement, implementation decision, and evidence from A11.2.",
            "I understand the idea of trust boundaries from earlier Advanced modules.",
            "I will use only fictional architecture and supplied evidence in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Threat Modeling Is Asking Better Design Questions"
        >
          <p className="leading-8">
            A fictional product team is preparing to add a scheduling
            integration to the Northbridge Student Services Portal. The team
            already has secure design requirements, but the new integration
            introduces an external service, a new data flow, a new dependency,
            and a new set of assumptions.
          </p>

          <p className="mt-4 leading-8">
            A weak review might ask, â€œIs the vendor secure?â€ A stronger threat
            model asks: What exact data leaves the application? Why is each field
            needed? Which system decides authorization? What happens if the
            vendor is unavailable? What should be logged? Who owns the
            dependency? What evidence supports those assumptions? Which future
            changes require renewed review?
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A useful threat model does not predict everything. It helps the
              team make better security decisions before uncertainty becomes
              hidden risk.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Why It Matters"
          title="Requirements Say What Should Happen â€” Threat Models Ask What Could Go Wrong"
        >
          <p className="leading-8">
            A11.2 defined expected behavior. Threat modeling adds another layer:
            it asks where the design could fail to meet that expectation,
            whether safeguards are strong enough, and which assumptions deserve
            evidence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Requirement",
                text:
                  "Counselors may view only assigned student records.",
              },
              {
                title: "Threat question",
                text:
                  "What if the assignment source is stale, incorrect, unavailable, or interpreted differently by two services?",
              },
              {
                title: "Design decision",
                text:
                  "Define the authoritative assignment source, failure behavior, logging, validation, and change triggers.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Framework"
          title="Seven Steps for Software Threat Modeling"
        >
          <p className="leading-8">
            There are many professional threat-modeling methods. CyberShield
            uses a simple evidence-first workflow that emphasizes architecture,
            requirements, ownership, uncertainty, and defensive decision-making.
          </p>

          <div className="mt-6 grid gap-5">
            {threatModelFlow.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[100px_1fr]">
                  <span className="text-4xl font-black text-cyan-300">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-semibold leading-7 text-cyan-100">
                      {item.question}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.detail}
                    </p>
                    <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                      Evidence: {item.evidence}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="System Model"
          title="Eight Elements to Identify Before Ranking Threats"
        >
          <p className="leading-8">
            A threat model becomes stronger when it is connected to a concrete
            software design instead of a generic list of threat categories.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {systemElements.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review question: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Threat-Modeling Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Boundaries"
          title="Where Security Assumptions Change"
        >
          <p className="leading-8">
            A trust boundary is not automatically dangerous. It simply marks a
            place where the design should make assumptions explicit. When data,
            identity, control, or ownership crosses the boundary, the software
            should know what it is trusting and why.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Boundary</th>
                  <th className="border-b border-slate-700 p-4">What crosses</th>
                  <th className="border-b border-slate-700 p-4">Questions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Browser â†’ Application",
                    "User session, requests, record references, submitted data",
                    "How is identity established? Which actions require authorization? What input is accepted? What errors are returned?",
                  ],
                  [
                    "Application â†’ Authorization Service",
                    "User identity, role, assignment, requested action, target reference",
                    "Which source is authoritative? What happens if the service is unavailable or data is stale?",
                  ],
                  [
                    "Application â†’ Database",
                    "Approved record queries and updates",
                    "Which data should be returned? Which service identity is used? How are privileged changes audited?",
                  ],
                  [
                    "Application â†’ Scheduling Vendor",
                    "Approved appointment fields",
                    "Why is each field needed? Who approved the purpose? What if the vendor requests additional data?",
                  ],
                  [
                    "Application â†’ Logging Platform",
                    "Audit events and operational telemetry",
                    "Which fields are required? Which secrets or private values are forbidden? Who can access the logs?",
                  ],
                  [
                    "Standard Workflow â†’ Privileged Workflow",
                    "Account recovery, role changes, broad exports, configuration actions",
                    "Which additional approval, authorization, logging, or separation-of-duty controls apply?",
                  ],
                ].map(([boundary, crosses, questions]) => (
                  <tr key={boundary} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {boundary}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {crosses}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-purple-100">
                      {questions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Threat Statements"
          title="Write Outcome-Focused Concerns"
        >
          <p className="leading-8">
            A safe threat statement describes an undesirable outcome and the
            conditions that make it worth reviewing. It does not teach someone
            how to cause that outcome.
          </p>

          <div className="mt-6 grid gap-5">
            {threatStatementParts.map((item, index) => (
              <article
                key={item.part}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-blue-50">{item.part}</h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.prompt}
                    </p>
                    <p className="mt-3 rounded-xl border border-blue-300/20 bg-slate-950/30 p-3 text-sm leading-7 text-white">
                      Example: {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="font-black">Combined example</p>
            <p className="mt-2 leading-7">
              If counselor assignments become stale, student-support records
              could be exposed to a user who no longer has the intended
              assignment, affecting privacy and least privilege. REQ-AUTHZ-03
              and the central authorization service reduce this concern, but
              the supplied evidence does not show delayed-assignment behavior,
              so that part remains Unknown.
            </p>
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Software Threat Model Dashboard"
          subtitle="Fictional design-review data only"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Threat Model Change Trigger"
          severity="Medium"
          time="11:20"
          source="Fictional Architecture Review"
          details="A temporary counselor role is planned for the next release. The current threat model and authorization requirement cover only the existing counselor role."
          recommendation="Reopen authorization, assignment, privileged-action, logging, and validation questions before release."
        />

        <Section
          eyebrow="Fictional Threat Register"
          title="Six Example Software Concerns"
        >
          <p className="leading-8">
            The register below shows how a professional model separates
            condition, affected asset, possible impact, controls, evidence,
            ownership, and next action.
          </p>

          <div className="mt-6 grid gap-5">
            {fictionalConcerns.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.area}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Condition
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.condition}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Asset
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.asset}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Possible impact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.impact}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Controls
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.controls}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Owner / next action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.owner}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-100">
                      {item.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Threat-Model Decision Log"
          logs={logs}
        />

        <Section
          eyebrow="Threat Review Matrix"
          title="Ask Questions the Evidence Can Answer"
        >
          <div className="grid gap-5">
            {reviewMatrix.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-purple-100">
                  Useful evidence: {item.evidence}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                    Weak: {item.weak}
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    Stronger: {item.strong}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: New Temporary Counselor Role"
          question="What is the strongest threat-model conclusion?"
          evidence={[
            "The current authorization requirement covers the standard counselor role.",
            "A temporary counselor role will be introduced next release.",
            "The new role may have a shorter assignment period and different approval owner.",
            "No updated requirement, model, or validation evidence is supplied yet.",
          ]}
          options={[
            "The current model automatically covers the new role because both roles are counselors.",
            "The new role is a change trigger and should reopen authorization, assignment, approval, logging, and validation questions.",
            "The new role should be tested in production without approval.",
            "The threat model should ignore role differences because architecture components are unchanged.",
          ]}
          bestAnswer={1}
          explanation="A role change can alter privilege, assignment, approval, and evidence assumptions even when the application components remain the same."
        />

        <Section
          eyebrow="Prioritization"
          title="Rank Concerns With Consistent Reasoning"
        >
          <p className="leading-8">
            A threat model should help a team decide what deserves attention
            first. Avoid dramatic labels with no explanation. Use consistent
            factors and record the rationale.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                factor: "Business impact",
                prompt:
                  "What user, mission, privacy, integrity, availability, or operational consequence could result?",
              },
              {
                factor: "Privilege",
                prompt:
                  "Does the concern involve ordinary use or high-impact administrative capability?",
              },
              {
                factor: "Data sensitivity",
                prompt:
                  "Would the concern affect sensitive records, private data, configuration, secrets, or audit evidence?",
              },
              {
                factor: "Exposure",
                prompt:
                  "How broadly is the affected workflow used or reachable within the intended architecture?",
              },
              {
                factor: "Control strength",
                prompt:
                  "Are safeguards layered, clearly owned, validated, monitored, and recoverable?",
              },
              {
                factor: "Evidence confidence",
                prompt:
                  "Is the conclusion supported by current evidence or dependent on assumptions and Unknowns?",
              },
              {
                factor: "Dependency",
                prompt:
                  "Does the concern rely on a vendor, package, identity source, data source, or external service?",
              },
              {
                factor: "Recovery difficulty",
                prompt:
                  "If the design fails, how difficult would it be to contain, restore, or safely reverse the impact?",
              },
            ].map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.prompt}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Control Mapping"
          title="Controls Reduce Concerns â€” Evidence Supports the Claim"
        >
          <p className="leading-8">
            A threat model should not stop at â€œwe have a control.â€ Ask what the
            control is supposed to do, who owns it, how it is validated, what
            its limitations are, and what residual risk remains.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[1000px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Concern</th>
                  <th className="border-b border-slate-700 p-4">Requirement / control</th>
                  <th className="border-b border-slate-700 p-4">Evidence</th>
                  <th className="border-b border-slate-700 p-4">Residual question</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Incorrect counselor assignment",
                    "REQ-AUTHZ-03 + central authorization service",
                    "Normal positive/negative tests",
                    "Delayed assignment update behavior remains Unknown",
                  ],
                  [
                    "Excess vendor data",
                    "REQ-DATA-02 + approved field list",
                    "Integration contract + supplied field evidence",
                    "Future field requests must trigger review",
                  ],
                  [
                    "Missing privileged audit evidence",
                    "REQ-LOG-04 + audit logging",
                    "Sample events + source-health summary",
                    "Logging-schema changes require re-review",
                  ],
                  [
                    "Notification provider outage",
                    "REQ-RES-02 + queue/retry design",
                    "Partial failure-mode evidence",
                    "Recovery validation incomplete",
                  ],
                ].map(([concern, control, evidenceText, residual]) => (
                  <tr key={concern} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-semibold text-white">
                      {concern}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-cyan-100">
                      {control}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-emerald-100">
                      {evidenceText}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-yellow-100">
                      {residual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Common Mistakes"
          title="Seven Ways Threat Models Lose Quality"
        >
          <div className="grid gap-5">
            {commonMistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.mistake}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.why}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” Temporary Counselor Role"
          scenario="The fictional Northbridge team plans a temporary counselor role with a shorter assignment period and a different approval owner. The existing threat model covers only the standard counselor role."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Missing Control Evidence"
          scenario="A threat-model concern says an external integration should share only approved fields. The design claims a field filter exists, but the current evidence package does not contain validation results."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Software Threat Model"
        >
          <p className="leading-8">
            Use the fictional Northbridge Student Services Portal and the
            supplied requirements from A11.2. Do not inspect or test any real
            application, repository, API, account, device, or network.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Write the decision the threat model must support.",
              "List the fictional users, services, external parties, and privileged roles.",
              "List the important data, capabilities, workflows, evidence sources, and dependencies.",
              "Describe the main data flows.",
              "Mark the trust boundaries.",
              "Link at least six A11.2 security requirements.",
              "Write at least eight safe, outcome-focused threat statements.",
              "For each concern, record existing controls and supplied evidence.",
              "Mark Unknowns and assumptions explicitly.",
              "Prioritize concerns with written rationale.",
              "Assign owner and next action.",
              "Define at least four change triggers.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Safety rule</p>
            <p className="mt-2 leading-7">
              Keep threat statements focused on defensive outcomes. Do not write
              step-by-step exploitation procedures, payloads, bypass methods,
              credential attacks, scanning instructions, or real-system test
              steps.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Possibility vs. Proof"
          question="A design concern says a missing dependency owner could delay secure update decisions. What does the evidence actually support?"
          evidence={[
            "REQ-DEP-01 requires an owner for every business-critical dependency.",
            "The dependency record contains source, version, and support status.",
            "The owner field is blank.",
            "No evidence shows an incident, compromise, or failed update occurred.",
          ]}
          options={[
            "A compromise definitely occurred.",
            "The dependency is automatically unsafe.",
            "The governance requirement is incomplete, creating a valid design and maintenance concern, but no harmful event is proven.",
            "The concern should be removed because no incident occurred.",
          ]}
          bestAnswer={2}
          explanation="The missing owner supports a governance and lifecycle concern. It does not prove compromise or harmful use."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Model a High-Impact Account-Recovery Workflow"
        >
          <p className="leading-8">
            Create a safe fictional threat-model section for an account-recovery
            workflow. Focus on architecture questions, not operational attack
            procedures.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business purpose of recovery",
              "Actors and approval roles",
              "Identity evidence used",
              "Privileged actions",
              "Trust boundaries",
              "Separation-of-duty expectations",
              "Audit evidence",
              "Failure behavior",
              "User notification",
              "Recovery rollback or reversal",
              "Dependencies",
              "Assumptions and Unknowns",
              "Threat concerns",
              "Existing controls",
              "Validation needs",
              "Change triggers",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            A strong submission should explain what the workflow must protect,
            where trust changes, what could go wrong at a high level, which
            safeguards reduce those concerns, and what evidence is still needed.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.3 Mini Quiz: Threat Modeling for Software"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Software Threat Model"
          prompt="Create the third artifact for your A11 Secure Software Design Assessment: a threat model for the fictional Northbridge portal. Include decision, scope, actors, assets, components, data flows, trust boundaries, privileged actions, dependencies, assumptions, at least eight outcome-focused threat concerns, linked requirements, controls, evidence, uncertainty, owners, priorities, next actions, and change triggers."
          tips={[
            "Use only fictional architecture, roles, data, services, dependencies, and evidence.",
            "Link threat concerns to requirements created in A11.2.",
            "Separate possible concern from confirmed evidence or impact.",
            "Mark Unknowns instead of guessing.",
            "Describe safeguards and validation evidence without operational harmful detail.",
            "Add a one-paragraph executive summary explaining the three most important design concerns and why they matter.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.4?"
        >
          <p className="leading-8">
            A11.4 will focus on secrets management. Before moving on, check
            whether your threat model clearly separates design concerns,
            controls, evidence, and uncertainty.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify actors, assets, components, data flows, trust boundaries, dependencies, and privileged actions.",
              "I can write safe, outcome-focused threat statements without harmful operational detail.",
              "I can link threat concerns to secure design requirements.",
              "I can separate control presence from evidence of control effectiveness.",
              "I can keep assumptions and Unknowns visible and define change triggers.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Threat Model Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the decision",
                detail:
                  "State what architecture, release, or design question the model is meant to support.",
              },
              {
                title: "Use a simple system diagram",
                detail:
                  "Show fictional actors, services, data stores, external systems, data flows, and trust boundaries without real internal details.",
              },
              {
                title: "Use stable threat IDs",
                detail:
                  "Label concerns TM-01, TM-02, and so on so requirements, evidence, mitigation, and validation can reference them consistently.",
              },
              {
                title: "Write bounded threat statements",
                detail:
                  "Describe conditions and undesirable outcomes at a defensive level without operational attack instructions.",
              },
              {
                title: "Link requirements",
                detail:
                  "Show which A11.2 requirements address or are affected by each concern.",
              },
              {
                title: "Separate controls and evidence",
                detail:
                  "A design may claim a safeguard exists; evidence is what supports whether the safeguard behaves as intended.",
              },
              {
                title: "Show uncertainty",
                detail:
                  "Use Unknown, Conditional, assumption, or evidence gap rather than forcing false certainty.",
              },
              {
                title: "End with decisions",
                detail:
                  "Summarize priorities, owners, next actions, residual risk, and the changes that should reopen the model.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Threat modeling is defensive architecture reasoning
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize scanning, probing, exploitation,
            credential attacks, bypass testing, fuzzing, payload development,
            destructive testing, or access to real applications, APIs,
            repositories, devices, accounts, or networks. Use fictional or
            explicitly authorized evidence only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.3 Threat Modeling for Software Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a software threat-model framework that connects
            architecture, requirements, controls, evidence, priorities, and
            uncertainty. Next, A11.4 focuses on Secrets Management Concepts and
            how software teams govern sensitive credentials and configuration
            throughout the lifecycle.
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
