import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lesson = [number: string, title: string, slug: string];

type IntermediateModule = {
  code: string;
  title: string;
  route: string;
  purpose: string;
  skills: string[];
  phase: string;
  status: "In Progress" | "Planned";
  lessons: Lesson[];
};

const modules: IntermediateModule[] = [
  {
    "code": "I1",
    "title": "Networking for Defenders",
    "route": "/high-school/intermediate/networking-for-defenders",
    "purpose": "Teach networking more deeply from the viewpoint of defenders who monitor, segment, and protect systems.",
    "skills": [
      "network models",
      "subnet boundaries",
      "firewall rules",
      "segmentation"
    ],
    "phase": "Network and Systems",
    "status": "In Progress",
    "lessons": [
      [
        "I1.1",
        "Network Models and Defensive Thinking",
        "network-models-and-defensive-thinking"
      ],
      [
        "I1.2",
        "IP Addressing, Subnets, and Network Boundaries",
        "ip-addressing-subnets-and-network-boundaries"
      ],
      [
        "I1.3",
        "Ports, Protocols, and Services",
        "ports-protocols-and-services"
      ],
      [
        "I1.4",
        "DNS, DHCP, and Common Network Services",
        "dns-dhcp-and-common-network-services"
      ],
      [
        "I1.5",
        "Firewalls and Network Access Rules",
        "firewalls-and-network-access-rules"
      ],
      [
        "I1.6",
        "Network Segmentation Concepts",
        "network-segmentation-concepts"
      ],
      [
        "I1.7",
        "Reading Safe Network Diagrams",
        "reading-safe-network-diagrams"
      ],
      [
        "I1.8",
        "Network Defense Analysis Lab",
        "network-defense-analysis-lab"
      ]
    ]
  },
  {
    "code": "I2",
    "title": "Linux Basics for Security",
    "route": "/high-school/intermediate/linux-basics-for-security",
    "purpose": "Give students safe Linux foundations for understanding systems, permissions, logs, and defensive administration.",
    "skills": [
      "Linux structure",
      "permissions",
      "processes",
      "system logs"
    ],
    "phase": "Network and Systems",
    "status": "Planned",
    "lessons": [
      [
        "I2.1",
        "Linux Systems and Security Roles",
        "linux-systems-and-security-roles"
      ],
      [
        "I2.2",
        "Files, Directories, and Paths",
        "files-directories-and-paths"
      ],
      [
        "I2.3",
        "Users, Groups, and Permissions",
        "users-groups-and-permissions"
      ],
      [
        "I2.4",
        "Processes and Services",
        "processes-and-services"
      ],
      [
        "I2.5",
        "Safe Command-Line Navigation",
        "safe-command-line-navigation"
      ],
      [
        "I2.6",
        "Linux Logs and System Clues",
        "linux-logs-and-system-clues"
      ],
      [
        "I2.7",
        "Package Updates and System Care",
        "package-updates-and-system-care"
      ],
      [
        "I2.8",
        "Linux Security Basics Lab",
        "linux-security-basics-lab"
      ]
    ]
  },
  {
    "code": "I3",
    "title": "Windows Security Basics",
    "route": "/high-school/intermediate/windows-security-basics",
    "purpose": "Teach Windows accounts, settings, logs, built-in protections, and safe defensive administration concepts.",
    "skills": [
      "Windows accounts",
      "file permissions",
      "event logs",
      "security settings"
    ],
    "phase": "Network and Systems",
    "status": "Planned",
    "lessons": [
      [
        "I3.1",
        "Windows Accounts and Profiles",
        "windows-accounts-and-profiles"
      ],
      [
        "I3.2",
        "File Permissions and Shared Folders",
        "file-permissions-and-shared-folders"
      ],
      [
        "I3.3",
        "Windows Updates and Security Settings",
        "windows-updates-and-security-settings"
      ],
      [
        "I3.4",
        "Microsoft Defender Concepts",
        "microsoft-defender-concepts"
      ],
      [
        "I3.5",
        "Event Viewer and Windows Logs",
        "event-viewer-and-windows-logs"
      ],
      [
        "I3.6",
        "Startup Apps and Services",
        "startup-apps-and-services"
      ],
      [
        "I3.7",
        "Local Security Habits",
        "local-security-habits"
      ],
      [
        "I3.8",
        "Windows Security Review Lab",
        "windows-security-review-lab"
      ]
    ]
  },
  {
    "code": "I4",
    "title": "Logs and Event Monitoring",
    "route": "/high-school/intermediate/logs-and-event-monitoring",
    "purpose": "Teach what logs are, how defenders read events, and how to connect evidence without jumping to conclusions.",
    "skills": [
      "log context",
      "event IDs",
      "pattern review",
      "timelines"
    ],
    "phase": "Identity and Operations",
    "status": "Planned",
    "lessons": [
      [
        "I4.1",
        "What Logs Are and Why They Matter",
        "what-logs-are-and-why-they-matter"
      ],
      [
        "I4.2",
        "Timestamps, Event IDs, and Context",
        "timestamps-event-ids-and-context"
      ],
      [
        "I4.3",
        "Authentication Logs",
        "authentication-logs"
      ],
      [
        "I4.4",
        "System and Application Logs",
        "system-and-application-logs"
      ],
      [
        "I4.5",
        "Network and Web Logs",
        "network-and-web-logs"
      ],
      [
        "I4.6",
        "Normal vs Suspicious Patterns",
        "normal-vs-suspicious-patterns"
      ],
      [
        "I4.7",
        "Building a Simple Event Timeline",
        "building-a-simple-event-timeline"
      ],
      [
        "I4.8",
        "Log Review Lab",
        "log-review-lab"
      ]
    ]
  },
  {
    "code": "I5",
    "title": "Defensive Security Tools",
    "route": "/high-school/intermediate/defensive-security-tools",
    "purpose": "Introduce major defensive tool categories conceptually, focusing on what defenders use them for and how to interpret results safely.",
    "skills": [
      "endpoint tools",
      "network tools",
      "scanner concepts",
      "tool limitations"
    ],
    "phase": "Identity and Operations",
    "status": "Planned",
    "lessons": [
      [
        "I5.1",
        "Security Tool Categories",
        "security-tool-categories"
      ],
      [
        "I5.2",
        "Antivirus, EDR, and Endpoint Protection Concepts",
        "antivirus-edr-and-endpoint-protection-concepts"
      ],
      [
        "I5.3",
        "Firewalls and Network Monitoring Tools",
        "firewalls-and-network-monitoring-tools"
      ],
      [
        "I5.4",
        "Vulnerability Scanner Concepts",
        "vulnerability-scanner-concepts"
      ],
      [
        "I5.5",
        "Password and MFA Management Tools",
        "password-and-mfa-management-tools"
      ],
      [
        "I5.6",
        "Ticketing and Documentation Tools",
        "ticketing-and-documentation-tools"
      ],
      [
        "I5.7",
        "Limits of Security Tools",
        "limits-of-security-tools"
      ],
      [
        "I5.8",
        "Tool Output Analysis Lab",
        "tool-output-analysis-lab"
      ]
    ]
  },
  {
    "code": "I6",
    "title": "Identity and Access Management",
    "route": "/high-school/intermediate/identity-and-access-management",
    "purpose": "Teach how organizations manage users, roles, permissions, authentication, and least privilege.",
    "skills": [
      "users and roles",
      "least privilege",
      "access reviews",
      "privileged accounts"
    ],
    "phase": "Identity and Operations",
    "status": "Planned",
    "lessons": [
      [
        "I6.1",
        "IAM Concepts and Why Identity Matters",
        "iam-concepts-and-why-identity-matters"
      ],
      [
        "I6.2",
        "Users, Groups, Roles, and Permissions",
        "users-groups-roles-and-permissions"
      ],
      [
        "I6.3",
        "Least Privilege and Need-to-Know Access",
        "least-privilege-and-need-to-know-access"
      ],
      [
        "I6.4",
        "MFA and Access Policies",
        "mfa-and-access-policies"
      ],
      [
        "I6.5",
        "Account Lifecycle and Access Reviews",
        "account-lifecycle-and-access-reviews"
      ],
      [
        "I6.6",
        "Privileged Accounts and Admin Risk",
        "privileged-accounts-and-admin-risk"
      ],
      [
        "I6.7",
        "Account Hardening Concepts",
        "account-hardening-concepts"
      ],
      [
        "I6.8",
        "IAM Scenario Lab",
        "iam-scenario-lab"
      ]
    ]
  },
  {
    "code": "I7",
    "title": "Email Security and Phishing Defense",
    "route": "/high-school/intermediate/email-security-and-phishing-defense",
    "purpose": "Go deeper than Beginner phishing by introducing email security workflows, indicators, filtering, and reporting pipelines.",
    "skills": [
      "email defense",
      "message context",
      "quarantine",
      "escalation"
    ],
    "phase": "Identity and Operations",
    "status": "Planned",
    "lessons": [
      [
        "I7.1",
        "How Email Systems Are Defended",
        "how-email-systems-are-defended"
      ],
      [
        "I7.2",
        "Phishing Indicators and Message Context",
        "phishing-indicators-and-message-context"
      ],
      [
        "I7.3",
        "Email Header Concepts Without Deep Forensics",
        "email-header-concepts-without-deep-forensics"
      ],
      [
        "I7.4",
        "Attachments and Link Risk Decisions",
        "attachments-and-link-risk-decisions"
      ],
      [
        "I7.5",
        "Filtering and Quarantine Concepts",
        "filtering-and-quarantine-concepts"
      ],
      [
        "I7.6",
        "Reporting Pipelines and Escalation",
        "reporting-pipelines-and-escalation"
      ],
      [
        "I7.7",
        "Security Awareness Design",
        "security-awareness-design"
      ],
      [
        "I7.8",
        "Email Defense Lab",
        "email-defense-lab"
      ]
    ]
  },
  {
    "code": "I8",
    "title": "Web Security Defense",
    "route": "/high-school/intermediate/web-security-defense",
    "purpose": "Introduce web security from the defender and builder viewpoint without teaching exploitation steps.",
    "skills": [
      "input safety",
      "sessions",
      "access control",
      "secure configuration"
    ],
    "phase": "Detection and Defense",
    "status": "Planned",
    "lessons": [
      [
        "I8.1",
        "Web Application Risk Concepts",
        "web-application-risk-concepts"
      ],
      [
        "I8.2",
        "Input Handling and Validation",
        "input-handling-and-validation"
      ],
      [
        "I8.3",
        "Authentication and Session Concepts",
        "authentication-and-session-concepts"
      ],
      [
        "I8.4",
        "Cookies, Tokens, and Secure Settings",
        "cookies-tokens-and-secure-settings"
      ],
      [
        "I8.5",
        "Access Control Mistakes Conceptually",
        "access-control-mistakes-conceptually"
      ],
      [
        "I8.6",
        "Error Messages and Information Exposure",
        "error-messages-and-information-exposure"
      ],
      [
        "I8.7",
        "Secure Configuration Habits",
        "secure-configuration-habits"
      ],
      [
        "I8.8",
        "Web Defense Review Lab",
        "web-defense-review-lab"
      ]
    ]
  },
  {
    "code": "I9",
    "title": "Secure Coding Basics",
    "route": "/high-school/intermediate/secure-coding-basics",
    "purpose": "Teach defensive coding habits that reduce mistakes and protect users, data, and systems.",
    "skills": [
      "input validation",
      "authorization checks",
      "secret safety",
      "code review"
    ],
    "phase": "Detection and Defense",
    "status": "Planned",
    "lessons": [
      [
        "I9.1",
        "Why Secure Coding Matters",
        "why-secure-coding-matters"
      ],
      [
        "I9.2",
        "Input Validation and Output Handling",
        "input-validation-and-output-handling"
      ],
      [
        "I9.3",
        "Authentication and Authorization Checks",
        "authentication-and-authorization-checks"
      ],
      [
        "I9.4",
        "Secrets Safety and Environment Variables",
        "secrets-safety-and-environment-variables"
      ],
      [
        "I9.5",
        "Error Handling and Safe Logging",
        "error-handling-and-safe-logging"
      ],
      [
        "I9.6",
        "Dependency and Update Awareness",
        "dependency-and-update-awareness"
      ],
      [
        "I9.7",
        "Code Review Habits",
        "code-review-habits"
      ],
      [
        "I9.8",
        "Secure Coding Scenario Lab",
        "secure-coding-scenario-lab"
      ]
    ]
  },
  {
    "code": "I10",
    "title": "Vulnerability Management Concepts",
    "route": "/high-school/intermediate/vulnerability-management-concepts",
    "purpose": "Teach how defenders track weaknesses, prioritize fixes, and reduce risk safely.",
    "skills": [
      "asset inventory",
      "risk ranking",
      "patch workflow",
      "remediation planning"
    ],
    "phase": "Detection and Defense",
    "status": "Planned",
    "lessons": [
      [
        "I10.1",
        "What Vulnerabilities Are",
        "what-vulnerabilities-are"
      ],
      [
        "I10.2",
        "Assets and Inventory Basics",
        "assets-and-inventory-basics"
      ],
      [
        "I10.3",
        "Severity, Likelihood, and Impact",
        "severity-likelihood-and-impact"
      ],
      [
        "I10.4",
        "Patch Management Workflows",
        "patch-management-workflows"
      ],
      [
        "I10.5",
        "Risk-Based Prioritization",
        "risk-based-prioritization"
      ],
      [
        "I10.6",
        "Remediation vs Mitigation",
        "remediation-vs-mitigation"
      ],
      [
        "I10.7",
        "Communicating Fix Plans",
        "communicating-fix-plans"
      ],
      [
        "I10.8",
        "Vulnerability Management Lab",
        "vulnerability-management-lab"
      ]
    ]
  },
  {
    "code": "I11",
    "title": "Incident Response Basics",
    "route": "/high-school/intermediate/incident-response-basics",
    "purpose": "Teach the defensive incident response lifecycle and how teams respond calmly and safely.",
    "skills": [
      "response phases",
      "containment",
      "recovery",
      "incident communication"
    ],
    "phase": "Applications and Response",
    "status": "Planned",
    "lessons": [
      [
        "I11.1",
        "What Counts as an Incident",
        "what-counts-as-an-incident"
      ],
      [
        "I11.2",
        "Preparation and Response Plans",
        "preparation-and-response-plans"
      ],
      [
        "I11.3",
        "Detection and Analysis",
        "detection-and-analysis"
      ],
      [
        "I11.4",
        "Containment Concepts",
        "containment-concepts"
      ],
      [
        "I11.5",
        "Eradication and Recovery Concepts",
        "eradication-and-recovery-concepts"
      ],
      [
        "I11.6",
        "Communication During Incidents",
        "communication-during-incidents"
      ],
      [
        "I11.7",
        "Lessons Learned and Improvement",
        "lessons-learned-and-improvement"
      ],
      [
        "I11.8",
        "Incident Response Tabletop Lab",
        "incident-response-tabletop-lab"
      ]
    ]
  },
  {
    "code": "I12",
    "title": "Digital Forensics Basics",
    "route": "/high-school/intermediate/digital-forensics-basics",
    "purpose": "Introduce safe evidence thinking, timelines, metadata concepts, and documentation without invasive techniques.",
    "skills": [
      "evidence handling",
      "timestamps",
      "metadata",
      "timeline analysis"
    ],
    "phase": "Applications and Response",
    "status": "Planned",
    "lessons": [
      [
        "I12.1",
        "What Digital Forensics Tries to Answer",
        "what-digital-forensics-tries-to-answer"
      ],
      [
        "I12.2",
        "Evidence Handling and Chain of Custody Concepts",
        "evidence-handling-and-chain-of-custody-concepts"
      ],
      [
        "I12.3",
        "Timestamps and Timeline Building",
        "timestamps-and-timeline-building"
      ],
      [
        "I12.4",
        "File Metadata Concepts",
        "file-metadata-concepts"
      ],
      [
        "I12.5",
        "Log Evidence and Correlation",
        "log-evidence-and-correlation"
      ],
      [
        "I12.6",
        "Screenshots and Documentation Limits",
        "screenshots-and-documentation-limits"
      ],
      [
        "I12.7",
        "Forensic Ethics and Boundaries",
        "forensic-ethics-and-boundaries"
      ],
      [
        "I12.8",
        "Timeline Analysis Lab",
        "timeline-analysis-lab"
      ]
    ]
  },
  {
    "code": "I13",
    "title": "Cloud Security Basics",
    "route": "/high-school/intermediate/cloud-security-basics",
    "purpose": "Teach cloud shared responsibility, account permissions, storage exposure, and monitoring concepts.",
    "skills": [
      "shared responsibility",
      "cloud IAM",
      "storage exposure",
      "cloud monitoring"
    ],
    "phase": "Applications and Response",
    "status": "Planned",
    "lessons": [
      [
        "I13.1",
        "What Cloud Computing Means",
        "what-cloud-computing-means"
      ],
      [
        "I13.2",
        "Shared Responsibility Model",
        "shared-responsibility-model"
      ],
      [
        "I13.3",
        "Cloud Identity and Permissions",
        "cloud-identity-and-permissions"
      ],
      [
        "I13.4",
        "Storage Buckets and Public Exposure Concepts",
        "storage-buckets-and-public-exposure-concepts"
      ],
      [
        "I13.5",
        "Cloud Logging and Monitoring Basics",
        "cloud-logging-and-monitoring-basics"
      ],
      [
        "I13.6",
        "Backups and Availability in the Cloud",
        "backups-and-availability-in-the-cloud"
      ],
      [
        "I13.7",
        "Common Cloud Misconfiguration Themes",
        "common-cloud-misconfiguration-themes"
      ],
      [
        "I13.8",
        "Cloud Security Scenario Lab",
        "cloud-security-scenario-lab"
      ]
    ]
  },
  {
    "code": "I14",
    "title": "Security Policies and Risk",
    "route": "/high-school/intermediate/security-policies-and-risk",
    "purpose": "Teach why organizations use policies, risk decisions, documentation, and compliance basics.",
    "skills": [
      "security policies",
      "risk assessment",
      "control exceptions",
      "clear guidance"
    ],
    "phase": "Applications and Response",
    "status": "Planned",
    "lessons": [
      [
        "I14.1",
        "Why Security Policies Exist",
        "why-security-policies-exist"
      ],
      [
        "I14.2",
        "Acceptable Use and Account Policies",
        "acceptable-use-and-account-policies"
      ],
      [
        "I14.3",
        "Data Handling and Classification Policies",
        "data-handling-and-classification-policies"
      ],
      [
        "I14.4",
        "Risk Assessment Basics",
        "risk-assessment-basics"
      ],
      [
        "I14.5",
        "Security Controls and Exceptions",
        "security-controls-and-exceptions"
      ],
      [
        "I14.6",
        "Compliance Concepts Without Legal Deep Dive",
        "compliance-concepts-without-legal-deep-dive"
      ],
      [
        "I14.7",
        "Writing Clear Security Guidance",
        "writing-clear-security-guidance"
      ],
      [
        "I14.8",
        "Policy and Risk Lab",
        "policy-and-risk-lab"
      ]
    ]
  },
  {
    "code": "I15",
    "title": "Security Operations Basics",
    "route": "/high-school/intermediate/security-operations-basics",
    "purpose": "Show how SOC teams triage alerts, document evidence, escalate issues, and coordinate defensive work.",
    "skills": [
      "SOC roles",
      "alert triage",
      "escalation",
      "shift handoffs"
    ],
    "phase": "Applications and Response",
    "status": "Planned",
    "lessons": [
      [
        "I15.1",
        "What a SOC Does",
        "what-a-soc-does"
      ],
      [
        "I15.2",
        "Alerts, Tickets, and Cases",
        "alerts-tickets-and-cases"
      ],
      [
        "I15.3",
        "Triage: Priority, Evidence, and Context",
        "triage-priority-evidence-and-context"
      ],
      [
        "I15.4",
        "Escalation and Communication",
        "escalation-and-communication"
      ],
      [
        "I15.5",
        "Dashboards and Metrics Concepts",
        "dashboards-and-metrics-concepts"
      ],
      [
        "I15.6",
        "Shift Handoffs and Documentation",
        "shift-handoffs-and-documentation"
      ],
      [
        "I15.7",
        "Avoiding Alert Fatigue",
        "avoiding-alert-fatigue"
      ],
      [
        "I15.8",
        "SOC Workflow Lab",
        "soc-workflow-lab"
      ]
    ]
  },
  {
    "code": "I16",
    "title": "Intermediate Defensive Labs",
    "route": "/high-school/intermediate/intermediate-defensive-labs",
    "purpose": "Let students practice safe, fake-data defender tasks across logs, alerts, email, cloud, and incident response.",
    "skills": [
      "fake-data analysis",
      "multi-source evidence",
      "incident decisions",
      "defensive reports"
    ],
    "phase": "Practice and Capstone",
    "status": "Planned",
    "lessons": [
      [
        "I16.1",
        "Fake Log Investigation Lab",
        "fake-log-investigation-lab"
      ],
      [
        "I16.2",
        "Fake Phishing Triage Lab",
        "fake-phishing-triage-lab"
      ],
      [
        "I16.3",
        "Fake IAM Permission Review Lab",
        "fake-iam-permission-review-lab"
      ],
      [
        "I16.4",
        "Fake Web Defense Review Lab",
        "fake-web-defense-review-lab"
      ],
      [
        "I16.5",
        "Fake Cloud Misconfiguration Review Lab",
        "fake-cloud-misconfiguration-review-lab"
      ],
      [
        "I16.6",
        "Fake Incident Response Tabletop",
        "fake-incident-response-tabletop"
      ],
      [
        "I16.7",
        "Writing a Defensive Report",
        "writing-a-defensive-report"
      ],
      [
        "I16.8",
        "Intermediate Multi-Step Lab",
        "intermediate-multi-step-lab"
      ]
    ]
  },
  {
    "code": "I17",
    "title": "Intermediate Capstone and Portfolio",
    "route": "/high-school/intermediate/intermediate-capstone-and-portfolio",
    "purpose": "Prepare students for Intermediate practice tests and guide them in creating portfolio-ready defensive artifacts.",
    "skills": [
      "portfolio artifacts",
      "incident reports",
      "security diagrams",
      "final readiness"
    ],
    "phase": "Practice and Capstone",
    "status": "Planned",
    "lessons": [
      [
        "I17.1",
        "Intermediate Knowledge Review",
        "intermediate-knowledge-review"
      ],
      [
        "I17.2",
        "Building a Defender Portfolio Artifact",
        "building-a-defender-portfolio-artifact"
      ],
      [
        "I17.3",
        "Writing an Incident Report",
        "writing-an-incident-report"
      ],
      [
        "I17.4",
        "Creating a Security Diagram",
        "creating-a-security-diagram"
      ],
      [
        "I17.5",
        "Creating a Risk Recommendation",
        "creating-a-risk-recommendation"
      ],
      [
        "I17.6",
        "Explaining Technical Evidence Clearly",
        "explaining-technical-evidence-clearly"
      ],
      [
        "I17.7",
        "Intermediate Final Readiness Review",
        "intermediate-final-readiness-review"
      ],
      [
        "I17.8",
        "Intermediate Capstone Lab",
        "intermediate-capstone-lab"
      ]
    ]
  }
];

