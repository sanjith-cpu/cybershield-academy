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
const previousLesson = `${modulePath}/forensic-reporting-standards`;
const nextLesson = `${modulePath}/digital-forensics-capstone-lab`;

const objectives = [
  "Explain how fictional forensic investigations stay within authorization, purpose, necessity, proportionality, minimization, privacy, ownership, retention, and disclosure boundaries.",
  "Recognize when a fictional investigation must stop, narrow, escalate, recuse, or request a new decision because scope, evidence category, person, system, purpose, or risk has changed.",
  "Handle fictional sensitive information, unrelated findings, third-party data, conflicts of interest, privileged context, and accidental exposure without turning curiosity into expanded investigation.",
  "Use an ethical decision framework that separates what is technically possible from what is authorized, necessary, proportionate, privacy-aware, reviewable, and appropriate for the approved decision.",
  "Write fictional forensic findings, owner decisions, escalation notes, recusal records, retention decisions, and public-safe portfolio summaries that demonstrate ethical restraint and evidence discipline.",
];

const vocabulary = [
  ["Authorization", "The fictional approval defining who may perform which investigation activity for which purpose and scope."],
  ["Purpose limitation", "Using fictional evidence only for the approved investigation question rather than for unrelated curiosity or secondary goals."],
  ["Necessity", "Whether a fictional evidence category is genuinely needed to answer the approved question."],
  ["Proportionality", "Whether the fictional evidence use, detail, exposure, and investigation scope are reasonable compared with the decision need and risk."],
  ["Minimization", "Using only the fictional evidence, fields, people, systems, and time range necessary for the approved purpose."],
  ["Sensitive information", "Fictional data that deserves additional handling controls because of privacy, confidentiality, personal impact, or governance risk."],
  ["Unrelated finding", "A fictional observation discovered during an approved investigation that does not answer the current scoped question."],
  ["Third-party data", "Fictional information about people, suppliers, partners, customers, or other parties who are not the primary subject of the approved investigation question."],
  ["Conflict of interest", "A fictional situation where a reviewer has a personal, organizational, or decision-making interest that could affect impartiality."],
  ["Recusal", "A fictional decision for a reviewer to step away from part or all of an investigation because impartiality or trust could reasonably be questioned."],
  ["Stop condition", "A predefined fictional trigger requiring the investigation to pause, narrow, escalate, or seek renewed authority."],
  ["Disclosure boundary", "The fictional rule defining which information may be shared, with whom, for which purpose, and at which level of detail."],
];

const ethicalPrinciples = [
  {
    title: "Authorization before action",
    question: "Is this fictional activity clearly covered by current approval?",
    weak: "Assume that because the investigator can see the evidence, they are allowed to use it.",
    strong: "Confirm the approved purpose, evidence category, owner, scope version, and stop conditions before proceeding.",
  },
  {
    title: "Purpose before curiosity",
    question: "Does this fictional evidence help answer the approved question?",
    weak: "Expand because the evidence looks interesting or unusual.",
    strong: "Keep unrelated information outside scope unless a qualified owner creates a separate approved purpose.",
  },
  {
    title: "Necessity before breadth",
    question: "Is this fictional evidence actually needed?",
    weak: "Review everything because more evidence feels safer.",
    strong: "Choose the minimum evidence path that can answer the decision question.",
  },
  {
    title: "Proportionality before detail",
    question: "Is the amount and sensitivity of fictional information appropriate for the decision need?",
    weak: "Use the most detailed evidence available even when a summary would answer the question.",
    strong: "Match evidence detail and exposure to the real fictional decision need.",
  },
  {
    title: "Privacy before convenience",
    question: "Would this fictional step expose unrelated personal or confidential information?",
    weak: "Accept broad exposure because it saves time.",
    strong: "Minimize, segregate, restrict, or stop and escalate when unnecessary sensitive information appears.",
  },
  {
    title: "Impartiality before ownership",
    question: "Could a fictional reviewer’s relationship to the case reasonably affect trust?",
    weak: "Continue because the reviewer believes they can stay objective.",
    strong: "Disclose the conflict and let the appropriate owner decide whether recusal or independent review is needed.",
  },
  {
    title: "Retention before convenience",
    question: "How long should fictional evidence remain available after its approved purpose ends?",
    weak: "Keep everything indefinitely in case it becomes useful later.",
    strong: "Follow purpose-based retention, review, access, archive, and disposition decisions.",
  },
  {
    title: "Disclosure before distribution",
    question: "Which fictional audience needs which information?",
    weak: "Send the full report to everyone involved.",
    strong: "Use need-to-know distribution and audience-specific minimization without changing the underlying facts.",
  },
];

