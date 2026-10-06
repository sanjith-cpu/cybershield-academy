import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what evidence-based hardening means and why it is safer than blindly following a checklist.",
  "Use scenario, system, policy, and forensic evidence to justify defensive decisions.",
  "Separate observation, interpretation, action, and verification so assumptions do not become facts.",
  "Recognize when a security recommendation should be adapted because of required functionality.",
  "Choose the least disruptive change that still addresses the confirmed problem.",
  "Verify both the improved security state and the continued operation of required services after major changes.",
];

const evidenceTypes = [
  {
    title: "Scenario evidence",
    text: "The competition instructions define authorized users, administrators, services, applications, restrictions, or required capabilities.",
    example:
      "The scenario says only one named user should be an administrator. This gives you a clear reference for evaluating elevated privileges.",
  },
  {
    title: "System evidence",
    text: "The machine itself shows a specific condition through users, groups, settings, services, files, logs, processes, software, or configuration.",
    example:
      "A user is currently in the local Administrators group even though the scenario does not authorize that privilege.",
  },
  {
    title: "Policy evidence",
    text: "A security requirement or accepted defensive standard explains what a secure configuration should look like.",
    example:
      "A password or firewall policy provides a baseline for judging whether the current setting is too weak.",
  },
  {
    title: "Forensic evidence",
    text: "Logs, timestamps, files, metadata, processes, or other artifacts support an investigation or answer a forensic question.",
    example:
      "A log entry supports a conclusion about when a suspicious event happened and helps the team decide what should be preserved.",
  },
];

const reasoningChain = [
  {
    number: "01",
    title: "Observe",
    text: "Record the actual condition without immediately labeling it malicious, safe, authorized, or unnecessary.",
  },
  {
    number: "02",
    title: "Compare",
    text: "Compare the observation with scenario requirements, known policy expectations, and other available evidence.",
  },
  {
    number: "03",
    title: "Decide",
    text: "Determine whether the condition is confirmed as a problem, still uncertain, or intentionally required.",
  },
  {
    number: "04",
    title: "Change",
    text: "Apply the least disruptive defensive action that addresses the confirmed issue while preserving required functionality.",
  },
  {
    number: "05",
    title: "Verify",
    text: "Confirm the security condition improved and that the system still performs its required role.",
  },
  {
    number: "06",
    title: "Document",
    text: "Record the reason, change, result, and any remaining follow-up so the team can trace what happened.",
  },
];

const confidenceLevels = [
  {
    level: "High confidence",
    color: "emerald",
    meaning:
      "The scenario or strong system evidence clearly identifies a problem, and the team understands the likely impact of the fix.",
    action:
      "Proceed with a controlled change and verification.",
  },
  {
    level: "Medium confidence",
    color: "yellow",
    meaning:
      "The condition looks suspicious or insecure, but some context is still missing.",
    action:
      "Investigate further, coordinate with the team, and avoid disruptive action until the uncertainty is reduced.",
  },
  {
    level: "Low confidence",
    color: "red",
    meaning:
      "The conclusion depends mostly on assumptions or unfamiliarity rather than evidence.",
    action:
      "Do not make a high-impact change. Record the observation and gather evidence first.",
  },
];

const leastDisruptiveExamples = [
  {
    problem: "A legitimate user has unnecessary administrator rights.",
    weak: "Delete the user account immediately.",
    better:
      "If the user is authorized to exist but not authorized as an administrator, remove only the unnecessary elevated privilege and verify the account still works as intended.",
  },
  {
    problem: "A required service has a risky configuration.",
    weak: "Disable the service because reducing services is generally safer.",
    better:
      "Keep the required capability available and harden the service configuration, permissions, exposure, or access controls instead.",
  },
  {
    problem: "A firewall rule is too broad.",
    weak: "Delete the rule without checking what depends on it.",
    better:
      "Determine what traffic is required, narrow the rule if appropriate, and verify the required communication still succeeds.",
  },
  {
    problem: "A suspicious file may relate to a forensic question.",
    weak: "Delete the file immediately.",
    better:
      "Preserve and inspect the evidence first, answer the forensic question using supported facts, then take the appropriate defensive action if the file is confirmed to be unsafe or unnecessary.",
  },
];

