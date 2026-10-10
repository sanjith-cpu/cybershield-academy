import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Linux password state, aging, authentication, PAM, and account locking relate to one another.",
  "Inspect local password policy and account state before changing values.",
  "Distinguish password locking, account expiration, shell restrictions, and authentication-method controls.",
  "Use password-aging tools without assuming one universal competition value fits every scenario.",
  "Understand where PAM fits into authentication and why careless PAM edits can lock out authorized users.",
  "Verify that required users can still authenticate after policy changes while unnecessary access is reduced.",
];

const coreConcepts = [
  {
    title: "Password state",
    text:
      "A local account can have a usable password, a locked password, no password, or another state reflected in shadow metadata. Password state is only one part of whether the account can access the system.",
  },
  {
    title: "Password aging",
    text:
      "Linux can track when a password was last changed and apply minimum age, maximum age, warning periods, and expiration behavior.",
  },
  {
    title: "Account expiration",
    text:
      "An account can be configured to expire independently of ordinary password aging. This is different from merely locking the password hash.",
  },
  {
    title: "Authentication stack",
    text:
      "Applications such as login, sudo, and SSH can use PAM modules and service-specific configuration. A password policy may therefore be enforced in more than one place.",
  },
  {
    title: "Multiple access methods",
    text:
      "A user might authenticate with a password, SSH key, cached session, service token, or another configured method. Disabling one path does not automatically remove all access.",
  },
  {
    title: "Scenario-driven policy",
    text:
      "The correct policy depends on the scenario, system role, authorized users, and required services. Avoid forcing remembered values without evidence.",
  },
];

const importantFiles = [
  {
    path: "/etc/shadow",
    purpose:
      "Stores local password hashes and password-aging fields for local accounts.",
    caution:
      "Highly sensitive. Do not expose hashes or copy them unnecessarily. Use account-management tools for normal review and changes.",
  },
  {
    path: "/etc/login.defs",
    purpose:
      "Contains defaults used by some account-management tools, including password-aging defaults for newly created accounts.",
    caution:
      "Changing a default does not necessarily retroactively update every existing account.",
  },
  {
    path: "/etc/pam.d/",
    purpose:
      "Contains PAM service configuration used by applications such as login, sudo, and other authentication-aware programs.",
    caution:
      "A bad PAM change can deny access to legitimate users. Read the service stack and module behavior before editing.",
  },
  {
    path: "/etc/security/",
    purpose:
      "Contains configuration used by several PAM and security modules, depending on what is installed.",
    caution:
      "Not every file applies to every system. Confirm the active module and service stack.",
  },
  {
    path: "/etc/ssh/sshd_config",
    purpose:
      "Controls SSH server behavior, including authentication methods and remote-login restrictions.",
    caution:
      "SSH policy is separate from local console authentication. Preserve required remote access and validate changes before restart.",
  },
  {
    path: "/etc/ssh/sshd_config.d/",
    purpose:
      "Drop-in SSH configuration directory on systems that use it.",
    caution:
      "Effective SSH settings can come from multiple files. Inspect the final configuration rather than one line in one file.",
  },
];

const passwdStatusLegend = [
  {
    marker: "P",
    meaning:
      "The account has a usable password according to passwd status output.",
  },
  {
    marker: "L",
    meaning:
      "The password is locked.",
  },
  {
    marker: "NP",
    meaning:
      "No password is set for the account.",
  },
];

