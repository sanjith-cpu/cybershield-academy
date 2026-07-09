import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
  VisualDiagramCard,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/beginner/computers-devices-and-operating-systems";
const nextLesson = `${modulePath}/operating-systems-and-user-accounts`;

const components = [
  {
    name: "CPU",
    role: "Processes instructions and coordinates work inside the device.",
    defenderView: "High CPU use can be normal during updates or video editing, but unexpected spikes can be a clue worth investigating safely.",
  },
  {
    name: "RAM",
    role: "Temporarily holds information that active apps and the operating system are using.",
    defenderView: "Low memory can slow a device and cause crashes. Defenders look for patterns, not one random moment.",
  },
  {
    name: "Storage",
    role: "Keeps files, apps, system data, logs, and settings even when the device is powered off.",
    defenderView: "Storage health, free space, file organization, and backups all affect security and recovery.",
  },
  {
    name: "Network Adapter",
    role: "Lets the device communicate through Wi-Fi, Ethernet, Bluetooth, or cellular connections.",
    defenderView: "Network settings help defenders understand what the device can connect to and where traffic may be going.",
  },
  {
    name: "Battery / Power",
    role: "Provides energy and affects performance, sleep behavior, and update reliability.",
    defenderView: "A device that keeps dying during updates or backups can become less reliable and less secure.",
  },
  {
    name: "Firmware",
    role: "Low-level code that helps hardware start and communicate before the operating system fully loads.",
    defenderView: "Firmware updates and secure boot settings can support device trust, but students should not change them without trusted help.",
  },
];

const deviceInventory = [
  ["Device", "CyberShield-Laptop-04"],
  ["Owner Type", "School training device"],
  ["Operating System", "ExampleOS 12.4"],
  ["Storage Free", "18 GB remaining"],
  ["Last Update", "6 days ago"],
  ["Backup Status", "Not confirmed"],
];

const maintenanceSignals = [
  "A device has very low storage space before an important update.",
  "A school laptop has not restarted in 21 days.",
  "A shared computer has files saved to the desktop with unclear names.",
  "A student sees a warning that battery power is too low to finish updates.",
  "A device is slow only when many browser tabs and video apps are open.",
  "A device asks to connect to an unknown Bluetooth accessory.",
];

