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
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = `${modulePath}/web-security-review-process`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Apply the complete A10 defensive workflow to one fictional web architecture using scope, trust boundaries, identity, sessions, authorization, input/output contracts, APIs, browser protections, secrets/configuration, and monitoring.",
  "Evaluate a supplied fictional evidence set by separating observation, interpretation, Unknowns, source-health limits, alert lineage, findings, business impact, remediation, validation, and residual risk.",
  "Build a prioritized fictional remediation plan with accountable owners, dependencies, rollback conditions, validation criteria, monitoring updates, and closure evidence.",
  "Communicate the same fictional case appropriately to engineers, product owners, operations, identity teams, governance/privacy reviewers, leadership, and a public-safe portfolio audience.",
  "Produce the module portfolio outcome: a complete fictional Web Defense Architecture Review package that demonstrates professional defensive reasoning without offensive testing or sensitive real-world details.",
];

const vocabulary = [
  ["Capstone review", "A fictional integrated assessment that combines all major A10 defensive control areas into one evidence-based architecture review."],
  ["Architecture decision", "A fictional choice about components, boundaries, trust, data, identities, APIs, suppliers, privilege, monitoring, resilience, or recovery."],
  ["Control dependency", "A fictional relationship in which one defensive control relies on another service, owner, source, policy, or workflow to work correctly."],
  ["Cross-control finding", "A fictional issue that affects more than one A10 control area, such as a supplier change that alters API scope, browser policy, privacy, secrets, and monitoring."],
  ["Evidence lineage", "The relationship showing where fictional evidence originated and whether observations are independent, copied, transformed, delayed, or derived."],
  ["Source-health limitation", "A fictional condition that reduces how strongly the review can rely on a telemetry or configuration source."],
  ["Compensating control", "A fictional defensive measure that reduces risk when the preferred control cannot yet be fully implemented."],
  ["Remediation dependency", "A fictional prerequisite that must be addressed before another remediation can be completed safely."],
  ["Validation evidence", "Fictional proof that a remediation achieved its intended security and business outcome."],
  ["Residual risk", "Risk remaining after the fictional remediation, exception, or compensating control is applied."],
  ["Closure state", "The fictional review status showing whether an item is Open, Planned, In Progress, Validation Pending, Accepted, or Closed."],
  ["Leadership decision", "A fictional priority, resource, timeline, exception, or risk-acceptance decision supported by the review."],
];

const architecture = [
  {
    id: "ARCH-01",
    component: "Browser Client C",
    role: "Fictional user-facing browser environment.",
    boundary: "Public / authenticated boundary",
    assets: "Session state, user input, browser policy state.",
    dependencies: "Application Service B and Identity Service I.",
    primaryControls: "A10.2, A10.4, A10.6, A10.8",
  },
  {
    id: "ARCH-02",
    component: "Application Service B",
    role: "Primary fictional web application workflow.",
    boundary: "Application boundary",
    assets: "Case workflow, authorization requests, API calls, error behavior.",
    dependencies: "Identity I, Authorization A, API P, Data D, Config C, Monitoring M.",
    primaryControls: "A10.1, A10.3, A10.4, A10.5, A10.8",
  },
  {
    id: "ARCH-03",
    component: "Identity Service I",
    role: "Fictional authentication, recovery, and session assurance service.",
    boundary: "Identity boundary",
    assets: "Identity/session metadata and recovery state.",
    dependencies: "Application B, Admin Console F, Monitoring M.",
    primaryControls: "A10.2, A10.8",
  },
  {
    id: "ARCH-04",
    component: "Authorization Policy A",
    role: "Fictional decision service for protected actions.",
    boundary: "Policy boundary",
    assets: "Roles, ownership rules, decisions, exception references.",
    dependencies: "Application B, API P, Identity I.",
    primaryControls: "A10.3, A10.5, A10.8",
  },
  {
    id: "ARCH-05",
    component: "API Service P",
    role: "Purpose-limited fictional API layer.",
    boundary: "Service boundary",
    assets: "Case status, reporting, preference, admin, recovery, and supplier workflows.",
    dependencies: "Application B, Authorization A, Data D, Supplier S, Monitoring M.",
    primaryControls: "A10.3, A10.5, A10.8",
  },
  {
    id: "ARCH-06",
    component: "Data Store D",
    role: "Protected fictional application data store.",
    boundary: "Data boundary",
    assets: "Cases, profiles, report data, approved configuration references.",
    dependencies: "Application B and API P.",
    primaryControls: "A10.1, A10.3, A10.4, A10.5",
  },
  {
    id: "ARCH-07",
    component: "Admin Console F",
    role: "Separated fictional privileged administration workflow.",
    boundary: "Privileged boundary",
    assets: "Configuration and administrative functions.",
    dependencies: "Identity I, Authorization A, Config C, Monitoring M.",
    primaryControls: "A10.1, A10.2, A10.3, A10.7, A10.8",
  },
  {
    id: "ARCH-08",
    component: "Configuration Service C",
    role: "Fictional owner-approved security-relevant configuration state.",
    boundary: "Configuration boundary",
    assets: "Browser profile, logging profile, API profile, feature state, supplier state.",
    dependencies: "Admin F, Application B, Monitoring M.",
    primaryControls: "A10.6, A10.7, A10.8",
  },
  {
    id: "ARCH-09",
    component: "Monitoring M",
    role: "Privacy-aware fictional telemetry and source-health layer.",
    boundary: "Monitoring boundary",
    assets: "Minimized identity, access, API, browser, config, and secret metadata.",
    dependencies: "All approved components.",
    primaryControls: "A10.8",
  },
  {
    id: "ARCH-10",
    component: "Supplier S",
    role: "Purpose-limited fictional external status integration.",
    boundary: "External trust boundary",
    assets: "Service-status metadata only.",
    dependencies: "API P and Monitoring M.",
    primaryControls: "A10.1, A10.5, A10.6, A10.7, A10.8",
  },
  {
    id: "ARCH-11",
    component: "Recovery R",
    role: "Fictional staged recovery and validation service.",
    boundary: "Recovery boundary",
    assets: "Recovery state, temporary access context, dependency-health summaries.",
    dependencies: "Identity I, Application B, Config C, Monitoring M.",
    primaryControls: "A10.1, A10.2, A10.7, A10.8",
  },
];

