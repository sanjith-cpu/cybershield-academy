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

const modulePath = "/high-school/advanced/advanced-capstone";
const previousModule =
  "/high-school/advanced/cybersecurity-portfolio-projects";
const nextLesson = `${modulePath}/capstone-scenario-briefing`;

const objectives = [
  "Reconnect the major High School Advanced cybersecurity domains into one defensive reasoning model instead of treating architecture, identity, monitoring, response, cloud, risk, privacy, and governance as isolated topics.",
  "Identify which earlier Advanced-track concepts are already strong, which are uncertain, and which need targeted review before they affect capstone decisions.",
  "Use evidence quality, source health, scope, assumptions, ownership, confidence, and validation as shared reasoning tools across multiple cybersecurity domains.",
  "Explain important cross-domain relationships such as architecture-to-detection, identity-to-incident-response, cloud-to-recovery, privacy-to-risk, and policy-to-evidence.",
  "Create an Advanced Knowledge Readiness Map that links strengths, weak areas, prior portfolio artifacts, review actions, and evidence of improved readiness.",
];

const knowledgeDomains = [
  {
    domain: "Security architecture",
    core:
      "Systems, assets, identities, services, data, dependencies, control placement, failure paths, resilience, and the reasons a design exists.",
    capstoneQuestion:
      "What must be protected, how is the environment connected, and where can one dependency affect many outcomes?",
    evidence:
      "Architecture diagrams, service inventories, ownership records, dependency maps, recovery design, control descriptions.",
  },
  {
    domain: "Threat modeling",
    core:
      "Assets, actors, trust boundaries, entry points, assumptions, plausible adverse conditions, controls, prioritization, and residual uncertainty.",
    capstoneQuestion:
      "Which plausible conditions could affect the mission, and which controls or evidence would reduce that concern?",
    evidence:
      "Threat statements, trust-boundary map, assumptions register, control mapping, review notes.",
  },
  {
    domain: "Networking defense",
    core:
      "Communication paths, segmentation, identity-aware access, expected behavior, dependencies, visibility, resilience, and safe degraded operation.",
    capstoneQuestion:
      "Which connections are expected, why are they allowed, and what evidence supports that expectation?",
    evidence:
      "Network architecture, approved service relationships, synthetic connection summaries, policy context, source health.",
  },
  {
    domain: "Identity and access",
    core:
      "Authentication, authorization, workforce and workload identities, privilege, approvals, role purpose, lifecycle, federation, exceptions, and accountability.",
    capstoneQuestion:
      "Who or what can act, what can it do, why is that access needed, and when should it change or end?",
    evidence:
      "Role inventories, approval records, synthetic sign-in records, ownership, access reviews, lifecycle events.",
  },
  {
    domain: "Detection and monitoring",
    core:
      "Security questions, telemetry, source health, context, correlation, confidence, severity, tuning, metrics, validation, and rollback.",
    capstoneQuestion:
      "What evidence would help a defender make the next decision, and how reliable is that evidence right now?",
    evidence:
      "Alerts, logs, source-health records, detection plans, change context, validation cases, quality metrics.",
  },
  {
    domain: "Incident response",
    core:
      "Triage, scope, facts, hypotheses, decision ownership, containment, communication, evidence preservation, recovery, reassessment, and closure.",
    capstoneQuestion:
      "What is confirmed now, what remains uncertain, and what response is justified at the current evidence level?",
    evidence:
      "Timeline, case notes, decision log, alerts, service health, communications, containment and recovery records.",
  },
  {
    domain: "Cloud security",
    core:
      "Shared responsibility, cloud identity, data handling, managed services, exposure, logging, resilience, configuration governance, and service dependencies.",
    capstoneQuestion:
      "Which security outcomes belong to provider capabilities and which still depend on customer decisions and evidence?",
    evidence:
      "Cloud service inventory, identity roles, architecture, audit-source map, recovery records, policy and exception evidence.",
  },
  {
    domain: "Application and API security",
    core:
      "Input handling, authorization, identity, object ownership, data exposure, error behavior, dependency trust, logging, and secure change.",
    capstoneQuestion:
      "Which application decisions must hold true for approved users and services, and what evidence supports them?",
    evidence:
      "Fictional application flows, authorization rules, expected outcomes, validation records, service-identity design.",
  },
  {
    domain: "Risk management",
    core:
      "Business context, threat condition, likelihood, impact, controls, inherent and residual risk, treatment, ownership, acceptance, and review.",
    capstoneQuestion:
      "Why does this issue matter to the organization, and what decision should the accountable owner make?",
    evidence:
      "Risk register, control evidence, impact analysis, treatment record, owner decision, review trigger.",
  },
  {
    domain: "Privacy",
    core:
      "Purpose, minimization, access, retention, sharing, transparency, data lifecycle, proportional monitoring, ownership, and governance.",
    capstoneQuestion:
      "Is the collection or use of data necessary for the stated purpose, and is the lifecycle governed proportionately?",
    evidence:
      "Data map, purpose statement, classification, retention rules, access roles, exception and review evidence.",
  },
  {
    domain: "Governance and policy",
    core:
      "Policy, standards, procedures, control ownership, evidence, exceptions, review cycles, risk acceptance, escalation, and accountability.",
    capstoneQuestion:
      "What rule or decision governs this security outcome, who owns it, and how can compliance or exception status be reviewed?",
    evidence:
      "Policy requirements, standards, approvals, exceptions, ownership records, review and closure evidence.",
  },
  {
    domain: "Professional communication",
    core:
      "Audience, materiality, business impact, evidence confidence, options, decisions, ownership, limitations, revision, and truthful presentation.",
    capstoneQuestion:
      "What does this audience need to understand or decide, and how much detail is necessary without changing the facts?",
    evidence:
      "Technical report, manager brief, executive summary, presentation notes, reflection and revision record.",
  },
];

