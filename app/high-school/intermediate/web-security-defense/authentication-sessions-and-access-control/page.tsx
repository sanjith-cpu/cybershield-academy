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
const modulePath = `${trackPath}/web-security-defense`;
const previousLesson = `${modulePath}/web-applications-browsers-and-http`;
const nextLesson = `${modulePath}/input-validation-and-injection-defense`;

const objectives = [
  "Explain how fictional identification, authentication, authorization, sessions, cookies, tokens, roles, permissions, and resource ownership work together.",
  "Distinguish successful sign-in from valid session use, authorized action, object-level access, business approval, and confirmed data change.",
  "Evaluate fictional password, MFA, recovery, session, logout, timeout, device, cookie, token, and access-control evidence.",
  "Identify defensive controls for account lifecycle, least privilege, role checks, ownership checks, session protection, reauthentication, and high-risk actions.",
  "Create a professional fictional Authentication, Session, and Access Control Review with findings, owners, validation, monitoring, and residual risk."
];

const vocabulary = [
  [
    "Identification",
    "A fictional claim about which account, user, service, device, or workload is attempting to act."
  ],
  [
    "Authentication",
    "A fictional process that evaluates evidence such as passwords, factors, certificates, keys, devices, or recovery checks before accepting an identity claim."
  ],
  [
    "Authorization",
    "A fictional decision about whether an authenticated identity may perform a specific action on a specific resource under current policy."
  ],
  [
    "Session",
    "A fictional period of application activity connected to an authenticated account through server-side state, a cookie, a token, or another identifier."
  ],
  [
    "Session cookie",
    "A fictional browser-managed value used to connect later requests to a server-recognized session under defined domain, path, secure, HTTP-only, and same-site conditions."
  ],
  [
    "Token",
    "A fictional signed or opaque value representing selected identity, session, scope, audience, expiration, or authorization information."
  ],
  [
    "Role",
    "A fictional named set of responsibilities and permissions assigned to accounts or groups."
  ],
  [
    "Permission",
    "A fictional allowed action such as view, create, update, approve, delete, manage, export, or administer."
  ],
  [
    "Least privilege",
    "The defensive principle of granting only the access required for the approved task, scope, and duration."
  ],
  [
    "Object ownership",
    "The fictional relationship between an account and a specific record, file, profile, project, ticket, or other resource."
  ],
  [
    "Reauthentication",
    "A fictional requirement to prove identity again before a sensitive action or after elevated risk."
  ],
  [
    "Session revocation",
    "A fictional defensive action that invalidates selected session or token state before its normal expiration."
  ]
];

const authenticationStages = [
  {
    "stage": "1. Identity claim",
    "description": "A fictional user enters an account name, chooses a saved identity, follows an approved sign-in link, or presents a service identity.",
    "evidence": "Account identifier, tenant, application, route, device, client, timestamp, and sign-in request ID.",
    "defensiveQuestion": "Is the claimed account expected to use this application, route, tenant, and client?",
    "limitation": "An identity claim alone proves nothing about who controls the account."
  },
  {
    "stage": "2. Primary authentication",
    "description": "The fictional identity service evaluates a password, key, certificate, device credential, or another approved primary factor.",
    "evidence": "Method label, result, timestamp, account, device, sign-in ID, failure reason, and policy decision.",
    "defensiveQuestion": "Was the approved method used, and did the result come from the expected identity service?",
    "limitation": "A successful primary factor may still involve stolen credentials or an unsafe recovery path."
  },
  {
    "stage": "3. Additional factor",
    "description": "The fictional system requires another factor such as an authenticator approval, hardware key, code, or device-bound proof.",
    "evidence": "Factor type, challenge ID, result, device, number matching, location label, and risk context.",
    "defensiveQuestion": "Was the factor expected, owned, securely enrolled, and approved by the correct user?",
    "limitation": "An approval can be mistaken, pressured, or captured through weak workflows."
  },
  {
    "stage": "4. Risk and policy evaluation",
    "description": "The fictional identity service considers device state, network context, account risk, application sensitivity, and access policy.",
    "evidence": "Risk label, device compliance, application, location label, policy name, grant controls, and denial reason.",
    "defensiveQuestion": "Which policy applied, and did it match the application and risk?",
    "limitation": "Risk scores and location labels are interpretations, not proof of a physical person or malicious intent."
  },
  {
    "stage": "5. Session creation",
    "description": "The fictional application or identity provider creates server-side session state, a cookie, a token, or a related session identifier.",
    "evidence": "Session ID, token ID, cookie attributes, issue time, expiration, audience, scope, device, and account.",
    "defensiveQuestion": "Is the session narrowly scoped, protected, time limited, and connected to the correct application?",
    "limitation": "A session can remain valid even when later account risk or authorization context changes."
  },
  {
    "stage": "6. Authorization check",
    "description": "The fictional application checks role, permission, ownership, tenant, resource, workflow state, and business rules for each protected action.",
    "evidence": "Account, role, permission, resource ID, owner, route, decision, policy, and reason.",
    "defensiveQuestion": "Is this identity allowed to perform this exact action on this exact object now?",
    "limitation": "Authentication success does not replace per-action and per-object authorization."
  },
  {
    "stage": "7. Sensitive-action protection",
    "description": "The fictional application may require reauthentication, confirmation, dual approval, transaction limits, or another high-risk control.",
    "evidence": "Action, amount or scope, confirmation, approval chain, reauthentication result, and final decision.",
    "defensiveQuestion": "Does the action require stronger proof or a second accountable owner?",
    "limitation": "A normal session may be insufficient for high-impact changes."
  },
  {
    "stage": "8. Logout, expiration, or revocation",
    "description": "The fictional session ends through logout, inactivity, maximum lifetime, password change, risk response, administrator action, or account disablement.",
    "evidence": "Session ID, reason, owner, revoke time, expiration, application logout, and later request result.",
    "defensiveQuestion": "Did the session actually become unusable across relevant applications and devices?",
    "limitation": "Closing a browser window does not always end server-side or token-based sessions."
  }
];

