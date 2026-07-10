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

const modulePath =
  "/high-school/beginner/passwords-authentication-and-account-security";
const previousLesson = `${modulePath}/authentication-scenario-lab`;

const questions: Question[] = [
  {
    category: "Authentication",
    prompt: "What is the main purpose of authentication?",
    choices: [
      "To decide which color an account page should use.",
      "To verify that trusted evidence supports an identity claim.",
      "To make every account public.",
      "To remove all account permissions.",
    ],
    answer: 1,
    explanation:
      "Authentication checks whether the person, device, or service claiming an identity can provide acceptable evidence.",
  },
  {
    category: "Authentication",
    prompt: "Which statement correctly separates authentication from authorization?",
    choices: [
      "Authentication verifies identity; authorization decides what the verified identity may access.",
      "Authentication creates usernames; authorization creates passwords.",
      "Authentication is only for students; authorization is only for teachers.",
      "They always mean exactly the same thing.",
    ],
    answer: 0,
    explanation:
      "Authentication answers who is signing in, while authorization determines what that verified identity is allowed to do.",
  },
  {
    category: "Credentials",
    prompt: "Which item is the best example of a credential?",
    choices: [
      "A public club announcement.",
      "A website background image.",
      "A passphrase used to prove control of an account.",
      "A device battery percentage.",
    ],
    answer: 2,
    explanation:
      "A credential is evidence used during authentication, such as a passphrase, approved device, security key, or biometric.",
  },
  {
    category: "Passphrases",
    prompt: "Which change usually makes a login secret stronger?",
    choices: [
      "Using a longer, less predictable, unique passphrase.",
      "Adding the current year to a school name.",
      "Replacing one letter in a common word with a symbol.",
      "Reusing the same password on every account.",
    ],
    answer: 0,
    explanation:
      "Strong credentials combine length, lower predictability, uniqueness, and safe handling.",
  },
  {
    category: "Passphrases",
    prompt: "Which fake credential is most predictable?",
    choices: [
      "Orbit-Canvas-Lemon-Train",
      "Copper-Window-Cloud-Pencil",
      "Falcons2026!",
      "Mango-Bridge-River-Clock",
    ],
    answer: 2,
    explanation:
      "A team name and current year may be easy to discover or guess from public information.",
  },
  {
    category: "Password Reuse",
    prompt: "Why is password reuse dangerous?",
    choices: [
      "It automatically enables MFA.",
      "One exposed credential may place several accounts at risk.",
      "It makes every password longer.",
      "It removes the need for account recovery.",
    ],
    answer: 1,
    explanation:
      "Reuse connects the security of multiple accounts. If one credential is exposed, other accounts using it may also be targeted.",
  },
  {
    category: "Password Managers",
    prompt: "What is the main benefit of a password manager?",
    choices: [
      "It helps users store and use unique credentials for different accounts.",
      "It makes every website trustworthy.",
      "It allows one password to be reused everywhere.",
      "It removes the need for MFA.",
    ],
    answer: 0,
    explanation:
      "A password manager supports unique credentials so one exposed password does not place every account at risk.",
  },
  {
    category: "Password Managers",
    prompt: "What should be true about a password manager master password?",
    choices: [
      "It should match the school email password.",
      "It should be shared with close friends.",
      "It should be long, unique, private, and used nowhere else.",
      "It should be stored in a public note.",
    ],
    answer: 2,
    explanation:
      "The master password protects the vault, so it must be unique and carefully protected.",
  },
  {
    category: "Autofill Safety",
    prompt: "A password manager does not autofill on a page that looks like the school portal. What is the safest response?",
    choices: [
      "Manually paste the password because the page looks familiar.",
      "Check the domain and open the official portal through a trusted link or bookmark.",
      "Send the password to a friend for testing.",
      "Disable the password manager.",
    ],
    answer: 1,
    explanation:
      "Missing autofill can be a clue that the page does not match the saved official domain, so the user should verify the site.",
  },
  {
    category: "MFA",
    prompt: "What makes authentication truly multi-factor?",
    choices: [
      "It asks for the same password twice.",
      "It uses two usernames.",
      "It uses evidence from two or more different factor categories.",
      "It opens two browser tabs.",
    ],
    answer: 2,
    explanation:
      "MFA combines independent categories such as something known and something possessed.",
  },
  {
    category: "MFA",
    prompt: "Which pair represents two different authentication factors?",
    choices: [
      "A password and a second password.",
      "A passphrase and an authenticator app code.",
      "A PIN and a security question.",
      "A username and an email address.",
    ],
    answer: 1,
    explanation:
      "A passphrase is a knowledge factor, while an authenticator app code is connected to a possession factor.",
  },
  {
    category: "MFA Prompts",
    prompt: "What should a user do with an unexpected MFA approval prompt?",
    choices: [
      "Approve it to stop the notifications.",
      "Share it with a classmate.",
      "Deny it and review official account activity.",
      "Disable every security alert.",
    ],
    answer: 2,
    explanation:
      "An unexpected prompt may mean someone else is attempting access, so it should be denied and reviewed safely.",
  },
  {
    category: "Verification Codes",
    prompt: "Why should one-time verification codes never be shared?",
    choices: [
      "They can complete authentication and allow another person to access the account.",
      "They are always public information.",
      "They make passwords shorter.",
      "They cannot be used during login.",
    ],
    answer: 0,
    explanation:
      "A one-time code can be the final proof needed to complete a login, so it must remain private.",
  },
  {
    category: "MFA Fatigue",
    prompt: "What is MFA fatigue?",
    choices: [
      "A phone battery reaching zero.",
      "Repeated approval prompts that pressure a user into accepting one.",
      "A password manager storing many entries.",
      "A website loading slowly.",
    ],
    answer: 1,
    explanation:
      "MFA fatigue relies on repeated prompts and user frustration, so unexpected requests should be denied and investigated.",
  },
  {
    category: "Recovery",
    prompt: "What is the safest way to begin account recovery?",
    choices: [
      "Click the first link in an unexpected message.",
      "Ask a friend to enter the password.",
      "Open the official service directly through a trusted bookmark, app, or known website.",
      "Post the account problem publicly.",
    ],
    answer: 2,
    explanation:
      "Recovery should begin through the official service so the user does not give credentials or codes to an impersonator.",
  },
  {
    category: "Recovery",
    prompt: "Why should recovery information be reviewed before an emergency?",
    choices: [
      "Old or inaccessible recovery methods may prevent the real owner from restoring access.",
      "Recovery information should always be public.",
      "It removes the need for authentication.",
      "It guarantees that alerts are unnecessary.",
    ],
    answer: 0,
    explanation:
      "Current recovery email, phone, backup codes, and trusted devices make legitimate recovery more reliable.",
  },
  {
    category: "Backup Codes",
    prompt: "How should backup recovery codes be handled?",
    choices: [
      "Posted in a private group chat.",
      "Stored privately in a protected location and never shared.",
      "Used as the same password on every account.",
      "Attached to a public profile.",
    ],
    answer: 1,
    explanation:
      "Backup codes can restore account access, so they must be treated like sensitive credentials.",
  },
  {
    category: "Login Alerts",
    prompt: "What makes a login alert most useful?",
    choices: [
      "Deleting it immediately.",
      "Approving it without reading the details.",
      "Reviewing whether the device, time, location, and action match expected activity.",
      "Forwarding it to strangers.",
    ],
    answer: 2,
    explanation:
      "Alert details help the account owner decide whether the activity is expected or suspicious.",
  },
  {
    category: "Active Sessions",
    prompt: "What is the safest response to an unknown active browser session?",
    choices: [
      "Remove it, review recent activity, and secure the account if needed.",
      "Rename it and keep it connected.",
      "Disable all alerts.",
      "Send the account password to a friend.",
    ],
    answer: 0,
    explanation:
      "Unknown sessions should be removed and the account should be reviewed for additional signs of unauthorized access.",
  },
  {
    category: "Layered Security",
    prompt: "What does layered account security mean?",
    choices: [
      "Using the same password on every account.",
      "Using several protections together so one failure is not enough.",
      "Disabling MFA after creating a strong password.",
      "Ignoring recovery settings.",
    ],
    answer: 1,
    explanation:
      "Layered security combines unique credentials, MFA, recovery readiness, alerts, and activity review.",
  },
  {
    category: "Security Checklist",
    prompt: "Which group belongs in a complete account security checklist?",
    choices: [
      "Credentials, MFA, recovery methods, devices, sessions, and alerts.",
      "Only profile colors and background images.",
      "Only the username.",
      "Only the account creation date.",
    ],
    answer: 0,
    explanation:
      "A complete review covers prevention, verification, recovery, and monitoring layers.",
  },
  {
    category: "Shared Devices",
    prompt: "A student finds another person’s school account still open on a shared computer. What is the safest response?",
    choices: [
      "Read the messages to identify the owner.",
      "Change the account password.",
      "Do not explore the account, sign out if appropriate, and report the issue.",
      "Save screenshots of private information.",
    ],
    answer: 2,
    explanation:
      "The correct defensive response protects the exposed account without accessing another person’s private information.",
  },
  {
    category: "Incident Response",
    prompt: "Which action is an example of containment?",
    choices: [
      "Removing an unknown active session.",
      "Posting the password publicly.",
      "Ignoring the alert.",
      "Reusing the credential on another service.",
    ],
    answer: 0,
    explanation:
      "Containment limits possible unauthorized access while the account owner continues the security review.",
  },
  {
    category: "Risk Prioritization",
    prompt: "A fictional account has an unknown active session, an old recovery email, and a strong unique password. What should usually be addressed first?",
    choices: [
      "The profile picture.",
      "The unknown active session.",
      "The background color.",
      "The public display name.",
    ],
    answer: 1,
    explanation:
      "An unknown active session may represent current unauthorized access and should receive immediate attention.",
  },
  {
    category: "Safe Response",
    prompt: "A message demands a recovery code and says the account will be deleted in five minutes. What is the safest response?",
    choices: [
      "Send the code because the deadline is urgent.",
      "Post the code in a group chat for advice.",
      "Do not share the code; open the official service directly and contact trusted support.",
      "Approve every future login prompt.",
    ],
    answer: 2,
    explanation:
      "Urgency and a request for a recovery code are warning signs. The account should be checked through official channels without sharing the secret.",
  },
];

function scoreMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the main account-security concepts from Module B7.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B7 lessons, study the weak categories, and try again.";
}

export default function PasswordsAuthenticationAccountSecurityModuleTestPage() {
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
              Module B7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B7 Module Test: Passwords, Authentication, and Account Security
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering authentication, passphrases,
            password managers, password reuse, MFA, recovery, login alerts,
            layered security, and safe account-incident decisions.
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
                Multiple-choice and scenario-based account-security questions.
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
                Do not enter real passwords, codes, recovery details, or account information.
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
                Use the explanations to identify which Module B7 lessons you
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
            Module B7 Navigation
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B7.7 Authentication Scenario Lab
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