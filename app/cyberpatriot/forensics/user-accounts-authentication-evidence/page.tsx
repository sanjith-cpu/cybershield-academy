import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how account state, group membership, authentication records, and session evidence work together.",
  "Distinguish account existence from account use, and privilege capability from actual privileged action.",
  "Recognize useful Windows and Linux account evidence without assuming that every administrator or sudo-capable account is unauthorized.",
  "Correlate login events with account changes, file activity, services, tasks, shell history, and network evidence.",
  "Preserve the original state of accounts and groups before disabling, deleting, or changing membership.",
  "Write concise evidence-backed answers about who authenticated, what privileges existed, and what account changes occurred.",
];

const accountPrinciples = [
  {
    title: "Account existence is not account use",
    text:
      "A user account can exist without being used. Authentication logs and session evidence are needed to show activity.",
  },
  {
    title: "Privilege is capability, not proof of action",
    text:
      "Administrator, sudo, or privileged-group membership shows what an account can do, not what it actually did.",
  },
  {
    title: "Authentication is not physical identity",
    text:
      "A successful login proves that credentials or another authentication method were accepted for an account. It does not prove who was physically present.",
  },
  {
    title: "Group changes matter",
    text:
      "Adding or removing an account from Administrators, sudo, or another privileged group can change its effective capabilities.",
  },
  {
    title: "Account lifecycle is evidence",
    text:
      "Creation, enablement, disablement, password changes, lockouts, and deletion can all help reconstruct account history.",
  },
  {
    title: "Document before hardening",
    text:
      "Disabling or deleting an account can destroy easy access to membership, profile, ownership, and session context.",
  },
];

const evidenceLayers = [
  {
    layer: "Identity",
    examples:
      "Username, SID or UID, display name, profile/home path, local vs domain context.",
    question:
      "Which account is this?",
  },
  {
    layer: "State",
    examples:
      "Enabled, disabled, locked, expired, password-required, shell, home directory.",
    question:
      "Can the account currently authenticate or operate normally?",
  },
  {
    layer: "Privilege",
    examples:
      "Administrators, sudo, wheel, service rights, privileged groups, sudoers rules.",
    question:
      "What can the account potentially do?",
  },
  {
    layer: "Authentication",
    examples:
      "Successful and failed logons, SSH, RDP, local login, sudo authentication, cached login.",
    question:
      "When and how was the account authenticated?",
  },
  {
    layer: "Session",
    examples:
      "Interactive session, remote session, service logon, terminal, current login, session start and end.",
    question:
      "What kind of session existed?",
  },
  {
    layer: "Activity",
    examples:
      "Files, processes, services, tasks, commands, network connections, application use.",
    question:
      "What happened during or after the session?",
  },
];

const windowsAccountEvidence = [
  {
    source: "Local Users and Groups",
    value:
      "Local accounts, group membership, account state, and descriptive fields.",
    caution:
      "Availability can vary by Windows edition and environment.",
  },
  {
    source: "net user / Get-LocalUser",
    value:
      "Local account inventory and properties.",
    caution:
      "Account presence alone does not prove recent use.",
  },
  {
    source: "net localgroup / Get-LocalGroupMember",
    value:
      "Local group membership such as Administrators or Remote Desktop Users.",
    caution:
      "Membership proves capability, not that the privilege was used.",
  },
  {
    source: "Security event log",
    value:
      "Authentication, account creation, enablement, disablement, deletion, and group changes where auditing is available.",
    caution:
      "Coverage depends on audit policy and retention.",
  },
  {
    source: "User profile directories",
    value:
      "Profile existence, files, downloads, application data, and ownership context.",
    caution:
      "A profile can remain after an account is disabled or deleted.",
  },
  {
    source: "Scheduled tasks and services",
    value:
      "Accounts configured to run automated tasks or services.",
    caution:
      "Service or task account use is different from interactive user activity.",
  },
];

