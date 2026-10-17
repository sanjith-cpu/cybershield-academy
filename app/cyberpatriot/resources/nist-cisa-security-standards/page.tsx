import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialResources = [
  {
    title: "NIST Cybersecurity Framework 2.0",
    href: "https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20",
    description:
      "NIST's current high-level framework for understanding, prioritizing, communicating, and managing cybersecurity risk.",
  },
  {
    title: "CISA Cybersecurity Performance Goals",
    href: "https://www.cisa.gov/cross-sector-cybersecurity-performance-goals",
    description:
      "Voluntary, high-impact cybersecurity practices intended to help organizations prioritize meaningful risk reduction.",
  },
  {
    title: "NIST SP 800-53 Rev. 5",
    href: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    description:
      "A detailed catalog of security and privacy controls covering access control, auditing, configuration, incident response, system integrity, and many other areas.",
  },
  {
    title: "CIS Benchmarks",
    href: "https://www.cisecurity.org/cis-benchmarks",
    description:
      "Consensus-based secure configuration recommendations for operating systems, network devices, server software, applications, and other technologies.",
  },
];

const csfFunctions = [
  {
    number: "01",
    title: "Govern",
    question: "How is cybersecurity risk directed and managed?",
    examples: [
      "Policies and responsibilities",
      "Risk strategy",
      "Oversight",
      "Roles and accountability",
    ],
  },
  {
    number: "02",
    title: "Identify",
    question: "What systems, assets, risks, and dependencies exist?",
    examples: [
      "Asset inventory",
      "Users and services",
      "Software and roles",
      "Risk assessment",
    ],
  },
  {
    number: "03",
    title: "Protect",
    question: "What safeguards reduce the likelihood or impact of compromise?",
    examples: [
      "Access control",
      "Secure configuration",
      "Updates",
      "Least privilege",
    ],
  },
  {
    number: "04",
    title: "Detect",
    question: "How do we identify suspicious or abnormal activity?",
    examples: [
      "Logs",
      "Monitoring",
      "Alerts",
      "Behavior review",
    ],
  },
  {
    number: "05",
    title: "Respond",
    question: "What do we do after identifying a security event?",
    examples: [
      "Investigation",
      "Containment",
      "Communication",
      "Remediation",
    ],
  },
  {
    number: "06",
    title: "Recover",
    question: "How do we restore required operations safely?",
    examples: [
      "Service restoration",
      "Recovery planning",
      "Validation",
      "Lessons learned",
    ],
  },
];

const controlFamilies = [
  {
    code: "AC",
    title: "Access Control",
    detail:
      "Who can access systems, resources, services, and administrative functions.",
  },
  {
    code: "AU",
    title: "Audit & Accountability",
    detail:
      "Logging, audit records, review, protection, and accountability.",
  },
  {
    code: "CM",
    title: "Configuration Management",
    detail:
      "Secure configuration, change control, inventories, and system settings.",
  },
  {
    code: "IA",
    title: "Identification & Authentication",
    detail:
      "Accounts, authentication, identity proofing, passwords, and authenticators.",
  },
  {
    code: "IR",
    title: "Incident Response",
    detail:
      "Preparation, detection, analysis, containment, recovery, and reporting.",
  },
  {
    code: "SC",
    title: "System & Communications Protection",
    detail:
      "Network protection, boundaries, communications, encryption, and architecture.",
  },
  {
    code: "SI",
    title: "System & Information Integrity",
    detail:
      "Flaw remediation, malicious-code protection, monitoring, and system integrity.",
  },
  {
    code: "RA",
    title: "Risk Assessment",
    detail:
      "Understanding threats, vulnerabilities, likelihood, impact, and organizational risk.",
  },
];

