import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionRequirements = [
  "The workstation belongs to a fictional student media team and must remain usable for normal schoolwork.",
  "The approved local users are Jordan, Priya, and the built-in Administrator account.",
  "Jordan is the primary user and should remain a standard user.",
  "Priya is a temporary support user and should not have administrator privileges.",
  "Remote Desktop is not required for this workstation.",
  "Microsoft Defender and Windows Firewall should remain enabled.",
  "Windows Update should not be intentionally disabled.",
  "The browser and approved productivity applications must continue to work.",
];

const baselineChecks = [
  {
    area: "Identity",
    goal: "Understand who can sign in and who has elevated rights.",
    commands: [
      "Get-LocalUser",
      'Get-LocalGroupMember -Group "Administrators"',
      "whoami",
      "whoami /groups",
    ],
    record:
      "Account names, enabled/disabled state, administrator membership, and anything that conflicts with the mission briefing.",
  },
  {
    area: "Services",
    goal: "Identify unusual services without disabling required functionality.",
    commands: [
      "Get-Service",
      "Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName",
    ],
    record:
      "Service name, state, startup mode, service account, executable path, and whether the service is required by the scenario.",
  },
  {
    area: "Firewall",
    goal: "Verify firewall protection and inspect enabled rules before changing anything.",
    commands: [
      "Get-NetFirewallProfile",
      "Get-NetFirewallRule -Enabled True",
    ],
    record:
      "Profile state, unusual enabled rules, rule direction, and any rule that appears related to remote access.",
  },
  {
    area: "Startup",
    goal: "Review common startup locations for unexpected persistence or unnecessary auto-start entries.",
    commands: [
      "Get-CimInstance Win32_StartupCommand",
      'Get-ItemProperty "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
      'Get-ItemProperty "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"',
    ],
    record:
      "Startup item name, executable path, user context, and whether the item is expected.",
  },
  {
    area: "Scheduled Tasks",
    goal: "Find scheduled activity and distinguish configured state from actual execution.",
    commands: [
      "Get-ScheduledTask",
      'Get-ScheduledTaskInfo -TaskName "ExampleTask"',
    ],
    record:
      "Task name, action, trigger, run-as account, last run time, and whether it is expected.",
  },
  {
    area: "Processes",
    goal: "Capture volatile process state and map suspicious-looking activity to an executable path.",
    commands: [
      "Get-Process",
      "Get-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine",
    ],
    record:
      "PID, parent PID, process name, executable path, command line, and user/service context when available.",
  },
  {
    area: "Network",
    goal: "Understand addressing, listeners, and active connections.",
    commands: [
      "ipconfig /all",
      "Get-NetTCPConnection -State Listen",
      "Get-NetTCPConnection",
      "netstat -ano",
      "route print",
    ],
    record:
      "IP configuration, listening ports, owning PIDs, remote endpoints, and anything that should be investigated further.",
  },
  {
    area: "Security & Updates",
    goal: "Verify core protection without assuming a healthy status proves the workstation is clean.",
    commands: [
      "Get-MpComputerStatus",
      "Get-MpThreatDetection",
      "Get-HotFix | Sort-Object InstalledOn -Descending",
    ],
    record:
      "Defender state, protection status, any detection history, and visible update history.",
  },
];

const fictionalEvidence = [
  {
    id: "E01",
    source: "Local users",
    observation:
      "Jordan, Priya, Guest, and Administrator are present. Guest is disabled.",
    question:
      "Which accounts are explicitly approved by the mission briefing, and which require closer review?",
  },
  {
    id: "E02",
    source: "Administrators group",
    observation:
      "Administrator and Priya are members of the local Administrators group.",
    question:
      "Does the mission briefing support Priya having administrator privileges?",
  },
  {
    id: "E03",
    source: "Firewall profiles",
    observation:
      "Domain: On, Private: On, Public: On.",
    question:
      "Is there any reason to disable a profile based on this evidence?",
  },
  {
    id: "E04",
    source: "Startup inventory",
    observation:
      "One startup item named MediaSync launches from C:\\ProgramData\\MediaTools\\mediasync.exe.",
    question:
      "What additional evidence would you collect before deciding whether MediaSync is expected?",
  },
  {
    id: "E05",
    source: "Scheduled tasks",
    observation:
      "A task named MediaBackup runs daily at 18:00 under Jordan and launches an approved backup script.",
    question:
      "Why is task presence alone not enough to call it suspicious?",
  },
  {
    id: "E06",
    source: "Network listeners",
    observation:
      "TCP 3389 is listening and maps to a Windows service associated with Remote Desktop.",
    question:
      "How does the mission briefing change the priority of this finding?",
  },
  {
    id: "E07",
    source: "Defender",
    observation:
      "Real-time protection is enabled. No recent threat detections are listed.",
    question:
      "What does this prove, and what does it not prove?",
  },
  {
    id: "E08",
    source: "Updates",
    observation:
      "The most recent visible hotfix was installed several weeks ago.",
    question:
      "What should you verify before concluding that Windows Update is broken or disabled?",
  },
];

const findingCategories = [
  {
    label: "Expected",
    description:
      "The state matches the scenario and does not need remediation.",
  },
  {
    label: "Needs evidence",
    description:
      "The state is not clearly good or bad. Collect more context before changing it.",
  },
  {
    label: "Misconfigured",
    description:
      "The state conflicts with an explicit scenario requirement or defensible baseline.",
  },
  {
    label: "High priority",
    description:
      "The state conflicts with the mission and creates immediate security or availability risk.",
  },
];

const decisionPrompts = [
  "Which findings directly conflict with the mission briefing?",
  "Which finding looks unusual but still needs more evidence?",
  "Which evidence should be preserved before remediation?",
  "Which change would be the smallest justified correction?",
  "What command would you run immediately after that change to verify the result?",
  "What required functionality could be accidentally broken by a careless change?",
];

