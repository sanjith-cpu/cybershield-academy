import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const advancedPath = "/high-school/advanced";
const previousModulePath =
  "/high-school/advanced/cybersecurity-portfolio-projects";
const modulePath = "/high-school/advanced/advanced-capstone";

const lessons = [
  {
    number: "A20.1",
    title: "Advanced Track Knowledge Review",
    href: `${modulePath}/advanced-track-knowledge-review`,
    focus:
      "Reconnect the major Advanced-track ideas before beginning the capstone: evidence, architecture, networking, threat modeling, identity, detection, incident response, cloud, application security, risk, privacy, governance, resilience, and communication.",
    project:
      "Build a readiness map that identifies which concepts are strong, which need targeted review, and which earlier artifacts can support the capstone.",
    artifact: "Advanced Knowledge Readiness Map",
  },
  {
    number: "A20.2",
    title: "Capstone Scenario Briefing",
    href: `${modulePath}/capstone-scenario-briefing`,
    focus:
      "Learn how to enter a complex defensive case without jumping to conclusions by defining mission, scope, stakeholders, assets, evidence, constraints, assumptions, unknowns, and decision priorities.",
    project:
      "Review the fictional Northbridge capstone briefing and create a case charter that explains what is known, what remains uncertain, and what the defensive team must decide.",
    artifact: "Capstone Case Charter and Evidence Inventory",
  },
  {
    number: "A20.3",
    title: "Architecture and Threat Model Phase",
    href: `${modulePath}/architecture-and-threat-model-phase`,
    focus:
      "Review the fictional environment as a connected system of assets, identities, data flows, trust boundaries, dependencies, assumptions, plausible threats, existing controls, and resilience needs.",
    project:
      "Produce a concise architecture review and threat model that identifies the most important defensive design questions without claiming unsupported vulnerabilities.",
    artifact: "Architecture and Threat Model Decision Pack",
  },
  {
    number: "A20.4",
    title: "Detection and Monitoring Phase",
    href: `${modulePath}/detection-and-monitoring-phase`,
    focus:
      "Connect capstone risks to defensive questions, telemetry, source health, alert context, correlation, detection quality, tuning, validation, ownership, and degraded visibility.",
    project:
      "Build a provider-neutral monitoring and detection review using synthetic evidence and define which signals support the most important defensive decisions.",
    artifact: "Detection and Monitoring Review",
  },
  {
    number: "A20.5",
    title: "Incident Response Phase",
    href: `${modulePath}/incident-response-phase`,
    focus:
      "Use the capstone evidence to make bounded incident-response decisions involving triage, scope, containment, communication, evidence preservation, recovery, reassessment, and decision ownership.",
    project:
      "Create a fictional incident-response decision record that preserves facts, hypotheses, uncertainty, changing evidence, recovery criteria, and unresolved questions.",
    artifact: "Incident Response Decision Record",
  },
  {
    number: "A20.6",
    title: "Cloud and Identity Review Phase",
    href: `${modulePath}/cloud-and-identity-review-phase`,
    focus:
      "Review cloud shared responsibility, workforce and workload identity, privileged access, data protection, federation, service dependencies, logging, configuration governance, recovery, and access lifecycle.",
    project:
      "Produce a cloud-and-identity review that connects access and platform decisions to evidence, ownership, residual uncertainty, and safe recommendations.",
    artifact: "Cloud and Identity Governance Review",
  },
  {
    number: "A20.7",
    title: "Risk and Privacy Review Phase",
    href: `${modulePath}/risk-and-privacy-review-phase`,
    focus:
      "Translate the capstone findings into business risk and privacy decisions using impact, likelihood, control strength, data purpose, minimization, retention, ownership, treatment, exceptions, and review triggers.",
    project:
      "Create a combined fictional risk-and-privacy register that distinguishes technical observations from business decisions and records residual risk clearly.",
    artifact: "Risk and Privacy Decision Register",
  },
  {
    number: "A20.8",
    title: "Executive Communication Phase",
    href: `${modulePath}/executive-communication-phase`,
    focus:
      "Convert detailed defensive evidence into concise leadership communication that preserves facts, uncertainty, material impact, options, owners, decisions, and next checkpoints.",
    project:
      "Create technical, manager, and executive versions of the same capstone conclusion while keeping the underlying facts consistent.",
    artifact: "Executive Capstone Brief",
  },
  {
    number: "A20.9",
    title: "Final Portfolio Submission",
    href: `${modulePath}/final-portfolio-submission`,
    focus:
      "Assemble the capstone evidence into a coherent professional submission with artifact selection, traceability, revisions, limitations, contribution transparency, presentation notes, and publication safety.",
    project:
      "Build the final Advanced Capstone Portfolio Submission from the strongest fictional artifacts created during A20.",
    artifact: "Advanced Capstone Portfolio Submission",
  },
  {
    number: "A20.10",
    title: "Advanced Final Readiness Review",
    href: `${modulePath}/advanced-final-readiness-review`,
    focus:
      "Perform the final quality and knowledge review before the Advanced practice tests and final test by checking technical reasoning, cross-artifact consistency, communication, safety, evidence, and remaining study gaps.",
    project:
      "Complete a final readiness review that identifies strong domains, remaining weaknesses, targeted review actions, and evidence that the Advanced track is ready for assessment.",
    artifact: "Advanced Final Readiness Review Pack",
  },
];

