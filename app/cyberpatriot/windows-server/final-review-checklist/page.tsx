import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Run a complete final review of a Windows Server competition image without repeating every earlier task blindly.",
  "Prioritize required roles, identity, policy, protection, exposure, updates, persistence, evidence, and client verification.",
  "Confirm that hardening changes did not break Active Directory, DNS, DHCP, SMB, remote administration, or required applications.",
  "Use both GUI and PowerShell evidence to verify the final server state.",
  "Separate must-fix findings from investigate-later items during the final review window.",
  "Finish with a concise, evidence-backed handoff showing what changed, what was preserved, and what still needs attention.",
];

const finalReviewOrder = [
  {
    number: "01",
    title: "Scenario and role check",
    text:
      "Re-read the scenario. Confirm what the server must do, which services must remain available, which accounts are authorized, and which remote-management paths are required.",
  },
  {
    number: "02",
    title: "Identity and privilege",
    text:
      "Review local or domain users, privileged groups, service identities, remote-access groups, and unexpected administrative membership.",
  },
  {
    number: "03",
    title: "Policy and authentication",
    text:
      "Confirm password, lockout, user-right, security-option, audit, and Group Policy settings align with the intended environment.",
  },
  {
    number: "04",
    title: "Protection controls",
    text:
      "Verify Microsoft Defender, signatures, exclusions, firewall profiles, and required inbound rules without disabling required applications or roles.",
  },
  {
    number: "05",
    title: "Patching and reboot state",
    text:
      "Review update state, recent installations, failed updates, and whether a restart is pending. Do not reboot casually at the end.",
  },
  {
    number: "06",
    title: "Roles, services, and dependencies",
    text:
      "Confirm required server roles are installed and their services, service accounts, dependencies, and startup behavior are healthy.",
  },
  {
    number: "07",
    title: "Shares and remote administration",
    text:
      "Verify SMB shares, NTFS/share permissions, RDP, WinRM, user rights, and firewall scope.",
  },
  {
    number: "08",
    title: "DNS and DHCP",
    text:
      "If installed, verify zones, records, forwarders, DHCP scopes, options, reservations, and client-side functionality.",
  },
  {
    number: "09",
    title: "Persistence and evidence",
    text:
      "Review scheduled tasks, unexpected services, suspicious startup behavior, recent logs, and evidence that still needs preservation.",
  },
  {
    number: "10",
    title: "Client-side verification",
    text:
      "Test the server from an authorized client. A green GUI on the server is not enough.",
  },
];

const roleSnapshot = [
  {
    title: "Domain Controller",
    verify:
      "Domain authentication, AD users/groups, DNS, Group Policy processing, required SRV records, time consistency, and remote administration.",
  },
  {
    title: "DNS Server",
    verify:
      "Required zones, host records, SRV records where applicable, forwarders, recursion design, interfaces, and client resolution.",
  },
  {
    title: "DHCP Server",
    verify:
      "Authorization, active scopes, exclusions, reservations, gateway/DNS options, bindings, and client lease renewal.",
  },
  {
    title: "File Server",
    verify:
      "Required shares, share permissions, NTFS permissions, service-account dependencies, active sessions, and client access.",
  },
  {
    title: "Application Server",
    verify:
      "Required application services, service accounts, firewall rules, data-folder permissions, scheduled jobs, and application availability.",
  },
  {
    title: "Remote Administration",
    verify:
      "Authorized RDP/WinRM users, user rights, service state, firewall scope, and tested management access.",
  },
];

const identityChecklist = [
  "Review local users on member servers where local accounts apply.",
  "Review Active Directory users on domain controllers or domain-managed environments.",
  "Review local Administrators or domain privileged groups.",
  "Review Remote Desktop Users or equivalent authorized groups.",
  "Check disabled, expired, stale-looking, and unfamiliar accounts carefully before removal.",
  "Review service accounts and scheduled-task identities before changing passwords or group membership.",
  "Remove only clearly unauthorized privilege.",
  "Verify required administrators can still perform their jobs.",
];

