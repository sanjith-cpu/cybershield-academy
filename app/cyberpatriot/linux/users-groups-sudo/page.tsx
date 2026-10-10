import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Linux users, groups, UIDs, GIDs, shells, and home directories fit together.",
  "Distinguish normal human accounts, service accounts, system accounts, and privileged identities before making changes.",
  "Inspect sudo access through groups and sudoers configuration without assuming one administrative model everywhere.",
  "Use read-only commands to inventory users, groups, login shells, account status, and administrative privilege.",
  "Correct unnecessary privilege with the least disruptive change while preserving required accounts and services.",
  "Verify identity changes from both the account and authorization perspective.",
];

const identityConcepts = [
  {
    title: "User account",
    text:
      "A Linux user is an identity represented by a username and numeric UID. Human users, services, daemons, and system components can all have accounts.",
  },
  {
    title: "Primary group",
    text:
      "Each user has a primary group identified by a GID. New files commonly inherit that group unless another mechanism changes it.",
  },
  {
    title: "Supplementary groups",
    text:
      "A user can belong to additional groups that grant access to files, devices, services, administrative functions, or applications.",
  },
  {
    title: "Login shell",
    text:
      "The shell field can indicate whether an account is intended for interactive login, although shell value alone does not prove whether an account is legitimate or currently usable.",
  },
  {
    title: "Home directory",
    text:
      "A home directory commonly stores user files, shell configuration, SSH material, application settings, and other identity-specific data.",
  },
  {
    title: "Privilege",
    text:
      "Administrative capability can come from sudo configuration, group membership, direct sudoers rules, root access, setuid programs, service context, or other mechanisms.",
  },
];

const importantFiles = [
  {
    path: "/etc/passwd",
    purpose:
      "Stores account records including username, UID, primary GID, home directory, and login shell. Password hashes are not normally stored here on modern Ubuntu-family systems.",
    caution:
      "Do not delete lines manually unless you fully understand the effect. Prefer account-management tools for controlled changes.",
  },
  {
    path: "/etc/shadow",
    purpose:
      "Stores password hashes and password-aging metadata for local accounts.",
    caution:
      "Highly sensitive. Requires elevated access. Avoid exposing or copying password hashes unnecessarily.",
  },
  {
    path: "/etc/group",
    purpose:
      "Stores local group definitions and supplementary membership information.",
    caution:
      "Direct edits can create malformed group configuration. Use group-management tools where practical.",
  },
  {
    path: "/etc/gshadow",
    purpose:
      "Stores protected group information and administrative metadata.",
    caution:
      "Treat as privileged identity data.",
  },
  {
    path: "/etc/sudoers",
    purpose:
      "Primary sudo policy file controlling who may run commands with elevated privilege.",
    caution:
      "Syntax errors can break sudo access. Use visudo when editing.",
  },
  {
    path: "/etc/sudoers.d/",
    purpose:
      "Drop-in directory for additional sudo rules.",
    caution:
      "A user may have privilege here even if they are not in the sudo group.",
  },
];

const inspectionCommands = [
  {
    command: "getent passwd",
    purpose:
      "List account records through the system account database.",
  },
  {
    command: "getent passwd username",
    purpose:
      "Inspect one account record.",
  },
  {
    command: "id username",
    purpose:
      "Show the user's UID, primary GID, and supplementary groups.",
  },
  {
    command: "groups username",
    purpose:
      "Show group membership for a user.",
  },
  {
    command: "getent group",
    purpose:
      "List groups known through the system group database.",
  },
  {
    command: "getent group sudo",
    purpose:
      "Inspect members of the sudo group on systems that use it for administration.",
  },
  {
    command: "sudo -l -U username",
    purpose:
      "Review sudo privileges for a specific user when permitted.",
  },
  {
    command: "sudo visudo -c",
    purpose:
      "Validate sudoers syntax without changing policy.",
  },
  {
    command: "sudo passwd -S username",
    purpose:
      "Show local password status information for an account.",
  },
  {
    command: "lastlog",
    purpose:
      "Show last-login information where available. Treat it as one indicator, not perfect forensic truth.",
  },
];