const sharedReasoningTools = [
  {
    tool: "Scope",
    meaning:
      "Defines what systems, identities, data, time periods, decisions, and evidence are included or excluded.",
    failure:
      "Without scope, a reviewer may generalize one observation to an entire environment.",
  },
  {
    tool: "Evidence provenance",
    meaning:
      "Records where a fact came from, what source produced it, who owns that source, and what the source can actually prove.",
    failure:
      "Without provenance, a conclusion may look precise while resting on misunderstood evidence.",
  },
  {
    tool: "Source health",
    meaning:
      "Describes whether an evidence source is available, current, delayed, partial, degraded, or unknown.",
    failure:
      "A missing event means little if the source itself was unhealthy during the relevant period.",
  },
  {
    tool: "Assumptions and unknowns",
    meaning:
      "Keep unsupported but necessary beliefs separate from confirmed facts.",
    failure:
      "Hidden assumptions can turn a design guess into false certainty.",
  },
  {
    tool: "Confidence",
    meaning:
      "Expresses how strongly the available evidence supports an interpretation or decision.",
    failure:
      "High severity does not automatically mean High confidence.",
  },
  {
    tool: "Ownership",
    meaning:
      "Identifies who owns the service, risk, control, evidence, exception, decision, recovery action, or communication.",
    failure:
      "Recommendations without owners often remain suggestions instead of governed actions.",
  },
  {
    tool: "Validation",
    meaning:
      "Defines what evidence would show that a control, recovery action, revision, or recommendation achieved its intended result.",
    failure:
      "A completed change is not automatically an effective change.",
  },
  {
    tool: "Residual risk",
    meaning:
      "Describes the exposure that remains after controls or treatment are considered.",
    failure:
      "Security work can look complete while important remaining risk stays invisible.",
  },
];

