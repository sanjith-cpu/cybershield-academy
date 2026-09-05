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
const previousLesson = `${modulePath}/logging-and-monitoring-for-web-apps`;
const nextLesson = `${modulePath}/web-defense-architecture-review-lab`;

const objectives = [
  "Explain how a professional defensive web security review integrates architecture, identity, sessions, authorization, input/output safety, APIs, browser protections, secrets/configuration, and monitoring into one evidence-based process.",
  "Plan a fictional review using scope, owners, assets, trust boundaries, business criticality, privacy, dependencies, assumptions, exclusions, evidence sources, and stop conditions.",
  "Evaluate fictional findings using observation, evidence quality, source health, affected control, business impact, confidence, ownership, remediation priority, validation criteria, and residual risk.",
  "Communicate web security review results differently to engineers, product owners, identity teams, operations, governance, leadership, and public-safe portfolio audiences without changing the underlying evidence strength.",
  "Create a professional fictional Web Security Review Package containing scope, architecture model, control matrix, evidence register, findings, risk decisions, remediation plan, validation plan, leadership summary, governance summary, and closure criteria.",
];

const vocabulary = [
  ["Review scope", "The fictional systems, applications, environments, workflows, identities, APIs, suppliers, data classes, and controls included in the defensive review."],
  ["Exclusion", "A fictional area deliberately outside the review, documented so readers do not assume it was assessed."],
  ["Trust boundary", "A fictional point where identity, data, authority, network location, browser context, service ownership, or organizational responsibility changes."],
  ["Evidence register", "A fictional catalog of observations, source health, timestamps, owners, lineage, limits, and review use."],
  ["Control objective", "The defensive outcome a fictional web control is expected to achieve, such as least privilege, safe session lifecycle, minimized output, or protected secrets."],
  ["Review finding", "A bounded fictional conclusion supported by evidence and connected to a control objective, impact, owner, remediation, and validation plan."],
  ["Observation", "A direct fictional fact from supplied evidence before interpretation is added."],
  ["Assumption", "A fictional condition believed to be true for planning but not yet fully verified."],
  ["Unknown", "A fictional fact the review cannot currently establish because evidence is missing, conflicting, stale, or unhealthy."],
  ["Confidence", "The strength of support for a specific fictional claim based on evidence quality, independence, source health, and scope."],
  ["Business impact", "The fictional effect a weakness or change could have on confidentiality, integrity, availability, privacy, trust, user experience, recovery, or business operations."],
  ["Remediation owner", "The fictional person or team accountable for correcting, narrowing, accepting, or otherwise resolving a finding."],
  ["Validation criterion", "The fictional evidence required to prove a remediation achieved the intended defensive result."],
  ["Residual risk", "The fictional risk remaining after remediation, compensating controls, acceptance, or design constraints."],
  ["Closure criterion", "The fictional condition that must be met before a review item is considered complete."],
  ["Review traceability", "The ability to connect a fictional finding back to scope, architecture, evidence, source health, control objective, owner, remediation, and validation."],
];

const reviewPrinciples = [
  ["Start with scope", "A review is only trustworthy when readers know what was and was not examined.", "What exact fictional systems, workflows, environments, and users are inside this review?"],
  ["Understand the architecture first", "Security decisions make sense only when trust boundaries, components, data flows, identities, suppliers, and dependencies are visible.", "Which fictional component trusts which other component, and why?"],
  ["Review objectives, not buzzwords", "Each control should be judged by the defensive outcome it is supposed to achieve.", "What security property is this fictional control meant to preserve?"],
  ["Separate evidence from interpretation", "Observations should remain distinguishable from hypotheses, findings, attribution, impact, and recommendations.", "Which sentence is direct evidence, and which sentence is analysis?"],
  ["Track source health", "A strong review adjusts confidence when telemetry or documentation is Degraded, Conditional, stale, or Unknown.", "How much can this source support right now?"],
  ["Use bounded findings", "A finding should say exactly what the evidence supports, not more.", "What is the narrowest defensible claim?"],
  ["Connect findings to business impact", "Technical weakness matters because it changes real fictional business risk, not because a checklist item is missing.", "What could happen to users, data, operations, recovery, or trust?"],
  ["Assign owners", "A finding without an accountable owner is unlikely to become a completed improvement.", "Who can actually change this fictional system or policy?"],
  ["Define validation before closure", "Remediation should not be considered finished until evidence proves the intended result.", "What evidence would convince the team the issue is resolved?"],
  ["Preserve privacy", "A review should not collect or publish more sensitive information than needed.", "Can this fictional evidence be minimized or redacted?"],
  ["Communicate by audience", "Engineers, leadership, governance, and public-safe audiences need different detail, but the same underlying evidence strength.", "What does this audience need to decide?"],
  ["Record residual risk", "Not every risk disappears. Some remains because of business constraints, accepted tradeoffs, or incomplete visibility.", "What risk remains after the planned change?"],
];