const remediationRules = [
  "Do not disable an account only because the name is unfamiliar.",
  "Do not remove administrator membership without confirming the mission requirement.",
  "Do not stop or disable a service until you understand what depends on it.",
  "Do not delete a scheduled task before recording its action, trigger, account, and run history.",
  "Do not kill a process before capturing path, command line, parent PID, and useful network context.",
  "Do not disable the firewall to solve a connectivity problem.",
  "Do not assume that no Defender detection means every file or process is safe.",
  "Change one justified item at a time, then verify.",
];

const verificationChecks = [
  {
    target: "Accounts",
    verify:
      "Re-run Get-LocalUser and the Administrators group check. Confirm approved users still exist and privilege matches the scenario.",
  },
  {
    target: "Remote access",
    verify:
      "Check Remote Desktop service/configuration and confirm the workstation still has the required local functionality.",
  },
  {
    target: "Firewall",
    verify:
      "Re-run Get-NetFirewallProfile and confirm all required profiles remain enabled.",
  },
  {
    target: "Services",
    verify:
      "Re-run service status for anything you changed and verify dependent functionality.",
  },
  {
    target: "Startup / tasks",
    verify:
      "Re-run the exact startup or scheduled-task check that identified the finding.",
  },
  {
    target: "Network",
    verify:
      "Re-check listeners, connections, and required connectivity after network-related changes.",
  },
  {
    target: "Defender / updates",
    verify:
      "Confirm Defender protection remains enabled and Windows Update has not been intentionally disabled.",
  },
];

const evidenceNotebook = [
  "Finding ID",
  "Source / command",
  "Direct observation",
  "Why it matters",
  "Scenario requirement involved",
  "Additional evidence needed",
  "Decision",
  "Change made",
  "Verification result",
];

const reflectionQuestions = [
  "Why is administrator-group membership more meaningful when compared with the mission briefing?",
  "Why should MediaSync not be removed immediately just because its name is unfamiliar?",
  "What is the difference between a firewall rule allowing a port and a service actually listening on that port?",
  "Why should you preserve scheduled-task details before deleting or disabling a task?",
  "Why does a clean Defender status not prove that every program is safe?",
  "Which baseline command gave you the most useful context, and why?",
  "What was the highest-risk mistake you could have made by acting too quickly?",
  "How did verification prevent you from assuming that a remediation worked?",
];

const completionChecklist = [
  "I read the mission briefing before running remediation commands.",
  "I identified approved users and expected privilege levels.",
  "I reviewed service state and paths before considering changes.",
  "I checked firewall profiles and did not disable protection.",
  "I reviewed startup items and scheduled tasks with context.",
  "I captured process and network evidence before changing volatile state.",
  "I checked Defender and visible update state.",
  "I made only scenario-supported defensive changes.",
  "I re-ran relevant checks after remediation.",
  "I can explain which observations were facts and which were inferences.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Windows11BaselineReviewLab() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/practice-labs/windows-11-account-service-investigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Practice Lab &middot; 01 &middot; Windows 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Baseline Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Build a disciplined first-pass review of a fictional Windows 11
                workstation. Your job is to understand the current state,
                identify conflicts with the mission briefing, and avoid broad,
                unsupported changes.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This lab is designed for an authorized practice VM. The evidence
                below is fictional and does not reveal any live CyberPatriot
                scoring answers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lab Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Difficulty</span>
                  <span className="font-bold text-white">Foundation</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows 11</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary skill</span>
                  <span className="font-bold text-white">Baseline review</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Rule</span>
                  <span className="font-bold text-white">Inspect first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Mission briefing
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Fictional student media workstation
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            You are reviewing a Windows 11 workstation used by a student media
            team. Keep approved productivity tools, browsing, local sign-in, and
            normal network access functional while correcting security issues
            supported by the mission.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {missionRequirements.map((item, index) => (
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Lab rule
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not remediate during the initial inventory
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Complete the baseline first. Record the current state, mark items
            that need more evidence, and only then decide what is justified by
            the mission requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Initial inventory"
            title="Build the baseline"
            description="Run these checks on an authorized practice VM, or use the fictional evidence later in the lab if you are working without a VM."
          />

          <div className="mt-8 grid gap-5">
            {baselineChecks.map((check) => (
              <div
                key={check.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-xl font-black text-white">{check.area}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {check.goal}
                    </p>

                    <div className="mt-5 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                        Record
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {check.record}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {check.commands.map((command) => (
                      <pre
                        key={command}
                        className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                      >
{command}
                      </pre>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Fictional evidence"
            title="Classify the findings before changing anything"
            description="These observations are intentionally incomplete. Use the mission briefing and your Windows knowledge to decide which need action and which need more evidence."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fictionalEvidence.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.source}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.observation}
                </p>

                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Your question
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Finding categories"
            title="Label what you know"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {findingCategories.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision checkpoint
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Stop and justify the next action
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {decisionPrompts.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Remediation guardrails
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid the changes that destroy evidence or break the workstation
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {remediationRules.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification"
            title="Prove that the correction worked"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {verificationChecks.map((item) => (
              <div
                key={item.target}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.target}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.verify}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence notebook"
            title="What your notes should contain"
            description="You do not need a special tool. A simple table or document is enough if it clearly separates observation, decision, change, and verification."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {evidenceNotebook.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Reflection"
            title="Debrief your reasoning"
            description="Answer these only after you finish the inspection and any justified remediation."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {reflectionQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Completion checklist
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Finish the lab only after verification
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/practice-labs"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Practice Labs
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
              href="/cyberpatriot/practice-labs/windows-11-account-service-investigation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lab &rarr;
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