const policyChecklist = [
  "Review effective password policy.",
  "Review account lockout policy.",
  "Review User Rights Assignment.",
  "Review Security Options.",
  "Review advanced audit policy where relevant.",
  "Check whether domain Group Policy overrides local settings.",
  "Avoid casual edits to default domain-wide GPOs.",
  "Use gpresult or Group Policy Results when effective settings are unclear.",
];

const defenderChecklist = [
  "Confirm Defender or the authorized endpoint protection product is present and healthy.",
  "Confirm real-time protection state.",
  "Confirm security intelligence/signatures are current enough for the environment.",
  "Review recent detections.",
  "Review exclusions instead of deleting them blindly.",
  "Investigate suspicious exclusions and preserve their evidence.",
  "Avoid conflicts with approved third-party antivirus/EDR.",
  "Run an appropriate scan only when it will not create unnecessary server impact.",
];

const firewallChecklist = [
  "Confirm all firewall profiles are in the intended state.",
  "Review required inbound rules for server roles.",
  "Review RDP and WinRM exposure.",
  "Review DNS, DHCP, SMB, IIS, or application rules as applicable.",
  "Check profile, protocol, port, application, service, and remote-address scope.",
  "Narrow unnecessary exposure before disabling a required service.",
  "Verify required client connectivity after firewall changes.",
  "Confirm no broad temporary troubleshooting rule was left enabled.",
];

const updateChecklist = [
  "Record OS version and build.",
  "Review update history.",
  "Review failed updates.",
  "Check whether a restart is pending.",
  "Do not install optional drivers or feature upgrades automatically.",
  "Preserve WSUS or other intended enterprise update sources.",
  "Verify role and application health after any installed update.",
  "Do not perform a last-minute reboot without a full post-restart test plan.",
];

const serviceChecklist = [
  "Review installed roles and features.",
  "Review running and stopped services.",
  "Review startup type for important services.",
  "Review service accounts.",
  "Review executable paths for unfamiliar services.",
  "Review required and dependent services before disabling anything.",
  "Check Service Control Manager events for repeated failures.",
  "Confirm required roles are usable from clients.",
];

const shareChecklist = [
  "Inventory required SMB shares.",
  "Review share paths.",
  "Review share permissions.",
  "Review NTFS permissions.",
  "Review inheritance and explicit permissions.",
  "Review service-account access.",
  "Check active SMB sessions before disruptive changes.",
  "Verify read/write behavior using the intended user accounts.",
];

const remoteChecklist = [
  "Confirm whether RDP is required.",
  "Review authorized RDP users and groups.",
  "Review Allow log on through Remote Desktop Services.",
  "Review Deny log on through Remote Desktop Services.",
  "Check TermService state.",
  "Review RDP firewall scope.",
  "Check WinRM if PowerShell remoting is required.",
  "Verify remote access from an authorized management client.",
];

const dnsChecklist = [
  "Confirm DNS Server service state.",
  "Review required forward lookup zones.",
  "Review reverse zones where applicable.",
  "Preserve required AD SRV records.",
  "Review forwarders.",
  "Review zone-transfer scope.",
  "Review dynamic-update configuration.",
  "Review listening interfaces.",
  "Test required internal names from a client.",
  "Test approved forwarded/external resolution when required.",
];

const dhcpChecklist = [
  "Confirm DHCP Server service state.",
  "Confirm authorization when part of the AD design.",
  "Review active scopes.",
  "Review exclusions and reservations.",
  "Review Option 003 gateway.",
  "Review Option 006 DNS servers.",
  "Review Option 015 DNS domain name.",
  "Review interface bindings.",
  "Review suspicious or exhausted leases.",
  "Renew a lease from an authorized client.",
];

