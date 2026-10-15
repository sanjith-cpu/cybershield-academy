import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Windows Server system supports a small school media department and must remain available to approved staff.",
  "The server provides shared project storage through SMB and must continue serving the approved MediaProjects share.",
  "The server is not intended to provide Remote Desktop access for ordinary users.",
  "The approved local administrators are the built-in Administrator account and the fictional IT support account HelpDeskAdmin.",
  "Microsoft Defender and Windows Firewall must remain enabled.",
  "The File Server role is required and must not be removed.",
  "Any unnecessary server role, share, service, or listener should be investigated before remediation.",
  "Changes must preserve required file access and should be verified after each significant action.",
];

const roleChecks = [
  {
    title: "Installed roles and features",
    commands: [
      "Get-WindowsFeature | Where-Object Installed",
      "Get-WindowsFeature",
    ],
    purpose:
      "Identify installed server roles and features before deciding what is required or unnecessary.",
  },
  {
    title: "File Server role state",
    commands: [
      'Get-WindowsFeature -Name "FS-FileServer"',
      "Get-SmbServerConfiguration",
    ],
    purpose:
      "Confirm that the required File Server capability is installed and review core SMB server settings.",
  },
  {
    title: "Server identity and edition",
    commands: [
      "hostname",
      "Get-ComputerInfo | Select WindowsProductName,WindowsVersion,OsName,OsVersion,CsDomain,CsName",
    ],
    purpose:
      "Record the server name, operating system, and domain/workgroup context before making changes.",
  },
  {
    title: "Listening services by role",
    commands: [
      "Get-NetTCPConnection -State Listen",
      "netstat -ano",
    ],
    purpose:
      "Relate installed roles and services to the network ports actually exposed by the server.",
  },
];

const shareChecks = [
  {
    title: "List SMB shares",
    commands: [
      "Get-SmbShare",
      "net share",
    ],
    purpose:
      "Identify all published shares, including administrative shares and custom project shares.",
  },
  {
    title: "Review share permissions",
    commands: [
      'Get-SmbShareAccess -Name "MediaProjects"',
    ],
    purpose:
      "Review share-level permissions for the required fictional project share.",
  },
  {
    title: "Review NTFS permissions",
    commands: [
      'Get-Acl "C:\\Shares\\MediaProjects" | Format-List',
      'icacls "C:\\Shares\\MediaProjects"',
    ],
    purpose:
      "Compare file-system permissions with share permissions before changing either one.",
  },
  {
    title: "Review active SMB usage",
    commands: [
      "Get-SmbSession",
      "Get-SmbOpenFile",
    ],
    purpose:
      "Understand whether approved users currently depend on the share before changing access or restarting services.",
  },
];

const serviceChecks = [
  {
    title: "Core service inventory",
    commands: [
      "Get-Service",
      "Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName",
    ],
    purpose:
      "Record service state, startup mode, service account, and executable path.",
  },
  {
    title: "SMB server service",
    commands: [
      'Get-Service -Name "LanmanServer"',
      'Get-Service -Name "LanmanServer" -RequiredServices',
      'Get-Service -Name "LanmanServer" -DependentServices',
    ],
    purpose:
      "Understand the service that supports SMB file sharing and its dependencies before making changes.",
  },
  {
    title: "Remote Desktop service",
    commands: [
      'Get-Service -Name "TermService"',
      "Get-NetTCPConnection -LocalPort 3389 -ErrorAction SilentlyContinue",
    ],
    purpose:
      "Check whether Remote Desktop is active and whether the server is listening on the default RDP port.",
  },
  {
    title: "Service to process mapping",
    commands: [
      "tasklist /svc",
      "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
    ],
    purpose:
      "Correlate service configuration with the process that is actually running.",
  },
];

const firewallChecks = [
  {
    title: "Firewall profiles",
    commands: [
      "Get-NetFirewallProfile",
    ],
    purpose:
      "Confirm that Domain, Private, and Public profiles remain enabled.",
  },
  {
    title: "Enabled inbound rules",
    commands: [
      'Get-NetFirewallRule -Direction Inbound -Enabled True | Select DisplayName,Profile,Action',
    ],
    purpose:
      "Review what inbound traffic is explicitly permitted.",
  },
  {
    title: "SMB-related rules",
    commands: [
      'Get-NetFirewallRule -DisplayGroup "File and Printer Sharing" | Select DisplayName,Enabled,Profile,Direction,Action',
    ],
    purpose:
      "Verify that firewall policy supports the required file-sharing role without broadly opening unrelated access.",
  },
  {
    title: "Remote Desktop rules",
    commands: [
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select DisplayName,Enabled,Profile,Direction,Action',
    ],
    purpose:
      "Check whether firewall rules expose RDP even though ordinary remote access is not required.",
  },
];

