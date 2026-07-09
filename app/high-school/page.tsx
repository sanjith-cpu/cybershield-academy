import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tracks = [
  {
    name: "High School Beginner",
    route: "/high-school/beginner",
    badge: "Foundation Track",
    question: "How do cybersecurity concepts work?",
    modules: "15 modules",
    lessons: "105 lesson pages",
    tests: "15 module tests + 2 practice tests + 1 final test",
    total: "105 lessons",
    focus:
      "Clear technical foundations: cyber concepts, ethics, devices, networking, web safety, identity, authentication, threats, cryptography, careers, and beginner defensive labs.",
    accent: "cyan",
  },
  {
    name: "High School Intermediate",
    route: "/high-school/intermediate",
    badge: "Defender Track",
    question: "How do defenders protect systems and respond to problems?",
    modules: "17 modules",
    lessons: "136 lesson pages",
    tests: "17 module tests + 2 practice tests + 1 final test",
    total: "136 lessons",
    focus:
      "Defensive preparation: networking for defenders, Linux, Windows, logs, security tools, IAM, email defense, web defense, incident response, cloud, SOC workflow, and portfolio labs.",
    accent: "emerald",
  },
  {
    name: "High School Advanced",
    route: "/high-school/advanced",
    badge: "Professional Track",
    question:
      "How do professionals design, defend, monitor, and improve secure systems?",
    modules: "20 modules",
    lessons: "200 lesson pages",
    tests: "20 module tests + 2 practice tests + 1 final test",
    total: "200 lessons",
    focus:
      "Professional-style thinking: ethics, architecture, threat modeling, detection engineering, SIEM, incident response, forensics, cloud architecture, identity, cryptography, risk, privacy, automation, and capstone projects.",
    accent: "purple",
  },
];

const beginnerModules = [
  {
    code: "B1",
    title: "Cybersecurity Foundations",
    route: "/high-school/beginner/cybersecurity-foundations",
    purpose:
      "What cybersecurity protects, how defenders think, and how risk, controls, and defense-in-depth fit together.",
  },
  {
    code: "B2",
    title: "Ethics and Responsible Learning",
    route: "/high-school/beginner/ethics-and-responsible-learning",
    purpose:
      "Legal, ethical, and school-safe boundaries before technical cybersecurity learning.",
  },
  {
    code: "B3",
    title: "Computers, Devices, and Operating Systems",
    route: "/high-school/beginner/computers-devices-and-operating-systems",
    purpose:
      "Device parts, operating systems, accounts, files, apps, permissions, updates, and safe shared-device use.",
  },
  {
    code: "B4",
    title: "Networking Basics",
    route: "/high-school/beginner/networking-basics",
    purpose:
      "How devices connect, how networks move information, and how to read beginner network diagrams safely.",
  },
  {
    code: "B5",
    title: "Web Basics and Browser Safety",
    route: "/high-school/beginner/web-basics-and-browser-safety",
    purpose:
      "Browsers, websites, URLs, domains, HTTPS, cookies, sessions, downloads, redirects, and safe research habits.",
  },
  {
    code: "B6",
    title: "Digital Identity and Privacy",
    route: "/high-school/beginner/digital-identity-and-privacy",
    purpose:
      "Identity, metadata, app data collection, privacy settings, digital footprints, and safer sharing.",
  },
  {
    code: "B7",
    title: "Passwords, Authentication, and Account Security",
    route: "/high-school/beginner/passwords-authentication-and-account-security",
    purpose:
      "Authentication basics, passphrases, password managers, MFA, recovery, alerts, and account-defense scenarios.",
  },
  {
    code: "B8",
    title: "Common Cyber Threats",
    route: "/high-school/beginner/common-cyber-threats",
    purpose:
      "Threat categories, warning signs, defensive responses, safe reporting, and fake threat scenario analysis.",
  },
  {
    code: "B9",
    title: "Phishing and Social Engineering Defense",
    route: "/high-school/beginner/phishing-and-social-engineering-defense",
    purpose:
      "Manipulation tactics, phishing indicators, impersonation, safe link judgment, reporting workflows, and trusted help.",
  },
  {
    code: "B10",
    title: "Device and Operating System Safety",
    route: "/high-school/beginner/device-and-operating-system-safety",
    purpose:
      "Device locks, updates, built-in protection, app permissions, removable media, lost-device response, and hardening basics.",
  },
  {
    code: "B11",
    title: "Data Protection and Backups",
    route: "/high-school/beginner/data-protection-and-backups",
    purpose:
      "Data value, file organization, classification, cloud storage safety, backup types, and recovery planning.",
  },
  {
    code: "B12",
    title: "Intro to Cryptography Concepts",
    route: "/high-school/beginner/intro-to-cryptography-concepts",
    purpose:
      "Encryption, encoding, hashing, keys, certificates, integrity checks, HTTPS concepts, and common misunderstandings.",
  },
  {
    code: "B13",
    title: "Cybersecurity Careers and Certifications",
    route: "/high-school/beginner/cybersecurity-careers-and-certifications",
    purpose:
      "Career families, SOC roles, security engineering, GRC, learning paths, certifications, and beginner portfolio planning.",
  },
  {
    code: "B14",
    title: "Beginner Defensive Practice Labs",
    route: "/high-school/beginner/beginner-defensive-practice-labs",
    purpose:
      "Safe fake-data practice with alerts, phishing messages, network diagrams, account checklists, backups, and incident summaries.",
  },
  {
    code: "B15",
    title: "Beginner Capstone Review",
    route: "/high-school/beginner/beginner-capstone-review",
    purpose:
      "Comprehensive Beginner review, portfolio reflection, final readiness, practice tests, and final exam preparation.",
  },
];

