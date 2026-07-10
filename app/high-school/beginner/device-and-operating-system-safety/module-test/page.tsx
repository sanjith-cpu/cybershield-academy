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
  "/high-school/beginner/device-and-operating-system-safety";
const previousLesson = `${modulePath}/device-hardening-checklist-lab`;

const questions: Question[] = [
  {
    category: "Device Locks",
    prompt: "What is the main purpose of a device screen lock?",
    choices: [
      "To prevent unauthorized access to the active device session.",
      "To replace every account password.",
      "To make software updates unnecessary.",
      "To improve internet speed.",
    ],
    answer: 0,
    explanation:
      "A screen lock helps protect open accounts, files, and services when the device is unattended.",
  },
  {
    category: "Screen Privacy",
    prompt: "What is shoulder surfing?",
    choices: [
      "Watching someone enter a passcode or view private information without permission.",
      "Updating a device through official settings.",
      "Creating a protected backup.",
      "Connecting an approved external drive.",
    ],
    answer: 0,
    explanation:
      "Shoulder surfing exposes passcodes or private content through nearby observation.",
  },
  {
    category: "Automatic Locking",
    prompt: "Why is automatic locking useful?",
    choices: [
      "It protects the device if the user forgets to lock it manually.",
      "It removes the need for strong passcodes.",
      "It permanently deletes open files.",
      "It prevents all phishing attempts.",
    ],
    answer: 0,
    explanation:
      "Automatic locking adds a backup layer when a user leaves the device unattended.",
  },
  {
    category: "Shared Devices",
    prompt:
      "A previous user’s account is still open on a shared computer. What is the safest response?",
    choices: [
      "Do not explore it; sign out if appropriate and report the issue.",
      "Read the messages to identify the owner.",
      "Change the password.",
      "Save copies of the files.",
    ],
    answer: 0,
    explanation:
      "The safest response protects privacy without accessing another person’s information.",
  },
  {
    category: "Updates",
    prompt: "What is a security patch?",
    choices: [
      "A software change that fixes a security weakness or related problem.",
      "A physical cover placed over a device.",
      "A replacement for account security.",
      "A removable storage device.",
    ],
    answer: 0,
    explanation:
      "Security patches correct known software weaknesses, bugs, or stability issues.",
  },
  {
    category: "Update Sources",
    prompt: "Where should operating-system updates normally come from?",
    choices: [
      "Official device settings or an approved managed update system.",
      "An unexpected browser pop-up.",
      "A random message attachment.",
      "An unknown file-sharing site.",
    ],
    answer: 0,
    explanation:
      "Official update channels reduce the risk of fake or harmful downloads.",
  },
  {
    category: "Restart Requirements",
    prompt: "Why may a restart be required after an operating-system update?",
    choices: [
      "Some system changes cannot finish applying while the operating system is running.",
      "Restarting removes the need for backups.",
      "Restarts automatically verify every app.",
      "Restarting makes passwords unnecessary.",
    ],
    answer: 0,
    explanation:
      "Some system files or services can only be replaced or activated during a restart.",
  },
  {
    category: "End of Support",
    prompt: "Why is end of support a security concern?",
    choices: [
      "The system may stop receiving official security fixes.",
      "The device automatically becomes faster.",
      "All files are deleted immediately.",
      "The device no longer needs updates.",
    ],
    answer: 0,
    explanation:
      "Unsupported systems may remain exposed to known weaknesses that are no longer patched.",
  },
  {
    category: "Antivirus",
    prompt: "What is the main role of antivirus or built-in protection?",
    choices: [
      "To help detect, block, and respond to known or suspicious harmful software.",
      "To make every download safe.",
      "To replace updates and backups.",
      "To remove the need for user judgment.",
    ],
    answer: 0,
    explanation:
      "Protection tools are one defensive layer and work best with updates, cautious behavior, and reporting.",
  },
  {
    category: "Quarantine",
    prompt: "What does quarantine mean in a security tool?",
    choices: [
      "Isolating a suspicious item so it cannot run normally.",
      "Forwarding the file to classmates.",
      "Deleting every file on the device.",
      "Turning off the firewall.",
    ],
    answer: 0,
    explanation:
      "Quarantine limits a suspicious item’s ability to interact with the system.",
  },
  {
    category: "Fake Alerts",
    prompt:
      "A browser pop-up claims the device has hundreds of infections. What should the user do?",
    choices: [
      "Close the page and check the official built-in security tool.",
      "Call the phone number in the pop-up.",
      "Pay for the offered cleanup service.",
      "Install the suggested remote-access tool.",
    ],
    answer: 0,
    explanation:
      "Browser scare pages are not trusted security diagnoses.",
  },
  {
    category: "Managed Protection",
    prompt:
      "What should a student do if protection settings are controlled by school technology staff?",
    choices: [
      "Follow the managed process and report problems to technology staff.",
      "Remove the management controls.",
      "Install an unknown replacement tool.",
      "Disable all security alerts.",
    ],
    answer: 0,
    explanation:
      "Managed devices should use the organization’s approved security process.",
  },
  {
    category: "App Permissions",
    prompt: "What does least privilege mean for an app?",
    choices: [
      "The app receives only the minimum access needed for its purpose.",
      "The app receives every available permission.",
      "The app never needs updates.",
      "The app can bypass device security.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits exposure by reducing unnecessary access.",
  },
  {
    category: "Safe Installation",
    prompt: "Which installation source is usually safest?",
    choices: [
      "An approved app store, official publisher site, or managed school process.",
      "An unexpected message attachment.",
      "A random browser advertisement.",
      "An unknown download page.",
    ],
    answer: 0,
    explanation:
      "Approved sources provide stronger publisher, update, and distribution controls.",
  },
  {
    category: "Permission Judgment",
    prompt:
      "A flashlight app requests contacts, microphone, files, and precise location. What should the user do?",
    choices: [
      "Deny the permissions and question whether the app should be installed.",
      "Approve everything because the app is simple.",
      "Disable built-in protection.",
      "Share the device passcode with the publisher.",
    ],
    answer: 0,
    explanation:
      "The requested permissions do not match the app’s purpose.",
  },
  {
    category: "Unused Apps",
    prompt: "What should happen when an app is no longer needed?",
    choices: [
      "Remove unnecessary permissions or uninstall it.",
      "Give it additional permissions.",
      "Ignore its access forever.",
      "Install a second copy.",
    ],
    answer: 0,
    explanation:
      "Unused apps can retain unnecessary access and should be reviewed or removed.",
  },
  {
    category: "Removable Media",
    prompt: "What should a student do with a USB drive found at school?",
    choices: [
      "Do not connect it; give it to a teacher or technology staff member.",
      "Open the files to identify the owner.",
      "Test it on a personal laptop.",
      "Pass it to classmates.",
    ],
    answer: 0,
    explanation:
      "Unknown media should not be connected because its history and contents cannot be verified.",
  },
  {
    category: "Unknown Hardware",
    prompt: "Why can an unknown peripheral create risk?",
    choices: [
      "Its behavior, history, and purpose may be unclear.",
      "Every peripheral is automatically safe.",
      "Peripherals cannot interact with devices.",
      "Only storage devices matter.",
    ],
    answer: 0,
    explanation:
      "Unknown accessories may behave differently than expected or introduce untrusted data or control.",
  },
  {
    category: "Charging Safety",
    prompt: "What is the safest charging choice?",
    choices: [
      "A trusted charger and power source approved for the device.",
      "Any unattended cable in a public area.",
      "An unknown adapter found on the floor.",
      "A cable provided by an unverified message sender.",
    ],
    answer: 0,
    explanation:
      "Trusted charging equipment reduces uncertainty about the connection and accessory.",
  },
  {
    category: "Suspicious Hardware",
    prompt:
      "An unknown adapter is attached to a shared school computer. What should happen?",
    choices: [
      "Stop using the computer and report it without testing or removing the device.",
      "Open files from the adapter.",
      "Take the adapter home.",
      "Disable school security settings.",
    ],
    answer: 0,
    explanation:
      "Suspicious hardware on a managed device should be preserved and reported.",
  },
  {
    category: "Lost Devices",
    prompt: "What should happen first when a school laptop is missing?",
    choices: [
      "Report it immediately to a teacher and school technology staff.",
      "Wait until the end of the week.",
      "Post the device password online.",
      "Search unsafe areas alone.",
    ],
    answer: 0,
    explanation:
      "Fast reporting gives authorized staff more time to protect accounts, data, and device access.",
  },
  {
    category: "Backups",
    prompt: "Why is a protected backup useful?",
    choices: [
      "It can restore important files after the original device is lost, damaged, or unavailable.",
      "It replaces all passwords.",
      "It guarantees the missing device will be returned.",
      "It makes reporting unnecessary.",
    ],
    answer: 0,
    explanation:
      "Backups support recovery but do not replace containment or account protection.",
  },
  {
    category: "Recovery Secrets",
    prompt:
      "A stranger claims to have found a lost phone and requests the passcode. What should the user do?",
    choices: [
      "Do not share it; use trusted adults or official recovery channels.",
      "Share it to prove ownership.",
      "Send an MFA code too.",
      "Post the passcode publicly.",
    ],
    answer: 0,
    explanation:
      "Device and account secrets must remain private during recovery.",
  },
  {
    category: "Hardening",
    prompt: "What is device hardening?",
    choices: [
      "Reducing unnecessary risk by strengthening approved settings and protections.",
      "Installing every available app.",
      "Disabling all security notifications.",
      "Sharing one account across every device.",
    ],
    answer: 0,
    explanation:
      "Hardening strengthens access controls, updates, protection tools, permissions, backups, and safer device practices.",
  },
  {
    category: "Risk Priority",
    prompt:
      "A managed laptop has disabled protection, a pending security restart, a long screen-lock timeout, and no verified backup. What is the best response order?",
    choices: [
      "Report and restore approved protection first, complete the update, strengthen the lock timeout, create a protected backup, and verify every change.",
      "Change the wallpaper first.",
      "Ignore every issue because the device still turns on.",
      "Remove management controls and configure the device independently.",
    ],
    answer: 0,
    explanation:
      "Active protection and security updates receive higher priority, followed by access, recovery readiness, and verification.",
  },
];

function resultMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the major device and operating-system safety concepts from Module B10.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B10 lessons, study the weak categories, and try again.";
}

export default function DeviceOperatingSystemSafetyModuleTestPage() {
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
              Module B10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B10 Module Test: Device and Operating System Safety
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering device locks, screen privacy,
            updates, patches, built-in protection, app permissions, removable
            media, lost-device response, backups, and device hardening.
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
                Multiple-choice and scenario-based device-safety questions.
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
                Do not use real credentials, private device data, unknown media,
                suspicious files, or managed-device settings.
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
                Use the explanations to identify which Module B10 lessons you
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
            Module B10 Navigation
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B10.7 Device Hardening Checklist Lab
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