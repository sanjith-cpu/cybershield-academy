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
const modulePath = `${trackPath}/identity-zero-trust-and-access-control`;
const previousLesson = `${modulePath}/identity-logging-and-monitoring`;
const nextLesson = `${modulePath}/balancing-security-and-usability`;

const objectives = [
  "Explain access review as a governance decision about whether a current identity-to-resource relationship should continue, change, expire, or be removed.",
  "Evaluate access using business purpose, privilege, resource sensitivity, ownership, lifecycle, activity evidence, sponsorship, exceptions, and evidence freshness.",
  "Distinguish Confirm, Reduce, Remove, Reassign, Expire, Review, and Accepted Risk as governance outcomes rather than treating every review as a simple yes/no certification.",
  "Connect access review to workforce lifecycle, external sponsorship, privileged eligibility, workload identity, conditional access, federation, monitoring, and residual-risk decisions.",
  "Build an Access Review Decision Register that becomes the eighth artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const reviewDimensions = [
  {
    dimension: "Current business or technical purpose",
    question:
      "Why does this identity still need this resource or entitlement today?",
    evidence:
      "Current job responsibility, application dependency, project need, service ownership, partner support purpose, or approved operating function.",
    warning:
      "Historical usefulness is not enough when no current purpose exists.",
  },
  {
    dimension: "Identity lifecycle",
    question:
      "Has the user's role, team, employer, project, sponsor, workload, or service changed?",
    evidence:
      "Joiner/mover/leaver events, project status, sponsor state, service inventory, role-change record, workload retirement evidence.",
    warning:
      "Access can become stale even when the entitlement itself has not changed.",
  },
  {
    dimension: "Privilege",
    question:
      "Does the identity still need this level of access?",
    evidence:
      "Current job duty, privileged eligibility, actual task need, resource owner confirmation, recent use where appropriate.",
    warning:
      "A valid need for basic access does not automatically justify elevated privilege.",
  },
  {
    dimension: "Resource sensitivity",
    question:
      "How significant is the resource or action being reviewed?",
    evidence:
      "Application criticality, data classification, management-plane scope, privileged function, external-facing control.",
    warning:
      "Higher-impact access deserves stronger review evidence.",
  },
  {
    dimension: "Ownership",
    question:
      "Who is accountable for the identity, entitlement, resource, and final decision?",
    evidence:
      "Manager, sponsor, resource owner, application owner, privileged-role owner, service owner.",
    warning:
      "Unowned access should not be treated as normal.",
  },
  {
    dimension: "Activity evidence",
    question:
      "Does recent use support the stated purpose?",
    evidence:
      "Safe authentication, authorization, workload, privileged, or application activity metadata.",
    warning:
      "Recent use can support a review but does not by itself prove that access is justified.",
  },
  {
    dimension: "Exception state",
    question:
      "Is the access outside the preferred model, and if so, is that deviation still approved?",
    evidence:
      "Exception owner, reason, expiration, compensating control, target state, review record.",
    warning:
      "Expired exceptions should not become silent permanent access.",
  },
  {
    dimension: "Evidence freshness",
    question:
      "Is the review based on current enough information?",
    evidence:
      "Current identity state, recent owner confirmation, source health, role metadata, lifecycle event, review date.",
    warning:
      "Stale evidence should move the decision to Conditional or Unknown rather than Confirmed.",
  },
];

const governanceOutcomes = [
  {
    outcome: "Confirm",
    meaning:
      "Current evidence supports keeping the access unchanged.",
    example:
      "An active counselor still needs the counselor role for current student-support work.",
  },
  {
    outcome: "Reduce",
    meaning:
      "Some access remains justified, but the current scope or privilege is broader than needed.",
    example:
      "A reporting analyst keeps dashboard access but loses a sensitive export entitlement no longer required.",
  },
  {
    outcome: "Remove",
    meaning:
      "No current approved purpose remains.",
    example:
      "A former project administrator loses migration-admin eligibility after the project closes.",
  },
  {
    outcome: "Reassign",
    meaning:
      "Ownership or sponsorship must move to a new accountable person or team before access can continue.",
    example:
      "A service changes teams and the workload identity needs a new service owner.",
  },
  {
    outcome: "Expire",
    meaning:
      "Time-bounded access reaches its planned end state.",
    example:
      "A partner support identity expires when the support agreement or project window ends.",
  },
  {
    outcome: "Review / Unknown",
    meaning:
      "Available evidence is not sufficient for a confident continuation or removal decision.",
    example:
      "The resource owner is unknown and monitoring evidence is partial.",
  },
  {
    outcome: "Accepted Risk",
    meaning:
      "A known access weakness is explicitly approved for a bounded period by an authorized risk owner.",
    example:
      "A legacy service remains temporarily active under a documented exception while replacement work is underway.",
  },
];