const accountFields = [
  {
    field: "Username",
    example: "morgan",
    meaning:
      "Human-readable account name used for login and ownership display.",
  },
  {
    field: "Password placeholder",
    example: "x",
    meaning:
      "Usually indicates password data is stored in /etc/shadow rather than /etc/passwd.",
  },
  {
    field: "UID",
    example: "1001",
    meaning:
      "Numeric user identity used internally by Linux for ownership and access decisions.",
  },
  {
    field: "Primary GID",
    example: "1001",
    meaning:
      "Numeric identifier of the user's primary group.",
  },
  {
    field: "Comment / GECOS",
    example: "Morgan Lee",
    meaning:
      "Descriptive account information. It is not a security control.",
  },
  {
    field: "Home directory",
    example: "/home/morgan",
    meaning:
      "Default location for the user's personal files and user-level configuration.",
  },
  {
    field: "Login shell",
    example: "/bin/bash",
    meaning:
      "Program started for an interactive shell login when applicable.",
  },
];

const accountTypes = [
  {
    type: "Human administrator",
    signs:
      "Named in the scenario, interactive shell, home directory, approved sudo access, expected login activity.",
    caution:
      "Do not remove required privilege just because the account looks powerful; compare it to the scenario first.",
  },
  {
    type: "Human standard user",
    signs:
      "Named in the scenario, normal home directory, interactive shell, no unnecessary administrative privilege.",
    caution:
      "A legitimate user with excess privilege may need a group correction, not account deletion.",
  },
  {
    type: "Service account",
    signs:
      "Often tied to an application or daemon, may have a non-interactive shell, special home or data directory, and ownership of service files.",
    caution:
      "Disabling it can break the service. Confirm package, process, file ownership, and service dependencies.",
  },
  {
    type: "System account",
    signs:
      "Often created by the operating system or packages, may have low UID values or non-login shells, and may not represent a person.",
    caution:
      "System-account ranges and conventions vary. Do not use UID alone as a deletion rule.",
  },
  {
    type: "Unknown account",
    signs:
      "Not clearly explained by the scenario, package inventory, service role, or system purpose.",
    caution:
      "Unknown means investigate. Check UID, groups, shell, home, files, processes, sudo access, logs, and package relationships before action.",
  },
];

const sudoConcepts = [
  {
    title: "sudo group",
    text:
      "Ubuntu and Linux Mint commonly grant broad administrative sudo access through membership in the sudo group.",
  },
  {
    title: "Direct sudoers rule",
    text:
      "A user can receive sudo privilege directly through /etc/sudoers or a file under /etc/sudoers.d/ without belonging to the sudo group.",
  },
  {
    title: "Command-limited privilege",
    text:
      "sudoers can allow only certain commands rather than unrestricted root-equivalent access.",
  },
  {
    title: "NOPASSWD",
    text:
      "A sudo rule can permit commands without prompting for the user's password. Whether that is appropriate depends on the scenario and system role.",
  },
  {
    title: "Run-as targets",
    text:
      "sudo rules can allow commands as root or another account. Do not assume every rule means unrestricted root access.",
  },
  {
    title: "Configuration precedence",
    text:
      "Multiple sudoers files and rules can interact. Inspect the effective result rather than assuming one file tells the whole story.",
  },
];

const scenarioComparison = [
  {
    account: "Morgan",
    scenario: "Authorized administrator",
    observed:
      "UID 1001, interactive shell, member of sudo, normal home directory.",
    decision:
      "Likely appropriate. Verify sudo rules and retain required privilege.",
  },
  {
    account: "Avery",
    scenario: "Authorized standard user",
    observed:
      "UID 1002, interactive shell, unexpectedly member of sudo.",
    decision:
      "High-confidence privilege mismatch. Preserve account and remove only unnecessary administrative membership after verification.",
  },
  {
    account: "Riley",
    scenario: "Authorized standard user",
    observed:
      "UID 1003, interactive shell, no sudo access.",
    decision:
      "Likely appropriate. Verify required application and file access rather than changing the account.",
  },
  {
    account: "backupsvc",
    scenario: "Not named",
    observed:
      "Non-interactive shell, owns backup data, referenced by a systemd backup service.",
    decision:
      "Do not disable based only on the name. Treat as a likely service identity and investigate dependency before change.",
  },
  {
    account: "guest-temp",
    scenario: "Not authorized",
    observed:
      "Interactive shell, home directory, no clear package or service relationship.",
    decision:
      "Investigate login activity, files, groups, and evidence. If confirmed unauthorized, disable or remove using the least disruptive scenario-appropriate action.",
  },
];

