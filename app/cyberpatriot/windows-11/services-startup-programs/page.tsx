import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between a Windows service, a startup application, and a scheduled or on-demand process.",
  "Review service status, startup type, account context, dependencies, and purpose before changing anything.",
  "Distinguish required services from unnecessary exposure, misconfiguration, and unknown items that need investigation.",
  "Review startup applications without assuming every unfamiliar entry is malicious.",
  "Use Services, Task Manager, Settings, and PowerShell to inspect automatic execution safely.",
  "Verify that service and startup changes reduce risk without breaking required Windows functionality.",
];

const serviceConcepts = [
  {
    title: "Service",
    text:
      "A Windows service is a background component that can start automatically, manually, by trigger, or on demand. Services often support networking, security, updates, remote management, applications, and core operating-system functions.",
  },
  {
    title: "Startup application",
    text:
      "A startup application launches when a user signs in. It may provide legitimate user functionality, support software, or create unnecessary background exposure.",
  },
  {
    title: "Process",
    text:
      "A running process is an active program instance. A process may have been started by a service, user, startup entry, scheduled task, or another process.",
  },
  {
    title: "Scheduled task",
    text:
      "A scheduled task starts according to a trigger or event. It is related to automatic execution but is reviewed separately in the later Task Scheduler lesson.",
  },
];

const startupTypes = [
  {
    title: "Automatic",
    meaning:
      "Windows attempts to start the service during normal system startup.",
    question:
      "Does this service need to be available every time Windows starts?",
  },
  {
    title: "Automatic (Delayed Start)",
    meaning:
      "The service starts automatically but waits until after higher-priority startup activity.",
    question:
      "Is delayed startup intentional for performance or dependency reasons?",
  },
  {
    title: "Manual",
    meaning:
      "The service does not necessarily run at boot but may start when Windows, an application, or an administrator requests it.",
    question:
      "Could a required feature start this service on demand?",
  },
  {
    title: "Disabled",
    meaning:
      "The service cannot start until its startup configuration is changed.",
    question:
      "Is the service intentionally disabled, or has a required function been broken?",
  },
];

const serviceReviewFields = [
  {
    title: "Display name and service name",
    text:
      "The friendly display name and internal service name may differ. Record both when investigating.",
  },
  {
    title: "Status",
    text:
      "Running, stopped, paused, or starting tells you what the service is doing now, not whether it should exist.",
  },
  {
    title: "Startup type",
    text:
      "Automatic, delayed, manual, or disabled shows how Windows is expected to start the service.",
  },
  {
    title: "Path to executable",
    text:
      "Shows which binary or command implements the service and can help distinguish legitimate software from an unknown entry.",
  },
  {
    title: "Log on account",
    text:
      "Shows the account context under which the service runs, such as Local System, Network Service, Local Service, or a specific account.",
  },
  {
    title: "Dependencies",
    text:
      "A service may depend on other services, and other services may depend on it. Stopping one component can break several functions.",
  },
  {
    title: "Description and vendor context",
    text:
      "Descriptions, application ownership, installation path, and vendor information help explain why the service exists.",
  },
  {
    title: "Scenario purpose",
    text:
      "The most important field is whether the service supports a function the scenario actually requires.",
  },
];

const classification = [
  {
    label: "Required",
    text:
      "The service or startup item clearly supports a scenario-required function or core Windows protection.",
    action:
      "Keep it available, harden related access where appropriate, and verify the required function.",
  },
  {
    label: "Unnecessary",
    text:
      "The item is understood, not required, and creates avoidable exposure or background activity.",
    action:
      "Disable or remove the automatic execution using the least disruptive justified method, then verify the image.",
  },
  {
    label: "Misconfigured",
    text:
      "The item is required but its startup type, account, access, or other configuration is inappropriate.",
    action:
      "Correct the specific configuration without removing the required function.",
  },
  {
    label: "Investigate",
    text:
      "The item is unfamiliar or potentially risky, but purpose and dependencies are not yet clear.",
    action:
      "Gather executable path, account, dependencies, application ownership, activity, and scenario evidence before changing it.",
  },
];

