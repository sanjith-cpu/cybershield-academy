import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const referencePages = [
  {
    number: "01",
    title: "Windows 11 Quick Reference",
    focus: "Accounts, groups, services, firewall, updates, logs, scheduled tasks, processes, startup, and networking.",
    use: "Fast Windows workstation lookup during practice.",
    sections: ["Accounts", "Services", "Firewall", "Logs", "Processes", "Network"],
  },
  {
    number: "02",
    title: "Windows Server Quick Reference",
    focus: "Server roles, users and groups, shares, services, policies, event logs, remote access, and firewall.",
    use: "Quick checks for server images where required roles must stay available.",
    sections: ["Roles", "Accounts", "Shares", "Policies", "Logs", "Firewall"],
  },
  {
    number: "03",
    title: "Linux Quick Reference",
    focus: "Users, groups, sudo, permissions, packages, services, logs, cron, systemd timers, firewall, processes, and networking.",
    use: "Fast Ubuntu and Mint command lookup.",
    sections: ["Users", "Permissions", "Packages", "Services", "Logs", "Network"],
  },
  {
    number: "04",
    title: "Cisco & Networking Quick Reference",
    focus: "Interfaces, addressing, VLANs, trunks, routing, ACL review, verification commands, and troubleshooting order.",
    use: "Fast device verification and troubleshooting reference.",
    sections: ["Interfaces", "VLANs", "Routing", "ACLs", "Verification", "Troubleshooting"],
  },
  {
    number: "05",
    title: "Forensics Quick Reference",
    focus: "Evidence preservation, hashing, accounts, logs, processes, scheduled activity, network connections, timestamps, and timeline correlation.",
    use: "Compact evidence-first lookup for forensic questions.",
    sections: ["Preserve", "Hash", "Logs", "Processes", "Network", "Timeline"],
  },
  {
    number: "06",
    title: "Ports, Protocols & Services",
    focus: "Common ports, transport protocols, service names, expected use, remote access, web, DNS, and file sharing.",
    use: "Fast port and service recognition during host and network review.",
    sections: ["TCP", "UDP", "Ports", "Services", "Remote Access", "Web"],
  },
  {
    number: "07",
    title: "Competition Command Index",
    focus: "Task-based command lookup across Windows, Windows Server, Linux, Cisco, networking, and forensics.",
    use: "The fastest page when you know what you need to inspect but not the exact command.",
    sections: ["Windows", "Linux", "Cisco", "Network", "Files", "Logs"],
  },
];

const referenceRoutes: Record<string, string> = {
  "01": "/cyberpatriot/command-center/windows-11",
  "02": "/cyberpatriot/command-center/windows-server",
  "03": "/cyberpatriot/command-center/linux",
  "04": "/cyberpatriot/command-center/cisco-networking",
  "05": "/cyberpatriot/command-center/forensics",
  "06": "/cyberpatriot/command-center/ports-protocols-services",
  "07": "/cyberpatriot/command-center/command-index",
};
const principles = [
  {
    title: "Read before you change",
    text: "Inspect the current state before disabling, deleting, restarting, or modifying anything.",
  },
  {
    title: "Required services come first",
    text: "A service can look unusual and still be required. Check the scenario before removing it.",
  },
  {
    title: "Commands need context",
    text: "A command matters only when you know what its output means and what decision it supports.",
  },
  {
    title: "Evidence before remediation",
    text: "Preserve useful logs, paths, hashes, process details, and network state before changing them.",
  },
  {
    title: "Verification closes the loop",
    text: "After a defensive change, confirm the intended result and verify required functionality still works.",
  },
  {
    title: "Quick reference is not blind automation",
    text: "Use this section to remember checks and commands, then apply the reasoning taught in the full tracks.",
  },
];

