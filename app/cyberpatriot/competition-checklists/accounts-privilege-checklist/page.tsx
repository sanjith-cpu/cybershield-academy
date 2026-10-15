import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openingChecks = [
  {
    item: "Read the approved-user and approved-administrator requirements before changing account state.",
    why:
      "An unfamiliar account is not automatically unauthorized, and a required service account may not look like a normal user.",
  },
  {
    item: "Record every privileged group before removing anyone.",
    why:
      "Local Administrators, Domain Admins, sudo, adm, wheel, and other privileged groups may contain legitimate operators.",
  },
  {
    item: "Separate account existence from account privilege.",
    why:
      "A user may be allowed to exist but not allowed to hold administrative rights.",
  },
  {
    item: "Check recent account and group changes before cleanup.",
    why:
      "Creation, enablement, disablement, password changes, and privilege changes can provide important evidence.",
  },
  {
    item: "Identify service and automation accounts.",
    why:
      "Disabling a service identity can break required applications, scheduled tasks, or server roles.",
  },
  {
    item: "Plan verification before making the change.",
    why:
      "Know how you will confirm that approved access still works after privilege or account remediation.",
  },
];

const windowsChecks = [
  {
    title: "Local users",
    commands: [
      "Get-LocalUser",
      "net user",
    ],
    verify:
      "Every local user is classified as approved, unauthorized, disabled, built-in, service-related, or unresolved.",
  },
  {
    title: "Local Administrators",
    commands: [
      "Get-LocalGroupMember Administrators",
      "net localgroup Administrators",
    ],
    verify:
      "Only approved users and required service identities retain administrative membership.",
  },
  {
    title: "Remote Desktop Users",
    commands: [
      'Get-LocalGroupMember "Remote Desktop Users"',
    ],
    verify:
      "Only approved users retain remote interactive access when RDP is required.",
  },
  {
    title: "Other sensitive groups",
    commands: [
      "Get-LocalGroup",
      "Get-LocalGroupMember <GroupName>",
    ],
    verify:
      "Backup Operators, Hyper-V Administrators, Remote Management Users, and other sensitive groups are reviewed when present.",
  },
];

const domainChecks = [
  {
    title: "Domain users",
    commands: [
      "Get-ADUser -Filter * | Select-Object SamAccountName,Enabled",
    ],
    verify:
      "Use only on systems where Active Directory tools are available. Compare identities with the mission roster.",
  },
  {
    title: "Domain Admins",
    commands: [
      'Get-ADGroupMember "Domain Admins"',
    ],
    verify:
      "Only explicitly approved domain administrators retain membership.",
  },
  {
    title: "Other privileged domain groups",
    commands: [
      'Get-ADGroupMember "Enterprise Admins"',
      'Get-ADGroupMember "Administrators"',
    ],
    verify:
      "Review privileged groups that exist in the environment and avoid assuming every domain uses the same structure.",
  },
  {
    title: "Inactive or disabled identities",
    commands: [
      "Search-ADAccount -AccountDisabled -UsersOnly",
      "Search-ADAccount -AccountInactive -UsersOnly -TimeSpan 30.00:00:00",
    ],
    verify:
      "Inactive or disabled accounts are investigated in context before deletion or reactivation.",
  },
];

const linuxChecks = [
  {
    title: "Users",
    commands: [
      "getent passwd",
      "cut -d: -f1,3,4,7 /etc/passwd",
    ],
    verify:
      "Interactive users are compared with the approved roster before changes.",
  },
  {
    title: "sudo group",
    commands: [
      "getent group sudo",
      "getent group wheel",
    ],
    verify:
      "Only approved users retain membership in the platform's administrative group.",
  },
  {
    title: "Effective sudo rights",
    commands: [
      "sudo -l -U <username>",
    ],
    verify:
      "Review what the account can actually execute instead of relying only on group membership.",
  },
  {
    title: "sudoers rules",
    commands: [
      "sudo visudo -c",
      "sudo grep -RInE 'NOPASSWD|ALL=\\(ALL' /etc/sudoers /etc/sudoers.d 2>/dev/null",
    ],
    verify:
      "Unexpected broad or passwordless privilege is investigated and justified before modification.",
  },
];

