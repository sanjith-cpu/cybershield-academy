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
const previousLesson = `${modulePath}/executive-communication-phase`;
const nextLesson = `${modulePath}/advanced-final-readiness-review`;

const objectives = [
  "Explain why a strong cybersecurity portfolio submission is a curated evidence story rather than a complete archive of every draft, screenshot, note, or artifact.",
  "Select and organize capstone artifacts so architecture, monitoring, incident response, cloud, identity, risk, privacy, recovery, and executive communication reinforce one another.",
  "Use traceability, revision history, contribution statements, limitations, source notes, and consistency checks to make the submission defensible and explainable.",
  "Review publication safety by removing or replacing any real-world sensitive details, unsupported claims, hidden assumptions, copied material, or operationally risky content.",
  "Create the Advanced Capstone Portfolio Submission that will serve as the primary A20 portfolio artifact before the final readiness review.",
];

const submissionPrinciples = [
  {
    principle: "Curate, do not dump",
    meaning:
      "Choose the artifacts that best demonstrate reasoning, evidence, decisions, and communication instead of including everything produced.",
    northbridge:
      "A20 does not need every note from every lesson. It needs the strongest case charter, architecture pack, monitoring review, incident decision record, cloud/identity review, risk/privacy register, and executive brief.",
  },
  {
    principle: "Tell one coherent story",
    meaning:
      "Artifacts should describe the same fictional environment, timeline, findings, owners, uncertainty, and decisions.",
    northbridge:
      "The 09:11 privileged action cannot be unresolved in one artifact and called unauthorized in another.",
  },
  {
    principle: "Show evidence, not just conclusions",
    meaning:
      "Important claims should point to the synthetic source, finding ID, decision record, or earlier artifact that supports them.",
    northbridge:
      "A risk statement about monitoring delay should trace back to source-health evidence and the incident timeline.",
  },
  {
    principle: "Show revision",
    meaning:
      "Professional work improves through review. Preserve meaningful changes and explain why they made the artifact stronger.",
    northbridge:
      "A draft executive brief that overstated root cause should show a revision toward bounded evidence language.",
  },
  {
    principle: "State contribution honestly",
    meaning:
      "Explain what the student designed, wrote, reviewed, revised, and decided, and acknowledge any tools or assistance used.",
    northbridge:
      "The final portfolio should explain the student's reasoning and revisions rather than presenting generated material as unexplained personal expertise.",
  },
  {
    principle: "Preserve limitations",
    meaning:
      "Strong portfolios explain what the evidence does not prove and what remains Unknown or outside scope.",
    northbridge:
      "Task-level authorization and exact root cause remain bounded where the synthetic evidence does not resolve them.",
  },
  {
    principle: "Design for the audience",
    meaning:
      "A reviewer should understand the purpose, problem, reasoning, evidence, result, and lesson without reading every supporting record.",
    northbridge:
      "Use concise artifact introductions and summaries while keeping deeper evidence available in appendices or linked sections.",
  },
  {
    principle: "Publish safely",
    meaning:
      "Portfolio quality never requires exposing real credentials, logs, personal data, private architecture, internal screenshots, or unresolved real-world security issues.",
    northbridge:
      "All Northbridge systems, people, identifiers, records, events, risks, and outcomes remain fictional and synthetic.",
  },
];

const requiredArtifacts = [
  {
    id: "A20-P1",
    artifact: "Advanced Knowledge Readiness Map",
    source: "A20.1",
    purpose:
      "Shows how the student evaluated strengths, weak areas, cross-domain dependencies, and targeted review before beginning the capstone.",
    evidenceOfSkill:
      "Self-assessment, domain integration, review planning, evidence-based readiness.",
    include:
      "Readiness states, supporting evidence, targeted review actions, and final reflection on improvement.",
  },
  {
    id: "A20-P2",
    artifact: "Capstone Case Charter and Evidence Inventory",
    source: "A20.2",
    purpose:
      "Defines mission, scope, evidence, stakeholders, constraints, assumptions, unknowns, and decision boundaries.",
    evidenceOfSkill:
      "Case framing, evidence discipline, source limitations, professional scoping.",
    include:
      "Mission, decision question, scope, exclusions, evidence classes, facts, unknowns, and briefing summary.",
  },
  {
    id: "A20-P3",
    artifact: "Architecture and Threat Model Decision Pack",
    source: "A20.3",
    purpose:
      "Explains assets, identities, trust boundaries, dependencies, control expectations, degraded states, recovery, and bounded threat conditions.",
    evidenceOfSkill:
      "Architecture reasoning, threat modeling, dependency analysis, defensive control thinking.",
    include:
      "Architecture diagram, trust boundaries, concentration dependencies, threat statements, findings, and validation needs.",
  },
  {
    id: "A20-P4",
    artifact: "Detection and Monitoring Review",
    source: "A20.4",
    purpose:
      "Connects architecture findings to defensive questions, telemetry, source health, alerts, validation, tuning, and measurement.",
    evidenceOfSkill:
      "Detection design, source-health reasoning, confidence, validation, monitoring quality.",
    include:
      "Defensive questions, telemetry map, source-health states, detection candidates, tuning, metrics, and incident handoff.",
  },
  {
    id: "A20-P5",
    artifact: "Incident Response Decision Record",
    source: "A20.5",
    purpose:
      "Documents timeline, facts, hypotheses, decisions, containment reasoning, recovery criteria, owners, and reassessment triggers.",
    evidenceOfSkill:
      "Incident reasoning, uncertainty management, response governance, recovery.",
    include:
      "Timeline, competing hypotheses, decision IDs, recovery criteria, closure/reopen logic, and audience updates.",
  },
  {
    id: "A20-P6",
    artifact: "Cloud and Identity Governance Review",
    source: "A20.6",
    purpose:
      "Reviews shared responsibility, privileged and workload access, federation, lifecycle, configuration, recovery, and evidence.",
    evidenceOfSkill:
      "Cloud governance, identity reasoning, workload access, authorization evidence, shared responsibility.",
    include:
      "Responsibility map, identity inventory, privileged event review, workload review, cloud control findings, and A20.7 handoff.",
  },
  {
    id: "A20-P7",
    artifact: "Risk and Privacy Decision Register",
    source: "A20.7",
    purpose:
      "Turns technical findings into business risk, privacy, treatment, ownership, residual-risk, and review decisions.",
    evidenceOfSkill:
      "Risk reasoning, privacy governance, treatment decisions, proportionality, ownership.",
    include:
      "Risk records, privacy inventory, treatment rationale, residual risk, owners, and review triggers.",
  },
  {
    id: "A20-P8",
    artifact: "Executive Capstone Brief",
    source: "A20.8",
    purpose:
      "Translates the same capstone truth into technical, manager, executive, risk/privacy, and portfolio communication.",
    evidenceOfSkill:
      "Materiality, audience design, executive communication, consistency, decision support.",
    include:
      "Situation, impact, current state, confidence, material risks, recommendation, owners, checkpoints, and consistency review.",
  },
];

