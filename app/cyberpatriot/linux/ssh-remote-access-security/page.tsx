import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how SSH fits into Linux remote administration and why remote-access security must preserve required access.",
  "Inspect SSH server state, effective configuration, listening ports, authorized users, and key-based access before changing anything.",
  "Distinguish server-wide SSH policy from user-level SSH authorization.",
  "Review password authentication, public-key authentication, root login, port exposure, and firewall dependencies without applying one universal setting everywhere.",
  "Use sshd validation and effective-configuration commands before restarting the service.",
  "Verify required remote access from the client perspective after every meaningful SSH or firewall change.",
];

const coreConcepts = [
  {
    title: "SSH server",
    text:
      "The OpenSSH server accepts remote administrative connections when installed, enabled, running, reachable, and permitted by authentication policy.",
  },
  {
    title: "SSH client",
    text:
      "The ssh command initiates outbound connections. A system can have an SSH client installed even when no SSH server is running.",
  },
  {
    title: "Authentication method",
    text:
      "SSH can use passwords, public keys, and other methods depending on configuration. The scenario determines which methods must remain available.",
  },
  {
    title: "Authorization",
    text:
      "An account may exist locally but still be denied SSH through server policy, shell restrictions, key configuration, groups, or firewall controls.",
  },
  {
    title: "Network exposure",
    text:
      "The service must listen on an address and port and be reachable through host firewall and network controls. Security involves both authentication and exposure.",
  },
  {
    title: "Effective configuration",
    text:
      "The active SSH configuration may come from the main file, included drop-ins, defaults, and Match blocks. Inspect the effective result rather than trusting one line.",
  },
];

const importantPaths = [
  {
    path: "/etc/ssh/sshd_config",
    purpose:
      "Primary OpenSSH server configuration file on systems where the server is installed.",
    caution:
      "Do not restart sshd after editing until the configuration validates.",
  },
  {
    path: "/etc/ssh/sshd_config.d/",
    purpose:
      "Drop-in directory that can add or override SSH server settings.",
    caution:
      "Effective behavior may differ from the main file because included configuration applies later.",
  },
  {
    path: "~/.ssh/authorized_keys",
    purpose:
      "Common per-user file containing public keys authorized for SSH login.",
    caution:
      "A locked local password does not necessarily prevent key-based SSH access.",
  },
  {
    path: "~/.ssh/",
    purpose:
      "User-level SSH directory that can contain authorized keys, known hosts, configuration, and private keys.",
    caution:
      "Permissions matter. Private keys and authorization files should not be exposed broadly.",
  },
  {
    path: "/etc/ssh/ssh_host_*",
    purpose:
      "Server host keys used to identify the SSH server to clients.",
    caution:
      "Do not regenerate or delete host keys casually; doing so changes server identity and can trigger client warnings.",
  },
  {
    path: "/var/log/auth.log or journal",
    purpose:
      "Authentication evidence may include successful and failed SSH activity depending on system logging configuration.",
    caution:
      "Log location and retention vary. Use journalctl and available log files together.",
  },
];