const linuxAccountEvidence = [
  {
    source: "/etc/passwd",
    value:
      "Username, UID, primary GID, comment field, home directory, and login shell.",
    caution:
      "The password hash is not stored here on modern systems.",
  },
  {
    source: "/etc/shadow",
    value:
      "Password-hash and password-aging information for local accounts.",
    caution:
      "Highly sensitive and normally readable only by root. Do not expose or copy real password hashes unnecessarily.",
  },
  {
    source: "/etc/group",
    value:
      "Local group membership and group identifiers.",
    caution:
      "Primary group membership may also be represented through /etc/passwd.",
  },
  {
    source: "getent",
    value:
      "Account and group records from the system's configured identity sources.",
    caution:
      "Can include directory-backed identities, not only local files.",
  },
  {
    source: "auth.log / journal",
    value:
      "Login, sudo, SSH, PAM, and authentication evidence where configured.",
    caution:
      "Logging source depends on distribution and configuration.",
  },
  {
    source: "Home directories",
    value:
      "User files, shell history, SSH data, application settings, scripts, and ownership context.",
    caution:
      "Home-directory evidence does not automatically prove recent authentication.",
  },
];

const windowsCommands = [
  {
    label: "List local users",
    command: `Get-LocalUser`,
    purpose:
      "Shows local Windows accounts and basic state.",
  },
  {
    label: "Inspect one local user",
    command: `Get-LocalUser -Name "trainee1" | Format-List *`,
    purpose:
      "Displays detailed local-user properties for an authorized lab account.",
  },
  {
    label: "List Administrators",
    command: `Get-LocalGroupMember -Group "Administrators"`,
    purpose:
      "Shows local members of the Administrators group.",
  },
  {
    label: "Classic account view",
    command: `net user trainee1`,
    purpose:
      "Shows account state and selected account-policy details using a widely available Windows command.",
  },
  {
    label: "Classic group membership",
    command: `net localgroup Administrators`,
    purpose:
      "Lists members of the local Administrators group.",
  },
  {
    label: "Current identity",
    command: `whoami
whoami /groups`,
    purpose:
      "Shows the current security principal and group memberships for the current process token.",
  },
];

const linuxCommands = [
  {
    label: "List passwd records",
    command: `getent passwd`,
    purpose:
      "Shows account records from configured identity sources.",
  },
  {
    label: "Inspect one account",
    command: `getent passwd trainee1`,
    purpose:
      "Shows UID, primary GID, home directory, and shell for one account.",
  },
  {
    label: "Group membership",
    command: `id trainee1`,
    purpose:
      "Shows UID, primary GID, and supplementary groups.",
  },
  {
    label: "List sudo group",
    command: `getent group sudo`,
    purpose:
      "Shows members of the sudo group on Ubuntu-family systems.",
  },
  {
    label: "Account status",
    command: `sudo passwd -S trainee1`,
    purpose:
      "Shows local password/account status without displaying the password hash.",
  },
  {
    label: "Current identity",
    command: `whoami
id`,
    purpose:
      "Shows the current account and group memberships.",
  },
];

const windowsAuthEvents = [
  {
    id: "4624",
    meaning:
      "Successful logon.",
    use:
      "Establishes that Windows accepted authentication for an account and records useful session details such as logon type.",
  },
  {
    id: "4625",
    meaning:
      "Failed logon.",
    use:
      "Useful for failed authentication attempts, target account, source context, and failure reason.",
  },
  {
    id: "4634",
    meaning:
      "Logoff.",
    use:
      "Can help bound a session when paired with related logon information.",
  },
  {
    id: "4648",
    meaning:
      "Explicit credentials used.",
    use:
      "Useful when a process or resource access used separately supplied credentials.",
  },
  {
    id: "4672",
    meaning:
      "Special privileges assigned to a new logon.",
    use:
      "Useful for identifying privileged sessions.",
  },
  {
    id: "4720",
    meaning:
      "User account created.",
    use:
      "Establishes account creation timing.",
  },
  {
    id: "4722",
    meaning:
      "User account enabled.",
    use:
      "Shows when a disabled account became active.",
  },
  {
    id: "4725",
    meaning:
      "User account disabled.",
    use:
      "Shows a defensive or administrative state change.",
  },
  {
    id: "4726",
    meaning:
      "User account deleted.",
    use:
      "Helps reconstruct account lifecycle.",
  },
  {
    id: "4732",
    meaning:
      "Member added to a security-enabled local group.",
    use:
      "Useful for privilege escalation or authorized membership changes.",
  },
  {
    id: "4733",
    meaning:
      "Member removed from a security-enabled local group.",
    use:
      "Useful for privilege reduction or cleanup tracking.",
  },
];

