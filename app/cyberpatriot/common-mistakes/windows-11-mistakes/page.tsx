import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Disabling services because they look unnecessary",
    what:
      "A Windows service may be stopped simply because its name is unfamiliar or because a generic hardening guide says it is optional.",
    consequence:
      "Required Windows features, applications, updates, logging, remote access, or dependent services can fail.",
    replacement:
      "Identify the service purpose, startup type, account, executable path, dependencies, and mission requirement before changing it.",
  },
  {
    title: "Deleting unfamiliar local users immediately",
    what:
      "An unknown local account may be deleted before checking the approved-user roster, recent logons, group membership, or service dependencies.",
    consequence:
      "The team can destroy evidence, remove a required service identity, or break a scheduled task or application.",
    replacement:
      "Classify the account first, preserve evidence, and remove only unauthorized access or privilege that is clearly justified.",
  },
  {
    title: "Removing every administrator except yourself",
    what:
      "Teams sometimes assume the safest configuration is a single administrator account.",
    consequence:
      "Approved administrators may lose access, service accounts may break, and team recovery options can disappear.",
    replacement:
      "Compare Administrators membership to the mission and remove only unauthorized or unnecessary privilege.",
  },
  {
    title: "Disabling RDP without checking the mission",
    what:
      "Remote Desktop may be turned off automatically because it increases attack surface.",
    consequence:
      "If RDP is required, the team can lock out approved users or break competition workflow.",
    replacement:
      "Confirm whether RDP is required, verify approved users, firewall exposure, and service state, then harden only what is unnecessary.",
  },
  {
    title: "Changing firewall rules in bulk",
    what:
      "Large groups of inbound or outbound rules may be disabled to reduce exposure quickly.",
    consequence:
      "Required services, management tools, or application traffic can stop working with little clue which rule caused the failure.",
    replacement:
      "Map required services and ports first, then change only the rules tied to confirmed unnecessary exposure.",
  },
  {
    title: "Ignoring scheduled tasks and startup persistence",
    what:
      "Teams may focus on users and services while skipping Task Scheduler, Run keys, startup folders, and other persistence locations.",
    consequence:
      "Suspicious activity can return after reboot or logon even when the visible process was removed.",
    replacement:
      "Review persistence locations, capture task or startup evidence, and trace each item to its executable and purpose before remediation.",
  },
  {
    title: "Trusting a process name",
    what:
      "A process may be considered safe because the name resembles a Windows component.",
    consequence:
      "A suspicious executable can hide behind a familiar-looking filename or location.",
    replacement:
      "Check executable path, parent process, command line, signer context, service relationship, network activity, and timestamps.",
  },
  {
    title: "Changing multiple security settings at once",
    what:
      "Teams may edit Defender, firewall, account policies, audit settings, services, and remote access in one large pass.",
    consequence:
      "If something breaks, it is difficult to identify which change caused the regression.",
    replacement:
      "Group changes logically, keep them narrow, and verify the effect before moving to the next category.",
  },
  {
    title: "Ignoring Windows event evidence",
    what:
      "Accounts, services, privilege changes, and logons may be remediated without checking the related event logs.",
    consequence:
      "The team loses context that could explain when the change happened, who performed it, and what else occurred nearby.",
    replacement:
      "Preserve relevant Security and System events before changing the state that produced them.",
  },
  {
    title: "Skipping verification after a successful command",
    what:
      "A PowerShell or GUI change may appear to succeed and the team immediately moves on.",
    consequence:
      "Required services, user access, or security controls may be broken even though the command returned no error.",
    replacement:
      "Recheck the configuration and test the mission function that could be affected.",
  },
];

const accountChecks = [
  "Compare all local users with the approved roster.",
  "Review Administrators membership.",
  "Review Remote Desktop Users when RDP is relevant.",
  "Identify service and automation accounts before disablement.",
  "Check recent account creation, enablement, disablement, and group changes.",
  "Separate account existence from privilege level.",
];

const serviceChecks = [
  "List running services and unusual startup modes.",
  "Check service executable paths and service accounts.",
  "Review service dependencies before stopping anything.",
  "Preserve recent service-installation evidence.",
  "Map network listeners back to owning services.",
  "Retest required functionality after service changes.",
];

const persistenceChecks = [
  "Scheduled Tasks",
  "Run and RunOnce keys",
  "Startup folders",
  "Services",
  "PowerShell profiles or scripts where relevant",
  "Unexpected logon-triggered behavior",
];