const reviewTriggers = [
  {
    trigger: "Scheduled review",
    examples:
      "Quarterly privileged-access review, semiannual application review, annual low-risk entitlement review.",
    reason:
      "Provides recurring confirmation even when no obvious change event occurs.",
  },
  {
    trigger: "Role or team change",
    examples:
      "Counselor moves to operations, platform engineer changes teams, manager responsibility shifts.",
    reason:
      "Previously appropriate role memberships may no longer match current duties.",
  },
  {
    trigger: "Employment or contractor change",
    examples:
      "Joiner, mover, leaver, contract end, leave status, rehire.",
    reason:
      "Identity lifecycle directly affects whether access should exist.",
  },
  {
    trigger: "Project lifecycle",
    examples:
      "Migration starts, project milestone ends, temporary support closes, pilot is retired.",
    reason:
      "Project-bound roles and exceptions should end with the project unless re-approved.",
  },
  {
    trigger: "Sponsor change",
    examples:
      "Partner sponsor leaves, guest sponsor changes, business owner no longer supports access.",
    reason:
      "External access should remain tied to a current internal owner.",
  },
  {
    trigger: "Resource or application change",
    examples:
      "Application becomes more sensitive, data classification changes, service ownership moves, feature is retired.",
    reason:
      "Authorization appropriate for the old resource state may no longer be appropriate.",
  },
  {
    trigger: "Privilege change",
    examples:
      "New admin function, elevated role, JIT eligibility, emergency-access assignment.",
    reason:
      "Higher impact should trigger stronger review.",
  },
  {
    trigger: "Monitoring or policy finding",
    examples:
      "Unused high privilege, environment mismatch, stale attribute, unexpected authorization decision.",
    reason:
      "Evidence can reveal that the design no longer matches intended access.",
  },
];

const reviewPrinciples = [
  {
    title: "Review the relationship, not the label",
    meaning:
      "An entitlement name like 'Analyst' or 'Admin' is not enough; reviewers need to know principal, resource, action scope, purpose, and lifecycle.",
    review:
      "Can another person explain exactly what the access allows?",
  },
  {
    title: "Ownership is part of the decision",
    meaning:
      "A manager may understand the user, while a resource owner understands the application or data impact.",
    review:
      "Are the right decision owners participating?",
  },
  {
    title: "Recent use is supporting evidence, not automatic justification",
    meaning:
      "An entitlement can be frequently used and still be overbroad or inappropriate.",
    review:
      "Does use match the approved business purpose?",
  },
  {
    title: "Unused access deserves attention",
    meaning:
      "Long-unused access may indicate stale need, but absence of use should be interpreted with business context.",
    review:
      "Is the access rarely used because it is emergency-only, or because it is obsolete?",
  },
  {
    title: "Privilege should be reviewed more strongly",
    meaning:
      "Administrative capability deserves more frequent and more evidence-rich review than routine low-impact access.",
    review:
      "Is privileged eligibility still tied to a current responsibility?",
  },
  {
    title: "External access needs sponsor evidence",
    meaning:
      "Partners and guests should not remain active without a current internal owner and business purpose.",
    review:
      "Who sponsors the identity today and when does it expire?",
  },
  {
    title: "Exceptions need closure paths",
    meaning:
      "A temporary risk acceptance should not turn into a permanent access model by default.",
    review:
      "What target state will close the exception?",
  },
  {
    title: "Uncertainty should remain visible",
    meaning:
      "When ownership, purpose, evidence, or lifecycle is unresolved, the review should say so.",
    review:
      "Is Unknown being hidden behind a Confirmed status?",
  },
];

