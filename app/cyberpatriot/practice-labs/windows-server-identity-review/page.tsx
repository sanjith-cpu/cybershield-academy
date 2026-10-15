import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Windows Server system supports a small school district office and may be joined to a domain.",
  "Approved privileged identities are the built-in Administrator account, Domain Admins, and the fictional support account DistrictOps.",
  "Ordinary staff accounts should not have local or domain administrative privileges unless the scenario explicitly requires them.",
  "Remote Desktop is permitted only for approved administrators and must not be broadly exposed to ordinary users.",
  "The server must preserve authentication, file access, and required administrative functionality during remediation.",
  "Microsoft Defender and Windows Firewall must remain enabled.",
  "Do not delete accounts, reset passwords, or remove group membership until you understand whether the identity is required.",
  "Identity evidence should be correlated across users, groups, logons, group changes, remote access, and recent administrative activity.",
];

const contextChecks = [
  {
    title: "Determine domain context",
    commands: [
      "whoami /fqdn",
      "whoami /user",
      "whoami /groups",
      "Get-ComputerInfo | Select CsName,CsDomain,CsPartOfDomain,WindowsProductName",
      "nltest /dsgetdc:$env:USERDNSDOMAIN",
    ],
    purpose:
      "Establish whether the server is domain-joined, which identity context is active, and whether a domain controller is reachable.",
  },
  {
    title: "Inspect local users",
    commands: [
      "Get-LocalUser",
      "net user",
    ],
    purpose:
      "List local accounts and compare them with the mission-approved identities.",
  },
  {
    title: "Inspect local groups",
    commands: [
      "Get-LocalGroup",
      'Get-LocalGroupMember -Group "Administrators"',
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
    ],
    purpose:
      "Review local privilege and remote-access membership.",
  },
  {
    title: "Review effective privileges",
    commands: [
      "whoami /priv",
      "whoami /groups",
    ],
    purpose:
      "Understand the privileges and security groups attached to the current session.",
  },
];

const domainChecks = [
  {
    title: "Domain users",
    commands: [
      "Get-ADUser -Filter * -Properties Enabled,LastLogonDate,PasswordLastSet",
    ],
    purpose:
      "Review domain identities, enabled state, recent activity, and password metadata when the ActiveDirectory module is available.",
  },
  {
    title: "Privileged domain groups",
    commands: [
      'Get-ADGroupMember "Domain Admins"',
      'Get-ADGroupMember "Enterprise Admins" -ErrorAction SilentlyContinue',
      'Get-ADGroupMember "Administrators" -ErrorAction SilentlyContinue',
    ],
    purpose:
      "Identify members of highly privileged groups and compare them with the mission briefing.",
  },
  {
    title: "Inspect one account",
    commands: [
      'Get-ADUser "DistrictOps" -Properties * | Select SamAccountName,Enabled,LastLogonDate,PasswordLastSet,MemberOf',
    ],
    purpose:
      "Practice reviewing one approved administrative identity in detail.",
  },
  {
    title: "Search stale or inactive accounts",
    commands: [
      "Search-ADAccount -AccountInactive -TimeSpan 30.00:00:00 -UsersOnly",
      "Search-ADAccount -AccountDisabled -UsersOnly",
    ],
    purpose:
      "Identify accounts that deserve review without assuming inactivity alone justifies deletion.",
  },
];

const eventChecks = [
  {
    title: "Successful logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624} -MaxEvents 40',
    use:
      "Review successful authentication activity, logon type, account name, source information, and timing.",
  },
  {
    title: "Failed logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4625} -MaxEvents 40',
    use:
      "Look for repeated failures, unexpected accounts, or suspicious source patterns that need context.",
  },
  {
    title: "Special privileges assigned",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4672} -MaxEvents 40',
    use:
      "Identify logons that received special administrative privileges.",
  },
  {
    title: "User created",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4720} -MaxEvents 40',
    use:
      "Review account creation events and correlate who created the account and when.",
  },
  {
    title: "User enabled",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4722} -MaxEvents 40',
    use:
      "Check when disabled identities were re-enabled and by whom.",
  },
  {
    title: "User disabled",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4725} -MaxEvents 40',
    use:
      "Review account disablement events before assuming an account should remain disabled.",
  },
  {
    title: "Local group membership added",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4732} -MaxEvents 40',
    use:
      "Review additions to local security groups such as Administrators or Remote Desktop Users.",
  },
  {
    title: "Domain global group membership added",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4728} -MaxEvents 40',
    use:
      "Review additions to domain global groups when relevant auditing is available.",
  },
];

