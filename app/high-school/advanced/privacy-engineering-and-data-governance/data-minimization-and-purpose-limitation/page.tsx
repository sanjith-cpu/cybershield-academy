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
const previousLesson = `${modulePath}/data-classification-and-inventory`;
const nextLesson = `${modulePath}/consent-and-user-expectations`;

const objectives = [
  "Explain data minimization and purpose limitation as privacy-engineering decisions that reduce unnecessary collection, precision, access, sharing, duplication, inference, and retention.",
  "Evaluate whether fictional data elements are necessary, proportionate, and connected to a current legitimate purpose rather than a vague future possibility.",
  "Distinguish primary purpose, compatible secondary use, materially different secondary use, and unsupported purpose expansion using evidence and business context.",
  "Recommend practical minimization actions such as remove, reduce, aggregate, tokenize, separate, restrict, shorten retention, or redesign the workflow while preserving legitimate business value.",
  "Build a Data Minimization Review that becomes the third artifact in the A16 Privacy Engineering Review.",
];

const minimizationDimensions = [
  {
    dimension: "Collection",
    question:
      "Does the system collect only the data needed for the approved purpose?",
    weak:
      "A support form asks for ten profile fields although the routing workflow uses four.",
    stronger:
      "The form collects only the four fields used to provide the requested service.",
    action:
      "Remove unnecessary fields or document a current purpose before collection.",
  },
  {
    dimension: "Precision",
    question:
      "Does the system need data at the current level of detail?",
    weak:
      "A service only needs age band but stores full date of birth.",
    stronger:
      "The system stores the minimum level of detail needed for the feature.",
    action:
      "Reduce precision when exact values do not change the business outcome.",
  },
  {
    dimension: "Frequency",
    question:
      "Does the system need data as often as it currently receives it?",
    weak:
      "A dashboard receives individual activity events continuously when a daily aggregate would be enough.",
    stronger:
      "The workflow receives only the frequency needed for the operational decision.",
    action:
      "Batch, aggregate, sample, or reduce collection frequency when appropriate.",
  },
  {
    dimension: "Access",
    question:
      "Do all current users and systems need access to the full data scope?",
    weak:
      "Every support role can view all case attributes.",
    stronger:
      "Access is limited to roles that need the relevant fields for their responsibilities.",
    action:
      "Narrow role, system, service, or time-based access.",
  },
  {
    dimension: "Sharing",
    question:
      "Does each recipient need every field currently shared?",
    weak:
      "A scheduling partner receives the full support profile.",
    stronger:
      "The partner receives only the fields required to schedule the appointment.",
    action:
      "Reduce interface schemas, exports, and supplier payloads to necessary fields.",
  },
  {
    dimension: "Copies",
    question:
      "How many copies of the data need to exist?",
    weak:
      "The same sensitive export appears in multiple project folders and temporary workspaces.",
    stronger:
      "The project uses one controlled source or approved temporary copy.",
    action:
      "Remove duplicate storage and centralize or reference data where practical.",
  },
  {
    dimension: "Retention",
    question:
      "Does the data need to remain available for the current duration?",
    weak:
      "Temporary analytics records persist indefinitely.",
    stronger:
      "Raw or individual-level data expires after the approved project purpose ends.",
    action:
      "Shorten retention, aggregate, archive under a different purpose, or delete.",
  },
  {
    dimension: "Inference",
    question:
      "Does the feature need to create or keep the derived value?",
    weak:
      "A model creates a sensitive individual indicator that no operational decision uses.",
    stronger:
      "Only necessary derived values are produced, and unused inference outputs are removed.",
    action:
      "Avoid unnecessary inference or use aggregate outputs when individual-level predictions are not needed.",
  },
];

const purposeCategories = [
  {
    category: "Primary purpose",
    meaning:
      "The main reason the data is collected or created in the current context.",
    example:
      "A contact method is collected so the support service can send requested updates.",
    governance:
      "Should be documented in the product, data inventory, and owner record.",
  },
  {
    category: "Compatible secondary use",
    meaning:
      "A later use that remains closely connected to the original purpose, context, expectations, and safeguards.",
    example:
      "Aggregated support-response metrics are used to improve staffing for the same service.",
    governance:
      "Still requires review; compatibility should not be assumed merely because the data already exists.",
  },
  {
    category: "Materially different secondary use",
    meaning:
      "A new use that changes the context, audience, impact, inference, sharing, or user expectations.",
    example:
      "Detailed support-case records are proposed for unrelated behavioral profiling.",
    governance:
      "Requires separate purpose, ownership, minimization, transparency, risk, and governance review.",
  },
  {
    category: "Unsupported purpose",
    meaning:
      "A proposed use has no clear current business need, accountable owner, or evidence of necessity.",
    example:
      "A team keeps extra demographic fields because they might be useful someday.",
    governance:
      "Do not collect or retain the data solely on vague future possibility.",
  },
];

