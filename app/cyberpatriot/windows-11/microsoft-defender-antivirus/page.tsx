import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the major protection areas inside Microsoft Defender Antivirus on Windows 11.",
  "Review real-time protection, cloud-delivered protection, signatures, exclusions, scans, and protection history.",
  "Recognize why Defender exclusions and disabled protections deserve investigation before removal or reconfiguration.",
  "Distinguish a suspicious finding from proof of malware and preserve evidence when forensic questions are involved.",
  "Use Windows Security and PowerShell to inspect Defender state in an authorized practice environment.",
  "Verify Defender health after changes without assuming that one green status indicator proves the entire system is secure.",
];

const protectionAreas = [
  {
    title: "Real-time protection",
    text:
      "Monitors files and activity as they are accessed. If it is disabled, determine why and whether the scenario permits that state.",
  },
  {
    title: "Cloud-delivered protection",
    text:
      "Uses Microsoft cloud intelligence to improve detection decisions. Review whether it is available and functioning as expected.",
  },
  {
    title: "Security intelligence",
    text:
      "Detection signatures and intelligence should be current enough to recognize known threats in the authorized environment.",
  },
  {
    title: "Automatic sample submission",
    text:
      "Can help improve cloud-based detection. Understand the setting in the context of the environment and privacy requirements.",
  },
  {
    title: "Tamper Protection",
    text:
      "Helps prevent unauthorized changes to important Defender settings. Treat unexpected disabled states as something to investigate.",
  },
  {
    title: "Controlled folder access",
    text:
      "Can help protect important folders from unauthorized changes, but may affect legitimate applications if configured without context.",
  },
];

const defenderViews = [
  {
    title: "Virus & threat protection",
    path:
      "Start → Windows Security → Virus & threat protection",
    text:
      "Shows current protection state, scan options, threat history, protection settings, and security intelligence information.",
  },
  {
    title: "Protection history",
    path:
      "Windows Security → Virus & threat protection → Protection history",
    text:
      "Shows recent Defender detections, blocked activity, remediation actions, and events that may matter for troubleshooting or forensics.",
  },
  {
    title: "Manage settings",
    path:
      "Windows Security → Virus & threat protection → Virus & threat protection settings → Manage settings",
    text:
      "Provides controls for real-time protection, cloud-delivered protection, exclusions, and other Defender features.",
  },
  {
    title: "Security intelligence updates",
    path:
      "Windows Security → Virus & threat protection → Virus & threat protection updates → Protection updates",
    text:
      "Shows whether Microsoft Defender Antivirus has recent detection intelligence available.",
  },
];

const inspectionCommands = [
  {
    label: "View Defender status",
    command: "Get-MpComputerStatus",
    purpose:
      "Displays Defender Antivirus status, protection state, signature information, and other useful health details.",
  },
  {
    label: "View Defender preferences",
    command: "Get-MpPreference",
    purpose:
      "Shows configuration such as exclusions and protection-related preferences for inspection.",
  },
  {
    label: "View known threats",
    command: "Get-MpThreat",
    purpose:
      "Shows threat information known to Defender in the authorized practice environment.",
  },
  {
    label: "View detections",
    command: "Get-MpThreatDetection",
    purpose:
      "Provides detection records that can help connect Defender alerts with time, file, and response evidence.",
  },
];

const statusQuestions = [
  "Is Microsoft Defender Antivirus active and healthy?",
  "Is real-time protection enabled?",
  "Are security intelligence updates reasonably current?",
  "Are there unexpected exclusions?",
  "Does Protection History contain unresolved or relevant findings?",
  "Is another approved antivirus product expected to be providing protection instead?",
  "Does the scenario require any software or folder that could be affected by Defender changes?",
  "Could current Defender evidence help answer a forensic question?",
];

const exclusions = [
  {
    type: "File exclusion",
    risk:
      "A specific file may be skipped during scanning. Confirm whether the file is legitimately required and why it is excluded.",
  },
  {
    type: "Folder exclusion",
    risk:
      "Everything inside the excluded folder may receive reduced scanning coverage, creating a potentially broad blind spot.",
  },
  {
    type: "Process exclusion",
    risk:
      "Files opened by an excluded process may receive different scanning treatment. Process exclusions deserve careful scrutiny.",
  },
  {
    type: "Extension exclusion",
    risk:
      "An entire file type may be excluded. Broad extension exclusions can create large protection gaps.",
  },
];

