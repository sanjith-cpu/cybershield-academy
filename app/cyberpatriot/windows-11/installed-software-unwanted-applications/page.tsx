import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Build a reliable inventory of installed Windows software before uninstalling anything.",
  "Distinguish required software, unnecessary software, unsupported software, risky software, and unknown applications that need investigation.",
  "Recognize why an unfamiliar application is not automatically malicious.",
  "Evaluate application purpose, publisher, version, install path, startup behavior, services, and scenario requirements together.",
  "Use Windows Settings, Control Panel, Task Manager, services, and PowerShell to investigate software safely.",
  "Remove or disable software only when evidence supports the decision, then verify that required Windows functions still work.",
];

const softwareCategories = [
  {
    title: "Required software",
    text:
      "Explicitly required by the scenario or necessary for a required service, workflow, or competition task.",
    response:
      "Keep it available and harden its surrounding configuration rather than removing it.",
  },
  {
    title: "Unnecessary software",
    text:
      "Legitimate software that is not required and adds avoidable attack surface, background activity, or maintenance burden.",
    response:
      "Consider removing it if the scenario permits and no dependency exists.",
  },
  {
    title: "Unsupported / outdated software",
    text:
      "Software that is old, unmaintained, or significantly behind supported versions may carry elevated security risk.",
    response:
      "Investigate whether it is required, whether an update is available, and whether removal or replacement is appropriate.",
  },
  {
    title: "Risky or unauthorized software",
    text:
      "Software that conflicts with the scenario, violates policy, creates remote access, credential risk, or other unnecessary exposure.",
    response:
      "Document evidence and remove or remediate if the environment clearly does not require it.",
  },
  {
    title: "Unknown software",
    text:
      "An unfamiliar application with unclear purpose or ownership.",
    response:
      "Investigate publisher, path, version, services, startup entries, network use, and scenario purpose before acting.",
  },
];

const inventoryFields = [
  {
    title: "Application name",
    text:
      "Record the exact product name rather than relying on a shortened label or icon.",
  },
  {
    title: "Publisher",
    text:
      "A known publisher can provide context, but publisher name alone is not proof that software is safe or required.",
  },
  {
    title: "Version",
    text:
      "Version helps determine whether the software is current, outdated, or unsupported.",
  },
  {
    title: "Install date",
    text:
      "Can help establish when the software appeared and whether that timing matters to troubleshooting or forensics.",
  },
  {
    title: "Install path",
    text:
      "Location can help distinguish normal Program Files installations from unusual user-profile or temporary-directory locations.",
  },
  {
    title: "Startup behavior",
    text:
      "Check whether the software launches at sign-in or automatically starts background components.",
  },
  {
    title: "Services and tasks",
    text:
      "Many applications install services or scheduled tasks that may continue running even when the main application is not open.",
  },
  {
    title: "Scenario purpose",
    text:
      "The most important question is whether the software supports a function the scenario requires.",
  },
];

const reviewTools = [
  {
    title: "Installed apps",
    path: "Settings → Apps → Installed apps",
    text:
      "Primary Windows 11 view for application inventory, version information, modification options, and uninstall actions.",
  },
  {
    title: "Programs and Features",
    path: "Control Panel → Programs → Programs and Features",
    text:
      "Legacy application inventory that can still be useful for desktop software and installed components.",
  },
  {
    title: "Task Manager",
    path: "Task Manager → Processes / Startup apps",
    text:
      "Helps connect installed applications with active processes and automatic startup behavior.",
  },
  {
    title: "Services",
    path: "services.msc",
    text:
      "Useful when an application installs a background service that may continue operating without the main user interface.",
  },
];

const powershellExamples = [
  {
    label: "Store / packaged apps",
    command: "Get-AppxPackage | Select-Object Name, PackageFullName",
    purpose:
      "Lists installed AppX packages for inspection in an authorized practice environment.",
  },
  {
    label: "Installed MSI-style products",
    command:
      'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*" | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate',
    purpose:
      "Provides a useful installed-software inventory from a common uninstall registry location.",
  },
  {
    label: "32-bit applications on 64-bit Windows",
    command:
      'Get-ItemProperty "HKLM:\\Software\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*" | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate',
    purpose:
      "Shows many 32-bit desktop applications installed on 64-bit Windows.",
  },
  {
    label: "Startup entries",
    command:
      "Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location, User",
    purpose:
      "Helps connect installed software with automatic login-time execution.",
  },
];