const necessityTests = [
  {
    test: "Purpose test",
    ask:
      "What specific business or service outcome requires this data?",
    evidence:
      "Product requirement, service objective, owner decision, approved process.",
    failure:
      "The purpose is vague, speculative, or unrelated to the current service.",
  },
  {
    test: "Field necessity test",
    ask:
      "What happens to the business outcome if this field is removed?",
    evidence:
      "Workflow mapping, feature logic, process requirement, owner explanation.",
    failure:
      "No meaningful effect can be identified.",
  },
  {
    test: "Precision test",
    ask:
      "Could less detailed information achieve the same result?",
    evidence:
      "Feature requirement, reporting need, product design comparison.",
    failure:
      "Exact values are kept even though ranges or categories are sufficient.",
  },
  {
    test: "Access test",
    ask:
      "Which roles or systems need the data to perform an approved responsibility?",
    evidence:
      "Role mapping, service architecture, access review, workflow ownership.",
    failure:
      "Access exists because it was historically convenient.",
  },
  {
    test: "Sharing test",
    ask:
      "Which fields must leave the original system for the external or internal recipient to perform the approved purpose?",
    evidence:
      "Interface schema, partner purpose record, contract/service scope, product requirement.",
    failure:
      "The entire record is shared because filtering was never designed.",
  },
  {
    test: "Retention test",
    ask:
      "What continuing purpose requires the data to remain available?",
    evidence:
      "Retention rule, business requirement, record schedule, active project state.",
    failure:
      "Data is retained because storage is cheap or deletion was never designed.",
  },
  {
    test: "Inference test",
    ask:
      "Is the derived or predicted value necessary for a current approved decision?",
    evidence:
      "Analytics requirement, model-use case, owner approval, reporting design.",
    failure:
      "The organization creates sensitive inference merely because it is technically possible.",
  },
];

const minimizationActions = [
  {
    action: "Remove",
    bestFor:
      "Data with no current legitimate purpose.",
    example:
      "Delete three unused support-profile fields from the collection form and schema.",
    residual:
      "Verify old copies and downstream mappings are also removed or retired.",
  },
  {
    action: "Reduce precision",
    bestFor:
      "Features that need a category or range rather than an exact value.",
    example:
      "Store age band instead of full birth date when only an age category affects the workflow.",
    residual:
      "Confirm no downstream process still depends on the exact value.",
  },
  {
    action: "Aggregate",
    bestFor:
      "Reporting or analytics that can work with group-level information.",
    example:
      "Use daily service counts instead of individual event histories for staffing trend reports.",
    residual:
      "Check whether small groups or unusual combinations could still expose individuals.",
  },
  {
    action: "Separate",
    bestFor:
      "Data used for different purposes or audiences.",
    example:
      "Keep support operations separate from optional research analytics.",
    residual:
      "Document interfaces and prevent silent cross-purpose reuse.",
  },
  {
    action: "Restrict access",
    bestFor:
      "Data that is necessary but only for a small set of roles or services.",
    example:
      "Limit case-note access to approved support roles.",
    residual:
      "Review role changes and access exceptions.",
  },
  {
    action: "Reduce sharing",
    bestFor:
      "Partner or supplier interfaces that receive more fields than needed.",
    example:
      "Send only appointment ID, time, service category, and contact channel to the scheduling partner.",
    residual:
      "Revalidate the schema after partner or feature changes.",
  },
  {
    action: "Shorten retention",
    bestFor:
      "Data whose ongoing business value ends before current deletion.",
    example:
      "Expire individual-level analytics data after the project window and keep only approved aggregates.",
    residual:
      "Account for temporary workspaces, exports, backups, and supplier copies.",
  },
  {
    action: "Avoid unnecessary inference",
    bestFor:
      "Derived values that create privacy sensitivity without supporting a current approved decision.",
    example:
      "Do not generate an individual engagement indicator when only aggregate program trends are needed.",
    residual:
      "Ensure source data use is still purpose-limited.",
  },
];

