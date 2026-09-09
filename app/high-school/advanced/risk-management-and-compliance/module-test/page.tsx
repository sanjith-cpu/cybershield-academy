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

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/risk-management-and-compliance`;
const previousLesson = `${modulePath}/risk-decision-lab`;

const quizQuestions = [
  {
    question:
      "Which statement best describes cybersecurity risk?",
    choices: [
      "Uncertainty about how cyber-related events could affect business objectives, services, data, people, or operations.",
      "A list of vulnerabilities with no business context.",
      "Any technical issue found by a security tool.",
      "Only incidents that have already happened.",
    ],
    answer: 0,
    explanation:
      "Cybersecurity risk connects uncertainty, business objectives, plausible events, controls, and consequences.",
  },
  {
    question:
      "Which combination best forms a useful risk scenario?",
    choices: [
      "A valuable service or asset, a plausible event or condition, and a meaningful business consequence.",
      "A severity score and a screenshot.",
      "A control name and a due date.",
      "A policy title and a supplier name.",
    ],
    answer: 0,
    explanation:
      "A strong risk scenario explains what matters, what could happen, and why the consequence matters.",
  },
  {
    question:
      "What is the difference between inherent risk and residual risk?",
    choices: [
      "Inherent risk is considered before controls; residual risk is what remains after controls and treatment are considered.",
      "Inherent risk belongs to suppliers; residual risk belongs to employees.",
      "Inherent risk is always High; residual risk is always Low.",
      "There is no meaningful difference.",
    ],
    answer: 0,
    explanation:
      "Inherent risk describes exposure before controls, while residual risk reflects the remaining risk after safeguards and treatment.",
  },
  {
    question:
      "Who should normally own the business decision about residual risk?",
    choices: [
      "The authorized risk owner.",
      "The control owner automatically.",
      "The evidence owner.",
      "Any analyst who found the issue.",
    ],
    answer: 0,
    explanation:
      "Risk ownership is about accountability for the business consequence and the decision about residual risk.",
  },
  {
    question:
      "What is the strongest purpose of a cybersecurity risk register?",
    choices: [
      "To organize risk scenarios, owners, controls, evidence, treatment, residual risk, review, escalation, and closure decisions.",
      "To store only technical findings.",
      "To replace all project-management tools.",
      "To guarantee that all risks are fixed.",
    ],
    answer: 0,
    explanation:
      "A risk register is a governance and decision tool, not just a list of findings.",
  },
  {
    question:
      "When should a risk normally be Closed?",
    choices: [
      "When objective evidence shows the risk was removed, retired, avoided, or reduced to the approved target state.",
      "When a remediation ticket is created.",
      "When the risk becomes old.",
      "When a project manager says the work is done.",
    ],
    answer: 0,
    explanation:
      "Closure should reflect actual target-state evidence rather than activity completion alone.",
  },
  {
    question:
      "What is design effectiveness?",
    choices: [
      "Whether a control, if operated as intended, would meaningfully reduce the target risk.",
      "Whether the control ran successfully yesterday.",
      "Whether the control is expensive.",
      "Whether the control owner approved the risk.",
    ],
    answer: 0,
    explanation:
      "Design effectiveness asks whether the safeguard is capable of achieving the intended security objective.",
  },
  {
    question:
      "What is operating effectiveness?",
    choices: [
      "Whether the control is actually operating as designed under current evidence.",
      "Whether the control appears in a policy.",
      "Whether the control is preventive.",
      "Whether the control has a dashboard.",
    ],
    answer: 0,
    explanation:
      "Operating effectiveness is about actual performance over time.",
  },
  {
    question:
      "A control is well designed, but current evidence is incomplete across the full intended population. What is the strongest conclusion?",
    choices: [
      "Use Unknown or Partially Effective until stronger operating evidence is available.",
      "Mark Effective because design is strong.",
      "Mark Closed because the control exists.",
      "Assume full coverage.",
    ],
    answer: 0,
    explanation:
      "Decision confidence should match the strength and completeness of current evidence.",
  },
  {
    question:
      "What is a compensating control?",
    choices: [
      "An alternate safeguard used when the preferred control cannot currently be implemented.",
      "A failed control that is ignored.",
      "A control that never needs review.",
      "A control that replaces risk ownership.",
    ],
    answer: 0,
    explanation:
      "Compensating controls reduce the same risk when the preferred safeguard is temporarily unavailable.",
  },
  {
    question:
      "Which statement best describes the relationship between compliance and security?",
    choices: [
      "Compliance supports governance, but security still requires actual risk and control-effectiveness analysis.",
      "They are exactly the same.",
      "A passed audit proves no material cyber risk remains.",
      "Security makes compliance evidence unnecessary.",
    ],
    answer: 0,
    explanation:
      "Compliance and security overlap, but a requirement can be Met while meaningful residual business risk still exists.",
  },
  {
    question:
      "What should a framework or compliance mapping include?",
    choices: [
      "Requirement, applicability, mapped control, owner, evidence, status, exception or gap, and review information.",
      "Only a framework name.",
      "Only a screenshot.",
      "Only a risk score.",
    ],
    answer: 0,
    explanation:
      "A useful mapping should be traceable from requirement to control to evidence and current status.",
  },
  {
    question:
      "What is strongest for an approved exception to a preferred control requirement?",
    choices: [
      "Keep the requirement gap visible and use a Compensating or Partially Met status where appropriate.",
      "Always mark Met.",
      "Delete the requirement.",
      "Mark Not Applicable automatically.",
    ],
    answer: 0,
    explanation:
      "An approved exception governs a gap; it does not make the preferred requirement fully satisfied.",
  },
  {
    question:
      "What makes audit evidence relevant?",
    choices: [
      "It directly supports the requirement, control objective, population, or conclusion being reviewed.",
      "It is visually impressive.",
      "It is stored in an audit folder.",
      "It was created by a senior employee.",
    ],
    answer: 0,
    explanation:
      "Relevant evidence must actually address the claim or control being reviewed.",
  },
  {
    question:
      "What should happen when credible evidence sources contradict each other?",
    choices: [
      "Preserve the contradiction, determine what each source actually proves, and reconcile the difference before claiming certainty.",
      "Delete the weaker-looking source.",
      "Always trust the control owner.",
      "Average the two conclusions.",
    ],
    answer: 0,
    explanation:
      "Conflicting evidence should reduce confidence until the scope and meaning of each source are understood.",
  },
  {
    question:
      "Which statement about evidence freshness is strongest?",
    choices: [
      "Evidence may lose decision value after meaningful changes to systems, owners, controls, data, suppliers, or architecture.",
      "Old evidence is always invalid.",
      "Freshness only matters for technical controls.",
      "Freshness replaces traceability.",
    ],
    answer: 0,
    explanation:
      "Evidence should be refreshed when the context it was meant to prove materially changes.",
  },
  {
    question:
      "What is risk acceptance?",
    choices: [
      "A formal decision by an authorized owner to retain a defined level of residual risk.",
      "Deleting the risk from the register.",
      "Ignoring remediation because it is inconvenient.",
      "Automatically closing an exception.",
    ],
    answer: 0,
    explanation:
      "Acceptance is an explicit, evidence-based, governed decision about residual risk.",
  },
  {
    question:
      "What should happen when an exception reaches its expiry date?",
    choices: [
      "Reassess, reapprove through governance, remediate, or block continued reliance.",
      "Keep using it indefinitely.",
      "Mark the underlying risk Closed.",
      "Delete the old evidence.",
    ],
    answer: 0,
    explanation:
      "Expiry means the prior governance authority is no longer current.",
  },
  {
    question:
      "Which statement about Accepted Risk is strongest?",
    choices: [
      "It remains visible, owned, evidenced, reviewed, and subject to change triggers.",
      "It disappears from the risk register.",
      "It never needs reevaluation.",
      "It means the underlying risk no longer exists.",
    ],
    answer: 0,
    explanation:
      "Acceptance governs residual risk; it does not eliminate the risk.",
  },
  {
    question:
      "What makes a supplier critical?",
    choices: [
      "High business dependency, sensitive data, privileged access, recovery dependency, low substitutability, or concentration.",
      "The supplier is expensive.",
      "The supplier has many employees.",
      "The supplier uses cloud infrastructure.",
    ],
    answer: 0,
    explanation:
      "Supplier criticality should reflect business and security dependency rather than brand or cost alone.",
  },
  {
    question:
      "What is concentration risk?",
    choices: [
      "Risk created when many important services depend on one supplier, platform, technology, location, or operational channel.",
      "A supplier audit finding.",
      "A password-policy problem.",
      "A contract renewal date.",
    ],
    answer: 0,
    explanation:
      "Concentration risk is about shared dependency and lack of practical alternatives.",
  },
  {
    question:
      "Which statement about supplier assurance is strongest?",
    choices: [
      "A supplier can have strong controls while the organization still has major dependency and continuity risk.",
      "Strong assurance eliminates third-party risk.",
      "Assurance evidence replaces continuity planning.",
      "Assurance means the supplier owns all consequences.",
    ],
    answer: 0,
    explanation:
      "Supplier control quality and the organization's business dependency are different risk dimensions.",
  },
  {
    question:
      "What should a leadership risk brief usually lead with?",
    choices: [
      "The business consequence and decision needed.",
      "Raw logs.",
      "Technical acronyms.",
      "A control inventory.",
    ],
    answer: 0,
    explanation:
      "Leadership communication should begin with the business meaning of the risk and the action required.",
  },
  {
    question:
      "What should a leadership recommendation include besides the preferred action?",
    choices: [
      "Evidence confidence, owner, timeline, residual risk, options or tradeoffs, and review triggers.",
      "Only the severity score.",
      "Only the technical cause.",
      "Only the budget estimate.",
    ],
    answer: 0,
    explanation:
      "A recommendation becomes decision-ready when evidence, accountability, timing, and residual risk are clear.",
  },
  {
    question:
      "Which is the strongest basis for an enterprise risk decision?",
    choices: [
      "Integrated business context, risk scenario, ownership, control effectiveness, compliance status, evidence confidence, supplier dependency, residual risk, treatment options, and decision authority.",
      "A single risk score.",
      "One technical finding.",
      "One compliance requirement.",
    ],
    answer: 0,
    explanation:
      "Enterprise risk decisions require business, technical, governance, evidence, and ownership context together.",
  },
];

const coverage = [
  {
    area: "A15.1 — Risk Management in Cybersecurity",
    skills:
      "Risk vocabulary, business context, inherent vs. residual risk, treatment options, ownership, evidence, uncertainty.",
    questions:
      "1–4",
  },
  {
    area: "A15.2 — Assets, Threats, Impact, and Likelihood",
    skills:
      "Risk scenario construction, impact, likelihood, uncertainty, business dependencies.",
    questions:
      "1–3",
  },
  {
    area: "A15.3 — Risk Registers and Ownership",
    skills:
      "Risk register purpose, ownership, status, treatment, milestones, review, closure.",
    questions:
      "4–6",
  },
  {
    area: "A15.4 — Security Controls and Control Testing",
    skills:
      "Control purpose, design effectiveness, operating effectiveness, compensating controls, evidence.",
    questions:
      "7–10",
  },
  {
    area: "A15.5 — Compliance Framework Concepts",
    skills:
      "Frameworks, applicability, mappings, compliance vs. security, exceptions.",
    questions:
      "11–13",
  },
  {
    area: "A15.6 — Audit Evidence and Documentation",
    skills:
      "Relevance, freshness, contradiction, sufficiency, traceability.",
    questions:
      "14–16",
  },
  {
    area: "A15.7 — Risk Acceptance and Exceptions",
    skills:
      "Acceptance, expiry, compensating controls, bounded governance.",
    questions:
      "17–19",
  },
  {
    area: "A15.8 — Third-Party Risk Concepts",
    skills:
      "Criticality, concentration, assurance, continuity, business dependency.",
    questions:
      "20–22",
  },
  {
    area: "A15.9 — Communicating Risk to Leaders",
    skills:
      "Business translation, executive briefs, recommendations, evidence confidence.",
    questions:
      "23–24",
  },
  {
    area: "A15.10 — Risk Decision Lab",
    skills:
      "Integrated enterprise risk decisions across controls, evidence, governance, suppliers, and ownership.",
    questions:
      "25",
  },
];

const performanceGuide = [
  {
    range: "23–25 correct",
    label: "Advanced Ready",
    meaning:
      "You can integrate risk, controls, evidence, compliance, ownership, suppliers, exceptions, and leadership decisions with strong consistency.",
    action:
      "Proceed to the next Advanced module after reviewing any missed questions.",
  },
  {
    range: "20–22 correct",
    label: "Strong",
    meaning:
      "You understand the module well, with a few areas that need targeted review.",
    action:
      "Review the lesson areas connected to missed questions, then retry the test.",
  },
  {
    range: "16–19 correct",
    label: "Developing",
    meaning:
      "You understand the main concepts but are not yet applying them consistently across enterprise scenarios.",
    action:
      "Use the targeted review map below and revisit the related portfolio artifacts.",
  },
  {
    range: "0–15 correct",
    label: "Rebuild the Foundations",
    meaning:
      "Several A15 concepts need stronger understanding before moving forward.",
    action:
      "Revisit A15.1–A15.10 in order, especially risk ownership, control effectiveness, evidence, exceptions, and decision states.",
  },
];

const reviewMap = [
  {
    misses: "Questions 1–3",
    revisit:
      "A15.1 and A15.2",
    focus:
      "Risk scenarios, business context, inherent/residual risk, impact, likelihood, uncertainty.",
  },
  {
    misses: "Questions 4–6",
    revisit:
      "A15.3",
    focus:
      "Risk register purpose, owner roles, decision states, review triggers, closure evidence.",
  },
  {
    misses: "Questions 7–10",
    revisit:
      "A15.4",
    focus:
      "Design effectiveness, operating effectiveness, control coverage, compensating controls, evidence.",
  },
  {
    misses: "Questions 11–13",
    revisit:
      "A15.5",
    focus:
      "Compliance vs. security, applicability, mapping, exceptions, Partially Met/Compensating states.",
  },
  {
    misses: "Questions 14–16",
    revisit:
      "A15.6",
    focus:
      "Evidence relevance, sufficiency, freshness, contradiction, traceability, workpapers.",
  },
  {
    misses: "Questions 17–19",
    revisit:
      "A15.7",
    focus:
      "Risk acceptance, expiry, approval authority, bounded exceptions, residual risk.",
  },
  {
    misses: "Questions 20–22",
    revisit:
      "A15.8",
    focus:
      "Supplier criticality, concentration risk, assurance, continuity, exit planning.",
  },
  {
    misses: "Questions 23–24",
    revisit:
      "A15.9",
    focus:
      "Leadership risk briefs, business-language translation, recommendations, evidence confidence.",
  },
  {
    misses: "Question 25",
    revisit:
      "A15.10",
    focus:
      "Integrated enterprise risk decisions and how all A15 artifacts connect.",
  },
];

const checklistItems = [
  "I can define cybersecurity risk in business terms.",
  "I can write a strong risk scenario.",
  "I can distinguish inherent and residual risk.",
  "I can distinguish risk owner from control owner.",
  "I can explain what a risk register is for.",
  "I can define evidence-based closure.",
  "I can distinguish design effectiveness from operating effectiveness.",
  "I can explain when a compensating control is appropriate.",
  "I can distinguish compliance from security.",
  "I can explain applicability and control mapping.",
  "I can judge evidence relevance, freshness, and contradiction.",
  "I can explain risk acceptance and exception expiry.",
  "I can identify supplier criticality and concentration risk.",
  "I can translate technical risk into business language.",
  "I can explain evidence confidence to leadership.",
  "I can compare realistic treatment options.",
  "I can choose Treat, Monitor, Conditional, Accepted Risk, Blocked, or Closed based on current evidence.",
  "I can justify priority using more than a single score.",
  "I can preserve uncertainty instead of hiding it.",
  "I can produce a leadership recommendation with owner, timeline, residual risk, and review triggers.",
];

const takeaways = [
  "Cybersecurity risk is about uncertainty around business objectives, not technical severity alone.",
  "Risk ownership, control ownership, remediation ownership, and evidence ownership are different responsibilities.",
  "Risk registers should support decisions, treatment, review, escalation, and closure.",
  "Control design and control operation must be evaluated separately.",
  "Compliance status does not automatically determine residual business risk.",
  "Evidence should be relevant, sufficient, current, attributable, traceable, and honest about limitations.",
  "Risk acceptance and exceptions require authority, scope, evidence, review, and expiry or triggers.",
  "Supplier assurance and supplier concentration are different risk dimensions.",
  "Leadership communication should explain business consequence, confidence, options, recommendation, ownership, and residual risk.",
  "Enterprise risk decisions are strongest when business, technical, governance, supplier, evidence, and ownership context are integrated.",
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
        A15 Module Home
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Advanced Track
      </Link>
    </div>
  );
}

export default function A15ModuleTestPage() {
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
              A15 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            A15 — Risk Management and Compliance
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This assessment checks whether you can reason across the entire A15
            module: risk context, analysis, ownership, registers, controls,
            compliance, evidence, exceptions, suppliers, leadership
            communication, and enterprise risk decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The questions use fictional, defensive scenarios only. Answers stay
            hidden until you interact with the quiz component.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A15 Module Test Readiness"
          items={[
            "I completed A15.1 through A15.10.",
            "I can explain risk, controls, evidence, ownership, compliance, exceptions, suppliers, and leadership decisions.",
            "I understand that compliance does not equal zero risk.",
            "I can preserve uncertainty instead of forcing a confident answer.",
            "I am ready to answer 25 questions covering the full module.",
          ]}
        />

        <Section
          eyebrow="Assessment Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-5">
            {coverage.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.area}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.skills}
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    Questions {item.questions}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Module Test"
          title="25 Questions — Risk Management and Compliance"
        >
          <p className="mb-6 leading-8 text-slate-300">
            Read each scenario carefully. Many questions are designed to test
            whether you can distinguish technical activity from business risk,
            control presence from control effectiveness, compliance from
            security, and historical approval from current governance.
          </p>

          <MiniQuiz
            title="A15 Module Test: Risk Management and Compliance"
            questions={quizQuestions}
          />
        </Section>

        <Section
          eyebrow="Performance Guide"
          title="How to Interpret Your Result"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {performanceGuide.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-100">
                    {item.range}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.label}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-blue-50">
                  {item.meaning}
                </p>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Next action: {item.action}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review Map"
          title="Use Missed Questions to Find the Right Lesson"
        >
          <div className="grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.misses}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[180px_180px_1fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Missed
                    </p>
                    <p className="mt-2 font-black text-purple-50">
                      {item.misses}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Revisit
                    </p>
                    <p className="mt-2 font-black text-purple-50">
                      {item.revisit}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.focus}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Portfolio Connection"
          title="What A15 Should Leave in Your Portfolio"
        >
          <p className="leading-8">
            Your final A15 portfolio outcome is the{" "}
            <strong className="text-white">
              Risk Register and Leadership Recommendation
            </strong>
            , assembled through the Enterprise Risk Decision Package in A15.10.
            It should connect business context, risk records, controls,
            compliance mappings, evidence, exceptions, third-party risk,
            leadership briefs, and final decision records.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Cyber Risk Context Map",
              "Risk Analysis Worksheet",
              "Cybersecurity Risk Register",
              "Control Effectiveness Review",
              "Framework and Control Mapping Register",
              "Audit Evidence Register",
              "Risk Acceptance and Exception Register",
              "Third-Party Risk Review",
              "Leadership Risk Brief",
              "Enterprise Risk Decision Package",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A15 Final Readiness Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A15 remains defensive, fictional, and governance-focused
          </h2>
          <p className="mt-3 leading-7">
            This test does not require scanning, probing, exploitation,
            credential access, bypassing controls, investigating real vendors,
            or collecting confidential organizational evidence. All scenarios,
            systems, suppliers, controls, risks, and decisions are fictional.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A15 — Risk Management and Compliance
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            After completing the test and reviewing any missed concepts, you
            will have finished the A15 learning sequence: ten lessons, ten
            portfolio artifacts, one integrated Enterprise Risk Decision
            Package, and the 25-question module assessment.
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