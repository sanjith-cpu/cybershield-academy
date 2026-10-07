import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Microsoft Defender Antivirus health and protection state on Windows Server.",
  "Use Windows Security, PowerShell, and event evidence to inspect Defender without changing settings blindly.",
  "Understand the difference between protection status, signatures, scans, exclusions, detections, and remediation.",
  "Recognize why exclusions and disabled protections deserve careful investigation.",
  "Preserve detection evidence before removing files or changing security settings.",
  "Verify that required server roles and applications still function after Defender-related changes.",
];

const coreConcepts = [
  {
    title: "Protection state",
    text:
      "Whether Defender Antivirus and related protections are enabled and functioning on the server.",
  },
  {
    title: "Security intelligence",
    text:
      "The malware definitions and detection data Defender uses to identify threats.",
  },
  {
    title: "Scan",
    text:
      "A Defender inspection of files, memory, processes, or selected locations for suspicious content.",
  },
  {
    title: "Exclusion",
    text:
      "A file, folder, process, or extension that Defender is instructed to skip. Exclusions can be legitimate or risky.",
  },
  {
    title: "Detection",
    text:
      "A Defender finding that indicates suspicious or malicious content was identified.",
  },
  {
    title: "Remediation",
    text:
      "The action Defender or an administrator takes after a detection, such as quarantine, removal, or allowing an item.",
  },
];

const toolPaths = [
  {
    title: "Windows Security",
    path:
      "Start → Windows Security → Virus & threat protection",
    note:
      "Review overall antivirus status, current threats, scan options, and protection information when the Windows Security interface is available.",
  },
  {
    title: "Protection history",
    path:
      "Windows Security → Virus & threat protection → Protection history",
    note:
      "Review prior detections and actions. Preserve details before clearing or remediating suspicious items.",
  },
  {
    title: "Manage settings",
    path:
      "Windows Security → Virus & threat protection → Virus & threat protection settings → Manage settings",
    note:
      "Review real-time protection and related settings. Do not toggle protection casually on a server.",
  },
  {
    title: "Protection updates",
    path:
      "Windows Security → Virus & threat protection → Virus & threat protection updates → Protection updates",
    note:
      "Review security-intelligence version and update status.",
  },
  {
    title: "Event Viewer",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → Windows Defender → Operational",
    note:
      "Provides detailed Defender events useful for detection, remediation, and troubleshooting.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    note:
      "Use Get-MpComputerStatus, Get-MpPreference, Get-MpThreat, Get-MpThreatDetection, and Update-MpSignature for inspection and controlled maintenance.",
  },
];

const healthSignals = [
  {
    title: "Antivirus enabled",
    text:
      "Confirm Defender Antivirus is actually active unless the scenario explicitly uses another required security product.",
  },
  {
    title: "Real-time protection",
    text:
      "Real-time protection should be reviewed because disabling it weakens immediate file and process inspection.",
  },
  {
    title: "Security intelligence current",
    text:
      "Outdated definitions can reduce Defender's ability to recognize newer threats.",
  },
  {
    title: "Recent scan state",
    text:
      "Check whether recent scans completed successfully and whether any scan produced detections.",
  },
  {
    title: "Threat history",
    text:
      "Review detections and remediation state before changing suspicious files or exclusions.",
  },
  {
    title: "Exclusions",
    text:
      "Inspect every exclusion carefully because exclusions can create intentional blind spots.",
  },
];

const powershellChecks = [
  {
    label: "Defender health",
    command:
      "Get-MpComputerStatus",
    purpose:
      "Shows antivirus, real-time protection, engine, signature, and scan-status information.",
  },
  {
    label: "Defender preferences",
    command:
      "Get-MpPreference",
    purpose:
      "Reviews configured Defender settings, including exclusions and protection preferences.",
  },
  {
    label: "Known threats",
    command:
      "Get-MpThreat",
    purpose:
      "Lists known threat records maintained by Defender.",
  },
  {
    label: "Threat detections",
    command:
      "Get-MpThreatDetection",
    purpose:
      "Shows detailed Defender detection records and can provide useful evidence before remediation.",
  },
  {
    label: "Signature version",
    command:
      "Get-MpComputerStatus | Select-Object AntivirusSignatureVersion, AntivirusSignatureLastUpdated, AntispywareSignatureVersion",
    purpose:
      "Provides a concise check of Defender security-intelligence freshness.",
  },
  {
    label: "Exclusion review",
    command:
      "Get-MpPreference | Select-Object ExclusionPath, ExclusionProcess, ExclusionExtension",
    purpose:
      "Surfaces file, process, and extension exclusions for review.",
  },
];

