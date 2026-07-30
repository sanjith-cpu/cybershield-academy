import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const advancedPath = "/high-school/advanced";
const modules = [
  {
    "code": "A1",
    "title": "Advanced Cyber Ethics and Legal Boundaries",
    "slug": "advanced-cyber-ethics-and-legal-boundaries",
    "purpose": "Establish professional-level ethics, authorization, safe research, disclosure concepts, and legal boundaries.",
    "focus": "Authorization, written scope, disclosure, sensitive information, research boundaries, AI ethics, trust, and professional communication.",
    "portfolio": "Ethics and authorization decision brief",
    "phase": "Professional Foundations",
    "lessons": [
      {
        "number": "A1.1",
        "title": "Professional Responsibility in Cybersecurity"
      },
      {
        "number": "A1.2",
        "title": "Authorization, Scope, and Written Permission"
      },
      {
        "number": "A1.3",
        "title": "Legal Risk and Consequences"
      },
      {
        "number": "A1.4",
        "title": "Responsible Disclosure Concepts"
      },
      {
        "number": "A1.5",
        "title": "Handling Sensitive Information Ethically"
      },
      {
        "number": "A1.6",
        "title": "Research Boundaries and Safe Environments"
      },
      {
        "number": "A1.7",
        "title": "Conflicts of Interest and Trust"
      },
      {
        "number": "A1.8",
        "title": "Ethics in AI and Automation"
      },
      {
        "number": "A1.9",
        "title": "Professional Communication During Risk"
      },
      {
        "number": "A1.10",
        "title": "Advanced Ethics Case Lab"
      }
    ]
  },
  {
    "code": "A2",
    "title": "Security Architecture",
    "slug": "security-architecture",
    "purpose": "Teach how secure systems are designed with layers, segmentation, identity, logging, and resilience.",
    "focus": "Defense-in-depth, trust boundaries, security zones, identity-centered design, visibility, resilience, secure defaults, and tradeoffs.",
    "portfolio": "Security architecture design package",
    "phase": "Professional Foundations",
    "lessons": [
      {
        "number": "A2.1",
        "title": "What Security Architecture Means"
      },
      {
        "number": "A2.2",
        "title": "Defense-in-Depth Design"
      },
      {
        "number": "A2.3",
        "title": "Trust Boundaries and Security Zones"
      },
      {
        "number": "A2.4",
        "title": "Network Segmentation Strategy"
      },
      {
        "number": "A2.5",
        "title": "Identity-Centered Architecture"
      },
      {
        "number": "A2.6",
        "title": "Logging and Visibility by Design"
      },
      {
        "number": "A2.7",
        "title": "Resilience and Recovery Planning"
      },
      {
        "number": "A2.8",
        "title": "Secure Defaults and Hardening Strategy"
      },
      {
        "number": "A2.9",
        "title": "Architecture Tradeoffs and Constraints"
      },
      {
        "number": "A2.10",
        "title": "Security Architecture Design Lab"
      }
    ]
  },
  {
    "code": "A3",
    "title": "Threat Modeling",
    "slug": "threat-modeling",
    "purpose": "Teach students to identify assets, threats, trust boundaries, abuse cases, risks, and mitigations safely.",
    "focus": "Assets, data flows, trust boundaries, threat questions, abuse cases, risk ranking, mitigations, assumptions, and review.",
    "portfolio": "Threat model and mitigation map",
    "phase": "Professional Foundations",
    "lessons": [
      {
        "number": "A3.1",
        "title": "Why Threat Modeling Exists"
      },
      {
        "number": "A3.2",
        "title": "Assets, Actors, and Entry Points"
      },
      {
        "number": "A3.3",
        "title": "Data Flows and Trust Boundaries"
      },
      {
        "number": "A3.4",
        "title": "Abuse Cases and Misuse Thinking"
      },
      {
        "number": "A3.5",
        "title": "Threat Categories Conceptually"
      },
      {
        "number": "A3.6",
        "title": "Risk Ranking in Threat Models"
      },
      {
        "number": "A3.7",
        "title": "Choosing Mitigations"
      },
      {
        "number": "A3.8",
        "title": "Documenting Assumptions and Limits"
      },
      {
        "number": "A3.9",
        "title": "Reviewing a Threat Model"
      },
      {
        "number": "A3.10",
        "title": "Threat Modeling Workshop Lab"
      }
    ]
  },
  {
    "code": "A4",
    "title": "Advanced Networking Defense",
    "slug": "advanced-networking-defense",
    "purpose": "Go deeper into network defense strategy, segmentation, monitoring, secure remote access, and defensive design.",
    "focus": "Network architecture, firewall strategy, segmentation, IDS/IPS concepts, remote access, baselines, monitoring, and resilience.",
    "portfolio": "Defensive network architecture review",
    "phase": "Professional Foundations",
    "lessons": [
      {
        "number": "A4.1",
        "title": "Defensive Network Architecture"
      },
      {
        "number": "A4.2",
        "title": "Segmentation and Microsegmentation Concepts"
      },
      {
        "number": "A4.3",
        "title": "Firewall Strategy and Rule Hygiene"
      },
      {
        "number": "A4.4",
        "title": "IDS/IPS Concepts and Network Visibility"
      },
      {
        "number": "A4.5",
        "title": "Secure Remote Access Concepts"
      },
      {
        "number": "A4.6",
        "title": "Wireless Defense Strategy"
      },
      {
        "number": "A4.7",
        "title": "Network Baselines and Anomaly Concepts"
      },
      {
        "number": "A4.8",
        "title": "DNS Security Concepts"
      },
      {
        "number": "A4.9",
        "title": "Network Resilience and Redundancy"
      },
      {
        "number": "A4.10",
        "title": "Advanced Network Defense Lab"
      }
    ]
  },
  {
    "code": "A5",
    "title": "Detection Engineering",
    "slug": "detection-engineering",
    "purpose": "Teach how defenders design, test, tune, and improve detection logic conceptually with fake data.",
    "focus": "Detection goals, evidence sources, logic design, testing, tuning, coverage, false positives, validation, and improvement.",
    "portfolio": "Detection plan and validation record",
    "phase": "Detection and Response",
    "lessons": [
      {
        "number": "A5.1",
        "title": "What Detection Engineering Means"
      },
      {
        "number": "A5.2",
        "title": "Data Sources for Detection"
      },
      {
        "number": "A5.3",
        "title": "Detection Logic Concepts"
      },
      {
        "number": "A5.4",
        "title": "Behavior-Based Detection Thinking"
      },
      {
        "number": "A5.5",
        "title": "False Positives and False Negatives"
      },
      {
        "number": "A5.6",
        "title": "Detection Tuning and Context"
      },
      {
        "number": "A5.7",
        "title": "Mapping Alerts to Defender Questions"
      },
      {
        "number": "A5.8",
        "title": "Testing Detections Safely With Fake Data"
      },
      {
        "number": "A5.9",
        "title": "Detection Documentation"
      },
      {
        "number": "A5.10",
        "title": "Detection Design Lab"
      }
    ]
  },
  {
    "code": "A6",
    "title": "SIEM and Alert Triage Concepts",
    "slug": "siem-and-alert-triage-concepts",
    "purpose": "Teach SIEM concepts, alert review, correlation, triage, escalation, and analyst workflow.",
    "focus": "Normalization, correlation, enrichment, triage, case boundaries, escalation, dashboards, handoffs, and quality.",
    "portfolio": "SIEM triage and case package",
    "phase": "Detection and Response",
    "lessons": [
      {
        "number": "A6.1",
        "title": "What a SIEM Does"
      },
      {
        "number": "A6.2",
        "title": "Log Collection and Normalization Concepts"
      },
      {
        "number": "A6.3",
        "title": "Correlation and Alert Rules"
      },
      {
        "number": "A6.4",
        "title": "Alert Severity and Priority"
      },
      {
        "number": "A6.5",
        "title": "Triage Questions and Evidence Review"
      },
      {
        "number": "A6.6",
        "title": "Escalation Criteria"
      },
      {
        "number": "A6.7",
        "title": "Case Management and Notes"
      },
      {
        "number": "A6.8",
        "title": "Dashboards and Metrics"
      },
      {
        "number": "A6.9",
        "title": "Reducing Noise and Improving Quality"
      },
      {
        "number": "A6.10",
        "title": "SIEM Triage Lab"
      }
    ]
  },
  {
    "code": "A7",
    "title": "Incident Response Lifecycle",
    "slug": "incident-response-lifecycle",
    "purpose": "Develop professional incident response thinking across planning, technical containment, communication, recovery, and improvement.",
    "focus": "Roles, playbooks, scoping, containment, recovery, evidence, communication, post-incident review, metrics, and simulation.",
    "portfolio": "Incident response playbook and tabletop",
    "phase": "Detection and Response",
    "lessons": [
      {
        "number": "A7.1",
        "title": "Advanced Incident Response Roles"
      },
      {
        "number": "A7.2",
        "title": "Preparation and Playbook Design"
      },
      {
        "number": "A7.3",
        "title": "Detection and Scoping"
      },
      {
        "number": "A7.4",
        "title": "Containment Strategy"
      },
      {
        "number": "A7.5",
        "title": "Eradication and Recovery Planning"
      },
      {
        "number": "A7.6",
        "title": "Stakeholder Communication"
      },
      {
        "number": "A7.7",
        "title": "Evidence Preservation Concepts"
      },
      {
        "number": "A7.8",
        "title": "Post-Incident Review"
      },
      {
        "number": "A7.9",
        "title": "Metrics and Continuous Improvement"
      },
      {
        "number": "A7.10",
        "title": "Incident Response Simulation Lab"
      }
    ]
  },
  {
    "code": "A8",
    "title": "Digital Forensics Concepts",
    "slug": "digital-forensics-concepts",
    "purpose": "Teach forensic reasoning, timelines, artifacts, preservation concepts, and reporting without teaching invasive techniques.",
    "focus": "Scope, evidence integrity, chain of custody, timelines, artifact concepts, correlation, reporting, ethics, and limitations.",
    "portfolio": "Forensic reasoning and timeline report",
    "phase": "Detection and Response",
    "lessons": [
      {
        "number": "A8.1",
        "title": "Forensic Questions and Investigation Scope"
      },
      {
        "number": "A8.2",
        "title": "Evidence Integrity and Chain of Custody"
      },
      {
        "number": "A8.3",
        "title": "Timeline Analysis Concepts"
      },
      {
        "number": "A8.4",
        "title": "Endpoint Artifact Concepts"
      },
      {
        "number": "A8.5",
        "title": "Memory and Storage Evidence Concepts"
      },
      {
        "number": "A8.6",
        "title": "Browser and Account Activity Concepts"
      },
      {
        "number": "A8.7",
        "title": "Log Correlation for Forensics"
      },
      {
        "number": "A8.8",
        "title": "Forensic Reporting Standards"
      },
      {
        "number": "A8.9",
        "title": "Ethical Limits in Investigations"
      },
      {
        "number": "A8.10",
        "title": "Forensics Reasoning Lab"
      }
    ]
  },
  {
    "code": "A9",
    "title": "Malware Defense Concepts",
    "slug": "malware-defense-concepts",
    "purpose": "Explain malware behavior only from a defensive viewpoint: prevention, detection, containment, recovery, and communication.",
    "focus": "Defense boundaries, behavior categories, indicators, endpoint and network containment, backups, monitoring, awareness, and risk communication.",
    "portfolio": "Malware-defense case response package",
    "phase": "Detection and Response",
    "lessons": [
      {
        "number": "A9.1",
        "title": "Malware Defense Boundaries"
      },
      {
        "number": "A9.2",
        "title": "Malware Behavior Categories Conceptually"
      },
      {
        "number": "A9.3",
        "title": "Indicators of Compromise Concepts"
      },
      {
        "number": "A9.4",
        "title": "Endpoint Containment Strategy"
      },
      {
        "number": "A9.5",
        "title": "Network Containment Strategy"
      },
      {
        "number": "A9.6",
        "title": "Backup and Recovery After Malware"
      },
      {
        "number": "A9.7",
        "title": "User Reporting and Awareness"
      },
      {
        "number": "A9.8",
        "title": "Detection and Monitoring Ideas"
      },
      {
        "number": "A9.9",
        "title": "Communicating Malware Risk"
      },
      {
        "number": "A9.10",
        "title": "Malware Defense Case Lab"
      }
    ]
  },
  {
    "code": "A10",
    "title": "Advanced Web Security Defense",
    "slug": "advanced-web-security-defense",
    "purpose": "Teach secure web design and defensive review practices without offensive exploitation steps.",
    "focus": "Web architecture, authentication, sessions, authorization, input and output safety, APIs, headers, secrets, logging, and review.",
    "portfolio": "Web defense architecture review",
    "phase": "Application, Cloud, and Identity",
    "lessons": [
      {
        "number": "A10.1",
        "title": "Secure Web Architecture Principles"
      },
      {
        "number": "A10.2",
        "title": "Authentication and Session Design"
      },
      {
        "number": "A10.3",
        "title": "Authorization and Access Control Design"
      },
      {
        "number": "A10.4",
        "title": "Input Handling and Output Safety"
      },
      {
        "number": "A10.5",
        "title": "API Security Concepts"
      },
      {
        "number": "A10.6",
        "title": "Secure Headers and Browser Protections"
      },
      {
        "number": "A10.7",
        "title": "Secrets and Configuration Management"
      },
      {
        "number": "A10.8",
        "title": "Logging and Monitoring for Web Apps"
      },
      {
        "number": "A10.9",
        "title": "Web Security Review Process"
      },
      {
        "number": "A10.10",
        "title": "Web Defense Architecture Lab"
      }
    ]
  },
  {
    "code": "A11",
    "title": "Secure Software Architecture",
    "slug": "secure-software-architecture",
    "purpose": "Teach secure development lifecycle, design patterns, dependencies, secrets management, and software risk decisions.",
    "focus": "Secure lifecycle, design principles, dependency risk, secrets, code review, testing strategy, release decisions, and governance.",
    "portfolio": "Secure software design assessment",
    "phase": "Application, Cloud, and Identity",
    "lessons": [
      {
        "number": "A11.1",
        "title": "Security in the Software Lifecycle"
      },
      {
        "number": "A11.2",
        "title": "Secure Design Requirements"
      },
      {
        "number": "A11.3",
        "title": "Threat Modeling for Software"
      },
      {
        "number": "A11.4",
        "title": "Secrets Management Concepts"
      },
      {
        "number": "A11.5",
        "title": "Dependency and Supply Chain Risk Concepts"
      },
      {
        "number": "A11.6",
        "title": "Secure Error Handling and Logging"
      },
      {
        "number": "A11.7",
        "title": "Code Review for Security"
      },
      {
        "number": "A11.8",
        "title": "Testing Security Requirements Safely"
      },
      {
        "number": "A11.9",
        "title": "Secure Deployment Concepts"
      },
      {
        "number": "A11.10",
        "title": "Secure Software Design Lab"
      }
    ]
  },
  {
    "code": "A12",
    "title": "Cloud Security Architecture",
    "slug": "cloud-security-architecture",
    "purpose": "Develop cloud security architecture thinking across identity, storage, networks, logging, monitoring, and resilience.",
    "focus": "Shared responsibility, cloud identity, storage, networks, logging, monitoring, encryption, resilience, suppliers, and architecture tradeoffs.",
    "portfolio": "Cloud security architecture package",
    "phase": "Application, Cloud, and Identity",
    "lessons": [
      {
        "number": "A12.1",
        "title": "Cloud Architecture and Shared Responsibility"
      },
      {
        "number": "A12.2",
        "title": "Cloud IAM Architecture"
      },
      {
        "number": "A12.3",
        "title": "Storage Security and Data Exposure"
      },
      {
        "number": "A12.4",
        "title": "Cloud Network Boundaries"
      },
      {
        "number": "A12.5",
        "title": "Cloud Logging and Monitoring Design"
      },
      {
        "number": "A12.6",
        "title": "Secrets and Key Handling in Cloud"
      },
      {
        "number": "A12.7",
        "title": "Backup, Recovery, and Resilience"
      },
      {
        "number": "A12.8",
        "title": "Cloud Misconfiguration Prevention"
      },
      {
        "number": "A12.9",
        "title": "Cloud Governance Concepts"
      },
      {
        "number": "A12.10",
        "title": "Cloud Architecture Review Lab"
      }
    ]
  },
  {
    "code": "A13",
    "title": "Identity, Zero Trust, and Access Control",
    "slug": "identity-zero-trust-and-access-control",
    "purpose": "Teach advanced identity strategy, least privilege, federation concepts, conditional access, and zero trust thinking.",
    "focus": "Identity architecture, federation, conditional access, privileged access, lifecycle, service identities, zero trust, and validation.",
    "portfolio": "Enterprise identity and zero-trust review",
    "phase": "Application, Cloud, and Identity",
    "lessons": [
      {
        "number": "A13.1",
        "title": "Identity as a Security Perimeter"
      },
      {
        "number": "A13.2",
        "title": "Zero Trust Principles"
      },
      {
        "number": "A13.3",
        "title": "Federation and Single Sign-On Concepts"
      },
      {
        "number": "A13.4",
        "title": "Conditional Access and Policy Decisions"
      },
      {
        "number": "A13.5",
        "title": "Role-Based and Attribute-Based Access Concepts"
      },
      {
        "number": "A13.6",
        "title": "Privileged Access Management Concepts"
      },
      {
        "number": "A13.7",
        "title": "Identity Logging and Monitoring"
      },
      {
        "number": "A13.8",
        "title": "Access Reviews and Governance"
      },
      {
        "number": "A13.9",
        "title": "Balancing Security and Usability"
      },
      {
        "number": "A13.10",
        "title": "Zero Trust Design Lab"
      }
    ]
  },
  {
    "code": "A14",
    "title": "Cryptography and Key Management Concepts",
    "slug": "cryptography-and-key-management-concepts",
    "purpose": "Teach cryptography design decisions, key management, certificates, hashing, and common mistakes at a conceptual level.",
    "focus": "Encryption design, hashing and salting concepts, signatures, certificates, PKI, key storage, rotation, policy, and common mistakes.",
    "portfolio": "Key-management design recommendation",
    "phase": "Application, Cloud, and Identity",
    "lessons": [
      {
        "number": "A14.1",
        "title": "Cryptography in System Design"
      },
      {
        "number": "A14.2",
        "title": "Symmetric and Asymmetric Encryption Concepts"
      },
      {
        "number": "A14.3",
        "title": "Hashing, Salting, and Integrity Concepts"
      },
      {
        "number": "A14.4",
        "title": "Digital Signatures Conceptually"
      },
      {
        "number": "A14.5",
        "title": "Certificates and PKI Concepts"
      },
      {
        "number": "A14.6",
        "title": "Key Storage and Rotation"
      },
      {
        "number": "A14.7",
        "title": "Common Crypto Design Mistakes"
      },
      {
        "number": "A14.8",
        "title": "Encryption in Transit and At Rest"
      },
      {
        "number": "A14.9",
        "title": "Crypto Policy and Compliance Concepts"
      },
      {
        "number": "A14.10",
        "title": "Key Management Design Lab"
      }
    ]
  },
  {
    "code": "A15",
    "title": "Risk Management and Compliance",
    "slug": "risk-management-and-compliance",
    "purpose": "Teach how cybersecurity supports business goals through risk registers, controls, audits, and decision-making.",
    "focus": "Assets, threats, impact, likelihood, risk ownership, controls, testing, frameworks, audits, exceptions, suppliers, and leadership communication.",
    "portfolio": "Risk register and leadership recommendation",
    "phase": "Governance and Automation",
    "lessons": [
      {
        "number": "A15.1",
        "title": "Risk Management in Cybersecurity"
      },
      {
        "number": "A15.2",
        "title": "Assets, Threats, Impact, and Likelihood"
      },
      {
        "number": "A15.3",
        "title": "Risk Registers and Ownership"
      },
      {
        "number": "A15.4",
        "title": "Security Controls and Control Testing"
      },
      {
        "number": "A15.5",
        "title": "Compliance Framework Concepts"
      },
      {
        "number": "A15.6",
        "title": "Audit Evidence and Documentation"
      },
      {
        "number": "A15.7",
        "title": "Risk Acceptance and Exceptions"
      },
      {
        "number": "A15.8",
        "title": "Third-Party Risk Concepts"
      },
      {
        "number": "A15.9",
        "title": "Communicating Risk to Leaders"
      },
      {
        "number": "A15.10",
        "title": "Risk Decision Lab"
      }
    ]
  },
  {
    "code": "A16",
    "title": "Privacy Engineering and Data Governance",
    "slug": "privacy-engineering-and-data-governance",
    "purpose": "Teach data minimization, classification, retention, consent, privacy risk, and governance by design.",
    "focus": "Privacy principles, inventories, classification, minimization, purpose, consent, retention, deletion, governance roles, and privacy by design.",
    "portfolio": "Privacy engineering review",
    "phase": "Governance and Automation",
    "lessons": [
      {
        "number": "A16.1",
        "title": "Privacy Engineering Principles"
      },
      {
        "number": "A16.2",
        "title": "Data Classification and Inventory"
      },
      {
        "number": "A16.3",
        "title": "Data Minimization and Purpose Limitation"
      },
      {
        "number": "A16.4",
        "title": "Consent and User Expectations"
      },
      {
        "number": "A16.5",
        "title": "Retention and Deletion Concepts"
      },
      {
        "number": "A16.6",
        "title": "Privacy Risk Assessments"
      },
      {
        "number": "A16.7",
        "title": "Data Governance Roles"
      },
      {
        "number": "A16.8",
        "title": "Privacy by Design in Systems"
      },
      {
        "number": "A16.9",
        "title": "Balancing Security, Privacy, and Usability"
      },
      {
        "number": "A16.10",
        "title": "Privacy Engineering Lab"
      }
    ]
  },
  {
    "code": "A17",
    "title": "Security Automation Concepts",
    "slug": "security-automation-concepts",
    "purpose": "Teach safe automation planning for alert enrichment, ticketing, workflows, and response support without unsafe actions.",
    "focus": "Human judgment, enrichment, ticketing, playbooks, safe scripting boundaries, approval gates, failure modes, metrics, and governance.",
    "portfolio": "Safe automation design and governance plan",
    "phase": "Governance and Automation",
    "lessons": [
      {
        "number": "A17.1",
        "title": "Why Security Automation Exists"
      },
      {
        "number": "A17.2",
        "title": "Automation vs Human Judgment"
      },
      {
        "number": "A17.3",
        "title": "Alert Enrichment Concepts"
      },
      {
        "number": "A17.4",
        "title": "Ticketing and Workflow Automation"
      },
      {
        "number": "A17.5",
        "title": "Playbooks and Runbooks"
      },
      {
        "number": "A17.6",
        "title": "Safe Scripting Boundaries"
      },
      {
        "number": "A17.7",
        "title": "Automation Failure Modes"
      },
      {
        "number": "A17.8",
        "title": "Measuring Automation Value"
      },
      {
        "number": "A17.9",
        "title": "Governance for Automation"
      },
      {
        "number": "A17.10",
        "title": "Security Automation Design Lab"
      }
    ]
  },
  {
    "code": "A18",
    "title": "Advanced Defensive Labs",
    "slug": "advanced-defensive-labs",
    "purpose": "Give students complex but safe defensive cases using fake logs, fake alerts, diagrams, risk decisions, and reports.",
    "focus": "Multi-source investigation, architecture review, cloud, IAM, incident response, detection tuning, risk, forensics, and executive summaries.",
    "portfolio": "Advanced multi-case lab portfolio",
    "phase": "Professional Application",
    "lessons": [
      {
        "number": "A18.1",
        "title": "Multi-Source Alert Investigation"
      },
      {
        "number": "A18.2",
        "title": "Network Defense Architecture Review"
      },
      {
        "number": "A18.3",
        "title": "Cloud Security Review Case"
      },
      {
        "number": "A18.4",
        "title": "Identity Access Review Case"
      },
      {
        "number": "A18.5",
        "title": "Incident Response Tabletop Case"
      },
      {
        "number": "A18.6",
        "title": "Detection Tuning Case"
      },
      {
        "number": "A18.7",
        "title": "Risk Register Case"
      },
      {
        "number": "A18.8",
        "title": "Forensics Timeline Case"
      },
      {
        "number": "A18.9",
        "title": "Executive Summary Writing"
      },
      {
        "number": "A18.10",
        "title": "Advanced Lab Challenge"
      }
    ]
  },
  {
    "code": "A19",
    "title": "Cybersecurity Portfolio Projects",
    "slug": "cybersecurity-portfolio-projects",
    "purpose": "Guide students in producing portfolio-ready defensive artifacts suitable for learning, applications, and interviews.",
    "focus": "Security diagrams, incident reports, threat models, risk assessments, detection plans, policies, cloud reviews, reflection, and presentation.",
    "portfolio": "Complete advanced cybersecurity portfolio",
    "phase": "Professional Application",
    "lessons": [
      {
        "number": "A19.1",
        "title": "What Makes a Strong Cyber Portfolio"
      },
      {
        "number": "A19.2",
        "title": "Security Diagram Project"
      },
      {
        "number": "A19.3",
        "title": "Incident Report Project"
      },
      {
        "number": "A19.4",
        "title": "Threat Model Project"
      },
      {
        "number": "A19.5",
        "title": "Risk Assessment Project"
      },
      {
        "number": "A19.6",
        "title": "Detection Plan Project"
      },
      {
        "number": "A19.7",
        "title": "Security Policy Draft Project"
      },
      {
        "number": "A19.8",
        "title": "Cloud Security Review Project"
      },
      {
        "number": "A19.9",
        "title": "Portfolio Reflection and Presentation"
      },
      {
        "number": "A19.10",
        "title": "Portfolio Review Lab"
      }
    ]
  },
  {
    "code": "A20",
    "title": "Advanced Capstone",
    "slug": "advanced-capstone",
    "purpose": "Complete the Advanced Track with a professional-style defensive capstone and final exam readiness.",
    "focus": "Architecture, threat modeling, detection, monitoring, response, cloud, identity, risk, privacy, executive communication, submission, and readiness.",
    "portfolio": "Professional-style advanced capstone",
    "phase": "Professional Application",
    "lessons": [
      {
        "number": "A20.1",
        "title": "Advanced Track Knowledge Review"
      },
      {
        "number": "A20.2",
        "title": "Capstone Scenario Briefing"
      },
      {
        "number": "A20.3",
        "title": "Architecture and Threat Model Phase"
      },
      {
        "number": "A20.4",
        "title": "Detection and Monitoring Phase"
      },
      {
        "number": "A20.5",
        "title": "Incident Response Phase"
      },
      {
        "number": "A20.6",
        "title": "Cloud and Identity Review Phase"
      },
      {
        "number": "A20.7",
        "title": "Risk and Privacy Review Phase"
      },
      {
        "number": "A20.8",
        "title": "Executive Communication Phase"
      },
      {
        "number": "A20.9",
        "title": "Final Portfolio Submission"
      },
      {
        "number": "A20.10",
        "title": "Advanced Final Readiness Review"
      }
    ]
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the authorized problem",
    "detail": "Identify the fictional mission, written scope, systems, data, users, business needs, safety limits, owners, and decision authority."
  },
  {
    "step": "2",
    "title": "Map architecture and trust",
    "detail": "Document fictional assets, identities, services, data flows, trust boundaries, dependencies, inherited controls, and resilience needs."
  },
  {
    "step": "3",
    "title": "Model risk and threats",
    "detail": "Identify fictional harmful events, abuse cases, weaknesses, assumptions, likelihood, impact, mitigations, and evidence gaps."
  },
  {
    "step": "4",
    "title": "Design visibility and detection",
    "detail": "Select fictional evidence sources, coverage goals, detection logic, triage context, validation tests, metrics, and improvement loops."
  },
  {
    "step": "5",
    "title": "Coordinate response",
    "detail": "Separate fictional cases, assign authority, preserve service, plan containment and recovery, communicate, and validate outcomes."
  },
  {
    "step": "6",
    "title": "Govern and improve",
    "detail": "Record fictional risk, privacy, compliance, automation, ownership, residual uncertainty, portfolio evidence, and continuous improvement."
  }
];
const competencies = [
  {
    "title": "Architecture thinking",
    "detail": "Design fictional systems with layered controls, trust boundaries, identity, visibility, resilience, secure defaults, and explicit tradeoffs."
  },
  {
    "title": "Threat and risk reasoning",
    "detail": "Connect fictional assets, harmful events, weaknesses, likelihood, impact, controls, options, owners, and residual risk without unsupported certainty."
  },
  {
    "title": "Detection and triage",
    "detail": "Create fictional coverage goals, evidence requirements, detection logic, validation tests, tuning decisions, case boundaries, and handoffs."
  },
  {
    "title": "Incident leadership",
    "detail": "Coordinate fictional scope, authority, containment, continuity, evidence, communication, recovery, validation, review, and improvement."
  },
  {
    "title": "Cloud and identity design",
    "detail": "Evaluate fictional shared responsibility, effective access, federation, conditional controls, storage, networks, logging, keys, suppliers, and resilience."
  },
  {
    "title": "Governance and privacy",
    "detail": "Build fictional policies, risk registers, audit evidence, exceptions, data inventories, retention decisions, privacy reviews, and leadership recommendations."
  },
  {
    "title": "Safe automation",
    "detail": "Plan fictional enrichment, ticketing, workflows, approval gates, rollback, failure handling, metrics, and human oversight without unsafe actions."
  },
  {
    "title": "Professional communication",
    "detail": "Explain fictional evidence, architecture, risk, decisions, validation, limitations, and next actions to technical and nontechnical audiences."
  }
];
const portfolioStages = [
  {
    "range": "A1–A4",
    "title": "Professional Foundations Portfolio",
    "artifacts": "Authorization brief, ethics decision record, security architecture, threat model, trust-boundary map, and network-defense review."
  },
  {
    "range": "A5–A9",
    "title": "Detection and Response Portfolio",
    "artifacts": "Detection plan, validation record, SIEM triage package, incident playbook, forensic timeline, and malware-defense case."
  },
  {
    "range": "A10–A14",
    "title": "Application, Cloud, and Identity Portfolio",
    "artifacts": "Web architecture review, secure software assessment, cloud design, zero-trust review, and key-management recommendation."
  },
  {
    "range": "A15–A17",
    "title": "Governance and Automation Portfolio",
    "artifacts": "Risk register, compliance evidence plan, privacy engineering review, and safe automation governance package."
  },
  {
    "range": "A18–A20",
    "title": "Professional Application Portfolio",
    "artifacts": "Advanced lab cases, polished portfolio projects, final capstone, executive communication, reflection, and readiness defense."
  }
];
const phases = [
  "Professional Foundations",
  "Detection and Response",
  "Application, Cloud, and Identity",
  "Governance and Automation",
  "Professional Application"
];

