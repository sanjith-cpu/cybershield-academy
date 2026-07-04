"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const questions = [
  {
    category: "Passwords",
    level: "Beginner",
    question: "Which password is the safest choice?",
    options: [
      "sanjith123",
      "password2026",
      "BlueTiger!River42",
      "mybirthday",
    ],
    correctIndex: 2,
    explanation:
      "A stronger password is longer, harder to guess, and uses a mix of words, numbers, and symbols. Never use personal details like your name or birthday.",
  },
  {
    category: "Scams",
    level: "Beginner",
    question:
      "You get a message saying, “You won a free phone! Click this link now.” What should you do first?",
    options: [
      "Click quickly before it expires",
      "Share it with friends",
      "Pause and check if it is real",
      "Reply with your address",
    ],
    correctIndex: 2,
    explanation:
      "Scams often use excitement, prizes, and urgency. The safest move is to pause, avoid clicking, and check with a trusted adult or official source.",
  },
  {
    category: "Privacy",
    level: "Beginner",
    question: "Which information should you avoid posting publicly online?",
    options: [
      "Your favorite sport",
      "Your school address and daily schedule",
      "A drawing you made",
      "A general hobby",
    ],
    correctIndex: 1,
    explanation:
      "Specific personal information like your school, address, phone number, location, and daily schedule should stay private.",
  },
  {
    category: "Digital Citizenship",
    level: "Beginner",
    question:
      "What should you do before posting a photo of a friend online?",
    options: [
      "Post it if you think it is funny",
      "Ask for permission",
      "Tag everyone automatically",
      "Post it only at night",
    ],
    correctIndex: 1,
    explanation:
      "Good digital citizenship means respecting other people’s privacy. Always ask before posting or tagging someone.",
  },
  {
    category: "Scams",
    level: "Intermediate",
    question:
      "Which warning sign makes a message look suspicious?",
    options: [
      "It comes from a teacher’s official school email",
      "It uses normal spelling and gives clear instructions",
      "It pressures you to act immediately and keep it secret",
      "It reminds you about a real assignment",
    ],
    correctIndex: 2,
    explanation:
      "Urgency, fear, secrecy, strange links, and pressure are common scam red flags.",
  },
  {
    category: "Passwords",
    level: "Intermediate",
    question:
      "Why is using the same password for every account risky?",
    options: [
      "It makes logging in too slow",
      "If one account is stolen, other accounts may be at risk too",
      "It makes your computer louder",
      "It stops websites from loading",
    ],
    correctIndex: 1,
    explanation:
      "If one reused password is exposed, attackers may try it on other accounts. Different passwords help limit damage.",
  },
  {
    category: "Privacy",
    level: "Intermediate",
    question:
      "An app asks for access to your microphone, contacts, camera, and location, but it is just a simple calculator. What should you think?",
    options: [
      "The app may be asking for more permission than it needs",
      "Every app needs all permissions",
      "You must allow everything",
      "Permissions do not matter",
    ],
    correctIndex: 0,
    explanation:
      "Apps should only ask for permissions that match what they actually do. Extra permissions can create privacy risks.",
  },
  {
    category: "Digital Citizenship",
    level: "Intermediate",
    question:
      "You see someone being mean to another student in a group chat. What is the best response?",
    options: [
      "Join in so you are not left out",
      "Screenshot and post it publicly",
      "Support the person, avoid escalating, and report it to a trusted adult if needed",
      "Ignore it every time",
    ],
    correctIndex: 2,
    explanation:
      "Responsible online behavior means helping reduce harm. Do not escalate the situation or publicly shame others.",
  },
  {
    category: "Safe Browsing",
    level: "Intermediate",
    question:
      "Which website address should make you slow down and double-check?",
    options: [
      "https://www.google.com",
      "https://www.apple.com",
      "https://login-school-account-security-free-prize.example.com",
      "https://www.khanacademy.org",
    ],
    correctIndex: 2,
    explanation:
      "Long, strange addresses with unrelated words like login, security, free, and prize can be suspicious. Always check URLs carefully.",
  },
  {
    category: "Ethics",
    level: "Advanced",
    question:
      "A friend asks you to guess someone else’s password as a joke. What should you do?",
    options: [
      "Try it once only",
      "Do it if your friend says it is okay",
      "Say no and explain that accessing someone else’s account is wrong",
      "Use a fake name so nobody knows",
    ],
    correctIndex: 2,
    explanation:
      "Cybersecurity skills should be used ethically and defensively. Never try to access someone else’s account without permission.",
  },
  {
    category: "Incident Response",
    level: "Advanced",
    question:
      "You accidentally click a suspicious link on a school device. What should you do next?",
    options: [
      "Hide it so you do not get in trouble",
      "Keep clicking to see what happens",
      "Report it to a teacher, parent, or school technology staff",
      "Post the link online",
    ],
    correctIndex: 2,
    explanation:
      "Reporting quickly helps trusted adults or technology staff reduce possible harm. Do not hide the problem or keep interacting with the suspicious page.",
  },
  {
    category: "Careers",
    level: "Advanced",
    question:
      "Which action best shows a defensive cybersecurity mindset?",
    options: [
      "Trying to break into random accounts",
      "Helping people recognize scams and protect their accounts",
      "Sharing private information online",
      "Ignoring suspicious activity",
    ],
    correctIndex: 1,
    explanation:
      "Defensive cybersecurity focuses on protecting people, systems, data, and communities.",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { question: string; correct: boolean; explanation: string }[]
  >([]);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctIndex;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const finalPercent = Math.round((score / questions.length) * 100);

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);

    const correct = index === question.correctIndex;

    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnsweredQuestions((prev) => [
      ...prev,
      {
        question: question.question,
        correct,
        explanation: question.explanation,
      },
    ]);
  }

  function handleNextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedAnswer(null);
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setAnsweredQuestions([]);
  }

  function getScoreMessage() {
    if (finalPercent >= 90) {
      return "Excellent work. You showed strong cyber safety judgment.";
    }

    if (finalPercent >= 70) {
      return "Great job. You understand many key safety habits, with a few areas to review.";
    }

    if (finalPercent >= 50) {
      return "Good start. Review the explanations and try again to strengthen your skills.";
    }

    return "Keep practicing. Cyber safety improves when you slow down, check details, and learn from mistakes.";
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Cyber Safety Quiz
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Test your online safety instincts.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Answer questions about passwords, scams, privacy, digital
            citizenship, safe browsing, ethics, and defensive cybersecurity.
            Each answer includes an explanation so you can learn as you go.
          </p>
        </section>

        {!showResults ? (
          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {question.category}
                    </span>
                    <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">
                      {question.level}
                    </span>
                  </div>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold leading-snug text-white">
                {question.question}
              </h2>

              <div className="mt-6 grid gap-3">
                {question.options.map((option, index) => {
                  const answerWasSelected = selectedAnswer !== null;
                  const isSelected = selectedAnswer === index;
                  const isRightAnswer = question.correctIndex === index;

                  let answerStyle =
                    "border-slate-700 bg-slate-950/70 text-slate-200 hover:border-cyan-300 hover:bg-slate-900";

                  if (answerWasSelected && isRightAnswer) {
                    answerStyle =
                      "border-green-400 bg-green-950/40 text-green-100";
                  } else if (answerWasSelected && isSelected && !isRightAnswer) {
                    answerStyle = "border-red-400 bg-red-950/40 text-red-100";
                  } else if (answerWasSelected) {
                    answerStyle =
                      "border-slate-800 bg-slate-950/40 text-slate-400";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(index)}
                      className={`rounded-xl border p-4 text-left text-sm font-medium transition ${answerStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
                  <p
                    className={`font-semibold ${
                      isCorrect ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite."}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question.explanation}
                  </p>

                  <button
                    onClick={handleNextQuestion}
                    className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {currentQuestion === questions.length - 1
                      ? "See Results"
                      : "Next Question"}
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-4xl font-bold text-white">
                Your Score: {score}/{questions.length}
              </h2>

              <p className="mt-3 text-xl font-semibold text-cyan-200">
                {finalPercent}%
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {getScoreMessage()}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {answeredQuestions.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <p className="text-sm font-semibold text-slate-400">
                      Question {index + 1}
                    </p>
                    <h3 className="mt-2 font-semibold text-white">
                      {item.question}
                    </h3>
                    <p
                      className={`mt-3 text-sm font-semibold ${
                        item.correct ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {item.correct ? "Correct" : "Review needed"}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={resetQuiz}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Retake Quiz
                </button>

                <Link
                  href="/activities"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Back to Activities
                </Link>

                <Link
                  href="/resources"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Review Resources
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}