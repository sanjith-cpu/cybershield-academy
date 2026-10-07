import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Windows password and account policies reduce weak authentication and brute-force risk.",
  "Distinguish password length, complexity, history, age, and lockout settings instead of treating them as one control.",
  "Read scenario requirements before forcing a generic policy that could break required user access.",
  "Recognize the tradeoff between strong security settings and unnecessary user lockout or administrative disruption.",
  "Use Local Security Policy and PowerShell inspection to understand the current account-policy state.",
  "Verify that policy changes applied correctly and still support authorized users and administrators.",
];

const policyAreas = [
  {
    title: "Password length",
    question: "How many characters must a password contain?",
    why:
      "Longer passwords increase the search space for guessing attacks and can be more effective than relying only on character-class complexity.",
    caution:
      "Do not assume one exact number is always correct. Use scenario guidance and the competition environment.",
  },
  {
    title: "Password complexity",
    question: "What character requirements must passwords satisfy?",
    why:
      "Complexity rules can prevent extremely weak passwords, but they are only one part of a strong authentication policy.",
    caution:
      "Complexity without sufficient length can still produce predictable passwords.",
  },
  {
    title: "Password history",
    question: "How many previous passwords are remembered?",
    why:
      "History helps prevent users from cycling immediately back to recently used passwords.",
    caution:
      "A history setting only works as intended when password changes are meaningful and not instantly reversed.",
  },
  {
    title: "Maximum password age",
    question: "How long may a password be used before Windows requires a change?",
    why:
      "Some environments use expiration requirements, while others may emphasize longer passwords and compromise-based resets.",
    caution:
      "Follow scenario or organization requirements rather than applying an arbitrary expiration value everywhere.",
  },
  {
    title: "Minimum password age",
    question: "How soon may a user change the password again?",
    why:
      "A minimum age can help stop rapid password cycling used to defeat password history requirements.",
    caution:
      "An overly restrictive value can interfere with legitimate recovery or administrative work.",
  },
  {
    title: "Account lockout threshold",
    question: "How many failed sign-ins trigger a lockout?",
    why:
      "Lockout can slow repeated password guessing and provide a signal that an account is being targeted.",
    caution:
      "An overly aggressive threshold can create denial-of-service conditions against legitimate users.",
  },
  {
    title: "Account lockout duration",
    question: "How long does a locked account remain locked?",
    why:
      "Duration determines how long the system resists continued guessing after the threshold is reached.",
    caution:
      "Balance security with the need to restore authorized access in the competition environment.",
  },
  {
    title: "Reset lockout counter",
    question: "When does the failed-attempt counter return to zero?",
    why:
      "This setting works together with threshold and duration and affects how repeated attempts are measured.",
    caution:
      "Evaluate the three lockout settings as one policy set rather than changing them independently without context.",
  },
];

const policyThinking = [
  {
    title: "Scenario requirement",
    text:
      "If the scenario specifies password or lockout requirements, those requirements take priority over generic preferences.",
  },
  {
    title: "Security objective",
    text:
      "Ask what risk the setting is meant to reduce: weak passwords, password reuse, repeated guessing, or unmanaged account access.",
  },
  {
    title: "User impact",
    text:
      "Consider whether a setting could unnecessarily lock out legitimate users or interrupt required administration.",
  },
  {
    title: "Policy interaction",
    text:
      "Password and lockout settings work together. A secure result comes from the combined policy, not one isolated number.",
  },
  {
    title: "Verification",
    text:
      "After a change, re-open or re-query the policy so you know the intended value actually applied.",
  },
];

const localSecurityPolicy = [
  {
    path:
      "Win + R → secpol.msc → Account Policies → Password Policy",
    covers:
      "Password history, maximum age, minimum age, minimum length, complexity requirements, and reversible encryption settings.",
  },
  {
    path:
      "Win + R → secpol.msc → Account Policies → Account Lockout Policy",
    covers:
      "Lockout threshold, lockout duration, and reset-counter timing.",
  },
  {
    path:
      "Win + R → secpol.msc → Local Policies → Security Options",
    covers:
      "Additional account-related and sign-in security settings that may affect local authentication behavior.",
  },
];

const powershellExamples = [
  {
    label: "Inspect local account policy",
    command: "net accounts",
    purpose:
      "Shows a compact summary of local password and lockout policy values on a Windows system.",
  },
  {
    label: "Inspect local users",
    command: "Get-LocalUser",
    purpose:
      "Lets the team compare account state with the policy and scenario while investigating authentication issues.",
  },
  {
    label: "Inspect one user",
    command: 'Get-LocalUser -Name "exampleuser"',
    purpose:
      "Shows information about a specific authorized practice account, including enabled state and password-related properties.",
  },
];

