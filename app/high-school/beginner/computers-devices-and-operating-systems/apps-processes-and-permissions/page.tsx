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

const modulePath =
  "/high-school/beginner/computers-devices-and-operating-systems";
const previousLesson = `${modulePath}/files-folders-and-extensions`;
const nextLesson = `${modulePath}/updates-and-system-health`;

const appPermissionCards = [
  {
    permission: "Camera",
    normalUse:
      "Video calls, recording projects, scanning classroom QR codes when approved.",
    defensiveQuestion:
      "Does this app truly need camera access for its school-safe purpose?",
    saferAction:
      "Allow only when needed, and turn it off for apps that do not need it.",
  },
  {
    permission: "Microphone",
    normalUse:
      "Meetings, language practice, recordings, and accessibility tools.",
    defensiveQuestion:
      "Is the microphone needed right now, or can it be disabled after use?",
    saferAction:
      "Use temporary access when possible and review apps that can listen.",
  },
  {
    permission: "Location",
    normalUse:
      "Maps, weather, school transportation apps, and device finding features.",
    defensiveQuestion:
      "Would approximate or while-using access be safer than always-on access?",
    saferAction:
      "Avoid always-on location unless there is a clear trusted reason.",
  },
  {
    permission: "Files and Photos",
    normalUse:
      "Uploading assignments, editing media, saving documents, and attaching files.",
    defensiveQuestion: "Does the app need all files, or only selected files?",
    saferAction:
      "Choose limited access when available and check screenshots before sharing.",
  },
  {
    permission: "Contacts",
    normalUse:
      "Communication apps, collaboration tools, or account recovery in limited cases.",
    defensiveQuestion:
      "Could this expose other people&apos;s information unnecessarily?",
    saferAction: "Deny or limit access unless the app has a real trusted need.",
  },
  {
    permission: "Notifications",
    normalUse:
      "Login alerts, class updates, calendar reminders, and security notices.",
    defensiveQuestion:
      "Will these notifications help, distract, or pressure the user?",
    saferAction:
      "Keep useful security and school alerts; limit noisy or manipulative apps.",
  },
];

const fakeProcesses = [
  {
    name: "Browser.exe",
    status: "Running",
    purpose: "Viewing class resources and school websites.",
    signal: "Normal if the student is using the browser.",
    tone: "safer",
  },
  {
    name: "VideoCallApp",
    status: "Using microphone",
    purpose: "Live class discussion or meeting.",
    signal: "Expected during a meeting, but review after the call ends.",
    tone: "caution",
  },
  {
    name: "UnknownHelperTool",
    status: "Started at login",
    purpose: "Unclear from the name and context.",
    signal:
      "Needs trusted review before changing settings or deleting anything.",
    tone: "caution",
  },
  {
    name: "CloudSync",
    status: "Syncing files",
    purpose: "Copies approved folders to cloud storage.",
    signal: "Normal if it is the correct school or personal account.",
    tone: "safer",
  },
  {
    name: "GameOverlay",
    status: "Requesting screen recording",
    purpose: "Records or overlays screen content for a game feature.",
    signal: "Risky on a school device or while private work is open.",
    tone: "risk",
  },
];

const permissionReviewSteps = [
  {
    step: "1. Identify the app",
    detail:
      "What is the app called, where did it come from, and was it approved for this device?",
  },
  {
    step: "2. Match permission to purpose",
    detail:
      "A video call app may need microphone access during a call; a calculator probably does not need contacts.",
  },
  {
    step: "3. Choose the least access needed",
    detail:
      "Prefer limited, while-using, selected-file, or temporary access when those choices are available.",
  },
  {
    step: "4. Review and ask for help",
    detail:
      "Do not change school device controls randomly. Ask a trusted adult or technology staff if unsure.",
  },
];

const evidenceItems = [
  "A fake app named QuickStudy Helper was installed from an unclear link in a group chat.",
  "The app asks for camera, microphone, contacts, and full file access before showing any study tools.",
  "The student only wanted a flashcard feature and does not need recording, contacts, or full file access.",
  "A school-approved flashcard tool is already available through the class portal.",
  "Another fake process named GameOverlay is requesting screen recording while a private school document is open.",
  "The student is using a school device and is not sure which settings they are allowed to change.",
];

