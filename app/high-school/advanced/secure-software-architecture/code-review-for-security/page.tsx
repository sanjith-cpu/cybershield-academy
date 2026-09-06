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
const previousLesson = `${modulePath}/secure-error-handling-and-logging`;
const nextLesson = `${modulePath}/testing-security-requirements-safely`;

const objectives = [
  "Explain how security-focused code review verifies that implementation still matches approved security requirements and architecture intent.",
  "Review fictional code-like pseudocode and design notes for authorization, input handling, data minimization, secret handling, logging, dependency, configuration, and error-handling concerns.",
  "Separate observed implementation evidence from interpretation, risk, and required follow-up.",
  "Write bounded security review findings with evidence, confidence, owner, recommendation, and validation needs.",
  "Build a security code-review checklist and finding register that becomes the seventh artifact in the A11 Secure Software Design Assessment.",
];

const reviewWorkflow = [
  {
    step: "01",
    title: "Understand the change",
    question:
      "What feature, bug fix, refactor, dependency update, or configuration change is being reviewed?",
    detail:
      "Start with the change purpose, affected components, relevant requirements, expected behavior, and whether the change affects a trust boundary, privileged action, data flow, secret, dependency, or logging path.",
    evidence:
      "Change request, requirement IDs, architecture note, design decision, pull-request summary.",
  },
  {
    step: "02",
    title: "Identify security expectations",
    question:
      "Which A11 requirements should this change satisfy?",
    detail:
      "Map the change to identity, authorization, data handling, logging, resilience, configuration, dependency, secret, and release requirements before reading implementation evidence.",
    evidence:
      "Requirements register, threat model, secrets register, dependency register, logging design.",
  },
  {
    step: "03",
    title: "Trace sensitive paths",
    question:
      "Where does identity, privilege, private data, configuration, or sensitive state move through the change?",
    detail:
      "Review the intended path from input to authorization decision, data access, state change, logging, and response without attempting to exploit the software.",
    evidence:
      "Inert pseudocode, safe implementation notes, data-flow map, function responsibilities.",
  },
  {
    step: "04",
    title: "Check defensive boundaries",
    question:
      "Does the implementation preserve expected trust boundaries and least privilege?",
    detail:
      "Look for server-side authorization, safe defaults, narrow data access, secret references instead of values, approved dependencies, bounded errors, and required audit events.",
    evidence:
      "Review notes, pseudocode, configuration metadata, dependency metadata, logging schema.",
  },
  {
    step: "05",
    title: "Record findings",
    question:
      "What does the evidence support, and what remains uncertain?",
    detail:
      "Separate observation from interpretation. Use statuses such as Confirmed, Conditional, Unknown, Needs Change, or Not Applicable instead of overstating certainty.",
    evidence:
      "Finding register, evidence references, reviewer notes.",
  },
  {
    step: "06",
    title: "Require validation",
    question:
      "How will the team prove the final implementation meets the requirement?",
    detail:
      "Code review can support implementation claims, but safe authorized testing, configuration review, dependency evidence, and release validation may still be needed.",
    evidence:
      "Validation plan, test case IDs, configuration review, release checklist.",
  },
  {
    step: "07",
    title: "Close the review",
    question:
      "Who owns each finding and what evidence is required for closure?",
    detail:
      "Assign an owner, remediation or clarification action, validation evidence, target stage, and residual risk or exception status.",
    evidence:
      "Closure record, owner sign-off, retest result, exception record.",
  },
];