const assessments = [
  {
    label: "Practice Test 1",
    title: "Intermediate Practice Test 1",
    route: "/high-school/intermediate/practice-test-1",
    questions: "50 questions",
    detail:
      "Full-track review across networking, operating systems, logs, tools, IAM, email, web, coding, vulnerabilities, response, forensics, cloud, risk, SOC work, labs, and portfolio skills.",
  },
  {
    label: "Practice Test 2",
    title: "Intermediate Practice Test 2",
    route: "/high-school/intermediate/practice-test-2",
    questions: "50 questions",
    detail:
      "A second assessment using new mixed scenarios, fictional evidence, and applied defensive decision-making.",
  },
  {
    label: "Final Assessment",
    title: "High School Intermediate Final Test",
    route: "/high-school/intermediate/final-test",
    questions: "125 questions",
    detail:
      "The comprehensive Intermediate assessment covering all seventeen modules and defensive workflows.",
  },
];

const phases = [
  {
    title: "Phase 1 · Network and Systems",
    modules: "I1–I3",
    detail:
      "Defensive networking, Linux foundations, Windows security, system evidence, permissions, services, and administration.",
  },
  {
    title: "Phase 2 · Identity and Operations",
    modules: "I4–I7",
    detail:
      "Logs, event monitoring, defensive tools, identity and access management, email security, and reporting workflows.",
  },
  {
    title: "Phase 3 · Detection and Defense",
    modules: "I8–I10",
    detail:
      "Web defense, secure coding, vulnerability management, defensive review, risk prioritization, and remediation planning.",
  },
  {
    title: "Phase 4 · Applications and Response",
    modules: "I11–I15",
    detail:
      "Incident response, digital evidence, cloud security, policies, risk, security operations, escalation, and coordination.",
  },
  {
    title: "Phase 5 · Practice and Capstone",
    modules: "I16–I17",
    detail:
      "Integrated fictional labs, multi-step investigations, reports, portfolio artifacts, review, and final readiness.",
  },
];

