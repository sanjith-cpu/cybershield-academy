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
const previousPage = `${advancedPath}/practice-test-1`;
const nextPage = `${advancedPath}/final-test`;

const testQuestions = [
  {
    "question": "A student has written permission to review one fictional web application, but a linked service appears to belong to a different environment. What is the strongest next step?",
    "choices": [
      "Follow the link because it is technically connected.",
      "Treat the linked service as in scope because the same organization owns it.",
      "Pause and confirm whether the linked service is explicitly included in the written scope before interacting with it.",
      "Test only harmless requests without asking."
    ],
    "answer": 2,
    "explanation": "Authorization is defined by the approved scope, not by technical proximity, ownership assumptions, or apparent harmlessness."
  },
  {
    "question": "An architecture review shows that identity, application access, and administrative recovery all depend on one central identity platform. What is the strongest architectural concern?",
    "choices": [
      "The identity platform is automatically insecure.",
      "The platform is a concentration dependency whose failure or misconfiguration could affect several security and recovery decisions.",
      "The organization should remove identity controls.",
      "Every service must use a separate identity provider."
    ],
    "answer": 1,
    "explanation": "A shared dependency may create concentrated impact, so resilience, degraded states, monitoring, recovery, and ownership matter."
  },
  {
    "question": "A threat model identifies a plausible misuse condition but the review has no evidence that it has occurred. How should the team describe it?",
    "choices": [
      "As a confirmed incident.",
      "As a confirmed vulnerability.",
      "As a bounded threat scenario requiring relevant controls or validation, not proof of occurrence.",
      "As irrelevant because no incident is confirmed."
    ],
    "answer": 2,
    "explanation": "Threat modeling identifies plausible harmful conditions without converting possibility into evidence of occurrence."
  },
  {
    "question": "A remote-access user passes MFA but attempts to reach a resource outside the responsibilities of the user's role. Which control decision matters most next?",
    "choices": [
      "Whether the user authenticated successfully.",
      "Whether authorization policy permits that identity, context, and role to access the requested resource.",
      "Whether the user has logged in before.",
      "Whether the connection uses a modern browser."
    ],
    "answer": 1,
    "explanation": "Authentication establishes identity; authorization determines whether the requested access is permitted."
  },
  {
    "question": "A detection alerts repeatedly during an approved deployment because it treats every configuration change as equally suspicious. What is the strongest improvement?",
    "choices": [
      "Disable configuration monitoring during deployments.",
      "Add reliable change context and preserve alerts for activity that does not match approved scope, then validate the revised logic.",
      "Make every alert informational.",
      "Ignore all configuration events from administrators."
    ],
    "answer": 1,
    "explanation": "Detection tuning should reduce known noise while preserving the defensive question and validating expected and unexpected cases."
  },
  {
    "question": "A SIEM dashboard shows no failed-login alerts for 15 minutes, but the identity log connector was delayed during that period. What is the strongest conclusion?",
    "choices": [
      "No failed logins occurred.",
      "The absence of central alerts is weak evidence until connector health and backlog completeness are understood.",
      "The identity provider definitely failed.",
      "Every later failed-login event should be discarded."
    ],
    "answer": 1,
    "explanation": "Negative evidence is only strong when the expected source and collection path were sufficiently healthy."
  },
  {
    "question": "An incident-response team can isolate one affected fictional service immediately, but doing so would interrupt a critical class-registration process. What is the strongest decision approach?",
    "choices": [
      "Always isolate immediately because security overrides every operational concern.",
      "Never isolate a critical service.",
      "Compare evidence, potential impact, continuity consequences, available alternatives, reversibility, and owner authority before choosing a proportionate containment action.",
      "Wait for absolute certainty."
    ],
    "answer": 2,
    "explanation": "Advanced containment balances security risk, evidence, continuity, ownership, proportionality, and reversibility."
  },
  {
    "question": "Two forensic records show the same event with different timestamps because the systems use different clock settings. What should an analyst do?",
    "choices": [
      "Rewrite both records to one preferred time.",
      "Preserve original timestamps, document the clock difference, normalize cautiously, and explain the timing limitation.",
      "Delete the record with the older timestamp.",
      "Treat the mismatch as proof of tampering."
    ],
    "answer": 1,
    "explanation": "Forensic reasoning preserves original evidence and documents normalization assumptions rather than altering evidence to fit a narrative."
  },
  {
    "question": "A fictional endpoint was contained after a malware-related alert. What is the strongest recovery requirement before normal use resumes?",
    "choices": [
      "The alert is no longer visible.",
      "The device restarts successfully.",
      "Defined recovery criteria are met, required evidence is preserved, controls are restored, validation succeeds, and residual risk is owned.",
      "The user says the device feels normal."
    ],
    "answer": 2,
    "explanation": "Recovery should restore a trusted state through defined evidence and validation, not merely remove an alert or restore availability."
  },
  {
    "question": "A web application authenticates users correctly but does not verify whether one user may access another user's records. Which design area is weakest?",
    "choices": [
      "Authorization.",
      "Availability.",
      "DNS.",
      "Encryption at rest."
    ],
    "answer": 0,
    "explanation": "Authentication confirms identity; authorization must restrict resources and actions."
  },
  {
    "question": "A web application logs full sensitive form contents whenever validation fails. Which redesign best balances security and privacy?",
    "choices": [
      "Disable all error logging.",
      "Keep the full data because more evidence is always better.",
      "Log the minimum diagnostic context needed, avoid unnecessary sensitive values, protect access, and define retention.",
      "Publish the errors to help users troubleshoot."
    ],
    "answer": 2,
    "explanation": "Secure logging should support defensive needs while applying purpose limitation, minimization, access control, and retention."
  },
  {
    "question": "A software team discovers that a critical dependency is no longer maintained, but replacing it immediately would require major redesign. What is the strongest response?",
    "choices": [
      "Ignore the issue until exploitation is proven.",
      "Document the dependency risk, evaluate exposure and alternatives, assign an owner, apply proportionate interim controls, and plan migration.",
      "Delete the dependency without testing.",
      "Assume popularity makes the dependency safe."
    ],
    "answer": 1,
    "explanation": "Supply-chain risk should be governed through evidence, ownership, compensating controls, planning, and safe validation."
  },
  {
    "question": "A cloud provider offers audit logging, but the customer never enabled the required log category. Which statement best reflects shared responsibility?",
    "choices": [
      "The provider failed because logging existed as a feature.",
      "The customer-controlled configuration and evidence requirement were not satisfied even though the provider offered the capability.",
      "Audit logging is entirely the provider's responsibility.",
      "The missing logs prove an attack occurred."
    ],
    "answer": 1,
    "explanation": "Provider capability and customer configuration are separate responsibilities."
  },
  {
    "question": "A background worker needs access to one queue and one protected dataset, but its role grants access to several unrelated resources. Which principle is most directly implicated?",
    "choices": [
      "Least privilege.",
      "Nonrepudiation.",
      "High availability.",
      "Load balancing."
    ],
    "answer": 0,
    "explanation": "Least privilege requires access to be limited to resources and actions necessary for the workload purpose."
  },
  {
    "question": "A cryptographic key has been used far beyond the organization's planned lifecycle, although no compromise is known. What is the strongest governance response?",
    "choices": [
      "Keep using it because no compromise is proven.",
      "Rotate it according to the approved key-management process, preserve required compatibility planning, and document the lifecycle deviation.",
      "Publish the old key after rotation.",
      "Replace encryption with hashing."
    ],
    "answer": 1,
    "explanation": "Key rotation is a lifecycle and governance control even when compromise has not been observed."
  },
  {
    "question": "A risk register says a control exists because a policy requires quarterly access reviews, but no recent review evidence can be found. What is the strongest risk interpretation?",
    "choices": [
      "The control is fully effective because the policy exists.",
      "The control definitely failed.",
      "The control expectation exists, but current implementation or effectiveness evidence is incomplete and should affect confidence.",
      "The risk should be removed."
    ],
    "answer": 2,
    "explanation": "Design expectation, implementation evidence, and effectiveness are different layers of assurance."
  },
  {
    "question": "A monitoring team wants to retain synthetic identity activity indefinitely because it may help future investigations. Which privacy principle should challenge that decision?",
    "choices": [
      "Availability.",
      "Purpose limitation and retention proportionality.",
      "Nonrepudiation.",
      "Network segmentation."
    ],
    "answer": 1,
    "explanation": "Retention should be tied to defined purpose and governance rather than indefinite possible usefulness."
  },
  {
    "question": "An automated workflow normally enriches alerts with asset ownership, but the ownership service becomes unavailable. What is the strongest failure behavior?",
    "choices": [
      "Guess the owner from previous cases.",
      "Close the alert because enrichment failed.",
      "Mark ownership context unavailable, preserve the alert, follow the degraded-state process, and keep consequential decisions with accountable review.",
      "Assign every alert to the same administrator."
    ],
    "answer": 2,
    "explanation": "Safe automation should fail visibly and predictably rather than turn missing context into false certainty."
  },
  {
    "question": "In a defensive lab, endpoint evidence suggests one time sequence while application evidence suggests another. What is the strongest first response?",
    "choices": [
      "Choose the source that supports the preferred explanation.",
      "Preserve both sources, review provenance and timing assumptions, identify what each source can prove, and keep conflicting interpretations visible.",
      "Average all timestamps.",
      "Discard the weaker-looking source immediately."
    ],
    "answer": 1,
    "explanation": "Conflicting evidence should be investigated through provenance, source quality, timing, and scope."
  },
  {
    "question": "A polished portfolio diagram includes a conclusion that is not supported anywhere in the underlying case notes. What is the strongest correction?",
    "choices": [
      "Keep it because visuals do not require evidence.",
      "Add a stronger label so it looks intentional.",
      "Remove or revise the conclusion so every major claim remains traceable to evidence or is clearly labeled as an assumption.",
      "Delete the case notes."
    ],
    "answer": 2,
    "explanation": "Portfolio quality depends on traceability and evidence discipline, not presentation polish alone."
  },
  {
    "question": "A capstone timeline shows a queue slowdown, a privileged change, and application errors within a short period. What is the strongest root-cause statement?",
    "choices": [
      "The privileged change caused the outage.",
      "The queue slowdown caused the outage.",
      "Several events are temporally relevant, but the available evidence does not yet establish a sole root cause.",
      "The timing proves coordinated malicious activity."
    ],
    "answer": 2,
    "explanation": "Chronology and correlation can prioritize hypotheses but do not automatically establish a sole cause."
  },
  {
    "question": "A log search finds no evidence of a particular action, but the relevant source was in a Partial state. What should an analyst do with the absence?",
    "choices": [
      "Treat it as definitive negative evidence.",
      "Treat it as bounded or weak negative evidence and seek healthier or source-side evidence before drawing a strong conclusion.",
      "Treat the action as confirmed.",
      "Ignore source health."
    ],
    "answer": 1,
    "explanation": "Absence only becomes strong negative evidence when the relevant source was expected to observe the event and was sufficiently healthy."
  },
  {
    "question": "A privileged administrator authenticated with MFA and performed an action during an approved maintenance period. The task ticket does not list that exact action. What is the strongest status?",
    "choices": [
      "Fully authorized.",
      "Confirmed malicious.",
      "Event confirmed; authentication confirmed; exact action authorization unresolved.",
      "No security relevance."
    ],
    "answer": 2,
    "explanation": "Authentication, maintenance context, and action authorization are different claims requiring different evidence."
  },
  {
    "question": "A network design allows a remote support role to reach only a management gateway rather than every internal subnet. Which two ideas are most directly reinforced?",
    "choices": [
      "Least privilege and segmentation.",
      "Hashing and retention.",
      "Data classification and salting.",
      "Forensics and nonrepudiation."
    ],
    "answer": 0,
    "explanation": "Limiting reachable resources and separating network areas reduces unnecessary access and potential impact."
  },
  {
    "question": "A detection has a very low false-positive rate but misses several synthetic cases it was designed to identify. Which metric should the team investigate most directly?",
    "choices": [
      "Coverage or missed-case rate.",
      "Number of dashboards.",
      "Analyst job title.",
      "Log font size."
    ],
    "answer": 0,
    "explanation": "Low false positives do not guarantee useful coverage; missed intended cases matter too."
  },
  {
    "question": "A SIEM receives the same synthetic event through two collection paths, producing duplicate alerts. What is the strongest response?",
    "choices": [
      "Delete one source permanently without review.",
      "Add deduplication or correlation logic that preserves the evidence relationship and validate that distinct events are not incorrectly merged.",
      "Ignore duplicates because more alerts are safer.",
      "Raise every duplicate to High severity."
    ],
    "answer": 1,
    "explanation": "Duplicate handling should reduce noise without destroying evidence or merging genuinely distinct activity."
  },
  {
    "question": "An incident is technically stable, but an unresolved recovery-control gap has been assigned to a risk owner with a documented deadline and reopen trigger. What can the incident team reasonably consider?",
    "choices": [
      "Closure may be appropriate if closure criteria are met and the residual issue is formally transferred and owned.",
      "Closure is impossible until every risk is zero.",
      "The risk item should be deleted.",
      "The incident was never real."
    ],
    "answer": 0,
    "explanation": "Incident closure can occur when immediate response work is complete enough and residual items are formally transferred to accountable governance."
  },
  {
    "question": "A forensic artifact is copied into a working folder for analysis. What should happen to the original evidence?",
    "choices": [
      "Modify it so timestamps are easier to read.",
      "Preserve it in its original state with handling and integrity information documented.",
      "Delete it after the copy is created.",
      "Share it widely so others can compare."
    ],
    "answer": 1,
    "explanation": "Forensic integrity depends on preserving original evidence and documenting handling."
  },
  {
    "question": "A synthetic malware indicator appears on one endpoint, but there is no supporting process, network, or behavioral evidence. What is the strongest interpretation?",
    "choices": [
      "Confirmed compromise.",
      "A potentially relevant indicator that requires correlation and context before incident status is determined.",
      "Proof that the entire network is affected.",
      "Evidence that endpoint monitoring should be disabled."
    ],
    "answer": 1,
    "explanation": "Indicators are starting points for defensive investigation and gain meaning through supporting context."
  },
  {
    "question": "An API verifies that a request has a valid token but never checks whether the caller may access the requested object. Which control is missing?",
    "choices": [
      "Object-level authorization.",
      "DNS resolution.",
      "Backup testing.",
      "Data compression."
    ],
    "answer": 0,
    "explanation": "A valid identity token does not automatically authorize access to every object or action."
  },
  {
    "question": "A secret was accidentally committed to a private code repository and then deleted in the next commit. What is the strongest defensive assumption?",
    "choices": [
      "Deletion from the latest version guarantees the secret was never exposed.",
      "Treat the secret as potentially exposed, rotate it through the approved process, and review repository history and access according to policy.",
      "Make the repository public so the history is transparent.",
      "Reuse the secret in another environment."
    ],
    "answer": 1,
    "explanation": "Secrets may remain in history or prior copies, so rotation is stronger than relying on deletion from the latest commit."
  },
  {
    "question": "A cloud storage service encrypts data at rest, but a broad customer role can read every dataset. Which statement is strongest?",
    "choices": [
      "Encryption eliminates access-control risk.",
      "The provider's encryption capability is useful, but customer authorization scope still requires least-privilege governance.",
      "The cloud provider must remove the role.",
      "Broad access is safe because the data is encrypted."
    ],
    "answer": 1,
    "explanation": "Encryption and authorization solve different problems, and customer access scope remains a governance responsibility."
  },
  {
    "question": "A user normally works from one managed device but requests access from an unmanaged device in an unusual context. Which zero-trust idea is most relevant?",
    "choices": [
      "Location alone should decide trust.",
      "Access should consider identity, device/context signals, policy, resource sensitivity, and least privilege.",
      "Every request should be permanently denied.",
      "Successful password entry is enough."
    ],
    "answer": 1,
    "explanation": "Zero-trust thinking evaluates access using identity and context rather than assuming trust from location alone."
  },
  {
    "question": "A certificate used by a fictional service is approaching expiration. What is the strongest operational response?",
    "choices": [
      "Wait until it expires so the impact can be measured.",
      "Renew or replace it through the approved certificate lifecycle process, validate dependent services, and document ownership.",
      "Disable certificate validation.",
      "Use the same certificate indefinitely."
    ],
    "answer": 1,
    "explanation": "Certificate governance includes lifecycle planning, renewal, validation, dependency awareness, and ownership."
  },
  {
    "question": "An audit asks whether quarterly access reviews occur. Which evidence is strongest?",
    "choices": [
      "A policy saying reviews should happen.",
      "A current review record showing scope, reviewer, decisions, changes, exceptions, and completion evidence.",
      "A manager saying reviews are usually done.",
      "An old slide deck describing the process."
    ],
    "answer": 1,
    "explanation": "Audit evidence should demonstrate actual implementation and results, not only policy or verbal assurance."
  },
  {
    "question": "A third-party service processes protected data for a fictional organization. Which risk question is strongest?",
    "choices": [
      "Is the vendor popular?",
      "What data and services are involved, what controls and responsibilities apply, what evidence is available, what happens during failure, and who owns residual risk?",
      "Does the vendor have a modern website?",
      "Can the organization transfer all accountability to the vendor?"
    ],
    "answer": 1,
    "explanation": "Third-party risk should consider data, dependency, controls, evidence, resilience, responsibilities, and retained accountability."
  },
  {
    "question": "A privacy review finds that a dataset is still retained after the purpose that justified collection has ended. What is the strongest next step?",
    "choices": [
      "Keep it permanently because it already exists.",
      "Apply the defined lifecycle: determine whether another legitimate requirement exists and otherwise archive, anonymize, or delete according to policy.",
      "Share it more broadly before deletion.",
      "Remove all audit records."
    ],
    "answer": 1,
    "explanation": "Privacy governance follows data through the full lifecycle and requires retention to remain tied to legitimate purpose and policy."
  },
  {
    "question": "An automation can automatically disable a user account when a low-confidence alert appears. What is the strongest design choice?",
    "choices": [
      "Always disable automatically because speed is most important.",
      "Keep consequential action behind human review unless confidence, authorization, safeguards, and rollback conditions justify automation.",
      "Remove all automation.",
      "Increase the alert severity so automation is allowed."
    ],
    "answer": 1,
    "explanation": "Consequential automation requires strong confidence, authorization, safeguards, ownership, and rollback."
  },
  {
    "question": "A defensive timeline shows a service restart immediately before recovery. What is the strongest conclusion?",
    "choices": [
      "The restart is confirmed as the sole reason for recovery.",
      "The restart is relevant to recovery, but other dependencies and concurrent changes should be reviewed before assigning sole causation.",
      "The restart was unnecessary.",
      "The restart proves the incident was caused by malware."
    ],
    "answer": 1,
    "explanation": "Temporal relationship supports investigation but not automatic causal certainty."
  },
  {
    "question": "A student wants to include a real screenshot with names blurred in a public security portfolio. What is the strongest publication decision?",
    "choices": [
      "Use it because names are hidden.",
      "Replace it with a synthetic or fictional representation because other sensitive architecture, identifiers, metadata, or unresolved findings may remain.",
      "Publish only half of the screenshot.",
      "Upload the original as an appendix."
    ],
    "answer": 1,
    "explanation": "Public portfolio work should avoid real internal material even when obvious identifiers are obscured."
  },
  {
    "question": "A technical report says a condition is Medium confidence, but the executive brief calls it certain because leadership requested a clear answer. What is the strongest correction?",
    "choices": [
      "Keep the executive wording because certainty is more persuasive.",
      "Preserve the Medium-confidence status and explain the material decision using concise bounded language.",
      "Raise the technical confidence to match.",
      "Remove the issue from the executive brief."
    ],
    "answer": 1,
    "explanation": "Audience changes detail and emphasis, not evidence confidence or underlying truth."
  },
  {
    "question": "A fictional service has current backups, a tested restore from six months ago, and major architecture changes last week. What is the strongest recovery decision?",
    "choices": [
      "Assume the old restore test remains sufficient.",
      "Reassess recovery dependencies and refresh validation because material architecture change can invalidate earlier evidence.",
      "Delete the backups.",
      "Treat current availability as proof of recovery readiness."
    ],
    "answer": 1,
    "explanation": "Material change is a review trigger because previous recovery evidence may no longer represent the current architecture."
  },
  {
    "question": "A risk owner accepts a temporary control gap for 30 days. What should happen on day 30 if the treatment is not complete?",
    "choices": [
      "The risk disappears automatically.",
      "The acceptance should be reassessed according to its review trigger, with current evidence, residual risk, and owner decision documented.",
      "Extend it automatically forever.",
      "Delete the original acceptance record."
    ],
    "answer": 1,
    "explanation": "Risk acceptance is time-bound and reviewable rather than silent continuation."
  },
  {
    "question": "A security team can answer its detection question using a role category and action type, but proposes collecting full user-profile details too. What is the strongest response?",
    "choices": [
      "Collect everything because security has priority.",
      "Use the minimized data that supports the defensive purpose unless additional fields have a documented, proportionate need.",
      "Stop collecting all security telemetry.",
      "Publish user-profile details to improve transparency."
    ],
    "answer": 1,
    "explanation": "Purpose limitation and minimization seek the least sensitive data sufficient for the legitimate defensive decision."
  },
  {
    "question": "A newly tuned detection appears quieter after deployment. What evidence best supports keeping the change?",
    "choices": [
      "The alert count decreased.",
      "Synthetic validation shows intended risky cases are still detected, expected cases generate less noise, and agreed quality metrics improved without unacceptable coverage loss.",
      "Analysts say the dashboard looks cleaner.",
      "The detection has fewer lines of logic."
    ],
    "answer": 1,
    "explanation": "Tuning should be validated against both noise reduction and preservation of intended coverage."
  },
  {
    "question": "A workload identity is still active even though the service it supported was retired. Which control failed most directly?",
    "choices": [
      "Identity lifecycle governance.",
      "Hash integrity.",
      "Network availability.",
      "Data compression."
    ],
    "answer": 0,
    "explanation": "Workload identities need lifecycle triggers so access changes or ends when the service purpose changes."
  },
  {
    "question": "A secure deployment process requires approved configuration but has no post-deployment verification. What is the strongest improvement?",
    "choices": [
      "Assume successful deployment proves the secure state.",
      "Add safe post-deployment validation against required security configuration and define rollback or escalation when validation fails.",
      "Remove configuration standards.",
      "Give deployment accounts permanent administrator access."
    ],
    "answer": 1,
    "explanation": "Secure deployment needs evidence that intended configuration actually exists after change."
  },
  {
    "question": "A case note says, “Because the alert occurred after the configuration change, the change caused the alert.” Which reasoning error is present?",
    "choices": [
      "Treating sequence as causation.",
      "Applying least privilege.",
      "Using data minimization.",
      "Preserving chain of custody."
    ],
    "answer": 0,
    "explanation": "A sequence can establish chronology and relevance but does not by itself prove a causal relationship."
  },
  {
    "question": "A cross-domain scenario includes a privileged event, delayed telemetry, a service outage, current backups, and incomplete restoration evidence. Which answer is strongest?",
    "choices": [
      "Declare a breach and immediately close the service permanently.",
      "Treat each condition separately, preserve evidence limits, prioritize service and security impact, assign owners, validate authorization and telemetry, and keep recovery confidence bounded until restoration evidence is refreshed.",
      "Ignore the privileged event because backups exist.",
      "Call the case resolved once availability returns."
    ],
    "answer": 1,
    "explanation": "Advanced reasoning integrates identity, monitoring, incident response, risk, and recovery while preserving each issue's evidence state."
  },
  {
    "question": "Practice Test 2 shows that a student misses questions from several modules, but nearly every mistake involves overstating what evidence proves. What is the strongest final-review plan?",
    "choices": [
      "Study every module for exactly the same amount of time.",
      "Focus first on the recurring evidence-boundary pattern across those modules, then practice new mixed scenarios and confirm the error no longer repeats.",
      "Memorize the missed answer letters.",
      "Skip review and rely on the overall score."
    ],
    "answer": 1,
    "explanation": "Repeated reasoning patterns are higher-value review targets than isolated question wording because they affect many domains at once."
  }
];

