"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const footprintExamples = [
  {
    title: "Username Choices",
    category: "Profile Identity",
    example:
      "A student uses the same username for games, school accounts, and public social media comments.",
    reflection:
      "Using the same username everywhere can make it easier for people to connect different parts of your online life.",
  },
  {
    title: "Public Photos",
    category: "Images",
    example:
      "A student posts a photo that shows their school name, team schedule, and location in the background.",
    reflection:
      "Photos can reveal more information than people notice. Background details can expose location, school, or routines.",
  },
  {
    title: "Old Comments",
    category: "Online Behavior",
    example:
      "A student writes rude comments online and later forgets they are still visible.",
    reflection:
      "Comments can become part of a digital footprint. Respectful online behavior protects both reputation and relationships.",
  },
  {
    title: "Privacy Settings",
    category: "Account Safety",
    example:
      "A student leaves every account public without checking who can see posts, photos, or profile details.",
    reflection:
      "Privacy settings help control who can see your information. Reviewing them regularly is a safer habit.",
  },
];

const reflectionQuestions = [
  "What information could someone learn from your public profile?",
  "Do your usernames reveal your real name, school, birthday, or location?",
  "Could a photo accidentally show private details in the background?",
  "Would you be comfortable if a teacher, coach, or future college saw your public comments?",
  "What is one privacy setting you could check this week?",
];

const safeHabits = [
  {
    title: "Think before posting",
    detail:
      "Before posting, ask yourself who could see it, how it could be interpreted, and whether it reveals private information.",
  },
  {
    title: "Check your background",
    detail:
      "Photos and videos can show school names, addresses, license plates, schedules, or locations without you noticing.",
  },
  {
    title: "Use privacy settings",
    detail:
      "Review who can see your posts, profile, tags, comments, and location information.",
  },
  {
    title: "Be respectful",
    detail:
      "Online comments and messages can affect how others see you. Choose words that show maturity and respect.",
  },
  {
    title: "Separate personal details",
    detail:
      "Avoid usernames or bios that reveal your full name, birthday, school, phone number, or exact location.",
  },
];

const doNotShare = [
  "Full home address",
  "Phone number",
  "Passwords",
  "School ID number",
  "Daily schedule",
  "Private account details",
  "Exact live location",
  "Personal family information",
];

export default function DigitalFootprintPage() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [reflection, setReflection] = useState("");

  const example = footprintExamples[selectedExample];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Digital Footprint Reflection
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Learn how your online choices leave a trail.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Your digital footprint includes posts, photos, comments, usernames,
            profiles, tags, and other online activity. This reflection helps
            students think about privacy, reputation, and safer online choices.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Privacy reminder: Do not type private personal information into this
            page. Use general reflections only.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-3xl font-bold text-white">
                Choose an Example
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Click each example to think about how different online choices
                can become part of a digital footprint.
              </p>

              <div className="mt-6 grid gap-3">
                {footprintExamples.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => setSelectedExample(index)}
                    className={`rounded-xl border p-4 text-left transition ${
                      selectedExample === index
                        ? "border-cyan-300 bg-cyan-950/40 text-cyan-100"
                        : "border-slate-800 bg-slate-950/70 text-slate-300 hover:border-cyan-300"
                    }`}
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.category}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {example.category}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-cyan-200">
                {example.title}
              </h2>

              <p className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-lg leading-8 text-slate-200">
                {example.example}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-semibold text-white">Why this matters</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {example.reflection}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Reflection Questions
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These questions help students think carefully about their online
              presence without sharing private information.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {question}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <label className="block text-sm font-semibold text-slate-200">
                Optional general reflection
              </label>

              <textarea
                value={reflection}
                onChange={(event) => setReflection(event.target.value)}
                className="mt-3 min-h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                placeholder="Example: I should check my privacy settings and avoid posting photos that show private details."
              />

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Do not include names, addresses, passwords, phone numbers, or
                private personal details.
              </p>

              {reflection.trim() && (
                <div className="mt-5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-4 text-sm leading-6 text-cyan-100">
                  Preview: {reflection}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Safer Digital Footprint Habits
              </h2>

              <div className="mt-6 grid gap-4">
                {safeHabits.map((habit) => (
                  <div
                    key={habit.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {habit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {habit.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Information to Keep Private
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Students should avoid posting or sharing sensitive details in
                public profiles, comments, forms, or messages.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {doNotShare.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Continue Learning
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Digital footprint safety connects to privacy, scam awareness,
              passwords, and respectful digital citizenship.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/activities"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Back to Activities
              </Link>

              <Link
                href="/resources"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Review Resources
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}