const caseTimeline = [
  ["CASE-01", "08:00", "Release R-3 is approved for staged production rollout."],
  ["CASE-02", "08:15", "Reporting UI begins using API V2 for Team Blue aggregate reports."],
  ["CASE-03", "08:20", "API scope denials increase for several legitimate Team Blue users."],
  ["CASE-04", "08:25", "Application support reports that users see a generic authorization error."],
  ["CASE-05", "08:30", "Authorization matrix shows Team Blue access should be allowed for those users."],
  ["CASE-06", "08:35", "Role-mapping evidence suggests one application-to-policy mapping may still reference the previous release label."],
  ["CASE-07", "08:40", "Browser-policy pilot remains Healthy for sign-in, reporting, accessibility, and logout."],
  ["CASE-08", "08:45", "Supplier S monitoring source becomes Unknown during an ownership transition."],
  ["CASE-09", "08:50", "Supplier API scope remains purpose-limited to service-status metadata."],
  ["CASE-10", "09:00", "Configuration State C becomes Degraded during planned maintenance."],
  ["CASE-11", "09:05", "A configuration dashboard still shows Feature F-7 Enabled, while the approved baseline says Disabled."],
  ["CASE-12", "09:10", "Change record CHG-44 documents an approved temporary F-7 enablement ending at 09:30."],
  ["CASE-13", "09:20", "Secret metadata shows Application-to-Service Credential Class is Rotation Pending as planned."],
  ["CASE-14", "09:25", "One dependent service has not yet posted validation evidence for the new secret reference state."],
  ["CASE-15", "09:30", "A proposed Internal Explanation field remains excluded from user notifications pending privacy review."],
  ["CASE-16", "09:40", "Monitoring confirms three dashboard alerts about CHG-44 all derive from one underlying authorization event."],
  ["CASE-17", "09:45", "Identity source independently confirms the privileged session linked to CHG-44."],
  ["CASE-18", "10:00", "Leadership requests a concise risk summary and remediation priorities."],
];

const evidenceRegister = [
  {
    id: "EV-01",
    source: "Architecture Map",
    health: "Current",
    observation: "Eleven components, trust boundaries, owners, and dependencies are documented.",
    supports: "Architecture scope and cross-control reasoning.",
    limits: "Does not prove runtime state.",
    lineage: "Independent architecture record.",
  },
  {
    id: "EV-02",
    source: "Authorization Matrix",
    health: "Current",
    observation: "Affected Team Blue users should be allowed to generate Team Blue aggregate reports.",
    supports: "Expected authorization result for the reporting workflow.",
    limits: "Does not prove the application passed the correct role context.",
    lineage: "Independent policy record.",
  },
  {
    id: "EV-03",
    source: "Application Role-Mapping Record",
    health: "Current",
    observation: "One mapping references the previous release label rather than R-3.",
    supports: "Possible application-policy mapping mismatch.",
    limits: "Does not by itself prove every denial has this cause.",
    lineage: "Independent application configuration record.",
  },
  {
    id: "EV-04",
    source: "API Events P",
    health: "Conditional",
    observation: "Team Blue scope denials increased after R-3 rollout.",
    supports: "A change-correlated API authorization symptom.",
    limits: "Supplier-related events may be delayed; timing does not prove causation.",
    lineage: "Independent API telemetry.",
  },
  {
    id: "EV-05",
    source: "Browser Policy Events H",
    health: "Healthy",
    observation: "Sign-in, reporting UI rendering, accessibility, and logout remain within pilot expectations.",
    supports: "No current evidence of a browser-policy compatibility regression in those tested journeys.",
    limits: "Does not prove authorization or API correctness.",
    lineage: "Independent browser-policy telemetry.",
  },
  {
    id: "EV-06",
    source: "Supplier Status S",
    health: "Unknown",
    observation: "No reliable current supplier-status events are available during ownership transition.",
    supports: "A visibility and ownership gap.",
    limits: "Cannot prove supplier health or failure.",
    lineage: "Single unhealthy supplier source.",
  },
  {
    id: "EV-07",
    source: "Configuration State C",
    health: "Degraded",
    observation: "Feature F-7 is reported Enabled, but the latest snapshot is delayed.",
    supports: "Possible state requiring reconciliation.",
    limits: "Freshness is reduced.",
    lineage: "Single degraded configuration source.",
  },
  {
    id: "EV-08",
    source: "Change Record CHG-44",
    health: "Current",
    observation: "F-7 temporary enablement is approved until 09:30 with an identified privileged session.",
    supports: "The observed F-7 state may be expected during the approved window.",
    limits: "Does not prove state returned to baseline after 09:30.",
    lineage: "Independent change-control record.",
  },
  {
    id: "EV-09",
    source: "Identity Events I",
    health: "Healthy",
    observation: "A privileged session linked to CHG-44 existed during the approved window.",
    supports: "Independent confirmation of the approved privileged-session context.",
    limits: "Does not prove every configuration effect was correct.",
    lineage: "Independent identity telemetry.",
  },
  {
    id: "EV-10",
    source: "Secret Metadata K",
    health: "Healthy",
    observation: "Application-to-Service Credential Class is Rotation Pending; one consumer validation is missing.",
    supports: "Rotation is in progress but not yet ready for closure.",
    limits: "Does not reveal or test secret values.",
    lineage: "Independent secret-lifecycle metadata.",
  },
  {
    id: "EV-11",
    source: "Input/Output Review",
    health: "Current",
    observation: "Internal Explanation field is blocked from user notifications pending privacy and output-context approval.",
    supports: "A preventive hold is working as intended.",
    limits: "Does not prove future implementations will preserve the rule.",
    lineage: "Independent design-review record.",
  },
  {
    id: "EV-12",
    source: "Alert Lineage Map",
    health: "Healthy",
    observation: "Three dashboard alerts for CHG-44 derive from one Authorization event.",
    supports: "Those three alerts are not independent corroboration.",
    limits: "Does not determine whether CHG-44 itself is appropriate.",
    lineage: "Derived-alert mapping.",
  },
];

