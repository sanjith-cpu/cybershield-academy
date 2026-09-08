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
const previousLesson = `${modulePath}/digital-signatures-conceptually`;
const nextLesson = `${modulePath}/key-storage-and-rotation`;

const objectives = [
  "Explain certificates and PKI as a trust architecture that binds identities to public keys through issuing and relying relationships.",
  "Distinguish certificate subject, issuer, public key, validity period, trust chain, revocation state, relying system, and private-key ownership.",
  "Evaluate fictional certificate relationships using purpose, identity binding, certificate authority, trust scope, lifecycle, renewal, revocation, monitoring, and evidence freshness.",
  "Identify PKI design risks such as expired certificates, unclear ownership, overbroad trust anchors, missing renewal responsibility, stale revocation evidence, and environment trust overlap.",
  "Build a Certificate and PKI Trust Register that becomes the fifth artifact in the A14 Key-Management Design Recommendation.",
];

const certificateParts = [
  {
    part: "Subject identity",
    meaning:
      "The service, system, user, workload, or organization the certificate claims to represent.",
    designQuestion:
      "Is the subject identity precise enough for the relying system to know what it is trusting?",
  },
  {
    part: "Public key",
    meaning:
      "The public half of the key relationship associated with the subject.",
    designQuestion:
      "Does the certificate bind the expected public key to the expected identity?",
  },
  {
    part: "Issuer",
    meaning:
      "The certificate authority or issuing relationship that signed the certificate.",
    designQuestion:
      "Why does the relying system trust this issuer?",
  },
  {
    part: "Validity period",
    meaning:
      "The time window during which the certificate is intended to be accepted.",
    designQuestion:
      "Who owns renewal and what happens before expiration?",
  },
  {
    part: "Usage / purpose",
    meaning:
      "The intended certificate role, such as service identity, signing, or another bounded trust purpose.",
    designQuestion:
      "Is the certificate being used only for the purpose it was issued to support?",
  },
  {
    part: "Trust chain",
    meaning:
      "The issuing path that connects the subject certificate to a root or other trusted anchor.",
    designQuestion:
      "Can the relying system validate the full path to an approved trust anchor?",
  },
];

const pkiRoles = [
  {
    role: "Root certificate authority",
    responsibility:
      "Serves as a top-level trust anchor for a PKI trust domain.",
    risk:
      "Overbroad or poorly governed root trust can affect many relying systems.",
  },
  {
    role: "Intermediate certificate authority",
    responsibility:
      "Issues certificates under a delegated trust relationship below the root.",
    risk:
      "Intermediate trust should be scoped, monitored, and lifecycle-managed.",
  },
  {
    role: "Certificate subject",
    responsibility:
      "Represents the service, workload, user, or entity identified by the certificate.",
    risk:
      "Subject naming must remain aligned with the actual system identity.",
  },
  {
    role: "Private-key owner",
    responsibility:
      "Controls the private key associated with the certificate's public key.",
    risk:
      "Private-key custody that spreads too broadly weakens identity assurance.",
  },
  {
    role: "Relying party",
    responsibility:
      "Uses the certificate and trust chain to make a trust decision.",
    risk:
      "Relying systems must know which issuers, purposes, and identities they accept.",
  },
  {
    role: "Certificate owner",
    responsibility:
      "Owns lifecycle tasks such as renewal, inventory, monitoring, replacement, and retirement.",
    risk:
      "A certificate without a current owner is likely to fail operationally or remain trusted too long.",
  },
];

const trustChainModel = [
  {
    layer: "Root trust anchor",
    purpose:
      "Defines the highest trust relationship accepted by the relying system.",
    question:
      "Is this root appropriate for this environment and use case?",
  },
  {
    layer: "Intermediate issuer",
    purpose:
      "Delegates certificate issuance for a narrower domain or purpose.",
    question:
      "Does the intermediate issuer have appropriate scope and lifecycle?",
  },
  {
    layer: "Leaf / end-entity certificate",
    purpose:
      "Represents the specific service, workload, signer, or other subject.",
    question:
      "Does the certificate identity match the system the relying party expects?",
  },
  {
    layer: "Private-key boundary",
    purpose:
      "Protects the private key associated with the subject certificate.",
    question:
      "Can the private key remain inside a narrow, accountable trust boundary?",
  },
  {
    layer: "Relying-system policy",
    purpose:
      "Decides which trust anchors, certificate purposes, identities, and validity states are acceptable.",
    question:
      "Is the relying system trusting more issuers or purposes than necessary?",
  },
];

