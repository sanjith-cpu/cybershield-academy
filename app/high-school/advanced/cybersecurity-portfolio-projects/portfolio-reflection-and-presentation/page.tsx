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
const previousLesson = `${modulePath}/cloud-security-review-project`;
const nextLesson = `${modulePath}/portfolio-review-lab`;

const objectives = [
  "Explain how professional reflection turns completed cybersecurity work into evidence of judgment, growth, revision, and transferable skill.",
  "Select portfolio artifacts for different audiences by matching evidence depth, technical detail, privacy, and presentation format to the reader's goals.",
  "Present a defensive cybersecurity project using a clear story: context, problem, reasoning, artifact, decision, result, limitations, and lessons learned.",
  "Answer portfolio questions with accurate confidence, distinguish personal contribution from team or tool support, and discuss limitations without exaggerating expertise.",
  "Create a portfolio-ready Reflection and Presentation Package that includes an artifact selection rationale, speaking outline, project story, revision notes, audience adaptations, and a final self-assessment.",
];

const reflectionDimensions = [
  {
    dimension: "What I understood",
    detail:
      "Explain the concepts you learned well enough to apply, compare, or teach. Avoid simply listing lesson titles.",
    evidence:
      "A19.4 helped me connect trust boundaries, assets, assumptions, and controls into bounded threat statements.",
  },
  {
    dimension: "What I decided",
    detail:
      "Show the judgment behind the artifact. Strong reflection explains why one option was chosen over another.",
    evidence:
      "I ranked privileged-role governance above a lower-impact reporting issue because of privilege, dependency, and business impact.",
  },
  {
    dimension: "What evidence I used",
    detail:
      "Name the fictional records, diagrams, risks, alerts, policy requirements, or review notes that supported the decision.",
    evidence:
      "The cloud review used identity inventory, synthetic source-health notes, recovery records, and policy requirements.",
  },
  {
    dimension: "What I changed",
    detail:
      "Describe revision. Portfolios become stronger when the student can explain how feedback or new evidence improved the work.",
    evidence:
      "I revised vague policy language into requirements with ownership, evidence, review, and exception handling.",
  },
  {
    dimension: "What remains limited",
    detail:
      "State what the artifact cannot prove, which assumptions remain, and what would require further authorized evidence.",
    evidence:
      "The cloud architecture demonstrates design review but does not prove a real production implementation.",
  },
  {
    dimension: "What transfers",
    detail:
      "Connect the lesson to a broader professional skill such as evidence reasoning, risk communication, architecture review, documentation, or governance.",
    evidence:
      "The same fact-vs-inference discipline used in incident reporting also improves risk assessment and executive communication.",
  },
];

const audienceProfiles = [
  {
    audience: "Technical reviewer",
    wants:
      "Architecture detail, assumptions, evidence sources, control reasoning, limitations, and technical tradeoffs.",
    emphasize:
      "Diagram, threat model, detection plan, cloud review, validation logic, evidence confidence.",
    reduce:
      "Long background explanations the reviewer already understands.",
  },
  {
    audience: "Teacher or evaluator",
    wants:
      "Clear learning goals, evidence of understanding, safe process, complete artifact, reflection, and improvement.",
    emphasize:
      "Objectives, reasoning, artifact quality, revisions, ethical boundaries, lessons learned.",
    reduce:
      "Unnecessary jargon that hides whether the concept is understood.",
  },
  {
    audience: "College or scholarship reader",
    wants:
      "Initiative, intellectual growth, project ownership, communication, persistence, impact, and authentic interest.",
    emphasize:
      "Why the project mattered, what you built, what you learned, how you improved it, and how the work connects to future goals.",
    reduce:
      "Dense implementation details that do not help the reader understand significance.",
  },
  {
    audience: "Hiring or internship reviewer",
    wants:
      "Practical reasoning, communication, documentation quality, professionalism, ethical judgment, and evidence that you can explain your work.",
    emphasize:
      "Problem, role, decision, artifact, tradeoffs, result, limitations, and transferable skills.",
    reduce:
      "Claims of mastery that are not supported by the actual project.",
  },
  {
    audience: "Nontechnical stakeholder",
    wants:
      "Business meaning, risk, decision, ownership, outcome, and next steps.",
    emphasize:
      "Impact, priority, decision rationale, responsibilities, and concise visuals.",
    reduce:
      "Low-level terminology, long logs, and details that do not change the decision.",
  },
];

