import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why Linux configuration files are security-sensitive and why editing method matters.",
  "Inspect ownership, permissions, package origin, syntax, includes, and active configuration before changing a file.",
  "Use safe editing tools such as sudoedit, visudo, and service-specific validation commands when appropriate.",
  "Distinguish vendor defaults, administrator overrides, drop-in files, generated files, and package-managed configuration.",
  "Create controlled backups and preserve evidence without weakening permissions or exposing secrets.",
  "Verify syntax, service behavior, permissions, and required functionality after every configuration change.",
];

const coreConcepts = [
  {
    title: "Configuration file",
    text:
      "A configuration file controls how a service, application, shell, network component, or security feature behaves.",
  },
  {
    title: "Effective configuration",
    text:
      "The file you edit may not be the only source of settings. Includes, drop-ins, command-line options, defaults, and generated files can change the final behavior.",
  },
  {
    title: "Ownership and permissions",
    text:
      "Configuration files should be writable only by authorized accounts. A secure-looking setting is ineffective if an untrusted user can modify the file.",
  },
  {
    title: "Validation",
    text:
      "Many services provide syntax-check or test commands. Use them before reload or restart when available.",
  },
  {
    title: "Backup",
    text:
      "A good backup preserves the known-good state and makes rollback possible without exposing secrets or changing ownership unexpectedly.",
  },
  {
    title: "Verification",
    text:
      "A successful save does not prove success. Recheck effective configuration, service state, logs, permissions, and the actual required function.",
  },
];

const importantPaths = [
  {
    path: "/etc/",
    purpose:
      "Primary location for system-wide configuration on Linux.",
    caution:
      "Do not edit unfamiliar files simply because they are under /etc. Determine purpose and ownership first.",
  },
  {
    path: "/etc/systemd/system/",
    purpose:
      "Local systemd units, overrides, and symlinks.",
    caution:
      "A drop-in may override vendor service behavior without modifying the original unit file.",
  },
  {
    path: "/etc/ssh/",
    purpose:
      "OpenSSH client and server configuration.",
    caution:
      "Validate sshd configuration before reload or restart to avoid remote-access lockout.",
  },
  {
    path: "/etc/sudoers",
    purpose:
      "Primary sudo policy file.",
    caution:
      "Use visudo rather than a generic editor because a syntax error can break administrative access.",
  },
  {
    path: "/etc/sudoers.d/",
    purpose:
      "Sudo drop-in directory used for additional policy fragments.",
    caution:
      "File names, ownership, permissions, and syntax all matter.",
  },
  {
    path: "/etc/netplan/",
    purpose:
      "Common Ubuntu netplan configuration location.",
    caution:
      "YAML indentation errors can break networking. Validate before apply.",
  },
  {
    path: "/etc/default/",
    purpose:
      "Common location for package or service default environment settings on Debian-family systems.",
    caution:
      "Not every package uses this pattern. Confirm the service's documentation and active configuration.",
  },
  {
    path: "/etc/security/",
    purpose:
      "Security-related configuration such as limits and PAM-related supporting files.",
    caution:
      "Changes can have broad authentication or resource-control effects.",
  },
  {
    path: "/etc/pam.d/",
    purpose:
      "PAM service-specific authentication policy.",
    caution:
      "A mistake can block login or privilege escalation. Preserve console recovery and validate carefully.",
  },
];

