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
const previousLesson = `${modulePath}/data-governance-roles`;
const nextLesson = `${modulePath}/balancing-security-privacy-and-usability`;

const objectives = [
  "Explain privacy by design as the practice of translating privacy goals into architecture, product defaults, data flows, access boundaries, lifecycle controls, observability, and governance before problems become expensive to fix.",
  "Evaluate fictional system architectures for overcollection, unnecessary centralization, cross-purpose reuse, broad access, supplier exposure, weak lifecycle design, and missing evidence.",
  "Apply design patterns such as minimization, separation, aggregation, local processing, narrow interfaces, privacy-respecting defaults, bounded retention, and review triggers to reduce privacy risk.",
  "Connect privacy architecture decisions to data ownership, product ownership, control ownership, evidence ownership, privacy risk, security controls, and user expectations.",
  "Build a Privacy-by-Design Architecture Review that becomes the eighth artifact in the A16 Privacy Engineering Review.",
];

const designPrinciples = [
  {
    principle: "Minimize at the boundary",
    meaning:
      "Reduce data before it enters the system rather than collecting broadly and relying on cleanup later.",
    example:
      "A scheduling form sends only appointment ID, selected time, service category, and contact channel.",
    question:
      "What can be removed before the first storage or sharing boundary?",
  },
  {
    principle: "Separate purposes",
    meaning:
      "Keep materially different uses, datasets, audiences, and processing paths distinct.",
    example:
      "Support operations and optional research use separate storage and approval paths.",
    question:
      "Which purposes should not share the same default data path?",
  },
  {
    principle: "Use privacy-respecting defaults",
    meaning:
      "Optional data collection or sharing should not be enabled merely because users may overlook a setting.",
    example:
      "Optional research participation remains off until explicitly enabled.",
    question:
      "What happens when the user or system takes no extra action?",
  },
  {
    principle: "Reduce precision",
    meaning:
      "Use the minimum detail needed for the approved decision.",
    example:
      "A report stores age band rather than exact date of birth when the exact value is unnecessary.",
    question:
      "Could lower precision preserve the business outcome?",
  },
  {
    principle: "Narrow access",
    meaning:
      "Limit data to the roles, services, suppliers, and time windows that truly need it.",
    example:
      "Support case notes are visible only to approved support roles.",
    question:
      "Who genuinely needs this data, and for how long?",
  },
  {
    principle: "Design lifecycle up front",
    meaning:
      "Retention, expiry, deletion, archival, and closeout should be part of architecture from the beginning.",
    example:
      "Temporary research workspaces automatically expire after the approved project window.",
    question:
      "What should happen when the purpose ends?",
  },
  {
    principle: "Make important behavior observable",
    meaning:
      "Privacy controls need evidence that reviewers can use without exposing sensitive content.",
    example:
      "A lifecycle dashboard records deletion state, exception count, and owner without showing personal records.",
    question:
      "What metadata proves the privacy requirement is operating?",
  },
  {
    principle: "Review material change",
    meaning:
      "New data, suppliers, inference, retention, users, or purposes should trigger architectural reassessment.",
    example:
      "A partner schema expansion reopens the privacy-by-design review.",
    question:
      "Which changes should automatically reopen the decision?",
  },
];

