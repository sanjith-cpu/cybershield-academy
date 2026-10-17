import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialLinks = [
  {
    title: "Active Directory Domain Services overview",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
    description:
      "Microsoft's overview of AD DS, directory objects, domains, forests, and how directory services organize identity information.",
  },
  {
    title: "Install Active Directory Domain Services",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-",
    description:
      "Official Server Manager and PowerShell guidance for installing AD DS on supported Windows Server releases.",
  },
  {
    title: "Best practices for securing Active Directory",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory",
    description:
      "Microsoft guidance on privilege, attack-surface reduction, monitoring, secure administration, and recovery planning.",
  },
  {
    title: "Reducing the Active Directory attack surface",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/reducing-the-active-directory-attack-surface",
    description:
      "A focused Microsoft reference for least privilege, privileged accounts, secure administrative hosts, and reducing exposure.",
  },
  {
    title: "Monitoring Active Directory for signs of compromise",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/Monitoring-Active-Directory-for-Signs-of-Compromise",
    description:
      "Useful background for audit policy, event monitoring, and understanding evidence in an AD environment.",
  },
  {
    title: "DNS and Active Directory Domain Services",
    href: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/dns-and-ad-ds",
    description:
      "Explains why DNS is fundamental to domain-controller discovery and communication inside Active Directory.",
  },
];

const studyAreas = [
  { title: "Roles & Features", items: ["Know what AD DS, DNS, DHCP, File Services, and other common server roles do.", "Understand that a role can be mission-critical even when it looks unfamiliar.", "Check role dependencies before removing or disabling components.", "Use Server Manager and PowerShell as complementary administration tools."] },
  { title: "Users & Groups", items: ["Distinguish local accounts from domain accounts.", "Review membership in Administrators, Domain Admins, Enterprise Admins, and other privileged groups carefully.", "Treat service accounts differently from ordinary interactive users.", "Use least privilege instead of broad administrator membership."] },
  { title: "Active Directory Structure", items: ["Understand forests, domains, organizational units, users, groups, and computers.", "Know that AD objects live inside a hierarchical directory.", "Recognize that group membership can provide effective privilege indirectly.", "Avoid broad object changes without understanding scope."] },
  { title: "Group Policy", items: ["Understand that GPOs can affect many systems at once.", "Identify whether a setting is local or domain-controlled before changing it.", "Treat broad GPO edits as high-impact changes.", "Verify policy results after making any authorized change."] },
  { title: "DNS & Name Resolution", items: ["Remember that AD DS depends heavily on DNS.", "Domain clients use DNS to locate domain controllers and services.", "A DNS mistake can look like an authentication, replication, or connectivity problem.", "Check DNS before making unrelated security changes when domain functions fail."] },
  { title: "Shares & Permissions", items: ["Understand both share permissions and NTFS permissions.", "Review effective access instead of only one permission layer.", "Preserve required shares and business functions.", "Avoid broad permission resets unless the mission clearly supports them."] },
];

const competitionUse = [
  { title: "When a privileged account looks suspicious", steps: ["Confirm whether the account is approved by the scenario.", "Check direct and indirect privileged-group membership.", "Determine whether the identity is a service or automation account.", "Preserve relevant account-change evidence.", "Make the narrowest justified change and verify required administration still works."] },
  { title: "When a server role looks unnecessary", steps: ["Identify what role or feature is installed.", "Determine whether the scenario or another required service depends on it.", "Check current service state and recent evidence.", "Do not remove the role simply because it is unfamiliar.", "If a change is justified, verify the mission function afterward."] },
  { title: "When domain authentication fails", steps: ["Check basic network reachability.", "Check DNS configuration and name resolution.", "Confirm domain-controller services are healthy.", "Review authentication and system logs.", "Avoid unrelated account or policy changes until the dependency chain is understood."] },
  { title: "When share access is wrong", steps: ["Identify the required share and approved users.", "Review share permissions.", "Review NTFS permissions.", "Check group membership that affects effective access.", "Test the expected user path after any change."] },
];

const quickReferences = [
  { title: "Identity", items: ["Local Users and Groups", "Active Directory Users and Computers", "Privileged group membership", "Service accounts", "Account status and recent changes"] },
  { title: "Services", items: ["Server Manager", "Services console", "PowerShell Get-Service", "Role and feature inventory", "Required application dependencies"] },
  { title: "Policy", items: ["Local Security Policy", "Group Policy Management", "gpresult", "Audit policy", "Security baseline references"] },
  { title: "Network", items: ["DNS settings", "IP configuration", "Firewall rules", "RDP and WinRM", "Required listening services"] },
  { title: "Evidence", items: ["Event Viewer", "Security log", "System log", "Service-install events", "Account and group-change events"] },
];

const eventReferences = [
  ["4624", "Successful logon"], ["4625", "Failed logon"], ["4672", "Special privileges assigned to a new logon"], ["4720", "User account created"], ["4722", "User account enabled"], ["4725", "User account disabled"], ["4728", "Member added to a global security group"], ["4732", "Member added to a local security group"], ["5140", "Network share accessed"], ["7045", "Service installed"],
];

