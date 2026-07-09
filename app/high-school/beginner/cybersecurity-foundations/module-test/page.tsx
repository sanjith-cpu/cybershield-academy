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
    question: "Which statement best describes what cybersecurity protects?",
    choices: [
      "Only computers and phones",
      "People, data, devices, accounts, systems, and trust",
      "Only passwords",
      "Only businesses, not students",
    ],
    answer: 1,
    explanation:
      "Cybersecurity protects more than devices. It helps protect people, information, accounts, systems, services, and trust.",
  },
  {
    question: "A school portal should show grades only to the correct student and approved staff. Which CIA goal is this mainly about?",
    choices: ["Availability", "Confidentiality", "Speed", "Convenience"],
    answer: 1,
    explanation:
      "Confidentiality means information is only available to the people who are allowed to see it.",
  },
  {
    question: "A student changes a shared project file by accident, and the group needs to know which version is correct. Which CIA goal was affected?",
    choices: ["Integrity", "Confidentiality", "Advertising", "Latency"],
    answer: 0,
    explanation:
      "Integrity is about keeping information accurate, complete, and trustworthy.",
  },
  {
    question: "A learning website is down during class, so students cannot access the lesson. Which CIA goal is affected?",
    choices: ["Availability", "Encryption", "Confidentiality", "Metadata"],
    answer: 0,
    explanation:
      "Availability means systems and data are accessible when authorized users need them.",
  },
  {
    question: "Which option correctly matches the terms threat, vulnerability, and risk?",
    choices: [
      "Threat = weakness, vulnerability = possible harm, risk = attacker only",
      "Threat = possible cause of harm, vulnerability = weakness, risk = chance and impact of harm",
      "Threat = protection, vulnerability = policy, risk = password",
      "Threat = log file, vulnerability = backup, risk = firewall",
    ],
    answer: 1,
    explanation:
      "A threat can cause harm, a vulnerability is a weakness, and risk combines likelihood and impact.",
  },
  {
    question: "Which situation is the best example of a vulnerability?",
    choices: [
      "A student receives a fake message",
      "A laptop has not installed security updates for months",
      "A teacher reports a suspicious email",
      "A website uses clear privacy settings",
    ],
    answer: 1,
    explanation:
      "Missing updates can create weaknesses that defenders should fix. The fake message is closer to a threat.",
  },
  {
    question: "A defender sees one failed login attempt at 8:01 AM. What is the safest first reaction?",
    choices: [
      "Assume the account is hacked immediately",
      "Delete the account",
      "Collect more context before deciding",
      "Ignore all login activity forever",
    ],
    answer: 2,
    explanation:
      "Defenders avoid jumping to conclusions. They look for context, patterns, and supporting evidence.",
  },
  {
    question: "Which phrase best describes defensive thinking?",
    choices: [
      "Act fast without evidence",
      "Use evidence, reduce risk, and protect people safely",
      "Blame the user first",
      "Try suspicious links to see what happens",
    ],
    answer: 1,
    explanation:
      "Defensive thinking is calm, evidence-based, ethical, and focused on reducing harm.",
  },
  {
    question: "Which is the safest response to a suspicious message asking for login information?",
    choices: [
      "Reply and ask if it is real",
      "Click the link quickly before it expires",
      "Report it through the trusted school or organization process",
      "Forward it to every friend",
    ],
    answer: 2,
    explanation:
      "Students should avoid engaging with suspicious messages and report them through trusted channels.",
  },
  {
    question: "What is defense-in-depth?",
    choices: [
      "Using only one strong password for everything",
      "Layering multiple protections so one failure does not ruin everything",
      "Turning off security tools to improve speed",
      "Keeping security rules secret from everyone",
    ],
    answer: 1,
    explanation:
      "Defense-in-depth uses layers such as training, MFA, updates, backups, monitoring, and policies.",
  },
  {
    question: "Which is an example of a preventive control?",
    choices: [
      "A login policy requiring MFA",
      "A report written after an incident",
      "A log review done after suspicious activity",
      "A lesson learned meeting",
    ],
    answer: 0,
    explanation:
      "Preventive controls are designed to reduce the chance of a problem before it happens.",
  },
  {
    question: "Which is an example of a detective control?",
    choices: [
      "A locked door",
      "A system alert that flags unusual login patterns",
      "A backup restore after data loss",
      "A classroom rule poster",
    ],
    answer: 1,
    explanation:
      "Detective controls help identify possible problems, such as alerts, logs, and monitoring.",
  },
  {
    question: "Which is an example of a corrective control?",
    choices: [
      "Restoring files from a clean backup after data loss",
      "Using MFA before any problem happens",
      "Warning students not to share passwords",
      "Blocking a website category by policy",
    ],
    answer: 0,
    explanation:
      "Corrective controls help recover or reduce damage after something has gone wrong.",
  },
  {
    question: "In a safe case study, what should students do when reviewing what went wrong?",
    choices: [
      "Look for evidence, causes, missed controls, and safer improvements",
      "Search for real victims online",
      "Try to recreate the harmful activity",
      "Guess who deserves blame without proof",
    ],
    answer: 0,
    explanation:
      "Safe case studies focus on learning, evidence, controls, and improvement without using real targets or harmful steps.",
  },
  {
    question: "A fake alert shows many failed logins followed by a successful login from a new location. What should a beginner defender do first?",
    choices: [
      "Collect more fake evidence and escalate through the correct process",
      "Post the username publicly",
      "Try to log in as the user",
      "Delete the logs",
    ],
    answer: 0,
    explanation:
      "The safest defensive response is to preserve evidence, document the concern, and escalate to trusted staff or the proper team.",
  },
  {
    question: "Which item is the best example of an asset in cybersecurity?",
    choices: [
      "A student's account and stored assignment files",
      "A random rumor",
      "A guess about a password",
      "A confusing pop-up with no context",
    ],
    answer: 0,
    explanation:
      "Assets are things worth protecting, such as data, accounts, devices, systems, and services.",
  },
  {
    question: "Which action best supports integrity?",
    choices: [
      "Keeping accurate version history for shared files",
      "Sharing passwords with teammates",
      "Disabling file permissions",
      "Ignoring incorrect records",
    ],
    answer: 0,
    explanation:
      "Version history and careful editing help keep information accurate and trustworthy.",
  },
  {
    question: "Which action best supports confidentiality?",
    choices: [
      "Using access permissions so only approved users can view a file",
      "Posting private details in a public chat",
      "Leaving a laptop unlocked in a hallway",
      "Sending account codes to a stranger",
    ],
    answer: 0,
    explanation:
      "Access permissions are one way to help keep private information visible only to authorized people.",
  },
  {
    question: "Which action best supports availability?",
    choices: [
      "Planning backups and recovery steps before a problem",
      "Deleting all copies of important files",
      "Saving work only on one device with no backup",
      "Ignoring service outages",
    ],
    answer: 0,
    explanation:
      "Backups and recovery planning help keep data and services available when something goes wrong.",
  },
  {
    question: "A student notices a school device behaving strangely. What should they do?",
    choices: [
      "Try random fixes and download unknown tools",
      "Report it to a trusted adult, teacher, or school technology staff",
      "Hide it so they do not get in trouble",
      "Share screenshots with everyone online",
    ],
    answer: 1,
    explanation:
      "Students should not handle serious security issues alone. They should ask trusted adults or school technology staff for help.",
  },
  {
    question: "Which option is a common mistake in cybersecurity reasoning?",
    choices: [
      "Documenting evidence clearly",
      "Asking for help when something feels unsafe",
      "Assuming one clue proves the whole story",
      "Checking whether a control reduced risk",
    ],
    answer: 2,
    explanation:
      "One clue is not enough. Defenders look for patterns and supporting evidence before making a conclusion.",
  },
  {
    question: "Which is the best example of reducing risk without eliminating it completely?",
    choices: [
      "Using MFA, updates, and backups even though no system is perfect",
      "Pretending risks do not exist",
      "Turning off every account forever",
      "Sharing passwords so nobody forgets them",
    ],
    answer: 0,
    explanation:
      "Security reduces risk with practical layers. It rarely removes every possible risk completely.",
  },
  {
    question: "Which evidence would be most useful in a beginner fake incident summary?",
    choices: [
      "Clear timeline, affected asset, observed clues, and recommended next step",
      "Insults about the person who made a mistake",
      "Private student information copied into the report",
      "A guess with no supporting details",
    ],
    answer: 0,
    explanation:
      "Good defensive writing is clear, respectful, evidence-based, and privacy-aware.",
  },
  {
    question: "Which statement is safest and most accurate?",
    choices: [
      "Cybersecurity is only about stopping hackers",
      "Cybersecurity is about protecting people, systems, data, and trust through risk-aware choices",
      "Cybersecurity means students should investigate real suspicious websites alone",
      "Cybersecurity works best with one secret control and no training",
    ],
    answer: 1,
    explanation:
      "Cybersecurity is broader than stopping attacks. It protects people, systems, data, and trust using ethical, defensive choices.",
  },
  {
    question: "What should a student portfolio prompt in this module help students practice?",
    choices: [
      "Writing safe, clear explanations of cybersecurity concepts and defensive decisions",
      "Collecting real passwords for practice",
      "Testing real suspicious links",
      "Naming classmates in fake incidents",
    ],
    answer: 0,
    explanation:
      "Portfolio prompts build communication skills using fake data, safe reasoning, and defensive explanations.",
  },
];

export default function BeginnerModuleOneTestPage() {
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
      ? "Excellent work. You are ready to move into Module B2 with strong foundations."
      : percent >= 75
        ? "Good work. Review the missed explanations, then continue to Module B2."
        : percent >= 60
          ? "You are close. Review the module lessons and retake this test before moving on."
          : "Pause here and review the Cybersecurity Foundations lessons before continuing.";

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
              href="/high-school/beginner/cybersecurity-foundations/foundations-review-lab"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href="/high-school/beginner/cybersecurity-foundations"
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
                High School Beginner • Module B1 Test
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Cybersecurity Foundations Module Test
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
            <p className="mt-2 text-slate-300">CIA triad, risk, controls, defensive thinking, and safe case study reasoning.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Rule</p>
            <p className="mt-2 text-slate-300">Use only the information from the module. No real systems, links, accounts, or private data.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Goal</p>
            <p className="mt-2 text-slate-300">Show that you can think like a safe beginner defender.</p>
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
            href="/high-school/beginner/cybersecurity-foundations/foundations-review-lab"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Previous Lesson
          </Link>
          <Link
            href="/high-school/beginner/cybersecurity-foundations"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner/ethics-and-responsible-learning"
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