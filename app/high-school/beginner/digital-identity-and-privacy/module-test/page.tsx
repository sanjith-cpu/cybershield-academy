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

const modulePath = "/high-school/beginner/digital-identity-and-privacy";
const previousLesson = `${modulePath}/privacy-review-lab`;

const questions: Question[] = [
  {
    category: "Digital Identity",
    prompt: "Which statement best describes a digital identity?",
    choices: [
      "The collection of information, accounts, activity, and content connected to a person online.",
      "Only a person’s profile picture.",
      "Only information stored on one phone.",
      "A password used for every account.",
    ],
    answer: 0,
    explanation:
      "Digital identity includes many connected pieces such as profiles, usernames, posts, activity, records, and information added by other people or systems.",
  },
  {
    category: "Data Types",
    prompt: "Which item is most clearly private data?",
    choices: [
      "A school club’s public meeting date.",
      "A personal account recovery code.",
      "A public project title.",
      "A general cybersecurity definition.",
    ],
    answer: 1,
    explanation:
      "An account recovery code can provide access to an account and should be protected as private information.",
  },
  {
    category: "Metadata",
    prompt: "What is metadata?",
    choices: [
      "Information that describes other data, such as timestamps, file type, or location details.",
      "A guarantee that a file is safe.",
      "A type of public password.",
      "A setting that deletes every copy of a file.",
    ],
    answer: 0,
    explanation:
      "Metadata describes other data and may include creation time, device details, location, file type, author, or modification history.",
  },
  {
    category: "Metadata",
    prompt: "A photo does not show an address, but its location metadata identifies where it was taken. What does this demonstrate?",
    choices: [
      "Files can reveal information that is not visible in the main content.",
      "Metadata can never affect privacy.",
      "Every photo should be posted publicly.",
      "Location data is always required.",
    ],
    answer: 0,
    explanation:
      "Metadata can reveal context that is not visible in the image itself, so files should be reviewed before sharing.",
  },
  {
    category: "Data Collection",
    prompt: "Which is an example of information a user directly provides?",
    choices: [
      "A profile name typed into an account form.",
      "A crash report generated automatically.",
      "A login timestamp added by a server.",
      "A browser detecting screen size.",
    ],
    answer: 0,
    explanation:
      "Information entered into a form or profile is directly provided by the user.",
  },
  {
    category: "Data Collection",
    prompt: "Which example best represents telemetry?",
    choices: [
      "Automatic information about crashes, errors, performance, or feature use.",
      "A handwritten note stored in a locker.",
      "A student’s spoken answer in class.",
      "A printed poster with no digital component.",
    ],
    answer: 0,
    explanation:
      "Telemetry commonly includes technical and usage information that helps a service understand performance and activity.",
  },
  {
    category: "Permissions",
    prompt: "A calculator app asks for microphone access. What is the safest beginner response?",
    choices: [
      "Allow it because every app needs microphone access.",
      "Deny or pause the permission because it does not match the app’s purpose.",
      "Share the device password with a friend.",
      "Post the permission request publicly with private account details.",
    ],
    answer: 1,
    explanation:
      "Permissions should match the app’s purpose. A calculator normally has no clear need for microphone access.",
  },
  {
    category: "Permissions",
    prompt: "Why should students review connected services and third-party tools?",
    choices: [
      "They may collect or receive information in addition to the main app or website.",
      "They always make an account completely private.",
      "They remove the need for privacy settings.",
      "They prevent all data collection.",
    ],
    answer: 0,
    explanation:
      "Analytics tools, embedded content, login providers, and other connected services may create additional data flows.",
  },
  {
    category: "Privacy Settings",
    prompt: "Which setting most directly controls who is intended to see a new post?",
    choices: [
      "The post audience setting.",
      "The battery setting.",
      "The screen brightness setting.",
      "The keyboard language setting.",
    ],
    answer: 0,
    explanation:
      "The audience setting determines who is intended to receive or view the post.",
  },
  {
    category: "Privacy Settings",
    prompt: "Why is a private account not a complete privacy solution?",
    choices: [
      "Profile details, tags, messages, permissions, old posts, and approved viewers may still create exposure.",
      "Private accounts never use passwords.",
      "Private accounts automatically delete all metadata.",
      "Private accounts cannot contain posts.",
    ],
    answer: 0,
    explanation:
      "Privacy is made of several separate layers. One account setting does not automatically control every other setting or behavior.",
  },
  {
    category: "Audience Control",
    prompt: "Which audience choice best follows the smallest-necessary-audience rule?",
    choices: [
      "Share a team schedule only with approved team members and coaches.",
      "Post the schedule publicly so anyone can see it.",
      "Add the schedule to a public biography.",
      "Send it to every contact on the device.",
    ],
    answer: 0,
    explanation:
      "The safest audience is the smallest group that genuinely needs the information for the approved purpose.",
  },
  {
    category: "Audience Control",
    prompt: "What is an important limitation of audience controls?",
    choices: [
      "Approved viewers may still screenshot, copy, record, or reshare content.",
      "Audience controls guarantee that content can never be copied.",
      "Audience controls remove every old post automatically.",
      "Audience controls delete all account metadata.",
    ],
    answer: 0,
    explanation:
      "Audience controls reduce exposure but cannot fully control what an approved viewer does after seeing the content.",
  },
  {
    category: "Tagging",
    prompt: "What is the safest use of tag review?",
    choices: [
      "Review certain tags before they appear on a profile.",
      "Automatically accept every tag.",
      "Share the account password so another person can approve tags.",
      "Ignore all tags because they cannot affect identity.",
    ],
    answer: 0,
    explanation:
      "Tag review gives the account owner more control without giving account access to someone else.",
  },
  {
    category: "Digital Footprints",
    prompt: "Which is the best example of an active digital footprint?",
    choices: [
      "A student intentionally posts a public comment.",
      "A service records a login time automatically.",
      "A browser stores a session cookie.",
      "A device reports its operating system.",
    ],
    answer: 0,
    explanation:
      "An active footprint comes from information or activity intentionally created by the user.",
  },
  {
    category: "Digital Footprints",
    prompt: "What is context collapse?",
    choices: [
      "Content meant for one audience is later viewed by a different audience that may interpret it differently.",
      "A device shuts down because its battery is empty.",
      "A file is compressed into a smaller folder.",
      "A private account deletes every post.",
    ],
    answer: 0,
    explanation:
      "Context collapse happens when content travels beyond its original audience and loses the original background or meaning.",
  },
  {
    category: "Future Readiness",
    prompt: "Which action best supports a professional online presence?",
    choices: [
      "Publish school-safe projects and accomplishments without unnecessary private information.",
      "Post exact routines and personal contact details.",
      "Accept every follow request.",
      "Reuse the same password on every account.",
    ],
    answer: 0,
    explanation:
      "A professional presence should show accurate work and accomplishments while protecting private information.",
  },
  {
    category: "Future Readiness",
    prompt: "Which statement about deleting content is most accurate?",
    choices: [
      "Deletion can reduce exposure, but screenshots, backups, copies, or reshares may still exist.",
      "Deletion guarantees no copy exists anywhere.",
      "Deletion automatically removes every related record from every service.",
      "Only private content can be copied.",
    ],
    answer: 0,
    explanation:
      "Deleting content is useful, but it cannot guarantee that all copies or screenshots have disappeared.",
  },
  {
    category: "Data Minimization",
    prompt: "What does data minimization mean?",
    choices: [
      "Collecting, sharing, and storing only what is needed for a clear purpose.",
      "Collecting every available detail.",
      "Making every file public.",
      "Keeping information forever.",
    ],
    answer: 0,
    explanation:
      "Data minimization reduces risk by limiting information to the smallest amount necessary.",
  },
  {
    category: "Data Minimization",
    prompt: "A club form requires a school email but makes home address and full birthday optional. What is the safest choice?",
    choices: [
      "Provide the school email and leave unrelated optional private fields blank.",
      "Fill every field so the form looks complete.",
      "Use another student’s private information.",
      "Post the form publicly.",
    ],
    answer: 0,
    explanation:
      "The school email matches the stated purpose, while the optional private fields appear unnecessary.",
  },
  {
    category: "Need-to-Know",
    prompt: "What does need-to-know access mean?",
    choices: [
      "Only people or systems that require the information for an approved purpose receive access.",
      "Everyone receives access just in case.",
      "The information must be public.",
      "Passwords should be shared with friends.",
    ],
    answer: 0,
    explanation:
      "Need-to-know limits access to the smallest approved group that genuinely requires the information.",
  },
  {
    category: "Shared Files",
    prompt: "A completed group-project folder is still open to anyone with the link. What is the best defensive action?",
    choices: [
      "Review the files, restrict access, and remove outdated viewers after checking school requirements.",
      "Post the link publicly.",
      "Add more private information to the folder.",
      "Ignore it because the project is finished.",
    ],
    answer: 0,
    explanation:
      "Old shared access should be removed when it is no longer needed, while respecting school retention requirements.",
  },
  {
    category: "Privacy Review",
    prompt: "What should happen first in a structured privacy review?",
    choices: [
      "Identify the accounts, settings, audiences, permissions, tags, and shared files that need review.",
      "Delete every account.",
      "Make every item public.",
      "Share account credentials with a friend.",
    ],
    answer: 0,
    explanation:
      "A review begins by identifying the evidence and items that require attention.",
  },
  {
    category: "Risk Prioritization",
    prompt: "Which issue should usually receive the highest priority?",
    choices: [
      "A public profile exposes an exact routine and personal phone number.",
      "A profile uses an old background color.",
      "A private draft has a spelling error.",
      "A school-approved project title is public.",
    ],
    answer: 0,
    explanation:
      "Exact routines and private contact details create stronger personal and physical-safety concerns.",
  },
  {
    category: "Mitigation",
    prompt: "Which is the best example of privacy-risk mitigation?",
    choices: [
      "Remove public private details, narrow the audience, and review related settings.",
      "Ignore the exposure.",
      "Give more people access.",
      "Post the evidence publicly.",
    ],
    answer: 0,
    explanation:
      "Mitigation is a specific defensive action that reduces the identified risk.",
  },
  {
    category: "Safe Response",
    prompt: "A student receives repeated unwanted messages mentioning the student’s routine and location. What is the safest response?",
    choices: [
      "Stop engaging, use block and report tools, preserve appropriate evidence, and involve trusted adults or school staff.",
      "Reply with more private information.",
      "Retaliate by posting the sender’s private information.",
      "Share the account password with classmates.",
    ],
    answer: 0,
    explanation:
      "Serious privacy and safety concerns require platform safety tools, appropriate evidence, and trusted help—not retaliation or private investigation.",
  },
];

function scoreMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the main privacy concepts from Module B6.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B6 lessons, study the weak categories, and try again.";
}

export default function DigitalIdentityPrivacyModuleTestPage() {
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
              Module B6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6 Module Test: Digital Identity and Privacy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering digital identity, personal and
            private data, metadata, app and website collection, privacy
            settings, digital footprints, data minimization, and safe privacy
            decisions.
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
                Multiple-choice and scenario-based privacy questions.
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
                Do not enter real passwords, account details, or private data.
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

        <section
          id="test-questions"
          className="grid gap-6 scroll-mt-8"
        >
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
                Use the explanations to identify which Module B6 lessons you
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
            Module B6 Navigation
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B6.7 Privacy Review Lab
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