const linuxAuthClues = [
  {
    clue: "Accepted password / Accepted publickey",
    meaning:
      "SSH authentication succeeded for the recorded account and source.",
    limit:
      "Does not prove whether the session was authorized or who physically controlled the client.",
  },
  {
    clue: "Failed password",
    meaning:
      "An SSH authentication attempt failed.",
    limit:
      "A single failure may be normal; patterns and later success matter.",
  },
  {
    clue: "sudo command",
    meaning:
      "An account attempted or performed a command through sudo.",
    limit:
      "Read the exact command and result before describing the action.",
  },
  {
    clue: "session opened",
    meaning:
      "A PAM-managed session began for a service or account.",
    limit:
      "Session type and service context determine what kind of access occurred.",
  },
  {
    clue: "session closed",
    meaning:
      "A PAM-managed session ended.",
    limit:
      "Not every relevant activity is perfectly bounded by session records.",
  },
  {
    clue: "useradd / adduser / group changes",
    meaning:
      "Account-management activity may appear in system logs or shell/admin records.",
    limit:
      "Confirm the resulting account and group state directly.",
  },
];

const accountStateQuestions = [
  {
    question: "Does this account exist?",
    evidence:
      "Local account inventory, getent, /etc/passwd, Get-LocalUser, or directory service records.",
  },
  {
    question: "Is the account enabled?",
    evidence:
      "Account status fields, passwd status, Windows account properties, or lifecycle events.",
  },
  {
    question: "Is the account privileged?",
    evidence:
      "Administrators, sudo, wheel, sudoers, or other privileged-group and policy evidence.",
  },
  {
    question: "Did the account authenticate?",
    evidence:
      "Security log, auth.log, journal, SSH records, RDP records, or local session evidence.",
  },
  {
    question: "What kind of session existed?",
    evidence:
      "Windows logon type, SSH/session records, who/w, service context, or task/service configuration.",
  },
  {
    question: "What did the account do?",
    evidence:
      "Files, processes, commands, services, tasks, application logs, and network evidence.",
  },
];

const privilegeReasoning = [
  {
    evidence:
      "student1 is a member of Administrators",
    supported:
      "The account has local administrative capability.",
    notSupported:
      "The account used administrative privilege during the incident.",
  },
  {
    evidence:
      "analyst is in the sudo group",
    supported:
      "The account may be allowed to use sudo according to system policy.",
    notSupported:
      "The account executed a privileged command.",
  },
  {
    evidence:
      "4672 follows a Windows logon",
    supported:
      "That logon session received special privileges.",
    notSupported:
      "Those privileges were abused.",
  },
  {
    evidence:
      "sudo log shows trainee1 ran systemctl restart ssh",
    supported:
      "The account invoked that command through sudo at the recorded time.",
    notSupported:
      "The restart was unauthorized without scenario context.",
  },
  {
    evidence:
      "backup-helper is added to Administrators",
    supported:
      "The account's local privilege capability increased.",
    notSupported:
      "The account was malicious.",
  },
  {
    evidence:
      "user removed from sudo group",
    supported:
      "The account's group-based sudo capability changed.",
    notSupported:
      "All privilege paths were removed unless sudoers and other mechanisms were checked.",
  },
];

const profileEvidence = [
  {
    platform: "Windows",
    source:
      "C:\\Users\\<user>",
    value:
      "Desktop, Downloads, Documents, AppData, browser profiles, application state, and file ownership.",
    caution:
      "Profile existence does not prove recent login.",
  },
  {
    platform: "Linux",
    source:
      "/home/<user>",
    value:
      "Documents, downloads, shell history, .ssh, .config, scripts, and user-local data.",
    caution:
      "Home-directory timestamps may reflect automated application activity as well as human activity.",
  },
  {
    platform: "Windows",
    source:
      "Profile ownership and ACLs",
    value:
      "Helps connect files and directories to security principals.",
    caution:
      "Ownership can be reassigned and does not prove authorship.",
  },
  {
    platform: "Linux",
    source:
      "UID/GID ownership",
    value:
      "Connects filesystem objects to local account identifiers.",
    caution:
      "UID reuse or copied files can complicate historical interpretation.",
  },
];