const sessionControls = [
  {
    "control": "Secure cookie transport",
    "purpose": "A fictional Secure attribute limits cookie transmission to approved encrypted transport.",
    "evidence": "Set-Cookie metadata, scheme, browser behavior, application baseline, and test result.",
    "gap": "Without the attribute, a cookie may be exposed over an unintended nonsecure path.",
    "validation": "Confirm approved HTTPS requests include the cookie and nonsecure requests do not."
  },
  {
    "control": "HTTP-only cookie access",
    "purpose": "A fictional HttpOnly attribute prevents normal page scripts from directly reading the session cookie.",
    "evidence": "Cookie attributes, browser inspection, application design, and safe validation result.",
    "gap": "Without it, browser-side script flaws can increase session exposure risk.",
    "validation": "Confirm application functionality works while page scripts cannot directly read the protected cookie."
  },
  {
    "control": "Same-site restrictions",
    "purpose": "A fictional SameSite setting limits when a browser sends the cookie from cross-site contexts.",
    "evidence": "Cookie attributes, request context, origin relationship, application flow, and browser result.",
    "gap": "A weak setting may increase exposure to unintended cross-site state-changing requests.",
    "validation": "Test approved same-site workflows and denied cross-site requests without breaking required identity redirects."
  },
  {
    "control": "Narrow domain and path",
    "purpose": "A fictional cookie is sent only to the required host and application path.",
    "evidence": "Cookie Domain, Path, host architecture, subdomain ownership, and request records.",
    "gap": "Overbroad scope can expose session state to unrelated applications or subdomains.",
    "validation": "Confirm the cookie reaches only the intended application endpoints."
  },
  {
    "control": "Idle timeout",
    "purpose": "A fictional session expires after a defined period without approved activity.",
    "evidence": "Last activity, timeout policy, expiration event, later request result, and user notification.",
    "gap": "Long idle periods can leave unattended sessions usable.",
    "validation": "Confirm normal activity refreshes the session as designed and inactive sessions are denied after the limit."
  },
  {
    "control": "Maximum session lifetime",
    "purpose": "A fictional session must end after a fixed total duration even if activity continues.",
    "evidence": "Issue time, maximum age, renewal rules, reauthentication event, and final expiration.",
    "gap": "Unlimited renewal can keep stolen or forgotten sessions active too long.",
    "validation": "Confirm the application requires approved reauthentication after the maximum lifetime."
  },
  {
    "control": "Session rotation",
    "purpose": "A fictional session identifier changes after sign-in, privilege elevation, recovery, or another sensitive transition.",
    "evidence": "Old session ID, new session ID, transition event, invalidation result, and later request behavior.",
    "gap": "Reusing the same identifier across trust changes can preserve unsafe session state.",
    "validation": "Confirm the old identifier no longer works after rotation."
  },
  {
    "control": "Targeted revocation",
    "purpose": "A fictional user or defender can end selected sessions, devices, applications, or token families.",
    "evidence": "Session inventory, revoke request, owner, reason, result, and blocked later use.",
    "gap": "Password changes alone may not end every active session or token.",
    "validation": "Confirm revoked sessions fail while approved unaffected sessions behave according to policy."
  }
];

