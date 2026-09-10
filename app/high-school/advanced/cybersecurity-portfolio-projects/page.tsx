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
const previousModulePath = "/high-school/advanced/advanced-defensive-labs";
const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";

const lessons = [
  {
    number: "A19.1",
    title: "What Makes a Strong Cyber Portfolio",
    href: `${modulePath}/what-makes-a-strong-cyber-portfolio`,
    focus:
      "Learn how a cybersecurity portfolio demonstrates reasoning, evidence, communication, ethics, and improvement rather than simply collecting finished files.",
    project:
      "Review a fictional set of portfolio artifacts and identify which ones clearly show the problem, evidence, decision, limitations, and professional communication.",
    artifact: "Cyber Portfolio Quality Rubric",
  },
  {
    number: "A19.2",
    title: "Security Diagram Project",
    href: `${modulePath}/security-diagram-project`,
    focus:
      "Turn secure-architecture ideas into a readable defensive diagram that communicates systems, trust boundaries, major controls, data flows, dependencies, and assumptions.",
    project:
      "Create a fictional security architecture diagram with concise design notes explaining the purpose of each major defensive choice.",
    artifact: "Security Architecture Diagram and Design Notes",
  },
  {
    number: "A19.3",
    title: "Incident Report Project",
    href: `${modulePath}/incident-report-project`,
    focus:
      "Create a professional incident report that separates confirmed facts, hypotheses, timeline evidence, impact, decisions, unresolved questions, and lessons learned.",
    project:
      "Convert a synthetic Northbridge case package into a concise defensive incident report without inventing facts or overstating root cause.",
    artifact: "Defensive Incident Report",
  },
  {
    number: "A19.4",
    title: "Threat Model Project",
    href: `${modulePath}/threat-model-project`,
    focus:
      "Document assets, trust boundaries, plausible threats, assumptions, existing controls, defensive mitigations, and residual risk in a portfolio-ready threat model.",
    project:
      "Build a fictional threat model that communicates why each identified risk matters and how defensive design choices reduce it.",
    artifact: "Portfolio Threat Model",
  },
  {
    number: "A19.5",
    title: "Risk Assessment Project",
    href: `${modulePath}/risk-assessment-project`,
    focus:
      "Translate technical and operational observations into clear risk statements, likelihood, impact, control effectiveness, treatment, ownership, and review priorities.",
    project:
      "Create a fictional assessment that shows the evidence behind each rating and distinguishes inherent risk from residual risk.",
    artifact: "Cybersecurity Risk Assessment",
  },
  {
    number: "A19.6",
    title: "Detection Plan Project",
    href: `${modulePath}/detection-plan-project`,
    focus:
      "Design a defensive detection plan that explains the behavior or condition to observe, required evidence, context, analyst workflow, validation, and quality measures.",
    project:
      "Create a provider-neutral detection plan from synthetic evidence without teaching bypass, evasion, or offensive testing.",
    artifact: "Defensive Detection Plan",
  },
  {
    number: "A19.7",
    title: "Security Policy Draft Project",
    href: `${modulePath}/security-policy-draft-project`,
    focus:
      "Write a policy that turns security goals into clear expectations, scope, responsibilities, exceptions, review requirements, and practical governance language.",
    project:
      "Draft a fictional security policy that is specific enough to guide decisions without becoming a technical procedure or unrealistic rule list.",
    artifact: "Security Policy Draft",
  },
  {
    number: "A19.8",
    title: "Cloud Security Review Project",
    href: `${modulePath}/cloud-security-review-project`,
    focus:
      "Produce a concise cloud security review covering shared responsibility, identity, storage, network boundaries, logging, backup, governance, and evidence confidence.",
    project:
      "Review a fictional cloud environment and turn the supplied evidence into prioritized findings, owners, recommendations, and validation needs.",
    artifact: "Cloud Security Review Report",
  },
  {
    number: "A19.9",
    title: "Portfolio Reflection and Presentation",
    href: `${modulePath}/portfolio-reflection-and-presentation`,
    focus:
      "Learn how to explain what you built, why you made specific decisions, what changed during revision, what remains limited, and what the work demonstrates about your skills.",
    project:
      "Prepare a short professional walkthrough of selected fictional portfolio artifacts for a teacher, interviewer, reviewer, or admissions audience.",
    artifact: "Portfolio Reflection and Presentation Outline",
  },
  {
    number: "A19.10",
    title: "Portfolio Review Lab",
    href: `${modulePath}/portfolio-review-lab`,
    focus:
      "Review the complete A19 collection for clarity, defensive reasoning, evidence quality, consistency, safety, presentation, and truthful representation of your work.",
    project:
      "Use a final review rubric to revise selected artifacts and assemble a coherent Advanced Cybersecurity Portfolio Review Pack.",
    artifact: "Advanced Cybersecurity Portfolio Review Pack",
  },
];

