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
const modulePath = `${trackPath}/detection-engineering`;
const previousLesson = `${modulePath}/behavior-based-detection-thinking`;
const nextLesson = `${modulePath}/detection-tuning-and-context`;

const objectives = [
  "Distinguish fictional true positive, expected alert, false positive, false negative, true negative, unknown outcome, source-degraded outcome, and labeling error without reducing detection quality to alert volume alone.",
  "Analyze fictional false-positive and false-negative causes across mission scope, source health, field meaning, logic design, timing, context, peer groups, thresholds, testing, labeling, analyst guidance, and lifecycle ownership.",
  "Evaluate fictional detection tradeoffs using coverage, precision, recall concepts, missed-condition risk, analyst effort, user impact, operational impact, privacy, confidence, and residual risk.",
  "Design a fictional detection-quality review with case sampling, synthetic regression, missed-condition review, source-health validation, disagreement handling, corrective action, validation, rollback, and completion criteria.",
  "Create a portfolio-ready fictional detection-quality register containing outcome labels, evidence, confidence, root-cause hypotheses, improvement actions, owners, metrics, limitations, and review triggers.",
];

const vocabulary = [
  [
    "True positive",
    "A fictional alert that correctly identifies a condition within the documented detection objective and is supported by sufficient evidence.",
  ],
  [
    "Expected alert",
    "A fictional alert that correctly reports a defined condition even though the activity is approved, benign, planned, or operationally necessary.",
  ],
  [
    "False positive",
    "A fictional alert that appears to match the intended risk but is explained by acceptable activity, incorrect context, weak logic, source problems, or labeling error.",
  ],
  [
    "False negative",
    "A fictional meaningful condition within the intended scope that the detection did not identify.",
  ],
  [
    "True negative",
    "A fictional case in which the relevant condition is absent and the detection correctly does not alert.",
  ],
  [
    "Unknown outcome",
    "A fictional case that cannot be labeled confidently because evidence, scope, source health, ownership, or business context is incomplete.",
  ],
  [
    "Source-degraded outcome",
    "A fictional case whose result cannot be interpreted normally because required evidence is delayed, incomplete, conflicting, stale, or blind.",
  ],
  [
    "Labeling error",
    "A fictional case in which the assigned outcome category is wrong because the reviewer misunderstood the objective, evidence, context, or completion criteria.",
  ],
  [
    "Precision concept",
    "The fictional proportion of alerts that are useful and correctly aligned with the documented detection objective.",
  ],
  [
    "Recall concept",
    "The fictional proportion of meaningful in-scope conditions that the detection identifies.",
  ],
  [
    "Coverage",
    "The fictional identities, devices, services, environments, states, time periods, evidence sources, and workflows that a detection can evaluate.",
  ],
  [
    "Missed-condition review",
    "A fictional retrospective process for identifying meaningful in-scope conditions that did not alert.",
  ],
  [
    "Outcome confidence",
    "A fictional rating describing how strongly the evidence supports the assigned outcome label.",
  ],
  [
    "Ground-truth limitation",
    "A fictional uncertainty about whether the organization can know the complete and correct outcome for a case.",
  ],
  [
    "Sampling bias",
    "A fictional distortion caused by reviewing only certain alerts, services, identities, time periods, or known incidents.",
  ],
  [
    "Overfitting",
    "A fictional condition in which logic performs well on a narrow test set but poorly on other valid cases or operating conditions.",
  ],
  [
    "Underfitting",
    "A fictional condition in which logic is too broad or simple to represent the meaningful behavior and context needed for the defender question.",
  ],
  [
    "Threshold sensitivity",
    "The fictional degree to which small threshold changes alter alert volume, coverage, or missed-condition risk.",
  ],
  [
    "Context gap",
    "A fictional missing identity, service, destination, assignment, change, maintenance, peer, policy, source-health, or owner detail that affects interpretation.",
  ],
  [
    "Suppression debt",
    "Fictional risk created when broad or stale exclusions hide behavior and require future review, testing, or removal.",
  ],
  [
    "Quality defect",
    "A fictional source, field, logic, timing, test, label, documentation, workflow, ownership, or lifecycle weakness that reduces detection reliability.",
  ],
  [
    "Corrective action",
    "A fictional approved change intended to reduce a detection-quality defect or its impact.",
  ],
  [
    "Validation gate",
    "A fictional measurable condition required before a detection-quality improvement is approved or expanded.",
  ],
  [
    "Review trigger",
    "A fictional event requiring revalidation, such as source, schema, logic, threshold, identity, service, peer, policy, workflow, or mission change.",
  ],
];

const outcomeTypes = [
  {
    type: "True positive",
    definition:
      "The fictional detection correctly identifies a condition within its documented objective, scope, and evidence model.",
    example:
      "A temporary emergency role remains active after expiration with no approved extension, healthy source evidence, and confirmed effective access.",
    evidenceNeeded:
      "Detection objective, in-scope condition, source health, identity, authorization, effective state, owner validation, and impact.",
    commonError:
      "Calling every alert a true positive before confirming that the condition matches the objective.",
    action:
      "Preserve the alert, review severity and response, and use the case as a positive regression example.",
  },
  {
    type: "Expected alert",
    definition:
      "The fictional detection correctly identifies a defined condition that is approved or benign but still intentionally observable.",
    example:
      "An approved emergency role remains active during a documented extension and the detection is designed to report all extended privileged access.",
    evidenceNeeded:
      "Purpose, approved extension, owner, identity, destination, timing, source health, and detection objective.",
    commonError:
      "Mislabeling every approved alert as a false positive.",
    action:
      "Decide whether the alert remains valuable, needs different severity, or should be grouped rather than suppressed.",
  },
  {
    type: "False positive",
    definition:
      "The fictional alert appears to match the intended risk but is explained by acceptable activity or a detection-quality defect.",
    example:
      "The role alert fires because extension evidence arrived late even though the extension was valid.",
    evidenceNeeded:
      "Alert, extension, source timing, field meaning, owner, logic behavior, test history, and source-health state.",
    commonError:
      "Assuming false positives are caused only by thresholds.",
    action:
      "Identify source, context, timing, logic, labeling, or workflow cause and implement a narrow tested correction.",
  },
  {
    type: "False negative",
    definition:
      "A fictional meaningful in-scope condition occurs but the detection does not identify it.",
    example:
      "A stale emergency role is missed because a required identity population is outside the source coverage.",
    evidenceNeeded:
      "Confirmed condition, intended scope, source coverage, field presence, logic version, timing, tests, and owner review.",
    commonError:
      "Assuming no alert means no condition occurred.",
    action:
      "Review coverage, source health, logic, test gaps, peer or baseline design, and residual risk before expanding.",
  },
  {
    type: "True negative",
    definition:
      "The fictional condition is absent and the detection correctly does not alert.",
    example:
      "An emergency role is revoked on time and all required evidence is healthy.",
    evidenceNeeded:
      "Confirmed normal outcome, source health, required fields, logic version, timing, and test expectation.",
    commonError:
      "Counting all quiet periods as true negatives without confirming source health and condition absence.",
    action:
      "Preserve as a negative regression example and continue monitoring coverage.",
  },
  {
    type: "Unknown outcome",
    definition:
      "The fictional case cannot be labeled confidently because important evidence or context is unresolved.",
    example:
      "The role appears active after expiration, but group, session, and extension sources conflict.",
    evidenceNeeded:
      "Conflicting records, source health, owner review, alternate evidence, scope, and unresolved questions.",
    commonError:
      "Forcing every case into true positive or false positive.",
    action:
      "Keep the case unresolved, document confidence limits, request evidence, and reassess.",
  },
  {
    type: "Source-degraded outcome",
    definition:
      "The fictional result is limited because one or more required sources or fields are delayed, blind, stale, incomplete, or conflicting.",
    example:
      "A missed application correlation occurs during a known source blind period.",
    evidenceNeeded:
      "Health state, blind-period timeline, affected logic, alternate sources, backlog, recovery, and reassessment.",
    commonError:
      "Treating source degradation as proof that the underlying condition did or did not occur.",
    action:
      "Separate source defect from behavior outcome and re-evaluate when evidence recovers.",
  },
  {
    type: "Labeling error",
    definition:
      "The fictional case receives the wrong outcome category because the objective, scope, context, or evidence was misunderstood.",
    example:
      "An expected alert is labeled false positive even though the detection was intentionally designed to report the approved condition.",
    evidenceNeeded:
      "Detection specification, alert purpose, owner decision, reviewer reasoning, and label criteria.",
    commonError:
      "Using inconsistent labels across analysts and reports.",
    action:
      "Correct the label, clarify definitions, retrain reviewers, and update quality metrics.",
  },
];

