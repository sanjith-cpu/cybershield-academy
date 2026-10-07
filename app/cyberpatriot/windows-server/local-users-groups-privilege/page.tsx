import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Distinguish local accounts, domain accounts, built-in accounts, service identities, and privileged groups on Windows Server.",
  "Use Computer Management, Local Users and Groups, and PowerShell to review local identities when they are applicable.",
  "Recognize when local account management is limited or different on a domain controller.",
  "Review Administrators and other privileged groups without removing accounts blindly.",
  "Identify service-account dependencies before disabling or changing an account.",
  "Apply least privilege while preserving required server roles, applications, and remote administration.",
];

const identityTypes = [
  {
    title: "Local user",
    text:
      "An account stored on the individual server. Local users are common on member servers but are not the main identity model on a domain controller.",
  },
  {
    title: "Domain user",
    text:
      "An account stored in Active Directory and usable according to domain permissions, group membership, and policy.",
  },
  {
    title: "Built-in account",
    text:
      "A Windows-created account or group with a special purpose. Built-in does not automatically mean unnecessary.",
  },
  {
    title: "Service account",
    text:
      "An identity used by a Windows service, scheduled task, application, or server role rather than a human user.",
  },
  {
    title: "Privileged group",
    text:
      "A group whose members receive administrative or security-sensitive rights.",
  },
  {
    title: "Computer account",
    text:
      "A machine identity used in Active Directory so systems can authenticate and participate in the domain.",
  },
];

const toolPaths = [
  {
    title: "Computer Management",
    path:
      "Win + R → compmgmt.msc → System Tools → Local Users and Groups → Users / Groups",
    note:
      "Use on member servers where Local Users and Groups is available. This snap-in is not the normal account-management path on a domain controller.",
  },
  {
    title: "Local Users and Groups",
    path:
      "Win + R → lusrmgr.msc",
    note:
      "Provides a direct view of local users and groups on supported non-domain-controller systems.",
  },
  {
    title: "Server Manager",
    path:
      "Start → Server Manager → Tools",
    note:
      "Provides links to administrative consoles, including Computer Management and domain tools when installed.",
  },
  {
    title: "Services",
    path:
      "Win + R → services.msc → double-click a service → Log On tab",
    note:
      "Shows whether a service runs under Local System, Network Service, Local Service, or a named account.",
  },
  {
    title: "Task Scheduler",
    path:
      "Win + R → taskschd.msc → Task Scheduler Library → open a task → General tab",
    note:
      "Shows which identity runs the task and whether it uses elevated privileges.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    note:
      "Useful for read-only inventory and verification when the cmdlets apply to the server's role.",
  },
];

const localAccountQuestions = [
  "Is this server a member server or a domain controller?",
  "Does this account have an explicit scenario purpose?",
  "Is the account enabled?",
  "Is it a member of Administrators or another privileged group?",
  "Does any service run under this account?",
  "Does any scheduled task run under this account?",
  "Does the account own required files, shares, or application data?",
  "Is the account used for RDP or another required administrative path?",
  "Is the account local or domain-based?",
  "What evidence would justify disabling, removing, or reducing its privilege?",
];

const groups = [
  {
    title: "Administrators",
    purpose:
      "Members receive broad local administrative rights and should be limited to identities that actually require them.",
  },
  {
    title: "Remote Desktop Users",
    purpose:
      "Can be used to authorize non-administrative RDP access when the scenario requires remote desktop.",
  },
  {
    title: "Users",
    purpose:
      "Standard local group for ordinary local user rights on a member server.",
  },
  {
    title: "Backup Operators",
    purpose:
      "Has powerful backup and restore capabilities and should be reviewed carefully if used.",
  },
  {
    title: "Event Log Readers",
    purpose:
      "Allows reading event logs without full administrative privilege.",
  },
  {
    title: "Performance-related groups",
    purpose:
      "May grant access to performance monitoring or logging without full administrative access.",
  },
];

