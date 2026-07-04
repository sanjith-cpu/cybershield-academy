"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scenarios = [
  {
    title: "Someone Else’s Account",
    category: "Permission",
    situation:
      "A friend says they know part of another student’s password and asks you to help guess the rest as a joke.",
    choices: [
      "Help them because it is just a joke",
      "Say no and explain that accessing someone else’s account is wrong",
      "Try once and stop if it does not work",
      "Ask more friends to help guess",
    ],
    correctIndex: 1,
    explanation:
      "Responsible cybersecurity starts with permission. Trying to access someone else’s account is not okay, even as a joke.",
  },
  {
    title: "Private Group Chat Screenshot",
    category: "Privacy",
    situation:
      "Someone sends you a screenshot from a private group chat and tells you to post it publicly to embarrass another student.",
    choices: [
      "Post it because it might get attention",
      "Share it with more people",
      "Do not post it and avoid spreading private conversations",
      "Edit the screenshot to make it funnier",
    ],
    correctIndex: 2,
    explanation:
      "Cyber ethics includes respecting privacy. Sharing private messages to embarrass someone can cause harm.",
  },
  {
    title: "Suspicious Link at School",
    category: "Reporting",
    situation:
      "You notice a suspicious link being shared in a school chat. You are not sure if it is real or fake.",
    choices: [
      "Click it to investigate",
      "Send it to everyone to warn them",
      "Report it to a teacher or school technology staff member",
      "Ignore it and hope nothing happens",
    ],
    correctIndex: 2,
    explanation:
      "The safest choice is to report suspicious links to trusted adults or technology staff. Do not click suspicious links to test them.",
  },
  {
    title: "Using Cybersecurity Skills",
    category: "Defense",
    situation:
      "You learn about scam red flags, password safety, and safe browsing. What is the best way to use that knowledge?",
    choices: [
      "Help friends and family make safer choices online",
      "Scare people with cybersecurity words",
      "Try to break into random accounts",
      "Use it to embarrass people who know less",
    ],
    correctIndex: 0,
    explanation:
      "Cybersecurity knowledge should be used to protect people, reduce harm, and help others stay safer online.",
  },
  {
    title: "Found a Possible Weakness",
    category: "Responsibility",
    situation:
      "You notice something on a school website that seems broken or unsafe. You are not sure what it means.",
    choices: [
      "Tell a teacher or school technology staff member",
      "Try to explore it yourself",
      "Post about it online",
      "Tell classmates to test it",
    ],
    correctIndex: 0,
    explanation:
      "If something seems unsafe, report it responsibly. Do not explore systems, test limits, or involve classmates.",
  },
];

const ethicsPrinciples = [
  {
    title: "Permission",
    detail:
      "Only use technology and cybersecurity skills in approved spaces where you have clear permission.",
  },
  {
    title: "Privacy",
    detail:
      "Respect other people’s accounts, messages, photos, files, and personal information.",
  },
  {
    title: "Safety",
    detail:
      "Avoid actions that could harm people, devices, accounts, data, or school systems.",
  },
  {
    title: "Reporting",
    detail:
      "If something seems suspicious or unsafe, report it to a trusted adult, teacher, or technology staff member.",
  },
  {
    title: "Defense",
    detail:
      "Use cybersecurity knowledge to protect people and solve problems responsibly.",
  },
];

const responsibleActions = [
  "Ask before using someone else’s device or account.",
  "Do not share private screenshots, passwords, or personal details.",
  "Report suspicious messages instead of investigating them yourself.",
  "Use fake examples during cybersecurity practice.",
  "Help others learn safer online habits respectfully.",
  "Follow school rules and teacher instructions during technology activities.",
];

export default function CyberEthicsPage() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scenario = scenarios[currentScenario];
  const isCorrect = selectedAnswer === scenario.correctIndex;
  const progress = ((currentScenario + 1) / scenarios.length) * 100;

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === scenario.correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleNext() {
    if (currentScenario === scenarios.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentScenario((prevScenario) => prevScenario + 1);
    setSelectedAnswer(null);
  }

  function resetScenarios() {
    setCurrentScenario(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  }

  function getResultMessage() {
    const percent = Math.round((score / scenarios.length) * 100);

    if (percent >= 90) {
      return "Excellent work. You showed strong ethical cybersecurity judgment.";
    }

    if (percent >= 70) {
      return "Great job. You understand many responsible technology choices.";
    }

    if (percent >= 50) {
      return "Good start. Review the explanations and keep practicing ethical decision-making.";
    }

    return "Keep practicing. Cyber ethics improves when you pause, think about harm, and ask trusted adults for help.";
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Cyber Ethics Scenarios
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practice responsible cybersecurity decisions.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cyber ethics means using technology in ways that respect permission,
            privacy, safety, and responsibility. These scenarios help students
            think through safe and defensive choices.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: CyberShield Academy teaches defensive
            cybersecurity only. Do not access accounts, devices, networks, or
            private information without permission.
          </div>
        </section>

        {!showResults ? (
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">
                    Scenario {currentScenario + 1} of {scenarios.length}
                  </p>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {scenario.category}
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
                  {scenario.title}
                </h2>

                <p className="mt-4 rounded-xl bg-slate-900 p-5 text-lg leading-8 text-slate-200">
                  {scenario.situation}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {scenario.choices.map((choice, index) => {
                  const answerWasSelected = selectedAnswer !== null;
                  const isSelected = selectedAnswer === index;
                  const isRightAnswer = scenario.correctIndex === index;

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
                      key={choice}
                      onClick={() => handleAnswer(index)}
                      className={`rounded-xl border p-4 text-left text-sm font-medium transition ${answerStyle}`}
                    >
                      {choice}
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
                    {scenario.explanation}
                  </p>

                  <button
                    onClick={handleNext}
                    className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {currentScenario === scenarios.length - 1
                      ? "See Results"
                      : "Next Scenario"}
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-4xl font-bold text-white">
                Your Score: {score}/{scenarios.length}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {getResultMessage()}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={resetScenarios}
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
                  href="/safety"
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Safety & Privacy
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Cyber Ethics Principles
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These principles help students understand what responsible
              cybersecurity learning should look like.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {ethicsPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {principle.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Responsible Actions
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              These actions keep cybersecurity learning safe, respectful, and
              focused on protecting people.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {responsibleActions.map((action) => (
                <div
                  key={action}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {action}
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