const exclusionQuestions = [
  "What exactly is excluded?",
  "Why was the exclusion created?",
  "Does the scenario or required application justify it?",
  "How broad is the exclusion?",
  "Is there evidence the exclusion is being abused?",
  "Would removing it break a required application?",
  "Can the exclusion be narrowed instead of removed entirely?",
  "What will be tested after the change?",
];

const scanTypes = [
  {
    title: "Quick scan",
    use:
      "Checks common locations and areas where threats are frequently found. Useful for a fast health check but not a complete inspection.",
  },
  {
    title: "Full scan",
    use:
      "Reviews files and running programs across the system and may take significantly longer.",
  },
  {
    title: "Custom scan",
    use:
      "Targets a selected location when evidence points to a particular folder, drive, or file set.",
  },
  {
    title: "Microsoft Defender Offline scan",
    use:
      "Restarts into a specialized scan environment and can help with difficult threats, but the restart impact must be considered during competition work.",
  },
];

const evidenceModel = [
  {
    title: "Alert",
    text:
      "A Defender alert is evidence that Defender observed something, not automatically the complete explanation of what happened.",
  },
  {
    title: "Artifact",
    text:
      "File path, process, hash, account, or other object connected to the detection.",
  },
  {
    title: "Time",
    text:
      "Detection and remediation timestamps help place Defender activity into a broader incident timeline.",
  },
  {
    title: "Action",
    text:
      "Defender may block, quarantine, remove, or otherwise respond. Record the actual action rather than assuming.",
  },
  {
    title: "Context",
    text:
      "Compare the alert with the scenario, installed software, user activity, and forensic questions before drawing conclusions.",
  },
];

const decisionCases = [
  {
    title: "Real-time protection is disabled",
    evidence:
      "Windows Security shows real-time protection off and the scenario gives no reason for it to remain disabled.",
    reasoning:
      "Disabled real-time protection creates a clear protection gap, but the team should still confirm whether another approved security product is expected.",
    response:
      "Verify the security-product context, restore expected protection, then re-check Defender status.",
  },
  {
    title: "A broad folder exclusion exists",
    evidence:
      "An entire downloads directory is excluded from Defender scanning and no required application appears to need that exception.",
    reasoning:
      "The exclusion creates a large blind spot and lacks an obvious legitimate dependency.",
    response:
      "Document the exclusion, verify there is no required dependency, remove or narrow it, and confirm protection remains healthy.",
  },
  {
    title: "A suspicious file is already quarantined",
    evidence:
      "Protection History shows a file was detected and quarantined before the team began work.",
    reasoning:
      "The alert and quarantine record may answer a forensic question or help explain earlier system activity.",
    response:
      "Record the evidence before clearing history or deleting artifacts, then verify the system is protected and no required file was affected.",
  },
  {
    title: "A required application triggers Defender",
    evidence:
      "A scenario-required training application is being blocked.",
    reasoning:
      "Blindly disabling Defender would solve the symptom by creating a much larger security problem.",
    response:
      "Confirm the application is genuinely required, inspect the detection details, and use the narrowest justified exception only if the authorized environment requires it.",
  },
];

const protectionHistoryQuestions = [
  "What was detected?",
  "Where was the artifact located?",
  "When was it detected?",
  "Which account or process context is visible?",
  "What action did Defender take?",
  "Is the item still active, quarantined, removed, or unresolved?",
  "Does the event connect to any forensic question?",
  "Should the evidence be documented before additional remediation?",
];

const safeChangeQuestions = [
  "Does the scenario require another antivirus or security product?",
  "Could this Defender setting affect a required application?",
  "Am I removing a protection control or restoring one?",
  "Could an exclusion be narrowed instead of removed broadly?",
  "Have I recorded relevant Protection History evidence first?",
  "Could a scan or offline action consume important competition time?",
  "Could a restart disrupt other teammates?",
  "How will I verify Defender health afterward?",
];

const lab = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "The Windows 11 workstation should use Microsoft Defender Antivirus. A required media application must continue functioning. A forensic question asks about a suspicious executable found earlier in the day.",
  },
  {
    number: "02",
    title: "Inspect Defender status",
    text:
      "Real-time protection is enabled, security intelligence is current, and Protection History contains a quarantined executable from the morning.",
  },
  {
    number: "03",
    title: "Review exclusions",
    text:
      "The required media application folder has a narrow exclusion, while the entire Downloads folder is also excluded with no documented reason.",
  },
  {
    number: "04",
    title: "Preserve evidence",
    text:
      "Record the suspicious executable path, detection time, Defender action, and any visible context before clearing or altering history.",
  },
  {
    number: "05",
    title: "Correct the unnecessary blind spot",
    text:
      "Keep only the justified narrow application exception if required, remove the unsupported broad exclusion, and avoid disabling Defender globally.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm Defender remains active, exclusions match the intended state, the required application still works, and the forensic evidence is documented.",
  },
];