const portfolioArchitecture = [
  {
    section: "1. Project Overview",
    purpose:
      "Explain the fictional organization, capstone purpose, safety boundary, and what the portfolio demonstrates.",
    contents:
      "Northbridge introduction, problem statement, scope, learning goals, fictional-data statement, student contribution summary.",
  },
  {
    section: "2. Case and Evidence Foundation",
    purpose:
      "Show how the investigation and design work began from a bounded evidence model.",
    contents:
      "Case charter, evidence inventory, source-health notes, facts, assumptions, unknowns, exclusions.",
  },
  {
    section: "3. Architecture and Defensive Design",
    purpose:
      "Explain how the environment fits together and where trust, dependency, identity, and control decisions matter.",
    contents:
      "Architecture diagram, trust boundaries, threat statements, dependency findings, recovery paths.",
  },
  {
    section: "4. Monitoring and Response",
    purpose:
      "Show how evidence was designed, interpreted, and used to support response decisions.",
    contents:
      "Detection questions, telemetry map, source-health review, alert interpretation, timeline, competing hypotheses, response decisions.",
  },
  {
    section: "5. Cloud, Identity, Risk, and Privacy",
    purpose:
      "Show governance, shared responsibility, access review, business risk, privacy proportionality, and treatment.",
    contents:
      "Identity inventory, workload review, cloud findings, risk register, privacy inventory, treatment and acceptance decisions.",
  },
  {
    section: "6. Executive Communication",
    purpose:
      "Demonstrate that detailed technical reasoning can be translated into concise leadership decision support.",
    contents:
      "Technical summary, manager summary, executive brief, options, owners, residual risk, checkpoints.",
  },
  {
    section: "7. Reflection and Revision",
    purpose:
      "Show how the work changed through review and what the student learned from the capstone.",
    contents:
      "Revision history, strongest improvement, unresolved limitation, lessons learned, next-skill plan.",
  },
  {
    section: "8. Appendix and Traceability",
    purpose:
      "Keep deeper evidence available without overwhelming the main portfolio narrative.",
    contents:
      "Artifact index, stable IDs, glossary, evidence references, validation notes, publication-safety review.",
  },
];

const traceabilityExamples = [
  {
    claim:
      "Collector delay reduced confidence in missing-alert conclusions during part of the case.",
    tracesTo:
      "A20.2 source-health evidence → A20.4 monitoring review → A20.5 incident decision DEC-NB-03 → A20.7 RISK-NB-02 → A20.8 EXEC-NB-02.",
    value:
      "Shows that one evidence limitation is carried consistently from technical evidence to executive communication.",
  },
  {
    claim:
      "The 09:11 privileged event is confirmed, but exact task-level authorization remains unresolved.",
    tracesTo:
      "A20.2 FACT-NB-03 → A20.3 ARC-NB-02 → A20.5 DEC-NB-01 → A20.6 CLOUD-ID-NB-01 → A20.8 EXEC-NB-01.",
    value:
      "Prevents the final portfolio from silently changing the event into approved or unauthorized status.",
  },
  {
    claim:
      "Worker workload identity has a valid purpose but incomplete current scope evidence.",
    tracesTo:
      "A20.3 workload dependency → A20.6 ID-EV-03 → A20.7 RISK-NB-03 → A20.8 EXEC-NB-03.",
    value:
      "Demonstrates how design evidence, identity evidence, risk uncertainty, and executive language remain aligned.",
  },
  {
    claim:
      "Backup status is current while full restoration evidence is older than preferred.",
    tracesTo:
      "A20.2 recovery evidence → A20.3 ARC-NB-04 → A20.5 recovery criteria → A20.7 RISK-NB-04 → A20.8 EXEC-NB-04.",
    value:
      "Shows consistent distinction between backup availability and recovery readiness.",
  },
  {
    claim:
      "Additional identity telemetry should require documented purpose and minimization.",
    tracesTo:
      "A20.4 monitoring-purpose model → A20.6 monitoring identity review → A20.7 privacy decision DEC-RP-04 → A20.8 EXEC-NB-05.",
    value:
      "Connects security monitoring needs to privacy governance and leadership decision support.",
  },
];

