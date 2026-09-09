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
const previousLesson = `${modulePath}/privacy-engineering-principles`;
const nextLesson = `${modulePath}/data-minimization-and-purpose-limitation`;

const objectives = [
  "Explain why data classification and inventory are foundational to privacy engineering, security architecture, retention, access control, supplier review, and governance.",
  "Classify fictional data using sensitivity, context, business impact, identifiability, inference risk, legal or policy obligations, and operational use rather than relying on labels alone.",
  "Build data inventory records that connect data element, source, purpose, owner, system, access, sharing, supplier dependency, retention, deletion, and evidence.",
  "Evaluate incomplete, duplicated, stale, overbroad, or weakly owned data inventories and identify where uncertainty should remain visible.",
  "Build a Data Classification and Inventory Register that becomes the second artifact in the A16 Privacy Engineering Review.",
];

const classificationLevels = [
  {
    level: "Public",
    meaning:
      "Information intentionally approved for public release.",
    examples:
      "Published course catalog, public event schedule, approved public contact page.",
    decision:
      "Still protect integrity and availability, but confidentiality expectations are low.",
    caution:
      "A field is not Public merely because it can be found somewhere online.",
  },
  {
    level: "Internal",
    meaning:
      "Information intended for ordinary internal business use but not public distribution.",
    examples:
      "Internal project notes, non-sensitive operating procedures, internal service metrics.",
    decision:
      "Limit access to legitimate internal roles and keep context in mind.",
    caution:
      "Internal data can become sensitive when combined with other information.",
  },
  {
    level: "Confidential",
    meaning:
      "Information whose unauthorized disclosure could create meaningful harm, operational impact, trust loss, or privacy concern.",
    examples:
      "Support-case details, employee contact records, internal incident summaries, partner business records.",
    decision:
      "Use stronger access, handling, sharing, logging, and retention controls.",
    caution:
      "Context and combination may raise the effective sensitivity above the label on a single field.",
  },
  {
    level: "Sensitive",
    meaning:
      "Information requiring heightened protection because of privacy, business, regulatory, safety, trust, or impact concerns.",
    examples:
      "Authentication-related records, highly sensitive personal information, detailed behavioral profiles, protected case information.",
    decision:
      "Apply strict purpose, access, minimization, sharing, retention, and evidence expectations.",
    caution:
      "Do not use real sensitive records in this course; examples remain synthetic.",
  },
  {
    level: "Restricted",
    meaning:
      "Information limited to a very small authorized audience because misuse or disclosure could cause severe impact.",
    examples:
      "Fictional secret material, highly restricted investigation data, privileged governance records.",
    decision:
      "Use the narrowest practical access and strongest lifecycle governance.",
    caution:
      "The lesson teaches classification concepts only and does not involve real restricted organizational data.",
  },
];

const contextFactors = [
  {
    factor: "Identifiability",
    question:
      "Does the data directly identify a person, device, account, household, organization, or unique record?",
    example:
      "A student ID is more directly identifying than an aggregate course completion percentage.",
  },
  {
    factor: "Linkability",
    question:
      "Can the data be combined with other records to identify or profile someone?",
    example:
      "A timestamp plus location category and repeated activity pattern may become identifying when combined.",
  },
  {
    factor: "Sensitivity",
    question:
      "Could misuse or disclosure create meaningful privacy, trust, operational, legal, safety, or business harm?",
    example:
      "Support case details can be sensitive even if the record contains no obvious secret.",
  },
  {
    factor: "Purpose",
    question:
      "Why does the organization need the data?",
    example:
      "An email address needed for service notification has a different purpose from an email address used for unrelated marketing.",
  },
  {
    factor: "Audience",
    question:
      "Who should legitimately access the data?",
    example:
      "Aggregated dashboard data may be widely available internally while source-level records remain restricted.",
  },
  {
    factor: "Retention",
    question:
      "How long does the data need to exist?",
    example:
      "A temporary research export may need weeks, while an approved business record may require longer retention.",
  },
  {
    factor: "Inference",
    question:
      "Can derived information reveal something more sensitive than the original fields?",
    example:
      "Repeated interaction patterns may create a behavioral indicator more sensitive than any one event.",
  },
  {
    factor: "Business dependency",
    question:
      "How much does a business service depend on the data being accurate and available?",
    example:
      "Emergency contact data may have moderate confidentiality needs but high integrity and availability importance.",
  },
];

