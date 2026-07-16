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
const modulePath = `${trackPath}/secure-coding-basics`;
const previousLesson = `${modulePath}/secure-input-output-and-data-handling`;
const nextLesson = `${modulePath}/error-handling-logging-and-secrets`;

const objectives = [
  "Explain how fictional authentication, session management, authorization, account lifecycle, recovery, reauthentication, and privileged workflows work together without being treated as the same control.",
  "Distinguish identity claims, factors, devices, sessions, cookies, tokens, roles, permissions, tenants, object relationships, workflow state, and business approval.",
  "Review fictional authentication and authorization code paths for trusted server checks, secure session creation, rotation, expiration, revocation, least privilege, and object-level access control.",
  "Design fictional positive and negative tests for sign-in, recovery, session state, role changes, tenant separation, object ownership, privileged actions, and account disablement.",
  "Create a professional fictional Identity, Session, and Access Control Code Review with findings, owners, validation, monitoring, rollback, evidence gaps, and closure criteria."
];

const vocabulary = [
  [
    "Authentication",
    "A fictional process that evaluates an identity claim using approved evidence such as a password, authenticator, device, or recovery method."
  ],
  [
    "Authorization",
    "A fictional server-side decision about whether a recognized identity may perform a specific action on a specific object in a specific tenant and workflow state."
  ],
  [
    "Session",
    "A fictional server-recognized period that connects an authenticated account with current trust, device, risk, role, and application state."
  ],
  [
    "Session rotation",
    "A fictional process that replaces a session identifier after sign-in, recovery, privilege elevation, or another trust change."
  ],
  [
    "Session revocation",
    "A fictional process that invalidates one or more active sessions after logout, account disablement, recovery, security concern, or administrative action."
  ],
  [
    "Reauthentication",
    "A fictional requirement for fresh identity verification before a high-impact action such as export, role change, recovery, or payment approval."
  ],
  [
    "Object authorization",
    "A fictional server-side check that confirms the identity may access the exact requested record, file, account, project, or transaction."
  ],
  [
    "Tenant isolation",
    "A fictional control that prevents identities and services from accessing data or actions belonging to another organization or logical boundary."
  ],
  [
    "Least privilege",
    "A fictional principle that grants only the permissions required for the approved role, object, workflow, and time period."
  ],
  [
    "Step-up verification",
    "A fictional stronger verification requirement triggered by increased risk, privilege, sensitivity, or business impact."
  ],
  [
    "Account lifecycle",
    "The fictional creation, activation, role assignment, review, suspension, disablement, recovery, and deletion of an identity."
  ],
  [
    "Access decision",
    "A fictional structured result that records the identity, session, role, tenant, object, action, policy, reason, and outcome."
  ]
];

const identityFlow = [
  {
    "stage": "1. Identity discovery",
    "purpose": "A fictional application identifies which account or identity provider should handle the sign-in attempt.",
    "checks": "Approved domain or account lookup, tenant, application, identity-provider route, anti-enumeration response, and safe redirect.",
    "evidence": "Request ID, account category, tenant, provider choice, redirect destination, and user-visible result.",
    "failureMode": "The application reveals whether every account exists or accepts unapproved redirect destinations."
  },
  {
    "stage": "2. Credential and factor verification",
    "purpose": "A fictional identity service evaluates approved factors and account state.",
    "checks": "Password or primary factor, second factor, account enabled state, factor enrollment, retry control, risk, and recovery restrictions.",
    "evidence": "Sign-in ID, factor category, policy result, device label, account state, failure reason, and timing.",
    "failureMode": "The application treats one weak factor, stale recovery answer, or repeated attempt as sufficient."
  },
  {
    "stage": "3. Session creation",
    "purpose": "A fictional application creates a new recognized session after successful authentication.",
    "checks": "Fresh identifier, secure cookie attributes, issue time, idle and maximum lifetime, device context, account, tenant, and application scope.",
    "evidence": "Session ID category, account, device, issue and expiry times, cookie metadata, and policy version.",
    "failureMode": "The application keeps a pre-authentication identifier or creates a broad, long-lived, script-readable session."
  },
  {
    "stage": "4. Request recognition",
    "purpose": "A fictional server connects each request to current session and account state.",
    "checks": "Session signature or lookup, expiration, revocation, account enabled state, device or risk changes, application scope, and token audience.",
    "evidence": "Request ID, session ID, account ID, device ID, validation result, revocation state, and reason.",
    "failureMode": "The application trusts client claims without checking current session and account state."
  },
  {
    "stage": "5. Authorization",
    "purpose": "A fictional server decides whether the account may perform the requested action on the exact object and tenant.",
    "checks": "Role, permission, tenant, ownership, assignment, object state, action, workflow state, field scope, and policy.",
    "evidence": "Account, role, tenant, object, action, policy, decision, reason, and downstream result.",
    "failureMode": "The application checks only that the user is signed in or that the page link was visible."
  },
  {
    "stage": "6. Privileged action",
    "purpose": "A fictional high-impact workflow requires stronger proof and clearer user intent.",
    "checks": "Privileged role, recent authentication, step-up factor, exact object, confirmation, approval, idempotency, and enhanced logging.",
    "evidence": "Session age, reauthentication event, approvals, transaction ID, business record, and audit event.",
    "failureMode": "An old ordinary session can change roles, export data, approve payment, or recover another account."
  },
  {
    "stage": "7. Session maintenance",
    "purpose": "A fictional application updates trust after password changes, role changes, risk events, device changes, and inactivity.",
    "checks": "Rotation, renewal, idle timeout, maximum lifetime, role refresh, risk review, device state, and token refresh rules.",
    "evidence": "Old and new session IDs, reason, account state, role version, device status, and renewal result.",
    "failureMode": "Old sessions preserve outdated privileges or remain active after important trust changes."
  },
  {
    "stage": "8. Logout, revocation, and account closure",
    "purpose": "A fictional system ends access when the user logs out or the identity should no longer be trusted.",
    "checks": "Server-side invalidation, cookie clearing, token revocation where supported, account disablement, device removal, audit logging, and confirmation.",
    "evidence": "Logout event, revoked session inventory, account state, token status, access denial, and owner review.",
    "failureMode": "Only the browser cookie is removed while server-side sessions or other devices remain active."
  }
];