const inspectionCommands = [
  {
    command: "sudo passwd -S username",
    purpose:
      "Show password status and selected aging information for a local account.",
  },
  {
    command: "sudo chage -l username",
    purpose:
      "Display password-aging and expiration settings for an account.",
  },
  {
    command: "sudo getent shadow username",
    purpose:
      "Inspect the shadow record when elevated access is appropriate. Avoid exposing hash data unnecessarily.",
  },
  {
    command: "grep -E '^(PASS_MAX_DAYS|PASS_MIN_DAYS|PASS_WARN_AGE)' /etc/login.defs",
    purpose:
      "Review account-creation defaults related to password aging.",
  },
  {
    command: "grep -R 'pam_pwquality\\|pam_pwhistory\\|pam_faillock' /etc/pam.d 2>/dev/null",
    purpose:
      "Look for common PAM modules related to password quality, history, or failed-authentication handling where installed.",
  },
  {
    command: "sudo sshd -T 2>/dev/null | grep -E 'passwordauthentication|permitrootlogin|pubkeyauthentication'",
    purpose:
      "Inspect effective SSH authentication settings when the OpenSSH server is installed.",
  },
  {
    command: "getent passwd username",
    purpose:
      "Review the account shell and home directory alongside authentication state.",
  },
  {
    command: "lastlog -u username",
    purpose:
      "Review the recorded last-login indicator where available. Treat it as supporting evidence, not perfect proof.",
  },
];

const agingFields = [
  {
    setting: "Last password change",
    meaning:
      "When the current password was last changed according to local account metadata.",
    caution:
      "A timestamp does not tell you whether the password itself is strong.",
  },
  {
    setting: "Minimum password age",
    meaning:
      "How soon a password may be changed again.",
    caution:
      "Very restrictive values can interfere with legitimate password resets or recovery workflows.",
  },
  {
    setting: "Maximum password age",
    meaning:
      "How long the password may remain valid before expiration behavior applies.",
    caution:
      "Do not impose a remembered number unless the scenario or policy requires it.",
  },
  {
    setting: "Warning period",
    meaning:
      "How far in advance the user may be warned that the password is nearing expiration.",
    caution:
      "Warnings affect usability, not password strength by themselves.",
  },
  {
    setting: "Inactive period",
    meaning:
      "How long after password expiration an account may remain usable before additional disabling behavior occurs, depending on configuration.",
    caution:
      "This can affect required users unexpectedly if set without context.",
  },
  {
    setting: "Account expiration",
    meaning:
      "Date after which the account itself is considered expired.",
    caution:
      "This is distinct from password expiration and should match the scenario.",
  },
];

const authLayers = [
  {
    layer: "Account existence",
    question:
      "Does the account exist, and is it authorized by the scenario?",
    tools:
      "getent passwd, id, account inventory",
  },
  {
    layer: "Password state",
    question:
      "Is the password usable, locked, or absent?",
    tools:
      "passwd -S, shadow metadata",
  },
  {
    layer: "Password aging",
    question:
      "Are expiration, minimum age, maximum age, and warning values intentional?",
    tools:
      "chage -l, login.defs",
  },
  {
    layer: "PAM",
    question:
      "What authentication and account-control modules are actually used by the relevant service?",
    tools:
      "/etc/pam.d/, active module configuration",
  },
  {
    layer: "Application/service policy",
    question:
      "Does SSH, sudo, login, display manager, or another service add its own restrictions?",
    tools:
      "sshd -T, sudo policy, service configuration",
  },
  {
    layer: "Alternate authentication",
    question:
      "Could SSH keys or another configured method still allow access even when password login is restricted?",
    tools:
      "~/.ssh/authorized_keys, sshd effective configuration, service-specific settings",
  },
];

const pamConcepts = [
  {
    title: "PAM is modular",
    text:
      "Pluggable Authentication Modules let services share authentication, account, password, and session controls through configurable module stacks.",
  },
  {
    title: "Service files matter",
    text:
      "Different applications can use different files under /etc/pam.d/. A setting that affects login may not be identical to one affecting sudo.",
  },
  {
    title: "Order matters",
    text:
      "The order and control flags of PAM modules can change the resulting authentication behavior.",
  },
  {
    title: "Installed modules vary",
    text:
      "Modules such as pam_pwquality, pam_pwhistory, and pam_faillock may or may not be installed or active on a particular image.",
  },
  {
    title: "Policy can have dependencies",
    text:
      "A strict rule may affect service accounts, scripted workflows, recovery, or authorized users if applied without context.",
  },
  {
    title: "Validate before logout",
    text:
      "After authentication-related changes, verify a second authorized access path before closing the working administrative session when practical.",
  },
];