const inspectionCommands = [
  {
    command: "ls -l /path/to/config",
    purpose:
      "Show basic ownership and permissions.",
  },
  {
    command: "stat /path/to/config",
    purpose:
      "Show detailed metadata including mode, owner, group, size, and timestamps.",
  },
  {
    command: "file /path/to/config",
    purpose:
      "Identify file type and help spot unexpected binary or unusual content.",
  },
  {
    command: "readlink -f /path/to/config",
    purpose:
      "Resolve symbolic links so you know which file is actually being edited.",
  },
  {
    command: "dpkg -S /path/to/config",
    purpose:
      "Check whether the file belongs to an installed Debian package.",
  },
  {
    command: "sudo sed -n '1,220p' /path/to/config",
    purpose:
      "Read a bounded section of the file without editing it.",
  },
  {
    command: "sudo grep -RIn 'Include\\|include' /path/to/config /related/directory 2>/dev/null",
    purpose:
      "Search for include directives and related configuration fragments.",
  },
  {
    command: "sudo find /related/config/directory -maxdepth 2 -type f -ls",
    purpose:
      "Inventory nearby drop-ins and fragments that may affect effective behavior.",
  },
  {
    command: "getfacl /path/to/config 2>/dev/null",
    purpose:
      "Review access-control lists when ACLs may grant permissions beyond standard mode bits.",
  },
  {
    command: "namei -l /path/to/config",
    purpose:
      "Review ownership and permissions along every directory component in the path.",
  },
  {
    command: "sudo diff -u /path/to/config.backup /path/to/config",
    purpose:
      "Compare a known-good backup with the current configuration.",
  },
  {
    command: "sudo systemctl cat service-name",
    purpose:
      "Show a service's unit file and drop-in overrides when systemd is involved.",
  },
];

const editingTools = [
  {
    tool: "sudoedit",
    command: "sudoedit /path/to/config",
    use:
      "Safely edits a privileged file using the user's editor while controlling how the privileged file is replaced.",
    caution:
      "Still requires careful review, backup, and validation.",
  },
  {
    tool: "visudo",
    command: "sudo visudo",
    use:
      "Edits sudoers with syntax checking.",
    caution:
      "Use visudo for /etc/sudoers and visudo -f for sudoers.d files.",
  },
  {
    tool: "systemctl edit",
    command: "sudo systemctl edit service-name",
    use:
      "Creates a systemd drop-in override instead of modifying the vendor unit directly.",
    caution:
      "Understand precedence and run systemctl daemon-reload when required.",
  },
  {
    tool: "netplan try",
    command: "sudo netplan try",
    use:
      "Tests netplan changes with a rollback mechanism on supported systems.",
    caution:
      "Still review YAML and preserve a recovery path before testing.",
  },
  {
    tool: "sshd validation",
    command: "sudo sshd -t",
    use:
      "Checks OpenSSH server configuration syntax before reload or restart.",
    caution:
      "Syntax success does not prove authorized users will still be able to log in.",
  },
  {
    tool: "Bash syntax check",
    command: "bash -n /path/to/script",
    use:
      "Checks Bash syntax without executing the script.",
    caution:
      "Syntax validation does not prove the script is safe or logically correct.",
  },
];

const backupPatterns = [
  {
    title: "Same-directory timestamped backup",
    command: "sudo cp -a /path/to/config /path/to/config.backup",
    note:
      "cp -a preserves metadata better than a plain copy in many cases. Confirm the destination is secure.",
  },
  {
    title: "Evidence copy to review directory",
    command: "sudo cp -a /path/to/config /secure/evidence/config-original",
    note:
      "Use only an authorized location with appropriate permissions. Preserve original metadata when possible.",
  },
  {
    title: "Configuration diff",
    command: "sudo diff -u /path/to/config.backup /path/to/config",
    note:
      "Shows exactly what changed without relying on memory.",
  },
  {
    title: "Metadata capture",
    command: "stat /path/to/config",
    note:
      "Record owner, group, permissions, timestamps, and size before editing.",
  },
  {
    title: "Hash capture",
    command: "sha256sum /path/to/config",
    note:
      "Useful for proving the exact content of a preserved file when allowed by the lab workflow.",
  },
  {
    title: "Package ownership",
    command: "dpkg -S /path/to/config",
    note:
      "Helps distinguish package-managed files from local administrator-created files.",
  },
];

