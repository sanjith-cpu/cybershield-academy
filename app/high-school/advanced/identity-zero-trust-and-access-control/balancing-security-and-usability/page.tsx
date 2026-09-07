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
const modulePath = `${trackPath}/identity-zero-trust-and-access-control`;
const previousLesson = `${modulePath}/access-reviews-and-governance`;
const nextLesson = `${modulePath}/zero-trust-design-lab`;

const objectives = [
  "Explain why security controls that are too weak create risk while controls that are too difficult can create workarounds, support burden, and unreliable behavior.",
  "Evaluate authentication, step-up, privileged access, recovery, partner access, workload access, and access-review decisions using both security strength and usability impact.",
  "Distinguish necessary friction from unnecessary friction and identify when policy complexity, false positives, poor messaging, or inaccessible workflows weaken the overall control.",
  "Analyze fictional identity designs using proportionality, clarity, accessibility, recoverability, supportability, user effort, operational resilience, and evidence.",
  "Build a Security and Usability Tradeoff Review that becomes the ninth artifact in the A13 Enterprise Identity and Zero-Trust Review.",
];

const balanceDimensions = [
  {
    dimension: "Security strength",
    question:
      "Does the control meaningfully reduce unauthorized, excessive, stale, or high-impact access?",
    evidence:
      "Policy outcome, least-privilege scope, privilege separation, lifecycle enforcement, authorization evidence.",
    failureMode:
      "A control may feel strong while protecting the wrong resource or ignoring the real access path.",
  },
  {
    dimension: "User effort",
    question:
      "How much time, complexity, repetition, or interruption does the control create for legitimate users?",
    evidence:
      "Number of prompts, repeated verification, support cases, abandoned workflows, user feedback.",
    failureMode:
      "Excessive friction can encourage unsafe workarounds or reduce adoption.",
  },
  {
    dimension: "Task sensitivity",
    question:
      "How sensitive or high impact is the requested resource or action?",
    evidence:
      "Resource classification, privilege level, production scope, data sensitivity, administrative impact.",
    failureMode:
      "Applying the same friction to every action wastes effort and may still under-protect the most sensitive actions.",
  },
  {
    dimension: "Clarity",
    question:
      "Can the user understand what is required and why?",
    evidence:
      "Policy messaging, help text, support guidance, decision explanation, owner documentation.",
    failureMode:
      "Confusing controls increase mistakes, support tickets, and repeated failed attempts.",
  },
  {
    dimension: "Accessibility",
    question:
      "Can legitimate users with different needs complete the security workflow reliably?",
    evidence:
      "Accessible authentication options, readable prompts, alternate approved workflows, support escalation.",
    failureMode:
      "A technically strong control can exclude legitimate users if the workflow is not accessible.",
  },
  {
    dimension: "Recoverability",
    question:
      "Can legitimate access be restored safely when normal identity or device conditions fail?",
    evidence:
      "Recovery process, identity proofing governance, emergency access, help-desk ownership, closure evidence.",
    failureMode:
      "Weak recovery can bypass strong authentication; impossible recovery can cause operational disruption.",
  },
  {
    dimension: "Supportability",
    question:
      "Can administrators and support teams diagnose and resolve legitimate access problems?",
    evidence:
      "Decision logs, policy IDs, error reasons, ownership, escalation path, source-health visibility.",
    failureMode:
      "Opaque controls create long outages and tempt teams to disable protection temporarily.",
  },
  {
    dimension: "Operational resilience",
    question:
      "Can essential work continue safely during provider, device, network, or identity-system disruption?",
    evidence:
      "Fallback policy, emergency access governance, alternate workflow, recovery test evidence, expiry.",
    failureMode:
      "A design that works only under perfect conditions may fail when the organization needs it most.",
  },
];