const sessionTypes = [
  {
    platform: "Windows",
    session: "Interactive",
    clue:
      "Logon type 2",
    meaning:
      "Local console-style user session.",
  },
  {
    platform: "Windows",
    session: "Remote interactive",
    clue:
      "Logon type 10",
    meaning:
      "Remote Desktop-style interactive session.",
  },
  {
    platform: "Windows",
    session: "Network",
    clue:
      "Logon type 3",
    meaning:
      "Network resource access or service interaction.",
  },
  {
    platform: "Windows",
    session: "Service",
    clue:
      "Logon type 5",
    meaning:
      "Service account session.",
  },
  {
    platform: "Linux",
    session: "SSH",
    clue:
      "sshd accepted authentication and session-open messages",
    meaning:
      "Remote shell or remote command session.",
  },
  {
    platform: "Linux",
    session: "Local terminal",
    clue:
      "login/display-manager/PAM session evidence",
    meaning:
      "Local user session.",
  },
];

const passwordEvidence = [
  {
    title: "Password change",
    text:
      "A password-reset or change event can explain later authentication success or failure.",
  },
  {
    title: "Lockout",
    text:
      "Repeated failed attempts or policy can temporarily prevent authentication.",
  },
  {
    title: "Expiration",
    text:
      "Expired passwords or accounts can explain failed logons without indicating an attack.",
  },
  {
    title: "Password required",
    text:
      "An account configured without normal password requirements may deserve review against the scenario.",
  },
  {
    title: "Do not expose secrets",
    text:
      "Never publish real passwords, password hashes, recovery codes, keys, or tokens in training documentation.",
  },
];

const serviceAccounts = [
  {
    title: "Service account",
    text:
      "An account may exist mainly to run a Windows service, scheduled task, Linux daemon, or automation.",
  },
  {
    title: "Non-interactive account",
    text:
      "Some accounts are intentionally configured with shells or policies that prevent normal interactive login.",
  },
  {
    title: "Built-in account",
    text:
      "Windows and Linux include built-in system identities that should not be treated like ordinary human accounts.",
  },
  {
    title: "Application-created account",
    text:
      "Installed software can create dedicated accounts for isolation and least privilege.",
  },
  {
    title: "Scenario context",
    text:
      "The competition scenario determines whether a service or application account is expected and required.",
  },
];

const correlationCases = [
  {
    records:
      "4720 account creation at 09:12 + 4732 Administrators membership at 09:13 + 4624 logon at 09:20",
    supported:
      "A newly created account gained administrative membership and later authenticated successfully.",
  },
  {
    records:
      "SSH accepted login at 10:02 + sudo command at 10:05 + config mtime at 10:05",
    supported:
      "The account authenticated remotely and performed a privileged command aligned with the configuration change.",
  },
  {
    records:
      "4625 failures at 11:30-11:32 + 4624 success at 11:33",
    supported:
      "Several failed Windows logons preceded a successful authentication.",
  },
  {
    records:
      "Linux user added to sudo group at 12:10 + sudo service restart at 12:14",
    supported:
      "Privilege capability increased before a privileged service action.",
  },
  {
    records:
      "RDP-style logon type 10 at 13:01 + user profile file change at 13:05",
    supported:
      "A remote interactive session existed before the profile file changed, but authorship still requires more evidence.",
  },
  {
    records:
      "Service account logon + service start + process owned by same account",
    supported:
      "The account was being used in service context rather than ordinary interactive use.",
  },
];

const documentationFields = [
  "Forensic question",
  "Hostname",
  "Account name",
  "SID or UID if useful",
  "Account state",
  "Groups / privilege",
  "Authentication source",
  "Session type",
  "Timestamp and zone",
  "Source address if remote",
  "Related file/process/service",
  "Supported conclusion",
];