const inspectionCommands = [
  {
    command: "systemctl status ssh",
    purpose:
      "Show current SSH service state, recent logs, and process information on Ubuntu-family systems using the ssh unit name.",
  },
  {
    command: "systemctl is-enabled ssh",
    purpose:
      "Check whether SSH is configured for automatic startup.",
  },
  {
    command: "sudo sshd -t",
    purpose:
      "Validate SSH server configuration syntax without restarting the service.",
  },
  {
    command: "sudo sshd -T",
    purpose:
      "Show effective SSH server settings after defaults and includes are processed.",
  },
  {
    command: "sudo sshd -T | grep -E '^(port|listenaddress|passwordauthentication|pubkeyauthentication|permitrootlogin|maxauthtries|allowusers|allowgroups|denyusers|denygroups)'",
    purpose:
      "Review selected effective access-control and exposure settings quickly.",
  },
  {
    command: "ss -tulpn | grep -E '(:22\\b|sshd)'",
    purpose:
      "Check whether sshd is listening and on which addresses/ports.",
  },
  {
    command: "sudo ufw status verbose",
    purpose:
      "Review host firewall policy and whether SSH traffic is allowed.",
  },
  {
    command: "getent passwd username",
    purpose:
      "Check the account's shell and home directory as part of remote-access review.",
  },
  {
    command: "id username",
    purpose:
      "Review groups that may affect SSH AllowGroups or other authorization rules.",
  },
  {
    command: "sudo ls -la /home/username/.ssh",
    purpose:
      "Inspect user SSH files, ownership, and permissions before changing them.",
  },
  {
    command: "sudo cat /home/username/.ssh/authorized_keys",
    purpose:
      "Review authorized public keys when permitted and relevant to the scenario.",
  },
  {
    command: "sudo journalctl -u ssh --since today",
    purpose:
      "Review recent SSH service events and connection-related evidence.",
  },
];

const effectiveSettings = [
  {
    setting: "Port",
    meaning:
      "TCP port on which sshd listens.",
    reasoning:
      "Changing the port is not a substitute for authentication and firewall security. Preserve the scenario-required client path.",
  },
  {
    setting: "ListenAddress",
    meaning:
      "Controls which local addresses sshd binds to.",
    reasoning:
      "A narrower bind can reduce exposure, but only if the required management network still reaches the service.",
  },
  {
    setting: "PasswordAuthentication",
    meaning:
      "Controls whether password-based SSH authentication is accepted.",
    reasoning:
      "Disable only when a verified alternative such as authorized public keys exists and the scenario allows it.",
  },
  {
    setting: "PubkeyAuthentication",
    meaning:
      "Controls public-key authentication.",
    reasoning:
      "If required administrators depend on keys, disabling this can cause immediate lockout.",
  },
  {
    setting: "PermitRootLogin",
    meaning:
      "Controls whether and how the root account may authenticate directly over SSH.",
    reasoning:
      "Review scenario requirements and sudo-based administration. Do not treat one value as universally correct.",
  },
  {
    setting: "AllowUsers / AllowGroups",
    meaning:
      "Can explicitly restrict which users or groups may authenticate through SSH.",
    reasoning:
      "Useful for narrowing access, but a mistake can exclude the required administrator.",
  },
  {
    setting: "DenyUsers / DenyGroups",
    meaning:
      "Can explicitly block selected users or groups.",
    reasoning:
      "Check interactions with allow rules and Match blocks before editing.",
  },
  {
    setting: "MaxAuthTries",
    meaning:
      "Limits authentication attempts per connection.",
    reasoning:
      "May reduce brute-force opportunity but should be set according to scenario and operational needs.",
  },
];

const accessLayers = [
  {
    layer: "Account",
    question:
      "Does the authorized user exist, and is the account state appropriate?",
    evidence:
      "getent passwd, id, passwd/chage review",
  },
  {
    layer: "Shell",
    question:
      "Does the user have a login shell compatible with required SSH access?",
    evidence:
      "/etc/passwd record",
  },
  {
    layer: "SSHD policy",
    question:
      "Does effective sshd configuration permit the required authentication method and user?",
    evidence:
      "sshd -T, Match blocks, allow/deny rules",
  },
  {
    layer: "User keys",
    question:
      "If key authentication is required, is the correct authorized key present with safe ownership and permissions?",
    evidence:
      "~/.ssh/authorized_keys, ls -la, key fingerprints if needed",
  },
  {
    layer: "Service",
    question:
      "Is the SSH service running and healthy?",
    evidence:
      "systemctl status ssh, journalctl -u ssh",
  },
  {
    layer: "Network",
    question:
      "Is sshd listening on the expected address and port?",
    evidence:
      "ss -tulpn, sshd -T",
  },
  {
    layer: "Firewall",
    question:
      "Does UFW allow the required source and port while limiting unnecessary exposure?",
    evidence:
      "ufw status verbose",
  },
  {
    layer: "Client test",
    question:
      "Can the authorized administrator actually connect using the scenario-required method?",
    evidence:
      "Controlled client-side SSH test",
  },
];

