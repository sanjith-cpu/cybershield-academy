import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;

const lessons = [
  {
    number: "A16.1",
    title: "Privacy Engineering Principles",
    route: `${modulePath}/privacy-engineering-principles`,
    focus:
      "Learn how privacy engineering turns broad privacy goals into concrete system requirements, design decisions, controls, evidence, and lifecycle reviews.",
    lab:
      "Review a fictional student-services platform and identify where privacy goals should influence architecture, data flow, access, defaults, and retention.",
    artifact:
      "Privacy Engineering Context Map",
  },
  {
    number: "A16.2",
    title: "Data Classification and Inventory",
    route: `${modulePath}/data-classification-and-inventory`,
    focus:
      "Build a practical model for understanding what data exists, why it exists, who owns it, how sensitive it is, where it flows, and which systems or suppliers depend on it.",
    lab:
      "Create a fictional data inventory that separates public, internal, confidential, sensitive, derived, and temporary information without using real personal records.",
    artifact:
      "Data Classification and Inventory Register",
  },
  {
    number: "A16.3",
    title: "Data Minimization and Purpose Limitation",
    route: `${modulePath}/data-minimization-and-purpose-limitation`,
    focus:
      "Evaluate whether a system collects, uses, shares, and keeps only the data that is reasonably necessary for a defined business purpose.",
    lab:
      "Compare fictional feature designs and recommend which fields, events, exports, and integrations can be removed, reduced, aggregated, or separated.",
    artifact:
      "Data Minimization Review",
  },
  {
    number: "A16.4",
    title: "Consent and User Expectations",
    route: `${modulePath}/consent-and-user-expectations`,
    focus:
      "Explore how meaningful notice, consent, user expectations, choice, defaults, transparency, and context affect privacy engineering decisions.",
    lab:
      "Review fictional onboarding and settings flows for clarity, relevance, choice, and alignment between what users expect and what the system actually does.",
    artifact:
      "Consent and Expectations Assessment",
  },
  {
    number: "A16.5",
    title: "Retention and Deletion Concepts",
    route: `${modulePath}/retention-and-deletion-concepts`,
    focus:
      "Design retention and deletion decisions that connect business need, legal or policy requirements, operational value, data lifecycle, evidence, backup behavior, and disposal.",
    lab:
      "Build a fictional retention schedule and identify which data should expire, archive, aggregate, anonymize, or be deleted when the original purpose ends.",
    artifact:
      "Retention and Deletion Schedule",
  },
  {
    number: "A16.6",
    title: "Privacy Risk Assessments",
    route: `${modulePath}/privacy-risk-assessments`,
    focus:
      "Assess privacy risk by connecting data, people, purpose, context, sharing, access, retention, user expectations, misuse, uncertainty, and business impact.",
    lab:
      "Evaluate fictional privacy scenarios and document risk, controls, uncertainty, residual concerns, ownership, and next actions.",
    artifact:
      "Privacy Risk Assessment Register",
  },
  {
    number: "A16.7",
    title: "Data Governance Roles",
    route: `${modulePath}/data-governance-roles`,
    focus:
      "Clarify the responsibilities of data owners, system owners, privacy teams, security teams, records teams, product teams, compliance teams, and business leaders.",
    lab:
      "Assign accountable roles across fictional data decisions and identify where unclear ownership creates privacy and governance risk.",
    artifact:
      "Data Governance Responsibility Matrix",
  },
  {
    number: "A16.8",
    title: "Privacy by Design in Systems",
    route: `${modulePath}/privacy-by-design-in-systems`,
    focus:
      "Apply privacy requirements early in system design using data-flow thinking, safe defaults, limited access, minimization, transparency, retention, separation, and review triggers.",
    lab:
      "Review a fictional product architecture and redesign selected data flows so privacy is built into the system rather than added after launch.",
    artifact:
      "Privacy-by-Design Architecture Review",
  },
  {
    number: "A16.9",
    title: "Balancing Security, Privacy, and Usability",
    route: `${modulePath}/balancing-security-privacy-and-usability`,
    focus:
      "Analyze tradeoffs when security, privacy, fraud prevention, analytics, support, usability, accessibility, and business goals pull a design in different directions.",
    lab:
      "Compare several fictional design options and justify a balanced recommendation using evidence, user impact, residual risk, and business need.",
    artifact:
      "Security-Privacy-Usability Decision Brief",
  },
  {
    number: "A16.10",
    title: "Privacy Engineering Lab",
    route: `${modulePath}/privacy-engineering-lab`,
    focus:
      "Integrate classification, inventory, minimization, purpose limitation, consent, retention, privacy risk, governance, privacy by design, and balanced decision-making.",
    lab:
      "Complete a full fictional privacy engineering review for a multi-service platform and produce a leadership-ready set of recommendations.",
    artifact:
      "Privacy Engineering Review",
  },
];

