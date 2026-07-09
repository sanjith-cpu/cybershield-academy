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
const previousLesson = `${modulePath}/https-certificates-and-trust-signals`;
const nextLesson = `${modulePath}/downloads-redirects-and-browser-warnings`;

const vocab = [
  ["Web form", "A page area where users type or choose information, such as a search box, sign-in form, survey, or checkout form."],
  ["Form field", "One specific part of a form, such as name, email, password, phone number, or file upload."],
  ["Cookie", "A small piece of website data stored by the browser to remember limited information, such as preferences or sign-in state."],
  ["Session", "A temporary interaction between a browser and a website, often used so a site remembers that a user is signed in."],
  ["Consent banner", "A notice that may ask users to manage cookie or privacy choices before using a site."],
  ["Autofill", "A browser feature that can fill saved information into forms, which is convenient but should be used carefully on shared devices."],
];

const mistakes = [
  "Typing private information into a form before checking the domain, page purpose, and request context.",
  "Assuming every cookie is dangerous or every cookie is harmless.",
  "Staying signed in on shared or public devices.",
  "Letting autofill place private information into a page without reviewing the form first.",
  "Ignoring why a website is asking for a certain field.",
  "Using a real suspicious form to test whether it is safe.",
];

const formFields = [
  {
    field: "Name",
    review: "Usually normal for school forms, but still check that the page is expected and official.",
    status: "Context needed",
  },
  {
    field: "School email",
    review: "May be normal for class tools, but students should confirm the domain and purpose first.",
    status: "Verify first",
  },
  {
    field: "Password",
    review: "Only enter on trusted sign-in pages reached through a known official route.",
    status: "High caution",
  },
  {
    field: "Home address",
    review: "Sensitive personal information. A simple class quiz should not need this.",
    status: "Question the request",
  },
];

const cookieCards = [
  {
    title: "Necessary cookies",
    detail: "Help a site function, such as remembering a secure sign-in session or basic preferences.",
    action: "Understand their purpose and sign out on shared devices.",
    tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  },
  {
    title: "Preference cookies",
    detail: "Remember choices like language, theme, or layout preferences.",
    action: "Usually lower risk, but still part of your browser data trail.",
    tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  },
  {
    title: "Analytics or advertising cookies",
    detail: "May measure behavior or support advertising and tracking across visits.",
    action: "Use privacy settings and cookie choices when available.",
    tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-50",
  },
];