const privilegeReview = [
  "Compare scenario-authorized administrators with actual sudo access.",
  "Check membership in the sudo group.",
  "Check direct sudoers entries and files under /etc/sudoers.d/.",
  "Inspect whether users have broad or command-specific privilege.",
  "Look for unexpected NOPASSWD rules.",
  "Check whether service accounts have sudo access they do not need.",
  "Avoid granting sudo as a troubleshooting shortcut.",
  "Re-run id, groups, and sudo privilege checks after any change.",
];

const controlledCommands = [
  {
    goal: "Remove a user from the sudo group",
    command: "sudo gpasswd -d username sudo",
    caution:
      "Use only when the scenario confirms the user should remain a normal account but should not have sudo-group privilege.",
  },
  {
    goal: "Add an authorized administrator to sudo",
    command: "sudo usermod -aG sudo username",
    caution:
      "Use only when the scenario clearly requires the account to have administrative privilege. Verify afterward.",
  },
  {
    goal: "Lock a local account password",
    command: "sudo passwd -l username",
    caution:
      "Locking the password does not necessarily stop every access path. SSH keys, existing sessions, cron, services, or other mechanisms may still use the account.",
  },
  {
    goal: "Unlock a local account password",
    command: "sudo passwd -u username",
    caution:
      "Use only when the account is authorized and the scenario requires password authentication.",
  },
  {
    goal: "Disable interactive shell access",
    command: "sudo usermod -s /usr/sbin/nologin username",
    caution:
      "Changing the shell can affect legitimate scripts or services. Confirm account purpose first.",
  },
  {
    goal: "Validate sudoers configuration",
    command: "sudo visudo -c",
    caution:
      "Validation is a safe checkpoint before relying on a sudoers edit.",
  },
];

const rootReview = [
  {
    title: "Root is UID 0",
    text:
      "Linux treats UID 0 as superuser privilege. The username is commonly root, but UID is the critical identity attribute.",
  },
  {
    title: "Do not create extra UID 0 accounts",
    text:
      "An unexpected account with UID 0 deserves immediate investigation because it has root-equivalent identity.",
  },
  {
    title: "Root login policy is contextual",
    text:
      "Interactive root login, SSH root login, and sudo-based administration are separate questions. Review the scenario and configuration rather than using one universal rule.",
  },
  {
    title: "sudo activity can be evidence",
    text:
      "Authentication and journal logs may help show which user invoked sudo and what happened around that time.",
  },
];

const evidenceSources = [
  {
    source: "Account database",
    command: "getent passwd username",
    value:
      "UID, primary group, home, shell, and basic account record.",
  },
  {
    source: "Group membership",
    command: "id username",
    value:
      "Effective user/group identity and supplementary groups.",
  },
  {
    source: "Sudo policy",
    command: "sudo -l -U username",
    value:
      "Effective sudo permissions when the system allows the query.",
  },
  {
    source: "Password status",
    command: "sudo passwd -S username",
    value:
      "Local password-state metadata such as whether a password is locked.",
  },
  {
    source: "Authentication logs",
    command: "sudo journalctl _COMM=sudo --since today",
    value:
      "Recent sudo-related journal entries where available.",
  },
  {
    source: "Login history",
    command: "last",
    value:
      "Recorded login sessions from wtmp data where present.",
  },
  {
    source: "Last login indicator",
    command: "lastlog",
    value:
      "Last-login record for accounts where available. Not complete proof of account legitimacy or use.",
  },
];

