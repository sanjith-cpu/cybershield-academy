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
const modulePath = `${trackPath}/identity-and-access-management`;
const previousLesson = modulePath;
const nextLesson = `${modulePath}/accounts-roles-and-least-privilege`;
const objectives = [
"Explain the difference between identity, account, credential, authentication, authorization, permission, role, session, and access decision.",
"Interpret fictional sign-in and access evidence without assuming that a successful sign-in proves the physical person, safe intent, or approved later activity.",
"Evaluate fictional access decisions using user, account, device, application, resource, role, policy, session, business purpose, owner, time, and location context.",
"Distinguish authentication failures, authorization denials, session problems, account-state issues, policy enforcement, and evidence gaps.",
"Create a professional fictional Identity Access Decision Record with confirmed facts, confidence, limitations, owner, validation, and residual risk.",
];
const vocabulary = [
["Identity", "The fictional person, service, device, application, or workload that an account is intended to represent."],
["Account", "A technical record used by a fictional system to represent an identity and store identifiers, state, roles, groups, permissions, and policy relationships."],
["Identifier", "A value such as a fictional username, email address, account ID, device ID, or service name used to distinguish one account or identity from another."],
["Credential", "A secret, key, certificate, token, or other proof presented during authentication. Credentials must never be requested or exposed in this lesson."],
["Authentication", "The process of evaluating evidence that an account or session should be treated as the claimed fictional identity."],
["Authorization", "The process of deciding whether an authenticated fictional account or session may perform a requested action on a resource."],
["Permission", "A specific allowed action such as read, edit, approve, administer, or export within a fictional system."],
["Role", "A named collection of fictional permissions associated with a job function, service function, or responsibility."],
["Session", "A time-limited authenticated context that allows a fictional user, service, device, or application to continue interacting without reauthenticating for every action."],
["Access decision", "The final allow, deny, challenge, restrict, or step-up result produced by policy, account state, authentication, authorization, and context."],
["Claim", "A fictional statement about an identity or session, such as role, department, device state, assurance level, or authentication method."],
["Trust boundary", "A point where a fictional system decides whether evidence from a user, device, application, network, or service can be relied upon for a specific purpose."],
];
const identityModel = [
{
layer: "Identity",
meaning:
"The fictional person, service, device, or application the organization intends to recognize.",
example:
"Student researcher, teacher, finance clerk, reporting service, managed laptop, or learning application.",
limitation:
"An identity is a business or logical concept. Systems usually act on accounts and sessions, not a person’s name alone.",
},
{
layer: "Account",
meaning:
"The technical record representing the fictional identity in a directory, application, device, or service.",
example:
"training-user-31, svc-report-training, device-laptop-31, or app-learning-portal.",
limitation:
"One identity may have several accounts, and one shared account can incorrectly represent several people.",
},
{
layer: "Authentication",
meaning:
"The system checks whether the presented fictional evidence satisfies the required assurance for the account or session.",
example:
"Password plus MFA from a managed device under an approved conditional-access policy.",
limitation:
"Successful authentication proves only that the required evidence was accepted, not who is physically present or whether later actions are approved.",
},
{
layer: "Authorization",
meaning:
"The system checks whether the authenticated account or session may access the requested fictional resource or action.",
example:
"A teacher account may view class reports but may not manage finance settings.",
limitation:
"Authorization can be wrong if roles, groups, resource ownership, inherited permissions, or policy conditions are stale or too broad.",
},
{
layer: "Session",
meaning:
"The authenticated context used for later fictional actions until expiration, revocation, reauthentication, or policy change.",
example:
"A session begins after MFA and remains active for the approved learning application.",
limitation:
"A previously valid session can become risky if device state, account status, role, location, or policy changes.",
},
{
layer: "Access decision",
meaning:
"The final allow, deny, challenge, limit, or step-up result for the fictional request.",
example:
"Allow report viewing, deny user administration, or require fresh MFA before exporting sensitive data.",
limitation:
"The decision reflects the available policy and evidence at that moment, not permanent safety or intent.",
},
];
const evidenceSources = [
{
source: "Identity-provider sign-in record",
supports:
"The fictional account, application, device, source, authentication method, result, reason, policy, session, and time recorded by the identity platform.",
limitation:
"Does not automatically prove the physical person, safe intent, or approved actions after sign-in.",
},
{
source: "Directory account record",
supports:
"Account state, identifier, owner, department, groups, roles, creation, expiration, disablement, and manager relationship.",
limitation:
"Directory data can be stale, incomplete, duplicated, or different from application-local permissions.",
},
{
source: "Application authorization event",
supports:
"Which fictional account or session requested which resource or action and whether the application allowed or denied it.",
limitation:
"The application event may not explain all inherited roles, external policy, or business approval.",
},
{
source: "Device and endpoint record",
supports:
"Managed state, device identity, compliance, user association, authentication event, browser, session, and security posture.",
limitation:
"A managed device does not prove that the expected person is using it at that moment.",
},
{
source: "Role and group membership",
supports:
"Direct or inherited fictional access through groups, roles, nested membership, temporary assignment, or application mapping.",
limitation:
"Membership alone does not prove current business need, correct scope, or active owner approval.",
},
{
source: "Access request and approval",
supports:
"Requester, owner, purpose, requested permissions, duration, approver, conditions, and expected outcome.",
limitation:
"The approved request may differ from the implemented technical access.",
},
{
source: "Session and token record",
supports:
"Session ID, issue time, expiration, authentication assurance, application, device, and revocation state.",
limitation:
"A valid session does not prove every later action is authorized or intended.",
},
{
source: "Owner and business context",
supports:
"The fictional job function, service purpose, application role, resource sensitivity, expected workflow, and accountable owner.",
limitation:
"Human descriptions may be incomplete or not match the current technical state.",
},
];
const authVsAuthz = [
{
scenario: "Correct password, wrong resource permission",
authentication:
"The fictional account successfully satisfies the sign-in policy.",
authorization:
"The application denies access because the account lacks the required report-administrator permission.",
conclusion:
"Authentication succeeds; authorization fails.",
},
{
scenario: "Valid role, failed MFA",
authentication:
"The fictional account has the correct role but does not complete the required MFA challenge.",
authorization:
"The resource permission exists, but no trusted session is established.",
conclusion:
"Authorization would allow the role, but authentication is incomplete.",
},
{
scenario: "Expired account with remembered session",
authentication:
"A browser presents an older fictional session associated with the account.",
authorization:
"The identity platform denies continued access because the account is expired or disabled.",
conclusion:
"Prior authentication does not override current account state.",
},
{
scenario: "Authenticated user requests an administrative action",
authentication:
"The user signs in successfully with the required factors.",
authorization:
"The application allows normal viewing but denies role-management because the account lacks privileged authorization.",
conclusion:
"A successful sign-in does not grant every action.",
},
{
scenario: "Service account with correct permission but wrong source",
authentication:
"The fictional service identity presents valid service credentials.",
authorization:
"Policy denies the request because the service is connecting from an unapproved workload or environment.",
conclusion:
"Authorization can depend on context in addition to the account’s permissions.",
},
{
scenario: "Temporary role after expiration",
authentication:
"The fictional user authenticates successfully.",
authorization:
"The temporary role is no longer active, so the protected action is denied.",
conclusion:
"Authentication remains valid while authorization changes with role lifecycle.",
},
];
const accessDecisionInputs = [
{
input: "Identity and account",
question:
"Which fictional person, service, device, or application does the account represent, and who owns it?",
risk:
"Shared, duplicate, orphaned, stale, or incorrectly mapped accounts weaken accountability.",
},
{
input: "Authentication assurance",
question:
"Which factor, MFA, device, session, certificate, token, or policy evidence was accepted?",
risk:
"A successful result may use weaker assurance than the requested resource requires.",
},
{
input: "Account state",
question:
"Is the fictional account active, disabled, locked, expired, suspended, temporary, or pending review?",
risk:
"A remembered session or cached permission can conflict with the current lifecycle state.",
},
{
input: "Role, group, and permission",
question:
"Which direct, inherited, nested, temporary, or application-local access grants the requested action?",
risk:
"Nested membership or stale roles can create excessive or hidden access.",
},
{
input: "Resource and action",
question:
"What exact fictional file, report, application, setting, database, group, or administrative action is requested?",
risk:
"Broad resource names can hide differences between view, edit, export, approve, and administer.",
},
{
input: "Device and environment",
question:
"Is the fictional device managed, compliant, recognized, shared, remote, or located in an approved environment?",
risk:
"Device context can be stale or misattributed.",
},
{
input: "Session and time",
question:
"When was the fictional session created, when does it expire, and does the action require fresh authentication?",
risk:
"Long-lived sessions can outlast changes in role, account state, or device trust.",
},
{
input: "Business purpose and owner",
question:
"Does the requested access match the fictional user’s job or service purpose, owner approval, duration, and sensitivity?",
risk:
"Technically allowed access can still be inappropriate or unnecessary.",
},
];
const decisionOutcomes = [
{
outcome: "Allow",
directMeaning:
"The fictional request satisfied the current authentication, authorization, account-state, session, and policy requirements.",
doesNotProve:
"The physical person, intent, business approval, or safety of every later action.",
validation:
"Confirm the correct account, role, resource, action, owner, and expected workflow.",
},
{
outcome: "Deny",
directMeaning:
"The fictional request failed one or more current policy or permission conditions.",
doesNotProve:
"That the request was malicious or that the account should be disabled.",
validation:
"Identify whether the cause is authentication, authorization, account state, device, session, resource, or policy.",
},
{
outcome: "Challenge",
directMeaning:
"The fictional system requires more authentication evidence before continuing.",
doesNotProve:
"That the user is suspicious or that the earlier sign-in was invalid.",
validation:
"Review resource sensitivity, session age, device state, location, and required assurance.",
},
{
outcome: "Restrict",
directMeaning:
"The fictional system permits limited access while denying a more sensitive action.",
doesNotProve:
"That all lower-risk actions are harmless or correctly approved.",
validation:
"Confirm exactly which permissions, data, exports, settings, and administrative capabilities remain available.",
},
{
outcome: "Expire or revoke",
directMeaning:
"The fictional session, token, temporary role, or account is no longer accepted.",
doesNotProve:
"That every application immediately removed cached access.",
validation:
"Verify identity-provider, application, device, and session state across the relevant systems.",
},
{
outcome: "Step-up",
directMeaning:
"The fictional system requires stronger authentication or fresh approval for a sensitive action.",
doesNotProve:
"That the current session is malicious.",
validation:
"Confirm the step-up condition, resource sensitivity, successful challenge, session update, and later action.",
},
];
const workflow = [
{
step: "1",
title: "Identify the subject",
detail:
"Determine which fictional identity, account, service, device, application, and owner are involved.",
},
{
step: "2",
title: "Identify the request",
detail:
"Record the exact fictional resource, action, application, environment, time, and business purpose.",
},
{
step: "3",
title: "Review authentication",
detail:
"Check factors, MFA, device, source, account state, session, policy result, and evidence limitations.",
},
{
step: "4",
title: "Review authorization",
detail:
"Trace roles, groups, direct permissions, inherited access, temporary access, resource rules, and ownership.",
},
{
step: "5",
title: "Classify the decision",
detail:
"Separate allow, deny, challenge, restrict, revoke, expected policy enforcement, error, and evidence-incomplete outcomes.",
},
{
step: "6",
title: "Validate and document",
detail:
"Confirm business need, correct implementation, user experience, monitoring, owner acceptance, and residual risk.",
},
];
const authenticationEvidence = [
{
category: "Knowledge evidence",
example:
"A fictional password or recovery response presented by the account.",
supports:
"The system accepted the supplied secret under the configured policy.",
limitation:
"A secret can be shared, reused, exposed, entered on the wrong device, or used by someone other than the intended person.",
},
{
category: "Possession evidence",
example:
"A fictional security key, authenticator application, certificate, registered device, or one-time approval.",
supports:
"The account or session had access to the registered possession factor.",
limitation:
"Possession does not automatically prove the expected person is using the factor or that the request is legitimate.",
},
{
category: "Inherence evidence",
example:
"A fictional biometric result recorded by an approved device.",
supports:
"The device accepted its configured local verification process.",
limitation:
"Identity systems may receive only the result, not the underlying biometric evidence, and device trust still matters.",
},
{
category: "Device evidence",
example:
"A fictional managed-device ID, compliance state, certificate, platform, browser, or endpoint-health result.",
supports:
"The request is associated with the recorded device context.",
limitation:
"A trusted device can be shared, left unlocked, misattributed, or used through a valid existing session.",
},
{
category: "Location and network evidence",
example:
"A fictional source region, network zone, connection method, or approved environment.",
supports:
"The sign-in originated from the recorded network or location context.",
limitation:
"Network translation, shared gateways, mobile networks, and remote services can make location approximate.",
},
{
category: "Behavior and risk evidence",
example:
"A fictional identity platform compares timing, device familiarity, sign-in pattern, application, and prior activity.",
supports:
"The system observed a pattern that matched or differed from its current baseline.",
limitation:
"Risk scores are tool interpretations and can be affected by incomplete history, shared behavior, travel, or new workflows.",
},
{
category: "Administrative approval",
example:
"A fictional owner or administrator approves temporary access, role activation, recovery, or step-up.",
supports:
"The documented approval exists for the stated purpose, scope, and time.",
limitation:
"Approval does not prove the technical access exactly matches the request or that the approver had complete context.",
},
{
category: "Service-to-service evidence",
example:
"A fictional workload uses a certificate, managed identity, signed token, or approved platform relationship.",
supports:
"The service request satisfied the configured non-human authentication process.",
limitation:
"The service identity can still have excessive permissions, stale ownership, weak rotation, or an unexpected source workload.",
},
];
const authorizationPaths = [
{
path: "Direct permission",
example:
"training-user-31 receives fictional report-edit permission directly.",
advantage:
"The exact technical grant can be identified easily.",
risk:
"Direct grants can accumulate outside standard role review and become difficult to govern.",
},
{
path: "Group membership",
example:
"training-user-31 joins the report-reviewers group, which grants view access.",
advantage:
"Many accounts can receive consistent access through one governed membership.",
risk:
"Nested groups, stale memberships, or broad group purpose can hide excessive access.",
},
{
path: "Role assignment",
example:
"A fictional teacher role grants class-report viewing and comment permissions.",
advantage:
"Access aligns with a defined job or service function.",
risk:
"Role design can become too broad, and users may retain old roles after changing responsibilities.",
},
{
path: "Attribute-based decision",
example:
"A fictional policy allows report viewing when department, device state, resource sensitivity, and time conditions match.",
advantage:
"The decision can reflect several context attributes.",
risk:
"Incorrect or stale attributes can deny valid access or allow inappropriate access.",
},
{
path: "Resource ownership",
example:
"A fictional document owner shares one report with one reviewer for seven days.",
advantage:
"The resource owner can approve a narrow business collaboration.",
risk:
"Owner-managed sharing can become inconsistent or remain active after the need ends.",
},
{
path: "Temporary elevation",
example:
"A fictional administrator activates a privileged role for thirty minutes after approval and fresh MFA.",
advantage:
"Standing privilege is reduced while required work remains possible.",
risk:
"Weak expiration, approval, session revocation, or monitoring can extend the elevated access.",
},
{
path: "Application-local permission",
example:
"The fictional learning application stores an editor permission separate from the central directory.",
advantage:
"The application can represent detailed resource-specific actions.",
risk:
"Central access reviews may miss local permissions and application-specific owners.",
},
{
path: "Emergency access",
example:
"A fictional break-glass account is used only during an approved service emergency.",
advantage:
"Critical recovery can continue if normal identity services are unavailable.",
risk:
"Emergency identities require strict storage, monitoring, testing, owner review, and post-use investigation.",
},
];
const sessionStates = [
{
state: "New session",
meaning:
"The fictional account has just completed the required authentication process.",
review:
"Confirm factors, device, application, policy, account state, source, session ID, issue time, and expected purpose.",
},
{
state: "Remembered session",
meaning:
"The fictional browser or application reuses an earlier trusted session.",
review:
"Check session age, device ownership, account changes, current policy, resource sensitivity, and whether fresh authentication is required.",
},
{
state: "Step-up session",
meaning:
"The fictional user completes stronger or fresh authentication before a sensitive action.",
review:
"Confirm the challenge was linked to the correct session, resource, action, device, and time.",
},
{
state: "Restricted session",
meaning:
"The fictional account may use limited features but cannot perform sensitive actions.",
review:
"Identify which actions remain available, why restrictions apply, and whether the user receives clear guidance.",
},
{
state: "Expired session",
meaning:
"The fictional session has passed its approved lifetime.",
review:
"Confirm later requests require authentication again and no application continues using stale cached access.",
},
{
state: "Revoked session",
meaning:
"The fictional session is invalidated because of account disablement, role change, risk response, user request, or policy action.",
review:
"Verify revocation across identity, application, device, browser, and other active-session systems.",
},
{
state: "Orphaned session",
meaning:
"A fictional application session remains active even though the central account, role, or employment state changed.",
review:
"Treat the mismatch as a lifecycle and authorization gap requiring owner review and controlled revocation.",
},
{
state: "Service session",
meaning:
"A fictional application or workload uses a non-human identity for repeated automated actions.",
review:
"Confirm workload source, owner, credential or managed-identity state, permission scope, rotation, logging, and expiration.",
},
];
const failureGuide = [
{
signal: "Incorrect credential",
directMeaning:
"The fictional authentication system rejected the presented secret or proof.",
possibleCauses:
"Mistyped input, stale saved credential, password change, expired credential, wrong account, or unauthorized use.",
nextEvidence:
"Account state, application, device, source, failure reason, reset history, support record, and later success.",
},
{
signal: "MFA denied or not completed",
directMeaning:
"The required fictional possession or step-up factor did not produce an accepted result.",
possibleCauses:
"User rejection, timeout, unavailable device, wrong session, unexpected request, policy error, or unauthorized attempt.",
nextEvidence:
"Session ID, device, application, factor, reason, user report, account activity, and related sign-ins.",
},
{
signal: "Account locked",
directMeaning:
"The fictional account reached a configured lockout or protection condition.",
possibleCauses:
"Repeated mistakes, stale applications, automated retries, shared account use, or unauthorized attempts.",
nextEvidence:
"Failure count, source devices, applications, reset activity, owner, timing, and successful recovery.",
},
{
signal: "Authorization denied",
directMeaning:
"The fictional session authenticated, but the requested resource or action was not permitted.",
possibleCauses:
"Missing role, expired temporary access, wrong resource, policy condition, stale group mapping, or intentional least privilege.",
nextEvidence:
"Role, group, direct permission, resource rule, owner approval, application event, and change history.",
},
{
signal: "Conditional-access block",
directMeaning:
"A fictional contextual policy denied or restricted access.",
possibleCauses:
"Unmanaged device, unsupported application, wrong environment, insufficient assurance, risky session, or policy misconfiguration.",
nextEvidence:
"Policy version, device state, application, account, source, exception, owner, and test results.",
},
{
signal: "Session expired",
directMeaning:
"The fictional session exceeded its approved lifetime or required fresh authentication.",
possibleCauses:
"Normal timeout, resource sensitivity, policy change, administrative revocation, or browser-state mismatch.",
nextEvidence:
"Issue time, expiration, last use, resource, account state, policy, and later reauthentication.",
},
{
signal: "Account disabled or expired",
directMeaning:
"The fictional identity record is no longer active for normal access.",
possibleCauses:
"Lifecycle completion, temporary-access expiration, risk response, administrative mistake, or delayed reactivation.",
nextEvidence:
"Owner, lifecycle ticket, effective time, application sessions, group state, approval, and validation.",
},
{
signal: "Application error shown as access failure",
directMeaning:
"The fictional user cannot complete the action, but the cause may be an application or dependency failure rather than identity policy.",
possibleCauses:
"Application outage, broken role mapping, unavailable directory, session corruption, or backend error.",
nextEvidence:
"Application logs, request ID, service health, identity decision, resource state, and owner validation.",
},
];
const trustBoundaries = [
{
boundary: "User to device",
question:
"What evidence connects the fictional person or service to the device and account?",
caution:
"A device login or unlocked session does not permanently prove who is present.",
},
{
boundary: "Device to identity provider",
question:
"What fictional device, certificate, browser, application, network, and compliance evidence reaches the identity platform?",
caution:
"Device evidence can be missing, stale, shared, or different from the resource’s actual risk needs.",
},
{
boundary: "Identity provider to application",
question:
"Which fictional claims, session details, roles, assurance, and account state are sent to the application?",
caution:
"The application may map claims incorrectly or continue using older session data.",
},
{
boundary: "Application to resource",
question:
"Which fictional role, permission, ownership, resource rule, and action determine access?",
caution:
"Application authorization may differ from central directory membership.",
},
{
boundary: "Service to service",
question:
"Which fictional workload identity, token audience, source environment, permission, and owner authorize the request?",
caution:
"A valid service identity can be used from the wrong workload or with excessive permission.",
},
{
boundary: "Administrator to privileged action",
question:
"Which fictional approval, fresh authentication, temporary role, device, logging, and session controls apply?",
caution:
"Standing privilege and unmonitored elevation reduce accountability.",
},
];
const timeline = [
{
time: "09:00:00",
source: "Access request",
event:
"Fictional teacher Jordan Lee requests seven-day view access to the Northstar attendance dashboard.",
meaning:
"Provides identity, owner, purpose, requested resource, permission, and duration.",
},
{
time: "09:04:00",
source: "Resource owner",
event:
"Attendance owner approves dashboard-view access only.",
meaning:
"Defines the approved authorization scope.",
},
{
time: "09:10:00",
source: "Directory",
event:
"training-jlee is added to attendance-viewers with an expiration date.",
meaning:
"Shows the technical role path and lifecycle condition.",
},
{
time: "09:15:12",
source: "Identity provider",
event:
"training-jlee signs in from managed-laptop-44 using password and approved MFA.",
meaning:
"Supports successful authentication under the configured policy.",
},
{
time: "09:15:15",
source: "Session",
event:
"Session session-4410 is issued for the attendance application.",
meaning:
"Connects authentication with later application events.",
},
{
time: "09:15:20",
source: "Application",
event:
"Dashboard-view request is allowed through attendance-viewers.",
meaning:
"Matches the approved permission.",
},
{
time: "09:16:02",
source: "Application",
event:
"User-management request is denied because no administrative role is present.",
meaning:
"Shows successful authentication with correct least-privilege authorization denial.",
},
{
time: "Day 7 17:00",
source: "Directory",
event:
"Temporary attendance-viewers membership expires.",
meaning:
"The technical access should end at the approved time.",
},
{
time: "Day 7 17:02",
source: "Application",
event:
"An older application session still displays the dashboard until refresh.",
meaning:
"Reveals a session-revocation or claim-refresh gap.",
},
{
time: "Day 7 17:05",
source: "Identity provider",
event:
"The session is revoked and the application requires a new access decision.",
meaning:
"Restores alignment with current role state.",
},
{
time: "Day 7 17:06",
source: "Application",
event:
"Dashboard access is denied after session refresh.",
meaning:
"Validates expiration and authorization correction.",
},
{
time: "Day 8 09:00",
source: "Owner review",
event:
"Owner confirms access ended and the report documents the short session-lag residual risk.",
meaning:
"Completes business validation and evidence-based closure.",
},
];
const mistakes = [
"Using identity, account, credential, authentication, authorization, permission, role, and session as if they mean the same thing.",
"Assuming a successful sign-in proves the physical person, safe intent, or approved later actions.",
"Assuming an authorization denial proves malicious behavior.",
"Treating a familiar username or display name as strong identity proof.",
"Ignoring account state, temporary expiration, remembered sessions, and application-local access.",
"Reviewing only direct permissions and missing roles, groups, nested membership, resource sharing, or attribute-based policies.",
"Treating MFA success as proof that every later sensitive action should be allowed.",
"Assuming a disabled central account instantly ends every application session.",
"Using tool risk scores or access-decision labels without preserving source evidence and policy context.",
"Correcting access without an owner, approval, rollback, user communication, technical validation, and business validation.",
"Collecting or exposing credentials, private identity attributes, unnecessary personal data, or real account details.",
"Publishing real usernames, email addresses, device IDs, session IDs, tokens, roles, permissions, logs, screenshots, or internal identity architecture.",
];
const quizQuestions = [
{
question:
"What is authentication?",
choices: [
"The process of evaluating evidence that an account or session should be treated as the claimed fictional identity.",
"The process of granting every permission to a user.",
"The process of creating a resource owner.",
"The process of storing all application data.",
],
answer: 0,
explanation:
"Authentication establishes an accepted identity or session context. Authorization decides what that context may do.",
},
{
question:
"What is authorization?",
choices: [
"The process of deciding whether an authenticated fictional account or session may perform a requested action on a resource.",
"The process of proving the physical person with certainty.",
"The process of choosing a username.",
"The process of ending every session.",
],
answer: 0,
explanation:
"Authorization evaluates permissions, roles, policy, resource, action, context, and ownership.",
},
{
question:
"What does a successful sign-in directly support?",
choices: [
"The required fictional authentication evidence was accepted under the recorded policy and context.",
"The physical person is known with certainty.",
"Every later action is approved.",
"The account has every application permission.",
],
answer: 0,
explanation:
"A successful sign-in creates an authenticated context but does not prove intent, physical identity, or authorization for every action.",
},
{
question:
"A user signs in successfully but cannot open an administrative page. What is the strongest initial interpretation?",
choices: [
"Authentication succeeded, but authorization for the administrative resource may be absent or restricted.",
"The password must be incorrect.",
"The account is definitely compromised.",
"The application should grant administrative access automatically.",
],
answer: 0,
explanation:
"The distinction between sign-in and resource permission is central to identity analysis.",
},
{
question:
"Why can a remembered session create risk after temporary access expires?",
choices: [
"The application may continue using older session claims until refresh or revocation.",
"Remembered sessions always reveal passwords.",
"Temporary roles never expire.",
"Authorization no longer applies after the first sign-in.",
],
answer: 0,
explanation:
"Session state must remain aligned with current account, role, and policy state.",
},
{
question:
"Which evidence best supports an access decision review?",
choices: [
"Sign-in, account state, session, role or group, application action, resource rule, owner approval, and lifecycle evidence.",
"A username alone.",
"A dashboard color alone.",
"A successful MFA result alone.",
],
answer: 0,
explanation:
"Multiple technical and business sources are required for a defensible conclusion.",
},
{
question:
"What is the strongest response to a fictional authorization denial?",
choices: [
"Identify the exact account, session, role, permission, resource, action, policy, owner, and business need before deciding whether the denial is correct.",
"Grant the requested permission immediately.",
"Disable the user immediately.",
"Ignore the event because the sign-in succeeded.",
],
answer: 0,
explanation:
"A denial can represent correct least privilege, expired access, missing access, wrong mapping, or another policy condition.",
},
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
Module Homepage
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
function IdentityModelGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Identity Model
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Six Layers from Identity to Access Decision
</h2>
<div className="mt-6 grid gap-4">
{identityModel.map((item) => (
<div
key={item.layer}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.35fr_1fr_1fr_1fr]"
>
<div>
<p className="text-lg font-black text-cyan-100">{item.layer}</p>
</div>
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Meaning
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.meaning}
</p>
</div>
<div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Fictional example
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.example}
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
function EvidenceGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Evidence Matrix
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
What Identity and Access Evidence Can and Cannot Prove
</h2>
<div className="mt-6 grid gap-4">
{evidenceSources.map((item) => (
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
function AuthenticationAuthorizationGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Authentication vs Authorization
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Six Scenarios That Separate Sign-In from Permission
</h2>
<div className="mt-6 grid gap-5">
{authVsAuthz.map((item) => (
<div
key={item.scenario}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="text-xl font-black text-white">{item.scenario}</h3>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Authentication
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.authentication}
</p>
</div>
<div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
Authorization
</p>
<p className="mt-2 text-sm leading-6 text-purple-50">
{item.authorization}
</p>
</div>
<div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Conclusion
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.conclusion}
</p>
</div>
</div>
</div>
))}
</div>
</section>
);
}
function DecisionInputGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Access Decision Inputs
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Inputs That Shape an Access Decision
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{accessDecisionInputs.map((item) => (
<div
key={item.input}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.input}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.question}
</p>
<div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Risk
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.risk}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function DecisionOutcomeGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Access Outcomes
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Understand What Each Decision Does and Does Not Prove
</h2>
<div className="mt-6 grid gap-5">
{decisionOutcomes.map((item) => (
<div
key={item.outcome}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.3fr_1fr_1fr_1fr]"
>
<div>
<p className="text-lg font-black text-cyan-100">{item.outcome}</p>
</div>
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Direct meaning
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.directMeaning}
</p>
</div>
<div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Does not prove
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.doesNotProve}
</p>
</div>
<div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
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
function AuthenticationEvidenceGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Authentication Evidence
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Evidence Categories and Their Limits
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{authenticationEvidence.map((item) => (
<div
key={item.category}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.category}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.example}
</p>
<div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Supports
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.supports}
</p>
</div>
<div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
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
function AuthorizationPathGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Authorization Paths
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Ways Access Can Be Granted
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{authorizationPaths.map((item) => (
<div
key={item.path}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.path}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.example}
</p>
<div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Advantage
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.advantage}
</p>
</div>
<div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Governance risk
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.risk}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function SessionGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Session States
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Session States That Affect Later Access
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{sessionStates.map((item) => (
<div
key={item.state}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.state}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.meaning}
</p>
<div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Review
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.review}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function FailureGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Failure Interpretation
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Signals That Require Different Evidence
</h2>
<div className="mt-6 grid gap-5">
{failureGuide.map((item) => (
<div
key={item.signal}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.4fr_1fr_1fr_1fr]"
>
<div>
<p className="font-black text-cyan-100">{item.signal}</p>
</div>
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Direct meaning
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.directMeaning}
</p>
</div>
<div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Possible causes
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.possibleCauses}
</p>
</div>
<div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Next evidence
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.nextEvidence}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function TrustBoundaryGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Trust Boundaries
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Six Places Where Identity Evidence Changes Hands
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{trustBoundaries.map((item) => (
<div
key={item.boundary}
className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.boundary}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.question}
</p>
<div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Caution
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.caution}
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
Review an Access Decision in Six Steps
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
Access Timeline
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Follow Temporary Access from Request to Expiration
</h2>
<div className="mt-6 grid gap-3">
{timeline.map((item) => (
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
export default function IdentityAuthenticationAndAuthorizationPage() {
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
Module I6
</span>
<span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
Lesson 1 of 8
</span>
</div>
<h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
I6.1 Identity, Authentication, and Authorization
</h1>
<p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
Learn how defenders distinguish fictional identities, accounts,
credentials, authentication, authorization, permissions, roles,
sessions, and access decisions without overstating what any single
sign-in or policy event proves.
</p>
<div className="mt-8">
<Navigation />
</div>
</div>
</section>
<div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
<LessonProgressBar
track="High School Intermediate"
moduleTitle="I6: Identity and Access Management"
lessonTitle="Identity, Authentication, and Authorization"
lessonNumber={1}
totalLessons={8}
/>
<ReadinessCheck
title="Before You Start"
items={[
"I understand that identity, account, credential, authentication, authorization, permission, role, and session are different concepts.",
"I understand that a successful sign-in does not prove the physical person, safe intent, or approval for every later action.",
"I will preserve fictional sign-in, account, session, role, permission, application, owner, and lifecycle evidence.",
"I will separate authentication failures from authorization denials, account-state problems, session problems, and application errors.",
"I will use only fictional users, accounts, devices, applications, resources, sessions, roles, permissions, and organizations.",
]}
/>
<SectionCard
eyebrow="Professional Hook"
title="Signing In Successfully Does Not Mean an Account May Do Everything"
>
<p className="leading-8">
Authentication answers whether the fictional evidence is sufficient
to establish an account or session under the current policy.
Authorization answers whether that account or session may perform a
specific action on a specific resource. A user can authenticate
successfully and still be correctly denied administrative access.
</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
<p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
Weak response
</p>
<p className="mt-2 leading-7">
“The sign-in succeeded, so the account should be allowed to
open every page.”
</p>
</div>
<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
Strong response
</p>
<p className="mt-2 leading-7">
“Confirm the authenticated session, then review the exact
resource, action, role, permission, policy, owner, duration,
and business need.”
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
title="Identity Decisions Connect Technical Evidence with Business Accountability"
>
<p className="leading-8">
Access can come from direct permissions, groups, roles, attributes,
application-local settings, resource sharing, temporary elevation,
or emergency access. Defenders must understand both the technical
path and the approved business purpose before deciding whether the
access is correct.
</p>
</SectionCard>
<IdentityModelGuide />
<EvidenceGuide />
<AuthenticationAuthorizationGuide />
<DecisionInputGuide />
<DecisionOutcomeGuide />
<SectionCard
eyebrow="Core Concept"
title="Ask Three Separate Questions"
>
<div className="grid gap-4 md:grid-cols-3">
{[
[
"Who or what is represented?",
"Identify the fictional identity, account, owner, device, application, service, and current lifecycle state.",
],
[
"How was the session established?",
"Review credentials, factors, MFA, device, policy, source, account state, session ID, issue time, and assurance.",
],
[
"What exact action is allowed?",
"Trace roles, groups, direct permissions, attributes, resource rules, temporary access, and business approval.",
],
].map(([title, detail]) => (
<div
key={title}
className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
>
<p className="font-black text-blue-100">{title}</p>
<p className="mt-3 text-sm leading-6 text-blue-50">
{detail}
</p>
</div>
))}
</div>
</SectionCard>
<AuthenticationEvidenceGuide />
<AuthorizationPathGuide />
<SessionGuide />
<FailureGuide />
<TrustBoundaryGuide />
<WorkflowGuide />
<TimelineGuide />
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Key Vocabulary
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Identity and Access Terms
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
title="Fake Identity and Access Decision Dashboard"
subtitle="Training dashboard for the fictional Northstar Learning Services identity environment."
metrics={[
{
label: "Successful sign-ins",
value: "42",
note: "Successful authentication does not automatically confirm physical identity or authorize every later action.",
},
{
label: "Authorization denials",
value: "9",
note: "Six correct least-privilege denials, one expired temporary role, one stale application mapping, and one incomplete review.",
},
{
label: "Session reviews",
value: "5",
note: "Two normal expirations, one step-up, one revocation, and one temporary-access session-refresh gap.",
},
]}
/>
<FakeAlertCard
title="Temporary Role Expires but an Application Session Remains Active"
severity="High"
time="05:02 PM"
source="Fake Identity and Access Review Console"
details="A fictional seven-day attendance-view role expires in the central directory. The user’s older application session continues displaying the dashboard for three minutes until the session is revoked and refreshed. No administrative permission is present, and the owner confirms the view access should end."
recommendation="Preserve directory, session, application, owner, and lifecycle evidence; classify the issue as a session-refresh authorization gap; revoke the affected session; validate denial after refresh; review similar applications; and document the short residual-risk window."
/>
<FakeLogPanel
title="Fake Authentication and Authorization Timeline"
logs={[
"09:00:00 ACCESS_REQUEST user='training-jlee' resource='attendance-dashboard' permission='view' duration='7d'",
"09:04:00 OWNER_APPROVAL scope='dashboard_view_only' approved='true'",
"09:10:00 DIRECTORY group='attendance-viewers' user='training-jlee' expires='day7_17:00'",
"09:15:12 AUTH user='training-jlee' device='managed-laptop-44' password='accepted' mfa='approved'",
"09:15:15 SESSION id='session-4410' application='attendance-app' issued='true'",
"09:15:20 AUTHZ action='view_dashboard' result='allow' role='attendance-viewers'",
"09:16:02 AUTHZ action='manage_users' result='deny' reason='missing_admin_role'",
"DAY7 17:00 DIRECTORY membership='expired'",
"DAY7 17:02 APPLICATION old_session='still_displaying_dashboard'",
"DAY7 17:05 SESSION id='session-4410' action='revoked'",
"DAY7 17:06 AUTHZ action='view_dashboard' result='deny'",
"DAY8 09:00 REVIEW classification='session_refresh_gap' residual_risk='documented'",
]}
/>
<AnalyzeEvidenceCard
title="Which Identity and Access Conclusion Is Best Supported?"
evidence={[
"The fictional user receives owner-approved dashboard-view access for seven days.",
"The account authenticates with password and approved MFA from a managed device.",
"Dashboard viewing is allowed through the correct temporary group.",
"User administration is denied because no administrative role exists.",
"The temporary membership expires at the approved time.",
"An older application session continues showing the dashboard briefly.",
"Session revocation and refresh restore the expected denial.",
"The resource owner confirms that access should have ended.",
]}
question="Which conclusion is strongest?"
options={[
"Authentication and least-privilege authorization initially work as approved, but the application has a temporary session-refresh gap after role expiration.",
"The user is an administrator because the sign-in succeeded.",
"The MFA result proves the physical user performed every action.",
"The access request was malicious because one action was denied.",
]}
bestAnswer={0}
explanation="The evidence separates successful authentication, correct view authorization, correct administrative denial, role expiration, and a short application-session mismatch."
/>
<SectionCard
eyebrow="Common Mistakes"
title="Mistakes That Weaken Identity and Access Analysis"
>
<div className="grid gap-3 md:grid-cols-2">
{mistakes.map((mistake) => (
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
title="Review a Fictional Access Decision Packet"
>
<div className="grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
<p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
Fictional Environment
</p>
<h3 className="mt-3 text-xl font-black text-white">
Meadowbrook Identity Decision Review
</h3>
<p className="mt-3 leading-7 text-slate-300">
Review twenty-four supplied fictional records involving two
users, one service identity, three applications, two managed
devices, sign-ins, MFA, sessions, roles, groups, permissions,
one temporary access request, one stale application session,
and one authorization denial.
</p>
</div>
<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
Required Analysis
</p>
<ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
<li>Identify each fictional identity, account, device, application, resource, owner, and session.</li>
<li>Separate authentication evidence from authorization evidence.</li>
<li>Trace direct, group, role, attribute, temporary, and application-local access.</li>
<li>Classify allow, deny, challenge, restriction, expiration, revocation, and evidence gaps.</li>
<li>State confirmed facts, reasonable conclusions, alternatives, limitations, confidence, and business impact.</li>
<li>Recommend narrow owner-approved corrections with rollback and validation.</li>
<li>Document monitoring, lifecycle follow-up, residual risk, and closure criteria.</li>
</ol>
</div>
</div>
<div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
Use only supplied fictional evidence. Do not access real accounts,
request passwords or MFA codes, use tokens, change roles or groups,
enter administrative consoles, test authentication, inspect private
identity data, or publish real users, devices, sessions,
permissions, logs, screenshots, or internal identity architecture.
</div>
</SectionCard>
<ScenarioDecisionLab
title="A User Authenticates Successfully but an Administrative Page Is Denied"
scenario="A fictional teacher signs in using the required password and MFA. The learning application allows class-report viewing but denies user administration."
choices={[
{
label: "Choice A",
response:
"Confirm the authenticated session, review the teacher role and exact resource permissions, verify that administration is outside the approved job function, and document the denial as correct least-privilege enforcement.",
outcome:
"Best defensive choice. Successful authentication and restricted authorization can both be correct.",
tone: "best",
},
{
label: "Choice B",
response:
"Grant administrative permission because MFA succeeded.",
outcome:
"Unsafe. Authentication strength does not create business authorization.",
tone: "risk",
},
{
label: "Choice C",
response:
"Disable the account because one action was denied.",
outcome:
"Unsupported. The denial may be the intended policy result.",
tone: "risk",
},
]}
/>
<ScenarioDecisionLab
title="Temporary Access Expires but a Remembered Session Still Works"
scenario="A fictional temporary role expires at 5:00 PM, but one application continues displaying the resource through an older session until refresh."
choices={[
{
label: "Choice A",
response:
"Preserve the role, session, application, owner, and lifecycle evidence; revoke the affected session; validate denial after refresh; review similar session behavior; and document the residual-risk window.",
outcome:
"Best defensive choice. The response restores alignment between current authorization and session state.",
tone: "best",
},
{
label: "Choice B",
response:
"Ignore the session because the central role already expired.",
outcome:
"Unsafe. The application still provides access under stale session state.",
tone: "risk",
},
{
label: "Choice C",
response:
"Permanently disable the user without reviewing the approved temporary workflow.",
outcome:
"Disproportionate. The evidence supports a session-management correction.",
tone: "risk",
},
]}
/>
<DefenderChecklist
title="Identity, Authentication, and Authorization Checklist"
items={[
"I distinguish identity, account, identifier, credential, authentication, authorization, permission, role, session, claim, and access decision.",
"I identify the fictional subject, account owner, device, application, resource, action, environment, time, and business purpose.",
"I preserve sign-in, account-state, session, role, group, permission, application, request, approval, and lifecycle evidence.",
"I understand that successful authentication does not prove physical identity, safe intent, or authorization for every action.",
"I trace direct, group, role, attribute-based, resource-owner, temporary, application-local, service, and emergency access paths.",
"I distinguish incorrect credentials, MFA failures, lockout, authorization denial, conditional-access block, session expiration, account disablement, and application error.",
"I check remembered, step-up, restricted, expired, revoked, orphaned, and service sessions.",
"I use narrow owner-approved corrections with rollback, technical validation, business validation, monitoring, and lifecycle review.",
"I state evidence limitations, confidence, alternatives, impact, and residual risk.",
"I use only fictional identity evidence and never request or publish real credentials, tokens, users, devices, sessions, permissions, logs, screenshots, or internal identity architecture.",
]}
/>
<MiniQuiz
title="I6.1 Mini Quiz: Identity, Authentication, and Authorization"
questions={quizQuestions}
/>
<PortfolioPrompt
title="Portfolio Prompt"
prompt="Create a fictional Identity Access Decision Record containing at least twenty-five account, sign-in, MFA, device, session, role, group, permission, application, resource, approval, owner, lifecycle, and validation records. Include identity-to-account mapping, authentication evidence, authorization path, session state, access outcome, confirmed facts, limitations, alternatives, confidence, business impact, owner, narrow recommendation, rollback, technical validation, business validation, monitoring, residual risk, and closure criteria."
tips={[
"Use only fictional users, service identities, accounts, devices, applications, resources, sessions, roles, groups, permissions, owners, and organizations.",
"Include one successful authentication with correct authorization denial, one temporary-access expiration, one stale-session gap, and one service-to-service access decision.",
"Clearly separate what each evidence source directly proves from what remains unknown.",
"Do not include real passwords, MFA codes, tokens, session values, usernames, email addresses, device IDs, screenshots, or internal identity architecture.",
]}
/>
<KeyTakeaways
takeaways={[
"Identity is the person, service, device, or application represented; an account is the technical record used by systems.",
"Authentication establishes an accepted account or session context, while authorization decides which resource actions are permitted.",
"A successful sign-in does not prove the physical person, safe intent, or approval for every later action.",
"Roles, groups, direct permissions, attributes, resource sharing, temporary elevation, and application-local access can all shape authorization.",
"Session state must remain aligned with current account, role, device, policy, and lifecycle state.",
"Strong access analysis preserves evidence, confirms business ownership, uses narrow corrections, validates outcomes, and documents residual risk.",
]}
/>
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
Navigation
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Continue Module I6
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