const lifecycleCases = [
  {
    case: "Joiner",
    governanceQuestion:
      "What baseline access is required for the new responsibility?",
    decisionFocus:
      "Minimum initial role, correct environment, sponsor/manager, resource approval, no inherited unnecessary access.",
  },
  {
    case: "Mover",
    governanceQuestion:
      "Which old access should be removed as new responsibilities are added?",
    decisionFocus:
      "Privilege reduction, old-team roles, project entitlements, resource ownership, conflicting duties.",
  },
  {
    case: "Leaver",
    governanceQuestion:
      "Which workforce, privileged, federation, partner, workload, and local access relationships must close?",
    decisionFocus:
      "Revocation timing, dependent ownership transfer, emergency identities, active sessions, shared resources.",
  },
  {
    case: "Project end",
    governanceQuestion:
      "Which temporary roles, exceptions, and privileged eligibility should expire?",
    decisionFocus:
      "Project-bound access, migration roles, temporary support, partner permissions, closure evidence.",
  },
  {
    case: "Service retirement",
    governanceQuestion:
      "Which workload identities, service accounts, roles, policies, and monitoring sources should retire with the service?",
    decisionFocus:
      "Non-human identity cleanup, local credentials, role removal, ownership transfer, archive evidence.",
  },
  {
    case: "Sponsor loss",
    governanceQuestion:
      "Should external access continue when the original sponsor is no longer accountable?",
    decisionFocus:
      "Reassign sponsorship, reduce access, expire identity, confirm current business need.",
  },
];

const vocabulary = [
  {
    term: "Access review",
    definition:
      "A structured decision about whether an existing identity-to-resource relationship should continue, change, expire, or be removed.",
  },
  {
    term: "Certification",
    definition:
      "A formal confirmation that reviewed access remains appropriate based on current evidence.",
  },
  {
    term: "Entitlement",
    definition:
      "A role, permission, group membership, resource access, privileged eligibility, or other authorization granted to an identity.",
  },
  {
    term: "Joiner/Mover/Leaver",
    definition:
      "Identity lifecycle events describing entry into an organization, change of responsibility, and departure.",
  },
  {
    term: "Recertification",
    definition:
      "A recurring review that confirms whether existing access should still remain.",
  },
  {
    term: "Resource owner",
    definition:
      "The person or team accountable for deciding appropriate access to an application, service, data resource, or privileged function.",
  },
  {
    term: "Sponsor",
    definition:
      "The internal owner accountable for an external or guest identity's continued business need.",
  },
  {
    term: "Residual risk",
    definition:
      "Risk that remains after controls, restrictions, compensating measures, or remediation have been applied.",
  },
  {
    term: "Risk acceptance",
    definition:
      "An explicit authorized decision to tolerate a known residual risk for a defined period and purpose.",
  },
  {
    term: "Remediation",
    definition:
      "The action taken after review to reduce, remove, expire, reassign, or otherwise correct access.",
  },
  {
    term: "Evidence freshness",
    definition:
      "How current the identity, ownership, activity, lifecycle, and policy evidence is relative to the review decision.",
  },
  {
    term: "Access owner",
    definition:
      "The accountable person or team responsible for the continued validity of a specific access relationship.",
  },
];

