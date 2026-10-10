import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how APT, repositories, package metadata, dependencies, and installed software fit together on Ubuntu and Linux Mint.",
  "Inventory installed packages and software sources before removing or updating anything.",
  "Distinguish required, optional, unnecessary, suspicious, and unknown software using evidence rather than names alone.",
  "Review package origin, version, repository configuration, and update state without breaking required applications or services.",
  "Understand why package removal, repository edits, and full upgrades can have dependency and availability consequences.",
  "Verify system functionality after software changes and preserve evidence when a package may matter to forensics.",
];

const coreConcepts = [
  {
    title: "Package",
    text:
      "A package is a managed software unit that can contain programs, libraries, service files, configuration templates, documentation, and metadata.",
  },
  {
    title: "Repository",
    text:
      "A repository is a configured software source from which the package manager can learn about and retrieve packages and updates.",
  },
  {
    title: "Dependency",
    text:
      "A package may rely on other packages. Removing one package can therefore affect several applications or services.",
  },
  {
    title: "Installed state",
    text:
      "A package being installed does not prove that its service is running, that a user launches it, or that the software is required.",
  },
  {
    title: "Origin",
    text:
      "Package metadata can help show which repository or source a package came from, which is useful when evaluating unfamiliar software.",
  },
  {
    title: "Update posture",
    text:
      "Security updates matter, but upgrades should be planned around system role, required services, restart risk, and scenario requirements.",
  },
];

const packageTools = [
  {
    tool: "apt",
    use:
      "High-level package-management interface for searching, installing, removing, and updating packages.",
  },
  {
    tool: "apt-cache",
    use:
      "Queries package metadata, candidates, and repository policy without changing installed software.",
  },
  {
    tool: "dpkg",
    use:
      "Lower-level Debian package database tool useful for listing installed packages and identifying package ownership of files.",
  },
  {
    tool: "apt-mark",
    use:
      "Shows manually and automatically installed packages and can help with dependency reasoning.",
  },
  {
    tool: "snap",
    use:
      "Manages Snap packages if the system uses Snap.",
  },
  {
    tool: "flatpak",
    use:
      "Manages Flatpak applications if Flatpak is installed and in use.",
  },
];

const inspectionCommands = [
  {
    command: "apt list --installed 2>/dev/null",
    purpose:
      "List packages that APT reports as installed.",
  },
  {
    command: "dpkg -l",
    purpose:
      "Show Debian package database status for installed and previously known packages.",
  },
  {
    command: "apt-cache policy package-name",
    purpose:
      "Show installed version, candidate version, and configured repository sources for one package.",
  },
  {
    command: "apt show package-name",
    purpose:
      "Display package metadata such as description, dependencies, source, size, and version.",
  },
  {
    command: "dpkg -S /path/to/file",
    purpose:
      "Identify which Debian package owns a specific installed file when known to the package database.",
  },
  {
    command: "apt-mark showmanual",
    purpose:
      "List packages marked as manually installed.",
  },
  {
    command: "apt-mark showauto",
    purpose:
      "List packages marked as automatically installed as dependencies.",
  },
  {
    command: "apt list --upgradable 2>/dev/null",
    purpose:
      "Show packages with available upgrades according to the current package metadata.",
  },
  {
    command: "grep -R --no-filename -h '^[^#].*deb ' /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null",
    purpose:
      "Review active traditional APT repository entries without editing them.",
  },
  {
    command: "find /etc/apt/sources.list.d -maxdepth 1 -type f -print 2>/dev/null",
    purpose:
      "List repository source files for inspection.",
  },
  {
    command: "snap list 2>/dev/null",
    purpose:
      "List installed Snap packages when Snap is available.",
  },
  {
    command: "flatpak list 2>/dev/null",
    purpose:
      "List installed Flatpak applications and runtimes when Flatpak is available.",
  },
];

const classification = [
  {
    label: "Required",
    signs:
      "Named in the scenario, supports a required service, required by another known application, or clearly part of the intended system role.",
    action:
      "Preserve it. Review its configuration and update state rather than removing it.",
  },
  {
    label: "Optional",
    signs:
      "Legitimate software that is not clearly required but also not harmful or problematic.",
    action:
      "Leave it alone unless the scenario or policy gives a reason to remove it.",
  },
  {
    label: "Unnecessary",
    signs:
      "Legitimate software that is explicitly prohibited, clearly outside the intended role, or not needed and creates avoidable exposure.",
    action:
      "Confirm dependencies and removal impact before uninstalling.",
  },
  {
    label: "Suspicious",
    signs:
      "Unexpected origin, unusual package behavior, unexplained persistence, strange service relationship, or evidence connecting it to a security issue.",
    action:
      "Preserve evidence and investigate before removal.",
  },
  {
    label: "Unknown",
    signs:
      "Purpose, origin, dependency, or scenario relationship is not yet clear.",
    action:
      "Research locally using package metadata, file ownership, services, processes, and repository configuration.",
  },
];

