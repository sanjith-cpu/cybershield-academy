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
const modulePath = `${trackPath}/digital-forensics-concepts`;
const previousLesson = `${modulePath}/log-correlation-for-forensics`;
const nextLesson = `${modulePath}/ethical-limits-in-investigations`;

const objectives = [
  "Structure a professional fictional forensic report with purpose, authority, scope, evidence, chronology, findings, limitations, confidence, alternatives, unresolved questions, review, and distribution.",
  "Separate fictional observations, interpretations, findings, conclusions, assumptions, limitations, recommendations, and non-proof statements so readers can see how evidence supports each claim.",
  "Adapt fictional forensic communication for technical reviewers, service owners, leadership, privacy or governance reviewers, and public-safe portfolio audiences without changing the underlying evidence.",
  "Apply versioning, correction history, reviewer comments, approval state, distribution control, retention, and disclosure boundaries to a fictional forensic report lifecycle.",
  "Write concise, bounded fictional findings that remain defensible when evidence is Conditional, Degraded, Conflicting, delayed, transformed, incomplete, or Unknown.",
];

const vocabulary = [
  ["Purpose statement", "Why the fictional investigation exists and which decision the report supports."],
  ["Authority statement", "Who requested, approved, reviewed, and owns the fictional investigation and its reporting decisions."],
  ["Scope statement", "The fictional systems, identities, services, evidence categories, time period, exclusions, and stop conditions covered by the report."],
  ["Observation", "A statement directly traceable to supplied fictional evidence without added claims about cause, intent, or attribution."],
  ["Finding", "An evidence-supported fictional analytical statement answering part of the approved forensic question."],
  ["Conclusion", "A fictional summary judgment integrating one or more findings while preserving confidence and limitations."],
  ["Limitation", "A condition reducing certainty, completeness, attribution, timing precision, source coverage, or interpretive strength."],
  ["Alternative explanation", "A plausible fictional explanation that fits the supplied evidence without requiring the primary interpretation to be true."],
  ["Confidence", "A statement describing how strongly fictional evidence supports a finding and why."],
  ["Non-proof statement", "A sentence stating what the fictional evidence still does not establish."],
  ["Version history", "A record showing fictional report changes, reasons, reviewers, affected findings, and redistribution."],
  ["Distribution boundary", "The fictional rule defining which audience may receive which level of report detail."],
];

const reportSections = [
  {
    title: "Executive summary",
    purpose: "State the fictional question, strongest answer, confidence, major limitation, and immediate owner decision in plain language.",
    include: "Decision-relevant conclusion, confidence, material Unknowns, and next owner action.",
    avoid: "Technical overload, hidden limitations, unsupported blame, or unnecessary evidence detail.",
  },
  {
    title: "Purpose and authority",
    purpose: "Explain why the fictional investigation was performed and under whose approved authority.",
    include: "Requesting owner, decision owner, purpose, authorization state, and review ownership.",
    avoid: "Vague claims such as “we investigated because it looked suspicious.”",
  },
  {
    title: "Scope and exclusions",
    purpose: "Define exactly what the fictional report covers and intentionally does not cover.",
    include: "Systems, identities, services, time window, evidence categories, exclusions, scope changes, and stop conditions.",
    avoid: "Implying the report covers systems, identities, or periods that were never reviewed.",
  },
  {
    title: "Evidence summary",
    purpose: "List the fictional evidence used and explain source health, provenance, transformation, and limitations.",
    include: "Evidence IDs, category, owner, source health, purpose, and major limitations.",
    avoid: "Treating every record as equally strong or hiding Conditional evidence.",
  },
  {
    title: "Chronology",
    purpose: "Present the supported fictional sequence while distinguishing event, receipt, processing, review, and decision times.",
    include: "Time type, source health, precision, gaps, delays, and non-causal language.",
    avoid: "Turning nearby timestamps into automatic cause-and-effect claims.",
  },
  {
    title: "Findings",
    purpose: "Answer the approved fictional forensic questions using evidence-linked analytical statements.",
    include: "Evidence references, support, confidence, limitation, alternative explanation, and non-proof statement.",
    avoid: "Blame, certainty theater, or claims exceeding the supplied evidence.",
  },
  {
    title: "Unresolved questions",
    purpose: "Make fictional Unknowns, missing evidence, owner questions, and future dependencies visible.",
    include: "Owner, decision impact, review trigger, and reopen criteria when appropriate.",
    avoid: "Hiding gaps because they make the report look less complete.",
  },
  {
    title: "Review and distribution",
    purpose: "Document who reviewed the fictional report, which version was approved, and which audience receives each level of detail.",
    include: "Reviewers, version, approval, recipients, minimization, retention, and correction process.",
    avoid: "Sending the full technical report to every audience.",
  },
];

