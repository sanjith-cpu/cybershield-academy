import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const lessonTenPath = `${modulePath}/portfolio-review-lab`;
const advancedPath = "/high-school/advanced";

const coverage = [
  {
    range: "Questions 1–2",
    area: "A19.1 — Strong Cyber Portfolios",
    review:
      "Portfolio purpose, evidence types, audience fit, curation, truthful representation, limitations, and publication safety.",
  },
  {
    range: "Questions 3–5",
    area: "A19.2 — Security Diagram Project",
    review:
      "Scope, trust boundaries, flows, dependencies, defensive controls, legends, assumptions, abstraction, and safe presentation.",
  },
  {
    range: "Questions 6–8",
    area: "A19.3 — Incident Report Project",
    review:
      "Evidence vs. interpretation, timeline quality, impact, decision history, recovery evidence, ownership, and bounded conclusions.",
  },
  {
    range: "Questions 9–11",
    area: "A19.4 — Threat Model Project",
    review:
      "Assets, actors, trust boundaries, dependencies, bounded threat statements, controls, assumptions, prioritization, and evidence confidence.",
  },
  {
    range: "Questions 12–14",
    area: "A19.5 — Risk Assessment Project",
    review:
      "Likelihood, impact, inherent and residual risk, controls, uncertainty, treatment, acceptance, ownership, and review.",
  },
  {
    range: "Questions 15–17",
    area: "A19.6 — Detection Plan Project",
    review:
      "Detection objectives, telemetry, context, severity vs. confidence, source health, safe validation, tuning, rollback, and metrics.",
  },
  {
    range: "Questions 18–20",
    area: "A19.7 — Security Policy Draft Project",
    review:
      "Policy vs. standards and procedures, clear requirements, evidence, ownership, exceptions, enforcement, traceability, and review cycles.",
  },
  {
    range: "Questions 21–22",
    area: "A19.8 — Cloud Security Review Project",
    review:
      "Shared responsibility, cloud identity, data, telemetry, recovery, dependencies, governance, control evidence, and provider-neutral review.",
  },
  {
    range: "Questions 23–24",
    area: "A19.9 — Reflection and Presentation",
    review:
      "Artifact curation, audience adaptation, project storytelling, revision evidence, contribution transparency, limitations, and question handling.",
  },
  {
    range: "Question 25",
    area: "A19.10 — Portfolio Review Lab",
    review:
      "Integrated portfolio quality, revision priority, cross-artifact consistency, safety, integrity, and final presentation readiness.",
  },
];

