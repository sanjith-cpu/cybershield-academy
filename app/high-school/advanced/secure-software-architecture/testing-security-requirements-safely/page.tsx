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
const previousLesson = `${modulePath}/code-review-for-security`;
const nextLesson = `${modulePath}/secure-deployment-concepts`;

const objectives = [
  "Explain why safe security validation begins with authorization, scope, expected outcomes, and evidence requirements rather than improvised testing.",
  "Translate secure design requirements into bounded test cases with preconditions, expected results, owners, evidence, and stop conditions.",
  "Distinguish functional validation, security requirement validation, configuration review, logging verification, dependency evidence, and release evidence.",
  "Evaluate fictional test results without overstating certainty or treating missing evidence as a pass.",
  "Build a safe security validation matrix that becomes the eighth artifact in the A11 Secure Software Design Assessment.",
];

const validationWorkflow = [
  {
    step: "01",
    title: "Confirm authorization and scope",
    question:
      "What system, environment, requirement, data, identity, and time window are explicitly approved for validation?",
    detail:
      "Testing should begin only after the authorized environment, fictional identities, permitted actions, evidence boundaries, and responsible owners are clear.",
    evidence:
      "Validation charter, environment label, requirement IDs, owner approval, scope statement.",
  },
  {
    step: "02",
    title: "Define the expected behavior",
    question:
      "What should happen when the requirement works correctly?",
    detail:
      "Translate the requirement into one or more expected outcomes before running any test. This includes allowed outcomes, denied outcomes, error handling, audit evidence, and recovery behavior.",
    evidence:
      "Requirement text, architecture decision, acceptance criteria, threat-model notes.",
  },
  {
    step: "03",
    title: "Choose safe test inputs",
    question:
      "Which fictional users, synthetic records, test fixtures, and non-sensitive values are sufficient?",
    detail:
      "Use test identities, synthetic data, inert records, and bounded scenarios. Avoid real credentials, private data, production systems, or harmful payloads.",
    evidence:
      "Test fixture list, synthetic account references, non-production dataset.",
  },
  {
    step: "04",
    title: "Define evidence to collect",
    question:
      "What proves the result without collecting unnecessary sensitive information?",
    detail:
      "Specify screenshots, sanitized logs, status records, audit event IDs, configuration evidence, or test-result summaries needed for the claim.",
    evidence:
      "Evidence checklist, log schema, redaction rule, result template.",
  },
  {
    step: "05",
    title: "Set stop conditions",
    question:
      "When must the test pause or end?",
    detail:
      "Stop if the environment changes unexpectedly, synthetic data boundaries are crossed, the approved scope is unclear, safety controls fail, or a real system or person could be affected.",
    evidence:
      "Stop-condition list, escalation owner, rollback owner.",
  },
  {
    step: "06",
    title: "Run the authorized validation",
    question:
      "Did the actual outcome match the expected outcome?",
    detail:
      "Perform only the approved steps in the authorized test environment and record results consistently.",
    evidence:
      "Test result, audit event, screenshot, configuration snapshot, synthetic record state.",
  },
  {
    step: "07",
    title: "Interpret carefully",
    question:
      "What does the evidence prove, and what does it not prove?",
    detail:
      "A single test can support one requirement under defined conditions. It does not prove every deployment, every edge case, or every future change.",
    evidence:
      "Result status, confidence, limitations, Unknowns.",
  },
  {
    step: "08",
    title: "Close or escalate",
    question:
      "Is the requirement Confirmed, Conditional, Unknown, or Blocked?",
    detail:
      "Record owner, remediation, retest, exception, or release impact. Missing evidence should remain visible.",
    evidence:
      "Validation matrix, finding link, retest record, exception record, release decision.",
  },
];