const riskSignals = [
  {
    title: "Remote access capability",
    text:
      "Remote-control tools, remote shells, or unattended-access software deserve careful review if the scenario does not require them.",
  },
  {
    title: "Credential exposure",
    text:
      "Software that stores, reveals, weakens, or bypasses authentication controls can create significant risk.",
  },
  {
    title: "Unsupported version",
    text:
      "Outdated software may contain known vulnerabilities or depend on insecure legacy components.",
  },
  {
    title: "Unexpected persistence",
    text:
      "Software that installs startup entries, services, or scheduled tasks without a clear required purpose deserves investigation.",
  },
  {
    title: "Unusual install path",
    text:
      "Programs running from temporary folders or user-profile locations can be legitimate, but the context deserves closer review.",
  },
  {
    title: "No clear business or scenario need",
    text:
      "Even legitimate software increases attack surface if the system does not need it.",
  },
];

const evidenceQuestions = [
  "Is this application explicitly required by the scenario?",
  "Which user or workflow depends on it?",
  "Who published it and what version is installed?",
  "Where is it installed?",
  "Does it add a service, startup item, scheduled task, driver, browser extension, or firewall rule?",
  "Does it provide remote access or elevated capability?",
  "Is the version supported and reasonably current?",
  "Would uninstalling it break another required program or file type?",
  "Could the software or its artifacts matter to a forensic question?",
  "What should be tested after removal or update?",
];

const softwareDecisions = [
  {
    title: "Keep",
    text:
      "Use when software is required, supported enough for the scenario, and not creating an unjustified risk.",
  },
  {
    title: "Update",
    text:
      "Use when the application is required but the installed version has a clear patch or support problem and the update can be verified safely.",
  },
  {
    title: "Disable automatic behavior",
    text:
      "Use when the application is legitimate but its startup component or background helper is unnecessary.",
  },
  {
    title: "Uninstall",
    text:
      "Use when software is clearly unnecessary, unauthorized, unsupported beyond acceptable use, or creates unjustified exposure.",
  },
  {
    title: "Investigate",
    text:
      "Use when purpose, ownership, dependency, or risk is still unclear.",
  },
];

const dependencyChecks = [
  "Does another required application call or depend on this program?",
  "Does the software install a Windows service?",
  "Does it add a scheduled task?",
  "Does it provide a device driver?",
  "Does it register file associations required by the scenario?",
  "Does it open or require a firewall rule?",
  "Does it provide a browser extension or plugin needed for a required workflow?",
  "Does a forensic question depend on its logs, files, history, or install date?",
];

const decisionCases = [
  {
    title: "Required application is outdated",
    evidence:
      "The scenario requires a media-management application, but the installed version is old and a supported update is available.",
    reasoning:
      "The software cannot simply be removed because it is required. The security problem is the outdated version.",
    response:
      "Update only if the change can be completed and verified safely, then confirm the required application still works.",
  },
  {
    title: "Unnecessary remote-access tool",
    evidence:
      "A remote-control application is installed, launches automatically, and the scenario does not require it.",
    reasoning:
      "The software adds powerful remote capability without a justified purpose.",
    response:
      "Document the application and related startup/service artifacts, then remove it if no dependency or forensic need remains.",
  },
  {
    title: "Unknown utility in Program Files",
    evidence:
      "A utility with an unfamiliar name is installed by a known vendor and appears tied to a required hardware package.",
    reasoning:
      "Unfamiliarity alone is weak evidence. Removing it may break device functionality.",
    response:
      "Investigate vendor documentation, related processes, driver dependencies, and scenario need before deciding.",
  },
  {
    title: "Legitimate application with unnecessary updater",
    evidence:
      "A required application is installed, but its background updater launches for every user and is not needed during competition.",
    reasoning:
      "The application is required, but the automatic helper may be unnecessary.",
    response:
      "Keep the application, disable only the unnecessary automatic updater if safe, and verify the application still functions.",
  },
];

