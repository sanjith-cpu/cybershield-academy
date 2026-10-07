import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const finalDomains = [
  {
    title: "Identity",
    focus:
      "Users, administrators, account state, password policy, lockout, local groups, and remote-access authorization.",
    checks: [
      "Authorized users match the scenario.",
      "Unauthorized accounts are disabled or removed only after evidence is preserved.",
      "Administrators are limited to users who truly require privilege.",
      "Remote Desktop Users contains only required remote users.",
      "Password and account policies are configured intentionally.",
      "Built-in and special accounts have been reviewed rather than changed blindly.",
    ],
  },
  {
    title: "Protection",
    focus:
      "Microsoft Defender Antivirus, firewall profiles, firewall rules, exclusions, security intelligence, and required network exposure.",
    checks: [
      "Defender is healthy and expected protections are active.",
      "Security intelligence is reasonably current.",
      "Broad or unexplained exclusions have been investigated.",
      "Domain, Private, and Public firewall profiles are reviewed.",
      "Required inbound rules remain available.",
      "Firewall exposure is no broader than the scenario requires.",
    ],
  },
  {
    title: "System",
    focus:
      "Windows Update, services, startup programs, installed software, scheduled tasks, and operating-system health.",
    checks: [
      "Important security and quality updates were evaluated.",
      "Restart requirements are understood.",
      "Required services are available.",
      "Unnecessary automatic execution has been reduced carefully.",
      "Installed software has been classified and reviewed.",
      "Scheduled tasks have been checked for required, unnecessary, misconfigured, or unknown behavior.",
    ],
  },
  {
    title: "Access",
    focus:
      "File permissions, shares, RDP, service access, local rights, and least privilege.",
    checks: [
      "NTFS permissions match role and scenario need.",
      "Share permissions are not broader than required.",
      "Ownership and inheritance were reviewed before high-impact changes.",
      "RDP is available only if required.",
      "Remote users, user rights, services, firewall, and network scope align.",
      "Required applications and service accounts retain the access they need.",
    ],
  },
  {
    title: "Evidence",
    focus:
      "Event logs, Defender history, task history, account evidence, service paths, file metadata, and team notes.",
    checks: [
      "Relevant forensic evidence was preserved before remediation.",
      "Logs were not cleared.",
      "Important observations are separated from conclusions.",
      "Timelines use supported timestamps and multiple sources where possible.",
      "Team-generated changes are documented separately.",
      "Unresolved questions are recorded instead of guessed.",
    ],
  },
  {
    title: "Verification",
    focus:
      "Proving that Windows remains secure, functional, reachable, and consistent after changes.",
    checks: [
      "Authorized administrator access still works.",
      "Networking still works.",
      "Required RDP and shares still work.",
      "Defender and firewall remain healthy.",
      "Required services and applications still function.",
      "No new critical errors appeared after high-impact changes.",
    ],
  },
];

const fastSweep = [
  "Re-read the scenario requirements before the final sweep.",
  "Confirm every required service and application is still available.",
  "Confirm the correct local administrators.",
  "Confirm no obvious unauthorized local accounts remain active.",
  "Confirm Defender status and exclusions.",
  "Confirm firewall profiles are enabled as expected.",
  "Confirm Windows Update has no obvious unresolved high-priority issue.",
  "Confirm required RDP and file shares still work.",
  "Confirm no required service was disabled accidentally.",
  "Confirm no unnecessary startup program or suspicious scheduled task was missed.",
  "Review recent event logs for errors caused by your own changes.",
  "Re-check forensic questions and evidence notes.",
];

const identityChecks = [
  {
    title: "Users",
    questions: [
      "Does every enabled local user have a clear scenario purpose?",
      "Are disabled accounts intentionally disabled?",
      "Was evidence preserved for any suspicious account before remediation?",
    ],
  },
  {
    title: "Administrators",
    questions: [
      "Does every administrator truly require administrative privilege?",
      "Did anyone get added to Administrators just to make another feature work?",
      "Can remote users use required functionality without unnecessary elevation?",
    ],
  },
  {
    title: "Groups",
    questions: [
      "Are Remote Desktop Users, Users, Administrators, and other important groups reviewed?",
      "Does group membership explain any unexpected file or service access?",
      "Are unfamiliar groups investigated before removal?",
    ],
  },
  {
    title: "Account policy",
    questions: [
      "Are password settings intentional and scenario-aware?",
      "Is account lockout configured without creating avoidable denial-of-service risk?",
      "Were one-size-fits-all values avoided when the scenario gave different requirements?",
    ],
  },
];

