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
const modulePath = `${trackPath}/security-operations-basics`;
const previousLesson = `${modulePath}/case-management-and-evidence-handling`;
const nextLesson = `${modulePath}/escalation-communication-and-handoffs`;

const objectives = [
  "Explain how fictional detection engineering connects a defensive objective, approved data, source health, logic, thresholds, expected behavior, testing, deployment, monitoring, tuning, ownership, and review.",
  "Distinguish fictional detection goals, data requirements, detection logic, alert severity, triage priority, false positives, false negatives, source gaps, and control limitations.",
  "Design a fictional detection specification that is testable, explainable, privacy-safe, versioned, and linked to a clear defensive decision.",
  "Evaluate fictional tuning changes using approved positive tests, negative tests, boundary tests, replay tests, source-health checks, business validation, rollback, and post-deployment monitoring.",
  "Create a portfolio-safe fictional detection-engineering package with a design record, data map, test plan, tuning history, deployment decision, metrics, findings, and leadership summary."
];
const vocabulary = [
  [
    "Detection objective",
    "A fictional statement describing the defensive condition the detection should identify and the decision it should support."
  ],
  [
    "Detection logic",
    "Fictional approved conditions that evaluate selected data and produce a signal when defined criteria are met."
  ],
  [
    "Data requirement",
    "A fictional field, event, context source, timestamp, identity, asset, change, or service attribute required for dependable detection."
  ],
  [
    "Threshold",
    "A fictional value, count, duration, rate, sequence, or condition that influences whether the detection produces an alert."
  ],
  [
    "Baseline",
    "A fictional reference describing expected behavior, source volume, timing, frequency, or configuration for comparison."
  ],
  [
    "Positive test",
    "A fictional approved test that should trigger the detection when the intended condition is present."
  ],
  [
    "Negative test",
    "A fictional approved test that should not trigger the detection when normal or allowed behavior occurs."
  ],
  [
    "Boundary test",
    "A fictional approved test near a threshold or condition edge used to confirm predictable behavior."
  ],
  [
    "Replay test",
    "A fictional safe test that evaluates detection logic against approved historical or synthetic events without using live sensitive activity."
  ],
  [
    "False positive",
    "A fictional alert that matched the logic but did not represent the harmful condition the detection was intended to identify."
  ],
  [
    "False negative",
    "A fictional harmful test condition that the detection failed to identify."
  ],
  [
    "Tuning",
    "A fictional controlled adjustment to logic, thresholds, context, allow conditions, severity, or data requirements to improve usefulness."
  ],
  [
    "Suppression",
    "A fictional approved rule that prevents selected alerts from being created under narrow, documented, and tested conditions."
  ],
  [
    "Detection drift",
    "A fictional decline in detection quality caused by changes in systems, data, behavior, parsing, identity, services, or business processes."
  ],
  [
    "Version control",
    "A fictional record of detection changes, authors, approvals, test results, deployment dates, rollback, and current version."
  ],
  [
    "Detection coverage",
    "The fictional portion of relevant assets, identities, services, events, data, or scenarios included by the detection and its supporting sources."
  ]
];
const designQuestions = [
  {
    "question": "What defensive decision should the detection support?",
    "strong": "The fictional objective identifies the condition, protected service or asset, likely decision, owner, and required response time.",
    "weak": "The detection exists only because a tool can search for the event.",
    "review": "What changes when this detection fires?"
  },
  {
    "question": "Which exact behavior should be identified?",
    "strong": "The fictional design defines the event pattern, sequence, identity, asset, action, time window, context, and exclusions.",
    "weak": "The logic searches for anything unusual without a testable definition.",
    "review": "Can the intended condition be reproduced safely?"
  },
  {
    "question": "Which data is required?",
    "strong": "The fictional design maps required fields, sources, timestamps, parsing, enrichment, ownership, expected volume, and source-health monitoring.",
    "weak": "The rule assumes every needed field always exists.",
    "review": "What happens when a required source is delayed or missing?"
  },
  {
    "question": "Which allowed behavior may look similar?",
    "strong": "The fictional design documents maintenance, exercises, service identities, scheduled jobs, approved tools, suppliers, and business exceptions.",
    "weak": "Normal activity is discovered only after analysts receive repeated alerts.",
    "review": "Which expected behaviors require context rather than broad suppression?"
  },
  {
    "question": "How will the detection be tested?",
    "strong": "The fictional plan includes positive, negative, boundary, replay, missing-data, timing, duplication, and business-validation tests.",
    "weak": "The detection is deployed after one successful trigger.",
    "review": "Which tests could reveal a false negative or harmful suppression?"
  },
  {
    "question": "Who owns the detection lifecycle?",
    "strong": "The fictional detection engineer, data owner, service owner, SOC reviewer, approver, responder, and rollback authority are identified.",
    "weak": "No one owns source changes, tuning, review, or retirement.",
    "review": "Who maintains quality after deployment?"
  },
  {
    "question": "How will performance be measured?",
    "strong": "The fictional design tracks alert volume, source health, triage outcomes, false positives, false negatives from tests, coverage, aging, and tuning effect.",
    "weak": "Success is measured only by the number of alerts.",
    "review": "Does the metric show useful defensive decisions or just activity?"
  },
  {
    "question": "How will the detection change safely?",
    "strong": "The fictional process requires versioning, peer review, approval, staged deployment, monitoring, rollback, documentation, and later reassessment.",
    "weak": "An analyst edits production logic directly during a noisy shift.",
    "review": "Can the prior version be restored and compared?"
  }
];
const detectionRecords = [
  {
    "id": "NBR-DET-01",
    "title": "Access after supplier exception expiration",
    "objective": "Identify fictional supplier identities that remain active or perform access after approved exception expiration.",
    "data": "Identity lifecycle, exception register, authentication, service access, sponsor, project status, and source health.",
    "logic": "Alert when an in-scope supplier identity is active after expiration or accesses the protected service after the allowed end time.",
    "expected": "A documented narrow renewal should be enriched and reviewed rather than automatically suppressed.",
    "risk": "Broad supplier exclusions could hide stale access.",
    "owner": "Identity Detection Engineer",
    "status": "Ready for staged testing"
  },
  {
    "id": "NBR-DET-02",
    "title": "Maintenance access outside approved scope",
    "objective": "Identify fictional maintenance identities performing actions outside the approved service, task, or change window.",
    "data": "Change record, maintenance identity, service scope, action type, timestamps, approval, asset, and activity evidence.",
    "logic": "Alert only when activity exceeds approved service, action, identity, or time boundaries.",
    "expected": "Approved maintenance within exact scope should not create a high-priority alert.",
    "risk": "A broad maintenance allowlist could hide misuse during an approved window.",
    "owner": "Service Detection Engineer",
    "status": "Needs boundary tests"
  },
  {
    "id": "NBR-DET-03",
    "title": "Critical audit-source delivery gap",
    "objective": "Identify fictional loss of required security evidence for critical services.",
    "data": "Expected delivery interval, last event time, parser state, source owner, service criticality, maintenance, and alternate evidence.",
    "logic": "Alert when required source delivery exceeds the approved delay threshold and no planned maintenance explains the gap.",
    "expected": "Short approved connector maintenance should create a low-priority operational notice rather than a high-priority alert.",
    "risk": "A long threshold may create dangerous monitoring blind spots.",
    "owner": "Telemetry Detection Engineer",
    "status": "Deployed with review"
  },
  {
    "id": "NBR-DET-04",
    "title": "Unapproved confidential storage-policy change",
    "objective": "Identify fictional access-policy changes affecting confidential storage outside approved change controls.",
    "data": "Configuration history, effective policy, identity, approval, asset classification, change window, service owner, and source health.",
    "logic": "Alert when an in-scope confidential policy changes without a matching approved change or emergency authorization.",
    "expected": "Approved changes should remain visible in low-noise audit reporting.",
    "risk": "Relying only on change-ticket text may miss incorrect effective permissions.",
    "owner": "Cloud Detection Engineer",
    "status": "Ready for staged deployment"
  },
  {
    "id": "NBR-DET-05",
    "title": "Privileged exercise sign-in",
    "objective": "Distinguish fictional approved emergency exercise access from unsupported privileged access.",
    "data": "Exercise plan, emergency network, privileged identity, session activity, approval, time window, service, and owner validation.",
    "logic": "Enrich exercise-matching activity and alert when identity, network, time, action, or target exceeds the approved exercise scope.",
    "expected": "Exact approved exercise behavior should produce a reviewable informational record.",
    "risk": "Suppressing all emergency-network sign-ins could hide unrelated activity.",
    "owner": "Identity Detection Engineer",
    "status": "Needs negative tests"
  },
  {
    "id": "NBR-DET-06",
    "title": "Repeated user lockout anomaly",
    "objective": "Identify fictional lockout patterns that exceed supported user-error behavior and may require identity investigation.",
    "data": "Lockout count, sign-in source, identity type, help-desk record, password reset, timing, asset, and prior behavior.",
    "logic": "Escalate when repeated lockouts cross the threshold without a matching support event or when scope expands across identities.",
    "expected": "A documented single-user password-reset problem should remain low priority.",
    "risk": "A fixed threshold may perform poorly during large password-reset events.",
    "owner": "Identity Operations",
    "status": "Tuning review open"
  },
  {
    "id": "NBR-DET-07",
    "title": "Case closure with unresolved evidence",
    "objective": "Identify fictional SOC cases marked ready for closure while required evidence, validation, owner decisions, or follow-up remain incomplete.",
    "data": "Case status, evidence checklist, source-health issues, action log, approvals, validation, residual risk, and peer review.",
    "logic": "Alert when Ready for Review or Closed conflicts with incomplete required fields.",
    "expected": "Low-risk duplicate cases may use an approved simplified closure path.",
    "risk": "Overly rigid logic could block proportionate closure.",
    "owner": "SOC Quality Engineer",
    "status": "Design review"
  },
  {
    "id": "NBR-DET-08",
    "title": "Supplier notification service degradation",
    "objective": "Identify fictional time-sensitive supplier delivery degradation that threatens important user communication.",
    "data": "Supplier status, internal delivery rate, notification deadline, alternate channel, service owner, contract threshold, and recovery state.",
    "logic": "Alert when delivery falls below the approved service threshold during a critical notification window.",
    "expected": "Minor delay outside important windows should remain operational reporting.",
    "risk": "The rule must not imply malicious cause when only service degradation is supported.",
    "owner": "Supplier Monitoring Engineer",
    "status": "Pilot"
  }
];
const testTypes = [
  {
    "type": "Positive test",
    "purpose": "Confirm the fictional detection triggers for the exact intended defensive condition.",
    "example": "Synthetic supplier access occurs after exception expiration on the protected service.",
    "success": "Expected alert, entities, timestamps, evidence fields, severity, owner, and case path appear.",
    "failure": "No alert, missing context, wrong entity, or delayed signal."
  },
  {
    "type": "Negative test",
    "purpose": "Confirm the fictional detection does not produce an unnecessary alert for approved normal behavior.",
    "example": "Approved maintenance activity remains within exact identity, service, action, and time boundaries.",
    "success": "No high-priority alert; expected audit record or enrichment remains available.",
    "failure": "Normal behavior creates repeated analyst workload."
  },
  {
    "type": "Boundary test",
    "purpose": "Confirm fictional behavior just below, at, and above thresholds or time limits is predictable.",
    "example": "Audit-source delay is tested immediately before, at, and after the approved threshold.",
    "success": "The rule changes state exactly as documented.",
    "failure": "Off-by-one timing, duplicate alerts, or unstable severity appears."
  },
  {
    "type": "Missing-data test",
    "purpose": "Confirm the fictional detection behaves safely when required fields or sources are absent.",
    "example": "The change-approval field is missing while configuration evidence remains healthy.",
    "success": "The alert records reduced confidence or source-health risk instead of making an unsupported conclusion.",
    "failure": "The rule silently treats missing data as approved or malicious."
  },
  {
    "type": "Duplicate test",
    "purpose": "Confirm repeated fictional events are grouped, linked, or rate-limited without losing meaningful scope.",
    "example": "The same source-gap condition reports every minute for forty minutes.",
    "success": "One coherent alert or case preserves duration and updates.",
    "failure": "The queue receives forty unrelated alerts or loses the continuing condition."
  },
  {
    "type": "Replay test",
    "purpose": "Evaluate fictional logic against approved historical or synthetic event sequences.",
    "example": "Prior approved maintenance events and synthetic out-of-scope events are replayed together.",
    "success": "Expected behavior is separated from test violations.",
    "failure": "The rule suppresses both or alerts on both without distinction."
  },
  {
    "type": "Business validation test",
    "purpose": "Confirm the fictional alert and response fit the service owner’s real operational decision.",
    "example": "The service owner reviews whether the alert identifies activity that requires intervention.",
    "success": "The alert supports a clear owner action without unnecessary disruption.",
    "failure": "The detection is technically correct but operationally unusable."
  },
  {
    "type": "Rollback and recovery test",
    "purpose": "Confirm the fictional detection can return to the approved prior version if quality or source issues appear.",
    "example": "A staged tuning change causes unexpected alert volume and is rolled back.",
    "success": "Prior logic, documentation, source monitoring, and alert behavior are restored.",
    "failure": "The team cannot identify or restore the prior version."
  }
];
const tuningChanges = [
  {
    "id": "TUNE-01",
    "problem": "Fictional maintenance alerts repeatedly trigger on exact approved activity.",
    "proposed": "Enrich with change identity, service, action, and time boundaries; lower priority only when all approved fields match.",
    "benefit": "Reduces analyst noise while preserving out-of-scope detection.",
    "risk": "Incomplete change records could create incorrect low-priority classification.",
    "tests": "Positive out-of-scope, negative exact-scope, missing-change-field, boundary-time, and replay tests.",
    "decision": "Approve staged pilot with source-health warning and rollback."
  },
  {
    "id": "TUNE-02",
    "problem": "Fictional audit-source gap alerts arrive every minute.",
    "proposed": "Group updates into one active alert while preserving start time, duration, service scope, and recovery.",
    "benefit": "Reduces duplicates and preserves the complete blind-spot timeline.",
    "risk": "Grouping could hide expansion to new sources or services.",
    "tests": "Duplicate, scope-expansion, recovery, threshold, and case-link tests.",
    "decision": "Approve after scope-expansion behavior passes."
  },
  {
    "id": "TUNE-03",
    "problem": "Fictional lockout detection creates noise during approved password-reset campaigns.",
    "proposed": "Add approved campaign context while retaining escalation for privileged identities, unusual sources, or expanding scope.",
    "benefit": "Improves queue usefulness during known support events.",
    "risk": "Overbroad campaign context could hide unrelated lockouts.",
    "tests": "Exact-campaign negative, unrelated-user positive, privileged-user positive, time-boundary, and missing-context tests.",
    "decision": "Pilot with narrow scope and daily quality review."
  },
  {
    "id": "TUNE-04",
    "problem": "Fictional supplier expiration detection misses accounts whose exception record is absent.",
    "proposed": "Use project end and sponsor status as additional context and raise missing-governance-data alerts.",
    "benefit": "Improves coverage when the exception register is incomplete.",
    "risk": "Project records may not represent current approved support needs.",
    "tests": "Expired exception, missing exception, renewed support, missing sponsor, and source-conflict tests.",
    "decision": "Approve only with owner review before access action."
  },
  {
    "id": "TUNE-05",
    "problem": "Fictional storage-policy detection checks change tickets but not effective permissions.",
    "proposed": "Add effective-policy comparison and asset classification context.",
    "benefit": "Improves detection of actual access-control impact.",
    "risk": "Permission calculation delay may create stale results.",
    "tests": "Approved no-impact change, unapproved expansion, delayed-effective-state, rollback, and source-health tests.",
    "decision": "Stage after timing and parser validation."
  },
  {
    "id": "TUNE-06",
    "problem": "Fictional case-quality detection blocks simplified duplicate closure.",
    "proposed": "Add an approved low-risk duplicate closure path with mandatory linkage and no-new-scope validation.",
    "benefit": "Preserves proportional workflow without weakening case traceability.",
    "risk": "Analysts may misuse the simplified path.",
    "tests": "True duplicate, new-scope, missing-link, historical-case, and reviewer-approval tests.",
    "decision": "Approve with monthly quality sampling."
  }
];
const detectionWorkflow = [
  {
    "step": "1",
    "title": "Define the defensive objective",
    "detail": "State the fictional condition, protected asset or service, expected decision, priority concept, owner, time requirement, and evidence boundary.",
    "output": "Detection charter."
  },
  {
    "step": "2",
    "title": "Map data and source health",
    "detail": "Document fictional sources, fields, timestamps, enrichment, ownership, coverage, parsing, delivery, expected volume, and failure behavior.",
    "output": "Data requirement map."
  },
  {
    "step": "3",
    "title": "Describe logic and context",
    "detail": "Define fictional events, sequence, thresholds, time window, entities, scope, expected behavior, exceptions, and evidence limitations.",
    "output": "Detection specification."
  },
  {
    "step": "4",
    "title": "Build the test plan",
    "detail": "Create fictional positive, negative, boundary, missing-data, duplicate, replay, business-validation, and rollback tests.",
    "output": "Approved test matrix."
  },
  {
    "step": "5",
    "title": "Peer-review and approve",
    "detail": "Review fictional privacy, safety, source assumptions, logic, false-positive and false-negative risk, owner actions, severity, and rollback.",
    "output": "Review and approval record."
  },
  {
    "step": "6",
    "title": "Stage and monitor",
    "detail": "Deploy the fictional detection to a limited scope, monitor alerts, source health, case outcomes, service effects, and unexpected behavior.",
    "output": "Pilot monitoring record."
  },
  {
    "step": "7",
    "title": "Tune with evidence",
    "detail": "Adjust fictional logic, context, thresholds, grouping, severity, or workflow only after documented findings and repeatable testing.",
    "output": "Tuning and version history."
  },
  {
    "step": "8",
    "title": "Validate and review",
    "detail": "Confirm fictional defensive usefulness, coverage, case quality, business value, residual gaps, owner signoff, metrics, and reassessment triggers.",
    "output": "Detection assurance package."
  }
];
const findings = [
  {
    "id": "NBR-DET-F01",
    "statement": "The fictional maintenance detection should use exact approved context rather than a broad maintenance suppression.",
    "support": "Repeated exact-scope alerts, approved change fields, risk of out-of-scope activity, available identity and action context, and staged test plan.",
    "alternative": "A simpler threshold change may reduce enough noise without complex enrichment.",
    "confidence": "High",
    "limitation": "Detection quality depends on current and complete change records."
  },
  {
    "id": "NBR-DET-F02",
    "statement": "The fictional source-gap detection should preserve one active case while recording duration and scope expansion.",
    "support": "Repeated duplicate alerts, confirmed source gap, stable service scope, need for a coherent timeline, and available grouping logic.",
    "alternative": "Separate alerts may be useful when different source owners or services are affected.",
    "confidence": "High",
    "limitation": "Grouping must not hide new sources or broader impact."
  },
  {
    "id": "NBR-DET-F03",
    "statement": "The fictional supplier-expiration detection requires owner review before automatic access removal.",
    "support": "Expired exception risk, possible undocumented support need, incomplete activity review, current access, service dependency, and governance owner.",
    "alternative": "A clearly unauthorized inactive account may qualify for automated disablement under an approved runbook.",
    "confidence": "Medium-High",
    "limitation": "Current business need may be incompletely documented."
  },
  {
    "id": "NBR-DET-F04",
    "statement": "The fictional storage-policy detection should compare effective permissions rather than ticket presence alone.",
    "support": "Confidential data, configuration history, approved baseline, possible permission expansion, and delayed effective-state risk.",
    "alternative": "Change-ticket mismatch may still be useful as a separate governance alert.",
    "confidence": "High",
    "limitation": "Permission evaluation must be timely and correctly parsed."
  },
  {
    "id": "NBR-DET-F05",
    "statement": "The fictional lockout detection should use narrow campaign context but retain privileged and scope-expansion triggers.",
    "support": "Repeated support-related noise, approved campaign, user-error records, privileged identity risk, and expansion scenarios.",
    "alternative": "Analyst enrichment may be sufficient without changing the rule.",
    "confidence": "Medium-High",
    "limitation": "Campaign records may be delayed or incomplete."
  },
  {
    "id": "NBR-DET-F06",
    "statement": "A fictional detection should not be considered effective merely because it generates alerts.",
    "support": "Need for source health, positive and negative tests, case outcomes, false-positive review, false-negative tests, owner actions, and business validation.",
    "alternative": "Alert generation may be an acceptable early pilot milestone.",
    "confidence": "High",
    "limitation": "Long-term effectiveness requires enough operational data and review time."
  }
];
const commonMistakes = [
  "Creating fictional detections because data is available instead of because a defensive decision requires them.",
  "Writing broad unusual-activity logic that cannot be tested or explained.",
  "Treating one successful positive test as proof of detection effectiveness.",
  "Skipping negative, boundary, missing-data, duplicate, replay, business-validation, or rollback tests.",
  "Using broad allowlists or suppressions that can hide out-of-scope activity.",
  "Tuning only to reduce alert volume without checking false-negative risk.",
  "Changing production logic without version control, peer review, approval, staging, monitoring, and rollback.",
  "Assuming required fields, parsing, timestamps, identity context, asset context, and change records are always healthy.",
  "Using alert count as the only measure of detection quality.",
  "Treating a false positive as proof that the detection has no value.",
  "Treating a true positive test as proof that every real alert represents an incident.",
  "Failing to connect the detection to a case owner, service owner, control owner, decision path, and response deadline.",
  "Keeping a fictional detection after its service, data, threat model, or business decision has changed.",
  "Using or exposing any real company detection logic, credentials, private logs, employee information, school records, supplier details, incident evidence, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "What should come first in fictional detection engineering?",
    "choices": [
      "A clear defensive objective and decision the detection should support.",
      "The largest available data source.",
      "A high severity label.",
      "A broad suppression list."
    ],
    "answer": 0,
    "explanation": "The detection should exist to support a defined defensive decision."
  },
  {
    "question": "Why are fictional negative tests important?",
    "choices": [
      "They confirm approved or expected behavior does not create unnecessary alerts.",
      "They prove the detection will never miss harmful activity.",
      "They replace positive tests.",
      "They remove the need for source health."
    ],
    "answer": 0,
    "explanation": "Negative tests help measure noise and unintended matching."
  },
  {
    "question": "What is the safest way to tune repeated fictional maintenance alerts?",
    "choices": [
      "Use exact approved identity, service, action, and time context with positive, negative, missing-data, and boundary tests.",
      "Suppress every alert during maintenance windows.",
      "Delete the detection.",
      "Lower every alert to Low severity."
    ],
    "answer": 0,
    "explanation": "Narrow context reduces noise without creating a broad blind spot."
  },
  {
    "question": "What should happen when a required fictional data source is delayed?",
    "choices": [
      "Record the source-health limitation and make the detection fail safely rather than silently assuming approval or harm.",
      "Assume the event is benign.",
      "Assume an incident occurred.",
      "Remove the source requirement without review."
    ],
    "answer": 0,
    "explanation": "Missing data should change confidence and workflow visibly."
  },
  {
    "question": "What is detection drift?",
    "choices": [
      "A decline in fictional detection quality caused by changing systems, data, behavior, parsing, identities, or business processes.",
      "An increase in alert severity.",
      "A completed case closure.",
      "A supplier contract renewal."
    ],
    "answer": 0,
    "explanation": "Detections require reassessment as the environment changes."
  },
  {
    "question": "What makes a fictional tuning change defensible?",
    "choices": [
      "Documented problem, expected benefit, false-negative risk, test matrix, approval, staging, monitoring, versioning, rollback, and review.",
      "Lower alert volume alone.",
      "An analyst preference.",
      "A direct production edit."
    ],
    "answer": 0,
    "explanation": "Safe tuning requires an evidence-based and reversible change process."
  },
  {
    "question": "What proves a fictional detection is effective?",
    "choices": [
      "Healthy data, reliable tests, useful case outcomes, acceptable noise, known coverage, owner action, business validation, and continued review.",
      "It creates many alerts.",
      "It triggered once.",
      "It has a High severity label."
    ],
    "answer": 0,
    "explanation": "Effectiveness requires both technical and operational evidence."
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

export default function DetectionEngineeringTuningBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I15
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.4 Detection Engineering and Tuning Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders create fictional detection objectives, map
            approved data, write explainable logic, test expected and harmful
            conditions, tune safely, monitor source health, control versions,
            measure usefulness, and review long-term quality.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I15: Security Operations Basics"
          lessonTitle="Detection Engineering and Tuning Basics"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge detections, data sources, identities, services, suppliers, cases, tests, and decisions.",
            "I will not request, expose, or evaluate real company detection logic, credentials, private logs, employee information, school records, supplier details, incident evidence, or confidential SOC information.",
            "I will distinguish detection objective, logic, data requirement, threshold, source health, alert severity, triage priority, false positive, false negative, tuning, suppression, and drift.",
            "I will not treat one successful test, one alert, low alert volume, or repeated expected activity as proof of detection effectiveness.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Reducing Noise Is Not the Same as Improving Detection"
        >
          <p className="leading-8">
            A fictional Northbridge detection repeatedly alerts during approved
            maintenance. The easiest change would be to suppress all activity
            during maintenance windows. That would reduce noise, but it could
            also hide actions outside the approved identity, service, task, or
            time boundary. Professional tuning narrows the expected context,
            preserves risky differences, tests missing data, stages the change,
            monitors results, and keeps rollback ready.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak detection change
              </p>

              <p className="mt-2 leading-7">
                Edit production logic directly, suppress broad categories,
                test only one positive event, ignore source health, measure only
                alert count, and leave no rollback or owner.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional detection change
              </p>

              <p className="mt-2 leading-7">
                Define the decision, map required data, test expected and risky
                behavior, peer-review, stage, monitor, tune with evidence,
                version, validate, and reassess.
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
          title="Detections Shape Analyst Workload, Visibility, Escalation, and Response"
        >
          <p className="leading-8">
            Fictional detections can reveal active access, critical source gaps,
            unsupported configuration changes, supplier risks, or weak case
            closure. Poorly designed logic can overwhelm analysts or create
            blind spots. Strong detection engineering connects healthy data,
            explainable logic, repeatable testing, useful owner actions,
            business context, version control, and continuous review.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Objective–Data–Logic–Test–Operate Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Objective", "Which fictional harmful or risky condition should be identified, for which service, and which defensive decision should follow?"],
              ["Data", "Which fictional sources, fields, timestamps, context, coverage, parsing, ownership, and health checks are required?"],
              ["Logic", "Which fictional sequence, threshold, entity, scope, expected behavior, exception, severity, and limitation define the signal?"],
              ["Test", "Which fictional positive, negative, boundary, missing-data, duplicate, replay, business, and rollback tests prove predictable behavior?"],
              ["Operate", "Which fictional owner, case path, monitoring, metrics, tuning, versioning, rollback, and review sustain quality after deployment?"],
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
            Detection Engineering, Testing, and Tuning Terms
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
            Detection Design
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Writing Fictional Detection Logic
          </h2>

          <div className="mt-6 grid gap-5">
            {designQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak design
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Detection Catalog
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Detection Records
          </h2>

          <div className="mt-6 grid gap-5">
            {detectionRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">{item.title}</h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    {item.status}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Objective", item.objective],
                    ["Data requirements", item.data],
                    ["Logic concept", item.logic],
                    ["Expected behavior", item.expected],
                    ["Design risk", item.risk],
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
            Test Strategy
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Fictional Detection Test Types
          </h2>

          <div className="mt-6 grid gap-5">
            {testTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Fictional example", item.example],
                    ["Success condition", item.success],
                    ["Failure signal", item.failure],
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
            Tuning Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Tuning Decisions
          </h2>

          <div className="mt-6 grid gap-5">
            {tuningChanges.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.problem}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Proposed change", item.proposed],
                    ["Expected benefit", item.benefit],
                    ["False-negative or quality risk", item.risk],
                    ["Required tests", item.tests],
                    ["Decision", item.decision],
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
            Detection Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Objective to Detection Assurance
          </h2>

          <div className="mt-6 grid gap-4">
            {detectionWorkflow.map((item) => (
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
          title="Fake Northbridge Detection Engineering Dashboard"
          subtitle="Training dashboard for fictional detection quality only."
          metrics={[
            {
              label: "Detections under review",
              value: "8",
              note: "Design, pilot, tuning, staged deployment, and source-health review states are represented.",
            },
            {
              label: "Open tuning changes",
              value: "6",
              note: "Each change includes expected benefit, quality risk, tests, decision, and rollback requirements.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The fictional records support detection and control improvements but do not confirm an incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Maintenance Detection Produces Repeated High-Severity Alerts"
          severity="Medium"
          time="9:06 PM"
          source="Fake Northbridge Detection Quality Console"
          details="A fictional detection alerts whenever maintenance identities access the confidential support service, including activity that remains within approved identity, service, action, and time boundaries."
          recommendation="Do not broadly suppress maintenance activity. Add exact approved context, preserve out-of-scope triggers, test positive, negative, boundary, missing-data, and replay conditions, stage the change, monitor case outcomes, and keep rollback ready."
        />

        <FakeLogPanel
          title="Fake Northbridge Detection Change Timeline"
          logs={[
            "08:00 OBJECTIVE maintenance-scope='defined'",
            "08:08 DATA change-record='healthy'",
            "08:16 DATA service-activity='healthy'",
            "08:24 FINDING repeated-alerts='approved exact scope'",
            "08:32 RISK broad-suppression='could hide out-of-scope'",
            "08:40 DESIGN context='identity+service+action+time'",
            "08:48 TEST positive-out-of-scope='pass'",
            "08:56 TEST negative-exact-scope='pass'",
            "09:04 TEST missing-change-field='warning generated'",
            "09:12 TEST boundary-time='pass'",
            "09:20 TEST replay='pass'",
            "09:28 REVIEW peer='approved pilot'",
            "09:36 DEPLOY scope='limited'",
            "09:44 MONITOR alert-volume='reduced'",
            "09:52 MONITOR missed-test-events='0'",
            "10:00 VERSION v='2.1' rollback='ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Detection Findings and Limits
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

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

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
                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Should Northbridge Suppress All Maintenance Alerts?"
          evidence={[
            "The fictional detection repeatedly alerts on exact approved maintenance activity.",
            "The current rule does not use service, action, identity, and time boundaries together.",
            "Maintenance windows could also contain out-of-scope activity.",
            "Change records and service activity sources are healthy.",
            "Approved positive, negative, boundary, missing-data, and replay tests are available.",
            "No supplied evidence supports removing the detection entirely.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "Northbridge should tune with narrow approved context and staged testing rather than broadly suppress all maintenance alerts.",
            "Every maintenance alert should be permanently suppressed.",
            "The detection is effective because it produces many alerts.",
            "The detection should be deleted immediately.",
          ]}
          bestAnswer={0}
          explanation="Narrow context can reduce noise while preserving detection of meaningful differences."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Detection Engineering and Tuning"
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
          title="Build the Northbridge Detection Engineering and Tuning Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Objective, Data, Logic, Tests, Deployment, Tuning, and Assurance
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to design,
                test, stage, tune, and review one defensive detection.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Detection charter with objective, scope, decision, owner, service, privacy, and response time.</li>
                <li>Data map with sources, fields, timestamps, enrichment, parsing, coverage, ownership, and source-health behavior.</li>
                <li>Logic specification with events, entities, thresholds, sequence, expected behavior, exclusions, severity, and limitations.</li>
                <li>Positive, negative, boundary, missing-data, duplicate, replay, business-validation, and rollback test matrix.</li>
                <li>Peer-review, approval, staged-deployment, monitoring, and rollback plan.</li>
                <li>Tuning record with problem, evidence, expected benefit, false-negative risk, tests, version, and decision.</li>
                <li>Quality metrics covering source health, coverage, alert outcomes, noise, tests, case value, and drift.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real detection logic, credentials, company logs,
            employee information, school records, supplier data, incidents, or
            confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The SOC Manager Wants to Suppress Every Alert during Maintenance"
          scenario="The fictional alerts are noisy, but the current rule cannot distinguish exact approved scope from out-of-scope activity."
          choices={[
            {
              label: "Choice A",
              response:
                "Add narrow identity, service, action, and time context; run positive, negative, missing-data, boundary, and replay tests; stage the change; monitor; and keep rollback ready.",
              outcome:
                "Best tuning choice. Noise is reduced without creating a broad blind spot.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Suppress every alert whenever a maintenance window exists.",
              outcome:
                "Unsafe. Out-of-scope activity could be hidden.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Make no change because every alert is technically correct.",
              outcome:
                "Weak. Operational usefulness and analyst workload still matter.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Tuning Pilot Cuts Alert Volume by Eighty Percent"
          scenario="The fictional pilot produces far fewer alerts, but the team has not completed positive replay tests or reviewed missed-event risk."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the change in limited pilot, complete positive and replay tests, inspect missed-event risk, validate case outcomes, and approve only after evidence supports effectiveness.",
              outcome:
                "Best quality choice. Lower volume is treated as one signal, not proof.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Deploy globally because lower alert volume proves better quality.",
              outcome:
                "Unsafe. False negatives have not been evaluated.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Roll back immediately because any large reduction is suspicious.",
              outcome:
                "Premature. The pilot should be tested before the final decision.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Detection Engineering and Tuning Checklist"
          items={[
            "I can define a fictional detection objective linked to a protected service, clear decision, owner, and response time.",
            "I can map fictional data sources, fields, timestamps, enrichment, parsing, coverage, ownership, and source-health behavior.",
            "I can distinguish fictional detection logic, alert severity, triage priority, thresholds, expected behavior, false positives, false negatives, and drift.",
            "I can design fictional positive, negative, boundary, missing-data, duplicate, replay, business-validation, and rollback tests.",
            "I can use narrow fictional context instead of broad allowlists or suppressions.",
            "I can stage fictional detections and tuning changes with peer review, approval, monitoring, version control, and rollback.",
            "I can measure fictional source health, coverage, test results, alert outcomes, case value, noise, missed-test risk, and tuning effect.",
            "I can document fictional findings with evidence, alternatives, confidence, limitations, owner, decision, and next action.",
            "I can reassess fictional detections when systems, services, identities, suppliers, sources, or business processes change.",
            "I will use only fictional evidence and never expose real detection logic, credentials, logs, employee data, school records, suppliers, incidents, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.4 Mini Quiz: Detection Engineering and Tuning Basics"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Detection Engineering and Tuning Package for Northbridge. Include the detection charter, data requirement map, source-health plan, logic specification, expected-behavior map, test matrix, peer review, deployment plan, monitoring, tuning history, version control, rollback, quality metrics, findings, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional detections, systems, identities, suppliers, services, sources, tests, alerts, cases, versions, actions, and outcomes.",
            "Do not treat low alert volume, one successful trigger, repeated expected activity, or a false positive as automatic proof of quality or failure.",
            "Make every tuning decision traceable to evidence, expected benefit, false-negative risk, tests, approval, monitoring, and rollback.",
            "Show why narrow context is safer than broad suppression.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Detection engineering begins with a defensive objective and decision, not with available data alone.",
            "Source health, context, logic, testing, case value, and owner action determine detection usefulness.",
            "Positive tests are not enough; negative, boundary, missing-data, duplicate, replay, business, and rollback tests matter.",
            "Tuning should reduce unnecessary noise without creating hidden false negatives.",
            "Broad suppressions are riskier than narrow, tested, explainable context.",
            "Every change should be reviewed, staged, monitored, versioned, reversible, and reassessed.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational detection logic.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I15
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