const interpretationCases = [
  {
    title: "Minimum length is very low",
    evidence:
      "The current local policy permits very short passwords and the scenario expects stronger account security.",
    reasoning:
      "This is a clear policy weakness because weak length requirements allow easy-to-guess credentials.",
    response:
      "Choose a stronger length requirement that fits the scenario, then verify it applied.",
  },
  {
    title: "Lockout threshold is disabled",
    evidence:
      "Repeated failed sign-ins do not trigger any account lockout and the scenario gives no reason to preserve that behavior.",
    reasoning:
      "A disabled threshold may allow unlimited guessing attempts against local accounts.",
    response:
      "Set a reasonable threshold and review duration/reset settings as a coordinated group.",
  },
  {
    title: "Password expiration is already strict",
    evidence:
      "The current maximum age is already short, but users are being forced into frequent changes with no scenario requirement.",
    reasoning:
      "Stricter is not automatically better. Policy should match the security objective and scenario.",
    response:
      "Avoid changing values simply to make them more restrictive. Compare against the expected policy first.",
  },
  {
    title: "User repeatedly locks out",
    evidence:
      "A legitimate user is hitting the lockout threshold during authorized work.",
    reasoning:
      "The cause may be mistyped credentials, stale saved credentials, a service, or another authentication source.",
    response:
      "Investigate why the failures occur rather than weakening the entire policy immediately.",
  },
];

const weakPatterns = [
  {
    title: "Short predictable passwords",
    text:
      "Even with complexity enabled, users can create predictable patterns if minimum length is too low.",
  },
  {
    title: "Password reuse",
    text:
      "Without meaningful history controls, users may cycle back to the same password repeatedly.",
  },
  {
    title: "Unlimited guessing",
    text:
      "A disabled lockout threshold can permit repeated attempts with no account-level interruption.",
  },
  {
    title: "Overly aggressive lockout",
    text:
      "A threshold that is too low can make it easy to lock legitimate users out of required work.",
  },
  {
    title: "Policy without verification",
    text:
      "Changing the GUI does not prove the final policy is what you intended. Re-check the resulting values.",
  },
  {
    title: "One-size-fits-all numbers",
    text:
      "Competition scenarios and environments differ. Use requirements and evidence instead of memorizing one universal set of values.",
  },
];

const relationshipModels = [
  {
    title: "Length + complexity",
    text:
      "Length increases password search space, while complexity can block very simple patterns. They complement each other.",
  },
  {
    title: "History + minimum age",
    text:
      "History remembers prior passwords; minimum age can prevent rapid cycling through changes just to reuse an old password.",
  },
  {
    title: "Threshold + duration + reset counter",
    text:
      "These three lockout settings form one system. Changing one changes the practical effect of the others.",
  },
  {
    title: "Policy + user state",
    text:
      "A strong policy is only useful if authorized accounts remain enabled, accessible, and correctly privileged.",
  },
];

const safeChangeQuestions = [
  "Does the scenario specify an exact password or lockout requirement?",
  "Which current setting is actually weak or inconsistent?",
  "What risk will the change reduce?",
  "Could the change lock out legitimate users or administrators?",
  "Will the setting affect a service account or scheduled task using stored credentials?",
  "Do I need to coordinate with a teammate before changing it?",
  "How will I verify the policy after the change?",
];

const fictionalLab = [
  {
    number: "01",
    title: "Read the scenario",
    text:
      "A fictional Windows 11 workstation has four authorized users and one authorized administrator. The scenario requires strong passwords and resistance to repeated guessing.",
  },
  {
    number: "02",
    title: "Inspect the current policy",
    text:
      "The system shows a very low minimum password length, no meaningful password history, and no account lockout threshold.",
  },
  {
    number: "03",
    title: "Identify the weakness",
    text:
      "The policy allows weak credentials and repeated sign-in attempts without lockout. These findings directly conflict with the stated security objective.",
  },
  {
    number: "04",
    title: "Design the correction",
    text:
      "Choose stronger password and lockout values that satisfy the fictional requirements without creating an unreasonable denial-of-service risk for legitimate users.",
  },
  {
    number: "05",
    title: "Apply in authorized practice",
    text:
      "Use Local Security Policy or another approved administrative method to make the required changes in the fictional environment.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Re-open the policy or run an inspection command to confirm the final values and ensure the authorized administrator still has working access.",
  },
];