const architecturePatterns = [
  {
    pattern: "Purpose-specific service boundary",
    problem:
      "One large service receives data for many unrelated purposes.",
    design:
      "Use distinct service boundaries or logical partitions for materially different purposes.",
    benefit:
      "Reduces silent cross-purpose reuse and clarifies ownership.",
  },
  {
    pattern: "Narrow interface schema",
    problem:
      "An integration receives complete records because field filtering was never designed.",
    design:
      "Define a purpose-specific contract exposing only required fields.",
    benefit:
      "Reduces third-party and internal data exposure.",
  },
  {
    pattern: "Aggregation before reporting",
    problem:
      "Dashboards query individual-level source data even when only trends are needed.",
    design:
      "Aggregate data before broad reporting and restrict source-level drill-down.",
    benefit:
      "Preserves business value with less individual exposure.",
  },
  {
    pattern: "Temporary workspace with expiry",
    problem:
      "Project copies persist after project closeout.",
    design:
      "Use bounded workspaces with explicit expiry, cleanup, and closure evidence.",
    benefit:
      "Reduces long-lived temporary-data risk.",
  },
  {
    pattern: "Separate optional feature path",
    problem:
      "Optional data use is woven into the core service.",
    design:
      "Isolate optional processing so declining it does not break unrelated core functionality.",
    benefit:
      "Improves user choice and purpose separation.",
  },
  {
    pattern: "Derived-data containment",
    problem:
      "Sensitive model outputs become available across the platform.",
    design:
      "Generate derived values only when necessary and keep them in the approved processing boundary.",
    benefit:
      "Reduces sensitive inference exposure.",
  },
  {
    pattern: "Metadata-only governance logs",
    problem:
      "Review evidence contains unnecessary personal content.",
    design:
      "Log control state, timestamps, owners, IDs, counts, and status without duplicating sensitive records.",
    benefit:
      "Supports assurance while minimizing evidence exposure.",
  },
  {
    pattern: "Deletion-aware restore process",
    problem:
      "A restore reintroduces data that had previously expired.",
    design:
      "Reconcile restored data against current lifecycle state before returning systems to normal operation.",
    benefit:
      "Keeps recovery aligned with retention decisions.",
  },
];

const designReviewQuestions = [
  {
    area: "Purpose",
    questions:
      "What approved service outcome requires this data? Are secondary uses separated?",
  },
  {
    area: "Collection",
    questions:
      "Which fields can be removed, made optional, reduced in precision, or collected later?",
  },
  {
    area: "Data flow",
    questions:
      "Where does the data enter, move, transform, duplicate, aggregate, and leave?",
  },
  {
    area: "Access",
    questions:
      "Which roles and services need access? Can access be narrower or temporary?",
  },
  {
    area: "Suppliers",
    questions:
      "Which fields leave the organization, why, and under whose ownership?",
  },
  {
    area: "Inference",
    questions:
      "What derived values are created, and are they actually necessary?",
  },
  {
    area: "Retention",
    questions:
      "What is the trigger, period, end action, and evidence for lifecycle completion?",
  },
  {
    area: "User expectations",
    questions:
      "Would the design match what a reasonable user expects in this context?",
  },
  {
    area: "Security",
    questions:
      "How are necessary data and services protected from unauthorized access or change?",
  },
  {
    area: "Evidence",
    questions:
      "What proves minimization, access, sharing, retention, and control operation?",
  },
  {
    area: "Governance",
    questions:
      "Who owns the data, system, control, evidence, remediation, and residual-risk decision?",
  },
  {
    area: "Change",
    questions:
      "Which future changes should trigger a new privacy architecture review?",
  },
];

const systemLayers = [
  {
    layer: "User experience",
    purpose:
      "Where data is requested, explained, optionally chosen, and presented back to the user.",
    privacyDesign:
      "Collect only necessary fields, use fair defaults, explain material sharing, preserve accessibility.",
  },
  {
    layer: "Application logic",
    purpose:
      "Where product rules determine which data is needed for each feature.",
    privacyDesign:
      "Enforce purpose-specific field use and prevent unrelated feature reuse.",
  },
  {
    layer: "Service interfaces",
    purpose:
      "Where data moves between internal services and external suppliers.",
    privacyDesign:
      "Use narrow schemas, approved recipients, and versioned purpose mappings.",
  },
  {
    layer: "Data storage",
    purpose:
      "Where active, derived, temporary, aggregate, and archived data reside.",
    privacyDesign:
      "Separate purposes, reduce duplicates, apply retention and access boundaries.",
  },
  {
    layer: "Analytics / inference",
    purpose:
      "Where source data is aggregated, transformed, or used to create derived values.",
    privacyDesign:
      "Prefer aggregate outputs where possible and avoid unnecessary individual inference.",
  },
  {
    layer: "Observability",
    purpose:
      "Where system events and control evidence are recorded.",
    privacyDesign:
      "Use metadata-rich but content-minimized logs and protect sensitive evidence.",
  },
  {
    layer: "Lifecycle automation",
    purpose:
      "Where expiry, deletion, archival, exception, and closeout actions are executed.",
    privacyDesign:
      "Tie lifecycle behavior to purpose and preserve reviewable evidence.",
  },
  {
    layer: "Governance",
    purpose:
      "Where ownership, approvals, exceptions, residual risk, and change decisions are recorded.",
    privacyDesign:
      "Make decision authority explicit and trigger review after material change.",
  },
];