const commonMistakes = [
  {
    mistake:
      "Clicking Allow on every permission request so an app will stop asking.",
    better:
      "Pause and decide whether the permission matches the app&apos;s real purpose.",
  },
  {
    mistake:
      "Assuming every running process is dangerous because the name looks unfamiliar.",
    better:
      "Use context and trusted support before ending processes or deleting files.",
  },
  {
    mistake:
      "Installing apps from random links instead of official school or device app stores.",
    better:
      "Use approved sources and follow school rules before installing anything.",
  },
  {
    mistake:
      "Leaving camera, microphone, location, and file access on forever.",
    better: "Review access and use the least permission needed for the task.",
  },
  {
    mistake:
      "Ignoring screen recording or overlay requests while private work is visible.",
    better: "Close private content and deny unnecessary screen access.",
  },
  {
    mistake:
      "Changing security settings on a school device without permission.",
    better:
      "Ask a teacher, guardian, or school technology staff member for help.",
  },
];

export default function AppsProcessesPermissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B3 • Lesson B3.4
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Apps, Processes, and Permissions
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Apps let users complete tasks, processes are the running
                activity behind those apps, and permissions decide what apps can
                access. Defenders review all three so devices stay useful,
                private, and safer.
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
                Permission should match purpose.
              </h2>
              <p className="mt-4 text-slate-300">
                A good security habit is not “deny everything” or “allow
                everything.” It is choosing the least access needed for a
                trusted task.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: do not install unapproved apps, change school
                device settings, end random processes, or inspect someone
                else&apos;s device. Ask trusted adults or school technology
                staff when unsure.
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
          lessonTitle="B3.4 Apps, Processes, and Permissions"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I know that apps are programs or tools that help users complete tasks.",
            "I understand that a device can have background activity even when only one app window is visible.",
            "I am ready to review app permissions using purpose, privacy, and trusted support instead of guessing.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A single permission can expose more data than a student expects.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A homework app may ask for file access. A video meeting tool may ask
            for camera and microphone access. A map app may ask for location.
            Some requests make sense. Others are unnecessary, confusing, or too
            broad for the task.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Cyber defenders review apps, running processes, and permissions
            because they reveal what a device is doing and what data each app
            can touch. The goal is not panic. The goal is careful,
            permission-based thinking.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain the difference between apps, processes, and permissions.",
            },
            {
              title: "Learning Objective 2",
              text: "Evaluate whether a permission request matches an app&apos;s real purpose.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose safe next steps when an app, process, or permission request seems unclear or risky.",
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
            Apps need access to work, but too much access creates privacy and
            safety risk.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Safer permission habits</h3>
              <p className="mt-3 leading-7">
                You install only approved apps, match permissions to app
                purpose, use limited access when possible, and ask trusted
                support before changing school device settings.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">
                Riskier permission habits
              </h3>
              <p className="mt-3 leading-7">
                You allow every request, install from random links, ignore
                screen recording prompts, or end unknown processes without
                understanding what they do.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Apps are tools, processes are running activity, and permissions are
            access rules.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            An app is software a user can open or use, such as a browser, notes
            app, video call tool, or cloud storage app. A process is an app or
            system task that is currently running. Some processes are visible as
            open windows. Others run in the background to sync files, check
            updates, or support device features.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Permissions decide what apps can access: camera, microphone,
            location, files, photos, contacts, notifications, screen recording,
            and more. Defenders ask whether the requested access is needed,
            trusted, and allowed by device or school rules.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Visual Diagram
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Fake App Permission Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake settings panel shows how a defender compares app purpose
            with requested access. It uses fake apps and fake device data only.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <div className="border-b border-slate-800 bg-slate-900 px-5 py-4">
              <p className="text-sm font-bold text-cyan-200">
                CyberShield Device Settings / App Permissions
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Fake training dashboard • no real device information
              </p>
            </div>
            <div className="grid border-b border-slate-800 bg-slate-900/70 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 md:grid-cols-[0.8fr_1.2fr_1.3fr_1.3fr]">
              <span>Permission</span>
              <span>Common school-safe use</span>
              <span>Defender question</span>
              <span>Safer action</span>
            </div>
            {appPermissionCards.map((item) => (
              <div
                key={item.permission}
                className="grid gap-3 border-b border-slate-800 px-4 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1.2fr_1.3fr_1.3fr]"
              >
                <span className="font-semibold text-white">
                  {item.permission}
                </span>
                <span className="leading-6 text-slate-300">
                  {item.normalUse}
                </span>
                <span className="leading-6 text-yellow-100">
                  {item.defensiveQuestion}
                </span>
                <span className="leading-6 text-emerald-100">
                  {item.saferAction}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Words Defenders Use
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "App",
                "A software tool that helps users complete tasks, such as browsing, writing, calling, editing, or organizing files.",
              ],
              [
                "Process",
                "A running piece of software activity. It may be an app window, a background task, or a system service.",
              ],
              [
                "Permission",
                "An access rule that controls what an app can use, such as camera, microphone, files, or location.",
              ],
              [
                "Least Permission",
                "The habit of giving an app only the access it truly needs for the task.",
              ],
              [
                "Background Activity",
                "App or system activity that continues even when the user is not actively looking at that app.",
              ],
              [
                "Approved Source",
                "A trusted place to get software, such as a school portal, managed app store, or official vendor page.",
              ],
            ].map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
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
          <h2 className="mt-2 text-2xl font-bold text-white">
            How Apps, Processes, and Permissions Fit Together
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {permissionReviewSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  {item.step}
                </p>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Process View
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Training Task Manager Snapshot
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake snapshot shows why defenders avoid guessing. A process can
            be normal, needs-review, or risky depending on context.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <div className="grid border-b border-slate-800 bg-slate-900/70 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 md:grid-cols-[1fr_0.9fr_1.25fr_1.25fr]">
              <span>Process</span>
              <span>Status</span>
              <span>Likely purpose</span>
              <span>Defender signal</span>
            </div>
            {fakeProcesses.map((process) => (
              <div
                key={process.name}
                className="grid gap-3 border-b border-slate-800 px-4 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_0.9fr_1.25fr_1.25fr]"
              >
                <span className="font-semibold text-white">{process.name}</span>
                <span className="text-slate-300">{process.status}</span>
                <span className="leading-6 text-slate-300">
                  {process.purpose}
                </span>
                <span
                  className={
                    process.tone === "risk"
                      ? "font-bold leading-6 text-red-200"
                      : process.tone === "caution"
                        ? "font-bold leading-6 text-yellow-200"
                        : "font-bold leading-6 text-emerald-200"
                  }
                >
                  {process.signal}
                </span>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Permission Risk Dashboard"
          subtitle="A fake classroom dashboard for reviewing whether app permissions match real need. No real devices or apps are shown."
          metrics={[
            {
              label: "Permissions that match purpose",
              value: "3",
              note: "Camera during a video call, files for a document editor, and notifications for login alerts can make sense.",
            },
            {
              label: "Permissions needing review",
              value: "4",
              note: "Location, contacts, microphone, and full file access should be checked against the app&apos;s purpose.",
            },
            {
              label: "Unsafe source signals",
              value: "1",
              note: "An app from a random group chat should not be trusted like an approved school tool.",
            },
          ]}
        />

        <VisualDiagramCard
          title="The App Access Decision Chain"
          description="Before allowing access, defenders connect the app, the task, the permission, and the safest support path."
          steps={[
            "Confirm the source: approved school portal, official app store, or unclear link?",
            "Match access to purpose: does the app need camera, microphone, location, files, or contacts?",
            "Choose least access and ask trusted help before changing school-managed settings.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What Beginners Often Get Wrong
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <div
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                  Mistake
                </p>
                <p className="mt-2 leading-7 text-red-100">{item.mistake}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Better habit
                </p>
                <p className="mt-2 leading-7 text-emerald-100">{item.better}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Safe Defensive Lab
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Permission Match Review
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Review the fake app permission panel. For each permission, decide
            whether it clearly matches the app&apos;s purpose, needs review, or
            should be denied. This lab uses fake examples only and does not ask
            students to change real device settings.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Matches purpose",
                "The app needs this access for the current task and comes from a trusted source.",
              ],
              [
                "Needs review",
                "The permission might make sense, but the purpose, source, or timing is unclear.",
              ],
              [
                "Deny or ask help",
                "The app source is unclear, the permission is too broad, or the device is school-managed.",
              ],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  {label}
                </p>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Permission Request Evidence Review"
          evidence={evidenceItems}
          question="Which conclusion is the safest and most accurate?"
          options={[
            "The student should allow all permissions because study apps are always safe.",
            "The student should install the group chat app but turn off notifications only.",
            "The student should avoid the unclear app, use the approved school tool, and ask trusted support before changing device settings.",
            "The student should end every unfamiliar process immediately to make the device safer.",
          ]}
          bestAnswer={2}
          explanation="The safest conclusion uses source, purpose, and permission clues. The unclear app asks for too much access, the school-approved tool already exists, and the student should not randomly change settings or end processes on a school device."
        />

        <FakeAlertCard
          title="Unusual Permission Bundle"
          severity="Medium"
          time="12:40 PM"
          source="Fake Device Permission Monitor"
          details="A fake study app from an unclear source requested camera, microphone, contacts, and full file access before providing any study feature. This is a fake alert for classroom decision practice."
          recommendation="Do not approve broad access. Use approved school tools and ask a teacher, guardian, or school technology staff member for help."
        />

        <FakeLogPanel
          title="Fake App and Process Review Log"
          logs={[
            "2026-07-09 12:31:02 INFO  app=ClassBrowser permission=files_selected source=school_portal status=expected",
            "2026-07-09 12:33:18 WARN  app=QuickStudyHelper source=unknown_group_chat permission_bundle=camera,mic,contacts,files status=review_required",
            "2026-07-09 12:35:44 INFO  process=CloudSync source=managed_account activity=file_sync status=expected_if_correct_account",
            "2026-07-09 12:38:27 WARN  process=GameOverlay request=screen_recording context=school_document_open status=deny_or_close_private_content",
            "2026-07-09 12:40:11 WARN  device=school_managed action=change_security_settings status=ask_technology_staff_first",
          ]}
        />

        <ScenarioDecisionLab
          title="The Flashcard App Permission Request"
          scenario="A student wants a flashcard app for vocabulary review. The app came from a random group chat and asks for camera, microphone, contacts, and full file access before showing any flashcards. The class portal already has an approved study tool. What should the student do?"
          choices={[
            {
              label: "A",
              response:
                "Allow every permission because the app says it helps with studying.",
              outcome:
                "Risky. A study-related name does not prove the app needs broad access or comes from a trusted source.",
              tone: "risk",
            },
            {
              label: "B",
              response:
                "Use the approved class portal tool and ask a trusted adult or technology staff member about the unclear app.",
              outcome:
                "Best choice. This uses trusted sources, avoids unnecessary access, and gets help before changing settings.",
              tone: "best",
            },
            {
              label: "C",
              response: "Install the app but deny only contacts access.",
              outcome:
                "Still risky. The source is unclear and the permission bundle is too broad for the task.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can explain the difference between an app, a process, and a permission.",
            "I can decide whether a permission request matches an app&apos;s purpose.",
            "I understand why camera, microphone, location, contacts, files, and screen recording access need careful review.",
            "I know that school-managed devices should not be changed without permission or trusted support.",
            "I can choose safer actions: use approved sources, limit access, deny confusing requests, and ask for help when unsure.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "What is a process?",
              choices: [
                "A running piece of software activity on a device",
                "A file extension for images",
                "A password recovery question",
                "A Wi-Fi network name",
              ],
              answer: 0,
              explanation:
                "A process is running software activity. It may be visible as an app window or run in the background as a system or app task.",
            },
            {
              question: "What does the least-permission habit mean?",
              choices: [
                "Give every app every permission so it works faster",
                "Give an app only the access it truly needs for its task",
                "Delete every app that asks for permission",
                "Turn off all device settings permanently",
              ],
              answer: 1,
              explanation:
                "Least permission means matching access to real need instead of allowing broad access by default.",
            },
            {
              question: "Which permission request needs careful review?",
              choices: [
                "A video meeting app using microphone during a live class meeting",
                "A calculator app asking for contacts and full file access",
                "A calendar app sending class reminders",
                "A document editor opening a selected assignment file",
              ],
              answer: 1,
              explanation:
                "A calculator app asking for contacts and full file access does not match the app&apos;s likely purpose, so it needs caution and trusted review.",
            },
            {
              question:
                "What should a student do before changing security settings on a school-managed device?",
              choices: [
                "Change anything that looks confusing",
                "Ask a teacher, guardian, or school technology staff member",
                "End every process with an unfamiliar name",
                "Install a random tool to fix it",
              ],
              answer: 1,
              explanation:
                "School-managed devices have rules and support teams. Students should ask trusted support instead of making random changes.",
            },
            {
              question: "Why can screen recording permission be sensitive?",
              choices: [
                "It may capture private schoolwork, messages, tabs, or account information visible on screen",
                "It only records battery level",
                "It automatically makes files safer",
                "It prevents apps from running",
              ],
              answer: 0,
              explanation:
                "Screen recording can capture whatever is visible, including private information, so it should be allowed only when necessary and trusted.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create an App Permission Review Card"
          prompt="Create a one-page permission review card for students. Include at least five common permissions, one example of when each might be needed, one risky mismatch, and the safest next step when unsure."
          tips={[
            "Use fake app examples only.",
            "Include the phrase: permission should match purpose.",
            "Add a reminder to ask trusted adults or school technology staff before changing school-managed settings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Apps are software tools, processes are running activity, and permissions are access rules.",
            "A permission request should match the app&apos;s trusted purpose and the current task.",
            "Camera, microphone, location, contacts, files, notifications, and screen recording access can affect privacy and safety.",
            "Unclear sources, broad permission bundles, and pressure to install quickly are warning signs.",
            "Students should use approved sources and ask trusted adults or school technology staff before changing school-managed devices.",
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