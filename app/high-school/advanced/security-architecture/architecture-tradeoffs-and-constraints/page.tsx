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
const modulePath = `${trackPath}/security-architecture`;
const previousLesson = `${modulePath}/secure-defaults-and-hardening-strategy`;
const nextLesson = `${modulePath}/security-architecture-design-lab`;

const objectives = [
  "Explain architecture tradeoffs as explicit fictional choices among security, privacy, availability, usability, accessibility, performance, cost, complexity, evidence, recovery, and delivery needs.",
  "Identify fictional constraints involving mission, people, time, budget, technology, suppliers, data, policy, accessibility, operations, and recovery without treating them as excuses for unmanaged risk.",
  "Compare fictional architecture options using consistent criteria, assumptions, dependencies, confidence, evidence, affected stakeholders, residual risk, and reversibility.",
  "Design fictional decisions that preserve critical mission outcomes, minimum security requirements, privacy, accessibility, operational support, safe failure, and recovery.",
  "Create a portfolio-ready fictional tradeoff and constraint package using only invented organizations, systems, identities, evidence, decisions, dates, costs, and outcomes."
];
const vocabulary = [
  [
    "Architecture tradeoff",
    "A fictional decision in which improving one quality, outcome, or constraint changes another, requiring explicit comparison and ownership."
  ],
  [
    "Constraint",
    "A fictional limit involving mission, policy, law conceptually, people, time, budget, technology, supplier, data, accessibility, operations, or recovery."
  ],
  [
    "Decision criterion",
    "A fictional factor used consistently to compare architecture options, such as security, privacy, availability, usability, evidence, cost, or reversibility."
  ],
  [
    "Non-negotiable requirement",
    "A fictional minimum outcome or boundary that an option must satisfy before it can be considered acceptable."
  ],
  [
    "Assumption",
    "A fictional condition believed to be true for planning purposes and requiring evidence, owner, review, and a response if it changes."
  ],
  [
    "Dependency",
    "A fictional identity, service, platform, supplier, owner, data source, evidence source, network path, or process required by an option."
  ],
  [
    "Option",
    "A fictional architecture choice with defined scope, benefits, limits, dependencies, risks, costs, evidence, and recovery behavior."
  ],
  [
    "Residual risk",
    "The fictional exposure remaining after an option and its controls are selected."
  ],
  [
    "Risk acceptance",
    "A fictional authorized decision to proceed with understood residual risk for a documented reason and period."
  ],
  [
    "Reversibility",
    "The fictional ability to undo, pause, replace, or roll back an architecture decision safely."
  ],
  [
    "Lock-in",
    "A fictional condition where switching away from a supplier, platform, identity model, data format, or architecture becomes difficult or costly."
  ],
  [
    "Opportunity cost",
    "The fictional value or improvement not pursued because time, money, people, or attention were used elsewhere."
  ],
  [
    "Decision latency",
    "The fictional delay between identifying a decision need and obtaining an authorized evidence-based choice."
  ],
  [
    "Decision record",
    "A fictional artifact documenting context, options, criteria, evidence, assumptions, decision, owner, consequences, review, and revision."
  ],
  [
    "Confidence level",
    "A fictional judgment about how strongly current evidence supports an estimate, assumption, option, or conclusion."
  ],
  [
    "Sensitivity analysis",
    "A fictional review of how an architecture decision changes when assumptions, costs, demand, failure rates, or constraints change."
  ],
  [
    "Scenario analysis",
    "A fictional comparison of options under normal, degraded, failed, recovered, supplier-outage, growth, or policy-change conditions."
  ],
  [
    "Cost of complexity",
    "The fictional operational, evidence, training, support, change, failure, and recovery burden added by a design."
  ],
  [
    "Technical debt",
    "Fictional future cost and risk created when a temporary or limited design requires later correction, migration, or replacement."
  ],
  [
    "Architecture debt",
    "Fictional accumulated weakness caused by outdated assumptions, unmanaged exceptions, supplier lock-in, hidden dependencies, or deferred redesign."
  ],
  [
    "Equity and accessibility impact",
    "The fictional effect an option has on users with different access needs, devices, languages, abilities, connectivity, or support requirements."
  ],
  [
    "Decision gate",
    "A fictional point where evidence, owner approval, criteria, constraints, and stop conditions are reviewed before proceeding."
  ],
  [
    "Pilot",
    "A fictional limited and reversible trial used to reduce uncertainty before broader adoption."
  ],
  [
    "Sunset criterion",
    "A fictional condition that determines when a temporary architecture, exception, supplier, service, or control must end or be replaced."
  ]
];
const decisionCriteria = [
  {
    "criterion": "Mission fit",
    "question": "How well does the fictional option support the critical user and organizational outcome?",
    "measure": "Critical workflows, service priority, affected users, and mission-owner acceptance.",
    "failure": "A technically strong option does not support the real mission need.",
    "evidence": "Mission map, user journey, owner review, service-impact analysis, and acceptance."
  },
  {
    "criterion": "Security and trust",
    "question": "How does the fictional option affect identity, authorization, segmentation, data protection, hardening, detection, and recovery?",
    "measure": "Control coverage, blast radius, privilege, trust boundaries, failure domains, and residual risk.",
    "failure": "Security claims rely on more tools without reducing shared failure or exposure.",
    "evidence": "Control map, threat assumptions, effective-state validation, exceptions, and owner decision."
  },
  {
    "criterion": "Privacy and data governance",
    "question": "How much fictional data is collected, shared, retained, exported, logged, and exposed?",
    "measure": "Minimum necessary fields, purpose, access, retention, deletion, supplier use, and privacy review.",
    "failure": "An option improves visibility or convenience by collecting unnecessary personal content.",
    "evidence": "Data inventory, flow map, field scope, access review, retention, deletion, and privacy signoff."
  },
  {
    "criterion": "Availability and resilience",
    "question": "How does the fictional option continue, degrade, fail, recover, and close temporary access?",
    "measure": "Critical-function continuity, failure domains, recovery sequence, restore validation, and owner acceptance.",
    "failure": "A restrictive design creates total outage or a resilient design creates uncontrolled fallback.",
    "evidence": "Dependency map, degraded-mode test, recovery exercise, closure evidence, and residual risk."
  },
  {
    "criterion": "Usability and accessibility",
    "question": "Can fictional users, operators, students, teachers, families, and partners use the option successfully and fairly?",
    "measure": "Task completion, support burden, accessibility, language clarity, device and connectivity needs, and user feedback.",
    "failure": "A secure design creates barriers that encourage bypass or exclude intended users.",
    "evidence": "User journeys, accessibility review, support data, pilot feedback, and corrective action."
  },
  {
    "criterion": "Performance and scalability",
    "question": "Can the fictional option meet response, capacity, growth, and peak-demand needs without unsafe shortcuts?",
    "measure": "Service targets, demand assumptions, bottlenecks, failure behavior, growth scenarios, and monitoring.",
    "failure": "Performance goals lead to broad trust, disabled evidence, overcollection, or unreviewed privilege.",
    "evidence": "Capacity model, service metrics, stress scenario, dependency health, and owner decision."
  },
  {
    "criterion": "Operational supportability",
    "question": "Can fictional teams understand, operate, monitor, change, troubleshoot, and recover the option?",
    "measure": "Owner coverage, training, documentation, complexity, alert quality, change safety, and alternate operators.",
    "failure": "Only one person understands the architecture or recovery process.",
    "evidence": "Runbooks, owner matrix, training records, exercise results, change and rollback validation."
  },
  {
    "criterion": "Cost and sustainability",
    "question": "Can the fictional option be funded, staffed, maintained, supported, and replaced over its expected lifecycle?",
    "measure": "Implementation, operations, training, supplier, evidence, recovery, migration, and opportunity costs.",
    "failure": "The cheapest purchase creates expensive operational, privacy, lock-in, or recovery risk.",
    "evidence": "Lifecycle cost model, staffing plan, supplier terms, migration estimate, and budget-owner decision."
  },
  {
    "criterion": "Evidence and accountability",
    "question": "Can the fictional option produce trustworthy evidence for decisions, changes, incidents, recovery, privacy, and audit?",
    "measure": "Coverage, source health, time quality, integrity, access, retention, administrative evidence, and case linkage.",
    "failure": "The option appears efficient but important actions and changes cannot be reconstructed.",
    "evidence": "Evidence-question map, source catalog, coverage, blind spots, and validation."
  },
  {
    "criterion": "Reversibility and future flexibility",
    "question": "Can the fictional option be piloted, paused, rolled back, migrated, replaced, or retired safely?",
    "measure": "Exit plan, data portability, alternate supplier, rollback, sunset criteria, architecture modularity, and recovery.",
    "failure": "Short-term convenience creates permanent supplier or platform lock-in.",
    "evidence": "Pilot plan, rollback, migration path, contract exit, sunset criteria, and owner approval."
  }
];
const constraintCatalog = [
  {
    "constraint": "Limited budget",
    "meaning": "The fictional organization cannot fund every preferred control, platform, staff role, or migration at once.",
    "risk": "Important security, evidence, privacy, or recovery work may be postponed without clear prioritization.",
    "defensible_response": "Protect non-negotiable outcomes, prioritize highest mission risk, use staged delivery, compensating controls, pilot scope, and explicit residual-risk ownership.",
    "evidence": "Lifecycle cost, priority model, deferred items, owner, deadline, compensating controls, and review."
  },
  {
    "constraint": "Limited staff and expertise",
    "meaning": "The fictional organization has too few trained owners, operators, reviewers, or recovery personnel.",
    "risk": "Complex architecture becomes unmanageable and privilege or knowledge concentrates in one person.",
    "defensible_response": "Simplify patterns, standardize, train alternates, separate critical duties, reduce tool count, document decisions, and validate independent operation.",
    "evidence": "Owner matrix, skills map, training, alternate coverage, exercise results, and support plan."
  },
  {
    "constraint": "Fixed delivery date",
    "meaning": "The fictional service must launch by an approved deadline.",
    "risk": "Security, privacy, evidence, accessibility, testing, or recovery may be deferred invisibly.",
    "defensible_response": "Define minimum release gates, reduce scope, stage lower-priority features, document debt, set sunset criteria, and require post-launch validation.",
    "evidence": "Release gates, deferred scope, risk decision, corrective owners, dates, and closure criteria."
  },
  {
    "constraint": "Legacy dependency",
    "meaning": "A fictional critical service depends on an older interface, data format, identity path, or platform.",
    "risk": "Broad exceptions, unsupported settings, weak evidence, and difficult recovery may persist.",
    "defensible_response": "Isolate the dependency, narrow identity and paths, add monitoring, maintain rollback, define migration milestones, and expire the exception.",
    "evidence": "Dependency map, exception, compensating controls, migration plan, owner, and review."
  },
  {
    "constraint": "Supplier dependence",
    "meaning": "A fictional external provider controls an important service, identity, storage, monitoring, or communication function.",
    "risk": "The organization may lack direct evidence, fallback, portability, or timely recovery.",
    "defensible_response": "Limit scope, define evidence and service requirements, build fallback, test exit, protect data portability, and assign residual-risk ownership.",
    "evidence": "Supplier map, contract requirements, fallback, exit test, data scope, health, and owner decision."
  },
  {
    "constraint": "Accessibility and user diversity",
    "meaning": "Fictional users have different devices, abilities, languages, connectivity, and support needs.",
    "risk": "A control may exclude users, increase errors, or encourage unsafe workarounds.",
    "defensible_response": "Include accessibility as a non-negotiable criterion, test diverse user journeys, provide safe alternatives, and monitor support impact.",
    "evidence": "Accessibility review, user feedback, task completion, alternative flow, support data, and corrective actions."
  },
  {
    "constraint": "Privacy limitation",
    "meaning": "The fictional architecture must minimize collection, sharing, retention, or monitoring of personal information.",
    "risk": "Security or operational visibility may be designed through unnecessary surveillance or overcollection.",
    "defensible_response": "Start with evidence questions, use minimum fields, limit access and retention, aggregate where appropriate, and document blind spots and residual risk.",
    "evidence": "Data inventory, purpose, field scope, access, retention, deletion, coverage, and privacy approval."
  },
  {
    "constraint": "High availability requirement",
    "meaning": "The fictional mission cannot tolerate extended interruption.",
    "risk": "Teams may allow broad fail-open access, reduce validation, or weaken change control.",
    "defensible_response": "Use safe degraded modes, redundancy, narrow fallback, independent evidence, recovery gates, and mission-owner acceptance.",
    "evidence": "Continuity design, degraded-mode validation, failure exercise, temporary access, and closure."
  },
  {
    "constraint": "Evidence and retention limits",
    "meaning": "The fictional organization has storage, privacy, policy, or operational limits on evidence collection and retention.",
    "risk": "Important decisions, access reviews, incidents, or recovery actions may become unverifiable.",
    "defensible_response": "Prioritize approved questions, minimum fields, critical sources, source health, tiered retention, and owner-approved blind spots.",
    "evidence": "Question map, source catalog, retention model, coverage gaps, access, and risk acceptance."
  },
  {
    "constraint": "Complex organizational ownership",
    "meaning": "Several fictional teams or partners own parts of identity, systems, data, suppliers, evidence, and recovery.",
    "risk": "Decisions stall, responsibilities overlap, gaps remain unowned, and changes conflict.",
    "defensible_response": "Define decision rights, escalation, interfaces, evidence handoffs, alternate owners, and shared validation gates.",
    "evidence": "Responsibility matrix, decision records, escalation, handoff evidence, and signoff."
  }
];
const optionComparison = [
  {
    "option": "Option A: Centralized security platform",
    "benefits": "Fictional teams gain consistent policy, shared dashboards, simplified support, and one primary integration model.",
    "limits": "Creates platform concentration, supplier lock-in, shared failure, migration cost, and powerful administrative roles.",
    "best_when": "The fictional organization has strong governance, independent evidence, tested recovery, portability, and sufficient skilled operators.",
    "controls": "Separate administration, alternate evidence, export and exit planning, narrow roles, source health, staged adoption, and recovery exercise.",
    "residual_risk": "One platform or supplier failure may still affect several controls together."
  },
  {
    "option": "Option B: Distributed specialized tools",
    "benefits": "Fictional controls may have diverse failure paths, specialized capability, and reduced single-platform dependence.",
    "limits": "Adds integration, schema, ownership, training, evidence, cost, and recovery complexity.",
    "best_when": "The fictional organization can support multiple owners, consistent standards, correlation, and lifecycle governance.",
    "controls": "Common evidence schema, owner matrix, integration health, standardized access, documentation, and cross-tool recovery testing.",
    "residual_risk": "Operational complexity may create blind spots, inconsistent policy, or slow response."
  },
  {
    "option": "Option C: Staged hybrid architecture",
    "benefits": "Fictional teams can preserve critical diversity while simplifying selected functions and learning through controlled migration.",
    "limits": "Temporary duplication, transition complexity, data movement, and unclear end-state ownership may occur.",
    "best_when": "The fictional organization needs reversibility, pilots, migration evidence, and gradual risk reduction.",
    "controls": "Defined target state, transition owners, pilot gates, duplicate-control review, sunset criteria, migration evidence, and rollback.",
    "residual_risk": "Temporary architecture may become permanent if milestones and sunset decisions are weak."
  },
  {
    "option": "Option D: Maintain current architecture temporarily",
    "benefits": "Avoids immediate fictional disruption, migration cost, retraining, and supplier change.",
    "limits": "Preserves known debt, broad privilege, hidden dependencies, unsupported settings, and recovery weakness.",
    "best_when": "Only when temporary continuation is narrow, time-limited, monitored, owned, and paired with an approved remediation plan.",
    "controls": "Exception, compensating controls, enhanced evidence, owner, deadline, migration milestones, and residual-risk approval.",
    "residual_risk": "Current weaknesses remain until the transition is completed."
  }
];
const tradeoffCases = [
  {
    "tradeoff": "Security versus usability",
    "tension": "A fictional control reduces account misuse but creates difficult steps for users with limited devices or accessibility needs.",
    "poor_choice": "Remove the control entirely or force one inaccessible method on every user.",
    "balanced_design": "Use risk-based actions, accessible alternatives, recovery support, clear communication, minimum friction for low-risk tasks, and stronger checks for high-impact actions.",
    "evidence": "Task completion, accessibility review, support volume, denied risky actions, recovery outcomes, and user feedback."
  },
  {
    "tradeoff": "Visibility versus privacy",
    "tension": "Fictional teams want detailed logs, but full content and long retention are not necessary for approved questions.",
    "poor_choice": "Collect everything forever or eliminate evidence completely.",
    "balanced_design": "Use question-driven fields, minimization, restricted access, tiered retention, source health, and explicit blind-spot decisions.",
    "evidence": "Evidence-question map, field inventory, coverage, access review, retention, deletion, and privacy approval."
  },
  {
    "tradeoff": "Availability versus strict failure",
    "tension": "A fictional identity or network control can fail closed and block critical service, or fail open and permit broad access.",
    "poor_choice": "Use one universal failure behavior.",
    "balanced_design": "Create limited safe degraded service, block high-risk actions, use alternate approval and evidence, set time limits, and validate recovery closure.",
    "evidence": "Degraded-mode exercise, allowed and denied actions, owner approval, source health, expiry, and closure."
  },
  {
    "tradeoff": "Cost versus resilience",
    "tension": "A fictional lower-cost design uses one platform and supplier for identity, logging, approval, and recovery.",
    "poor_choice": "Choose lowest purchase price without lifecycle or failure analysis.",
    "balanced_design": "Protect critical functions with independent recovery, alternate evidence, portability, fallback, and staged investment.",
    "evidence": "Lifecycle cost, failure-domain map, recovery exercise, exit plan, and owner risk decision."
  },
  {
    "tradeoff": "Speed versus assurance",
    "tension": "A fictional team wants rapid deployment, but testing, accessibility, logging, and recovery are incomplete.",
    "poor_choice": "Launch all scope and promise to fix controls later.",
    "balanced_design": "Reduce release scope, define minimum gates, pilot safely, monitor, preserve rollback, and assign time-bound corrective actions.",
    "evidence": "Release gates, pilot results, deferred scope, rollback test, owners, deadlines, and closure."
  },
  {
    "tradeoff": "Standardization versus flexibility",
    "tension": "A fictional common baseline simplifies operations but may not fit every service, data type, or user need.",
    "poor_choice": "Allow unlimited customization or require one inflexible pattern.",
    "balanced_design": "Use a common minimum baseline with documented profiles, narrow exceptions, evidence, review, and sunset criteria.",
    "evidence": "Baseline profiles, exception register, service validation, drift review, and owner approval."
  },
  {
    "tradeoff": "Automation versus human judgment",
    "tension": "Fictional automation can respond quickly, but incomplete context may scale a wrong action.",
    "poor_choice": "Automate every high-impact action or remove all automation.",
    "balanced_design": "Automate enrichment and low-risk reversible steps, require approval for high-impact actions, use rate limits, audit, and rollback.",
    "evidence": "Rule version, trigger quality, approval, action scope, false positives, rollback, and outcome."
  },
  {
    "tradeoff": "Supplier convenience versus control",
    "tension": "A fictional supplier reduces staffing burden but controls important data, evidence, identity, or recovery capability.",
    "poor_choice": "Treat supplier approval as unlimited trust or reject all suppliers.",
    "balanced_design": "Limit identity, data, paths, administration, and duration; require evidence, fallback, portability, and exit validation.",
    "evidence": "Supplier register, approved scope, data flow, health, evidence, fallback, exit test, and residual risk."
  }
];
const decisionProcess = [
  {
    "step": "1",
    "title": "Define the fictional decision",
    "questions": "What exact architecture choice must be made, by whom, for which mission outcome, and by when?",
    "output": "Decision statement, owner, scope, deadline, and affected stakeholders.",
    "stop": "Do not compare options until the decision itself is specific."
  },
  {
    "step": "2",
    "title": "Identify non-negotiable requirements",
    "questions": "Which fictional security, privacy, accessibility, mission, evidence, recovery, and governance outcomes must every option satisfy?",
    "output": "Decision gate and minimum requirement list.",
    "stop": "Reject any option that fails a non-negotiable requirement without authorized exception."
  },
  {
    "step": "3",
    "title": "Document constraints and assumptions",
    "questions": "Which fictional budget, people, time, supplier, legacy, policy, data, accessibility, and operational limits apply?",
    "output": "Constraint, assumption, owner, evidence, and review register.",
    "stop": "Do not treat an untested assumption as a fact."
  },
  {
    "step": "4",
    "title": "Create credible options",
    "questions": "Which fictional choices are meaningfully different in mechanism, cost, complexity, failure, evidence, recovery, and reversibility?",
    "output": "Option set with scope, benefits, limits, dependencies, and residual risk.",
    "stop": "Do not compare one preferred option against unrealistic alternatives."
  },
  {
    "step": "5",
    "title": "Choose consistent criteria",
    "questions": "How will fictional mission, security, privacy, availability, accessibility, operations, evidence, cost, and flexibility be compared?",
    "output": "Weighted or prioritized decision-criteria matrix.",
    "stop": "Do not change criteria simply to favor one option."
  },
  {
    "step": "6",
    "title": "Evaluate scenarios and sensitivity",
    "questions": "How does each fictional option behave under growth, failure, recovery, supplier outage, staff loss, policy change, and changed assumptions?",
    "output": "Scenario and sensitivity analysis.",
    "stop": "Pause if one assumption changing makes the option unacceptable."
  },
  {
    "step": "7",
    "title": "Assess evidence and confidence",
    "questions": "Which fictional claims are proven, estimated, assumed, or unknown, and how strong is the supporting evidence?",
    "output": "Evidence-confidence and uncertainty matrix.",
    "stop": "Do not present uncertain estimates as precise facts."
  },
  {
    "step": "8",
    "title": "Select, pilot, or defer",
    "questions": "Should the fictional organization choose an option, run a limited pilot, preserve a temporary state, or gather more evidence?",
    "output": "Authorized decision with conditions, pilot, rollback, or deferral plan.",
    "stop": "Do not proceed when non-negotiable evidence or ownership is missing."
  },
  {
    "step": "9",
    "title": "Record consequences and residual risk",
    "questions": "Which fictional benefits, costs, debt, exceptions, dependencies, users, privacy effects, and recovery risks remain?",
    "output": "Decision record, residual-risk owner, corrective actions, and sunset criteria.",
    "stop": "Do not hide the disadvantages of the chosen option."
  },
  {
    "step": "10",
    "title": "Review the decision over time",
    "questions": "Which fictional evidence, changes, failures, costs, user outcomes, supplier events, and assumptions should trigger reconsideration?",
    "output": "Decision-review cadence, triggers, metrics, and revision history.",
    "stop": "Do not treat architecture decisions as permanent when conditions change."
  }
];
const owners = [
  {
    "role": "Decision sponsor",
    "owns": "Fictional decision scope, urgency, stakeholder alignment, resources, and final executive sponsorship.",
    "decision": "Whether the decision should proceed and which owner has authority.",
    "evidence": "Decision statement, scope, deadline, stakeholder input, and sponsorship record."
  },
  {
    "role": "Mission owner",
    "owns": "Fictional critical user and organizational outcomes, service priorities, acceptable disruption, and business risk.",
    "decision": "Whether an option supports the mission sufficiently.",
    "evidence": "Mission map, user journeys, service impact, acceptance, and residual-risk decision."
  },
  {
    "role": "Security architect",
    "owns": "Fictional options, criteria, trust boundaries, controls, failure domains, evidence, recovery, and architecture consequences.",
    "decision": "Whether each option satisfies minimum security and architecture requirements.",
    "evidence": "Option analysis, control map, dependencies, scenarios, confidence, and decision record."
  },
  {
    "role": "Privacy and data owner",
    "owns": "Fictional data purpose, collection, sharing, logging, access, retention, deletion, supplier use, and privacy effects.",
    "decision": "Whether an option uses data proportionately and lawfully conceptually within the fictional exercise.",
    "evidence": "Data inventory, flow map, field scope, retention, deletion, privacy review, and exceptions."
  },
  {
    "role": "Accessibility and user-experience owner",
    "owns": "Fictional usability, accessibility, language clarity, device needs, connectivity, support, and user feedback.",
    "decision": "Whether intended users can use the option safely and fairly.",
    "evidence": "User journeys, accessibility review, task completion, feedback, support impact, and corrections."
  },
  {
    "role": "Operations and service owner",
    "owns": "Fictional supportability, performance, staffing, complexity, monitoring, change, failure, and service recovery.",
    "decision": "Whether the option can be operated and recovered reliably.",
    "evidence": "Runbooks, staffing, health, exercises, support data, change and rollback results."
  },
  {
    "role": "Finance and resource owner",
    "owns": "Fictional lifecycle cost, budget, staffing, training, supplier, migration, recovery, and opportunity cost.",
    "decision": "Whether the option is financially sustainable and what must be prioritized or deferred.",
    "evidence": "Lifecycle cost, staffing model, budget assumptions, sensitivity analysis, and funding decision."
  },
  {
    "role": "Supplier and procurement owner",
    "owns": "Fictional supplier requirements, access, data, evidence, service levels, portability, fallback, change, and exit.",
    "decision": "Whether supplier dependence and contract conditions are acceptable.",
    "evidence": "Supplier comparison, scope, service evidence, fallback, exit test, and owner review."
  },
  {
    "role": "Recovery and evidence owner",
    "owns": "Fictional degraded mode, rollback, recovery sequence, evidence coverage, source health, reconciliation, and closure.",
    "decision": "Whether the option can fail, recover, and prove outcomes safely.",
    "evidence": "Failure scenario, recovery exercise, evidence map, rollback, closure, and signoff."
  },
  {
    "role": "Governance and risk owner",
    "owns": "Fictional decision process, assumptions, exceptions, residual risk, debt, corrective actions, review triggers, and final acceptance.",
    "decision": "Whether remaining tradeoffs and risks are accepted, reduced, transferred, avoided, or monitored.",
    "evidence": "Decision record, risk register, assumptions, exceptions, deadlines, review triggers, and signoff."
  }
];
const evidenceMatrix = [
  {
    "id": "TRD-01",
    "source": "Fictional decision brief",
    "observation": "The organization must improve identity, logging, and recovery within a fixed budget and six-month timeline.",
    "supports": "Budget and delivery constraints are real parts of the decision.",
    "limits": "Does not determine which option is best.",
    "use": "Define non-negotiable outcomes, staged scope, options, and lifecycle cost."
  },
  {
    "id": "TRD-02",
    "source": "Fictional lifecycle-cost model",
    "observation": "The lowest purchase-price option has the highest training, integration, migration, and recovery cost.",
    "supports": "Purchase cost alone is an incomplete comparison.",
    "limits": "Cost estimates contain uncertainty and may change.",
    "use": "Compare total lifecycle cost and run sensitivity analysis."
  },
  {
    "id": "TRD-03",
    "source": "Fictional failure-domain review",
    "observation": "The centralized option places identity, logging, approval, and recovery on one supplier platform.",
    "supports": "The option creates correlated failure and lock-in concerns.",
    "limits": "Does not prove the platform will fail or must be rejected.",
    "use": "Require independent recovery, alternate evidence, portability, fallback, and owner acceptance."
  },
  {
    "id": "TRD-04",
    "source": "Fictional operations assessment",
    "observation": "The distributed option requires four specialized owners, but only two are currently available.",
    "supports": "Operational complexity and staffing are significant constraints.",
    "limits": "Does not prove staffing cannot change or the option is impossible.",
    "use": "Model staged adoption, simplification, training, alternate support, or hybrid design."
  },
  {
    "id": "TRD-05",
    "source": "Fictional accessibility pilot",
    "observation": "One proposed identity flow blocks several users who rely on an alternate accessible method.",
    "supports": "The option fails an important accessibility outcome in its current form.",
    "limits": "Does not prove the entire identity strategy must be abandoned.",
    "use": "Add accessible alternatives, revise the flow, retest, and treat accessibility as a release gate."
  },
  {
    "id": "TRD-06",
    "source": "Fictional privacy review",
    "observation": "The highest-visibility option collects full user-message content even though minimum metadata answers the approved security questions.",
    "supports": "The option creates unnecessary privacy exposure.",
    "limits": "Does not prove visibility must be reduced entirely.",
    "use": "Redesign fields, access, retention, and coverage using data minimization."
  },
  {
    "id": "TRD-07",
    "source": "Fictional recovery exercise",
    "observation": "The hybrid option preserves limited service and alternate evidence during one platform outage, but temporary transition rules are not closing reliably.",
    "supports": "The option has resilience benefits and governance weaknesses.",
    "limits": "Does not prove the final design is unacceptable.",
    "use": "Strengthen sunset criteria, temporary-access closure, transition ownership, and effective-state validation."
  },
  {
    "id": "TRD-08",
    "source": "Fictional decision history",
    "observation": "A previous temporary architecture remained for three years because no review trigger or sunset owner existed.",
    "supports": "Temporary choices can become permanent architecture debt.",
    "limits": "Does not prove every staged decision will repeat this failure.",
    "use": "Define review triggers, milestones, owner, sunset criteria, and escalation before approval."
  }
];
const commonMistakes = [
  "Treating fictional constraints as excuses to ignore minimum security, privacy, accessibility, evidence, or recovery requirements.",
  "Comparing options with different criteria or changing weights to favor a preferred answer.",
  "Presenting one realistic option and several intentionally weak alternatives.",
  "Choosing the lowest fictional purchase price without lifecycle, staffing, training, supplier, migration, evidence, and recovery cost.",
  "Treating uncertain estimates and assumptions as precise facts.",
  "Ignoring fictional users, accessibility, support burden, privacy, or data governance in a technical decision.",
  "Optimizing one quality such as security, availability, speed, or cost while hiding harm to another.",
  "Failing to define non-negotiable requirements before option comparison.",
  "Ignoring shared failure domains, supplier lock-in, data portability, exit, and recovery.",
  "Using pilot or temporary architecture without owner, scope, rollback, evidence, sunset criteria, and review triggers.",
  "Approving complex architecture without enough trained owners or alternate operators.",
  "Failing to document the disadvantages and residual risk of the selected option.",
  "Treating a decision record as permanent even when assumptions, costs, users, suppliers, or technology change.",
  "Using real internal costs, contracts, diagrams, suppliers, staffing details, incidents, identities, or decision records in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What best describes a fictional architecture tradeoff?",
    "choices": [
      "A reason to ignore security requirements.",
      "An explicit choice where improving one outcome changes another and the consequences must be compared and owned.",
      "A technical mistake.",
      "A decision based only on cost."
    ],
    "answer": 1,
    "explanation": "Tradeoffs are expected, but they must be transparent, evidence-based, and accountable."
  },
  {
    "question": "What should happen before options are compared?",
    "choices": [
      "Choose the cheapest option.",
      "Define the decision, non-negotiable requirements, constraints, assumptions, owners, and consistent criteria.",
      "Ask one supplier which option is best.",
      "Select a preferred option and design alternatives around it."
    ],
    "answer": 1,
    "explanation": "A fair decision starts with clear requirements and criteria before preferences dominate."
  },
  {
    "question": "The fictional lowest-price option has the highest training and recovery cost. What is the strongest conclusion?",
    "choices": [
      "The lowest-price option is still automatically best.",
      "Lifecycle cost is more informative than purchase price alone.",
      "Training and recovery should be ignored.",
      "The option must be rejected immediately."
    ],
    "answer": 1,
    "explanation": "Architecture decisions should consider complete lifecycle cost and uncertainty."
  },
  {
    "question": "A fictional identity flow excludes users who need an accessible alternative. What is strongest?",
    "choices": [
      "Launch anyway because security comes first.",
      "Treat accessibility as a decision gate, redesign the flow, provide safe alternatives, and retest.",
      "Remove identity controls entirely.",
      "Ask excluded users not to use the service."
    ],
    "answer": 1,
    "explanation": "A defensible architecture protects security while remaining usable and accessible to intended users."
  },
  {
    "question": "What makes a fictional temporary architecture defensible?",
    "choices": [
      "It is called temporary.",
      "It has owner, scope, pilot or exception controls, evidence, rollback, milestones, sunset criteria, review triggers, and residual-risk approval.",
      "It is faster to deploy.",
      "It avoids documentation."
    ],
    "answer": 1,
    "explanation": "Temporary choices need strong governance so they do not become permanent debt."
  },
  {
    "question": "What is strongest evidence for selecting a fictional option?",
    "choices": [
      "A single high score.",
      "Consistent criteria, scenario results, sensitivity analysis, evidence confidence, stakeholder impact, residual risk, and reversibility.",
      "The architect prefers it.",
      "The supplier recommends it."
    ],
    "answer": 1,
    "explanation": "Architecture decisions require balanced evidence and transparent uncertainty."
  },
  {
    "question": "What makes an A2.9 portfolio artifact safe to share?",
    "choices": [
      "Only real prices are removed.",
      "The real decision record is shortened.",
      "Every organization, system, identity, cost, supplier, option, evidence item, decision, date, and outcome is invented.",
      "Only names are changed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, people, suppliers, finances, and architecture decisions."
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
        Module A2
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

export default function ArchitectureTradeoffsAndConstraintsPage() {
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
              Module A2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 9 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Architecture Decisions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2.9 Architecture Tradeoffs and Constraints
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how advanced defenders compare fictional architecture options
            across security, privacy, availability, accessibility, usability,
            performance, cost, complexity, evidence, suppliers, recovery, and
            future flexibility without hiding uncertainty or residual risk.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A2: Security Architecture"
          lessonTitle="Architecture Tradeoffs and Constraints"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional organizations, systems, identities, suppliers, costs, evidence, decisions, dates, and outcomes.",
            "I understand that constraints must be managed explicitly rather than used as excuses for unowned risk.",
            "I will compare fictional options using the same criteria, assumptions, evidence standards, and stakeholder outcomes.",
            "I will not upload or reproduce real costs, contracts, staffing details, diagrams, suppliers, incidents, identities, decision records, or private data.",
            "I will analyze only supplied fictional evidence and will not access, test, configure, purchase, change, or investigate real systems.",
            "I will document uncertainty, confidence, accessibility, privacy, lifecycle cost, supplier dependence, reversibility, residual risk, and review triggers.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Cheapest Option Can Become the Most Expensive Architecture"
        >
          <p className="leading-8">
            A fictional organization must improve identity, logging, and
            recovery within six months and a fixed budget. One centralized
            platform has the lowest purchase price but the highest migration,
            training, lock-in, and recovery concentration. A distributed option
            reduces shared failure but requires more skilled owners. A hybrid
            option preserves flexibility but may become permanent transition
            debt. There is no perfect option—only a decision that makes
            benefits, limits, uncertainty, ownership, and consequences visible.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Hidden tradeoff
              </p>
              <p className="mt-2 leading-7">
                Select a fictional option using one attractive feature while
                ignoring privacy, accessibility, operations, failure, recovery,
                lock-in, and lifecycle cost.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Defensible decision
              </p>
              <p className="mt-2 leading-7">
                Compare realistic fictional options with consistent criteria,
                evidence, scenarios, confidence, reversibility, owners, and
                explicit residual risk.
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
          title="Architecture Is a Series of Owned Decisions, Not a Collection of Perfect Controls"
        >
          <p className="leading-8">
            Fictional organizations have limited time, money, people, evidence,
            technology, supplier control, and recovery capacity. Advanced
            architecture protects non-negotiable outcomes while making
            constraints, assumptions, opportunity costs, accessibility effects,
            privacy consequences, operational burden, and remaining risk clear
            to authorized owners.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Compare honestly",
                "Use the same fictional criteria and evidence standards for every credible option.",
              ],
              [
                "Protect minimum outcomes",
                "Reject fictional options that fail required security, privacy, accessibility, evidence, mission, or recovery gates.",
              ],
              [
                "Preserve future choice",
                "Favor fictional pilots, rollback, portability, modularity, sunset criteria, and review triggers where uncertainty is high.",
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
          title="Decision → Requirements → Constraints → Options → Criteria → Scenarios → Evidence → Choice → Review"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Decision", "Define the fictional choice, owner, scope, deadline, affected users, and mission outcome."],
              ["Requirements", "Identify fictional security, privacy, accessibility, evidence, recovery, and mission gates every option must meet."],
              ["Constraints", "Document fictional budget, time, people, supplier, technology, data, policy, and operations limits."],
              ["Options", "Create realistic fictional alternatives with different mechanisms, costs, failure paths, and reversibility."],
              ["Criteria", "Compare fictional mission fit, trust, privacy, availability, usability, accessibility, cost, evidence, and flexibility."],
              ["Scenarios", "Evaluate fictional normal, growth, degraded, failed, supplier-outage, staff-loss, and recovered conditions."],
              ["Evidence", "Separate fictional facts, estimates, assumptions, unknowns, confidence, and limitations."],
              ["Choice", "Select, pilot, defer, or continue temporarily with authorized conditions and residual risk."],
              ["Review", "Reconsider the fictional decision when assumptions, users, suppliers, costs, evidence, or failures change."],
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
          title="Language for Tradeoffs and Constraints"
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
            Decision Criteria
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Criteria for Comparing Fictional Architecture Options
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.criterion}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Measure", item.measure],
                    ["Failure pattern", item.failure],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.criterion}-${label}`}
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
            Constraint Catalog
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Constraints That Require Explicit Architecture Responses
          </h2>

          <div className="mt-6 grid gap-5">
            {constraintCatalog.map((item) => (
              <article
                key={item.constraint}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.constraint}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.meaning}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Main risk", item.risk],
                    ["Defensible response", item.defensible_response],
                    ["Required evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.constraint}-${label}`}
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
            Option Comparison
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Four Credible Fictional Architecture Options
          </h2>

          <div className="mt-6 grid gap-5">
            {optionComparison.map((item) => (
              <article
                key={item.option}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.option}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Benefits", item.benefits],
                    ["Limits", item.limits],
                    ["Best when", item.best_when],
                    ["Required controls", item.controls],
                    ["Residual risk", item.residual_risk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.option}-${label}`}
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
            Tradeoff Cases
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Tensions without One-Dimensional Answers
          </h2>

          <div className="mt-6 grid gap-5">
            {tradeoffCases.map((item) => (
              <article
                key={item.tradeoff}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.tradeoff}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.tension}</p>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Poor choice
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.poor_choice}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Balanced design
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.balanced_design}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decision Process
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Decision Definition to Review
          </h2>

          <div className="mt-6 grid gap-5">
            {decisionProcess.map((item) => (
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
            Decision Ownership
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Owners for Mission, Users, Cost, Suppliers, Recovery, and Risk
          </h2>

          <div className="mt-6 grid gap-5">
            {owners.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Owns", item.owns],
                    ["Primary decision", item.decision],
                    ["Required evidence", item.evidence],
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

        <FakeDashboardCard
          title="Fake Northbridge Architecture Decision Dashboard"
          subtitle="Fictional option, cost, staffing, accessibility, privacy, failure, recovery, supplier, and sunset review for training only."
          metrics={[
            {
              label: "Credible options",
              value: "4",
              note: "Centralized, distributed, hybrid, and temporary-current-state options are being compared.",
            },
            {
              label: "Major constraints",
              value: "6",
              note: "Budget, timeline, staffing, supplier dependence, accessibility, and privacy shape the decision.",
            },
            {
              label: "Decision status",
              value: "Pilot",
              note: "The fictional evidence supports a staged hybrid pilot with strict gates rather than immediate full adoption.",
            },
          ]}
        />

        <FakeAlertCard
          title="Architecture Decision Has Unresolved Accessibility, Lock-In, and Sunset Risk"
          severity="High"
          time="10:18 PM"
          source="Fake Northbridge Architecture Decision Console"
          details="The fictional centralized option concentrates identity, logging, approval, and recovery on one supplier. The distributed option exceeds current staffing. One identity flow fails accessibility testing, the highest-visibility design overcollects user content, and the hybrid transition lacks reliable sunset closure."
          recommendation="Do not approve full adoption. Define non-negotiable gates, redesign accessibility and privacy controls, run a limited hybrid pilot, preserve alternate evidence and recovery, assign transition owners, test exit and rollback, and document residual risk and sunset triggers."
        />

        <FakeLogPanel
          title="Fake Architecture Decision Timeline"
          logs={[
            "21:00 DECISION scope='identity,logging,recovery'",
            "21:05 CONSTRAINT budget='fixed'",
            "21:06 CONSTRAINT timeline='6-months'",
            "21:10 OPTION centralized='evaluated'",
            "21:11 OPTION distributed='evaluated'",
            "21:12 OPTION hybrid='evaluated'",
            "21:13 OPTION current-temporary='evaluated'",
            "21:20 COST lowest-purchase='centralized'",
            "21:21 COST highest-lifecycle='centralized'",
            "21:30 FAILURE shared-platform='identity,logs,approval,recovery'",
            "21:40 STAFF distributed-required='4'",
            "21:41 STAFF available='2'",
            "21:50 ACCESSIBILITY identity-flow='failed'",
            "22:00 PRIVACY full-content='unnecessary'",
            "22:10 HYBRID sunset-closure='weak'",
            "22:18 DECISION staged-pilot='recommended'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence before Selecting an Architecture Option
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
                    ["Decision use", item.use],
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
          title="Which Fictional Decision Is Most Defensible?"
          question="Which current fictional Northbridge decision is most defensible based on the available evidence?"
          evidence={[
            "The centralized option has the lowest purchase price but highest lifecycle, lock-in, and correlated-failure concerns.",
            "The distributed option reduces shared platform dependence but currently requires more specialized owners than are available.",
            "One proposed identity flow fails accessibility testing.",
            "The highest-visibility option collects full user-message content unnecessarily.",
            "The hybrid option preserved limited service and alternate evidence during a platform outage.",
            "Temporary transition rules in the hybrid option do not close reliably.",
            "A previous temporary architecture remained for three years because no sunset owner or review trigger existed.",
            "The organization has a fixed budget and six-month timeline.",
          ]}
          options={[
            "Approve a limited staged hybrid pilot only after accessibility and privacy redesign, with alternate evidence, recovery, transition owners, rollback, sunset criteria, review triggers, lifecycle cost, and residual-risk approval.",
            "Adopt the centralized option immediately because its purchase price is lowest.",
            "Adopt the distributed option immediately even though staffing is insufficient.",
            "Keep the current architecture indefinitely because change is difficult.",
          ]}
          bestAnswer={0}
          explanation="A staged pilot reduces uncertainty and preserves reversibility while still requiring non-negotiable accessibility, privacy, evidence, recovery, ownership, cost, and sunset controls."
        />

        <SectionCard
          eyebrow="Common Decision Mistakes"
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
          title="Build a Fictional Architecture Decision Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Decide the Northbridge Architecture Direction
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, quote, lightly modify, summarize, or reproduce real
                budgets, contracts, suppliers, staffing details, diagrams,
                identities, incidents, internal decisions, or private data.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Fictional decision statement, owner, scope, deadline, and stakeholders.</li>
                <li>Non-negotiable security, privacy, accessibility, mission, evidence, and recovery gates.</li>
                <li>Constraint, assumption, dependency, confidence, and review register.</li>
                <li>Four credible architecture options.</li>
                <li>Consistent ten-criterion comparison matrix.</li>
                <li>Normal, growth, degraded, failed, supplier-outage, staff-loss, and recovered scenarios.</li>
                <li>Lifecycle cost, staffing, supplier lock-in, privacy, accessibility, and opportunity-cost analysis.</li>
                <li>Pilot, rollback, migration, fallback, sunset, and review-trigger design.</li>
                <li>Decision record with disadvantages, residual risk, corrective actions, and revision history.</li>
                <li>Complete fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This activity creates a fictional educational decision only. It does
            not authorize purchasing, contracting, system access, configuration,
            migration, testing, monitoring, or investigation involving any real
            organization or system.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Lowest-Cost Option Concentrates Failure"
          scenario="A fictional centralized platform has the lowest purchase price and fastest deployment, but identity, logging, approval, and recovery would depend on the same supplier and administrator group."
          choices={[
            {
              label: "Choice A",
              response: "Compare lifecycle cost and failure domains, require alternate evidence and recovery, test portability and exit, pilot narrowly, separate administration, and obtain explicit residual-risk approval.",
              outcome: "Best professional choice. The response evaluates cost without ignoring correlated failure, lock-in, evidence, or recovery.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Select it immediately because the purchase price is lowest.",
              outcome: "Risky. Purchase price alone does not represent lifecycle cost or architecture risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Reject every centralized capability automatically.",
              outcome: "Unsafe. Centralization can provide value when concentration risk is controlled and accepted transparently.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Fast Identity Flow Fails Accessibility Testing"
          scenario="A fictional identity design meets security and performance targets but several intended users cannot complete the flow using an approved accessible method."
          choices={[
            {
              label: "Choice A",
              response: "Treat accessibility as a release gate, redesign the flow, provide a safe equivalent method, preserve security requirements, pilot with diverse users, and retest before approval.",
              outcome: "Best professional choice. The architecture protects security and intended users together.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Launch because the majority of users can complete the flow.",
              outcome: "Risky. Intended users should not be excluded by an avoidable architecture decision.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Remove all identity controls.",
              outcome: "Unsafe. The correct response is an accessible secure design, not elimination of protection.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Choose an Architecture under Budget, Staffing, Privacy, and Recovery Constraints"
        >
          <p className="leading-8">
            Extend the fictional Northbridge decision for a scenario in which
            the budget is reduced, one specialized operator leaves, privacy
            requirements become stricter, and a supplier outage occurs during
            the pilot. Reevaluate the options, assumptions, lifecycle costs,
            accessible user flows, evidence coverage, degraded service,
            supplier fallback, rollback, sunset criteria, and residual risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                "Required decision",
                "State whether the fictional organization should continue, modify, pause, reverse, or replace the pilot using the same criteria and updated evidence.",
              ],
              [
                "Required proof",
                "Explain how the decision protects non-negotiable outcomes, remains operable with fewer staff, minimizes data, recovers safely, and preserves future choice.",
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
        </SectionCard>

        <DefenderChecklist
          title="Architecture Tradeoffs and Constraints Checklist"
          items={[
            "I can define the fictional architecture decision, owner, mission outcome, scope, deadline, and affected stakeholders.",
            "I can define fictional non-negotiable security, privacy, accessibility, mission, evidence, recovery, and governance requirements.",
            "I can identify fictional budget, staffing, time, supplier, legacy, data, policy, accessibility, availability, evidence, and ownership constraints.",
            "I can distinguish fictional facts, estimates, assumptions, unknowns, confidence, and limitations.",
            "I can create multiple credible fictional options with different mechanisms, costs, failure paths, evidence, recovery, and reversibility.",
            "I can compare fictional options using consistent criteria rather than changing standards to favor one choice.",
            "I can evaluate fictional security, privacy, availability, usability, accessibility, performance, operations, cost, evidence, suppliers, and future flexibility.",
            "I can use fictional scenarios and sensitivity analysis to test changed assumptions, growth, failures, supplier outage, staff loss, and recovery.",
            "I can design fictional pilots, rollback, fallback, migration, portability, sunset criteria, and review triggers.",
            "I can document fictional disadvantages, opportunity costs, architecture debt, exceptions, corrective actions, and residual risk.",
            "I can assign fictional mission, security, privacy, accessibility, operations, finance, supplier, recovery, evidence, governance, and risk owners.",
            "I will never use real costs, contracts, staffing details, diagrams, suppliers, identities, incidents, decisions, or private data in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A2.9 Mini Quiz: Architecture Tradeoffs and Constraints"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Architecture Tradeoff and Constraint Decision Package for Northbridge. Include the decision statement, owner, stakeholders, non-negotiable requirements, constraint register, assumptions, dependencies, confidence levels, four credible options, ten-criterion comparison, lifecycle cost, opportunity cost, accessibility, privacy, supplier lock-in, operations, evidence, failure domains, recovery, scenario analysis, sensitivity analysis, pilot, rollback, fallback, migration, portability, sunset criteria, review triggers, decision record, disadvantages, residual risk, corrective actions, reflection, revision history, and a statement that every organization, system, identity, cost, supplier, option, evidence item, decision, date, and outcome is invented."
          tips={[
            "Compare fictional options using the same criteria and evidence standards.",
            "Treat accessibility, privacy, evidence, and recovery as architecture requirements rather than side notes.",
            "Include at least one assumption that changes and show how the decision responds.",
            "Use pilots, rollback, portability, sunset criteria, and review triggers where uncertainty is high.",
            "Keep every cost, supplier, identity, system, option, evidence item, decision, date, and outcome completely invented.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the Security Architecture Design Lab?"
        >
          <p className="leading-8">
            Before moving to A2.10, rate your readiness from 1 to 5 for each
            area: decision definition, non-negotiable requirements, constraints,
            assumptions, options, criteria, scenarios, confidence, accessibility,
            privacy, lifecycle cost, staffing, suppliers, recovery,
            reversibility, sunset, and residual risk.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why a fictional constraint does not remove responsibility for minimum security, privacy, accessibility, evidence, or recovery.",
              "I can compare fictional options using consistent criteria and realistic alternatives.",
              "I can identify fictional lifecycle cost, lock-in, opportunity cost, complexity, staffing, and architecture debt.",
              "I can use fictional pilots, rollback, sensitivity analysis, sunset criteria, and review triggers to manage uncertainty.",
              "I can document fictional disadvantages, remaining risk, confidence, owners, and consequences without hiding them.",
              "I can keep the entire tradeoff and constraint portfolio fully invented and safe to share.",
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
            Record one fictional non-negotiable requirement, one constraint you
            would manage through a pilot, and one final architecture decision
            question you will carry into A2.10.
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Architecture tradeoffs are explicit fictional choices among mission, security, privacy, availability, accessibility, usability, performance, cost, complexity, evidence, recovery, and flexibility.",
            "Constraints should shape a decision but do not excuse unmanaged fictional risk.",
            "Non-negotiable fictional requirements should be defined before options are compared.",
            "Credible fictional options should differ meaningfully in mechanisms, dependencies, costs, failure paths, evidence, recovery, and reversibility.",
            "Use the same fictional criteria and evidence standards for every option.",
            "Lifecycle cost includes fictional implementation, operations, staffing, training, supplier, evidence, migration, recovery, and opportunity cost.",
            "Accessibility and privacy are architecture outcomes, not optional additions.",
            "Pilots, rollback, portability, fallback, sunset criteria, and review triggers preserve fictional future choice under uncertainty.",
            "Decision records should state fictional assumptions, confidence, disadvantages, consequences, residual risk, owners, and reconsideration triggers.",
            "Every CyberShield architecture-decision artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real organizations or systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A2
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