const reviewRecords = [
  {
    id: "REV-01",
    identity: "Counselor Workforce Group",
    resource: "Student Services Portal",
    entitlement: "Counselor Role",
    purpose: "Current student-support workflow",
    privilege: "Standard application access",
    lifecycle: "Current counselor role",
    owner: "Student Services Application Owner",
    activity: "Recent role-appropriate use",
    evidence: "Current identity + role + authorization + owner confirmation",
    exception: "None",
    decision: "Confirm",
    status: "Confirmed",
    nextAction: "Review next quarter or on role change",
    concern:
      "Access should change immediately if counselor responsibility ends.",
  },
  {
    id: "REV-02",
    identity: "Reporting Analyst",
    resource: "Reporting Dashboard + Sensitive Export",
    entitlement: "Reporting Analyst + Sensitive Export",
    purpose: "Dashboard reporting remains current; export need ended",
    privilege: "Mixed standard + sensitive capability",
    lifecycle: "Role current",
    owner: "Analytics Product Owner",
    activity: "Dashboard active; sensitive export unused for 120 days",
    evidence: "Current role + activity + owner confirmation",
    exception: "None",
    decision: "Reduce",
    status: "Confirmed",
    nextAction: "Remove Sensitive Export; retain standard reporting",
    concern:
      "Keeping all access because some access is still needed would be overbroad.",
  },
  {
    id: "REV-03",
    identity: "Former Migration Project Administrator",
    resource: "Migration Console",
    entitlement: "Migration Administrator Eligible",
    purpose: "Historical project; no current need",
    privilege: "Privileged eligibility",
    lifecycle: "Project closed",
    owner: "Migration Project Owner",
    activity: "No recent activation",
    evidence: "Current project closure + eligibility feed",
    exception: "None",
    decision: "Remove",
    status: "Blocked",
    nextAction: "Remove privileged eligibility and record closure",
    concern:
      "Unused privilege still remains available until eligibility is removed.",
  },
  {
    id: "REV-04",
    identity: "Scheduling Partner Support",
    resource: "Scheduling Integration Console",
    entitlement: "External Integration Support",
    purpose: "Current partner support",
    privilege: "Narrow external support access",
    lifecycle: "Review due in 30 days",
    owner: "Integration Owner / Sponsor",
    activity: "Recent support activity",
    evidence: "Current sponsor + federation + app authorization",
    exception: "None",
    decision: "Review",
    status: "Conditional",
    nextAction: "Sponsor must confirm continuation before expiration",
    concern:
      "Current activity does not replace the scheduled sponsor decision.",
  },
  {
    id: "REV-05",
    identity: "Student Portal Workload",
    resource: "Student Support Database",
    entitlement: "Application Workload Access",
    purpose: "Current production application dependency",
    privilege: "Application-specific data operations",
    lifecycle: "Service active",
    owner: "Application Team + Data Platform",
    activity: "Current workload access",
    evidence: "Workload identity + deployment + database authorization logs",
    exception: "None",
    decision: "Confirm",
    status: "Confirmed",
    nextAction: "Review on application/dependency change",
    concern:
      "Service retirement must include workload-identity retirement.",
  },
  {
    id: "REV-06",
    identity: "Legacy Reporting Account",
    resource: "Generated Report Storage",
    entitlement: "Historical Report Write Access",
    purpose: "Historical job; current need uncertain",
    privilege: "Legacy service permission",
    lifecycle: "No current review",
    owner: "Unknown",
    activity: "Intermittent",
    evidence: "Partial logs + stale entitlement metadata",
    exception: "No valid current exception",
    decision: "Review / Unknown",
    status: "Blocked",
    nextAction: "Resolve owner and business need; remove or formally govern",
    concern:
      "Activity alone does not justify unowned legacy access.",
  },
  {
    id: "REV-07",
    identity: "Emergency Recovery Operator",
    resource: "Recovery Administration",
    entitlement: "Emergency Admin Eligible",
    purpose: "Rare critical recovery",
    privilege: "Emergency privileged eligibility",
    lifecycle: "Eligibility current",
    owner: "Resilience + Security",
    activity: "One prior emergency use",
    evidence: "Activation/audit current; post-use review incomplete",
    exception: "Emergency session review condition",
    decision: "Review",
    status: "Conditional",
    nextAction: "Complete post-use review before full certification",
    concern:
      "Emergency access may remain eligible, but unresolved prior use must stay visible.",
  },
];

const dashboardMetrics = [
  {
    label: "Access relationships reviewed",
    value: "7",
    note: "Workforce, reporting, privileged, partner, workload, legacy, and emergency access",
  },
  {
    label: "Confirm unchanged",
    value: "2",
    note: "Counselor and production workload access remain justified",
  },
  {
    label: "Reduce / Remove",
    value: "2",
    note: "Sensitive export is reduced and obsolete migration privilege is removed",
  },
  {
    label: "Open review conditions",
    value: "3",
    note: "Partner renewal, legacy ownership, and emergency post-review require closure",
  },
];

