import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the practical competition differences between Ubuntu and Linux Mint without treating them as completely different operating systems.",
  "Recognize shared Debian and Ubuntu-family tools that work across both environments.",
  "Identify when desktop environment, package source, networking stack, update tools, or preinstalled software changes the review approach.",
  "Use system evidence to determine what the current image is actually running instead of assuming based on appearance.",
  "Avoid distro-specific shortcuts that could break required services or remove legitimate Mint or Ubuntu components.",
  "Build a comparison-based review workflow that keeps the core Linux security process consistent across both distributions.",
];

const sharedFoundation = [
  {
    title: "Debian package ecosystem",
    text:
      "Ubuntu and Linux Mint both use Debian-style packages and common tools such as apt, apt-cache, dpkg, and dpkg-query.",
  },
  {
    title: "systemd",
    text:
      "Modern Ubuntu and Linux Mint releases use systemd for services and system state, so systemctl and journalctl remain core tools.",
  },
  {
    title: "Users and groups",
    text:
      "Account, group, sudo, ownership, and permission concepts work the same way across both distributions.",
  },
  {
    title: "Linux filesystem",
    text:
      "Key paths such as /etc, /home, /var, /usr, /tmp, /proc, and /sys have the same general defensive meaning.",
  },
  {
    title: "OpenSSH and UFW",
    text:
      "SSH and UFW are common in both environments, although installed packages and active services can differ by image.",
  },
  {
    title: "Evidence-first reasoning",
    text:
      "The most important workflow remains the same: inspect, classify, change narrowly, and verify.",
  },
];

const identifySystemCommands = [
  {
    command: "cat /etc/os-release",
    purpose:
      "Show distribution name, version, ID, and related operating-system metadata.",
  },
  {
    command: "lsb_release -a 2>/dev/null",
    purpose:
      "Show distribution release information when the lsb_release tool is installed.",
  },
  {
    command: "uname -a",
    purpose:
      "Show kernel and architecture information.",
  },
  {
    command: "hostnamectl",
    purpose:
      "Show hostname, operating system, kernel, architecture, and virtualization details on many systemd systems.",
  },
  {
    command: "echo \"$XDG_CURRENT_DESKTOP\"",
    purpose:
      "Show the current desktop environment when the variable is available.",
  },
  {
    command: "echo \"$DESKTOP_SESSION\"",
    purpose:
      "Show the desktop session name when available.",
  },
  {
    command: "systemctl get-default",
    purpose:
      "Show the default systemd target, which helps identify whether the system normally boots to a graphical or multi-user environment.",
  },
  {
    command: "apt-cache policy | sed -n '1,160p'",
    purpose:
      "Review configured package origins and priorities at a high level.",
  },
];

const comparisonRows = [
  {
    area: "Base relationship",
    ubuntu:
      "Ubuntu is a standalone Linux distribution based on Debian.",
    mint:
      "Linux Mint is commonly built on Ubuntu LTS releases, with LMDE as a separate Debian-based edition.",
    takeaway:
      "Do not assume every Mint image is Ubuntu-based. Verify /etc/os-release and package sources.",
  },
  {
    area: "Desktop environment",
    ubuntu:
      "Ubuntu Desktop commonly uses GNOME with Ubuntu-specific customization.",
    mint:
      "Linux Mint commonly uses Cinnamon, MATE, or Xfce editions.",
    takeaway:
      "Graphical startup items, settings tools, and user-session behavior can differ because of the desktop environment.",
  },
  {
    area: "Package management",
    ubuntu:
      "Uses apt, dpkg, repositories, and Ubuntu package sources.",
    mint:
      "Also uses apt and dpkg, but includes Mint repositories and Mint-specific packages.",
    takeaway:
      "Do not remove a package just because it is unfamiliar on Ubuntu if it is a legitimate Mint component.",
  },
  {
    area: "Update tooling",
    ubuntu:
      "Ubuntu can use Software Updater, apt, unattended-upgrades, and related tools.",
    mint:
      "Mint includes Update Manager and Mint-specific update tooling in addition to apt.",
    takeaway:
      "Review what update mechanism is actually installed and active instead of forcing one workflow.",
  },
  {
    area: "Networking",
    ubuntu:
      "Desktop installs commonly use NetworkManager; some server images rely more on netplan and systemd-networkd.",
    mint:
      "Desktop editions commonly rely on NetworkManager.",
    takeaway:
      "Inspect the active network manager before editing netplan or low-level files.",
  },
  {
    area: "Software defaults",
    ubuntu:
      "Ships with Ubuntu-selected desktop applications and integrations.",
    mint:
      "Ships with Mint-selected applications, tools, themes, and desktop components.",
    takeaway:
      "A different default package set is not automatically suspicious.",
  },
  {
    area: "Snap usage",
    ubuntu:
      "Snap is commonly integrated into Ubuntu Desktop.",
    mint:
      "Mint has historically taken a more restrictive position on Snap and may not enable it by default.",
    takeaway:
      "Do not assume missing or disabled Snap support is a security problem on Mint.",
  },
  {
    area: "System hardening commands",
    ubuntu:
      "Core Linux commands such as getent, id, systemctl, journalctl, ss, ip, ufw, apt, and dpkg are widely applicable.",
    mint:
      "The same core commands usually apply.",
    takeaway:
      "Keep the defensive workflow mostly shared and branch only where the image actually differs.",
  },
];