const boundaryMatrix = [
  {
    situation: "New system appears",
    example: "A fictional evidence record references Service T, which is not in the approved scope.",
    currentState: "Out of scope",
    response: "Do not investigate Service T under the current scope. Record the reference and request an owner decision only if it materially affects the approved question.",
    nonProof: "A reference to Service T does not prove Service T is involved in the incident.",
  },
  {
    situation: "Sensitive personal information appears",
    example: "A fictional browser summary unexpectedly contains unrelated personal activity.",
    currentState: "Sensitive / unrelated",
    response: "Stop reviewing that detail, minimize exposure, document the encounter, and notify the fictional privacy owner if required.",
    nonProof: "The unrelated information does not become relevant because it was accidentally visible.",
  },
  {
    situation: "Third-party information appears",
    example: "A fictional supplier record contains information about an unrelated partner organization.",
    currentState: "Third-party / purpose-limited",
    response: "Use only the minimum fields needed for the approved supplier question and exclude unrelated partner detail.",
    nonProof: "Third-party presence does not justify adding that organization to scope.",
  },
  {
    situation: "Possible separate issue appears",
    example: "A fictional evidence item suggests a different policy concern unrelated to the current forensic question.",
    currentState: "Unrelated finding",
    response: "Record the observation at a high level and refer it to the appropriate fictional owner rather than expanding the current investigation.",
    nonProof: "The unrelated finding is not automatically part of the current case conclusion.",
  },
  {
    situation: "Reviewer conflict emerges",
    example: "A fictional reviewer realizes they approved the change now being evaluated.",
    currentState: "Potential conflict",
    response: "Disclose the relationship and ask the investigation owner to decide whether recusal, independent review, or continued limited participation is appropriate.",
    nonProof: "A conflict does not prove misconduct; it is a trust and impartiality risk.",
  },
  {
    situation: "Original purpose changes",
    example: "Leadership asks the fictional team to use the same evidence for employee-performance decisions.",
    currentState: "New purpose",
    response: "Stop using the investigation under the original purpose and require a separate qualified owner decision before any new use.",
    nonProof: "Evidence collected for one purpose does not automatically become appropriate for another.",
  },
];

const decisionFramework = [
  {
    step: "1",
    title: "State the approved question",
    detail: "Write the fictional decision question in one sentence before considering the next evidence step.",
  },
  {
    step: "2",
    title: "Confirm authority",
    detail: "Identify the fictional requesting owner, scope version, evidence categories, time window, and stop conditions.",
  },
  {
    step: "3",
    title: "Test necessity",
    detail: "Ask whether the next fictional evidence item is genuinely needed or merely interesting.",
  },
  {
    step: "4",
    title: "Test proportionality",
    detail: "Compare the amount, sensitivity, and breadth of fictional information with the value of the decision it supports.",
  },
  {
    step: "5",
    title: "Minimize",
    detail: "Use the narrowest fictional system, identity, evidence category, time period, and fields that can answer the question.",
  },
  {
    step: "6",
    title: "Check privacy and third-party impact",
    detail: "Identify whether the next step could expose unrelated personal, confidential, supplier, or partner information.",
  },
  {
    step: "7",
    title: "Check impartiality",
    detail: "Ask whether any fictional reviewer, owner, or decision-maker has a conflict that should be disclosed or independently reviewed.",
  },
  {
    step: "8",
    title: "Apply stop conditions",
    detail: "Pause or escalate when scope, purpose, evidence category, risk, person, system, or authority changes.",
  },
  {
    step: "9",
    title: "Document the decision",
    detail: "Record what was allowed, excluded, minimized, escalated, or deferred and why.",
  },
  {
    step: "10",
    title: "Plan retention and disclosure",
    detail: "Decide who needs the fictional evidence or conclusion, for how long, under which version and access rules.",
  },
];

const ethicalCases = [
  {
    id: "EL-01",
    question: "Can the fictional team review unrelated personal browsing because it is visible in the same summary?",
    authority: "No current purpose",
    necessity: "No",
    privacy: "High sensitivity",
    decision: "Exclude and minimize",
    owner: "Privacy reviewer",
    note: "Accidental visibility does not create investigative relevance.",
  },
  {
    id: "EL-02",
    question: "Can the fictional team add Service T because one record references it?",
    authority: "Not yet",
    necessity: "Conditional",
    privacy: "Moderate",
    decision: "Record reference; seek owner decision only if material",
    owner: "Investigation coordinator",
    note: "A reference alone does not justify scope expansion.",
  },
  {
    id: "EL-03",
    question: "Can a fictional reviewer evaluate a change they personally approved?",
    authority: "Role exists, impartiality concern",
    necessity: "Review needed",
    privacy: "Low",
    decision: "Disclose conflict; consider recusal or independent review",
    owner: "Decision owner",
    note: "Conflict management protects trust even without misconduct.",
  },
  {
    id: "EL-04",
    question: "Can the fictional report be reused for an employee-performance decision?",
    authority: "Different purpose",
    necessity: "Not established",
    privacy: "High",
    decision: "Stop; require separate qualified purpose decision",
    owner: "Governance / privacy owner",
    note: "Purpose limitation prevents silent secondary use.",
  },
  {
    id: "EL-05",
    question: "Can the fictional full technical report be shared with leadership?",
    authority: "Leadership needs conclusion, not all detail",
    necessity: "Full detail not necessary",
    privacy: "Moderate",
    decision: "Provide minimized executive summary",
    owner: "Report owner",
    note: "Audience need determines detail, not status.",
  },
  {
    id: "EL-06",
    question: "Can fictional evidence be retained forever in case another investigation needs it later?",
    authority: "No indefinite purpose",
    necessity: "No",
    privacy: "Increasing over time",
    decision: "Apply retention review and disposition",
    owner: "Records / governance owner",
    note: "Future curiosity is not a retention purpose.",
  },
];

