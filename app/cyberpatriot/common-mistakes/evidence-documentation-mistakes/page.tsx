import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Writing vague notes like 'fixed' or 'secured'",
    what:
      "A change log entry may say only that an issue was fixed without recording the original state, evidence, exact change, or verification.",
    consequence:
      "Another teammate cannot reproduce the work, confirm what changed, or tell whether the issue is actually resolved.",
    replacement:
      "Record the finding, supporting evidence, exact remediation, reason, verification, and any unresolved follow-up.",
  },
  {
    title: "Documenting only after the round is nearly over",
    what:
      "Teams may postpone notes until the end because they want to keep moving.",
    consequence:
      "Commands, paths, event IDs, timestamps, reasons, and unresolved questions are forgotten.",
    replacement:
      "Update the shared log while the context is still fresh, especially after high-impact findings and changes.",
  },
  {
    title: "Failing to capture the original state",
    what:
      "The team may record what was changed but not what existed before remediation.",
    consequence:
      "It becomes difficult to prove the change was justified or reconstruct the original condition.",
    replacement:
      "Record the before state first: account membership, service state, path, listener, ACL entry, file hash, configuration, or relevant log evidence.",
  },
  {
    title: "Keeping evidence only in terminal scrollback",
    what:
      "Important commands and output may be visible temporarily but never copied into notes or exported.",
    consequence:
      "The evidence can disappear when the terminal closes, scrolls, reconnects, or the system changes.",
    replacement:
      "Save the key output, screenshots, hashes, paths, event IDs, or configuration snippets that support the finding.",
  },
  {
    title: "Recording a conclusion without the evidence",
    what:
      "A note may state that a user was unauthorized, a service was suspicious, or an ACL was wrong without showing why.",
    consequence:
      "The team cannot distinguish a justified finding from an assumption.",
    replacement:
      "Tie every major conclusion to the mission, logs, configuration, or observed behavior that supports it.",
  },
  {
    title: "Failing to record verification",
    what:
      "The team logs the change but not whether required functionality still worked afterward.",
    consequence:
      "A hidden regression may remain until much later in the round.",
    replacement:
      "Record the verification step and the result for every high-impact remediation.",
  },
  {
    title: "Mixing observation and interpretation",
    what:
      "Notes may describe assumptions as facts, especially during forensic or suspicious-activity investigations.",
    consequence:
      "Later decisions can be based on a story that the evidence never actually proved.",
    replacement:
      "Write the observed fact first, then separately record the interpretation and confidence level.",
  },
  {
    title: "Forgetting system, owner, or time",
    what:
      "A log entry may describe a finding but omit which host, network device, teammate, or time it belongs to.",
    consequence:
      "The team may duplicate work, confuse evidence across systems, or lose accountability for follow-up.",
    replacement:
      "Use consistent fields for time, system, owner, finding, evidence, change, verification, and next step.",
  },
  {
    title: "Not recording unresolved questions",
    what:
      "Teams may document only completed work and leave uncertain findings in memory.",
    consequence:
      "Important open issues can disappear during handoffs or be mistaken for resolved items.",
    replacement:
      "Mark unresolved findings clearly, assign an owner when appropriate, and state the safest next verification step.",
  },
  {
    title: "Letting teammates maintain separate private notes",
    what:
      "Each person may track changes independently without a shared team view.",
    consequence:
      "The team can make conflicting changes, repeat investigations, and miss dependencies.",
    replacement:
      "Use a shared change log or a clearly synchronized handoff process so the team has one trusted operational record.",
  },
];

const requiredFields = [
  {
    field: "Time",
    why:
      "Shows when the finding and change occurred and supports timeline reconstruction.",
  },
  {
    field: "System",
    why:
      "Identifies the exact workstation, server, Linux host, switch, router, or case.",
  },
  {
    field: "Owner",
    why:
      "Shows who investigated or changed the item and who can answer follow-up questions.",
  },
  {
    field: "Finding",
    why:
      "Describes the observed issue precisely.",
  },
  {
    field: "Evidence",
    why:
      "Connects the conclusion to logs, paths, hashes, event IDs, configuration, users, PIDs, ports, or other artifacts.",
  },
  {
    field: "Change",
    why:
      "Records the exact command, setting, membership, service state, ACL edit, or file change.",
  },
  {
    field: "Reason",
    why:
      "Explains why the change was justified by the mission or evidence.",
  },
  {
    field: "Verification",
    why:
      "Shows that the security result and required functionality were both rechecked.",
  },
  {
    field: "Follow-up",
    why:
      "Preserves unresolved questions, dependencies, or next actions.",
  },
];