const scenarioMatrix = [
  {
    account: "Morgan",
    scenario:
      "Only authorized administrator; local and SSH access required.",
    observed:
      "Password usable, expected sudo privilege, SSH password authentication currently enabled.",
    reasoning:
      "Preserve required access. Review policy and SSH exposure without locking out the administrator.",
  },
  {
    account: "Avery",
    scenario:
      "Authorized standard user.",
    observed:
      "Password active; account does not expire; no administrative privilege.",
    reasoning:
      "No automatic change is justified. Compare aging settings with the stated policy.",
  },
  {
    account: "Riley",
    scenario:
      "Authorized standard user.",
    observed:
      "Password locked unexpectedly; scenario requires normal login.",
    reasoning:
      "Investigate why the account is locked and restore only the required authentication path if appropriate.",
  },
  {
    account: "guest-temp",
    scenario:
      "Not authorized.",
    observed:
      "Password active and interactive shell enabled.",
    reasoning:
      "High-priority investigation. Preserve evidence, confirm the account is unauthorized, then choose the least disruptive containment/removal path.",
  },
  {
    account: "backupsvc",
    scenario:
      "Not named directly; backup service is required.",
    observed:
      "Password locked, non-interactive shell, service uses the account.",
    reasoning:
      "Likely normal service-account design. Do not unlock or disable based only on human-user expectations.",
  },
];

const controlledChanges = [
  {
    goal: "Lock a local password",
    command: "sudo passwd -l username",
    caution:
      "This locks the local password hash but may not disable SSH keys, existing sessions, services, or every authentication mechanism.",
  },
  {
    goal: "Unlock a local password",
    command: "sudo passwd -u username",
    caution:
      "Use only when the account is authorized and a usable local password is required.",
  },
  {
    goal: "Force password change at next login",
    command: "sudo chage -d 0 username",
    caution:
      "Only use when the scenario or policy calls for it and the user can actually complete the required login flow.",
  },
  {
    goal: "Set an account expiration date",
    command: "sudo chage -E YYYY-MM-DD username",
    caution:
      "Use a scenario-driven date. Do not invent an expiration requirement.",
  },
  {
    goal: "Remove account expiration",
    command: "sudo chage -E -1 username",
    caution:
      "Use only if the account is authorized and should not expire under the scenario.",
  },
  {
    goal: "Review/edit password aging",
    command: "sudo chage username",
    caution:
      "Interactive chage can modify several fields. Record the original values and change only those justified by policy.",
  },
];

const dangerousShortcuts = [
  {
    shortcut: "Setting the same aging values on every account",
    risk:
      "Service identities and required human users can have different needs, and the scenario may specify exceptions.",
  },
  {
    shortcut: "Editing /etc/shadow manually",
    risk:
      "A formatting mistake can break authentication or corrupt account state. Use account-management tools for normal changes.",
  },
  {
    shortcut: "Changing PAM from memory",
    risk:
      "PAM syntax, modules, and stack behavior are easy to misconfigure and can lock out authorized users.",
  },
  {
    shortcut: "Assuming passwd -l disables the whole account",
    risk:
      "Other access mechanisms may still work. Verify SSH keys, services, scheduled jobs, and active sessions where relevant.",
  },
  {
    shortcut: "Disabling SSH password authentication without checking keys",
    risk:
      "Required remote administration can be lost if no verified alternate authentication method exists.",
  },
  {
    shortcut: "Logging out immediately after auth changes",
    risk:
      "You may discover the new policy blocks every authorized administrative path only after your working session is gone.",
  },
];