const inventoryFields = [
  {
    field: "Data ID",
    purpose:
      "Provides a stable identifier for the inventory record.",
    example:
      "DATA-201",
  },
  {
    field: "Data element / category",
    purpose:
      "Names the information clearly enough for reviewers to understand it.",
    example:
      "preferred_contact_method",
  },
  {
    field: "Business purpose",
    purpose:
      "Explains why the organization needs the data.",
    example:
      "Deliver requested service updates.",
  },
  {
    field: "Classification",
    purpose:
      "Summarizes handling sensitivity.",
    example:
      "Confidential",
  },
  {
    field: "Context / rationale",
    purpose:
      "Explains why the classification fits the actual use and potential impact.",
    example:
      "The field is not highly sensitive alone, but it links to an identifiable service profile.",
  },
  {
    field: "Source",
    purpose:
      "Shows where the data originates.",
    example:
      "User settings form",
  },
  {
    field: "System / location",
    purpose:
      "Shows where the data is stored or processed.",
    example:
      "Notification preference service",
  },
  {
    field: "Data owner",
    purpose:
      "Names the accountable role for use, sharing, classification, and lifecycle decisions.",
    example:
      "Communications Product Owner",
  },
  {
    field: "Access",
    purpose:
      "Identifies approved roles, systems, or services that can use the data.",
    example:
      "Notification service + approved support role",
  },
  {
    field: "Sharing / supplier",
    purpose:
      "Shows whether the data leaves the originating system or organization.",
    example:
      "Approved messaging provider receives destination and message metadata",
  },
  {
    field: "Retention",
    purpose:
      "States how long the data should remain available.",
    example:
      "Current preference + limited history",
  },
  {
    field: "Deletion / lifecycle",
    purpose:
      "Explains what happens when the purpose ends.",
    example:
      "Obsolete preference history deleted after retention threshold",
  },
  {
    field: "Evidence",
    purpose:
      "Shows what proves the inventory record is current.",
    example:
      "Current schema, data-flow review, owner attestation",
  },
  {
    field: "Freshness",
    purpose:
      "Shows when the inventory was last validated.",
    example:
      "Reviewed this quarter",
  },
];

const dataTypes = [
  {
    type: "Directly identifying data",
    examples:
      "Name, account ID, employee ID, approved contact information.",
    privacyQuestion:
      "Is every identifying field necessary for the current purpose?",
  },
  {
    type: "Contextual personal data",
    examples:
      "Support request, scheduling detail, service preference, case status.",
    privacyQuestion:
      "Could the context itself create sensitivity even if the fields look ordinary?",
  },
  {
    type: "Behavioral / event data",
    examples:
      "Login event, activity timestamp, feature interaction, course activity.",
    privacyQuestion:
      "Could repeated events create a sensitive pattern or profile?",
  },
  {
    type: "Derived / inferred data",
    examples:
      "Engagement indicator, risk category, recommendation score, aggregate pattern.",
    privacyQuestion:
      "What does the derived value reveal that the source fields did not reveal individually?",
  },
  {
    type: "Operational data",
    examples:
      "System status, job result, queue state, service health, configuration metadata.",
    privacyQuestion:
      "Does operational data contain identifiers, sensitive context, or access information?",
  },
  {
    type: "Temporary data",
    examples:
      "Export file, project workspace, staging copy, temporary report.",
    privacyQuestion:
      "Who owns the expiry and deletion evidence?",
  },
  {
    type: "Aggregated data",
    examples:
      "Summary dashboard, count, trend, grouped performance measure.",
    privacyQuestion:
      "Is the aggregation strong enough to avoid revealing individual-level information?",
  },
  {
    type: "Supplier-held data",
    examples:
      "Data processed by a cloud service, messaging provider, partner, or managed service.",
    privacyQuestion:
      "Which fields are shared, for what purpose, and under whose ownership?",
  },
];

const lineageConcepts = [
  {
    stage: "Source",
    question:
      "Where is the data first collected or created?",
    example:
      "User settings form creates notification preference.",
  },
  {
    stage: "Primary use",
    question:
      "Which system uses the data for its main purpose?",
    example:
      "Notification service uses the preference to select delivery channel.",
  },
  {
    stage: "Internal movement",
    question:
      "Which internal systems receive copies or events?",
    example:
      "Support platform receives a preference snapshot for service coordination.",
  },
  {
    stage: "External sharing",
    question:
      "Which supplier or partner receives the data?",
    example:
      "Messaging provider receives destination and approved message payload.",
  },
  {
    stage: "Derived data",
    question:
      "What new information is created from the source data?",
    example:
      "Communication-delivery success rate is aggregated for operations.",
  },
  {
    stage: "Retention / deletion",
    question:
      "Where do copies remain and when do they expire?",
    example:
      "Temporary delivery logs age out under the approved retention rule.",
  },
];