const presentationStory = [
  {
    step: "Context",
    prompt:
      "What fictional or educational environment was being reviewed, and why did the project matter?",
    example:
      "Northbridge needed a provider-neutral cloud security review for a fictional student-service platform.",
  },
  {
    step: "Problem",
    prompt:
      "What security question, design issue, risk, or governance need did the artifact address?",
    example:
      "The review needed to determine whether identity, data, monitoring, recovery, and shared-responsibility decisions were clearly owned.",
  },
  {
    step: "Approach",
    prompt:
      "How did you structure the work and what evidence did you use?",
    example:
      "I separated architecture facts, policy requirements, control evidence, assumptions, exceptions, and unknowns before writing findings.",
  },
  {
    step: "Decision",
    prompt:
      "Which judgment or prioritization mattered most?",
    example:
      "I prioritized privileged-role review evidence, telemetry freshness, and recovery validation because they affected high-value dependencies.",
  },
  {
    step: "Artifact",
    prompt:
      "What did you actually produce?",
    example:
      "A cloud asset inventory, six findings, top-three priorities, owner-based recommendations, and an executive summary.",
  },
  {
    step: "Result",
    prompt:
      "What became clearer or stronger because of the work?",
    example:
      "The final review connected technical observations to business impact, ownership, validation, and next decisions.",
  },
  {
    step: "Limitation",
    prompt:
      "What can the artifact not prove?",
    example:
      "It is a synthetic design review and does not claim validation of any real production cloud implementation.",
  },
  {
    step: "Lesson",
    prompt:
      "What professional skill did you gain or strengthen?",
    example:
      "I learned to separate evidence from interpretation and communicate technical risk differently to technical and nontechnical readers.",
  },
];

const artifactSelection = [
  {
    artifact: "Security Diagram Project",
    strongestEvidence:
      "Architecture communication, trust boundaries, dependencies, data flows, and scope.",
    bestAudience:
      "Technical reviewer, teacher, portfolio reviewer",
    discussionPoint:
      "Explain why you chose the level of abstraction and how you protected sensitive information.",
  },
  {
    artifact: "Incident Report Project",
    strongestEvidence:
      "Timeline reasoning, evidence vs. interpretation, impact, decision documentation, and recovery.",
    bestAudience:
      "Teacher, hiring reviewer, security reviewer",
    discussionPoint:
      "Explain how you kept uncertain conclusions bounded and why chronology mattered.",
  },
  {
    artifact: "Threat Model Project",
    strongestEvidence:
      "Assets, trust boundaries, assumptions, plausible adverse events, controls, and priorities.",
    bestAudience:
      "Technical reviewer, college reader, hiring reviewer",
    discussionPoint:
      "Show how the threat model moved from architecture facts to defensive decisions.",
  },
  {
    artifact: "Risk Assessment Project",
    strongestEvidence:
      "Likelihood, impact, inherent and residual risk, treatment, ownership, and business context.",
    bestAudience:
      "Nontechnical stakeholder, teacher, hiring reviewer",
    discussionPoint:
      "Explain one rating you challenged or revised and what evidence changed your decision.",
  },
  {
    artifact: "Detection Plan Project",
    strongestEvidence:
      "Risk-to-detection mapping, telemetry reasoning, signal quality, validation, tuning, and metrics.",
    bestAudience:
      "Technical reviewer, security reviewer, internship reviewer",
    discussionPoint:
      "Explain why alert volume is not the same as detection quality.",
  },
  {
    artifact: "Security Policy Draft Project",
    strongestEvidence:
      "Governance, requirements, ownership, exceptions, evidence, and durable communication.",
    bestAudience:
      "Teacher, nontechnical stakeholder, governance reviewer",
    discussionPoint:
      "Show one weak statement you revised into a clear, reviewable requirement.",
  },
  {
    artifact: "Cloud Security Review Project",
    strongestEvidence:
      "Shared responsibility, identity, data, logging, recovery, governance, prioritization, and evidence confidence.",
    bestAudience:
      "Technical reviewer, college reader, hiring reviewer",
    discussionPoint:
      "Explain how you separated provider capability from customer responsibility.",
  },
];

