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
const previousLesson = `${modulePath}/operating-systems-and-user-accounts`;
const nextLesson = `${modulePath}/apps-processes-and-permissions`;

const folderModel = [
  {
    label: "Documents",
    purpose: "School essays, PDFs, notes, rubrics, and written work.",
    defenderHabit: "Use clear names and keep private schoolwork in approved storage locations.",
  },
  {
    label: "Downloads",
    purpose: "Files saved from browsers, email, class portals, or other apps.",
    defenderHabit: "Treat this folder as a review zone before opening, moving, or sharing files.",
  },
  {
    label: "Pictures / Media",
    purpose: "Images, screenshots, videos, and design files.",
    defenderHabit: "Check whether screenshots include private information before sharing.",
  },
  {
    label: "Cloud Sync Folder",
    purpose: "Files that may copy across devices through a school or personal account.",
    defenderHabit: "Know what is syncing and avoid storing private files in the wrong account.",
  },
  {
    label: "Shared Folder",
    purpose: "Files visible to a class, group, family, or team.",
    defenderHabit: "Only place files there when they are meant for that audience.",
  },
  {
    label: "Archive / Backup",
    purpose: "Older versions or backup copies kept for recovery and organization.",
    defenderHabit: "Use dates and version names so the correct file can be recovered later.",
  },
];

const extensionExamples = [
  {
    extension: ".docx / .pdf",
    commonUse: "Documents, essays, reports, forms, and readings.",
    safeQuestion: "Was I expecting this file from a trusted source?",
  },
  {
    extension: ".jpg / .png",
    commonUse: "Images, screenshots, diagrams, and visual resources.",
    safeQuestion: "Could this screenshot include private information before I share it?",
  },
  {
    extension: ".zip",
    commonUse: "A compressed folder that may contain multiple files.",
    safeQuestion: "Do I know what is inside, who sent it, and why I need it?",
  },
  {
    extension: ".csv / .xlsx",
    commonUse: "Spreadsheets, tables, class data, and organized records.",
    safeQuestion: "Does this file include names, grades, emails, or other sensitive data?",
  },
  {
    extension: "App / installer file",
    commonUse: "A file that may install or launch software depending on device type.",
    safeQuestion: "Do I have permission from a trusted adult or technology staff before opening it?",
  },
  {
    extension: "Unknown extension",
    commonUse: "A file type the device or student does not recognize.",
    safeQuestion: "Should I stop and ask for help instead of experimenting?",
  },
];

const fakeFiles = [
  {
    name: "biology_project_final.docx",
    source: "Class drive",
    signal: "Expected class document",
    safestStep: "Open from the approved class location after confirming it is the correct file.",
    tone: "safer",
  },
  {
    name: "field_trip_photos.zip",
    source: "Unknown message",
    signal: "Compressed file from unclear sender",
    safestStep: "Do not open it. Ask a trusted adult or teacher to verify the sender and purpose.",
    tone: "caution",
  },
  {
    name: "scholarship_form.pdf",
    source: "School counseling page",
    signal: "Expected PDF from official school resource",
    safestStep: "Use the official school page and avoid copies from random messages.",
    tone: "safer",
  },
  {
    name: "homework_answers.pdf.app",
    source: "Random group chat",
    signal: "Misleading name and app-style ending",
    safestStep: "Do not open it. Report or ask for help according to school rules.",
    tone: "risk",
  },
  {
    name: "student_emails.csv",
    source: "Shared folder",
    signal: "Could contain private contact data",
    safestStep: "Check whether you are allowed to access or share it before opening or moving it.",
    tone: "caution",
  },
];

const evidenceItems = [
  "A file named homework_answers.pdf.app appears in a random group chat.",
  "The message says, ‘Open this fast before the teacher deletes it.’",
  "The file name tries to look like a homework document, but the ending suggests it may behave like an app on some devices.",
  "The sender is not a teacher, school system, or approved class portal.",
  "A second file named scholarship_form.pdf appears on the official school counseling page.",
  "The student is unsure what file extensions mean.",
];

