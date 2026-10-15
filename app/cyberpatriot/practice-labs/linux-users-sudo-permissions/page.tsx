import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Ubuntu/Mint workstation belongs to a school robotics team and must remain usable for normal development and collaboration.",
  "Approved users are alex, priya, and the system root account.",
  "alex is the primary student user and should not have unrestricted sudo access.",
  "priya is the team mentor and may use sudo for approved administrative tasks.",
  "SSH is not required on this workstation unless the scenario explicitly says otherwise.",
  "The browser, development tools, and approved robotics software must continue to work.",
  "Do not remove packages, change ownership, or alter permissions until you understand what the file, directory, or service is for.",
  "Preserve account, sudo, permission, and package evidence before making changes.",
];

const identityChecks = [
  {
    title: "Review local users",
    commands: [
      "cut -d: -f1 /etc/passwd",
      "getent passwd",
      "awk -F: '$3 >= 1000 {print $1, $3, $7}' /etc/passwd",
    ],
    purpose:
      "Identify interactive user accounts and distinguish them from service or system accounts.",
  },
  {
    title: "Review groups",
    commands: [
      "getent group",
      "groups alex",
      "groups priya",
      "id alex",
      "id priya",
    ],
    purpose:
      "Understand group membership, effective IDs, and whether users belong to privileged groups.",
  },
  {
    title: "Review login shells",
    commands: [
      "grep -vE '/(nologin|false)$' /etc/passwd",
    ],
    purpose:
      "Find accounts with interactive shells without assuming every interactive account is unauthorized.",
  },
  {
    title: "Review current identity",
    commands: [
      "whoami",
      "id",
      "who",
      "w",
    ],
    purpose:
      "Understand the current session and any other logged-in users before making changes.",
  },
];

const sudoChecks = [
  {
    title: "Members of sudo group",
    commands: [
      "getent group sudo",
      "getent group wheel 2>/dev/null",
    ],
    purpose:
      "Identify users who may receive administrative capability through a privileged group.",
  },
  {
    title: "Effective sudo privileges",
    commands: [
      "sudo -l",
      "sudo -l -U alex",
      "sudo -l -U priya",
    ],
    purpose:
      "Review what commands each user is actually allowed to run.",
  },
  {
    title: "Main sudoers configuration",
    commands: [
      "sudo cat /etc/sudoers",
      "sudo ls -la /etc/sudoers.d",
    ],
    purpose:
      "Inspect the primary sudo policy and included drop-in files.",
  },
  {
    title: "Search sudo rules",
    commands: [
      "sudo grep -R \"^[^#].*ALL\" /etc/sudoers /etc/sudoers.d 2>/dev/null",
    ],
    purpose:
      "Locate active sudo rules that may grant broad or passwordless access.",
  },
];

const permissionChecks = [
  {
    title: "Inspect ownership and mode bits",
    commands: [
      "ls -l /home",
      "ls -ld /home/alex /home/priya",
      "stat /home/alex",
    ],
    purpose:
      "Review ownership, group, and permission bits before changing access.",
  },
  {
    title: "Check sensitive files",
    commands: [
      "ls -l /etc/passwd /etc/shadow /etc/group /etc/sudoers",
      "stat /etc/passwd /etc/shadow /etc/sudoers",
    ],
    purpose:
      "Verify that critical identity and privilege files are not broadly writable or exposed.",
  },
  {
    title: "Search world-writable files",
    commands: [
      "find /etc /usr/local /opt -xdev -type f -perm -0002 2>/dev/null",
    ],
    purpose:
      "Find potentially risky files while limiting the search to relevant local paths.",
  },
  {
    title: "Review ACLs",
    commands: [
      "getfacl /home/alex 2>/dev/null",
      "getfacl /opt/robotics 2>/dev/null",
    ],
    purpose:
      "Check whether access control lists grant permissions that are not obvious from standard mode bits.",
  },
];