const outcomes = [
  "Integrate the major Advanced-track cybersecurity domains into one coherent defensive case instead of treating them as isolated topics.",
  "Use evidence, architecture, identity, risk, monitoring, incident response, cloud, privacy, recovery, and governance together to support professional decisions.",
  "Preserve uncertainty by separating facts, hypotheses, assumptions, findings, risks, incidents, exceptions, recommendations, and unresolved questions.",
  "Communicate the same underlying case accurately to technical reviewers, managers, executives, teachers, and portfolio audiences.",
  "Build a final defensive capstone package that demonstrates traceability, ownership, revision, validation, ethical judgment, and publication safety.",
  "Identify final knowledge gaps and prepare systematically for the two Advanced practice tests and the 125-question Advanced final test.",
];

const capstonePrinciples = [
  {
    title: "One case, many perspectives",
    detail:
      "The capstone should feel like one connected professional problem. Architecture, monitoring, incident response, cloud, identity, privacy, risk, and leadership communication all examine the same fictional environment from different angles.",
  },
  {
    title: "Evidence before certainty",
    detail:
      "Start from supplied facts and source limitations. A plausible explanation remains a hypothesis until enough evidence supports a stronger conclusion.",
  },
  {
    title: "Decisions need owners",
    detail:
      "Findings become actionable when the portfolio identifies who owns the risk, control, service, exception, recovery decision, or communication step.",
  },
  {
    title: "Controls need evidence",
    detail:
      "A control appearing in architecture or policy is not the same as evidence that it is implemented, current, healthy, or effective.",
  },
  {
    title: "Recovery is part of security",
    detail:
      "A strong capstone considers degraded operation, dependencies, recovery criteria, validation, rollback, and residual risk rather than focusing only on prevention.",
  },
  {
    title: "Communication changes depth, not truth",
    detail:
      "Technical, manager, and executive summaries may emphasize different details, but they must preserve the same confirmed facts, uncertainty, and material conclusions.",
  },
];