const rootCauses = [
  {
    cause: "Mission-scope mismatch",
    falsePositivePath:
      "The fictional detection alerts on activity outside the actual risk question.",
    falseNegativePath:
      "The meaningful condition occurs in a population, service, environment, or state excluded from the design.",
    evidence:
      "Mission statement, defender question, scope, exclusions, owners, assets, identities, services, and review triggers.",
    correction:
      "Clarify the objective and align sources, logic, tests, metrics, and labels with the approved scope.",
  },
  {
    cause: "Source coverage gap",
    falsePositivePath:
      "One source appears to show a difference because corroborating or authorization evidence is absent.",
    falseNegativePath:
      "The detection cannot see an in-scope identity, service, environment, or time period.",
    evidence:
      "Coverage map, inventory, populations, environments, blind periods, source owners, and test cases.",
    correction:
      "Add, replace, or limit sources; disclose residual gaps; and retest representative cases.",
  },
  {
    cause: "Source-health degradation",
    falsePositivePath:
      "Delay, duplication, reordering, stale enrichment, or schema drift creates an apparent match.",
    falseNegativePath:
      "Missing or delayed required evidence prevents the condition from matching.",
    evidence:
      "Freshness, completeness, queue age, clock, schema, transformation, duplication, blind periods, and recovery state.",
    correction:
      "Define degraded behavior, lower confidence, use alternate evidence, repair the source, and reassess affected cases.",
  },
  {
    cause: "Field-semantics error",
    falsePositivePath:
      "A fictional field is interpreted as a risky state when it means something broader or different.",
    falseNegativePath:
      "The field value representing the meaningful condition is mapped incorrectly or omitted.",
    evidence:
      "Field dictionary, schema version, parser mapping, source owner, examples, transformations, and regression tests.",
    correction:
      "Correct field meaning and mapping, update documentation, and retest old and new versions.",
  },
  {
    cause: "Timing-window error",
    falsePositivePath:
      "The fictional window is too short and treats expected delay as a failure.",
    falseNegativePath:
      "The window is too long and the condition is not identified within the needed response period.",
    evidence:
      "Workflow timing, event time, collection time, processing time, source delay, user impact, and tests.",
    correction:
      "Tune timing according to evidence and mission needs, then test boundaries and degraded sources.",
  },
  {
    cause: "Duplicate or retry handling",
    falsePositivePath:
      "Repeated fictional records inflate counts or create repeated sequence matches.",
    falseNegativePath:
      "Overaggressive deduplication removes distinct meaningful activity.",
    evidence:
      "Event identifiers, retry semantics, aggregation, source transformations, duplicate rate, and test cases.",
    correction:
      "Define uniqueness and retry behavior explicitly and validate both duplicates and legitimate repetition.",
  },
  {
    cause: "Context gap",
    falsePositivePath:
      "Approved change, maintenance, assignment, extension, peer uniqueness, or service purpose is missing.",
    falseNegativePath:
      "Broad context-based suppression hides meaningful activity outside the approved situation.",
    evidence:
      "Change, maintenance, identity, owner, assignment, destination, peer, policy, and source-health records.",
    correction:
      "Add narrow, current, owned, time-bound context rather than broad exclusions.",
  },
  {
    cause: "Peer-group or baseline error",
    falsePositivePath:
      "A unique but approved identity or service is compared with unsuitable peers.",
    falseNegativePath:
      "Persistent policy drift becomes common and is treated as expected.",
    evidence:
      "Peer definition, membership, state, seasonality, ownership, baseline version, authorization, and review history.",
    correction:
      "Rebuild representative peers and baselines with policy and owner validation.",
  },
  {
    cause: "Threshold design error",
    falsePositivePath:
      "The fictional threshold is too sensitive for expected variation or peak states.",
    falseNegativePath:
      "The threshold is raised so far that meaningful activity no longer alerts.",
    evidence:
      "Distribution concept, expected ranges, peer groups, seasonality, duplicates, source completeness, and impact.",
    correction:
      "Use state-aware thresholds, test boundaries, monitor quality tradeoffs, and preserve rollback.",
  },
  {
    cause: "Test-set weakness",
    falsePositivePath:
      "The fictional design was never tested against approved maintenance, change, or rare-but-valid behavior.",
    falseNegativePath:
      "The design was never tested against edge, degraded-source, missing-field, or alternate meaningful cases.",
    evidence:
      "Test inventory, expected results, defects, coverage, version, reviewers, and regression history.",
    correction:
      "Expand positive, negative, boundary, change, maintenance, degraded, privacy, and regression cases.",
  },
  {
    cause: "Labeling inconsistency",
    falsePositivePath:
      "Expected alerts are counted as false positives, making precision appear worse.",
    falseNegativePath:
      "Missed in-scope conditions are excluded from quality metrics or labeled out of scope incorrectly.",
    evidence:
      "Label definitions, reviewer notes, disagreements, detection objective, evidence, and adjudication.",
    correction:
      "Use clear outcome definitions, confidence, independent review, and documented disagreements.",
  },
  {
    cause: "Lifecycle ownership failure",
    falsePositivePath:
      "The fictional detection continues using stale assumptions, context, peers, or sources.",
    falseNegativePath:
      "The environment changes and the detection no longer covers the intended behavior.",
    evidence:
      "Owner records, review dates, source changes, logic versions, service changes, metrics, and overdue actions.",
    correction:
      "Assign accountable owners, review triggers, completion criteria, and retirement decisions.",
  },
];

