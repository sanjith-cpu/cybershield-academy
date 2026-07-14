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
const modulePath = `${trackPath}/logs-and-event-monitoring`;
const previousLesson = `${modulePath}/timestamps-event-ids-and-context`;
const nextLesson = `${modulePath}/system-and-application-logs`;

const objectives = [
  "Explain what authentication logs record and how sign-in, session, MFA, password, lockout, and account-change events fit together.",
  "Interpret fictional authentication results using account, source, device, application, reason code, MFA state, session, and expected-use context.",
  "Distinguish normal failures, stale credentials, mistyped passwords, service retries, travel, approved support activity, and review-required patterns.",
  "Separate what authentication evidence directly proves from what still requires endpoint, application, network, change, owner, or user context.",
  "Build a professional fictional Authentication Review Report with facts, conclusions, alternate explanations, gaps, confidence, and safe next actions.",
];

const vocabulary = [
  ["Authentication", "The process of verifying a claimed identity before access is granted."],
  ["Authorization", "The decision about what an authenticated identity is allowed to access or do."],
  ["Sign-in success", "A record that the authentication workflow completed successfully under the shown conditions."],
  ["Sign-in failure", "A record that an authentication attempt did not complete successfully."],
  ["MFA", "A second or additional verification factor used with the primary sign-in method."],
  ["Session", "An authenticated period of activity associated with an account, device, application, or service."],
  ["Lockout", "A control that temporarily blocks authentication after defined failed-attempt conditions."],
  ["Reason code", "A source-defined value that explains why authentication succeeded, failed, or was challenged."],
  ["Source context", "The fictional device, address, location, application, network, or service associated with the attempt."],
  ["Service identity", "A nonhuman account used by an application, service, task, or automated process."],
  ["Password reset", "An approved process that replaces or recovers an account credential."],
  ["Impossible travel", "A monitoring pattern where sign-ins appear too far apart geographically to be explained by normal travel timing."],
];

const eventTypes = [
  {
    type: "Successful sign-in",
    records:
      "Account, time, source, device, application, authentication method, result, session, and policy outcome.",
    defenderQuestions:
      "Was the account expected, was the device recognized, did MFA complete, and did the application session match normal activity?",
    limitation:
      "A successful sign-in proves the workflow completed, not that the physical user or purpose is known with certainty.",
  },
  {
    type: "Failed sign-in",
    records:
      "Account, time, source, device, application, failure reason, attempt count, and policy response.",
    defenderQuestions:
      "Was the password mistyped, stale, expired, disabled, locked, reused by a service, or submitted from an unusual source?",
    limitation:
      "A failure does not automatically prove attack activity or compromise.",
  },
  {
    type: "MFA challenge",
    records:
      "Challenge issued, factor type, approval or denial, device, source, time, and session relationship.",
    defenderQuestions:
      "Did the challenge follow an expected sign-in, was it approved, denied, timed out, repeated, or reported as unexpected?",
    limitation:
      "Approval supports the sign-in sequence but does not identify the physical person with absolute certainty.",
  },
  {
    type: "Account lockout",
    records:
      "Account, threshold, time, source pattern, duration, unlock action, and related failures.",
    defenderQuestions:
      "Did failures come from one device, many devices, a service, a saved credential, or an approved test?",
    limitation:
      "The lockout confirms a control response, not the cause of the failures.",
  },
  {
    type: "Password reset or change",
    records:
      "Account, requester, approver, method, time, source, ticket, and completion state.",
    defenderQuestions:
      "Was the change expected, approved, verified, and followed by successful use from the normal device?",
    limitation:
      "A ticket or reset record does not prove every later authentication event is legitimate.",
  },
  {
    type: "Session creation or termination",
    records:
      "Account, application, device, source, token or session identifier, start, end, expiration, and revocation.",
    defenderQuestions:
      "Did the session follow expected authentication, remain active too long, end normally, or continue after an account change?",
    limitation:
      "Session evidence may not show every action performed within the session.",
  },
  {
    type: "Privilege or group change",
    records:
      "Account, group, role, administrator, time, source, approval, and result.",
    defenderQuestions:
      "Was the change approved, role-appropriate, temporary, reviewed, and removed when no longer needed?",
    limitation:
      "The event confirms the recorded change, not whether the resulting access was used.",
  },
  {
    type: "Service or application authentication",
    records:
      "Service identity, application, device, credential source, result, retry count, schedule, and dependency.",
    defenderQuestions:
      "Is the identity approved, owned, scoped, scheduled, and using current credentials?",
    limitation:
      "Repeated retries may reflect a stale secret or dependency rather than a human sign-in pattern.",
  },
];