const capstonePhases = [
  {
    phase: "Orient",
    lessons: "A20.1–A20.2",
    question:
      "What do I already know, what does the case actually contain, and what decisions must the team make?",
    evidence:
      "Knowledge map, case charter, asset inventory, source inventory, stakeholder map, scope, assumptions, unknowns.",
  },
  {
    phase: "Model",
    lessons: "A20.3",
    question:
      "How is the fictional environment designed, where does trust change, and which plausible security conditions deserve attention?",
    evidence:
      "Architecture relationships, trust boundaries, data flows, identity paths, dependencies, threat statements, control expectations.",
  },
  {
    phase: "Observe",
    lessons: "A20.4",
    question:
      "Which evidence sources support defensive decisions, how healthy are they, and which monitoring gaps affect confidence?",
    evidence:
      "Telemetry map, synthetic alerts, source-health records, detection objectives, context, validation, quality metrics.",
  },
  {
    phase: "Respond",
    lessons: "A20.5",
    question:
      "What should defenders decide now, what remains uncertain, and how can response preserve both security and service continuity?",
    evidence:
      "Timeline, decision log, triage notes, containment rationale, communication, recovery criteria, unresolved questions.",
  },
  {
    phase: "Govern",
    lessons: "A20.6–A20.7",
    question:
      "How do cloud, identity, privacy, and risk decisions change the long-term treatment of the case?",
    evidence:
      "Access review, shared-responsibility map, data-purpose review, risk register, privacy findings, exceptions, owners, treatment.",
  },
  {
    phase: "Communicate",
    lessons: "A20.8",
    question:
      "What do technical teams, managers, and leaders need to know or decide?",
    evidence:
      "Technical summary, manager brief, executive recommendation, priorities, owners, checkpoints.",
  },
  {
    phase: "Package and validate",
    lessons: "A20.9–A20.10",
    question:
      "Is the final submission coherent, defensible, safe, explainable, and ready for Advanced-track assessment?",
    evidence:
      "Portfolio submission, traceability, revisions, contribution statement, readiness review, targeted study plan.",
  },
];

const roles = [
  {
    role: "Security Analyst",
    contribution:
      "Connects evidence across sources, preserves confidence boundaries, documents findings, and identifies unanswered questions.",
  },
  {
    role: "Security Architect",
    contribution:
      "Explains system relationships, trust boundaries, dependencies, control design, resilience, and architecture tradeoffs.",
  },
  {
    role: "Detection Engineer",
    contribution:
      "Maps risks to defensive questions, telemetry, context, source health, validation, tuning, and signal-quality measures.",
  },
  {
    role: "Incident Responder",
    contribution:
      "Coordinates triage, scope, containment, evidence preservation, communication, recovery, reassessment, and closure criteria.",
  },
  {
    role: "Cloud / Identity Reviewer",
    contribution:
      "Reviews shared responsibility, privileged and workload access, federation, data protection, cloud governance, and lifecycle evidence.",
  },
  {
    role: "Risk and Privacy Analyst",
    contribution:
      "Translates technical findings into impact, likelihood, residual risk, privacy purpose, minimization, treatment, ownership, and review.",
  },
  {
    role: "Executive Communicator",
    contribution:
      "Turns complex evidence into concise, accurate decision support without hiding uncertainty or overstating technical conclusions.",
  },
  {
    role: "Portfolio Reviewer",
    contribution:
      "Checks traceability, consistency, authorship, revision quality, presentation readiness, limitations, and publication safety.",
  },
];

const evidenceTypes = [
  {
    type: "Architecture evidence",
    use:
      "Shows intended systems, data flows, identity paths, trust boundaries, dependencies, and control placement.",
    limit:
      "Does not by itself prove implementation or current operational behavior.",
  },
  {
    type: "Identity evidence",
    use:
      "Supports access, role, ownership, lifecycle, federation, authentication, authorization, and service-identity reasoning.",
    limit:
      "One successful sign-in does not prove that all later actions were authorized or expected.",
  },
  {
    type: "Monitoring evidence",
    use:
      "Supports event timing, source health, defensive visibility, alert context, correlation, and detection-quality decisions.",
    limit:
      "No event in a source is not meaningful when the source itself may be delayed, missing, or unhealthy.",
  },
  {
    type: "Change and workflow evidence",
    use:
      "Supports approved maintenance, ownership, purpose, ticket history, exceptions, decision context, and remediation tracking.",
    limit:
      "An approved change does not automatically prove every observed effect is expected or safe.",
  },
  {
    type: "Risk and policy evidence",
    use:
      "Supports business impact, control requirements, treatment, acceptance, exception, accountability, and review decisions.",
    limit:
      "A policy statement does not prove compliance, and a risk rating does not replace its reasoning.",
  },
  {
    type: "Recovery evidence",
    use:
      "Supports restoration capability, dependency readiness, return-to-service criteria, validation, and residual operational risk.",
    limit:
      "Backup existence alone does not prove successful or trustworthy recovery.",
  },
];