const validationTypes = [
  {
    code: "FUNC",
    title: "Functional validation",
    purpose:
      "Confirm the feature performs its intended business function.",
    example:
      "A counselor can open an assigned synthetic student record in the test environment.",
    limitation:
      "Functional success does not prove unauthorized users are correctly denied.",
  },
  {
    code: "AUTHZ",
    title: "Authorization validation",
    purpose:
      "Confirm approved roles are allowed and disallowed roles receive the expected denial.",
    example:
      "Assigned fictional counselor succeeds; unassigned fictional counselor receives denial.",
    limitation:
      "One role pair does not prove every future role or assignment condition.",
  },
  {
    code: "LOG",
    title: "Logging validation",
    purpose:
      "Confirm required audit fields appear and forbidden sensitive values do not.",
    example:
      "Privileged action generates actor, target ref, action, result, timestamp, and correlation ID.",
    limitation:
      "Event presence does not by itself prove retention, access, or source health.",
  },
  {
    code: "CFG",
    title: "Configuration review",
    purpose:
      "Confirm security-sensitive settings match the approved baseline.",
    example:
      "Production-like test configuration matches the approved authorization and logging baseline.",
    limitation:
      "A configuration snapshot does not prove all runtime behavior.",
  },
  {
    code: "DEP",
    title: "Dependency validation",
    purpose:
      "Confirm a changed dependency remains compatible with required workflows.",
    example:
      "Updated messaging client preserves queue, retry, logging, and failure behavior in the test environment.",
    limitation:
      "Compatibility evidence does not prove every future environment or vendor condition.",
  },
  {
    code: "RES",
    title: "Resilience validation",
    purpose:
      "Confirm important workflows fail safely and recover as designed.",
    example:
      "A fictional notification-service outage does not prevent the core record workflow from completing.",
    limitation:
      "One simulated dependency failure does not prove resilience against every possible outage.",
  },
  {
    code: "ERR",
    title: "Error-handling validation",
    purpose:
      "Confirm user-facing messages remain bounded while protected diagnostics remain useful.",
    example:
      "User receives a safe reference message; diagnostic event contains sanitized context only.",
    limitation:
      "One error path does not prove all exception paths are safe.",
  },
  {
    code: "REL",
    title: "Release-evidence validation",
    purpose:
      "Confirm required test, review, configuration, monitoring, and rollback evidence is present before release.",
    example:
      "Every blocking requirement has current evidence or a governed exception.",
    limitation:
      "A complete packet supports release readiness, not permanent future security.",
  },
];

const vocabulary = [
  {
    term: "Validation plan",
    definition:
      "A documented set of authorized checks that links requirements to preconditions, steps, expected results, evidence, owners, and stop conditions.",
  },
  {
    term: "Test case",
    definition:
      "A bounded validation scenario with a defined objective, inputs, expected outcome, evidence requirement, and status.",
  },
  {
    term: "Precondition",
    definition:
      "A state that must be true before a test begins, such as the correct environment, synthetic identity, approved configuration, or test fixture.",
  },
  {
    term: "Expected result",
    definition:
      "The outcome the requirement says should occur under the defined test conditions.",
  },
  {
    term: "Stop condition",
    definition:
      "A condition that requires testing to pause or end to preserve scope, safety, data protection, or system integrity.",
  },
  {
    term: "Synthetic data",
    definition:
      "Invented, non-sensitive test data created for validation rather than real user or production information.",
  },
  {
    term: "Positive test",
    definition:
      "A safe check showing that an approved action succeeds under expected authorized conditions.",
  },
  {
    term: "Negative test",
    definition:
      "A safe check showing that an action outside the requirement is denied or handled safely, without bypass techniques or harmful payloads.",
  },
  {
    term: "Retest",
    definition:
      "A repeated authorized validation after a change intended to address a failed or incomplete result.",
  },
  {
    term: "Test evidence",
    definition:
      "Sanitized records, results, screenshots, event IDs, or configuration snapshots that support the validation conclusion.",
  },
  {
    term: "Test limitation",
    definition:
      "A boundary describing what the test result does not establish.",
  },
  {
    term: "Release blocker",
    definition:
      "A requirement, finding, or evidence gap that must be resolved or governed before release can proceed.",
  },
];

