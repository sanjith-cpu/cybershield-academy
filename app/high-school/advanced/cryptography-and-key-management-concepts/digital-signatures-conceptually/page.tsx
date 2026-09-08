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
const modulePath = `${trackPath}/cryptography-and-key-management-concepts`;
const previousLesson = `${modulePath}/hashing-salting-and-integrity-concepts`;
const nextLesson = `${modulePath}/certificates-and-pki-concepts`;

const objectives = [
  "Explain digital signatures as a mechanism that can provide integrity and signer-authenticity evidence without providing confidentiality by itself.",
  "Distinguish signing, verification, hashing, encryption, certificates, and authorization as separate but related architecture concepts.",
  "Evaluate fictional signature designs using signer identity, private-key custody, verification trust, artifact scope, lifecycle, evidence freshness, and decision point.",
  "Identify signature-design risks such as shared signing keys, missing signer ownership, stale verification trust, unsigned release paths, and treating a signature as authorization.",
  "Build a Digital Signature Trust Review that becomes the fourth artifact in the A14 Key-Management Design Recommendation.",
];

const signatureConcepts = [
  {
    concept: "Signing",
    description:
      "A signer uses a protected private signing key to create cryptographic evidence associated with specific content.",
    architectureQuestion:
      "Who is allowed to sign, what content is in scope, and where does the private signing operation occur?",
  },
  {
    concept: "Verification",
    description:
      "A relying system uses the associated public verification key or trusted certificate relationship to check the signature.",
    architectureQuestion:
      "Who trusts the verification key and what decision follows when verification succeeds or fails?",
  },
  {
    concept: "Integrity",
    description:
      "A valid signature supports confidence that the signed content has not changed since it was signed.",
    architectureQuestion:
      "Is the verifier checking the exact artifact, version, or message that the signer approved?",
  },
  {
    concept: "Signer authenticity",
    description:
      "A valid signature can support confidence that the content was signed by the expected key holder when ownership and trust binding are valid.",
    architectureQuestion:
      "How does the architecture know that this signing key belongs to the expected signer or service?",
  },
  {
    concept: "Trust binding",
    description:
      "The public verification key must be associated with the correct signer identity through a trusted process.",
    architectureQuestion:
      "What evidence connects the key to the signer, organization, service, or publishing role?",
  },
  {
    concept: "Lifecycle",
    description:
      "Signing keys and verification trust change over time through issuance, activation, rotation, revocation, replacement, and retirement.",
    architectureQuestion:
      "What happens to old signatures when keys rotate or signer roles change?",
  },
];

const signaturesVsOtherControls = [
  {
    control: "Hashing",
    mainGoal:
      "Integrity comparison against a trusted reference.",
    keyRelationship:
      "No signer private key is required for a plain hash.",
    whatItDoesNotProve:
      "A hash alone does not prove who published the content.",
    relationToSignatures:
      "Digital-signature systems often sign a digest or equivalent representation of the content.",
  },
  {
    control: "Encryption",
    mainGoal:
      "Confidentiality through reversible protection with the appropriate key.",
    keyRelationship:
      "Symmetric or asymmetric encryption relationship.",
    whatItDoesNotProve:
      "Encryption alone does not prove who approved or published the content.",
    relationToSignatures:
      "Data may be both encrypted for confidentiality and signed for integrity/authenticity.",
  },
  {
    control: "Digital signature",
    mainGoal:
      "Integrity plus signer-authenticity evidence.",
    keyRelationship:
      "Protected private signing key + public verification relationship.",
    whatItDoesNotProve:
      "A signature does not automatically authorize the recipient or keep the content secret.",
    relationToSignatures:
      "Verification trust depends on signer ownership and key lifecycle.",
  },
  {
    control: "Certificate",
    mainGoal:
      "Bind identity information to a public key under an issuing trust relationship.",
    keyRelationship:
      "Certificate carries public-key identity information; private key remains protected separately.",
    whatItDoesNotProve:
      "A certificate by itself does not prove a particular artifact was approved.",
    relationToSignatures:
      "Certificates can help relying systems trust the public key used to verify signatures.",
  },
  {
    control: "Authorization",
    mainGoal:
      "Decide which identity or service is allowed to perform an action.",
    keyRelationship:
      "May use identity and policy evidence but is not itself a signature mechanism.",
    whatItDoesNotProve:
      "Authorization does not prove that a file remained unchanged after approval.",
    relationToSignatures:
      "A signature may prove who signed; authorization decides whether that signer was allowed to approve the action.",
  },
];

