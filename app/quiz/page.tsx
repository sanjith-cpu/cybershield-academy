"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const questions = [
  {
    question: "What should you do if a website asks for your home address before letting you play a game?",
    choices: [
      "Enter it quickly so you can play",
      "Ask a trusted adult first",
      "Share your friend's address instead",
      "Ignore it and keep clicking",
    ],
    answer: "Ask a trusted adult first",
    explanation:
      "You should not share personal information online without checking with a trusted adult.",
  },
  {
    question: "Which password is the safest choice?",
    choices: [
      "password123",
      "your name and birthday",
      "a long password with different words and symbols",
      "the same password you use everywhere",
    ],
    answer: "a long password with different words and symbols",
    explanation:
      "Long and unique passwords are usually safer than short or reused passwords.",
  },
  {
    question: "A message says you won a free phone, but you must click a strange link. What should you do?",
    choices: [
      "Click the link immediately",
      "Share the link with everyone",
      "Treat it as suspicious",
      "Enter your password to claim it",
    ],
    answer: "Treat it as suspicious",
    explanation:
      "Unexpected prize messages and strange links are common warning signs of scams.",
  },
  {
    question: "What is multi-factor authentication?",
    choices: [
      "Using the same password twice",
      "An extra step to prove it is really you",
      "Deleting your account",
      "Turning off account security",
    ],
    answer: "An extra step to prove it is really you",
    explanation:
      "Multi-factor authentication adds another layer of protection beyond just a password.",
  },
  {
    question: "What should you do if someone online asks you to keep a secret from your family?",
    choices: [
      "Keep the secret",
      "Send them more information",
      "Tell a trusted adult",
      "Meet them in person",
    ],
    answer: "Tell a trusted adult",
    explanation:
      "If someone online makes you uncomfortable or asks for secrecy, you should talk to a trusted adult.",
  },
];

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function chooseAnswer(questionIndex: number, choice: string) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = choice;
    setSelectedAnswers(updatedAnswers);
  }

  const score = questions.reduce((total, question, index) => {
    if (selectedAnswers[index] === question.answer) {
      return total + 1;
    }

    return total;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-5xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Interactive Feature
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber Safety Quiz
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          Test your knowledge of online safety, passwords, scams, privacy, and
          responsible internet use.
        </p>

        <div className="space-y-8">
          {questions.map((question, questionIndex) => (
            <div
              key={question.question}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                {questionIndex + 1}. {question.question}
              </h2>

              <div className="space-y-3">
                {question.choices.map((choice) => {
                  const isSelected = selectedAnswers[questionIndex] === choice;
                  const isCorrect = choice === question.answer;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;

                  return (
                    <button
                      key={choice}
                      onClick={() => chooseAnswer(questionIndex, choice)}
                      className={`block w-full text-left rounded-xl border p-4 transition ${
                        showCorrect
                          ? "border-green-500 bg-green-950"
                          : showWrong
                            ? "border-red-500 bg-red-950"
                            : isSelected
                              ? "border-cyan-500 bg-slate-800"
                              : "border-slate-700 bg-slate-950 hover:border-cyan-500"
                      }`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <p className="mt-4 text-slate-300">
                  {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <button
            onClick={() => setSubmitted(true)}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            Submit Quiz
          </button>

          <button
            onClick={() => {
              setSelectedAnswers([]);
              setSubmitted(false);
            }}
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition"
          >
            Reset Quiz
          </button>
        </div>

        {submitted && (
          <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-3">
              Your Score: {score} / {questions.length}
            </h2>

            <p className="text-slate-300">
              {score === questions.length
                ? "Excellent work. You have strong cyber safety awareness."
                : score >= 3
                  ? "Good job. Review the explanations to strengthen your cyber safety skills."
                  : "Keep learning. Cyber safety improves with practice."}
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}