import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Deleting unfamiliar accounts before classifying them",
    what:
      "An account may be removed simply because the username is unfamiliar or absent from memory.",
    consequence:
      "The team can delete a legitimate user, service identity, automation account, or valuable forensic evidence.",
    replacement:
      "Compare the account with the mission roster, groups, recent activity, service dependencies, and account purpose before taking action.",
  },
  {
    title: "Confusing account existence with privilege",
    what:
      "A user may be treated as unauthorized simply because the account has elevated rights, or treated as acceptable because the username is approved.",
    consequence:
      "Approved users can be deleted unnecessarily while excess privilege remains the actual problem.",
    replacement:
      "Evaluate two separate questions: should the account exist, and what privilege should it have?",
  },
  {
    title: "Removing every administrator except one",
    what:
      "Teams may reduce privileged membership too aggressively in an attempt to harden the system quickly.",
    consequence:
      "Approved administrators, recovery access, service identities, or required management paths can be lost.",
    replacement:
      "Use the approved-admin roster and remove only unauthorized or excessive privilege.",
  },
  {
    title: "Disabling service accounts without checking dependencies",
    what:
      "A noninteractive or rarely used account may look unnecessary.",
    consequence:
      "Services, scheduled tasks, application pools, backups, or automation can stop working.",
    replacement:
      "Identify services, tasks, applications, and logon rights tied to the account before changing its state.",
  },
  {
    title: "Checking only direct group membership",
    what:
      "The team may inspect one obvious group and assume the account's effective privilege is fully understood.",
    consequence:
      "Nested groups, delegated rights, sudo rules, remote-access groups, or application roles can be missed.",
    replacement:
      "Review all relevant privilege sources and effective rights instead of relying on one group.",
  },
  {
    title: "Assuming disabled means harmless",
    what:
      "A disabled account may be ignored because it cannot currently sign in.",
    consequence:
      "The account may still carry sensitive group membership, historical evidence, or be re-enabled later by another mechanism.",
    replacement:
      "Review privilege, history, purpose, and whether the disabled state itself is expected.",
  },
  {
    title: "Changing passwords without understanding impact",
    what:
      "A password may be reset immediately for an account that appears suspicious.",
    consequence:
      "Services, scheduled tasks, stored credentials, or dependent applications can fail.",
    replacement:
      "Identify whether the identity is interactive or service-related and understand the dependency before changing credentials.",
  },
  {
    title: "Ignoring remote-access groups",
    what:
      "Teams may review Administrators or sudo but skip Remote Desktop Users, Remote Management Users, SSH access, or equivalent groups.",
    consequence:
      "Unauthorized remote access can remain even after local privilege is reduced.",
    replacement:
      "Review administrative privilege and remote-access privilege as separate control areas.",
  },
  {
    title: "Ignoring account-change evidence",
    what:
      "User creation, enablement, disablement, password changes, or group changes are remediated without checking related logs.",
    consequence:
      "The team loses context that could explain when the identity changed and who performed the action.",
    replacement:
      "Preserve account and group change evidence before remediation.",
  },
  {
    title: "Making bulk identity changes",
    what:
      "Multiple accounts or groups may be changed in one large cleanup operation.",
    consequence:
      "If required access breaks, the team may not know which identity change caused the problem.",
    replacement:
      "Make narrow, evidence-backed changes and verify approved access after each high-impact adjustment.",
  },
];

const privilegeSources = [
  "Local Administrators",
  "Domain Admins and other domain groups",
  "sudo or wheel",
  "sudoers rules",
  "Remote Desktop Users",
  "Remote Management Users",
  "SSH access rules",
  "Service logon rights",
  "Scheduled-task run-as identities",
  "Application-specific administrative roles",
  "Share and file permissions",
  "Delegated directory or domain rights",
];

const accountQuestions = [
  "Is the account explicitly approved by the mission?",
  "Is the account interactive, service-related, or automation-related?",
  "What groups is the account a member of?",
  "What effective privilege does the account actually have?",
  "Has the account logged on recently?",
  "Was the account created, enabled, or modified recently?",
  "Does a service, task, application, or backup depend on it?",
  "What access should remain after remediation?",
];

