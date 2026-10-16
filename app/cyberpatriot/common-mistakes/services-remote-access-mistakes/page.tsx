import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mistakes = [
  {
    title: "Disabling services because they listen on a port",
    what:
      "A listening port may be treated as proof that the related service should be disabled.",
    consequence:
      "Required remote administration, web services, file sharing, monitoring, or application functionality can be broken.",
    replacement:
      "Map the listener to the owning process and service, confirm the mission requirement, then reduce only unnecessary exposure.",
  },
  {
    title: "Closing ports without identifying the owner",
    what:
      "A firewall rule may be added simply because a port number appears unfamiliar.",
    consequence:
      "The team can block a required application while leaving the underlying service problem unresolved.",
    replacement:
      "Identify the process, service, executable path, account, and mission purpose before changing firewall policy.",
  },
  {
    title: "Disabling RDP automatically",
    what:
      "RDP may be turned off because it is commonly considered high risk.",
    consequence:
      "Approved administrators can lose required access and the team may lock itself out of an important workflow.",
    replacement:
      "Confirm whether RDP is required, review approved users and firewall scope, and restrict unnecessary exposure instead of disabling blindly.",
  },
  {
    title: "Disabling SSH automatically",
    what:
      "SSH may be shut down without checking whether the scenario requires Linux or network-device remote administration.",
    consequence:
      "Approved management access can disappear and recovery can consume valuable time.",
    replacement:
      "Verify mission requirements, allowed users, authentication settings, listener scope, and management source restrictions first.",
  },
  {
    title: "Ignoring service dependencies",
    what:
      "A service may be stopped because it looks optional while another required role or application depends on it.",
    consequence:
      "Unrelated functionality can fail and the cause may be difficult to trace.",
    replacement:
      "Check required and dependent services before stopping or disabling anything important.",
  },
  {
    title: "Changing service accounts without understanding impact",
    what:
      "The account running a service may be changed or disabled because it appears overprivileged or unfamiliar.",
    consequence:
      "The service can fail to start or lose access to files, shares, certificates, databases, or network resources.",
    replacement:
      "Understand the service identity, required rights, dependencies, and logon role before changing the account.",
  },
  {
    title: "Restarting suspicious services before collecting evidence",
    what:
      "A service may be restarted to see whether the issue clears.",
    consequence:
      "Transient process state, network connections, logs, and timestamps may change or disappear.",
    replacement:
      "Capture service state, path, account, PID, listeners, logs, and recent installation evidence before restarting or stopping it.",
  },
  {
    title: "Treating every remote-management method as equivalent",
    what:
      "RDP, WinRM, SSH, and VTY access may be reviewed as if they provide the same type of access and controls.",
    consequence:
      "Unauthorized access can remain in one channel even after another is hardened.",
    replacement:
      "Review each management path separately, including users, authentication, listener state, firewall or ACL scope, and mission need.",
  },
  {
    title: "Using broad firewall rules to fix one exposure",
    what:
      "A wide deny or allow rule may be added to solve one remote-access issue.",
    consequence:
      "Required traffic can be blocked or unnecessary traffic can remain allowed because the rule is too broad.",
    replacement:
      "Define the exact source, destination, protocol, port, and required clients before making a narrow rule change.",
  },
  {
    title: "Verifying service state but not actual function",
    what:
      "A service may show Running or Active and the team assumes the related application works.",
    consequence:
      "The real mission function may still be broken because of permissions, firewall rules, authentication, or dependencies.",
    replacement:
      "Test the actual required function after the service change, not only the service status.",
  },
];

const windowsChecks = [
  "Map important listeners with Get-NetTCPConnection.",
  "Identify owning processes with Get-Process.",
  "Review Windows services with path, startup mode, and service account.",
  "Check RDP service state and Remote Desktop Users.",
  "Check WinRM only when the mission uses it.",
  "Review firewall exposure around required services.",
];

const linuxChecks = [
  "Map listeners with ss -lntup.",
  "Identify owning processes and executable paths.",
  "Review systemd service state and unit files.",
  "Check SSH configuration and allowed access.",
  "Review UFW or nftables only after identifying required services.",
  "Preserve journal or authentication evidence before remediation.",
];

const ciscoChecks = [
  "Review VTY configuration.",
  "Verify SSH state.",
  "Review local management users.",
  "Check management ACLs or access-class configuration.",
  "Confirm the expected management source networks.",
  "Retest approved remote administration after changes.",
];