const purposeReviewRecords = [
  {
    id: "MIN-301",
    linked: "CTX-P01 / DATA-201",
    item:
      "Unused support profile fields",
    currentPurpose:
      "Provide and route requested support services.",
    issue:
      "Three collected profile fields are not used by routing, communication, eligibility, or approved reporting.",
    evidence:
      "Current form schema, workflow map, product requirements",
    necessity:
      "Not demonstrated",
    options:
      "Remove fields; document a current purpose; move to optional feature-specific collection",
    recommendation:
      "Remove from the base support profile in the next release unless a current purpose is approved.",
    owner:
      "Student Services Product Owner",
    state:
      "Treat",
    residual:
      "Low after downstream copies and schema references are removed",
  },
  {
    id: "MIN-302",
    linked: "DATA-202",
    item:
      "Support case notes",
    currentPurpose:
      "Document approved support work and service coordination.",
    issue:
      "The notes are necessary, but broad internal visibility would exceed purpose.",
    evidence:
      "Support workflow, role model, access review",
    necessity:
      "Necessary with restricted access",
    options:
      "Keep with narrow role access; reduce note detail; separate sensitive subcategories",
    recommendation:
      "Retain the data for the approved support purpose but keep access narrowly role-based.",
    owner:
      "Student Services Data Owner",
    state:
      "Monitor",
    residual:
      "Moderate contextual sensitivity remains",
  },
  {
    id: "MIN-303",
    linked: "DATA-203",
    item:
      "Individual course activity event history",
    currentPurpose:
      "Support approved learning analytics and program improvement.",
    issue:
      "Long-lived individual event history is not required for every aggregate reporting need.",
    evidence:
      "Analytics requirements, project register, report designs",
    necessity:
      "Partial",
    options:
      "Shorten raw-event retention; aggregate sooner; retain only approved project windows",
    recommendation:
      "Reduce individual-level retention and use aggregate trend data for long-term reporting.",
    owner:
      "Learning Analytics Owner",
    state:
      "Treat",
    residual:
      "Moderate while raw-event workspaces remain",
  },
  {
    id: "MIN-304",
    linked: "DATA-204",
    item:
      "Individual engagement indicator",
    currentPurpose:
      "Proposed support for aggregate program-improvement analysis.",
    issue:
      "The project currently uses aggregate trends, not individual-level engagement decisions.",
    evidence:
      "Model definition, report design, project scope",
    necessity:
      "Not demonstrated at individual level",
    options:
      "Do not generate; aggregate before use; create only for approved bounded research",
    recommendation:
      "Avoid persistent individual-level indicator generation in the operational workflow.",
    owner:
      "Learning Analytics Owner",
    state:
      "Treat",
    residual:
      "Low-Moderate if only aggregates remain",
  },
  {
    id: "MIN-305",
    linked: "CTX-P03 / DATA-205",
    item:
      "Partner scheduling profile payload",
    currentPurpose:
      "Enable appointment scheduling with an approved partner.",
    issue:
      "The partner now receives eight fields while the validated purpose supports four.",
    evidence:
      "Current interface schema, older purpose record, scheduling workflow",
    necessity:
      "Four fields supported; four fields unsupported",
    options:
      "Reduce schema; justify each extra field; redesign workflow",
    recommendation:
      "Return the interface to the minimal four-field scope until any additional field has a current approved purpose.",
    owner:
      "Integration Product Owner",
    state:
      "Treat",
    residual:
      "Moderate until schema is reduced and validated",
  },
  {
    id: "MIN-306",
    linked: "DATA-206",
    item:
      "Temporary research export",
    currentPurpose:
      "Support a six-week approved internal research project.",
    issue:
      "The project needs the export temporarily, not indefinitely.",
    evidence:
      "Project approval, workspace register, closeout date",
    necessity:
      "Necessary for project duration only",
    options:
      "Keep time-bounded copy; use smaller sample; aggregate; delete at closeout",
    recommendation:
      "Keep only the approved sample during the project and require deletion evidence at closeout.",
    owner:
      "Research Program Owner",
    state:
      "Conditional",
    residual:
      "Low-Moderate during the approved project",
  },
  {
    id: "MIN-307",
    linked: "DATA-207",
    item:
      "Support quality reporting",
    currentPurpose:
      "Measure staffing demand and response performance.",
    issue:
      "The business decision uses aggregate trends; source-level detail is unnecessary for the dashboard.",
    evidence:
      "Dashboard design, aggregate metric specification",
    necessity:
      "Aggregate data sufficient",
    options:
      "Keep aggregate dashboard; remove source export; restrict exceptional drill-down",
    recommendation:
      "Maintain aggregate reporting and prevent routine individual-level export.",
    owner:
      "Operations Analytics Owner",
    state:
      "Monitor",
    residual:
      "Low if aggregation and source controls remain effective",
  },
];