const coreFields = [
  {
    field: "Account",
    meaning: "The user, administrator, service identity, guest, shared, or temporary account involved.",
    use: "Compare status, owner, role, privilege, groups, expiration, and expected applications.",
    caution: "The account label does not prove the physical person or complete purpose.",
  },
  {
    field: "Result",
    meaning: "Success, failure, challenge, denial, lockout, expiration, timeout, or partial completion.",
    use: "Separate attempted sign-in from completed authentication and from session creation.",
    caution: "Success is not automatically approved, and failure is not automatically malicious.",
  },
  {
    field: "Reason",
    meaning: "The source-defined explanation such as bad password, expired credential, disabled account, policy block, or MFA failure.",
    use: "Narrow the likely cause and identify the next evidence source.",
    caution: "Reason codes may be broad, source-specific, or incomplete.",
  },
  {
    field: "Source",
    meaning: "The fictional address, device, network, location, application, or service where the attempt originated.",
    use: "Compare the attempt with expected devices, networks, applications, travel, and schedules.",
    caution: "Source data can be shared, translated, proxied, delayed, or mapped imprecisely.",
  },
  {
    field: "Device",
    meaning: "The workstation, phone, server, browser, client, or managed endpoint associated with the attempt.",
    use: "Connect sign-in records with device ownership, health, history, and endpoint evidence.",
    caution: "A device name may be reused, stale, missing, or inferred by the platform.",
  },
  {
    field: "Application",
    meaning: "The service, portal, client, mail application, VPN, cloud resource, or business system requesting authentication.",
    use: "Identify which workflow produced the event and whether the application was expected.",
    caution: "One account may authenticate to several linked applications through a shared identity system.",
  },
  {
    field: "MFA state",
    meaning: "Challenge issued, factor type, approval, denial, timeout, bypass, or unavailable state.",
    use: "Understand whether additional verification was requested and completed.",
    caution: "A successful primary sign-in may not mean MFA was required for that exact workflow.",
  },
  {
    field: "Session identifier",
    meaning: "A value connecting authentication, token, application, and session events.",
    use: "Correlate the sign-in with later session creation, access, refresh, termination, or revocation.",
    caution: "Not every platform exposes the same identifier across all records.",
  },
  {
    field: "Time",
    meaning: "Event, collection, ingestion, and review timestamps associated with the authentication workflow.",
    use: "Build the sequence and compare failures, resets, MFA, sessions, and later activity.",
    caution: "Time zones, drift, precision, and collection delay can affect order.",
  },
  {
    field: "Policy outcome",
    meaning: "Allow, block, require MFA, require compliant device, require trusted network, or other access decision.",
    use: "Explain why the same password may succeed in one context and fail in another.",
    caution: "Policy labels need rule, scope, exception, owner, and configuration context.",
  },
];