const logChecks = [
  {
    title: "Successful logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624} -MaxEvents 25',
    use:
      "Review recent authentication activity and compare accounts with the mission briefing.",
  },
  {
    title: "Failed logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4625} -MaxEvents 25',
    use:
      "Look for repeated failures, unexpected accounts, or timing that deserves correlation.",
  },
  {
    title: "Share access events",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=5140} -MaxEvents 25',
    use:
      "When auditing is available, review network share access and correlate it with approved users and expected shares.",
  },
  {
    title: "Service installation",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="System"; Id=7045} -MaxEvents 25',
    use:
      "Look for recently installed services and compare the service path and account with expected software.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Installed roles",
    observation:
      "File and Storage Services is installed. Web Server (IIS) is also installed even though the mission briefing does not mention a web application.",
    prompt:
      "What evidence should you collect before deciding whether IIS is unnecessary?",
  },
  {
    id: "E02",
    source: "SMB shares",
    observation:
      "MediaProjects points to C:\\Shares\\MediaProjects. A second custom share named Transfer points to C:\\Temp\\Transfer.",
    prompt:
      "Which share is clearly required, and what questions should you ask before removing or restricting Transfer?",
  },
  {
    id: "E03",
    source: "Share permissions",
    observation:
      "MediaProjects grants Change access to the approved group MediaEditors and Full access to Administrators.",
    prompt:
      "Does this immediately indicate a problem, or do you need NTFS permissions and business context too?",
  },
  {
    id: "E04",
    source: "NTFS permissions",
    observation:
      "C:\\Shares\\MediaProjects grants Modify to MediaEditors and Full Control to Administrators and SYSTEM.",
    prompt:
      "How do the share and NTFS permissions combine when an approved user connects over SMB?",
  },
  {
    id: "E05",
    source: "Active sessions",
    observation:
      "Two MediaEditors currently have files open on MediaProjects.",
    prompt:
      "Why does this evidence matter before restarting LanmanServer or changing the share?",
  },
  {
    id: "E06",
    source: "Remote Desktop",
    observation:
      "TermService is running and TCP 3389 is listening. Remote Desktop firewall rules are enabled.",
    prompt:
      "How does the mission briefing affect the priority of this finding?",
  },
  {
    id: "E07",
    source: "Service installation event",
    observation:
      "A 7045 event shows a service named TransferSync installed four days ago from C:\\ProgramData\\TransferSync\\syncsvc.exe.",
    prompt:
      "What additional evidence would help determine whether this is approved software or an unnecessary service?",
  },
  {
    id: "E08",
    source: "Failed logons",
    observation:
      "Several 4625 events reference a local account named tempadmin that is not listed in the mission briefing.",
    prompt:
      "What should you verify about the account before disabling or deleting it?",
  },
];

const dependencyQuestions = [
  "Which server role is explicitly required by the mission briefing?",
  "Which installed role appears unnecessary but still needs validation before removal?",
  "Which share currently has active users and therefore deserves extra caution?",
  "Which service directly supports SMB and should not be stopped casually?",
  "Which remote-access finding conflicts with the stated server role?",
  "Which service-installation event should be correlated with file path, publisher, process, and network evidence?",
];

const preservationChecklist = [
  "Record the installed roles and features before removing anything.",
  "Record all custom SMB shares and their paths.",
  "Record both share permissions and NTFS permissions.",
  "Record active SMB sessions and open files before restarting services.",
  "Record firewall profile state and relevant inbound rules.",
  "Record service name, startup type, service account, path, and dependencies.",
  "Record relevant event IDs, timestamps, usernames, and source systems.",
  "Record process IDs and listening ports tied to services under investigation.",
];

const remediationExamples = [
  {
    title: "Remove an unjustified local administrator",
    command:
      'Remove-LocalGroupMember -Group "Administrators" -Member "tempadmin"',
    note:
      "Use only after confirming that the account exists, is not approved, and is not required by the scenario.",
  },
  {
    title: "Disable an unapproved local account",
    command:
      'Disable-LocalUser -Name "tempadmin"',
    note:
      "Prefer disabling before deletion when preserving evidence or rollback capability is valuable.",
  },
  {
    title: "Review a custom SMB share before removal",
    command:
      'Get-SmbShare -Name "Transfer" | Format-List *',
    note:
      "Collect path, description, permissions, active sessions, and business context before removing a share.",
  },
  {
    title: "Inspect a service file hash",
    command:
      'Get-FileHash "C:\\ProgramData\\TransferSync\\syncsvc.exe" -Algorithm SHA256',
    note:
      "Preserve file identity before stopping, disabling, or removing a suspicious service.",
  },
];

