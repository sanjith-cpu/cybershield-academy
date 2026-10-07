import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Use Active Directory Users and Computers to review domain users, groups, computers, and organizational units safely.",
  "Recognize the difference between local privilege and domain privilege.",
  "Identify high-impact groups such as Domain Admins and other administrative groups without changing membership blindly.",
  "Review user-account properties, disabled status, group membership, and logon context before taking action.",
  "Recognize service, application, and administrative dependencies tied to domain accounts.",
  "Apply least privilege while preserving required domain authentication, services, and management access.",
];

const coreConcepts = [
  {
    title: "Domain user",
    text:
      "An identity stored in Active Directory and authenticated by domain controllers according to domain policy and group membership.",
  },
  {
    title: "Domain group",
    text:
      "A collection of users, computers, or other groups used to assign access and privilege across the domain.",
  },
  {
    title: "Computer account",
    text:
      "An Active Directory object representing a domain-joined computer and its relationship with the domain.",
  },
  {
    title: "Organizational Unit",
    text:
      "A container used to organize Active Directory objects and often apply delegated administration or Group Policy.",
  },
  {
    title: "Privileged group",
    text:
      "A group whose members receive administrative rights over the domain, servers, services, or sensitive resources.",
  },
  {
    title: "Service identity",
    text:
      "A domain account or managed identity used by a service, scheduled task, application, or server role instead of a person.",
  },
];

const toolPaths = [
  {
    title: "Active Directory Users and Computers",
    path:
      "Server Manager → Tools → Active Directory Users and Computers",
    shortcut:
      "Win + R → dsa.msc",
    note:
      "Primary console for reviewing domain users, groups, computers, OUs, and many account properties when AD DS tools are installed.",
  },
  {
    title: "Advanced Features",
    path:
      "Active Directory Users and Computers → View → Advanced Features",
    shortcut:
      "Enable only when you need the additional tabs and containers.",
    note:
      "Shows additional objects and account properties. Use carefully because more administrative options become visible.",
  },
  {
    title: "Find objects",
    path:
      "Active Directory Users and Computers → right-click the domain → Find",
    shortcut:
      "Search users, groups, or computers by name.",
    note:
      "Useful when the directory is large and you need to locate a specific account or group quickly.",
  },
  {
    title: "User properties",
    path:
      "Active Directory Users and Computers → locate user → right-click → Properties",
    shortcut:
      "Review General, Account, Member Of, and other relevant tabs.",
    note:
      "Inspect before changing. Group membership and account status can affect services and administrative access.",
  },
  {
    title: "Group properties",
    path:
      "Active Directory Users and Computers → locate group → right-click → Properties → Members",
    shortcut:
      "Review membership and purpose before changing it.",
    note:
      "Administrative groups require especially careful review because one membership change can affect the entire domain.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    shortcut:
      "Use the ActiveDirectory module when installed.",
    note:
      "Useful for read-only inventory with Get-ADUser, Get-ADGroup, Get-ADGroupMember, and Get-ADComputer.",
  },
];

const structureMap = [
  {
    title: "Domain root",
    text:
      "The top of the directory namespace. Objects and OUs appear beneath it.",
  },
  {
    title: "Users container",
    text:
      "Often contains built-in or default users and groups, though real environments may organize identities into custom OUs.",
  },
  {
    title: "Computers container",
    text:
      "May contain computer accounts that have not been moved into a custom OU.",
  },
  {
    title: "Domain Controllers OU",
    text:
      "Contains domain-controller computer accounts and is especially sensitive because Group Policy and administration can differ here.",
  },
  {
    title: "Custom OUs",
    text:
      "Organizations often use OUs for departments, servers, workstations, service accounts, or delegated administration.",
  },
  {
    title: "Built-in container",
    text:
      "Contains built-in domain groups and security principals that should not be treated like ordinary custom groups.",
  },
];

const userReviewQuestions = [
  "Is this account explicitly authorized by the scenario?",
  "Is the account enabled or disabled?",
  "What is the account's username and display name?",
  "Which groups is the account a member of?",
  "Does the account have domain-wide or server-specific privilege?",
  "Is the account used by a service, task, application, or script?",
  "Is the account required for RDP or another administrative workflow?",
  "Does the account appear to be a normal human user or a service identity?",
  "Do recent logs show successful or failed logons for the account?",
  "What evidence would justify disabling, deleting, or reducing its privilege?",
];

