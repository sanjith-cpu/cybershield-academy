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
const previousLesson = `${modulePath}/accounts-roles-and-least-privilege`;
const nextLesson = `${modulePath}/access-control-models-and-permissions`;
const objectives = [
"Explain passwords, passphrases, possession factors, inherence factors, device trust, recovery, step-up authentication, and session assurance.",
"Distinguish single-factor, two-step, multi-factor, passwordless, remembered-device, and risk-based authentication concepts.",
"Interpret fictional authentication logs without assuming that MFA success proves the physical person, safe intent, or approved later activity.",
"Evaluate fictional authentication failures, recovery events, remembered sessions, factor changes, device registration, and policy challenges.",
"Create a professional fictional Authentication Assurance Review with evidence, findings, owners, validation, monitoring, and residual risk.",
];
const vocabulary = [
["Password", "A fictional secret used as knowledge evidence during authentication. Real passwords must never be requested, collected, or displayed."],
["Passphrase", "A longer fictional secret made from words or a memorable phrase, evaluated under the same privacy and handling rules as any password."],
["Authentication factor", "A category of evidence such as something known, possessed, or inherent to the user."],
["Multi-factor authentication", "Authentication that requires evidence from more than one independent factor category."],
["Two-step verification", "A sign-in process with two checks that may or may not come from two independent factor categories."],
["Possession factor", "Evidence that the fictional account or session has access to a registered device, key, certificate, or authenticator."],
["Inherence factor", "A fictional local biometric or physical-characteristic verification result accepted by a device or system."],
["Passwordless authentication", "A fictional authentication method that does not require the user to enter a reusable password during the sign-in flow."],
["Step-up authentication", "A request for stronger or fresh authentication before a sensitive fictional action."],
["Recovery", "A controlled process used to restore access when normal authentication factors are unavailable."],
["Authenticator registration", "The approved process of connecting a fictional factor, device, key, or application to an account."],
["Authentication assurance", "The confidence level supported by the fictional factors, device, policy, session, context, and validation evidence available for a specific access decision."],
];
const factorCategories = [
{
category: "Knowledge",
examples:
"Fictional password, passphrase, PIN, or recovery response.",
supports:
"The authentication system accepted information that the account was expected to know.",
limitations:
"Knowledge can be shared, reused, observed, exposed, guessed, entered into the wrong service, or used by someone other than the intended person.",
},
{
category: "Possession",
examples:
"Fictional hardware key, registered phone, authenticator application, certificate, smart card, or managed device.",
supports:
"The account or session had access to the registered possession evidence.",
limitations:
"A possession factor can be shared, lost, left unlocked, approved accidentally, transferred, or used through an existing session.",
},
{
category: "Inherence",
examples:
"Fictional fingerprint, face, or other device-local biometric verification result.",
supports:
"The device accepted its configured local verification process.",
limitations:
"The identity provider may receive only a success result, not the underlying biometric evidence, and device ownership still requires review.",
},
{
category: "Device trust",
examples:
"Fictional managed-device identity, certificate, compliance state, platform, browser, or endpoint-health result.",
supports:
"The request is associated with the recorded device context.",
limitations:
"A trusted device can be shared, stolen, left unlocked, misattributed, or used with a valid existing session.",
},
{
category: "Location and network",
examples:
"Fictional source region, network zone, school network, remote connection, or approved service environment.",
supports:
"The request originated from the recorded network or location context.",
limitations:
"Shared gateways, mobile networks, remote services, and address translation can make location approximate.",
},
{
category: "Behavior and risk",
examples:
"Fictional device familiarity, sign-in timing, application pattern, travel pattern, failed-attempt sequence, or risk score.",
supports:
"The identity platform observed a pattern that matched or differed from its current baseline.",
limitations:
"Risk scoring is an interpretation and can be affected by incomplete history, travel, new devices, shared behavior, or changing workflows.",
},
];
const authenticationMethods = [
{
method: "Password only",
factors:
"One knowledge factor.",
strength:
"Simple and widely supported.",
limitation:
"A reusable secret alone provides limited assurance and can be shared or exposed.",
strongUse:
"Where permitted, pair with stronger controls, monitoring, recovery safeguards, and limited resource sensitivity.",
},
{
method: "Password plus authenticator approval",
factors:
"Knowledge plus possession.",
strength:
"Adds a second independent factor category when implemented correctly.",
limitation:
"Unexpected approvals, session confusion, device sharing, or repeated prompts can reduce confidence.",
strongUse:
"Show the application, device, request context, and clear denial option; monitor unusual approval patterns.",
},
{
method: "Password plus one-time code",
factors:
"Knowledge plus a possession-based code source.",
strength:
"Adds a second check beyond the password.",
limitation:
"Codes can be entered into the wrong service or shared, and the event still requires session and application context.",
strongUse:
"Use approved applications and preserve the exact sign-in, device, application, and policy evidence.",
},
{
method: "Security key or passkey",
factors:
"Possession, often combined with local user verification.",
strength:
"Can provide strong resistance to common credential-reuse problems when bound to the correct service.",
limitation:
"Registration, device recovery, shared-device use, ownership, and lifecycle still require governance.",
strongUse:
"Require approved registration, named ownership, recovery controls, backup method review, and periodic validation.",
},
{
method: "Device certificate",
factors:
"Possession of an approved device or workload identity.",
strength:
"Connects authentication to a managed fictional device or service.",
limitation:
"A certificate can remain valid after ownership or device state changes unless lifecycle is managed.",
strongUse:
"Tie certificate validity to managed state, owner, environment, revocation, rotation, and monitoring.",
},
{
method: "Biometric with device trust",
factors:
"Inherence result plus possession of the registered device.",
strength:
"Supports convenient local verification without sending a reusable password for every sign-in.",
limitation:
"The system may know only that the device accepted local verification, not the underlying biometric details.",
strongUse:
"Protect device enrollment, recovery, fallback factors, and session lifetime.",
},
{
method: "Passwordless platform sign-in",
factors:
"Registered device or key with local verification.",
strength:
"Removes reusable password entry from the normal sign-in flow.",
limitation:
"Recovery and registration become critical trust points.",
strongUse:
"Use strong enrollment, owner confirmation, fallback review, device lifecycle, and session controls.",
},
{
method: "Step-up authentication",
factors:
"Fresh or stronger evidence requested for one sensitive action.",
strength:
"Matches assurance to the resource or action instead of treating every session equally.",
limitation:
"Poorly designed prompts can confuse users or fail to bind the challenge to the exact action.",
strongUse:
"Show the resource and action, link the challenge to the current session, and validate the resulting authorization.",
},
];
const passwordPrinciples = [
{
principle: "Length and uniqueness",
explanation:
"A fictional password or passphrase should be sufficiently long and unique to that account under the organization’s policy.",
defenderFocus:
"Review policy, reset history, reuse indicators, owner education, and recovery—not the secret itself.",
},
{
principle: "Private handling",
explanation:
"Passwords and recovery answers must not be shared through messages, forms, screenshots, documents, or support conversations.",
defenderFocus:
"Never request the secret. Verify identity and use approved reset or recovery workflows.",
},
{
principle: "Approved storage",
explanation:
"Fictional systems should protect stored authentication data using approved platform controls rather than readable storage.",
defenderFocus:
"Review architecture, owner, platform support, access, logging, lifecycle, and validation at a conceptual level.",
},
{
principle: "Safe reset",
explanation:
"A reset should invalidate or review older sessions and require an approved identity-verification workflow.",
defenderFocus:
"Preserve reset, session, factor, device, and owner evidence without exposing credentials.",
},
{
principle: "Limited fallback",
explanation:
"Fallback and recovery methods should not be much weaker than the normal authentication method.",
defenderFocus:
"Review recovery channels, help-desk approval, backup factors, expiration, monitoring, and post-recovery validation.",
},
{
principle: "No password sharing",
explanation:
"Shared secrets reduce accountability and make individual action attribution difficult.",
defenderFocus:
"Use unique accounts, approved delegated access, service identities, or documented temporary exceptions.",
},
{
principle: "Lifecycle awareness",
explanation:
"Authentication secrets, devices, keys, certificates, and recovery methods must change when ownership, employment, device state, or risk changes.",
defenderFocus:
"Review registration, rotation, revocation, expiration, replacement, and owner recertification.",
},
{
principle: "Evidence limits",
explanation:
"A successful password check proves only that the system accepted the presented knowledge evidence.",
defenderFocus:
"Combine password results with MFA, device, session, application, owner, and authorization evidence.",
},
];
const mfaEvidenceMatrix = [
{
evidence: "MFA challenge created",
supports:
"The fictional identity platform requested additional authentication evidence for the recorded account, application, session, and time.",
limitation:
"Does not prove the intended person saw, understood, or completed the challenge.",
},
{
evidence: "MFA approved",
supports:
"The registered fictional factor produced an accepted result for the challenge.",
limitation:
"Does not prove safe intent, physical identity with certainty, or authorization for every later action.",
},
{
evidence: "MFA denied",
supports:
"The registered fictional factor or user action rejected the challenge.",
limitation:
"Can result from an unexpected request, wrong session, user caution, confusion, unavailable device, or unauthorized attempt.",
},
{
evidence: "MFA timeout",
supports:
"The fictional challenge did not receive an accepted response before expiration.",
limitation:
"Does not distinguish distraction, connectivity, device unavailability, or suspicious activity without more evidence.",
},
{
evidence: "New factor registered",
supports:
"A fictional authenticator, key, device, or method was added to the account.",
limitation:
"Does not prove the registration was authorized unless owner, session, policy, device, and approval evidence agree.",
},
{
evidence: "Factor removed",
supports:
"A fictional authentication method was disconnected from the account.",
limitation:
"Does not prove the removal was safe, complete, or reflected in every application session.",
},
{
evidence: "Recovery completed",
supports:
"The fictional recovery workflow accepted its required evidence and restored access.",
limitation:
"Recovery may become the weakest path if identity verification, approval, monitoring, or session cleanup is poor.",
},
{
evidence: "Remembered device accepted",
supports:
"The fictional policy treated the recorded device or browser as previously trusted.",
limitation:
"A remembered device can outlive ownership, user changes, lost-device status, or changed risk.",
},
];
const factorLifecycle = [
{
phase: "Request",
question:
"Why does the fictional account need a new factor, backup method, key, certificate, or device registration?",
evidence:
"Owner, account, purpose, device, application, sensitivity, and support record.",
},
{
phase: "Identity verification",
question:
"How does the approved process verify that the account owner should receive or replace the factor?",
evidence:
"Approved verification method, support workflow, manager or owner confirmation, and privacy limits.",
},
{
phase: "Registration",
question:
"Which fictional device, key, application, certificate, or method is connected to the account?",
evidence:
"Registration time, account, session, device, method, policy, source, and confirmation.",
},
{
phase: "Activation",
question:
"Does the new fictional factor work for the intended application and assurance level?",
evidence:
"Positive sign-in test, device association, policy result, application access, and owner confirmation.",
},
{
phase: "Monitoring",
question:
"Are unexpected approvals, repeated prompts, new-device use, factor changes, recovery, or unusual sign-ins reviewed?",
evidence:
"Identity alerts, sign-in logs, user reports, owner review, device records, and case outcomes.",
},
{
phase: "Replacement",
question:
"What happens when the fictional factor is lost, unavailable, damaged, or moved to a new device?",
evidence:
"Recovery request, factor removal, session review, owner confirmation, new registration, and rollback.",
},
{
phase: "Revocation",
question:
"How is a fictional factor disabled after account closure, device loss, owner change, risk response, or expiration?",
evidence:
"Revocation time, account state, active sessions, device record, owner, and verification.",
},
{
phase: "Recertification",
question:
"Does the fictional account still need each registered factor and backup method?",
evidence:
"Owner decision, factor inventory, last use, device state, role, application need, and review date.",
},
];
const recoveryRisks = [
{
risk: "Weak identity verification",
pattern:
"A fictional support process accepts limited information before resetting authentication.",
saferResponse:
"Use approved verification, owner or manager confirmation when appropriate, privacy-preserving evidence, and recorded approval.",
},
{
risk: "Recovery bypasses stronger MFA",
pattern:
"A fictional high-assurance account can recover using a much weaker fallback method.",
saferResponse:
"Align recovery assurance with resource sensitivity and require stronger review for privileged identities.",
},
{
risk: "Old sessions remain active",
pattern:
"A fictional password or factor is reset, but remembered application sessions continue working.",
saferResponse:
"Review and revoke affected sessions, refresh application claims, and validate current access decisions.",
},
{
risk: "Old factor remains registered",
pattern:
"A fictional lost device is replaced, but the prior authenticator remains connected.",
saferResponse:
"Remove and verify the old factor, review recent sign-ins, and document the replacement lifecycle.",
},
{
risk: "No recovery owner",
pattern:
"A fictional service or emergency account has no named person responsible for recovery decisions.",
saferResponse:
"Assign accountable owners, backup approvers, review dates, and escalation paths.",
},
{
risk: "Recovery creates excessive access",
pattern:
"A fictional replacement account receives a broad role instead of restoring the exact prior permission.",
saferResponse:
"Restore only the approved account state and validate positive and negative actions.",
},
{
risk: "Recovery evidence is over-collected",
pattern:
"A fictional process requests unnecessary personal data or copies of sensitive documents.",
saferResponse:
"Collect only the minimum approved evidence, limit retention, protect privacy, and avoid storing secrets.",
},
{
risk: "Recovery is not monitored",
pattern:
"A fictional reset, factor change, or backup-method use creates no alert or owner review.",
saferResponse:
"Record the event, route it to the correct owner, review linked sessions and sign-ins, and confirm closure.",
},
];
const workflow = [
{
step: "1",
title: "Identify the authentication event",
detail:
"Record the fictional account, application, device, source, session, factor, result, reason, policy, and time.",
},
{
step: "2",
title: "Confirm factor and device state",
detail:
"Review registration, ownership, managed state, last change, backup methods, expiration, and revocation.",
},
{
step: "3",
title: "Separate success from assurance",
detail:
"Determine what the accepted factors support and what remains unknown about physical identity, intent, or later actions.",
},
{
step: "4",
title: "Review recovery and session context",
detail:
"Check reset, factor change, remembered device, active sessions, step-up, and application access.",
},
{
step: "5",
title: "Classify the outcome",
detail:
"Separate expected sign-in, policy challenge, denied factor, timeout, recovery, registration change, session mismatch, and evidence gap.",
},
{
step: "6",
title: "Validate and monitor",
detail:
"Use narrow owner-approved corrections, preserve evidence, refresh sessions, test access, monitor, and document residual risk.",
},
];
const assuranceScenarios = [
{
scenario: "Password accepted, MFA denied",
directFacts:
"The fictional knowledge factor was accepted, but the required possession-factor challenge was rejected.",
possibleMeaning:
"The expected user may have denied an unexpected request, the wrong session may be linked, or another person may know the password.",
nextEvidence:
"Session ID, device, application, source, factor, user report, surrounding sign-ins, password-reset history, and account owner.",
},
{
scenario: "Password and MFA accepted from a new managed device",
directFacts:
"Both required fictional factors were accepted and the device reports managed status.",
possibleMeaning:
"The sign-in satisfies the recorded policy, but a new-device workflow, owner confirmation, and later authorization still matter.",
nextEvidence:
"Device registration, asset owner, enrollment time, application, session, resource, user confirmation, and later activity.",
},
{
scenario: "Remembered browser skips fresh MFA",
directFacts:
"The fictional policy accepts an existing remembered-device or session state.",
possibleMeaning:
"The current assurance depends on the age and validity of the remembered state.",
nextEvidence:
"Original MFA time, browser or device identity, session age, account changes, device state, resource sensitivity, and policy version.",
},
{
scenario: "New factor registered after recovery",
directFacts:
"A fictional recovery workflow completes and a new authenticator is connected.",
possibleMeaning:
"Access may be restored correctly, or recovery may have become an unauthorized path if ownership and verification are weak.",
nextEvidence:
"Recovery ticket, owner confirmation, support verification, prior factor removal, active sessions, device, source, and post-recovery sign-in.",
},
{
scenario: "Security key succeeds but privileged action is denied",
directFacts:
"The fictional authentication method succeeds, but the account lacks authorization for the privileged action.",
possibleMeaning:
"Strong authentication and least-privilege authorization can both be working correctly.",
nextEvidence:
"Role, permission, resource, action, application decision, owner approval, and privileged-access policy.",
},
{
scenario: "Repeated MFA prompts from one session",
directFacts:
"The fictional account receives several challenges connected to the same or related session.",
possibleMeaning:
"A looping application, stale session, user confusion, policy error, or unauthorized sign-in attempt may exist.",
nextEvidence:
"Challenge IDs, session IDs, application, device, source, user report, policy, errors, and later successful or denied sign-ins.",
},
{
scenario: "Service identity authenticates from an unexpected workload",
directFacts:
"The fictional service credential or managed identity is accepted, but the source workload differs from the approved environment.",
possibleMeaning:
"Authentication succeeds while contextual authorization or workload ownership may be incorrect.",
nextEvidence:
"Workload ID, environment, application owner, certificate or identity assignment, network path, permissions, and change records.",
},
{
scenario: "Account recovery succeeds but old sessions remain",
directFacts:
"The fictional account regains access through recovery while existing application sessions continue.",
possibleMeaning:
"The recovery path may be correct, but session cleanup is incomplete.",
nextEvidence:
"Recovery time, factor changes, session inventory, revocation state, application claims, device ownership, and owner validation.",
},
];
const timeline = [
{
time: "10:00:00",
source: "Sign-in request",
event:
"Fictional account training-amorgan attempts to open the Northstar reporting application from managed-laptop-72.",
meaning:
"Defines the account, application, device, source, and beginning of the authentication sequence.",
},
{
time: "10:00:03",
source: "Password check",
event:
"The fictional password is accepted under the current account policy.",
meaning:
"Supports acceptance of the knowledge evidence only.",
},
{
time: "10:00:05",
source: "MFA challenge",
event:
"Authenticator approval challenge mfa-9012 is issued for session session-7701.",
meaning:
"Connects the possession-factor request to the exact sign-in session.",
},
{
time: "10:00:11",
source: "MFA result",
event:
"The fictional approval is denied from registered-phone-18.",
meaning:
"The required second factor is not accepted.",
},
{
time: "10:00:20",
source: "User report",
event:
"The account owner reports that the request was unexpected and confirms no current reporting-app sign-in.",
meaning:
"Adds independent human context without proving the full source or cause.",
},
{
time: "10:01:00",
source: "Identity review",
event:
"The same fictional source attempted two earlier password-only sign-ins that failed.",
meaning:
"Builds a concerning sequence around the denied MFA challenge.",
},
{
time: "10:02:00",
source: "Account protection",
event:
"The account is placed into a controlled recovery workflow and active sessions are inventoried.",
meaning:
"Starts an authorized response without exposing credentials.",
},
{
time: "10:05:00",
source: "Session review",
event:
"One normal learning-app session from managed-laptop-72 is confirmed by the owner; no reporting-app session exists.",
meaning:
"Separates the unexpected sign-in from an approved existing session.",
},
{
time: "10:10:00",
source: "Recovery approval",
event:
"The fictional account owner and identity-support reviewer approve a password reset and factor review.",
meaning:
"Provides accountable recovery authorization.",
},
{
time: "10:14:00",
source: "Factor lifecycle",
event:
"The password is reset through the approved process; registered-phone-18 remains valid and no new factor is added.",
meaning:
"Restores the knowledge factor while avoiding an unnecessary factor change.",
},
{
time: "10:16:00",
source: "Session control",
event:
"All sessions except the owner-confirmed learning-app session are revoked; that session is reauthenticated.",
meaning:
"Reduces session risk while preserving the validated workflow.",
},
{
time: "10:20:00",
source: "Positive validation",
event:
"The owner signs in to the reporting application from managed-laptop-72 using the new password and approved MFA.",
meaning:
"Confirms the intended authentication path works.",
},
{
time: "10:21:00",
source: "Negative validation",
event:
"A fictional sign-in using the older password is rejected.",
meaning:
"Confirms the prior knowledge credential is no longer accepted.",
},
{
time: "Day 1 16:00",
source: "Monitoring",
event:
"No additional unexpected challenges, factor changes, or reporting-app sessions are observed.",
meaning:
"Provides initial post-recovery monitoring.",
},
{
time: "Day 7",
source: "Owner review",
event:
"The owner confirms normal access and the case records remaining uncertainty about who initiated the earlier sign-in.",
meaning:
"Closes the fictional case without claiming unsupported attribution.",
},
];
const mistakes = [
"Treating a password as the identity rather than one piece of authentication evidence.",
"Assuming two steps automatically mean two independent factor categories.",
"Assuming MFA success proves the physical person, safe intent, or authorization for every later action.",
"Requesting users to reveal passwords, one-time codes, recovery answers, tokens, or private biometric information.",
"Ignoring factor registration, replacement, removal, recovery, expiration, and ownership lifecycle.",
"Treating a remembered device or browser as permanently trusted.",
"Resetting a password without reviewing active sessions, registered factors, recovery events, and application access.",
"Adding a new factor after recovery without confirming the account owner and removing unauthorized or lost factors.",
"Using repeated MFA prompts as proof of a specific cause without correlating session, device, application, source, and user-report evidence.",
"Treating device compliance, location, or a risk score as certainty rather than supporting context.",
"Closing an authentication issue after one successful sign-in without positive, negative, session, factor, and business validation.",
"Publishing real usernames, passwords, codes, tokens, device IDs, factor IDs, sessions, logs, screenshots, or internal authentication architecture.",
];
const quizQuestions = [
{
question:
"What makes authentication multi-factor?",
choices: [
"It uses evidence from more than one independent factor category.",
"It asks the same password twice.",
"It uses two screens.",
"It always includes a recovery question.",
],
answer: 0,
explanation:
"Multiple steps are not necessarily multiple factors. The checks must come from independent factor categories.",
},
{
question:
"What does an approved fictional MFA challenge directly support?",
choices: [
"The registered factor produced an accepted result for the linked challenge.",
"The physical person is known with certainty.",
"Every later action is approved.",
"The device can never be lost or shared.",
],
answer: 0,
explanation:
"MFA approval strengthens authentication assurance but does not prove intent, physical identity with certainty, or authorization for all actions.",
},
{
question:
"Why is recovery a critical authentication control?",
choices: [
"A weak recovery path can bypass stronger normal authentication.",
"Recovery always removes every session automatically.",
"Recovery does not require ownership.",
"Recovery can safely collect any personal data.",
],
answer: 0,
explanation:
"Recovery should provide assurance appropriate to the account and resource sensitivity.",
},
{
question:
"What is the strongest response to an unexpected MFA request?",
choices: [
"Deny the request, preserve the challenge and sign-in evidence, report it through the approved process, and review account, session, device, and factor activity.",
"Approve it to stop the prompt.",
"Share the code with support.",
"Delete every device immediately without review.",
],
answer: 0,
explanation:
"The response should avoid approval, preserve evidence, and use an authorized review workflow.",
},
{
question:
"Why should active sessions be reviewed after a password reset or recovery?",
choices: [
"Older sessions may remain valid even after the knowledge factor changes.",
"Sessions always contain the password.",
"A reset automatically proves every session is safe.",
"Application authorization no longer matters.",
],
answer: 0,
explanation:
"Authentication-factor changes and session state can be separate, so session inventory and revocation may be required.",
},
{
question:
"What does passwordless authentication remove from the normal sign-in flow?",
choices: [
"The need to enter a reusable password.",
"The need for account ownership.",
"The need for recovery controls.",
"The need for authorization.",
],
answer: 0,
explanation:
"Passwordless methods still require enrollment, device or key lifecycle, recovery, session, and authorization controls.",
},
{
question:
"What is step-up authentication?",
choices: [
"A request for stronger or fresh authentication before a sensitive fictional action.",
"A permanent administrator role.",
"A password shared with a manager.",
"A way to disable authorization.",
],
answer: 0,
explanation:
"Step-up authentication increases assurance for a specific resource or action.",
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
function FactorCategoryGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Authentication Factors
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Six Evidence Categories and Their Limits
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{factorCategories.map((item) => (
<div
key={item.category}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="text-lg font-black text-cyan-100">
{item.category}
</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.examples}
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
{item.limitations}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function MethodGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Authentication Methods
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Methods with Different Assurance and Lifecycle Needs
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{authenticationMethods.map((item) => (
<div
key={item.method}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.method}</h3>
<p className="mt-3 text-sm font-semibold text-blue-200">
{item.factors}
</p>
<div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Strength
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.strength}
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
<div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Strong use
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.strongUse}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function PasswordGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Password Principles
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Defensive Password and Passphrase Principles
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{passwordPrinciples.map((item) => (
<div
key={item.principle}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.principle}</h3>
<p className="mt-3 text-sm leading-6 text-slate-300">
{item.explanation}
</p>
<div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Defender focus
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.defenderFocus}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function MfaEvidenceGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
MFA Evidence Matrix
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
What MFA Events Can and Cannot Prove
</h2>
<div className="mt-6 grid gap-4">
{mfaEvidenceMatrix.map((item) => (
<div
key={item.evidence}
className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.45fr_1fr_1fr]"
>
<div>
<p className="font-black text-cyan-100">{item.evidence}</p>
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
function FactorLifecycleGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Factor Lifecycle
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Phases from Request to Recertification
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{factorLifecycle.map((item) => (
<div
key={item.phase}
className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.phase}</h3>
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
</div>
))}
</div>
</section>
);
}
function RecoveryGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Recovery Risks
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Recovery Problems and Safer Responses
</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
{recoveryRisks.map((item) => (
<div
key={item.risk}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="font-black text-cyan-100">{item.risk}</h3>
<div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
Risk pattern
</p>
<p className="mt-2 text-sm leading-6 text-red-50">
{item.pattern}
</p>
</div>
<div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
Safer response
</p>
<p className="mt-2 text-sm leading-6 text-emerald-50">
{item.saferResponse}
</p>
</div>
</div>
))}
</div>
</section>
);
}
function ScenarioGuide() {
return (
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Assurance Scenarios
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Eight Authentication Outcomes That Need Different Evidence
</h2>
<div className="mt-6 grid gap-5">
{assuranceScenarios.map((item) => (
<div
key={item.scenario}
className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
>
<h3 className="text-lg font-black text-white">{item.scenario}</h3>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
Direct facts
</p>
<p className="mt-2 text-sm leading-6 text-blue-50">
{item.directFacts}
</p>
</div>
<div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
<p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
Possible meaning
</p>
<p className="mt-2 text-sm leading-6 text-yellow-50">
{item.possibleMeaning}
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
Review an Authentication Event in Six Steps
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
Authentication Timeline
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Follow an Unexpected MFA Request Through Recovery and Validation
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
export default function PasswordsMfaAndAuthenticationFactorsPage() {
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
Lesson 3 of 8
</span>
</div>
<h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
I6.3 Passwords, MFA, and Authentication Factors
</h1>
<p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
Learn how defenders evaluate fictional passwords, passphrases,
MFA, registered devices, keys, biometrics, remembered sessions,
recovery, step-up authentication, and factor lifecycle without
collecting secrets or overstating what a successful sign-in proves.
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
lessonTitle="Passwords, MFA, and Authentication Factors"
lessonNumber={3}
totalLessons={8}
/>
<ReadinessCheck
title="Before You Start"
items={[
"I understand that passwords, possession factors, inherence factors, device trust, sessions, and authorization are different concepts.",
"I will never request, collect, display, test, or store real passwords, one-time codes, recovery answers, tokens, keys, or private biometric information.",
"I will interpret MFA success, denial, timeout, registration, recovery, and remembered-device events using fictional evidence and clear limitations.",
"I will review factor lifecycle, active sessions, account state, device state, application, owner, and business context.",
"I will use only fictional accounts, devices, factors, sessions, applications, logs, owners, and organizations.",
]}
/>
<SectionCard
eyebrow="Professional Hook"
title="MFA Strengthens Authentication, but It Does Not Answer Every Security Question"
>
<p className="leading-8">
A fictional MFA approval shows that a registered factor produced an
accepted response for a specific challenge. It does not
automatically prove the physical person, the intent behind the
sign-in, the safety of the device, or authorization for every later
action. Defenders combine factor evidence with the account, device,
session, application, policy, owner, and resource context.
</p>
<div className="mt-5 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
<p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
Weak response
</p>
<p className="mt-2 leading-7">
“MFA succeeded, so the sign-in and every later action must be
safe.”
</p>
</div>
<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
Strong response
</p>
<p className="mt-2 leading-7">
“Confirm the exact account, factor, challenge, device, session,
application, source, policy, owner, and later authorization
evidence.”
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
title="Authentication Security Depends on the Entire Lifecycle"
>
<p className="leading-8">
Strong authentication is more than choosing a factor. Enrollment,
ownership, registration, recovery, replacement, revocation, session
cleanup, backup methods, monitoring, and recertification can either
strengthen or weaken the final assurance. A secure normal sign-in
method can still be undermined by an unowned recovery path or a
forgotten active session.
</p>
</SectionCard>
<FactorCategoryGuide />
<MethodGuide />
<PasswordGuide />
<SectionCard
eyebrow="Core Concept"
title="Authentication Success Is Evidence, Not Absolute Identity Proof"
>
<div className="grid gap-4 md:grid-cols-5">
{[
[
"Account",
"Which fictional account or service identity is attempting to authenticate, and who owns it?",
],
[
"Factors",
"Which knowledge, possession, inherence, device, location, or risk evidence was requested and accepted?",
],
[
"Session",
"Which fictional session and application are linked to the challenge, and how old is the session?",
],
[
"Lifecycle",
"When were factors registered, replaced, recovered, revoked, or recertified?",
],
[
"Authorization",
"What exact resource or action is requested after authentication, and is it approved?",
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
<MfaEvidenceGuide />
<FactorLifecycleGuide />
<RecoveryGuide />
<ScenarioGuide />
<WorkflowGuide />
<TimelineGuide />
<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
Key Vocabulary
</p>
<h2 className="mt-2 text-2xl font-bold text-white">
Password, MFA, and Authentication Terms
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
title="Fake Authentication Assurance Dashboard"
subtitle="Training dashboard for the fictional Northstar Learning Services identity environment."
metrics={[
{
label: "MFA challenges",
value: "64",
note: "Fifty-four approved, five denied, three timed out, and two require evidence review because the linked session is incomplete.",
},
{
label: "Factor changes",
value: "7",
note: "Three approved device replacements, two backup-method removals, one recovery registration, and one unowned factor change under review.",
},
{
label: "Session reviews",
value: "9",
note: "Five normal sessions, two remembered-device reviews, one post-recovery cleanup, and one stale application session.",
},
]}
/>
<FakeAlertCard
title="Unexpected MFA Request Denied by the Account Owner"
severity="High"
time="10:00 AM"
source="Fake Authentication Assurance Review Console"
details="A fictional password is accepted for training-amorgan, but the linked MFA approval is denied. The account owner reports that the reporting-app request was unexpected. Two earlier password-only attempts from the same fictional source failed, and no reporting-app session was created."
recommendation="Preserve the password-result, challenge, denial, session, device, source, user-report, and surrounding sign-in evidence; use the approved recovery workflow; review active sessions and registered factors; validate the intended sign-in path; monitor; and avoid claiming who initiated the attempt without stronger evidence."
/>
<FakeLogPanel
title="Fake Password and MFA Evidence Timeline"
logs={[
"10:00:00 SIGNIN user='training-amorgan' app='reporting-app' device='managed-laptop-72'",
"10:00:03 PASSWORD result='accepted'",
"10:00:05 MFA challenge='mfa-9012' session='session-7701' factor='registered-phone-18'",
"10:00:11 MFA result='denied'",
"10:00:20 USER_REPORT expected_request='false'",
"10:01:00 REVIEW earlier_password_failures='2' same_source='true'",
"10:02:00 PROTECTION recovery_workflow='started' sessions='inventoried'",
"10:05:00 SESSION learning_app='owner_confirmed' reporting_app='none'",
"10:10:00 RECOVERY owner_approval='true' reviewer_approval='true'",
"10:14:00 RESET password='completed' new_factor='false'",
"10:16:00 SESSION unconfirmed_sessions='revoked' confirmed_session='reauthenticated'",
"10:20:00 TEST new_password='accepted' mfa='approved'",
"10:21:00 TEST old_password='rejected'",
"DAY7 REVIEW attribution='unknown' normal_access='confirmed'",
]}
/>
<AnalyzeEvidenceCard
title="Which Authentication Conclusion Is Best Supported?"
evidence={[
"The fictional password is accepted for the reporting-app sign-in.",
"The required MFA approval is denied.",
"The account owner reports that the request was unexpected.",
"Two earlier password-only attempts from the same source fail.",
"No reporting-app session is created.",
"The approved recovery workflow reviews sessions and registered factors.",
"The new password and existing approved factor successfully authenticate the owner.",
"The older password is rejected after the reset.",
]}
question="Which conclusion is strongest?"
options={[
"The sequence supports an unexpected sign-in attempt involving accepted knowledge evidence and denied MFA, but the evidence does not identify the physical initiator with certainty.",
"The denied MFA proves the registered phone is compromised.",
"The accepted password proves the account owner initiated the request.",
"The account should receive administrator access because recovery succeeded.",
]}
bestAnswer={0}
explanation="The evidence supports the authentication sequence, owner report, and recovery outcome while preserving uncertainty about attribution."
/>
<SectionCard
eyebrow="Common Mistakes"
title="Mistakes That Weaken Authentication Assurance"
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
title="Review a Fictional Authentication Assurance Packet"
>
<div className="grid gap-4 lg:grid-cols-2">
<div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
<p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
Fictional Environment
</p>
<h3 className="mt-3 text-xl font-black text-white">
Meadowbrook Authentication Review
</h3>
<p className="mt-3 leading-7 text-slate-300">
Review thirty supplied fictional records involving password
checks, MFA approvals, denials, timeouts, remembered devices,
factor registration, recovery, device replacement, session
revocation, service identities, step-up authentication, owners,
applications, policies, and validation results.
</p>
</div>
<div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
<p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
Required Analysis
</p>
<ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
<li>Identify each fictional account, application, device, session, factor, result, policy, owner, and time.</li>
<li>Classify knowledge, possession, inherence, device, location, behavior, and service evidence.</li>
<li>Separate direct facts from assumptions about physical identity, intent, or authorization.</li>
<li>Review factor request, verification, registration, activation, monitoring, replacement, revocation, and recertification.</li>
<li>Identify weak recovery, stale sessions, unexpected prompts, unowned factors, and evidence gaps.</li>
<li>Propose narrow owner-approved corrections with preserved evidence, rollback, and privacy limits.</li>
<li>Validate intended sign-in, rejected old evidence, session cleanup, application access, monitoring, and residual risk.</li>
</ol>
</div>
</div>
<div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
Use only supplied fictional evidence. Never request or enter real
passwords, one-time codes, recovery answers, tokens, keys,
certificates, biometric information, or session values. Do not test
real sign-ins, change factors, reset accounts, enter administrative
consoles, or publish real usernames, devices, sessions, logs,
screenshots, or internal authentication architecture.
</div>
</SectionCard>
<ScenarioDecisionLab
title="A User Receives an Unexpected MFA Approval Request"
scenario="A fictional user receives an approval request for a reporting application they are not opening. The challenge is linked to a password-accepted sign-in from a new source."
choices={[
{
label: "Choice A",
response:
"Deny the request, preserve the challenge and sign-in evidence, report it through the approved process, review sessions and factors, use controlled recovery if required, validate the intended sign-in path, and monitor.",
outcome:
"Best defensive choice. The user avoids approving the request and the review preserves evidence without exposing secrets.",
tone: "best",
},
{
label: "Choice B",
response:
"Approve the request so the notification stops.",
outcome:
"Unsafe. Approval would create a stronger authenticated session for an unexpected request.",
tone: "risk",
},
{
label: "Choice C",
response:
"Send the one-time code to anyone claiming to be support.",
outcome:
"Unsafe. Authentication secrets and codes must never be shared.",
tone: "risk",
},
]}
/>
<ScenarioDecisionLab
title="Recovery Succeeds but the Old Device Remains Registered"
scenario="A fictional account owner replaces a lost phone through the approved recovery workflow. The new factor works, but the old phone remains listed and two application sessions are still active."
choices={[
{
label: "Choice A",
response:
"Preserve the recovery, factor, device, session, and owner evidence; remove and verify the old factor; review and revoke unconfirmed sessions; validate the new factor and required applications; monitor; and document residual risk.",
outcome:
"Best defensive choice. Recovery is completed across factor and session lifecycle, not only the new registration.",
tone: "best",
},
{
label: "Choice B",
response:
"Ignore the old factor because the new one works.",
outcome:
"Unsafe. The lost device may still provide an authentication path.",
tone: "risk",
},
{
label: "Choice C",
response:
"Delete the entire account without reviewing business access.",
outcome:
"Disproportionate. The evidence supports controlled factor and session cleanup.",
tone: "risk",
},
]}
/>
<DefenderChecklist
title="Passwords, MFA, and Authentication Factors Checklist"
items={[
"I distinguish passwords, passphrases, knowledge, possession, inherence, device, location, behavior, and service authentication evidence.",
"I understand that two steps do not necessarily equal two independent factors.",
"I never request, collect, display, test, or store real passwords, codes, recovery answers, tokens, keys, or private biometric information.",
"I connect every fictional challenge to the exact account, application, device, session, factor, policy, source, result, and time.",
"I interpret MFA approval, denial, timeout, registration, removal, recovery, and remembered-device evidence with clear limitations.",
"I review factor request, verification, registration, activation, monitoring, replacement, revocation, and recertification.",
"I check active sessions and application access after password resets, recovery, factor changes, device loss, and account-state changes.",
"I use narrow owner-approved corrections with privacy protection, preserved evidence, rollback, positive and negative validation, and monitoring.",
"I distinguish authentication assurance from authorization for a later resource or action.",
"I use only fictional evidence and never publish real users, factors, devices, sessions, logs, screenshots, or internal authentication architecture.",
]}
/>
<MiniQuiz
title="I6.3 Mini Quiz: Passwords, MFA, and Authentication Factors"
questions={quizQuestions}
/>
<PortfolioPrompt
title="Portfolio Prompt"
prompt="Create a fictional Authentication Assurance Review containing at least thirty password-result, MFA, factor-registration, device, remembered-session, step-up, recovery, factor-removal, service-identity, application, policy, owner, and validation records. Include factor categories, authentication methods, direct facts, limitations, assurance conclusions, registration lifecycle, recovery risks, session review, owner decisions, narrow recommendations, rollback, positive tests, negative tests, session cleanup, monitoring, residual risk, and closure criteria."
tips={[
"Use only fictional accounts, devices, factors, sessions, applications, policies, owners, logs, and organizations.",
"Include one unexpected MFA request, one remembered-session review, one factor replacement, one recovery event, and one service-identity authentication decision.",
"Clearly separate authentication success from physical identity, intent, and authorization.",
"Do not include real passwords, codes, recovery answers, tokens, keys, certificates, biometric information, usernames, device IDs, session values, or screenshots.",
]}
/>
<KeyTakeaways
takeaways={[
"Authentication factors provide evidence about an account or session, not absolute proof of the physical person or safe intent.",
"Multi-factor authentication requires independent factor categories, while two-step verification may repeat one category.",
"MFA approval, denial, timeout, recovery, registration, and remembered-device events each require different supporting evidence.",
"Passwordless authentication removes reusable password entry but still depends on enrollment, device, recovery, session, and authorization controls.",
"Recovery can become the weakest path if verification, ownership, factor cleanup, and session revocation are incomplete.",
"Strong authentication review preserves evidence, protects secrets, validates intended and rejected paths, monitors outcomes, and documents residual risk.",
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