const rdpChecks = [
  {
    title: "Remote Desktop service",
    commands: [
      'Get-Service -Name "TermService"',
      "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
    ],
    purpose:
      "Confirm whether the service is running and whether the server is listening on the default RDP port.",
  },
  {
    title: "Remote Desktop firewall rules",
    commands: [
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select DisplayName,Enabled,Profile,Direction,Action',
    ],
    purpose:
      "Check whether RDP is permitted through the firewall and on which profiles.",
  },
  {
    title: "Remote Desktop users",
    commands: [
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
    ],
    purpose:
      "Identify which local or domain identities are granted remote sign-in access.",
  },
  {
    title: "Recent RDP-related sessions",
    commands: [
      "quser",
      "qwinsta",
    ],
    purpose:
      "Review current or recent interactive sessions before changing remote-access configuration.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Local Administrators",
    observation:
      "Administrator, DISTRICT\\Domain Admins, DISTRICT\\DistrictOps, and DISTRICT\\Avery are members of the local Administrators group.",
    prompt:
      "Which memberships are explicitly approved, and which one conflicts with the mission unless additional evidence supports it?",
  },
  {
    id: "E02",
    source: "Domain Admins",
    observation:
      "The Domain Admins group contains Administrator, DistrictOps, and a user named LabTemp.",
    prompt:
      "Which account needs immediate review, and what evidence would you collect before removing membership?",
  },
  {
    id: "E03",
    source: "Account creation",
    observation:
      "A 4720 event shows LabTemp was created two days ago by DistrictOps.",
    prompt:
      "What does this prove, and what still needs to be established about why the account exists?",
  },
  {
    id: "E04",
    source: "Privileged group change",
    observation:
      "A group-change event shows LabTemp was added to Domain Admins approximately ten minutes after creation.",
    prompt:
      "How does this change the risk priority of the account?",
  },
  {
    id: "E05",
    source: "Successful logon",
    observation:
      "A 4624 event shows Avery logged on interactively to the server late at night using an account that is not approved for administration.",
    prompt:
      "Why is the logon type and account privilege important before drawing a conclusion?",
  },
  {
    id: "E06",
    source: "Special privileges",
    observation:
      "A 4672 event appears immediately after Avery's logon.",
    prompt:
      "How does this evidence strengthen the conclusion that Avery had elevated rights during that session?",
  },
  {
    id: "E07",
    source: "Remote Desktop",
    observation:
      "TCP 3389 is listening, Remote Desktop firewall rules are enabled, and Avery is a member of Remote Desktop Users.",
    prompt:
      "Does the mission allow ordinary staff remote access, and what should be changed if the evidence confirms Avery does not need it?",
  },
  {
    id: "E08",
    source: "Failed logons",
    observation:
      "Multiple 4625 events reference a disabled account named FormerAdmin from several hours earlier.",
    prompt:
      "What should you verify before deleting the account or assuming the failed attempts are malicious?",
  },
];

const evidenceModel = [
  {
    layer: "Identity",
    question:
      "Does the account exist, is it enabled, and is it approved by the mission?",
  },
  {
    layer: "Privilege",
    question:
      "Which local or domain groups grant administrative or remote-access rights?",
  },
  {
    layer: "Authentication",
    question:
      "Has the account logged on successfully or failed repeatedly, and what logon type was used?",
  },
  {
    layer: "Administrative activity",
    question:
      "Was the account recently created, enabled, or added to a privileged group?",
  },
  {
    layer: "Remote access",
    question:
      "Can the account use RDP, and is that ability required by the server role?",
  },
  {
    layer: "Verification",
    question:
      "After remediation, do approved administrators still have access while unjustified privilege is removed?",
  },
];

const preservationChecklist = [
  "Record account name, SID, enabled state, and domain/local scope.",
  "Record current membership in Administrators, Domain Admins, and Remote Desktop Users.",
  "Record relevant event IDs, timestamps, subject account, target account, and source information.",
  "Record the current RDP service and firewall-rule state.",
  "Record active RDP sessions before disconnecting users or changing access.",
  "Document whether the account is referenced by services, scheduled tasks, scripts, or application configuration.",
  "Prefer disabling or removing privilege before deleting an identity when evidence preservation matters.",
  "Record the exact remediation command and the post-change verification result.",
];

const remediationExamples = [
  {
    title: "Remove unjustified local administrator membership",
    command:
      'Remove-LocalGroupMember -Group "Administrators" -Member "DISTRICT\\Avery"',
    note:
      "Use only after confirming Avery is not supposed to administer the server and the account is not needed by a service or task.",
  },
  {
    title: "Remove unnecessary RDP access",
    command:
      'Remove-LocalGroupMember -Group "Remote Desktop Users" -Member "DISTRICT\\Avery"',
    note:
      "Use when the mission confirms that ordinary staff do not require Remote Desktop access.",
  },
  {
    title: "Disable a suspicious temporary domain account",
    command:
      'Disable-ADAccount -Identity "LabTemp"',
    note:
      "Prefer disabling before deletion when you need to preserve the identity and its event history for review.",
  },
  {
    title: "Remove unjustified Domain Admin membership",
    command:
      'Remove-ADGroupMember -Identity "Domain Admins" -Members "LabTemp" -Confirm:$false',
    note:
      "Use only when the mission and evidence clearly show the account should not retain domain-wide administrative privilege.",
  },
];

