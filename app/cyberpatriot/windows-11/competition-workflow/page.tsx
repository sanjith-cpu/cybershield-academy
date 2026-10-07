import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Translate the overall CyberPatriot strategy into a Windows 11-specific competition workflow.",
  "Build a useful Windows baseline before making broad security changes.",
  "Separate obvious high-confidence fixes from findings that need investigation or coordination.",
  "Protect required Windows users, services, applications, remote access, and forensic evidence.",
  "Use Windows tools to verify changes instead of assuming a saved setting worked.",
  "Finish the image with a controlled review of identity, protection, services, access, evidence, and functionality.",
];

const firstLook = [
  {
    title: "Scenario requirements",
    text: "Identify authorized users, authorized administrators, required software, required services, remote-access needs, restrictions, and forensic questions before broad hardening begins.",
  },
  {
    title: "Identity",
    text: "Review local users, administrator membership, groups, disabled accounts, guest access, and anything that conflicts with the scenario.",
  },
  {
    title: "Protection",
    text: "Check Microsoft Defender, Windows Defender Firewall, update status, security policy, and obvious warnings or disabled protections.",
  },
  {
    title: "System",
    text: "Review important services, startup programs, scheduled tasks, installed software, and required Windows features.",
  },
  {
    title: "Access",
    text: "Understand permissions, shared folders, remote access, user rights, and network exposure before changing them.",
  },
  {
    title: "Evidence",
    text: "Read forensic questions early and protect logs, files, accounts, tasks, processes, and timestamps that may be needed later.",
  },
];

const baselineAreas = [
  {
    area: "Users & groups",
    observe:
      "Local accounts, Administrators membership, standard users, disabled accounts, guest access, and unusual group membership.",
    why:
      "Identity mistakes are often high-value and can also affect access to every other part of the image.",
  },
  {
    area: "Defender",
    observe:
      "Protection status, scan state, exclusions, history, and obvious disabled protection features.",
    why:
      "Security tooling gives fast context about the current protection state and possible evidence.",
  },
  {
    area: "Firewall",
    observe:
      "Active profiles, major allow rules, required remote-access paths, and unusually broad exposure.",
    why:
      "Firewall changes can protect the image quickly, but they can also break required connectivity.",
  },
  {
    area: "Updates",
    observe:
      "Pending updates, restart state, update history, and whether security patches appear significantly behind.",
    why:
      "Patch posture matters, but update timing and restart impact must be managed carefully during competition work.",
  },
  {
    area: "Services",
    observe:
      "Running and stopped services, required Windows roles, remote-management services, and unfamiliar entries.",
    why:
      "A service may be risky, required, or both. Purpose and dependencies matter before disabling anything.",
  },
  {
    area: "Software",
    observe:
      "Installed programs, remote-access tools, unsupported software, utilities, and applications named in the scenario.",
    why:
      "Unwanted software can create risk, but legitimate competition-required applications should not be removed blindly.",
  },
  {
    area: "Startup & tasks",
    observe:
      "Startup applications, scheduled tasks, triggers, commands, account context, and unfamiliar persistence.",
    why:
      "Automatic execution can be legitimate maintenance or suspicious persistence and should be interpreted with evidence.",
  },
  {
    area: "Logs & errors",
    observe:
      "Authentication events, service failures, application errors, Defender history, and other clues relevant to forensic questions.",
    why:
      "Logs help explain what happened and can be damaged or lost by aggressive cleanup.",
  },
];

const taskBuckets = [
  {
    label: "Do Now",
    description:
      "Clear problem, strong evidence, manageable risk, and a result that can be verified quickly.",
    example:
      "A legitimate standard user is clearly listed as an administrator even though the scenario authorizes only one named administrator.",
  },
  {
    label: "Investigate",
    description:
      "Potentially important finding, but the team still needs more evidence before changing the image.",
    example:
      "An unfamiliar scheduled task runs at login, but its purpose and required application dependency are not yet known.",
  },
  {
    label: "Coordinate",
    description:
      "A change may affect remote access, networking, authentication, services, permissions, forensic evidence, or another teammate.",
    example:
      "Changing Windows Defender Firewall rules that protect a required RDP path.",
  },
  {
    label: "Revisit",
    description:
      "The task is blocked, low-confidence, or consuming too much time compared with the current value.",
    example:
      "An unclear event-log pattern needs more investigation while several high-confidence fixes are still available.",
  },
  {
    label: "Done / Verify",
    description:
      "The action is complete, but the team still needs to confirm the intended secure state and required functionality.",
    example:
      "An account privilege was corrected and now needs membership verification and a quick authorized-access check.",
  },
];

const changeQuestions = [
  "What exactly is wrong right now?",
  "What Windows evidence proves it?",
  "What does the scenario require?",
  "Is the affected user, service, application, or feature required?",
  "What is the least disruptive fix?",
  "Could this break remote access, authentication, permissions, or another service?",
  "Could this alter forensic evidence?",
  "How will I verify the result?",
];