const packageConfigConcepts = [
  {
    title: "Package-owned does not mean untouched",
    text:
      "A file can belong to a package and still be modified by an administrator or deployment tool.",
  },
  {
    title: "Conffiles are special",
    text:
      "Debian packages can mark configuration files as conffiles so local administrator changes are preserved across upgrades.",
  },
  {
    title: "Vendor file versus local override",
    text:
      "For systemd and many applications, local drop-ins are often safer than editing vendor files directly.",
  },
  {
    title: "Generated files should not be hand-edited",
    text:
      "Some files are created by higher-level tools such as NetworkManager, netplan, or systemd-resolved and may overwrite direct edits.",
  },
  {
    title: "Upgrade prompts contain context",
    text:
      "Package upgrades may prompt about keeping or replacing modified configuration. Review differences instead of choosing blindly.",
  },
  {
    title: "Package origin is only one clue",
    text:
      "A package-owned file can still be insecurely configured. Review content and effective behavior.",
  },
];

const configurationLayers = [
  {
    layer: "01",
    title: "Defaults",
    description:
      "Built-in application defaults used when no explicit setting overrides them.",
  },
  {
    layer: "02",
    title: "Vendor configuration",
    description:
      "Package-provided files or base service configuration.",
  },
  {
    layer: "03",
    title: "Local configuration",
    description:
      "Administrator-created settings in /etc or application-specific directories.",
  },
  {
    layer: "04",
    title: "Drop-ins and includes",
    description:
      "Additional fragments loaded by the primary configuration.",
  },
  {
    layer: "05",
    title: "Environment and command line",
    description:
      "Runtime variables or service arguments that can override file-based settings.",
  },
  {
    layer: "06",
    title: "Effective runtime state",
    description:
      "The behavior the service actually uses after all configuration sources are combined.",
  },
];

const reasoningCases = [
  {
    finding: "A service has an insecure-looking setting in its main config file",
    weak:
      "Edit the line immediately.",
    better:
      "Check includes, drop-ins, effective configuration, package ownership, and service documentation before deciding whether the line is active.",
  },
  {
    finding: "A configuration file is world-writable",
    weak:
      "Change it to 600 without checking anything else.",
    better:
      "Determine the intended owner, group, application access needs, ACLs, and directory permissions, then apply the narrowest secure mode.",
  },
  {
    finding: "A file is a symbolic link",
    weak:
      "Replace it with a regular file.",
    better:
      "Resolve the target and determine whether the symlink is intentional, generated, or package-managed before editing.",
  },
  {
    finding: "A vendor systemd unit needs one local change",
    weak:
      "Edit the file under /lib/systemd/system directly.",
    better:
      "Prefer a local systemctl edit drop-in when appropriate so package upgrades do not overwrite the administrator change.",
  },
  {
    finding: "The service fails after a configuration edit",
    weak:
      "Keep editing until it starts.",
    better:
      "Stop, compare against the backup, run the service's validation command, inspect logs, and roll back if necessary.",
  },
  {
    finding: "A configuration file contains a password or token",
    weak:
      "Copy the entire file into troubleshooting notes.",
    better:
      "Protect secret values, limit evidence exposure, and record only what is necessary for the authorized task.",
  },
];

const permissionsReview = [
  {
    question: "Who should own the file?",
    answer:
      "Usually root or the service account depending on the application. Confirm the expected owner before changing it.",
  },
  {
    question: "Who needs write access?",
    answer:
      "Only authorized administrators or the application component that legitimately modifies the file.",
  },
  {
    question: "Who needs read access?",
    answer:
      "Depends on whether the file contains public settings, private keys, credentials, tokens, hashes, or service secrets.",
  },
  {
    question: "Do parent directories matter?",
    answer:
      "Yes. A secure file inside a writable directory can still be replaced or redirected.",
  },
  {
    question: "Do ACLs matter?",
    answer:
      "Yes. getfacl may reveal extra access not visible in the basic ls -l mode bits.",
  },
  {
    question: "Does the service require special group access?",
    answer:
      "Possibly. Do not remove group permissions until you understand the service's runtime account and access model.",
  },
];

