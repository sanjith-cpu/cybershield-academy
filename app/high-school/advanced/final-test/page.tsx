import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const advancedPath = "/high-school/advanced";
const previousPage = `${advancedPath}/practice-test-2`;

const testQuestions = [
  {
    "question": "A reviewer has written permission for one fictional lab but discovers a similar public system. What is the strongest professional action?",
    "choices": [
      "Test only one harmless request.",
      "Assume the same owner means the same scope.",
      "Treat public visibility as permission.",
      "Keep activity inside the approved lab and obtain explicit authorization before interacting with the other system."
    ],
    "answer": 3,
    "explanation": "Authorization is specific to the approved scope; public visibility or apparent similarity does not expand permission."
  },
  {
    "question": "A project owner verbally suggests expanding a defensive review beyond the written scope. What should happen first?",
    "choices": [
      "Update and confirm the authorization and scope before the additional activity begins.",
      "Use the old scope because documentation is optional.",
      "Expand only during off-hours.",
      "Begin immediately because the owner mentioned it."
    ],
    "answer": 0,
    "explanation": "Professional security work requires clear, current authorization and boundaries before scope changes."
  },
  {
    "question": "A student identifies a possible security issue in a fictional exercise. Which disclosure approach is strongest?",
    "choices": [
      "Document the evidence and report through the approved channel without exposing unnecessary sensitive details.",
      "Post the issue publicly first.",
      "Keep the issue secret permanently.",
      "Contact unrelated organizations for comparison."
    ],
    "answer": 0,
    "explanation": "Responsible disclosure protects users and owners while supporting safe correction and verification."
  },
  {
    "question": "Unexpected real personal information appears during a synthetic lab. What is the strongest response?",
    "choices": [
      "Copy the information into personal notes.",
      "Share it with classmates for analysis.",
      "Continue because the lab was originally fictional.",
      "Stop the affected activity, protect the information, and notify the responsible instructor or owner through the approved process."
    ],
    "answer": 3,
    "explanation": "Unexpected real data changes the privacy and authorization context and should trigger a stop-and-escalate response."
  },
  {
    "question": "A reviewer is asked to evaluate a system they personally helped design. What is the strongest handling of the conflict?",
    "choices": [
      "Refuse to document findings.",
      "Disclose the conflict and arrange independent review or additional oversight where appropriate.",
      "Approve the design automatically.",
      "Hide the connection to appear objective."
    ],
    "answer": 1,
    "explanation": "Conflicts of interest should be disclosed and managed so review quality and trust are protected."
  },
  {
    "question": "An AI tool proposes a security conclusion that is not supported by the available evidence. What should the student do?",
    "choices": [
      "Treat the output as a suggestion, verify it against evidence, and keep human responsibility for the final conclusion.",
      "Accept it because automation is more objective.",
      "Publish the conclusion without review.",
      "Remove the underlying evidence from the report."
    ],
    "answer": 0,
    "explanation": "AI and automation can assist analysis but do not replace evidence, authorization, or accountable human judgment."
  },
  {
    "question": "Why is defense in depth valuable in security architecture?",
    "choices": [
      "It means using the same control repeatedly.",
      "It guarantees no control will ever fail.",
      "It removes the need for monitoring.",
      "It reduces dependence on any single safeguard by combining preventive, detective, response, and recovery layers."
    ],
    "answer": 3,
    "explanation": "Layered controls make the architecture more resilient when one safeguard is bypassed, unavailable, or insufficient."
  },
  {
    "question": "What makes a connection a meaningful trust boundary?",
    "choices": [
      "The cable is physically long.",
      "Identity, privilege, data sensitivity, environment, or operational responsibility changes across it.",
      "The system names are different.",
      "The connection uses the internet."
    ],
    "answer": 1,
    "explanation": "Trust boundaries represent meaningful changes in trust or control that affect security decisions."
  },
  {
    "question": "A flat network allows every application tier to communicate with every other tier. What architectural improvement is strongest?",
    "choices": [
      "Allow even more connectivity for simplicity.",
      "Disable monitoring between tiers.",
      "Define required communication paths and segment unnecessary connections while preserving legitimate service flows.",
      "Remove identity controls."
    ],
    "answer": 2,
    "explanation": "Segmentation should limit unnecessary pathways without breaking approved business communication."
  },
  {
    "question": "What does identity-centered architecture emphasize?",
    "choices": [
      "Identity logs are optional.",
      "Access decisions should be tied to verified identities, roles, context, least privilege, and lifecycle rather than location alone.",
      "Internal network location is sufficient trust.",
      "Every authenticated identity should have broad access."
    ],
    "answer": 1,
    "explanation": "Modern architecture treats identity and authorization as central controls across environments."
  },
  {
    "question": "Why should logging be considered during architecture design rather than added later?",
    "choices": [
      "Critical events, identities, trust boundaries, and failure states need planned evidence paths so defenders can validate and investigate decisions.",
      "Logging is only useful after an incident.",
      "Architecture diagrams replace logs.",
      "More logs always guarantee better security."
    ],
    "answer": 0,
    "explanation": "Visibility by design helps ensure important security questions can actually be answered."
  },
  {
    "question": "A critical service depends on one component with no tested failover. What is the strongest architectural conclusion?",
    "choices": [
      "The component is a concentration dependency whose resilience and degraded-state behavior should be reviewed and tested.",
      "The service should be shut down permanently.",
      "Failover is unnecessary if the component is reliable today.",
      "The component is definitely vulnerable."
    ],
    "answer": 0,
    "explanation": "Resilience planning evaluates dependency concentration, failure impact, alternatives, recovery, and validation."
  },
  {
    "question": "What should a threat model identify before proposing mitigations?",
    "choices": [
      "Only the newest technology.",
      "Only the final risk rating.",
      "The important assets, trust boundaries, plausible threats, existing controls, assumptions, and potential impact.",
      "Only confirmed incidents."
    ],
    "answer": 2,
    "explanation": "Threat modeling begins with what matters, how it is exposed, and what plausible harmful conditions could affect it."
  },
  {
    "question": "Which statement best distinguishes a threat from a vulnerability?",
    "choices": [
      "A threat is a possible source or condition of harm, while a vulnerability is a weakness that could make harm easier or more likely.",
      "They are always the same thing.",
      "A threat is always a person.",
      "A vulnerability is always exploited."
    ],
    "answer": 0,
    "explanation": "Separating threats and weaknesses improves the clarity of risk and mitigation decisions."
  },
  {
    "question": "What is the safest purpose of an abuse case in threat modeling?",
    "choices": [
      "To teach step-by-step exploitation.",
      "To prove the misuse already occurred.",
      "To describe a plausible misuse outcome at a conceptual level so defenders can identify protections and evidence needs.",
      "To replace authorization requirements."
    ],
    "answer": 2,
    "explanation": "Abuse cases support defensive design without requiring offensive procedural detail."
  },
  {
    "question": "Two threat scenarios are plausible, but one affects a critical service and has weaker controls. Which should receive more attention?",
    "choices": [
      "Whichever has the longest description.",
      "Whichever scenario sounds more dramatic.",
      "The scenario with greater supported business impact and weaker effective controls, while uncertainty is documented.",
      "Both must always receive identical priority."
    ],
    "answer": 2,
    "explanation": "Threat prioritization should reflect impact, likelihood evidence, control strength, and uncertainty."
  },
  {
    "question": "A mitigation exists on paper, but no implementation evidence is available. How should the threat model treat it?",
    "choices": [
      "As an expected control whose implementation or effectiveness remains unvalidated.",
      "As irrelevant to the model.",
      "As proof that the threat is eliminated.",
      "As fully effective."
    ],
    "answer": 0,
    "explanation": "Control design and control implementation are different evidence states."
  },
  {
    "question": "A threat model assumes administrators use MFA, but the evidence package does not confirm it. What should the model do?",
    "choices": [
      "Label MFA as an assumption or expected control and identify validation needed before relying on it.",
      "Assume the absence of evidence proves MFA is disabled.",
      "Remove administrators from the model.",
      "State that MFA is confirmed."
    ],
    "answer": 0,
    "explanation": "Assumptions should be explicit so they are not mistaken for observed facts."
  },
  {
    "question": "What is the strongest purpose of network segmentation?",
    "choices": [
      "To prevent all outages.",
      "To eliminate identity controls.",
      "To make every internal system trust every other system.",
      "To limit unnecessary communication paths and reduce the effect of failures or security events between zones."
    ],
    "answer": 3,
    "explanation": "Segmentation reduces unnecessary reachability and supports focused policy and monitoring."
  },
  {
    "question": "A firewall rule allows a broad source range to reach a sensitive service even though only one management segment requires access. What should be reviewed?",
    "choices": [
      "Whether logging should be disabled.",
      "Whether the sensitive service should trust all internal sources.",
      "Whether the rule can be narrowed to the required source, destination, service, owner, and business purpose.",
      "Whether the rule can be opened to the entire network."
    ],
    "answer": 2,
    "explanation": "Network policy should reflect least privilege and documented communication requirements."
  },
  {
    "question": "Which remote-access design best supports advanced defense?",
    "choices": [
      "Disable remote-access logging.",
      "Provide full internal network access after one login.",
      "Allow permanent access for convenience.",
      "Provide authenticated, authorized access only to required resources with monitoring and lifecycle controls."
    ],
    "answer": 3,
    "explanation": "Secure remote access combines identity, authorization, bounded reachability, monitoring, and lifecycle governance."
  },
  {
    "question": "Why is a network baseline useful?",
    "choices": [
      "It documents expected communication patterns so unusual behavior can be compared with business and technical context.",
      "It replaces packet or log evidence.",
      "It guarantees the network is secure.",
      "It proves every deviation is malicious."
    ],
    "answer": 0,
    "explanation": "Baselines support contextual anomaly review but do not convert unusual behavior into automatic incident proof."
  },
  {
    "question": "A network monitoring source loses visibility into one segment. What should defenders do?",
    "choices": [
      "Declare an attack.",
      "Ignore the loss because other segments are visible.",
      "Mark the visibility gap, identify affected decisions, use alternate evidence where available, and restore or govern the gap.",
      "Assume the segment had no activity."
    ],
    "answer": 2,
    "explanation": "Monitoring gaps change evidence confidence and should be explicitly managed."
  },
  {
    "question": "A secure network design separates user, application, management, and recovery paths. What is the strongest reason?",
    "choices": [
      "Different trust, privilege, and operational purposes can receive appropriately bounded access and monitoring.",
      "The design guarantees zero risk.",
      "Segmentation removes the need for recovery testing.",
      "Every zone must use different hardware brands."
    ],
    "answer": 0,
    "explanation": "Security zones help align trust and access with different functions and consequences."
  },
  {
    "question": "What should come before writing detection logic?",
    "choices": [
      "The highest possible alert severity.",
      "A goal of maximizing alert count.",
      "A clear defensive question describing what condition matters and what decision the detection should support.",
      "The largest available dataset."
    ],
    "answer": 2,
    "explanation": "Detection engineering starts with a decision need, then chooses suitable evidence and logic."
  },
  {
    "question": "A detection identifies all synthetic test cases but also alerts on many normal approved events. Which quality problem is most obvious?",
    "choices": [
      "Insufficient data retention.",
      "Missing network segmentation.",
      "Low precision or excessive false positives.",
      "Weak cryptography."
    ],
    "answer": 2,
    "explanation": "A noisy detection can burden analysts even when it has good coverage."
  },
  {
    "question": "Why must detection logic consider source health?",
    "choices": [
      "Because healthy sources eliminate false positives.",
      "Because unhealthy sources prove malicious activity.",
      "Because delayed, partial, or unavailable telemetry changes confidence in both observed and missing events.",
      "Because source health replaces validation."
    ],
    "answer": 2,
    "explanation": "Detection quality depends on whether the evidence source can reliably support the intended question."
  },
  {
    "question": "What is the difference between alert severity and alert confidence?",
    "choices": [
      "Severity reflects potential consequence, while confidence reflects how strongly the evidence supports the interpretation.",
      "They are always identical.",
      "Severity measures source health only.",
      "Confidence measures business impact only."
    ],
    "answer": 0,
    "explanation": "Keeping severity and confidence separate improves triage and communication."
  },
  {
    "question": "A tuned rule produces fewer alerts. What additional evidence is needed before calling the tuning successful?",
    "choices": [
      "A higher default severity.",
      "Only the lower alert count.",
      "Validation that intended risky cases are still detected and agreed quality metrics improved without unacceptable coverage loss.",
      "A shorter rule name."
    ],
    "answer": 2,
    "explanation": "Tuning should reduce unwanted noise without destroying useful defensive coverage."
  },
  {
    "question": "What is the strongest way to validate a detection safely?",
    "choices": [
      "Trigger activity on an unrelated real service.",
      "Assume the logic is correct because it compiles.",
      "Use real credentials without permission.",
      "Use synthetic or approved test cases representing both expected and concerning conditions, then compare results with the intended logic."
    ],
    "answer": 3,
    "explanation": "Safe validation uses controlled synthetic evidence and checks both positive and negative behavior."
  },
  {
    "question": "What does SIEM correlation provide?",
    "choices": [
      "A guarantee that every source is complete.",
      "Automatic proof of root cause.",
      "A replacement for evidence provenance.",
      "A way to connect related records from multiple sources so analysts can review a stronger combined context."
    ],
    "answer": 3,
    "explanation": "Correlation improves context but still requires interpretation, source-health awareness, and bounded conclusions."
  },
  {
    "question": "What should triage determine first?",
    "choices": [
      "Whether every alert can be closed.",
      "The final incident root cause.",
      "Who should be blamed.",
      "What is confirmed, what impact may exist, what context is missing, and what action or evidence is needed next."
    ],
    "answer": 3,
    "explanation": "Triage prioritizes the next defensible decision rather than pretending the investigation is complete."
  },
  {
    "question": "When should an alert be escalated?",
    "choices": [
      "Whenever there is more than one log line.",
      "Never, because analysts should resolve every case alone.",
      "When evidence, impact, privilege, uncertainty, scope, or required authority exceeds the current analyst's decision boundary.",
      "Only when the alert is red."
    ],
    "answer": 2,
    "explanation": "Escalation is based on risk and decision authority, not cosmetic alert properties."
  },
  {
    "question": "Why are case notes important during alert triage?",
    "choices": [
      "They make alerts more severe.",
      "They replace raw evidence.",
      "They preserve evidence, reasoning, actions, owners, uncertainty, and handoffs so the decision path remains understandable.",
      "They should contain only the final answer."
    ],
    "answer": 2,
    "explanation": "Good case management supports continuity, accountability, and later review."
  },
  {
    "question": "Which dashboard metric is most useful for understanding alert quality?",
    "choices": [
      "Only analyst login time.",
      "Only total alert count.",
      "A combination of volume, duplicates, false positives, coverage, time-to-triage, escalation quality, and source health.",
      "Only the number of dashboards."
    ],
    "answer": 2,
    "explanation": "Quality requires multiple measures because raw volume alone can reward noise."
  },
  {
    "question": "A SIEM receives duplicate copies of the same synthetic event. What is the strongest improvement?",
    "choices": [
      "Ignore duplicates forever.",
      "Increase duplicate severity.",
      "Deduplicate or correlate the records while preserving provenance and verifying that distinct events are not incorrectly merged.",
      "Delete one source permanently without review."
    ],
    "answer": 2,
    "explanation": "Noise reduction should preserve evidence meaning and avoid hiding real distinct activity."
  },
  {
    "question": "What is the strongest purpose of incident-response preparation?",
    "choices": [
      "Define roles, communication, evidence handling, decision authority, playbooks, dependencies, and recovery expectations before a crisis.",
      "Predict every future incident exactly.",
      "Ensure every alert becomes an incident.",
      "Eliminate the need for judgment."
    ],
    "answer": 0,
    "explanation": "Preparation improves coordinated decision-making without assuming every situation will follow one script."
  },
  {
    "question": "An incident has one confirmed affected account and several uncertain related accounts. How should scope be described?",
    "choices": [
      "Ignore the uncertain accounts.",
      "Assume all accounts are affected.",
      "Confirm the known account and keep the others as candidates requiring evidence rather than declaring them affected.",
      "Close the incident because scope is incomplete."
    ],
    "answer": 2,
    "explanation": "Scoping should distinguish confirmed, suspected, excluded, and unknown elements."
  },
  {
    "question": "Which containment decision is strongest?",
    "choices": [
      "An undocumented action performed by anyone available.",
      "The most disruptive action available.",
      "A proportionate, authorized, evidence-preserving action that considers impact, continuity, reversibility, and reassessment.",
      "No action until absolute certainty exists."
    ],
    "answer": 2,
    "explanation": "Containment balances security risk with operational consequences and evidence needs."
  },
  {
    "question": "Why should incident responders preserve original evidence before making changes?",
    "choices": [
      "Because containment is always forbidden.",
      "Because evidence should never be copied.",
      "Because originals must be made public.",
      "To protect the information needed for investigation, accountability, timeline reconstruction, and later review."
    ],
    "answer": 3,
    "explanation": "Evidence preservation helps ensure response actions do not destroy the basis for later conclusions."
  },
  {
    "question": "Service availability returns after containment. What should happen before declaring recovery complete?",
    "choices": [
      "Close immediately because users can log in.",
      "Delete incident records.",
      "Validate defined recovery criteria across service health, identity, configuration, monitoring, dependencies, and residual risk.",
      "Assume containment proved root cause."
    ],
    "answer": 2,
    "explanation": "Recovery means returning to a trusted state, not simply restoring one availability signal."
  },
  {
    "question": "What should a post-incident review focus on?",
    "choices": [
      "Removing all uncertainty from the report.",
      "What happened, what evidence supported decisions, what worked, what failed, what remains uncertain, and what improvements have owners and deadlines.",
      "Assigning blame to one person.",
      "Avoiding discussion of failed controls."
    ],
    "answer": 1,
    "explanation": "Post-incident learning improves systems, processes, evidence, and governance."
  },
  {
    "question": "What should a forensic question define before evidence review begins?",
    "choices": [
      "The authorized scope, specific question, relevant time range, evidence types, and privacy boundaries.",
      "A plan to collect as much information as possible.",
      "Every device in the organization.",
      "A preferred conclusion."
    ],
    "answer": 0,
    "explanation": "Forensic work should be question-driven, authorized, scoped, and privacy-aware."
  },
  {
    "question": "What is chain of custody used for?",
    "choices": [
      "Replacing technical analysis.",
      "Documenting how evidence was collected, handled, transferred, stored, and preserved.",
      "Changing evidence timestamps.",
      "Proving that every artifact is malicious."
    ],
    "answer": 1,
    "explanation": "Chain of custody supports integrity and accountability across the evidence lifecycle."
  },
  {
    "question": "Two systems record related events using different clock settings. What should the timeline analyst do?",
    "choices": [
      "Treat the difference as proof of tampering.",
      "Change the originals to one time.",
      "Preserve original times, document clock differences, normalize cautiously, and state timing uncertainty.",
      "Discard the system with the older clock."
    ],
    "answer": 2,
    "explanation": "Timeline analysis should explain normalization rather than alter original evidence."
  },
  {
    "question": "What is the safest use of endpoint artifacts in a school forensic exercise?",
    "choices": [
      "Use fictional or synthetic artifact descriptions to reason about what evidence could support a question.",
      "Bypass access controls to obtain more evidence.",
      "Extract private data from a real student's device.",
      "Search unrelated accounts for context."
    ],
    "answer": 0,
    "explanation": "Forensic learning can teach evidence reasoning without invasive collection from real systems or people."
  },
  {
    "question": "A browser record shows access to a page, while an account record shows a login around the same time. What is the strongest conclusion?",
    "choices": [
      "The browser event proves the login was malicious.",
      "The events may be related, but identity, session, timing, and source context are needed before claiming one caused or proves the other.",
      "The two records are automatically unrelated.",
      "The login proves who viewed the page."
    ],
    "answer": 1,
    "explanation": "Forensic correlation should preserve the distinction between temporal association and stronger attribution."
  },
  {
    "question": "What makes a forensic report strong?",
    "choices": [
      "It includes unnecessary private details.",
      "It separates observed evidence, methods, timeline, interpretations, limitations, confidence, and unanswered questions.",
      "It states one theory as certain from the beginning.",
      "It excludes source limitations."
    ],
    "answer": 1,
    "explanation": "Professional forensic reporting makes the evidence trail and uncertainty visible."
  },
  {
    "question": "Why are malware behavior categories useful to defenders?",
    "choices": [
      "They prove a specific sample is malicious.",
      "They provide instructions for building malware.",
      "They replace endpoint evidence.",
      "They help organize prevention, detection, containment, recovery, and communication without requiring offensive execution details."
    ],
    "answer": 3,
    "explanation": "Behavior categories are defensive abstractions that help teams plan controls and response."
  },
  {
    "question": "One synthetic indicator appears on an endpoint with no supporting context. What is the strongest interpretation?",
    "choices": [
      "Assume the entire network is affected.",
      "Ignore the indicator permanently.",
      "Declare a confirmed compromise.",
      "Treat it as a potentially relevant indicator and seek supporting endpoint, identity, network, or application evidence before determining incident status."
    ],
    "answer": 3,
    "explanation": "Indicators gain meaning through context and correlation; one signal may be ambiguous."
  },
  {
    "question": "A managed fictional endpoint raises a suspicious-file alert. What is the strongest defensive response?",
    "choices": [
      "Disable endpoint protection.",
      "Preserve the alert and evidence, follow approved containment, and use the incident-response process without opening the suspicious file.",
      "Send the file to classmates.",
      "Run the file to observe behavior."
    ],
    "answer": 1,
    "explanation": "Malware defense emphasizes safe handling, containment, evidence preservation, recovery, and communication."
  },
  {
    "question": "Why might network containment be useful during a malware-related incident?",
    "choices": [
      "It should always disconnect the entire organization.",
      "It can limit unnecessary communication while preserving required investigation and recovery paths when authorized and proportionate.",
      "It eliminates the need for endpoint containment.",
      "It proves the malware source."
    ],
    "answer": 1,
    "explanation": "Network containment is one risk-reduction option and should be matched to evidence, scope, and continuity needs."
  },
  {
    "question": "Why are recent backups not enough by themselves for malware recovery?",
    "choices": [
      "Recovery also requires trustworthy restoration, clean configurations, identity controls, dependency validation, monitoring, and evidence that the restored state is acceptable.",
      "Backups eliminate the need for monitoring.",
      "Backups always contain malware.",
      "Recovery ends when a backup job succeeds."
    ],
    "answer": 0,
    "explanation": "Backup availability and trusted restoration are different recovery claims."
  },
  {
    "question": "A user reports a suspicious message before interacting with it. Why is that valuable?",
    "choices": [
      "It proves the message is malicious.",
      "Early reporting can provide evidence and allow defenders to review related risk before harm occurs.",
      "It eliminates the need for email controls.",
      "It means the user should investigate independently."
    ],
    "answer": 1,
    "explanation": "User reporting is an important detection input but still requires evidence-based review."
  },
  {
    "question": "What is the strongest session-management principle after authentication?",
    "choices": [
      "Keep every session permanent.",
      "Use bounded, protected sessions with appropriate expiration, renewal, revocation, and context controls.",
      "Treat authentication as unlimited authorization.",
      "Store session values publicly."
    ],
    "answer": 1,
    "explanation": "Session design should limit exposure and support lifecycle control after login."
  },
  {
    "question": "A user is authenticated but requests another user's protected record. What control must decide whether access is allowed?",
    "choices": [
      "Authorization for the requested object and action.",
      "Backup retention.",
      "Page styling.",
      "DNS resolution."
    ],
    "answer": 0,
    "explanation": "Authentication establishes identity; authorization determines whether that identity may perform the requested action."
  },
  {
    "question": "What is the strongest way to handle untrusted web input?",
    "choices": [
      "Disable error handling.",
      "Trust it after login.",
      "Validate it for the intended context and safely encode or handle output where necessary.",
      "Store it everywhere without review."
    ],
    "answer": 2,
    "explanation": "Secure web design treats external input as untrusted and applies context-appropriate controls."
  },
  {
    "question": "An API accepts a valid token but does not verify whether the caller may access a specific object. What is missing?",
    "choices": [
      "Hash rotation.",
      "Certificate renewal.",
      "Network backup.",
      "Object-level authorization."
    ],
    "answer": 3,
    "explanation": "A valid token identifies a caller but does not grant automatic access to every object."
  },
  {
    "question": "What is the defensive purpose of browser security headers conceptually?",
    "choices": [
      "They allow users to ignore certificate warnings.",
      "They help browsers enforce intended security behavior and reduce classes of unsafe content or transport behavior when correctly configured.",
      "They replace server-side authorization.",
      "They guarantee the application has no vulnerabilities."
    ],
    "answer": 1,
    "explanation": "Browser protections are supporting controls, not substitutes for application security architecture."
  },
  {
    "question": "Where should web-application secrets be managed?",
    "choices": [
      "In an approved secrets-management process with restricted access, lifecycle control, and rotation rather than embedded in source code.",
      "In shared chat messages.",
      "Inside public client-side code.",
      "In permanent hard-coded constants."
    ],
    "answer": 0,
    "explanation": "Secrets should be independently protected and governed throughout their lifecycle."
  },
  {
    "question": "When should software security requirements be defined?",
    "choices": [
      "Early in the development lifecycle and revisited as design, dependencies, deployment, and risk change.",
      "Only after production incidents.",
      "Only after coding is complete.",
      "Never, because testing finds everything."
    ],
    "answer": 0,
    "explanation": "Security requirements guide architecture and validation more effectively when they are part of the lifecycle from the beginning."
  },
  {
    "question": "Which secure-design requirement is strongest?",
    "choices": [
      "Users should be careful.",
      "The application should be secure.",
      "Use modern technology.",
      "Privileged administrative actions must require authorized roles and produce reviewable audit evidence."
    ],
    "answer": 3,
    "explanation": "Good requirements are specific enough to guide design and later validation."
  },
  {
    "question": "Why should software threat modeling occur before implementation is finished?",
    "choices": [
      "Threat modeling proves all code is safe.",
      "Design changes are often easier and safer when trust boundaries, assets, misuse conditions, and control needs are identified early.",
      "It is only useful after deployment.",
      "It removes the need for testing."
    ],
    "answer": 1,
    "explanation": "Early threat modeling can influence architecture before weaknesses become expensive to redesign."
  },
  {
    "question": "A secret is removed from the latest source-code commit after accidental exposure. What should happen next?",
    "choices": [
      "Publish the old value for transparency.",
      "Assume deletion from the latest commit solved the issue.",
      "Treat it as potentially exposed, rotate it through the approved process, and review repository access/history as appropriate.",
      "Reuse the secret elsewhere."
    ],
    "answer": 2,
    "explanation": "Deleting a secret from the current version does not guarantee it disappeared from history or prior copies."
  },
  {
    "question": "A critical library is no longer maintained. What is the strongest supply-chain response?",
    "choices": [
      "Keep it forever because it still works.",
      "Delete it immediately without testing.",
      "Assess dependency exposure, alternatives, ownership, compensating controls, and a planned migration or replacement path.",
      "Ignore it until an incident occurs."
    ],
    "answer": 2,
    "explanation": "Dependency risk should be inventoried, owned, treated, and reassessed rather than ignored or changed recklessly."
  },
  {
    "question": "How should secure error handling balance operations and security?",
    "choices": [
      "Disable error logging entirely.",
      "Give users safe messages while recording only the protected diagnostic context needed by authorized defenders.",
      "Show full internal stack details to every user.",
      "Log every sensitive field forever."
    ],
    "answer": 1,
    "explanation": "Errors should support diagnosis without unnecessarily exposing internals or sensitive information."
  },
  {
    "question": "What is the strongest interpretation of cloud shared responsibility?",
    "choices": [
      "Provider capabilities and customer-controlled identity, configuration, data, monitoring, recovery, and governance responsibilities must be distinguished.",
      "Responsibility disappears because it is shared.",
      "The customer owns the provider's physical facilities.",
      "The provider owns all security decisions."
    ],
    "answer": 0,
    "explanation": "Cloud security requires clarity about who controls each security decision and what evidence demonstrates it."
  },
  {
    "question": "A cloud role can administer resources unrelated to its documented job. What is the strongest review focus?",
    "choices": [
      "Whether the role name sounds privileged.",
      "Whether the cloud provider is popular.",
      "Whether authorization can be reduced to the minimum resources and actions required for the role's purpose.",
      "Whether the user has MFA."
    ],
    "answer": 2,
    "explanation": "Least-privilege review compares documented purpose with current authorization scope."
  },
  {
    "question": "A storage service encrypts data at rest but has broad sharing configured. What is the strongest conclusion?",
    "choices": [
      "The storage service is automatically insecure.",
      "Encryption is useful, but access, sharing, classification, monitoring, retention, and ownership still require governance.",
      "Encryption makes broad sharing safe.",
      "Sharing controls are unnecessary in the cloud."
    ],
    "answer": 1,
    "explanation": "Encryption and authorization address different risks and should be evaluated separately."
  },
  {
    "question": "Why should cloud network boundaries be documented?",
    "choices": [
      "They clarify intended communication, trust changes, control ownership, monitoring points, and degraded-state behavior.",
      "They prove every connection is safe.",
      "They are only useful for billing.",
      "They replace cloud IAM."
    ],
    "answer": 0,
    "explanation": "Cloud architecture still depends on clear trust and communication boundaries."
  },
  {
    "question": "The cloud provider offers detailed audit logs, but the customer has not enabled the required category. What does that show?",
    "choices": [
      "The absence proves malicious activity.",
      "Provider capability exists, but the customer-controlled logging requirement is not currently satisfied.",
      "The provider is responsible for the missing logs.",
      "Audit logging is optional for all cloud designs."
    ],
    "answer": 1,
    "explanation": "Shared responsibility separates feature availability from customer configuration and evidence."
  },
  {
    "question": "Current cloud backups exist, but the environment changed significantly after the last restoration test. What is the strongest next step?",
    "choices": [
      "Refresh recovery validation because material architecture change can make older restoration evidence less representative.",
      "Ignore architecture changes if backup jobs succeed.",
      "Assume backups prove recovery readiness.",
      "Delete the old test record."
    ],
    "answer": 0,
    "explanation": "Recovery evidence should be reassessed when material dependencies or configurations change."
  },
  {
    "question": "Why is identity sometimes described as a security perimeter?",
    "choices": [
      "Because access decisions increasingly depend on who or what is requesting access, its context, privileges, and lifecycle across distributed systems.",
      "Because identity removes the need for authorization.",
      "Because network controls are never useful.",
      "Because every identity should be trusted after login."
    ],
    "answer": 0,
    "explanation": "Identity controls span cloud, applications, remote access, workloads, and administrative actions."
  },
  {
    "question": "Which statement best reflects zero-trust thinking?",
    "choices": [
      "Deny every request permanently.",
      "Do not grant implicit trust based only on network location; evaluate identity, context, policy, resource sensitivity, and least privilege for access decisions.",
      "Trust all internal users automatically.",
      "Require one password and no other context."
    ],
    "answer": 1,
    "explanation": "Zero-trust strategy reduces implicit trust rather than eliminating all access."
  },
  {
    "question": "What is the main security question in federation?",
    "choices": [
      "Whether both organizations use the same logo.",
      "Whether users have identical passwords.",
      "Whether federation eliminates access reviews.",
      "How identities and authentication claims from one trust domain are accepted, mapped, authorized, monitored, and governed by another."
    ],
    "answer": 3,
    "explanation": "Federation extends trust across domains and therefore needs clear claim, mapping, authorization, lifecycle, and monitoring controls."
  },
  {
    "question": "What is the purpose of conditional access?",
    "choices": [
      "To guarantee every authenticated user access.",
      "To replace role design permanently.",
      "To evaluate additional context such as identity, device, risk, location, or resource sensitivity when making access decisions.",
      "To disable MFA."
    ],
    "answer": 2,
    "explanation": "Conditional access adds context to authorization decisions rather than relying on one factor alone."
  },
  {
    "question": "When is attribute-based access control most useful conceptually?",
    "choices": [
      "When access decisions need to consider characteristics of the user, resource, action, or environment in addition to or instead of fixed roles.",
      "When no policy is needed.",
      "When access should never change.",
      "When every user should have identical permissions."
    ],
    "answer": 0,
    "explanation": "ABAC can express contextual policy where static role membership alone is insufficient."
  },
  {
    "question": "What is the strongest privileged-access principle?",
    "choices": [
      "Use one shared administrator account.",
      "Keep privileged access permanent for convenience.",
      "Disable privileged-event logging.",
      "Use named, strongly authenticated, least-privilege access with approval, monitoring, limited duration where appropriate, and reviewable evidence."
    ],
    "answer": 3,
    "explanation": "Privileged access requires stronger accountability because consequences are higher."
  },
  {
    "question": "What is the conceptual difference between symmetric and asymmetric encryption?",
    "choices": [
      "Asymmetric encryption is the same as hashing.",
      "Symmetric encryption uses no keys.",
      "Symmetric encryption uses a shared secret key, while asymmetric encryption uses a related public/private key pair.",
      "Only asymmetric encryption can protect data."
    ],
    "answer": 2,
    "explanation": "The two approaches use different key models and are selected according to security and operational needs."
  },
  {
    "question": "Why are salts used with password hashing conceptually?",
    "choices": [
      "They replace hashing.",
      "They make identical passwords produce different hash results and reduce the usefulness of precomputed comparisons.",
      "They make passwords reversible.",
      "They allow passwords to be stored in plaintext."
    ],
    "answer": 1,
    "explanation": "Salting strengthens password-storage design without turning hashing into encryption."
  },
  {
    "question": "What does a digital signature primarily support?",
    "choices": [
      "Permanent secrecy of the signed data.",
      "Password recovery.",
      "Verification that data was signed by the holder of the corresponding private key and that signed content has not been altered.",
      "Network segmentation."
    ],
    "answer": 2,
    "explanation": "Digital signatures support authenticity and integrity rather than confidentiality by themselves."
  },
  {
    "question": "What does a certificate help establish?",
    "choices": [
      "That private keys can be shared publicly.",
      "That a website's content is always honest.",
      "A binding between identity information and a public key through a trust framework that must still be validated and governed.",
      "That authorization is unnecessary."
    ],
    "answer": 2,
    "explanation": "Certificates support identity and key trust, but they do not guarantee every aspect of application safety."
  },
  {
    "question": "Why should cryptographic keys have controlled storage and rotation?",
    "choices": [
      "So keys can be reused forever.",
      "To eliminate access control.",
      "So all keys can be public.",
      "To limit unauthorized access, manage lifecycle, reduce long-lived exposure, and support replacement when risk or policy requires it."
    ],
    "answer": 3,
    "explanation": "Key management is often as important as the algorithm because poor key handling can undermine strong cryptography."
  },
  {
    "question": "What is the strongest distinction between encryption in transit and encryption at rest?",
    "choices": [
      "They are identical controls.",
      "Encryption in transit replaces access control.",
      "They protect data in different states and should be evaluated separately along with identity, authorization, and key management.",
      "Encryption at rest guarantees safe sharing."
    ],
    "answer": 2,
    "explanation": "Protecting one state does not automatically protect every other state or access pathway."
  },
  {
    "question": "What makes a risk-register entry useful?",
    "choices": [
      "It contains no owner so decisions stay flexible.",
      "It clearly identifies the condition, affected asset or outcome, likelihood/impact basis, controls, owner, treatment, residual risk, and review trigger.",
      "It only assigns a color.",
      "It removes uncertainty."
    ],
    "answer": 1,
    "explanation": "Risk registers should support accountable decisions rather than merely categorize concerns."
  },
  {
    "question": "Evidence about likelihood is incomplete but potential impact is high. What is the strongest risk statement?",
    "choices": [
      "Remove the risk until certainty exists.",
      "Set likelihood to High because impact is High.",
      "Keep the high impact visible, document likelihood uncertainty, and avoid pretending an unsupported precise probability is known.",
      "Set the entire risk to Low."
    ],
    "answer": 2,
    "explanation": "Likelihood and impact are different dimensions and uncertainty should be explicit."
  },
  {
    "question": "What is the difference between control existence and control effectiveness?",
    "choices": [
      "Policies always prove effectiveness.",
      "A control may be documented or deployed without evidence that it operates consistently enough to reduce the intended risk.",
      "There is no difference.",
      "Effective controls never need testing."
    ],
    "answer": 1,
    "explanation": "Control testing evaluates whether a safeguard works as expected rather than merely exists."
  },
  {
    "question": "What is the strongest use of a compliance framework?",
    "choices": [
      "Ignore business context completely.",
      "Use it only after incidents.",
      "Treat it as proof that every compliant system is secure.",
      "Use it as an organized set of requirements or practices that informs governance and evidence, while still making risk decisions based on the organization's context."
    ],
    "answer": 3,
    "explanation": "Compliance frameworks support structured governance but do not replace risk management or evidence."
  },
  {
    "question": "Which audit evidence is strongest for a quarterly access-review requirement?",
    "choices": [
      "An old presentation describing the process.",
      "A policy that says reviews should happen.",
      "A recent completed review showing scope, reviewer, decisions, changes, exceptions, and completion evidence.",
      "A verbal statement that reviews usually happen."
    ],
    "answer": 2,
    "explanation": "Audits need evidence of implementation, not only design intent."
  },
  {
    "question": "How should a temporary risk acceptance be governed?",
    "choices": [
      "Extend it forever automatically.",
      "Record the residual risk, authorized owner, rationale, duration, compensating controls if any, and a trigger for reassessment.",
      "Delete the risk from the register.",
      "Stop monitoring the related control."
    ],
    "answer": 1,
    "explanation": "Risk acceptance is a documented, accountable, reviewable decision rather than silent inaction."
  },
  {
    "question": "What does data minimization require?",
    "choices": [
      "Collect and retain only the amount and sensitivity of data needed for the defined legitimate purpose.",
      "Collect every available field.",
      "Make all data public.",
      "Delete all security evidence immediately."
    ],
    "answer": 0,
    "explanation": "Minimization reduces unnecessary privacy exposure while preserving the legitimate function."
  },
  {
    "question": "Why is a data inventory important?",
    "choices": [
      "It is only useful for storage costs.",
      "It proves all data is accurate.",
      "It helps identify what data exists, where it flows, who owns it, why it is used, how sensitive it is, and what lifecycle controls apply.",
      "It replaces access control."
    ],
    "answer": 2,
    "explanation": "Privacy engineering depends on understanding the data lifecycle and responsibility."
  },
  {
    "question": "A new use of previously collected data differs from the purpose users were originally told about. What should happen?",
    "choices": [
      "Publish it first.",
      "Reuse it automatically because it already exists.",
      "Ignore user expectations.",
      "Review the new purpose, expectations, authority or consent requirements, proportionality, and governance before reusing the data."
    ],
    "answer": 3,
    "explanation": "Purpose change can create new privacy risks and governance obligations."
  },
  {
    "question": "A dataset has reached the end of its justified retention period. What is the strongest next step?",
    "choices": [
      "Share it widely before deletion.",
      "Remove all audit evidence about it.",
      "Keep it forever because storage is cheap.",
      "Apply the approved lifecycle: determine whether another legitimate requirement exists and otherwise delete, anonymize, or archive as policy allows."
    ],
    "answer": 3,
    "explanation": "Retention should remain connected to purpose and defined governance requirements."
  },
  {
    "question": "What should a privacy-risk assessment connect?",
    "choices": [
      "Only security severity.",
      "Data purpose, sensitivity, people affected, collection, access, sharing, retention, controls, consequences, uncertainty, and mitigation.",
      "Only the number of database tables.",
      "Only legal terminology."
    ],
    "answer": 1,
    "explanation": "Privacy risk is a lifecycle and people-impact question, not merely a technical inventory."
  },
  {
    "question": "What does privacy by design mean?",
    "choices": [
      "Collect everything first and decide later.",
      "Treat privacy as a user-interface setting only.",
      "Build purpose limitation, minimization, access, transparency, retention, and lifecycle safeguards into the system rather than adding them only after deployment.",
      "Remove security monitoring entirely."
    ],
    "answer": 2,
    "explanation": "Privacy by design integrates privacy decisions into architecture and product development from the beginning."
  },
  {
    "question": "Why is security automation useful?",
    "choices": [
      "It guarantees every decision is correct.",
      "It can handle repeatable, well-defined, low-risk tasks consistently and free humans to focus on judgment-intensive decisions.",
      "It should have unlimited permissions.",
      "It eliminates the need for analysts."
    ],
    "answer": 1,
    "explanation": "Automation is most valuable when its scope, safeguards, owners, and failure modes are well understood."
  },
  {
    "question": "Which decision should most clearly remain with a human when evidence is weak?",
    "choices": [
      "Formatting a ticket title.",
      "Looking up a synthetic asset owner.",
      "A consequential containment or account-disabling decision whose impact and confidence require judgment.",
      "Adding a timestamp to a case."
    ],
    "answer": 2,
    "explanation": "High-impact or uncertain actions need accountable human review unless very strong safeguards justify automation."
  },
  {
    "question": "What is alert enrichment?",
    "choices": [
      "Deleting raw evidence.",
      "Adding approved contextual information such as asset, identity, business, or source-health data to support analyst decisions.",
      "Automatically proving an alert is malicious.",
      "Increasing every alert's severity."
    ],
    "answer": 1,
    "explanation": "Enrichment improves context but does not replace analyst interpretation or source validation."
  },
  {
    "question": "What is the strongest purpose of ticketing automation?",
    "choices": [
      "Remove audit history.",
      "Hide unresolved cases.",
      "Close every alert automatically.",
      "Consistently create, route, update, and document workflow tasks while preserving ownership and human review where needed."
    ],
    "answer": 3,
    "explanation": "Workflow automation should improve coordination and consistency, not erase accountability."
  },
  {
    "question": "An enrichment service becomes unavailable. How should the automation behave?",
    "choices": [
      "Fail visibly, mark the context Unknown or unavailable, preserve the case, and follow the defined degraded-state process.",
      "Treat every alert as confirmed.",
      "Invent the missing value.",
      "Close the case automatically."
    ],
    "answer": 0,
    "explanation": "Safe automation should never convert missing context into silent false certainty."
  },
  {
    "question": "Which combination best measures automation value?",
    "choices": [
      "Only the number of scripts.",
      "Only how fast the code runs.",
      "Only automated action count.",
      "Time saved, accuracy, error rate, analyst workload, exception handling, safe completion, and outcome quality."
    ],
    "answer": 3,
    "explanation": "Automation quality is about useful, safe outcomes rather than raw activity volume."
  },
  {
    "question": "Three synthetic sources disagree about the timing of an event. What is the strongest multi-source analysis response?",
    "choices": [
      "Preserve each source, compare provenance and clock context, identify what each can support, and document unresolved timing differences.",
      "Average the timestamps and call that exact.",
      "Delete the outlier source.",
      "Choose the source that supports the preferred theory."
    ],
    "answer": 0,
    "explanation": "Advanced labs emphasize evidence comparison and uncertainty rather than forced agreement."
  },
  {
    "question": "An architecture review finds one management path that crosses several trust boundaries with broad privileges. What is the strongest defensive recommendation?",
    "choices": [
      "Review whether the path can be segmented and privilege reduced while preserving required administration and recovery functions.",
      "Disable all management access.",
      "Remove monitoring to reduce complexity.",
      "Trust the path because it is administrative."
    ],
    "answer": 0,
    "explanation": "Architecture recommendations should address the identified condition without creating unsupported or disruptive changes."
  },
  {
    "question": "A cloud review finds that provider-side encryption is enabled but customer access reviews are stale. What is the strongest finding?",
    "choices": [
      "The provider must perform the customer's access review.",
      "Encryption is irrelevant.",
      "Encryption is a strength, while customer authorization governance needs refreshed evidence and ownership.",
      "The cloud service is fully secure."
    ],
    "answer": 2,
    "explanation": "Applied defensive review should recognize strengths and gaps separately."
  },
  {
    "question": "An identity-review case shows a valid business role but permissions that no longer match current responsibilities. What is the strongest action?",
    "choices": [
      "Delete the identity immediately without review.",
      "Review and adjust access to the current least-privilege need, document the decision, and preserve required evidence.",
      "Keep old access forever.",
      "Ignore the mismatch because the role is legitimate."
    ],
    "answer": 1,
    "explanation": "Identity reviews compare current purpose with current access rather than relying on historical legitimacy."
  },
  {
    "question": "During a tabletop exercise, two response options both reduce risk but one has major continuity impact. What should the team practice?",
    "choices": [
      "Comparing evidence, security benefit, business impact, reversibility, ownership, and escalation before choosing the proportionate action.",
      "Always choosing the most disruptive option.",
      "Waiting for complete certainty before any decision.",
      "Ignoring business impact."
    ],
    "answer": 0,
    "explanation": "Tabletops build judgment around tradeoffs and authority under uncertainty."
  },
  {
    "question": "A detection-tuning lab reduces duplicate alerts but also hides distinct synthetic events. What does that show?",
    "choices": [
      "All correlation should be removed.",
      "The tuning is too aggressive and should be revised and revalidated for both duplicate reduction and event separation.",
      "Distinct events never matter.",
      "The lower alert count proves success."
    ],
    "answer": 1,
    "explanation": "Tuning quality must preserve meaningful coverage and distinction, not simply reduce volume."
  },
  {
    "question": "What makes a cybersecurity portfolio artifact strong?",
    "choices": [
      "It is as long as possible.",
      "It uses the most technical vocabulary available.",
      "It contains real confidential data.",
      "It demonstrates a specific defensive skill through clear evidence, reasoning, limitations, and explainable decisions."
    ],
    "answer": 3,
    "explanation": "Portfolio quality comes from evidence and reasoning, not length or exposure of sensitive information."
  },
  {
    "question": "What should a security diagram portfolio project communicate?",
    "choices": [
      "Only decorative icons.",
      "Important components, trust boundaries, identities, data or service flows, security controls, dependencies, and the reasoning behind key design decisions.",
      "A claim that the architecture is perfectly secure.",
      "Every internal secret."
    ],
    "answer": 1,
    "explanation": "A strong diagram demonstrates architecture reasoning and remains safe to share."
  },
  {
    "question": "What should an incident-report portfolio project separate clearly?",
    "choices": [
      "Only the final conclusion.",
      "Real credentials and private logs.",
      "Every hypothesis as confirmed fact.",
      "Facts, timeline, hypotheses, impact, decisions, evidence, uncertainty, recovery, and lessons learned."
    ],
    "answer": 3,
    "explanation": "Incident reports should demonstrate disciplined evidence reasoning and professional communication."
  },
  {
    "question": "What should a threat-model portfolio project avoid?",
    "choices": [
      "Unsupported claims that a system was exploited or that a hypothetical threat definitely occurred.",
      "Explaining defensive mitigations.",
      "Naming assumptions and evidence needs.",
      "Documenting assets and trust boundaries."
    ],
    "answer": 0,
    "explanation": "Threat models are about plausible conditions and defensive design, not pretending hypothetical events are confirmed."
  },
  {
    "question": "What makes a risk-assessment portfolio project credible?",
    "choices": [
      "Only a red-yellow-green chart.",
      "Removing low-confidence risks from the record.",
      "No explanation of uncertainty.",
      "Clear risk statements, evidence basis, controls, owners, treatment choices, residual risk, limitations, and review triggers."
    ],
    "answer": 3,
    "explanation": "Professional risk work should show how judgments were made and governed."
  },
  {
    "question": "What should a portfolio reflection explain?",
    "choices": [
      "Only positive outcomes.",
      "Only the final score.",
      "Claims of expertise without evidence.",
      "What the student learned, what evidence demonstrates the skill, what changed through revision, what remains limited, and what comes next."
    ],
    "answer": 3,
    "explanation": "Reflection should be specific, evidence-based, honest, and focused on growth."
  },
  {
    "question": "What is the strongest evidence of final Advanced readiness?",
    "choices": [
      "Memorizing answer letters.",
      "Recognizing familiar vocabulary.",
      "The ability to explain and apply concepts to new fictional scenarios, justify decisions with evidence, state limitations, and connect multiple domains.",
      "Finishing every page without review."
    ],
    "answer": 2,
    "explanation": "A20 treats readiness as applied, cross-domain reasoning rather than completion alone."
  },
  {
    "question": "Why does the capstone scenario briefing identify facts, assumptions, unknowns, and source limitations before analysis?",
    "choices": [
      "So the team can choose root cause early.",
      "So every source can be treated equally.",
      "So architecture review becomes unnecessary.",
      "So later conclusions remain traceable to what is actually known and do not silently strengthen uncertain evidence."
    ],
    "answer": 3,
    "explanation": "A disciplined case foundation prevents unsupported certainty from spreading through later artifacts."
  },
  {
    "question": "The capstone architecture shows a worker identity, queue, portal, monitoring, and recovery services. What is the strongest review approach?",
    "choices": [
      "Connect trust boundaries and dependencies to threat conditions, telemetry, identity scope, recovery, risk, and evidence needs.",
      "Review each component in isolation only.",
      "Treat the diagram as proof of current configuration.",
      "Assume every dependency is vulnerable."
    ],
    "answer": 0,
    "explanation": "Capstone architecture becomes useful when it supports later defensive decisions across domains."
  },
  {
    "question": "A High-severity alert appears while a collector is delayed and change context is incomplete. What is the strongest interpretation?",
    "choices": [
      "Potential impact may be high, but confidence and incident status remain bounded until source health and context are validated.",
      "High severity proves a confirmed incident.",
      "Approved change context makes the alert harmless.",
      "Collector delay proves an attack."
    ],
    "answer": 0,
    "explanation": "A20 emphasizes separating severity, confidence, source health, authorization, and incident status."
  },
  {
    "question": "A risk/privacy review proposes collecting additional identity data for monitoring. What should happen first?",
    "choices": [
      "Define the defensive purpose and determine whether the minimum necessary data can answer the question before expanding collection.",
      "Keep the data indefinitely in case it becomes useful.",
      "Collect every available identity field.",
      "Disable all monitoring."
    ],
    "answer": 0,
    "explanation": "Security monitoring should still follow privacy purpose, minimization, access, and retention principles."
  },
  {
    "question": "A technical artifact says an administrative action is unresolved, while an executive slide calls it unauthorized. What is the strongest correction?",
    "choices": [
      "Remove the event from the portfolio.",
      "Change the technical record to unauthorized.",
      "Align both artifacts to the evidence-supported unresolved status and vary only the level of detail for the audience.",
      "Keep both because executives need stronger language."
    ],
    "answer": 2,
    "explanation": "Audience adaptation must preserve the same underlying case truth and uncertainty."
  },
  {
    "question": "A fictional service outage follows a privileged change, one log source is delayed, and the service later recovers after a restart. What is the strongest cross-domain conclusion?",
    "choices": [
      "The privileged change definitely caused the outage.",
      "Confirm the observed events, preserve authorization and source-health uncertainty, keep multiple causal hypotheses open, validate recovery criteria, and assign owners for remaining risk.",
      "The delayed source proves malicious interference.",
      "The restart proves root cause."
    ],
    "answer": 1,
    "explanation": "Final-track reasoning integrates identity, monitoring, incident response, causation, recovery, and governance without overstating evidence."
  },
  {
    "question": "A cloud application has strong encryption, broad workload permissions, stale recovery testing, and excellent availability today. Which conclusion is strongest?",
    "choices": [
      "The application is fully secure.",
      "Encryption and availability are strengths, while authorization scope and recovery assurance remain separate governance gaps requiring evidence and ownership.",
      "Broad permissions are safe because data is encrypted.",
      "Current availability proves restoration readiness."
    ],
    "answer": 1,
    "explanation": "Advanced decisions evaluate each control claim separately instead of letting one strength erase unrelated risk."
  },
  {
    "question": "An automated workflow receives a High-severity alert but missing asset ownership and partial identity evidence. What is the strongest next action?",
    "choices": [
      "Automatically disable every related account.",
      "Close the alert because enrichment failed.",
      "Preserve the alert, mark missing context explicitly, perform safe enrichment where available, and keep consequential response decisions with authorized human review.",
      "Assume the missing owner is the system administrator."
    ],
    "answer": 2,
    "explanation": "Automation should fail visibly and preserve human judgment when evidence or ownership is incomplete."
  },
  {
    "question": "A final portfolio contains a beautiful architecture diagram, an incident summary, and a risk register, but the same event has three different confidence levels with no explanation. What should be fixed first?",
    "choices": [
      "Reconcile the evidence and confidence state across artifacts so all major claims are traceable and internally consistent.",
      "Add more visual effects.",
      "Keep differences because each artifact has a different audience.",
      "Remove confidence labels entirely."
    ],
    "answer": 0,
    "explanation": "Cross-artifact consistency is a core professional quality; audience changes detail, not underlying evidence status."
  },
  {
    "question": "After both practice tests, a student has strong scores but repeatedly misses questions involving source health and authorization. What is the strongest final preparation strategy?",
    "choices": [
      "Ignore the misses because the average is high.",
      "Memorize the answer letters.",
      "Complete targeted review and new mixed scenarios on those recurring reasoning patterns before relying on the overall score as final readiness evidence.",
      "Reread all twenty modules for equal amounts of time."
    ],
    "answer": 2,
    "explanation": "Repeated reasoning gaps matter because they can affect many domains even when the overall score is strong."
  }
];