const authorizationLayers = [
  {
    "layer": "Route authorization",
    "question": "May the fictional identity reach this function or endpoint at all?",
    "trustedData": "Current account, role, tenant, application, route policy, and session state.",
    "weakPattern": "Hide the route link in the browser or check only a client-supplied role.",
    "strongPattern": "Enforce server-side route policy before protected processing begins."
  },
  {
    "layer": "Object authorization",
    "question": "May the fictional identity access this exact record, file, user, report, or transaction?",
    "trustedData": "Server-resolved object, tenant, owner, assignment, relationship, role, and action.",
    "weakPattern": "Trust a valid-looking identifier or assume role membership grants every object.",
    "strongPattern": "Resolve the object under the current tenant and evaluate the exact relationship and action."
  },
  {
    "layer": "Field authorization",
    "question": "Which fictional fields may this identity view or change inside the approved object?",
    "trustedData": "Role, relationship, data classification, workflow state, and response or update policy.",
    "weakPattern": "Return the full object and hide fields only in the browser.",
    "strongPattern": "Select and return only approved fields on the server."
  },
  {
    "layer": "Action authorization",
    "question": "May the fictional identity perform this read, update, delete, approve, export, invite, or role-change action?",
    "trustedData": "Permission, object state, workflow state, business rule, recent authentication, and approvals.",
    "weakPattern": "Assume access to the object allows every action.",
    "strongPattern": "Evaluate each action independently and record the decision."
  },
  {
    "layer": "Tenant authorization",
    "question": "Does the fictional object and action belong to the same approved tenant or organizational boundary as the identity?",
    "trustedData": "Trusted tenant from the session, server-resolved object tenant, and service scope.",
    "weakPattern": "Use a tenant identifier directly from the request without verification.",
    "strongPattern": "Derive tenant from trusted session and object data, then require an exact match."
  },
  {
    "layer": "Workflow authorization",
    "question": "Is the fictional action allowed at the current step and state of the business process?",
    "trustedData": "Current workflow state, previous approvals, ownership, timing, transaction status, and business rule.",
    "weakPattern": "Allow a later action simply because the user knows the route.",
    "strongPattern": "Require the expected state transition and reject out-of-order or repeated actions."
  },
  {
    "layer": "Privileged authorization",
    "question": "Does the fictional high-impact action require fresh verification, dual approval, or a specialized administrative role?",
    "trustedData": "Privileged role, session age, step-up result, approval record, object, and exact requested change.",
    "weakPattern": "Use the same ordinary session rule for role changes, exports, recovery, and payment approvals.",
    "strongPattern": "Require narrowly scoped privileged authority and fresh verification."
  },
  {
    "layer": "Service authorization",
    "question": "May the fictional application service call the downstream service and perform this operation?",
    "trustedData": "Named service identity, audience, scope, environment, network path, and operation policy.",
    "weakPattern": "Use one shared overprivileged credential for every service.",
    "strongPattern": "Use separate least-privileged service identities with exact scopes and monitoring."
  }
];

