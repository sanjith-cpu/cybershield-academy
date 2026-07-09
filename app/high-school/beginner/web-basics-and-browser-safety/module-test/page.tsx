"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "What does a browser do in the basic web process?",
    choices: [
      "It helps a user request, receive, and display web content from websites and web services",
      "It guarantees that every website is safe",
      "It replaces passwords and MFA for every account",
      "It removes the need to check links, warnings, or source quality",
    ],
    answer: 0,
    explanation:
      "A browser is the app that helps users interact with the web. It can show warnings and security signals, but it cannot guarantee that everything online is trustworthy.",
  },
  {
    question: "Which statement best describes a website from a beginner cybersecurity view?",
    choices: [
      "A website is only an image saved on a computer",
      "A website is content and services delivered through web systems that users reach through a browser",
      "A website is always private because it opens in a browser",
      "A website is safe as long as it has bright colors and a professional logo",
    ],
    answer: 1,
    explanation:
      "Websites are delivered by web systems and displayed by browsers. Defenders think about the address, data being requested, warnings, trust signals, and user decisions.",
  },
  {
    question: "In a URL, which part most directly tells you the registered website name area to inspect carefully?",
    choices: ["Domain", "Screen brightness", "Mouse speed", "Battery percentage"],
    answer: 0,
    explanation:
      "The domain is a key clue when judging where a website actually goes. Students should inspect it carefully instead of relying only on page design or logos.",
  },
  {
    question: "Which URL is the safest-looking training example for a school learning site?",
    choices: [
      "https://learning.example/cyber-safety",
      "http://free-prize-login.example/random-download.exe",
      "https://school-login.example.evil-fake.test/urgent",
      "https://tiny.example/unknown?redirect=private-login",
    ],
    answer: 0,
    explanation:
      "The first example uses HTTPS and a simple, readable training domain/path. The others show warning signs like prize bait, confusing domain structure, executable downloads, or unclear redirects.",
  },
  {
    question: "What is a common mistake when reading a web address?",
    choices: [
      "Checking the main domain before entering information",
      "Assuming the first familiar word in a long URL proves the site is official",
      "Pausing when a browser warning appears",
      "Asking a trusted adult or teacher when unsure",
    ],
    answer: 1,
    explanation:
      "Attackers and scammers may place familiar words in confusing addresses. The safer habit is to inspect the actual domain and avoid entering private information when unsure.",
  },
  {
    question: "What does HTTPS mainly help protect?",
    choices: [
      "The connection between the browser and the website from casual reading or tampering in transit",
      "A guarantee that the website owner is honest",
      "A guarantee that every file on the page is safe to download",
      "The student's device from every possible problem",
    ],
    answer: 0,
    explanation:
      "HTTPS helps protect data in transit between the browser and site. It is important, but it does not automatically prove the page is honest or that every download is safe.",
  },
  {
    question: "What does a certificate help a browser verify?",
    choices: [
      "That the site has information needed to support an encrypted HTTPS connection for the named domain",
      "That the site has no scams anywhere",
      "That the site belongs to a student's school account",
      "That the user should ignore every warning",
    ],
    answer: 0,
    explanation:
      "Certificates support trust in the encrypted connection for a domain. They are a trust signal, not a full promise that the site content is safe or ethical.",
  },
  {
    question: "What should a student do when a browser shows a serious certificate or unsafe-site warning?",
    choices: [
      "Click through quickly so the warning disappears",
      "Stop, avoid entering private information, and ask a teacher, guardian, or school technology staff if needed",
      "Share the warning link with friends so they can test it",
      "Disable browser protections permanently",
    ],
    answer: 1,
    explanation:
      "Warnings should be treated carefully. Students should not bypass them, test suspicious pages, or disable protections. Trusted help is the safe next step.",
  },
  {
    question: "Which item is the best example of private information that should not be typed into a random web form?",
    choices: ["A school password", "A favorite color for a harmless class poll", "A public website title", "A general topic like cybersecurity"],
    answer: 0,
    explanation:
      "Passwords are private. Students should only enter login information on verified, trusted pages and should ask for help if anything feels unusual.",
  },
  {
    question: "What is a web form?",
    choices: [
      "An area on a page where users can enter or submit information",
      "A device that connects Wi-Fi cables",
      "A browser setting that removes all risk",
      "A file extension that proves a file is safe",
    ],
    answer: 0,
    explanation:
      "Forms collect input from users. Defenders think about what information is being requested, why it is needed, and whether the page is trusted.",
  },
  {
    question: "What are cookies often used for?",
    choices: [
      "Remembering website state, preferences, or session-related information",
      "Guaranteeing that every page is school-approved",
      "Replacing all browser warnings",
      "Making unsafe downloads safe automatically",
    ],
    answer: 0,
    explanation:
      "Cookies can help websites remember things like preferences or sessions. Students should understand that cookies can affect privacy and login state.",
  },
  {
    question: "What is a session in beginner web safety terms?",
    choices: [
      "A period where a website remembers that a user is interacting with it, often after login",
      "A permanent password printed on a page",
      "A router setting for public Wi-Fi only",
      "A guarantee that a site has no trackers",
    ],
    answer: 0,
    explanation:
      "Sessions let sites remember a user's current interaction, such as staying signed in. This is why signing out on shared devices matters.",
  },
  {
    question: "What is the safest habit after using a personal account on a shared or public device?",
    choices: [
      "Close the tab only and leave",
      "Save the password for convenience",
      "Sign out fully and avoid saving login information",
      "Send the session link to a friend",
    ],
    answer: 2,
    explanation:
      "On shared devices, signing out and avoiding saved passwords helps reduce the chance that another person can access the account later.",
  },
  {
    question: "Which download warning sign should make a student pause?",
    choices: [
      "A teacher-provided PDF from a known class page",
      "A file that promises free prizes and asks the student to disable protections",
      "A school worksheet opened from the official learning platform",
      "A document the teacher announced during class",
    ],
    answer: 1,
    explanation:
      "Prize bait and instructions to disable protections are strong warning signs. Students should avoid interacting and ask a trusted adult or school technology staff.",
  },
  {
    question: "What is a redirect?",
    choices: [
      "When a browser is sent from one web address to another",
      "When a password is automatically made stronger",
      "When a device updates its operating system",
      "When a folder changes color",
    ],
    answer: 0,
    explanation:
      "Redirects can be normal, but confusing or unexpected redirects are worth pausing on, especially before entering private information or downloading files.",
  },
  {
    question: "A site redirects several times and ends on a page asking for a school password. What is the safest response?",
    choices: [
      "Enter the password quickly before the page changes again",
      "Stop, do not enter the password, and verify through the official school route or ask trusted staff",
      "Try the password with one typo first",
      "Share the page with classmates so they can compare results",
    ],
    answer: 1,
    explanation:
      "Unexpected redirects before a login prompt are a warning sign. Students should not enter credentials and should verify using official routes or trusted staff.",
  },
  {
    question: "Which browser warning should not be ignored?",
    choices: [
      "A warning that the site may be unsafe or deceptive",
      "A reminder that a page has finished loading",
      "A notice that the browser is already open",
      "A bookmark label created by the user",
    ],
    answer: 0,
    explanation:
      "Unsafe-site and deceptive-site warnings are important safety signals. Students should pause instead of clicking through.",
  },
  {
    question: "What is the safest way to do web research for school?",
    choices: [
      "Use reliable sources, compare information, check dates and authors when available, and keep source notes",
      "Use the first result only because search ranking always proves truth",
      "Copy information without recording where it came from",
      "Use random pop-up pages if they look exciting",
    ],
    answer: 0,
    explanation:
      "Safe research includes source evaluation and documentation. Students should check reliability, compare claims, and keep citation notes.",
  },
  {
    question: "Why should students keep a citation trail during research?",
    choices: [
      "So they can explain where information came from and avoid losing useful sources",
      "So they can hide sources from teachers",
      "So they never need to read the source again",
      "So every source becomes automatically correct",
    ],
    answer: 0,
    explanation:
      "A citation trail supports academic honesty, clear writing, and source review. It does not make every source correct, but it helps students verify and explain their work.",
  },
  {
    question: "Which source clue should make a student slow down and verify more carefully?",
    choices: [
      "The article gives an author, date, and evidence links",
      "The page uses extreme claims, no clear source, and urgent pressure to click",
      "The source is assigned by a teacher",
      "The page is a known library or school database",
    ],
    answer: 1,
    explanation:
      "Extreme claims, missing source information, and urgency are reasons to verify carefully and avoid unsafe clicks.",
  },
  {
    question: "In a fake web safety analysis, which clue is most concerning?",
    choices: [
      "The site has a simple privacy policy link",
      "The page asks for a password after an unexpected redirect from a prize message",
      "The website has normal classroom instructions",
      "The page opens over HTTPS and matches the official class domain",
    ],
    answer: 1,
    explanation:
      "Unexpected redirects combined with password requests and prize messages are concerning. Students should not enter credentials and should report through trusted channels.",
  },
  {
    question: "What should students avoid doing with suspicious links?",
    choices: [
      "Opening, testing, sharing, or trying to investigate them alone",
      "Reporting them to a teacher or school technology staff",
      "Saving a screenshot if a teacher allows it",
      "Closing the page without entering information",
    ],
    answer: 0,
    explanation:
      "Students should not test suspicious links or spread them. Safe reporting uses trusted adults and school-approved processes.",
  },
  {
    question: "Which answer best explains why a professional-looking page can still be unsafe?",
    choices: [
      "Design can be copied, so defenders need to check address clues, requests, warnings, and context",
      "Professional pages are always fake",
      "A logo proves ownership",
      "Colors are stronger evidence than the URL",
    ],
    answer: 0,
    explanation:
      "Visual design is not enough. Safer analysis checks the web address, context, data requests, browser warnings, and official access paths.",
  },
  {
    question: "A classmate sends a link saying, 'Log in here to avoid losing your school account today.' What is the best response?",
    choices: [
      "Use the link immediately because the message sounds urgent",
      "Do not use the link; verify through the official school website or ask a teacher or school technology staff",
      "Forward the link to the whole class",
      "Try several passwords until one works",
    ],
    answer: 1,
    explanation:
      "Urgent account messages can be manipulative. Students should avoid the link and verify through official channels or trusted staff.",
  },
  {
    question: "What is the main defensive goal of this module?",
    choices: [
      "To understand browsers, websites, URLs, HTTPS, forms, cookies, downloads, warnings, and research habits so students can make safer choices",
      "To teach students to bypass browser warnings",
      "To collect real passwords for practice",
      "To test suspicious sites on real devices",
    ],
    answer: 0,
    explanation:
      "The module is defensive and school-safe. Students learn how web concepts work and how to make safer decisions using fake examples and trusted reporting.",
  },
  {
    question: "What should a student do if a web situation feels confusing, risky, or unsafe?",
    choices: [
      "Handle it alone and keep clicking until it works",
      "Ask a trusted adult, teacher, guardian, counselor, or school technology staff member for help",
      "Post the link publicly for opinions",
      "Turn off browser security settings",
    ],
    answer: 1,
    explanation:
      "Students should not handle confusing or risky web safety problems alone. Trusted adults and authorized school staff can help respond safely.",
  },
];

export default function BeginnerModuleFiveTestPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(selectedAnswers).length;

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);
  }, [selectedAnswers]);

  const percent = Math.round((score / questions.length) * 100);

  const feedback =
    percent >= 90
      ? "Excellent work. You understand beginner web safety concepts and can make careful browser decisions."
      : percent >= 75
        ? "Good work. Review any missed explanations, then continue to Module B6."
        : percent >= 60
          ? "You are close. Review the B5 lessons and retake this test before moving on."
          : "Pause here and review Web Basics and Browser Safety before continuing.";

  function selectAnswer(questionIndex: number, choiceIndex: number) {
    if (submitted) return;
    setSelectedAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }));
  }

  function submitTest() {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetTest() {
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/high-school/beginner/web-basics-and-browser-safety/web-safety-analysis-lab"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href="/high-school/beginner/web-basics-and-browser-safety"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                High School Beginner • Module B5 Test
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Web Basics and Browser Safety Module Test
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Answer all 25 questions first. Your score, correct answers, and explanations stay hidden until you submit.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Test Status</p>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>Answered</span>
                    <span>
                      {answeredCount}/{questions.length}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all"
                      style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5">
                    <p className="text-3xl font-black text-emerald-200">
                      {score}/{questions.length} • {percent}%
                    </p>
                    <p className="mt-2 text-sm leading-6 text-emerald-100">{feedback}</p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5">
                    <p className="font-bold text-yellow-200">Answers hidden</p>
                    <p className="mt-2 text-sm leading-6 text-yellow-100/90">
                      Choose your answers before submitting. Do not refresh the page until you finish.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Covers</p>
            <p className="mt-2 text-slate-300">
              Browsers, websites, URLs, domains, HTTPS, certificates, forms, cookies, sessions, downloads, redirects, warnings, and research habits.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Rule</p>
            <p className="mt-2 text-slate-300">
              Use fake examples only. Do not open, test, share, or investigate suspicious real links.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Goal</p>
            <p className="mt-2 text-slate-300">
              Show that you can inspect beginner web evidence and choose safe browser decisions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, questionIndex) => {
            const selected = selectedAnswers[questionIndex];
            const isCorrect = selected === question.answer;

            return (
              <section key={question.question} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-300">Question {questionIndex + 1}</p>
                    <h2 className="mt-2 text-xl font-bold text-white">{question.question}</h2>
                  </div>
                  {submitted && (
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        isCorrect
                          ? "border border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
                          : "border border-red-400/50 bg-red-400/10 text-red-200"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Review"}
                    </span>
                  )}
                </div>

                <div className="mt-5 grid gap-3">
                  {question.choices.map((choice, choiceIndex) => {
                    const isSelected = selected === choiceIndex;
                    const isAnswer = question.answer === choiceIndex;

                    const submittedStyle = submitted
                      ? isAnswer
                        ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-100"
                        : isSelected
                          ? "border-red-400/60 bg-red-400/10 text-red-100"
                          : "border-slate-800 bg-slate-950/60 text-slate-300"
                      : isSelected
                        ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-cyan-400/70 hover:text-cyan-100";

                    return (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => selectAnswer(questionIndex, choiceIndex)}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${submittedStyle}`}
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                          {isSelected ? "•" : ""}
                        </span>
                        <span>{choice}</span>
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                    <p className="font-bold text-cyan-200">Explanation</p>
                    <p className="mt-2 leading-7 text-slate-200">{question.explanation}</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          {!submitted ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Ready to submit?</h2>
                <p className="mt-2 text-slate-300">
                  You have answered {answeredCount} out of {questions.length} questions.
                </p>
              </div>
              <button
                type="button"
                onClick={submitTest}
                disabled={answeredCount !== questions.length}
                className="rounded-full bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                Submit Module Test
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Module Test Complete</h2>
                <p className="mt-2 text-slate-300">
                  Final score: {score}/{questions.length} ({percent}%). {feedback}
                </p>
              </div>
              <button
                type="button"
                onClick={resetTest}
                className="rounded-full border border-slate-700 px-6 py-3 font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Retake Test
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/high-school/beginner/web-basics-and-browser-safety/web-safety-analysis-lab"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Previous Lesson
          </Link>
          <Link
            href="/high-school/beginner/web-basics-and-browser-safety"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner/digital-identity-and-privacy"
            className="rounded-full bg-cyan-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Next Module
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}