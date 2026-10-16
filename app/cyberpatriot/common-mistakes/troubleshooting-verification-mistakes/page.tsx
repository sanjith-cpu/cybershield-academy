import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Changing too many variables at once",
    what:
      "A team may change accounts, firewall rules, services, permissions, and network settings during one troubleshooting attempt.",
    consequence:
      "When the problem changes, the team cannot tell which adjustment caused the result.",
    replacement:
      "Change one meaningful variable at a time when practical, then test before moving to the next hypothesis.",
  },
  {
    title: "Troubleshooting from assumptions instead of evidence",
    what:
      "The team may decide that the issue must be permissions, routing, a service, or a firewall before checking the observable state.",
    consequence:
      "Time is spent fixing the wrong layer while the real fault remains.",
    replacement:
      "Start from symptoms, collect evidence, identify the affected layer, and form a narrow testable hypothesis.",
  },
  {
    title: "Skipping the baseline",
    what:
      "Teams may begin changing configuration before recording what was working and what was failing.",
    consequence:
      "There is no reliable comparison point and later regressions become harder to recognize.",
    replacement:
      "Record the starting state, required functionality, and known symptoms before major remediation.",
  },
  {
    title: "Stopping after one successful test",
    what:
      "A single ping, login, service start, or application launch may be treated as proof that the whole issue is fixed.",
    consequence:
      "Other users, paths, dependencies, or security controls may still be broken.",
    replacement:
      "Verify the exact mission function from the perspective of the intended user or client and retest related dependencies.",
  },
  {
    title: "Testing too late",
    what:
      "Teams may make many changes and wait until much later to verify the system.",
    consequence:
      "When breakage is finally discovered, the cause may be buried under several unrelated changes.",
    replacement:
      "Verify after every high-impact change or logical change group.",
  },
  {
    title: "Ignoring regressions because the security issue looks fixed",
    what:
      "A remediation may remove suspicious access or exposure, but the team may not notice that required functionality was also lost.",
    consequence:
      "The system becomes more secure in one dimension but fails the competition mission.",
    replacement:
      "Always verify both the security outcome and the required business or mission function.",
  },
  {
    title: "Using reboot as a default troubleshooting step",
    what:
      "Restarting a system may be used to clear symptoms without understanding the root cause.",
    consequence:
      "Transient evidence can disappear, services may fail to return, and the original issue may become harder to analyze.",
    replacement:
      "Reboot only when there is a specific reason and document what you expect the restart to prove or restore.",
  },
  {
    title: "Ignoring dependency chains",
    what:
      "A team may troubleshoot one component without checking the service, identity, network, permission, or application dependencies behind it.",
    consequence:
      "The visible symptom can return because the upstream cause was never addressed.",
    replacement:
      "Map the dependency chain before declaring the issue resolved.",
  },
  {
    title: "Failing to retest after rollback",
    what:
      "A risky change may be undone, and the team assumes the original functionality is fully restored.",
    consequence:
      "Partial configuration changes, cached state, or related settings may still be wrong.",
    replacement:
      "After rollback, retest the same mission function and compare the result to the known-good baseline.",
  },
  {
    title: "Treating verification as an end-of-round task",
    what:
      "Teams may think of verification as something to do only in the final minutes.",
    consequence:
      "Broken functionality can survive for a long time and late recovery becomes stressful.",
    replacement:
      "Build verification into the entire round: after changes, at mid-round, and again before final handoff.",
  },
];

const troubleshootingFlow = [
  {
    step: "Observe",
    detail:
      "Describe the exact symptom without guessing the cause. What user, service, host, path, or network flow is affected?",
  },
  {
    step: "Baseline",
    detail:
      "Record the current state and identify what still works. Preserve evidence before high-impact remediation.",
  },
  {
    step: "Scope",
    detail:
      "Determine whether the problem is isolated to one account, service, host, VLAN, interface, application, or wider dependency.",
  },
  {
    step: "Hypothesize",
    detail:
      "Choose one likely cause supported by evidence rather than a broad list of guesses.",
  },
  {
    step: "Test narrowly",
    detail:
      "Use the smallest safe check or change that can confirm or reject the hypothesis.",
  },
  {
    step: "Verify",
    detail:
      "Retest the security condition and the mission-required function.",
  },
  {
    step: "Document",
    detail:
      "Record the evidence, change, outcome, and unresolved follow-up.",
  },
];

const verificationLayers = [
  {
    title: "Identity",
    checks: [
      "Can approved users authenticate?",
      "Do approved administrators still have required access?",
      "Was unauthorized privilege actually removed?",
    ],
  },
  {
    title: "Service",
    checks: [
      "Is the required service running?",
      "Does the service actually perform its mission function?",
      "Do dependencies still work?",
    ],
  },
  {
    title: "Network",
    checks: [
      "Is required reachability intact?",
      "Do firewall or ACL changes behave as intended?",
      "Can the approved management path still connect?",
    ],
  },
  {
    title: "Application",
    checks: [
      "Can the intended user or client use the application?",
      "Do file, share, database, or web dependencies still work?",
      "Did authentication or permission changes break access?",
    ],
  },
  {
    title: "Persistence",
    checks: [
      "Did the suspicious task, service, cron job, or startup item return?",
      "Does the clean state survive logon or reboot when testing is appropriate?",
    ],
  },
  {
    title: "Evidence",
    checks: [
      "Was important evidence preserved before remediation?",
      "Is the final change supported by notes and verification results?",
    ],
  },
];