const revisionRecords = [
  {
    version: "Revision 1",
    original:
      "A suspicious privileged administrator caused the service outage.",
    revised:
      "A privileged administrative action is confirmed; task-level authorization and causal relationship remain unresolved.",
    reason:
      "Removed unsupported intent and causation while preserving the material event.",
    lesson:
      "Bounded language is more defensible than dramatic language.",
  },
  {
    version: "Revision 2",
    original:
      "No additional privileged activity occurred because no central alerts were visible.",
    revised:
      "Central monitoring delay reduces confidence in negative alert evidence until backlog recovery is validated.",
    reason:
      "Added source-health context to the interpretation of missing evidence.",
    lesson:
      "Negative evidence depends on source reliability.",
  },
  {
    version: "Revision 3",
    original:
      "The worker identity is overprivileged.",
    revised:
      "The worker identity has a valid business purpose; exact current authorization scope remains a validation need.",
    reason:
      "Separated known purpose from unknown implementation evidence.",
    lesson:
      "Missing evidence should not be converted into a confirmed weakness.",
  },
  {
    version: "Revision 4",
    original:
      "Backups confirm recovery readiness.",
    revised:
      "Backup status is current, while full restoration evidence is older than the preferred review window.",
    reason:
      "Separated backup availability from complete recovery validation.",
    lesson:
      "Recovery requires evidence across dependencies, identities, configuration, and restoration.",
  },
  {
    version: "Revision 5",
    original:
      "More identity fields should be collected for better security.",
    revised:
      "Additional identity fields should be collected only when a documented defensive purpose shows the minimized dataset is insufficient.",
    reason:
      "Added privacy purpose and minimization.",
    lesson:
      "Security usefulness does not automatically justify broader collection.",
  },
];

const contributionStatements = [
  {
    area: "Architecture",
    statement:
      "I organized the fictional Northbridge assets, identities, trust boundaries, dependencies, and control assumptions into a defensive architecture model.",
  },
  {
    area: "Evidence reasoning",
    statement:
      "I separated facts, interpretations, hypotheses, findings, risks, incidents, exceptions, recommendations, and decisions throughout the case.",
  },
  {
    area: "Monitoring",
    statement:
      "I connected architecture questions to synthetic telemetry, source-health states, alert confidence, safe validation, and measurement.",
  },
  {
    area: "Incident response",
    statement:
      "I built a response timeline, preserved competing hypotheses, documented bounded decisions, and defined recovery and reassessment criteria.",
  },
  {
    area: "Cloud and identity",
    statement:
      "I reviewed shared responsibility, privileged and workload access, lifecycle, ownership, configuration governance, and evidence gaps.",
  },
  {
    area: "Risk and privacy",
    statement:
      "I translated technical findings into business risk, treatment, residual risk, privacy purpose, minimization, and review decisions.",
  },
  {
    area: "Communication",
    statement:
      "I created aligned technical, manager, executive, and portfolio communication without changing the underlying case facts.",
  },
  {
    area: "Revision",
    statement:
      "I reviewed the capstone for overstatement, missing source limits, inconsistent status, unclear ownership, privacy gaps, and publication safety, then revised the final artifacts.",
  },
];

const limitations = [
  {
    limitation:
      "The Northbridge case is fictional and intentionally bounded.",
    implication:
      "The portfolio demonstrates reasoning and documentation quality rather than real-world incident investigation.",
  },
  {
    limitation:
      "Task-level authorization for the 09:11 privileged event remains unresolved in the synthetic evidence.",
    implication:
      "The final submission should preserve this uncertainty instead of inventing approval or unauthorized status.",
  },
  {
    limitation:
      "The case does not establish one sole root cause for the portal disruption.",
    implication:
      "The portfolio should present confirmed conditions and contributing hypotheses without overstating causation.",
  },
  {
    limitation:
      "Exact current worker-role scope is intentionally incomplete.",
    implication:
      "The portfolio demonstrates how to handle an authorization-evidence gap rather than claiming overprivilege.",
  },
  {
    limitation:
      "Full restoration evidence is older than the preferred review window.",
    implication:
      "The portfolio should preserve bounded recovery confidence and owned follow-up.",
  },
  {
    limitation:
      "The case uses synthetic monitoring and identity data only.",
    implication:
      "No conclusions should be generalized to any real person, school, organization, platform, or environment.",
  },
];