const dashboardMetrics = [
  {
    label: "Purpose reviews",
    value: "7",
    note: "Support, analytics, partner, research, and dashboard workflows",
  },
  {
    label: "Remove / reduce",
    value: "5",
    note: "Unused fields, raw events, inference, partner scope, and long-lived source data can be reduced",
  },
  {
    label: "Purpose gaps",
    value: "3",
    note: "Unused support fields, individual engagement indicator, and extra partner fields lack sufficient current necessity",
  },
  {
    label: "Monitor / Conditional",
    value: "3",
    note: "Case notes, temporary research data, and aggregate reporting remain justified with controls",
  },
];

const logs = [
  "[08:18] MIN-301 item=SUPPORT_PROFILE unused_fields=3 necessity=NOT_DEMONSTRATED state=TREAT",
  "[08:40] MIN-302 item=CASE_NOTES necessity=YES access=NARROW state=MONITOR",
  "[09:02] MIN-303 item=RAW_ACTIVITY retention=REDUCE aggregation=AVAILABLE state=TREAT",
  "[09:24] MIN-304 item=ENGAGEMENT_INDICATOR individual_need=NO state=TREAT",
  "[09:46] MIN-305 item=PARTNER_PAYLOAD approved_fields=4 current_fields=8 state=TREAT",
  "[10:08] MIN-306 item=TEMP_RESEARCH duration=6_WEEKS deletion=CLOSEOUT state=CONDITIONAL",
  "[10:30] MIN-307 item=QUALITY_DASHBOARD aggregate_sufficient=TRUE state=MONITOR",
];