const regressionSignals = [
  "A previously working login fails",
  "A required service unexpectedly stops",
  "A share or application becomes unreachable",
  "Remote administration stops working",
  "A VLAN or route path changes unexpectedly",
  "A firewall or ACL blocks approved traffic",
  "A scheduled task or service stops due to account changes",
  "A suspicious listener or persistence mechanism returns",
  "A teammate cannot explain a recent change",
  "The system behavior differs from the known baseline",
];

const badVsBetter = [
  {
    bad: "Try a few changes and see what happens.",
    better:
      "Form one evidence-backed hypothesis, make the smallest safe test, and compare the result.",
  },
  {
    bad: "The service started, so the issue is fixed.",
    better:
      "Test the actual user or client workflow that depends on the service.",
  },
  {
    bad: "We can verify everything at the end.",
    better:
      "Verify after each high-impact change so regressions are caught while the cause is still obvious.",
  },
  {
    bad: "Reboot and see if it clears up.",
    better:
      "Restart only when the expected outcome is clear and evidence has been preserved.",
  },
  {
    bad: "We rolled it back, so we're back to normal.",
    better:
      "Retest the same function after rollback and compare against the baseline.",
  },
  {
    bad: "The security issue is gone, so the change worked.",
    better:
      "Confirm both the security improvement and required functionality.",
  },
];

const decisionQuestions = [
  "What exact symptom are we trying to explain?",
  "What still works?",
  "What changed immediately before the problem appeared?",
  "Which layer is most likely affected?",
  "What evidence supports that hypothesis?",
  "What is the smallest safe test?",
  "What could this change break?",
  "How will we verify success?",
];

const rollbackChecklist = [
  "Record the original value before changing it.",
  "Know the command, setting, or configuration needed to restore the prior state.",
  "Avoid broad changes that are difficult to reverse.",
  "Document why the rollback was needed.",
  "Retest the original mission function after rollback.",
  "Record whether the rollback fully restored the known-good state.",
];

const finalChecklist = [
  "The original symptom was described before remediation.",
  "A baseline was captured before major changes.",
  "Troubleshooting was driven by evidence rather than assumptions.",
  "The scope of the problem was narrowed before changing multiple layers.",
  "High-impact changes were tested one at a time or in small logical groups.",
  "Security outcome and mission functionality were both verified.",
  "Regression checks happened throughout the round, not only at the end.",
  "Reboots were used only when justified.",
  "Dependencies were considered before declaring an issue resolved.",
  "Rollback steps were understood before risky changes.",
  "Rollback results were verified.",
  "Important troubleshooting decisions and outcomes were documented.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function TroubleshootingVerificationMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes/evidence-documentation-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/team-communication-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Common Mistakes &middot; Guide 10 &middot; Troubleshooting &amp; Verification
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Troubleshooting &amp; Verification Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Troubleshooting becomes unreliable when teams guess, change too
                much at once, or wait too long to test. The strongest approach
                is evidence-driven, narrow, reversible, and verified after every
                high-impact decision.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Verification is not a final step. It is a continuous control
                that catches regressions while the cause is still easy to
                identify.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Start with</span>
                  <span className="font-bold text-white">Symptom + baseline</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Then</span>
                  <span className="font-bold text-white">Narrow hypothesis</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>After change</span>
                  <span className="font-bold text-white">Verify immediately</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Always protect</span>
                  <span className="font-bold text-white">Rollback path</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Troubleshooting rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            If you cannot explain what the test proves, the test is probably too broad
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Every troubleshooting action should answer a specific question. If
            a change succeeds or fails, the result should narrow the next
            decision rather than create more uncertainty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 troubleshooting mistakes"
            title="What goes wrong and the safer replacement"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    What goes wrong
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.what}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Why it hurts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.consequence}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Stronger replacement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.replacement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Troubleshooting flow"
            title="Use a repeatable reasoning path"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {troubleshootingFlow.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.step}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification layers"
            title="Check more than the visible symptom"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {verificationLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-4 grid gap-2">
                  {item.checks.map((check) => (
                    <div
                      key={check}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {check}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Regression signals
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Stop and verify when these appear
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {regressionSignals.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision questions
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before a risky troubleshooting change
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {decisionQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Rollback readiness"
            title="Know how to undo risky changes before making them"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {rollbackChecklist.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace trial-and-error with testable reasoning
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {badVsBetter.map((item) => (
              <div
                key={item.bad}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.bad}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Troubleshooting &amp; Verification final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Observe, test narrowly, verify, and preserve rollback options
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Common Mistakes
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/common-mistakes/evidence-documentation-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/team-communication-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
