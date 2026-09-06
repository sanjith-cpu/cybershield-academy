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
const previousLesson = `${modulePath}/security-in-the-software-lifecycle`;
const nextLesson = `${modulePath}/threat-modeling-for-software`;

const objectives = [
  "Explain why vague statements such as â€œmake it secureâ€ are not strong enough to guide architecture, implementation, review, testing, or release.",
  "Write security requirements with clear scope, expected behavior, ownership, evidence, acceptance criteria, and change triggers.",
  "Distinguish business goals, security goals, security requirements, implementation choices, assumptions, and validation evidence.",
  "Evaluate fictional requirements for identity, authorization, data handling, logging, resilience, configuration, dependencies, and deployment readiness.",
  "Build a secure requirements register that becomes a traceable input to later A11 architecture, review, validation, and release work.",
];

const requirementLayers = [
  {
    layer: "Business goal",
    question: "What outcome does the organization need?",
    example:
      "Counselors need timely access to assigned student-support records so they can provide approved services.",
    problem:
      "A business goal explains purpose, but it does not define security behavior.",
  },
  {
    layer: "Security goal",
    question: "What security quality should protect that outcome?",
    example:
      "Only appropriately authorized users should access student-support records.",
    problem:
      "A security goal is useful direction, but it can still be too broad for implementation and validation.",
  },
  {
    layer: "Security requirement",
    question: "What specific behavior must the system enforce?",
    example:
      "The application must permit counselors to view only records for students assigned to them through the approved assignment source, and denied access attempts must create an audit event.",
    problem:
      "This is specific enough to influence design, review, and test planning.",
  },
  {
    layer: "Design / implementation decision",
    question: "How will the architecture meet the requirement?",
    example:
      "The application service uses the central authorization service to check counselor assignment before returning a record.",
    problem:
      "This is one way to satisfy the requirement, not the requirement itself.",
  },
  {
    layer: "Validation evidence",
    question: "What evidence supports the claim that the requirement works?",
    example:
      "Authorized test evidence shows assigned counselors succeed, unassigned counselors receive the expected denial, and corresponding audit events are recorded.",
    problem:
      "Evidence supports a claim but does not replace the requirement.",
  },
];

const qualityAttributes = [
  {
    title: "Specific",
    weak:
      "The system should have good access control.",
    strong:
      "Only approved staff roles may perform account-recovery actions, and every successful or denied recovery attempt must create an audit event.",
    why:
      "The stronger version identifies actors, action, expected enforcement, and evidence behavior.",
  },
  {
    title: "Scoped",
    weak:
      "All data must always be encrypted.",
    strong:
      "Student-support records must use approved protected transport between the browser, application, API, and storage services, and approved storage protection must be enabled for persistent records.",
    why:
      "The stronger version identifies where the requirement applies.",
  },
  {
    title: "Owned",
    weak:
      "Security will check this later.",
    strong:
      "The application team owns implementation, the security reviewer owns requirement review, and the release owner confirms evidence before release.",
    why:
      "Explicit ownership reduces abandoned requirements.",
  },
  {
    title: "Testable",
    weak:
      "The login should be secure.",
    strong:
      "The application must require the approved identity provider for staff access and must reject staff sessions that do not contain the required approved role claim.",
    why:
      "The stronger statement can be tied to expected outcomes in an authorized test environment.",
  },
  {
    title: "Evidence-linked",
    weak:
      "Logging is enabled.",
    strong:
      "Privileged account changes must generate audit events containing actor, action, target reference, result, timestamp, and correlation identifier without recording secret values.",
    why:
      "The requirement says what defenders should be able to verify.",
  },
  {
    title: "Change-aware",
    weak:
      "This requirement is permanent and never needs review.",
    strong:
      "Re-review this requirement when a new privileged role, new data category, new identity provider, or new external integration is introduced.",
    why:
      "Changes can invalidate earlier assumptions.",
  },
];