const antiPatterns = [
  {
    title: "Collect now, justify later",
    problem:
      "The organization accumulates data before a real purpose exists.",
    better:
      "Require current purpose and necessity before collection.",
  },
  {
    title: "One field, many future uses",
    problem:
      "A field collected for one feature quietly becomes available for unrelated analytics or profiling.",
    better:
      "Review materially different secondary uses separately.",
  },
  {
    title: "Encryption used to justify overcollection",
    problem:
      "The team argues that unnecessary data is acceptable because storage is encrypted.",
    better:
      "Ask whether the data is needed before asking how to protect it.",
  },
  {
    title: "Full-record sharing by default",
    problem:
      "Partners or internal services receive entire records because field-level filtering was never designed.",
    better:
      "Build purpose-specific schemas that expose only necessary fields.",
  },
  {
    title: "Exact values when categories are enough",
    problem:
      "The workflow retains more precise information than the business decision needs.",
    better:
      "Reduce precision when exact values do not change the outcome.",
  },
  {
    title: "Derived data treated as free",
    problem:
      "The system generates sensitive indicators simply because the source data already exists.",
    better:
      "Apply necessity and purpose review to derived data too.",
  },
  {
    title: "Temporary becomes permanent",
    problem:
      "Project exports and workspaces remain after the approved purpose ends.",
    better:
      "Tie temporary data to an explicit project lifecycle and deletion evidence.",
  },
  {
    title: "Minimization without business context",
    problem:
      "A team removes data blindly and breaks a legitimate service requirement.",
    better:
      "Minimize against the documented purpose, workflow, business need, and evidence.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Remove the extra four partner fields until each additional field has a current documented scheduling purpose and approval.",
    outcome:
      "Best. Purpose limitation and sharing minimization should be applied to the current interface, not the older assumption that more data is harmless.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep all eight fields because the partner connection is encrypted.",
    outcome:
      "Risky. Encryption protects transfer but does not prove the extra fields are necessary.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep all eight fields because the partner may build more features later.",
    outcome:
      "Risky. Possible future use is not a current legitimate purpose.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Use aggregate long-term trends and shorten retention of individual event histories to the approved project need.",
    outcome:
      "Best. The design preserves the reporting purpose while reducing individual-level retention.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep every individual event forever because storage is inexpensive.",
    outcome:
      "Risky. Cost does not create a continuing purpose.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete all analytics data immediately, including aggregates needed for valid program reporting.",
    outcome:
      "Caution. Minimization should preserve legitimate business value rather than remove data blindly.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What does data minimization mean?",
    choices: [
      "Reducing collection, precision, access, sharing, copies, inference, and retention to what is reasonably necessary for the approved purpose.",
      "Deleting all data immediately.",
      "Encrypting every database.",
      "Collecting extra data in case it becomes useful.",
    ],
    answer: 0,
    explanation:
      "Minimization preserves legitimate purpose while reducing unnecessary data and exposure.",
  },
  {
    question:
      "What is purpose limitation?",
    choices: [
      "Keeping data use aligned with the approved purpose and reviewing materially different secondary uses separately.",
      "Limiting every product to one feature.",
      "Preventing all analytics.",
      "Using one consent statement for unlimited future use.",
    ],
    answer: 0,
    explanation:
      "Purpose limitation prevents silent expansion into unrelated uses.",
  },
  {
    question:
      "What is strongest when a feature needs age category but not exact birth date?",
    choices: [
      "Store the age category or other minimum precision that supports the feature.",
      "Store the exact birth date forever.",
      "Collect additional identity data too.",
      "Keep the exact value because more data is always better.",
    ],
    answer: 0,
    explanation:
      "Reducing precision is a practical minimization technique.",
  },
  {
    question:
      "Why does encryption not justify unnecessary collection?",
    choices: [
      "Encryption reduces some access risk but does not create a legitimate purpose or necessity for the data.",
      "Encryption never works.",
      "Encrypted data is always Public.",
      "Encryption eliminates all retention requirements.",
    ],
    answer: 0,
    explanation:
      "Security and minimization answer different questions.",
  },
  {
    question:
      "What is strongest for a materially different secondary use?",
    choices: [
      "Conduct a separate purpose, necessity, transparency, risk, ownership, and governance review.",
      "Assume the old purpose automatically covers it.",
      "Use the data because it already exists.",
      "Hide the new use from the inventory.",
    ],
    answer: 0,
    explanation:
      "A materially different use changes the privacy context and should be reviewed separately.",
  },
  {
    question:
      "What is strongest when aggregate reporting meets the business need?",
    choices: [
      "Prefer aggregate reporting and avoid unnecessary individual-level retention or exposure.",
      "Keep individual-level data forever anyway.",
      "Create additional individual predictions.",
      "Share raw records with every dashboard user.",
    ],
    answer: 0,
    explanation:
      "Aggregation can preserve legitimate reporting while reducing privacy risk.",
  },
  {
    question:
      "What should happen when the approved purpose for temporary project data ends?",
    choices: [
      "Apply the defined lifecycle: delete, aggregate, archive under a separate approved purpose, or handle through a documented exception.",
      "Keep it indefinitely.",
      "Copy it to more systems.",
      "Remove ownership records.",
    ],
    answer: 0,
    explanation:
      "Purpose end should connect to a defined retention and lifecycle action.",
  },
];

const checklistItems = [
  "Every reviewed data element has a current purpose.",
  "Necessity is explained.",
  "Unsupported future-use arguments are rejected.",
  "Collection scope is minimized.",
  "Precision is minimized where possible.",
  "Collection frequency is justified.",
  "Internal access is limited to need.",
  "Supplier sharing is limited to necessary fields.",
  "Duplicate copies are identified.",
  "Temporary copies are time-bounded.",
  "Retention is linked to continuing purpose.",
  "Derived data receives its own necessity review.",
  "Aggregate alternatives are considered.",
  "Secondary uses are classified as compatible, materially different, or unsupported.",
  "Security controls are not used as substitutes for purpose.",
  "Business impact of removing data is considered.",
  "Data owner is named.",
  "System or product owner is named.",
  "Change triggers are defined.",
  "All examples remain fictional or synthetic.",
];