const controlReview = [
  {
    area: "A10.1 Architecture",
    state: "Strong with one supplier visibility dependency",
    evidence: "EV-01, EV-06",
    conclusion: "Core boundaries and separation are documented. Supplier dependency visibility needs ownership restoration.",
    owner: "Architecture Owner + Supplier Owner",
  },
  {
    area: "A10.2 Authentication / Sessions",
    state: "Strong",
    evidence: "EV-09",
    conclusion: "Privileged CHG-44 session is independently confirmed and linked to an approved change window.",
    owner: "Identity Owner",
  },
  {
    area: "A10.3 Authorization",
    state: "Needs Remediation",
    evidence: "EV-02, EV-03, EV-04",
    conclusion: "Team Blue reporting denials conflict with expected policy and likely involve an application-to-policy role-mapping mismatch.",
    owner: "Application Owner + Authorization Owner",
  },
  {
    area: "A10.4 Input / Output",
    state: "Preventive Hold Working",
    evidence: "EV-11",
    conclusion: "Internal Explanation remains blocked from user-facing output until privacy review is complete.",
    owner: "Application Owner + Privacy Reviewer",
  },
  {
    area: "A10.5 API Security",
    state: "Needs Validation",
    evidence: "EV-02, EV-04, EV-06",
    conclusion: "API purpose and scope remain bounded, but reporting authorization behavior and supplier visibility require review.",
    owner: "API Owner",
  },
  {
    area: "A10.6 Browser Protections",
    state: "Strong",
    evidence: "EV-05",
    conclusion: "Key browser and accessibility journeys remain Healthy in supplied evidence.",
    owner: "Application Owner",
  },
  {
    area: "A10.7 Secrets / Configuration",
    state: "Validation Pending",
    evidence: "EV-07, EV-08, EV-09, EV-10",
    conclusion: "F-7 may be expected during CHG-44, but post-window state needs revalidation; secret rotation remains open until all consumers validate.",
    owner: "Configuration Owner + Secret Owner",
  },
  {
    area: "A10.8 Monitoring",
    state: "Mixed",
    evidence: "EV-04, EV-05, EV-06, EV-07, EV-09, EV-10, EV-12",
    conclusion: "Most sources are useful, but supplier is Unknown, configuration is Degraded, and alert lineage must be respected.",
    owner: "Monitoring Owner",
  },
];

const findings = [
  {
    id: "LAB-F01",
    title: "Reporting role mapping is inconsistent with approved authorization policy",
    observation: "Affected Team Blue users should be allowed, while application mapping evidence references a previous release label and API denials rose after R-3.",
    confidence: "High",
    impact: "Legitimate users may lose access to approved reporting workflows.",
    priority: "High",
    owner: "Application Owner + Authorization Owner",
    remediation: "Correct the application-to-policy mapping for R-3 through the approved change process and review other release-label mappings.",
    validation: "Fictional Team Blue allow cases succeed, Team Gold deny cases remain denied, source health is Healthy, and no new over-broad access appears.",
    residual: "Future release-to-policy mapping changes remain a recertification trigger.",
  },
  {
    id: "LAB-F02",
    title: "Supplier status visibility is Unknown during ownership transition",
    observation: "Supplier Status S has Unknown source health while API scope remains purpose-limited.",
    confidence: "High",
    impact: "Defenders cannot make strong current supplier-status claims.",
    priority: "High",
    owner: "Supplier Owner + Monitoring Owner",
    remediation: "Complete ownership transfer, restore source health, define alternate evidence, and revalidate expected supplier-status telemetry.",
    validation: "Source becomes Healthy/Conditional with documented owner, coverage, event expectations, and successful fictional validation.",
    residual: "External supplier dependency risk remains.",
  },
  {
    id: "LAB-F03",
    title: "Post-change Feature F-7 state is not yet confirmed",
    observation: "F-7 was approved Enabled until 09:30, but Configuration C is Degraded and has not confirmed return to baseline.",
    confidence: "Medium",
    impact: "A temporary security-relevant feature state could persist longer than intended.",
    priority: "Medium",
    owner: "Configuration Owner",
    remediation: "Restore configuration source health and compare current F-7 state against the baseline and CHG-44 closure record.",
    validation: "Healthy source confirms F-7 matches the approved post-change state.",
    residual: "Future maintenance windows need alternate evidence for closure.",
  },
  {
    id: "LAB-F04",
    title: "Application-to-Service secret rotation is not ready for closure",
    observation: "Rotation is planned and in progress, but one dependent consumer lacks validation evidence.",
    confidence: "High",
    impact: "Retiring the previous secret state too early could disrupt a legitimate service dependency.",
    priority: "Medium",
    owner: "Secret Owner + Application Owner",
    remediation: "Obtain consumer validation, confirm dependency health, then retire the previous state under the approved rotation plan.",
    validation: "All approved consumers use the new reference state, service health is Healthy, and old state is Retired.",
    residual: "Secret lifecycle requires future rotation and owner review.",
  },
  {
    id: "LAB-F05",
    title: "Derived alert count could overstate evidence strength",
    observation: "Three dashboard alerts for CHG-44 come from one underlying Authorization event.",
    confidence: "High",
    impact: "Reviewers could incorrectly treat alert volume as independent corroboration.",
    priority: "Medium",
    owner: "Monitoring Owner",
    remediation: "Collapse derived alerts into one lineage group and display independent source count separately.",
    validation: "Dashboard distinguishes alert count, underlying-event count, and independent-source count.",
    residual: "Future new alert pipelines must preserve lineage metadata.",
  },
];