const sessionControls = [
  {
    "control": "Fresh identifier at authentication",
    "purpose": "Replace fictional pre-authentication state with a new session after identity verification.",
    "risk": "A preexisting identifier can remain associated with the authenticated account.",
    "validation": "Confirm the identifier changes at sign-in and the old identifier is not accepted.",
    "owner": "Identity and Application Teams"
  },
  {
    "control": "Secure cookie attributes",
    "purpose": "Limit fictional browser transport and script access while applying appropriate cross-site behavior.",
    "risk": "Weak attributes can broaden session exposure or send state in unintended contexts.",
    "validation": "Confirm Secure, HttpOnly, appropriate SameSite, narrow host and path, and approved lifetime.",
    "owner": "Application Team"
  },
  {
    "control": "Idle and maximum lifetime",
    "purpose": "End fictional sessions after inactivity and after an absolute approved period.",
    "risk": "Long-lived forgotten sessions increase exposure after device loss or account misuse.",
    "validation": "Test activity, inactivity, maximum age, renewal, and denied expired requests.",
    "owner": "Identity and Application Teams"
  },
  {
    "control": "Rotation after trust changes",
    "purpose": "Replace fictional session state after recovery, password change, privilege elevation, or risk decision.",
    "risk": "Old identifiers can preserve trust from before the important change.",
    "validation": "Confirm old identifiers fail and new state reflects the current role and risk.",
    "owner": "Identity Team"
  },
  {
    "control": "Server-side revocation",
    "purpose": "Invalidate fictional sessions after logout, disablement, security concern, or administrative action.",
    "risk": "Clearing only the browser cookie leaves server-recognized state active.",
    "validation": "Confirm revoked sessions fail on every device and application path.",
    "owner": "Identity and Platform Teams"
  },
  {
    "control": "Session inventory",
    "purpose": "Allow fictional users and defenders to see active devices, issue times, locations or labels, and recent use where appropriate.",
    "risk": "Unknown sessions can remain unnoticed and difficult to revoke.",
    "validation": "Confirm inventory accuracy, privacy, ownership, and per-session revocation.",
    "owner": "Identity Team"
  },
  {
    "control": "Privilege freshness",
    "purpose": "Require fictional current role and permission evaluation rather than preserving stale authorization in the session.",
    "risk": "A removed role can remain effective until a long session expires.",
    "validation": "Change a role in the test environment and confirm old access stops according to policy.",
    "owner": "Identity and Application Teams"
  },
  {
    "control": "Safe logout and recovery",
    "purpose": "End fictional access predictably and avoid creating a weaker alternate path through recovery.",
    "risk": "Recovery or logout gaps can leave sessions active or allow account takeover through weaker evidence.",
    "validation": "Test logout, all-session revocation, recovery verification, old-session denial, and notification.",
    "owner": "Identity Team"
  }
];

const accountLifecycle = [
  {
    "stage": "Provision",
    "securePattern": "Create fictional accounts from an approved authoritative source with named owner, tenant, role, and start date.",
    "risk": "Manual or duplicate accounts can be created without clear ownership or purpose.",
    "evidence": "Provisioning request, authoritative record, account ID, owner, role, tenant, and approval."
  },
  {
    "stage": "Activate",
    "securePattern": "Require fictional initial verification, factor enrollment, secure recovery setup, and policy acceptance.",
    "risk": "Default credentials or incomplete factor setup can leave weak access.",
    "evidence": "Activation event, factor enrollment, recovery method, device, and owner confirmation."
  },
  {
    "stage": "Assign access",
    "securePattern": "Grant fictional roles and permissions from documented job, project, tenant, and business need.",
    "risk": "Broad default roles or copied access can exceed the actual need.",
    "evidence": "Role request, manager or owner approval, policy decision, and effective permissions."
  },
  {
    "stage": "Review",
    "securePattern": "Review fictional active accounts, roles, privileged access, service identities, stale sessions, and exceptions on schedule.",
    "risk": "Access remains after job, project, tenant, or responsibility changes.",
    "evidence": "Review campaign, owner decision, removed access, exception, and completion report."
  },
  {
    "stage": "Change",
    "securePattern": "Update fictional roles, tenant, manager, project, or privilege through approved change and session refresh.",
    "risk": "Old permissions remain active or new access is granted without removing outdated access.",
    "evidence": "Change request, before and after roles, session rotation, tests, and owner approval."
  },
  {
    "stage": "Suspend",
    "securePattern": "Temporarily prevent fictional sign-in and revoke sessions while preserving required evidence and business records.",
    "risk": "Suspended accounts may retain API tokens, sessions, or service access.",
    "evidence": "Suspension event, revoked sessions, token status, device state, and denial tests."
  },
  {
    "stage": "Disable",
    "securePattern": "Disable fictional access promptly after separation, confirmed misuse, or end of business need.",
    "risk": "Dormant accounts become forgotten entry points.",
    "evidence": "Authoritative end event, account state, revoked sessions, removed roles, and owner confirmation."
  },
  {
    "stage": "Delete or archive",
    "securePattern": "Remove fictional account access and personal data according to retention while preserving required audit relationships.",
    "risk": "Deleting the account too early can break evidence, while keeping it indefinitely increases privacy and access risk.",
    "evidence": "Retention decision, archive mapping, deletion record, access test, and owner sign-off."
  }
];

