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
    question: "A fake device dashboard shows a restart is required after an update. What is the safest beginner-level recommendation?",
    options: [
      "Ignore it because updates are only about new features.",
      "Recommend saving work and restarting at an approved time so the update can finish.",
      "Disable future updates so the warning does not return.",
      "Install random cleanup tools from the internet to speed up the device."
    ],
    answer: 1,
    explanation:
      "Updates often need restarts to finish applying security and stability fixes. The safe recommendation is to save work and restart at an approved time."
  },
  {
    question: "Which item is the best example of respecting permission boundaries on a school device?",
    options: [
      "Changing admin settings because you know how to make the laptop faster.",
      "Opening another student's files to check whether they are safe.",
      "Using only approved apps and asking a teacher or technology staff before changing settings.",
      "Turning off security tools because they are annoying."
    ],
    answer: 2,
    explanation:
      "School and shared devices have rules. Students should use approved tools and ask trusted adults or technology staff before making changes."
  },
  {
    question: "A file is named project.pdf.exe in a fake file list. What should a beginner defender notice?",
    options: [
      "It is definitely safe because it includes the word project.",
      "The file name may be trying to look like a PDF even though the final extension suggests an executable file.",
      "It should be opened quickly before the name changes.",
      "Extensions never matter for safety decisions."
    ],
    answer: 1,
    explanation:
      "The final extension matters. A confusing double-extension style name should be treated carefully and reported or checked through approved help."
  },
  {
    question: "A camera permission is enabled for a fake calculator app. What is the best review question?",
    options: [
      "Does this permission match the app's real purpose?",
      "Can I use this permission to see other people's cameras?",
      "How can I hide this permission from the device owner?",
      "Can I copy the app to every shared computer?"
    ],
    answer: 0,
    explanation:
      "Permission review should ask whether the access matches the app's purpose. A calculator usually does not need camera access."
  },
  {
    question: "What is the best final output for this review lab?",
    options: [
      "A calm safety recommendation using fake evidence and approved next steps.",
      "A list of guesses about who caused every issue.",
      "Instructions for bypassing device restrictions.",
      "A real student's private files copied into a report."
    ],
    answer: 0,
    explanation:
      "Defensive reporting should be calm, evidence-based, privacy-respecting, and focused on approved safety steps."
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
          <h2 className="mt-2 text-2xl font-bold text-white">Check your device review decisions</h2>
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
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/shared-devices-and-safe-use" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner/computers-devices-and-operating-systems/module-test" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300">
        Module Test
      </Link>
      <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
    </div>
  );
}