const commonMistakes = [
  {
    mistake: "Trusting a file because the name sounds familiar.",
    better: "Check the source, extension, context, and whether you were expecting it.",
  },
  {
    mistake: "Opening files from group chats just because friends are sharing them.",
    better: "Use official class portals, school pages, or trusted adults when files are important.",
  },
  {
    mistake: "Saving everything in Downloads forever.",
    better: "Treat Downloads as a temporary review area, then move safe files into organized folders.",
  },
  {
    mistake: "Renaming files without keeping clear versions.",
    better: "Use simple names with dates or version numbers, like history_outline_v2.docx.",
  },
  {
    mistake: "Sharing screenshots without checking what is visible.",
    better: "Look for names, emails, account icons, tabs, notifications, and private data first.",
  },
  {
    mistake: "Assuming unknown extensions are safe because the icon looks normal.",
    better: "Stop and ask trusted support instead of experimenting with unknown file types.",
  },
];

export default function FilesFoldersExtensionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B3 • Lesson B3.3
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Files, Folders, and Extensions
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Files store information, folders organize it, and extensions give clues about what kind of file you are looking at. Defenders use those clues to make safer decisions before opening, moving, or sharing files.
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
                A file name is a clue, not proof.
              </h2>
              <p className="mt-4 text-slate-300">
                Safer file decisions come from combining clues: name, extension, source, context, location, and whether the file was expected.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: do not open unknown files, compressed files, suspicious attachments, or app/installer files just to see what happens. Ask a trusted adult, teacher, guardian, or school technology staff member.
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
          lessonTitle="B3.3 Files, Folders, and Extensions"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I know that devices store schoolwork, downloads, photos, screenshots, and other files.",
            "I understand that folders help organize files by purpose, class, project, or audience.",
            "I am ready to treat file names and extensions as clues instead of guarantees.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Many safety decisions begin before a file is opened.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A student might see files in a class portal, a download folder, a shared drive, an email attachment, or a group chat. Some files are expected and useful. Others may be confusing, private, mislabeled, or unsafe to open without help.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Defenders do not rely on one clue. They ask: Where did this file come from? Was it expected? What type of file is it? Does the name look misleading? Could it contain private information? What is the safest next step?
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain how files, folders, and extensions help organize information on a device.",
            },
            {
              title: "Learning Objective 2",
              text: "Identify safer and riskier file-handling decisions using fake examples.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose responsible actions when a file source, file name, or extension seems suspicious or private.",
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
            Files can contain data, instructions, private details, or misleading labels.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Safer file handling</h3>
              <p className="mt-3 leading-7">
                You organize folders, use clear names, check sources, avoid unexpected attachments, and ask trusted help before opening confusing files.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Riskier file handling</h3>
              <p className="mt-3 leading-7">
                You open files from random messages, ignore strange endings, share private spreadsheets, or keep everything mixed in Downloads.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A file has a name, a location, a type, and a source.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A file is a saved piece of information or content. A folder is a container that helps organize files. A file extension is the ending after the dot in many file names, such as .pdf, .docx, .png, or .csv. Extensions help the device and user understand what kind of file it may be.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Extensions are helpful, but they are not enough by themselves. A file can have a confusing name, come from an untrusted place, or contain information that should not be shared. Cyber defenders combine multiple clues before deciding what to do.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Visual Diagram
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Fake File Explorer Review</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake file panel shows how defenders review location, file name, type clues, and safest next steps without touching real student files.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
            <div className="border-b border-slate-800 bg-slate-900 px-5 py-4">
              <p className="text-sm font-bold text-cyan-200">CyberShield-Lab-Laptop-12 / Downloads</p>
              <p className="mt-1 text-xs text-slate-500">Fake training folder • no real files</p>
            </div>
            <div className="grid border-b border-slate-800 bg-slate-900/70 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 md:grid-cols-[1.4fr_0.7fr_0.9fr_1.4fr]">
              <span>File name</span>
              <span>Source</span>
              <span>Signal</span>
              <span>Safest next step</span>
            </div>
            {fakeFiles.map((file) => (
              <div
                key={file.name}
                className="grid gap-3 border-b border-slate-800 px-4 py-4 text-sm last:border-b-0 md:grid-cols-[1.4fr_0.7fr_0.9fr_1.4fr]"
              >
                <span className="font-semibold text-white">{file.name}</span>
                <span className="text-slate-300">{file.source}</span>
                <span
                  className={
                    file.tone === "risk"
                      ? "font-bold text-red-200"
                      : file.tone === "caution"
                        ? "font-bold text-yellow-200"
                        : "font-bold text-emerald-200"
                  }
                >
                  {file.signal}
                </span>
                <span className="leading-6 text-slate-300">{file.safestStep}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Words Defenders Use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["File", "A saved item on a device, such as a document, image, video, spreadsheet, or app-related item."],
              ["Folder", "A container used to organize files by class, project, topic, date, or audience."],
              ["Extension", "The ending of a file name that gives a clue about the file type, such as .pdf or .png."],
              ["Downloads Folder", "A common temporary location for files saved from browsers, email, class portals, or apps."],
              ["Compressed File", "A file package that may contain multiple items and should be reviewed carefully before opening."],
              ["Metadata", "Extra information about a file, such as date, size, author, location data, or modification history, depending on file type and settings."],
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
          <h2 className="mt-2 text-2xl font-bold text-white">Folder Types and Defender Habits</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {folderModel.map((folder) => (
              <div key={folder.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{folder.label}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Purpose</p>
                <p className="mt-2 leading-7 text-slate-300">{folder.purpose}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Defender habit</p>
                <p className="mt-2 leading-7 text-slate-300">{folder.defenderHabit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Extension Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Extensions Give Clues, Not Guarantees</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {extensionExamples.map((item) => (
              <div key={item.extension} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-cyan-200">{item.extension}</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Common use</p>
                <p className="mt-2 leading-7 text-slate-300">{item.commonUse}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">Safety question</p>
                <p className="mt-2 leading-7 text-yellow-100">{item.safeQuestion}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake File Safety Dashboard"
          subtitle="A safe training dashboard showing file-handling signals. These are fake files for classroom analysis only."
          metrics={[
            {
              label: "Expected files",
              value: "2",
              note: "Files from an official class drive or school page are easier to trust after checking context.",
            },
            {
              label: "Needs review",
              value: "2",
              note: "Compressed files and files with possible private data need extra care before opening or sharing.",
            },
            {
              label: "Do not open",
              value: "1",
              note: "The misleading homework_answers file should be reported or checked with trusted help.",
            },
          ]}
        />

        <VisualDiagramCard
          title="The File Safety Question Chain"
          description="A safer file decision uses a chain of questions. One safe-looking clue is not enough."
          steps={[
            "Check the source: official class location, trusted sender, or random message?",
            "Check the type: expected document, image, spreadsheet, compressed file, app, or unknown?",
            "Choose the safest action: open, organize, ask for help, report, or leave it alone.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">What Beginners Often Get Wrong</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Mistake</p>
                <p className="mt-2 leading-7 text-red-100">{item.mistake}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Better habit</p>
                <p className="mt-2 leading-7 text-emerald-100">{item.better}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Safe Defensive Lab
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Sort the Fake Files</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Use the fake file explorer above. Sort each file into one of three categories: likely expected, needs trusted review, or do not open. Then write the safest next step for each file.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Likely expected", "Official class drive document or school page PDF that matches your assignment context."],
              ["Needs trusted review", "Compressed files, files with private data, or files where the source is unclear."],
              ["Do not open", "Misleading names, strange endings, pressure messages, or random group chat attachments."],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{label}</p>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Suspicious File Evidence Review"
          evidence={evidenceItems}
          question="Which conclusion is the safest and most accurate?"
          options={[
            "The random group chat file is safe because the name includes the word homework.",
            "The student should open the file quickly because the message creates urgency.",
            "The random file should not be opened; the student should use official class sources or ask trusted help.",
            "The official school counseling PDF is automatically private and should be shared with everyone.",
          ]}
          bestAnswer={2}
          explanation="The safest conclusion uses multiple clues: the random source, pressure language, misleading name, and confusing ending all point to stopping and asking trusted help. The official school page is a better source, but students should still avoid oversharing forms or private information."
        />

        <FakeAlertCard
          title="Misleading File Name Report"
          severity="Medium"
          time="11:20 AM"
          source="Fake File Safety Dashboard"
          details="A file named homework_answers.pdf.app appears in a student group chat with urgent wording. This is a fake training alert for safe decision practice."
          recommendation="Do not open the file. Use official class resources and tell a teacher, guardian, or school technology staff member according to school rules."
        />

        <FakeLogPanel
          title="Fake File Review Log"
          logs={[
            "2026-07-09 11:15:04 INFO  folder=Downloads file=biology_project_final.docx source=class_drive status=expected",
            "2026-07-09 11:16:22 WARN  folder=Downloads file=field_trip_photos.zip source=unknown_message status=needs_trusted_review",
            "2026-07-09 11:18:47 INFO  folder=SchoolForms file=scholarship_form.pdf source=official_school_page status=expected",
            "2026-07-09 11:20:11 WARN  folder=ChatDownloads file=homework_answers.pdf.app source=random_group_chat status=do_not_open",
            "2026-07-09 11:22:30 WARN  folder=Shared file=student_emails.csv source=shared_folder status=check_permission_before_access",
          ]}
        />

        <ScenarioDecisionLab
          title="The File That Looks Like Homework"
          scenario="A friend sends a file in a group chat called homework_answers.pdf.app and says, ‘Open this before it gets removed.’ You were not expecting this file. What should you do?"
          choices={[
            {
              label: "A",
              response: "Open it quickly because the name says homework answers.",
              outcome: "Risky. A familiar-looking name and urgency message are not enough to trust a file.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Do not open it. Use official class resources and ask a teacher or trusted adult for help.",
              outcome: "Best choice. You avoid unknown files and use trusted support instead of experimenting.",
              tone: "best",
            },
            {
              label: "C",
              response: "Rename the file to remove the strange ending, then open it.",
              outcome: "Risky. Renaming a confusing file does not make it trustworthy or safe.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can explain the difference between files, folders, and extensions.",
            "I can use source, context, file name, and extension clues before opening or sharing files.",
            "I understand why the Downloads folder should be treated as a review zone.",
            "I know that misleading names, urgency, compressed files, app/installer files, and unknown extensions need caution.",
            "I can choose safe next steps: use official sources, ask trusted help, report when needed, and avoid experimenting with suspicious files.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "What is a file extension?",
              choices: [
                "The ending of a file name that gives a clue about the file type",
                "The password for a folder",
                "The device battery level",
                "The name of a Wi-Fi network",
              ],
              answer: 0,
              explanation: "A file extension is the ending after the dot in many file names. It gives a clue about the file type, but it is not a guarantee of safety.",
            },
            {
              question: "Which clue should you use before opening a file?",
              choices: [
                "Only the file icon",
                "Only whether a friend sent it",
                "Source, context, file name, extension, and whether it was expected",
                "Only whether the file name sounds interesting",
              ],
              answer: 2,
              explanation: "Defenders combine multiple clues instead of trusting one detail like a familiar name or icon.",
            },
            {
              question: "What is the safest response to a confusing file from a random group chat?",
              choices: [
                "Open it to find out what it does",
                "Rename it and then open it",
                "Forward it to more people",
                "Do not open it; ask a trusted adult, teacher, or technology staff member",
              ],
              answer: 3,
              explanation: "Unknown or confusing files from random messages should not be opened. Trusted help is the safer path.",
            },
            {
              question: "Why can a shared spreadsheet be sensitive?",
              choices: [
                "It might include names, emails, grades, schedules, or other private data",
                "All spreadsheets are public by default",
                "Spreadsheets cannot contain private information",
                "Only photos can be private",
              ],
              answer: 0,
              explanation: "Spreadsheets can contain private or sensitive information, so students should check permission before opening, moving, or sharing them.",
            },
            {
              question: "What is a good habit for the Downloads folder?",
              choices: [
                "Keep every file there forever",
                "Treat it as a review zone and move safe files to organized folders",
                "Open every download immediately",
                "Share the entire folder with classmates",
              ],
              answer: 1,
              explanation: "Downloads is often a temporary landing area. Reviewing files and organizing safe ones reduces confusion and risk.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create a File Safety Sorting Guide"
          prompt="Create a one-page guide called ‘Before You Open That File.’ Include the questions students should ask about source, context, extension, location, privacy, and safest next step."
          tips={[
            "Include at least three fake file examples.",
            "Use categories like expected, needs review, and do not open.",
            "Remind students to ask trusted adults or technology staff when unsure.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Files store information, folders organize files, and extensions give clues about file type.",
            "A file name, icon, or extension is only a clue, not proof that a file is safe.",
            "Downloads should be treated as a review zone before files are opened, moved, or shared.",
            "Misleading names, urgency, unknown sources, compressed files, app/installer files, and private data require caution.",
            "The safest action is often to use official sources, ask trusted help, report concerns, and avoid opening confusing files.",
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