const certificateLifecycle = [
  {
    stage: "Request",
    meaning:
      "A system or owner requests a certificate for a defined identity and purpose.",
    evidence:
      "Owner, subject identity, purpose, environment, approving authority.",
  },
  {
    stage: "Issue",
    meaning:
      "An approved certificate authority issues the certificate.",
    evidence:
      "Issuer, certificate identifier, subject, public-key binding, validity period.",
  },
  {
    stage: "Deploy",
    meaning:
      "The certificate is installed or associated with the intended service while the private key remains protected.",
    evidence:
      "Service owner, deployment scope, private-key custody, relying systems.",
  },
  {
    stage: "Monitor",
    meaning:
      "Teams watch validity, trust state, usage, renewal windows, and failures.",
    evidence:
      "Expiry monitoring, trust errors, ownership state, source health.",
  },
  {
    stage: "Renew / Rotate",
    meaning:
      "A replacement certificate is issued before the current one reaches end of life.",
    evidence:
      "New certificate, updated relying trust, rollout status, old certificate retirement.",
  },
  {
    stage: "Revoke",
    meaning:
      "Trust is ended early when the certificate or private-key relationship should no longer be accepted.",
    evidence:
      "Revocation reason, date, owner, relying-system update, incident or lifecycle record.",
  },
  {
    stage: "Retire",
    meaning:
      "The certificate and private-key relationship are removed from active use after replacement or service retirement.",
    evidence:
      "Removal record, trust-store cleanup, archived metadata, closure confirmation.",
  },
];

const trustScopes = [
  {
    scope: "Public internet service certificate",
    trust:
      "External clients rely on a broadly recognized issuing hierarchy.",
    owner:
      "Application / Platform Security",
    keyQuestion:
      "Is the service identity correct, current, renewed on time, and trusted only for intended uses?",
  },
  {
    scope: "Internal service certificate",
    trust:
      "Internal services rely on an enterprise or platform trust domain.",
    owner:
      "Infrastructure / Internal PKI",
    keyQuestion:
      "Is internal trust scoped by environment, service, and issuer rather than assuming every internal certificate is equally trusted?",
  },
  {
    scope: "Partner integration certificate",
    trust:
      "Northbridge and an external partner rely on a bounded certificate relationship.",
    owner:
      "Integration Owner / Partner Sponsor",
    keyQuestion:
      "Is the partner identity current, sponsored, renewed, and limited to the intended integration?",
  },
  {
    scope: "Signing certificate",
    trust:
      "Relying systems use the certificate to trust a public verification key for a signer.",
    owner:
      "Release / Governance / Publishing Owner",
    keyQuestion:
      "Does the certificate still represent the correct signer and signing role?",
  },
  {
    scope: "Workload identity certificate",
    trust:
      "A workload proves service identity to another system through a certificate relationship.",
    owner:
      "Application / Platform Team",
    keyQuestion:
      "Does the certificate map to the correct workload, environment, and resource scope?",
  },
  {
    scope: "Recovery environment certificate",
    trust:
      "Recovery systems use a separate trust relationship during restoration or continuity operations.",
    owner:
      "Resilience Team",
    keyQuestion:
      "Can recovery trust be used safely without becoming a permanent production bypass?",
  },
];

const principles = [
  {
    title: "A certificate is an identity binding",
    meaning:
      "The certificate's value comes from linking a public key to the identity the relying system expects.",
    review:
      "Does the subject identity still match the service or signer using the certificate?",
  },
  {
    title: "Trust should be as narrow as practical",
    meaning:
      "A relying system should not accept every issuer or certificate purpose simply because it is technically possible.",
    review:
      "Can the trust anchor or issuer set be reduced to the actual business need?",
  },
  {
    title: "Private-key custody is part of certificate trust",
    meaning:
      "The certificate identifies the public key, but trust depends on the associated private key remaining under the correct owner's control.",
    review:
      "Who can use the private key and where does that operation occur?",
  },
  {
    title: "Renewal is an architecture responsibility",
    meaning:
      "Certificate expiration is predictable and should not become an emergency.",
    review:
      "Is there an owner, monitoring window, replacement process, and rollback plan?",
  },
  {
    title: "Revocation and expiration are different",
    meaning:
      "Expiration ends a normal validity window; revocation ends trust early.",
    review:
      "Can the architecture respond before expiration when trust should end immediately?",
  },
  {
    title: "Environment boundaries matter",
    meaning:
      "Development, staging, and production certificates should not create accidental cross-environment trust.",
    review:
      "Are certificate subjects, issuers, and relying policies environment-aware?",
  },
  {
    title: "Historical trust should not become current trust",
    meaning:
      "Archived certificates may be needed to interpret older signatures or records without remaining trusted for new activity.",
    review:
      "Can the system distinguish historical validation from current acceptance?",
  },
  {
    title: "Evidence freshness affects confidence",
    meaning:
      "Certificate inventory, owner state, revocation state, and monitoring must reflect current reality.",
    review:
      "Is the trust decision based on current evidence or stale inventory?",
  },
];