const reasoningCases = [
  {
    finding: "SSH is running on the image",
    weak:
      "Disable SSH because remote access increases attack surface.",
    better:
      "Read the scenario first. If SSH is required, secure authentication and firewall exposure while preserving authorized administration.",
  },
  {
    finding: "PasswordAuthentication is enabled",
    weak:
      "Turn it off immediately.",
    better:
      "Verify whether the required administrator has tested key-based access and whether the scenario permits disabling passwords before changing the setting.",
  },
  {
    finding: "Root SSH login is possible",
    weak:
      "Delete or lock the root account.",
    better:
      "Review PermitRootLogin, sudo requirements, root account state, and scenario policy. Correct the remote-access policy rather than damaging the system account.",
  },
  {
    finding: "An unknown public key exists in authorized_keys",
    weak:
      "Delete the whole authorized_keys file.",
    better:
      "Preserve the key, comment, file metadata, ownership, timestamps, logs, and user context; remove only the confirmed unauthorized key if justified.",
  },
  {
    finding: "UFW allows SSH from anywhere",
    weak:
      "Delete the SSH firewall rule.",
    better:
      "If remote administration is required, narrow the rule to the required network or source when the scenario supports that restriction.",
  },
  {
    finding: "SSH uses a non-default port",
    weak:
      "Change it back to 22.",
    better:
      "Determine whether the scenario or environment intentionally uses the alternate port. Security depends on access control and exposure, not port familiarity.",
  },
];

const keySecurity = [
  {
    title: "Authorized keys belong to a user",
    text:
      "Each user's authorized_keys file controls keys permitted for that account. Review account authorization before reviewing the key list.",
  },
  {
    title: "Ownership matters",
    text:
      "The .ssh directory and files should be owned by the intended user unless the environment deliberately uses another managed arrangement.",
  },
  {
    title: "Permissions matter",
    text:
      "OpenSSH may reject unsafe file or directory permissions. Tightening permissions can improve security, but verify the user's login afterward.",
  },
  {
    title: "Private keys are different",
    text:
      "Private keys authenticate clients and should not be broadly readable. Do not expose private key material in notes, screenshots, or examples.",
  },
  {
    title: "Comments are not proof",
    text:
      "A key comment such as an email address or device name is descriptive metadata, not proof of ownership.",
  },
  {
    title: "Fingerprinting helps comparison",
    text:
      "When authorized and needed, key fingerprints can help compare keys without copying full key material.",
  },
];

const controlledChanges = [
  {
    goal: "Validate SSH configuration",
    command: "sudo sshd -t",
    caution:
      "Run before restart or reload after configuration edits.",
  },
  {
    goal: "Reload validated SSH configuration",
    command: "sudo systemctl reload ssh",
    caution:
      "Use only after syntax validation. Keep the current administrative session open until a second connection test succeeds when practical.",
  },
  {
    goal: "Restart SSH service",
    command: "sudo systemctl restart ssh",
    caution:
      "A restart can interrupt or fail required access. Prefer reload when supported and sufficient.",
  },
  {
    goal: "Allow SSH through UFW",
    command: "sudo ufw allow OpenSSH",
    caution:
      "Only use when SSH is required and the rule scope matches scenario needs. Narrow source ranges when appropriate.",
  },
  {
    goal: "Allow SSH from a specific network",
    command: "sudo ufw allow from 192.0.2.0/24 to any port 22 proto tcp",
    caution:
      "Use documentation/example networks in training. In a real authorized environment, substitute only the scenario-approved source range and actual SSH port.",
  },
  {
    goal: "Remove one unauthorized key",
    command: "sudoedit /home/username/.ssh/authorized_keys",
    caution:
      "Preserve the original file and remove only the confirmed unauthorized entry. Do not delete all keys blindly.",
  },
];

