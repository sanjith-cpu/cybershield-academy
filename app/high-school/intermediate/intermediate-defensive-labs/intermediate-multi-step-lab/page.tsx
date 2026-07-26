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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/writing-a-defensive-report`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Define one fictional multi-step defensive case across logs, phishing, IAM, web, cloud, incident response, reporting, ownership, authority, service continuity, privacy, and validation.",
  "Correlate fictional identity, email, application, cloud, supplier, configuration, network, source-health, and business-context evidence without forcing unrelated records into one incident.",
  "Prioritize fictional decisions by confirmed facts, criticality, current exposure, user interaction, service impact, evidence quality, uncertainty, owner authority, and reversibility.",
  "Coordinate fictional containment, access correction, source restoration, communication, recovery, case separation, reporting, validation, and improvement through the correct roles.",
  "Produce one portfolio-safe fictional case package with a charter, evidence register, timeline, findings, decisions, communications, validation, metrics, final report, and reflection."
];
const vocabulary = [
  [
    "Integrated case",
    "A fictional defensive exercise that requires evidence and decisions from several domains while preserving separate case boundaries where evidence does not support a relationship."
  ],
  [
    "Primary question",
    "The fictional decision the analyst must answer first, such as whether immediate restriction, escalation, recovery, or further evidence collection is required."
  ],
  [
    "Case boundary",
    "A fictional scope separating systems, identities, services, suppliers, evidence, time periods, causes, owners, and decisions into the correct case record."
  ],
  [
    "Evidence relationship",
    "A fictional supported connection between records based on shared identity, system, service, time, action, source, owner, or outcome."
  ],
  [
    "Coincidence",
    "A fictional similarity in time or severity that does not by itself prove two records are related."
  ],
  [
    "Decision dependency",
    "A fictional condition that must be resolved before another action, communication, recovery, or closure decision can proceed."
  ],
  [
    "Decision gate",
    "A fictional checkpoint requiring specific evidence, authority, validation, or owner approval before the response advances."
  ],
  [
    "Proportionate action",
    "A fictional defensive response that reduces risk and uncertainty while avoiding unnecessary disruption or unsupported scope."
  ],
  [
    "Reversible action",
    "A fictional change that can be safely undone if new evidence or business impact requires adjustment."
  ],
  [
    "Compensating evidence",
    "A fictional alternate source that provides partial visibility when the preferred source is delayed, incomplete, or unavailable."
  ],
  [
    "Operational handoff",
    "A fictional transfer of scope, facts, actions, owners, deadlines, blockers, validation, residual risk, and next decisions between teams or shifts."
  ],
  [
    "Decision-ready communication",
    "A fictional update that gives the audience the facts, impact, actions, limits, decisions required, and next update time."
  ],
  [
    "Recovery validation",
    "A fictional process confirming access, configuration, logging, service function, user state, owner acceptance, monitoring, and residual risk after corrective work."
  ],
  [
    "Residual uncertainty",
    "A fictional evidence limit that remains after reasonable defensive work and should be recorded rather than hidden."
  ],
  [
    "Continuous improvement",
    "A fictional process that converts case lessons into changes to controls, detection, logging, access, suppliers, runbooks, training, metrics, and governance."
  ],
  [
    "Portfolio-safe case package",
    "A fully invented set of fictional defensive artifacts that demonstrates professional reasoning without exposing real systems, identities, incidents, or private data."
  ]
];
const evidenceRecords = [
  [
    "NBR-INT-01",
    "IAM",
    "Supplier administrator remains active after a time-limited exception expired at 17:00.",
    "17:00",
    "17:01",
    "Healthy",
    "Identity Owner and Supplier Owner",
    "Confirms unsupported administrative capability.",
    "Does not confirm malicious intent or misuse."
  ],
  [
    "NBR-INT-02",
    "Authentication",
    "The supplier identity signs in to a confidential support service at 18:42.",
    "18:42",
    "18:42",
    "Healthy",
    "Identity Owner",
    "Confirms current use after exception expiration.",
    "Does not prove which actions followed."
  ],
  [
    "NBR-INT-03",
    "Application",
    "The supplier identity views one service-status page and performs no recorded configuration change.",
    "18:43",
    "18:43",
    "Healthy",
    "Service Owner",
    "Limits the supported post-sign-in activity.",
    "Covers only the support service."
  ],
  [
    "NBR-INT-04",
    "Cloud",
    "A confidential storage policy changes outside the approved window and gains a broad read condition.",
    "20:11",
    "20:11",
    "Healthy",
    "Cloud Storage Owner and Data Owner",
    "Confirms an unsupported high-impact configuration state.",
    "Does not confirm successful external access or disclosure."
  ],
  [
    "NBR-INT-05",
    "Cloud access",
    "No covered external storage read is observed between 20:11 and 20:45.",
    "20:11–20:45",
    "20:46",
    "Healthy with limited coverage",
    "Cloud Security Owner",
    "Provides partial evidence against immediate confirmed disclosure.",
    "Does not represent every access path."
  ],
  [
    "NBR-INT-06",
    "Telemetry",
    "An administrative cloud audit source stops delivering events at 21:02.",
    "21:02",
    "21:02",
    "Healthy monitor reporting an unhealthy source",
    "Telemetry Owner",
    "Confirms a current monitoring blind spot.",
    "Does not prove harmful activity occurred during the gap."
  ],
  [
    "NBR-INT-07",
    "Compensating evidence",
    "Configuration history and service-health records remain current while the audit source is unavailable.",
    "21:02–21:37",
    "Current",
    "Healthy",
    "Cloud Platform Owner and Service Owner",
    "Provides partial visibility during the source gap.",
    "Coverage is narrower than the missing source."
  ],
  [
    "NBR-INT-08",
    "Email",
    "A payroll-themed message fails sender checks and uses an unrelated sign-in destination description.",
    "21:14",
    "21:15",
    "Healthy",
    "Mail Security Owner",
    "Supports a high-confidence malicious-message disposition.",
    "No real link, domain, message, or credential is present."
  ],
  [
    "NBR-INT-09",
    "User interaction",
    "One user clicks the payroll-themed link but reports entering no information.",
    "21:18",
    "21:21",
    "Healthy",
    "Identity Owner and User Support Owner",
    "Confirms one interaction requiring targeted identity review.",
    "Credential disclosure and account compromise are unconfirmed."
  ],
  [
    "NBR-INT-10",
    "Web",
    "A support role loads a manager-only account-settings page.",
    "21:26",
    "21:26",
    "Healthy",
    "Application Owner and Access Control Owner",
    "Confirms an authorization gap and unauthorized page view.",
    "No setting modification or wider disclosure is confirmed."
  ],
  [
    "NBR-INT-11",
    "Change management",
    "No approved change or exception matches the storage-policy change or manager-route access state.",
    "Review window",
    "Current",
    "Healthy",
    "Change Owner",
    "Supports that both control states are unsupported.",
    "An undocumented emergency action remains possible."
  ],
  [
    "NBR-INT-12",
    "Service health",
    "The support service, storage service, payroll service, and web application remain available.",
    "21:30",
    "21:31",
    "Healthy",
    "Service Owners",
    "Supports targeted action rather than broad shutdown.",
    "Availability does not prove confidentiality or authorization."
  ],
  [
    "NBR-INT-13",
    "Detection",
    "A detection rule grouped the supplier sign-in, storage policy, email report, and web authorization event because they occurred in one shift.",
    "21:32",
    "21:32",
    "Healthy",
    "Detection Owner",
    "Explains why one queue item contains multiple domains.",
    "Temporal grouping does not prove a common cause."
  ],
  [
    "NBR-INT-14",
    "Supplier",
    "The supplier owner confirms the support project ended and no current administrative need exists.",
    "21:40",
    "21:41",
    "Healthy",
    "Supplier Owner",
    "Confirms the supplier access should not remain active.",
    "Does not establish intent behind the sign-in."
  ],
  [
    "NBR-INT-15",
    "Recovery",
    "Supplier access is removed, the storage policy is restored, and the manager-only route is restricted.",
    "22:00–22:18",
    "Current",
    "Healthy",
    "Identity, Cloud, and Application Owners",
    "Confirms three corrective actions were completed.",
    "Completion is not the same as validation."
  ],
  [
    "NBR-INT-16",
    "Validation",
    "The audit source recovers, approved access tests pass, services remain healthy, and no covered unauthorized storage read is observed.",
    "22:25–22:50",
    "Current",
    "Healthy",
    "Telemetry, Service, Cloud, Identity, and Application Owners",
    "Supports transition to monitored follow-up.",
    "Residual uncertainty remains for uncovered paths and intent."
  ]
];
const caseMap = [
  [
    "Case A: Supplier access review",
    "NBR-INT-01, 02, 03, 14, 15, 16",
    "Why did a supplier identity remain active after approval expiration, and what access action is required?",
    "Identity Owner, Supplier Owner, Service Owner",
    "Direct identity, approval, activity, ownership, and remediation relationship.",
    "Malicious intent, configuration change, or disclosure."
  ],
  [
    "Case B: Cloud policy and telemetry review",
    "NBR-INT-04, 05, 06, 07, 11, 12, 15, 16",
    "Did an unsupported broad-read condition create exposure, and can impact be validated during a logging gap?",
    "Cloud Storage Owner, Data Owner, Telemetry Owner, Service Owner",
    "Direct resource, configuration, access-evidence, source-health, and recovery relationship.",
    "Unauthorized access, disclosure, or a shared cause with the supplier sign-in."
  ],
  [
    "Case C: Payroll phishing triage",
    "NBR-INT-08, 09, 12, 16",
    "What did the user do, and is targeted identity recovery or broader response required?",
    "Mail Security Owner, Identity Owner, User Support Owner",
    "Direct message, recipient-interaction, identity-review, and validation relationship.",
    "Credential disclosure, account takeover, or relationship to the cloud and supplier cases."
  ],
  [
    "Case D: Web authorization review",
    "NBR-INT-10, 11, 12, 15, 16",
    "Why could a support role reach a manager-only route, and what effective-access correction is required?",
    "Application Owner, Access Control Owner, Service Owner",
    "Direct route, role, authorization, change, remediation, and validation relationship.",
    "Setting modification, data theft, or relationship to the phishing message."
  ],
  [
    "Detection-quality follow-up",
    "NBR-INT-13 plus all case boundaries",
    "How should the detection group correlated signals without implying one unsupported incident?",
    "Detection Owner and SOC Quality Owner",
    "The rule may group shift activity for review but requires case-separation guidance.",
    "A single coordinated cause across all records."
  ]
];
const priorities = [
  [
    "1",
    "Restrict unsupported high-impact access and configuration",
    "Expired supplier administration and broad confidential-storage read condition.",
    "Active unnecessary capability exists now and corrective actions are reversible.",
    "Identity Owner, Supplier Owner, Cloud Storage Owner, Data Owner",
    "Confirm effective access, session state, policy state, service function, and owner signoff."
  ],
  [
    "2",
    "Restore monitoring visibility",
    "Critical administrative audit source is unavailable.",
    "The source gap reduces confidence in cloud-impact conclusions.",
    "Telemetry Owner and Cloud Platform Owner",
    "Confirm delivery, parsing, completeness, timeliness, coverage, and gap reconstruction."
  ],
  [
    "3",
    "Triage confirmed user interaction",
    "One payroll-link click with no confirmed data entry.",
    "Targeted identity review reduces uncertainty without resetting every recipient.",
    "Identity Owner, Mail Security Owner, User Support Owner",
    "Confirm account state, sessions, user statement, message removal, and monitoring."
  ],
  [
    "4",
    "Correct the web authorization gap",
    "Support role viewed a manager-only route.",
    "Targeted restriction preserves service while removing excess capability.",
    "Application Owner and Access Control Owner",
    "Test approved and denied roles, inherited access, route behavior, and service function."
  ],
  [
    "5",
    "Preserve separate case boundaries",
    "Different systems, identities, evidence, owners, actions, and impact limits.",
    "Unsupported merging would distort scope, priority, ownership, and reporting.",
    "SOC Analyst and Incident Commander",
    "Peer review confirms each case question and evidence relationship."
  ],
  [
    "6",
    "Communicate current status",
    "Leadership and service owners need facts, impact limits, actions, and milestones.",
    "Decision-ready updates reduce confusion and prevent unsupported claims.",
    "Incident Commander and Communications Lead",
    "Audience receives the correct approved update and next cadence."
  ],
  [
    "7",
    "Validate recovery and transition",
    "Corrective changes complete, source recovered, services healthy, and covered tests pass.",
    "Closure depends on validated outcomes, not completed tickets alone.",
    "Recovery Lead and Case Owners",
    "All case-specific closure criteria and residual-risk statements are complete."
  ],
  [
    "8",
    "Open continuous-improvement work",
    "Expired access, policy drift, source outage, detection grouping, user click, and route authorization gaps.",
    "The response should reduce recurrence and improve future decision quality.",
    "SOC Quality Owner and Control Owners",
    "Improvements have owners, deadlines, success measures, and follow-up dates."
  ]
];
const workflow = [
  [
    "1",
    "Define the integrated case charter",
    "State the fictional shift, systems, identities, services, suppliers, data, evidence, owners, privacy, authority, objectives, exclusions, and deadlines.",
    "Integrated investigation charter."
  ],
  [
    "2",
    "Validate and register evidence",
    "Record fictional source, event time, collection time, owner, health, relevance, limitation, and confidence contribution.",
    "Evidence register and source-health matrix."
  ],
  [
    "3",
    "Normalize the timeline",
    "Order fictional events, collection, alerts, decisions, actions, communications, recovery, and validation without confusing delayed sources.",
    "Normalized multi-domain timeline."
  ],
  [
    "4",
    "Create case boundaries",
    "Separate fictional supplier, cloud, phishing, web, and detection-quality work unless shared evidence supports a relationship.",
    "Case map and relationship register."
  ],
  [
    "5",
    "Prioritize and authorize actions",
    "Choose fictional restriction, rollback, source restoration, identity review, route correction, communication, monitoring, and escalation with owners.",
    "Priority and decision register."
  ],
  [
    "6",
    "Coordinate communication and handoffs",
    "Provide fictional technical, service, leadership, user, supplier, recovery, and shift-handoff updates with facts, limits, actions, and next decisions.",
    "Communication and handoff package."
  ],
  [
    "7",
    "Validate recovery and closure",
    "Confirm fictional effective access, sessions, policy, route behavior, source health, user state, service function, owner signoff, monitoring, and residual risk.",
    "Validation and closure matrix."
  ],
  [
    "8",
    "Report and improve",
    "Write the fictional final report, leadership summary, technical summary, metrics, lessons learned, control changes, owners, deadlines, and portfolio reflection.",
    "Final case and improvement package."
  ]
];
const findings = [
  [
    "NBR-INT-F01",
    "The supplier administrator retained and used unsupported access after the approved exception expired.",
    "Expired exception, active identity, post-expiration sign-in, service activity, ended project, and supplier-owner confirmation.",
    "A legitimate emergency support need may have existed but was not documented.",
    "High",
    "Unsupported administrative capability is confirmed; malicious intent, configuration change, and disclosure are unconfirmed.",
    "Keep access removed, review sessions and activity, and require new narrow approval for future support."
  ],
  [
    "NBR-INT-F02",
    "The confidential storage policy contained an unsupported broad-read condition requiring immediate correction.",
    "Outside-window change, confidential classification, effective policy, no approved exception, and successful restoration.",
    "A temporary sharing need may have existed but is not documented.",
    "High",
    "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "Maintain approved access, review covered access records, automate drift checks, and continue targeted monitoring."
  ],
  [
    "NBR-INT-F03",
    "The audit-source gap reduced confidence in cloud-impact analysis but did not prove harmful activity.",
    "Healthy source monitor, thirty-eight-minute outage, privileged coverage, compensating evidence, recovery, and delayed records.",
    "A nonsecurity delivery failure may explain the outage.",
    "High",
    "Monitoring assurance was reduced; malicious activity during the gap is unconfirmed.",
    "Improve failover, delay detection, gap reconstruction, coverage documentation, and closure guidance."
  ],
  [
    "NBR-INT-F04",
    "The payroll-themed message was high-confidence malicious, while user impact remained limited to one confirmed click.",
    "Failed sender checks, unrelated destination, urgent sign-in request, no approved campaign, one click, and no reported data entry.",
    "A poorly configured legitimate vendor message is possible but not supported.",
    "High",
    "One click is confirmed; credential disclosure and account takeover are unconfirmed.",
    "Complete targeted identity review, user guidance, message removal, related-message search, and detection feedback."
  ],
  [
    "NBR-INT-F05",
    "The support role had excessive authorization to a manager-only route.",
    "Successful page load, documented role boundary, no approved exception, route restriction, and passed role tests after correction.",
    "The route documentation may have been outdated, but owner review confirmed the intended restriction.",
    "High",
    "Unauthorized page view is confirmed; modification and wider disclosure are unconfirmed.",
    "Maintain the restriction and review related role mappings and inherited access."
  ],
  [
    "NBR-INT-F06",
    "The records support four operational cases and one detection-quality follow-up rather than one confirmed incident.",
    "Different identities, systems, services, evidence sources, requested actions, owners, timelines, and impact limits.",
    "Later evidence may establish a relationship between selected cases.",
    "High",
    "Forced merging would create unsupported scope and misleading reporting.",
    "Maintain separate cases and link only evidence-supported relationships."
  ],
  [
    "NBR-INT-F07",
    "The defensive response can transition to monitored follow-up after all case-specific validation criteria are complete.",
    "Supplier access removed, storage policy restored, web route restricted, audit source recovered, identity review completed, services healthy, and owner signoff.",
    "New evidence or failed monitoring could require re-escalation.",
    "Medium-High",
    "Immediate control conditions are corrected; residual uncertainty and improvement work remain.",
    "Document closure limits, continue targeted monitoring, and track improvements to completion."
  ]
];
const communications = [
  [
    "Technical response team",
    "Four operational cases are active. Immediate priorities are unsupported access restriction, storage-policy rollback, audit-source restoration, targeted identity review, and web authorization correction.",
    "Assign owners, deadlines, evidence requests, validation steps, and case boundaries.",
    "No single coordinated incident or confirmed disclosure is supported.",
    "At source recovery or any confirmed impact change."
  ],
  [
    "Service owners",
    "Services remain available while targeted controls are corrected.",
    "Approve service-preserving access, policy, and route changes and define recovery acceptance criteria.",
    "Availability does not prove confidentiality or authorization.",
    "After each control validation."
  ],
  [
    "Leadership",
    "Several serious control weaknesses were identified and targeted corrections are underway. No confirmed data disclosure or account takeover appears in current covered evidence.",
    "Support continued targeted response and monitored follow-up rather than broad shutdown.",
    "A temporary audit-source gap and limited access coverage preserve residual uncertainty.",
    "After source recovery and owner validation."
  ],
  [
    "Clicked user",
    "The payroll message was malicious. Do not revisit it. No credential entry is currently reported, and the identity team is completing an approved review.",
    "Confirm the interaction and follow identity-owner guidance.",
    "Account compromise is not confirmed.",
    "After identity validation."
  ],
  [
    "Supplier owner",
    "The supplier exception expired and access is removed because no current administrative need is documented.",
    "Submit a new narrow, time-limited request only if support is still required.",
    "The report does not claim malicious supplier intent.",
    "After owner confirmation or new approval."
  ],
  [
    "Shift handoff",
    "Corrective actions are complete; source, access, identity, route, and service validation are in progress.",
    "Continue case-specific monitoring, close only after validation, and keep the phishing case separate.",
    "No universal statement about absence of unauthorized access is supported.",
    "At validation completion or any new evidence."
  ]
];
const metrics = [
  [
    "Time to case separation",
    "18 fictional minutes",
    "Measures how quickly the grouped alert was divided into evidence-based operational cases.",
    "Faster is not better if the boundaries are inaccurate.",
    "Add case-boundary prompts to the triage runbook."
  ],
  [
    "Time to unsupported-access restriction",
    "26 fictional minutes",
    "Measures the interval from validation to supplier-access removal.",
    "Interpret with owner availability and service impact.",
    "Automate exception expiration review and owner notification."
  ],
  [
    "Time to storage-policy restoration",
    "31 fictional minutes",
    "Measures the interval from policy confirmation to approved-state restoration.",
    "A fast rollback without effective-state validation is incomplete.",
    "Add preventive policy checks and reversible deployment controls."
  ],
  [
    "Telemetry recovery time",
    "48 fictional minutes",
    "Measures the duration of the administrative audit-source gap.",
    "Recovery time alone does not measure completeness of recovered records.",
    "Add failover and automated gap reconstruction."
  ],
  [
    "User-interaction validation time",
    "22 fictional minutes",
    "Measures the interval from report to confirmed interaction state.",
    "Do not pressure users or treat self-report as the only evidence.",
    "Improve reporting prompts and identity-review coordination."
  ],
  [
    "Recovery validation completion",
    "100% of required fictional checks",
    "Confirms access, policy, route, source, user, service, owner, and residual-risk checks were recorded.",
    "A completed checklist matters only when evidence supports each item.",
    "Require evidence identifiers for every validation item."
  ]
];
const commonMistakes = [
  "Treating a fictional integrated lab as permission to access, test, scan, change, or investigate real systems.",
  "Merging every record into one incident because the events happened during one shift.",
  "Splitting records so aggressively that direct evidence relationships and shared owners are lost.",
  "Using alert severity as the only priority factor.",
  "Treating proposed actions as authorized, completed actions as validated, or validated actions as proof of zero residual risk.",
  "Assuming expired access proves malicious intent.",
  "Assuming a broad cloud policy proves data disclosure.",
  "Assuming one click proves credential compromise.",
  "Assuming a page view proves modification or data theft.",
  "Treating a source gap as proof of harmful activity or proof that nothing happened.",
  "Choosing broad shutdown when targeted reversible action can reduce risk safely.",
  "Sending one identical update to analysts, service owners, leadership, users, suppliers, and the next shift.",
  "Closing cases because tickets are complete rather than because effective outcomes are validated.",
  "Using or exposing real credentials, messages, logs, employee data, school records, suppliers, cloud resources, websites, applications, incidents, or confidential information."
];
const quizQuestions = [
  {
    "question": "Why should the fictional grouped alert be separated into multiple cases?",
    "choices": [
      "The records involve different systems, identities, evidence, owners, actions, timelines, and impact limits.",
      "Every record must always have its own case.",
      "Separate cases automatically reduce severity.",
      "Cases should never be linked."
    ],
    "answer": 0,
    "explanation": "Case boundaries should follow evidence and decision ownership."
  },
  {
    "question": "What should be prioritized first in the fictional integrated lab?",
    "choices": [
      "Reversible restriction of unsupported high-impact access and configuration while preserving service.",
      "Writing the final report.",
      "Closing the phishing case.",
      "Combining all evidence into one incident."
    ],
    "answer": 0,
    "explanation": "Active unnecessary capability should be reduced quickly and proportionately."
  },
  {
    "question": "What does the fictional cloud audit-source gap prove?",
    "choices": [
      "Monitoring assurance is reduced, but malicious activity during the gap is not automatically confirmed.",
      "The storage policy was changed by an attacker.",
      "Every missing event is harmful.",
      "The case should close."
    ],
    "answer": 0,
    "explanation": "A source gap changes confidence and action, not unsupported facts."
  },
  {
    "question": "How should the fictional payroll-link click be described?",
    "choices": [
      "One click is confirmed; credential disclosure and account takeover remain unconfirmed.",
      "The user account was compromised.",
      "No action is required.",
      "Every recipient should be reset."
    ],
    "answer": 0,
    "explanation": "The report should match the confirmed interaction and preserve impact limits."
  },
  {
    "question": "What makes a fictional action complete?",
    "choices": [
      "The intended effective state, service function, source health, owner decision, residual risk, and validation evidence are confirmed.",
      "The ticket is marked done.",
      "The alert disappears.",
      "The analyst recommends it."
    ],
    "answer": 0,
    "explanation": "Completion requires validation of the defensive outcome."
  },
  {
    "question": "What should the fictional leadership update emphasize?",
    "choices": [
      "Serious control weaknesses, targeted actions, current service state, confirmed and unconfirmed impact, residual uncertainty, and next update.",
      "Every raw log line.",
      "The worst-case scenario as fact.",
      "No mention of uncertainty."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be concise, accurate, and decision-ready."
  },
  {
    "question": "What makes the final fictional case package portfolio-safe?",
    "choices": [
      "Every system, identity, message, log, supplier, resource, date, identifier, action, and outcome is invented while the defensive reasoning remains professional.",
      "Only passwords are removed.",
      "A real report is copied with a different company name.",
      "Real logs are included without usernames."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required for a safe portfolio artifact."
  }
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Back to Module</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Module Test</Link>
    </div>
  );
}

function DetailGrid({ items }: { items: string[][] }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {items.map(([label, detail]) => (
        <div key={`${label}-${detail}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
        </div>
      ))}
    </div>
  );
}