const crossDomainRelationships = [
  {
    left: "Architecture",
    right: "Detection",
    connection:
      "Architecture identifies critical assets, trust boundaries, dependencies, and expected flows. Detection uses that context to decide which telemetry, source health, and signals matter.",
    example:
      "If a central identity service controls several administrative paths, identity-source health becomes important to multiple detections.",
  },
  {
    left: "Identity",
    right: "Incident Response",
    connection:
      "Identity context helps distinguish expected administrative activity from activity requiring deeper review, while incident response determines how quickly access should be constrained or revalidated.",
    example:
      "A privileged action during an approved change has different context from the same action with no owner, approval, or expected purpose.",
  },
  {
    left: "Cloud",
    right: "Recovery",
    connection:
      "Cloud services may provide durability or backup capabilities, but organizations still need recovery priorities, identity access, dependency readiness, validation, and decision ownership.",
    example:
      "A backup existing in a managed service does not prove the application can be restored to a trusted state.",
  },
  {
    left: "Risk",
    right: "Privacy",
    connection:
      "A security control can reduce technical risk while still increasing data collection, retention, access, or monitoring concerns that require privacy review.",
    example:
      "More telemetry may improve investigation visibility but still needs a defined purpose, appropriate access, and retention limits.",
  },
  {
    left: "Policy",
    right: "Evidence",
    connection:
      "Policy defines expected outcomes, while evidence shows whether required reviews, approvals, exceptions, and controls are actually being governed.",
    example:
      "A policy requiring privileged-access review is stronger when a synthetic review record shows owner, date, disposition, and removed access.",
  },
  {
    left: "Detection",
    right: "Risk",
    connection:
      "Detection can reduce uncertainty or response time, but the risk assessment still needs to evaluate business impact, likelihood, control strength, and remaining exposure.",
    example:
      "A strong alert does not eliminate the underlying risk if recovery or prevention remains weak.",
  },
  {
    left: "Incident Response",
    right: "Executive Communication",
    connection:
      "Response teams preserve detailed evidence, while leaders need a concise explanation of impact, confidence, decisions, owners, and next checkpoints.",
    example:
      "An executive brief should not repeat every log line but must preserve the same confirmed facts and uncertainty as the technical case record.",
  },
  {
    left: "Portfolio Quality",
    right: "Professional Integrity",
    connection:
      "A polished artifact only has value when the student can explain the reasoning, contribution, limitations, revisions, and assistance accurately.",
    example:
      "A student can acknowledge tool assistance while still showing ownership by explaining how they reviewed, changed, and defended the final work.",
  },
];

const readinessScale = [
  {
    level: "Ready",
    meaning:
      "I can explain the concept, apply it to a new fictional case, distinguish strong from weak reasoning, and defend a decision using evidence.",
    next:
      "Use the concept directly in A20 and preserve one strong earlier artifact as reference.",
  },
  {
    level: "Nearly Ready",
    meaning:
      "I understand the concept but still need prompts, examples, or a familiar case to apply it consistently.",
    next:
      "Review one earlier lesson and complete one short synthetic scenario before the related A20 phase.",
  },
  {
    level: "Review Needed",
    meaning:
      "I recognize the vocabulary but cannot yet explain the decision logic, evidence requirements, or limitations clearly.",
    next:
      "Return to the most relevant prior module and rebuild the concept from meaning to application.",
  },
  {
    level: "Unknown",
    meaning:
      "I have not tested my understanding recently enough to make a reliable readiness claim.",
    next:
      "Use a short self-check or earlier module test before assuming the concept is ready.",
  },
];

const readinessRecords = [
  {
    id: "READY-NB-01",
    domain: "Architecture and threat modeling",
    state: "Ready",
    evidence:
      "Can explain assets, trust boundaries, dependencies, assumptions, threat statements, controls, and validation needs without using a real environment.",
    artifact:
      "A19 Security Diagram Project + Threat Model Project",
    action:
      "Carry these models forward into A20.3 and focus on cross-domain consistency.",
  },
  {
    id: "READY-NB-02",
    domain: "Detection and source health",
    state: "Nearly Ready",
    evidence:
      "Understands telemetry and confidence but occasionally treats no event as stronger evidence than source health permits.",
    artifact:
      "A19 Detection Plan Project",
    action:
      "Review no-event vs. no-source reasoning before A20.4.",
  },
  {
    id: "READY-NB-03",
    domain: "Incident response",
    state: "Ready",
    evidence:
      "Can separate facts, hypotheses, decisions, recovery criteria, and unresolved questions in a fictional case.",
    artifact:
      "A19 Incident Report Project",
    action:
      "Reuse the decision-history structure in A20.5.",
  },
  {
    id: "READY-NB-04",
    domain: "Cloud and identity",
    state: "Nearly Ready",
    evidence:
      "Strong on shared responsibility and human access; workload-identity lifecycle needs one more review.",
    artifact:
      "A19 Cloud Security Review Project",
    action:
      "Review purpose, privilege, change-triggered access review, and service-identity ownership before A20.6.",
  },
  {
    id: "READY-NB-05",
    domain: "Risk and privacy",
    state: "Review Needed",
    evidence:
      "Risk treatment is understood, but privacy purpose and minimization are not yet connected consistently to monitoring decisions.",
    artifact:
      "A19 Risk Assessment Project",
    action:
      "Review privacy purpose, data minimization, access, retention, and proportionality before A20.7.",
  },
  {
    id: "READY-NB-06",
    domain: "Executive communication",
    state: "Ready",
    evidence:
      "Can adapt depth by audience while preserving facts, uncertainty, contribution, and limitations.",
    artifact:
      "A19 Portfolio Reflection and Presentation",
    action:
      "Use the same underlying facts for technical, manager, and executive outputs in A20.8.",
  },
];