const questions = [
  {
    question:
      "A student has eight completed cybersecurity artifacts. What is the strongest way to decide which ones belong in a public portfolio?",
    choices: [
      "Include all eight because portfolio size is the most important quality measure.",
      "Choose artifacts that demonstrate different skills, fit the intended audience, contain clear evidence and reflection, and are safe to share.",
      "Choose only the longest artifacts.",
      "Choose whichever artifacts contain the most technical vocabulary.",
    ],
    answer: 1,
    explanation:
      "A strong portfolio is curated. Each artifact should contribute useful evidence of skill, match the audience, support truthful claims, and remain publication-safe.",
  },
  {
    question:
      "Which statement best describes strong portfolio evidence?",
    choices: [
      "Only the final artifact matters; reasoning and revision should be hidden.",
      "A certificate automatically proves every related professional skill.",
      "Artifacts, reasoning, process, validation, and reflection can each provide different evidence of capability.",
      "A polished screenshot is enough even when the student cannot explain it.",
    ],
    answer: 2,
    explanation:
      "Portfolio evidence can come from the artifact itself, the reasoning behind decisions, the process used, validation or review records, and reflection showing learning and revision.",
  },
  {
    question:
      "What makes a security diagram different from a generic IT diagram?",
    choices: [
      "It highlights security-relevant assets, trust boundaries, flows, dependencies, controls, assumptions, and ownership in addition to system relationships.",
      "It must include real IP addresses.",
      "It should contain every possible technical detail on one page.",
      "It proves every control is implemented correctly.",
    ],
    answer: 0,
    explanation:
      "A security diagram emphasizes trust, protected assets, security-relevant flows, dependencies, controls, and assumptions so the reader can reason about defensive design.",
  },
  {
    question:
      "A fictional architecture diagram contains so many labels that the main trust boundaries are difficult to see. What is the strongest revision?",
    choices: [
      "Add even more detail so nothing is omitted.",
      "Remove every security annotation.",
      "Create a clearer scoped view, keep a concise legend, and move secondary detail into a supporting diagram or note.",
      "Replace fictional labels with real internal system names.",
    ],
    answer: 2,
    explanation:
      "Diagram quality depends on scope and hierarchy. A focused primary view plus supporting detail usually communicates security relationships better than one overloaded diagram.",
  },
  {
    question:
      "Why should a portfolio security diagram label assumptions and limitations?",
    choices: [
      "To make the diagram look more complicated.",
      "Because a diagram can express design intent without proving every implementation detail or relationship.",
      "Because assumptions are always facts.",
      "Because limitations should replace the legend.",
    ],
    answer: 1,
    explanation:
      "Labeling assumptions and limitations keeps the artifact honest about what the design shows, what remains uncertain, and what would require additional authorized evidence.",
  },
  {
    question:
      "A synthetic incident timeline shows an unusual event before a service outage, but no evidence establishes causation. What is the strongest report language?",
    choices: [
      "The unusual event definitely caused the outage.",
      "The two events are unrelated because causation is not proven.",
      "The unusual event preceded the outage and may be relevant, but causation remains unconfirmed.",
      "Remove the earlier event from the report.",
    ],
    answer: 2,
    explanation:
      "Strong incident reporting preserves chronology while distinguishing sequence and correlation from confirmed cause.",
  },
  {
    question:
      "Why should an incident report preserve earlier decisions even when later evidence changes the interpretation?",
    choices: [
      "To make the report longer.",
      "Because professional review should show what was known at the time, why the decision was reasonable then, and how later evidence changed the response.",
      "Because decisions should never be revised.",
      "Because later evidence should be ignored.",
    ],
    answer: 1,
    explanation:
      "Decision history shows evidence-aware reasoning over time. Later evidence can change confidence without rewriting what responders knew earlier.",
  },
  {
    question:
      "Which incident-report conclusion is strongest when synthetic recovery checks show service availability but one validation source is still missing?",
    choices: [
      "Recovery is fully complete because the service responds.",
      "The incident is definitely still active.",
      "Service availability has returned, but full recovery confidence remains bounded until the missing validation evidence is resolved or formally accepted.",
      "Delete the missing-source note to avoid confusion.",
    ],
    answer: 2,
    explanation:
      "Recovery should be supported by explicit criteria and evidence. Service availability alone may not prove complete trustworthy recovery.",
  },
  {
    question:
      "Which statement best describes a threat model?",
    choices: [
      "A list of confirmed incidents.",
      "A structured defensive analysis connecting assets, actors, trust decisions, plausible adverse events, controls, assumptions, and priorities.",
      "A vulnerability scanner report.",
      "A step-by-step exploitation guide.",
    ],
    answer: 1,
    explanation:
      "Threat modeling is a design and reasoning activity. It identifies plausible concerns and defensive requirements without claiming that the concerns have occurred.",
  },
  {
    question:
      "Which threat statement is strongest?",
    choices: [
      "The API is dangerous.",
      "The cloud could be hacked.",
      "If a protected-resource request reaches the fictional API without expected resource-level authorization, data confidentiality or integrity could be affected; authorization, logging, and owner validation are therefore required.",
      "Security should be increased everywhere.",
    ],
    answer: 2,
    explanation:
      "A strong threat statement names the condition, asset or security property, plausible consequence, and defensive response without exaggeration.",
  },
  {
    question:
      "A threat model shows a control as a design requirement, but there is no implementation evidence. What should the portfolio say?",
    choices: [
      "The control is fully validated because it appears in the model.",
      "The control is unnecessary.",
      "The design requires the control, while implementation effectiveness remains a validation need outside the supplied evidence.",
      "The system is insecure until proven otherwise.",
    ],
    answer: 2,
    explanation:
      "Design intent and implementation evidence are different. A professional portfolio should keep that distinction visible.",
  },
  {
    question:
      "What is the difference between inherent and residual risk?",
    choices: [
      "Inherent risk is considered before current controls; residual risk is what remains after relevant controls are considered.",
      "Residual risk is always higher than inherent risk.",
      "Inherent risk is technical and residual risk is financial.",
      "There is no meaningful difference.",
    ],
    answer: 0,
    explanation:
      "Inherent risk represents exposure before current controls receive credit, while residual risk reflects the remaining exposure after those controls are considered.",
  },
  {
    question:
      "A risk assessment has incomplete evidence about a control's effectiveness. What is the strongest response?",
    choices: [
      "Hide the gap and keep the rating unchanged.",
      "Automatically rate the risk Critical.",
      "Record the uncertainty, explain how it affects confidence, and define the safe validation evidence needed.",
      "Delete the risk from the register.",
    ],
    answer: 2,
    explanation:
      "Missing evidence affects confidence. It should create a visible validation need rather than an unsupported worst-case or best-case conclusion.",
  },
  {
    question:
      "Which example best represents professional risk acceptance?",
    choices: [
      "Ignore the risk because mitigation is inconvenient.",
      "Document the residual risk, accountable owner, rationale, conditions, review or expiration point, and triggers for reconsideration.",
      "Delete the risk from the register after the owner reads it.",
      "Accept every low-severity item permanently.",
    ],
    answer: 1,
    explanation:
      "Risk acceptance is an explicit, accountable governance decision. It is not the same as inaction.",
  },
  {
    question:
      "What is the strongest starting point for a detection plan?",
    choices: [
      "A security question tied to a defined risk, asset, and defensive decision.",
      "A random log field.",
      "A goal of generating the largest possible number of alerts.",
      "A list of ways to avoid monitoring.",
    ],
    answer: 0,
    explanation:
      "Detection planning should begin with what defenders need to know or decide, then identify the evidence that can support that question.",
  },
  {
    question:
      "A fictional alert has High severity but Moderate confidence. What does that mean?",
    choices: [
      "The alert is definitely a confirmed incident.",
      "The potential consequence may be serious, but the available evidence does not yet fully support the interpretation.",
      "The alert should be ignored until confidence is High.",
      "Severity and confidence are the same measurement.",
    ],
    answer: 1,
    explanation:
      "Severity describes potential consequence, while confidence describes how strongly the evidence supports the interpretation.",
  },
  {
    question:
      "A detection is noisy because approved maintenance lacks context in the alert. What is the strongest tuning approach?",
    choices: [
      "Disable the detection permanently.",
      "Raise thresholds until almost nothing alerts.",
      "Add approved maintenance and ownership context, reduce duplicate fan-out, validate the change with synthetic cases, and keep rollback criteria.",
      "Publish instructions for avoiding the detection.",
    ],
    answer: 2,
    explanation:
      "Good tuning addresses the real source of noise while preserving useful defensive coverage, validation, metrics, and rollback.",
  },
  {
    question:
      "Which statement belongs most naturally in a high-level security policy?",
    choices: [
      "Privileged access must have approved purpose, defined scope, accountable ownership, periodic review, and timely removal when no longer needed.",
      "Run this exact command on a specific production platform.",
      "Use this one product version forever.",
      "Every incident will always be prevented.",
    ],
    answer: 0,
    explanation:
      "Policy should define durable organizational requirements and responsibilities. Product-specific implementation belongs in standards or procedures.",
  },
  {
    question:
      "What makes a security exception governable?",
    choices: [
      "It is verbal and understood by the team.",
      "It has rationale, accountable approval, residual risk, compensating controls when appropriate, an expiration or review point, and closure evidence.",
      "It permanently removes the original policy requirement.",
      "It remains hidden so auditors do not misunderstand it.",
    ],
    answer: 1,
    explanation:
      "Governed exceptions are visible, owned, justified, risk-aware, time-bounded where appropriate, and reviewed until closed or renewed.",
  },
  {
    question:
      "Why is the statement 'security logs must detect every attack immediately' weak policy language?",
    choices: [
      "It is too short.",
      "It is an unrealistic absolute that cannot be guaranteed or meaningfully reviewed.",
      "It should contain more product names.",
      "Logging should never appear in policy.",
    ],
    answer: 1,
    explanation:
      "Good policy sets clear, enforceable expectations without promising impossible outcomes. Monitoring depends on coverage, source health, context, and review.",
  },
  {
    question:
      "Which statement best reflects shared responsibility in a cloud security review?",
    choices: [
      "The provider handles every customer security decision.",
      "The customer must operate the provider's physical data centers.",
      "The provider supplies platform capabilities while the customer still owns important decisions about identity, data, configuration, monitoring, recovery, and governance.",
      "Shared responsibility means nobody is accountable.",
    ],
    answer: 2,
    explanation:
      "Cloud security divides responsibilities. Managed services change who operates certain layers but do not remove customer responsibility for how services are configured and governed.",
  },
  {
    question:
      "A fictional cloud backup service exists and has a named owner, but no recent restoration exercise is documented. What is the strongest finding?",
    choices: [
      "Recovery readiness is fully validated.",
      "Backup capability is documented, but restoration and recovery readiness remain only partially evidenced.",
      "The backup definitely failed.",
      "The provider is responsible for every recovery decision.",
    ],
    answer: 1,
    explanation:
      "Backup existence and recovery readiness are different claims. Recovery also depends on restoration, dependencies, ownership, and validation evidence.",
  },
  {
    question:
      "How should the same portfolio project change when presented to a technical reviewer and a college admissions reader?",
    choices: [
      "Change the facts and final result for each audience.",
      "Keep the facts consistent but change the emphasis, terminology, context, and depth to match what each audience needs.",
      "Use identical wording regardless of audience.",
      "Add real security details only for the technical reviewer.",
    ],
    answer: 1,
    explanation:
      "Audience adaptation changes presentation strategy, not truth. Technical and general audiences may need different detail while the underlying work remains the same.",
  },
  {
    question:
      "A reviewer asks whether tools or AI helped create parts of the portfolio. What is the strongest response?",
    choices: [
      "Claim no assistance was used even when it was.",
      "Say the tool made every decision and understanding is unnecessary.",
      "Describe the assistance accurately and explain how you reviewed, understood, revised, and took responsibility for the final work.",
      "Refuse to discuss authorship.",
    ],
    answer: 2,
    explanation:
      "Professional integrity includes truthful representation of contribution and assistance, along with the ability to explain and defend the final reasoning.",
  },
  {
    question:
      "During the final A19 review, which issue should be fixed before cosmetic inconsistencies?",
    choices: [
      "A heading has slightly different spacing.",
      "One card uses a different decorative phrase.",
      "An executive summary overstates what the synthetic evidence proves.",
      "Two section titles use different capitalization.",
    ],
    answer: 2,
    explanation:
      "Accuracy, evidence quality, safety, privacy, and integrity come before visual polish. A misleading claim can damage confidence in the entire portfolio.",
  },
];

