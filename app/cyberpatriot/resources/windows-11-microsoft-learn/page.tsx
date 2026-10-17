import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const microsoftResources = [
  {
    title: "Windows Security Documentation",
    url: "https://learn.microsoft.com/windows/security",
    purpose:
      "Use this as the main Microsoft Learn entry point for Windows 11 security topics, including operating-system security, identity protection, application security, privacy, and security foundations.",
    competitionUse:
      "Best starting reference when you know the security area but do not yet know the exact Microsoft article you need.",
  },
  {
    title: "Windows 11 Security Book",
    url: "https://learn.microsoft.com/en-us/windows/security/book/",
    purpose:
      "Provides Microsoft's higher-level view of Windows 11 security architecture and how protections fit together across identity, applications, devices, and the operating system.",
    competitionUse:
      "Useful for understanding why a control exists before deciding whether a setting should be changed in a competition image.",
  },
  {
    title: "Windows Security Baselines",
    url: "https://learn.microsoft.com/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines",
    purpose:
      "Explains Microsoft's recommended baseline approach and the Security Compliance Toolkit used by administrators to compare and manage recommended settings.",
    competitionUse:
      "Use as a reasoning reference, not as permission to apply every baseline setting blindly. CyberPatriot mission requirements always come first.",
  },
  {
    title: "Local Accounts",
    url: "https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/local-accounts",
    purpose:
      "Explains built-in local accounts, local security principals, administrator membership, and security considerations for Windows accounts.",
    competitionUse:
      "Strong reference when classifying local users, reviewing Administrators membership, or deciding whether an unfamiliar account is actually removable.",
  },
  {
    title: "User Account Control",
    url: "https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/",
    purpose:
      "Explains how UAC limits elevation and why administrative approval is separated from normal user activity.",
    competitionUse:
      "Use when evaluating elevation behavior, administrator prompts, and whether a UAC change improves security without breaking expected administration.",
  },
  {
    title: "Windows Firewall",
    url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/",
    purpose:
      "Explains Windows Firewall concepts, profiles, filtering behavior, and the role of firewall rules in controlling network traffic.",
    competitionUse:
      "Use before making broad firewall changes. Confirm the required service, application, port, profile, and direction first.",
  },
  {
    title: "Microsoft Defender Antivirus",
    url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-antivirus/windows-defender-antivirus-in-windows-10",
    purpose:
      "Covers Defender Antivirus capabilities, operating modes, protection state, updates, and related security behavior on Windows 10 and Windows 11.",
    competitionUse:
      "Useful when checking whether antivirus protection is active, understanding Defender state, or verifying that a security control is functioning as expected.",
  },
  {
    title: "Windows Security App",
    url: "https://learn.microsoft.com/windows/security/operating-system-security/system-security/windows-defender-security-center/windows-defender-security-center",
    purpose:
      "Explains the Windows Security interface used to view security areas such as virus protection, firewall status, device security, and related controls.",
    competitionUse:
      "Useful as a quick visual verification surface, but important findings should still be confirmed with the underlying configuration or evidence when needed.",
  },
];

const learningPath = [
  {
    step: "01",
    title: "Start with the mission",
    detail:
      "Before opening Microsoft Learn, write down the required users, services, applications, remote-access paths, and restrictions from the competition scenario.",
  },
  {
    step: "02",
    title: "Name the security question",
    detail:
      "Ask a narrow question such as: Who should be an administrator? What does this firewall profile control? Is this service required?",
  },
  {
    step: "03",
    title: "Use the closest official article",
    detail:
      "Choose the Microsoft page that explains the exact feature instead of searching random forum posts or copying commands without context.",
  },
  {
    step: "04",
    title: "Compare documentation to the image",
    detail:
      "Check the actual local state, edition, policy, account, service, or rule on the competition image. Documentation describes behavior; the image provides the evidence.",
  },
  {
    step: "05",
    title: "Make a narrow decision",
    detail:
      "Apply only the change supported by mission requirements and evidence. Do not transform an official recommendation into a broad automatic hardening script.",
  },
  {
    step: "06",
    title: "Verify afterward",
    detail:
      "Confirm the intended security improvement and the required function after the change, then document the result.",
  },
];

const topicMap = [
  {
    topic: "Accounts & Privilege",
    start: "Local Accounts",
    questions: [
      "Which accounts are built in?",
      "Who belongs in Administrators?",
      "Is the account local, service-related, or mission-required?",
      "What access could break if the account is changed?",
    ],
  },
  {
    topic: "Elevation & UAC",
    start: "User Account Control",
    questions: [
      "What action is requesting elevation?",
      "Is UAC enabled?",
      "Which policy controls the observed behavior?",
      "Would changing it create an operational problem?",
    ],
  },
  {
    topic: "Firewall",
    start: "Windows Firewall",
    questions: [
      "Which profile is active?",
      "What program, service, port, or address does the rule affect?",
      "Is the traffic mission-required?",
      "Can the rule be narrowed instead of disabled or rewritten broadly?",
    ],
  },
  {
    topic: "Malware Protection",
    start: "Microsoft Defender Antivirus",
    questions: [
      "Is Defender active?",
      "Are security intelligence updates current enough for the environment?",
      "Is real-time protection operating?",
      "Are exclusions or detections relevant to the investigation?",
    ],
  },
  {
    topic: "Security Posture",
    start: "Windows Security Baselines",
    questions: [
      "What is Microsoft's recommended posture?",
      "Does the competition mission require an exception?",
      "Would this setting break a required function?",
      "Can the change be verified and reversed?",
    ],
  },
  {
    topic: "Windows Security Overview",
    start: "Windows Security Documentation",
    questions: [
      "Which Windows security subsystem owns this feature?",
      "What related controls should be reviewed?",
      "What is the official terminology?",
      "Which deeper Microsoft Learn page should be opened next?",
    ],
  },
];

