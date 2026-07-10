"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  category: string;
};

const modulePath = "/high-school/beginner/common-cyber-threats";
const previousLesson = `${modulePath}/threat-recognition-lab`;

const questions: Question[] = [
  {
    category: "Threat Basics",
    prompt: "What is a cyber threat?",
    choices: [
      "A person, event, condition, or action that could cause digital harm.",
      "Any device with a low battery.",
      "A confirmed incident in every case.",
      "A normal software feature.",
    ],
    answer: 0,
    explanation:
      "A cyber threat is something that could harm systems, accounts, data, privacy, or digital services.",
  },
  {
    category: "Threat Basics",
    prompt: "What is a vulnerability?",
    choices: [
      "A weakness that could increase the likelihood or impact of harm.",
      "A completed incident report.",
      "A protected backup.",
      "A verified official update.",
    ],
    answer: 0,
    explanation:
      "Vulnerabilities are weaknesses such as outdated software, unsafe settings, or reused credentials.",
  },
  {
    category: "Threat Basics",
    prompt: "What does cyber risk describe?",
    choices: [
      "The likelihood and possible impact of a harmful event.",
      "Only the number of files on a device.",
      "The design of a login page.",
      "A guaranteed account takeover.",
    ],
    answer: 0,
    explanation:
      "Risk combines how likely harm may be with how serious the consequences could become.",
  },
  {
    category: "Threat Basics",
    prompt: "Which example is a warning sign rather than automatic proof of an attack?",
    choices: [
      "An unfamiliar login alert that needs review.",
      "A confirmed unauthorized recovery-email change.",
      "A verified account takeover report.",
      "A completed malware investigation by technology staff.",
    ],
    answer: 0,
    explanation:
      "A warning sign deserves review, but one clue alone may not prove exactly what happened.",
  },
  {
    category: "Malware",
    prompt: "What does malware describe?",
    choices: [
      "A broad category of harmful software.",
      "Every software update.",
      "Any slow internet connection.",
      "A normal backup process.",
    ],
    answer: 0,
    explanation:
      "Malware is a broad term for harmful software that may disrupt, damage, spy on, or gain unauthorized access.",
  },
  {
    category: "Ransomware",
    prompt: "What is ransomware?",
    choices: [
      "A type of malware that blocks access to systems or data and makes an extortion demand.",
      "A trusted password manager.",
      "A normal school portal feature.",
      "A backup verification method.",
    ],
    answer: 0,
    explanation:
      "Ransomware is a harmful-software category associated with blocked access and demands.",
  },
  {
    category: "Malware Response",
    prompt: "Several files suddenly change names and cannot be opened. What should a student do?",
    choices: [
      "Stop interacting with the files and report the device to trusted technology staff.",
      "Open every file to test the damage.",
      "Download an unknown repair tool.",
      "Send the files to classmates.",
    ],
    answer: 0,
    explanation:
      "Unexpected file changes are a serious warning sign, so the safest action is to stop interaction and escalate.",
  },
  {
    category: "Malware Response",
    prompt: "A screen demands payment to restore locked files. What is the safest response?",
    choices: [
      "Do not reply or pay; preserve the device state and contact trusted support.",
      "Pay immediately.",
      "Install any tool recommended by the message.",
      "Post account details publicly.",
    ],
    answer: 0,
    explanation:
      "Students should not negotiate, pay, or attempt repair themselves. Trusted adults or technology staff should handle the incident.",
  },
  {
    category: "Phishing",
    prompt: "What is phishing?",
    choices: [
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A normal device update.",
      "A protected backup process.",
      "A type of hardware repair.",
    ],
    answer: 0,
    explanation:
      "Phishing uses deceptive messages or websites to push people toward unsafe actions.",
  },
  {
    category: "Social Engineering",
    prompt: "Which clue is commonly used in social engineering?",
    choices: [
      "Urgency that pressures the user to act before checking.",
      "A verified official request opened through a trusted portal.",
      "A normal account setting reviewed by the owner.",
      "An approved software update.",
    ],
    answer: 0,
    explanation:
      "Urgency, fear, rewards, authority, and impersonation are common manipulation techniques.",
  },
  {
    category: "Verification",
    prompt: "What is the safest way to verify a suspicious message from a teacher?",
    choices: [
      "Contact the teacher through the official school directory, portal, or known address.",
      "Reply to the suspicious message with the school password.",
      "Open the attachment to see whether it looks real.",
      "Forward the message to classmates.",
    ],
    answer: 0,
    explanation:
      "Verification should happen through a separate trusted channel, not through the suspicious message itself.",
  },
  {
    category: "Phishing",
    prompt: "A message says an account will close in ten minutes unless a link is clicked. What should the user do?",
    choices: [
      "Open the official service directly and review account alerts there.",
      "Click immediately because time is limited.",
      "Send the password to the sender.",
      "Share the link with friends for testing.",
    ],
    answer: 0,
    explanation:
      "Urgency is a warning sign. The user should verify through the official service without using the message link.",
  },
  {
    category: "Credential Theft",
    prompt: "What is credential theft?",
    choices: [
      "The unauthorized collection or exposure of login evidence.",
      "A normal account update.",
      "A trusted backup process.",
      "A public profile change.",
    ],
    answer: 0,
    explanation:
      "Credential theft involves passwords, passphrases, codes, tokens, or other evidence used to access accounts.",
  },
  {
    category: "Account Takeover",
    prompt: "Which event is a strong sign of possible account takeover?",
    choices: [
      "Messages were sent from the account that the owner did not create.",
      "The profile picture was changed by the owner.",
      "The owner installed an official update.",
      "A trusted device completed a normal login.",
    ],
    answer: 0,
    explanation:
      "Unauthorized messages, settings, sessions, or recovery changes may show that someone else controls the account.",
  },
  {
    category: "MFA",
    prompt: "What should happen after an unexpected MFA prompt?",
    choices: [
      "Deny it and review official account activity.",
      "Approve it to stop the notification.",
      "Share it with a friend.",
      "Disable every account alert.",
    ],
    answer: 0,
    explanation:
      "An unexpected prompt may mean someone else knows the password or is attempting access.",
  },
  {
    category: "Account Security",
    prompt: "Why must a reused credential be changed on every affected account?",
    choices: [
      "The same exposed secret may allow access to several accounts.",
      "Only one account can use MFA.",
      "Recovery codes work only with reused passwords.",
      "Unique passwords are always shorter.",
    ],
    answer: 0,
    explanation:
      "Reuse creates connected risk, so each affected account needs a separate replacement credential.",
  },
  {
    category: "Downloads",
    prompt: "What is the safest response to an unexpected attachment?",
    choices: [
      "Do not open it; verify the sender and purpose through a separate trusted channel.",
      "Open it quickly before it expires.",
      "Forward it to classmates.",
      "Rename it and try again.",
    ],
    answer: 0,
    explanation:
      "Unexpected attachments should be verified without opening, forwarding, or testing them.",
  },
  {
    category: "Downloads",
    prompt: "Why is a file named Schedule.pdf.exe suspicious?",
    choices: [
      "The double extension may disguise an executable file as a document.",
      "Every PDF is harmful.",
      "The filename is too short.",
      "School schedules cannot be digital.",
    ],
    answer: 0,
    explanation:
      "A double extension can make a file appear to be one type while its final extension indicates another.",
  },
  {
    category: "Updates",
    prompt: "Where should software updates normally be obtained?",
    choices: [
      "Official device settings, the official application, or an approved app store.",
      "Any urgent browser pop-up.",
      "An unknown email attachment.",
      "A random file-sharing page.",
    ],
    answer: 0,
    explanation:
      "Official settings and approved stores reduce the risk of fake update downloads.",
  },
  {
    category: "Backups",
    prompt: "Why should backups be protected separately?",
    choices: [
      "A separate protected copy is less likely to be affected by the same incident.",
      "Backups should always be public.",
      "Connected backups cannot store files.",
      "Separate backups remove the need for recovery planning.",
    ],
    answer: 0,
    explanation:
      "If a backup is exposed to the same device or account, the same incident may affect both the original and the copy.",
  },
  {
    category: "Defense in Depth",
    prompt: "What does defense in depth mean?",
    choices: [
      "Using several security layers together.",
      "Using only one very long password.",
      "Ignoring alerts until damage appears.",
      "Disabling updates to avoid changes.",
    ],
    answer: 0,
    explanation:
      "Defense in depth combines updates, backups, account security, cautious behavior, monitoring, and reporting.",
  },
  {
    category: "Shared Devices",
    prompt: "A student finds another person’s account open on a shared computer. What is the safest response?",
    choices: [
      "Do not explore the account, sign out if appropriate, and report the issue.",
      "Read messages to identify the owner.",
      "Change the account password.",
      "Save screenshots of private information.",
    ],
    answer: 0,
    explanation:
      "The safest response protects privacy without accessing another person’s information.",
  },
  {
    category: "Containment",
    prompt: "Which action is an example of containment?",
    choices: [
      "Removing an unknown active session.",
      "Posting the password publicly.",
      "Ignoring a security alert.",
      "Reusing a credential on another service.",
    ],
    answer: 0,
    explanation:
      "Containment limits possible harm while the account or device is being secured.",
  },
  {
    category: "Prioritization",
    prompt: "A fictional account has an unknown active session and an old recovery email. What should usually be addressed first?",
    choices: [
      "The unknown active session.",
      "The profile picture.",
      "The account background color.",
      "The public display name.",
    ],
    answer: 0,
    explanation:
      "An unknown active session may represent current unauthorized access and should receive immediate attention.",
  },
  {
    category: "Threat Response",
    prompt: "A suspicious link is followed by MFA prompts, an unknown session, and unreadable files. What is the safest response order?",
    choices: [
      "Deny prompts, remove unknown access, stop using the affected device, report immediately, and recover through trusted support.",
      "Open more files before deciding.",
      "Ignore the session because a backup exists.",
      "Download a random repair tool first.",
    ],
    answer: 0,
    explanation:
      "Current account access and serious file behavior require immediate containment and trusted escalation before recovery.",
  },
];

function scoreMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the major threat-recognition and defense concepts from Module B8.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B8 lessons, study the weak categories, and try again.";
}

export default function CommonCyberThreatsModuleTestPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      answers.reduce<number>(
        (total, selected, index) =>
          total + (selected === questions[index].answer ? 1 : 0),
        0
      ),
    [answers]
  );

  const answeredCount = answers.filter((answer) => answer !== null).length;
  const percentage = Math.round((score / questions.length) * 100);

  const submitTest = () => {
    if (answeredCount !== questions.length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetTest = () => {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B8 Module Test: Common Cyber Threats
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering threats, vulnerabilities, malware,
            ransomware, phishing, social engineering, credential theft, account
            takeover, unsafe files, updates, backups, and safe response.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
            <a
              href="#test-questions"
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Test
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        {submitted && (
          <section className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6 shadow-2xl shadow-cyan-950/30">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Test Results
            </p>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Correct answers</p>
                <p className="mt-2 text-4xl font-black text-white">
                  {score}/{questions.length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Percentage</p>
                <p className="mt-2 text-4xl font-black text-white">
                  {percentage}%
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Status</p>
                <p className="mt-2 text-xl font-black text-white">
                  {percentage >= 80 ? "Ready to continue" : "Review recommended"}
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-200">
              {scoreMessage(score)}
            </p>

            <button
              type="button"
              onClick={resetTest}
              className="mt-5 rounded-xl border border-cyan-400/40 px-5 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400/10"
            >
              Retake Test
            </button>
          </section>
        )}

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Test Instructions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete every question before submitting
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">25 questions</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Multiple-choice and scenario-based threat-recognition questions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">Answers stay hidden</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Scores and explanations appear only after submission.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">Fake examples only</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Do not use real suspicious links, files, credentials, codes, or private information.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-bold text-slate-300">
              <span>Questions answered</span>
              <span>
                {answeredCount}/{questions.length}
              </span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{
                  width: `${(answeredCount / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </section>

        <section id="test-questions" className="grid gap-6 scroll-mt-8">
          {questions.map((question, questionIndex) => (
            <article
              key={`${question.category}-${questionIndex}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  {question.category}
                </span>
                <span className="text-sm font-bold text-slate-400">
                  Question {questionIndex + 1} of {questions.length}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-black leading-8 text-white">
                {questionIndex + 1}. {question.prompt}
              </h2>

              <div className="mt-5 grid gap-3">
                {question.choices.map((choice, choiceIndex) => {
                  const selected = answers[questionIndex] === choiceIndex;
                  const isCorrect = question.answer === choiceIndex;

                  return (
                    <button
                      key={choice}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        setAnswers((current) =>
                          current.map((answer, index) =>
                            index === questionIndex ? choiceIndex : answer
                          )
                        )
                      }
                      className={`rounded-xl border p-4 text-left leading-7 transition ${
                        submitted
                          ? isCorrect
                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                            : selected
                              ? "border-red-400 bg-red-400/10 text-red-100"
                              : "border-slate-800 bg-slate-950 text-slate-400"
                          : selected
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                            : "border-slate-700 bg-slate-950 text-slate-200 hover:border-cyan-400"
                      }`}
                    >
                      <span className="mr-3 font-black">
                        {String.fromCharCode(65 + choiceIndex)}.
                      </span>
                      {choice}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950 p-5">
                  <p className="font-black text-cyan-200">Explanation</p>
                  <p className="mt-2 leading-7 text-slate-300">
                    {question.explanation}
                  </p>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          {!submitted ? (
            <>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Submit Module Test
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                {answeredCount === questions.length
                  ? "All questions are answered"
                  : `${questions.length - answeredCount} question${
                      questions.length - answeredCount === 1 ? "" : "s"
                    } remaining`}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                Your score and answer explanations will appear only after you
                submit the complete test.
              </p>
              <button
                type="button"
                onClick={submitTest}
                disabled={answeredCount !== questions.length}
                className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit Test
              </button>
            </>
          ) : (
            <>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Test Submitted
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Review every explanation before leaving
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                Use the explanations to identify which Module B8 lessons you
                should review before continuing.
              </p>
              <button
                type="button"
                onClick={resetTest}
                className="mt-5 rounded-xl border border-cyan-400/40 px-6 py-3 font-black text-cyan-100 transition hover:bg-cyan-400/10"
              >
                Retake Test
              </button>
            </>
          )}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Module B8 Navigation
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B8.7 Threat Recognition Lab
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
            <a
              href="#test-questions"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Review Questions
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}