const vocabulary = [
  {
    term: "Certificate",
    definition:
      "A structured trust object that binds identity information to a public key under an issuing relationship.",
  },
  {
    term: "Certificate authority (CA)",
    definition:
      "An authority that issues and signs certificates under a defined trust policy.",
  },
  {
    term: "Root CA",
    definition:
      "A top-level certificate authority whose certificate acts as a trust anchor.",
  },
  {
    term: "Intermediate CA",
    definition:
      "A certificate authority that operates below a root and issues certificates under delegated trust.",
  },
  {
    term: "Leaf certificate",
    definition:
      "An end-entity certificate representing a specific service, user, workload, or signer.",
  },
  {
    term: "Trust chain",
    definition:
      "The issuing path connecting an end-entity certificate to an accepted trust anchor.",
  },
  {
    term: "Trust anchor",
    definition:
      "A certificate or public-key relationship a relying system accepts as a root of trust.",
  },
  {
    term: "Certificate subject",
    definition:
      "The identity represented by the certificate.",
  },
  {
    term: "Issuer",
    definition:
      "The certificate authority that signed and issued the certificate.",
  },
  {
    term: "Validity period",
    definition:
      "The time window during which a certificate is intended to be accepted.",
  },
  {
    term: "Revocation",
    definition:
      "A process for ending certificate trust before normal expiration.",
  },
  {
    term: "Relying party",
    definition:
      "A system or application that validates and relies on a certificate trust relationship.",
  },
];