const unrelatedFindingPatterns = [
  {
    situation: "Potential policy concern",
    wrong: "Expand the current forensic case immediately.",
    strong: "Record a minimal fictional referral note and send it to the qualified owner for a separate decision.",
  },
  {
    situation: "Possible personal misconduct",
    wrong: "Search for more evidence while the clue is fresh.",
    strong: "Do not investigate under the current scope; protect privacy and escalate through the appropriate fictional governance route.",
  },
  {
    situation: "Third-party security issue",
    wrong: "Add the third party to the current case and review all available supplier records.",
    strong: "Preserve only the minimum fictional observation necessary for referral and avoid expanding current scope.",
  },
  {
    situation: "Unrelated sensitive data",
    wrong: "Copy it into the case in case it later becomes relevant.",
    strong: "Avoid unnecessary retention, minimize the case record, and document that unrelated sensitive information was excluded.",
  },
  {
    situation: "Potential legal or regulatory issue",
    wrong: "Have the technical team decide legal significance.",
    strong: "Stop technical interpretation at the evidence boundary and refer the question to the qualified fictional legal/governance owner.",
  },
];

const conflictPatterns = [
  {
    conflict: "Reviewer approved the change under review",
    risk: "The review may appear self-protective even if the reviewer acts in good faith.",
    response: "Disclose the prior role and obtain an independent fictional decision about recusal or limited participation.",
  },
  {
    conflict: "Investigator manages the affected service",
    risk: "Operational ownership may create pressure to minimize or redirect findings.",
    response: "Use independent review for material conclusions and keep service-owner input separate from evidence judgment.",
  },
  {
    conflict: "Decision owner is also subject of the finding",
    risk: "The person controlling the outcome may have a direct interest in the result.",
    response: "Escalate governance ownership and avoid unilateral closure by the conflicted fictional decision-maker.",
  },
  {
    conflict: "Reviewer has close relationship with a fictional subject",
    risk: "Actual or perceived bias can reduce trust in the report.",
    response: "Disclose the relationship and document the recusal or independent-review decision.",
  },
];

const disclosureLevels = [
  {
    audience: "Investigation team",
    need: "Evidence-linked detail necessary for the approved fictional forensic question.",
    boundary: "Need-to-know only; unrelated personal or third-party information excluded.",
  },
  {
    audience: "Service owner",
    need: "Service-relevant findings, risk, owner actions, and limitations.",
    boundary: "No unnecessary personal or cross-system detail.",
  },
  {
    audience: "Leadership",
    need: "Conclusion, confidence, material Unknowns, impact, decision, owner, and deadline.",
    boundary: "Executive summary rather than raw evidence.",
  },
  {
    audience: "Privacy / governance",
    need: "Purpose, authority, minimization, sensitive data, third-party impact, retention, and distribution.",
    boundary: "Only technical detail needed to evaluate governance risk.",
  },
  {
    audience: "Public portfolio",
    need: "Invented scenario, ethical reasoning, decision framework, and lessons.",
    boundary: "No real case, system, identity, screenshot, log, message, supplier, or internal detail.",
  },
];