const requirementDomains = [
  {
    code: "ID",
    title: "Identity",
    questions: [
      "Which users or services need identities?",
      "Which identity provider or approved identity source is authoritative?",
      "Which authentication expectations differ by user or action?",
      "How are disabled, expired, or inactive identities handled?",
      "Which account-recovery paths require additional approval or evidence?",
    ],
    example:
      "Administrative staff access must use the approved workforce identity provider, and disabled staff accounts must not receive new application sessions.",
  },
  {
    code: "AUTHZ",
    title: "Authorization",
    questions: [
      "Which roles, attributes, assignments, ownership rules, or workflow states control access?",
      "Which actions are high impact?",
      "Where should authorization be enforced?",
      "What should happen when access is denied?",
      "Which actions require stronger approval or separation of duties?",
    ],
    example:
      "Counselors may view only assigned student records, and assignment must be checked by the application service before the record is returned.",
  },
  {
    code: "DATA",
    title: "Data handling",
    questions: [
      "Which data is sensitive?",
      "What is the minimum data needed for each purpose?",
      "Where may the data flow?",
      "How long should it be retained?",
      "Who owns deletion, archival, export, or correction decisions?",
    ],
    example:
      "The scheduling integration may receive appointment date, time, and fictional student reference code, but must not receive counseling notes.",
  },
  {
    code: "LOG",
    title: "Logging and auditability",
    questions: [
      "Which actions must be visible to defenders?",
      "Which fields are useful for investigation?",
      "Which sensitive values must not be logged?",
      "Who can access the logs?",
      "How is source health monitored?",
    ],
    example:
      "Every privileged account change must record actor, target reference, action, result, timestamp, and correlation identifier without recording passwords, tokens, or secret values.",
  },
  {
    code: "RES",
    title: "Resilience and recovery",
    questions: [
      "Which services must remain available?",
      "What failures need safe degraded behavior?",
      "What must be recoverable?",
      "Who owns rollback?",
      "How is recovery validated?",
    ],
    example:
      "If the notification provider is unavailable, the core record workflow must remain available and failed notifications must be queued for approved retry.",
  },
  {
    code: "CFG",
    title: "Configuration",
    questions: [
      "Which settings are security-sensitive?",
      "What is the approved baseline?",
      "How are changes reviewed?",
      "How is environment separation maintained?",
      "How is drift detected?",
    ],
    example:
      "Production authorization and logging settings must match the approved configuration baseline, and changes require a reviewed change record.",
  },
  {
    code: "DEP",
    title: "Dependencies",
    questions: [
      "Which packages, services, suppliers, or build tools matter to the software?",
      "Who owns them?",
      "What support and provenance evidence is required?",
      "How are updates reviewed?",
      "What changes trigger revalidation?",
    ],
    example:
      "Business-critical dependencies must have an owner, approved source, recorded version, support status, and defined review trigger.",
  },
  {
    code: "REL",
    title: "Release and deployment",
    questions: [
      "What evidence must exist before release?",
      "Which findings are blocking?",
      "What exception process exists?",
      "What rollback and monitoring evidence is required?",
      "What post-release checks confirm expected behavior?",
    ],
    example:
      "A production release may proceed only when blocking security requirements are Confirmed or covered by an approved, time-bounded exception with an accountable owner.",
  },
];

const vocabulary = [
  {
    term: "Business requirement",
    definition:
      "A statement describing what the organization, user, or product needs to accomplish.",
  },
  {
    term: "Security goal",
    definition:
      "A broad protection objective such as confidentiality, integrity, availability, least privilege, privacy, or auditability.",
  },
  {
    term: "Security requirement",
    definition:
      "A specific, reviewable statement describing required security behavior, scope, ownership, evidence, and success conditions.",
  },
  {
    term: "Acceptance criterion",
    definition:
      "A condition that must be satisfied before a requirement can be considered complete or acceptable.",
  },
  {
    term: "Assumption",
    definition:
      "A belief used by the design that has not necessarily been proven and may need evidence or future review.",
  },
  {
    term: "Constraint",
    definition:
      "A limit that influences the design, such as required technology, policy, performance, budget, compatibility, or regulation.",
  },
  {
    term: "Control",
    definition:
      "A safeguard, process, design feature, or operational measure used to reduce risk or enforce a requirement.",
  },
  {
    term: "Traceability",
    definition:
      "The connection from requirement to architecture, implementation, review, validation, release, and later maintenance evidence.",
  },
  {
    term: "Change trigger",
    definition:
      "A future event that requires the requirement or its supporting evidence to be reviewed again.",
  },
  {
    term: "Requirement owner",
    definition:
      "The role accountable for keeping the requirement accurate, meaningful, and appropriately reviewed.",
  },
  {
    term: "Evidence owner",
    definition:
      "The role or team responsible for producing or maintaining the evidence that supports the requirement.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk remaining after the requirement, controls, evidence, and exceptions are considered.",
  },
];

