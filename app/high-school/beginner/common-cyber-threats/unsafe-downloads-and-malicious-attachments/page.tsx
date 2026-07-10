import Link from "next/link";
import type { ReactNode } from "react";
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
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/beginner/common-cyber-threats";
const previousLesson =
  `${modulePath}/credential-theft-and-account-takeover-concepts`;
const nextLesson =
  `${modulePath}/defense-basics-updates-backups-and-caution`;

const vocab = [
  [
    "Download",
    "A file, application, document, image, archive, or installer transferred to a device from another source.",
  ],
  [
    "Attachment",
    "A file included with an email, message, form, or collaboration platform.",
  ],
  [
    "File extension",
    "The ending of a filename that helps identify its expected type, such as .pdf, .jpg, or .docx.",
  ],
  [
    "Executable file",
    "A file designed to run instructions on a device. Unknown executables should never be opened or tested.",
  ],
  [
    "Trusted source",
    "An official website, approved app store, school portal, or verified sender expected to provide the file.",
  ],
  [
    "Quarantine",
    "A protected location used by approved security tools or technology staff to separate suspicious files from normal use.",
  ],
];

const fileReviewStages = [
  {
    title: "Pause before opening",
    example:
      "Do not open a file simply because the message is urgent, interesting, or appears to come from someone familiar.",
  },
  {
    title: "Check the source",
    example:
      "Review whether the sender, website, portal, or app store is official, expected, and verified.",
  },
  {
    title: "Review the context",
    example:
      "Ask whether the file was expected, whether the filename and type make sense, and whether the request matches normal behavior.",
  },
  {
    title: "Verify or report",
    example:
      "Confirm through a separate trusted channel or report the file without opening, forwarding, or testing it.",
  },
];

const downloadReviewRows = [
  {
    item: "Unexpected invoice",
    source: "Attachment arrives from an unfamiliar address",
    review:
      "Do not open it. Verify the sender and purpose through a separate official channel.",
  },
  {
    item: "Fake browser update",
    source: "Pop-up says a download is required to continue",
    review:
      "Close the page and use official device or browser settings for updates.",
  },
  {
    item: "School worksheet",
    source: "File appears inside the official learning portal from the assigned teacher",
    review:
      "More trustworthy context, but still confirm that the filename, assignment, and request are expected.",
  },
  {
    item: "Double-extension file",
    source: "Filename appears as Schedule.pdf.exe",
    review:
      "Strong warning sign. Do not open, rename, or test it; report it to trusted technology staff.",
  },
  {
    item: "Unknown app installer",
    source: "Download page claims the tool is required for class",
    review:
      "Do not install it. Confirm approved software through the school portal, teacher, or technology team.",
  },
];

const mistakes = [
  "Opening a file because the sender used a familiar display name or logo.",
  "Installing an update from a pop-up instead of official device or application settings.",
  "Assuming a filename proves the real file type.",
  "Forwarding a suspicious attachment to classmates for testing.",
  "Disabling security warnings to make an unknown file open.",
  "Uploading a suspicious file to another website or device to investigate it.",
];