const accountStateChecks = [
  {
    title: "Enabled / disabled",
    explanation:
      "An unauthorized account may need to be disabled rather than deleted if evidence or rollback matters.",
  },
  {
    title: "Password state",
    explanation:
      "Confirm whether the account has a usable password, locked password, expired password, or another authentication mechanism.",
  },
  {
    title: "Interactive shell",
    explanation:
      "On Linux, a service account may exist legitimately but use a noninteractive shell.",
  },
  {
    title: "Last logon",
    explanation:
      "Recent activity can help determine whether an account is active, stale, or suspicious.",
  },
  {
    title: "Group memberships",
    explanation:
      "Privilege can come from nested or secondary group membership, not only a direct administrator flag.",
  },
  {
    title: "Service dependency",
    explanation:
      "An account may be required by a service, scheduled task, application pool, backup job, or automation.",
  },
];

const eventChecks = [
  {
    event: "4624",
    meaning: "Successful logon",
    use:
      "Correlate approved or suspicious sessions with later privilege or configuration changes.",
  },
  {
    event: "4625",
    meaning: "Failed logon",
    use:
      "Review repeated failures, unusual usernames, and unexpected source systems.",
  },
  {
    event: "4672",
    meaning: "Special privileges assigned",
    use:
      "Identify privileged sessions that deserve deeper review.",
  },
  {
    event: "4720",
    meaning: "User account created",
    use:
      "Investigate newly created accounts against the approved roster.",
  },
  {
    event: "4722",
    meaning: "User account enabled",
    use:
      "Review unexpected enablement of previously disabled accounts.",
  },
  {
    event: "4725",
    meaning: "User account disabled",
    use:
      "Confirm whether account disablement was expected or suspicious.",
  },
  {
    event: "4728",
    meaning: "Member added to global security group",
    use:
      "Important when reviewing domain privilege changes.",
  },
  {
    event: "4732",
    meaning: "Member added to local security group",
    use:
      "Review additions to Administrators and other sensitive local groups.",
  },
];

const decisionModel = [
  {
    status: "Approved + correct privilege",
    action:
      "Leave the account in place and document why it is expected.",
  },
  {
    status: "Approved + too much privilege",
    action:
      "Remove only the excess privilege, then verify the user can still perform required duties.",
  },
  {
    status: "Unauthorized + active",
    action:
      "Preserve evidence, confirm the roster, then disable or otherwise contain according to the mission.",
  },
  {
    status: "Unauthorized + privileged",
    action:
      "Treat as high priority. Preserve group and log evidence before removing privilege or disabling the account.",
  },
  {
    status: "Service account + required",
    action:
      "Do not disable it. Verify least privilege and required service functionality instead.",
  },
  {
    status: "Unknown",
    action:
      "Do not guess. Record the account, investigate dependencies, recent use, groups, and mission context before changing it.",
  },
];

const privilegeSources = [
  "Local Administrators membership",
  "Domain Admins or other privileged domain groups",
  "sudo or wheel membership",
  "sudoers rules",
  "Remote Desktop Users",
  "Remote Management Users",
  "service logon rights",
  "scheduled-task run-as identity",
  "service account credentials",
  "delegated file or share permissions",
  "application-specific administrative roles",
];

const highPriorityFindings = [
  {
    finding: "Unapproved local Administrator",
    firstMove:
      "Record current group membership, recent logons, and account-change events before removing privilege.",
  },
  {
    finding: "Unexpected Domain Admin",
    firstMove:
      "Preserve group-change and authentication evidence, confirm the mission roster, then remove membership only if unauthorized.",
  },
  {
    finding: "Linux user with broad NOPASSWD sudo",
    firstMove:
      "Record the exact sudoers rule, account purpose, and recent sudo activity before narrowing access.",
  },
  {
    finding: "New account followed by privileged logon",
    firstMove:
      "Correlate account creation, group changes, logon events, process activity, and timestamps before containment.",
  },
  {
    finding: "Service account using excessive privilege",
    firstMove:
      "Identify the dependent service, required rights, logon type, and current function before reducing privilege.",
  },
  {
    finding: "Approved user in wrong security group",
    firstMove:
      "Remove only the incorrect group membership and verify required access still works.",
  },
];

const doNotBlindlyChange = [
  "Do not delete an account just because the username is unfamiliar.",
  "Do not remove a built-in account without understanding its role.",
  "Do not disable a service account before identifying dependent services and tasks.",
  "Do not remove all administrators except yourself.",
  "Do not assume Remote Desktop Users and Administrators are equivalent.",
  "Do not trust only the account name; inspect group membership and effective rights.",
  "Do not use recursive or bulk privilege changes when one membership is the actual problem.",
  "Do not erase account-change evidence before documenting it.",
];