const metrics = [
  {
    metric: "Alert usefulness",
    question:
      "How often does the fictional alert help an analyst answer the documented defender question?",
    strongUse:
      "Review sampled alerts, analyst decisions, evidence availability, escalation, closure, and owner feedback.",
    limitation:
      "High usefulness in sampled alerts does not prove full detection coverage.",
  },
  {
    metric: "Precision concept",
    question:
      "How many fictional alerts align with the intended objective after review?",
    strongUse:
      "Count true positives and expected alerts according to clear label definitions.",
    limitation:
      "Precision can rise when broad suppression hides important alerts.",
  },
  {
    metric: "Recall concept",
    question:
      "How many fictional meaningful in-scope conditions were identified?",
    strongUse:
      "Use synthetic tests, retrospective cases, source comparisons, owner reports, and missed-condition reviews.",
    limitation:
      "Complete ground truth may be unavailable, so recall may remain an estimate.",
  },
  {
    metric: "False-positive rate concept",
    question:
      "How often do fictional alerts result from acceptable activity or quality defects?",
    strongUse:
      "Separate context, source, field, timing, threshold, peer, test, and labeling causes.",
    limitation:
      "Expected alerts should not automatically be counted as false positives.",
  },
  {
    metric: "False-negative findings",
    question:
      "Which fictional in-scope meaningful conditions were missed and why?",
    strongUse:
      "Review coverage, sources, fields, timing, logic, tests, labels, and lifecycle changes.",
    limitation:
      "Known misses are only the conditions the organization was able to discover.",
  },
  {
    metric: "Unknown-outcome rate",
    question:
      "How many fictional cases remain unresolved because evidence or context is insufficient?",
    strongUse:
      "Track missing sources, owner delays, conflicting evidence, blind periods, and incomplete labels.",
    limitation:
      "A low unknown rate may indicate forced or overconfident labeling.",
  },
  {
    metric: "Source-degraded impact",
    question:
      "How often do fictional source problems affect alert confidence, coverage, or outcome labels?",
    strongUse:
      "Track blind periods, affected detections, reassessment, backfill, and residual uncertainty.",
    limitation:
      "A healthy dashboard does not prove semantic quality.",
  },
  {
    metric: "Analyst effort",
    question:
      "How much fictional time and evidence are needed to classify an alert correctly?",
    strongUse:
      "Measure triage time, enrichment quality, evidence requests, owner wait, and rework.",
    limitation:
      "Faster triage is not always better if important evidence is skipped.",
  },
  {
    metric: "Operational impact",
    question:
      "Do fictional alerts or responses disrupt users, services, suppliers, privacy, or recovery?",
    strongUse:
      "Review user impact, service changes, response actions, reversibility, support, and complaints.",
    limitation:
      "A correct detection can still lead to an overly disruptive response.",
  },
  {
    metric: "Lifecycle debt",
    question:
      "How many fictional detections have overdue tests, stale sources, outdated owners, unresolved exceptions, or missed review triggers?",
    strongUse:
      "Track versions, dates, owners, defects, milestones, completion criteria, and retirement decisions.",
    limitation:
      "Counting overdue items does not show which debt has the highest mission risk.",
  },
];

const reviewWorkflow = [
  {
    phase: "1. Confirm the objective",
    action:
      "Restate the fictional mission risk, defender question, in-scope condition, non-proof statement, and intended analyst decision.",
    output:
      "Quality-review charter.",
    quality:
      "Outcome labels must match the detection's documented objective.",
  },
  {
    phase: "2. Gather representative cases",
    action:
      "Select fictional true, expected, false-positive, false-negative, true-negative, unknown, and source-degraded cases across identities, services, states, and time periods.",
    output:
      "Case-sampling plan.",
    quality:
      "Sampling includes more than dramatic alerts or known incidents.",
  },
  {
    phase: "3. Validate evidence health",
    action:
      "Review fictional provenance, fields, freshness, completeness, timing, schema, transformation, duplication, coverage, and blind periods.",
    output:
      "Evidence-health assessment.",
    quality:
      "Source defects remain separate from behavior labels.",
  },
  {
    phase: "4. Assign provisional labels",
    action:
      "Classify fictional outcomes using clear definitions, confidence, evidence, alternatives, and unresolved questions.",
    output:
      "Outcome-label register.",
    quality:
      "Unknown is allowed when evidence is insufficient.",
  },
  {
    phase: "5. Review disagreements",
    action:
      "Compare fictional analyst, service owner, source owner, identity owner, privacy, and detection owner interpretations.",
    output:
      "Disagreement and adjudication log.",
    quality:
      "The final label preserves evidence and minority concerns.",
  },
  {
    phase: "6. Identify root causes",
    action:
      "Trace fictional quality defects to mission scope, source coverage, health, field semantics, timing, duplicates, context, peers, thresholds, tests, labels, or lifecycle.",
    output:
      "Root-cause hypothesis register.",
    quality:
      "A hypothesis is not treated as confirmed until validated.",
  },
  {
    phase: "7. Design corrective actions",
    action:
      "Create fictional source, field, logic, context, threshold, peer, test, documentation, workflow, ownership, or retirement improvements.",
    output:
      "Corrective-action plan.",
    quality:
      "Changes are narrow, testable, owned, and reversible.",
  },
  {
    phase: "8. Validate tradeoffs",
    action:
      "Compare fictional precision, coverage, missed-condition risk, analyst effort, user impact, privacy, source dependency, and residual risk.",
    output:
      "Before-and-after quality review.",
    quality:
      "Lower alert volume is not accepted as the only success measure.",
  },
  {
    phase: "9. Approve and observe",
    action:
      "Record fictional version, approval, observation period, rollback, metrics, owner, due date, and completion criteria.",
    output:
      "Quality-change approval packet.",
    quality:
      "The change can be reversed if coverage or operations worsen.",
  },
  {
    phase: "10. Maintain and reopen",
    action:
      "Schedule fictional reviews and reopen defects after source, schema, identity, service, peer, policy, workflow, supplier, privacy, or mission change.",
    output:
      "Detection-quality lifecycle record.",
    quality:
      "Closed findings remain reviewable when assumptions change.",
  },
];

