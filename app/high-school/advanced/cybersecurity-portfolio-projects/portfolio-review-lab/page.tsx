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

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const previousLesson = `${modulePath}/portfolio-reflection-and-presentation`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Evaluate cybersecurity portfolio artifacts using a consistent review model for purpose, evidence, reasoning, clarity, safety, audience fit, revision, and professional presentation.",
  "Distinguish content problems from presentation problems so revisions address the actual weakness rather than only making an artifact look more polished.",
  "Review an entire portfolio for consistency across claims, terminology, fictional systems, risk ratings, ownership, evidence confidence, and safety boundaries.",
  "Prioritize final revisions by combining reviewer impact, effort, evidence quality, correctness, usability, and publication safety rather than trying to rewrite every artifact.",
  "Produce an Advanced Cybersecurity Portfolio Review Pack containing a quality rubric, cross-artifact findings, revision priorities, presentation checks, and a final readiness decision.",
];

const reviewDimensions = [
  {
    dimension: "Purpose and scope",
    question:
      "Can a reviewer quickly understand what the artifact is trying to accomplish and what is intentionally outside its scope?",
    strong:
      "The purpose appears near the beginning, the fictional environment is defined, exclusions are visible, and the artifact never claims more than its scope supports.",
  },
  {
    dimension: "Evidence quality",
    question:
      "Are important conclusions connected to synthetic evidence, architecture facts, policy requirements, assumptions, or clearly labeled professional judgment?",
    strong:
      "Evidence is traceable, assumptions are visible, unknowns are not hidden, and design intent is not presented as implementation proof.",
  },
  {
    dimension: "Defensive reasoning",
    question:
      "Does the artifact explain why a finding, priority, control, treatment, or recommendation is reasonable?",
    strong:
      "The reasoning connects assets, impact, controls, confidence, dependencies, ownership, and business context rather than relying on unsupported labels.",
  },
  {
    dimension: "Clarity and structure",
    question:
      "Can a reader find the main question, evidence, decision, and next action without reading every line?",
    strong:
      "Headings, tables, stable IDs, summaries, and concise explanations support scanning without hiding important detail.",
  },
  {
    dimension: "Professional communication",
    question:
      "Is the writing precise, audience-aware, respectful, and free from exaggerated claims or unnecessary jargon?",
    strong:
      "Technical terms are used accurately, unfamiliar terms are explained where needed, and the artifact communicates both technical and business meaning.",
  },
  {
    dimension: "Revision evidence",
    question:
      "Does the portfolio show that feedback or new reasoning changed the work?",
    strong:
      "Meaningful before-and-after decisions are documented, and the student can explain why the revision improved quality.",
  },
  {
    dimension: "Safety and integrity",
    question:
      "Is the work clearly fictional or synthetic, ethically framed, and free from sensitive real-world security information?",
    strong:
      "No real credentials, private records, confidential findings, production diagrams, exploit guidance, or unauthorized evidence appears anywhere.",
  },
  {
    dimension: "Presentation readiness",
    question:
      "Can the student explain the artifact to technical and nontechnical audiences and answer questions about contribution, limitations, tools, and next steps?",
    strong:
      "The artifact has a short summary, a clear project story, known limitations, contribution statement, and prepared reviewer questions.",
  },
];

const ratingScale = [
  {
    rating: "4 — Portfolio Ready",
    meaning:
      "The artifact is accurate, clear, evidence-backed, safe, audience-aware, and ready to show with only minor proofreading.",
  },
  {
    rating: "3 — Strong, Needs Minor Revision",
    meaning:
      "The main reasoning is sound, but one or two clarity, traceability, consistency, or presentation issues should be corrected.",
  },
  {
    rating: "2 — Needs Meaningful Revision",
    meaning:
      "The artifact contains useful work, but important evidence, reasoning, ownership, structure, limitations, or safety framing is incomplete.",
  },
  {
    rating: "1 — Not Ready to Present",
    meaning:
      "The artifact has a major correctness, unsupported-claim, safety, privacy, authorship, or communication problem that should be fixed before publication.",
  },
];