const speakingSkills = [
  {
    skill: "Lead with the decision",
    detail:
      "Do not make the listener wait through every detail before hearing the point. State the project purpose and most important result early.",
  },
  {
    skill: "Use evidence selectively",
    detail:
      "Choose the two or three strongest examples that support your explanation instead of reading every table or log line.",
  },
  {
    skill: "Define technical terms when needed",
    detail:
      "If the audience may not know a term such as residual risk, trust boundary, or telemetry, explain it briefly in plain language.",
  },
  {
    skill: "Separate what you know from what you infer",
    detail:
      "Use phrases such as 'the supplied evidence shows,' 'my interpretation was,' and 'the model could not confirm' to keep confidence accurate.",
  },
  {
    skill: "Discuss tradeoffs",
    detail:
      "Strong presentations explain why a decision was reasonable given competing goals such as security, usability, recovery, time, complexity, and evidence quality.",
  },
  {
    skill: "End with reflection",
    detail:
      "Finish with what improved, what remains limited, and what you would do next in an authorized professional setting.",
  },
];

const questionFramework = [
  {
    questionType: "Why did you choose this project?",
    strongApproach:
      "Connect the artifact to a skill you wanted to demonstrate and explain why it mattered to the broader portfolio.",
  },
  {
    questionType: "What was the hardest part?",
    strongApproach:
      "Name a real reasoning challenge, such as prioritizing similar risks or separating evidence from interpretation, then explain how you resolved it.",
  },
  {
    questionType: "What did you personally do?",
    strongApproach:
      "State your own contribution clearly, including planning, analysis, drafting, revision, and presentation. Do not take credit for work you did not perform.",
  },
  {
    questionType: "What would you improve?",
    strongApproach:
      "Choose a meaningful limitation and explain the next safe improvement rather than saying the artifact is already perfect.",
  },
  {
    questionType: "How do you know your answer was right?",
    strongApproach:
      "Explain the evidence and reasoning that supported the decision and acknowledge where professional judgment or uncertainty remained.",
  },
  {
    questionType: "Did you use tools or AI?",
    strongApproach:
      "Describe assistance honestly and explain how you reviewed, understood, revised, and took responsibility for the final artifact.",
  },
  {
    questionType: "Could this be used on a real system?",
    strongApproach:
      "Explain that the portfolio demonstrates concepts with fictional evidence and that real work would require authorization, organization-specific context, approved tools, and professional oversight.",
  },
];

const revisionRecords = [
  {
    id: "REV-NB-01",
    artifact: "Threat Model Project",
    before:
      "Several early threat statements were broad and used words such as 'dangerous' without clear conditions.",
    change:
      "Rewrote the statements to include asset, condition, security property, consequence, evidence, uncertainty, and defensive response.",
    lesson:
      "Specific language makes the model easier to challenge and connect to decisions.",
  },
  {
    id: "REV-NB-02",
    artifact: "Risk Assessment Project",
    before:
      "Two Moderate risks were originally treated as equal priority.",
    change:
      "Added dependency concentration, business importance, recovery impact, and evidence confidence to the prioritization.",
    lesson:
      "A rating summarizes risk but does not replace contextual judgment.",
  },
  {
    id: "REV-NB-03",
    artifact: "Detection Plan Project",
    before:
      "One alert description contained too little ownership and approval context.",
    change:
      "Added fictional owner, approval, asset, and maintenance enrichment before considering tuning.",
    lesson:
      "Better context can reduce analyst effort without removing defensive visibility.",
  },
  {
    id: "REV-NB-04",
    artifact: "Security Policy Draft",
    before:
      "Early policy language used unrealistic phrases such as 'always' and did not define exceptions.",
    change:
      "Replaced absolutes with mandatory but reviewable requirements and added a governed exception process.",
    lesson:
      "Policy should be strong enough to govern but realistic enough to follow.",
  },
  {
    id: "REV-NB-05",
    artifact: "Cloud Security Review",
    before:
      "The first draft treated backup existence as evidence of complete recovery readiness.",
    change:
      "Separated backup capability from restoration and validation evidence.",
    lesson:
      "Control existence and control effectiveness are different evidence questions.",
  },
];