const inventoryQuality = [
  {
    quality: "Current",
    meaning:
      "The record reflects the actual system, schema, owner, purpose, and sharing state.",
    evidence:
      "Recent schema, architecture, owner review, or system inventory.",
  },
  {
    quality: "Complete enough",
    meaning:
      "Important systems, copies, recipients, and lifecycle states are represented.",
    evidence:
      "Data-flow review, supplier list, system inventory, lifecycle record.",
  },
  {
    quality: "Owned",
    meaning:
      "A named role is accountable for data use, classification, sharing, and lifecycle decisions.",
    evidence:
      "Current ownership register or product governance record.",
  },
  {
    quality: "Purpose-linked",
    meaning:
      "Every important data element or category has a legitimate use.",
    evidence:
      "Product requirement, service objective, purpose register.",
  },
  {
    quality: "Traceable",
    meaning:
      "The reviewer can follow the data from source through use, sharing, derived forms, and deletion.",
    evidence:
      "Architecture diagram, lineage record, interface schema, supplier mapping.",
  },
  {
    quality: "Reviewable",
    meaning:
      "Changes to data, purpose, sharing, retention, or ownership trigger reassessment.",
    evidence:
      "Review date, change trigger, release process, owner attestation.",
  },
];

const northbridgeRecords = [
  {
    id: "DATA-201",
    data:
      "support_profile.preferred_contact_method",
    classification:
      "Confidential",
    purpose:
      "Deliver support updates using the user's selected channel.",
    source:
      "Student Support Portal profile form",
    system:
      "Support Profile Service",
    owner:
      "Student Services Product Owner",
    access:
      "Support workflow + notification service",
    sharing:
      "Messaging provider receives channel destination only when message delivery is required",
    retention:
      "Current value plus limited preference history",
    lifecycle:
      "Obsolete history removed after approved retention period",
    evidence:
      "Current form schema + preference-service design",
    freshness:
      "Current quarter",
    concern:
      "Retention for preference history is not yet finalized",
    state:
      "Treat",
  },
  {
    id: "DATA-202",
    data:
      "support_case.case_notes",
    classification:
      "Sensitive",
    purpose:
      "Document approved support work and service coordination.",
    source:
      "Authorized support staff",
    system:
      "Student Support Portal",
    owner:
      "Student Services Data Owner",
    access:
      "Approved support roles only",
    sharing:
      "No routine external sharing",
    retention:
      "Per approved support-record schedule",
    lifecycle:
      "Archived or deleted according to record class and active-case state",
    evidence:
      "Current role model + support workflow + retention standard",
    freshness:
      "Current quarter",
    concern:
      "High contextual sensitivity requires narrow access",
    state:
      "Monitor",
  },
  {
    id: "DATA-203",
    data:
      "analytics.course_activity_events",
    classification:
      "Confidential",
    purpose:
      "Support approved learning analytics and program improvement.",
    source:
      "Learning platform event stream",
    system:
      "Learning Analytics Workspace",
    owner:
      "Learning Analytics Owner",
    access:
      "Approved analytics roles",
    sharing:
      "No routine external sharing in current scope",
    retention:
      "Project-defined retention plus aggregate reporting period",
    lifecycle:
      "Raw event copies expire before long-lived aggregate summaries",
    evidence:
      "Current project register + event schema",
    freshness:
      "Current quarter",
    concern:
      "Retention evidence is inconsistent across temporary workspaces",
    state:
      "Conditional",
  },
  {
    id: "DATA-204",
    data:
      "analytics.engagement_indicator",
    classification:
      "Sensitive",
    purpose:
      "Support approved aggregate program-improvement analysis.",
    source:
      "Derived from course activity events",
    system:
      "Learning Analytics Workspace",
    owner:
      "Learning Analytics Owner",
    access:
      "Restricted analytics roles",
    sharing:
      "Only aggregated outputs approved for broader reporting",
    retention:
      "Aligned to approved analytics project period",
    lifecycle:
      "Derived individual-level indicators removed when project purpose ends",
    evidence:
      "Model definition + project purpose record + workspace inventory",
    freshness:
      "Moderate confidence",
    concern:
      "Derived information may be more sensitive than source events",
    state:
      "Treat",
  },
  {
    id: "DATA-205",
    data:
      "scheduling.partner_profile_subset",
    classification:
      "Confidential",
    purpose:
      "Enable approved partner scheduling workflow.",
    source:
      "Student Support Portal",
    system:
      "Partner Scheduling Integration",
    owner:
      "Integration Product Owner",
    access:
      "Integration service + approved partner service",
    sharing:
      "External scheduling partner",
    retention:
      "Partner-specific operational window",
    lifecycle:
      "Copies follow approved partner data-handling rules",
    evidence:
      "Current interface schema; purpose record is older",
    freshness:
      "Moderate confidence",
    concern:
      "Current field scope exceeds the older documented purpose",
    state:
      "Treat",
  },
  {
    id: "DATA-206",
    data:
      "research.temp_export",
    classification:
      "Confidential",
    purpose:
      "Support a time-bounded internal research project.",
    source:
      "Approved de-identified source dataset",
    system:
      "Temporary Research Workspace",
    owner:
      "Research Program Owner",
    access:
      "Approved project team",
    sharing:
      "No external sharing",
    retention:
      "Project duration + short closeout window",
    lifecycle:
      "Delete temporary export and derived workspace at project close",
    evidence:
      "Project approval + workspace register + future closeout evidence",
    freshness:
      "Current",
    concern:
      "Deletion evidence is required at closeout",
    state:
      "Conditional",
  },
  {
    id: "DATA-207",
    data:
      "quality_dashboard.aggregate_response_time",
    classification:
      "Internal",
    purpose:
      "Measure service demand and response performance.",
    source:
      "Aggregated support operational metrics",
    system:
      "Support Quality Dashboard",
    owner:
      "Operations Analytics Owner",
    access:
      "Approved internal operations users",
    sharing:
      "No external sharing",
    retention:
      "Trend-reporting period",
    lifecycle:
      "Aggregate history retained while operationally useful",
    evidence:
      "Current dashboard design + aggregation review",
    freshness:
      "Current",
    concern:
      "Low if aggregation remains strong and source exports stay restricted",
    state:
      "Monitor",
  },
];