const controlledActions = [
  {
    goal: "Create a metadata-preserving backup",
    command: "sudo cp -a /path/to/config /path/to/config.backup",
    caution:
      "Choose a secure destination and avoid leaving extra secret-bearing files world-readable.",
  },
  {
    goal: "Edit a privileged file",
    command: "sudoedit /path/to/config",
    caution:
      "Review only the intended lines and preserve the backup before saving.",
  },
  {
    goal: "Edit sudo policy",
    command: "sudo visudo",
    caution:
      "Use visudo so syntax is checked before the policy is committed.",
  },
  {
    goal: "Create a systemd override",
    command: "sudo systemctl edit service-name",
    caution:
      "Understand what the override changes and inspect the effective unit afterward.",
  },
  {
    goal: "Reload systemd unit definitions",
    command: "sudo systemctl daemon-reload",
    caution:
      "Run after unit-file changes when required. This does not restart the service by itself.",
  },
  {
    goal: "Reload a service after validation",
    command: "sudo systemctl reload service-name",
    caution:
      "Use only if the service supports reload and the configuration has already validated.",
  },
];

const validationExamples = [
  {
    service: "OpenSSH",
    command: "sudo sshd -t",
    purpose:
      "Validate SSH server syntax before reload or restart.",
  },
  {
    service: "sudoers",
    command: "sudo visudo -c",
    purpose:
      "Validate sudoers syntax.",
  },
  {
    service: "Netplan",
    command: "sudo netplan generate",
    purpose:
      "Validate/render netplan configuration before applying.",
  },
  {
    service: "systemd units",
    command: "systemd-analyze verify /path/to/unit",
    purpose:
      "Check many unit-file issues before loading the unit.",
  },
  {
    service: "Nginx",
    command: "sudo nginx -t",
    purpose:
      "Validate Nginx configuration when Nginx is installed.",
  },
  {
    service: "Apache",
    command: "sudo apache2ctl configtest",
    purpose:
      "Validate Apache configuration when Apache is installed.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Editing privileged files with a random GUI editor as root",
    risk:
      "Can create ownership, temp-file, backup-file, or environment problems and increases the chance of unintended broad access.",
  },
  {
    shortcut: "chmod 777 to fix a permission error",
    risk:
      "Creates excessive write access and can turn a configuration problem into a security vulnerability.",
  },
  {
    shortcut: "Editing generated files directly",
    risk:
      "The change may be overwritten, conflict with the real source of configuration, or make troubleshooting harder.",
  },
  {
    shortcut: "Restarting a service before validation",
    risk:
      "A syntax error can turn a working service into an outage.",
  },
  {
    shortcut: "Deleting the original configuration before testing",
    risk:
      "Removes the easiest rollback path and can destroy useful evidence.",
  },
  {
    shortcut: "Copying secret-bearing configs into public notes",
    risk:
      "Can expose credentials, tokens, private keys, or sensitive infrastructure details.",
  },
];

const verification = [
  {
    area: "Syntax",
    check:
      "Run the appropriate validation or config-test command and confirm it succeeds.",
  },
  {
    area: "Effective configuration",
    check:
      "Use the service's effective-config view or inspect includes/drop-ins to confirm the intended setting is active.",
  },
  {
    area: "Ownership and permissions",
    check:
      "Re-run stat, ls -l, getfacl when relevant, and namei -l on sensitive paths.",
  },
  {
    area: "Service health",
    check:
      "Confirm the service is active and logs show no new configuration errors.",
  },
  {
    area: "Required function",
    check:
      "Test the actual SSH, web, network, authentication, or application workflow affected by the configuration.",
  },
  {
    area: "Rollback readiness",
    check:
      "Keep the known-good backup until the change has been verified and documented.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: SSH is required, sudo must remain available, and a web application uses a package-managed service with one local override.",
  },
  {
    step: "02",
    task:
      "Inspect ownership, permissions, symlinks, package ownership, includes, and effective configuration for the SSH, sudo, and web-service files before editing anything.",
  },
  {
    step: "03",
    task:
      "Create metadata-preserving backups of the specific files that may need changes and record stat output.",
  },
  {
    step: "04",
    task:
      "Use sudoedit, visudo, or systemctl edit depending on the configuration type instead of editing every vendor file directly.",
  },
  {
    step: "05",
    task:
      "Run sshd -t, visudo -c, and the web service's supported config test before reload or restart.",
  },
  {
    step: "06",
    task:
      "Reload or restart only the affected service after validation, then review logs for errors.",
  },
  {
    step: "07",
    task:
      "Verify SSH login, sudo access, web application function, file permissions, and the final effective configuration.",
  },
];