const codeReviewQuestions = [
  {
    "area": "Trusted identity source",
    "question": "Does the fictional code use server-validated identity and session context rather than client-supplied account, role, or tenant values?",
    "evidence": "Identity middleware, session lookup, claim validation, route context, and negative test.",
    "warning": "Role or tenant is read directly from a form, URL, local storage, or unsigned client data."
  },
  {
    "area": "Central authorization",
    "question": "Do fictional routes call a shared policy or service that evaluates role, tenant, object, action, and state consistently?",
    "evidence": "Authorization function, policy mapping, route coverage, decisions, and regression tests.",
    "warning": "Each route implements different ad hoc checks or trusts browser visibility."
  },
  {
    "area": "Object resolution",
    "question": "Does the fictional server resolve the protected object under the trusted tenant before making an access decision?",
    "evidence": "Object service, tenant filter, ownership or assignment record, and wrong-object tests.",
    "warning": "The code loads an object by client-provided ID without tenant or relationship checks."
  },
  {
    "area": "Session state",
    "question": "Does the fictional code verify expiration, revocation, account state, device or risk policy, and current role on protected requests?",
    "evidence": "Session middleware, revocation lookup, account state, role version, and denial tests.",
    "warning": "A signed or stored session is accepted without current-state checks."
  },
  {
    "area": "Privileged action",
    "question": "Does the fictional code require recent authentication, exact privileged role, confirmation, approval, and idempotency where needed?",
    "evidence": "Step-up event, approval record, transaction ID, route decision, and duplicate-request test.",
    "warning": "An ordinary old session can complete the high-impact action."
  },
  {
    "area": "Recovery and role change",
    "question": "Does fictional recovery or access change trigger session revocation, notification, audit logging, and renewed policy evaluation?",
    "evidence": "Recovery event, old-session denial, role-change record, notification, and audit result.",
    "warning": "Recovery is weaker than sign-in or old sessions retain previous trust."
  },
  {
    "area": "Error behavior",
    "question": "Do fictional authentication and authorization errors remain safe while preserving useful structured evidence?",
    "evidence": "User response, internal decision reason, request ID, event fields, and privacy review.",
    "warning": "The response reveals account existence, role details, object presence, or internal policy structure unnecessarily."
  },
  {
    "area": "Monitoring and ownership",
    "question": "Are fictional sign-in, recovery, session, authorization, privilege, account, and service-identity events monitored by accountable owners?",
    "evidence": "Source inventory, alert routes, owner, retention, access review, and health test.",
    "warning": "Critical decisions exist only in local logs or have no owner and retention."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Map identity and trust",
    "detail": "Identify fictional accounts, factors, devices, identity providers, applications, sessions, tenants, roles, and authoritative sources."
  },
  {
    "step": "2",
    "title": "Trace session state",
    "detail": "Review fictional creation, cookie or token attributes, rotation, renewal, idle and maximum lifetime, revocation, logout, and recovery."
  },
  {
    "step": "3",
    "title": "Map authorization",
    "detail": "Evaluate fictional route, object, field, action, tenant, workflow, privileged, and service authorization."
  },
  {
    "step": "4",
    "title": "Review code and policy",
    "detail": "Confirm fictional trusted context, central policies, object resolution, current-state checks, safe errors, and structured events."
  },
  {
    "step": "5",
    "title": "Test both access and denial",
    "detail": "Run fictional positive, wrong-role, wrong-tenant, wrong-object, expired, revoked, stale-role, duplicate, and recovery tests."
  },
  {
    "step": "6",
    "title": "Monitor and close",
    "detail": "Validate fictional account lifecycle, session inventories, access reviews, alerts, business outcomes, rollback, residual risk, and owner approval."
  }
];