const quizQuestions = [
  {
    question:
      "Why does A20 begin with a knowledge review instead of immediately starting the capstone case?",
    choices: [
      "To repeat every Advanced lesson word for word.",
      "To identify which cross-domain concepts are ready, uncertain, or weak before those gaps affect capstone decisions.",
      "To avoid using evidence in the capstone.",
      "To replace all prior portfolio artifacts.",
    ],
    answer: 1,
    explanation:
      "A readiness review helps target effort. The capstone assumes earlier concepts can be integrated, so weak areas should be identified before they distort later reasoning.",
  },
  {
    question:
      "Which shared reasoning tool is most important when a monitoring source may have been delayed?",
    choices: [
      "Source health",
      "Visual polish",
      "Portfolio length",
      "Severity color",
    ],
    answer: 0,
    explanation:
      "Source health determines how much confidence a defender can place in the presence or absence of records from that source.",
  },
  {
    question:
      "Why should architecture and detection be reviewed together?",
    choices: [
      "Architecture defines critical relationships and dependencies that help determine which defensive evidence and source-health signals matter.",
      "Architecture replaces monitoring.",
      "Detection should ignore system design.",
      "Every architecture component requires an alert.",
    ],
    answer: 0,
    explanation:
      "Architecture supplies context for monitoring. It helps defenders decide what is important, expected, dependent, privileged, or high impact.",
  },
  {
    question:
      "A student understands human privileged access but is uncertain about workload-identity lifecycle. Which readiness state is strongest?",
    choices: [
      "Ready, because one identity concept is enough.",
      "Nearly Ready, with a targeted review before the cloud-and-identity capstone phase.",
      "Unknown forever.",
      "Skip identity in the capstone.",
    ],
    answer: 1,
    explanation:
      "A focused weakness does not erase stronger understanding, but it should create a targeted review action before the related A20 phase.",
  },
  {
    question:
      "Which statement best distinguishes risk from an incident?",
    choices: [
      "Risk describes possible or remaining exposure requiring a business decision, while an incident describes an event or condition being handled through response.",
      "Risk and incident always mean the same thing.",
      "Risk is always technical and incidents are always financial.",
      "An incident exists whenever a risk register contains a High rating.",
    ],
    answer: 0,
    explanation:
      "Risk and incident are related but distinct. A risk may exist without an incident, and an incident response may reveal new or changed risks.",
  },
  {
    question:
      "Why does professional communication belong in a technical capstone?",
    choices: [
      "Because defenders must explain evidence, impact, confidence, owners, decisions, and next actions to different audiences without changing the underlying facts.",
      "Because every report should contain the same amount of detail.",
      "Because technical evidence should be hidden from all reviewers.",
      "Because executive summaries replace technical records.",
    ],
    answer: 0,
    explanation:
      "Security work creates decisions. Communication must preserve the same truth while adjusting depth and emphasis to the audience.",
  },
  {
    question:
      "What is safest for the A20 Advanced Capstone?",
    choices: [
      "Use fictional systems, synthetic evidence, defensive reasoning, and no access to real environments.",
      "Use real credentials with names removed.",
      "Test a public system because it is visible on the internet.",
      "Publish unresolved weaknesses from a real organization.",
    ],
    answer: 0,
    explanation:
      "The capstone is designed to demonstrate advanced reasoning using fictional and synthetic evidence without real-world access or sensitive information.",
  },
];

