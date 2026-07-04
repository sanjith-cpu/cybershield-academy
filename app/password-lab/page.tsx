"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const passwordTips = [
  {
    title: "Use length",
    detail:
      "Longer passwords are harder to guess. A passphrase with several words can be easier to remember and stronger.",
  },
  {
    title: "Avoid personal details",
    detail:
      "Do not use your name, birthday, school name, pet name, team name, or other information people could guess.",
  },
  {
    title: "Mix character types",
    detail:
      "Using uppercase letters, lowercase letters, numbers, and symbols can make a password stronger.",
  },
  {
    title: "Use unique passwords",
    detail:
      "Do not reuse the same password everywhere. If one account is stolen, reused passwords can put other accounts at risk.",
  },
  {
    title: "Turn on multi-factor authentication",
    detail:
      "MFA adds another protection step, such as a code or approval prompt, even if someone learns your password.",
  },
  {
    title: "Use a trusted password manager",
    detail:
      "A password manager can help store strong unique passwords so you do not have to memorize all of them.",
  },
];

const fakeExamples = [
  {
    label: "Weak",
    password: "password123",
    reason:
      "This is short, common, and easy to guess. Many people use passwords like this.",
  },
  {
    label: "Weak",
    password: "Sanjith2026",
    reason:
      "Names, school years, birthdays, and personal details can be easier for others to guess.",
  },
  {
    label: "Better",
    password: "RiverCloudTiger42",
    reason:
      "This is longer and uses multiple words plus numbers, but adding a symbol would make it stronger.",
  },
  {
    label: "Stronger",
    password: "Blue!River42Cloud",
    reason:
      "This is longer and mixes uppercase letters, lowercase letters, numbers, and a symbol.",
  },
];

const myths = [
  {
    myth: "Myth: Changing one letter to a number always makes a password strong.",
    fact:
      "Fact: Simple swaps like a = 4 or o = 0 are common. Length and uniqueness matter more.",
  },
  {
    myth: "Myth: It is okay to reuse a strong password everywhere.",
    fact:
      "Fact: Even a strong password should not be reused. Every important account should have its own password.",
  },
  {
    myth: "Myth: Passwords are the only thing that protects an account.",
    fact:
      "Fact: MFA, recovery settings, privacy settings, and scam awareness also help protect accounts.",
  },
  {
    myth: "Myth: If a message looks official, it is safe to type your password.",
    fact:
      "Fact: Fake login pages can look real. Go directly to the official website or app instead of clicking random links.",
  },
];

const checklist = [
  "Is it at least 12 characters long?",
  "Does it avoid names, birthdays, school names, and personal details?",
  "Does it use a mix of letters, numbers, or symbols?",
  "Is it different from passwords used on other accounts?",
  "Would it be hard for a friend, classmate, or stranger to guess?",
];

function evaluatePassword(password: string) {
  let score = 0;

  const hasLength = password.length >= 12;
  const hasLongLength = password.length >= 16;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const hasNoSpacesOnly = password.trim().length > 0;

  if (hasLength) score += 1;
  if (hasLongLength) score += 1;
  if (hasUppercase) score += 1;
  if (hasLowercase) score += 1;
  if (hasNumber) score += 1;
  if (hasSymbol) score += 1;

  const checks = [
    {
      label: "At least 12 characters",
      passed: hasLength,
    },
    {
      label: "At least 16 characters for extra strength",
      passed: hasLongLength,
    },
    {
      label: "Uses uppercase letters",
      passed: hasUppercase,
    },
    {
      label: "Uses lowercase letters",
      passed: hasLowercase,
    },
    {
      label: "Uses numbers",
      passed: hasNumber,
    },
    {
      label: "Uses symbols",
      passed: hasSymbol,
    },
  ];

  let rating = "Very Weak";
  let message =
    "This example needs work. Try making it longer and less predictable.";

  if (!hasNoSpacesOnly) {
    rating = "No example entered";
    message = "Type a fake practice password to see the lab feedback.";
  } else if (score >= 5) {
    rating = "Strong";
    message =
      "This example has several strong features. Remember to keep real passwords unique and private.";
  } else if (score >= 3) {
    rating = "Medium";
    message =
      "This example has some good parts, but it could be longer or use more variety.";
  } else if (score >= 1) {
    rating = "Weak";
    message =
      "This example is still easier to guess. Try adding length, variety, and less predictable words.";
  }

  return {
    score,
    rating,
    message,
    checks,
  };
}

export default function PasswordLabPage() {
  const [practicePassword, setPracticePassword] = useState(
    "Blue!River42Cloud"
  );

  const result = useMemo(
    () => evaluatePassword(practicePassword),
    [practicePassword]
  );

  const strengthPercent = Math.min((result.score / 6) * 100, 100);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Password Safety Lab
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Learn how stronger passwords protect accounts.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This lab teaches students how to evaluate password strength using
            safe, fake examples. Do not type a real password into this page or
            any classroom activity.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Safety reminder: Only use fake practice passwords here. Never enter
            your real school, email, gaming, bank, or social media password.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Try a Fake Practice Password
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Type a fake example below. The lab checks length, uppercase
                  letters, lowercase letters, numbers, and symbols.
                </p>

                <label className="mt-6 block text-sm font-semibold text-slate-300">
                  Fake practice password
                </label>

                <input
                  value={practicePassword}
                  onChange={(event) => setPracticePassword(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder="Example: Blue!River42Cloud"
                />

                <p className="mt-3 text-xs leading-5 text-slate-400">
                  This tool is for learning only. Do not test real passwords.
                </p>

                <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all"
                    style={{ width: `${strengthPercent}%` }}
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Lab Result
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {result.rating}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {result.message}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Strength Checklist
                </h2>

                <div className="mt-6 grid gap-3">
                  {result.checks.map((check) => (
                    <div
                      key={check.label}
                      className={`rounded-xl border p-4 text-sm font-medium ${
                        check.passed
                          ? "border-green-400 bg-green-950/30 text-green-100"
                          : "border-slate-800 bg-slate-950/70 text-slate-300"
                      }`}
                    >
                      {check.passed ? "✓" : "○"} {check.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Fake Password Examples
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These examples are not real passwords. They are practice examples
              to help students compare weak, better, and stronger choices.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {fakeExamples.map((example) => (
                <div
                  key={example.password}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {example.label}
                  </span>

                  <p className="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-sm text-slate-100">
                    {example.password}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {example.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Password Safety Tips
              </h2>

              <div className="mt-6 grid gap-4">
                {passwordTips.map((tip) => (
                  <div
                    key={tip.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-200">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {tip.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Myths vs Facts
              </h2>

              <div className="mt-6 grid gap-4">
                {myths.map((item) => (
                  <div
                    key={item.myth}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <p className="font-semibold text-red-200">{item.myth}</p>
                    <p className="mt-2 text-sm leading-6 text-green-200">
                      {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Before You Trust a Password
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              A strong password should be hard to guess, unique, and protected
              by safe account habits.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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
                href="/quiz"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}