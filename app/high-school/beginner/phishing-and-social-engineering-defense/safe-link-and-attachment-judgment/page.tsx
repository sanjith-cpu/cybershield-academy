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

const modulePath =
  "/high-school/beginner/phishing-and-social-engineering-defense";
const previousLesson =
  `${modulePath}/impersonation-and-fake-support-messages`;
const nextLesson =
  `${modulePath}/reporting-workflows-and-trusted-help`;

const vocab = [
  [
    "Link destination",
    "The website address a link is expected to open. The visible text and actual destination may not match.",
  ],
  [
    "Domain",
    "The main website name that identifies an online service or organization.",
  ],
  [
    "Shortened link",
    "A compact link that hides the full destination until it is opened or expanded.",
  ],
  [
    "Attachment",
    "A file included with a message. Unexpected or suspicious attachments should not be opened, renamed, forwarded, uploaded, or tested.",
  ],
  [
    "File extension",
    "The ending of a filename that suggests its file type, such as .pdf, .docx, .jpg, or .exe.",
  ],
  [
    "Context check",
    "Comparing a link or file with the sender, purpose, timing, expected task, and official process.",
  ],
];

const judgmentStages = [
  {
    title: "Check the source",
    example:
      "Ask whether the sender, platform, organization, and delivery method are expected and trustworthy.",
  },
  {
    title: "Check the destination or file",
    example:
      "Review the displayed domain, filename, extension, file type, warning, and whether the item matches its claimed purpose.",
  },
  {
    title: "Check the context",
    example:
      "Decide whether the request, assignment, payment, update, login, or download makes sense in the situation.",
  },
  {
    title: "Choose the safe route",
    example:
      "Open the official service directly, verify through a trusted person, or report the item without interacting with it.",
  },
];

const evidenceRows = [
  {
    item: "Shortened link",
    source: "Text says a package fee must be paid immediately",
    review:
      "Do not use the link. Open the delivery company’s official website or app directly.",
  },
  {
    item: "Look-alike domain",
    source: "Login page uses a misspelled version of a familiar school domain",
    review:
      "Do not sign in. Close the page and open the official school portal manually.",
  },
  {
    item: "Double extension",
    source: "Attachment is named Schedule.pdf.exe",
    review:
      "Treat it as suspicious. Do not open, rename, forward, upload, or test it.",
  },
  {
    item: "Unexpected archive",
    source: "Teacher-style message includes an unrequested .zip file",
    review:
      "Verify with the teacher through the official school channel before any interaction.",
  },
  {
    item: "Official portal file",
    source: "Document appears inside the verified school portal for a known assignment",
    review:
      "The context is stronger, but the student should still confirm the assignment and file type.",
  },
];

const mistakes = [
  "Trusting a link because the visible text says Official Login.",
  "Assuming a familiar logo proves the destination is real.",
  "Opening a shortened link to discover where it goes.",
  "Opening an unexpected attachment because the filename sounds important.",
  "Renaming, forwarding, uploading, or testing a suspicious file.",
  "Downloading an update from a pop-up instead of using official device settings or the approved app store.",
];

