import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain why required services must be preserved while still being secured.",
  "Identify the difference between disabling an unnecessary service and hardening a required one.",
  "Map services to their purpose, dependencies, users, ports, and access requirements before changing them.",
  "Use least-disruptive controls such as configuration hardening, permissions, scope reduction, and firewall restrictions.",
  "Recognize common ways teams accidentally break required functionality.",
  "Verify both service security and service availability after defensive changes.",
];

const serviceReview = [
  {
    number: "01",
    title: "Purpose",
    text: "Determine what the service or application is supposed to provide and why the scenario requires it.",
    questions: [
      "Who needs this service?",
      "What business or competition function does it support?",
      "Is it explicitly required by the scenario?",
    ],
  },
  {
    number: "02",
    title: "Dependencies",
    text: "Identify other services, accounts, files, ports, protocols, or roles that the required function depends on.",
    questions: [
      "What breaks if this service stops?",
      "Does another application depend on it?",
      "Does it rely on DNS, authentication, networking, or storage?",
    ],
  },
  {
    number: "03",
    title: "Exposure",
    text: "Understand where the service is reachable from and whether that exposure is broader than necessary.",
    questions: [
      "Which interfaces or networks can reach it?",
      "What ports or protocols are involved?",
      "Can access be narrowed without breaking the requirement?",
    ],
  },
  {
    number: "04",
    title: "Authentication",
    text: "Review who can access the service and whether authentication, privileges, and account usage are appropriate.",
    questions: [
      "Who is allowed to connect?",
      "Are default or weak credentials present?",
      "Are administrative functions separated from normal use?",
    ],
  },
  {
    number: "05",
    title: "Configuration",
    text: "Review settings that affect security while preserving the service's legitimate purpose.",
    questions: [
      "Are insecure options enabled?",
      "Are unnecessary features active?",
      "Can stronger settings be applied safely?",
    ],
  },
  {
    number: "06",
    title: "Verification",
    text: "After hardening, confirm the service remains functional and the intended security improvement is real.",
    questions: [
      "Does the required function still work?",
      "Is exposure reduced as intended?",
      "Did the change create errors or dependency failures?",
    ],
  },
];

const hardeningMethods = [
  {
    title: "Reduce access scope",
    text: "Limit access to the users, systems, interfaces, or networks that actually need the service.",
  },
  {
    title: "Strengthen authentication",
    text: "Remove weak or default access, reduce unnecessary privileges, and enforce appropriate account controls.",
  },
  {
    title: "Disable unnecessary features",
    text: "A required service may contain optional components that are not needed. Reduce attack surface without removing the core function.",
  },
  {
    title: "Tighten permissions",
    text: "Review file, directory, share, service, and administrative permissions so users receive only the access they need.",
  },
  {
    title: "Patch and update",
    text: "Keep the required service and supporting software current when the competition environment and available time make that appropriate.",
  },
  {
    title: "Restrict network exposure",
    text: "Use firewall and network controls to permit required traffic while blocking unnecessary access paths.",
  },
  {
    title: "Improve logging",
    text: "Enable useful logging so the team can investigate failures, suspicious activity, and access attempts.",
  },
  {
    title: "Verify configuration",
    text: "Confirm the service is using the intended secure settings rather than assuming a saved configuration took effect.",
  },
];

const dependencyLayers = [
  {
    layer: "Application",
    example: "The user-facing function or service the scenario actually requires.",
  },
  {
    layer: "Service / daemon",
    example: "The operating-system component that provides or supports the application.",
  },
  {
    layer: "Authentication",
    example: "Local accounts, domain services, SSH keys, or other identity mechanisms used for access.",
  },
  {
    layer: "Network",
    example: "IP configuration, firewall rules, interfaces, routing, DNS, and required ports.",
  },
  {
    layer: "Storage and permissions",
    example: "Files, shares, directories, databases, or configuration files the service needs.",
  },
];

const beforeChanging = [
  "What does the scenario say must remain available?",
  "What system or user depends on this service?",
  "What is the exact security concern?",
  "Can the problem be fixed without disabling the service?",
  "What ports, protocols, accounts, or files are involved?",
  "What could fail if this change is wrong?",
  "How will I test the required function afterward?",
  "Does another teammate need to know before I make the change?",
];

const workedCases = [
  {
    title: "Case 1: required remote management",
    situation:
      "The scenario requires administrators to manage the system remotely, but the related service appears broadly exposed.",
    weak:
      "Disable the remote-management service because remote access increases attack surface.",
    strong:
      "Keep the required function available, then restrict who can connect, reduce network exposure, strengthen authentication, and verify authorized remote access still works.",
  },
  {
    title: "Case 2: required web service",
    situation:
      "A web service is required, but an unnecessary administrative feature is exposed to users who do not need it.",
    weak:
      "Stop the entire web service.",
    strong:
      "Preserve the required site while removing or restricting the unnecessary administrative capability and verifying normal service operation.",
  },
  {
    title: "Case 3: required file sharing",
    situation:
      "A file-sharing role is required, but a share grants broader permissions than the scenario needs.",
    weak:
      "Disable file sharing completely.",
    strong:
      "Keep the required share available while correcting permissions, access scope, and unnecessary exposure.",
  },
  {
    title: "Case 4: required SSH",
    situation:
      "Linux remote administration over SSH is required, but the current configuration allows more access than necessary.",
    weak:
      "Disable SSH entirely.",
    strong:
      "Keep SSH available while reviewing authorized users, authentication, privileges, network exposure, and other relevant hardening settings.",
  },
];

