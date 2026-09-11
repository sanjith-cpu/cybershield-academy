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
const previousPage = `${advancedPath}/advanced-capstone/module-test`;
const nextPage = `${advancedPath}/practice-test-2`;

const testQuestions = [
  {
    question:
      "A student discovers a possible security weakness while reviewing a fictional lab. What is the strongest professional response?",
    choices: [
      "Test the idea against a public service to confirm it.",
      "Stay inside the authorized fictional scope, document the observation, and use the approved reporting path.",
      "Share the suspected weakness publicly before verification.",
      "Try additional access methods until the result is certain.",
    ],
    answer: 1,
    explanation:
      "Advanced cybersecurity work begins with authorization, scope, evidence discipline, and approved reporting rather than expanding activity beyond permission.",
  },
  {
    question:
      "A defensive research task has written permission for one synthetic environment but not a second similar environment. What should the student do?",
    choices: [
      "Assume similar ownership means permission carries over.",
      "Use only passive techniques on the second environment.",
      "Treat the second environment as out of scope until explicit authorization is provided.",
      "Test briefly and stop if anything unusual happens.",
    ],
    answer: 2,
    explanation:
      "Authorization applies to the defined scope. Similarity, public visibility, or shared ownership does not automatically extend permission.",
  },
  {
    question:
      "What is the strongest reason to design security architecture around multiple layers?",
    choices: [
      "Every layer prevents the same failure in exactly the same way.",
      "Layering reduces dependence on any one control and gives defenders multiple opportunities to prevent, detect, contain, or recover.",
      "Layering eliminates the need for monitoring.",
      "Layering guarantees zero residual risk.",
    ],
    answer: 1,
    explanation:
      "Defense in depth reduces single-control dependence and supports prevention, detection, containment, resilience, and recovery.",
  },
  {
    question:
      "A service diagram shows a user-facing application, identity provider, worker service, queue, and protected data store. What should an architect identify first when reviewing trust relationships?",
    choices: [
      "Which component has the longest name.",
      "Where identity, privilege, data sensitivity, environment, or responsibility changes across connections.",
      "Which component was deployed most recently.",
      "Which service produces the most logs.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries are defined by meaningful changes in trust, authority, sensitivity, environment, or operational responsibility.",
  },
  {
    question:
      "Which statement best distinguishes a threat from a finding?",
    choices: [
      "A threat is a plausible harmful condition or actor capability, while a finding is an evidence-supported conclusion about the reviewed environment.",
      "A threat is always confirmed, while a finding is always hypothetical.",
      "They are interchangeable terms.",
      "A finding must describe malware.",
    ],
    answer: 0,
    explanation:
      "Threat modeling explores plausible conditions, while findings should be grounded in the evidence available from the review.",
  },
  {
    question:
      "A threat model identifies a critical service dependency with no current recovery evidence. What is the strongest next step?",
    choices: [
      "Declare the dependency vulnerable.",
      "Document the recovery-evidence gap, assign an owner, and define what validation would reduce uncertainty.",
      "Remove the dependency from the model.",
      "Assume the provider will recover it automatically.",
    ],
    answer: 1,
    explanation:
      "A missing recovery artifact creates an evidence gap. Strong review preserves the uncertainty and defines ownership and validation.",
  },
  {
    question:
      "What is the main defensive purpose of network segmentation?",
    choices: [
      "To make every device communicate with every other device.",
      "To reduce unnecessary communication paths and limit the effect of failures or security events.",
      "To eliminate the need for identity controls.",
      "To guarantee that internal traffic is trustworthy.",
    ],
    answer: 1,
    explanation:
      "Segmentation limits unnecessary connectivity and can reduce blast radius while supporting more focused monitoring and policy.",
  },
  {
    question:
      "A remote-access design allows users to reach only the applications required for their roles instead of the entire internal network. Which principle does this best support?",
    choices: [
      "Broad implicit trust.",
      "Least privilege and bounded access.",
      "Permanent administrator access.",
      "Unmonitored connectivity.",
    ],
    answer: 1,
    explanation:
      "Restricting remote access to role-required resources supports least privilege and reduces unnecessary exposure.",
  },
  {
    question:
      "What should a detection engineer define before choosing alert logic?",
    choices: [
      "The defensive question and decision the detection should support.",
      "The loudest available telemetry source.",
      "The highest possible severity.",
      "The largest possible retention period.",
    ],
    answer: 0,
    explanation:
      "Detection engineering begins with a decision need, then identifies evidence, context, source health, validation, and tuning requirements.",
  },
  {
    question:
      "A new detection correctly alerts on a synthetic risky condition but also alerts on many approved maintenance events. What is the strongest tuning approach?",
    choices: [
      "Disable the rule permanently.",
      "Add reliable maintenance context, preserve risky-condition coverage, and validate both expected and unexpected cases.",
      "Raise the threshold until almost nothing alerts.",
      "Ignore all alerts during maintenance.",
    ],
    answer: 1,
    explanation:
      "Good tuning addresses the reason for noise while preserving the defensive objective and validating the change safely.",
  },
  {
    question:
      "A SIEM correlation joins identity, application, and service-health records that share time and request context. What does correlation provide?",
    choices: [
      "Automatic proof of root cause.",
      "A stronger combined view of related evidence that still requires interpretation.",
      "Permission to investigate real systems.",
      "A guarantee that every record is complete.",
    ],
    answer: 1,
    explanation:
      "Correlation strengthens context by connecting related evidence but does not automatically prove cause, intent, or incident status.",
  },
  {
    question:
      "A central collector is delayed for ten minutes. What is the strongest interpretation of no alerts appearing during that interval?",
    choices: [
      "No suspicious activity occurred.",
      "The absence is weak evidence until source health, backlog, and completeness are understood.",
      "The collector was intentionally disabled.",
      "Every later alert is invalid.",
    ],
    answer: 1,
    explanation:
      "Negative evidence depends on source health. A delayed collector makes missing central alerts less reliable until recovery is validated.",
  },
  {
    question:
      "What is the strongest purpose of incident triage?",
    choices: [
      "To determine the final root cause immediately.",
      "To identify what is confirmed, what may matter most, what impact exists, and what evidence or action is needed next.",
      "To close low-volume alerts automatically.",
      "To replace containment planning.",
    ],
    answer: 1,
    explanation:
      "Triage prioritizes response under uncertainty without pretending the investigation is already complete.",
  },
  {
    question:
      "Which containment action best reflects advanced defensive reasoning?",
    choices: [
      "The broadest possible shutdown regardless of evidence.",
      "A proportional, owned, evidence-preserving, preferably reversible action with reassessment criteria.",
      "No action until absolute certainty exists.",
      "Deleting logs so the system can recover faster.",
    ],
    answer: 1,
    explanation:
      "Containment should reduce risk while accounting for evidence, impact, continuity, ownership, reversibility, and future reassessment.",
  },
  {
    question:
      "Why is chain of custody important in digital forensics?",
    choices: [
      "It documents how evidence was collected, handled, transferred, and preserved so its integrity and history can be explained.",
      "It proves every artifact is malicious.",
      "It replaces technical analysis.",
      "It allows investigators to change evidence after collection.",
    ],
    answer: 0,
    explanation:
      "Chain of custody supports evidence integrity and accountability by documenting the evidence lifecycle.",
  },
  {
    question:
      "Two synthetic forensic sources show slightly different timestamps for related activity. What is the strongest response?",
    choices: [
      "Choose whichever timestamp supports the preferred theory.",
      "Preserve both records, review clock/source context, normalize cautiously, and document uncertainty.",
      "Delete the older timestamp.",
      "Average the two timestamps and call that the exact event time.",
    ],
    answer: 1,
    explanation:
      "Forensic reasoning preserves original evidence and investigates timing differences rather than rewriting records to fit a narrative.",
  },
  {
    question:
      "What is the strongest defensive response to a suspected malware alert on a managed fictional endpoint?",
    choices: [
      "Open the suspicious file to see what it does.",
      "Preserve the alert, use approved containment and evidence procedures, and follow the incident-response workflow.",
      "Send the file to classmates.",
      "Disable endpoint protection so the alert stops.",
    ],
    answer: 1,
    explanation:
      "Malware defense should focus on safe evidence handling, approved containment, monitoring, recovery, and communication rather than executing suspicious content.",
  },
  {
    question:
      "Why should malware indicators be interpreted with context?",
    choices: [
      "Because one indicator may be ambiguous and should be combined with endpoint, identity, network, application, or business evidence.",
      "Because indicators are never useful.",
      "Because every indicator proves compromise.",
      "Because only file names matter.",
    ],
    answer: 0,
    explanation:
      "Indicators gain meaning through context and correlation; one signal alone may not establish incident status.",
  },
  {
    question:
      "Which web-security design decision most directly supports authorization?",
    choices: [
      "Checking whether the authenticated user is allowed to perform the requested action on the requested resource.",
      "Making every page public.",
      "Using a longer page title.",
      "Treating successful login as permission for every function.",
    ],
    answer: 0,
    explanation:
      "Authentication establishes identity; authorization determines whether that identity may perform a particular action on a particular resource.",
  },
  {
    question:
      "A web application receives untrusted user input. What is the strongest defensive design principle?",
    choices: [
      "Treat the input as trusted after authentication.",
      "Validate and safely handle input according to its intended type and context, and encode output appropriately.",
      "Store the raw input everywhere for later use.",
      "Disable logging.",
    ],
    answer: 1,
    explanation:
      "Secure applications treat external input as untrusted and apply context-appropriate validation and safe output handling.",
  },
  {
    question:
      "Why should secrets be separated from application source code?",
    choices: [
      "So they can be managed, restricted, rotated, and protected independently from the codebase.",
      "So developers can post them publicly.",
      "So version control becomes unnecessary.",
      "So every environment uses the same secret forever.",
    ],
    answer: 0,
    explanation:
      "Secrets management reduces accidental exposure and allows independent access control, rotation, and lifecycle management.",
  },
  {
    question:
      "A software dependency is widely used but no longer maintained. What is the strongest secure-architecture response?",
    choices: [
      "Keep it forever because popularity proves safety.",
      "Assess the dependency's role, risk, alternatives, ownership, update path, and migration or compensating-control plan.",
      "Delete every third-party dependency.",
      "Ignore the issue unless an incident occurs.",
    ],
    answer: 1,
    explanation:
      "Dependency risk should be managed through inventory, ownership, evidence, update strategy, alternatives, and proportionate treatment.",
  },
  {
    question:
      "What does cloud shared responsibility require from the customer?",
    choices: [
      "Nothing once a managed service is purchased.",
      "Clear ownership of customer-controlled identity, configuration, data, monitoring, recovery, and governance decisions.",
      "Physical operation of the provider's data centers.",
      "Trusting all provider defaults forever.",
    ],
    answer: 1,
    explanation:
      "Managed services shift some responsibilities, but customer-controlled configuration, access, data, evidence, recovery, and governance remain important.",
  },
  {
    question:
      "A cloud storage service supports encryption, but the customer has not reviewed access or retention. What is the strongest conclusion?",
    choices: [
      "Encryption proves the data is fully governed.",
      "The provider capability is useful, but customer access, purpose, retention, monitoring, and recovery decisions still require evidence.",
      "The storage service is automatically insecure.",
      "Access review is unnecessary when encryption exists.",
    ],
    answer: 1,
    explanation:
      "One control does not replace the rest of the governance lifecycle. Capability and implementation evidence should be evaluated separately.",
  },
  {
    question:
      "Which statement best describes zero-trust thinking?",
    choices: [
      "Internal users and devices are automatically trusted.",
      "Access decisions should be continuously grounded in identity, context, policy, resource sensitivity, and least privilege rather than location alone.",
      "Every request must always be denied.",
      "Network segmentation becomes unnecessary.",
    ],
    answer: 1,
    explanation:
      "Zero-trust thinking reduces implicit trust and emphasizes context-aware, least-privilege access decisions.",
  },
  {
    question:
      "A workload identity needs queue access and read access to one protected dataset. What is the strongest review question?",
    choices: [
      "Does the workload have every permission available?",
      "Does current authorization match the minimum resources and actions required by the documented workload purpose?",
      "Is the workload human-operated?",
      "Does the application have a modern interface?",
    ],
    answer: 1,
    explanation:
      "Workload identities should be governed by purpose, required resources, scope, owner, lifecycle, and evidence just like human identities.",
  },
  {
    question:
      "What is the main difference between symmetric and asymmetric encryption at a conceptual level?",
    choices: [
      "Symmetric encryption uses a shared secret key, while asymmetric encryption uses a mathematically related public/private key pair.",
      "Symmetric encryption never uses keys.",
      "Asymmetric encryption is the same as hashing.",
      "Only asymmetric encryption protects stored data.",
    ],
    answer: 0,
    explanation:
      "Symmetric and asymmetric cryptography use different key models and are chosen according to the security and operational need.",
  },
  {
    question:
      "What is the primary purpose of a cryptographic hash in defensive system design?",
    choices: [
      "To reversibly hide data.",
      "To produce a fixed-length representation useful for integrity checks and related security functions.",
      "To replace access control.",
      "To guarantee that the original data is secret.",
    ],
    answer: 1,
    explanation:
      "Hashing is commonly used to support integrity and related security designs; it is not reversible encryption.",
  },
  {
    question:
      "Why does key rotation matter?",
    choices: [
      "It limits how long one key remains in use and supports lifecycle, exposure reduction, and governance requirements.",
      "It makes encryption unnecessary.",
      "It allows keys to be posted publicly.",
      "It guarantees all encrypted data is safe forever.",
    ],
    answer: 0,
    explanation:
      "Key rotation is part of key lifecycle management and can reduce the consequences of long-lived exposure or stale cryptographic material.",
  },
  {
    question:
      "What is the strongest risk statement?",
    choices: [
      "Cybersecurity is risky.",
      "If the recovery process cannot restore a critical service within its required window, the organization may experience extended operational disruption.",
      "Cloud risk is High.",
      "More controls are needed.",
    ],
    answer: 1,
    explanation:
      "A useful risk statement connects a plausible condition to an affected asset or business outcome and a meaningful consequence.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "Risk before controls.",
      "The meaningful exposure remaining after current controls and treatment are considered.",
      "Risk that has no owner.",
      "A risk that has already been eliminated.",
    ],
    answer: 1,
    explanation:
      "Residual risk remains after preventive, detective, response, recovery, and governance controls are considered.",
  },
  {
    question:
      "A control is documented in policy but no implementation or test evidence is available. What is the strongest conclusion?",
    choices: [
      "The control is fully effective because the policy requires it.",
      "The control expectation exists, but implementation and effectiveness remain unvalidated.",
      "The control definitely failed.",
      "The policy should be ignored.",
    ],
    answer: 1,
    explanation:
      "Control design or policy expectation is not the same as implementation or effectiveness evidence.",
  },
  {
    question:
      "What does data minimization require?",
    choices: [
      "Collecting every available field and deciding later what matters.",
      "Using the least amount and sensitivity of data needed for the defined purpose.",
      "Deleting all security evidence immediately.",
      "Preventing all monitoring.",
    ],
    answer: 1,
    explanation:
      "Minimization keeps collection proportionate to the legitimate business or defensive purpose.",
  },
  {
    question:
      "A security-monitoring team proposes longer retention because the data might be useful someday. What is the strongest privacy response?",
    choices: [
      "Keep it forever by default.",
      "Require a defined purpose and retention rationale, then keep the data only as long as necessary for that purpose and governance requirement.",
      "Publish the data before deletion.",
      "Remove all monitoring.",
    ],
    answer: 1,
    explanation:
      "Retention should be tied to purpose, policy, legal or operational need, access, lifecycle, and review rather than indefinite usefulness claims.",
  },
  {
    question:
      "Which automation design best preserves human judgment?",
    choices: [
      "Automatically close every alert with missing context.",
      "Use automation for safe enrichment or workflow support while keeping consequential or uncertain decisions with accountable human review.",
      "Allow automation to expand its own permissions.",
      "Remove logging so workflows run faster.",
    ],
    answer: 1,
    explanation:
      "Security automation should support consistent low-risk tasks while preserving human ownership for consequential or uncertain decisions.",
  },
  {
    question:
      "An automated enrichment source becomes unavailable. What should a well-designed workflow do?",
    choices: [
      "Invent the missing context.",
      "Fail safely, mark the enrichment as unavailable or Unknown, preserve the case, and route according to the defined degraded-state process.",
      "Close the case automatically.",
      "Treat every alert as malicious.",
    ],
    answer: 1,
    explanation:
      "Automation failure modes should be designed explicitly so missing enrichment does not silently become false certainty.",
  },
  {
    question:
      "Which metric best measures automation value?",
    choices: [
      "Only the number of automated actions.",
      "Time saved, decision quality, error rate, exception handling, analyst workload, and safe completion of intended workflow steps.",
      "The number of scripts written.",
      "The amount of data collected.",
    ],
    answer: 1,
    explanation:
      "Automation value should measure useful outcomes and reliability, not raw activity volume.",
  },
  {
    question:
      "In a multi-source defensive lab, identity logs and application logs agree on an event, but network evidence is incomplete. What is the strongest conclusion?",
    choices: [
      "The event can be confirmed by the agreeing sources while network-level interpretation remains limited.",
      "The event did not occur because one source is incomplete.",
      "The event caused the incident.",
      "The missing network evidence proves evasion.",
    ],
    answer: 0,
    explanation:
      "Evidence can strongly support one claim while remaining insufficient for a different claim. Advanced reasoning preserves that distinction.",
  },
  {
    question:
      "A timeline shows a configuration change at 10:02 and an application error at 10:04. What is the strongest conclusion?",
    choices: [
      "The change definitely caused the error.",
      "The timing makes the change relevant to investigate, but causation requires additional evidence.",
      "The error proves malicious intent.",
      "The events are unrelated because they are two minutes apart.",
    ],
    answer: 1,
    explanation:
      "Chronology can support correlation and prioritization without proving a causal relationship.",
  },
  {
    question:
      "A risk register entry has no named owner. What is the strongest concern?",
    choices: [
      "The risk is automatically Low.",
      "Treatment, acceptance, review, and escalation may not have clear accountability.",
      "The risk no longer exists.",
      "Ownership matters only for compliance audits.",
    ],
    answer: 1,
    explanation:
      "Risk ownership is essential for treatment decisions, residual-risk acceptance, review, and follow-up.",
  },
  {
    question:
      "A security policy says privileged access should be reviewed every quarter, but the most recent review evidence is missing. What should a portfolio artifact say?",
    choices: [
      "Quarterly review is fully implemented.",
      "The policy expectation exists, while current review evidence is incomplete or unavailable.",
      "Privileged access is definitely unsafe.",
      "The policy has no value.",
    ],
    answer: 1,
    explanation:
      "Professional artifacts distinguish expected control design from implementation evidence and avoid unsupported conclusions.",
  },
  {
    question:
      "What makes an incident report portfolio-ready?",
    choices: [
      "It contains the most dramatic language possible.",
      "It clearly separates evidence, timeline, hypotheses, decisions, impact, uncertainty, ownership, recovery, and lessons learned using fictional or sanitized material.",
      "It includes real credentials for authenticity.",
      "It hides all limitations.",
    ],
    answer: 1,
    explanation:
      "Portfolio-ready incident work should demonstrate defensible reasoning, communication, safety, and professional documentation.",
  },
  {
    question:
      "Which statement best demonstrates professional contribution transparency?",
    choices: [
      "I independently created everything, even if tools or guidance were used.",
      "I can explain what I designed, reviewed, revised, decided, and learned, and I acknowledge meaningful assistance honestly.",
      "I do not need to understand the artifact if it looks polished.",
      "Only the final score matters.",
    ],
    answer: 1,
    explanation:
      "Strong portfolio work is explainable and honest about the learner's contribution, reasoning, revisions, and assistance.",
  },
  {
    question:
      "A portfolio draft contains a real internal dashboard screenshot. What is the strongest publication decision?",
    choices: [
      "Publish it after cropping the company logo.",
      "Replace it with a fictional or synthetic representation and keep real internal material out of the public portfolio.",
      "Publish only the most interesting section.",
      "Add more real screenshots for context.",
    ],
    answer: 1,
    explanation:
      "Student portfolios do not require confidential architecture, private logs, internal dashboards, or unresolved real security information.",
  },
  {
    question:
      "A capstone alert is High severity but the underlying evidence is incomplete. How should an executive summary describe it?",
    choices: [
      "As a confirmed breach.",
      "As a potentially high-impact issue with bounded confidence, current evidence, owner, recommended action, and next checkpoint.",
      "As harmless because confidence is incomplete.",
      "Without mentioning uncertainty.",
    ],
    answer: 1,
    explanation:
      "Executive communication should preserve the difference between potential impact and evidentiary confidence.",
  },
  {
    question:
      "Which recovery statement is strongest?",
    choices: [
      "The service responded once, so recovery is complete.",
      "Recovery is supported when service, dependencies, monitoring, identity, configuration, validation, and residual-risk criteria meet the defined state.",
      "Backups alone prove recovery.",
      "Recovery does not require ownership.",
    ],
    answer: 1,
    explanation:
      "Advanced recovery requires evidence across the system and governance context rather than one availability signal.",
  },
  {
    question:
      "What should happen when a risk is formally accepted?",
    choices: [
      "Remove it from all records.",
      "Document the residual risk, rationale, authorized owner, duration or review point, and conditions that should trigger reassessment.",
      "Assume the risk can never increase.",
      "Stop monitoring the related control.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance is an accountable, reviewable decision and does not make the underlying exposure disappear.",
  },
  {
    question:
      "A detection has excellent technical accuracy but requires unnecessary personal data fields. What is the strongest redesign approach?",
    choices: [
      "Keep every field because accuracy is the only objective.",
      "Determine whether the same defensive decision can be supported with a minimized dataset and restrict access and retention appropriately.",
      "Disable all detections.",
      "Publish the fields so users understand the system.",
    ],
    answer: 1,
    explanation:
      "Security quality should include privacy purpose, minimization, access control, retention, and proportionality.",
  },
  {
    question:
      "A technical report says root cause is unresolved, but a manager asks for a simple answer. What is the strongest response?",
    choices: [
      "Choose the most likely cause and present it as fact.",
      "State the strongest supported explanation, preserve unresolved status, explain the current action, and identify what evidence would change the conclusion.",
      "Refuse to provide any update.",
      "Change the technical report to match the manager's preference.",
    ],
    answer: 1,
    explanation:
      "Professional communication can be concise while still preserving the same underlying evidence status and uncertainty.",
  },
  {
    question:
      "After Practice Test 1, a student misses several questions involving source health, identity authorization, and residual risk. What is the strongest next step?",
    choices: [
      "Memorize the answer letters.",
      "Map the misses to those reasoning patterns, review the relevant Advanced modules, and practice new fictional scenarios before Practice Test 2.",
      "Retake the same test repeatedly without review.",
      "Skip directly to the 125-question final.",
    ],
    answer: 1,
    explanation:
      "Practice Test 1 should be diagnostic. Missed questions should produce targeted review and transfer practice before the next assessment.",
  },
];

const coverageGroups = [
  {
    label: "Professional boundaries",
    topics:
      "A1 ethics, authorization, written scope, responsible research, disclosure, sensitive information, and professional responsibility.",
  },
  {
    label: "Architecture and threat reasoning",
    topics:
      "A2 architecture, A3 threat modeling, trust boundaries, segmentation, dependencies, controls, degraded states, and resilience.",
  },
  {
    label: "Network, detection, and SIEM",
    topics:
      "A4 advanced networking defense, A5 detection engineering, A6 SIEM, source health, correlation, tuning, triage, escalation, and monitoring quality.",
  },
  {
    label: "Response, forensics, and malware defense",
    topics:
      "A7 incident response, A8 forensic reasoning, A9 malware defense, evidence preservation, timelines, containment, recovery, and communication.",
  },
  {
    label: "Web and software security",
    topics:
      "A10 web defense and A11 secure software architecture, authentication, authorization, input safety, APIs, secrets, dependencies, testing, and deployment.",
  },
  {
    label: "Cloud, identity, and cryptography",
    topics:
      "A12 cloud architecture, A13 identity and zero trust, A14 cryptography and key management, shared responsibility, workload access, federation, hashing, certificates, and key lifecycle.",
  },
  {
    label: "Risk, privacy, and automation",
    topics:
      "A15 risk/compliance, A16 privacy engineering, A17 security automation, residual risk, treatment, minimization, retention, workflows, failure modes, and governance.",
  },
  {
    label: "Applied labs, portfolio, and capstone",
    topics:
      "A18 defensive labs, A19 portfolio projects, A20 capstone integration, multi-source evidence, professional artifacts, executive communication, and final readiness.",
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

export default function AdvancedPracticeTestOnePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Practice Test 1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              50 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Advanced Practice Test 1
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a 50-question full-track assessment covering the major
            professional and defensive concepts from A1 through A20. This first
            practice test emphasizes breadth: ethics, architecture, threat
            modeling, networking, detection, SIEM, response, forensics, malware
            defense, web and software security, cloud, identity, cryptography,
            risk, privacy, automation, labs, portfolio work, and capstone
            integration.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Treat this as a diagnostic assessment. The goal is to identify which
            Advanced reasoning patterns still need review before Practice Test 2
            and the 125-question Advanced Final Test.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
            >
              Previous: A20 Module Test
            </Link>

            <Link
              href={advancedPath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Advanced Track
            </Link>

            <Link
              href={nextPage}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Practice Test 2
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed the twenty Advanced modules and their module tests.",
            "I will answer all 50 questions before submitting.",
            "I will select the strongest ethical, defensive, evidence-supported answer rather than the most aggressive or absolute option.",
            "I will use my missed questions to create a targeted review plan before Practice Test 2.",
          ]}
        />

        <SectionCard
          eyebrow="Practice Test Coverage"
          title="Eight Full-Track Review Areas"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {coverageGroups.map((group) => (
              <article
                key={group.label}
                className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-5"
              >
                <h3 className="font-bold text-cyan-100">{group.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {group.topics}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Practice Test Instructions"
          title="Complete All 50 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work through the assessment without checking lesson pages.
              </p>
            </div>

            <div className="rounded-xl border border-purple-400/30 bg-purple-400/10 p-4">
              <p className="font-bold text-purple-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Choose the most evidence-aware, ethical, proportionate, and
                defensible answer.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="font-bold text-emerald-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit to reveal your score and explanations, then review the
                reasoning behind every miss.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations stay hidden until submission through the
            existing CyberShield quiz behavior. Record repeated reasoning gaps
            before moving to Practice Test 2.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Advanced Practice Test 1"
          questions={testQuestions}
        />

        <SectionCard
          eyebrow="After Submission"
          title="Turn Missed Questions Into Targeted Review"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Evidence-boundary misses",
                detail:
                  "Review authorization vs. authentication, policy vs. implementation, correlation vs. causation, source health, and confidence.",
              },
              {
                title: "Architecture / cloud misses",
                detail:
                  "Review trust boundaries, dependencies, segmentation, shared responsibility, workload access, resilience, and recovery.",
              },
              {
                title: "Monitoring / response misses",
                detail:
                  "Review defensive questions, telemetry, SIEM correlation, severity vs. confidence, triage, containment, recovery, and reassessment.",
              },
              {
                title: "Risk / privacy / governance misses",
                detail:
                  "Review residual risk, treatment, ownership, acceptance, purpose, minimization, retention, automation governance, and exceptions.",
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
            "Use the score as diagnostic evidence, not as the only measure of Advanced readiness.",
            "Review why each missed answer was weaker instead of memorizing the correct letter.",
            "Look for repeated reasoning errors that appear across several modules.",
            "Prioritize evidence boundaries, source health, identity authorization, risk/privacy, recovery, and communication if they create repeated mistakes.",
            "Complete Practice Test 2 only after targeted review of the weakest domains from this assessment.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Keep all assessment reasoning fictional and defensive
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            Do not access real systems, test real credentials, scan networks,
            probe applications, execute suspicious files, bypass controls, collect
            live logs, inspect private cloud environments, monitor real people, or
            investigate real organizations for this assessment. Use only
            CyberShield Academy concepts and fictional or synthetic scenarios.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Next Assessment
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to Advanced Practice Test 2
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review your missed questions first. Practice Test 2 will use another
            50 questions with heavier mixed-scenario and applied decision-making
            across the full Advanced Track.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: A20 Module Test
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Advanced Track
            </Link>

            <Link
              href={nextPage}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next: Practice Test 2
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}