const objectives = [
  "Explain privacy engineering as a system-design discipline that converts privacy goals into requirements, architecture decisions, controls, evidence, ownership, and lifecycle review.",
  "Build and evaluate data inventories using classification, purpose, sensitivity, ownership, access, sharing, location, retention, and dependency information.",
  "Apply data minimization, purpose limitation, consent, transparency, retention, deletion, and privacy-by-design concepts to fictional system decisions.",
  "Assess privacy risk using data context, user expectations, controls, evidence quality, business impact, uncertainty, third-party dependencies, and residual risk.",
  "Define data-governance responsibilities across business, product, security, privacy, compliance, records, technology, and leadership roles.",
  "Produce a Privacy engineering review that balances privacy, security, usability, operational need, and evidence-based governance.",
];

const professionalRoles = [
  {
    role: "Privacy Engineer",
    responsibility:
      "Translates privacy goals into technical and process requirements, architecture decisions, defaults, data-flow controls, and validation evidence.",
  },
  {
    role: "Data Owner",
    responsibility:
      "Makes accountable decisions about data use, classification, sharing, retention, access, and acceptable business purpose.",
  },
  {
    role: "System / Product Owner",
    responsibility:
      "Owns the service lifecycle and ensures privacy requirements are included in product design, implementation, operation, and change.",
  },
  {
    role: "Security Architect",
    responsibility:
      "Helps design access, encryption, logging, segmentation, resilience, identity, and other safeguards that support both privacy and security.",
  },
  {
    role: "Privacy / Compliance Analyst",
    responsibility:
      "Interprets organizational requirements, reviews privacy risk, maps governance obligations, documents evidence, and supports accountable decisions.",
  },
  {
    role: "Records / Information Governance",
    responsibility:
      "Helps define approved retention, archival, legal hold, lifecycle, disposal, and evidence requirements.",
  },
  {
    role: "Data Steward",
    responsibility:
      "Supports data quality, metadata, classification, inventory accuracy, lineage, access understanding, and operational governance.",
  },
  {
    role: "Business Leader",
    responsibility:
      "Owns business outcomes, approves tradeoffs, funds treatment, accepts residual risk when authorized, and resolves cross-functional priorities.",
  },
];

const privacyDecisionLens = [
  {
    title: "Understand the data and purpose",
    description:
      "Know what data exists, who or what it relates to, why the organization needs it, where it flows, and which business objective depends on it.",
    questions: [
      "What information is collected, created, inferred, or received?",
      "What legitimate business purpose does each data element support?",
      "Which data is sensitive, temporary, derived, or no longer needed?",
    ],
  },
  {
    title: "Reduce unnecessary collection and exposure",
    description:
      "Minimize the data, access, sharing, precision, retention, and number of systems involved where business goals can still be met.",
    questions: [
      "Could the system achieve the same purpose with less data?",
      "Could access be narrower or temporary?",
      "Could data be aggregated, separated, tokenized, or deleted sooner?",
    ],
  },
  {
    title: "Align design with people and expectations",
    description:
      "Consider notice, consent, transparency, defaults, user control, context, fairness, accessibility, and whether system behavior matches reasonable expectations.",
    questions: [
      "Would a reasonable user understand this use?",
      "Are choices meaningful rather than confusing or coercive?",
      "Does the default protect privacy without breaking legitimate use?",
    ],
  },
  {
    title: "Govern the lifecycle",
    description:
      "Connect ownership, controls, evidence, retention, deletion, supplier dependencies, change triggers, exceptions, and review cadence.",
    questions: [
      "Who is accountable for the data decision?",
      "What evidence proves the control or lifecycle step works?",
      "What event should trigger reassessment?",
    ],
  },
  {
    title: "Make and communicate the decision",
    description:
      "Compare options, explain residual privacy risk, document uncertainty, assign owners, and state the recommendation in business language.",
    questions: [
      "What should change now?",
      "What residual privacy risk remains?",
      "Who owns the decision and the next action?",
    ],
  },
];