const evidenceSources = [
  {
    source: "passwd status",
    command: "sudo passwd -S username",
    tellsYou:
      "Local password state and selected aging information.",
  },
  {
    source: "chage",
    command: "sudo chage -l username",
    tellsYou:
      "Detailed password-aging and account-expiration values.",
  },
  {
    source: "SSH effective configuration",
    command: "sudo sshd -T",
    tellsYou:
      "Effective SSH server configuration after includes and defaults are processed.",
  },
  {
    source: "PAM configuration",
    command: "grep -R 'pam_' /etc/pam.d 2>/dev/null",
    tellsYou:
      "Which PAM modules appear in service stacks. Interpretation still requires context.",
  },
  {
    source: "Authentication logs",
    command: "sudo journalctl --since today | grep -iE 'authentication|failed|sudo|sshd'",
    tellsYou:
      "Recent authentication-related evidence where messages are present in the journal.",
  },
  {
    source: "Login history",
    command: "last",
    tellsYou:
      "Recorded login sessions from wtmp where available.",
  },
];

const verification = [
  {
    area: "Authorized login",
    check:
      "Confirm the intended authorized user can still authenticate through the required local or remote method.",
  },
  {
    area: "Password state",
    check:
      "Re-run passwd -S and confirm the intended lock/unlock state.",
  },
  {
    area: "Aging policy",
    check:
      "Re-run chage -l and confirm only the intended fields changed.",
  },
  {
    area: "SSH",
    check:
      "If SSH was affected, validate sshd configuration and test the authorized access path before ending the working session.",
  },
  {
    area: "PAM",
    check:
      "If PAM changed, test the exact service or authentication path the modified stack controls.",
  },
  {
    area: "Evidence",
    check:
      "Confirm relevant logs and account state were preserved before remediation.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan is the only administrator and requires SSH; Avery and Riley are standard users; backupsvc supports a required backup job; guest-temp is not authorized.",
  },
  {
    step: "02",
    task:
      "Inspect passwd status and chage output for all named accounts without changing anything.",
  },
  {
    step: "03",
    task:
      "Inspect effective SSH authentication settings and verify whether SSH keys or password authentication are required for Morgan.",
  },
  {
    step: "04",
    task:
      "Review PAM files for relevant password-quality or failed-authentication modules only to understand what is active.",
  },
  {
    step: "05",
    task:
      "Classify Riley's unexpected password lock as a functionality problem, guest-temp as an unauthorized-account investigation, and backupsvc as a service identity that should not be treated like a human login.",
  },
  {
    step: "06",
    task:
      "Apply only scenario-supported changes, preserving Morgan's remote access and the required backup service.",
  },
  {
    step: "07",
    task:
      "Re-run status commands, test required authentication, review logs, and document the final state.",
  },
];

const checklist = [
  "I understand the difference between password state, password aging, and account expiration.",
  "I know that /etc/shadow is sensitive and should not be edited casually.",
  "I can use passwd -S and chage -l to inspect an account before changing it.",
  "I understand that /etc/login.defs contains defaults and does not automatically rewrite every existing account.",
  "I know PAM is service-specific and that module order can matter.",
  "I do not assume password locking disables SSH keys or every other access method.",
  "I avoid universal password-aging values unless the scenario or policy requires them.",
  "I validate SSH configuration and preserve required remote access after authentication changes.",
  "I preserve authentication evidence before remediation.",
  "I verify the exact access path affected by the change before considering the work complete.",
];

const reflection = [
  "Why is password locking different from account expiration?",
  "Why can an account with a locked password still matter to a running service?",
  "Why is /etc/login.defs not enough to determine the effective policy of every existing account?",
  "What makes PAM changes especially risky during competition work?",
  "Why should SSH authentication be tested before closing the current administrative session?",
  "What should you verify after changing password-aging or account-expiration settings?",
];