const reviewLayers = [
  {
    layer: "Artifact-level review",
    purpose:
      "Ask whether one individual project is understandable, defensible, safe, and complete.",
    examples:
      "Does the threat model state assumptions? Does the incident report separate fact from inference? Does the risk assessment explain residual risk?",
  },
  {
    layer: "Cross-artifact review",
    purpose:
      "Check whether the portfolio tells one consistent story across multiple projects.",
    examples:
      "Do the same fictional asset names, owners, priorities, and limitations remain consistent from diagram to threat model to risk assessment?",
  },
  {
    layer: "Presentation review",
    purpose:
      "Check whether the strongest work can be explained efficiently to different audiences.",
    examples:
      "Can the student summarize the project in 90 seconds, defend one major decision, and explain what the artifact cannot prove?",
  },
  {
    layer: "Publication-safety review",
    purpose:
      "Confirm that nothing sensitive, misleading, unsafe, private, or unauthorized remains in the final package.",
    examples:
      "Are all screenshots synthetic? Are claims bounded? Are real names, credentials, internal identifiers, and confidential details absent?",
  },
];

const crossArtifactChecks = [
  {
    check: "Names and IDs",
    detail:
      "The same fictional system should not change names unexpectedly between the diagram, threat model, risk assessment, detection plan, and cloud review.",
  },
  {
    check: "Asset importance",
    detail:
      "If an asset is described as critical in one artifact and low-impact in another, the portfolio should explain why the context changed.",
  },
  {
    check: "Risk priority",
    detail:
      "A finding that becomes higher or lower priority should have a visible reason, such as new evidence, stronger controls, dependency changes, or revised business context.",
  },
  {
    check: "Control claims",
    detail:
      "Do not call a control validated in one artifact if another artifact still treats it as a design requirement or unresolved assumption.",
  },
  {
    check: "Ownership",
    detail:
      "Important risks, policies, detections, exceptions, recovery decisions, and recommendations should use compatible owner roles.",
  },
  {
    check: "Evidence confidence",
    detail:
      "Claims should stay consistent with the quality of the supplied evidence. Missing evidence in one artifact should not disappear without explanation in another.",
  },
  {
    check: "Terminology",
    detail:
      "Words such as threat, risk, incident, finding, control, exception, severity, confidence, and priority should be used consistently.",
  },
  {
    check: "Safety framing",
    detail:
      "Every artifact should remain fictional, synthetic, defensive, publication-safe, and free from instructions that would enable misuse.",
  },
];

const reviewFindings = [
  {
    id: "REV-A19-01",
    artifact: "Security Diagram Project",
    type: "Clarity",
    observation:
      "The diagram correctly shows trust boundaries, but the legend does not define the difference between a normal data flow and a privileged administrative flow.",
    impact:
      "A reviewer can understand the architecture, but may miss why one path deserves stronger controls.",
    rating: "3 — Strong, Needs Minor Revision",
    action:
      "Add a compact legend that distinguishes user, service, privileged, and monitoring flows without adding real infrastructure detail.",
  },
  {
    id: "REV-A19-02",
    artifact: "Incident Report Project",
    type: "Evidence",
    observation:
      "The timeline is strong, but one summary sentence states a cause more confidently than the synthetic evidence supports.",
    impact:
      "The artifact risks turning a reasonable interpretation into an unsupported fact.",
    rating: "2 — Needs Meaningful Revision",
    action:
      "Rewrite the sentence as a bounded interpretation, name the supporting evidence, and state what additional authorized evidence would be needed for higher confidence.",
  },
  {
    id: "REV-A19-03",
    artifact: "Threat Model Project",
    type: "Reasoning",
    observation:
      "Threat statements are well structured, but two recommendations do not identify a responsible fictional owner.",
    impact:
      "The security reasoning is understandable, yet follow-through is weaker because accountability is unclear.",
    rating: "3 — Strong, Needs Minor Revision",
    action:
      "Assign an appropriate fictional owner role and define evidence that would show the review action is complete.",
  },
  {
    id: "REV-A19-04",
    artifact: "Risk Assessment Project",
    type: "Consistency",
    observation:
      "A monitoring risk is Moderate residual risk here, while the cloud review calls its related visibility finding High priority.",
    impact:
      "The difference can be valid, but the portfolio does not currently explain that residual risk and review priority answer different questions.",
    rating: "3 — Strong, Needs Minor Revision",
    action:
      "Add one sentence explaining that a Moderate residual risk can still receive High review priority because several detections depend on the same telemetry source.",
  },
  {
    id: "REV-A19-05",
    artifact: "Detection Plan Project",
    type: "Measurement",
    observation:
      "The plan includes alert relevance and source health, but one detection lacks a clear post-tuning success metric.",
    impact:
      "The tuning change is reversible, but reviewers cannot easily tell whether the change improved signal quality.",
    rating: "2 — Needs Meaningful Revision",
    action:
      "Add a metric such as context completeness, duplicate burden, or decision-support rate and define the expected improvement.",
  },
  {
    id: "REV-A19-06",
    artifact: "Security Policy Draft Project",
    type: "Policy language",
    observation:
      "The policy is strong overall, but the word 'promptly' appears in one requirement without a definition or supporting standard.",
    impact:
      "Different teams could interpret the requirement differently.",
    rating: "3 — Strong, Needs Minor Revision",
    action:
      "Define the term at policy level or state that an approved supporting standard defines the required timeframe.",
  },
  {
    id: "REV-A19-07",
    artifact: "Cloud Security Review Project",
    type: "Evidence",
    observation:
      "The review correctly distinguishes backup from recovery, but the executive summary does not mention that restoration evidence is still incomplete.",
    impact:
      "A nontechnical reader could leave with more confidence in recovery readiness than the evidence justifies.",
    rating: "2 — Needs Meaningful Revision",
    action:
      "Add the restoration-evidence limitation to the executive summary and keep the recovery recommendation among the top priorities.",
  },
  {
    id: "REV-A19-08",
    artifact: "Portfolio Reflection and Presentation",
    type: "Presentation",
    observation:
      "The presentation explains technical growth well but does not include a concise personal-contribution statement near the beginning.",
    impact:
      "A reviewer may understand the project but still be unsure which planning, analysis, writing, revision, and implementation work the student personally performed.",
    rating: "3 — Strong, Needs Minor Revision",
    action:
      "Add a short, accurate contribution statement and be transparent about teacher, peer, software, or AI assistance.",
  },
];

