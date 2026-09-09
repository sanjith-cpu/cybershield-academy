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
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/data-minimization-and-purpose-limitation`;
const nextLesson = `${modulePath}/retention-and-deletion-concepts`;

const objectives = [
  "Explain consent, notice, transparency, user expectations, defaults, choice, and contextual integrity as related but distinct privacy-engineering concepts.",
  "Evaluate whether a fictional user-facing privacy choice is understandable, specific, relevant, accessible, voluntary, and connected to the actual data practice.",
  "Recognize weak patterns such as vague notice, bundled choices, manipulative defaults, surprise secondary use, and consent used to excuse unnecessary collection.",
  "Design privacy-respecting product decisions that align data use with reasonable expectations while preserving legitimate security, usability, accessibility, and business goals.",
  "Build a Consent and Expectations Assessment that becomes the fourth artifact in the A16 Privacy Engineering Review.",
];

const coreConcepts = [
  {
    concept: "Notice",
    meaning:
      "A clear explanation of an important data practice, purpose, recipient, or consequence.",
    engineeringQuestion:
      "Does the explanation appear where the user can understand it before or when the relevant decision matters?",
    strongPattern:
      "A scheduling form explains that selected contact details will be shared with the approved scheduling partner for appointment coordination.",
    weakPattern:
      "A broad statement says data may be used to improve services without identifying the actual sharing or purpose.",
  },
  {
    concept: "Consent",
    meaning:
      "A meaningful user choice for a defined data practice when choice is appropriate to the context.",
    engineeringQuestion:
      "Is the choice specific, understandable, voluntary, and tied to the real behavior of the system?",
    strongPattern:
      "Optional notifications remain off until the user chooses a channel.",
    weakPattern:
      "Optional tracking is bundled into acceptance of an unrelated required service.",
  },
  {
    concept: "Transparency",
    meaning:
      "The broader ability for people to understand how important data practices work.",
    engineeringQuestion:
      "Could a reasonable user understand the system's major collection, use, sharing, and retention practices?",
    strongPattern:
      "Product explanations are concise, layered, and consistent with the actual data flow.",
    weakPattern:
      "The interface is simple, but the backend performs materially different uses that are not explained.",
  },
  {
    concept: "User expectation",
    meaning:
      "What a reasonable user would anticipate based on context, service purpose, prior explanation, and normal product behavior.",
    engineeringQuestion:
      "Would the actual data use feel consistent with the user's reason for providing the information?",
    strongPattern:
      "A support request is used to provide and improve that support service.",
    weakPattern:
      "Support-case details are reused for unrelated individual profiling.",
  },
  {
    concept: "Default",
    meaning:
      "The system state that applies when the user takes no action.",
    engineeringQuestion:
      "Does the default protect privacy without blocking the legitimate core service?",
    strongPattern:
      "Optional promotional notifications are off by default; required service notifications remain appropriately enabled.",
    weakPattern:
      "All optional uses are preselected because most users will not change them.",
  },
  {
    concept: "Choice architecture",
    meaning:
      "How options, explanations, timing, wording, and interface structure shape a user's decision.",
    engineeringQuestion:
      "Are options presented fairly, or is the interface designed to push users toward more data collection?",
    strongPattern:
      "Accept and decline choices are comparably visible and understandable.",
    weakPattern:
      "The accept button is prominent while the decline path is hidden behind several screens.",
  },
  {
    concept: "Withdrawal / change",
    meaning:
      "The ability to revisit an optional choice when the product or user preference changes.",
    engineeringQuestion:
      "Can the user change a choice without losing unrelated core functionality?",
    strongPattern:
      "Notification preferences can be updated from the same settings area used to enable them.",
    weakPattern:
      "Opting out requires contacting support while opting in takes one click.",
  },
  {
    concept: "Contextual integrity",
    meaning:
      "The idea that privacy expectations depend on who is sharing what information, for what purpose, with whom, and under what social or service context.",
    engineeringQuestion:
      "Does the data flow fit the original context, or does it introduce a new audience or purpose?",
    strongPattern:
      "A scheduling partner receives only the fields needed to complete the scheduling service.",
    weakPattern:
      "The same partner receives unrelated support history because the data is technically available.",
  },
];

const consentQualityFactors = [
  {
    factor: "Specificity",
    question:
      "Is the user choosing a defined data practice rather than a vague category of future uses?",
    strong:
      "Share my selected appointment details with the scheduling partner.",
    weak:
      "Allow data use for service enhancement.",
  },
  {
    factor: "Clarity",
    question:
      "Can the intended audience understand the wording without specialized legal or technical knowledge?",
    strong:
      "Use plain language near the relevant feature.",
    weak:
      "Use dense terminology that hides the practical effect.",
  },
  {
    factor: "Voluntariness",
    question:
      "Can the user decline an optional use without losing unrelated essential service?",
    strong:
      "Optional research participation can be declined while normal service remains available.",
    weak:
      "Declining optional analytics disables the required account.",
  },
  {
    factor: "Granularity",
    question:
      "Are unrelated choices separated when they represent meaningfully different purposes?",
    strong:
      "Service notifications and optional research are separate choices.",
    weak:
      "One checkbox covers notifications, research, partner sharing, and future analytics.",
  },
  {
    factor: "Timing",
    question:
      "Is the explanation presented when the user can connect it to the data practice?",
    strong:
      "The partner-sharing explanation appears before the scheduling confirmation.",
    weak:
      "A one-time onboarding screen describes a feature introduced years later.",
  },
  {
    factor: "Accessibility",
    question:
      "Can users with different abilities and needs understand and operate the choice?",
    strong:
      "Clear labels, keyboard support, readable contrast, understandable wording, and screen-reader compatibility.",
    weak:
      "Critical explanation is conveyed only through tiny low-contrast text or hover behavior.",
  },
  {
    factor: "Symmetry",
    question:
      "Are accept and decline paths comparably understandable and achievable?",
    strong:
      "Both choices are visible and take similar effort.",
    weak:
      "Accept is one click while decline requires multiple hidden steps.",
  },
  {
    factor: "Revocability",
    question:
      "Can the user later change an optional preference in a practical way?",
    strong:
      "Settings show current choice and allow easy update.",
    weak:
      "The user cannot discover how to reverse the decision.",
  },
];

const expectationSignals = [
  {
    signal: "Service context",
    explanation:
      "What the person is trying to accomplish often shapes what data use feels expected.",
    example:
      "Providing contact information to receive a requested appointment update.",
  },
  {
    signal: "Prior explanation",
    explanation:
      "What the product previously told the user influences later expectations.",
    example:
      "A research feature was described as optional and separate from core service delivery.",
  },
  {
    signal: "Data sensitivity",
    explanation:
      "More sensitive data usually creates stronger expectations around access, sharing, and secondary use.",
    example:
      "Detailed support notes deserve more contextual restraint than an aggregate service count.",
  },
  {
    signal: "Recipient",
    explanation:
      "A new internal team, supplier, or partner can change the privacy context.",
    example:
      "A scheduling partner is expected to receive scheduling details, not unrelated case history.",
  },
  {
    signal: "Purpose change",
    explanation:
      "A new business objective may make an old data flow surprising.",
    example:
      "Using support requests for unrelated individual behavioral scoring.",
  },
  {
    signal: "Retention change",
    explanation:
      "Keeping data much longer than expected can change privacy impact even if the original collection was appropriate.",
    example:
      "Temporary project data becomes a permanent user profile.",
  },
  {
    signal: "Inference",
    explanation:
      "Derived conclusions can create privacy expectations that differ from the source events.",
    example:
      "Ordinary activity events become an individual engagement indicator.",
  },
  {
    signal: "Power / dependency",
    explanation:
      "Choice can be less meaningful when the user depends on the service or cannot realistically decline.",
    example:
      "A required core service should not rely on bundled optional data use as though it were freely chosen.",
  },
];

const whenConsentIsNotEnough = [
  {
    case: "Unnecessary collection",
    why:
      "A user agreeing does not automatically make unnecessary data collection good privacy engineering.",
    stronger:
      "Minimize first, then use consent only where meaningful choice is appropriate.",
  },
  {
    case: "Required service function",
    why:
      "Some data may be necessary to deliver the service, so presenting it as an optional choice can be misleading.",
    stronger:
      "Explain necessity transparently and minimize the required data.",
  },
  {
    case: "Broad future-use permission",
    why:
      "One broad choice cannot reasonably explain every unknown future use.",
    stronger:
      "Review materially different secondary uses when they arise.",
  },
  {
    case: "Weak interface design",
    why:
      "Manipulative presentation can undermine the quality of the choice.",
    stronger:
      "Use understandable, balanced, accessible options.",
  },
  {
    case: "Sensitive or high-impact use",
    why:
      "Even with user choice, strong governance, controls, minimization, and evidence may still be necessary.",
    stronger:
      "Treat consent as one part of the privacy design, not the entire design.",
  },
  {
    case: "Changed system behavior",
    why:
      "An old choice may no longer match the current data flow or purpose.",
    stronger:
      "Trigger re-review after material product, data, supplier, or purpose changes.",
  },
];

const interfacePatterns = [
  {
    pattern: "Layered notice",
    description:
      "Show the most important explanation near the decision, with deeper detail available for users who want it.",
    goodFor:
      "Complex features where a short explanation is enough for immediate context but full details still matter.",
    caution:
      "The short layer must not hide a material fact.",
  },
  {
    pattern: "Just-in-time explanation",
    description:
      "Explain the data practice at the point when the user encounters it.",
    goodFor:
      "Optional location, partner sharing, research, or notification features.",
    caution:
      "Avoid interrupting users repeatedly for low-value acknowledgments.",
  },
  {
    pattern: "Privacy-respecting default",
    description:
      "Choose a default that avoids optional data use unless there is a strong service reason.",
    goodFor:
      "Optional communications, optional analytics, optional sharing.",
    caution:
      "Do not disable core functionality that legitimately requires data.",
  },
  {
    pattern: "Separate choices",
    description:
      "Split materially different purposes into distinct choices.",
    goodFor:
      "Core service, optional notifications, research, partner sharing, and personalization.",
    caution:
      "Too many tiny choices can create fatigue; group only when purposes are genuinely related.",
  },
  {
    pattern: "Persistent settings",
    description:
      "Let users view and update current optional choices later.",
    goodFor:
      "Notifications, personalization, optional research, communication channels.",
    caution:
      "The settings page should reflect the real current system state.",
  },
  {
    pattern: "Change notice",
    description:
      "Surface material changes when they alter purpose, recipient, sensitivity, or user expectation.",
    goodFor:
      "New supplier sharing, major secondary use, significant retention expansion.",
    caution:
      "Do not use constant generic notices that train users to ignore meaningful changes.",
  },
];

const northbridgeRecords = [
  {
    id: "EXP-401",
    linked:
      "CTX-P04 / DATA-201 / MIN-301",
    experience:
      "Optional notification preferences",
    purpose:
      "Allow users to choose optional channels for service updates.",
    expectation:
      "Users expect required service communication to remain separate from optional channels.",
    currentDesign:
      "Optional SMS is off by default; email service notices are enabled when required for the requested service.",
    issue:
      "Historical preference retention is still undefined.",
    consentQuality:
      "Strong for optional channel selection",
    evidence:
      "Current settings flow, product requirement, preference state",
    recommendation:
      "Keep optional channels user-controlled and add a clear retention rule for obsolete preference history.",
    owner:
      "Communications Product Owner",
    state:
      "Monitor / Treat",
  },
  {
    id: "EXP-402",
    linked:
      "CTX-P03 / DATA-205 / MIN-305",
    experience:
      "Partner scheduling confirmation",
    purpose:
      "Share the minimal approved scheduling fields with an external partner.",
    expectation:
      "Users expect scheduling details to reach the scheduling partner, not unrelated profile or support history.",
    currentDesign:
      "The interface explains partner scheduling but does not list the newly expanded field scope.",
    issue:
      "Actual sharing exceeds the scope a reasonable user would infer from the current explanation.",
    consentQuality:
      "Partial / context mismatch",
    evidence:
      "Current confirmation screen + interface schema",
    recommendation:
      "Reduce the payload to the approved purpose and update the explanation to match the real data flow.",
    owner:
      "Integration Product Owner",
    state:
      "Treat",
  },
  {
    id: "EXP-403",
    linked:
      "DATA-203 / MIN-303",
    experience:
      "Learning analytics program notice",
    purpose:
      "Support aggregate program improvement.",
    expectation:
      "Users expect course activity to support operation and improvement of the learning service.",
    currentDesign:
      "Aggregate reporting is explained; individual long-term profiling is not.",
    issue:
      "Retaining individual event histories longer than the bounded analytics need would exceed the stated context.",
    consentQuality:
      "Not primarily a consent problem",
    evidence:
      "Program description, analytics requirements, retention design",
    recommendation:
      "Use aggregate long-term reporting and minimize individual retention rather than relying on broader consent language.",
    owner:
      "Learning Analytics Owner",
    state:
      "Treat",
  },
  {
    id: "EXP-404",
    linked:
      "DATA-206 / MIN-306",
    experience:
      "Optional internal research participation",
    purpose:
      "Use an approved de-identified sample for a time-bounded internal research project.",
    expectation:
      "Optional research should remain separate from the core service.",
    currentDesign:
      "Research explanation is distinct and participation does not affect normal service access.",
    issue:
      "Closeout must still prove deletion of temporary copies.",
    consentQuality:
      "Strong",
    evidence:
      "Research explanation, project scope, service-access comparison",
    recommendation:
      "Maintain separate optional participation and require project closeout evidence.",
    owner:
      "Research Program Owner",
    state:
      "Conditional",
  },
  {
    id: "EXP-405",
    linked:
      "DATA-202 / MIN-302",
    experience:
      "Support case-note collection",
    purpose:
      "Document information necessary to provide the requested support.",
    expectation:
      "Users expect relevant support details to be used by authorized support staff.",
    currentDesign:
      "The case flow explains why details are requested and limits access to support roles.",
    issue:
      "A proposal suggests adding unrelated analytics use to the same notice.",
    consentQuality:
      "Strong for support purpose; weak for proposed secondary analytics",
    evidence:
      "Current support flow, access model, proposed analytics request",
    recommendation:
      "Keep the support purpose distinct and review unrelated analytics as a separate secondary use.",
    owner:
      "Student Services Data Owner",
    state:
      "Treat proposed secondary use",
  },
  {
    id: "EXP-406",
    linked:
      "DATA-207 / MIN-307",
    experience:
      "Support quality dashboard",
    purpose:
      "Show aggregate response-time and staffing trends.",
    expectation:
      "Users should not be individually exposed through an operational dashboard.",
    currentDesign:
      "Aggregate metrics are shown; routine individual drill-down is disabled.",
    issue:
      "Low privacy concern if aggregation remains strong.",
    consentQuality:
      "Not primarily a consent decision",
    evidence:
      "Dashboard design, aggregation review, export controls",
    recommendation:
      "Continue aggregate reporting and reassess if individual-level drill-down is introduced.",
    owner:
      "Operations Analytics Owner",
    state:
      "Monitor",
  },
  {
    id: "EXP-407",
    linked:
      "CTX-P01 / MIN-301",
    experience:
      "Base support-profile setup",
    purpose:
      "Collect the minimum information necessary to provide support services.",
    expectation:
      "Users expect profile fields to relate to the support service they are requesting.",
    currentDesign:
      "Three unused fields remain in the profile form.",
    issue:
      "A clearer consent statement would not solve unnecessary collection.",
    consentQuality:
      "Consent not sufficient",
    evidence:
      "Current form schema + workflow map",
    recommendation:
      "Remove the unused fields rather than asking users to approve unnecessary collection.",
    owner:
      "Student Services Product Owner",
    state:
      "Treat",
  },
];

const dashboardMetrics = [
  {
    label: "Experience reviews",
    value: "7",
    note: "Notifications, scheduling, analytics, research, support, dashboard, and profile setup",
  },
  {
    label: "Strong choice",
    value: "2",
    note: "Optional notifications and separate research participation are well aligned",
  },
  {
    label: "Treat",
    value: "4",
    note: "Partner mismatch, analytics retention, proposed secondary use, and unused profile fields need action",
  },
  {
    label: "Consent not enough",
    value: "3",
    note: "Minimization, retention, and purpose problems require design changes beyond user agreement",
  },
];

const logs = [
  "[08:16] EXP-401 feature=OPTIONAL_NOTIFICATIONS default=OFF choice=STRONG retention=PENDING",
  "[08:38] EXP-402 feature=PARTNER_SCHEDULING notice_scope=OLDER actual_scope=EXPANDED state=TREAT",
  "[09:00] EXP-403 feature=LEARNING_ANALYTICS consent_primary=NO retention=REDUCE state=TREAT",
  "[09:22] EXP-404 feature=OPTIONAL_RESEARCH choice=SEPARATE service_access=UNCHANGED state=CONDITIONAL",
  "[09:44] EXP-405 feature=SUPPORT_CASE proposed_secondary=UNRELATED state=TREAT",
  "[10:06] EXP-406 feature=QUALITY_DASHBOARD aggregation=STRONG state=MONITOR",
  "[10:28] EXP-407 feature=SUPPORT_PROFILE unused_fields=3 consent_solution=INSUFFICIENT state=TREAT",
];

const antiPatterns = [
  {
    title: "Consent as a substitute for minimization",
    problem:
      "The team asks users to agree to unnecessary collection instead of removing the data.",
    better:
      "Minimize first; use consent only where meaningful optional choice is appropriate.",
  },
  {
    title: "Bundled unrelated purposes",
    problem:
      "One choice covers service delivery, research, marketing, partner sharing, and future analytics.",
    better:
      "Separate materially different purposes.",
  },
  {
    title: "Manipulative default",
    problem:
      "Optional data use is enabled because the team expects users not to notice.",
    better:
      "Use a privacy-respecting default and a clear opt-in when appropriate.",
  },
  {
    title: "Hidden decline path",
    problem:
      "Accept is easy while decline requires multiple obscure steps.",
    better:
      "Make choices comparably understandable and achievable.",
  },
  {
    title: "Notice does not match reality",
    problem:
      "The interface describes a narrow purpose while backend sharing has expanded.",
    better:
      "Align explanation with the current real data flow and reduce unsupported scope.",
  },
  {
    title: "Old choice used forever",
    problem:
      "A historical user choice is treated as approval for later materially different features.",
    better:
      "Reassess after meaningful changes to purpose, data, recipients, or retention.",
  },
  {
    title: "Choice blocks unrelated service",
    problem:
      "Declining an optional data use prevents access to an unrelated required service.",
    better:
      "Keep optional uses separate unless the data is genuinely necessary for the service.",
  },
  {
    title: "Accessibility ignored",
    problem:
      "The choice technically exists but is difficult for some users to perceive, understand, or operate.",
    better:
      "Treat accessibility as part of meaningful privacy choice.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Reduce the partner payload to the approved scheduling purpose and update the user-facing explanation so it accurately describes the current sharing.",
    outcome:
      "Best. The system should align actual data use, minimization, and user expectation rather than relying on a vague old notice.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep all eight fields and add a broad sentence saying data may be shared with partners.",
    outcome:
      "Risky. A vague notice does not solve unnecessary sharing or purpose mismatch.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Hide the field list so users are not confused.",
    outcome:
      "Risky. Reducing transparency does not improve privacy engineering.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Remove the three unused profile fields instead of adding a consent checkbox for them.",
    outcome:
      "Best. Consent should not be used to justify data that the current service does not need.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the fields and preselect a checkbox allowing future use.",
    outcome:
      "Risky. Preselected optional use and unsupported future purpose weaken both minimization and choice.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the fields but rename them so they sound less sensitive.",
    outcome:
      "Risky. Wording does not create necessity.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What makes a privacy choice meaningful?",
    choices: [
      "It is understandable, specific, relevant, voluntary when optional, accessible, and connected to the actual system behavior.",
      "It is written in very long legal language.",
      "It is always preselected.",
      "It appears only once at account creation.",
    ],
    answer: 0,
    explanation:
      "Meaningful choice depends on clarity, context, specificity, fairness, and alignment with actual behavior.",
  },
  {
    question:
      "Which statement about consent is strongest?",
    choices: [
      "Consent can be useful, but it does not replace minimization, purpose limitation, security, retention, or governance.",
      "Consent makes all data use acceptable.",
      "Consent eliminates all privacy risk.",
      "Consent is required for every system function.",
    ],
    answer: 0,
    explanation:
      "Consent is one privacy mechanism, not a universal solution.",
  },
  {
    question:
      "What is a privacy-respecting default?",
    choices: [
      "A default that avoids optional data use unless there is a strong service reason.",
      "A default that enables every optional feature.",
      "A hidden setting.",
      "A setting users cannot change.",
    ],
    answer: 0,
    explanation:
      "Defaults should avoid unnecessary optional data use while preserving legitimate core service.",
  },
  {
    question:
      "What does contextual integrity ask?",
    choices: [
      "Whether the data flow fits who is sharing what information, with whom, for what purpose, and in what context.",
      "Whether the database is encrypted.",
      "Whether all users chose the same setting.",
      "Whether a supplier is large.",
    ],
    answer: 0,
    explanation:
      "Privacy expectations depend heavily on context, purpose, recipient, and information type.",
  },
  {
    question:
      "What is strongest when a materially different new purpose is introduced?",
    choices: [
      "Conduct a fresh review of purpose, minimization, transparency, expectations, risk, ownership, and any meaningful choice.",
      "Assume an old consent statement covers it.",
      "Hide the new use in a policy update.",
      "Use the data because it already exists.",
    ],
    answer: 0,
    explanation:
      "Material purpose changes should not inherit old assumptions automatically.",
  },
  {
    question:
      "Why is accessibility part of privacy choice?",
    choices: [
      "A choice is not meaningful if users cannot reasonably perceive, understand, or operate it.",
      "Accessibility only matters for visual design.",
      "Privacy choices should use technical language.",
      "Accessibility replaces transparency.",
    ],
    answer: 0,
    explanation:
      "Privacy engineering should make important choices usable by the intended audience.",
  },
  {
    question:
      "What is strongest for unnecessary profile fields?",
    choices: [
      "Remove them rather than asking users to consent to unnecessary collection.",
      "Keep them and use a prechecked box.",
      "Keep them because storage is inexpensive.",
      "Hide them from the interface but still collect them.",
    ],
    answer: 0,
    explanation:
      "Minimization is the stronger solution when the current service does not need the data.",
  },
];

const checklistItems = [
  "The actual data practice is documented.",
  "The user-facing explanation matches the real system behavior.",
  "Primary and secondary purposes are distinguished.",
  "Optional choices are separated from required service functions.",
  "Choice wording is specific enough to understand.",
  "Choice wording avoids unnecessary technical jargon.",
  "Optional defaults are privacy-respecting where appropriate.",
  "Accept and decline paths are reasonably symmetrical.",
  "Users can revisit optional choices.",
  "Accessibility is considered.",
  "Timing of notice matches the decision context.",
  "Material changes trigger re-review.",
  "New recipients or suppliers trigger expectation review.",
  "Purpose changes trigger expectation review.",
  "Retention expansion triggers expectation review.",
  "Derived or inferred data receives its own context review.",
  "Consent is not used to justify unnecessary collection.",
  "Security controls are not used as a substitute for transparency.",
  "Accountable owner is named.",
  "All examples remain fictional or synthetic.",
];

const takeaways = [
  "Consent, notice, transparency, defaults, and user expectations are related but distinct.",
  "Meaningful choice should be specific, understandable, voluntary when optional, accessible, and connected to the real data practice.",
  "Consent does not excuse unnecessary collection or purpose expansion.",
  "Privacy-respecting defaults can reduce unnecessary optional data use.",
  "User expectations depend on context, recipient, purpose, sensitivity, retention, and inference.",
  "Material product or data changes can make an old notice or choice stale.",
  "Accessibility is part of meaningful privacy choice.",
  "A vague notice does not fix an overbroad partner payload.",
  "Some privacy decisions are better solved through minimization or architecture than through consent.",
  "The Consent and Expectations Assessment prepares you for A16.5 Retention and Deletion Concepts.",
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
        Module A16
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

export default function ConsentAndUserExpectationsPage() {
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
              A16.4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.4
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Consent and User Expectations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy choices only work when they match the real system. This
            lesson examines how notice, choice, defaults, transparency,
            accessibility, context, secondary use, and user expectations shape
            privacy engineering decisions—and why consent is not a substitute
            for minimization or good architecture.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All interfaces, users, choices, services, and data practices are
            fictional. This lesson does not provide legal advice and does not
            involve real personal records or private accounts.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A16: Privacy Engineering and Data Governance"
          lessonTitle="Consent and User Expectations"
          lessonNumber={4}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.4 Entry Readiness"
          items={[
            "I can explain the current purpose and data scope of a fictional feature.",
            "I can distinguish necessary service data from optional secondary use.",
            "I understand that user agreement does not automatically justify unnecessary data.",
            "I will use only fictional or synthetic scenarios.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Checkbox Cannot Repair a Misleading Data Flow"
        >
          <p className="leading-8">
            Product teams sometimes treat consent as the final answer to every
            privacy question. Privacy engineering takes a broader view. A
            choice should match the actual system, the user should understand
            what matters, and the underlying collection, sharing, retention, and
            purpose should already be reasonable.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Good privacy design makes the system understandable and appropriate—not merely clickable.
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
          eyebrow="Core Concepts"
          title="Eight Ideas That Shape User-Facing Privacy"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {coreConcepts.map((item) => (
              <article
                key={item.concept}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.concept}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Engineering question: {item.engineeringQuestion}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong pattern: {item.strongPattern}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak pattern: {item.weakPattern}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Consent Quality"
          title="Eight Qualities of a Meaningful Choice"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {consentQualityFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="User Expectations"
          title="What Makes a Data Use Feel Expected or Surprising"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {expectationSignals.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.explanation}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Consent Is Not Everything"
          title="Six Situations Where Better Design Matters More Than Another Checkbox"
        >
          <div className="grid gap-5">
            {whenConsentIsNotEnough.map((item, index) => (
              <article
                key={item.case}
                className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-yellow-50">
                      {item.case}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-yellow-100">
                      Why consent is not enough: {item.why}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-emerald-100">
                      Stronger approach: {item.stronger}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Interface Design"
          title="Patterns That Support Better Privacy Choices"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {interfacePatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Good for: {item.goodFor}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contextual Integrity"
          title="Privacy Depends on Who, What, Why, and Where"
        >
          <p className="leading-8">
            The same data can feel appropriate in one context and surprising in
            another. A phone number used to deliver a requested appointment
            reminder fits one context. Reusing the same number for unrelated
            promotional outreach changes the purpose and expectation even though
            the field itself did not change.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Sender / source",
                detail:
                  "Who provided or created the information?",
              },
              {
                title: "Information type",
                detail:
                  "What data or derived meaning is involved?",
              },
              {
                title: "Recipient",
                detail:
                  "Who receives the information?",
              },
              {
                title: "Purpose",
                detail:
                  "Why is the information being used or shared?",
              },
              {
                title: "Context",
                detail:
                  "What service or relationship surrounds the interaction?",
              },
              {
                title: "Lifecycle",
                detail:
                  "How long does the information continue to exist or remain usable?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Experience Review"
          title="Seven Northbridge Consent and Expectation Records"
        >
          <div className="grid gap-5">
            {northbridgeRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.linked}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.experience}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["User expectation", item.expectation],
                    ["Current design", item.currentDesign],
                    ["Issue", item.issue],
                    ["Consent quality", item.consentQuality],
                    ["Evidence", item.evidence],
                    ["Recommendation", item.recommendation],
                    ["Owner", item.owner],
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
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Consent and Expectations Dashboard"
          subtitle="Fictional choice quality, context, purpose, minimization, and change summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Notice No Longer Matches Actual Data Scope"
          severity="High"
          time="08:38"
          source="Fictional Privacy Experience Review"
          details="EXP-402 explains a narrow scheduling purpose, but the backend now sends additional profile fields beyond the older reviewed scope. The mismatch creates both a minimization problem and an expectation problem."
          recommendation="Reduce the payload to the approved purpose and update the user-facing explanation so it accurately matches the real data flow."
        />

        <FakeLogPanel
          title="Fictional Consent and Expectations Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Scheduling Explanation"
          question="What is the strongest current decision for EXP-402?"
          evidence={[
            "The interface tells users that scheduling details will be shared with the partner.",
            "The original approved schema contained four fields.",
            "The current backend sends eight fields.",
            "The additional fields are not documented as necessary for scheduling.",
            "The connection is encrypted.",
          ]}
          options={[
            "Reduce the payload to the approved scheduling purpose and update the explanation to match the actual data flow.",
            "Keep all eight fields because encryption protects the transfer.",
            "Keep all eight fields and add a vague statement that partners may receive data.",
            "Remove the explanation so users are not confused.",
          ]}
          bestAnswer={0}
          explanation="The strongest decision aligns purpose, minimization, transparency, and actual system behavior. Encryption does not justify extra fields."
        />

        <Section
          eyebrow="Common Consent and Expectation Mistakes"
          title="Eight Ways User-Facing Privacy Design Becomes Weak"
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
          title="Scenario Decision Lab 1 — Notice and Partner Scope"
          scenario="A scheduling page clearly says that appointment details will be shared with a partner, but the backend now sends additional profile fields that the current scheduling workflow does not use."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Consent for Unused Fields"
          scenario="A support team wants to keep three unused profile fields and proposes adding a checkbox asking users to allow collection for possible future features."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Consent and Expectations Assessment"
        >
          <p className="leading-8">
            Review fictional product experiences and determine whether the
            explanation, choice, default, context, accessibility, purpose, and
            actual data behavior align.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional consent and expectation review records.",
              "Give every record a stable EXP ID.",
              "Link each record to relevant CTX-P, DATA, or MIN IDs.",
              "Name the user-facing feature or experience.",
              "Write the actual business purpose.",
              "Write the actual data practice.",
              "Write the expected user context.",
              "Identify whether the practice is Required, Optional, Secondary, or Not Primarily a Consent Decision.",
              "Record notice wording or explanation summary.",
              "Record whether the notice matches actual behavior.",
              "Record the default state.",
              "Record whether accept and decline paths are reasonably symmetrical.",
              "Record whether the choice is specific.",
              "Record whether the choice is understandable.",
              "Record whether the choice is accessible.",
              "Record whether users can later change the choice.",
              "Record any supplier or new-recipient effect.",
              "Record any retention or inference effect.",
              "Record evidence.",
              "Rate expectation alignment as Strong, Partial, Weak, or Unknown.",
              "Choose a recommendation.",
              "Name the accountable owner.",
              "Define a review or change trigger.",
              "Include at least five strong optional-choice examples.",
              "Include at least five cases where consent is not the right primary solution.",
              "Include at least five secondary-use reviews.",
              "Include at least three supplier-sharing reviews.",
              "Include at least three accessibility concerns.",
              "Include at least three manipulative or asymmetric choice patterns to correct.",
              "Include at least three cases where a historical notice is stale after product change.",
              "Include at least three cases where the strongest action is minimization rather than more notice.",
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
              Use fictional product screens, users, choices, and data flows
              only. Do not collect real consent records, private account
              settings, browsing histories, or personal information. Do not
              design manipulative interfaces intended to trick users into
              sharing more data.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Unused Support Fields"
          question="What is the strongest current decision for EXP-407?"
          evidence={[
            "Three profile fields are collected in the base support form.",
            "The active support workflow does not use the fields.",
            "No current product requirement justifies them.",
            "The team proposes a new checkbox allowing collection for possible future features.",
          ]}
          options={[
            "Remove the unused fields instead of using consent to justify unnecessary collection.",
            "Keep the fields with a prechecked consent box.",
            "Keep the fields because future features may use them.",
            "Hide the fields from the interface while collecting them in the background.",
          ]}
          bestAnswer={0}
          explanation="When the current service does not need the data, minimization is stronger than asking users to approve unnecessary collection."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Privacy Experience Review Standard"
        >
          <p className="leading-8">
            Create a fictional standard for how product teams review user-facing
            privacy experiences when they introduce optional features, new
            sharing, new analytics, new suppliers, or major changes in purpose.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Actual data practice",
              "Business purpose",
              "Required vs optional",
              "Notice content",
              "Notice timing",
              "Choice specificity",
              "Choice clarity",
              "Voluntariness",
              "Choice symmetry",
              "Default state",
              "Accessibility",
              "Revocability",
              "User expectation",
              "Recipient change",
              "Purpose change",
              "Retention change",
              "Inference change",
              "Evidence",
              "Owner",
              "Review triggers",
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
            The strongest standard should prevent teams from treating consent as
            a universal answer and should keep user-facing explanations aligned
            with the actual system.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.4 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.4 Mini Quiz: Consent and User Expectations"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Consent and Expectations Assessment"
          prompt="Create the fourth artifact for your A16 Privacy Engineering Review: a fictional Consent and Expectations Assessment with at least twenty-five records. Include EXP ID, linked CTX-P/DATA/MIN IDs, feature/experience, business purpose, actual data practice, expected user context, Required/Optional/Secondary/Not Primarily Consent category, notice summary, notice-to-reality alignment, default, choice symmetry, specificity, clarity, accessibility, revocability, supplier/recipient effect, retention effect, inference effect, evidence, expectation alignment, recommendation, owner, and review/change trigger."
          tips={[
            "Review the real data flow before the interface wording.",
            "Use minimization when consent is not the right solution.",
            "Separate materially different purposes.",
            "Treat accessibility as part of meaningful choice.",
            "Check whether old notices became stale after change.",
            "Use fictional or synthetic examples only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.5?"
        >
          <p className="leading-8">
            A16.5 focuses on Retention and Deletion Concepts. Before continuing,
            make sure you can explain why a user-facing privacy choice still
            needs a clear lifecycle for the data involved.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish notice, consent, transparency, default, and user expectation.",
              "I can recognize when consent is not the right primary privacy solution.",
              "I can evaluate whether an interface matches the real data flow.",
              "I can explain why accessibility and choice symmetry matter.",
              "I can identify when product change makes an old notice or choice stale.",
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
          title="How to Make the Consent and Expectations Assessment Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Start with actual behavior",
                detail:
                  "Document what the system really collects, uses, shares, and retains before reviewing wording.",
              },
              {
                title: "Separate required from optional",
                detail:
                  "Do not pretend required service data is optional, and do not bundle optional uses into the core service.",
              },
              {
                title: "Show expectation context",
                detail:
                  "Explain why the data practice fits—or conflicts with—the user's service context.",
              },
              {
                title: "Show choice quality",
                detail:
                  "Record clarity, specificity, symmetry, accessibility, default, and revocability.",
              },
              {
                title: "Show when consent is not enough",
                detail:
                  "Some cases need minimization, purpose limitation, retention change, or architecture redesign instead.",
              },
              {
                title: "Show change over time",
                detail:
                  "Record triggers such as new suppliers, new purposes, new inference, or longer retention.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the product, data, or business role responsible for aligning the experience with the real system.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.5 will focus on what happens after the current purpose ends: retention, deletion, archival, exceptions, and evidence.",
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
            Privacy experience design should respect users rather than manipulate them
          </h2>
          <p className="mt-3 leading-7">
            Use fictional or synthetic scenarios only. Do not collect real
            consent records, private settings, browsing histories, account
            data, or personal information. Do not design deceptive interfaces,
            coercive choices, hidden tracking, or techniques intended to make
            users share more data than they understand or want to share.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.4 Consent and User Expectations Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for notice, consent, transparency,
            defaults, user expectations, contextual integrity, accessibility,
            optional choice, secondary use, and consent limits. Next, A16.5
            focuses on Retention and Deletion Concepts.
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