const investigationTimeline = [
  {
    "time": "08:00:00",
    "source": "Provisioning",
    "event": "A fictional teacher account is created from an approved employment record with teacher role and Meadowbrook tenant.",
    "meaning": "The account has an authoritative source, owner, role, and tenant."
  },
  {
    "time": "08:05:00",
    "source": "Activation",
    "event": "The fictional teacher completes initial verification, enrolls an authenticator, and configures approved recovery.",
    "meaning": "The account becomes active under the identity policy."
  },
  {
    "time": "09:12:00",
    "source": "Sign-in",
    "event": "The teacher completes password and authenticator verification from a known managed device.",
    "meaning": "Approved authentication and device context are established."
  },
  {
    "time": "09:12:01",
    "source": "Session",
    "event": "The application creates a new Secure, HttpOnly, SameSite=Lax session with approved idle and maximum lifetime.",
    "meaning": "A protected post-authentication session is issued."
  },
  {
    "time": "09:14:00",
    "source": "Record request",
    "event": "The fictional teacher requests a student-support record assigned to another teacher.",
    "meaning": "A protected object access decision is required."
  },
  {
    "time": "09:14:01",
    "source": "Route code",
    "event": "The route checks authentication and teacher role but does not verify the assignment relationship.",
    "meaning": "The route and role controls are incomplete for object access."
  },
  {
    "time": "09:14:02",
    "source": "Database",
    "event": "The unassigned record is returned in the supplied safe test environment.",
    "meaning": "A test-environment object-authorization impact is confirmed."
  },
  {
    "time": "09:18:00",
    "source": "Containment",
    "event": "The affected route is blocked from release and the test session is revoked.",
    "meaning": "Narrow containment prevents deployment and ends the reviewed session."
  },
  {
    "time": "09:30:00",
    "source": "Remediation",
    "event": "A central policy resolves tenant, record, assignment, role, action, field scope, and session state using trusted server data.",
    "meaning": "Authorization now matches the protected object and workflow."
  },
  {
    "time": "09:45:00",
    "source": "Positive test",
    "event": "The teacher successfully views an assigned record and only approved fields.",
    "meaning": "Legitimate use remains available."
  },
  {
    "time": "09:48:00",
    "source": "Negative test",
    "event": "Unassigned, wrong-tenant, wrong-role, missing-session, expired-session, and revoked-session requests are denied.",
    "meaning": "Several identity, session, and authorization failure cases are controlled."
  },
  {
    "time": "10:00:00",
    "source": "Role change",
    "event": "The fictional teacher role is removed in the test identity system and existing sessions are refreshed or revoked according to policy.",
    "meaning": "Current role state replaces stale privilege."
  },
  {
    "time": "10:05:00",
    "source": "Role test",
    "event": "The old session cannot access teacher routes after the role change.",
    "meaning": "Stale authorization is not preserved."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No unexplained cross-tenant or unassigned-record results appear and session source health remains normal.",
    "meaning": "Short-term operational evidence supports the controls."
  },
  {
    "time": "Day 30",
    "source": "Access review",
    "event": "The account owner confirms the teacher role, active sessions, recovery method, and application access remain appropriate.",
    "meaning": "Lifecycle review maintains least privilege over time."
  }
];

const commonMistakes = [
  "Treating fictional authentication, session recognition, authorization, user intent, and business approval as the same decision.",
  "Trusting client-supplied account, role, tenant, permission, object owner, or workflow state.",
  "Checking only route access while skipping object, field, action, tenant, workflow, privileged, and service authorization.",
  "Assuming a valid session remains trustworthy after role changes, password changes, recovery, account disablement, or risk events.",
  "Rotating fictional sessions only at login while keeping old sessions active after privilege elevation or recovery.",
  "Clearing only the browser cookie during logout without invalidating server-side session state.",
  "Using one broad administrator role for exports, account recovery, role changes, configuration, and approvals.",
  "Returning full fictional objects to the browser and hiding restricted fields only in the user interface.",
  "Allowing high-impact actions through old ordinary sessions without reauthentication, confirmation, approval, or idempotency.",
  "Logging secrets, full tokens, complete session identifiers, recovery evidence, or unnecessary personal data.",
  "Testing only approved access and skipping wrong-role, wrong-tenant, wrong-object, expired, revoked, stale-role, and duplicate cases.",
  "Publishing real account names, source code, tokens, cookies, sessions, logs, or private identity data in a portfolio artifact."
];

