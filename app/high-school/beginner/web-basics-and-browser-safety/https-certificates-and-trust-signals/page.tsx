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
const previousLesson = `${modulePath}/urls-domains-and-web-address-clues`;
const nextLesson = `${modulePath}/forms-cookies-and-sessions`;

const vocab = [
  ["HTTP", "A web communication method that does not provide the same protection as HTTPS for data in transit."],
  ["HTTPS", "A more secure web communication method that helps protect data while it moves between a browser and a website."],
  ["Certificate", "A digital document that helps a browser verify which website it is communicating with."],
  ["Certificate authority", "An organization trusted by browsers to issue certificates after checking website identity in different ways."],
  ["Encryption in transit", "Protection for data while it is moving across a network."],
  ["Trust signal", "A clue that can support a safety decision, but should not be treated as a complete guarantee by itself."],
];

const mistakes = [
  "Thinking the lock icon means the website owner is automatically honest.",
  "Ignoring the domain because a page uses HTTPS.",
  "Typing private information into a page just because the browser does not show a warning.",
  "Clicking through certificate or browser warnings without asking trusted help.",
];

const certificateFields = [
  {
    label: "Issued to",
    value: "portal.learning.example",
    meaning: "The fake site identity the certificate is meant to represent.",
  },
  {
    label: "Issued by",
    value: "Example Student CA",
    meaning: "The fake certificate authority shown for training purposes.",
  },
  {
    label: "Valid dates",
    value: "Jan 01 - Dec 31",
    meaning: "Certificates have time limits. Expired certificates can trigger warnings.",
  },
  {
    label: "Connection",
    value: "Encrypted in transit",
    meaning: "Data is better protected while moving, but the page still needs context review.",
  },
];

const signalCards = [
  {
    title: "Helpful Signal",
    clue: "The page uses HTTPS and the domain matches the expected fake classroom portal.",
    action: "Continue to review the page purpose, form requests, and context before trusting it.",
    tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  },
  {
    title: "Caution Signal",
    clue: "The page has HTTPS, but the main domain does not match the message claim.",
    action: "Do not rely on the lock icon. Stop and verify through a trusted source.",
    tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-50",
  },
  {
    title: "Warning Signal",
    clue: "The browser shows a certificate warning or says the connection may not be private.",
    action: "Do not continue. Ask a teacher, guardian, or school technology staff for help.",
    tone: "border-red-400/30 bg-red-400/10 text-red-100",
  },
];