const strongNotes = [
  {
    weak: "Removed bad admin.",
    better:
      "User tempadmin was in local Administrators but absent from the approved roster. Security logs showed recent privileged use. Removed tempadmin from Administrators and verified approved admin access still worked.",
  },
  {
    weak: "Disabled suspicious service.",
    better:
      "Service UpdaterHelper ran from C:\\Temp\\updater.exe under LocalSystem and listened on TCP 8089. Recorded service path, PID, account, listener, and install evidence before disabling it.",
  },
  {
    weak: "Fixed VLAN.",
    better:
      "VLAN 20 was required on the SW1-R1 trunk but missing from the allowed list. Added VLAN 20 only and verified required reachability afterward.",
  },
  {
    weak: "Linux permissions fixed.",
    better:
      "Found /srv/app/config.sh world-writable. Confirmed expected owner and service dependency, changed only the incorrect mode, then verified the application still started.",
  },
];

const evidenceExamples = [
  "Full file path",
  "SHA-256 hash",
  "Event ID",
  "PID / parent PID",
  "Service name and account",
  "Listening port and owning process",
  "Username and group membership",
  "ACL entry and direction",
  "Route or VLAN state",
  "Exact command used",
  "Screenshot or exported output",
  "Timestamp and time-zone context",
];

const handoffQuestions = [
  "What was found?",
  "What evidence supports it?",
  "What was changed?",
  "What required function was verified?",
  "What remains unresolved?",
  "What should the next teammate check or avoid changing?",
];

const badVsBetter = [
  {
    bad: "Fixed account issue.",
    better:
      "Record the account, original privilege, supporting evidence, exact change, and access verification.",
  },
  {
    bad: "Saved screenshot, no notes needed.",
    better:
      "Keep the screenshot but also record system, time, context, and what the screenshot proves.",
  },
  {
    bad: "We can write the log at the end.",
    better:
      "Document major findings and changes while the details are still fresh.",
  },
  {
    bad: "Everyone can keep their own notes.",
    better:
      "Use one shared operational record or synchronized handoff process.",
  },
  {
    bad: "The change command completed successfully.",
    better:
      "Record the command and then verify the intended security result plus required functionality.",
  },
  {
    bad: "This proves the account was compromised.",
    better:
      "Record the observed login evidence first, then state the interpretation and confidence separately.",
  },
];

const verificationQuestions = [
  "Can another teammate understand the finding without repeating the investigation?",
  "Does every major change include the original state?",
  "Is the supporting evidence preserved?",
  "Is the exact remediation recorded?",
  "Is the reason for the change clear?",
  "Is required functionality verification recorded?",
  "Are unresolved findings clearly marked?",
  "Does every important entry identify system, owner, and time?",
];

const finalChecklist = [
  "The team used a shared change log or synchronized handoff process.",
  "Major findings include system, owner, and time.",
  "The original state was recorded before high-impact remediation.",
  "Evidence was preserved outside temporary terminal scrollback.",
  "Major conclusions are tied to specific evidence.",
  "The exact remediation was recorded.",
  "The reason for each major change is clear.",
  "Verification results were documented after high-impact changes.",
  "Observation and interpretation were kept separate where needed.",
  "Unresolved questions were explicitly recorded.",
  "Handoffs include status, evidence, changes, and next actions.",
  "Another teammate could reconstruct the important work from the notes alone.",
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

export default function EvidenceDocumentationMistakesPage() {
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
              href="/cyberpatriot/common-mistakes/services-remote-access-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/troubleshooting-verification-mistakes"
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
                Common Mistakes &middot; Guide 09 &middot; Evidence &amp; Documentation
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Evidence &amp; Documentation Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Good technical work can still become unreliable if the team
                cannot explain what was found, what evidence supported it, what
                changed, and whether the system still worked afterward.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Documentation should reduce duplicate work, protect evidence,
                support handoffs, and make the team's decisions reproducible.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Record</span>
                  <span className="font-bold text-white">Before state</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Support with</span>
                  <span className="font-bold text-white">Evidence</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>After change</span>
                  <span className="font-bold text-white">Verify</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Team use</span>
                  <span className="font-bold text-white">Shared log</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Documentation rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            A teammate should be able to trust your notes without repeating your work
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Strong notes preserve the original condition, support the finding
            with evidence, record the exact change, and show how the team
            verified the result.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 documentation mistakes"
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
            label="Core log fields"
            title="Use the same structure for important work"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {requiredFields.map((item, index) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Strong notes"
            title="Replace vague statements with evidence-supported entries"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strongNotes.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Too vague
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence examples"
            title="Capture the details that make a finding reproducible"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {evidenceExamples.map((item, index) => (
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
            Team handoff
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Every handoff should answer six questions
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {handoffQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace vague notes with operational records
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Verification"
            title="Check whether the documentation is actually useful"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {verificationQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Evidence &amp; Documentation final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Leave a record the whole team can trust
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
              href="/cyberpatriot/common-mistakes/services-remote-access-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/troubleshooting-verification-mistakes"
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