const findings = [
  {
    id: "RF-01",
    question: "Was fictional Account A associated with the approved service session?",
    evidence: "BA-01 authentication + BA-02 session + EP-03 endpoint association",
    finding: "Account A was associated with Session S during the approved review period.",
    confidence: "High",
    limitation: "Shared Endpoint D-17 prevents confident physical-person attribution.",
    alternative: "Approved shared-device use or stale-session continuation remain plausible.",
    nonProof: "The evidence does not independently establish which person physically controlled the session.",
  },
  {
    id: "RF-02",
    question: "Did the fictional workflow event occur during the active session?",
    evidence: "TL-03 workflow event + BA-02 session interval",
    finding: "The workflow event occurred during the interval represented as an active Account A session.",
    confidence: "Moderate",
    limitation: "The application source was Degraded during part of the interval.",
    alternative: "The event may be unrelated to the account session despite temporal overlap.",
    nonProof: "Temporal overlap does not prove that the session caused the workflow event.",
  },
  {
    id: "RF-03",
    question: "Did the fictional supplier dependency change precede the workflow event?",
    evidence: "TL-05 supplier note + TL-03 workflow event",
    finding: "The supplier note reports a dependency-state change before the workflow event.",
    confidence: "Conditional",
    limitation: "Original creation-time provenance for the supplier note remains incomplete.",
    alternative: "The reported supplier change may be real but unrelated to the workflow event.",
    nonProof: "The evidence does not establish supplier causation or fault.",
  },
  {
    id: "RF-04",
    question: "Does missing fictional application evidence prove no related event occurred?",
    evidence: "TL-06 source-health record + application evidence gap",
    finding: "The application source cannot provide complete coverage for the relevant interval.",
    confidence: "High about limitation",
    limitation: "No direct application evidence can confirm or exclude all events during the Degraded period.",
    alternative: "A related event may have occurred without being represented in the Degraded source.",
    nonProof: "Missing application evidence does not prove event absence.",
  },
];

const audiences = [
  {
    audience: "Technical reviewer",
    needs: "Evidence IDs, source health, chronology, transformations, contradictions, alternatives, confidence, and reproducible reasoning.",
    avoid: "Unnecessary secrets, real credentials, real private data, or invasive procedures.",
  },
  {
    audience: "Service owner",
    needs: "Service effect, workflow relationship, decision, uncertainty, owner actions, and recovery or follow-up dependencies.",
    avoid: "Deep evidence detail that does not change service decisions.",
  },
  {
    audience: "Leadership",
    needs: "Question, conclusion, confidence, material limitation, business effect, decision required, owner, and deadline.",
    avoid: "Long technical narratives, raw evidence dumps, and unsupported certainty.",
  },
  {
    audience: "Privacy / governance",
    needs: "Purpose, authority, scope, minimization, sensitive information, access, retention, distribution, and corrections.",
    avoid: "Technical detail that does not affect privacy, authority, or lifecycle decisions.",
  },
  {
    audience: "Public portfolio",
    needs: "Fully invented scenario, defensive reasoning, safe diagrams, lessons, limitations, and ethical boundaries.",
    avoid: "Any real incident detail, screenshot, log, identity, system, supplier, configuration, or private information.",
  },
];