const builtInAccounts = [
  {
    title: "Administrator",
    text:
      "The built-in Administrator account is highly privileged. Review its state, purpose, naming, and scenario requirements before changing it.",
  },
  {
    title: "Guest",
    text:
      "The built-in Guest account is normally highly restricted and commonly disabled, but verify the actual scenario before making assumptions.",
  },
  {
    title: "DefaultAccount / system-managed accounts",
    text:
      "Some built-in system-managed accounts support Windows functionality and should not be treated like ordinary user accounts.",
  },
  {
    title: "Service identities",
    text:
      "LocalSystem, LocalService, and NetworkService are Windows service identities, not normal human accounts.",
  },
];

const powerShellChecks = [
  {
    label: "Local users",
    command:
      "Get-LocalUser | Select-Object Name, Enabled, LastLogon, PasswordRequired, PasswordExpires",
    purpose:
      "Reviews local user state on systems where local-account cmdlets apply.",
  },
  {
    label: "Local groups",
    command:
      "Get-LocalGroup | Select-Object Name, Description",
    purpose:
      "Lists local groups for privilege and role review.",
  },
  {
    label: "Administrators",
    command:
      'Get-LocalGroupMember -Group "Administrators"',
    purpose:
      "Shows current local administrative membership on applicable member servers.",
  },
  {
    label: "Remote Desktop Users",
    command:
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
    purpose:
      "Reviews local RDP group membership when the group is used.",
  },
  {
    label: "Named service accounts",
    command:
      'Get-CimInstance Win32_Service | Select-Object Name, State, StartName, PathName',
    purpose:
      "Shows which identities services use so account dependencies are not missed.",
  },
  {
    label: "Scheduled-task principals",
    command:
      'Get-ScheduledTask | Select-Object TaskPath, TaskName, @{Name="RunAs";Expression={$_.Principal.UserId}}',
    purpose:
      "Helps identify tasks tied to a user or service identity.",
  },
];

const privilegeSignals = [
  {
    title: "Direct Administrators membership",
    text:
      "The account is explicitly present in the local Administrators group.",
  },
  {
    title: "Nested domain group",
    text:
      "A domain group may be added to local Administrators, giving all of its members local privilege.",
  },
  {
    title: "Service logon",
    text:
      "A named account may run a required service and therefore cannot be disabled casually.",
  },
  {
    title: "Scheduled-task principal",
    text:
      "A task may execute as the account, sometimes with highest privileges.",
  },
  {
    title: "RDP authorization",
    text:
      "The account may be part of an intended remote-administration workflow.",
  },
  {
    title: "File or share ownership",
    text:
      "An application or service may rely on the account's permissions or ownership.",
  },
];

const classifications = [
  {
    title: "Required",
    description:
      "The account or group membership has a documented scenario, service, application, role, or administrative purpose.",
    action:
      "Keep it and reduce privilege only if the required function can still operate safely.",
  },
  {
    title: "Unnecessary",
    description:
      "The identity is clearly unauthorized or unused and has no required dependency.",
    action:
      "Preserve relevant evidence, then disable, remove, or reduce privilege as justified.",
  },
  {
    title: "Investigate",
    description:
      "Purpose, ownership, logon history, service dependency, or authorization is unclear.",
    action:
      "Review services, tasks, logs, shares, application configuration, and scenario notes before changing it.",
  },
];

const serviceAccountReview = [
  {
    title: "What uses the account?",
    text:
      "Check Services, Task Scheduler, applications, IIS application pools if applicable, backup tools, databases, and scripts.",
  },
  {
    title: "What privilege does it have?",
    text:
      "Review group membership, local rights, and whether it is unnecessarily administrative.",
  },
  {
    title: "What happens if it is disabled?",
    text:
      "Identify the exact service, task, application, or role that would fail.",
  },
  {
    title: "Can privilege be reduced?",
    text:
      "If the function does not require full administration, use the smallest rights necessary.",
  },
  {
    title: "Is the password managed?",
    text:
      "Named service accounts may require coordinated password handling so dependent services do not break.",
  },
  {
    title: "Is the identity still needed?",
    text:
      "Old service accounts may remain after software is removed and should be investigated carefully.",
  },
];

