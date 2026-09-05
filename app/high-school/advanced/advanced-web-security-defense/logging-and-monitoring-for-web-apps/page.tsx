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
const previousLesson = `${modulePath}/secrets-and-configuration-management`;
const nextLesson = `${modulePath}/web-security-review-process`;

const objectives = [
  "Explain what a defensible web application logging program should observe across authentication, sessions, authorization, APIs, browser protections, configuration, secrets metadata, errors, and business-critical actions.",
  "Design privacy-aware fictional logging that captures decision-relevant metadata while avoiding unnecessary user content, credentials, secret values, sensitive payloads, and unrelated personal information.",
  "Evaluate fictional monitoring quality through source health, coverage, baselines, correlation, alert lineage, false positives, false negatives, ownership, retention, escalation, and decision value.",
  "Use fictional evidence to distinguish an event, signal, alert, finding, monitoring gap, and Unknown without treating one log entry as proof of compromise.",
  "Create a professional fictional Web Logging and Monitoring Review package containing event taxonomy, source-health map, privacy rules, dashboards, alert logic concepts, escalation criteria, monitoring gaps, owners, retention, validation, and public-safe documentation.",
];

const vocabulary = [
  ["Security-relevant event", "A fictional application, identity, API, configuration, browser, secret-reference, or business action that may help defenders answer an approved security or operational question."],
  ["Log source", "A fictional application, identity service, API layer, browser-policy source, configuration system, monitoring service, or dependency that produces approved telemetry."],
  ["Source health", "The current quality state of a fictional log source, such as Healthy, Conditional, Degraded, Blind, or Unknown."],
  ["Coverage", "The portion of the fictional system, users, services, actions, environments, or time periods represented by available telemetry."],
  ["Baseline", "A fictional description of expected normal ranges or patterns used to give context to new events without treating deviation as automatic proof of attack."],
  ["Signal", "A fictional observation that may deserve review but does not by itself establish a finding."],
  ["Alert", "A fictional review prompt generated when one or more signals match an approved monitoring condition."],
  ["Finding", "A defensible conclusion supported by enough fictional evidence for the bounded claim being made."],
  ["Correlation", "A defensive process that relates fictional events from different sources, users, services, or time windows to answer a shared question."],
  ["Alert lineage", "The record showing whether multiple fictional alerts came from one underlying event, derived copies, or truly independent evidence."],
  ["False positive", "A fictional alert that matched its condition but did not represent the risk initially suspected."],
  ["False negative", "A conceptual monitoring miss in which important behavior was not surfaced by available telemetry or alert logic."],
  ["Monitoring gap", "A fictional area where expected telemetry is absent, delayed, degraded, incomplete, or not decision-useful."],
  ["Retention", "The approved period for keeping fictional logs based on operational, security, privacy, legal, and business needs."],
  ["Escalation", "A fictional decision to move an alert or finding to higher review based on impact, confidence, scope, privilege, persistence, or business criticality."],
  ["Decision value", "The degree to which a fictional log or alert helps an owner decide what to investigate, change, validate, communicate, or monitor next."],
];

const principles = [
  ["Log for a question, not curiosity", "Every fictional event field should help answer an approved operational, security, audit, or recovery question.", "What decision becomes easier because this field exists?"],
  ["Capture metadata before content", "Actor role, event type, resource class, result, source, time, owner, and state often answer the defender question without full user-submitted content.", "Can the monitoring goal be met without copying private content?"],
  ["Never log secret values", "Credentials, tokens, private keys, recovery codes, and sensitive session values should remain outside general fictional logs.", "Can a reference ID, status, or secret class answer the same question?"],
  ["Keep identity visible", "Sign-in results, recovery events, session transitions, privileged sessions, and high-impact account changes are useful when minimized appropriately.", "Which identity or session event matters to the defender?"],
  ["Keep authorization visible", "Important allow/deny decisions, role changes, privileged actions, and exceptions help verify least privilege.", "Which protected action needs an audit trail?"],
  ["Monitor high-impact changes", "Configuration, browser policy, API versions, suppliers, features, and secret lifecycle changes should have owner-visible evidence.", "Which change could materially alter risk?"],
  ["Know source health", "A source can be present yet delayed, incomplete, duplicated, or degraded.", "How much confidence can this source support right now?"],
  ["Correlate before escalating", "Multiple independent, contextually related signals can support a stronger claim than one ambiguous event.", "Which independent sources support the same bounded claim?"],
  ["Track alert lineage", "Several alerts derived from one underlying event are not several independent pieces of evidence.", "Are these observations independent or derived?"],
  ["Tune with context, not silence", "Reducing noise should improve baselines, source quality, ownership, and correlation rather than blindly suppressing events.", "Why is the alert noisy, and what improves meaning?"],
  ["Protect privacy", "Monitoring should avoid unnecessary personal content, unrelated behavior, and excessive retention.", "What is the minimum data needed for the approved question?"],
  ["Treat missing visibility as Unknown", "When a source is Blind or Degraded, absence claims should be weaker.", "Which conclusions cannot be supported because visibility is incomplete?"],
];