const priorityModel = [
  {
    priority: "P1 — Fix Before Showing Anyone",
    criteria:
      "Safety issues, private information, misleading authorship, major factual errors, unsupported claims, broken links, or conclusions that materially exceed the evidence.",
    examples:
      "Real credentials, a claim that fictional analysis proved a real system secure, or a broken artifact that cannot be opened.",
  },
  {
    priority: "P2 — Fix Before Formal Review",
    criteria:
      "Important evidence, reasoning, ownership, consistency, limitation, or decision-quality problems that could change how a reviewer interprets the work.",
    examples:
      "Unsupported incident cause, missing residual-risk rationale, absent recovery limitation, or unclear detection validation.",
  },
  {
    priority: "P3 — Improve When Time Allows",
    criteria:
      "Presentation, wording, spacing, minor consistency, visual polish, or convenience improvements that do not change the core reasoning.",
    examples:
      "Legend cleanup, shorter paragraphs, consistent capitalization, improved summary wording, or stronger visual hierarchy.",
  },
];

const finalReadinessAreas = [
  {
    area: "Accuracy",
    ready:
      "Claims match the evidence, terminology is used correctly, and limitations are visible.",
  },
  {
    area: "Traceability",
    ready:
      "Major findings, ratings, recommendations, and policy requirements can be traced to supporting evidence or clearly labeled assumptions.",
  },
  {
    area: "Consistency",
    ready:
      "Names, priorities, owners, confidence levels, and security concepts remain compatible across artifacts.",
  },
  {
    area: "Communication",
    ready:
      "Each artifact has a clear purpose, useful structure, concise summary, and audience-appropriate language.",
  },
  {
    area: "Professional integrity",
    ready:
      "Contribution, assistance, uncertainty, and limitations are represented accurately.",
  },
  {
    area: "Safety",
    ready:
      "Everything is fictional, synthetic, publication-safe, and free from real sensitive security information.",
  },
  {
    area: "Presentation",
    ready:
      "The student can explain selected artifacts, defend major decisions, answer questions, and adapt to technical or nontechnical audiences.",
  },
];

