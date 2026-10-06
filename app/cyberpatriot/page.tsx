import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trainingAreas = [
  {
    title: "Competition Strategy",
    description:
      "Build a disciplined competition workflow: read the scenario first, divide responsibilities, prioritize evidence, document changes, protect required services, and use the final minutes for verification instead of rushed guessing.",
    route: "/cyberpatriot/competition-strategy",
    tag: "Workflow",
  },
  {
    title: "Windows 11",
    description:
      "Prepare for Windows image defense with users and groups, account policies, security settings, services, Defender, firewall, updates, permissions, sharing, software review, auditing, PowerShell, and a full competition checklist.",
    route: "/cyberpatriot/windows-11",
    tag: "Operating System",
  },
  {
    title: "Windows Server",
    description:
      "Learn server-focused defense including Server Manager, users and groups, Active Directory concepts, Group Policy, roles and features, services, shares, permissions, IIS, firewall, auditing, and PowerShell.",
    route: "/cyberpatriot/windows-server",
    tag: "Server",
  },
  {
    title: "Linux: Ubuntu & Mint",
    description:
      "Work through Linux fundamentals, users and groups, sudo, passwords, ownership, permissions, packages, services, SSH, firewall, processes, logs, cron, networking, configuration files, and safe competition review.",
    route: "/cyberpatriot/linux",
    tag: "Linux",
  },
  {
    title: "Cisco & Networking",
    description:
      "Strengthen networking knowledge through addressing, subnetting, switches, routers, VLANs, ports and protocols, Cisco IOS basics, device hardening, interfaces, routing concepts, Packet Tracer, and quiz preparation.",
    route: "/cyberpatriot/cisco-networking",
    tag: "Networking",
  },
  {
    title: "Forensics",
    description:
      "Practice evidence-first investigation with files, logs, users, processes, network information, metadata, search techniques, command-line tools, and structured reasoning for competition-style forensic questions.",
    route: "/cyberpatriot/forensics",
    tag: "Investigation",
  },
  {
    title: "Command Center",
    description:
      "Use a fast-reference library for Windows commands, PowerShell, Linux commands, Cisco commands, important ports, useful locations, common services, and troubleshooting checks.",
    route: "/cyberpatriot/command-center",
    tag: "Quick Reference",
  },
  {
    title: "Practice Labs",
    description:
      "Apply the material in safe fictional Windows, Server, Linux, networking, and forensics scenarios designed to build competition habits without exposing live-round answers.",
    route: "/cyberpatriot/practice-labs",
    tag: "Hands-On",
  },
  {
    title: "Competition Checklists",
    description:
      "Use organized Windows, Windows Server, Linux, Cisco, forensics, and final-review checklists to reduce missed steps and keep team members consistent under time pressure.",
    route: "/cyberpatriot/checklists",
    tag: "Checklists",
  },
  {
    title: "Common Mistakes",
    description:
      "Learn how teams lose time or break working systems by changing settings without evidence, removing legitimate users, disabling required services, overlooking scenario requirements, or failing to verify changes.",
    route: "/cyberpatriot/common-mistakes",
    tag: "Avoid Errors",
  },
  {
    title: "Competition Day Guide",
    description:
      "Follow a clear timeline from setup and the opening minutes through the middle of the round, final hour, last 30 minutes, team communication, troubleshooting, and final verification.",
    route: "/cyberpatriot/competition-day",
    tag: "Game Day",
  },
  {
    title: "Resources",
    description:
      "Find official CyberPatriot resources, training references, practice material, and carefully selected supporting resources in one organized location.",
    route: "/cyberpatriot/resources",
    tag: "Reference",
  },
];