const quizQuestions = [
  {
    question: "What is the safest response to an unexpected attachment?",
    choices: [
      "Do not open it; verify the sender and purpose through a separate trusted channel.",
      "Open it quickly before it expires.",
      "Forward it to classmates for testing.",
      "Rename it and try again.",
    ],
    answer: 0,
    explanation:
      "Unexpected attachments should be verified without opening, forwarding, or testing them.",
  },
  {
    question: "Where should a software update normally be obtained?",
    choices: [
      "Through official device settings, the official application, or an approved app store.",
      "From any pop-up that appears while browsing.",
      "From an unknown attachment.",
      "From a random file-sharing link.",
    ],
    answer: 0,
    explanation:
      "Official settings and approved stores reduce the risk of fake update downloads.",
  },
  {
    question: "Why is Schedule.pdf.exe suspicious?",
    choices: [
      "The double extension may disguise an executable file as a document.",
      "Every PDF is harmful.",
      "The filename is too short.",
      "School schedules cannot be digital.",
    ],
    answer: 0,
    explanation:
      "A double extension can make a file appear to be one type while its final extension indicates another.",
  },
  {
    question: "What should a student do with an unknown installer claiming to be required for class?",
    choices: [
      "Confirm the software through the teacher, school portal, or technology team before downloading.",
      "Install it immediately.",
      "Disable security warnings.",
      "Send it to a personal device.",
    ],
    answer: 0,
    explanation:
      "Required school software should be confirmed through an official school source.",
  },
  {
    question: "What does quarantine mean in a defensive context?",
    choices: [
      "Separating a suspicious file from normal use through an approved security process.",
      "Sharing the file with more people.",
      "Opening the file without internet access.",
      "Changing the filename.",
    ],
    answer: 0,
    explanation:
      "Quarantine isolates suspicious content so approved tools or trusted staff can manage it safely.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B8</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B8.4 Credential Theft and Account Takeover Concepts
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B8.6 Defense Basics: Updates, Backups, and Caution
        </Link>
      </div>
    </section>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function FileReviewFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Download and Attachment Review Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        File safety begins before opening. Defenders pause, confirm the source,
        review the context, and verify or report through a trusted channel.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {fileReviewStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> suspicious files should
        not be opened, renamed, forwarded, uploaded, or tested. Verification
        happens without interacting with the file.
      </div>
    </section>
  );
}

function FakeDownloadPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Download and Attachment Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel helps students compare source, file type,
            context, and safe next steps without opening any files.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {downloadReviewRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FileSafetyBoard() {
  const areas = [
    {
      name: "Source",
      saferQuestion:
        "Did the file come from an official portal, approved app store, known sender, or trusted website?",
      saferChoice:
        "Verify the source independently before downloading or opening anything.",
    },
    {
      name: "Expectation",
      saferQuestion:
        "Was the file expected, and does the request match a real assignment, conversation, or task?",
      saferChoice:
        "Confirm unexpected files through a separate trusted channel.",
    },
    {
      name: "File identity",
      saferQuestion:
        "Do the filename, extension, icon, and purpose match one another?",
      saferChoice:
        "Treat mismatches and double extensions as warning signs and report them.",
    },
    {
      name: "Security response",
      saferQuestion:
        "Did the browser, device, email service, or approved security tool show a warning?",
      saferChoice:
        "Do not bypass the warning. Stop and involve trusted technology support.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        File Safety Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        A file should be judged by its source, expectation, identity, and
        security warnings—not by a familiar icon or filename alone.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function UnsafeDownloadsMaliciousAttachmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B8
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8.5 Unsafe Downloads and Malicious Attachments
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to evaluate file sources, unexpected attachments, fake
            update prompts, misleading filenames, and unknown installers before
            interacting with them.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B8: Common Cyber Threats"
          lessonTitle="Unsafe Downloads and Malicious Attachments"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that filenames and icons alone do not prove a file is safe.",
            "I will not open, rename, upload, forward, or test suspicious files.",
            "I am ready to verify downloads and attachments through trusted official channels.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="File Safety Decisions Happen Before the File Opens"
        >
          <p className="leading-8">
            Once a suspicious file is opened or installed, the situation may
            become more difficult to contain. Strong defenders check the source,
            context, filename, extension, and security warnings before
            interaction.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every file,
            attachment, installer, update prompt, sender, and website in this
            lesson is fictional. Do not use real suspicious files.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Identify warning signs involving unexpected files, unknown sources, double extensions, and fake updates.",
            "Explain why trusted sources, expected context, and official verification matter.",
            "Choose safe actions without opening, forwarding, uploading, or testing suspicious files.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="A Familiar Filename Can Still Be Misleading"
        >
          <p className="leading-8">
            Suspicious files may use school-related names, copied icons, hidden
            extensions, urgent messages, or fake update language. Safe review
            depends on verified source and context—not appearance alone.
          </p>
        </SectionCard>

        <FileReviewFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Trust the Source and Process, Not the File’s Appearance"
        >
          <p className="leading-8">
            A file can be renamed, an icon can be copied, and a message can
            imitate a trusted person. The safer approach is to obtain files from
            official portals, approved stores, known senders, and verified
            websites.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Download and Attachment Safety
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FileSafetyBoard />
        <FakeDownloadPanel />

        <FakeDashboardCard
          title="Fake File Safety Dashboard"
          subtitle="Training dashboard using fictional downloads, attachments, warnings, and verification outcomes."
          metrics={[
            {
              label: "Files reviewed",
              value: "20",
              note: "Fictional documents, archives, installers, images, and attachments.",
            },
            {
              label: "Warning signs",
              value: "12",
              note: "Unexpected source, fake update, double extension, or security warning.",
            },
            {
              label: "Safely verified",
              value: "8",
              note: "Files confirmed through official portals, teachers, or approved stores.",
            },
          ]}
        />

        <FakeAlertCard
          title="Double-Extension Attachment Detected"
          severity="High"
          time="11:32 AM"
          source="Fake School Mail Training"
          details="A fictional email attachment is named ExamSchedule.pdf.exe and was sent from an unfamiliar address."
          recommendation="Do not open, rename, forward, or upload the file. Report the message and verify the schedule through the official school portal."
        />

        <FakeLogPanel
          title="Fake Download Review Log"
          logs={[
            "11:21:06 FILE name='ExamSchedule.pdf.exe' source='unknown_sender'",
            "11:22:19 FILE_EXTENSION final='.exe' displayed_document_name='true'",
            "11:24:02 SECURITY_WARNING action='not_bypassed'",
            "11:26:11 VERIFICATION channel='official_school_portal' result='no_matching_file'",
            "11:29:44 REPORT method='school_security_report' status='submitted'",
            "11:32:07 SAFE_ACTION recommendation='do not open, forward, upload, or test'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which File Is Safest to Use?"
          evidence={[
            "File A appears in an unexpected email from an unfamiliar sender.",
            "File B is offered by a browser pop-up claiming an urgent update is required.",
            "File C appears in the official learning portal under the correct assignment from the assigned teacher.",
            "File D has a double extension and asks the user to disable security warnings.",
          ]}
          question="Which file has the strongest trustworthy context?"
          options={[
            "File C, because it appears in the official portal under the expected assignment.",
            "File A, because email attachments are always safe.",
            "File B, because urgent pop-ups should be trusted.",
            "File D, because disabling warnings makes files safer.",
          ]}
          bestAnswer={0}
          explanation="The official portal, expected assignment, and correct teacher provide the strongest trustworthy context, though the student should still review the request."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Increase File and Download Risk"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Defensive Lab"
          title="Sort Fictional Files Without Opening Them"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake File Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Download Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student sees an official portal worksheet, an
                unexpected invoice attachment, a fake browser update, an unknown
                installer, and a double-extension schedule file.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the source and whether the file was expected.</li>
                <li>Review the filename, extension, request, and security warnings.</li>
                <li>Place each example in safer, suspicious, or report-first.</li>
                <li>Verify unclear files through an official separate channel.</li>
                <li>Do not open, rename, forward, upload, or test any suspicious example.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Browser Demands an Urgent Update"
          scenario="A fictional student visits a website and sees a full-screen message claiming the browser is outdated. The page provides a large Download Now button."
          choices={[
            {
              label: "Choice A",
              response:
                "Close the page and check for updates through the browser’s official settings or an approved school process.",
              outcome:
                "Best defensive choice. Updates should come from official settings, not website pop-ups.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Download the update because the warning looks professional.",
              outcome:
                "Risky. Visual design does not prove the download is official.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send the download to classmates so they can test it.",
              outcome:
                "Unsafe. Suspicious downloads should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Unexpected Homework Attachment Arrives"
          scenario="A fictional message claims to be from a classmate and includes an attachment called FinalAnswers.zip. The student was not expecting the file."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open the archive. Contact the classmate through a known channel and report the file if the message is not confirmed.",
              outcome:
                "Best defensive choice. The file is unexpected and should be verified separately.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the archive because the filename sounds useful.",
              outcome:
                "Risky. A helpful filename does not prove safety.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Upload the archive to another website for analysis.",
              outcome:
                "Unsafe. Students should not investigate suspicious files.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Download and Attachment Safety Checklist"
          items={[
            "I pause before opening unexpected files or installers.",
            "I verify the source, context, filename, extension, and purpose.",
            "I use official portals, approved stores, and trusted websites.",
            "I never bypass security warnings for an unknown file.",
            "I do not open, rename, forward, upload, or test suspicious files.",
            "I know how to verify through a separate trusted channel and report the file safely.",
          ]}
        />

        <MiniQuiz
          title="B8.5 Mini Quiz: Unsafe Downloads and Malicious Attachments"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional file-safety review chart. Include five fake files, the source and context of each, warning signs, the correct category, and the safest response."
          tips={[
            "Use fictional filenames, senders, portals, websites, and alerts only.",
            "Do not include real suspicious files, downloads, links, or harmful code.",
            "Explain why source and context are more reliable than appearance alone.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "File safety decisions should happen before a download or attachment is opened.",
            "Trusted source, expected context, filename, extension, and security warnings all matter.",
            "Fake update prompts and double extensions are important warning signs.",
            "Suspicious files should not be opened, renamed, forwarded, uploaded, or tested.",
            "Verification should happen through official portals, approved stores, known senders, or trusted technology staff.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}