import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const linuxLessons = [
  {
    number: "01",
    title: "Linux Competition Workflow",
    focus:
      "Build a safe Linux competition workflow around scenario review, baseline inspection, evidence, controlled remediation, and verification.",
    lab:
      "Review a fictional Linux image, identify required users and services, and organize findings into Do Now, Investigate, Coordinate, and Verify.",
  },
  {
    number: "02",
    title: "Linux Filesystem & Important Paths",
    focus:
      "Understand the Linux filesystem hierarchy and the locations commonly used for users, services, logs, configuration, software, temporary data, and startup behavior.",
    lab:
      "Map important files and directories on a fictional Ubuntu system without changing them.",
  },
  {
    number: "03",
    title: "Users, Groups & Sudo Privilege",
    focus:
      "Review local users, groups, administrative privilege, sudo access, account shells, home directories, and scenario-authorized identities.",
    lab:
      "Compare a fictional account inventory with scenario requirements and identify the least-disruptive privilege corrections.",
  },
  {
    number: "04",
    title: "Passwords, Authentication & Account Policies",
    focus:
      "Review password aging, authentication behavior, locked accounts, PAM-related concepts, and account-policy decisions without forcing one configuration everywhere.",
    lab:
      "Evaluate fictional account-policy evidence and determine what should be verified, changed, or left alone.",
  },
  {
    number: "05",
    title: "File Ownership & Permissions",
    focus:
      "Use ownership, groups, rwx permissions, special bits, and least privilege to protect files without breaking required applications or services.",
    lab:
      "Correct a fictional permission problem while preserving authorized access and service dependencies.",
  },
  {
    number: "06",
    title: "Packages, Repositories & Software Review",
    focus:
      "Inventory installed packages, understand repositories and package sources, identify unnecessary software, and plan safe updates or removal.",
    lab:
      "Classify a fictional package inventory as required, unnecessary, suspicious, or investigate.",
  },
  {
    number: "07",
    title: "Services & systemd",
    focus:
      "Review running services, enabled units, service dependencies, startup behavior, and systemd evidence before stopping or disabling anything.",
    lab:
      "Analyze fictional service states and preserve required web, SSH, logging, and networking functions.",
  },
  {
    number: "08",
    title: "Processes & Resource Review",
    focus:
      "Inspect running processes, parent-child relationships, users, resource usage, executable paths, and command lines without assuming unfamiliar means malicious.",
    lab:
      "Investigate a fictional process list and identify which processes need more evidence.",
  },
  {
    number: "09",
    title: "SSH & Remote Access Security",
    focus:
      "Review SSH configuration, authorized access, authentication methods, listening exposure, service state, and firewall dependencies.",
    lab:
      "Secure a fictional required SSH service while preserving authorized administrative access.",
  },
  {
    number: "10",
    title: "UFW Firewall & Network Exposure",
    focus:
      "Understand firewall status, default policy, allowed services, ports, interfaces, and required network exposure using UFW and supporting tools.",
    lab:
      "Reduce unnecessary exposure on a fictional Linux server without blocking required SSH or application traffic.",
  },
  {
    number: "11",
    title: "Networking, Interfaces & DNS",
    focus:
      "Review addresses, interfaces, routes, listening ports, DNS configuration, name resolution, and required connectivity using modern Linux tools.",
    lab:
      "Trace a fictional connectivity problem and verify the intended network state after a controlled change.",
  },
  {
    number: "12",
    title: "Cron Jobs & Scheduled Persistence",
    focus:
      "Inspect user and system cron jobs, timers, scheduled commands, execution context, and persistence clues before remediation.",
    lab:
      "Preserve and classify a fictional scheduled command that runs with elevated privilege.",
  },
  {
    number: "13",
    title: "Startup, Shell Profiles & Persistence Review",
    focus:
      "Review shell startup files, autostart locations, system startup mechanisms, user-level persistence, and unusual automatic execution.",
    lab:
      "Investigate fictional startup entries and separate legitimate configuration from suspicious persistence.",
  },
  {
    number: "14",
    title: "Logs, journalctl & System Evidence",
    focus:
      "Use journalctl, authentication logs, service logs, package history, and other evidence to build timelines and troubleshoot security-relevant events.",
    lab:
      "Correlate fictional login, sudo, service, and system events around a known incident window.",
  },
  {
    number: "15",
    title: "Configuration Files & Secure Editing",
    focus:
      "Read and edit Linux configuration safely, preserve originals, understand comments and syntax, validate changes, and avoid destructive bulk edits.",
    lab:
      "Review a fictional service configuration, make one controlled change, and verify the service remains functional.",
  },
  {
    number: "16",
    title: "Linux Defensive Command Line",
    focus:
      "Use inspection-first Linux commands for users, groups, permissions, processes, services, networking, packages, logs, and verification.",
    lab:
      "Build a repeatable read-only Linux inventory and use it to verify one controlled remediation.",
  },
  {
    number: "17",
    title: "Ubuntu vs Linux Mint Competition Differences",
    focus:
      "Understand where Ubuntu and Linux Mint behave similarly and where desktop tools, defaults, packages, services, or configuration paths may differ.",
    lab:
      "Compare two fictional systems and identify which security checks are universal and which need distribution-specific verification.",
  },
  {
    number: "18",
    title: "Linux Final Review Checklist",
    focus:
      "Bring identity, permissions, packages, services, network exposure, persistence, logs, evidence, and required functionality into one final verified Linux state.",
    lab:
      "Complete a fictional end-of-round Linux review and document unresolved investigate items.",
  },
];