const verifySteps = [
  {
    title: "Service state",
    text: "Confirm the required service is running or available in the expected state.",
  },
  {
    title: "Authorized access",
    text: "Verify legitimate users or systems can still use the service as required.",
  },
  {
    title: "Unauthorized exposure",
    text: "Confirm the unnecessary access path or insecure condition was actually reduced.",
  },
  {
    title: "Dependencies",
    text: "Check related applications, authentication, storage, DNS, networking, or other dependencies for unexpected failures.",
  },
  {
    title: "Logs and errors",
    text: "Review warnings or errors that may show the hardening change caused a hidden problem.",
  },
  {
    title: "Team status",
    text: "Record the result and communicate anything that affects another teammate's work.",
  },
];

const commonMistakes = [
  {
    title: "Disabling before understanding",
    text: "A service can look unnecessary until the team learns what required application or role depends on it.",
  },
  {
    title: "Treating required as untouchable",
    text: "Required does not mean insecure settings must remain. Preserve the function while improving its configuration.",
  },
  {
    title: "Ignoring dependencies",
    text: "Stopping one component may break authentication, DNS, file access, remote management, or another service.",
  },
  {
    title: "Overly broad firewall changes",
    text: "Blocking a port without understanding the required traffic can make the service unavailable.",
  },
  {
    title: "Testing only the local machine",
    text: "A service may appear healthy locally while remote users or dependent systems can no longer reach it.",
  },
  {
    title: "Skipping post-change verification",
    text: "A saved setting is not proof that the service is secure and functional.",
  },
];

const reflection = [
  "Why is disabling a required service usually the wrong response to an insecure configuration?",
  "What is the difference between preserving a service and preserving every one of its current settings?",
  "Why should dependencies be reviewed before making a service change?",
  "How can a firewall be used to harden a required service without removing it?",
  "Why should verification include authorized access from the perspective of the user or system that depends on the service?",
  "What should the team do if the service is required but the safest configuration is unclear?",
];

const checklist = [
  "Confirm the service or application is actually required.",
  "Write down the function it provides.",
  "Identify users and systems that depend on it.",
  "Identify ports, protocols, interfaces, and network exposure.",
  "Identify authentication and privilege requirements.",
  "Identify files, shares, directories, or other dependencies.",
  "State the specific security problem.",
  "Choose the least disruptive hardening change.",
  "Coordinate high-impact changes with teammates.",
  "Verify the service still runs.",
  "Verify authorized users can still access it.",
  "Verify unnecessary exposure is reduced.",
  "Check logs and dependent systems for errors.",
  "Document the result and any remaining risk.",
];

export default function ProtectRequiredServicesPage() {
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
            href="/cyberpatriot/competition-strategy/evidence-based-hardening"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/forensics-strategy"
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
                Competition Strategy 08
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Protect Required Services
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Harden services, applications, server roles, and network
                functions without breaking the capabilities the scenario
                requires.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Required does not mean “leave it alone.” It means the team must
                preserve the legitimate function while reducing unnecessary
                exposure, weak access, insecure configuration, and excessive
                privilege.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Hardening methods</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main principle</span>
                  <span className="font-bold text-white">Preserve + secure</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure availability</span>
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
              What required-service protection should help you do
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
              Secure the service without removing the mission
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A required service exists for a reason. The team should identify
              what is necessary for legitimate use and then reduce everything
              else that creates unnecessary risk.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This approach applies to remote management, web services, file
              sharing, SSH, server roles, network services, and many other
              competition scenarios.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Key distinction
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Required function does not mean required insecurity
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A service may need to stay enabled while its permissions, exposure,
              authentication, optional features, or configuration still need to
              be corrected.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not confuse “must remain available” with “must remain exactly
              as configured now.”
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Service review
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Six areas to understand before changing a required service
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceReview.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Review {item.number}
              </p>
              <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-5 grid gap-2">
                {item.questions.map((question) => (
                  <div
                    key={question}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Dependency thinking
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              A required service rarely stands alone
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Before changing a service, think through the layers that may
              support it. A failure in one dependency can make the application
              look broken even when the service itself is still running.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {dependencyLayers.map((item) => (
              <div
                key={item.layer}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.layer}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Hardening methods
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Reduce risk without removing the required capability
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hardeningMethods.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before changing
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask these eight questions
            </h2>
            <div className="mt-5 grid gap-3">
              {beforeChanging.map((question, index) => (
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
              Change risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Higher impact requires stronger coordination
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Service changes can affect networking, authentication, storage,
              applications, and other teammates. The broader the possible
              impact, the more carefully the team should communicate and test.
            </p>
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
              If the required function is not fully understood, pause and
              investigate before making a disruptive change.
            </div>
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
              If the change affects a shared service or server role, tell the
              team before acting so dependent work can be protected.
            </div>
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
              If a safe rollback path is unclear, strengthen verification and
              documentation before changing the system.
            </div>
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
              Preserve the function, harden the risk
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workedCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.situation}
                </p>
                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                    Weak response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.weak}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Better response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.strong}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Prove the service is both secure and available
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verifySteps.map((item) => (
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
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Ways teams accidentally break required functionality
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((item) => (
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
              Test your service-protection reasoning
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
              Required service checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use before and after service hardening
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
                Forensics Strategy
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how to read forensic questions early, preserve
                evidence, separate facts from assumptions, and build supported
                answers without letting investigation stall the rest of the team.
              </p>
            </div>
            <Link
              href="/cyberpatriot/competition-strategy/forensics-strategy"
              className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
            >
              Open Lesson 09 →
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
            href="/cyberpatriot/competition-strategy/evidence-based-hardening"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/cyberpatriot/competition-strategy/forensics-strategy"
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
