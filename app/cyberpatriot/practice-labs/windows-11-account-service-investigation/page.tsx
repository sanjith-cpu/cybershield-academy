import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "This fictional Windows 11 workstation belongs to a school design team and must remain usable for approved creative work.",
  "Approved local users are Maya, Noah, and the built-in Administrator account.",
  "Maya is the primary user and should remain a standard user.",
  "Noah is an approved support user and should remain a standard user.",
  "Remote Desktop is not required on this workstation.",
  "Microsoft Defender and Windows Firewall must remain enabled.",
  "Approved design applications and normal web access must continue to work.",
  "Do not remove a service, account, or scheduled item only because its name looks unfamiliar.",
];

const accountChecks = [
  {
    title: "List local accounts",
    commands: [
      "Get-LocalUser",
      "net user",
    ],
    purpose:
      "Identify every local account, its enabled state, and whether it matches the mission briefing.",
  },
  {
    title: "Check local administrators",
    commands: [
      'Get-LocalGroupMember -Group "Administrators"',
      "net localgroup administrators",
    ],
    purpose:
      "Compare actual administrator membership with the privilege level required by the mission.",
  },
  {
    title: "Inspect account properties",
    commands: [
      'Get-LocalUser -Name "Maya" | Format-List *',
      'Get-LocalUser -Name "Noah" | Format-List *',
    ],
    purpose:
      "Review account state, password requirements, last logon information, and other local account properties.",
  },
  {
    title: "Review current identity",
    commands: [
      "whoami",
      "whoami /groups",
      "whoami /priv",
    ],
    purpose:
      "Understand the current session, group memberships, and privileges before making administrative decisions.",
  },
];

const serviceChecks = [
  {
    title: "Enumerate services",
    commands: [
      "Get-Service",
      "Get-CimInstance Win32_Service | Select Name,DisplayName,State,StartMode,StartName,PathName",
    ],
    purpose:
      "Capture service state, startup mode, service account, and executable path.",
  },
  {
    title: "Inspect one service deeply",
    commands: [
      'Get-CimInstance Win32_Service -Filter "Name=\'Spooler\'" | Format-List *',
    ],
    purpose:
      "Practice reading service configuration before deciding whether a service is expected or risky.",
  },
  {
    title: "Map services to processes",
    commands: [
      "tasklist /svc",
      "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
    ],
    purpose:
      "Connect a service to the process that hosts or launches it and preserve useful execution context.",
  },
  {
    title: "Check service dependencies",
    commands: [
      'Get-Service -Name "Spooler" -DependentServices',
      'Get-Service -Name "Spooler" -RequiredServices',
    ],
    purpose:
      "Avoid breaking required functionality by understanding dependencies before changing service state.",
  },
];

const logChecks = [
  {
    title: "Recent successful logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4624} -MaxEvents 20',
    use:
      "Review recent successful authentication events and compare account activity with expected use.",
  },
  {
    title: "Recent failed logons",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4625} -MaxEvents 20',
    use:
      "Look for repeated failures, unexpected usernames, or timing that deserves correlation.",
  },
  {
    title: "Account creation",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4720} -MaxEvents 20',
    use:
      "Identify recent local account creation when audit data is available.",
  },
  {
    title: "Group membership changes",
    command:
      'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4732} -MaxEvents 20',
    use:
      "Review additions to local security groups such as Administrators.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Local users",
    observation:
      "Maya, Noah, Visitor, Guest, and Administrator are present. Guest is disabled. Visitor is enabled.",
    prompt:
      "Which account is not named in the mission briefing, and what evidence should you gather before disabling it?",
  },
  {
    id: "E02",
    source: "Administrators group",
    observation:
      "Administrator, Noah, and Visitor are members of the local Administrators group.",
    prompt:
      "Which memberships conflict directly with the mission, and which one needs stronger evidence before removal?",
  },
  {
    id: "E03",
    source: "Account event",
    observation:
      "A 4720 event shows Visitor was created three days ago by Administrator.",
    prompt:
      "What does the event prove? What does it still not tell you about why the account exists?",
  },
  {
    id: "E04",
    source: "Group change event",
    observation:
      "A 4732 event shows Visitor was later added to the Administrators group.",
    prompt:
      "How does this change the priority of the Visitor account compared with E01 alone?",
  },
  {
    id: "E05",
    source: "Services",
    observation:
      "DesignUpdateSvc is running automatically from C:\\Program Files\\DesignSuite\\Updater\\designupdate.exe.",
    prompt:
      "What evidence would help you determine whether this is an approved vendor service?",
  },
  {
    id: "E06",
    source: "Services",
    observation:
      "RemoteRegistry is running automatically.",
    prompt:
      "How should mission requirements, dependencies, and actual use affect your decision about this service?",
  },
  {
    id: "E07",
    source: "Network",
    observation:
      "TCP 3389 is listening and maps to a Windows service associated with Remote Desktop.",
    prompt:
      "Which mission requirement makes this finding important, and what should you verify before remediation?",
  },
  {
    id: "E08",
    source: "Process path",
    observation:
      "A running process named updater.exe launches from C:\\Users\\Public\\Downloads\\Updater\\updater.exe.",
    prompt:
      "Why is the path important, and what should you preserve before terminating or deleting anything?",
  },
];