const verificationChecks = [
  {
    area: "Roles",
    commands: [
      "Get-WindowsFeature | Where-Object Installed",
    ],
    verify:
      "The required File Server role remains installed and any justified role change is reflected correctly.",
  },
  {
    area: "SMB",
    commands: [
      "Get-SmbShare",
      'Get-SmbShareAccess -Name "MediaProjects"',
      "Get-SmbSession",
    ],
    verify:
      "MediaProjects still exists, permissions match the scenario, and approved users can continue accessing required files.",
  },
  {
    area: "Services",
    commands: [
      'Get-Service -Name "LanmanServer"',
      'Get-Service -Name "TermService"',
    ],
    verify:
      "Required file-sharing services remain functional and remote-access state matches the mission.",
  },
  {
    area: "Firewall",
    commands: [
      "Get-NetFirewallProfile",
      'Get-NetFirewallRule -DisplayGroup "File and Printer Sharing" | Select DisplayName,Enabled,Action',
    ],
    verify:
      "Firewall protection remains enabled and required SMB traffic is still supported.",
  },
  {
    area: "Network",
    commands: [
      "Get-NetTCPConnection -State Listen",
      "netstat -ano",
    ],
    verify:
      "Expected server listeners remain available and unnecessary exposure is re-checked after remediation.",
  },
  {
    area: "Security",
    commands: [
      "Get-MpComputerStatus",
    ],
    verify:
      "Defender protection remains enabled after server-role or service changes.",
  },
];

const reflectionQuestions = [
  "Why is an installed server role not automatically unnecessary just because it is absent from the mission briefing?",
  "Why should you inspect both share permissions and NTFS permissions?",
  "Why are active SMB sessions important before restarting the Server service or changing a share?",
  "Why is a running Remote Desktop service more important when the mission specifically says ordinary remote access is not required?",
  "Why is a 7045 event useful when investigating a recently installed service?",
  "Why should a suspicious service executable be hashed before removal?",
  "What is the danger of disabling a service without checking dependencies?",
  "Which finding in this lab required the strongest balance between security and availability?",
];

const completionChecklist = [
  "I recorded the server identity, edition, and role context.",
  "I identified installed roles and confirmed the required File Server role.",
  "I reviewed custom SMB shares and their paths.",
  "I compared share permissions with NTFS permissions.",
  "I checked active SMB sessions before considering disruptive changes.",
  "I reviewed firewall rules for required SMB traffic and unnecessary remote access.",
  "I correlated services with process, file-path, event-log, and network evidence.",
  "I made only narrow, mission-supported changes.",
  "I verified that MediaProjects remained accessible after remediation.",
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

export default function WindowsServerRolesSharesLab() {
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
              href="/cyberpatriot/practice-labs/windows-11-account-service-investigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/windows-server-identity-review"
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
                Practice Lab &middot; 03 &middot; Windows Server
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Roles &amp; Shares
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Investigate installed server roles, SMB shares, permissions,
                active sessions, services, firewall rules, and event evidence
                while preserving the file-sharing function the fictional
                organization depends on.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lab emphasizes availability. A server can be more secure
                after a change and still fail the mission if required services
                stop working.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows Server</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core skill</span>
                  <span className="font-bold text-white">Role dependency</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Required service</span>
                  <span className="font-bold text-white">SMB file sharing</span>
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
            Keep the fictional media file server available
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
            Availability rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required roles are part of the security boundary
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Do not remove a role, stop a service, or change a share until you
            understand what depends on it. Protecting confidentiality and
            integrity does not justify breaking required availability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Role inventory"
            title="Understand what the server is built to do"
            description="Begin with operating-system context, installed roles, required features, and listening services."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {roleChecks.map((item) => (
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
            label="Share review"
            title="Inspect both SMB and NTFS access"
            description="Remote file access is affected by both share-level permissions and file-system permissions. Review both before deciding that access is too broad or too restrictive."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {shareChecks.map((item) => (
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
            label="Service review"
            title="Map service state to server function"
            description="The Server service, remote-access services, and recently installed services should be understood in context rather than judged only by name."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceChecks.map((item) => (
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
            label="Firewall review"
            title="Permit required services without broad exposure"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {firewallChecks.map((item) => (
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
            label="Event evidence"
            title="Correlate configuration with recent activity"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {logChecks.map((item) => (
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
            label="Fictional evidence set"
            title="Decide what needs evidence, action, or protection"
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision checkpoint
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Protect required function while reducing unnecessary exposure
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {dependencyQuestions.map((item, index) => (
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
            Preserve first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record dependency and usage before disruption
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
            title="Use narrow changes only when evidence supports them"
            description="These are defensive examples for an authorized practice server. They are not instructions for changing an unknown production system."
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
            title="Prove the server still fulfills its mission"
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
            title="Debrief the availability decisions"
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
            Finish only when the required file service still works
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
              href="/cyberpatriot/practice-labs/windows-11-account-service-investigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/windows-server-identity-review"
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
