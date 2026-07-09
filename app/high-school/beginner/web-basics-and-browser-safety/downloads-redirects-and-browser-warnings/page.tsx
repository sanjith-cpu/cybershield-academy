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

const modulePath = "/high-school/beginner/web-basics-and-browser-safety";
const previousLesson = `${modulePath}/forms-cookies-and-sessions`;
const nextLesson = `${modulePath}/safe-web-research-habits`;

const vocab = [
  [
    "Download",
    "A file copied from the internet or another online service onto a device.",
  ],
  [
    "Redirect",
    "A website sending the browser from one address to another address.",
  ],
  [
    "Browser warning",
    "A message from the browser that something may be unsafe, such as a suspicious download, unsafe site, or certificate problem.",
  ],
  [
    "Pop-up",
    "A new window or message that appears over a web page, sometimes for normal notices and sometimes for risky pressure tactics.",
  ],
  [
    "File extension",
    "The ending of a filename, such as .pdf, .docx, .jpg, .zip, or .exe, that gives clues about the file type.",
  ],
  [
    "Permission prompt",
    "A browser request asking for access to something like camera, microphone, location, notifications, or downloads.",
  ],
];

const mistakes = [
  "Clicking a download only because a page says it is required urgently.",
  "Ignoring browser warnings because the page looks professional.",
  "Assuming redirects are always bad or always safe without checking the destination context.",
  "Opening unknown attachments or compressed files from unexpected pages.",
  "Granting browser permissions, such as notifications or location, without knowing why the site needs them.",
  "Trying to test suspicious downloads on a real device instead of stopping and asking trusted help.",
];

const downloadReviewCards = [
  {
    signal: "Expected source",
    saferThinking:
      "The file came from a known class portal, official teacher link, or trusted organization page.",
    concern:
      "The page appeared from an ad, pop-up, random message, or unexpected redirect.",
  },
  {
    signal: "Expected file type",
    saferThinking:
      "A worksheet is a PDF or document, an image is an image file, and the name matches the assignment.",
    concern:
      "The file type looks unusual for the task, such as a random installer, compressed archive, or hidden-looking extension.",
  },
  {
    signal: "Expected request",
    saferThinking:
      "The download makes sense for the school task or research activity.",
    concern:
      "The site says the student must download something to view a normal article, coupon, video, or prize.",
  },
  {
    signal: "Expected behavior",
    saferThinking:
      "The browser downloads one clear file from the intended page.",
    concern:
      "The page opens many tabs, changes addresses repeatedly, or pushes urgent warnings.",
  },
];

const redirectSteps = [
  "Student starts at a visible link or search result.",
  "Browser requests the first website address.",
  "The site may send the browser to another address for a normal or risky reason.",
  "The student checks whether the final page still matches the expected source, purpose, and task.",
  "If the final page seems unrelated, urgent, suspicious, or asks for downloads, the student stops.",
];

