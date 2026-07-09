"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "Which answer best explains why device components matter to cybersecurity defenders?",
    choices: [
      "They help defenders understand what stores data, runs programs, connects to networks, and needs protection",
      "They let students repair every device without help",
      "They make cybersecurity only about hardware speed",
      "They remove the need for safe user behavior",
    ],
    answer: 0,
    explanation:
      "Cyber defenders need a basic model of devices so they can understand where data lives, how software runs, how networks connect, and where protections may be needed.",
  },
  {
    question: "Which component is most directly responsible for long-term file storage on a laptop?",
    choices: ["RAM", "CPU", "Storage drive", "Cooling fan"],
    answer: 2,
    explanation:
      "A storage drive keeps files and system data even when the device is turned off. RAM is temporary working memory.",
  },
  {
    question: "What is the safest beginner explanation of RAM?",
    choices: [
      "A permanent place where deleted files always stay forever",
      "Temporary working memory used while apps and the operating system are running",
      "A network address assigned by a router",
      "A security rule that blocks websites",
    ],
    answer: 1,
    explanation:
      "RAM is temporary memory used by running programs. It helps a device work quickly but is not the same as long-term storage.",
  },
  {
    question: "Which statement best describes an operating system?",
    choices: [
      "A type of charging cable",
      "A website that stores every password",
      "The main software that manages hardware, files, apps, users, and settings",
      "A fake alert used only in cybersecurity lessons",
    ],
    answer: 2,
    explanation:
      "An operating system manages the device's hardware and software resources, including files, apps, accounts, permissions, and settings.",
  },
  {
    question: "Why should everyday schoolwork usually be done with a standard user account instead of an administrator account?",
    choices: [
      "Standard accounts reduce the chance that one mistake can make major system changes",
      "Standard accounts make passwords unnecessary",
      "Administrator accounts cannot connect to the internet",
      "Administrator accounts are only for games",
    ],
    answer: 0,
    explanation:
      "A standard account limits what can be changed. This supports least privilege and reduces damage from mistakes or unsafe apps.",
  },
  {
    question: "A student sees a file named homework.pdf.exe. What is the safest interpretation?",
    choices: [
      "It must be safe because it includes the word homework",
      "It may be risky because the final extension suggests it could be an executable file",
      "It is guaranteed to be a normal PDF",
      "The extension never matters",
    ],
    answer: 1,
    explanation:
      "The final extension is important. A file ending in .exe may run a program, so students should not open it and should ask trusted help if unsure.",
  },
  {
    question: "Which choice is the safest habit for unknown files or attachments?",
    choices: [
      "Open them quickly and close them if they look strange",
      "Rename the file to make it safe",
      "Avoid opening them and ask a trusted adult, teacher, or technology staff member when unsure",
      "Forward them to friends for testing",
    ],
    answer: 2,
    explanation:
      "Unknown files should not be opened casually. Students should avoid experimenting and get trusted help, especially on school or shared devices.",
  },
  {
    question: "What is a process in an operating system?",
    choices: [
      "A running instance of a program or system task",
      "A folder that always contains photos",
      "A password recovery email",
      "A sticker on the device case",
    ],
    answer: 0,
    explanation:
      "A process is something currently running. Defenders often think about processes because they show what apps or system tasks are active.",
  },
  {
    question: "Why do app permissions matter?",
    choices: [
      "They decide which apps look the coolest",
      "They control what an app may access, such as camera, microphone, files, location, or contacts",
      "They erase the need for updates",
      "They only apply to old computers",
    ],
    answer: 1,
    explanation:
      "Permissions control access to device features and data. Reviewing permissions helps reduce unnecessary exposure.",
  },
  {
    question: "Which app permission request should a student question carefully?",
    choices: [
      "A video call app asking for microphone access during a meeting",
      "A note-taking app asking to save a document",
      "A calculator app asking for contacts, microphone, and location access",
      "A camera app asking to use the camera",
    ],
    answer: 2,
    explanation:
      "Permissions should match the app's purpose. A calculator usually does not need contacts, microphone, or location access.",
  },
  {
    question: "What is the main security reason to install operating system updates from trusted sources?",
    choices: [
      "Updates can fix security weaknesses and improve system reliability",
      "Updates make every computer impossible to damage",
      "Updates replace the need for account security",
      "Updates are only cosmetic changes",
    ],
    answer: 0,
    explanation:
      "Updates often include security fixes, bug fixes, and reliability improvements. They are one layer of defense, not a perfect solution.",
  },
  {
    question: "Which update behavior is safest for a school or personal device?",
    choices: [
      "Ignore updates forever because change is risky",
      "Use official update settings and follow school or device-owner instructions",
      "Download random update tools from ads",
      "Turn off all protections so updates run faster",
    ],
    answer: 1,
    explanation:
      "Updates should come from official settings or trusted support. Random pop-ups or ads claiming to update a device can be unsafe.",
  },
  {
    question: "A device suddenly becomes slow, shows repeated warnings, and opens unfamiliar pop-ups. What is the safest student response?",
    choices: [
      "Install the first cleaner app they find online",
      "Enter private information to make the pop-up stop",
      "Ignore it because all devices do this",
      "Stop interacting with suspicious prompts and ask a trusted adult or school technology staff for help",
    ],
    answer: 3,
    explanation:
      "Students should not click through suspicious prompts or download unknown tools. Trusted adults or technology staff can help review the issue safely.",
  },
  {
    question: "Which action best supports system health?",
    choices: [
      "Keeping software updated, using trusted apps, restarting when appropriate, and reporting unusual behavior",
      "Disabling every security setting",
      "Installing unknown tools to make the device faster",
      "Sharing one login across a group",
    ],
    answer: 0,
    explanation:
      "Healthy systems are maintained with trusted updates, careful app choices, reasonable restarts, and safe reporting when something seems wrong.",
  },
  {
    question: "What is one risk of using shared devices?",
    choices: [
      "They can never connect to Wi-Fi",
      "Another user may see saved accounts, files, downloads, browser history, or personal information if users are careless",
      "They cannot run an operating system",
      "They remove the need for privacy settings",
    ],
    answer: 1,
    explanation:
      "Shared devices require extra care because multiple people may use the same hardware, browser, files, or app environment.",
  },
  {
    question: "Which habit is safest after using a shared or school device?",
    choices: [
      "Leave accounts open for the next person",
      "Save passwords in the browser so logging in is faster",
      "Sign out of accounts, close private work, and follow school cleanup rules",
      "Download personal files to the desktop permanently",
    ],
    answer: 2,
    explanation:
      "Signing out and cleaning up appropriately protects privacy and reduces the chance that the next user can access private information.",
  },
  {
    question: "Which example best shows least privilege on a device?",
    choices: [
      "Giving every user administrator access",
      "Using only the permissions needed for the task and avoiding extra access",
      "Turning off passwords for convenience",
      "Sharing the same account with a friend",
    ],
    answer: 1,
    explanation:
      "Least privilege means users and apps should have only the access they need. This reduces the impact of mistakes or misuse.",
  },
  {
    question: "A student wants to install a new app on a school laptop. What should they do first?",
    choices: [
      "Bypass the school settings if the app is useful",
      "Ask permission and follow the school-approved installation process",
      "Use a friend's administrator account",
      "Download a copy from a random file-sharing site",
    ],
    answer: 1,
    explanation:
      "School devices have rules for safety, licensing, privacy, and support. Students should ask permission and use approved processes.",
  },
  {
    question: "Which statement about file organization is most useful for security?",
    choices: [
      "Clear file names and folders can help people find important work, avoid mistakes, and notice unusual files",
      "Messy folders make devices more secure",
      "Files are safer when nobody knows what they are",
      "Organization only matters for teachers",
    ],
    answer: 0,
    explanation:
      "Good organization supports safety because users can identify important files, reduce accidental sharing, and spot files that do not belong.",
  },
  {
    question: "Which file action is the safest when a student is not sure what a file does?",
    choices: [
      "Run it to see what opens",
      "Upload it publicly for strangers to identify",
      "Avoid opening it and ask trusted help",
      "Change the icon to make it safer",
    ],
    answer: 2,
    explanation:
      "When unsure, students should avoid opening unknown files and ask a trusted adult, teacher, guardian, or technology staff member.",
  },
  {
    question: "What should students remember about built-in security warnings?",
    choices: [
      "They should always be ignored",
      "They are always fake",
      "They should be read carefully, and students should ask trusted help before continuing if unsure",
      "They mean the device is permanently broken",
    ],
    answer: 2,
    explanation:
      "Warnings are not always emergencies, but they deserve attention. Students should not click through warnings they do not understand.",
  },
  {
    question: "Which situation should be reported to a trusted adult or school technology staff member?",
    choices: [
      "A school device asks for a normal restart after an official update",
      "A shared device is still logged into another student's account",
      "A teacher opens an approved classroom website",
      "A student creates a folder for class notes",
    ],
    answer: 1,
    explanation:
      "A device left signed into someone else's account creates a privacy and account-safety issue. Students should not explore it and should report it.",
  },
  {
    question: "What is the safest way to think about removable media such as unknown USB drives?",
    choices: [
      "Plug them in to see who owns them",
      "Treat unknown devices cautiously and give them to a trusted adult or technology staff member instead of testing them",
      "Use them only on a school computer",
      "Rename the drive before opening it",
    ],
    answer: 1,
    explanation:
      "Unknown removable media can create safety and privacy risks. Students should not test unknown devices themselves.",
  },
  {
    question: "Which choice best summarizes Module B3?",
    choices: [
      "Computers are only risky when they are old",
      "Students should understand devices, operating systems, files, apps, permissions, updates, and shared-use habits from a defensive point of view",
      "Cybersecurity does not involve operating systems",
      "Permissions and updates are optional details with no safety purpose",
    ],
    answer: 1,
    explanation:
      "Module B3 builds the technical foundation needed to understand devices safely: components, operating systems, files, apps, permissions, updates, and shared-device behavior.",
  },
  {
    question: "A student finds a strange process name in a fake training dashboard. What should their conclusion be?",
    choices: [
      "One clue alone proves the device is infected",
      "They should connect evidence carefully and avoid jumping to conclusions from one clue",
      "They should search for real attack instructions",
      "They should delete system files immediately",
    ],
    answer: 1,
    explanation:
      "Defenders use evidence carefully. A single clue may need context from logs, user activity, trusted tools, and safe support channels.",
  },
];

export default function BeginnerModuleThreeTestPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(selectedAnswers).length;

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);
  }, [selectedAnswers]);

  const percent = Math.round((score / questions.length) * 100);

  const feedback =
    percent >= 90
      ? "Excellent work. You understand beginner device, operating system, file, app, permission, update, and shared-device safety concepts."
      : percent >= 75
        ? "Good work. Review any missed explanations, then continue to Module B4."
        : percent >= 60
          ? "You are close. Review the B3 lessons and retake this test before moving on."
          : "Pause here and review Computers, Devices, and Operating Systems before continuing.";

  function selectAnswer(questionIndex: number, choiceIndex: number) {
    if (submitted) return;
    setSelectedAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }));
  }

  function submitTest() {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetTest() {
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/high-school/beginner/computers-devices-and-operating-systems/device-basics-review-lab"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href="/high-school/beginner/computers-devices-and-operating-systems"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                High School Beginner • Module B3 Test
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Computers, Devices, and Operating Systems Module Test
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Answer all 25 questions first. Your score, correct answers, and explanations stay hidden until you submit.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Test Status</p>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>Answered</span>
                    <span>
                      {answeredCount}/{questions.length}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all"
                      style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5">
                    <p className="text-3xl font-black text-emerald-200">
                      {score}/{questions.length} • {percent}%
                    </p>
                    <p className="mt-2 text-sm leading-6 text-emerald-100">{feedback}</p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5">
                    <p className="font-bold text-yellow-200">Answers hidden</p>
                    <p className="mt-2 text-sm leading-6 text-yellow-100/90">
                      Choose your answers before submitting. Do not refresh the page until you finish.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Covers</p>
            <p className="mt-2 text-slate-300">Device components, operating systems, accounts, files, extensions, apps, processes, permissions, updates, and shared devices.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Rule</p>
            <p className="mt-2 text-slate-300">Use fake examples only. Do not open unknown files, test unknown devices, or change systems without permission.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Goal</p>
            <p className="mt-2 text-slate-300">Show that you can explain device safety and make responsible beginner defensive decisions.</p>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, questionIndex) => {
            const selected = selectedAnswers[questionIndex];
            const isCorrect = selected === question.answer;

            return (
              <section key={question.question} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-300">Question {questionIndex + 1}</p>
                    <h2 className="mt-2 text-xl font-bold text-white">{question.question}</h2>
                  </div>
                  {submitted && (
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        isCorrect
                          ? "border border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
                          : "border border-red-400/50 bg-red-400/10 text-red-200"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Review"}
                    </span>
                  )}
                </div>

                <div className="mt-5 grid gap-3">
                  {question.choices.map((choice, choiceIndex) => {
                    const isSelected = selected === choiceIndex;
                    const isAnswer = question.answer === choiceIndex;

                    const submittedStyle = submitted
                      ? isAnswer
                        ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-100"
                        : isSelected
                          ? "border-red-400/60 bg-red-400/10 text-red-100"
                          : "border-slate-800 bg-slate-950/60 text-slate-300"
                      : isSelected
                        ? "border-cyan-300 bg-cyan-400/10 text-cyan-100"
                        : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-cyan-400/70 hover:text-cyan-100";

                    return (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => selectAnswer(questionIndex, choiceIndex)}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${submittedStyle}`}
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                          {isSelected ? "•" : ""}
                        </span>
                        <span>{choice}</span>
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                    <p className="font-bold text-cyan-200">Explanation</p>
                    <p className="mt-2 leading-7 text-slate-200">{question.explanation}</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          {!submitted ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Ready to submit?</h2>
                <p className="mt-2 text-slate-300">
                  You have answered {answeredCount} out of {questions.length} questions.
                </p>
              </div>
              <button
                type="button"
                onClick={submitTest}
                disabled={answeredCount !== questions.length}
                className="rounded-full bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                Submit Module Test
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Module Test Complete</h2>
                <p className="mt-2 text-slate-300">
                  Final score: {score}/{questions.length} ({percent}%). {feedback}
                </p>
              </div>
              <button
                type="button"
                onClick={resetTest}
                className="rounded-full border border-slate-700 px-6 py-3 font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Retake Test
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/high-school/beginner/computers-devices-and-operating-systems/device-basics-review-lab"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Previous Lesson
          </Link>
          <Link
            href="/high-school/beginner/computers-devices-and-operating-systems"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner/networking-basics"
            className="rounded-full bg-cyan-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Next Module
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}