const protectionChecks = [
  {
    title: "Defender",
    questions: [
      "Is real-time protection healthy?",
      "Are security intelligence updates reasonably current?",
      "Were suspicious exclusions investigated?",
      "Was Protection History preserved when relevant to forensics?",
    ],
  },
  {
    title: "Firewall",
    questions: [
      "Are all needed profiles enabled?",
      "Are inbound allow rules tied to required services?",
      "Is RDP or file-sharing exposure limited to the needed profile and network where practical?",
      "Were required connections tested after narrowing rules?",
    ],
  },
  {
    title: "Required security functions",
    questions: [
      "Were security services left available?",
      "Did troubleshooting avoid globally disabling Defender or the firewall?",
      "Did any third-party security product change the expected Windows configuration?",
    ],
  },
];

const systemChecks = [
  {
    title: "Updates",
    questions: [
      "Were security updates evaluated?",
      "Were optional drivers and major feature updates treated cautiously?",
      "Was restart timing coordinated with the team?",
      "Was the system verified after servicing?",
    ],
  },
  {
    title: "Services",
    questions: [
      "Does every changed service have a documented reason?",
      "Were dependencies checked before disabling services?",
      "Are required networking, security, RDP, sharing, and application services healthy?",
    ],
  },
  {
    title: "Startup",
    questions: [
      "Are unnecessary startup applications disabled where appropriate?",
      "Were unknown startup entries investigated by path, publisher, and user scope?",
      "Was software removed only when the application itself was unnecessary?",
    ],
  },
  {
    title: "Installed software",
    questions: [
      "Is required software still installed?",
      "Were remote-access tools, unsupported software, and unnecessary applications reviewed?",
      "Were leftovers such as services or startup entries checked after uninstall?",
    ],
  },
  {
    title: "Scheduled tasks",
    questions: [
      "Were logon, startup, high-privilege, and unusual-path tasks reviewed?",
      "Were suspicious task properties preserved before disabling or removing them?",
      "Do required Windows and application tasks still run?",
    ],
  },
];

const accessChecks = [
  {
    title: "NTFS permissions",
    questions: [
      "Do Read, Modify, and Full control match actual job need?",
      "Was inheritance reviewed before editing child objects?",
      "Were SYSTEM, service accounts, and application dependencies preserved?",
    ],
  },
  {
    title: "Shares",
    questions: [
      "Are share permissions no broader than required?",
      "Do NTFS and share permissions combine to produce the intended effective access?",
      "Can authorized users still reach the share remotely?",
    ],
  },
  {
    title: "Remote Desktop",
    questions: [
      "Is RDP enabled only if required?",
      "Are only required users authorized?",
      "Is NLA enabled when appropriate?",
      "Does firewall scope match the expected source network?",
      "Was end-to-end RDP access tested?",
    ],
  },
];

const evidenceChecks = [
  {
    title: "Logs",
    questions: [
      "Were relevant Security, System, Application, and operational logs reviewed?",
      "Were logs preserved rather than cleared?",
      "Were event provider, event ID, time, user, and message recorded for important findings?",
    ],
  },
  {
    title: "Artifacts",
    questions: [
      "Were task, service, account, software, and Defender artifacts documented before remediation?",
      "Were file paths and timestamps captured where relevant?",
      "Were suspicious items correlated with a second evidence source when possible?",
    ],
  },
  {
    title: "Team notes",
    questions: [
      "Can another teammate explain what changed and why?",
      "Are confirmed facts separated from hypotheses?",
      "Are unresolved questions visible rather than hidden?",
    ],
  },
];

const verificationMatrix = [
  {
    area: "Identity",
    verify:
      "Sign in with the authorized administrator and confirm intended standard users still function.",
  },
  {
    area: "Network",
    verify:
      "Confirm basic network connectivity and any scenario-required internal communication.",
  },
  {
    area: "RDP",
    verify:
      "If required, connect from the authorized path with the intended user.",
  },
  {
    area: "File sharing",
    verify:
      "Test required share access with one authorized and one unauthorized account when practical.",
  },
  {
    area: "Defender",
    verify:
      "Confirm protection state remains healthy and no required application was broken by exclusions or remediation.",
  },
  {
    area: "Firewall",
    verify:
      "Confirm profiles and required rules remain in the intended final state.",
  },
  {
    area: "Services",
    verify:
      "Check required services and any service changed during hardening.",
  },
  {
    area: "Applications",
    verify:
      "Launch required applications and confirm important workflows still work.",
  },
  {
    area: "Scheduled tasks",
    verify:
      "Confirm required tasks remain enabled and suspicious disabled tasks stay disabled.",
  },
  {
    area: "Event logs",
    verify:
      "Review recent System/Application events for new errors caused by the final changes.",
  },
];

