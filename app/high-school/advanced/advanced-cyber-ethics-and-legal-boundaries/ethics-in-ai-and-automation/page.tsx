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
  `${modulePath}/conflicts-of-interest-and-trust`;
const nextLesson =
  `${modulePath}/professional-communication-during-risk`;

const objectives = [
  "Explain why AI and automation in cybersecurity require human accountability, authorization, evidence, privacy, fairness, service awareness, and safe failure design.",
  "Distinguish decision support, enrichment, recommendation, approval, execution, communication, and risk acceptance in fictional automated workflows.",
  "Identify ethical risks involving bias, poor data quality, false confidence, hidden assumptions, privacy, overcollection, inaccessible explanations, service disruption, and unfair treatment.",
  "Design a fictional automation with narrow scope, approval gates, least privilege, rollback, exception handling, monitoring, audit records, and measurable validation.",
  "Create a portfolio-ready ethical automation review using only invented systems, identities, alerts, data, models, decisions, dates, actions, and outcomes."
];
const vocabulary = [
  [
    "Artificial intelligence",
    "A broad category of fictional systems that use data and computational methods to classify, predict, summarize, recommend, or generate outputs."
  ],
  [
    "Automation",
    "A fictional workflow that performs defined steps with limited or no manual repetition, such as enrichment, ticket creation, routing, or owner-approved response."
  ],
  [
    "Decision support",
    "A fictional tool output that informs a human decision without owning the final approval or action."
  ],
  [
    "Human-in-the-loop",
    "A design in which an authorized fictional person reviews evidence and approves, rejects, changes, or escalates an automated recommendation before action."
  ],
  [
    "Human-on-the-loop",
    "A design in which automation acts within narrow limits while an authorized fictional person monitors, can intervene, and reviews outcomes."
  ],
  [
    "Human-out-of-the-loop",
    "A design in which the fictional system acts without direct human review; this requires very narrow scope, low impact, strong controls, and clear ownership."
  ],
  [
    "Model input",
    "The fictional data, features, context, prompts, rules, or evidence supplied to an AI or automated process."
  ],
  [
    "Model output",
    "The fictional score, label, summary, recommendation, generated text, or action request produced by the system."
  ],
  [
    "Bias",
    "A systematic fictional pattern that creates unfair, inaccurate, or uneven outcomes for certain users, roles, systems, or situations."
  ],
  [
    "Explainability",
    "The ability to describe which fictional evidence, rules, features, assumptions, or limits contributed to an output."
  ],
  [
    "Confidence score",
    "A fictional numeric or categorical estimate of uncertainty; it is not proof that the output is correct."
  ],
  [
    "Approval gate",
    "A required fictional checkpoint before a high-impact action, communication, data access, account change, or service decision may proceed."
  ],
  [
    "Guardrail",
    "A fictional technical or process control that limits what an AI or automation may access, recommend, change, disclose, or repeat."
  ],
  [
    "Fail-safe",
    "A fictional design that moves to a safer state when data, logic, service, authorization, or monitoring becomes unreliable."
  ],
  [
    "Rollback",
    "A controlled fictional method for undoing an automated change and restoring the prior known state."
  ],
  [
    "Drift",
    "A fictional change in data, environment, behavior, assumptions, or system performance that makes earlier logic less reliable."
  ],
  [
    "Auditability",
    "The ability to reconstruct a fictional automated decision from inputs, outputs, rules, owners, approvals, actions, exceptions, and validation."
  ],
  [
    "Accountability",
    "Clear fictional ownership for design, data, approval, action, monitoring, communication, error correction, and residual risk."
  ]
];
const automationLevels = [
  {
    "level": "Manual-only",
    "description": "A fictional analyst performs every step and documents the result.",
    "appropriate_for": "Novel, high-impact, unclear, privacy-sensitive, legally sensitive, or low-volume cases.",
    "main_risk": "Slow, inconsistent, or difficult to scale.",
    "required_control": "Checklists, peer review, documentation, training, and owner oversight.",
    "example": "A fictional analyst manually reviews an unusual executive-account alert."
  },
  {
    "level": "Assisted analysis",
    "description": "Automation gathers context, summarizes records, or ranks evidence while a fictional analyst makes the decision.",
    "appropriate_for": "Alert enrichment, evidence organization, case summaries, and low-risk prioritization.",
    "main_risk": "Analysts may overtrust summaries or miss omitted evidence.",
    "required_control": "Source links, confidence labels, limitations, review prompts, and easy access to original evidence.",
    "example": "A fictional tool collects account age, role, recent changes, and service dependency."
  },
  {
    "level": "Recommendation with approval",
    "description": "Automation proposes a fictional action, but an authorized human must approve before execution.",
    "appropriate_for": "Targeted session review, ticket priority changes, owner notification, and reversible control suggestions.",
    "main_risk": "Approval can become automatic if reviewers stop checking evidence.",
    "required_control": "Decision criteria, evidence preview, reason code, approver identity, timeout, and reject or modify options.",
    "example": "A fictional system recommends revoking one session after two correlated signals."
  },
  {
    "level": "Limited automated action",
    "description": "Automation performs a narrow, reversible, low-impact fictional action within predefined limits.",
    "appropriate_for": "Adding a case tag, collecting approved context, opening a ticket, or applying a temporary low-risk safeguard.",
    "main_risk": "Bad data or logic may repeat the wrong action at scale.",
    "required_control": "Rate limits, least privilege, rollback, monitoring, exceptions, and owner notification.",
    "example": "A fictional workflow temporarily marks a session for review without disabling the account."
  },
  {
    "level": "High-impact automated action",
    "description": "Automation changes access, disables accounts, blocks services, deletes data, contacts users, or affects critical operations.",
    "appropriate_for": "Only rare, tightly governed fictional situations with strong evidence, narrow scope, and explicit ownership.",
    "main_risk": "Unfair denial, outage, evidence loss, privacy harm, and difficult recovery.",
    "required_control": "Human approval, redundancy, service-owner review, rollback testing, exception handling, audit, and continuous validation.",
    "example": "A fictional proposal to disable every account after one High alert should be rejected."
  },
  {
    "level": "Autonomous governance decision",
    "description": "AI accepts risk, interprets legal obligations, assigns blame, or approves public communication without human ownership.",
    "appropriate_for": "Not appropriate in CyberShield Academy.",
    "main_risk": "No legitimate accountability for high-impact professional judgment.",
    "required_control": "Keep these decisions with authorized human owners.",
    "example": "A fictional AI may summarize options but cannot accept residual risk for leadership."
  }
];
const ethicalRisks = [
  {
    "risk": "Automation bias",
    "description": "A fictional analyst accepts an AI recommendation because the system appears advanced or confident.",
    "evidence_question": "Can the reviewer see original evidence, alternate explanations, confidence limits, and the option to reject?",
    "strong_control": "Require active review, reason codes, source links, and documented human decisions.",
    "failure_pattern": "The reviewer clicks approve without examining the evidence."
  },
  {
    "risk": "Data-quality failure",
    "description": "Missing, stale, duplicated, mislabeled, or unhealthy fictional inputs produce misleading outputs.",
    "evidence_question": "Are sources complete, current, trustworthy, normalized, and relevant to the decision?",
    "strong_control": "Source-health checks, freshness limits, deduplication, missing-data handling, and safe fallback.",
    "failure_pattern": "The model treats missing logs as proof that no event occurred."
  },
  {
    "risk": "Unfair impact",
    "description": "The fictional workflow affects certain roles, schedules, locations, devices, or user groups more often without justified evidence.",
    "evidence_question": "Do error rates, actions, overrides, and harms differ across relevant groups or contexts?",
    "strong_control": "Fairness review, representative test cases, outcome monitoring, and appeal or support paths.",
    "failure_pattern": "Night-shift users are repeatedly locked out because the baseline ignores their schedule."
  },
  {
    "risk": "Privacy overreach",
    "description": "The fictional system collects more personal or confidential data than needed for the approved purpose.",
    "evidence_question": "Which exact fields drive the decision, who owns them, and can the same result use less data?",
    "strong_control": "Purpose limitation, field allowlists, pseudonyms, access limits, retention, and deletion.",
    "failure_pattern": "The workflow reads full mailboxes to improve an identity score."
  },
  {
    "risk": "Opaque reasoning",
    "description": "The fictional output provides a label or action without enough explanation for review.",
    "evidence_question": "Can the owner trace the recommendation to evidence, rules, assumptions, and known limitations?",
    "strong_control": "Explanation fields, evidence references, model cards, reason codes, and reviewer education.",
    "failure_pattern": "The system says malicious with no supporting details."
  },
  {
    "risk": "Scope expansion",
    "description": "The fictional automation gains access to more systems, identities, data, actions, or audiences over time.",
    "evidence_question": "Does current behavior still match written authorization and least privilege?",
    "strong_control": "Versioned scope, access review, approval gates, and change control.",
    "failure_pattern": "A ticketing workflow later receives permission to disable accounts without a new review."
  },
  {
    "risk": "Service disruption",
    "description": "A fictional automated response interrupts important services or dependencies.",
    "evidence_question": "What service depends on the identity or asset, and how is continuity protected?",
    "strong_control": "Service-owner review, targeted action, maintenance awareness, rollback, and health validation.",
    "failure_pattern": "A service account is disabled after one noisy alert."
  },
  {
    "risk": "Evidence loss",
    "description": "The fictional automation deletes, overwrites, compresses, or fails to preserve records needed for review.",
    "evidence_question": "Are original inputs, timestamps, outputs, approvals, actions, and errors retained appropriately?",
    "strong_control": "Immutable source references, handling logs, retention rules, and preservation before action.",
    "failure_pattern": "Only the AI summary remains after the raw evidence expires."
  },
  {
    "risk": "Communication harm",
    "description": "AI-generated fictional messages exaggerate impact, expose private details, or contact the wrong audience.",
    "evidence_question": "Who approved the fact set, audience, language, timing, and privacy boundary?",
    "strong_control": "Human communication owner, templates, redaction, approval, and correction process.",
    "failure_pattern": "The system emails a manager saying an employee was compromised after one alert."
  },
  {
    "risk": "Accountability gap",
    "description": "No fictional person clearly owns the model, data, action, exception, communication, or residual risk.",
    "evidence_question": "Who can explain, approve, stop, correct, rollback, validate, and accept the remaining risk?",
    "strong_control": "Named owners, escalation paths, on-call support, audit, and governance review.",
    "failure_pattern": "Everyone says the system made the decision."
  }
];
const ownerRoles = [
  {
    "role": "Business or mission owner",
    "responsibility": "Defines the fictional purpose, expected value, acceptable disruption, user needs, and risk tolerance.",
    "decision": "Whether the automation supports a valid mission and remains worth operating.",
    "cannot_delegate_to_ai": "Acceptance of business residual risk.",
    "evidence": "Purpose statement, value metric, service context, and risk decision."
  },
  {
    "role": "System or automation owner",
    "responsibility": "Owns the fictional workflow design, scope, access, versions, failure handling, documentation, and lifecycle.",
    "decision": "How the approved workflow is implemented and maintained.",
    "cannot_delegate_to_ai": "Accountability for design and operation.",
    "evidence": "Architecture, owner record, version history, controls, and support plan."
  },
  {
    "role": "Data owner",
    "responsibility": "Approves fictional inputs, fields, quality, access, purpose, retention, sharing, and deletion.",
    "decision": "Which data may be used and under what conditions.",
    "cannot_delegate_to_ai": "Authority over sensitive information.",
    "evidence": "Data inventory, classification, approval, quality metrics, and retention rule."
  },
  {
    "role": "Security analyst",
    "responsibility": "Reviews fictional evidence, challenges recommendations, documents decisions, escalates uncertainty, and monitors outcomes.",
    "decision": "Whether evidence supports approval, rejection, modification, or escalation within authority.",
    "cannot_delegate_to_ai": "Professional judgment in high-impact cases.",
    "evidence": "Case notes, evidence review, decision, and validation."
  },
  {
    "role": "Service owner",
    "responsibility": "Explains fictional dependencies, continuity, maintenance, recovery, and acceptable operational impact.",
    "decision": "Whether an action is safe for the service.",
    "cannot_delegate_to_ai": "Approval of disruptive service changes.",
    "evidence": "Dependency map, health checks, rollback, and signoff."
  },
  {
    "role": "Privacy and fairness reviewer",
    "responsibility": "Reviews fictional data minimization, user impact, group outcomes, appeals, transparency, and possible discrimination.",
    "decision": "Whether additional safeguards or review are required.",
    "cannot_delegate_to_ai": "Final judgment on acceptable privacy and fairness impact.",
    "evidence": "Field map, outcome analysis, error rates, user path, and mitigation."
  },
  {
    "role": "Change or response approver",
    "responsibility": "Approves fictional actions based on evidence, service context, scope, rollback, and urgency.",
    "decision": "Whether the proposed change or response may execute.",
    "cannot_delegate_to_ai": "Authorization for high-impact actions.",
    "evidence": "Approval record, reason, owner, time, scope, and rollback."
  },
  {
    "role": "Risk owner or leadership",
    "responsibility": "Reviews fictional value, harm, compliance, resources, residual uncertainty, exceptions, and continuation.",
    "decision": "Whether remaining risk is accepted, reduced, transferred, avoided, or monitored.",
    "cannot_delegate_to_ai": "Ownership of organizational risk.",
    "evidence": "Risk register, treatment decision, owner, deadline, and acceptance."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the approved purpose",
    "questions": "What fictional problem should the AI or automation solve, for whom, and what decisions must remain human-owned?",
    "output": "Purpose, scope, and human-ownership statement.",
    "stop": "Pause if the goal is vague, high-impact, or unsupported by a real decision need."
  },
  {
    "step": "2",
    "title": "Map inputs and data rights",
    "questions": "Which fictional sources, fields, identities, labels, time ranges, owners, and quality conditions are required?",
    "output": "Input, ownership, quality, and minimum-necessary matrix.",
    "stop": "Pause if private or confidential data lacks owner approval."
  },
  {
    "step": "3",
    "title": "Define output and authority",
    "questions": "Does the fictional system summarize, score, recommend, approve, execute, communicate, or accept risk?",
    "output": "Output-to-authority map.",
    "stop": "Do not allow the system to own decisions beyond its authorized role."
  },
  {
    "step": "4",
    "title": "Assess ethical and operational risk",
    "questions": "What bias, privacy, service, evidence, fairness, explainability, scale, failure, and accountability risks could occur?",
    "output": "Ethical-risk register.",
    "stop": "Pause if foreseeable harm lacks an owner or safeguard."
  },
  {
    "step": "5",
    "title": "Design guardrails and approval gates",
    "questions": "What least privilege, thresholds, rate limits, human review, exclusions, exceptions, and stop conditions apply?",
    "output": "Guardrail and approval design.",
    "stop": "Do not automate high-impact action without explicit owner approval and rollback."
  },
  {
    "step": "6",
    "title": "Test with representative fictional cases",
    "questions": "Do normal, unusual, missing-data, conflicting, edge, high-impact, and group-specific cases produce safe outcomes?",
    "output": "Test matrix with expected and actual results.",
    "stop": "Pause if harmful errors or uneven outcomes lack acceptable mitigation."
  },
  {
    "step": "7",
    "title": "Prepare failure and rollback",
    "questions": "What happens when sources fail, confidence drops, actions error, service degrades, or an exception appears?",
    "output": "Fail-safe, rollback, and manual fallback plan.",
    "stop": "Do not deploy if the team cannot stop or reverse the workflow."
  },
  {
    "step": "8",
    "title": "Deploy narrowly and monitor",
    "questions": "Which fictional users, systems, actions, times, and volumes are included in the limited launch, and what metrics are watched?",
    "output": "Pilot scope and monitoring plan.",
    "stop": "Pause for scope drift, rising overrides, service harm, unfair outcomes, privacy issues, or missing logs."
  },
  {
    "step": "9",
    "title": "Validate decisions and outcomes",
    "questions": "Were outputs accurate, actions effective, users treated fairly, services healthy, records complete, and owners informed?",
    "output": "Outcome validation and residual-risk record.",
    "stop": "Do not call the automation successful based only on speed or ticket volume."
  },
  {
    "step": "10",
    "title": "Govern change and retirement",
    "questions": "How are fictional model, data, rules, access, thresholds, owners, documentation, retraining, and retirement reviewed?",
    "output": "Lifecycle governance and improvement plan.",
    "stop": "Do not allow silent version, data, scope, or owner changes."
  }
];
const controlMatrix = [
  {
    "control": "Narrow scope",
    "question": "Which fictional systems, identities, data, outputs, actions, times, and audiences are allowed?",
    "weak_design": "Process all alerts and take any necessary action.",
    "strong_design": "Enrich one alert type using approved fields and open a review ticket only.",
    "validation": "Audit behavior against the written scope."
  },
  {
    "control": "Least privilege",
    "question": "What is the minimum fictional access required?",
    "weak_design": "Give administrator access in case future actions need it.",
    "strong_design": "Read approved evidence and write only to the case system.",
    "validation": "Confirm unapproved reads and actions are denied."
  },
  {
    "control": "Human approval",
    "question": "Which fictional actions require an authorized reviewer?",
    "weak_design": "Approve automatically when confidence is above 80%.",
    "strong_design": "Require service-aware human approval for any identity or access change.",
    "validation": "Verify every high-impact action has an approver and reason."
  },
  {
    "control": "Explainability",
    "question": "Can a fictional reviewer understand why the output occurred?",
    "weak_design": "Show only malicious or safe.",
    "strong_design": "Show evidence IDs, source health, rule or feature contribution, confidence, alternatives, and limitations.",
    "validation": "Ask an independent reviewer to reconstruct the recommendation."
  },
  {
    "control": "Privacy",
    "question": "Can the fictional decision use fewer or less sensitive fields?",
    "weak_design": "Ingest full mailboxes and employee records.",
    "strong_design": "Use approved identity, time, role, result, source category, and service-dependency fields only.",
    "validation": "Compare actual fields with the allowlist and retention rule."
  },
  {
    "control": "Fairness",
    "question": "Do fictional outcomes differ across relevant roles, schedules, or environments?",
    "weak_design": "Use one daytime baseline for every user.",
    "strong_design": "Test representative schedules and provide appeal and support paths.",
    "validation": "Compare error, override, and action rates across approved groups."
  },
  {
    "control": "Rate limiting",
    "question": "How much fictional action may occur before review or pause?",
    "weak_design": "Process every matching account immediately.",
    "strong_design": "Limit actions per time window and stop when volume exceeds expectation.",
    "validation": "Simulate a noisy source and verify the cap."
  },
  {
    "control": "Rollback",
    "question": "Can every fictional change be safely reversed?",
    "weak_design": "Permanent actions with no prior-state record.",
    "strong_design": "Temporary, logged actions with owner-approved restoration.",
    "validation": "Test rollback and service recovery before pilot use."
  },
  {
    "control": "Audit trail",
    "question": "Can the full fictional decision be reconstructed?",
    "weak_design": "Store only the final action.",
    "strong_design": "Record inputs, versions, output, explanation, approver, action, error, rollback, and validation.",
    "validation": "Reconstruct selected cases from the audit log."
  },
  {
    "control": "Kill switch and fallback",
    "question": "Can authorized fictional owners stop automation and continue safely?",
    "weak_design": "The workflow continues until a developer changes code.",
    "strong_design": "Authorized stop, safe default, manual procedure, owner notification, and restart approval.",
    "validation": "Run a controlled stop and manual fallback exercise."
  }
];
const testCases = [
  {
    "case": "Expected service-account sign-in",
    "input": "Approved time, known source category, stable service, no recent changes.",
    "expected": "Enrich and mark likely expected; no access change.",
    "ethical_check": "Avoid unnecessary user disruption.",
    "metric": "Correct no-action recommendation with complete evidence."
  },
  {
    "case": "Unusual sign-in with missing logs",
    "input": "Unexpected time, source-health warning, incomplete identity context.",
    "expected": "Escalate for human review and state that evidence is incomplete.",
    "ethical_check": "Do not convert missing evidence into guilt.",
    "metric": "Safe fallback and clear limitation."
  },
  {
    "case": "Night-shift employee",
    "input": "Sign-in outside daytime baseline but matches approved work schedule.",
    "expected": "Use schedule context and avoid automatic lockout.",
    "ethical_check": "Prevent unfair impact from an incomplete baseline.",
    "metric": "Low false-positive rate for approved alternate schedules."
  },
  {
    "case": "Critical service identity",
    "input": "High alert, service dependency, no confirmed compromise.",
    "expected": "Recommend targeted review and require service-owner approval for change.",
    "ethical_check": "Protect continuity and proportionality.",
    "metric": "No unauthorized disruptive action."
  },
  {
    "case": "Broad mailbox request",
    "input": "Supervisor requests full mailbox data to improve the score.",
    "expected": "Reject input expansion and route to data owner.",
    "ethical_check": "Protect purpose limitation and privacy.",
    "metric": "Only approved fields are ingested."
  },
  {
    "case": "Noisy alert source",
    "input": "A misconfigured source generates hundreds of repeated alerts.",
    "expected": "Rate-limit, pause, notify owner, and avoid repeated actions.",
    "ethical_check": "Prevent scaled harm from bad inputs.",
    "metric": "Action cap and safe stop work."
  },
  {
    "case": "Conflicting evidence",
    "input": "One source says suspicious; owner confirmation and service records suggest expected behavior.",
    "expected": "Present both views and require human decision.",
    "ethical_check": "Avoid one-source certainty.",
    "metric": "Alternate explanation remains visible."
  },
  {
    "case": "Generated leadership summary",
    "input": "The AI drafts confirmed compromise after one alert.",
    "expected": "Block release, correct impact language, and require communication-owner approval.",
    "ethical_check": "Prevent unsupported blame and misinformation.",
    "metric": "No unapproved message leaves the system."
  }
];
const evidenceMatrix = [
  {
    "id": "AI-01",
    "source": "Fictional automation purpose statement",
    "observation": "The workflow is approved to enrich one identity-alert type and open review tickets.",
    "supports": "Enrichment and ticket creation are in scope.",
    "limits": "Does not authorize account disabling, mailbox access, user contact, or risk acceptance.",
    "ethics_use": "Keep output and authority within the approved role."
  },
  {
    "id": "AI-02",
    "source": "Fictional input allowlist",
    "observation": "Approved fields are account role, event time, source category, recent changes, and service dependency.",
    "supports": "A narrow input set is defined.",
    "limits": "Does not authorize private messages, full activity history, or employee records.",
    "ethics_use": "Reject broader data collection."
  },
  {
    "id": "AI-03",
    "source": "Fictional model output",
    "observation": "The system labels one alert malicious with 91% confidence.",
    "supports": "The model generated a high-confidence label.",
    "limits": "Does not prove compromise, malicious intent, or impact.",
    "ethics_use": "Require evidence review and preserve confidence as uncertainty, not proof."
  },
  {
    "id": "AI-04",
    "source": "Fictional fairness review",
    "observation": "Night-shift users receive three times more false positives than daytime users.",
    "supports": "Outcome quality differs across approved schedule groups.",
    "limits": "Does not prove intentional discrimination.",
    "ethics_use": "Pause high-impact use and improve schedule context and testing."
  },
  {
    "id": "AI-05",
    "source": "Fictional service map",
    "observation": "The affected identity supports a critical overnight process.",
    "supports": "Automated disabling could create service harm.",
    "limits": "Does not prove the identity should remain unchanged.",
    "ethics_use": "Require service-owner review and targeted reversible options."
  },
  {
    "id": "AI-06",
    "source": "Fictional audit record",
    "observation": "Five automated actions lack approver identity and explanation fields.",
    "supports": "Accountability and reconstruction are incomplete.",
    "limits": "Does not prove every action was incorrect.",
    "ethics_use": "Pause high-impact actions and repair audit controls."
  },
  {
    "id": "AI-07",
    "source": "Fictional rollback test",
    "observation": "Temporary session restrictions can be reversed within two minutes without service impact.",
    "supports": "The tested action is reversible in the supplied scenario.",
    "limits": "Does not prove every account or future version will behave the same.",
    "ethics_use": "Use bounded pilot scope and continued monitoring."
  },
  {
    "id": "AI-08",
    "source": "Fictional generated message review",
    "observation": "The draft tells a manager that an employee was compromised after one High alert.",
    "supports": "The generated communication exceeds the evidence.",
    "limits": "Does not prove the model is always unsafe.",
    "ethics_use": "Require human communication approval and safer templates."
  }
];
const commonMistakes = [
  "Treating a fictional confidence score as proof that the output is correct.",
  "Allowing a model or automation to own authorization, legal interpretation, public communication, or residual-risk acceptance.",
  "Using more personal or confidential data because it may improve performance.",
  "Automating broad account changes after one alert without service context or human approval.",
  "Ignoring uneven error rates across shifts, roles, locations, devices, or other relevant contexts.",
  "Keeping only the AI summary while original fictional evidence expires or becomes inaccessible.",
  "Using a single average accuracy number instead of reviewing harmful errors, overrides, service impact, and group outcomes.",
  "Assuming a human approval button guarantees meaningful review.",
  "Allowing scope, access, thresholds, data, actions, or audiences to change without governance.",
  "Failing to define safe fallback when inputs are missing, stale, conflicting, or unhealthy.",
  "Using generated user or leadership messages without fact, privacy, audience, and tone review.",
  "Deploying an automation that cannot be stopped, reversed, audited, or supported.",
  "Calling a workflow unbiased because protected traits are not directly collected.",
  "Using real logs, messages, identities, alerts, model outputs, or internal automation details in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest role for fictional AI in a high-impact security decision?",
    "choices": [
      "Provide evidence-linked decision support while an authorized human owns approval and risk.",
      "Accept residual risk automatically.",
      "Contact users without review.",
      "Disable every matching account."
    ],
    "answer": 0,
    "explanation": "High-impact professional judgment should remain with authorized human owners."
  },
  {
    "question": "A fictional model labels an alert malicious with 91% confidence. What does that prove?",
    "choices": [
      "The account is compromised.",
      "The user acted maliciously.",
      "The model produced a high-confidence label, but evidence and impact still require review.",
      "The action should execute automatically."
    ],
    "answer": 2,
    "explanation": "Confidence is an uncertainty estimate, not proof of compromise or intent."
  },
  {
    "question": "Night-shift users receive three times more false positives. What is strongest?",
    "choices": [
      "Ignore the difference because the overall accuracy is high.",
      "Pause high-impact use, investigate schedule context, improve testing, and monitor group outcomes.",
      "Remove night-shift users from monitoring.",
      "Collect full private messages for better accuracy."
    ],
    "answer": 1,
    "explanation": "Uneven harmful outcomes require review and mitigation."
  },
  {
    "question": "Why should a fictional automation preserve original evidence?",
    "choices": [
      "To let reviewers verify summaries, explanations, decisions, errors, and actions.",
      "Because summaries are never useful.",
      "To avoid all retention limits.",
      "To allow public sharing."
    ],
    "answer": 0,
    "explanation": "Original evidence supports auditability and correction."
  },
  {
    "question": "Which fictional action most clearly requires a human approval gate?",
    "choices": [
      "Adding an evidence tag.",
      "Opening a review ticket.",
      "Disabling a critical service account.",
      "Formatting a case summary."
    ],
    "answer": 2,
    "explanation": "Service-impacting access changes require authorized human review."
  },
  {
    "question": "What is the strongest response when a fictional automation cannot record who approved an action?",
    "choices": [
      "Continue because the action may still be correct.",
      "Pause high-impact execution and repair the audit and approval controls.",
      "Delete the incomplete records.",
      "Ask the model to guess the approver."
    ],
    "answer": 1,
    "explanation": "Missing accountability makes high-impact operation unsafe."
  },
  {
    "question": "What makes an AI-and-automation portfolio artifact safe to share?",
    "choices": [
      "Only usernames are changed.",
      "Real logs are summarized.",
      "Every organization, system, identity, data set, alert, model, rule, action, decision, date, and outcome is invented.",
      "Internal screenshots are cropped."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real systems, data, people, and organizational controls."
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

export default function EthicsInAiAndAutomationPage() {
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
              Lesson 8 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Ethical Automation
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.8 Ethics in AI and Automation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders use fictional AI and automation
            without giving away accountability. Design narrow, explainable,
            privacy-aware, service-aware, reversible, auditable workflows with
            human approval, safe failure, fairness testing, monitoring, and
            owner-controlled risk decisions.
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
          lessonTitle="Ethics in AI and Automation"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, alerts, models, rules, data, actions, dates, decisions, and outcomes.",
            "I understand that AI confidence, speed, complexity, or popularity does not prove correctness or fairness.",
            "I will keep authorization, legal interpretation, public communication, disruptive action, and residual-risk acceptance with the proper human owners.",
            "I will not use real logs, private messages, employee records, student records, customer data, credentials, model outputs, automation code, or confidential screenshots.",
            "I will pause automation for missing data, unhealthy sources, scope drift, unfair outcomes, service harm, missing audit records, or inability to rollback.",
            "I will create only safe, defensive, fictional workflows that cannot be used to harm real systems or people.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Fast Decisions Can Scale Mistakes Faster"
        >
          <p className="leading-8">
            A fictional identity workflow labels one account malicious with
            91% confidence and proposes automatic disabling. The account
            supports a critical overnight service, night-shift users experience
            much higher false-positive rates, and five previous actions lack an
            approver record. Ethical automation requires the team to pause
            high-impact execution, preserve original evidence, involve service
            and data owners, test fairness, restore approval and audit controls,
            and use targeted reversible actions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Automation-first shortcut
              </p>
              <p className="mt-2 leading-7">
                Trust the confidence score, disable the account, send an
                AI-written manager message, and review the result later.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional design
              </p>
              <p className="mt-2 leading-7">
                Preserve evidence, require human approval, check service
                dependencies, test fairness, use least privilege, enable
                rollback, audit every decision, and validate outcomes.
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
          title="Automation Changes the Scale and Speed of Consequences"
        >
          <p className="leading-8">
            A single human mistake may affect one fictional case. A badly
            governed automated rule may repeat the same mistake across many
            accounts, services, messages, or records in seconds. Ethical design
            therefore requires more than model accuracy. It requires clear
            ownership, minimum-necessary data, fairness, explanation, bounded
            authority, safe failure, rollback, audit, communication controls,
            and continuous review.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Scale",
                "A flawed fictional rule can repeat harm across many users and systems.",
              ],
              [
                "Opacity",
                "Complex outputs can hide weak data, missing context, and unsupported assumptions.",
              ],
              [
                "Accountability",
                "People still own authorization, actions, communication, correction, and risk.",
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
          title="Assist → Explain → Approve → Limit → Audit → Improve"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Assist", "Use fictional AI to organize, enrich, summarize, or recommend—not to replace professional ownership."],
              ["Explain", "Show evidence, assumptions, confidence, limitations, alternatives, and source health."],
              ["Approve", "Require the correct fictional human owner for high-impact action and communication."],
              ["Limit", "Use least privilege, narrow scope, rate limits, exclusions, exceptions, and stop conditions."],
              ["Audit", "Record inputs, versions, outputs, approvals, actions, errors, rollback, and validation."],
              ["Improve", "Measure harmful errors, fairness, service impact, overrides, drift, and residual risk over time."],
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
          title="Language for Ethical AI and Automation"
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
            Automation Levels
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Match Automation Authority to Impact and Evidence
          </h2>

          <div className="mt-6 grid gap-5">
            {automationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.level}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Appropriate for", item.appropriate_for],
                    ["Main risk", item.main_risk],
                    ["Required control", item.required_control],
                    ["Fictional example", item.example],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.level}-${label}`}
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
            Ethical Risk Register
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Risks That Accuracy Alone Cannot Solve
          </h2>

          <div className="mt-6 grid gap-5">
            {ethicalRisks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.risk}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence question
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.evidence_question}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong control
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_control}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Failure pattern
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.failure_pattern}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Human Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Who Remains Accountable When Automation Is Used
          </h2>

          <div className="mt-6 grid gap-5">
            {ownerRoles.map((item) => (
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
                    ["Decision", item.decision],
                    ["Cannot delegate to AI", item.cannot_delegate_to_ai],
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
            Ethical Automation Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Purpose to Lifecycle Governance
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
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
            Control Design
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Controls for Safe and Accountable Automation
          </h2>

          <div className="mt-6 grid gap-5">
            {controlMatrix.map((item) => (
              <article
                key={item.control}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.control}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak design
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong design
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
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
            Safe Testing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Representative Fictional Test Cases
          </h2>

          <div className="mt-6 grid gap-5">
            {testCases.map((item) => (
              <article
                key={item.case}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.case}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Input", item.input],
                    ["Expected behavior", item.expected],
                    ["Ethical check", item.ethical_check],
                    ["Success metric", item.metric],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.case}-${label}`}
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
          title="Fake Northbridge Ethical Automation Dashboard"
          subtitle="Fictional model, fairness, service, approval, and audit review for training only."
          metrics={[
            {
              label: "High-confidence alerts",
              value: "14",
              note: "Confidence remains an uncertainty estimate and does not prove compromise.",
            },
            {
              label: "Fairness gap",
              value: "3×",
              note: "Night-shift users have three times the false-positive rate of daytime users.",
            },
            {
              label: "Missing approvals",
              value: "5",
              note: "Five automated actions cannot be traced to an authorized human approver.",
            },
          ]}
        />

        <FakeAlertCard
          title="Automated High-Impact Action Fails Fairness, Service, and Accountability Controls"
          severity="High"
          time="1:48 PM"
          source="Fake Northbridge Automation Governance Console"
          details="A fictional workflow proposes disabling a critical service account after one model output. Night-shift false positives are elevated, original evidence is incomplete, and five prior actions lack approver records."
          recommendation="Pause high-impact execution, preserve original evidence, restore approval and audit controls, involve the service and data owners, test representative cases, correct fairness issues, use a targeted reversible pilot, and validate outcomes before resuming."
        />

        <FakeLogPanel
          title="Fake Ethical Automation Review Timeline"
          logs={[
            "12:00 PURPOSE workflow='enrich-and-ticket'",
            "12:01 SCOPE disable-account='not-approved'",
            "12:10 MODEL label='malicious' confidence='0.91'",
            "12:11 EVIDENCE compromise='unconfirmed'",
            "12:20 FAIRNESS night-shift-fp='3x'",
            "12:22 STATUS high-impact='paused'",
            "12:30 SERVICE identity='critical-overnight'",
            "12:31 OWNER service-review='required'",
            "12:40 AUDIT missing-approver='5-actions'",
            "12:41 AUDIT reconstruction='failed'",
            "12:50 DATA mailbox-request='rejected'",
            "13:00 CONTROL human-approval='restored'",
            "13:10 CONTROL rate-limit='enabled'",
            "13:20 ROLLBACK temporary-session='validated'",
            "13:35 MESSAGE compromise-claim='blocked'",
            "13:48 PILOT scope='targeted-review-only'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence for an Ethical Automation Decision
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
                    ["Ethics use", item.ethics_use],
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
          title="Should the Fictional Workflow Disable the Account Automatically?"
          evidence={[
            "The approved purpose is enrichment and ticket creation only.",
            "The model produced a 91% confidence malicious label.",
            "Compromise and impact are unconfirmed.",
            "Night-shift users have three times more false positives.",
            "The account supports a critical overnight service.",
            "Five prior automated actions lack approver records.",
            "A temporary session restriction has a validated rollback path.",
          ]}
          options={[
            "Do not automate disabling. Restore approval and audit controls, correct fairness issues, involve the service owner, preserve evidence, and use a targeted reversible pilot.",
            "Disable the account because the confidence score exceeds 90%.",
            "Disable every night-shift account to reduce uncertainty.",
            "Send an AI-written compromise message before acting.",
          ]}
          bestAnswer={0}
          explanation="The proposed action exceeds scope and fails fairness, service, evidence, approval, and accountability requirements."
        />

        <SectionCard
          eyebrow="Common Ethical Automation Mistakes"
          title="What Advanced Defenders Must Avoid"
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
          title="Build a Fictional Ethical Automation Review"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Redesign the Northbridge Identity Workflow
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly edit, or summarize real AI systems, model
                outputs, logs, users, private messages, employee records,
                internal automation rules, screenshots, or confidential
                technical documentation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Approved purpose, scope, and human-ownership statement.</li>
                <li>Input, owner, quality, privacy, and retention matrix.</li>
                <li>Output-to-authority map.</li>
                <li>Ethical, fairness, service, evidence, and accountability risk register.</li>
                <li>Least-privilege, approval, explanation, rate-limit, exception, and stop controls.</li>
                <li>Representative fictional test matrix.</li>
                <li>Fail-safe, rollback, manual fallback, and kill-switch plan.</li>
                <li>Pilot, monitoring, audit, and drift plan.</li>
                <li>Outcome validation and residual-risk record.</li>
                <li>Reflection, revision history, governance, retirement, and fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The finished artifact must remain a fictional defensive design. It
            must not contain real model prompts, internal rules, private data,
            credentials, automation code, organization-specific controls, or
            instructions for affecting real systems.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Model Is Confident but the Evidence Is Incomplete"
          scenario="A fictional model labels an identity alert malicious with 91% confidence. One source is unhealthy, compromise is unconfirmed, and the account supports a critical service."
          choices={[
            {
              label: "Choice A",
              response: "Treat confidence as uncertain, preserve source-health limits, require human review, involve the service owner, and use a targeted reversible option.",
              outcome: "Best professional choice. The response keeps evidence, service, authority, and accountability visible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the account because confidence is above 90%.",
              outcome: "Risky. Confidence does not prove correctness or justify service-impacting action.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore every model output.",
              outcome: "Unsafe. The output may still provide useful decision support when reviewed properly.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Night-Shift Users Are Affected More Often"
          scenario="A fictional fairness review shows that night-shift users receive three times more false positives, but the overall accuracy metric remains high."
          choices={[
            {
              label: "Choice A",
              response: "Pause high-impact use, investigate the schedule baseline, add representative tests, correct the design, and monitor group outcomes.",
              outcome: "Best professional choice. Overall accuracy does not erase concentrated harm.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Continue because average accuracy is strong.",
              outcome: "Risky. Averages can hide unfair or harmful errors.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Collect full private messages to improve the model.",
              outcome: "Unsafe. More invasive data is not automatically justified.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Ethical AI and Automation Checklist"
          items={[
            "I can state the fictional purpose, scope, owners, value, users, systems, data, outputs, actions, audiences, and human decisions.",
            "I can distinguish fictional enrichment, summary, recommendation, approval, execution, communication, validation, and risk acceptance.",
            "I can identify fictional automation bias, data-quality, fairness, privacy, explainability, scope, service, evidence, communication, and accountability risks.",
            "I can apply fictional minimum-necessary fields, data-owner approval, source-health checks, freshness, retention, deletion, and access controls.",
            "I can require fictional human approval for high-impact identity, access, service, communication, privacy, legal, and risk decisions.",
            "I can design fictional least privilege, rate limits, exclusions, exceptions, reason codes, confidence limits, stop conditions, and safe fallback.",
            "I can test fictional normal, unusual, missing-data, conflicting, edge, group-specific, noisy-source, and high-impact cases.",
            "I can measure fictional accuracy, harmful errors, overrides, service impact, fairness, audit completeness, rollback, and residual risk.",
            "I can preserve fictional original evidence, model version, output, explanation, approver, action, error, rollback, and validation.",
            "I can pause fictional automation for drift, unfair outcomes, scope expansion, service harm, unhealthy sources, missing audits, or failed rollback.",
            "I can keep fictional authorization, disruptive action, legal interpretation, public communication, and residual-risk acceptance with authorized human owners.",
            "I will never use real AI systems, private data, logs, prompts, model outputs, identities, automation rules, screenshots, credentials, or confidential documentation in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A1.8 Mini Quiz: Ethics in AI and Automation"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Ethical AI and Automation Review Package for the Northbridge identity workflow. Include the purpose, scope, owners, value, human-decision boundary, data inventory, field allowlist, quality checks, output-to-authority map, ethical-risk register, fairness review, service-impact review, guardrails, approval gates, explainability design, representative tests, fail-safe, rollback, manual fallback, kill switch, pilot, monitoring, audit, drift review, communication controls, outcome validation, residual risk, reflection, revision history, lifecycle governance, and complete fictionalization statement."
          tips={[
            "Treat fictional AI confidence as uncertainty, not proof.",
            "Show which decisions the fictional tool may support and which must remain human-owned.",
            "Include at least one fairness, audit, or service failure, revise the design, and explain why the correction matters.",
            "Measure harmful outcomes and reviewability, not only speed and average accuracy.",
            "Keep every organization, system, identity, data set, alert, model, rule, action, decision, date, and outcome completely invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "AI and automation can support professional judgment but do not replace human accountability.",
            "Confidence scores, model labels, and generated summaries are not proof of compromise, intent, impact, or correctness.",
            "High-impact identity, service, privacy, communication, legal, and risk decisions require authorized human ownership.",
            "Ethical automation needs narrow scope, least privilege, minimum-necessary data, explanation, approval gates, rate limits, exceptions, and stop conditions.",
            "Average accuracy can hide harmful or unfair outcomes for specific groups or contexts.",
            "Original evidence, model versions, explanations, approvals, actions, errors, rollback, and validation must remain auditable.",
            "Safe failure, manual fallback, kill switches, rollback, and owner support are required before high-impact use.",
            "A human approval button is meaningful only when the reviewer sees evidence, understands limits, and can reject or modify the recommendation.",
            "Automation should be monitored for drift, scope expansion, privacy overreach, service harm, fairness gaps, and accountability failures.",
            "Every CyberShield AI-and-automation artifact must remain fully fictional, defensive, privacy-safe, explainable, reversible, auditable, and incapable of affecting real systems.",
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