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
    question: "Why does permission matter in cybersecurity learning?",
    choices: [
      "Because permission separates safe learning from unauthorized activity",
      "Because permission only matters after something breaks",
      "Because students can test any system if they are curious",
      "Because permission is only needed for adults, not students",
    ],
    answer: 0,
    explanation:
      "Permission defines the boundary between ethical, approved learning and activity that could harm people, systems, privacy, or trust.",
  },
  {
    question: "Which situation is the safest example of authorized cybersecurity practice?",
    choices: [
      "Trying random passwords on a classmate's account",
      "Using a fake training scenario provided by the lesson with fake accounts and fake data",
      "Testing a real school website without being asked",
      "Opening suspicious files to see what happens",
    ],
    answer: 1,
    explanation:
      "Safe practice uses approved training environments, fake data, and clear boundaries. Real accounts and real systems should not be tested without permission.",
  },
  {
    question: "A student finds a possible issue on a school website. What is the safest first step?",
    choices: [
      "Tell friends to test it too",
      "Post the issue online with screenshots",
      "Stop testing and report the concern to a trusted adult, teacher, or school technology staff",
      "Keep exploring until they understand the issue fully",
    ],
    answer: 2,
    explanation:
      "Students should not investigate real systems on their own. The safest action is to stop and report through trusted school channels.",
  },
  {
    question: "Which statement best describes legal vs illegal cyber activity for students?",
    choices: [
      "Legal activity is anything that feels educational",
      "Illegal activity can include unauthorized access, privacy invasion, credential misuse, or damaging systems",
      "Illegal activity only matters if money is stolen",
      "Legal activity means using any tool found online",
    ],
    answer: 1,
    explanation:
      "Cyber activity can become illegal or harmful when it is unauthorized, invades privacy, misuses accounts, disrupts systems, or causes damage.",
  },
  {
    question: "Which action is clearly not acceptable in a school-safe cybersecurity course?",
    choices: [
      "Analyzing a fake phishing message made for training",
      "Writing a reflection about responsible reporting",
      "Trying to access another student's account without permission",
      "Creating a fake incident timeline from lesson data",
    ],
    answer: 2,
    explanation:
      "Trying to access another person's account without permission is not ethical or school-safe, even if the student says they are practicing.",
  },
  {
    question: "What is an Acceptable Use Policy usually meant to explain?",
    choices: [
      "How students are allowed to use school technology and what behavior is not allowed",
      "How to avoid all consequences online",
      "How to keep school technology rules secret",
      "How to test real systems without permission",
    ],
    answer: 0,
    explanation:
      "An Acceptable Use Policy explains expected behavior, boundaries, responsibilities, and consequences for using school technology.",
  },
  {
    question: "Which choice best follows school technology rules?",
    choices: [
      "Sharing a device login because a friend forgot theirs",
      "Using school devices only for approved work and reporting suspicious issues safely",
      "Changing settings to bypass classroom restrictions",
      "Installing unknown tools because they look useful",
    ],
    answer: 1,
    explanation:
      "School-safe use means following approved purposes, respecting boundaries, protecting accounts, and reporting concerns through trusted channels.",
  },
  {
    question: "What is the main difference between a safe lab and a real system?",
    choices: [
      "A safe lab has approved fake data and boundaries; a real system affects real people, accounts, and services",
      "A safe lab is always harder than a real system",
      "A real system is okay to test if nobody notices",
      "There is no difference if the student is careful",
    ],
    answer: 0,
    explanation:
      "Safe labs are designed for learning with fake examples. Real systems can involve privacy, law, school rules, and real harm.",
  },
  {
    question: "A lesson gives students a fake login alert to analyze. What should students do?",
    choices: [
      "Use the fake evidence to practice defensive reasoning only",
      "Search for the fake username online",
      "Try to recreate the alert on a real account",
      "Ask classmates for their real login history",
    ],
    answer: 0,
    explanation:
      "The purpose of fake evidence is to practice safe analysis without involving real people, real accounts, or private data.",
  },
  {
    question: "Which is the best example of responsible reporting?",
    choices: [
      "Documenting the concern briefly, avoiding extra testing, and reporting it to the correct trusted person",
      "Proving the issue by trying it many times",
      "Posting details publicly so people know you found it",
      "Keeping the issue secret forever",
    ],
    answer: 0,
    explanation:
      "Responsible reporting means minimizing harm, avoiding extra unauthorized testing, documenting only what is needed, and telling the correct trusted person or team.",
  },
  {
    question: "Why should students avoid sharing detailed security issues publicly?",
    choices: [
      "Because public details can create risk, expose private information, or encourage misuse before the issue is fixed",
      "Because security issues are never real",
      "Because only adults can understand screenshots",
      "Because public posts always solve problems faster",
    ],
    answer: 0,
    explanation:
      "Public details can make a problem worse. Safer reporting protects people while the right staff review and fix the concern.",
  },
  {
    question: "Which detail belongs in a safe report about a concern?",
    choices: [
      "A calm description of what was noticed and where it was noticed",
      "Private passwords copied into the report",
      "A list of classmates to blame",
      "Instructions for others to repeat the issue",
    ],
    answer: 0,
    explanation:
      "A safe report should be calm, limited, privacy-aware, and focused on helping trusted adults or staff understand the concern.",
  },
  {
    question: "What does professional ethics mean in cybersecurity?",
    choices: [
      "Using skills with permission, honesty, privacy, respect, and responsibility",
      "Using skills to win arguments online",
      "Doing whatever is technically possible",
      "Keeping mistakes hidden to protect your image",
    ],
    answer: 0,
    explanation:
      "Professional ethics means using technical knowledge in ways that protect people, respect boundaries, and maintain trust.",
  },
  {
    question: "Which behavior builds digital trust?",
    choices: [
      "Admitting uncertainty and reporting concerns through the right process",
      "Exaggerating evidence to sound more serious",
      "Using another person's account to help them",
      "Sharing private screenshots to prove a point",
    ],
    answer: 0,
    explanation:
      "Digital trust grows when people are honest, careful with evidence, respectful of privacy, and willing to use the correct process.",
  },
  {
    question: "A student is unsure whether a cyber activity is allowed. What should they do before continuing?",
    choices: [
      "Ask a trusted teacher, guardian, counselor, or technology staff member for guidance",
      "Continue because uncertainty means it is probably fine",
      "Ask friends to vote on whether it is okay",
      "Try it quickly and stop if it fails",
    ],
    answer: 0,
    explanation:
      "When boundaries are unclear, students should pause and ask a trusted adult or appropriate staff member before taking action.",
  },
  {
    question: "Which option is the safest rule for handling suspicious links in a lesson or real life?",
    choices: [
      "Only use fake, lesson-created examples and never test real suspicious links yourself",
      "Click real links if you plan to close the tab quickly",
      "Send links to classmates for a second opinion",
      "Use a school computer because it is always protected",
    ],
    answer: 0,
    explanation:
      "Students should not test real suspicious links. Lessons should use fake examples, and real concerns should be reported to trusted adults or staff.",
  },
  {
    question: "Which is a common mistake in responsible learning?",
    choices: [
      "Thinking curiosity alone gives permission",
      "Using fake data for practice",
      "Reading a school policy",
      "Asking for help when unsure",
    ],
    answer: 0,
    explanation:
      "Curiosity is valuable, but it does not replace permission, rules, privacy, or safety boundaries.",
  },
  {
    question: "A classmate asks you to help get into their account because they forgot the password. What is the safest response?",
    choices: [
      "Use the official account recovery process or ask a trusted adult or technology staff member for help",
      "Guess passwords until one works",
      "Borrow someone else's account temporarily",
      "Search for ways around the login screen",
    ],
    answer: 0,
    explanation:
      "Account access problems should go through official recovery or trusted support. Students should not attempt unauthorized access.",
  },
  {
    question: "Why should fake data be used in CyberShield labs?",
    choices: [
      "It lets students practice analysis without risking real privacy, real accounts, or real systems",
      "It makes every answer automatically correct",
      "It avoids the need to learn carefully",
      "It lets students skip reporting rules",
    ],
    answer: 0,
    explanation:
      "Fake data keeps learning safe, ethical, privacy-aware, and school-appropriate while still building defensive reasoning skills.",
  },
  {
    question: "Which choice is the best ethical decision in a gray-area situation?",
    choices: [
      "Pause, avoid extra action, ask for permission or guidance, and document only what is appropriate",
      "Keep going until someone tells you to stop",
      "Share the situation online and ask strangers what to do",
      "Hide the situation because gray areas are embarrassing",
    ],
    answer: 0,
    explanation:
      "Gray areas require caution. Ethical students pause, ask, protect privacy, and avoid actions that could cause harm.",
  },
  {
    question: "What is the best reason to avoid blame-focused reporting?",
    choices: [
      "Defensive reporting should focus on evidence, safety, and improvement, not insults or assumptions",
      "Blame-focused reports are always shorter",
      "Blame makes people fix issues faster",
      "Evidence is not useful in cybersecurity",
    ],
    answer: 0,
    explanation:
      "Good cybersecurity communication is respectful and evidence-based. It helps people fix problems without creating unnecessary harm.",
  },
  {
    question: "Which action protects privacy during an ethics decision lab?",
    choices: [
      "Using only fake names, fake messages, fake accounts, and fake evidence",
      "Adding real student names to make it realistic",
      "Uploading screenshots from real conversations",
      "Asking classmates to share private examples",
    ],
    answer: 0,
    explanation:
      "Privacy-safe labs use fake examples only. Real student information, private screenshots, and real accounts do not belong in training activities.",
  },
  {
    question: "Which statement best summarizes the purpose of Module B2?",
    choices: [
      "Cybersecurity skills must be practiced with permission, safety, responsibility, and respect for trust",
      "Cybersecurity is only about knowing technical tricks",
      "Rules slow students down and should be ignored",
      "Legal boundaries do not matter in school projects",
    ],
    answer: 0,
    explanation:
      "Module B2 sets the foundation for safe, legal, ethical, school-appropriate cybersecurity learning before students move deeper into technical topics.",
  },
  {
    question: "A student wants to include a cybersecurity project in a portfolio. Which artifact is safest?",
    choices: [
      "A reflection using fake evidence that explains permission, boundaries, and responsible reporting",
      "Screenshots of real private messages",
      "A list of real usernames they investigated",
      "Proof that they tested a real website without permission",
    ],
    answer: 0,
    explanation:
      "A safe portfolio artifact shows learning, ethics, and defensive thinking with fake evidence and no private or unauthorized material.",
  },
  {
    question: "What should students do when something feels unsafe, confusing, or too serious to handle alone?",
    choices: [
      "Ask a trusted adult, teacher, counselor, guardian, or school technology staff member for help",
      "Keep trying until they solve it alone",
      "Post the problem publicly",
      "Ignore all warning signs",
    ],
    answer: 0,
    explanation:
      "CyberShield students should not handle serious issues alone. Trusted adults and school technology staff can help respond safely.",
  },
];