const reviewRoles = [
  ["Investigation coordinator", "Question alignment, evidence traceability, scope version, unresolved items, and overall report completeness."],
  ["Evidence owner", "Source meaning, provenance, source health, transformation, timing, and evidence-specific limitations."],
  ["Technical reviewer", "Correlation logic, chronology, contradiction handling, alternatives, confidence, and reproducibility."],
  ["Privacy reviewer", "Purpose limitation, minimization, sensitive-information exposure, access, retention, and distribution."],
  ["Service owner", "Service meaning, workflow context, business effect, owner actions, and decision relevance."],
  ["Leadership / decision owner", "Whether the report supports the needed decision and communicates risk plus uncertainty accurately."],
];

const qualityChecks = [
  ["Traceability", "Can every major fictional finding be traced to evidence IDs and source-health context?"],
  ["Scope fidelity", "Does the report avoid implying review of systems, identities, or time periods outside fictional scope?"],
  ["Time discipline", "Are event, receipt, processing, review, and decision times kept distinct?"],
  ["Attribution discipline", "Does the report distinguish account, session, device, and browser associations from physical-person attribution?"],
  ["Causation discipline", "Does the report avoid turning sequence or correlation into unsupported cause?"],
  ["Alternatives", "Are plausible fictional alternative explanations acknowledged where they affect confidence?"],
  ["Unknowns", "Are Blind, Degraded, missing, conflicting, delayed, or unavailable evidence gaps visible?"],
  ["Privacy", "Does each fictional audience receive only the information needed for its purpose?"],
  ["Versioning", "Can reviewers reconstruct corrections, prior values, reviewer comments, and redistribution?"],
  ["Public-safe boundary", "Is every CyberShield portfolio artifact fully fictional and free of real case or system details?"],
];

const correctionSteps = [
  ["1", "Preserve the prior version", "Keep the earlier fictional report traceable so reviewers can see what changed."],
  ["2", "Register the correction trigger", "Record which evidence item, owner clarification, source-health change, or review comment caused the update."],
  ["3", "Identify affected sections", "List the fictional findings, chronology statements, conclusions, and summaries influenced by the correction."],
  ["4", "Revise only what changed", "Update affected material while preserving unaffected findings and existing limitations."],
  ["5", "Update confidence", "Raise, lower, or preserve confidence according to the corrected evidence."],
  ["6", "Re-review and approve", "Send the corrected fictional report to the appropriate reviewers."],
  ["7", "Redistribute material corrections", "Notify recipients whose decisions may be affected and record follow-up."],
  ["8", "Update lifecycle state", "Determine whether correction changes closure, retention, corrective action, or reopening criteria."],
];

