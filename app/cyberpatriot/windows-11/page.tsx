import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const windowsLessons = [
  {
    number: "01",
    route: "/cyberpatriot/windows-11/competition-workflow",
    title: "Windows 11 Competition Workflow",
    focus:
      "Apply the Competition Strategy process specifically to a Windows 11 image: scenario review, baseline, prioritization, controlled changes, verification, and final review.",
    lab:
      "Build a fictional Windows 11 image map and organize findings into Do Now, Investigate, Coordinate, Revisit, and Done / Verify.",
  },
  {
    number: "02",
    route: "/cyberpatriot/windows-11/users-groups-administrators",
    title: "Users, Groups & Administrators",
    focus:
      "Review local users, group membership, administrator rights, disabled accounts, guest access, and scenario-authorized identities.",
    lab:
      "Compare a fictional user list with scenario requirements and identify the least-disruptive account corrections.",
  },
  {
    number: "03",
    route: "/cyberpatriot/windows-11/password-account-policies",
    title: "Password & Account Policies",
    focus:
      "Understand password length, complexity, history, lockout, expiration, and account-policy decisions without blindly forcing one configuration everywhere.",
    lab:
      "Evaluate a fictional local account policy against a stated security requirement and required user workflow.",
  },
  {
    number: "04",
    route: "/cyberpatriot/windows-11/local-security-policy",
    title: "Local Security Policy",
    focus:
      "Use Local Security Policy to reason about account policies, user rights, security options, auditing, and privilege-sensitive configuration.",
    lab:
      "Review a fictional policy snapshot and classify settings as confirmed issue, needs context, or already appropriate.",
  },
  {
    number: "05",
    route: "/cyberpatriot/windows-11/microsoft-defender-antivirus",
    title: "Microsoft Defender Antivirus",
    focus:
      "Review Defender status, protection features, scan posture, exclusions, history, and evidence without destroying forensic context.",
    lab:
      "Analyze a fictional Defender status report and decide what should be verified, investigated, or changed.",
  },
  {
    number: "06",
    route: "/cyberpatriot/windows-11/windows-defender-firewall",
    title: "Windows Defender Firewall",
    focus:
      "Understand profiles, inbound and outbound rules, allowed applications, service dependencies, and required network access.",
    lab:
      "Harden a fictional firewall configuration while preserving a required remote-management path.",
  },
  {
    number: "07",
    route: "/cyberpatriot/windows-11/windows-update-patch-management",
    title: "Windows Update & Patch Management",
    focus:
      "Review update state, restart implications, update history, security posture, and competition-time tradeoffs.",
    lab:
      "Create an update decision plan for a fictional image with pending security updates and required uptime.",
  },
  {
    number: "08",
    route: "/cyberpatriot/windows-11/services-startup-programs",
    title: "Services & Startup Programs",
    focus:
      "Review running services, startup applications, service purpose, dependencies, automatic startup, and unnecessary exposure.",
    lab:
      "Classify fictional services and startup entries as required, suspicious, optional, or needing more evidence.",
  },
  {
    number: "09",
    route: "/cyberpatriot/windows-11/installed-software-unwanted-applications",
    title: "Installed Software & Unwanted Applications",
    focus:
      "Inventory installed programs, identify unsupported or unauthorized software, distinguish legitimate tools from risk, and plan safe removal.",
    lab:
      "Review a fictional software inventory and build an evidence-based remediation list.",
  },
  {
    number: "10",
    route: "/cyberpatriot/windows-11/files-folders-share-permissions",
    title: "Files, Folders & Share Permissions",
    focus:
      "Understand NTFS permissions, ownership, inheritance, shared-folder exposure, least privilege, and required access.",
    lab:
      "Correct a fictional shared-folder permission problem without blocking authorized users.",
  },
  {
    number: "11",
    route: "/cyberpatriot/windows-11/remote-access-rdp",
    title: "Remote Access & RDP",
    focus:
      "Review Remote Desktop and other remote-access requirements, authorization, firewall exposure, authentication, and service dependencies.",
    lab:
      "Secure a fictional required RDP configuration while preserving authorized administrative access.",
  },
  {
    number: "12",
    route: "/cyberpatriot/windows-11/task-scheduler-persistence-review",
    title: "Task Scheduler & Persistence Review",
    focus:
      "Inspect scheduled tasks, startup behavior, triggers, actions, account context, and evidence before disabling unfamiliar automation.",
    lab:
      "Investigate fictional scheduled tasks and separate legitimate maintenance from suspicious persistence.",
  },
  {
    number: "13",
    route: "/cyberpatriot/windows-11/event-viewer-windows-logs",
    title: "Event Viewer & Windows Logs",
    focus:
      "Use Windows logs to understand authentication, services, system changes, errors, and forensic questions without treating every event as an incident.",
    lab:
      "Trace a fictional timeline using Security, System, and Application events.",
  },
  {
    number: "14",
    route: "/cyberpatriot/windows-11/powershell-defensive-administration",
    title: "PowerShell for Defensive Administration",
    focus:
      "Use PowerShell for safe inspection, verification, inventory, and controlled defensive administration with clear before-and-after checks.",
    lab:
      "Use a fictional command-output set to verify users, services, firewall state, software, and security posture.",
  },
  {
    number: "15",
    route: "/cyberpatriot/windows-11/windows-forensics-evidence-preservation",
    title: "Windows Forensics & Evidence Preservation",
    focus:
      "Protect Windows evidence such as logs, files, metadata, accounts, tasks, processes, and security history while answering forensic questions.",
    lab:
      "Build an evidence map for a fictional Windows incident without altering the artifacts needed for investigation.",
  },
  {
    number: "16",
    route: "/cyberpatriot/windows-11/final-review-checklist",
    title: "Windows 11 Final Review Checklist",
    focus:
      "Combine the Windows 11 section into one competition-ready review covering scenario requirements, users, policies, security controls, services, software, logs, and verification.",
    lab:
      "Run a structured final review of a fictional Windows image and identify what is verified, unresolved, or too risky to change late.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "Read the scenario and identify authorized users, administrators, required software, required services, networking needs, and forensic questions.",
  },
  {
    number: "02",
    title: "Baseline",
    text: "Capture the current Windows state before broad changes: users, privileges, security tools, firewall, updates, services, software, and obvious errors.",
  },
  {
    number: "03",
    title: "Prioritize",
    text: "Separate clear high-confidence problems from findings that need investigation, coordination, or later review.",
  },
  {
    number: "04",
    title: "Harden",
    text: "Make the least disruptive change that addresses the confirmed issue while preserving required Windows functionality.",
  },
  {
    number: "05",
    title: "Verify",
    text: "Confirm both the security improvement and the continued operation of accounts, services, applications, and network functions.",
  },
  {
    number: "06",
    title: "Review",
    text: "Re-check scenario requirements, risky changes, forensic answers, unresolved work, and the final known-good Windows state.",
  },
];