export default function LinuxPasswordsAuthenticationPoliciesPage() {
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
              href="/cyberpatriot/linux/users-groups-sudo"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/file-ownership-permissions"
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
                Linux · Lesson 04
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Passwords, Authentication & Account Policies
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review password state, account expiration, password aging, PAM,
                SSH authentication, and effective access without locking out
                required users or breaking service identities.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Authentication is a system of layers. A secure competition image
                requires more than memorizing password values. You need to know
                which policy applies, which users require access, which services
                depend on identities, and how to verify the final behavior.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Authentication layers</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Secure required access</span>
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
            Understand the authentication system before changing policy
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
              Authentication is layered
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              An account can be present, have a locked password, still possess an
              SSH key, run a service, or retain an active session. Treat password
              state, account state, PAM, and service-specific authentication as
              related but separate controls.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Authentication risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A correct-looking policy can still break the mission
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Password aging, PAM, SSH, and account expiration can deny access to
              authorized users or service identities if changed blindly. Apply
              scenario-driven policy and verify the exact access path afterward.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Authentication fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts to separate before troubleshooting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
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
            Important configuration sources
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know where policy can come from
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
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Describe account and policy state before changing it
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

          <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-black text-red-100">
              Protect password hashes
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Shadow data is sensitive authentication material. Inspect only what
              is needed for authorized administration and do not publish, share,
              or copy password hashes into notes or screenshots unnecessarily.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              passwd status
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Read the state carefully
            </h2>

            <div className="mt-6 grid gap-3">
              {passwdStatusLegend.map((item) => (
                <div
                  key={item.marker}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="text-lg font-black text-cyan-200">
                    {item.marker}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
              <p className="text-sm leading-7 text-slate-300">
                Output can vary across distributions and versions. Use the local
                manual page when a field or status marker is unclear.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Password aging
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Six fields that need context
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {agingFields.map((item) => (
                <div
                  key={item.setting}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.setting}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Authentication layers
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace access from account to application
          </h2>

          <div className="mt-8 grid gap-4">
            {authLayers.map((item, index) => (
              <div
                key={item.layer}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.45fr_1.2fr_1fr]"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Layer {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-black text-white">
                    {item.layer}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  {item.question}
                </p>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Useful sources
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.tools}
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
            PAM
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Powerful authentication plumbing that deserves caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pamConcepts.map((item) => (
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

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Do not treat PAM as a copy-and-paste checklist
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Different images may have different modules installed, different
              service stacks, and different required authentication behavior.
              Learn what the existing stack does before you change it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Scenario reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The same policy does not belong on every account
          </h2>

          <div className="mt-8 grid gap-4">
            {scenarioMatrix.map((item) => (
              <div
                key={item.account}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.45fr_0.9fr_1.1fr_1.2fr]"
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
                    Reasoning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.reasoning}
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
            Controlled changes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use account tools instead of manual file surgery
          </h2>

          <div className="mt-8 grid gap-4">
            {controlledChanges.map((item) => (
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
                    Example
                  </p>
                  <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Dangerous shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Authentication mistakes that can lock out the team
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dangerousShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.shortcut}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence sources
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build authentication decisions from multiple sources
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
                    {item.tellsYou}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Prove both policy and access
            </h2>

            <div className="mt-6 grid gap-3">
              {verification.map((item) => (
                <div
                  key={item.area}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.check}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <p className="text-sm font-black text-emerald-200">
                Keep one known-good administrative path
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                When changing authentication, verify the new state before closing
                the working session whenever practical. That gives the team a
                recovery path if the new configuration behaves differently than
                expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Audit a fictional Linux authentication state
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
                Secure authentication means the right identities can use the
                right access methods under the right policy. Avoid one-size-fits-
                all values, preserve service dependencies, and test the exact
                login path after every meaningful change.
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
              href="/cyberpatriot/linux/users-groups-sudo"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/file-ownership-permissions"
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