const trustDimensions = [
  {
    dimension: "Signer identity",
    question:
      "Who or what is represented by the signing key?",
    evidence:
      "Release Engineering signer, document-approval service, software publisher, data-export service, configuration publisher.",
    warning:
      "A valid signature is not useful if nobody knows who owns the signing key.",
  },
  {
    dimension: "Private-key custody",
    question:
      "Where does the signing operation occur and how narrowly is private-key access controlled?",
    evidence:
      "Protected signing service, restricted signing role, non-exportable key boundary, approved workload identity.",
    warning:
      "Copying one private signing key across many systems expands risk and weakens accountability.",
  },
  {
    dimension: "Verification trust",
    question:
      "How does the verifier know which public key or certificate to trust?",
    evidence:
      "Trusted key inventory, certificate relationship, publisher record, approved trust store.",
    warning:
      "A signature can verify mathematically against the wrong key and still fail the architecture trust requirement.",
  },
  {
    dimension: "Artifact scope",
    question:
      "What exactly is being signed?",
    evidence:
      "Versioned release package, configuration bundle, export manifest, approved document, update catalog.",
    warning:
      "Signing a broad container may not prove every nested item was reviewed unless scope is clear.",
  },
  {
    dimension: "Decision point",
    question:
      "When does the relying system verify the signature?",
    evidence:
      "Before deployment, before import, before installation, before approval, before release.",
    warning:
      "A signature has little value if no system checks it before the sensitive action.",
  },
  {
    dimension: "Failure behavior",
    question:
      "What happens when verification fails or trust is Unknown?",
    evidence:
      "Block, quarantine, hold for review, mark Unknown, require alternate approved source.",
    warning:
      "Logging a failed signature but continuing automatically can undermine the control.",
  },
  {
    dimension: "Lifecycle",
    question:
      "How are signing keys rotated, revoked, replaced, and retired?",
    evidence:
      "Key lifecycle record, signer-role change, certificate renewal, trust-store update, archived verification metadata.",
    warning:
      "Old signing trust should not remain active indefinitely after ownership or purpose changes.",
  },
  {
    dimension: "Evidence freshness",
    question:
      "Is the verification trust still current enough for the decision?",
    evidence:
      "Current signer owner, current certificate/trust record, current release policy, current verification logs.",
    warning:
      "Stale signer ownership should move the conclusion to Conditional, Unknown, or Blocked.",
  },
];

const signingUseCases = [
  {
    useCase: "Software release package",
    signer:
      "Release Engineering signing service",
    verifier:
      "Deployment pipeline",
    protectionGoal:
      "Integrity + software publisher authenticity",
    decision:
      "Deploy only after successful signature verification and release-policy approval.",
  },
  {
    useCase: "Configuration baseline",
    signer:
      "Platform Security publisher",
    verifier:
      "Environment promotion workflow",
    protectionGoal:
      "Integrity + approved configuration publisher identity",
    decision:
      "Promote only when signature and configuration approval both pass.",
  },
  {
    useCase: "Partner data package",
    signer:
      "Approved partner publishing service",
    verifier:
      "Northbridge integration service",
    protectionGoal:
      "Integrity + partner publisher authenticity",
    decision:
      "Import only after trust and signature checks; authorization still controls allowed data flow.",
  },
  {
    useCase: "Sensitive export manifest",
    signer:
      "Analytics export service",
    verifier:
      "Receiving workflow",
    protectionGoal:
      "Integrity + approved export service identity",
    decision:
      "Accept only when signature, export authorization, and recipient policy all match.",
  },
  {
    useCase: "Operational procedure document",
    signer:
      "Governance approval service",
    verifier:
      "Operations portal",
    protectionGoal:
      "Integrity + approval provenance",
    decision:
      "Display as approved only when signer trust is current.",
  },
  {
    useCase: "Backup recovery manifest",
    signer:
      "Resilience platform",
    verifier:
      "Restore workflow",
    protectionGoal:
      "Integrity + approved recovery-source authenticity",
    decision:
      "Proceed only when signature, backup identity, and decryption/recovery requirements all pass.",
  },
];

