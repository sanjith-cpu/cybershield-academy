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
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const previousLesson = `${modulePath}/explaining-technical-evidence-clearly`;
const nextLesson = `${modulePath}/intermediate-capstone-lab`;

const objectives = [
  "Evaluate complete fictional Intermediate readiness across technical knowledge, evidence analysis, systems, identity, email, web, cloud, incident response, risk, SOC work, communication, validation, ethics, and portfolio quality.",
  "Use several fictional evidence types—quizzes, labs, reports, diagrams, recommendations, communications, revision records, transfer tasks, and reflections—to rate readiness accurately.",
  "Distinguish fictional demonstrated mastery, functional readiness, developing readiness, priority gaps, recurring misconceptions, confidence limits, and true capstone blockers.",
  "Build a focused fictional repair plan with retrieval practice, mixed scenarios, portfolio revision, audience consistency checks, validation tasks, deadlines, success measures, and delayed reassessment.",
  "Produce a complete fictional Intermediate Final Readiness Package with a domain dashboard, mastery-evidence register, capstone-entry checklist, test strategy, portfolio review, presentation rehearsal, reflection, and safety statement."
];
const vocabulary = [
  [
    "Final readiness review",
    "A fictional evidence-based decision about whether the learner can explain, apply, communicate, validate, transfer, and defend Intermediate skills before the capstone."
  ],
  [
    "Readiness evidence",
    "A fictional quiz, lab, report, diagram, recommendation, communication, validation record, revision, reflection, or transfer task showing what the learner can do."
  ],
  [
    "Mastery domain",
    "A fictional category of related knowledge and applied skills used to organize the final review."
  ],
  [
    "Demonstrated mastery",
    "A fictional level where the learner can explain, apply, justify, communicate, validate, and transfer the skill to new evidence."
  ],
  [
    "Functional readiness",
    "A fictional level where the learner usually performs correctly but may miss an edge case, owner boundary, alternative explanation, or validation step."
  ],
  [
    "Priority gap",
    "A fictional weakness selected for immediate repair because it is frequent, high impact, transferable, or likely to block the capstone."
  ],
  [
    "Capstone blocker",
    "A fictional gap serious enough to prevent safe, accurate, or complete capstone work until corrected."
  ],
  [
    "Transfer task",
    "A fictional scenario requiring a concept learned in one domain to be applied in a different defensive context."
  ],
  [
    "Readiness threshold",
    "A fictional measurable standard used to decide whether the learner advances, reviews, revises, or seeks more practice."
  ],
  [
    "Calibration",
    "A fictional comparison between learner confidence and actual performance evidence."
  ],
  [
    "Error pattern",
    "A fictional recurring misconception, omission, unsupported claim, ownership failure, or validation problem across several tasks."
  ],
  [
    "Reassessment",
    "A fictional repeat review completed after targeted practice and a delay to determine whether the gap improved."
  ],
  [
    "Evidence sufficiency",
    "A fictional judgment about whether available work supports the assigned readiness rating."
  ],
  [
    "Portfolio completeness",
    "A fictional measure of whether learning claims, evidence, reasoning, visuals, validation, reflection, privacy review, and revision history are present."
  ],
  [
    "Presentation readiness",
    "A fictional ability to explain the artifact purpose, evidence, decisions, limitations, validation, learning, and next improvement."
  ],
  [
    "Portfolio-safe readiness package",
    "A fictional final-review artifact using invented systems, identities, scores, evidence, dates, incidents, suppliers, actions, and outcomes."
  ]
];
const audiences = [
  {
    "audience": "Evidence, Logs, and Defensive Tools",
    "decision": "Can the fictional learner validate source health, normalize timelines, correlate records, preserve case boundaries, and write evidence-limited findings?",
    "include": "Review I4, I5, I15, and I16 evidence registers, timelines, dashboards, tool comparisons, findings, handoffs, and integrated case work.",
    "omit": "Do not count alert severity, one dashboard label, or a delayed source as a validated conclusion.",
    "tone": "Capstone standard: explain what each source proves, what it does not prove, and how missing visibility changes confidence.",
    "sample": "Final action: correct any remaining possible-impact versus confirmed-impact language before I17.8."
  },
  {
    "audience": "Networking, Linux, and Windows",
    "decision": "Can the fictional learner connect traffic, accounts, permissions, processes, services, files, configuration, and logs without assuming unfamiliar means malicious?",
    "include": "Review I1–I3 flow analysis, operating-system baselines, account checks, service reviews, and configuration comparisons.",
    "omit": "Do not use a port, process name, service, or event identifier alone as proof of intent or compromise.",
    "tone": "Capstone standard: use context, owner knowledge, expected behavior, multiple sources, and validation.",
    "sample": "Final action: complete one mixed system scenario requiring both network and operating-system evidence."
  },
  {
    "audience": "Identity and Access Management",
    "decision": "Can the fictional learner identify direct, inherited, nested, conditional, exception-based, supplier, emergency, and service-account access?",
    "include": "Review I6 and I16 effective-access maps, approval records, business need, least privilege, separation of duties, lifecycle, owner decisions, and validation.",
    "omit": "Do not treat recent use, active status, or one past approval as proof that access should remain.",
    "tone": "Capstone standard: every important access path and the intended final state must be identified and validated.",
    "sample": "Final action: repair one missed nested-group path and repeat the effective-access check after a delay."
  },
  {
    "audience": "Email, Web, and Secure Coding",
    "decision": "Can the fictional learner separate malicious-message confidence, user interaction, authorization weakness, attempted behavior, successful behavior, and confirmed impact?",
    "include": "Review I7–I9 and I16 phishing, web-defense, role-testing, secure-code, control-state, user-guidance, and validation artifacts.",
    "omit": "Do not treat one click as account takeover or one blocked input as proof of complete security.",
    "tone": "Capstone standard: state exact expected and observed behavior, evidence limits, owner action, and validation.",
    "sample": "Final action: complete one cross-domain scenario combining user interaction and application authorization."
  },
  {
    "audience": "Vulnerability, Cloud, Policy, and Risk",
    "decision": "Can the fictional learner connect technical severity to asset value, exposure, control state, service criticality, treatment options, ownership, validation, and residual risk?",
    "include": "Review I10, I13, I14, I16, and I17 vulnerability registers, cloud reviews, policy decisions, risk statements, treatment comparisons, and recommendations.",
    "omit": "Do not copy one scanner score into the entire business-priority decision or claim a broad policy proves disclosure.",
    "tone": "Capstone standard: recommend proportionate action with continuity, dependencies, rollback, success measures, and residual risk.",
    "sample": "Final action: rehearse a leadership explanation of why targeted combined treatment is proportionate."
  },
  {
    "audience": "Incident Response and Digital Forensics",
    "decision": "Can the fictional learner preserve evidence, declaration criteria, authority, proposed versus completed actions, recovery, closure, forensic limits, and residual uncertainty?",
    "include": "Review I11, I12, I16, and I17 table-top decisions, evidence handling, timelines, incident reports, communications, recovery tests, and closure matrices.",
    "omit": "Do not use severity, outage status, missing evidence, stopped alerts, or ticket completion as automatic proof of incident state.",
    "tone": "Capstone standard: every major decision has evidence, authority, owner, action state, validation, and limitation.",
    "sample": "Final action: add a complete validation matrix to the final practice case."
  },
  {
    "audience": "Security Operations and Communication",
    "decision": "Can the fictional learner prioritize queues, preserve separate cases, hand off work, tailor messages, maintain one fact set, and measure quality?",
    "include": "Review I15–I17 queue decisions, case boundaries, shift handoffs, metrics, analyst notes, service updates, leadership briefs, user guidance, and supplier messages.",
    "omit": "Do not treat fast closure as quality or change impact, status, validation, or residual-risk language across audiences.",
    "tone": "Capstone standard: coordinate related work without inventing relationships and communicate one approved fact base.",
    "sample": "Final action: correct the three fictional drafts that use inconsistent residual-risk language."
  },
  {
    "audience": "Portfolio, Diagrams, and Professional Reflection",
    "decision": "Can the fictional learner build and defend a traceable, accessible, revised, fully invented artifact with purposeful visuals and honest reflection?",
    "include": "Review I17 learning claims, selected evidence, diagrams, reports, recommendations, communication packages, validation, quality checks, version history, and reflection.",
    "omit": "Do not rely on page count, decoration, copied wording, real materials, or unsupported relationships.",
    "tone": "Capstone standard: explain why every major section exists, what it proves, what changed after feedback, and what remains to improve.",
    "sample": "Final action: complete two timed artifact-defense rehearsals before final presentation."
  }
];
const translationSteps = [
  {
    "step": "1. Knowledge foundation",
    "technical": "The fictional learner explains the purpose, evidence, workflow, owner, limitation, and example for every major domain.",
    "clear": "Ready evidence includes retrieval responses, quiz results, concept maps, and corrected explanations.",
    "avoid": "Do not rate ready when the learner recognizes terms but cannot explain them without prompts.",
    "check": "Which part becomes unclear when notes are closed?"
  },
  {
    "step": "2. Applied analysis",
    "technical": "The fictional learner analyzes new evidence, preserves source limits, identifies alternatives, and selects proportionate action.",
    "clear": "Ready evidence includes mixed scenarios, safe labs, findings, timelines, and decision records.",
    "avoid": "Do not count repetition of a memorized example as transfer.",
    "check": "Can the learner perform when systems, identities, timing, and business context change?"
  },
  {
    "step": "3. Ownership and authority",
    "technical": "The fictional learner separates who investigates, decides, acts, validates, communicates, and accepts residual risk.",
    "clear": "Ready evidence includes owner maps, decision logs, communication plans, and risk recommendations.",
    "avoid": "Do not assign every action to the analyst or security team.",
    "check": "Is each requested action directed to an authorized owner?"
  },
  {
    "step": "4. Validation discipline",
    "technical": "The fictional learner verifies effective state, service function, source health, user state, owner signoff, monitoring, communication, and residual risk.",
    "clear": "Ready evidence includes validation registers, role tests, service tests, recovery checks, and closure matrices.",
    "avoid": "Do not treat a completed ticket, restored service, or stopped alert as proof.",
    "check": "Which exact evidence demonstrates the intended state now exists?"
  },
  {
    "step": "5. Communication",
    "technical": "The fictional learner preserves one fact set while adapting terminology, detail, action, visuals, and cadence to the audience.",
    "clear": "Ready evidence includes analyst, service, leadership, user, supplier, teacher, and portfolio messages.",
    "avoid": "Do not change impact or residual risk between versions without a timestamped evidence change.",
    "check": "Do all versions preserve the same supported facts?"
  },
  {
    "step": "6. Portfolio quality",
    "technical": "The fictional artifact includes a learning claim, selected evidence, reasoning, visuals, decisions, validation, revision, reflection, accessibility, and privacy.",
    "clear": "Ready evidence includes the artifact, register, quality checklist, version history, and defense notes.",
    "avoid": "Do not rate a polished but untraceable artifact as complete.",
    "check": "Can every claim be traced to evidence and explained by the learner?"
  },
  {
    "step": "7. Safe defensive practice",
    "technical": "All fictional work remains authorized, defensive, non-operational, privacy-safe, and fully invented.",
    "clear": "Ready evidence includes lab boundaries, readiness checks, fictionalization statements, and reviewer confirmation.",
    "avoid": "Do not use real suspicious content, credentials, systems, logs, screenshots, or private records.",
    "check": "Could any artifact expose or recreate real information?"
  },
  {
    "step": "8. Presentation readiness",
    "technical": "The fictional learner explains purpose, evidence, decisions, limitations, validation, learning, and next improvement clearly and within time.",
    "clear": "Ready evidence includes timed rehearsals, reviewer questions, feedback, and revised speaking notes.",
    "avoid": "Do not assume a complete written artifact guarantees a strong defense.",
    "check": "Can the learner answer evidence, owner, limitation, and validation questions?"
  }
];
const evidenceRecords = [
  {
    "id": "NBR-RDY-01",
    "source": "Quiz evidence",
    "fact": "The fictional learner averages 91% across module quizzes and 88% on mixed recall questions.",
    "what_it_supports": "Strong knowledge recall across most Intermediate domains.",
    "what_it_does_not_support": "Complete applied, communication, validation, or transfer mastery.",
    "owner": "Learner and Teacher"
  },
  {
    "id": "NBR-RDY-02",
    "source": "Log-analysis lab",
    "fact": "The fictional learner builds accurate timelines and source-health notes but overstates impact in two findings.",
    "what_it_supports": "Strong evidence handling with a recurring impact-language gap.",
    "what_it_does_not_support": "Consistent finding quality.",
    "owner": "Learner and Lab Reviewer"
  },
  {
    "id": "NBR-RDY-03",
    "source": "IAM lab",
    "fact": "The fictional learner identifies direct access but misses one nested-group path and one validation check.",
    "what_it_supports": "Functional IAM reasoning with inherited-access and validation gaps.",
    "what_it_does_not_support": "Complete effective-access mastery.",
    "owner": "Learner and Identity Mentor"
  },
  {
    "id": "NBR-RDY-04",
    "source": "Phishing lab",
    "fact": "The fictional learner separates sender evidence, message disposition, one click, credential disclosure, and compromise correctly.",
    "what_it_supports": "Demonstrated phishing-triage readiness.",
    "what_it_does_not_support": "Mastery of every email-security situation.",
    "owner": "Learner and Mail Mentor"
  },
  {
    "id": "NBR-RDY-05",
    "source": "Web and cloud labs",
    "fact": "The fictional learner separates control weakness, possible exposure, confirmed access, and confirmed impact accurately.",
    "what_it_supports": "Strong web and cloud impact reasoning.",
    "what_it_does_not_support": "Complete coverage of every application or cloud control.",
    "owner": "Learner and Technical Reviewer"
  },
  {
    "id": "NBR-RDY-06",
    "source": "Incident report",
    "fact": "The fictional report is complete but initially treats ticket completion as validation.",
    "what_it_supports": "Strong reporting with a corrected validation misconception.",
    "what_it_does_not_support": "Automatic future validation discipline.",
    "owner": "Learner and Incident Mentor"
  },
  {
    "id": "NBR-RDY-07",
    "source": "Risk recommendation",
    "fact": "The fictional learner compares options and selects targeted combined treatment with owners, deadlines, validation, and residual risk.",
    "what_it_supports": "Demonstrated risk-recommendation readiness.",
    "what_it_does_not_support": "Mastery of every legal, financial, or operational context.",
    "owner": "Learner and Risk Mentor"
  },
  {
    "id": "NBR-RDY-08",
    "source": "Security diagram",
    "fact": "The fictional learner creates clear boundaries and evidence markers but initially draws one unsupported relationship.",
    "what_it_supports": "Strong diagram design after revision.",
    "what_it_does_not_support": "Consistent uncertainty handling without review.",
    "owner": "Learner and Diagram Reviewer"
  },
  {
    "id": "NBR-RDY-09",
    "source": "Communication package",
    "fact": "The fictional learner creates eight audience versions but uses inconsistent residual-risk language in three drafts.",
    "what_it_supports": "Strong audience adaptation with a consistency gap.",
    "what_it_does_not_support": "Final approval before correction.",
    "owner": "Learner and Communications Reviewer"
  },
  {
    "id": "NBR-RDY-10",
    "source": "Portfolio artifact",
    "fact": "The fictional artifact has clear claims, selected evidence, visuals, validation, privacy, revision history, and reflection.",
    "what_it_supports": "Demonstrated portfolio structure and safety.",
    "what_it_does_not_support": "Oral presentation readiness.",
    "owner": "Learner and Portfolio Reviewer"
  },
  {
    "id": "NBR-RDY-11",
    "source": "Transfer task",
    "fact": "The fictional learner applies evidence limits from cloud review to IAM, phishing, and incident reporting accurately.",
    "what_it_supports": "Cross-domain transfer of evidence-limited reasoning.",
    "what_it_does_not_support": "Transfer of every domain skill.",
    "owner": "Learner and Teacher"
  },
  {
    "id": "NBR-RDY-12",
    "source": "Presentation rehearsal",
    "fact": "The fictional learner explains purpose and findings clearly but misses one validation question and exceeds the time limit.",
    "what_it_supports": "Functional presentation readiness.",
    "what_it_does_not_support": "Final artifact-defense readiness.",
    "owner": "Learner and Presentation Reviewer"
  }
];
const messageMatrix = [
  {
    "message": "Priority 1 — Validation discipline",
    "opening": "Two fictional artifacts initially treat completed tickets or changes as validated outcomes.",
    "facts": "This gap could cause premature closure, inaccurate risk reduction, or unsupported capstone conclusions.",
    "action": "Add validation matrices to three artifacts and complete one mixed recovery scenario.",
    "validation": "Every action is labeled proposed, authorized, completed, failed, rolled back, or validated with evidence.",
    "cadence": "Complete before I17.8 and reassess after a delay."
  },
  {
    "message": "Priority 2 — Inherited IAM access",
    "opening": "One fictional nested-group path and one effective-state check were missed.",
    "facts": "The learner understands direct access and business need but must strengthen complete path analysis.",
    "action": "Build two effective-access maps covering direct, inherited, nested, conditional, exception, supplier, and service-account paths.",
    "validation": "All access paths and final-state checks are identified correctly in a new scenario.",
    "cadence": "Complete before the capstone identity decision."
  },
  {
    "message": "Priority 3 — Communication consistency",
    "opening": "Three fictional audience drafts use different current residual-risk language.",
    "facts": "The structure is strong, but inconsistent facts could create conflicting decisions.",
    "action": "Create one timestamped approved fact set and revise analyst, leadership, and portfolio versions.",
    "validation": "Impact, status, actions, validation, and residual risk match across all versions.",
    "cadence": "Complete before capstone presentation rehearsal."
  },
  {
    "message": "Module-test preparation",
    "opening": "The fictional learner should review distinctions and decision boundaries rather than reread every lesson.",
    "facts": "Priority concepts include evidence limits, effective access, case boundaries, owner authority, validation, and residual risk.",
    "action": "Complete retrieval practice and one twenty-five-question mixed review.",
    "validation": "Explain every corrected answer and apply the concept to a new example.",
    "cadence": "Final review before the I17 module test."
  },
  {
    "message": "Portfolio completeness",
    "opening": "The fictional written artifact is complete and privacy-safe.",
    "facts": "Learning claims, evidence, visuals, decisions, validation, revision, and reflection are present.",
    "action": "Perform final traceability, accessibility, consistency, and fictionalization review.",
    "validation": "Every claim links to evidence and every visual has purpose, legend, labels, and written support.",
    "cadence": "Before final artifact submission."
  },
  {
    "message": "Presentation rehearsal",
    "opening": "The fictional learner exceeds the time limit and misses one validation question.",
    "facts": "Purpose and findings are clear, while validation and pacing need targeted work.",
    "action": "Complete two timed artifact-defense rehearsals with reviewer questions.",
    "validation": "Explain purpose, evidence, decision, limitation, validation, reflection, and next improvement within the target time.",
    "cadence": "Before final presentation."
  },
  {
    "message": "Capstone-entry decision",
    "opening": "Nine fictional domains are demonstrated and three require targeted review.",
    "facts": "No major safety or foundational blocker remains, and repair plans are scheduled.",
    "action": "Approve conditional entry after the three priority repairs are completed and recorded.",
    "validation": "Updated readiness evidence supports the entry decision.",
    "cadence": "Immediately before starting I17.8."
  },
  {
    "message": "Post-review improvement",
    "opening": "Final readiness does not end development.",
    "facts": "Residual gaps, feedback, capstone performance, and module-test results may change the readiness map.",
    "action": "Record lessons learned and define the next Intermediate-to-Advanced improvement goal.",
    "validation": "Reflection includes evidence, revision, outcome, remaining gap, and next action.",
    "cadence": "After the capstone and module test."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Collect readiness evidence",
    "detail": "Gather fictional quizzes, labs, reports, diagrams, recommendations, communications, validation records, reflections, revisions, and transfer tasks.",
    "output": "Mastery-evidence register."
  },
  {
    "step": "2",
    "title": "Rate each domain",
    "detail": "Compare fictional recall, application, explanation, ownership, validation, transfer, ethics, and portfolio evidence with defined thresholds.",
    "output": "Final domain map."
  },
  {
    "step": "3",
    "title": "Identify patterns and blockers",
    "detail": "Find recurring fictional misconceptions, unsupported claims, owner errors, validation failures, communication inconsistencies, and unsafe choices.",
    "output": "Gap and blocker register."
  },
  {
    "step": "4",
    "title": "Prioritize final review",
    "detail": "Rank fictional gaps by impact, frequency, transfer value, capstone dependency, safety, test importance, and repair effort.",
    "output": "Top-three priorities."
  },
  {
    "step": "5",
    "title": "Practice and revise",
    "detail": "Complete fictional retrieval, mixed scenarios, artifact repair, audience consistency review, validation work, and rehearsal.",
    "output": "Targeted repair package."
  },
  {
    "step": "6",
    "title": "Reassess after a delay",
    "detail": "Repeat fictional recall and transfer tasks, compare results, update confidence, and document remaining limits.",
    "output": "Reassessment dashboard."
  },
  {
    "step": "7",
    "title": "Confirm capstone entry",
    "detail": "Check fictional knowledge, analysis, ownership, validation, communication, portfolio, safety, and presentation criteria.",
    "output": "Capstone-entry decision."
  },
  {
    "step": "8",
    "title": "Finalize strategy and reflection",
    "detail": "Create the fictional module-test plan, portfolio checklist, presentation plan, improvement commitments, and reflection.",
    "output": "Final readiness package."
  }
];
const findings = [
  {
    "id": "NBR-RDY-F01",
    "statement": "The fictional learner demonstrates strong overall Intermediate knowledge, but quiz scores alone do not prove final readiness.",
    "support": "High quiz averages, accurate definitions, and strong retrieval responses across most domains.",
    "alternative": "Mixed practice may reveal additional application gaps not visible in quizzes.",
    "confidence": "High",
    "impact": "Overreliance on recall could hide ownership, communication, validation, or transfer weaknesses.",
    "next": "Use the complete evidence register and mixed scenarios for the final rating."
  },
  {
    "id": "NBR-RDY-F02",
    "statement": "The fictional learner's most important remaining gap is validation discipline.",
    "support": "Two artifacts initially treat completed tickets or changes as validated outcomes.",
    "alternative": "The issue may reflect template design rather than conceptual misunderstanding.",
    "confidence": "High",
    "impact": "Premature closure or risk-reduction claims could weaken the capstone.",
    "next": "Complete validation matrices and a mixed recovery scenario before I17.8."
  },
  {
    "id": "NBR-RDY-F03",
    "statement": "The fictional learner is functionally ready in IAM but needs one inherited-access reassessment.",
    "support": "Direct access and business need are reviewed correctly, while one nested group and one effective-state check were missed.",
    "alternative": "The omissions may result from time pressure.",
    "confidence": "Medium-High",
    "impact": "Unsupported capability may remain hidden in the capstone case.",
    "next": "Complete two effective-access maps and delayed reassessment."
  },
  {
    "id": "NBR-RDY-F04",
    "statement": "The fictional learner communicates well across audiences but must correct inconsistent residual-risk language.",
    "support": "Eight audience versions are structurally strong, while three drafts use different current-risk descriptions.",
    "alternative": "The drafts may represent different points in time but lack clear timestamps.",
    "confidence": "High",
    "impact": "Readers may make conflicting decisions from the same evidence.",
    "next": "Create one timestamped approved fact set and complete a consistency review."
  },
  {
    "id": "NBR-RDY-F05",
    "statement": "The fictional portfolio is complete and safe, while oral artifact-defense readiness remains functional rather than demonstrated.",
    "support": "Claims, evidence, visuals, validation, privacy, revisions, and reflection are strong, but rehearsal exceeds time and misses one validation question.",
    "alternative": "Presentation performance may improve naturally with familiarity.",
    "confidence": "High",
    "impact": "The learner may not explain the strongest work effectively during final review.",
    "next": "Complete two timed rehearsals and answer evidence, owner, limitation, validation, and reflection questions."
  },
  {
    "id": "NBR-RDY-F06",
    "statement": "The fictional learner may enter the Intermediate capstone after completing the three targeted repairs.",
    "support": "Nine domains are demonstrated, three are functional, safety is strong, and no unresolved foundational gap remains.",
    "alternative": "A new mixed practice set may reveal another blocker.",
    "confidence": "Medium-High",
    "impact": "Starting the capstone is reasonable if final review continues alongside the work.",
    "next": "Complete the repairs, document the entry decision, and begin I17.8."
  }
];
const commonMistakes = [
  "Rating fictional readiness from confidence, completion, speed, or one score instead of several evidence types.",
  "Reviewing only weak quiz topics while ignoring recurring lab, communication, ownership, validation, or transfer errors.",
  "Treating one poor result as proof that the entire domain is weak.",
  "Treating one strong artifact as proof that every related skill is demonstrated.",
  "Using rereading as the only final-review method instead of retrieval, mixed practice, revision, and reassessment.",
  "Creating an unrealistic plan that reviews every module every day with no priority, deadline, or success measure.",
  "Entering the capstone with an unresolved safety issue or major validation misconception.",
  "Ignoring inherited, nested, conditional, supplier, exception, or service-account access paths.",
  "Changing possible impact into confirmed impact to make the portfolio appear stronger.",
  "Using inconsistent status, confidence, action, validation, or residual-risk language across artifacts.",
  "Treating completed tickets, restored service, or stopped alerts as proof of closure.",
  "Skipping presentation rehearsal because the written artifact is complete.",
  "Copying or lightly editing real systems, logs, messages, incidents, risk records, diagrams, supplier data, employee records, school records, or confidential material.",
  "Using real suspicious content, credentials, or unauthorized systems as final-review practice."
];
const quizQuestions = [
  {
    "question": "What is the strongest evidence of fictional final Intermediate readiness?",
    "choices": [
      "Consistent recall, application, communication, ownership, validation, transfer, ethics, portfolio quality, and reflection across multiple evidence types.",
      "One high quiz score.",
      "Completing every lesson.",
      "Feeling confident."
    ],
    "answer": 0,
    "explanation": "Final readiness requires several forms of demonstrated evidence."
  },
  {
    "question": "What makes a fictional gap a capstone blocker?",
    "choices": [
      "It prevents safe, accurate, or complete capstone work until corrected.",
      "It lowers one quiz by a single point.",
      "It affects only formatting preference.",
      "It requires one spelling revision."
    ],
    "answer": 0,
    "explanation": "A blocker affects safe or reliable performance, not minor polish."
  },
  {
    "question": "Why should a fictional learner reassess after a delay?",
    "choices": [
      "Delayed reassessment shows whether the correction can be recalled and transferred rather than repeated immediately.",
      "Immediate repetition is always enough.",
      "Reassessment is only for failed modules.",
      "It removes the need for portfolio evidence."
    ],
    "answer": 0,
    "explanation": "A delay tests durable learning and transfer."
  },
  {
    "question": "What is the strongest repair for repeated ticket-equals-validation errors?",
    "choices": [
      "Add measurable effective-state, service, source, user, owner, monitoring, communication, and residual-risk checks to several mixed artifacts.",
      "Memorize the word validation.",
      "Close fewer tickets.",
      "Remove all corrective actions."
    ],
    "answer": 0,
    "explanation": "The repair should practice the complete validation discipline."
  },
  {
    "question": "What should remain consistent across fictional portfolio, analyst, and leadership versions?",
    "choices": [
      "The facts, impact limits, status, actions, validation, and residual risk.",
      "The exact amount of detail.",
      "The exact wording.",
      "The document length."
    ],
    "answer": 0,
    "explanation": "Audience adaptation should not change the supported fact base."
  },
  {
    "question": "When may the fictional learner begin I17.8?",
    "choices": [
      "After no major safety or foundational blocker remains and targeted gaps have evidence-based repairs and reassessment.",
      "Immediately after reading I17.7.",
      "Only after every domain reaches perfect performance.",
      "Whenever the portfolio looks polished."
    ],
    "answer": 0,
    "explanation": "Capstone entry should be evidence-based and realistic."
  },
  {
    "question": "What makes a fictional readiness package portfolio-safe?",
    "choices": [
      "Every system, identity, score, evidence item, incident, supplier, date, action, and outcome is invented.",
      "Only passwords are removed.",
      "Real logs are summarized.",
      "A real report is copied with fictional headings."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required."
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

export default function IntermediateFinalReadinessReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 7 of 8</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-blue-200">Final Readiness</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.7 Intermediate Final Readiness Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Evaluate complete fictional Intermediate readiness, identify the
            last priority gaps, repair capstone blockers, finalize the
            module-test and portfolio strategy, and document evidence for
            entering the final Intermediate capstone.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Intermediate Final Readiness Review"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional systems, identities, evidence, messages, suppliers, services, decisions, dates, actions, and outcomes.",
            "I will not copy, lightly edit, upload, or expose real incident updates, company messages, employee records, school records, supplier communications, logs, screenshots, identities, systems, or confidential information.",
            "I will preserve the same fictional facts, impact limits, ownership, validation, status, and residual risk across audience versions.",
            "I will distinguish fictional observation, conclusion, alternate explanation, confidence, potential impact, confirmed impact, limitation, and unknown.",
            "I will not create instructions for accessing, testing, changing, scanning, or probing real systems.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Final Readiness Is a Decision, Not a Feeling">
          <p className="leading-8">
            A fictional learner feels ready because every lesson is complete and most quiz scores are high. However, two artifacts confuse completion with validation, one IAM review misses inherited access, and three audience messages disagree about residual risk. The final review determines whether those are targeted repair tasks or true capstone blockers.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak readiness review</p>
              <p className="mt-2 leading-7">Send one technical message to everyone, repeat alert titles, hide limitations, overstate impact, use jargon, make vague requests, and omit the next update.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional readiness review</p>
              <p className="mt-2 leading-7">Define the audience and decision, preserve facts, explain significance, show uncertainty, name owners, request one clear action, define validation, and set cadence.</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="The Capstone Combines Every Intermediate Responsibility">
          <p className="leading-8">
            The final fictional capstone combines evidence analysis, systems, identity, email, web, cloud, incident response, risk, security operations, reporting, diagrams, audience communication, validation, reflection, and portfolio safety. Final review shows whether those skills work together under a new scenario.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Evidence–Rating–Gap–Repair–Reassess Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Fact", "Which fictional observation, source, timestamp, source-health note, and limitation are confirmed?"],
              ["Meaning", "Which fictional conclusion, alternate explanation, confidence, potential impact, confirmed impact, and unknown are supported?"],
              ["Action", "Which fictional approval, review, change, communication, monitoring, or evidence request is needed?"],
              ["Owner", "Who may decide, perform, validate, communicate, escalate, or accept residual risk?"],
              ["Validation", "Which fictional effective-state, service, source, user, communication, metric, signoff, and next-update evidence proves success?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Final Readiness, Reassessment, and Capstone Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Final Domain Review</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Aggregated Intermediate Readiness Domains</h2>
          <div className="mt-6 grid gap-5">
            {audiences.map((item) => (
              <article key={item.audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Readiness question", item.decision],
                    ["Include", item.include],
                    ["Omit", item.omit],
                    ["Capstone standard", item.tone],
                    ["Final action", item.sample],
                  ].map(([label, detail]) => (
                    <div key={`${item.audience}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Capstone Entry Criteria</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Checks before Beginning I17.8</h2>
          <div className="mt-6 grid gap-5">
            {translationSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.step}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Ready standard", item.technical],
                    ["Evidence standard", item.clear],
                    ["Avoid", item.avoid],
                    ["Readiness question", item.check],
                  ].map(([label, detail]) => (
                    <div key={`${item.step}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Final Readiness Evidence</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Twelve Fictional Mastery-Evidence Records</h2>
          <div className="mt-6 grid gap-5">
            {evidenceRecords.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.source}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.fact}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Supports", item.what_it_supports],
                    ["Does not support", item.what_it_does_not_support],
                    ["Owner", item.owner],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Priority Repairs and Final Strategy</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Final-Review Actions</h2>
          <div className="mt-6 grid gap-5">
            {messageMatrix.map((item) => (
              <article key={item.message} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.message}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Current evidence", item.opening],
                    ["Readiness meaning", item.facts],
                    ["Repair or action", item.action],
                    ["Validation", item.validation],
                    ["Deadline or cadence", item.cadence],
                  ].map(([label, detail]) => (
                    <div key={`${item.message}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Final Review Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Evidence Collection to Capstone Entry</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Intermediate Final Readiness Dashboard"
          subtitle="Training dashboard based on fictional readiness evidence only."
          metrics={[
            { label: "Capstone-ready domains", value: "9", note: "Nine fictional domains demonstrate consistent recall, application, communication, validation, transfer, and safe portfolio work." },
            { label: "Targeted review domains", value: "3", note: "Validation discipline, inherited IAM access, and communication consistency require final repair." },
            { label: "Major safety blockers", value: "0", note: "All fictional work remains defensive, authorized, non-operational, privacy-safe, and fully invented." },
          ]}
        />

        <FakeAlertCard
          title="High Overall Scores Hide Three Capstone Readiness Gaps"
          severity="Medium"
          time="5:24 PM"
          source="Fake Intermediate Readiness Console"
          details="A fictional learner has strong quiz and portfolio results but still confuses completion with validation, misses one inherited-access path, and uses inconsistent residual-risk language."
          recommendation="Complete the three targeted repairs, reassess after a delay, document the capstone-entry decision, rehearse the artifact defense, and preserve the approved fictional fact set."
        />

        <FakeLogPanel
          title="Fake Final Readiness Timeline"
          logs={[
            "09:00 REVIEW domains='12'",
            "09:15 QUIZ average='91-percent'",
            "09:30 TRANSFER evidence-limits='demonstrated'",
            "09:45 VALIDATION ticket-equals-outcome='repeated'",
            "10:00 IAM nested-group='missed'",
            "10:15 PHISHING triage='demonstrated'",
            "10:30 CLOUD impact-language='demonstrated'",
            "10:45 RISK recommendation='demonstrated'",
            "11:00 DIAGRAM unsupported-link='revised'",
            "11:15 COMM residual-risk='inconsistent'",
            "11:30 PORTFOLIO safety='verified'",
            "11:45 PRESENTATION validation-question='missed'",
            "12:00 GAP priorities='3'",
            "12:15 REPAIR tasks='assigned'",
            "12:30 REASSESS date='scheduled'",
            "12:45 CAPSTONE entry='conditional-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Final Readiness Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Findings and Entry Decisions</h2>
          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Is the Fictional Learner Ready to Begin I17.8?"
          evidence={[
            "Nine fictional domains are rated capstone ready.",
            "Three fictional domains are rated ready with targeted review.",
            "No major safety or foundational blocker remains.",
            "Validation discipline has two recurring errors.",
            "One inherited IAM path was missed.",
            "Communication versions use inconsistent residual-risk language.",
            "A focused repair and reassessment plan is scheduled.",
          ]}
          question="Which readiness conclusion is strongest?"
          options={[
            "The learner is conditionally ready and may begin I17.8 after completing the three targeted repairs and documenting reassessment evidence.",
            "The learner is fully ready because quiz scores are high.",
            "The learner must repeat the entire Intermediate track.",
            "The learner should ignore the gaps because the portfolio is complete.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports strong overall readiness with focused repairs rather than automatic full readiness or a complete restart."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Final Readiness Review">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Fictional Intermediate Final Readiness Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Domain Ratings, Gap Repairs, Reassessment, Test Strategy, and Capstone Entry</h3>
              <p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge evidence to create a complete audience-aware communication package.</p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Final-review charter with purpose, domains, evidence, thresholds, safety, deadlines, reviewers, and capstone-entry rule.</li>
                <li>Domain readiness map covering knowledge, application, communication, ownership, validation, transfer, portfolio evidence, rating, and confidence.</li>
                <li>Mastery-evidence register covering quizzes, labs, reports, diagrams, recommendations, communications, validation, reflection, revision, and presentation.</li>
                <li>Error-pattern and blocker register with cause, impact, evidence, targeted repair, owner, deadline, and success measure.</li>
                <li>Top-three repair plan using retrieval, mixed scenarios, artifact revision, consistency review, validation, and delayed reassessment.</li>
                <li>Capstone-entry checklist, module-test strategy, portfolio-completeness review, presentation rehearsal, and reviewer questions.</li>
                <li>Reassessment dashboard with updated ratings, evidence, remaining limitations, entry decision, and next action.</li>
                <li>Leadership-style readiness summary, personal reflection, improvement commitments, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fully fictional and privacy-safe evidence. Do not copy,
            lightly edit, expose, or recreate real systems, identities, logs,
            messages, incidents, suppliers, risk records, diagrams, employee
            data, school records, scores, or confidential organizational material.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Learner Wants to Skip the Validation Repair"
          scenario="The fictional portfolio is complete, but two artifacts still treat ticket completion or completed changes as proof of validated outcome."
          choices={[
            {
              label: "Choice A",
              response:
                "Complete validation matrices and a mixed recovery scenario before entering the capstone, then reassess after a delay.",
              outcome:
                "Best readiness choice. The recurring gap directly affects capstone closure and risk claims.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Skip the repair because the overall average is high.",
              outcome:
                "Weak. High recall does not remove a repeated applied misconception.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete every corrective action from the portfolio.",
              outcome:
                "Weak. The goal is to validate outcomes, not remove the decision trail.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="The Final Study Plan Reviews Every Module Every Day"
          scenario="The fictional plan contains dozens of tasks, no priority gaps, no deadlines, no success measures, and no reassessment."
          choices={[
            {
              label: "Choice A",
              response:
                "Focus on the three evidence-supported gaps, assign specific repair tasks, define success measures and deadlines, and schedule reassessment.",
              outcome:
                "Best planning choice. The final review becomes focused, measurable, and realistic.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep every task because more studying always creates better readiness.",
              outcome:
                "Weak. Overloaded plans reduce focus and hide whether gaps improve.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Review only demonstrated domains because they are easier.",
              outcome:
                "Weak. Priority gaps and capstone risks would remain.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Intermediate Final Readiness Checklist"
          items={[
            "I can evaluate all fictional Intermediate readiness domains using multiple evidence types.",
            "I can distinguish fictional capstone-ready, targeted-review, developing, and blocker levels.",
            "I can identify recurring fictional misconceptions, unsupported claims, owner errors, communication inconsistencies, validation failures, and unsafe choices.",
            "I can prioritize fictional gaps by impact, frequency, transfer value, capstone dependency, safety, and repair effort.",
            "I can create fictional retrieval, mixed-scenario, artifact-revision, communication, validation, and presentation repair tasks.",
            "I can reassess fictional performance after a delay and update the readiness rating with evidence.",
            "I can confirm fictional knowledge, analysis, ownership, validation, communication, portfolio, safety, and presentation entry criteria.",
            "I can create a fictional module-test strategy based on evidence, boundaries, owners, validation, and impact limits.",
            "I can defend a fictional portfolio artifact through purpose, evidence, decisions, limitations, validation, learning, and next improvement.",
            "I will never expose or recreate real systems, identities, scores, logs, messages, incidents, suppliers, diagrams, employee data, school records, risk information, or confidential material.",
          ]}
        />

        <MiniQuiz title="I17.7 Mini Quiz: Intermediate Final Readiness Review" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Intermediate Final Readiness Package. Include the final-review charter, domain readiness map, mastery-evidence register, confidence calibration, error-pattern log, capstone-blocker analysis, top-three repair priorities, targeted practice plan, deadlines, owners, success measures, delayed reassessment, updated ratings, capstone-entry checklist, module-test strategy, portfolio-completeness checklist, presentation rehearsal, reviewer questions, readiness dashboard, leadership summary, personal reflection, improvement commitments, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, evidence, scores, dates, incidents, suppliers, actions, and outcomes.",
            "Use several evidence types instead of confidence or one score.",
            "Treat repeated validation, ownership, safety, or impact-language errors as priority gaps.",
            "Document why the learner may enter the capstone and which improvements must continue.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Final Intermediate readiness is an evidence-based decision rather than a feeling.",
            "Quizzes, labs, reports, diagrams, recommendations, communications, validation, transfer, reflection, and revision measure different parts of readiness.",
            "Priority gaps should be selected by impact, frequency, transfer value, safety, and capstone dependency.",
            "A recurring validation or ownership misconception may matter more than a small quiz weakness.",
            "Capstone entry does not require perfection, but it does require no unresolved major safety or foundational blocker.",
            "Reassessment after a delay helps confirm durable learning and transfer.",
            "Final readiness and portfolio artifacts must be fully fictional and should never expose or recreate real defensive material.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I17</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}