const privilegedGroups = [
  {
    title: "Domain Admins",
    impact:
      "Members typically receive broad administrative control over the domain and domain-joined systems.",
    review:
      "Membership should be limited to identities that clearly require domain-wide administration.",
  },
  {
    title: "Enterprise Admins",
    impact:
      "Highly privileged in multi-domain forests and normally unnecessary for ordinary daily administration.",
    review:
      "Treat membership as extremely sensitive and verify every member's purpose.",
  },
  {
    title: "Schema Admins",
    impact:
      "Can modify the Active Directory schema and is rarely needed for routine operations.",
    review:
      "Unexpected membership deserves careful investigation.",
  },
  {
    title: "Administrators",
    impact:
      "Built-in administrative group with powerful rights in the domain context.",
    review:
      "Review carefully and understand nested memberships before making changes.",
  },
  {
    title: "Account Operators",
    impact:
      "Can manage many user and group objects depending on domain configuration.",
    review:
      "May be legitimate but grants substantial identity-management authority.",
  },
  {
    title: "Server Operators / Backup Operators",
    impact:
      "Can receive powerful operational rights on domain controllers and related systems.",
    review:
      "Review membership and necessity instead of assuming these groups are harmless.",
  },
];

const powerShellChecks = [
  {
    label: "Domain users",
    command:
      "Get-ADUser -Filter * -Properties Enabled, LastLogonDate | Select-Object Name, SamAccountName, Enabled, LastLogonDate",
    purpose:
      "Creates a broad read-only domain-user inventory when the ActiveDirectory module is available.",
  },
  {
    label: "Disabled domain users",
    command:
      "Get-ADUser -Filter 'Enabled -eq $false' | Select-Object Name, SamAccountName",
    purpose:
      "Shows disabled accounts for review without changing them.",
  },
  {
    label: "Domain groups",
    command:
      "Get-ADGroup -Filter * | Select-Object Name, GroupScope, GroupCategory",
    purpose:
      "Inventories domain groups and shows their scope and security/distribution category.",
  },
  {
    label: "Domain Admins membership",
    command:
      'Get-ADGroupMember -Identity "Domain Admins" | Select-Object Name, SamAccountName, ObjectClass',
    purpose:
      "Reviews direct Domain Admins membership.",
  },
  {
    label: "User group membership",
    command:
      'Get-ADPrincipalGroupMembership -Identity "username" | Select-Object Name',
    purpose:
      "Shows the groups associated with a specific identity. Replace username with the account being reviewed.",
  },
  {
    label: "Domain computers",
    command:
      "Get-ADComputer -Filter * -Properties Enabled, LastLogonDate | Select-Object Name, Enabled, LastLogonDate",
    purpose:
      "Creates a broad inventory of computer accounts.",
  },
];

const groupReasoning = [
  {
    title: "Direct membership",
    text:
      "The account appears directly in the privileged group's Members list.",
  },
  {
    title: "Nested membership",
    text:
      "A user may inherit privilege because a group they belong to is itself a member of another privileged group.",
  },
  {
    title: "Role-based membership",
    text:
      "Some administrators require elevated rights for a specific job, but broad domain privilege should still be justified.",
  },
  {
    title: "Temporary privilege",
    text:
      "Accounts may have been elevated for maintenance and never reduced afterward.",
  },
  {
    title: "Service dependency",
    text:
      "A service account may have been granted too much privilege because it was convenient rather than necessary.",
  },
  {
    title: "Legacy membership",
    text:
      "Old accounts or groups can remain privileged after staff, software, or responsibilities change.",
  },
];

const accountProperties = [
  {
    title: "Account enabled / disabled",
    text:
      "Disabled accounts cannot normally be used interactively, but they may still matter as evidence or configuration references.",
  },
  {
    title: "Password settings",
    text:
      "Review password-related account flags and domain policy context rather than assuming one setting is correct everywhere.",
  },
  {
    title: "Member Of",
    text:
      "Shows direct group membership and is one of the most important privilege-review areas.",
  },
  {
    title: "Logon restrictions",
    text:
      "Account properties can restrict logon hours or computers in some environments.",
  },
  {
    title: "Profile / home folder",
    text:
      "May reveal dependencies or expected user environment.",
  },
  {
    title: "Description",
    text:
      "Useful documentation when maintained properly, but never treat the description alone as proof of authorization.",
  },
];

const classifications = [
  {
    title: "Required",
    description:
      "The account or group has a clear, documented domain, service, application, or administrative purpose.",
    action:
      "Keep it and reduce excessive privilege only after confirming the required function still works.",
  },
  {
    title: "Unnecessary",
    description:
      "The identity is clearly unauthorized, obsolete, or excessive and has no required dependency.",
    action:
      "Preserve evidence first, then disable or remove access in the narrowest justified way.",
  },
  {
    title: "Investigate",
    description:
      "The identity's purpose, privilege, ownership, logon history, or dependencies are unclear.",
    action:
      "Review services, tasks, logs, group nesting, applications, and scenario requirements before changing it.",
  },
];