const uninstallWorkflow = [
  {
    number: "01",
    title: "Document the software",
    text:
      "Record name, publisher, version, path, install date, related service/startup/task entries, and why removal is justified.",
  },
  {
    number: "02",
    title: "Check dependencies",
    text:
      "Confirm no required application, service, driver, file type, user workflow, or forensic question depends on it.",
  },
  {
    number: "03",
    title: "Use the normal uninstall method",
    text:
      "Prefer Settings or the application's supported uninstaller instead of manually deleting program files.",
  },
  {
    number: "04",
    title: "Review leftovers",
    text:
      "Check whether services, startup entries, scheduled tasks, folders, firewall rules, or browser components remain.",
  },
  {
    number: "05",
    title: "Verify required functions",
    text:
      "Test the workflows most likely to have depended on the software.",
  },
  {
    number: "06",
    title: "Record the result",
    text:
      "Document what was removed, what remained, and whether any follow-up investigation is needed.",
  },
];

const forensicValue = [
  {
    title: "Install date",
    text:
      "Can help determine when an application first appeared relative to suspicious activity.",
  },
  {
    title: "Application logs",
    text:
      "May show usage, remote sessions, update activity, authentication, or errors.",
  },
  {
    title: "Recent files and configuration",
    text:
      "Application-specific settings may help explain how the software was used.",
  },
  {
    title: "Services and tasks",
    text:
      "Automatic components can show persistence or background activity connected to the application.",
  },
  {
    title: "Uninstall history",
    text:
      "Evidence that software was removed can matter when reconstructing a timeline.",
  },
  {
    title: "User ownership",
    text:
      "Per-user installations and profile paths can help identify which account interacted with the software.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "The workstation must keep a required browser, office suite, and media-management application. Remote-control software is not required. A forensic question asks when an unfamiliar tool appeared.",
  },
  {
    number: "02",
    title: "Inventory software",
    text:
      "The system contains the required applications, an old remote-control tool, a legitimate hardware utility, and an unfamiliar user-profile application.",
  },
  {
    number: "03",
    title: "Classify",
    text:
      "The browser and office suite are required. The media tool is required but outdated. The remote-control application is unnecessary. The hardware utility needs to remain. The user-profile application needs investigation.",
  },
  {
    number: "04",
    title: "Preserve evidence",
    text:
      "Record install date, path, publisher, startup behavior, and any related forensic artifacts before uninstalling the unnecessary remote-access software.",
  },
  {
    number: "05",
    title: "Apply controlled changes",
    text:
      "Remove only the clearly unnecessary remote-access tool, update the required media application only if time and compatibility allow, and leave the unknown application for further investigation.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm required applications still launch, networking and file associations remain healthy, no unwanted remote service remains, and forensic notes are complete.",
  },
];

const troubleshooting = [
  {
    symptom: "A required file type no longer opens",
    questions:
      "Was the removed program the registered handler? Is another required application available? Can the file association be restored safely?",
  },
  {
    symptom: "A service remains after uninstall",
    questions:
      "Did the supported uninstaller complete? Does the service path still exist? Is it shared by another component? Check before removing leftovers.",
  },
  {
    symptom: "Software reappears",
    questions:
      "Is an updater, deployment tool, scheduled task, package manager, or another user reinstalling it?",
  },
  {
    symptom: "A required application stops working after another uninstall",
    questions:
      "Did the removed software provide a shared runtime, driver, plugin, or dependency? Review install history and recent changes.",
  },
];

const mistakes = [
  {
    title: "Unfamiliar means malicious",
    text:
      "Legitimate vendor tools, drivers, runtimes, and support utilities can have unfamiliar names.",
  },
  {
    title: "Deleting program folders manually",
    text:
      "Manual deletion can leave services, tasks, registry entries, drivers, and broken dependencies behind.",
  },
  {
    title: "Removing software before preserving evidence",
    text:
      "Install dates, logs, configuration, and related artifacts may matter to a forensic question.",
  },
  {
    title: "Updating everything automatically",
    text:
      "A newer version can still create compatibility or restart risk during a timed competition.",
  },
  {
    title: "Ignoring bundled background components",
    text:
      "An application may install services, startup items, tasks, firewall rules, or browser extensions that remain after the main program is closed.",
  },
  {
    title: "No post-uninstall testing",
    text:
      "Required applications, file types, devices, or workflows may depend on shared components.",
  },
];