const linuxLessonRoutes: Record<string, string> = {
  "01": "/cyberpatriot/linux/competition-workflow",
  "02": "/cyberpatriot/linux/filesystem-important-paths",
  "03": "/cyberpatriot/linux/users-groups-sudo",
  "04": "/cyberpatriot/linux/passwords-authentication-account-policies",
  "05": "/cyberpatriot/linux/file-ownership-permissions",
  "06": "/cyberpatriot/linux/packages-repositories-software-review",
  "07": "/cyberpatriot/linux/services-systemd",
  "08": "/cyberpatriot/linux/processes-resource-review",
  "09": "/cyberpatriot/linux/ssh-remote-access-security",
  "10": "/cyberpatriot/linux/ufw-firewall-network-exposure",
  "11": "/cyberpatriot/linux/networking-interfaces-dns",
  "12": "/cyberpatriot/linux/cron-jobs-scheduled-persistence",
  "13": "/cyberpatriot/linux/startup-shell-profiles-persistence-review",
  "14": "/cyberpatriot/linux/logs-journalctl-system-evidence",
  "15": "/cyberpatriot/linux/configuration-files-secure-editing",
  "16": "/cyberpatriot/linux/linux-defensive-command-line",
  "17": "/cyberpatriot/linux/ubuntu-vs-linux-mint-differences",
  "18": "/cyberpatriot/linux/final-review-checklist",
};
const workflow = [
  {
    number: "01",
    title: "Read the scenario",
    text:
      "Identify authorized users, required services, applications, networking needs, remote access, restrictions, and forensic questions before changing the system.",
  },
  {
    number: "02",
    title: "Inventory the image",
    text:
      "Inspect users, groups, sudo access, packages, services, processes, permissions, network exposure, scheduled tasks, and logs before broad remediation.",
  },
  {
    number: "03",
    title: "Classify findings",
    text:
      "Separate clear high-confidence issues from findings that need more evidence, coordination, or dependency review.",
  },
  {
    number: "04",
    title: "Make controlled changes",
    text:
      "Use the least disruptive fix that addresses the confirmed issue while preserving required Linux functionality and forensic evidence.",
  },
  {
    number: "05",
    title: "Verify the result",
    text:
      "Re-check the configuration and prove that authorized users, required services, networking, applications, and security controls still work.",
  },
];

const priorityZones = [
  {
    title: "Identity & Privilege",
    items: [
      "Users and groups",
      "sudo access",
      "Locked or disabled accounts",
      "Shells and home directories",
      "Password and authentication policy",
    ],
  },
  {
    title: "System & Software",
    items: [
      "Packages and repositories",
      "Services and systemd",
      "Processes",
      "Startup behavior",
      "Configuration files",
    ],
  },
  {
    title: "Access & Networking",
    items: [
      "Ownership and permissions",
      "SSH",
      "UFW firewall",
      "Interfaces and routes",
      "Listening ports and DNS",
    ],
  },
  {
    title: "Evidence & Persistence",
    items: [
      "cron and timers",
      "Shell startup files",
      "journalctl and logs",
      "Authentication evidence",
      "Change verification",
    ],
  },
];