const quickCommands = [
  {
    title: "Windows listeners",
    commands: [
      "Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess",
      "Get-Process -Id <PID>",
    ],
  },
  {
    title: "Windows services",
    commands: [
      "Get-CimInstance Win32_Service | Select-Object Name,State,StartMode,StartName,PathName",
      "Get-Service <ServiceName> -DependentServices",
      "Get-Service <ServiceName> -RequiredServices",
    ],
  },
  {
    title: "Linux listeners",
    commands: [
      "sudo ss -lntup",
      "ps -fp <PID>",
      "readlink -f /proc/<PID>/exe",
    ],
  },
  {
    title: "Cisco management",
    commands: [
      "show running-config | section line vty",
      "show ip ssh",
      "show access-lists",
    ],
  },
];

const badVsBetter = [
  {
    bad: "Port 3389 is open, so disable RDP.",
    better:
      "Confirm whether RDP is required, who is allowed to use it, and whether firewall exposure is appropriately limited.",
  },
  {
    bad: "Port 22 is listening, so stop SSH.",
    better:
      "Confirm mission need, approved users, authentication settings, and management scope before changing SSH.",
  },
  {
    bad: "Block the suspicious port in the firewall.",
    better:
      "Identify the process and service that owns the listener first, then decide whether blocking or removing the service is the right fix.",
  },
  {
    bad: "Restart the service to see if the problem goes away.",
    better:
      "Preserve service, process, listener, and log evidence before changing the state.",
  },
  {
    bad: "The service is running, so everything is fine.",
    better:
      "Test the actual required function from the perspective of the intended user or client.",
  },
  {
    bad: "Remove remote management because it is safer.",
    better:
      "Keep only the remote-management channels the mission requires and restrict them to approved users and sources.",
  },
];

const verificationQuestions = [
  "Are all mission-required services still available?",
  "Does RDP state match the scenario?",
  "Does SSH state match the scenario?",
  "Does WinRM or VTY access match the scenario?",
  "Are only approved users allowed to use remote-management channels?",
  "Do firewall and ACL rules allow required clients and block unnecessary exposure?",
  "Do service accounts still have the rights they need?",
  "Were suspicious services and listeners documented before remediation?",
];

const finalChecklist = [
  "Required services were identified before disabling anything.",
  "Important listeners were mapped to owning processes and services.",
  "RDP state and approved users match the mission.",
  "SSH state and approved users match the mission.",
  "WinRM or VTY state was reviewed where relevant.",
  "Service dependencies were checked before stopping services.",
  "Service accounts were reviewed before identity changes.",
  "Suspicious service evidence was preserved before restart or disablement.",
  "Firewall or ACL changes were narrow and evidence-backed.",
  "Remote-management methods were reviewed separately.",
  "Required functionality was tested after service changes.",
  "Unresolved services or listeners were documented instead of guessed.",
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

export default function ServicesRemoteAccessMistakesPage() {
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
              href="/cyberpatriot/common-mistakes/accounts-privilege-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/evidence-documentation-mistakes"
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
                Common Mistakes &middot; Guide 08 &middot; Services &amp; Remote Access
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Services &amp; Remote Access Mistakes
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Services and remote-access channels are easy to over-harden.
                Closing a port, disabling a daemon, stopping RDP, or changing a
                service account can break required functionality if the team
                does not understand the dependency first.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Map listeners to services, confirm mission requirements,
                preserve suspicious evidence, and reduce only unnecessary
                exposure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Quick Use
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Map first</span>
                  <span className="font-bold text-white">Port to service</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Check</span>
                  <span className="font-bold text-white">Dependencies</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Remote access</span>
                  <span className="font-bold text-white">Mission-driven</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Finish with</span>
                  <span className="font-bold text-white">Function test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Services rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            A listening port is a clue, not a verdict
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The listener must be tied to a process, service, user, and mission
            function before the team can decide whether the right action is to
            keep it, restrict it, or remove it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="10 service mistakes"
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
              label="Windows"
              title="Map listeners before blocking"
            />
            <div className="mt-6 grid gap-3">
              {windowsChecks.map((item) => (
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
              label="Linux"
              title="Review SSH and systemd in context"
            />
            <div className="mt-6 grid gap-3">
              {linuxChecks.map((item) => (
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
              label="Cisco"
              title="Protect management access"
            />
            <div className="mt-6 grid gap-3">
              {ciscoChecks.map((item) => (
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
            label="Quick commands"
            title="Observe the service and listener before changing it"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {quickCommands.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <div className="mt-5 grid gap-3">
                  {item.commands.map((command) => (
                    <pre
                      key={command}
                      className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100"
                    >
                      {command}
                    </pre>
                  ))}
                </div>
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
            Replace port-based guesses with service context
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
            title="Ask these after high-impact service changes"
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
            Services &amp; Remote Access final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Keep required access, remove only unnecessary exposure
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
              href="/cyberpatriot/common-mistakes/accounts-privilege-mistakes"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Guide
            </Link>

            <Link
              href="/cyberpatriot/common-mistakes/evidence-documentation-mistakes"
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
