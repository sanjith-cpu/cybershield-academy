"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const quizQuestions: Question[] = [
  {
    question: "What is the safest habit when using a shared school, library, or family device?",
    options: [
      "Stay signed in so the next person can open your work faster.",
      "Save private files on the desktop so they are easy to find.",
      "Sign out, close private tabs, and avoid saving passwords on the shared device.",
      "Disable account locks so switching users is faster."
    ],
    answer: 2,
    explanation:
      "Shared devices should be left clean for the next user. Signing out, avoiding saved passwords, and closing personal tabs reduce privacy and account risk."
  },
  {
    question: "A browser on a shared computer asks to save your school password. What should you do?",
    options: [
      "Click save because the device belongs to the school.",
      "Do not save the password, and use the approved sign-in process instead.",
      "Save the password only if you plan to delete it later.",
      "Tell a friend your password so they can help you remember it."
    ],
    answer: 1,
    explanation:
      "Shared computers are not a safe place to store personal passwords. Students should use approved sign-in methods and keep credentials private."
  },
  {
    question: "Why are separate user accounts safer than everyone sharing one account?",
    options: [
      "They make the device impossible to lose.",
      "They separate files, settings, permissions, and accountability.",
      "They remove the need for updates.",
      "They let every user install anything they want."
    ],
    answer: 1,
    explanation:
      "Separate accounts help protect privacy, reduce accidental changes, and make it clearer which account owns which files and actions."
  },
  {
    question: "You notice someone else's account is still open on a shared device. What is the safest response?",
    options: [
      "Read their messages to check whether anything looks suspicious.",
      "Post a joke from their account so they learn a lesson.",
      "Close the device and tell a teacher, trusted adult, or staff member without exploring their account.",
      "Change their settings so their account is safer."
    ],
    answer: 2,
    explanation:
      "Do not explore another person's account. Protect their privacy by avoiding interaction and asking a trusted adult or staff member for help."
  }
];

function MiniQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return quizQuestions.reduce((total, q, index) => total + (answers[index] === q.answer ? 1 : 0), 0);
  }, [answers]);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/20">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Mini Scored Quiz</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Check your shared-device safety judgment</h2>
        </div>
        {submitted && (
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200">
            Score: {score}/{quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
          </div>
        )}
      </div>

      <div className="space-y-5">
        {quizQuestions.map((q, index) => (
          <div key={q.question} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="font-semibold text-slate-100">{index + 1}. {q.question}</p>
            <div className="mt-3 grid gap-2">
              {q.options.map((option, optionIndex) => {
                const selected = answers[index] === optionIndex;
                const correct = submitted && optionIndex === q.answer;
                const incorrect = submitted && selected && optionIndex !== q.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((prev) => ({ ...prev, [index]: optionIndex }))}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                      correct
                        ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                        : incorrect
                          ? "border-red-400 bg-red-400/10 text-red-100"
                          : selected
                            ? "border-cyan-300 bg-cyan-300/10 text-cyan-100"
                            : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-500/70 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-3 text-sm text-slate-300"><span className="font-semibold text-cyan-200">Explanation:</span> {q.explanation}</p>}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Submit quiz
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
          }}
          className="mt-5 rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Reset quiz
        </button>
      )}
    </section>
  );
}

function SectionCard({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/20">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function NavButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/updates-and-system-health" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/device-basics-review-lab" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300">
        Next Lesson
      </Link>
      <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
    </div>
  );
}

export default function SharedDevicesAndSafeUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">High School Beginner • B3.6</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Shared Devices and Safe Use</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how to protect accounts, files, privacy, and device settings when using school laptops, family computers, lab computers, library devices, and other shared systems.
          </p>
          <div className="mt-8"><NavButtons /></div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cyan-200">Lesson Progress</p>
              <p className="text-xs text-slate-400">Module B3: Computers, Devices, and Operating Systems • Lesson 6 of 7</p>
            </div>
            <p className="text-sm font-bold text-cyan-100">86%</p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[86%] rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          <SectionCard title="Before You Start" eyebrow="Readiness Check">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Can you explain why user accounts should be separate?",
                "Can you describe what can go wrong if a password is saved on a shared computer?",
                "Can you identify why school-owned devices need extra care and permission?"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Professional Hook" eyebrow="Why defenders care">
            <p>
              Shared devices are common in schools, libraries, homes, labs, clubs, and workplaces. A single shared computer can hold browser sessions, downloads, cached files, print history, saved passwords, temporary documents, and settings from many different people. Defenders care about shared devices because one careless session can expose private information or create confusion about who did what.
            </p>
          </SectionCard>

          <SectionCard title="Learning Objectives" eyebrow="You will be able to">
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Explain why shared devices need different safety habits than personal devices.",
                "Describe the value of separate accounts, sign-out habits, and screen locks.",
                "Recognize unsafe shared-device actions like saving passwords or leaving accounts open.",
                "Analyze fake shared-device evidence without invading anyone's privacy.",
                "Create a safe-use checklist for school, family, library, and lab devices."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Why This Matters" eyebrow="Privacy, accountability, and trust">
            <p>
              A personal device usually belongs to one main user. A shared device may be used by many people in the same day. That means safety depends on clear account boundaries, careful file storage, safe browser habits, and respect for other people's privacy.
            </p>
            <p className="mt-4">
              The goal is not to become suspicious of everyone. The goal is to leave the device in a safe condition, protect your own information, avoid touching anyone else's information, and ask a trusted adult, teacher, guardian, or technology staff member when something feels unsafe.
            </p>
          </SectionCard>

          <SectionCard title="Core Concept" eyebrow="Shared devices need shared responsibility">
            <p>
              A <span className="font-semibold text-cyan-200">shared device</span> is any device used by more than one person. The main risks are not always dramatic. They can be simple mistakes: a saved password, an open account, a private document left in downloads, a browser tab still signed in, a file copied to the wrong place, or a device setting changed without permission.
            </p>
            <p className="mt-4">
              Safer shared-device use depends on four habits: <span className="font-semibold text-cyan-200">separate accounts</span>, <span className="font-semibold text-cyan-200">clean sign-out</span>, <span className="font-semibold text-cyan-200">careful storage</span>, and <span className="font-semibold text-cyan-200">respectful reporting</span>.
            </p>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Shared Device Safety Flow</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {[
                ["1", "Start clean", "Use your own account or approved guest mode"],
                ["2", "Work safely", "Avoid saving passwords or private files locally"],
                ["3", "Pause safely", "Lock the screen if you step away"],
                ["4", "End clean", "Sign out and close private tabs"],
                ["5", "Report issues", "Tell trusted staff if something is wrong"]
              ].map(([num, title, detail]) => (
                <div key={title} className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-slate-950">{num}</div>
                  <h3 className="mt-4 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <SectionCard title="Key Vocabulary" eyebrow="Terms to know">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Shared device", "A device used by more than one person, such as a school laptop, family computer, lab computer, or library device."],
                ["User account", "A separate profile that stores a person's files, settings, and access."],
                ["Guest mode", "A limited session meant for temporary use, often with fewer saved settings."],
                ["Session", "An active signed-in period on a website, app, or device."],
                ["Local storage", "Files saved directly on the device instead of in an approved cloud or school location."],
                ["Accountability", "The ability to understand which account was responsible for an action without guessing or blaming others."]
              ].map(([term, definition]) => (
                <div key={term} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-cyan-200">{term}</h3>
                  <p className="mt-1 text-sm text-slate-400">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Technical Breakdown" eyebrow="What defenders look for">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Account separation", "Different users should not share the same personal account when avoidable."],
                ["Permission boundaries", "Students should not install apps, change settings, or access admin tools without permission."],
                ["Browser privacy", "Saved passwords, autofill, downloads, cookies, and open tabs can expose information."],
                ["File locations", "Private work should be saved to approved locations, not random local folders."],
                ["Physical access", "An unlocked screen can expose accounts even if the password itself is strong."],
                ["Clean handoff", "The next user should not inherit your files, tabs, account sessions, or warnings."
                ]
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Common Mistakes" eyebrow="Avoid these choices">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Leaving a school account signed in after class.",
                "Saving passwords in the browser on a shared computer.",
                "Opening another person's files or messages because they forgot to sign out.",
                "Installing games, extensions, or tools on a device you do not own or manage.",
                "Saving private documents in Downloads or on the desktop of a shared computer.",
                "Changing system settings to make your own session easier without permission."
              ].map((mistake) => (
                <div key={mistake} className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                  {mistake}
                </div>
              ))}
            </div>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Dashboard</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Shared Device Review Snapshot</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["Browser Session", "Signed in", "red"],
                ["Password Save", "Prompt active", "yellow"],
                ["Downloads", "3 personal files", "yellow"],
                ["Screen Lock", "Enabled", "green"]
              ].map(([label, status, color]) => (
                <div key={label} className={`rounded-xl border p-4 ${color === "green" ? "border-emerald-500/30 bg-emerald-500/10" : color === "red" ? "border-red-500/30 bg-red-500/10" : "border-yellow-500/30 bg-yellow-500/10"}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300">
              <p>[14:02] device_mode: shared_lab_computer</p>
              <p>[14:05] browser_status: account_session_open</p>
              <p>[14:06] password_prompt: save_password_visible</p>
              <p>[14:08] downloads_folder: personal_files_detected</p>
              <p>[14:10] recommended_action: sign_out_close_tabs_remove_personal_downloads_report_if_account_not_yours</p>
            </div>
          </section>

          <SectionCard title="Safe Defensive Lab" eyebrow="Fake-data only">
            <p>
              Review this fake shared-device situation: a student uses a library computer to finish a project. The browser asks to save a password, a previous student's email tab is still open, and several personal files are in the downloads folder.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Do not open the previous student's account. Tell library or school staff, use your own approved session, avoid saving passwords, and remove only your own files before leaving.
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Explore the open email tab to figure out whose account it is and send a message from it so they notice.
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
                Ignore every warning and leave your own account signed in because you are only stepping away for a few minutes.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Analyze the Evidence" eyebrow="Defender reasoning">
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-950 text-cyan-200">
                  <tr>
                    <th className="p-3">Evidence</th>
                    <th className="p-3">What it suggests</th>
                    <th className="p-3">Safe conclusion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/60 text-slate-300">
                  <tr><td className="p-3">Open email tab</td><td className="p-3">Someone may have forgotten to sign out.</td><td className="p-3">Do not explore it. Ask trusted staff for help.</td></tr>
                  <tr><td className="p-3">Save password prompt</td><td className="p-3">The browser may store login information.</td><td className="p-3">Choose not to save passwords on shared devices.</td></tr>
                  <tr><td className="p-3">Downloads folder contains files</td><td className="p-3">The device may contain leftover personal data.</td><td className="p-3">Handle only your own files and follow staff guidance.</td></tr>
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="Scenario Decision Challenge" eyebrow="Choose the best response">
            <p>
              You sit down at a school lab computer and see that another student's account is still open. Their grades portal tab is visible. Your class starts in two minutes and you need the computer.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Unsafe response: Click around to identify the student, take a screenshot, or close their work without telling anyone.
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Best response: Do not explore the account. Raise your hand or tell the teacher/technology staff so the account can be protected properly.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Defender Checklist" eyebrow="Skills you should now have">
            <ul className="space-y-3">
              {[
                "I can explain why shared devices need stronger sign-out and cleanup habits.",
                "I can avoid saving passwords, private files, or personal sessions on shared computers.",
                "I can respect another person's privacy if their account is left open.",
                "I can choose safe steps when using school, library, lab, or family devices.",
                "I can report shared-device problems to trusted adults or technology staff instead of handling them alone."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">☐ {item}</li>
              ))}
            </ul>
          </SectionCard>

          <MiniQuiz />

          <SectionCard title="Portfolio Prompt" eyebrow="Build your cyber notebook">
            <p>
              Create a one-page “Shared Device Safe Use Checklist” for students. Include what to do before starting, while working, when stepping away, before leaving, and when someone else's account is still open.
            </p>
          </SectionCard>

          <SectionCard title="Key Takeaways" eyebrow="Remember">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Shared devices create privacy and accountability risks if sessions are not handled carefully.",
                "Separate accounts, screen locks, clean sign-out, and careful file storage protect everyone.",
                "Do not explore another person's account. Ask trusted staff for help."
              ].map((item) => (
                <div key={item} className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">{item}</div>
              ))}
            </div>
          </SectionCard>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <NavButtons />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}