const weakVsBetter = [
  { weak: "Remove unfamiliar domain accounts immediately.", better: "Classify the identity, review scenario authorization, privilege, dependencies, and evidence before changing it." },
  { weak: "Disable server roles that are not obviously needed.", better: "Identify the role's mission purpose and dependencies before changing the server." },
  { weak: "Fix domain logon problems by resetting accounts first.", better: "Check network and DNS dependencies before assuming the account itself is the problem." },
  { weak: "Use Domain Admin for convenience.", better: "Apply least privilege and protect highly privileged accounts from unnecessary everyday use." },
  { weak: "Change a GPO because one machine has the wrong setting.", better: "Confirm whether the issue is local or domain-wide and understand the GPO's scope before editing it." },
  { weak: "Only check share permissions when access is wrong.", better: "Review both share and NTFS permissions plus group membership to understand effective access." },
];

const finalChecklist = [
  "Use Microsoft Learn as the primary Windows Server and AD reference.",
  "Understand the role of AD DS before changing directory objects.",
  "Treat Domain Admins, Enterprise Admins, and Administrators as highly sensitive groups.",
  "Use least privilege for routine administration.",
  "Preserve required server roles and services.",
  "Check DNS when domain services or authentication behave unexpectedly.",
  "Review both share and NTFS permissions.",
  "Treat broad Group Policy changes as high impact.",
  "Use Event Viewer and audit evidence to support conclusions.",
  "Protect service accounts and understand their dependencies.",
  "Verify required domain functionality after meaningful changes.",
  "Use documentation to learn concepts, not to justify a change that conflicts with the competition scenario.",
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string; }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export default function WindowsServerActiveDirectoryResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Resources</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources/windows-11-microsoft-learn" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Resource</Link>
            <Link href="/cyberpatriot/resources/linux-ubuntu-mint" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">CyberPatriot Resources &middot; Resource 03</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Windows Server &amp; Active Directory</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use Microsoft Learn to understand Windows Server roles, Active Directory Domain Services, privileged identities, DNS, Group Policy, shares, auditing, and secure administration.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">In competition work, documentation should help you understand what a component does and what depends on it before you make a change. The scenario still determines what must remain enabled, authorized, and functional.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Resource Goal</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Primary source</span><span className="font-bold text-white">Microsoft Learn</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Core identity</span><span className="font-bold text-white">AD DS</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Key dependency</span><span className="font-bold text-white">DNS</span></div>
                <div className="flex items-center justify-between gap-6"><span>Security model</span><span className="font-bold text-white">Least privilege</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Server resource rule</p>
          <h2 className="mt-3 text-3xl font-black text-white">Understand the dependency before changing the server</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">A server role, domain account, DNS setting, share, or GPO can affect many other systems. Use documentation to identify purpose and scope, then make only mission-compatible, evidence-backed changes.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Official Microsoft references" title="Start with the documentation maintained by Microsoft" description="These references are useful for learning architecture, role dependencies, identity security, DNS, and evidence sources." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {officialLinks.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                <p className="mt-4 text-sm font-bold text-cyan-300">Open Microsoft Learn &rarr;</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="What to study" title="Focus on the concepts that affect competition decisions" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {studyAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-xl font-black text-white">{area.title}</h3>
                <div className="mt-4 grid gap-2">{area.items.map((item) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300">{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Competition use</p>
          <h2 className="mt-3 text-3xl font-black text-white">Use the documentation to answer the question behind the finding</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {competitionUse.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <div className="mt-4 grid gap-2">{item.steps.map((step, index) => <div key={step} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3"><span className="font-black text-cyan-300">{index + 1}</span><p className="text-sm leading-6 text-slate-300">{step}</p></div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Quick reference map" title="Know where to look when you need evidence" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {quickReferences.map((area) => (
              <div key={area.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{area.title}</h3>
                <div className="mt-4 grid gap-2">{area.items.map((item) => <div key={item} className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs leading-5 text-slate-300">{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading label="Event IDs" title="Useful Windows Server evidence references" description="Event IDs are clues, not conclusions. Interpret them with the account, system, timestamp, scenario, and surrounding events." />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {eventReferences.map(([eventId, meaning]) => <div key={eventId} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><p className="text-xl font-black text-cyan-300">{eventId}</p><p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Weak habit vs better habit</p>
          <h2 className="mt-3 text-3xl font-black text-white">Use documentation to improve judgment, not replace it</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {weakVsBetter.map((item) => <div key={item.weak} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">Weak habit</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.weak}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">Better habit</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.better}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Windows Server resource checklist</p>
          <h2 className="mt-3 text-3xl font-black text-white">Build a reference habit that protects mission dependencies</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"><span className="font-black text-emerald-200">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Resources</Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">CyberPatriot Hub</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/resources/windows-11-microsoft-learn" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">&larr; Previous Resource</Link>
            <Link href="/cyberpatriot/resources/linux-ubuntu-mint" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
