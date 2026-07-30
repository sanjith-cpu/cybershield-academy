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

const trackPath = "/high-school/advanced";
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const previousLesson =
  `${modulePath}/handling-sensitive-information-ethically`;
const nextLesson =
  `${modulePath}/conflicts-of-interest-and-trust`;

const objectives = [
  "Explain why safe cybersecurity research requires explicit authorization, controlled environments, defined purpose, approved methods, supervision, stop conditions, and documented ownership.",
  "Distinguish fictional simulations, local practice labs, isolated test environments, approved organizational research, classroom activities, and prohibited real-world testing.",
  "Design a fictional research boundary covering systems, identities, data, tools, network access, time, location, evidence, changes, communication, and emergency stops.",
  "Recognize common boundary failures such as using real targets, real credentials, uncontrolled internet access, copied confidential data, excessive permissions, weak cleanup, and unclear supervision.",
  "Create a portfolio-ready safe research environment plan using only invented systems, accounts, logs, tools, actions, dates, decisions, and outcomes."
];
const vocabulary = [
  [
    "Research boundary",
    "The fictional systems, data, identities, actions, methods, tools, networks, time, locations, outputs, and limits approved for a security-learning or research task."
  ],
  [
    "Safe environment",
    "A controlled fictional or isolated setting designed to reduce risk to real people, systems, data, services, and networks."
  ],
  [
    "Simulation",
    "An invented scenario that represents security decisions using fake evidence without interacting with a real target."
  ],
  [
    "Sandbox concept",
    "A restricted fictional or local environment separated from important systems so learning activities cannot affect real operations."
  ],
  [
    "Isolation",
    "Separating a training environment from production systems, private networks, real credentials, and unnecessary internet access."
  ],
  [
    "Synthetic data",
    "Completely invented records created for practice instead of copied or lightly modified real information."
  ],
  [
    "Test identity",
    "A fictional or approved training account with limited privileges, no real personal data, and a defined owner and cleanup plan."
  ],
  [
    "Method boundary",
    "The specific approved research techniques, tools, queries, observations, or changes that may be used."
  ],
  [
    "Network boundary",
    "The approved connectivity rules for the fictional environment, including whether outside internet, internal networks, or other systems are reachable."
  ],
  [
    "Change boundary",
    "The exact fictional configuration, file, account, or control changes permitted and how they will be reversed."
  ],
  [
    "Emergency stop",
    "A clearly defined action that immediately pauses the fictional exercise when unexpected access, data, connectivity, instability, or safety concerns appear."
  ],
  [
    "Reset state",
    "A known fictional baseline to which the training environment can be safely restored after an exercise."
  ],
  [
    "Snapshot concept",
    "A controlled copy of a fictional environment state used for rollback and repeatable training."
  ],
  [
    "Supervision requirement",
    "The role, availability, and approval needed from a fictional teacher, mentor, owner, or lab administrator during an activity."
  ],
  [
    "Research log",
    "A fictional record of purpose, authorization, environment, actions, times, evidence, decisions, stops, cleanup, and validation."
  ],
  [
    "Exit criteria",
    "The conditions proving the fictional exercise is complete, the environment is reset, evidence is handled, and no unsafe access remains."
  ]
];
const environmentTypes = [
  {
    "type": "Fictional paper or webpage simulation",
    "description": "Students analyze invented logs, alerts, diagrams, messages, dashboards, policies, and decisions without touching any system.",
    "best_for": "Ethics, authorization, risk, incident response, architecture, threat modeling, triage, policy, and communication.",
    "required_controls": "Complete fictionalization, evidence labels, no real identifiers, hidden answers, safe decision boundaries, and teacher review.",
    "main_limit": "Cannot prove how a real technical control behaves."
  },
  {
    "type": "Local offline practice environment",
    "description": "A classroom-owned fictional environment runs on a device without access to real organizational networks or data.",
    "best_for": "Basic configuration review, safe logging demonstrations, file organization, access concepts, and reset practice.",
    "required_controls": "Local-only networking, fictional accounts, harmless files, snapshots, least privilege, supervision, and cleanup.",
    "main_limit": "Local behavior may not match complex real systems."
  },
  {
    "type": "Isolated virtual lab",
    "description": "A fictional training network uses separate virtual systems with controlled connections and no path to production.",
    "best_for": "Architecture, segmentation, logging, identity, cloud simulations, monitoring, and approved defensive changes.",
    "required_controls": "Network isolation, approved images, synthetic data, test identities, snapshots, resource limits, monitoring, and reset.",
    "main_limit": "Misconfiguration can weaken isolation if boundaries are not validated."
  },
  {
    "type": "Vendor-provided training platform",
    "description": "A provider supplies approved fictional challenges and systems designed for learning.",
    "best_for": "Structured labs, guided defensive analysis, certification preparation, and repeatable exercises.",
    "required_controls": "Use only assigned targets, follow platform rules, avoid outside systems, protect account access, and respect time and content limits.",
    "main_limit": "The learner must not assume the platform authorizes activity outside the assigned environment."
  },
  {
    "type": "Organization-approved test environment",
    "description": "A fictional organization authorizes limited work in a separate non-production environment it owns.",
    "best_for": "Owner-approved control validation, architecture review, change testing, logging, recovery, and policy checks.",
    "required_controls": "Written scope, named assets, owners, approved methods, test data, maintenance window, rollback, monitoring, and signoff.",
    "main_limit": "Non-production systems may still contain sensitive data or connect to real services."
  },
  {
    "type": "Tabletop or discussion exercise",
    "description": "Participants make fictional decisions using a scenario, role map, timeline, evidence cards, and injects.",
    "best_for": "Incident leadership, communication, legal-risk awareness, supplier coordination, continuity, and executive decision-making.",
    "required_controls": "Fictional facts, role boundaries, clear facilitator, no real confidential examples, documented decisions, and after-action review.",
    "main_limit": "Tests decision processes rather than technical implementation."
  },
  {
    "type": "Controlled code or configuration review",
    "description": "Students inspect invented or approved training code and settings without executing actions against real systems.",
    "best_for": "Secure design, access control, logging, error handling, secrets concepts, and policy mapping.",
    "required_controls": "Harmless sample code, no real secrets, offline review, approved repository, read-only mode, and review notes.",
    "main_limit": "Static review may miss runtime behavior."
  },
  {
    "type": "Prohibited uncontrolled real-world activity",
    "description": "Any access, scanning, testing, bypass, investigation, change, credential use, or data collection involving a real system without explicit written authorization.",
    "best_for": "Nothing in CyberShield Academy.",
    "required_controls": "Do not proceed. Stop, leave the system untouched, preserve no unauthorized data, and ask a teacher or authorized adult for guidance.",
    "main_limit": "Unsafe, unethical, and potentially unlawful."
  }
];
const boundaryDimensions = [
  {
    "dimension": "Purpose",
    "define": "The exact fictional learning or research question and expected defensive outcome.",
    "include": "One approved question, owner, audience, and decision need.",
    "exclude": "General curiosity, unrelated exploration, or proving worst-case impact.",
    "validation": "A reviewer can state why every allowed action supports the purpose."
  },
  {
    "dimension": "Assets",
    "define": "The exact fictional devices, applications, files, accounts, networks, diagrams, or platforms included.",
    "include": "Named training assets and assigned challenge targets only.",
    "exclude": "Connected systems, personal devices, school production systems, supplier systems, or public internet targets.",
    "validation": "The asset list matches the lab diagram and platform assignment."
  },
  {
    "dimension": "Identities",
    "define": "The fictional student, test, service, administrator, reviewer, and emergency accounts permitted.",
    "include": "Approved test identities with limited privilege and known owners.",
    "exclude": "Real personal, employee, student, shared, or privileged production accounts.",
    "validation": "No real credentials or inherited access appear in the environment."
  },
  {
    "dimension": "Data",
    "define": "The exact fictional records, fields, files, messages, logs, and classifications that may be used.",
    "include": "Synthetic data created for the exercise.",
    "exclude": "Copied real logs, screenshots, employee records, school records, private messages, customer data, or secrets.",
    "validation": "A reviewer can trace every data item to a fictional source or approved generator."
  },
  {
    "dimension": "Methods",
    "define": "The approved observations, queries, defensive checks, configuration reviews, simulations, and changes.",
    "include": "Only actions listed in the lab guide and authorization.",
    "exclude": "Unlisted scanning, exploitation, persistence, credential testing, bypass, or invasive collection.",
    "validation": "The research log contains only approved method identifiers."
  },
  {
    "dimension": "Tools",
    "define": "The approved fictional dashboards, local utilities, training platform features, scripts, and documentation tools.",
    "include": "Teacher-approved tools configured for the lab.",
    "exclude": "Unknown downloads, unapproved scripts, external scanning services, suspicious files, or real credentials.",
    "validation": "Tool inventory, version, source, configuration, and owner are documented."
  },
  {
    "dimension": "Connectivity",
    "define": "Which networks and external services the fictional environment may reach.",
    "include": "Local-only or explicitly approved training connections.",
    "exclude": "Production networks, personal cloud accounts, school systems, supplier environments, or unrestricted internet access.",
    "validation": "Connectivity checks confirm only the approved paths exist."
  },
  {
    "dimension": "Changes",
    "define": "Which fictional files, settings, accounts, rules, or services may be modified and how they are reversed.",
    "include": "Narrow approved changes with snapshots and rollback.",
    "exclude": "Broad or irreversible changes, production changes, destructive actions, or changes to evidence sources.",
    "validation": "The environment returns to the documented baseline after reset."
  },
  {
    "dimension": "Time and supervision",
    "define": "Start, end, timezone, location, check-ins, mentor availability, and expiration.",
    "include": "Approved supervised work window.",
    "exclude": "Unsupervised continuation, after-hours access, personal-device work, or expired sessions.",
    "validation": "Start, stop, and review times appear in the research log."
  },
  {
    "dimension": "Evidence and outputs",
    "define": "What fictional screenshots, logs, notes, reports, diagrams, and portfolio artifacts may be produced.",
    "include": "Minimum-necessary fictional outputs with approved storage and audience.",
    "exclude": "Real secrets, private data, unresolved vulnerabilities, or uncontrolled copies.",
    "validation": "Outputs pass privacy, fictionalization, accuracy, and sharing review."
  },
  {
    "dimension": "Stop conditions",
    "define": "The events requiring immediate pause, disconnection, notification, evidence protection, or reset.",
    "include": "Unexpected real data, outside connectivity, service instability, unknown accounts, scope conflict, or unsafe tool behavior.",
    "exclude": "Continuing because the activity is interesting or almost complete.",
    "validation": "Every participant can state and execute the stop procedure."
  },
  {
    "dimension": "Cleanup and closure",
    "define": "How accounts, files, snapshots, exports, logs, access, connectivity, and working copies are removed or reset.",
    "include": "Owner-approved reset, deletion, validation, signoff, and residual-risk record.",
    "exclude": "Leaving test accounts, open access, temporary files, or copied evidence behind.",
    "validation": "Baseline, access, connectivity, storage, logging, and owner signoff are confirmed."
  }
];
const environmentRoles = [
  {
    "role": "Student researcher",
    "responsibility": "Follow the fictional lab guide, use approved assets and methods, keep a research log, stop when boundaries change, and report mistakes.",
    "may_decide": "Whether to pause, ask for clarification, record an observation, or recommend a next step.",
    "may_not_decide": "To add targets, change network access, use real data, increase privilege, or continue after a stop condition.",
    "evidence": "Research log, checklist, screenshots of fictional evidence, and reflection."
  },
  {
    "role": "Teacher or facilitator",
    "responsibility": "Define the fictional learning purpose, environment, rules, supervision, expected outputs, stop conditions, and review.",
    "may_decide": "Whether the activity begins, pauses, resumes, resets, or requires additional support.",
    "may_not_decide": "To authorize work on systems the teacher or school does not own.",
    "evidence": "Lesson plan, scope statement, role assignments, and review record."
  },
  {
    "role": "Lab administrator",
    "responsibility": "Build the fictional environment, isolate networks, create test identities, load synthetic data, monitor health, and perform reset.",
    "may_decide": "How approved technical controls implement the lab boundary.",
    "may_not_decide": "To expand research purpose or data use without owner approval.",
    "evidence": "Architecture, configuration, account inventory, connectivity test, and reset record."
  },
  {
    "role": "System or platform owner",
    "responsibility": "Own the fictional or approved training assets, define acceptable use, approve methods, and set service or resource limits.",
    "may_decide": "Which assets and actions are permitted in the owned environment.",
    "may_not_decide": "To authorize activity on external or third-party systems outside ownership.",
    "evidence": "Ownership record, platform rules, asset list, and approval."
  },
  {
    "role": "Data owner",
    "responsibility": "Approve fictional data categories, fields, use, access, storage, sharing, retention, and deletion.",
    "may_decide": "Which synthetic or approved training data supports the exercise.",
    "may_not_decide": "To ignore other owners' system, service, contract, or legal boundaries.",
    "evidence": "Data inventory, classification, use approval, and deletion rule."
  },
  {
    "role": "Safety or security reviewer",
    "responsibility": "Check fictional authorization, isolation, methods, tools, data, privileges, stop conditions, evidence handling, and cleanup.",
    "may_decide": "Whether safety requirements are satisfied or additional controls are needed.",
    "may_not_decide": "To approve the business purpose or accept residual risk outside delegated authority.",
    "evidence": "Safety review, risk matrix, test results, and signoff."
  },
  {
    "role": "Mentor or technical reviewer",
    "responsibility": "Guide safe learning, review reasoning, help interpret fictional evidence, and prevent unsupported or unsafe actions.",
    "may_decide": "Whether a student's analysis is technically supported within the approved exercise.",
    "may_not_decide": "To provide real-world target access or bypass the teacher and owner boundary.",
    "evidence": "Feedback, revision notes, and learning assessment."
  },
  {
    "role": "Risk owner",
    "responsibility": "Review fictional residual risk, resource limits, continuity, exceptions, and whether the lab should continue or change.",
    "may_decide": "Which approved risk treatment is acceptable.",
    "may_not_decide": "To permit unlawful, unauthorized, deceptive, or privacy-invasive activity.",
    "evidence": "Risk decision, owner, deadline, safeguards, and acceptance."
  }
];
const safeLabWorkflow = [
  {
    "step": "1",
    "title": "Define the learning question",
    "questions": "What fictional defensive skill, concept, decision, or artifact should the exercise produce?",
    "output": "One-sentence learning purpose.",
    "stop": "Pause if the goal is to break into, exploit, or prove harm to a real system."
  },
  {
    "step": "2",
    "title": "Choose the safest environment",
    "questions": "Can the goal be met with a simulation, static evidence, tabletop, offline local lab, or isolated training platform?",
    "output": "Environment-selection rationale.",
    "stop": "Do not use a more realistic environment when a safer one teaches the same objective."
  },
  {
    "step": "3",
    "title": "Document authorization and ownership",
    "questions": "Who owns the fictional assets, data, platform, network, tools, changes, outputs, and residual risk?",
    "output": "Authorization and owner map.",
    "stop": "Pause if any asset or data source lacks clear ownership."
  },
  {
    "step": "4",
    "title": "Define boundaries",
    "questions": "Which systems, identities, data, tools, methods, networks, time, locations, changes, outputs, and audiences are included and excluded?",
    "output": "Complete boundary matrix.",
    "stop": "Pause if connected or external resources are described vaguely."
  },
  {
    "step": "5",
    "title": "Build and validate controls",
    "questions": "Are isolation, test accounts, least privilege, synthetic data, snapshots, monitoring, resource limits, and secure storage working?",
    "output": "Pre-lab control validation.",
    "stop": "Do not start if outside connectivity, real credentials, real data, or excessive privilege appears."
  },
  {
    "step": "6",
    "title": "Assign supervision and emergency stops",
    "questions": "Who is present, who may approve changes, how does a student stop, and who responds to unexpected behavior?",
    "output": "Supervision and stop plan.",
    "stop": "Do not begin if the required reviewer is unavailable."
  },
  {
    "step": "7",
    "title": "Run only approved actions",
    "questions": "Does each fictional action match the purpose, method list, target list, data rules, and time window?",
    "output": "Timestamped research log.",
    "stop": "Stop immediately for scope expansion, unknown systems, real data, instability, or tool behavior outside expectation."
  },
  {
    "step": "8",
    "title": "Preserve safe evidence",
    "questions": "Which fictional outputs are necessary, where may they be stored, what must be redacted, and who may receive them?",
    "output": "Evidence and output register.",
    "stop": "Do not capture real credentials, private information, sensitive internal details, or uncontrolled screenshots."
  },
  {
    "step": "9",
    "title": "Reset and clean up",
    "questions": "Were test accounts, changes, files, network access, temporary data, exports, and working copies removed or restored?",
    "output": "Reset and cleanup checklist.",
    "stop": "Do not close while leftover access, data, changes, or connectivity remains."
  },
  {
    "step": "10",
    "title": "Validate, reflect, and improve",
    "questions": "Did the environment return to baseline, did the learning objective occur, what failed safely, and what should change next time?",
    "output": "Closure, validation, reflection, revision, and residual-risk record.",
    "stop": "Do not claim success without baseline, access, data, connectivity, and owner validation."
  }
];
const controlTests = [
  {
    "control": "Isolation",
    "question": "Can the fictional environment reach any unapproved network, service, device, account, or data source?",
    "test": "Compare the intended diagram with approved connectivity checks.",
    "pass": "Only documented training paths are available.",
    "fail_action": "Stop, disconnect, notify the lab administrator, and investigate the boundary."
  },
  {
    "control": "Synthetic data",
    "question": "Is every fictional record invented or generated for the exercise?",
    "test": "Review data origin, identifiers, wording, dates, and metadata.",
    "pass": "No real or copied confidential material appears.",
    "fail_action": "Stop use, quarantine the material, notify the owner, and replace it with synthetic data."
  },
  {
    "control": "Test identities",
    "question": "Are all accounts fictional, limited, owned, and separate from real users?",
    "test": "Compare account inventory, privilege, owner, expiration, and cleanup plan.",
    "pass": "Only approved training identities exist.",
    "fail_action": "Disable or remove the unexpected identity through the owner-approved process."
  },
  {
    "control": "Least privilege",
    "question": "Does each fictional role have only the permissions needed for the assigned task?",
    "test": "Review role-to-permission matrix and approved and denied behavior.",
    "pass": "Unapproved actions are denied.",
    "fail_action": "Reduce privilege, review access history, and revalidate."
  },
  {
    "control": "Tool approval",
    "question": "Are all fictional tools known, sourced, configured, and permitted?",
    "test": "Compare tool inventory with the lab guide and safety review.",
    "pass": "No unapproved downloads, scripts, or external services are used.",
    "fail_action": "Stop the tool, preserve the research log, and request review."
  },
  {
    "control": "Snapshot and rollback",
    "question": "Can approved fictional changes be reversed to a known baseline?",
    "test": "Perform owner-approved restore verification before the exercise.",
    "pass": "The environment returns to the documented baseline.",
    "fail_action": "Do not begin change activity until rollback is reliable."
  },
  {
    "control": "Monitoring",
    "question": "Can the fictional administrator see unexpected connectivity, resource use, account activity, changes, or errors?",
    "test": "Review lab-health and activity records.",
    "pass": "Required events are visible and timestamps are trustworthy.",
    "fail_action": "Pause the lab and restore visibility before continuing."
  },
  {
    "control": "Cleanup",
    "question": "Are fictional test accounts, files, exports, changes, access, and temporary data removed after the exercise?",
    "test": "Run the closure checklist and compare against the initial inventory.",
    "pass": "No unauthorized leftovers remain.",
    "fail_action": "Keep the lab open under owner control until cleanup is complete and validated."
  }
];
const evidenceMatrix = [
  {
    "id": "RB-01",
    "source": "Fictional lab authorization",
    "observation": "Approves local analysis of supplied logs and diagrams in LAB-ADV-01 from 3:00 PM to 5:00 PM.",
    "supports": "A defined environment, evidence set, purpose, and time window are authorized.",
    "limits": "Does not authorize internet scanning, school-system access, real credentials, or activity after 5:00 PM.",
    "research_use": "Use as the primary boundary and stop at expiration."
  },
  {
    "id": "RB-02",
    "source": "Fictional network diagram",
    "observation": "LAB-ADV-01 should connect only to two isolated training systems and a local logging service.",
    "supports": "Expected connectivity is limited and reviewable.",
    "limits": "Does not prove the actual environment matches the diagram.",
    "research_use": "Validate real lab connectivity before starting."
  },
  {
    "id": "RB-03",
    "source": "Fictional connectivity record",
    "observation": "An unexpected route to an external public service appears.",
    "supports": "The isolation boundary may be broken.",
    "limits": "Does not prove the route was used or that data left the lab.",
    "research_use": "Stop the exercise, disconnect, notify the administrator, and investigate."
  },
  {
    "id": "RB-04",
    "source": "Fictional data inventory",
    "observation": "One file contains realistic employee names and message text with unknown origin.",
    "supports": "The file may not be synthetic and may create privacy or confidentiality risk.",
    "limits": "Does not prove the data is real or intentionally copied.",
    "research_use": "Quarantine the file, stop analysis, notify the data owner, and replace it with invented data."
  },
  {
    "id": "RB-05",
    "source": "Fictional account inventory",
    "observation": "A test administrator account has broader privilege than the exercise requires.",
    "supports": "Least-privilege controls are weak.",
    "limits": "Does not prove misuse occurred.",
    "research_use": "Reduce privilege, review activity, and revalidate before continuing."
  },
  {
    "id": "RB-06",
    "source": "Fictional tool list",
    "observation": "A student added an unapproved script downloaded from an unknown source.",
    "supports": "Tool provenance and behavior are unverified.",
    "limits": "Does not prove the script is malicious.",
    "research_use": "Do not run it; remove it from the workflow and request review."
  },
  {
    "id": "RB-07",
    "source": "Fictional snapshot test",
    "observation": "The lab restores to its initial configuration and all temporary accounts disappear.",
    "supports": "Rollback and account cleanup work for the tested baseline.",
    "limits": "Does not prove every working copy or external artifact was removed.",
    "research_use": "Complete the file, output, access, and retention checklist before closure."
  },
  {
    "id": "RB-08",
    "source": "Fictional closure review",
    "observation": "Connectivity, accounts, data, changes, logs, storage, and owner signoff all match the approved baseline.",
    "supports": "The documented exit criteria are satisfied.",
    "limits": "Does not prove future exercises will remain safe without repeated validation.",
    "research_use": "Close the exercise and record lessons and residual uncertainty."
  }
];
const unsafeSignals = [
  "The fictional exercise requires a real website, school system, public IP address, real account, or outside organization.",
  "The instructions use phrases such as test anything related, explore freely, or prove maximum impact.",
  "Real credentials, private messages, employee records, student records, screenshots, or copied internal logs appear.",
  "The training environment can reach production, personal cloud services, public targets, or unrestricted internet resources.",
  "A student is asked to download or run an unknown script, tool, file, or attachment.",
  "The exercise requires disabling security controls, hiding activity, avoiding logs, or bypassing supervision.",
  "The lab uses more privilege than the task requires.",
  "No owner, teacher, facilitator, lab administrator, or emergency contact is available.",
  "There is no snapshot, rollback, reset, cleanup, or closure process.",
  "The activity continues after the time window expires.",
  "Unexpected sensitive data, unknown accounts, unstable service, or unexplained connectivity appears.",
  "The portfolio draft contains real-looking identifiers, screenshots, messages, system labels, or unresolved vulnerabilities.",
  "The student is encouraged to keep findings secret from teachers or owners.",
  "The exercise treats a fictional lab as permission for similar actions on real systems."
];
const quizQuestions = [
  {
    "question": "What is the strongest environment for teaching a fictional ethics decision that requires no technical behavior?",
    "choices": [
      "A paper or webpage simulation using invented evidence.",
      "A real public website.",
      "A school production system.",
      "An unknown external server."
    ],
    "answer": 0,
    "explanation": "Use the safest environment capable of teaching the objective."
  },
  {
    "question": "A fictional isolated lab unexpectedly shows a route to a public service. What should happen first?",
    "choices": [
      "Continue because no data loss is confirmed.",
      "Stop the exercise, disconnect the lab through the approved process, notify the administrator, and investigate the boundary.",
      "Use the route to test whether it works.",
      "Ignore it until cleanup."
    ],
    "answer": 1,
    "explanation": "Unexpected connectivity is a stop condition even when actual use is unconfirmed."
  },
  {
    "question": "Why should a fictional lab use synthetic data?",
    "choices": [
      "Synthetic data eliminates every possible risk.",
      "It reduces privacy and confidentiality risk while preserving learning value.",
      "It allows students to avoid documentation.",
      "It automatically authorizes every method."
    ],
    "answer": 1,
    "explanation": "Invented data supports safe learning without exposing real information."
  },
  {
    "question": "A student finds an unapproved script from an unknown source. What is strongest?",
    "choices": [
      "Run it only once.",
      "Do not run it, remove it from the workflow, preserve the research note, and request review.",
      "Upload it to another platform.",
      "Ask a friend to test it."
    ],
    "answer": 1,
    "explanation": "Unknown tools should not be executed in the lab without approval and provenance review."
  },
  {
    "question": "What does a successful snapshot restore prove?",
    "choices": [
      "Every future lab will be safe.",
      "The tested environment can return to the documented baseline for that restore test.",
      "No working copies exist anywhere.",
      "The lab may connect to production."
    ],
    "answer": 1,
    "explanation": "Rollback validation is bounded and does not replace broader cleanup checks."
  },
  {
    "question": "Which event is a professional stop condition?",
    "choices": [
      "The student wants more time.",
      "A realistic employee-data file with unknown origin appears in the fictional lab.",
      "The exercise is interesting.",
      "The student has completed half the worksheet."
    ],
    "answer": 1,
    "explanation": "Unexpected possibly real sensitive data requires immediate pause and owner review."
  },
  {
    "question": "What makes a safe-research portfolio artifact appropriate for public sharing?",
    "choices": [
      "Real names are replaced.",
      "Screenshots are cropped.",
      "Every organization, asset, identity, tool, record, network, date, action, decision, and outcome is invented and reviewed.",
      "The real target is described without its URL."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization and review are required."
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A1
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

export default function ResearchBoundariesAndSafeEnvironmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Safe Research Design
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.6 Research Boundaries and Safe Environments
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders design fictional, isolated,
            owner-approved learning environments with synthetic data, test
            identities, limited tools, safe connectivity, supervision,
            emergency stops, rollback, cleanup, and validated closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A1: Advanced Cyber Ethics and Legal Boundaries"
          lessonTitle="Research Boundaries and Safe Environments"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional or explicitly approved training environments, systems, identities, records, tools, networks, actions, dates, and outcomes.",
            "I understand that a classroom lesson or fictional lab does not authorize similar activity on a real system.",
            "I will not access, scan, test, alter, bypass, investigate, or disclose any real system without explicit written authorization.",
            "I will not use real credentials, private messages, employee records, student records, customer data, suspicious files, copied logs, or confidential screenshots.",
            "I will stop immediately for unexpected outside connectivity, real data, unknown accounts, excessive privilege, unstable service, unsafe tool behavior, or unclear ownership.",
            "I will complete reset, cleanup, evidence handling, validation, reflection, and owner signoff before declaring the exercise complete.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Training Lab Is Safe Only When Its Boundaries Are Proven"
        >
          <p className="leading-8">
            A fictional isolated lab should connect only to two training
            systems and a local logging service. Before the exercise begins,
            the connectivity record reveals an unexpected route to a public
            service. A data file also contains realistic employee names, and a
            test administrator account has excessive privilege. Professional
            research does not continue because the environment is labeled a
            lab. It pauses until isolation, data origin, privilege, ownership,
            and reset controls are corrected and validated.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Unsafe assumption
              </p>
              <p className="mt-2 leading-7">
                The environment is called a sandbox, so any action inside it is
                safe and authorized.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional validation
              </p>
              <p className="mt-2 leading-7">
                Prove ownership, isolation, synthetic data, least privilege,
                approved tools, monitoring, rollback, supervision, stop
                conditions, and cleanup before starting.
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
          title="Safe Research Protects Real People from Learning Mistakes"
        >
          <p className="leading-8">
            Cybersecurity learning often involves realistic systems,
            identities, access rules, logs, changes, and incidents. Without
            careful design, a student can accidentally reach a real service,
            expose private data, use excessive privilege, damage evidence,
            leave accounts active, or copy sensitive details into a portfolio.
            Safe environments preserve learning value while preventing those
            mistakes from affecting real people and organizations.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Choose the safest method",
                "Use a simulation or static evidence when the objective does not require a live technical environment.",
              ],
              [
                "Prove the boundary",
                "Labels such as test or sandbox are not enough; isolation, data, access, tools, and rollback require validation.",
              ],
              [
                "Close completely",
                "Reset systems, remove accounts and copies, validate connectivity, and document signoff.",
              ],
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

        <SectionCard
          eyebrow="Core Model"
          title="Authorize → Isolate → Limit → Monitor → Stop → Reset"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Authorize", "Define the fictional purpose, owners, assets, data, methods, time, outputs, and limits in writing."],
              ["Isolate", "Separate the training environment from production, personal accounts, real credentials, and unnecessary networks."],
              ["Limit", "Use synthetic data, test identities, least privilege, approved tools, resource limits, and narrow changes."],
              ["Monitor", "Track connectivity, accounts, actions, resource use, changes, errors, evidence, and source health."],
              ["Stop", "Pause immediately when real data, external reachability, instability, unknown identities, or scope conflict appears."],
              ["Reset", "Restore the baseline, remove leftovers, validate controls, document closure, and record lessons."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Safe Research Design"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Environment Selection
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Choose the Safest Environment That Teaches the Objective
          </h2>

          <div className="mt-6 grid gap-5">
            {environmentTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.type}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Best for", item.best_for],
                    ["Required controls", item.required_controls],
                    ["Main limit", item.main_limit],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.type}-${label}`}
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
            Research Boundary Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Twelve Dimensions Every Safe Lab Should Define
          </h2>

          <div className="mt-6 grid gap-5">
            {boundaryDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Define", item.define],
                    ["Include", item.include],
                    ["Exclude", item.exclude],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.dimension}-${label}`}
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
            Roles and Authority
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Safe Research Requires Shared but Distinct Ownership
          </h2>

          <div className="mt-6 grid gap-5">
            {environmentRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Responsibility", item.responsibility],
                    ["May decide", item.may_decide],
                    ["May not decide", item.may_not_decide],
                    ["Evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
            Safe Lab Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Learning Goal to Validated Closure
          </h2>

          <div className="mt-6 grid gap-5">
            {safeLabWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Control Validation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Controls to Test before and after the Exercise
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {controlTests.map((item) => (
              <article
                key={item.control}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.control}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4">
                  {[
                    ["Test", item.test],
                    ["Pass condition", item.pass],
                    ["Failure action", item.fail_action],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.control}-${label}`}
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

        <FakeDashboardCard
          title="Fake Northbridge Safe Research Dashboard"
          subtitle="Fictional isolation, data, identity, tool, rollback, and cleanup review for training only."
          metrics={[
            {
              label: "Approved assets",
              value: "3",
              note: "Two isolated training systems and one local logging service are in scope.",
            },
            {
              label: "Boundary failures",
              value: "3",
              note: "Unexpected external route, possibly non-synthetic data, and excessive administrator privilege require correction.",
            },
            {
              label: "Lab status",
              value: "Paused",
              note: "The exercise cannot begin until controls are corrected and revalidated.",
            },
          ]}
        />

        <FakeAlertCard
          title="Safe Research Boundary Failed Pre-Lab Validation"
          severity="High"
          time="2:42 PM"
          source="Fake Northbridge Lab Safety Console"
          details="The fictional lab can reach an unapproved public service, contains a data file with realistic employee details of unknown origin, and includes an overprivileged test administrator account."
          recommendation="Keep the exercise paused. Disconnect the external path, quarantine and replace the questionable data, reduce privilege, review activity, validate monitoring and rollback, and obtain owner and safety signoff before starting."
        />

        <FakeLogPanel
          title="Fake Safe Research Validation Timeline"
          logs={[
            "14:00 AUTH lab='LAB-ADV-01'",
            "14:01 AUTH methods='supplied-log-analysis'",
            "14:02 AUTH window='15:00-17:00'",
            "14:10 NETWORK expected='train-a,train-b,local-log'",
            "14:12 NETWORK external-route='detected'",
            "14:13 STOP isolation='failed'",
            "14:18 DATA file='employee-sample.csv'",
            "14:19 DATA origin='unknown'",
            "14:20 STOP data-safety='failed'",
            "14:25 ACCOUNT test-admin privilege='excessive'",
            "14:26 STOP least-privilege='failed'",
            "14:30 TOOL inventory='approved-only'",
            "14:35 SNAPSHOT restore='successful'",
            "14:38 MONITORING lab-events='healthy'",
            "14:40 STATUS exercise='paused'",
            "14:42 ESCALATION owners='lab,data,safety'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Starting the Lab
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Research use", item.research_use],
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

        <AnalyzeEvidenceCard
          title="Should the Fictional Exercise Begin?"
          question="Should the Fictional Exercise Begin?"
          evidence={[
            "The authorization permits local supplied-log analysis in LAB-ADV-01 only.",
            "The expected network includes two training systems and one local logging service.",
            "An unexpected route to a public service exists.",
            "One data file contains realistic employee details with unknown origin.",
            "A test administrator account has excessive privilege.",
            "Monitoring and snapshot restore work correctly.",
            "The lab, data, and safety owners are available for review.",
          ]}
          options={[
            "Keep the exercise paused, correct connectivity, replace questionable data, reduce privilege, review activity, revalidate every control, and obtain owner signoff.",
            "Begin because monitoring and rollback work.",
            "Use the external route only for harmless testing.",
            "Ignore the data file because it may be fictional.",
          ]}
          bestAnswer={0}
          explanation="A safe lab requires every critical boundary to pass. Good monitoring and rollback do not cancel failed isolation, data, and privilege controls."
        />

        <SectionCard
          eyebrow="Unsafe Research Signals"
          title="Stop When Any of These Patterns Appear"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {unsafeSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {signal}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Design a Fictional Safe Research Environment"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Rebuild the Northbridge Lab Boundary
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not connect to,
                test, scan, access, modify, investigate, or disclose any real
                system. Do not use real credentials, copied data, suspicious
                files, private messages, internal screenshots, or unknown
                scripts.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Learning purpose and safest-environment decision.</li>
                <li>Authorization and ownership map.</li>
                <li>Asset, identity, data, tool, method, network, change, time, and output boundaries.</li>
                <li>Isolation and connectivity diagram.</li>
                <li>Synthetic-data and test-identity inventory.</li>
                <li>Least-privilege, tool-approval, monitoring, and supervision plan.</li>
                <li>Emergency stops and escalation tree.</li>
                <li>Snapshot, rollback, reset, cleanup, and deletion checklist.</li>
                <li>Pre-lab and post-lab validation matrix.</li>
                <li>Reflection, revision history, residual risk, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The plan is only a fictional educational artifact. It does not grant
            permission for any real-world access, testing, scanning, tool use,
            account use, data collection, modification, bypass, investigation,
            or disclosure.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Unexpected Internet Connectivity Appears"
          scenario="The fictional isolated lab should be local-only, but the connectivity record shows a route to an external public service. No supplied record proves the route was used."
          choices={[
            {
              label: "Choice A",
              response: "Stop the exercise, disconnect through the approved process, preserve the validation evidence, notify the lab administrator, identify the cause, and revalidate isolation.",
              outcome: "Best professional choice. Unexpected reachability is a boundary failure even before confirmed use.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Continue because no data transfer is confirmed.",
              outcome: "Risky. The environment no longer matches the approved network boundary.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Test the route to see what it can reach.",
              outcome: "Unsafe. That would expand activity beyond authorization.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Realistic Employee File Appears"
          scenario="A fictional training folder contains a file with realistic employee names and private message text. Its origin is unknown."
          choices={[
            {
              label: "Choice A",
              response: "Stop use, restrict access, preserve the fact that the file appeared, notify the data owner, determine origin, and replace it with fully synthetic content.",
              outcome: "Best professional choice. The response protects privacy without assuming intent or authenticity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Use the file because the lab is fictional.",
              outcome: "Risky. Environment labels do not prove data is safe.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Publish a screenshot with names blurred.",
              outcome: "Unsafe. Partial redaction does not resolve origin, ownership, and sensitivity.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Safe Research Environment Checklist"
          items={[
            "I can state the fictional learning purpose and explain why the chosen environment is the safest option that teaches it.",
            "I can identify fictional platform, system, data, tool, network, change, communication, evidence, and risk owners.",
            "I can list exact in-scope and out-of-scope assets, identities, data, tools, methods, networks, changes, locations, time, outputs, and audiences.",
            "I can verify fictional isolation from production systems, personal accounts, real credentials, public targets, and unnecessary internet access.",
            "I can verify that every fictional record is synthetic or generated for the exercise.",
            "I can confirm fictional test identities, least privilege, expiration, ownership, monitoring, and cleanup.",
            "I can verify fictional tool source, approval, configuration, version, purpose, and permitted use.",
            "I can define fictional supervision, check-ins, approval gates, emergency stops, escalation, and owner availability.",
            "I can maintain a timestamped fictional research log of purpose, actions, evidence, decisions, stops, changes, and validation.",
            "I can complete fictional snapshot, rollback, reset, account removal, file cleanup, access review, connectivity validation, and deletion verification.",
            "I can stop immediately for unexpected real data, external connectivity, unknown identities, excessive privilege, instability, scope conflict, unsafe tools, or expired permission.",
            "I will never treat a fictional lab, training platform, classroom assignment, or portfolio artifact as authorization for real-world activity.",
          ]}
        />

        <MiniQuiz
          title="A1.6 Mini Quiz: Research Boundaries and Safe Environments"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Safe Research Environment Plan for the Northbridge training lab. Include the learning purpose, environment-selection rationale, written authorization, ownership map, in-scope and out-of-scope assets, identities, data, tools, methods, connectivity, changes, time, locations, outputs, audiences, synthetic-data plan, test-account plan, least privilege, monitoring, supervision, emergency stops, evidence handling, snapshots, rollback, reset, cleanup, pre-lab validation, post-lab validation, residual risk, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Use the safest fictional environment capable of teaching the learning objective.",
            "Make isolation, synthetic data, test identities, least privilege, approved tools, supervision, stop conditions, and cleanup visible.",
            "Include at least one failed boundary check, revise the design, and explain why the correction matters.",
            "Separate what the fictional evidence confirms from what it cannot prove.",
            "Keep every organization, system, identity, record, tool, network, date, action, decision, and outcome completely invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Safe cybersecurity research starts with a defined learning purpose and the safest environment capable of teaching it.",
            "A system labeled test, lab, sandbox, or training is not automatically isolated, authorized, or safe.",
            "Written boundaries should cover assets, identities, data, methods, tools, connectivity, changes, time, supervision, evidence, outputs, stop conditions, cleanup, and closure.",
            "Synthetic data, test identities, least privilege, approved tools, monitoring, snapshots, and rollback reduce risk.",
            "Unexpected external connectivity, possibly real data, excessive privilege, unknown identities, unsafe tools, and unstable service are stop conditions.",
            "Connected or reachable systems are not automatically in scope.",
            "Students must never continue testing to prove impact after the authorized boundary is reached.",
            "Cleanup includes accounts, files, exports, temporary data, changes, network access, snapshots, storage, and evidence handling.",
            "A successful restore test does not prove every copy, artifact, access path, or future exercise is safe.",
            "Every CyberShield safe-research artifact must remain fully fictional, defensive, authorized, isolated, privacy-safe, non-operational, and incapable of guiding real-world misuse.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A1
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