const stopConditions = [
  {
    title: "You do not understand the dependency",
    text:
      "Stop before disabling a service, task, account, firewall rule, share, or application if you cannot explain what depends on it.",
  },
  {
    title: "You may destroy forensic evidence",
    text:
      "Preserve logs, task properties, Defender history, account evidence, or file metadata before remediation.",
  },
  {
    title: "You are about to make a broad change",
    text:
      "Re-check scope before using bulk commands, wildcards, global firewall changes, ownership resets, or large policy changes.",
  },
  {
    title: "You cannot verify afterward",
    text:
      "If the team has no way to test the result, delay the change until verification is possible unless the risk clearly demands immediate action.",
  },
  {
    title: "The scenario contradicts your checklist",
    text:
      "Scenario requirements win. Do not break a required service because a generic checklist normally recommends disabling it.",
  },
];

const finalDecisionCases = [
  {
    title: "Everything looks hardened, but RDP fails",
    evidence:
      "The team completed most checklist items, but the authorized administrator can no longer connect remotely.",
    reasoning:
      "The final state is not acceptable because a required function is broken.",
    response:
      "Trace the RDP chain: account, group, user rights, service, firewall profile/rule, remote scope, and network path. Restore the narrowest working authorized configuration.",
  },
  {
    title: "Unknown service remains",
    evidence:
      "One automatic service still has an unfamiliar name and path, but its purpose is not yet confirmed.",
    reasoning:
      "The final sweep should not force a destructive answer just to make the checklist look complete.",
    response:
      "Document it as Investigate, preserve the evidence, and avoid disabling it unless stronger evidence justifies the change.",
  },
  {
    title: "Broad share access is still present",
    evidence:
      "A required project share works, but share permissions still allow a larger group than the scenario needs.",
    reasoning:
      "Functionality is correct, but least privilege is incomplete.",
    response:
      "Reduce the share to the required audience, verify NTFS and share permissions together, and test authorized remote access.",
  },
  {
    title: "Feature update is pending near the end",
    evidence:
      "Windows offers a large feature update with little competition time remaining.",
    reasoning:
      "The change is high-impact and difficult to verify fully before the round ends.",
    response:
      "Do not treat it like a routine security patch. Defer unless the scenario gives a strong reason and there is enough time for complete verification.",
  },
];

const finalLab = [
  {
    number: "01",
    title: "Re-read the fictional scenario",
    text:
      "Morgan is the only administrator. Avery and Riley are standard users. RDP is required for Morgan, a project share is required for Avery and Riley, Defender and firewall must remain active, and one forensic question asks about an unknown task.",
  },
  {
    number: "02",
    title: "Run the identity and protection sweep",
    text:
      "Confirm users, groups, password policy, Defender, exclusions, firewall profiles, and the required RDP rule.",
  },
  {
    number: "03",
    title: "Run the system and access sweep",
    text:
      "Confirm services, updates, installed software, startup items, scheduled tasks, permissions, share access, and RDP dependencies.",
  },
  {
    number: "04",
    title: "Review evidence",
    text:
      "Confirm the unknown task evidence is preserved and the timeline is documented before final remediation.",
  },
  {
    number: "05",
    title: "Verify required functions",
    text:
      "Test Morgan's RDP, Avery's and Riley's project access, Defender health, firewall state, networking, and required applications.",
  },
  {
    number: "06",
    title: "Record the final state",
    text:
      "Document remaining Investigate items, any deferred update, all major changes, and the results of final verification.",
  },
];

const lastTenMinutes = [
  "Do not begin a major feature update or broad configuration rewrite.",
  "Do not run a new bulk hardening script that has not already been tested.",
  "Do not delete suspicious evidence that has not been documented.",
  "Re-test required RDP, shares, and critical applications.",
  "Confirm Defender and firewall are still active.",
  "Confirm the authorized administrator still has access.",
  "Review recent errors caused by your own changes.",
  "Review unresolved Investigate items and decide whether they are safe to leave documented.",
  "Make sure team notes explain every high-impact change.",
  "Stop changing settings once the final state is secure, functional, and verified.",
];