const packageChecks = [
  {
    title: "Installed package inventory",
    commands: [
      "dpkg -l | less",
      "apt list --installed 2>/dev/null",
    ],
    purpose:
      "Review installed software before removing anything.",
  },
  {
    title: "Package ownership",
    commands: [
      "dpkg -S /usr/bin/python3",
      "dpkg -S /usr/bin/ssh 2>/dev/null",
    ],
    purpose:
      "Identify which package provided a file or executable.",
  },
  {
    title: "Package metadata",
    commands: [
      "apt-cache policy openssh-server",
      "apt-cache policy sudo",
    ],
    purpose:
      "Review installed and candidate package versions and confirm whether a package is present.",
  },
  {
    title: "Recent package activity",
    commands: [
      "grep -E \" install | upgrade | remove \" /var/log/dpkg.log | tail -n 40",
    ],
    purpose:
      "Correlate recent package changes with the investigation timeline.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Users",
    observation:
      "alex, priya, backupuser, root, and several service accounts are present. backupuser has /bin/bash as its shell.",
    prompt:
      "Which account is not named in the mission briefing, and what should you check before disabling it?",
  },
  {
    id: "E02",
    source: "Sudo group",
    observation:
      "priya and alex are both members of the sudo group.",
    prompt:
      "Which membership conflicts with the mission, and what evidence should confirm the safest change?",
  },
  {
    id: "E03",
    source: "sudoers.d",
    observation:
      "A file named 90-robotics contains: alex ALL=(ALL) NOPASSWD: ALL",
    prompt:
      "Why is this stronger evidence than sudo-group membership alone?",
  },
  {
    id: "E04",
    source: "Home permissions",
    observation:
      "/home/alex is owned by alex:alex and has mode 755.",
    prompt:
      "Is this automatically wrong, or does the expected privacy model need to be considered?",
  },
  {
    id: "E05",
    source: "Sensitive file",
    observation:
      "/etc/shadow is owned by root:shadow and has mode 640.",
    prompt:
      "Does this look broadly exposed? What would be a clearly risky alternative?",
  },
  {
    id: "E06",
    source: "World-writable search",
    observation:
      "/opt/robotics/config.ini is writable by everyone.",
    prompt:
      "What should you learn about this file before changing its permissions?",
  },
  {
    id: "E07",
    source: "ACL",
    observation:
      "/opt/robotics has an ACL entry granting backupuser rwx.",
    prompt:
      "Why could an ACL matter even if the normal ls -l output looks reasonable?",
  },
  {
    id: "E08",
    source: "Package history",
    observation:
      "openssh-server was installed three days ago, but SSH is not required by the mission.",
    prompt:
      "What service, listener, and usage evidence should you check before deciding whether to remove or disable anything?",
  },
];

const decisionModel = [
  {
    label: "Account",
    question:
      "Is the account approved, interactive, recently used, or referenced by a service or scheduled task?",
  },
  {
    label: "Privilege",
    question:
      "Does the user have sudo-group membership, explicit sudoers rules, or NOPASSWD access?",
  },
  {
    label: "Ownership",
    question:
      "Who owns the file or directory, and is that consistent with the application or system role?",
  },
  {
    label: "Permissions",
    question:
      "Are mode bits or ACLs broader than the mission requires?",
  },
  {
    label: "Package",
    question:
      "Is the package required, recently installed, or tied to a running service?",
  },
  {
    label: "Verification",
    question:
      "After remediation, can approved users still work while unjustified access is removed?",
  },
];

const preservationChecklist = [
  "Record /etc/passwd and relevant user details before disabling an account.",
  "Record group membership before removing a user from sudo or another privileged group.",
  "Copy or document relevant sudoers and sudoers.d entries before editing them.",
  "Record file owner, group, mode bits, and ACLs before changing permissions.",
  "Record the exact package name and version before removal.",
  "Check whether an account owns files, runs services, or appears in cron jobs before disabling it.",
  "Check whether a package provides a required service before removing it.",
  "Record the exact command used for remediation and the post-change result.",
];

const remediationExamples = [
  {
    title: "Remove unjustified sudo-group membership",
    command:
      "sudo deluser alex sudo",
    note:
      "Use only after confirming alex should remain a standard user and no approved workflow depends on sudo-group membership.",
  },
  {
    title: "Disable an unapproved local account",
    command:
      "sudo usermod -L backupuser",
    note:
      "Lock the account rather than deleting it when preserving files and rollback options is useful.",
  },
  {
    title: "Tighten a world-writable configuration file",
    command:
      "sudo chmod 640 /opt/robotics/config.ini",
    note:
      "Use only after confirming the correct owner/group and that the robotics application can still read the file.",
  },
  {
    title: "Remove a specific ACL entry",
    command:
      "sudo setfacl -x u:backupuser /opt/robotics",
    note:
      "Use only when the ACL grant is not required by the scenario.",
  },
];