const testCases = [
  {
    id: "VAL-01",
    requirement: "REQ-AUTHZ-03",
    title: "Assigned counselor record access",
    environment: "Authorized Test",
    precondition:
      "Synthetic counselor C-100 is assigned to synthetic student S-200.",
    action:
      "Open the approved synthetic record using the normal application workflow.",
    expected:
      "Access succeeds and only approved fields are returned.",
    evidence:
      "Test result, synthetic record reference, authorization audit event, correlation ID.",
    status: "Confirmed",
    limitation:
      "Does not validate delayed assignment updates or future counselor roles.",
  },
  {
    id: "VAL-02",
    requirement: "REQ-AUTHZ-03",
    title: "Unassigned counselor denial",
    environment: "Authorized Test",
    precondition:
      "Synthetic counselor C-101 has no assignment to synthetic student S-200.",
    action:
      "Attempt the normal record-view workflow.",
    expected:
      "Access is denied, no private record data is returned, and a denial audit event is created.",
    evidence:
      "Safe denial result, audit event, correlation ID.",
    status: "Confirmed",
    limitation:
      "Does not prove every authorization condition or role combination.",
  },
  {
    id: "VAL-03",
    requirement: "REQ-LOG-04",
    title: "Privileged action logging",
    environment: "Authorized Test",
    precondition:
      "Synthetic privileged workflow is approved and uses fictional identities only.",
    action:
      "Complete the approved fictional account-change workflow.",
    expected:
      "Audit event contains required metadata and excludes secret or private values.",
    evidence:
      "Sanitized event record and schema check.",
    status: "Conditional",
    limitation:
      "Retention and access-policy validation are separate.",
  },
  {
    id: "VAL-04",
    requirement: "REQ-DATA-02",
    title: "Scheduling payload minimization",
    environment: "Authorized Test",
    precondition:
      "Synthetic appointment contains approved fields plus unrelated fictional note data.",
    action:
      "Generate the scheduling integration payload in the test harness.",
    expected:
      "Only studentRef, date, and time are included.",
    evidence:
      "Sanitized payload field list, requirement link.",
    status: "Confirmed",
    limitation:
      "Vendor-side storage or retention behavior is outside this test.",
  },
  {
    id: "VAL-05",
    requirement: "REQ-RES-02",
    title: "Notification dependency unavailable",
    environment: "Authorized Test",
    precondition:
      "Notification dependency is represented by a safe test double set to unavailable.",
    action:
      "Complete the core synthetic record workflow.",
    expected:
      "Core workflow succeeds, notification is queued or marked pending, and operational event is created.",
    evidence:
      "Workflow result, queue status, operational log, correlation ID.",
    status: "Conditional",
    limitation:
      "Recovery timing and repeated outage behavior require separate validation.",
  },
  {
    id: "VAL-06",
    requirement: "DEP-02",
    title: "Messaging dependency update compatibility",
    environment: "Authorized Test",
    precondition:
      "Approved candidate dependency version is present in the test build.",
    action:
      "Run the approved notification workflow and retry behavior checks.",
    expected:
      "Message creation, queue handling, retry state, logging, and failure behavior match the approved baseline.",
    evidence:
      "Test summary, dependency version metadata, comparison result.",
    status: "Unknown",
    limitation:
      "Current evidence package has not been attached.",
  },
  {
    id: "VAL-07",
    requirement: "A11.6 Error Design",
    title: "Unexpected storage error response",
    environment: "Authorized Test",
    precondition:
      "Safe test double returns a fictional storage failure.",
    action:
      "Submit the approved synthetic record-change workflow.",
    expected:
      "User receives bounded error reference; protected diagnostics contain sanitized metadata only.",
    evidence:
      "User response screenshot, diagnostic event, redaction check.",
    status: "Confirmed",
    limitation:
      "Other exception classes require their own review.",
  },
];

const resultStatuses = [
  {
    status: "Confirmed",
    meaning:
      "The supplied evidence supports the requirement under the defined test conditions.",
  },
  {
    status: "Conditional",
    meaning:
      "The result supports part of the requirement, but a limitation, dependency, or additional validation remains.",
  },
  {
    status: "Unknown",
    meaning:
      "Required evidence is missing, stale, incomplete, or not collected.",
  },
  {
    status: "Blocked",
    meaning:
      "The requirement failed, a stop condition was reached, or release policy requires resolution before proceeding.",
  },
  {
    status: "Not Applicable",
    meaning:
      "The requirement does not apply to the defined system, environment, or change and that decision is documented.",
  },
];