const loggingEvidence = [
  {
    source: "SSH service journal",
    command: "sudo journalctl -u ssh --since today",
    value:
      "Service startup, configuration errors, and connection-related events where logged.",
  },
  {
    source: "Authentication journal",
    command: "sudo journalctl --since today | grep -iE 'sshd|authentication|failed|accepted'",
    value:
      "Broad authentication clues when messages are present in the journal.",
  },
  {
    source: "Traditional auth log",
    command: "sudo less /var/log/auth.log",
    value:
      "Authentication and sudo events on systems where this log is present.",
  },
  {
    source: "Last login records",
    command: "last",
    value:
      "Recorded login sessions from wtmp where retained.",
  },
  {
    source: "Last-login indicator",
    command: "lastlog",
    value:
      "Per-user last-login record where available. Use as supporting evidence, not complete proof.",
  },
  {
    source: "Current sessions",
    command: "who",
    value:
      "Shows currently logged-in users and session information.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Disable SSH before reading the scenario",
    risk:
      "Can remove a required administration path and make later work harder.",
  },
  {
    shortcut: "Turn off password authentication before testing keys",
    risk:
      "Can lock out the required administrator if key-based login is not actually working.",
  },
  {
    shortcut: "Delete every authorized key",
    risk:
      "Can remove legitimate administrator access and destroy useful forensic evidence.",
  },
  {
    shortcut: "Edit sshd_config and restart without sshd -t",
    risk:
      "A syntax error can prevent the service from loading correctly.",
  },
  {
    shortcut: "Open SSH to everyone in the firewall for convenience",
    risk:
      "Expands network exposure beyond the intended management scope.",
  },
  {
    shortcut: "Close the working SSH session before verification",
    risk:
      "If the new configuration blocks access, the team may lose the easiest recovery path.",
  },
];

const verification = [
  {
    area: "Syntax",
    check:
      "Run sshd -t and confirm the configuration validates.",
  },
  {
    area: "Effective policy",
    check:
      "Run sshd -T and confirm authentication, root-login, port, and allow/deny behavior match the intended state.",
  },
  {
    area: "Service",
    check:
      "Confirm systemctl status ssh shows a healthy service after reload or restart.",
  },
  {
    area: "Listening socket",
    check:
      "Use ss -tulpn to confirm sshd listens on the expected address and port.",
  },
  {
    area: "Firewall",
    check:
      "Confirm UFW allows the required management path without unnecessary broad exposure.",
  },
  {
    area: "Authorized user",
    check:
      "Test a new SSH connection from the authorized client perspective before ending the working administrative session.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan is the only authorized administrator and must manage the Linux host over SSH from the training network; Avery and Riley are standard users and do not need remote shell access.",
  },
  {
    step: "02",
    task:
      "Inspect service state, effective sshd settings, listening sockets, UFW rules, and Morgan's account state without changing anything.",
  },
  {
    step: "03",
    task:
      "Review Morgan's authorized_keys file and preserve the original metadata and contents before any key-related change.",
  },
  {
    step: "04",
    task:
      "Identify a fictional unknown key in Avery's authorized_keys file as Investigate rather than deleting the entire SSH directory.",
  },
  {
    step: "05",
    task:
      "If the scenario requires Morgan-only SSH access, use effective allow/deny policy and firewall scope to reduce access while preserving Morgan's tested login path.",
  },
  {
    step: "06",
    task:
      "Validate sshd configuration before reload and keep the existing administrative session open while testing a new connection.",
  },
  {
    step: "07",
    task:
      "Verify Morgan can still connect, Avery and Riley cannot use unauthorized SSH access, UFW remains active, logs are preserved, and the SSH service is healthy.",
  },
];