const principles = [
  {
    title: "Scenario before checklist",
    text:
      "Required users, services, applications, and network paths must survive every security change.",
  },
  {
    title: "Inspect before editing",
    text:
      "Linux makes powerful changes easy from the command line. Read the current state before using commands that modify it.",
  },
  {
    title: "Unknown is not malicious",
    text:
      "An unfamiliar user, process, package, service, cron job, or file should be investigated before removal or disabling.",
  },
  {
    title: "Permissions have dependencies",
    text:
      "Ownership and mode changes can break applications, services, scripts, package management, or user workflows.",
  },
  {
    title: "Evidence before cleanup",
    text:
      "Preserve logs, command lines, file metadata, task details, account state, and configuration evidence before remediation.",
  },
  {
    title: "Verify from the user and service perspective",
    text:
      "A secure-looking configuration is not complete until required users and services still function as intended.",
  },
];

const distributionNotes = [
  {
    title: "Shared Linux foundation",
    text:
      "Ubuntu and Linux Mint share many core commands, package-management concepts, filesystem conventions, permissions, systemd behavior, and security practices.",
  },
  {
    title: "Desktop differences",
    text:
      "Graphical tools and menu locations may differ because Ubuntu and Mint can use different desktop environments and utilities.",
  },
  {
    title: "Package and default differences",
    text:
      "A package, service, application, or default setting may exist on one image and not another. Verify the actual system instead of assuming.",
  },
  {
    title: "Teach the common method first",
    text:
      "Most lessons focus on Linux concepts and terminal-based inspection that transfer across both distributions, then call out differences where they matter.",
  },
];

const evidencePreview = [
  "Host: linux-practice",
  "Distribution: Ubuntu-based training image",
  "Authorized administrator: Morgan",
  "Required standard users: Avery and Riley",
  "Required service: SSH for Morgan from the training network",
  "Required application: internal web service",
  "Forensic clue: unknown root-owned scheduled command",
  "Important boundary: preserve logs and task details before remediation",
];

export default function LinuxHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← CyberPatriot Hub
          </Link>

          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Competition Strategy
          </Link>

          <Link
            href="/cyberpatriot/windows-server"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Windows Server
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Training Hub
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Linux: Ubuntu & Mint
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to review and harden Ubuntu and Linux Mint competition
                images using evidence, safe command-line inspection, controlled
                changes, and continuous verification.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This pathway teaches one transferable Linux security method.
                Ubuntu and Mint differences are explained only when they actually
                affect the tool, path, package, service, or decision.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Linux Scope
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lessons</span>
                  <span className="font-bold text-white">18</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core workflow</span>
                  <span className="font-bold text-white">5 stages</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Distributions</span>
                  <span className="font-bold text-white">Ubuntu + Mint</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Training style</span>
                  <span className="font-bold text-white">Defensive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety boundary
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Train the skill, not the live answer
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Examples and labs use fictional Linux systems and authorized
              practice environments. The goal is to understand defensive
              administration, evidence, and verification rather than publish
              restricted answers for active competition images.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Main question
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              How do you secure Linux without breaking what the scenario requires?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Linux gives administrators enormous control. Strong competition
              work uses that control carefully: inspect first, understand
              dependencies, make narrow changes, preserve evidence, and verify
              required functionality afterward.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Linux workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Five stages for controlled Linux defense
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {workflow.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <span className="text-sm font-black text-cyan-300">
                {item.number}
              </span>
              <h3 className="mt-3 text-xl font-black text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </article>
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
              Linux Lessons
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Lessons move from Linux fundamentals and identity into permissions,
            software, services, networking, persistence, evidence, command-line
            administration, distribution differences, and final review.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {linuxLessons.map((lesson) => (
            <Link
              key={lesson.number}
              href={linuxLessonRoutes[lesson.number]}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-cyan-300">
                  Lesson {lesson.number}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-400">
                  Linux
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
                  Open Lesson &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {priorityZones.map((zone) => (
            <div
              key={zone.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Priority zone
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                {zone.title}
              </h2>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {zone.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ubuntu and Mint
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              One Linux pathway, differences only where they matter
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The pathway teaches transferable Linux reasoning first. When a
              graphical tool, package, default service, configuration location,
              or distribution behavior differs, the lesson will call it out
              explicitly instead of pretending both systems are identical.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {distributionNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Linux evidence preview
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Fictional practice environment
            </h2>

            <div className="mt-5 grid gap-3">
              {evidencePreview.map((item, index) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Linux principles
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Six rules to carry through the pathway
            </h2>

            <div className="mt-5 grid gap-3">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
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
                Lesson 01 — Linux Competition Workflow
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Begin by learning how to read the Linux scenario, establish a
                baseline, classify findings, protect required functionality, and
                verify every meaningful change.
              </p>
            </div>

            <Link
              href="/cyberpatriot/linux/competition-workflow"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
            >
              Start Lesson 01 &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