const workflow = [
  ["1. Define defender questions", "List fictional identity, access, API, configuration, browser, secret-reference, error, supplier, and business-risk questions that monitoring must help answer.", "Question register"],
  ["2. Build the event taxonomy", "Map each question to minimized fictional event types and required metadata.", "Event taxonomy"],
  ["3. Map sources and coverage", "Identify which fictional components produce each event and which users, services, actions, environments, and time periods are covered.", "Source/coverage matrix"],
  ["4. Define privacy and redaction", "Specify which fields are allowed, minimized, masked, summarized, or prohibited in logs.", "Privacy-aware logging policy"],
  ["5. Establish source health", "Track whether each fictional source is Healthy, Conditional, Degraded, Blind, or Unknown.", "Source-health board"],
  ["6. Define baselines and alert questions", "Use expected ranges, roles, workflows, time patterns, source context, and business events to make alerts meaningful.", "Baseline and alert-design notes"],
  ["7. Correlate and triage", "Compare independent signals, alert lineage, privilege, scope, confidence, and business impact.", "Triage decision"],
  ["8. Escalate proportionally", "Escalate when evidence, impact, privilege, scope, source confidence, or business criticality justifies broader review.", "Escalation record"],
  ["9. Validate and close", "Confirm owner action, remediation, source restoration, policy correction, user communication, or accepted risk.", "Closure evidence"],
  ["10. Improve monitoring", "Review noise, misses, privacy, retention, source health, ownership, dashboards, alert logic, and decision value.", "Monitoring improvement plan"],
];

const eventTaxonomy = [
  ["Authentication", "Sign-in result, recovery start/completion, approved factor change, sensitive-action verification result.", "User/role reference, result, method class, time, source health, application, risk context.", "Passwords, recovery codes, secrets, private messages.", "Is identity behavior consistent with the approved journey?"],
  ["Session", "Session creation, privileged-session start/end, renewal, forced termination, logout, recovery transition.", "Session class, role, application, reason, time, owner decision, result.", "Session token or cookie values.", "Is session state consistent with intended privilege and lifecycle?"],
  ["Authorization", "Important allow/deny decisions, role changes, access exceptions, stale-access removal, privileged actions.", "Subject class, resource class, action, decision, owner context, policy reference.", "Unnecessary private record contents.", "Are protected actions aligned with least privilege and ownership?"],
  ["API", "Caller result, allow/deny decision, version use, privileged API action, supplier scope decision, dependency failure.", "Caller class, service identity reference, API class, resource/action category, result, version, latency/health.", "Credentials, tokens, full request/response bodies.", "Are API callers operating within approved purpose and scope?"],
  ["Input / Output", "Validation failure category, business-rule rejection, output-policy issue, safe-error reference.", "Field class, rule category, result, application, role, reference ID.", "Full sensitive submitted values or private long text.", "Are input/output contracts producing expected outcomes?"],
  ["Browser Protection", "Policy presence change, compatibility issue, approved exception use, cookie-policy state, rollout/rollback event.", "Page class, policy class, environment, result, exception ID, owner, source health.", "Unrelated browsing history.", "Are browser-facing protections present and compatible?"],
  ["Secrets Metadata", "Secret-reference failure, rotation pending/completed, owner change, expiration warning, break-glass use, redaction warning.", "Secret class/reference, service, environment, owner, lifecycle state, result.", "Actual secret values.", "Are secret classes healthy, owned, and progressing through lifecycle?"],
  ["Configuration", "Baseline change, drift alert, feature state change, debug/logging profile change, supplier integration change.", "Setting class, approved/observed state category, owner, change reference, environment, validation result.", "Sensitive values when state/category is enough.", "Does observed configuration match the approved baseline?"],
  ["Business-Critical Action", "High-impact account change, export, approval, admin configuration, recovery milestone.", "Action class, role, resource class, approval state, result, owner.", "Full business-record content unless separately justified.", "Are high-impact actions occurring through the expected approval path?"],
];

const sourceHealth = [
  ["Identity Events I", "Healthy", "Authentication, recovery, session transitions, privileged-session events.", "Does not prove application authorization decisions.", "Strong support for bounded identity/session conclusions."],
  ["Application Events B", "Healthy", "Case actions, validation outcomes, safe errors, important user workflows.", "Does not include every supplier or downstream API event.", "Useful for application behavior and correlation."],
  ["Authorization Decisions A", "Healthy", "Selected allow/deny, role changes, exceptions, privileged actions.", "Routine low-risk reads are minimized by design.", "Strong for high-impact access decisions."],
  ["API Events P", "Conditional", "Caller, API class, resource/action category, version, result, dependency state.", "Supplier events arrive with occasional delay.", "Use with delay awareness; avoid strong real-time absence claims."],
  ["Browser Policy Events H", "Healthy", "Policy presence, rollout observations, compatibility issues, exceptions.", "Does not observe private user browsing behavior.", "Supports browser-policy health and rollout decisions."],
  ["Secret Metadata Events K", "Healthy", "Reference failures, rotation state, owner change, expiration, emergency-access metadata.", "Never contains actual secret values.", "Supports lifecycle governance without secret exposure."],
  ["Configuration State C", "Degraded", "Baseline and observed-state metadata for security-relevant settings.", "Latest production snapshot is delayed during maintenance.", "Current configuration absence claims are limited."],
  ["Supplier Status S", "Unknown", "Purpose-limited supplier service-status events.", "Current feed health is not confirmed.", "Treat supplier visibility as Unknown and use alternate evidence."],
];