const lifecycleStates = [
  {
    state: "Provisioned",
    meaning:
      "A signing key exists but may not yet be active for production signing.",
    decision:
      "Confirm owner, purpose, custody, and approval before activation.",
  },
  {
    state: "Active",
    meaning:
      "The key is currently approved for its defined signing purpose.",
    decision:
      "Monitor signing use, scope, ownership, and verification trust.",
  },
  {
    state: "Rotation pending",
    meaning:
      "A replacement signing relationship is being prepared.",
    decision:
      "Coordinate verifier trust so old and new signatures remain understandable during transition.",
  },
  {
    state: "Revoked",
    meaning:
      "The trust relationship should no longer be accepted for new decisions.",
    decision:
      "Update relying systems and preserve evidence explaining why revocation occurred.",
  },
  {
    state: "Retired",
    meaning:
      "The signing key is no longer used for new content.",
    decision:
      "Preserve enough verification metadata to interpret historical signatures where required.",
  },
  {
    state: "Unknown",
    meaning:
      "Ownership, trust state, or lifecycle evidence cannot be established.",
    decision:
      "Do not treat signatures from the key as currently trusted until governance is restored.",
  },
];

const principles = [
  {
    title: "Signatures provide evidence, not automatic authorization",
    meaning:
      "A valid signature can support integrity and signer authenticity, but policy still decides whether the signer was allowed to approve the action.",
    review:
      "Does the workflow require both signature verification and authorization where needed?",
  },
  {
    title: "The private signing key defines the signer boundary",
    meaning:
      "Whoever can use the private signing key can potentially create valid signatures for that signing identity.",
    review:
      "Is private-key access narrower than the population allowed to consume the signed content?",
  },
  {
    title: "Verification trust must be explicit",
    meaning:
      "A relying system needs a trusted public key or certificate relationship.",
    review:
      "Where does the verifier get the trusted signer identity?",
  },
  {
    title: "Signing scope should be precise",
    meaning:
      "The architecture should know whether the signature covers one file, a manifest, a package, a message, or a whole release set.",
    review:
      "Can the verifier identify exactly what content the signer approved?",
  },
  {
    title: "Verification must happen before the sensitive action",
    meaning:
      "A signature control should influence the release, import, install, or approval decision.",
    review:
      "Is signature verification a gate or merely an informational log?",
  },
  {
    title: "Rotation requires verifier coordination",
    meaning:
      "New signing keys do not help if relying systems continue trusting only the old key.",
    review:
      "Does the rollout include signer and verifier lifecycle together?",
  },
  {
    title: "Historical signatures need context",
    meaning:
      "Archived content may have been validly signed under an older key that is now retired.",
    review:
      "Can the organization distinguish retired historical trust from currently active trust?",
  },
  {
    title: "Signer ownership should stay current",
    meaning:
      "A signing key should not remain active after the responsible team, service, or purpose changes.",
    review:
      "Does ownership change trigger review or retirement?",
  },
];

const vocabulary = [
  {
    term: "Digital signature",
    definition:
      "Cryptographic evidence created with a private signing key and checked using the associated public verification relationship.",
  },
  {
    term: "Signer",
    definition:
      "The person, service, team, or publishing role represented by the signing key.",
  },
  {
    term: "Signing key",
    definition:
      "The protected private key used to create signatures.",
  },
  {
    term: "Verification key",
    definition:
      "The public key used by relying systems to verify signatures.",
  },
  {
    term: "Signature verification",
    definition:
      "The process of checking whether a signature is valid for specific content under the expected public-key trust relationship.",
  },
  {
    term: "Authenticity",
    definition:
      "Confidence that content or an action is associated with the expected signer identity.",
  },
  {
    term: "Signed artifact",
    definition:
      "A file, package, manifest, message, document, or other object protected by a digital signature.",
  },
  {
    term: "Relying system",
    definition:
      "A system that makes a decision based on signature verification and signer trust.",
  },
  {
    term: "Trust binding",
    definition:
      "The association between a public verification key and the signer identity expected by relying systems.",
  },
  {
    term: "Revocation",
    definition:
      "The act of marking a signing trust relationship as no longer acceptable for current decisions.",
  },
  {
    term: "Historical validation",
    definition:
      "The ability to understand whether an older signature was valid under the trust state that applied when it was created.",
  },
  {
    term: "Signature policy",
    definition:
      "Rules defining which signers, content types, trust relationships, and verification outcomes are acceptable.",
  },
];