const repositoryReview = [
  {
    area: "Main sources",
    path:
      "/etc/apt/sources.list",
    review:
      "Inspect active entries, distribution codename, repository components, and whether the source matches the intended system.",
  },
  {
    area: "Additional sources",
    path:
      "/etc/apt/sources.list.d/",
    review:
      "Review third-party repository files and understand which installed software depends on them.",
  },
  {
    area: "Keyrings",
    path:
      "/etc/apt/keyrings/",
    review:
      "On many modern systems, repository signing keys may be stored here or referenced from source definitions.",
  },
  {
    area: "Deb822 sources",
    path:
      "/etc/apt/sources.list.d/*.sources",
    review:
      "Newer systems may use Deb822-style .sources files instead of only traditional .list entries.",
  },
  {
    area: "APT history",
    path:
      "/var/log/apt/",
    review:
      "Package history can show installs, removals, and upgrades that may matter to troubleshooting or forensics.",
  },
];

const packageReasoning = [
  {
    finding: "An unfamiliar package is installed",
    weak:
      "Remove it because the name is unfamiliar.",
    better:
      "Use apt show, apt-cache policy, dpkg -L, service/process checks, and scenario context to determine purpose and dependencies first.",
  },
  {
    finding: "A package has an update available",
    weak:
      "Run a full upgrade immediately.",
    better:
      "Review required services, restart risk, dependency changes, available time, and scenario expectations before broad upgrading.",
  },
  {
    finding: "A third-party repository exists",
    weak:
      "Delete the repository file.",
    better:
      "Identify which software depends on the source, confirm legitimacy, and preserve evidence before changing repository configuration.",
  },
  {
    finding: "A package is marked auto-installed",
    weak:
      "Autoremove everything.",
    better:
      "Understand what packages depend on it and inspect the proposed autoremove set before accepting changes.",
  },
  {
    finding: "A server package exists on a desktop image",
    weak:
      "Server software does not belong on a desktop.",
    better:
      "Determine whether the scenario requires the service, whether it is active, which port it exposes, and whether it supports a required application.",
  },
  {
    finding: "A package was installed recently",
    weak:
      "Recent means malicious.",
    better:
      "Correlate APT history, user activity, service creation, file timestamps, and scenario changes before drawing a conclusion.",
  },
];

const safeUpdateWorkflow = [
  {
    step: "01",
    title: "Identify the system role",
    text:
      "Know which applications and services must remain available before changing software.",
  },
  {
    step: "02",
    title: "Refresh metadata deliberately",
    text:
      "Understand that apt update refreshes package metadata; it does not itself install package upgrades.",
  },
  {
    step: "03",
    title: "Review available upgrades",
    text:
      "Inspect which packages would change and whether critical services, kernels, libraries, or desktop components are involved.",
  },
  {
    step: "04",
    title: "Plan restart impact",
    text:
      "Some package updates may require service restarts or a reboot to fully apply.",
  },
  {
    step: "05",
    title: "Make the smallest justified change",
    text:
      "Apply scenario-supported updates or package changes without bundling unrelated removals or repository edits.",
  },
  {
    step: "06",
    title: "Verify required functions",
    text:
      "Test applications, services, networking, remote access, and user workflows after the change.",
  },
];

const controlledCommands = [
  {
    goal: "Refresh package metadata",
    command: "sudo apt update",
    caution:
      "This contacts configured repositories and refreshes metadata. Review repository configuration first if software sources are under investigation.",
  },
  {
    goal: "Upgrade one package",
    command: "sudo apt install --only-upgrade package-name",
    caution:
      "Review dependencies and service impact before upgrading a package tied to a required application.",
  },
  {
    goal: "Remove one package",
    command: "sudo apt remove package-name",
    caution:
      "Inspect the proposed removal set before confirming. Required dependencies or services may be affected.",
  },
  {
    goal: "Remove package and configuration",
    command: "sudo apt purge package-name",
    caution:
      "Purge can remove package-managed configuration files. Preserve evidence or custom configuration first when relevant.",
  },
  {
    goal: "Simulate removal",
    command: "apt -s remove package-name",
    caution:
      "Simulation helps preview package actions without applying them. Use it before high-impact removals.",
  },
  {
    goal: "Preview autoremove",
    command: "sudo apt -s autoremove",
    caution:
      "Never assume every automatically installed package is safe to remove. Review the proposed set.",
  },
];