const safeChangeExamples = [
  {
    title: "Disable a confirmed unnecessary domain account",
    command:
      'Disable-ADAccount -Identity "exampleuser"',
    caution:
      "Use only after confirming the account is not required by a service, task, application, or scenario requirement.",
    verify:
      'Get-ADUser -Identity "exampleuser" -Properties Enabled | Select-Object SamAccountName, Enabled',
  },
  {
    title: "Remove an unnecessary user from Domain Admins",
    command:
      'Remove-ADGroupMember -Identity "Domain Admins" -Members "exampleuser"',
    caution:
      "Confirm the account does not require domain-wide administration and that another authorized administrator remains available.",
    verify:
      'Get-ADGroupMember -Identity "Domain Admins" | Select-Object Name, SamAccountName',
  },
];

const computerReview = [
  {
    title: "Enabled state",
    text:
      "An enabled computer account may represent an active domain-joined system.",
  },
  {
    title: "Last activity",
    text:
      "LastLogonDate can help identify stale-looking objects, but it should not be the only evidence used for deletion.",
  },
  {
    title: "OU location",
    text:
      "The object's OU can affect Group Policy and administrative scope.",
  },
  {
    title: "Server identity",
    text:
      "Computer accounts belonging to required servers must be protected carefully.",
  },
  {
    title: "Trust relationship",
    text:
      "Deleting or resetting a computer account can disrupt the machine's domain relationship.",
  },
  {
    title: "Scenario requirement",
    text:
      "If the scenario requires a client or server, its domain object is part of that requirement.",
  },
];

const evidenceSources = [
  {
    title: "Security log",
    text:
      "Can contain account logon, privilege, and account-management events useful for context.",
  },
  {
    title: "Service configuration",
    text:
      "Shows whether a domain identity is used to run a required service.",
  },
  {
    title: "Task Scheduler",
    text:
      "Shows whether scheduled tasks run under a domain account.",
  },
  {
    title: "Group membership",
    text:
      "Shows privilege paths and resource-access relationships.",
  },
  {
    title: "Share / NTFS permissions",
    text:
      "Can show whether the identity or one of its groups is required for file access.",
  },
  {
    title: "Scenario documentation",
    text:
      "The strongest source for determining who and what must remain authorized.",
  },
];

const decisionCases = [
  {
    title: "Unknown user in Domain Admins",
    evidence:
      "A domain user is directly listed in Domain Admins but is not named in the scenario.",
    reasoning:
      "This is high-impact privilege, but the account may still support required administration or a service.",
    response:
      "Check services, tasks, recent logons, nested groups, role ownership, and scenario authorization before removing privilege or disabling the account.",
  },
  {
    title: "Disabled former employee account",
    evidence:
      "The account is disabled and not used by any known service or task.",
    reasoning:
      "Disabled status reduces immediate risk, but deletion may remove useful evidence or break an undocumented dependency.",
    response:
      "Preserve relevant evidence and verify no dependency before deciding whether deletion is appropriate.",
  },
  {
    title: "Service account in Domain Admins",
    evidence:
      "A required application service runs under a domain account that has Domain Admins membership.",
    reasoning:
      "The service may be required while the privilege is excessive.",
    response:
      "Document the dependency, determine the minimum rights required, and reduce privilege only after controlled testing.",
  },
  {
    title: "Old computer object",
    evidence:
      "A computer account has not logged on recently and is not named in the scenario.",
    reasoning:
      "The object may be stale, offline, or simply unused during the observed period.",
    response:
      "Confirm the system is not required before disabling or removing the computer account.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Open Active Directory Users and Computers",
    text:
      "On the fictional domain controller, use Server Manager → Tools → Active Directory Users and Computers or Win + R → dsa.msc.",
  },
  {
    number: "02",
    title: "Map the directory",
    text:
      "Identify the domain root, Domain Controllers OU, Users container, Computers container, and any custom OUs.",
  },
  {
    number: "03",
    title: "Review privileged groups",
    text:
      "Open Domain Admins and other high-impact groups. Record each direct member before making changes.",
  },
  {
    number: "04",
    title: "Inspect suspicious identities",
    text:
      "A user named LegacyAdmin appears in Domain Admins but not in the scenario. Review its properties, group membership, service usage, task usage, and recent evidence.",
  },
  {
    number: "05",
    title: "Make the narrowest justified change",
    text:
      "If LegacyAdmin has no required dependency or authorization, remove unnecessary privilege or disable the account while preserving evidence.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm authorized administrators can still manage the domain, required services remain healthy, domain authentication works, and no required task or application failed.",
  },
];

