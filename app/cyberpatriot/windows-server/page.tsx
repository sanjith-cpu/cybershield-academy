import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serverLessons = [
  {
    number: "01",
    href: "/cyberpatriot/windows-server/competition-workflow",
    title: "Windows Server Competition Workflow",
    focus:
      "Build a safe server-first competition workflow that protects required roles, services, users, and network functions.",
    lab:
      "Review a fictional server scenario, identify required roles, define a baseline, and build a prioritized action plan.",
  },
  {
    number: "02",
    href: "/cyberpatriot/windows-server/server-manager-role-inventory",
    title: "Server Manager & Role Inventory",
    focus:
      "Use Server Manager and administrative tools to understand installed roles, features, services, and server responsibilities.",
    lab:
      "Inventory a fictional server and classify each role as required, unnecessary, or investigate.",
  },
  {
    number: "03",
    href: "/cyberpatriot/windows-server/local-users-groups-privilege",
    title: "Local Users, Groups & Privilege",
    focus:
      "Review local accounts, administrators, service identities, and privilege without disrupting required server functions.",
    lab:
      "Compare a fictional local account list with scenario authorization and preserve service-account dependencies.",
  },
  {
    number: "04",
    href: "/cyberpatriot/windows-server/active-directory-users-computers",
    title: "Active Directory Users & Computers",
    focus:
      "Review domain users, groups, computers, administrative membership, disabled accounts, and account properties when AD DS is present.",
    lab:
      "Audit a fictional domain and identify unnecessary privilege while preserving required identities.",
  },
  {
    number: "05",
    href: "/cyberpatriot/windows-server/group-policy-management",
    title: "Group Policy Management",
    focus:
      "Understand local versus domain policy, GPO scope, inheritance, precedence, and safe security-policy review.",
    lab:
      "Trace a fictional security setting through Group Policy before deciding where it should be changed.",
  },
  {
    number: "06",
    href: "/cyberpatriot/windows-server/password-lockout-account-policies",
    title: "Password, Lockout & Account Policies",
    focus:
      "Review local and domain password requirements, account lockout behavior, and authentication policy without using one-size-fits-all values.",
    lab:
      "Compare fictional scenario requirements with the effective account-policy configuration.",
  },
  {
    number: "07",
    href: "/cyberpatriot/windows-server/microsoft-defender-antivirus",
    title: "Microsoft Defender Antivirus",
    focus:
      "Review Defender health, protection settings, exclusions, detections, and security intelligence on Windows Server.",
    lab:
      "Investigate a fictional Defender exclusion and detection while preserving evidence.",
  },
  {
    number: "08",
    href: "/cyberpatriot/windows-server/windows-defender-firewall",
    title: "Windows Defender Firewall",
    focus:
      "Protect server network exposure without breaking required roles such as DNS, DHCP, file sharing, or remote administration.",
    lab:
      "Review fictional inbound rules and narrow exposure around required server services.",
  },
  {
    number: "09",
    href: "/cyberpatriot/windows-server/windows-update-patch-management",
    title: "Windows Update & Patch Management",
    focus:
      "Evaluate update state, restart requirements, servicing risk, and verification for systems that may host critical roles.",
    lab:
      "Plan safe update sequencing for a fictional server with required services.",
  },
  {
    number: "10",
    href: "/cyberpatriot/windows-server/roles-features-required-services",
    title: "Roles, Features & Required Services",
    focus:
      "Understand how Windows Server roles, features, and dependent services fit together before disabling or removing anything.",
    lab:
      "Map dependencies for fictional DNS, DHCP, AD DS, and file-service requirements.",
  },
  {
    number: "11",
    href: "/cyberpatriot/windows-server/file-shares-ntfs-smb-permissions",
    title: "File Shares, NTFS & SMB Permissions",
    focus:
      "Review shared folders, NTFS permissions, share permissions, ownership, inheritance, SMB exposure, and least privilege.",
    lab:
      "Secure a fictional department share while keeping required users and service accounts functional.",
  },
  {
    number: "12",
    href: "/cyberpatriot/windows-server/rdp-winrm-remote-administration",
    title: "RDP, WinRM & Remote Administration",
    focus:
      "Review remote administrative access, authorized users, firewall scope, Remote Desktop Services, WinRM, and management exposure.",
    lab:
      "Reduce unnecessary remote access while preserving the scenario-required administration path.",
  },
  {
    number: "13",
    href: "/cyberpatriot/windows-server/dns-server-security-review",
    title: "DNS Server Security Review",
    focus:
      "Review DNS zones, forwarders, recursion, dynamic updates, records, permissions, and service health when DNS is required.",
    lab:
      "Investigate a fictional DNS server while protecting name resolution for required clients.",
  },
  {
    number: "14",
    href: "/cyberpatriot/windows-server/dhcp-server-security-review",
    title: "DHCP Server Security Review",
    focus:
      "Review DHCP scopes, exclusions, reservations, options, authorization, leases, and service availability when DHCP is required.",
    lab:
      "Audit a fictional DHCP configuration and protect required address assignment.",
  },
  {
    number: "15",
    href: "/cyberpatriot/windows-server/scheduled-tasks-persistence-review",
    title: "Scheduled Tasks & Persistence Review",
    focus:
      "Inspect server scheduled tasks, triggers, actions, service accounts, unusual paths, and other persistence clues.",
    lab:
      "Preserve and classify a fictional high-privilege scheduled task before remediation.",
  },
  {
    number: "16",
    href: "/cyberpatriot/windows-server/event-viewer-server-logs",
    title: "Event Viewer & Server Logs",
    focus:
      "Use Security, System, Application, role-specific, and operational logs to troubleshoot services and build evidence-based timelines.",
    lab:
      "Correlate fictional domain, service, remote-access, and system events around a known incident window.",
  },
  {
    number: "17",
    href: "/cyberpatriot/windows-server/powershell-server-administration",
    title: "PowerShell for Server Administration",
    focus:
      "Use inspection-first PowerShell for role inventory, AD review, services, firewall, logs, shares, and verification.",
    lab:
      "Build a repeatable read-only server inventory and verify one controlled change.",
  },
  {
    number: "18",
    href: "/cyberpatriot/windows-server/final-review-checklist",
    title: "Windows Server Final Review Checklist",
    focus:
      "Bring identity, roles, policy, protection, networking, evidence, and required services into one final verified server state.",
    lab:
      "Complete a fictional end-of-round server review and document unresolved investigate items.",
  },
];