const fictionalRequirements = [
  {
    id: "REQ-ID-01",
    domain: "Identity",
    requirement:
      "Approved staff access must use the workforce identity provider, and disabled workforce accounts must not receive new application sessions.",
    owner: "Identity Owner + Application Owner",
    evidence:
      "Identity configuration summary, application design note, authorized test result, release checklist.",
    acceptance:
      "Approved active staff can establish expected sessions; disabled fictional staff identities cannot.",
    trigger:
      "New identity provider, new staff role, recovery-flow change, or session architecture change.",
    status: "Confirmed",
  },
  {
    id: "REQ-AUTHZ-03",
    domain: "Authorization",
    requirement:
      "Counselors may view only records for students assigned to them by the approved assignment source.",
    owner: "Product Owner + Application Owner",
    evidence:
      "Authorization design, peer-review evidence, assignment mapping, authorized positive and negative test results.",
    acceptance:
      "Assigned counselor succeeds; unassigned counselor receives expected denial; no record data is returned for the denied request.",
    trigger:
      "New counselor role, assignment-source change, new record type, or new privileged workflow.",
    status: "Confirmed",
  },
  {
    id: "REQ-DATA-02",
    domain: "Data",
    requirement:
      "The scheduling integration may receive appointment date, time, and fictional student reference code but must not receive counseling-note content.",
    owner: "Data Owner + Integration Owner",
    evidence:
      "Approved field list, data-flow diagram, integration contract, validation result.",
    acceptance:
      "Only the approved minimum fields appear in the supplied integration evidence.",
    trigger:
      "New scheduling feature, new field request, new vendor, or changed business purpose.",
    status: "Conditional",
  },
  {
    id: "REQ-LOG-04",
    domain: "Logging",
    requirement:
      "Privileged account changes must create audit events with actor, target reference, action, result, timestamp, and correlation identifier without recording secret values.",
    owner: "Application Owner + Security Monitoring Owner",
    evidence:
      "Logging design, supplied sample events, validation results, source-health status.",
    acceptance:
      "Required fields are present for approved test events and forbidden secret values are absent.",
    trigger:
      "New privileged action, log schema change, telemetry platform change, or privacy requirement change.",
    status: "Confirmed",
  },
  {
    id: "REQ-RES-02",
    domain: "Resilience",
    requirement:
      "The core student-record workflow must remain available when the external notification provider is unavailable.",
    owner: "Service Owner + Reliability Owner",
    evidence:
      "Architecture design, safe failure-mode test, queue behavior summary, recovery evidence.",
    acceptance:
      "Core record workflow remains functional; notification failure is recorded and handled according to the approved retry design.",
    trigger:
      "Notification provider change, queue change, major workflow redesign, or recovery architecture change.",
    status: "Conditional",
  },
  {
    id: "REQ-DEP-01",
    domain: "Dependency",
    requirement:
      "Every business-critical software dependency must have a recorded owner, approved source, version, support status, and review trigger.",
    owner: "Engineering Lead + Dependency Owner",
    evidence:
      "Dependency inventory, approval record, support note, update policy.",
    acceptance:
      "No business-critical dependency remains without ownership or source metadata.",
    trigger:
      "New dependency, major version change, support-status change, supplier change, or build-system change.",
    status: "Unknown",
  },
  {
    id: "REQ-REL-01",
    domain: "Release",
    requirement:
      "Production release requires all blocking security requirements to be Confirmed or governed by an approved, time-bounded exception.",
    owner: "Release Owner + Risk Owner",
    evidence:
      "Requirements matrix, exception register, approval record, rollback plan, monitoring readiness.",
    acceptance:
      "No blocking requirement is Unknown without formal disposition.",
    trigger:
      "Release-process change, new blocking requirement category, exception-policy change, or major deployment-model change.",
    status: "Confirmed",
  },
];

const requirementAntiPatterns = [
  {
    anti: "Vague adjective",
    example:
      "The application must be very secure.",
    why:
      "Words like secure, strong, safe, robust, and hardened do not identify required behavior.",
    repair:
      "Describe the actors, action, data, boundary, expected enforcement, evidence, and success condition.",
  },
  {
    anti: "Implementation disguised as requirement",
    example:
      "The application must use Tool X for authorization.",
    why:
      "A product may become dependent on one implementation before the actual security need is understood.",
    repair:
      "State the security behavior first; record the approved implementation separately.",
  },
  {
    anti: "Unbounded universal",
    example:
      "Everything must be logged forever.",
    why:
      "The statement ignores privacy, cost, retention, relevance, source health, and sensitive values.",
    repair:
      "Define which events matter, which fields are needed, which values are forbidden, retention, access, and owner.",
  },
  {
    anti: "No evidence",
    example:
      "Admins are protected by strong controls.",
    why:
      "The team cannot tell how to prove or review the statement.",
    repair:
      "Add expected evidence and acceptance criteria.",
  },
  {
    anti: "No owner",
    example:
      "Someone must review critical dependencies.",
    why:
      "The requirement can remain open indefinitely.",
    repair:
      "Assign a dependency owner, evidence owner, and escalation path.",
  },
  {
    anti: "No change trigger",
    example:
      "Requirement approved once and never reviewed again.",
    why:
      "New roles, data, dependencies, integrations, or deployment patterns can invalidate old assumptions.",
    repair:
      "Define the changes that reopen the requirement.",
  },
  {
    anti: "Impossible perfection",
    example:
      "The service must never fail or experience any security problem.",
    why:
      "The requirement cannot be realistically validated and may hide the need for resilience and recovery.",
    repair:
      "Define availability, recovery, safe failure behavior, monitoring, and acceptable residual risk.",
  },
];

