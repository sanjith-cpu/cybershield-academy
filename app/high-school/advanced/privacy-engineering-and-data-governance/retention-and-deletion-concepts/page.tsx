import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnalyzeEvidenceCard, DefenderChecklist, FakeAlertCard, FakeDashboardCard, FakeLogPanel, KeyTakeaways, LessonProgressBar, MiniQuiz, PortfolioPrompt, ReadinessCheck, ScenarioDecisionLab, } from "@/components/high-school/HighSchoolComponents";
const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/consent-and-user-expectations`;
const nextLesson = `${modulePath}/privacy-risk-assessments`;
const objectives = [
    "Explain retention, deletion, archival, aggregation, anonymization, legal or policy hold, and lifecycle review as different governance outcomes rather than treating every end-of-life action as simple deletion.",
    "Evaluate whether fictional data has a continuing purpose, approved retention period, accountable owner, deletion trigger, exception path, and evidence of lifecycle completion.",
    "Distinguish active data, inactive data, temporary data, archived data, backup copies, derived data, and supplier-held copies when designing privacy-respecting lifecycle controls.",
    "Analyze stale, missing, contradictory, or partial deletion evidence and determine when data should remain Treat, Conditional, Blocked, Monitor, or Closed.",
    "Build a Retention and Deletion Schedule that becomes the fifth artifact in the A16 Privacy Engineering Review.",
];
const lifecycleStates = [
    { state: "Active", meaning: "The data is still needed for the current approved business purpose.", decision: "Keep only the amount, precision, access, sharing, and retention necessary for that purpose.", evidence: "Current product requirement, active case or account, owner confirmation, workflow record." },
    { state: "Inactive", meaning: "The immediate operational use has ended, but an approved continuing requirement may still exist.", decision: "Reduce access and move the data into a lower-use lifecycle state where appropriate.", evidence: "Closed case record, ended project, expired feature state, owner review." },
    { state: "Archived", meaning: "The data is retained for a defined historical, business, records, or governance purpose with limited access.", decision: "Separate archival from active operational use and document why the archive still exists.", evidence: "Archive policy, approved schedule, restricted access, ownership and review record." },
    { state: "Temporary", meaning: "The data exists only for a short-lived workflow, project, export, cache, staging area, or processing step.", decision: "Define automatic expiry or closeout deletion and evidence before the temporary copy is created.", evidence: "Project end date, expiry configuration, cleanup job, workspace register." },
    { state: "Deletion Due", meaning: "The approved purpose or retention period has ended and no current exception or hold supports continued retention.", decision: "Remove the data through the approved lifecycle process and record evidence.", evidence: "Retention schedule, expiry event, deletion queue, owner approval." },
    { state: "Exception / Hold", meaning: "Deletion is temporarily paused because a documented governance condition requires continued retention.", decision: "Keep the exception narrow, time-bounded, owned, reviewable, and separate from normal retention.", evidence: "Approved exception or hold record, scope, owner, expiry or review date." },
    { state: "Deleted / Closed", meaning: "The organization has sufficient evidence that the intended lifecycle action completed across the required scope.", decision: "Close the lifecycle record while preserving only the minimum governance evidence needed to prove completion.", evidence: "Deletion result, reconciliation, supplier confirmation, exception closure, review record." },
];
const retentionReasons = [
    { reason: "Active service delivery", example: "A current support case needs relevant case details until the service interaction is complete.", caution: "Do not convert active-service need into indefinite retention after the case closes." },
    { reason: "Operational history", example: "A short period of communication history helps troubleshoot recent delivery issues.", caution: "Historical usefulness should have a defined boundary rather than becoming permanent storage." },
    { reason: "Approved analytics", example: "Aggregate trend data supports long-term program planning.", caution: "Long-term aggregate need may not justify long-term individual-level event retention." },
    { reason: "Business or records requirement", example: "A defined record class requires retention for an approved period.", caution: "The schedule should be tied to the actual record category and reviewed when the business process changes." },
    { reason: "Security and incident support", example: "Certain operational logs may be kept for a bounded security-monitoring period.", caution: "Security need should still be purpose-specific, access-controlled, and time-bounded." },
    { reason: "Dispute, investigation, or hold", example: "A documented governance hold temporarily pauses normal deletion for a defined scope.", caution: "A hold is not a reason to keep unrelated data or to preserve everything indefinitely." },
    { reason: "System recovery", example: "Backup copies exist to restore critical services after disruption.", caution: "Recovery copies should not quietly become alternate long-term archives for normal use." },
];
const endActions = [
    { action: "Delete", use: "Remove data when the purpose and retention period have ended.", example: "Delete temporary project exports at closeout.", evidence: "Deletion job result, reconciliation, owner review." },
    { action: "Aggregate", use: "Preserve useful trends while reducing individual-level detail.", example: "Keep monthly response-time averages after raw case-level analytics expire.", evidence: "Aggregation logic, source-expiry confirmation, dashboard design." },
    { action: "Anonymize / de-identify", use: "Reduce identifiability when a continuing approved use does not require direct identity.", example: "Use a de-identified project sample instead of identifiable source records.", evidence: "Transformation design, review of remaining linkability, purpose record." },
    { action: "Archive", use: "Move data from active systems into a restricted historical or records state when continued retention is justified.", example: "Archive closed support records under the approved schedule.", evidence: "Archive transfer record, access restriction, retention metadata." },
    { action: "Expire", use: "Automatically remove temporary or short-lived data after a defined time.", example: "Expire staging exports after 30 days.", evidence: "Lifecycle configuration, expiration logs, exception queue." },
    { action: "Hold", use: "Pause normal deletion for a narrow, approved, time-bounded governance reason.", example: "Pause deletion for records directly in scope of an approved investigation hold.", evidence: "Hold record, scope, owner, review date, release event." },
];
const evidenceDimensions = [
    { dimension: "Scope", question: "Does the evidence cover all copies that were supposed to be deleted or transitioned?", weak: "Only the primary database is checked while exports and workspaces remain unknown.", strong: "Primary system, temporary workspaces, approved exports, supplier copies, and lifecycle metadata are reconciled." },
    { dimension: "Freshness", question: "Does the evidence reflect the current lifecycle event?", weak: "A cleanup report from last year is reused for a current project.", strong: "Evidence is generated for the current closeout or scheduled deletion cycle." },
    { dimension: "Attribution", question: "Can reviewers identify which system, job, owner, or supplier produced the evidence?", weak: "A screenshot says complete with no source or record ID.", strong: "Deletion result links to the exact dataset, system, owner, and lifecycle record." },
    { dimension: "Completeness", question: "Does the evidence show success, failures, exceptions, and unresolved items?", weak: "A summary shows 98% deleted but hides the remaining 2%.", strong: "Failures and exceptions remain visible and owned until resolved." },
    { dimension: "Traceability", question: "Can the evidence be connected back to the retention schedule and data inventory?", weak: "The deletion job uses filenames that do not map to inventory records.", strong: "DATA IDs, retention rule, deletion event, exception, and closure evidence are linked." },
    { dimension: "Supplier confirmation", question: "If a third party holds copies, does the lifecycle evidence cover that dependency?", weak: "Internal deletion is complete, but supplier-held copies are unverified.", strong: "The supplier lifecycle state is tracked separately with current evidence." },
];
const backupConcepts = [
    { concept: "Backup is not active storage", explanation: "Recovery copies should not be used as an alternate data warehouse or a way to avoid normal retention." },
    { concept: "Deletion may be lifecycle-based", explanation: "Some backup systems remove expired data as backup sets age out rather than deleting one record instantly from every historical copy." },
    { concept: "Restore can reintroduce old data", explanation: "Recovery procedures should account for data that was previously deleted or expired in the active environment." },
    { concept: "Access should remain restricted", explanation: "Backup copies may contain sensitive historical data and should have tightly controlled operational access." },
    { concept: "Retention needs documentation", explanation: "Backup retention should be intentionally designed around recovery need rather than indefinite accumulation." },
    { concept: "Evidence matters", explanation: "Teams should be able to explain how backup expiry, restore procedures, and post-restore reconciliation support the approved lifecycle." },
];
const scheduleFields = [
    { field: "RET ID", purpose: "Stable identifier for the lifecycle decision.", example: "RET-501" },
    { field: "Linked DATA / MIN / EXP IDs", purpose: "Connects retention decisions to earlier A16 artifacts.", example: "DATA-203 / MIN-303 / EXP-403" },
    { field: "Data category", purpose: "Names the data or copy subject to the schedule.", example: "Individual course activity events" },
    { field: "Current purpose", purpose: "Explains why the data exists now.", example: "Approved bounded analytics" },
    { field: "Retention period", purpose: "Defines how long the data remains available under normal conditions.", example: "Project period + 30-day closeout window" },
    { field: "Trigger", purpose: "Defines what starts the retention clock or deletion action.", example: "Project close date" },
    { field: "End action", purpose: "Defines Delete, Aggregate, Archive, Expire, Hold, or another approved lifecycle result.", example: "Delete individual-level workspace; retain aggregate report" },
    { field: "Owner", purpose: "Names the accountable role for the lifecycle decision.", example: "Learning Analytics Owner" },
    { field: "Exception / hold", purpose: "Shows whether normal deletion is paused and why.", example: "None" },
    { field: "Evidence", purpose: "Defines what proves the lifecycle control operated.", example: "Closeout record + deletion-job result + workspace reconciliation" },
    { field: "State", purpose: "Shows whether the lifecycle is Treat, Conditional, Monitor, Blocked, or Closed.", example: "Treat" },
    { field: "Review trigger", purpose: "Defines what should reopen the decision.", example: "New purpose, supplier, retention extension, or failed deletion" },
];
const records = [
    { id: "RET-501", linked: "DATA-201 / EXP-401", data: "Notification preference history", purpose: "Support current communication preference and recent troubleshooting.", retention: "Current preference + 90 days of historical change", trigger: "Preference superseded", action: "Delete obsolete history after 90 days", owner: "Communications Product Owner", exception: "None", evidence: "Preference history report + scheduled deletion result", confidence: "Moderate", issue: "Historical retention has not yet been implemented consistently", state: "Treat" },
    { id: "RET-502", linked: "DATA-202 / MIN-302 / EXP-405", data: "Closed support case records", purpose: "Maintain approved service record after case closure.", retention: "Per approved support-record schedule", trigger: "Case closed", action: "Archive with restricted access, then delete at schedule expiry", owner: "Student Services Data Owner", exception: "Narrow governance hold may pause deletion for records directly in scope", evidence: "Case status + archive transfer + retention metadata", confidence: "High", issue: "No current material gap", state: "Monitor" },
    { id: "RET-503", linked: "DATA-203 / MIN-303 / EXP-403", data: "Individual course activity event history", purpose: "Support bounded analytics projects.", retention: "Active approved project period + short closeout window", trigger: "Project close or purpose end", action: "Delete individual-level project copies; retain approved aggregate trends", owner: "Learning Analytics Owner", exception: "Project extension requires documented reapproval", evidence: "Project register + workspace inventory + deletion result", confidence: "Moderate", issue: "Different analytics workspaces currently use inconsistent expiry dates", state: "Treat" },
    { id: "RET-504", linked: "DATA-204 / MIN-304", data: "Individual engagement indicator", purpose: "No approved continuing operational purpose at individual level.", retention: "Should not persist outside explicitly approved bounded research", trigger: "Indicator generated", action: "Avoid persistence or delete at research closeout", owner: "Learning Analytics Owner", exception: "Only a separately approved research purpose", evidence: "Model output inventory + project scope + closeout review", confidence: "High", issue: "Persistent operational storage would create unnecessary privacy exposure", state: "Treat" },
    { id: "RET-505", linked: "DATA-205 / MIN-305 / EXP-402", data: "Partner scheduling data copy", purpose: "Complete active appointment scheduling.", retention: "Operational scheduling window only", trigger: "Appointment completed or canceled", action: "Expire partner-side operational copy under approved service lifecycle", owner: "Integration Product Owner", exception: "Documented dispute or service issue may extend a narrow record", evidence: "Partner lifecycle evidence + interface record + owner review", confidence: "Low-Moderate", issue: "Supplier-side lifecycle evidence is incomplete", state: "Conditional" },
    { id: "RET-506", linked: "DATA-206 / MIN-306 / EXP-404", data: "Temporary research export and derived workspace", purpose: "Support a six-week internal research project.", retention: "Six-week project + 14-day closeout", trigger: "Project close date", action: "Delete export and derived workspace", owner: "Research Program Owner", exception: "Extension requires project-owner and privacy review", evidence: "Workspace register + deletion job + closeout attestation", confidence: "High until closeout", issue: "Deletion evidence will be required when the project closes", state: "Conditional" },
    { id: "RET-507", linked: "DATA-207 / MIN-307 / EXP-406", data: "Aggregate support quality trends", purpose: "Support long-term staffing and service-performance analysis.", retention: "Multi-year aggregate trend period", trigger: "Metric superseded or no longer operationally useful", action: "Retain aggregates; source-level detail remains outside the dashboard", owner: "Operations Analytics Owner", exception: "None", evidence: "Dashboard design + aggregation review + source-retention separation", confidence: "High", issue: "Low privacy concern if aggregation remains strong", state: "Monitor" },
];
const lifecycleChangeTriggers = [
    {
        trigger: "Purpose change",
        meaning: "The original reason for keeping the data changes or ends.",
        response: "Reassess whether the old retention period still makes sense and whether a new purpose needs separate approval.",
        example: "A support dataset moves from active case work to proposed analytics use."
    },
    {
        trigger: "Supplier change",
        meaning: "A new provider, subcontractor, storage location, or service architecture changes where copies exist.",
        response: "Refresh supplier lifecycle scope, evidence expectations, and deletion ownership.",
        example: "A scheduling integration moves to a new external platform."
    },
    {
        trigger: "Retention extension",
        meaning: "A team proposes keeping data longer than the approved schedule.",
        response: "Require a current purpose, owner, evidence, and bounded governance decision before extending retention.",
        example: "A six-week research project asks to preserve detailed exports for another year."
    },
    {
        trigger: "Control failure",
        meaning: "A deletion, expiry, archival, or cleanup control does not operate as expected.",
        response: "Keep the record open, assess affected scope, assign remediation, and revalidate after correction.",
        example: "A cleanup job skips several temporary workspaces."
    },
    {
        trigger: "Restore event",
        meaning: "A recovery operation can reintroduce older data into an active environment.",
        response: "Reconcile restored records against current deletion and retention state before normal processing resumes.",
        example: "A restored database contains records that had expired after the backup was created."
    },
    {
        trigger: "Ownership change",
        meaning: "The accountable data, product, or system owner changes.",
        response: "Confirm the new owner accepts the current schedule, exceptions, evidence, and unresolved lifecycle obligations.",
        example: "A product transitions from one business unit to another."
    },
];

const closureQuestions = [
    "Did the intended lifecycle action complete for the primary system?",
    "Were temporary workspaces, exports, caches, and derived copies included in scope?",
    "Were supplier-held copies addressed where relevant?",
    "Did any deletion or archival operation fail?",
    "Are active exceptions or holds still valid and properly scoped?",
    "Does the evidence identify the exact data, system, owner, and lifecycle event?",
    "Could a backup restore reintroduce expired data, and is reconciliation defined?",
    "Has the remaining aggregate or archive data been tied to a continuing approved purpose?",
    "Are residual privacy risks and evidence limitations still visible?",
    "Would another reviewer understand why the record is truly ready to close?",
];

const dashboardMetrics = [
    { label: "Retention records", value: "7", note: "Preferences, support, analytics, partner, research, and aggregate reporting" },
    { label: "Treat", value: "3", note: "Preference history, analytics workspace expiry, and unnecessary indicator persistence need action" },
    { label: "Conditional", value: "2", note: "Partner lifecycle evidence and temporary research closeout remain pending" },
    { label: "Supplier evidence gaps", value: "1", note: "Partner-side deletion confirmation is incomplete" },
];
const logs = [
    "[08:20] RET-501 data=PREFERENCE_HISTORY retention=90_DAYS implementation=PARTIAL state=TREAT",
    "[08:42] RET-502 data=SUPPORT_CASE archive=RESTRICTED state=MONITOR",
    "[09:04] RET-503 data=ACTIVITY_EVENTS expiry=INCONSISTENT state=TREAT",
    "[09:26] RET-504 data=ENGAGEMENT_INDICATOR operational_need=NO state=TREAT",
    "[09:48] RET-505 data=PARTNER_COPY supplier_evidence=PARTIAL state=CONDITIONAL",
    "[10:10] RET-506 data=RESEARCH_EXPORT closeout=FUTURE state=CONDITIONAL",
    "[10:32] RET-507 data=AGGREGATE_TRENDS source_separated=TRUE state=MONITOR",
];
const mistakes = [
    { title: "Keep forever by default", problem: "The team never defines what continuing purpose justifies long-term storage.", better: "Set a retention period, trigger, owner, and end action for every important data category." },
    { title: "Delete only from the primary database", problem: "Exports, temporary workspaces, supplier copies, and derived datasets remain.", better: "Define the required lifecycle scope and reconcile all known copies." },
    { title: "Backup treated as permanent archive", problem: "Recovery copies quietly become a way to preserve expired data indefinitely.", better: "Design backup retention around recovery need and document aging, restore, and reconciliation behavior." },
    { title: "Hold with no scope or expiry", problem: "A temporary governance hold becomes indefinite retention for unrelated data.", better: "Limit holds to defined records, owners, reasons, and review dates." },
    { title: "Deletion evidence is a screenshot", problem: "A one-off image cannot prove scope, attribution, failures, supplier copies, or reconciliation.", better: "Use traceable lifecycle evidence tied to DATA and RET records." },
    { title: "Aggregate and raw data retained equally", problem: "The organization keeps detailed individual records even after aggregate trends meet the business need.", better: "Separate retention by data granularity and continuing purpose." },
    { title: "Supplier deletion assumed", problem: "Internal deletion is complete, but external copies are never checked.", better: "Track supplier lifecycle evidence separately." },
    { title: "Close before failures are resolved", problem: "A lifecycle job mostly succeeds, but failed records or exceptions are hidden.", better: "Keep the record open until failures, exceptions, and required scope are reconciled." },
];
const scenarioOneChoices = [
    { label: "Choice A", response: "Keep the lifecycle record Conditional until supplier-side deletion evidence is current and the approved scheduling-retention scope is verified.", outcome: "Best. Internal confidence should not be higher than the evidence available for the external copy.", tone: "best" as const },
    { label: "Choice B", response: "Mark Closed because the internal system already deleted its copy.", outcome: "Risky. The supplier copy is part of the lifecycle scope.", tone: "risk" as const },
    { label: "Choice C", response: "Ignore supplier retention because the partner has a contract.", outcome: "Risky. Contract existence does not prove lifecycle completion.", tone: "risk" as const },
];
const scenarioTwoChoices = [
    { label: "Choice A", response: "Retain the aggregate trend needed for long-term reporting and expire individual-level project events after the approved project window.", outcome: "Best. Different data forms can have different retention periods based on purpose.", tone: "best" as const },
    { label: "Choice B", response: "Keep all individual events for the same multi-year period as the aggregate dashboard.", outcome: "Risky. Aggregate need does not automatically justify detailed individual retention.", tone: "risk" as const },
    { label: "Choice C", response: "Delete both individual events and aggregates immediately.", outcome: "Caution. That would remove legitimate long-term reporting value.", tone: "caution" as const },
];
const quizQuestions = [
    { question: "What is a retention schedule?", choices: ["A documented rule connecting a data category to purpose, retention period, trigger, end action, owner, exception path, and evidence.", "A list of database sizes.", "A backup password.", "A one-time deletion screenshot."], answer: 0, explanation: "A useful retention schedule makes the lifecycle decision explicit and reviewable." },
    { question: "What is strongest when the business needs long-term aggregate trends but not long-term individual event histories?", choices: ["Keep approved aggregates and shorten individual-level retention.", "Keep all detailed events forever.", "Delete all reporting data immediately.", "Share the detailed events more broadly."], answer: 0, explanation: "Different forms of data can have different retention based on continuing purpose." },
    { question: "Why is supplier deletion evidence important?", choices: ["Because external copies remain part of the lifecycle even after internal copies are deleted.", "Because suppliers always delete instantly.", "Because contracts eliminate the need for evidence.", "Because only suppliers own retention."], answer: 0, explanation: "Lifecycle scope should include relevant third-party copies." },
    { question: "What is strongest for a temporary governance hold?", choices: ["Limit it to a defined scope, owner, reason, review date, and release condition.", "Apply it to all organizational data forever.", "Hide it from the retention schedule.", "Treat it as normal retention."], answer: 0, explanation: "Holds should be narrow, explicit, and reviewable." },
    { question: "What should deletion evidence show?", choices: ["Scope, source, attribution, completion, failures, exceptions, and traceability to the data and retention decision.", "Only that someone clicked Delete.", "Only a screenshot.", "Only the system name."], answer: 0, explanation: "Deletion evidence should support a defensible lifecycle conclusion." },
    { question: "Which statement about backups is strongest?", choices: ["Backup retention should support recovery needs without becoming an ungoverned permanent archive.", "Backups never contain sensitive data.", "Backups can ignore retention completely.", "Deleted data can never reappear after restore."], answer: 0, explanation: "Backup lifecycle should be intentionally designed and reconciled with retention goals." },
    { question: "When should a retention record remain open instead of Closed?", choices: ["When required copies, failed deletions, exceptions, supplier evidence, or lifecycle scope remain unresolved.", "Whenever the data is old.", "Whenever storage is cheap.", "Whenever the owner is busy."], answer: 0, explanation: "Closure should match complete, current lifecycle evidence." },
];
const checklistItems = [
    "Every important data category has a retention decision.",
    "Current purpose is documented.",
    "Retention period is documented.",
    "Retention trigger is documented.",
    "End action is documented.",
    "Data owner is named.",
    "System or product owner is known.",
    "Temporary data has an expiry.",
    "Derived data has a lifecycle.",
    "Supplier-held copies are considered.",
    "Backup behavior is considered.",
    "Archive access is restricted.",
    "Exception or hold scope is documented.",
    "Exception or hold review date is documented.",
    "Deletion evidence covers required scope.",
    "Deletion failures remain visible.",
    "Evidence freshness is checked.",
    "Closure requires sufficient evidence.",
    "Change triggers are defined.",
    "All examples use fictional or synthetic data only.",
];
const takeaways = [
    "Retention should be tied to a continuing purpose, not storage convenience.",
    "Delete, aggregate, anonymize, archive, expire, and hold are different lifecycle actions.",
    "Temporary data still needs ownership, expiry, and evidence.",
    "Supplier-held copies belong in the lifecycle review.",
    "Backups should support recovery without becoming ungoverned archives.",
    "Deletion evidence should prove scope, attribution, completeness, and traceability.",
    "Failed deletions and exceptions should remain visible until resolved.",
    "Aggregate data can often outlive individual-level source data when the business purpose differs.",
    "A hold should be narrow, owned, time-bounded, and reviewable.",
    "The Retention and Deletion Schedule prepares you for A16.6 Privacy Risk Assessments.",
];
function Section({ eyebrow, title, children }: {
    eyebrow: string;
    title: string;
    children: ReactNode;
}) {
    return (<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">{title}</h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>);
}
function Navigation() {
    return (<div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100">Module A16</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>);
}
export default function RetentionAndDeletionConceptsPage() {
    return (<main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">A16.5</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">Privacy Engineering and Data Governance</span>
          </div>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Lesson A16.5</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">Retention and Deletion Concepts</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Privacy engineering does not stop when data enters a system. This lesson follows data through active use, inactivity, archival, temporary processing, expiry, deletion, exceptions, suppliers, and backups so the lifecycle remains intentional and evidence-based.</p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-400">All data, systems, suppliers, records, exceptions, and lifecycle evidence are fictional or synthetic. This lesson does not provide legal advice.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Advanced" moduleTitle="A16: Privacy Engineering and Data Governance" lessonTitle="Retention and Deletion Concepts" lessonNumber={5} totalLessons={10}/>

        <ReadinessCheck title="A16.5 Entry Readiness" items={[
            "I can explain why a data category exists and whether its purpose is still active.",
            "I can distinguish individual-level data from aggregate data.",
            "I understand that temporary data and supplier copies still need lifecycle governance.",
            "I will use fictional or synthetic lifecycle records only.",
        ]}/>

        <Section eyebrow="Professional Hook" title="Data Should Not Outlive Its Reason for Existing">
          <p className="leading-8">Retention decisions are often invisible until something goes wrong: an old export remains in a workspace, a supplier still holds a copy, an expired project dataset becomes a permanent archive, or a restore brings back information the active system had already deleted. Privacy engineering makes those lifecycle decisions explicit.</p>
          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50"><p className="text-xl font-black">Good lifecycle design answers three questions: why keep it, until when, and what proves the end action happened?</p></div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for This Lesson">
          <div className="grid gap-4">{objectives.map((objective, index) => <div key={objective} className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span><p className="leading-7">{objective}</p></div>)}</div>
        </Section>

        <Section eyebrow="Lifecycle States" title="Seven States From Active Use to Closure">
          <div className="grid gap-5">{lifecycleStates.map((item) => <article key={item.state} className="rounded-3xl border border-slate-700 bg-slate-950 p-6"><h3 className="text-xl font-black text-white">{item.state}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{item.meaning}</p><p className="mt-3 text-sm leading-7 text-cyan-100">Decision: {item.decision}</p><p className="mt-3 text-sm leading-7 text-emerald-100">Evidence: {item.evidence}</p></article>)}</div>
        </Section>

        <Section eyebrow="Why Keep Data?" title="Seven Legitimate Retention Reasons">
          <div className="grid gap-5 md:grid-cols-2">{retentionReasons.map((item) => <article key={item.reason} className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"><h3 className="font-black text-blue-50">{item.reason}</h3><p className="mt-2 text-sm leading-7 text-blue-100">Example: {item.example}</p><p className="mt-3 text-sm leading-7 text-yellow-100">Caution: {item.caution}</p></article>)}</div>
        </Section>

        <Section eyebrow="End-of-Life Actions" title="Deletion Is One of Several Lifecycle Outcomes">
          <div className="grid gap-5 md:grid-cols-2">{endActions.map((item) => <article key={item.action} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"><h3 className="font-black text-emerald-50">{item.action}</h3><p className="mt-2 text-sm leading-7 text-emerald-100">Use: {item.use}</p><p className="mt-3 text-sm leading-7 text-white">Example: {item.example}</p><p className="mt-3 text-sm leading-7 text-cyan-100">Evidence: {item.evidence}</p></article>)}</div>
        </Section>

        <Section eyebrow="Deletion Evidence" title="Six Dimensions of Defensible Lifecycle Evidence">
          <div className="grid gap-5 md:grid-cols-2">{evidenceDimensions.map((item) => <article key={item.dimension} className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"><h3 className="font-black text-purple-50">{item.dimension}</h3><p className="mt-2 text-sm leading-7 text-purple-100">Ask: {item.question}</p><p className="mt-3 text-sm leading-7 text-red-100">Weak: {item.weak}</p><p className="mt-2 text-sm leading-7 text-emerald-100">Strong: {item.strong}</p></article>)}</div>
        </Section>

        <Section eyebrow="Backups" title="Recovery Copies Need Lifecycle Governance Too">
          <div className="grid gap-5 md:grid-cols-2">{backupConcepts.map((item) => <article key={item.concept} className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"><h3 className="font-black text-yellow-50">{item.concept}</h3><p className="mt-2 text-sm leading-7 text-yellow-100">{item.explanation}</p></article>)}</div>
        </Section>

        <Section eyebrow="Retention Schedule Anatomy" title="What a Reviewable Retention Record Should Contain">
          <div className="grid gap-5 md:grid-cols-2">{scheduleFields.map((item) => <article key={item.field} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-white">{item.field}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{item.purpose}</p><p className="mt-3 text-sm leading-7 text-cyan-100">Example: {item.example}</p></article>)}</div>
        </Section>

        <Section eyebrow="Fictional Retention Schedule" title="Seven Northbridge Lifecycle Decisions">
          <div className="grid gap-5">{records.map((item) => <article key={item.id} className="rounded-3xl border border-slate-700 bg-slate-950 p-6"><div className="flex flex-wrap gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">{item.id}</span><span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">{item.state}</span><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">{item.linked}</span></div><h3 className="mt-5 text-xl font-black text-white">{item.data}</h3><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[["Purpose", item.purpose], ["Retention", item.retention], ["Trigger", item.trigger], ["End action", item.action], ["Owner", item.owner], ["Exception / hold", item.exception], ["Evidence", item.evidence], ["Evidence confidence", item.confidence], ["Issue", item.issue]].map(([label, value]) => <div key={label} className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">{label}</p><p className="mt-2 text-sm leading-7 text-blue-50">{value}</p></div>)}</div></article>)}</div>
        </Section>

        <Section eyebrow="Change Triggers" title="Retention Decisions Must Reopen When the Environment Changes">
          <p className="leading-8">A retention schedule is not permanent simply because it was once approved. Product, supplier, architecture, recovery, and ownership changes can make an old lifecycle decision stale.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{lifecycleChangeTriggers.map((item) => <article key={item.trigger} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"><h3 className="font-black text-cyan-50">{item.trigger}</h3><p className="mt-2 text-sm leading-7 text-cyan-100">{item.meaning}</p><p className="mt-3 text-sm leading-7 text-white">Response: {item.response}</p><p className="mt-3 text-sm leading-7 text-emerald-100">Example: {item.example}</p></article>)}</div>
        </Section>

        <Section eyebrow="Closure Review" title="Ten Questions Before Marking a Lifecycle Record Closed">
          <p className="leading-8">Closure should mean more than “the job ran.” It should mean the required scope, evidence, exceptions, suppliers, and residual lifecycle risks have been reconciled well enough for a defensible conclusion.</p>
          <div className="mt-6 grid gap-4">{closureQuestions.map((item,index) => <div key={item} className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index+1}</span><p className="leading-7">{item}</p></div>)}</div>
        </Section>

        <FakeDashboardCard title="Northbridge Retention and Deletion Dashboard" subtitle="Fictional retention, deletion, supplier, backup, exception, and evidence summary" metrics={dashboardMetrics}/>
        <FakeAlertCard title="Partner-Side Deletion Evidence Is Incomplete" severity="High" time="09:48" source="Fictional Retention Governance Review" details="RET-505 shows that internal scheduling data follows the approved lifecycle, but current supplier-side evidence does not fully prove that external operational copies expire after the scheduling window." recommendation="Keep the lifecycle record Conditional until supplier-side deletion evidence is current and the external retention scope is verified."/>
        <FakeLogPanel title="Fictional Retention and Deletion Review Log" logs={logs}/>

        <AnalyzeEvidenceCard title="Evidence Analysis: Supplier-Side Lifecycle" question="What is the strongest current decision for RET-505?" evidence={["The internal scheduling system removes its operational copy after the appointment lifecycle ends.", "The partner receives only approved scheduling data.", "The partner contract describes lifecycle expectations.", "Current supplier-side deletion evidence is incomplete.", "No active dispute or hold is documented."]} options={["Keep the record Conditional until current supplier-side lifecycle evidence confirms the approved retention and deletion scope.", "Mark Closed because the internal copy is already deleted.", "Mark Closed because a contract exists.", "Ignore supplier retention because the partner is external."]} bestAnswer={0} explanation="The lifecycle scope includes the supplier-held copy. Internal deletion and contractual language do not by themselves prove external lifecycle completion."/>

        <Section eyebrow="Common Retention Mistakes" title="Eight Ways Lifecycle Governance Breaks">
          <div className="grid gap-5">{mistakes.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-6"><div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">{index + 1}</span><div><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-red-100">Why it fails: {item.problem}</p><p className="mt-2 text-sm leading-7 text-emerald-100">Better approach: {item.better}</p></div></div></article>)}</div>
        </Section>

        <ScenarioDecisionLab title="Scenario Decision Lab 1 — Supplier Copy After Internal Deletion" scenario="The organization deletes its scheduling copy after the appointment ends, but current evidence does not confirm when the external scheduling partner removes its copy." choices={scenarioOneChoices}/>
        <ScenarioDecisionLab title="Scenario Decision Lab 2 — Aggregate Trends vs. Individual Events" scenario="Leadership needs multi-year service trends, but the analytics team currently keeps individual course activity events for the same period even though aggregate trend data supports the reporting need." choices={scenarioTwoChoices}/>

        <Section eyebrow="Safe Fictional Lab" title="Build a Retention and Deletion Schedule">
          <p className="leading-8">Use your fictional A16 data inventory and minimization work to build a reviewable lifecycle schedule for active, inactive, temporary, supplier-held, derived, archived, and aggregate data.</p>
          <div className="mt-6 grid gap-4">{[
            "Create at least thirty fictional retention records.", "Give every record a stable RET ID.", "Link each record to relevant DATA, MIN, or EXP IDs.", "Name the data category or copy.", "Write the current purpose.", "Record the lifecycle state.", "Set the normal retention period.", "Define the retention trigger.", "Define the end action.", "Name the data owner.", "Name the system or product owner.", "Record supplier or partner copies.", "Record backup relevance.", "Record archival behavior.", "Record temporary-workspace behavior.", "Record any derived-data lifecycle.", "Record exception or hold conditions.", "Record exception or hold owner.", "Record review or expiry date for exceptions.", "Define deletion evidence.", "Rate evidence confidence.", "Record failed or partial deletion outcomes.", "Define closure criteria.", "Define change triggers.", "Include at least five Delete outcomes.", "Include at least five Aggregate outcomes.", "Include at least five Archive outcomes.", "Include at least five Expire outcomes.", "Include at least three supplier-held lifecycle records.", "Include at least three temporary-workspace records.", "Include at least three backup-related records.", "Include at least three exception or hold records.", "Include at least three records with partial or stale deletion evidence.", "Include at least three cases where aggregate data can remain longer than individual-level data."
        ].map((item, index) => <div key={item} className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">{index + 1}</span><p className="leading-7">{item}</p></div>)}</div>
          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50"><p className="font-black">Lab boundary</p><p className="mt-2 leading-7">Use fictional or synthetic data only. Do not access real storage systems, backups, cloud accounts, supplier portals, private records, or confidential retention schedules. Do not attempt to delete or alter real organizational data.</p></div>
        </Section>

        <AnalyzeEvidenceCard title="Evidence Analysis: Long-Term Aggregate Reporting" question="What is the strongest current decision for RET-503?" evidence={["Leadership needs multi-year program trends.", "Aggregate reports support that long-term need.", "Individual activity events are needed only during bounded analytics projects.", "Different workspaces currently use inconsistent expiry dates.", "No approved business purpose requires multi-year individual-level retention."]} options={["Standardize a shorter individual-level retention period tied to project purpose while keeping approved aggregate trends longer.", "Keep every individual event for the entire multi-year dashboard period.", "Delete all analytics data, including aggregate trends, immediately.", "Allow each workspace to choose any retention period independently."]} bestAnswer={0} explanation="The strongest design separates retention by continuing purpose and data granularity."/>

        <Section eyebrow="Advanced Challenge" title="Design a Retention and Deletion Governance Standard">
          <p className="leading-8">Create a fictional organization-wide standard that explains how teams set retention, manage temporary data, coordinate supplier copies, handle backups, document exceptions, and prove lifecycle completion.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{["Retention categories", "Business-purpose requirement", "Retention trigger", "Retention period", "End action", "Data owner", "System owner", "Temporary data", "Derived data", "Supplier copies", "Archive controls", "Backup lifecycle", "Exception / hold process", "Exception scope", "Exception review date", "Deletion evidence", "Failure handling", "Closure criteria", "Change triggers", "Escalation rules"].map((item, index) => <div key={item} className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">{index + 1}</span><p className="leading-7">{item}</p></div>)}</div>
          <p className="mt-6 leading-8">The strongest standard should make retention intentional and make deletion provable without pretending that every system has the same lifecycle mechanics.</p>
        </Section>

        <DefenderChecklist title="A16.5 Defender Checklist" items={checklistItems}/>

        <Section eyebrow="Skill Check" title="Seven Questions"><MiniQuiz title="A16.5 Mini Quiz: Retention and Deletion Concepts" questions={quizQuestions}/></Section>

        <PortfolioPrompt title="Portfolio Build — Retention and Deletion Schedule" prompt="Create the fifth artifact for your A16 Privacy Engineering Review: a fictional Retention and Deletion Schedule with at least thirty records. Include RET ID, linked DATA/MIN/EXP IDs, data category/copy, current purpose, lifecycle state, retention period, retention trigger, end action, data owner, system/product owner, supplier copy, backup relevance, archive behavior, temporary-data behavior, derived-data lifecycle, exception/hold condition, exception owner, review/expiry date, deletion evidence, evidence confidence, failure state, closure criteria, and change triggers." tips={["Tie retention to continuing purpose.", "Separate individual-level and aggregate retention.", "Include supplier and temporary copies.", "Treat backups as recovery systems, not ungoverned archives.", "Keep failures and exceptions visible.", "Use fictional or synthetic records only."]}/>

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A16.6?">
          <p className="leading-8">A16.6 focuses on Privacy Risk Assessments. Before continuing, make sure you can explain how weak retention, stale deletion evidence, supplier copies, or indefinite exceptions can become privacy risk.</p>
          <div className="mt-6 grid gap-4">{[
            "I can distinguish Active, Archived, Temporary, Deletion Due, Exception/Hold, and Closed lifecycle states.",
            "I can explain why aggregate and individual-level data may need different retention periods.",
            "I can evaluate supplier and backup lifecycle issues.",
            "I can define evidence that proves a deletion or archive decision.",
            "I can keep lifecycle records open when failures, exceptions, or scope remain unresolved."
        ].map((item, index) => <div key={item} className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">{index + 1}</span><p className="leading-7">{item}</p></div>)}</div>
        </Section>

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Retention and Deletion Schedule Look Professional">
          <div className="grid gap-5 md:grid-cols-2">{[
            ["Tie every period to purpose", "Avoid arbitrary retention numbers without an explained business or governance reason."],
            ["Define the trigger", "State when the retention clock starts: case close, project close, superseded preference, contract end, or another event."],
            ["Define the end action", "Use Delete, Aggregate, Archive, Expire, Hold, or another clearly governed result."],
            ["Show all important copies", "Include suppliers, exports, temporary workspaces, derived datasets, and backup relevance."],
            ["Show exception logic", "Exceptions and holds need scope, owner, review date, and release condition."],
            ["Show evidence confidence", "Partial supplier or deletion evidence should reduce confidence instead of being treated as complete."],
            ["Use objective closure", "Close the record only after the required lifecycle scope is sufficiently evidenced."],
            ["Connect forward", "A16.6 will convert lifecycle weaknesses and other privacy concerns into structured privacy risk assessments."]
        ].map(([title, detail]) => <article key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-white">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p></article>)}</div>
        </Section>

        <KeyTakeaways takeaways={takeaways}/>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Lesson Safety Boundary</p><h2 className="mt-2 text-2xl font-black">Retention and deletion exercises use synthetic records only</h2><p className="mt-3 leading-7">Do not access, alter, delete, restore, or inspect real organizational data, backups, cloud storage, supplier systems, private records, or confidential retention schedules. All lifecycle records and evidence in this lesson are fictional and educational.</p></section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Lesson Complete</p><h2 className="mt-2 text-2xl font-black text-white">A16.5 Retention and Deletion Concepts Complete</h2><p className="mt-3 max-w-4xl leading-7 text-cyan-50">You now have a structured model for active, archived, temporary, expired, held, supplier-held, backup, and deleted data. Next, A16.6 focuses on Privacy Risk Assessments.</p><div className="mt-6"><Navigation /></div></section>
      </div>

      <Footer />
    </main>);
}