const standardsLayers = [
  {
    title: "Framework",
    example: "NIST CSF 2.0",
    purpose:
      "Defines high-level cybersecurity outcomes and a common language for managing risk.",
  },
  {
    title: "Control Catalog",
    example: "NIST SP 800-53",
    purpose:
      "Provides detailed security and privacy controls that organizations can select and tailor.",
  },
  {
    title: "Performance Goals",
    example: "CISA CPGs",
    purpose:
      "Prioritizes practical, high-impact cybersecurity outcomes and actions.",
  },
  {
    title: "Configuration Benchmark",
    example: "CIS Benchmark",
    purpose:
      "Provides technology-specific secure configuration recommendations.",
  },
  {
    title: "Organization Policy",
    example: "Local security policy",
    purpose:
      "Defines what a specific organization actually requires for its systems and users.",
  },
  {
    title: "Competition Scenario",
    example: "CyberPatriot README / instructions",
    purpose:
      "Defines what must remain authorized, available, configured, or operational in that specific image.",
  },
];

const competitionMappings = [
  {
    finding: "Too many administrator accounts",
    standardsView:
      "Access control, identity management, least privilege, and privileged-account protection.",
    competitionView:
      "Compare administrator membership against approved users and required service accounts before making changes.",
  },
  {
    finding: "Firewall appears permissive",
    standardsView:
      "System and communications protection, boundary control, and risk reduction.",
    competitionView:
      "Confirm required services and connectivity before narrowing exposure.",
  },
  {
    finding: "Logging is limited",
    standardsView:
      "Audit and accountability plus detection capability.",
    competitionView:
      "Review required logging, enable appropriate evidence sources when justified, and verify system impact.",
  },
  {
    finding: "Unnecessary software may be installed",
    standardsView:
      "Configuration management, inventory, attack-surface reduction, and vulnerability management.",
    competitionView:
      "Confirm that the application is not mission-required before removing it.",
  },
  {
    finding: "Passwords or authentication settings look weak",
    standardsView:
      "Identification, authentication, access control, and account protection.",
    competitionView:
      "Apply the scenario's requirements while avoiding changes that break approved access or service accounts.",
  },
  {
    finding: "A suspicious service is running",
    standardsView:
      "Configuration management, system integrity, monitoring, and incident response.",
    competitionView:
      "Identify the service, dependencies, executable, evidence, and mission purpose before disabling it.",
  },
];

const cpgThemes = [
  {
    title: "Account Security",
    items: [
      "Reduce unnecessary privilege.",
      "Protect administrator accounts.",
      "Use strong authentication practices.",
      "Remove or disable unauthorized access when justified.",
    ],
  },
  {
    title: "System Hardening",
    items: [
      "Reduce unnecessary services and exposure.",
      "Apply secure configuration practices.",
      "Maintain supported and updated software.",
      "Preserve required business functions.",
    ],
  },
  {
    title: "Logging & Detection",
    items: [
      "Maintain useful security logs.",
      "Review suspicious activity.",
      "Protect important evidence.",
      "Know which systems require monitoring.",
    ],
  },
  {
    title: "Recovery & Resilience",
    items: [
      "Know what services are mission-critical.",
      "Protect recovery capability.",
      "Verify restored functionality.",
      "Learn from incidents and failures.",
    ],
  },
];

const benchmarkMethod = [
  {
    number: "01",
    title: "Confirm the technology",
    description:
      "Use a benchmark that actually matches the operating system, edition, role, or product being reviewed.",
  },
  {
    number: "02",
    title: "Read the recommendation",
    description:
      "Understand what the setting changes, why it is recommended, and what risk it addresses.",
  },
  {
    number: "03",
    title: "Check applicability",
    description:
      "Determine whether the recommendation makes sense for the current system and mission.",
  },
  {
    number: "04",
    title: "Check dependencies",
    description:
      "Identify applications, users, remote access, or services that may depend on the existing configuration.",
  },
  {
    number: "05",
    title: "Make a narrow change",
    description:
      "Apply only the justified setting instead of blindly importing an entire hardened configuration.",
  },
  {
    number: "06",
    title: "Verify",
    description:
      "Confirm both the security improvement and continued operation of required services.",
  },
];