const persistenceChecklist = [
  "Review scheduled tasks and subfolders.",
  "Review task actions, arguments, triggers, and principals.",
  "Review recent task history and TaskScheduler events.",
  "Review newly installed or unusual services.",
  "Investigate privileged execution from writable folders.",
  "Preserve task XML and related evidence before disabling suspicious tasks.",
  "Prefer reversible changes when appropriate.",
  "Verify required automation still runs.",
];

const eventChecklist = [
  "Review recent System errors and warnings.",
  "Review Security log events relevant to accounts and authentication.",
  "Review Application errors for required software.",
  "Review TaskScheduler Operational.",
  "Review Windows Defender Operational.",
  "Review WindowsUpdateClient Operational.",
  "Review DNS/DHCP/Group Policy logs when those roles are installed.",
  "Preserve evidence before cleanup or restart.",
  "Do not clear logs as part of routine final review.",
];

const powershellBaseline = [
  {
    title: "Roles",
    command:
      "Get-WindowsFeature | Where-Object {$_.Installed -eq $true} | Select-Object DisplayName, Name, InstallState",
  },
  {
    title: "Services",
    command:
      "Get-CimInstance Win32_Service | Select-Object Name, State, StartMode, StartName, PathName",
  },
  {
    title: "Firewall",
    command:
      "Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction",
  },
  {
    title: "Defender",
    command:
      "Get-MpComputerStatus",
  },
  {
    title: "Shares",
    command:
      "Get-SmbShare | Select-Object Name, Path, Description, Special",
  },
  {
    title: "Tasks",
    command:
      "Get-ScheduledTask | Select-Object TaskPath, TaskName, State",
  },
  {
    title: "Recent System events",
    command:
      "Get-WinEvent -LogName System -MaxEvents 40 | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message",
  },
  {
    title: "Update history",
    command:
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 20 HotFixID, Description, InstalledOn",
  },
];

const mustFix = [
  {
    title: "Unauthorized administrator",
    text:
      "A clearly unauthorized user or group has administrative privilege and no role dependency requires it.",
  },
  {
    title: "Protection disabled",
    text:
      "Defender or the approved endpoint protection control is unexpectedly disabled without a documented reason.",
  },
  {
    title: "Firewall broadly exposed",
    text:
      "A required service is exposed to unnecessary networks or profiles and can be safely narrowed.",
  },
  {
    title: "Required service broken",
    text:
      "DNS, DHCP, SMB, AD, RDP, application, or another scenario-required function is currently not working.",
  },
  {
    title: "Suspicious persistence with evidence",
    text:
      "A task or service is clearly unauthorized, evidence has been preserved, and disabling it will not break required functionality.",
  },
  {
    title: "Bad client configuration",
    text:
      "DHCP or DNS settings are clearly sending clients to the wrong gateway, DNS server, or namespace.",
  },
];

const investigateLater = [
  {
    title: "Unfamiliar but role-linked service",
    text:
      "The service belongs to an installed role or application and has no clear evidence of being unnecessary.",
  },
  {
    title: "Old-looking account with unclear dependency",
    text:
      "The account may belong to a service, task, application, or legacy process that still matters.",
  },
  {
    title: "Optional update",
    text:
      "The update is not required for immediate security and introduces restart or compatibility risk.",
  },
  {
    title: "Unfamiliar DNS record",
    text:
      "The record may support Active Directory, a required service, or another infrastructure dependency.",
  },
  {
    title: "Unknown reservation or exclusion",
    text:
      "The DHCP entry may protect required static infrastructure.",
  },
  {
    title: "Vendor scheduled task",
    text:
      "The task maps to installed required software but its exact purpose is not yet fully documented.",
  },
];