const records = [
  {
    id: "PKI-01",
    subject: "Student Services Portal",
    purpose: "External service identity",
    issuer: "Approved Public Issuing CA",
    trustAnchor: "Public client trust store",
    privateKeyOwner: "Platform Security",
    relyingSystems: "Browsers and approved clients",
    environment: "Production",
    validity: "Current; renewal due in 60 days",
    revocationState: "No known revocation",
    monitoring: "Expiry + endpoint trust monitoring",
    evidence: "Current inventory + owner + service scan metadata",
    status: "Confirmed",
    concern:
      "Renewal should complete before the service enters a short remaining-validity window.",
  },
  {
    id: "PKI-02",
    subject: "Student Portal Workload",
    purpose: "Internal workload identity",
    issuer: "Northbridge Internal Service CA",
    trustAnchor: "Production service trust domain",
    privateKeyOwner: "Application Platform",
    relyingSystems: "Student Support Database Gateway",
    environment: "Production",
    validity: "Short-lived; auto-renewed",
    revocationState: "Current",
    monitoring: "Issuance + renewal + failed validation telemetry",
    evidence: "Workload identity inventory + trust policy",
    status: "Confirmed",
    concern:
      "Staging workloads must not be able to present production-trusted certificates.",
  },
  {
    id: "PKI-03",
    subject: "Scheduling Partner Service",
    purpose: "External integration identity",
    issuer: "Approved Partner CA",
    trustAnchor: "Partner integration trust store",
    privateKeyOwner: "Partner",
    relyingSystems: "Northbridge Scheduling Integration Service",
    environment: "Partner production integration",
    validity: "Expires in 45 days",
    revocationState: "Current",
    monitoring: "Expiry + sponsor review + trust errors",
    evidence: "Current certificate + sponsor + renewal ticket",
    status: "Conditional",
    concern:
      "The trust relationship is valid now but depends on timely renewal and current sponsorship.",
  },
  {
    id: "PKI-04",
    subject: "Release Signing Service",
    purpose: "Software signing trust",
    issuer: "Northbridge Signing CA",
    trustAnchor: "Deployment verification trust",
    privateKeyOwner: "Release Engineering",
    relyingSystems: "Production deployment pipeline",
    environment: "Production release",
    validity: "Current",
    revocationState: "Current",
    monitoring: "Signer owner + certificate validity + verification failures",
    evidence: "Signer inventory + signing certificate + verification policy",
    status: "Confirmed",
    concern:
      "The certificate must represent the approved signing service, not a generic team-wide identity.",
  },
  {
    id: "PKI-05",
    subject: "Legacy Reporting Service",
    purpose: "Historical internal service identity",
    issuer: "Retired Internal CA",
    trustAnchor: "Old trust anchor still present on several servers",
    privateKeyOwner: "Unknown",
    relyingSystems: "Legacy reporting workloads",
    environment: "Production legacy",
    validity: "Expired",
    revocationState: "Unknown",
    monitoring: "Partial",
    evidence: "Stale inventory + old certificate copies",
    status: "Blocked",
    concern:
      "Expired identity, Unknown private-key ownership, and a retired CA still trusted by relying systems create an unacceptable legacy trust path.",
  },
  {
    id: "PKI-06",
    subject: "Recovery Operations Portal",
    purpose: "Recovery service identity",
    issuer: "Northbridge Recovery CA",
    trustAnchor: "Recovery operations trust store",
    privateKeyOwner: "Resilience Team",
    relyingSystems: "Recovery administrators",
    environment: "Recovery",
    validity: "Current",
    revocationState: "Current",
    monitoring: "Expiry + recovery-test validation",
    evidence: "Current recovery test + certificate inventory",
    status: "Confirmed",
    concern:
      "Recovery trust should remain isolated from routine production administration.",
  },
  {
    id: "PKI-07",
    subject: "Analytics Export Service",
    purpose: "Internal service + signing identity",
    issuer: "Northbridge Internal Service CA",
    trustAnchor: "Analytics trust domain",
    privateKeyOwner: "Analytics Platform",
    relyingSystems: "Export transfer workflow",
    environment: "Production",
    validity: "Current; renewal due next quarter",
    revocationState: "Current",
    monitoring: "Certificate + signer verification monitoring",
    evidence: "Current certificate + owner + export policy",
    status: "Conditional",
    concern:
      "The service certificate is current, but the architecture review must confirm its signing and service-authentication purposes remain appropriately separated.",
  },
];

const dashboardMetrics = [
  {
    label: "Certificate relationships reviewed",
    value: "7",
    note: "Public service, workload, partner, signing, legacy, recovery, and export trust",
  },
  {
    label: "Confirmed",
    value: "4",
    note: "Modern public, workload, signing, and recovery trust relationships are current",
  },
  {
    label: "Conditional",
    value: "2",
    note: "Partner renewal and export-purpose review require follow-up",
  },
  {
    label: "Blocked",
    value: "1",
    note: "Legacy expired certificate and retired CA trust remain unresolved",
  },
];

