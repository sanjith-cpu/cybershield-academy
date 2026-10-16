import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Removing roles or features without checking mission dependencies",
    what:
      "A server role may look unnecessary or risky, so the team removes it before checking whether the scenario or another application depends on it.",
    consequence:
      "File sharing, directory services, DNS, DHCP, web applications, remote administration, or other required functionality can fail.",
    replacement:
      "Identify the role, dependent services, required clients, and mission purpose before removing or disabling anything.",
  },
  {
    title: "Treating Domain Admin membership like local admin membership",
    what:
      "Teams may remove domain privilege without understanding that the account is used across multiple systems or required for domain administration.",
    consequence:
      "Approved administration can break across the environment, and recovery becomes much harder than a local account mistake.",
    replacement:
      "Verify domain roles, group membership, approved administrators, and service dependencies before changing privileged domain groups.",
  },
  {
    title: "Disabling service accounts because they look inactive",
    what:
      "A service identity may not log on interactively, so it appears unused.",
    consequence:
      "Scheduled jobs, services, backups, application pools, or role-specific functions can fail after the account is disabled.",
    replacement:
      "Check service configuration, scheduled tasks, logon rights, and application dependencies before disabling service identities.",
  },
  {
    title: "Changing share permissions without checking NTFS permissions",
    what:
      "Teams sometimes modify only the SMB share permissions or only the underlying NTFS ACLs.",
    consequence:
      "Effective access can become too broad or too restrictive because both permission layers matter.",
    replacement:
      "Review share permissions and NTFS permissions together, then test access with the required user or group.",
  },
  {
    title: "Disabling RDP or WinRM automatically",
    what:
      "Remote administration is sometimes disabled simply because it increases attack surface.",
    consequence:
      "The team may lose required management access or break the competition workflow.",
    replacement:
      "Confirm which remote-management methods the mission requires, then restrict users, firewall scope, and exposure instead of disabling blindly.",
  },
  {
    title: "Ignoring server role dependencies",
    what:
      "A service is stopped because it looks secondary, but another role depends on it.",
    consequence:
      "A seemingly unrelated server function can fail, creating a regression that is difficult to trace.",
    replacement:
      "Inspect dependent and required services before changing role-related service state.",
  },
  {
    title: "Making broad Active Directory changes",
    what:
      "Teams may disable multiple users, remove many group memberships, or reorganize privileged groups in one pass.",
    consequence:
      "Required access can break across the entire domain and the cause can become unclear.",
    replacement:
      "Make narrow identity changes tied to the approved roster and verify each high-impact change before continuing.",
  },
  {
    title: "Ignoring event evidence before remediation",
    what:
      "Accounts, services, shares, and remote-access settings are changed without preserving the relevant Windows event evidence.",
    consequence:
      "The team may lose information explaining when an account changed, when a service was installed, or who accessed a share.",
    replacement:
      "Collect relevant Security and System events before changing the condition that produced them.",
  },
  {
    title: "Restarting the server too early",
    what:
      "A reboot is used as a quick fix after several changes.",
    consequence:
      "Transient evidence disappears, services may fail to return, and multiple changes become harder to troubleshoot.",
    replacement:
      "Restart only when justified, document the reason, and verify required services afterward.",
  },
  {
    title: "Assuming the server is healthy because one service starts",
    what:
      "A required service may show Running while the actual role or application is still unusable.",
    consequence:
      "The team can miss broken shares, failed authentication, unreachable management services, or application dependencies.",
    replacement:
      "Verify the actual mission function, not only the service state.",
  },
];

const roleChecks = [
  "Identify installed server roles and features.",
  "Record which roles the mission requires.",
  "Check dependent services before stopping role-related services.",
  "Confirm required network ports and clients.",
  "Verify role functionality after any high-impact change.",
  "Avoid removing features only because they appear unused.",
];

const identityChecks = [
  "Compare approved users and administrators with local and domain groups.",
  "Review Domain Admins and other privileged domain groups when AD is present.",
  "Identify service accounts and scheduled-task identities.",
  "Check disabled, inactive, or newly created domain users in context.",
  "Separate account existence from privilege level.",
  "Verify approved access after identity changes.",
];

const shareChecks = [
  "List required SMB shares.",
  "Review share-level permissions.",
  "Review NTFS permissions on the underlying folder.",
  "Check whether inheritance is expected.",
  "Verify access with the intended user or group.",
  "Record any permission changes in the change log.",
];