const clientVerification = [
  {
    title: "Domain authentication",
    test:
      "Sign in or authenticate with an authorized domain account when AD is required.",
  },
  {
    title: "DNS",
    test:
      "Resolve the required domain and hostnames from an authorized client.",
  },
  {
    title: "DHCP",
    test:
      "Renew a lease on an authorized test client and confirm IP, gateway, DNS, and suffix.",
  },
  {
    title: "SMB",
    test:
      "Open required shares using the intended reader/editor accounts.",
  },
  {
    title: "RDP",
    test:
      "Connect from the authorized management source using an approved account.",
  },
  {
    title: "WinRM",
    test:
      "Use Test-WSMan or the approved remoting workflow when WinRM is required.",
  },
  {
    title: "Application",
    test:
      "Open or query the required server application from a client.",
  },
  {
    title: "Web service",
    test:
      "Load the required site or endpoint from a client if IIS or another web service is required.",
  },
];

const finalEvidence = [
  "Server role and scenario summary",
  "Authorized administrator list",
  "Major policy findings",
  "Defender status and important detections",
  "Firewall profile and exposure notes",
  "Patch/restart state",
  "Required role/service health",
  "Share and permission findings",
  "Remote-administration state",
  "DNS/DHCP findings when applicable",
  "Suspicious task/service evidence",
  "Important Event Viewer timeline notes",
  "Final client-side verification results",
  "Items intentionally deferred and why",
];

const stopConditions = [
  {
    title: "Required role breaks",
    text:
      "Stop adding more changes and restore or troubleshoot the last known change before continuing.",
  },
  {
    title: "Remote access is lost",
    text:
      "Use the preserved recovery path and fix the access issue before any additional hardening.",
  },
  {
    title: "Multiple systems fail at once",
    text:
      "Suspect a shared dependency such as DNS, firewall, identity, policy, or networking before changing several unrelated components.",
  },
  {
    title: "Evidence becomes unclear",
    text:
      "Preserve logs and configuration state before additional changes make the timeline harder to reconstruct.",
  },
  {
    title: "Time is nearly over",
    text:
      "Stop risky experimentation. Focus on required-role health, obvious security problems, evidence, and final verification.",
  },
  {
    title: "A reboot is pending",
    text:
      "Do not reboot automatically. Decide whether there is enough time to complete the full post-restart verification plan.",
  },
];

const finalLab = [
  {
    number: "01",
    title: "Identify the server",
    text:
      "Fictional DC-PRACTICE is a domain controller and DNS server. Morgan administers it through RDP. Domain authentication and DNS are mandatory.",
  },
  {
    number: "02",
    title: "Run the final identity and policy pass",
    text:
      "Confirm privileged groups, required service identities, password/lockout policy, user rights, and effective Group Policy.",
  },
  {
    number: "03",
    title: "Run the protection pass",
    text:
      "Confirm Defender health, review exclusions, check firewall profiles, and ensure RDP/DNS exposure is limited to what the scenario requires.",
  },
  {
    number: "04",
    title: "Run the role pass",
    text:
      "Verify AD-related services, DNS zones and SRV records, required remote administration, and recent update/restart state.",
  },
  {
    number: "05",
    title: "Run the evidence pass",
    text:
      "Review recent System, Security, Defender, Task Scheduler, and DNS events. Preserve evidence for any suspicious finding before remediation.",
  },
  {
    number: "06",
    title: "Verify from a client",
    text:
      "Confirm domain logon, DNS resolution, Group Policy availability, and Morgan's authorized RDP access.",
  },
  {
    number: "07",
    title: "Document and stop",
    text:
      "Record the final state, list deferred investigations, and avoid making new speculative changes once the server is secure and required functions are verified.",
  },
];

