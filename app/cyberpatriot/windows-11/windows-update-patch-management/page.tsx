import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why patch management is more than simply clicking 'Check for updates.'",
  "Distinguish security updates, quality updates, driver updates, feature updates, and optional updates.",
  "Review update state, restart requirements, update history, and servicing health before making competition-time decisions.",
  "Recognize when an update should be prioritized, deferred for investigation, or coordinated because of restart or compatibility risk.",
  "Use Windows Settings, update history, services, and PowerShell inspection to understand patch posture.",
  "Verify that required updates completed successfully and the system still functions after servicing.",
];

const updateTypes = [
  {
    title: "Security updates",
    text:
      "Address vulnerabilities or security defects and are often high-value from a defensive perspective.",
    competition:
      "Prioritize when clearly needed, while still accounting for install time, restart impact, and image stability.",
  },
  {
    title: "Quality updates",
    text:
      "Monthly cumulative packages can include security fixes, reliability improvements, and other operating-system corrections.",
    competition:
      "Review what is pending and whether the image is significantly behind rather than treating every package identically.",
  },
  {
    title: "Feature updates",
    text:
      "Move Windows to a newer feature release and can create much larger installation, restart, and compatibility impact.",
    competition:
      "Usually deserves more caution than a normal cumulative security update during a timed environment.",
  },
  {
    title: "Driver updates",
    text:
      "Update hardware support such as network, graphics, storage, or device drivers.",
    competition:
      "A driver update can fix a problem but can also create new compatibility issues, so apply only with a clear reason.",
  },
  {
    title: "Definition / intelligence updates",
    text:
      "Update security intelligence used by products such as Microsoft Defender Antivirus.",
    competition:
      "Often small and valuable, but still confirm that the security product is functioning as expected afterward.",
  },
  {
    title: "Optional updates",
    text:
      "May include preview quality fixes, drivers, or other non-mandatory packages.",
    competition:
      "Optional does not mean useless, but it also does not mean urgent. Evaluate the actual need.",
  },
];

const statusAreas = [
  {
    title: "Current update state",
    text:
      "Is Windows up to date, paused, waiting to install, downloading, or showing an error?",
  },
  {
    title: "Pending restart",
    text:
      "A restart can interrupt teammates, remote access, active tools, and unsaved work. Know whether one is required before proceeding.",
  },
  {
    title: "Update history",
    text:
      "History shows successful and failed installs and can reveal recurring servicing problems.",
  },
  {
    title: "Last successful servicing",
    text:
      "A system that has not successfully patched for a long time deserves more attention than one with only a small recent gap.",
  },
  {
    title: "Pause settings",
    text:
      "Updates may be intentionally or accidentally paused. Determine whether the pause is justified.",
  },
  {
    title: "Time and storage",
    text:
      "Large updates need time and disk space. Competition decisions should consider whether the image can complete them safely.",
  },
];

const updateDecision = [
  {
    label: "Install now",
    signs:
      "Clear security value, manageable size, no major compatibility concern, and restart impact is understood.",
    example:
      "A routine cumulative security update is pending and the team has time to install and verify it.",
  },
  {
    label: "Coordinate first",
    signs:
      "The update may restart Windows, interrupt remote access, affect a required service, or consume significant time.",
    example:
      "A cumulative update is ready but another teammate is actively using the image for a forensic investigation.",
  },
  {
    label: "Investigate",
    signs:
      "The package repeatedly fails, appears unusual, depends on servicing health, or its role is unclear.",
    example:
      "Windows Update reports repeated installation failure with an error code and no successful recent servicing.",
  },
  {
    label: "Defer with reason",
    signs:
      "The package has high operational risk relative to competition value or requires more time than can be safely verified.",
    example:
      "A large feature update is offered late in the competition and would significantly alter the environment.",
  },
];

const settingsViews = [
  {
    title: "Windows Update",
    path: "Settings → Windows Update",
    use:
      "Shows overall status, pending updates, restart requirements, pause state, and access to history.",
  },
  {
    title: "Update history",
    path: "Settings → Windows Update → Update history",
    use:
      "Shows successful and failed quality, driver, definition, and other updates.",
  },
  {
    title: "Advanced options",
    path: "Settings → Windows Update → Advanced options",
    use:
      "Provides additional servicing controls and optional-update access.",
  },
  {
    title: "Optional updates",
    path: "Settings → Windows Update → Advanced options → Optional updates",
    use:
      "Lists non-mandatory packages such as some drivers or preview updates when available.",
  },
];

const inspectionCommands = [
  {
    label: "Windows Update service",
    command: 'Get-Service -Name wuauserv',
    purpose:
      "Shows whether the Windows Update service is present and its current status.",
  },
  {
    label: "BITS service",
    command: 'Get-Service -Name bits',
    purpose:
      "Shows the Background Intelligent Transfer Service, which is commonly involved in update downloads and other transfers.",
  },
  {
    label: "Recent hotfix inventory",
    command: "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 15",
    purpose:
      "Provides a quick view of recently installed hotfixes where available.",
  },
  {
    label: "Operating-system version",
    command: "Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, OsBuildNumber",
    purpose:
      "Helps document the Windows edition, version, and build before deciding whether servicing appears significantly behind.",
  },
];