const logs = [
  "[08:01] REV-01 counselor role=CURRENT purpose=CURRENT decision=CONFIRM state=CONFIRMED",
  "[08:24] REV-02 reporting sensitive_export=UNUSED_120D decision=REDUCE state=CONFIRMED",
  "[08:48] REV-03 migration-admin project=CLOSED eligibility=ACTIVE decision=REMOVE state=BLOCKED",
  "[09:13] REV-04 partner sponsor=CURRENT review_due=30d decision=REVIEW state=CONDITIONAL",
  "[09:37] REV-05 portal-workload service=ACTIVE dependency=CURRENT decision=CONFIRM state=CONFIRMED",
  "[10:01] REV-06 legacy-report owner=UNKNOWN evidence=PARTIAL decision=UNKNOWN state=BLOCKED",
  "[10:26] REV-07 emergency-admin post_review=PARTIAL decision=REVIEW state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Rubber-stamp certification",
    problem:
      "Reviewers approve large access lists without examining purpose, scope, privilege, or lifecycle.",
    better:
      "Require enough context to make a real decision for each material access relationship.",
  },
  {
    title: "Review by entitlement name only",
    problem:
      "Labels such as Analyst or Admin hide what the role actually permits.",
    better:
      "Show resource, action scope, privilege, environment, and owner.",
  },
  {
    title: "Usage equals justification",
    problem:
      "Frequently used access is automatically kept even when the scope is broader than the business need.",
    better:
      "Treat activity as supporting evidence, not proof of authorization need.",
  },
  {
    title: "Unused means remove automatically",
    problem:
      "Rare emergency or seasonal access can be legitimate even when it is seldom used.",
    better:
      "Interpret low use together with purpose, lifecycle, and resource impact.",
  },
  {
    title: "Manager reviews privileged access alone",
    problem:
      "The manager may understand the employee but not the technical impact of the admin role.",
    better:
      "Include privileged-role or resource owners in higher-impact decisions.",
  },
  {
    title: "External access has no sponsor review",
    problem:
      "Partner access remains active after the internal business relationship changes.",
    better:
      "Require current sponsorship and expiration or recertification.",
  },
  {
    title: "Exception renewal with no target state",
    problem:
      "Temporary risk becomes permanent because every review simply extends the same exception.",
    better:
      "Require remediation target, closure owner, and bounded expiration.",
  },
  {
    title: "Unowned access gets auto-confirmed",
    problem:
      "Nobody can explain who is accountable for the entitlement or resource.",
    better:
      "Move the relationship to Unknown/Blocked until ownership is resolved.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Reduce the analyst's access by removing the sensitive export entitlement while keeping the standard dashboard role that is still required.",
    outcome:
      "Best. Access review can preserve valid work while removing unnecessary capability.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep both entitlements because the user still works as a reporting analyst.",
    outcome:
      "Risky. A valid job role does not justify every historical permission.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Remove all reporting access because one entitlement is no longer needed.",
    outcome:
      "Overly restrictive. Review should distinguish necessary access from unnecessary scope.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the legacy access Blocked/Unknown until a current owner and business purpose are established, then either remove it or place it under a valid bounded governance model.",
    outcome:
      "Best. Activity does not replace ownership, purpose, lifecycle, or exception evidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Confirm the access because the account still generates reports sometimes.",
    outcome:
      "Risky. Use does not prove the access is appropriately governed.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Make the entitlement permanent so future reviews are unnecessary.",
    outcome:
      "Risky. That removes governance instead of resolving the gap.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main purpose of an access review?",
    choices: [
      "To decide whether an existing identity-to-resource relationship should continue, change, expire, or be removed.",
      "To approve every current entitlement.",
      "To replace authentication.",
      "To grant administrator access.",
    ],
    answer: 0,
    explanation:
      "Access review is a governance decision about whether current access still matches current need.",
  },
  {
    question:
      "A reporting analyst still needs dashboard access but no longer needs sensitive export capability. What is the strongest outcome?",
    choices: [
      "Confirm everything.",
      "Reduce access by removing the unnecessary sensitive entitlement.",
      "Remove all access.",
      "Accepted Risk.",
    ],
    answer: 1,
    explanation:
      "Review should preserve required access while reducing unnecessary privilege or scope.",
  },
  {
    question:
      "Why should recent activity not automatically justify access?",
    choices: [
      "Because an entitlement can be used frequently and still be overbroad or inappropriate.",
      "Because activity evidence is never useful.",
      "Because used access must always be removed.",
      "Because only managers decide access.",
    ],
    answer: 0,
    explanation:
      "Usage supports the review but does not replace business purpose and authorization.",
  },
  {
    question:
      "A project ended but privileged eligibility remains assigned. What is the strongest review decision?",
    choices: [
      "Confirm because the role was valid in the past.",
      "Remove the obsolete privileged eligibility.",
      "Convert it to permanent standing privilege.",
      "Wait until the user attempts to use it.",
    ],
    answer: 1,
    explanation:
      "Project-bound privilege should end when the responsibility that justified it ends.",
  },
  {
    question:
      "What should happen when an external partner's review date approaches?",
    choices: [
      "Keep access forever if recent activity exists.",
      "Require current sponsor confirmation and renew, reduce, or expire access based on current need.",
      "Automatically grant more access.",
      "Ignore the review because federation is already configured.",
    ],
    answer: 1,
    explanation:
      "External access should remain tied to a current sponsor, business need, and lifecycle.",
  },
  {
    question:
      "What is strongest for an unowned legacy entitlement with partial evidence?",
    choices: [
      "Confirm because the account still works.",
      "Keep it Unknown/Blocked until ownership and current purpose are resolved.",
      "Grant a new admin role.",
      "Ignore it because it is old.",
    ],
    answer: 1,
    explanation:
      "Missing ownership and incomplete evidence prevent a confident certification.",
  },
  {
    question:
      "What makes a risk acceptance stronger?",
    choices: [
      "It is implicit and has no expiration.",
      "It is explicitly authorized, bounded in time and scope, tied to a known residual risk, and linked to a target state or review.",
      "It replaces all remediation.",
      "It is approved by the identity being reviewed.",
    ],
    answer: 1,
    explanation:
      "Accepted Risk is a governance decision, not a way to hide indefinite access weakness.",
  },
];

