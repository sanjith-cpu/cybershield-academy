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
const previousLesson = `${modulePath}/how-websites-and-browsers-work`;
const nextLesson = `${modulePath}/https-certificates-and-trust-signals`;

const vocab = [
  ["URL", "A full web address that tells the browser where to request a web resource."],
  ["Protocol", "The beginning of a URL, such as https, that describes how the browser and site communicate."],
  ["Domain", "The main website name that users should inspect carefully before trusting a page."],
  ["Subdomain", "A word before the main domain, such as student in student.learning.example."],
  ["Path", "The part after the domain that points to a page or location on the website."],
  ["Query string", "Extra information after a question mark in a URL, often used for search, tracking, filters, or page state."],
];

const mistakes = [
  "Only reading the first word in a web address instead of finding the real main domain.",
  "Trusting a page because it uses security-looking words, logos, or urgent messages.",
  "Assuming a long address is automatically dangerous or a short address is automatically safe.",
  "Clicking suspicious real links to inspect them. CyberShield uses fake examples only and teaches safe reporting.",
];

const urlParts = [
  {
    label: "Protocol",
    value: "https://",
    meaning: "Shows the communication method. HTTPS matters, but it does not prove the page is trustworthy by itself.",
  },
  {
    label: "Subdomain",
    value: "portal.",
    meaning: "A section before the main domain. Subdomains can be useful, but they should not distract you from the real domain.",
  },
  {
    label: "Domain",
    value: "learning.example",
    meaning: "The main website identity in this fake example. This is the part defenders inspect carefully.",
  },
  {
    label: "Path",
    value: "/assignments/login-help",
    meaning: "A location inside the site. It can describe a page, but it does not prove trust.",
  },
  {
    label: "Query",
    value: "?class=cyber101",
    meaning: "Extra page information. It can be normal, but students should avoid sharing private information in links.",
  },
];

const addressExamples = [
  {
    address: "https://portal.learning.example/assignments",
    status: "Looks consistent",
    clue: "The fake domain and path match the training purpose.",
    tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  },
  {
    address: "https://learning.example.security-check.example/login",
    status: "Needs caution",
    clue: "The real main domain is security-check.example, not learning.example.",
    tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-50",
  },
  {
    address: "https://learnlng.example/update-account",
    status: "Needs caution",
    clue: "The name uses a lookalike spelling in this fake training example.",
    tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-50",
  },
  {
    address: "http://learning.example/password-reset",
    status: "Stop and verify",
    clue: "A sign-in or reset page should not be handled casually. Ask trusted help if something feels wrong.",
    tone: "border-red-400/30 bg-red-400/10 text-red-100",
  },
];