const outcomes = [
  "Explain what makes a cybersecurity portfolio credible, useful, ethical, and professionally readable.",
  "Turn defensive cybersecurity reasoning into diagrams, reports, assessments, plans, policies, and review documents.",
  "Show the evidence behind decisions while clearly separating fact, interpretation, assumption, uncertainty, and recommendation.",
  "Adapt technical depth and presentation to different audiences without exaggerating skill, certainty, or real-world access.",
  "Review and revise artifacts for clarity, traceability, visual consistency, defensible reasoning, and school-safe boundaries.",
  "Assemble an Advanced cybersecurity portfolio that demonstrates how you think, not only what files you produced.",
];

const qualityDimensions = [
  {
    title: "Purpose",
    meaning:
      "A reviewer should understand the problem or question the artifact addresses and why the work matters.",
    weak:
      "A file appears with no context beyond its title.",
    strong:
      "The artifact states its scope, intended audience, scenario, and decision goal.",
  },
  {
    title: "Evidence",
    meaning:
      "Claims should connect to supplied fictional records, stated assumptions, design requirements, or clearly identified reasoning.",
    weak:
      "The report makes confident claims without showing what supports them.",
    strong:
      "Important conclusions identify the evidence, limits, and confidence behind them.",
  },
  {
    title: "Reasoning",
    meaning:
      "The artifact should show how evidence became a finding, recommendation, design choice, or risk decision.",
    weak:
      "The document jumps from observations directly to a solution.",
    strong:
      "The reader can follow the decision logic and understand plausible alternatives or tradeoffs.",
  },
  {
    title: "Communication",
    meaning:
      "Professional work uses clear structure, readable visuals, concise labels, useful headings, and audience-appropriate language.",
    weak:
      "Dense jargon or raw data makes the important message difficult to find.",
    strong:
      "The artifact leads the reader from context to evidence, decision, and next action without unnecessary detail.",
  },
  {
    title: "Boundaries",
    meaning:
      "A strong student portfolio states that examples are fictional or authorized and does not pretend that simulated work came from real systems.",
    weak:
      "The artifact implies access, authority, data, or experience the student did not actually have.",
    strong:
      "The work honestly describes the synthetic scenario, learning environment, personal contribution, and limitations.",
  },
  {
    title: "Revision",
    meaning:
      "Professional quality usually comes from review and improvement rather than a perfect first draft.",
    weak:
      "The artifact is treated as finished even when evidence, wording, or presentation is unclear.",
    strong:
      "The student records meaningful changes, explains why they improved the work, and preserves remaining limitations.",
  },
];

const portfolioProcess = [
  {
    phase: "Define the artifact",
    detail:
      "Clarify the scenario, audience, purpose, scope, inputs, and expected decision before designing the final document or visual.",
  },
  {
    phase: "Build from evidence",
    detail:
      "Use fictional records, requirements, diagrams, notes, and prior lesson concepts as evidence. Mark assumptions and unknowns instead of silently filling gaps.",
  },
  {
    phase: "Explain the reasoning",
    detail:
      "Show why the evidence supports the finding, recommendation, design choice, policy statement, or risk rating.",
  },
  {
    phase: "Edit for the audience",
    detail:
      "Remove unnecessary detail, define important terms, improve labels, and make the main message easy to find for the intended reviewer.",
  },
  {
    phase: "Review and revise",
    detail:
      "Check technical accuracy, safety, clarity, evidence traceability, visual consistency, limitations, and whether the artifact honestly represents your work.",
  },
];