const verification = [
  "Re-open Installed apps and confirm the intended software state.",
  "Confirm required applications still launch.",
  "Confirm file associations used by the scenario still work.",
  "Confirm required browser, media, office, or specialty tools remain available.",
  "Review Services for leftover application services.",
  "Review Startup apps for leftover automatic launch entries.",
  "Review Task Scheduler later for remaining application tasks when appropriate.",
  "Confirm Windows Defender remains healthy.",
  "Confirm firewall rules were not unintentionally changed.",
  "Confirm no required device or driver function was lost.",
  "Document removed, updated, deferred, and unknown applications.",
];

const checklist = [
  "Inventory installed applications before uninstalling anything.",
  "Record name, publisher, version, install date, and path for suspicious or important software.",
  "Compare software with scenario-required applications.",
  "Review startup behavior, services, tasks, and firewall impact.",
  "Separate Required, Unnecessary, Unsupported, Risky, and Unknown software.",
  "Investigate unknown software before destructive action.",
  "Preserve relevant forensic artifacts before removal.",
  "Use supported uninstall methods.",
  "Review leftover services and startup items after uninstall.",
  "Verify required applications and file associations.",
  "Document updates, removals, deferred items, and unresolved software.",
];

const reflection = [
  "Why is an unfamiliar application not automatically malicious?",
  "What information should be recorded before uninstalling suspicious or unnecessary software?",
  "Why can removing one application break another required program?",
  "When is disabling a startup helper better than uninstalling the whole application?",
  "What makes remote-access software especially important to review?",
  "What should be verified after uninstalling or updating software?",
];

export default function InstalledSoftwareUnwantedApplicationsPage() {
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
            <Link href="/cyberpatriot/windows-11/services-startup-programs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/files-folders-share-permissions" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 09
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Installed Software &amp; Unwanted Applications
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Inventory installed software, identify what the scenario
                requires, investigate unknown applications, and remove
                unnecessary exposure without breaking legitimate dependencies.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong software review is evidence-driven. A known application
                can still be unnecessary, and an unfamiliar application can
                still be legitimate. Purpose, publisher, version, path,
                dependencies, and scenario need all matter.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Software categories</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inventory fields</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary principle</span>
                  <span className="font-bold text-white">Evidence before uninstall</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Required software only</span>
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
            What software review should help you do
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
              Software should exist for a reason
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Every installed application adds code, dependencies, update
              requirements, and sometimes services or network exposure. Keep
              what is required and investigate what is not understood.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Removal warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Uninstall can remove more than the visible app
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Applications may provide shared runtimes, drivers, plugins,
              services, file associations, or other components required
              elsewhere.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Check dependencies and preserve evidence before destructive
              software changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Software classification
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Five useful categories for installed applications
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {softwareCategories.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Response
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Software inventory
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Record context before you decide
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {inventoryFields.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows review tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Build an application inventory from multiple views
            </h2>

            <div className="mt-5 grid gap-3">
              {reviewTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inventory
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect software without changing it
            </h2>

            <div className="mt-5 grid gap-3">
              {powershellExamples.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Risk signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Indicators that software deserves closer review
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {riskSignals.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence questions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask before changing or removing software
            </h2>

            <div className="mt-5 grid gap-3">
              {evidenceQuestions.map((item, index) => (
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
              Dependency check
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Software rarely exists in isolation
            </h2>

            <div className="mt-5 grid gap-3">
              {dependencyChecks.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Decision choices
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Five possible outcomes from software review
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {softwareDecisions.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Software decisions in context
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
            Safe uninstall process
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remove software without leaving the system in an unknown state
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {uninstallWorkflow.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.number}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Software as forensic evidence
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve context before cleanup
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {forensicValue.map((item) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remove unnecessary remote-access software without breaking required apps
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When a software change breaks something
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.questions}
                </p>
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
          Software-review habits that create avoidable problems
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
              Test your software-review reasoning
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
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the final software state
            </h2>

            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving Installed Software
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Files, Folders &amp; Share Permissions
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how NTFS permissions, share permissions, ownership,
                inheritance, least privilege, and effective access work together
                on Windows 11.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/files-folders-share-permissions"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 10 →
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
            <Link href="/cyberpatriot/windows-11/services-startup-programs" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/files-folders-share-permissions" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