const verificationChecks = [
  {
    area: "Users",
    commands: [
      "getent passwd",
      "id alex",
      "id priya",
    ],
    verify:
      "Approved users remain present and account state matches the mission.",
  },
  {
    area: "Sudo",
    commands: [
      "getent group sudo",
      "sudo -l -U alex",
      "sudo -l -U priya",
    ],
    verify:
      "Only the approved mentor retains the intended administrative capability.",
  },
  {
    area: "Permissions",
    commands: [
      "stat /opt/robotics/config.ini",
      "getfacl /opt/robotics 2>/dev/null",
    ],
    verify:
      "Ownership, mode bits, and ACLs reflect the intended access model.",
  },
  {
    area: "Critical files",
    commands: [
      "ls -l /etc/passwd /etc/shadow /etc/sudoers",
    ],
    verify:
      "Sensitive system files remain protected and unchanged unless a justified repair was required.",
  },
  {
    area: "Packages",
    commands: [
      "apt-cache policy openssh-server",
      "systemctl status ssh --no-pager 2>/dev/null",
    ],
    verify:
      "Any package or service change matches the mission and does not remove required functionality.",
  },
  {
    area: "Core usability",
    commands: [
      "id alex",
      "test -r /opt/robotics/config.ini && echo readable",
    ],
    verify:
      "The primary user can still access approved robotics resources after remediation.",
  },
];

const reflectionQuestions = [
  "Why is membership in sudo different from an explicit NOPASSWD sudoers rule?",
  "Why should an unfamiliar interactive account not be deleted immediately?",
  "Why can ACLs change the real access model even when standard permission bits look acceptable?",
  "What is the risk of changing a file from world-writable to a restrictive mode without checking the owning application?",
  "Why should package history be correlated with service and network evidence?",
  "Why is locking an account sometimes safer than deleting it during an investigation?",
  "What is the difference between file ownership and file permissions?",
  "Which finding in this lab required the most context before a safe decision could be made?",
];

const completionChecklist = [
  "I reviewed local interactive users and group membership.",
  "I checked sudo-group membership and effective sudo rules.",
  "I inspected sudoers and sudoers.d before changing privilege.",
  "I recorded ownership, mode bits, and ACLs before changing file access.",
  "I reviewed sensitive system-file permissions.",
  "I checked package ownership and recent package history.",
  "I correlated openssh-server with actual service and listener state before deciding on remediation.",
  "I made only narrow, mission-supported changes.",
  "I verified approved users and robotics software still functioned after remediation.",
  "I can explain the difference between direct observation and inference for every major finding.",
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

export default function LinuxUsersSudoPermissionsLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/windows-server-identity-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/linux-services-logs-scheduled-activity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 05 &middot; Ubuntu / Mint
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux Users, Sudo &amp; Permissions
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review local users, privileged groups, sudo policy, file
                ownership, mode bits, ACLs, and installed packages while
                preserving the robotics tools the fictional team depends on.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The lab emphasizes least privilege without broad cleanup.
                Linux permissions can look simple until groups, ACLs, sudoers
                rules, and application ownership are considered together.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Foundation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Ubuntu / Mint</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Least privilege</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Evidence</span>
                  <span className="font-bold text-white">Users + Sudo + ACLs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve the robotics workstation while reducing unnecessary access
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Permission rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Access is the combination of identity, group, sudo, mode bits, and ACLs
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Never judge a Linux permission problem from one command alone.
            Ownership, groups, sudoers rules, and ACLs can all change the actual
            access a user receives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Identity review"
            title="Understand users before changing them"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {identityChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>

                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Sudo review"
            title="Measure real privilege, not just group membership"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sudoChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>

                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Permission review"
            title="Inspect ownership, mode bits, and ACLs"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {permissionChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>

                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Package review"
            title="Understand software before removing it"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {packageChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>

                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
{command}
                    </pre>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Fictional evidence set"
            title="Classify the access problems"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.observation}
                </p>

                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Investigation prompt
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.prompt}
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
            label="Decision model"
            title="Connect the permission layers"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {decisionModel.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Permission changes can break applications or erase evidence
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Authorized remediation examples"
            title="Make the smallest justified Linux change"
            description="These examples are for an authorized practice VM after the mission and evidence clearly support the action."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {remediationExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.note}
                </p>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification"
            title="Confirm least privilege without breaking the robotics tools"
          />

          <div className="mt-8 grid gap-5">
            {verificationChecks.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.verify}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {item.commands.map((command) => (
                      <pre
                        key={command}
                        className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                      >
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reflection"
            title="Debrief the permission decisions"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish only when approved work still functions
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
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
              href="/cyberpatriot/practice-labs/windows-server-identity-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/linux-services-logs-scheduled-activity"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
