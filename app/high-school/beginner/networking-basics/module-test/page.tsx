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
    question: "Which answer best describes a computer network?",
    choices: [
      "A group of devices connected so they can exchange information using agreed rules",
      "A single device that never communicates with anything else",
      "A password list stored in a browser",
      "A folder that contains only school documents",
    ],
    answer: 0,
    explanation:
      "A network connects devices so information can move between them using shared communication rules. Beginner defenders use this idea to understand paths, boundaries, and safe decisions.",
  },
  {
    question: "Why do cybersecurity defenders use network diagrams?",
    choices: [
      "To memorize every cable color in a building",
      "To understand how devices, networks, services, and boundaries fit together before making decisions",
      "To test real networks without permission",
      "To replace all security policies",
    ],
    answer: 1,
    explanation:
      "Diagrams help defenders reason about connection paths and boundaries. They should be used for safe understanding, not unauthorized testing.",
  },
  {
    question: "In a beginner network diagram, which item is usually the device that starts a request?",
    choices: ["DNS", "Router", "Client device", "Website certificate"],
    answer: 2,
    explanation:
      "A client device, such as a laptop, tablet, or phone, often starts a request when a user opens a site, app, or service.",
  },
  {
    question: "What is an IP address best compared to in beginner terms?",
    choices: [
      "A network identity label that helps devices send information to the right place",
      "A permanent proof that a person owns a device",
      "A secret password that should be shared with classmates",
      "A file extension that decides whether a document opens",
    ],
    answer: 0,
    explanation:
      "An IP address helps identify a device or destination on a network. It is not the same as a password or proof of ownership.",
  },
  {
    question: "Which statement about IP addresses is safest and most accurate for beginners?",
    choices: [
      "An IP address always identifies one exact person forever",
      "An IP address can help with network routing and context, but defenders should not jump to conclusions from it alone",
      "An IP address is never useful in troubleshooting",
      "An IP address is the same as a username",
    ],
    answer: 1,
    explanation:
      "IP addresses are useful clues, but they can change or represent shared networks. Defenders combine IP evidence with time, device, account, and context.",
  },
  {
    question: "What does DNS help with?",
    choices: [
      "Turning human-readable website names into network destinations",
      "Changing a weak password into a strong one automatically",
      "Deleting suspicious files from every computer",
      "Writing school acceptable use policies",
    ],
    answer: 0,
    explanation:
      "DNS helps translate names like learning.example into network destination information. It makes the web easier for humans to use.",
  },
  {
    question: "A student types a website name into a browser. Which service is most directly connected to finding the network destination for that name?",
    choices: ["DNS", "RAM", "Screen brightness", "File Explorer"],
    answer: 0,
    explanation:
      "DNS is the naming system that helps connect readable names to destinations. It is different from memory, display settings, or file management.",
  },
  {
    question: "What is the main role of a router in beginner network terms?",
    choices: [
      "It helps move traffic between networks or toward the correct destination",
      "It stores every student password in plain text",
      "It writes essays for students",
      "It changes file extensions into safe files",
    ],
    answer: 0,
    explanation:
      "Routers help direct traffic between networks, such as between a home or school network and outside destinations.",
  },
  {
    question: "What is a switch commonly used for in a local network?",
    choices: [
      "Connecting wired devices inside a local network",
      "Replacing every operating system update",
      "Guaranteeing that every website is safe",
      "Creating usernames for social media accounts",
    ],
    answer: 0,
    explanation:
      "Switches commonly connect wired devices within a local area network. They are part of how devices communicate inside homes, schools, and organizations.",
  },
  {
    question: "Which answer best describes Wi-Fi?",
    choices: [
      "Wireless networking that allows devices to connect without an Ethernet cable",
      "A type of password manager",
      "A rule that makes all networks private",
      "A file type used for videos",
    ],
    answer: 0,
    explanation:
      "Wi-Fi is wireless networking. Safer Wi-Fi use still depends on settings, network trust, account security, and good decisions.",
  },
  {
    question: "Why is public Wi-Fi usually treated with more caution than a trusted home or school network?",
    choices: [
      "Public Wi-Fi always belongs to the student",
      "Public Wi-Fi may have unknown users, unknown settings, or look-alike network names",
      "Public Wi-Fi does not use radio signals",
      "Public Wi-Fi removes the need for HTTPS",
    ],
    answer: 1,
    explanation:
      "Public networks can be less predictable. Students should avoid sensitive activity on unknown networks and follow trusted guidance.",
  },
  {
    question: "Which action is safest when a student sees two similar public Wi-Fi names in a café?",
    choices: [
      "Join the strongest signal immediately",
      "Ask staff or a trusted adult which network is official before connecting",
      "Try both networks and compare speeds",
      "Enter school login information into any pop-up that appears",
    ],
    answer: 1,
    explanation:
      "Similar network names can be confusing. Verifying the official network with trusted staff or an adult is safer than guessing.",
  },
  {
    question: "What are packets in beginner network terms?",
    choices: [
      "Small pieces of data that move across networks as part of communication",
      "Only physical envelopes delivered by mail",
      "Passwords stored in a spreadsheet",
      "A type of school rule",
    ],
    answer: 0,
    explanation:
      "Network communication is commonly broken into smaller pieces called packets. Defenders can study traffic concepts safely with fake data and diagrams.",
  },
  {
    question: "Why might defenders care about network traffic patterns?",
    choices: [
      "Patterns can help them understand normal behavior, errors, blocked activity, or unusual activity without guessing",
      "Patterns prove every user is guilty",
      "Patterns remove the need for logs",
      "Patterns are useful only for graphic design",
    ],
    answer: 0,
    explanation:
      "Traffic patterns can provide clues, but defenders must use context and avoid jumping to conclusions from one signal alone.",
  },
  {
    question: "Which fake log entry sounds like a normal network event?",
    choices: [
      "08:12 Browser requested learning.example during class activity",
      "Unknown pop-up asks student to enter private password for free prizes",
      "Unapproved device repeatedly tries to reach internal admin page",
      "Student is told to disable all security warnings",
    ],
    answer: 0,
    explanation:
      "A browser requesting a class website during class can be normal. The other choices involve warning signs or unsafe instructions.",
  },
  {
    question: "Which fake log entry should be reviewed with a teacher or technology staff member?",
    choices: [
      "Student laptop joined classroom Wi-Fi at the start of class",
      "DNS lookup completed for learning.example",
      "Guest network blocked repeated attempts to access internal staff printer",
      "Teacher computer opened approved attendance page",
    ],
    answer: 2,
    explanation:
      "A safe block from a guest network to an internal printer may be expected, but repeated attempts should still be reviewed with proper staff rather than handled alone.",
  },
  {
    question: "What does network segmentation mean at a beginner level?",
    choices: [
      "Separating parts of a network so every device does not automatically have the same access",
      "Removing all routers from a network",
      "Letting every visitor access every school system",
      "Changing every website name to numbers only",
    ],
    answer: 0,
    explanation:
      "Segmentation separates areas of a network, such as guest Wi-Fi from staff systems, to reduce unnecessary access and risk.",
  },
  {
    question: "Why might a school have a guest Wi-Fi network separate from staff systems?",
    choices: [
      "To reduce access to internal resources that guests do not need",
      "To make passwords unnecessary",
      "To let visitors manage school servers",
      "To hide all school rules from students",
    ],
    answer: 0,
    explanation:
      "Guest networks should provide limited access, usually internet access only, while protecting internal systems that visitors do not need.",
  },
  {
    question: "Which answer is the safest response to a suspicious network warning on a school device?",
    choices: [
      "Click through quickly so classwork can continue",
      "Take a screenshot if allowed, stop interacting with the warning, and ask the teacher or school technology staff",
      "Try to bypass the warning using random online advice",
      "Share the warning link with friends so they can test it",
    ],
    answer: 1,
    explanation:
      "Students should not bypass warnings or test suspicious links. Reporting to trusted staff is the safe defensive workflow.",
  },
  {
    question: "Which statement about HTTPS and public networks is most accurate?",
    choices: [
      "HTTPS is a helpful trust signal, but students should still use caution on unknown networks",
      "HTTPS means every page and every request is automatically harmless",
      "HTTPS only works on school Wi-Fi",
      "HTTPS is the same thing as DNS",
    ],
    answer: 0,
    explanation:
      "HTTPS helps protect communication with websites, but students still need to watch for fake sites, suspicious prompts, unknown networks, and reporting rules.",
  },
  {
    question: "A student cannot reach a class website. What is the safest first step?",
    choices: [
      "Disable all device protections",
      "Check the website name carefully and ask the teacher or technology staff if the issue continues",
      "Download a random network repair tool",
      "Try to access restricted network settings without permission",
    ],
    answer: 1,
    explanation:
      "Simple checks like spelling are safe. If the problem continues, trusted adults or technology staff should handle deeper troubleshooting.",
  },
  {
    question: "Which item is most likely to be shown in a beginner network map?",
    choices: [
      "Laptop, Wi-Fi access point, router, DNS, and destination service",
      "Only a student's private diary entries",
      "A list of real passwords",
      "Instructions to break into a system",
    ],
    answer: 0,
    explanation:
      "A safe beginner network map can show devices and communication paths. It should not include private data, real passwords, or harmful instructions.",
  },
  {
    question: "Why should students avoid scanning or probing real networks?",
    choices: [
      "Because it can be unauthorized, disruptive, unsafe, and against school rules or laws",
      "Because real networks never contain devices",
      "Because diagrams are illegal",
      "Because DNS replaces permission",
    ],
    answer: 0,
    explanation:
      "CyberShield activities use fake data and safe diagrams. Students should never test real networks without clear authorization and supervision.",
  },
  {
    question: "Which choice best shows responsible beginner network thinking?",
    choices: [
      "Use diagrams and fake evidence to understand concepts, then ask trusted staff before taking action on real systems",
      "Guess quickly from one log entry and blame a person",
      "Try hidden network settings because curiosity is enough permission",
      "Share suspicious links so classmates can investigate",
    ],
    answer: 0,
    explanation:
      "Responsible defenders combine evidence, avoid assumptions, use fake practice environments, and involve trusted adults or authorized staff for real issues.",
  },
  {
    question: "What should a student do if a network issue feels serious, confusing, or unsafe?",
    choices: [
      "Handle it alone to prove independence",
      "Ask a trusted adult, teacher, guardian, counselor, or school technology staff member for help",
      "Post private screenshots publicly",
      "Try random commands found online",
    ],
    answer: 1,
    explanation:
      "Students should not handle serious or confusing cyber issues alone. Trusted adults and authorized school technology staff can respond safely.",
  },
];