const mistakes = [
  {
    title: "Clearing Protection History too early",
    text:
      "History may contain evidence needed for forensic questions or troubleshooting.",
  },
  {
    title: "Removing every exclusion immediately",
    text:
      "Some exclusions may support required software. Understand purpose before changing them.",
  },
  {
    title: "Disabling Defender to fix one blocked program",
    text:
      "That removes a major protection layer instead of solving the specific compatibility issue.",
  },
  {
    title: "Running a long scan without considering time",
    text:
      "A scan can be useful, but competition time and restart impact matter.",
  },
  {
    title: "Assuming green means secure",
    text:
      "Healthy Defender status does not prove users, firewall, services, software, or policy are secure.",
  },
  {
    title: "Treating an alert as the entire incident",
    text:
      "Defender detections are one evidence source and should be correlated with files, logs, users, tasks, and scenario context.",
  },
];

const verification = [
  "Confirm Microsoft Defender Antivirus is the expected protection product.",
  "Confirm real-time protection is enabled when required.",
  "Confirm security intelligence is reasonably current.",
  "Review exclusions and verify only justified exceptions remain.",
  "Review unresolved Protection History items.",
  "Confirm required applications still work.",
  "Confirm relevant forensic evidence has been documented.",
  "Re-run Get-MpComputerStatus when appropriate.",
  "Check for errors or warnings after the change.",
  "Document high-impact Defender changes for the team.",
];

const reflection = [
  "Why is a Defender exclusion not automatically malicious?",
  "Why should Protection History be reviewed before cleanup?",
  "What is the difference between a Quick scan and a Full scan?",
  "Why can disabling Defender to fix one application be dangerous?",
  "What evidence should be recorded from a Defender detection?",
  "What should be verified after changing Defender settings?",
];

export default function MicrosoftDefenderAntivirusPage() {
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
            <Link href="/cyberpatriot/windows-11/local-security-policy" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-defender-firewall" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Microsoft Defender Antivirus
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review Defender protection, exclusions, detections, scans, and
                evidence without disabling useful security controls or erasing
                information that may matter later.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Defender is both a protection tool and an evidence source.
                Strong competition work checks whether it is functioning,
                understands why exceptions exist, and preserves useful history
                before cleanup.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Protection areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Exclusion types</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Scan types</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Healthy, explainable protection</span>
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
            What Defender review should help you do
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
              Defender is more than a scan button
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Protection status, exclusions, security intelligence, history,
              detections, and remediation actions all contribute to the security
              picture.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Evidence warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Cleanup can destroy useful context
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Protection History may contain file paths, timestamps, detection
              names, and response details relevant to forensic questions.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Record important evidence before clearing history or making
              destructive changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Protection map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six Defender areas to understand
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {protectionAreas.map((item) => (
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
              Windows Security
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Where to review Defender
            </h2>
            <div className="mt-5 grid gap-3">
              {defenderViews.map((item) => (
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
              Initial status review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask these questions first
            </h2>
            <div className="mt-5 grid gap-3">
              {statusQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm Defender state from the command line
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Exclusions
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Every exception creates a potential blind spot
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {exclusions.map((item) => (
            <article
              key={item.type}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.type}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.risk}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Exclusion review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask before removing an exception
            </h2>
            <div className="mt-5 grid gap-3">
              {exclusionQuestions.map((item, index) => (
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
              Scan choices
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Match the scan to the evidence and time available
            </h2>
            <div className="mt-5 grid gap-3">
              {scanTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Protection History as evidence
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Turn an alert into a useful evidence record
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {evidenceModel.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {protectionHistoryQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Defender decisions in context
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
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Before changing Defender
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Eight safety questions
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {safeChangeQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remove an unnecessary Defender blind spot
          </h2>
          <div className="mt-8 grid gap-4">
            {lab.map((item) => (
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
          Defender habits that create avoidable problems
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm Defender is healthy and explainable
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

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Windows Defender Firewall
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how firewall profiles, inbound and outbound rules,
                required services, and remote-access dependencies fit together.
              </p>
            </div>
            <Link
              href="/cyberpatriot/windows-11/windows-defender-firewall"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 06 →
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
            <Link href="/cyberpatriot/windows-11/local-security-policy" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/windows-defender-firewall" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