const intermediateModules = [
  {
    code: "I1",
    title: "Networking for Defenders",
    route: "/high-school/intermediate/networking-for-defenders",
    purpose:
      "Network models, subnets, ports, DNS, DHCP, firewalls, segmentation, diagrams, and defensive network analysis.",
  },
  {
    code: "I2",
    title: "Linux Basics for Security",
    route: "/high-school/intermediate/linux-basics-for-security",
    purpose:
      "Linux systems, files, users, groups, permissions, processes, services, logs, updates, and safe administration basics.",
  },
  {
    code: "I3",
    title: "Windows Security Basics",
    route: "/high-school/intermediate/windows-security-basics",
    purpose:
      "Windows accounts, file permissions, updates, Defender concepts, Event Viewer, startup apps, services, and local security habits.",
  },
  {
    code: "I4",
    title: "Logs and Event Monitoring",
    route: "/high-school/intermediate/logs-and-event-monitoring",
    purpose:
      "Timestamps, event IDs, authentication logs, system logs, network logs, patterns, timelines, and safe log review.",
  },
  {
    code: "I5",
    title: "Defensive Security Tools",
    route: "/high-school/intermediate/defensive-security-tools",
    purpose:
      "Tool categories, endpoint protection, firewalls, monitoring tools, scanner concepts, MFA tools, ticketing, and output analysis.",
  },
  {
    code: "I6",
    title: "Identity and Access Management",
    route: "/high-school/intermediate/identity-and-access-management",
    purpose:
      "Users, groups, roles, permissions, least privilege, MFA policies, lifecycle reviews, privileged accounts, and IAM labs.",
  },
  {
    code: "I7",
    title: "Email Security and Phishing Defense",
    route: "/high-school/intermediate/email-security-and-phishing-defense",
    purpose:
      "Email defense systems, indicators, header concepts, attachment decisions, filtering, quarantine, reporting, and awareness design.",
  },
  {
    code: "I8",
    title: "Web Security Defense",
    route: "/high-school/intermediate/web-security-defense",
    purpose:
      "Web app risk, input handling, sessions, cookies, tokens, access control, error messages, and secure configuration habits.",
  },
  {
    code: "I9",
    title: "Secure Coding Basics",
    route: "/high-school/intermediate/secure-coding-basics",
    purpose:
      "Defensive coding habits: validation, authorization checks, secrets safety, error handling, logging, dependencies, and review.",
  },
  {
    code: "I10",
    title: "Vulnerability Management Concepts",
    route: "/high-school/intermediate/vulnerability-management-concepts",
    purpose:
      "Vulnerabilities, assets, severity, likelihood, impact, patch workflows, prioritization, mitigation, remediation, and fix plans.",
  },
  {
    code: "I11",
    title: "Incident Response Basics",
    route: "/high-school/intermediate/incident-response-basics",
    purpose:
      "Incident phases, preparation, detection, containment, recovery, communication, lessons learned, and tabletop decisions.",
  },
  {
    code: "I12",
    title: "Digital Forensics Basics",
    route: "/high-school/intermediate/digital-forensics-basics",
    purpose:
      "Evidence thinking, chain of custody concepts, timestamps, metadata, log correlation, documentation limits, and forensic ethics.",
  },
  {
    code: "I13",
    title: "Cloud Security Basics",
    route: "/high-school/intermediate/cloud-security-basics",
    purpose:
      "Cloud computing, shared responsibility, cloud IAM, storage exposure, logging, monitoring, backups, and misconfiguration themes.",
  },
  {
    code: "I14",
    title: "Security Policies and Risk",
    route: "/high-school/intermediate/security-policies-and-risk",
    purpose:
      "Acceptable use, account policies, data handling, classification, risk assessment, controls, exceptions, and clear guidance.",
  },
  {
    code: "I15",
    title: "Security Operations Basics",
    route: "/high-school/intermediate/security-operations-basics",
    purpose:
      "SOC roles, alerts, tickets, cases, triage, escalation, dashboards, metrics, handoffs, alert fatigue, and workflow decisions.",
  },
  {
    code: "I16",
    title: "Intermediate Defensive Labs",
    route: "/high-school/intermediate/intermediate-defensive-labs",
    purpose:
      "Applied fake-data labs across logs, phishing triage, IAM review, web defense, cloud review, incident response, and reporting.",
  },
  {
    code: "I17",
    title: "Intermediate Capstone and Portfolio",
    route: "/high-school/intermediate/intermediate-capstone-and-portfolio",
    purpose:
      "Portfolio artifacts, incident reports, security diagrams, risk recommendations, evidence explanations, and capstone readiness.",
  },
];