const frictionTypes = [
  {
    type: "Useful friction",
    description:
      "Extra effort added where the action is sensitive enough to justify stronger assurance.",
    example:
      "Step-up verification before activating production administrative privilege.",
    designQuestion:
      "Is the added friction targeted to a meaningful increase in risk?",
  },
  {
    type: "Repeated friction",
    description:
      "Users are asked to complete the same security step again even though relevant context has not changed.",
    example:
      "Multiple prompts within one short approved session for low-risk actions.",
    designQuestion:
      "Can the control reuse a bounded trusted session without weakening the sensitive boundary?",
  },
  {
    type: "Hidden friction",
    description:
      "The user does not know why access failed or what safe next step exists.",
    example:
      "A policy denies access with a generic error and no owner or support path.",
    designQuestion:
      "Can the user understand the reason without revealing sensitive internal details?",
  },
  {
    type: "Administrative friction",
    description:
      "Approvals, reviews, or support processes are so slow that legitimate work is delayed unnecessarily.",
    example:
      "A low-risk entitlement requires several manual approvals that add no meaningful decision quality.",
    designQuestion:
      "Which approval step actually owns risk and which step is duplication?",
  },
  {
    type: "Recovery friction",
    description:
      "Users cannot restore legitimate access when a device, credential, or identity factor changes.",
    example:
      "No governed path exists for replacing a lost approved device.",
    designQuestion:
      "Is recovery both secure and realistically usable?",
  },
  {
    type: "Accessibility friction",
    description:
      "The security workflow assumes one interaction pattern that may not work for every legitimate user.",
    example:
      "A required process cannot be completed with the organization's approved accessibility tools.",
    designQuestion:
      "Can equivalent security assurance be achieved through an accessible approved path?",
  },
];

const proportionalityPrinciples = [
  {
    title: "Match control strength to impact",
    meaning:
      "Routine low-impact actions should not require the same controls as privileged or sensitive actions.",
    review:
      "Does stronger verification appear where resource or privilege sensitivity actually increases?",
  },
  {
    title: "Prefer targeted step-up over constant interruption",
    meaning:
      "Security can preserve usability by increasing assurance only when the context requires it.",
    review:
      "Can normal work remain smooth while sensitive actions trigger stronger controls?",
  },
  {
    title: "Make denial understandable",
    meaning:
      "Users should know that access was denied for a policy reason and what legitimate next step exists.",
    review:
      "Can the user recover without guessing or repeatedly retrying?",
  },
  {
    title: "Design recovery before failure",
    meaning:
      "Secure recovery paths should exist before a device, identity factor, or provider becomes unavailable.",
    review:
      "Can legitimate access be restored without bypassing the original control model?",
  },
  {
    title: "Use least privilege to reduce friction",
    meaning:
      "Narrow access can sometimes be approved more quickly because the potential impact is smaller.",
    review:
      "Can a limited-access option support the task instead of granting broader access?",
  },
  {
    title: "Minimize policy ambiguity",
    meaning:
      "Complex policy increases troubleshooting difficulty and inconsistent outcomes.",
    review:
      "Can support teams and reviewers explain why the decision occurred?",
  },
  {
    title: "Measure false positives and support burden",
    meaning:
      "A control may be too noisy or restrictive even if its written policy looks reasonable.",
    review:
      "Do operational metrics show repeated legitimate users being blocked?",
  },
  {
    title: "Usability is part of control quality",
    meaning:
      "A control that users cannot reliably follow may be weaker in practice than a slightly simpler control they consistently use correctly.",
    review:
      "Does the actual user behavior match the intended security process?",
  },
];

const designPatterns = [
  {
    pattern: "Risk-based step-up",
    securityValue:
      "Adds stronger assurance before sensitive or privileged actions.",
    usabilityValue:
      "Keeps routine low-risk work smoother.",
    evidence:
      "Step-up triggers, sensitive-resource policy, session logs, false-positive rate.",
  },
  {
    pattern: "Limited access instead of full denial",
    securityValue:
      "Preserves least privilege and restricts high-impact capabilities.",
    usabilityValue:
      "Allows legitimate work to continue within a safer scope.",
    evidence:
      "Policy outcome, allowed functions, denied functions, resource owner approval.",
  },
  {
    pattern: "Time-bounded privilege",
    securityValue:
      "Reduces standing administrative exposure.",
    usabilityValue:
      "Administrators can still perform approved work without permanent privilege.",
    evidence:
      "Eligibility, activation, duration, deactivation, post-use review.",
  },
  {
    pattern: "Central federation with app-specific authorization",
    securityValue:
      "Improves lifecycle consistency while preserving resource boundaries.",
    usabilityValue:
      "Reduces repeated sign-in across approved services.",
    evidence:
      "Federation health, application roles, session policy, authorization logs.",
  },
  {
    pattern: "Accessible recovery path",
    securityValue:
      "Maintains identity proofing and accountable recovery.",
    usabilityValue:
      "Prevents legitimate users from being permanently locked out.",
    evidence:
      "Recovery request, identity verification, owner approval, completion, closure review.",
  },
  {
    pattern: "Clear policy messaging",
    securityValue:
      "Reduces random retries and unsafe workaround pressure.",
    usabilityValue:
      "Users understand the reason and legitimate next step.",
    evidence:
      "Error category, policy ID, support route, resolution metrics.",
  },
  {
    pattern: "Environment-specific access",
    securityValue:
      "Prevents staging or development identities from inheriting production trust.",
    usabilityValue:
      "Keeps lower-environment work simple within the correct boundary.",
    evidence:
      "Environment attributes, workload identity, policy decisions, owner review.",
  },
  {
    pattern: "Review-driven access reduction",
    securityValue:
      "Removes unnecessary capability while preserving justified access.",
    usabilityValue:
      "Avoids all-or-nothing decisions that disrupt legitimate work.",
    evidence:
      "Access review, resource owner decision, entitlement change, closure evidence.",
  },
];