const records = [
  {
    id: "SIG-01",
    artifact: "Student Services Release Package",
    signer: "Release Engineering Signing Service",
    purpose: "Integrity + approved software publisher authenticity",
    signingBoundary: "Protected release-signing service",
    verifier: "Production Deployment Pipeline",
    trustSource: "Approved release verification key inventory",
    verificationPoint: "Before production deployment",
    failureAction: "Block deployment and open release review",
    lifecycle: "Active key; quarterly owner review",
    evidence: "Release ID + signer ID + signature result + policy approval",
    status: "Confirmed",
    concern:
      "Deployment still requires release authorization in addition to a valid signature.",
  },
  {
    id: "SIG-02",
    artifact: "Platform Configuration Baseline",
    signer: "Platform Security Publisher",
    purpose: "Integrity + approved configuration publisher identity",
    signingBoundary: "Controlled configuration-publishing service",
    verifier: "Environment Promotion Workflow",
    trustSource: "Current platform-signing trust record",
    verificationPoint: "Before promotion to production",
    failureAction: "Hold promotion for owner review",
    lifecycle: "Active; rotation planned next quarter",
    evidence: "Baseline version + signer + verification event",
    status: "Confirmed",
    concern:
      "Rotation must update all promotion workflows before the old key is retired.",
  },
  {
    id: "SIG-03",
    artifact: "Partner Scheduling Data Package",
    signer: "Scheduling Partner Publisher",
    purpose: "Integrity + partner publisher authenticity",
    signingBoundary: "Partner-controlled signing service",
    verifier: "Northbridge Integration Service",
    trustSource: "Partner certificate/trust relationship",
    verificationPoint: "Before ingestion",
    failureAction: "Quarantine package and request partner review",
    lifecycle: "Renewal due in 45 days",
    evidence: "Partner signer + package ID + trust status + sponsor",
    status: "Conditional",
    concern:
      "Current verification is valid, but partner trust renewal must complete before expiration.",
  },
  {
    id: "SIG-04",
    artifact: "Analytics Export Manifest",
    signer: "Analytics Export Service",
    purpose: "Integrity + approved export-service identity",
    signingBoundary: "Analytics export-signing service",
    verifier: "Receiving Transfer Workflow",
    trustSource: "Analytics signer inventory",
    verificationPoint: "Before transfer acceptance",
    failureAction: "Reject transfer and reopen export review",
    lifecycle: "Current",
    evidence: "Export authorization + manifest + signature result",
    status: "Conditional",
    concern:
      "A valid signature does not replace recipient authorization or data-release policy.",
  },
  {
    id: "SIG-05",
    artifact: "Legacy Reporting Package",
    signer: "Legacy Shared Signing Key",
    purpose: "Historical package integrity",
    signingBoundary: "Multiple legacy servers",
    verifier: "Manual reporting workflow",
    trustSource: "Old public key copied into several systems",
    verificationPoint: "Inconsistent",
    failureAction: "Undefined",
    lifecycle: "Owner Unknown; rotation Unknown",
    evidence: "Partial key inventory + stale signer documentation",
    status: "Blocked",
    concern:
      "Shared private-key custody and Unknown ownership prevent trustworthy signer attribution.",
  },
  {
    id: "SIG-06",
    artifact: "Recovery Procedure Bundle",
    signer: "Resilience Approval Service",
    purpose: "Integrity + approved recovery-procedure authenticity",
    signingBoundary: "Resilience publishing service",
    verifier: "Recovery Operations Portal",
    trustSource: "Current resilience trust inventory",
    verificationPoint: "Before procedure is displayed as approved",
    failureAction: "Mark procedure Unverified and require alternate approved source",
    lifecycle: "Current",
    evidence: "Procedure version + signer + approval record",
    status: "Confirmed",
    concern:
      "Emergency pressure should not cause operators to bypass verification.",
  },
  {
    id: "SIG-07",
    artifact: "Archived Policy Document",
    signer: "Retired Governance Signing Key",
    purpose: "Historical integrity + approval provenance",
    signingBoundary: "Former governance signing service",
    verifier: "Policy Archive Viewer",
    trustSource: "Historical trust record",
    verificationPoint: "When archived document is viewed",
    failureAction: "Mark historical signature Unknown if trust context cannot be reconstructed",
    lifecycle: "Retired; historical verification retained",
    evidence: "Archived signer metadata + retirement record",
    status: "Confirmed",
    concern:
      "Retired historical trust must not be confused with authority to sign new policy documents.",
  },
];

const dashboardMetrics = [
  {
    label: "Signature relationships reviewed",
    value: "7",
    note: "Software, configuration, partner, export, legacy, recovery, and policy signing",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Modern release, configuration, recovery, and historical-policy verification have current evidence",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Partner renewal and export-authorization boundaries require continued review",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy shared signing key lacks trustworthy ownership and custody",
  },
];