const alertCases = [
  ["WEB-ALERT-01", "Repeated Sign-In Failures", "Identity Events I", "Several failed sign-ins followed by one successful sign-in from the same approved user journey.", "Low to Medium", "Could reflect forgotten credentials, user error, or another identity issue; not proof of account compromise.", "Review baseline, support context, recovery events, session state, and independent evidence."],
  ["WEB-ALERT-02", "Privileged Session Outside Change Window", "Identity Events I + Authorization Decisions A", "A privileged session starts after the approved maintenance window with no linked change record.", "Medium", "A meaningful governance mismatch requiring owner review.", "Confirm role, business reason, emergency exception, action scope, and lineage."],
  ["WEB-ALERT-03", "API Scope Denials Increase", "API Events P", "Team-scope authorization denials rise after a new reporting UI release.", "Medium", "May indicate UI/policy mismatch, stale role mapping, or misuse; intent is not established.", "Compare release change, roles, ownership rules, safe-error trends, and support reports."],
  ["WEB-ALERT-04", "Configuration Drift", "Configuration State C", "Observed Feature F-7 state differs from approved baseline, but source is currently Degraded.", "Medium", "Potential drift with limited freshness confidence.", "Use change records and alternate evidence; restore source health before strong current-state claims."],
  ["WEB-ALERT-05", "Secret Reference Failures", "Secret Metadata Events K", "Application-to-Service reference failures begin during a planned rotation window.", "Medium", "Could reflect incomplete consumer transition rather than secret compromise.", "Review rotation phase, dependencies, reference versions, application health, and rollback criteria."],
  ["WEB-ALERT-06", "Browser Compatibility Spike", "Browser Policy Events H", "Approved reporting-widget compatibility errors increase after partial policy enforcement.", "High", "Strong evidence of a rollout compatibility issue.", "Review exception scope, supplier dependency, rollback criteria, and accessibility impact."],
  ["WEB-ALERT-07", "Sensitive Export Approval Mismatch", "Application Events B + Authorization Decisions A", "A high-impact export was attempted without the expected manager approval state.", "High", "A clear policy/workflow mismatch requiring review; malicious intent remains separate.", "Confirm resource scope, role, approval workflow, output policy, and whether export completed."],
  ["WEB-ALERT-08", "Supplier Monitoring Gap", "Supplier Status S", "No supplier-status events appear during a period when source health is Unknown.", "Low", "No-event evidence is weak because source health is unresolved.", "Treat the period as Unknown and consult alternate dependency-health evidence."],
];

const privacyRules = [
  ["No credentials or secret values", "These represent protected capability and do not belong in general logs.", "Secret class, reference ID, service, owner, lifecycle state, result."],
  ["No session token or cookie values", "Session material is sensitive and unnecessary for most defender questions.", "Session class, transition, role, reason, time, result."],
  ["Minimize long user text", "Case notes, messages, free-text fields, and report contents may contain private information.", "Event type, field class, record reference, result, validation category."],
  ["Avoid unnecessary browser history", "Monitoring browser protections does not justify collecting unrelated navigation behavior.", "Page class, policy state, compatibility category, approved integration."],
  ["Minimize API payloads", "Request and response bodies may contain private or unnecessary data.", "Caller class, API/resource/action category, schema result, response class, decision."],
  ["Separate user errors from diagnostics", "Users need recovery guidance while defenders may need restricted metadata.", "Safe error reference plus restricted owner-only detail."],
  ["Use bounded retention", "Keeping logs indefinitely increases privacy and exposure without guaranteed decision value.", "Retention matched to operational, security, governance, and legal purpose."],
  ["Restrict monitoring access", "Logs can reveal sensitive business and security context even when minimized.", "Role-based monitoring access and purpose-limited review."],
];