const quizQuestions = [
  {
    "question": "Which statement correctly separates fictional authentication and authorization?",
    "choices": [
      "Authentication evaluates identity evidence; authorization decides whether the recognized identity may perform a specific action on a specific object.",
      "Authentication and authorization are identical.",
      "Authorization creates a password.",
      "Authentication proves every business action is approved."
    ],
    "answer": 0,
    "explanation": "A successfully authenticated account can still be denied a protected object or action."
  },
  {
    "question": "Why should a fictional session rotate after sign-in or privilege elevation?",
    "choices": [
      "It replaces earlier session state across a trust change and allows the old identifier to be invalidated.",
      "It removes the need for expiration.",
      "It grants every role.",
      "It proves user intent."
    ],
    "answer": 0,
    "explanation": "Rotation helps ensure higher-trust state is connected to a new identifier."
  },
  {
    "question": "Which object-authorization design is strongest?",
    "choices": [
      "Resolve the fictional object under the trusted tenant and verify role, ownership or assignment, action, field scope, workflow state, and session.",
      "Trust the object ID in the URL.",
      "Hide the link in the browser.",
      "Allow every signed-in user."
    ],
    "answer": 0,
    "explanation": "Object access requires trusted server-side context and an exact action decision."
  },
  {
    "question": "What should fictional logout do?",
    "choices": [
      "Invalidate server-side session state, clear browser state, revoke supported tokens where needed, record the event, and confirm access denial.",
      "Only close the browser tab.",
      "Only hide the account menu.",
      "Keep all other sessions active automatically."
    ],
    "answer": 0,
    "explanation": "Logout should end recognized access, not only remove a visible cookie."
  },
  {
    "question": "Why should high-impact fictional actions require reauthentication?",
    "choices": [
      "Fresh verification reduces reliance on an old ordinary session before a sensitive action.",
      "Reauthentication replaces authorization.",
      "It makes duplicate actions impossible by itself.",
      "It proves business approval."
    ],
    "answer": 0,
    "explanation": "Reauthentication strengthens identity assurance but still needs authorization, confirmation, and business controls."
  },
  {
    "question": "What should happen after a fictional role is removed?",
    "choices": [
      "Current access must reflect the new role state, including session refresh or revocation according to policy.",
      "Old sessions should keep the role until they naturally expire months later.",
      "Only the browser menu should change.",
      "The account should gain administrator access."
    ],
    "answer": 0,
    "explanation": "Stale authorization should not remain active after role changes."
  },
  {
    "question": "Which closure plan is strongest after a fictional identity and authorization finding?",
    "choices": [
      "Validate sign-in, session creation, rotation, expiration, revocation, route, object, field, tenant, workflow, privileged actions, lifecycle, monitoring, rollback, residual risk, and owner approval.",
      "Close after one successful login.",
      "Close after hiding the route.",
      "Close because the user apologized."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies the complete identity, session, authorization, and lifecycle chain."
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

function IdentityFlowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Identity and Session Flow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Discovery to Revocation
      </h2>

      <div className="mt-6 grid gap-5">
        {identityFlow.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.stage}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Required checks
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.checks}
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

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Failure mode
                </p>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.failureMode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AuthorizationLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authorization Layers
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Separate Access Decisions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {authorizationLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Trusted data
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.trustedData}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Weak pattern
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakPattern}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong pattern
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongPattern}
              </p>
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
        Session Security
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls for Current Trust
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sessionControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.control}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Risk
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
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

            <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
              Owner: {item.owner}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountLifecycleGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Account Lifecycle
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Stages from Provisioning to Deletion
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {accountLifecycle.map((item) => (
          <div
            key={item.stage}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.stage}</h3>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Secure pattern
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.securePattern}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Risk
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CodeReviewGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Code Review
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Questions for Identity and Access Code
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {codeReviewQuestions.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.area}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
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
                Warning
              </p>

              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.warning}
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
        Review Identity, Sessions, and Access in Six Steps
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

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Identity Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Teacher Account from Provisioning to Access Review
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.35fr_1fr_1fr]"
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