const evidenceQuestions = [
  "What exactly did I observe?",
  "What evidence makes this a security problem?",
  "Does the scenario require the affected user, service, software, or capability?",
  "What is the least disruptive way to address the issue?",
  "What side effects could this change create?",
  "How will I verify both security and functionality afterward?",
  "Does this action affect forensic evidence?",
  "Should another teammate know before I make this change?",
];

const verificationLayers = [
  {
    title: "Configuration verification",
    text: "Confirm the setting, group membership, service state, policy, permission, or rule now matches the intended secure state.",
  },
  {
    title: "Functional verification",
    text: "Confirm the required application, service, login, network path, or user workflow still functions.",
  },
  {
    title: "Security verification",
    text: "Confirm the original exposure or weakness is actually reduced rather than simply changed cosmetically.",
  },
  {
    title: "Team verification",
    text: "Make sure the result is communicated and recorded so other teammates understand the new state.",
  },
];

const checklistVsEvidence = [
  {
    title: "Checklist as a reminder",
    text: "A checklist can help you remember common areas to inspect: users, services, updates, firewall, software, permissions, logs, and policies.",
  },
  {
    title: "Evidence as the decision-maker",
    text: "The checklist tells you where to look. Evidence tells you whether a change is appropriate on this specific image.",
  },
  {
    title: "Scenario as the constraint",
    text: "Required functionality and explicit restrictions override generic advice that would otherwise remove or break something the system must provide.",
  },
  {
    title: "Verification as the finish line",
    text: "The task is not complete until you confirm both the secure state and the continued operation of required functionality.",
  },
];

const workedCases = [
  {
    title: "Case 1: administrator mismatch",
    observation:
      "The scenario lists Maya as the only authorized administrator. Jordan is a legitimate user but is currently in the Administrators group.",
    evidence:
      "Scenario evidence confirms Jordan is authorized to have an account but not authorized to have elevated privileges.",
    decision:
      "Correct the privilege mismatch rather than deleting the legitimate account.",
    verification:
      "Confirm Jordan remains a user, is no longer an administrator, and Maya retains the required administrative access.",
  },
  {
    title: "Case 2: required remote service",
    observation:
      "A remote-management service is enabled and appears in a generic hardening guide as something that can increase attack surface.",
    evidence:
      "The scenario explicitly requires remote management for this system.",
    decision:
      "Keep the service available, then review its access controls, firewall exposure, authentication, and configuration instead of disabling it.",
    verification:
      "Confirm the service remains reachable only as required and that the hardened configuration still supports the scenario.",
  },
  {
    title: "Case 3: unfamiliar startup item",
    observation:
      "An unfamiliar application launches at startup.",
    evidence:
      "The scenario does not mention it, and the team has not yet confirmed whether it supports required functionality.",
    decision:
      "Place the item in Investigate rather than immediately removing it.",
    verification:
      "After identifying its purpose and dependencies, take the justified action and confirm no required function is lost.",
  },
  {
    title: "Case 4: suspicious file and forensic question",
    observation:
      "A file looks suspicious and may relate to a question asking about recent activity.",
    evidence:
      "The forensic question makes the file potentially valuable evidence.",
    decision:
      "Inspect and document the evidence before deleting, moving, or altering it.",
    verification:
      "Confirm the forensic answer is supported, then complete any necessary cleanup while preserving required documentation.",
  },
];

const antiPatterns = [
  {
    title: "Secure because it sounds secure",
    text: "A recommendation should not be applied just because it is commonly labeled a best practice. Context matters.",
  },
  {
    title: "Unknown equals malicious",
    text: "Unfamiliar accounts, services, or programs are investigation targets, not automatic deletion targets.",
  },
  {
    title: "One piece of evidence is enough",
    text: "When the action is high risk, gather stronger support from the scenario, system state, policy, or teammate review.",
  },
  {
    title: "No verification",
    text: "A successful command or saved setting does not prove the system is now secure or functional.",
  },
  {
    title: "Fixing symptoms only",
    text: "Changing a visible setting without understanding the underlying cause can leave the real issue unresolved.",
  },
  {
    title: "Ignoring reversibility",
    text: "High-impact changes should be approached in a way that makes troubleshooting or rollback possible if the assumption is wrong.",
  },
];