const reviewMap = [
  {
    signal: "Missed portfolio-quality questions",
    lesson:
      "Review A19.1 and focus on purpose, evidence types, curation, audience fit, truthful representation, limitations, and publication safety.",
  },
  {
    signal: "Missed diagram questions",
    lesson:
      "Review A19.2 and focus on scope, trust boundaries, flows, dependencies, control annotations, legends, assumptions, and visual clarity.",
  },
  {
    signal: "Missed incident-report questions",
    lesson:
      "Review A19.3 and focus on evidence vs. interpretation, chronology, impact, decision history, recovery evidence, ownership, and bounded conclusions.",
  },
  {
    signal: "Missed threat-model questions",
    lesson:
      "Review A19.4 and focus on assets, actors, trust boundaries, assumptions, bounded threat statements, controls, prioritization, and design-vs-validation evidence.",
  },
  {
    signal: "Missed risk-assessment questions",
    lesson:
      "Review A19.5 and focus on likelihood, impact, inherent vs. residual risk, uncertainty, treatment, acceptance, ownership, and review points.",
  },
  {
    signal: "Missed detection-plan questions",
    lesson:
      "Review A19.6 and focus on security questions, telemetry, context, severity vs. confidence, source health, tuning, validation, metrics, and rollback.",
  },
  {
    signal: "Missed policy questions",
    lesson:
      "Review A19.7 and focus on policy vs. standards and procedures, clear requirements, evidence, ownership, exceptions, enforcement, traceability, and review.",
  },
  {
    signal: "Missed cloud-review questions",
    lesson:
      "Review A19.8 and focus on shared responsibility, identity, data, monitoring, recovery, dependencies, governance, assumptions, and control evidence.",
  },
  {
    signal: "Missed reflection or presentation questions",
    lesson:
      "Review A19.9 and focus on artifact curation, audience adaptation, project storytelling, revision, contribution transparency, limitations, and question handling.",
  },
  {
    signal: "Missed final-review questions",
    lesson:
      "Review A19.10 and focus on quality dimensions, cross-artifact consistency, revision priority, safety, integrity, and final readiness decisions.",
  },
];

