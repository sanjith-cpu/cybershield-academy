"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export default function UpdatePasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleUpdatePassword(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error: updateError } =
      await supabase.auth.updateUser({
        password,
      });

    if (updateError) {
      setError(
        "We could not update your password. Your reset link may have expired. Please request a new one."
      );
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1500);
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
              Choose a new password
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Create a new password for your CyberShield Academy
              account.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl sm:p-8">
            {success ? (
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-2xl text-cyan-300">
                  ✓
                </div>

                <h2 className="text-2xl font-bold">
                  Password updated
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Your new password has been saved. You&apos;re being
                  returned to your CyberShield dashboard.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleUpdatePassword}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    New password
                  </label>

                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="At least 8 characters"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Confirm new password
                  </label>

                  <input
                    id="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    placeholder="Enter your new password again"
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
                    ? "Updating password..."
                    : "Update Password"}
                </button>
              </form>
            )}
          </div>

          {!success && (
            <p className="mt-6 text-center text-sm text-slate-400">
              Need a new reset link?{" "}
              <Link
                href="/forgot-password"
                className="font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Request another
              </Link>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}