export default function BeginnerModuleTwoTestPage() {
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
      ? "Excellent work. You understand the ethical boundaries needed before deeper technical learning."
      : percent >= 75
        ? "Good work. Review any missed explanations, then continue to Module B3."
        : percent >= 60
          ? "You are close. Review the B2 lessons and retake this test before moving on."
          : "Pause here and review Ethics and Responsible Learning before continuing.";

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
              href="/high-school/beginner/ethics-and-responsible-learning/ethics-decision-lab"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href="/high-school/beginner/ethics-and-responsible-learning"
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
                High School Beginner • Module B2 Test
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Ethics and Responsible Learning Module Test
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
            <p className="mt-2 text-slate-300">Permission, legal boundaries, school rules, safe labs, reporting, professional ethics, and digital trust.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Rule</p>
            <p className="mt-2 text-slate-300">Use fake examples only. Do not test real systems, accounts, links, or private data.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Goal</p>
            <p className="mt-2 text-slate-300">Show that you can make safe, ethical, permission-based cyber decisions.</p>
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
            href="/high-school/beginner/ethics-and-responsible-learning/ethics-decision-lab"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Previous Lesson
          </Link>
          <Link
            href="/high-school/beginner/ethics-and-responsible-learning"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner/computers-devices-and-operating-systems"
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