const restartQuestions = [
  "Is a restart currently required?",
  "Is another teammate actively using the image?",
  "Could the restart interrupt RDP or another required remote-management path?",
  "Are forensic notes, screenshots, or unsaved evidence still open?",
  "Will required services return automatically after restart?",
  "Do we have enough competition time to restart and verify?",
  "Is there a working administrator account available after reboot?",
  "What specific functions will we test immediately afterward?",
];

const updateHistoryEvidence = [
  {
    title: "Successful install",
    text:
      "Confirms a package completed and can help establish when a security correction reached the image.",
  },
  {
    title: "Failed install",
    text:
      "May point to servicing corruption, insufficient storage, dependency issues, or another problem that needs investigation.",
  },
  {
    title: "Repeated failures",
    text:
      "A pattern matters more than one isolated failure and may indicate a persistent servicing problem.",
  },
  {
    title: "Driver history",
    text:
      "Can explain when a hardware or network issue began if a driver changed near the same time.",
  },
  {
    title: "Definition history",
    text:
      "Helps confirm that security intelligence has been receiving updates.",
  },
  {
    title: "Timeline context",
    text:
      "Install dates can support troubleshooting or forensic reasoning when matched with system events and user reports.",
  },
];

const troubleshootingCases = [
  {
    title: "Update is stuck downloading",
    checks:
      "Check network access, Windows Update and BITS service state, available storage, and whether the system is paused or waiting on another servicing action.",
  },
  {
    title: "Update repeatedly fails",
    checks:
      "Review update history, note the exact error, confirm free space and servicing health, and avoid repeatedly retrying without learning why it failed.",
  },
  {
    title: "Restart required but team is busy",
    checks:
      "Coordinate timing, save evidence and notes, stop unnecessary active work, and schedule the restart when verification can happen immediately afterward.",
  },
  {
    title: "Network stops working after driver update",
    checks:
      "Compare timing with update history, inspect the device and driver state, and determine whether the driver change is the likely cause before changing unrelated settings.",
  },
];

const servicingPrinciples = [
  {
    title: "Security value",
    text:
      "Prioritize updates that clearly reduce known security risk.",
  },
  {
    title: "Operational impact",
    text:
      "Consider restart, downtime, required-service interruption, storage, and installation time.",
  },
  {
    title: "Compatibility",
    text:
      "A required application or device may be affected by a large update or driver change.",
  },
  {
    title: "Verification",
    text:
      "An update is not complete until Windows, security controls, network access, and required applications still function.",
  },
];

const decisionCases = [
  {
    title: "Routine cumulative update pending",
    evidence:
      "A current cumulative security update is available, the system has adequate storage, and no teammate is using a restart-sensitive task.",
    reasoning:
      "The update has clear security value and manageable operational risk.",
    response:
      "Install, restart if required, then verify version/build, Windows Update state, Defender, networking, and required applications.",
  },
  {
    title: "Feature update offered late",
    evidence:
      "A major Windows feature update is available with limited competition time remaining.",
    reasoning:
      "The update may provide long-term value but can take significant time and alter compatibility or configuration.",
    response:
      "Do not treat it like a routine patch. Defer unless the scenario or system state gives a strong reason and there is time to verify thoroughly.",
  },
  {
    title: "Repeated security-update failure",
    evidence:
      "The same quality update has failed several times and Windows Update reports an error.",
    reasoning:
      "Repeated retries are unlikely to help unless the underlying servicing problem is identified.",
    response:
      "Document the error, inspect service state, storage, update history, and servicing health before deciding on remediation.",
  },
  {
    title: "Optional network driver update",
    evidence:
      "An optional network driver is available, but networking currently works and the scenario does not require the new driver.",
    reasoning:
      "The update has no obvious immediate competition value and carries compatibility risk.",
    response:
      "Leave it unchanged unless evidence shows the current driver is causing a problem.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "A Windows 11 workstation must stay available for local use and RDP. Microsoft Defender should remain current. The team has enough time for one controlled restart.",
  },
  {
    number: "02",
    title: "Inspect update state",
    text:
      "Windows shows one cumulative security update pending, one optional graphics driver, and a restart from an earlier Defender intelligence update is not required.",
  },
  {
    number: "03",
    title: "Review history",
    text:
      "Recent quality updates installed successfully. No recurring servicing failures appear in history.",
  },
  {
    number: "04",
    title: "Prioritize",
    text:
      "The cumulative security update has clear value. The optional graphics driver has no demonstrated need and is deferred.",
  },
  {
    number: "05",
    title: "Coordinate the restart",
    text:
      "The team saves work, confirms no forensic evidence is at risk, and ensures the authorized administrator can sign back in after reboot.",
  },
  {
    number: "06",
    title: "Verify after servicing",
    text:
      "Confirm Windows Update reports the intended state, RDP still works, Defender is healthy, networking is intact, and required applications open normally.",
  },
];