const patternGuide = [
  {
    pattern: "One or two failed sign-ins from the usual device",
    possibleNormal:
      "Mistyped password, keyboard layout issue, recent reset, expired credential, or temporary connectivity problem.",
    reviewSignals:
      "Repeated continuation, later success from a different device, lockout, unusual application, or no owner explanation.",
    response:
      "Correlate device, reason code, password-change history, MFA, support report, and later success.",
  },
  {
    pattern: "Many failures from one application after a password reset",
    possibleNormal:
      "Old stored credential in mail, sync, backup, task, service, or mobile application.",
    reviewSignals:
      "Failures continue after credential update, source changes, many accounts affected, or service ownership is unknown.",
    response:
      "Identify the application or service, update the approved secret, validate recovery, and monitor for recurrence.",
  },
  {
    pattern: "One account from many sources",
    possibleNormal:
      "Multiple managed devices, VPN, mobile network, shared service infrastructure, or approved remote work.",
    reviewSignals:
      "Rapid source changes, unfamiliar devices, failed MFA, unusual applications, or privilege-sensitive activity.",
    response:
      "Compare device inventory, travel, VPN, application, session, owner, and endpoint evidence.",
  },
  {
    pattern: "Many accounts from one source",
    possibleNormal:
      "Shared portal, proxy, VPN gateway, application server, identity broker, or classroom lab system.",
    reviewSignals:
      "High failure rate, disabled accounts, unusual timing, no approved service, or policy blocks.",
    response:
      "Identify the shared infrastructure, application owner, request pattern, reason codes, and expected account population.",
  },
  {
    pattern: "Repeated MFA denials",
    possibleNormal:
      "User confusion, duplicate prompts, poor connectivity, old session, or an application retry.",
    reviewSignals:
      "Unexpected prompts, many accounts, new device, password reset, successful sign-in without owner confirmation, or later privilege change.",
    response:
      "Preserve challenge, sign-in, device, source, session, owner report, and policy evidence; follow approved escalation.",
  },
  {
    pattern: "Sign-in outside normal hours",
    possibleNormal:
      "Travel, deadline work, scheduled job, support, maintenance, backup, or different time zone.",
    reviewSignals:
      "Privileged account, unusual device, sensitive application, repeated failures, no change record, or impossible sequence.",
    response:
      "Add user role, schedule, travel, device, application, privilege, owner, and maintenance context.",
  },
  {
    pattern: "Successful sign-in after many failures",
    possibleNormal:
      "Correct password entered after mistakes, stale credential fixed, account unlocked, or service secret updated.",
    reviewSignals:
      "Different source or device, failed MFA, immediate account changes, new session, or sensitive access.",
    response:
      "Compare the successful event with the preceding failures, source, device, MFA, password history, and session activity.",
  },
  {
    pattern: "Service account authenticates interactively",
    possibleNormal:
      "Approved administrative test or support validation.",
    reviewSignals:
      "No ticket, unknown owner, broad privilege, new device, unusual time, or repeated interactive use.",
    response:
      "Verify ownership, approved purpose, allowed sign-in type, privilege, application dependency, and account policy.",
  },
];

const evidenceMatrix = [
  {
    source: "Authentication event",
    supports:
      "Account, source, device, application, method, result, reason, policy, and time recorded by the identity system.",
    limitation:
      "Does not prove the physical person, full intent, endpoint state, or every action after sign-in.",
  },
  {
    source: "MFA event",
    supports:
      "Challenge type, approval, denial, timeout, device, time, and relationship to a sign-in.",
    limitation:
      "Approval does not guarantee that the user understood the request or that every session action was approved.",
  },
  {
    source: "Endpoint record",
    supports:
      "Device health, user session, application process, local sign-in, browser, and protection context.",
    limitation:
      "May be delayed, incomplete, unavailable, or limited to the managed endpoint.",
  },
  {
    source: "Application session log",
    supports:
      "Session creation, token use, application access, request, expiration, and termination.",
    limitation:
      "May not show the original password event or every linked identity-system decision.",
  },
  {
    source: "Password or account-change record",
    supports:
      "Approved reset, credential change, disablement, unlock, group change, owner, and ticket context.",
    limitation:
      "Does not prove all later activity was expected or that stale credentials were updated everywhere.",
  },
  {
    source: "Network or VPN record",
    supports:
      "Connection source, gateway, remote-access session, device, duration, and network context.",
    limitation:
      "Shared gateways, translation, proxies, and mobile networks can hide the original source.",
  },
  {
    source: "User or owner report",
    supports:
      "Expected activity, travel, device use, observed prompts, password change, business need, and impact.",
    limitation:
      "Reports may be incomplete, approximate, delayed, or mistaken.",
  },
  {
    source: "Support or change ticket",
    supports:
      "Authorization, owner, reason, maintenance window, expected workflow, test, and validation.",
    limitation:
      "Documentation may not match the exact technical sequence.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the identity question",
    detail:
      "Identify the fictional account, application, device, time window, owner, privilege, and review objective.",
  },
  {
    step: "2",
    title: "Preserve authentication evidence",
    detail:
      "Capture event time, account, source, device, application, result, reason, MFA, session, and policy outcome.",
  },
  {
    step: "3",
    title: "Normalize and sequence",
    detail:
      "Align time zones, offsets, precision, collection delay, and event order across authentication, MFA, application, and endpoint sources.",
  },
  {
    step: "4",
    title: "Add identity context",
    detail:
      "Compare account status, role, privilege, groups, owner, expected devices, schedule, travel, and application use.",
  },
  {
    step: "5",
    title: "Correlate related sources",
    detail:
      "Connect password changes, lockouts, MFA, sessions, endpoint records, network activity, tickets, and user reports.",
  },
  {
    step: "6",
    title: "Document and escalate safely",
    detail:
      "Separate facts, conclusions, alternate explanations, gaps, confidence, impact, owner, and authorized next action.",
  },
];