const exclusionReview = [
  {
    title: "Path exclusions",
    question:
      "Does the excluded folder contain required application data, or is the exclusion unnecessarily broad?",
  },
  {
    title: "Process exclusions",
    question:
      "Is the excluded executable tied to a required application, and is the exact path known?",
  },
  {
    title: "Extension exclusions",
    question:
      "Does excluding an entire file type create a larger blind spot than necessary?",
  },
  {
    title: "Temporary exclusions",
    question:
      "Was the exclusion added for troubleshooting and never removed?",
  },
  {
    title: "Vendor-required exclusions",
    question:
      "Is there documented evidence that a required server application needs the exclusion?",
  },
  {
    title: "Suspicious exclusions",
    question:
      "Was the exclusion added around a suspicious path, script folder, or unusual executable?",
  },
];

const threatEvidence = [
  {
    title: "Threat name",
    text:
      "Record Defender's detection name exactly as shown.",
  },
  {
    title: "Detection time",
    text:
      "Record when the item was detected to help correlate it with logs or other activity.",
  },
  {
    title: "Affected path",
    text:
      "Record the file, process, archive, or location associated with the detection.",
  },
  {
    title: "Action status",
    text:
      "Note whether Defender quarantined, removed, blocked, allowed, or failed to remediate the item.",
  },
  {
    title: "User or process context",
    text:
      "When available, identify what user or process was associated with the detection.",
  },
  {
    title: "Related events",
    text:
      "Check Defender Operational logs and other relevant logs for corroborating evidence.",
  },
];

const scanTypes = [
  {
    title: "Quick scan",
    text:
      "Checks common threat locations and active areas. Useful for a fast initial health check.",
  },
  {
    title: "Full scan",
    text:
      "Examines a broader set of files and locations and can take significantly longer on a server.",
  },
  {
    title: "Custom scan",
    text:
      "Targets a specific folder or location when the investigation points to a known area.",
  },
  {
    title: "Offline scan",
    text:
      "May require a restart and should be treated as high-impact on a server because it interrupts availability.",
  },
];

const scanCommands = [
  {
    label: "Quick scan",
    command:
      "Start-MpScan -ScanType QuickScan",
    caution:
      "Use when a quick Defender scan is justified and the server can tolerate the resource usage.",
  },
  {
    label: "Full scan",
    command:
      "Start-MpScan -ScanType FullScan",
    caution:
      "Can be resource-intensive. Consider server role, workload, and time constraints before starting.",
  },
  {
    label: "Custom scan",
    command:
      'Start-MpScan -ScanType CustomScan -ScanPath "C:\\Path\\To\\Review"',
    caution:
      "Use when a specific path is under investigation. Replace the example path with the authorized target.",
  },
  {
    label: "Update security intelligence",
    command:
      "Update-MpSignature",
    caution:
      "Useful when definitions are outdated and network/update policy allows the operation.",
  },
];

const decisionCases = [
  {
    title: "Real-time protection is disabled",
    evidence:
      "Get-MpComputerStatus shows real-time protection is not active.",
    reasoning:
      "That is a meaningful security weakness unless another required security product or scenario constraint explains it.",
    response:
      "Confirm the intended antivirus configuration, check for another security product or policy, document the cause, and restore Defender protection only when appropriate for the authorized environment.",
  },
  {
    title: "Broad exclusion on C:\\Temp",
    evidence:
      "The entire folder is excluded, and suspicious scripts were recently observed there.",
    reasoning:
      "The exclusion creates a blind spot in a location already associated with suspicious activity.",
    response:
      "Preserve the exclusion evidence and suspicious files, confirm no required application depends on the exclusion, then narrow or remove it if justified.",
  },
  {
    title: "Required application folder is excluded",
    evidence:
      "A vendor document says the exclusion is required for a database workload.",
    reasoning:
      "The exclusion may be legitimate even though it reduces scanning coverage.",
    response:
      "Keep the narrowest documented exclusion, verify the application requirement, and avoid broadening it beyond what is necessary.",
  },
  {
    title: "Defender detected a file but the application still needs the path",
    evidence:
      "A detection appears inside a required application directory.",
    reasoning:
      "The path is required, but that does not make every file in it safe.",
    response:
      "Preserve the detection evidence, identify the specific file and process, investigate the application context, and remediate only the suspicious item when justified.",
  },
];