const eventReferences = [
  {
    id: "4624",
    meaning: "Successful logon",
    why:
      "Useful for validating approved and suspicious sessions.",
  },
  {
    id: "4625",
    meaning: "Failed logon",
    why:
      "Useful for spotting repeated failures or suspicious usernames.",
  },
  {
    id: "4672",
    meaning: "Special privileges assigned",
    why:
      "Useful for identifying privileged sessions.",
  },
  {
    id: "4688",
    meaning: "Process creation",
    why:
      "Useful when process creation auditing is available and you need command-line context.",
  },
  {
    id: "4720",
    meaning: "User account created",
    why:
      "Useful for investigating newly created users.",
  },
  {
    id: "4732",
    meaning: "Member added to local security group",
    why:
      "Useful for unexpected additions to Administrators or other local groups.",
  },
  {
    id: "7045",
    meaning: "Service installed",
    why:
      "Useful when investigating newly introduced services.",
  },
];

const badVsBetter = [
  {
    bad: "Disable the service because we do not recognize it.",
    better:
      "Check its path, account, dependencies, listener, logs, and mission purpose before deciding whether it is unnecessary.",
  },
  {
    bad: "Delete the unknown user.",
    better:
      "Compare the user with the mission, recent logons, group membership, and service dependencies first.",
  },
  {
    bad: "Block the port.",
    better:
      "Identify the owning process and service, then decide whether the exposure is required.",
  },
  {
    bad: "Turn off RDP for security.",
    better:
      "Check whether RDP is required, then restrict users and exposure instead of breaking needed access.",
  },
  {
    bad: "The process name looks normal.",
    better:
      "Validate path, parent, command line, service relationship, and network behavior.",
  },
  {
    bad: "The command worked, so we are done.",
    better:
      "Recheck the setting and test the mission function after the change.",
  },
];

const verificationQuestions = [
  "Can approved users still sign in?",
  "Do required administrators still have access?",
  "Are Defender and Firewall still healthy?",
  "Are required services still running?",
  "Does RDP state still match the mission?",
  "Did suspicious persistence return?",
  "Do required shares and applications still work?",
  "Are important event logs and evidence preserved?",
];

const finalChecklist = [
  "The mission was checked before disabling services or RDP.",
  "Approved users were compared with local account state.",
  "Administrators membership matches the mission.",
  "Service accounts were identified before disablement.",
  "Required services remain functional.",
  "Unknown services were investigated by path, account, dependencies, and listener.",
  "RDP state and membership match the scenario.",
  "Firewall changes were narrow and evidence-backed.",
  "Scheduled tasks and startup persistence were reviewed.",
  "Suspicious processes were validated by more than filename.",
  "Important Windows event evidence was preserved.",
  "High-impact changes were verified after remediation.",
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

export default function Windows11MistakesPage() {
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
              href="/cyberpatriot/common-mistakes/competition-strategy-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/windows-server-mistakes"
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
                Common Mistakes &middot; Guide 02 &middot; Windows 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Windows competition errors usually come from changing too much
                too quickly: disabling unfamiliar services, removing accounts,
                blocking ports, altering RDP, or trusting process names without
                evidence.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Strong Windows hardening is narrow, evidence-backed, and
                verified against required user access and system functionality.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Check first</span>
                  <span className="font-bold text-white">Mission</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before removal</span>
                  <span className="font-bold text-white">Evidence</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Change style</span>
                  <span className="font-bold text-white">Narrow</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Windows rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Unknown does not automatically mean unsafe, and secure does not automatically mean mission-correct
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Use the scenario, Windows evidence, service relationships, account
            roles, and required access paths to decide what should change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 Windows mistakes"
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
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Accounts"
              title="Do not clean users blindly"
            />

            <div className="mt-6 grid gap-3">
              {accountChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Services"
              title="Investigate before disabling"
            />

            <div className="mt-6 grid gap-3">
              {serviceChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Persistence"
              title="Do not stop at the visible process"
            />

            <div className="mt-6 grid gap-3">
              {persistenceChecks.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Windows event quick reference"
            title="Do not remediate before collecting the evidence you may need"
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
            Replace shortcuts with Windows-specific reasoning
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
            title="Ask these after high-impact Windows changes"
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
                <p className="text-sm leading-6 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Windows 11 final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid the common mistakes before moving on
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
              href="/cyberpatriot/common-mistakes/competition-strategy-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/windows-server-mistakes"
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
