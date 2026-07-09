import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  {
    code: "B1",
    title: "Cybersecurity Foundations",
    route: "/high-school/beginner/cybersecurity-foundations",
    purpose:
      "Introduce what cybersecurity protects, how defenders think, and how risk, controls, and defense-in-depth fit together.",
    skills: ["CIA triad", "risk thinking", "security controls", "defender mindset"],
    lessons: [
      ["B1.1", "What Cybersecurity Protects", "what-cybersecurity-protects"],
      ["B1.2", "Confidentiality, Integrity, and Availability", "confidentiality-integrity-and-availability"],
      ["B1.3", "Threats, Vulnerabilities, and Risk", "threats-vulnerabilities-and-risk"],
      ["B1.4", "How Cyber Defenders Think", "how-cyber-defenders-think"],
      ["B1.5", "Security Controls and Layers", "security-controls-and-layers"],
      ["B1.6", "Safe Case Study: What Went Wrong?", "safe-case-study-what-went-wrong"],
      ["B1.7", "Foundations Review Lab", "foundations-review-lab"],
    ],
  },
  {
    code: "B2",
    title: "Ethics and Responsible Learning",
    route: "/high-school/beginner/ethics-and-responsible-learning",
    purpose:
      "Set legal, ethical, and school-safe boundaries before students touch technical cybersecurity concepts.",
    skills: ["authorization", "safe labs", "school rules", "ethical reporting"],
    lessons: [
      ["B2.1", "Why Permission Matters", "why-permission-matters"],
      ["B2.2", "Legal vs Illegal Cyber Activity", "legal-vs-illegal-cyber-activity"],
      ["B2.3", "School Rules and Acceptable Use", "school-rules-and-acceptable-use"],
      ["B2.4", "Safe Labs vs Real Systems", "safe-labs-vs-real-systems"],
      ["B2.5", "Responsible Reporting Concepts", "responsible-reporting-concepts"],
      ["B2.6", "Professional Ethics and Digital Trust", "professional-ethics-and-digital-trust"],
      ["B2.7", "Ethics Decision Lab", "ethics-decision-lab"],
    ],
  },
  {
    code: "B3",
    title: "Computers, Devices, and Operating Systems",
    route: "/high-school/beginner/computers-devices-and-operating-systems",
    purpose:
      "Explain how devices and operating systems work from a defensive beginner point of view.",
    skills: ["device parts", "OS accounts", "file safety", "permissions"],
    lessons: [
      ["B3.1", "Device Components and What They Do", "device-components-and-what-they-do"],
      ["B3.2", "Operating Systems and User Accounts", "operating-systems-and-user-accounts"],
      ["B3.3", "Files, Folders, and Extensions", "files-folders-and-extensions"],
      ["B3.4", "Apps, Processes, and Permissions", "apps-processes-and-permissions"],
      ["B3.5", "Updates and System Health", "updates-and-system-health"],
      ["B3.6", "Shared Devices and Safe Use", "shared-devices-and-safe-use"],
      ["B3.7", "Device Basics Review Lab", "device-basics-review-lab"],
    ],
  },
  {
    code: "B4",
    title: "Networking Basics",
    route: "/high-school/beginner/networking-basics",
    purpose:
      "Explain how devices connect and how networks move information safely at a beginner high school level.",
    skills: ["IP basics", "DNS", "routers", "network diagrams"],
    lessons: [
      ["B4.1", "What a Network Is", "what-a-network-is"],
      ["B4.2", "IP Addresses and Network Identity", "ip-addresses-and-network-identity"],
      ["B4.3", "Routers, Switches, and Wi-Fi", "routers-switches-and-wi-fi"],
      ["B4.4", "DNS and Website Names", "dns-and-website-names"],
      ["B4.5", "Packets and Network Traffic Concepts", "packets-and-network-traffic-concepts"],
      ["B4.6", "Home, School, and Public Network Safety", "home-school-and-public-network-safety"],
      ["B4.7", "Network Diagram Review Lab", "network-diagram-review-lab"],
    ],
  },
  {
    code: "B5",
    title: "Web Basics and Browser Safety",
    route: "/high-school/beginner/web-basics-and-browser-safety",
    purpose:
      "Teach how browsers, websites, web addresses, forms, cookies, and HTTPS work at a foundation level.",
    skills: ["URLs", "HTTPS", "cookies", "safe research"],
    lessons: [
      ["B5.1", "How Websites and Browsers Work", "how-websites-and-browsers-work"],
      ["B5.2", "URLs, Domains, and Web Address Clues", "urls-domains-and-web-address-clues"],
      ["B5.3", "HTTPS, Certificates, and Trust Signals", "https-certificates-and-trust-signals"],
      ["B5.4", "Forms, Cookies, and Sessions", "forms-cookies-and-sessions"],
      ["B5.5", "Downloads, Redirects, and Browser Warnings", "downloads-redirects-and-browser-warnings"],
      ["B5.6", "Safe Web Research Habits", "safe-web-research-habits"],
      ["B5.7", "Web Safety Analysis Lab", "web-safety-analysis-lab"],
    ],
  },
  {
    code: "B6",
    title: "Digital Identity and Privacy",
    route: "/high-school/beginner/digital-identity-and-privacy",
    purpose:
      "Move beyond Junior privacy into identity, metadata, data collection, settings, and online professionalism.",
    skills: ["metadata", "privacy settings", "data minimization", "digital footprint"],
    lessons: [
      ["B6.1", "Digital Identity in High School", "digital-identity-in-high-school"],
      ["B6.2", "Personal Data, Private Data, and Metadata", "personal-data-private-data-and-metadata"],
      ["B6.3", "How Apps and Websites Collect Data", "how-apps-and-websites-collect-data"],
      ["B6.4", "Privacy Settings and Audience Control", "privacy-settings-and-audience-control"],
      ["B6.5", "Digital Footprints and Future Readiness", "digital-footprints-and-future-readiness"],
      ["B6.6", "Data Minimization and Safer Sharing", "data-minimization-and-safer-sharing"],
      ["B6.7", "Privacy Review Lab", "privacy-review-lab"],
    ],
  },
  {
    code: "B7",
    title: "Passwords, Authentication, and Account Security",
    route: "/high-school/beginner/passwords-authentication-and-account-security",
    purpose:
      "Teach how authentication works, why accounts are valuable, and how students can protect accounts responsibly.",
    skills: ["passphrases", "password managers", "MFA", "recovery alerts"],
    lessons: [
      ["B7.1", "Why Authentication Exists", "why-authentication-exists"],
      ["B7.2", "Passphrases and Password Strength", "passphrases-and-password-strength"],
      ["B7.3", "Password Managers and Reuse Risk", "password-managers-and-reuse-risk"],
      ["B7.4", "MFA Types and Login Verification", "mfa-types-and-login-verification"],
      ["B7.5", "Account Recovery and Login Alerts", "account-recovery-and-login-alerts"],
      ["B7.6", "Account Security Checklist", "account-security-checklist"],
      ["B7.7", "Authentication Scenario Lab", "authentication-scenario-lab"],
    ],
  },
  {
    code: "B8",
    title: "Common Cyber Threats",
    route: "/high-school/beginner/common-cyber-threats",
    purpose:
      "Introduce common threat categories without teaching harmful steps, focusing on recognition and defense.",
    skills: ["threat categories", "warning signs", "safe reporting", "basic defenses"],
    lessons: [
      ["B8.1", "What Cyber Threats Are", "what-cyber-threats-are"],
      ["B8.2", "Malware and Ransomware Concepts", "malware-and-ransomware-concepts"],
      ["B8.3", "Phishing and Social Engineering Overview", "phishing-and-social-engineering-overview"],
      ["B8.4", "Credential Theft and Account Takeover Concepts", "credential-theft-and-account-takeover-concepts"],
      ["B8.5", "Unsafe Downloads and Malicious Attachments", "unsafe-downloads-and-malicious-attachments"],
      ["B8.6", "Defense Basics: Updates, Backups, and Caution", "defense-basics-updates-backups-and-caution"],
      ["B8.7", "Threat Recognition Lab", "threat-recognition-lab"],
    ],
  },
  {
    code: "B9",
    title: "Phishing and Social Engineering Defense",
    route: "/high-school/beginner/phishing-and-social-engineering-defense",
    purpose:
      "Teach how manipulation works and how to inspect suspicious messages safely without engaging with them.",
    skills: ["message clues", "impersonation", "safe judgment", "reporting workflows"],
    lessons: [
      ["B9.1", "How Social Engineering Manipulates People", "how-social-engineering-manipulates-people"],
      ["B9.2", "Phishing Email Warning Signs", "phishing-email-warning-signs"],
      ["B9.3", "Smishing, Vishing, and Social Media Scams", "smishing-vishing-and-social-media-scams"],
      ["B9.4", "Impersonation and Fake Support Messages", "impersonation-and-fake-support-messages"],
      ["B9.5", "Safe Link and Attachment Judgment", "safe-link-and-attachment-judgment"],
      ["B9.6", "Reporting Workflows and Trusted Help", "reporting-workflows-and-trusted-help"],
      ["B9.7", "Phishing Defense Lab", "phishing-defense-lab"],
    ],
  },
  {
    code: "B10",
    title: "Device and Operating System Safety",
    route: "/high-school/beginner/device-and-operating-system-safety",
    purpose:
      "Teach practical defensive safety settings and habits for personal, school, and shared devices.",
    skills: ["device locks", "patch basics", "app permissions", "lost-device response"],
    lessons: [
      ["B10.1", "Device Locks and Screen Privacy", "device-locks-and-screen-privacy"],
      ["B10.2", "Operating System Updates and Patch Basics", "operating-system-updates-and-patch-basics"],
      ["B10.3", "Antivirus and Built-In Protection Concepts", "antivirus-and-built-in-protection-concepts"],
      ["B10.4", "App Permissions and Safe Installation", "app-permissions-and-safe-installation"],
      ["B10.5", "Removable Media and Unknown Devices", "removable-media-and-unknown-devices"],
      ["B10.6", "Lost Device Response and Backups", "lost-device-response-and-backups"],
      ["B10.7", "Device Hardening Checklist Lab", "device-hardening-checklist-lab"],
    ],
  },
  {
    code: "B11",
    title: "Data Protection and Backups",
    route: "/high-school/beginner/data-protection-and-backups",
    purpose:
      "Explain why data matters and how backups, organization, cloud storage, and recovery protect people and organizations.",
    skills: ["data classification", "cloud safety", "backup types", "recovery planning"],
    lessons: [
      ["B11.1", "Why Data Needs Protection", "why-data-needs-protection"],
      ["B11.2", "Confidentiality, Integrity, and Availability in Data", "confidentiality-integrity-and-availability-in-data"],
      ["B11.3", "File Organization and Data Classification Basics", "file-organization-and-data-classification-basics"],
      ["B11.4", "Cloud Storage Safety", "cloud-storage-safety"],
      ["B11.5", "Backup Types and Recovery Goals", "backup-types-and-recovery-goals"],
      ["B11.6", "Human Error and Data Loss Scenarios", "human-error-and-data-loss-scenarios"],
      ["B11.7", "Backup Planning Lab", "backup-planning-lab"],
    ],
  },
  {
    code: "B12",
    title: "Intro to Cryptography Concepts",
    route: "/high-school/beginner/intro-to-cryptography-concepts",
    purpose:
      "Introduce encryption, hashing, keys, certificates, and secure communication conceptually and safely.",
    skills: ["encryption", "hashing", "keys", "certificates"],
    lessons: [
      ["B12.1", "Why Cryptography Exists", "why-cryptography-exists"],
      ["B12.2", "Encryption vs Encoding vs Hashing", "encryption-vs-encoding-vs-hashing"],
      ["B12.3", "Keys and Secret Protection", "keys-and-secret-protection"],
      ["B12.4", "Hashing and Integrity Checks", "hashing-and-integrity-checks"],
      ["B12.5", "Certificates and HTTPS Concepts", "certificates-and-https-concepts"],
      ["B12.6", "Common Crypto Misunderstandings", "common-crypto-misunderstandings"],
      ["B12.7", "Crypto Concepts Review Lab", "crypto-concepts-review-lab"],
    ],
  },
  {
    code: "B13",
    title: "Cybersecurity Careers and Certifications",
    route: "/high-school/beginner/cybersecurity-careers-and-certifications",
    purpose:
      "Help students understand career paths, learning routes, certifications, portfolios, and professional habits.",
    skills: ["career families", "SOC roles", "certifications", "portfolio planning"],
    lessons: [
      ["B13.1", "Cybersecurity Career Families", "cybersecurity-career-families"],
      ["B13.2", "What SOC Analysts Do", "what-soc-analysts-do"],
      ["B13.3", "Security Engineering and Architecture Roles", "security-engineering-and-architecture-roles"],
      ["B13.4", "Governance, Risk, and Compliance Roles", "governance-risk-and-compliance-roles"],
      ["B13.5", "Certifications and Learning Paths", "certifications-and-learning-paths"],
      ["B13.6", "Building a Beginner Cyber Portfolio", "building-a-beginner-cyber-portfolio"],
      ["B13.7", "Career Planning Lab", "career-planning-lab"],
    ],
  },
  {
    code: "B14",
    title: "Beginner Defensive Practice Labs",
    route: "/high-school/beginner/beginner-defensive-practice-labs",
    purpose:
      "Give students safe hands-on practice with fake evidence, fake logs, diagrams, and defensive decisions.",
    skills: ["fake alert review", "message analysis", "network diagrams", "incident summaries"],
    lessons: [
      ["B14.1", "Reading a Fake Security Alert", "reading-a-fake-security-alert"],
      ["B14.2", "Analyzing a Fake Phishing Message", "analyzing-a-fake-phishing-message"],
      ["B14.3", "Building a Basic Network Diagram", "building-a-basic-network-diagram"],
      ["B14.4", "Creating an Account Security Checklist", "creating-an-account-security-checklist"],
      ["B14.5", "Planning a Backup Strategy", "planning-a-backup-strategy"],
      ["B14.6", "Writing a Simple Incident Summary", "writing-a-simple-incident-summary"],
      ["B14.7", "Beginner Lab Challenge", "beginner-lab-challenge"],
    ],
  },
  {
    code: "B15",
    title: "Beginner Capstone Review",
    route: "/high-school/beginner/beginner-capstone-review",
    purpose:
      "Review all Beginner concepts and prepare students for Beginner practice tests and the final exam.",
    skills: ["full-track review", "defensive reasoning", "portfolio reflection", "final readiness"],
    lessons: [
      ["B15.1", "Cybersecurity Foundations Review", "cybersecurity-foundations-review"],
      ["B15.2", "Ethics and Safe Learning Review", "ethics-and-safe-learning-review"],
      ["B15.3", "Networking and Web Concepts Review", "networking-and-web-concepts-review"],
      ["B15.4", "Accounts, Privacy, and Data Review", "accounts-privacy-and-data-review"],
      ["B15.5", "Threats and Defenses Review", "threats-and-defenses-review"],
      ["B15.6", "Beginner Portfolio Reflection", "beginner-portfolio-reflection"],
      ["B15.7", "Beginner Final Readiness Lab", "beginner-final-readiness-lab"],
    ],
  },
];