const reviewDomains = [
  {
    code: "AUTHZ",
    title: "Authorization",
    focus:
      "Confirm protected actions use the approved authorization path and do not rely only on interface visibility or client-side checks.",
    questions: [
      "Which requirement defines the allowed action?",
      "Where is authorization enforced?",
      "What identity, role, assignment, ownership, or workflow state is checked?",
      "What happens when the decision is deny or Unknown?",
    ],
  },
  {
    code: "DATA",
    title: "Data handling",
    focus:
      "Check that the implementation uses the minimum data needed for the approved purpose and preserves expected data boundaries.",
    questions: [
      "Which fields are read, written, returned, or shared?",
      "Is the data purpose consistent with the requirement?",
      "Are private fields unnecessarily copied or logged?",
      "Does the change alter retention or export behavior?",
    ],
  },
  {
    code: "INPUT",
    title: "Input and output safety",
    focus:
      "Review how expected data is validated, normalized, rejected, encoded, or safely passed between components without providing harmful payloads.",
    questions: [
      "What input shape is expected?",
      "What happens to invalid input?",
      "Does the output expose unnecessary internal detail?",
      "Are boundary decisions made in the correct trusted component?",
    ],
  },
  {
    code: "SECRET",
    title: "Secrets and credentials",
    focus:
      "Confirm the change references approved secret mechanisms and does not embed or expose secret values.",
    questions: [
      "Does the implementation request a managed secret reference or workload identity?",
      "Are secret values excluded from source, errors, logs, and examples?",
      "Is environment scope clear?",
      "Does the change affect rotation or retirement dependencies?",
    ],
  },
  {
    code: "DEP",
    title: "Dependencies",
    focus:
      "Review new or changed packages, services, SDKs, or build components for approved source, ownership, support, and intended runtime role.",
    questions: [
      "Why is the dependency needed?",
      "Is the source approved?",
      "Who owns update and support review?",
      "Does the change alter runtime, privilege, or data exposure?",
    ],
  },
  {
    code: "LOG",
    title: "Logging and errors",
    focus:
      "Ensure important decisions are auditable while errors and telemetry remain privacy-aware and redacted.",
    questions: [
      "Which security events should be recorded?",
      "Are correlation IDs present where needed?",
      "Are secret and private values excluded?",
      "Does the user-facing error reveal internal detail?",
    ],
  },
  {
    code: "CFG",
    title: "Configuration",
    focus:
      "Check whether security behavior depends on approved settings, environment separation, feature flags, or defaults.",
    questions: [
      "Which settings affect security behavior?",
      "What is the approved baseline?",
      "What happens when configuration is missing?",
      "Does the change require a deployment or rollback update?",
    ],
  },
  {
    code: "RES",
    title: "Resilience and safe failure",
    focus:
      "Review whether failure preserves integrity, least privilege, and recoverability.",
    questions: [
      "What dependency or state can fail?",
      "What should remain available?",
      "Does failure leave partial privileged state?",
      "How is rollback or retry governed?",
    ],
  },
];

const vocabulary = [
  {
    term: "Security code review",
    definition:
      "A defensive review of implementation evidence to determine whether code and configuration align with security requirements and architecture intent.",
  },
  {
    term: "Review scope",
    definition:
      "The specific change, files, functions, components, requirements, and behaviors included in a review.",
  },
  {
    term: "Finding",
    definition:
      "A bounded review record describing an observation, why it matters, supporting evidence, owner, recommendation, and validation need.",
  },
  {
    term: "Evidence reference",
    definition:
      "A stable pointer to the requirement, design note, pseudocode block, configuration record, or test artifact supporting a review statement.",
  },
  {
    term: "False confidence",
    definition:
      "An unsupported belief that code is secure because it looks familiar, compiled successfully, or passed unrelated tests.",
  },
  {
    term: "Server-side enforcement",
    definition:
      "A security decision performed in a trusted application or service component rather than relying only on user-interface behavior.",
  },
  {
    term: "Safe default",
    definition:
      "A behavior that prefers a more restrictive or controlled outcome when required security context is missing or invalid.",
  },
  {
    term: "Change scope",
    definition:
      "The intended boundaries of a software change, including what should and should not be affected.",
  },
  {
    term: "Reviewer confidence",
    definition:
      "The strength of a review conclusion based on the quality and completeness of supplied evidence.",
  },
  {
    term: "Remediation",
    definition:
      "A code, design, configuration, ownership, or process change intended to address a review finding.",
  },
  {
    term: "Validation",
    definition:
      "Evidence gathered after implementation or remediation to show that the expected requirement behaves as intended.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk remaining after the review, remediation, controls, and validation evidence are considered.",
  },
];