const weakVsBetter = [
  {
    weak: "A benchmark says to disable it, so disable it.",
    better:
      "Check whether the recommendation applies to the system and whether the competition scenario requires the service.",
  },
  {
    weak: "NIST is a checklist of exact settings.",
    better:
      "NIST frameworks and controls define outcomes and control objectives; implementation depends on system context.",
  },
  {
    weak: "Apply every hardening recommendation at once.",
    better:
      "Prioritize, make controlled changes, and verify required functionality after each meaningful change.",
  },
  {
    weak: "A system that differs from a benchmark is automatically insecure.",
    better:
      "Treat the difference as something to evaluate in context, not automatic proof of a vulnerability.",
  },
  {
    weak: "More restrictions always mean better security.",
    better:
      "Security must reduce risk while preserving authorized and mission-required operation.",
  },
  {
    weak: "Standards replace the CyberPatriot README.",
    better:
      "Use standards to understand good practice, but let the competition scenario determine what the image must actually support.",
  },
];

const decisionQuestions = [
  "What security outcome is this recommendation trying to achieve?",
  "Does the recommendation apply to this operating system, role, or product?",
  "What risk does the current setting create?",
  "Is the existing configuration required by the scenario?",
  "Could the proposed change affect approved users or services?",
  "What evidence supports making the change?",
  "Can the change be made more narrowly?",
  "How will the result be verified?",
  "What should be recorded in the team change log?",
  "Would another teammate understand why this change was made?",
];

const finalChecklist = [
  "Use NIST CSF 2.0 to understand high-level cybersecurity outcomes.",
  "Remember the six CSF functions: Govern, Identify, Protect, Detect, Respond, and Recover.",
  "Use CISA CPGs to study practical high-impact security priorities.",
  "Use NIST SP 800-53 to understand major control areas.",
  "Use CIS Benchmarks as configuration references rather than automatic scripts.",
  "Match benchmark guidance to the exact technology being reviewed.",
  "Read the rationale and impact of a recommendation before applying it.",
  "Check mission requirements and dependencies first.",
  "Prefer narrow, evidence-backed changes over broad hardening.",
  "Verify security and required functionality after changes.",
  "Document why a standards-based recommendation was or was not applied.",
  "Treat the CyberPatriot scenario as the authority for the competition image.",
];

export default function NistCisaSecurityStandardsResourcePage() {
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
              href="/cyberpatriot/resources/forensics-evidence-references"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/practice-lab-resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 10
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            NIST, CISA &amp; Security Standards
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional frameworks, controls, performance goals,
            and configuration benchmarks organize cybersecurity decisions
            without treating any one reference as an automatic answer key.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Standards explain good security practice. CyberPatriot scenarios
            still determine which users, services, applications, connectivity,
            and functions must remain operational on the competition image.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Standards rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            A baseline informs the decision. It does not replace the mission.
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Before applying a recommendation, understand its purpose, confirm
            that it applies to the system, check dependencies, and verify that
            required functionality will remain available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Primary reference library
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {officialResources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <p className="mt-4 text-sm font-bold text-cyan-300">
                Open reference &rarr;
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          NIST CSF 2.0 functions
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {csfFunctions.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">
                {item.number}
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.question}
              </p>

              <div className="mt-4 grid gap-2">
                {item.examples.map((example) => (
                  <div
                    key={example}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Important NIST control families
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {controlFamilies.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xl font-black text-cyan-300">
                {item.code}
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Framework, control, benchmark, policy, scenario
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {standardsLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-bold text-cyan-300">
                  {item.example}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          CISA high-impact security themes
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cpgThemes.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">
                {area.title}
              </h3>

              <div className="mt-4 grid gap-2">
                {area.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Mapping standards thinking to competition work
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {competitionMappings.map((item) => (
            <div
              key={item.finding}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">
                {item.finding}
              </h3>

              <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                Standards view
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.standardsView}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Competition view
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.competitionView}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          How to use a configuration benchmark
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benchmarkMethod.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">
                {item.number}
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Questions before applying a standard
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {decisionQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak approach vs better approach
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak approach
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better approach
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Standards resource checklist
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

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
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
              href="/cyberpatriot/resources/forensics-evidence-references"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/practice-lab-resources" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}