const performanceGuide = [
  {
    score: "23–25 correct",
    meaning:
      "Excellent A19 readiness. Your answers show strong portfolio judgment across evidence, defensive reasoning, documentation, communication, revision, integrity, and presentation.",
  },
  {
    score: "20–22 correct",
    meaning:
      "Strong module readiness. Review the few missed areas, then make sure you can explain the reasoning behind each corrected answer.",
  },
  {
    score: "17–19 correct",
    meaning:
      "Developing readiness. Use the targeted review map to revisit the lessons where evidence, communication, or portfolio-quality reasoning was weakest.",
  },
  {
    score: "13–16 correct",
    meaning:
      "Partial readiness. Revisit the connected portfolio artifacts and practice explaining how evidence supports each conclusion, recommendation, and presentation choice.",
  },
  {
    score: "0–12 correct",
    meaning:
      "Foundation review recommended. Work back through A19.1–A19.10 and rebuild the reasoning behind artifact quality, documentation, communication, and professional presentation.",
  },
];

const checklistItems = [
  "I can explain what makes a cybersecurity artifact portfolio-ready rather than merely complete.",
  "I can distinguish artifact evidence, reasoning evidence, process evidence, validation evidence, and reflection evidence.",
  "I can design a security diagram with scope, trust boundaries, flows, controls, assumptions, and a clear legend.",
  "I can write an incident report that separates observations, interpretations, hypotheses, and bounded conclusions.",
  "I can preserve decision history and recovery evidence without rewriting the past using later information.",
  "I can write bounded threat statements and distinguish design requirements from implementation evidence.",
  "I can explain inherent risk, residual risk, evidence confidence, treatment, ownership, and risk acceptance.",
  "I can design a detection plan around a security question, useful telemetry, context, safe validation, metrics, and rollback.",
  "I can distinguish policy from standards and procedures and write clear requirements with evidence, ownership, exceptions, and review.",
  "I can explain cloud shared responsibility across identity, data, logging, recovery, configuration, and governance.",
  "I can curate artifacts for different audiences without changing the underlying facts.",
  "I can explain my own contribution, revisions, limitations, tool assistance, and next steps accurately.",
  "I can review cross-artifact consistency in terminology, names, owners, ratings, confidence, controls, and limitations.",
  "I can prioritize accuracy, evidence quality, privacy, safety, and integrity before cosmetic polish.",
  "I can keep every public portfolio artifact fictional, synthetic, defensive, and free from real sensitive security information.",
];

