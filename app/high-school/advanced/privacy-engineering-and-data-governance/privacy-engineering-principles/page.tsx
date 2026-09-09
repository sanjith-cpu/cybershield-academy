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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/data-classification-and-inventory`;

const objectives = [
  "Explain privacy engineering as a system-design discipline that converts privacy goals into requirements, architecture decisions, controls, evidence, ownership, and lifecycle review.",
  "Identify how data purpose, context, sensitivity, access, sharing, retention, user expectations, and business dependency shape privacy decisions.",
  "Distinguish privacy principles such as minimization, purpose limitation, transparency, user control, security, retention, and accountability without treating any one principle as sufficient by itself.",
  "Evaluate fictional product and architecture choices using privacy risk, evidence quality, uncertainty, business need, usability, and responsible governance.",
  "Build a Privacy Engineering Context Map that becomes the first artifact in the A16 Privacy Engineering Review.",
];

const privacyPrinciples = [
  {
    principle: "Purpose clarity",
    meaning:
      "The organization should be able to explain why each important category of data is collected, created, inferred, used, shared, or retained.",
    designQuestion:
      "What legitimate product or business purpose does this data support?",
    weakPattern:
      "Collecting information because it might become useful later.",
    strongerPattern:
      "Linking each important data element to a current, documented purpose and owner.",
  },
  {
    principle: "Data minimization",
    meaning:
      "Systems should avoid collecting, exposing, sharing, or retaining more data than reasonably necessary for the intended purpose.",
    designQuestion:
      "Could the system achieve the same outcome with less data, lower precision, fewer recipients, or shorter retention?",
    weakPattern:
      "Requesting every available profile field for a narrow feature.",
    strongerPattern:
      "Collecting only the fields the feature actually needs.",
  },
  {
    principle: "Purpose limitation",
    meaning:
      "Data collected for one reason should not silently expand into unrelated uses without review.",
    designQuestion:
      "Is this new use consistent with the original purpose and user context?",
    weakPattern:
      "Reusing support-case data for unrelated analytics without a new review.",
    strongerPattern:
      "Separating approved support use from proposed secondary analytics use.",
  },
  {
    principle: "Transparency",
    meaning:
      "People should be able to understand important data practices that affect them.",
    designQuestion:
      "Would a reasonable user understand what information is used and why?",
    weakPattern:
      "Hiding important data use inside vague or confusing language.",
    strongerPattern:
      "Providing clear explanations near the point where a meaningful choice or expectation exists.",
  },
  {
    principle: "User expectations",
    meaning:
      "System behavior should consider the context in which people provided information and what they reasonably expect to happen next.",
    designQuestion:
      "Would this use feel surprising in the original context?",
    weakPattern:
      "Turning a temporary support interaction into a long-term unrelated profile.",
    strongerPattern:
      "Keeping uses aligned with the service context unless a separate approved purpose exists.",
  },
  {
    principle: "Security and access control",
    meaning:
      "Privacy depends partly on limiting who can access data and protecting it during storage, use, and transfer.",
    designQuestion:
      "Which roles, systems, suppliers, and services truly need access?",
    weakPattern:
      "Broad internal access because the data is already inside the organization.",
    strongerPattern:
      "Role-appropriate, purpose-aligned access with review and evidence.",
  },
  {
    principle: "Lifecycle and retention",
    meaning:
      "Privacy engineering considers what happens to data after the immediate purpose ends.",
    designQuestion:
      "How long is the data needed, and what happens at the end of that period?",
    weakPattern:
      "Keeping temporary data indefinitely because storage is inexpensive.",
    strongerPattern:
      "Using a documented retention period, deletion workflow, exception process, and evidence.",
  },
  {
    principle: "Accountability",
    meaning:
      "Important data decisions should have named owners, evidence, review, and escalation.",
    designQuestion:
      "Who owns the decision, who operates the control, and who verifies the evidence?",
    weakPattern:
      "Treating privacy as the responsibility of one advisory team.",
    strongerPattern:
      "Separating data ownership, system ownership, privacy review, security controls, and business approval.",
  },
];

const privacyEngineeringLayers = [
  {
    layer: "Business and product goals",
    description:
      "Start with the service objective. Privacy engineering should understand what the organization is trying to accomplish before deciding what data is necessary.",
    example:
      "A support portal needs enough information to route a request to the correct service team.",
  },
  {
    layer: "Data and purpose",
    description:
      "Identify data categories, sensitivity, origin, purpose, owner, access, sharing, and retention.",
    example:
      "Contact preference is needed for service updates; unrelated demographic fields may not be.",
  },
  {
    layer: "User and context",
    description:
      "Consider reasonable expectations, transparency, choice, accessibility, and whether a secondary use changes the context.",
    example:
      "A user who gives a phone number for an appointment may not expect unrelated marketing use.",
  },
  {
    layer: "Architecture and controls",
    description:
      "Translate privacy goals into system boundaries, access controls, separation, minimization, retention, deletion, and logging requirements.",
    example:
      "Temporary research exports are isolated, time-bounded, and automatically deleted.",
  },
  {
    layer: "Evidence and lifecycle",
    description:
      "Decide what proof shows the requirement is operating and what change should trigger reassessment.",
    example:
      "Current deletion-job evidence, exception queue, and project-closeout records.",
  },
  {
    layer: "Governance and decision",
    description:
      "Assign owners, compare tradeoffs, record residual privacy risk, and communicate the decision.",
    example:
      "The Product Owner approves removal of three unused fields in the next release.",
  },
];

const privacyRiskDimensions = [
  {
    dimension: "Collection",
    question:
      "Are we collecting more information than the purpose requires?",
    example:
      "A scheduling feature requests full profile history when it only needs name, availability, and contact channel.",
  },
  {
    dimension: "Use",
    question:
      "Is the data being used for purposes beyond the context in which it was obtained?",
    example:
      "Support-case notes are proposed for unrelated analytics without a separate review.",
  },
  {
    dimension: "Access",
    question:
      "Can more people, systems, or suppliers access the data than necessary?",
    example:
      "Broad internal access exists even though only two service teams need the records.",
  },
  {
    dimension: "Sharing",
    question:
      "Is data sent to third parties or internal teams that do not need the full detail?",
    example:
      "A partner integration receives complete profile records instead of only scheduling fields.",
  },
  {
    dimension: "Retention",
    question:
      "Is data kept after the original operational purpose has ended?",
    example:
      "Temporary project exports remain available months after closeout.",
  },
  {
    dimension: "Inference",
    question:
      "Can combined or derived data reveal more than the original fields alone?",
    example:
      "Engagement indicators create a sensitive behavioral profile even though each source event seems ordinary.",
  },
  {
    dimension: "Expectation",
    question:
      "Would the system behavior surprise a reasonable user in context?",
    example:
      "A support request is reused to create a long-term interest profile.",
  },
  {
    dimension: "Control failure",
    question:
      "What happens if a privacy control is missing, stale, or only partially effective?",
    example:
      "Deletion policy exists, but current evidence does not show temporary workspaces are actually removed.",
  },
];

const requirementsExamples = [
  {
    goal:
      "Only data necessary for appointment scheduling should be collected.",
    requirement:
      "The scheduling form may collect name, approved contact method, service category, and time preference; optional free-text fields must be justified separately.",
    evidence:
      "Current form schema, product requirement, field-purpose register, release review.",
  },
  {
    goal:
      "Temporary research exports should not persist indefinitely.",
    requirement:
      "Project exports must expire within the approved retention period unless a documented exception is active.",
    evidence:
      "Retention configuration, deletion-job record, exception list, closeout review.",
  },
  {
    goal:
      "Partner integrations should receive only approved data.",
    requirement:
      "The partner scheduling integration may receive only fields listed in the approved interface scope.",
    evidence:
      "Current integration schema, purpose mapping, partner review, change history.",
  },
  {
    goal:
      "Users should understand optional notifications.",
    requirement:
      "Optional notification channels must be clearly described and remain disabled until the user makes a meaningful choice.",
    evidence:
      "Current interface design, product requirement, user-choice record, accessibility review.",
  },
  {
    goal:
      "Sensitive support records should have limited internal access.",
    requirement:
      "Support records may be accessed only by approved service roles with a documented business need.",
    evidence:
      "Role definition, current access review, exception record, owner approval.",
  },
  {
    goal:
      "Privacy decisions should be reassessed after material change.",
    requirement:
      "A privacy review must reopen after new sensitive data, new supplier sharing, major purpose change, retention expansion, or significant architecture change.",
    evidence:
      "Change-review procedure, architecture history, privacy-review log, product-release record.",
  },
];

const contextRecords = [
  {
    id: "CTX-P01",
    service:
      "Student Support Portal",
    purpose:
      "Route service requests and coordinate approved support.",
    data:
      "Profile details, service request, contact preference, support notes",
    people:
      "Students and authorized support staff",
    expectation:
      "Information is used to provide the requested support service.",
    concern:
      "Several profile fields are collected but unused by the active workflow.",
    owner:
      "Student Services Product Owner",
    controls:
      "Role-based access, form schema review, service logging, approved retention",
    evidence:
      "Current form inventory and product requirements",
    confidence:
      "High",
    state:
      "Treat",
    next:
      "Remove unused fields or document a current purpose before the next release.",
  },
  {
    id: "CTX-P02",
    service:
      "Learning Analytics Workspace",
    purpose:
      "Support aggregate program improvement and approved educational analysis.",
    data:
      "Course activity, assignment trends, derived engagement indicators",
    people:
      "Students represented in the data and approved analytics staff",
    expectation:
      "Analysis supports program improvement rather than unrelated profiling.",
    concern:
      "Derived indicators and temporary workspaces have inconsistent retention documentation.",
    owner:
      "Learning Analytics Owner",
    controls:
      "Restricted access, approved project scope, aggregated reporting, temporary workspaces",
    evidence:
      "Current project register; partial retention evidence",
    confidence:
      "Moderate",
    state:
      "Conditional",
    next:
      "Define retention and project-closeout evidence before expanding analytics scope.",
  },
  {
    id: "CTX-P03",
    service:
      "Partner Scheduling Integration",
    purpose:
      "Enable appointment scheduling with an approved external partner.",
    data:
      "Scheduling details and limited profile information",
    people:
      "Students using the scheduling service",
    expectation:
      "Only information needed for scheduling is shared.",
    concern:
      "The partner data scope expanded over time without a recent purpose review.",
    owner:
      "Integration Product Owner",
    controls:
      "Approved schema, encrypted transport, partner review, certificate lifecycle",
    evidence:
      "Current integration schema; older purpose record",
    confidence:
      "Moderate",
    state:
      "Treat",
    next:
      "Revalidate every shared field against the current scheduling purpose.",
  },
  {
    id: "CTX-P04",
    service:
      "Notification Preferences",
    purpose:
      "Deliver requested service updates through selected channels.",
    data:
      "Email, mobile notification preference, communication history",
    people:
      "Users who configure communication preferences",
    expectation:
      "Optional communication choices are understandable and controllable.",
    concern:
      "Preference history retention is undefined.",
    owner:
      "Communications Product Owner",
    controls:
      "Clear settings, optional channels, access restriction",
    evidence:
      "Current settings flow and preference database design",
    confidence:
      "High",
    state:
      "Monitor / Treat",
    next:
      "Define a retention rule for obsolete preference history.",
  },
  {
    id: "CTX-P05",
    service:
      "Support Quality Dashboard",
    purpose:
      "Measure response quality, service demand, and staffing needs.",
    data:
      "Aggregated operational metrics and de-identified trends",
    people:
      "Service users represented only in aggregate outputs",
    expectation:
      "Operational reporting should not expose individual support histories.",
    concern:
      "Low if aggregation and source-level export controls remain effective.",
    owner:
      "Operations Analytics Owner",
    controls:
      "Aggregation, restricted raw exports, role-based dashboard access",
    evidence:
      "Current dashboard design and export-control review",
    confidence:
      "High",
    state:
      "Monitor",
    next:
      "Reassess after any move toward individual-level reporting.",
  },
  {
    id: "CTX-P06",
    service:
      "Temporary Research Export",
    purpose:
      "Support a time-bounded internal research exercise using approved data.",
    data:
      "De-identified sample with project-specific metadata",
    people:
      "Individuals represented in source data but not directly identified in the approved export",
    expectation:
      "Temporary copies end when the approved project ends.",
    concern:
      "Closeout must prove deletion of temporary copies and derived workspaces.",
    owner:
      "Research Program Owner",
    controls:
      "De-identification, restricted workspace, project expiry, deletion requirement",
    evidence:
      "Current project approval; closeout evidence not yet due",
    confidence:
      "High until project closeout",
    state:
      "Conditional",
    next:
      "Require deletion evidence at project closure.",
  },
];

const dashboardMetrics = [
  {
    label: "Privacy contexts",
    value: "6",
    note: "Support, analytics, partner, notifications, dashboard, and research workflows",
  },
  {
    label: "Treat / Conditional",
    value: "4",
    note: "Unused fields, retention, partner scope, and temporary research require active decisions",
  },
  {
    label: "High confidence",
    value: "4",
    note: "Current product or architecture evidence supports the main conclusion",
  },
  {
    label: "Purpose reviews due",
    value: "2",
    note: "Support-profile collection and partner data sharing need refreshed purpose validation",
  },
];

const logs = [
  "[08:12] CTX-P01 service=SUPPORT_PORTAL purpose=CURRENT unused_fields=3 state=TREAT",
  "[08:34] CTX-P02 service=LEARNING_ANALYTICS retention_evidence=PARTIAL state=CONDITIONAL",
  "[08:56] CTX-P03 service=PARTNER_SCHEDULING purpose_record=STALE shared_scope=EXPANDED state=TREAT",
  "[09:18] CTX-P04 service=NOTIFICATION_PREF retention=UNDEFINED state=MONITOR_TREAT",
  "[09:40] CTX-P05 service=QUALITY_DASHBOARD aggregation=STRONG state=MONITOR",
  "[10:02] CTX-P06 service=RESEARCH_EXPORT closeout=FUTURE deletion_evidence=PENDING state=CONDITIONAL",
];

const antiPatterns = [
  {
    title: "Privacy review starts after launch",
    problem:
      "The team waits until the system is complete before asking what data was necessary or what users would expect.",
    better:
      "Include privacy requirements while architecture, fields, data flows, and defaults are still easy to change.",
  },
  {
    title: "Every data field gets the same treatment",
    problem:
      "The system ignores differences in purpose, sensitivity, context, access, and retention.",
    better:
      "Classify data and link important fields to purpose, owner, access, and lifecycle decisions.",
  },
  {
    title: "Consent used as permission for unlimited use",
    problem:
      "One user choice is treated as approval for unrelated future uses.",
    better:
      "Keep use connected to purpose, context, transparency, minimization, and meaningful user expectations.",
  },
  {
    title: "Encryption treated as complete privacy engineering",
    problem:
      "The data is protected from some unauthorized access, but collection, sharing, retention, or purpose problems remain.",
    better:
      "Use security controls alongside minimization, purpose, lifecycle, transparency, and governance.",
  },
  {
    title: "No owner for secondary data use",
    problem:
      "Teams add analytics or integrations without a clear accountable business decision.",
    better:
      "Require an owner, purpose, evidence, and review for material new uses.",
  },
  {
    title: "Temporary means harmless",
    problem:
      "Temporary exports, workspaces, logs, and copies become long-lived because nobody owns deletion.",
    better:
      "Give temporary data an expiry, deletion method, evidence, and exception process.",
  },
  {
    title: "Privacy risk equals legal risk only",
    problem:
      "Teams ignore user trust, surprise, operational misuse, access, retention, or data-context harm unless a legal rule is mentioned.",
    better:
      "Evaluate privacy as a broader system and governance risk while using qualified legal review when required.",
  },
  {
    title: "Evidence is assumed rather than defined",
    problem:
      "A requirement exists, but nobody knows what proves the requirement operates.",
    better:
      "Define evidence while designing the control or lifecycle requirement.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Remove the three unused profile fields unless a current, documented purpose and accountable owner can justify them.",
    outcome:
      "Best. Minimization begins with actual need, not the possibility that data might become useful later.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep the fields because storage is inexpensive and future features might use them.",
    outcome:
      "Risky. Future possibility is not the same as a current legitimate purpose.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the fields but hide them from the user interface.",
    outcome:
      "Risky. Hidden collection is still collection and does not solve the purpose problem.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Pause the expanded partner data scope until each shared field is mapped to the current scheduling purpose and approved.",
    outcome:
      "Best. Purpose limitation and minimization should be revalidated when sharing scope expands.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Continue sharing because the partner already has a contract.",
    outcome:
      "Risky. Contractual relationship does not prove every new field is necessary for the current purpose.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Continue sharing because the transfer is encrypted.",
    outcome:
      "Risky. Encryption does not answer whether the data should be shared at all.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is privacy engineering?",
    choices: [
      "A system-design discipline that turns privacy goals into requirements, architecture decisions, controls, evidence, ownership, and lifecycle review.",
      "A legal document written after launch.",
      "A method for collecting as much data as possible.",
      "A synonym for encryption.",
    ],
    answer: 0,
    explanation:
      "Privacy engineering integrates privacy into the way systems and data practices are designed and governed.",
  },
  {
    question:
      "What does data minimization ask?",
    choices: [
      "Whether the same legitimate outcome can be achieved with less data, less precision, less sharing, or shorter retention.",
      "Whether storage is inexpensive.",
      "Whether the data is encrypted.",
      "Whether users can be given more fields to fill in.",
    ],
    answer: 0,
    explanation:
      "Minimization focuses on reducing unnecessary data and exposure while preserving the legitimate purpose.",
  },
  {
    question:
      "What is purpose limitation?",
    choices: [
      "Keeping data use aligned with the purpose and context for which it was collected unless a new use is separately reviewed.",
      "Limiting the number of employees in a company.",
      "Deleting all data immediately.",
      "Using one consent choice for unlimited future uses.",
    ],
    answer: 0,
    explanation:
      "Purpose limitation prevents silent expansion from one context into unrelated uses.",
  },
  {
    question:
      "Which statement about encryption is strongest?",
    choices: [
      "Encryption is an important security control, but it does not solve unnecessary collection, excessive sharing, misuse, or indefinite retention.",
      "Encryption removes all privacy risk.",
      "Encrypted data never needs retention rules.",
      "Encryption replaces ownership.",
    ],
    answer: 0,
    explanation:
      "Security controls support privacy, but privacy engineering also addresses purpose, context, lifecycle, and governance.",
  },
  {
    question:
      "Why should evidence be defined during design?",
    choices: [
      "So the organization knows what will prove that privacy requirements and lifecycle controls actually operate.",
      "So evidence can replace system requirements.",
      "So no owners are needed.",
      "So all reviews can be skipped later.",
    ],
    answer: 0,
    explanation:
      "A requirement is stronger when the team knows what evidence will demonstrate that it operates in practice.",
  },
  {
    question:
      "What should happen when a partner integration begins receiving more data than before?",
    choices: [
      "Reassess purpose, necessity, scope, ownership, evidence, and user/context expectations before treating the expansion as normal.",
      "Continue automatically if the connection is encrypted.",
      "Continue automatically if a contract exists.",
      "Ignore the change because it is only a technical integration.",
    ],
    answer: 0,
    explanation:
      "Expanded data sharing is a material privacy change and should trigger review.",
  },
  {
    question:
      "Who owns privacy risk?",
    choices: [
      "Ownership depends on the business and data decision; privacy teams may advise, but accountable product, data, or business owners often own the underlying consequence.",
      "Only the privacy team.",
      "Only the security team.",
      "Nobody if the data is internal.",
    ],
    answer: 0,
    explanation:
      "Privacy is cross-functional, and accountable business or data ownership should remain clear.",
  },
];

const checklistItems = [
  "The business service is named.",
  "The legitimate purpose is documented.",
  "Important data categories are identified.",
  "Sensitivity and context are considered.",
  "People affected by the data practice are identified.",
  "Reasonable user expectations are considered.",
  "Collection is limited to what the purpose requires.",
  "Secondary uses are reviewed separately.",
  "Access is limited to legitimate roles and systems.",
  "Sharing is limited to necessary recipients and fields.",
  "Retention and deletion are considered during design.",
  "Temporary data has an expiry and evidence plan.",
  "Security controls support privacy but do not replace minimization or purpose review.",
  "Evidence is defined for important privacy requirements.",
  "Data owner or business owner is named.",
  "System or product owner is named.",
  "Control and evidence ownership are clear where useful.",
  "Material change triggers are defined.",
  "Residual privacy risk and uncertainty are documented.",
  "All examples use fictional or synthetic data only.",
];

const takeaways = [
  "Privacy engineering makes privacy part of system design, not an afterthought.",
  "A strong privacy decision starts with business purpose and actual data need.",
  "Minimization can reduce collection, precision, access, sharing, and retention.",
  "Purpose limitation prevents silent expansion into unrelated uses.",
  "Transparency and user expectations matter alongside technical controls.",
  "Encryption supports privacy but does not solve unnecessary collection or use.",
  "Retention and deletion should be designed with evidence and ownership.",
  "Privacy risk includes collection, use, access, sharing, inference, retention, expectations, and control failure.",
  "Privacy teams advise, but accountable product, data, and business owners remain essential.",
  "The Privacy Engineering Context Map prepares you for A16.2 Data Classification and Inventory.",
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

export default function PrivacyEngineeringPrinciplesPage() {
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
              A16.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy Engineering Principles
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy engineering asks how a system can accomplish a legitimate
            business goal while reducing unnecessary collection, exposure,
            sharing, retention, surprise, and misuse. It connects product
            purpose to data decisions, architecture, controls, evidence,
            ownership, and lifecycle governance.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All examples use fictional or synthetic data. This lesson does not
            involve real personal records, surveillance, deanonymization, hidden
            tracking, or unauthorized access.
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
          lessonTitle="Privacy Engineering Principles"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.1 Entry Readiness"
          items={[
            "I can explain why systems collect and use data.",
            "I understand that security and privacy overlap but are not identical.",
            "I can distinguish a business purpose from a technical implementation detail.",
            "I will use only fictional or synthetic data in every activity.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Privacy Engineering Begins Before the First Database Table"
        >
          <p className="leading-8">
            The most effective privacy decisions happen while a team is still
            choosing what data to collect, which features need it, which systems
            receive it, how long it will exist, and what people will reasonably
            expect. Waiting until launch often turns privacy into an expensive
            cleanup project.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Privacy engineering asks: what should the system do with data, not merely how can the system protect the data it already collected?
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
          eyebrow="Core Principles"
          title="Eight Privacy Engineering Principles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {privacyPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.principle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Design question: {item.designQuestion}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak pattern: {item.weakPattern}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Stronger pattern: {item.strongerPattern}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="System Thinking"
          title="Privacy Engineering Connects Six Layers"
        >
          <div className="grid gap-5">
            {privacyEngineeringLayers.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.layer}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Example: {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Privacy Risk"
          title="Where Privacy Risk Appears"
        >
          <p className="leading-8">
            Privacy risk does not begin and end with a data breach. A system can
            be technically secure and still create privacy concerns through
            unnecessary collection, unexpected secondary use, excessive
            sharing, long retention, sensitive inference, or unclear
            accountability.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {privacyRiskDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="From Principle to Requirement"
          title="Good Privacy Requirements Are Specific Enough to Review"
        >
          <p className="leading-8">
            “Protect privacy” is a goal, not an implementable requirement. A
            privacy engineer helps convert the goal into a statement that
            product, engineering, governance, and reviewers can understand and
            verify.
          </p>

          <div className="mt-6 grid gap-5">
            {requirementsExamples.map((item) => (
              <article
                key={item.goal}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Privacy goal
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.goal}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Engineering requirement
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.requirement}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Security and Privacy"
          title="Related Goals, Different Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-black text-cyan-50">
                Security question
              </h3>
              <p className="mt-3 leading-8 text-cyan-100">
                Can unauthorized people or systems access, alter, disrupt, or
                destroy this information or service?
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-6">
              <h3 className="text-xl font-black text-purple-50">
                Privacy question
              </h3>
              <p className="mt-3 leading-8 text-purple-100">
                Should this data be collected, used, shared, inferred, retained,
                or connected to this purpose in the first place?
              </p>
            </article>
          </div>

          <p className="mt-6 leading-8">
            The strongest systems answer both. Encryption can protect a dataset
            from unauthorized access while minimization asks whether the system
            needed the entire dataset at all.
          </p>
        </Section>

        <Section
          eyebrow="Fictional Context Map"
          title="Six Northbridge Privacy Engineering Contexts"
        >
          <div className="grid gap-5">
            {contextRecords.map((item) => (
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
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Data", item.data],
                    ["People affected", item.people],
                    ["Expected context", item.expectation],
                    ["Privacy concern", item.concern],
                    ["Accountable owner", item.owner],
                    ["Current controls", item.controls],
                    ["Evidence", item.evidence],
                    ["Evidence confidence", item.confidence],
                    ["Next action", item.next],
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
          title="Northbridge Privacy Engineering Dashboard"
          subtitle="Fictional purpose, minimization, retention, sharing, and evidence summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Data Scope Expanded Without a Fresh Purpose Review"
          severity="High"
          time="08:56"
          source="Fictional Privacy Engineering Review"
          details="CTX-P03 shows that the partner scheduling integration now shares more profile fields than the older purpose record described. The current transport control is strong, but necessity and purpose for the expanded fields have not been revalidated."
          recommendation="Keep the context in Treat. Revalidate each shared field against the current scheduling purpose before treating the expanded scope as normal."
        />

        <Section
          eyebrow="Privacy by Design"
          title="Design Choices Can Remove Privacy Risk Before Controls Are Needed"
        >
          <p className="leading-8">
            Privacy by design is not one feature. It is the practice of making
            system choices that reduce unnecessary privacy risk before launch.
            Sometimes the strongest control is not “protect the field better”
            but “do not collect the field.”
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Minimize at collection",
                detail:
                  "Remove fields that are not necessary for the approved purpose.",
              },
              {
                title: "Separate uses",
                detail:
                  "Keep support operations, analytics, research, and partner sharing as distinct purposes with distinct review.",
              },
              {
                title: "Limit defaults",
                detail:
                  "Use privacy-respecting defaults for optional data uses and communications.",
              },
              {
                title: "Reduce precision",
                detail:
                  "Use aggregated or lower-precision information when detailed individual data is not required.",
              },
              {
                title: "Restrict access",
                detail:
                  "Give only the roles, systems, and suppliers that need data access to the minimum necessary scope.",
              },
              {
                title: "Design deletion",
                detail:
                  "Build retention and deletion behavior into the lifecycle instead of relying on manual cleanup later.",
              },
              {
                title: "Preserve evidence",
                detail:
                  "Design logs, review records, lifecycle states, and ownership so teams can prove privacy requirements operate.",
              },
              {
                title: "Reopen on change",
                detail:
                  "Trigger review when data, purpose, suppliers, access, retention, or architecture materially changes.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Privacy Engineering Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Unused Support Profile Fields"
          question="What is the strongest current decision for CTX-P01?"
          evidence={[
            "The support portal collects three profile fields that the active workflow does not use.",
            "No current product requirement maps those fields to a service purpose.",
            "The fields are protected by normal access controls.",
            "The Product Owner says a future feature might use them someday.",
          ]}
          options={[
            "Remove the unused fields unless a current documented purpose and accountable owner can justify them.",
            "Keep them because access controls are strong.",
            "Keep them because future use is possible.",
            "Hide the fields from the interface but continue collecting them.",
          ]}
          bestAnswer={0}
          explanation="Security controls can reduce exposure, but they do not create a legitimate purpose. Minimization supports removing data that the current service does not need."
        />

        <Section
          eyebrow="Common Privacy Engineering Mistakes"
          title="Eight Ways Privacy Design Becomes Weak"
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
          title="Scenario Decision Lab 1 — Unused Profile Fields"
          scenario="A support portal collects three profile fields that are not used by the current support workflow. The team argues that the fields could be useful for a future feature."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Partner Data Scope Expansion"
          scenario="A scheduling partner originally received four approved fields. The integration now sends eight fields, and the older purpose record has not been updated."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Privacy Engineering Context Map"
        >
          <p className="leading-8">
            Create a fictional map of services, data, purposes, users, controls,
            evidence, ownership, and privacy concerns. The goal is to understand
            context before building the detailed data inventory in A16.2.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least fifteen fictional privacy-context records.",
              "Give every record a stable CTX-P ID.",
              "Name the business service or feature.",
              "Write the legitimate purpose.",
              "List the major data categories.",
              "Identify the people or groups represented by the data.",
              "Record reasonable user expectations.",
              "Record data sensitivity or contextual sensitivity.",
              "Record important collection points.",
              "Record important internal access.",
              "Record important sharing or supplier dependencies.",
              "Record retention or lifecycle expectations.",
              "Record current privacy controls.",
              "Record evidence sources.",
              "Rate evidence confidence.",
              "Name the data or business owner.",
              "Name the system or product owner.",
              "Record the privacy concern.",
              "Choose a state such as Monitor, Treat, Conditional, Accepted Risk, Blocked, or Closed.",
              "Write one next action.",
              "Record at least one change trigger.",
              "Include at least three minimization concerns.",
              "Include at least three purpose-limitation concerns.",
              "Include at least three retention concerns.",
              "Include at least two supplier-sharing concerns.",
              "Include at least two contexts with Low or Moderate evidence confidence.",
              "Include at least two contexts where current controls are strong but purpose or retention still needs review.",
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
              Use fictional or synthetic data only. Do not use real student,
              employee, medical, financial, account, location, or other private
              records. Do not infer identities, deanonymize datasets, access
              private systems, or collect hidden tracking information.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Scheduling Scope"
          question="What is the strongest current decision for CTX-P03?"
          evidence={[
            "The integration is encrypted and certificate lifecycle is monitored.",
            "The partner currently receives eight fields.",
            "The older approved purpose record described four fields.",
            "No recent review explains why the additional four fields are necessary for scheduling.",
          ]}
          options={[
            "Treat — revalidate every shared field against the current purpose before accepting the expanded scope.",
            "Monitor — encryption is enough to justify the current scope.",
            "Closed — the partner relationship is already approved.",
            "Accepted Risk automatically — a contract exists.",
          ]}
          bestAnswer={0}
          explanation="Security and contractual controls matter, but they do not answer whether the additional data is necessary for the current scheduling purpose."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Privacy Engineering Review Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for how new products,
            features, analytics uses, suppliers, and major data changes receive
            privacy engineering review.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Business-purpose statement",
              "Data categories",
              "Sensitivity and context",
              "People affected",
              "Collection necessity",
              "Secondary-use review",
              "Access scope",
              "Supplier sharing",
              "User expectations",
              "Transparency requirements",
              "Consent or choice where relevant",
              "Retention and deletion",
              "Security controls",
              "Evidence requirements",
              "Data owner",
              "Product owner",
              "Privacy review role",
              "Change triggers",
              "Residual privacy risk",
              "Leadership escalation",
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
            The strongest standard should guide judgment without pretending
            every privacy question can be solved by one rigid checklist.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.1 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.1 Mini Quiz: Privacy Engineering Principles"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Privacy Engineering Context Map"
          prompt="Create the first artifact for your A16 Privacy Engineering Review: a fictional Privacy Engineering Context Map with at least fifteen records. Include CTX-P ID, service/feature, legitimate purpose, data categories, people affected, user expectations, sensitivity/context, collection, access, sharing, supplier dependency, retention/lifecycle, privacy controls, evidence, evidence confidence, data/business owner, system/product owner, privacy concern, decision state, next action, and change trigger."
          tips={[
            "Start with purpose, not technology.",
            "Use synthetic data only.",
            "Keep security and privacy questions distinct.",
            "Record where strong controls do not solve purpose or retention problems.",
            "Make ownership explicit.",
            "Use the context map as the foundation for A16.2.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.2?"
        >
          <p className="leading-8">
            A16.2 focuses on Data Classification and Inventory. Before
            continuing, make sure you can explain why knowing the purpose,
            context, ownership, and lifecycle of data matters before assigning a
            classification label.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain privacy engineering in system-design terms.",
              "I can distinguish minimization from security controls.",
              "I can explain purpose limitation and secondary-use review.",
              "I can identify privacy risk beyond data breaches.",
              "I can connect a privacy principle to a specific requirement and evidence source.",
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
          title="How to Make the Privacy Engineering Context Map Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Name the purpose clearly",
                detail:
                  "Avoid vague statements such as “business use.” Explain the actual service outcome.",
              },
              {
                title: "Group data meaningfully",
                detail:
                  "Use categories that help reviewers understand sensitivity, purpose, access, sharing, and retention.",
              },
              {
                title: "Show the people affected",
                detail:
                  "Privacy decisions should not become abstract data diagrams with no connection to people or context.",
              },
              {
                title: "Separate controls from purpose",
                detail:
                  "Strong encryption or access control does not prove that collection or sharing is necessary.",
              },
              {
                title: "Show evidence confidence",
                detail:
                  "Use High, Moderate, Low, or Unknown when the current evidence does not support equal confidence.",
              },
              {
                title: "Show lifecycle",
                detail:
                  "Record what should happen when the original purpose ends or the system changes.",
              },
              {
                title: "Show ownership",
                detail:
                  "Readers should know who owns the data decision and who owns the product or system.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.2 will turn these contexts into a detailed Data Classification and Inventory Register.",
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
            Privacy engineering protects people and data without investigating real individuals
          </h2>
          <p className="mt-3 leading-7">
            Use fictional or synthetic data only. Do not collect, infer,
            deanonymize, expose, track, or investigate real people. Do not
            access private accounts, confidential datasets, internal systems,
            or restricted organizational records. This lesson is defensive,
            educational, and provider-neutral.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.1 Privacy Engineering Principles Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a foundation for purpose clarity, minimization,
            purpose limitation, user expectations, lifecycle, privacy risk,
            evidence, ownership, and privacy-by-design thinking. Next, A16.2
            focuses on Data Classification and Inventory.
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