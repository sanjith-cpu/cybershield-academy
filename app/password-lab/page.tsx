"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function getPasswordFeedback(password: string) {
  const checks = [
    {
      label: "At least 12 characters long",
      passed: password.length >= 12,
    },
    {
      label: "Has uppercase letters",
      passed: /[A-Z]/.test(password),
    },
    {
      label: "Has lowercase letters",
      passed: /[a-z]/.test(password),
    },
    {
      label: "Has numbers",
      passed: /[0-9]/.test(password),
    },
    {
      label: "Has symbols",
      passed: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const commonPasswords = ["password", "123456", "qwerty", "admin", "iloveyou"];
  const isCommon = commonPasswords.includes(password.toLowerCase());

  const score = checks.filter((check) => check.passed).length - (isCommon ? 2 : 0);
  const finalScore = Math.max(0, score);

  let strength = "Weak";
  let message = "This sample password needs major improvements.";

  if (finalScore >= 5) {
    strength = "Strong";
    message = "This sample password has several strong security habits.";
  } else if (finalScore >= 3) {
    strength = "Medium";
    message = "This sample password is improving, but it could still be stronger.";
  }

  return {
    checks,
    isCommon,
    score: finalScore,
    strength,
    message,
  };
}

export default function PasswordLabPage() {
  const [password, setPassword] = useState("");

  const feedback = getPasswordFeedback(password);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-5xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Interactive Activity
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Password Safety Lab
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
          Test a sample password and learn what makes passwords stronger. This
          lab teaches students about length, variety, uniqueness, and avoiding
          common passwords.
        </p>

        <div className="rounded-2xl border border-yellow-500 bg-yellow-950 p-5 mb-10">
          <h2 className="text-xl font-bold mb-2">Important Safety Reminder</h2>
          <p className="text-slate-200">
            Do not type any real password here. Use a fake sample password only.
            CyberShield Academy does not save passwords, but real passwords
            should never be typed into practice tools.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 mb-8">
          <label className="block font-semibold mb-3" htmlFor="password">
            Type a sample password:
          </label>

          <input
            id="password"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Example: CyberTiger!2026"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
          />

          <p className="text-sm text-slate-400 mt-3">
            Use a made-up password for learning only.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-3">
              Strength: {password ? feedback.strength : "Not tested yet"}
            </h2>

            <p className="text-slate-300 mb-4">
              {password
                ? feedback.message
                : "Type a sample password to see feedback."}
            </p>

            {password && (
              <p className="text-slate-300">
                Score: {feedback.score} / 5
              </p>
            )}
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold mb-4">
              Password Safety Checklist
            </h2>

            <div className="space-y-3">
              {feedback.checks.map((check) => (
                <div
                  key={check.label}
                  className={`rounded-xl border p-4 ${
                    password && check.passed
                      ? "border-green-500 bg-green-950"
                      : "border-slate-700 bg-slate-950"
                  }`}
                >
                  {password && check.passed ? "Passed: " : "Check: "}
                  {check.label}
                </div>
              ))}

              {password && feedback.isCommon && (
                <div className="rounded-xl border border-red-500 bg-red-950 p-4">
                  Warning: This is a very common password and should not be used.
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-2xl font-bold mb-4">
            How to create safer passwords
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-300">
            <div className="rounded-xl border border-slate-800 p-4">
              Use longer passwords or passphrases.
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              Avoid using your name, birthday, school, or favorite team.
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              Do not reuse the same password everywhere.
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              Use multi-factor authentication when available.
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}