const reportingPatterns = [
  ["Person A caused the service incident.", "The fictional evidence associates Account A with Session S during the workflow-event window, but physical-person attribution and causation are not independently established."],
  ["The supplier was responsible.", "The fictional supplier note reports a dependency-state change before the workflow event; provenance remains Conditional and causation is unresolved."],
  ["No event occurred because the application log is empty.", "No matching fictional application event is visible, but the source was Degraded during the relevant interval, so absence remains unsupported."],
  ["The user knew about the role change.", "The fictional service generated the role-change notification before the session; acknowledgement and person-level awareness remain Unknown."],
  ["The update caused the problem.", "The fictional update completed before the service symptom; the supplied evidence establishes sequence but not causation."],
  ["The investigation proved everything important.", "The fictional investigation resolved the account-session and timeline questions while preserving person attribution, supplier causation, and one Degraded-source interval as unresolved."],
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A8
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function ForensicReportingStandardsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A8</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A8.8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Professional Reporting</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.8 Forensic Reporting Standards
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional forensic findings become reviewable reports. Structure purpose,
            authority, scope, evidence, chronology, findings, limitations, confidence, alternative explanations,
            unresolved questions, review, versioning, distribution, corrections, and public-safe communication
            without overstating what the evidence can prove.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Forensic Reporting Standards"
          lessonNumber={8}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only invented evidence IDs, accounts, endpoints, applications, services, suppliers, findings, reviewers, timelines, and outcomes.",
            "I will separate fictional observation, interpretation, finding, conclusion, limitation, confidence, alternative explanation, recommendation, and non-proof statement.",
            "I will not hide Blind, Degraded, Conditional, Conflicting, delayed, transformed, missing, or Unknown evidence because it makes the report less certain.",
            "I will adapt fictional report detail to the audience without changing the underlying evidence or confidence.",
            "I will keep real credentials, logs, screenshots, messages, system details, incident data, and personal information out of the CyberShield portfolio.",
            "I will treat reporting as documentation and communication, not as permission to collect, inspect, access, or investigate any real system.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Report Can Be Technically Accurate and Still Mislead">
          <p className="leading-8">
            A fictional analyst writes, “Account A caused the workflow event.” The evidence does show Account A
            associated with an active session during the event window. But the device is shared, the application
            source is Degraded, and the correlation establishes overlap rather than cause.
          </p>
          <p className="mt-4 leading-8">
            Every individual record may be accurate while the final sentence still exceeds the evidence.
            Professional reporting preserves evidence level, confidence, limitations, alternatives, and the
            difference between account association, person attribution, sequence, and causation.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Misleading</p>
              <p className="mt-2 leading-7">“Account A caused the workflow event.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defensible</p>
              <p className="mt-2 leading-7">
                “Account A was associated with an active session during the workflow-event window; physical-person
                attribution and causation remain unresolved.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A8.8">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="The Report Is the Investigation Other People Will Actually See">
          <p className="leading-8">
            Most decision-makers will not read every fictional evidence record, custody entry, timeline row, or
            correlation matrix. They rely on the report. That makes reporting part of evidence quality. A strong
            report lets readers see how the conclusion was reached, which evidence supports it, what uncertainty
            remains, and what owner decision comes next.
          </p>
          <p className="mt-4 leading-8">
            A strong report makes uncertainty useful. It states exactly which question is unresolved, why, which
            source is limited, what can still be concluded, who owns the next action, and what would change the answer.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Eight Sections of a Professional Fictional Forensic Report">
          <div className="grid gap-5">
            {reportSections.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.purpose}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Must include</p>
                    <p className="mt-2 text-sm leading-6">{item.include}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Avoid</p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Vocabulary" title="Professional Terms for Forensic Reporting">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Report Readiness Dashboard"
          subtitle="Northbridge A8 reporting exercise — invented values only"
          metrics={[
            { label: "Evidence-linked findings", value: "4", note: "All tied to fictional evidence IDs and source-health context" },
            { label: "Material Unknowns", value: "3", note: "Physical person, supplier causation, one Degraded interval" },
            { label: "Review roles", value: "6", note: "Technical, evidence, privacy, service, coordination, leadership" },
            { label: "Report versions", value: "2", note: "Draft and reviewed fictional versions" },
          ]}
        />

        <SectionCard eyebrow="Evidence-to-Finding Traceability" title="Every Finding Should Point Back to Evidence">
          <div className="grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-100">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.question}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence", item.evidence],
                    ["Finding", item.finding],
                    ["Limitation", item.limitation],
                    ["Alternative", item.alternative],
                    ["Non-proof statement", item.nonProof],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Reporting Warning"
          severity="High"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="Draft conclusion exceeds the evidence by converting an account/session correlation into person-level attribution and causation."
          recommendation={["Supported: Account A associated with Session S",
            "Supported: Session overlaps workflow-event interval",
            "Unknown: Physical person controlling shared Endpoint D-17",
            "Unknown: Whether the session caused the workflow event",
            "Required correction: narrow conclusion to supported account/session relationship",].join(" • ")}
        />

        <FakeLogPanel
          title="Fictional Report Review Records"
          logs={[
            "09:00 | DRAFT | report=A8-case-report | version=0.9 | findings=4 | unknowns=3",
            "09:18 | REVIEW | role=technical-reviewer | issue=person-attribution-overstated | status=revision-required",
            "09:27 | REVIEW | role=privacy-reviewer | issue=unrelated-browser-detail-present | action=minimize",
            "09:35 | CORRECTION | finding=RF-01 | prior=person-attribution | new=account-session-association",
            "09:44 | CORRECTION | finding=RF-02 | prior=causal-wording | new=temporal-overlap | confidence=Moderate",
            "10:02 | APPROVAL | report=version-1.0 | technical=approved | privacy=approved | service=approved",
            "10:10 | DISTRIBUTION | leadership=executive-summary | technical=full-report | public=fictional-portfolio-summary",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Draft Finding"
          question="Which fictional report sentence is strongest?"
          evidence={[
            "Account A authenticated at 14:01.",
            "Session S remained active through the workflow-event period.",
            "Endpoint D-17 is shared.",
            "The application source was Degraded during part of the event window.",
          ]}
          options={[
            "Person A caused the workflow event from D-17.",
            "The supplied evidence associates Account A with Session S during the workflow-event window; physical-person attribution and causation remain unresolved, and application-source degradation limits completeness.",
            "The session proves the account was compromised.",
            "No application event means no workflow activity occurred.",
          ]}
          bestAnswer={1}
          explanation="The strongest sentence states the supported account/session relationship while preserving shared-device, causation, and Degraded-source limitations."
        />

        <SectionCard eyebrow="Audience Design" title="Different Audiences Need Different Detail—Not Different Facts">
          <div className="grid gap-5">
            {audiences.map((item) => (
              <article key={item.audience} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-purple-100">{item.audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Needs</p>
                    <p className="mt-2 text-sm leading-6">{item.needs}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Avoid</p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Executive Summary"
          scenario="A fictional executive asks for a one-paragraph summary. The full technical report contains evidence IDs, source-health details, chronology tables, browser context, and owner notes. The strongest result is that Account A was associated with Session S during the workflow-event window, while physical-person attribution and causation remain unresolved."
          choices={[
            {
              label: "Choice A",
              response: "Paste the entire technical evidence section into the executive summary.",
              outcome: "This overwhelms the audience and exposes unnecessary detail without improving the decision.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "State the bounded conclusion, confidence, material Unknowns, service effect, decision owner, and next action while keeping technical evidence references in the full report.",
              outcome: "This preserves the same facts while matching the executive decision need.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Remove uncertainty so the summary sounds decisive.",
              outcome: "Audience adaptation must not change evidence strength or hide limitations.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Review Roles" title="Review the Report Through Multiple Professional Lenses">
          <div className="grid gap-4 md:grid-cols-2">
            {reviewRoles.map(([role, review]) => (
              <div key={role} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <h3 className="font-black text-blue-100">{role}</h3>
                <p className="mt-2 text-sm leading-6">{review}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Versioning and Corrections" title="Professional Reports Change Without Erasing Their History">
          <p className="leading-8">
            New fictional evidence, owner clarification, source-health recovery, timezone correction, or reviewer
            feedback can change a report. The professional response is not to silently overwrite the earlier version.
          </p>
          <div className="mt-6 grid gap-5">
            {correctionSteps.map(([step, title, detail]) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{step}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The Late Timestamp Correction"
          scenario="After fictional report version 1.0 is approved, the service evidence owner clarifies that one processing timestamp was displayed in the wrong timezone. Event time does not change, but one chronology sentence and one leadership summary line relied on processing-time order."
          choices={[
            {
              label: "Choice A",
              response: "Quietly edit version 1.0 and replace the old timestamp.",
              outcome: "This destroys traceability and hides what earlier reviewers and recipients saw.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Preserve version 1.0, create a corrected version, record the owner clarification and affected statements, re-review the material change, and redistribute the corrected summary where decision relevance exists.",
              outcome: "This keeps the report lifecycle reconstructable and transparent.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Withdraw the entire investigation because one processing timestamp changed.",
              outcome: "A material correction should affect only findings and decisions that depended on the changed field.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard eyebrow="Quality Review" title="Ten Questions Before a Fictional Report Is Released">
          <div className="grid gap-4 md:grid-cols-2">
            {qualityChecks.map(([check, question], index) => (
              <div key={check} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Check {index + 1}</p>
                <h3 className="mt-2 font-black text-white">{check}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Reporting Language" title="Replace Certainty Theater with Evidence-Bounded Language">
          <div className="grid gap-5">
            {reportingPatterns.map(([weak, stronger], index) => (
              <article key={weak} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Reporting pattern {index + 1}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Overstated</p>
                    <p className="mt-2 text-sm leading-6">{weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Bounded</p>
                    <p className="mt-2 text-sm leading-6">{stronger}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Common Mistakes" title="Where Forensic Reports Lose Credibility">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Observation becomes conclusion", "A fictional record is copied into a causal or person-attribution statement without intermediate reasoning.", "Separate observation, relationship, interpretation, finding, and conclusion."],
              ["Confidence without reason", "High or Moderate means little when the report does not explain source quality and limitations.", "Tie confidence to evidence quality, corroboration, contradiction, and alternatives."],
              ["Unknowns hidden", "A report may look cleaner but becomes less honest and useful.", "State what remains Unknown, why, who owns it, and whether it affects the decision."],
              ["Same report for every audience", "Leadership may get technical overload while technical reviewers lack necessary detail.", "Adapt detail without changing facts or confidence."],
              ["Silent correction", "Reviewers cannot reconstruct what changed or which earlier decisions used the old value.", "Version corrections and record affected findings plus redistribution."],
              ["Raw evidence dump", "A large fictional evidence dump can bury the decision question and expose unnecessary information.", "Use evidence references and concise analytical summaries."],
              ["Public report copies internal detail", "Reused material can expose real systems or case information.", "Invent the public portfolio scenario from the beginning."],
              ["Recommendation exceeds finding", "A broad action may be proposed even though the fictional finding is narrow or Conditional.", "Match recommendation scope to finding strength, owner authority, and uncertainty."],
            ].map(([mistake, why, correction]) => (
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

        <SectionCard eyebrow="Safe Fictional Lab" title="Build a Complete Forensic Report Package">
          <p className="leading-8">
            Use only the invented Northbridge evidence supplied throughout A8. Do not access, collect, inspect, query,
            export, capture, extract, recover, or investigate any real logs, accounts, devices, browsers, services,
            storage systems, applications, suppliers, messages, or people.
          </p>
          <div className="mt-6 grid gap-5">
            {[
              ["Phase 1 — Report framing", ["Write fictional purpose, authority, primary question, scope, exclusions, and audience list.", "Name the requesting owner, decision owner, investigation coordinator, and review roles.", "State the public-safe boundary."]],
              ["Phase 2 — Evidence summary", ["Create a table with at least six fictional evidence IDs.", "Record source category, owner, source health, provenance, transformation, purpose, and limitation.", "Identify High-quality, Conditional, Degraded, or Conflict-limited evidence."]],
              ["Phase 3 — Chronology", ["Build a concise fictional timeline with event, receipt, processing, review, and decision times where relevant.", "Mark one delayed record and one Degraded interval.", "Add a non-causation statement."]],
              ["Phase 4 — Findings", ["Write at least five evidence-linked fictional findings.", "For each, add confidence, limitation, alternative explanation, and non-proof statement.", "Include one Unknown finding and one Conditional finding."]],
              ["Phase 5 — Review and correction", ["Simulate one fictional reviewer correction.", "Preserve original statement, corrected statement, reason, reviewer, affected section, and redistribution need.", "Update version history."]],
              ["Phase 6 — Audience outputs", ["Create technical, leadership, privacy/governance, and public-safe summaries.", "Keep the same underlying evidence and confidence across audiences.", "Remove unnecessary detail according to purpose."]],
            ].map(([phase, tasks]) => (
              <article key={phase as string} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {(tasks as string[]).map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This is a writing, review, and communication exercise using invented evidence only. It does not
              authorize real forensic acquisition, monitoring, log collection, browser review, account access,
              device inspection, memory capture, storage imaging, extraction, recovery, surveillance, or investigation.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Write One Finding for Five Audiences Without Changing the Truth">
          <p className="leading-8">
            The fictional evidence supports that Account A was associated with Session S on shared Endpoint D-17
            during the workflow-event window. Physical-person attribution and causation remain unresolved.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Write a technical-review version with evidence IDs, source health, and non-proof language.",
              "Write a service-owner version focused on workflow meaning and next owner action.",
              "Write a leadership version focused on conclusion, confidence, risk, and decision need.",
              "Write a privacy/governance version focused on scope, minimization, attribution limits, and distribution.",
              "Write a public-safe portfolio version using only invented details.",
              "Explain which facts stay identical across all five versions.",
              "Explain which details can be omitted for each audience without changing the conclusion.",
              "Identify one sentence that would become misleading if simplified too aggressively.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.8 Forensic Reporting Standards Checklist"
          items={[
            "I can structure a fictional forensic report with executive summary, purpose, authority, scope, evidence, chronology, findings, unresolved questions, review, and distribution.",
            "I can separate observation, interpretation, finding, conclusion, limitation, alternative explanation, recommendation, and non-proof statement.",
            "I can tie every important fictional finding to evidence IDs and source-health context.",
            "I can use High, Moderate, Conditional, Conflicting, and Unknown language with reasons.",
            "I can preserve shared-device, source-health, timing, provenance, attribution, and causation limitations.",
            "I can adapt report detail for technical, service, leadership, privacy/governance, and public-safe audiences without changing the evidence.",
            "I can write a versioned fictional correction that preserves the prior report and identifies affected findings.",
            "I can document reviewer roles, approval state, distribution, retention, and redistribution.",
            "I can keep Unknowns visible and connect them to owners or reopen criteria.",
            "I can prevent recommendations from exceeding the strength or scope of the finding.",
            "I can create a public-safe fictional portfolio report without copying real evidence or internal details.",
            "I can keep all forensic reporting work fictional, defensive, non-invasive, privacy-safe, and suitable for public learning.",
          ]}
        />

        <MiniQuiz
          title="A8.8 Mini Quiz: Forensic Reporting Standards"
          questions={[
            {
              question: "Which fictional report sentence is strongest when Account A is associated with a session on a shared endpoint?",
              choices: [
                "Person A definitely controlled the endpoint.",
                "The supplied evidence associates Account A with the session on the shared endpoint; physical-person attribution remains unresolved.",
                "The account was compromised.",
                "The session proves harmful intent.",
              ],
              answer: 1,
              explanation: "The strongest sentence reports the supported object-level relationship and preserves the attribution limit.",
            },
            {
              question: "Why should every major fictional finding reference evidence IDs?",
              choices: [
                "To make the report look technical.",
                "To make the reasoning traceable so reviewers can see which evidence supports the finding and its limitations.",
                "To remove the need for source-health information.",
                "To guarantee the conclusion is correct.",
              ],
              answer: 1,
              explanation: "Traceability lets reviewers reconstruct the path from evidence to finding.",
            },
            {
              question: "A fictional application source was Degraded and shows no matching event. How should the report describe absence?",
              choices: [
                "No event occurred.",
                "The source proves the account was inactive.",
                "No matching event is visible, but the Degraded interval prevents a reliable absence conclusion.",
                "The source should be removed from the report.",
              ],
              answer: 2,
              explanation: "Source-health limitations should remain visible in the finding.",
            },
            {
              question: "What should change when a fictional report is adapted for leadership?",
              choices: [
                "The underlying facts and confidence.",
                "The level of detail and decision framing, while evidence and confidence remain consistent.",
                "All limitations should be removed.",
                "Technical evidence should be replaced with stronger claims.",
              ],
              answer: 1,
              explanation: "Audience adaptation changes presentation, not evidentiary truth.",
            },
            {
              question: "A fictional timestamp correction affects one chronology sentence after version 1.0 was distributed. What is strongest?",
              choices: [
                "Silently overwrite version 1.0.",
                "Preserve version 1.0, issue a corrected version, record the reason and affected findings, re-review, and redistribute where material.",
                "Ignore the correction.",
                "Withdraw every finding in the investigation.",
              ],
              answer: 1,
              explanation: "Versioned correction preserves traceability and limits the change to affected material.",
            },
            {
              question: "What is the strongest use of an Unknown in a fictional report?",
              choices: [
                "Avoid writing anything about the question.",
                "State what cannot be determined, why, what evidence is missing or limited, what can still be concluded, and who owns the next decision.",
                "Replace Unknown with the most likely answer.",
                "Hide uncertainty from leadership.",
              ],
              answer: 1,
              explanation: "A professional Unknown is specific, actionable, and transparent.",
            },
            {
              question: "What belongs in the public CyberShield portfolio version of a forensic report?",
              choices: [
                "Real logs and screenshots with names removed.",
                "Fully invented evidence, systems, identities, timelines, findings, diagrams, and lessons that demonstrate safe reasoning.",
                "Real internal configurations with fake hostnames.",
                "Private case details as long as the organization is not named.",
              ],
              answer: 1,
              explanation: "The public portfolio should be fictional from the beginning rather than derived from real sensitive material.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Professional Forensic Report Package"
          prompt="Create a fully fictional A8.8 Professional Forensic Report Package for Northbridge. Include an executive summary; purpose; authority; primary question; scope; exclusions; evidence register with at least eight invented evidence IDs; source owners; source health; provenance; transformations; chronology; at least six evidence-linked findings; confidence; limitations; alternative explanations; non-proof statements; unresolved questions; owner actions; decision impact; review roles; reviewer comments; one material correction; prior and corrected wording; version history; approval state; distribution matrix; retention; reopen criteria; a technical summary; a service-owner summary; a leadership summary; a privacy/governance summary; and a public-safe portfolio summary. Include at least one High-confidence finding, one Moderate finding, one Conditional finding, one unresolved issue, and one Unknown. Every organization, person, account, endpoint, service, application, supplier, source, evidence item, timestamp, finding, reviewer, and outcome must be invented."
          tips={[
            "Trace every fictional finding to evidence IDs and source-health context.",
            "Keep account association, person attribution, sequence, causation, intent, and impact as separate evidence levels.",
            "Use Unknown explicitly when evidence cannot support confirmation or exclusion.",
            "Adapt detail to each audience without changing underlying facts or confidence.",
            "Version material corrections and record which recipients need the updated report.",
            "Keep the final portfolio package fully fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A8.9 Ethical Limits in Investigations?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for report structure, traceability, findings, confidence, limitations,
            alternatives, audience design, versioning, corrections, review, distribution, Unknowns, and public-safe reporting.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can trace a fictional finding from evidence ID to conclusion.",
              "I can separate observation, finding, conclusion, limitation, alternative explanation, and recommendation.",
              "I can write High, Moderate, Conditional, Conflicting, and Unknown findings with reasons.",
              "I can preserve shared-device, source-health, timing, provenance, attribution, and causation limits.",
              "I can adapt the same fictional evidence for technical, service, leadership, privacy, and public audiences.",
              "I can explain why audience simplification must not change evidentiary strength.",
              "I can version a fictional correction and preserve the earlier report.",
              "I can identify which recipients need a corrected version.",
              "I can keep unresolved questions visible and assign owners or reopen triggers.",
              "I can create a fully fictional public portfolio report without real case or system material.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "A professional fictional forensic report explains purpose, authority, scope, evidence, chronology, findings, limitations, confidence, alternatives, unresolved questions, review, and distribution.",
            "Evidence traceability lets reviewers reconstruct how each major finding was reached.",
            "Observations, interpretations, findings, conclusions, recommendations, and non-proof statements should remain distinct.",
            "Confidence should explain evidence strength and limitations rather than function as an unsupported label.",
            "Audience adaptation changes detail and framing, not underlying facts or confidence.",
            "Unknown is a valid professional result when the fictional evidence cannot support confirmation or exclusion.",
            "Versioned corrections preserve what earlier reviewers saw and identify which findings or decisions changed.",
            "Distribution should follow purpose and need-to-know rather than sending the full report to every audience.",
            "Public CyberShield portfolio reports must be fully invented and must never reuse real logs, screenshots, account data, private messages, or internal system details.",
            "The strongest forensic report is the report whose conclusions most accurately match the supplied evidence.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">This Lesson Teaches Reporting, Not Real Investigation or Evidence Collection</h2>
          <p className="mt-3 leading-7">
            Nothing in A8.8 authorizes access, investigation, monitoring, querying, log collection, browser inspection,
            account access, credential use, private-message review, device access, memory capture, storage imaging,
            extraction, recovery, surveillance, configuration changes, or examination involving any real device,
            account, application, service, supplier, storage system, network, organization, incident, classmate,
            teacher, family member, or other person. Use only fully invented, pre-supplied evidence and reporting material.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Ethical Limits in Investigations</h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.8 established how fictional forensic reasoning becomes a professional report. A8.9 turns to ethical
            limits: authorization, necessity, proportionality, minimization, sensitive information, unrelated findings,
            third parties, conflicts, retention, disclosure, recusal, and stopping when the approved purpose changes.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}