const publicationChecklist = [
  {
    check: "Fictional naming",
    requirement:
      "Organizations, users, administrators, systems, domains, addresses, tickets, alerts, logs, and owners must be invented.",
  },
  {
    check: "No real credentials or secrets",
    requirement:
      "Do not include passwords, tokens, API keys, session values, recovery codes, private links, or access instructions.",
  },
  {
    check: "No private records",
    requirement:
      "Do not include real student, customer, employee, health, financial, or personal information.",
  },
  {
    check: "No confidential architecture",
    requirement:
      "Do not copy internal network diagrams, cloud layouts, screenshots, access maps, or production configurations from real organizations.",
  },
  {
    check: "No unresolved real findings",
    requirement:
      "Do not publish real vulnerabilities, security weaknesses, incident details, or investigative conclusions.",
  },
  {
    check: "No operational attack content",
    requirement:
      "The portfolio should discuss defensive reasoning and controls, not exploit instructions, bypass methods, credential attacks, or evasion.",
  },
  {
    check: "No unsupported claims",
    requirement:
      "Every major conclusion should match the evidence and confidence preserved throughout A20.",
  },
  {
    check: "Contribution transparency",
    requirement:
      "Explain what the student contributed, reviewed, revised, and learned, and acknowledge assistance honestly.",
  },
];

const qualityDimensions = [
  {
    dimension: "Purpose and scope",
    strong:
      "The reviewer immediately understands the fictional problem, learning objective, audience, and safety boundary.",
    weak:
      "The portfolio starts with artifacts but never explains why the project exists.",
  },
  {
    dimension: "Evidence traceability",
    strong:
      "Important claims point to evidence, stable IDs, findings, or decision records.",
    weak:
      "Conclusions appear without showing how the student reached them.",
  },
  {
    dimension: "Cross-artifact consistency",
    strong:
      "Authorization state, root-cause status, owners, risk, privacy, and recovery conclusions match across every artifact.",
    weak:
      "Different documents quietly contradict one another.",
  },
  {
    dimension: "Defensive reasoning",
    strong:
      "The work shows how architecture, monitoring, response, identity, risk, privacy, and recovery affect decisions.",
    weak:
      "The portfolio is mostly definitions or screenshots with little reasoning.",
  },
  {
    dimension: "Revision quality",
    strong:
      "Important changes show why the final version is more accurate, bounded, clear, or useful.",
    weak:
      "Only a polished final version is shown with no evidence of review.",
  },
  {
    dimension: "Communication",
    strong:
      "Technical and executive views preserve the same truth while adjusting depth appropriately.",
    weak:
      "The executive summary exaggerates or contradicts the technical record.",
  },
  {
    dimension: "Professional integrity",
    strong:
      "Contribution, assistance, limitations, uncertainty, and source boundaries are stated honestly.",
    weak:
      "The portfolio implies certainty, authorship, or experience the student cannot explain.",
  },
  {
    dimension: "Publication safety",
    strong:
      "Everything is fictional, synthetic, non-operational, privacy-safe, and appropriate for public review.",
    weak:
      "Real credentials, private logs, sensitive architecture, or unresolved real security details appear.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the strongest purpose of the A20 final portfolio submission?",
    choices: [
      "To include every note, draft, and screenshot created during the module.",
      "To curate the strongest artifacts into one coherent evidence story that demonstrates reasoning, revision, communication, and professional integrity.",
      "To make the project look as long as possible.",
      "To replace the technical evidence with an executive summary.",
    ],
    answer: 1,
    explanation:
      "A professional portfolio is curated. The strongest artifacts should work together to demonstrate decisions, evidence, revision, and communication.",
  },
  {
    question:
      "One artifact calls the 09:11 privileged action unresolved while another calls it unauthorized. What is the strongest correction?",
    choices: [
      "Keep both because different audiences can have different facts.",
      "Align both artifacts to the evidence-supported state and vary only the level of detail.",
      "Remove the technical artifact.",
      "Change the event to approved instead.",
    ],
    answer: 1,
    explanation:
      "Audience can change depth, but the underlying evidence status must remain consistent.",
  },
  {
    question:
      "Why is revision history useful in a cybersecurity portfolio?",
    choices: [
      "It shows that the first draft was bad.",
      "It demonstrates how review improved evidence accuracy, bounded reasoning, clarity, privacy, or decision usefulness.",
      "It replaces the final artifact.",
      "It proves every revision was correct.",
    ],
    answer: 1,
    explanation:
      "Revision demonstrates professional judgment and learning when changes are tied to specific quality improvements.",
  },
  {
    question:
      "What should a contribution statement do?",
    choices: [
      "Claim complete independent authorship regardless of assistance.",
      "Explain what the student designed, wrote, reviewed, revised, decided, and learned, while acknowledging assistance honestly.",
      "List only software tools.",
      "Hide uncertainty about the work.",
    ],
    answer: 1,
    explanation:
      "Professional integrity includes clear explanation of the student's contribution and any meaningful assistance.",
  },
  {
    question:
      "Which portfolio limitation is strongest?",
    choices: [
      "There were no limitations.",
      "The synthetic case does not establish a sole root cause, so the portfolio preserves competing explanations and avoids unsupported causal claims.",
      "The portfolio is fictional, so evidence does not matter.",
      "Every missing fact should be invented to make the story complete.",
    ],
    answer: 1,
    explanation:
      "Strong limitations explain how evidence boundaries affect interpretation without undermining the value of the project.",
  },
  {
    question:
      "What belongs in a publication-safety review?",
    choices: [
      "Only spelling and grammar.",
      "Checks for real credentials, private records, confidential architecture, real security findings, operational attack content, unsupported claims, and contribution transparency.",
      "Real production screenshots to prove authenticity.",
      "Private logs with names removed.",
    ],
    answer: 1,
    explanation:
      "Publication safety covers sensitive content, operational risk, privacy, evidence accuracy, and professional integrity.",
  },
  {
    question:
      "What is safest for the A20 final portfolio?",
    choices: [
      "Use only fictional Northbridge systems, synthetic evidence, invented identities, and non-operational defensive artifacts.",
      "Replace fictional evidence with real school logs.",
      "Add real cloud screenshots to increase realism.",
      "Include unresolved weaknesses from a real organization.",
    ],
    answer: 0,
    explanation:
      "The Advanced capstone is designed to demonstrate skill safely through fictional and synthetic evidence.",
  },
];