const accessModels = [
  {
    "model": "Role-based access",
    "example": "A fictional teacher role can view assigned classes, while a registrar role can update enrollment records.",
    "strongControl": "Server-side role checks combined with resource and workflow checks.",
    "weakControl": "Hiding an administrative button in the browser without enforcing the decision on the server.",
    "evidence": "Role assignment, route, permission, account, resource, decision, and audit record."
  },
  {
    "model": "Object ownership",
    "example": "A fictional student may view their own profile but not another student’s profile.",
    "strongControl": "Server-side comparison between authenticated account, tenant, resource owner, and allowed relationship.",
    "weakControl": "Trusting a user-supplied record ID because it came from the normal interface.",
    "evidence": "Account, object ID, owner, tenant, relationship, authorization result, and data response."
  },
  {
    "model": "Attribute-based access",
    "example": "A fictional document is available only to staff in the correct department, region, project, and approved time window.",
    "strongControl": "A documented policy evaluates trusted identity, resource, environment, and business attributes.",
    "weakControl": "Accepting unverified client-supplied attributes as authoritative.",
    "evidence": "Policy name, trusted attributes, decision, reason, resource, and time."
  },
  {
    "model": "Tenant isolation",
    "example": "A fictional school district account may access only records belonging to its own district tenant.",
    "strongControl": "Every server-side query and action includes trusted tenant context derived from the authenticated session.",
    "weakControl": "Using only a tenant value supplied in the URL or form.",
    "evidence": "Session tenant, object tenant, query filter, route, result, and database record."
  },
  {
    "model": "Administrative privilege",
    "example": "A fictional support administrator may reset selected user factors but cannot approve payroll changes.",
    "strongControl": "Separate roles, reauthentication, approval, detailed logging, time limits, and least privilege.",
    "weakControl": "One broad administrator role with permanent access to unrelated functions.",
    "evidence": "Admin role, action, target, approval, session, reason, result, and review."
  },
  {
    "model": "Workflow authorization",
    "example": "A fictional purchase request requires requester, manager, and finance approval before payment.",
    "strongControl": "The server enforces sequence, separation of duties, amount limits, and current workflow state.",
    "weakControl": "Trusting a client field that says the request is approved.",
    "evidence": "Workflow ID, current state, actor, role, approvals, amount, transition, and system-of-record result."
  },
  {
    "model": "Temporary access",
    "example": "A fictional contractor receives project access for two weeks.",
    "strongControl": "Named owner, exact scope, start time, expiration, monitoring, and automatic removal.",
    "weakControl": "Permanent group membership with no review date.",
    "evidence": "Access request, owner, scope, start, expiration, usage, review, and removal."
  },
  {
    "model": "Service-to-service access",
    "example": "A fictional reporting service reads approved summary data from an API.",
    "strongControl": "Dedicated service identity, narrow scope, audience restriction, key rotation, network policy, and monitoring.",
    "weakControl": "Shared human administrator credentials embedded in application configuration.",
    "evidence": "Service identity, token scope, audience, endpoint, request ID, action, and data result."
  }
];