const advancedModules = [
  {
    code: "A1",
    title: "Advanced Cyber Ethics and Legal Boundaries",
    route: "/high-school/advanced/advanced-cyber-ethics-and-legal-boundaries",
    purpose:
      "Professional responsibility, authorization, scope, legal risk, disclosure concepts, sensitive information, AI ethics, and trust.",
  },
  {
    code: "A2",
    title: "Security Architecture",
    route: "/high-school/advanced/security-architecture",
    purpose:
      "Defense-in-depth design, trust boundaries, zones, segmentation, identity-centered architecture, visibility, resilience, and tradeoffs.",
  },
  {
    code: "A3",
    title: "Threat Modeling",
    route: "/high-school/advanced/threat-modeling",
    purpose:
      "Assets, threats, trust boundaries, abuse cases, risk ranking, mitigations, communication, and safe threat model reviews.",
  },
  {
    code: "A4",
    title: "Advanced Networking Defense",
    route: "/high-school/advanced/advanced-networking-defense",
    purpose:
      "Network defense strategy, segmentation, firewall design, remote access concepts, monitoring, baselines, and resilience.",
  },
  {
    code: "A5",
    title: "Detection Engineering",
    route: "/high-school/advanced/detection-engineering",
    purpose:
      "Detection logic, fake data, tuning, reducing false positives, alert quality, validation, and detection improvement.",
  },
  {
    code: "A6",
    title: "SIEM and Alert Triage Concepts",
    route: "/high-school/advanced/siem-and-alert-triage-concepts",
    purpose:
      "SIEM concepts, correlation, dashboards, alert context, triage, escalation, analyst workflow, and case notes.",
  },
  {
    code: "A7",
    title: "Incident Response Lifecycle",
    route: "/high-school/advanced/incident-response-lifecycle",
    purpose:
      "Professional incident response planning, containment, communication, recovery, improvement, and tabletop decision-making.",
  },
  {
    code: "A8",
    title: "Digital Forensics Concepts",
    route: "/high-school/advanced/digital-forensics-concepts",
    purpose:
      "Forensic reasoning, timelines, artifacts, preservation, evidence limits, report writing, ethics, and safe fake-case analysis.",
  },
  {
    code: "A9",
    title: "Malware Defense Concepts",
    route: "/high-school/advanced/malware-defense-concepts",
    purpose:
      "Malware behavior from a defensive viewpoint: prevention, detection, containment, recovery, reporting, monitoring, and risk communication.",
  },
  {
    code: "A10",
    title: "Advanced Web Security Defense",
    route: "/high-school/advanced/advanced-web-security-defense",
    purpose:
      "Secure web architecture, authentication, session design, access control, input safety, APIs, headers, secrets, logging, and review.",
  },
  {
    code: "A11",
    title: "Secure Software Architecture",
    route: "/high-school/advanced/secure-software-architecture",
    purpose:
      "Secure software lifecycle, requirements, software threat modeling, secrets, dependencies, logging, code review, testing, and deployment.",
  },
  {
    code: "A12",
    title: "Cloud Security Architecture",
    route: "/high-school/advanced/cloud-security-architecture",
    purpose:
      "Cloud shared responsibility, IAM architecture, storage safety, network boundaries, logging, secrets, recovery, misconfiguration prevention, and governance.",
  },
  {
    code: "A13",
    title: "Identity, Zero Trust, and Access Control",
    route: "/high-school/advanced/identity-zero-trust-and-access-control",
    purpose:
      "Identity as a perimeter, zero trust, federation, SSO, conditional access, RBAC, ABAC, PAM, monitoring, and governance.",
  },
  {
    code: "A14",
    title: "Cryptography and Key Management Concepts",
    route: "/high-school/advanced/cryptography-and-key-management-concepts",
    purpose:
      "Cryptography design, symmetric and asymmetric concepts, hashing, salting, signatures, certificates, PKI, key rotation, and crypto mistakes.",
  },
  {
    code: "A15",
    title: "Risk Management and Compliance",
    route: "/high-school/advanced/risk-management-and-compliance",
    purpose:
      "Risk registers, controls, audits, compliance concepts, exceptions, third-party risk, leadership communication, and risk decisions.",
  },
  {
    code: "A16",
    title: "Privacy Engineering and Data Governance",
    route: "/high-school/advanced/privacy-engineering-and-data-governance",
    purpose:
      "Privacy engineering, data classification, inventory, minimization, consent, retention, privacy risk, governance, and privacy by design.",
  },
  {
    code: "A17",
    title: "Security Automation Concepts",
    route: "/high-school/advanced/security-automation-concepts",
    purpose:
      "Safe automation planning, alert enrichment, ticketing workflows, playbooks, runbooks, safe scripting boundaries, failures, metrics, and governance.",
  },
  {
    code: "A18",
    title: "Advanced Defensive Labs",
    route: "/high-school/advanced/advanced-defensive-labs",
    purpose:
      "Complex fake-data cases across multi-source alerts, architecture reviews, cloud, IAM, incident response, detection tuning, risk, timelines, and executive summaries.",
  },
  {
    code: "A19",
    title: "Cybersecurity Portfolio Projects",
    route: "/high-school/advanced/cybersecurity-portfolio-projects",
    purpose:
      "Portfolio-ready defensive artifacts: diagrams, incident reports, threat models, risk assessments, detection plans, policies, cloud reviews, and presentations.",
  },
  {
    code: "A20",
    title: "Advanced Capstone",
    route: "/high-school/advanced/advanced-capstone",
    purpose:
      "Professional-style defensive capstone, final portfolio submission, executive communication, and Advanced final readiness.",
  },
];