const softwareSources = [
  {
    source: "Debian/APT packages",
    check:
      "Use apt, apt-cache, dpkg, and repository policy to understand package origin and dependency relationships.",
  },
  {
    source: "Snap",
    check:
      "Use snap list and snap info when Snap is present. A package may be legitimate even though it is not visible through dpkg.",
  },
  {
    source: "Flatpak",
    check:
      "Use flatpak list and application metadata when Flatpak is present.",
  },
  {
    source: "Manual installs",
    check:
      "Check /opt, /usr/local, user home directories, application launchers, services, and startup entries for software installed outside package managers.",
  },
  {
    source: "Scripts",
    check:
      "Administrative or user scripts may provide important functionality without appearing as installed packages.",
  },
  {
    source: "Containers or app bundles",
    check:
      "Some software may run through containers, AppImages, or other delivery methods. Package inventory alone is not a complete software inventory.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "sudo apt upgrade -y without review",
    risk:
      "Automatically accepting a broad upgrade can restart services, change dependencies, or create troubleshooting work without understanding the impact.",
  },
  {
    shortcut: "sudo apt autoremove -y",
    risk:
      "Automatic removal can uninstall dependencies that still matter to the image or required applications.",
  },
  {
    shortcut: "Removing every server package",
    risk:
      "A desktop image can still legitimately provide required network or application services.",
  },
  {
    shortcut: "Deleting third-party repositories immediately",
    risk:
      "The source may support required software, and the repository definition itself may be useful evidence.",
  },
  {
    shortcut: "Purging before preserving configuration",
    risk:
      "Package-managed configuration and logs may be lost or changed before you document them.",
  },
  {
    shortcut: "Treating package manager output as the whole software inventory",
    risk:
      "Manually installed programs, scripts, Snap, Flatpak, AppImages, and user software may not appear in the same inventory.",
  },
];

const evidenceSources = [
  {
    source: "APT history",
    command: "less /var/log/apt/history.log",
    value:
      "Shows recorded package install, upgrade, and removal actions where retained.",
  },
  {
    source: "dpkg log",
    command: "less /var/log/dpkg.log",
    value:
      "Shows lower-level package status changes where the log is retained.",
  },
  {
    source: "Package metadata",
    command: "apt show package-name",
    value:
      "Description, version, dependencies, source information, and other metadata.",
  },
  {
    source: "Repository policy",
    command: "apt-cache policy package-name",
    value:
      "Installed version, candidate version, and configured source priorities.",
  },
  {
    source: "File ownership",
    command: "dpkg -S /path/to/file",
    value:
      "Identifies the package that owns a known file when recorded in the package database.",
  },
  {
    source: "Service relationship",
    command: "systemctl status service-name",
    value:
      "Shows whether installed software is tied to an active service and provides recent runtime context.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: an internal web application and SSH are required; a media-sharing application is prohibited; package logs must be preserved.",
  },
  {
    step: "02",
    task:
      "Inventory installed APT packages, Snap packages, Flatpak applications, and obvious manually installed software without changing anything.",
  },
  {
    step: "03",
    task:
      "Use apt-cache policy and apt show on the unfamiliar packages to identify origin, version, description, and dependencies.",
  },
  {
    step: "04",
    task:
      "Correlate package names with running services, listening ports, files under /opt or /usr/local, and the scenario.",
  },
  {
    step: "05",
    task:
      "Classify the prohibited media-sharing software as Unnecessary only after confirming it is not required by another scenario function.",
  },
  {
    step: "06",
    task:
      "Use a simulated removal first and preserve relevant configuration or package-history evidence before uninstalling.",
  },
  {
    step: "07",
    task:
      "Verify the internal web application, SSH, package manager state, and repository configuration after the change.",
  },
];

const verification = [
  {
    area: "Package state",
    check:
      "Re-run apt or dpkg inventory and confirm the intended package is installed, upgraded, or removed.",
  },
  {
    area: "Dependency state",
    check:
      "Confirm required dependencies remain installed and no unexpected packages were removed.",
  },
  {
    area: "Service",
    check:
      "Verify required services still start and run after package changes.",
  },
  {
    area: "Application",
    check:
      "Test the real user-facing or client-facing application behavior.",
  },
  {
    area: "Repository",
    check:
      "Confirm software sources remain correct and package metadata refresh succeeds when required.",
  },
  {
    area: "Evidence",
    check:
      "Confirm package logs, configuration, and relevant metadata were preserved before destructive changes.",
  },
];