const fictionalSystem = [
  {
    id: "PRV-01",
    service: "Student Support Portal",
    data:
      "Profile details, support requests, service notes, communication preferences",
    purpose:
      "Coordinate support requests and route students to approved services",
    concern:
      "Several profile fields are collected but are not used by the current support workflow",
    currentState:
      "Minimization review needed",
    owner:
      "Student Services Product Owner",
  },
  {
    id: "PRV-02",
    service: "Learning Analytics Workspace",
    data:
      "Course activity, assignment trends, derived engagement indicators",
    purpose:
      "Support aggregate program improvement and approved educational analysis",
    concern:
      "Derived data and temporary workspaces have inconsistent retention documentation",
    currentState:
      "Retention and purpose review",
    owner:
      "Learning Analytics Owner",
  },
  {
    id: "PRV-03",
    service: "Partner Scheduling Integration",
    data:
      "Approved scheduling details and limited profile information",
    purpose:
      "Enable scheduling with an external service partner",
    concern:
      "Partner data scope has expanded over time without a recent purpose review",
    currentState:
      "Conditional review",
    owner:
      "Integration Product Owner",
  },
  {
    id: "PRV-04",
    service: "Notification Preferences",
    data:
      "Email, mobile notification preference, communication history",
    purpose:
      "Deliver requested service updates",
    concern:
      "Default settings are clear, but the retention period for old preference history is undefined",
    currentState:
      "Monitor / define retention",
    owner:
      "Communications Product Owner",
  },
  {
    id: "PRV-05",
    service: "Support Quality Dashboard",
    data:
      "Aggregated service metrics and de-identified operational trends",
    purpose:
      "Measure response quality and staffing demand",
    concern:
      "Low privacy risk if aggregation remains strong and source-level exports stay restricted",
    currentState:
      "Monitor",
    owner:
      "Operations Analytics Owner",
  },
  {
    id: "PRV-06",
    service: "Temporary Research Export",
    data:
      "Approved de-identified sample with project-specific metadata",
    purpose:
      "Support a time-bounded internal research exercise",
    concern:
      "Project closeout must prove deletion of temporary copies and derived workspaces",
    currentState:
      "Conditional until closure evidence",
    owner:
      "Research Program Owner",
  },
];

const evidencePreview = [
  {
    type: "Data inventory record",
    example:
      "DATA-114 — support_profile.phone_number — purpose=appointment_contact — class=Confidential — owner=Student Services",
    decisionValue:
      "Shows what the field is, why it exists, how sensitive it is, and who owns the decision.",
  },
  {
    type: "Purpose review",
    example:
      "PUR-032 — preferred_language — active purpose=service communication — secondary analytics use=not approved",
    decisionValue:
      "Separates the original business purpose from additional uses that require separate review.",
  },
  {
    type: "Retention evidence",
    example:
      "RET-041 — temporary_export — retention=30_days — deletion_job=current — exceptions=1",
    decisionValue:
      "Supports whether lifecycle requirements are actually operating.",
  },
  {
    type: "Consent / expectation record",
    example:
      "EXP-019 — optional notifications — default=off — user_choice=explicit — explanation=current",
    decisionValue:
      "Shows how system behavior, default settings, and user expectations align.",
  },
  {
    type: "Privacy risk record",
    example:
      "PRA-008 — partner data scope expansion — impact=Medium-High — confidence=Moderate — state=Treat",
    decisionValue:
      "Connects a privacy concern to evidence, uncertainty, ownership, and treatment.",
  },
  {
    type: "Governance decision",
    example:
      "GOV-016 — delete unused support demographic field — owner=Student Services — due=next_release",
    decisionValue:
      "Turns privacy analysis into an accountable product decision.",
  },
];