const toolMap = [
  {
    tool: "Settings",
    use:
      "Quick visibility into Windows Update, Defender, accounts, apps, networking, and common security configuration.",
  },
  {
    tool: "Computer Management",
    use:
      "Local users and groups, services, shared folders, storage, Event Viewer access, and other administrative areas.",
  },
  {
    tool: "Local Security Policy",
    use:
      "Account policies, user rights, auditing, and security options when the edition and environment provide it.",
  },
  {
    tool: "Windows Security",
    use:
      "Microsoft Defender Antivirus, firewall status, protection history, and other Windows security controls.",
  },
  {
    tool: "Task Manager",
    use:
      "Running processes, startup applications, resource use, and quick process context.",
  },
  {
    tool: "Task Scheduler",
    use:
      "Scheduled triggers, actions, accounts, and persistence-related automation.",
  },
  {
    tool: "Event Viewer",
    use:
      "Security, System, Application, service, and other logs for troubleshooting and forensic reasoning.",
  },
  {
    tool: "PowerShell",
    use:
      "Efficient inspection, inventory, verification, and controlled administration when the command and impact are understood.",
  },
];

const identityChecks = [
  "Compare every local user with the scenario.",
  "Separate authorized users from authorized administrators.",
  "Review Administrators and other privileged groups.",
  "Check Guest and other special accounts in context.",
  "Avoid deleting a legitimate user just because their privilege is wrong.",
  "Verify group membership after any identity change.",
];

const protectionChecks = [
  "Confirm Microsoft Defender is available and protection status is understood.",
  "Review exclusions and history before removing anything that may matter as evidence.",
  "Identify which firewall profile is active.",
  "Review broad or unusual firewall rules in context.",
  "Check Windows Update state and restart implications.",
  "Review obvious security-policy weaknesses with scenario requirements in mind.",
];

const serviceChecks = [
  "Identify services explicitly required by the scenario.",
  "Understand dependencies before stopping a service.",
  "Review startup type only after understanding purpose.",
  "Look for unnecessary exposure rather than assuming every enabled service is bad.",
  "Re-test the required function after any service change.",
  "Document high-impact changes that could affect other teammates.",
];

const accessChecks = [
  "Review RDP or other remote-access requirements before changing them.",
  "Check NTFS and share permissions for excessive access.",
  "Preserve legitimate user workflows while applying least privilege.",
  "Coordinate firewall and remote-access changes.",
  "Verify authorized access from the perspective of the user or system that needs it.",
];

const forensicChecks = [
  "Read all forensic questions early.",
  "Identify which Windows logs or artifacts may answer them.",
  "Record file paths, timestamps, usernames, task names, event IDs, or other supporting facts.",
  "Separate fact, inference, unknown, and assumption.",
  "Avoid clearing logs or deleting suspicious files before needed evidence is captured.",
  "Re-check every forensic answer during final review.",
];

const verifyLayers = [
  {
    title: "Configuration",
    text: "Confirm the account, group, policy, service, firewall rule, permission, application, or setting now matches the intended state.",
  },
  {
    title: "Security",
    text: "Confirm the original exposure or weakness is actually reduced rather than merely moved somewhere else.",
  },
  {
    title: "Functionality",
    text: "Confirm authorized users, required services, applications, RDP, shares, and other required workflows still function.",
  },
  {
    title: "Evidence",
    text: "Confirm the change did not destroy information still needed for forensic questions or later troubleshooting.",
  },
  {
    title: "Team",
    text: "Record and communicate important results so teammates understand the current Windows state.",
  },
];

const workedRound = [
  {
    stage: "Scenario",
    text: "A fictional Windows 11 workstation must keep Remote Desktop available for one authorized administrator. Three other named users are legitimate standard users. A forensic question asks about recent failed sign-ins.",
  },
  {
    stage: "Baseline",
    text: "The team finds two standard users in Administrators, Defender enabled, one broad inbound firewall rule, pending updates, several startup items, and relevant Security log events.",
  },
  {
    stage: "Prioritize",
    text: "The administrator mismatches go to Do Now. The firewall rule goes to Coordinate because RDP is required. An unfamiliar startup item goes to Investigate. The forensic log review begins before cleanup.",
  },
  {
    stage: "Harden",
    text: "The team removes only the unnecessary administrator privilege, narrows the firewall exposure without disabling required RDP, and leaves the startup item unchanged until its purpose is confirmed.",
  },
  {
    stage: "Verify",
    text: "The users remain present, only the authorized administrator has elevated rights, RDP still works for the authorized path, Defender remains healthy, and the failed-sign-in evidence is preserved.",
  },
  {
    stage: "Review",
    text: "The scenario is re-read, high-impact Windows changes are re-tested, forensic answers are checked, unresolved tasks are reviewed, and the image is left in a known-good state.",
  },
];

