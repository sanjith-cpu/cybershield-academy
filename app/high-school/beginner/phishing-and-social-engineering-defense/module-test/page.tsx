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
  "/high-school/beginner/phishing-and-social-engineering-defense";
const previousLesson = `${modulePath}/phishing-defense-lab`;

const questions: Question[] = [
  {
    category: "Social Engineering",
    prompt: "What is social engineering?",
    choices: [
      "Using psychological pressure or trust to influence someone into taking an unsafe action.",
      "Installing official software updates.",
      "Creating a protected backup.",
      "Changing a device wallpaper.",
    ],
    answer: 0,
    explanation:
      "Social engineering targets human decisions through pressure, emotion, authority, trust, curiosity, scarcity, or rewards.",
  },
  {
    category: "Manipulation Tactics",
    prompt: "Which message uses urgency as a manipulation tactic?",
    choices: [
      "Act within five minutes or your account will be permanently deleted.",
      "Review the announcement when convenient.",
      "The assignment is due next Friday.",
      "The official portal will be updated tonight.",
    ],
    answer: 0,
    explanation:
      "Urgency pressures the target to act before checking the request carefully.",
  },
  {
    category: "Manipulation Tactics",
    prompt: "Why is a demand for secrecy suspicious?",
    choices: [
      "It may prevent the target from asking a trusted person to verify the request.",
      "All private communication is harmful.",
      "Official organizations never communicate directly.",
      "Secrecy automatically protects an account.",
    ],
    answer: 0,
    explanation:
      "Manipulative requests often discourage outside verification because trusted help may expose the deception.",
  },
  {
    category: "Email Analysis",
    prompt: "Why is an email display name not enough to prove who sent the message?",
    choices: [
      "Display names can be copied or changed.",
      "Display names always show the full domain.",
      "Only attachments identify senders.",
      "Every display name is verified automatically.",
    ],
    answer: 0,
    explanation:
      "A familiar display name can be copied, so the full sender address, domain, and context must also be checked.",
  },
  {
    category: "Email Analysis",
    prompt: "Which sender detail is the strongest warning sign?",
    choices: [
      "The message claims to be from School Support but uses an unrelated domain.",
      "The email contains a greeting.",
      "The message was received in the morning.",
      "The subject line is short.",
    ],
    answer: 0,
    explanation:
      "A mismatch between the claimed identity and the actual sender domain is a major phishing clue.",
  },
  {
    category: "Email Analysis",
    prompt: "What is the safest response to an urgent account-warning email?",
    choices: [
      "Open the official service directly and review alerts there.",
      "Click the email link immediately.",
      "Reply with the account password.",
      "Forward the email to classmates.",
    ],
    answer: 0,
    explanation:
      "Urgent account claims should be verified through the official service rather than through the message.",
  },
  {
    category: "Smishing",
    prompt: "What is smishing?",
    choices: [
      "Phishing delivered through text or mobile-message channels.",
      "A normal phone update.",
      "A protected backup method.",
      "A device repair process.",
    ],
    answer: 0,
    explanation:
      "Smishing is phishing delivered through texts, chat apps, or similar mobile-message channels.",
  },
  {
    category: "Vishing",
    prompt: "What is vishing?",
    choices: [
      "Voice phishing through phone calls or voicemail.",
      "A verified video meeting.",
      "A trusted school announcement.",
      "A password manager feature.",
    ],
    answer: 0,
    explanation:
      "Vishing uses phone calls, voicemail, or other voice communication to pressure people into unsafe actions.",
  },
  {
    category: "Phone Safety",
    prompt: "Why should caller ID not be trusted by itself?",
    choices: [
      "Caller ID can be spoofed to display a familiar number.",
      "Caller ID never appears.",
      "Only businesses can place calls.",
      "Every unknown call is safe.",
    ],
    answer: 0,
    explanation:
      "A displayed number can be manipulated, so important requests should be verified through a known official number.",
  },
  {
    category: "Social Media Scams",
    prompt:
      "A familiar social profile asks for emergency money and says not to call. What is the safest response?",
    choices: [
      "Verify the person through another known channel before sending anything.",
      "Send money immediately.",
      "Ask for the account password.",
      "Share the request publicly.",
    ],
    answer: 0,
    explanation:
      "The account may be copied or compromised, so separate verification is necessary.",
  },
  {
    category: "Impersonation",
    prompt: "What is impersonation?",
    choices: [
      "Pretending to be a trusted person, organization, or authority.",
      "A normal software update.",
      "A protected backup process.",
      "A verified support request.",
    ],
    answer: 0,
    explanation:
      "Impersonation copies trusted identities to make a deceptive request appear legitimate.",
  },
  {
    category: "Fake Support",
    prompt: "What should happen when a support message requests an MFA code?",
    choices: [
      "Do not share it; verify support through the official organization.",
      "Share it because support needs it.",
      "Post it in a group chat.",
      "Approve every login request.",
    ],
    answer: 0,
    explanation:
      "MFA codes can complete authentication and must remain private.",
  },
  {
    category: "Fake Support",
    prompt: "Why is an unexpected remote-access request dangerous?",
    choices: [
      "It may give an unverified person control of the device.",
      "Remote access always improves security.",
      "It automatically creates a backup.",
      "It removes the need for passwords.",
    ],
    answer: 0,
    explanation:
      "Remote access can expose files, accounts, and device control, so the request must be independently verified.",
  },
  {
    category: "Recovery Secrets",
    prompt: "What should a student do if a caller requests a recovery code?",
    choices: [
      "End the call and contact the organization through an official known channel.",
      "Share the code immediately.",
      "Post the code online.",
      "Use the same call to verify the caller.",
    ],
    answer: 0,
    explanation:
      "Recovery codes can restore account access and should never be shared with an unverified caller.",
  },
  {
    category: "Link Judgment",
    prompt: "Why can a shortened link be risky?",
    choices: [
      "It hides the full destination from view.",
      "It always belongs to a school.",
      "It cannot open a website.",
      "It automatically verifies the sender.",
    ],
    answer: 0,
    explanation:
      "Shortened links make it harder to judge the destination before interaction.",
  },
  {
    category: "Link Judgment",
    prompt: "What is the safest response to a suspicious login link?",
    choices: [
      "Open the official website or app directly instead of using the link.",
      "Click because the logo looks real.",
      "Enter a password to test the page.",
      "Forward the link to classmates.",
    ],
    answer: 0,
    explanation:
      "Opening the official service directly avoids relying on an unverified destination.",
  },
  {
    category: "Attachment Judgment",
    prompt: "Which filename is the strongest warning sign?",
    choices: [
      "Homework.pdf.exe",
      "Notes.pdf",
      "Photo.jpg",
      "Essay.docx",
    ],
    answer: 0,
    explanation:
      "A double extension may disguise an executable file as a document.",
  },
  {
    category: "Attachment Judgment",
    prompt:
      "What should a student do with an unexpected attachment from a familiar display name?",
    choices: [
      "Do not open it; verify through a separate trusted channel.",
      "Open it because the name is familiar.",
      "Rename the file and try again.",
      "Upload it to another website for testing.",
    ],
    answer: 0,
    explanation:
      "Display names can be copied, and unexpected files should be verified independently.",
  },
  {
    category: "Safe Updates",
    prompt: "Where should software updates normally come from?",
    choices: [
      "Official device settings, the official app, or an approved app store.",
      "Any urgent browser pop-up.",
      "A random message attachment.",
      "An unknown file-sharing page.",
    ],
    answer: 0,
    explanation:
      "Official update channels reduce the risk of fake or harmful downloads.",
  },
  {
    category: "Reporting",
    prompt: "What should a useful phishing report include?",
    choices: [
      "Safe facts such as time, sender, channel, request, warning signs, and actions taken.",
      "The user’s real password.",
      "A forwarded suspicious attachment.",
      "Private recovery codes.",
    ],
    answer: 0,
    explanation:
      "Useful reports include clear safe facts without exposing secrets or spreading suspicious content.",
  },
  {
    category: "Reporting",
    prompt: "Why should suspicious files not be forwarded with a report?",
    choices: [
      "Forwarding may spread the risk to other people.",
      "Files can never be described.",
      "Reports should contain no details.",
      "Only administrators can receive email.",
    ],
    answer: 0,
    explanation:
      "Reports should describe the file safely rather than spreading the suspicious attachment.",
  },
  {
    category: "Incident Response",
    prompt: "What should happen if a student clicked a suspicious link?",
    choices: [
      "Stop further interaction, report honestly, and follow trusted account or device recovery steps.",
      "Hide the event and hope nothing happens.",
      "Keep clicking to investigate.",
      "Share the password in the report.",
    ],
    answer: 0,
    explanation:
      "Fast, honest reporting helps trusted responders contain possible harm before it grows.",
  },
  {
    category: "Account Containment",
    prompt: "What should happen after an unexpected MFA prompt?",
    choices: [
      "Deny it, review official account activity, and report the event if needed.",
      "Approve it to stop the notification.",
      "Share the code with a friend.",
      "Disable all alerts.",
    ],
    answer: 0,
    explanation:
      "Unexpected MFA prompts may signal attempted access and should be denied and reviewed.",
  },
  {
    category: "Account Containment",
    prompt:
      "A suspicious link is followed by an unknown active browser session. What should happen first?",
    choices: [
      "Remove the unknown session through the official service and replace the exposed credential.",
      "Ignore it because the account still works.",
      "Approve the next MFA prompt.",
      "Return to the suspicious page.",
    ],
    answer: 0,
    explanation:
      "Current unauthorized access should be contained immediately through official account tools.",
  },
  {
    category: "Phishing Defense Lab",
    prompt:
      "A fictional student receives an urgent teacher-style email, enters a password on a look-alike page, denies an MFA prompt, sees an unknown session, and gets a fake support call. What is the safest response order?",
    choices: [
      "End the call, remove unknown access, replace the credential, review MFA and recovery, and report immediately.",
      "Share the recovery code with the caller.",
      "Ignore the session because the MFA prompt was denied.",
      "Open the attachment to gather more evidence.",
    ],
    answer: 0,
    explanation:
      "The active session and exposed password require immediate containment, followed by trusted reporting and recovery.",
  },
];

function resultMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the major phishing and social-engineering defense concepts from Module B9.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B9 lessons, study the weak categories, and try again.";
}

export default function PhishingSocialEngineeringModuleTestPage() {
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
              Module B9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B9 Module Test: Phishing and Social Engineering Defense
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering manipulation tactics, phishing email
            clues, smishing, vishing, social media scams, impersonation, fake
            support, links, attachments, reporting, containment, and recovery.
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
              {resultMessage(score)}
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
                Multiple-choice and scenario-based phishing-defense questions.
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
                Do not use real suspicious links, files, credentials, codes,
                payment details, phone numbers, or private information.
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
                Use the explanations to identify which Module B9 lessons you
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
            Module B9 Navigation
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B9.7 Phishing Defense Lab
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