const evidenceRules = [
  {
    rule: "Collect only what supports the claim",
    detail:
      "A test result should not become an excuse to gather full private records, secret values, or unrelated logs.",
  },
  {
    rule: "Use synthetic references",
    detail:
      "Use fictional user IDs, record IDs, correlation IDs, and test fixtures instead of real identities or production data.",
  },
  {
    rule: "Preserve timestamps and environment",
    detail:
      "Evidence should make clear when and where the result was produced.",
  },
  {
    rule: "Link requirement IDs",
    detail:
      "Every result should connect back to the requirement or finding it validates.",
  },
  {
    rule: "Record limitations",
    detail:
      "A result should state what it does not prove.",
  },
  {
    rule: "Redact before sharing",
    detail:
      "Portfolio and review evidence should exclude credentials, secrets, private data, internal endpoints, and sensitive implementation details.",
  },
];

const commonMistakes = [
  {
    mistake: "Testing before scope is clear",
    why:
      "Unclear authorization can lead to the wrong environment, wrong identities, or wrong data being used.",
    better:
      "Confirm scope, environment, identities, owners, and stop conditions first.",
  },
  {
    mistake: "No expected result",
    why:
      "The tester can collect activity without knowing what outcome represents success.",
    better:
      "Write the requirement and expected result before running the validation.",
  },
  {
    mistake: "Using production data for convenience",
    why:
      "Real private data creates unnecessary privacy and handling risk.",
    better:
      "Use synthetic or approved non-sensitive fixtures.",
  },
  {
    mistake: "Treating one test as universal proof",
    why:
      "A result is bounded to the tested conditions and does not prove every future configuration or role.",
    better:
      "Record limitations and change triggers.",
  },
  {
    mistake: "Ignoring negative outcomes",
    why:
      "Security requirements often depend on safe denial or failure behavior, not only successful actions.",
    better:
      "Include bounded, safe denial and failure cases without bypass techniques.",
  },
  {
    mistake: "Missing stop conditions",
    why:
      "Testing can continue after the environment, scope, or data boundary has changed.",
    better:
      "Define when the test must stop and who decides what happens next.",
  },
  {
    mistake: "Treating missing evidence as pass",
    why:
      "Absence of evidence does not confirm the requirement.",
    better:
      "Use Unknown until evidence exists.",
  },
  {
    mistake: "Collecting secrets in evidence",
    why:
      "Screenshots and logs can retain sensitive values beyond the test.",
    better:
      "Use sanitized metadata and redacted outputs only.",
  },
];

const reviewQuestions = [
  "Which requirement is being validated?",
  "Who authorized the validation?",
  "Which environment is in scope?",
  "Which synthetic identities or fixtures are allowed?",
  "What preconditions must be true?",
  "What action will be performed?",
  "What result is expected?",
  "What evidence proves the result?",
  "Which sensitive values are forbidden from evidence?",
  "What stop conditions apply?",
  "Who owns the test?",
  "Who owns the requirement?",
  "Who reviews the result?",
  "What status will be assigned?",
  "What limitation should be recorded?",
  "What remediation or retest follows a failed result?",
  "What release impact does an Unknown or Blocked result have?",
  "What change trigger requires retesting later?",
];

const dashboardMetrics = [
  {
    label: "Blocking requirements",
    value: "18",
    note: "15 Confirmed, 2 Conditional, 1 Unknown",
  },
  {
    label: "Validation coverage",
    value: "93%",
    note: "One dependency-change case lacks evidence",
  },
  {
    label: "Synthetic data usage",
    value: "100%",
    note: "No real user data in current validation set",
  },
  {
    label: "Open retests",
    value: "3",
    note: "Dependency compatibility, resilience recovery, logging retention",
  },
];