const commonMistakes = [
  {
    mistake: "Showing every artifact equally",
    correction:
      "Curate. Choose a smaller set of projects that demonstrate different strengths and explain why each one belongs.",
  },
  {
    mistake: "Reading the artifact word for word",
    correction:
      "Present the story and decision. Use the artifact as evidence rather than as a script.",
  },
  {
    mistake: "Using jargon to sound advanced",
    correction:
      "Technical vocabulary is useful only when it improves precision. Define unfamiliar terms and prioritize clarity.",
  },
  {
    mistake: "Claiming the work is perfect",
    correction:
      "Professional reflection includes limitations, uncertainty, revision, and next steps.",
  },
  {
    mistake: "Taking credit for tool-generated work you cannot explain",
    correction:
      "Be transparent about assistance and make sure you can defend the reasoning, edits, and final decisions yourself.",
  },
  {
    mistake: "Sharing sensitive evidence",
    correction:
      "Use synthetic screenshots, fictional names, abstracted diagrams, and safe examples rather than real credentials, private records, internal architecture, or unresolved weaknesses.",
  },
];

const quizQuestions = [
  {
    question:
      "What makes reflection valuable in a cybersecurity portfolio?",
    choices: [
      "It explains understanding, decisions, evidence, revision, limitations, and transferable learning",
      "It repeats the project title several times",
      "It removes every mention of mistakes",
      "It proves the artifact is perfect",
    ],
    answer: 0,
    explanation:
      "Reflection shows how the student thinks and improves, not just what the final artifact looks like.",
  },
  {
    question:
      "Why should portfolio presentation change for different audiences?",
    choices: [
      "Different audiences need different levels of technical detail, context, business meaning, and evidence",
      "The facts should change for each audience",
      "Technical audiences never need context",
      "Nontechnical audiences should receive no evidence",
    ],
    answer: 0,
    explanation:
      "The facts should remain consistent, but emphasis and depth should match the reader's needs.",
  },
  {
    question:
      "Which presentation sequence is strongest?",
    choices: [
      "Context, problem, approach, decision, artifact, result, limitation, and lesson",
      "Read every log line, then explain the purpose",
      "Start with every definition before naming the project",
      "Skip limitations and questions",
    ],
    answer: 0,
    explanation:
      "A clear story helps the audience understand why the work mattered and what the student actually did.",
  },
  {
    question:
      "How should a student answer a question about a project limitation?",
    choices: [
      "State the limitation accurately, explain why it matters, and describe a safe next improvement",
      "Claim there are no limitations",
      "Invent evidence that was not available",
      "Change the subject",
    ],
    answer: 0,
    explanation:
      "Honest limitations show maturity and help the reviewer understand the artifact's actual scope.",
  },
  {
    question:
      "What is the best way to discuss tool or AI assistance?",
    choices: [
      "Describe the assistance honestly and explain how you reviewed, understood, revised, and took responsibility for the final work",
      "Claim no tools were used even when they were",
      "Say the tool made every decision",
      "Avoid understanding the final artifact",
    ],
    answer: 0,
    explanation:
      "Transparency and ownership matter. The student should be able to explain and defend the final reasoning.",
  },
  {
    question:
      "Which artifact-selection strategy is strongest?",
    choices: [
      "Choose projects that demonstrate different skills and match the intended audience",
      "Include every artifact regardless of quality or relevance",
      "Select only the longest documents",
      "Choose artifacts containing the most jargon",
    ],
    answer: 0,
    explanation:
      "Curation makes the portfolio clearer and helps each artifact contribute distinct evidence.",
  },
  {
    question:
      "What is safest to present in a student cybersecurity portfolio?",
    choices: [
      "Fictional systems, synthetic evidence, abstracted diagrams, bounded findings, and publication-safe examples",
      "Real credentials",
      "Private incident records",
      "Unresolved weaknesses from a real organization",
    ],
    answer: 0,
    explanation:
      "The portfolio should demonstrate skill without exposing or accessing sensitive real-world information.",
  },
];