const pseudoExamples = [
  {
    id: "CR-01",
    title: "Assignment-based record view",
    requirement: "REQ-AUTHZ-03",
    pseudocode: [
      "function viewRecord(user, recordRef):",
      "  assignment = AssignmentService.lookup(user.id, recordRef)",
      "  if assignment != APPROVED:",
      "    Audit.logDecision(user.ref, recordRef, 'view', 'deny')",
      "    return AccessDeniedReference()",
      "  record = RecordService.loadApprovedFields(recordRef)",
      "  Audit.logDecision(user.ref, recordRef, 'view', 'allow')",
      "  return record",
    ],
    observation:
      "Authorization appears before record retrieval, denied access is logged, and the record service returns approved fields only.",
    limitation:
      "The pseudocode does not prove AssignmentService freshness, runtime configuration, or final test behavior.",
    status: "Conditional",
  },
  {
    id: "CR-02",
    title: "Privileged recovery logging",
    requirement: "REQ-LOG-04",
    pseudocode: [
      "function completeRecovery(operator, target, approvalRef):",
      "  decision = RecoveryPolicy.check(operator, target, approvalRef)",
      "  if decision != ALLOW:",
      "    Audit.logRecovery(operator.ref, target.ref, 'deny', approvalRef)",
      "    return SafeDeniedMessage()",
      "  result = RecoveryService.applyApprovedChange(target)",
      "  Audit.logRecovery(operator.ref, target.ref, result, approvalRef)",
      "  return SafeResultReference(result)",
    ],
    observation:
      "The flow records approval reference and result without showing any secret or recovery-code value.",
    limitation:
      "The pseudocode does not show whether separation of duties is enforced inside RecoveryPolicy.",
    status: "Unknown",
  },
  {
    id: "CR-03",
    title: "Scheduling integration data minimization",
    requirement: "REQ-DATA-02",
    pseudocode: [
      "function buildSchedulingPayload(appointment):",
      "  return {",
      "    studentRef: appointment.studentRef,",
      "    date: appointment.date,",
      "    time: appointment.time",
      "  }",
    ],
    observation:
      "Only the three fields listed in the fictional requirement are present in the inert example.",
    limitation:
      "The review does not prove the deployed integration or vendor contract matches this example.",
    status: "Conditional",
  },
  {
    id: "CR-04",
    title: "Secret retrieval pattern",
    requirement: "SEC-02",
    pseudocode: [
      "function schedulingClient():",
      "  tokenRef = SecretProvider.reference('scheduling-prod')",
      "  return Client.withManagedCredential(tokenRef)",
    ],
    observation:
      "The example references a managed secret identifier and does not embed a credential value.",
    limitation:
      "Actual access scope, storage configuration, rotation, and environment controls require separate evidence.",
    status: "Conditional",
  },
  {
    id: "CR-05",
    title: "Error response",
    requirement: "LOG-04",
    pseudocode: [
      "try:",
      "  return RecordService.save(change)",
      "catch StorageOperationError as error:",
      "  ref = Correlation.newReference()",
      "  Diagnostic.recordSanitized('StorageOperationError', ref)",
      "  return UserMessage('We could not complete the request', ref)",
    ],
    observation:
      "The user receives a bounded message and a correlation reference while sanitized diagnostics are recorded separately.",
    limitation:
      "The diagnostic schema and redaction behavior still require validation evidence.",
    status: "Conditional",
  },
];

const findings = [
  {
    id: "FIND-01",
    area: "Authorization",
    observation:
      "The fictional viewRecord pseudocode checks AssignmentService before RecordService.loadApprovedFields.",
    interpretation:
      "The ordering is consistent with the assignment-based authorization requirement.",
    risk:
      "If assignment data is stale or the trusted service is misconfigured, the requirement may still fail.",
    evidence:
      "CR-01 + REQ-AUTHZ-03 + TM-01",
    confidence: "Medium",
    owner: "Application Owner",
    recommendation:
      "Keep the implementation pattern; validate stale-assignment and denial behavior in the authorized test plan.",
    status: "Conditional",
  },
  {
    id: "FIND-02",
    area: "Privileged recovery",
    observation:
      "RecoveryPolicy.check is called before the change, but the pseudocode does not show the internal separation-of-duty rule.",
    interpretation:
      "The call location is promising, but the specific privileged approval requirement is not established by this evidence.",
    risk:
      "A high-impact workflow could be reviewed as complete without proof that approval roles are separated.",
    evidence:
      "CR-02 + threat-model account-recovery concern",
    confidence: "Low",
    owner: "Identity Owner",
    recommendation:
      "Request the approved RecoveryPolicy design evidence and add a validation case before closure.",
    status: "Unknown",
  },
  {
    id: "FIND-03",
    area: "Data minimization",
    observation:
      "The scheduling payload pseudocode includes studentRef, date, and time only.",
    interpretation:
      "The supplied example aligns with the current minimum-field requirement.",
    risk:
      "Future feature additions could silently expand the vendor payload.",
    evidence:
      "CR-03 + REQ-DATA-02",
    confidence: "Medium",
    owner: "Integration Owner",
    recommendation:
      "Require code-review trigger when new outbound fields are added and validate the final integration contract.",
    status: "Conditional",
  },
  {
    id: "FIND-04",
    area: "Secrets",
    observation:
      "The scheduling client requests a managed secret reference rather than containing a value.",
    interpretation:
      "The pattern supports the secret-management requirement at the code-review level.",
    risk:
      "Runtime permissions or environment mapping could still be broader than intended.",
    evidence:
      "CR-04 + SEC-02",
    confidence: "Medium",
    owner: "Integration Owner + Platform Owner",
    recommendation:
      "Validate runtime access scope, environment separation, and rotation metadata outside code review.",
    status: "Conditional",
  },
  {
    id: "FIND-05",
    area: "Error handling",
    observation:
      "The catch path creates a correlation reference, records sanitized diagnostic metadata, and returns a bounded user message.",
    interpretation:
      "The implementation pattern aligns with A11.6 error-handling goals.",
    risk:
      "Sanitization effectiveness and restricted diagnostic access are not proven by pseudocode.",
    evidence:
      "CR-05 + A11.6 logging design",
    confidence: "Medium",
    owner: "Application Engineering",
    recommendation:
      "Validate the diagnostic schema and confirm forbidden values are absent.",
    status: "Conditional",
  },
  {
    id: "FIND-06",
    area: "Dependency change",
    observation:
      "A review note proposes replacing the messaging client library, but the change request does not include updated compatibility evidence.",
    interpretation:
      "The dependency change is not ready to close at code-review stage.",
    risk:
      "Retry, queue, or error behavior could change without being captured in the release evidence.",
    evidence:
      "DEP-02 + change request CHG-118",
    confidence: "High",
    owner: "Notification Service Team",
    recommendation:
      "Keep the review open until compatibility validation, rollback, and updated dependency metadata are attached.",
    status: "Needs Change",
  },
];