const logs = [
  "[08:05] SIG-01 release-package signer=RELEASE_ENGINEERING verify=PASS policy=APPROVED state=CONFIRMED",
  "[08:29] SIG-02 config-baseline signer=PLATFORM_SECURITY verify=PASS rotation=PLANNED state=CONFIRMED",
  "[08:53] SIG-03 partner-package verify=PASS renewal_due=45d state=CONDITIONAL",
  "[09:17] SIG-04 export-manifest verify=PASS authorization=SEPARATE state=CONDITIONAL",
  "[09:41] SIG-05 legacy-package signer_owner=UNKNOWN private_key_custody=SHARED state=BLOCKED",
  "[10:05] SIG-06 recovery-procedure verify=PASS state=CONFIRMED",
  "[10:29] SIG-07 archived-policy trust=HISTORICAL key=RETIRED verify=PASS state=CONFIRMED",
];

const antiPatterns = [
  {
    title: "One shared private signing key across many teams",
    problem:
      "Multiple systems can produce signatures under the same signer identity, destroying accountability.",
    better:
      "Use narrow signer ownership and protected private-key custody.",
  },
  {
    title: "Signature treated as authorization",
    problem:
      "A valid signature is accepted even when the signer was not authorized for the business action.",
    better:
      "Require both cryptographic verification and applicable policy authorization.",
  },
  {
    title: "Verification happens after deployment",
    problem:
      "The signature is checked only for audit after the sensitive action already occurred.",
    better:
      "Verify before release, import, install, transfer, or approval.",
  },
  {
    title: "Public verification key has Unknown origin",
    problem:
      "The verifier can check the math but cannot establish who the key represents.",
    better:
      "Use a governed key inventory, certificate, or other trusted signer binding.",
  },
  {
    title: "Retired key still trusted for new signatures",
    problem:
      "Historical verification trust becomes accidental current signing authority.",
    better:
      "Separate historical validation from currently active signer trust.",
  },
  {
    title: "Signature scope is unclear",
    problem:
      "Teams assume a signature covers every nested file when it may only cover one manifest.",
    better:
      "Document exactly which content is signed and verified.",
  },
  {
    title: "Failed verification only creates a warning",
    problem:
      "The workflow continues despite integrity or signer trust failure.",
    better:
      "Define block, quarantine, review, or other explicit failure behavior.",
  },
  {
    title: "Signing-key lifecycle has no owner",
    problem:
      "Rotation, revocation, retirement, and role changes are not coordinated.",
    better:
      "Assign signing-key owner, relying-system owner, lifecycle trigger, and closure evidence.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep SIG-05 Blocked until the shared private key is replaced with a governed signing identity that has clear ownership, narrow custody, defined verification, and lifecycle.",
    outcome:
      "Best. Shared signing-key custody prevents trustworthy attribution and weakens lifecycle control.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the shared key because every server belongs to the reporting department.",
    outcome:
      "Risky. Department ownership does not restore signer accountability.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Trust every package because the signature verifies mathematically.",
    outcome:
      "Risky. Verification against an ungoverned signer key does not establish trusted authorship.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Accept the signed export only if the signature verifies and the separate export-authorization policy also approves the recipient and data release.",
    outcome:
      "Best. Signature authenticity and authorization are separate requirements.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Treat a valid signature as permission to send the export to any recipient.",
    outcome:
      "Risky. Signing does not grant authorization.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Skip signature verification because authorization already approved the export.",
    outcome:
      "Caution. Authorization and integrity/authenticity protect different parts of the workflow.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What does a digital signature primarily provide?",
    choices: [
      "Confidentiality only.",
      "Integrity and signer-authenticity evidence.",
      "Authorization to every resource.",
      "Password recovery.",
    ],
    answer: 1,
    explanation:
      "Digital signatures support content integrity and confidence about the signer when trust binding is valid.",
  },
  {
    question:
      "Which key is normally protected by the signer?",
    choices: [
      "The public verification key.",
      "The private signing key.",
      "Every verifier's public key.",
      "No key is required.",
    ],
    answer: 1,
    explanation:
      "The private signing key should remain under controlled signer custody.",
  },
  {
    question:
      "Why is public-key trust binding important?",
    choices: [
      "Because the verifier must know that the public key represents the expected signer.",
      "Because public keys must always be secret.",
      "Because it makes encryption unnecessary.",
      "Because it replaces authorization.",
    ],
    answer: 0,
    explanation:
      "Mathematical verification is only meaningful when the verification key is trusted for the expected signer identity.",
  },
  {
    question:
      "What should happen when an important signature verification fails?",
    choices: [
      "Continue automatically.",
      "Follow a defined action such as block, quarantine, or review.",
      "Delete all evidence.",
      "Assume authorization overrides the failure.",
    ],
    answer: 1,
    explanation:
      "Signature verification should influence the sensitive workflow decision.",
  },
  {
    question:
      "What is strongest for a signed software release?",
    choices: [
      "Deploy when the signature verifies, even if release authorization is missing.",
      "Require both signature verification and the applicable release-authorization decision.",
      "Skip signature checks because the file has a hash.",
      "Use one shared signing key across all teams.",
    ],
    answer: 1,
    explanation:
      "Signature verification and authorization solve different problems and may both be required.",
  },
  {
    question:
      "Why should retired signing keys sometimes remain represented in historical trust records?",
    choices: [
      "So they can keep signing new content.",
      "So older signatures can still be interpreted correctly without granting new signing authority.",
      "So private keys can be published.",
      "So rotation is unnecessary.",
    ],
    answer: 1,
    explanation:
      "Historical validation and current signing authority should be separated.",
  },
  {
    question:
      "Which statement is strongest?",
    choices: [
      "Digital signatures encrypt content for confidentiality.",
      "Digital signatures support integrity and signer authenticity, while encryption and authorization remain separate controls.",
      "A valid signature always means the action was authorized.",
      "Every signature should use one organization-wide private key.",
    ],
    answer: 1,
    explanation:
      "Signatures are one part of a broader trust and authorization architecture.",
  },
];