const takeaways = [
  "Reflection explains how you understood, decided, used evidence, revised, recognized limitations, and transferred learning.",
  "A portfolio should be curated for the audience rather than treated as a storage folder containing every artifact.",
  "Strong project presentations tell a clear story from context and problem through decision, result, limitation, and lesson.",
  "Technical facts should remain consistent across audiences even when the level of detail and emphasis change.",
  "Professional confidence includes saying what the evidence supports, what remains uncertain, and what the artifact cannot prove.",
  "Revision records make growth visible and can be stronger evidence than pretending the first draft was perfect.",
  "Students should describe their own contribution and tool assistance accurately and be able to explain the final reasoning themselves.",
  "Cybersecurity portfolios should use fictional, synthetic, abstracted, and publication-safe evidence rather than sensitive real-world information.",
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
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function PortfolioReflectionAndPresentationPage() {
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
              A19.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.9
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Portfolio Reflection and Presentation
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A strong portfolio is not only a collection of cybersecurity artifacts.
            You also need to explain what the work proves, how your reasoning
            changed, which decisions mattered, what remains limited, and why the
            project is relevant to the audience in front of you.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches reflection, curation, speaking, and professional
            presentation using only fictional Northbridge projects and synthetic
            evidence. It does not require sharing real security information.
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
          lessonTitle="Portfolio Reflection and Presentation"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I have several completed A19 portfolio artifacts that I can compare and discuss.",
            "I understand that presentation should explain reasoning and growth rather than simply display finished work.",
            "I can distinguish what an artifact proves from what it cannot prove.",
            "I will keep every example fictional, synthetic, publication-safe, and accurate to my actual contribution.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="The Artifact Shows the Work; Your Explanation Shows the Professional Judgment">
          <p className="leading-8">
            Two students can submit similar diagrams or reports and still present
            very different levels of understanding. One may only describe what is
            visible on the page. The other can explain why the project was scoped a
            certain way, which evidence mattered, what tradeoffs shaped the result,
            what changed during revision, and what the artifact still cannot prove.
          </p>

          <p className="mt-4 leading-8">
            That second explanation is what makes a portfolio useful in interviews,
            classes, applications, presentations, and reviews. The finished artifact
            is evidence, but reflection and presentation reveal how you think.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.9">
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

        <Section eyebrow="Core Teaching" title="Reflection Is Evidence of Learning, Not a Diary Entry">
          <p className="leading-8">
            Professional reflection is structured. It explains what you understood,
            what you decided, what evidence supported the decision, what changed
            during revision, what remains limited, and which skills transfer to new
            problems. This makes the reflection useful to someone evaluating your
            readiness rather than only to you.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reflectionDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Example:</span> {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Audience Awareness" title="Keep the Facts Consistent; Change the Emphasis">
          <p className="leading-8">
            Audience adaptation does not mean changing the truth. It means choosing
            the details that help a particular reader understand the work. A
            technical reviewer may want evidence sources and trust boundaries, while
            a scholarship reader may care more about initiative, growth, persistence,
            and why the project mattered.
          </p>

          <div className="mt-6 grid gap-5">
            {audienceProfiles.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.audience}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                      Wants
                    </p>
                    <p className="mt-2 text-sm leading-7 text-cyan-50">
                      {item.wants}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Emphasize
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.emphasize}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reduce
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.reduce}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Presentation Structure" title="Tell a Project Story Instead of Reading a Document">
          <p className="leading-8">
            Most portfolio presentations become clearer when they follow a simple
            story. The audience should understand what the project was, which
            problem mattered, how you approached it, which decision was important,
            what you produced, what changed, and what you learned.
          </p>

          <div className="mt-6 grid gap-5">
            {presentationStory.map((item, index) => (
              <article
                key={item.step}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.step}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.prompt}
                    </p>
                    <p className="mt-3 rounded-xl border border-purple-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-purple-50">
                      <span className="font-black">Example:</span> {item.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Portfolio Curation" title="Choose Artifacts That Prove Different Skills">
          <p className="leading-8">
            A large portfolio is not automatically a strong portfolio. Curation
            means selecting projects that work together. One artifact may show
            architecture reasoning, another evidence analysis, another business risk
            communication, and another governance skill.
          </p>

          <div className="mt-6 grid gap-5">
            {artifactSelection.map((item) => (
              <article
                key={item.artifact}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.artifact}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Strongest evidence:</span>{" "}
                  {item.strongestEvidence}
                </p>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Best audience:</span>{" "}
                  {item.bestAudience}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  <span className="font-black">Discussion point:</span>{" "}
                  {item.discussionPoint}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Portfolio Presentation Board"
          subtitle="Synthetic review dashboard for a fictional final presentation."
          metrics={[
            {
              label: "Candidate artifacts",
              value: "7",
              note: "Diagram, incident report, threat model, risk assessment, detection plan, policy, and cloud review",
            },
            {
              label: "Selected showcase",
              value: "4",
              note: "Curated to demonstrate architecture, evidence reasoning, risk decisions, and governance",
            },
            {
              label: "Revision records",
              value: "5",
              note: "Each shows a meaningful before-and-after improvement",
            },
            {
              label: "Audience versions",
              value: "3",
              note: "Technical, general professional, and nontechnical presentation outlines",
            },
          ]}
        />

        <FakeAlertCard
          title="Presentation Draft Overstates Validation"
          severity="Medium"
          time="Synthetic portfolio review"
          source="Northbridge Presentation Review"
          details="A draft slide says the cloud review 'proved the environment was secure,' but the project used only fictional architecture and synthetic evidence."
          recommendation="Revise the claim to explain that the project demonstrated structured cloud security review and identified defensible design findings; do not claim real implementation validation."
        />

        <FakeLogPanel
          title="Synthetic Portfolio Review Notes"
          logs={[
            "[CURATE] selected threat model for architecture-to-risk reasoning",
            "[CURATE] selected incident report for evidence and timeline reasoning",
            "[CURATE] selected risk assessment for business prioritization",
            "[CURATE] selected cloud review for integrated identity, data, logging, and recovery reasoning",
            "[REVISION] removed unsupported claim that synthetic review proved production security",
            "[PRESENTATION] technical version keeps evidence and trust-boundary detail",
            "[PRESENTATION] general version leads with project purpose, decisions, results, and lessons",
            "[SAFETY] final showcase contains only fictional and publication-safe material",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Strong Reflection"
          question="Which reflection statement provides the strongest evidence of learning?"
          evidence={[
            "The student completed a risk assessment and received feedback that two Moderate risks were not equally important.",
            "The student revised priority using dependency concentration, business importance, recovery impact, and evidence confidence.",
            "The final artifact documents the changed rationale.",
            "The student can explain why the revision improved the decision.",
          ]}
          options={[
            "I learned that risk ratings summarize exposure but do not replace contextual prioritization, so I revised the order using dependency and recovery impact",
            "The project was fun and I liked it",
            "I finished every section",
            "The final version is perfect",
          ]}
          bestAnswer={0}
          explanation="The strongest reflection connects concept, feedback, revision, evidence, and professional learning rather than only describing completion or preference."
        />

        <Section eyebrow="Speaking Skills" title="Make the Explanation Clear, Accurate, and Defensible">
          <div className="grid gap-5 md:grid-cols-2">
            {speakingSkills.map((item) => (
              <article
                key={item.skill}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.skill}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Question Handling" title="Prepare to Defend Your Work Without Overclaiming">
          <div className="grid gap-5">
            {questionFramework.map((item) => (
              <article
                key={item.questionType}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.questionType}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.strongApproach}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Audience Adaptation"
          question="A student is presenting the same threat-model project to a technical reviewer and a college admissions reader. What should change?"
          evidence={[
            "The underlying project facts, artifact, and student's contribution remain the same.",
            "The technical reviewer is interested in trust boundaries, assumptions, controls, and evidence.",
            "The college reader is more likely to value initiative, learning, persistence, communication, and project significance.",
            "Both audiences should receive accurate claims and safe fictional examples.",
          ]}
          options={[
            "Keep the facts consistent but change the emphasis, terminology, and depth to match each audience",
            "Change the project result for each audience",
            "Hide all technical reasoning from both audiences",
            "Use real security details to make the technical version more impressive",
          ]}
          bestAnswer={0}
          explanation="Audience adaptation changes presentation strategy, not truth. The same work can be explained at different levels while remaining accurate."
        />

        <Section eyebrow="Revision Evidence" title="Show Growth with Before-and-After Decisions">
          <p className="leading-8">
            Revision records are powerful portfolio evidence because they show that
            feedback and new reasoning changed the work. A reviewer can see not only
            the final answer but the process that made it stronger.
          </p>

          <div className="mt-6 grid gap-5">
            {revisionRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.artifact}</h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Before
                    </p>
                    <p className="mt-2 text-sm leading-7 text-red-50">
                      {item.before}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Change
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.change}
                    </p>
                  </div>
                </div>

                <p className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Lesson:</span> {item.lesson}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Avoid These Portfolio Presentation Anti-Patterns">
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

        <Section eyebrow="Safe Fictional Lab" title="Build a Five-Minute Portfolio Presentation">
          <p className="leading-8">
            Choose one A19 artifact and prepare a short presentation using only the
            fictional content already created in the module.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Choose the artifact",
                detail:
                  "Select one project that demonstrates a skill you want the audience to remember. Write one sentence explaining why it belongs in the showcase.",
              },
              {
                title: "Task 2 — Build the story",
                detail:
                  "Write one or two sentences for context, problem, approach, decision, artifact, result, limitation, and lesson.",
              },
              {
                title: "Task 3 — Select evidence",
                detail:
                  "Choose no more than three visual or written evidence points from the fictional artifact. Explain what each proves.",
              },
              {
                title: "Task 4 — Adapt the audience",
                detail:
                  "Create one technical version and one general version. Keep the facts the same while changing terminology and depth.",
              },
              {
                title: "Task 5 — Prepare questions",
                detail:
                  "Write answers for why you chose the project, what was difficult, what you changed, what remains limited, and what you personally contributed.",
              },
              {
                title: "Task 6 — Safety review",
                detail:
                  "Confirm every screenshot, diagram, record, name, and example is fictional or safely abstracted and contains no private or real security-sensitive information.",
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
          title="Scenario Decision 1 — Reviewer Asks Whether the Project Proves Real-World Security"
          scenario="A portfolio reviewer asks whether the fictional Cloud Security Review proves that a real cloud environment is secure."
          choices={[
            {
              label: "Choice A",
              response:
                "Explain that the artifact demonstrates provider-neutral cloud review reasoning using synthetic evidence and does not claim production validation.",
              outcome:
                "Best professional answer. It accurately describes what the artifact proves and respects its limits.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Say yes because the portfolio looks professional.",
              outcome:
                "Risky. Presentation quality does not turn synthetic design work into real implementation evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Offer to access a real cloud account during the presentation to prove it.",
              outcome:
                "Unsafe. Real security work requires explicit authorization and is outside this student portfolio exercise.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Tool Assistance Question"
          scenario="A reviewer asks whether tools or AI helped with parts of the portfolio."
          choices={[
            {
              label: "Choice A",
              response:
                "Answer accurately, describe the type of assistance, and explain how you reviewed, understood, revised, and took responsibility for the final decisions and artifacts.",
              outcome:
                "Best professional choice. Transparency and demonstrated understanding protect credibility.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Claim you did everything without assistance even if that is not true.",
              outcome:
                "Risky. Misrepresenting authorship or process can undermine trust.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Say the tool made every decision and you do not need to understand the final work.",
              outcome:
                "Risky. A portfolio should demonstrate your own understanding and ability to defend the work.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Present the Same Project Three Ways">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "90-second overview",
                detail:
                  "Explain purpose, your role, one major decision, result, and lesson with almost no jargon.",
              },
              {
                title: "Five-minute technical review",
                detail:
                  "Add architecture, evidence, tradeoffs, confidence, validation, limitations, and one meaningful revision.",
              },
              {
                title: "Written application paragraph",
                detail:
                  "Focus on initiative, growth, persistence, project ownership, impact, and why the work matters to your future goals.",
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
          title="Portfolio Reflection and Presentation Checklist"
          items={[
            "I selected artifacts intentionally instead of showing everything.",
            "I can explain what each selected artifact proves and what it does not prove.",
            "My project story includes context, problem, approach, decision, artifact, result, limitation, and lesson.",
            "I can adapt technical depth to different audiences without changing the underlying facts.",
            "I use a small number of strong evidence examples instead of reading entire artifacts aloud.",
            "I can explain at least one meaningful revision and what I learned from it.",
            "I can describe my personal contribution accurately.",
            "I can discuss tool or AI assistance transparently and still defend the final reasoning myself.",
            "I avoid unsupported claims of mastery, perfection, or real-world validation.",
            "I can answer questions about tradeoffs, limitations, uncertainty, and next steps.",
            "My presentation uses only fictional, synthetic, abstracted, or otherwise publication-safe evidence.",
            "I have removed real credentials, private records, internal architecture, confidential findings, and sensitive identifiers.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.9 Knowledge Check">
          <MiniQuiz
            title="A19.9 Mini Quiz: Portfolio Reflection and Presentation"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Reflection and Presentation Package"
          prompt="Create a final A19 Reflection and Presentation Package. Select three to five portfolio artifacts, explain why each was chosen, identify the skill each artifact proves, document at least three meaningful revisions, write a five-minute presentation outline for one project, create a shorter nontechnical version, prepare answers to seven common reviewer questions, include a personal-contribution statement, identify limitations and next steps, and finish with a publication-safety check."
          tips={[
            "Choose artifacts that demonstrate different strengths instead of repeating the same kind of evidence.",
            "Keep facts consistent across audiences while adjusting terminology and depth.",
            "Use specific revisions and decisions as evidence of growth.",
            "Be accurate about your own contribution and any assistance from tools, peers, teachers, or AI.",
            "State clearly what fictional or synthetic artifacts cannot prove about real systems.",
            "Use only safe portfolio material with no real credentials, private records, confidential findings, or sensitive internal architecture.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.10?">
          <p className="leading-8">
            A19.10 is the Portfolio Review Lab. Before continuing, make sure you can
            evaluate the entire portfolio as a reviewer would: quality, clarity,
            consistency, evidence, ethics, audience fit, revision, artifact
            selection, and professional presentation.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain what strong professional reflection contains.",
              "I can adapt one project to technical and nontechnical audiences without changing the facts.",
              "I can tell a clear project story instead of reading the artifact word for word.",
              "I can discuss my contribution, tools, revisions, limitations, and next steps accurately.",
              "I can choose a small set of portfolio artifacts that demonstrate different skills.",
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

        <Section eyebrow="Portfolio Build Guide" title="Make the Presentation Package Easy to Reuse">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Create a master artifact list",
                detail:
                  "Record title, skill shown, audience fit, strongest evidence, revision status, and publication-safety status for each project.",
              },
              {
                title: "Keep one short project summary",
                detail:
                  "A two- or three-sentence summary makes it easier to reuse the project in applications, interviews, websites, and presentations.",
              },
              {
                title: "Save revision evidence",
                detail:
                  "Keep before-and-after notes so you can explain how feedback or new reasoning improved the work.",
              },
              {
                title: "Prepare multiple speaking lengths",
                detail:
                  "A 30-second summary, 90-second overview, and five-minute explanation let you adapt quickly to different situations.",
              },
              {
                title: "Maintain a question bank",
                detail:
                  "Practice answers about purpose, difficulty, contribution, evidence, limitations, revision, tools, and future improvements.",
              },
              {
                title: "Label fictional content clearly",
                detail:
                  "Make it obvious that synthetic organizations, logs, alerts, identities, and diagrams are educational examples.",
              },
              {
                title: "Review claims for accuracy",
                detail:
                  "Replace statements such as 'proved secure' with precise descriptions of what the artifact actually demonstrates.",
              },
              {
                title: "Run a final safety check",
                detail:
                  "Remove real names, account identifiers, credentials, private records, internal network details, and unresolved real security findings.",
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
            Present skill without exposing real security-sensitive information
          </h2>
          <p className="mt-3 leading-7">
            Use fictional Northbridge projects, synthetic evidence, abstracted
            diagrams, and publication-safe examples only. Do not include or display
            real credentials, private records, confidential incident details,
            internal production architecture, security weaknesses, access tokens,
            account identifiers, or information obtained without authorization.
            Presentation should demonstrate reasoning, learning, communication,
            revision, and ethical judgment.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.9 Portfolio Reflection and Presentation Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a structured way to curate, reflect on, explain, and
            present cybersecurity portfolio work accurately. Next, A19.10 reviews
            the entire A19 portfolio as one professional package.
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