export default function HighSchoolIntermediatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.13),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-7 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Beginner Track
            </Link>
            <Link
              href="/high-school/advanced"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 transition hover:border-blue-300 hover:text-blue-200"
            >
              Advanced Track →
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  High School Intermediate
                </span>
                <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                  Development in Progress
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                Intermediate Cybersecurity Track
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how defenders protect systems and respond to problems
                through deeper technical explanations, fictional evidence,
                safe defensive labs, professional workflows, and
                portfolio-ready reports.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/high-school/intermediate/networking-for-defenders"
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start at Module I1
                </Link>
                <a
                  href="#modules"
                  className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-black text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View All Modules
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                Track Progress
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Stat label="Modules planned" value="17" />
                <Stat label="Lessons planned" value="136" />
                <Stat label="Module tests planned" value="17" />
                <Stat label="Track assessments" value="3" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
                <p className="font-black text-blue-200">
                  Current build: Module I1
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Networking for Defenders is the first Intermediate module.
                  All lesson titles and future routes are displayed below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                {phase.modules}
              </p>
              <h2 className="mt-3 text-xl font-black text-white">
                {phase.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {phase.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Complete Learning Path
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Everything planned for Intermediate
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "17 complete modules",
                "136 detailed lesson pages",
                "17 scored module tests",
                "Two 50-question practice tests",
                "One 125-question final test",
                "Fictional alerts, logs, diagrams, and dashboards",
                "Safe multi-source defensive labs",
                "Portfolio reports and reflection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-slate-950">
                    ✓
                  </span>
                  <p className="text-sm font-semibold text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety Promise
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Defensive, authorized, and fictional
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              All systems, addresses, accounts, organizations, evidence, and
              scenarios are fictional. Students never need to access, scan,
              probe, exploit, or modify real systems.
            </p>
          </div>
        </div>
      </section>

      <section
        id="modules"
        className="mx-auto max-w-7xl px-6 pb-16 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Complete Curriculum
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              All 17 Intermediate modules
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Every module card shows its eight individual lessons and
              25-question module test, matching the Beginner Track homepage.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-400/30 bg-blue-400/10 px-5 py-4 text-sm font-black text-blue-100">
            17 modules · 136 lessons · 17 module tests
          </div>
        </div>

        <div className="grid gap-6">
          {modules.map((module) => (
            <article
              key={module.code}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30"
            >
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-black text-cyan-200">
                      {module.code}
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                      {module.phase}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${module.status === "In Progress" ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border border-slate-700 bg-slate-950/70 text-slate-400"}`}
                    >
                      {module.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-white">
                    {module.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {module.purpose}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {module.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href={module.route}
                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Module Home
                  </Link>
                  <Link
                    href={`${module.route}/module-test`}
                    className="rounded-xl border border-yellow-300/50 bg-yellow-300/10 px-4 py-2 text-sm font-black text-yellow-100 transition hover:border-yellow-200"
                  >
                    Module Test
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {module.lessons.map(([number, title, slug]) => (
                  <Link
                    key={`${module.code}-${number}`}
                    href={`${module.route}/${slug}`}
                    className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-cyan-400/60 hover:bg-slate-950"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                          {number}
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-slate-100 group-hover:text-cyan-100">
                          {title}
                        </p>
                      </div>
                      <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">
                        {module.status === "In Progress" ? "Building" : "Planned"}
                      </span>
                    </div>
                  </Link>
                ))}

                <Link
                  href={`${module.route}/module-test`}
                  className="group rounded-2xl border border-yellow-300/40 bg-yellow-300/10 p-4 transition hover:border-yellow-200 hover:bg-yellow-300/15"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                        Assessment
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-yellow-50 group-hover:text-white">
                        25-Question Module Test
                      </p>
                    </div>
                    <span className="rounded-full border border-yellow-300/30 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-yellow-200/70">
                      Planned
                    </span>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="assessments"
        className="border-y border-slate-800 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
            Track-Level Assessments
          </p>
          <h2 className="mt-3 text-4xl font-black text-white">
            Practice tests and final assessment
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            These assessments will be created after all seventeen modules are
            complete. Answers and explanations will stay hidden until
            submission.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {assessments.map((assessment) => (
              <Link
                key={assessment.title}
                href={assessment.route}
                className="group rounded-3xl border border-yellow-300/30 bg-slate-950/70 p-6 transition hover:border-yellow-200 hover:bg-slate-950"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-200">
                    {assessment.label}
                  </p>
                  <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    Planned
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black text-white group-hover:text-yellow-50">
                  {assessment.title}
                </h3>
                <p className="mt-2 font-bold text-cyan-200">
                  {assessment.questions}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {assessment.detail}
                </p>
                <p className="mt-5 text-sm font-black text-cyan-200">
                  Future assessment route →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Completion Path
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            From Module I1 to track completion
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            {[
              ["1", "Complete I1–I17", "Finish all lessons and module tests."],
              ["2", "Practice Test 1", "Identify the first set of weak domains."],
              ["3", "Practice Test 2", "Confirm improvement using new questions."],
              ["4", "Intermediate Final Test", "Complete the 125-question assessment."],
              ["5", "Record Completion", "Save the result and visit Certificates."],
            ].map(([number, title, detail]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {number}
                </div>
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/30 bg-[linear-gradient(135deg,_rgba(16,185,129,0.16),_rgba(34,211,238,0.08),_rgba(15,23,42,0.8))] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
                Intermediate Track Development
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Begin with Networking for Defenders
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-200">
                Module I1 builds the network evidence and defensive reasoning
                foundation required by the rest of the Intermediate curriculum.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="/high-school/intermediate/networking-for-defenders"
                className="rounded-2xl bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Open Module I1
              </Link>
              <Link
                href="/high-school/beginner"
                className="rounded-2xl border border-emerald-300/40 bg-emerald-400/10 px-5 py-4 text-center font-black text-emerald-50 transition hover:border-white"
              >
                Review Beginner Track
              </Link>
              <Link
                href="/high-school"
                className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-center font-black text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                High School Hub
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
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}