const desktopDifferences = [
  {
    topic: "GNOME",
    commonOn:
      "Ubuntu Desktop",
    securityNote:
      "GNOME settings, extensions, startup behavior, and session components can influence what users see and what launches automatically.",
  },
  {
    topic: "Cinnamon",
    commonOn:
      "Linux Mint Cinnamon",
    securityNote:
      "Cinnamon applets, desklets, extensions, and startup applications may be legitimate Mint-specific components.",
  },
  {
    topic: "MATE",
    commonOn:
      "Linux Mint MATE",
    securityNote:
      "MATE session services and startup tools may look unfamiliar to students who trained only on GNOME.",
  },
  {
    topic: "Xfce",
    commonOn:
      "Linux Mint Xfce and some lightweight Ubuntu variants",
    securityNote:
      "Xfce uses its own session and autostart components. Investigate by path, package, and purpose rather than desktop familiarity.",
  },
];

const mintSpecificExamples = [
  {
    item: "mintupdate",
    meaning:
      "Linux Mint's update manager package/tooling.",
    caution:
      "Do not classify it as unwanted merely because it is not a standard Ubuntu desktop package.",
  },
  {
    item: "mintinstall",
    meaning:
      "Linux Mint's software management frontend.",
    caution:
      "It may be legitimate on Mint even if absent from Ubuntu.",
  },
  {
    item: "mintwelcome",
    meaning:
      "Mint welcome application used on desktop installs.",
    caution:
      "Desktop convenience software should still be evaluated against competition requirements, but it is not suspicious just because it is Mint-specific.",
  },
  {
    item: "Cinnamon components",
    meaning:
      "Desktop shell, session, settings, applets, and related packages.",
    caution:
      "Removing core desktop components can break the graphical environment.",
  },
];

const ubuntuSpecificExamples = [
  {
    item: "ubuntu-desktop",
    meaning:
      "Meta-package representing a standard Ubuntu desktop environment.",
    caution:
      "Removing desktop meta-packages can affect expected package relationships.",
  },
  {
    item: "snapd",
    meaning:
      "Snap package-management daemon commonly present on Ubuntu.",
    caution:
      "Whether it should remain depends on the scenario and installed applications; do not remove it simply because Mint often handles Snap differently.",
  },
  {
    item: "ubuntu-release-upgrader",
    meaning:
      "Ubuntu release upgrade tooling.",
    caution:
      "Normal system-management software is not suspicious by default.",
  },
  {
    item: "GNOME Shell extensions",
    meaning:
      "Desktop extensions used for Ubuntu integration and user experience.",
    caution:
      "Review unfamiliar extensions carefully but avoid breaking required desktop functionality.",
  },
];