const workflow = [
  { step: "01", title: "Read the scenario", text: "Identify the server's required role before touching accounts, services, firewall rules, roles, or policies." },
  { step: "02", title: "Inventory the server", text: "Record installed roles, features, services, domain status, local/domain accounts, network functions, shares, and remote-management requirements." },
  { step: "03", title: "Protect dependencies", text: "Map what DNS, DHCP, AD DS, file services, applications, and remote management depend on before making high-impact changes." },
  { step: "04", title: "Harden deliberately", text: "Fix confirmed weaknesses using the narrowest change that satisfies the scenario and preserves required functionality." },
  { step: "05", title: "Verify continuously", text: "Re-test roles, clients, authentication, shares, remote management, logs, and security controls after meaningful changes." },
];

const priorityZones = [
  { title: "Identity & Directory", text: "Local accounts, domain users, groups, privileged membership, service identities, password policy, and Group Policy." },
  { title: "Server Roles", text: "AD DS, DNS, DHCP, file services, installed features, dependent services, and role-specific configuration." },
  { title: "Protection", text: "Defender, firewall, updates, remote administration, least privilege, and unnecessary exposure." },
  { title: "Evidence & Verification", text: "Event logs, scheduled tasks, Defender history, PowerShell inventory, change tracking, and end-to-end service testing." },
];