const commonMistakes = [
  {
    title: "Starting with random settings",
    text: "Without a scenario map and baseline, the team can waste time or break something that was required.",
  },
  {
    title: "Deleting instead of correcting",
    text: "A legitimate user with excessive privilege may need a group-membership correction, not account deletion.",
  },
  {
    title: "Disabling unfamiliar services",
    text: "Unknown does not mean unnecessary. Confirm purpose and dependencies first.",
  },
  {
    title: "Broad firewall changes",
    text: "A rule may look unsafe, but deleting it without understanding required traffic can break remote access or services.",
  },
  {
    title: "Ignoring forensic questions until the end",
    text: "Normal hardening actions can alter logs, files, accounts, tasks, and other evidence.",
  },
  {
    title: "Treating a successful command as verification",
    text: "The real test is whether the Windows state improved and required functionality still works.",
  },
];

const finalReview = [
  "Re-read the Windows scenario and ReadMe.",
  "Confirm every authorized user still exists.",
  "Confirm administrator membership matches the scenario.",
  "Confirm Microsoft Defender and firewall state.",
  "Confirm required services, applications, and Windows features.",
  "Confirm remote access and required network paths.",
  "Review major permission changes.",
  "Review scheduled tasks, startup items, and installed software findings.",
  "Check update and restart state.",
  "Review forensic answers and supporting evidence.",
  "Review all Done / Verify tasks.",
  "Review unresolved high-value tasks.",
  "Avoid late changes that cannot be verified.",
  "Finish in a known-good Windows state.",
];

const reflection = [
  "Why should a Windows baseline be created before broad hardening begins?",
  "What makes an unfamiliar service an Investigate task instead of an automatic Do Now task?",
  "Why should a firewall change affecting RDP be coordinated?",
  "What is the difference between correcting privilege and deleting an account?",
  "Why are logs and startup artifacts relevant to both security and forensics?",
  "What does it mean to verify required functionality after a Windows change?",
];

export default function WindowsCompetitionWorkflowPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/users-groups-administrators" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 01
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Competition Workflow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Turn the overall competition strategy into a practical Windows
                11 workflow: understand the image, establish a baseline,
                prioritize evidence, make controlled changes, and verify the
                final state.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lesson is the map for the rest of the Windows section. It
                does not try to teach every Windows setting at once. Instead, it
                shows where each security area fits into a disciplined
                competition process.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First-look areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline areas</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Task categories</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Controlled Windows defense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Learning objectives
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What this workflow should help you do
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not treat Windows as a list of settings
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A competition image is a functioning system with users, services,
              applications, access paths, evidence, and dependencies. The goal
              is to improve security while keeping the required mission intact.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Windows risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Small settings can have large side effects
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Group membership, firewall rules, services, user rights, and
              permissions can affect the whole system. Windows rewards teams
              that understand the impact before they click Apply.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              If you cannot explain what a change affects or how you will test
              it afterward, gather more evidence before making a high-impact
              change.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            First look
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six things to understand before broad hardening
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {firstLook.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows baseline
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Know the current state before changing it
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A baseline does not mean documenting every setting. Capture enough
              information to understand the image, identify obvious conflicts,
              and recognize when a later change causes a new problem.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {baselineAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.area}</h3>

                <div className="mt-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Observe
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.observe}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Why it matters
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.why}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Prioritization
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Put each Windows finding in the right task bucket
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {taskBuckets.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Windows example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before a major change
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight questions to ask
            </h2>

            <div className="mt-5 grid gap-3">
              {changeQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows tool map
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use the right administrative view for the question
            </h2>

            <div className="mt-5 grid gap-3">
              {toolMap.map((item) => (
                <div
                  key={item.tool}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.tool}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Identity
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Users, groups, and privilege
            </h2>
            <div className="mt-5 grid gap-3">
              {identityChecks.map((item, index) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Protection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Defender, firewall, updates, and policy
            </h2>
            <div className="mt-5 grid gap-3">
              {protectionChecks.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Services
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Purpose and dependencies before disable
            </h2>
            <div className="mt-5 grid gap-3">
              {serviceChecks.map((item, index) => (
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Access
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Permissions, shares, and remote access
            </h2>
            <div className="mt-5 grid gap-3">
              {accessChecks.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Forensic protection
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Windows hardening can change the evidence
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Logs, accounts, scheduled tasks, startup entries, files,
              processes, Defender history, and timestamps may matter to forensic
              questions. Read the questions first so cleanup does not erase the
              answer.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {forensicChecks.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification model
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Five layers before a Windows task is complete
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {verifyLayers.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Fictional practice round
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              See the workflow applied to one Windows image
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {workedRound.map((item, index) => (
              <div
                key={item.stage}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.25fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {String(index + 1).padStart(2, "0")} · {item.stage}
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Windows habits that create avoidable problems
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((item) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your Windows workflow reasoning
            </h2>

            <div className="mt-5 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows final review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before you consider the image finished
            </h2>

            <div className="mt-5 grid gap-3">
              {finalReview.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Users, Groups & Administrators
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, go deeper into local identities, Administrators
                membership, group decisions, disabled accounts, Guest, and
                scenario-authorized access.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/users-groups-administrators"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 02 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/users-groups-administrators" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