const correlationSteps = [
  {
    step: "01",
    title: "Confirm identity",
    text:
      "Start with account presence, enabled state, group membership, and mission-approved roles.",
  },
  {
    step: "02",
    title: "Correlate account events",
    text:
      "Use Security logs to determine whether an account was recently created or added to a privileged group.",
  },
  {
    step: "03",
    title: "Inspect service configuration",
    text:
      "Record service name, state, startup mode, service account, and executable path.",
  },
  {
    step: "04",
    title: "Map service to execution",
    text:
      "Use process and service data to connect the configured service with what is actually running.",
  },
  {
    step: "05",
    title: "Check network effect",
    text:
      "Determine whether the service or process is listening on a port or creating active network connections.",
  },
  {
    step: "06",
    title: "Decide narrowly",
    text:
      "Only make the change that the mission and evidence justify. Avoid unrelated cleanup.",
  },
];

const decisionQuestions = [
  "Which account finding is supported by both the mission briefing and Security logs?",
  "Which administrator membership has the clearest justification for removal?",
  "Which service appears legitimate based on path and context, but still deserves verification?",
  "Which service conflicts with the mission even if it is a legitimate Windows component?",
  "Which process should have its path, hash, parent PID, and network activity recorded before any action?",
  "Which finding is only suspicious-looking rather than proven malicious?",
];

const preservationChecks = [
  "Record the exact account name and enabled state.",
  "Record local group membership before changing it.",
  "Export or note relevant Security event IDs and timestamps.",
  "Record service name, display name, state, startup mode, service account, and executable path.",
  "Record process PID, parent PID, path, command line, and user context.",
  "Record listening ports and owning PIDs.",
  "Calculate a file hash before deleting or replacing a suspicious file.",
  "Note the exact command or GUI action used for remediation.",
];

const safeRemediationExamples = [
  {
    title: "Remove unjustified local admin rights",
    note:
      "Only after confirming the mission requirement and preserving the original group membership.",
    command:
      'Remove-LocalGroupMember -Group "Administrators" -Member "Noah"',
  },
  {
    title: "Disable an unapproved local account",
    note:
      "Only after gathering enough evidence to show the account is not required by the scenario.",
    command:
      'Disable-LocalUser -Name "Visitor"',
  },
  {
    title: "Review Remote Desktop before changing it",
    note:
      "First verify the service, listener, and mission requirement. Do not blindly disable unrelated remote-management components.",
    command:
      'Get-Service -Name "TermService"',
  },
  {
    title: "Inspect a suspicious file hash",
    note:
      "Preserve evidence before terminating a related process or removing the file.",
    command:
      'Get-FileHash "C:\\Users\\Public\\Downloads\\Updater\\updater.exe" -Algorithm SHA256',
  },
];