const commonMistakes = [
  {
    mistake: "Reviewing without requirements",
    why:
      "The reviewer can spot style issues but cannot tell whether security behavior matches approved intent.",
    better:
      "Start by mapping the change to security requirements and threat-model concerns.",
  },
  {
    mistake: "Assuming client-side checks are enough",
    why:
      "A visible interface restriction does not prove the trusted service enforces authorization.",
    better:
      "Confirm sensitive actions are enforced in the appropriate trusted component.",
  },
  {
    mistake: "Looking only for obvious bugs",
    why:
      "Security review also needs to examine ownership, data flows, logging, secrets, dependencies, configuration, and safe failure.",
    better:
      "Use a repeatable review checklist across multiple security domains.",
  },
  {
    mistake: "Treating code review as final proof",
    why:
      "Code review cannot prove runtime configuration, deployed artifact identity, source health, or production behavior.",
    better:
      "Record what the review supports and what still requires validation.",
  },
  {
    mistake: "Writing vague findings",
    why:
      "â€œThis looks insecureâ€ gives developers little evidence or direction.",
    better:
      "Separate observation, interpretation, risk, evidence, owner, recommendation, and validation.",
  },
  {
    mistake: "Copying secrets into review comments",
    why:
      "Review systems can retain content for long periods and expose it to broader audiences.",
    better:
      "Use secret record IDs and metadata, never secret values.",
  },
  {
    mistake: "Ignoring dependency changes",
    why:
      "A small code diff can still change runtime behavior, support status, provenance, or update risk through dependencies.",
    better:
      "Review dependency metadata and required compatibility evidence.",
  },
  {
    mistake: "Overstating confidence",
    why:
      "Pseudocode or a narrow diff may not represent the entire deployed behavior.",
    better:
      "Use bounded confidence and explicitly request missing evidence.",
  },
];

const reviewQuestions = [
  "What change is being reviewed?",
  "Which security requirements apply?",
  "Which threat-model concerns are affected?",
  "Does the change alter a trust boundary?",
  "Does it change identity or authorization behavior?",
  "Does it change privileged actions?",
  "Does it read, write, return, export, or log sensitive data?",
  "Does it introduce or alter a secret dependency?",
  "Does it add or update a software dependency?",
  "Does it change error handling?",
  "Does it change logging or audit evidence?",
  "Does it change security-sensitive configuration?",
  "Does failure preserve integrity and least privilege?",
  "What evidence supports the current review conclusion?",
  "What remains Unknown?",
  "Who owns remediation or clarification?",
  "What validation is needed before release?",
  "What change trigger should reopen this review later?",
];

const dashboardMetrics = [
  {
    label: "Open security reviews",
    value: "14",
    note: "8 Confirmed, 3 Conditional, 2 Unknown, 1 Needs Change",
  },
  {
    label: "Requirements traced",
    value: "91%",
    note: "Two changes lack complete requirement mapping",
  },
  {
    label: "Findings with owners",
    value: "100%",
    note: "All current findings have accountable owners",
  },
  {
    label: "Validation pending",
    value: "5",
    note: "Runtime, configuration, dependency, and logging evidence still required",
  },
];

