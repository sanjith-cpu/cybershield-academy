import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B7.1",
    title: "Why Authentication Exists",
    route: "why-authentication-exists",
    focus: "Understand how authentication helps systems verify identity before allowing access to accounts, data, and services.",
    lab: "Review a fake login flow and identify where identity verification protects an account.",
  },
  {
    number: "B7.2",
    title: "Passphrases and Password Strength",
    route: "passphrases-and-password-strength",
    focus: "Compare weak passwords with stronger passphrases and explain what makes a login secret harder to guess or reuse.",
    lab: "Evaluate fake password examples and rewrite them as stronger school-safe passphrases.",
  },
  {
    number: "B7.3",
    title: "Password Managers and Reuse Risk",
    route: "password-managers-and-reuse-risk",
    focus: "Learn why password reuse creates chain-reaction risk and how password managers support unique account protection.",
    lab: "Analyze a fake password reuse map and identify which accounts would be affected by one exposed password.",
  },
  {
    number: "B7.4",
    title: "MFA Types and Login Verification",
    route: "mfa-types-and-login-verification",
    focus: "Explore common multi-factor authentication methods and how extra verification strengthens account defense.",
    lab: "Compare fake MFA options and choose safer verification methods for different account scenarios.",
  },
  {
    number: "B7.5",
    title: "Account Recovery and Login Alerts",
    route: "account-recovery-and-login-alerts",
    focus: "Review recovery options, backup methods, login alerts, and safer responses to unexpected account activity.",
    lab: "Inspect fake recovery settings and fake login alerts to decide what action should happen next.",
  },
  {
    number: "B7.6",
    title: "Account Security Checklist",
    route: "account-security-checklist",
    focus: "Combine passphrases, unique credentials, MFA, recovery settings, alerts, and privacy controls into one routine.",
    lab: "Complete a fake account security audit and build a beginner-friendly defender checklist.",
  },
  {
    number: "B7.7",
    title: "Authentication Scenario Lab",
    route: "authentication-scenario-lab",
    focus: "Apply authentication concepts to fake login prompts, fake alerts, fake recovery messages, and defensive decisions.",
    lab: "Complete a multi-step fake account incident and write a short defender-style recommendation.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B7 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain why authentication exists and how systems use it to verify identity.",
  "Recognize stronger passphrase choices and explain why password reuse creates risk.",
  "Describe how password managers support unique account credentials.",
  "Compare common MFA methods and respond safely to unexpected verification prompts.",
  "Review account recovery settings, login alerts, and defensive account security habits.",
];

const authenticationFlow = [
  { label: "Identity Claim", text: "A user enters a username, email address, account name, or another identifier." },
  { label: "Credential Check", text: "The system checks a password, passphrase, device, token, biometric, or other approved factor." },
  { label: "Extra Verification", text: "MFA may request a second factor to reduce risk if one credential is exposed." },
  { label: "Access Decision", text: "The system allows, limits, blocks, or challenges the login based on the evidence." },
  { label: "Monitoring", text: "Login alerts, recovery settings, device history, and account review help detect unusual activity." },
];

const fakeAuthenticationEvents = [
  ["Login", "Correct passphrase entered from a recognized school device", "Verified"],
  ["MFA", "Unexpected approval prompt received without a login attempt", "Do not approve"],
  ["Recovery", "Backup email is outdated and no longer accessible", "Update settings"],
  ["Alert", "New device login detected from an unfamiliar location", "Review activity"],
];

export default function PasswordsAuthenticationAccountSecurityModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
            <Link
              href="/high-school/beginner/digital-identity-and-privacy"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner/passwords-authentication-and-account-security/why-authentication-exists"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1 →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B7
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Passwords, Authentication,
                and Account Security
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn why authentication exists, how passphrases and password managers protect accounts, how MFA adds
                verification, and how recovery settings and login alerts support safer account defense.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/passwords-authentication-and-account-security/why-authentication-exists"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/passwords-authentication-and-account-security/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">Module Snapshot</h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Module Mission</p>
            <h2 className="mt-3 text-3xl font-black text-white">Protect accounts before access is lost.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Account security is not just one password. It is the combination of identity verification, strong and unique
              credentials, MFA, recovery settings, login alerts, and careful responses to unexpected prompts. Students
              learn how each layer reduces account risk without using real credentials.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">Safety Reminder</p>
            <p className="mt-3 leading-7 text-yellow-50">
              This module uses fake passwords, fake passphrases, fake MFA prompts, fake login alerts, and fake recovery
              settings. Students should never type or share real passwords, MFA codes, recovery codes, or private account
              information in any activity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
            <h2 className="mt-2 text-3xl font-black text-white">Authentication and account defense flow</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Defenders think about how identity is claimed, how credentials are checked, when extra verification appears,
              how access is decided, and how activity is monitored afterward.
            </p>
            <div className="mt-6 space-y-3">
              {authenticationFlow.map((step, index) => (
                <div
                  key={step.label}
                  className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div className="hidden h-px w-10 bg-cyan-400/30 sm:block" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Fake Account Panel</p>
                <h2 className="mt-2 text-2xl font-black text-white">Authentication Review Events</h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeAuthenticationEvents.map(([area, event, status]) => (
                <div key={`${area}-${event}`} className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3">
                  <span className="font-mono font-bold text-cyan-200">{area}</span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">{status}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. It helps students practice account-security reasoning without using real accounts,
              passwords, codes, or student information.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Learning Path</p>
            <h2 className="mt-2 text-4xl font-black text-white">B7 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fake login flows, fake passphrases, fake MFA prompts, fake alerts, and safe decision checks to
            build professional account-security habits.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/passwords-authentication-and-account-security/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">{lesson.number}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Lesson {index + 1}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.focus}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Safe Lab</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.lab}</p>
                </div>
                <span className="text-sm font-bold text-cyan-300">Open →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Objectives</p>
            <h2 className="mt-2 text-3xl font-black text-white">By the end, students can:</h2>
            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div key={objective} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">Module Assessment</p>
            <h2 className="mt-2 text-3xl font-black text-white">B7 Module Test</h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering authentication concepts, passphrases, password
              managers, password reuse, MFA, account recovery, login alerts, and defensive account-security scenarios.
              Answers and explanations stay hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/passwords-authentication-and-account-security/module-test"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href="/high-school/beginner/digital-identity-and-privacy"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/passwords-authentication-and-account-security/why-authentication-exists"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B7.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}