const mistakes = [
  {
    title: "Removing Domain Admins membership without dependency review",
    text:
      "A privileged account may still support required administration or a service.",
  },
  {
    title: "Deleting suspicious accounts immediately",
    text:
      "Deletion can destroy useful evidence and make rollback harder.",
  },
  {
    title: "Ignoring nested groups",
    text:
      "Privilege may come through group nesting rather than direct membership.",
  },
  {
    title: "Treating descriptions as proof",
    text:
      "Account descriptions are useful context but can be outdated or misleading.",
  },
  {
    title: "Deleting stale-looking computers too quickly",
    text:
      "Last activity alone does not prove the machine is unnecessary.",
  },
  {
    title: "Forgetting domain authentication testing",
    text:
      "Identity changes can affect logon and domain services even when ADUC still opens normally.",
  },
];

const verification = [
  "Authorized domain administrators remain able to manage the environment.",
  "Required domain users can still authenticate.",
  "Required service accounts still allow their services to run.",
  "Required scheduled tasks still run under valid identities.",
  "No unnecessary direct Domain Admins membership remains.",
  "Required computer accounts remain intact.",
  "Domain authentication and DNS-dependent functions still work.",
  "Relevant account-management and logon events were reviewed after high-impact changes.",
];

const checklist = [
  "Open Active Directory Users and Computers using the correct path.",
  "Identify the domain root and major OUs/containers.",
  "Review Domain Admins and other high-impact groups.",
  "Check direct and nested privilege where relevant.",
  "Review suspicious user properties before changing them.",
  "Check services and tasks for account dependencies.",
  "Review required service accounts carefully.",
  "Review computer accounts before disabling or deleting them.",
  "Classify identities as Required, Unnecessary, or Investigate.",
  "Preserve evidence before disabling or removing suspicious accounts.",
  "Use the narrowest justified change.",
  "Verify domain authentication and required services afterward.",
];

const reflection = [
  "Why is Domain Admins membership more significant than local Administrators membership on one member server?",
  "Why should nested group membership be considered during a privilege review?",
  "Why can a service account be required even if no person logs in with it?",
  "What evidence should exist before disabling a domain account?",
  "Why can deleting a computer account disrupt a required system?",
  "What should be verified after a high-impact Active Directory identity change?",
];

export default function ActiveDirectoryUsersComputersPage() {
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
            <Link href="/cyberpatriot/windows-server/local-users-groups-privilege" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/group-policy-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Active Directory Users &amp; Computers
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review domain users, groups, computers, privileged memberships,
                and organizational structure without disrupting authentication,
                services, or required administration.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Active Directory is not simply a list of users. It is an
                identity and authorization system that many server roles,
                applications, administrators, and clients depend on.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core objects</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary console</span>
                  <span className="font-bold text-white">ADUC</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main concern</span>
                  <span className="font-bold text-white">Domain privilege</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Safe identity review</span>
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
          Active Directory concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Know what each object represents
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
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
              Domain privilege can affect many systems at once
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A single privileged domain account may administer multiple
              servers, users, workstations, policies, or services.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              High-impact warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve access and evidence before changing domain identities
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Disabling an account or removing group membership can break
              services, scheduled tasks, applications, and administration.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Investigate dependencies before changing high-impact accounts or groups.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to go in Active Directory Users and Computers
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
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Quick action
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.shortcut}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Directory structure
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand where objects live
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {structureMap.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          User review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before changing a domain user
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {userReviewQuestions.map((item, index) => (
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
          Privileged groups
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          High-impact memberships deserve careful review
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {privilegedGroups.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.impact}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-400">{item.review}</p>
              </div>
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
            Inventory domain identities without changing them
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
          Privilege reasoning
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          How domain privilege can appear
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groupReasoning.map((item) => (
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
          Account properties
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What to inspect before changing a user
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {accountProperties.map((item) => (
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
          Classification
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Controlled change examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the narrowest justified identity change
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {safeChangeExamples.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Computer accounts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Machines are identities too
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {computerReview.map((item) => (
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
          Evidence sources
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Use evidence to understand an identity's purpose
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidenceSources.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Domain identity decisions in context
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
            Audit identities in CYBERSHIELD.LOCAL
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
          Active Directory mistakes with large consequences
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
              Test your domain identity reasoning
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
              Confirm identity changes did not break the domain
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
            Before leaving Active Directory identity review
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
                Group Policy Management
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how domain policy is organized, where GPOs apply,
                how inheritance and precedence work, and how to review effective
                security settings without editing the wrong policy.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/group-policy-management"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 05 &rarr;
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
            <Link href="/cyberpatriot/windows-server/local-users-groups-privilege" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/group-policy-management" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