const preservationChecklist = [
  "Record the account name exactly.",
  "Record whether the account is enabled, disabled, locked, or expired where available.",
  "Record privileged and relevant group memberships.",
  "Record home/profile path and ownership context.",
  "Record recent authentication evidence.",
  "Record session type or logon type.",
  "Record source address for remote authentication where available.",
  "Record service or task assignments using the account.",
  "Record relevant sudoers or local policy context.",
  "Record account creation or membership-change events.",
  "Separate original state from your own defensive changes.",
  "Only then disable, remove, or change the account if the scenario allows and requires it.",
];

const fictionalEvidence = [
  {
    time: "14:02",
    source: "Windows Security",
    detail:
      "Account lab-helper is created on CP-WIN-11.",
  },
  {
    time: "14:03",
    source: "Windows Security",
    detail:
      "lab-helper is added to the local Administrators group.",
  },
  {
    time: "14:10",
    source: "Windows Security",
    detail:
      "lab-helper successfully logs on with logon type 10.",
  },
  {
    time: "14:12",
    source: "Filesystem",
    detail:
      "A file under C:\\Users\\lab-helper\\Downloads is created.",
  },
  {
    time: "14:15",
    source: "Task Scheduler",
    detail:
      "A fictional task is configured to run under lab-helper.",
  },
  {
    time: "14:17",
    source: "Network Evidence",
    detail:
      "A process running as lab-helper opens a connection to fictional lab host 203.0.113.90.",
  },
];

const labQuestions = [
  {
    question:
      "Which event proves the account existed before the login?",
    answer:
      "The account-creation event at 14:02.",
  },
  {
    question:
      "What establishes that the account had local administrative capability?",
    answer:
      "The Administrators group-add event at 14:03.",
  },
  {
    question:
      "What does logon type 10 add?",
    answer:
      "It supports that lab-helper authenticated through a remote interactive session such as RDP.",
  },
  {
    question:
      "Does the file in Downloads prove the account owner created it personally?",
    answer:
      "No. The file exists in that profile context, but authorship requires additional evidence.",
  },
  {
    question:
      "What evidence connects the account to automated activity?",
    answer:
      "The scheduled task configured to run as lab-helper.",
  },
  {
    question:
      "What should be preserved before disabling lab-helper?",
    answer:
      "Account state, group membership, profile evidence, authentication events, task configuration, process evidence, and network evidence.",
  },
];

const mistakes = [
  {
    title: "Deleting the account first",
    text:
      "This can remove easy access to membership, profile, ownership, and session context.",
  },
  {
    title: "Treating admin membership as proof of misuse",
    text:
      "Privilege capability is not the same as privileged action.",
  },
  {
    title: "Treating successful login as physical identity",
    text:
      "Credentials may be used by another person, service, or remote operator.",
  },
  {
    title: "Ignoring session type",
    text:
      "Interactive, remote, network, service, and batch sessions have different meanings.",
  },
  {
    title: "Ignoring service accounts",
    text:
      "Automated accounts can appear active without a human interactive session.",
  },
  {
    title: "Trusting shell history as complete",
    text:
      "Shell history can be incomplete, delayed, disabled, or altered.",
  },
  {
    title: "Ignoring account lifecycle events",
    text:
      "Creation, enablement, disablement, deletion, and group changes often explain the timeline.",
  },
  {
    title: "Recording secrets",
    text:
      "Do not copy real passwords, hashes, private keys, or tokens into training notes.",
  },
];

const reviewChecklist = [
  "I distinguish account existence from account use.",
  "I distinguish privilege capability from privileged action.",
  "I record account state before changing it.",
  "I record relevant group membership.",
  "I identify the authentication source and session type.",
  "I record source address for remote logins where available.",
  "I correlate account evidence with files, tasks, services, and processes.",
  "I recognize service and automation accounts.",
  "I use Windows Security or Linux auth/journal evidence to prove authentication.",
  "I do not treat a successful login as proof of physical identity.",
  "I separate original evidence from my team's defensive changes.",
  "I avoid collecting or exposing secret credentials.",
];