const evidenceMatrix = [
  {
    "source": "Identity-provider sign-in record",
    "supports": "The fictional account, authentication methods, risk, device, client, application, policy, and sign-in result.",
    "limitation": "A successful sign-in does not prove correct object authorization or identify the physical person with certainty."
  },
  {
    "source": "Session inventory",
    "supports": "The fictional session or token ID, issue time, expiration, application, device, scope, and revocation state.",
    "limitation": "Inventory may not show every downstream application session or browser action."
  },
  {
    "source": "Application authorization log",
    "supports": "The fictional account, role, permission, resource, tenant, policy, decision, and denial reason.",
    "limitation": "Logging can be incomplete, and a denied request may have related activity elsewhere."
  },
  {
    "source": "Cookie or token metadata",
    "supports": "The fictional scope, audience, expiration, domain, path, security attributes, and selected claims.",
    "limitation": "Metadata should be handled safely and does not alone prove how the server validated or used it."
  },
  {
    "source": "Database or system-of-record log",
    "supports": "The fictional resource read, write, transaction, object, row count, commit, rollback, and final state.",
    "limitation": "The database may not directly identify the originating browser user without correlation."
  },
  {
    "source": "Mailbox, browser, or device evidence",
    "supports": "The fictional user interaction, device, browser, application, session transition, and local result.",
    "limitation": "Client evidence can be incomplete and should be correlated with server-side records."
  },
  {
    "source": "User and owner report",
    "supports": "The fictional intended action, expected access, recognized session, role need, and observed application behavior.",
    "limitation": "Human statements require documentary and technical correlation."
  },
  {
    "source": "Access-governance record",
    "supports": "The fictional access request, business justification, approving owner, role, scope, duration, review, and removal.",
    "limitation": "An approval record does not prove the application enforced the approved scope correctly."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Define the identity and action",
    "detail": "Record the fictional account, application, session, device, requested action, target resource, business purpose, and expected result."
  },
  {
    "step": "2",
    "title": "Trace authentication",
    "detail": "Review fictional primary factors, MFA, risk, recovery, device, policy, sign-in result, and session creation."
  },
  {
    "step": "3",
    "title": "Review session protection",
    "detail": "Evaluate fictional cookie or token scope, attributes, rotation, timeout, maximum lifetime, logout, and revocation."
  },
  {
    "step": "4",
    "title": "Evaluate authorization",
    "detail": "Compare fictional role, permission, ownership, tenant, workflow, resource state, and high-risk-action controls."
  },
  {
    "step": "5",
    "title": "Correlate impact",
    "detail": "Check fictional application, API, database, audit, user, and business evidence for completed access or state change."
  },
  {
    "step": "6",
    "title": "Remediate and validate",
    "detail": "Apply narrow fictional access changes, session actions, control improvements, positive tests, negative tests, monitoring, and closure."
  }
];

const investigationTimeline = [
  {
    "time": "10:02:01",
    "source": "Sign-in",
    "event": "A fictional teacher account completes password and authenticator verification from a known managed device.",
    "meaning": "Authentication and device context are confirmed for the approved portal."
  },
  {
    "time": "10:02:04",
    "source": "Policy",
    "event": "The fictional identity policy grants access to the student-support application.",
    "meaning": "The account meets the sign-in policy for this application."
  },
  {
    "time": "10:02:06",
    "source": "Session",
    "event": "The application creates a fictional session with Secure, HttpOnly, SameSite=Lax, a thirty-minute idle timeout, and eight-hour maximum lifetime.",
    "meaning": "The session protections and limits are documented."
  },
  {
    "time": "10:05:12",
    "source": "Request",
    "event": "The teacher views an assigned student-support record.",
    "meaning": "Normal role and assignment-based access succeeds."
  },
  {
    "time": "10:07:20",
    "source": "Request",
    "event": "The same session requests /admin/user-export for a district-wide export.",
    "meaning": "A high-privilege function is attempted from a normal teacher session."
  },
  {
    "time": "10:07:21",
    "source": "Authorization",
    "event": "The application denies the request because the teacher role lacks export permission.",
    "meaning": "Server-side function authorization works."
  },
  {
    "time": "10:07:22",
    "source": "Database",
    "event": "No fictional export job, file, or database read is created.",
    "meaning": "No confirmed data export or business impact follows the denied request."
  },
  {
    "time": "10:08:10",
    "source": "User report",
    "event": "The teacher says the administrative route appeared after following an old bookmarked link.",
    "meaning": "A plausible nonmalicious explanation exists but requires application and browser review."
  },
  {
    "time": "10:09:00",
    "source": "Browser",
    "event": "The fictional browser history confirms the old bookmark and no modified query or script activity.",
    "meaning": "Client evidence supports accidental navigation."
  },
  {
    "time": "10:11:30",
    "source": "Application review",
    "event": "The administrative page shell loads before the export API rejects the action.",
    "meaning": "The interface reveals an unavailable function even though the server protects the data action."
  },
  {
    "time": "10:15:00",
    "source": "Finding",
    "event": "The case identifies effective API authorization but weak interface-level route handling.",
    "meaning": "Security and usability findings are separated."
  },
  {
    "time": "10:18:00",
    "source": "Remediation",
    "event": "The application adds server-verified route gating and a safe not-authorized page for nonadministrative roles.",
    "meaning": "The change reduces confusing exposure without relying on client hiding alone."
  },
  {
    "time": "10:24:00",
    "source": "Positive test",
    "event": "A fictional administrator completes the approved export after reauthentication and dual approval.",
    "meaning": "Legitimate privileged use remains available."
  },
  {
    "time": "10:27:00",
    "source": "Negative test",
    "event": "The teacher role cannot load the administrative route or call the export API.",
    "meaning": "Both interface and server controls deny unauthorized use."
  },
  {
    "time": "10:31:00",
    "source": "Session test",
    "event": "The fictional teacher session expires after the configured idle period and requires sign-in again.",
    "meaning": "Idle timeout behaves as expected."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No new teacher-role requests reach the export function, and legitimate administrator exports continue normally.",
    "meaning": "Short-term validation supports the change."
  }
];

