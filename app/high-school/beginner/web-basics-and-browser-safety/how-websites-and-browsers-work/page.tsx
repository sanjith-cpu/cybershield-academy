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
const nextLesson = `${modulePath}/urls-domains-and-web-address-clues`;

const vocab = [
  ["Browser", "An app that requests, receives, checks, and displays website content for the user."],
  ["Website", "A collection of web pages and resources that a browser can request from a server."],
  ["Request", "A browser message asking for a page, file, image, script, or other resource."],
  ["Response", "The website server's reply, such as page content, an image, a redirect, an error, or a warning-triggering result."],
  ["Server", "A system that stores or delivers website resources. In CyberShield examples, servers are fictional and safe."],
  ["Rendering", "The process where the browser turns page code and resources into what the user sees on screen."],
];

const mistakes = [
  "Thinking the browser is just a search box. A browser is a decision point that requests, checks, displays, blocks, warns, and remembers web activity.",
  "Assuming a page is safe just because it loads. Loading successfully does not prove the page is trustworthy.",
  "Ignoring browser warnings, permission prompts, pop-ups, downloads, or redirects because the page looks normal.",
  "Testing suspicious real websites to see what happens. CyberShield uses fake examples only and teaches students to stop, document, report, or ask trusted help.",
];

const requestRows = [
  { step: "1", browser: "Address entered", server: "No contact yet", safety: "Read the address before pressing Enter." },
  { step: "2", browser: "Request sent for learning.example", server: "Receives request", safety: "The browser is asking for page content." },
  { step: "3", browser: "Receives page response", server: "Sends page resources", safety: "The browser may load text, images, scripts, and style files." },
  { step: "4", browser: "Checks clues and displays page", server: "Connection ends or continues", safety: "Watch for warnings, redirects, downloads, and permission prompts." },
];