const evidenceMatrix = [
  {
    id: "Q-01",
    source: "Fictional detection objective",
    observation:
      "The stale-role detection is intended to identify temporary emergency authority remaining effective beyond the approved end without a valid extension.",
    supports:
      "Outcome labels should focus on effective stale authority rather than role visibility alone.",
    limits:
      "The objective does not prove current sources can establish effective access in every case.",
    use:
      "Use it as the reference for true positive, expected alert, false positive, and false negative labels.",
  },
  {
    id: "Q-02",
    source: "Fictional alert sample",
    observation:
      "Twelve alerts occurred; five involved valid extensions, three involved delayed group evidence, two were confirmed stale roles, and two remain unresolved.",
    supports:
      "The current alert set contains multiple outcome types and evidence states.",
    limits:
      "Twelve cases may not represent all identities, services, periods, or conditions.",
    use:
      "Create provisional labels and avoid using alert count alone.",
  },
  {
    id: "Q-03",
    source: "Fictional missed-condition review",
    observation:
      "One stale recovery role did not alert because the recovery identity population was excluded from the source feed.",
    supports:
      "A confirmed false negative resulted from a source-coverage gap.",
    limits:
      "One known miss does not reveal every possible missed condition.",
    use:
      "Expand source coverage or explicitly limit scope and residual risk.",
  },
  {
    id: "Q-04",
    source: "Fictional source-health record",
    observation:
      "Group evidence was delayed during three alerts, and one alert was created during a brief blind period.",
    supports:
      "Some alert outcomes require source-degraded or Unknown labels.",
    limits:
      "Source delay does not prove the underlying role was valid or stale.",
    use:
      "Separate evidence quality from behavior outcome and reassess after recovery.",
  },
  {
    id: "Q-05",
    source: "Fictional analyst labels",
    observation:
      "Two analysts label valid extension alerts as false positives, while the detection owner labels them expected alerts.",
    supports:
      "Outcome definitions and reviewer training are inconsistent.",
    limits:
      "The disagreement does not establish which label is correct until the objective is reviewed.",
    use:
      "Adjudicate against the detection specification and clarify label criteria.",
  },
  {
    id: "Q-06",
    source: "Fictional test inventory",
    observation:
      "Positive stale-role tests exist, but recovery identities, delayed groups, blind periods, valid extensions, and duplicate role events were not fully tested.",
    supports:
      "The test set is incomplete and may hide both false positives and false negatives.",
    limits:
      "Missing tests do not prove every untested condition will fail.",
    use:
      "Expand regression coverage before broad tuning.",
  },
  {
    id: "Q-07",
    source: "Fictional tuning proposal",
    observation:
      "A proposal would suppress all emergency-role alerts during recovery windows.",
    supports:
      "The change would reduce alert volume.",
    limits:
      "The proposal may hide stale or excessive authority during recovery.",
    use:
      "Reject broad suppression and design narrower extension and lifecycle context.",
  },
  {
    id: "Q-08",
    source: "Fictional owner review",
    observation:
      "Identity and recovery owners agree that effective access, extensions, and revocation must remain visible throughout recovery.",
    supports:
      "The detection should preserve lifecycle coverage even when activity is expected.",
    limits:
      "Owner agreement does not prove the current logic or sources are sufficient.",
    use:
      "Treat approved extensions as expected alerts or lower-severity outcomes rather than suppressing the entire window.",
  },
];

const commonMistakes = [
  {
    mistake: "Every approved alert is called false positive",
    observation:
      "A fictional valid extension alert is marked false positive even though the detection intentionally reports all active extensions.",
    impact:
      "Quality metrics become misleading and useful awareness may be tuned away.",
    correction:
      "Use an Expected Alert category aligned with the documented objective.",
  },
  {
    mistake: "No alert means true negative",
    observation:
      "A fictional quiet period is counted as successful even though one required source was blind.",
    impact:
      "False negatives and coverage gaps may remain hidden.",
    correction:
      "Require healthy evidence and confirmed absence before using a true-negative label.",
  },
  {
    mistake: "Alert volume becomes the quality metric",
    observation:
      "A fictional team declares success after alerts drop by eighty percent.",
    impact:
      "The reduction may result from broad suppression, source loss, or missed conditions.",
    correction:
      "Review precision, recall concepts, misses, source health, analyst usefulness, impact, and residual risk.",
  },
  {
    mistake: "Unknown labels are forbidden",
    observation:
      "Fictional analysts must classify every case as true positive or false positive.",
    impact:
      "Uncertain evidence is converted into false certainty.",
    correction:
      "Allow Unknown and Source-Degraded labels with confidence and follow-up criteria.",
  },
  {
    mistake: "Known misses are treated as complete recall data",
    observation:
      "A fictional team finds one false negative and assumes no others exist.",
    impact:
      "Ground-truth and sampling limits are ignored.",
    correction:
      "Use retrospective review, synthetic testing, owner reports, source comparisons, and explicit uncertainty.",
  },
  {
    mistake: "Tuning fixes the symptom only",
    observation:
      "A fictional threshold is raised because duplicate events create noise.",
    impact:
      "The underlying uniqueness and retry problem remains.",
    correction:
      "Correct the source or logic cause before adjusting thresholds.",
  },
  {
    mistake: "False positives receive all attention",
    observation:
      "A fictional team focuses on analyst noise but does not review missed identities or environments.",
    impact:
      "Coverage and false-negative risk can worsen silently.",
    correction:
      "Balance precision work with missed-condition and coverage review.",
  },
  {
    mistake: "Labeling disagreements are hidden",
    observation:
      "A fictional report publishes one outcome without recording analyst or owner disagreement.",
    impact:
      "Metrics appear more certain than the evidence supports.",
    correction:
      "Maintain an adjudication log, confidence, evidence, rationale, and unresolved concerns.",
  },
  {
    mistake: "Correct alerts justify disruptive response",
    observation:
      "A fictional true positive automatically triggers broad access removal without mission or rollback review.",
    impact:
      "A correct detection can still lead to harmful operational action.",
    correction:
      "Separate detection outcome from severity, priority, response, user impact, and recovery.",
  },
  {
    mistake: "Real incident labels appear in a portfolio",
    observation:
      "A fictional project includes copied internal cases, source names, alerts, identities, timelines, or missed detections.",
    impact:
      "Sensitive systems, people, incidents, and defensive capabilities may be exposed.",
    correction:
      "Invent every case, source, event, label, owner, date, decision, and outcome.",
  },
];

