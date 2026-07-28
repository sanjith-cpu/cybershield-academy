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

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/intermediate-capstone-and-portfolio`;
const nextLesson = `${modulePath}/building-a-defender-portfolio-artifact`;

const objectives = [
  "Review the complete Intermediate track across networking, Linux, Windows, logs, defensive tools, IAM, email, web, secure coding, vulnerability management, incident response, forensics, cloud, risk, SOC work, and integrated defensive labs.",
  "Separate remembered concepts from demonstrated skills, weak areas, evidence gaps, confidence limits, misconceptions, and final review priorities.",
  "Map fictional defensive tasks to the correct workflow, owner, authority, evidence source, decision boundary, validation step, and portfolio artifact.",
  "Create an evidence-based fictional readiness dashboard using module mastery, quiz performance, lab quality, explanation accuracy, reflection, and portfolio completeness.",
  "Build a realistic fictional study and practice plan that targets the highest-value gaps without unsafe experimentation, overconfidence, or unnecessary repetition."
];
const vocabulary = [
  [
    "Knowledge recall",
    "The ability to accurately remember a fictional defensive concept, term, principle, workflow step, or responsibility."
  ],
  [
    "Applied skill",
    "The ability to use fictional evidence, context, ownership, and validation to make a defensible decision."
  ],
  [
    "Mastery evidence",
    "A fictional quiz result, lab artifact, explanation, checklist, report, diagram, reflection, or validated task showing what the student can do."
  ],
  [
    "Confidence rating",
    "A fictional estimate of certainty that should be compared with evidence rather than treated as proof of mastery."
  ],
  [
    "Knowledge gap",
    "A fictional concept the student cannot explain accurately or apply consistently."
  ],
  [
    "Skill gap",
    "A fictional task the student understands in theory but cannot yet complete with correct workflow, evidence limits, ownership, and validation."
  ],
  [
    "Misconception",
    "A fictional incorrect belief such as treating alert severity as proof of compromise or ticket completion as proof of validation."
  ],
  [
    "Transfer",
    "The ability to apply a fictional concept learned in one module to a different defensive situation."
  ],
  [
    "Readiness domain",
    "A fictional category of knowledge and skills such as evidence analysis, systems, identity, cloud, incident response, communication, or portfolio quality."
  ],
  [
    "Priority gap",
    "A fictional weakness selected for immediate review because it affects many tasks, carries high risk, or blocks later learning."
  ],
  [
    "Review loop",
    "A fictional cycle of recall, explanation, application, feedback, correction, validation, and reflection."
  ],
  [
    "Retrieval practice",
    "A fictional study technique that asks the learner to recall and explain without looking first."
  ],
  [
    "Error log",
    "A fictional record of wrong answers, unclear explanations, causes, corrections, practice actions, and reassessment dates."
  ],
  [
    "Interleaving",
    "A fictional study method that mixes related topics so the learner must choose the right concept or workflow instead of repeating one pattern."
  ],
  [
    "Readiness threshold",
    "A fictional measurable standard used to decide whether the learner should advance, review, or seek more practice."
  ],
  [
    "Portfolio evidence",
    "A fictional, privacy-safe artifact that demonstrates defensive reasoning, communication, validation, and reflection."
  ]
];
const domains = [
  {
    "id": "D1",
    "title": "Networking for Defenders",
    "modules": "I1",
    "knowledge": "Addressing, protocols, ports, traffic flow, segmentation, services, source and destination context, and network evidence limits.",
    "applied": "Explain a fictional flow, identify what a record proves, distinguish expected from unusual traffic, and recommend proportionate review.",
    "misconception": "A port number alone proves a specific application, user, or malicious action.",
    "evidence": "Network diagram, flow analysis, protocol explanation, or fictional traffic-review artifact.",
    "review": "Practice explaining one flow from user to service and one limitation of each evidence source."
  },
  {
    "id": "D2",
    "title": "Linux and Windows Security",
    "modules": "I2–I3",
    "knowledge": "Accounts, permissions, services, processes, files, configuration, logs, updates, local controls, and operating-system responsibilities.",
    "applied": "Review fictional account, process, service, permission, and configuration evidence without accessing real systems.",
    "misconception": "An unfamiliar process, service, file, or event is automatically malicious.",
    "evidence": "Fictional Linux or Windows review checklist, account analysis, or service-baseline comparison.",
    "review": "Compare identity, process, service, file, and configuration evidence across both operating systems."
  },
  {
    "id": "D3",
    "title": "Logs, Monitoring, and Defensive Tools",
    "modules": "I4–I5",
    "knowledge": "Log sources, timestamps, normalization, collection, source health, alert logic, dashboards, evidence correlation, and tool limitations.",
    "applied": "Build a fictional timeline, validate source health, separate observation from conclusion, and explain uncertainty.",
    "misconception": "The alert title, dashboard severity, or tool output is already a validated finding.",
    "evidence": "Fictional evidence register, normalized timeline, findings matrix, dashboard interpretation, or tool comparison.",
    "review": "Practice source-health checks, event versus collection time, alternate explanations, and confidence language."
  },
  {
    "id": "D4",
    "title": "Identity and Access Management",
    "modules": "I6",
    "knowledge": "Identities, roles, groups, inherited access, least privilege, separation of duties, approvals, exceptions, lifecycle, and effective access.",
    "applied": "Review fictional users, suppliers, service accounts, shared accounts, emergency access, and role conflicts.",
    "misconception": "Recent use, active status, or one past approval proves that access should remain.",
    "evidence": "Fictional IAM inventory, effective-access matrix, decision register, validation record, or owner communication.",
    "review": "Practice direct versus inherited access, business need, exception expiration, service-account validation, and closure criteria."
  },
  {
    "id": "D5",
    "title": "Email and Phishing Defense",
    "modules": "I7",
    "knowledge": "Sender evidence, routing, authentication, message content, business context, campaign analysis, user interaction, and safe reporting.",
    "applied": "Triage fictional messages without opening real suspicious content and provide user guidance based on confirmed interaction.",
    "misconception": "A click proves account compromise, or passed sender checks prove a message is safe.",
    "evidence": "Fictional phishing triage record, user guidance, evidence matrix, campaign summary, or disposition note.",
    "review": "Compare malicious, suspicious, authorized, and inconclusive fictional messages with different user actions."
  },
  {
    "id": "D6",
    "title": "Web Security and Secure Coding",
    "modules": "I8–I9",
    "knowledge": "Authentication, authorization, sessions, validation, output handling, security headers, errors, logging, design review, and secure-development feedback.",
    "applied": "Review fictional routes, roles, sessions, controls, code behavior, design choices, and evidence limits without probing real sites.",
    "misconception": "A blocked test proves complete security, or a control weakness proves exploitation.",
    "evidence": "Fictional web-defense review, secure-code reasoning artifact, control matrix, or design recommendation.",
    "review": "Practice separating control state, attempted behavior, successful behavior, confirmed impact, and validation."
  },
  {
    "id": "D7",
    "title": "Vulnerability Management",
    "modules": "I10",
    "knowledge": "Asset context, findings, severity, exploitability, exposure, business criticality, remediation, exceptions, verification, and risk acceptance.",
    "applied": "Prioritize fictional vulnerability findings using asset, exposure, impact, control, owner, and remediation evidence.",
    "misconception": "The highest scanner score is always the first business priority.",
    "evidence": "Fictional vulnerability register, prioritization matrix, remediation plan, exception review, or verification record.",
    "review": "Practice comparing technical severity with asset value, exposure, compensating controls, and remediation feasibility."
  },
  {
    "id": "D8",
    "title": "Incident Response and Digital Forensics",
    "modules": "I11–I12",
    "knowledge": "Preparation, detection, triage, declaration, containment concepts, continuity, evidence preservation, recovery, closure, timelines, and forensic limits.",
    "applied": "Coordinate a fictional response, preserve case boundaries, explain evidence handling, and validate recovery.",
    "misconception": "High severity alone proves an incident, or missing evidence proves guilt or safety.",
    "evidence": "Fictional incident timeline, decision register, tabletop, evidence-handling record, or recovery checklist.",
    "review": "Practice proposed versus authorized versus completed versus validated actions and audience-specific updates."
  },
  {
    "id": "D9",
    "title": "Cloud Security",
    "modules": "I13",
    "knowledge": "Shared responsibility, identities, policies, storage, networks, encryption, keys, logging, inherited controls, suppliers, and effective state.",
    "applied": "Review fictional cloud misconfigurations, possible exposure, source gaps, ownership, rollback, and validation.",
    "misconception": "A broad policy proves disclosure, or the provider secures every customer configuration.",
    "evidence": "Fictional cloud review charter, effective-state matrix, shared-responsibility map, or remediation validation.",
    "review": "Practice local versus inherited state, possible exposure versus confirmed access, and provider versus customer ownership."
  },
  {
    "id": "D10",
    "title": "Security Policies and Risk",
    "modules": "I14",
    "knowledge": "Assets, threats, weaknesses, controls, likelihood, impact, policy purpose, exceptions, treatment options, ownership, and residual risk.",
    "applied": "Turn fictional technical evidence into risk and policy recommendations that support a business decision.",
    "misconception": "Risk is only a technical score or every policy exception is a failure.",
    "evidence": "Fictional risk register, policy review, exception decision, treatment recommendation, or leadership brief.",
    "review": "Practice explaining likelihood, impact, control effectiveness, options, owner authority, and residual risk."
  },
  {
    "id": "D11",
    "title": "Security Operations",
    "modules": "I15",
    "knowledge": "SOC roles, queues, triage, escalation, handoffs, service context, communication, metrics, quality review, and continuous improvement.",
    "applied": "Manage fictional queue priorities, assign owners, preserve case quality, communicate status, and improve detection or workflow.",
    "misconception": "Fast closure is always good, or every alert should become one incident.",
    "evidence": "Fictional queue review, shift handoff, case-quality assessment, metrics dashboard, or escalation plan.",
    "review": "Practice priority, ownership, handoff quality, metric interpretation, and closure discipline."
  },
  {
    "id": "D12",
    "title": "Intermediate Defensive Labs",
    "modules": "I16",
    "knowledge": "Integrated evidence handling across logs, phishing, IAM, web, cloud, response, reporting, communication, validation, and case boundaries.",
    "applied": "Complete fictional multi-step analysis and produce a portfolio-safe professional case package.",
    "misconception": "One queue item, one shift, or similar severity proves one coordinated incident.",
    "evidence": "Fictional multi-step case package, defensive report, tabletop, findings matrix, or validation record.",
    "review": "Practice case separation, priority decisions, audience communication, final reporting, and residual uncertainty."
  }
];
const readinessLevels = [
  {
    "level": "Level 4 — Demonstrated",
    "description": "The student can explain the concept, apply it to new fictional evidence, justify the decision, identify limits, assign owners, and validate the outcome.",
    "evidence": "Accurate quiz answers, strong lab artifact, clear explanation, correct workflow, and successful transfer to a new scenario.",
    "action": "Maintain with spaced review and include the best fictional artifact in the portfolio."
  },
  {
    "level": "Level 3 — Functional",
    "description": "The student can usually apply the concept but may miss an edge case, owner boundary, alternate explanation, or validation step.",
    "evidence": "Mostly accurate work with minor corrections after feedback.",
    "action": "Complete one targeted mixed scenario and revise the related artifact."
  },
  {
    "level": "Level 2 — Developing",
    "description": "The student recognizes the concept but applies it inconsistently or relies on memorized patterns.",
    "evidence": "Correct definitions with weak scenario decisions, vague evidence use, or incomplete validation.",
    "action": "Return to the lesson, complete retrieval practice, study worked examples, and repeat a safe fictional lab."
  },
  {
    "level": "Level 1 — Beginning",
    "description": "The student cannot yet explain the concept accurately or use it safely in a fictional task.",
    "evidence": "Repeated misconceptions, unsupported claims, missing workflow, or inability to identify evidence and owners.",
    "action": "Rebuild the foundation before attempting the capstone or module test."
  }
];
const reviewQuestions = [
  {
    "question": "Can I explain the concept without looking?",
    "strong": "State the fictional definition, purpose, evidence, workflow, limitation, owner, and example in your own words.",
    "weak": "Recognize the term only when shown multiple-choice options.",
    "review": "Which part becomes unclear when notes are closed?"
  },
  {
    "question": "Can I apply it to a new scenario?",
    "strong": "Use fictional evidence to choose the correct workflow, conclusion, action, owner, and validation.",
    "weak": "Repeat the example from the lesson without adapting it.",
    "review": "What changes when the identity, service, source health, or business context changes?"
  },
  {
    "question": "Can I separate fact from inference?",
    "strong": "Label fictional observations, conclusions, alternatives, missing evidence, confidence, possible impact, and confirmed impact.",
    "weak": "Treat the most likely explanation as a proven fact.",
    "review": "Which exact record supports every sentence?"
  },
  {
    "question": "Can I explain what the evidence does not prove?",
    "strong": "State fictional scope, time, source coverage, delay, privacy, authority, and impact limits.",
    "weak": "Use broad language such as nothing happened or the system is secure.",
    "review": "What uncovered path or unanswered question remains?"
  },
  {
    "question": "Can I identify the correct owner?",
    "strong": "Separate fictional identity, service, cloud, network, supplier, data, application, communications, risk, and recovery authority.",
    "weak": "Assume the analyst can authorize every action.",
    "review": "Who may approve, perform, validate, and accept residual risk?"
  },
  {
    "question": "Can I validate the outcome?",
    "strong": "Confirm fictional effective access, configuration, source health, user state, service function, owner signoff, monitoring, and residual risk.",
    "weak": "Treat a closed ticket or stopped alert as proof.",
    "review": "Which evidence demonstrates the intended state now exists?"
  },
  {
    "question": "Can I communicate to different audiences?",
    "strong": "Preserve the same fictional facts while adjusting detail, tone, terminology, decision request, guidance, and cadence.",
    "weak": "Send one identical technical summary to everyone.",
    "review": "What does this audience need to decide or do?"
  },
  {
    "question": "Can I create a portfolio-safe artifact?",
    "strong": "Use fully invented fictional names, systems, evidence, dates, identifiers, suppliers, incidents, and outcomes.",
    "weak": "Copy a real artifact and change only the organization name.",
    "review": "Could any detail reveal or reproduce real private information?"
  }
];
const studyCycle = [
  {
    "step": "1",
    "title": "Retrieve",
    "detail": "Close the notes and explain one fictional concept, workflow, evidence source, limitation, owner, and validation step from memory.",
    "output": "Short recall response."
  },
  {
    "step": "2",
    "title": "Check",
    "detail": "Compare the response with the lesson and identify missing terms, inaccurate claims, weak ownership, and skipped validation.",
    "output": "Correction list."
  },
  {
    "step": "3",
    "title": "Apply",
    "detail": "Use the concept on a new fictional mini-scenario with different systems, identities, timing, source health, business context, and impact.",
    "output": "Scenario decision."
  },
  {
    "step": "4",
    "title": "Explain",
    "detail": "Write fictional observations, conclusions, alternatives, confidence, impact limits, action, owner, and validation in clear language.",
    "output": "Evidence-limited explanation."
  },
  {
    "step": "5",
    "title": "Revise",
    "detail": "Use feedback to correct the fictional reasoning, artifact, diagram, report, checklist, or communication.",
    "output": "Improved artifact."
  },
  {
    "step": "6",
    "title": "Reassess",
    "detail": "Repeat retrieval and application after a delay, then update the fictional readiness level and next review date.",
    "output": "Readiness update."
  },
  {
    "step": "7",
    "title": "Transfer",
    "detail": "Apply the same principle in another fictional domain, such as using evidence limits in IAM, phishing, cloud, and incident reporting.",
    "output": "Cross-domain comparison."
  },
  {
    "step": "8",
    "title": "Portfolio",
    "detail": "Preserve the best fictional evidence of mastery with reflection, privacy review, version control, and next improvement.",
    "output": "Portfolio-ready entry."
  }
];
const findings = [
  {
    "id": "NBR-REV-F01",
    "statement": "The fictional learner demonstrates strong evidence analysis but sometimes overstates impact when source coverage is incomplete.",
    "support": "Accurate timelines and source-health checks across three labs, with two report sentences that changed possible exposure into confirmed impact.",
    "alternative": "The wording issue may reflect communication difficulty rather than analytical misunderstanding.",
    "confidence": "High",
    "impact": "Incorrect impact language can mislead owners and leadership.",
    "next": "Practice five finding statements that separate control weakness, possible exposure, confirmed access, and confirmed impact."
  },
  {
    "id": "NBR-REV-F02",
    "statement": "The fictional learner recalls IAM terms but inconsistently maps inherited access and validation.",
    "support": "Strong vocabulary score, correct business-need reasoning, and repeated omissions of nested groups and effective-access checks.",
    "alternative": "The errors may result from rushing rather than a knowledge gap.",
    "confidence": "Medium-High",
    "impact": "Incomplete access review may leave unnecessary capability active.",
    "next": "Complete two mixed IAM scenarios and one effective-access validation artifact."
  },
  {
    "id": "NBR-REV-F03",
    "statement": "The fictional learner is ready in phishing triage but needs stronger case-boundary reasoning in multi-domain queues.",
    "support": "Correct sender, routing, content, interaction, and user-guidance work, with one unsupported merge of phishing and cloud records.",
    "alternative": "The grouped dashboard presentation may have encouraged the merge.",
    "confidence": "High",
    "impact": "Unsupported merging can distort scope, owners, actions, and reporting.",
    "next": "Practice three case-boundary decisions using identity, system, evidence, time, owner, and action relationships."
  },
  {
    "id": "NBR-REV-F04",
    "statement": "The fictional learner explains technical evidence clearly to analysts but uses too much detail for leadership.",
    "support": "Accurate technical summaries and leadership updates containing raw fields, long timelines, and no explicit decision request.",
    "alternative": "The learner may not have practiced audience adaptation enough.",
    "confidence": "High",
    "impact": "Leadership may miss the current decision, service state, or residual risk.",
    "next": "Rewrite three technical findings as sixty-second leadership briefs."
  },
  {
    "id": "NBR-REV-F05",
    "statement": "The fictional learner completes corrective actions but occasionally treats ticket closure as validation.",
    "support": "Strong remediation plans with missing effective-state, source-health, service-function, and owner-signoff evidence.",
    "alternative": "The lab template may not have emphasized validation clearly.",
    "confidence": "High",
    "impact": "A recorded fix may not equal the intended defensive outcome.",
    "next": "Add explicit validation evidence and residual-risk fields to every practice artifact."
  },
  {
    "id": "NBR-REV-F06",
    "statement": "The fictional learner has enough overall Intermediate readiness to begin the capstone after targeted review of three priority gaps.",
    "support": "Ten demonstrated domains, two functional domains, complete safe portfolio artifacts, and consistent defensive ethics.",
    "alternative": "A mixed practice test may reveal additional transfer gaps.",
    "confidence": "Medium-High",
    "impact": "Starting immediately is reasonable if targeted review continues.",
    "next": "Complete the three-gap study plan, reassess, and document readiness evidence before I17.8."
  }
];
const commonMistakes = [
  "Rating fictional readiness from confidence alone instead of quiz, lab, explanation, validation, and transfer evidence.",
  "Reviewing only favorite modules while ignoring weak or high-impact domains.",
  "Memorizing definitions without practicing evidence-based decisions.",
  "Repeating one type of question until the answer pattern becomes obvious.",
  "Treating a high quiz score as proof of strong documentation, communication, ownership, and validation.",
  "Treating one poor result as proof that the entire domain is weak.",
  "Hiding errors instead of maintaining a fictional error log and correction plan.",
  "Studying technical details without practicing audience communication.",
  "Reviewing workflows without identifying owner authority and decision boundaries.",
  "Completing actions without validating effective state, service function, and residual risk.",
  "Building portfolio artifacts with real names, systems, incidents, messages, logs, screenshots, cloud identifiers, or private data.",
  "Copying lesson text instead of explaining in original words and applying it to new fictional evidence.",
  "Creating an unrealistic plan with too many goals, no deadlines, no reassessment, and no measurable success criteria.",
  "Using unsafe experimentation, real suspicious content, real credentials, or unauthorized systems as practice material."
];
const quizQuestions = [
  {
    "question": "What is the strongest evidence of fictional Intermediate mastery?",
    "choices": [
      "Accurate recall, successful application to new evidence, clear explanation, correct ownership, validated outcomes, and safe portfolio work.",
      "Confidence alone.",
      "One high quiz score.",
      "Completing every page quickly."
    ],
    "answer": 0,
    "explanation": "Mastery requires multiple forms of evidence and transfer."
  },
  {
    "question": "What is the difference between a knowledge gap and a skill gap?",
    "choices": [
      "A knowledge gap affects accurate explanation, while a skill gap affects consistent application of workflow, evidence, ownership, and validation.",
      "They are always identical.",
      "A skill gap only means slow typing.",
      "A knowledge gap cannot be improved."
    ],
    "answer": 0,
    "explanation": "Recall and application are related but different readiness dimensions."
  },
  {
    "question": "Why should review include mixed fictional scenarios?",
    "choices": [
      "They require the learner to choose the correct concept and workflow instead of repeating one obvious pattern.",
      "They make every topic harder without purpose.",
      "They replace foundation review.",
      "They prove all cases are related."
    ],
    "answer": 0,
    "explanation": "Interleaving strengthens selection and transfer."
  },
  {
    "question": "What should happen after a wrong fictional quiz answer?",
    "choices": [
      "Record the misconception, correct the explanation, apply the concept to a new scenario, and reassess later.",
      "Memorize the answer letter.",
      "Ignore it if the overall score is high.",
      "Repeat the exact same question immediately until correct."
    ],
    "answer": 0,
    "explanation": "A useful review loop addresses the cause and tests transfer."
  },
  {
    "question": "Why is ticket completion not enough for readiness evidence?",
    "choices": [
      "The learner must show that the intended effective state, service function, source health, owner signoff, monitoring, and residual risk were validated.",
      "Tickets never matter.",
      "Only leadership can validate.",
      "Validation is optional in practice."
    ],
    "answer": 0,
    "explanation": "Completion and validated outcome are different stages."
  },
  {
    "question": "What makes a fictional study plan realistic?",
    "choices": [
      "A small number of priority gaps, specific actions, deadlines, success measures, reassessment dates, and safe practice artifacts.",
      "Reviewing every topic every day.",
      "Studying only the easiest domain.",
      "Avoiding all mistakes."
    ],
    "answer": 0,
    "explanation": "A realistic plan is focused, measurable, and reviewable."
  },
  {
    "question": "What makes a knowledge-review artifact portfolio-safe?",
    "choices": [
      "It uses fully invented systems, evidence, identities, dates, results, and reflections without copying private or real defensive material.",
      "It removes only passwords.",
      "It keeps real logs but changes usernames.",
      "It copies a real report with a fictional title."
    ],
    "answer": 0,
    "explanation": "Portfolio safety requires full fictionalization."
  }
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
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function IntermediateKnowledgeReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 1 of 8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Final Review</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.1 Intermediate Knowledge Review
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Review the complete Intermediate track, measure readiness with evidence,
            identify priority gaps, correct misconceptions, practice transfer,
            and create a realistic study plan before building the final portfolio and capstone.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Intermediate Knowledge Review"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will rate readiness using fictional evidence such as quizzes, labs, explanations, validation records, reflections, and portfolio artifacts.",
            "I will not use confidence, speed, completion, or one score as the only proof of mastery.",
            "I will record misconceptions and weak areas honestly instead of hiding them.",
            "I will use only fictional systems, identities, logs, messages, cloud resources, suppliers, incidents, dates, results, and artifacts.",
            "I will not access, test, scan, change, or investigate real systems or suspicious content for practice.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Finishing the Lessons Is Not the Same as Being Ready">
          <p className="leading-8">
            A fictional student completed all Intermediate modules and earned strong quiz scores.
            However, the student still overstates impact, forgets inherited access, merges unrelated cases,
            and closes corrective work before validation. A professional readiness review asks what the
            learner can explain, apply, justify, communicate, validate, and transfer to a new scenario.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak review</p>
              <p className="mt-2 leading-7">
                Rate everything strong because the pages are complete, study only favorite topics,
                memorize answer patterns, ignore errors, and skip transfer or validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional review</p>
              <p className="mt-2 leading-7">
                Gather mastery evidence, test recall, apply skills to new fictional evidence,
                identify misconceptions, prioritize gaps, reassess, and preserve portfolio proof.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="The Capstone Requires Transfer across the Entire Intermediate Track">
          <p className="leading-8">
            The final capstone may combine fictional network, operating-system, log, identity,
            email, web, cloud, supplier, incident, risk, SOC, and reporting evidence.
            Students must select the correct concepts, preserve case boundaries, assign owners,
            act safely, communicate clearly, validate outcomes, and explain what remains unknown.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Recall–Apply–Explain–Validate–Transfer Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Recall", "Can you define the fictional concept, purpose, evidence, workflow, owner, limitation, and example without looking?"],
              ["Apply", "Can you use the concept on new fictional systems, identities, sources, business context, and impact?"],
              ["Explain", "Can you separate fictional observation, conclusion, alternative, confidence, impact, action, and limitation clearly?"],
              ["Validate", "Can you prove the fictional effective state, service function, source health, owner signoff, monitoring, and residual risk?"],
              ["Transfer", "Can you use the principle across networking, systems, IAM, phishing, web, cloud, incident response, risk, SOC, and reporting?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Knowledge Review and Readiness Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Intermediate Review Map</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Twelve Readiness Domains across Modules I1–I16</h2>
          <div className="mt-6 grid gap-5">
            {domains.map((domain) => (
              <article key={domain.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{domain.id}</span>
                  <h3 className="text-lg font-black text-white">{domain.title}</h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{domain.modules}</span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Knowledge", domain.knowledge],
                    ["Applied skill", domain.applied],
                    ["Common misconception", domain.misconception],
                    ["Mastery evidence", domain.evidence],
                    ["Review action", domain.review],
                  ].map(([label, detail]) => (
                    <div key={`${domain.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Readiness Levels</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Four Evidence-Based Mastery Levels</h2>
          <div className="mt-6 grid gap-5">
            {readinessLevels.map((item) => (
              <article key={item.level} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.level}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Evidence</p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Next action</p>
                    <p className="mt-2 text-sm leading-6">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Self-Review Questions</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Questions before Rating a Domain</h2>
          <div className="mt-6 grid gap-5">
            {reviewQuestions.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.question}</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong review</p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak review</p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Reflection question</p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Review Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Retrieval to Portfolio Evidence</h2>
          <div className="mt-6 grid gap-4">
            {studyCycle.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span>
                <h3 className="font-black text-cyan-100">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                <p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Intermediate Readiness Dashboard"
          subtitle="Training dashboard based on fictional mastery evidence only."
          metrics={[
            { label: "Demonstrated domains", value: "10", note: "The fictional learner can explain, apply, communicate, validate, and transfer skills in ten of twelve review domains." },
            { label: "Priority gaps", value: "3", note: "Impact language, inherited IAM access, and case-boundary reasoning require targeted review before the final capstone." },
            { label: "Portfolio-safe artifacts", value: "16", note: "All fictional artifacts use invented systems, identities, evidence, dates, incidents, suppliers, and outcomes." },
          ]}
        />

        <FakeAlertCard
          title="High Quiz Scores Hide Three Applied-Readiness Gaps"
          severity="Medium"
          time="4:12 PM"
          source="Fake Intermediate Readiness Console"
          details="A fictional learner scores well on recall questions but overstates impact, omits inherited access paths, and merges unrelated multi-domain records."
          recommendation="Prioritize targeted mixed scenarios, maintain an error log, revise three portfolio artifacts, reassess after a delay, and document evidence before rating the domains as demonstrated."
        />

        <FakeLogPanel
          title="Fake Intermediate Review Timeline"
          logs={[
            "09:00 REVIEW domains='12'",
            "09:15 QUIZ recall-score='92-percent'",
            "09:30 LAB evidence-analysis='strong'",
            "09:45 REPORT impact-language='overstated'",
            "10:00 IAM inherited-access='missed'",
            "10:15 PHISHING triage='demonstrated'",
            "10:30 CASE boundary='unsupported-merge'",
            "10:45 COMM technical-summary='strong'",
            "11:00 COMM leadership-summary='too-detailed'",
            "11:15 VALIDATION ticket-closure='misused'",
            "11:30 PORTFOLIO safety='verified'",
            "11:45 GAP priority-count='3'",
            "12:00 PLAN mixed-scenarios='assigned'",
            "12:15 PLAN artifact-revision='assigned'",
            "12:30 REASSESS date='scheduled'",
            "12:45 READINESS capstone='conditional-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Readiness Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Findings with Evidence and Next Actions</h2>
          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact", item.impact],
                    ["Next action", item.next],
                  ].map(([label, detail]) => (
                    <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Is a 92% Recall Score Enough to Rate the Learner Fully Ready?"
          evidence={[
            "The fictional learner scores 92% on recall questions.",
            "Evidence analysis and phishing triage are strong.",
            "Two reports overstate possible exposure as confirmed impact.",
            "Two IAM reviews omit inherited access paths.",
            "One multi-domain queue is merged without evidence.",
            "Portfolio safety and defensive ethics are consistently strong.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The learner has strong overall readiness but should complete targeted review and reassessment before rating every domain as demonstrated.",
            "The learner is fully ready because the quiz score is above 90%.",
            "The learner is not ready for any capstone work.",
            "Only the weakest result should determine overall readiness.",
          ]}
          bestAnswer={0}
          explanation="Readiness should combine recall, application, communication, validation, transfer, ethics, and portfolio evidence."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken an Intermediate Knowledge Review">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Fictional Intermediate Readiness Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Mastery Evidence, Gap Analysis, Study Plan, and Reassessment</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review all twelve fictional readiness domains and build an honest, evidence-based plan before continuing the portfolio module.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Readiness charter with purpose, scope, evidence, privacy, standards, deadlines, and reassessment rules.</li>
                <li>Twelve-domain readiness map with knowledge, application, explanation, validation, transfer, and portfolio evidence.</li>
                <li>Quiz, lab, report, diagram, communication, reflection, and artifact evidence register.</li>
                <li>Error log with misconception, cause, correction, targeted practice, result, and reassessment date.</li>
                <li>Top three priority gaps with evidence, risk, dependency, study action, success measure, and deadline.</li>
                <li>Mixed fictional practice plan using retrieval, interleaving, scenario application, feedback, and transfer.</li>
                <li>Reassessment dashboard with updated level, supporting evidence, remaining limitation, and next action.</li>
                <li>Leadership-style readiness summary, personal reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fictional and privacy-safe evidence. Do not practice on real systems, suspicious messages, credentials,
            company logs, employee records, school records, cloud resources, incidents, suppliers, websites, applications, or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Learner Wants to Review Only the Lowest Quiz Scores"
          scenario="The fictional learner has high quiz scores but repeated applied errors in impact language, inherited access, and case boundaries."
          choices={[
            { label: "Choice A", response: "Prioritize gaps using multiple evidence types, including quizzes, labs, reports, explanations, validation, transfer, and portfolio quality.", outcome: "Best readiness choice. Applied weaknesses remain visible even when recall scores are strong.", tone: "best" },
            { label: "Choice B", response: "Review only the lowest quiz scores.", outcome: "Incomplete. Quiz scores do not reveal every applied skill gap.", tone: "risk" },
            { label: "Choice C", response: "Skip review because the overall average is high.", outcome: "Unsafe for readiness. Repeated misconceptions should be corrected before the capstone.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="The Study Plan Includes Every Module Every Day"
          scenario="The fictional plan lists dozens of daily tasks, no priority gaps, no success measures, and no reassessment date."
          choices={[
            { label: "Choice A", response: "Select three priority gaps, assign specific safe practice actions, define success measures and deadlines, and reassess after a delay.", outcome: "Best planning choice. The plan becomes focused, measurable, and realistic.", tone: "best" },
            { label: "Choice B", response: "Keep the plan because more tasks always create more learning.", outcome: "Weak. Overloaded plans reduce focus and make progress difficult to measure.", tone: "risk" },
            { label: "Choice C", response: "Remove all difficult topics and review only demonstrated domains.", outcome: "Weak. Priority gaps would remain unresolved.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Intermediate Knowledge Review Checklist"
          items={[
            "I can review all twelve fictional readiness domains across modules I1–I16.",
            "I can distinguish fictional knowledge recall, applied skill, communication, validation, transfer, and portfolio evidence.",
            "I can rate readiness with evidence instead of confidence, completion, speed, or one score.",
            "I can identify fictional misconceptions, causes, corrections, targeted practice, success measures, and reassessment dates.",
            "I can prioritize fictional gaps by impact, frequency, dependency, transfer value, and capstone importance.",
            "I can use fictional retrieval, interleaving, application, feedback, revision, reassessment, and transfer.",
            "I can preserve fictional evidence limits, owner authority, case boundaries, audience needs, validation, and residual risk.",
            "I can create a focused fictional study plan with realistic deadlines and measurable outcomes.",
            "I can produce a fictional readiness summary and portfolio artifact that accurately reflects strengths and gaps.",
            "I will use only fictional evidence and never expose or affect real credentials, systems, messages, logs, employee data, school records, suppliers, cloud resources, incidents, or private information.",
          ]}
        />

        <MiniQuiz title="I17.1 Mini Quiz: Intermediate Knowledge Review" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Intermediate Knowledge Review Package. Include the review charter, twelve-domain readiness map, mastery-evidence register, confidence-versus-evidence comparison, error log, misconception analysis, top-three gap priorities, mixed practice plan, deadlines, success measures, reassessment dashboard, updated readiness levels, leadership-style readiness summary, personal reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional scores, systems, identities, evidence, dates, artifacts, results, and reflections.",
            "Include both strengths and gaps so the artifact demonstrates honest professional self-assessment.",
            "Do not rate a domain as demonstrated without recall, application, explanation, ownership, validation, and transfer evidence.",
            "Show how your plan changes after feedback and reassessment.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Intermediate readiness requires more than lesson completion or quiz recall.",
            "Knowledge, applied skill, communication, validation, transfer, and portfolio quality should be reviewed separately.",
            "Misconceptions and errors are useful when they lead to targeted correction and reassessment.",
            "Mixed fictional scenarios reveal whether the learner can select and transfer the right defensive workflow.",
            "A realistic study plan focuses on a small number of measurable priority gaps.",
            "Readiness evidence should preserve ownership, impact limits, validation, privacy, and residual uncertainty.",
            "Portfolio artifacts must be fully fictional and should never expose or affect real systems or private data.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I17</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}