export default function DeviceComponentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B3 • Lesson B3.1
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Device Components and What They Do
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cyber defenders do not need to memorize every tiny part inside every device, but they do need to understand the main pieces that affect performance, updates, storage, account safety, network connections, and recovery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={modulePath}
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Back to Module
                </Link>
                <Link
                  href="/high-school/beginner"
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Beginner Track
                </Link>
                <Link
                  href="/high-school"
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  High School Hub
                </Link>
                <Link
                  href={nextLesson}
                  className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Next Lesson
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Defender Mindset
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                A device is an ecosystem, not just a screen.
              </h2>
              <p className="mt-4 text-slate-300">
                Hardware, software, accounts, updates, storage, and network settings work together. Defenders look for how these pieces support or weaken safety.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: students should observe and report device concerns safely. Do not open private files, change system settings, or inspect a real device without permission from a trusted adult or technology staff member.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={modulePath}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Beginner Track
          </Link>
          <Link
            href="/high-school"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            High School Hub
          </Link>
          <Link
            href={`${modulePath}/module-test`}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Module Test
          </Link>
          <Link
            href={nextLesson}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Next Lesson →
          </Link>
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B3: Computers, Devices, and Operating Systems"
          lessonTitle="B3.1 Device Components and What They Do"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can name at least one part of a computer, phone, or tablet.",
            "I understand that devices need updates, storage space, and safe settings to work reliably.",
            "I am ready to study device basics from a defensive and school-safe point of view.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A security team cannot protect a device it does not understand.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a school laptop is slow, missing updates, almost out of storage, and showing repeated connection warnings. A defender should not immediately blame malware or panic. A safer approach is to understand the device components, collect basic facts, and decide what needs trusted support.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            This lesson introduces the main device components in beginner-friendly language, then connects each component to defensive thinking: reliability, updates, account safety, data protection, and responsible troubleshooting.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Identify major device components such as CPU, RAM, storage, network adapters, power, and firmware.",
            },
            {
              title: "Learning Objective 2",
              text: "Explain how device components affect security, updates, reliability, and recovery.",
            },
            {
              title: "Learning Objective 3",
              text: "Use basic device information to make safe defensive observations without changing real systems.",
            },
          ].map((objective) => (
            <div
              key={objective.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                {objective.title}
              </p>
              <p className="mt-3 leading-7 text-slate-300">{objective.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Why This Matters
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Device basics help defenders avoid bad guesses.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Good defensive thinking</h3>
              <p className="mt-3 leading-7">
                The device is slow. I should check safe facts like storage space, update status, number of open apps, and whether the issue repeats before making a conclusion.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Bad defensive thinking</h3>
              <p className="mt-3 leading-7">
                The device is slow, so it must be hacked. I should start changing settings, deleting files, or opening folders to investigate on my own.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Every device has parts that support work, storage, communication, and trust.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A computer, phone, tablet, or school Chromebook is made of physical hardware and software that controls the hardware. The hardware does the work. The operating system manages the device. Apps help users complete tasks. Settings and accounts decide who can do what. Logs and alerts can help defenders understand what happened.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            For beginners, the most important idea is not memorizing every part. The important idea is understanding how device health connects to cybersecurity. A device that is updated, organized, backed up, locked, and used responsibly is easier to protect and easier to recover.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Visual Diagram
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Beginner Device Security Map</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake visual shows how defenders connect device components to safe questions. The goal is not to take apart a device. The goal is to understand what each part helps explain.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
                <div className="rounded-2xl border border-cyan-400/40 bg-slate-950 p-5 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Device</p>
                  <p className="mt-3 text-3xl font-black text-white">Laptop / Phone / Tablet</p>
                  <p className="mt-3 text-sm text-slate-300">A system made of hardware, software, accounts, data, and connections.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  ["Work", "CPU + RAM", "Is the device overloaded or behaving unusually?"],
                  ["Data", "Storage", "Are files organized, backed up, and protected?"],
                  ["Connection", "Network adapter", "What networks or accessories can it connect to?"],
                  ["Trust", "Firmware + OS", "Is the device starting, updating, and running safely?"],
                ].map(([label, part, question]) => (
                  <div key={label} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{label}</p>
                    <h3 className="mt-2 font-black text-white">{part}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Words Defenders Use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Hardware", "The physical parts of a device, such as the screen, keyboard, storage drive, battery, and internal chips."],
              ["Software", "Programs and instructions that tell the hardware what to do, including the operating system and apps."],
              ["Operating System", "The main software that manages the device, user accounts, files, apps, settings, and hardware."],
              ["Firmware", "Low-level software that helps hardware start and communicate correctly before the operating system fully runs."],
              ["Storage", "The place where files, apps, system data, settings, and logs can be saved."],
              ["Device Health", "The overall condition of a device, including updates, free space, battery, performance, and reliability."],
            ].map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-bold text-cyan-200">{term}</h3>
                <p className="mt-3 leading-7 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Technical Breakdown
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Major Components and the Defender View</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => (
              <div key={component.name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{component.name}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">What it does</p>
                <p className="mt-2 leading-7 text-slate-300">{component.role}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Defender view</p>
                <p className="mt-2 leading-7 text-slate-300">{component.defenderView}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Device Health Dashboard"
          subtitle="A safe training dashboard showing basic device health signals. These are not from a real device."
          metrics={[
            {
              label: "Update Status",
              value: "Review",
              note: "Last update was 6 days ago. Check school policy before changing anything.",
            },
            {
              label: "Storage Free",
              value: "18 GB",
              note: "Enough for normal use, but large downloads should be avoided.",
            },
            {
              label: "Battery Health",
              value: "Fair",
              note: "Low battery can interrupt updates and backups.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Inventory Snapshot
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">What a Defender Might Record</h2>
          <p className="mt-3 text-slate-300">
            Inventory information helps defenders understand what they are protecting. Students should never collect private information from real people or real devices for this training activity.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            {deviceInventory.map(([label, value]) => (
              <div key={label} className="grid border-b border-slate-800 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]">
                <div className="bg-slate-900 px-4 py-3 font-bold text-cyan-200">{label}</div>
                <div className="px-4 py-3 text-slate-300">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Safe Troubleshooting Order"
          description="When a device has a problem, defenders move from safe, low-risk observations toward trusted help. They do not jump into private files or risky settings."
          steps={[
            "Observe symptoms and write down facts.",
            "Check safe status clues like updates, storage, power, and open apps.",
            "Ask trusted technology staff before changing settings or investigating deeper.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Beginners Often Get Wrong</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Mistake", "Assuming every slow device has a security incident.", "Better habit", "Check normal causes first, then escalate if warning signs repeat or involve account/data risk."],
              ["Mistake", "Deleting random files to free space.", "Better habit", "Ask before removing files, especially on school or shared devices."],
              ["Mistake", "Ignoring updates forever because they feel annoying.", "Better habit", "Use trusted update prompts and follow school or family device rules."],
              ["Mistake", "Connecting unknown USB or Bluetooth devices just to see what happens.", "Better habit", "Do not connect unknown devices. Ask trusted staff if something appears suspicious."],
            ].map(([badLabel, badText, goodLabel, goodText]) => (
              <div key={badText} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">{badLabel}</p>
                <p className="mt-2 leading-7 text-red-100">{badText}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">{goodLabel}</p>
                <p className="mt-2 leading-7 text-emerald-100">{goodText}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Safe Defensive Lab
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Build a Fake Device Health Note</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Use the fake dashboard and fake inventory above. Write a short note that a student defender could send to a teacher or technology staff member. Your note should use facts, avoid panic, and avoid guessing.
          </p>
          <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Example format</p>
            <p className="mt-3 leading-8 text-slate-300">
              “The training laptop shows fair battery health, 18 GB free storage, and an update status that needs review. I did not change settings or open private files. Should technology staff check the update and backup status?”
            </p>
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Device Health Evidence Review"
          evidence={maintenanceSignals}
          question="Which conclusion is the safest and most accurate?"
          options={[
            "The device is definitely compromised because it is slow and low on battery.",
            "The device has several maintenance signals that should be documented and checked by trusted technology staff.",
            "The student should delete files and disable warnings to make the device faster.",
            "The student should connect another accessory to test whether Bluetooth is the problem.",
          ]}
          bestAnswer={1}
          explanation="The safest conclusion is based on evidence without exaggeration. Low storage, long uptime, battery issues, and unknown connections are maintenance or risk signals, but they do not prove a cyber incident. Document and ask trusted staff before changing anything."
        />

        <FakeAlertCard
          title="Low Storage May Block Updates"
          severity="Medium"
          time="09:20 AM"
          source="Fake Device Health Monitor"
          details="Training device CyberShield-Laptop-04 reports limited storage and update review needed. No private files were opened. No real device data is used."
          recommendation="Record the facts, avoid deleting files without permission, and ask trusted technology staff to review storage, updates, and backup status."
        />

        <FakeLogPanel
          title="Fake Device Maintenance Log"
          logs={[
            "2026-07-09 09:05:11 INFO  device=CyberShield-Laptop-04 status=boot_complete user=training-account",
            "2026-07-09 09:06:42 INFO  storage_free=18GB recommendation=monitor_before_large_updates",
            "2026-07-09 09:08:19 WARN  battery_status=fair note=connect_power_before_update",
            "2026-07-09 09:11:03 INFO  open_apps=browser,notes,video_tool context=possible_performance_slowdown",
            "2026-07-09 09:15:30 WARN  bluetooth_request=unknown-accessory action=do_not_connect_without_permission",
          ]}
        />

        <ScenarioDecisionLab
          title="The Slow School Laptop"
          scenario="A classmate says a shared school laptop is slow and asks you to fix it. You notice it has many tabs open, low battery, and a warning about updates. What should you do?"
          choices={[
            {
              label: "A",
              response: "Start deleting files and turning off settings so it runs faster.",
              outcome: "Risky. You could remove someone’s work, break a setting, or violate school rules.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Write down the safe facts, close only your own work if needed, and ask the teacher or technology staff for help.",
              outcome: "Best choice. You use evidence, avoid private files, and stay inside permission boundaries.",
              tone: "best",
            },
            {
              label: "C",
              response: "Tell everyone the laptop is hacked because it is slow.",
              outcome: "Caution. That conclusion is not supported by the evidence and could create unnecessary panic.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can name the CPU, RAM, storage, network adapter, power, firmware, and operating system at a beginner level.",
            "I can explain how updates, storage, battery, and network connections relate to device safety.",
            "I can separate a maintenance clue from proof of a cyber incident.",
            "I know not to change settings, open private files, or inspect real devices without permission.",
            "I can write a calm device health note using facts instead of guesses.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "Which component temporarily holds information for active apps?",
              choices: ["RAM", "Storage", "Battery", "Screen"],
              answer: 0,
              explanation: "RAM holds temporary working information while apps and the operating system are running.",
            },
            {
              question: "Why does storage space matter for device security and reliability?",
              choices: [
                "Storage only matters for photos, not security.",
                "Low storage can interfere with updates, backups, and normal device operation.",
                "Low storage always proves a device is compromised.",
                "Storage should be cleared by deleting random files.",
              ],
              answer: 1,
              explanation: "Low storage can make updates, backups, and performance harder. It is a signal to review safely, not proof of compromise.",
            },
            {
              question: "What is the safest response to an unknown Bluetooth accessory request on a school device?",
              choices: [
                "Connect it to see what it is.",
                "Ignore the warning forever.",
                "Do not connect it and ask a trusted adult or technology staff member.",
                "Share the device password with a friend so they can test it.",
              ],
              answer: 2,
              explanation: "Unknown accessories should not be connected casually. A trusted adult or technology staff member can help review the situation safely.",
            },
            {
              question: "Which statement shows the best defender thinking?",
              choices: [
                "A slow device is always hacked.",
                "I should collect private files to investigate.",
                "I should document safe facts before making a conclusion.",
                "I should change firmware settings without asking anyone.",
              ],
              answer: 2,
              explanation: "Defenders document safe facts, avoid unsupported conclusions, and stay within permission boundaries.",
            },
            {
              question: "What is firmware?",
              choices: [
                "A low-level type of software that helps hardware start and communicate.",
                "A backup copy of every student file.",
                "A browser tab that blocks ads.",
                "A folder for downloaded images.",
              ],
              answer: 0,
              explanation: "Firmware is low-level software that helps hardware start and operate correctly before the operating system fully runs.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create a Device Health Explainer"
          prompt="Write a one-page beginner explainer titled ‘How Device Components Affect Cybersecurity.’ Include at least four components, what each one does, and one defensive reason each component matters."
          tips={[
            "Use simple definitions.",
            "Connect each part to safety or reliability.",
            "Avoid scary claims that are not supported by evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Device security starts with understanding basic components and how they work together.",
            "Slow performance, low battery, low storage, and update warnings are clues, not automatic proof of an attack.",
            "Defenders use safe observations, documentation, and trusted help before changing settings or making conclusions.",
            "Students should never inspect real devices, private files, or system settings without clear permission.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={modulePath}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Beginner Track
          </Link>
          <Link
            href="/high-school"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            High School Hub
          </Link>
          <Link
            href={`${modulePath}/module-test`}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Module Test
          </Link>
          <Link
            href={nextLesson}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Next Lesson →
          </Link>
        </nav>
      </div>

      <Footer />
    </main>
  );
}