const logs = [
  "[08:06] PKI-01 portal-cert issuer=PUBLIC_CA validity=CURRENT renewal=60d state=CONFIRMED",
  "[08:30] PKI-02 workload-cert issuer=INTERNAL_CA env=PROD trust=SCOPED state=CONFIRMED",
  "[08:54] PKI-03 partner-cert expiry=45d sponsor=CURRENT state=CONDITIONAL",
  "[09:18] PKI-04 signing-cert signer=RELEASE_ENGINEERING trust=CURRENT state=CONFIRMED",
  "[09:42] PKI-05 legacy-cert expired=YES issuer=RETIRED_CA key_owner=UNKNOWN state=BLOCKED",
  "[10:06] PKI-06 recovery-cert env=RECOVERY trust=ISOLATED state=CONFIRMED",
  "[10:30] PKI-07 export-cert purpose_review=OPEN validity=CURRENT state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Certificate has no owner",
    problem:
      "Renewal, replacement, and retirement are nobody's explicit responsibility.",
    better:
      "Assign a certificate owner and an operational owner before deployment.",
  },
  {
    title: "Trust every internal CA everywhere",
    problem:
      "Development, staging, production, and recovery trust domains collapse into one broad trust space.",
    better:
      "Scope issuers and trust anchors to environment and purpose.",
  },
  {
    title: "Expired certificate still accepted",
    problem:
      "Relying systems continue accepting a certificate after its intended validity window.",
    better:
      "Monitor expiration and enforce current validity.",
  },
  {
    title: "Retired CA remains trusted indefinitely",
    problem:
      "Old trust anchors create hidden paths for legacy certificates.",
    better:
      "Remove obsolete trust anchors after dependencies are migrated and validated.",
  },
  {
    title: "Private key copied with the certificate",
    problem:
      "Teams move certificate and private key together across many systems for convenience.",
    better:
      "Keep private-key custody narrow and separate from public certificate distribution.",
  },
  {
    title: "Certificate identity does not match service identity",
    problem:
      "A generic or stale subject is reused for several unrelated services.",
    better:
      "Use precise identity binding that matches the intended relying relationship.",
  },
  {
    title: "Renewal tested only after expiration",
    problem:
      "The first real replacement happens during an outage.",
    better:
      "Test renewal and trust transition before the certificate reaches end of life.",
  },
  {
    title: "Certificate trust treated as authorization",
    problem:
      "A valid certificate is treated as permission to access any resource.",
    better:
      "Use certificate trust for identity and service trust, then apply separate authorization policy.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep PKI-05 Blocked, remove trust in the retired CA after dependencies are mapped, and replace the legacy service identity with a current governed certificate relationship.",
    outcome:
      "Best. Expired identity, Unknown private-key ownership, and obsolete trust anchors should not remain active.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep trusting the retired CA because the legacy service still runs.",
    outcome:
      "Risky. Operational dependence does not justify indefinite obsolete trust.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Ignore the expired certificate because the service is internal.",
    outcome:
      "Risky. Internal location does not make stale identity trust safe.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Keep the partner certificate Conditional and complete renewal before expiration while preserving sponsor, scope, and monitoring.",
    outcome:
      "Best. The current trust is valid, but lifecycle closure is required.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Mark it Confirmed forever because it works today.",
    outcome:
      "Risky. Certificate trust is time-bounded.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Expand partner trust to every internal service to simplify renewal.",
    outcome:
      "Risky. Renewal convenience should not broaden trust scope.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is the main role of a certificate?",
    choices: [
      "To bind identity information to a public key under an issuing trust relationship.",
      "To store a plaintext password.",
      "To replace authorization.",
      "To guarantee confidentiality for every resource.",
    ],
    answer: 0,
    explanation:
      "Certificates help relying systems trust that a public key represents the expected subject identity.",
  },
  {
    question:
      "What is a root CA?",
    choices: [
      "A top-level trust anchor in a PKI hierarchy.",
      "A symmetric encryption key.",
      "A password-verifier database.",
      "An application role.",
    ],
    answer: 0,
    explanation:
      "The root CA acts as a top-level trust anchor for certificate validation.",
  },
  {
    question:
      "Why should private-key custody be reviewed with certificate trust?",
    choices: [
      "Because the certificate's identity claim depends on the associated private key remaining under authorized control.",
      "Because public certificates must always be secret.",
      "Because private keys should be copied to every relying system.",
      "Because ownership does not matter once a certificate is issued.",
    ],
    answer: 0,
    explanation:
      "Certificate trust is weakened if unauthorized parties can use the corresponding private key.",
  },
  {
    question:
      "What is the difference between expiration and revocation?",
    choices: [
      "Expiration ends trust at the normal end of validity; revocation ends trust early.",
      "There is no difference.",
      "Revocation always extends validity.",
      "Expiration applies only to public keys.",
    ],
    answer: 0,
    explanation:
      "Expiration and revocation are separate lifecycle states.",
  },
  {
    question:
      "Why should certificate trust be environment-aware?",
    choices: [
      "To prevent development or staging identities from being automatically trusted as production identities.",
      "Because every environment should use the exact same trust anchor.",
      "Because internal certificates do not need ownership.",
      "Because environment has no effect on service identity.",
    ],
    answer: 0,
    explanation:
      "Environment is part of the certificate's trust scope and relying-system policy.",
  },
  {
    question:
      "What is strongest for a partner certificate expiring in 45 days with a current sponsor and valid trust?",
    choices: [
      "Keep it Conditional until renewal completes.",
      "Ignore the expiration date.",
      "Trust it forever.",
      "Remove all partner access immediately.",
    ],
    answer: 0,
    explanation:
      "Current trust can continue while renewal remains an explicit lifecycle condition.",
  },
  {
    question:
      "Which statement is strongest?",
    choices: [
      "A valid certificate automatically authorizes every resource.",
      "Certificates support identity and trust, while authorization remains a separate decision.",
      "Private keys should be distributed with public certificates.",
      "Retired trust anchors should remain everywhere permanently.",
    ],
    answer: 1,
    explanation:
      "Certificate validation establishes trust in identity; access policy still decides what that identity may do.",
  },
];