const domainControllerNote = [
  "A domain controller does not use local users and local groups in the same way as a normal member server.",
  "Domain identities are primarily managed through Active Directory tools.",
  "Do not assume that missing Local Users and Groups means the system is broken.",
  "On a domain controller, review Active Directory users, groups, and domain privilege instead of treating it like a standalone server.",
];

const changeExamples = [
  {
    title: "Disable a confirmed unnecessary local user",
    command:
      'Disable-LocalUser -Name "exampleuser"',
    caution:
      "Use only on an applicable member server after confirming the account has no required dependency.",
    verify:
      'Get-LocalUser -Name "exampleuser"',
  },
  {
    title: "Remove unnecessary local administrative privilege",
    command:
      'Remove-LocalGroupMember -Group "Administrators" -Member "exampleuser"',
    caution:
      "Confirm the user still has the access needed for the scenario.",
    verify:
      'Get-LocalGroupMember -Group "Administrators"',
  },
];

const decisionCases = [
  {
    title: "Unknown account in Administrators",
    evidence:
      "A local member server contains an unfamiliar enabled user in Administrators.",
    reasoning:
      "The privilege is high-risk, but the account may support a service or remote-management workflow.",
    response:
      "Review services, tasks, RDP authorization, logs, and scenario requirements before removing privilege or disabling the account.",
  },
  {
    title: "Service runs as a named administrator",
    evidence:
      "A required application service runs under an account that is also in Administrators.",
    reasoning:
      "The account is required, but its administrative privilege may be broader than necessary.",
    response:
      "Document the dependency, determine the minimum rights the application needs, and reduce privilege only after testing in the authorized environment.",
  },
  {
    title: "Disabled account with no obvious purpose",
    evidence:
      "The account is disabled and has no recent logon or known service dependency.",
    reasoning:
      "Disabled state reduces immediate risk, but evidence is still needed before deletion.",
    response:
      "Check tasks, services, files, shares, and scenario notes before deciding whether to remove it permanently.",
  },
  {
    title: "Domain controller has no Local Users and Groups",
    evidence:
      "lusrmgr.msc does not provide the expected local-account view.",
    reasoning:
      "A domain controller manages identities differently from a normal member server.",
    response:
      "Move to Active Directory tools and domain-group review rather than forcing local-account procedures.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Identify the server role",
    text:
      "In the fictional environment, APP-SRV is a member server hosting a required application and one SMB share.",
  },
  {
    number: "02",
    title: "Open the account tools",
    text:
      "Use Computer Management → Local Users and Groups → Users and Groups to inventory local accounts and privileged membership.",
  },
  {
    number: "03",
    title: "Review service dependencies",
    text:
      "One account named AppSvc runs the required application service. Record the service name, startup state, and account before changing anything.",
  },
  {
    number: "04",
    title: "Classify identities",
    text:
      "Morgan is the required administrator, AppSvc is required but should be least-privileged, and TempAdmin is unknown and must be investigated.",
  },
  {
    number: "05",
    title: "Preserve and remediate",
    text:
      "Document TempAdmin's privilege, tasks, logons, and service usage. If no dependency or authorization exists, remove unnecessary privilege or disable the account.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm Morgan still has administrative access, the required application runs, the SMB share works, and no required task or service failed.",
  },
];