const takeaways = [
  "Portfolio quality depends on purpose, evidence, reasoning, clarity, revision, audience fit, professional integrity, and safe presentation.",
  "Security diagrams, incident reports, threat models, risk assessments, detection plans, policies, and cloud reviews each demonstrate different but connected professional skills.",
  "A strong artifact distinguishes facts, interpretations, assumptions, unknowns, design requirements, control evidence, and limitations.",
  "Professional risk and detection work depends on context, ownership, validation, residual uncertainty, and clear decision support.",
  "Policy and cloud review connect technical controls to governance, responsibility, evidence, exceptions, recovery, and lifecycle management.",
  "Reflection and presentation reveal whether the student can explain decisions, revisions, contribution, limitations, and transferable learning.",
  "Cross-artifact review makes the entire portfolio more credible by identifying unexplained inconsistencies before an audience does.",
  "Safe cybersecurity portfolios can demonstrate advanced reasoning using fictional systems and synthetic evidence without exposing real security-sensitive information.",
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

export default function A19ModuleTestPage() {
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
              A19 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Cybersecurity Portfolio Projects
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A19 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks the full A19 portfolio workflow:
            artifact quality, security diagrams, incident reports, threat models,
            risk assessments, detection plans, policy drafting, cloud review,
            reflection, presentation, revision, and final portfolio readiness.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Choose the most defensible answer. All organizations, systems, logs,
            identities, incidents, risks, diagrams, and evidence are fictional and
            synthetic. No real security testing or private information is required.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Back to A19.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Module A19
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have reviewed A19.1 through A19.10.",
            "I can explain how each portfolio artifact demonstrates a different defensive professional skill.",
            "I am ready to choose evidence-backed answers rather than the most dramatic or technical-sounding option.",
            "I understand that answers and explanations should remain hidden until I use the existing quiz submission or reveal behavior.",
          ]}
        />

        <Section
          eyebrow="Assessment Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-4">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.range}
                  </span>
                  <h3 className="font-black text-blue-50">{item.area}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
            25-Question Assessment
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            A19 Cybersecurity Portfolio Projects
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
            Complete all 25 questions using the established CyberShield quiz
            controls. Answers and explanations remain hidden according to the
            shared component behavior until you submit or reveal your results.
          </p>

          <div className="mt-8">
            <MiniQuiz
              title="A19 Module Test: Cybersecurity Portfolio Projects"
              questions={questions}
            />
          </div>
        </section>

        <Section
          eyebrow="Performance Guide"
          title="How to Interpret Your Result"
        >
          <div className="grid gap-4">
            {performanceGuide.map((item) => (
              <article
                key={item.score}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.score}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review Map"
          title="What to Review If You Missed a Topic"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {reviewMap.map((item) => (
              <article
                key={item.signal}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.signal}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A19 Module Mastery Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Keep every portfolio artifact fictional, synthetic, defensive, and publication-safe
          </h2>
          <p className="mt-3 leading-7">
            This assessment does not authorize access, scanning, probing,
            exploitation, credential use, account testing, monitoring, log
            collection, configuration changes, incident investigation, or cloud
            review involving real systems or people. Do not use real credentials,
            private records, production diagrams, confidential policies, internal
            identifiers, unresolved real weaknesses, or sensitive incident
            evidence in any portfolio artifact.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            A19 Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Cybersecurity Portfolio Projects Module Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-emerald-50">
            After reviewing your test results, revisit any weak lesson and refine
            the corresponding artifact. Your final A19 outcome is the Advanced
            Cybersecurity Portfolio Review Pack: a defensible, documented, safe,
            and presentation-ready collection of cybersecurity work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={lessonTenPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Review A19.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              A19 Module Home
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
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