const logs = [
  "[08:44] REVIEW CHG-116 scope=record-view authz_req=REQ-AUTHZ-03 status=CONDITIONAL",
  "[09:02] REVIEW CHG-117 recovery-policy separation_of_duty=UNKNOWN",
  "[09:19] FIND FIND-02 owner=IdentityOwner evidence-request=OPEN",
  "[09:46] REVIEW CHG-118 dependency=DEP-02 compatibility=NOT_ATTACHED",
  "[10:07] FIND FIND-06 status=NEEDS_CHANGE owner=NotificationService",
  "[10:33] REVIEW CR-05 error-redaction pattern=ALIGNED validation=PENDING",
  "[11:01] REVIEW scheduling-payload fields=3 requirement=REQ-DATA-02 status=CONDITIONAL",
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the finding open as Unknown, request the approved RecoveryPolicy evidence, and require safe validation of the separation-of-duty requirement before closure.",
    outcome:
      "Best. The review does not invent what the hidden policy does.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed because RecoveryPolicy.check appears in the pseudocode.",
    outcome:
      "Risky. The call proves a policy is consulted, not which rules the policy enforces.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Attempt to bypass the recovery workflow to see whether separation of duties exists.",
    outcome:
      "Risky and out of scope. This lesson uses defensive review evidence only.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the dependency-change review open until compatibility, rollback, ownership, and updated dependency evidence are attached.",
    outcome:
      "Best. The code diff alone does not prove the dependency change is ready.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Approve because the new library version is newer.",
    outcome:
      "Risky. Newer does not automatically prove compatibility or operational readiness.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Approve the code but note that validation can be figured out after production deployment.",
    outcome:
      "Caution. The review remains incomplete because release evidence is part of the change.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What should a security code reviewer understand before reviewing implementation evidence?",
    choices: [
      "Only the programming language.",
      "The change purpose, relevant requirements, architecture intent, and affected security boundaries.",
      "Only whether the code compiles.",
      "Only whether the developer is experienced.",
    ],
    answer: 1,
    explanation:
      "Security review depends on understanding what the implementation is supposed to protect and enforce.",
  },
  {
    question:
      "Why is a client-side access restriction not enough to prove authorization?",
    choices: [
      "Because user interfaces should never hide buttons.",
      "Because protected actions should be enforced in the appropriate trusted service, not only in the interface.",
      "Because authorization is only a logging problem.",
      "Because all users should have the same permissions.",
    ],
    answer: 1,
    explanation:
      "The trusted application or service must enforce authorization for sensitive actions.",
  },
  {
    question:
      "A pseudocode block calls RecoveryPolicy.check, but the policy rules are not supplied. What is the strongest conclusion?",
    choices: [
      "Separation of duties is Confirmed.",
      "The application is unsafe.",
      "The review supports that a policy check exists, but the specific separation-of-duty behavior remains Unknown.",
      "The policy should be bypassed to test it.",
    ],
    answer: 2,
    explanation:
      "The evidence supports only the presence of a policy check, not the hidden rule behavior.",
  },
  {
    question:
      "Why should code-review findings separate observation from interpretation?",
    choices: [
      "To make reports longer.",
      "To show exactly what the evidence says before adding reviewer judgment or risk reasoning.",
      "Because reviewers should never make recommendations.",
      "Because observations always prove impact.",
    ],
    answer: 1,
    explanation:
      "Separating evidence from interpretation improves clarity and reduces unsupported claims.",
  },
  {
    question:
      "A secret-management call references a managed secret ID and contains no value. What does code review still not prove?",
    choices: [
      "That the code uses any secret mechanism at all.",
      "Runtime access scope, environment separation, rotation, and actual deployment configuration.",
      "That secret values should be logged.",
      "That the code compiles.",
    ],
    answer: 1,
    explanation:
      "Code review can support the implementation pattern while runtime governance still requires separate evidence.",
  },
  {
    question:
      "What is the strongest response to a dependency update with no compatibility evidence?",
    choices: [
      "Approve because newer versions are always safer.",
      "Keep the review open until compatibility, validation, rollback, and dependency metadata are complete.",
      "Reject all future updates.",
      "Deploy directly to production to see whether it works.",
    ],
    answer: 1,
    explanation:
      "Dependency changes should be validated and governed rather than assumed safe.",
  },
  {
    question:
      "What is a strong code-review finding?",
    choices: [
      "This looks bad.",
      "Observed pseudocode X; requirement Y expects Z; current evidence does not prove condition A; owner B should provide evidence or change C and validate outcome D.",
      "The whole application is insecure.",
      "No issue because the build passed.",
    ],
    answer: 1,
    explanation:
      "Strong findings are evidence-based, bounded, actionable, owned, and connected to validation.",
  },
];