const reviewWorkflow = [
  ["1. Charter the review", "Define fictional purpose, scope, exclusions, owners, timeline, evidence rules, privacy rules, safety boundary, and stop conditions.", "Review charter"],
  ["2. Build the architecture model", "Map components, trust boundaries, data classes, users, service identities, APIs, suppliers, admin functions, recovery, and monitoring.", "Architecture and trust map"],
  ["3. Build the control matrix", "Map A10.1–A10.8 control objectives to each relevant fictional component and workflow.", "Control objective matrix"],
  ["4. Gather supplied evidence", "Collect only fictional approved architecture records, policy records, change records, source-health records, event summaries, and validation evidence.", "Evidence register"],
  ["5. Evaluate each control", "Compare intended control objective with supplied evidence, source health, ownership, dependencies, and known limitations.", "Control assessment"],
  ["6. Draft bounded findings", "Write observation, finding, impact, confidence, evidence, owner, remediation, and validation without exaggeration.", "Finding register"],
  ["7. Prioritize remediation", "Use privilege, scope, sensitivity, business criticality, exploitability concepts, persistence, recovery impact, evidence confidence, and implementation effort conceptually.", "Prioritized remediation plan"],
  ["8. Communicate decisions", "Prepare technical, product, operations, governance, leadership, and public-safe summaries.", "Audience-specific reports"],
  ["9. Validate remediation", "Review fictional updated evidence, source health, expected workflows, monitoring, rollback, and residual risk.", "Validation record"],
  ["10. Close and improve", "Confirm closure criteria, record accepted residual risk, update architecture and monitoring, and capture lessons for the next review.", "Review closure package"],
];

const controlMatrix = [
  {
    lesson: "A10.1 Secure Web Architecture Principles",
    objective: "Clear trust boundaries, minimized exposure, separated privileged functions, dependency ownership, resilience, recovery, and defense in depth.",
    evidence: "Architecture diagram, component owners, data-flow summary, trust-boundary notes, dependency map, recovery path.",
    keyQuestion: "Does the fictional architecture minimize unnecessary trust and keep sensitive functions separated?",
  },
  {
    lesson: "A10.2 Authentication and Session Design",
    objective: "Appropriate identity assurance, safe session lifecycle, privileged-session separation, recovery, timeout, logout, and sensitive-action verification.",
    evidence: "Authentication journey, session classes, recovery workflow, privileged-session policy, monitoring.",
    keyQuestion: "Do fictional sessions match the sensitivity and purpose of the protected actions?",
  },
  {
    lesson: "A10.3 Authorization and Access Control Design",
    objective: "Deny by default, least privilege, object ownership, service identity scope, admin separation, exception governance, and recertification.",
    evidence: "Role/resource/action matrix, ownership rules, service identity register, exception records, access review.",
    keyQuestion: "Can every protected action be explained by explicit subject-resource-action-context policy?",
  },
  {
    lesson: "A10.4 Input Handling and Output Safety",
    objective: "Explicit input contracts, normalization, technical/business validation, authorization separation, context-aware output, safe errors, and minimized logging.",
    evidence: "Field contracts, output map, error policy, safe test cases, privacy rules.",
    keyQuestion: "Does each fictional field have a clear contract from collection through output and logging?",
  },
  {
    lesson: "A10.5 API Security Concepts",
    objective: "Purpose-limited callers, service identities, object ownership, request/response contracts, response minimization, safe errors, resource protection, versions, and dependency governance.",
    evidence: "API catalog, caller matrix, schemas, version register, supplier scope, monitoring plan.",
    keyQuestion: "Does each fictional API expose only the resources, actions, and data required by approved callers?",
  },
  {
    lesson: "A10.6 Secure Headers and Browser Protections",
    objective: "Layered browser controls, cookie protection, privacy, compatibility, exception governance, staged rollout, monitoring, and rollback.",
    evidence: "Browser behavior inventory, cookie board, exception register, rollout record, compatibility evidence.",
    keyQuestion: "Do browser protections match legitimate application behavior without becoming broad unmanaged exceptions?",
  },
  {
    lesson: "A10.7 Secrets and Configuration Management",
    objective: "Metadata-only secret governance, environment separation, least privilege, lifecycle/rotation, secure defaults, change control, drift review, redaction, and emergency access.",
    evidence: "Secret metadata inventory, environment map, config baseline, rotation record, drift evidence, exception record.",
    keyQuestion: "Are sensitive capabilities governed without exposing values or allowing configuration to drift silently?",
  },
  {
    lesson: "A10.8 Logging and Monitoring for Web Apps",
    objective: "Question-driven logging, privacy minimization, source health, coverage, baselines, correlation, alert lineage, retention, escalation, and monitoring-gap ownership.",
    evidence: "Event taxonomy, source-health board, alert cases, lineage map, privacy policy, retention table.",
    keyQuestion: "Can defenders make reliable decisions from minimized telemetry with known source health?",
  },
];