const correlationModels = [
  ["Is a privileged action expected?", "Identity privileged-session event + Authorization decision + Change record + Application action.", "All sources agree on role, approved change, resource/action, and time.", "A privileged-session event alone does not prove the action was approved."],
  ["Did a configuration change cause a user issue?", "Configuration state + Release record + Application errors + Browser compatibility + Support trend.", "Timing and independent sources align with the same bounded change.", "Temporal proximity alone is not causation."],
  ["Is an API authorization problem systemic?", "API denials + Application release + Role/ownership policy + Support reports.", "Multiple legitimate users after one policy/UI change support a design issue.", "A small number of denials may be expected normal policy behavior."],
  ["Did a secret rotation complete cleanly?", "Secret metadata + Application health + API dependency health + Error trend + Old-reference retirement.", "New state active, dependencies Healthy, old state retired, error baseline normal.", "A rotation-complete flag alone does not prove every dependency migrated."],
  ["Is a browser policy stable?", "Policy presence + Compatibility events + Accessibility validation + Supplier integration + Support trend.", "Policy present and key legitimate workflows remain within baseline.", "Policy presence alone does not prove compatibility or complete web security."],
];

const evidenceSet = [
  ["MON-01", "Fictional event taxonomy", "Current", "Nine web event categories are mapped to defender questions, minimized metadata, and prohibited content.", "Purpose-driven logging and privacy minimization.", "Does not prove every implementation emits the expected fields.", "Design coverage and validation."],
  ["MON-02", "Fictional source-health board", "Current", "Identity, Application, Authorization, Browser, and Secret Metadata sources are Healthy; API is Conditional; Configuration is Degraded; Supplier is Unknown.", "Confidence should differ by source.", "Health can change over time.", "Bound claims and prioritize source restoration."],
  ["MON-03", "Fictional privacy review", "Current", "General monitoring excludes passwords, secret values, session values, full case notes, and unnecessary API bodies.", "Privacy-aware monitoring design.", "Does not prove every downstream dashboard preserves the same rules.", "Review lineage and access."],
  ["MON-04", "Fictional alert lineage map", "Healthy", "Three dashboard alerts about one privileged action all derive from the same Authorization event.", "The three alerts are not independent corroboration.", "Does not determine whether the underlying event is benign or concerning.", "Avoid overcounting evidence."],
  ["MON-05", "Fictional release timeline", "Current", "API scope denials increased immediately after Reporting UI version R-3 was released.", "A possible change-related access design issue.", "Timing alone does not prove causation.", "Correlate with roles, support reports, policy, and rollback evidence."],
  ["MON-06", "Fictional configuration source", "Degraded", "The latest production configuration snapshot is delayed during maintenance.", "Current-state visibility limitation.", "Cannot support strong claims that no configuration drift exists right now.", "Reduce absence confidence and use alternate evidence."],
  ["MON-07", "Fictional retention review", "Current", "Different log classes have purpose-based retention rather than one unlimited retention period.", "Data minimization and governance.", "Does not prove expiration has been validated.", "Retention-control review."],
  ["MON-08", "Fictional alert-quality report", "Current", "A noisy sign-in alert improved after adding user-support context and a baseline rather than suppressing the event.", "Context-aware tuning.", "Does not guarantee future false positives disappear.", "Monitoring improvement planning."],
];