const quizQuestions = [
  {
    question: "Why can a shortened link be risky?",
    choices: [
      "It hides the full destination from view.",
      "It always belongs to a school.",
      "It cannot open a website.",
      "It automatically verifies the sender.",
    ],
    answer: 0,
    explanation:
      "Shortened links make it harder to judge the destination before interaction.",
  },
  {
    question: "Which filename is the strongest warning sign?",
    choices: [
      "Homework.pdf.exe",
      "Notes.pdf",
      "Photo.jpg",
      "Essay.docx",
    ],
    answer: 0,
    explanation:
      "A double extension may disguise an executable file as a document.",
  },
  {
    question: "What is the safest response to a suspicious login link?",
    choices: [
      "Open the official website or app directly instead of using the link.",
      "Click the link because the logo looks real.",
      "Enter a password to test the page.",
      "Forward the link to classmates.",
    ],
    answer: 0,
    explanation:
      "Opening the official service directly avoids relying on an unverified destination.",
  },
  {
    question: "What should a student do with an unexpected attachment from a familiar display name?",
    choices: [
      "Do not open it; verify through a separate trusted channel.",
      "Open it because the name is familiar.",
      "Rename the file and try again.",
      "Upload it to another website for testing.",
    ],
    answer: 0,
    explanation:
      "Display names can be copied, and unexpected files should be verified independently.",
  },
  {
    question: "Where should a software update normally come from?",
    choices: [
      "Official device settings, the official application, or an approved app store.",
      "Any urgent pop-up.",
      "A random message attachment.",
      "An unknown file-sharing site.",
    ],
    answer: 0,
    explanation:
      "Official update channels reduce the risk of fake or harmful downloads.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B9</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B9.4 Impersonation and Fake Support Messages
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
          Next: B9.6 Reporting Workflows and Trusted Help
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

function JudgmentFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Safe Link and Attachment Judgment Flow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong judgment combines source, destination or file evidence, context,
        and a safer official route.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {judgmentStages.map((stage, index) => (
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
        <span className="font-bold">Defender rule:</span> suspicious links and
        files should be judged from displayed evidence and context—not opened,
        downloaded, renamed, forwarded, uploaded, or tested.
      </div>
    </section>
  );
}

function FakeEvidencePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Link and Attachment Evidence Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares destination, domain, filename,
            extension, sender, and context clues without opening any item.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {evidenceRows.map((row) => (
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

function EvidenceBoard() {
  const areas = [
    {
      name: "Link identity",
      saferQuestion:
        "Does the visible destination match the official organization and expected service?",
      saferChoice:
        "Open the official website or app directly instead of using the message link.",
    },
    {
      name: "Domain clues",
      saferQuestion:
        "Are there misspellings, extra words, unusual endings, unrelated domains, or hidden shortened destinations?",
      saferChoice:
        "Treat mismatches as suspicious and verify through a known official source.",
    },
    {
      name: "File identity",
      saferQuestion:
        "Do the filename, extension, file type, sender, and expected purpose all make sense?",
      saferChoice:
        "Do not open unexpected, mismatched, archived, executable, or double-extension files.",
    },
    {
      name: "Context and delivery",
      saferQuestion:
        "Was the link or file expected, and did it arrive through the normal trusted process?",
      saferChoice:
        "Confirm with the sender or organization through a separate official channel.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Link and File Evidence Board
      </h2>
      <p className="mt-3 text-slate-300">
        A safer judgment comes from several clues working together rather than
        from one visual detail.
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

export default function SafeLinkAttachmentJudgmentPage() {
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
              Module B9
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9.5 Safe Link and Attachment Judgment
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to judge links and attachments using source, domain,
            destination, filename, extension, file type, warnings, context, and
            trusted verification.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B9: Phishing and Social Engineering Defense"
          lessonTitle="Safe Link and Attachment Judgment"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that visible link text may not match the real destination.",
            "I will not open, download, rename, forward, upload, scan, or test suspicious links or files.",
            "I am ready to use source, destination, file, and context evidence together.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Familiar Label Can Hide an Unfamiliar Destination"
        >
          <p className="leading-8">
            A link can display trusted words while leading somewhere else. A
            filename can look like a document while ending in a different file
            type. Strong defenders do not rely on labels alone—they compare the
            source, destination, file identity, context, and official process.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every domain,
            link, file, sender, download, update, and attachment in this lesson
            is fictional. Do not interact with real suspicious content.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Inspect fictional link text, domains, destinations, filenames, extensions, file types, and warnings.",
            "Recognize look-alike domains, shortened links, double extensions, unexpected archives, and fake updates.",
            "Choose a safer official route without opening or testing suspicious content.",
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
          title="Links and Files Can Connect Phishing to Larger Incidents"
        >
          <p className="leading-8">
            A deceptive link may lead to a fake login page or payment form. A
            suspicious attachment may introduce unwanted software or expose
            data. Safe judgment can prevent credential theft, account takeover,
            malware warnings, financial loss, and privacy problems.
          </p>
        </SectionCard>

        <JudgmentFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Judge Before Interaction"
        >
          <p className="leading-8">
            The safest time to make a decision is before a link or file is
            opened. Defenders review displayed evidence, compare it with the
            expected context, and choose an official route that avoids the
            suspicious item entirely.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Link and Attachment Review
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

        <EvidenceBoard />
        <FakeEvidencePanel />

        <FakeDashboardCard
          title="Fake Link and Attachment Review Dashboard"
          subtitle="Training dashboard using fictional domains, destinations, filenames, extensions, senders, and context."
          metrics={[
            {
              label: "Items reviewed",
              value: "26",
              note: "Fictional links, documents, archives, installers, QR destinations, and update prompts.",
            },
            {
              label: "Strong warning signs",
              value: "15",
              note: "Look-alike domains, shortened links, double extensions, mismatched files, and unexpected downloads.",
            },
            {
              label: "Verified safely",
              value: "12",
              note: "Students used official portals, apps, directories, and known sender channels.",
            },
          ]}
        />

        <FakeAlertCard
          title="Look-Alike School Login Link and Double-Extension File"
          severity="High"
          time="11:37 AM"
          source="Fake School Message Training"
          details="A fictional email contains a misspelled school login domain and an attachment named UpdatedSchedule.pdf.exe."
          recommendation="Do not use the link or open the file. Open the official school portal manually, verify the message with the teacher, and report the email."
        />

        <FakeLogPanel
          title="Fake Link and File Review Log"
          logs={[
            "11:22:08 MESSAGE sender='unknown_address' context='unexpected_schedule_update'",
            "11:24:19 LINK visible_text='School Portal' domain_match='false'",
            "11:27:33 DOMAIN lookalike='true' spelling_difference='one_character'",
            "11:29:51 ATTACHMENT filename='UpdatedSchedule.pdf.exe' double_extension='true'",
            "11:33:26 VERIFICATION channel='official_school_portal' result='no_matching_notice'",
            "11:37:04 SAFE_ACTION recommendation='do not open link or attachment; report message'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Evidence Makes This Item High Risk?"
          evidence={[
            "A fictional message claims to contain a school schedule update.",
            "The link uses a misspelled version of the school domain.",
            "The attachment is named Schedule.pdf.exe.",
            "The teacher did not announce a new file.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The look-alike domain, double extension, and broken context make the message high risk; use the official portal and report it.",
            "The word schedule proves the file is safe.",
            "The student should open the attachment to confirm.",
            "The student should forward the link to classmates.",
          ]}
          bestAnswer={0}
          explanation="Several clues point in the same direction: the destination does not match, the file type is disguised, and the request was unexpected."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Link and Attachment Judgment"
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
          title="Classify Fictional Links and Files Without Opening Them"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Link and Attachment Judgment Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student receives a shortened delivery link, a
                look-alike school login, an unexpected archive, a
                double-extension document, and one verified portal file.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the source and expected purpose.</li>
                <li>Review the displayed domain or filename.</li>
                <li>Check extension, file type, warnings, and context.</li>
                <li>Classify the item as expected, suspicious, or report-first.</li>
                <li>Choose a safer official route that avoids the item.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Shortened Link Requests a Delivery Fee"
          scenario="A fictional text says a package is delayed and provides a shortened link for a small payment."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the link. Open the delivery company’s official app or website directly and check the tracking information.",
              outcome:
                "Best defensive choice. The shortened link hides the destination, and the claim can be checked safely elsewhere.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Click because the requested fee is small.",
              outcome:
                "Risky. Small-payment requests can still lead to fake sites or expose payment information.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the link to friends for testing.",
              outcome:
                "Unsafe. Suspicious links should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Teacher-Style Email Includes an Unexpected Archive"
          scenario="A fictional email uses a teacher’s display name and includes a file called ExamReview.zip, but the student was not expecting a file."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not open the archive. Contact the teacher through the official school portal or known school address.",
              outcome:
                "Best defensive choice. The file is unexpected, and the display name alone does not prove identity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Open the archive because the teacher’s name appears.",
              outcome:
                "Risky. Display names can be copied.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Upload the archive to another website for testing.",
              outcome:
                "Unsafe. Suspicious files should not be uploaded or tested by students.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Safe Link and Attachment Judgment Checklist"
          items={[
            "I compare the visible link, domain, sender, and expected service.",
            "I recognize shortened links, look-alike domains, double extensions, unusual file types, and fake updates.",
            "I review whether the link or file was expected and matches the normal process.",
            "I do not open, download, rename, forward, upload, scan, or test suspicious content.",
            "I open official websites, apps, portals, and device settings directly.",
            "I verify and report suspicious links or attachments through trusted channels.",
          ]}
        />

        <MiniQuiz
          title="B9.5 Mini Quiz: Safe Link and Attachment Judgment"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional link and attachment review board. Include five items, the source, visible destination or filename, domain or extension clue, expected context, classification, and safest official route."
          tips={[
            "Use fictional domains, links, files, senders, organizations, and update prompts only.",
            "Do not include real suspicious URLs, downloads, attachments, credentials, or private information.",
            "Explain how multiple clues support each classification.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Visible link text may not match the real destination.",
            "Look-alike domains, shortened links, double extensions, unexpected archives, and fake updates are important warning signs.",
            "A familiar logo, display name, or filename does not prove that an item is safe.",
            "Suspicious links and files should be judged before interaction.",
            "The safest route is usually to open the official service directly or verify through a trusted separate channel.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}