const networkingDifferences = [
  {
    question: "Is NetworkManager active?",
    commands:
      "systemctl status NetworkManager; nmcli device status",
    reasoning:
      "Desktop Ubuntu and Mint often depend on NetworkManager. If it is active, direct edits to competing configuration layers can create conflicts.",
  },
  {
    question: "Is netplan actually in use?",
    commands:
      "ls -la /etc/netplan; cat /etc/netplan/*.yaml 2>/dev/null",
    reasoning:
      "Ubuntu commonly uses netplan, especially on server systems. Mint desktop images may rely primarily on NetworkManager without needing manual netplan changes.",
  },
  {
    question: "Is systemd-networkd active?",
    commands:
      "systemctl status systemd-networkd; networkctl",
    reasoning:
      "Do not enable or disable networking backends based on distro assumptions.",
  },
  {
    question: "Who manages DNS?",
    commands:
      "resolvectl status; readlink -f /etc/resolv.conf",
    reasoning:
      "Resolver ownership may vary with installed components and release.",
  },
];

const packageSourceReview = [
  {
    command: "grep -RInE '^[[:space:]]*deb |^URIs:|^Suites:|^Components:' /etc/apt/sources.list /etc/apt/sources.list.d 2>/dev/null",
    purpose:
      "Review configured repository definitions across traditional and newer source formats.",
  },
  {
    command: "apt-cache policy",
    purpose:
      "Show configured package sources and package priority information.",
  },
  {
    command: "apt-cache policy package-name",
    purpose:
      "Show where a specific package version came from and which versions are available.",
  },
  {
    command: "dpkg -S /path/to/file",
    purpose:
      "Identify package ownership for unfamiliar binaries or desktop components.",
  },
  {
    command: "apt-mark showmanual",
    purpose:
      "Show manually installed packages that may deserve scenario-based review.",
  },
  {
    command: "snap list",
    purpose:
      "Show installed Snap packages when Snap is present.",
  },
  {
    command: "flatpak list",
    purpose:
      "Show Flatpak applications when Flatpak is installed.",
  },
];

const reasoningCases = [
  {
    finding: "A Mint image has packages with names beginning with mint",
    weak:
      "Remove them because they are not standard Ubuntu packages.",
    better:
      "Verify the image is Linux Mint, inspect package purpose, dependencies, and scenario role, then leave legitimate Mint components intact.",
  },
  {
    finding: "snapd is absent on Linux Mint",
    weak:
      "Install snapd because Ubuntu normally has it.",
    better:
      "Missing Snap support may be normal for Mint. Only install it if the scenario or required application actually needs it.",
  },
  {
    finding: "An Ubuntu system has GNOME extensions",
    weak:
      "Disable all extensions because extensions are risky.",
    better:
      "Inspect installed extensions, ownership, source, purpose, and scenario impact before disabling anything.",
  },
  {
    finding: "A Mint desktop uses Cinnamon",
    weak:
      "Replace it with GNOME so the commands match Ubuntu training.",
    better:
      "Keep the required desktop. Core Linux hardening remains similar; adapt only the desktop-specific review areas.",
  },
  {
    finding: "A network file differs from the one seen on another distro",
    weak:
      "Copy the Ubuntu configuration onto Mint.",
    better:
      "Identify the active network manager and current configuration source before making distro-specific assumptions.",
  },
  {
    finding: "A package repository points to a Mint mirror",
    weak:
      "Treat it as a rogue third-party repository.",
    better:
      "Confirm the distro and expected Mint repository structure before deciding whether a source is unauthorized.",
  },
];

const sharedCompetitionChecklist = [
  {
    area: "Scenario",
    action:
      "Read required users, services, applications, roles, and restrictions before hardening.",
  },
  {
    area: "Identity",
    action:
      "Review users, groups, sudo privilege, password state, and account purpose.",
  },
  {
    area: "Software",
    action:
      "Review installed packages, repositories, manual installs, Snap, Flatpak, and custom software where present.",
  },
  {
    area: "Services",
    action:
      "Review running, enabled, failed, and exposed services.",
  },
  {
    area: "Networking",
    action:
      "Review interfaces, routes, DNS, listeners, firewall rules, and remote access.",
  },
  {
    area: "Persistence",
    action:
      "Review systemd, cron, startup profiles, desktop autostart, shell configuration, and scheduled jobs.",
  },
  {
    area: "Evidence",
    action:
      "Review journal, auth logs, package logs, service logs, and relevant file metadata.",
  },
  {
    area: "Verification",
    action:
      "Confirm required users, services, applications, networking, and access still work after changes.",
  },
];