export default function BeginnerModuleFourTestPage() {
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
      ? "Excellent work. You understand beginner networking concepts and safe defensive network reasoning."
      : percent >= 75
        ? "Good work. Review any missed explanations, then continue to Module B5."
        : percent >= 60
          ? "You are close. Review the B4 lessons and retake this test before moving on."
          : "Pause here and review Networking Basics before continuing.";

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
              href="/high-school/beginner/networking-basics/network-diagram-review-lab"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href="/high-school/beginner/networking-basics"
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
                High School Beginner • Module B4 Test
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Networking Basics Module Test
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
            <p className="mt-2 text-slate-300">
              Networks, IP addresses, routers, switches, Wi-Fi, DNS, packets, traffic, network types, and simple diagrams.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Rule</p>
            <p className="mt-2 text-slate-300">
              Use fake examples only. Do not scan, probe, monitor, or test real networks without authorization.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm font-semibold text-cyan-300">Goal</p>
            <p className="mt-2 text-slate-300">
              Show that you can read beginner network evidence and choose safe defensive actions.
            </p>
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
            href="/high-school/beginner/networking-basics/network-diagram-review-lab"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Previous Lesson
          </Link>
          <Link
            href="/high-school/beginner/networking-basics"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner/web-basics-and-browser-safety"
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