const postRestartVerification = [
  "Confirm the authorized administrator can sign in.",
  "Confirm network connectivity.",
  "Confirm RDP or other required remote access.",
  "Confirm Microsoft Defender Antivirus is healthy.",
  "Confirm Windows Defender Firewall profiles remain enabled.",
  "Confirm required services are running.",
  "Confirm required applications launch.",
  "Confirm Windows Update history shows the expected result.",
  "Confirm no new critical errors appeared during restart.",
];

const mistakes = [
  {
    title: "Installing every offered update",
    text:
      "Optional drivers and major feature updates may create more competition risk than value.",
  },
  {
    title: "Ignoring restart impact",
    text:
      "A restart can interrupt teammates, remote access, evidence collection, and active services.",
  },
  {
    title: "Treating one failed update as random",
    text:
      "Failure history can reveal a persistent servicing issue that deserves investigation.",
  },
  {
    title: "Retrying without reading the error",
    text:
      "Repeated retries waste time when the underlying storage, service, or servicing problem remains unchanged.",
  },
  {
    title: "Updating drivers without a reason",
    text:
      "A working network or storage driver does not automatically need replacement during a timed competition.",
  },
  {
    title: "No post-update verification",
    text:
      "A successful install is not enough. Required services and applications must still work after servicing.",
  },
];

const checklist = [
  "Open Windows Update and record the current state.",
  "Check for pending restart.",
  "Review update history for success and failure patterns.",
  "Identify pending security and quality updates.",
  "Separate optional drivers and feature updates from routine security servicing.",
  "Check available time and storage before large installs.",
  "Coordinate any restart with the team.",
  "Preserve forensic work and unsaved notes before reboot.",
  "Verify authorized administrator access after restart.",
  "Verify networking, RDP, Defender, firewall, services, and required applications.",
  "Confirm update history shows the expected result.",
  "Document failed or deferred updates with a reason.",
];

const reflection = [
  "Why should a feature update be treated differently from a routine cumulative security update?",
  "What does update history tell you that the main Windows Update page may not?",
  "Why can an optional driver update be a bad competition-time choice even if it is newer?",
  "What should be checked before restarting the image?",
  "Why should repeated update failures be investigated instead of retried blindly?",
  "What should be verified after a successful Windows update?",
];

export default function WindowsUpdatePatchManagementPage() {
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
            <Link href="/cyberpatriot/windows-11/windows-defender-firewall" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/services-startup-programs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 07
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Update &amp; Patch Management
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Evaluate Windows servicing intelligently: security value,
                restart risk, update history, compatibility, time, and
                post-update verification all matter.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Competition-ready patching is not “install everything” and not
                “avoid all updates.” It is a controlled decision about what
                improves security without creating unnecessary operational
                risk.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Update types</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Decision categories</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary risk</span>
                  <span className="font-bold text-white">Unverified change</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Secure, stable servicing</span>
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
            What patch management should help you reason about
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
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Patching is a risk-management decision
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The team weighs security benefit against downtime, restart impact,
              compatibility, and the ability to verify the image afterward.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A successful install can still create a bad outcome
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A patch may install successfully while breaking RDP, networking,
              a required application, or a device driver.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Treat post-update functional verification as part of the update,
              not an optional extra.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Update types
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Not every update has the same value or risk
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {updateTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Competition view
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.competition}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Update-state review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Understand the servicing state before acting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {statusAreas.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Decision model
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Four ways to classify a pending update
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {updateDecision.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.signs}</p>
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.example}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows Update views
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Where to review servicing information
            </h2>

            <div className="mt-5 grid gap-3">
              {settingsViews.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect servicing context without changing it
            </h2>

            <div className="mt-5 grid gap-3">
              {inspectionCommands.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Restart planning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A restart is a team event
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {restartQuestions.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Update history as evidence
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Servicing history helps explain the system
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {updateHistoryEvidence.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Servicing principles
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Four things to balance
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {servicingPrinciples.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Patch decisions in context
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.evidence}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.reasoning}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When servicing does not behave as expected
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshootingCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.checks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Apply one useful update without creating extra risk
          </h2>

          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Post-restart verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the image survived the servicing change
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {postRestartVerification.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Patch-management habits that waste time or create instability
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your patch-management reasoning
            </h2>

            <div className="mt-5 grid gap-3">
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Patch checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Review before leaving Windows Update
            </h2>

            <div className="mt-5 grid gap-3">
              {checklist.map((item, index) => (
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
                Services &amp; Startup Programs
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to review Windows services, startup types,
                dependencies, startup applications, and automatic execution
                without disabling required functionality blindly.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/services-startup-programs"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 08 →
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
            <Link href="/cyberpatriot/windows-11/windows-defender-firewall" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/services-startup-programs" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