const investigationFlow = [
  {
    number: "01",
    title: "Confirm Defender health",
    text:
      "Use Windows Security and Get-MpComputerStatus to verify antivirus and real-time protection state.",
  },
  {
    number: "02",
    title: "Review definitions",
    text:
      "Check the security-intelligence version and last update time.",
  },
  {
    number: "03",
    title: "Review exclusions",
    text:
      "Use Get-MpPreference and the GUI to identify file, folder, process, and extension exclusions.",
  },
  {
    number: "04",
    title: "Review threat evidence",
    text:
      "Use Protection history, Get-MpThreat, Get-MpThreatDetection, and Defender Operational logs.",
  },
  {
    number: "05",
    title: "Preserve before remediation",
    text:
      "Record threat names, paths, times, status, and related logs before deleting or allowing anything.",
  },
  {
    number: "06",
    title: "Remediate narrowly and verify",
    text:
      "Make the smallest justified change, then verify Defender health and required server roles or applications.",
  },
];

const eventSignals = [
  {
    title: "Protection disabled",
    text:
      "Look for Defender events showing protection-state changes or unexpected service behavior.",
  },
  {
    title: "Threat detected",
    text:
      "Correlate detection events with file paths, users, processes, and timestamps.",
  },
  {
    title: "Threat action",
    text:
      "Review whether Defender quarantined, removed, blocked, or failed to remediate the item.",
  },
  {
    title: "Signature update",
    text:
      "Use update events to understand when security intelligence changed.",
  },
  {
    title: "Scan start / completion",
    text:
      "Confirm that scans actually completed rather than assuming a scan request succeeded.",
  },
  {
    title: "Configuration change",
    text:
      "Investigate unusual Defender preference or exclusion changes when event evidence is available.",
  },
];

const operationalRisks = [
  {
    title: "Running a full scan during critical workload",
    text:
      "Large scans can consume resources and should be planned around the server's required role.",
  },
  {
    title: "Deleting a detected file immediately",
    text:
      "You may destroy useful evidence or remove a file the application depends on before understanding the situation.",
  },
  {
    title: "Removing a documented exclusion blindly",
    text:
      "Some required applications may depend on narrow exclusions for stability or performance.",
  },
  {
    title: "Leaving broad exclusions in place",
    text:
      "Overly broad exclusions create large blind spots that attackers can exploit.",
  },
  {
    title: "Ignoring Defender because another tool exists",
    text:
      "Confirm the intended security product and actual protection state rather than assuming one replaces the other.",
  },
  {
    title: "Restarting for offline scanning without planning",
    text:
      "Server availability matters. Reboots must be coordinated with required roles and services.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Open Defender status",
    text:
      "On the fictional APP-SRV, open Windows Security → Virus & threat protection and record the visible protection state.",
  },
  {
    number: "02",
    title: "Confirm with PowerShell",
    text:
      "Run Get-MpComputerStatus and record antivirus, real-time protection, signature version, and last update time.",
  },
  {
    number: "03",
    title: "Review exclusions",
    text:
      "Run Get-MpPreference and identify one narrow vendor-documented exclusion plus one broad unexplained C:\\Temp exclusion.",
  },
  {
    number: "04",
    title: "Review threat evidence",
    text:
      "Protection history and Get-MpThreatDetection show a suspicious script inside C:\\Temp. Preserve its path, time, threat name, and remediation status.",
  },
  {
    number: "05",
    title: "Make the narrowest justified change",
    text:
      "Keep the documented application exclusion, remove or narrow the unexplained C:\\Temp exclusion if no dependency exists, and scan the specific suspicious location.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm Defender remains healthy, the required application still works, and the suspicious path is no longer broadly excluded.",
  },
];