const northbridgeRecords = [
  {
    id: "PBD-801",
    system:
      "Student Support Portal profile",
    current:
      "Base profile collects three fields not used by the active support workflow.",
    issue:
      "Overcollection is built into the entry point.",
    design:
      "Remove unused fields from the base form and collect feature-specific information only when a current purpose requires it.",
    linked:
      "PRA-601 / GOV-701",
    owner:
      "Student Services Product Owner",
    evidence:
      "Updated form schema + release record + downstream field reconciliation",
    state:
      "Treat",
  },
  {
    id: "PBD-802",
    system:
      "Support case-note service",
    current:
      "Sensitive notes are necessary for approved support roles.",
    issue:
      "Privacy depends on maintaining narrow access and separate analytics use.",
    design:
      "Keep case-note access purpose-specific and require a separate path for any materially different analytics purpose.",
    linked:
      "PRA-602 / GOV-702",
    owner:
      "Student Services Data Owner",
    evidence:
      "Role review + service architecture + purpose mapping",
    state:
      "Monitor",
  },
  {
    id: "PBD-803",
    system:
      "Learning analytics platform",
    current:
      "Raw individual events and aggregate reports share overlapping lifecycle patterns.",
    issue:
      "Long-term trend need does not require equally long individual-level retention.",
    design:
      "Use bounded individual-level project workspaces and preserve longer-lived aggregate trend datasets.",
    linked:
      "PRA-603 / GOV-703",
    owner:
      "Learning Analytics Owner",
    evidence:
      "Workspace expiry design + aggregation pipeline + retention mapping",
    state:
      "Treat",
  },
  {
    id: "PBD-804",
    system:
      "Engagement indicator pipeline",
    current:
      "The platform can produce individual engagement indicators even when only aggregate trends are needed.",
    issue:
      "Architecture enables unnecessary sensitive inference.",
    design:
      "Disable persistent individual-level outputs by default and permit them only in separately approved bounded research.",
    linked:
      "PRA-604 / GOV-704",
    owner:
      "Learning Analytics Data Owner",
    evidence:
      "Model-output configuration + approved-use register + project evidence",
    state:
      "Blocked / Redesign",
  },
  {
    id: "PBD-805",
    system:
      "Partner scheduling integration",
    current:
      "Partner payload has expanded beyond the validated four-field purpose.",
    issue:
      "The interface boundary exposes unnecessary profile data.",
    design:
      "Replace full-profile mapping with a versioned purpose-specific four-field interface and review any future field addition.",
    linked:
      "PRA-605 / GOV-705",
    owner:
      "Integration Product Owner",
    evidence:
      "Interface contract + schema validation + partner review + lifecycle evidence",
    state:
      "Treat",
  },
  {
    id: "PBD-806",
    system:
      "Temporary research workspace",
    current:
      "The project is bounded but closeout evidence depends on end-of-project manual coordination.",
    issue:
      "Manual closeout can leave orphaned exports or workspaces.",
    design:
      "Use project expiry metadata, automated workspace expiration, deletion queue, and reconciliation evidence.",
    linked:
      "PRA-606 / GOV-706",
    owner:
      "Research Program Owner",
    evidence:
      "Workspace expiry + deletion result + closeout record",
    state:
      "Conditional",
  },
  {
    id: "PBD-807",
    system:
      "Support quality dashboard",
    current:
      "Aggregate reporting is strong and routine individual drill-down is disabled.",
    issue:
      "Future drill-down could erode the current privacy posture.",
    design:
      "Keep aggregate-only reporting as the default and require a fresh review before individual-level drill-down or source export.",
    linked:
      "PRA-607 / GOV-707",
    owner:
      "Operations Analytics Owner",
    evidence:
      "Dashboard architecture + export controls + change trigger",
    state:
      "Monitor",
  },
];