const lookupZones = [
  { label: "Identity", items: ["Users", "Groups", "Privileges", "Passwords", "Sessions"] },
  { label: "System", items: ["Services", "Startup", "Tasks", "Packages", "Updates"] },
  { label: "Security", items: ["Firewall", "Policies", "Remote Access", "Permissions", "Logging"] },
  { label: "Network", items: ["Interfaces", "Ports", "Connections", "Routes", "DNS"] },
  { label: "Evidence", items: ["Hashes", "Timestamps", "Processes", "Logs", "Timeline"] },
  { label: "Verification", items: ["Status", "Dependencies", "Connectivity", "Required Services", "Re-check"] },
];

const flow = [
  { step: "01", title: "Identify the task", text: "Decide whether you are checking an account, service, file, log, firewall rule, port, process, package, or device configuration." },
  { step: "02", title: "Open the matching reference", text: "Use a platform page for broad work or the command index when you already know the type of check." },
  { step: "03", title: "Run the read-only check", text: "Inspect current state first and record anything you may need later." },
  { step: "04", title: "Compare with requirements", text: "Decide whether the state is expected, required, unnecessary, misconfigured, or still uncertain." },
  { step: "05", title: "Make the smallest justified change", text: "Avoid broad cleanup when a narrow correction solves the problem." },
  { step: "06", title: "Verify", text: "Re-run the check and confirm required services, access, and connectivity still work." },
];

const reminders = [
  "Read scenario or image instructions before changing services.",
  "Do not disable something only because the name is unfamiliar.",
  "Do not assume an open port is automatically a vulnerability.",
  "Do not assume a signed file is safe or an unsigned file is malicious.",
  "Do not treat account privilege as proof that the account used that privilege.",
  "Do not remove evidence before recording paths, hashes, logs, or process relationships.",
  "Document your own changes separately from the original system state.",
  "Re-check required functionality after remediation.",
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

export default function CommandCenterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; CyberPatriot Hub
          </Link>

          <div className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-400">
            Command Center / Quick Reference
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Command Center
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fast answers when you already know what you are trying to check
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A compact competition reference for Windows 11, Windows Server,
                Linux, Cisco, networking, forensics, ports, protocols, services,
                and high-value commands.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The full CyberPatriot tracks teach the concepts. The Command
                Center helps you find the right check quickly during practice.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Command Center Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Reference pages</span>
                  <span className="font-bold text-white">7</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platforms</span>
                  <span className="font-bold text-white">Windows + Linux + Cisco</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary use</span>
                  <span className="font-bold text-white">Fast lookup</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Safety rule</span>
                  <span className="font-bold text-white">Inspect first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              What this section is
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A competition reference, not another lesson track
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Use it when you understand the concept and need to remember a
              command, path, port, log source, verification check, or safe
              troubleshooting order.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Important
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A command is not a decision
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Each reference page will explain what a command tells you, what it
              does not prove, and when changing the system could destroy
              evidence or break a required service.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Command Center principles"
            title="Fast lookup still needs disciplined reasoning"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Quick lookup zones"
            title="Know what type of evidence or configuration you need"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {lookupZones.map((zone) => (
              <div
                key={zone.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{zone.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs font-bold text-cyan-200"
                    >
                      {item}
                    </span>
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
            label="Reference pages"
            title="Seven quick-reference tools"
            description="These cards stay non-clickable until each reference page is built and checked."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {referencePages.map((page) => (
              <Link
                key={page.number}
                href={referenceRoutes[page.number]}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    Reference {page.number}
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    Quick Reference
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">{page.title}</h3>

                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{page.focus}</p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Best use
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{page.use}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {page.sections.map((section) => (
                    <span
                      key={section}
                      className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-400"
                    >
                      {section}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center text-sm font-bold text-cyan-300">
                    Open Reference &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Fast-use workflow"
            title="Use the Command Center without losing your investigation flow"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flow.map((item) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Competition reminders
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Fast lookup should never become blind changes
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reminders.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Start here
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build the platform references first
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            We will begin with the Windows 11 Quick Reference, then continue
            through Windows Server, Linux, Cisco &amp; Networking, Forensics,
            Ports &amp; Protocols, and finally the Competition Command Index.
          </p>

          <Link
            href="/cyberpatriot/command-center/windows-11"
            className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/15"
          >
            Open Windows 11 Quick Reference &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