const requiredExamples = [
  {
    title: "Windows Update",
    text:
      "Servicing components may start on demand and work with other services. A stopped service is not automatically evidence that updates are disabled.",
  },
  {
    title: "Microsoft Defender-related services",
    text:
      "Security components support protection and should not be disabled merely to improve performance or silence an alert.",
  },
  {
    title: "Remote Desktop-related services",
    text:
      "If RDP is required, service state, firewall rules, user rights, and authorized users all have to align.",
  },
  {
    title: "File sharing services",
    text:
      "If a scenario requires file sharing, related services may be necessary even though unnecessary sharing should still be restricted.",
  },
  {
    title: "Application services",
    text:
      "Database, web, media, backup, or other scenario-required applications may install their own Windows services.",
  },
  {
    title: "Core networking and system services",
    text:
      "Many Windows components depend on background services that should not be disabled based only on an unfamiliar name.",
  },
];

const inspectionTools = [
  {
    title: "Services console",
    command: "services.msc",
    text:
      "Shows service name, description, status, startup type, logon account, and dependencies in a graphical interface.",
  },
  {
    title: "Task Manager — Startup apps",
    command: "Task Manager → Startup apps",
    text:
      "Shows applications configured to launch at user sign-in along with status and startup impact.",
  },
  {
    title: "Settings — Startup",
    command: "Settings → Apps → Startup",
    text:
      "Provides another supported view for enabling or disabling many user startup applications.",
  },
  {
    title: "Task Manager — Processes",
    command: "Task Manager → Processes / Details",
    text:
      "Helps connect running processes to applications and background activity during investigation.",
  },
];

const powershellCommands = [
  {
    label: "List services",
    command: "Get-Service | Sort-Object Status, DisplayName",
    purpose:
      "Provides a quick inventory of service status and display names.",
  },
  {
    label: "Inspect one service",
    command: 'Get-CimInstance Win32_Service -Filter "Name=\'Spooler\'" | Select-Object Name, DisplayName, State, StartMode, StartName, PathName',
    purpose:
      "Shows service state, startup mode, account context, and executable path for a known authorized example.",
  },
  {
    label: "Running automatic services",
    command:
      'Get-CimInstance Win32_Service | Where-Object {$_.StartMode -eq "Auto"} | Select-Object Name, DisplayName, State, StartName',
    purpose:
      "Helps review services configured for automatic startup without changing them.",
  },
  {
    label: "Startup commands",
    command:
      "Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location, User",
    purpose:
      "Lists many user and system startup entries for investigation and comparison with required software.",
  },
];

const dependencyQuestions = [
  "What required function does this service support?",
  "What depends on this service?",
  "What services does it depend on?",
  "Which account does it run as?",
  "Where is the executable located?",
  "Is the binary part of Windows, a required application, or unfamiliar software?",
  "Would stopping it affect RDP, networking, updates, security, shares, or another teammate?",
  "Can the service be set to Manual instead of Disabled if it only needs to run on demand?",
  "What exact test will prove the required function still works?",
];

const startupReview = [
  {
    title: "Publisher and application",
    text:
      "Identify which installed application owns the startup entry and whether that application is required.",
  },
  {
    title: "Command and path",
    text:
      "The path can reveal whether the startup item belongs to Windows, Program Files, a user profile, or an unexpected location.",
  },
  {
    title: "User scope",
    text:
      "Determine whether the item starts for one user or more broadly across the system.",
  },
  {
    title: "Function",
    text:
      "Some startup entries support synchronization, hardware, security, or required applications. Others only add convenience.",
  },
  {
    title: "Impact",
    text:
      "Startup impact can help prioritize performance review, but security and scenario purpose matter more than the impact label alone.",
  },
  {
    title: "Persistence context",
    text:
      "An unfamiliar startup item may deserve investigation as a persistence mechanism, but do not remove it until evidence supports the action.",
  },
];

