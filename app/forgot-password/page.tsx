"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "../../utils/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);
    setLoading(true);

    const supabase = createClient();

    const { error: resetError } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

    if (resetError) {
      setError(
        "We could not send the reset email right now. Please try again."
      );
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
            >
              CyberShield Academy
            </Link>

            <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
              Reset your password
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Enter the email address connected to your CyberShield
              Academy account.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl sm:p-8">
            {success ? (
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-2xl text-cyan-300">
                  ✓
                </div>

                <h2 className="text-2xl font-bold">
                  Check your email
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  If an account exists for{" "}
                  <span className="font-medium text-white">
                    {email}
                  </span>
                  , a password reset link has been sent.
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Follow the link in the email to choose a new
                  password.
                </p>

                <Link
                  href="/login"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Return to Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Sending reset link..."
                    : "Send Reset Link"}
                </button>
              </form>
            )}
          </div>

          {!success && (
            <p className="mt-6 text-center text-sm text-slate-400">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}