const coverageDomains = [
  "A1–A2: professional ethics, authorization, scope, architecture, defense in depth, trust boundaries, segmentation, identity, visibility, and resilience.",
  "A3–A4: threat modeling, assets, threats, vulnerabilities, abuse cases, risk prioritization, advanced networking defense, remote access, baselines, and monitoring.",
  "A5–A6: detection engineering, source health, alert quality, validation, tuning, SIEM correlation, triage, escalation, case management, and metrics.",
  "A7–A9: incident response, containment, recovery, evidence preservation, digital forensics, timelines, chain of custody, malware defense, indicators, and communication.",
  "A10–A11: advanced web security defense, authentication, sessions, authorization, input/output safety, APIs, secrets, secure software lifecycle, dependencies, and deployment.",
  "A12–A14: cloud security architecture, shared responsibility, cloud IAM, identity, zero trust, federation, conditional access, privileged access, cryptography, certificates, hashing, and key management.",
  "A15–A17: risk management, compliance, control testing, audit evidence, third-party risk, privacy engineering, data governance, minimization, retention, and safe security automation.",
  "A18–A20: advanced defensive labs, multi-source evidence, portfolio artifacts, capstone integration, executive communication, recovery assurance, publication safety, and final readiness.",
  "Integrated synthesis: cross-domain scenarios combining evidence limits, architecture, identity, monitoring, response, cloud, risk, privacy, recovery, automation, and professional communication."
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

export default function AdvancedFinalTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Final Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              125 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Advanced Final Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 125-question final assessment covers the complete High School
            Advanced Track from A1 through A20. It evaluates professional-style
            defensive reasoning across ethics, architecture, threat modeling,
            networking, detection, SIEM, incident response, forensics, malware
            defense, web and software security, cloud, identity, cryptography,
            risk, privacy, automation, labs, portfolio work, and capstone
            readiness.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The strongest answers preserve authorization boundaries, evidence
            limits, source health, uncertainty, proportionality, ownership,
            privacy, recovery criteria, and professional communication. All
            scenarios are fictional, synthetic, defensive, and non-operational.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
            >
              Previous: Practice Test 2
            </Link>

            <Link
              href={advancedPath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Advanced Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed both 50-question Advanced practice tests and reviewed repeated weak areas.",
            "I will answer all 125 questions before submitting the final assessment.",
            "I will choose the strongest ethical, defensive, evidence-supported answer rather than the most aggressive or absolute option.",
            "I will treat source health, authorization, confidence, ownership, privacy, recovery, and residual risk as separate decision factors when the scenario requires it.",
          ]}
        />

        <SectionCard
          eyebrow="Final Test Instructions"
          title="Complete All 125 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work independently without checking the lesson pages or practice-test
                explanations.
              </p>
            </div>

            <div className="rounded-xl border border-purple-400/30 bg-purple-400/10 p-4">
              <p className="font-bold text-purple-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Identify what the scenario actually proves, preserve uncertainty,
                and choose the most proportionate defensible decision.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="font-bold text-emerald-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit once to reveal your score and explanations, then review every
                missed reasoning pattern.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations remain hidden until submission through the
            existing CyberShield quiz behavior. Because this is the Advanced Final
            Test, review every unanswered question before submitting.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Assessment Coverage"
          title="Complete Advanced Track — A1 Through A20"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {coverageDomains.map((domain) => (
              <div
                key={domain}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
              >
                {domain}
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="High School Advanced Final Test"
          questions={testQuestions}
        />

        <SectionCard
          eyebrow="Final Reflection"
          title="Interpret the Result as Evidence of Applied Readiness"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Review repeated reasoning gaps",
                detail:
                  "If several misses share one pattern—such as source health, authorization, causation, recovery, or residual risk—review that pattern across the modules where it appears.",
              },
              {
                title: "Explain corrected decisions",
                detail:
                  "A corrected answer is stronger when you can explain why it is better supported than the alternatives without memorizing the answer letter.",
              },
              {
                title: "Preserve professional boundaries",
                detail:
                  "Advanced completion still requires authorization, scope, privacy, evidence discipline, safe research, and defensive-only practice.",
              },
              {
                title: "Use your portfolio as proof",
                detail:
                  "Connect your final score to architecture, incident, risk, privacy, detection, cloud, identity, communication, and capstone artifacts you can actually explain.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Advanced completion means applying concepts across unfamiliar fictional scenarios, not only recognizing terminology.",
            "Strong defensive conclusions distinguish fact, interpretation, hypothesis, finding, risk, incident status, recommendation, and decision.",
            "Authentication does not prove authorization, policy does not prove implementation, chronology does not prove causation, and missing alerts do not prove inactivity when source health is degraded.",
            "Architecture, identity, monitoring, response, cloud, risk, privacy, recovery, automation, and communication work as connected decision systems.",
            "Professional cybersecurity remains ethical, authorized, scoped, privacy-aware, evidence-based, and defensive even after the Advanced Track is complete.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-200">
            Final Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Advanced completion never authorizes real-world security testing
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            Do not access real systems, test credentials, scan networks, probe
            applications, bypass controls, execute suspicious files, collect live
            private logs, inspect real cloud accounts, monitor real people, or
            investigate organizations without explicit authorization. CyberShield
            Academy final-assessment work uses fictional, synthetic, defensive,
            non-operational scenarios only.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Advanced Track Assessment Complete
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Your Results and Record Your Advanced Growth
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-emerald-50">
            Review every missed explanation, record any remaining knowledge or
            reasoning gaps, and connect your final result to the portfolio evidence
            you built across A1 through A20. Completion should reflect both your
            assessment result and your ability to explain professional defensive
            decisions safely and clearly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: Practice Test 2
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Return to Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}