const architectureComponents = [
  ["Browser Client C", "User-facing fictional browser environment.", "Public/Authenticated", "Session state, user input, browser policy", "Application Service B"],
  ["Application Service B", "Primary fictional web application logic.", "Internal Application", "Cases, workflow, session references, API calls", "Identity I, API P, Data D, Monitoring M"],
  ["Identity Service I", "Authentication, recovery, and session assurance service.", "Identity Boundary", "Identity/session metadata", "Application B, Admin F"],
  ["Authorization Policy A", "Decision layer for protected fictional actions.", "Policy Boundary", "Roles, ownership, decisions", "Application B, API P"],
  ["API Service P", "Purpose-limited fictional API layer.", "Service Boundary", "Case status, reporting, preferences, admin/recovery functions", "Application B, Data D, Supplier S"],
  ["Data Store D", "Protected fictional application data.", "Data Boundary", "Cases, profiles, approved reports", "Application B, API P"],
  ["Admin Console F", "Separated privileged administration workflow.", "Privileged Boundary", "Configuration and admin metadata", "Identity I, Config C"],
  ["Configuration Service C", "Approved fictional security-relevant configuration state.", "Configuration Boundary", "Policy profiles, feature state, logging settings", "Application B, Admin F"],
  ["Monitoring M", "Privacy-aware telemetry and source-health layer.", "Monitoring Boundary", "Minimized security/operational metadata", "All approved components"],
  ["Supplier S", "Purpose-limited fictional external integration.", "External Trust Boundary", "Service-status metadata only", "API P"],
  ["Recovery R", "Fictional staged recovery and validation service.", "Recovery Boundary", "Recovery state, validation metadata", "Identity I, Application B, Monitoring M"],
];

const evidenceRegister = [
  ["REV-E01", "Architecture map", "Current", "Components, boundaries, owners, and data flows are documented.", "Supports review scope and trust analysis.", "Does not prove runtime behavior."],
  ["REV-E02", "Identity/session design", "Current", "Standard, sensitive, admin, and recovery session journeys are documented.", "Supports A10.2 assessment.", "Does not prove every session event occurred as designed."],
  ["REV-E03", "Authorization matrix", "Current", "Roles, resources, actions, object ownership, and service identities are defined.", "Supports A10.3 assessment.", "One temporary exception owner is pending re-review."],
  ["REV-E04", "Input/output contracts", "Current", "Key forms and reporting fields have explicit contracts and output contexts.", "Supports A10.4 assessment.", "New Internal Explanation field is still under review."],
  ["REV-E05", "API catalog", "Current", "Seven fictional APIs have purpose, caller, resource/action scope, and response minimization.", "Supports A10.5 assessment.", "Supplier monitoring source is Unknown."],
  ["REV-E06", "Browser rollout report", "Healthy", "Pilot and partial rollout passed key sign-in, reporting, accessibility, and logout workflows.", "Supports A10.6 rollout confidence.", "One exception is near expiration."],
  ["REV-E07", "Secrets/configuration review", "Conditional", "Metadata inventory and configuration baseline are current.", "Supports A10.7 governance.", "Configuration source is temporarily Degraded."],
  ["REV-E08", "Monitoring board", "Current", "Source health, alert lineage, privacy rules, and retention are documented.", "Supports A10.8 assessment.", "No-event claims remain limited for Supplier S and Configuration C."],
];