const requirementReviewQuestions = [
  "Who or what does the requirement apply to?",
  "What specific security behavior is expected?",
  "Where in the architecture should the behavior be enforced?",
  "Who owns the requirement?",
  "Who owns the implementation evidence?",
  "What evidence can support the requirement?",
  "What result counts as acceptable?",
  "What result would block release or require an exception?",
  "What assumptions or dependencies affect the requirement?",
  "What future changes should reopen the requirement?",
  "What sensitive information must not appear in validation or logging evidence?",
  "How will the requirement remain traceable through review, release, operation, and maintenance?",
];

const dashboardMetrics = [
  {
    label: "Security requirements",
    value: "24",
    note: "18 Confirmed, 4 Conditional, 2 Unknown",
  },
  {
    label: "Requirements with owners",
    value: "23 / 24",
    note: "Dependency review ownership missing for one critical component",
  },
  {
    label: "Traceability coverage",
    value: "88%",
    note: "Three requirements lack current validation evidence",
  },
  {
    label: "Open change triggers",
    value: "4",
    note: "New integration, role change, dependency baseline update, logging schema change",
  },
];

const logs = [
  "[08:55] REQ-ID-01     owner=Identity+Application status=CONFIRMED",
  "[09:12] REQ-AUTHZ-03  assigned-counselor rule linked to design decision ADR-17",
  "[09:40] REQ-DATA-02   approved field list pending Data Owner signature",
  "[10:05] REQ-LOG-04    sample audit events confirm required fields; no secret values observed",
  "[10:32] REQ-DEP-01    dependency owner missing -> status UNKNOWN",
  "[11:10] REQ-RES-02    failure-mode evidence partial -> status CONDITIONAL",
  "[11:44] REQ-REL-01    release rule approved by Release Owner + Risk Owner",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Rewrite the goal into a specific authorization requirement with scope, owner, evidence, and acceptance criteria before implementation proceeds.",
    outcome:
      "Best. The team now has a requirement that architecture, implementation, review, and validation can trace.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep â€œmake access secureâ€ because experienced developers already know what it means.",
    outcome:
      "Risky. Different people may implement different assumptions and reviewers will not know what success means.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Choose a popular security product first and define the requirement afterward.",
    outcome:
      "Caution. The implementation may drive the requirement instead of the actual business and security need.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Treat the requested new data field as a change trigger and reopen the data-minimization, purpose, authorization, logging, and vendor requirements.",
    outcome:
      "Best. The original requirement may no longer match the new data use.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Add the field because the integration was already approved once.",
    outcome:
      "Risky. Prior approval does not automatically cover new data or a changed purpose.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Add the field temporarily and document it later if anyone notices.",
    outcome:
      "Risky. This bypasses ownership, review, and evidence requirements.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Which statement is the strongest security requirement?",
    choices: [
      "The application must be secure.",
      "The application should use strong access control.",
      "Counselors may view only records for students assigned to them by the approved assignment source, and denied access attempts must create an audit event.",
      "Developers should try their best to prevent unauthorized access.",
    ],
    answer: 2,
    explanation:
      "The strongest requirement identifies actors, scope, expected enforcement, and evidence behavior.",
  },
  {
    question:
      "What is the difference between a security requirement and an implementation decision?",
    choices: [
      "There is no difference.",
      "A requirement states the security behavior that must be achieved; an implementation decision describes one way the architecture may achieve it.",
      "Implementation decisions are always more important than requirements.",
      "Requirements should name a product or vendor whenever possible.",
    ],
    answer: 1,
    explanation:
      "Keeping the required outcome separate from the chosen implementation makes design reasoning clearer and more adaptable.",
  },
  {
    question:
      "Why should a requirement include acceptance criteria?",
    choices: [
      "So the requirement sounds more technical.",
      "So the team knows what evidence and result are sufficient to consider the requirement satisfied.",
      "So no one needs to review it.",
      "So the requirement can never change.",
    ],
    answer: 1,
    explanation:
      "Acceptance criteria define what success means and help reviewers and testers evaluate evidence consistently.",
  },
  {
    question:
      "A business-critical dependency has no owner. What is the strongest status?",
    choices: [
      "Confirmed because the dependency already works.",
      "Unknown or incomplete until ownership and required evidence are established.",
      "Safe because it came from a popular registry.",
      "Not applicable because dependencies are not security concerns.",
    ],
    answer: 1,
    explanation:
      "A requirement involving dependency governance is incomplete when accountability is missing.",
  },
  {
    question:
      "Which is the best reason to define change triggers?",
    choices: [
      "To make requirements longer.",
      "To identify future changes that can invalidate earlier assumptions and require re-review.",
      "To prevent software from ever changing.",
      "To avoid testing requirements.",
    ],
    answer: 1,
    explanation:
      "Change triggers keep requirements current when roles, data, dependencies, integrations, or architecture change.",
  },
  {
    question:
      "What is the strongest logging requirement?",
    choices: [
      "Log everything forever.",
      "Turn on logging.",
      "Privileged account changes must record actor, target reference, action, result, timestamp, and correlation identifier without recording secret values.",
      "Developers can decide what to log after an incident.",
    ],
    answer: 2,
    explanation:
      "The stronger requirement defines relevant events, required fields, and a privacy boundary.",
  },
  {
    question:
      "A requirement says a new vendor may receive three approved fields. The vendor now requests a fourth sensitive field for a new feature. What should happen?",
    choices: [
      "Add it because the vendor is already integrated.",
      "Treat the request as a change trigger and re-review purpose, minimization, authorization, privacy, logging, and validation requirements.",
      "Send the field temporarily without documentation.",
      "Assume the previous approval automatically covers all future fields.",
    ],
    answer: 1,
    explanation:
      "A changed data set or purpose can invalidate the original requirement and should trigger renewed review.",
  },
];