const portfolioSections = [
  {
    title: "Executive Summary",
    purpose:
      "Explain the fictional system, privacy goals, top findings, priority actions, major tradeoffs, evidence confidence, and leadership decisions.",
  },
  {
    title: "Data Classification and Inventory",
    purpose:
      "Document major data elements, purpose, sensitivity, owner, access, sharing, source, location, retention, and dependencies.",
  },
  {
    title: "Data Minimization Review",
    purpose:
      "Show where data collection, precision, access, sharing, storage, or retention can be reduced while preserving legitimate business value.",
  },
  {
    title: "Consent and Expectations Assessment",
    purpose:
      "Evaluate notice, choice, defaults, context, transparency, accessibility, user understanding, and unexpected secondary use.",
  },
  {
    title: "Retention and Deletion Schedule",
    purpose:
      "Define how long data is kept, why, what happens at expiry, how deletion is evidenced, and what exceptions or backup considerations remain.",
  },
  {
    title: "Privacy Risk Assessment Register",
    purpose:
      "Connect privacy scenarios to impact, likelihood, evidence, uncertainty, controls, ownership, residual risk, treatment, and review triggers.",
  },
  {
    title: "Data Governance Responsibility Matrix",
    purpose:
      "Clarify who owns data decisions, system operation, security controls, privacy review, evidence, retention, remediation, and leadership approval.",
  },
  {
    title: "Privacy-by-Design Architecture Review",
    purpose:
      "Show how minimization, access boundaries, separation, safe defaults, transparency, deletion, logging, and supplier decisions affect system design.",
  },
  {
    title: "Security-Privacy-Usability Decision Brief",
    purpose:
      "Compare realistic design options and explain the recommended balance among privacy, security, usability, accessibility, operations, and business need.",
  },
  {
    title: "Privacy Engineering Review",
    purpose:
      "Integrate the full A16 analysis into a decision-ready package with findings, priorities, owners, milestones, evidence, residual risk, and recommendations.",
  },
];

const moduleQuestions = [
  "What data does the organization truly need?",
  "What business purpose justifies each important data element?",
  "What information is more sensitive because of context, combination, inference, or user expectation?",
  "Who owns the data decision?",
  "Which systems, teams, and suppliers can access the data?",
  "Can the same business objective be achieved with less data, lower precision, or shorter retention?",
  "Does the system behave the way a reasonable user would expect?",
  "Are defaults, explanations, and choices understandable and meaningful?",
  "What evidence proves retention and deletion actually happen?",
  "What privacy risk remains after current controls?",
  "Which design decisions protect privacy by default?",
  "Where do security, privacy, usability, accessibility, and business goals create real tradeoffs?",
];

const safetyBoundaries = [
  "Use fictional or synthetic data only. Do not use real student, employee, customer, medical, financial, or other private records.",
  "Do not collect, infer, expose, deanonymize, or attempt to identify real people from datasets.",
  "Do not access private accounts, internal databases, confidential files, or restricted organizational systems.",
  "Do not design manipulative consent experiences, hidden tracking, coercive defaults, or deceptive user interfaces.",
  "Do not provide methods for bypassing privacy controls, defeating deletion, evading consent, or hiding unauthorized data use.",
  "Do not treat this module as legal advice. Privacy law and regulatory interpretation require qualified organizational or legal review.",
  "Keep every lab focused on safe architecture review, fictional inventories, synthetic evidence, governance, and privacy-respecting design.",
];

const commonMistakes = [
  {
    mistake: "Privacy means secrecy only",
    correction:
      "Privacy also includes purpose, context, collection, access, sharing, retention, control, transparency, expectations, and lifecycle.",
  },
  {
    mistake: "Collect everything now, decide later",
    correction:
      "Unnecessary collection increases exposure, governance cost, retention burden, and future misuse risk.",
  },
  {
    mistake: "Consent solves every privacy issue",
    correction:
      "Consent can be important, but minimization, purpose, security, retention, fairness, usability, and governance still matter.",
  },
  {
    mistake: "Encrypted data has no privacy risk",
    correction:
      "Encryption reduces some exposure, but privacy concerns can still come from unnecessary collection, excessive access, misuse, retention, or unexpected sharing.",
  },
  {
    mistake: "Deletion means one database row disappeared",
    correction:
      "Real deletion decisions may involve replicas, temporary files, exports, derived datasets, backups, supplier copies, and evidence of lifecycle completion.",
  },
  {
    mistake: "Security and privacy are opposites",
    correction:
      "Strong systems often support both, but some designs create tradeoffs that require explicit reasoning rather than slogans.",
  },
  {
    mistake: "The privacy team owns every privacy risk",
    correction:
      "Privacy teams advise and govern, but business and product owners often own the underlying data use and business consequence.",
  },
  {
    mistake: "A one-time inventory stays accurate forever",
    correction:
      "Data flows change as products, suppliers, analytics, features, teams, and retention practices evolve.",
  },
];