const dashboardMetrics = [
  {
    label: "Inventory records",
    value: "7",
    note: "Support, analytics, partner, research, and dashboard data categories",
  },
  {
    label: "Sensitive / Confidential",
    value: "6",
    note: "Most operational data needs controlled access and purpose-aware handling",
  },
  {
    label: "Treat / Conditional",
    value: "5",
    note: "Retention, derived-data sensitivity, partner scope, and closeout evidence need active review",
  },
  {
    label: "Freshness concerns",
    value: "2",
    note: "Partner purpose evidence and analytics retention evidence need refresh",
  },
];

const logs = [
  "[08:14] DATA-201 class=CONFIDENTIAL owner=STUDENT_SERVICES retention=PENDING",
  "[08:36] DATA-202 class=SENSITIVE access=RESTRICTED evidence=CURRENT",
  "[08:58] DATA-203 class=CONFIDENTIAL retention_evidence=PARTIAL state=CONDITIONAL",
  "[09:20] DATA-204 class=SENSITIVE derived=true purpose=CURRENT state=TREAT",
  "[09:42] DATA-205 class=CONFIDENTIAL partner_scope=EXPANDED purpose_record=STALE state=TREAT",
  "[10:04] DATA-206 class=CONFIDENTIAL project=ACTIVE deletion_evidence=FUTURE",
  "[10:26] DATA-207 class=INTERNAL aggregation=STRONG state=MONITOR",
];