const checklistItems = [
  "The review scope and change purpose are clear.",
  "Relevant security requirements are identified before implementation review.",
  "Threat-model concerns are linked when the change affects them.",
  "Sensitive actions use trusted server-side or service-side authorization.",
  "Data use remains consistent with approved purpose and minimization.",
  "Secret values are not embedded in source, logs, comments, or review evidence.",
  "New or changed dependencies have approved source, ownership, support, and validation evidence.",
  "User-facing errors remain bounded and safe.",
  "Required audit events and correlation identifiers are preserved.",
  "Security-sensitive configuration and defaults are reviewed.",
  "Failure behavior preserves integrity and least privilege.",
  "Observations are separated from interpretation and risk.",
  "Unknowns remain visible instead of being guessed away.",
  "Every finding has an owner and next action.",
  "Code review is not treated as final proof of runtime behavior.",
  "Validation requirements are defined before review closure.",
  "No review activity requires exploiting, bypassing, probing, or testing real systems without authorization.",
];

const takeaways = [
  "Security code review begins with requirements and architecture intent, not with a generic search for suspicious-looking code.",
  "The reviewer should trace sensitive paths such as authorization, data handling, secrets, dependencies, errors, logging, and configuration.",
  "A policy call or control reference does not automatically prove the hidden rule or runtime behavior.",
  "Code review supports implementation claims but does not replace safe testing, configuration review, or release validation.",
  "Strong findings separate observation, interpretation, risk, evidence, confidence, owner, recommendation, and validation.",
  "Secret values should never be copied into review comments or portfolio evidence.",
  "Dependency changes deserve the same evidence discipline as source-code changes.",
  "Unknown is an acceptable review status when required evidence is missing.",
  "A professional review ends with accountable closure criteria, not just comments.",
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

export default function CodeReviewForSecurityPage() {
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
              A11.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Secure Software Architecture
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A11.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Code Review for Security
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security code review asks whether implementation evidence still
            matches the security requirements and architecture decisions that
            were approved earlier in the lifecycle.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses inert pseudocode, fictional review notes, synthetic
            identifiers, and safe metadata. It does not teach exploitation,
            bypass techniques, malicious payloads, or unauthorized testing.
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
          lessonTitle="Code Review for Security"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A11.7 Entry Readiness"
          items={[
            "I can identify relevant security requirements from A11.2.",
            "I can connect implementation decisions to threat-model concerns from A11.3.",
            "I understand secrets, dependency, logging, and error-handling governance from A11.4â€“A11.6.",
            "I will review only fictional pseudocode and supplied evidence in this lesson.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Passing Build Does Not Prove Secure Behavior"
        >
          <p className="leading-8">
            Imagine a fictional feature compiles successfully, passes its
            ordinary functional tests, and looks clean. That still does not tell
            a security reviewer whether authorization is enforced in the trusted
            component, whether the feature returns too much private data,
            whether secrets are handled correctly, whether important actions
            are logged, or whether a changed dependency has current validation.
          </p>

          <p className="mt-4 leading-8">
            Security code review adds one question to the development process:
            <strong className="text-white">
              {" "}does the implementation still match the secure design?
            </strong>
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Review the code against the requirement â€” not against intuition.
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
          title="Implementation Can Drift From Design"
        >
          <p className="leading-8">
            Secure requirements may be correct and the architecture may be
            strong, but implementation choices can still drift. A shortcut can
            move authorization to the wrong place. A new field can expand data
            sharing. A debug statement can expose private information. A
            dependency update can change behavior. An error handler can reveal
            internal detail.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Trace",
                text:
                  "Connect the code change back to requirements, design decisions, and threat-model concerns.",
              },
              {
                title: "Observe",
                text:
                  "Record exactly what the supplied implementation evidence shows.",
              },
              {
                title: "Validate",
                text:
                  "Identify what code review cannot prove and require the right follow-up evidence.",
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
          title="Seven Steps for Security-Focused Code Review"
        >
          <div className="grid gap-5">
            {reviewWorkflow.map((item) => (
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
          eyebrow="Review Domains"
          title="Eight Areas to Check Consistently"
        >
          <div className="grid gap-5">
            {reviewDomains.map((item) => (
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

                <p className="mt-4 leading-7 text-slate-300">
                  {item.focus}
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {item.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50"
                    >
                      {question}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Code-Review Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Review Evidence"
          title="Five Inert Pseudocode Examples"
        >
          <p className="leading-8">
            These examples are deliberately non-operational. They model review
            reasoning without exposing real source code or harmful procedures.
          </p>

          <div className="mt-6 grid gap-5">
            {pseudoExamples.map((item) => (
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

                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 font-mono text-sm leading-7 text-slate-200">
                  {item.pseudocode.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.observation}
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

        <FakeDashboardCard
          title="Northbridge Security Code Review Dashboard"
          subtitle="Fictional review status only"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Dependency Change Missing Compatibility Evidence"
          severity="High"
          time="10:07"
          source="Fictional Security Review"
          details="CHG-118 replaces the production messaging client library, but the change request does not include updated compatibility, rollback, or retry-behavior validation evidence."
          recommendation="Keep the security review open until dependency metadata and authorized compatibility evidence are attached."
        />

        <Section
          eyebrow="Finding Register"
          title="Six Example Security Review Findings"
        >
          <div className="grid gap-5">
            {findings.map((item) => (
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
                      Interpretation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.interpretation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                      Risk
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.risk}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                      Evidence / confidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.evidence}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-100">
                      Confidence: {item.confidence}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.owner}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Recommendation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.recommendation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Security Code Review Log"
          logs={logs}
        />

        <Section
          eyebrow="Review Questions"
          title="Eighteen Questions for a Repeatable Review"
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
          title="Evidence Analysis: Hidden Recovery Policy"
          question="What is the strongest review conclusion about the fictional recovery workflow?"
          evidence={[
            "The pseudocode calls RecoveryPolicy.check before applying the privileged recovery change.",
            "Denied recovery attempts are logged.",
            "The supplied evidence does not show the internal RecoveryPolicy rules.",
            "The design requirement expects separation of duties for high-impact recovery.",
          ]}
          options={[
            "Separation of duties is Confirmed because the policy function exists.",
            "The implementation is definitely unsafe.",
            "The review supports that a policy check exists, but the separation-of-duty requirement remains Unknown until policy evidence and safe validation are supplied.",
            "The reviewer should attempt to bypass the policy.",
          ]}
          bestAnswer={2}
          explanation="The call supports a limited implementation claim. It does not prove the hidden policy enforces the required approval separation."
        />

        <Section
          eyebrow="Review Quality"
          title="Observation Is Not the Same as Conclusion"
        >
          <p className="leading-8">
            Strong findings make it easy for another reviewer to understand
            what the evidence actually showed and how the security conclusion
            was reached.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-[950px] w-full border-collapse text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                  <th className="border-b border-slate-700 p-4">Layer</th>
                  <th className="border-b border-slate-700 p-4">Question</th>
                  <th className="border-b border-slate-700 p-4">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Observation",
                    "What did the supplied evidence show?",
                    "The pseudocode checks assignment before loading the record.",
                  ],
                  [
                    "Interpretation",
                    "What does that mean relative to the requirement?",
                    "The order is consistent with server-side assignment authorization.",
                  ],
                  [
                    "Limitation",
                    "What does the evidence not prove?",
                    "Assignment freshness and deployed configuration are not established.",
                  ],
                  [
                    "Risk",
                    "Why does the limitation matter?",
                    "Stale assignment data could produce access inconsistent with the intended rule.",
                  ],
                  [
                    "Recommendation",
                    "What should happen next?",
                    "Validate stale-assignment behavior and denial evidence.",
                  ],
                  [
                    "Closure",
                    "What evidence closes the finding?",
                    "Authorized validation result linked to REQ-AUTHZ-03.",
                  ],
                ].map(([layer, question, example]) => (
                  <tr key={layer} className="align-top">
                    <td className="border-b border-slate-800 p-4 font-black text-cyan-200">
                      {layer}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-slate-300">
                      {question}
                    </td>
                    <td className="border-b border-slate-800 p-4 text-sm leading-7 text-purple-100">
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          eyebrow="Common Mistakes"
          title="Eight Ways Security Code Reviews Lose Value"
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
          title="Scenario Decision Lab 1 â€” Policy Function Exists, Rule Unknown"
          scenario="The fictional account-recovery implementation calls RecoveryPolicy.check before applying the change. Review evidence does not show whether RecoveryPolicy enforces the required separation of duties."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 â€” Messaging Dependency Update"
          scenario="A fictional change updates the production messaging client library. The code diff is small, but compatibility, retry behavior, rollback, and updated dependency metadata are not attached."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Perform a Security Code Review"
        >
          <p className="leading-8">
            Use only the inert pseudocode and fictional evidence supplied in
            this lesson. Do not inspect real repositories, applications, APIs,
            systems, or accounts.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Choose one fictional change and state the review scope.",
              "List the security requirements that apply.",
              "List relevant threat-model concerns.",
              "Identify the trusted components and trust boundaries.",
              "Review authorization behavior.",
              "Review data use and minimization.",
              "Review secret handling.",
              "Review dependency changes.",
              "Review error handling and logging.",
              "Review security-sensitive configuration assumptions.",
              "Write at least four findings.",
              "Separate observation, interpretation, limitation, and risk.",
              "Assign confidence and owner.",
              "Define remediation or clarification.",
              "Define the evidence required for closure.",
              "Define the test or validation follow-up.",
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
              Review what the fictional evidence shows. Do not turn the lab into
              exploit development, bypass testing, malicious payload design,
              credential use, or real-system probing.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Managed Secret Reference"
          question="What is the strongest conclusion about CR-04?"
          evidence={[
            "The pseudocode requests a managed secret reference called scheduling-prod.",
            "No credential value appears in the supplied code-like example.",
            "The evidence does not include runtime permission policy.",
            "The evidence does not include rotation or environment-separation validation.",
          ]}
          options={[
            "Secret governance is fully Confirmed.",
            "The code-review pattern aligns with managed secret use, but runtime scope, rotation, and environment controls still require separate evidence.",
            "The secret value should be copied into the review comments.",
            "The application is compromised because a secret reference exists.",
          ]}
          bestAnswer={1}
          explanation="Code review supports the use of a managed secret reference. Runtime governance and lifecycle evidence still need separate validation."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Write a Review Finding That a Developer Can Close"
        >
          <p className="leading-8">
            Create one fictional finding for a high-impact account-recovery
            workflow. Your finding should be specific enough that the
            implementation owner knows exactly what evidence or change is
            required.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Finding ID",
              "Affected requirement",
              "Change scope",
              "Observation",
              "Interpretation",
              "Evidence reference",
              "Limitation / Unknown",
              "Security impact",
              "Reviewer confidence",
              "Owner",
              "Recommended change or evidence request",
              "Validation requirement",
              "Closure condition",
              "Residual risk",
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
            The strongest finding is not the most dramatic. It is the one that
            accurately describes the evidence and has a clear path to closure.
          </p>
        </Section>

        <DefenderChecklist
          title="A11.7 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A11.7 Mini Quiz: Code Review for Security"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build â€” Security Code Review Register"
          prompt="Create the seventh artifact for your A11 Secure Software Design Assessment: a fictional security code-review register containing at least six findings from inert pseudocode or design notes. For each finding include ID, requirement, change scope, observation, interpretation, evidence reference, limitation, risk, confidence, owner, recommendation, validation need, closure condition, and status."
          tips={[
            "Use only fictional code-like pseudocode and synthetic identifiers.",
            "Include findings for authorization, data handling, secret handling, dependency change, error handling, and logging.",
            "Keep code review separate from runtime validation.",
            "Use Unknown when policy or configuration evidence is missing.",
            "Never include real credentials, repositories, private source code, or harmful payloads.",
            "Add a one-paragraph executive summary describing the strongest design alignment and the most important unresolved review gap.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A11.8?"
        >
          <p className="leading-8">
            A11.8 turns secure requirements into safe validation plans. Before
            moving on, make sure you can explain what code review can support
            and what still requires testing or configuration evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can map a code change to security requirements and threat-model concerns.",
              "I can review authorization, data, secrets, dependencies, errors, logging, configuration, and resilience.",
              "I can separate code-review evidence from runtime validation.",
              "I can write bounded findings with owners and closure criteria.",
              "I can leave policy or configuration behavior Unknown when the evidence is not supplied.",
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
          title="How to Make the Code-Review Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable finding IDs",
                detail:
                  "Give each review item a unique ID so remediation, validation, and release evidence can reference it.",
              },
              {
                title: "Link the requirement",
                detail:
                  "Every finding should explain which expected security behavior is affected.",
              },
              {
                title: "Separate evidence layers",
                detail:
                  "Observation, interpretation, risk, and limitation should be distinct.",
              },
              {
                title: "Show confidence",
                detail:
                  "Use High, Medium, or Low confidence based on how complete the supplied evidence is.",
              },
              {
                title: "Show ownership",
                detail:
                  "Every open finding should have an accountable implementation or design owner.",
              },
              {
                title: "Show closure evidence",
                detail:
                  "State what change, clarification, configuration record, or validation result closes the finding.",
              },
              {
                title: "Use inert examples",
                detail:
                  "Keep pseudocode conceptual and defensive rather than operational or harmful.",
              },
              {
                title: "Connect forward",
                detail:
                  "Make the validation requirement easy to reuse in A11.8 and deployment readiness later in the module.",
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
            Code review is defensive evidence analysis
          </h2>
          <p className="mt-3 leading-7">
            This lesson does not authorize exploitation, bypass testing,
            credential attacks, scanning, fuzzing, payload development, or
            access to real repositories, applications, APIs, devices, accounts,
            or networks. Use fictional pseudocode and supplied evidence only.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11.7 Code Review for Security Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a repeatable security code-review process that connects
            requirements, threat models, secrets, dependencies, errors,
            logging, configuration, findings, and closure evidence. Next, A11.8
            focuses on Testing Security Requirements Safely.
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