const eventReferences = [
  {
    id: "4624",
    meaning: "Successful logon",
    why:
      "Useful for validating server or domain access.",
  },
  {
    id: "4625",
    meaning: "Failed logon",
    why:
      "Useful for repeated failures and suspicious login attempts.",
  },
  {
    id: "4672",
    meaning: "Special privileges assigned",
    why:
      "Useful when investigating privileged sessions.",
  },
  {
    id: "4720",
    meaning: "User account created",
    why:
      "Useful for suspicious or unexpected account creation.",
  },
  {
    id: "4728",
    meaning: "Member added to global security group",
    why:
      "Important for domain-group privilege changes.",
  },
  {
    id: "4732",
    meaning: "Member added to local security group",
    why:
      "Useful for local Administrators or other sensitive groups.",
  },
  {
    id: "5140",
    meaning: "Network share accessed",
    why:
      "Useful when reviewing SMB access activity.",
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
    bad: "Remove the role because we do not think we need it.",
    better:
      "Confirm mission requirements, clients, dependencies, and role purpose before removal.",
  },
  {
    bad: "Disable the service account because nobody logs into it.",
    better:
      "Check which service, task, application, or role uses the identity first.",
  },
  {
    bad: "Fix the share by changing permissions.",
    better:
      "Review both share and NTFS permissions, then test effective access.",
  },
  {
    bad: "Turn off RDP and WinRM for security.",
    better:
      "Keep only the remote-management methods the mission requires and restrict them appropriately.",
  },
  {
    bad: "Reboot to see if it fixes the problem.",
    better:
      "Identify the failing role or service first and restart only when there is a specific reason.",
  },
  {
    bad: "The service is running, so the role works.",
    better:
      "Test the real function: authentication, share access, application access, or remote administration.",
  },
];

const verificationQuestions = [
  "Do required server roles still work?",
  "Can approved administrators still manage the server?",
  "Do required SMB shares still work?",
  "Are both share and NTFS permissions correct?",
  "Does RDP / WinRM state match the mission?",
  "Are service accounts and scheduled tasks still functioning?",
  "Did any Active Directory change break approved access?",
  "Were important event logs preserved before remediation?",
];

const finalChecklist = [
  "The mission was reviewed before changing server roles or features.",
  "Required server roles remain functional.",
  "Local and domain privileged groups match the approved roster.",
  "Service accounts were identified before disablement.",
  "Share and NTFS permissions were reviewed together.",
  "Required SMB access was retested.",
  "RDP and WinRM state match the scenario.",
  "Role-related service dependencies were checked before stopping services.",
  "Active Directory changes were narrow and verified.",
  "Important Windows event evidence was preserved.",
  "Reboots were avoided unless justified.",
  "Mission functionality was tested after high-impact changes.",
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

export default function WindowsServerMistakesPage() {
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
              href="/cyberpatriot/common-mistakes/windows-11-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/linux-mistakes"
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
                Common Mistakes &middot; Guide 03 &middot; Windows Server
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows Server Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Windows Server mistakes can affect far more than one machine.
                Roles, domain identities, shares, remote management, service
                accounts, and dependencies can all impact the rest of the
                environment.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Server hardening should protect required infrastructure without
                breaking the services other systems depend on.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Protect</span>
                  <span className="font-bold text-white">Roles + Identity</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Check together</span>
                  <span className="font-bold text-white">Share + NTFS</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Before disable</span>
                  <span className="font-bold text-white">Dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Role verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Server rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            On a server, one change can affect many clients
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Always think beyond the local machine. A role, account, service,
            share, or remote-management change can break dependencies across
            the environment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 server mistakes"
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
              label="Roles"
              title="Protect required infrastructure"
            />
            <div className="mt-6 grid gap-3">
              {roleChecks.map((item) => (
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
              label="Identity"
              title="Treat domain changes carefully"
            />
            <div className="mt-6 grid gap-3">
              {identityChecks.map((item) => (
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
              label="Shares"
              title="Review both permission layers"
            />
            <div className="mt-6 grid gap-3">
              {shareChecks.map((item) => (
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
            title="Preserve server and domain evidence before remediation"
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
            Replace server shortcuts with dependency-aware decisions
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
            title="Ask these after high-impact server changes"
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
            Windows Server final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Protect the role, the identity, and the dependency
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
              href="/cyberpatriot/common-mistakes/windows-11-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/linux-mistakes"
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
