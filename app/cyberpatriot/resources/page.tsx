import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
  { number: "01", route: "/cyberpatriot/resources/cyberpatriot-official-resources", title: "CyberPatriot Official Resources", focus: "Competition schedule, current training materials, rules, technical specifications, challenge information, and official round guidance.", outcome: "Know which CyberPatriot sources should be checked first before relying on any secondary reference." },
  { number: "02", route: "/cyberpatriot/resources/windows-11-microsoft-learn", title: "Windows 11 & Microsoft Learn", focus: "Official Windows security documentation covering identity, Defender, Firewall, operating-system protections, auditing, and administration.", outcome: "Use Microsoft documentation to verify what a Windows security control actually does before changing it." },
  { number: "03", route: "/cyberpatriot/resources/windows-server-active-directory", title: "Windows Server & Active Directory", focus: "Windows Server security, roles, Active Directory, Group Policy, secure administration, SMB, service accounts, and auditing references.", outcome: "Research Server and AD behavior without treating a workstation hardening guide as a server playbook." },
  { number: "04", route: "/cyberpatriot/resources/linux-ubuntu-mint", title: "Linux: Ubuntu & Mint", focus: "Official Ubuntu security guidance, Linux Mint documentation, users, permissions, services, packages, SSH, firewalling, logs, and troubleshooting.", outcome: "Build Linux decisions from distribution documentation and system evidence instead of copied commands with no context." },
  { number: "05", route: "/cyberpatriot/resources/cisco-networking", title: "Cisco & Networking", focus: "Cisco training, Packet Tracer, switching, routing, VLANs, ACLs, device management, addressing, and network troubleshooting references.", outcome: "Connect networking concepts to the exact configuration and verification tasks used in practice environments." },
  { number: "06", route: "/cyberpatriot/resources/sysinternals-windows-utilities", title: "Sysinternals & Windows Utilities", focus: "Microsoft Sysinternals and built-in Windows tools for processes, services, autoruns, networking, event evidence, and system inspection.", outcome: "Choose observation tools based on the question being investigated rather than opening utilities at random." },
  { number: "07", route: "/cyberpatriot/resources/linux-commands-manual-pages", title: "Linux Commands & Manual Pages", focus: "Command references for identity, permissions, processes, services, networking, packages, files, logs, cron, systemd, and shell help.", outcome: "Use built-in help and manual pages to confirm syntax, scope, and side effects before running unfamiliar commands." },
  { number: "08", route: "/cyberpatriot/resources/wireshark-packet-analysis", title: "Wireshark & Packet Analysis", focus: "Official Wireshark documentation, display filters, packet structure, protocol analysis, capture concepts, and evidence-oriented network troubleshooting.", outcome: "Use packet analysis to answer specific network questions instead of collecting traffic without an investigation goal." },
  { number: "09", route: "/cyberpatriot/resources/forensics-evidence-references", title: "Forensics & Evidence References", focus: "Evidence preservation, hashes, metadata, logs, timelines, process context, file-system artifacts, and behavior-oriented investigation references.", outcome: "Preserve and correlate evidence before remediation changes the state you are trying to understand." },
  { number: "10", route: "/cyberpatriot/resources/nist-cisa-security-standards", title: "NIST, CISA & Security Standards", focus: "Trusted defensive references for risk, cybersecurity frameworks, secure configuration thinking, incident response, and security best practices.", outcome: "Understand the professional principles behind the technical actions used during training." },
  { number: "11", route: "/cyberpatriot/resources/practice-lab-resources", title: "Practice & Lab Resources", focus: "Safe practice environments, official training material, virtual-machine preparation, Packet Tracer practice, and structured lab planning.", outcome: "Turn references into repeated hands-on practice without using live-round answers or unauthorized material." },
  { number: "12", route: "/cyberpatriot/resources/team-templates-offline-reference-pack", title: "Team Templates & Offline Reference Pack", focus: "Change logs, evidence notes, priority boards, handoff templates, competition-day worksheets, and a compact offline reference library.", outcome: "Prepare reusable team materials before competition day so documentation and coordination do not start from scratch." },
];

const sourcePrinciples = [
  { title: "Official first", detail: "Start with CyberPatriot, Microsoft, Canonical, Linux Mint, Cisco, NIST, CISA, MITRE, Wireshark, or another authoritative project source when available." },
  { title: "Free and accessible", detail: "Prefer references the whole team can access without a paid subscription or private membership requirement." },
  { title: "Current", detail: "Check version, product, and publication context. A correct command for an older release may not describe the current platform." },
  { title: "Mission aware", detail: "A hardening recommendation is not automatically safe for every scenario. Required users, services, access paths, and applications still matter." },
  { title: "Evidence before action", detail: "Use references to understand what you observe and what a change will do, not as a substitute for inspecting the actual system." },
  { title: "Verify after use", detail: "After applying a documented change, verify both the security result and the required function." },
];

const libraryModel = [
  { label: "Competition", text: "CyberPatriot rules, schedule, training, technical requirements, and official challenge guidance." },
  { label: "Platforms", text: "Windows 11, Windows Server, Linux, Cisco, and the utilities used to inspect them." },
  { label: "Investigation", text: "Wireshark, forensics, logs, evidence, timelines, and behavior-oriented references." },
  { label: "Professional", text: "NIST, CISA, and other defensive frameworks that explain why secure practices matter." },
  { label: "Practice", text: "Safe labs and repeatable exercises that turn reading into operational skill." },
  { label: "Team", text: "Templates and offline materials that support communication, evidence, verification, and handoffs." },
];

export default function CyberPatriotResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <Link href="/cyberpatriot" className="inline-flex rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          &larr; CyberPatriot Hub
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">CyberPatriot &middot; Resources</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">CyberPatriot Resource Library</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A curated reference library for competition preparation, defensive research, platform documentation, investigation tools, practice, and team operations.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">This section is designed to teach students how to find reliable information, understand what it means, and apply it carefully. It is not a live-round answer bank.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Library Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Resource guides</span><span className="font-bold text-white">12</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Source priority</span><span className="font-bold text-white">Official first</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Use</span><span className="font-bold text-white">Research + Practice</span></div>
                <div className="flex items-center justify-between gap-6"><span>Boundary</span><span className="font-bold text-white">No live answers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Resource model</p>
          <h2 className="mt-3 text-3xl font-black text-white">Build a library that answers different kinds of questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {libraryModel.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Source discipline</p>
          <h2 className="mt-3 text-3xl font-black text-white">Six rules for using technical references well</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sourcePrinciples.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">12-resource pathway</p>
          <h2 className="mt-3 text-3xl font-black text-white">From official competition guidance to the team&apos;s own reference pack</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">All 12 resource guides are available. Open any card to use its references, defensive notes, and competition-preparation guidance.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <Link href={item.route} key={item.number} className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-cyan-300">Resource {item.number}</span>
                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Reference</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
              <div className="mt-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Focus</p><p className="mt-2 text-sm leading-7 text-slate-300">{item.focus}</p></div>
              <div className="mt-5"><p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">Outcome</p><p className="mt-2 text-sm leading-7 text-slate-400">{item.outcome}</p></div>
              <div className="mt-auto pt-5"><div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-center text-sm font-semibold text-slate-500">Open resource &rarr;</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Competition boundary</p>
          <h2 className="mt-3 text-3xl font-black text-white">Recheck the current rules before every scored round</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Resource rules, available platforms, competition timing, and challenge details can change between seasons. Use the current CyberPatriot rules and competition guidance as the authority for what is permitted during a round.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