const commonMistakes = [
  {
    mistake: "Polishing before correcting reasoning",
    correction:
      "A beautiful artifact with unsupported conclusions is still weak. Fix evidence, accuracy, and decision quality before visual polish.",
  },
  {
    mistake: "Rewriting everything at the last minute",
    correction:
      "Prioritize high-impact issues. A small number of targeted revisions usually improves readiness more than changing every page.",
  },
  {
    mistake: "Using one rubric differently for every artifact",
    correction:
      "Different projects need different technical criteria, but shared dimensions such as evidence, clarity, integrity, safety, and audience fit should remain consistent.",
  },
  {
    mistake: "Treating cross-artifact differences as automatic errors",
    correction:
      "A changed rating or priority may be valid if new evidence or context explains it. The review should look for unexplained inconsistency, not force artificial sameness.",
  },
  {
    mistake: "Hiding weak areas",
    correction:
      "A limitation paired with a thoughtful improvement plan can demonstrate stronger judgment than an unsupported claim of perfection.",
  },
  {
    mistake: "Publishing real security evidence to look advanced",
    correction:
      "Fictional systems and synthetic evidence can demonstrate professional reasoning without exposing private data, internal architecture, credentials, or real weaknesses.",
  },
];

const quizQuestions = [
  {
    question:
      "Which issue should normally receive the highest final-review priority?",
    choices: [
      "A real credential or unsupported security claim appears in a portfolio artifact",
      "Two headings use slightly different capitalization",
      "A paragraph could be shortened",
      "A decorative card could have more spacing",
    ],
    answer: 0,
    explanation:
      "Safety, privacy, accuracy, and integrity issues should be corrected before cosmetic improvements.",
  },
  {
    question:
      "Why is cross-artifact review important?",
    choices: [
      "It checks whether names, evidence, priorities, controls, owners, terminology, and limitations remain consistent across the portfolio",
      "It makes every artifact use the same exact layout",
      "It removes the need to review individual projects",
      "It requires every risk to have the same rating",
    ],
    answer: 0,
    explanation:
      "A portfolio should tell a coherent story even though different projects serve different purposes.",
  },
  {
    question:
      "What is the strongest response when two artifacts use different priorities for related issues?",
    choices: [
      "Determine whether different evidence, business context, dependencies, or decision goals explain the change and document that reasoning",
      "Automatically change both to the same priority",
      "Delete the lower-priority artifact",
      "Hide the inconsistency from reviewers",
    ],
    answer: 0,
    explanation:
      "Differences are not automatically errors. What matters is whether the difference is defensible and explained.",
  },
  {
    question:
      "What should be fixed before visual polish?",
    choices: [
      "Incorrect claims, evidence gaps, unsafe content, misleading authorship, and broken reasoning",
      "Card spacing",
      "Decorative wording",
      "Minor capitalization",
    ],
    answer: 0,
    explanation:
      "Content correctness and integrity matter more than surface polish.",
  },
  {
    question:
      "Which rating best fits an accurate artifact with strong reasoning but one missing owner and a small clarity issue?",
    choices: [
      "3 — Strong, Needs Minor Revision",
      "1 — Not Ready to Present",
      "Automatically 4 — Portfolio Ready",
      "No rating can be given",
    ],
    answer: 0,
    explanation:
      "The core artifact is strong, but the missing ownership and clarity issue should be corrected before calling it fully ready.",
  },
  {
    question:
      "What makes a final portfolio readiness decision defensible?",
    choices: [
      "A documented review of accuracy, traceability, consistency, communication, integrity, safety, and presentation readiness",
      "The portfolio has many pages",
      "Every artifact uses complicated vocabulary",
      "The student says it is finished",
    ],
    answer: 0,
    explanation:
      "Readiness should come from clear quality criteria and evidence, not size or appearance alone.",
  },
  {
    question:
      "What is safest for the final A19 portfolio package?",
    choices: [
      "Use fictional systems, synthetic evidence, accurate contribution statements, and no real confidential security information",
      "Add real credentials to make the work more realistic",
      "Publish private incident evidence",
      "Include unresolved weaknesses from real systems",
    ],
    answer: 0,
    explanation:
      "Professional student portfolios can demonstrate advanced reasoning without exposing or accessing sensitive real-world information.",
  },
];

const takeaways = [
  "Final portfolio review should evaluate purpose, evidence, reasoning, clarity, communication, revision, safety, and presentation readiness.",
  "Correctness, privacy, safety, and integrity should be fixed before cosmetic polish.",
  "Artifact-level review checks one project; cross-artifact review checks whether the entire portfolio tells a consistent story.",
  "Different risk ratings or priorities can be valid when new evidence, dependencies, or decision context explains the change.",
  "A portfolio-ready artifact connects important claims to evidence or clearly labeled assumptions and keeps limitations visible.",
  "Revision priority should reflect reviewer impact and risk, not simply which change is easiest or most visually noticeable.",
  "Professional integrity includes accurate authorship, transparent assistance, bounded confidence, and safe publication.",
  "The final review pack should make it easy to decide what is ready, what still needs revision, and why.",
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
        Module A19
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300"
      >
        Module Test
      </Link>
    </div>
  );
}