const reportingPatterns = [
  [
    "We found unrelated personal activity, so we investigated it too.",
    "Unrelated fictional personal information appeared during the scoped review; it was excluded from analysis and referred only through the approved privacy/governance process.",
  ],
  [
    "Service T appeared in one record, so we expanded the case.",
    "A fictional record referenced Service T, which remained outside current scope pending a separate owner decision about materiality and authorization.",
  ],
  [
    "The reviewer was objective, so their conflict did not matter.",
    "The fictional reviewer disclosed prior involvement in the change under review, and the decision owner documented whether independent review or recusal was required.",
  ],
  [
    "The evidence was already collected, so leadership can use it for any purpose.",
    "The fictional evidence remains governed by its approved purpose; any materially different use requires a separate qualified purpose and authority decision.",
  ],
  [
    "We kept everything because storage is cheap.",
    "The fictional evidence is retained only for the approved purpose and lifecycle period, with review, access, archive, and disposition ownership documented.",
  ],
  [
    "The full report is more transparent, so everyone should receive it.",
    "Transparency is achieved through accurate conclusions and reviewability, while distribution remains limited to the detail each fictional audience needs.",
  ],
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A8
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function EthicalLimitsInInvestigationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A8
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A8.9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Ethics and Governance
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A8.9 Ethical Limits in Investigations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional fictional forensic investigations remain
            bounded by authorization, purpose, necessity, proportionality,
            minimization, privacy, impartiality, retention, disclosure, and
            stop conditions. Practice recognizing when the ethical answer is to
            narrow, pause, escalate, recuse, refer, or preserve Unknown rather
            than investigate further.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A8: Digital Forensics Concepts"
          lessonTitle="Ethical Limits in Investigations"
          lessonNumber={9}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will treat authorization, purpose, necessity, proportionality, minimization, privacy, and stop conditions as required parts of fictional forensic quality.",
            "I will not expand a fictional investigation simply because new information is technically visible or interesting.",
            "I will keep unrelated personal information, third-party details, real credentials, private messages, and real incident material outside CyberShield exercises.",
            "I will disclose fictional conflicts of interest and recognize when independent review or recusal protects fairness and trust.",
            "I will treat new purposes, systems, identities, evidence categories, or sensitive-data exposure as possible scope-change triggers rather than automatic permission.",
            "I will use only fully invented, pre-supplied evidence and will not access, inspect, monitor, collect, extract, recover, or investigate any real system or person.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Technically Visible Does Not Mean Ethically Available"
        >
          <p className="leading-8">
            A fictional investigator reviews a browser summary for one approved
            Support Console question. The supplied summary unexpectedly includes
            unrelated personal activity. The investigator could read it, but it
            does not answer the approved question.
          </p>

          <p className="mt-4 leading-8">
            The professional decision is not based on technical access. It is
            based on purpose. The unrelated information should be minimized,
            excluded from the case analysis, and handled according to the
            fictional privacy process. Ethical restraint is not a weakness in
            forensic work. It is evidence that the investigation can be trusted.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                “It is already visible, so we may as well review it.”
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional response
              </p>
              <p className="mt-2 leading-7">
                “The information is unrelated to the approved fictional
                question, so it is excluded, minimized, and referred only if a
                qualified owner determines a separate purpose exists.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A8.9"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Why It Matters"
          title="Forensic Quality Includes Knowing When Not to Investigate"
        >
          <p className="leading-8">
            Technical evidence can be highly revealing. That makes ethical
            boundaries especially important. A fictional investigation may
            encounter information about unrelated people, third parties,
            personal activity, confidential business context, or separate
            concerns. Without restraint, a narrow forensic question can become a
            broad surveillance exercise.
          </p>

          <p className="mt-4 leading-8">
            Professional investigators therefore ask not only “Can this evidence
            answer something?” but “Are we authorized to answer this question,
            is the evidence necessary, is the exposure proportionate, and who
            should own the decision?” Sometimes the correct result is not more
            evidence. It is a stop condition, referral, recusal, scope decision,
            or documented Unknown.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Trust", "Ethical restraint makes fictional findings more reviewable and credible."],
              ["Fairness", "Scope and attribution limits reduce unsupported conclusions about people."],
              ["Privacy", "Minimization prevents unrelated fictional personal information from entering the case."],
              ["Governance", "Stop conditions ensure changed purposes and risks receive a new owner decision."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="Eight Ethical Principles for Fictional Investigations"
        >
          <div className="grid gap-5">
            {ethicalPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.question}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak practice
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional practice
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Vocabulary"
          title="Professional Terms for Ethical Investigation Boundaries"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Investigation Ethics Dashboard"
          subtitle="Northbridge A8 ethics exercise — invented values only"
          metrics={[
            {
              label: "Active forensic question",
              value: "1",
              note: "One approved account/session relationship question",
            },
            {
              label: "Scope-change triggers",
              value: "3",
              note: "New service, new purpose, unrelated sensitive information",
            },
            {
              label: "Potential conflicts",
              value: "1",
              note: "Reviewer previously approved a change under review",
            },
            {
              label: "Distribution tiers",
              value: "5",
              note: "Investigation, service, leadership, governance, public",
            },
          ]}
        />

        <SectionCard
          eyebrow="Boundary Matrix"
          title="When the Correct Next Step Is to Stop, Narrow, or Escalate"
        >
          <div className="grid gap-5">
            {boundaryMatrix.map((item) => (
              <article
                key={item.situation}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.situation}
                  </h3>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-100">
                    {item.currentState}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.example}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional response
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.response}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Non-proof statement
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.nonProof}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Scope Boundary Alert"
          severity="High"
          time="Fictional review window"
          source="Supplied fictional evidence"
          details="A supplied record references Service T, which is outside the approved investigation scope."
          recommendation={["Current scope: Account A, Session S, Endpoint D-17, Service S, Workflow W",
            "New reference: Service T",
            "Current authority for Service T: none",
            "Current evidence of materiality: one reference only",
            "Required response: record reference, do not investigate Service T, request owner decision only if material",].join(" • ")}
        />

        <SectionCard
          eyebrow="Ethical Decision Model"
          title="The Ten-Step Investigative Boundary Check"
        >
          <div className="grid gap-5">
            {decisionFramework.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Ethical Decision Records"
          logs={[
            "09:02 | SCOPE | question=Account-A-to-Session-S | status=approved | version=2.1",
            "09:18 | SENSITIVE_INFO | source=browser-summary | relevance=none | action=minimized | privacy_owner=notified",
            "09:26 | NEW_SYSTEM | service=Service-T | authority=none | action=do-not-expand | owner_review=conditional",
            "09:41 | CONFLICT | reviewer=Reviewer-R | prior_role=change-approver | status=disclosed | independent_review=requested",
            "10:05 | NEW_PURPOSE | request=employee-performance-use | current_authority=none | status=stopped",
            "10:22 | RETENTION | evidence_package=A8-case | review_date=fictional-closure+30d | indefinite=false",
            "10:30 | DISTRIBUTION | leadership=minimized-summary | technical=approved-detail | public=fictional-only",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Scope Decision"
          question="Which fictional response is strongest when Service T appears in one supplied record but is outside current scope?"
          evidence={[
            "Current fictional scope covers Service S and Workflow W.",
            "One record contains a reference to Service T.",
            "No current approval covers investigation of Service T.",
            "The record does not yet show that Service T is material to the approved question.",
          ]}
          options={[
            "Immediately expand into Service T because it may be important.",
            "Ignore the reference completely and remove it from the case.",
            "Record the reference at a high level, do not investigate Service T under current authority, and seek a qualified owner decision only if the reference becomes material to the approved question.",
            "Assume Service T caused the event.",
          ]}
          bestAnswer={2}
          explanation="The strongest response preserves the observation without converting technical visibility into scope. Materiality and authorization must be decided before any expansion."
        />

        <SectionCard
          eyebrow="Unrelated Findings"
          title="A New Concern Does Not Automatically Become the Current Investigation"
        >
          <p className="leading-8">
            Fictional forensic work can reveal information that appears
            important but does not answer the approved question. Ethical
            handling separates discovery from authority. The investigator can
            document a minimal referral without turning the current case into a
            broader investigation.
          </p>

          <div className="mt-6 grid gap-5">
            {unrelatedFindingPatterns.map((item) => (
              <article
                key={item.situation}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-purple-100">
                  {item.situation}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.wrong}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional response
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Unrelated Personal Information"
          scenario="A fictional browser summary was supplied to answer whether the Support Console appeared during a bounded session window. One row unexpectedly contains unrelated personal activity that does not help answer the forensic question."
          choices={[
            {
              label: "Choice A",
              response:
                "Review the unrelated activity because it may reveal something useful later.",
              outcome:
                "Curiosity is not an approved forensic purpose and creates unnecessary privacy exposure.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Stop reviewing the unrelated detail, minimize it from the case analysis, document that sensitive unrelated information was encountered, and follow the fictional privacy process if escalation is required.",
              outcome:
                "This protects purpose limitation, privacy, and report quality.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Add the unrelated activity to the public portfolio as an example.",
              outcome:
                "Sensitive or unrelated information should not be reused for a secondary learning purpose.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Conflicts and Recusal"
          title="Impartiality Must Be Visible, Not Merely Assumed"
        >
          <p className="leading-8">
            A fictional reviewer may be technically qualified and still have a
            relationship to the issue under review. Disclosure allows the
            appropriate owner to decide whether the person should recuse,
            participate only in factual source explanation, or remain with an
            independent reviewer validating conclusions.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {conflictPatterns.map((item) => (
              <article
                key={item.conflict}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.conflict}
                </h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Trust risk
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.risk}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional response
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Conflict"
          question="A fictional reviewer approved the change now being evaluated. What is the strongest response?"
          evidence={[
            "The reviewer understands the system well.",
            "The reviewer approved the earlier change.",
            "The current forensic question may affect evaluation of that change.",
            "Another qualified fictional reviewer is available.",
          ]}
          options={[
            "Keep the prior approval secret because the reviewer is technically qualified.",
            "Automatically accuse the reviewer of misconduct.",
            "Disclose the prior role and let the appropriate owner decide whether recusal, independent review, or limited factual participation is appropriate.",
            "Cancel the entire investigation.",
          ]}
          bestAnswer={2}
          explanation="A conflict of interest is a trust and impartiality issue, not proof of wrongdoing. Disclosure and independent governance protect the investigation."
        />

        <SectionCard
          eyebrow="Purpose Change"
          title="Evidence Does Not Automatically Follow a New Purpose"
        >
          <p className="leading-8">
            Fictional evidence may have been used appropriately for incident
            response or forensic review but become inappropriate if repurposed
            for employee evaluation, unrelated monitoring, research, public
            demonstration, or another secondary use. A new purpose requires its
            own qualified decision.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Same evidence?", "Existing fictional evidence may remain technically available."],
              ["Same purpose?", "A new decision goal can change what is necessary and proportionate."],
              ["Same authority?", "Original fictional authorization may not cover the new use."],
              ["Same privacy risk?", "Secondary use may expose information to different audiences."],
              ["Same retention?", "A new purpose should not silently extend retention."],
              ["Same conclusion?", "Evidence meaning may change when the decision question changes."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black text-blue-100">{title}</h3>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Retention"
          title="Keeping Evidence Forever Is Not an Ethical Default"
        >
          <p className="leading-8">
            Fictional evidence retention should remain tied to purpose,
            governance, review, and ownership. Keeping information indefinitely
            increases privacy exposure, access risk, confusion about current
            versus historical state, and the temptation to reuse evidence for
            unrelated purposes.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "What approved fictional purpose still requires the evidence?",
              "Which owner is accountable for the retention decision?",
              "Which audience still needs access?",
              "Is the evidence active, held for follow-up, archived, or ready for disposition?",
              "Does a correction, appeal, review, or reopen trigger require continued retention?",
              "Can less detail be retained while preserving the necessary fictional audit trail?",
              "When is the next retention review?",
              "How will the fictional disposition decision be documented?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Disclosure"
          title="Transparency Does Not Mean Universal Access"
        >
          <div className="grid gap-5">
            {disclosureLevels.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.need}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Boundary
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.boundary}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: The New Purpose"
          scenario="A fictional forensic report was created to answer an incident-response question. After closure, a manager asks to reuse the same detailed evidence package for an unrelated employee-performance decision."
          choices={[
            {
              label: "Choice A",
              response:
                "Reuse the evidence because it has already been collected and reviewed.",
              outcome:
                "Existing availability does not create a new approved purpose or establish proportionality.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Stop the secondary use under the original purpose, refer the request to the appropriate fictional governance/privacy owner, and require a separate decision about purpose, authority, necessity, proportionality, retention, and distribution.",
              outcome:
                "This preserves purpose limitation and prevents silent expansion of evidence use.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Delete every case record immediately without checking retention or review requirements.",
              outcome:
                "Purpose limitation does not eliminate legitimate retention or governance obligations.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Ethical Case Matrix"
          title="Six Decisions Where Restraint Improves Forensic Quality"
        >
          <div className="grid gap-5">
            {ethicalCases.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-100">
                    {item.decision}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Authority", item.authority],
                    ["Necessity", item.necessity],
                    ["Privacy", item.privacy],
                    ["Owner", item.owner],
                    ["Reason", item.note],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Reporting Language"
          title="Ethical Boundaries Should Be Visible in the Report"
        >
          <div className="grid gap-5">
            {reportingPatterns.map(([weak, strong], index) => (
              <article
                key={weak}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Reporting pattern {index + 1}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 text-sm leading-6">{weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Professional
                    </p>
                    <p className="mt-2 text-sm leading-6">{strong}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Where Ethical Investigation Boundaries Fail"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Access equals permission", "Technical visibility is mistaken for authorization.", "Return to purpose, scope, authority, and stop conditions."],
              ["Curiosity equals relevance", "Interesting fictional evidence is treated as part of the case.", "Require a direct connection to the approved forensic question."],
              ["More data equals fairness", "Broad evidence use can expose unrelated people and create more bias, not less.", "Use necessity and minimization."],
              ["Conflict equals misconduct", "A disclosed relationship is treated as proof of wrongdoing.", "Manage the impartiality risk through disclosure, recusal, or independent review."],
              ["No conflict disclosure needed", "Reviewers assume their personal confidence is enough.", "Make potential conflicts visible to the appropriate owner."],
              ["New purpose equals same authority", "Existing evidence is silently repurposed.", "Require a separate purpose and governance decision."],
              ["Retention equals storage capacity", "Evidence is kept because it is cheap to store.", "Tie retention to approved purpose, owner, review date, and disposition."],
              ["Transparency equals full distribution", "Sensitive technical and personal detail is sent to everyone.", "Use audience-specific need-to-know disclosure."],
            ].map(([mistake, why, correction]) => (
              <article
                key={mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {mistake}
                </h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build an Ethical Investigation Boundary Register"
        >
          <p className="leading-8">
            Use only the invented Northbridge cases on this page. Do not access,
            inspect, monitor, collect, query, export, extract, recover, preserve,
            image, capture, or investigate any real account, browser, device,
            service, application, storage system, network, message, person, or
            organization.
          </p>

          <div className="mt-6 grid gap-5">
            {[
              {
                phase: "Phase 1 — Define authority",
                tasks: [
                  "Write the fictional purpose, requesting owner, decision owner, scope version, evidence categories, time window, exclusions, and stop conditions.",
                  "List three things that are technically possible but not authorized.",
                  "Explain why ability does not create permission.",
                ],
              },
              {
                phase: "Phase 2 — Apply necessity and proportionality",
                tasks: [
                  "Review EL-01 through EL-06.",
                  "For each fictional case, decide whether the evidence or action is necessary and proportionate.",
                  "Document one narrower alternative where possible.",
                ],
              },
              {
                phase: "Phase 3 — Handle unrelated and third-party findings",
                tasks: [
                  "Write one fictional unrelated-finding referral note.",
                  "Write one third-party minimization decision.",
                  "State what was intentionally excluded from the current investigation.",
                ],
              },
              {
                phase: "Phase 4 — Handle conflicts",
                tasks: [
                  "Create one fictional conflict disclosure.",
                  "Choose recusal, independent review, or limited factual participation.",
                  "Explain why the decision protects trust without assuming misconduct.",
                ],
              },
              {
                phase: "Phase 5 — Handle purpose change and retention",
                tasks: [
                  "Write one new-purpose stop decision.",
                  "Create one retention review with owner, purpose, access, archive state, review date, and disposition trigger.",
                  "Explain why indefinite retention is not the default.",
                ],
              },
              {
                phase: "Phase 6 — Communicate",
                tasks: [
                  "Create a technical ethics note, leadership ethics summary, privacy/governance note, and public-safe portfolio summary.",
                  "Keep all fictional facts consistent while changing detail by audience.",
                  "Include at least six explicit ethical boundary statements.",
                ],
              },
            ].map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.phase}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              This is an ethics, governance, writing, and decision-making lab
              using invented, pre-supplied scenarios only. It does not authorize
              real forensic access, monitoring, collection, investigation,
              surveillance, account review, browser inspection, evidence
              acquisition, device examination, extraction, recovery, or
              configuration changes.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Defend a Decision to Stop an Investigation That Could Technically Continue"
        >
          <p className="leading-8">
            A fictional analyst can see that a new evidence source may answer an
            interesting question about Service T. Service T is outside scope,
            the current incident question can already be answered without it,
            and reviewing the source would expose unrelated third-party
            information. Leadership asks why the investigation should stop when
            more evidence is available.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "State the approved fictional purpose and show that the existing evidence already answers it.",
              "Explain why the Service T question is a different purpose rather than a necessary continuation.",
              "Apply necessity and proportionality to the proposed evidence expansion.",
              "Explain the third-party privacy cost.",
              "Write one stop-condition statement.",
              "Write one owner-escalation statement that preserves the option of a separate future decision.",
              "Explain why restraint improves rather than weakens forensic credibility.",
              "Create a public-safe portfolio summary showing that ethical judgment can mean choosing not to investigate further.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A8.9 Ethical Limits in Investigations Checklist"
          items={[
            "I can explain why technical access does not create investigative authority.",
            "I can use authorization, purpose, necessity, proportionality, minimization, privacy, impartiality, retention, and disclosure as forensic quality controls.",
            "I can recognize when a new fictional system, identity, evidence category, purpose, or risk requires a scope decision.",
            "I can stop or narrow a fictional investigation when unrelated sensitive information appears.",
            "I can handle unrelated findings through minimal referral rather than automatic expansion.",
            "I can distinguish third-party presence from third-party relevance.",
            "I can disclose a fictional conflict of interest without treating it as proof of misconduct.",
            "I can explain when recusal or independent review protects trust.",
            "I can prevent evidence collected for one fictional purpose from being silently reused for another.",
            "I can connect retention to purpose, owner, review date, access, archive, and disposition.",
            "I can use audience-specific disclosure without changing facts or confidence.",
            "I can keep all ethical investigation examples fully fictional, pre-supplied, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <MiniQuiz
          title="A8.9 Mini Quiz: Ethical Limits in Investigations"
          questions={[
            {
              question:
                "A fictional investigator can technically see unrelated personal activity while reviewing a scoped browser summary. What is strongest?",
              choices: [
                "Review it because it is already visible.",
                "Exclude and minimize it because it does not answer the approved question, and follow the fictional privacy process if needed.",
                "Add it to the public portfolio.",
                "Expand the investigation immediately.",
              ],
              answer: 1,
              explanation:
                "Technical visibility does not create purpose or authority. Unrelated sensitive information should be minimized.",
            },
            {
              question:
                "One fictional record references Service T, which is outside current scope. What is strongest?",
              choices: [
                "Investigate Service T immediately.",
                "Assume Service T caused the issue.",
                "Record the reference, do not investigate Service T under current authority, and seek a qualified owner decision only if material.",
                "Delete the reference from the case.",
              ],
              answer: 2,
              explanation:
                "A new system reference may matter, but it requires materiality and authorization before expansion.",
            },
            {
              question:
                "A fictional reviewer approved the change now being evaluated. What should happen?",
              choices: [
                "Hide the prior involvement.",
                "Assume misconduct.",
                "Disclose the potential conflict and let the appropriate owner decide about recusal, limited participation, or independent review.",
                "Cancel the entire case.",
              ],
              answer: 2,
              explanation:
                "Conflict management protects impartiality and trust without assuming wrongdoing.",
            },
            {
              question:
                "A fictional incident report is later requested for an unrelated employee-performance decision. What is strongest?",
              choices: [
                "Reuse it because the evidence already exists.",
                "Stop secondary use under the original purpose and require a separate qualified purpose and authority decision.",
                "Publish the report instead.",
                "Delete all records immediately.",
              ],
              answer: 1,
              explanation:
                "Evidence does not automatically carry into a new purpose.",
            },
            {
              question:
                "Why is minimization important in fictional forensic work?",
              choices: [
                "It makes reports shorter.",
                "It limits evidence use to what is necessary for the approved question and reduces unrelated privacy and scope risk.",
                "It guarantees every finding is correct.",
                "It eliminates the need for authorization.",
              ],
              answer: 1,
              explanation:
                "Minimization improves relevance, privacy, proportionality, and reviewability.",
            },
            {
              question:
                "What is the strongest fictional retention approach?",
              choices: [
                "Keep everything forever.",
                "Delete everything at closure regardless of requirements.",
                "Tie retention to approved purpose, ownership, access, review dates, archive state, and disposition criteria.",
                "Let each investigator keep personal copies.",
              ],
              answer: 2,
              explanation:
                "Retention is a governed lifecycle decision rather than a storage-capacity choice.",
            },
            {
              question:
                "Which statement best describes ethical forensic restraint?",
              choices: [
                "It means avoiding difficult questions.",
                "It means choosing not to exceed authorization, purpose, necessity, proportionality, privacy, or impartiality boundaries even when more investigation is technically possible.",
                "It means ignoring evidence that weakens a hypothesis.",
                "It means sharing the full report with everyone for transparency.",
              ],
              answer: 1,
              explanation:
                "Ethical restraint protects the legitimacy and credibility of the investigation.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Ethical Investigation Boundary Register"
          prompt="Create a fully fictional A8.9 Ethical Investigation Boundary Register for Northbridge. Include the investigation purpose, requesting owner, decision owner, scope version, included systems and identities, excluded systems and identities, approved evidence categories, time window, stop conditions, necessity tests, proportionality tests, minimization rules, sensitive-information rules, third-party rules, unrelated-finding referral process, conflict-of-interest disclosure, recusal decision, independent-review option, new-purpose stop decision, retention review, disclosure matrix, distribution tiers, archive state, disposition owner, correction history, at least six ethical boundary decisions, at least six non-proof statements, a leadership ethics summary, a privacy/governance summary, and a public-safe portfolio summary. Every organization, person, account, endpoint, service, supplier, record, reviewer, purpose, decision, and outcome must be invented."
          tips={[
            "Separate what is technically possible from what is authorized and necessary.",
            "Use stop conditions when fictional scope, purpose, person, system, evidence category, or privacy risk changes.",
            "Treat unrelated findings as referrals rather than automatic scope expansion.",
            "Disclose conflicts and let a qualified owner decide about recusal or independent review.",
            "Tie retention and disclosure to purpose rather than convenience.",
            "Keep the entire portfolio artifact fictional, non-invasive, defensive, privacy-safe, and public-safe.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A8.10 Digital Forensics Capstone Lab?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for authorization, purpose,
            necessity, proportionality, minimization, privacy, unrelated
            findings, third parties, conflicts, recusal, stop conditions,
            retention, disclosure, and ethical reporting.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why technical visibility does not create authority.",
              "I can determine whether fictional evidence is necessary for the approved question.",
              "I can apply proportionality and minimization before expanding evidence use.",
              "I can stop or narrow review when unrelated sensitive information appears.",
              "I can refer an unrelated fictional finding without turning it into the current investigation.",
              "I can recognize third-party information that should remain outside scope.",
              "I can disclose a conflict and explain when independent review or recusal is appropriate.",
              "I can recognize when a new purpose requires a new governance decision.",
              "I can connect retention and disclosure to approved purpose and need-to-know.",
              "I can demonstrate ethical restraint in a fully fictional, public-safe forensic portfolio.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50"
              >
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Technical access is not the same as forensic authority.",
            "Authorization, purpose, necessity, proportionality, minimization, privacy, impartiality, retention, and disclosure are part of evidence quality.",
            "A new fictional system, identity, evidence category, purpose, or sensitive-data exposure can trigger a stop or scope-review decision.",
            "Unrelated findings should be minimally documented and referred rather than automatically investigated under the current case.",
            "Third-party information should enter the investigation only when necessary and authorized for the approved question.",
            "Conflicts of interest should be disclosed and managed through qualified decisions about recusal, limited participation, or independent review.",
            "Evidence collected for one fictional purpose does not automatically become appropriate for a different purpose.",
            "Retention should remain tied to approved purpose, access, review, archive, ownership, and disposition.",
            "Transparency means accurate, reviewable communication—not universal distribution of sensitive detail.",
            "The strongest ethical forensic investigator knows when to investigate, when to narrow, when to escalate, when to recuse, and when to stop.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This Lesson Teaches Ethical Boundaries, Not Real Investigation
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A8.9 authorizes access, investigation, monitoring,
            querying, collection, preservation, imaging, memory capture,
            extraction, credential recovery, browser inspection, account access,
            private-message review, storage access, supplier access,
            surveillance, configuration changes, recovery actions, or
            examination involving any real device, account, application,
            service, supplier, storage system, network, organization, incident,
            classmate, teacher, family member, or other person. Use only fully
            invented, pre-supplied evidence and ethical decision scenarios.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Digital Forensics Capstone Lab
          </h2>
          <p className="mt-3 max-w-3xl leading-7">
            A8.9 established the ethical boundaries that govern fictional
            forensic work. A8.10 brings the full module together: scope,
            evidence integrity, chronology, endpoint concepts, memory and
            storage concepts, browser/account evidence, correlation, reporting,
            ethics, review, and portfolio-ready communication in one safe
            fictional capstone.
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