const mistakes = [
  {
    title: "Repeating the entire checklist mechanically",
    text:
      "The final pass should focus on verification, unresolved findings, and dependencies rather than redoing every earlier step from zero.",
  },
  {
    title: "Making risky changes near the end",
    text:
      "Late changes leave less time for rollback, reboot, and client verification.",
  },
  {
    title: "Trusting the server console only",
    text:
      "DNS, DHCP, SMB, RDP, web services, and applications should be verified from clients when possible.",
  },
  {
    title: "Clearing evidence after remediation",
    text:
      "Logs and task/service evidence may be needed to prove what happened and confirm the fix.",
  },
  {
    title: "Fixing unfamiliar items without ownership checks",
    text:
      "Server roles and enterprise tools often contain services, tasks, records, and accounts that look unfamiliar but are required.",
  },
  {
    title: "Rebooting automatically",
    text:
      "A reboot can expose hidden dependency failures at the worst possible time.",
  },
];

const reflection = [
  "Why should the final review start with the scenario and server role?",
  "Why is client-side verification necessary after server hardening?",
  "What kinds of findings should be fixed immediately versus investigated later?",
  "Why can a late reboot be riskier than a pending update?",
  "What evidence should be preserved before disabling suspicious persistence?",
  "What should determine when you stop making changes and move to documentation?",
];

export default function WindowsServerFinalReviewChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/powershell-server-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 18
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Final Review Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Finish the Windows Server image with a role-first verification
                pass that confirms security, availability, evidence, and client
                functionality before you stop making changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The final review is not another blind hardening sweep. It is a
                controlled check that the server is both safer and still able
                to perform every required job.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Final stages</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary focus</span>
                  <span className="font-bold text-white">Verify, not guess</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Client testing</span>
                  <span className="font-bold text-white">Required</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure + functional</span>
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
            What this final lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final-review principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Required function is part of security
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A server is not successfully hardened if users, applications,
              authentication, name resolution, file access, or administration
              no longer work.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              End-of-round warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Stop speculative changes when verification matters more
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Near the end, unresolved low-confidence findings are often safer
              to document than to "fix" without time to test the result.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not trade a working required server role for an unverified last-minute hardening idea.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Final review order
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten stages for the final pass
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {finalReviewOrder.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">{item.number}</p>
              <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Role snapshot
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What must still work for each common server role
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roleSnapshot.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ["Identity & Privilege", identityChecklist],
            ["Policy & Authentication", policyChecklist],
            ["Defender", defenderChecklist],
            ["Firewall", firewallChecklist],
            ["Updates & Reboots", updateChecklist],
            ["Roles & Services", serviceChecklist],
          ].map(([title, items]) => (
            <div
              key={title as string}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <div className="mt-5 grid gap-3">
                {(items as string[]).map((item, index) => (
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
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            ["File Shares", shareChecklist],
            ["Remote Administration", remoteChecklist],
            ["DNS", dnsChecklist],
            ["DHCP", dhcpChecklist],
            ["Tasks & Persistence", persistenceChecklist],
            ["Event Logs", eventChecklist],
          ].map(([title, items]) => (
            <div
              key={title as string}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <div className="mt-5 grid gap-3">
                {(items as string[]).map((item, index) => (
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
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell final baseline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Fast read-only checks before you stop
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {powershellBaseline.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
              Fix now
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              High-confidence findings with clear impact
            </h2>
            <div className="mt-6 grid gap-4">
              {mustFix.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Investigate before changing
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Low-confidence findings with possible dependencies
            </h2>
            <div className="mt-6 grid gap-4">
              {investigateLater.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Client-side verification
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Prove the server works from the outside
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clientVerification.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.test}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final evidence packet
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What your team should be able to explain
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalEvidence.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Stop conditions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When to stop hardening and protect stability
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stopConditions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional final-review lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish DC-PRACTICE
          </h2>
          <div className="mt-8 grid gap-4">
            {finalLab.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common final-review mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Avoid creating a new problem at the finish line
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Reflection
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Final reasoning check
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {reflection.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Question {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Windows Server pathway complete
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            All 18 Windows Server lessons are now covered
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The next step is to connect the Windows Server hub and all lesson
            navigation, verify every route in the browser, then run the
            production build before committing the section.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/powershell-server-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