export default function PortfolioReviewLabPage() {
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
              A19.10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.10
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Portfolio Review Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The final portfolio review is where separate projects become one
            professional package. You will evaluate artifact quality, evidence,
            reasoning, consistency, safety, revision priority, and presentation
            readiness before deciding what is truly ready to show.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All review material remains fictional and synthetic. The goal is to
            strengthen your own portfolio, not inspect real organizations, accounts,
            systems, or confidential security evidence.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A19: Cybersecurity Portfolio Projects"
          lessonTitle="Portfolio Review Lab"
          lessonNumber={10}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand the purpose and major evidence of each A19 portfolio artifact.",
            "I can separate correctness and reasoning problems from visual presentation problems.",
            "I am prepared to identify limitations and needed revisions instead of assuming every completed artifact is automatically portfolio-ready.",
            "I will keep all review evidence fictional, synthetic, publication-safe, and accurate to my actual contribution.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="Finished Does Not Automatically Mean Ready to Present">
          <p className="leading-8">
            Completing a project is an important milestone, but professional review
            asks a different question: can another person understand, trust, and use
            the work? A report may be technically detailed but unclear. A diagram
            may look polished but hide important assumptions. A risk assessment may
            be accurate individually but conflict with another artifact. A
            presentation may be impressive but overstate what the evidence proves.
          </p>

          <p className="mt-4 leading-8">
            Final review catches those problems before the audience does. It also
            helps you spend revision time wisely. The goal is not endless editing.
            The goal is to identify the changes that most improve accuracy,
            credibility, safety, and reviewer understanding.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.10">
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

        <Section eyebrow="Core Teaching" title="Eight Dimensions of Portfolio Quality">
          <p className="leading-8">
            Different cybersecurity artifacts need different technical criteria, but
            the entire portfolio can still be reviewed through a shared quality
            model. These dimensions make review more consistent and help prevent
            visual polish from hiding weak reasoning.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviewDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  <span className="font-black">Review question:</span>{" "}
                  {item.question}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Strong evidence:</span>{" "}
                  {item.strong}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Rating Scale" title="Use Ratings to Guide Revision, Not to Replace Judgment">
          <p className="leading-8">
            A simple four-level scale helps organize review, but the written reason
            matters more than the number. A reviewer should be able to explain why
            the artifact received its rating and what specific revision would move
            it closer to portfolio-ready.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {ratingScale.map((item) => (
              <article
                key={item.rating}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.rating}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Review Layers" title="Review One Artifact, Then Review the Portfolio as a System">
          <div className="grid gap-5 md:grid-cols-2">
            {reviewLayers.map((item) => (
              <article
                key={item.layer}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.layer}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.purpose}
                </p>
                <p className="mt-4 text-sm leading-7 text-white">
                  <span className="font-black">Examples:</span> {item.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Cross-Artifact Review" title="Look for Unexplained Inconsistency">
          <p className="leading-8">
            A strong portfolio should not feel like unrelated assignments. The
            diagram, threat model, risk assessment, detection plan, policy, cloud
            review, incident report, and presentation should reinforce one another.
            Differences are acceptable when they are explained by new evidence or a
            different decision context.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {crossArtifactChecks.map((item) => (
              <article
                key={item.check}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.check}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="A19 Portfolio Review Board"
          subtitle="Synthetic readiness dashboard for the fictional final portfolio review."
          metrics={[
            {
              label: "Artifacts reviewed",
              value: "8",
              note: "Diagram through reflection and presentation package",
            },
            {
              label: "Portfolio ready",
              value: "3",
              note: "Three artifacts require only final proofreading",
            },
            {
              label: "Meaningful revisions",
              value: "5",
              note: "Evidence, ownership, measurement, consistency, and limitation updates remain",
            },
            {
              label: "Critical safety issues",
              value: "0",
              note: "No real credentials, private records, production evidence, or unsafe instructions appear",
            },
          ]}
        />

        <FakeAlertCard
          title="Executive Summary Overstates Recovery Readiness"
          severity="High"
          time="Final synthetic portfolio review"
          source="A19 Portfolio Quality Review"
          details="The Cloud Security Review correctly says recent restoration evidence is incomplete, but its executive summary currently implies recovery readiness is fully validated."
          recommendation="Revise the executive summary before formal presentation so its confidence matches the underlying evidence and the recovery limitation remains visible."
        />

        <FakeLogPanel
          title="Synthetic Final Review Notes"
          logs={[
            "[A19.2] diagram structure strong; privileged-flow legend needs clarification",
            "[A19.3] one incident cause statement exceeds evidence confidence",
            "[A19.4] two threat recommendations need explicit fictional owners",
            "[A19.5] residual risk and review priority difference needs explanation",
            "[A19.6] one tuned detection lacks a post-change quality metric",
            "[A19.7] one policy term needs definition or supporting standard",
            "[A19.8] executive summary must preserve recovery-evidence limitation",
            "[A19.9] add concise personal-contribution statement near presentation opening",
            "[SAFETY] no real credentials, private records, real weaknesses, or unauthorized system evidence found",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Fix Content or Fix Presentation?"
          question="The incident report looks polished, but one sentence states a root cause more confidently than the synthetic evidence supports. What should be revised first?"
          evidence={[
            "The timeline and formatting are clear.",
            "The evidence supports a likely explanation but not a confirmed root cause.",
            "The summary currently presents the explanation as fact.",
            "A reviewer could rely on the summary without reading every evidence note.",
          ]}
          options={[
            "Correct the claim and confidence language before spending time on additional visual polish",
            "Keep the claim because the page looks professional",
            "Add more decorative elements to make the report stronger",
            "Remove all limitations from the report",
          ]}
          bestAnswer={0}
          explanation="Accuracy and evidence discipline are more important than appearance. A polished unsupported claim can reduce trust in the entire artifact."
        />

        <Section eyebrow="Fictional Review Findings" title="Eight Final A19 Review Notes">
          <p className="leading-8">
            These findings demonstrate how a reviewer can identify one concrete
            issue, explain why it matters, assign a readiness rating, and define a
            bounded revision instead of rewriting the entire artifact.
          </p>

          <div className="mt-6 grid gap-5">
            {reviewFindings.map((finding) => (
              <article
                key={finding.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {finding.id}
                  </span>
                  <h3 className="font-black text-white">{finding.artifact}</h3>
                  <span className="text-sm text-slate-400">{finding.type}</span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Observation
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {finding.observation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {finding.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Readiness rating
                  </p>
                  <p className="mt-2 font-black text-purple-50">
                    {finding.rating}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Targeted revision
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50">
                    {finding.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Inconsistency or Different Decision?"
          question="A monitoring issue is Moderate residual risk in the risk assessment but High review priority in the cloud review. Is that automatically inconsistent?"
          evidence={[
            "Residual risk describes remaining exposure after controls.",
            "Review priority describes how urgently a finding deserves attention in a particular decision context.",
            "Several fictional detections depend on the same telemetry source.",
            "The cloud review emphasizes dependency concentration and recovery decision quality.",
          ]}
          options={[
            "No. The difference can be defensible if the portfolio explains that dependency concentration makes the finding a high review priority even though residual risk remains Moderate",
            "Yes. Every related label across every artifact must always be identical",
            "Delete one of the artifacts",
            "Change both labels to Critical so there is no disagreement",
          ]}
          bestAnswer={0}
          explanation="Related artifacts can answer different questions. The portfolio should explain the relationship so the difference looks intentional rather than contradictory."
        />

        <Section eyebrow="Revision Priority" title="Fix the Highest-Impact Problems First">
          <p className="leading-8">
            Final review can create a long list of possible improvements. A
            professional workflow does not treat every issue as equally urgent.
            Safety, accuracy, evidence, and integrity come before cosmetic polish.
          </p>

          <div className="mt-6 grid gap-5">
            {priorityModel.map((item) => (
              <article
                key={item.priority}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-xl font-black text-purple-50">
                  {item.priority}
                </h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.criteria}
                </p>
                <p className="mt-4 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                  <span className="font-black">Examples:</span> {item.examples}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Final Readiness" title="Seven Areas to Check Before You Call the Portfolio Ready">
          <div className="grid gap-5 md:grid-cols-2">
            {finalReadinessAreas.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.ready}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Avoid These Final-Review Anti-Patterns">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.correction}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Run the A19 Final Portfolio Review">
          <p className="leading-8">
            Review the fictional A19 package as though you are the final quality
            reviewer. Do not add real evidence. The job is to improve the supplied
            artifacts and make a readiness decision.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Score four artifacts",
                detail:
                  "Choose four A19 artifacts and rate each from 1 to 4 across purpose, evidence, reasoning, clarity, communication, revision, safety, and presentation.",
              },
              {
                title: "Task 2 — Find two cross-artifact issues",
                detail:
                  "Look for unexplained differences in names, owners, controls, priorities, confidence, terminology, or limitations.",
              },
              {
                title: "Task 3 — Separate content from polish",
                detail:
                  "Label each finding as accuracy, evidence, reasoning, consistency, safety, communication, presentation, or visual polish.",
              },
              {
                title: "Task 4 — Prioritize revisions",
                detail:
                  "Place each finding into P1, P2, or P3 and explain why the order protects credibility and reviewer understanding.",
              },
              {
                title: "Task 5 — Re-review after revision",
                detail:
                  "For the three highest-priority issues, describe the expected before-and-after evidence and decide whether the rating should change.",
              },
              {
                title: "Task 6 — Make a readiness decision",
                detail:
                  "Write a short final decision: ready, ready after minor revision, or not yet ready. Support it with evidence from the review.",
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
          title="Scenario Decision 1 — Limited Time Before a Formal Review"
          scenario="The portfolio review identifies one unsupported incident-cause statement, one missing recovery limitation, three wording issues, and several small visual inconsistencies. There is time for only a few revisions."
          choices={[
            {
              label: "Choice A",
              response:
                "Fix the unsupported claim and missing recovery limitation first, then address the most important wording issue before spending time on cosmetic consistency.",
              outcome:
                "Best choice. Accuracy, evidence confidence, and reviewer interpretation should take priority over visual polish.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Spend all remaining time making every card and heading visually identical.",
              outcome:
                "Risky. Visual consistency matters, but it should not leave important evidence or accuracy problems unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Leave the unsupported claim because explaining uncertainty might make the portfolio look weaker.",
              outcome:
                "Risky. Honest confidence boundaries increase credibility rather than reduce it.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Reviewer Wants More Realism"
          scenario="A reviewer suggests replacing synthetic evidence with screenshots and records from a real organization so the portfolio appears more advanced."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the portfolio fictional and synthetic, improve realism through safe context and professional documentation, and explain that sensitive real evidence is unnecessary for demonstrating reasoning.",
              outcome:
                "Best professional choice. Skill can be demonstrated without exposing private or security-sensitive information.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Add real internal screenshots as long as the organization name is cropped out.",
              outcome:
                "Unsafe. Sensitive identifiers and security context can remain even when one visible name is removed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Include real credentials temporarily and remove them later.",
              outcome:
                "Unsafe. Real credentials do not belong in portfolio material at any stage.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Act as a Three-Person Review Panel">
          <p className="leading-8">
            Review the same artifact from three perspectives. Your final decision
            should combine the strongest concerns without forcing every reviewer to
            care about the same details.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Technical Reviewer",
                detail:
                  "Check evidence, architecture, terminology, control reasoning, assumptions, confidence, and technical limitations.",
              },
              {
                title: "Professional Communication Reviewer",
                detail:
                  "Check structure, summaries, audience fit, readability, contribution, presentation story, and ability to answer questions.",
              },
              {
                title: "Safety and Integrity Reviewer",
                detail:
                  "Check publication safety, truthful representation, synthetic evidence, authorship transparency, bounded claims, and absence of sensitive real information.",
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
          title="A19 Final Portfolio Review Checklist"
          items={[
            "Every artifact states a clear purpose and scope.",
            "Major conclusions are traceable to synthetic evidence, architecture facts, policy requirements, or clearly labeled assumptions.",
            "Threats, risks, incidents, findings, controls, severity, confidence, and priority are used consistently.",
            "Risk ratings and priorities are explained rather than presented as unexplained labels.",
            "Important recommendations identify fictional owners and validation evidence.",
            "Cross-artifact differences are either corrected or explained by new evidence or decision context.",
            "Executive summaries preserve important limitations and uncertainty.",
            "Contribution and outside assistance are represented accurately.",
            "The strongest artifacts can be explained to both technical and nontechnical audiences.",
            "Broken links, missing sections, formatting problems, and obvious proofreading issues are corrected.",
            "No real credentials, private records, internal production diagrams, confidential findings, or unauthorized evidence appears.",
            "The final package is clearly fictional, synthetic, defensive, and publication-safe.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.10 Knowledge Check">
          <MiniQuiz
            title="A19.10 Mini Quiz: Portfolio Review Lab"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Advanced Cybersecurity Portfolio Review Pack"
          prompt="Create an Advanced Cybersecurity Portfolio Review Pack for A19. Include an eight-dimension quality rubric, ratings for at least four artifacts, eight cross-artifact checks, a prioritized revision list using P1/P2/P3, before-and-after notes for at least three meaningful revisions, a final readiness assessment, a presentation-readiness section, an authorship and assistance statement, and a publication-safety confirmation."
          tips={[
            "Fix correctness, evidence, safety, and integrity issues before cosmetic polish.",
            "Use written rationale with every important rating instead of relying on a number alone.",
            "Look for consistency across the diagram, incident report, threat model, risk assessment, detection plan, policy, cloud review, and presentation.",
            "Do not force identical ratings where different decision contexts justify a difference; explain the relationship instead.",
            "Keep limitations visible and describe what future authorized evidence would be needed to increase confidence.",
            "Use only fictional Northbridge systems and synthetic evidence and remove all real sensitive security information.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for the A19 Module Test?">
          <p className="leading-8">
            The A19 module test checks the judgment behind portfolio quality:
            artifact purpose, clarity, evidence-backed defensive reasoning,
            documentation, communication, revision, truthful representation,
            professional presentation, and safety.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can evaluate an artifact with consistent quality dimensions instead of judging it only by appearance.",
              "I can identify and explain cross-artifact inconsistencies.",
              "I can prioritize safety, accuracy, evidence, and reasoning before visual polish.",
              "I can make a final readiness decision and support it with review evidence.",
              "I can explain why truthful contribution, bounded confidence, limitations, and publication safety strengthen a cybersecurity portfolio.",
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

        <Section eyebrow="Portfolio Build Guide" title="Package the Final Review So It Can Guide Future Improvements">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Keep one master review table",
                detail:
                  "Track artifact, rating, strongest evidence, weakness, revision priority, owner, status, and final readiness in one place.",
              },
              {
                title: "Preserve before-and-after notes",
                detail:
                  "Revision history makes growth visible and gives you concrete examples to discuss in applications and interviews.",
              },
              {
                title: "Link findings to artifacts",
                detail:
                  "Stable review IDs make it easy to trace each quality issue to the page, project, or presentation section that needs revision.",
              },
              {
                title: "Separate blockers from polish",
                detail:
                  "Mark safety, correctness, evidence, and integrity issues as blockers so they cannot be hidden by cosmetic progress.",
              },
              {
                title: "Record your readiness decision",
                detail:
                  "State what is ready now, what still needs work, and what evidence will show that the remaining revision is complete.",
              },
              {
                title: "Keep audience notes",
                detail:
                  "Record which artifacts work best for technical, academic, application, internship, and nontechnical audiences.",
              },
              {
                title: "Re-run safety review after edits",
                detail:
                  "New screenshots, examples, or revisions should receive the same publication-safety check as the original artifact.",
              },
              {
                title: "Improve gradually after publication",
                detail:
                  "Once the complete track is published, this review pack can guide careful page-by-page improvements without redesigning everything at once.",
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
            Final review must protect privacy, security, authorship, and accuracy
          </h2>
          <p className="mt-3 leading-7">
            Keep the entire A19 portfolio fictional, synthetic, defensive, and
            publication-safe. Do not add real credentials, private records,
            confidential incident evidence, production architecture, access tokens,
            internal account identifiers, unresolved real weaknesses, or information
            obtained without authorization. Do not add offensive procedures,
            exploitation instructions, bypass guidance, or detection-evasion
            material to make the portfolio appear more advanced.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            A19 Lessons Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.10 Portfolio Review Lab Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-emerald-50">
            You have now completed all ten A19 lessons and built the structure for
            the Advanced Cybersecurity Portfolio Review Pack. The next page is the
            25-question A19 Module Test covering portfolio artifact quality,
            clarity, defensive reasoning, documentation, communication, revision,
            and professional presentation.
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