const checklistItems = [
  "Every signing relationship identifies a signer.",
  "Every signing relationship identifies the protected artifact or message scope.",
  "Private signing-key custody is explicit.",
  "Private signing keys are not broadly shared across unrelated systems.",
  "Public verification trust is tied to the expected signer identity.",
  "Verification happens before the sensitive action.",
  "Failure behavior is defined.",
  "Signature verification does not replace authorization.",
  "Signatures are not described as confidentiality controls.",
  "Hashing and signing are clearly distinguished.",
  "Certificates are understood as possible trust-binding mechanisms.",
  "Signing-key lifecycle includes rotation and retirement.",
  "Revoked or retired keys are not trusted for new signing.",
  "Historical signatures retain enough context for interpretation where required.",
  "Partner signing relationships have sponsor and lifecycle evidence.",
  "Environment or publishing scope is documented.",
  "Signer ownership changes trigger review.",
  "Evidence freshness affects trust decisions.",
  "Legacy shared signing keys remain visible as Blocked findings.",
  "No lesson activity requires real private-key extraction, signature forgery, or trust bypass.",
];

const takeaways = [
  "Digital signatures support integrity and signer-authenticity evidence.",
  "A signature does not provide confidentiality by itself.",
  "The private signing key defines the signer trust boundary.",
  "Verification requires a trusted public-key or certificate relationship.",
  "A valid signature does not automatically authorize the business action.",
  "Signing scope should identify exactly which content is covered.",
  "Verification should happen before the sensitive action.",
  "Rotation and revocation require coordination with relying systems.",
  "Historical signature validation should be separated from current signing authority.",
  "The Digital Signature Trust Review prepares you for A14.5 Certificates and PKI Concepts.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A14
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

export default function DigitalSignaturesConceptuallyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A14.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Digital Signatures Conceptually
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A digital signature adds something a plain hash cannot: evidence
            about the signer. That makes signing useful for release packages,
            configuration baselines, partner data, approved documents, and
            other workflows where integrity and publisher identity both matter.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson stays conceptual and defensive. It does not teach
            signature forgery, private-key extraction, certificate abuse, or
            methods for bypassing verification.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A14: Cryptography and Key Management Concepts"
          lessonTitle="Digital Signatures Conceptually"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.4 Entry Readiness"
          items={[
            "I can distinguish hashing from encryption.",
            "I understand that a hash supports integrity comparison but does not prove authorship by itself.",
            "I can explain public/private key relationships from A14.2.",
            "I will use only fictional signing keys, public verification records, and synthetic evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Matching Hash Says the Content Matches. A Trusted Signature Can Also Say Who Signed It."
        >
          <p className="leading-8">
            A release pipeline may know that a file matches a stored digest, but
            it still needs to know whether that reference came from the expected
            publisher. Digital signatures connect integrity to a signer trust
            relationship—provided the private key is protected and the verifier
            trusts the correct public key.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A signature is trustworthy only when signer identity, private-key custody, verification trust, lifecycle, and decision behavior are all governed.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Signature Concepts"
          title="Six Parts of a Signature Trust Relationship"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {signatureConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.concept}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Architecture question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.architectureQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Related Controls"
          title="Signatures, Hashing, Encryption, Certificates, and Authorization"
        >
          <div className="grid gap-5">
            {signaturesVsOtherControls.map((item) => (
              <article
                key={item.control}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.control}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Main goal
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.mainGoal}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Key relationship
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.keyRelationship}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      What it does not prove
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.whatItDoesNotProve}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Relationship to signatures
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.relationToSignatures}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Dimensions"
          title="Eight Questions Behind a Reliable Signature Design"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trustDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Evidence: {item.evidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Warning: {item.warning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Defensive Use Cases"
          title="Where Signature Trust Commonly Appears"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {signingUseCases.map((item) => (
              <article
                key={item.useCase}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.useCase}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Signer: {item.signer}
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Verifier: {item.verifier}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Goal: {item.protectionGoal}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Decision: {item.decision}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Lifecycle"
          title="Signing Trust Changes Over Time"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {lifecycleStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Governance decision: {item.decision}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for Signature Architecture"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Digital Signature Terms"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.term}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Signature Register"
          title="Seven Northbridge Signature Trust Records"
        >
          <div className="grid gap-5">
            {records.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.artifact}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Signer", item.signer],
                    ["Purpose", item.purpose],
                    ["Signing boundary", item.signingBoundary],
                    ["Verifier", item.verifier],
                    ["Trust source", item.trustSource],
                    ["Verification point", item.verificationPoint],
                    ["Failure action", item.failureAction],
                    ["Lifecycle", item.lifecycle],
                    ["Evidence", item.evidence],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Architecture concern
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.concern}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Digital Signature Dashboard"
          subtitle="Fictional signer ownership, verification trust, lifecycle, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Legacy Signing Key Has Shared Private-Key Custody"
          severity="High"
          time="09:41"
          source="Fictional Signature Architecture Review"
          details="SIG-05 uses one legacy private signing key across multiple servers. The signer owner is Unknown, verification behavior is inconsistent, and rotation evidence is missing."
          recommendation="Keep the relationship Blocked until a new governed signing identity has narrow private-key custody, clear ownership, verification trust, and lifecycle."
        />

        <Section
          eyebrow="Signature vs. Authorization"
          title="A Valid Signature Can Still Represent an Unauthorized Action"
        >
          <p className="leading-8">
            Suppose an analytics service signs an export manifest correctly.
            The signature can show that the manifest came from the expected
            signing service and was not changed after signing. It does not, by
            itself, prove that the export was permitted for the recipient.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Signature decision
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Did the expected signer approve this exact content, and has the
                content remained unchanged?
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Authorization decision
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Was the signer or service allowed to approve this action for
                this resource, recipient, environment, and purpose?
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Signature Verification Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Shared Legacy Signing Key"
          question="What is the strongest conclusion for SIG-05?"
          evidence={[
            "Multiple legacy servers can use the same private signing key.",
            "The current signer owner is Unknown.",
            "Verification behavior is inconsistent.",
            "Rotation evidence is missing.",
            "The public verification key still exists in several relying systems.",
          ]}
          options={[
            "Confirmed because signatures still verify mathematically.",
            "Blocked until shared private-key custody is replaced by a governed signer identity with clear ownership and lifecycle.",
            "Safe because all servers belong to one department.",
            "Accepted automatically because the key is old.",
          ]}
          bestAnswer={1}
          explanation="Mathematical verification does not restore signer accountability when private-key custody and ownership are not trustworthy."
        />

        <Section
          eyebrow="Common Signature Mistakes"
          title="Eight Ways Signature Trust Is Weakened"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Shared Legacy Signing Identity"
          scenario="Several old reporting servers use the same private signing key. Nobody can identify the current signer owner, but all existing signatures still verify."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Signed Export to an Approved Recipient"
          scenario="An analytics service produces a valid signed export manifest. The export also has a separate policy that decides whether the recipient is authorized."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Digital Signature Trust Review"
        >
          <p className="leading-8">
            Use fictional signers, public verification records, artifacts,
            certificates, owners, and synthetic evidence only. Do not inspect or
            manipulate real private keys or signatures.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional signature-trust records.",
              "Give every record a stable SIG ID.",
              "Record the signed artifact or message.",
              "State the integrity/authenticity purpose.",
              "Record signer identity.",
              "Record private signing-key custody boundary.",
              "Record verifier or relying system.",
              "Record public verification trust source.",
              "Record artifact scope.",
              "Record verification decision point.",
              "Record verification failure action.",
              "Record signer authorization dependency.",
              "Record lifecycle state.",
              "Record rotation or revocation trigger.",
              "Record evidence source and freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least three software/configuration examples.",
              "Include at least two partner/integration examples.",
              "Include at least two document or approval examples.",
              "Include at least two recovery or backup examples.",
              "Include at least one historical retired-key example.",
              "Include at least one shared private-key problem and keep it Blocked.",
              "Add change triggers for signer owner, certificate, key, application, artifact scope, environment, and verification-policy changes.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not use real private keys, sign real artifacts, forge
              signatures, alter certificate trust, or bypass verification. This
              is a defensive architecture review only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Signed Export Manifest"
          question="What is the strongest architecture decision for SIG-04?"
          evidence={[
            "The analytics service signature verifies successfully.",
            "The signer identity is current.",
            "The export manifest has not changed after signing.",
            "Recipient authorization is decided by a separate policy.",
            "The data release is sensitive.",
          ]}
          options={[
            "Accept the export only when both signature verification and recipient authorization succeed.",
            "Send to any recipient because the signature is valid.",
            "Skip signature verification because authorization exists.",
            "Treat signing as encryption for confidentiality.",
          ]}
          bestAnswer={0}
          explanation="Signature trust and authorization answer different questions and should both be satisfied for the sensitive export."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional Signing Program With Inconsistent Trust"
        >
          <p className="leading-8">
            A fictional organization signs software, configuration packages,
            partner data, and recovery procedures, but every team manages signer
            trust differently. Some keys are shared, some verification points
            are optional, and old keys remain trusted indefinitely. Redesign the
            program conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Signer inventory",
              "Private-key custody",
              "Public verification trust",
              "Certificate relationships",
              "Artifact scope",
              "Verification-before-action",
              "Failure behavior",
              "Signer authorization",
              "Rotation planning",
              "Revocation handling",
              "Historical validation",
              "Environment scope",
              "Partner signer lifecycle",
              "Recovery signing",
              "Evidence freshness",
              "Decision states",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            A mature signature architecture should make it easy to answer who
            signed, what was signed, which key was trusted, when verification
            occurred, what policy authorized the action, and what happens when
            trust changes.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.4 Mini Quiz: Digital Signatures Conceptually"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Digital Signature Trust Review"
          prompt="Create the fourth artifact for your A14 Key-Management Design Recommendation: a fictional Digital Signature Trust Review with at least fifteen records. Include SIG ID, artifact/message, protection purpose, signer, private-key custody, verifier, public-key/certificate trust source, artifact scope, verification point, failure action, authorization dependency, lifecycle, rotation/revocation trigger, evidence, freshness, status, concern, next action, and change trigger."
          tips={[
            "Clearly separate signing from encryption.",
            "Show private-key custody and public verification trust.",
            "Include signer authorization as a separate control.",
            "Include at least one retired historical signing relationship.",
            "Keep one shared private-key design Blocked.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.5?"
        >
          <p className="leading-8">
            A14.5 moves into Certificates and PKI Concepts. Before continuing,
            make sure you can explain why a verifier needs more than a public
            key: it also needs a trusted way to know whose public key it is and
            whether that trust is still current.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain what a digital signature provides.",
              "I can distinguish signing from encryption and hashing.",
              "I can explain private signing-key custody and public verification trust.",
              "I can explain why a valid signature does not automatically authorize an action.",
              "I can evaluate signer lifecycle, rotation, revocation, and historical trust.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Digital Signature Trust Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Name the signer",
                detail:
                  "Do not write only 'signed.' Identify the person, service, publisher, or role represented by the signing key.",
              },
              {
                title: "Show private-key custody",
                detail:
                  "Document the protected boundary where signing operations occur and who is allowed to use them.",
              },
              {
                title: "Show verification trust",
                detail:
                  "Record the trusted public key, certificate, or inventory that connects the verifier to the expected signer.",
              },
              {
                title: "Show artifact scope",
                detail:
                  "Make clear whether the signature covers a file, manifest, package, message, or full release set.",
              },
              {
                title: "Separate authorization",
                detail:
                  "Record which policy decides whether the signer was permitted to approve the business action.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Rotation, revocation, retirement, and historical verification should all have defined states.",
              },
              {
                title: "Show verification outcome",
                detail:
                  "A failed or Unknown signature should produce a visible decision rather than a quiet warning.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.5 will show how certificates and PKI help bind public keys to identities at scale.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Signature learning does not require forging or bypassing trust
          </h2>
          <p className="mt-3 leading-7">
            Do not attempt to forge signatures, extract private signing keys,
            alter real trust stores, abuse certificates, bypass verification, or
            sign artifacts without authorization. All signers, keys,
            certificates, and verification evidence in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.4 Digital Signatures Conceptually Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a signature-trust model built around signer identity,
            private-key custody, public verification trust, artifact scope,
            verification timing, authorization, lifecycle, and evidence. Next,
            A14.5 focuses on Certificates and PKI Concepts.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}