const takeaways = [
  "A strong cybersecurity portfolio is curated around purpose, evidence, reasoning, revision, communication, contribution, and safety rather than raw volume.",
  "The final A20 submission should tell one coherent fictional story across architecture, monitoring, incident response, cloud, identity, risk, privacy, recovery, and executive communication.",
  "Stable IDs and traceability help reviewers see how important conclusions developed from evidence through findings and decisions.",
  "Revision history demonstrates professional learning when changes improve accuracy, source awareness, uncertainty, ownership, privacy, or clarity.",
  "Contribution statements should explain what the student designed, reviewed, revised, decided, and learned while acknowledging assistance honestly.",
  "Limitations strengthen professional work when they explain what the evidence does not prove and where uncertainty remains.",
  "Publication safety requires fictional and synthetic content, no credentials, no private records, no confidential architecture, no unresolved real findings, and no operational attack guidance.",
  "The A20 final portfolio submission becomes the main capstone artifact that A20.10 will review for final Advanced readiness.",
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

export default function FinalPortfolioSubmissionPage() {
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
              A20.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Advanced Capstone
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A20.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Final Portfolio Submission
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A20.1 through A20.8 produced a complete defensive capstone. A20.9 is
            where that work becomes a professional portfolio submission: curated,
            traceable, internally consistent, explainable, revised, honest about
            limitations, and safe for public presentation.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The strongest submission is not the one with the most pages. It is the
            one where every included artifact has a clear purpose and every major
            conclusion can be traced back to evidence and defended in conversation.
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
          lessonTitle="Final Portfolio Submission"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have completed or reviewed the main A20 artifacts from A20.1 through A20.8.",
            "I can explain the current status of the privileged event, monitoring delay, worker identity, recovery evidence, and privacy decisions consistently.",
            "I am willing to remove material that does not strengthen the final evidence story.",
            "I will keep every public-facing detail fictional, synthetic, defensive, and safe.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Portfolio Should Prove How You Think, Not Just What You Produced"
        >
          <p className="leading-8">
            A reviewer may spend only a few minutes deciding whether a project is
            worth reading more deeply. Clear structure matters, but professional
            value comes from the reasoning underneath it: what problem you were
            solving, what evidence you had, what you concluded, what you could not
            conclude, how you revised the work, and what decision the artifact
            supported.
          </p>

          <p className="mt-4 leading-8">
            A20.9 therefore treats portfolio design as an evidence problem. The
            submission should help a reviewer follow the chain from case framing to
            architecture, monitoring, response, governance, risk, privacy, and
            communication without needing to reconstruct the entire project alone.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A20.9">
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
          eyebrow="Submission Principles"
          title="Eight Rules for a Professional Final Capstone"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {submissionPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.principle}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.meaning}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Northbridge:</span>{" "}
                  {item.northbridge}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Artifact Selection"
          title="Eight Core A20 Artifacts to Curate"
        >
          <p className="leading-8">
            The final submission should show progression. Each artifact has a
            different role in the case and should contribute something the others
            do not.
          </p>

          <div className="mt-6 grid gap-5">
            {requiredArtifacts.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-purple-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.source}
                  </span>
                  <h3 className="text-xl font-black text-purple-50">
                    {item.artifact}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-purple-100">
                  <span className="font-black">Purpose:</span> {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                    <span className="font-black">Evidence of skill:</span>{" "}
                    {item.evidenceOfSkill}
                  </div>
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50">
                    <span className="font-black">Include:</span> {item.include}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="A20 Final Portfolio Submission Board"
          subtitle="Synthetic portfolio-readiness and consistency snapshot"
          metrics={[
            {
              label: "Core artifacts",
              value: "8",
              note: "A20.1 through A20.8 evidence chain",
            },
            {
              label: "Traceability examples",
              value: "5",
              note: "Key conclusions traced across multiple artifacts",
            },
            {
              label: "Publication checks",
              value: "8",
              note: "Privacy, safety, evidence, and integrity review",
            },
            {
              label: "Major unresolved claims",
              value: "3",
              note: "Task authorization, sole root cause, exact worker-role scope",
            },
          ]}
        />

        <FakeAlertCard
          title="Cross-Artifact Status Conflict"
          severity="High"
          time="A20.9 portfolio review"
          source="Synthetic Northbridge Portfolio Quality Queue"
          details="The incident record says the 09:11 privileged action remains unresolved, but a draft executive slide labels the action unauthorized."
          recommendation="Align the executive slide to the evidence-supported state. Different audiences may receive different detail, but the underlying status and confidence must remain consistent."
        />

        <FakeLogPanel
          title="Synthetic A20 Portfolio Review Notes"
          logs={[
            "[A20.1] readiness map shows targeted review before capstone work",
            "[A20.2] case charter defines mission, scope, evidence, unknowns, and exclusions",
            "[A20.3] architecture pack preserves trust boundaries, dependencies, and bounded threat statements",
            "[A20.4] monitoring review preserves collector delay as an evidence-quality limitation",
            "[A20.5] incident record keeps multiple hypotheses and bounded response decisions",
            "[A20.6] cloud/identity review separates authentication, authorization, purpose, and current evidence",
            "[A20.7] risk/privacy register preserves residual risk, treatment, and minimization decisions",
            "[A20.8] executive brief matches technical evidence while reducing detail",
            "[A20.9] publication review confirms all content is fictional, synthetic, defensive, and safe",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Include Everything or Curate?"
          question="A student has dozens of drafts, screenshots, notes, and intermediate tables from A20. What belongs in the final portfolio?"
          evidence={[
            "The portfolio must demonstrate reasoning across all major A20 domains.",
            "Several drafts repeat the same information.",
            "Some intermediate notes are useful only for the student, not an external reviewer.",
            "The strongest artifacts already preserve traceability and revision history.",
          ]}
          options={[
            "Include every file because more content always looks stronger",
            "Select the strongest artifacts, explain their purpose, preserve supporting evidence where useful, and remove repetition that does not improve the story",
            "Include only the executive summary",
            "Delete all revision history",
          ]}
          bestAnswer={1}
          explanation="Professional curation keeps the strongest evidence and reasoning while reducing unnecessary repetition and reviewer overload."
        />

        <Section
          eyebrow="Portfolio Architecture"
          title="Eight Sections for the Final Submission"
        >
          <div className="grid gap-5">
            {portfolioArchitecture.map((item) => (
              <article
                key={item.section}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="text-xl font-black text-cyan-50">
                  {item.section}
                </h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Purpose:</span> {item.purpose}
                </p>
                <p className="mt-4 rounded-xl border border-cyan-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-cyan-50">
                  <span className="font-black">Contents:</span> {item.contents}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Traceability"
          title="Show How Important Claims Move Through the Capstone"
        >
          <p className="leading-8">
            Traceability is one of the strongest professional qualities in the
            A20 portfolio. It lets a reviewer follow a claim from the evidence that
            started it to the decision or executive conclusion it eventually
            supported.
          </p>

          <div className="mt-6 grid gap-5">
            {traceabilityExamples.map((item) => (
              <article
                key={item.claim}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <p className="leading-7 text-emerald-50">
                  <span className="font-black">Claim:</span> {item.claim}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Trace:</span> {item.tracesTo}
                </p>
                <p className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Why it matters:</span>{" "}
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Preserve the Limitation"
          question="The final portfolio says Northbridge backups are current. What additional statement is needed for accurate recovery communication?"
          evidence={[
            "Current backup status is documented.",
            "The latest full restoration exercise is older than the preferred review window.",
            "A20 repeatedly distinguishes backup availability from restoration readiness.",
            "The recovery owner has an assigned follow-up action.",
          ]}
          options={[
            "Backups prove recovery is fully ready",
            "Current backups are a strength, while complete restoration confidence remains bounded until validation is refreshed or residual risk is accepted",
            "Recovery should be removed from the portfolio",
            "The evidence-age gap should be hidden from executive reviewers",
          ]}
          bestAnswer={1}
          explanation="The final portfolio should preserve both the strength and the limitation so recovery is not overstated."
        />

        <Section
          eyebrow="Revision History"
          title="Show How the Work Became More Defensible"
        >
          <div className="grid gap-5">
            {revisionRecords.map((item) => (
              <article
                key={item.version}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.version}</h3>

                <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-7 text-red-50">
                  <span className="font-black">Earlier wording:</span>{" "}
                  {item.original}
                </p>

                <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Revised wording:</span>{" "}
                  {item.revised}
                </p>

                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Reason:</span> {item.reason}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  <span className="font-black">Professional lesson:</span>{" "}
                  {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contribution Transparency"
          title="Be Able to Explain What You Actually Did"
        >
          <p className="leading-8">
            A strong student portfolio should be explainable in conversation.
            Contribution statements are not legal disclaimers; they are evidence of
            professional integrity and ownership.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {contributionStatements.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.statement}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Limitations"
          title="Professional Work Says What It Does Not Prove"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {limitations.map((item) => (
              <article
                key={item.limitation}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">
                  {item.limitation}
                </h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  <span className="font-black">Implication:</span>{" "}
                  {item.implication}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Publication Safety"
          title="Eight Checks Before Any Portfolio Is Shared"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {publicationChecklist.map((item) => (
              <article
                key={item.check}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.check}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  {item.requirement}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Quality"
          title="Eight Dimensions for Final Submission Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {qualityDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.dimension}</h3>
                <p className="mt-3 rounded-xl border border-emerald-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strong:</span> {item.strong}
                </p>
                <p className="mt-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Weak:</span> {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Common Portfolio Mistakes"
          title="What Weakens a Final Capstone Submission"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Including everything",
                detail:
                  "Volume can hide the strongest reasoning. Curate the artifacts that best demonstrate the intended skills.",
              },
              {
                title: "Contradicting earlier evidence",
                detail:
                  "Final summaries should not silently change authorization, root-cause, recovery, or risk status.",
              },
              {
                title: "Publishing only polished conclusions",
                detail:
                  "Show enough evidence, revision, and limitation that a reviewer can understand how the conclusion was reached.",
              },
              {
                title: "Claiming more contribution than you can explain",
                detail:
                  "Professional integrity is stronger when assistance and revision are acknowledged clearly.",
              },
              {
                title: "Removing all uncertainty",
                detail:
                  "A polished portfolio can still preserve Unknown, bounded confidence, and unresolved questions.",
              },
              {
                title: "Using real sensitive material for realism",
                detail:
                  "Real credentials, logs, personal data, architecture, and unresolved findings should never be needed for this student portfolio.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Safe Fictional Lab"
          title="Assemble the Advanced Capstone Portfolio Submission"
        >
          <p className="leading-8">
            Use the completed A20 artifacts and only fictional Northbridge evidence.
            The goal is to build the strongest coherent submission, not to create
            new technical findings.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Select the core artifacts",
                detail:
                  "Choose the strongest version of the eight A20 artifacts and write a one-paragraph purpose statement for each.",
              },
              {
                title: "Task 2 — Build the portfolio architecture",
                detail:
                  "Arrange project overview, evidence foundation, architecture, monitoring/response, governance, executive communication, reflection, and appendix.",
              },
              {
                title: "Task 3 — Create a traceability index",
                detail:
                  "Map at least five important conclusions across the evidence, finding, risk, decision, and executive artifacts that support them.",
              },
              {
                title: "Task 4 — Add revision history",
                detail:
                  "Show at least four meaningful revisions and explain how each improved accuracy, bounded reasoning, privacy, ownership, or communication.",
              },
              {
                title: "Task 5 — Add contribution and limitations",
                detail:
                  "Explain your role, review process, assistance, remaining uncertainty, fictional scope, and what the project does not prove.",
              },
              {
                title: "Task 6 — Run publication-safety review",
                detail:
                  "Check every artifact for real names, credentials, private data, confidential architecture, operational attack guidance, unsupported claims, and real-world findings.",
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
          title="Scenario Decision 1 — Portfolio Contains Conflicting Status"
          scenario="The technical incident record says the 09:11 privileged action remains unresolved, but the executive slide calls it unauthorized because the student thinks stronger language sounds more impressive."
          choices={[
            {
              label: "Choice A",
              response:
                "Revise the executive slide to match the evidence-supported unresolved status and keep the stronger technical detail in supporting artifacts.",
              outcome:
                "Best portfolio decision. Professional credibility depends on consistency and evidence discipline.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the stronger executive language because presentations should sound confident.",
              outcome:
                "Risky. Confidence cannot replace evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change the technical record to unauthorized so the documents match.",
              outcome:
                "Risky. Consistency should come from evidence, not rewriting the evidence to fit the summary.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Real Screenshot Would Look Better"
          scenario="A student has access to a real internal dashboard screenshot and thinks it would make the fictional Northbridge portfolio look more professional."
          choices={[
            {
              label: "Choice A",
              response:
                "Use only the fictional dashboard components and synthetic evidence already created for the project.",
              outcome:
                "Best publication-safety choice. Professional quality does not require exposing real internal material.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Use the real screenshot after covering the company name.",
              outcome:
                "Risky. Other sensitive architecture, identifiers, or operational details may remain.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Use the screenshot privately but describe all of its real findings publicly.",
              outcome:
                "Risky. Real unresolved security information should not be used in the portfolio.",
              tone: "risk",
            },
          ]}
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Prepare a Five-Minute Portfolio Defense"
        >
          <p className="leading-8">
            Imagine a teacher, internship reviewer, or admissions reviewer asks you
            to explain the entire capstone in five minutes. Prepare an answer that
            proves you understand the work rather than simply showing the files.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Minute 1 — Problem and scope",
                detail:
                  "Explain the fictional Northbridge case, mission, safety boundary, and why the project exists.",
              },
              {
                title: "Minute 2 — Architecture and evidence",
                detail:
                  "Explain trust boundaries, dependencies, source health, and how evidence limitations affected reasoning.",
              },
              {
                title: "Minute 3 — Response and governance",
                detail:
                  "Explain the incident decisions, cloud/identity findings, risk treatment, and privacy decisions.",
              },
              {
                title: "Minute 4 — Executive communication",
                detail:
                  "Explain how you translated the same technical truth for managers and executives.",
              },
              {
                title: "Minute 5 — Revision and reflection",
                detail:
                  "Explain one major revision, one unresolved limitation, what you personally contributed, and what you would improve next.",
              },
              {
                title: "Reviewer follow-up",
                detail:
                  "Be prepared to defend why the portfolio does not claim a sole root cause or unauthorized privileged activity.",
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
          title="Final Portfolio Submission Checklist"
          items={[
            "I selected artifacts because they demonstrate important skills, not because I wanted maximum volume.",
            "I can explain the purpose of every artifact in the final submission.",
            "I can trace major conclusions back to synthetic evidence, findings, decisions, and owners.",
            "I verified that privileged-action status is consistent across every artifact.",
            "I verified that root-cause language remains bounded by the evidence.",
            "I verified that worker workload authorization remains Unknown where current scope evidence is incomplete.",
            "I verified that backup availability is not presented as complete restoration readiness.",
            "I preserved monitoring source-health limitations in technical and executive communication.",
            "I documented meaningful revisions and why they improved the work.",
            "I included contribution and assistance statements I can explain honestly.",
            "I included limitations and unresolved questions rather than hiding them.",
            "I checked the final submission for real credentials, private records, sensitive architecture, and unresolved real security details.",
            "I kept every example fictional, synthetic, defensive, and non-operational.",
            "I can defend the portfolio verbally without relying on the reviewer to infer my reasoning.",
          ]}
        />

        <Section eyebrow="Assessment" title="A20.9 Knowledge Check">
          <MiniQuiz
            title="A20.9 Mini Quiz: Final Portfolio Submission"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Advanced Capstone Portfolio Submission"
          prompt="Assemble the final fictional Northbridge Advanced Capstone Portfolio Submission. Include a project overview; safety boundary; contribution summary; the strongest A20.1–A20.8 artifacts; a portfolio architecture that groups case framing, architecture, monitoring, response, cloud/identity, risk/privacy, executive communication, reflection, and appendix material; a traceability index for at least five major conclusions; stable artifact and finding IDs; meaningful revision history; limitations; unresolved questions; owner and checkpoint consistency; an executive summary; a five-minute presentation outline; and a publication-safety review confirming that no real credentials, private records, confidential architecture, operational attack guidance, unsupported claims, or real-world unresolved security findings are included."
          tips={[
            "Curate the strongest artifacts instead of including everything.",
            "Keep one underlying case truth across technical, manager, executive, and portfolio views.",
            "Use traceability to show how evidence became findings, risks, decisions, and leadership communication.",
            "Include revisions that demonstrate better reasoning, not just formatting changes.",
            "Explain your contribution and assistance honestly.",
            "Run a full publication-safety review before considering the submission complete.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A20.10?"
        >
          <p className="leading-8">
            A20.10 is the Advanced Final Readiness Review. Before continuing, your
            capstone portfolio should be coherent enough that another reviewer can
            understand and challenge it without discovering preventable
            contradictions.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the purpose and strongest evidence of every included A20 artifact.",
              "I can trace the most important claims across multiple capstone artifacts.",
              "I can identify at least one meaningful revision that improved the accuracy of the work.",
              "I can state the project's limitations and unresolved questions without weakening the value of the portfolio.",
              "I can defend the submission's publication safety and professional integrity.",
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
          title="Prepare the Submission for the Final Readiness Review"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Freeze a review version",
                detail:
                  "Create a clear version that A20.10 can evaluate so revisions after the review are easy to identify.",
              },
              {
                title: "Create an artifact index",
                detail:
                  "List artifact name, purpose, source lesson, key finding IDs, and where the reviewer can find supporting evidence.",
              },
              {
                title: "Mark unresolved items",
                detail:
                  "Use a consistent status so Unknown and pending items cannot be mistaken for completed conclusions.",
              },
              {
                title: "Check owner consistency",
                detail:
                  "Identity, monitoring, cloud, recovery, risk, and privacy owners should remain aligned across the submission.",
              },
              {
                title: "Check executive consistency",
                detail:
                  "Leadership language should match technical status for incident, authorization, recovery, privacy, and residual risk.",
              },
              {
                title: "Prepare oral defense notes",
                detail:
                  "Be ready to explain why each major decision was reasonable based on the evidence available at the time.",
              },
              {
                title: "Prepare final-assessment notes",
                detail:
                  "Record which Advanced domains still feel weakest so A20.10 can turn them into a study plan.",
              },
              {
                title: "Keep the public copy safe",
                detail:
                  "Use only fictional Northbridge content and synthetic evidence in any version intended for sharing.",
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
            The final portfolio must remain fictional, synthetic, defensive, and safe to share
          </h2>
          <p className="mt-3 leading-7">
            Do not include real credentials, secrets, tokens, personal records,
            internal dashboards, private logs, production architecture, confidential
            configurations, real incident evidence, unresolved vulnerabilities, or
            operational attack instructions. Use only the fictional Northbridge
            case and synthetic evidence created for CyberShield Academy. The purpose
            is to demonstrate professional defensive reasoning and communication,
            not real-world security access or investigation.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A20.9 Final Portfolio Submission Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            The Advanced Capstone Portfolio Submission is now assembled with
            curated artifacts, traceability, revision history, contribution
            transparency, limitations, consistency checks, and publication safety.
            Next, A20.10 performs the final Advanced readiness review before the
            A20 module test and full-track assessments.
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