const logs = [
  "[08:40] VAL-01 requirement=REQ-AUTHZ-03 result=CONFIRMED env=TEST",
  "[08:52] VAL-02 requirement=REQ-AUTHZ-03 result=DENY_EXPECTED status=CONFIRMED",
  "[09:10] VAL-03 log-schema required-fields=PASS redaction=PASS retention=NOT_TESTED",
  "[09:27] VAL-04 scheduling-fields expected=3 actual=3 status=CONFIRMED",
  "[09:46] VAL-05 notification-test-double=UNAVAILABLE core-workflow=PASS recovery=PENDING",
  "[10:14] VAL-06 dependency=DEP-02 evidence=NOT_ATTACHED status=UNKNOWN",
  "[10:31] VAL-07 bounded-user-error=PASS diagnostic-redaction=PASS",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep VAL-06 Unknown, request the approved compatibility evidence, and prevent the result from being counted as passed until the evidence is attached.",
    outcome:
      "Best. Missing evidence stays visible and does not become false confidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark VAL-06 Confirmed because the dependency update is small.",
    outcome:
      "Risky. Change size does not prove compatibility.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Test the dependency directly in production to save time.",
    outcome:
      "Risky and out of scope. Validation belongs in the approved test environment.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Stop the test, preserve current evidence, notify the test owner, and re-confirm scope before continuing.",
    outcome:
      "Best. The stop condition protects authorization and data boundaries.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Continue because the same application is involved.",
    outcome:
      "Risky. A changed environment can invalidate the original authorization and evidence assumptions.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Continue but avoid recording the environment change.",
    outcome:
      "Risky. Hiding the change weakens evidence quality and governance.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What should happen before any security validation begins?",
    choices: [
      "Choose the most interesting test idea.",
      "Confirm authorization, scope, environment, requirements, identities, evidence, and stop conditions.",
      "Use production because it is most realistic.",
      "Collect every available log.",
    ],
    answer: 1,
    explanation:
      "Safe validation starts with authorization, bounded scope, expected results, evidence, and stop conditions.",
  },
  {
    question:
      "Why should expected results be written before the test?",
    choices: [
      "So the tester knows what outcome supports or fails the requirement.",
      "So no evidence is needed.",
      "So testing can ignore requirements.",
      "So every result can be marked passed.",
    ],
    answer: 0,
    explanation:
      "Expected outcomes make validation objective and traceable to the requirement.",
  },
  {
    question:
      "What is the safest data choice for a school security validation exercise?",
    choices: [
      "Real customer records",
      "Real credentials",
      "Synthetic identities and fictional data",
      "Private production logs",
    ],
    answer: 2,
    explanation:
      "Synthetic data supports realistic reasoning without exposing real private information.",
  },
  {
    question:
      "A required test result is missing. What is the strongest status?",
    choices: [
      "Confirmed",
      "Unknown",
      "Passed by default",
      "Not important",
    ],
    answer: 1,
    explanation:
      "Missing evidence should remain Unknown until collected.",
  },
  {
    question:
      "What is a stop condition?",
    choices: [
      "A reason to skip documentation.",
      "A defined situation that requires the test to pause or end to protect scope, safety, data, or integrity.",
      "A way to mark every test blocked.",
      "A substitute for authorization.",
    ],
    answer: 1,
    explanation:
      "Stop conditions protect the test boundary and provide a safe response when assumptions change.",
  },
  {
    question:
      "What does one Confirmed authorization test prove?",
    choices: [
      "Every future role and configuration is secure.",
      "The requirement behaved as expected under the tested conditions.",
      "No future change needs retesting.",
      "Production behavior is permanently guaranteed.",
    ],
    answer: 1,
    explanation:
      "Validation results are bounded to the tested conditions and should include limitations and change triggers.",
  },
  {
    question:
      "Why should test evidence be redacted before sharing?",
    choices: [
      "To hide whether the test passed.",
      "To remove secrets, private data, internal details, and other information unnecessary to support the result.",
      "To make evidence impossible to review.",
      "To avoid including requirement IDs.",
    ],
    answer: 1,
    explanation:
      "Redaction preserves evidence value while reducing unnecessary exposure.",
  },
];