const findings = [
  {
    id: "F-01",
    title: "Supplier monitoring ownership is incomplete",
    observation: "Supplier Status S source health is Unknown and the incoming business owner transfer is not complete.",
    control: "A10.5 API Security + A10.8 Monitoring",
    impact: "The team has reduced confidence about supplier-status visibility and may miss timely context for supplier-related decisions.",
    confidence: "High",
    priority: "High",
    owner: "Supplier Owner + Monitoring Owner",
    remediation: "Complete owner transfer, restore/verify source health, document expected supplier events, and validate purpose-limited monitoring.",
    validation: "Source health becomes Healthy/Conditional with documented coverage, owner, expected events, and successful fictional validation.",
    residual: "Supplier dependency risk remains even after visibility improves.",
  },
  {
    id: "F-02",
    title: "Browser policy exception is nearing expiration",
    observation: "EX-01 has seven days remaining and the latest migration validation note is missing.",
    control: "A10.6 Browser Protections",
    impact: "A temporary compatibility exception could become an unmanaged long-term policy gap.",
    confidence: "High",
    priority: "Medium",
    owner: "Reporting Owner",
    remediation: "Provide current migration evidence and either remove, narrow, or time-bound renew the exception.",
    validation: "Exception is closed or reapproved with fresh owner evidence, scope, monitoring, and expiration.",
    residual: "The reporting dependency may still require a bounded compatibility decision.",
  },
  {
    id: "F-03",
    title: "Production configuration state cannot be fully confirmed",
    observation: "Configuration State C is Degraded during maintenance.",
    control: "A10.7 Configuration + A10.8 Monitoring",
    impact: "Current absence claims about configuration drift are weaker until visibility is restored.",
    confidence: "High",
    priority: "Medium",
    owner: "Configuration Owner + Monitoring Owner",
    remediation: "Restore source health, compare the latest state with the approved baseline, and reconcile any drift with change records.",
    validation: "Healthy source confirms current production state and all deviations are owner-approved or corrected.",
    residual: "Future maintenance windows will still require alternate evidence planning.",
  },
  {
    id: "F-04",
    title: "New Internal Explanation field has unresolved output scope",
    observation: "The field is intended for internal use but would appear in a user-facing notification under the current draft.",
    control: "A10.4 Input/Output Safety",
    impact: "Internal or private information could be disclosed to an audience outside the intended purpose.",
    confidence: "High",
    priority: "High",
    owner: "Application Owner + Privacy Reviewer",
    remediation: "Define purpose, audience, authorization, output contexts, logging, retention, and safe notification behavior before release.",
    validation: "Updated fictional field contract and notification design show correct audience separation.",
    residual: "Future new destinations will require contract re-review.",
  },
  {
    id: "F-05",
    title: "Service Identity P recertification owner is missing",
    observation: "Purpose and scope are documented, but the next recertification owner is not recorded.",
    control: "A10.3 Authorization + A10.5 API Security",
    impact: "A non-human identity could retain outdated access after architecture or ownership changes.",
    confidence: "High",
    priority: "Medium",
    owner: "Application Owner + API Owner",
    remediation: "Assign recertification ownership and add role/service change triggers.",
    validation: "Service identity register contains current owner, next review, resource/action scope, and removal conditions.",
    residual: "Service identities still require continuous lifecycle governance.",
  },
];

const riskFactors = [
  ["Privilege", "Higher privilege increases impact if the control fails."],
  ["Scope", "Broader user, data, service, or environment scope increases potential effect."],
  ["Sensitivity", "Sensitive identity, admin, case, reporting, secret, or recovery data raises concern."],
  ["Business criticality", "Critical workflows deserve faster owner attention and stronger validation."],
  ["Persistence", "Long-lived weaknesses or stale access may create more opportunity for harm."],
  ["Source health", "Weak evidence should reduce claim strength even when potential impact is high."],
  ["Recoverability", "A reversible change may be easier to remediate than a deeply embedded dependency."],
  ["Owner readiness", "Clear ownership and rollback can lower operational risk during remediation."],
];

const audienceMatrix = [
  ["Engineering", "Exact control behavior, architecture context, evidence, owner, remediation, validation, rollback.", "Implementation decision."],
  ["Product", "Affected user/business workflow, scope, priority, release impact, tradeoffs, validation.", "Product/release decision."],
  ["Identity / Access Team", "Session, role, object ownership, privileged access, recovery, service identity findings.", "Identity/access decision."],
  ["Operations", "Configuration, secrets metadata, monitoring, supplier, recovery, rollout, rollback.", "Operational change decision."],
  ["Governance / Privacy", "Data minimization, retention, exceptions, ownership, residual risk, policy alignment.", "Governance/acceptance decision."],
  ["Leadership", "Top risks, business impact, confidence, owner, timeline, blockers, residual risk.", "Priority/resource decision."],
  ["Public-Safe Portfolio", "Fictional architecture, workflow, bounded findings, defensive methods, no real secrets or sensitive implementation detail.", "Demonstrate professional reasoning safely."],
];