const coverageGroups = [
  {
    "label": "Evidence + professional boundaries",
    "topics": "Authorization, scope, ethics, evidence states, provenance, source health, assumptions, uncertainty, and responsible defensive decision-making."
  },
  {
    "label": "Architecture + threat modeling",
    "topics": "Trust boundaries, dependencies, segmentation, resilience, threat statements, control expectations, degraded states, and recovery design."
  },
  {
    "label": "Detection + SIEM + response",
    "topics": "Defensive questions, telemetry, alert quality, source health, correlation, tuning, triage, containment, recovery, and closure."
  },
  {
    "label": "Forensics + malware defense",
    "topics": "Evidence preservation, timing, chain of custody, indicators, endpoint context, defensive containment, recovery, and reporting."
  },
  {
    "label": "Web + software security",
    "topics": "Authentication, authorization, input safety, API access, secrets, dependencies, logging, deployment, and validation."
  },
  {
    "label": "Cloud + identity + cryptography",
    "topics": "Shared responsibility, workload identities, zero trust, least privilege, certificate lifecycle, key management, and authorization evidence."
  },
  {
    "label": "Risk + privacy + automation",
    "topics": "Control evidence, residual risk, treatment, acceptance, third-party risk, minimization, retention, automation failure modes, and human judgment."
  },
  {
    "label": "Labs + portfolio + capstone",
    "topics": "Conflicting evidence, timelines, root-cause discipline, publication safety, executive communication, recovery confidence, and final readiness."
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

export default function AdvancedPracticeTestTwoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">Practice Test 2</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">50 Questions</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">Advanced Practice Test 2</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">This second 50-question assessment is more scenario-heavy than Practice Test 1. It mixes evidence, architecture, identity, detection, SIEM, incident response, forensics, malware defense, web and software security, cloud, cryptography, risk, privacy, automation, recovery, governance, portfolio work, and executive communication inside the same fictional decision problems.</p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-400">Complete the test without checking the lesson pages. Then compare your results with Practice Test 1 and use repeated mistakes to decide what deserves final review before the 125-question Advanced Final Test.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={previousPage} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Previous: Practice Test 1</Link>
            <Link href={advancedPath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Advanced Track</Link>
            <Link href={nextPage} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Advanced Final Test</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck title="Before You Begin" items={[
          "I completed Advanced Practice Test 1 and reviewed the reasoning behind missed questions.",
          "I will answer all 50 questions before submitting.",
          "I will preserve uncertainty, source limitations, authorization boundaries, and proportional decision-making.",
          "I will compare repeated mistakes across both practice tests before opening the Advanced Final Test.",
        ]} />

        <SectionCard eyebrow="Practice Test 2 Coverage" title="Mixed Scenarios Across the Full Advanced Track">
          <div className="grid gap-4 md:grid-cols-2">
            {coverageGroups.map((group) => (
              <article key={group.label} className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-5">
                <h3 className="font-bold text-purple-100">{group.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{group.topics}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Practice Test Instructions" title="Complete All 50 Questions">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4"><p className="font-bold text-cyan-100">Step 1</p><p className="mt-2 text-sm leading-6 text-slate-300">Identify what the scenario actually confirms before evaluating the answer choices.</p></div>
            <div className="rounded-xl border border-purple-400/30 bg-purple-400/10 p-4"><p className="font-bold text-purple-100">Step 2</p><p className="mt-2 text-sm leading-6 text-slate-300">Choose the most ethical, evidence-aware, proportionate, and governed decision.</p></div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4"><p className="font-bold text-emerald-100">Step 3</p><p className="mt-2 text-sm leading-6 text-slate-300">Submit, review every explanation, and compare error patterns with Practice Test 1.</p></div>
          </div>
          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">Answers and explanations stay hidden until submission through the existing CyberShield quiz behavior. Do not use the result only as a score—use it to decide what needs final review.</div>
        </SectionCard>

        <MiniQuiz title="Advanced Practice Test 2" questions={testQuestions} />

        <SectionCard eyebrow="Compare Both Practice Tests" title="Build the Final Review List">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {title:"Repeated evidence errors",detail:"Prioritize source health, authorization, design-vs-implementation, correlation-vs-causation, confidence, and evidence scope if the same mistake appears twice."},
              {title:"Repeated domain errors",detail:"Review the related Advanced module when several misses come from identity, cloud, monitoring, response, privacy, cryptography, risk, or recovery."},
              {title:"Decision-quality errors",detail:"Practice choosing proportionate actions with owners, validation, rollback, residual risk, and review triggers."},
              {title:"Communication errors",detail:"Practice shortening technical conclusions without changing incident status, confidence, authorization state, or underlying evidence."},
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p></article>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways takeaways={[
          "Practice Test 2 emphasizes mixed evidence and cross-domain decisions rather than isolated vocabulary.",
          "Compare both practice-test results and prioritize reasoning errors that repeat across multiple topics.",
          "Do not memorize answer letters; explain why the strongest answer is better supported than the alternatives.",
          "Final review should focus on your actual weak patterns rather than rereading all twenty Advanced modules equally.",
          "Move to the 125-question Advanced Final Test after completing targeted review from both practice tests.",
        ]} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-200">Assessment Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Keep every scenario fictional, synthetic, defensive, and non-operational</h2>
          <p className="mt-3 max-w-4xl leading-7">Do not access real systems, test credentials, scan networks, probe applications, execute suspicious files, bypass controls, collect live logs, inspect private cloud accounts, monitor real users, or investigate real organizations. This assessment evaluates safe defensive reasoning only.</p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Final Assessment</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue to the 125-Question Advanced Final Test</h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">Compare Practice Test 1 and Practice Test 2, complete targeted review of repeated weak areas, and continue when you can explain the stronger reasoning behind your corrected answers.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={previousPage} className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white">Previous: Practice Test 1</Link>
            <Link href={advancedPath} className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white">Advanced Track</Link>
            <Link href={nextPage} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next: Advanced Final Test</Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}