const checklist = [
  "I inspect ownership, permissions, symlinks, ACLs, package origin, and includes before editing a configuration file.",
  "I understand that the visible file may not be the complete effective configuration.",
  "I prefer sudoedit, visudo, systemctl edit, and service-specific tools when appropriate.",
  "I create a secure backup before meaningful configuration changes.",
  "I avoid chmod 777 and other broad permission changes as troubleshooting shortcuts.",
  "I do not edit generated configuration without identifying the higher-level manager.",
  "I validate syntax before reload or restart whenever the service supports it.",
  "I protect credentials, tokens, private keys, and other secrets during troubleshooting.",
  "I verify both service state and the real required function after changes.",
  "I keep a known-good rollback path until the change is fully verified.",
];

const reflection = [
  "Why can editing the main configuration file fail to change the service's actual behavior?",
  "Why is a systemd drop-in often safer than editing the vendor unit directly?",
  "Why is chmod 777 a poor fix for configuration-access problems?",
  "What is the advantage of visudo over a generic text editor?",
  "Why should you inspect parent-directory permissions as well as the file itself?",
  "What should you verify before deleting the known-good backup?",
];

export default function LinuxConfigurationFilesSecureEditingPage() {
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
              href="/cyberpatriot/linux/logs-journalctl-system-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/linux-defensive-command-line"
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
                Linux · Lesson 15
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Configuration Files & Secure Editing
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Inspect, back up, edit, validate, and verify Linux configuration
                safely without weakening permissions, overwriting package-managed
                files, or breaking required services.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Configuration hardening is not just changing a value. It is
                understanding which file is authoritative, who can modify it,
                how it is loaded, how to validate it, and how to recover if the
                change fails.
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
                  <span>Editing tools</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Safe, reversible configuration</span>
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
            Make configuration changes that are controlled and reversible
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
              A config file is part of a larger control chain
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Secure editing means understanding the file, its owner, its
              includes, its package source, its validation method, and the
              service behavior it controls.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Outage risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One syntax error can break authentication, networking, or remote access
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Validate first, preserve a known-good backup, and keep a recovery
              path before restarting a security-critical service.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Configuration fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind safe editing
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
            Important configuration locations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what kind of configuration you are touching
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importantPaths.map((item) => (
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
                  <p className="text-sm leading-6 text-slate-400">
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
            Inspect the file and its context before you edit
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
            Configuration layers
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            The visible file may not be the final authority
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {configurationLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.layer}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Secure editing tools
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the tool designed for the configuration when possible
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {editingTools.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.tool}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.use}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">
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
            Backups and rollback
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the known-good state before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {backupPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Package-managed configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Package ownership gives context, not automatic safety
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {packageConfigConcepts.map((item) => (
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
            Permissions review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Secure editing includes securing who can change the file
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {permissionsReview.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Validation examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Validate before reload or restart
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {validationExamples.map((item) => (
              <div
                key={item.service}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.service}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Validation is service-specific
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Do not invent a validation command. Use the tool supported by the
              installed service and verify the actual command on the image.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change configuration only after you understand its authority
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Controlled changes
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Edit narrowly and preserve rollback
            </h2>

            <div className="mt-6 grid gap-3">
              {controlledActions.map((item) => (
                <div
                  key={item.goal}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.goal}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
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
              Prove both configuration and function
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
                A clean config test is not the final test
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The service may parse the file correctly and still fail from the
                user's perspective. Test the real required workflow after the
                configuration is active.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Editing mistakes that create outages or security gaps
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
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
            Securely edit three fictional high-value configurations
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
                Safe configuration work follows a chain: inspect, preserve,
                edit narrowly, validate, activate, verify, and retain rollback
                until the required function is proven healthy.
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
              href="/cyberpatriot/linux/logs-journalctl-system-evidence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/linux-defensive-command-line"
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