const distroDecisionPoints = [
  {
    question: "What distribution and release is this?",
    inspect:
      "cat /etc/os-release",
    decision:
      "Use the actual ID and version to interpret packages, repositories, and defaults.",
  },
  {
    question: "What desktop environment is active?",
    inspect:
      "echo \"$XDG_CURRENT_DESKTOP\"; echo \"$DESKTOP_SESSION\"",
    decision:
      "Review the desktop-specific startup and extension mechanisms that actually apply.",
  },
  {
    question: "What package sources are configured?",
    inspect:
      "apt-cache policy",
    decision:
      "Distinguish official Ubuntu, Mint, Debian, or approved third-party sources from unexplained repositories.",
  },
  {
    question: "What network manager is active?",
    inspect:
      "systemctl status NetworkManager systemd-networkd",
    decision:
      "Edit the configuration layer that really controls the interfaces.",
  },
  {
    question: "What software formats are present?",
    inspect:
      "apt list --installed; snap list; flatpak list",
    decision:
      "Do not assume apt inventory is the full software inventory.",
  },
  {
    question: "Which distro-specific packages are required?",
    inspect:
      "dpkg -l | grep -Ei 'ubuntu|mint|cinnamon|gnome|mate|xfce'",
    decision:
      "Avoid removing desktop or distro integration components until their role is understood.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Treating Mint as visually different Ubuntu and nothing more",
    risk:
      "Can cause mistakes with repositories, update tools, desktop components, and package expectations.",
  },
  {
    shortcut: "Treating Ubuntu and Mint as completely unrelated systems",
    risk:
      "Wastes time and causes duplicated workflows even though most Linux security concepts and tools are shared.",
  },
  {
    shortcut: "Removing distro-specific packages by name",
    risk:
      "Can break the desktop, update manager, software manager, or system integration.",
  },
  {
    shortcut: "Copying networking files from another distro image",
    risk:
      "Can conflict with the active network manager and remove connectivity.",
  },
  {
    shortcut: "Installing missing software just to match another distro",
    risk:
      "Adds unnecessary packages and changes the competition image without scenario justification.",
  },
  {
    shortcut: "Assuming one desktop's autostart model is universal",
    risk:
      "Can cause you to miss or misclassify startup behavior in GNOME, Cinnamon, MATE, or Xfce.",
  },
];

const verification = [
  {
    area: "Distribution identity",
    check:
      "Confirm /etc/os-release matches the environment you think you are managing.",
  },
  {
    area: "Package sources",
    check:
      "Confirm official and required repositories remain configured after cleanup.",
  },
  {
    area: "Desktop",
    check:
      "Confirm the required graphical session still launches and expected desktop components remain functional.",
  },
  {
    area: "Networking",
    check:
      "Confirm the actual network manager, DNS, routes, and required remote access still work.",
  },
  {
    area: "Services",
    check:
      "Confirm required systemd services and desktop/session services remain healthy.",
  },
  {
    area: "Software",
    check:
      "Confirm no required Ubuntu- or Mint-specific packages were removed during hardening.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: one VM is Ubuntu Desktop and one VM is Linux Mint Cinnamon. Both require SSH, a browser, and an internal HTTPS client.",
  },
  {
    step: "02",
    task:
      "Identify each distro, release, desktop environment, package sources, network manager, and installed software formats without changing anything.",
  },
  {
    step: "03",
    task:
      "Compare the shared Linux controls: users, sudo, services, packages, firewall, logs, cron, startup files, and networking.",
  },
  {
    step: "04",
    task:
      "Identify distro-specific components such as GNOME integration on Ubuntu and Mint/Cinnamon packages on Linux Mint.",
  },
  {
    step: "05",
    task:
      "Classify unfamiliar packages and startup items based on package ownership, distro role, and scenario requirements instead of name familiarity.",
  },
  {
    step: "06",
    task:
      "Apply only changes justified by the fictional scenario, avoiding removal of legitimate distro or desktop components.",
  },
  {
    step: "07",
    task:
      "Verify SSH, browser function, DNS, HTTPS access, desktop login, package sources, required services, and update tooling on both systems.",
  },
];