const takeaways = [
  "Minimization is broader than collecting fewer fields.",
  "Purpose should be specific enough to test necessity.",
  "Future possibility is not the same as a current legitimate purpose.",
  "Reducing precision, frequency, access, sharing, copies, and retention can lower privacy risk without breaking the service.",
  "Derived data needs its own purpose and necessity review.",
  "Encryption protects data but does not justify unnecessary collection or use.",
  "Compatible secondary use should still be reviewed rather than assumed.",
  "Aggregate reporting can often preserve business value with less individual-level exposure.",
  "Temporary data should end when the approved purpose ends unless another governed purpose exists.",
  "The Data Minimization Review prepares you for A16.4 Consent and User Expectations.",
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

export default function DataMinimizationAndPurposeLimitationPage() {
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
              A16.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Data Minimization and Purpose Limitation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy engineering becomes more effective when teams ask not only
            whether data can be protected, but whether the system needs the data
            at all. This lesson teaches how to test necessity, limit secondary
            use, reduce precision, narrow sharing, shorten retention, and
            preserve legitimate business value.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All records, interfaces, users, analytics, and data examples are
            fictional or synthetic. Do not use real personal or confidential
            records in these activities.
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
          lessonTitle="Data Minimization and Purpose Limitation"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.3 Entry Readiness"
          items={[
            "I can read a data inventory and explain why each major data category exists.",
            "I can distinguish classification from purpose.",
            "I understand that security controls do not automatically justify collection or sharing.",
            "I will use fictional or synthetic data only.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Safest Unnecessary Data Is the Data You Never Collect"
        >
          <p className="leading-8">
            Teams often approach privacy by protecting every field they already
            have. Privacy engineering asks an earlier question: which fields,
            copies, inferences, recipients, and retention periods are actually
            necessary for the approved service?
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Minimization reduces the amount of privacy risk the system must manage in the first place.
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
          eyebrow="Minimization"
          title="Eight Dimensions of Data Minimization"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {minimizationDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak pattern: {item.weak}
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Stronger pattern: {item.stronger}
                </p>
                <p className="mt-2 text-sm leading-7 text-white">
                  Action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Purpose Limitation"
          title="Not Every Secondary Use Is the Same"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {purposeCategories.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.category}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Governance: {item.governance}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Necessity"
          title="Seven Tests for Whether Data Is Actually Needed"
        >
          <div className="grid gap-5">
            {necessityTests.map((item, index) => (
              <article
                key={item.test}
                className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-blue-50">
                      {item.test}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      Ask: {item.ask}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Evidence: {item.evidence}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-yellow-100">
                      Warning signal: {item.failure}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Practical Actions"
          title="Minimization Does Not Mean Delete Everything"
        >
          <p className="leading-8">
            A strong minimization decision preserves the legitimate service
            outcome while reducing unnecessary privacy exposure. The best
            action depends on how the data supports the business purpose.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {minimizationActions.map((item) => (
              <article
                key={item.action}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.action}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Best for: {item.bestFor}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Residual consideration: {item.residual}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Purpose Compatibility"
          title="How to Think About Secondary Use"
        >
          <p className="leading-8">
            Secondary use should not be judged by one automatic rule. A team
            should compare the original purpose with the new purpose, the people
            affected, the data sensitivity, expected context, access, sharing,
            retention, inference, and the business consequence if the new use is
            denied.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Same service outcome",
                detail:
                  "A closely related use within the same service may be easier to justify if data scope and expectations remain aligned.",
              },
              {
                title: "New audience",
                detail:
                  "A new team, supplier, or external recipient can materially change the privacy context.",
              },
              {
                title: "New inference",
                detail:
                  "Creating behavioral or predictive values can make the secondary use more sensitive than the original collection.",
              },
              {
                title: "New retention",
                detail:
                  "A secondary use that keeps data far longer than the original purpose needs a separate lifecycle decision.",
              },
              {
                title: "New business objective",
                detail:
                  "A substantially different objective should not inherit the original purpose automatically.",
              },
              {
                title: "New user expectation",
                detail:
                  "If a reasonable user would be surprised, transparency and governance deserve stronger review.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Purpose Review"
          title="Seven Northbridge Minimization Decisions"
        >
          <div className="grid gap-5">
            {purposeReviewRecords.map((item) => (
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
                  {item.item}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Current purpose", item.currentPurpose],
                    ["Issue", item.issue],
                    ["Evidence", item.evidence],
                    ["Necessity", item.necessity],
                    ["Options", item.options],
                    ["Recommendation", item.recommendation],
                    ["Owner", item.owner],
                    ["Residual privacy risk", item.residual],
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
          title="Northbridge Data Minimization Dashboard"
          subtitle="Fictional purpose, necessity, collection, sharing, retention, and inference summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Scheduling Payload Doubled Without Purpose Validation"
          severity="High"
          time="09:46"
          source="Fictional Privacy Engineering Review"
          details="MIN-305 shows that the scheduling partner receives eight fields even though the validated scheduling purpose currently supports four. The connection is encrypted, but security does not establish necessity."
          recommendation="Reduce the payload to the four currently supported fields and require a fresh purpose review before any additional field is shared."
        />

        <Section
          eyebrow="Security, Privacy, and Business Value"
          title="A Strong Minimization Decision Balances All Three"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">Privacy</h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Reduce unnecessary collection, exposure, inference, and
                retention.
              </p>
            </article>

            <article className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <h3 className="font-black text-purple-50">Security</h3>
              <p className="mt-2 text-sm leading-7 text-purple-100">
                Protect the necessary data with appropriate access, integrity,
                confidentiality, monitoring, and resilience controls.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Business value</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Preserve the data and detail genuinely required to deliver the
                approved service.
              </p>
            </article>
          </div>
        </Section>

        <FakeLogPanel
          title="Fictional Data Minimization Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Extra Partner Fields"
          question="What is the strongest current decision for MIN-305?"
          evidence={[
            "The scheduling workflow currently requires four partner fields.",
            "The interface sends eight fields.",
            "The extra four fields are not mapped to a current scheduling requirement.",
            "The partner connection uses strong encrypted transport.",
            "The Product Owner has not approved a new purpose for the extra fields.",
          ]}
          options={[
            "Reduce the payload to the four supported fields and require a fresh purpose review before adding any others.",
            "Keep all eight fields because the transport is encrypted.",
            "Keep all eight fields because future features may need them.",
            "Mark the issue Closed because the partner is already approved.",
          ]}
          bestAnswer={0}
          explanation="Transport protection does not establish necessity. Purpose limitation and minimization support reducing the partner scope to what the current service actually needs."
        />

        <Section
          eyebrow="Common Minimization Mistakes"
          title="Eight Ways Purpose and Necessity Reviews Fail"
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
          title="Scenario Decision Lab 1 — Partner Payload Expansion"
          scenario="A scheduling partner originally received four fields. The integration now sends eight, but no current requirement explains why the additional four fields are needed."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Long-Lived Analytics Events"
          scenario="A program-improvement dashboard needs multi-year trends, but its current design keeps individual course activity events for the entire period even though aggregate trends would support the business decision."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Data Minimization Review"
        >
          <p className="leading-8">
            Use your fictional A16.2 inventory and evaluate which data can be
            removed, reduced, aggregated, separated, restricted, shared more
            narrowly, retained for less time, or prevented from becoming an
            unnecessary derived value.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional minimization review records.",
              "Give every record a stable MIN ID.",
              "Link each record to one or more DATA IDs.",
              "Write the current business purpose.",
              "Identify the data element, category, copy, or derived value being reviewed.",
              "Record the current collection scope.",
              "Record the current precision.",
              "Record collection or update frequency.",
              "Record internal access scope.",
              "Record external sharing scope.",
              "Record number or type of copies where useful.",
              "Record retention.",
              "Record any derived or inferred information.",
              "State the evidence supporting necessity.",
              "Rate necessity as Demonstrated, Partial, Not Demonstrated, or Unknown.",
              "Classify any secondary use as Compatible, Materially Different, Unsupported, or Not Applicable.",
              "Compare at least two minimization options.",
              "Choose a recommendation.",
              "Record business impact of the recommendation.",
              "Record residual privacy risk.",
              "Name the data owner.",
              "Name the product or system owner.",
              "Set a due date or review trigger.",
              "Include at least five Remove recommendations.",
              "Include at least five Reduce Precision or Aggregate recommendations.",
              "Include at least five Reduce Sharing or Restrict Access recommendations.",
              "Include at least five Shorten Retention recommendations.",
              "Include at least three derived-data reviews.",
              "Include at least three supplier-sharing reviews.",
              "Include at least three cases where the data should remain because necessity is well demonstrated.",
              "Include at least three materially different secondary-use proposals.",
              "Include at least three records where strong security controls exist but minimization is still needed.",
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
              Use fictional or synthetic data only. Do not collect, inspect,
              infer, identify, re-identify, or analyze real people or private
              datasets. Do not access confidential systems or real partner
              integrations.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Individual Analytics Retention"
          question="What is the strongest current decision for MIN-303?"
          evidence={[
            "The business needs long-term program trends.",
            "Current reports use aggregate statistics.",
            "Individual activity histories are retained for the same multi-year period.",
            "Approved projects need individual events only during bounded analysis windows.",
            "Aggregate trend data can support the long-term reporting need.",
          ]}
          options={[
            "Shorten individual-event retention to approved project windows and preserve long-term aggregate trends.",
            "Keep every individual event forever because long-term reporting exists.",
            "Delete all analytics information immediately, including required aggregates.",
            "Share the individual histories more broadly so other teams can find future uses.",
          ]}
          bestAnswer={0}
          explanation="The strongest decision preserves legitimate long-term reporting while reducing unnecessary individual-level retention."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Purpose and Minimization Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for deciding whether
            new fields, data uses, integrations, analytics, derived values, and
            retention changes are necessary.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Purpose statement",
              "Necessity evidence",
              "Field-level review",
              "Precision review",
              "Frequency review",
              "Access review",
              "Sharing review",
              "Copy reduction",
              "Retention review",
              "Derived-data review",
              "Secondary-use categories",
              "Compatibility review",
              "Business impact",
              "Security controls",
              "Data owner",
              "Product owner",
              "Decision state",
              "Residual privacy risk",
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
            The strongest standard should preserve legitimate business value
            while making “we might use it later” an insufficient reason to
            collect or retain data.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.3 Mini Quiz: Data Minimization and Purpose Limitation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Data Minimization Review"
          prompt="Create the third artifact for your A16 Privacy Engineering Review: a fictional Data Minimization Review with at least twenty-five records. Include MIN ID, linked DATA IDs, current purpose, reviewed data element/category/copy/derived value, collection scope, precision, frequency, access, sharing, copies, retention, derived information, necessity evidence, necessity rating, secondary-use category, options, recommendation, business impact, residual privacy risk, data owner, product/system owner, due date, and change triggers."
          tips={[
            "Test necessity against the real business purpose.",
            "Do not use security controls as a reason to keep unnecessary data.",
            "Consider reducing precision and retention, not only removing fields.",
            "Review derived data separately.",
            "Treat supplier sharing as a field-level purpose decision.",
            "Use fictional or synthetic data only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.4?"
        >
          <p className="leading-8">
            A16.4 focuses on Consent and User Expectations. Before continuing,
            make sure you can explain which data is necessary for the service
            and which uses represent a meaningful change in context.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can test whether a field is necessary for a current purpose.",
              "I can reduce precision, access, sharing, copies, and retention without automatically deleting everything.",
              "I can distinguish compatible from materially different secondary use.",
              "I can explain why strong security does not create purpose.",
              "I can recommend a minimization action while preserving legitimate business value.",
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
          title="How to Make the Data Minimization Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Link every decision to purpose",
                detail:
                  "A minimization recommendation should explain what service outcome is preserved.",
              },
              {
                title: "Use field-level evidence",
                detail:
                  "Show exactly which fields, copies, recipients, retention periods, or derived values are being reviewed.",
              },
              {
                title: "Compare alternatives",
                detail:
                  "Remove is only one option; consider lower precision, aggregation, narrower sharing, and shorter retention.",
              },
              {
                title: "Show secondary-use category",
                detail:
                  "Distinguish compatible, materially different, unsupported, and not-applicable cases.",
              },
              {
                title: "Show business impact",
                detail:
                  "Explain whether the recommendation changes usability, reporting, operations, or service capability.",
              },
              {
                title: "Show residual risk",
                detail:
                  "A minimization action may reduce but not eliminate privacy risk.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the accountable data and product roles.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.4 will examine whether user-facing choices and expectations align with the minimized purpose and data use.",
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
            Minimization decisions should reduce privacy exposure without investigating real people
          </h2>
          <p className="mt-3 leading-7">
            Use fictional or synthetic data only. Do not collect, inspect,
            infer, identify, re-identify, track, or analyze real individuals or
            private datasets. Do not access private accounts, confidential
            systems, internal databases, or real supplier integrations.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.3 Data Minimization and Purpose Limitation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for testing necessity, reducing data
            scope, limiting secondary use, narrowing sharing, shortening
            retention, and avoiding unnecessary inference. Next, A16.4 focuses
            on Consent and User Expectations.
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