const audiences = [
  {
    audience: "Teacher or mentor",
    wants:
      "Evidence that you understand the concept, can explain decisions, and can improve work after feedback.",
  },
  {
    audience: "Admissions or scholarship reviewer",
    wants:
      "A clear example of sustained learning, initiative, communication, reflection, and responsible technical interest.",
  },
  {
    audience: "Internship interviewer",
    wants:
      "A concise explanation of the problem, your role, evidence, decisions, tradeoffs, limitations, and what you learned.",
  },
  {
    audience: "Technical reviewer",
    wants:
      "Enough detail to understand assumptions, architecture, evidence, reasoning, controls, validation, and remaining uncertainty.",
  },
  {
    audience: "Manager or program lead",
    wants:
      "The operational meaning, priority, ownership, risk, dependencies, recommendation, and next checkpoint.",
  },
  {
    audience: "Executive audience",
    wants:
      "The material business meaning, major risk or decision, confidence, resource implication, and next step without a raw technical data dump.",
  },
];

const reviewQuestions = [
  "Can a reader understand the scenario and purpose without asking me what the artifact is about?",
  "Does every important conclusion have evidence, reasoning, or a clearly stated assumption behind it?",
  "Have I separated what the fictional evidence proves from what I inferred or recommended?",
  "Is the technical depth appropriate for the intended audience?",
  "Are diagrams, tables, labels, headings, and summaries readable without unnecessary decoration?",
  "Have I explained limitations, uncertainty, and what I would validate next?",
  "Does the work honestly describe my contribution and avoid implying real access or authority I did not have?",
  "Can I explain the artifact aloud without memorizing a script or relying on jargon?",
];

const dashboardMetrics = [
  {
    label: "Portfolio projects",
    value: "10",
    note: "Quality, diagram, incident, threat model, risk, detection, policy, cloud, presentation, and final review",
  },
  {
    label: "Real systems required",
    value: "0",
    note: "Every artifact can be built from fictional, synthetic, or authorized classroom evidence",
  },
  {
    label: "Primary goal",
    value: "Show reasoning",
    note: "A strong portfolio demonstrates how evidence became a defensible decision",
  },
  {
    label: "Final collection",
    value: "1 review pack",
    note: "Advanced Cybersecurity Portfolio Review Pack",
  },
];

const logs = [
  "[PORTFOLIO] artifact=A19.2 type=SECURITY_DIAGRAM context=DEFINED evidence=FICTIONAL status=READY_FOR_REVIEW",
  "[PORTFOLIO] artifact=A19.3 type=INCIDENT_REPORT facts=SEPARATED hypotheses=LABELED confidence=BOUNDED",
  "[PORTFOLIO] artifact=A19.4 type=THREAT_MODEL assets=DOCUMENTED trust_boundaries=VISIBLE assumptions=RECORDED",
  "[PORTFOLIO] artifact=A19.5 type=RISK_ASSESSMENT inherent=RECORDED residual=RECORDED owner=ASSIGNED",
  "[PORTFOLIO] artifact=A19.6 type=DETECTION_PLAN bypass_guidance=NONE defensive_validation=DOCUMENTED",
  "[PORTFOLIO] artifact=A19.10 type=REVIEW_PACK audience=DEFINED limitations=VISIBLE revision=COMPLETE",
];

const checklistItems = [
  "I will use fictional, synthetic, public classroom-safe, or explicitly authorized material only.",
  "I will state the purpose, audience, scenario, and scope of each portfolio artifact.",
  "I will separate evidence, interpretation, assumptions, uncertainty, and recommendations.",
  "I will explain why I made important security decisions instead of presenting unexplained conclusions.",
  "I will keep diagrams, tables, headings, labels, and summaries readable and consistent.",
  "I will describe my own contribution honestly and will not imply access, credentials, employment, or authority I did not have.",
  "I will remove private information, real credentials, real internal records, and unsafe technical details from portfolio work.",
  "I will revise artifacts after review rather than treating the first draft as automatically portfolio-ready.",
  "I will be prepared to explain limitations and what I would validate next in a real authorized environment.",
  "I will choose quality and clarity over simply collecting the largest possible number of files.",
];