const dashboardMetrics = [
  {
    label: "Architecture reviews",
    value: "7",
    note: "Support, analytics, partner, research, and dashboard designs",
  },
  {
    label: "Redesign / Treat",
    value: "5",
    note: "Profile, analytics, inference, partner, and research architecture need improvement",
  },
  {
    label: "Strong defaults",
    value: "2",
    note: "Support-note access and aggregate dashboard design are currently well bounded",
  },
  {
    label: "Change-triggered reviews",
    value: "7",
    note: "Every design includes a material-change condition for reassessment",
  },
];

const logs = [
  "[08:10] PBD-801 layer=USER_EXPERIENCE unused_fields=3 action=REMOVE state=TREAT",
  "[08:32] PBD-802 layer=SERVICE_ACCESS purpose=SUPPORT access=NARROW state=MONITOR",
  "[08:54] PBD-803 layer=ANALYTICS raw_retention=REDUCE aggregate_retention=KEEP state=TREAT",
  "[09:16] PBD-804 layer=INFERENCE individual_output=DEFAULT_DISABLED state=BLOCKED_REDESIGN",
  "[09:38] PBD-805 layer=INTERFACE approved_fields=4 current_fields=8 action=NARROW_SCHEMA",
  "[10:00] PBD-806 layer=LIFECYCLE closeout=AUTOMATE state=CONDITIONAL",
  "[10:22] PBD-807 layer=REPORTING drilldown=DISABLED state=MONITOR",
];

const antiPatterns = [
  {
    title: "Privacy added after launch",
    problem:
      "Architecture is already fixed before data purpose, minimization, and lifecycle are reviewed.",
    better:
      "Review privacy while fields, boundaries, defaults, and flows are still design choices.",
  },
  {
    title: "Centralize everything",
    problem:
      "One data store becomes the default source for unrelated products and purposes.",
    better:
      "Separate purposes and expose only narrow approved interfaces.",
  },
  {
    title: "Full-record interfaces",
    problem:
      "Services and suppliers receive entire objects instead of the fields needed for their job.",
    better:
      "Use purpose-specific schemas.",
  },
  {
    title: "Optional use embedded in core path",
    problem:
      "Declining an optional use breaks unrelated core functionality.",
    better:
      "Separate optional processing from required service logic.",
  },
  {
    title: "Logging copies sensitive content",
    problem:
      "Governance logs duplicate personal or sensitive values unnecessarily.",
    better:
      "Prefer IDs, status, counts, ownership, and metadata where possible.",
  },
  {
    title: "Retention left to operations",
    problem:
      "The product launches with no architecture for expiry or deletion.",
    better:
      "Design lifecycle behavior and evidence before production use.",
  },
  {
    title: "Security used as the only privacy design",
    problem:
      "Strong encryption and access controls coexist with overcollection and purpose expansion.",
    better:
      "Use security alongside minimization, purpose separation, and lifecycle design.",
  },
  {
    title: "No architecture review after change",
    problem:
      "A new supplier, model output, field, or retention period is added without revisiting privacy assumptions.",
    better:
      "Use material-change triggers that reopen the design review.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Replace the broad partner mapping with a purpose-specific four-field interface and require review before future schema expansion.",
    outcome:
      "Best. The architecture enforces minimization at the boundary instead of relying on documentation alone.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep sending all eight fields because the partner connection is encrypted.",
    outcome:
      "Risky. Security protects transfer but does not justify unnecessary scope.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Keep the current interface and remind developers to use only the right fields.",
    outcome:
      "Caution. Process reminders are weaker than a narrow technical boundary.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Use bounded project workspaces for individual event analysis and keep only approved aggregates for long-term trend reporting.",
    outcome:
      "Best. The architecture separates purpose and lifecycle by data granularity.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Keep individual-level events indefinitely because the aggregate dashboard depends on long-term history.",
    outcome:
      "Risky. Aggregate reporting does not require identical retention for detailed source records.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete all analytics data immediately.",
    outcome:
      "Caution. That removes legitimate aggregate business value.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is privacy by design?",
    choices: [
      "Building privacy requirements into architecture, defaults, data flows, access, lifecycle, evidence, and governance before problems become expensive to fix.",
      "Adding a privacy policy after launch.",
      "Encrypting every database and stopping there.",
      "Collecting all data and deleting later.",
    ],
    answer: 0,
    explanation:
      "Privacy by design makes privacy part of system architecture and product decisions from the beginning.",
  },
  {
    question:
      "What is strongest for a partner integration that needs only four fields?",
    choices: [
      "Use a purpose-specific interface that exposes only those four fields.",
      "Send the full profile and rely on policy.",
      "Send all fields if encryption is enabled.",
      "Allow the partner to choose fields later.",
    ],
    answer: 0,
    explanation:
      "A narrow interface makes minimization an architectural property.",
  },
  {
    question:
      "Why are privacy-respecting defaults useful?",
    choices: [
      "They reduce optional data use when users or systems take no extra action.",
      "They eliminate the need for purpose.",
      "They make every feature mandatory.",
      "They replace accessibility.",
    ],
    answer: 0,
    explanation:
      "Defaults shape system behavior and can reduce unnecessary optional processing.",
  },
  {
    question:
      "What is strongest when long-term reporting needs only aggregate trends?",
    choices: [
      "Keep approved aggregates longer and use shorter retention for individual-level source data.",
      "Keep all individual data forever.",
      "Delete all analytics data.",
      "Share the source data more broadly.",
    ],
    answer: 0,
    explanation:
      "Privacy by design can separate retention by granularity and purpose.",
  },
  {
    question:
      "What is strongest for governance logs?",
    choices: [
      "Record enough metadata to prove control operation without unnecessarily duplicating sensitive content.",
      "Copy complete personal records into every log.",
      "Do not log anything.",
      "Store sensitive evidence publicly.",
    ],
    answer: 0,
    explanation:
      "Observability should support assurance while minimizing evidence exposure.",
  },
  {
    question:
      "When should privacy architecture be reassessed?",
    choices: [
      "After material change such as new data, purpose, supplier, inference, retention, access, or user audience.",
      "Never after launch.",
      "Only after an incident.",
      "Only when the database engine changes.",
    ],
    answer: 0,
    explanation:
      "Material change can invalidate earlier privacy assumptions.",
  },
  {
    question:
      "Which statement about security and privacy by design is strongest?",
    choices: [
      "Security controls protect necessary data, while privacy by design also asks whether the data, purpose, sharing, and retention should exist in that form.",
      "Security and privacy are identical.",
      "Encryption removes all privacy risk.",
      "Privacy by design replaces security controls.",
    ],
    answer: 0,
    explanation:
      "The disciplines overlap but answer different questions.",
  },
];

