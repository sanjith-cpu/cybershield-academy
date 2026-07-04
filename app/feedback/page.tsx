"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const feedbackCategories = [
  {
    title: "Lesson Clarity",
    detail:
      "Was the cybersecurity topic explained in a way students could understand?",
  },
  {
    title: "Activity Usefulness",
    detail:
      "Did the activity help students practice a real online safety skill?",
  },
  {
    title: "Age Level Fit",
    detail:
      "Was the content appropriate for elementary, middle, or high school students?",
  },
  {
    title: "Teacher Usefulness",
    detail:
      "Could a teacher or school staff member use this page in a classroom setting?",
  },
  {
    title: "Safety and Privacy",
    detail:
      "Did the lesson avoid collecting private information and stay focused on safe defensive learning?",
  },
  {
    title: "Improvement Ideas",
    detail:
      "What could be clearer, shorter, more interactive, or easier to use?",
  },
];

const privacyReminders = [
  "Do not enter real student names.",
  "Do not enter email addresses or phone numbers.",
  "Do not enter passwords or account details.",
  "Do not enter home addresses, school IDs, or private schedules.",
  "Use general feedback only, such as what worked well or what could improve.",
];

const sampleQuestions = [
  "What part of the lesson was easiest to understand?",
  "What part of the lesson was confusing?",
  "Did the activity help students practice a safety habit?",
  "Was the page too easy, too hard, or about right for the audience?",
  "What should CyberShield Academy improve next?",
];

const nextSteps = [
  "Use feedback to improve lessons and activities.",
  "Track general patterns without collecting private student information.",
  "Update the Impact Tracker only with real outreach or real feedback.",
  "Review teacher suggestions before future school sessions.",
];

export default function FeedbackPage() {
  const [role, setRole] = useState("Student");
  const [gradeLevel, setGradeLevel] = useState("Middle School");
  const [category, setCategory] = useState("Lesson Clarity");
  const [usefulness, setUsefulness] = useState("Helpful");
  const [confidence, setConfidence] = useState("A little more confident");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setRole("Student");
    setGradeLevel("Middle School");
    setCategory("Lesson Clarity");
    setUsefulness("Helpful");
    setConfidence("A little more confident");
    setComment("");
    setSubmitted(false);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Feedback Center
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Collect useful feedback without collecting private information.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page shows how CyberShield Academy can collect safe, general
            feedback from students, teachers, and outreach sessions. The goal is
            to improve lessons while protecting privacy.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Privacy note: This is a demo feedback form preview. It does not
            save responses yet. Do not enter real names, passwords, phone
            numbers, addresses, or private account details.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Feedback Categories
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Feedback should help improve the project. It should focus on
              clarity, usefulness, safety, and age-level fit.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {feedbackCategories.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <h2 className="text-3xl font-bold text-cyan-200">
                Demo Feedback Form
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                This form is for preview purposes. Later, it could be connected
                to a safe feedback tool, but only after privacy rules are clear.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Your role
                  </label>
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  >
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Parent</option>
                    <option>Outreach Volunteer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Audience level
                  </label>
                  <select
                    value={gradeLevel}
                    onChange={(event) => setGradeLevel(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  >
                    <option>Elementary School</option>
                    <option>Middle School</option>
                    <option>High School</option>
                    <option>Teacher / Adult</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Feedback category
                  </label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  >
                    {feedbackCategories.map((item) => (
                      <option key={item.title}>{item.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    How useful was it?
                  </label>
                  <select
                    value={usefulness}
                    onChange={(event) => setUsefulness(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  >
                    <option>Very helpful</option>
                    <option>Helpful</option>
                    <option>Somewhat helpful</option>
                    <option>Needs improvement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Confidence after learning
                  </label>
                  <select
                    value={confidence}
                    onChange={(event) => setConfidence(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  >
                    <option>Much more confident</option>
                    <option>A little more confident</option>
                    <option>About the same</option>
                    <option>Still confused</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200">
                    General comment
                  </label>
                  <textarea
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    className="mt-2 min-h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                    placeholder="Example: The scam examples were clear, but I would like more practice questions."
                  />
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Do not include names, passwords, contact information, or
                    private details.
                  </p>
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Preview Feedback
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Feedback Preview
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                This preview shows what a safe general feedback summary could
                look like before saving anything in the future.
              </p>

              {!submitted ? (
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 text-sm leading-6 text-slate-300">
                  Fill out the demo form and click Preview Feedback.
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-slate-950/70 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Preview Only
                  </p>

                  <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                    <p>
                      <span className="font-semibold text-white">Role:</span>{" "}
                      {role}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Audience:
                      </span>{" "}
                      {gradeLevel}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Category:
                      </span>{" "}
                      {category}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Usefulness:
                      </span>{" "}
                      {usefulness}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Confidence:
                      </span>{" "}
                      {confidence}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Comment:
                      </span>{" "}
                      {comment.trim()
                        ? comment
                        : "No general comment added."}
                    </p>
                  </div>

                  <p className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-950/20 p-4 text-sm leading-6 text-yellow-100">
                    This preview is not saved. It is only showing what safe
                    feedback could look like.
                  </p>

                  <button
                    onClick={resetForm}
                    className="mt-5 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Reset Form
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Privacy Reminders
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              Feedback should be safe, general, and useful. It should not ask
              students to reveal private information.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {privacyReminders.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Sample Feedback Questions
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These questions can be used after lessons, activities, or
                outreach sessions.
              </p>

              <div className="mt-6 grid gap-3">
                {sampleQuestions.map((question) => (
                  <div
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                How Feedback Will Be Used
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Feedback should help improve CyberShield Academy without
                exaggerating impact or collecting private information.
              </p>

              <div className="mt-6 grid gap-3">
                {nextSteps.map((step) => (
                  <div
                    key={step}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Related Pages
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to connect feedback with outreach, classroom
              lessons, and honest impact tracking.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/impact"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Impact Tracker
              </Link>

              <Link
                href="/outreach"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Outreach
              </Link>

              <Link
                href="/teacher-toolkit"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Teacher Toolkit
              </Link>

              <Link
                href="/resources"
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}