const sampleTimeline = [
  {
    time: "07:55:00",
    source: "Change ticket",
    event: "Approved password reset begins for training-user-31",
    meaning:
      "Provides authorized owner and change context before the authentication events.",
  },
  {
    time: "07:57:14",
    source: "Identity",
    event: "Password reset completed successfully",
    meaning:
      "Confirms the identity platform recorded the credential change.",
  },
  {
    time: "07:58:03",
    source: "Authentication",
    event: "Failed sign-in from training-laptop-31",
    meaning:
      "Shows one unsuccessful attempt from the user's expected device.",
  },
  {
    time: "07:58:06",
    source: "Mail application",
    event: "Stored credential rejected",
    meaning:
      "Adds application evidence that can explain the authentication failure.",
  },
  {
    time: "07:58:21",
    source: "Authentication",
    event: "Second failed sign-in from the same device and application",
    meaning:
      "Supports an automatic retry pattern but still requires context.",
  },
  {
    time: "07:59:02",
    source: "Support",
    event: "User reports mail password was not updated",
    meaning:
      "Provides human context matching the application evidence.",
  },
  {
    time: "07:59:27",
    source: "Mail application",
    event: "Stored credential updated",
    meaning:
      "Shows the application configuration changed before successful authentication.",
  },
  {
    time: "07:59:31",
    source: "Authentication",
    event: "Successful sign-in from training-laptop-31",
    meaning:
      "Confirms the expected device authenticated after the stored credential changed.",
  },
  {
    time: "07:59:35",
    source: "MFA",
    event: "Approved challenge completed",
    meaning:
      "Corroborates the successful sign-in workflow with a second control.",
  },
  {
    time: "08:10:00",
    source: "Monitoring",
    event: "No additional failures observed",
    meaning:
      "Supports the stale-credential explanation and confirms the pattern stopped.",
  },
];

const mistakes = [
  "Treating every failed sign-in as an attack.",
  "Treating a successful sign-in as proof that the activity was approved.",
  "Assuming a username identifies the physical person with certainty.",
  "Ignoring service identities, stored credentials, scheduled tasks, mail clients, and synchronization tools.",
  "Ignoring approved password resets, travel, support, VPN use, maintenance, and device changes.",
  "Reviewing authentication without MFA, session, application, endpoint, network, or change context.",
  "Treating one source address as proof of exact location or user identity.",
  "Using impossible-travel labels without checking time normalization, VPN, mobile networks, and source accuracy.",
  "Ignoring reason codes, policy outcomes, account state, privilege, and application name.",
  "Resetting or disabling accounts without checking owners, services, sessions, and business dependencies.",
  "Mixing confirmed events, likely explanations, alternate explanations, and unsupported claims.",
  "Publishing real account names, addresses, devices, locations, applications, session IDs, or authentication records.",
];