const vocabulary = [
  {
    term: "Security friction",
    definition:
      "Additional effort, delay, interruption, or complexity introduced by a security control.",
  },
  {
    term: "Proportional control",
    definition:
      "A control whose strength and user impact match the sensitivity and risk of the requested action.",
  },
  {
    term: "False positive",
    definition:
      "A security control or alert incorrectly treats legitimate activity as suspicious or unacceptable.",
  },
  {
    term: "User journey",
    definition:
      "The sequence of steps a legitimate user follows to authenticate, request access, complete work, recover access, or receive support.",
  },
  {
    term: "Supportability",
    definition:
      "How easily authorized support teams can diagnose and resolve legitimate access problems without weakening security.",
  },
  {
    term: "Recoverability",
    definition:
      "The ability to restore legitimate identity access through a governed process after a failure or loss of normal authentication context.",
  },
  {
    term: "Accessibility",
    definition:
      "The ability of legitimate users with different needs to complete the security workflow using approved accessible methods.",
  },
  {
    term: "Fallback path",
    definition:
      "A governed alternate access process used when the preferred identity path is unavailable.",
  },
  {
    term: "Compensating control",
    definition:
      "A different control used to reduce risk when the preferred control cannot be used temporarily.",
  },
  {
    term: "Operational burden",
    definition:
      "The support, review, administration, delay, and maintenance cost created by a security control.",
  },
  {
    term: "Adoption",
    definition:
      "The extent to which users and teams consistently follow the intended security workflow.",
  },
  {
    term: "Tradeoff",
    definition:
      "A decision that balances security strength, user effort, availability, supportability, and business need.",
  },
];

const tradeoffRecords = [
  {
    id: "UX-01",
    scenario: "Counselor routine portal access",
    control: "Federated sign-in + counselor application role",
    securityNeed: "Protect student-support workflows with named workforce identity",
    userImpact: "Low",
    resilience: "High",
    supportability: "High",
    outcome: "Keep",
    owner: "Student Services Application Owner",
    evidence: "Current authn/authz + low support burden",
    status: "Confirmed",
    concern:
      "Do not add privileged-style friction to routine role-appropriate work.",
  },
  {
    id: "UX-02",
    scenario: "Production platform administration",
    control: "Step-up + JIT privileged activation",
    securityNeed: "High-impact management-plane access",
    userImpact: "Moderate",
    resilience: "High",
    supportability: "High",
    outcome: "Keep",
    owner: "Platform Engineering",
    evidence: "Activation evidence + low standing privilege",
    status: "Confirmed",
    concern:
      "Friction is justified because privilege and resource sensitivity are high.",
  },
  {
    id: "UX-03",
    scenario: "Partner support console",
    control: "Federated sign-in + limited support role + sponsor lifecycle",
    securityNeed: "External access must stay bounded",
    userImpact: "Low to Moderate",
    resilience: "Moderate",
    supportability: "High",
    outcome: "Keep with review",
    owner: "Integration Owner",
    evidence: "Sponsor + authz + review due in 30 days",
    status: "Conditional",
    concern:
      "Renewal process should remain simple enough that support does not seek broader permanent access.",
  },
  {
    id: "UX-04",
    scenario: "Sensitive report export",
    control: "Contextual step-up + current device evidence",
    securityNeed: "Sensitive export deserves stronger assurance",
    userImpact: "Moderate",
    resilience: "Low while device source is stale",
    supportability: "Moderate",
    outcome: "Redesign fallback",
    owner: "Analytics Product Owner",
    evidence: "Identity current; device source stale",
    status: "Unknown",
    concern:
      "A stale context source currently creates avoidable disruption without a fully defined fallback.",
  },
  {
    id: "UX-05",
    scenario: "Temporary migration administration",
    control: "Project-bound JIT privilege",
    securityNeed: "High-impact temporary production operations",
    userImpact: "Moderate",
    resilience: "High",
    supportability: "High",
    outcome: "Keep until project end",
    owner: "Migration Project Owner",
    evidence: "Approval + duration + audit + checkpoint expiry",
    status: "Conditional",
    concern:
      "Access must disappear at project closure.",
  },
  {
    id: "UX-06",
    scenario: "Legacy reporting account",
    control: "Historical shared/local access",
    securityNeed: "Business need uncertain",
    userImpact: "Operationally convenient",
    resilience: "Low",
    supportability: "Low",
    outcome: "Replace",
    owner: "Unknown",
    evidence: "Partial logs + stale entitlement metadata",
    status: "Blocked",
    concern:
      "Convenience is masking weak ownership, poor recoverability, and ungoverned access.",
  },
  {
    id: "UX-07",
    scenario: "Emergency recovery administration",
    control: "Break-glass access with post-use review",
    securityNeed: "Maintain recovery capability during identity-service disruption",
    userImpact: "High but rare",
    resilience: "High",
    supportability: "Moderate",
    outcome: "Keep with stronger review",
    owner: "Resilience + Security",
    evidence: "Activation + audit; one post-review incomplete",
    status: "Conditional",
    concern:
      "Emergency usability is necessary, but post-use governance cannot be skipped.",
  },
];