const quizQuestions = [
  {
    question: "What does HTTPS mainly help protect?",
    choices: [
      "Data while it moves between the browser and website.",
      "The honesty of the website owner.",
      "Every file downloaded from the page.",
      "A student from making any unsafe choice online.",
    ],
    answer: 0,
    explanation: "HTTPS helps protect data in transit. It does not prove that the site owner or page purpose is safe.",
  },
  {
    question: "What is the safest way to think about the browser lock icon?",
    choices: [
      "It is one helpful clue, but not a complete guarantee of trust.",
      "It means the website can never be fake.",
      "It means students should ignore the domain name.",
      "It means every form on the page is safe to complete.",
    ],
    answer: 0,
    explanation: "The lock icon is useful, but students still need to inspect the domain, page purpose, message context, and requested information.",
  },
  {
    question: "What should a student do if a real browser page shows a certificate warning?",
    choices: [
      "Stop and ask trusted help instead of clicking through the warning.",
      "Click through quickly so the page can load.",
      "Type fake information to test the page.",
      "Share the warning link with classmates.",
    ],
    answer: 0,
    explanation: "Students should not bypass warnings or test suspicious real pages. They should stop and get trusted help.",
  },
  {
    question: "Which statement about certificates is most accurate for this beginner lesson?",
    choices: [
      "Certificates help browsers verify site identity for secure communication.",
      "Certificates prove a website is always ethical.",
      "Certificates remove the need for passwords.",
      "Certificates are the same thing as cookies.",
    ],
    answer: 0,
    explanation: "Certificates support identity verification for secure connections, but they are not a promise that the page is safe in every way.",
  },
  {
    question: "A fake page uses HTTPS but asks for unnecessary private information. What is the safest conclusion?",
    choices: [
      "HTTPS alone is not enough; review the request and ask trusted help if it feels wrong.",
      "HTTPS means the form is automatically safe.",
      "The student should submit the information because there is a lock icon.",
      "The student should turn off browser warnings.",
    ],
    answer: 0,
    explanation: "HTTPS protects the connection, but students still need to judge the information request and page context.",
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
          Previous: B5.2 URLs, Domains, and Web Address Clues
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
          Next: B5.4 Forms, Cookies, and Sessions
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

function HttpsFlowDiagram() {
  const steps = [
    {
      title: "Browser requests page",
      detail: "The browser asks for a fake training site using HTTPS.",
    },
    {
      title: "Site presents certificate",
      detail: "The site shows a certificate so the browser can check the connection identity.",
    },
    {
      title: "Browser checks trust",
      detail: "The browser checks whether the certificate is valid, trusted, and connected to the domain.",
    },
    {
      title: "Encrypted connection",
      detail: "If checks pass, data can move with stronger protection in transit.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">How HTTPS builds a protected connection</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        HTTPS helps the browser and website communicate more safely. The important beginner idea is simple: HTTPS is
        a strong connection clue, but it does not replace checking the domain, context, and information request.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="relative rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
            {index < steps.length - 1 && (
              <div className="mt-4 hidden rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-center text-xs font-bold text-cyan-200 lg:block">
                then
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificateViewer() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Certificate Viewer</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A certificate gives identity clues, not total safety</h2>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Fake Training Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="border-b border-slate-800 bg-slate-900 px-4 py-3">
          <p className="font-mono text-sm text-cyan-100">Certificate details for https://portal.learning.example</p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
          {certificateFields.map((field) => (
            <article key={field.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{field.label}</p>
              <p className="mt-3 break-words rounded-xl border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-cyan-100">
                {field.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{field.meaning}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSignalBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Trust Signal Board</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Classify the signal before making a decision</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {signalCards.map((card) => (
          <article key={card.title} className={`rounded-2xl border p-5 ${card.tone}`}>
            <h3 className="text-xl font-black">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 opacity-90">{card.clue}</p>
            <div className="mt-4 rounded-xl border border-current/30 bg-slate-950/50 p-3 text-sm leading-6">
              <span className="font-black">Safe action:</span> {card.action}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnicalBreakdown() {
  const steps = [
    {
      title: "Connection security",
      detail: "HTTPS helps keep information from being easily read or changed while it travels.",
    },
    {
      title: "Website identity clue",
      detail: "Certificates help the browser check that it is communicating with the domain shown.",
    },
    {
      title: "Still not full trust",
      detail: "A scam page can still use HTTPS. Users must also review the domain, message, form, and request.",
    },
    {
      title: "Warnings matter",
      detail: "Certificate warnings should be treated seriously. Students should stop instead of bypassing them.",
    },
  ];

  return (
    <SectionCard eyebrow="Technical Breakdown" title="What HTTPS can and cannot tell you">
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-200">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function SafeLab() {
  return (
    <SectionCard eyebrow="Safe Defensive Lab" title="Practice reviewing fake trust signals">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 1</p>
          <h3 className="mt-2 text-xl font-black text-white">Find the connection clue</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Identify whether the fake example uses HTTP or HTTPS. Explain what that says about data in transit.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 2</p>
          <h3 className="mt-2 text-xl font-black text-white">Check the domain context</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Compare the fake certificate domain to the fake page claim. Decide whether the identity clue fits.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 3</p>
          <h3 className="mt-2 text-xl font-black text-white">Choose a safe action</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            If a real page shows a warning or asks for unexpected private information, stop and ask trusted help.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

export default function HttpsCertificatesTrustSignalsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <TopNav />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                B5.3 • Web Basics and Browser Safety
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                HTTPS, Certificates, and Trust Signals
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn what HTTPS and certificates protect, what they do not prove, and how to combine trust signals
                with domain and context review.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders do not trust one signal alone.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Security teams look at multiple clues: HTTPS, certificate status, domain name, browser warnings,
                request type, message context, and user impact. One green-looking signal is never the whole answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:px-8">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="B5.3: HTTPS, Certificates, and Trust Signals"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before you start this HTTPS lesson"
          items={[
            "I understand that HTTPS is important, but not a complete trust guarantee.",
            "I will not click through real browser warnings to test a page.",
            "I can explain that all examples in this lesson are fictional training examples.",
            "I am ready to combine connection clues with domain, context, and request clues.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can:">
            <ul className="space-y-3 leading-7">
              <li>• Explain the beginner difference between HTTP and HTTPS.</li>
              <li>• Describe what certificates help browsers verify.</li>
              <li>• Explain why HTTPS does not automatically prove a website is trustworthy.</li>
              <li>• Choose a safe response when a real page shows a browser or certificate warning.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="A secure connection is not the same as a safe decision.">
            <p className="leading-7">
              Students often hear that a lock icon means a website is safe. A better high school answer is more careful:
              HTTPS helps protect communication, but users still need to check the domain, page purpose, requested
              information, browser warnings, and the situation around the link.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="HTTPS protects the connection, not every part of the page.">
          <p className="leading-7">
            HTTPS helps protect information as it travels between a browser and a website. Certificates help the browser
            check the website identity for that protected connection. But a page can still be misleading, unnecessary,
            or risky even when the connection is encrypted. Good defenders use HTTPS as one clue in a bigger safety review.
          </p>
        </SectionCard>

        <HttpsFlowDiagram />
        <CertificateViewer />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard eyebrow="Key Vocabulary" title="Words that make HTTPS safer to understand">
            <div className="grid gap-3">
              {vocab.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="font-black text-cyan-200">{term}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <TechnicalBreakdown />
        </section>

        <TrustSignalBoard />

        <section className="grid gap-6 lg:grid-cols-2">
          <FakeDashboardCard
            title="Fake Browser Trust Dashboard"
            subtitle="A fictional review panel showing how defenders combine multiple trust clues."
            metrics={[
              { label: "HTTPS present", value: "3/4", note: "Connection clue found in most fake examples." },
              { label: "Domain mismatch", value: "1", note: "HTTPS did not fix a suspicious context clue." },
              { label: "Warnings shown", value: "1", note: "Stop and ask trusted help instead of bypassing." },
            ]}
          />

          <FakeAlertCard
            title="HTTPS Present But Page Context Looks Wrong"
            severity="Medium"
            time="1:18 PM"
            source="Fake Browser Safety Queue"
            details="A fictional sign-in page uses HTTPS, but the main domain does not match the classroom portal and the page asks for extra personal information. The lock icon is not enough to make the request trustworthy."
            recommendation="Do not submit information. Verify the site through a known trusted route or ask a teacher, guardian, or school technology staff."
          />
        </section>

        <FakeLogPanel
          title="Fake HTTPS Review Notes"
          logs={[
            "13:15:06 CHECK   page protocol observed: HTTPS",
            "13:15:21 CHECK   fake certificate issued to: portal.learning.example",
            "13:15:45 CHECK   fake message claim: school scholarship verification",
            "13:16:03 REVIEW  requested data: login plus extra private information",
            "13:16:22 RESULT  HTTPS protects connection but request still needs verification",
            "13:16:41 ACTION  stop; use trusted reporting or known official route",
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
          title="What does the fake browser evidence support?"
          evidence={[
            "The fictional page uses HTTPS and shows a lock icon.",
            "The fake domain is verification-help.example, not the expected school portal domain.",
            "The page asks for login information plus unnecessary personal details.",
            "The message says the student must respond in five minutes.",
          ]}
          question="Which conclusion is safest and most accurate?"
          options={[
            "HTTPS is one helpful clue, but the mismatch, pressure, and information request mean the student should stop and verify.",
            "The page is safe because HTTPS appears in the address bar.",
            "The student should type fake information to test the page.",
            "The student should ignore the domain because the browser shows a lock icon.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a cautious defensive conclusion. HTTPS helps protect the connection, but it does not remove concerns about domain mismatch, pressure, or unnecessary information requests."
        />

        <ScenarioDecisionLab
          title="A browser warning appears before a login page"
          scenario="A fictional student clicks a link from a message and sees a browser warning that the connection may not be private. The page behind the warning appears to be a school login page."
          choices={[
            {
              label: "Choice A",
              response: "Click through the warning because the page looks like school.",
              outcome: "Risky. Browser warnings should not be bypassed casually, especially before a login page.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Stop and use a known official route or ask a trusted adult or school technology staff.",
              outcome: "Best choice. You avoid the uncertain page and move to a trusted verification path.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Send the link to classmates to see if they get the same warning.",
              outcome: "Risky. Sharing suspicious links can spread the problem.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B5.3 Defender Checklist"
          items={[
            "I can explain what HTTPS helps protect.",
            "I can explain what certificates help browsers verify.",
            "I can explain why the lock icon is not a complete trust guarantee.",
            "I can combine HTTPS, domain, context, form request, and warning clues.",
            "I know not to bypass browser or certificate warnings on real suspicious pages.",
          ]}
        />

        <MiniQuiz title="B5.3 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a trust signal checklist"
          prompt="Write a beginner-friendly checklist that explains how to review HTTPS, the lock icon, the domain, browser warnings, and requested information before trusting a page."
          tips={[
            "Make clear that HTTPS is important but not a guarantee of honesty.",
            "Use only fake domains and fake page examples.",
            "Include a safe action for browser warnings: stop and ask trusted help.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "HTTPS helps protect information while it moves between a browser and website.",
            "Certificates help browsers verify website identity for secure communication.",
            "A lock icon is a helpful clue, not a complete guarantee that a page is trustworthy.",
            "Browser and certificate warnings should be taken seriously, not bypassed casually.",
            "Safe web decisions combine connection clues with domain, context, requested information, and trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}