const takeaways = [
  "A cybersecurity portfolio is evidence of thinking, communication, and responsible technical judgment—not merely a folder of files.",
  "Strong artifacts explain the problem, evidence, reasoning, decision, limitations, and next step.",
  "Portfolio work should be truthful about what was simulated, what was fictional, what you personally created, and what remains uncertain.",
  "Different audiences need different levels of technical depth, but the underlying facts should remain consistent.",
  "Diagrams, incident reports, threat models, risk assessments, detection plans, policies, and cloud reviews each communicate a different professional skill.",
  "Revision is part of the artifact: clearer evidence, better structure, and more precise language improve credibility.",
  "Defensive portfolio examples do not require access to real organizations, private data, production systems, or security tools.",
  "A reviewer should be able to trace major conclusions back to evidence or clearly stated assumptions.",
  "The final A19 review should make the portfolio easier to understand, explain, and defend in a school, application, or interview setting.",
  "The A19 module test will contain 25 questions covering artifact quality, clarity, defensive reasoning, documentation, communication, and professional presentation.",
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

export default function CybersecurityPortfolioProjectsHomepage() {
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
              Module A19
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            A19 — Cybersecurity Portfolio Projects
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Turn Defensive Cybersecurity Knowledge Into Work You Can Explain
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A19 focuses on how to turn the skills from the Advanced track into
            portfolio-ready defensive artifacts. You will build diagrams,
            reports, threat models, risk assessments, detection plans, policy
            drafts, cloud reviews, reflections, and a final review pack.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The goal is not to make work look more impressive than it is. A
            strong cybersecurity portfolio is credible because it clearly shows
            the scenario, evidence, reasoning, decisions, limitations, and what
            you personally learned or created.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A19.1
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
              A19 Module Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A19 Entry Readiness"
          items={[
            "I have completed or reviewed the major defensive concepts from earlier Advanced modules.",
            "I understand that portfolio work should demonstrate reasoning and communication, not only finished files.",
            "I can keep all examples fictional, synthetic, public classroom-safe, or explicitly authorized.",
            "I am ready to revise my work and explain both strengths and limitations honestly.",
          ]}
        />

        <Section
          eyebrow="Module Mission"
          title="A Portfolio Should Show How You Think"
        >
          <p className="leading-8">
            A security diagram, incident report, threat model, or risk
            assessment becomes valuable when another person can understand the
            decision behind it. A polished file with unexplained conclusions is
            weaker than a simpler artifact that clearly connects evidence to
            reasoning.
          </p>

          <p className="mt-4 leading-8">
            That means A19 is partly about cybersecurity and partly about
            professional communication. You will practice deciding what belongs
            in an artifact, what can be omitted, how to label uncertainty, how
            to explain assumptions, and how to show revision without pretending
            the work came from a real incident or production environment.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Portfolio quality = clear purpose + defensible evidence + visible reasoning + honest boundaries + readable communication.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Module Outcomes"
          title="Six Capabilities You Should Leave With"
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
          eyebrow="Portfolio Fundamentals"
          title="What Makes an Artifact Strong"
        >
          <p className="leading-8">
            Portfolio quality is not one score. Different artifacts serve
            different purposes, but strong work usually shares several
            qualities. These dimensions will appear throughout A19 because they
            help students review very different projects without forcing every
            project into the same template.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {qualityDimensions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.meaning}
                </p>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">
                      Weak signal
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                      Strong signal
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Project Workflow"
          title="A Practical Portfolio-Building Process"
        >
          <p className="leading-8">
            The process below is a useful orientation for the module, not a rule
            that every artifact must look identical. A diagram may need visual
            iteration, while an incident report may need timeline review and a
            policy draft may need governance language. Use the structure that
            best fits the project.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {portfolioProcess.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-black text-purple-50">{item.phase}</h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Audience Awareness"
          title="The Same Work May Need Different Explanations"
        >
          <p className="leading-8">
            A portfolio artifact does not change its facts just because the
            audience changes. What changes is the amount of context, technical
            depth, terminology, and decision detail the reader needs.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {audiences.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.audience}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Usually needs: {item.wants}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Lesson Map" title="Ten Cybersecurity Portfolio Projects">
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {lesson.number}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {lesson.title}
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Project
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
          eyebrow="Review Questions"
          title="Questions a Strong Portfolio Should Survive"
        >
          <p className="leading-8">
            These questions are useful before calling any artifact finished.
            They are intentionally broader than a visual checklist because a
            polished appearance cannot compensate for unsupported reasoning or
            unclear boundaries.
          </p>

          <div className="mt-6 grid gap-4">
            {reviewQuestions.map((question, index) => (
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
          title="A19 Cybersecurity Portfolio Dashboard"
          subtitle="Fictional project scope, evidence quality, safety posture, and final portfolio review"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Portfolio Claim Needs Evidence"
          severity="Medium"
          time="14:20"
          source="Fictional Portfolio Review Queue"
          details="A draft incident report says a root cause was confirmed, but the attached synthetic evidence only shows correlation between an alert, a change record, and a service interruption."
          recommendation="Revise the claim so confirmed facts, hypotheses, confidence, and missing evidence remain visible. A professional portfolio should not create certainty that the evidence does not support."
        />

        <FakeLogPanel
          title="A19 Fictional Portfolio Review Log"
          logs={logs}
        />

        <Section
          eyebrow="Professional Integrity"
          title="Never Make the Portfolio Look More Real Than the Work Was"
        >
          <p className="leading-8">
            A fictional lab can still demonstrate real reasoning. There is no
            need to disguise a classroom scenario as a production incident,
            claim access to systems you did not use, or include private details
            to make an artifact look professional. Reviewers benefit more from
            honest context and strong reasoning than from exaggerated realism.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Say what the environment was",
                detail:
                  "Label fictional, synthetic, classroom, sandbox, or authorized scenarios accurately.",
              },
              {
                title: "Say what you contributed",
                detail:
                  "Distinguish your analysis, writing, diagramming, decisions, or revisions from supplied prompts and evidence.",
              },
              {
                title: "Say what remains limited",
                detail:
                  "Explain what could not be validated and what additional authorized evidence would be needed.",
              },
              {
                title: "Remove private or risky material",
                detail:
                  "Do not include real credentials, secrets, internal records, personal data, or unsafe technical instructions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A19 Portfolio Quality Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Portfolio Outcome"
          title="Build a Coherent Advanced Cybersecurity Portfolio"
        >
          <p className="leading-8">
            A19 does not require every artifact to look identical. The goal is a
            coherent collection where the reader can recognize consistent
            quality: clear scope, evidence-backed reasoning, professional
            language, readable structure, honest limitations, and safe
            fictional boundaries.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
              Final A19 collection
            </p>
            <p className="mt-2 text-2xl font-black">
              Advanced Cybersecurity Portfolio Review Pack
            </p>
            <p className="mt-3 leading-7">
              The final review pack should help you choose your strongest
              artifacts, explain what each one demonstrates, identify revisions,
              document limitations, and prepare for a school, application, or
              interview conversation about the work.
            </p>
          </div>
        </Section>

        <Section eyebrow="Module Test" title="A19 Ends With a 25-Question Assessment">
          <p className="leading-8">
            The module test will review portfolio artifact quality, clarity,
            evidence-backed defensive reasoning, documentation, communication,
            revision, truthful representation, and professional presentation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/module-test`}
              className="rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              A19 Module Test
            </Link>
            <Link
              href={lessons[0].href}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Start A19.1
            </Link>
          </div>
        </Section>

        <Section eyebrow="Safety Boundary" title="Portfolio Work Remains Defensive and Fictional">
          <p className="leading-8">
            A19 is about presenting defensive learning safely. Projects should
            use fictional, synthetic, classroom-safe, public non-sensitive, or
            explicitly authorized material. Do not use real credentials,
            secrets, private records, internal network details, production logs,
            unauthorized scans, exploitation, bypass techniques, evasion,
            malicious code, or real-world attack activity in portfolio artifacts.
          </p>

          <p className="mt-4 leading-8">
            If an artifact discusses a security action, keep it at the same
            defensive and conceptual level used throughout CyberShield Academy.
            The purpose is to demonstrate judgment, architecture, evidence,
            communication, risk reasoning, governance, and safe decision-making.
          </p>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Begin A19
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Start With What Makes a Strong Cyber Portfolio
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            A19.1 establishes the quality standard for every project that
            follows. You will learn how reviewers judge purpose, evidence,
            reasoning, communication, boundaries, and revision before you begin
            building the individual artifacts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousModulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous Module: A18
            </Link>
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A19.1
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