const dashboardMetrics = [
  {
    label: "Tradeoff scenarios reviewed",
    value: "7",
    note: "Routine, privileged, partner, sensitive export, temporary admin, legacy, and recovery workflows",
  },
  {
    label: "Controls kept",
    value: "4",
    note: "Routine SSO, JIT admin, partner limited access, and project-bound privilege remain proportionate",
  },
  {
    label: "Redesign / replace",
    value: "2",
    note: "Sensitive-export fallback and legacy reporting access need architecture improvement",
  },
  {
    label: "Open resilience conditions",
    value: "3",
    note: "Partner renewal, stale context fallback, and emergency post-use review require follow-up",
  },
];

const logs = [
  "[08:00] UX-01 counselor portal friction=LOW security=APPROPRIATE outcome=KEEP state=CONFIRMED",
  "[08:23] UX-02 platform-admin friction=MODERATE privilege=HIGH outcome=KEEP state=CONFIRMED",
  "[08:47] UX-03 partner-support scope=LIMITED review_due=30d outcome=KEEP_REVIEW state=CONDITIONAL",
  "[09:11] UX-04 sensitive-export device_source=STALE fallback=INCOMPLETE outcome=REDESIGN state=UNKNOWN",
  "[09:35] UX-05 migration-admin access=JIT expires=CHECKPOINT outcome=KEEP_TEMP state=CONDITIONAL",
  "[09:59] UX-06 legacy-reporting owner=UNKNOWN supportability=LOW outcome=REPLACE state=BLOCKED",
  "[10:24] UX-07 emergency-admin recovery=REQUIRED post_review=PARTIAL state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Maximum friction everywhere",
    problem:
      "Every action receives privileged-level verification even when resource sensitivity is low.",
    better:
      "Target stronger controls to sensitive actions and keep routine access appropriately simple.",
  },
  {
    title: "Convenience overrides authorization",
    problem:
      "Users receive broad permanent access because approvals or step-up controls are considered inconvenient.",
    better:
      "Use limited, time-bounded, or context-aware access that preserves legitimate work.",
  },
  {
    title: "Generic denial with no next step",
    problem:
      "Users repeatedly retry or contact random teams because they cannot understand the failure.",
    better:
      "Provide safe policy messaging and a legitimate support path.",
  },
  {
    title: "Recovery bypasses all controls",
    problem:
      "Account recovery becomes weaker than the normal authentication system.",
    better:
      "Use governed recovery with identity verification, ownership, logging, and closure.",
  },
  {
    title: "Policy complexity nobody can support",
    problem:
      "Help desk and security teams cannot explain which rule denied access.",
    better:
      "Use clear policy IDs, precedence, evidence, and ownership.",
  },
  {
    title: "Accessibility treated as optional",
    problem:
      "Legitimate users cannot complete required security steps reliably.",
    better:
      "Design approved accessible paths that preserve equivalent security assurance.",
  },
  {
    title: "False positives ignored",
    problem:
      "Repeated legitimate blocks are treated as user error rather than evidence that the control may be poorly tuned.",
    better:
      "Measure false positives, support burden, and repeated exception requests.",
  },
  {
    title: "Emergency usability becomes permanent bypass",
    problem:
      "A recovery path remains open for normal work because it is easier.",
    better:
      "Keep emergency access exceptional, monitored, time-bounded, and reviewed.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep step-up verification for the production admin action because the sensitivity justifies moderate friction, while keeping routine workforce access simpler.",
    outcome:
      "Best. The control is proportionate to the action's impact.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Remove step-up because administrators find it inconvenient.",
    outcome:
      "Risky. Convenience alone does not justify permanent active privilege.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Require the same step-up for every low-risk application action.",
    outcome:
      "Caution. That adds unnecessary friction without equivalent security value.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Design a governed fallback for the sensitive-export workflow that preserves stronger assurance when the device-context source is stale, then restore normal policy once source health returns.",
    outcome:
      "Best. The design protects the sensitive action while preserving recoverability and supportability.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Allow all sensitive exports whenever the device source is unavailable.",
    outcome:
      "Risky. That converts monitoring failure into broad trust.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Permanently block every export whenever any context source has an issue.",
    outcome:
      "Caution. Strong security should have an intentional fallback rather than indefinite disruption.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why does usability matter in identity security?",
    choices: [
      "Because controls users cannot reliably complete may cause workarounds, support burden, or operational failure.",
      "Because usability is more important than authorization.",
      "Because all security prompts should be removed.",
      "Because strong security never creates friction.",
    ],
    answer: 0,
    explanation:
      "Usability affects whether legitimate users consistently follow the intended security workflow.",
  },
  {
    question:
      "What is useful friction?",
    choices: [
      "Additional effort targeted to a meaningful increase in resource sensitivity or privilege.",
      "Repeated prompts for every action regardless of risk.",
      "Confusing denial messages.",
      "A permanent support backlog.",
    ],
    answer: 0,
    explanation:
      "Useful friction is proportionate and tied to a real security boundary.",
  },
  {
    question:
      "A platform engineer requests high-impact production administration. What is a strong balance?",
    choices: [
      "Use step-up verification and time-bounded privileged activation.",
      "Grant permanent administrator access to remove friction.",
      "Block all administration forever.",
      "Use a shared administrator account.",
    ],
    answer: 0,
    explanation:
      "Targeted step-up and JIT privilege preserve legitimate work while reducing standing risk.",
  },
  {
    question:
      "Why is a clear denial message valuable?",
    choices: [
      "It helps legitimate users understand the safe next step without guessing or creating workarounds.",
      "It should reveal every internal security rule.",
      "It replaces authorization.",
      "It makes monitoring unnecessary.",
    ],
    answer: 0,
    explanation:
      "Clear, safe messaging improves supportability and reduces repeated failed attempts.",
  },
  {
    question:
      "What is strongest when a required context source is stale?",
    choices: [
      "Use a governed fallback appropriate to the resource instead of automatically allowing or permanently blocking.",
      "Always allow.",
      "Always disable the control.",
      "Ignore the source-health problem.",
    ],
    answer: 0,
    explanation:
      "Resilient security defines what happens when normal evidence is unavailable.",
  },
  {
    question:
      "What is a major danger of weak recovery design?",
    choices: [
      "Recovery can become an easier bypass path than the normal authentication process.",
      "Recovery always increases security.",
      "Recovery applies only to workloads.",
      "Recovery removes the need for monitoring.",
    ],
    answer: 0,
    explanation:
      "Recovery should preserve identity assurance and accountability rather than bypass them.",
  },
  {
    question:
      "Which design best balances security and usability?",
    choices: [
      "Use proportionate controls, targeted step-up, clear messaging, accessible recovery, and evidence-driven tuning.",
      "Use the maximum possible friction for every request.",
      "Grant broad permanent access to avoid support cases.",
      "Hide all denial reasons from users and support teams.",
    ],
    answer: 0,
    explanation:
      "Balanced design preserves strong access control while making legitimate workflows reliable and understandable.",
  },
];