const checklist = [
  "I understand the difference between a package, repository, dependency, and installed service.",
  "I can inventory installed APT packages before changing them.",
  "I can use apt-cache policy and apt show to investigate package origin and metadata.",
  "I know that manually installed software, Snap, and Flatpak may not appear in the same inventory.",
  "I classify software using scenario role, dependencies, services, and evidence rather than package names alone.",
  "I preview package removals and autoremove actions before confirming them.",
  "I do not run broad upgrades automatically without reviewing impact.",
  "I preserve repository and package-history evidence when software may matter to forensics.",
  "I verify required services and applications after package changes.",
  "I keep Ubuntu and Linux Mint differences in mind when reviewing available software and default repositories.",
];

const reflection = [
  "Why is an installed package not the same thing as a running service?",
  "Why should a third-party repository be investigated before deletion?",
  "What makes apt -s useful before removing a package?",
  "Why can autoremove be risky even when packages are marked automatically installed?",
  "How would you investigate a program that does not appear in dpkg output?",
  "What should you verify after removing or upgrading software that supports a required service?",
];

export default function LinuxPackagesRepositoriesSoftwareReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/file-ownership-permissions"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/services-systemd"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Linux · Lesson 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Packages, Repositories & Software Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Inventory Linux software, understand package origins and
                dependencies, review repositories, plan updates carefully, and
                remove unnecessary software without breaking required services.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Package management is a security tool and an availability risk.
                The strongest workflow starts with inventory and dependency
                reasoning, then makes only the software changes supported by the
                scenario and verifies the result.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Software sources</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Safe software decisions</span>
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
            Understand software before you remove or upgrade it
          </h2>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Software inventory is dependency mapping
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              An installed package can provide a command, library, service, or
              dependency used elsewhere. Before removal, determine what the
              package does, who depends on it, and whether the scenario requires
              that function.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Package actions can change more than one thing
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Removal, purge, autoremove, and broad upgrades can affect
              dependencies, services, configuration, and reboot requirements.
              Preview the action and protect required functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Package-management fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind software review
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Tool map
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know which package tool answers which question
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {packageTools.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-lg font-black text-cyan-200">
                  {item.tool}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build a software inventory before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Package inventory is not complete software inventory
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Check Snap, Flatpak, /opt, /usr/local, user home directories,
              startup entries, services, and running processes when you need a
              fuller picture of installed software.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Software classification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Required, optional, unnecessary, suspicious, or unknown
          </h2>

          <div className="mt-8 grid gap-4">
            {classification.map((item) => (
              <div
                key={item.label}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.45fr_1.2fr_1fr]"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.signs}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Repository review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Software trust begins with configured sources
          </h2>

          <div className="mt-8 grid gap-4">
            {repositoryReview.map((item) => (
              <div
                key={item.area}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.55fr_0.8fr_1.2fr]"
              >
                <div>
                  <h3 className="text-lg font-black text-white">{item.area}</h3>
                </div>
                <code className="text-sm text-cyan-200">{item.path}</code>
                <p className="text-sm leading-6 text-slate-400">
                  {item.review}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Ubuntu and Mint can differ here
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Linux Mint commonly uses Ubuntu package foundations plus Mint
              repositories and its own update tooling. Review the actual image
              rather than assuming one repository layout fits both systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based software reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Replace package-name guesses with dependency analysis
          </h2>

          <div className="mt-8 grid gap-5">
            {packageReasoning.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Update workflow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Plan software updates around required functionality
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {safeUpdateWorkflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled package actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preview high-impact changes before confirming them
          </h2>

          <div className="mt-8 grid gap-4">
            {controlledCommands.map((item) => (
              <div
                key={item.goal}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Goal
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{item.goal}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Example
                  </p>
                  <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Complete software inventory
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Packages are only one delivery method
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {softwareSources.map((item) => (
              <div
                key={item.source}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.source}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Package actions that deserve extra caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <code className="text-sm font-black text-red-100">
                  {item.shortcut}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
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
              Evidence sources
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve software history before cleanup
            </h2>

            <div className="mt-6 grid gap-3">
              {evidenceSources.map((item) => (
                <div
                  key={item.source}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.source}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm software and mission state
            </h2>

            <div className="mt-6 grid gap-3">
              {verification.map((item) => (
                <div
                  key={item.area}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.area}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.check}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <p className="text-sm font-black text-emerald-200">
                Package success is application success
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The package manager completing successfully does not prove the
                mission still works. Test the required service or application
                afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review a fictional Linux software inventory
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Software review is about role, origin, dependency, and evidence.
                Inventory first, preview high-impact actions, preserve required
                services, and prove that the system still performs its mission
                after the package change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux/file-ownership-permissions"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/services-systemd"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