const remediationRoadmap = [
  ["Immediate", "LAB-F01", "Correct reporting role mapping under approved change control.", "Application + Authorization", "Restore legitimate Team Blue reporting without expanding Team Gold access."],
  ["Immediate", "LAB-F02", "Complete supplier monitoring ownership and restore visibility.", "Supplier + Monitoring", "Source health and alternate evidence become defined."],
  ["Near Term", "LAB-F03", "Revalidate F-7 after Configuration C returns Healthy.", "Configuration", "Baseline alignment is confirmed."],
  ["Near Term", "LAB-F04", "Finish remaining consumer validation before retiring old secret state.", "Secret + Application", "Rotation closes without service disruption."],
  ["Near Term", "LAB-F05", "Update dashboard lineage presentation.", "Monitoring", "Derived alerts are not overcounted."],
  ["Planned", "Cross-Control", "Add release-change trigger requiring authorization mapping, API version, browser policy, config baseline, and monitoring review.", "Architecture + Governance", "Future releases inherit a repeatable cross-control review."],
];

const validationBoard = [
  ["VAL-01", "Authorization fix", "Team Blue allowed, Team Gold denied, no broad privilege increase.", "Authorization + API + Application evidence", "Application Owner"],
  ["VAL-02", "Supplier visibility", "Healthy/Conditional source, owner assigned, expected events visible, alternate evidence documented.", "Supplier + Monitoring evidence", "Supplier Owner"],
  ["VAL-03", "F-7 closure", "Current state matches approved post-change baseline.", "Healthy configuration source + CHG-44 closure", "Configuration Owner"],
  ["VAL-04", "Secret rotation", "All consumers validate new reference state; old state retired.", "Secret metadata + service health", "Secret Owner"],
  ["VAL-05", "Alert lineage", "Dashboard separates derived alerts from independent sources.", "Monitoring dashboard review", "Monitoring Owner"],
  ["VAL-06", "Internal Explanation", "Field remains excluded from user notification until approved output contract exists.", "Field/output review", "Application Owner + Privacy Reviewer"],
];

const audienceDeliverables = [
  ["Engineering", "Exact architecture, evidence IDs, control findings, configuration/authorization dependencies, remediation, validation, rollback."],
  ["Product", "Affected reporting workflow, user impact, release dependency, priority, expected restoration, residual risk."],
  ["Identity / Authorization", "Role mapping, privileged session, object/team scope, service identity, recertification implications."],
  ["Operations", "F-7 closure, secret rotation, supplier visibility, monitoring restoration, rollback readiness."],
  ["Governance / Privacy", "Supplier ownership, monitoring gap, output-field privacy hold, exceptions, residual risk."],
  ["Leadership", "Top three decisions, business impact, confidence, owners, timeline, blockers, residual risk."],
  ["Public-Safe Portfolio", "Fictional architecture, review workflow, bounded findings, owner/remediation/validation model, no sensitive operational detail."],
];

const leadershipSummary = [
  "Primary business issue: legitimate Team Blue reporting is being denied after Release R-3, with high-confidence evidence of an application-to-policy mapping problem.",
  "Primary visibility issue: supplier-status monitoring is Unknown during an ownership transition, limiting current supplier-status confidence.",
  "Primary closure issue: Feature F-7 needs post-window validation because the configuration source is Degraded.",
  "Secret rotation is proceeding normally but should not close until one remaining consumer posts validation evidence.",
  "Browser protections and key user journeys are Healthy in the supplied evidence.",
  "Internal Explanation remains prevented from reaching user notifications while privacy review is open.",
  "No supplied evidence supports a claim of compromise, data theft, malicious intent, or supplier breach.",
  "Recommended leadership decision: prioritize reporting restoration and supplier visibility first, then complete configuration and secret-rotation closure evidence.",
];