const commonMistakes = [
  ["Log everything", "More data can increase privacy, retention, cost, and exposure while adding little decision value.", "Log only the metadata needed for approved defender questions."],
  ["One event proves compromise", "Many web events are ambiguous without context, source health, ownership, baseline, and corroboration.", "Use evidence ladders and bounded findings."],
  ["No alert means no problem", "Coverage, source health, retention, sampling, or alert logic may be incomplete.", "Check visibility before making absence claims."],
  ["Three alerts equal three pieces of evidence", "Derived alerts may share one underlying source.", "Track lineage and independent corroboration."],
  ["Suppress noisy alerts", "Blind suppression can hide useful events while leaving the quality problem unresolved.", "Improve baselines, ownership, source quality, correlation, and context."],
  ["Log secrets for troubleshooting", "Sensitive capability should never be copied into general monitoring.", "Use references, lifecycle state, owner, and result metadata."],
  ["Monitor people instead of systems", "Defensive monitoring should answer approved security questions, not collect unrelated private behavior.", "Focus on system, identity, access, change, and business-risk events."],
  ["Close alerts without feedback", "Without learning from false positives, misses, privacy issues, or source gaps, monitoring quality stagnates.", "Feed closure results into source health, baselines, dashboards, and documentation."],
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

export default function LoggingAndMonitoringForWebAppsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A10</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A10.8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Web App Monitoring</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.8 Logging and Monitoring for Web Apps
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design privacy-aware web application logging around specific security questions. Build fictional event taxonomies, source-health maps, coverage, baselines, correlation, alert lineage, escalation, retention, dashboards, and monitoring-gap decisions without capturing credentials, secret values, private user content, or unrelated personal behavior.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Logging and Monitoring for Web Apps"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.8 teaches defensive, authorized web application monitoring—not surveillance, invasive tracking, credential capture, private-message collection, or monitoring people outside an approved environment.",
            "I will use only fictional Northbridge logs, alerts, users, roles, applications, APIs, settings, service identities, suppliers, and monitoring sources.",
            "I will keep passwords, tokens, session values, secret values, recovery codes, private keys, full case notes, and unnecessary personal content out of monitoring examples.",
            "I will distinguish event, signal, alert, finding, monitoring gap, and incident candidate.",
            "I will check source health and alert lineage before treating absence or multiple alerts as strong evidence.",
            "I will use monitoring to support bounded defender decisions rather than unsupported claims about intent or compromise.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Best Log Is Not the Largest Log">
          <p className="leading-8">
            Suppose Northbridge wants to know whether privileged administrative changes are happening through approved sessions and change windows. The team does not need every keystroke, page view, case note, or credential. It needs a small set of high-value metadata: privileged session state, role, action category, configuration reference, approval record, time, result, source health, and owner.
          </p>
          <p className="mt-4 leading-8">
            Professional monitoring is therefore a design discipline. It begins with decisions, not data collection. A useful log answers a question, respects privacy, has known source health, and can be correlated with other independent evidence.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak monitoring</p>
              <p className="mt-2 leading-7">“Collect everything now. We will figure out why later.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defender monitoring</p>
              <p className="mt-2 leading-7">“Define the question, collect the minimum useful metadata, measure source health, correlate carefully, protect privacy, and connect alerts to owner decisions.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A10.8">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Web Monitoring Connects Every Earlier A10 Defense">
          <p className="leading-8">
            Authentication, sessions, authorization, input/output safety, APIs, browser protections, secrets metadata, and configuration all create important security decisions. Without appropriate visibility, defenders may not know whether those controls are healthy, changing, failing, or producing unexpected business impact.
          </p>
          <p className="mt-4 leading-8">
            But visibility must stay proportionate. A logging program that captures secrets or private user content can create new risk. A logging program with poor source health or noisy alerts can create false confidence. Good monitoring balances evidence quality, privacy, retention, and operational usefulness.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Web Monitoring Language">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Twelve Logging and Monitoring Principles">
          <div className="grid gap-5">
            {principles.map(([principle, explanation, question], index) => (
              <article key={principle} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{principle}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{explanation}</p>
                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defender question</p>
                      <p className="mt-2 text-sm leading-6">{question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Professional Workflow" title="The Ten-Step Web Monitoring Workflow">
          <div className="grid gap-5">
            {workflow.map(([step, detail, output]) => (
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
          title="Fictional Northbridge Web Monitoring Dashboard"
          subtitle="A10.8 — privacy-aware monitoring review"
          metrics={[
            { label: "Event categories", value: "9", note: "Identity, session, authorization, API, input/output, browser, secrets metadata, config, business actions" },
            { label: "Log sources", value: "8", note: "Health states range from Healthy to Unknown" },
            { label: "Alert cases", value: "8", note: "Signals are reviewed through confidence, context, lineage, impact, and ownership" },
            { label: "Primary rule", value: "Question first", note: "Collect only what helps an approved defender decision" },
          ]}
        />

        <SectionCard eyebrow="Event Taxonomy" title="Nine Security-Relevant Web Event Categories">
          <div className="grid gap-5">
            {eventTaxonomy.map(([category, events, metadata, avoid, defenderQuestion]) => (
              <article key={category} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{category}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    ["Events", events],
                    ["Useful metadata", metadata],
                    ["Avoid logging", avoid],
                    ["Defender question", defenderQuestion],
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

        <FakeAlertCard
          title="Fictional Monitoring Quality Warning"
          severity="High"
          time="Northbridge monitoring review 18:40"
          source="A10.8 web monitoring board"
          details="A dashboard shows three High alerts for one privileged configuration action, but the lineage map shows all three were derived from the same underlying Authorization event. The configuration source is also Degraded, so current-state validation is incomplete."
          recommendation="Do not treat the three alerts as independent corroboration. Collapse the alert lineage to one underlying event, use independent identity/change evidence, account for the Degraded configuration source, assign the configuration owner, and escalate only to the level supported by the combined evidence."
        />

        <SectionCard eyebrow="Source Health" title="Eight Fictional Monitoring Sources">
          <div className="grid gap-5">
            {sourceHealth.map(([source, health, coverage, limitation, decision]) => (
              <article key={source} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <h3 className="text-lg font-black text-white">{source}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{health}</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Coverage</p>
                    <p className="mt-2 text-sm leading-6">{coverage}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
                    <p className="mt-2 text-sm leading-6">{limitation}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Decision use</p>
                    <p className="mt-2 text-sm leading-6">{decision}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Web Monitoring Review Log"
          logs={[
            "18:00 | IDENTITY | privileged_session=start | role=AppAdmin | source=Healthy",
            "18:02 | AUTHZ | action=config-change | result=Allow | change_ref=CHG-44",
            "18:03 | CONFIG | setting=Feature-F7 | observed=Enabled | source=Degraded",
            "18:04 | LINEAGE | alert_count=3 | underlying_event_count=1",
            "18:08 | API | reporting_scope_denial=increase | source=Conditional",
            "18:12 | BROWSER | reporting_widget_errors=above-baseline | source=Healthy",
            "18:15 | SECRET_META | rotation_state=Pending | secret_value_logged=false",
            "18:20 | SUPPLIER | source_health=Unknown | absence_claim=limited",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Three High Alerts"
          question="What is the strongest interpretation?"
          evidence={[
            "Three dashboard alerts reference one privileged configuration action.",
            "The lineage map shows all three derive from one Authorization event.",
            "Identity evidence independently confirms a privileged session existed.",
            "Configuration source health is Degraded.",
          ]}
          options={[
            "Treat the three alerts as three independent confirmations of compromise.",
            "Treat them as one underlying access event plus one independent identity source, reduce current configuration confidence because the configuration source is Degraded, and continue owner-based review.",
            "Ignore all alerts because lineage exists.",
            "Declare the application safe because the privileged session was valid.",
          ]}
          bestAnswer={1}
          explanation="Alert count is not evidence count. Collapse derived alerts, keep independent sources separate, and account for degraded visibility."
        />

        <SectionCard eyebrow="Alert Review" title="Eight Fictional Web Alert Cases">
          <div className="grid gap-5">
            {alertCases.map(([id, title, source, evidence, confidence, interpretation, next]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Source", source],
                    ["Evidence", evidence],
                    ["Interpretation", interpretation],
                    ["Next step", next],
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
          title="Scenario Decision Lab 1: A Noisy Sign-In Alert"
          scenario="A fictional sign-in alert fires frequently for legitimate users who mistype credentials before successfully signing in. The monitoring team proposes suppressing all failed sign-in events."
          choices={[
            {
              label: "Choice A",
              response: "Suppress all failed sign-in events so the dashboard stays quiet.",
              outcome: "Blind suppression removes potentially useful identity evidence and does not solve the alert-quality problem.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Keep the underlying event, improve the baseline with user-support and successful-session context, correlate repeated patterns, and tune the alert to produce better decision value.",
              outcome: "This reduces noise while preserving evidence and improving interpretation.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Escalate every failed sign-in as an incident.",
              outcome: "Over-escalation wastes attention and ignores ordinary user behavior.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Correlation" title="Five Multi-Source Monitoring Questions">
          <div className="grid gap-5">
            {correlationModels.map(([question, sources, strong, caution]) => (
              <article key={question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{question}</h3>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Sources</p>
                  <p className="mt-2 text-sm leading-6">{sources}</p>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Stronger support</p>
                    <p className="mt-2 text-sm leading-6">{strong}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Caution</p>
                    <p className="mt-2 text-sm leading-6">{caution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Privacy and Retention" title="Eight Monitoring Data-Minimization Rules">
          <div className="grid gap-5 md:grid-cols-2">
            {privacyRules.map(([rule, reason, substitute]) => (
              <article key={rule} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{rule}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why</p>
                  <p className="mt-2 text-sm leading-6">{reason}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Use instead</p>
                  <p className="mt-2 text-sm leading-6">{substitute}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Supplier Monitoring Gap"
          question="What does WEB-ALERT-08 support?"
          evidence={[
            "No supplier-status events are visible during the time window.",
            "Supplier Status S source health is Unknown.",
            "No independent evidence proves the supplier was down or healthy.",
          ]}
          options={[
            "The supplier definitely had no activity.",
            "The period is a monitoring Unknown; no-event evidence is weak until source health is resolved or alternate evidence is found.",
            "The supplier was compromised.",
            "The supplier was definitely healthy.",
          ]}
          bestAnswer={1}
          explanation="Absence claims depend on visibility. When source health is Unknown, the correct conclusion is bounded uncertainty."
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: No Configuration Alerts During a Blind Spot"
          scenario="The fictional configuration source was Degraded for two hours. No configuration alerts fired during that period. A manager asks whether that proves no configuration drift occurred."
          choices={[
            {
              label: "Choice A",
              response: "Say yes because there were no alerts.",
              outcome: "No-alert evidence is weak when the source used to generate those alerts was Degraded.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "State that the interval has reduced visibility, avoid a strong absence claim, use change records and alternate evidence, and validate current state after source health returns.",
              outcome: "This preserves accurate confidence and turns the monitoring gap into an owned action.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Assume configuration drift definitely occurred.",
              outcome: "A visibility gap does not prove a negative or positive event.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Fictional Evidence" title="Northbridge Web Monitoring Evidence Set">
          <div className="grid gap-5">
            {evidenceSet.map(([id, source, health, observation, supports, limits, use]) => (
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
                    ["Review use", use],
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

        <SectionCard eyebrow="Common Mistakes" title="Eight Web Monitoring Mistakes to Avoid">
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

        <SectionCard eyebrow="Safe Fictional Lab" title="Build the Northbridge Web Logging and Monitoring Review">
          <p className="leading-8">
            Use only the fictional event categories, sources, alerts, source-health states, privacy rules, correlation models, and evidence on this page. The lab teaches defensive monitoring design, not surveillance or real-system investigation.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Defender questions", "Create at least twelve fictional questions covering identity, sessions, authorization, APIs, browser protections, secrets metadata, configuration, suppliers, and critical business actions. Assign an owner and decision to each."],
              ["Phase 2 — Event taxonomy", "Map each question to an event category, source, minimum metadata, prohibited content, and expected decision value."],
              ["Phase 3 — Source health", "Assign Healthy, Conditional, Degraded, Blind, or Unknown states. Explain how each state affects confidence and absence claims."],
              ["Phase 4 — Baselines and alert concepts", "Create safe fictional baselines for sign-in, privileged sessions, API denials, config changes, secret-reference failures, browser compatibility, exports, and supplier status."],
              ["Phase 5 — Correlation and lineage", "Build five multi-source questions and mark which alerts are independent versus derived from one event."],
              ["Phase 6 — Privacy and retention", "Create prohibited-content rules, purpose-based retention, monitoring access roles, and redaction expectations."],
              ["Phase 7 — Triage and escalation", "Use privilege, scope, confidence, impact, persistence, source health, and business criticality to classify the alert cases."],
              ["Phase 8 — Final package", "Create the taxonomy, source board, privacy policy, dashboard, alert register, lineage map, monitoring gaps, owners, remediation, validation, leadership summary, and public-safe artifact."],
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
              Do not monitor real people, accounts, applications, devices, browsers, APIs, credentials, messages, private content, or networks. Do not capture secrets, tokens, cookies, private text, or real traffic. Do not probe real services. Use fictional pre-supplied telemetry only.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Design One Monitoring Program Across the Entire A10 Web Stack">
          <p className="leading-8">
            Build a fictional monitoring architecture that connects A10.2 through A10.7 while preserving privacy and evidence quality.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Create defender questions for authentication, sessions, authorization, APIs, browser protections, secrets metadata, and configuration.",
              "Choose the minimum event metadata needed for each question.",
              "Create a source-health map and identify one Degraded and one Unknown source.",
              "Define at least five independent correlation questions.",
              "Create an alert-lineage model showing how derived alerts are prevented from being overcounted.",
              "Build a privacy policy that excludes secrets, session values, full private text, and unnecessary API bodies.",
              "Create role-based monitoring access and purpose-based retention.",
              "Design escalation criteria using privilege, scope, confidence, impact, persistence, source health, and business criticality.",
              "Create one false-positive improvement and one monitoring-gap remediation.",
              "Write a leadership summary explaining why monitoring quality depends on evidence health, privacy, and decision value—not volume alone.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.8 Logging and Monitoring for Web Apps Checklist"
          items={[
            "I can define defender questions before choosing log fields.",
            "I can build event categories for authentication, sessions, authorization, APIs, input/output, browser controls, secrets metadata, configuration, and critical actions.",
            "I can minimize logs and keep secret values, session values, credentials, and unnecessary private content out.",
            "I can distinguish event, signal, alert, finding, monitoring gap, and incident candidate.",
            "I can assess source health and coverage before making claims.",
            "I can use baselines without treating every deviation as an attack.",
            "I can correlate independent sources and track alert lineage.",
            "I can improve noisy alerts through context and quality rather than blind suppression.",
            "I can use privacy-aware retention and role-based access to monitoring data.",
            "I can treat no-alert periods as Unknown when coverage or source health is weak.",
            "I can escalate based on privilege, scope, confidence, impact, persistence, source health, and business criticality.",
            "I can create a public-safe monitoring portfolio artifact using fictional metadata only.",
          ]}
        />

        <MiniQuiz
          title="A10.8 Mini Quiz: Logging and Monitoring for Web Apps"
          questions={[
            {
              question: "What should come first when designing a fictional web log?",
              choices: ["Collect every field available.", "Define the defender question and decision the log should support.", "Store complete user content.", "Create as many alerts as possible."],
              answer: 1,
              explanation: "Purpose-driven logging begins with the question and then selects the minimum useful metadata.",
            },
            {
              question: "Why should secret values stay out of general logs?",
              choices: ["They are never useful.", "They represent protected capability and metadata usually answers the defender question without exposing them.", "Logs cannot store text.", "Secrets never change."],
              answer: 1,
              explanation: "Reference, owner, status, and lifecycle metadata are safer and usually sufficient.",
            },
            {
              question: "Three alerts derive from one Authorization event. How many independent pieces of evidence is that?",
              choices: ["Three.", "One underlying source event, unless separate independent evidence exists.", "Zero.", "It cannot be determined from lineage."],
              answer: 1,
              explanation: "Alert lineage prevents derived copies from being overcounted as independent corroboration.",
            },
            {
              question: "What does a Degraded source mean for an absence claim?",
              choices: ["No event occurred.", "Visibility is limited, so the absence claim should be weaker or treated as Unknown.", "An incident definitely occurred.", "The source should be ignored forever."],
              answer: 1,
              explanation: "Source health directly affects confidence in what was or was not observed.",
            },
            {
              question: "What is the strongest way to reduce a noisy sign-in alert?",
              choices: ["Suppress all failed sign-in events.", "Add baseline, user-support context, successful-session context, correlation, and ownership while preserving the underlying event.", "Escalate every failure.", "Log passwords to investigate."],
              answer: 1,
              explanation: "Good tuning improves meaning without destroying useful evidence.",
            },
            {
              question: "What should monitoring privacy rules favor?",
              choices: ["Full content collection.", "Minimum decision-relevant metadata and bounded retention.", "Unlimited retention.", "Recording session values for correlation."],
              answer: 1,
              explanation: "Privacy-aware monitoring uses the least information needed for the approved purpose.",
            },
            {
              question: "No supplier events are visible while source health is Unknown. What is strongest?",
              choices: ["The supplier definitely had no activity.", "Treat the interval as a monitoring Unknown and seek alternate evidence.", "The supplier was compromised.", "The supplier was healthy."],
              answer: 1,
              explanation: "No-event evidence is weak when the source itself may not be reliable.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Web Logging and Monitoring Review"
          prompt="Create a fully fictional A10.8 Web Logging and Monitoring Review for Northbridge. Include defender questions; event taxonomy; authentication events; session events; authorization decisions; API events; input/output events; browser-policy events; secret metadata events; configuration events; high-impact business events; minimum required fields; prohibited log content; privacy/minimization; source inventory; source health; coverage; baselines; alert concepts; alert lineage; correlation; false-positive analysis; monitoring-gap analysis; dashboards; escalation criteria; monitoring access control; retention; source restoration; owner assignments; findings; remediation; validation; technical summary; leadership summary; governance summary; and a public-safe monitoring architecture diagram. Every user, event, source, service, alert, and outcome must be invented, and no real credentials, secrets, private content, or surveillance data may appear."
          tips={[
            "Start from defender questions, not from available data.",
            "Prefer metadata over content.",
            "Track source health and coverage explicitly.",
            "Do not overcount derived alerts.",
            "Use correlation to strengthen bounded claims, not to invent causation.",
            "Make privacy and retention part of monitoring quality.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A10.9 Web Security Review Process?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for event taxonomy, privacy-aware logging, source health, coverage, baselines, alert lineage, correlation, escalation, retention, monitoring gaps, and closure.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can design logs around approved defender questions.",
              "I can keep secrets and unnecessary private content out of monitoring.",
              "I can map authentication, session, authorization, API, browser, secret, and configuration events.",
              "I can assess source health and coverage.",
              "I can use baselines and context without declaring every deviation malicious.",
              "I can distinguish derived alerts from independent evidence.",
              "I can correlate multiple sources carefully.",
              "I can recognize monitoring gaps and limit absence claims.",
              "I can define privacy-aware retention, access, escalation, and closure.",
              "I am ready to combine A10.1–A10.8 into a structured web security review process in A10.9.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Portfolio Build Guide" title="What a Strong A10.8 Artifact Should Show">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Defender-question register",
              "Nine-category event taxonomy",
              "Source and coverage map",
              "Healthy/Conditional/Degraded/Blind/Unknown source states",
              "Privacy and prohibited-content rules",
              "Secret/session-value exclusion",
              "Purpose-based retention",
              "Baselines and alert concepts",
              "Alert-lineage map",
              "Correlation questions",
              "False-positive and monitoring-gap analysis",
              "Escalation matrix",
              "Monitoring dashboard design",
              "Owner and remediation actions",
              "Technical, leadership, and governance summaries",
              "A public-safe monitoring artifact using fictional metadata only",
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
            "Strong web monitoring starts with defender questions and collects the minimum metadata needed to answer them.",
            "Authentication, sessions, authorization, APIs, browser controls, secrets metadata, configuration, and high-impact business actions all contribute useful defensive events.",
            "Credentials, secret values, session values, and unnecessary private content do not belong in general monitoring.",
            "Source health and coverage determine how strong a monitoring conclusion can be.",
            "One event can create many alerts; alert lineage prevents overcounting derived evidence.",
            "Baselines and correlation improve alert meaning without turning normal deviation into automatic proof of attack.",
            "Noise should be reduced through context and quality improvements rather than blind suppression.",
            "Monitoring gaps should become explicit Unknowns with owners and restoration actions.",
            "Privacy, retention, access control, and source quality are core parts of monitoring.",
            "A10.8 prepares you for A10.9, where every A10 control is combined into a structured web security review process.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Defensive Monitoring Only — No Surveillance or Secret Capture</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.8 authorizes monitoring real people, private accounts, browsers, devices, networks, applications, messages, credentials, cookies, session values, secret values, or private content. Do not probe real services, capture traffic, collect unrelated user behavior, or build exploit-detection payloads. Use only fictional pre-supplied telemetry and approved defender questions.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Web Security Review Process</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.8 established event taxonomy, privacy-aware logging, source health, coverage, baselines, alert lineage, correlation, escalation, retention, monitoring gaps, and closure. A10.9 will combine secure architecture, authentication/session design, authorization, input/output safety, APIs, browser protections, secrets, configuration, and monitoring into one professional web security review workflow.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}