const labSteps = [
  {
    step: "1",
    title: "Define quality objectives",
    action:
      "State the fictional detection objective, defender question, in-scope condition, non-proof statement, and desired analyst decision.",
    output:
      "Detection-quality charter.",
    quality:
      "Every later label and metric traces back to the objective.",
  },
  {
    step: "2",
    title: "Create outcome definitions",
    action:
      "Define fictional true positive, expected alert, false positive, false negative, true negative, unknown, source-degraded, and labeling-error criteria.",
    output:
      "Outcome-label dictionary.",
    quality:
      "Definitions include evidence and confidence requirements.",
  },
  {
    step: "3",
    title: "Build a representative case set",
    action:
      "Select invented cases across identities, services, states, changes, recovery, source health, extensions, blind periods, and missed conditions.",
    output:
      "Case-sampling plan.",
    quality:
      "The sample is not limited to dramatic alerts.",
  },
  {
    step: "4",
    title: "Validate evidence and source health",
    action:
      "Review fictional provenance, fields, freshness, completeness, timing, coverage, schema, transformation, duplication, and blind periods.",
    output:
      "Evidence-quality worksheet.",
    quality:
      "Source defects remain separate from behavior labels.",
  },
  {
    step: "5",
    title: "Assign labels and confidence",
    action:
      "Classify fictional cases, record evidence, alternatives, confidence, scope, impact, and unresolved questions.",
    output:
      "Detection outcome register.",
    quality:
      "Unknown is allowed when evidence is insufficient.",
  },
  {
    step: "6",
    title: "Review missed conditions",
    action:
      "Use invented retrospective cases, synthetic tests, owner reports, source comparisons, and blind-period reviews.",
    output:
      "False-negative and coverage-gap register.",
    quality:
      "No alert is never treated as proof of absence.",
  },
  {
    step: "7",
    title: "Analyze root causes",
    action:
      "Trace fictional defects to scope, sources, fields, timing, duplicates, context, peers, thresholds, tests, labels, or lifecycle.",
    output:
      "Root-cause hypothesis matrix.",
    quality:
      "Hypotheses remain provisional until validated.",
  },
  {
    step: "8",
    title: "Design narrow improvements",
    action:
      "Create fictional source, logic, context, threshold, peer, test, documentation, workflow, or ownership changes with rollback.",
    output:
      "Corrective-action plan.",
    quality:
      "Lower alert volume is not the only success criterion.",
  },
  {
    step: "9",
    title: "Validate tradeoffs",
    action:
      "Compare fictional alert usefulness, precision, recall concepts, missed risk, analyst effort, user impact, privacy, source dependency, and residual risk.",
    output:
      "Before-and-after quality report.",
    quality:
      "Improvements preserve or increase meaningful coverage.",
  },
  {
    step: "10",
    title: "Document lifecycle governance",
    action:
      "Assign fictional owners, version, observation period, metrics, review triggers, completion criteria, reopen conditions, and retirement.",
    output:
      "Detection-quality lifecycle package.",
    quality:
      "Another reviewer can reproduce and challenge the quality decision.",
  },
];