const principles = [
  { title: "Server role comes first", text: "A domain controller, DNS server, DHCP server, and file server cannot be hardened as if they were ordinary workstations." },
  { title: "Scenario before checklist", text: "Required services and users must survive every security change." },
  { title: "Dependencies before disable", text: "A service that looks unnecessary may support a critical role or application." },
  { title: "Inspect before automate", text: "Use read-only tools and commands before applying scripts or bulk changes." },
  { title: "Evidence before remediation", text: "Preserve logs, task details, account state, Defender findings, and other forensic clues before cleanup." },
  { title: "Verify from the client perspective", text: "A role is not truly verified until the users or systems that depend on it can still use it." },
];

const evidencePreview = [
  "Server name: DC-PRACTICE",
  "Role: Domain controller with DNS",
  "Required function: domain authentication and name resolution",
  "Required remote access: RDP for Morgan only",
  "Required share: \\DC-PRACTICE\TeamDocs",
  "Forensic clue: unknown scheduled task ran under a privileged account",
  "Important boundary: preserve evidence before changing the task",
];

export default function WindowsServerHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">← CyberPatriot Hub</Link>
          <Link href="/cyberpatriot/competition-strategy" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Competition Strategy</Link>
          <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Windows 11</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">CyberPatriot Training Hub · Windows Server</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Windows Server</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Learn to secure Windows Server without breaking the roles, services, authentication, networking, and remote management the scenario requires.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">Windows Server requires a different mindset from a workstation. Before hardening, identify what the server is responsible for, what depends on it, and how you will verify that those functions still work after each change.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Pathway Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Lessons</span><span className="font-bold text-white">18</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Core workflow</span><span className="font-bold text-white">5 stages</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Environment</span><span className="font-bold text-white">Windows Server</span></div>
                <div className="flex items-center justify-between gap-6"><span>Approach</span><span className="font-bold text-white">Role-aware defense</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Main question</p>
            <h2 className="mt-3 text-3xl font-black text-white">How do you harden a server without breaking what the network depends on?</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">Server security is dependency-aware. A domain controller, DNS server, DHCP server, file server, or application server may be essential to many other systems. Before disabling an account, service, port, role, or feature, understand the function and the consequences.</p>
          </div>
          <div className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Safety boundary</p>
            <h2 className="mt-3 text-2xl font-black text-white">Train the skill, not the live answer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">These lessons teach defensive Windows Server administration in fictional or authorized practice environments. Always follow the scenario and preserve required services instead of applying a generic hardening checklist blindly.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Overall server workflow</p>
        <h2 className="mt-2 text-3xl font-black text-white">Five stages for safe server hardening</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {workflow.map((item) => (
            <article key={item.step} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm font-black text-cyan-300">{item.step}</p>
              <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Priority zones</p>
        <h2 className="mt-2 text-3xl font-black text-white">What you are protecting</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {priorityZones.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Complete pathway
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Windows Server Lessons
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Lessons move from server workflow, identity, and policy into
            protection, roles, network services, evidence, administration, and
            final review.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serverLessons.map((lesson) => (
            <Link
              key={lesson.number}
              href={lesson.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-cyan-300">
                  Lesson {lesson.number}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-400">
                  Windows Server
                </span>
              </div>

              <h3 className="mt-4 text-xl font-black text-white">
                {lesson.title}
              </h3>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {lesson.focus}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Defensive lab
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {lesson.lab}
                </p>
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition group-hover:border-cyan-300/50">
                  Open Lesson →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Server evidence preview</p>
            <h2 className="mt-3 text-2xl font-black text-white">Fictional practice environment</h2>
            <div className="mt-5 grid gap-3">
              {evidencePreview.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Server principles</p>
            <h2 className="mt-3 text-2xl font-black text-white">Six rules to carry through the pathway</h2>
            <div className="mt-5 grid gap-3">
              {principles.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Start here</p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Lesson 01 — Windows Server Competition Workflow</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Begin by learning how to identify the server's job, preserve required roles, establish a baseline, prioritize risk, and verify every meaningful change.</p>
            </div>
            <Link
              href="/cyberpatriot/windows-server/competition-workflow"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 01 &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