const checklistItems = [
  "Every certificate relationship identifies the subject identity.",
  "Every certificate identifies an expected issuer or trust domain.",
  "Relying systems know which trust anchors they accept.",
  "Trust chains are validated to approved anchors.",
  "Private-key ownership is explicit.",
  "Private keys are not broadly copied with certificates.",
  "Certificate purpose is documented.",
  "Certificate identity matches the service, workload, signer, or user it represents.",
  "Validity period is monitored.",
  "Renewal ownership is assigned.",
  "Renewal is tested before expiration.",
  "Revocation is treated separately from normal expiration.",
  "Retired trust anchors are removed when dependencies are closed.",
  "Environment boundaries are part of trust scope.",
  "Partner trust has sponsor and lifecycle evidence.",
  "Recovery trust remains bounded to recovery purpose.",
  "Certificate trust is not treated as authorization.",
  "Historical certificates are distinguishable from currently trusted certificates.",
  "Stale inventory does not become Confirmed.",
  "No lesson activity requires private-key extraction, certificate abuse, or trust-store manipulation.",
];

const takeaways = [
  "Certificates bind identities to public keys under an issuing trust relationship.",
  "PKI is a trust architecture, not just a collection of certificate files.",
  "Root and intermediate CAs define issuing relationships and trust scope.",
  "Private-key custody is part of certificate trust.",
  "Relying systems should trust only the issuers and purposes they actually need.",
  "Renewal should be planned before expiration becomes urgent.",
  "Revocation ends trust early; expiration ends it at the normal validity boundary.",
  "Environment-specific trust helps prevent cross-environment identity confusion.",
  "Retired trust anchors should not remain indefinitely after dependencies are closed.",
  "The Certificate and PKI Trust Register prepares you for A14.6 Key Storage and Rotation.",
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

export default function CertificatesAndPKIConceptsPage() {
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
              A14.5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cryptography and Key Management Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A14.5
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Certificates and PKI Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Certificates help systems answer a critical trust question: whose
            public key is this? PKI scales that answer through issuing
            authorities, trust chains, relying policies, lifecycle, and
            governance.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson is conceptual and defensive. It does not teach
            certificate forgery, trust-store manipulation, private-key
            extraction, revocation bypass, or methods for impersonating real
            services.
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
          lessonTitle="Certificates and PKI Concepts"
          lessonNumber={5}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A14.5 Entry Readiness"
          items={[
            "I can explain public/private key relationships.",
            "I understand signer authenticity and verification trust from A14.4.",
            "I understand that a public key still needs trustworthy identity binding.",
            "I will use only fictional certificates, issuers, trust chains, and safe lifecycle metadata.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Public Key Is Only Useful When the Verifier Knows Whose Key It Is"
        >
          <p className="leading-8">
            A service can present a public key, but the relying system still
            needs evidence that the key belongs to the expected service. A
            certificate provides that binding under an issuing relationship,
            while PKI defines how that issuing trust is created, delegated,
            monitored, renewed, revoked, and retired.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              PKI is a trust system: identity binding, issuing authority, private-key custody, relying policy, lifecycle, and evidence all matter.
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
          eyebrow="Certificate Anatomy"
          title="Six Parts of a Certificate Trust Decision"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {certificateParts.map((item) => (
              <article
                key={item.part}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.part}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                    Design question
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50">
                    {item.designQuestion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="PKI Roles"
          title="Who Participates in the Trust Architecture?"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {pkiRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Responsibility: {item.responsibility}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Risk: {item.risk}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Chain"
          title="From Trust Anchor to End-Entity Certificate"
        >
          <div className="grid gap-5">
            {trustChainModel.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.layer}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      {item.purpose}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Review: {item.question}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Certificate Lifecycle"
          title="Trust Has a Beginning, Middle, and End"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {certificateLifecycle.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.stage}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust Scopes"
          title="Different Certificate Relationships Need Different Governance"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {trustScopes.map((item) => (
              <article
                key={item.scope}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.scope}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Trust: {item.trust}
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Owner: {item.owner}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Key question: {item.keyQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Principles"
          title="Eight Principles for PKI and Certificate Architecture"
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
          title="Certificates and PKI Terms"
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
          eyebrow="Fictional PKI Register"
          title="Seven Northbridge Certificate Trust Records"
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
                  {item.subject}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Issuer", item.issuer],
                    ["Trust anchor", item.trustAnchor],
                    ["Private-key owner", item.privateKeyOwner],
                    ["Relying systems", item.relyingSystems],
                    ["Environment", item.environment],
                    ["Validity", item.validity],
                    ["Revocation state", item.revocationState],
                    ["Monitoring", item.monitoring],
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
          title="Northbridge PKI Trust Dashboard"
          subtitle="Fictional certificate ownership, validity, trust scope, and lifecycle summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Retired CA Still Trusted by Legacy Systems"
          severity="High"
          time="09:42"
          source="Fictional PKI Architecture Review"
          details="PKI-05 uses an expired legacy certificate issued by a retired internal CA. The private-key owner is Unknown, revocation state is Unknown, and the old trust anchor remains installed on several relying systems."
          recommendation="Keep the relationship Blocked, map dependencies, replace the legacy service identity, and remove obsolete trust anchors after migration is validated."
        />

        <Section
          eyebrow="Certificate Trust vs. Authorization"
          title="A Trusted Certificate Answers Who — Not What They May Do"
        >
          <p className="leading-8">
            A valid certificate can help a relying system identify a service,
            workload, or signer. It does not automatically grant access to every
            resource. Authorization still determines which actions the trusted
            identity may perform.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">
                Certificate decision
              </h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Does this public key represent the expected identity under an
                approved trust relationship?
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">
                Authorization decision
              </h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Is this identity allowed to perform this action on this resource
                in this environment and context?
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Certificate Lifecycle Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Retired CA Trust"
          question="What is the strongest conclusion for PKI-05?"
          evidence={[
            "The legacy service certificate is expired.",
            "The issuing CA has been retired.",
            "The old trust anchor is still installed on several relying systems.",
            "The private-key owner is Unknown.",
            "Revocation state is Unknown.",
          ]}
          options={[
            "Confirmed because the service is internal.",
            "Blocked until the legacy identity is replaced and obsolete trust anchors are removed after dependency validation.",
            "Safe because the certificate used to be valid.",
            "Accepted automatically because the system is old.",
          ]}
          bestAnswer={1}
          explanation="Expired identity, Unknown private-key ownership, and obsolete trust anchors create an unmanaged trust path."
        />

        <Section
          eyebrow="Common PKI Mistakes"
          title="Eight Ways Certificate Trust Becomes Too Broad or Too Fragile"
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
          title="Scenario Decision Lab 1 — Retired CA Still Trusted"
          scenario="A legacy service uses an expired certificate from a retired internal CA. Several old servers still trust the retired CA, and nobody can identify the current private-key owner."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Partner Certificate Nearing Expiration"
          scenario="A partner integration certificate is currently valid and scoped correctly, but it expires in 45 days. The internal sponsor and renewal ticket are current."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Certificate and PKI Trust Register"
        >
          <p className="leading-8">
            Use fictional certificates, issuers, trust anchors, services,
            owners, and synthetic evidence only. Do not inspect, modify, or
            import any real certificate or private key.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional certificate-trust records.",
              "Give every record a stable PKI ID.",
              "Record certificate subject identity.",
              "Record certificate purpose.",
              "Record issuer.",
              "Record trust anchor.",
              "Record private-key owner.",
              "Record relying systems.",
              "Record environment.",
              "Record validity state.",
              "Record renewal due date or trigger.",
              "Record revocation state.",
              "Record monitoring source.",
              "Record evidence freshness.",
              "Classify status as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable.",
              "Include at least three public-service certificate examples.",
              "Include at least three internal service/workload certificate examples.",
              "Include at least two partner certificate examples.",
              "Include at least two signing certificate examples.",
              "Include at least two recovery or resilience trust examples.",
              "Include at least one retired CA / obsolete trust-anchor problem and keep it Blocked.",
              "Add change triggers for subject, issuer, trust anchor, owner, environment, certificate purpose, service retirement, and renewal changes.",
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
              Do not alter real trust stores, inspect private keys, create
              unauthorized certificates, bypass certificate validation, or test
              live certificate weaknesses. This is a defensive PKI architecture
              review only.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Certificate Renewal"
          question="What is the strongest current state for PKI-03?"
          evidence={[
            "The partner certificate is currently valid.",
            "The sponsor is current.",
            "The integration is healthy.",
            "The certificate expires in 45 days.",
            "A renewal ticket and replacement window are documented.",
          ]}
          options={[
            "Confirmed forever because current validation succeeds.",
            "Conditional until renewal completes, while current operation continues under monitoring.",
            "Blocked immediately despite valid current trust.",
            "Expand the partner certificate trust to all internal services.",
          ]}
          bestAnswer={1}
          explanation="The relationship is currently valid but has a clear lifecycle condition that must close before expiration."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a Fictional PKI With Overlapping Trust Domains"
        >
          <p className="leading-8">
            A fictional organization has public, internal, partner, signing, and
            recovery certificates, but several relying systems trust every
            internal issuer across every environment. Redesign the PKI conceptually.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Trust-anchor inventory",
              "Root vs. intermediate roles",
              "Subject naming",
              "Private-key custody",
              "Relying-system policy",
              "Environment separation",
              "Public-service trust",
              "Internal workload trust",
              "Partner trust scope",
              "Signing certificate trust",
              "Renewal ownership",
              "Revocation handling",
              "Retired CA cleanup",
              "Historical validation",
              "Monitoring and evidence",
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
            A mature PKI should make it easy to explain who issued a certificate,
            what identity it represents, who owns the private key, which systems
            trust it, when that trust ends, and what happens when the relationship
            changes.
          </p>
        </Section>

        <DefenderChecklist
          title="A14.5 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A14.5 Mini Quiz: Certificates and PKI Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Certificate and PKI Trust Register"
          prompt="Create the fifth artifact for your A14 Key-Management Design Recommendation: a fictional Certificate and PKI Trust Register with at least fifteen records. Include PKI ID, subject identity, purpose, issuer, trust anchor, private-key owner, relying systems, environment, validity, renewal trigger, revocation state, monitoring source, evidence freshness, status, concern, next action, and change trigger."
          tips={[
            "Show both subject identity and issuing trust.",
            "Keep private-key ownership visible.",
            "Include public, internal, partner, signing, and recovery certificate relationships.",
            "Include at least one obsolete trust-anchor Blocked finding.",
            "Show renewal and revocation as separate lifecycle concerns.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A14.6?"
        >
          <p className="leading-8">
            A14.6 moves into Key Storage and Rotation. Before continuing, make
            sure you can explain why certificate trust depends on the associated
            private key staying protected and why lifecycle governance matters
            even when a certificate is valid today.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain what a certificate binds together.",
              "I can explain root, intermediate, and leaf certificate roles.",
              "I can explain why private-key custody is part of PKI trust.",
              "I can distinguish expiration from revocation.",
              "I can evaluate certificate trust using subject, issuer, trust anchor, owner, environment, validity, and evidence.",
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
          title="How to Make the Certificate and PKI Trust Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show the subject clearly",
                detail:
                  "Identify exactly which service, workload, signer, user, or organization the certificate represents.",
              },
              {
                title: "Show the issuing path",
                detail:
                  "Record issuer, intermediate relationship, and trust anchor where applicable.",
              },
              {
                title: "Show relying systems",
                detail:
                  "Document which systems actually make decisions based on the certificate.",
              },
              {
                title: "Show private-key ownership",
                detail:
                  "Certificate trust is incomplete without knowing who controls the associated private key.",
              },
              {
                title: "Show environment scope",
                detail:
                  "Make development, staging, production, partner, and recovery trust boundaries visible.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Validity, renewal, revocation, retirement, and trust-anchor cleanup should all appear.",
              },
              {
                title: "Show monitoring",
                detail:
                  "Expiry, trust failure, ownership, and renewal evidence should support current status.",
              },
              {
                title: "Connect forward",
                detail:
                  "A14.6 will focus on how keys themselves are stored, rotated, recovered, and retired.",
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
            PKI learning does not require abusing real certificates or trust stores
          </h2>
          <p className="mt-3 leading-7">
            Do not create unauthorized certificates, inspect or extract real
            private keys, alter trust stores, bypass certificate validation, or
            impersonate real services. All certificates, issuers, trust anchors,
            and lifecycle records in this lesson are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A14.5 Certificates and PKI Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a PKI trust model built around subject identity,
            issuers, trust anchors, private-key ownership, relying systems,
            validity, renewal, revocation, environment scope, and lifecycle
            evidence. Next, A14.6 focuses on Key Storage and Rotation.
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