const casePreview = [
  {
    field: "Organization",
    value:
      "Northbridge Learning Cooperative — a completely fictional education-services organization created only for CyberShield Academy.",
  },
  {
    field: "Primary service",
    value:
      "Northbridge Learning Portal, a fictional cloud-connected application used for student services, reporting, communication, and scheduled processing.",
  },
  {
    field: "Core dependencies",
    value:
      "Cloud identity, application services, protected data storage, background processing, monitoring, recovery services, administrative workflows, and third-party identity federation.",
  },
  {
    field: "Opening condition",
    value:
      "A synthetic cluster of identity, application, monitoring, service-health, and change records creates several plausible explanations for an interruption and unusual administrative activity.",
  },
  {
    field: "Capstone question",
    value:
      "How should defenders interpret the evidence, protect critical services, govern risk and privacy, restore confidence, and communicate the most important decisions without overstating what the evidence proves?",
  },
  {
    field: "Safety boundary",
    value:
      "All systems, identities, records, alerts, logs, risks, timestamps, addresses, organizations, and outcomes are fictional. The capstone requires no real access, testing, scanning, exploitation, or live investigation.",
  },
];

const dashboardMetrics = [
  {
    label: "Capstone lessons",
    value: "10",
    note: "Knowledge review through final Advanced readiness",
  },
  {
    label: "Integrated domains",
    value: "12+",
    note: "Architecture, identity, network, detection, incident response, cloud, risk, privacy, recovery, governance, communication, portfolio",
  },
  {
    label: "Primary case",
    value: "1",
    note: "One coherent fictional Northbridge defensive scenario",
  },
  {
    label: "Module test",
    value: "25",
    note: "Comprehensive A20 readiness questions",
  },
];

const logs = [
  "[CASE] Northbridge Learning Cooperative capstone initialized as fictional training material",
  "[SCOPE] primary portal, identity, data, worker, monitoring, recovery, and governance dependencies included",
  "[EVIDENCE] architecture, identity, cloud, alert, log, service-health, change, risk, privacy, and recovery records available",
  "[QUALITY] facts, interpretations, assumptions, hypotheses, findings, risks, incidents, exceptions, and recommendations must remain distinct",
  "[OWNERSHIP] major technical and business decisions require named fictional owners",
  "[RECOVERY] backup presence and restoration readiness will be evaluated separately",
  "[COMMUNICATION] technical, manager, and executive outputs must preserve the same underlying case truth",
  "[PORTFOLIO] final submission must show traceability, revisions, limitations, contribution, and publication safety",
  "[SAFETY] no real systems, accounts, credentials, private records, or operational offensive activity are authorized",
];

const readinessQuestions = [
  "Can I explain why one evidence source may support an observation without proving cause or intent?",
  "Can I trace a system relationship across architecture, identity, data, monitoring, and recovery?",
  "Can I distinguish a threat, finding, risk, incident, policy exception, recommendation, and decision?",
  "Can I explain how source health changes the confidence of a monitoring conclusion?",
  "Can I reason about privileged human identities and workload identities separately?",
  "Can I distinguish backup availability from validated recovery readiness?",
  "Can I connect technical evidence to business impact, privacy, ownership, and treatment?",
  "Can I communicate uncertainty clearly without making the work sound weak or incomplete?",
  "Can I explain what I personally contributed and what tools or assistance supported the work?",
  "Can I keep the entire capstone fictional, defensive, ethical, and safe for a public student portfolio?",
];