const checklistItems = [
  "Control strength matches resource and action sensitivity.",
  "Routine low-risk access avoids unnecessary privileged-style friction.",
  "Sensitive actions trigger stronger assurance where justified.",
  "Step-up is targeted rather than constant.",
  "Limited access is considered as an alternative to broad allow or full deny.",
  "Privileged access is time-bounded.",
  "Federation improves user experience without broadening authorization.",
  "Policy messages explain safe next steps.",
  "Support teams can identify the relevant policy decision.",
  "False-positive patterns are monitored.",
  "Repeated support burden is treated as architecture evidence.",
  "Recovery is designed before failure occurs.",
  "Recovery preserves identity assurance and accountability.",
  "Emergency access remains exceptional.",
  "Accessible approved workflows exist where needed.",
  "Fallback decisions are documented for stale or unavailable context sources.",
  "Legacy convenience does not justify weak ownership or standing access.",
  "Operational resilience is considered alongside strictness.",
  "Usability improvements do not bypass least privilege.",
  "No lesson activity requires weakening or bypassing real security controls.",
];

const takeaways = [
  "Security and usability are not opposites; both affect whether an identity control works in practice.",
  "Useful friction is targeted to meaningful increases in privilege or resource sensitivity.",
  "Routine work should not receive privileged-level friction without a reason.",
  "Step-up verification is one way to increase assurance only when needed.",
  "Clear denial and support paths reduce unsafe workaround pressure.",
  "Recovery must be secure enough that it does not become an easier bypass path.",
  "Accessibility is part of control quality because legitimate users must be able to complete the approved workflow.",
  "False positives and support burden are evidence that a policy may need tuning.",
  "Operational resilience matters because identity controls must continue to support safe work during failures.",
  "The Security and Usability Tradeoff Review will support A13.10 Zero Trust Design Lab.",
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
        Module A13
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

export default function BalancingSecurityAndUsabilityPage() {
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
              A13.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Identity, Zero Trust, and Access Control
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A13.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Balancing Security and Usability
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Identity controls must protect important resources while still
            allowing legitimate users and workloads to do their jobs reliably.
            The strongest design is not always the one with the most friction;
            it is the one that applies the right friction to the right action.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses fictional access journeys, synthetic support
            evidence, and safe policy scenarios only. It does not involve
            weakening, bypassing, or testing any real security control.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A13: Identity, Zero Trust, and Access Control"
          lessonTitle="Balancing Security and Usability"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A13.9 Entry Readiness"
          items={[
            "I understand access review, least privilege, conditional access, and privileged access.",
            "I can explain why strong security may add some legitimate friction.",
            "I understand that stale context and poor supportability can weaken an otherwise strong control.",
            "I will use only fictional user journeys and safe policy evidence.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Security Control Can Fail Even When Its Policy Looks Strong"
        >
          <p className="leading-8">
            Suppose a policy is technically strict but causes routine users to
            authenticate repeatedly, blocks legitimate work with no explanation,
            and provides no governed recovery path. On paper, the control may
            look strong. In practice, users may seek workarounds, support teams
            may disable pieces of it temporarily, and the organization may lose
            confidence in the policy. Security quality includes how reliably
            legitimate people can follow the intended design.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good security protects sensitive actions without making ordinary legitimate work unnecessarily difficult.
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
          eyebrow="Tradeoff Dimensions"
          title="Eight Dimensions of Security and Usability"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {balanceDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.question}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.evidence}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Failure mode
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {item.failureMode}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Security Friction"
          title="Not All Friction Has the Same Value"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {frictionTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.type}
                </h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Design question: {item.designQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Proportionality"
          title="Eight Principles for Strong but Usable Identity Controls"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {proportionalityPrinciples.map((item) => (
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
          eyebrow="Design Patterns"
          title="Patterns That Can Improve Security and Usability Together"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designPatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Security value: {item.securityValue}
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Usability value: {item.usabilityValue}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Evidence: {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Vocabulary"
          title="Security and Usability Terms"
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
          eyebrow="Fictional Tradeoff Register"
          title="Seven Northbridge Security and Usability Decisions"
        >
          <div className="grid gap-5">
            {tradeoffRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.outcome}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.scenario}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Control", item.control],
                    ["Security need", item.securityNeed],
                    ["User impact", item.userImpact],
                    ["Resilience", item.resilience],
                    ["Supportability", item.supportability],
                    ["Owner", item.owner],
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
                    Design concern
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
          title="Northbridge Security and Usability Dashboard"
          subtitle="Fictional control proportionality, supportability, and resilience summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Sensitive Export Workflow Has No Reliable Fallback"
          severity="High"
          time="09:11"
          source="Fictional Identity Experience Review"
          details="UX-04 protects a sensitive export with contextual policy, but the device-state source is stale and the fallback path is not fully defined. Legitimate users are blocked without a predictable recovery route."
          recommendation="Design a governed fallback that preserves stronger assurance, clear ownership, and audit evidence until the normal context source is restored."
        />

        <Section
          eyebrow="Security vs. Friction"
          title="The Goal Is Not Zero Friction — It Is Justified Friction"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h3 className="text-xl font-black text-emerald-50">
                Strong and proportionate
              </h3>
              <p className="mt-3 leading-7 text-emerald-100">
                Production administration triggers stronger verification and
                time-bounded privilege because the action can change critical
                systems.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "High-impact action",
                  "Named privileged identity",
                  "Step-up verification",
                  "Time-bounded activation",
                  "Clear owner",
                  "Audit and review",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-300/20 bg-slate-950/20 p-3 text-sm text-emerald-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-red-400/20 bg-red-400/10 p-6">
              <h3 className="text-xl font-black text-red-50">
                Strong-looking but poorly targeted
              </h3>
              <p className="mt-3 leading-7 text-red-100">
                Routine low-risk application actions trigger the same repeated
                step-up process even though resource sensitivity and privilege
                have not changed.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Low-impact action",
                  "Repeated prompts",
                  "No new risk context",
                  "Higher support burden",
                  "User frustration",
                  "More workaround pressure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-red-300/20 bg-slate-950/20 p-3 text-sm text-red-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Security and Usability Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Privileged Friction"
          question="What is the strongest design decision for UX-02?"
          evidence={[
            "The user is a platform engineer with current privileged eligibility.",
            "The requested action changes production platform configuration.",
            "The control requires step-up verification and JIT activation.",
            "The active privilege window is time-bounded.",
            "Support burden is low and the workflow is well understood.",
          ]}
          options={[
            "Keep the targeted step-up and JIT privilege because the friction is proportionate to the high-impact action.",
            "Remove step-up because any friction is bad.",
            "Grant permanent standing admin privilege.",
            "Require the same privileged workflow for every routine application action.",
          ]}
          bestAnswer={0}
          explanation="The friction is justified because it protects a high-impact administrative boundary without burdening routine access."
        />

        <Section
          eyebrow="Usability Anti-Patterns"
          title="Eight Ways Security Controls Create New Risk Through Poor Design"
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
          title="Scenario Decision Lab 1 — When Friction Is Justified"
          scenario="A platform engineer requests a high-impact production administrative action. Current design requires step-up verification and a time-bounded privileged activation."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Sensitive Export During Evidence Failure"
          scenario="A sensitive report export requires current device context, but the context source is stale. Legitimate users currently receive a generic denial with no defined fallback."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Security and Usability Tradeoff Review"
        >
          <p className="leading-8">
            Use fictional user journeys, identity controls, support records,
            access decisions, and synthetic evidence only. Do not weaken or
            alter any real security control.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional identity-control scenarios.",
              "Give every scenario a stable UX ID.",
              "Record principal type.",
              "Record resource or action.",
              "Record current security control.",
              "State the security purpose.",
              "Rate resource/action sensitivity.",
              "Rate user effort as Low, Moderate, or High.",
              "Record accessibility considerations.",
              "Record recoverability.",
              "Record supportability.",
              "Record operational resilience.",
              "Record monitoring evidence.",
              "Record false-positive or support-burden evidence where relevant.",
              "Choose Keep, Tune, Limit, Redesign, Replace, or Retire.",
              "Record the reason for the decision.",
              "Assign control owner.",
              "Assign support owner.",
              "Record fallback behavior.",
              "Record next action and closure criteria.",
              "Include at least three routine workforce workflows.",
              "Include at least three privileged workflows.",
              "Include at least two partner/external workflows.",
              "Include at least two workload or service workflows.",
              "Include at least two recovery or emergency workflows.",
              "Include at least one legacy convenience-based control and mark it for replacement.",
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
              This is a fictional design exercise. Do not disable MFA,
              weaken access controls, bypass policy, change recovery settings,
              alter real permissions, or test any live identity system.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Sensitive Export Fallback"
          question="What is the strongest design improvement for UX-04?"
          evidence={[
            "The export is sensitive and deserves stronger assurance.",
            "The workforce identity is current.",
            "The device-context source is stale.",
            "The current denial message is generic.",
            "No fully defined fallback path exists.",
            "Legitimate users need a controlled way to complete approved exports.",
          ]}
          options={[
            "Allow all exports while the source is stale.",
            "Design a governed fallback with strong verification, clear ownership, safe messaging, audit evidence, and automatic return to the normal policy once source health is restored.",
            "Permanently block all exports.",
            "Remove the sensitive-export control entirely.",
          ]}
          bestAnswer={1}
          explanation="A resilient design preserves the security intent while giving legitimate users a safe, auditable path during temporary evidence failure."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Redesign a High-Friction Identity Program"
        >
          <p className="leading-8">
            A fictional organization has strong security policies but users
            complain about repeated prompts, unclear denials, slow approvals,
            inaccessible recovery, and frequent exception requests. Redesign the
            program without weakening its important security boundaries.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Map the legitimate user journeys",
              "Identify high-impact actions",
              "Separate routine and privileged friction",
              "Use targeted step-up",
              "Use limited access where possible",
              "Improve policy messaging",
              "Define support ownership",
              "Measure false positives",
              "Measure support burden",
              "Define accessible approved workflows",
              "Design secure recovery",
              "Design stale-source fallback",
              "Preserve environment boundaries",
              "Preserve JIT privilege",
              "Retire legacy convenience access",
              "Create evidence-based tuning reviews",
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
            A strong redesign should make the secure path the easiest approved
            path for legitimate users while keeping stronger friction exactly
            where privilege, sensitivity, or uncertainty justify it.
          </p>
        </Section>

        <DefenderChecklist
          title="A13.9 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A13.9 Mini Quiz: Balancing Security and Usability"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Security and Usability Tradeoff Review"
          prompt="Create the ninth artifact for your A13 Enterprise Identity and Zero-Trust Review: a fictional Security and Usability Tradeoff Review with at least fifteen control scenarios. Include UX ID, principal type, resource/action, current control, security purpose, sensitivity, user effort, accessibility, recoverability, supportability, operational resilience, monitoring evidence, false-positive/support evidence where relevant, decision, rationale, control owner, support owner, fallback behavior, next action, and closure criteria."
          tips={[
            "Include routine, privileged, partner, workload, recovery, and legacy workflows.",
            "Use targeted step-up rather than maximum friction everywhere.",
            "Include at least two fallback or recovery designs.",
            "Include at least one accessibility consideration.",
            "Use support burden and false positives as architecture evidence.",
            "Use fictional provider-neutral records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A13.10?"
        >
          <p className="leading-8">
            A13.10 is the Zero Trust Design Lab. Before continuing, make sure
            you can judge an identity architecture not only by whether it is
            restrictive, but by whether its controls are proportionate,
            understandable, observable, recoverable, and usable enough to work
            reliably in real operations.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish useful friction from unnecessary friction.",
              "I can explain why step-up access is a proportional control.",
              "I can explain why recovery must preserve security assurance.",
              "I can identify supportability and accessibility as control-quality concerns.",
              "I can evaluate a security/usability tradeoff using evidence rather than preference.",
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
          title="How to Make the Tradeoff Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with the security purpose",
                detail:
                  "Explain what the control is protecting before discussing convenience or friction.",
              },
              {
                title: "Measure user impact",
                detail:
                  "Use user effort, support burden, false positives, and workflow interruption as evidence.",
              },
              {
                title: "Show sensitivity",
                detail:
                  "Routine and privileged actions should not automatically receive the same control strength.",
              },
              {
                title: "Show recovery",
                detail:
                  "Document how legitimate users can recover without bypassing identity assurance.",
              },
              {
                title: "Show accessibility",
                detail:
                  "Identify whether the approved workflow works for the intended user population.",
              },
              {
                title: "Show supportability",
                detail:
                  "Make policy IDs, owners, reasons, and escalation paths visible enough to diagnose problems.",
              },
              {
                title: "Use evidence to tune",
                detail:
                  "Repeated false positives or support cases should trigger design review rather than blame.",
              },
              {
                title: "Connect forward",
                detail:
                  "A13.10 will integrate this tradeoff analysis with every prior A13 identity architecture artifact.",
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
            Usability analysis does not require weakening real security controls
          </h2>
          <p className="mt-3 leading-7">
            Do not disable MFA, weaken authentication, bypass policy, alter
            permissions, change recovery methods, or test real identity
            controls. All user journeys, support evidence, policy outcomes, and
            redesigns in this lesson are fictional and defensive.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A13.9 Balancing Security and Usability Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a security/usability model built around proportional
            controls, useful friction, step-up access, supportability,
            recoverability, accessibility, false positives, fallback design,
            and operational resilience. Next, A13.10 is the Zero Trust Design
            Lab.
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