const classifications = [
  {
    "classification": "Expected authenticated access",
    "meaning": "The fictional account, factor, device, application, session, role, object, and business purpose match the approved workflow.",
    "documentation": "Record identity, session, role, resource, action, result, owner, and supporting system evidence."
  },
  {
    "classification": "Authentication concern",
    "meaning": "The fictional sign-in, factor, recovery, device, risk, or policy evidence is unusual or unauthorized.",
    "documentation": "Preserve sign-in and factor records, assign identity owners, review sessions, and state confidence and gaps."
  },
  {
    "classification": "Session-control weakness",
    "meaning": "The fictional cookie, token, timeout, rotation, logout, revocation, or scope behavior is broader or weaker than the approved baseline.",
    "documentation": "Record affected sessions, applications, attributes, lifetime, exposure, remediation, and validation."
  },
  {
    "classification": "Authorization denial working as designed",
    "meaning": "The fictional application rejects an action because role, permission, ownership, tenant, workflow, or resource conditions are not met.",
    "documentation": "Record the request, policy, denial, user context, related activity, and confirmation that no state change occurred."
  },
  {
    "classification": "Authorization weakness",
    "meaning": "The fictional application permits a function or resource action outside the approved identity, object, tenant, workflow, or role scope.",
    "documentation": "Record exact resource and action, evidence, affected scope, owner, containment, remediation, and validation."
  },
  {
    "classification": "Legitimate privileged action",
    "meaning": "The fictional administrative action is authorized, reauthenticated, approved, logged, narrowly scoped, and connected to a valid business purpose.",
    "documentation": "Record role, session, action, target, approvals, result, review, and expiration where applicable."
  },
  {
    "classification": "User-interface exposure without server impact",
    "meaning": "The fictional page reveals an unavailable function, but the server or API correctly denies the protected action.",
    "documentation": "Separate usability or information exposure from confirmed data access or state change."
  },
  {
    "classification": "Evidence incomplete",
    "meaning": "The fictional sign-in, session, authorization, device, application, database, user, or business evidence is insufficient for a reliable conclusion.",
    "documentation": "State the gap, confidence, temporary control, owner, due date, and decision criteria."
  }
];

const commonMistakes = [
  "Treating a fictional successful sign-in as proof that every later request is authorized.",
  "Assuming a valid session identifies the physical person with certainty.",
  "Checking permissions only in the browser instead of enforcing them on the server or API.",
  "Trusting a user-supplied role, tenant, account ID, owner ID, approval state, or resource identifier.",
  "Granting broad permanent administrator access when a narrow temporary role would meet the need.",
  "Changing a password without reviewing and revoking unsafe sessions, factors, tokens, recovery paths, and mailbox rules.",
  "Assuming logout succeeded everywhere because the browser window closed.",
  "Using very long session lifetimes for sensitive applications without reauthentication.",
  "Failing to rotate fictional session identifiers after sign-in, recovery, or privilege elevation.",
  "Treating an authorization denial as proof of malicious intent without reviewing user, browser, route, and business context.",
  "Closing after a denied request without confirming no database, export, file, payment, or other state change occurred.",
  "Publishing real cookies, tokens, session IDs, account names, access records, screenshots, or private application data."
];