const quizQuestions = [
  {
    question:
      "Which fictional outcome is best described as an expected alert?",
    choices: [
      "An alert caused by broken field mapping.",
      "A correctly detected approved condition that the design intentionally reports for awareness.",
      "A meaningful condition that did not alert.",
      "A case with no evidence.",
    ],
    answer: 1,
    explanation:
      "Expected alerts are correct detections of approved or benign conditions that remain intentionally observable.",
  },
  {
    question:
      "Why is no alert not automatically a true negative?",
    choices: [
      "Because alerts should always exist.",
      "Because the condition may have occurred outside source coverage or during degraded evidence.",
      "Because true negatives are impossible.",
      "Because only false positives matter.",
    ],
    answer: 1,
    explanation:
      "A true negative requires sufficient evidence that the condition was absent and the detection could evaluate it.",
  },
  {
    question:
      "What is the strongest response to a known fictional false negative?",
    choices: [
      "Raise every alert severity.",
      "Review scope, source coverage, health, fields, logic, timing, tests, labels, ownership, and residual risk.",
      "Suppress related alerts.",
      "Assume no other misses exist.",
    ],
    answer: 1,
    explanation:
      "False negatives can arise from multiple design and lifecycle causes and require structured review.",
  },
  {
    question:
      "Why can reducing alert volume be misleading?",
    choices: [
      "Because fewer alerts always means failure.",
      "Because volume may fall due to broad suppression, source loss, or missed conditions rather than better quality.",
      "Because volume has no value.",
      "Because every alert should remain unchanged.",
    ],
    answer: 1,
    explanation:
      "Quality must include coverage, missed-condition risk, usefulness, source health, and operational impact.",
  },
  {
    question:
      "A fictional case cannot be resolved because required sources conflict. Which label is strongest?",
    choices: [
      "True positive.",
      "False positive.",
      "Unknown or Source-Degraded with documented confidence and follow-up.",
      "True negative.",
    ],
    answer: 2,
    explanation:
      "Forcing certainty would misrepresent the evidence.",
  },
  {
    question:
      "Which improvement is safest for alerts caused by valid extensions?",
    choices: [
      "Suppress every emergency-role alert during recovery.",
      "Add precise extension context, owner, timing, source-health behavior, tests, and rollback.",
      "Raise the threshold.",
      "Remove the detection.",
    ],
    answer: 1,
    explanation:
      "Narrow context fixes the cause while preserving stale-authority coverage.",
  },
  {
    question:
      "Which portfolio approach is safest?",
    choices: [
      "Use real missed-detection cases with fake names.",
      "Use real alert screenshots after removing usernames.",
      "Invent every source, event, label, case, owner, metric, date, decision, and outcome.",
      "Use internal timelines because no query syntax is shown.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real systems, people, incidents, and defensive capabilities.",
  },
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
        Module A5
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function FalsePositivesAndFalseNegativesPage() {
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
              Module A5
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 10
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Precision, Coverage, Misses, and Quality
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5.5 False Positives and False Negatives
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional detections can alert on acceptable activity,
            miss meaningful conditions, depend on unhealthy evidence, overfit
            tests, mislabel expected alerts, hide unknown outcomes, and create
            false confidence—and how defenders improve quality without trading
            away essential coverage.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A5: Detection Engineering"
          lessonTitle="False Positives and False Negatives"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented detections, alerts, sources, cases, outcomes, labels, owners, metrics, dates, decisions, and findings.",
            "I understand that an approved condition may be an expected alert rather than a false positive.",
            "I understand that no alert does not prove the absence of a meaningful condition.",
            "I will allow Unknown and Source-Degraded outcomes when evidence is insufficient.",
            "I will balance alert usefulness, precision, coverage, missed-condition risk, analyst effort, user impact, privacy, and residual risk.",
            "I will not access, query, collect, inspect, test, tune, investigate, or modify any real telemetry, alert, detection rule, incident, account, endpoint, network, domain, service, supplier, platform, or organization.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Fewer Alerts Can Mean Better Quality—or a Bigger Blind Spot"
        >
          <p className="leading-8">
            A fictional team suppresses every emergency-role alert during
            recovery windows. Alert volume drops sharply, and the dashboard
            looks cleaner. A later review finds that one stale recovery role
            remained active and never alerted because the broad suppression
            covered it. Noise improved, but meaningful coverage became worse.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak quality conclusion
              </p>
              <p className="mt-2 leading-7">
                “Alerts dropped by eighty percent, so the detection is much
                better.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong quality conclusion
              </p>
              <p className="mt-2 leading-7">
                “The fictional change reduced alert volume, but missed-condition
                review shows lost recovery-role coverage. The suppression must
                be replaced with precise extension, identity, timing, and
                source-health context.”
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Detection quality is a tradeoff among useful alerts, missed
            conditions, evidence health, analyst effort, operational impact,
            privacy, and residual risk—not a race toward zero alerts.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exactly Five Learning Objectives"
          title="What You Will Be Able to Do"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why This Matters"
          title="Every Detection Has Two Failure Directions"
        >
          <p className="leading-8">
            Fictional detections can create unnecessary work, confusion, user
            disruption, or privacy exposure when they alert incorrectly. They
            can also create dangerous confidence when meaningful conditions are
            missed. Professional defenders evaluate both directions and include
            unknown outcomes, source-health failures, labeling quality,
            sampling limitations, and lifecycle change.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Noise risk",
                "Fictional false positives can consume analyst time, reduce trust, and encourage unsafe broad suppression.",
              ],
              [
                "Miss risk",
                "Fictional false negatives can hide coverage gaps, stale sources, weak logic, untested states, or lifecycle failure.",
              ],
              [
                "Confidence risk",
                "Fictional unknown and source-degraded cases can be mislabeled, making metrics look stronger than the evidence.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <h3 className="font-black text-purple-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="The Q-U-A-L-I-T-Y Method">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Q — Question the objective",
                "Confirm the fictional mission risk, defender question, scope, non-proof statement, and intended decision.",
              ],
              [
                "U — Understand evidence health",
                "Review fictional provenance, fields, freshness, completeness, timing, coverage, transformation, duplication, and blind periods.",
              ],
              [
                "A — Assign outcome labels carefully",
                "Use fictional true positive, expected alert, false positive, false negative, true negative, unknown, source-degraded, and labeling-error categories.",
              ],
              [
                "L — Locate root causes",
                "Trace fictional defects to scope, sources, fields, timing, duplicates, context, peers, thresholds, tests, labels, or lifecycle.",
              ],
              [
                "I — Improve narrowly",
                "Create fictional source, logic, context, test, documentation, ownership, or retirement actions with validation and rollback.",
              ],
              [
                "T — Test tradeoffs",
                "Compare fictional usefulness, precision, recall concepts, misses, effort, impact, privacy, and residual risk.",
              ],
              [
                "Y — Yield to evidence limits",
                "Allow fictional Unknown outcomes, disclose ground-truth limits, preserve disagreements, and reopen after change.",
              ],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">
              Decision-ready quality statement
            </p>
            <p className="mt-2 leading-7">
              This fictional quality review classifies alerts and missed
              conditions according to a documented objective, evidence health,
              outcome confidence, alternatives, coverage, user impact, analyst
              effort, corrective actions, validation, rollback, ownership,
              limitations, and review triggers.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Terms for Detection Quality"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 1
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Classify Eight Outcome Types
          </h2>

          <div className="mt-6 grid gap-5">
            {outcomeTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Definition", item.definition],
                    ["Fictional example", item.example],
                    ["Evidence needed", item.evidenceNeeded],
                    ["Common labeling error", item.commonError],
                    ["Professional action", item.action],
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

        <SectionCard
          eyebrow="Instructional Section 2"
          title="Analyze Twelve Root-Cause Categories"
        >
          <div className="grid gap-5">
            {rootCauses.map((item) => (
              <article
                key={item.cause}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-purple-100">
                  {item.cause}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      False-positive path
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.falsePositivePath}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      False-negative path
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.falseNegativePath}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence to review
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional correction
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.correction}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Instructional Section 3
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Measure Ten Quality Dimensions
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {metrics.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.metric}
                </h3>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Review question
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.question}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong use
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strongUse}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.limitation}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Instructional Section 4"
          title="Use a Ten-Phase Quality Review"
        >
          <div className="grid gap-5">
            {reviewWorkflow.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.action}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality standard
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 5"
          title="Separate Detection Outcome from Response"
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left text-sm">
              <thead className="bg-slate-950 text-cyan-200">
                <tr>
                  {[
                    "Question",
                    "Fictional example",
                    "Strong decision",
                    "What to avoid",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {[
                  [
                    "Was the detection correct?",
                    "A stale role is confirmed after expiration.",
                    "Label the case true positive with confidence and evidence.",
                    "Assume the alert proves misuse.",
                  ],
                  [
                    "How serious is the condition?",
                    "The stale role reaches privileged destinations.",
                    "Assess severity using authority, scope, impact, and recoverability.",
                    "Treat every true positive as equally severe.",
                  ],
                  [
                    "How urgent is review?",
                    "The role remains active during recovery.",
                    "Set priority using time sensitivity, active impact, and response opportunity.",
                    "Use alert severity alone.",
                  ],
                  [
                    "Which action is justified?",
                    "Effective access is confirmed and the owner approves removal.",
                    "Use bounded authorized revocation, validation, rollback, and closure.",
                    "Apply broad disruption automatically.",
                  ],
                  [
                    "What did quality review learn?",
                    "Valid extensions created repeated alerts.",
                    "Improve precise extension context while preserving stale-role coverage.",
                    "Suppress all recovery alerts.",
                  ],
                  [
                    "What remains uncertain?",
                    "Group evidence was delayed during one case.",
                    "Record source-health limits and reassess.",
                    "Force a true or false label.",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-4 align-top leading-6 text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Instructional Section 6"
          title="Avoid Sampling and Ground-Truth Traps"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Alert-only sampling",
                "Reviewing only fictional alerts cannot reveal all missed conditions.",
                "Add owner reports, synthetic tests, retrospective cases, source comparisons, and blind-period review.",
              ],
              [
                "Incident-only sampling",
                "Reviewing only confirmed high-impact cases may overestimate severity and miss normal operating variation.",
                "Include expected, benign, rare-approved, changed, source-degraded, and true-negative cases.",
              ],
              [
                "Convenience sampling",
                "Reviewing the easiest fictional identities or services may hide complex suppliers, recovery roles, or low-volume systems.",
                "Sample by mission, identity, service, state, environment, source, and risk.",
              ],
              [
                "Healthy-period bias",
                "Testing only when fictional sources are healthy hides degraded, blind, conflicting, and recovering behavior.",
                "Add source-health variation and reassessment cases.",
              ],
              [
                "Reviewer bias",
                "Fictional analysts may label the same alert differently because definitions or experience differ.",
                "Use shared criteria, independent review, adjudication, confidence, and disagreement records.",
              ],
              [
                "Incomplete ground truth",
                "The fictional organization may never know the full condition, impact, or intent.",
                "Use bounded labels, confidence, non-proof statements, and Unknown outcomes.",
              ],
              [
                "Survivorship bias",
                "Only fictional detections that remained active may be reviewed, while retired or failed designs are forgotten.",
                "Include retired, replaced, paused, and failed detections in lessons learned.",
              ],
              [
                "Recent-change bias",
                "Fictional reviewers may blame the newest change even when evidence points to older scope or source defects.",
                "Compare before-and-after evidence and preserve alternative root causes.",
              ],
            ].map(([title, risk, correction]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{risk}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Fictional Quality Architecture"
          title="Northbridge Detection Quality Model"
        >
          <p className="leading-8">
            This conceptual model is completely invented and intentionally
            non-operational. It teaches quality review without real alert
            histories, source names, detection rules, identities, incidents,
            missed cases, internal metrics, systems, domains, or suppliers.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
            <div className="grid gap-3">
              {[
                ["Objective", "Mission, defender question, scope, non-proof"],
                ["Cases", "Alerts, expected, misses, true negatives, unknowns"],
                ["Evidence", "Sources, fields, health, coverage, timing, context"],
                ["Labels", "Outcome, confidence, reviewer, disagreement, rationale"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-4 text-purple-50"
                >
                  <p className="font-black text-purple-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Fictional Detection Quality Core
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Usefulness", "Question answered, evidence, action, owner"],
                  ["Precision", "Useful alerts, expected alerts, false positives"],
                  ["Coverage", "Identities, services, states, environments, periods"],
                  ["Misses", "False negatives, blind spots, unknown ground truth"],
                  ["Sources", "Freshness, completeness, schema, transformation"],
                  ["Tradeoffs", "Noise, coverage, effort, impact, privacy, risk"],
                  ["Improvement", "Source, logic, context, tests, labels, ownership"],
                  ["Lifecycle", "Version, validation, rollback, review, retirement"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-cyan-300/30 bg-slate-950/80 p-4"
                  >
                    <p className="font-black text-cyan-100">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Analyst view", "Labels, confidence, evidence, time, disagreements"],
                ["Owner view", "Root causes, actions, completion, residual risk"],
                ["Leadership view", "Coverage, impact, resources, milestones, limits"],
                ["Portfolio boundary", "Fully fictional, privacy-safe, non-operational"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-50"
                >
                  <p className="font-black text-blue-100">{title}</p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Northbridge Detection Quality Dashboard"
          subtitle="Fictional alert outcomes, missed conditions, source health, labels, quality defects, and lifecycle status for training only."
          metrics={[
            {
              label: "Reviewed alert outcomes",
              value: "12",
              note: "Two true positives, five expected alerts, three source-degraded cases, and two Unknown outcomes.",
            },
            {
              label: "Known false negatives",
              value: "1",
              note: "One fictional recovery-role condition was missed because the identity population was outside source coverage.",
            },
            {
              label: "Open quality defects",
              value: "7",
              note: "Coverage, extension context, degraded-source behavior, label definitions, tests, ownership, and review triggers remain open.",
            },
          ]}
        />

        <FakeAlertCard
          title="Alert Volume Reduced but Recovery-Role Coverage Lost"
          severity="High"
          time="3:32 PM"
          source="Fake Northbridge Detection Quality Console"
          details="The fictional emergency-role detection produced fewer alerts after a broad recovery-window suppression. A missed-condition review found one stale recovery role that did not alert. Five valid extension alerts had also been mislabeled as false positives rather than expected alerts."
          recommendation="Rollback the broad suppression. Restore recovery-role coverage, add precise extension context, correct label definitions, validate source populations, expand degraded-source and recovery tests, and observe both alert usefulness and missed-condition risk."
        />

        <FakeLogPanel
          title="Fake Detection Quality Review Timeline"
          logs={[
            "09:00 OBJECTIVE stale-role='confirmed'",
            "09:08 SAMPLE alerts='12'",
            "09:16 LABEL true-positive='2'",
            "09:24 LABEL expected-alert='5'",
            "09:32 LABEL source-degraded='3'",
            "09:40 LABEL unknown='2'",
            "09:48 REVIEW known-miss='1'",
            "09:56 CAUSE source-coverage='recovery-role-excluded'",
            "10:04 CAUSE false-positive='extension-context-missing'",
            "10:12 LABEL disagreement='open'",
            "10:20 TUNING broad-suppression='rejected'",
            "10:28 ACTION precise-extension-context='planned'",
            "10:36 TEST recovery-role='required'",
            "10:44 TEST blind-period='required'",
            "10:52 METRIC alert-volume='lower'",
            "11:00 METRIC coverage='worse'",
            "11:08 STATUS quality='degraded'",
            "11:16 OWNER detection='assigned'",
            "11:24 CONFIDENCE review='moderate'",
            "15:32 ALERT issue='coverage-loss'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Quality Evidence Supports—and What It Does Not Prove
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
                    ["Quality-review use", item.use],
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
          title="Which Quality Decision Is Best Supported?"
          question="Which conclusion most responsibly represents the fictional stale-role detection review?"
          evidence={[
            "The detection objective includes stale effective emergency authority.",
            "Five valid extension alerts were mislabeled as false positives.",
            "Three alerts occurred with delayed group evidence.",
            "Two stale roles were confirmed.",
            "Two cases remain unresolved.",
            "One stale recovery role was missed because its identity population was excluded.",
            "Broad suppression reduced alert volume but removed meaningful coverage.",
            "No supplied evidence proves that all false negatives are known.",
          ]}
          options={[
            "Rollback the broad suppression, correct expected-alert labels, add precise extension context, expand recovery-role source coverage, define degraded-source outcomes, strengthen tests, and track both alert usefulness and missed-condition risk.",
            "Keep the suppression because alert volume improved.",
            "Declare the detection successful because two true positives were found.",
            "Label every unresolved case false positive to simplify metrics.",
          ]}
          bestAnswer={0}
          explanation="The first option addresses both noise and missed coverage, preserves uncertainty, corrects labeling, and avoids treating alert volume as the only quality measure."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Avoid Ten Detection Quality Errors"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Fictional observation
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.observation}</p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Decision impact
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.impact}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Practice Lab"
          title="Build the Northbridge Detection Quality Register"
        >
          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only the supplied fictional information on this page. Do not
            collect, query, inspect, test, tune, suppress, investigate, compare,
            or modify any real telemetry, alert, detection rule, incident,
            account, endpoint, network, domain, application, supplier, platform,
            analyst record, or organization.
          </div>

          <div className="mt-6 grid gap-5">
            {labSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-cyan-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Quality check
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.quality}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Wants Zero False Positives"
          scenario="Fictional leadership asks the detection team to eliminate every alert connected to approved emergency access. The current proposal suppresses all emergency-role alerts during recovery windows."
          choices={[
            {
              label: "Choice A",
              response:
                "Explain that zero false positives may create false negatives, preserve expected-alert visibility, add precise extension and lifecycle context, validate recovery-role coverage, test tradeoffs, and use narrow reversible tuning.",
              outcome:
                "Best defensive choice. It improves precision without hiding stale or excessive authority.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Accept the broad suppression because fewer alerts improve the dashboard.",
              outcome:
                "Weak. The change already caused a known missed condition.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable the detection permanently.",
              outcome:
                "Weak. The underlying mission risk remains relevant.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Missed Condition Appears during a Source Blind Period"
          scenario="A fictional service-owner review discovers an in-scope stale role that did not alert. The required group source was blind during the relevant period, and no alternate effective-access source was configured."
          choices={[
            {
              label: "Choice A",
              response:
                "Record a confirmed fictional missed condition and source-coverage defect, document the blind period, add alternate evidence or explicit Unknown behavior, expand regression tests, reassess affected cases, and disclose residual risk.",
              outcome:
                "Best choice. It separates the underlying miss from the source failure and improves future resilience.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the case because the source was blind.",
              outcome:
                "Weak. The meaningful in-scope condition still occurred and exposes a real coverage limitation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Call every quiet period a false negative.",
              outcome:
                "Weak. Missed-condition labels require evidence that the condition actually occurred.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Improve Quality without Sacrificing Coverage"
        >
          <p className="leading-8">
            Fictional Northbridge has noisy privileged-access, supplier,
            wireless, DNS, and service-behavior detections. Analysts want fewer
            alerts, leadership wants no missed conditions, source owners report
            blind periods, and service owners disagree about which approved
            behaviors should remain visible. Current metrics focus almost
            entirely on alert count.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "Create outcome governance",
                "Define fictional true positive, expected alert, false positive, false negative, true negative, unknown, source-degraded, and labeling-error criteria.",
              ],
              [
                "Build representative review",
                "Sample fictional alerts, misses, quiet periods, changes, recovery states, source failures, suppliers, and low-volume services.",
              ],
              [
                "Measure both directions",
                "Track fictional alert usefulness, precision, recall concepts, known misses, unknowns, source impact, effort, and user impact.",
              ],
              [
                "Adjudicate disagreements",
                "Preserve fictional analyst, service, identity, source, privacy, and risk-owner evidence and reasoning.",
              ],
              [
                "Improve narrowly",
                "Use fictional source, context, timing, peer, threshold, test, documentation, ownership, or retirement corrections with rollback.",
              ],
              [
                "Communicate residual risk",
                "Explain fictional ground-truth limits, unknown false negatives, blind periods, untested states, and next milestones.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
            <p className="font-black text-blue-100">Challenge output</p>
            <p className="mt-2 leading-7">
              Produce a fictional quality-governance charter, outcome-label
              dictionary, case-sampling plan, evidence-health review,
              disagreement log, false-positive register, false-negative
              register, source-degraded register, root-cause matrix, corrective
              actions, before-and-after metrics, rollback plan, completion
              criteria, residual-risk statement, and leadership summary.
            </p>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="False Positives and False Negatives Checklist"
          items={[
            "I can distinguish fictional true positives, expected alerts, false positives, false negatives, true negatives, unknown outcomes, source-degraded outcomes, and labeling errors.",
            "I can explain why an approved alert is not automatically a false positive.",
            "I can explain why no alert is not automatically a true negative.",
            "I can review fictional mission scope, source coverage, source health, field meaning, timing, duplicates, context, peers, thresholds, tests, labels, and lifecycle.",
            "I can balance fictional alert usefulness, precision, recall concepts, known misses, unknowns, source impact, analyst effort, user impact, privacy, and residual risk.",
            "I can use Unknown when evidence is insufficient rather than forcing certainty.",
            "I can design representative fictional sampling across identities, services, states, periods, alerts, misses, quiet cases, and source-health conditions.",
            "I can preserve labeling disagreements, confidence, evidence, rationale, and minority concerns.",
            "I can identify root-cause hypotheses without treating them as confirmed before validation.",
            "I can create narrow, testable, owned, reversible corrective actions.",
            "I can define validation gates, observation periods, rollback, completion criteria, reopen conditions, review triggers, and retirement.",
            "I can create a completely fictional quality artifact without exposing real incidents, alerts, misses, identities, sources, metrics, systems, suppliers, or internal performance.",
          ]}
        />

        <MiniQuiz
          title="A5.5 Mini Quiz: False Positives and False Negatives"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Detection Quality Review Package for the Northbridge Student-Support Cooperative. Include mission, purpose, scope, stakeholders, exclusions, safety boundary, at least twenty defender questions, detection objectives, non-proof statements, true-positive definitions, expected-alert definitions, false-positive definitions, false-negative definitions, true-negative definitions, unknown-outcome definitions, source-degraded definitions, labeling-error definitions, outcome confidence, case sampling, alert samples, missed-condition cases, quiet-period cases, source-health cases, identity populations, service populations, environments, operating states, time periods, peer groups, changes, recovery cases, source provenance, fields, freshness, completeness, timing, schema, transformation, duplication, coverage, blind periods, ground-truth limits, sampling bias, reviewer bias, disagreements, adjudication, precision concepts, recall concepts, alert usefulness, false-positive causes, false-negative causes, source-coverage defects, source-health defects, field-semantics defects, timing defects, duplicate defects, context defects, peer defects, threshold defects, test-set defects, labeling defects, lifecycle defects, corrective actions, validation gates, observation periods, before-and-after metrics, analyst effort, operational impact, privacy impact, user impact, rollback criteria, completion criteria, reopen criteria, owners, review triggers, residual risks, retirement decisions, leadership summary, analyst summary, reflection, and a statement that every organization, source, event, alert, case, identity, label, metric, owner, date, decision, and outcome is invented."
          tips={[
            "Use clear fictional outcome definitions before calculating or discussing quality.",
            "Treat expected alerts, unknown outcomes, and source-degraded cases as distinct from false positives.",
            "Review false positives and false negatives together so tuning does not create hidden coverage loss.",
            "Use alert usefulness, coverage, missed-condition risk, evidence health, effort, impact, privacy, and residual risk—not alert volume alone.",
            "Keep the entire artifact completely fictional, defensive, non-operational, privacy-safe, evidence-aware, maintainable, and suitable for a public learning portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for Detection Tuning and Context?"
        >
          <p className="leading-8">
            Before moving to A5.6, rate your readiness from 1 to 5 for outcome
            labels, false-positive causes, false-negative causes, source health,
            coverage, field meaning, timing, context, peers, thresholds, tests,
            sampling, ground-truth limits, metrics, tradeoffs, corrective
            actions, lifecycle, and complete fictionalization.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can distinguish fictional expected alerts from false positives.",
              "I can explain why no alert does not prove a true negative.",
              "I can use Unknown and Source-Degraded labels responsibly.",
              "I can identify both false-positive and false-negative paths from the same defect.",
              "I can review sampling and ground-truth limitations.",
              "I can measure quality beyond alert volume.",
              "I can design narrow improvements with validation and rollback.",
              "I can produce a safe fictional quality review without using real incidents, misses, alerts, or internal metrics.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Record one fictional expected alert, one false-positive cause, one
            false-negative cause, one source-health limitation, one quality
            metric, one tuning risk, and one question you will carry into A5.6.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Detection quality includes fictional true positives, expected alerts, false positives, false negatives, true negatives, unknowns, source-degraded outcomes, and labeling errors.",
            "Approved activity may still be an expected alert when the detection intentionally reports the condition.",
            "No alert does not prove no condition occurred; source coverage, health, scope, tests, and ground-truth limits matter.",
            "The same fictional defect can create both false positives and false negatives.",
            "Alert volume alone cannot measure usefulness, precision, recall concepts, missed-condition risk, analyst effort, impact, privacy, or residual risk.",
            "Unknown and Source-Degraded labels protect against false certainty when evidence is incomplete.",
            "Representative sampling should include alerts, misses, quiet periods, source failures, changes, recovery, low-volume services, and different identity populations.",
            "Quality improvements should address root causes narrowly and include tests, metrics, validation, rollback, ownership, and completion criteria.",
            "A correct detection outcome does not automatically justify a disruptive response.",
            "Every CyberShield detection-quality artifact must remain fully fictional, authorized, defensive, non-operational, privacy-safe, and incapable of exposing real systems or people.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A5
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Next, learn how fictional defenders tune detections with identity,
            asset, service, device, peer, time, change, maintenance,
            authorization, source-health, and mission context without hiding
            meaningful coverage or creating suppression debt.
          </p>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}