const quizQuestions = [
  {
    question:
      "What does a successful sign-in directly prove?",
    choices: [
      "The authentication workflow completed successfully under the recorded conditions.",
      "The physical user is known with certainty.",
      "Every later action was approved.",
      "The device is fully secure.",
    ],
    answer: 0,
    explanation:
      "A successful result confirms the recorded workflow, not complete identity, intent, or session safety.",
  },
  {
    question:
      "What is a common expected cause of failures immediately after a password reset?",
    choices: [
      "An application, service, or device may still be using an old saved credential.",
      "The account must be stolen.",
      "The identity platform must be compromised.",
      "MFA must be disabled.",
    ],
    answer: 0,
    explanation:
      "Stale credentials commonly create retries after a valid password change.",
  },
  {
    question:
      "Why should MFA events be reviewed with authentication events?",
    choices: [
      "They show whether an additional challenge was issued and how it was completed.",
      "MFA replaces all other evidence.",
      "MFA proves the physical user with absolute certainty.",
      "MFA determines event time zones.",
    ],
    answer: 0,
    explanation:
      "MFA adds important context but still has evidence limits.",
  },
  {
    question:
      "What does an account lockout prove?",
    choices: [
      "The configured control responded to failed-attempt conditions.",
      "The user acted maliciously.",
      "The account is compromised.",
      "The password was correct.",
    ],
    answer: 0,
    explanation:
      "Lockout confirms the control action, not the cause of the failures.",
  },
  {
    question:
      "Why can one account appear from many source addresses?",
    choices: [
      "VPNs, mobile networks, proxies, multiple managed devices, and shared infrastructure can change source context.",
      "The account is always compromised.",
      "Source addresses never change.",
      "Authentication logs cannot record applications.",
    ],
    answer: 0,
    explanation:
      "Source interpretation requires network, device, travel, and application context.",
  },
  {
    question:
      "What is the strongest response to repeated unexpected MFA denials?",
    choices: [
      "Preserve sign-in and challenge evidence, verify through an approved channel, review device and session context, and escalate safely.",
      "Tell the user to approve the next prompt.",
      "Disable MFA.",
      "Publish the account details for help.",
    ],
    answer: 0,
    explanation:
      "Unexpected prompts require evidence preservation, safe verification, and authorized review.",
  },
  {
    question:
      "Which source best helps explain whether failures came from a saved mail password?",
    choices: [
      "Application logs showing stored-credential rejection and later update.",
      "Only a firewall severity label.",
      "Only the account display name.",
      "Only the successful sign-in.",
    ],
    answer: 0,
    explanation:
      "Application evidence can connect authentication failures to a stale saved credential.",
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

function EventTypeGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authentication Event Types
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Read the Full Identity Workflow
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {eventTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{item.type}</h3>

            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Common records
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.records}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defender questions
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defenderQuestions}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
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

function FieldGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Authentication Event Anatomy
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Ten Fields That Shape Sign-In Meaning
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {coreFields.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.field}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Defender use
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.use}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
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

function PatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Pattern Analysis
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Expected and Suspicious Patterns Need Context
      </h2>

      <div className="mt-6 grid gap-5">
        {patternGuide.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-white">{item.pattern}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                  Possible expected context
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.possibleNormal}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">
                  Review signals
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.reviewSignals}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  Strong response
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.response}
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
        What Authentication Evidence Can and Cannot Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">
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
        Review Authentication in Six Steps
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
        Correlated Authentication Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Combine Identity, Application, MFA, Support, and Change Evidence
      </h2>

      <div className="mt-6 grid gap-3">
        {sampleTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.25fr_0.85fr_1fr]"
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