const checklistItems = [
  "Business purpose is defined before architecture is approved.",
  "Collection is minimized at entry points.",
  "Precision is reduced where possible.",
  "Optional uses are separated from required service paths.",
  "Materially different purposes have distinct processing boundaries.",
  "Internal interfaces expose only necessary fields.",
  "Supplier interfaces expose only necessary fields.",
  "Derived data is created only when necessary.",
  "Aggregate alternatives are considered.",
  "Access boundaries are explicit.",
  "Temporary workspaces have expiry.",
  "Retention is designed before launch.",
  "Deletion and archive behavior are defined.",
  "Backup and restore lifecycle are considered.",
  "Observability minimizes sensitive content.",
  "Evidence ownership is assigned.",
  "Product and data ownership are explicit.",
  "Change triggers reopen privacy review.",
  "Architecture decisions link to residual privacy risk.",
  "All examples remain fictional or synthetic.",
];

const takeaways = [
  "Privacy by design makes privacy part of architecture rather than post-launch cleanup.",
  "The strongest minimization often happens at the first collection or interface boundary.",
  "Purpose separation can be enforced through architecture, not only policy.",
  "Privacy-respecting defaults reduce unnecessary optional processing.",
  "Aggregate and individual-level data can use different architectures and retention.",
  "Derived data should be contained and created only for an approved need.",
  "Governance logs can prove control operation without copying sensitive content.",
  "Lifecycle automation reduces orphaned temporary data.",
  "Material change should reopen privacy architecture review.",
  "The Privacy-by-Design Architecture Review prepares you for A16.9 Balancing Security, Privacy, and Usability.",
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

export default function PrivacyByDesignInSystemsPage() {
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
              A16.8
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Privacy Engineering and Data Governance
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A16.8
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy by Design in Systems
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Privacy by design turns principles into architecture. Instead of
            waiting for a late review, teams shape fields, interfaces, defaults,
            data stores, access boundaries, analytics, suppliers, lifecycle,
            evidence, and change controls so privacy is part of how the system
            works.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All systems, data flows, users, suppliers, architecture records, and
            evidence in this lesson are fictional or synthetic.
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
          lessonTitle="Privacy by Design in Systems"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A16.8 Entry Readiness"
          items={[
            "I can explain the purpose and data flow of a fictional system.",
            "I can identify the accountable data, product, control, and evidence roles.",
            "I understand that privacy risk can be reduced through architecture, not just policy.",
            "I will use only fictional or synthetic system designs.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Architecture Can Prevent Privacy Problems Before They Exist"
        >
          <p className="leading-8">
            A policy may say “share only what is necessary,” but a well-designed
            interface can make it impossible to send extra fields by default.
            A policy may say “delete temporary data,” but a bounded workspace
            can expire automatically. Privacy by design moves important
            protections into system structure.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The strongest privacy control is often the design decision that removes the risky path entirely.
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
          eyebrow="Design Principles"
          title="Eight Privacy-by-Design Principles"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designPrinciples.map((item) => (
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
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Design question: {item.question}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Patterns"
          title="Eight Patterns That Turn Privacy Into System Behavior"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {architecturePatterns.map((item) => (
              <article
                key={item.pattern}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.pattern}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Problem: {item.problem}
                </p>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Design: {item.design}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Privacy benefit: {item.benefit}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Design Review Questions"
          title="Twelve Questions for a Privacy Architecture Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {designReviewQuestions.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.area}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.questions}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="System Layers"
          title="Privacy Decisions Appear Across the Whole Architecture"
        >
          <div className="grid gap-5">
            {systemLayers.map((item, index) => (
              <article
                key={item.layer}
                className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-emerald-50">
                      {item.layer}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Role: {item.purpose}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">
                      Privacy-by-design focus: {item.privacyDesign}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Architecture Tradeoffs"
          title="Privacy by Design Still Requires Judgment"
        >
          <p className="leading-8">
            Strong design does not mean minimizing every data flow until the
            service becomes unusable. The goal is to preserve legitimate
            business value while reducing unnecessary collection, exposure,
            inference, and lifecycle risk.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Centralization vs separation",
                detail:
                  "Centralization can simplify governance and operations, while separation can reduce cross-purpose reuse. Choose based on purpose, access, and risk.",
              },
              {
                title: "Detail vs usability",
                detail:
                  "Lower precision can improve privacy, but some workflows genuinely require exact values.",
              },
              {
                title: "Observability vs data duplication",
                detail:
                  "Evidence is necessary, but logs should not duplicate sensitive content unnecessarily.",
              },
              {
                title: "Automation vs exception handling",
                detail:
                  "Automated lifecycle improves consistency, but legitimate exceptions still need a governed path.",
              },
              {
                title: "Aggregation vs operational flexibility",
                detail:
                  "Aggregate data may be sufficient for reporting but not for every authorized operational workflow.",
              },
              {
                title: "Strict separation vs complexity",
                detail:
                  "Purpose separation can reduce risk but may add engineering complexity; the design should target material privacy boundaries.",
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
          eyebrow="Fictional Architecture Review"
          title="Seven Northbridge Privacy-by-Design Decisions"
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
                  {item.system}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Current architecture", item.current],
                    ["Privacy issue", item.issue],
                    ["Privacy-by-design decision", item.design],
                    ["Accountable owner", item.owner],
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
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Privacy-by-Design Dashboard"
          subtitle="Fictional architecture, minimization, purpose separation, lifecycle, evidence, and change summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Partner Integration Still Exposes More Fields Than the Purpose Requires"
          severity="High"
          time="09:38"
          source="Fictional Privacy Architecture Review"
          details="PBD-805 shows that the current interface sends eight profile fields to the scheduling partner even though the validated scheduling purpose supports four. The architecture allows unnecessary scope by default."
          recommendation="Replace the broad mapping with a purpose-specific four-field interface and require review before any future schema expansion."
        />

        <FakeLogPanel
          title="Fictional Privacy-by-Design Review Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Partner Integration Boundary"
          question="What is the strongest architecture decision for PBD-805?"
          evidence={[
            "The scheduling workflow requires four fields.",
            "The current interface sends eight fields.",
            "The extra fields are not mapped to a current purpose.",
            "Encrypted transport is current.",
            "The Product Owner can change the interface schema.",
          ]}
          options={[
            "Replace the broad mapping with a purpose-specific four-field interface and review future schema expansion.",
            "Keep all eight fields because transport encryption is strong.",
            "Keep the interface broad and rely on developers to ignore extra fields.",
            "Mark the design Closed because the partner is already approved.",
          ]}
          bestAnswer={0}
          explanation="A purpose-specific interface enforces minimization at the architecture boundary and is stronger than relying on policy or developer habit."
        />

        <Section
          eyebrow="Common Privacy-by-Design Mistakes"
          title="Eight Ways Architecture Undermines Privacy"
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
          title="Scenario Decision Lab 1 — Purpose-Specific Partner Interface"
          scenario="An approved scheduling partner receives eight profile fields even though the scheduling workflow needs only four. The current connection is secure, but the architecture exposes the larger object by default."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Analytics Architecture and Retention"
          scenario="A multi-year dashboard needs aggregate program trends, while individual course activity events are currently stored for the same multi-year period."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build a Privacy-by-Design Architecture Review"
        >
          <p className="leading-8">
            Review a fictional multi-service platform and redesign selected data
            flows so privacy is built into collection, interfaces, access,
            analytics, retention, evidence, and change management.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least twenty-five fictional architecture review records.",
              "Give every record a stable PBD ID.",
              "Link each record to relevant PRA and GOV IDs.",
              "Name the system, service, feature, or architecture boundary.",
              "Write the approved business purpose.",
              "Record the current collection point.",
              "Record the current data flow.",
              "Record the current access boundary.",
              "Record supplier or partner boundaries.",
              "Record current retention behavior.",
              "Record derived-data behavior.",
              "Record current defaults.",
              "Record current observability or evidence.",
              "Identify the privacy architecture issue.",
              "Compare at least two design options.",
              "Choose a privacy-by-design recommendation.",
              "Record business impact.",
              "Record usability impact.",
              "Record security impact.",
              "Record implementation complexity.",
              "Record residual privacy risk.",
              "Assign the data owner.",
              "Assign the product/system owner.",
              "Assign the control owner.",
              "Assign the evidence owner.",
              "Set a milestone or due date.",
              "Define change triggers.",
              "Define closure evidence.",
              "Include at least five minimization-at-collection decisions.",
              "Include at least five narrow-interface decisions.",
              "Include at least five lifecycle-by-design decisions.",
              "Include at least three privacy-respecting default decisions.",
              "Include at least three supplier-boundary decisions.",
              "Include at least three aggregate-vs-individual architecture decisions.",
              "Include at least three derived-data containment decisions.",
              "Include at least three observability designs that avoid unnecessary sensitive content.",
              "Include at least three deletion-aware restore or backup considerations.",
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
              Use fictional architecture diagrams, data flows, services,
              suppliers, and evidence only. Do not access real cloud accounts,
              private systems, internal architecture diagrams, confidential
              datasets, or real supplier environments.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Analytics Architecture"
          question="What is the strongest design for PBD-803?"
          evidence={[
            "Leadership needs long-term aggregate trends.",
            "Individual-level events are needed only during approved bounded analytics projects.",
            "Aggregate reports can be produced before individual project data expires.",
            "Current workspaces have inconsistent individual-event retention.",
          ]}
          options={[
            "Use bounded individual-level project workspaces and preserve longer-lived approved aggregate trends.",
            "Keep all individual events for the entire multi-year reporting period.",
            "Delete all analytics data immediately.",
            "Allow each project to choose any retention design independently.",
          ]}
          bestAnswer={0}
          explanation="The architecture should separate detailed project data from long-term aggregate reporting so each follows its actual purpose."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design a Privacy Architecture Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for how product and
            architecture reviews build privacy into systems before launch and
            after material change.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Purpose before collection",
              "Field minimization",
              "Precision reduction",
              "Purpose separation",
              "Optional-feature isolation",
              "Access boundaries",
              "Supplier boundaries",
              "Narrow interface schemas",
              "Derived-data containment",
              "Aggregation patterns",
              "Retention architecture",
              "Temporary-workspace expiry",
              "Deletion design",
              "Backup/restore reconciliation",
              "Privacy-respecting defaults",
              "Metadata-only governance evidence",
              "Data ownership",
              "Control/evidence ownership",
              "Change triggers",
              "Architecture closure evidence",
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
            The strongest standard should make privacy a property of system
            behavior without forcing every architecture into one identical
            pattern.
          </p>
        </Section>

        <DefenderChecklist
          title="A16.8 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A16.8 Mini Quiz: Privacy by Design in Systems"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Privacy-by-Design Architecture Review"
          prompt="Create the eighth artifact for your A16 Privacy Engineering Review: a fictional Privacy-by-Design Architecture Review with at least twenty-five records. Include PBD ID, linked PRA/GOV IDs, system/service/feature, business purpose, collection point, data flow, access boundary, supplier boundary, retention behavior, derived-data behavior, defaults, observability/evidence, architecture issue, design options, selected recommendation, business impact, usability impact, security impact, implementation complexity, residual privacy risk, data owner, product/system owner, control owner, evidence owner, milestone, change trigger, and closure evidence."
          tips={[
            "Minimize at boundaries instead of after collection.",
            "Use narrow interfaces for internal and supplier data flows.",
            "Separate materially different purposes.",
            "Design retention and deletion before launch.",
            "Use metadata-rich but content-minimized evidence.",
            "Use fictional or synthetic architecture only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A16.9?"
        >
          <p className="leading-8">
            A16.9 focuses on Balancing Security, Privacy, and Usability. Before
            continuing, make sure you can explain why the strongest architecture
            is not always the one that minimizes one goal at the expense of all
            others.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can identify privacy design decisions at the user, service, interface, data, analytics, lifecycle, and governance layers.",
              "I can turn minimization into architecture rather than only policy.",
              "I can explain why narrow schemas and purpose separation reduce privacy risk.",
              "I can design lifecycle and evidence before launch.",
              "I can identify material changes that should reopen architecture review.",
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
          title="How to Make the Privacy-by-Design Architecture Review Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Show the current design first",
                detail:
                  "A reviewer should understand the existing data flow before evaluating the proposed change.",
              },
              {
                title: "Link design to purpose",
                detail:
                  "Every collection, interface, inference, and retention choice should support a specific approved need.",
              },
              {
                title: "Compare options",
                detail:
                  "Show why the selected architecture balances privacy, security, business value, and implementation complexity.",
              },
              {
                title: "Show boundaries",
                detail:
                  "Make collection points, service interfaces, supplier boundaries, and lifecycle boundaries visible.",
              },
              {
                title: "Show evidence",
                detail:
                  "Explain what proves the architecture actually enforces the intended privacy behavior.",
              },
              {
                title: "Show ownership",
                detail:
                  "Name the data, product, control, and evidence roles responsible for the design.",
              },
              {
                title: "Show residual risk",
                detail:
                  "Architecture reduces privacy risk but may leave tradeoffs or uncertainty.",
              },
              {
                title: "Connect forward",
                detail:
                  "A16.9 will compare privacy architecture against security, usability, accessibility, operations, and business goals.",
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
            Architecture exercises use fictional systems and synthetic evidence only
          </h2>
          <p className="mt-3 leading-7">
            Do not access real cloud accounts, private systems, confidential
            architecture diagrams, restricted datasets, internal logs, or real
            supplier environments. All architecture and evidence in this lesson
            are fictional and educational.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16.8 Privacy by Design in Systems Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured model for privacy-aware collection,
            service boundaries, narrow interfaces, defaults, aggregation,
            derived-data containment, lifecycle automation, evidence, ownership,
            and change review. Next, A16.9 focuses on Balancing Security,
            Privacy, and Usability.
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