const commonMistakes = [
  ["Start with a vulnerability list instead of scope", "Findings lack context when architecture, boundaries, owners, and business purpose are unclear.", "Charter the review and model the system first."],
  ["Treat missing evidence as proof", "A monitoring gap or absent record may mean visibility is incomplete.", "Record Unknown and assign evidence-restoration ownership."],
  ["Overstate a finding", "One weak signal cannot support broad claims about compromise, intent, causation, or impact.", "Use bounded language tied to actual evidence."],
  ["Prioritize only by technical severity", "Business criticality, privilege, scope, recoverability, source confidence, and user impact also matter.", "Use multi-factor prioritization."],
  ["Write remediation without validation", "A change can be implemented but still fail to achieve the security objective.", "Define success evidence before closure."],
  ["Assign no owner", "Unowned findings remain open indefinitely.", "Name a team/person accountable for decision and closure."],
  ["Use the same report for every audience", "Too much or too little detail can block decisions.", "Preserve evidence strength while changing presentation depth."],
  ["Turn review into offensive testing", "A10 focuses on defensive architecture and supplied evidence, not exploitation.", "Use fictional evidence, expected decisions, and safe validation only."],
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">Module A10</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function WebSecurityReviewProcessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A10</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A10.9</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Professional Review Workflow</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.9 Web Security Review Process
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Combine the entire A10 defensive stack into one professional review process. Define scope, model architecture, map control objectives, evaluate evidence and source health, draft bounded findings, prioritize remediation, communicate by audience, validate changes, record residual risk, and close the review without exploit execution or unauthorized testing.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Web Security Review Process"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.9 is a defensive review process and does not authorize exploitation, bypass testing, scanning, probing, credential attacks, or live-site testing.",
            "I will use only fictional Northbridge architecture, policies, evidence, logs, owners, suppliers, findings, and remediation records.",
            "I will separate observations, Unknowns, findings, impact, attribution, causation, and recommendations.",
            "I will check source health and alert lineage before increasing confidence.",
            "I will connect every finding to an owner, remediation action, validation criterion, and residual-risk decision.",
            "I will keep all public-safe artifacts free of real credentials, internal system details, private data, or offensive content.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Review Is a Decision System, Not a Checklist">
          <p className="leading-8">
            A fictional web application can have strong authentication and still have excessive API responses. It can have strong authorization and still expose sensitive configuration through debugging. It can have good browser protections while its supplier monitoring is Blind. Security review becomes useful only when these controls are evaluated together as one system.
          </p>
          <p className="mt-4 leading-8">
            The reviewer's job is not to collect the largest number of findings. It is to produce a trustworthy map of what is known, what is Unknown, which controls matter, what the business impact could be, who owns the next action, and what evidence will prove improvement.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A10.9">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Professional Reviews Turn Technical Evidence into Owned Decisions">
          <p className="leading-8">
            A web security review is valuable only when it helps people decide what to change, what to keep, what to validate, what to monitor, what to accept, and what to communicate. Findings need architecture context, evidence, confidence, impact, ownership, remediation, validation, and closure.
          </p>
          <p className="mt-4 leading-8">
            That traceability is what separates a professional review from a list of isolated concerns.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Web Security Review Language">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Twelve Principles of a Professional Web Security Review">
          <div className="grid gap-5">
            {reviewPrinciples.map(([principle, explanation, question], index) => (
              <article key={principle} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{principle}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{explanation}</p>
                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Reviewer question</p>
                      <p className="mt-2 text-sm leading-6">{question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Professional Workflow" title="The Ten-Step Web Security Review Workflow">
          <div className="grid gap-5">
            {reviewWorkflow.map(([step, detail, output]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{step}</h3>
                <p className="mt-2 leading-7 text-slate-300">{detail}</p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Output</p>
                  <p className="mt-2 text-sm leading-6">{output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Web Security Review Dashboard"
          subtitle="A10.9 — integrated review status"
          metrics={[
            { label: "A10 control areas", value: "8", note: "Architecture through monitoring are reviewed together" },
            { label: "Architecture components", value: "11", note: "Browser, app, identity, authorization, APIs, data, admin, config, monitoring, supplier, recovery" },
            { label: "Current findings", value: "5", note: "All have owners, confidence, remediation, validation, and residual-risk notes" },
            { label: "Primary rule", value: "Traceability", note: "Every conclusion links back to scope, evidence, source health, owner, and validation" },
          ]}
        />

        <SectionCard eyebrow="Architecture Review" title="Eleven Fictional Components and Trust Boundaries">
          <div className="grid gap-5">
            {architectureComponents.map(([name, purpose, boundary, data, dependencies]) => (
              <article key={name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">{name}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{boundary}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{purpose}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Data / capability</p>
                    <p className="mt-2 text-sm leading-6">{data}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Dependencies</p>
                    <p className="mt-2 text-sm leading-6">{dependencies}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Control Matrix" title="A10.1–A10.8 Review Objectives">
          <div className="grid gap-5">
            {controlMatrix.map((item) => (
              <article key={item.lesson} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.lesson}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.objective}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Evidence examples</p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Key review question</p>
                    <p className="mt-2 text-sm leading-6">{item.keyQuestion}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Integrated Review Warning"
          severity="High"
          time="Northbridge review board 19:15"
          source="A10.9 integrated web review"
          details="The Supplier S monitoring source is Unknown while supplier ownership is transitioning. At the same time, API documentation shows the integration remains purpose-limited, and no independent evidence proves a supplier incident."
          recommendation="Record the issue as a visibility and ownership finding rather than a compromise claim. Complete owner transfer, restore/verify supplier monitoring, confirm purpose-limited API scope, define alternate evidence during future gaps, and validate the final state before closure."
        />

        <SectionCard eyebrow="Evidence Register" title="Eight Fictional Review Evidence Records">
          <div className="grid gap-5">
            {evidenceRegister.map(([id, source, health, observation, supports, limits]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{health}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{source}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Limits", limits],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Integrated Review Timeline"
          logs={[
            "19:00 | SCOPE | app=Northbridge-Web | env=Production-like | suppliers=1",
            "19:03 | ARCH | trust_boundaries=11 | privileged_boundary=separate",
            "19:05 | EVIDENCE | REV-E01..REV-E08 | lineage=tracked",
            "19:07 | SOURCE_HEALTH | config=Degraded | supplier=Unknown",
            "19:09 | FINDING | F-04 | internal-field-output-scope | priority=High",
            "19:11 | FINDING | F-05 | service-identity-owner-missing | priority=Medium",
            "19:13 | VALIDATION | browser-rollout=Healthy | exception=near-expiry",
            "19:15 | REVIEW | supplier_visibility=Unknown | compromise_claim=false",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Supplier Review Evidence"
          question="What is the strongest bounded finding?"
          evidence={[
            "Supplier S API scope is documented as purpose-limited.",
            "Supplier Status S monitoring source health is Unknown.",
            "Supplier ownership is transitioning.",
            "No independent evidence proves misuse, compromise, or data exposure.",
          ]}
          options={[
            "Supplier S is compromised.",
            "Supplier visibility and ownership governance are incomplete; confidence about supplier status is reduced until ownership and monitoring are restored.",
            "Supplier S is safe because its API scope is narrow.",
            "Disable every supplier integration permanently.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports a governance and visibility finding. It does not support compromise or complete safety."
        />

        <SectionCard eyebrow="Finding Register" title="Five Bounded Fictional Review Findings">
          <div className="grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-black text-red-100">Priority: {item.priority}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">Confidence: {item.confidence}</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Control area", item.control],
                    ["Business impact", item.impact],
                    ["Owner", item.owner],
                    ["Remediation", item.remediation],
                    ["Validation", item.validation],
                    ["Residual risk", item.residual],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Executive Wants a Single Security Score"
          scenario="A fictional executive asks the review team to replace the entire web review with one percentage score. The current evidence includes several Healthy control areas, one Degraded configuration source, one Unknown supplier source, and five findings of different scope and impact."
          choices={[
            {
              label: "Choice A",
              response: "Invent a single percentage and remove the evidence details.",
              outcome: "A single unsupported score can hide uncertainty, source-health limits, and differences in business impact.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Provide a concise leadership summary with top findings, business impact, confidence, source-health limitations, owners, timelines, and residual risk while preserving the detailed evidence register separately.",
              outcome: "This gives leadership a usable summary without destroying traceability.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Give leadership the full engineering evidence dump with no summary.",
              outcome: "The evidence remains accurate, but the presentation may not support the executive decision effectively.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Risk Prioritization" title="Eight Factors for Remediation Priority">
          <div className="grid gap-4 md:grid-cols-2">
            {riskFactors.map(([factor, detail]) => (
              <div key={factor} className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
                <h3 className="font-black text-yellow-100">{factor}</h3>
                <p className="mt-2 text-sm leading-7">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Audience Communication" title="Seven Review Audiences">
          <div className="grid gap-5">
            {audienceMatrix.map(([audience, needs, decision]) => (
              <article key={audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Needs</p>
                    <p className="mt-2 text-sm leading-6">{needs}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Decision supported</p>
                    <p className="mt-2 text-sm leading-6">{decision}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Configuration Source"
          question="What can the review safely say while Configuration State C is Degraded?"
          evidence={[
            "The approved production baseline is documented.",
            "The latest configuration snapshot is delayed during maintenance.",
            "Change records are available.",
            "No independent evidence proves current drift or proves current alignment.",
          ]}
          options={[
            "There is definitely no configuration drift.",
            "Current configuration alignment is not fully confirmed; use change records as alternate evidence and revalidate when source health returns.",
            "There is definitely malicious configuration drift.",
            "Delete the configuration finding entirely.",
          ]}
          bestAnswer={1}
          explanation="A Degraded source reduces confidence in current-state absence claims. The proper result is bounded uncertainty plus alternate evidence and planned revalidation."
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Remediation Is Marked Done Without Validation"
          scenario="A fictional engineering team says F-04 is fixed because the code was changed so Internal Explanation should no longer appear in user notifications. No updated field contract, output map, notification validation, or monitoring evidence has been provided."
          choices={[
            {
              label: "Choice A",
              response: "Close the finding because code changed.",
              outcome: "Implementation activity is not the same as validated remediation.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Keep the finding in validation state until updated field/output documentation and fictional notification evidence confirm the intended audience separation.",
              outcome: "This preserves traceability and proves the security objective rather than just recording work performed.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Reject the engineering change automatically.",
              outcome: "The change may be correct; the missing piece is validation evidence.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Eight Review Process Mistakes to Avoid">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, why, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build the Northbridge Web Security Review">
          <p className="leading-8">
            Use only the fictional architecture, control matrix, evidence register, source-health states, findings, and owner records on this page. The lab teaches review methodology and decision quality, not offensive testing.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Charter", "Write review purpose, scope, exclusions, safety boundary, owners, timeline, privacy rules, evidence rules, and closure definition."],
              ["Phase 2 — Architecture", "Map the eleven fictional components, trust boundaries, data classes, suppliers, privileged paths, recovery, and monitoring."],
              ["Phase 3 — Control matrix", "Map A10.1–A10.8 objectives to components, workflows, and owners."],
              ["Phase 4 — Evidence register", "Use REV-E01 through REV-E08. Record observation, source health, lineage, supports, limits, and owner."],
              ["Phase 5 — Findings", "Write at least five bounded findings with impact, confidence, priority, owner, remediation, validation, and residual risk."],
              ["Phase 6 — Prioritization", "Use privilege, scope, sensitivity, business criticality, persistence, source health, recoverability, and owner readiness."],
              ["Phase 7 — Audience reports", "Create engineering, product, operations, governance, leadership, and public-safe summaries without changing evidence strength."],
              ["Phase 8 — Closure package", "Define remediation state, validation evidence, residual risk, accepted exceptions, source-health restoration, lessons learned, and next review triggers."],
            ].map(([phase, task]) => (
              <article key={phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{task}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not scan, probe, exploit, bypass, enumerate, attack, fuzz, or test real websites, APIs, accounts, sessions, browser policies, configurations, suppliers, or secrets. Use only the fictional evidence and expected defensive decisions supplied by the lesson.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Produce a Board-Ready Review Without Losing Technical Traceability">
          <p className="leading-8">
            Create a fictional review package that allows an engineer to trace every finding back to evidence while allowing leadership to understand the top business decisions in under two pages.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Write a one-paragraph review charter.",
              "Create a one-page architecture and trust-boundary summary.",
              "Build a control matrix covering all eight prior A10 lessons.",
              "Write five findings using observation, impact, confidence, owner, remediation, validation, and residual risk.",
              "Create one source-health limitation section.",
              "Create one remediation roadmap grouped by immediate, near-term, and planned actions.",
              "Write a leadership summary with no unsupported security score.",
              "Write a governance summary focused on privacy, exceptions, ownership, and residual risk.",
              "Write a public-safe portfolio summary with invented details only.",
              "Create closure criteria that prevent 'code changed' from being treated as equivalent to 'risk validated as reduced.'",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.9 Web Security Review Process Checklist"
          items={[
            "I can define review scope and exclusions clearly.",
            "I can model fictional web architecture, trust boundaries, privileged paths, data, suppliers, recovery, and monitoring.",
            "I can map A10.1–A10.8 control objectives into one integrated control matrix.",
            "I can maintain an evidence register with source health, supports, limits, and lineage.",
            "I can separate observations from interpretations and findings.",
            "I can write bounded findings with business impact and confidence.",
            "I can prioritize remediation using multiple risk and operational factors.",
            "I can assign an accountable owner to every finding.",
            "I can define validation evidence before closing remediation.",
            "I can record residual risk and accepted exceptions.",
            "I can tailor review communication by audience without changing evidence strength.",
            "I can produce a public-safe fictional review without offensive testing or sensitive details.",
          ]}
        />

        <MiniQuiz
          title="A10.9 Mini Quiz: Web Security Review Process"
          questions={[
            {
              question: "What should a professional web security review define first?",
              choices: ["A list of exploits.", "Scope, exclusions, owners, purpose, safety boundary, and evidence rules.", "A single security score.", "A public report."],
              answer: 1,
              explanation: "Clear scope and review rules are required before evidence and findings can be interpreted correctly.",
            },
            {
              question: "What is the strongest statement when a key source is Degraded?",
              choices: ["Everything is safe.", "Current conclusions depending on that source should be weaker or recorded as Unknown until alternate evidence or restored health supports them.", "A breach occurred.", "Delete the source from the review."],
              answer: 1,
              explanation: "Evidence quality limits claim strength.",
            },
            {
              question: "What should every review finding include?",
              choices: ["Only a title.", "Observation/evidence, bounded finding, impact, confidence, owner, remediation, validation, and residual risk.", "Exploit code.", "A severity color only."],
              answer: 1,
              explanation: "Traceability requires evidence, decision context, ownership, and closure criteria.",
            },
            {
              question: "Why is remediation not complete when code changes?",
              choices: ["Code changes never matter.", "The intended security result still needs validation evidence.", "Only managers can close findings.", "Every change must be rolled back."],
              answer: 1,
              explanation: "Implementation activity and validated risk reduction are different things.",
            },
            {
              question: "What should leadership receive?",
              choices: ["A raw dump of every log line.", "A concise summary of top findings, business impact, confidence, owners, timelines, blockers, and residual risk.", "An invented percentage.", "Exploit demonstrations."],
              answer: 1,
              explanation: "Leadership needs decision-focused communication that preserves evidence strength.",
            },
            {
              question: "What is residual risk?",
              choices: ["A secret value left in logs.", "Risk that remains after remediation, compensating controls, accepted tradeoffs, or incomplete visibility.", "A closed finding.", "A failed login."],
              answer: 1,
              explanation: "Not every risk disappears completely after remediation.",
            },
            {
              question: "What is the strongest response to missing supplier visibility?",
              choices: ["Assume the supplier is compromised.", "Record a visibility/ownership finding, restore monitoring, use alternate evidence, and validate purpose-limited supplier scope.", "Ignore the supplier.", "Disable every supplier permanently."],
              answer: 1,
              explanation: "The evidence supports governance and visibility improvement, not an unsupported compromise claim.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Web Security Review Package"
          prompt="Create a fully fictional A10.9 Web Security Review Package for Northbridge. Include review charter; scope; exclusions; owners; safety boundary; architecture diagram; trust boundaries; user and service identities; privileged paths; data classes; supplier dependencies; recovery path; A10.1–A10.8 control matrix; evidence register; source health; alert lineage; assumptions; Unknowns; findings; business impact; confidence; priority; remediation owners; remediation roadmap; validation criteria; residual risk; exceptions; technical summary; product summary; operations summary; governance/privacy summary; leadership summary; closure criteria; lessons learned; next review triggers; and a public-safe portfolio summary. Every organization, system, user, supplier, source, finding, and outcome must be invented, and the review must contain no real secrets, exploit steps, bypass methods, or unauthorized testing."
          tips={[
            "Keep scope and exclusions explicit.",
            "Link every finding to evidence and a control objective.",
            "Use source health to bound confidence.",
            "Assign owners and validation before closure.",
            "Tailor detail by audience without changing the underlying conclusion.",
            "Record residual risk instead of pretending every issue disappears.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A10.10 Web Defense Architecture Review Lab?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for review scope, architecture, evidence, source health, findings, risk prioritization, ownership, remediation, validation, audience communication, residual risk, and closure.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can charter a defensive web security review.",
              "I can build an architecture and trust-boundary model.",
              "I can map A10.1–A10.8 controls into one review matrix.",
              "I can maintain a source-aware evidence register.",
              "I can write bounded findings without overstating evidence.",
              "I can connect technical findings to business impact.",
              "I can assign owners and prioritize remediation.",
              "I can define validation evidence and residual risk.",
              "I can communicate differently to engineering, leadership, governance, and public-safe audiences.",
              "I am ready to perform the full fictional A10.10 Web Defense Architecture Review Lab.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Portfolio Build Guide" title="What a Strong A10.9 Artifact Should Show">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Clear review charter and exclusions",
              "Architecture and trust-boundary model",
              "A10.1–A10.8 control matrix",
              "Source-health-aware evidence register",
              "Bounded findings with evidence and impact",
              "Confidence and priority rationale",
              "Named remediation owners",
              "Validation criteria",
              "Residual risk",
              "Exception and monitoring-gap treatment",
              "Remediation roadmap",
              "Technical and product summaries",
              "Leadership and governance summaries",
              "Closure criteria and lessons learned",
              "Next-review triggers",
              "A public-safe fictional portfolio report",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Portfolio element {index + 1}</p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A professional web security review integrates architecture, identity, authorization, input/output, APIs, browser controls, secrets/configuration, and monitoring.",
            "Scope, exclusions, trust boundaries, and owners must be clear before findings are meaningful.",
            "Evidence and interpretation should remain separate, with source health controlling confidence.",
            "Findings should be bounded, traceable, and connected to business impact.",
            "Every finding needs an owner, remediation plan, validation criterion, and residual-risk decision.",
            "Monitoring gaps and Unknowns are valid review outcomes and should not be converted into unsupported claims.",
            "Priority depends on more than technical severity; privilege, scope, sensitivity, business criticality, recoverability, and evidence quality matter.",
            "Different audiences need different levels of detail, but the underlying evidence strength must stay consistent.",
            "Remediation is not complete until validation evidence proves the intended defensive result.",
            "A10.9 prepares you for A10.10, where the full review process is applied to a complete fictional web defense architecture case.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Defensive Review Only — No Live Exploitation or Unauthorized Testing</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.9 authorizes scanning, probing, fuzzing, exploitation, bypass testing, credential attacks, session attacks, object enumeration, API abuse, browser-policy evasion, secret testing, or testing real websites and services. Use only fictional supplied evidence, owner records, expected control behavior, and safe defensive validation.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Web Defense Architecture Review Lab</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.9 established the complete professional review workflow: scope, architecture, control matrix, evidence, source health, findings, business impact, prioritization, remediation, validation, audience communication, residual risk, and closure. A10.10 will use that workflow to complete the module's full fictional Web Defense Architecture Review Lab and portfolio package.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}