const decisionCases = [
  {
    title: "Required RDP service is stopped",
    evidence:
      "The scenario requires RDP, but the relevant service is stopped and configured in a way that prevents normal required access.",
    reasoning:
      "The service supports a required function, so the issue is misconfiguration rather than unnecessary exposure.",
    response:
      "Restore the appropriate service configuration, then verify RDP with the authorized user, user rights, and firewall rule.",
  },
  {
    title: "Unknown automatic service in a user folder",
    evidence:
      "An automatic service runs from an unusual executable path under a user profile and has no clear description or required application owner.",
    reasoning:
      "The combination of automatic startup and unusual path deserves investigation, but deletion without evidence can still be unsafe.",
    response:
      "Record service name, path, account, dependencies, file details, and related logs before deciding whether the service is unauthorized.",
  },
  {
    title: "Legitimate updater starts at login",
    evidence:
      "A known application updater launches for every user at sign-in, but the application itself is required and updates are managed elsewhere.",
    reasoning:
      "The startup entry may be unnecessary even though the application is legitimate.",
    response:
      "Disable only the unnecessary startup behavior if the scenario allows it, while preserving the application itself.",
  },
  {
    title: "File-sharing service appears risky",
    evidence:
      "A file-sharing-related service is running, but the scenario requires a project share for authorized users.",
    reasoning:
      "Disabling the service would remove the required capability rather than securing it.",
    response:
      "Keep the required service and reduce exposure through permissions, firewall scope, and authorized-user controls instead.",
  },
];

const changeMethods = [
  {
    title: "Stop now",
    text:
      "Stops a running service for the current session but does not necessarily change what happens at the next startup.",
  },
  {
    title: "Change startup type",
    text:
      "Changes whether the service starts automatically, manually, or not at all. This can have larger long-term impact.",
  },
  {
    title: "Disable startup application",
    text:
      "Prevents a user startup item from launching automatically while leaving the application installed.",
  },
  {
    title: "Uninstall software",
    text:
      "Removes the application and should be reserved for software that is clearly unauthorized or unnecessary and safe to remove.",
  },
];

const troubleshooting = [
  {
    symptom: "A required feature stops working",
    questions:
      "Which service or startup item was changed? What does the feature depend on? Was a service set Disabled instead of Manual? Did a dependent service also stop?",
  },
  {
    symptom: "A service will not start",
    questions:
      "Is a dependency stopped? Is the logon account valid? Does Event Viewer show a Service Control Manager error? Is the executable path still present?",
  },
  {
    symptom: "A startup item returns",
    questions:
      "Is another updater, scheduled task, service, or application recreating it? Was the correct user scope changed?",
  },
  {
    symptom: "System becomes slow after changes",
    questions:
      "Were security, update, networking, or hardware-support services disabled? Compare recent changes and restore required components methodically.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "RDP, Microsoft Defender, Windows Update, and a project file share are required. A media helper application is installed but not required. A forensic question asks about an unfamiliar background service.",
  },
  {
    number: "02",
    title: "Review service inventory",
    text:
      "Required services are present. One RDP-related service is misconfigured, the file-sharing service is running, and an unfamiliar automatic service points to a user-profile executable.",
  },
  {
    number: "03",
    title: "Review startup applications",
    text:
      "The media helper launches for every user at sign-in even though the application is not required for the scenario.",
  },
  {
    number: "04",
    title: "Classify",
    text:
      "RDP is required but misconfigured. File sharing is required. The unfamiliar service needs investigation. The media helper startup item is unnecessary.",
  },
  {
    number: "05",
    title: "Apply controlled changes",
    text:
      "Correct the required RDP service configuration, keep required sharing available, disable only the unnecessary media startup entry, and preserve evidence about the unfamiliar service.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Test RDP, project-share access, Defender, and Windows Update; confirm the media helper no longer auto-starts; document the unknown service for forensic review.",
  },
];

const verification = [
  "Re-open Services and confirm every changed service state and startup type.",
  "Confirm required RDP or remote-management functions.",
  "Confirm required file sharing or application services.",
  "Confirm Microsoft Defender and Windows Update remain functional.",
  "Confirm network connectivity.",
  "Confirm disabled startup applications no longer launch automatically.",
  "Confirm required applications still open normally.",
  "Review Event Viewer for service-start failures or dependency errors.",
  "Document unfamiliar services and unresolved startup items.",
  "Record any high-impact service changes for the team.",
];