const assessments = [
  {
    title: "Beginner Practice Test 1",
    route: "/high-school/beginner/practice-test-1",
    detail: "50 questions across foundations, ethics, networking, web safety, privacy, authentication, threats, devices, data, crypto, careers, and labs.",
  },
  {
    title: "Beginner Practice Test 2",
    route: "/high-school/beginner/practice-test-2",
    detail: "50 mixed scenario questions using fake evidence and applied defensive decision-making across the full track.",
  },
  {
    title: "Beginner Final Test",
    route: "/high-school/beginner/final-test",
    detail: "125 questions covering all Beginner modules, safe technical vocabulary, and scenario-based cyber safety decisions.",
  },
];

export default function HighSchoolBeginnerPage() {
  const totalLessons = modules.reduce((count, module) => count + module.lessons.length, 0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_32%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Back to High School Hub
            </Link>
            <Link
              href="/high-school/intermediate"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Intermediate Track →
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                High School Beginner · Complete Track Map
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                Beginner Cybersecurity Foundations
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This track answers the question: <span className="font-semibold text-cyan-200">How do cybersecurity concepts work?</span> Students build a serious but beginner-friendly technical foundation using defensive examples, fake evidence, scored checks, and safe labs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/high-school/beginner/cybersecurity-foundations"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start Module B1
                </Link>
                <a
                  href="#modules"
                  className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View All Modules
                </a>
                <a
                  href="#assessments"
                  className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-bold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Track Tests
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Track Snapshot</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <Stat label="Modules" value="15" />
                  <Stat label="Lesson Pages" value={`${totalLessons}`} />
                  <Stat label="Module Tests" value="15" />
                  <Stat label="Track Tests" value="3" />
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
                <p className="font-bold text-emerald-200">Safe learning promise</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Every page uses fake examples only and focuses on ethical, defensive cybersecurity. Students are reminded to ask trusted adults, teachers, guardians, counselors, or school technology staff when something feels unsafe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <InfoCard title="Main Level" value="Beginner" detail="More technical than Junior, but still clearly explained." />
          <InfoCard title="Main Question" value="How it works" detail="Students learn concepts, vocabulary, and safe reasoning." />
          <InfoCard title="Lab Style" value="Fake evidence" detail="Fake alerts, fake logs, diagrams, decisions, and checklists." />
          <InfoCard title="Assessments" value="Scored tests" detail="Answers stay hidden until students submit." />
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Full Beginner Module Map</p>
            <h2 className="mt-3 text-3xl font-black text-white">All 15 modules are linked here</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              This page is built as the permanent completed Beginner homepage, so every module, lesson route, module test route, and track-level test route is already listed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 text-sm text-slate-300">
            <span className="font-bold text-cyan-200">105</span> lessons · <span className="font-bold text-cyan-200">15</span> module tests · <span className="font-bold text-cyan-200">3</span> track tests
          </div>
        </div>

        <div className="grid gap-6">
          {modules.map((module) => (
            <article key={module.code} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-black text-cyan-200">{module.code}</span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Complete module path</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-white">{module.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{module.purpose}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {module.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link href={module.route} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
                    Module Home
                  </Link>
                  <Link href={`${module.route}/module-test`} className="rounded-xl border border-yellow-300/50 bg-yellow-300/10 px-4 py-2 text-sm font-black text-yellow-100 transition hover:border-yellow-200">
                    Module Test
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {module.lessons.map(([number, title, slug]) => (
                  <Link
                    key={`${module.code}-${number}`}
                    href={`${module.route}/${slug}`}
                    className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-400/60 hover:bg-slate-950"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{number}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-100 group-hover:text-cyan-100">{title}</p>
                  </Link>
                ))}
                <Link
                  href={`${module.route}/module-test`}
                  className="group rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-4 transition hover:border-yellow-200 hover:bg-yellow-300/15"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Assessment</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-yellow-50 group-hover:text-white">25-Question Module Test</p>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="assessments" className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Track-Level Assessments</p>
          <h2 className="mt-3 text-3xl font-black text-white">Beginner practice tests and final exam</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            These test routes are included now so the track homepage does not need to be rebuilt later. The tests should be scored, hide answers before submission, and reveal explanations only after submission.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {assessments.map((assessment) => (
              <Link
                key={assessment.title}
                href={assessment.route}
                className="rounded-3xl border border-yellow-300/30 bg-slate-950/70 p-6 transition hover:border-yellow-200 hover:bg-slate-950"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Assessment</p>
                <h3 className="mt-3 text-xl font-black text-white">{assessment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{assessment.detail}</p>
                <p className="mt-5 text-sm font-black text-cyan-200">Open test →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Build Note</p>
              <h2 className="mt-3 text-2xl font-black text-white">Next page to build</h2>
              <p className="mt-3 leading-7 text-slate-300">
                After this track homepage works, the next build step is the reusable High School component setup, then the B1 module homepage.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/high-school/beginner/cybersecurity-foundations" className="rounded-2xl bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300">
                Go to B1 Homepage
              </Link>
              <Link href="/high-school" className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-center font-black text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200">
                Back to High School Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}

function InfoCard({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">{title}</p>
      <p className="mt-3 text-2xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
    </div>
  );
}