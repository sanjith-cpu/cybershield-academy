import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mission = [
  "This fictional final simulation combines Windows 11, Windows Server, Linux, Cisco, and forensics in one authorized competition-style environment.",
  "Read the mission before changing anything. Required services and approved access must remain available.",
  "Preserve evidence before changing accounts, processes, services, scheduled activity, network policy, or suspicious files.",
  "Do not execute unknown files or intentionally trigger suspicious artifacts.",
  "Prioritize active risk, privilege, persistence, and cross-system impact before lower-risk hardening.",
  "Make one narrow change at a time and immediately verify the exact condition you intended to fix.",
  "Keep a shared evidence notebook with timestamps, commands, findings, changes, and verification results.",
  "The objective is secure, mission-preserving operation, not maximum lockdown.",
];

const systems = [
  ["WIN11-OPS", "Windows 11 operations workstation", "Defender, Firewall, Windows Update, approved users, normal workstation functionality", "RDP is not required; only approved admins should be elevated."],
  ["SRV-FILES", "Windows Server file server", "SMB file sharing, approved admin access, required roles, healthy services", "Do not break the MediaProjects share or approved administrator access."],
  ["UBU-DEV", "Ubuntu development workstation", "Approved users, development tools, package-management health, host firewall", "SSH is not required; priya may use sudo; alex should remain standard."],
  ["SW1 + R1", "Cisco switching and inter-VLAN routing", "VLAN 10 STAFF, VLAN 20 STUDENTS, VLAN 99 MANAGEMENT, routing, approved management", "Do not erase configurations or interrupt uplinks while troubleshooting."],
  ["CASE-FILES", "Prepared forensic evidence set", "Hashes, timestamps, paths, logs, and notes preserved", "Never execute the unknown sample in the fictional case."],
];

const timePlan = [
  ["0-10 min", "Read, assign, inventory", ["Read the mission before configuration changes.", "Assign one primary owner per platform.", "Record systems, approved users, required services, and network roles.", "Mark obvious high-risk findings without deep-diving yet."]],
  ["10-30 min", "Baseline and preserve", ["Capture privilege, services, listeners, shares, VLANs, routes, and security state.", "Record hashes and metadata where relevant.", "Identify direct conflicts with the mission.", "Do not remediate until the finding is understood."]],
  ["30-70 min", "High-impact remediation", ["Prioritize active suspicious execution, privilege abuse, broken required paths, and disabled security controls.", "Make one narrow change at a time.", "Re-run the exact risky or failed check after each change.", "Keep required services available."]],
  ["70-95 min", "Deep review and correlation", ["Review persistence, authentication, schedules, remote access, ACLs, and logs.", "Correlate cross-system evidence.", "Handle medium-priority hardening after high-risk findings stabilize."]],
  ["95-110 min", "Verification sweep", ["Re-check mission-critical services.", "Confirm no required account or service was removed.", "Verify host and network security controls remain enabled.", "Confirm required reachability and management restrictions."]],
  ["110-120 min", "Final review", ["Review notes for unverified changes.", "Check startup persistence and scheduled activity again.", "Save network configuration only after verification.", "Avoid risky last-minute changes without strong evidence."]],
];

