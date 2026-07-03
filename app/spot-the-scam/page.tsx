"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const scamExamples = [
  {
    message:
      "You won a free phone! Click this strange link now and enter your password to claim it.",
    correctAnswer: "Suspicious",
    explanation:
      "This is suspicious because it uses a prize, urgency, a strange link, and asks for a password.",
  },
  {
    message:
      "Your teacher posts a homework reminder on the official school learning platform.",
    correctAnswer: "Safe",
    explanation:
      "This is likely safe because it comes from an official school platform and does not ask for private information.",
  },
  {
    message:
      "Your account will be deleted in 10 minutes unless you click this link and verify your login.",
    correctAnswer: "Suspicious",
    explanation:
      "This is suspicious because it creates panic and tries to rush you into clicking a link.",
  },
  {
    message:
      "A website asks you to create a username, but does not ask for your address, password, or personal details.",
    correctAnswer: "Safe",
    explanation:
      "This can be safe if the website is trusted and it only asks for basic account information.",
  },
  {
    message:
      "Someone online says they are your friend but asks you to keep the conversation secret from your family.",
    correctAnswer: "Suspicious",
    explanation:
      "This is suspicious because secrecy requests online can be a major warning sign.",
  },
];

export default function SpotTheScamPage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function chooseAnswer(index: number, answer: string) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  }

  const score = scamExamples.reduce((total, example, index) => {
    if (answers[index] === example.correctAnswer) {
      return total + 1;
    }

    return total;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-5xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Interactive Activity
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Spot the Scam
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          Read each example and decide whether it is safe or suspicious. This
          activity helps students recognize online scams, fake messages, and red
          flags.
        </p>

        <div className="space-y-8">
          {scamExamples.map((example, index) => {
            const selectedAnswer = answers[index];
            const isCorrect = selectedAnswer === example.correctAnswer;

            return (
              <div
                key={example.message}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
              >
                <p className="text-sm text-slate-400 mb-3">
                  Example {index + 1}
                </p>

                <h2 className="text-xl md:text-2xl font-bold mb-5">
                  {example.message}
                </h2>

                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={() => chooseAnswer(index, "Safe")}
                    className={`rounded-xl border px-6 py-3 font-semibold transition ${
                      selectedAnswer === "Safe"
                        ? "border-cyan-500 bg-slate-800"
                        : "border-slate-700 bg-slate-950 hover:border-cyan-500"
                    }`}
                  >
                    Safe
                  </button>

                  <button
                    onClick={() => chooseAnswer(index, "Suspicious")}
                    className={`rounded-xl border px-6 py-3 font-semibold transition ${
                      selectedAnswer === "Suspicious"
                        ? "border-cyan-500 bg-slate-800"
                        : "border-slate-700 bg-slate-950 hover:border-cyan-500"
                    }`}
                  >
                    Suspicious
                  </button>
                </div>

                {submitted && (
                  <div
                    className={`mt-5 rounded-xl border p-4 ${
                      isCorrect
                        ? "border-green-500 bg-green-950"
                        : "border-red-500 bg-red-950"
                    }`}
                  >
                    <p className="font-bold mb-2">
                      Correct answer: {example.correctAnswer}
                    </p>

                    <p className="text-slate-300">{example.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button
            onClick={() => setSubmitted(true)}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            Submit Answers
          </button>

          <button
            onClick={() => {
              setAnswers([]);
              setSubmitted(false);
            }}
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition"
          >
            Reset Activity
          </button>
        </div>

        {submitted && (
          <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-3">
              Your Score: {score} / {scamExamples.length}
            </h2>

            <p className="text-slate-300">
              {score === scamExamples.length
                ? "Excellent work. You are strong at spotting online scam warning signs."
                : score >= 3
                  ? "Good job. Review the explanations to improve your scam awareness."
                  : "Keep practicing. Learning red flags is an important cyber safety skill."}
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}