const checklistItems = [
  "Authorization and test scope are documented before validation begins.",
  "The correct non-production or explicitly approved environment is identified.",
  "Synthetic identities and fictional data are used.",
  "Each test maps to a requirement, finding, or release criterion.",
  "Expected outcomes are defined before execution.",
  "Positive, denial, failure, and recovery behavior are validated safely where relevant.",
  "Evidence collection is minimized to what supports the claim.",
  "Secret values and unnecessary private data are excluded.",
  "Stop conditions and escalation owners are defined.",
  "Test owners and requirement owners are identified.",
  "Result statuses use Confirmed, Conditional, Unknown, Blocked, or Not Applicable consistently.",
  "Limitations are recorded for every important result.",
  "Failed or incomplete results have remediation and retest plans.",
  "Unknown or Blocked results have explicit release impact.",
  "Retest triggers are defined for meaningful architecture or configuration changes.",
  "No activity involves unauthorized probing, exploitation, bypass testing, credential attacks, or production experimentation.",
];

const takeaways = [
  "Safe security validation begins with authorization, scope, expected outcomes, evidence, and stop conditions.",
  "Requirements should be translated into bounded test cases before execution.",
  "Synthetic identities and fictional data reduce privacy and operational risk.",
  "Positive, denied, failure, and recovery outcomes can all matter to security requirements.",
  "Missing evidence is Unknown, not passed.",
  "One successful test supports a requirement only under the defined test conditions.",
  "Evidence should be minimized, sanitized, and linked to requirement IDs.",
  "Stop conditions protect authorization and test boundaries when assumptions change.",
  "The A11 validation matrix becomes a direct input to secure deployment and release-readiness decisions.",
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

export default function TestingSecurityRequirementsSafelyPage() {
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
              A11.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Testing Security Requirements Safely
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security requirements are only useful if teams can gather safe,
            authorized evidence showing whether expected behavior actually
            occurs.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches you to create bounded test plans using synthetic
            data, fictional identities, approved environments, clear expected
            results, evidence requirements, stop conditions, and careful result
            interpretation.
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
          lessonTitle="Testing Security Requirements Safely"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.8 Entry Readiness"
          items={[
            "I can map implementation evidence back to secure design requirements.",
            "I understand that code review does not replace runtime or configuration validation.",
            "I can separate evidence from interpretation and leave missing evidence Unknown.",
            "I will use only synthetic, fictional, or explicitly authorized test evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Testing Is About Proving the Requirement â€” Not Exploring Randomly"
        >
          <p className="leading-8">
            Imagine a fictional requirement says that assigned counselors may
            view their synthetic student records and unassigned counselors must
            receive a safe denial.
          </p>

          <p className="mt-4 leading-8">
            A weak test plan says, â€œTry things and see what happens.â€ A strong
            test plan states the approved environment, test identities,
            preconditions, expected success, expected denial, evidence fields,
            stop conditions, owner, and release impact.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Validation should reduce uncertainty without creating new risk.
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
          title="Requirements Need Evidence, but Evidence Needs Boundaries"
        >
          <p className="leading-8">
            A release team needs confidence that important security requirements
            behave as expected. But collecting that evidence carelessly can
            create privacy, operational, or authorization problems.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Bound the test",
                text:
                  "Use the right environment, identities, data, requirement, time window, and owner.",
              },
              {
                title: "Bound the claim",
                text:
                  "State exactly what the result supports and what remains outside the test.",
              },
              {
                title: "Bound the evidence",
                text:
                  "Collect only sanitized information needed to support the conclusion.",
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
          title="Eight Steps for Safe Security Validation"
        >
          <div className="grid gap-5">
            {validationWorkflow.map((item) => (
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
          eyebrow="Validation Types"
          title="Eight Kinds of Evidence a Secure Release May Need"
        >
          <div className="grid gap-5">
            {validationTypes.map((item) => (
              <article
                key={item.code}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl bg-cyan-300 px-3 py-2 font-mono font-black text-slate-950">
                    {item.code}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.purpose}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Example
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.example}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Safe Validation Terms"
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

        <FakeDashboardCard
          title="Northbridge Security Validation Dashboard"
          subtitle="Fictional test evidence only"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Blocking Dependency Validation Missing"
          severity="High"
          time="10:14"
          source="Fictional Validation Review"
          details="VAL-06 maps to DEP-02, but the compatibility test evidence for the messaging client update has not been attached to the release package."
          recommendation="Keep the requirement Unknown and prevent it from being counted as passed until authorized compatibility evidence is available."
        />

        <Section
          eyebrow="Validation Matrix"
          title="Seven Fictional Security Test Cases"
        >
          <div className="grid gap-5">
            {testCases.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.requirement}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Environment / precondition
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.environment}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.precondition}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Safe action
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.action}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Expected result / evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.expected}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Evidence: {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Security Validation Log"
          logs={logs}
        />

        <Section
          eyebrow="Result Interpretation"
          title="Five Statuses That Preserve Evidence Quality"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {resultStatuses.map((item) => (
              <article
                key={item.status}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.status}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Discipline"
          title="Six Rules for Safe Validation Evidence"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {evidenceRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.rule}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Questions"
          title="Eighteen Questions Before a Test Case Is Ready"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
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
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Missing Dependency Test"
          question="What is the strongest conclusion about VAL-06?"
          evidence={[
            "VAL-06 maps to dependency record DEP-02.",
            "The updated dependency version is documented.",
            "The release package does not contain compatibility test evidence.",
            "Retry and failure behavior are security-relevant requirements for the messaging workflow.",
          ]}
          options={[
            "Mark the requirement Confirmed because the version is newer.",
            "Keep the requirement Unknown until authorized compatibility evidence is attached.",
            "Test the dependency directly in production.",
            "Ignore retry and failure behavior because the package installed successfully.",
          ]}
          bestAnswer={1}
          explanation="Version metadata does not replace compatibility evidence. Missing required validation should remain Unknown."
        />

        <Section
          eyebrow="Stop Conditions"
          title="Know When the Test Must End"
        >
          <p className="leading-8">
            Stop conditions are part of safe validation design. They protect
            authorization, data boundaries, evidence quality, and system
            integrity.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Wrong environment", "The test is no longer running in the approved environment."],
              ["Unexpected real data", "A real person's private information appears where synthetic data was expected."],
              ["Scope ambiguity", "The next action is not clearly authorized by the validation plan."],
              ["Control failure", "A required safety control, isolation mechanism, or rollback path is unavailable."],
              ["Unexpected system impact", "The test begins affecting a service, user, or workflow outside the approved test boundary."],
              ["Evidence risk", "A screenshot, log, or output would expose a secret or unnecessary sensitive information."],
              ["Identity mismatch", "The active test identity is not the approved synthetic identity."],
              ["Owner unavailable", "A required escalation or rollback owner cannot be reached after a blocking condition."],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Mistakes"
          title="Eight Ways Validation Loses Safety or Value"
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
          title="Scenario Decision Lab 1 â€” Missing Compatibility Evidence"
          scenario="The fictional messaging dependency update is listed in the release package, but the authorized compatibility test result has not been attached. The release deadline is today."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Environment Boundary Changes"
          scenario="During a fictional test, the tester notices that the environment label no longer matches the approved validation charter. The next step would continue the same workflow, but scope is now uncertain."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Security Validation Matrix"
        >
          <p className="leading-8">
            Use only fictional requirements, synthetic data, and approved test
            assumptions. Do not access real systems, private data, credentials,
            production services, or unauthorized environments.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Choose at least eight A11 requirements or findings to validate.",
              "Give each validation case a stable ID.",
              "Identify the approved test environment.",
              "Define synthetic identities and data fixtures.",
              "Write preconditions.",
              "Write the safe test action.",
              "Write the expected result.",
              "List evidence to collect.",
              "List forbidden evidence fields.",
              "Define stop conditions.",
              "Assign test owner and requirement owner.",
              "Record status.",
              "Record limitation.",
              "Define remediation or retest action.",
              "Define release impact.",
              "Define change triggers that require future retesting.",
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
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This is a planning and evidence exercise. Do not create exploit
              steps, bypass instructions, scanning procedures, credential tests,
              or production experiments.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: One Successful Authorization Test"
          question="What is the strongest conclusion from VAL-01?"
          evidence={[
            "Synthetic counselor C-100 was assigned to synthetic student S-200.",
            "The approved record-view workflow succeeded.",
            "Only approved fields were returned.",
            "The authorization audit event was present.",
            "No evidence in VAL-01 covers delayed assignment updates or future counselor roles.",
          ]}
          options={[
            "Authorization is permanently proven for every role and future configuration.",
            "REQ-AUTHZ-03 is supported for the tested assigned-counselor condition, with stated limitations.",
            "The whole application is secure.",
            "No additional authorization tests are needed.",
          ]}
          bestAnswer={1}
          explanation="The test supports the requirement under defined conditions. Its limitations should remain explicit."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Release-Blocking Validation Case"
        >
          <p className="leading-8">
            Create one fictional validation case for a high-impact privileged
            account-recovery requirement. The case should be strict enough to
            influence release readiness without requiring offensive testing.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Requirement ID",
              "Business reason",
              "Authorized environment",
              "Synthetic identities",
              "Preconditions",
              "Expected allowed outcome",
              "Expected denied outcome",
              "Required audit evidence",
              "Forbidden evidence fields",
              "Stop conditions",
              "Test owner",
              "Requirement owner",
              "Blocking criteria",
              "Retest condition",
              "Release impact",
              "Change trigger",
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
            A strong release-blocking case has a clear expected result, safe
            evidence, explicit stop conditions, and an accountable path to
            remediation or exception.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.8 Mini Quiz: Testing Security Requirements Safely"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Security Validation Matrix"
          prompt="Create the eighth artifact for your A11 Secure Software Design Assessment: a fictional security validation matrix with at least eight cases. For each case include ID, requirement or finding, approved environment, synthetic fixtures, preconditions, safe action, expected result, evidence, forbidden evidence fields, stop conditions, owner, status, limitation, remediation or retest action, release impact, and change trigger."
          tips={[
            "Use fictional requirements, synthetic identities, and non-sensitive test data only.",
            "Include at least one authorization allow case and one safe denial case.",
            "Include one logging-redaction case, one dependency case, one resilience case, and one error-handling case.",
            "Keep missing evidence Unknown.",
            "State exactly what each result does and does not prove.",
            "Add a short release summary identifying which results are Confirmed, Conditional, Unknown, or Blocked.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.9?"
        >
          <p className="leading-8">
            A11.9 moves from validation into Secure Deployment Concepts. Before
            continuing, make sure your test evidence is safe, bounded, and easy
            for a release owner to interpret.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can translate a requirement into a bounded validation case.",
              "I can define expected outcomes before the test begins.",
              "I can use synthetic data and approved environments.",
              "I can write stop conditions and release-impact rules.",
              "I can distinguish Confirmed, Conditional, Unknown, and Blocked evidence without overstating certainty.",
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
          title="How to Make the Validation Matrix Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable test IDs",
                detail:
                  "Give each validation case a unique ID so requirements, findings, release criteria, and retests can reference it.",
              },
              {
                title: "Show authorization",
                detail:
                  "State the approved environment, owner, identities, and boundaries for each validation case.",
              },
              {
                title: "Write expected outcomes first",
                detail:
                  "A reviewer should know what result represents success before looking at the evidence.",
              },
              {
                title: "Show stop conditions",
                detail:
                  "Make the safety boundary visible and actionable.",
              },
              {
                title: "Show evidence limits",
                detail:
                  "Every important test should explain what it does not prove.",
              },
              {
                title: "Show release impact",
                detail:
                  "Explain whether Unknown or Blocked results stop release or require an approved exception.",
              },
              {
                title: "Keep evidence sanitized",
                detail:
                  "Use synthetic references and redact secrets, private data, and sensitive internal details.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the validation summary easy to reuse in A11.9 deployment readiness and A11.10 capstone review.",
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
            Validation must remain authorized, bounded, and non-destructive
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize scanning, probing, exploitation,
            bypass testing, credential attacks, fuzzing, production
            experimentation, or access to real systems, accounts, devices,
            repositories, APIs, or private data. Use fictional or explicitly
            authorized test evidence only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.8 Testing Security Requirements Safely Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a safe validation framework connecting requirements,
            test scope, synthetic data, expected results, evidence, stop
            conditions, retests, and release impact. Next, A11.9 focuses on
            Secure Deployment Concepts.
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