const checklist = [
  "I verify the distribution and release instead of guessing from appearance.",
  "I understand that Ubuntu and Mint share most core Linux security tools and concepts.",
  "I know that desktop environment differences can change startup and session behavior.",
  "I review package sources before deciding whether a repository is expected or unauthorized.",
  "I do not remove Mint-specific or Ubuntu-specific packages just because they are unfamiliar.",
  "I determine which network manager is active before editing networking configuration.",
  "I remember that apt may not be the complete software inventory when Snap or Flatpak is present.",
  "I apply the same evidence-first workflow across both distributions.",
  "I branch into distro-specific checks only when the actual image requires it.",
  "I verify required distro, desktop, network, service, and application functions after changes.",
];

const reflection = [
  "Why should Ubuntu and Linux Mint be taught as one main pathway instead of two completely separate tracks?",
  "What command should you use first to confirm whether a system is Ubuntu or Linux Mint?",
  "Why might a package beginning with mint be legitimate on one image but unusual on another?",
  "Why is the active desktop environment relevant to persistence review?",
  "Why should you inspect the active network manager before editing netplan or other network files?",
  "What should you verify after removing software or startup entries that appear distro-specific?",
];

export default function LinuxUbuntuVsMintDifferencesPage() {
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
              href="/cyberpatriot/linux/linux-defensive-command-line"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/final-review-checklist"
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
                Linux · Lesson 17
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ubuntu vs Linux Mint Competition Differences
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn which defensive workflows stay the same across Ubuntu and
                Linux Mint, which details can differ, and how to identify the
                actual system instead of relying on assumptions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Ubuntu and Linux Mint share far more than they differ. Treat them
                as one Linux pathway with targeted branches for desktop,
                repositories, update tooling, networking, and distro-specific
                packages when the evidence shows those differences matter.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Shared foundations</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Comparison areas</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Identity commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Shared workflow, targeted differences</span>
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
            Keep the Linux workflow consistent without ignoring real distro differences
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
              Most defensive reasoning stays the same
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Users, groups, permissions, services, packages, networking, logs,
              cron, SSH, UFW, and systemd are shared enough that students should
              not relearn the entire operating system for each distro.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition trap
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Familiarity with one distro can create bad assumptions on the other
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Confirm the distro, release, desktop, repositories, and active
              managers before deciding that a package or configuration is wrong.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Shared foundation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What usually stays the same
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sharedFoundation.map((item) => (
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
            Identify the actual image
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not manage the distro you think you have
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {identifySystemCommands.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Ubuntu vs Mint
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Practical differences that matter during review
          </h2>

          <div className="mt-8 grid gap-5">
            {comparisonRows.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.area}</h3>

                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      Ubuntu
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.ubuntu}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Linux Mint
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.mint}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Competition takeaway
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.takeaway}
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
            Desktop environments
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Desktop differences change startup context, not Linux fundamentals
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {desktopDifferences.map((item) => (
              <div
                key={item.topic}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.topic}</h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  {item.commonOn}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.securityNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              Mint-specific examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Unfamiliar does not mean unwanted
            </h2>

            <div className="mt-6 grid gap-3">
              {mintSpecificExamples.map((item) => (
                <div
                  key={item.item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="font-black text-emerald-200">{item.item}</code>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ubuntu-specific examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ubuntu defaults also need context
            </h2>

            <div className="mt-6 grid gap-3">
              {ubuntuSpecificExamples.map((item) => (
                <div
                  key={item.item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="font-black text-cyan-200">{item.item}</code>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.meaning}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Networking differences
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Identify the active manager before editing configuration
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {networkingDifferences.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.commands}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reasoning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Repository & software review
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm what software source belongs on this distro
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {packageSourceReview.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Distro decision points
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Branch only when the evidence says the image differs
          </h2>

          <div className="mt-8 grid gap-4">
            {distroDecisionPoints.map((item) => (
              <div
                key={item.question}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.9fr_1fr_1.2fr]"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <code className="overflow-x-auto text-sm text-cyan-200">
                  {item.inspect}
                </code>
                <p className="text-sm leading-6 text-slate-400">
                  {item.decision}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Shared competition checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            One core review process for both distributions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sharedCompetitionChecklist.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Distro familiarity is not evidence
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Distro assumptions that can break a competition image
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the distro still works as intended
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Compare a fictional Ubuntu image and Linux Mint image
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
                Keep one strong Linux workflow. Identify the actual distro and
                desktop, then branch only where repositories, update tooling,
                networking, or distro-specific packages truly differ.
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
              href="/cyberpatriot/linux/linux-defensive-command-line"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/final-review-checklist"
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
