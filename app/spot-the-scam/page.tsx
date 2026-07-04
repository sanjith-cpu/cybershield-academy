"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scamScenarios = [
  {
    title: "Free Gaming Gift Card",
    category: "Prize Scam",
    message:
      "Congratulations! You have been selected to receive a FREE $100 gaming gift card. Click this link in the next 10 minutes or your reward will expire.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 1,
    redFlags: [
      "Promises a free prize",
      "Uses urgency with a short deadline",
      "Pushes you to click a link quickly",
    ],
    explanation:
      "Prize scams often use excitement and urgency to make people click without thinking. Real rewards should be verified through official websites or trusted adults.",
  },
  {
    title: "Fake Login Warning",
    category: "Fake Account Alert",
    message:
      "Your school account will be deleted today. Confirm your username and password immediately to keep your account active.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 1,
    redFlags: [
      "Threatens account deletion",
      "Asks for username and password",
      "Creates fear and pressure",
    ],
    explanation:
      "A real school technology team should not ask for your password through a random message. If you are worried, go directly to a teacher or school technology staff.",
  },
  {
    title: "Normal Class Reminder",
    category: "Safe Message",
    message:
      "Reminder: Cyber safety worksheet is due Friday. Please check Google Classroom for the instructions we reviewed in class.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 0,
    redFlags: [
      "No password request",
      "No strange prize",
      "No suspicious link or pressure",
    ],
    explanation:
      "This message looks safer because it refers to a normal class task and tells students to use a known school platform.",
  },
  {
    title: "Secret Help Request",
    category: "Secrecy Scam",
    message:
      "Do not tell anyone. I need your help buying gift cards right now. Send me the codes and I will explain later.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 1,
    redFlags: [
      "Asks you to keep it secret",
      "Requests gift card codes",
      "Uses pressure and confusion",
    ],
    explanation:
      "Scammers often ask people to keep secrets so nobody can help them think clearly. Gift card code requests are a major warning sign.",
  },
  {
    title: "Suspicious Download",
    category: "Fake Download",
    message:
      "Your device is infected! Download this cleaner now to remove all viruses. Failure to act may damage your files.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 1,
    redFlags: [
      "Uses fear",
      "Pushes an unknown download",
      "Makes a dramatic warning",
    ],
    explanation:
      "Fake security warnings often try to scare people into downloading unsafe software. Do not download tools from random pop-ups or messages.",
  },
  {
    title: "Team Practice Update",
    category: "Safe Message",
    message:
      "Practice is moved to 5:30 PM today because of weather. Please check the team group chat for the updated location.",
    choices: ["Looks Safe", "Looks Suspicious"],
    correctIndex: 0,
    redFlags: [
      "No private information request",
      "No password request",
      "No suspicious prize or threat",
    ],
    explanation:
      "This message looks safer because it shares a normal schedule update and does not ask for sensitive information.",
  },
];

const scamCategories = [
  {
    name: "Prize Scams",
    detail:
      "Messages that promise free money, gift cards, phones, games, or rewards if you click quickly.",
  },
  {
    name: "Fake Login Warnings",
    detail:
      "Messages that say your account will be deleted or locked unless you enter your password.",
  },
  {
    name: "Urgency and Fear Messages",
    detail:
      "Messages that pressure you to act immediately before you have time to think.",
  },
  {
    name: "Secrecy Requests",
    detail:
      "Messages that tell you not to tell parents, teachers, friends, or trusted adults.",
  },
  {
    name: "Suspicious Links",
    detail:
      "Links with strange spellings, random words, fake login pages, or websites you do not recognize.",
  },
];

const safetySteps = [
  "Pause before clicking.",
  "Check who sent the message.",
  "Look for urgency, fear, prizes, secrecy, or password requests.",
  "Do not share private information.",
  "Ask a trusted adult, teacher, or technology staff member if you are unsure.",
];

export default function SpotTheScamPage() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scenario = scamScenarios[currentScenario];
  const isCorrect = selectedChoice === scenario.correctIndex;
  const progress = ((currentScenario + 1) / scamScenarios.length) * 100;

  function handleChoice(index: number) {
    if (selectedChoice !== null) return;

    setSelectedChoice(index);

    if (index === scenario.correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleNext() {
    if (currentScenario === scamScenarios.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentScenario((prevScenario) => prevScenario + 1);
    setSelectedChoice(null);
  }

  function resetActivity() {
    setCurrentScenario(0);
    setSelectedChoice(null);
    setScore(0);
    setShowResults(false);
  }

  function getResultMessage() {
    const percent = Math.round((score / scamScenarios.length) * 100);

    if (percent >= 90) {
      return "Excellent scam-spotting skills. You are slowing down and noticing red flags.";
    }

    if (percent >= 70) {
      return "Great work. You caught many warning signs, but a quick review can make you even stronger.";
    }

    if (percent >= 50) {
      return "Good start. Keep practicing how to recognize urgency, fear, secrecy, and suspicious links.";
    }

    return "Keep practicing. Scam awareness gets better when you pause, check details, and ask for help.";
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Spot the Scam
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practice spotting suspicious messages.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Read each example and decide whether it looks safe or suspicious.
            This activity teaches red flags like fake prizes, password requests,
            urgency, fear, secrecy, and suspicious links.
          </p>
        </section>

        {!showResults ? (
          <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">
                    Scenario {currentScenario + 1} of {scamScenarios.length}
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
                  “{scenario.message}”
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {scenario.choices.map((choice, index) => {
                  const choiceWasSelected = selectedChoice !== null;
                  const isSelected = selectedChoice === index;
                  const isRightAnswer = scenario.correctIndex === index;

                  let choiceStyle =
                    "border-slate-700 bg-slate-950/70 text-slate-200 hover:border-cyan-300 hover:bg-slate-900";

                  if (choiceWasSelected && isRightAnswer) {
                    choiceStyle =
                      "border-green-400 bg-green-950/40 text-green-100";
                  } else if (choiceWasSelected && isSelected && !isRightAnswer) {
                    choiceStyle = "border-red-400 bg-red-950/40 text-red-100";
                  } else if (choiceWasSelected) {
                    choiceStyle =
                      "border-slate-800 bg-slate-950/40 text-slate-400";
                  }

                  return (
                    <button
                      key={choice}
                      onClick={() => handleChoice(index)}
                      className={`rounded-2xl border p-5 text-left text-lg font-semibold transition ${choiceStyle}`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>

              {selectedChoice !== null && (
                <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
                  <p
                    className={`text-lg font-bold ${
                      isCorrect ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite."}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {scenario.explanation}
                  </p>

                  <div className="mt-5">
                    <h3 className="font-semibold text-white">
                      Red flags to notice:
                    </h3>

                    <ul className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-3">
                      {scenario.redFlags.map((flag) => (
                        <li
                          key={flag}
                          className="rounded-xl bg-slate-900 p-3"
                        >
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleNext}
                    className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {currentScenario === scamScenarios.length - 1
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
                Your Score: {score}/{scamScenarios.length}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {getResultMessage()}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={resetActivity}
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
                  Review Safety Resources
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Common Scam Categories
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Scams can look different, but many use the same tricks. These are
              the warning signs students should slow down and check.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {scamCategories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {category.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Safe Response Steps
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              If a message feels suspicious, the goal is not to investigate it
              yourself. The goal is to stay safe, avoid risky clicks, and ask
              for help when needed.
            </p>

            <ol className="mt-6 grid gap-3 text-sm text-yellow-50 md:grid-cols-5">
              {safetySteps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/50 p-4"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}