const finalChecklist = [
  "Scenario reread completed.",
  "Authorized users reviewed.",
  "Administrators reviewed.",
  "Password and lockout policy reviewed.",
  "Local Security Policy reviewed where relevant.",
  "Defender health and exclusions reviewed.",
  "Firewall profiles and required rules reviewed.",
  "Windows Update state reviewed.",
  "Required services verified.",
  "Startup programs reviewed.",
  "Installed software reviewed.",
  "NTFS and share permissions reviewed.",
  "RDP state, users, rights, service, and firewall verified if required.",
  "Scheduled tasks reviewed.",
  "Event logs reviewed for important findings and new errors.",
  "Forensic evidence preserved before remediation.",
  "PowerShell or command-line changes re-queried and verified.",
  "Required applications tested.",
  "Networking tested.",
  "RDP/share access tested.",
  "High-impact changes documented.",
  "Unresolved Investigate items documented.",
  "No unnecessary broad changes remain pending.",
  "Final system state is both secure and functional.",
];

const reflection = [
  "Why is the final review organized by security domain instead of one universal checklist order?",
  "Why can a system be more hardened but still be in a worse competition state?",
  "What should make you stop before changing a service, task, account, or permission?",
  "Why should the last part of a competition focus more on verification than on new large changes?",
  "What is the difference between an unresolved Investigate item and an ignored problem?",
  "What does a complete Windows 11 final state need to prove?",
];

export default function Windows11FinalReviewChecklistPage() {
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
            <Link href="/cyberpatriot/windows-11/windows-forensics-evidence-preservation" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 16
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Final Review Checklist
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Bring the entire Windows 11 pathway together with a final review
                of identity, protection, system health, access, evidence, and
                functional verification.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A strong final state is not the one with the most settings
                changed. It is the one you can explain, verify, and defend
                without breaking what the scenario requires.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Final Review Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Security domains</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Final verification areas</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary rule</span>
                  <span className="font-bold text-white">Scenario wins</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure + functional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Final principle
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Secure is not enough if the system no longer works
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Final review must prove both sides: unnecessary exposure was
              reduced and every required Windows function still works.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Final-round warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Do not create a new emergency at the end
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The last review is not the time for untested bulk scripts, large
              upgrades, sweeping ownership changes, or speculative cleanup.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Prefer verification and targeted correction over new broad changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Final-review domains
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Review Windows by what each control protects
        </h2>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {finalDomains.map((domain) => (
            <article
              key={domain.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                {domain.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{domain.focus}</p>

              <div className="mt-5 grid gap-3">
                {domain.checks.map((item, index) => (
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
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fast final sweep
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Twelve checks before you go deeper
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {fastSweep.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Identity review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Make sure privilege matches authorization
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {identityChecks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-3">
                {item.questions.map((question) => (
                  <p
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Protection review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Confirm the defensive layers are still active
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {protectionChecks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-3">
                {item.questions.map((question) => (
                  <p
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          System review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Check the parts most likely to break after hardening
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {systemChecks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 grid gap-3">
                {item.questions.map((question) => (
                  <p
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Access review
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Confirm who can reach what
            </h2>

            <div className="mt-7 grid gap-4">
              {accessChecks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <div className="mt-4 grid gap-3">
                    {item.questions.map((question) => (
                      <p
                        key={question}
                        className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                      >
                        {question}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Evidence review
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Confirm the investigation survived the cleanup
            </h2>

            <div className="mt-7 grid gap-4">
              {evidenceChecks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5"
                >
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <div className="mt-4 grid gap-3">
                    {item.questions.map((question) => (
                      <p
                        key={question}
                        className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
                      >
                        {question}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification matrix
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the final system state
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {verificationMatrix.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.verify}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Stop conditions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Five reasons not to click yet
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {stopConditions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Final decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What a final reviewer should do
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {finalDecisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional final-review lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Complete a full Windows 11 final sweep
          </h2>

          <div className="mt-8 grid gap-4">
            {finalLab.map((item) => (
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
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Last ten minutes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Shift from changing to proving
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {lastTenMinutes.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your final-review reasoning
            </h2>

            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Master checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Windows 11 final review
            </h2>

            <div className="mt-5 grid gap-3">
              {finalChecklist.map((item, index) => (
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
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Windows 11 pathway complete
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            You now have the complete Windows 11 defensive workflow
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The next step is to connect all sixteen lessons with Previous and
            Next navigation, make the Windows 11 hub cards live, and complete a
            continuous browser review before the section is build-tested and
            committed.
          </p>
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
            <Link href="/cyberpatriot/windows-11/windows-forensics-evidence-preservation" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