const safeUseRules = [
  "Treat Microsoft Learn as authoritative product documentation, not as a competition answer key.",
  "Read the CyberPatriot scenario before applying a Microsoft recommendation.",
  "Do not apply an entire security baseline automatically to a competition image.",
  "Confirm the Windows edition and feature actually present on the image.",
  "Preserve required services and remote-access paths.",
  "Record original state before high-impact changes.",
  "Prefer narrow configuration changes over broad resets.",
  "Verify both security posture and mission functionality afterward.",
];

const weakVsBetter = [
  {
    weak: "Search the web for 'best Windows hardening commands' and run a list.",
    better:
      "Identify the exact security question, use Microsoft Learn to understand the feature, then inspect the competition image before changing anything.",
  },
  {
    weak: "Microsoft recommends this baseline setting, so it must be safe here.",
    better:
      "Use the recommendation as a reference, then compare it with the competition mission and required functionality.",
  },
  {
    weak: "Disable an unfamiliar Windows service because it sounds unnecessary.",
    better:
      "Use official documentation and local evidence to identify the service, dependencies, startup behavior, and mission role first.",
  },
  {
    weak: "Turn off remote access because remote access is risky.",
    better:
      "Determine whether the mission requires remote administration, then secure the approved method without breaking required access.",
  },
  {
    weak: "The Windows Security screen is green, so the system is secure.",
    better:
      "Use the Windows Security app as one signal, then verify the specific accounts, policies, services, firewall rules, and evidence relevant to the task.",
  },
  {
    weak: "Copy a Microsoft command without reading what it changes.",
    better:
      "Understand the feature, expected state, blast radius, rollback path, and verification method before using the command.",
  },
];

const quickReference = [
  {
    question: "I need a broad Windows 11 security starting point.",
    answer: "Open Windows Security Documentation.",
  },
  {
    question: "I am reviewing local users or Administrators membership.",
    answer: "Open Local Accounts.",
  },
  {
    question: "I am investigating elevation or admin prompts.",
    answer: "Open User Account Control.",
  },
  {
    question: "I am reviewing inbound or outbound traffic controls.",
    answer: "Open Windows Firewall.",
  },
  {
    question: "I am checking antivirus protection or Defender state.",
    answer: "Open Microsoft Defender Antivirus and the Windows Security app documentation.",
  },
  {
    question: "I want to compare the system with Microsoft's recommended posture.",
    answer: "Open Windows Security Baselines, then compare recommendations against the competition mission before changing anything.",
  },
];

const finalChecklist = [
  "Use Microsoft Learn before relying on third-party Windows advice when an official article exists.",
  "Start with the competition mission, not with a generic hardening checklist.",
  "Use Windows Security Documentation as the main navigation hub.",
  "Use Local Accounts for account and administrator questions.",
  "Use UAC documentation for elevation behavior.",
  "Use Windows Firewall documentation before broad rule changes.",
  "Use Defender documentation when reviewing antivirus protection.",
  "Use security baselines as a comparison reference, not an automatic competition configuration.",
  "Inspect the actual image before remediation.",
  "Preserve evidence before destructive changes.",
  "Verify required functionality after security changes.",
  "Document what was changed and why.",
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

export default function Windows11MicrosoftLearnResourcePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/cyberpatriot-official-resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/windows-server-active-directory" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Resources &middot; Resource 02 &middot; Windows 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Windows 11 &amp; Microsoft Learn
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Use Microsoft's own documentation to understand Windows 11
                security features before changing them. This page organizes the
                most useful Microsoft Learn starting points for CyberPatriot
                preparation and competition-day reference.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Official documentation explains how Windows behaves. The
                competition scenario and local evidence still decide what is
                appropriate for the image in front of you.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Resource Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Source</span>
                  <span className="font-bold text-white">Microsoft Learn</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Platform</span>
                  <span className="font-bold text-white">Windows 11</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Use</span>
                  <span className="font-bold text-white">Reference</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Priority</span>
                  <span className="font-bold text-white">Mission First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Competition rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Official documentation is a reference, not an automatic hardening plan
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Microsoft security baselines and product recommendations are built
            for real managed environments. In CyberPatriot, read the scenario
            first and preserve required functionality before applying any
            recommendation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Official Microsoft resources"
            title="Start with the page closest to the problem you are solving"
            description="These links are official Microsoft Learn documentation. Open the narrowest relevant resource instead of searching randomly for commands."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            {microsoftResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:border-cyan-400/40 hover:bg-slate-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-200">
                    {resource.title}
                  </h3>
                  <span className="text-cyan-300">&rarr;</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {resource.purpose}
                </p>

                <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Competition use
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {resource.competitionUse}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            How to use Microsoft Learn
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Move from mission question to verified change
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {learningPath.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.step}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
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
            label="Topic map"
            title="Match the Windows question to the right documentation"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topicMap.map((area) => (
              <div
                key={area.topic}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  Start with {area.start}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">
                  {area.topic}
                </h3>

                <div className="mt-4 grid gap-2">
                  {area.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Safe-use rules"
            title="Use documentation without turning it into blind configuration"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {safeUseRules.map((item, index) => (
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
            Use official documentation as part of reasoning, not as a shortcut
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {weakVsBetter.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
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
            label="Quick reference"
            title="Where should I start?"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickReference.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-white">{item.question}</p>
                <p className="mt-3 text-sm leading-7 text-cyan-200">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Windows &amp; Microsoft Learn final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Use official Windows documentation with mission-aware judgment
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
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
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
              href="/cyberpatriot/resources/cyberpatriot-official-resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/windows-server-active-directory" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