const priorityZones = [
  {
    title: "Identity",
    items: [
      "Local users",
      "Administrators",
      "Groups",
      "Guest access",
      "Password and lockout policy",
    ],
  },
  {
    title: "Protection",
    items: [
      "Microsoft Defender",
      "Firewall profiles and rules",
      "Updates",
      "Security policy",
      "Auditing and logs",
    ],
  },
  {
    title: "System",
    items: [
      "Services",
      "Startup programs",
      "Scheduled tasks",
      "Installed software",
      "Remote access",
    ],
  },
  {
    title: "Access",
    items: [
      "NTFS permissions",
      "Shared folders",
      "User rights",
      "Remote management",
      "Required applications",
    ],
  },
];

const evidencePreview = [
  {
    source: "Scenario",
    finding:
      "Only one named user is authorized as an administrator, while several other users must remain standard accounts.",
  },
  {
    source: "System",
    finding:
      "Two additional legitimate users currently appear in the local Administrators group.",
  },
  {
    source: "Required function",
    finding:
      "Remote Desktop must remain available for authorized administration.",
  },
  {
    source: "Forensics",
    finding:
      "A question references recent authentication activity, so relevant event logs should be preserved before cleanup.",
  },
];

const principles = [
  {
    title: "Scenario before checklist",
    text: "Windows hardening decisions must fit the actual image requirements. Generic security advice does not automatically override required functionality.",
  },
  {
    title: "Evidence before action",
    text: "Unfamiliar users, services, software, tasks, and processes are investigation targets until evidence supports a change.",
  },
  {
    title: "Least disruptive change",
    text: "Correct the confirmed problem without unnecessarily deleting accounts, disabling services, or blocking legitimate access.",
  },
  {
    title: "Verify twice",
    text: "Check that the security state improved and that the required Windows function still works afterward.",
  },
];

export default function Windows11HubPage() {
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
                Windows 11
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how to review and harden a Windows 11 competition image
                with scenario awareness, evidence-based decisions, controlled
                changes, and verification.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This section focuses on defensive administration and authorized
                practice environments. It teaches the reasoning behind Windows
                security work rather than supplying answers to live competition
                images.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Windows 11 Scope
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lessons</span>
                  <span className="font-bold text-white">16</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Workflow phases</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Training style</span>
                  <span className="font-bold text-white">Defensive</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Outcome</span>
                  <span className="font-bold text-white">Competition-ready workflow</span>
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
              Examples and labs use fictional Windows systems and authorized
              practice scenarios. The section teaches defensive analysis,
              hardening, documentation, and verification without exposing
              current competition answers.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Main question
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              How do you secure Windows without breaking what the scenario requires?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The answer is not “change every setting.” Strong Windows work
              starts with context, finds evidence, chooses controlled changes,
              and verifies the result.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Windows workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Apply the six-phase strategy to Windows 11
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
              Windows 11 Lessons
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Lessons move from competition workflow and identity controls into
            Windows protection, services, access, administration, evidence, and
            final review.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {windowsLessons.map((lesson) => (
            <Link
              key={lesson.number}
              href={lesson.route}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-cyan-300">
                  Lesson {lesson.number}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-400">
                  Windows 11
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
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-300"
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
              Fictional evidence preview
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              How Windows evidence changes the decision
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              These facts are fictional. The point is to practice connecting
              scenario requirements to system evidence before taking action.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  {item.source}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.finding}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Windows principles
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Four rules that apply across the section
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
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
                Lesson 01 — Windows 11 Competition Workflow
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The first lesson will translate the Competition Strategy process
                directly into a Windows 11 image workflow before individual
                security areas are taught.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/competition-workflow"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 01 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