export default function AuthenticationSessionAndAccessControlCodePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I9
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.4 Authentication, Session, and Access Control Code
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional developers verify identity, create and maintain
            secure sessions, enforce route, object, field, tenant, workflow,
            privileged, and service authorization, manage account lifecycle,
            preserve structured evidence, and validate both approved and denied
            access.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I9: Secure Coding Basics"
          lessonTitle="Authentication, Session, and Access Control Code"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional authentication, session recognition, authorization, user intent, and business approval are separate decisions.",
            "I will review current server-validated identity, session, tenant, role, object, action, and workflow state.",
            "I will test both legitimate access and wrong-role, wrong-tenant, wrong-object, expired, revoked, stale-role, and duplicate conditions.",
            "I will use only supplied fictional code-review notes, accounts, sessions, logs, objects, transactions, and organizations.",
            "I will never access real accounts or publish real passwords, factors, cookies, tokens, sessions, source code, logs, or private identity data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Successful Sign-In Does Not Grant Every Object or Action"
        >
          <p className="leading-8">
            A fictional teacher can authenticate correctly, hold a valid session,
            and still be unauthorized for another teacher’s student record. An
            administrator can have the right role but still need recent
            reauthentication and dual approval for an export. A disabled account
            can still create risk if old sessions remain active. Secure code
            reevaluates current trust at every important boundary.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak decision
              </p>

              <p className="mt-2 leading-7">
                “The fictional user is signed in and has the teacher role, so
                the requested record can be returned.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong decision
              </p>

              <p className="mt-2 leading-7">
                “Verify the current account and session, trusted tenant, exact
                record, assignment, role, requested fields, action, workflow,
                and any required step-up approval before returning data.”
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
          title="Identity Controls Must Remain Current Throughout the Request"
        >
          <p className="leading-8">
            Fictional accounts change roles, devices, risk, projects, tenants,
            employment state, and recovery status. Protected objects also change
            ownership, assignment, sensitivity, and workflow state. Secure code
            cannot rely only on information stored at login. It must evaluate the
            current identity and current resource relationship before every
            protected action.
          </p>
        </SectionCard>

        <IdentityFlowGuide />
        <AuthorizationLayerGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Identity–Session–Object–Action–Evidence Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Identity", "Which fictional account or service is recognized, and how was it verified?"],
              ["Session", "Is the fictional session current, unexpired, unrevoked, correctly scoped, and aligned with current account state?"],
              ["Tenant and object", "Which fictional tenant and exact record, file, account, report, or transaction is involved?"],
              ["Action", "Which fictional read, update, export, role change, approval, recovery, or configuration action is requested?"],
              ["Policy", "Which fictional role, relationship, workflow, reauthentication, approval, and least-privilege rules apply?"],
              ["Evidence", "Which fictional decision, database, transaction, browser, lifecycle, monitoring, and owner records prove the result?"],
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

        <SessionControlGuide />
        <AccountLifecycleGuide />
        <CodeReviewGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Identity, Session, and Access Control Terms
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
          title="Fake Identity and Access Code Review Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student-support applications."
          metrics={[
            {
              label: "Protected routes",
              value: "84",
              note: "Fictional record, reporting, messaging, file, account, recovery, administration, and configuration routes.",
            },
            {
              label: "Central-policy coverage",
              value: "77",
              note: "Routes using approved identity, session, tenant, object, action, and workflow authorization.",
            },
            {
              label: "Open findings",
              value: "7",
              note: "Object relationship, field filtering, stale role, recovery, privileged reauthentication, service scope, and logout cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Object Authorization Missing from Teacher Record Route"
          severity="High"
          time="09:14 AM"
          source="Fake Identity and Access Review Console"
          details="A fictional teacher account authenticates with approved factors and receives a protected session. The reviewed route checks authentication and teacher role but does not verify the trusted assignment relationship. A supplied safe test returns an unassigned student-support record in the test environment."
          recommendation="Block the route from release, preserve identity, session, code, authorization, and database evidence, implement centralized server-side tenant and object authorization, revoke the reviewed test session, validate assigned and denied cases, review field filtering, monitor, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Identity, Session, and Authorization Timeline"
          logs={[
            "08:00:00 PROVISION account='teacher-204' source='employment_record' tenant='meadowbrook'",
            "08:05:00 ACTIVATE factor='authenticator' recovery='approved'",
            "09:12:00 SIGN_IN account='teacher-204' factor1='pass' factor2='pass' device='managed-17'",
            "09:12:01 SESSION_CREATE secure='true' http_only='true' same_site='Lax'",
            "09:14:00 REQUEST route='/support/record' object='record-884'",
            "09:14:01 ROUTE_CHECK authenticated='true' role='teacher' assignment_check='missing'",
            "09:14:02 DATABASE unassigned_record='returned'",
            "09:18:00 CONTAIN route='blocked_from_release' session='revoked'",
            "09:30:00 REMEDIATE tenant='verified' assignment='verified' object='verified' fields='filtered'",
            "09:45:00 POSITIVE_TEST assigned_record='pass'",
            "09:48:00 NEGATIVE_TEST unassigned='deny' wrong_tenant='deny' wrong_role='deny' expired='deny' revoked='deny'",
            "10:00:00 ROLE_CHANGE teacher_role='removed' sessions='refresh_or_revoke'",
            "10:05:00 ROLE_TEST old_session_teacher_access='deny'",
            "DAY7 MONITOR cross_tenant_results='0' source_health='normal'",
            "DAY30 ACCESS_REVIEW role='confirmed' sessions='reviewed' recovery='reviewed'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Identity and Access Conclusion Is Best Supported?"
          evidence={[
            "The fictional teacher account was provisioned from an approved source.",
            "The account completed approved factors and received a protected session.",
            "The route verified authentication and teacher role.",
            "The route did not verify the record assignment relationship.",
            "A supplied safe test returned an unassigned record in the test environment.",
            "The affected route was blocked from release and the reviewed session was revoked.",
            "The remediation verifies tenant, object, assignment, role, action, field scope, and session state.",
            "Assigned access passes while unassigned, wrong-tenant, wrong-role, missing, expired, and revoked-session cases are denied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional authentication and session controls worked, but the route had a confirmed object-authorization weakness in the test environment; release containment prevented deployment, and the remediated policy passed the reviewed positive and negative tests.",
            "The identity provider was fully compromised.",
            "A valid session made assignment checks unnecessary.",
            "The entire production database was copied.",
          ]}
          bestAnswer={0}
          explanation="The evidence separates successful authentication and session creation from a specific object-authorization failure, controlled release, and validated remediation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Identity and Access Code"
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
          title="Complete a Fictional Identity, Session, and Access Code Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Identity and Access Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty-four supplied fictional records covering
                provisioning, activation, sign-in, factors, sessions, cookies,
                rotation, expiration, revocation, roles, tenants, objects,
                fields, workflow, recovery, privileged actions, service
                identities, code review, tests, monitoring, and access review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Map fictional accounts, factors, devices, identity providers, applications, sessions, tenants, roles, and authoritative sources.</li>
                <li>Trace session creation, attributes, rotation, idle and maximum lifetime, renewal, revocation, logout, and recovery.</li>
                <li>Review route, object, field, action, tenant, workflow, privileged, and service authorization.</li>
                <li>Inspect trusted identity sources, central policies, object resolution, current-state checks, safe errors, and structured events.</li>
                <li>Design positive and wrong-role, wrong-tenant, wrong-object, expired, revoked, stale-role, duplicate, and recovery tests.</li>
                <li>Document findings, owners, remediation, monitoring, rollback, evidence gaps, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            attempt sign-ins, test recovery, inspect private source code, or
            publish real passwords, factors, cookies, tokens, sessions, account
            names, identity logs, or private organizational data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Route Uses a Client-Supplied Role"
          scenario="A fictional administrative route reads a role value from browser state and allows the page when the value says administrator."
          choices={[
            {
              label: "Choice A",
              response:
                "Remove trust in client role data, resolve current account and role from server-validated session and authoritative policy, enforce exact privileged action checks, add wrong-role and stale-role tests, and record the decision.",
              outcome:
                "Best defensive choice. Authorization depends on current trusted server state.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the design because the browser interface is hidden from ordinary users.",
              outcome:
                "Unsafe. Client state and hidden navigation do not enforce server authorization.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Add a warning telling users not to edit browser state.",
              outcome:
                "Insufficient. User instructions do not replace a trusted control.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Password Change Leaves Old Sessions Active"
          scenario="A fictional account changes its password after a security concern, but sessions on two other devices remain recognized."
          choices={[
            {
              label: "Choice A",
              response:
                "Review policy and risk, revoke all affected sessions, rotate trust state, require fresh authentication, notify the owner, verify old-session denial, monitor, and document the account event.",
              outcome:
                "Best defensive choice. Important trust changes should update active session state.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Wait for the old sessions to expire naturally.",
              outcome:
                "Risky. The security concern requires current access to be reevaluated.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Hide the session inventory from the user.",
              outcome:
                "Unsafe. Reduced visibility does not revoke access.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authentication, Session, and Access Control Code Checklist"
          items={[
            "I separate fictional authentication, session recognition, authorization, user intent, and business approval.",
            "I use only server-validated identity, session, tenant, role, object, action, and workflow context.",
            "I create fresh fictional sessions at trust changes and use secure cookie or token scope, lifetime, rotation, and revocation.",
            "I enforce route, object, field, action, tenant, workflow, privileged, and service authorization.",
            "I resolve fictional protected objects under the trusted tenant before making access decisions.",
            "I require reauthentication, confirmation, approval, and idempotency for selected high-impact actions.",
            "I update access after role, password, recovery, account-state, device, and risk changes.",
            "I maintain account provisioning, review, change, suspension, disablement, deletion, and audit evidence.",
            "I validate approved and wrong-role, wrong-tenant, wrong-object, expired, revoked, stale-role, duplicate, and recovery cases.",
            "I use only fictional evidence and never expose or access real accounts, credentials, sessions, logs, code, or private data.",
          ]}
        />

        <MiniQuiz
          title="I9.4 Mini Quiz: Authentication, Session, and Access Control Code"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Identity, Session, and Access Control Code Review using at least forty-four provisioning, activation, sign-in, factor, device, session, cookie, rotation, expiration, revocation, role, tenant, object, field, workflow, recovery, privileged-action, service-identity, code-review, test, monitoring, and access-review records. Include an identity-flow map, session-control matrix, authorization coverage map, account-lifecycle review, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional accounts, devices, sessions, roles, tenants, objects, routes, logs, code-review notes, tests, and organizations.",
            "For each protected action, identify current identity, session, tenant, object, field scope, action, workflow state, policy, evidence, and owner.",
            "Keep authentication success, valid session, authorization, user intent, data state, and business approval separate.",
            "Do not include real passwords, factors, cookies, tokens, source code, account names, identity logs, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication proves selected identity evidence; it does not grant every object, field, action, tenant, or workflow.",
            "Sessions must remain current through secure creation, scope, lifetime, rotation, revocation, logout, recovery, and role changes.",
            "Strong authorization evaluates route, object, field, action, tenant, workflow, privileged, and service access using trusted server data.",
            "High-impact actions need fresh verification, exact privilege, user confirmation, approval where required, idempotency, and strong evidence.",
            "Account lifecycle and access reviews prevent stale identities, roles, sessions, service access, and exceptions from remaining active.",
            "Professional closure validates both legitimate access and denied conditions with monitoring, rollback, evidence gaps, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I9
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