const verificationChecks = [
  {
    area: "Accounts",
    commands: [
      "Get-LocalUser",
      'Get-LocalGroupMember -Group "Administrators"',
    ],
    verify:
      "Approved accounts still exist, unapproved access is addressed, and privilege matches the mission.",
  },
  {
    area: "Services",
    commands: [
      "Get-Service",
      "Get-CimInstance Win32_Service | Select Name,State,StartMode,PathName",
    ],
    verify:
      "Required services remain functional and any justified change is reflected in state or startup mode.",
  },
  {
    area: "Processes",
    commands: [
      "Get-Process",
      "Get-CimInstance Win32_Process | Select ProcessId,Name,ExecutablePath,CommandLine",
    ],
    verify:
      "Unexpected process activity is re-checked after remediation and legitimate applications still run.",
  },
  {
    area: "Network",
    commands: [
      "Get-NetTCPConnection -State Listen",
      "netstat -ano",
    ],
    verify:
      "Listeners match the intended workstation role and required connectivity still works.",
  },
  {
    area: "Security",
    commands: [
      "Get-MpComputerStatus",
      "Get-NetFirewallProfile",
    ],
    verify:
      "Defender and Firewall remain enabled after account or service changes.",
  },
];

const reflectionQuestions = [
  "Why is an unfamiliar account not automatically an account you should delete?",
  "Why is a 4720 event more useful when combined with group membership evidence?",
  "What is the difference between a service being legitimate and a service being required?",
  "Why should service dependencies be checked before disabling a service?",
  "Why is an executable path under a public download directory more concerning than one under an expected vendor directory?",
  "Why should a file hash be recorded before deleting a suspicious executable?",
  "How can a network listener help confirm the practical effect of a running service?",
  "Which finding in this lab required the most correlation before you could make a defensible decision?",
];

const completionChecklist = [
  "I compared every local account with the mission briefing.",
  "I reviewed local administrator membership.",
  "I used Security events to add context to account changes.",
  "I recorded service paths and startup state before remediation.",
  "I checked service/process relationships instead of judging by names alone.",
  "I reviewed Remote Desktop evidence because the mission says it is not required.",
  "I preserved process and file evidence before any destructive action.",
  "I made only narrow, scenario-supported changes.",
  "I re-ran account, service, process, network, Defender, and Firewall checks after remediation.",
  "I can explain which conclusions were observations and which were inferences.",
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

export default function Windows11AccountServiceInvestigationLab() {
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
              href="/cyberpatriot/practice-labs/windows-11-baseline-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/windows-server-roles-shares"
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
                Practice Lab &middot; 02 &middot; Windows 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Account &amp; Service Investigation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Move beyond a simple baseline. Correlate local users,
                administrator membership, Security logs, service configuration,
                process execution, and network state before making a defensive decision.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to hunt by name. It is to connect identity,
                configuration, execution, and evidence inside an authorized
                fictional Windows 11 environment.
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
                  <span>Primary focus</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence</span>
                  <span className="font-bold text-white">Accounts + Services + Logs</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Rule</span>
                  <span className="font-bold text-white">Prove before changing</span>
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
            Fictional design-team workstation
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Identity review"
            title="Start with users and privilege"
            description="The mission briefing gives you the expected identity model. Compare that model with the workstation before changing anything."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {accountChecks.map((item) => (
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
            title="Read service configuration before acting"
            description="Service names alone are weak evidence. Paths, startup mode, service accounts, dependencies, and process context are much more useful."
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
            label="Authentication evidence"
            title="Use Security logs to add context"
            description="Event IDs do not explain the whole story, but they can prove that an account was created, a logon occurred, or group membership changed."
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
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Fictional evidence set"
            title="Correlate before you remediate"
            description="Each item becomes stronger when combined with another source. Avoid treating a single observation as the entire case."
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
            label="Correlation workflow"
            title="Connect the evidence sources"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {correlationSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">{item.step}</span>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
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
            Which findings are actually supported?
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {decisionQuestions.map((item, index) => (
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
            Do not destroy the evidence you still need
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preservationChecks.map((item, index) => (
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
            title="Make the smallest justified change"
            description="These commands are examples for the fictional practice scenario. Use them only on an authorized training system after confirming the evidence."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {safeRemediationExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
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
            title="Re-check every area you changed"
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
            title="Debrief the investigation"
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
            Finish only after the environment still works
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
              href="/cyberpatriot/practice-labs/windows-11-baseline-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lab
            </Link>
            <Link
              href="/cyberpatriot/practice-labs/windows-server-roles-shares"
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