const verificationChecks = [
  {
    area: "Local administrators",
    commands: [
      'Get-LocalGroupMember -Group "Administrators"',
    ],
    verify:
      "Only approved local or domain identities retain server-level administrative rights.",
  },
  {
    area: "Domain privilege",
    commands: [
      'Get-ADGroupMember "Domain Admins"',
    ],
    verify:
      "Highly privileged domain groups contain only mission-approved members.",
  },
  {
    area: "Remote access",
    commands: [
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
      'Get-Service -Name "TermService"',
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select DisplayName,Enabled,Action',
    ],
    verify:
      "Remote Desktop remains available only to approved administrators if the server role requires it.",
  },
  {
    area: "Authentication",
    commands: [
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624,4625,4672} -MaxEvents 30',
    ],
    verify:
      "Recent authentication evidence does not show continued unjustified privileged use.",
  },
  {
    area: "Account state",
    commands: [
      'Get-ADUser "LabTemp" -Properties Enabled,MemberOf',
      "Get-LocalUser",
    ],
    verify:
      "Suspicious or unapproved accounts reflect the intended enabled/disabled state after remediation.",
  },
  {
    area: "Core protection",
    commands: [
      "Get-NetFirewallProfile",
      "Get-MpComputerStatus",
    ],
    verify:
      "Firewall and Defender remain enabled after identity remediation.",
  },
];

const reflectionQuestions = [
  "Why is privileged-group membership stronger evidence than an account name alone?",
  "Why should a temporary account usually be disabled before deletion when an investigation is still active?",
  "How do 4624 and 4672 events complement each other when reviewing a privileged logon?",
  "Why is a newly created account followed quickly by Domain Admin membership a high-priority finding?",
  "Why should you check services, scheduled tasks, and scripts before disabling an administrative account?",
  "What is the difference between being a local Administrator and being a Domain Admin?",
  "Why does Remote Desktop membership matter even if the firewall currently blocks RDP?",
  "Which identity finding in this lab required the strongest correlation before a safe decision could be made?",
];

const completionChecklist = [
  "I determined whether the server is domain-joined and recorded the current identity context.",
  "I reviewed local users and local Administrators membership.",
  "I reviewed privileged domain groups where available.",
  "I correlated account creation and group-change events with logon evidence.",
  "I reviewed Remote Desktop users, service state, firewall rules, and current sessions.",
  "I checked whether suspicious identities are referenced by services or scheduled tasks before changing them.",
  "I preserved event and identity evidence before remediation.",
  "I made only mission-supported privilege changes.",
  "I verified approved administrators still retained access.",
  "I confirmed Defender and Windows Firewall remained enabled.",
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

export default function WindowsServerIdentityReviewLab() {
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
              href="/cyberpatriot/practice-labs/windows-server-roles-shares"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/linux-users-sudo-permissions"
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
                Practice Lab &middot; 04 &middot; Windows Server
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Identity Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Investigate local and domain identities, privileged groups,
                authentication events, remote access, and recent account changes
                before modifying any administrative access.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lab focuses on privilege reasoning. The question is not
                simply whether an account exists, but whether its access is
                justified by the server&apos;s role and supported by evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows Server</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Privilege review</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Evidence</span>
                  <span className="font-bold text-white">Identity + Logs + RDP</span>
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
            Preserve approved administration while removing unjustified privilege
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
            Identity rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Privilege is a relationship, not just an account property
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            An account may gain power through local groups, domain groups,
            remote-access rights, service assignments, scheduled tasks, or
            active sessions. Review those relationships before changing the identity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Identity context"
            title="Understand local versus domain authority"
            description="Start by establishing whether the server is domain-joined and which security context you are currently using."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {contextChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>

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
            label="Domain review"
            title="Inspect privileged identities and stale access"
            description="These checks apply when the server is domain-joined and the ActiveDirectory PowerShell module is available."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {domainChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>

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
            label="Authentication evidence"
            title="Use event logs to reconstruct privilege changes"
            description="Account state tells you what exists now. Event logs can help explain when privilege was created or used."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {eventChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                </pre>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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
            label="Remote access"
            title="Review who can reach the server interactively"
            description="Remote Desktop may be valid for administrators, but broad access creates unnecessary exposure."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {rdpChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>

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
            title="Correlate identity, privilege, authentication, and remote access"
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
            label="Evidence model"
            title="Build a complete identity picture"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceModel.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.layer}
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
            Identity changes can destroy context
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
            title="Reduce privilege without breaking approved administration"
            description="Use these only in the fictional authorized practice environment after the evidence clearly supports the action."
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
            title="Confirm approved admins still have access"
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
            title="Debrief the privilege decisions"
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
            Finish only when access matches the mission
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
              href="/cyberpatriot/practice-labs/windows-server-roles-shares"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/linux-users-sudo-permissions"
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