const mistakes = [
  {
    title: "Treating every unfamiliar account as malicious",
    text:
      "Service and application accounts may have unfamiliar names but legitimate dependencies.",
  },
  {
    title: "Deleting before disabling",
    text:
      "Disabling first can preserve context and make rollback easier while you verify dependencies.",
  },
  {
    title: "Removing privilege without checking services",
    text:
      "A service may fail if its account loses required rights.",
  },
  {
    title: "Using local-account steps on a domain controller",
    text:
      "Domain controllers require domain identity review through Active Directory tools.",
  },
  {
    title: "Leaving too many administrators",
    text:
      "Convenience-based privilege increases risk and should be reduced when the scenario permits.",
  },
  {
    title: "Forgetting RDP authorization",
    text:
      "A privilege change can accidentally break required remote administration.",
  },
];

const verification = [
  "Authorized administrators still have the required access.",
  "Required standard users remain enabled.",
  "Required service accounts still allow their services to start.",
  "Required scheduled tasks still run under valid identities.",
  "RDP or other remote administration still works when required.",
  "No unnecessary local administrator remains.",
  "No required application or share was broken by an account change.",
  "Important account-related events were reviewed after high-impact changes.",
];

const checklist = [
  "Identify whether the system is a member server or domain controller.",
  "Open the correct account-management tool for that role.",
  "Inventory users and privileged groups.",
  "Review Administrators membership.",
  "Review Remote Desktop Users when RDP is required.",
  "Check named service accounts.",
  "Check scheduled-task principals.",
  "Classify identities as Required, Unnecessary, or Investigate.",
  "Preserve evidence before disabling or removing suspicious accounts.",
  "Prefer least privilege over unnecessary administration.",
  "Verify required services and applications after changes.",
  "Verify remote administration after privilege changes.",
];

const reflection = [
  "Why should account review start by identifying whether the server is a member server or domain controller?",
  "What makes a service account different from a normal user account?",
  "Why can removing an account from Administrators break an application?",
  "Why is disabling often safer than immediately deleting an account?",
  "What evidence should exist before an account is classified as unnecessary?",
  "What should be verified after changing privilege?",
];

export default function LocalUsersGroupsPrivilegePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/server-manager-role-inventory" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/active-directory-users-computers" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Local Users, Groups &amp; Privilege
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review local identities, administrative privilege, service
                accounts, scheduled-task principals, and remote-access groups
                without breaking required server functions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The key question is not simply whether an account looks
                unfamiliar. The key question is what the identity does, what
                depends on it, and how much privilege it actually needs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Identity types</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main concern</span>
                  <span className="font-bold text-white">Privilege + dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Decision model</span>
                  <span className="font-bold text-white">3 categories</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Least privilege</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What this lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Identity map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six kinds of identities to recognize
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {identityTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Privilege should match the job
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A required account does not automatically need administrative
              rights. Preserve the function while reducing unnecessary
              privilege whenever the scenario permits.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Domain-controller warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Local account procedures do not apply everywhere
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Domain controllers manage identity through Active Directory rather
              than the normal local-user model used by member servers.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Identify the server role before opening Local Users and Groups.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review identities
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Domain-controller note
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know when to switch to Active Directory tools
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {domainControllerNote.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Account review questions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before changing an identity
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {localAccountQuestions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Important groups
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Privilege is often granted through groups
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Built-in identities
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Built-in does not mean safe to delete
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {builtInAccounts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory users, groups, services, and tasks
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powerShellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Privilege signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Where hidden privilege can appear
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {privilegeSignals.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Classification model
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Required, Unnecessary, or Investigate
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {classifications.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-300">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Service-account review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Accounts can be infrastructure
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceAccountReview.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Controlled change examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change only confirmed unnecessary access
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {changeExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Change
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Verify
                </p>
                <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-emerald-200">
                  {item.verify}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Identity decisions in server context
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review identities on APP-SRV
          </h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Identity mistakes that break servers
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your identity reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm privilege changes did not break the server
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving local identity review
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Active Directory Users &amp; Computers
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, move from local identity to domain identity: users,
                groups, computers, privileged memberships, account properties,
                and safe Active Directory review.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/active-directory-users-computers"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 04 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/server-manager-role-inventory" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/active-directory-users-computers" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