const eventReferences = [
  {
    id: "4624",
    meaning: "Successful logon",
    why:
      "Useful for reviewing when and how an account was used.",
  },
  {
    id: "4625",
    meaning: "Failed logon",
    why:
      "Useful for repeated failures, suspicious usernames, or unexpected sources.",
  },
  {
    id: "4672",
    meaning: "Special privileges assigned",
    why:
      "Useful for identifying privileged sessions.",
  },
  {
    id: "4720",
    meaning: "User account created",
    why:
      "Useful for investigating newly created identities.",
  },
  {
    id: "4722",
    meaning: "User account enabled",
    why:
      "Useful for unexpected enablement.",
  },
  {
    id: "4725",
    meaning: "User account disabled",
    why:
      "Useful for understanding when account state changed.",
  },
  {
    id: "4728",
    meaning: "Member added to global security group",
    why:
      "Important for domain privilege changes.",
  },
  {
    id: "4732",
    meaning: "Member added to local security group",
    why:
      "Important for local Administrators and other sensitive groups.",
  },
];

const badVsBetter = [
  {
    bad: "Delete the account because it is not familiar.",
    better:
      "Compare it with the mission roster, activity, groups, and dependencies before deciding whether it should exist.",
  },
  {
    bad: "This user is approved, so all current privileges are fine.",
    better:
      "Treat approval and privilege as separate decisions and remove only excess access.",
  },
  {
    bad: "Disable every service account we do not recognize.",
    better:
      "Identify the dependent service, task, application, and logon role first.",
  },
  {
    bad: "Administrators membership is the only privilege that matters.",
    better:
      "Review remote-access groups, sudoers, nested groups, delegated rights, and application roles too.",
  },
  {
    bad: "Reset the suspicious account password immediately.",
    better:
      "Determine whether the account is interactive or service-related and understand dependencies first.",
  },
  {
    bad: "Clean up all user accounts in one pass.",
    better:
      "Make narrow changes and verify approved access after each high-impact identity adjustment.",
  },
];

const verificationQuestions = [
  "Can approved users still authenticate?",
  "Do approved administrators still have the access they need?",
  "Were unauthorized privileges removed?",
  "Do service and automation accounts still function?",
  "Does remote-access membership match the mission?",
  "Are sudo or domain privileges correct?",
  "Were important account-change logs preserved?",
  "Did any identity change break a service, share, task, or application?",
];

const finalChecklist = [
  "Approved users were compared against the mission roster.",
  "Approved administrators were compared against the mission roster.",
  "Account existence and privilege were evaluated separately.",
  "Service accounts were identified before disablement or password changes.",
  "Direct and indirect privilege sources were reviewed.",
  "Remote-access groups were reviewed separately from administrative groups.",
  "Recent account and group changes were preserved as evidence.",
  "Unauthorized privilege was removed with the narrowest justified change.",
  "Bulk identity changes were avoided.",
  "Approved users still have required access.",
  "Required services and tasks still function.",
  "Unresolved identities were documented instead of guessed.",
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

export default function AccountsPrivilegeMistakesPage() {
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
              href="/cyberpatriot/common-mistakes/forensics-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/services-remote-access-mistakes"
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
                Common Mistakes &middot; Guide 07 &middot; Accounts &amp; Privilege
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Accounts &amp; Privilege Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Identity mistakes happen when teams act on usernames instead of
                context. An approved user can still have too much privilege, an
                unfamiliar account can still be required, and a service
                identity can look inactive while supporting critical functions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Classify the identity first, understand its effective rights,
                preserve account-change evidence, and remove only the access
                that is actually unauthorized.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>First ask</span>
                  <span className="font-bold text-white">Should it exist?</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Then ask</span>
                  <span className="font-bold text-white">What privilege?</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before disable</span>
                  <span className="font-bold text-white">Dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Access verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Identity rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Existence, privilege, and remote access are different decisions
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Do not collapse every identity question into one yes-or-no answer.
            Decide whether the account belongs, what privilege it needs, and
            what remote access it should have as separate checks.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 identity mistakes"
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
            label="Privilege sources"
            title="Look beyond the obvious administrator group"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {privilegeSources.map((item, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Account questions"
            title="Classify the identity before changing it"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {accountQuestions.map((question, index) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows event quick reference"
            title="Preserve account and privilege-change evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventReferences.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-2xl font-black text-cyan-300">{item.id}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.meaning}
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace username-based decisions with identity reasoning
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
            title="Ask these after high-impact identity changes"
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
            Accounts &amp; Privilege final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Keep approved identities, remove only unjustified access
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
              href="/cyberpatriot/common-mistakes/forensics-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/services-remote-access-mistakes"
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
