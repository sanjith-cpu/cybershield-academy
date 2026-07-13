import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/windows-security-basics`;

const lessons = [
  {
    number: "I3.1",
    title: "Windows Accounts and Profiles",
    route: "windows-accounts-and-profiles",
    focus:
      "Understand local and connected accounts, standard and administrator roles, user profiles, account lifecycle, sign-in protections, and evidence-based access review.",
    lab:
      "Classify fictional Windows accounts and profiles by owner, role, privilege, activity, lifecycle, sign-in method, and approved purpose.",
    outcome:
      "Produce an account-and-profile review that identifies stale, overprivileged, shared, temporary, and ownerless identities.",
    evidence:
      "Account inventory, local-group membership, profile path, last sign-in, owner record, role history, and sign-in protection state.",
  },
  {
    number: "I3.2",
    title: "File Permissions and Shared Folders",
    route: "file-permissions-and-shared-folders",
    focus:
      "Interpret Windows file and folder access, inherited permissions, ownership, groups, sharing, effective access, and least privilege.",
    lab:
      "Review a fictional permissions matrix and identify broad, inherited, stale, duplicate, and mismatched access.",
    outcome:
      "Create a least-privilege permissions recommendation with ownership, validation, rollback, and documentation.",
    evidence:
      "NTFS-style permissions, inheritance, explicit entries, group membership, share access, ownership, classification, and usage records.",
  },
  {
    number: "I3.3",
    title: "Windows Updates and Security Settings",
    route: "windows-updates-and-security-settings",
    focus:
      "Connect update status, restart needs, support lifecycle, firewall settings, account protections, device encryption, and secure maintenance planning.",
    lab:
      "Prioritize fictional Windows updates and security-setting corrections using risk, compatibility, ownership, maintenance windows, and rollback.",
    outcome:
      "Build a Windows maintenance plan that separates security urgency from operational readiness.",
    evidence:
      "Installed updates, pending restart, support status, firewall profiles, encryption state, approved exceptions, backup, test, and change records.",
  },
  {
    number: "I3.4",
    title: "Microsoft Defender Concepts",
    route: "microsoft-defender-concepts",
    focus:
      "Understand built-in endpoint protection, real-time protection, scans, detections, quarantine, exclusions, reputation controls, and alert limitations.",
    lab:
      "Analyze fictional Defender alerts and decide which evidence, owner, containment, validation, and follow-up are needed.",
    outcome:
      "Write a detection review that distinguishes alert facts from assumptions and recommends safe next actions.",
    evidence:
      "Protection state, scan type, detection name, affected path, process context, action, quarantine, exclusion, reputation, and follow-up status.",
  },
  {
    number: "I3.5",
    title: "Event Viewer and Windows Logs",
    route: "event-viewer-and-windows-logs",
    focus:
      "Read fictional Security, System, Application, Defender, and setup events while using timestamps, sources, event IDs, users, and context correctly.",
    lab:
      "Correlate fictional Windows events into a timeline and separate confirmed facts from likely explanations and evidence gaps.",
    outcome:
      "Produce a confidence-rated Windows timeline supported by multiple logs and clearly stated limits.",
    evidence:
      "Log name, provider, event ID, timestamp, computer, user, process, service, result, correlation identifier, and change record.",
  },
  {
    number: "I3.6",
    title: "Startup Apps and Services",
    route: "startup-apps-and-services",
    focus:
      "Connect startup applications, scheduled activity, services, dependencies, users, executable paths, resource use, and approved system roles.",
    lab:
      "Review a fictional startup and service inventory for expected, failed, duplicate, stale, hidden, and review-required entries.",
    outcome:
      "Create a startup-and-service baseline with safe removal, restriction, validation, and rollback recommendations.",
    evidence:
      "Startup location, executable path, publisher, service account, state, dependencies, trigger, resource use, owner, package, and logs.",
  },
  {
    number: "I3.7",
    title: "Local Security Habits",
    route: "local-security-habits",
    focus:
      "Apply strong local-device habits involving locking, updates, downloads, removable media, browser safety, backups, accounts, privacy, and reporting.",
    lab:
      "Create a defensive Windows workstation checklist and evaluate fictional daily-use scenarios.",
    outcome:
      "Build a practical user-facing security guide that connects daily behavior with technical controls.",
    evidence:
      "Device-lock habits, update compliance, download source, removable-media handling, browser protections, backup status, and reporting workflow.",
  },
  {
    number: "I3.8",
    title: "Windows Security Review Lab",
    route: "windows-security-review-lab",
    focus:
      "Combine accounts, profiles, permissions, updates, Defender, event logs, startup items, services, settings, and local security habits.",
    lab:
      "Complete a multi-source fictional Windows security assessment and produce a professional improvement plan.",
    outcome:
      "Deliver a full Windows Security Review Report with prioritized findings, owners, evidence limits, validation, rollback, and monitoring.",
    evidence:
      "Inventory, identity, permissions, update status, Defender, events, startup, services, configuration, user behavior, and change management.",
  },
];

const objectives = [
  "Explain how Windows accounts, profiles, groups, privileges, sign-in methods, ownership, and lifecycle controls connect.",
  "Interpret file, folder, and shared-resource permissions using ownership, inheritance, effective access, and least privilege.",
  "Evaluate update status, restart requirements, support lifecycle, firewall settings, encryption, and built-in protections.",
  "Interpret fictional Microsoft Defender detections, scans, quarantines, exclusions, and reputation signals without overclaiming.",
  "Correlate Event Viewer records, service state, startup activity, user context, and system changes into defensible timelines.",
  "Create a safe Windows security review with evidence, confidence, ownership, validation, rollback, monitoring, and documentation.",
  "Distinguish confirmed device facts from reasonable conclusions, missing evidence, alternate explanations, and unsupported assumptions.",
  "Prioritize findings by exposure, privilege, sensitivity, business impact, confidence, dependency, and change readiness.",
];

const prerequisites = [
  "Completed I1 Networking for Defenders or can explain addresses, ports, services, firewalls, segmentation, and network evidence limits.",
  "Completed I2 Linux Basics for Security or can explain accounts, permissions, processes, services, logs, packages, updates, and safe change control.",
  "Understands least privilege, ownership, authorization, evidence preservation, rollback, validation, and defensive reporting.",
  "Agrees to use only fictional Windows systems, accounts, logs, alerts, paths, services, applications, and organizations.",
];

const workflow = [
  {
    step: "Identify",
    detail:
      "Confirm the fictional device role, owner, user population, sensitivity, exposure, support status, location, and approved purpose.",
  },
  {
    step: "Observe",
    detail:
      "Review accounts, profiles, permissions, updates, Defender state, event logs, startup items, services, and security settings.",
  },
  {
    step: "Correlate",
    detail:
      "Connect users, groups, paths, processes, services, event records, alerts, updates, network activity, and change history.",
  },
  {
    step: "Compare",
    detail:
      "Check observed state against the approved baseline, least privilege, system role, support policy, and maintenance plan.",
  },
  {
    step: "Document",
    detail:
      "Record confirmed facts, confidence, missing evidence, risk, owner, recommendation, validation, rollback, and review date.",
  },
];

const bigIdeas = [
  {
    title: "A Windows device is a system of connected controls",
    detail:
      "Accounts, profiles, permissions, Defender, firewall settings, update state, services, startup items, logs, and user behavior influence one another.",
  },
  {
    title: "An alert is not the same as a conclusion",
    detail:
      "A Defender detection, Event Viewer record, or failed sign-in must be interpreted with file, process, user, device, network, owner, and timeline evidence.",
  },
  {
    title: "Least privilege applies to people and software",
    detail:
      "Standard users, administrators, service accounts, startup apps, scheduled tasks, shared folders, and exclusions should receive only the access they need.",
  },
  {
    title: "Security and reliability must be managed together",
    detail:
      "Updates, service changes, account removal, permission correction, and startup cleanup need testing, rollback, validation, and monitoring.",
  },
  {
    title: "Local habits affect technical outcomes",
    detail:
      "Locking, downloading, browsing, reporting, removable media, backups, and account choices determine whether technical controls can work effectively.",
  },
  {
    title: "Evidence limits must be stated clearly",
    detail:
      "Windows logs, alerts, timestamps, user names, file paths, and process records can support facts without proving complete intent or root cause.",
  },
];

const accountModels = [
  {
    type: "Standard user",
    purpose:
      "Supports everyday work with limited ability to change system-wide settings.",
    risks:
      "May still expose data through downloads, browser activity, shared folders, removable media, or weak daily habits.",
    review:
      "Owner, role, profile, groups, sign-in method, recent activity, application need, and lifecycle.",
  },
  {
    type: "Local administrator",
    purpose:
      "Performs approved device management or support tasks.",
    risks:
      "Permanent broad privilege increases impact if the account is misused, shared, stale, or poorly monitored.",
    review:
      "Named ownership, separate standard account, approval, activity, duration, support need, monitoring, and review date.",
  },
  {
    type: "Connected organizational account",
    purpose:
      "Provides managed access to applications, settings, files, and organizational services.",
    risks:
      "Old group assignments, profile data, sign-in tokens, and shared-device use can outlive the original role.",
    review:
      "Current employment or student status, group assignments, device ownership, profile state, sign-in protection, and offboarding.",
  },
  {
    type: "Service identity",
    purpose:
      "Runs an approved Windows service, scheduled activity, automation, or application component.",
    risks:
      "Overprivilege, interactive sign-in, unknown ownership, stale credentials, broad folder access, and hidden dependencies.",
    review:
      "Service owner, exact dependency, privilege, logon rights, executable path, credential management, monitoring, and expiration.",
  },
  {
    type: "Temporary support account",
    purpose:
      "Supports time-limited troubleshooting, migration, vendor work, or deployment.",
    risks:
      "Accounts may remain enabled, privileged, or assigned to groups after the approved work ends.",
    review:
      "Ticket, owner, approval, expiration, last activity, group membership, profile data, and confirmed removal.",
  },
  {
    type: "Disabled or retired account",
    purpose:
      "Preserves historical ownership, profile, or audit context after active use ends.",
    risks:
      "May still own files, scheduled tasks, services, encrypted data, or cached resources.",
    review:
      "Login disabled, ownership transferred, jobs reassigned, groups removed, data retained correctly, and profile archived or removed.",
  },
];

const permissionConcepts = [
  {
    title: "Ownership",
    detail:
      "The recorded owner may be able to change permissions and should match the approved data or system responsibility.",
  },
  {
    title: "Explicit permissions",
    detail:
      "Access entries applied directly to a file or folder may override the simplicity of inherited design.",
  },
  {
    title: "Inherited permissions",
    detail:
      "Permissions passed from a parent folder can provide efficient management but may also spread overly broad access.",
  },
  {
    title: "Group-based access",
    detail:
      "Access is easier to govern through approved role groups than through many individual entries.",
  },
  {
    title: "Effective access",
    detail:
      "The final result depends on all relevant user, group, inherited, explicit, deny, and share conditions.",
  },
  {
    title: "Share and local permissions",
    detail:
      "Network access can depend on both shared-folder rules and local file-system permissions.",
  },
];

const protectionLayers = [
  {
    layer: "Account and sign-in protection",
    controls:
      "Standard-user use, strong sign-in methods, limited administrator membership, lockout, session locking, and lifecycle review.",
  },
  {
    layer: "File and data protection",
    controls:
      "Least-privilege permissions, approved sharing, ownership, encryption, backup, classification, and retention.",
  },
  {
    layer: "Endpoint protection",
    controls:
      "Real-time protection, reputation checks, scans, quarantine, cloud-delivered protection, controlled exclusions, and alert review.",
  },
  {
    layer: "Network protection",
    controls:
      "Firewall profiles, approved services, restricted sharing, trusted zones, segmentation, and monitored connections.",
  },
  {
    layer: "System maintenance",
    controls:
      "Supported versions, security updates, restart completion, application compatibility, backup, rollback, and post-change validation.",
  },
  {
    layer: "Visibility and response",
    controls:
      "Event Viewer, Defender records, service logs, monitoring, ownership, incident reporting, and documented escalation.",
  },
];

const evidenceSources = [
  {
    title: "Account and profile evidence",
    supports:
      "Account type, owner, group membership, privilege, profile path, last sign-in, status, and lifecycle.",
    limitation:
      "Does not prove the person behind every action or whether all profile data is still needed.",
  },
  {
    title: "Permission and sharing evidence",
    supports:
      "Ownership, inherited and explicit permissions, group access, share rules, and effective access.",
    limitation:
      "Does not prove the approved business purpose or every application-level restriction.",
  },
  {
    title: "Update and settings evidence",
    supports:
      "Installed updates, pending restart, support state, firewall profile, encryption, and security settings.",
    limitation:
      "Does not prove application compatibility or that every control is functioning correctly.",
  },
  {
    title: "Defender evidence",
    supports:
      "Protection state, scan result, detection, file path, process context, action, quarantine, and exclusion.",
    limitation:
      "Does not automatically prove user intent, full origin, or complete system compromise.",
  },
  {
    title: "Windows event evidence",
    supports:
      "Timestamp, log name, provider, event ID, user, process, service, result, device, and sequence.",
    limitation:
      "Logs may be incomplete, filtered, overwritten, delayed, or missing context from another source.",
  },
  {
    title: "Startup and service evidence",
    supports:
      "Startup source, executable path, publisher, service account, state, dependencies, trigger, and resource use.",
    limitation:
      "Running or starting automatically does not prove approved need or safe configuration.",
  },
  {
    title: "Network and firewall evidence",
    supports:
      "Observed connections, listening services, ports, profiles, allow or deny decisions, and network scope.",
    limitation:
      "Does not prove complete application purpose, data content, or user intent.",
  },
  {
    title: "Change and ownership evidence",
    supports:
      "Approval, owner, deployment, exception, maintenance, test, rollback, and review context.",
    limitation:
      "Does not prove the final technical state matches the documented plan.",
  },
  {
    title: "User-behavior and support evidence",
    supports:
      "Reported downloads, removable-media use, browser prompts, support actions, and daily device habits.",
    limitation:
      "Human reports may be incomplete and should be correlated with technical records.",
  },
];

const fakeEvents = [
  {
    time: "09:12:04",
    source: "Inventory",
    event: "training-win-04 documented as a staff learning workstation",
    meaning:
      "Provides the approved device role, owner, environment, and expected protections.",
  },
  {
    time: "09:14:28",
    source: "Account",
    event: "Temporary support account remains in the local Administrators group",
    meaning:
      "Confirms current privilege but still requires lifecycle, owner, and dependency review.",
  },
  {
    time: "09:17:41",
    source: "Defender",
    event: "Potentially unwanted application quarantined from Downloads",
    meaning:
      "Confirms a detection and quarantine action, not the user's intent or complete origin by itself.",
  },
  {
    time: "09:20:33",
    source: "Update",
    event: "Security update installed; restart still required",
    meaning:
      "Shows package installation status but not the final active or validated running state.",
  },
  {
    time: "09:23:06",
    source: "Event Viewer",
    event: "Application startup failure follows missing permission on a shared configuration folder",
    meaning:
      "Connects application failure with access context but still needs ownership and change evidence.",
  },
  {
    time: "09:28:15",
    source: "Service",
    event: "Legacy synchronization service starts automatically with no current owner",
    meaning:
      "Shows active startup behavior and an ownership gap that requires dependency review.",
  },
];

const caseFindings = [
  {
    finding: "Expired administrator account",
    evidence:
      "Account remains enabled, belongs to local Administrators, expired nine days ago, and has no active ticket.",
    risk:
      "Unnecessary elevated access increases impact and weakens accountability.",
    priority: "High",
  },
  {
    finding: "Publicly shared internal project folder",
    evidence:
      "Share is reachable by all staff, folder contains internal deployment notes, and inherited access exceeds the approved project group.",
    risk:
      "Internal information is available beyond the intended team.",
    priority: "High",
  },
  {
    finding: "Defender exclusion without owner",
    evidence:
      "A broad Downloads-folder exclusion exists, no current change record exists, and the original testing project ended.",
    risk:
      "Broad exclusion reduces scanning coverage in a high-risk location.",
    priority: "High",
  },
  {
    finding: "Pending restart after security update",
    evidence:
      "Update installed successfully, restart required, maintenance window still open, and rollback is prepared.",
    risk:
      "The intended protected running state is not yet active.",
    priority: "Medium",
  },
  {
    finding: "Unowned legacy startup service",
    evidence:
      "Service starts automatically, project ended, no recent use appears, and dependency ownership is incomplete.",
    risk:
      "Unnecessary software and startup exposure increase attack surface and maintenance burden.",
    priority: "Medium",
  },
];

const glossary = [
  ["Local account", "An account created and managed on one Windows device."],
  ["Connected account", "An account linked to an organizational or online identity service."],
  ["User profile", "The collection of user-specific settings, data, folders, and application state."],
  ["Administrator", "An account or group with elevated authority to make system-wide changes."],
  ["Inheritance", "The process by which a file or folder receives permissions from a parent location."],
  ["Effective access", "The final access result after all relevant user, group, inherited, explicit, deny, and sharing rules are considered."],
  ["Real-time protection", "Continuous monitoring intended to identify and respond to suspicious files, processes, or activity."],
  ["Quarantine", "A controlled location or state used to isolate a detected item from normal use."],
  ["Exclusion", "A configured location, process, or object that a protection control does not inspect normally."],
  ["Event ID", "A numeric identifier used with a provider and log context to classify an event type."],
  ["Provider", "The Windows component, application, service, or control that generated an event."],
  ["Startup application", "Software configured to start when a user signs in or the system starts."],
  ["Service", "A background component managed by Windows to provide system or application functions."],
  ["Pending restart", "A state in which an installed change requires a restart before the intended running state is active."],
  ["Device encryption", "Protection that helps prevent unauthorized access to data stored on a device."],
  ["Firewall profile", "A set of firewall behavior associated with a network type or trust context."],
];

const commonMistakes = [
  "Assuming every Windows account belongs to an active person or current role.",
  "Giving permanent administrator access for occasional support tasks.",
  "Reviewing only share permissions and ignoring local file permissions.",
  "Treating inherited access as automatically correct because it came from a parent folder.",
  "Assuming an installed update is complete when a restart is still required.",
  "Disabling Defender protection or creating broad exclusions for convenience.",
  "Treating one Defender detection as proof of complete system compromise.",
  "Reading one Event Viewer record without checking related events, provider, time, user, process, and change history.",
  "Stopping startup apps or services before checking dependencies and owner records.",
  "Treating high resource use or an unfamiliar publisher as proof of malicious activity.",
  "Ignoring encryption, backups, recovery, and support lifecycle because the device appears healthy.",
  "Publishing real usernames, hostnames, event data, paths, device identifiers, or security settings in a portfolio.",
];

const standards = [
  {
    title: "Evidence first",
    detail:
      "Record the original state before recommending account, permission, update, service, or Defender changes.",
  },
  {
    title: "One change at a time",
    detail:
      "Sequence corrections so the team can validate cause and effect and roll back safely.",
  },
  {
    title: "Named ownership",
    detail:
      "Every account, share, exclusion, service, exception, and finding needs a responsible owner.",
  },
  {
    title: "Time-bounded exceptions",
    detail:
      "Temporary privilege, exclusions, delayed updates, and broad access require expiration and review.",
  },
  {
    title: "Validation after change",
    detail:
      "Confirm sign-in, application function, permissions, Defender state, services, logs, network access, and user impact.",
  },
  {
    title: "Privacy-respecting documentation",
    detail:
      "Use fictionalized evidence and avoid exposing real device, user, event, file, or security details.",
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}

export default function WindowsSecurityBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href={trackPath}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
            <Link
              href={`${trackPath}/linux-basics-for-security`}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Previous Module
            </Link>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  High School Intermediate
                </span>
                <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                  Module I3 of 17
                </span>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
                  Defensive Only
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                I3: Windows Security Basics
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build safe Windows foundations for accounts, profiles,
                permissions, updates, built-in protection, Event Viewer,
                startup activity, services, local security habits, and
                evidence-based defensive administration.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/windows-accounts-and-profiles`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start I3.1
                </Link>
                <Link
                  href={`${modulePath}/module-test`}
                  className="rounded-xl border border-yellow-300/50 bg-yellow-300/10 px-6 py-3 font-black text-yellow-100 transition hover:border-yellow-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                Module Snapshot
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Stat label="Track" value="Intermediate" />
                <Stat label="Module" value="I3 of 17" />
                <Stat label="Lessons" value="8" />
                <Stat label="Module test" value="25 questions" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
                <p className="font-black text-blue-200">
                  Windows defense in context
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  This module connects identity, permissions, updates,
                  Microsoft Defender, event logs, startup items, services,
                  user behavior, and secure maintenance into one workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:px-8">
        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Main Question
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              How do defenders review a Windows device without confusing one
              setting, alert, event, account, or startup item with the complete
              security story?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
              Students will compare the approved device role with accounts,
              permissions, protection state, updates, logs, startup activity,
              services, settings, ownership, user behavior, and change history
              before making controlled recommendations.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety Boundary
            </p>
            <p className="mt-4 leading-7 text-yellow-50">
              Every Windows device, account, profile, path, permission, alert,
              event, service, setting, application, file, share, and
              organization in this module is fictional. Practice stays
              authorized, read-only, and limited to supplied training evidence.
            </p>
          </div>
        </section>

        <SectionCard
          eyebrow="Prerequisites"
          title="What Students Should Bring into Module I3"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {prerequisites.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="Identify, Observe, Correlate, Compare, and Document"
        >
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-black text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="What Students Will Be Able to Do"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {objectives.map((objective) => (
              <div
                key={objective}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-slate-950">
                  ✓
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Big Ideas"
          title="Six Ideas That Shape the Entire Module"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bigIdeas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Module Path
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Eight Intermediate Lessons
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Each lesson includes professional hooks, fictional Windows
              evidence, technical comparison, defensive workflows, safe labs,
              scenario decisions, a scored quiz, a checklist, and a portfolio
              prompt.
            </p>
          </div>

          <div className="grid gap-5">
            {lessons.map((lesson, index) => (
              <Link
                key={lesson.number}
                href={`${modulePath}/${lesson.route}`}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div className="grid gap-5 xl:grid-cols-[0.18fr_0.9fr_1fr_1fr_auto] xl:items-center">
                  <div>
                    <p className="text-lg font-black text-cyan-300">
                      {lesson.number}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Lesson {index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.lab}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                      Lesson Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.outcome}
                    </p>
                  </div>

                  <span className="font-black text-cyan-300">Open →</span>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Primary Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.evidence}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Identity Model"
          title="Windows Accounts and Profiles Need Lifecycle Control"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {accountModels.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Main risks
                  </p>
                  <p className="mt-2 text-sm leading-6 text-red-50">
                    {item.risks}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Review evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Permission Model"
          title="Effective Access Is More Than One Permission Entry"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {permissionConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Intermediate defenders do not ask only, “Can this user open the
            folder?” They ask, “Through which user, group, inherited rule,
            explicit rule, share, owner, and approved role does this access
            exist?”
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Defense-in-Depth"
          title="Six Protection Layers on a Windows Device"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {protectionLayers.map((item, index) => (
              <div
                key={item.layer}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.18fr_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-black text-white">{item.layer}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.controls}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Evidence Model"
          title="Nine Windows Evidence Sources Students Will Connect"
        >
          <div className="grid gap-4">
            {evidenceSources.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.6fr_1fr_1fr]"
              >
                <h3 className="font-black text-cyan-100">{item.title}</h3>
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
        </SectionCard>

        <SectionCard
          eyebrow="Fake Evidence Preview"
          title="How Intermediate Windows Evidence Connects"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            {fakeEvents.map((event) => (
              <div
                key={`${event.time}-${event.source}`}
                className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.45fr_0.5fr_1.1fr_1.4fr]"
              >
                <p className="font-mono text-sm text-slate-400">{event.time}</p>
                <p className="font-black text-cyan-200">{event.source}</p>
                <p className="text-sm text-slate-200">{event.event}</p>
                <p className="text-sm leading-6 text-yellow-100">
                  {event.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
            A strong conclusion uses the records together: device purpose,
            account privilege, file access, protection state, update status,
            restart needs, event logs, service ownership, and current defensive
            need.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Integrated Case Preview"
          title="Fictional Windows Review Finding Matrix"
        >
          <div className="grid gap-4">
            {caseFindings.map((item) => (
              <div
                key={item.finding}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 xl:grid-cols-[0.8fr_1.2fr_1fr_0.3fr]"
              >
                <p className="font-black text-white">{item.finding}</p>
                <p className="text-sm leading-6 text-slate-300">
                  {item.evidence}
                </p>
                <p className="text-sm leading-6 text-yellow-100">
                  {item.risk}
                </p>
                <span
                  className={`h-fit rounded-full px-3 py-1 text-center text-xs font-black uppercase tracking-[0.12em] ${
                    item.priority === "High"
                      ? "bg-red-400/15 text-red-200"
                      : "bg-yellow-400/15 text-yellow-200"
                  }`}
                >
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Vocabulary"
          title="Core Windows Security Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {glossary.map(([term, definition]) => (
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
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Windows Security Reviews"
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
          eyebrow="Professional Standards"
          title="How Every I3 Recommendation Should Be Written"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-400/25 bg-slate-950 p-5"
              >
                <h3 className="font-black text-emerald-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Portfolio Outcome
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Windows Security Review Report
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students will build a fictional report containing a device-role
              summary, account and profile review, permissions matrix, update
              and settings assessment, Defender evidence, Event Viewer
              timeline, startup and service review, local-security checklist,
              prioritized risks, evidence limits, owners, and authorized next
              actions.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Executive summary",
                "Scope and authorization",
                "Device role and owner",
                "Account and profile matrix",
                "Permissions and sharing review",
                "Update and settings status",
                "Defender analysis",
                "Event timeline",
                "Startup and service review",
                "Risk prioritization",
                "Validation and rollback",
                "Final baseline",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm font-semibold text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300/30 bg-yellow-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Module Assessment
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              25-Question I3 Module Test
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              The test will cover Windows accounts, profiles, permissions,
              shared folders, updates, security settings, Defender concepts,
              Event Viewer, startup apps, services, local security habits,
              evidence limits, change control, and integrated analysis.
              Answers stay hidden until submission.
            </p>

            <div className="mt-5 rounded-2xl border border-yellow-200/20 bg-slate-950/40 p-4 text-sm leading-6 text-yellow-50">
              <p className="font-black text-yellow-100">Assessment domains</p>
              <p className="mt-2">
                Identity, permissions, updates, Defender, logs, startup,
                services, user behavior, evidence correlation, prioritization,
                and safe defensive response.
              </p>
            </div>

            <Link
              href={`${modulePath}/module-test`}
              className="mt-6 inline-flex rounded-xl bg-yellow-300 px-5 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            Completion Path
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            How to Complete Module I3
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Complete all eight lessons", "Finish every explanation, lab, scenario, quiz, checklist, and portfolio prompt."],
              ["2", "Build the portfolio report", "Combine evidence from all lessons into one fictional Windows review."],
              ["3", "Take the module test", "Complete all 25 questions and identify weak domains."],
              ["4", "Review and validate", "Return to weak lessons and improve the final report before moving to I4."],
            ].map(([step, title, detail]) => (
              <div
                key={step}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {step}
                </div>
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href={trackPath}
            className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Intermediate Track
          </Link>
          <Link
            href={`${modulePath}/windows-accounts-and-profiles`}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Start I3.1 →
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}