const antiPatterns = [
  {
    title: "Classification without rationale",
    problem:
      "A label is assigned but nobody can explain the context, impact, or handling expectation behind it.",
    better:
      "Record why the classification fits the actual data use and business context.",
  },
  {
    title: "Inventory stops at the primary database",
    problem:
      "Exports, caches, suppliers, analytics copies, and temporary workspaces are missing.",
    better:
      "Follow the data through source, use, sharing, copies, derived forms, and deletion.",
  },
  {
    title: "Owner equals system administrator",
    problem:
      "Technical operators are treated as the business owner for every data decision.",
    better:
      "Separate data ownership, system ownership, control operation, and evidence custody.",
  },
  {
    title: "Derived data treated as harmless",
    problem:
      "The inventory classifies source fields but ignores new sensitive meaning created by inference or aggregation.",
    better:
      "Classify derived data based on what it reveals, not only what produced it.",
  },
  {
    title: "Temporary data omitted",
    problem:
      "Short-lived exports and project copies never enter the inventory, so deletion has no owner.",
    better:
      "Inventory temporary data and define expiry, deletion, and evidence.",
  },
  {
    title: "Supplier sharing hidden in a generic field",
    problem:
      "The inventory says “external processing” without naming the purpose, fields, owner, or service dependency.",
    better:
      "Record what is shared, why, with whom, and under whose ownership.",
  },
  {
    title: "Classification never changes",
    problem:
      "A field remains Internal even after it becomes linked with identifying or behavioral data.",
    better:
      "Reassess classification when context, combination, purpose, or use changes.",
  },
  {
    title: "Inventory is created once",
    problem:
      "The record becomes stale as schemas, products, owners, suppliers, and retention rules change.",
    better:
      "Use scheduled and event-driven inventory refresh.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Classify the derived engagement indicator based on what it reveals and how it is used, not merely on the classification of the source events.",
    outcome:
      "Best. Derived data can become more sensitive than the fields used to create it.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Give it the same classification as the source event data automatically.",
    outcome:
      "Risky. Inference can change sensitivity and privacy impact.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Mark it Public because it is generated by an internal model.",
    outcome:
      "Risky. Internal generation does not make a derived value public.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Add the temporary research export to the inventory, assign an owner, retention period, deletion expectation, and closeout evidence requirement.",
    outcome:
      "Best. Temporary copies still create privacy and governance obligations.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Leave it out because it will exist for only a few weeks.",
    outcome:
      "Risky. Short-lived data can still be sensitive and can persist if nobody owns deletion.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep it indefinitely because the source dataset was de-identified.",
    outcome:
      "Risky. De-identification reduces some risk but does not remove purpose, retention, and lifecycle obligations.",
    tone: "risk" as const,
  },
];

const quizQuestions = [
  {
    question:
      "Why is a data inventory important to privacy engineering?",
    choices: [
      "It connects what data exists to purpose, owner, system, access, sharing, retention, deletion, evidence, and risk decisions.",
      "It is only a list of database table names.",
      "It replaces all security controls.",
      "It guarantees compliance.",
    ],
    answer: 0,
    explanation:
      "A useful inventory supports architecture, privacy, security, retention, supplier, and governance decisions.",
  },
  {
    question:
      "What should classification consider besides the data field itself?",
    choices: [
      "Context, identifiability, linkability, inference, purpose, audience, impact, retention, and business dependency.",
      "Only the database name.",
      "Only whether encryption is enabled.",
      "Only the system owner.",
    ],
    answer: 0,
    explanation:
      "Sensitivity depends on context and use, not just the field name.",
  },
  {
    question:
      "Why can derived data require a higher classification than source data?",
    choices: [
      "Inference or combination can reveal more sensitive information than any single source field.",
      "Derived data is always Restricted.",
      "Source data classification never matters.",
      "Derived data is always Public.",
    ],
    answer: 0,
    explanation:
      "Derived information can create new sensitivity through inference and combination.",
  },
  {
    question:
      "What is strongest for temporary data?",
    choices: [
      "Inventory it, assign ownership, retention, deletion, and evidence even if it is short-lived.",
      "Ignore it because it is temporary.",
      "Keep it forever because storage is inexpensive.",
      "Classify it as Public automatically.",
    ],
    answer: 0,
    explanation:
      "Temporary data still needs purpose, handling, lifecycle, and accountability.",
  },
  {
    question:
      "What is data lineage?",
    choices: [
      "The path showing where data comes from, how it moves, how it is transformed, who receives it, and how it eventually expires or is deleted.",
      "A risk score.",
      "A list of passwords.",
      "A vendor contract.",
    ],
    answer: 0,
    explanation:
      "Lineage helps reviewers understand data movement, copies, derived forms, and lifecycle.",
  },
  {
    question:
      "Who should be the data owner?",
    choices: [
      "The accountable business or governance role responsible for data-use, classification, sharing, and lifecycle decisions.",
      "Any system administrator automatically.",
      "The evidence custodian.",
      "The newest developer.",
    ],
    answer: 0,
    explanation:
      "Data ownership is an accountability role, not merely technical administration.",
  },
  {
    question:
      "When should classification or inventory be reassessed?",
    choices: [
      "After material changes to purpose, schema, access, supplier sharing, derived use, retention, ownership, or architecture.",
      "Never after the first inventory.",
      "Only after an incident.",
      "Only when storage changes.",
    ],
    answer: 0,
    explanation:
      "Inventories and classifications become stale as systems and uses change.",
  },
];