const commonMistakes = [
  {
    title: "Deleting a legitimate user because privilege is wrong",
    text:
      "If the account is authorized but should not be an administrator, correct the privilege instead of removing the identity.",
  },
  {
    title: "Using UID alone to identify service accounts",
    text:
      "UID ranges vary by system and package. Combine UID with shell, home, package, service, process, and ownership evidence.",
  },
  {
    title: "Checking only the sudo group",
    text:
      "Direct sudoers rules can grant privilege even when the user is not in the sudo group.",
  },
  {
    title: "Giving sudo to fix an access problem",
    text:
      "Administrative privilege is not a substitute for correct file, group, service, or application permissions.",
  },
  {
    title: "Assuming a locked password disables the account completely",
    text:
      "Other authentication methods, existing sessions, SSH keys, services, and scheduled execution may still matter.",
  },
  {
    title: "Editing /etc/sudoers with a normal text editor",
    text:
      "A syntax error can break sudo. Use visudo for validation and controlled editing.",
  },
];

const verification = [
  {
    area: "Identity",
    check:
      "Run id username and confirm UID, primary group, and supplementary groups match the intended role.",
  },
  {
    area: "Sudo access",
    check:
      "Run sudo -l -U username when permitted and confirm the effective administrative privilege is correct.",
  },
  {
    area: "Account state",
    check:
      "Use passwd -S and relevant login configuration to confirm the intended password or account state.",
  },
  {
    area: "Required login",
    check:
      "Confirm authorized users can still access the system through the scenario-required method.",
  },
  {
    area: "Service dependency",
    check:
      "If the account is tied to a service, verify that service and owned files still function.",
  },
  {
    area: "Evidence",
    check:
      "Confirm logs and account evidence needed for forensics were preserved before remediation.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan is the only administrator; Avery and Riley must remain standard users; an internal backup service must remain functional.",
  },
  {
    step: "02",
    task:
      "Run getent passwd, getent group sudo, id for the named users, and sudo privilege checks where permitted.",
  },
  {
    step: "03",
    task:
      "Classify Morgan, Avery, Riley, backupsvc, and guest-temp using scenario evidence, shells, groups, homes, services, and login information.",
  },
  {
    step: "04",
    task:
      "Identify Avery's unnecessary sudo-group membership as a privilege problem without deleting Avery.",
  },
  {
    step: "05",
    task:
      "Investigate backupsvc before changing it by checking its service relationship, file ownership, and process context.",
  },
  {
    step: "06",
    task:
      "If guest-temp is confirmed unauthorized after evidence review, choose a reversible containment action before permanent removal where practical.",
  },
  {
    step: "07",
    task:
      "Re-run id, groups, sudo privilege checks, required logins, and the backup service verification after changes.",
  },
];

const checklist = [
  "I can explain UID, GID, primary groups, supplementary groups, shells, and home directories.",
  "I can read a basic /etc/passwd record without confusing the password placeholder with the actual password hash.",
  "I know where /etc/shadow, /etc/group, /etc/sudoers, and /etc/sudoers.d/ fit into identity review.",
  "I compare users and administrators to the scenario before changing them.",
  "I do not classify accounts using UID or username alone.",
  "I check both sudo-group membership and direct sudoers rules.",
  "I understand that service accounts can be required even when they are not named in the scenario.",
  "I correct excessive privilege without deleting legitimate users.",
  "I validate sudoers syntax with visudo.",
  "I verify identity, privilege, login, services, and evidence after changes.",
];

const reflection = [
  "Why is a legitimate standard user in sudo different from an unauthorized user account?",
  "Why can a service account with a non-interactive shell still be essential?",
  "Why is checking only getent group sudo insufficient for a complete privilege review?",
  "What additional evidence would you collect before disabling an unfamiliar account?",
  "Why does locking a password not always disable every way an account can be used?",
  "What should you verify after changing a user's administrative privilege?",
];

export default function LinuxUsersGroupsSudoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/filesystem-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/passwords-authentication-account-policies"
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
                Linux · Lesson 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Users, Groups & Sudo Privilege
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review Linux identities, group membership, sudo privilege,
                account state, shells, home directories, and service dependencies
                without deleting legitimate users or breaking required services.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Identity is one of the highest-impact areas in a competition
                image. The goal is not to remove every unfamiliar account. The
                goal is to understand who or what the account represents, compare
                that evidence to the scenario, and correct only the confirmed
                mismatch.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Identity concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core identity files</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
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
            What identity review should help you decide
          </h2>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Fix the privilege problem, not the person
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              An authorized user can still have the wrong privilege. If Avery is
              supposed to be a standard user but appears in sudo, the correct
              response may be to remove unnecessary administrative membership
              while keeping Avery's account and required access intact.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Identity risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Unfamiliar does not mean unauthorized
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Linux systems contain package-created users, service identities,
              application accounts, and system accounts. Removing one without
              evidence can break a required service even when no human ever logs
              in as that account.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Identity fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind Linux accounts and groups
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {identityConcepts.map((item) => (
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Important identity files
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what each source tells you
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importantFiles.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            /etc/passwd anatomy
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the account record before making a judgment
          </h2>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <code className="text-sm text-cyan-100">
              morgan:x:1001:1001:Morgan Lee:/home/morgan:/bin/bash
            </code>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {accountFields.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.field}
                </p>
                <code className="mt-3 block text-sm font-bold text-white">
                  {item.example}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Do not use the shell field as your only decision
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A non-interactive shell can be completely appropriate for a service
              account, while an interactive shell can be legitimate for a human
              user. The scenario and supporting evidence determine whether the
              account belongs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Account classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Human, service, system, or unknown?
          </h2>

          <div className="mt-8 grid gap-4">
            {accountTypes.map((item) => (
              <div
                key={item.type}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.65fr_1fr_1fr]"
              >
                <h3 className="text-lg font-black text-white">{item.type}</h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Common signs
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.signs}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection-first identity review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Commands that describe accounts before you change them
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Sudo privilege
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Administrative access is more than one group
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sudoConcepts.map((item) => (
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

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Practical review order
            </p>
            <div className="mt-4 grid gap-2">
              {privilegeReview.map((item, index) => (
                <div key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Scenario comparison
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Compare identities to the mission
          </h2>

          <div className="mt-8 grid gap-4">
            {scenarioComparison.map((item) => (
              <div
                key={item.account}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.5fr_0.8fr_1.1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Account
                  </p>
                  <p className="mt-2 font-black text-white">{item.account}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Scenario
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.scenario}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Observed
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.observed}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Decision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.decision}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled identity changes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change the smallest thing that solves the confirmed problem
          </h2>

          <div className="mt-8 grid gap-4">
            {controlledCommands.map((item) => (
              <div
                key={item.goal}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Goal
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{item.goal}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Example command
                  </p>
                  <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Use carefully
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-black text-red-100">
              Permanent deletion should not be the first reflex
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              When evidence is incomplete, a reversible containment action such
              as correcting privilege or locking an unauthorized human account
              may preserve more evidence and create less risk than immediate
              deletion. The correct action still depends on the scenario.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Root review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Understand UID 0
            </h2>

            <div className="mt-6 grid gap-3">
              {rootReview.map((item) => (
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

            <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
              <p className="text-sm leading-7 text-slate-300">
                An unexpected UID 0 account deserves high-priority investigation,
                but preserve evidence and understand the account before taking a
                destructive action.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Identity evidence
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build decisions from more than one source
            </h2>

            <div className="mt-6 grid gap-3">
              {evidenceSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Identity shortcuts that create bigger problems
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonMistakes.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the identity state after every privilege change
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Audit a fictional Linux identity set
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
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
                Identity review is about authorization and purpose. Keep required
                users and services, remove unnecessary privilege, investigate
                unknown identities, and verify the effect of every change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/filesystem-important-paths"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/passwords-authentication-account-policies"
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
