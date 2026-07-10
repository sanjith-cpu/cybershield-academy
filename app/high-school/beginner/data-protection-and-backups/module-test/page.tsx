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
  "/high-school/beginner/data-protection-and-backups";
const previousLesson = `${modulePath}/backup-planning-lab`;

const questions: Question[] = [
  {
    category: "Data Value",
    prompt: "Why does data need protection?",
    choices: [
      "Because exposure, misuse, alteration, loss, or unavailability can harm people and organizations.",
      "Because every file must remain secret forever.",
      "Because backups replace every other safeguard.",
      "Because only passwords have value.",
    ],
    answer: 0,
    explanation:
      "Data can affect privacy, trust, schoolwork, finances, safety, decisions, and operations.",
  },
  {
    category: "Sensitive Data",
    prompt: "What is sensitive data?",
    choices: [
      "Information that could create harm or privacy problems if exposed, changed, or misused.",
      "Any file with a long name.",
      "Only public announcements.",
      "Only information stored on paper.",
    ],
    answer: 0,
    explanation:
      "Sensitivity depends on the possible impact of exposure, misuse, alteration, or loss.",
  },
  {
    category: "Ownership",
    prompt: "Who is the data owner?",
    choices: [
      "The person or organization responsible for approved use, access, sharing, retention, and protection.",
      "Anyone who downloads the file.",
      "The newest user in the folder.",
      "Every person on the internet.",
    ],
    answer: 0,
    explanation:
      "Ownership identifies responsibility for how the data is handled through its lifecycle.",
  },
  {
    category: "Confidentiality",
    prompt: "What does confidentiality protect?",
    choices: [
      "Data from being viewed or used by unauthorized people.",
      "Only the speed of a service.",
      "Only file availability.",
      "Only public information.",
    ],
    answer: 0,
    explanation:
      "Confidentiality limits data access to approved users and purposes.",
  },
  {
    category: "Integrity",
    prompt: "What does integrity protect?",
    choices: [
      "The accuracy, completeness, and trustworthiness of data.",
      "Only the physical device location.",
      "Only internet speed.",
      "Only account recovery.",
    ],
    answer: 0,
    explanation:
      "Integrity means data has not been changed, damaged, or replaced improperly.",
  },
  {
    category: "Availability",
    prompt: "What does availability protect?",
    choices: [
      "Authorized access to data and services when they are needed.",
      "Only file secrecy.",
      "Only app permissions.",
      "Only version names.",
    ],
    answer: 0,
    explanation:
      "Availability ensures approved users can reach reliable data and services when required.",
  },
  {
    category: "CIA Triad",
    prompt:
      "A shared file is public, several values were changed, and the service is down before a meeting. Which CIA goals are affected?",
    choices: [
      "Confidentiality, integrity, and availability.",
      "Confidentiality only.",
      "Integrity only.",
      "Availability only.",
    ],
    answer: 0,
    explanation:
      "Public exposure affects confidentiality, changed values affect integrity, and service failure affects availability.",
  },
  {
    category: "Classification",
    prompt: "What is data classification?",
    choices: [
      "Assigning a protection label based on sensitivity, impact, ownership, and approved access.",
      "Changing every file into a PDF.",
      "Sharing all files with the same group.",
      "Deleting every old folder.",
    ],
    answer: 0,
    explanation:
      "Classification connects data value and sensitivity with the correct handling rules.",
  },
  {
    category: "Public Data",
    prompt: "Which item is most likely public data?",
    choices: [
      "An approved event flyer intended for broad release.",
      "A medical accommodation record.",
      "A student contact list.",
      "An internal planning document.",
    ],
    answer: 0,
    explanation:
      "Public data is intentionally approved for broad distribution.",
  },
  {
    category: "Private Data",
    prompt:
      "How should a private student contact list normally be handled?",
    choices: [
      "Limit access to approved users and avoid public links.",
      "Place it in a public folder.",
      "Give everyone edit access.",
      "Post it in a public chat.",
    ],
    answer: 0,
    explanation:
      "Private data should be shared only with approved users through trusted methods.",
  },
  {
    category: "File Naming",
    prompt: "Why are clear filenames important?",
    choices: [
      "They help identify ownership, purpose, date, version, and trusted content.",
      "They replace backups.",
      "They make every file public.",
      "They remove the need for access controls.",
    ],
    answer: 0,
    explanation:
      "Clear naming reduces confusion, duplicate files, overwriting, and use of the wrong version.",
  },
  {
    category: "Retention",
    prompt: "What should determine data retention?",
    choices: [
      "Approved purpose, ownership, policy, value, and recovery or legal needs.",
      "Whether the filename is short.",
      "Whether the folder is old.",
      "Whether the file is colorful.",
    ],
    answer: 0,
    explanation:
      "Retention should follow approved rules rather than random deletion or indefinite storage.",
  },
  {
    category: "Cloud Sharing",
    prompt: "What is the safest way to share a private cloud file?",
    choices: [
      "Invite specific approved people and give the minimum access they need.",
      "Create a public edit link.",
      "Post the link publicly.",
      "Give everyone management access.",
    ],
    answer: 0,
    explanation:
      "Specific users and minimum permissions reduce exposure and editing risk.",
  },
  {
    category: "Permissions",
    prompt:
      "A reviewer only needs to give feedback without editing the file. Which permission is best?",
    choices: [
      "Comment access.",
      "Manage access.",
      "Public edit access.",
      "Owner access.",
    ],
    answer: 0,
    explanation:
      "Comment access matches the task without granting unnecessary editing or management control.",
  },
  {
    category: "Synchronization",
    prompt: "What does synchronization do?",
    choices: [
      "Keeps file changes consistent across connected devices and cloud storage.",
      "Guarantees every deletion can always be recovered.",
      "Replaces all backups.",
      "Makes every file public.",
    ],
    answer: 0,
    explanation:
      "Synchronization copies changes across connected locations, including mistakes.",
  },
  {
    category: "Version History",
    prompt: "Why is version history useful?",
    choices: [
      "It can help identify and restore an earlier trusted version of a file.",
      "It replaces account security.",
      "It prevents every possible mistake.",
      "It removes the need for ownership.",
    ],
    answer: 0,
    explanation:
      "Version history supports integrity and recovery after accidental or unauthorized changes.",
  },
  {
    category: "Full Backup",
    prompt: "What is a full backup?",
    choices: [
      "A complete copy of the selected data at a point in time.",
      "Only data changed since the last backup.",
      "Only deleted files.",
      "A public cloud folder.",
    ],
    answer: 0,
    explanation:
      "A full backup copies the entire selected data set.",
  },
  {
    category: "Incremental Backup",
    prompt: "What does an incremental backup copy?",
    choices: [
      "Data changed since the most recent backup of any type.",
      "The complete data set every time.",
      "Only public files.",
      "Only data changed since the last full backup.",
    ],
    answer: 0,
    explanation:
      "Incremental backups usually save time and storage by copying only the newest changes.",
  },
  {
    category: "Differential Backup",
    prompt: "What does a differential backup copy?",
    choices: [
      "Data changed since the most recent full backup.",
      "Only data changed since the most recent incremental backup.",
      "The complete data set every time.",
      "Only files stored offline.",
    ],
    answer: 0,
    explanation:
      "A differential backup grows as changes accumulate after the last full backup.",
  },
  {
    category: "Recovery Point",
    prompt: "What does recovery point objective describe?",
    choices: [
      "How much recent data loss is acceptable.",
      "How many users may edit a file.",
      "How long a password should be.",
      "How many folders exist.",
    ],
    answer: 0,
    explanation:
      "The recovery point objective defines how current the restored data should be.",
  },
  {
    category: "Recovery Time",
    prompt: "What does recovery time objective describe?",
    choices: [
      "How quickly data or service should be restored.",
      "How often a file is shared.",
      "How many backup copies exist.",
      "How old a device is.",
    ],
    answer: 0,
    explanation:
      "The recovery time objective sets a target for recovery duration.",
  },
  {
    category: "Backup Separation",
    prompt: "Why should backups be appropriately separated from original data?",
    choices: [
      "So one device failure, account issue, mistake, or event does not affect every copy.",
      "So every backup can be public.",
      "So access controls are unnecessary.",
      "So recovery can be skipped.",
    ],
    answer: 0,
    explanation:
      "Separation reduces single-device, single-account, and single-location risk.",
  },
  {
    category: "Human Error",
    prompt: "What should happen first after accidental data loss?",
    choices: [
      "Contain the problem and report it through the approved process.",
      "Keep making changes until the issue disappears.",
      "Hide the mistake.",
      "Delete all remaining versions.",
    ],
    answer: 0,
    explanation:
      "Fast containment and reporting preserve recovery options and reduce additional damage.",
  },
  {
    category: "Wrong Recipient",
    prompt: "What should happen after a private file is sent to the wrong person?",
    choices: [
      "Report immediately and follow approved containment and access-review steps.",
      "Ignore the mistake.",
      "Forward the file to more people.",
      "Share account credentials to remove it.",
    ],
    answer: 0,
    explanation:
      "Wrong-recipient sharing requires quick reporting and official containment.",
  },
  {
    category: "Backup Planning",
    prompt:
      "A private project changes daily, cannot lose more than one day of work, and currently has only one copy on one laptop. What is the best plan?",
    choices: [
      "Use daily protected backups to a separate approved location, limit access, define retention, and verify recovery.",
      "Create one backup at the end of the semester.",
      "Save a second folder on the same laptop and stop there.",
      "Publish the project publicly as a backup.",
    ],
    answer: 0,
    explanation:
      "The plan matches classification, change rate, recovery point, access, separation, retention, and verification.",
  },
];

function resultMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the major data protection and backup concepts from Module B11.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B11 lessons, study the weak categories, and try again.";
}

export default function DataProtectionBackupsModuleTestPage() {
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
              Module B11
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B11 Module Test: Data Protection and Backups
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering data value, the CIA triad,
            classification, file organization, cloud storage, permissions,
            backup types, recovery goals, human error, and backup planning.
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
                Multiple-choice and scenario-based data-protection questions.
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
                Do not use real private data, cloud links, credentials,
                recovery codes, important live files, or managed settings.
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
                Use the explanations to identify which Module B11 lessons you
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
            Module B11 Navigation
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B11.7 Backup Planning Lab
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