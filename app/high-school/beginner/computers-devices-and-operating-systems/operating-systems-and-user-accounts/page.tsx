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
const previousLesson = `${modulePath}/device-components-and-what-they-do`;
const nextLesson = `${modulePath}/files-folders-and-extensions`;

const osResponsibilities = [
  {
    title: "User Accounts",
    description: "The operating system separates people, profiles, sign-ins, files, and permissions on the same device.",
    defenderView: "Separate accounts reduce accidental access to someone else's work and make shared-device use safer.",
  },
  {
    title: "Files and Storage",
    description: "The operating system organizes folders, saves files, and controls where apps can read or write data.",
    defenderView: "Good file organization and permission boundaries make it easier to protect and recover important data.",
  },
  {
    title: "Apps and Processes",
    description: "The operating system starts apps, runs background processes, and manages how much CPU, memory, and storage they use.",
    defenderView: "Defenders look for patterns in app behavior without making unsupported accusations from one slowdown.",
  },
  {
    title: "Settings and Updates",
    description: "The operating system provides security settings, update controls, notifications, privacy options, and device health tools.",
    defenderView: "Updates and safer default settings help close weaknesses and keep the device reliable.",
  },
  {
    title: "Hardware Access",
    description: "The operating system helps apps request access to cameras, microphones, location, storage, printers, and network connections.",
    defenderView: "Permissions should match real need. Extra access creates extra risk.",
  },
  {
    title: "Logs and Alerts",
    description: "The operating system can record basic events, warnings, update history, sign-in information, and device health messages.",
    defenderView: "Logs help defenders ask better questions, but fake classroom examples should never use private real data.",
  },
];

const accountTypes = [
  {
    type: "Standard User",
    use: "Daily schoolwork, browsing, documents, class apps, and normal device use.",
    safety: "Best default for most students because it limits major system changes.",
  },
  {
    type: "Administrator",
    use: "Installing trusted software, changing system-wide settings, managing accounts, and updating protected settings.",
    safety: "Should be limited to trusted adults, families, or technology staff because mistakes can affect the whole device.",
  },
  {
    type: "Guest / Temporary Account",
    use: "Short-term access on a shared device when supported by school or family rules.",
    safety: "Can reduce leftover personal data, but students still need to sign out and avoid saving private information.",
  },
  {
    type: "Shared Account",
    use: "Sometimes used in labs or classrooms when a device is managed for a group.",
    safety: "Can be convenient, but it is harder to separate responsibility and protect personal work.",
  },
];

const fakeAccountPanel = [
  ["Device", "CyberShield-Lab-Laptop-12"],
  ["Primary Student Account", "Standard user"],
  ["Teacher Support Account", "Managed administrator"],
  ["Guest Access", "Disabled for this fake lab"],
  ["Screen Lock", "Enabled after 5 minutes"],
  ["Recent Update", "Completed yesterday"],
];

const evidenceItems = [
  "A student account is listed as a standard user.",
  "A teacher support account has administrator rights.",
  "The shared laptop locks after 5 minutes of inactivity.",
  "A student says they want administrator access because updates are annoying.",
  "A classmate asks to use someone else's signed-in account to print quickly.",
  "The fake account panel shows guest access is disabled by policy.",
];

export default function OperatingSystemsUserAccountsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B3 • Lesson B3.2
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Operating Systems and User Accounts
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The operating system is the main software layer that manages the device. User accounts help separate people, files, permissions, settings, and responsibility on shared or personal devices.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={previousLesson}
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Previous Lesson
                </Link>
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
                Accounts are safety boundaries.
              </h2>
              <p className="mt-4 text-slate-300">
                A device is safer when people use their own accounts, permissions match real need, and administrator access is limited to trusted support.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: do not try to access someone else's account, guess passwords, change permissions, or bypass restrictions. Ask a trusted adult, teacher, guardian, or school technology staff member when access feels confusing or unsafe.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousLesson}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous
          </Link>
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
          lessonTitle="B3.2 Operating Systems and User Accounts"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I know that an operating system is the main software that helps a device run.",
            "I understand that user accounts separate people and their work on the same device.",
            "I am ready to study accounts and permissions from a safe defensive point of view.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A shared device without account boundaries creates confusion and risk.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a school lab laptop where everyone uses the same profile. One student saves a project, another downloads a file, a third changes browser settings, and nobody knows who did what. That does not automatically mean there is a cyber incident, but it does make safety, privacy, and troubleshooting much harder.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Defenders use operating system features like user accounts, standard permissions, screen locks, updates, and logs to help keep devices organized and safer.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain what an operating system manages on a device.",
            },
            {
              title: "Learning Objective 2",
              text: "Compare standard user, administrator, guest, and shared account concepts.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose safer account and permission decisions for school, home, and shared-device situations.",
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
            Accounts help protect privacy, responsibility, and system stability.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Safer device use</h3>
              <p className="mt-3 leading-7">
                Each person uses their own account, signs out when finished, stores work in the right place, and asks trusted support before changing protected settings.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Riskier device use</h3>
              <p className="mt-3 leading-7">
                People share passwords, use one account for everything, ignore sign-out habits, or demand administrator access for everyday tasks.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            The operating system is the device manager.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            An operating system manages the connection between hardware, apps, files, settings, and users. It decides how apps run, where files are stored, when updates are installed, what alerts appear, and which user is allowed to do which actions.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            User accounts are one of the most important beginner security concepts. They separate different people on the same device. A standard user account is usually safer for daily use because it limits major system changes. Administrator access should be used carefully because it can affect the whole device.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Visual Diagram
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Operating System Control Center</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake visual shows the operating system as the layer that coordinates users, apps, files, hardware, settings, and updates.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-64 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Main Layer</p>
                  <h3 className="mt-3 text-4xl font-black text-white">Operating System</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Manages device resources, accounts, files, apps, settings, updates, and alerts.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  ["Users", "Who is signed in and what they can access."],
                  ["Apps", "Which programs are installed, running, and requesting access."],
                  ["Files", "Where work is stored and who can open it."],
                  ["Settings", "Security, privacy, update, and device options."],
                  ["Hardware", "Camera, microphone, printer, storage, network, and power."],
                  ["Alerts", "Warnings, update messages, sign-in messages, and device health clues."],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
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
              ["Operating System", "The main software that manages a device's hardware, apps, accounts, files, settings, updates, and alerts."],
              ["User Account", "A profile for one person or purpose on a device, usually with its own files, settings, and sign-in method."],
              ["Standard User", "An account type designed for normal daily use with limits on major system-wide changes."],
              ["Administrator", "An account type with more power to install software, change system settings, and manage other accounts."],
              ["Permission", "A rule that allows or blocks access to a file, app feature, device setting, or system action."],
              ["Least Privilege", "The idea that users and apps should only have the access they actually need to do their work."],
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
          <h2 className="mt-2 text-2xl font-bold text-white">What the Operating System Manages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {osResponsibilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">What it manages</p>
                <p className="mt-2 leading-7 text-slate-300">{item.description}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Defender view</p>
                <p className="mt-2 leading-7 text-slate-300">{item.defenderView}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Account Types
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Different Accounts Have Different Levels of Access</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {accountTypes.map((account) => (
              <div key={account.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{account.type}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Typical use</p>
                <p className="mt-2 leading-7 text-slate-300">{account.use}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Safety note</p>
                <p className="mt-2 leading-7 text-slate-300">{account.safety}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Shared Device Account Dashboard"
          subtitle="A safe training dashboard showing account setup signals for a school lab device. These are not from a real device."
          metrics={[
            {
              label: "Student Account",
              value: "Standard",
              note: "Safer for daily use because it limits major system changes.",
            },
            {
              label: "Admin Access",
              value: "Managed",
              note: "Reserved for trusted support instead of everyday student activity.",
            },
            {
              label: "Auto Lock",
              value: "5 min",
              note: "Helps reduce exposure when someone walks away from a shared device.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Account Panel
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">What a Defender Might Review</h2>
          <p className="mt-3 text-slate-300">
            Account reviews should use approved tools, fake classroom examples, or trusted support. Students should never inspect someone else's real account settings or private files.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            {fakeAccountPanel.map(([label, value]) => (
              <div key={label} className="grid border-b border-slate-800 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]">
                <div className="bg-slate-900 px-4 py-3 font-bold text-cyan-200">{label}</div>
                <div className="px-4 py-3 text-slate-300">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Account Separation Model"
          description="Separate accounts help keep files, settings, and responsibility clearer on shared devices. The goal is not secrecy from trusted adults or school systems; the goal is safer organization and permission boundaries."
          steps={[
            "Each user signs in with their own approved account.",
            "Daily users keep standard access for normal work.",
            "Trusted support uses administrator access only when needed.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Beginners Often Get Wrong</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Mistake", "Thinking administrator access is always better because it gives more control.", "Better habit", "Use standard accounts for daily work and save administrator access for trusted support tasks."],
              ["Mistake", "Sharing a password so a friend can quickly use an account.", "Better habit", "Do not share passwords. Sign out and let the other person use their own approved account."],
              ["Mistake", "Assuming a shared account is harmless because it is convenient.", "Better habit", "Shared accounts can blur responsibility and expose saved work, so use them only when school policy requires it."],
              ["Mistake", "Changing account settings because a warning looks annoying.", "Better habit", "Ask a trusted adult or technology staff member before changing protected settings."],
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
          <h2 className="mt-2 text-2xl font-bold text-white">Review a Fake Shared-Computer Setup</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Use the fake account panel above. Decide which settings look safer, which settings need review, and what you would ask a teacher or technology staff member. Do not use real student accounts or real device settings for this activity.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Safe signal", "Student account is a standard user."],
              ["Review question", "Who manages the administrator account?"],
              ["Safe recommendation", "Keep screen lock on and remind users to sign out."],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{label}</p>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Account Safety Evidence Review"
          evidence={evidenceItems}
          question="Which conclusion is the safest and most accurate?"
          options={[
            "Every student should get administrator access so they can solve device problems faster.",
            "The setup has several safer choices, but students should still use their own accounts and ask trusted staff about access questions.",
            "A classmate can borrow someone else's signed-in account if the task is quick.",
            "Guest access being disabled proves the device has a serious security incident.",
          ]}
          bestAnswer={1}
          explanation="The best conclusion uses the evidence carefully. Standard accounts, managed admin access, and screen lock are safer signals. Students still need to sign out, avoid password sharing, and ask trusted staff before changing access settings."
        />

        <FakeAlertCard
          title="Administrator Access Request"
          severity="Medium"
          time="10:15 AM"
          source="Fake Account Review Panel"
          details="A student requests administrator access on CyberShield-Lab-Laptop-12 because they want to install an app for a class activity. This is a fake training alert."
          recommendation="Do not grant extra access casually. Ask the teacher or technology staff to verify the app, policy, and safer installation method."
        />

        <FakeLogPanel
          title="Fake Account Activity Log"
          logs={[
            "2026-07-09 10:05:44 INFO  device=CyberShield-Lab-Laptop-12 event=student_sign_in account_type=standard",
            "2026-07-09 10:07:02 INFO  screen_lock_policy=enabled timeout=5_minutes",
            "2026-07-09 10:11:19 WARN  request=administrator_access reason=install_class_app status=needs_staff_review",
            "2026-07-09 10:14:33 INFO  teacher_support_account=managed_admin last_used=approved_maintenance_window",
            "2026-07-09 10:18:08 WARN  sharing_request=use_classmate_account recommendation=deny_and_sign_out",
          ]}
        />

        <ScenarioDecisionLab
          title="The Shared Account Shortcut"
          scenario="A classmate says, ‘Just stay signed in so I can print my worksheet faster.’ The device is a shared school computer. What should you do?"
          choices={[
            {
              label: "A",
              response: "Stay signed in because it is only for one quick print job.",
              outcome: "Risky. Your account could expose your files, saved settings, or activity. It also blurs responsibility.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Sign out and ask the classmate to use their own approved account or ask the teacher for help.",
              outcome: "Best choice. You protect account boundaries and keep the device use responsible.",
              tone: "best",
            },
            {
              label: "C",
              response: "Give them your password so they can use the account later too.",
              outcome: "Dangerous choice. Password sharing weakens accountability and can expose private work.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can explain that the operating system manages users, files, apps, settings, updates, hardware, and alerts.",
            "I can describe why standard user accounts are safer for daily work than administrator accounts.",
            "I understand why password sharing and account sharing create privacy and responsibility problems.",
            "I can identify account setup signals that are safer, risky, or need trusted staff review.",
            "I know to ask trusted adults or technology staff before changing permissions, installing apps, or using administrator access.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "What does an operating system manage?",
              choices: [
                "Only the keyboard and screen",
                "Hardware, apps, files, accounts, settings, updates, and alerts",
                "Only websites and search engines",
                "Only the device wallpaper",
              ],
              answer: 1,
              explanation: "The operating system manages many parts of a device, including hardware, apps, files, accounts, settings, updates, and alerts.",
            },
            {
              question: "Which account type is usually safest for daily student work?",
              choices: ["Standard user", "Administrator", "Unknown shared account", "Anyone else's signed-in account"],
              answer: 0,
              explanation: "A standard user account is usually safer for daily work because it limits major system-wide changes.",
            },
            {
              question: "Why should administrator access be limited?",
              choices: [
                "Because administrator access can make system-wide changes that affect the whole device",
                "Because administrator accounts cannot open files",
                "Because standard accounts are always fake",
                "Because updates only work on guest accounts",
              ],
              answer: 0,
              explanation: "Administrator access can install software, manage accounts, and change system settings, so it should be used carefully by trusted support.",
            },
            {
              question: "What is the safest response if a classmate asks to use your signed-in account?",
              choices: [
                "Let them use it quickly",
                "Share your password but ask them to be careful",
                "Sign out and have them use their own approved account or ask a teacher",
                "Disable the screen lock",
              ],
              answer: 2,
              explanation: "Signing out and using separate approved accounts protects privacy and responsibility.",
            },
            {
              question: "What does least privilege mean?",
              choices: [
                "Give every user every permission just in case",
                "Give users and apps only the access they actually need",
                "Remove all accounts from the device",
                "Always use a shared account",
              ],
              answer: 1,
              explanation: "Least privilege means users and apps should only have the access needed for their real task.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create an Account Safety Guide"
          prompt="Write a one-page beginner guide titled ‘How User Accounts Protect Shared Devices.’ Explain standard accounts, administrator accounts, password sharing risk, sign-out habits, and when to ask technology staff for help."
          tips={[
            "Use beginner-friendly language.",
            "Include at least three safer habits for shared devices.",
            "Avoid telling students to change protected settings on their own.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "The operating system manages the device's users, apps, files, settings, updates, hardware, and alerts.",
            "User accounts create boundaries between people, files, permissions, and responsibility.",
            "Standard user accounts are usually safer for daily work than administrator accounts.",
            "Password sharing, staying signed in for others, and unnecessary administrator access create avoidable risk.",
            "Students should ask trusted adults or technology staff before changing permissions, installing apps, or handling account problems.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousLesson}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous
          </Link>
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