const reflection = [
  "Why is an unfamiliar service not automatically evidence that the service should be disabled?",
  "What is the difference between a checklist item and evidence that justifies a change?",
  "Why should required functionality affect how a system is hardened?",
  "What makes a least-disruptive change safer than a broad change?",
  "Why should verification include both security and functionality?",
  "When should a team delay a change even if the configuration looks insecure?",
];

const checklist = [
  "State the observation without adding assumptions.",
  "Identify scenario evidence that applies.",
  "Identify system evidence that supports the concern.",
  "Use policy evidence when it helps define the secure state.",
  "Protect forensic evidence before cleanup or destructive changes.",
  "Rate your confidence before acting.",
  "Choose the least disruptive justified change.",
  "Communicate high-impact actions before making them.",
  "Verify the configuration after the change.",
  "Verify required functionality still works.",
  "Document the result and any remaining uncertainty.",
  "Revisit the task if new evidence changes the conclusion.",
];

export default function EvidenceBasedHardeningPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Competition Strategy
          </Link>
          <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot/competition-strategy/documentation-change-tracking"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/protect-required-services"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
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
                Competition Strategy 07
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Evidence-Based Hardening
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Make defensive changes because the evidence supports them, not
                because a checklist says every system should look the same.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Evidence-based hardening combines scenario requirements,
                system observations, security policy, forensic context, and
                verification into one decision-making process.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence types</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Reasoning chain</span>
                  <span className="font-bold text-white">6 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Change style</span>
                  <span className="font-bold text-white">Least disruptive</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Defend with proof</span>
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
              What evidence-based hardening should help you do
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Hardening is a reasoning process
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Secure configuration is not just a list of settings. The team
              must understand what the system is supposed to do, what is
              currently true, what is actually wrong, and what change will
              improve security without creating a new problem.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Key rule
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The checklist tells you where to look, not what to blindly change
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A checklist is useful for coverage. Evidence determines whether
              the setting on this image actually needs to change.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              If the evidence is weak and the potential disruption is high,
              investigate before acting.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Four evidence types
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Build decisions from multiple sources of truth
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {evidenceTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Example
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.example}
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
              Reasoning chain
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              From observation to verified defense
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reasoningChain.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Confidence levels
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Match the action to the strength of the evidence
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {confidenceLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Recommended response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ask before acting
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Eight evidence questions
            </h2>
            <div className="mt-5 grid gap-3">
              {evidenceQuestions.map((question, index) => (
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

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Checklist vs. evidence
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use each tool for the right purpose
            </h2>
            <div className="mt-5 grid gap-3">
              {checklistVsEvidence.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Least-disruptive change
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Fix the confirmed problem without creating a larger one
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {leastDisruptiveExamples.map((item) => (
            <article
              key={item.problem}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-lg font-black text-white">{item.problem}</h3>

              <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                  Weak approach
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.weak}
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Better approach
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.better}
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
              Verification
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              A change is not complete until the result is proven
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Worked cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Follow the evidence from observation to verification
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workedCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.observation}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.evidence}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Decision
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.decision}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                      Verification
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.verification}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Hardening habits that weaken decision quality
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {antiPatterns.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your hardening reasoning
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
              Evidence-based checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use before and after major changes
            </h2>

            <div className="mt-5 grid gap-3">
              {checklist.map((item, index) => (
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
                Next strategy lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Protect Required Services
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to harden services, roles, applications, and
                network functions that the scenario requires without breaking
                the system's mission.
              </p>
            </div>

            <Link
              href="/cyberpatriot/competition-strategy/protect-required-services"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 08 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <Link
            href="/cyberpatriot/competition-strategy"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Competition Strategy
          </Link>
          <div className="flex flex-wrap gap-3">
          <Link
            href="/cyberpatriot/competition-strategy/documentation-change-tracking"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/protect-required-services"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Next Lesson →
          </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