export default function AuthenticationLogsPage() {
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
              Module I4
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4.3 Authentication Logs
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders review fictional sign-ins, failures, lockouts,
            MFA challenges, password changes, sessions, source context, and
            identity patterns without treating one event as proof of intent.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I4: Logs and Event Monitoring"
          lessonTitle="Authentication Logs"
          lessonNumber={3}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that authentication verifies identity while authorization controls access.",
            "I understand that successful and failed sign-ins both require user, device, application, source, policy, and time context.",
            "I will review MFA, sessions, password changes, lockouts, application evidence, and account state together.",
            "I will not assume that an account name proves the physical person or intent.",
            "I will use only fictional accounts, devices, addresses, applications, sessions, locations, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Failed Sign-In Is an Event, Not an Accusation"
        >
          <p className="leading-8">
            Authentication failures can come from mistyped passwords, stale
            saved credentials, expired secrets, disabled accounts, policy
            blocks, service retries, travel, unsupported clients, or suspicious
            activity. Defenders compare the full workflow before deciding what
            the pattern means.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “There were five failures, so the account is compromised.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong response
              </p>
              <p className="mt-2 leading-7">
                “Preserve the failures, check reason codes, device, source,
                application, MFA, account changes, owner context, and later
                sessions before assigning cause.”
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Identity Evidence Connects Accounts, Devices, Applications, Policies, and Sessions"
        >
          <p className="leading-8">
            Authentication logs help defenders understand who or what claimed
            an identity, where the attempt originated, which application
            requested access, what policy applied, whether MFA completed, and
            whether a session was created. No single field tells the whole
            story.
          </p>
        </SectionCard>

        <EventTypeGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Authentication Is a Sequence, Not a Single Record"
        >
          <p className="leading-8">
            A complete review may include password changes, sign-in attempts,
            MFA challenges, device checks, policy decisions, session creation,
            application access, session refresh, and termination. Defenders
            connect those records before writing a conclusion.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {[
              ["Claim", "Which account or service identity requested access?"],
              ["Verify", "Which password, key, token, certificate, or MFA factor was checked?"],
              ["Decide", "Which policy allowed, blocked, or challenged the request?"],
              ["Create", "Was a session or token created successfully?"],
              ["Monitor", "What later session, application, endpoint, or change evidence followed?"],
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

        <FieldGuide />
        <PatternGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Authentication Review Terms
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
          title="Fake Authentication Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services identity environment."
          metrics={[
            {
              label: "Successful sign-ins",
              value: "128",
              note: "Most match approved users, devices, applications, MFA, and normal schedules.",
            },
            {
              label: "Failed sign-ins",
              value: "23",
              note: "Fourteen are linked to stale credentials, five to mistyped passwords, and four remain under review.",
            },
            {
              label: "MFA denials",
              value: "3",
              note: "Two were user-reported accidental prompts and one requires additional session and device evidence.",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Failures Follow an Approved Password Reset"
          severity="Medium"
          time="08:12 AM"
          source="Fake Identity Monitoring Platform"
          details="A fictional account produces six failed mail-client sign-ins from its expected laptop after an approved password reset. The application reports an old stored credential. The failures stop after the saved credential is updated, and authentication plus MFA then succeed."
          recommendation="Preserve identity, application, MFA, change, support, and monitoring records; confirm the expected account and device; document the stale-credential explanation with high confidence; and monitor for recurrence."
        />

        <FakeLogPanel
          title="Fake Authentication Timeline"
          logs={[
            "07:55:00 CHANGE account='training-user-31' action='password_reset_started' approved='true'",
            "07:57:14 IDENTITY account='training-user-31' action='password_reset_completed' result='success'",
            "07:58:03 AUTH account='training-user-31' device='training-laptop-31' result='failed'",
            "07:58:06 APPLICATION name='mail-client' result='stored_credential_rejected'",
            "07:58:21 AUTH account='training-user-31' device='training-laptop-31' result='failed'",
            "07:59:02 SUPPORT report='mail_password_not_updated'",
            "07:59:27 APPLICATION name='mail-client' action='stored_credential_updated'",
            "07:59:31 AUTH account='training-user-31' device='training-laptop-31' result='success'",
            "07:59:35 MFA account='training-user-31' result='approved'",
            "08:10:00 MONITOR account='training-user-31' additional_failures='0'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Is the Strongest Authentication Conclusion?"
          evidence={[
            "The password reset was approved and completed.",
            "The failures came from the account's expected laptop.",
            "The mail application recorded a stale stored credential.",
            "The user reported that the mail password had not been updated.",
            "The saved credential was updated before the successful sign-in.",
            "MFA completed successfully after the updated sign-in.",
            "No additional failures occurred during the next ten minutes.",
            "No conflicting source or device evidence is supplied.",
          ]}
          question="Which conclusion is best supported?"
          options={[
            "The failures most likely came from the mail client retrying an old saved password after the approved reset.",
            "The account was definitely stolen.",
            "The user intentionally caused the failures.",
            "The logs prove that no other authentication activity occurred anywhere.",
          ]}
          bestAnswer={0}
          explanation="The change, authentication, application, support, MFA, and monitoring evidence support the stale-credential explanation without proving physical identity or every unrelated event."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Authentication Analysis"
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
          title="Review a Fictional Authentication Pattern"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fictional Environment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Identity Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review eighteen fictional records involving one user account,
                one service identity, two managed devices, one mail client, one
                cloud application, MFA, a password reset, a lockout, and a
                support ticket.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Preserve every original authentication record.</li>
                <li>Normalize time and order the events.</li>
                <li>Identify account, source, device, application, reason, MFA, session, and policy fields.</li>
                <li>Separate user and service-account activity.</li>
                <li>Compare expected devices, schedules, applications, and password-change context.</li>
                <li>Write confirmed facts, likely explanations, alternates, gaps, confidence, and impact.</li>
                <li>Recommend a safe owner and authorized next action.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional records. Do not test passwords, trigger
            MFA prompts, attempt sign-ins, access accounts, reset credentials,
            or publish real usernames, devices, addresses, applications,
            sessions, or authentication data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Unexpected MFA Prompts Are Reported"
          scenario="A fictional user reports three MFA prompts they did not expect. The authentication platform shows failed primary sign-ins from a new source, and no successful session is recorded."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve sign-in and MFA evidence, verify the report through an approved channel, review account, source, device, session, and password-change context, and follow the authorized escalation process.",
              outcome:
                "Best defensive choice. The prompts and failures require review without assuming compromise or asking the user to approve anything.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Tell the user to approve the next prompt to test whether it works.",
              outcome:
                "Unsafe. Users should not approve unexpected authentication prompts.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the prompts because no successful session exists.",
              outcome:
                "Weak response. Repeated unexpected prompts are still important evidence.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Service Account Produces Repeated Failures"
          scenario="A fictional backup service account produces a failed sign-in every five minutes after an approved password rotation. The failures stop when the service owner updates the stored secret, and the next scheduled backup succeeds."
          choices={[
            {
              label: "Choice A",
              response:
                "Document the stale service credential, preserve authentication and backup evidence, validate the approved secret update, confirm the successful backup, and monitor for recurrence.",
              outcome:
                "Best defensive choice. The pattern, owner, change, and recovery evidence support a service-credential explanation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare the service account compromised because the failures were repeated.",
              outcome:
                "Unsupported. Repetition alone does not prove compromise.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the service account immediately.",
              outcome:
                "Unsafe. The account has a documented backup dependency.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authentication Logs Checklist"
          items={[
            "I identify the fictional account, account type, owner, role, privilege, status, and expected applications.",
            "I preserve event time, source, device, application, result, reason, MFA, session, and policy evidence.",
            "I distinguish sign-in attempts, authentication success, MFA completion, session creation, and application access.",
            "I compare expected devices, networks, schedules, travel, applications, and service dependencies.",
            "I review password changes, account changes, lockouts, support tickets, and approved maintenance.",
            "I correlate authentication with endpoint, application, network, VPN, change, and owner evidence.",
            "I identify stale credentials, service retries, user mistakes, policy blocks, and review-required patterns.",
            "I separate confirmed facts, reasonable conclusions, alternate explanations, evidence gaps, and unsupported claims.",
            "I assign an owner and safe authorized next action without disrupting required services or accounts.",
            "I use only fictional evidence and never publish real account names, devices, addresses, locations, applications, sessions, or authentication records.",
          ]}
        />

        <MiniQuiz
          title="I4.3 Mini Quiz: Authentication Logs"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Authentication Review Report containing at least twenty events across authentication, MFA, application, endpoint, network, password-change, session, and support sources. Include account type, source, device, application, result, reason, policy, session, normalized time, expected-use context, confirmed facts, likely explanations, alternate explanations, evidence gaps, confidence, impact, owner, and safe next action."
          tips={[
            "Use only fictional accounts, devices, addresses, locations, applications, sessions, policies, and organizations.",
            "Include one stale-credential pattern, one MFA-denial pattern, one service-account pattern, and one evidence gap.",
            "Separate successful authentication from session creation and later application activity.",
            "Do not include real login screenshots, usernames, addresses, device names, applications, session IDs, or authentication records.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication logs record sign-ins, failures, MFA, lockouts, password changes, sessions, and identity decisions.",
            "Successful authentication does not automatically prove the physical person, approval, or safe later activity.",
            "Failed authentication does not automatically prove attack activity or compromise.",
            "Reason codes, device, source, application, MFA, policy, session, owner, and change context shape event meaning.",
            "Stale credentials and service retries can create repeated failures after valid password changes.",
            "Strong authentication review connects identity, endpoint, application, network, support, and governance evidence.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I4
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