const mistakes = [
  {
    title: "Disabled because it was stopped",
    text:
      "A stopped service may be designed to start only when needed. Stopped does not mean unnecessary.",
  },
  {
    title: "Unknown name means malicious",
    text:
      "Windows and legitimate applications use many unfamiliar service names. Path, vendor, account, and dependency context matter.",
  },
  {
    title: "Disabling instead of using Manual",
    text:
      "Some services should be available on demand even if they do not need automatic startup.",
  },
  {
    title: "Ignoring service dependencies",
    text:
      "One change can break networking, remote access, updates, security, or an application through dependency chains.",
  },
  {
    title: "Removing an app to stop startup",
    text:
      "If only automatic launch is unnecessary, disabling startup may be safer than uninstalling required software.",
  },
  {
    title: "No functional test",
    text:
      "Service and startup changes are not complete until required functions still work.",
  },
];

const checklist = [
  "Review scenario-required services and applications first.",
  "Open Services and identify running, stopped, automatic, manual, and disabled items.",
  "Review service executable path and logon account for unfamiliar entries.",
  "Check dependencies before stopping or disabling a service.",
  "Separate Required, Unnecessary, Misconfigured, and Investigate items.",
  "Review Task Manager or Settings startup applications.",
  "Identify application owner and path for unfamiliar startup entries.",
  "Prefer the least disruptive correction.",
  "Do not disable security, update, networking, or remote-access services blindly.",
  "Verify required features immediately after high-impact changes.",
  "Check Event Viewer when a service fails.",
  "Document unresolved services and startup items for later review.",
];

const reflection = [
  "Why is a stopped service not automatically a service that should be disabled?",
  "What is the difference between Automatic, Manual, and Disabled startup types?",
  "Why should a service executable path and logon account be reviewed?",
  "What makes an unfamiliar startup application an Investigate item instead of an automatic removal?",
  "Why can disabling one service break an unrelated-looking feature?",
  "What should be verified after changing a required service or startup application?",
];

export default function ServicesStartupProgramsPage() {
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
            <Link href="/cyberpatriot/windows-11/windows-update-patch-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/installed-software-unwanted-applications" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Services &amp; Startup Programs
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review what starts automatically, why it exists, which account
                it uses, what depends on it, and whether it is required before
                making changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Good service hardening is not a contest to disable the most
                entries. It is a dependency-aware review of background
                functionality and automatic execution.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Automatic-execution concepts</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Service review fields</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Classification buckets</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Required-only automation</span>
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
            What this lesson should help you do
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
              Automatic does not mean unnecessary
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Windows starts many components automatically because other
              features depend on them. Purpose and dependency come before
              disable.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Dependency warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One service change can break multiple functions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Networking, RDP, file sharing, updates, security products, and
              applications can depend on background services.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Before disabling a service, know what depends on it and how you
              will test the required function afterward.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Automatic execution
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Four related concepts that are not the same thing
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceConcepts.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Startup types
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the startup mode before changing it
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {startupTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Ask
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.question}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Service review fields
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Eight pieces of context before you decide
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceReviewFields.map((item) => (
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
            Classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Put every service or startup item into the right category
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {classification.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Required-service context
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Familiar categories that often have dependencies
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {requiredExamples.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Inspection tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Review automatic execution from multiple views
            </h2>

            <div className="mt-5 grid gap-3">
              {inspectionTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Query services and startup entries safely
            </h2>

            <div className="mt-5 grid gap-3">
              {powershellCommands.map((item) => (
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
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Dependency check
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Ask before stopping or disabling
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {dependencyQuestions.map((item, index) => (
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
          Startup application review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Automatic login-time execution deserves context too
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {startupReview.map((item) => (
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
            Services and startup decisions in context
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Change choices
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Choose the least disruptive control
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {changeMethods.map((item) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Reduce unnecessary automatic execution without breaking required services
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
            When a service or startup change causes problems
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
          Service-hardening habits that create avoidable failures
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
              Test your service and startup reasoning
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
              Confirm required functionality remains healthy
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
            Before leaving Services and Startup
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
                Installed Software &amp; Unwanted Applications
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to inventory installed software, identify
                unnecessary or unauthorized applications, evaluate support and
                risk, and remove software safely when evidence justifies it.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/installed-software-unwanted-applications"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 09 →
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
            <Link href="/cyberpatriot/windows-11/windows-update-patch-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/installed-software-unwanted-applications" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