export default function HighSchoolAdvancedPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Advanced Track
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Professional Defensive Learning
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                CyberShield Academy
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                High School Advanced
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Design, defend, monitor, and improve secure fictional systems
                through professional ethics, architecture, threat modeling,
                detection, response, cloud, identity, risk, privacy,
                automation, advanced labs, and portfolio projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${advancedPath}/advanced-cyber-ethics-and-legal-boundaries`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Advanced with A1
                </Link>

                <Link
                  href="/high-school"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  High School Hub
                </Link>

                <Link
                  href="/high-school/intermediate"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
                >
                  Intermediate Track
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-cyan-400/30 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Track Snapshot
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["20", "Modules"],
                  ["10", "Lessons per module"],
                  ["200", "Lesson pages"],
                  ["20", "Module tests"],
                  ["2", "Practice tests"],
                  ["125", "Final-test questions"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4"
                  >
                    <p className="text-3xl font-black text-cyan-200">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                  Main Question
                </p>
                <p className="mt-3 font-bold leading-7 text-purple-50">
                  How do real cybersecurity professionals design, defend,
                  monitor, and improve secure systems?
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12">
        <section className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Professional depth",
              "Advanced focuses on architecture choices, evidence quality, tradeoffs, ownership, validation, governance, and communication.",
            ],
            [
              "Safe by design",
              "Every system, identity, log, alert, supplier, incident, decision, and outcome remains fictional, defensive, and authorized.",
            ],
            [
              "Portfolio outcome",
              "Every module contributes a substantial artifact suitable for learning, applications, interviews, and a final capstone.",
            ],
          ].map(([title, detail]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h2 className="text-xl font-black text-cyan-100">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Advanced Mission
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Think Like a Defensive Security Professional
            </h2>
            <p className="mt-4 leading-8 text-cyan-50">
              Advanced students will review fictional systems before and after
              problems occur. They will compare design options, map trust,
              define detection coverage, coordinate response, explain
              uncertainty, govern risk, and produce evidence-based portfolio
              work.
            </p>
          </article>

          <article className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety and Authorization Boundary
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Defensive Learning Only
            </h2>
            <p className="mt-4 leading-8 text-yellow-50">
              Do not test, scan, access, change, bypass, or investigate real
              systems without explicit written authorization. Do not use real
              credentials, suspicious files, phishing links, private messages,
              employee records, school records, or confidential information.
              Use only the fictional evidence supplied inside CyberShield labs.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Advanced Learning Workflow
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Six Steps Used throughout the Track
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Professional Competency Map
          </p>
          <h2 className="mt-3 text-3xl font-black">
            What Advanced Students Will Learn to Produce
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {competencies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Advanced Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Twenty Professional-Level Modules
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Every module card below includes all ten exact lesson titles,
              from A1.1 through A20.10, plus its 25-question module test,
              professional focus, and portfolio-ready outcome.
            </p>
          </div>

          <div className="mt-8 grid gap-8">
            {phases.map((phase) => (
              <section
                key={phase}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
                      Advanced Phase
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {phase}
                    </h3>
                  </div>

                  <span className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                    {modules.filter((module) => module.phase === phase).length} modules
                  </span>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                  {modules
                    .filter((module) => module.phase === phase)
                    .map((module) => (
                      <article
                        key={module.code}
                        className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-950 p-6 transition hover:border-cyan-400/70"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <span className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-black text-slate-950">
                            {module.code}
                          </span>

                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                            10 lessons + test
                          </span>
                        </div>

                        <h4 className="mt-5 text-2xl font-black text-white">
                          {module.title}
                        </h4>

                        <p className="mt-3 leading-7 text-slate-300">
                          {module.purpose}
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                            Professional focus
                          </p>
                          <p className="mt-2 text-sm leading-6 text-blue-50">
                            {module.focus}
                          </p>
                        </div>

                        <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                            Portfolio outcome
                          </p>
                          <p className="mt-2 text-sm leading-6 text-purple-50">
                            {module.portfolio}
                          </p>
                        </div>

                        <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                              Individual Lessons
                            </p>
                            <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-black text-slate-300">
                              {module.lessons.length} lessons
                            </span>
                          </div>

                          <div className="mt-4 grid gap-2">
                            {module.lessons.map((lesson) => (
                              <div
                                key={lesson.number}
                                className="grid gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 sm:grid-cols-[0.22fr_1fr] sm:items-center"
                              >
                                <span className="font-mono text-sm font-black text-cyan-200">
                                  {lesson.number}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-slate-200">
                                  {lesson.title}
                                </span>
                              </div>
                            ))}

                            <div className="grid gap-2 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-3 sm:grid-cols-[0.22fr_1fr] sm:items-center">
                              <span className="font-mono text-sm font-black text-yellow-200">
                                Test
                              </span>
                              <span className="text-sm font-semibold leading-6 text-yellow-50">
                                {module.code} Module Test — 25 Questions
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-6">
                          <Link
                            href={`${advancedPath}/${module.slug}`}
                            className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                          >
                            Open {module.code}
                          </Link>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Portfolio Progression
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Build One Connected Advanced Portfolio
          </h2>

          <div className="mt-7 grid gap-5">
            {portfolioStages.map((stage) => (
              <article
                key={stage.range}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[0.22fr_0.5fr_1.3fr]"
              >
                <span className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center font-black text-cyan-200">
                  {stage.range}
                </span>
                <h3 className="font-black text-white">{stage.title}</h3>
                <p className="text-sm leading-6 text-slate-300">
                  {stage.artifacts}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Track Assessments
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Practice, Apply, and Demonstrate Advanced Readiness
            </h2>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                50 Questions
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Advanced Practice Test 1
              </h3>
              <p className="mt-3 leading-7 text-cyan-50">
                Review ethics, architecture, threat modeling, networking,
                detection, SIEM, response, forensics, malware defense, web,
                software, cloud, identity, cryptography, risk, privacy,
                automation, labs, and portfolio projects.
              </p>
              <Link
                href={`${advancedPath}/practice-test-1`}
                className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Open Practice Test 1
              </Link>
            </article>

            <article className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                50 Applied Questions
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Advanced Practice Test 2
              </h3>
              <p className="mt-3 leading-7 text-purple-50">
                Apply professional defensive reasoning to mixed fictional
                scenarios, fake evidence, architecture reviews, detection
                decisions, response choices, governance, and communication.
              </p>
              <Link
                href={`${advancedPath}/practice-test-2`}
                className="mt-6 inline-flex rounded-xl bg-purple-300 px-5 py-3 font-black text-slate-950 transition hover:bg-purple-200"
              >
                Open Practice Test 2
              </Link>
            </article>

            <article className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                125 Questions
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Advanced Final Test
              </h3>
              <p className="mt-3 leading-7 text-emerald-50">
                Demonstrate full-track readiness across architecture, threat
                modeling, detection, SIEM, incident response, cloud, identity,
                risk, privacy, automation, communication, and capstone work.
              </p>
              <Link
                href={`${advancedPath}/final-test`}
                className="mt-6 inline-flex rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
              >
                Open Final Test
              </Link>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
            Begin the Final High School Track
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Start A1: Advanced Cyber Ethics and Legal Boundaries
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            Advanced begins with professional responsibility, authorization,
            written scope, legal and research boundaries, responsible
            disclosure, sensitive information, AI ethics, conflicts of
            interest, trust, and communication during risk.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`${advancedPath}/advanced-cyber-ethics-and-legal-boundaries`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start Module A1
            </Link>

            <Link
              href="/high-school"
              className="rounded-xl border border-emerald-300/40 px-6 py-3 font-black text-emerald-50 transition hover:border-white"
            >
              Back to High School
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}