const mistakes = [
  {
    title: "Treating every exclusion as malicious",
    text:
      "Some exclusions are legitimate and required by specific server applications.",
  },
  {
    title: "Treating every exclusion as harmless",
    text:
      "Broad exclusions are a common way to weaken protection and deserve evidence-based review.",
  },
  {
    title: "Removing evidence before documenting it",
    text:
      "Threat paths, times, and Defender history can be important for later analysis.",
  },
  {
    title: "Running heavy scans without considering server load",
    text:
      "Security work still has to preserve required availability.",
  },
  {
    title: "Assuming definitions are current",
    text:
      "Always check the actual signature version and last update time.",
  },
  {
    title: "Forgetting post-change verification",
    text:
      "A security change can interfere with required applications or services even when Defender itself looks healthy.",
  },
];

const verification = [
  "Defender Antivirus is in the intended active state.",
  "Real-time protection is in the intended active state.",
  "Security intelligence is current enough for the authorized environment.",
  "Required exclusions are documented and as narrow as possible.",
  "Unnecessary broad exclusions have been addressed.",
  "Threat detections and remediation status are documented.",
  "Required server roles and applications still function.",
  "Recent Defender events show no new unexpected protection failures.",
];

const checklist = [
  "Open Virus & threat protection.",
  "Review Protection history.",
  "Check real-time protection state.",
  "Check security-intelligence version and last update.",
  "Run Get-MpComputerStatus.",
  "Run Get-MpPreference.",
  "Review path, process, and extension exclusions.",
  "Review Get-MpThreat and Get-MpThreatDetection.",
  "Check Windows Defender Operational logs.",
  "Preserve evidence before remediation.",
  "Use targeted scans when appropriate.",
  "Verify required applications and services afterward.",
];

const reflection = [
  "Why is an exclusion not automatically malicious?",
  "Why can a broad exclusion still be dangerous even if Defender is otherwise enabled?",
  "Why should Protection history and Get-MpThreatDetection be reviewed before deleting a suspicious file?",
  "When might a custom scan be preferable to a full scan on a server?",
  "Why should an offline scan be treated as high-impact?",
  "What should be verified after changing Defender exclusions or protection settings?",
];

export default function MicrosoftDefenderAntivirusServerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/password-lockout-account-policies" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/windows-defender-firewall" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 07
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Microsoft Defender Antivirus
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review Defender health, real-time protection, security
                intelligence, exclusions, detections, and scan evidence without
                disrupting required server workloads.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Defender is not just an on/off switch. Strong review means
                understanding what is protected, what is excluded, what was
                detected, and how any remediation affects the server's job.
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
                  <span>Primary tool</span>
                  <span className="font-bold text-white">Windows Security</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>CLI</span>
                  <span className="font-bold text-white">Defender PowerShell</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Healthy + evidence-aware</span>
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Core concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand what Defender is telling you
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Healthy protection means more than "Defender is installed"
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Real-time protection, signatures, exclusions, detections, and
              event evidence all contribute to Defender's actual security state.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Preserve detections before cleanup
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Threat names, file paths, timestamps, actions, and Defender events
              can help explain what happened.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Record the evidence before deleting files, clearing history, or changing exclusions.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review Defender
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Health signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six areas that define Defender health
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {healthSignals.map((item) => (
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
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm the GUI with Defender cmdlets
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powershellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Exclusion review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Every exclusion should have a reason
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {exclusionReview.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Threat evidence
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What to preserve before remediation
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {threatEvidence.map((item) => (
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
          Scan strategy
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Choose the least disruptive scan that answers the question
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scanTypes.map((item) => (
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
            Controlled Defender actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Scan and update commands
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {scanCommands.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.caution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Investigation flow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            From health check to verified remediation
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {investigationFlow.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Defender event evidence
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Use the Operational log to understand what happened
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {eventSignals.map((item) => (
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Operational risks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Defender changes can affect server availability
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {operationalRisks.map((item) => (
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
            Defender decisions in server context
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review Defender on APP-SRV
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Defender mistakes that weaken protection or break workloads
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
              Test your Defender reasoning
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

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm Defender and the server are both healthy
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
            Before leaving Defender review
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
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Windows Defender Firewall
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review firewall profiles, inbound and outbound rules,
                service exposure, role dependencies, remote scope, and safe
                verification for Windows Server.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/windows-defender-firewall"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 08 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/password-lockout-account-policies" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/windows-defender-firewall" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