const quizQuestions = [
  {
    question: "What is the best beginner definition of a URL?",
    choices: [
      "A full web address that tells a browser where to request a resource.",
      "A guarantee that a page is safe.",
      "A password stored by a website.",
      "A tool that removes every browser risk.",
    ],
    answer: 0,
    explanation: "A URL is a web address. It can contain helpful clues, but it is not a safety guarantee.",
  },
  {
    question: "In the fake address https://portal.learning.example/classes, which part is the main domain?",
    choices: ["learning.example", "portal", "https", "/classes"],
    answer: 0,
    explanation: "The main domain in this fake example is learning.example. Portal is the subdomain and /classes is the path.",
  },
  {
    question: "Why can subdomains be confusing?",
    choices: [
      "A subdomain appears before the main domain and can distract users from the real website identity.",
      "A subdomain always means a page is fake.",
      "A subdomain is the same thing as a password.",
      "A subdomain deletes browser warnings.",
    ],
    answer: 0,
    explanation: "Subdomains can be normal, but defenders still identify the main domain before trusting a page.",
  },
  {
    question: "Which response is safest when a real link looks suspicious?",
    choices: [
      "Do not test it. Stop, document safe evidence if appropriate, and ask a trusted adult or school technology staff.",
      "Open it in every browser to compare the results.",
      "Type fake information into the page to see what happens.",
      "Send it to classmates so they can check it too.",
    ],
    answer: 0,
    explanation: "Students should not test suspicious real links. Use safe reporting and trusted help.",
  },
  {
    question: "Which statement about HTTPS is accurate for this beginner lesson?",
    choices: [
      "HTTPS is an important connection clue, but it does not prove the page is trustworthy by itself.",
      "HTTPS means the website owner is always honest.",
      "HTTPS means a page cannot ask for unsafe information.",
      "HTTPS means students should ignore the domain name.",
    ],
    answer: 0,
    explanation: "HTTPS matters, but users still inspect the domain, page purpose, prompts, forms, and context.",
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
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B5</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B5.1 How Websites and Browsers Work
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
          Next: B5.3 HTTPS, Certificates, and Trust Signals
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

function UrlAnatomyDiagram() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Anatomy of a fake training URL</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A URL can contain several parts. The safest habit is to slow down, find the real main domain, and connect the
        address to the page&apos;s purpose before clicking, typing, downloading, or signing in.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="ml-4 flex-1 overflow-x-auto rounded-full border border-slate-700 bg-slate-950 px-4 py-2 font-mono text-sm text-cyan-100">
            https://portal.learning.example/assignments/login-help?class=cyber101
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-5">
          {urlParts.map((part) => (
            <article key={part.label} className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{part.label}</p>
              <p className="mt-3 break-words rounded-xl border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-cyan-100">
                {part.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{part.meaning}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddressClueBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Address Inspector</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Read the domain, not just the familiar words</h2>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Fake Examples Only
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        {addressExamples.map((item) => (
          <article key={item.address} className={`rounded-2xl border p-4 ${item.tone}`}>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-sm md:text-base">{item.address}</p>
                <p className="mt-2 text-sm leading-6 opacity-90">{item.clue}</p>
              </div>
              <span className="w-fit rounded-full border border-current/30 bg-slate-950/50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
                {item.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DomainDecisionFlow() {
  const steps = [
    {
      title: "Find the main domain",
      detail: "Ignore distracting words and locate the real website identity before the path or query string.",
    },
    {
      title: "Check the page purpose",
      detail: "Ask whether the address matches what the page claims to do, especially for login, payment, or file pages.",
    },
    {
      title: "Look for pressure clues",
      detail: "Urgency, threats, surprise rewards, or unexpected account requests can change the risk decision.",
    },
    {
      title: "Use trusted help",
      detail: "When a real link feels wrong, stop and ask a teacher, guardian, counselor, or school technology staff.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">A safe URL review flow</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SafeLab() {
  return (
    <SectionCard eyebrow="Safe Defensive Lab" title="Practice reading fake web addresses">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 1</p>
          <h3 className="mt-2 text-xl font-black text-white">Circle the main domain</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Use the fake address shown in the lesson and identify the main domain before looking at the path or query.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 2</p>
          <h3 className="mt-2 text-xl font-black text-white">Compare the claim</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Ask whether the page claim matches the address. A scholarship page, login page, or file download should make sense.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 3</p>
          <h3 className="mt-2 text-xl font-black text-white">Choose a safe action</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            For suspicious real links, do not explore. Stop, report safely, or ask trusted help.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

export default function UrlsDomainsAndWebAddressCluesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <TopNav />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                B5.2 • Web Basics and Browser Safety
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                URLs, Domains, and Web Address Clues
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how to break down a web address, find the real main domain, and use URL clues without testing
                suspicious real links.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders inspect addresses before trust.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Security teams often review reported links by identifying the main domain, comparing the address to the
                message context, and deciding whether the safest next step is to block, report, verify, or ask for help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:px-8">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="B5.2: URLs, Domains, and Web Address Clues"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before you start this URL safety lesson"
          items={[
            "I understand that all addresses in this lesson are fictional training examples.",
            "I will not open suspicious real links to inspect them.",
            "I can explain that a familiar word in a URL does not automatically prove trust.",
            "I am ready to slow down and identify the main domain before making a decision.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can:">
            <ul className="space-y-3 leading-7">
              <li>• Explain what a URL is and why web addresses matter for safety.</li>
              <li>• Identify protocol, subdomain, main domain, path, and query string in a fake URL.</li>
              <li>• Recognize lookalike spelling, confusing subdomains, and mismatched page purpose.</li>
              <li>• Choose a safe response when a real link looks suspicious.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="A web address can reveal the first safety clues.">
            <p className="leading-7">
              Many scams and unsafe pages depend on speed. They want users to notice a familiar logo or scary message
              before checking the address. Learning to read the URL gives students a calm first step before clicking,
              typing, downloading, or sharing information.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="The main domain is the anchor of a web address.">
          <p className="leading-7">
            A URL may contain many parts, but defenders first look for the real main domain. The path, subdomain, and
            page text can include familiar-looking words, but the main domain is the clearest identity clue. Students
            should never investigate suspicious real links by opening them. Use fake examples, safe screenshots, and
            trusted reporting instead.
          </p>
        </SectionCard>

        <UrlAnatomyDiagram />
        <AddressClueBoard />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard eyebrow="Key Vocabulary" title="Words that make URL inspection easier">
            <div className="grid gap-3">
              {vocab.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="font-black text-cyan-200">{term}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <DomainDecisionFlow />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <FakeDashboardCard
            title="Fake URL Review Dashboard"
            subtitle="A fictional dashboard showing beginner-level web address clues."
            metrics={[
              { label: "Reported links", value: "4", note: "All fake examples for classroom analysis." },
              { label: "Domain mismatches", value: "2", note: "Address does not match page claim." },
              { label: "Safe actions", value: "3", note: "Stop, verify, or report instead of testing." },
            ]}
          />

          <FakeAlertCard
            title="Reported Link Uses Familiar Words in Wrong Place"
            severity="Medium"
            time="12:42 PM"
            source="Fake Browser Safety Queue"
            details="A fictional message says it is from the school learning portal, but the fake address places learning.example before another main domain. The familiar words may be there to distract the user."
            recommendation="Do not click or test the link. Identify the main domain, save safe evidence if appropriate, and ask a teacher or school technology staff for help."
          />
        </section>

        <FakeLogPanel
          title="Fake URL Review Notes"
          logs={[
            "12:40:18 REVIEW  reported address copied from fake classroom message",
            "12:40:32 CHECK   protocol found: https",
            "12:40:47 CHECK   visible phrase contains learning.example",
            "12:41:03 CHECK   main domain identified: security-check.example",
            "12:41:18 RESULT  domain and message claim do not match",
            "12:41:35 ACTION  do not click; route to trusted reporting workflow",
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

        <SafeLab />

        <AnalyzeEvidenceCard
          title="What does the fake URL evidence support?"
          evidence={[
            "The fictional message claims to be from the school learning portal.",
            "The fake URL contains the familiar words learning.example before another main domain.",
            "The real main domain in the fake address is security-check.example.",
            "The message asks the student to sign in quickly before class begins.",
          ]}
          question="Which conclusion is safest and most accurate?"
          options={[
            "The link should not be clicked or tested; the main domain does not match the claimed portal.",
            "The link is safe because it contains the words learning.example somewhere in the address.",
            "The student should enter a fake password to see what happens.",
            "The student should forward the link to classmates so everyone can inspect it.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a cautious defensive conclusion. Familiar words can appear in confusing places, so the safest response is not to click and to use trusted reporting."
        />

        <ScenarioDecisionLab
          title="A scholarship link looks almost right"
          scenario="A fictional message says a student won a school scholarship. The address shown is https://sch0ol-awards.example/claim-now. The page asks for account login information and says the offer expires in ten minutes."
          choices={[
            {
              label: "Choice A",
              response: "Click quickly because the offer sounds urgent.",
              outcome: "Risky. Urgency is a pressure clue, and the address should be verified before any action.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Do not click. Save safe evidence if appropriate and ask a trusted adult or school staff to verify.",
              outcome: "Best choice. You avoid testing the link and move the decision to a trusted reporting path.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Share the link with friends to ask whether it works for them.",
              outcome: "Risky. Sharing suspicious links can spread the problem.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B5.2 Defender Checklist"
          items={[
            "I can explain what a URL is.",
            "I can identify protocol, subdomain, main domain, path, and query string in a fake address.",
            "I can explain why HTTPS alone does not prove that a page is trustworthy.",
            "I can spot confusing subdomains, mismatched page purpose, and lookalike spelling in fake examples.",
            "I know not to open suspicious real links to inspect them.",
          ]}
        />

        <MiniQuiz title="B5.2 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a URL safety explanation"
          prompt="Write a short guide for a younger student explaining how to inspect a fake web address. Include protocol, main domain, path, and one safe action for suspicious real links."
          tips={[
            "Use only fake example addresses.",
            "Do not tell students to test suspicious real websites.",
            "Explain why the main domain matters more than familiar-looking words elsewhere in the address.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A URL is a full web address, and each part can provide safety clues.",
            "The main domain is the most important website identity clue for beginners to locate.",
            "Subdomains, paths, and query strings can contain familiar words without proving trust.",
            "HTTPS is important, but it does not prove that the page owner or page purpose is safe.",
            "Students should not click or test suspicious real links; they should stop, document safely, report, or ask trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}