const checklistItems = [
  "I will treat A20 as one connected defensive case rather than ten unrelated assignments.",
  "I will establish scope, mission, assets, stakeholders, evidence, and uncertainty before recommending actions.",
  "I will keep observations, interpretations, hypotheses, findings, risks, incidents, exceptions, recommendations, and decisions distinct.",
  "I will connect architecture and threat-model reasoning to evidence and defensive control decisions.",
  "I will consider source health before interpreting missing or delayed telemetry.",
  "I will include both human and workload identity governance.",
  "I will treat cloud provider capability and customer responsibility as separate but connected questions.",
  "I will preserve privacy purpose, minimization, retention, access, and governance in the risk review.",
  "I will make incident-response actions proportional, owned, reversible where appropriate, and connected to recovery criteria.",
  "I will distinguish control design, control evidence, validation, and residual risk.",
  "I will adapt communication depth to the audience without changing the underlying facts.",
  "I will document revisions, limitations, contribution, and remaining study gaps honestly.",
  "I will use only fictional Northbridge systems and synthetic evidence.",
  "I will not access, test, scan, probe, exploit, or modify any real environment for this capstone.",
];

const takeaways = [
  "A20 is the final integration point for the High School Advanced track and should connect earlier cybersecurity domains into one defensible case.",
  "The strongest capstone reasoning begins with mission, scope, evidence, ownership, assumptions, and unknowns before solutions.",
  "Architecture, detection, incident response, cloud, identity, risk, privacy, recovery, and governance should reinforce one another rather than produce disconnected conclusions.",
  "Professional analysis preserves uncertainty and distinguishes facts, hypotheses, findings, risks, incidents, exceptions, recommendations, and decisions.",
  "Evidence quality includes provenance, source health, freshness, completeness, context, limitations, and what the source cannot prove.",
  "Strong recommendations identify the decision, owner, expected evidence, validation need, residual risk, and review trigger.",
  "Executive communication reduces detail but must preserve material facts, uncertainty, impact, priorities, and next decisions.",
  "The final A20 portfolio should be coherent, truthful, explainable, revised, publication-safe, and ready for the Advanced assessments.",
  "After A20, the Advanced track proceeds to two 50-question practice tests and one 125-question final test.",
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

export default function AdvancedCapstoneHomepage() {
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
              Module A20
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            A20 — Advanced Capstone
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Integrate the Advanced Track Into One Professional Defensive Case
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A20 is the final Advanced module. Instead of learning one isolated
            topic, you will bring architecture, identity, monitoring, incident
            response, cloud, risk, privacy, governance, recovery, evidence, and
            communication together in one fictional capstone.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not to produce the biggest possible report. The goal is
            to show that you can move from incomplete evidence to bounded
            conclusions, defensible decisions, accountable recommendations, safe
            recovery, and communication that different audiences can understand.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A20.1
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Advanced Track
            </Link>

            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-emerald-400 hover:text-emerald-100"
            >
              A20 Module Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A20 Entry Readiness"
          items={[
            "I have completed or reviewed the major High School Advanced modules through A19.",
            "I understand that the capstone will reuse earlier defensive concepts instead of teaching offensive procedures.",
            "I can work with fictional evidence while preserving uncertainty, source limitations, ownership, and safety.",
            "I am ready to revise conclusions when new evidence changes the case.",
          ]}
        />

        <Section
          eyebrow="Module Mission"
          title="One Case Should Connect the Entire Defensive System"
        >
          <p className="leading-8">
            Real security decisions rarely arrive separated into clean textbook
            categories. An identity change can affect application behavior. An
            application problem can create monitoring noise. Missing telemetry can
            lower confidence in incident scope. A cloud dependency can affect
            recovery. A technical issue can create privacy or business risk. A
            policy exception can change how leaders treat the remaining exposure.
          </p>

          <p className="mt-4 leading-8">
            A20 is designed around those relationships. You will repeatedly ask
            how one piece of evidence changes architecture, detection, response,
            risk, recovery, or communication. The strongest capstone decisions
            will be the ones that remain defensible across several perspectives.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Advanced capstone quality = evidence discipline + cross-domain reasoning + accountable decisions + bounded confidence + professional communication.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Module Outcomes"
          title="Six Capabilities You Should Demonstrate by the End"
        >
          <div className="grid gap-4">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{outcome}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Principles"
          title="Six Ideas That Keep the Case Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {capstonePrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Capstone Flow"
          title="Seven Natural Phases, Not a Forced Checklist for Every Lesson"
        >
          <p className="leading-8">
            The phases below describe how the whole module progresses. Individual
            lessons will use the structure that best fits their topic. Some phases
            need architecture models, others need evidence tables, decision records,
            risk registers, communication drafts, or review rubrics.
          </p>

          <div className="mt-6 grid gap-5">
            {capstonePhases.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black text-purple-50">
                    {item.phase}
                  </h3>
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.lessons}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-purple-100">
                  <span className="font-black">Main question:</span>{" "}
                  {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-purple-50">
                  <span className="font-black">Evidence and outputs:</span>{" "}
                  {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Professional Roles"
          title="The Capstone Requires Several Kinds of Defensive Thinking"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.role}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.contribution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence Model"
          title="Know What Each Source Can—and Cannot—Support"
        >
          <p className="leading-8">
            Advanced analysis is not only about collecting more evidence. It is
            about understanding the meaning and limits of each source. The
            capstone will repeatedly test whether you can avoid turning a partial
            clue into a complete conclusion.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {evidenceTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Useful for:</span> {item.use}
                </p>
                <p className="mt-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Important limit:</span>{" "}
                  {item.limit}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Case Preview"
          title="Northbridge Learning Cooperative Capstone"
        >
          <p className="leading-8">
            A20 will use one fictional case so the artifacts can connect naturally.
            The case provides enough complexity for Advanced reasoning while
            remaining entirely synthetic and safe.
          </p>

          <div className="mt-6 grid gap-4">
            {casePreview.map((item) => (
              <div
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {item.field}
                </p>
                <p className="mt-2 leading-7 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Lesson Map" title="All Ten A20 Lessons">
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {lesson.number}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {lesson.title}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {lesson.focus}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Capstone Work
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {lesson.project}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Portfolio Artifact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {lesson.artifact}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={lesson.href}
                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Readiness Questions"
          title="Questions the Final Advanced Capstone Should Survive"
        >
          <div className="grid gap-4">
            {readinessQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{question}</p>
              </div>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="A20 Advanced Capstone Dashboard"
          subtitle="Fictional integrated case scope, domains, artifacts, and assessment readiness"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Capstone Conclusion Exceeds Available Evidence"
          severity="High"
          time="09:35"
          source="Fictional Northbridge Capstone Review Queue"
          details="A draft response says one unusual administrative event caused the service interruption, but the supplied synthetic records show only timing correlation, an approved change, incomplete monitoring coverage, and several unresolved alternatives."
          recommendation="Preserve the event as an important finding, keep cause as an unresolved hypothesis, request the missing evidence conceptually, and make response decisions based on confirmed risk rather than unsupported certainty."
        />

        <FakeLogPanel
          title="A20 Fictional Capstone Orientation Log"
          logs={logs}
        />

        <Section
          eyebrow="Cross-Domain Reasoning"
          title="A Strong Answer Should Improve More Than One Part of the Case"
        >
          <p className="leading-8">
            One of the best ways to test a capstone recommendation is to ask how it
            affects several domains. For example, improving privileged-role
            ownership may reduce identity risk, strengthen incident attribution,
            improve cloud governance, make policy evidence clearer, and give
            leadership a more accountable decision path.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Architecture ↔ Detection",
                detail:
                  "Trust boundaries and critical dependencies help determine which telemetry and health signals deserve attention.",
              },
              {
                title: "Identity ↔ Incident Response",
                detail:
                  "Role purpose, approval, lifecycle, and authentication context affect how unusual administrative activity should be interpreted.",
              },
              {
                title: "Cloud ↔ Recovery",
                detail:
                  "Managed services, shared responsibility, identity dependencies, backups, and regional or service dependencies affect restoration decisions.",
              },
              {
                title: "Risk ↔ Privacy",
                detail:
                  "A technical control can reduce security exposure while still creating data-purpose, access, retention, or minimization questions.",
              },
              {
                title: "Policy ↔ Evidence",
                detail:
                  "A requirement matters only when ownership and review evidence make compliance visible and governable.",
              },
              {
                title: "Technical Findings ↔ Leadership",
                detail:
                  "Leaders need material impact, confidence, options, owners, and next decisions rather than a copy of every technical record.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A20 Advanced Capstone Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Final Portfolio Outcome"
          title="Build the Advanced Capstone Portfolio Submission"
        >
          <p className="leading-8">
            The A20 portfolio is not one enormous document. It is a connected set
            of artifacts that can be traced back to the same fictional case and
            explained as one professional story. Each phase should add useful
            evidence or a defensible decision rather than repeating earlier work.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
              Final A20 collection
            </p>
            <p className="mt-2 text-2xl font-black">
              Advanced Capstone Portfolio Submission + Final Readiness Review Pack
            </p>
            <p className="mt-3 leading-7">
              The completed package should demonstrate architecture reasoning,
              threat modeling, monitoring, incident response, cloud and identity
              governance, risk and privacy decisions, recovery awareness,
              executive communication, portfolio quality, and readiness for the
              final Advanced assessments.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Module Test"
          title="A20 Ends With a 25-Question Comprehensive Readiness Assessment"
        >
          <p className="leading-8">
            The A20 module test will assess integrated Advanced reasoning rather
            than isolated memorization. Questions will ask you to connect evidence,
            architecture, identity, monitoring, response, cloud, privacy, risk,
            recovery, communication, and professional judgment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              A20 Module Test
            </Link>

            <Link
              href={lessons[0].href}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Start A20.1
            </Link>
          </div>
        </Section>

        <Section
          eyebrow="After A20"
          title="The Advanced Track Finishes With Three Major Assessments"
        >
          <p className="leading-8">
            After A20 and its module test are complete, the Advanced track moves
            into two 50-question practice tests followed by the 125-question final
            test. A20.10 will help identify which domains deserve review before
            those assessments.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Practice Test 1",
                detail:
                  "50 mixed Advanced questions covering the full curriculum with defensive, scenario-based reasoning.",
              },
              {
                title: "Practice Test 2",
                detail:
                  "50 additional mixed questions designed to expose remaining weak domains before the final.",
              },
              {
                title: "Advanced Final Test",
                detail:
                  "125 questions comprehensively assessing the complete High School Advanced track.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safety Boundary"
          title="The Advanced Capstone Remains Defensive, Fictional, and Non-Operational"
        >
          <p className="leading-8">
            Every A20 organization, identity, system, service, address, domain,
            alert, log, incident, risk, policy, architecture record, cloud record,
            and outcome must remain fictional or synthetic. The capstone does not
            authorize access to any real environment.
          </p>

          <p className="mt-4 leading-8">
            Do not scan, probe, enumerate, exploit, test credentials, bypass
            controls, evade monitoring, collect real logs, inspect private records,
            access cloud accounts, change configurations, or investigate real
            organizations for this project. Advanced quality comes from evidence
            reasoning, defensive design, governance, communication, and safe
            professional judgment.
          </p>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Begin A20
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Start With the Advanced Track Knowledge Review
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            A20.1 does not repeat every earlier lesson. It identifies the concepts
            you need for the capstone, reconnects the most important cross-domain
            relationships, and creates a readiness map so weak areas can be
            reviewed before they affect the final case.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousModulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous Module: A19
            </Link>

            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A20.1
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}