const quizQuestions = [
  {
    question: "What should a student check before typing private information into a web form?",
    choices: [
      "The domain, page purpose, requested fields, and whether the request makes sense.",
      "Only whether the page has a colorful design.",
      "Only whether the form has many boxes.",
      "Whether a friend already clicked it.",
    ],
    answer: 0,
    explanation: "Safe form review combines domain, purpose, context, and the type of information being requested.",
  },
  {
    question: "What is a session in beginner web safety terms?",
    choices: [
      "A temporary interaction that helps a site remember a user or activity while browsing.",
      "A permanent guarantee that a website is safe.",
      "A type of computer virus.",
      "A file extension used for images.",
    ],
    answer: 0,
    explanation: "A session helps websites remember state, such as a signed-in user, during a browsing period.",
  },
  {
    question: "Which habit is safest on a shared or public device?",
    choices: [
      "Sign out, avoid saving passwords, and clear private browsing data if instructed by school rules.",
      "Stay signed in so the next person can use the device faster.",
      "Save passwords in the browser for convenience.",
      "Let autofill complete every form automatically.",
    ],
    answer: 0,
    explanation: "Shared devices require extra care because sessions, autofill, and saved sign-ins can expose accounts or private information.",
  },
  {
    question: "What is the safest way to treat cookies?",
    choices: [
      "Understand that cookies have different purposes and manage privacy choices thoughtfully.",
      "Assume every cookie means the website is attacking you.",
      "Assume cookies are always harmless and never affect privacy.",
      "Delete school-required settings without asking anyone.",
    ],
    answer: 0,
    explanation: "Cookies can support basic site function, preferences, analytics, and advertising. The safe approach is thoughtful review and privacy setting management.",
  },
  {
    question: "A fake scholarship form asks for school email, password, home address, and urgent submission. What is the best response?",
    choices: [
      "Stop, do not submit, and verify through a trusted school or adult source.",
      "Submit quickly because scholarships are important.",
      "Type fake information to test the page.",
      "Send the form to classmates to see what they think.",
    ],
    answer: 0,
    explanation: "Unexpected sensitive fields and urgency are warning signs. Students should not test real suspicious forms or spread them.",
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
          Previous: B5.3 HTTPS, Certificates, and Trust Signals
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
          Next: B5.5 Downloads, Redirects, and Browser Warnings
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

function BrowserSessionFlow() {
  const steps = [
    {
      title: "Open the page",
      detail: "The browser loads a fake training website and shows a form or sign-in page.",
    },
    {
      title: "Submit information",
      detail: "The user enters information only after checking the domain, purpose, and fields.",
    },
    {
      title: "Session begins",
      detail: "The website may remember the browser during the visit so the user does not sign in again on every page.",
    },
    {
      title: "Session ends safely",
      detail: "The user signs out, especially on shared devices, and avoids saving private information where others can access it.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">How forms, cookies, and sessions connect</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Forms collect information, cookies can remember limited browser data, and sessions help websites keep track of a
        user during a visit. The safety goal is to understand what is being remembered and avoid exposing accounts or private data.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
            {index < steps.length - 1 && (
              <div className="mt-4 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-center text-xs font-bold text-cyan-200">
                next
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function FakeFormInspector() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Form Inspector</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Review every field before entering information</h2>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Fake Training Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="border-b border-slate-800 bg-slate-900 px-4 py-3">
          <p className="font-mono text-sm text-cyan-100">Form review: https://clubs.learning.example/signup</p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
          {formFields.map((item) => (
            <article key={item.field} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Form field</p>
              <p className="mt-3 rounded-xl border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-cyan-100">
                {item.field}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.review}</p>
              <p className="mt-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-center text-xs font-bold text-yellow-100">
                {item.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CookiePurposeBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Cookie Purpose Board</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Cookies are not all the same</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A beginner defender does not panic about cookies or ignore them. The safer habit is to understand the purpose,
        use privacy choices, and avoid leaving sessions open on devices other people can use.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {cookieCards.map((card) => (
          <article key={card.title} className={`rounded-2xl border p-5 ${card.tone}`}>
            <h3 className="text-xl font-black">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 opacity-90">{card.detail}</p>
            <div className="mt-4 rounded-xl border border-current/30 bg-slate-950/50 p-3 text-sm leading-6">
              <span className="font-black">Safe habit:</span> {card.action}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnicalBreakdown() {
  const concepts = [
    {
      title: "Forms collect data",
      detail: "Before submitting a form, students should ask whether the field is needed, expected, and on the correct site.",
    },
    {
      title: "Cookies remember browser state",
      detail: "Cookies can support login sessions, preferences, analytics, and advertising. Purpose matters.",
    },
    {
      title: "Sessions keep activity connected",
      detail: "A session may let a website remember that a user is signed in. Signing out matters on shared devices.",
    },
    {
      title: "Autofill needs attention",
      detail: "Autofill is convenient, but students should review where information is being placed before submitting.",
    },
  ];

  return (
    <SectionCard eyebrow="Technical Breakdown" title="How defenders think about web input and browser memory">
      <div className="grid gap-4 md:grid-cols-2">
        {concepts.map((concept) => (
          <div key={concept.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-200">{concept.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{concept.detail}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function SafeLab() {
  return (
    <SectionCard eyebrow="Safe Defensive Lab" title="Practice reviewing fake forms and browser memory clues">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 1</p>
          <h3 className="mt-2 text-xl font-black text-white">Classify the fields</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Mark each fake form field as normal, context-needed, sensitive, or unnecessary for the stated purpose.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 2</p>
          <h3 className="mt-2 text-xl font-black text-white">Review the session risk</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Decide whether staying signed in is safe based on whether the device is personal, shared, school-owned, or public.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Task 3</p>
          <h3 className="mt-2 text-xl font-black text-white">Choose a safe response</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            If a real form asks for unexpected private information, stop and verify through a trusted route.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

export default function FormsCookiesSessionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <TopNav />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                B5.4 • Web Basics and Browser Safety
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Forms, Cookies, and Sessions
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how websites collect information, how browsers remember certain details, and how to make safer
                decisions before submitting forms or staying signed in.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders care about what users submit and what browsers remember.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Many web safety problems start with a simple form or a browser that remembers too much on the wrong device.
                Good defenders teach people to slow down, inspect the request, and protect sign-in sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:px-8">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B5: Web Basics and Browser Safety"
          lessonTitle="B5.4: Forms, Cookies, and Sessions"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before you start this forms and sessions lesson"
          items={[
            "I understand that web forms can request private information.",
            "I will not type real private information into fake practice examples.",
            "I know that shared devices need extra sign-out and autofill caution.",
            "I am ready to review fake examples using domain, purpose, and field clues.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can:">
            <ul className="space-y-3 leading-7">
              <li>• Explain how forms collect information from users.</li>
              <li>• Describe cookies and sessions at a beginner web safety level.</li>
              <li>• Identify risky form requests using purpose, context, and field clues.</li>
              <li>• Choose safer habits for shared devices, sign-ins, autofill, and cookie choices.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="Small browser choices can affect account and privacy safety.">
            <p className="leading-7">
              Forms, cookies, and sessions are normal parts of the web, but they also affect privacy and account safety.
              A student who understands them can avoid oversharing, leaving accounts open, or trusting an unexpected form too quickly.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="Forms ask for information; cookies and sessions help websites remember state.">
          <p className="leading-7">
            A web form is where a user enters or chooses information. Cookies can store small pieces of browser data, and
            sessions help websites remember activity during a visit. None of these are automatically good or bad. Safer
            decisions depend on purpose, context, device type, and whether the requested information makes sense.
          </p>
        </SectionCard>

        <BrowserSessionFlow />
        <FakeFormInspector />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard eyebrow="Key Vocabulary" title="Words that make forms and sessions easier to understand">
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

        <CookiePurposeBoard />

        <section className="grid gap-6 lg:grid-cols-2">
          <FakeDashboardCard
            title="Fake Form Safety Dashboard"
            subtitle="A fictional browser safety panel showing field review and session reminders."
            metrics={[
              { label: "Sensitive fields", value: "2", note: "Password and home address need careful review." },
              { label: "Autofill risk", value: "Medium", note: "Autofill should be checked before submission." },
              { label: "Shared device reminder", value: "On", note: "Sign out and avoid saved passwords." },
            ]}
          />

          <FakeAlertCard
            title="Unexpected Form Requests Extra Personal Data"
            severity="Medium"
            time="2:26 PM"
            source="Fake Web Safety Queue"
            details="A fictional club signup page asks for name, school email, password, home address, and urgent confirmation. The purpose does not clearly justify every field."
            recommendation="Do not submit unexpected private information. Verify the form through a trusted school route or ask a teacher, guardian, or school technology staff."
          />
        </section>

        <FakeLogPanel
          title="Fake Browser Memory Review Notes"
          logs={[
            "14:24:02 CHECK   fake form loaded from clubs.learning.example",
            "14:24:19 REVIEW  fields requested: name, email, password, home address",
            "14:24:44 CHECK   device type: shared classroom laptop",
            "14:25:10 REVIEW  autofill suggestion appeared for saved personal details",
            "14:25:31 RESULT  form needs verification before any submission",
            "14:25:55 ACTION  do not save password; sign out after using shared device",
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
          title="What does the fake form evidence support?"
          evidence={[
            "The fictional form is for a school club signup.",
            "The form asks for a password and home address, even though the purpose is club interest.",
            "The page appears on a shared classroom laptop.",
            "Autofill suggests private information before the student has verified the page.",
          ]}
          question="Which conclusion is safest and most accurate?"
          options={[
            "The student should pause, avoid submitting private fields, and verify the form through a trusted school source.",
            "The form is safe because it looks professional.",
            "The student should let autofill complete every field to save time.",
            "The student should stay signed in so the next student can use the form faster.",
          ]}
          bestAnswer={0}
          explanation="The evidence shows unnecessary sensitive fields, a shared device, and autofill risk. The safest decision is to stop and verify before submitting."
        />

        <ScenarioDecisionLab
          title="A shared classroom laptop remembers a login"
          scenario="A fictional student opens a school tool on a shared classroom laptop and notices another student's account is still signed in. The page also offers to save a new password."
          choices={[
            {
              label: "Choice A",
              response: "Use the open account because it is already signed in.",
              outcome: "Risky and inappropriate. Students should not use someone else's signed-in account.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Stop, tell the teacher or school technology staff, and avoid saving passwords on the shared device.",
              outcome: "Best choice. This protects the other student and prevents the same issue from happening again.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Take a photo of the open account and send it to classmates as proof.",
              outcome: "Risky. Do not spread someone else's account or private information.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B5.4 Defender Checklist"
          items={[
            "I can explain what a web form does.",
            "I can explain cookies and sessions at a beginner level.",
            "I can identify when a form field does not match the page purpose.",
            "I can explain why shared devices need sign-out and saved-password caution.",
            "I know to ask trusted help before submitting unexpected private information.",
          ]}
        />

        <MiniQuiz title="B5.4 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a safe form review checklist"
          prompt="Write a one-page checklist that teaches another student how to review a web form before submitting information. Include domain, purpose, requested fields, cookies or sessions, autofill, and shared-device safety."
          tips={[
            "Use fake examples only, such as learning.example or schoolclub.example.",
            "Explain why a password or home address is sensitive.",
            "Include a safe action: stop and ask trusted help when a form feels wrong.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Forms collect information, so every requested field deserves a quick safety review.",
            "Cookies and sessions help websites remember limited browser information and activity state.",
            "Autofill is convenient, but it can place private information into the wrong form if students are not careful.",
            "Shared devices require extra caution: do not save passwords, do not use someone else's session, and sign out.",
            "The safest response to unexpected private information requests is to stop and verify through trusted help.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}