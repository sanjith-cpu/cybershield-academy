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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/secure-design-requirements`;

const objectives = [
  "Explain why software security must be integrated across the complete lifecycle instead of added only before release.",
  "Identify the security questions, evidence, owners, and decisions that belong at planning, design, implementation, review, testing, deployment, operation, maintenance, and retirement stages.",
  "Distinguish preventive controls, validation evidence, operational monitoring, and governance decisions across a fictional software lifecycle.",
  "Recognize lifecycle gaps such as missing ownership, late review, stale evidence, untracked dependencies, unvalidated requirements, and unsupported release assumptions.",
  "Build a professional lifecycle security map that can become the first section of the A11 Secure Software Design Assessment.",
];

const lifecycleStages = [
  {
    number: "01",
    stage: "Plan",
    question: "What are we building, for whom, and what would matter if it failed?",
    securityWork:
      "Identify users, business purpose, important information, regulated or sensitive data, expected availability, privileged actions, trust assumptions, suppliers, environments, and major abuse or misuse concerns.",
    evidence:
      "Product brief, data classification, stakeholder list, business impact notes, initial security goals, high-level risk assumptions.",
    owner:
      "Product owner, security representative, engineering lead, data owner.",
    decision:
      "Is the product scope understood well enough to define meaningful security requirements?",
  },
  {
    number: "02",
    stage: "Design",
    question: "How should the system enforce security expectations?",
    securityWork:
      "Translate security goals into architecture decisions: identity, authorization, data handling, trust boundaries, secrets, dependencies, logging, resilience, configuration, failure behavior, and change controls.",
    evidence:
      "Architecture diagram, requirements register, threat model, design review notes, dependency assumptions, trust-boundary map.",
    owner:
      "Security architect, software architect, engineering lead, service owners.",
    decision:
      "Does the design support the required security behavior before implementation begins?",
  },
  {
    number: "03",
    stage: "Implement",
    question: "Are implementation choices consistent with the approved design?",
    securityWork:
      "Follow secure coding standards, approved libraries, configuration conventions, secret-handling rules, authorization patterns, logging guidance, error-handling rules, and environment separation.",
    evidence:
      "Change records, pull requests, dependency metadata, static configuration summaries, code-review notes, implementation checklists.",
    owner:
      "Software engineers, reviewers, component owners.",
    decision:
      "Is the implementation traceable to the design requirements and approved patterns?",
  },
  {
    number: "04",
    stage: "Review",
    question: "What evidence shows the implementation still matches security intent?",
    securityWork:
      "Review code, architecture changes, dependencies, privileged paths, error handling, logging, configuration, assumptions, and requirement traceability using safe peer-review processes.",
    evidence:
      "Review comments, design-change records, approval notes, exception records, evidence links, unresolved questions.",
    owner:
      "Peer reviewers, security reviewers, software leads.",
    decision:
      "Are material concerns resolved, accepted by the right owner, or explicitly blocked?",
  },
  {
    number: "05",
    stage: "Validate",
    question: "What evidence shows the required behavior works as intended?",
    securityWork:
      "Use safe, authorized tests and supplied evidence to validate requirements, negative paths, configuration expectations, logging coverage, dependency baselines, rollback behavior, and release criteria.",
    evidence:
      "Test results, requirements matrix, environment scope, expected outcomes, failed checks, retest evidence, sign-off notes.",
    owner:
      "Engineers, testers, security reviewers, release owners.",
    decision:
      "Is the evidence sufficient to support release, or are gaps still blocking?",
  },
  {
    number: "06",
    stage: "Release",
    question: "Is the approved software package ready to move into the intended environment?",
    securityWork:
      "Confirm artifact identity, approved version, configuration baseline, environment separation, access controls, monitoring, rollback plan, known exceptions, ownership, and release approvals.",
    evidence:
      "Release packet, artifact metadata, configuration baseline, approval record, rollback plan, monitoring checklist.",
    owner:
      "Release engineer, service owner, security approver, accountable risk owner.",
    decision:
      "Proceed, pause, or proceed only under a governed exception with explicit ownership and expiration.",
  },
  {
    number: "07",
    stage: "Operate",
    question: "Does the software continue to behave safely after release?",
    securityWork:
      "Monitor important security events, source health, authorization decisions, service health, error trends, configuration drift, dependency status, and operational exceptions.",
    evidence:
      "Monitoring dashboards, source-health status, alert summaries, change records, support trends, security review notes.",
    owner:
      "Operations, engineering, security operations, service owners.",
    decision:
      "Is the operational evidence consistent with the expected security posture?",
  },
  {
    number: "08",
    stage: "Maintain",
    question: "How do changes affect the original security assumptions?",
    securityWork:
      "Review new features, dependency updates, design changes, configuration changes, supplier changes, bug fixes, incident lessons, and requirement updates.",
    evidence:
      "Change requests, new threat-model notes, dependency updates, requirement revisions, validation evidence, maintenance records.",
    owner:
      "Engineering teams, security reviewers, product owners, dependency owners.",
    decision:
      "Does this change require renewed design review, validation, approval, or risk acceptance?",
  },
  {
    number: "09",
    stage: "Retire",
    question: "How should the software and its data be safely removed from service?",
    securityWork:
      "Plan data retention or deletion, account shutdown, credential and secret retirement, dependency cleanup, access removal, monitoring closure, records retention, and replacement-system handoff.",
    evidence:
      "Retirement plan, data-disposition record, access-removal evidence, secret-rotation or revocation record, ownership sign-off.",
    owner:
      "Service owner, data owner, security, operations, records or compliance owner.",
    decision:
      "Can the system be retired without leaving active access, unmanaged data, stale credentials, or unsupported dependencies behind?",
  },
];

const lifecyclePrinciples = [
  {
    title: "Security starts before code",
    detail:
      "When security first appears during final testing, teams are forced to correct architecture decisions after they have become expensive and difficult to change. Early planning and design make later implementation clearer.",
  },
  {
    title: "Every stage produces evidence",
    detail:
      "Professional security decisions should not rely only on memory or confidence. Requirements, review notes, test results, approvals, monitoring, and change records form an evidence trail.",
  },
  {
    title: "Ownership must be explicit",
    detail:
      "A security action without an owner is often only an intention. Strong lifecycle design states who owns the requirement, evidence, decision, exception, and follow-up.",
  },
  {
    title: "Unknown is a valid status",
    detail:
      "When evidence is missing, say Unknown. Inventing certainty weakens the review. A professional process records what is not yet known and assigns the next action.",
  },
  {
    title: "Changes reopen questions",
    detail:
      "A secure design is not frozen forever. New features, dependencies, users, data, integrations, suppliers, and deployment models can change the original risk assumptions.",
  },
  {
    title: "Release is a decision, not a deadline",
    detail:
      "A date can create pressure, but release readiness should still depend on defined evidence, approved exceptions, rollback plans, monitoring, and accountable risk decisions.",
  },
];

const vocabulary = [
  {
    term: "Software Development Lifecycle (SDLC)",
    definition:
      "The organized stages through which software is planned, designed, built, reviewed, tested, released, operated, maintained, and eventually retired.",
  },
  {
    term: "Security requirement",
    definition:
      "A specific expectation describing security behavior the software should provide, along with scope, ownership, and evidence needed to validate it.",
  },
  {
    term: "Traceability",
    definition:
      "The ability to connect a requirement to design decisions, implementation evidence, validation results, and release decisions.",
  },
  {
    term: "Security gate",
    definition:
      "A defined decision point where required evidence is reviewed before the software or change moves forward.",
  },
  {
    term: "Exception",
    definition:
      "A documented decision allowing a requirement or control to be temporarily unmet under explicit ownership, rationale, safeguards, and an expiration or review date.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk that remains after controls, review, validation, and other safeguards are considered.",
  },
  {
    term: "Lifecycle evidence",
    definition:
      "Artifacts such as requirements, diagrams, review notes, test results, approvals, configuration records, monitoring summaries, and retirement records that support decisions.",
  },
  {
    term: "Change trigger",
    definition:
      "A condition that causes earlier security questions to be revisited, such as a new dependency, new privileged feature, new data type, or architecture change.",
  },
  {
    term: "Release readiness",
    definition:
      "The documented state showing whether required evidence, approvals, configuration, rollback, monitoring, and unresolved risks are acceptable for release.",
  },
  {
    term: "Retirement",
    definition:
      "The controlled removal of software from service, including access removal, data disposition, secret retirement, and closure of operational responsibilities.",
  },
];

const evidenceRegister = [
  {
    id: "LC-01",
    stage: "Plan",
    source: "Product brief",
    status: "Confirmed",
    observation:
      "The fictional Northbridge Student Services Portal will support students, counselors, and approved administrative staff.",
    meaning:
      "Multiple user groups with different permissions must be reflected in design requirements.",
    next:
      "Define user roles, sensitive actions, and data categories before architecture approval.",
  },
  {
    id: "LC-02",
    stage: "Design",
    source: "Architecture diagram",
    status: "Confirmed",
    observation:
      "Identity, application, API, data, logging, and notification services cross several trust boundaries.",
    meaning:
      "Authentication alone will not answer every authorization and data-handling question.",
    next:
      "Create explicit requirements for trust boundaries and privileged actions.",
  },
  {
    id: "LC-03",
    stage: "Implement",
    source: "Dependency record",
    status: "Conditional",
    observation:
      "A messaging library is approved, but ownership for version review is not listed.",
    meaning:
      "The dependency is known, but lifecycle responsibility is incomplete.",
    next:
      "Assign a dependency owner and review trigger.",
  },
  {
    id: "LC-04",
    stage: "Review",
    source: "Peer review note",
    status: "Confirmed",
    observation:
      "Reviewers confirmed the new counselor action uses the expected authorization service.",
    meaning:
      "The implementation appears aligned with the intended architecture for that action.",
    next:
      "Link the review evidence to the requirement and validation plan.",
  },
  {
    id: "LC-05",
    stage: "Validate",
    source: "Requirements matrix",
    status: "Unknown",
    observation:
      "The row for privileged session timeout has no recorded result.",
    meaning:
      "The review cannot conclude that this requirement was validated.",
    next:
      "Assign an owner and collect authorized test evidence before release decision.",
  },
  {
    id: "LC-06",
    stage: "Release",
    source: "Release packet",
    status: "Conditional",
    observation:
      "Rollback and monitoring plans are approved, but one high-impact requirement remains Unknown.",
    meaning:
      "Release readiness depends on the organization's blocking and exception rules.",
    next:
      "Escalate the missing evidence to the accountable release and risk owners.",
  },
  {
    id: "LC-07",
    stage: "Operate",
    source: "Monitoring summary",
    status: "Confirmed",
    observation:
      "Authentication, authorization, API errors, and privileged actions are visible in approved monitoring sources.",
    meaning:
      "The system has operational evidence for several important security questions.",
    next:
      "Track source health and confirm expected coverage after major changes.",
  },
  {
    id: "LC-08",
    stage: "Maintain",
    source: "Change request",
    status: "Conditional",
    observation:
      "A new external scheduling integration is planned for the next release.",
    meaning:
      "The new trust relationship changes earlier architecture assumptions.",
    next:
      "Revisit data-flow, dependency, authorization, logging, and supplier requirements.",
  },
  {
    id: "LC-09",
    stage: "Retire",
    source: "Retirement draft",
    status: "Unknown",
    observation:
      "The draft says the old notification service will be removed but does not mention access or secret retirement.",
    meaning:
      "The retirement plan is incomplete.",
    next:
      "Add access removal, secret revocation, data disposition, ownership, and verification evidence.",
  },
];

const commonMistakes = [
  {
    mistake: "Security only at final testing",
    why:
      "Late review discovers design problems when the architecture, deadlines, and implementation are already difficult to change.",
    better:
      "Place security questions and evidence requirements at planning, design, implementation, validation, release, and operations stages.",
  },
  {
    mistake: "A checklist with no ownership",
    why:
      "Tasks can appear complete even when nobody is accountable for evidence or follow-up.",
    better:
      "Attach owners, status, evidence, review dates, and escalation paths to important lifecycle requirements.",
  },
  {
    mistake: "Treating review approval as proof of everything",
    why:
      "A code review may support one claim but does not automatically prove runtime configuration, deployment readiness, monitoring, or operational behavior.",
    better:
      "Match each claim to the type of evidence capable of supporting it.",
  },
  {
    mistake: "Ignoring changes after release",
    why:
      "Dependencies, integrations, users, data types, and architecture can change original assumptions.",
    better:
      "Define change triggers that reopen threat models, requirements, validation, or release review.",
  },
  {
    mistake: "Hiding Unknowns to make a release look complete",
    why:
      "Missing evidence becomes invisible risk and can undermine later decision-making.",
    better:
      "Keep Unknowns explicit and route them to the right owner before the decision.",
  },
  {
    mistake: "Skipping retirement planning",
    why:
      "Old systems can leave stale accounts, credentials, data, integrations, or unsupported dependencies behind.",
    better:
      "Treat retirement as a formal lifecycle stage with evidence and ownership.",
  },
];

const lifecycleMapTemplate = [
  {
    column: "Stage",
    prompt:
      "Where in the lifecycle is this decision happening?",
  },
  {
    column: "Security question",
    prompt:
      "What must the team know or decide at this stage?",
  },
  {
    column: "Requirement / expectation",
    prompt:
      "What behavior, control, or evidence is expected?",
  },
  {
    column: "Owner",
    prompt:
      "Who is accountable for producing evidence or making the decision?",
  },
  {
    column: "Evidence",
    prompt:
      "What supplied artifact could support the claim?",
  },
  {
    column: "Status",
    prompt:
      "Confirmed, Conditional, Degraded, Unknown, Blocked, or Not Applicable?",
  },
  {
    column: "Next action",
    prompt:
      "What needs to happen before the software moves forward?",
  },
  {
    column: "Change trigger",
    prompt:
      "What future change would require this question to be revisited?",
  },
];

const readinessItems = [
  "I can explain why security begins before implementation.",
  "I can connect a lifecycle stage to an appropriate security question.",
  "I can separate requirement evidence from review evidence, test evidence, release evidence, and operational evidence.",
  "I can mark missing evidence as Unknown instead of assuming success.",
  "I can identify an owner and next action for a lifecycle gap.",
];

const checklistItems = [
  "Product purpose, users, important data, and privileged actions are understood.",
  "Security requirements exist before implementation decisions are finalized.",
  "Architecture and threat-model evidence are linked to requirements.",
  "Implementation and code-review evidence is traceable to design intent.",
  "Dependencies, configuration, and secrets have explicit ownership.",
  "Security requirements have safe validation evidence or visible gaps.",
  "Release criteria include approvals, monitoring, rollback, and unresolved risk.",
  "Operational monitoring and source health are reviewed after release.",
  "Important changes trigger renewed security review when assumptions change.",
  "Retirement includes access removal, data disposition, secret retirement, and verification.",
  "Unknowns, exceptions, owners, and deadlines are visible.",
  "No lifecycle step depends on unauthorized testing of real systems.",
];

const takeaways = [
  "Security is a lifecycle responsibility, not a release-week activity.",
  "Every important security claim should connect to evidence appropriate for that claim.",
  "Ownership makes lifecycle controls actionable.",
  "Unknown is a professional status when evidence is missing.",
  "Security gates should help teams make decisions, not merely produce paperwork.",
  "Changes after release can invalidate earlier assumptions and should trigger renewed review.",
  "Retirement is part of software security because access, data, secrets, and dependencies can outlive the application.",
  "A strong lifecycle map becomes the foundation for the rest of A11.",
];

const quizzes = [
  {
    question:
      "Which statement best describes secure software lifecycle thinking?",
    choices: [
      "Security should be checked only after development is complete.",
      "Security questions, evidence, ownership, and decisions should appear across the lifecycle.",
      "Security belongs only to the security team.",
      "A successful build automatically proves release readiness.",
    ],
    answer: 1,
    explanation:
      "Lifecycle security integrates requirements, design, implementation, review, validation, release, operation, maintenance, and retirement.",
  },
  {
    question:
      "A requirement exists, but no test result is recorded. What is the most professional status?",
    choices: [
      "Confirmed",
      "Passed because the team is experienced",
      "Unknown until evidence is available",
      "Not important",
    ],
    answer: 2,
    explanation:
      "Missing evidence should remain Unknown rather than being converted into an unsupported conclusion.",
  },
  {
    question:
      "Which artifact most directly supports a release-readiness decision?",
    choices: [
      "A marketing slogan",
      "An approved release packet containing required evidence, rollback, monitoring, exceptions, and ownership",
      "An old architecture diagram with no current validation",
      "A developer's memory of the last release",
    ],
    answer: 1,
    explanation:
      "Release decisions should rely on current, relevant evidence rather than confidence or stale artifacts.",
  },
  {
    question:
      "Why can a new third-party integration trigger renewed security review?",
    choices: [
      "Because every integration is automatically unsafe",
      "Because it can change trust boundaries, data flows, dependencies, authorization, and monitoring assumptions",
      "Because software should never integrate with anything",
      "Because only networking teams can approve integrations",
    ],
    answer: 1,
    explanation:
      "Material changes can invalidate earlier assumptions and should reopen the relevant questions.",
  },
  {
    question:
      "What makes a lifecycle security requirement actionable?",
    choices: [
      "A vague phrase with no owner",
      "A requirement connected to scope, owner, expected behavior, evidence, and acceptance conditions",
      "A requirement that is never reviewed",
      "A requirement that depends on unauthorized testing",
    ],
    answer: 1,
    explanation:
      "Specific scope, ownership, evidence, and acceptance conditions make requirements reviewable and governable.",
  },
  {
    question:
      "Why is retirement included in a secure software lifecycle?",
    choices: [
      "Only to remove the website logo",
      "Because access, data, credentials, integrations, and dependencies must be safely closed or transferred",
      "Because retired systems need more features",
      "Because security stops once a system is unused",
    ],
    answer: 1,
    explanation:
      "Retirement must address lingering access, data, secrets, dependencies, and responsibilities.",
  },
  {
    question:
      "Which choice best describes a healthy security gate?",
    choices: [
      "A checkbox that is always approved",
      "A decision point that reviews defined evidence and routes gaps to accountable owners",
      "A secret test performed on live systems",
      "A final-stage activity with no connection to earlier requirements",
    ],
    answer: 1,
    explanation:
      "A gate should evaluate defined evidence and support an accountable proceed, pause, or exception decision.",
  },
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
        A11 Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
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

export default function SecurityInSoftwareLifecyclePage() {
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
              A11.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security in the Software Lifecycle
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Secure software does not become secure because someone performs one
            final review before launch. Security decisions begin when the
            product is first defined and continue through architecture,
            implementation, review, validation, release, operation, change, and
            retirement.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches you how to place the right security question at
            the right lifecycle stage, identify the evidence that supports the
            decision, assign ownership, keep Unknowns visible, and recognize
            when a later change should reopen an earlier security assumption.
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
          lessonTitle="Security in the Software Lifecycle"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.1 Entry Readiness"
          items={[
            "I understand that software systems include people, data, identities, services, dependencies, configuration, and operationsâ€”not only source code.",
            "I can separate a security requirement from the evidence used to validate it.",
            "I understand the idea of a trust boundary from earlier Advanced modules.",
            "I am prepared to work only with fictional or explicitly authorized evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Why Strong Teams Do Not Wait Until the End"
        >
          <p className="leading-8">
            Imagine a fictional team spends six months building a student
            services portal. Three days before launch, someone asks a basic
            question: â€œWhich staff members are allowed to perform high-impact
            account actions, and where is that rule enforced?â€
          </p>

          <p className="mt-4 leading-8">
            If the team cannot answer, the problem is not only a missing test.
            The requirement may never have been defined clearly. The
            architecture may not have assigned responsibility. The
            implementation may have followed different assumptions. Reviewers
            may not have known what to check. Testers may not have known what
            result counted as success.
          </p>

          <p className="mt-4 leading-8">
            That is the central idea of this lesson:
            <strong className="text-white">
              {" "}software security is strongest when each lifecycle stage
              prepares evidence for the next one.
            </strong>
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Security is not a final inspection. It is a chain of connected
              decisions.
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
          title="The Cost of a Lifecycle Gap"
        >
          <p className="leading-8">
            Security gaps often look like isolated technical problems when they
            are discovered late. But many of them began much earlier as an
            unclear requirement, missing owner, undocumented assumption,
            unreviewed dependency, incomplete change process, or missing
            validation plan.
          </p>

          <p className="mt-4 leading-8">
            Lifecycle thinking helps defenders ask a different question:
            instead of only asking â€œIs there a problem now?â€, ask â€œAt which
            earlier stage should this expectation have been defined, reviewed,
            validated, or owned?â€
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Earlier",
                value:
                  "Clarify important security expectations while design choices are still flexible.",
              },
              {
                label: "During",
                value:
                  "Keep implementation, review, dependencies, and evidence aligned with those expectations.",
              },
              {
                label: "After",
                value:
                  "Use operations, maintenance, and retirement evidence to confirm assumptions and improve the next cycle.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Framework"
          title="The Secure Software Lifecycle Map"
        >
          <p className="leading-8">
            Different organizations use different lifecycle names and delivery
            models. Some use sequential stages, others use continuous delivery,
            and many combine product, engineering, platform, and security
            workflows. The exact labels matter less than the underlying
            questions.
          </p>

          <p className="mt-4 leading-8">
            For A11, use this nine-stage model. A real team may combine several
            stages, but the security responsibilities still need to exist.
          </p>

          <div className="mt-6 grid gap-5">
            {lifecycleStages.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[120px_1fr]">
                  <div>
                    <span className="text-4xl font-black text-cyan-300">
                      {item.number}
                    </span>
                    <p className="mt-2 text-xl font-black text-white">
                      {item.stage}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-black leading-7 text-white">
                      {item.question}
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                          Security work
                        </p>
                        <p className="mt-2 text-sm leading-7 text-cyan-50">
                          {item.securityWork}
                        </p>
                      </div>

                      <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                          Evidence
                        </p>
                        <p className="mt-2 text-sm leading-7 text-blue-50">
                          {item.evidence}
                        </p>
                      </div>

                      <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                          Typical owners
                        </p>
                        <p className="mt-2 text-sm leading-7 text-purple-50">
                          {item.owner}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                          Decision
                        </p>
                        <p className="mt-2 text-sm leading-7 text-emerald-50">
                          {item.decision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Terms You Need for the Rest of A11"
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
          eyebrow="Lifecycle Principle 1"
          title="Security Starts Before Implementation"
        >
          <p className="leading-8">
            Planning and design determine what the team believes it is
            protecting. If important user roles, data categories, privileged
            actions, trust boundaries, and availability expectations are not
            understood early, later reviewers must guess what â€œsecureâ€ means.
          </p>

          <p className="mt-4 leading-8">
            Early security work does not require every detail. It requires
            enough clarity to create useful requirements and identify the areas
            that need deeper design.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Weak early statement",
                "â€œThe portal should be secure and easy to use.â€",
              ],
              [
                "Stronger early statement",
                "â€œStudents may view only their own records; counselors may view assigned students; high-impact account changes require a privileged role and must be auditable.â€",
              ],
              [
                "Weak ownership",
                "â€œSecurity team will handle it later.â€",
              ],
              [
                "Stronger ownership",
                "â€œProduct defines the business rule, architecture defines enforcement, engineering implements it, review checks traceability, and validation provides evidence.â€",
              ],
            ].map(([label, text]) => (
              <article
                key={label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle Principle 2"
          title="Requirements Create Traceability"
        >
          <p className="leading-8">
            Traceability means the team can follow a security expectation from
            the original requirement into architecture, implementation, review,
            validation, and release evidence.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Stage</th>
                  <th className="border-b border-slate-700 p-4">Example evidence</th>
                  <th className="border-b border-slate-700 p-4">Question answered</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Requirement",
                    "Privileged account changes require an approved staff role and must be logged.",
                    "What should the system do?",
                  ],
                  [
                    "Architecture",
                    "Privileged actions flow through the central authorization service and security telemetry path.",
                    "Where should the rule be enforced and observed?",
                  ],
                  [
                    "Implementation review",
                    "Peer review confirms the privileged action uses the approved authorization interface.",
                    "Does the implementation follow the intended pattern?",
                  ],
                  [
                    "Validation",
                    "Authorized test evidence confirms approved roles succeed and unapproved roles receive the expected denial behavior.",
                    "Does the requirement behave as expected in the test environment?",
                  ],
                  [
                    "Release",
                    "Requirement evidence is complete, monitoring is ready, and no blocking exception remains.",
                    "Is there enough evidence to support release?",
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
          eyebrow="Lifecycle Principle 3"
          title="Ownership Turns Intent Into Action"
        >
          <p className="leading-8">
            â€œSomeone should check thisâ€ is not an operational security control.
            The lifecycle needs named roles or accountable teams for each
            requirement, evidence source, exception, and follow-up.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Requirement owner",
                text:
                  "Defines the business or security expectation and confirms the requirement remains relevant.",
              },
              {
                title: "Evidence owner",
                text:
                  "Produces or maintains the artifact that supports the requirement or decision.",
              },
              {
                title: "Decision owner",
                text:
                  "Has authority to proceed, pause, approve an exception, or accept residual risk.",
              },
              {
                title: "Service owner",
                text:
                  "Maintains the software after release and ensures lifecycle responsibilities continue.",
              },
              {
                title: "Dependency owner",
                text:
                  "Tracks important third-party components, versions, maintenance, and change triggers.",
              },
              {
                title: "Retirement owner",
                text:
                  "Ensures access, data, secrets, integrations, and records are closed correctly at end of life.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Lifecycle Assurance Dashboard"
          subtitle="Fictional training data â€” evidence status only"
          metrics={[
            {
              label: "Defined security requirements",
              value: "18",
              note: "15 Confirmed, 2 Conditional, 1 Unknown",
            },
            {
              label: "Critical lifecycle owners",
              value: "9 / 10",
              note: "Dependency review owner missing for one component",
            },
            {
              label: "Release evidence coverage",
              value: "92%",
              note: "One high-impact validation row remains Unknown",
            },
            {
              label: "Open change triggers",
              value: "2",
              note: "New scheduling integration and dependency baseline change",
            },
          ]}
        />

        <FakeAlertCard
          title="Lifecycle Evidence Gap"
          severity="Medium"
          time="14:20"
          source="Fictional Release Review"
          details="The release packet references requirement AUTHZ-07, but the current validation matrix has no recorded result for the privileged session timeout requirement."
          recommendation="Keep the requirement status Unknown, assign the validation owner, and resolve or formally govern the gap before release."
        />

        <Section
          eyebrow="Lifecycle Principle 4"
          title="Evidence Must Match the Claim"
        >
          <p className="leading-8">
            A common review mistake is using one kind of evidence to support a
            claim it cannot actually prove.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              {
                claim: "The requirement exists.",
                evidence:
                  "Requirements register or approved design requirement.",
                caution:
                  "A code-review comment alone does not prove the requirement was formally defined.",
              },
              {
                claim: "The design supports the requirement.",
                evidence:
                  "Architecture diagram, design decision, threat model, or approved design review.",
                caution:
                  "A passing runtime check does not explain whether the architecture is maintainable or consistently enforced.",
              },
              {
                claim: "The implementation follows the design.",
                evidence:
                  "Peer review, implementation checklist, change record, or safe code-review evidence.",
                caution:
                  "An architecture diagram alone does not prove the implementation actually follows it.",
              },
              {
                claim: "The requirement works as expected.",
                evidence:
                  "Authorized validation result tied to the requirement and expected outcome.",
                caution:
                  "A reviewer saying â€œlooks goodâ€ is not the same as validation evidence.",
              },
              {
                claim: "The release is ready.",
                evidence:
                  "Current release packet with required evidence, approvals, exceptions, rollback, and monitoring.",
                caution:
                  "A successful build only proves the build completed, not that every security condition is satisfied.",
              },
            ].map((item) => (
              <article
                key={item.claim}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.claim}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-200">
                  Appropriate evidence: {item.evidence}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Lifecycle Decision Log"
          logs={[
            "[09:05] PLAN       DATA-CLASSIFICATION confirmed by Product + Data Owner",
            "[09:42] DESIGN     AUTHZ-07 mapped to Authorization Service and audit telemetry",
            "[11:18] IMPLEMENT  dependency owner missing for messaging-library record",
            "[13:10] REVIEW     privileged-action review evidence attached to AUTHZ-07",
            "[14:20] VALIDATE   session-timeout evidence = UNKNOWN",
            "[14:32] RELEASE    decision pending validation owner response",
            "[15:00] CHANGE     scheduling integration flagged as architecture-review trigger",
          ]}
        />

        <Section
          eyebrow="Evidence Register"
          title="Separate Observation, Meaning, and Next Action"
        >
          <p className="leading-8">
            A professional lifecycle review should distinguish what the supplied
            evidence says from what the reviewer concludes. The following
            fictional register models that separation.
          </p>

          <div className="mt-6 grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.stage}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold text-white">
                  Source: {item.source}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Meaning
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Next action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Release Readiness"
          question="The fictional release packet has code-review approval, rollback, and monitoring evidence, but one high-impact requirement remains Unknown. What is the strongest conclusion?"
          evidence={[
            "The code-review record is current.",
            "Rollback evidence is approved.",
            "Monitoring coverage is documented.",
            "The validation matrix has no result for the high-impact requirement.",
            "No exception record is attached.",
          ]}
          options={[
            "Release is automatically safe because most evidence is complete.",
            "The missing requirement can be ignored because code review passed.",
            "Release readiness is not fully supported until the Unknown is resolved or governed through the approved exception process.",
            "The software should be tested against a live real-world target to gain confidence.",
          ]}
          bestAnswer={2}
          explanation="A high-impact Unknown must remain visible. The safe, professional response is to resolve the missing evidence or use the organization's governed exception process with accountable ownership."
        />

        <Section
          eyebrow="Lifecycle Principle 5"
          title="Changes Reopen Earlier Questions"
        >
          <p className="leading-8">
            Software evolves. A new feature may introduce a new privileged
            action. A new dependency may change maintenance responsibilities. A
            new supplier may create a new trust relationship. A new data type
            may change privacy or retention expectations.
          </p>

          <p className="mt-4 leading-8">
            Strong lifecycle programs define change triggers so teams know when
            an earlier requirement, threat model, design decision, validation
            plan, or release criterion must be revisited.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Change trigger</th>
                  <th className="border-b border-slate-700 p-4">Questions to reopen</th>
                  <th className="border-b border-slate-700 p-4">Possible evidence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "New privileged feature",
                    "Authorization, logging, approval, validation, user-role assumptions",
                    "Updated requirement, design review, validation matrix",
                  ],
                  [
                    "New third-party integration",
                    "Trust boundary, data flow, dependency, supplier, privacy, monitoring",
                    "Updated architecture, supplier review, dependency record",
                  ],
                  [
                    "New sensitive data type",
                    "Classification, minimization, access, retention, logging, deletion",
                    "Data inventory, requirement update, design decision",
                  ],
                  [
                    "Major dependency update",
                    "Compatibility, provenance, maintenance, regression risk, rollback",
                    "Dependency record, test evidence, release notes",
                  ],
                  [
                    "Deployment model change",
                    "Environment boundaries, identity, configuration, logging, secrets, resilience",
                    "Architecture update, configuration baseline, release review",
                  ],
                  [
                    "Incident lesson",
                    "Assumptions, monitoring, response, recovery, design requirement",
                    "Post-incident review, updated requirement, validation plan",
                  ],
                ].map(([trigger, questions, evidenceText]) => (
                  <tr key={trigger} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-semibold text-white">
                      {trigger}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {questions}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-emerald-100">
                      {evidenceText}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle Principle 6"
          title="Retirement Is a Security Stage"
        >
          <p className="leading-8">
            Teams often think about security while a service is active but
            forget what remains after it is replaced. An unused application can
            still leave behind accounts, credentials, secrets, data copies,
            integrations, scheduled jobs, monitoring rules, and dependencies.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Access",
                detail:
                  "Remove or disable service accounts, user access, administrative paths, integrations, and unused permissions.",
              },
              {
                title: "Secrets",
                detail:
                  "Retire, rotate, or revoke credentials and keys associated with the old service according to approved processes.",
              },
              {
                title: "Data",
                detail:
                  "Follow retention, transfer, archival, or deletion requirements and keep evidence of the disposition decision.",
              },
              {
                title: "Dependencies",
                detail:
                  "Remove unsupported packages, build jobs, vendor links, and maintenance responsibilities that no longer serve an active system.",
              },
              {
                title: "Monitoring",
                detail:
                  "Close or redirect alerts, dashboards, logs, ownership, and on-call expectations so abandoned sources do not create confusion.",
              },
              {
                title: "Records",
                detail:
                  "Keep the approvals, retirement evidence, and required records needed to explain what happened to the service and its data.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Mistakes"
          title="Where Lifecycle Programs Lose Quality"
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
          title="Scenario Decision Lab 1 â€” The Friday Release"
          scenario="Northbridge plans a Friday release. Functional tests passed and the code review is approved. During the release meeting, the team notices that one high-impact security requirement has no recorded validation result. The product deadline is important, but there is no approved exception record."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the release decision, keep the requirement Unknown, assign the evidence owner, and resolve it or use the approved exception process.",
              outcome:
                "This preserves evidence discipline and makes the accountable decision visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark the requirement passed because functional tests and code review both succeeded.",
              outcome:
                "This converts missing evidence into unsupported certainty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Proceed but mention the missing result informally in chat.",
              outcome:
                "The risk remains poorly governed because ownership, acceptance, and expiration are not formally recorded.",
              tone: "caution",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” The New Scheduling Integration"
          scenario="Two months after launch, the product team wants to add a third-party scheduling service. The existing threat model and requirements were approved before this integration existed. The new service will receive limited appointment information from the application."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the integration as a change trigger and revisit relevant data-flow, trust-boundary, dependency, authorization, privacy, logging, and validation questions.",
              outcome:
                "The lifecycle adapts to the new design instead of relying on stale assumptions.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Reuse the old review unchanged because the main application already passed security review.",
              outcome:
                "The new trust relationship and data flow are not represented in the old evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Add the vendor name to the architecture diagram but make no other changes.",
              outcome:
                "The documentation improves slightly, but requirements, ownership, validation, and monitoring may still be incomplete.",
              tone: "caution",
            },
          ]}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Lifecycle Security Map"
        >
          <p className="leading-8">
            You are reviewing the fictional Northbridge Student Services
            Portal. Use only the supplied evidence in this lesson. Do not inspect
            real software, repositories, accounts, APIs, or devices.
          </p>

          <div className="mt-6 grid gap-4">
            {lifecycleMapTemplate.map((item, index) => (
              <article
                key={item.column}
                className="grid gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 md:grid-cols-[80px_220px_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <h3 className="font-black text-blue-50">{item.column}</h3>
                <p className="text-sm leading-7 text-blue-100">
                  {item.prompt}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab safety rule</p>
            <p className="mt-2 leading-7">
              Your job is to organize evidence and decisions, not to test a real
              target. When information is missing, record Unknown and identify
              the next evidence request.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Change Trigger"
          question="A new third-party integration will receive limited appointment information. The old threat model predates the integration. What is the strongest lifecycle response?"
          evidence={[
            "The original architecture review was approved three months ago.",
            "The new integration introduces a new external service.",
            "Limited appointment information will cross the new trust boundary.",
            "No updated dependency or supplier record has been attached yet.",
            "The product team wants to keep the same release date.",
          ]}
          options={[
            "No review is needed because the original application was approved.",
            "Treat the integration as a change trigger and reopen the relevant architecture, data, dependency, authorization, logging, and validation questions.",
            "Test the third-party service without permission to see whether it is secure.",
            "Approve the change based only on the vendor's marketing page.",
          ]}
          bestAnswer={1}
          explanation="A new external integration changes trust and data-flow assumptions. The correct defensive response is to reopen the affected lifecycle questions and collect appropriate evidence."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Useful Security Gate"
        >
          <p className="leading-8">
            A weak security gate is a checkbox. A strong gate is a decision
            point that identifies exactly what evidence must exist, who reviews
            it, what happens when evidence is missing, and who can approve an
            exception.
          </p>

          <p className="mt-4 leading-8">
            Design a fictional gate for the transition from
            <strong className="text-white"> Validate â†’ Release</strong>. Your
            gate should include:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Required security requirements and their validation status",
              "Required review and dependency evidence",
              "Configuration baseline and artifact identity",
              "Monitoring and source-health readiness",
              "Rollback plan and owner",
              "Blocking criteria",
              "Exception authority and expiration",
              "Residual-risk owner",
              "Unknown handling",
              "Post-release validation expectations",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            The challenge is not to make the gate as strict as possible. It is
            to make it clear, evidence-based, repeatable, and useful for
            accountable decisions.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.1 Mini Quiz: Security in the Software Lifecycle"
            questions={quizzes}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Lifecycle Security Map"
          prompt="Create the first artifact for your A11 Secure Software Design Assessment: a lifecycle security map for the fictional Northbridge portal. Include lifecycle stage, security question, requirement or expectation, owner, supporting evidence, status, next action, and change trigger. Keep Unknowns explicit and use only fictional or supplied information."
          tips={[
            "Use the nine-stage lifecycle model from this lesson.",
            "Do not claim evidence exists when it was not supplied.",
            "Separate observation from interpretation.",
            "Make ownership visible.",
            "Include at least three change triggers that reopen earlier questions.",
            "Add one paragraph explaining how the lifecycle map reduces late security surprises.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.2?"
        >
          <p className="leading-8">
            Before moving to secure design requirements, check whether you can
            explain how those requirements fit into the larger lifecycle.
          </p>

          <div className="mt-6 grid gap-4">
            {readinessItems.map((item, index) => (
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

          <p className="mt-6 leading-8">
            If one of these still feels unclear, revisit the lifecycle stage
            table and the evidence-register section. A11.2 will assume that you
            understand where requirements come from and how they later connect
            to architecture, review, validation, release, and operations.
          </p>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Lifecycle Map Look Professional"
        >
          <p className="leading-8">
            A strong portfolio artifact should be readable by someone who was
            not present during the lesson. It should show the logic of the
            review rather than only list security words.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with context",
                detail:
                  "State the fictional product purpose, users, important data, environments, and major privileged actions.",
              },
              {
                title: "Use one row per meaningful lifecycle decision",
                detail:
                  "Avoid giant paragraphs. Make stage, owner, evidence, status, and next action easy to scan.",
              },
              {
                title: "Keep evidence references specific",
                detail:
                  "Use labels such as LC-03 Dependency Record or LC-05 Requirements Matrix instead of vague phrases such as â€œthe documents.â€",
              },
              {
                title: "Use bounded language",
                detail:
                  "Say â€œthe supplied evidence supports...â€ instead of making claims about systems you did not inspect.",
              },
              {
                title: "Show Unknowns",
                detail:
                  "Unknowns demonstrate evidence discipline. Add the evidence request and owner needed to resolve them.",
              },
              {
                title: "Show feedback loops",
                detail:
                  "Include arrows or notes showing how incidents, dependency changes, integrations, and new requirements reopen earlier stages.",
              },
              {
                title: "Add a release decision box",
                detail:
                  "Summarize what is Confirmed, Conditional, Unknown, Blocked, or governed through exception.",
              },
              {
                title: "End with a concise executive summary",
                detail:
                  "Explain the strongest lifecycle controls, largest gaps, and next three actions in non-technical language.",
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
            Lifecycle review is defensive governance
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize scanning, probing, exploitation,
            credential attacks, bypass testing, destructive testing, or
            accessing real software, accounts, repositories, devices, APIs, or
            networks without permission. Use only fictional or explicitly
            authorized evidence.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.1 Security in the Software Lifecycle Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have the lifecycle foundation for A11. Next, A11.2 turns
            broad security goals into clear Secure Design Requirements that can
            be owned, reviewed, validated, and governed.
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