const takeaways = [
  "A20 requires integration: architecture, identity, monitoring, response, cloud, risk, privacy, governance, recovery, and communication should reinforce one another.",
  "Readiness means being able to apply a concept to a new fictional decision, not merely recognizing its vocabulary.",
  "Scope, evidence provenance, source health, assumptions, confidence, ownership, validation, and residual risk are shared reasoning tools across many security domains.",
  "Architecture gives context to detection; identity changes incident interpretation; cloud decisions affect recovery; privacy changes how risk controls are designed.",
  "An Advanced capstone should preserve distinctions among facts, interpretations, hypotheses, findings, risks, incidents, exceptions, recommendations, and decisions.",
  "Targeted review is stronger than repeating the entire Advanced curriculum when only a few concepts are weak.",
  "Prior portfolio artifacts can serve as evidence of readiness and reusable professional patterns during A20.",
  "The entire A20 capstone remains fictional, synthetic, defensive, non-operational, and safe for public learning.",
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
        href={previousModule}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Module: A19
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A20
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

export default function AdvancedTrackKnowledgeReviewPage() {
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
              A20.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Advanced Track Knowledge Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The Advanced Capstone assumes you can connect ideas across many
            cybersecurity domains. This lesson does not reteach A1–A19. Instead,
            it identifies the concepts that matter most in a complex defensive
            case and helps you decide where targeted review is needed.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            You will create an Advanced Knowledge Readiness Map using only
            fictional examples and earlier learning artifacts. No real system
            access, testing, scanning, investigation, or private evidence is
            required.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A20: Advanced Capstone"
          lessonTitle="Advanced Track Knowledge Review"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have completed or reviewed the major High School Advanced modules through A19.",
            "I understand that this lesson is a readiness review, not a demand to memorize every previous page.",
            "I am willing to mark a domain Nearly Ready, Review Needed, or Unknown when the evidence does not support calling it Ready.",
            "I will use fictional examples and earlier portfolio artifacts rather than testing any real system.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="Advanced Skill Means Connecting Decisions Across Domains"
        >
          <p className="leading-8">
            In a real defensive case, one team may call an issue an identity
            problem, another may see a cloud configuration concern, a responder may
            treat it as an incident question, and a risk owner may view it as a
            business decision. Those perspectives are not competing if they are
            connected correctly.
          </p>

          <p className="mt-4 leading-8">
            The capstone tests whether you can make those connections. Strong
            Advanced reasoning asks how evidence changes architecture, monitoring,
            response, recovery, privacy, risk, ownership, and communication at the
            same time.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.1">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Core Review"
          title="Twelve Advanced Domains You Need to Connect"
        >
          <p className="leading-8">
            You do not need identical depth in every domain to start A20. You do
            need enough understanding to recognize when one domain changes the
            interpretation or decision in another.
          </p>

          <div className="mt-6 grid gap-5">
            {knowledgeDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.domain}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.core}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Capstone question
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.capstoneQuestion}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Useful evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Shared Reasoning Tools"
          title="Eight Concepts That Appear Across Almost Every Advanced Domain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {sharedReasoningTools.map((item) => (
              <article
                key={item.tool}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">If missing:</span> {item.failure}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Advanced Readiness Snapshot"
          subtitle="Synthetic A20.1 readiness board for the fictional capstone preparation"
          metrics={[
            {
              label: "Domains reviewed",
              value: "12",
              note: "Architecture through professional communication",
            },
            {
              label: "Shared reasoning tools",
              value: "8",
              note: "Scope, provenance, source health, assumptions, confidence, ownership, validation, residual risk",
            },
            {
              label: "Ready domains",
              value: "3",
              note: "Architecture/threat modeling, incident response, executive communication",
            },
            {
              label: "Targeted review",
              value: "3",
              note: "Detection/source health, workload identity, risk/privacy integration",
            },
          ]}
        />

        <FakeAlertCard
          title="Readiness Claim Exceeds Evidence"
          severity="Medium"
          time="A20.1 synthetic review"
          source="Advanced Capstone Readiness Board"
          details="A student marked every domain Ready because every previous module was completed, but the self-check shows uncertainty around workload identities and privacy-aware monitoring."
          recommendation="Use completion as evidence of exposure to the topic, not proof of current readiness. Reclassify uncertain domains and assign targeted review actions before the related capstone phases."
        />

        <FakeLogPanel
          title="Synthetic A20.1 Readiness Notes"
          logs={[
            "[ARCH] trust-boundary and dependency reasoning explained without prompts",
            "[DETECT] no-event vs no-source distinction needs one review",
            "[IR] facts, hypotheses, decisions, and recovery criteria explained accurately",
            "[CLOUD] shared responsibility strong; workload-identity lifecycle needs reinforcement",
            "[RISK] treatment and residual risk understood",
            "[PRIVACY] monitoring purpose and minimization connection needs review",
            "[COMMS] technical and executive depth adapted without changing case facts",
            "[SAFETY] all readiness evidence comes from fictional prior artifacts and synthetic scenarios",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Completion or Readiness?"
          question="A student completed every earlier Advanced module but cannot explain how source health changes confidence when a log source is delayed. What is the strongest readiness conclusion?"
          evidence={[
            "All previous modules were completed.",
            "The student recognizes the term source health.",
            "The student cannot reliably explain no-event vs. no-source reasoning.",
            "A20.4 will depend on telemetry-health interpretation.",
          ]}
          options={[
            "Mark detection reasoning Fully Ready because module completion is enough",
            "Mark the related area Nearly Ready or Review Needed and assign a focused review before A20.4",
            "Remove detection from the capstone",
            "Use alert severity instead of source health",
          ]}
          bestAnswer={1}
          explanation="Completion shows prior exposure, while readiness requires usable understanding. A targeted review protects later capstone decisions without forcing a full curriculum restart."
        />

        <Section
          eyebrow="Cross-Domain Connections"
          title="Eight Relationships the Capstone Will Reuse"
        >
          <div className="grid gap-5">
            {crossDomainRelationships.map((item) => (
              <article
                key={`${item.left}-${item.right}`}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.left}
                  </span>
                  <span className="font-black text-purple-200">↔</span>
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.right}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-purple-100">
                  {item.connection}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Example:</span> {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Readiness Model"
          title="Use Four States Instead of Pretending Everything Is Ready"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {readinessScale.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.level}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-4 text-sm leading-7 text-white">
                  <span className="font-black">Next action:</span> {item.next}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Readiness Register"
          title="Example Advanced Knowledge Readiness Map"
        >
          <p className="leading-8">
            A good readiness map does more than label a topic strong or weak. It
            states the evidence for that judgment, identifies the prior artifact
            that can support review, and assigns a concrete action before the
            related capstone phase.
          </p>

          <div className="mt-6 grid gap-5">
            {readinessRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.domain}</h3>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.state}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Readiness evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                      Prior artifact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.artifact}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Review action
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {item.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Cross-Domain Reasoning"
          question="A fictional monitoring source is delayed during an identity-related service interruption. Which conclusion is strongest?"
          evidence={[
            "The identity platform reports a service interruption.",
            "The monitoring collector shows delayed ingestion during part of the same period.",
            "No privileged alert appears in the delayed window.",
            "The architecture shows several administrative decisions depend on both identity and monitoring services.",
          ]}
          options={[
            "No privileged activity occurred because there is no alert",
            "The source delay lowers confidence in negative monitoring evidence, so architecture, identity, source health, and incident-response reasoning must be reviewed together",
            "The monitoring system definitely caused the identity interruption",
            "Delete the delayed source from the case",
          ]}
          bestAnswer={1}
          explanation="A delayed source weakens what missing records can prove. The capstone should integrate architecture, identity, monitoring, and incident-response context rather than forcing one-source certainty."
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build Your Advanced Knowledge Readiness Map"
        >
          <p className="leading-8">
            Review your understanding using earlier fictional CyberShield artifacts,
            notes, and module-test results. The lab does not require any real
            environment or security tool.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Select eight domains",
                detail:
                  "Choose at least eight Advanced domains that will matter in A20 and write one sentence explaining the core decision each domain supports.",
              },
              {
                title: "Task 2 — Assign readiness states",
                detail:
                  "Mark each domain Ready, Nearly Ready, Review Needed, or Unknown based on what you can currently explain and apply.",
              },
              {
                title: "Task 3 — Record evidence",
                detail:
                  "For each state, cite a prior fictional artifact, quiz result, reflection, or scenario that supports the judgment.",
              },
              {
                title: "Task 4 — Identify cross-domain links",
                detail:
                  "Choose four pairs such as architecture/detection or cloud/recovery and explain how one domain changes the other.",
              },
              {
                title: "Task 5 — Assign targeted review",
                detail:
                  "For every non-Ready domain, define the smallest useful review action before the related A20 lesson.",
              },
              {
                title: "Task 6 — Define readiness evidence",
                detail:
                  "State what you must be able to explain or decide after review before changing the domain to Ready.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision 1 — Strong Overall, One Weak Domain"
          scenario="A student is strong in architecture, incident response, risk, and communication but is uncertain about workload identities. A20.6 will require cloud-and-identity reasoning."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the strong domains marked Ready, mark workload-identity reasoning Nearly Ready, and review purpose, privilege, ownership, lifecycle, and change-triggered access review before A20.6.",
              outcome:
                "Best readiness decision. It preserves genuine strengths while targeting the exact weakness before it matters.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Mark every domain Not Ready because one concept is weak.",
              outcome:
                "Overly broad. Readiness should reflect evidence by domain rather than erase demonstrated strengths.",
              tone: "caution",
            },
            {
              label: "Choice C",
              response:
                "Mark every domain Ready because the student completed the track.",
              outcome:
                "Risky. Completion alone does not prove current applied readiness.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Missing Event During a Blind Window"
          scenario="A synthetic case contains no alert for a privileged event during a period when the monitoring source was delayed."
          choices={[
            {
              label: "Choice A",
              response:
                "Treat the absence of an alert as limited evidence, document the source-health problem, and keep the activity state Unknown until other evidence supports a stronger conclusion.",
              outcome:
                "Best defensive choice. Negative evidence is only as reliable as the source producing it.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Conclude that the privileged event did not occur.",
              outcome:
                "Risky. The source-health limitation prevents that level of certainty.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Conclude that the source was intentionally disabled by an attacker.",
              outcome:
                "Risky. A delayed source does not prove malicious intent or cause.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Explain One Case Through Four Professional Perspectives"
        >
          <p className="leading-8">
            Use a simple fictional condition: an approved administrative change,
            delayed monitoring evidence, a short service interruption, and a
            recovery action. Explain how each professional perspective frames a
            different but connected question.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Security Architect",
                detail:
                  "Which dependencies, trust boundaries, and failure paths made the service interruption possible or important?",
              },
              {
                title: "Detection Engineer",
                detail:
                  "Which source-health and context limitations affect what the monitoring evidence can prove?",
              },
              {
                title: "Incident Responder",
                detail:
                  "What is confirmed, what remains a hypothesis, what decision is justified now, and what recovery evidence is still needed?",
              },
              {
                title: "Risk / Executive Reviewer",
                detail:
                  "What is the business impact, residual uncertainty, owner decision, priority, and next checkpoint?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="Advanced Track Knowledge Review Checklist"
          items={[
            "I can explain the role of architecture, threat modeling, networking, identity, detection, incident response, cloud, application security, risk, privacy, governance, and communication.",
            "I can identify which domains are Ready, Nearly Ready, Review Needed, or Unknown using evidence rather than confidence alone.",
            "I can explain why scope prevents overgeneralization.",
            "I can explain why evidence provenance and source health affect what a source can prove.",
            "I can keep assumptions, unknowns, and confidence visible.",
            "I can assign ownership to risks, controls, evidence, exceptions, recovery actions, and decisions.",
            "I can explain how validation differs from simply completing a change.",
            "I can explain residual risk after controls or treatment.",
            "I can describe at least four important cross-domain relationships.",
            "I can use prior fictional portfolio artifacts as readiness evidence.",
            "I can assign targeted review instead of restarting the entire curriculum unnecessarily.",
            "I can keep every readiness exercise fictional, defensive, ethical, and non-operational.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.1 Knowledge Check">
          <MiniQuiz
            title="A20.1 Mini Quiz: Advanced Track Knowledge Review"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Advanced Knowledge Readiness Map"
          prompt="Create an Advanced Knowledge Readiness Map for A20. Include at least eight cybersecurity domains, a short definition of the decision each domain supports, a readiness state of Ready, Nearly Ready, Review Needed, or Unknown, evidence supporting the state, one prior fictional portfolio artifact or module reference, important cross-domain dependencies, a targeted review action for every non-Ready domain, and the evidence required before changing that domain to Ready."
          tips={[
            "Use applied understanding as the standard for readiness, not simple module completion.",
            "Keep strengths visible instead of marking the entire track weak because of one uncertain concept.",
            "Link architecture, identity, monitoring, response, cloud, privacy, risk, policy, recovery, and communication where they influence one another.",
            "Use prior fictional CyberShield artifacts as evidence and review material.",
            "Make review actions specific and small enough to complete before the relevant A20 phase.",
            "Do not use or inspect real systems, credentials, logs, accounts, architecture, or private records.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.2?"
        >
          <p className="leading-8">
            A20.2 begins the actual Capstone Scenario Briefing. Before continuing,
            make sure you can enter a new case without assuming you already know the
            cause, scope, priority, or solution.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can distinguish prior knowledge from evidence actually supplied by a new case.",
              "I can identify which Advanced domains I am ready to apply and which need targeted review.",
              "I can explain how source health, assumptions, confidence, ownership, validation, and residual risk appear across multiple domains.",
              "I can connect at least four Advanced domains without collapsing them into one vague security problem.",
              "I can begin a fictional capstone case while preserving uncertainty and safety.",
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
          title="Make the Readiness Map Useful During the Entire Capstone"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Keep the map short",
                detail:
                  "A readiness map should point to deeper artifacts rather than copy their full content.",
              },
              {
                title: "Use evidence for every state",
                detail:
                  "Write why you believe a domain is Ready or not, using a prior artifact, quiz, reflection, or scenario.",
              },
              {
                title: "Tie reviews to A20 phases",
                detail:
                  "Schedule identity review before A20.6 or privacy review before A20.7 rather than leaving vague future study tasks.",
              },
              {
                title: "Update after use",
                detail:
                  "A domain may move from Nearly Ready to Ready after you successfully apply it in the capstone.",
              },
              {
                title: "Record recurring weaknesses",
                detail:
                  "If evidence confidence or ownership causes mistakes in several domains, treat it as a cross-domain review need.",
              },
              {
                title: "Preserve strong artifacts",
                detail:
                  "Keep earlier diagrams, reports, risk registers, policies, and review packs available as reference patterns.",
              },
              {
                title: "Prepare for final assessments",
                detail:
                  "A20.10 can reuse this map to identify which domains deserve review before the two practice tests and final test.",
              },
              {
                title: "Keep every example publication-safe",
                detail:
                  "Use only fictional systems, synthetic evidence, and safe learning artifacts throughout the map.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Readiness review does not require real-world security access or testing
          </h2>
          <p className="mt-3 leading-7">
            Use only fictional CyberShield systems, synthetic evidence, safe
            scenarios, prior learning artifacts, and your own notes. Do not access,
            scan, probe, enumerate, exploit, test, monitor, configure, or
            investigate any real system, account, cloud environment, identity,
            network, application, or organization. Do not collect or publish real
            credentials, logs, private records, production architecture, or
            unresolved security findings.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.1 Advanced Track Knowledge Review Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a readiness model for entering the capstone without
            pretending every domain is equally strong. Next, A20.2 introduces the
            fictional Northbridge capstone scenario and teaches how to build a
            case charter before making conclusions.
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