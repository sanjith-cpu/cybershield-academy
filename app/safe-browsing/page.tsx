"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const challenges = [
  {
    title: "Strange Website Address",
    category: "Website Address",
    scenario:
      "You receive a message telling you to log in at school-login-security-free-prize.example.com to protect your school account.",
    question: "What should you do?",
    options: [
      "Click it because it says school login",
      "Slow down and check with a teacher or official school website",
      "Enter your password quickly",
      "Send it to all your friends",
    ],
    correctIndex: 1,
    explanation:
      "Strange website addresses with extra words like security, free, prize, or urgent login can be suspicious. Go directly to the official website or ask a trusted adult.",
  },
  {
    title: "Fake Virus Pop-Up",
    category: "Pop-Ups",
    scenario:
      "A pop-up says your device has 27 viruses and tells you to download a cleaner immediately.",
    question: "What is the safest response?",
    options: [
      "Download the cleaner right away",
      "Click every button to close it",
      "Do not download anything and ask a trusted adult or tech staff",
      "Type your password into the pop-up",
    ],
    correctIndex: 2,
    explanation:
      "Fake virus warnings often use fear to push unsafe downloads. Do not install unknown tools from random pop-ups.",
  },
  {
    title: "Fake Download Button",
    category: "Downloads",
    scenario:
      "You are on a website and see several large buttons that say DOWNLOAD NOW, but you are not sure which one is real.",
    question: "What should you do first?",
    options: [
      "Click the biggest button",
      "Click all of them until one works",
      "Pause and avoid downloading from confusing or untrusted pages",
      "Turn off your browser safety settings",
    ],
    correctIndex: 2,
    explanation:
      "Fake download buttons can trick people into opening unsafe files. If a page feels confusing or untrusted, stop and ask for help.",
  },
  {
    title: "Normal School Link",
    category: "Safer Link",
    scenario:
      "Your teacher tells the class to open Google Classroom from the school portal you normally use.",
    question: "Does this look safer or suspicious?",
    options: [
      "Safer, because it uses a known school process",
      "Suspicious, because all school links are fake",
      "Unsafe, because teachers never share links",
      "Suspicious, because it does not promise a prize",
    ],
    correctIndex: 0,
    explanation:
      "Using a known school portal or official class platform is usually safer than clicking random links from unknown messages.",
  },
  {
    title: "Urgent Account Warning",
    category: "Urgency",
    scenario:
      "An email says your account will be deleted in 5 minutes unless you click a link and confirm your password.",
    question: "Which red flag matters most?",
    options: [
      "It uses urgent pressure and asks for a password",
      "It has words in English",
      "It mentions an account",
      "It has a short message",
    ],
    correctIndex: 0,
    explanation:
      "Urgency plus a password request is a major warning sign. Real support teams should not ask for your password through random links.",
  },
];

const safetyRules = [
  {
    title: "Check the address",
    detail:
      "Look for misspellings, strange extra words, random numbers, or websites that do not match the real organization.",
  },
  {
    title: "Avoid scary pop-ups",
    detail:
      "Do not trust pop-ups that claim your device is infected and demand an immediate download.",
  },
  {
    title: "Use official sources",
    detail:
      "Go directly to the official website or app instead of clicking random links in messages.",
  },
  {
    title: "Do not rush",
    detail:
      "Scams often use fear, urgency, or rewards. Slowing down helps you notice warning signs.",
  },
  {
    title: "Ask for help",
    detail:
      "If you are unsure, ask a trusted adult, teacher, or school technology staff member.",
  },
];

export default function SafeBrowsingPage() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const challenge = challenges[currentChallenge];
  const isCorrect = selectedAnswer === challenge.correctIndex;
  const progress = ((currentChallenge + 1) / challenges.length) * 100;

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === challenge.correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleNext() {
    if (currentChallenge === challenges.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentChallenge((prevChallenge) => prevChallenge + 1);
    setSelectedAnswer(null);
  }

  function resetChallenge() {
    setCurrentChallenge(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  }

  function getResultMessage() {
    const percent = Math.round((score / challenges.length) * 100);

    if (percent >= 90) {
      return "Excellent safe browsing judgment. You are noticing important warning signs.";
    }

    if (percent >= 70) {
      return "Great work. You caught many risks, and a little review can make you even stronger.";
    }

    if (percent >= 50) {
      return "Good start. Keep practicing how to check links, pop-ups, and download warnings.";
    }

    return "Keep practicing. Safe browsing gets easier when you slow down and check details.";
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Safe Browsing Challenge
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practice checking links, pop-ups, and downloads.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This activity helps students slow down and recognize suspicious
            website addresses, fake pop-ups, confusing download buttons, and
            urgent account warnings.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Do not click suspicious links or download unknown
            files to test them. This activity uses fake examples only.
          </div>
        </section>

        {!showResults ? (
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">
                    Challenge {currentChallenge + 1} of {challenges.length}
                  </p>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {challenge.category}
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
                <h2 className="text-2xl font-bold text-cyan-200">
                  {challenge.title}
                </h2>

                <p className="mt-4 rounded-xl bg-slate-900 p-5 text-lg leading-8 text-slate-200">
                  {challenge.scenario}
                </p>

                <p className="mt-5 text-xl font-semibold text-white">
                  {challenge.question}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {challenge.options.map((option, index) => {
                  const answerWasSelected = selectedAnswer !== null;
                  const isSelected = selectedAnswer === index;
                  const isRightAnswer = challenge.correctIndex === index;

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
                    {challenge.explanation}
                  </p>

                  <button
                    onClick={handleNext}
                    className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {currentChallenge === challenges.length - 1
                      ? "See Results"
                      : "Next Challenge"}
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-4xl font-bold text-white">
                Your Score: {score}/{challenges.length}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {getResultMessage()}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={resetChallenge}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Try Again
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

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Safe Browsing Rules
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These rules help students make safer choices before clicking,
              downloading, or entering information online.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {safetyRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {rule.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {rule.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}