const checks: Record<string, [string, string[], string][]> = {
  windows: [
    ["Accounts and privilege", ["Get-LocalUser", "Get-LocalGroupMember Administrators"], "Compare every privileged identity with the mission roster."],
    ["Defender and Firewall", ["Get-MpComputerStatus", "Get-NetFirewallProfile"], "Confirm core host protections are enabled and healthy."],
    ["Services and persistence", ["Get-Service | Sort-Object Status,Name", "Get-ScheduledTask"], "Look for unneeded remote access, suspicious startup behavior, and recently added services."],
    ["Processes and networking", ["Get-Process | Sort-Object ProcessName", "Get-NetTCPConnection | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,OwningProcess"], "Prioritize unknown processes with active listeners or outbound connections."],
  ],
  server: [
    ["Administrators and identity", ["Get-LocalGroupMember Administrators", "Get-ADGroupMember \"Domain Admins\" -ErrorAction SilentlyContinue"], "Verify privileged identities before changing local or domain access."],
    ["Roles, shares, and sessions", ["Get-WindowsFeature | Where-Object {$_.InstallState -eq 'Installed'}", "Get-SmbShare", "Get-SmbSession"], "Protect required file sharing while identifying unexpected shares or sessions."],
    ["Services and installs", ["Get-Service | Sort-Object Status,Name", "Get-WinEvent -FilterHashtable @{LogName=\"System\"; Id=7045} -MaxEvents 60"], "Correlate newly installed services with executable paths and timing."],
  ],
  linux: [
    ["Users and sudo", ["getent passwd", "getent group sudo", "sudo -l -U alex", "sudo -l -U priya"], "Compare effective privilege with the mission."],
    ["Services and listeners", ["systemctl --type=service --state=running", "ss -tulpn"], "Match every listener to a required service or investigated finding."],
    ["Schedules and authentication", ["crontab -l", "sudo crontab -l", "systemctl list-timers --all", "sudo grep -Ei \"accepted|failed|sudo\" /var/log/auth.log 2>/dev/null | tail -n 120"], "Distinguish approved maintenance from unexpected recurring execution."],
  ],
  cisco: [
    ["Interfaces and VLANs", ["show interfaces status", "show vlan brief"], "Verify access ports, VLAN existence, and obvious err-disabled or disconnected links."],
    ["Trunks and routing", ["show interfaces trunk", "show ip interface brief", "show ip route", "show ip arp"], "Confirm required VLANs cross the uplink and routed networks are present."],
    ["ACLs and management", ["show ip access-lists", "show running-config | section line vty", "show ip ssh"], "Review ACL order, hit counts, VTY restrictions, and SSH management."],
    ["Port security and logs", ["show port-security", "show interfaces status err-disabled", "show logging"], "Correlate access-port events with endpoint findings."],
  ],
  forensics: [
    ["Hash evidence", ["Get-FileHash <evidence-file> -Algorithm SHA256", "sha256sum <evidence-file>"], "Record stable identifiers before analysis or containment."],
    ["Metadata", ["Get-Item <evidence-file> | Format-List Name,Length,CreationTime,LastWriteTime,FullName", "stat <evidence-file>"], "Record paths, ownership, size, and timestamps without altering content."],
    ["Timeline correlation", ["Review authentication events", "Review process-creation events", "Review scheduled tasks or timers", "Review network-to-process mappings"], "Build conclusions from multiple independent artifacts."],
  ],
};

const evidence = [
  ["E01", "WIN11-OPS", "High", "support-temp is in Administrators but is not on the mission roster.", "What evidence should be preserved before changing the account?"],
  ["E02", "WIN11-OPS", "High", "updater-helper.exe runs from Downloads and owns an outbound connection to a fictional external endpoint.", "Which process, file, and network details should be recorded before containment?"],
  ["E03", "SRV-FILES", "High", "FileIndexHelper was installed from C:\\Temp\\fileindex.exe shortly after a privileged logon sourced from WIN11-OPS.", "What would strengthen or weaken the hypothesis that these events are related?"],
  ["E04", "SRV-FILES", "Required", "The MediaProjects SMB share is active with approved users connected.", "Why should this remain untouched unless another finding directly affects it?"],
  ["E05", "UBU-DEV", "Medium", "SSH is enabled and listening on TCP 22 although the mission says SSH is not required.", "What should be checked before disabling it?"],
  ["E06", "UBU-DEV", "High", "alex has unrestricted sudo and a NOPASSWD rule despite being designated a standard user.", "Which privilege settings conflict with the mission, and how would you verify the correction?"],
  ["E07", "SW1", "High", "Gi0/1 is trunking, but VLAN 20 is missing from the allowed VLAN list. VLANs 10 and 99 are present.", "Which users are most likely affected, and what is the narrowest safe correction?"],
  ["E08", "R1", "Required", "Subinterfaces for VLANs 10, 20, and 99 are all up/up with expected gateway addresses.", "Why does this argue against rebuilding the router configuration?"],
  ["E09", "SW1", "Medium", "VTY access permits both Telnet and SSH, while the mission requires secure management and SSH is operational.", "What narrow change would reduce exposure while preserving administration?"],
  ["E10", "CASE-FILES", "High", "Browser history, file metadata, process creation, and a scheduled task all reference the same fictional update-tool artifact.", "How would you organize these into a defensible timeline?"],
  ["E11", "CASE-FILES", "High", "A process ID tied to the suspicious executable also owns an outbound connection.", "Why is process-to-network correlation stronger than an IP address alone?"],
  ["E12", "Cross-system", "High", "A privileged SRV-FILES logon occurred within minutes of support-temp activity on WIN11-OPS, but no direct proof identifies the exact action taken.", "What is confirmed, and what must remain a hypothesis?"],
];