const verificationChecks = [
  {
    area: "Approved users",
    verify:
      "Every required user can still authenticate or perform the access the mission requires.",
  },
  {
    area: "Administrators",
    verify:
      "Only approved administrators retain local or domain administrative membership.",
  },
  {
    area: "Linux sudo",
    verify:
      "Approved users have only the sudo rights they actually need.",
  },
  {
    area: "Remote access",
    verify:
      "Only approved users retain remote-management access when the mission requires it.",
  },
  {
    area: "Service accounts",
    verify:
      "Required services and scheduled tasks still function under their intended identities.",
  },
  {
    area: "Logs",
    verify:
      "Important account, group, and privileged-logon evidence was preserved before remediation.",
  },
  {
    area: "Dependencies",
    verify:
      "No application, share, scheduled task, or service broke because an identity was changed.",
  },
  {
    area: "Documentation",
    verify:
      "The change log records who was changed, why, what evidence supported it, and how the result was verified.",
  },
];

const finalChecklist = [
  "The approved-user roster was reviewed before account changes.",
  "The approved-administrator roster was reviewed before privilege changes.",
  "Local Administrators membership matches the mission.",
  "Domain privileged groups were reviewed when Active Directory is present.",
  "Linux sudo or wheel membership matches the mission.",
  "Effective sudo rights were reviewed, not just group membership.",
  "Remote Desktop and remote-management groups were reviewed where relevant.",
  "Service and automation accounts were identified before disablement.",
  "Account creation and group-change evidence was checked when relevant.",
  "Unauthorized privilege was removed with the narrowest justified change.",
  "Approved users still have required access.",
  "Required services still function after account changes.",
  "Unresolved identities are documented instead of guessed.",
  "The change log records all high-impact account and privilege remediation.",
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

function CommandSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: {
    title: string;
    commands: string[];
    verify: string;
  }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
        <SectionHeading label={label} title={title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>

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

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.verify}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AccountsPrivilegeChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/forensics-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/services-remote-access-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Checklist &middot; 07 &middot; Identity
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Accounts &amp; Privilege Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Compare users, administrators, domain groups, sudo rights,
                remote-access groups, and service identities against the
                mission before removing accounts or changing privilege.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The safest competition workflow is to classify each identity,
                preserve evidence for suspicious changes, remove only excess
                privilege, and verify required access afterward.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First compare</span>
                  <span className="font-bold text-white">Mission roster</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Highest risk</span>
                  <span className="font-bold text-white">Unauthorized privilege</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Protect</span>
                  <span className="font-bold text-white">Service identities</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Access verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Identity rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Account existence and privilege are separate decisions
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            A user can be approved to exist but still have too much privilege.
            Fix the specific problem instead of deleting an account when only a
            group membership or sudo rule is wrong.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Opening pass"
            title="Classify identities before changing them"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {openingChecks.map((item, index) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex gap-4">
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.item}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommandSection
        label="Windows local identity"
        title="Review local users and sensitive groups"
        items={windowsChecks}
      />

      <CommandSection
        label="Active Directory"
        title="Review domain identities when the environment uses AD"
        items={domainChecks}
      />

      <CommandSection
        label="Linux identity"
        title="Review users, sudo, and effective privilege"
        items={linuxChecks}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Account state"
            title="Do not reduce an identity to only enabled or disabled"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {accountStateChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Privilege sources"
            title="Administrative access can come from more than one place"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {privilegeSources.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows event quick reference"
            title="Use logs to explain identity and privilege changes"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventChecks.map((item) => (
              <div
                key={item.event}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">{item.event}</p>
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision model
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Match the response to the actual identity problem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {decisionModel.map((item) => (
              <div
                key={item.status}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.status}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-priority findings
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Unauthorized privilege deserves immediate attention
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highPriorityFindings.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="font-black text-white">{item.finding}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.firstMove}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Do not blindly change
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Common account-cleanup mistakes
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doNotBlindlyChange.map((item, index) => (
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
            label="Verification sweep"
            title="Prove approved access still works after remediation"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecks.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Accounts &amp; Privilege final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Finish with least privilege and preserved functionality
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
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
              href="/cyberpatriot/competition-checklists"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Checklists
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
              href="/cyberpatriot/competition-checklists/forensics-checklist"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Checklist
            </Link>

            <Link
              href="/cyberpatriot/competition-checklists/services-remote-access-checklist"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