const checklistItems = [
  "Every reviewed relationship identifies the principal.",
  "Every reviewed relationship identifies the resource.",
  "The actual entitlement or privilege is visible.",
  "Current business or technical purpose is documented.",
  "Identity lifecycle is considered.",
  "Privilege level is considered.",
  "Resource sensitivity is considered.",
  "Identity owner, manager, sponsor, or service owner is identified.",
  "Resource or entitlement owner is identified.",
  "Recent activity is treated as supporting evidence, not automatic justification.",
  "Unused access is interpreted with business context.",
  "External access has current sponsor evidence.",
  "Privileged eligibility is reviewed more strongly than routine access.",
  "Workload identities are reviewed with service lifecycle.",
  "Exceptions have current owners and expiration.",
  "Accepted Risk has an authorized risk owner.",
  "Stale evidence stays visible.",
  "Unknown ownership does not become Confirmed.",
  "Review decisions produce remediation actions and closure evidence.",
  "No lesson activity requires changing or accessing real user permissions.",
];

const takeaways = [
  "Access review asks whether a current identity-to-resource relationship should still exist now.",
  "Strong reviews consider purpose, privilege, resource sensitivity, ownership, lifecycle, evidence, and exceptions.",
  "Review outcomes can Confirm, Reduce, Remove, Reassign, Expire, or move access to Review/Unknown.",
  "Activity is useful evidence but does not prove that access is justified.",
  "Unused access can be stale, but rare emergency access may still be legitimate.",
  "Privileged eligibility should be removed when the responsibility that justified it ends.",
  "External identities require current sponsorship and lifecycle review.",
  "Workload access should be reviewed when services, dependencies, or ownership change.",
  "Risk acceptance should be explicit, bounded, and linked to residual risk and a target state.",
  "The Access Review Decision Register will support A13.9 Balancing Security and Usability.",
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
        Module A13
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

export default function AccessReviewsAndGovernancePage() {
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
              A13.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Access Reviews and Governance
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Access review is where identity architecture becomes an ongoing
            governance process. The question is not whether access was valid
            when it was first granted; the question is whether it is still
            appropriate now.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional identities, entitlements, owners, review
            evidence, and governance decisions only. It does not require
            changing access in any real system.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A13: Identity, Zero Trust, and Access Control"
          lessonTitle="Access Reviews and Governance"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.8 Entry Readiness"
          items={[
            "I understand identity logging and evidence freshness from A13.7.",
            "I can distinguish routine access, external access, workload access, and privileged eligibility.",
            "I understand that ownership and lifecycle affect authorization.",
            "I will use only fictional access-review records and safe evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Good Access Can Become Bad Access When Responsibilities Change"
        >
          <p className="leading-8">
            A migration administrator may have needed production privilege three
            months ago. A partner may have needed a support console last month.
            A reporting analyst may still need dashboards but no longer need
            sensitive exports. Access review catches the gap between the access
            an identity currently holds and the access its current
            responsibility actually requires.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Access governance is lifecycle management for authorization.
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
          eyebrow="Review Dimensions"
          title="Eight Questions Behind a Strong Access Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Warning
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.warning}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Outcomes"
          title="Access Review Is More Than Approve or Reject"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {governanceOutcomes.map((item) => (
              <article
                key={item.outcome}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.outcome}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Review Triggers"
          title="Access Should Be Reviewed When the World Changes"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewTriggers.map((item) => (
              <article
                key={item.trigger}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.trigger}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Why it matters: {item.reason}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Governance Principles"
          title="Eight Principles for Evidence-Based Access Certification"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle Governance"
          title="Joiners, Movers, Leavers, Projects, Services, and Sponsors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {lifecycleCases.map((item) => (
              <article
                key={item.case}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="text-lg font-black text-cyan-50">{item.case}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.governanceQuestion}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Decision focus: {item.decisionFocus}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Access Review and Governance Terms"
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
          eyebrow="Fictional Access Review Register"
          title="Seven Northbridge Governance Decisions"
        >
          <div className="grid gap-5">
            {reviewRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.decision}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.identity} → {item.resource}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Entitlement", item.entitlement],
                    ["Purpose", item.purpose],
                    ["Privilege", item.privilege],
                    ["Lifecycle", item.lifecycle],
                    ["Owner", item.owner],
                    ["Activity", item.activity],
                    ["Evidence", item.evidence],
                    ["Exception", item.exception],
                    ["Next action", item.nextAction],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Governance concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.concern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Access Review Dashboard"
          subtitle="Fictional certification, reduction, removal, and open governance decisions"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Obsolete Privileged Eligibility Still Active"
          severity="High"
          time="08:48"
          source="Fictional Access Governance Review"
          details="REV-03 shows that a migration project is closed, yet privileged eligibility for the former project administrator remains assigned."
          recommendation="Remove the obsolete privileged eligibility and record closure evidence. A new future project should require a new approved access decision."
        />

        <Section
          eyebrow="Use vs. Need"
          title="Activity Evidence Helps, but It Does Not Decide the Review by Itself"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h3 className="text-xl font-black text-emerald-50">
                Recent use can support a legitimate need
              </h3>
              <p className="mt-3 leading-7 text-emerald-100">
                A counselor regularly using role-appropriate application
                functions is useful evidence when current job responsibility and
                resource ownership also support the access.
              </p>
            </article>

            <article className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6">
              <h3 className="text-xl font-black text-yellow-50">
                Recent use can also expose overbroad access
              </h3>
              <p className="mt-3 leading-7 text-yellow-100">
                A user may actively use a capability that is convenient but no
                longer required. Access review asks whether use is authorized by
                current purpose, not merely whether use occurs.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <p className="font-black text-cyan-50">
              Low use also needs context.
            </p>
            <p className="mt-2 leading-7 text-cyan-100">
              Emergency recovery access may be rarely used and still be
              legitimate. Long-unused ordinary or privileged access, however,
              may indicate stale need. Governance uses purpose and lifecycle to
              interpret activity correctly.
            </p>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Access Review Decision Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Reporting Access"
          question="What is the strongest decision for REV-02?"
          evidence={[
            "The Reporting Analyst role is still current.",
            "The analyst uses the standard Reporting Dashboard.",
            "The Sensitive Export entitlement has not been used for 120 days.",
            "The Analytics Product Owner confirms the export capability is no longer required.",
            "Standard dashboard access is still needed.",
          ]}
          options={[
            "Confirm all access because the user is still a Reporting Analyst.",
            "Reduce access by removing the Sensitive Export entitlement while retaining standard dashboard access.",
            "Remove all reporting access.",
            "Accepted Risk because the export has not been used recently.",
          ]}
          bestAnswer={1}
          explanation="Access review should preserve the legitimate business function while removing unnecessary scope."
        />

        <Section
          eyebrow="Governance Anti-Patterns"
          title="Eight Ways Access Reviews Become a Checkbox Exercise"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
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
          title="Scenario Decision Lab 1 — Reduce, Don't Rubber-Stamp"
          scenario="A reporting analyst still needs the dashboard role, but the resource owner confirms that a separate sensitive-export entitlement is no longer required."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Active but Unowned Legacy Access"
          scenario="A legacy reporting account still performs occasional production work. The current owner is Unknown, evidence is partial, and no valid current exception exists."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Access Review Decision Register"
        >
          <p className="leading-8">
            Use fictional identities, entitlements, resources, owners,
            lifecycle records, and synthetic activity evidence only. Do not
            modify any real access.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional access-review records.",
              "Give every record a stable REV ID.",
              "Record principal and principal type.",
              "Record resource/application.",
              "Record entitlement or privileged eligibility.",
              "State current business or technical purpose.",
              "Record privilege level.",
              "Record lifecycle state.",
              "Record identity owner, manager, sponsor, or service owner.",
              "Record resource/entitlement owner.",
              "Record recent activity evidence where appropriate.",
              "Record evidence freshness.",
              "Record exception or risk-acceptance status.",
              "Choose Confirm, Reduce, Remove, Reassign, Expire, Review, or Accepted Risk.",
              "Record the reason for the decision.",
              "Record remediation or next action.",
              "Record closure owner.",
              "Record review/change trigger.",
              "Include at least three workforce examples.",
              "Include at least three privileged examples.",
              "Include at least two external/partner examples.",
              "Include at least two workload identities.",
              "Include at least two temporary/project examples.",
              "Include at least one unowned legacy entitlement and keep it Blocked.",
              "Include at least one Accepted Risk record with owner, expiration, and target state.",
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
              This is a fictional governance exercise. Do not inspect private
              access lists, remove real users, change group membership, alter
              roles, or modify any live identity or authorization system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Legacy Reporting Access"
          question="What is the strongest governance state for REV-06?"
          evidence={[
            "The legacy account still performs intermittent production activity.",
            "The current owner is Unknown.",
            "The current business need is uncertain.",
            "Evidence is Partial.",
            "No valid current exception exists.",
          ]}
          options={[
            "Confirm because the account is still active.",
            "Keep the relationship Blocked/Unknown until ownership and current need are resolved, then remove or formally govern it.",
            "Make the access permanent.",
            "Ignore it because it is a service account.",
          ]}
          bestAnswer={1}
          explanation="Activity alone does not establish accountable, current authorization. Missing ownership and purpose prevent certification."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Run a Fictional Enterprise Access Review Board"
        >
          <p className="leading-8">
            A fictional organization has workforce roles, partner guests,
            privileged eligibility, workloads, temporary project access,
            emergency identities, and several legacy exceptions. Design a
            review board that can make consistent decisions without
            rubber-stamping everything.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Identity lifecycle evidence",
              "Business purpose evidence",
              "Resource sensitivity",
              "Privilege level",
              "Manager/sponsor input",
              "Resource-owner input",
              "Workload/service ownership",
              "Activity evidence",
              "Source health",
              "Exception state",
              "Risk owner",
              "Confirm/Reduce/Remove logic",
              "Reassignment logic",
              "Expiration logic",
              "Remediation ownership",
              "Closure evidence",
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
            A mature review board should preserve legitimate access, reduce
            unnecessary scope, remove stale relationships, escalate uncertainty,
            and document who owns each follow-up action.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.8 Mini Quiz: Access Reviews and Governance"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Access Review Decision Register"
          prompt="Create the eighth artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Access Review Decision Register with at least fifteen records. Include REV ID, principal, principal type, resource, entitlement, purpose, privilege, lifecycle, identity owner/manager/sponsor/service owner, resource owner, activity evidence, evidence freshness, exception/risk state, decision, rationale, remediation, closure owner, status, and next review/change trigger."
          tips={[
            "Use Confirm, Reduce, Remove, Reassign, Expire, Review, and Accepted Risk outcomes.",
            "Include workforce, privileged, external, workload, and temporary access.",
            "Treat activity as supporting evidence rather than automatic justification.",
            "Keep Unknown ownership and stale evidence visible.",
            "Include at least one explicit Accepted Risk with expiration and target state.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.9?"
        >
          <p className="leading-8">
            A13.9 moves into Balancing Security and Usability. Before
            continuing, make sure you can explain how an access review can
            preserve necessary work while reducing unnecessary friction and
            privilege.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain access review as a lifecycle governance decision.",
              "I can distinguish Confirm, Reduce, Remove, Expire, and Review outcomes.",
              "I can explain why activity does not automatically justify access.",
              "I can explain how privileged, external, and workload access need different evidence.",
              "I can explain how exceptions and residual risk should remain visible.",
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
          title="How to Make the Access Review Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show the real entitlement",
                detail:
                  "Do not stop at job title. Record the actual resource, role, privilege, or workload permission under review.",
              },
              {
                title: "Show purpose and lifecycle",
                detail:
                  "Make the current reason for access and the event that should change or end it visible.",
              },
              {
                title: "Show multiple owners",
                detail:
                  "Manager, sponsor, service owner, privileged-role owner, and resource owner may have different responsibilities.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Current, Partial, Stale, Missing, and Unknown evidence should affect review confidence.",
              },
              {
                title: "Show the decision clearly",
                detail:
                  "Use Confirm, Reduce, Remove, Reassign, Expire, Review, or Accepted Risk rather than vague notes.",
              },
              {
                title: "Show remediation",
                detail:
                  "Every reduction, removal, reassignment, or exception should have an owner and closure state.",
              },
              {
                title: "Keep legacy uncertainty visible",
                detail:
                  "Do not certify an account simply because removing it might be inconvenient.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.9 will evaluate how strong controls can remain usable, understandable, and proportionate.",
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
            Access-review learning does not require changing real accounts
          </h2>
          <p className="mt-3 leading-7">
            Do not remove real users, alter permissions, change roles, inspect
            private identity exports, or modify live access-control systems.
            All identities, entitlements, review evidence, and governance
            decisions in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.8 Access Reviews and Governance Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have an access-governance model built around current
            purpose, lifecycle, privilege, ownership, activity evidence,
            sponsorship, exceptions, residual risk, remediation, and closure.
            Next, A13.9 focuses on Balancing Security and Usability.
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