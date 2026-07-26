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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-phishing-triage-lab`;
const nextLesson = `${modulePath}/fake-web-defense-review-lab`;

const objectives = [
  "Define a fictional IAM permission-review scope covering identities, roles, groups, privileged access, service accounts, suppliers, systems, business owners, approvals, exceptions, time windows, and decision authority.",
  "Evaluate fictional access using business need, least privilege, role design, separation of duties, approval history, activity evidence, source health, ownership, expiration, and residual risk.",
  "Distinguish fictional identity status, entitlement status, approval status, activity status, exception status, ownership status, and confirmed misuse.",
  "Choose proportionate fictional access decisions such as retain, reduce, remove, suspend, renew, convert, monitor, investigate, or escalate.",
  "Create a portfolio-safe fictional IAM review package with an identity inventory, entitlement matrix, decision register, exception review, owner communication, validation, metrics, and improvement recommendations."
];
const vocabulary = [
  [
    "Identity",
    "A fictional user, administrator, service account, application identity, supplier identity, shared process identity, or emergency account represented in an access system."
  ],
  [
    "Entitlement",
    "A fictional permission, role, group membership, service assignment, data capability, administrative function, or access path granted to an identity."
  ],
  [
    "Role",
    "A fictional bundle of permissions intended for a defined job function or operational responsibility."
  ],
  [
    "Group membership",
    "A fictional relationship that grants access through a named group rather than through a direct assignment."
  ],
  [
    "Privileged access",
    "Fictional capability that can change security settings, identities, systems, services, data protections, or other high-impact controls."
  ],
  [
    "Service account",
    "A fictional nonhuman identity used by an application, automation, scheduled task, integration, or background process."
  ],
  [
    "Business need",
    "A fictional documented reason explaining why an identity requires a specific entitlement to perform an approved function."
  ],
  [
    "Least privilege",
    "A fictional principle of granting only the minimum access needed for the approved task and time period."
  ],
  [
    "Separation of duties",
    "A fictional control that prevents one identity from controlling incompatible steps such as request, approval, payment, deployment, and review."
  ],
  [
    "Access owner",
    "The fictional role accountable for deciding who should receive, retain, modify, or lose access to a resource or service."
  ],
  [
    "Identity owner",
    "The fictional role accountable for the identity's lifecycle, employment or supplier status, and continued legitimacy."
  ],
  [
    "Exception",
    "A fictional approved deviation from the normal access model with a reason, owner, scope, controls, start time, end time, and review requirement."
  ],
  [
    "Certification",
    "A fictional periodic review in which authorized owners confirm, modify, or remove identities and entitlements."
  ],
  [
    "Orphaned account",
    "A fictional identity with no valid owner, employment relationship, supplier relationship, application dependency, or documented business need."
  ],
  [
    "Stale access",
    "A fictional entitlement that is no longer supported by current need, ownership, approval, project status, role, or recent use."
  ],
  [
    "Effective access",
    "The fictional permissions an identity actually receives after direct assignments, groups, roles, inherited access, conditions, and exceptions are combined."
  ]
];
const identityRecords = [
  {
    "id": "NBR-IAM-01",
    "identity": "Fictional supplier support account",
    "type": "Supplier identity",
    "status": "Active",
    "entitlement": "Confidential support-service administrator",
    "business_need": "Original support project ended yesterday.",
    "approval": "Exception expired at 17:00; no renewal is recorded.",
    "activity": "One sign-in and one status-page view after expiration.",
    "owner": "Third-Party Risk Owner and Service Owner",
    "risk": "Unsupported active administrative capability.",
    "decision": "Remove now or replace with a new narrow, time-limited approval if current need is independently confirmed.",
    "limit": "Misuse, configuration change, and data disclosure are not confirmed."
  },
  {
    "id": "NBR-IAM-02",
    "identity": "Fictional finance analyst",
    "type": "Employee identity",
    "status": "Active",
    "entitlement": "Invoice entry and payment approval",
    "business_need": "Invoice entry is required; payment approval belongs to a separate role.",
    "approval": "Two roles were granted during temporary coverage and never separated.",
    "activity": "Both functions were used during the coverage period.",
    "owner": "Finance Process Owner",
    "risk": "Separation-of-duties conflict.",
    "decision": "Retain invoice entry and remove payment approval after owner confirmation.",
    "limit": "No improper payment or fraud is confirmed."
  },
  {
    "id": "NBR-IAM-03",
    "identity": "Fictional former contractor",
    "type": "External workforce identity",
    "status": "Active",
    "entitlement": "Project document repository contributor",
    "business_need": "Contract ended twelve days ago.",
    "approval": "No current sponsor or extension exists.",
    "activity": "No activity since contract end.",
    "owner": "Project Owner",
    "risk": "Orphaned identity with unnecessary access.",
    "decision": "Disable the identity and preserve required records.",
    "limit": "No post-contract activity is observed in the supplied source."
  },
  {
    "id": "NBR-IAM-04",
    "identity": "Fictional backup automation",
    "type": "Service account",
    "status": "Active",
    "entitlement": "Read and write access across backup repositories",
    "business_need": "Required for scheduled backup and restore testing.",
    "approval": "Current service owner and application dependency are documented.",
    "activity": "Matches scheduled jobs only.",
    "owner": "Backup Service Owner",
    "risk": "Broad access is justified but high impact.",
    "decision": "Retain, verify credential rotation, restrict interactive use, and review repository scope.",
    "limit": "The supplied records do not prove every repository remains necessary."
  },
  {
    "id": "NBR-IAM-05",
    "identity": "Fictional help-desk technician",
    "type": "Employee identity",
    "status": "Active",
    "entitlement": "User password reset and privileged group management",
    "business_need": "Password reset is required; privileged group management belongs to identity administration.",
    "approval": "Group-management role was inherited through an old nested group.",
    "activity": "No privileged group change is recorded.",
    "owner": "Identity Operations Owner",
    "risk": "Excessive inherited privilege.",
    "decision": "Remove nested privileged access and validate effective permissions.",
    "limit": "No misuse is confirmed."
  },
  {
    "id": "NBR-IAM-06",
    "identity": "Fictional cloud deployment engineer",
    "type": "Employee identity",
    "status": "Active",
    "entitlement": "Production deployment administrator",
    "business_need": "Production deployment is part of the role.",
    "approval": "Current role approval exists.",
    "activity": "Recent approved deployments match change records.",
    "owner": "Application Delivery Owner",
    "risk": "High-impact access requires strong review and logging.",
    "decision": "Retain with current controls and continue quarterly certification.",
    "limit": "Approval does not prove every future deployment is authorized."
  },
  {
    "id": "NBR-IAM-07",
    "identity": "Fictional emergency administrator",
    "type": "Emergency account",
    "status": "Active",
    "entitlement": "Broad platform administration",
    "business_need": "Reserved for service recovery when normal administration is unavailable.",
    "approval": "Emergency-use procedure is current, but the last quarterly test is overdue.",
    "activity": "No production use in the last quarter.",
    "owner": "Platform Owner and Security Owner",
    "risk": "Critical recovery capability may be unvalidated.",
    "decision": "Retain, perform an approved access test, verify monitoring, and rotate recovery material.",
    "limit": "The account's nonuse does not prove readiness."
  },
  {
    "id": "NBR-IAM-08",
    "identity": "Fictional analytics intern",
    "type": "Temporary employee identity",
    "status": "Active",
    "entitlement": "Customer analytics dataset reader",
    "business_need": "Internship task requires access to a sanitized training dataset only.",
    "approval": "Current role grants both training and production dataset access.",
    "activity": "Only training dataset access is observed.",
    "owner": "Analytics Data Owner",
    "risk": "Production access exceeds documented need.",
    "decision": "Reduce access to the training dataset and validate effective permissions.",
    "limit": "No production data access is confirmed."
  },
  {
    "id": "NBR-IAM-09",
    "identity": "Fictional shared operations account",
    "type": "Shared identity",
    "status": "Active",
    "entitlement": "Operations dashboard editor",
    "business_need": "The team needs dashboard maintenance capability.",
    "approval": "The shared model is legacy and lacks individual accountability.",
    "activity": "Recent edits cannot be attributed to one person.",
    "owner": "Operations Service Owner",
    "risk": "Weak accountability and difficult investigation.",
    "decision": "Migrate to individual approved roles and retire the shared identity after validation.",
    "limit": "No harmful edit is confirmed."
  },
  {
    "id": "NBR-IAM-10",
    "identity": "Fictional integration connector",
    "type": "Application identity",
    "status": "Active",
    "entitlement": "Directory read and user-profile update",
    "business_need": "The current integration requires read-only directory data.",
    "approval": "Profile-update permission remains from an older version.",
    "activity": "No profile updates are observed in the review window.",
    "owner": "Integration Owner",
    "risk": "Unused write permission creates unnecessary capability.",
    "decision": "Remove write permission, test the integration, and monitor for failure.",
    "limit": "Longer-term activity may not be fully represented."
  }
];
const reviewQuestions = [
  {
    "question": "Is the identity still legitimate?",
    "strong": "Confirm fictional employment, supplier, contractor, application, service, emergency, sponsor, and owner status.",
    "weak": "Assume an active account is valid.",
    "review": "Who is accountable for this identity today?"
  },
  {
    "question": "Does the entitlement match current business need?",
    "strong": "Compare the fictional role, task, service, project, data scope, supplier agreement, and time period.",
    "weak": "Retain access because it was approved once.",
    "review": "Which approved work requires this exact capability now?"
  },
  {
    "question": "What is the effective access?",
    "strong": "Review fictional direct grants, groups, nested groups, roles, inherited permissions, conditions, and exceptions.",
    "weak": "Review only the visible primary role.",
    "review": "Which hidden path may still grant access after removal?"
  },
  {
    "question": "Is least privilege satisfied?",
    "strong": "Compare fictional read, write, approve, administer, export, deploy, reset, and emergency capabilities with minimum need.",
    "weak": "Treat any business need as justification for broad access.",
    "review": "What can be reduced without preventing the approved task?"
  },
  {
    "question": "Are duties separated?",
    "strong": "Identify fictional request, approval, payment, deployment, review, administration, and audit conflicts.",
    "weak": "Assume trusted users can hold incompatible roles.",
    "review": "Could one identity complete a sensitive process without independent control?"
  },
  {
    "question": "Are approvals and exceptions current?",
    "strong": "Check fictional approver authority, scope, start, expiration, controls, owner, renewal, and review evidence.",
    "weak": "Treat an expired exception as current until someone complains.",
    "review": "What exact record authorizes the access today?"
  },
  {
    "question": "What does activity evidence show?",
    "strong": "Use fictional activity to understand use, nonuse, scheduling, scope, and anomalies without treating nonuse as the only decision factor.",
    "weak": "Remove every unused permission or retain every recently used permission automatically.",
    "review": "Does the activity match the approved business purpose?"
  },
  {
    "question": "How will the decision be validated?",
    "strong": "Confirm fictional effective access, service function, owner signoff, exception closure, monitoring, residual risk, and reassessment date.",
    "weak": "Close the review when the ticket says completed.",
    "review": "What evidence proves the intended access state now exists?"
  }
];
const decisionTypes = [
  {
    "decision": "Retain",
    "when": "The fictional identity, business need, approval, scope, controls, activity, ownership, and review are current.",
    "example": "Retain the production deployment role with current quarterly certification.",
    "validation": "Confirm effective access, change controls, logging, owner signoff, and next review."
  },
  {
    "decision": "Reduce",
    "when": "The fictional identity is valid but some permissions exceed current business need.",
    "example": "Reduce the analytics intern to the sanitized training dataset.",
    "validation": "Confirm production access is removed and approved work still functions."
  },
  {
    "decision": "Remove",
    "when": "The fictional entitlement is unsupported, stale, conflicting, inherited unnecessarily, or outside approved scope.",
    "example": "Remove help-desk privileged group management.",
    "validation": "Confirm all direct and inherited access paths are gone."
  },
  {
    "decision": "Disable",
    "when": "The fictional identity itself is no longer legitimate or lacks a valid owner or relationship.",
    "example": "Disable the former contractor identity.",
    "validation": "Confirm sign-in is blocked, sessions are closed, and retention requirements are met."
  },
  {
    "decision": "Suspend",
    "when": "The fictional identity requires immediate temporary restriction while facts or authority are confirmed.",
    "example": "Suspend a supplier identity during urgent sponsor validation.",
    "validation": "Confirm restriction, service impact, owner decision, and next review time."
  },
  {
    "decision": "Renew narrowly",
    "when": "A fictional expired entitlement remains necessary but requires a new approved scope, owner, duration, and controls.",
    "example": "Issue a new time-limited supplier support approval if current need is confirmed.",
    "validation": "Confirm scope, expiration, monitoring, owner signoff, and automatic review."
  },
  {
    "decision": "Convert",
    "when": "The fictional access model is valid but should move to a safer identity or role design.",
    "example": "Convert a shared operations account to individual approved roles.",
    "validation": "Confirm accountability, service continuity, and shared-account retirement."
  },
  {
    "decision": "Investigate",
    "when": "The fictional access or activity cannot be safely decided because evidence, ownership, business context, or effective access remains unclear.",
    "example": "Investigate an unknown nested group before certification.",
    "validation": "Record the evidence gap, owner, deadline, interim control, and final decision."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the review scope",
    "detail": "Identify fictional identities, systems, services, roles, groups, data, suppliers, time period, owners, privacy, authority, and required decisions.",
    "output": "IAM review charter."
  },
  {
    "step": "2",
    "title": "Build the identity inventory",
    "detail": "List fictional identity type, lifecycle status, sponsor, owner, role, service, project, supplier, and authentication state.",
    "output": "Identity inventory."
  },
  {
    "step": "3",
    "title": "Map effective access",
    "detail": "Combine fictional direct grants, groups, nested groups, roles, inherited access, conditions, emergency paths, and exceptions.",
    "output": "Effective-access matrix."
  },
  {
    "step": "4",
    "title": "Validate business need and approvals",
    "detail": "Compare fictional tasks, responsibilities, projects, contracts, data scope, approvals, expirations, exceptions, owners, and separation-of-duties rules.",
    "output": "Need and approval assessment."
  },
  {
    "step": "5",
    "title": "Review activity and risk",
    "detail": "Use fictional sign-ins, role use, changes, service activity, schedule, source health, criticality, and potential impact without overclaiming misuse.",
    "output": "Activity and risk findings."
  },
  {
    "step": "6",
    "title": "Choose and authorize decisions",
    "detail": "Select fictional retain, reduce, remove, disable, suspend, renew, convert, monitor, investigate, or escalate with owners and deadlines.",
    "output": "Access decision register."
  },
  {
    "step": "7",
    "title": "Implement and validate",
    "detail": "Confirm fictional effective access, session state, service function, owner signoff, exception closure, monitoring, rollback, and residual risk.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Report and improve",
    "detail": "Complete fictional certification, communication, metrics, stale-access cleanup, role redesign, automation, training, governance, and next review.",
    "output": "Closure and improvement package."
  }
];
const findings = [
  {
    "id": "NBR-IAM-F01",
    "statement": "The fictional supplier support account has unsupported active administrative capability after approval expiration.",
    "support": "Active identity, expired exception, ended project, confidential service scope, one post-expiration sign-in, and no recorded renewal.",
    "alternative": "A legitimate emergency support need may exist but is not documented.",
    "confidence": "High",
    "impact": "Unsupported capability is confirmed; misuse and disclosure are unconfirmed.",
    "next": "Remove access now or issue a new narrow time-limited approval after independent owner validation."
  },
  {
    "id": "NBR-IAM-F02",
    "statement": "The fictional finance analyst has a separation-of-duties conflict.",
    "support": "Invoice-entry and payment-approval entitlements are both active, while the process owner identifies them as incompatible.",
    "alternative": "A temporary emergency control may justify dual access if documented and independently reviewed.",
    "confidence": "High",
    "impact": "Control conflict is confirmed; improper payment is unconfirmed.",
    "next": "Retain invoice entry, remove payment approval, and validate the process."
  },
  {
    "id": "NBR-IAM-F03",
    "statement": "The fictional former contractor identity is orphaned and should be disabled.",
    "support": "Contract ended, no current sponsor exists, no extension is approved, and no activity is recorded after the end date.",
    "alternative": "A records-retention or transition task may require a noninteractive archive, not an active identity.",
    "confidence": "High",
    "impact": "Unnecessary active identity is confirmed; post-contract misuse is not.",
    "next": "Disable sign-in, preserve required records, close sessions, and document owner confirmation."
  },
  {
    "id": "NBR-IAM-F04",
    "statement": "The fictional backup service account should be retained with stronger assurance rather than removed.",
    "support": "Current owner, documented dependency, scheduled activity, business-critical backup function, and expected use pattern.",
    "alternative": "Some repository permissions may no longer be necessary.",
    "confidence": "High",
    "impact": "High-impact capability is justified; excessive repository scope remains possible.",
    "next": "Verify rotation, block interactive use, test restore, and review repository scope."
  },
  {
    "id": "NBR-IAM-F05",
    "statement": "The fictional help-desk technician has excessive inherited privilege through a nested group.",
    "support": "Password-reset need is current, privileged group management is outside the role, and the extra access comes from an old nested group.",
    "alternative": "A temporary identity-administration duty may exist but is not documented.",
    "confidence": "High",
    "impact": "Excessive access is confirmed; privileged misuse is unconfirmed.",
    "next": "Remove the nested path and validate effective access."
  },
  {
    "id": "NBR-IAM-F06",
    "statement": "The fictional shared operations account should be converted to individual roles.",
    "support": "Current team need exists, but shared use prevents individual attribution and weakens investigation and accountability.",
    "alternative": "A short transition period may be required for service continuity.",
    "confidence": "High",
    "impact": "Weak accountability is confirmed; harmful changes are unconfirmed.",
    "next": "Create individual roles, migrate work, validate service function, and retire the shared identity."
  }
];
const commonMistakes = [
  "Treating fictional account activity as proof that access is approved.",
  "Treating no recent activity as the only reason to remove access.",
  "Reviewing only visible primary roles while ignoring groups, nested groups, inherited access, and exceptions.",
  "Assuming a valid identity means every entitlement is valid.",
  "Assuming an approved entitlement can never become stale.",
  "Treating expired supplier or contractor access as proof of malicious intent.",
  "Retaining incompatible roles because the user is trusted.",
  "Removing a service account without understanding application dependency, rollback, and business impact.",
  "Closing an access ticket without validating effective access.",
  "Using task completion as proof that sessions, inherited paths, or shared credentials are resolved.",
  "Renewing exceptions without a new owner, scope, controls, expiration, and review date.",
  "Ignoring shared accounts because the team still needs the function.",
  "Reporting possible misuse as confirmed misuse.",
  "Using or exposing real credentials, employee records, school records, company identities, supplier access, private systems, role assignments, or confidential IAM data."
];
const quizQuestions = [
  {
    "question": "What does an expired fictional supplier exception prove?",
    "choices": [
      "The documented approval ended, but misuse and malicious intent remain unconfirmed.",
      "A confirmed breach occurred.",
      "The account was stolen.",
      "Every supplier action was unauthorized."
    ],
    "answer": 0,
    "explanation": "Expired approval confirms unsupported capability, not intent or impact."
  },
  {
    "question": "What is effective access?",
    "choices": [
      "The combined permissions created by direct grants, groups, nested groups, roles, inherited access, conditions, and exceptions.",
      "Only the visible role name.",
      "Only the permissions used recently.",
      "Only the access listed in the job description."
    ],
    "answer": 0,
    "explanation": "IAM review must account for every path that grants capability."
  },
  {
    "question": "Why is the fictional finance analyst's access a problem?",
    "choices": [
      "Invoice entry and payment approval create a separation-of-duties conflict.",
      "Finance users should have no access.",
      "The analyst used both functions.",
      "All temporary access is malicious."
    ],
    "answer": 0,
    "explanation": "The conflict exists because one identity can control incompatible process steps."
  },
  {
    "question": "How should the fictional backup service account be handled?",
    "choices": [
      "Retain it with owner confirmation, scope review, credential rotation, interactive-use restriction, logging, and restore testing.",
      "Disable it because it has broad access.",
      "Convert it to a shared human account.",
      "Ignore it because activity is scheduled."
    ],
    "answer": 0,
    "explanation": "The account has a valid dependency but still requires strong assurance."
  },
  {
    "question": "What is the safest response to inherited privileged access?",
    "choices": [
      "Remove the unnecessary access path and validate effective permissions afterward.",
      "Remove only the visible role label.",
      "Assume no risk because the permission was unused.",
      "Grant the same access to the entire team."
    ],
    "answer": 0,
    "explanation": "Inherited access can remain after a visible role is changed."
  },
  {
    "question": "When should a fictional access review be considered complete?",
    "choices": [
      "After the intended effective-access state, service function, owner signoff, exception status, monitoring, residual risk, and next review are validated.",
      "When the ticket is marked complete.",
      "When the user stops signing in.",
      "When the manager replies."
    ],
    "answer": 0,
    "explanation": "Completion requires validation of the real access outcome."
  },
  {
    "question": "Why should a fictional shared account be replaced with individual roles?",
    "choices": [
      "Individual identities improve accountability, investigation, ownership, review, and least-privilege control.",
      "Shared accounts are always malicious.",
      "Individual roles never need monitoring.",
      "A shared account cannot perform useful work."
    ],
    "answer": 0,
    "explanation": "The main issue is weak attribution and control, not automatic maliciousness."
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
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function FakeIAMPermissionReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I16
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.3 Fake IAM Permission Review Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review fictional users, suppliers, service accounts, emergency
            accounts, roles, groups, inherited permissions, approvals,
            exceptions, business need, activity, and effective access using
            least privilege and evidence-limited decisions.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I16: Intermediate Defensive Labs"
          lessonTitle="Fake IAM Permission Review Lab"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge identities, roles, groups, permissions, services, suppliers, approvals, exceptions, activities, owners, and decisions.",
            "I will not request, expose, test, or use real credentials, employee records, school records, company identities, supplier access, private systems, role assignments, or confidential IAM data.",
            "I will distinguish identity status, entitlement status, approval status, activity status, exception status, ownership status, and confirmed misuse.",
            "I will review direct and inherited access paths instead of relying only on visible role names.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Recent Use Does Not Automatically Make Access Appropriate"
        >
          <p className="leading-8">
            A fictional finance analyst used both invoice-entry and
            payment-approval permissions during temporary coverage. The
            activity is real, but the roles remain incompatible. Professional
            IAM review asks whether the identity is legitimate, whether the
            current business need supports each entitlement, whether approvals
            are current, and whether the resulting access creates control
            conflicts.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak access review
              </p>

              <p className="mt-2 leading-7">
                Retain access because it was used, review only visible roles,
                ignore nested groups, renew expired exceptions, and close
                tickets without validating effective access.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional access review
              </p>

              <p className="mt-2 leading-7">
                Confirm identity legitimacy, map effective access, validate
                business need and approvals, identify conflicts, choose a
                proportionate decision, and verify the final access state.
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
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="IAM Reviews Protect Systems before Misuse or Failure Occurs"
        >
          <p className="leading-8">
            Fictional stale access, expired supplier permissions, orphaned
            identities, excessive roles, shared accounts, service accounts, and
            emergency accounts can create serious risk even when no misuse is
            observed. Good IAM review prevents unnecessary capability while
            preserving valid business and recovery needs.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Identity–Need–Access–Control–Validation Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Identity", "Which fictional user, supplier, contractor, service, application, shared, or emergency identity exists, and who owns it?"],
              ["Need", "Which fictional role, task, service, project, supplier agreement, data scope, and time period require access now?"],
              ["Access", "Which fictional direct grants, groups, nested groups, roles, inherited permissions, conditions, and exceptions create effective access?"],
              ["Control", "Which fictional least-privilege, separation-of-duties, approval, expiration, monitoring, session, credential, and review controls apply?"],
              ["Validation", "Which fictional evidence proves the intended access state, service function, owner decision, residual risk, and next review?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            IAM Permission-Review Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Identity Inventory
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Fictional Northbridge Identities
          </h2>

          <div className="mt-6 grid gap-5">
            {identityRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.identity}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.type}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Entitlement", item.entitlement],
                    ["Business need", item.business_need],
                    ["Approval status", item.approval],
                    ["Activity evidence", item.activity],
                    ["Owner", item.owner],
                    ["Risk", item.risk],
                    ["Decision", item.decision],
                    ["Evidence limit", item.limit],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Review Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Certifying Access
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong review
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak review
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decision Types
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Access Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionTypes.map((item) => (
              <article
                key={item.decision}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.decision}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Use when", item.when],
                    ["Fictional example", item.example],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.decision}-${label}`}
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
            IAM Review Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Scope to Improvement
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge IAM Review Dashboard"
          subtitle="Training dashboard for fictional identity and permission evidence only."
          metrics={[
            {
              label: "Identities reviewed",
              value: "10",
              note: "Employees, suppliers, contractors, service accounts, emergency accounts, shared identities, and application identities are represented.",
            },
            {
              label: "Access changes required",
              value: "7",
              note: "The fictional set includes removal, reduction, disablement, conversion, renewal review, and assurance actions.",
            },
            {
              label: "Confirmed misuse",
              value: "0",
              note: "The fictional evidence supports control gaps and unnecessary access but no confirmed misuse.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Access and Inherited Privilege Require Immediate Review"
          severity="High"
          time="8:46 PM"
          source="Fake Northbridge IAM Governance Console"
          details="A fictional supplier administrator remains active after exception expiration, and a help-desk technician receives privileged group-management access through an old nested group. No confirmed misuse appears in the supplied records."
          recommendation="Remove or narrowly renew the supplier access, remove the inherited privileged path, validate effective access, assign identity and service owners, preserve evidence limits, and document residual risk and next review."
        />

        <FakeLogPanel
          title="Fake Northbridge IAM Review Timeline"
          logs={[
            "08:00 INVENTORY identities='10'",
            "08:08 SUPPLIER exception='expired'",
            "08:16 SUPPLIER sign-in='post-expiration'",
            "08:24 FINANCE sod-conflict='confirmed'",
            "08:32 CONTRACTOR relationship='ended'",
            "08:40 SERVICE account-dependency='current'",
            "08:48 HELPDESK nested-privilege='found'",
            "08:56 CLOUD role-approval='current'",
            "09:04 EMERGENCY test='overdue'",
            "09:12 INTERN production-access='excessive'",
            "09:20 SHARED attribution='weak'",
            "09:28 CONNECTOR write-permission='unused'",
            "09:36 DECISION remove='3'",
            "09:44 DECISION reduce='2'",
            "09:52 DECISION retain-with-controls='3'",
            "10:00 VALIDATION effective-access='pending'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional IAM Findings with Confidence and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact statement", item.impact],
                    ["Next action", item.next],
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
          title="Does Recent Use Prove the Finance Analyst Should Keep Both Roles?"
          evidence={[
            "The fictional analyst needs invoice-entry access.",
            "Payment approval belongs to a separate role.",
            "Both roles were granted during temporary coverage.",
            "Both functions were used during the coverage period.",
            "No current exception supports the conflict.",
            "No improper payment is confirmed.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Recent use does not remove the separation-of-duties conflict; retain invoice entry, remove payment approval, and validate the process.",
            "Both roles should remain because they were used.",
            "The analyst committed fraud.",
            "All finance access should be disabled.",
          ]}
          bestAnswer={0}
          explanation="Activity shows use, while business need and control design determine whether the access should remain."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional IAM Reviews"
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
          title="Build the Northbridge Fake IAM Permission Review Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Identity Inventory, Effective Access, Decisions, and Validation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge identity and
                permission records to produce a complete, evidence-limited IAM
                review package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>IAM review charter with scope, identities, systems, services, suppliers, owners, privacy, authority, and deadlines.</li>
                <li>Identity inventory with type, status, sponsor, owner, business relationship, authentication state, and lifecycle evidence.</li>
                <li>Effective-access matrix covering direct grants, groups, nested groups, roles, inherited permissions, conditions, emergency access, and exceptions.</li>
                <li>Business-need, approval, expiration, activity, least-privilege, and separation-of-duties assessment.</li>
                <li>Access decision register with retain, reduce, remove, disable, suspend, renew, convert, investigate, or escalate decisions.</li>
                <li>Owner communication, exception closure, session, service, rollback, and validation plan.</li>
                <li>Metrics, residual risk, next review, role-design, automation, training, and governance improvements.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company identities, supplier access, private systems,
            role assignments, or confidential IAM information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Supplier Owner Says the Account Might Still Be Needed"
          scenario="The fictional project ended and the exception expired, but the supplier owner cannot immediately confirm whether emergency support remains necessary."
          choices={[
            {
              label: "Choice A",
              response:
                "Suspend or remove the unsupported access, validate the current need independently, and issue a new narrow time-limited approval only if authorized.",
              outcome:
                "Best IAM choice. Unsupported capability is reduced while legitimate need can still be restored safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave access unchanged until someone proves it is unnecessary.",
              outcome:
                "Unsafe. Current approval is expired.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare malicious supplier activity.",
              outcome:
                "Unsupported. No misuse or intent is confirmed.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Backup Service Account Has Broad Repository Access"
          scenario="The fictional account has a current owner, documented dependency, scheduled activity, and no interactive use, but its repository scope is broad."
          choices={[
            {
              label: "Choice A",
              response:
                "Retain the account, verify credential rotation and interactive-use restrictions, review repository scope, test backup and restore, and monitor.",
              outcome:
                "Best service-account choice. Valid dependency is preserved while assurance improves.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Disable the account immediately because the access is broad.",
              outcome:
                "Unsafe. The backup service may fail.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the account because its activity is scheduled.",
              outcome:
                "Weak. High-impact service accounts still require strong review.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Fake IAM Permission Review Checklist"
          items={[
            "I can define a fictional IAM review scope covering identities, systems, services, suppliers, roles, groups, data, owners, privacy, authority, and deadlines.",
            "I can distinguish fictional identity status, entitlement status, approval status, exception status, activity status, ownership status, and misuse evidence.",
            "I can map fictional direct grants, groups, nested groups, roles, inherited permissions, conditions, emergency access, and exceptions.",
            "I can evaluate fictional business need, least privilege, separation of duties, approval, expiration, ownership, and recent activity.",
            "I can review fictional employee, supplier, contractor, service, application, shared, and emergency identities proportionately.",
            "I can choose fictional retain, reduce, remove, disable, suspend, renew, convert, investigate, or escalate decisions.",
            "I can assign fictional identity, access, service, supplier, application, data, risk, and business owners correctly.",
            "I can validate fictional effective access, session state, service function, exception closure, owner signoff, monitoring, residual risk, and next review.",
            "I can improve fictional role design, shared-account use, stale-access cleanup, certification, automation, training, and governance.",
            "I will use only fictional evidence and never expose real credentials, employee data, school records, identities, suppliers, systems, roles, or confidential IAM information.",
          ]}
        />

        <MiniQuiz
          title="I16.3 Mini Quiz: Fake IAM Permission Review Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Fake IAM Permission Review Package for Northbridge. Include the review charter, identity inventory, effective-access matrix, business-need analysis, approval and exception review, separation-of-duties assessment, activity review, findings, access decision register, owner communication, implementation plan, validation record, residual risk, metrics, improvements, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional identities, systems, services, suppliers, groups, roles, permissions, approvals, exceptions, activities, owners, decisions, and outcomes.",
            "Do not treat recent use, no recent use, active status, prior approval, expired access, or broad capability as automatic proof.",
            "Make every decision traceable to identity legitimacy, business need, effective access, approval, control design, evidence, confidence, owner, action, and validation.",
            "Show how a valid service account and an invalid stale entitlement require different decisions.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A valid identity can still have invalid or excessive access.",
            "Effective access includes direct, inherited, nested, conditional, and exception-based permissions.",
            "Recent use does not automatically justify access, and nonuse does not automatically make access unnecessary.",
            "Least privilege and separation of duties require explicit review.",
            "Service, emergency, and shared identities require different evidence and controls.",
            "Access decisions are complete only after the final effective-access state is validated.",
            "Portfolio artifacts should use fully fictional IAM evidence and never expose real identities or permissions.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I16
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}