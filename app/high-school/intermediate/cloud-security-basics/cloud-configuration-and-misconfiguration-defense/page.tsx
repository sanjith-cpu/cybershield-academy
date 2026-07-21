import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/cloud-security-basics`;
const previousLesson = `${modulePath}/cloud-logging-monitoring-and-detection`;
const nextLesson = `${modulePath}/cloud-incident-response-and-recovery`;

const objectives = [
  "Explain fictional cloud configuration baselines, policy-as-code concepts, drift, exceptions, posture findings, ownership, and change control without touching any real cloud account.",
  "Evaluate fictional misconfigurations by correlating identity, storage, network, logging, encryption, backup, deployment, configuration history, business need, and compensating-control evidence.",
  "Prioritize fictional cloud findings using exposure, privilege, data sensitivity, reachability, exploitability, business effect, source health, confidence, and remediation readiness.",
  "Design fictional remediation with named owners, approvals, staged validation, rollback, monitoring, communication, residual risk, and closure evidence.",
  "Create a portfolio-safe fictional cloud posture package with baselines, findings, exceptions, action plans, validation records, and leadership communication."
];
const vocabulary = [
  [
    "Secure baseline",
    "A fictional approved configuration standard describing expected identity, network, storage, logging, encryption, backup, recovery, tagging, ownership, and monitoring settings."
  ],
  [
    "Configuration drift",
    "A fictional difference between the approved baseline and the current effective cloud configuration."
  ],
  [
    "Misconfiguration",
    "A fictional cloud setting, policy, path, permission, control, or omission that creates avoidable security or operational risk."
  ],
  [
    "Policy-as-code",
    "A fictional concept for expressing cloud rules in machine-readable form so configuration can be reviewed, tested, and evaluated consistently."
  ],
  [
    "Posture finding",
    "A fictional result showing that a resource differs from a required control, baseline, policy, or owner expectation."
  ],
  [
    "Exception",
    "A fictional approved temporary or permanent departure from a baseline with business reason, owner, compensating controls, expiration, review, and residual risk."
  ],
  [
    "Compensating control",
    "A fictional alternate protection used when the preferred control cannot yet be implemented."
  ],
  [
    "Drift detection",
    "A fictional monitoring process that identifies when a resource, identity, network, storage, logging, encryption, backup, or policy state changes from the expected baseline."
  ],
  [
    "Configuration history",
    "A fictional record of current and prior resource settings, change events, owners, approvals, and timestamps."
  ],
  [
    "Effective state",
    "The fictional practical configuration after inheritance, defaults, explicit settings, service controls, conditions, exceptions, and related policies are combined."
  ],
  [
    "Remediation owner",
    "The fictional team or person accountable for correcting, validating, monitoring, and closing a finding."
  ],
  [
    "Validation evidence",
    "Fictional proof that the corrected configuration behaves as expected and the original risk is reduced without breaking the service."
  ],
  [
    "Rollback",
    "A fictional approved method for returning to a known safe state if a change causes unexpected impact."
  ],
  [
    "Residual risk",
    "The fictional risk that remains after remediation, exception, or compensating controls are applied."
  ],
  [
    "Closure criteria",
    "The fictional evidence, approvals, control state, monitoring, and owner confirmation required before a finding is marked complete."
  ],
  [
    "False positive",
    "A fictional posture result that appears noncompliant because context, effective state, exception, or source health was not fully considered."
  ]
];
const baselineDomains = [
  {
    "domain": "Identity and privilege",
    "expected": "Fictional named owners, least privilege, temporary privileged access, lifecycle review, service-identity mapping, strong authentication, and monitored emergency access.",
    "common_drift": "Broad roles, standing privilege, stale partner trust, shared service identities, missing expiration, and stale group membership.",
    "evidence": "Role assignments, group membership, effective-access analysis, session records, approvals, lifecycle events, and access reviews.",
    "validation": "Expected tasks succeed, excess actions fail, owners approve, logs remain healthy, and rollback is preserved."
  },
  {
    "domain": "Storage and data protection",
    "expected": "Fictional classification, private access, least privilege, encryption, versioning, retention, logging, backup coverage, and restore validation.",
    "common_drift": "Public-capable paths, stale access, disabled versioning, excess retention, missing object logs, or excluded backups.",
    "evidence": "Storage policy, access records, public-access controls, encryption, versions, lifecycle, backup map, and restore tests.",
    "validation": "Approved applications continue, unintended paths fail, logging records expected events, and recovery remains usable."
  },
  {
    "domain": "Network and service exposure",
    "expected": "Fictional segmented zones, private data services, narrow inbound and outbound paths, approved endpoints, controlled administration, and complete flow coverage.",
    "common_drift": "Wider provider routes, general egress, public administrative paths, broad source ranges, shared zones, or missing flow logs.",
    "evidence": "Architecture, routes, rules, endpoints, DNS, flow records, resource policies, identities, and application dependencies.",
    "validation": "Approved paths succeed, denied paths fail, return traffic works, monitoring remains healthy, and rollback is tested."
  },
  {
    "domain": "Logging and detection",
    "expected": "Fictional required sources enabled across accounts, regions, resources, and event categories with healthy delivery, retention, access, ownership, and detections.",
    "common_drift": "Disabled object access, missing private-subnet flow logs, delayed delivery, short retention, unowned rules, or suppressed exceptions.",
    "evidence": "Source matrix, configuration, delivery health, sample events, retention, access, detections, tests, and owner review.",
    "validation": "Expected events arrive, detections fire on test cases, approved suppression works narrowly, and source-health alerts remain active."
  },
  {
    "domain": "Encryption and key management",
    "expected": "Fictional encryption at rest and in transit, named key owners, separated administration, monitored use, recovery access, rotation plan, and approved lifecycle.",
    "common_drift": "Missing key owner, broad key administration, disabled monitoring, pending deletion, untested recovery, or incomplete copy coverage.",
    "evidence": "Encryption settings, key policy, use records, ownership, recovery plan, rotation record, and service configuration.",
    "validation": "Applications and recovery succeed, denied identities remain blocked, key events are logged, and rollback or old-version handling is documented."
  },
  {
    "domain": "Backup and recovery",
    "expected": "Fictional complete coverage, approved schedule, protected identity, encryption, retention, failure alerts, recovery objectives, and sampled restore testing.",
    "common_drift": "Excluded data, green jobs without restore tests, shared identities, missing keys, shortened retention, or overdue recovery validation.",
    "evidence": "Asset map, backup configuration, job history, failures, identities, keys, restore tests, and recovery-owner approvals.",
    "validation": "Approved recovery points restore to a controlled target within documented time and data-loss boundaries."
  },
  {
    "domain": "Ownership and tagging",
    "expected": "Fictional resource owner, business service, environment, data class, cost center, criticality, lifecycle, and support contact are documented.",
    "common_drift": "Unowned resources, stale tags, unknown environment, missing data class, abandoned test systems, or unclear support path.",
    "evidence": "Asset inventory, tags, deployment records, owner directory, billing, support records, and review decisions.",
    "validation": "Every active resource has a confirmed owner and lifecycle decision; abandoned resources are safely removed through change control."
  },
  {
    "domain": "Change and exception governance",
    "expected": "Fictional approved changes, peer review, testing, deployment evidence, emergency procedure, exceptions, expiration, compensating controls, and closure review.",
    "common_drift": "Manual changes, undocumented emergency access, expired exceptions, policy bypass, missing rollback, or absent validation.",
    "evidence": "Change request, reviewer approval, deployment history, configuration history, exception register, tests, and closure record.",
    "validation": "The effective state matches the approved design and all temporary exceptions are reviewed, renewed, or removed."
  }
];
const prioritizationFields = [
  {
    "field": "Exposure",
    "question": "How broadly can the fictional resource or permission be reached or used?",
    "high": "Internet-reachable, tenant-wide, cross-account, or broadly trusted.",
    "limit": "Exposure capability does not prove actual use or compromise."
  },
  {
    "field": "Privilege",
    "question": "What fictional administrative, identity, network, data, key, backup, or recovery power is available?",
    "high": "Tenant administration, role management, key administration, broad data access, or backup deletion.",
    "limit": "Assigned privilege does not prove every action was used."
  },
  {
    "field": "Data sensitivity",
    "question": "Which fictional public, internal, confidential, or restricted data could be affected?",
    "high": "Restricted identity, security, research, or recovery data.",
    "limit": "Data presence does not prove access or disclosure."
  },
  {
    "field": "Reachability and exploitability",
    "question": "Can the fictional condition be practically reached, triggered, or misused under effective controls?",
    "high": "Effective path exists with weak conditions and no compensating control.",
    "limit": "A theoretical path may be blocked by identity, resource, application, or service controls."
  },
  {
    "field": "Business effect",
    "question": "Which fictional availability, confidentiality, integrity, recovery, compliance, cost, or user outcome could be affected?",
    "high": "Critical service outage, restricted-data exposure, identity takeover, or failed recovery.",
    "limit": "Potential effect should remain separate from confirmed impact."
  },
  {
    "field": "Evidence confidence",
    "question": "How strongly do fictional configuration, activity, source-health, owner, and business records support the finding?",
    "high": "Several healthy independent sources agree and alternatives are limited.",
    "limit": "High confidence in a configuration gap may coexist with low confidence in observed impact."
  },
  {
    "field": "Control coverage",
    "question": "Which fictional preventive, detective, recovery, approval, monitoring, and review controls already reduce the risk?",
    "high": "Few controls, weak ownership, missing logs, or no recovery.",
    "limit": "A compensating control should be tested rather than assumed effective."
  },
  {
    "field": "Remediation readiness",
    "question": "Can the fictional change be owned, approved, tested, rolled back, monitored, and completed safely?",
    "high": "Clear owner, safe staged plan, strong validation, and low service risk.",
    "limit": "Urgency should not remove change control or evidence preservation."
  }
];
const exceptionFields = [
  {
    "field": "Baseline requirement",
    "purpose": "States the fictional control or configuration that would normally be required.",
    "example": "Confidential storage must use approved private paths and object-access logging.",
    "quality": "The requirement is specific, testable, and linked to the correct owner."
  },
  {
    "field": "Business reason",
    "purpose": "Explains why the fictional resource cannot currently meet the baseline.",
    "example": "A legacy partner integration requires temporary provider-service routing during migration.",
    "quality": "Convenience alone is not accepted as a strong reason."
  },
  {
    "field": "Scope and owner",
    "purpose": "Defines exactly which fictional accounts, projects, resources, regions, identities, and data are covered and who owns the decision.",
    "example": "One staging collection in one project, owned by the Migration Program Sponsor.",
    "quality": "The exception cannot silently expand to unrelated resources."
  },
  {
    "field": "Compensating controls",
    "purpose": "Lists fictional alternate protections reducing risk during the exception.",
    "example": "Narrow identity, private source network, request logging, daily review, and no public access.",
    "quality": "Each control has evidence, owner, health, and validation."
  },
  {
    "field": "Residual risk",
    "purpose": "Describes the fictional risk that remains after compensating controls.",
    "example": "The wider provider route still increases possible reachability beyond the private-only baseline.",
    "quality": "Residual risk is visible to the approving owner."
  },
  {
    "field": "Expiration and review",
    "purpose": "Defines when the fictional exception ends or must be renewed.",
    "example": "Expires in fourteen fictional days or at migration completion, whichever comes first.",
    "quality": "Expiration is automated or actively monitored where practical."
  },
  {
    "field": "Removal plan",
    "purpose": "Explains how the fictional baseline will be restored.",
    "example": "Move partner traffic to the private endpoint, remove the wider route, validate, monitor, and preserve rollback.",
    "quality": "The plan includes owner, deadline, tests, and completion evidence."
  },
  {
    "field": "Approval and evidence",
    "purpose": "Records fictional reviewers, approvals, source evidence, validation, communication, and version history.",
    "example": "Application, network, storage, privacy, and change owners approve version 2.",
    "quality": "No exception remains undocumented or ownerless."
  }
];
const postureRecords = [
  {
    "id": "NLC-CFG-01",
    "resource": "export-automation-role",
    "domain": "Identity",
    "baseline": "Read approved-content and write export-packages only",
    "current": "Also reads archive-secondary",
    "evidence": "Effective-access map, business workflow, role policy, migration history, and owner review",
    "finding": "Least-privilege drift after migration closure",
    "priority": "High",
    "limit": "No supported misuse or data access"
  },
  {
    "id": "NLC-CFG-02",
    "resource": "archive-secondary",
    "domain": "Storage",
    "baseline": "Private path, versioning, object logging, current owner access",
    "current": "Wider provider route, versioning disabled, object logging disabled, stale partner role",
    "evidence": "Storage policy, route, logging configuration, migration closure, and lifecycle review",
    "finding": "Combined access, monitoring, and recovery drift",
    "priority": "High",
    "limit": "No confirmed read, deletion, sharing, or disclosure"
  },
  {
    "id": "NLC-CFG-03",
    "resource": "export-function-subnet",
    "domain": "Network",
    "baseline": "Outbound only to approved storage and monitoring services",
    "current": "General outbound route also present",
    "evidence": "Route table, endpoint map, function dependencies, flow coverage, and owner requirement",
    "finding": "Unnecessary egress capability",
    "priority": "Medium-High",
    "limit": "No supplied flow shows use of the wider route"
  },
  {
    "id": "NLC-CFG-04",
    "resource": "private-service-subnet",
    "domain": "Logging",
    "baseline": "Flow logging enabled and retained",
    "current": "Flow logging missing",
    "evidence": "Source matrix, subnet inventory, logging configuration, delivery health, and owner review",
    "finding": "Network monitoring blind spot",
    "priority": "High",
    "limit": "The gap does not prove suspicious traffic"
  },
  {
    "id": "NLC-CFG-05",
    "resource": "cloud-security-admin",
    "domain": "Privilege",
    "baseline": "Approved just-in-time activation for occasional administration",
    "current": "Standing tenant-wide privilege",
    "evidence": "Role assignment, task frequency, activation capability, incident procedure, and owner review",
    "finding": "Standing privilege beyond normal need",
    "priority": "High",
    "limit": "Response-time requirements require validation"
  },
  {
    "id": "NLC-CFG-06",
    "resource": "learning-backup-vault",
    "domain": "Recovery",
    "baseline": "All critical datasets covered and restore-tested",
    "current": "One application-storage collection absent from scope",
    "evidence": "Asset map, backup policy, job configuration, recovery plan, and owner records",
    "finding": "Potential backup coverage gap",
    "priority": "Medium-High",
    "limit": "The collection may be reproducible from source"
  },
  {
    "id": "NLC-CFG-07",
    "resource": "support-case-attachments",
    "domain": "Retention",
    "baseline": "Retention matches approved support and privacy schedule",
    "current": "Objects retained longer than the documented business need",
    "evidence": "Lifecycle policy, privacy review, object-age inventory, support requirement, and exception register",
    "finding": "Retention drift without active exception",
    "priority": "Medium",
    "limit": "Contractual or investigation needs may justify some records"
  },
  {
    "id": "NLC-CFG-08",
    "resource": "security-audit-archive",
    "domain": "Recovery",
    "baseline": "Quarterly retrieval validation",
    "current": "Retrieval test overdue",
    "evidence": "Archive policy, test schedule, owner record, access policy, and retention",
    "finding": "Recovery readiness not current",
    "priority": "Medium",
    "limit": "The archive may still be intact and recoverable"
  },
  {
    "id": "NLC-CFG-09",
    "resource": "migration-partner-role",
    "domain": "Identity",
    "baseline": "Partner access expires at project closure",
    "current": "Federation trust and role remain active",
    "evidence": "Project closure, sponsor record, role assignment, federation configuration, and access review",
    "finding": "Stale external access",
    "priority": "High",
    "limit": "No post-project sign-in is supported"
  },
  {
    "id": "NLC-CFG-10",
    "resource": "unowned-test-database",
    "domain": "Ownership",
    "baseline": "Every active database has an owner, environment, data class, lifecycle, logging, and backup decision",
    "current": "Owner tag missing; last deployment ninety fictional days ago",
    "evidence": "Asset inventory, tags, deployment history, billing, connection logs, and support records",
    "finding": "Potential abandoned resource requiring owner confirmation",
    "priority": "Medium",
    "limit": "The resource may support an undocumented test dependency"
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional posture question",
    "detail": "Restate the approved accounts, projects, regions, resources, identities, data, owners, baselines, evidence sources, privacy limits, and prohibited real-system actions.",
    "output": "Posture-review objective and scope."
  },
  {
    "step": "2",
    "title": "Define expected baselines",
    "detail": "Document fictional identity, storage, network, logging, encryption, backup, ownership, tagging, change, exception, and monitoring requirements.",
    "output": "Cloud secure-baseline register."
  },
  {
    "step": "3",
    "title": "Measure effective state and drift",
    "detail": "Compare fictional current configuration, inherited policy, resource controls, service defaults, exceptions, deployment records, and observed behavior.",
    "output": "Configuration-drift and evidence matrix."
  },
  {
    "step": "4",
    "title": "Validate findings and alternatives",
    "detail": "Check fictional source health, owner requirements, business purpose, compensating controls, effective access, practical reachability, and possible false positives.",
    "output": "Validated posture findings with confidence and limits."
  },
  {
    "step": "5",
    "title": "Prioritize by real risk",
    "detail": "Score fictional exposure, privilege, data sensitivity, reachability, business effect, evidence confidence, control coverage, and remediation readiness.",
    "output": "Risk-ranked cloud posture backlog."
  },
  {
    "step": "6",
    "title": "Review exceptions",
    "detail": "Confirm fictional business reason, owner, scope, compensating controls, residual risk, expiration, monitoring, approval, and removal plan.",
    "output": "Exception and residual-risk register."
  },
  {
    "step": "7",
    "title": "Remediate safely",
    "detail": "Assign fictional owners, approvals, staged changes, expected success and failure tests, rollback, monitoring, communication, and completion evidence.",
    "output": "Cloud configuration remediation plan."
  },
  {
    "step": "8",
    "title": "Validate, report, and close",
    "detail": "Confirm fictional effective state, source health, service continuity, residual risk, reviewer approval, lessons learned, and portfolio-safe communication.",
    "output": "Validated closure package."
  }
];
const findings = [
  {
    "id": "NLC-CFG-F01",
    "statement": "The fictional archive-secondary resource has a combined high-priority posture gap involving stale access, wider routing, disabled object logging, and missing versioning.",
    "support": "Identity policy, migration closure, route configuration, storage settings, logging matrix, owner requirements, and lifecycle records.",
    "alternative": "A current migration or recovery exception is possible but no approved exception is supplied.",
    "confidence": "High",
    "limitation": "No evidence supports confirmed data access, deletion, sharing, or disclosure."
  },
  {
    "id": "NLC-CFG-F02",
    "statement": "The export automation role and export-function subnet both exceed the documented workflow through broader storage access and general outbound capability.",
    "support": "Effective-access map, business workflow, route table, endpoint map, application dependencies, and owner review.",
    "alternative": "A troubleshooting or provider-update dependency may justify part of the access but is undocumented.",
    "confidence": "High",
    "limitation": "No supplied record shows use of the extra collection or wider outbound route."
  },
  {
    "id": "NLC-CFG-F03",
    "statement": "The missing private-subnet flow logging is a high-priority evidence gap because it weakens detection and negative network conclusions.",
    "support": "Subnet inventory, source matrix, logging configuration, delivery health, detection requirements, and owner record.",
    "alternative": "Application, DNS, endpoint, and provider records may provide partial evidence.",
    "confidence": "High",
    "limitation": "The blind spot does not independently prove suspicious traffic."
  },
  {
    "id": "NLC-CFG-F04",
    "statement": "The standing cloud-security administrator role can likely move to approved temporary activation, but incident and emergency response requirements must be validated first.",
    "support": "Task frequency, role scope, activation capability, incident procedure, session monitoring, and owner review.",
    "alternative": "Continuous access may be required for a specific on-call duty, but no complete justification is supplied.",
    "confidence": "Medium-High",
    "limitation": "Availability and response-time effects require staged testing."
  },
  {
    "id": "NLC-CFG-F05",
    "statement": "The unowned test database is a medium-priority governance risk until ownership, data class, dependencies, logging, backup, and lifecycle are confirmed.",
    "support": "Missing tags, deployment age, billing, connection records, asset inventory, and support records.",
    "alternative": "The database may support an undocumented test or training dependency.",
    "confidence": "Medium",
    "limitation": "Deletion is not justified until ownership and dependency review are complete."
  },
  {
    "id": "NLC-CFG-F06",
    "statement": "The safest remediation sequence begins with restoring monitoring and ownership clarity before reducing access, routes, retention, and standing privilege.",
    "support": "Source-health gaps, dependency maps, owner records, change-control requirements, rollback needs, and validation plans.",
    "alternative": "Immediate changes may reduce capability faster but create evidence loss or service disruption.",
    "confidence": "High",
    "limitation": "Final order depends on the fictional incident lead and service-owner approvals."
  }
];
const commonMistakes = [
  "Treating every fictional posture alert as a confirmed exploitable vulnerability or incident.",
  "Using current configuration alone without reviewing inheritance, defaults, resource policies, service controls, exceptions, and deployment history.",
  "Prioritizing by severity label without considering exposure, privilege, data sensitivity, reachability, business effect, evidence confidence, and compensating controls.",
  "Treating a broad role, route, public-capable setting, or disabled control as proof that the capability was used.",
  "Ignoring combined risk when several medium findings affect the same identity, resource, data set, or trust boundary.",
  "Ignoring false positives caused by effective denies, private paths, approved exceptions, source delay, or stale posture snapshots.",
  "Closing a finding because a setting changed without validating effective state, service continuity, logs, monitoring, rollback, and owner approval.",
  "Making several unrelated cloud changes at once and losing the ability to identify which change caused impact.",
  "Keeping fictional exceptions without owner, scope, compensating controls, residual risk, expiration, review, and removal plan.",
  "Removing a resource because it appears abandoned without confirming ownership, data class, dependencies, backup, retention, and recovery.",
  "Fixing preventive controls while leaving monitoring and source-health gaps unresolved.",
  "Failing to preserve prior configuration, change evidence, exception history, test results, and closure records.",
  "Assigning remediation to a team that does not own the identity, resource, data, network, key, or business decision.",
  "Using or exposing any real cloud account, resource, role, policy, route, storage service, database, key, log, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What is fictional configuration drift?",
    "choices": [
      "A difference between the approved secure baseline and the current effective cloud configuration.",
      "Any cloud alert.",
      "Any provider maintenance event.",
      "Only a public resource."
    ],
    "answer": 0,
    "explanation": "Drift is measured against an approved expected state."
  },
  {
    "question": "What should happen before accepting a posture finding as true?",
    "choices": [
      "Validate effective state, inheritance, defaults, exceptions, source health, ownership, business need, compensating controls, and supporting evidence.",
      "Trust the severity label.",
      "Change the resource immediately.",
      "Assume the rule is always correct."
    ],
    "answer": 0,
    "explanation": "Posture tools identify conditions that still require context and evidence review."
  },
  {
    "question": "Which statement about a broad fictional role is strongest?",
    "choices": [
      "The role exceeds the documented need and should be remediated; use, misuse, and impact are not proven by assignment alone.",
      "The role proves a breach.",
      "Every permission was used.",
      "The provider caused the issue."
    ],
    "answer": 0,
    "explanation": "Configuration capability and observed activity are different evidence questions."
  },
  {
    "question": "What makes a fictional exception defensible?",
    "choices": [
      "A clear baseline, business reason, narrow scope, owner, compensating controls, residual risk, expiration, review, removal plan, and approval evidence.",
      "A comment saying temporary.",
      "No expiration date.",
      "A high-level owner name only."
    ],
    "answer": 0,
    "explanation": "Exceptions should be controlled risk decisions, not silent permanent bypasses."
  },
  {
    "question": "Why should remediation readiness affect priority?",
    "choices": [
      "A finding with a clear owner, safe staged plan, validation, rollback, and monitoring may be corrected sooner without unnecessary service risk.",
      "Easy fixes are always highest risk.",
      "Difficult fixes should be ignored.",
      "Readiness replaces impact analysis."
    ],
    "answer": 0,
    "explanation": "Priority combines risk with the ability to reduce that risk safely."
  },
  {
    "question": "What proves a fictional configuration finding is closed?",
    "choices": [
      "The effective state matches the approved design, validation passes, monitoring is healthy, residual risk is accepted, owners approve, and completion evidence is preserved.",
      "The dashboard turns green once.",
      "The ticket is marked done.",
      "The resource was restarted."
    ],
    "answer": 0,
    "explanation": "Closure requires verified control effectiveness and ownership, not only a status change."
  },
  {
    "question": "What makes a fictional cloud posture finding defensible?",
    "choices": [
      "It links baseline, effective state, evidence, alternatives, confidence, limitations, risk factors, owners, remediation, validation, rollback, monitoring, and closure.",
      "It relies on one automated score.",
      "It assumes every possible path was used.",
      "It ignores exceptions and dependencies."
    ],
    "answer": 0,
    "explanation": "Defensible posture analysis connects technical condition, context, evidence, risk, and safe action."
  }
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>

      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function CloudConfigurationMisconfigurationDefensePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I13
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.6 Cloud Configuration and Misconfiguration Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders define fictional cloud baselines, validate
            posture findings, identify drift, prioritize combined risk, review
            exceptions, coordinate safe remediation, and prove closure without
            touching any real cloud account or configuration.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I13: Cloud Security Basics"
          lessonTitle="Cloud Configuration and Misconfiguration Defense"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud configuration and posture records.",
            "I will not sign in to, query, scan, configure, test, change, disable, delete, deploy to, or inspect any real cloud tenant, account, project, identity, network, storage service, database, key, backup, log, or private record.",
            "I will compare fictional effective state with an approved baseline rather than trusting one posture alert or dashboard score.",
            "I will distinguish a configuration gap from observed use, exploitation, compromise, intent, or confirmed impact.",
            "I will preserve fictional owners, alternatives, confidence, limitations, dependencies, exceptions, validation, rollback, monitoring, and portfolio safety.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Posture Alert Is a Question, Not a Final Verdict"
        >
          <p className="leading-8">
            The fictional Northbridge Learning Cloud posture review identifies
            broad access, wider routing, missing logging, disabled versioning,
            standing privilege, incomplete backup scope, excess retention,
            overdue recovery testing, stale partner access, and an unowned test
            database. Some conditions combine into a high-priority risk. Others
            may have operational explanations or compensating controls. Every
            alert requires evidence, ownership, practical-risk analysis, and a
            safe change plan before action.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak posture management
              </p>

              <p className="mt-2 leading-7">
                Sort by severity label, change every flagged setting
                immediately, ignore dependencies, and close findings when the
                dashboard becomes green.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional posture management
              </p>

              <p className="mt-2 leading-7">
                Define the baseline, validate effective state, correlate
                evidence, prioritize real risk, review exceptions, stage
                changes, validate outcomes, preserve rollback, and prove closure.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Cloud Risk Often Comes from Several Small Drifts Working Together"
        >
          <p className="leading-8">
            A fictional storage collection with stale access may be concerning.
            The same collection becomes more serious when it also has wider
            routing, missing object logging, and no versioning. Strong posture
            management looks across identity, storage, network, logging,
            encryption, backup, ownership, and change history to identify
            combined risk rather than treating every finding as isolated.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Baseline–State–Risk–Action Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Baseline", "Which fictional configuration, owner, policy, control, evidence, exception, and review state should exist?"],
              ["State", "Which fictional effective settings, inherited controls, routes, roles, logs, versions, backups, tags, and exceptions actually exist?"],
              ["Risk", "Which fictional exposure, privilege, data sensitivity, reachability, business effect, source health, alternatives, and compensating controls apply?"],
              ["Action", "Which fictional owner, approval, staged change, validation, rollback, monitoring, residual risk, communication, and closure evidence are required?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Cloud Baseline, Drift, Exception, and Remediation Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Secure Baselines
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Baseline Domains and Their Common Drift
          </h2>

          <div className="mt-6 grid gap-5">
            {baselineDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.domain}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Expected baseline
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.expected}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Common drift
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.common_drift}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Validation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.validation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Risk Prioritization
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for Ranking Fictional Cloud Findings
          </h2>

          <div className="mt-6 grid gap-5">
            {prioritizationFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Review question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.question}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      High-priority example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.high}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Important limit
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Exception Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fields for a Defensible Fictional Exception
          </h2>

          <div className="mt-6 grid gap-5">
            {exceptionFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Purpose
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.purpose}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Fictional example
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.example}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Posture Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Configuration Findings
          </h2>

          <div className="mt-6 grid gap-5">
            {postureRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.resource}
                  </h3>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.domain}
                  </span>

                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                    {item.priority}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Expected baseline", item.baseline],
                    ["Current effective state", item.current],
                    ["Evidence", item.evidence],
                    ["Finding", item.finding],
                    ["Limitation", item.limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Defensive Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Validate, Prioritize, Remediate, and Prove Closure
          </h2>

          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Cloud Posture Dashboard"
          subtitle="Training dashboard for fictional cloud configuration evidence only."
          metrics={[
            {
              label: "Posture findings reviewed",
              value: "10",
              note: "Identity, storage, network, logging, recovery, retention, and ownership findings are mapped.",
            },
            {
              label: "High-priority findings",
              value: "5",
              note: "Combined storage drift, broad access, missing flow coverage, standing privilege, and stale partner access require action.",
            },
            {
              label: "Confirmed compromises",
              value: "0",
              note: "The supplied fictional evidence supports control gaps but no confirmed compromise or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Misconfigurations Affect the Same Confidential Storage Resource"
          severity="High"
          time="11:42 AM"
          source="Fake Cloud Posture Console"
          details="The fictional archive-secondary collection has stale partner and service-role access, a wider provider-service route, disabled object-access logging, and disabled versioning."
          recommendation="Treat the combined condition as a high-priority posture finding without claiming misuse. Restore monitoring and ownership first, confirm dependencies and exceptions, stage access and route reductions, enable recovery protection, validate approved workflows and denied paths, preserve rollback, monitor, and document residual risk and closure evidence."
        />

        <FakeLogPanel
          title="Fake Northbridge Configuration Review Records"
          logs={[
            "09:00 REVIEW scope='cloud configuration and posture'",
            "09:08 BASELINE domains='identity,storage,network,logging,encryption,backup,ownership,change'",
            "09:15 DRIFT export-role='archive-secondary extra read'",
            "09:20 DRIFT archive-secondary='wider route,logging off,versioning off'",
            "09:27 DRIFT private-subnet='flow logging missing'",
            "09:34 DRIFT cloud-security-admin='standing privilege'",
            "09:41 DRIFT backup-vault='application collection missing'",
            "09:48 DRIFT support-attachments='retention exceeds schedule'",
            "09:55 DRIFT partner-role='active after project closure'",
            "10:02 DRIFT test-database='owner missing'",
            "10:10 FINDING combined_storage_risk='high'",
            "10:18 FINDING confirmed_compromise='not supported'",
            "10:25 ORDER monitoring='restore first' ownership='confirm'",
            "10:33 ACTION access_route_recovery='staged'",
            "10:41 VALIDATE approved_paths='required' denied_paths='required'",
            "10:50 ROLLBACK prior_config='preserved'",
            "11:02 CLOSE criteria='effective state + tests + monitoring + approvals'",
            "11:42 PORTFOLIO fictionalization='required'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Configuration Findings and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.statement}
                  </h3>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.alternative}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="How Should the Archive-Secondary Finding Be Prioritized?"
          evidence={[
            "The fictional collection is classified confidential.",
            "A completed migration partner role remains active.",
            "The export automation role has broader read access than required.",
            "The resource has a wider provider-service route than the private-only baseline.",
            "Object-access logging and versioning are disabled.",
            "No supplied record supports post-migration reads, deletion, sharing, or disclosure.",
            "Owners can restore monitoring first and then stage access, route, and recovery changes.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The combined access, routing, monitoring, and recovery drift makes this a high-priority posture finding; misuse and disclosure are not proven, and remediation should be staged with monitoring restored first.",
            "The resource was definitely breached.",
            "The partner stole confidential data.",
            "No action is required because no misuse is confirmed.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion recognizes combined risk, preserves activity limits, and selects a safe remediation order."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Configuration Defense"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build the Northbridge Cloud Posture and Remediation Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Baselines, Drift, Priority, Exceptions, Remediation, and Closure
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud configuration and misconfiguration-defense
                review.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Secure-baseline register for identity, storage, network, logging, encryption, backup, ownership, and change governance.</li>
                <li>Effective-state and configuration-drift matrix.</li>
                <li>False-positive, alternative, source-health, and compensating-control review.</li>
                <li>Risk-ranked posture backlog using all eight prioritization fields.</li>
                <li>Exception register with owner, scope, controls, residual risk, expiration, review, and removal plan.</li>
                <li>Staged remediation sequence with approvals, dependencies, tests, rollback, monitoring, and communication.</li>
                <li>Validation and closure evidence for each fictional finding.</li>
                <li>Technical summary, leadership summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not change, test, query, or inspect any real cloud
            configuration. Complete the lab only with fictional records
            displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A High-Severity Posture Alert Appears"
          scenario="A fictional posture tool marks a storage resource high severity because of a wider route and disabled logging, but the effective identity and resource policies still limit access."
          choices={[
            {
              label: "Choice A",
              response:
                "Validate effective state, practical reachability, data class, owners, source health, compensating controls, alternatives, and combined findings before prioritizing and changing the resource.",
              outcome:
                "Best defensive choice. The alert is treated as evidence requiring context.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare a confirmed breach from the severity label.",
              outcome:
                "Unsupported. Severity does not prove use or impact.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the finding because identity controls exist.",
              outcome:
                "Unsafe. Network and monitoring drift still deserve review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Unowned Test Database Appears Abandoned"
          scenario="The fictional database has no owner tag and no recent deployment, but an undocumented test dependency may still exist."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict unnecessary access, identify likely owners, review connections, data class, backups, logs, billing, dependencies, and retention, then approve decommissioning only with rollback and evidence.",
              outcome:
                "Best defensive choice. Governance improves without unsafe deletion.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete the database immediately because it looks unused.",
              outcome:
                "Unsafe. Ownership and dependency are unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave it permanently because deletion might be risky.",
              outcome:
                "Weak. Unowned resources require a documented lifecycle decision.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Configuration and Misconfiguration-Defense Checklist"
          items={[
            "I can define fictional baselines for identity, storage, network, logging, encryption, backup, ownership, tagging, exceptions, and change control.",
            "I can compare fictional baseline with effective state rather than only one visible setting.",
            "I can validate posture findings using configuration history, identity, network, storage, application, logging, business, owner, and source-health evidence.",
            "I can distinguish a configuration capability from observed use, compromise, intent, or confirmed impact.",
            "I can prioritize findings using exposure, privilege, data sensitivity, reachability, business effect, confidence, control coverage, and remediation readiness.",
            "I can identify combined risk when several findings affect the same resource, identity, data set, or trust boundary.",
            "I can review exceptions with business reason, narrow scope, compensating controls, residual risk, expiration, review, removal, and approval.",
            "I can design staged remediation with owners, approvals, validation, rollback, monitoring, communication, and completion evidence.",
            "I can prove closure through effective-state review, expected tests, healthy monitoring, residual-risk acceptance, and owner approval.",
            "I will use only fictional evidence and never access or expose real cloud configurations, accounts, resources, owners, logs, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.6 Mini Quiz: Cloud Configuration and Misconfiguration Defense"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Configuration and Misconfiguration-Defense Package for the Northbridge Learning Cloud. Include secure baselines, effective-state review, drift matrix, posture findings, false-positive analysis, alternatives, confidence, limitations, risk ranking, combined-risk analysis, exception register, compensating controls, residual risk, staged remediation, validation, rollback, monitoring, closure evidence, technical summary, leadership summary, and a portfolio-safety statement."
          tips={[
            "Use only fictional accounts, identities, roles, resources, networks, storage, databases, keys, logs, owners, dates, and decisions.",
            "Do not treat a posture score, severity label, broad permission, route, or disabled control as proof of confirmed use or compromise.",
            "Restore evidence and ownership clarity before making changes that could remove visibility or disrupt services.",
            "Make every remediation approved, staged, reversible, validated, monitored, and supported by closure evidence.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud posture management compares approved baselines with effective configuration, not just one visible setting.",
            "Automated findings require context, source health, ownership, dependencies, exceptions, and evidence validation.",
            "Several moderate drifts on one resource may create a higher combined risk.",
            "Capability, exposure, observed use, compromise, and confirmed impact are separate conclusions.",
            "Exceptions should be narrow, owned, temporary, monitored, compensated, reviewed, and linked to a removal plan.",
            "A finding is not closed until the effective state, service behavior, monitoring, residual risk, and owner approval are verified.",
            "Portfolio artifacts should use fully fictional configuration evidence and never expose real cloud environments.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I13
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}