const roles = [
  ["Windows lead", "WIN11-OPS baseline, privilege, Defender, Firewall, services, tasks, processes, and authentication evidence."],
  ["Server lead", "SRV-FILES identities, roles, SMB, services, logs, and required-service verification."],
  ["Linux lead", "UBU-DEV users, sudo, services, sockets, schedules, logs, firewall, and package review."],
  ["Network lead", "SW1/R1 interfaces, VLANs, trunks, routing, ACLs, VTY, SSH, port security, and configuration verification."],
  ["Forensics / coordinator", "Evidence notebook, hashes, cross-system correlation, timeline reconstruction, change log, and final verification tracking."],
];

const changeRules = [
  "State the problem before changing anything.",
  "Record the evidence supporting the change.",
  "Choose the smallest change that satisfies the mission.",
  "Make one meaningful change at a time.",
  "Immediately re-run the exact check that revealed the issue.",
  "Confirm required services still work.",
  "Record the result before moving on.",
  "If verification fails, investigate before stacking more changes.",
];

const verify = [
  ["WIN11-OPS", ["Approved users only", "Correct Administrators membership", "Defender healthy", "Firewall enabled", "No verified suspicious process or persistence", "Required workstation functionality intact"]],
  ["SRV-FILES", ["Approved administrators only", "Required roles intact", "MediaProjects share available", "Approved SMB sessions possible", "Suspicious service contained if confirmed", "Event logs still available"]],
  ["UBU-DEV", ["Approved users only", "alex standard privilege", "priya approved sudo", "SSH state matches mission", "Firewall active", "Required development services intact"]],
  ["SW1 + R1", ["VLAN 10 available", "VLAN 20 available", "VLAN 99 available", "Trunk carries required VLANs", "Inter-VLAN routing works", "Management limited to approved path"]],
  ["CASE-FILES", ["Hashes recorded", "Original artifacts preserved", "Timeline separates facts from inference", "Execution evidence identified", "Persistence evidence identified", "Cross-system claims supported by evidence"]],
];

const debrief = [
  "Which finding did you prioritize first, and what evidence justified that choice?",
  "Which finding looked serious at first but was mission-required or lower priority?",
  "Which change had the greatest risk of breaking required functionality?",
  "What cross-system evidence suggested the Windows workstation and server might be related?",
  "What evidence prevented you from overreacting to the Linux SSH finding?",
  "Why was the missing VLAN 20 trunk allowance more important than rebuilding router subinterfaces?",
  "Which forensic artifact most strongly proved execution rather than file presence?",
  "Where did you separate a confirmed fact from a hypothesis?",
  "Which verification check could have caught accidental breakage?",
  "If you had ten more minutes, what would you investigate next and why?",
];

const complete = [
  "I read the mission before making changes.",
  "I documented required services and approved users for every platform.",
  "I preserved evidence before remediation.",
  "I prioritized active risk, privilege, and propagation over cosmetic hardening.",
  "I made narrow changes supported by evidence.",
  "I kept required Windows, Server, Linux, and network services available.",
  "I correlated related findings across systems.",
  "I documented facts separately from hypotheses.",
  "I re-ran the exact checks that revealed each major issue.",
  "I completed a final cross-platform verification sweep.",
  "I saved network configuration only after verification.",
  "I can explain every major change and why it was necessary.",
];

