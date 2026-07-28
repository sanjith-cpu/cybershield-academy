import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const intermediatePath = "/high-school/intermediate";
const previousPage = `${intermediatePath}/practice-test-2`;

const testQuestions = [
  {
    "question": "A fictional workstation sends traffic to an internal database on an unexpected port. What should the defender establish first?",
    "choices": [
      "Whether the port is commonly listed as dangerous.",
      "Whether source, destination, service, timing, user role, business purpose, and baseline support the flow.",
      "Whether the workstation should be permanently isolated.",
      "Whether the database is in the same office."
    ],
    "answer": 1,
    "explanation": "Network evidence should be interpreted in context rather than from a port number alone."
  },
  {
    "question": "Which fictional network control most directly limits unnecessary movement between student and administrative systems?",
    "choices": [
      "A single flat network.",
      "Allow-all rules with later review.",
      "Separate segments with approved rules between trust zones.",
      "Shared administrator credentials."
    ],
    "answer": 2,
    "explanation": "Segmentation reduces unnecessary paths and makes trust boundaries explicit."
  },
  {
    "question": "A fictional DNS record resolves to an unexpected address. Which response is strongest?",
    "choices": [
      "Validate authoritative records, change history, ownership, expected hosting, and resolution evidence.",
      "Assume domain takeover.",
      "Disable DNS for every service.",
      "Publish the address publicly."
    ],
    "answer": 0,
    "explanation": "Unexpected resolution requires evidence-based validation against authoritative configuration and ownership."
  },
  {
    "question": "A fictional firewall denies repeated outbound connections from one endpoint. What is confirmed?",
    "choices": [
      "The endpoint is compromised.",
      "The endpoint is safe because the traffic was blocked.",
      "An attacker is present.",
      "Repeated denied connection attempts occurred and require process, destination, timing, and baseline review."
    ],
    "answer": 3,
    "explanation": "Denied traffic is an observation that needs context; it does not prove compromise or harmlessness."
  },
  {
    "question": "Which fictional network diagram is strongest?",
    "choices": [
      "One with many icons but no labels.",
      "One showing systems, directions, trust boundaries, control points, owners, evidence, and unknowns.",
      "One using color only.",
      "One that includes every packet."
    ],
    "answer": 1,
    "explanation": "A useful defensive diagram makes relationships and evidence limits understandable."
  },
  {
    "question": "A fictional Linux process has an unfamiliar name. What is the strongest conclusion?",
    "choices": [
      "It is malicious.",
      "It is safe because it is running.",
      "It requires review of path, user, parent process, package, service, timing, and baseline.",
      "It should be deleted immediately."
    ],
    "answer": 2,
    "explanation": "An unfamiliar process name is not enough to determine intent or safety."
  },
  {
    "question": "Which fictional Linux permission review best measures effective access?",
    "choices": [
      "Review owner, group, mode, ACLs, inherited access, business need, and intended final state.",
      "Review only the file name.",
      "Remove every permission.",
      "Give the analyst root access."
    ],
    "answer": 0,
    "explanation": "Effective access can depend on several permission paths and should be tied to business need."
  },
  {
    "question": "A fictional Linux collector restarts after an approved update. What should happen next?",
    "choices": [
      "Treat the restart as persistence.",
      "Ignore it because maintenance was approved.",
      "Disable the host.",
      "Compare change evidence, package state, service logs, restart timing, source health, and post-change validation."
    ],
    "answer": 3,
    "explanation": "Approved maintenance provides context but does not replace validation."
  },
  {
    "question": "A fictional service account creates a new file in a protected directory. Which evidence matters most?",
    "choices": [
      "File path, owner, permissions, process ancestry, package source, change records, timing, and expected purpose.",
      "The file extension only.",
      "The color of the alert.",
      "The age of the server."
    ],
    "answer": 0,
    "explanation": "The file should be evaluated through provenance, behavior, permissions, and baseline context."
  },
  {
    "question": "A fictional Linux log shows three failed starts followed by one successful start. What is the strongest statement?",
    "choices": [
      "Compromise is confirmed.",
      "A temporary service-start problem is supported, while cause and long-term stability still require evidence.",
      "The service is permanently healthy.",
      "The log should be ignored."
    ],
    "answer": 1,
    "explanation": "The sequence supports a reliability issue and recovery, not a complete cause or permanent outcome."
  },
  {
    "question": "A fictional Windows scheduled task runs under a known service account outside the normal window. What should the defender do?",
    "choices": [
      "Ignore it because the account is known.",
      "Delete it immediately.",
      "Compare task name, path, account, owner, timing, change history, baseline, and related events.",
      "Merge it with every alert that day."
    ],
    "answer": 2,
    "explanation": "Known service accounts can still be used unexpectedly; context and baseline are required."
  },
  {
    "question": "Which fictional Windows account finding is most urgent for ownership review?",
    "choices": [
      "A disabled standard account.",
      "An active privileged account with no current owner or business need.",
      "A documented service account.",
      "A normal user account used during work hours."
    ],
    "answer": 1,
    "explanation": "Unowned privileged capability creates a major access and governance concern."
  },
  {
    "question": "A fictional Windows policy tool displays the intended setting, but the service still behaves incorrectly. What is the strongest conclusion?",
    "choices": [
      "The setting is validated.",
      "The system is compromised.",
      "The ticket can close.",
      "The effective state is not yet validated and service behavior, policy application, dependencies, and owner review remain."
    ],
    "answer": 3,
    "explanation": "Displayed configuration is not always the effective operating state."
  },
  {
    "question": "A fictional maintenance task matches the approved name, account, path, and patch window. What does that support?",
    "choices": [
      "The task is consistent with the approved baseline, while unrelated activity still requires separate review.",
      "Every Windows event is safe.",
      "The account can never be misused.",
      "No monitoring is needed."
    ],
    "answer": 0,
    "explanation": "Baseline alignment supports expected behavior but does not prove universal safety."
  },
  {
    "question": "Which fictional validation best confirms a Windows security correction?",
    "choices": [
      "The command was entered.",
      "The alert stopped.",
      "The effective setting, service behavior, related permissions, monitoring, and owner signoff are confirmed.",
      "The ticket was closed."
    ],
    "answer": 2,
    "explanation": "Validation should confirm the intended state and operational outcome."
  },
  {
    "question": "Why must fictional event time, collection time, and alert time remain separate?",
    "choices": [
      "They always mean the same thing.",
      "Collection time proves intent.",
      "Only cloud events use multiple times.",
      "Mixing them can create a false sequence."
    ],
    "answer": 3,
    "explanation": "Each timestamp represents a different stage in the evidence process."
  },
  {
    "question": "A fictional source stops delivering events for thirty minutes. What is confirmed?",
    "choices": [
      "Monitoring assurance is reduced.",
      "An attacker deleted the logs.",
      "No activity occurred.",
      "A breach is confirmed."
    ],
    "answer": 0,
    "explanation": "A source gap proves reduced visibility, not harmful activity or harmlessness."
  },
  {
    "question": "Two fictional sources cover the same service, but one becomes unhealthy. What is the strongest statement?",
    "choices": [
      "Coverage remains perfect.",
      "Coverage is partially reduced and the healthy source may compensate for some questions but not necessarily all.",
      "The entire service is compromised.",
      "The unhealthy source should be ignored forever."
    ],
    "answer": 1,
    "explanation": "Compensating evidence can reduce uncertainty but should not be assumed complete."
  },
  {
    "question": "Which fictional finding best preserves evidence limits?",
    "choices": [
      "The High alert proves a breach.",
      "Nothing happened because the service remained online.",
      "The supplied records support an unauthorized page view; modification and disclosure remain unconfirmed.",
      "The user was definitely malicious."
    ],
    "answer": 2,
    "explanation": "Professional findings separate observed activity from unsupported impact."
  },
  {
    "question": "A fictional timeline contains conflicting timestamps. What should the analyst do?",
    "choices": [
      "Choose the one that supports the preferred theory.",
      "Document the conflict, compare time zones, source clocks, metadata, and collection paths, and preserve uncertainty.",
      "Delete both records.",
      "Treat the conflict as tampering."
    ],
    "answer": 1,
    "explanation": "Timestamp conflicts should be reconciled transparently rather than forced into a narrative."
  },
  {
    "question": "What is the strongest purpose of comparing fictional defensive tools?",
    "choices": [
      "To choose the tool with the most features.",
      "To repeat vendor claims.",
      "To explain each tool's coverage, limits, source health, context, and decision value.",
      "To use only one source."
    ],
    "answer": 2,
    "explanation": "Tool value depends on what it can observe, what it cannot prove, and how it supports decisions."
  },
  {
    "question": "A fictional endpoint alert and network alert occur close together. When should they become one case?",
    "choices": [
      "When shared identity, system, session, evidence, action, or impact links support the relationship.",
      "Whenever both are High.",
      "Whenever they occur on the same day.",
      "Whenever the dashboard groups them."
    ],
    "answer": 0,
    "explanation": "Temporal proximity alone is not enough to establish a common case."
  },
  {
    "question": "A fictional vendor says its alert proves compromise. What should the analyst do?",
    "choices": [
      "Repeat the claim.",
      "Validate underlying evidence, source coverage, identity state, alternatives, and confirmed impact.",
      "Delete the alert.",
      "Assume the vendor is always correct."
    ],
    "answer": 1,
    "explanation": "Tool conclusions should be tested against evidence and scope."
  },
  {
    "question": "Which fictional evidence best validates a detection-rule improvement?",
    "choices": [
      "The rule was saved.",
      "The analyst likes it.",
      "Documentation was updated.",
      "Approved tests show expected detection, acceptable noise, healthy sources, correct routing, and owner review."
    ],
    "answer": 3,
    "explanation": "Implementation is not the same as validated behavior."
  },
  {
    "question": "A fictional rule fires every morning on approved administrator activity. What is the strongest tuning approach?",
    "choices": [
      "Disable it.",
      "Ignore the alerts.",
      "Add evidence-based context such as approved identities, windows, changes, and exceptions while preserving true-positive coverage.",
      "Raise the severity."
    ],
    "answer": 2,
    "explanation": "Good tuning reduces predictable noise without hiding harmful activity."
  },
  {
    "question": "A fictional supplier account was approved six months ago, but the project ended. What matters now?",
    "choices": [
      "The original approval alone.",
      "Current business need, effective access, owner confirmation, expiration, and required final state.",
      "Recent use.",
      "The supplier's title."
    ],
    "answer": 1,
    "explanation": "Access decisions should reflect current need and authorized ownership."
  },
  {
    "question": "A fictional user has no direct privileged role but gains access through a nested group. What does this demonstrate?",
    "choices": [
      "Direct role review is sufficient.",
      "The user is malicious.",
      "Nested groups should be banned.",
      "Effective access can come through inherited or nested paths."
    ],
    "answer": 3,
    "explanation": "IAM analysis must include indirect access paths."
  },
  {
    "question": "What is the strongest validation after fictional privileged access is removed?",
    "choices": [
      "Check effective permissions, related groups, active sessions, service impact, and owner signoff.",
      "Close the ticket.",
      "Wait for the alert to stop.",
      "Ask the user whether it worked."
    ],
    "answer": 0,
    "explanation": "The final effective state and operational impact should be verified."
  },
  {
    "question": "A fictional emergency account remains enabled after the emergency ends. What is the strongest recommendation?",
    "choices": [
      "Keep it forever.",
      "Share it with more responders.",
      "Remove or restrict it according to policy, review sessions and actions, and validate the final state.",
      "Rename it."
    ],
    "answer": 2,
    "explanation": "Emergency access should be time-limited, owned, reviewed, and validated."
  },
  {
    "question": "Which fictional IAM review is most complete?",
    "choices": [
      "Review the visible role only.",
      "Review direct, inherited, nested, conditional, exception, service-account, supplier, and lifecycle access.",
      "Review only sign-ins.",
      "Ask whether the user wants access."
    ],
    "answer": 1,
    "explanation": "Effective access may come from many paths and lifecycle conditions."
  },
  {
    "question": "A fictional message fails sender checks and uses an unrelated sign-in destination. What is the strongest conclusion?",
    "choices": [
      "Every recipient is compromised.",
      "The sender is definitely a known attacker.",
      "The message is high-confidence malicious or suspicious, while user impact requires separate evidence.",
      "It is safe because there is no attachment."
    ],
    "answer": 2,
    "explanation": "Message disposition and user-impact confidence are separate judgments."
  },
  {
    "question": "One fictional user clicks a phishing link but reports entering no information. What is confirmed?",
    "choices": [
      "Credential disclosure.",
      "One click requiring targeted identity review and guidance.",
      "Account takeover.",
      "Organization-wide compromise."
    ],
    "answer": 1,
    "explanation": "The click is confirmed; credential entry and compromise are not."
  },
  {
    "question": "A fictional malicious message has no user interaction. Which response is proportionate?",
    "choices": [
      "Remove related messages, document the campaign, notify relevant users if needed, and monitor for interaction evidence.",
      "Reset every account.",
      "Ignore the message.",
      "Disable email service."
    ],
    "answer": 0,
    "explanation": "Containment should match the message evidence and actual user interaction."
  },
  {
    "question": "A fictional user clicked a suspicious link and later signed in normally. What is the strongest conclusion?",
    "choices": [
      "Compromise is ruled out.",
      "Compromise is confirmed.",
      "The user is to blame.",
      "The click is confirmed, while identity state requires targeted review of credentials, sessions, authentication, and related activity."
    ],
    "answer": 3,
    "explanation": "Normal-looking activity neither confirms nor rules out compromise."
  },
  {
    "question": "What is the safest fictional phishing-lab method?",
    "choices": [
      "Open a real suspicious attachment.",
      "Use fully invented messages and supplied evidence without interacting with real suspicious content.",
      "Forward the message to classmates.",
      "Visit the real link without typing credentials."
    ],
    "answer": 1,
    "explanation": "Safe learning should use controlled fictional evidence."
  },
  {
    "question": "A fictional support role loads a manager-only page but makes no change. What is confirmed?",
    "choices": [
      "An authorization gap and unauthorized page view.",
      "The entire database was modified.",
      "No issue exists.",
      "All manager accounts are compromised."
    ],
    "answer": 0,
    "explanation": "Viewing restricted content and changing it are separate impact levels."
  },
  {
    "question": "Which fictional validation best confirms a corrected web authorization rule?",
    "choices": [
      "The code was edited.",
      "An approved role succeeds, an unapproved role is denied, service health remains stable, and the owner reviews the result.",
      "The alert disappears.",
      "The page title changes."
    ],
    "answer": 1,
    "explanation": "Both allowed and denied behavior should be tested with service impact and ownership."
  },
  {
    "question": "A fictional application blocks one test input but accepts a related encoded form. What does this suggest?",
    "choices": [
      "The application is fully secure.",
      "All input validation should be removed.",
      "The user account is compromised.",
      "The control may be inconsistent and requires broader safe validation."
    ],
    "answer": 3,
    "explanation": "One blocked test does not prove complete control coverage."
  },
  {
    "question": "Which fictional web finding is strongest?",
    "choices": [
      "The application was hacked.",
      "The supplied evidence confirms a restricted page view; modification, persistence, and disclosure remain unconfirmed.",
      "Nothing happened because the service stayed online.",
      "The user was malicious."
    ],
    "answer": 1,
    "explanation": "The finding should preserve confirmed behavior and impact limits."
  },
  {
    "question": "A fictional web error page exposes detailed internal information. Which recommendation is strongest?",
    "choices": [
      "Hide every error from developers.",
      "Remove the application.",
      "Use user-safe error messages, preserve detailed server-side logging, validate behavior, and assign an owner.",
      "Ignore it because no exploit is confirmed."
    ],
    "answer": 2,
    "explanation": "The design should reduce information exposure while preserving useful defensive evidence."
  },
  {
    "question": "A fictional codebase repeats authorization checks differently across routes. What is the strongest recommendation?",
    "choices": [
      "Rename the routes.",
      "Hide navigation links.",
      "Add comments only.",
      "Centralize authorization logic, define role rules, add approved and denied tests, and monitor failures."
    ],
    "answer": 3,
    "explanation": "A centralized, testable control is stronger than cosmetic changes."
  },
  {
    "question": "A fictional application records sensitive information in debug logs. What is the strongest improvement?",
    "choices": [
      "Define safe logging, remove unnecessary sensitive fields, protect access, set retention, and validate useful evidence remains.",
      "Disable all logging.",
      "Make logs public.",
      "Keep the fields because analysts may need them."
    ],
    "answer": 0,
    "explanation": "Secure logging balances evidence value, privacy, access, and retention."
  },
  {
    "question": "A fictional input-validation fix blocks one known example. What else is needed?",
    "choices": [
      "Nothing; one blocked example proves complete security.",
      "Broader tests for expected and unexpected input, safe failure behavior, logging, service impact, and owner review.",
      "A higher severity label.",
      "A new page design."
    ],
    "answer": 1,
    "explanation": "Secure coding validation should test the control's intended behavior across a meaningful range."
  },
  {
    "question": "What makes a fictional secure-coding recommendation decision-ready?",
    "choices": [
      "A long code excerpt.",
      "A severe title.",
      "Expected behavior, observed weakness, control design, owner, priority, tests, rollout, rollback, monitoring, and validation.",
      "The phrase fix immediately."
    ],
    "answer": 2,
    "explanation": "A good recommendation explains what should change and how success will be proven."
  },
  {
    "question": "A fictional developer says a hidden button prevents unauthorized access. What is the strongest response?",
    "choices": [
      "Agree because users cannot see the button.",
      "Ask for server-side authorization evidence and approved and denied role tests.",
      "Remove the button.",
      "Change its color."
    ],
    "answer": 1,
    "explanation": "Interface visibility does not replace server-side authorization."
  },
  {
    "question": "Which fictional vulnerability should receive the highest priority?",
    "choices": [
      "The one with the longest description.",
      "The newest scanner signature.",
      "The one with significant asset value, real exposure, weak controls, credible impact, and a feasible treatment need.",
      "Every finding equally."
    ],
    "answer": 2,
    "explanation": "Priority combines technical severity with business and control context."
  },
  {
    "question": "A fictional critical finding affects an isolated system with strong controls. What should happen?",
    "choices": [
      "Ignore it forever.",
      "Validate the issue and assess asset value, exposure, controls, exploitability, continuity, and treatment options.",
      "Prioritize it automatically over everything.",
      "Publish the system details."
    ],
    "answer": 1,
    "explanation": "Critical severity matters, but context still determines the business response."
  },
  {
    "question": "A fictional medium issue affects an internet-facing identity service with weak monitoring. Why might it be high priority?",
    "choices": [
      "The alert is red.",
      "Medium always means high.",
      "Exposure, asset value, weak controls, user impact, and detection limits may raise risk.",
      "The owner asked loudly."
    ],
    "answer": 2,
    "explanation": "Business priority depends on exposure, value, controls, and uncertainty."
  },
  {
    "question": "A fictional vulnerability cannot be fixed before maintenance. What is the strongest temporary plan?",
    "choices": [
      "Accept it permanently.",
      "Hide the finding.",
      "Disable monitoring.",
      "Use compensating controls, owner approval, monitoring, expiration, triggers, and a replacement deadline."
    ],
    "answer": 3,
    "explanation": "A controlled delay needs accountable temporary safeguards and reassessment."
  },
  {
    "question": "What should a fictional vulnerability exception include?",
    "choices": [
      "Reason, owner, authority, scope, expiration, compensating controls, monitoring, validation, and review trigger.",
      "Only the phrase accepted risk.",
      "No deadline.",
      "Only the scanner score."
    ],
    "answer": 0,
    "explanation": "Exceptions should be bounded, owned, monitored, and revisited."
  },
  {
    "question": "What should determine whether a fictional case becomes a declared incident?",
    "choices": [
      "Alert color.",
      "Evidence, impact, criticality, scope, uncertainty, criteria, and authorized ownership.",
      "Whether the service is offline.",
      "Whether a user is worried."
    ],
    "answer": 1,
    "explanation": "Incident declaration is an evidence-based governance decision."
  },
  {
    "question": "A fictional commander proposes disabling a critical service after one suspicious sign-in. Targeted controls are available and service is stable. What is strongest?",
    "choices": [
      "Disable everything.",
      "Ignore the sign-in.",
      "Use targeted, reversible, authorized controls while preserving service and continuing review.",
      "Wait for confirmed damage."
    ],
    "answer": 2,
    "explanation": "Containment should be proportionate to evidence, authority, risk, and continuity."
  },
  {
    "question": "A fictional ticket says containment complete, but an active session remains. What is the correct status?",
    "choices": [
      "Validated.",
      "Closed.",
      "No action needed.",
      "Containment is incomplete or not yet effective."
    ],
    "answer": 3,
    "explanation": "The intended effective state has not been reached."
  },
  {
    "question": "When is fictional incident closure strongest?",
    "choices": [
      "When alerts stop.",
      "When evidence, actions, access, configuration, source health, user state, service function, communication, owner signoff, monitoring, and residual risk are addressed.",
      "When the ticket closes.",
      "When service returns."
    ],
    "answer": 1,
    "explanation": "Closure requires validated technical and operational outcomes."
  },
  {
    "question": "Why should fictional incident decisions record authority?",
    "choices": [
      "To show who may declare, approve action, accept service impact, communicate, and accept residual risk.",
      "To make the report longer.",
      "To assign blame.",
      "To replace evidence."
    ],
    "answer": 0,
    "explanation": "Authority clarifies who is permitted to make each decision."
  },
  {
    "question": "Which fictional forensic statement is strongest?",
    "choices": [
      "Missing evidence proves deletion.",
      "One timestamp proves intent.",
      "The supplied evidence supports a defined conclusion within scope and does not prove activity outside that scope.",
      "Every artifact belongs to one actor."
    ],
    "answer": 2,
    "explanation": "Forensic conclusions should remain bounded by evidence and source limits."
  },
  {
    "question": "Why is a fictional evidence-handling record useful?",
    "choices": [
      "It proves the evidence is correct.",
      "It documents who handled evidence, when, why, how, and under which approved process.",
      "It confirms attacker identity.",
      "It replaces source-health review."
    ],
    "answer": 1,
    "explanation": "Handling records support accountability but do not automatically prove content accuracy."
  },
  {
    "question": "A fictional analyst receives a copied log excerpt without source details. How should it be used?",
    "choices": [
      "As final proof.",
      "As proof of actor identity.",
      "Delete it immediately.",
      "As unverified supporting material until provenance, integrity, time, collection, and ownership are established."
    ],
    "answer": 3,
    "explanation": "Evidence quality depends on provenance and context."
  },
  {
    "question": "A fictional artifact's timestamp conflicts with another source. What should happen?",
    "choices": [
      "Compare source clocks, time zones, metadata, collection paths, and document the unresolved limit.",
      "Pick the preferred timestamp.",
      "Delete both.",
      "Declare tampering."
    ],
    "answer": 0,
    "explanation": "Conflicts should be investigated and documented transparently."
  },
  {
    "question": "What does a fictional chain of evidence connect?",
    "choices": [
      "Only source to alert.",
      "Source record to observation, conclusion, decision, action, validation, and report statement.",
      "Alert color to severity.",
      "User name to intent."
    ],
    "answer": 1,
    "explanation": "Traceability should connect evidence through the entire reasoning and decision process."
  },
  {
    "question": "What does fictional cloud shared responsibility mean?",
    "choices": [
      "The provider owns every customer configuration.",
      "The customer owns every physical control.",
      "Responsibilities differ by service and should be mapped explicitly.",
      "No one owns inherited controls."
    ],
    "answer": 2,
    "explanation": "Cloud control ownership depends on the service model and responsibility boundary."
  },
  {
    "question": "A fictional broad cloud-storage policy is discovered. Which statement is strongest?",
    "choices": [
      "All data was disclosed.",
      "A serious control weakness and possible exposure are supported; successful access and disclosure need additional evidence.",
      "The provider caused a breach.",
      "Encryption makes it harmless."
    ],
    "answer": 1,
    "explanation": "Configuration weakness, exposure, access, and disclosure are distinct claims."
  },
  {
    "question": "A fictional cloud policy is restored, but the source-health monitor remains unhealthy. What is the strongest status?",
    "choices": [
      "Fully validated.",
      "Closed.",
      "Configuration corrected while monitoring validation remains incomplete.",
      "Zero residual uncertainty."
    ],
    "answer": 2,
    "explanation": "Control correction and monitoring assurance are separate outcomes."
  },
  {
    "question": "A fictional key is rotated, but an old application still depends on the previous key. What should happen?",
    "choices": [
      "Declare rotation validated.",
      "Review dependency, approved transition, service function, effective key use, rollback, and owner signoff.",
      "Ignore the application.",
      "Publish both keys."
    ],
    "answer": 1,
    "explanation": "Key rotation should be validated against dependencies and actual use."
  },
  {
    "question": "Which fictional cloud-remediation validation is strongest?",
    "choices": [
      "The policy file was edited.",
      "The console is quiet.",
      "The ticket is complete.",
      "Effective policy, approved identities, denied identities, logging, service function, and owner signoff are confirmed."
    ],
    "answer": 3,
    "explanation": "Validation should prove the effective state and required service behavior."
  },
  {
    "question": "What makes a fictional security policy useful?",
    "choices": [
      "It defines purpose, scope, responsibilities, requirements, exceptions, evidence, review, and enforcement.",
      "It is long.",
      "It has severe penalties.",
      "It assigns everything to security."
    ],
    "answer": 0,
    "explanation": "A useful policy creates clear, accountable, reviewable expectations."
  },
  {
    "question": "Which fictional risk statement is strongest?",
    "choices": [
      "Security is weak.",
      "A High alert exists.",
      "Because an expired supplier exception leaves unnecessary administrative access to a confidential service, unauthorized access or change could affect confidentiality and operations.",
      "The system may be hacked."
    ],
    "answer": 2,
    "explanation": "A complete risk statement connects asset, event, weakness, consequence, and impact."
  },
  {
    "question": "A fictional risk recommendation proposes monitoring only even though unsupported privileged access is confirmed. What is the strongest critique?",
    "choices": [
      "Monitoring is always enough.",
      "Monitoring alone does not reduce the current access weakness.",
      "Every account should be deleted.",
      "The risk should be ignored."
    ],
    "answer": 1,
    "explanation": "Confirmed high-impact capability usually needs corrective treatment in addition to monitoring."
  },
  {
    "question": "A fictional risk is accepted without an expiration or review trigger. What is missing?",
    "choices": [
      "A scanner score.",
      "A public announcement.",
      "A severe title.",
      "A time limit, monitoring, reassessment condition, rationale, and owner authority."
    ],
    "answer": 3,
    "explanation": "Risk acceptance should be bounded, owned, monitored, and revisited."
  },
  {
    "question": "What should a fictional risk recommendation include?",
    "choices": [
      "Options, rationale, owner, authority, priority, deadline, dependencies, continuity, rollback, validation, monitoring, and residual risk.",
      "Only the preferred fix.",
      "Only a severity score.",
      "No alternatives."
    ],
    "answer": 0,
    "explanation": "Decision-ready recommendations explain tradeoffs and accountability."
  },
  {
    "question": "What is the strongest fictional SOC handoff?",
    "choices": [
      "A screenshot.",
      "A case summary with evidence, source health, boundaries, findings, actions, owners, blockers, validation, and next decisions.",
      "Continue monitoring.",
      "Every raw alert."
    ],
    "answer": 1,
    "explanation": "A handoff should allow the next analyst to continue accurately and safely."
  },
  {
    "question": "A fictional SOC closes many cases quickly, but several reopen. Which metric needs improvement?",
    "choices": [
      "Closure speed only.",
      "Number of dashboards.",
      "Case quality and rework, including evidence, ownership, validation, and recurrence.",
      "Number of High alerts."
    ],
    "answer": 2,
    "explanation": "Fast closure is not useful when cases repeatedly reopen."
  },
  {
    "question": "A fictional queue contains one severe contained issue and one moderate issue affecting a critical identity service with weak visibility. What should determine priority?",
    "choices": [
      "Severity labels alone.",
      "Arrival order.",
      "Alert length.",
      "Evidence, asset value, exposure, controls, impact, uncertainty, continuity, and decision needs."
    ],
    "answer": 3,
    "explanation": "SOC priority is contextual and decision-focused."
  },
  {
    "question": "A fictional queue contains several alerts from one shift. What is the strongest first organizational step?",
    "choices": [
      "Review systems, identities, evidence, owners, service context, relationships, and priority before creating case structure.",
      "Merge them all.",
      "Close the lowest severity.",
      "Assign them all to one analyst."
    ],
    "answer": 0,
    "explanation": "Queue organization should follow evidence, context, and ownership."
  },
  {
    "question": "Why should a fictional SOC quality review include communication?",
    "choices": [
      "Because every case needs a public statement.",
      "Because accurate handoff, owner updates, user guidance, and leadership decisions affect case outcomes.",
      "Because communication replaces evidence.",
      "Because longer messages are better."
    ],
    "answer": 1,
    "explanation": "Communication quality affects coordination, action, trust, and closure."
  },
  {
    "question": "What is the strongest fictional lab safety boundary?",
    "choices": [
      "Use real systems only after changing names.",
      "Use supplied fictional evidence and avoid real credentials, suspicious content, unauthorized systems, and operational testing.",
      "Open real suspicious files in a personal account.",
      "Scan public systems without permission."
    ],
    "answer": 1,
    "explanation": "Intermediate labs should remain fictional, controlled, defensive, and authorized."
  },
  {
    "question": "A fictional lab groups records because they occurred during the same shift. What is the strongest correction?",
    "choices": [
      "Keep one case for simplicity.",
      "Delete the records.",
      "Separate them by systems, identities, sources, owners, actions, and impact limits.",
      "Choose the most severe alert as root cause."
    ],
    "answer": 2,
    "explanation": "Temporal proximity alone does not establish one case."
  },
  {
    "question": "What should a fictional lab decision log record?",
    "choices": [
      "Decision, evidence, alternatives, authority, owner, time, action, validation, and residual uncertainty.",
      "Only the final answer.",
      "Only severity.",
      "Only the analyst's opinion."
    ],
    "answer": 0,
    "explanation": "Decision logs make reasoning and authority traceable."
  },
  {
    "question": "A fictional lab correction is complete, but no service test exists. What is the strongest status?",
    "choices": [
      "Validated.",
      "Closed.",
      "Zero risk.",
      "Completed but not fully validated."
    ],
    "answer": 3,
    "explanation": "Action completion does not prove service outcome."
  },
  {
    "question": "Why should fictional lab reflections include feedback and revision?",
    "choices": [
      "To make the artifact longer.",
      "To show how reasoning changed, what improved, and what remains to learn.",
      "To replace evidence.",
      "To increase severity."
    ],
    "answer": 1,
    "explanation": "Reflection should demonstrate growth through specific revision evidence."
  },
  {
    "question": "What is the strongest evidence of fictional Intermediate readiness?",
    "choices": [
      "One perfect quiz.",
      "Finishing every page.",
      "Consistent recall, application, communication, validation, transfer, ethics, and portfolio evidence.",
      "Feeling confident."
    ],
    "answer": 2,
    "explanation": "Readiness requires several forms of demonstrated performance."
  },
  {
    "question": "A fictional learner performs well in quizzes but overstates impact in labs. What is the strongest conclusion?",
    "choices": [
      "Fully ready.",
      "Knowledge is strong, while applied impact-language review is still needed.",
      "The quizzes are invalid.",
      "The learner must restart everything."
    ],
    "answer": 1,
    "explanation": "Different evidence types measure different dimensions of readiness."
  },
  {
    "question": "Why should a fictional final review use delayed reassessment?",
    "choices": [
      "To confirm the repair can be recalled and transferred rather than repeated immediately.",
      "To make the process longer.",
      "Because immediate practice is useless.",
      "To avoid feedback."
    ],
    "answer": 0,
    "explanation": "Delayed reassessment tests durability and transfer."
  },
  {
    "question": "What is a fictional capstone blocker?",
    "choices": [
      "A spelling mistake.",
      "A design preference.",
      "A small score difference.",
      "A gap that prevents safe, accurate, or complete capstone work until corrected."
    ],
    "answer": 3,
    "explanation": "Blockers affect safe and reliable performance, not minor polish."
  },
  {
    "question": "A fictional learner misses one nested IAM path but performs strongly elsewhere. What is the strongest readiness decision?",
    "choices": [
      "Ignore the gap.",
      "Repeat the full track.",
      "Use targeted repair and reassessment before or during capstone entry.",
      "Declare perfect readiness."
    ],
    "answer": 2,
    "explanation": "Focused gaps can be repaired without ignoring them or restarting everything."
  },
  {
    "question": "What should a fictional defender portfolio artifact prove?",
    "choices": [
      "A specific learning claim supported by evidence, reasoning, validation, reflection, revision, and safe fictionalization.",
      "That the document is long.",
      "That every raw record was copied.",
      "That the scenario was severe."
    ],
    "answer": 0,
    "explanation": "A strong artifact makes a specific applied skill visible and traceable."
  },
  {
    "question": "Why should a fictional portfolio use selected evidence?",
    "choices": [
      "To hide weak evidence.",
      "To keep decision-changing records visible while moving supporting detail to an appendix.",
      "To remove traceability.",
      "To include only one record."
    ],
    "answer": 1,
    "explanation": "Evidence selection improves clarity without losing support."
  },
  {
    "question": "A fictional artifact has polished visuals but no learning claim. What is missing?",
    "choices": [
      "More colors.",
      "More screenshots.",
      "A clear statement of what skill the artifact demonstrates and how the evidence proves it.",
      "A longer title."
    ],
    "answer": 2,
    "explanation": "Visual design should support a defined learning claim."
  },
  {
    "question": "What should a fictional portfolio revision history record?",
    "choices": [
      "Only the final version.",
      "Every spelling change.",
      "Only reviewer names.",
      "Version, feedback, change, reason, result, and remaining issue."
    ],
    "answer": 3,
    "explanation": "Revision history should show meaningful growth and decision changes."
  },
  {
    "question": "What makes a fictional portfolio safe to share?",
    "choices": [
      "Every organization, system, identity, evidence item, incident, date, action, and outcome is invented.",
      "Only passwords are removed.",
      "The company name is changed.",
      "Real logs are shortened."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required for privacy and safety."
  },
  {
    "question": "What makes a fictional incident-report executive summary strong?",
    "choices": [
      "Every raw event appears first.",
      "It states the issue, confirmed facts, unconfirmed impact, actions, service state, residual risk, decision need, and next update.",
      "It repeats the alert title.",
      "It removes uncertainty."
    ],
    "answer": 1,
    "explanation": "The summary should be concise, accurate, and decision-ready."
  },
  {
    "question": "A fictional report says no data loss occurred because reviewed logs show none. What is missing?",
    "choices": [
      "A universal no-loss claim is unsupported; the report should state the reviewed scope and limits.",
      "A higher severity.",
      "The user's name.",
      "More screenshots."
    ],
    "answer": 0,
    "explanation": "Absence in covered evidence is not proof across all possible paths."
  },
  {
    "question": "Why should fictional findings use evidence identifiers?",
    "choices": [
      "To make the report technical.",
      "To replace explanations.",
      "To connect each conclusion to the supporting source and limitation.",
      "To increase document length."
    ],
    "answer": 2,
    "explanation": "Evidence identifiers improve traceability and review."
  },
  {
    "question": "Which fictional incident-report conclusion is strongest?",
    "choices": [
      "The actor compromised everything.",
      "Nothing happened.",
      "The dashboard proved one incident.",
      "The evidence supports several separate cases under one coordinated response; common cause remains unconfirmed."
    ],
    "answer": 3,
    "explanation": "The conclusion preserves coordination without inventing attribution."
  },
  {
    "question": "What should a fictional report record about recovery?",
    "choices": [
      "Only that the service returned.",
      "Actions, owners, dependencies, tests, validation results, monitoring, residual risk, and closure criteria.",
      "Only ticket numbers.",
      "Only the final timestamp."
    ],
    "answer": 1,
    "explanation": "Recovery reporting should show how the intended state was proven."
  },
  {
    "question": "What should be decided before creating a fictional security diagram?",
    "choices": [
      "Purpose, audience, question, scope, diagram type, evidence, privacy boundary, and success criteria.",
      "Color palette only.",
      "Number of icons.",
      "File size."
    ],
    "answer": 0,
    "explanation": "A diagram should begin with the decision or learning claim it supports."
  },
  {
    "question": "How should an unconfirmed fictional relationship appear?",
    "choices": [
      "As a solid arrow.",
      "As root cause.",
      "As a distinct unknown or assumption marker with evidence needed for confirmation.",
      "It should be hidden."
    ],
    "answer": 2,
    "explanation": "Visuals should preserve uncertainty explicitly."
  },
  {
    "question": "What makes a fictional flow arrow useful?",
    "choices": [
      "It is curved.",
      "It identifies direction, source, destination, purpose, data or event type, control point, and evidence.",
      "It is bright.",
      "It connects many systems."
    ],
    "answer": 1,
    "explanation": "A useful arrow communicates a supported relationship."
  },
  {
    "question": "A fictional diagram uses color alone to distinguish statuses. What should improve?",
    "choices": [
      "Use brighter colors.",
      "Remove labels.",
      "Use smaller text.",
      "Add labels, shapes, line patterns, legends, captions, and written summaries."
    ],
    "answer": 3,
    "explanation": "Accessible diagrams communicate through more than color."
  },
  {
    "question": "Why should fictional control markers include state?",
    "choices": [
      "Expected, observed, failed, corrected, and validated states are not equivalent.",
      "Every drawn control is effective.",
      "State is decorative.",
      "Only incident diagrams need it."
    ],
    "answer": 0,
    "explanation": "The existence of a control does not prove that it works."
  },
  {
    "question": "What makes a fictional risk statement complete?",
    "choices": [
      "A High label.",
      "Asset, harmful event, weakness, consequence, business impact, time horizon, and evidence boundary.",
      "An unsupported actor name.",
      "A scanner score."
    ],
    "answer": 1,
    "explanation": "A complete risk statement connects value, event, weakness, consequence, and impact."
  },
  {
    "question": "Why should technical severity not determine the entire fictional business priority?",
    "choices": [
      "Severity never matters.",
      "Only cost matters.",
      "Asset value, exposure, controls, continuity, users, feasibility, and residual risk also matter.",
      "Every finding is equal."
    ],
    "answer": 2,
    "explanation": "Risk priority combines technical and business context."
  },
  {
    "question": "Which fictional treatment is strongest when serious control weaknesses exist but services are stable?",
    "choices": [
      "Targeted reversible correction plus validation, monitoring, and longer-term improvement.",
      "Broad shutdown without review.",
      "Monitoring only.",
      "Permanent acceptance."
    ],
    "answer": 0,
    "explanation": "Treatment should reduce current risk proportionately while preserving necessary service."
  },
  {
    "question": "What does a fictional compensating control require?",
    "choices": [
      "No review.",
      "Permanent use.",
      "Only a policy statement.",
      "Purpose, limitation, owner, expiration, monitoring, validation, and replacement plan."
    ],
    "answer": 3,
    "explanation": "Temporary controls still require accountability and measurable effectiveness."
  },
  {
    "question": "When should fictional residual risk be reassessed?",
    "choices": [
      "Never after acceptance.",
      "After treatment, validation, meaningful condition changes, triggers, exceptions, or scheduled review.",
      "Only after an outage.",
      "Only when leadership asks."
    ],
    "answer": 1,
    "explanation": "Residual risk changes with controls, evidence, exposure, and business conditions."
  },
  {
    "question": "What should remain consistent across fictional audience summaries?",
    "choices": [
      "Exact wording.",
      "Exact length.",
      "Underlying facts, evidence limits, impact, actions, validation, status, and residual risk.",
      "Amount of technical detail."
    ],
    "answer": 2,
    "explanation": "Audience versions may change structure and detail, but not the supported facts."
  },
  {
    "question": "What belongs at the beginning of a fictional leadership update?",
    "choices": [
      "Current situation, impact, actions, service state, decision needed, owner, residual risk, and next update.",
      "Every raw field.",
      "A long timeline.",
      "Unexplained acronyms."
    ],
    "answer": 0,
    "explanation": "Leadership communication should be immediately decision-ready."
  },
  {
    "question": "How should one fictional link click be communicated to the user?",
    "choices": [
      "State confirmed click, evidence limits, safe action, support path, and next update without claiming compromise.",
      "State definite account takeover.",
      "Say nothing happened.",
      "Include other users' details."
    ],
    "answer": 0,
    "explanation": "The message should preserve both the confirmed interaction and impact limits."
  },
  {
    "question": "What makes a fictional action request clear?",
    "choices": [
      "Please investigate.",
      "A severe title.",
      "No named owner.",
      "Exact action, authorized owner, deadline, evidence needed, response channel, and validation."
    ],
    "answer": 3,
    "explanation": "A clear request tells the recipient what to do and how success is confirmed."
  },
  {
    "question": "Why should a fictional technical message include limitations?",
    "choices": [
      "To make it weaker.",
      "To prevent partial coverage or one observation from becoming a universal conclusion.",
      "Only analysts need limitations.",
      "Limitations replace recommendations."
    ],
    "answer": 1,
    "explanation": "Evidence limits support accurate audience decisions."
  },
  {
    "question": "What is the strongest evidence of fictional final readiness?",
    "choices": [
      "Completion.",
      "Confidence.",
      "One high score.",
      "Consistent recall, application, communication, ownership, validation, transfer, safety, portfolio quality, and reflection across multiple tasks."
    ],
    "answer": 3,
    "explanation": "Final readiness requires multiple dimensions of performance."
  },
  {
    "question": "What makes a fictional gap a capstone blocker?",
    "choices": [
      "It prevents safe, accurate, or complete capstone work until corrected.",
      "It affects formatting.",
      "It lowers one quiz slightly.",
      "It requires spelling revision."
    ],
    "answer": 0,
    "explanation": "A blocker affects safe or reliable performance."
  },
  {
    "question": "Why should fictional reassessment occur after a delay?",
    "choices": [
      "Immediate repetition is always enough.",
      "To test durable recall and transfer rather than short-term repetition.",
      "Only failed modules need it.",
      "It removes the need for evidence."
    ],
    "answer": 1,
    "explanation": "Delayed reassessment helps measure durable learning."
  },
  {
    "question": "What is the strongest repair for repeated completion-equals-validation errors?",
    "choices": [
      "Memorize the word validation.",
      "Close fewer tickets.",
      "Add effective-state, service, source, user, owner, communication, monitoring, and residual-risk checks to mixed artifacts.",
      "Remove corrective actions."
    ],
    "answer": 2,
    "explanation": "The repair should practice the full validation workflow."
  },
  {
    "question": "When may a fictional learner begin the capstone?",
    "choices": [
      "After no major safety or foundational blocker remains and targeted gaps have repair or reassessment plans.",
      "Immediately after reading the page.",
      "Only at perfect performance.",
      "Whenever the portfolio looks polished."
    ],
    "answer": 0,
    "explanation": "Capstone entry should be evidence-based and realistic."
  },
  {
    "question": "What is the strongest fictional capstone case structure?",
    "choices": [
      "One incident because all records occurred in one shift.",
      "Separate operational cases with evidence-supported relationships under one coordinated response.",
      "One case per alert color.",
      "No coordination."
    ],
    "answer": 1,
    "explanation": "Coordination and common cause are different ideas."
  },
  {
    "question": "A fictional Windows maintenance task matches the approved baseline. What should the report state?",
    "choices": [
      "Compromise is confirmed.",
      "Every Windows event is safe.",
      "The observed task is consistent with approved maintenance, while unrelated activity remains outside that conclusion.",
      "Monitoring can stop."
    ],
    "answer": 2,
    "explanation": "Baseline support should be stated precisely without overgeneralization."
  },
  {
    "question": "Why should fictional corrective actions and validation be recorded separately?",
    "choices": [
      "A completed change does not prove the intended effective state or service outcome.",
      "They always mean the same thing.",
      "Validation is only for cloud.",
      "Tickets prove closure."
    ],
    "answer": 0,
    "explanation": "Completion and validated outcome are different stages."
  },
  {
    "question": "When may a fictional coordinated response move to monitored follow-up?",
    "choices": [
      "When alerts stop.",
      "When tickets close.",
      "When service is online.",
      "After required access, configuration, source, user, service, owner, communication, monitoring, and residual-risk checks are validated."
    ],
    "answer": 3,
    "explanation": "Transition requires evidence-based closure criteria."
  },
  {
    "question": "What makes a fictional capstone safe to share?",
    "choices": [
      "Only passwords are removed.",
      "Every organization, system, identity, log, message, supplier, incident, date, action, and outcome is invented.",
      "Real records are shortened.",
      "The organization name is changed."
    ],
    "answer": 1,
    "explanation": "Complete fictionalization protects privacy and keeps the work safe."
  },
  {
    "question": "A fictional final report, diagram, and leadership brief use different residual-risk ratings. What is the strongest correction?",
    "choices": [
      "Keep all three because audiences differ.",
      "Delete the ratings.",
      "Use one approved timestamped residual-risk statement and explain any later changes explicitly.",
      "Choose the highest rating."
    ],
    "answer": 2,
    "explanation": "Audience adaptation should not create inconsistent facts or status."
  },
  {
    "question": "A fictional report says a supplier caused every case, but no shared identity, session, path, or evidence supports it. What should change?",
    "choices": [
      "State that cases were coordinated but common cause and attribution remain unconfirmed.",
      "Keep the claim for simplicity.",
      "Remove all cases.",
      "Add a severe label."
    ],
    "answer": 0,
    "explanation": "Attribution should never exceed the evidence."
  },
  {
    "question": "A fictional leadership decision approves a ninety-day improvement plan. What should the package include next?",
    "choices": [
      "Only the approval message.",
      "Owners, milestones, dependencies, validation, monitoring, escalation triggers, progress cadence, and reassessment.",
      "A closed status immediately.",
      "No residual risk."
    ],
    "answer": 1,
    "explanation": "Approved plans need accountable implementation and review."
  },
  {
    "question": "A fictional student misses several final-test questions in ownership, evidence limits, and validation. What is the strongest next step?",
    "choices": [
      "Memorize answer letters.",
      "Ignore the misses.",
      "Repeat only the easiest questions.",
      "Review the reasoning patterns, repair related artifacts, complete mixed practice, and reassess after a delay."
    ],
    "answer": 3,
    "explanation": "Targeted repair and delayed reassessment are stronger than memorization."
  },
  {
    "question": "What makes the complete fictional Intermediate Final Test and portfolio package professionally trustworthy?",
    "choices": [
      "It is long.",
      "It uses severe language.",
      "Its claims are traceable, evidence-limited, owner-aware, validated, internally consistent, revised, accessible, and fully fictional.",
      "It copies real organizational records."
    ],
    "answer": 2,
    "explanation": "Professional trust comes from traceability, accuracy, ownership, validation, consistency, revision, accessibility, and safety."
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

export default function IntermediateFinalTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              Final Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              125 Questions
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Full Track Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Intermediate Final Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete one hundred twenty-five questions covering all seventeen
            Intermediate modules, fictional data analysis, defensive workflows,
            written documentation, communication, validation, portfolio
            quality, and incident-response decision-making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: Practice Test 2
            </Link>

            <Link
              href={intermediatePath}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Final-Test Readiness"
          items={[
            "I completed or reviewed Modules I1 through I17 and both Intermediate practice tests.",
            "I reviewed recurring errors in evidence limits, case boundaries, ownership, impact language, communication, validation, and residual risk.",
            "I will complete all 125 questions before using the explanations for targeted review.",
            "I will choose proportionate, authorized, evidence-based, service-aware, and measurable defensive responses.",
            "I will use only fictional, privacy-safe, non-operational learning material.",
          ]}
        />

        <SectionCard
          eyebrow="Final-Test Instructions"
          title="Complete All 125 Questions in One Assessment"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Read the evidence boundary",
                "Identify the fictional system, identity, source, time, owner, service, and limitation before selecting an answer.",
              ],
              [
                "Separate claims",
                "Distinguish observations, supported conclusions, alternatives, possible impact, confirmed impact, and unknowns.",
              ],
              [
                "Check authority",
                "Confirm who may investigate, decide, act, communicate, validate, and accept residual risk.",
              ],
              [
                "Look for validation",
                "Prefer answers that define measurable effective-state, service, source, user, owner, monitoring, and closure checks.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-5"
              >
                <p className="font-bold text-cyan-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            This final assessment is intentionally broad. Work carefully,
            preserve fictional evidence limits, and avoid choosing an answer
            only because it sounds more technical, dramatic, or severe.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Intermediate Final Test: Exactly 125 Questions"
          questions={testQuestions}
        />

        <SectionCard eyebrow="Score Guide" title="Interpret Your Final-Test Result">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "115–125 correct",
                "Excellent Intermediate mastery. Review every missed explanation and preserve the strongest supporting portfolio evidence.",
              ],
              [
                "100–114 correct",
                "Strong readiness. Complete focused review of recurring misses before marking the track fully complete.",
              ],
              [
                "80–99 correct",
                "Developing full-track readiness. Revisit affected modules, repair related artifacts, and reassess.",
              ],
              [
                "0–79 correct",
                "Major review required. Rebuild the highest-impact domains before treating Intermediate mastery as complete.",
              ],
            ].map(([score, guidance]) => (
              <div
                key={score}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-200">{score}</h3>
                <p className="mt-2 text-sm leading-6">{guidance}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 leading-7 text-cyan-50">
            The final-test score is one readiness source. Complete Intermediate
            mastery should also include fictional labs, reports, diagrams,
            recommendations, communications, validation records, transfer
            tasks, reflections, revisions, and artifact-defense performance.
          </p>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Intermediate defensive decisions should remain evidence-based, proportionate, authorized, service-aware, and measurable.",
            "Shared timing does not prove common cause, identity, intent, or impact.",
            "Possible exposure, confirmed access, confirmed impact, and residual uncertainty are different claims.",
            "Action completion, validated outcome, closure, and zero residual risk are different states.",
            "Technical, service, leadership, user, supplier, teacher, and portfolio messages should preserve one approved fact set.",
            "Professional documentation depends on scope, traceability, ownership, consistency, validation, reflection, revision, and privacy.",
            "Every Intermediate assessment and portfolio artifact must remain fully fictional, defensive, authorized, and safe to share.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Intermediate Track Completion
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Review, Repair, Reassess, and Finalize the Portfolio
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-emerald-50">
            Record missed reasoning patterns, revise any related fictional
            artifacts, complete delayed reassessment, verify that all track
            links work, and confirm that the final Intermediate portfolio
            remains complete, consistent, validated, and privacy-safe.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: Practice Test 2
            </Link>

            <Link
              href={intermediatePath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Return to Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}