const checklist = [
  "I understand the difference between the SSH client and SSH server.",
  "I inspect effective SSH configuration with sshd -T rather than reading only one file.",
  "I validate syntax with sshd -t before reload or restart.",
  "I know password locking does not necessarily disable key-based SSH access.",
  "I review user authorized_keys files and preserve evidence before removing keys.",
  "I do not disable password authentication until a required alternate method is verified.",
  "I coordinate SSH configuration with UFW and network exposure.",
  "I keep required remote administration available while reducing unnecessary access.",
  "I preserve authentication logs and session evidence before cleanup.",
  "I test a new authorized SSH connection before closing the working session when practical.",
];

const reflection = [
  "Why is sshd -T more useful than reading only /etc/ssh/sshd_config?",
  "Why can disabling password authentication lock out an authorized administrator?",
  "Why should an unknown authorized key be preserved before removal?",
  "How do SSH policy and UFW work together to control remote access?",
  "Why is changing the SSH port not a complete security strategy?",
  "What should you verify before closing the current administrative session after SSH changes?",
];

export default function LinuxSshRemoteAccessSecurityPage() {
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
              href="/cyberpatriot/linux/processes-resource-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ufw-firewall-network-exposure"
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
                Linux · Lesson 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                SSH & Remote Access Security
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Secure Linux remote administration by reviewing SSH service
                state, effective configuration, users, keys, authentication
                methods, listening exposure, firewall rules, and logs before
                changing access.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                SSH is often both a security boundary and a required management
                path. The goal is to preserve authorized administration while
                reducing unnecessary users, authentication methods, and network
                exposure.
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
                  <span>Access layers</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Secure required remote access</span>
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
            Secure SSH without locking out the required administrator
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
              Required remote access should be narrowed, not destroyed
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If the scenario requires SSH, the job is to permit the correct
              administrator, use appropriate authentication, expose only the
              necessary network path, and preserve evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Lockout risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Authentication and firewall changes can remove your own access
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Validate configuration first, keep the current session open when
              practical, and test a second authorized connection before ending
              the known-good administrative path.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            SSH fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind remote administration
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
            Important SSH paths
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Server policy and user authorization live in different places
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
            Build the SSH access picture before changing it
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

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Effective configuration matters
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              SSH can use includes and conditional Match blocks. Use
              <code className="mx-1 rounded bg-slate-950 px-2 py-1 text-cyan-200">
                sshd -T
              </code>
              to understand the effective server policy rather than assuming one
              configuration file tells the whole story.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Effective SSH settings
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Important controls need scenario context
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {effectiveSettings.map((item) => (
              <div
                key={item.setting}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.setting}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Defensive reasoning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
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
            Access path
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace SSH from account to client
          </h2>

          <div className="mt-8 grid gap-4">
            {accessLayers.map((item, index) => (
              <div
                key={item.layer}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.4fr_1.2fr_1fr]"
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
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.evidence}
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
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Replace one-size-fits-all SSH hardening with scenario reasoning
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Public-key access
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keys are authorization data and forensic evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {keySecurity.map((item) => (
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

          <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
            <p className="text-sm font-black text-red-100">
              Never expose private keys
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Public keys are designed to be shared for authorization. Private
              keys are secret authentication material and should not be copied
              into course notes, screenshots, or public examples.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled changes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve a known-good management path
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
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              SSH evidence
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve authentication context before cleanup
            </h2>

            <div className="mt-6 grid gap-3">
              {loggingEvidence.map((item) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Prove policy, service, network, and client access
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
                Test a new session
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                An existing session can remain alive even when new logins are
                broken. Test a separate authorized connection before declaring
                the SSH change successful.
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
            SSH changes that can lock out the team
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
            Secure a fictional required SSH service
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
                Secure remote administration combines identity, authentication,
                service configuration, keys, listening exposure, firewall
                policy, logs, and client verification. Harden the complete path,
                not just one SSH setting.
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
              href="/cyberpatriot/linux/processes-resource-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/ufw-firewall-network-exposure"
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