const checklistItems = [
  "Every inventory record has a stable Data ID.",
  "The data element or category is clearly named.",
  "Business purpose is documented.",
  "Classification is documented.",
  "Classification rationale is documented.",
  "Identifiability and linkability are considered.",
  "Derived or inferred sensitivity is considered.",
  "Source is documented.",
  "System or storage location is documented.",
  "Data owner is named.",
  "System or product owner is known.",
  "Internal access is documented.",
  "Supplier or partner sharing is documented.",
  "Retention is documented.",
  "Deletion or lifecycle expectation is documented.",
  "Evidence source is recorded.",
  "Evidence freshness is recorded.",
  "Temporary data is inventoried.",
  "Change triggers are defined.",
  "All records use fictional or synthetic data only.",
];

const takeaways = [
  "A data inventory should explain more than where data lives.",
  "Classification depends on context, purpose, impact, identifiability, inference, audience, and lifecycle.",
  "Derived data can become more sensitive than its source fields.",
  "Temporary data still needs ownership and deletion evidence.",
  "Data lineage helps reveal hidden copies, suppliers, derived data, and retention gaps.",
  "Data owners are accountable for data decisions; system owners and administrators may have different responsibilities.",
  "Supplier-held data belongs in the inventory.",
  "Inventory quality depends on freshness, completeness, purpose, ownership, and traceability.",
  "Classification should be reassessed when context or use changes.",
  "The Data Classification and Inventory Register prepares you for A16.3 Data Minimization and Purpose Limitation.",
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

export default function DataClassificationAndInventoryPage() {
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
              A16.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Data Classification and Inventory
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy engineering becomes much stronger when teams know what data
            actually exists. A useful inventory connects data to purpose,
            classification, owner, system, access, sharing, supplier
            dependency, retention, deletion, evidence, and change.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All records in this lesson are fictional or synthetic. Do not use
            real personal records, private account data, confidential datasets,
            or restricted organizational inventories.
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
          lessonTitle="Data Classification and Inventory"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.2 Entry Readiness"
          items={[
            "I can explain why purpose matters before classifying data.",
            "I can identify where data enters, moves through, and leaves a system.",
            "I understand that derived data can become more sensitive than source data.",
            "I will use only fictional or synthetic inventory records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="You Cannot Govern Data You Cannot Find"
        >
          <p className="leading-8">
            Many privacy failures begin with incomplete visibility. A product
            team may know the primary database but forget exports, caches,
            supplier copies, analytics workspaces, derived indicators, and old
            fields that no longer serve a purpose. Classification and inventory
            turn those unknowns into reviewable decisions.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Inventory tells you what exists. Classification helps decide how carefully it should be handled.
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
          eyebrow="Classification Levels"
          title="Labels Summarize Handling Expectations"
        >
          <div className="grid gap-5">
            {classificationLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.level}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Decision impact: {item.decision}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Classification Context"
          title="Sensitivity Depends on More Than the Field Name"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {contextFactors.map((item) => (
              <article
                key={item.factor}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.factor}</h3>
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
          eyebrow="Inventory Anatomy"
          title="A Useful Data Inventory Is a Decision Record"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {inventoryFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Data Types"
          title="Different Kinds of Data Create Different Privacy Questions"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {dataTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Examples: {item.examples}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Privacy question: {item.privacyQuestion}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Data Lineage"
          title="Follow the Data From Source to Deletion"
        >
          <div className="grid gap-5">
            {lineageConcepts.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-cyan-50">
                      {item.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-cyan-100">
                      {item.question}
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
          eyebrow="Inventory Quality"
          title="What Makes an Inventory Trustworthy"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {inventoryQuality.map((item) => (
              <article
                key={item.quality}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.quality}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
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
          eyebrow="Fictional Inventory"
          title="Seven Northbridge Data Inventory Records"
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
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.classification}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.data}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Purpose", item.purpose],
                    ["Source", item.source],
                    ["System / location", item.system],
                    ["Data owner", item.owner],
                    ["Access", item.access],
                    ["Sharing / supplier", item.sharing],
                    ["Retention", item.retention],
                    ["Lifecycle", item.lifecycle],
                    ["Evidence", item.evidence],
                    ["Freshness", item.freshness],
                    ["Concern", item.concern],
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
          title="Northbridge Data Inventory Dashboard"
          subtitle="Fictional classification, ownership, retention, supplier, and freshness summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Derived Analytics Indicator Has Higher Contextual Sensitivity"
          severity="High"
          time="09:20"
          source="Fictional Data Governance Review"
          details="DATA-204 is derived from ordinary course activity events but creates a more sensitive behavioral indicator. Treating it as equivalent to the source events would understate the privacy impact of inference."
          recommendation="Classify the derived indicator based on what it reveals, restrict access to the approved analytics purpose, and define a shorter project-aligned lifecycle."
        />

        <Section
          eyebrow="Classification Is Not the Same as Value"
          title="Confidentiality, Integrity, and Availability Can Differ"
        >
          <p className="leading-8">
            Privacy classification often emphasizes confidentiality, but a data
            inventory can support broader security decisions too. Some
            information may have modest confidentiality requirements but very
            high integrity or availability importance. Classification should not
            erase those other business needs.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Confidentiality",
                detail:
                  "Who should be able to see the data?",
              },
              {
                title: "Integrity",
                detail:
                  "How harmful would incorrect or manipulated data be?",
              },
              {
                title: "Availability",
                detail:
                  "How important is timely access to the data for the business service?",
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

        <FakeLogPanel
          title="Fictional Data Inventory Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Derived Engagement Indicator"
          question="What is the strongest classification approach for DATA-204?"
          evidence={[
            "The source course activity events are classified Confidential.",
            "The derived indicator summarizes repeated individual activity into a behavioral value.",
            "Only a small analytics team needs the indicator.",
            "Broader reports use aggregates instead of individual-level indicators.",
          ]}
          options={[
            "Classify the derived indicator based on what it reveals and its use, which may justify a more sensitive label than the source events.",
            "Always inherit the source classification with no further review.",
            "Mark it Public because it is model-generated.",
            "Remove classification because derived data is not original data.",
          ]}
          bestAnswer={0}
          explanation="Derived information can reveal more than the original records and should be classified according to its actual privacy and business impact."
        />

        <Section
          eyebrow="Common Inventory Mistakes"
          title="Eight Ways Data Inventories Become Misleading"
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
          title="Scenario Decision Lab 1 — Derived Data Sensitivity"
          scenario="A learning analytics system creates an individual engagement indicator from ordinary course activity events. The source events are Confidential, but the new indicator reveals a stronger behavioral interpretation."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Temporary Research Export"
          scenario="A research team creates a temporary de-identified export for a six-week project and proposes leaving it out of the data inventory because it will be short-lived."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Data Classification and Inventory Register"
        >
          <p className="leading-8">
            Build a fictional data inventory that can support later A16 work on
            minimization, purpose limitation, retention, privacy risk, and
            privacy-by-design architecture.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional data inventory records.",
              "Give every record a stable DATA ID.",
              "Name the data element or category.",
              "Record the legitimate business purpose.",
              "Assign a classification.",
              "Write a short classification rationale.",
              "Record identifiability.",
              "Record linkability.",
              "Record inference or derived-data risk.",
              "Record the source.",
              "Record the system or storage location.",
              "Record the data owner.",
              "Record the system or product owner.",
              "Record approved internal access.",
              "Record external sharing or supplier processing.",
              "Record business dependency.",
              "Record retention.",
              "Record deletion or lifecycle expectation.",
              "Record evidence source.",
              "Record evidence freshness.",
              "Record review cadence.",
              "Record change triggers.",
              "Include at least five Public or Internal records.",
              "Include at least ten Confidential records.",
              "Include at least five Sensitive records.",
              "Include at least three derived or inferred records.",
              "Include at least three temporary-data records.",
              "Include at least three supplier-held records.",
              "Include at least three records with stale or incomplete evidence.",
              "Include at least three records where classification changes because of context or combination.",
              "Include at least three records where confidentiality is moderate but integrity or availability is high.",
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
              Use fictional or synthetic records only. Do not inventory real
              student, employee, customer, medical, financial, location,
              account, or other private data. Do not attempt to identify,
              re-identify, or deanonymize real people or datasets.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Temporary Research Export"
          question="What is the strongest inventory decision for DATA-206?"
          evidence={[
            "The export is de-identified.",
            "The project lasts six weeks.",
            "The data is stored in a temporary workspace.",
            "The project has an approved closeout date.",
            "Deletion evidence will be required at project closure.",
          ]}
          options={[
            "Keep the export in the inventory with ownership, retention, lifecycle, and closeout evidence.",
            "Remove it from the inventory because it is temporary.",
            "Keep it forever because it is de-identified.",
            "Mark it Public because direct identifiers are absent.",
          ]}
          bestAnswer={0}
          explanation="Temporary and de-identified data can still create privacy, governance, and retention obligations, so it belongs in the inventory."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Data Inventory Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard that explains how
            data is discovered, classified, owned, refreshed, traced, and
            retired across products, analytics, suppliers, and temporary
            workflows.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Data ID format",
              "Classification levels",
              "Classification rationale",
              "Data owner",
              "System owner",
              "Purpose mapping",
              "Source tracking",
              "System / location tracking",
              "Access mapping",
              "Supplier sharing",
              "Lineage",
              "Derived data",
              "Temporary data",
              "Retention",
              "Deletion",
              "Evidence",
              "Freshness",
              "Review cadence",
              "Change triggers",
              "Escalation rules",
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
            The strongest standard should make inventories useful for decisions,
            not merely complete enough to satisfy a paperwork requirement.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.2 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.2 Mini Quiz: Data Classification and Inventory"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Data Classification and Inventory Register"
          prompt="Create the second artifact for your A16 Privacy Engineering Review: a fictional Data Classification and Inventory Register with at least thirty records. Include DATA ID, data element/category, purpose, classification, classification rationale, identifiability, linkability, inference risk, source, system/location, data owner, system/product owner, access, sharing/supplier, business dependency, retention, deletion/lifecycle, evidence, freshness, review cadence, and change triggers."
          tips={[
            "Classify based on context, not labels alone.",
            "Include derived and temporary data.",
            "Track supplier-held copies.",
            "Separate data ownership from technical administration.",
            "Record evidence freshness.",
            "Use fictional or synthetic data only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.3?"
        >
          <p className="leading-8">
            A16.3 focuses on Data Minimization and Purpose Limitation. Before
            continuing, make sure your inventory can explain which data exists,
            why it exists, and which records may no longer be necessary for the
            current purpose.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain classification using context and impact.",
              "I can identify derived data that may be more sensitive than its source.",
              "I can trace data through source, use, sharing, and deletion.",
              "I can explain why temporary data belongs in the inventory.",
              "I can distinguish data ownership from system administration.",
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
          title="How to Make the Data Classification and Inventory Register Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use stable data IDs",
                detail:
                  "Stable identifiers make later minimization, retention, risk, and architecture decisions easier to trace.",
              },
              {
                title: "Explain purpose",
                detail:
                  "A reviewer should understand why each important data category exists.",
              },
              {
                title: "Explain classification",
                detail:
                  "Record the context and impact behind the label rather than relying on the label alone.",
              },
              {
                title: "Show lineage",
                detail:
                  "Track source, copies, suppliers, derived forms, and lifecycle.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the role accountable for use, classification, sharing, and retention decisions.",
              },
              {
                title: "Show temporary data",
                detail:
                  "Include exports, workspaces, staging copies, and project files.",
              },
              {
                title: "Show freshness",
                detail:
                  "An old inventory may be worse than an incomplete one if teams assume it is current.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.3 will use this inventory to decide what can be removed, reduced, separated, or limited to a narrower purpose.",
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
            Data inventories should protect privacy, not expose real people
          </h2>
          <p className="mt-3 leading-7">
            Use fictional or synthetic data only. Do not inventory private
            records from real schools, employers, healthcare providers,
            financial institutions, accounts, devices, or people. Do not
            identify, re-identify, deanonymize, infer sensitive traits, or
            access confidential systems.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.2 Data Classification and Inventory Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for data classification, context,
            inventory fields, ownership, lineage, derived data, temporary data,
            supplier-held data, retention, deletion, and evidence freshness.
            Next, A16.3 focuses on Data Minimization and Purpose Limitation.
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