const platformFeatures = [
  "Scored mini quizzes with answers hidden until submission",
  "Fake SOC alerts, fake logs, fake dashboards, fake tickets, and fake evidence panels",
  "Defensive labs that use fake data only",
  "Portfolio prompts that build cyber communication skills",
  "Scenario decisions that teach safe escalation and trusted reporting",
  "Professional-style module tests and track-level exams",
];

function getAccentClasses(accent: string) {
  if (accent === "emerald") {
    return {
      badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
      button: "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
      ring: "border-emerald-400/25",
      text: "text-emerald-300",
    };
  }

  if (accent === "purple") {
    return {
      badge: "border-purple-400/30 bg-purple-400/10 text-purple-300",
      button: "bg-purple-400 text-slate-950 hover:bg-purple-300",
      ring: "border-purple-400/25",
      text: "text-purple-300",
    };
  }

  return {
    badge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    button: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    ring: "border-cyan-400/25",
    text: "text-cyan-300",
  };
}

function ModuleRoadmap({
  title,
  eyebrow,
  description,
  modules,
  trackRoute,
  accent,
}: {
  title: string;
  eyebrow: string;
  description: string;
  modules: { code: string; title: string; route: string; purpose: string }[];
  trackRoute: string;
  accent: string;
}) {
  const colors = getAccentClasses(accent);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
      <div className={`rounded-2xl border ${colors.ring} bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className={`text-sm font-bold uppercase tracking-[0.22em] ${colors.text}`}>
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {description}
            </p>
          </div>
          <Link
            href={trackRoute}
            className="rounded-xl border border-slate-700 px-4 py-3 text-center text-sm font-bold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Open Track Homepage
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.code}
              href={module.route}
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-4">
                <p className={`rounded-full border px-3 py-1 text-xs font-black ${colors.badge}`}>
                  {module.code}
                </p>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Full Module
                </span>
              </div>
              <h3 className="mt-4 text-lg font-black leading-6 text-white group-hover:text-cyan-200">
                {module.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {module.purpose}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                  Lessons ready
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                  Module test ready
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackAssessmentLinks({
  title,
  baseRoute,
  accent,
}: {
  title: string;
  baseRoute: string;
  accent: string;
}) {
  const colors = getAccentClasses(accent);
  const assessments = [
    { name: "Practice Test 1", route: `${baseRoute}/practice-test-1`, detail: "50 questions" },
    { name: "Practice Test 2", route: `${baseRoute}/practice-test-2`, detail: "50 questions" },
    { name: "Final Test", route: `${baseRoute}/final-test`, detail: "125 questions" },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${colors.text}`}>
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        {assessments.map((assessment) => (
          <Link
            key={assessment.name}
            href={assessment.route}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/60 hover:bg-slate-900"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-bold text-white">{assessment.name}</span>
              <span className="text-sm text-slate-400">{assessment.detail}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HighSchoolHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberShield Academy High School
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Complete High School Cybersecurity Program
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The High School section is designed as a complete three-track cyber training path: Beginner, Intermediate, and Advanced. Students move from clear technical foundations to defender workflows and then to professional-style architecture, detection, risk, privacy, and portfolio projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
              <p className="font-semibold text-cyan-200">High School Scope</p>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between gap-8 border-b border-slate-800 pb-3">
                  <span>Total tracks</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-8 border-b border-slate-800 pb-3">
                  <span>Total modules</span>
                  <span className="font-bold text-white">52</span>
                </div>
                <div className="flex items-center justify-between gap-8 border-b border-slate-800 pb-3">
                  <span>Lesson pages</span>
                  <span className="font-bold text-white">441</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span>Track final exams</span>
                  <span className="font-bold text-white">3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/high-school/beginner"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Beginner Track
            </Link>
            <Link
              href="/high-school/intermediate"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              Open Intermediate Track
            </Link>
            <Link
              href="/high-school/advanced"
              className="rounded-xl bg-purple-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-purple-300"
            >
              Open Advanced Track
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Full pathway
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              High School Tracks
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            This hub is built as the final completed High School landing page, so every track, module, practice test, and final test already has a permanent link.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => {
            const colors = getAccentClasses(track.accent);

            return (
              <article
                key={track.name}
                className={`flex h-full flex-col rounded-2xl border ${colors.ring} bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-sm font-bold ${colors.text}`}>{track.badge}</p>
                    <h3 className="mt-3 text-2xl font-black text-white">
                      {track.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                    Complete Path
                  </span>
                </div>

                <div className={`mt-5 rounded-2xl border p-4 ${colors.badge}`}>
                  <p className="text-sm font-semibold">Main question</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    {track.question}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="font-semibold text-white">Modules:</span> {track.modules}
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="font-semibold text-white">Lessons:</span> {track.lessons}
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <span className="font-semibold text-white">Assessments:</span> {track.tests}
                  </div>
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-slate-400">
                  {track.focus}
                </p>

                <Link
                  href={track.route}
                  className={`mt-6 rounded-xl px-4 py-3 text-center text-sm font-bold transition ${colors.button}`}
                >
                  Open Track
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety standard
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Defensive and school-safe only
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              High School lessons use fake examples, fake dashboards, fake log entries, fake messages, fake tickets, and fake incidents. Students practice recognition, documentation, safe decision-making, and trusted reporting without touching real targets or harmful techniques.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              No malware creation, credential theft, bypassing, real suspicious links, private screenshots, or instructions to test real systems.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Platform features
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Built like a training platform
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {platformFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"
                >
                  <span className="mr-2 text-cyan-300">◆</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModuleRoadmap
        title="Beginner Track Module Roadmap"
        eyebrow="High School Beginner"
        description="Students learn how core cybersecurity concepts work through 15 complete modules, 105 lessons, module tests, practice tests, and a final exam."
        modules={beginnerModules}
        trackRoute="/high-school/beginner"
        accent="cyan"
      />

      <ModuleRoadmap
        title="Intermediate Track Module Roadmap"
        eyebrow="High School Intermediate"
        description="Students move into defender thinking with logs, operating systems, IAM, email defense, cloud, incident response, SOC workflows, and defensive reports."
        modules={intermediateModules}
        trackRoute="/high-school/intermediate"
        accent="emerald"
      />

      <ModuleRoadmap
        title="Advanced Track Module Roadmap"
        eyebrow="High School Advanced"
        description="Students practice professional-level defensive reasoning across architecture, threat modeling, detection, SIEM, incident response, cloud, identity, risk, privacy, automation, and capstone work."
        modules={advancedModules}
        trackRoute="/high-school/advanced"
        accent="purple"
      />

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Track-level assessments
            </p>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Practice Tests and Final Exams
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Every High School track ends with two 50-question practice tests and one 125-question final test. These are planned as scored assessments where answers and explanations stay hidden until submission.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <TrackAssessmentLinks
              title="Beginner Assessments"
              baseRoute="/high-school/beginner"
              accent="cyan"
            />
            <TrackAssessmentLinks
              title="Intermediate Assessments"
              baseRoute="/high-school/intermediate"
              accent="emerald"
            />
            <TrackAssessmentLinks
              title="Advanced Assessments"
              baseRoute="/high-school/advanced"
              accent="purple"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}