const moduleMilestones = [
  {
    stage: "Foundation",
    lessons: "A16.1–A16.2",
    result:
      "Understand privacy engineering and establish a trustworthy map of data, purpose, classification, ownership, and flow.",
  },
  {
    stage: "Data lifecycle decisions",
    lessons: "A16.3–A16.5",
    result:
      "Reduce unnecessary data, align use with purpose and user expectations, and define defensible retention and deletion.",
  },
  {
    stage: "Governance and risk",
    lessons: "A16.6–A16.7",
    result:
      "Assess privacy risk and assign accountable decision, control, evidence, and remediation roles.",
  },
  {
    stage: "System design",
    lessons: "A16.8–A16.9",
    result:
      "Apply privacy by design and make balanced tradeoffs among privacy, security, usability, accessibility, and business need.",
  },
  {
    stage: "Capstone",
    lessons: "A16.10",
    result:
      "Produce the full Privacy Engineering Review and prepare for the 25-question A16 Module Test.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function PrivacyEngineeringAndDataGovernancePage() {
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
              Module A16
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Governance and Automation
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Module A16
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy Engineering and Data Governance
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how privacy becomes part of system design rather than a
            document added at the end. You will work with data classification,
            inventories, minimization, purpose limitation, consent, user
            expectations, retention, deletion, privacy risk, governance roles,
            and privacy-by-design decisions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200">
                Lessons
              </p>
              <p className="mt-2 text-3xl font-black text-white">10</p>
              <p className="mt-2 text-sm leading-6 text-cyan-100">
                From privacy foundations to a full Privacy Engineering Lab.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                Module Test
              </p>
              <p className="mt-2 text-3xl font-black text-white">25</p>
              <p className="mt-2 text-sm leading-6 text-purple-100">
                Questions across classification, minimization, consent,
                retention, governance, and privacy-by-design decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Portfolio Outcome
              </p>
              <p className="mt-2 text-xl font-black text-white">
                Privacy engineering review
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                A decision-ready privacy engineering and data-governance package.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessons[0].route}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A16.1
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Advanced Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Module Snapshot"
            title="Privacy Engineering Is About Responsible Data Decisions"
            description="A16 treats privacy as a system and governance problem: what data exists, why it is needed, how it is classified, how long it is kept, who can use it, what users reasonably expect, what evidence proves the lifecycle works, and who owns the final decision."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Main Question
              </p>
              <p className="mt-3 text-xl font-black leading-8 text-blue-50">
                How can an organization use data for legitimate business goals
                while reducing unnecessary collection, exposure, retention,
                surprise, and misuse?
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Safety Boundary
              </p>
              <p className="mt-3 leading-8 text-yellow-50">
                Use fictional or synthetic data only. Do not collect, infer,
                deanonymize, expose, or investigate real people or private
                datasets. This module teaches defensive privacy engineering and
                governance—not surveillance, evasion, or unauthorized access.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Module Outcomes"
            title="Six Capabilities You Will Build"
            description="By the end of A16, you should be able to connect privacy principles to real system-design and governance decisions instead of treating privacy as a checklist."
          />

          <div className="mt-7 grid gap-5">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Module-Level Decision Lens"
            title="A Natural Way to Think About Privacy Decisions"
            description="These five ideas organize the module, but they are not a rigid template that every lesson must repeat. Some lessons focus on data, some on users, some on lifecycle, some on governance, and some on architecture."
          />

          <div className="mt-7 grid gap-5">
            {privacyDecisionLens.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-cyan-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-cyan-100">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {item.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-sm leading-6 text-slate-200"
                    >
                      {question}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Professional Roles"
            title="Who Makes Privacy Engineering Work"
            description="Privacy decisions are cross-functional. Strong programs separate advisory roles, control operation, data ownership, product ownership, records responsibility, and final business accountability."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {professionalRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.responsibility}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Lesson Path"
            title="Ten Advanced Lessons"
            description="Each lesson contributes a portfolio artifact. A16.10 combines the previous work into the complete Privacy Engineering Review."
          />

          <div className="mt-8 grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                        {lesson.number}
                      </span>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                        Portfolio: {lesson.artifact}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                          Focus
                        </p>
                        <p className="mt-2 text-sm leading-7 text-blue-50">
                          {lesson.focus}
                        </p>
                      </div>

                      <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                          Defensive Lab
                        </p>
                        <p className="mt-2 text-sm leading-7 text-purple-50">
                          {lesson.lab}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={lesson.route}
                    className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-center font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Fictional Enterprise Context"
            title="Northbridge Privacy Engineering Review"
            description="A16 uses one consistent fictional environment so students can see how data decisions connect across products, analytics, integrations, retention, users, and governance."
          />

          <div className="mt-7 grid gap-5">
            {fictionalSystem.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.currentState}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.service}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Data", item.data],
                    ["Purpose", item.purpose],
                    ["Privacy concern", item.concern],
                    ["Accountable owner", item.owner],
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
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Evidence Preview"
            title="Privacy Decisions Should Be Traceable"
            description="A16 repeatedly asks what evidence supports a privacy conclusion. The examples below are fictional, provider-neutral records designed to show how data decisions become reviewable."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {evidencePreview.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-3 rounded-xl border border-slate-700 bg-slate-950/70 p-4 font-mono text-xs leading-6 text-slate-200">
                  {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Decision value: {item.decisionValue}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="What You Will Keep Asking"
            title="Twelve Privacy Engineering Questions"
            description="These questions appear in different forms throughout the module because they reveal whether a system is collecting, using, sharing, and retaining data responsibly."
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {moduleQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Common Mistakes"
            title="Eight Privacy Engineering Traps"
            description="Strong privacy engineering avoids simplistic rules. The goal is to reason about data, purpose, users, controls, evidence, lifecycle, and business need together."
          />

          <div className="mt-7 grid gap-5">
            {commonMistakes.map((item, index) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-white">{item.mistake}</h3>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better thinking: {item.correction}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Portfolio Outcome"
            title="Privacy engineering review"
            description="The portfolio is cumulative. Each lesson contributes one section so A16.10 becomes a complete, leadership-ready review rather than a disconnected set of worksheets."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {portfolioSections.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-purple-50">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.purpose}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6">
            <p className="font-black text-emerald-50">
              Final package standard
            </p>
            <p className="mt-2 leading-8 text-emerald-100">
              The strongest submission should show data purpose, classification,
              minimization, user expectations, retention, governance,
              architecture, evidence confidence, residual privacy risk,
              tradeoffs, accountable owners, milestones, and clear
              recommendations.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Module Progression"
            title="How the Ten Lessons Build"
          />

          <div className="mt-7 grid gap-5">
            {moduleMilestones.map((item, index) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[90px_180px_1fr] md:items-start">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-black text-cyan-50">{item.stage}</p>
                    <p className="mt-1 text-sm text-cyan-200">{item.lessons}</p>
                  </div>
                  <p className="text-sm leading-7 text-cyan-100">
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6 md:p-8">
          <SectionTitle
            eyebrow="Safety and Ethics"
            title="Privacy Engineering Protects People and Data"
            description="The entire A16 module stays within safe, fictional, defensive boundaries."
          />

          <div className="mt-7 grid gap-4">
            {safetyBoundaries.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-slate-950/40 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <SectionTitle
            eyebrow="Module Test"
            title="A16 Assessment — 25 Questions"
            description="After A16.10, complete one 25-question module assessment covering privacy engineering, classification, minimization, consent, retention, privacy risk, governance, and privacy-by-design decisions."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-6">
              <p className="font-black text-blue-50">Assessment emphasis</p>
              <p className="mt-2 leading-8 text-blue-100">
                Expect scenario-based questions that ask you to choose the
                strongest privacy decision, identify weak evidence, distinguish
                purpose from secondary use, recognize excessive collection,
                evaluate retention, assign governance roles, and balance privacy
                with security and usability.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <p className="font-black text-emerald-50">
                Portfolio before test
              </p>
              <p className="mt-2 leading-8 text-emerald-100">
                Finish the Privacy Engineering Review first. The portfolio
                artifacts make the test easier because the questions reuse the
                same decision logic you practiced in the labs.
              </p>
            </div>
          </div>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-flex rounded-xl border border-purple-400/40 bg-purple-400/10 px-5 py-3 font-black text-purple-100 transition hover:bg-purple-400/20"
          >
            Open A16 Module Test
          </Link>
        </section>

        <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Begin Module A16
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Start With A16.1 — Privacy Engineering Principles
          </h2>
          <p className="mt-3 max-w-4xl leading-8 text-cyan-50">
            A16.1 establishes the foundation: privacy goals, system context,
            data purpose, lifecycle thinking, evidence, ownership, and the role
            of privacy engineering in architecture and product decisions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessons[0].route}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A16.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}