function Heading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function CommandGrid({ items }: { items: [string, string[], string][] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {items.map(([title, commands, focus]) => (
        <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <h3 className="text-xl font-black text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{focus}</p>
          <div className="mt-5 grid gap-3">
            {commands.map((command) => (
              <pre key={command} className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">{command}</pre>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FullCompetitionSimulationLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/practice-labs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Practice Labs</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <Link href="/cyberpatriot/practice-labs/mixed-system-incident-triage" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Lab</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Practice Lab &middot; 12 &middot; Final Challenge</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Full Competition Simulation</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Run a timed multi-platform defensive simulation combining Windows 11, Windows Server, Linux, Cisco, and forensics into one coordinated exercise.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">There is no direct answer key. Prioritize, investigate, remediate, and verify from the evidence provided.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Simulation Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                {[["Difficulty", "Challenge"], ["Suggested time", "120 minutes"], ["Platforms", "5 areas"], ["Core skill", "Competition execution"]].map(([a,b], i) => (
                  <div key={a} className={`flex items-center justify-between gap-6 ${i < 3 ? "border-b border-slate-800 pb-3" : ""}`}><span>{a}</span><span className="font-bold text-white">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Final mission</p>
          <h2 className="mt-3 text-3xl font-black text-white">Secure the environment without destroying the mission</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {mission.map((item, i) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(i + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Environment" title="Know what must survive the simulation" /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{systems.map(([name, role, required, caution]) => <div key={name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{name}</p><h3 className="mt-2 text-lg font-black text-white">{role}</h3><p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-emerald-300">Required</p><p className="mt-2 text-sm leading-7 text-slate-300">{required}</p><p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-yellow-200">Caution</p><p className="mt-2 text-sm leading-7 text-slate-400">{caution}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Time plan" title="Use the clock strategically" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{timePlan.map(([window,title,actions]) => <div key={window as string} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-sm font-black text-cyan-300">{window}</p><h3 className="mt-3 text-lg font-black text-white">{title}</h3><div className="mt-4 grid gap-2">{(actions as string[]).map(a => <div key={a} className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-6 text-slate-300">{a}</div>)}</div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Team coordination" title="Give every system an owner" /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{roles.map(([role,owns]) => <div key={role} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-white">{role}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{owns}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Windows 11" title="Baseline the workstation quickly but carefully" /><CommandGrid items={checks.windows} /></div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Windows Server" title="Protect required server functionality while reviewing privilege and services" /><CommandGrid items={checks.server} /></div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Linux" title="Check privilege, listeners, persistence, and logs" /><CommandGrid items={checks.linux} /></div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Cisco" title="Keep connectivity while validating security and segmentation" /><CommandGrid items={checks.cisco} /></div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Forensics" title="Preserve and correlate instead of executing unknown content" /><CommandGrid items={checks.forensics} /></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Fictional evidence set" title="Decide what matters, what is related, and what must remain available" /><div className="mt-8 grid gap-4 md:grid-cols-2">{evidence.map(([id,system,severity,observation,prompt]) => <div key={id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><div className="flex flex-wrap items-center justify-between gap-3"><span className="font-black text-cyan-300">{id}</span><div className="flex gap-2"><span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">{system}</span><span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">{severity}</span></div></div><p className="mt-4 text-sm leading-7 text-slate-300">{observation}</p><div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">Competition prompt</p><p className="mt-2 text-sm leading-6 text-slate-300">{prompt}</p></div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Change control</p><h2 className="mt-3 text-3xl font-black text-white">Use the same discipline for every fix</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{changeRules.map((item,i) => <div key={item} className="flex gap-4 rounded-xl border border-yellow-400/15 bg-slate-950/50 p-4"><span className="font-black text-yellow-200">{String(i+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Final verification matrix" title="Do not stop at 'the command worked'" description="A completed competition fix must satisfy the security goal and preserve the mission." /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{verify.map(([system,items]) => <div key={system as string} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-xl font-black text-white">{system}</h3><div className="mt-4 grid gap-2">{(items as string[]).map(item => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-6 text-slate-300">{item}</div>)}</div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><Heading label="Debrief" title="Explain your competition decisions" /><div className="mt-8 grid gap-3 md:grid-cols-2">{debrief.map((q,i) => <div key={q} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">Q{String(i+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{q}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"><div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Simulation complete</p><h2 className="mt-3 text-3xl font-black text-white">Finish only after the entire environment is re-verified</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{complete.map((item,i) => <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(i+1).padStart(2,"0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8"><div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8"><div className="flex flex-wrap gap-3"><Link href="/cyberpatriot/practice-labs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Practice Labs</Link><Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link></div><Link href="/cyberpatriot/practice-labs/mixed-system-incident-triage" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Lab</Link></div></section>

      <Footer />
    </main>
  );
}