export default function DeviceBasicsReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">High School Beginner • B3.7</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Device Basics Review Lab</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Apply everything from Module B3 by reviewing a fake student device setup, identifying safer choices, and writing a clear beginner-friendly safety recommendation.
          </p>
          <div className="mt-8"><NavButtons /></div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-cyan-200">Lesson Progress</p>
              <p className="text-xs text-slate-400">Module B3: Computers, Devices, and Operating Systems • Lesson 7 of 7</p>
            </div>
            <p className="text-sm font-bold text-cyan-100">100%</p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-full rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          <SectionCard title="Before You Start" eyebrow="Readiness Check">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "Can you name the role of hardware, operating systems, accounts, files, apps, and updates?",
                "Can you explain why permissions and shared-device habits matter?",
                "Can you make a safe recommendation without guessing, blaming, or opening private data?"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Professional Hook" eyebrow="Why defenders care">
            <p>
              Beginner defenders often start by learning how to read a device situation clearly. They do not need to touch private files, bypass settings, or make dramatic claims. They learn to connect small pieces of evidence: update status, account type, file locations, app permissions, storage health, and shared-device behavior.
            </p>
            <p className="mt-4">
              This review lab turns the full module into one safe workflow: observe fake evidence, organize what it means, choose approved actions, and communicate the recommendation clearly.
            </p>
          </SectionCard>

          <SectionCard title="Learning Objectives" eyebrow="You will be able to">
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Review a fake device setup using beginner defensive thinking.",
                "Connect device components, operating systems, accounts, files, apps, permissions, updates, and shared-device habits.",
                "Separate facts from guesses when analyzing fake device evidence.",
                "Choose safe next steps that respect privacy and permission boundaries.",
                "Write a short safety recommendation for a student, family, or school setting."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Why This Matters" eyebrow="From knowledge to judgment">
            <p>
              Knowing definitions is useful, but cybersecurity also requires judgment. A device review is not just asking, “What is wrong?” It is asking, “What evidence do we have, what risk might it create, what should be handled by approved support, and what should we avoid touching?”
            </p>
            <p className="mt-4">
              In real school and workplace environments, good defenders are careful. They document calmly, respect boundaries, and ask trusted adults, teachers, guardians, or technology staff when a problem involves someone else&apos;s data, account, or device settings.
            </p>
          </SectionCard>

          <SectionCard title="Core Concept" eyebrow="The device review mindset">
            <p>
              A safe device review looks for patterns across the whole system. Hardware can affect access and privacy. The operating system manages accounts and settings. Files and extensions affect how information is opened. Apps and processes request permissions. Updates and system health affect stability. Shared-device habits affect privacy and accountability.
            </p>
            <p className="mt-4">
              The key is to make recommendations that are defensive, approved, and realistic. Beginner defenders should avoid invasive actions and focus on safer habits, better organization, approved updates, permission review, and trusted reporting.
            </p>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
            <h2 className="mt-2 text-2xl font-bold text-white">B3 Device Review Map</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-7">
              {[
                ["1", "Components", "What parts support use, storage, access, and privacy?"],
                ["2", "OS", "What manages users, files, apps, and updates?"],
                ["3", "Accounts", "Are users separated with appropriate access?"],
                ["4", "Files", "Are names, extensions, and locations clear?"],
                ["5", "Apps", "Do permissions match real purpose?"],
                ["6", "Health", "Are updates, storage, and warnings handled?"],
                ["7", "Shared Use", "Will the next user inherit risk?"],
              ].map(([num, title, detail]) => (
                <div key={title} className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">{num}</div>
                  <h3 className="mt-4 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <SectionCard title="Key Vocabulary" eyebrow="Terms to review">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Component", "A device part such as storage, memory, camera, microphone, battery, processor, port, or network adapter."],
                ["Operating system", "The main software that manages accounts, apps, files, device settings, and updates."],
                ["Permission", "Access an app or account is allowed to use, such as camera, microphone, files, or location."],
                ["Process", "An app or background activity running on the device."],
                ["Extension", "The end of a file name that helps indicate the file type."],
                ["Defensive recommendation", "A safe suggested action based on evidence, boundaries, and approved support."],
              ].map(([term, definition]) => (
                <div key={term} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-cyan-200">{term}</h3>
                  <p className="mt-1 text-sm text-slate-400">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Technical Breakdown" eyebrow="How to review the fake device">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Observe", "Read the fake dashboard, fake files, fake permission panel, and fake shared-device notes."],
                ["Classify", "Sort each item as healthy, needs review, needs trusted help, or avoid touching."],
                ["Prioritize", "Handle the highest-risk privacy, update, permission, and shared-device issues first."],
                ["Recommend", "Write practical next steps that a student, teacher, family member, or technology staff member could safely follow."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Common Mistakes" eyebrow="Avoid these in the lab">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Jumping from one warning to a dramatic conclusion without enough evidence.",
                "Opening private files, messages, browser sessions, or another person&apos;s account.",
                "Changing school device settings or installing tools without permission.",
                "Ignoring simple maintenance items like approved updates, restarts, and storage cleanup.",
                "Treating every background process as dangerous just because it is unfamiliar.",
                "Writing blame-focused reports instead of calm evidence-based recommendations."
              ].map((mistake) => (
                <div key={mistake} className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                  {mistake}
                </div>
              ))}
            </div>
          </SectionCard>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Dashboard</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Student Device Review Snapshot</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ["OS Update", "Restart required", "yellow"],
                ["Account Type", "Standard student", "green"],
                ["Downloads", "Mixed files", "yellow"],
                ["Saved Passwords", "Prompt visible", "red"],
                ["Camera Permission", "Allowed for video app", "green"],
                ["Camera Permission", "Allowed for notes app", "yellow"],
                ["Storage", "12% free", "yellow"],
                ["Shared Session", "Previous tab open", "red"],
              ].map(([label, status, color]) => (
                <div key={`${label}-${status}`} className={`rounded-xl border p-4 ${color === "green" ? "border-emerald-500/30 bg-emerald-500/10" : color === "red" ? "border-red-500/30 bg-red-500/10" : "border-yellow-500/30 bg-yellow-500/10"}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300">
              <p>[08:10] device_profile: fake_student_laptop_lab_03</p>
              <p>[08:12] update_status: restart_required_after_approved_update</p>
              <p>[08:13] downloads_review: school_notes.docx, project-final.pdf, project.pdf.exe</p>
              <p>[08:15] permission_review: notes_app_camera_access_enabled</p>
              <p>[08:17] browser_status: save_password_prompt_visible</p>
              <p>[08:18] recommended_boundary: do_not_open_private_files_or_other_accounts</p>
            </div>
          </section>

          <SectionCard title="Safe Defensive Lab" eyebrow="Fake-data only">
            <p>
              Review the fake device snapshot. Your job is not to fix a real computer. Your job is to write a safe recommendation based on fake evidence.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Good lab action: Recommend saving work, restarting for approved updates, checking unnecessary app permissions with trusted help, avoiding saved passwords on shared devices, and asking staff about another person&apos;s open session.
              </div>
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-100">
                Needs caution: The confusing file name should not be opened. It should be treated as a review item and handled through approved guidance.
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Unsafe lab action: Open unknown files, explore someone else&apos;s session, disable protections, install tools, or change admin settings without permission.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Analyze the Evidence" eyebrow="Device review table">
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-950 text-cyan-200">
                  <tr>
                    <th className="p-3">Evidence</th>
                    <th className="p-3">What it means</th>
                    <th className="p-3">Safe recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/60 text-slate-300">
                  <tr><td className="p-3">Restart required</td><td className="p-3">An approved update may not be complete yet.</td><td className="p-3">Save work and restart at an approved time.</td></tr>
                  <tr><td className="p-3">project.pdf.exe</td><td className="p-3">The file name may be misleading.</td><td className="p-3">Do not open it. Ask trusted support for guidance.</td></tr>
                  <tr><td className="p-3">Notes app camera access</td><td className="p-3">The permission may not match the app&apos;s purpose.</td><td className="p-3">Review with approved settings or technology staff.</td></tr>
                  <tr><td className="p-3">Save password prompt</td><td className="p-3">The browser may store account credentials.</td><td className="p-3">Do not save passwords on shared or school devices.</td></tr>
                  <tr><td className="p-3">Previous session visible</td><td className="p-3">Someone else may have left an account open.</td><td className="p-3">Do not explore. Report to trusted adult or staff.</td></tr>
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="Scenario Decision Challenge" eyebrow="Choose the best response">
            <p>
              You are reviewing the fake snapshot for a student laptop. You notice three issues at once: a confusing file extension, a password-save prompt, and an open browser tab from a previous user.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                Unsafe response: Open the confusing file to see what it does, click around in the previous user&apos;s tab, and save the password so you can finish faster.
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Best response: Do not open the file, do not explore the other account, do not save the password, and write a calm recommendation to ask a teacher or technology staff member for approved help.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Defender Checklist" eyebrow="Skills you should now have">
            <ul className="space-y-3">
              {[
                "I can explain how device components, operating systems, accounts, files, apps, permissions, updates, and shared use connect to cybersecurity.",
                "I can identify fake evidence that needs review without opening private or unknown items.",
                "I can separate facts from guesses when reviewing a fake device dashboard.",
                "I can recommend safe next steps using approved updates, permission review, password safety, and trusted reporting.",
                "I can write a beginner-friendly device safety recommendation that respects privacy and permission boundaries."
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">☐ {item}</li>
              ))}
            </ul>
          </SectionCard>

          <MiniQuiz />

          <SectionCard title="Portfolio Prompt" eyebrow="Build your cyber notebook">
            <p>
              Write a short “Device Review Recommendation” using this format: 1) what fake evidence you noticed, 2) what risk it may create, 3) what not to touch, 4) what safe approved action you recommend, and 5) who should be asked for help if the issue involves another person&apos;s account or school device settings.
            </p>
          </SectionCard>

          <SectionCard title="Key Takeaways" eyebrow="Remember">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                "A device review should connect hardware, operating systems, accounts, files, apps, permissions, updates, and shared-device behavior.",
                "Good defenders use evidence carefully and avoid opening private data, unknown files, or other people&apos;s accounts.",
                "Safe recommendations are calm, realistic, approved, and focused on protecting people and data."
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