const quizQuestions = [
  {
    "question": "What is the difference between authentication and authorization?",
    "choices": [
      "Authentication evaluates an identity claim; authorization decides whether that identity may perform a specific action on a specific resource.",
      "They are identical.",
      "Authentication decides database ownership.",
      "Authorization creates passwords."
    ],
    "answer": 0,
    "explanation": "A user can authenticate successfully and still be denied a protected action."
  },
  {
    "question": "What does a fictional valid session most directly support?",
    "choices": [
      "The request is connected to recognized session state for an account or application context.",
      "Every requested action is authorized.",
      "The physical user is known with certainty.",
      "The database changed successfully."
    ],
    "answer": 0,
    "explanation": "Session recognition and action authorization are separate decisions."
  },
  {
    "question": "Which access-control design best protects a fictional student profile?",
    "choices": [
      "The server compares the authenticated account, tenant, relationship, resource owner, and requested action.",
      "The browser hides links to other profiles.",
      "The application trusts the record ID in the URL.",
      "Every authenticated user receives read access."
    ],
    "answer": 0,
    "explanation": "Object-level authorization must be enforced using trusted server-side context."
  },
  {
    "question": "Why should a fictional session identifier rotate after sign-in or privilege elevation?",
    "choices": [
      "It replaces earlier session state across a trust transition and allows the old identifier to be invalidated.",
      "It proves the account owner’s physical identity.",
      "It grants every permission.",
      "It removes the need for expiration."
    ],
    "answer": 0,
    "explanation": "Rotation reduces risk from identifiers created before authentication or elevation."
  },
  {
    "question": "A fictional teacher requests an administrator export and receives a server-side denial. What is the strongest immediate conclusion?",
    "choices": [
      "The protected export action was attempted and denied; impact requires separate database and business evidence.",
      "The teacher is malicious.",
      "The export definitely completed.",
      "The account is compromised."
    ],
    "answer": 0,
    "explanation": "The denial is confirmed, while intent and downstream state need separate review."
  },
  {
    "question": "Which temporary-access design is strongest?",
    "choices": [
      "Exact role and scope, named owner, start and end times, monitoring, review, and automatic removal.",
      "Permanent administrator membership.",
      "Shared credentials.",
      "An undocumented exception."
    ],
    "answer": 0,
    "explanation": "Temporary access should be narrow, accountable, monitored, and automatically expire."
  },
  {
    "question": "Which closure plan is strongest after a fictional session and access-control concern?",
    "choices": [
      "Validate authentication, sessions, factors, roles, permissions, objects, database state, legitimate use, monitoring, gaps, residual risk, and owner approval.",
      "Close after changing the password.",
      "Close after deleting one cookie.",
      "Close because the request returned a 4xx status."
    ],
    "answer": 0,
    "explanation": "Professional closure combines identity, session, authorization, application, data, business, and governance evidence."
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

function AuthenticationStageGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authentication Flow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Identity Claim to Session End
      </h2>

      <div className="mt-6 grid gap-5">
        {authenticationStages.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.stage}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive question
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.defensiveQuestion}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Limitation
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.limitation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SessionControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Session Defense
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls That Protect Fictional Sessions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sessionControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.control}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Control gap
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.gap}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.validation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccessModelGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Access Control Models
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways Applications Decide Who May Do What
      </h2>

      <div className="mt-6 grid gap-5">
        {accessModels.map((item) => (
          <div
            key={item.model}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.model}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.example}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong control
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongControl}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak control
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakControl}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Identity and Access Evidence Can Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Review Authentication, Sessions, and Access in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>

            <h3 className="mt-4 font-black text-white">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Classification
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Outcomes with Different Evidence Requirements
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {classifications.map((item) => (
          <div
            key={item.classification}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.classification}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Required documentation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.documentation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Access Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Teacher Session from Sign-In to Validation
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">
              {item.time}
            </p>

            <p className="text-sm font-black text-blue-200">{item.source}</p>

            <p className="text-sm font-semibold text-white">{item.event}</p>

            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AuthenticationSessionsAndAccessControlPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I8
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.2 Authentication, Sessions, and Access Control
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional applications identify users, authenticate
            accounts, create and protect sessions, enforce roles and object
            permissions, secure sensitive actions, revoke access, investigate
            unusual requests, and validate that legitimate workflows still work.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I8: Web Security Defense"
          lessonTitle="Authentication, Sessions, and Access Control"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional authentication, session recognition, authorization, and business approval are separate decisions.",
            "I will not treat a valid session or successful sign-in as proof that every resource and action is permitted.",
            "I will review trusted server-side role, permission, ownership, tenant, workflow, and resource evidence.",
            "I will use only supplied fictional accounts, sessions, cookies, tokens, devices, applications, and records.",
            "I will never publish or reuse real credentials, cookies, session IDs, tokens, account data, or private application information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Signed In Does Not Mean Allowed to Do Everything"
        >
          <p className="leading-8">
            A fictional teacher can sign in successfully and still be denied a
            district-wide export. A support administrator can reset selected
            factors without gaining payroll approval. A valid session can expire,
            be revoked, or require reauthentication before a sensitive action.
            Defenders protect applications by checking identity, session, role,
            resource, tenant, workflow, and business context at every trust boundary.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 leading-7">
                “The fictional user is signed in, so trust the role and record ID
                supplied by the browser.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong design
              </p>
              <p className="mt-2 leading-7">
                “Derive trusted identity and tenant context from the session, then
                enforce server-side role, permission, ownership, workflow, and
                sensitive-action checks.”
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
          title="Most Protected Web Actions Depend on Several Connected Controls"
        >
          <p className="leading-8">
            A password, factor, cookie, token, role, and hidden button do not
            independently protect a resource. Strong defense combines secure
            authentication, limited sessions, server-side authorization, object
            and tenant checks, least privilege, sensitive-action confirmation,
            detailed logs, narrow response, and evidence-based validation.
          </p>
        </SectionCard>

        <AuthenticationStageGuide />
        <SessionControlGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Five Decisions"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Identity",
                "Which fictional account, service, device, or workload claims to be acting?",
              ],
              [
                "Authentication",
                "Which fictional evidence and policy support accepting that identity claim?",
              ],
              [
                "Session",
                "Which fictional application state connects later requests to the accepted account?",
              ],
              [
                "Authorization",
                "May that identity perform this exact action on this exact resource now?",
              ],
              [
                "Impact",
                "Which fictional application, database, file, transaction, permission, or business state actually changed?",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <AccessModelGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <ClassificationGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Authentication, Session, and Access Terms
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

        <FakeDashboardCard
          title="Fake Authentication and Access Review Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student-support application."
          metrics={[
            {
              label: "Active sessions",
              value: "312",
              note: "Fictional user and service sessions across approved applications, devices, and roles.",
            },
            {
              label: "Denied requests",
              value: "27",
              note: "Role, permission, ownership, tenant, workflow, reauthentication, and expired-session denials.",
            },
            {
              label: "Open access reviews",
              value: "6",
              note: "Temporary access, stale role, session-control, object-authorization, and evidence-gap cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Teacher Session Requests Administrative Export"
          severity="Medium"
          time="10:07 AM"
          source="Fake Web Access Review Console"
          details="A fictional teacher account completes approved authentication from a known managed device, then follows an old bookmark to an administrative export route. The application API denies the action because the teacher role lacks export permission. No export job, file, database read, or business change is created."
          recommendation="Preserve the session and request evidence, verify the bookmark and user explanation, confirm no downstream state change, improve route gating without relying on client hiding, test legitimate administrator export with reauthentication and approval, and monitor for repeated requests."
        />

        <FakeLogPanel
          title="Fake Authentication and Authorization Timeline"
          logs={[
            "10:02:01 SIGN_IN account='teacher-204' primary='pass' mfa='pass' device='managed'",
            "10:02:04 POLICY app='student-support' result='grant'",
            "10:02:06 SESSION secure='true' http_only='true' same_site='Lax' idle='30m' max='8h'",
            "10:05:12 ACCESS route='/assigned-record/771' role='teacher' result='allow'",
            "10:07:20 REQUEST route='/admin/user-export' role='teacher'",
            "10:07:21 AUTHORIZE permission='district_export' result='deny'",
            "10:07:22 DATABASE export_job='none' file='none' data_change='none'",
            "10:08:10 USER_REPORT cause='old_bookmark'",
            "10:09:00 BROWSER bookmark='confirmed' modified_request='none'",
            "10:11:30 UI admin_shell='visible' api_action='denied'",
            "10:18:00 REMEDIATE server_route_gate='added' safe_denial_page='added'",
            "10:24:00 POSITIVE_TEST role='administrator' reauth='pass' dual_approval='pass' export='success'",
            "10:27:00 NEGATIVE_TEST role='teacher' route='denied' api='denied'",
            "10:31:00 SESSION_TEST idle_timeout='pass'",
            "DAY7 MONITOR repeated_teacher_export_requests='0' legitimate_admin_exports='normal'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Access-Control Conclusion Is Best Supported?"
          evidence={[
            "The fictional teacher completes approved password and MFA from a known managed device.",
            "The teacher session includes secure cookie attributes and defined lifetime limits.",
            "The session requests an administrative export route through an old bookmark.",
            "The server-side API denies the export because the teacher role lacks permission.",
            "No export job, file, database read, or business-system change is found.",
            "The browser record confirms the old bookmark and no modified request behavior.",
            "The administrative page shell is visible before the API denial.",
            "After remediation, the teacher cannot load the route while an approved administrator can export after reauthentication and dual approval.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Server-side authorization prevented the export, no data impact is confirmed, and route-level interface handling needed improvement.",
            "The teacher account is compromised because an administrative route was requested.",
            "The export succeeded because the page shell appeared.",
            "Authentication failure caused the event.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports approved authentication, an attempted but denied privileged action, no downstream state change, a plausible bookmark explanation, and a narrower interface-level control weakness."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Identity and Access Defense"
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
          title="Complete a Fictional Authentication and Access Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Access Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review thirty-eight supplied fictional records covering sign-ins,
                factors, devices, sessions, cookies, tokens, roles, permissions,
                ownership, tenants, temporary access, administrative actions,
                application decisions, database state, user reports, validation,
                monitoring, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map the fictional identification, authentication, factor, policy, session, and authorization stages.</li>
                <li>Review cookie or token scope, attributes, issue time, expiration, rotation, logout, and revocation.</li>
                <li>Compare role, permission, object ownership, tenant, workflow, temporary access, and sensitive-action controls.</li>
                <li>Separate successful sign-in, valid session, attempted action, authorization result, database state, and business impact.</li>
                <li>Document confirmed facts, reasonable conclusions, alternative explanations, confidence, and evidence gaps.</li>
                <li>Recommend narrow access changes, session actions, positive tests, negative tests, monitoring, rollback, and closure.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not test real applications,
            access accounts, copy cookies or tokens, change permissions, bypass
            controls, impersonate users, or publish real credentials, sessions,
            identifiers, screenshots, access records, or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Valid Session Requests Another User’s Record"
          scenario="A fictional signed-in student changes a record identifier in the browser and requests another student’s profile. The browser permits the request, but the server has not yet checked object ownership."
          choices={[
            {
              label: "Choice A",
              response:
                "Enforce server-side account, tenant, relationship, ownership, and action checks for every record request, deny the unauthorized object, preserve evidence, and validate both own-record and other-record cases.",
              outcome:
                "Best defensive choice. A valid session does not authorize access to every object.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Hide the record identifier in the browser and keep the server behavior unchanged.",
              outcome:
                "Weak control. Client-side hiding does not enforce object authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Allow the request because the student is authenticated.",
              outcome:
                "Unsafe. Authentication and object-level authorization are separate.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Password Is Reset but Old Sessions Remain Active"
          scenario="A fictional user completes an approved password reset after reporting an unexpected sign-in. The account password changes, but two old application sessions and one remembered browser session remain valid."
          choices={[
            {
              label: "Choice A",
              response:
                "Review and revoke unsafe sessions and tokens, verify factors and recovery methods, rotate session state, validate required applications, and monitor for related activity.",
              outcome:
                "Best defensive choice. Password change alone may not end every active session.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Take no further action because the password changed.",
              outcome:
                "Incomplete. Existing sessions can remain usable.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every organizational account.",
              outcome:
                "Overbroad. Response should match the affected account, sessions, applications, and evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authentication, Sessions, and Access Control Checklist"
          items={[
            "I separate fictional identification, authentication, session recognition, authorization, business approval, and confirmed impact.",
            "I review primary factors, MFA, recovery, device, risk, policy, sign-in, and session creation evidence.",
            "I evaluate cookie or token scope, security attributes, expiration, rotation, logout, and revocation.",
            "I enforce role, permission, object ownership, tenant, workflow, and sensitive-action checks on the server or API.",
            "I use trusted session and server context instead of user-supplied roles, tenants, owners, and approval states.",
            "I design temporary and administrative access with least privilege, owners, time limits, reauthentication, approval, logging, and review.",
            "I confirm application, API, database, audit, user, and business state before claiming impact.",
            "I validate legitimate access and denied cases after every change.",
            "I document facts, conclusions, alternatives, confidence, gaps, owners, monitoring, rollback, and residual risk.",
            "I use only fictional evidence and never expose real credentials, cookies, tokens, session IDs, access records, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.2 Mini Quiz: Authentication, Sessions, and Access Control"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Authentication, Session, and Access Control Review using at least thirty-eight sign-in, factor, device, policy, cookie, token, session, role, permission, ownership, tenant, workflow, application, database, user-report, remediation, validation, monitoring, and closure records. Include the authentication flow, session-control baseline, access-control matrix, normalized timeline, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional accounts, applications, sessions, cookies, tokens, devices, roles, records, and organizations.",
            "Include one expected access case, one denied privileged action, one object-authorization weakness, one stale temporary-access case, and one evidence-incomplete session case.",
            "Keep sign-in success, session validity, authorization, data access, and business impact separate.",
            "Do not include real credentials, cookies, tokens, session IDs, account names, screenshots, or private application data.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication accepts an identity claim; authorization decides whether that identity may perform a specific action on a specific resource.",
            "A valid session is not a universal permission and must remain protected, limited, rotated, expired, and revocable.",
            "Role checks should be combined with object, tenant, workflow, ownership, and business-rule checks.",
            "Client-side hiding improves usability but does not replace server-side enforcement.",
            "Sign-in, session use, attempted action, authorization result, database state, and business impact require separate evidence.",
            "Strong closure validates legitimate access, denied conditions, sessions, factors, data state, monitoring, evidence gaps, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I8
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