const commonMistakes = [
  ["Treat the case as one giant incident", "The supplied evidence contains several different control conditions with different owners and confidence.", "Separate findings by control and connect them only where evidence supports a dependency."],
  ["Call the role-mapping issue a compromise", "Evidence supports a release/configuration mismatch, not malicious activity.", "Use bounded finding language."],
  ["Treat three derived alerts as three confirmations", "They share one underlying source.", "Use lineage and independent-source counts."],
  ["Say F-7 is definitely still Enabled", "The configuration source is Degraded after the approved window.", "Record current state as needing validation."],
  ["Retire the old secret state immediately", "One dependent consumer has not yet validated the new reference.", "Finish dependency-aware rotation validation first."],
  ["Assume Supplier S is down", "Supplier source health is Unknown.", "Treat supplier status as Unknown and restore visibility."],
  ["Close findings when work is performed", "Implementation is not equivalent to validated risk reduction.", "Require closure evidence."],
  ["Use live testing to fill evidence gaps", "This curriculum uses fictional supplied evidence only.", "Resolve gaps with owners, documentation, source restoration, and safe expected-state validation."],
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A10
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function WebDefenseArchitectureReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A10.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Capstone Review Lab
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.10 Web Defense Architecture Review Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete the A10 capstone by reviewing one fictional Northbridge web
            architecture from end to end. Use supplied evidence to assess
            architecture, sessions, authorization, input/output safety, APIs,
            browser protections, secrets/configuration, and monitoring. Produce
            bounded findings, prioritized remediation, validation evidence,
            residual-risk decisions, and audience-specific communication.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Web Defense Architecture Review Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.10 is a fictional defensive capstone and does not authorize real scanning, probing, fuzzing, exploitation, bypass testing, credential attacks, or live-site testing.",
            "I will use only the Northbridge architecture, timeline, evidence, findings, owners, and validation records supplied by this lesson.",
            "I will separate observation, source health, interpretation, finding, impact, remediation, validation, and residual risk.",
            "I will not convert an Unknown or Degraded source into an unsupported claim.",
            "I will not overcount derived alerts as independent evidence.",
            "I will produce a public-safe portfolio artifact with no real secrets, real user data, private logs, internal infrastructure, or offensive content.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Capstone Question: Can You Defend the Whole System?"
        >
          <p className="leading-8">
            Individual controls are useful, but real architecture decisions
            rarely stay inside one lesson. A release can affect authorization,
            APIs, browser behavior, configuration, monitoring, supplier
            dependencies, and user experience at the same time.
          </p>

          <p className="mt-4 leading-8">
            Your task is to act like a defensive reviewer: understand the whole
            fictional system, determine which evidence is healthy, avoid
            overclaiming, identify the most important control gaps, assign
            owners, define remediation, and prove closure through validation.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Capstone Vocabulary"
          title="Twelve Review Terms to Use Professionally"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Capstone Dashboard"
          subtitle="A10.10 — integrated architecture review"
          metrics={[
            {
              label: "Architecture components",
              value: "11",
              note: "Browser through recovery, including supplier and monitoring boundaries",
            },
            {
              label: "Evidence records",
              value: "12",
              note: "Architecture, policy, API, browser, supplier, config, identity, secrets, input/output, and lineage",
            },
            {
              label: "Primary findings",
              value: "5",
              note: "Authorization mapping, supplier visibility, config closure, secret rotation, alert lineage",
            },
            {
              label: "Portfolio outcome",
              value: "1",
              note: "Complete Web Defense Architecture Review package",
            },
          ]}
        />

        <SectionCard
          eyebrow="Architecture"
          title="Northbridge Web Defense Architecture"
        >
          <div className="grid gap-5">
            {architecture.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.boundary}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.component}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.role}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Assets
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.assets}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Dependencies
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.dependencies}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      A10 controls
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.primaryControls}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Case Timeline"
          title="Eighteen Fictional Events"
        >
          <div className="grid gap-3">
            {caseTimeline.map(([id, time, event]) => (
              <div
                key={id}
                className="grid gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4 md:grid-cols-[110px_90px_1fr]"
              >
                <span className="font-mono text-sm font-black text-cyan-200">
                  {id}
                </span>
                <span className="text-sm font-bold text-purple-200">
                  {time}
                </span>
                <span className="text-sm leading-6 text-slate-300">
                  {event}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Capstone Priority Alert"
          severity="High"
          time="Northbridge capstone 10:05"
          source="A10.10 integrated review board"
          details="Legitimate Team Blue reporting users are being denied after Release R-3. The current authorization matrix says they should be allowed, and application evidence shows one role mapping still references the previous release label. No supplied evidence indicates an exploit, credential theft, or malicious action."
          recommendation="Treat this as a high-priority authorization/configuration finding. Correct the application-to-policy mapping through approved change control, validate Team Blue allow and Team Gold deny cases, monitor the rollout, and avoid unsupported compromise language."
        />

        <SectionCard
          eyebrow="Evidence Register"
          title="Twelve Fictional Evidence Records"
        >
          <div className="grid gap-5">
            {evidenceRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.health}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.source}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limits", item.limits],
                    ["Lineage", item.lineage],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Capstone Evidence Log"
          logs={[
            "10:00 | RELEASE | R-3 | stage=production-rollout | owner=AppOwner",
            "10:02 | API | TeamBlue-report | result=Deny | source=Conditional",
            "10:03 | POLICY | TeamBlue-report | expected=Allow | source=Current",
            "10:04 | APP_MAPPING | release_label=R-2 | expected=R-3",
            "10:05 | FINDING | authorization-mapping | confidence=High",
            "10:06 | SUPPLIER | source_health=Unknown | status_claim=limited",
            "10:07 | CONFIG | source_health=Degraded | F7-current=Unknown",
            "10:08 | SECRET_META | rotation=Pending | consumer_validation=1-missing",
            "10:09 | LINEAGE | alerts=3 | underlying_events=1",
            "10:10 | PRIVACY | InternalExplanation | user_output=Blocked",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Reporting Failure"
          question="Which conclusion is best supported by EV-02, EV-03, and EV-04?"
          evidence={[
            "Team Blue policy says the affected users should be allowed.",
            "One application role mapping references the previous release label.",
            "API Team Blue denials increased after Release R-3.",
            "No evidence shows credential theft, bypass, or malicious activity.",
          ]}
          options={[
            "The system is compromised.",
            "A likely application-to-authorization mapping defect is causing legitimate Team Blue denials and should be corrected and validated.",
            "Team Blue should be given administrator access.",
            "The API should be disabled permanently.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports a configuration/authorization integration finding. It does not support compromise or broad privilege changes."
        />

        <SectionCard
          eyebrow="Control Review"
          title="Integrated A10.1–A10.8 Assessment"
        >
          <div className="grid gap-5">
            {controlReview.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.area}
                  </h3>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">
                    {item.state}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Owner
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.owner}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.conclusion}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: Should Release R-3 Be Rolled Back?"
          scenario="Reporting authorization is failing for legitimate Team Blue users, but browser workflows are Healthy, the likely role-mapping defect is identified, and the team has an approved narrow configuration correction with validation criteria."
          choices={[
            {
              label: "Choice A",
              response:
                "Roll back the entire release immediately without considering scope or targeted remediation.",
              outcome:
                "A broad rollback may be unnecessary when the defect is bounded and a safer targeted correction exists.",
              tone: "caution",
            },
            {
              label: "Choice B",
              response:
                "Apply the narrow approved role-mapping correction, validate Team Blue allow and Team Gold deny cases, monitor the result, and keep rollback ready if the correction fails or impact expands.",
              outcome:
                "This matches remediation scope to the evidence while preserving rollback as a safety control.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ignore the denials because the browser is Healthy.",
              outcome:
                "Browser health does not prove authorization correctness.",
              tone: "risk",
            },
          ]}
        />

        <SectionCard
          eyebrow="Finding Register"
          title="Five Primary Capstone Findings"
        >
          <div className="grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">
                    Priority: {item.priority}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    Confidence: {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Impact", item.impact],
                    ["Owner", item.owner],
                    ["Remediation", item.remediation],
                    ["Validation", item.validation],
                    ["Residual risk", item.residual],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze Feature F-7 After 09:30"
          question="What is the strongest current conclusion?"
          evidence={[
            "CHG-44 approved F-7 Enabled only until 09:30.",
            "Identity evidence confirms the privileged session used during the change window.",
            "Configuration source is Degraded after the window.",
            "No Healthy source currently proves the post-window state.",
          ]}
          options={[
            "F-7 is definitely still Enabled.",
            "The approved window ended, but current F-7 state is not fully confirmed; restore source health and validate against the baseline.",
            "CHG-44 was malicious.",
            "F-7 is definitely Disabled.",
          ]}
          bestAnswer={1}
          explanation="The change record defines expected state, but Degraded current visibility prevents a strong claim about the actual post-window state."
        />

        <SectionCard
          eyebrow="Remediation Roadmap"
          title="Immediate, Near-Term, and Planned Work"
        >
          <div className="grid gap-4">
            {remediationRoadmap.map(
              ([horizon, finding, action, owner, success]) => (
                <article
                  key={`${horizon}-${finding}`}
                  className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
                >
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                      {horizon}
                    </span>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                      {finding}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-300">{action}</p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                        Owner
                      </p>
                      <p className="mt-2 text-sm leading-6">{owner}</p>
                    </div>

                    <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                        Success
                      </p>
                      <p className="mt-2 text-sm leading-6">{success}</p>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Validation Board"
          title="Six Closure Tests"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {validationBoard.map(
              ([id, area, criteria, evidence, owner]) => (
                <article
                  key={id}
                  className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
                >
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-emerald-300/30 bg-slate-950/40 px-3 py-1 font-mono text-xs font-black">
                      {id}
                    </span>
                    <span className="text-sm font-black">{area}</span>
                  </div>

                  <p className="mt-4 text-sm leading-7">
                    <span className="font-black">Criteria:</span> {criteria}
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    <span className="font-black">Evidence:</span> {evidence}
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    <span className="font-black">Owner:</span> {owner}
                  </p>
                </article>
              )
            )}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Close the Secret Rotation?"
          scenario="The new fictional Application-to-Service secret reference is active for most consumers, but one dependent service has not posted validation evidence. No outage is currently visible."
          choices={[
            {
              label: "Choice A",
              response:
                "Retire the old secret state immediately because no outage is visible.",
              outcome:
                "Absence of an outage does not prove every dependency completed transition.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Keep the rotation in Validation Pending, obtain the remaining consumer evidence, confirm service health, then retire the old state under the approved plan.",
              outcome:
                "This preserves dependency-aware rotation and prevents premature closure.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Cancel all future rotations.",
              outcome:
                "A missing validation record is a process issue, not a reason to abandon lifecycle governance.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Audience Communication"
          title="Seven Capstone Deliverables"
        >
          <div className="grid gap-5">
            {audienceDeliverables.map(([audience, content]) => (
              <article
                key={audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{audience}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {content}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Leadership Summary"
          title="Eight Decision-Ready Statements"
        >
          <div className="grid gap-4">
            {leadershipSummary.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50"
              >
                <span className="mr-2 font-black text-blue-200">
                  {index + 1}.
                </span>
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Eight Capstone Mistakes to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, why, correction]) => (
              <article
                key={mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build the Complete Web Defense Architecture Review"
        >
          <p className="leading-8">
            Complete all eight phases using only the fictional Northbridge
            architecture and evidence supplied on this page.
          </p>

          <div className="mt-6 grid gap-5">
            {[
              [
                "Phase 1 — Review Charter",
                "Define scope, exclusions, business goals, safety boundary, evidence rules, privacy rules, owners, stop conditions, and closure definition.",
              ],
              [
                "Phase 2 — Architecture Model",
                "Map all eleven components, trust boundaries, assets, service identities, privileged paths, supplier dependency, monitoring, and recovery.",
              ],
              [
                "Phase 3 — Timeline and Evidence",
                "Place CASE-01 through CASE-18 in sequence and connect EV-01 through EV-12 to the claims each record can and cannot support.",
              ],
              [
                "Phase 4 — A10 Control Assessment",
                "Complete the A10.1–A10.8 control review using state, evidence, conclusion, owner, and Unknowns.",
              ],
              [
                "Phase 5 — Finding Register",
                "Write LAB-F01 through LAB-F05 in your own professional wording while preserving the same evidence strength.",
              ],
              [
                "Phase 6 — Remediation Roadmap",
                "Group actions into Immediate, Near Term, and Planned work with dependencies, rollback, owners, and success evidence.",
              ],
              [
                "Phase 7 — Validation and Closure",
                "Use VAL-01 through VAL-06. Mark each finding Open, In Progress, Validation Pending, Accepted, or Closed based only on supplied evidence.",
              ],
              [
                "Phase 8 — Communication Package",
                "Create engineering, product, operations, governance, leadership, and public-safe summaries plus one final architecture review diagram.",
              ],
            ].map(([phase, task]) => (
              <article
                key={phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {phase}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {task}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Capstone safety boundary</p>
            <p className="mt-2 leading-7">
              Use only fictional supplied evidence. Do not scan, probe, exploit,
              fuzz, bypass, enumerate, attack, test credentials, test sessions,
              test real APIs, test real browser policies, access real secret
              stores, inspect real private logs, or perform live-site testing.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Build a Zero-Overclaim Executive Review"
        >
          <p className="leading-8">
            Produce a complete executive-ready review that remains useful while
            never claiming more than the fictional evidence supports.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Name the three highest-priority decisions and explain why each is prioritized.",
              "Separate every Healthy, Conditional, Degraded, and Unknown source.",
              "Show where evidence is independent and where alerts are derived.",
              "Explain why the Team Blue finding is high confidence without calling it an incident.",
              "Explain why Supplier S status remains Unknown rather than safe or compromised.",
              "Explain why F-7 post-window state requires validation.",
              "Explain why secret rotation remains open even though no outage is visible.",
              "Create one remediation dependency graph using words and arrows.",
              "Write one paragraph of residual risk after all planned remediation.",
              "Write a public-safe portfolio summary that demonstrates the method without revealing sensitive implementation details.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.10 Web Defense Architecture Review Checklist"
          items={[
            "I can review a fictional web architecture across all A10 control areas.",
            "I can map components, trust boundaries, dependencies, privileged paths, supplier relationships, and recovery.",
            "I can separate timeline facts from interpretations.",
            "I can evaluate source health and evidence lineage.",
            "I can avoid overcounting derived alerts.",
            "I can write bounded findings with confidence and business impact.",
            "I can distinguish a control defect from proof of malicious activity.",
            "I can prioritize remediation and assign accountable owners.",
            "I can define validation evidence before closure.",
            "I can keep configuration and secret lifecycle findings open until dependent evidence is complete.",
            "I can communicate the same case at engineering, leadership, governance, and public-safe levels.",
            "I can produce the A10 portfolio outcome without offensive testing or sensitive real-world details.",
          ]}
        />

        <MiniQuiz
          title="A10.10 Mini Quiz: Web Defense Architecture Review Lab"
          questions={[
            {
              question:
                "What is the strongest finding for the Team Blue reporting problem?",
              choices: [
                "The application is compromised.",
                "A likely application-to-policy role-mapping defect is causing legitimate Team Blue denials and requires correction plus validation.",
                "All authorization should be disabled.",
                "Team Blue users need administrator access.",
              ],
              answer: 1,
              explanation:
                "The supplied evidence supports a bounded configuration/authorization integration defect, not compromise.",
            },
            {
              question:
                "What can be concluded about Supplier S while its source health is Unknown?",
              choices: [
                "It is definitely healthy.",
                "Its current status is Unknown; purpose-limited scope is documented, but visibility must be restored.",
                "It is compromised.",
                "It must be removed permanently.",
              ],
              answer: 1,
              explanation:
                "Unknown source health limits current-status claims.",
            },
            {
              question:
                "Why can three CHG-44 alerts not be treated as three independent confirmations?",
              choices: [
                "They are all Low severity.",
                "They derive from one underlying Authorization event.",
                "They occurred at the same time.",
                "Configuration is Degraded.",
              ],
              answer: 1,
              explanation:
                "Evidence lineage shows they are derived copies of one event.",
            },
            {
              question:
                "What is strongest for F-7 after the approved window ends?",
              choices: [
                "Assume it is Disabled.",
                "Validate the current state after Configuration C returns Healthy or through approved alternate evidence.",
                "Assume it is still Enabled.",
                "Delete the change record.",
              ],
              answer: 1,
              explanation:
                "The expected state is known, but the actual current state needs healthy evidence.",
            },
            {
              question:
                "When should the secret rotation close?",
              choices: [
                "As soon as most consumers work.",
                "After all approved consumers validate the new reference state, service health is confirmed, and the old state is retired.",
                "Before any validation.",
                "Never.",
              ],
              answer: 1,
              explanation:
                "Rotation closure is dependency-aware and evidence-based.",
            },
            {
              question:
                "What is the strongest remediation strategy for the role-mapping defect?",
              choices: [
                "Broadly roll back every A10 control.",
                "Apply the narrow approved mapping correction, validate intended allow/deny behavior, monitor, and keep rollback ready.",
                "Grant broad access temporarily.",
                "Ignore it because browser policy is Healthy.",
              ],
              answer: 1,
              explanation:
                "Remediation scope should match the evidence and preserve validation and rollback.",
            },
            {
              question:
                "What proves a capstone finding is closed?",
              choices: [
                "A developer says work is done.",
                "The defined validation evidence shows the intended security result, owners agree closure criteria are met, and residual risk is recorded.",
                "The alert disappears once.",
                "Leadership stops asking about it.",
              ],
              answer: 1,
              explanation:
                "Closure requires evidence of outcome, not merely activity.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Complete Web Defense Architecture Review"
          prompt="Create the complete fictional A10 portfolio outcome for Northbridge: a Web Defense Architecture Review package. Include review charter; scope; exclusions; architecture diagram; trust boundaries; data classes; identity/session map; authorization matrix; input/output contracts; API catalog; browser-protection review; secret/configuration metadata review; monitoring/source-health map; CASE-01 through CASE-18 timeline; EV-01 through EV-12 evidence register; A10.1–A10.8 control assessment; LAB-F01 through LAB-F05 findings; confidence and priority rationale; remediation roadmap; dependencies; rollback conditions; VAL-01 through VAL-06 validation board; residual risk; closure states; technical summary; product summary; operations summary; governance/privacy summary; leadership summary; and public-safe portfolio summary. Every organization, system, user, supplier, event, secret reference, configuration item, and outcome must remain fictional."
          tips={[
            "Do not invent evidence that the case does not supply.",
            "Use source health and lineage to control confidence.",
            "Keep findings bounded to what the evidence supports.",
            "Separate remediation work from validation evidence.",
            "Record residual risk after each major correction.",
            "Make the public-safe artifact demonstrate reasoning without exposing sensitive operational detail.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for the A10 Module Test?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 across architecture, sessions,
            authorization, input/output, APIs, browser protections,
            secrets/configuration, monitoring, evidence quality, findings,
            remediation, validation, and communication.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can review the entire A10 architecture as one defensive system.",
              "I can identify trust boundaries and control dependencies.",
              "I can evaluate source health and evidence lineage.",
              "I can keep Unknowns explicit.",
              "I can write bounded findings and avoid unsupported incident claims.",
              "I can connect findings to business impact and priority.",
              "I can build remediation with owner, dependency, rollback, and validation.",
              "I can distinguish implementation from validated closure.",
              "I can communicate clearly to multiple audiences.",
              "I am ready for the 25-question A10 Module Test.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What the Final A10 Portfolio Artifact Should Contain"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Review charter and safety boundary",
              "Architecture and trust-boundary diagram",
              "Identity and session model",
              "Authorization and ownership matrix",
              "Input/output field and context review",
              "API caller/resource/action review",
              "Browser protection and cookie review",
              "Secrets/configuration metadata review",
              "Monitoring and source-health map",
              "Case timeline",
              "Evidence register and lineage",
              "A10.1–A10.8 control matrix",
              "Five bounded findings",
              "Remediation roadmap",
              "Validation and closure board",
              "Residual-risk and audience summaries",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Portfolio element {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A strong web defense review evaluates the entire architecture, not isolated controls.",
            "Trust boundaries, identities, APIs, suppliers, configuration, monitoring, and recovery create cross-control dependencies.",
            "Source health and evidence lineage determine how confidently a finding can be stated.",
            "A release-related authorization defect is not automatically a security incident or malicious action.",
            "Unknown supplier visibility must remain Unknown until evidence quality improves.",
            "Temporary configuration changes require post-window validation before closure.",
            "Secret rotation remains open until all dependent consumers validate the new state and the old state is retired.",
            "Derived alerts should never be counted as independent evidence.",
            "Remediation is complete only after validation proves the intended result and residual risk is recorded.",
            "A10.10 completes the Web Defense Architecture Review portfolio outcome and prepares you for the A10 Module Test.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Defensive Capstone Only — No Live Testing
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A10.10 authorizes scanning, probing, fuzzing,
            exploitation, bypass testing, credential attacks, session attacks,
            object enumeration, API abuse, browser-policy evasion, secret
            testing, or testing real websites, services, accounts, devices, or
            networks. Use only fictional supplied evidence and safe defensive
            validation.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A10 Lessons Complete — Continue to the Module Test
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            You have now completed all ten Advanced Web Security Defense
            lessons. The A10 Module Test will assess secure architecture,
            authentication and sessions, authorization, input/output safety,
            API security, browser protections, secrets/configuration, web
            monitoring, the review process, and the integrated architecture
            review lab.
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