const troubleshooting = [
  {
    symptom: "A policy value appears not to change",
    questions:
      "Was the correct policy area edited? Is another policy source controlling the setting? Was the value refreshed or re-queried after the change?",
  },
  {
    symptom: "A legitimate user is locked out",
    questions:
      "Was the lockout threshold intentionally reached? Are stale credentials being used by a service or saved connection? Is the account still required?",
  },
  {
    symptom: "Users cannot change passwords as expected",
    questions:
      "Is minimum password age preventing another immediate change? Are password requirements being met? Is a different policy source applying?",
  },
  {
    symptom: "The policy looks strong but weak passwords still exist",
    questions:
      "Were passwords created before the policy changed? Does the scenario require forced changes? Is there evidence of password-related risk that should be addressed separately?",
  },
];

const verificationChecklist = [
  "Re-open Password Policy and confirm every changed value.",
  "Re-open Account Lockout Policy and confirm threshold, duration, and reset-counter values.",
  "Run an inspection command such as net accounts when appropriate.",
  "Confirm the authorized administrator still has access.",
  "Confirm required users are not unexpectedly disabled or locked out.",
  "Check whether services or scheduled tasks depend on stored credentials.",
  "Document meaningful policy changes for the team.",
  "Revisit any exact scenario requirements before leaving the account-policy area.",
];

const reflection = [
  "Why is password length different from password complexity?",
  "How do password history and minimum password age work together?",
  "Why should lockout threshold, duration, and reset counter be reviewed as one group?",
  "What security problem can occur if the lockout threshold is too aggressive?",
  "Why should an exact scenario requirement override a generic remembered value?",
  "What should you verify after changing Windows account policy?",
];

export default function PasswordAccountPoliciesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/users-groups-administrators" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/local-security-policy" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Password &amp; Account Policies
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Windows password and lockout controls work together,
                why stronger does not always mean more restrictive, and how to
                apply scenario-driven authentication policy safely.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to memorize one set of numbers. The goal is to
                understand what each policy protects, how the settings interact,
                what the scenario requires, and how to verify the final account
                policy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core policy areas</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Policy groups</span>
                  <span className="font-bold text-white">2 primary</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main principle</span>
                  <span className="font-bold text-white">Scenario-driven</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Strong usable authentication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Learning objectives
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What account policy should help you reason about
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A password policy is a system, not one setting
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Length, complexity, history, password age, and account lockout
              each solve different problems. Treating one setting as the entire
              policy leads to weak or unnecessarily disruptive results.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition caution
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not memorize one “perfect” set of values
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Scenario requirements can differ. Strong teams understand the
              purpose of the control and choose a value that matches the
              authorized environment.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              A more restrictive value can still be the wrong value if it breaks
              legitimate access or conflicts with the scenario.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Core policy areas
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Eight controls you should understand
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {policyAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <div className="mt-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Question
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Why it matters
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.why}
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Caution
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.caution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Policy reasoning
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Five things to think about before changing a value
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {policyThinking.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Local Security Policy
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Where the settings live
            </h2>

            <div className="mt-5 grid gap-3">
              {localSecurityPolicy.map((item) => (
                <div
                  key={item.path}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <code className="block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm font-semibold text-cyan-200">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.covers}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Inspection commands
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Read the policy before changing it
            </h2>

            <div className="mt-5 grid gap-3">
              {powershellExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Policy relationships
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Settings work together
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relationshipModels.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Interpretation cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Read the evidence before deciding what to change
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {interpretationCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.evidence}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Reasoning
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.reasoning}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Weak policy patterns
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Problems to recognize
            </h2>

            <div className="mt-5 grid gap-3">
              {weakPatterns.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before you change policy
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Seven safe-change questions
            </h2>

            <div className="mt-5 grid gap-3">
              {safeChangeQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Fictional defensive lab
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Repair a weak local account policy
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {fictionalLab.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Troubleshooting
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              When account policy behaves differently than expected
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.questions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your account-policy reasoning
            </h2>

            <div className="mt-5 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the final authentication policy
            </h2>

            <div className="mt-5 grid gap-3">
              {verificationChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Local Security Policy
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, move beyond password settings into user rights,
                auditing, security options, and other local-policy decisions
                that affect the entire Windows image.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/local-security-policy"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 04 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/users-groups-administrators" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/local-security-policy" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