const workflow = [
  {
    step: "01",
    title: "Read before changing",
    text: "Start with the scenario, ReadMe, requirements, and any forensic questions. Understand what the image is supposed to do before modifying it.",
  },
  {
    step: "02",
    title: "Establish a baseline",
    text: "Check users, services, security tools, networking, installed software, updates, and other high-value areas before making broad changes.",
  },
  {
    step: "03",
    title: "Make evidence-based fixes",
    text: "Change settings because the scenario, policy, evidence, or system state justifies the change. Avoid random hardening that could break required services.",
  },
  {
    step: "04",
    title: "Document and verify",
    text: "Record important changes, confirm the machine still works, and re-check scoring-sensitive areas rather than assuming a change helped.",
  },
  {
    step: "05",
    title: "Finish deliberately",
    text: "Use the final part of the round for missed requirements, forensic questions, service checks, team communication, and a calm final review.",
  },
];

const principles = [
  "Competition preparation, not live-round answer sharing",
  "Defensive system administration and evidence-based reasoning",
  "Windows, Windows Server, Linux, Cisco, networking, and forensics",
  "Step-by-step training with checklists, references, and practice",
  "Safe fictional labs instead of unauthorized real-world targets",
  "Designed to remain useful throughout the competition season",
];

export default function CyberPatriotPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Home
          </Link>

          <Link
            href="/resources"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            CyberShield Resources
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberShield Academy
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                CyberPatriot Training Hub
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A complete competition-preparation center for students training
                in Windows, Windows Server, Linux, Cisco networking, forensics,
                system hardening, troubleshooting, and disciplined team
                workflow.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This hub is built to teach the skills and reasoning used during
                CyberPatriot preparation. It focuses on understanding systems,
                recognizing security problems, making justified defensive
                changes, and verifying results rather than memorizing isolated
                fixes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#training-areas"
                  className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Training Areas
                </Link>

                <Link
                  href="#competition-workflow"
                  className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Competition Workflow
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Training Hub Scope
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main training areas</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core systems</span>
                  <span className="font-bold text-white">Windows + Linux</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Networking</span>
                  <span className="font-bold text-white">Cisco + Packet Tracer</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Approach</span>
                  <span className="font-bold text-white">Defensive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="training-areas"
        className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"
      >
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Full preparation pathway
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              CyberPatriot Training Areas
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Start with competition strategy, build operating-system and
            networking skill, then reinforce everything through references,
            checklists, labs, and competition-day preparation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {trainingAreas.map((area, index) => (
            <article
              key={area.title}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  {area.tag}
                </span>
                <span className="text-sm font-black text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                {area.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                {area.description}
              </p>

              {area.title === "Competition Strategy" ? (
  <Link
    href={area.route}
    className="mt-6 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
  >
    Open Section →
  </Link>
) : (
  <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-500">
    Section coming next
  </div>
)}
            </article>
          ))}
        </div>
      </section>

      <section
        id="competition-workflow"
        className="mx-auto max-w-7xl px-6 pb-12 lg:px-8"
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Competition mindset
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              A disciplined workflow beats random hardening
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Strong teams do not race through settings without context. They
              understand the scenario, inspect the system, make justified
              changes, verify the result, and communicate clearly.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="text-sm font-black text-cyan-300">
                  {item.step}
                </div>
                <h3 className="mt-3 text-base font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Important boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Train the skill, not the live answer
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This section teaches defensive administration, investigation,
              networking, troubleshooting, and competition workflow. Practice
              examples and labs should use fictional or authorized environments.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not use the hub to publish active competition answers,
              restricted image solutions, credentials, or instructions for
              attacking systems you do not own or have permission to test.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              What this hub will include
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Built for serious competition preparation
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {principle}
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
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Start here
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Build the workflow first
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The first section we will build is Competition Strategy. It
                establishes the habits that should guide every Windows, Linux,
                server, networking, and forensics task that follows.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950/70 px-5 py-3 text-center text-sm font-bold text-slate-300">
              Competition Strategy coming next
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-3 border-t border-slate-800 pt-8">
          <Link
            href="/"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Home
          </Link>

          <Link
            href="/resources"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            CyberShield Resources
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
