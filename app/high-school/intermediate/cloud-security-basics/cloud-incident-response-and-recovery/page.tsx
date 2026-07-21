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
const previousLesson = `${modulePath}/cloud-configuration-and-misconfiguration-defense`;
const nextLesson = `${modulePath}/cloud-security-basics-lab`;

const objectives = [
  "Explain how fictional cloud incident response differs from traditional response through shared responsibility, control-plane actions, service identities, managed services, provider coordination, regions, accounts, and temporary resources.",
  "Build a fictional cloud incident plan with scope, roles, evidence preservation, containment, eradication, recovery, validation, communication, and closure.",
  "Prioritize fictional cloud containment actions while preserving evidence, service availability, owner authority, rollback, source health, and recovery options.",
  "Distinguish direct observations, supported findings, alternatives, confidence, limitations, potential impact, and confirmed impact during a cloud incident.",
  "Create a portfolio-safe fictional cloud incident-response package with timeline, action log, evidence map, owner decisions, recovery validation, lessons learned, and executive communication."
];
const vocabulary = [
  [
    "Cloud incident",
    "A fictional event or condition affecting cloud identities, configurations, data, networks, services, logs, backups, costs, availability, or governance that requires coordinated review and response."
  ],
  [
    "Incident lead",
    "The fictional person accountable for coordinating scope, priorities, decisions, owners, communication, evidence, and closure."
  ],
  [
    "Evidence custodian",
    "The fictional owner responsible for preserving supplied records, lineage, copies, access, integrity, and transfer notes."
  ],
  [
    "Shared responsibility",
    "The fictional division of response duties among provider, customer, application owner, identity owner, data owner, network owner, partner, and user."
  ],
  [
    "Control-plane containment",
    "A fictional response action affecting cloud management access, roles, policies, configuration, sessions, resources, or provider administrative interfaces."
  ],
  [
    "Data-plane containment",
    "A fictional response action limiting access to applications, storage, databases, queues, functions, or network services."
  ],
  [
    "Containment",
    "A fictional action intended to limit further risk while preserving evidence, essential service, recovery options, and owner authority."
  ],
  [
    "Eradication",
    "A fictional action that removes the confirmed cause or unsafe condition after scope and dependencies are understood."
  ],
  [
    "Recovery",
    "The fictional process of restoring approved services, identities, data, configurations, monitoring, and business operations to a validated safe state."
  ],
  [
    "Rollback",
    "A fictional approved method for returning to a prior known-safe state if a response or recovery action causes unexpected effects."
  ],
  [
    "Closure criteria",
    "The fictional evidence and approvals required to confirm that containment, recovery, monitoring, residual risk, lessons learned, and ownership are complete."
  ]
];
const incidentRoles = [
  {
    "role": "Incident lead",
    "responsibility": "Sets fictional priorities, scope, severity, decision authority, communication rhythm, and closure criteria.",
    "evidence": "Incident charter, decision log, severity record, owner map, status updates, and closure approval.",
    "risk": "Technical changes occur without a coordinated objective or decision owner.",
    "handoff": "Receives technical findings and authorizes major containment, recovery, and communication decisions."
  },
  {
    "role": "Cloud technical lead",
    "responsibility": "Coordinates fictional identity, storage, network, application, configuration, logging, key, backup, and provider actions.",
    "evidence": "Technical plan, dependency map, action sequence, test results, rollback notes, and technical summary.",
    "risk": "Several teams change related controls without understanding cross-service dependencies.",
    "handoff": "Works with service owners and evidence custodian before each material change."
  },
  {
    "role": "Identity owner",
    "responsibility": "Reviews fictional users, service identities, roles, sessions, federation, privileged access, emergency accounts, and lifecycle actions.",
    "evidence": "Role map, session records, access review, approval, expiration, and identity-change validation.",
    "risk": "Overly broad account disablement interrupts services or destroys useful session context.",
    "handoff": "Coordinates identity containment with application and recovery owners."
  },
  {
    "role": "Data and storage owner",
    "responsibility": "Protects fictional data, storage policies, versions, backups, retention, sharing, encryption, keys, and recovery points.",
    "evidence": "Data map, storage policy, object audit, versions, backup records, key use, and restore validation.",
    "risk": "A storage change removes evidence, breaks recovery, or affects unrelated datasets.",
    "handoff": "Approves data-plane containment and recovery-point use."
  },
  {
    "role": "Network owner",
    "responsibility": "Reviews fictional routes, rules, endpoints, gateways, DNS, load balancers, segmentation, egress, and flow coverage.",
    "evidence": "Architecture, effective reachability, flow records, change history, validation, and rollback.",
    "risk": "Immediate route removal disrupts business services or hides later evidence.",
    "handoff": "Coordinates staged network containment with application, monitoring, and provider teams."
  },
  {
    "role": "Application and service owner",
    "responsibility": "Explains fictional workloads, service dependencies, deployment versions, identities, expected behavior, data flows, and user impact.",
    "evidence": "Application logs, deployment history, dependency map, health checks, owner requirements, and recovery test.",
    "risk": "Responders misinterpret normal automation or change a dependency without understanding business effect.",
    "handoff": "Validates whether containment and recovery preserve required service functions."
  },
  {
    "role": "Monitoring and evidence owner",
    "responsibility": "Preserves fictional source health, event timing, copies, retention, integrity, correlation, alerts, and evidence lineage.",
    "evidence": "Source matrix, collection notes, hashes or integrity records, timeline, export record, and access log.",
    "risk": "Responders overwrite, disable, or misinterpret the evidence needed to support findings.",
    "handoff": "Provides evidence boundaries and collection status before major changes."
  }
];
const responsePhases = [
  {
    "phase": "1. Preparation",
    "goal": "Ensure fictional roles, contacts, evidence sources, approvals, backups, emergency access, provider support, and communication paths are ready before an incident.",
    "actions": "Review playbooks, test emergency paths, confirm source health, validate recovery, assign owners, preserve templates, and run exercises.",
    "evidence": "Readiness checklist, test results, contact list, source matrix, recovery report, and owner approval.",
    "decision": "Is the organization ready to investigate and act without improvising unsafe changes?"
  },
  {
    "phase": "2. Detection and triage",
    "goal": "Determine whether a fictional alert or report represents a real condition requiring incident coordination.",
    "actions": "Validate source health, review direct observations, identify affected assets and identities, set initial severity, and preserve evidence.",
    "evidence": "Alert, source records, owner confirmation, change history, identity context, asset map, and triage notes.",
    "decision": "What is directly observed, what remains uncertain, and which immediate risks require controlled action?"
  },
  {
    "phase": "3. Scope and analysis",
    "goal": "Map the fictional blast radius across identities, accounts, projects, regions, resources, data, services, partners, and users.",
    "actions": "Correlate identity, control-plane, network, storage, database, application, configuration, key, backup, provider, and business evidence.",
    "evidence": "Timeline, relationship map, effective access, reachability, storage records, deployment history, provider case, and source-health limits.",
    "decision": "Which resources are affected, potentially affected, or unsupported by the current evidence?"
  },
  {
    "phase": "4. Containment",
    "goal": "Limit further fictional risk while preserving evidence, essential service, recovery options, and owner authority.",
    "actions": "Restrict sessions, narrow roles, isolate paths, pause risky automation, preserve versions, protect logs, and coordinate provider controls.",
    "evidence": "Action request, approval, pre-change state, test plan, result, monitoring, rollback, and action log.",
    "decision": "Which action reduces the most immediate risk with the least unnecessary disruption or evidence loss?"
  },
  {
    "phase": "5. Eradication and correction",
    "goal": "Remove the confirmed fictional cause, unsafe configuration, stale access, unapproved deployment, or compromised dependency.",
    "actions": "Correct roles, routes, policies, configurations, deployments, secrets, keys, lifecycle, and monitoring under change control.",
    "evidence": "Root-cause finding, approved change, peer review, validation, rollback, and updated baseline.",
    "decision": "Has the supported cause been removed without creating new risk?"
  },
  {
    "phase": "6. Recovery",
    "goal": "Restore fictional services, identities, data, monitoring, and business operations from approved safe states.",
    "actions": "Select recovery points, restore services, validate access and paths, test data integrity, monitor, and gradually return traffic.",
    "evidence": "Recovery-point approval, restore record, health checks, user test, monitoring, and owner signoff.",
    "decision": "Is the service safe, functional, observable, and ready for controlled return?"
  },
  {
    "phase": "7. Communication",
    "goal": "Provide accurate fictional updates matched to audience, evidence, authority, privacy, and timing.",
    "actions": "Share technical status, leadership summary, user impact, provider status, decisions, next steps, and known limitations.",
    "evidence": "Approved update, recipient list, decision log, timing, reviewer, and communication archive.",
    "decision": "What is known, unknown, changing, and approved for each audience?"
  },
  {
    "phase": "8. Closure and lessons learned",
    "goal": "Confirm fictional residual risk, monitoring, ownership, evidence, documentation, improvement actions, and review completion.",
    "actions": "Validate closure criteria, hold review, update baselines and playbooks, assign improvements, preserve portfolio-safe artifacts, and schedule follow-up.",
    "evidence": "Closure checklist, final report, lessons learned, action owners, due dates, validation, and executive approval.",
    "decision": "Can the case be closed with sustainable controls and accountable follow-up?"
  }
];
const containmentQuestions = [
  {
    "question": "What immediate fictional risk is reduced?",
    "strong": "State the exact identity, network, storage, application, data, key, logging, or recovery risk the action addresses.",
    "risk": "A broad action creates disruption without clearly reducing the supported condition."
  },
  {
    "question": "What evidence could be lost?",
    "strong": "Identify fictional sessions, volatile events, logs, versions, configurations, application state, provider records, and timing context that require preservation.",
    "risk": "Disabling or deleting resources removes the evidence needed to understand scope."
  },
  {
    "question": "Which service dependencies could break?",
    "strong": "Map fictional workload identities, routes, endpoints, databases, storage, keys, providers, monitoring, backup, and user workflows.",
    "risk": "Containment causes a wider outage than the original condition."
  },
  {
    "question": "Who has authority?",
    "strong": "Assign fictional incident, identity, data, network, application, provider, change, and business owners.",
    "risk": "A responder makes an irreversible decision outside approved authority."
  },
  {
    "question": "Can the action be staged?",
    "strong": "Use fictional narrow scope, temporary restriction, controlled group, partial traffic, test account, or limited region when practical.",
    "risk": "A global one-step change increases uncertainty and rollback difficulty."
  },
  {
    "question": "How will success and failure be tested?",
    "strong": "Define fictional expected allowed behavior, expected denied behavior, health checks, logs, user tests, and owner approval.",
    "risk": "The team cannot tell whether the risk was reduced or the service was damaged."
  },
  {
    "question": "What is the rollback?",
    "strong": "Preserve fictional prior configuration, recovery path, approval, trigger, owner, and time limit for reversal.",
    "risk": "A failed change leaves the service in an unknown state."
  },
  {
    "question": "How will the action be monitored?",
    "strong": "Use fictional identity, control-plane, network, storage, application, source-health, and business indicators during and after containment.",
    "risk": "The team changes controls but loses visibility into result and recurrence."
  }
];
const incidentRecords = [
  {
    "id": "NLC-IR-01",
    "record": "Privileged role activation",
    "observation": "The fictional cloud-security administrator role was activated from the approved management zone.",
    "meaning": "A privileged session occurred and requires approval and action correlation.",
    "limit": "Activation alone does not prove misuse or incident impact."
  },
  {
    "id": "NLC-IR-02",
    "record": "Approval workflow",
    "observation": "A matching approved request exists, but the record arrived fifteen fictional minutes after the identity event.",
    "meaning": "The initial no-approval alert was explained by source delay.",
    "limit": "The delayed source still creates a detection-timing weakness."
  },
  {
    "id": "NLC-IR-03",
    "record": "Archive-secondary posture",
    "observation": "The fictional storage collection has stale partner access, broader automation access, wider routing, disabled object logging, and disabled versioning.",
    "meaning": "Several control gaps affect one confidential data resource.",
    "limit": "No confirmed object read, deletion, sharing, or disclosure is supported."
  },
  {
    "id": "NLC-IR-04",
    "record": "Export function behavior",
    "observation": "The fictional export function attempted its normal job and generated repeated authorization failures after a role change.",
    "meaning": "A defensive change affected the approved workload.",
    "limit": "The failure does not show malicious activity."
  },
  {
    "id": "NLC-IR-05",
    "record": "Network flow evidence",
    "observation": "Covered subnets show approved application-to-storage and application-to-database paths; one private-service subnet lacks flow coverage.",
    "meaning": "Observed covered traffic is expected, but one network evidence boundary remains.",
    "limit": "No negative conclusion can include the uncovered subnet with high confidence."
  },
  {
    "id": "NLC-IR-06",
    "record": "Storage access evidence",
    "observation": "Covered collections show expected application and support activity; archive-secondary object access is not logged.",
    "meaning": "No unexpected covered access is shown, but the main storage resource has an evidence gap.",
    "limit": "Silence for archive-secondary cannot prove no activity."
  },
  {
    "id": "NLC-IR-08",
    "record": "Provider support case",
    "observation": "The fictional provider reports no provider-controlled service incident in the reviewed region and time window.",
    "meaning": "Current evidence does not support a provider-platform cause.",
    "limit": "Provider confirmation does not evaluate customer-controlled identities, routes, storage policies, or application behavior."
  },
  {
    "id": "NLC-IR-09",
    "record": "Configuration history",
    "observation": "The extra storage role and wider route were introduced during a completed migration and never removed.",
    "meaning": "Temporary migration controls became persistent customer-owned drift.",
    "limit": "The history does not prove later misuse."
  },
  {
    "id": "NLC-IR-10",
    "record": "User and service impact",
    "observation": "The fictional learning portal remained available, but export jobs failed during one containment attempt.",
    "meaning": "Containment reduced service functionality and required rollback.",
    "limit": "No broader user-facing outage or data-loss impact is supported."
  }
];
const actionLog = [
  {
    "time": "10:00",
    "owner": "Incident Lead",
    "action": "Opened fictional cloud incident coordination and confirmed scope.",
    "evidence": "Alert, role activation, storage posture, source-health matrix",
    "result": "Initial severity High due to combined control gaps, not confirmed compromise.",
    "rollback": "Not applicable"
  },
  {
    "time": "10:08",
    "owner": "Evidence Custodian",
    "action": "Preserved supplied identity, control-plane, storage, network, application, configuration, backup, and provider records.",
    "evidence": "Collection register and evidence lineage",
    "result": "Evidence set frozen for the training case.",
    "rollback": "Original fictional records retained"
  },
  {
    "time": "10:25",
    "owner": "Monitoring Owner",
    "action": "Documented missing archive-secondary object logs and private-subnet flow coverage.",
    "evidence": "Source-health matrix",
    "result": "Negative conclusions limited; monitoring restoration prioritized.",
    "rollback": "Not applicable"
  },
  {
    "time": "10:49",
    "owner": "Application Owner",
    "action": "Ran fictional staged export validation after role reduction.",
    "evidence": "Application logs and job results",
    "result": "Export failed because one undocumented read dependency remained.",
    "rollback": "Prior role restored"
  },
  {
    "time": "11:02",
    "owner": "Application and Storage Owners",
    "action": "Mapped undocumented dependency and approved replacement data path.",
    "evidence": "Application configuration and storage workflow",
    "result": "New least-privilege design prepared.",
    "rollback": "Existing workflow preserved until retest"
  },
  {
    "time": "11:18",
    "owner": "Network Owner",
    "action": "Staged removal of wider provider-service route for a controlled test workload.",
    "evidence": "Route map, endpoint configuration, test plan",
    "result": "Approved private path succeeded; alternate path denied.",
    "rollback": "Prior route preserved during observation window"
  },
  {
    "time": "11:35",
    "owner": "Monitoring Owner",
    "action": "Restored object-access logging and private-subnet flow coverage in the fictional design.",
    "evidence": "Logging configuration and expected test events",
    "result": "Required events arrived and source health passed.",
    "rollback": "Prior logging configuration preserved"
  },
  {
    "time": "11:52",
    "owner": "Incident Lead",
    "action": "Approved final staged identity, route, versioning, and monitoring corrections.",
    "evidence": "Validation results, owner approvals, rollback plans",
    "result": "Containment and correction sequence authorized.",
    "rollback": "Each control retains separate rollback"
  }
];
const workflowSteps = [
  {
    "step": "1",
    "title": "Confirm the fictional incident charter",
    "detail": "Restate the approved objective, severity, assets, identities, data, accounts, regions, time window, owners, evidence sources, privacy limits, and prohibited real-system actions.",
    "output": "Incident charter and decision authority."
  },
  {
    "step": "2",
    "title": "Preserve evidence and source health",
    "detail": "Record fictional source enablement, event and receipt times, copies, lineage, access, retention, integrity, limitations, and provider support needs.",
    "output": "Evidence register and source-health map."
  },
  {
    "step": "3",
    "title": "Build scope and blast radius",
    "detail": "Map fictional identities, roles, sessions, accounts, projects, regions, resources, data, routes, services, partners, users, and dependencies.",
    "output": "Incident scope and relationship map."
  },
  {
    "step": "4",
    "title": "Separate facts from hypotheses",
    "detail": "Document fictional direct observations, supported findings, alternatives, confidence, limitations, potential impact, confirmed impact, and missing evidence.",
    "output": "Evidence-backed incident analysis."
  },
  {
    "step": "5",
    "title": "Choose controlled containment",
    "detail": "Compare fictional identity, network, storage, application, key, logging, and provider actions using risk reduction, evidence preservation, dependencies, authority, validation, and rollback.",
    "output": "Approved containment plan."
  },
  {
    "step": "6",
    "title": "Correct and recover",
    "detail": "Remove fictional confirmed causes, restore approved services and data, validate identities and paths, monitor, and return operations gradually.",
    "output": "Eradication and recovery record."
  },
  {
    "step": "7",
    "title": "Communicate by audience",
    "detail": "Provide fictional technical, leadership, owner, provider, partner, user, and review updates matched to evidence, privacy, authority, and timing.",
    "output": "Incident communication package."
  },
  {
    "step": "8",
    "title": "Validate closure and lessons learned",
    "detail": "Confirm fictional residual risk, monitoring, owner approval, evidence preservation, updated baselines, playbooks, action owners, due dates, and portfolio safety.",
    "output": "Closure and improvement package."
  }
];
const findings = [
  {
    "id": "NLC-IR-F01",
    "statement": "The fictional privileged-role alert was explained by delayed approval delivery, and the supplied session records show only approved policy-viewing activity.",
    "support": "Identity activation, source network, authentication, approval event and receipt times, control-plane activity, and owner review.",
    "alternative": "An unrecorded action is possible only outside the verified control-plane coverage.",
    "confidence": "High",
    "limitation": "The finding applies only to the supplied session and healthy evidence window."
  },
  {
    "id": "NLC-IR-F02",
    "statement": "Archive-secondary contains a combined customer-owned control gap involving stale access, wider routing, disabled object logging, and disabled versioning.",
    "support": "Role policies, migration closure, route configuration, storage settings, source matrix, owner requirements, and configuration history.",
    "alternative": "A current approved migration or recovery exception is possible but not supplied.",
    "confidence": "High",
    "limitation": "No confirmed object read, deletion, sharing, disclosure, or malicious intent is supported."
  },
  {
    "id": "NLC-IR-F03",
    "statement": "The first role-reduction containment attempt disrupted the fictional export workflow because an undocumented application dependency remained.",
    "support": "Change record, role policy, application configuration, export failure, rollback event, and owner analysis.",
    "alternative": "A temporary application error was considered but not supported by the repeated test behavior.",
    "confidence": "High",
    "limitation": "The impact was limited to failed export jobs in the fictional validation window."
  },
  {
    "id": "NLC-IR-F04",
    "statement": "Restoring object-access and private-subnet flow logging should precede final access and route reduction because current evidence gaps weaken validation and recurrence monitoring.",
    "support": "Source-health matrix, storage and network coverage, containment plan, validation requirements, and monitoring-owner review.",
    "alternative": "Immediate access removal may reduce capability sooner but would leave weaker observation and change evidence.",
    "confidence": "High",
    "limitation": "The final sequence remains subject to fictional incident-lead authority."
  },
  {
    "id": "NLC-IR-F05",
    "statement": "The provider support response does not support a provider-controlled service incident in the reviewed region and time window.",
    "support": "Provider case, service status record, regional scope, application health, customer configuration history, and owner review.",
    "alternative": "A provider condition outside the reviewed service or time boundary remains possible.",
    "confidence": "Medium-High",
    "limitation": "Provider confirmation does not evaluate customer-managed identities, policies, routes, or applications."
  },
  {
    "id": "NLC-IR-F06",
    "statement": "The fictional case can close as a control-gap and unsafe-change event with no confirmed compromise, disclosure, or broad outage.",
    "support": "Identity, control-plane, application, covered network, covered storage, configuration, provider, backup, recovery, and owner evidence.",
    "alternative": "Activity in logging blind spots cannot be fully excluded.",
    "confidence": "Medium-High",
    "limitation": "Closure includes monitoring restoration and follow-up review because prior blind spots existed."
  }
];
const commonMistakes = [
  "Treating a fictional alert as proof that an incident, compromise, malicious actor, or confirmed impact exists.",
  "Changing cloud identities, routes, storage policies, keys, logging, or resources before preserving the supplied evidence and current state.",
  "Disabling every related identity without distinguishing human, service, partner, recovery, monitoring, and emergency dependencies.",
  "Deleting or recreating cloud resources when a narrower reversible containment action is available.",
  "Treating provider support as responsible for customer-controlled identities, policies, data, networking, logging, or application behavior.",
  "Ignoring event time, receipt time, delayed sources, missing coverage, and provider evidence boundaries.",
  "Failing to identify who owns the incident, identity, data, network, application, provider case, evidence, recovery, and final risk decision.",
  "Removing broad access without checking undocumented service dependencies, rollback, monitoring, and owner approval.",
  "Restoring a service without validating identity, route, storage, key, application, monitoring, user function, and residual risk.",
  "Communicating potential impact as confirmed impact or sharing details beyond approved need-to-know.",
  "Closing an incident because services are online while monitoring, residual risk, lessons learned, evidence, and ownership remain incomplete.",
  "Using or exposing any real cloud tenant, account, project, identity, role, resource, key, route, log, alert, provider case, owner, or private data."
];
const quizQuestions = [
  {
    "question": "What should happen before a major fictional cloud containment action?",
    "choices": [
      "Confirm the supported risk, preserve evidence, map dependencies, identify authority, define tests, preserve rollback, and enable monitoring.",
      "Delete the affected resource immediately.",
      "Disable every cloud identity.",
      "Assume the provider will handle the customer environment."
    ],
    "answer": 0,
    "explanation": "Cloud containment should reduce risk without unnecessary disruption, evidence loss, or loss of recovery options."
  },
  {
    "question": "What does a fictional provider support statement most directly support?",
    "choices": [
      "Provider-controlled service conditions within the documented service, region, and time boundary.",
      "That every customer role is safe.",
      "That no tenant misconfiguration exists.",
      "That no customer data was accessed."
    ],
    "answer": 0,
    "explanation": "Provider evidence should not be stretched beyond the provider-controlled boundary."
  },
  {
    "question": "Why should fictional monitoring sometimes be restored before final containment?",
    "choices": [
      "Healthy evidence sources help validate the change, detect recurrence, measure impact, and support closure.",
      "Monitoring is more important than all risk reduction.",
      "Containment is never necessary.",
      "Logs can replace rollback."
    ],
    "answer": 0,
    "explanation": "Restoring visibility can make later actions safer and more defensible when immediate risk allows."
  },
  {
    "question": "What is the strongest conclusion after a containment change breaks an approved workflow?",
    "choices": [
      "The change revealed an undocumented dependency; rollback, dependency mapping, redesign, and retesting are required.",
      "The application is malicious.",
      "The original risk was not real.",
      "Rollback evidence should be deleted."
    ],
    "answer": 0,
    "explanation": "A failed containment test is valuable evidence about dependencies and change design."
  },
  {
    "question": "What makes fictional recovery complete?",
    "choices": [
      "Approved services, identities, data, paths, monitoring, user functions, residual risk, and owner signoff are validated.",
      "The dashboard is green once.",
      "The resource starts.",
      "The provider closes the support case."
    ],
    "answer": 0,
    "explanation": "Recovery requires safe, observable, functional, and owner-approved operation."
  },
  {
    "question": "What belongs in a fictional incident action log?",
    "choices": [
      "Time, owner, action, authority, evidence, result, validation, rollback, communication, and follow-up.",
      "Only the final outcome.",
      "Only screenshots.",
      "Only technical commands."
    ],
    "answer": 0,
    "explanation": "A complete action log makes decisions and changes traceable and reviewable."
  },
  {
    "question": "What makes a fictional cloud incident finding defensible?",
    "choices": [
      "It connects healthy evidence, direct observations, alternatives, confidence, limitations, scope, owners, actions, validation, recovery, and residual risk.",
      "It relies on one alert.",
      "It assumes every possible path was used.",
      "It ignores blind spots and provider boundaries."
    ],
    "answer": 0,
    "explanation": "Defensible incident conclusions preserve both what is supported and what remains uncertain."
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

export default function CloudIncidentResponseRecoveryPage() {
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
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13.7 Cloud Incident Response and Recovery
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders coordinate fictional cloud incident roles,
            evidence preservation, shared responsibility, scope, containment,
            provider support, correction, recovery, validation, communication,
            closure, and lessons learned without touching any real cloud
            environment.
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
          lessonTitle="Cloud Incident Response and Recovery"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge Learning Cloud incident evidence.",
            "I will not sign in to, query, configure, disable, isolate, restore, delete, export from, test, or investigate any real cloud tenant, account, identity, role, service, network, storage resource, database, key, backup, log, provider case, or private record.",
            "I will preserve fictional evidence and source-health limits before recommending changes.",
            "I will distinguish alerts, control gaps, potential impact, confirmed impact, alternatives, confidence, limitations, and missing evidence.",
            "I will create only defensive, authorized, reversible, and portfolio-safe fictional artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The First Containment Attempt Can Reveal a Hidden Dependency"
        >
          <p className="leading-8">
            The fictional Northbridge team identifies a broad storage role,
            stale partner access, wider routing, disabled object logging, and
            missing versioning. The first role-reduction attempt appears
            reasonable, but a staged export test fails because one undocumented
            application dependency remains. The team rolls back, maps the
            dependency, restores monitoring, redesigns the permission, and
            retests before final containment. A safe response learns from failed
            validation instead of treating it as an excuse to abandon security.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>

              <p className="mt-2 leading-7">
                Disable identities, delete routes, and recreate resources
                immediately without preserving evidence, checking dependencies,
                assigning authority, or preparing rollback.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional response
              </p>

              <p className="mt-2 leading-7">
                Preserve evidence, map scope, validate facts, restore visibility,
                choose narrow containment, test expected behavior, preserve
                rollback, recover gradually, and communicate bounded findings.
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
          title="Cloud Response Crosses Provider, Customer, Identity, Data, Network, and Service Boundaries"
        >
          <p className="leading-8">
            A fictional cloud incident may involve provider-controlled
            infrastructure, customer-controlled roles, managed storage,
            temporary workloads, several regions, partner federation,
            application identities, private endpoints, logging pipelines,
            backups, and user-facing services. No single team owns every layer.
            Strong response depends on shared responsibility, precise scope,
            traceable authority, healthy evidence, reversible action, validated
            recovery, and communication that never exceeds the evidence.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Scope–Evidence–Action–Recovery Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Scope", "Which fictional identities, accounts, projects, regions, resources, data, paths, services, partners, users, and owners are affected or potentially affected?"],
              ["Evidence", "Which fictional records are healthy, preserved, independent, delayed, missing, provider-controlled, customer-controlled, or limited?"],
              ["Action", "Which fictional containment or correction reduces risk while preserving evidence, service, authority, dependencies, validation, and rollback?"],
              ["Recovery", "Which fictional safe state, recovery point, identity, key, path, test, monitoring, user function, owner approval, and residual risk are required?"],
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
            Cloud Incident Response and Recovery Terms
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
            Incident Roles
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Response Roles and Handoffs
          </h2>

          <div className="mt-6 grid gap-5">
            {incidentRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Responsibility
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.responsibility}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Risk if unclear
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Key handoff
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.handoff}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Response Lifecycle
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Phases of Fictional Cloud Incident Response
          </h2>

          <div className="mt-6 grid gap-5">
            {responsePhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">{item.goal}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Actions
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.actions}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Decision question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.decision}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Containment Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Changing a Fictional Cloud Environment
          </h2>

          <div className="mt-6 grid gap-5">
            {containmentQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong method
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Response risk
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.risk}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Incident Evidence
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Incident Records
          </h2>

          <div className="mt-6 grid gap-5">
            {incidentRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.record}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Direct observation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Supported meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
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
            Incident Action Log
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Traceable Fictional Decisions, Changes, Tests, and Rollback
          </h2>

          <div className="mt-6 grid gap-5">
            {actionLog.map((item) => (
              <article
                key={`${item.time}-${item.action}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.time}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.owner}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">{item.action}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.result}</p>
                  </div>

                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Rollback or safety
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.rollback}</p>
                  </div>
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
            Coordinate a Fictional Cloud Incident from Charter to Closure
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
          title="Fake Northbridge Cloud Incident Dashboard"
          subtitle="Training dashboard for fictional incident evidence only."
          metrics={[
            {
              label: "Incident records reviewed",
              value: "10",
              note: "Identity, approval, storage, application, network, backup, provider, configuration, and impact records are mapped.",
            },
            {
              label: "Control gaps",
              value: "6",
              note: "Stale access, broad role, wider route, missing object logs, missing flow logs, and disabled versioning require correction.",
            },
            {
              label: "Confirmed compromises",
              value: "0",
              note: "The supplied fictional evidence supports control gaps and one failed containment test, but no confirmed compromise or disclosure.",
            },
          ]}
        />

        <FakeAlertCard
          title="Containment Change Caused Export Failures"
          severity="High"
          time="10:49 AM"
          source="Fake Cloud Incident Console"
          details="The fictional export automation lost archive-secondary read access during a staged least-privilege change, and its approved export job failed because one undocumented dependency remained."
          recommendation="Do not abandon the security goal or force the change globally. Preserve the failed test as evidence, roll back, identify the dependency, confirm whether it is still required, redesign the least-privilege path, restore monitoring, retest expected success and denied excess access, and document owners, approvals, residual risk, and completion."
        />

        <FakeLogPanel
          title="Fake Northbridge Incident Timeline"
          logs={[
            "10:00 INCIDENT opened severity='High' compromise='unconfirmed'",
            "10:08 EVIDENCE identity,control,storage,network,app,config preserved",
            "10:15 IDENTITY privileged_activation='approved delayed record'",
            "10:25 GAP archive_object_logs='missing' private_flow='missing'",
            "10:38 CONTAIN role_reduction='staged'",
            "10:49 TEST export_job='failed' dependency='undocumented'",
            "10:51 ROLLBACK role_policy='restored'",
            "11:02 ANALYSIS dependency='archive-secondary metadata read'",
            "11:18 NETWORK private_path='pass' wider_route='denied in test'",
            "11:35 MONITOR object_logs='restored' flow_logs='restored'",
            "11:52 ACTION final_sequence='approved'",
            "12:05 VALIDATE export_job='pass' excess_access='denied'",
            "12:20 RECOVERY database_restore='pass' storage_exception='approved'",
            "12:32 PROVIDER incident='not supported in scope'",
            "12:45 CLOSE compromise='not confirmed' followup='active'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Incident Findings and Limits
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
          title="What Does the Failed Containment Test Mean?"
          evidence={[
            "The fictional export automation role had broader storage access than its documented workflow appeared to require.",
            "A staged role reduction caused the export job to fail.",
            "Application configuration showed an undocumented metadata dependency on archive-secondary.",
            "The role policy was rolled back immediately.",
            "No unsupported data access or disclosure is shown.",
            "Owners can replace the dependency and retest a narrower role.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The failed test revealed an undocumented dependency; the team should preserve the evidence, roll back, redesign the least-privilege path, restore monitoring, and retest rather than abandoning the security goal.",
            "The broad role was fully justified and should remain permanent.",
            "The application was compromised.",
            "The storage collection should be deleted immediately.",
          ]}
          bestAnswer={0}
          explanation="The strongest conclusion uses the failed validation to improve the design while preserving service, evidence, and the original risk-reduction objective."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Cloud Incident Response"
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
          title="Build the Northbridge Cloud Incident Response and Recovery Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Incident Charter, Evidence, Scope, Containment, Recovery, and Closure
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to complete
                an end-to-end cloud incident response and recovery case.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Incident charter with objective, severity, scope, authority, owners, privacy, and communication rhythm.</li>
                <li>Evidence register and source-health map.</li>
                <li>Blast-radius and dependency diagram.</li>
                <li>Timeline and action log with approvals, results, validation, and rollback.</li>
                <li>Findings with alternatives, confidence, limitations, potential impact, and confirmed impact.</li>
                <li>Containment comparison and approved action sequence.</li>
                <li>Recovery plan, test results, residual risk, closure criteria, and lessons learned.</li>
                <li>Technical report, leadership update, provider summary, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Do not access, contain, restore, change, or investigate any real
            cloud environment. Complete the lab only with fictional records
            displayed in this lesson.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Broad Role Appears Risky during an Active Incident"
          scenario="The fictional export automation role has unnecessary access, but the team has not yet mapped all application dependencies."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve evidence, restore required monitoring, identify the owner and dependencies, stage a narrow change, test expected success and denied excess access, preserve rollback, and monitor.",
              outcome:
                "Best defensive choice. Risk is reduced without unnecessary service disruption.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Remove the role globally without testing.",
              outcome:
                "Unsafe. The approved workload may fail and evidence may be harder to interpret.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the role because no misuse is confirmed.",
              outcome:
                "Weak. Unnecessary capability remains a valid control gap.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Provider Reports No Platform Incident"
          scenario="The fictional provider reports no provider-controlled service incident, while customer-managed storage, identity, route, and logging gaps remain."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the provider response only for the documented provider boundary and continue investigating customer-controlled identities, policies, routes, storage, applications, logs, and recovery.",
              outcome:
                "Best defensive choice. Shared-responsibility boundaries remain clear.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the incident because the provider reported no problem.",
              outcome:
                "Unsafe. Customer-controlled risks remain unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Blame the provider for every control gap.",
              outcome:
                "Unsupported. The evidence assigns several controls to the customer.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cloud Incident Response and Recovery Checklist"
          items={[
            "I can create a fictional incident charter with severity, scope, authority, owners, privacy, communication, and closure criteria.",
            "I can preserve fictional identity, control-plane, storage, database, network, application, configuration, key, backup, provider, and business evidence.",
            "I can map fictional blast radius across identities, accounts, projects, regions, services, data, partners, users, and dependencies.",
            "I can separate direct observations, findings, alternatives, confidence, limitations, potential impact, confirmed impact, and missing evidence.",
            "I can distinguish provider-controlled and customer-controlled response responsibilities.",
            "I can compare containment actions using risk reduction, evidence preservation, authority, dependencies, service effect, validation, rollback, and monitoring.",
            "I can use failed validation as evidence for dependency discovery and safer redesign.",
            "I can validate recovery through identity, data, route, application, monitoring, user function, owner approval, and residual risk.",
            "I can close a fictional incident only after monitoring, evidence, lessons learned, ownership, follow-up, and communication are complete.",
            "I will use only fictional evidence and never access or expose real cloud incidents, accounts, identities, resources, logs, provider cases, owners, or private data.",
          ]}
        />

        <MiniQuiz
          title="I13.7 Mini Quiz: Cloud Incident Response and Recovery"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Cloud Incident Response and Recovery Package for the Northbridge Learning Cloud. Include incident charter, roles, evidence register, source-health matrix, blast-radius map, timeline, action log, findings, alternatives, confidence, limitations, provider boundary, containment comparison, approvals, validation, rollback, recovery plan, monitoring, communication, residual risk, closure criteria, lessons learned, and a portfolio-safety statement."
          tips={[
            "Use only fictional tenants, accounts, projects, identities, resources, logs, alerts, provider records, owners, dates, times, and decisions.",
            "Do not treat an alert, broad permission, route, logging gap, provider statement, or failed test as proof of compromise or malicious intent.",
            "Preserve evidence and monitoring before destructive or irreversible action whenever immediate risk allows.",
            "Make every response action authorized, staged, reversible, validated, monitored, and documented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud incident response depends on shared responsibility, precise authority, and coordinated owner handoffs.",
            "Alerts and control gaps start an investigation but do not independently prove compromise or impact.",
            "Evidence preservation and source-health review should occur before major containment when immediate risk permits.",
            "Containment should be narrow, staged, validated, reversible, monitored, and tied to a specific risk.",
            "A failed containment test can reveal hidden dependencies and improve the final least-privilege design.",
            "Provider evidence applies only within the documented provider-controlled boundary.",
            "Portfolio artifacts should use fully fictional incident evidence and never expose real cloud environments or cases.",
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