const reflection = [
  "Why does administrator or sudo membership fail to prove that privilege was used?",
  "What additional evidence do you need after confirming that an account exists?",
  "Why does session type matter when interpreting authentication?",
  "How can a service account create misleading assumptions about human activity?",
  "Why should you record group membership before removing an account from a privileged group?",
  "What evidence would you use to connect an authenticated account to a specific file or process action?",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function UserAccountsAuthenticationEvidencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics/linux-logs-journal"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/processes-services-startup-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Forensics · Lesson 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                User Accounts &amp; Authentication Evidence
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how account state, privilege, authentication, session
                type, profile evidence, and account changes work together to
                answer who could act, who authenticated, and what happened
                afterward.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Account evidence is easy to overstate. An administrator account
                is not proof of misuse, and a successful login is not proof of
                physical identity. Build conclusions from multiple layers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main evidence</span>
                  <span className="font-bold text-white">Accounts + auth</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Privilege clue</span>
                  <span className="font-bold text-white">Groups / sudo</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key distinction</span>
                  <span className="font-bold text-white">Capability vs action</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Account timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Learning objectives"
            title="Separate identity, privilege, authentication, and activity"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build account conclusions in layers
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              First prove the account exists, then determine its state and
              privileges, then establish authentication and session type, and
              finally correlate activity that occurred afterward.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve the account before you remove it
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Record account state, privileged groups, profile or home
              directory, authentication events, task/service assignments, and
              relevant ownership before making defensive changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Account principles"
            title="Avoid the most common identity assumptions"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {accountPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence layers"
            title="Move from identity to action"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.examples}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Question answered
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows"
              title="Account evidence sources"
            />
            <div className="mt-6 grid gap-4">
              {windowsAccountEvidence.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux"
              title="Account evidence sources"
            />
            <div className="mt-6 grid gap-4">
              {linuxAccountEvidence.map((item) => (
                <div
                  key={item.source}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows commands"
              title="Inspect account state and group membership"
            />
            <div className="mt-6 grid gap-4">
              {windowsCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux commands"
              title="Inspect identities and privilege groups"
            />
            <div className="mt-6 grid gap-4">
              {linuxCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows authentication"
            title="Common Security events for account investigations"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {windowsAuthEvents.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  Event {item.id}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.meaning}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Linux authentication"
            title="Common login, SSH, PAM, and sudo clues"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {linuxAuthClues.map((item) => (
              <div
                key={item.clue}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-sm font-bold text-cyan-300">
                  {item.clue}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    Limit
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.limit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Question-to-evidence map"
            title="Use the right evidence for each account question"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {accountStateQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Privilege reasoning"
            title="Capability is not the same as action"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {privilegeReasoning.map((item) => (
              <div
                key={item.evidence}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.evidence}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                    Not supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.notSupported}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Profile evidence"
              title="User directories add activity context"
            />

            <div className="mt-6 grid gap-4">
              {profileEvidence.map((item) => (
                <div
                  key={`${item.platform}-${item.source}`}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-black text-white">{item.source}</h3>
                    <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                      {item.platform}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Session types"
              title="Authentication context changes meaning"
            />

            <div className="mt-6 grid gap-4">
              {sessionTypes.map((item) => (
                <div
                  key={`${item.platform}-${item.session}`}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-black text-white">{item.session}</h3>
                    <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                      {item.platform}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    {item.clue}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Password & account state"
              title="State changes can explain authentication behavior"
            />
            <div className="mt-6 grid gap-4">
              {passwordEvidence.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Service accounts"
              title="Not every active account represents a person"
            />
            <div className="mt-6 grid gap-4">
              {serviceAccounts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Correlation"
            title="Combine account, authentication, and activity evidence"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {correlationCases.map((item) => (
              <div
                key={item.records}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm leading-7 text-cyan-200">
                  {item.records}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Supported conclusion
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.supported}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence note"
            title="Document account evidence so another teammate can verify it"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {documentationFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Preservation checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Before disabling, deleting, or changing the account
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {preservationChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Account-analysis mistakes that create false conclusions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional account lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reconstruct account creation, privilege, login, automation, and network activity
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fictionalEvidence.map((item) => (
              <div
                key={`${item.time}-${item.source}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.time}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {labQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Task {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
              {reviewChecklist.map((item, index) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your account reasoning
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Prove the account, state, privilege, authentication, session
                type, and activity separately. Correlate before concluding, and
                preserve account evidence before defensive cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics/linux-logs-journal"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/processes-services-startup-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