const quizQuestions = [
  {
    question: "What does a browser do when you open a website?",
    choices: [
      "It requests website resources, checks clues, and displays the page for the user.",
      "It automatically proves that every page is safe.",
      "It stores every user's password for every site.",
      "It bypasses network safety rules so pages load faster.",
    ],
    answer: 0,
    explanation:
      "A browser requests resources and displays pages, but it does not automatically prove a website is trustworthy.",
  },
  {
    question: "Which item is an example of a browser request?",
    choices: [
      "Asking learning.example for a classroom webpage in a fake training example.",
      "Writing down a real friend's password.",
      "Opening a suspicious real link to see what it does.",
      "Deleting browser warnings without reading them.",
    ],
    answer: 0,
    explanation:
      "A request is when the browser asks for a web resource. CyberShield examples are fictional and safe.",
  },
  {
    question: "Why should a user pay attention after a page loads?",
    choices: [
      "Because a loaded page can still show warnings, redirects, downloads, forms, or permission prompts that need judgment.",
      "Because loading means every part of the site has been approved by the school.",
      "Because the browser always removes every possible risk.",
      "Because users should click through warnings quickly.",
    ],
    answer: 0,
    explanation:
      "A page loading is not the same as a page being safe. Browser clues still matter.",
  },
  {
    question: "What is the safest CyberShield response to a suspicious real website?",
    choices: [
      "Do not test it. Stop, save safe evidence if appropriate, report it, or ask a trusted adult or school technology staff.",
      "Keep clicking until the page reveals what it does.",
      "Share the link with classmates to compare results.",
      "Type fake passwords into the page to test it.",
    ],
    answer: 0,
    explanation:
      "CyberShield does not ask students to test real suspicious websites. Use trusted help and safe reporting.",
  },
  {
    question: "What is rendering in a browser?",
    choices: [
      "Turning page code and resources into the visible page the user sees.",
      "Guessing someone's account password.",
      "Installing a browser extension without review.",
      "Changing a school firewall rule.",
    ],
    answer: 0,
    explanation:
      "Rendering is the browser's process of displaying web content visually for the user.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B5</h2>
      <div className="mt-5 flex flex-wrap gap-3">
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
          href="/high-school"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          High School Hub
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B5.2 URLs, Domains, and Web Address Clues
        </Link>
      </div>
    </section>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function BrowserRequestDiagram() {
  const steps = [
    {
      title: "1. User enters an address",
      detail: "The user types, clicks, or selects a website address in the browser.",
      clue: "Defensive habit: read the address and avoid suspicious real links.",
    },
    {
      title: "2. Browser requests content",
      detail: "The browser asks the website server for the page and related resources.",
      clue: "Defensive habit: remember that a request does not prove trust.",
    },
    {
      title: "3. Server responds",
      detail: "The server sends page content, an error, a redirect, or other response details.",
      clue: "Defensive habit: watch for redirects, warnings, and unexpected downloads.",
    },
    {
      title: "4. Browser renders the page",
      detail: "The browser turns code and resources into the visible page.",
      clue: "Defensive habit: inspect what the page asks you to do before acting.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Browser request and website response flow</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A website visit is not magic. The browser and website exchange requests and responses, then the browser displays
        the result. Safety comes from reading the clues before trusting what appears.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
            <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-100">
              {step.clue}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FakeBrowserWindow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Browser View</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A safe fictional website loading example</h2>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Fake Data Only
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="ml-4 flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 font-mono text-sm text-cyan-100">
            https://learning.example/web-basics
          </div>
        </div>
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-slate-800 p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Page Preview</p>
            <h3 className="mt-3 text-2xl font-black text-white">CyberShield Practice Page</h3>
            <p className="mt-3 leading-7 text-slate-300">
              This fictional page returned text, style files, and a small image. No real browsing or external content is
              required for the lesson.
            </p>
            <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              Browser clue: a page can look normal while still asking for unsafe actions later. Keep reading evidence.
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Resource Requests</p>
            <div className="mt-4 space-y-3">
              {["GET /web-basics page", "GET /styles.css", "GET /diagram.svg", "No download prompt shown"].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-3 font-mono text-sm text-cyan-100">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This is a simplified training view. Real browsers and websites are more complex, but the defensive habit is
              the same: read the evidence before trusting or clicking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequestResponseTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What happens during a basic page visit?</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
        <div className="grid gap-0 border-b border-slate-800 bg-slate-950 p-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400 md:grid-cols-[0.25fr_1fr_1fr_1fr]">
          <span>Step</span>
          <span>Browser side</span>
          <span>Website side</span>
          <span>Safety thought</span>
        </div>
        {requestRows.map((row) => (
          <div key={row.step} className="grid gap-3 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 md:grid-cols-[0.25fr_1fr_1fr_1fr]">
            <span className="font-black text-cyan-200">{row.step}</span>
            <span className="text-slate-300">{row.browser}</span>
            <span className="text-slate-300">{row.server}</span>
            <span className="text-emerald-100">{row.safety}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HowWebsitesAndBrowsersWorkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <TopNav />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                B5.1 • Web Basics and Browser Safety
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                How Websites and Browsers Work
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn what happens when a browser opens a website, why requests and responses matter, and how students
                can use browser clues to make safer decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders read the browser story.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Security teams often start with basic questions: What page was requested? What did the browser show?
                Was there a warning, redirect, form, download, or permission request? This lesson teaches that mindset
                safely with fake examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:px-8">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="B5.1: How Websites and Browsers Work"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before you start this web basics lesson"
          items={[
            "I understand that this lesson uses fake websites and fake browser evidence only.",
            "I will not open suspicious real links to test them.",
            "I can explain that a browser is more than a search box.",
            "I know that browser warnings and prompts should be read carefully.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can:">
            <ul className="space-y-3 leading-7">
              <li>• Explain the basic job of a browser.</li>
              <li>• Describe requests, responses, servers, resources, and rendering at a beginner level.</li>
              <li>• Identify why a page loading successfully does not automatically prove trust.</li>
              <li>• Use fake browser evidence to choose a safe defensive response.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="Every web decision starts in the browser.">
            <p className="leading-7">
              Many online safety mistakes begin when someone moves too quickly: clicking a result, trusting a page,
              typing into a form, accepting a prompt, or downloading a file. Understanding the browser flow helps
              students slow down and inspect clues before acting.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="A website visit is a request-and-response conversation.">
          <p className="leading-7">
            When you open a website, the browser asks for web resources. The website server sends back a response, and
            the browser displays the result. That result might include text, images, style files, scripts, redirects,
            forms, downloads, or warning messages. A defender does not assume trust just because something appears on
            screen. A defender checks the evidence.
          </p>
        </SectionCard>

        <BrowserRequestDiagram />
        <FakeBrowserWindow />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard eyebrow="Key Vocabulary" title="Words that make web basics clearer">
            <div className="grid gap-3">
              {vocab.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="font-black text-cyan-200">{term}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <RequestResponseTable />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <FakeDashboardCard
            title="Fake Browser Safety Dashboard"
            subtitle="A fictional dashboard showing safe beginner-level browser clues."
            metrics={[
              { label: "Page requests", value: "4", note: "Expected learning page resources." },
              { label: "Warnings", value: "0", note: "No warning shown in this fake example." },
              { label: "Downloads", value: "0", note: "No unexpected file prompt." },
            ]}
          />

          <FakeAlertCard
            title="Unexpected Browser Prompt"
            severity="Medium"
            time="11:18 AM"
            source="Fake Browser Training Panel"
            details="A fictional website preview asks the user to allow notifications before showing the classroom article. The page also uses pushy language: 'Allow now to continue.'"
            recommendation="Do not allow unnecessary permissions. Close the prompt, document the clue, and ask trusted help if the page is needed for schoolwork."
          />
        </section>

        <FakeLogPanel
          title="Fake Browser Request Log"
          logs={[
            "11:15:02 REQUEST  browser -> https://learning.example/web-basics",
            "11:15:03 RESPONSE  learning.example -> page content returned",
            "11:15:04 REQUEST  browser -> /styles.css",
            "11:15:04 RESPONSE  learning.example -> style file returned",
            "11:15:05 REQUEST  browser -> /diagram.svg",
            "11:15:05 RESPONSE  learning.example -> training diagram returned",
            "11:15:07 STATUS   no download prompt, no real external link visited",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="What beginners should avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Trace a fake browser request">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Step 1</p>
              <h3 className="mt-2 text-xl font-black text-white">Read the address</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The fake address is https://learning.example/web-basics. It is fictional and used for training only.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Step 2</p>
              <h3 className="mt-2 text-xl font-black text-white">Review the response</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The fake page returns expected learning content and does not trigger a download or permission request.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Step 3</p>
              <h3 className="mt-2 text-xl font-black text-white">Choose a safe conclusion</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                In this fake case, the evidence looks normal. Still, students should not ignore future warnings or prompts.
              </p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="What does the fake browser evidence support?"
          evidence={[
            "The fake page address is learning.example/web-basics.",
            "The fake log shows a page, style file, and diagram were returned.",
            "No unexpected download, redirect, or permission prompt appears in this fake example.",
            "The page still should not be treated as safe forever; future prompts and links must be reviewed.",
          ]}
          question="Which conclusion is safest and most accurate?"
          options={[
            "The current fake evidence looks normal, but the user should keep reading browser clues before acting.",
            "The page is guaranteed safe forever because it loaded once.",
            "The user should disable browser warnings to speed up browsing.",
            "The user should test suspicious real websites to compare them with this fake example.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a careful, limited conclusion. Defenders avoid overclaiming and keep watching for browser clues."
        />

        <ScenarioDecisionLab
          title="A page loads, then asks for extra permissions"
          scenario="A fictional study page loads normally, but then asks to send notifications and says, 'Allow notifications to continue reading.' You do not need notifications for the assignment."
          choices={[
            {
              label: "Choice A",
              response: "Allow the permission because the page loaded first.",
              outcome: "Risky. A loaded page can still ask for unnecessary permissions. Loading does not prove trust.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Block or close the permission prompt, continue only if the page works safely, and ask trusted help if needed.",
              outcome: "Best choice. You avoid unnecessary permission and keep the decision safe.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Click every prompt quickly so the assignment gets done faster.",
              outcome: "Risky. Fast clicking causes many browser-safety mistakes.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B5.1 Defender Checklist"
          items={[
            "I can explain that browsers send requests and display responses.",
            "I can describe why a loaded page is not automatically trustworthy.",
            "I can name browser clues that need attention, such as warnings, redirects, downloads, forms, and permissions.",
            "I know not to test suspicious real websites or links.",
            "I can choose a safe response when a page asks for unnecessary permissions.",
          ]}
        />

        <MiniQuiz title="B5.1 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Explain a browser visit in plain language"
          prompt="Write a short beginner-friendly paragraph explaining what happens when a browser opens a website. Include the words browser, request, response, server, and safety clue."
          tips={[
            "Use fake examples only.",
            "Explain without scary or harmful details.",
            "End with one safe browser habit.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A browser requests website resources and displays the response for the user.",
            "A page loading successfully does not automatically prove the page is safe or trustworthy.",
            "Browser clues like warnings, redirects, downloads, forms, and permission prompts deserve attention.",
            "CyberShield uses fake websites and fake evidence only; students should not test suspicious real websites.",
            "A careful defender reads the browser story before clicking, typing, downloading, or allowing permissions.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}