const checklistItems = [
  "The requirement describes security behavior rather than vague intent.",
  "The scope identifies the relevant users, services, data, actions, or environments.",
  "The requirement is separated from the chosen implementation technology.",
  "A requirement owner is named.",
  "An evidence owner or evidence source is identified.",
  "Acceptance criteria describe what success looks like.",
  "Blocking conditions or exception handling are clear when needed.",
  "Assumptions and dependencies are visible.",
  "Change triggers identify when the requirement must be reviewed again.",
  "Sensitive information is excluded from logs, examples, and portfolio evidence.",
  "Traceability to architecture, review, validation, and release is possible.",
  "No requirement depends on unauthorized testing of real systems.",
];

const takeaways = [
  "A security goal is direction; a security requirement is a specific, reviewable behavior.",
  "Strong requirements define scope, ownership, evidence, acceptance criteria, and change triggers.",
  "Implementation choices should satisfy requirements rather than replace them.",
  "Traceability connects the requirement to architecture, implementation, review, validation, release, and maintenance.",
  "Unknown is the correct status when required evidence or ownership is missing.",
  "Security requirements should cover identity, authorization, data, logging, resilience, configuration, dependencies, and releaseâ€”not only authentication.",
  "Change triggers keep requirements useful as software evolves.",
  "The A11 requirements register becomes a core input to threat modeling, code review, testing, and deployment decisions.",
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

export default function SecureDesignRequirementsPage() {
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
              A11.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secure Design Requirements
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            â€œMake it secureâ€ is not a requirement. A strong security requirement
            tells the team what behavior is expected, where it applies, who owns
            it, what evidence should support it, what result counts as
            acceptable, and what future changes should cause it to be reviewed
            again.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson turns broad security goals into traceable design
            requirements that can guide architecture, implementation, code
            review, safe validation, release decisions, and maintenance.
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
          lessonTitle="Secure Design Requirements"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.2 Entry Readiness"
          items={[
            "I can explain how security fits across the software lifecycle from A11.1.",
            "I understand that requirements should exist before final implementation decisions are made.",
            "I can separate evidence from assumptions and mark missing evidence as Unknown.",
            "I am prepared to use only fictional examples and supplied evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Why â€œSecureâ€ Is Not a Testable Requirement"
        >
          <p className="leading-8">
            Imagine a fictional engineering team receives this statement:
            <strong className="text-white">
              {" "}â€œThe student portal must be secure.â€
            </strong>
          </p>

          <p className="mt-4 leading-8">
            The product owner may think it means only approved users can see
            records. The architect may think it means strong identity. A
            developer may think it means input validation. A monitoring analyst
            may think it means complete logging. A release owner may think it
            means no high-severity findings.
          </p>

          <p className="mt-4 leading-8">
            All of those concerns can matter, but the original sentence does not
            tell the team which behavior is required or how success will be
            demonstrated.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good security requirements reduce ambiguity before ambiguity turns
              into inconsistent design.
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
          title="Requirements Connect Every Later Security Decision"
        >
          <p className="leading-8">
            Architecture reviews need to know what behavior they are reviewing
            for. Code reviewers need to know which security assumptions matter.
            Testers need expected results. Release owners need blocking
            criteria. Operations teams need to know what behavior should remain
            observable after release.
          </p>

          <p className="mt-4 leading-8">
            A clear requirement becomes the common reference point across all of
            those activities.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Before implementation",
                text:
                  "Requirements shape architecture, data flows, trust boundaries, identities, dependencies, logging, and failure behavior.",
              },
              {
                title: "During implementation",
                text:
                  "Requirements guide code review, configuration review, dependency choices, and validation plans.",
              },
              {
                title: "After release",
                text:
                  "Requirements support monitoring expectations, change triggers, exception review, and maintenance decisions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Framework"
          title="Goal â†’ Requirement â†’ Design â†’ Evidence"
        >
          <p className="leading-8">
            One of the most important architecture skills is keeping different
            kinds of statements separate. A business goal is not a security
            requirement. A requirement is not an implementation choice. An
            implementation choice is not validation evidence.
          </p>

          <div className="mt-6 grid gap-5">
            {requirementLayers.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-5 md:grid-cols-[90px_1fr]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      {item.layer}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      {item.question}
                    </h3>

                    <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                      Example: {item.example}
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.problem}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Requirement Quality"
          title="Six Properties of a Strong Security Requirement"
        >
          <div className="grid gap-5">
            {qualityAttributes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Stronger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strong}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Requirements Language for A11"
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
          eyebrow="Requirement Domains"
          title="Eight Areas a Secure Software Design Should Consider"
        >
          <p className="leading-8">
            Not every application needs the same requirement set. The domains
            below are a review framework: they help teams ask whether important
            security behavior has been defined.
          </p>

          <div className="mt-6 grid gap-5">
            {requirementDomains.map((domain) => (
              <article
                key={domain.code}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl bg-cyan-300 px-3 py-2 font-mono font-black text-slate-950">
                    {domain.code}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {domain.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {domain.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50"
                    >
                      {question}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Example requirement: </span>
                  {domain.example}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Security Requirements Dashboard"
          subtitle="Fictional training data â€” requirement governance only"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Critical Dependency Requirement Has No Owner"
          severity="Medium"
          time="10:32"
          source="Fictional Requirements Review"
          details="REQ-DEP-01 requires every business-critical dependency to have an owner, approved source, version, support status, and review trigger. One critical dependency record has no owner."
          recommendation="Keep the requirement incomplete, assign accountable dependency ownership, and collect the missing governance evidence before marking it Confirmed."
        />

        <Section
          eyebrow="Requirements Register"
          title="What Traceable Requirements Look Like"
        >
          <p className="leading-8">
            A professional requirements register is more than a list of
            sentences. Each requirement should connect behavior, ownership,
            evidence, acceptance, status, and future review conditions.
          </p>

          <div className="mt-6 grid gap-5">
            {fictionalRequirements.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.domain}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-5 text-lg font-black leading-8 text-white">
                  {item.requirement}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.owner}
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

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Acceptance
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.acceptance}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Change trigger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.trigger}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Requirements Review Log"
          logs={logs}
        />

        <Section
          eyebrow="Requirement Review"
          title="Twelve Questions Before You Approve a Requirement"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {requirementReviewQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{question}</p>
              </div>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Authorization Requirement"
          question="Which conclusion is best supported by the fictional requirement package?"
          evidence={[
            "REQ-AUTHZ-03 says counselors may view only assigned student records.",
            "The design note says assignment is checked through the approved assignment source.",
            "Peer review confirms the application calls the central authorization service.",
            "Positive and negative authorized test evidence is attached.",
            "No evidence is supplied for a new temporary counselor role planned next month.",
          ]}
          options={[
            "The authorization requirement is permanently complete and never needs review.",
            "The current requirement is supported for the existing counselor role, but the new temporary role should trigger renewed requirement and authorization review.",
            "The requirement is invalid because it does not name a commercial security tool.",
            "The new role should be tested against production immediately without approval.",
          ]}
          bestAnswer={1}
          explanation="The supplied evidence supports the current requirement for the existing role. A new role changes the authorization model and should trigger re-review rather than being assumed covered."
        />

        <Section
          eyebrow="Requirement Anti-Patterns"
          title="Seven Ways Requirements Become Weak"
        >
          <div className="grid gap-5">
            {requirementAntiPatterns.map((item, index) => (
              <article
                key={item.anti}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.anti}
                    </h3>

                    <p className="mt-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                      Weak example: {item.example}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Why it fails: {item.why}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Repair: {item.repair}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Traceability"
          title="Follow One Requirement Across the Lifecycle"
        >
          <p className="leading-8">
            Use REQ-AUTHZ-03 as a traceability example. The requirement does not
            end when it is approved. It should remain connected to later
            evidence.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Lifecycle stage</th>
                  <th className="border-b border-slate-700 p-4">Traceability evidence</th>
                  <th className="border-b border-slate-700 p-4">Question answered</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Plan",
                    "Counselors need access to assigned student-support records.",
                    "Why does the feature exist?",
                  ],
                  [
                    "Requirement",
                    "REQ-AUTHZ-03 defines assignment-based access.",
                    "What behavior is required?",
                  ],
                  [
                    "Design",
                    "Central authorization service checks the approved assignment source.",
                    "Where should enforcement happen?",
                  ],
                  [
                    "Implementation review",
                    "Peer review confirms the protected path uses the approved authorization interface.",
                    "Does implementation follow the design?",
                  ],
                  [
                    "Validation",
                    "Assigned counselor succeeds; unassigned counselor receives denial; denied request returns no record data.",
                    "Does the requirement behave as expected?",
                  ],
                  [
                    "Release",
                    "Requirement status is Confirmed and linked to current evidence.",
                    "Is the evidence sufficient for release?",
                  ],
                  [
                    "Maintenance",
                    "New counselor role is introduced.",
                    "Which change trigger requires renewed review?",
                  ],
                ].map(([stage, evidenceText, question]) => (
                  <tr key={stage} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {stage}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {evidenceText}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-purple-100">
                      {question}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Rewrite Weak Requirements"
        >
          <p className="leading-8">
            Use the fictional Northbridge portal. Your job is to rewrite vague
            statements into requirements that are specific, scoped, owned,
            evidence-linked, testable, and change-aware.
          </p>

          <div className="mt-6 grid gap-5">
            {[
              {
                weak: "Use strong authentication.",
                prompts: [
                  "Which users or actions need stronger authentication?",
                  "Which approved identity source is authoritative?",
                  "What evidence would show the requirement is met?",
                  "What change would reopen the requirement?",
                ],
              },
              {
                weak: "Protect student data.",
                prompts: [
                  "Which data categories are in scope?",
                  "Who may access them?",
                  "Where may they flow?",
                  "What retention or deletion behavior is expected?",
                ],
              },
              {
                weak: "Log suspicious actions.",
                prompts: [
                  "Which actions matter?",
                  "Which fields are required?",
                  "Which sensitive values must not be logged?",
                  "Who owns source health and review?",
                ],
              },
              {
                weak: "Keep the portal available.",
                prompts: [
                  "Which workflow must remain available?",
                  "Which dependency failures should degrade safely?",
                  "What recovery behavior is expected?",
                  "How will the team validate it?",
                ],
              },
            ].map((item, index) => (
              <article
                key={item.weak}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                  Weak requirement {index + 1}
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  â€œ{item.weak}â€
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {item.prompts.map((prompt) => (
                    <div
                      key={prompt}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50"
                    >
                      {prompt}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not inspect or test any real application. Use only fictional
              requirements, invented architecture context, and supplied
              evidence.
            </p>
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 â€” The Vague Authorization Goal"
          scenario="A fictional product owner writes: â€œMake access secure for counselors.â€ Engineering wants to begin implementation immediately, but no one has defined which records counselors may access or what evidence should prove the rule."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” The New Vendor Field"
          scenario="The scheduling integration was approved to receive three minimum fields. A later feature request asks the vendor to receive a fourth sensitive field that was not included in the original purpose or requirement."
          choices={scenarioTwoChoices}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Dependency Requirement"
          question="What is the strongest conclusion about REQ-DEP-01?"
          evidence={[
            "REQ-DEP-01 requires every business-critical dependency to have an owner, approved source, version, support status, and review trigger.",
            "The dependency inventory lists the package name, source, version, and support status.",
            "The owner field is blank.",
            "No exception record explains the missing ownership.",
          ]}
          options={[
            "Mark the requirement Confirmed because most fields are present.",
            "Mark the requirement Unknown or incomplete until ownership is assigned or formally governed.",
            "Assume the registry owns the dependency.",
            "Ignore ownership because the package currently works.",
          ]}
          bestAnswer={1}
          explanation="The requirement explicitly includes ownership. Missing ownership means the requirement is not fully supported by the supplied evidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Create a Requirement That Survives Design Review"
        >
          <p className="leading-8">
            Write one fictional requirement for a high-impact account-recovery
            workflow. Your requirement should be strong enough that an
            architect, developer, reviewer, tester, release owner, and
            operations team can all use it.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business purpose",
              "Actors and roles",
              "Protected action",
              "Authorization expectation",
              "Required evidence",
              "Audit expectation",
              "Forbidden sensitive logging",
              "Acceptance criteria",
              "Requirement owner",
              "Evidence owner",
              "Blocking condition",
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
            A strong answer does not need to be long. It needs to be
            unambiguous, traceable, evidence-based, and reviewable.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.2 Mini Quiz: Secure Design Requirements"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Secure Requirements Register"
          prompt="Create the second artifact for your A11 Secure Software Design Assessment: a fictional secure requirements register with at least eight requirements spanning identity, authorization, data handling, logging, resilience, configuration, dependencies, and release. For each requirement include ID, scope, owner, evidence, acceptance criteria, status, assumptions or dependencies, and change trigger."
          tips={[
            "Use fictional systems, roles, data, dependencies, and evidence only.",
            "Keep the requirement separate from the implementation choice.",
            "Use bounded language such as Confirmed, Conditional, Unknown, or Blocked.",
            "Make at least one requirement Unknown because evidence or ownership is missing.",
            "Include at least one requirement that becomes stale when a new integration or role is introduced.",
            "Add a short traceability note showing how one requirement connects to design, review, validation, and release.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.3?"
        >
          <p className="leading-8">
            A11.3 will use these requirements as inputs to software threat
            modeling. Before moving on, make sure you can explain the difference
            between a goal, a requirement, a design choice, and evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can rewrite a vague security goal into specific expected behavior.",
              "I can identify requirement scope, owner, evidence, acceptance criteria, and change triggers.",
              "I can keep implementation technology separate from the underlying security requirement.",
              "I can mark a requirement Unknown when required evidence or ownership is missing.",
              "I can explain how requirements guide threat modeling, code review, safe validation, release, and maintenance.",
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
          title="How to Make the Requirements Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable IDs",
                detail:
                  "Give each requirement an identifier such as REQ-AUTHZ-03 so architecture, review, testing, release, and maintenance evidence can refer to it consistently.",
              },
              {
                title: "Keep one requirement focused",
                detail:
                  "Avoid combining five unrelated expectations into one giant sentence. Separate identity, authorization, logging, data, and resilience when their evidence differs.",
              },
              {
                title: "Make status visible",
                detail:
                  "Use states such as Confirmed, Conditional, Unknown, Blocked, or Not Applicable and explain what evidence supports the status.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the accountable role for the requirement and the role responsible for producing evidence.",
              },
              {
                title: "Show acceptance evidence",
                detail:
                  "State what result would demonstrate the requirement in an authorized test or review context.",
              },
              {
                title: "Document assumptions",
                detail:
                  "If the requirement depends on an identity provider, assignment source, vendor, data classification, or architecture boundary, make that dependency visible.",
              },
              {
                title: "Add change triggers",
                detail:
                  "Record the future changes that should reopen the requirement.",
              },
              {
                title: "Add one traceability example",
                detail:
                  "Show how a requirement maps to design, implementation review, validation evidence, release status, and maintenance trigger.",
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
            Requirements work is defensive design
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize testing, scanning, probing,
            exploitation, credential attacks, bypass attempts, fuzzing, or
            access to real applications, APIs, accounts, repositories, devices,
            or networks. Use fictional or explicitly authorized evidence only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.2 Secure Design Requirements Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a requirements framework that can guide the rest of
            A11. Next, A11.3 uses those requirements, architecture context, data
            flows, trust boundaries, dependencies, and assumptions to build a
            safe Software Threat Model.
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