export default function IntermediateMultiStepLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I16</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 8 of 8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Integrated Lab</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I16.8 Intermediate Multi-Step Lab</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Integrate fictional logs, phishing, IAM, web, cloud, incident response, reporting, communication, metrics, ownership, authority, validation, and continuous improvement into one professional, portfolio-ready defensive case package.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Intermediate" moduleTitle="I16: Intermediate Defensive Labs" lessonTitle="Intermediate Multi-Step Lab" lessonNumber={8} totalLessons={8} />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge identities, messages, logs, services, suppliers, web records, cloud resources, owners, decisions, and outcomes.",
            "I will not access, test, scan, change, investigate, or interact with any real account, system, website, application, message, cloud resource, supplier, or private dataset.",
            "I will not request or expose real credentials, employee data, school records, company logs, source code, incident evidence, private messages, cloud identifiers, secrets, or confidential organizational information.",
            "I will preserve case boundaries and link records only when evidence supports a relationship.",
            "I will distinguish observations, conclusions, alternatives, missing evidence, possible impact, confirmed impact, confidence, limitations, owners, actions, validation, and residual risk.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="One Alert Queue Item Does Not Always Mean One Incident">
          <p className="leading-8">A fictional detection rule grouped expired supplier access, a cloud policy change, a suspicious payroll message, a web authorization gap, and a telemetry outage because they occurred in one shift. Professional analysis tests relationships, defines case boundaries, prioritizes reversible action, assigns the correct owners, and preserves impact limits.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak integrated analysis</p><p className="mt-2 leading-7">Merge everything because it looks serious, assume compromise, shut down broadly, ignore source health, send one message to everyone, and close after tickets are completed.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional integrated analysis</p><p className="mt-2 leading-7">Validate sources, normalize time, map relationships, separate cases, prioritize reversible actions, coordinate owners, communicate by audience, validate outcomes, report, and improve.</p></div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p><p className="mt-3 font-semibold leading-7">{objective}</p></div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Defenders Must Coordinate Different Risks without Losing Accuracy">
          <p className="leading-8">Identity, email, cloud, application, supplier, telemetry, and service records may share a shift but require different cases, priorities, owners, actions, communications, and closure criteria. The integrated skill is maintaining one coordinated picture without inventing one unsupported story.</p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Scope–Evidence–Boundary–Decision–Validation Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Scope", "Which fictional shift, systems, identities, services, suppliers, data, time window, owners, privacy limits, authority, and decisions are included?"],
              ["Evidence", "Which fictional sources, timestamps, health, relevance, context, alternatives, and limitations support each question?"],
              ["Boundary", "Which fictional records belong together, which remain separate, and which evidence-based links should be preserved?"],
              ["Decision", "Which fictional restriction, rollback, source restoration, identity review, route correction, communication, escalation, and monitoring should occur first?"],
              ["Validation", "Which fictional access, session, policy, route, source, user, service, owner, residual-risk, and closure evidence proves the outcome?"],
            ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Integrated Defensive Analysis Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></article>)}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Sixteen Fictional Multi-Domain Records</h2>
          <div className="mt-6 grid gap-5">
            {evidenceRecords.map(([id, domain, record, eventTime, collectionTime, health, owner, relevance, limit]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{domain}</span><span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">{health}</span></div>
                <h3 className="mt-4 text-lg font-black text-white">{record}</h3>
                <DetailGrid items={[["Event time", eventTime], ["Collection time", collectionTime], ["Owner", owner], ["Relevance", relevance], ["Evidence limit", limit]]} />
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Case Boundary Map</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Four Operational Cases and One Quality Follow-Up</h2>
          <div className="mt-6 grid gap-5">
            {caseMap.map(([caseName, records, question, owner, relationship, notProven]) => (
              <article key={caseName} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{caseName}</h3><DetailGrid items={[["Evidence records", records], ["Primary question", question], ["Owner", owner], ["Supported relationship", relationship], ["Not proven", notProven]]} /></article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Priority Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Ordered Defensive Decisions</h2>
          <div className="mt-6 grid gap-4">
            {priorities.map(([priority, decision, evidenceText, reason, owner, validation]) => (
              <article key={priority} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.55fr_1fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{priority}</span>
                <div><h3 className="font-black text-cyan-100">{decision}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{reason}</p></div>
                <div className="grid gap-3 md:grid-cols-3">{[["Evidence", evidenceText], ["Owner", owner], ["Validation", validation]].map(([label, detail]) => <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Integrated Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Charter to Portfolio Artifact</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map(([step, title, detail, output]) => <article key={step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{step}</span><h3 className="font-black text-cyan-100">{title}</h3><p className="text-sm leading-6 text-slate-300">{detail}</p><p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{output}</p></article>)}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Communication Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Audience-Specific Fictional Updates</h2>
          <div className="mt-6 grid gap-5">
            {communications.map(([audience, message, decision, limit, nextUpdate]) => <article key={audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{audience}</h3><DetailGrid items={[["Message", message], ["Decision or action", decision], ["Evidence limit", limit], ["Next update", nextUpdate]]} /></article>)}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Quality Metrics</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Measures with Interpretation and Caution</h2>
          <div className="mt-6 grid gap-5">
            {metrics.map(([metric, value, meaning, caution, improvement]) => <article key={metric} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><h3 className="text-lg font-black text-cyan-100">{metric}</h3><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{value}</span></div><div className="mt-4 grid gap-4 md:grid-cols-3">{[["Meaning", meaning], ["Caution", caution], ["Improvement", improvement]].map(([label, detail]) => <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}
          </div>
        </section>

        <FakeDashboardCard title="Fake Northbridge Integrated Defense Dashboard" subtitle="Training dashboard for fictional multi-domain evidence only." metrics={[
          { label: "Operational cases", value: "4", note: "Supplier access, cloud policy and telemetry, phishing, and web authorization remain separate evidence-based cases." },
          { label: "Corrective actions validated", value: "5", note: "Supplier access, storage policy, web route, audit source, and clicked-user identity review reached validated states." },
          { label: "Confirmed disclosure or takeover", value: "0", note: "The evidence supports serious control weaknesses, one click, and possible exposure but no confirmed disclosure or account takeover." },
        ]} />

        <FakeAlertCard title="Multi-Domain Queue Item Requires Immediate Case Separation and Targeted Action" severity="High" time="9:44 PM" source="Fake Northbridge Integrated Defense Console" details="A fictional grouped alert contains expired supplier access, a broad confidential-storage policy, a cloud audit-source gap, one malicious-message click, and a manager-route authorization gap. Shared timing does not prove one cause." recommendation="Create separate cases, restrict unsupported access and policy state, restore logging, review the clicked identity, correct route authorization, preserve service continuity, assign owners, validate outcomes, communicate impact limits, and open detection-quality follow-up." />

        <FakeLogPanel title="Fake Northbridge Integrated Timeline" logs={[
          "17:00 IAM supplier-exception='expired'",
          "18:42 AUTH supplier-signin='success'",
          "18:43 APP supplier-action='status-view'",
          "20:11 CLOUD storage-policy='broad-read'",
          "20:46 CLOUD covered-external-read='none-observed'",
          "21:02 SOURCE cloud-audit='delivery-stopped'",
          "21:14 EMAIL payroll-message='sender-failed'",
          "21:18 USER payroll-link='clicked'",
          "21:26 WEB support-role='manager-page-view'",
          "21:32 DETECTION grouped-alert='created'",
          "21:40 SUPPLIER current-need='none'",
          "22:00 IAM supplier-access='removed'",
          "22:08 CLOUD policy='restored'",
          "22:18 WEB route='restricted'",
          "22:25 SOURCE cloud-audit='recovered'",
          "22:50 VALIDATION integrated-case='monitored-followup'",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Findings Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Seven Fictional Integrated Findings</h2>
          <div className="mt-6 grid gap-5">
            {findings.map(([id, statement, support, alternative, confidence, impact, nextAction]) => <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{confidence}</span></div><h3 className="mt-4 text-lg font-black text-white">{statement}</h3><DetailGrid items={[["Evidence support", support], ["Alternate explanation", alternative], ["Impact statement", impact], ["Next action", nextAction]]} /></article>)}
          </div>
        </section>

        <AnalyzeEvidenceCard title="Do the Five Signals Prove One Coordinated Incident?" evidence={[
          "The fictional records occurred during the same shift.",
          "The supplier case involves expired access and one support-service sign-in.",
          "The cloud case involves a storage policy and telemetry gap.",
          "The phishing case involves a payroll message and one user click.",
          "The web case involves a support role and a manager-only route.",
          "The systems, identities, evidence, owners, requested actions, and impact limits differ.",
        ]} question="Which conclusion is strongest?" options={[
          "The records require coordinated review but should remain separate operational cases unless additional evidence establishes a common cause.",
          "The five signals prove one coordinated attack.",
          "None of the signals requires action because a relationship is unconfirmed.",
          "Every record should be closed as a false positive.",
        ]} bestAnswer={0} explanation="Coordination and case merging are different decisions. Shared time supports review, not automatic common cause." />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Multi-Step Defensive Analysis">
          <div className="grid gap-3 md:grid-cols-2">{commonMistakes.map((mistake) => <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>)}</div>
        </SectionCard>

        <SectionCard eyebrow="Integrated Practice Lab" title="Build the Complete Northbridge Multi-Step Case Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p><h3 className="mt-3 text-xl font-black text-white">Evidence, Cases, Priorities, Actions, Communications, Validation, and Report</h3><p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge records to produce one complete integrated defensive package.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p><ol className="mt-3 list-decimal space-y-2 pl-5 leading-7"><li>Integrated charter with objectives, scope, systems, identities, services, suppliers, data, owners, privacy, authority, exclusions, and deadlines.</li><li>Evidence register and source-health matrix with event time, collection time, relevance, confidence contribution, and limitations.</li><li>Normalized timeline and evidence-relationship map.</li><li>Case-boundary decision covering supplier, cloud, phishing, web, and detection-quality work.</li><li>Priority, owner, authority, action, dependency, rollback, communication, and escalation register.</li><li>Findings with observations, conclusions, alternatives, confidence, potential impact, confirmed impact, limitations, and next actions.</li><li>Validation and closure matrix covering access, sessions, policy, route, telemetry, user state, service function, owner signoff, monitoring, and residual risk.</li><li>Technical summary, service summary, leadership summary, user guidance, supplier message, shift handoff, metrics, final report, reflection, and portfolio-safety statement.</li></ol></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Complete the lab only with fictional evidence shown on this page. Do not access, test, scan, change, or investigate real accounts, systems, websites, applications, messages, cloud resources, suppliers, logs, incidents, or private data.</div>
        </SectionCard>

        <ScenarioDecisionLab title="Leadership Wants One Incident Number for Simplicity" scenario="The fictional records share one shift and one grouped alert, but they involve different identities, systems, evidence, owners, actions, and impact limits." choices={[
          { label: "Choice A", response: "Maintain one coordinated response view while preserving four operational cases and one detection-quality follow-up with evidence-based links.", outcome: "Best integrated choice. Coordination remains strong without unsupported merging.", tone: "best" },
          { label: "Choice B", response: "Merge every record into one confirmed incident.", outcome: "Unsupported. Shared timing and queue placement do not prove one cause.", tone: "risk" },
          { label: "Choice C", response: "Separate the teams completely and prohibit any shared communication.", outcome: "Weak. Coordinated awareness and evidence-based links remain useful.", tone: "risk" },
        ]} />

        <ScenarioDecisionLab title="All Corrective Tickets Are Marked Complete" scenario="The supplier access, cloud policy, and web route were changed, but source health, effective access, user state, service function, owner signoff, and residual risk still require confirmation." choices={[
          { label: "Choice A", response: "Keep each case open or formally transition it until the required validation evidence and residual-risk statements are complete.", outcome: "Best closure choice. Ticket completion does not replace outcome validation.", tone: "best" },
          { label: "Choice B", response: "Close everything immediately because the tickets are complete.", outcome: "Premature. The actual defensive state is not fully proven.", tone: "risk" },
          { label: "Choice C", response: "Never close the cases because complete certainty is impossible.", outcome: "Weak. Evidence-based closure can preserve residual uncertainty and monitoring.", tone: "risk" },
        ]} />

        <DefenderChecklist title="Intermediate Multi-Step Lab Checklist" items={[
          "I can define a fictional integrated charter covering systems, identities, services, suppliers, data, evidence, owners, privacy, authority, exclusions, and deadlines.",
          "I can validate fictional source health, event time, collection time, relevance, coverage, ownership, and limitations.",
          "I can separate fictional supplier, cloud, phishing, web, and detection-quality cases while preserving supported links.",
          "I can prioritize fictional reversible restriction, rollback, source restoration, identity review, route correction, communication, monitoring, and escalation.",
          "I can distinguish fictional observations, conclusions, alternatives, missing evidence, potential impact, confirmed impact, confidence, limitations, and residual risk.",
          "I can assign fictional identity, supplier, cloud, data, telemetry, mail, user-support, application, access-control, service, communications, recovery, and quality owners.",
          "I can tailor fictional technical, service, leadership, user, supplier, and shift-handoff communications.",
          "I can validate fictional effective access, sessions, policy, route, source health, user state, service function, owner signoff, monitoring, and closure.",
          "I can create fictional metrics and improvement actions with interpretation, caution, owners, deadlines, success measures, and follow-up.",
          "I will use only fictional evidence and never expose or affect real credentials, messages, logs, employee data, school records, suppliers, cloud resources, websites, applications, incidents, or confidential information.",
        ]} />

        <MiniQuiz title="I16.8 Mini Quiz: Intermediate Multi-Step Lab" questions={quizQuestions} />

        <PortfolioPrompt title="Portfolio Prompt" prompt="Create the complete fictional Northbridge Intermediate Multi-Step Defensive Case Package. Include the charter, evidence register, source-health matrix, normalized timeline, relationship map, case-boundary decision, priority matrix, findings, decision register, owner and authority map, action and rollback plan, communications, user guidance, supplier request, shift handoff, recovery and validation matrix, closure criteria, residual risk, metrics, improvement backlog, technical report, leadership report, reflection, and a portfolio-safety statement." tips={[
          "Use only fictional identities, systems, services, suppliers, messages, logs, web records, cloud resources, dates, identifiers, actions, and outcomes.",
          "Show why coordinated review does not require unsupported case merging.",
          "Make every conclusion and action traceable to evidence, source health, scope, owner, authority, impact limit, and validation.",
          "Demonstrate that completed changes, validated outcomes, and zero residual risk are three different ideas.",
        ]} />

        <KeyTakeaways takeaways={[
          "Integrated defense requires one coordinated picture and evidence-based case boundaries.",
          "Shared timing, severity, or queue placement does not prove a shared cause.",
          "Active unsupported capability should be reduced with proportionate, reversible action.",
          "Source health and coverage determine how confidently impact can be reported.",
          "Different audiences need different updates while the underlying facts remain consistent.",
          "Closure requires validated outcomes, owner signoff, residual-risk statements, and tracked improvements.",
          "Portfolio artifacts must be fully fictional and should never expose or affect real systems or private data.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p><h2 className="mt-2 text-2xl font-bold text-white">Complete Module I16</h2><div className="mt-5"><Navigation /></div></section>
      </div>

      <Footer />
    </main>
  );
}