const quizQuestions = [
  {
    question:
      "What is the safest first response to an unexpected browser warning?",
    choices: [
      "Stop and read the warning before continuing, downloading, or entering information.",
      "Ignore it because browsers warn too often.",
      "Click every button until the page works.",
      "Send the link to classmates so they can test it first.",
    ],
    answer: 0,
    explanation:
      "A browser warning is not proof of danger by itself, but it is a strong reason to pause, read, and avoid risky actions until the situation is verified.",
  },
  {
    question: "Which download is usually the safest example?",
    choices: [
      "A PDF worksheet opened from a known teacher classroom page for today\'s assignment.",
      "An unknown installer from a pop-up that says a video player is required.",
      "A zipped file from a random prize page.",
      "A file from an ad that says the device is infected.",
    ],
    answer: 0,
    explanation:
      "The safer download has expected source, expected purpose, and expected file type. Unknown installers, prize pages, and scare pop-ups are riskier.",
  },
  {
    question: "What is a redirect?",
    choices: [
      "A browser being sent from one web address to another address.",
      "A password manager feature that creates strong passphrases.",
      "A file extension for a spreadsheet.",
      "A guarantee that a website is official.",
    ],
    answer: 0,
    explanation:
      "A redirect means the browser moves from one address to another. Some redirects are normal, but students should check whether the final destination still makes sense.",
  },
  {
    question:
      "A page says, 'Your device has 12 viruses. Download this cleaner now.' What should a student do?",
    choices: [
      "Do not download it; close the page if safe to do so and ask a trusted adult or school tech staff.",
      "Download the cleaner because the message sounds urgent.",
      "Enter a school password to unlock the cleaner.",
      "Try the download on a friend\'s device instead.",
    ],
    answer: 0,
    explanation:
      "Scare messages and urgent cleaner downloads are common unsafe patterns. Students should not install unknown files or test them on real devices.",
  },
  {
    question:
      "Which browser permission should students grant only when it is truly needed and expected?",
    choices: [
      "Camera, microphone, location, notifications, or file access prompts.",
      "Page zoom controls.",
      "Text size changes.",
      "Opening a normal school article.",
    ],
    answer: 0,
    explanation:
      "Permission prompts can affect privacy and device safety. Students should only allow them when the website is trusted and the reason makes sense.",
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
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B5</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B5.4 Forms, Cookies, and Sessions
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
          Next: B5.6 Safe Web Research Habits
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

function BrowserWarningVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Browser Safety Decision Screen
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Browser warnings, redirects, and downloads should not be treated as
        automatic panic moments. They are decision points where a safe user
        slows down and checks the source, purpose, file type, and context.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-full border border-slate-700 bg-slate-950 px-4 py-1 text-xs text-slate-400">
            browser-training.local/download-check
          </div>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">
              Warning Example
            </p>
            <h3 className="mt-3 text-xl font-black text-white">
              This download needs review
            </h3>
            <p className="mt-3 text-yellow-50">
              The browser noticed a file request from a page that was reached
              after a redirect. Review before opening, installing, saving, or
              sharing the file.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">File name</p>
                <p className="mt-1 font-mono text-cyan-100">
                  SchoolViewer_Update.exe
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Source clue</p>
                <p className="mt-1 font-mono text-cyan-100">
                  redirected-download.example
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="font-bold">Safe choice</p>
              <p className="mt-1 text-sm">
                Do not open the file. Verify through an official source or ask
                trusted help.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
              <p className="font-bold">Risky choice</p>
              <p className="mt-1 text-sm">
                Click through warnings, install the file, or test it on a real
                device.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-100">
              <p className="font-bold">Defender mindset</p>
              <p className="mt-1 text-sm">
                Warnings are evidence. Collect context before deciding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadReviewTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Checks Before Downloading
      </h2>
      <div className="mt-6 grid gap-4">
        {downloadReviewCards.map((card) => (
          <div
            key={card.signal}
            className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.7fr_1fr_1fr]"
          >
            <div>
              <p className="text-sm text-slate-400">Check</p>
              <h3 className="mt-1 text-lg font-black text-cyan-100">
                {card.signal}
              </h3>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer clue
              </p>
              <p className="mt-2 text-sm">{card.saferThinking}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Caution clue
              </p>
              <p className="mt-2 text-sm">{card.concern}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RedirectFlowVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Model
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Redirect Review Flow
      </h2>
      <p className="mt-3 text-slate-300">
        Redirects can be normal, such as a school tool sending students to a
        sign-in portal. They become a concern when the final destination does
        not match the original purpose or starts pressuring the user.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {redirectSteps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <p className="mt-4 text-sm font-semibold text-cyan-100">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DownloadsRedirectsBrowserWarningsPage() {
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
              Module B5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B5.5 Downloads, Redirects, and Browser Warnings
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to slow down when a browser asks you to download a file,
            sends you to another page, shows a warning, or requests permissions.
            The goal is not fear. The goal is safe decision-making.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="Downloads, Redirects, and Browser Warnings"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I know a browser can show safety clues before I take action.",
            "I understand that not every download is safe or unsafe automatically.",
            "I am ready to use fake examples only and avoid testing real suspicious files or links.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Why Browser Decisions Matter"
        >
          <p className="leading-8">
            Many security incidents start with a normal-looking browsing moment:
            a file download, a pop-up, a redirect, or a permission prompt.
            Defenders do not tell users to panic. They teach users to pause,
            check the context, and avoid actions that could expose accounts,
            data, or devices.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety rule:</span> never download,
            open, install, or test a suspicious file on a real device. Use
            trusted adults, teachers, guardians, or school technology staff when
            something feels unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how downloads and redirects affect browser safety decisions.",
            "Recognize common warning signs around pop-ups, permission prompts, and unknown files.",
            "Choose safe defensive responses without opening suspicious files or testing real websites.",
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
          title="Downloads Can Change a Device"
        >
          <p className="leading-8">
            A website is usually viewed inside a browser, but a download moves a
            file onto a device. That file may be a normal worksheet, image, or
            document. It could also be an unexpected installer, compressed
            folder, or file that does not match the task. Browser warnings and
            download prompts are moments where students should check before
            acting.
          </p>
        </SectionCard>

        <BrowserWarningVisual />

        <SectionCard eyebrow="Core Concept" title="Pause, Check, Decide">
          <p className="leading-8">
            Safe browsing is a decision process. Before downloading or
            continuing through a warning, ask: Did I expect this file? Is the
            source trusted? Does the file type match the task? Is the page
            pressuring me? Did the browser move me somewhere unexpected? If the
            answer is unclear, stop and verify through a trusted source.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Safer Browser Decisions
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

        <DownloadReviewTable />
        <RedirectFlowVisual />

        <FakeDashboardCard
          title="Fake Browser Safety Dashboard"
          subtitle="Training view of browser events for a fake student research session. This is not real user data."
          metrics={[
            {
              label: "Redirects reviewed",
              value: "4",
              note: "Most were normal sign-in or source redirects.",
            },
            {
              label: "Downloads blocked",
              value: "1",
              note: "Unexpected installer from unrelated page.",
            },
            {
              label: "Permission prompts",
              value: "3",
              note: "Two notification prompts were unnecessary for research.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unexpected Download After Redirect"
          severity="Medium"
          time="10:32 AM"
          source="Fake Browser Protection Training"
          details="A student researching a science topic clicked a result, passed through two redirects, and received a prompt to download a viewer app before reading a normal article."
          recommendation="Do not download the viewer. Close the tab if safe, return to trusted research sources, and ask a teacher or school technology staff member if the prompt keeps appearing."
        />

        <FakeLogPanel
          title="Fake Browser Event Log"
          logs={[
            "10:30:14 SEARCH query='renewable energy school report' source='student-browser-training'",
            "10:31:02 VISIT url='https://research-example.local/article-281' status='loaded'",
            "10:31:06 REDIRECT from='research-example.local' to='viewer-required.example' reason='unknown'",
            "10:31:12 POPUP text='Download required viewer to continue' action='displayed'",
            "10:31:19 DOWNLOAD_PROMPT filename='ArticleViewer_Update.exe' action='not opened'",
            "10:32:00 SAFE_ACTION student='stopped and reported to teacher'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should the Student Download the File?"
          evidence={[
            "The student expected to read a normal article, not install software.",
            "The page redirected away from the original research page.",
            "The file is an installer-style name, not a PDF article or school worksheet.",
            "The message creates pressure by saying the viewer is required.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "Do not download it; verify through a trusted research source or ask school staff.",
            "Download it because the article may be useful.",
            "Try the file and delete it later if it seems strange.",
            "Send it to a friend so they can see whether it opens.",
          ]}
          bestAnswer={0}
          explanation="The file was unexpected, came after a redirect, and did not match the student task. The safe defensive action is to stop and verify, not test it."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Make Browser Moments Riskier"
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
          title="Review a Fake Download Prompt"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Prompt
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Install StudyHelper to Continue
              </h3>
              <p className="mt-3 text-slate-300">
                The page says the student cannot view a simple article unless
                they install a helper app. The page also asks for notification
                permission and opens a second tab.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Response
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Do not install the helper app.</li>
                <li>Do not allow notifications or extra permissions.</li>
                <li>
                  Close the page if safe and use a trusted research source.
                </li>
                <li>
                  Tell a teacher or school technology staff if it happened on a
                  school device.
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Browser Shows a Warning"
          scenario="You are using a school device for research. A page redirects and your browser warns that a file may be unsafe. You need an article for an assignment, but you did not expect a download."
          choices={[
            {
              label: "Choice A",
              response:
                "Stop, do not open the file, and use a trusted source or ask school staff for help.",
              outcome:
                "Best defensive choice. You avoid testing unknown content and move the problem to trusted support.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Download the file but promise not to click anything else.",
              outcome:
                "Risky. Downloading unknown files can place unsafe content on the device even before you understand the situation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Keep refreshing the page to see whether the warning disappears.",
              outcome:
                "Caution. Repeating the same unsafe path does not verify the source. A better move is to stop and use trusted help.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          title="Download and Warning Checklist"
          items={[
            "I can explain why downloads deserve more caution than simply viewing a page.",
            "I can identify when a redirect changes the context of a browsing session.",
            "I can pause when a browser warning appears instead of clicking through quickly.",
            "I can avoid installing unknown files or testing suspicious downloads on real devices.",
            "I can ask trusted adults, teachers, guardians, or school technology staff when something feels unsafe.",
          ]}
        />

        <MiniQuiz title="B5.5 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Write a Browser Safety Decision Rule"
          prompt="Create a short rule that a high school student could follow before downloading a file, allowing a browser permission, or continuing past a warning."
          tips={[
            "Include source, purpose, and file type checks.",
            "Mention stopping when the situation feels unexpected or pressured.",
            "Explain who students should ask when they are unsure.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Downloads move files onto a device, so they deserve careful review.",
            "Redirects can be normal, but the final destination must still match the expected purpose.",
            "Browser warnings are decision points, not annoyances to click through automatically.",
            "Unexpected installers, urgent pop-ups, and permission prompts should be treated with caution.",
            "Students should not test suspicious files or websites on real devices; they should stop and get trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}