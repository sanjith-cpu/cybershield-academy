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
const previousLesson = `${modulePath}/intermediate-knowledge-review`;
const nextLesson = `${modulePath}/writing-an-incident-report`;

const objectives = [
  "Define a fictional defender-portfolio artifact purpose, target audience, learning claim, scope, evidence boundary, privacy rule, review standard, and final presentation format.",
  "Select fictional work that demonstrates defensive reasoning, evidence handling, case boundaries, ownership, communication, validation, ethics, reflection, and improvement rather than technical volume alone.",
  "Transform fictional logs, timelines, findings, diagrams, reports, risk recommendations, communication samples, and validation records into a clear professional artifact.",
  "Distinguish fictional artifact evidence, explanation, reflection, decoration, unsupported claims, private information, and portfolio-safe sanitization.",
  "Create a polished fictional defender-portfolio artifact with a project brief, evidence register, analytical narrative, decisions, visual support, outcomes, reflection, quality review, and safety statement."
];
const vocabulary = [
  [
    "Portfolio artifact",
    "A fictional portfolio term meaning a privacy-safe work sample proving defensive knowledge, applied reasoning, communication, validation, ethics, and growth."
  ],
  [
    "Learning claim",
    "A fictional portfolio term meaning a precise statement of the skill the artifact is intended to demonstrate."
  ],
  [
    "Artifact audience",
    "A fictional portfolio term meaning the teacher, reviewer, mentor, admissions reader, competition judge, partner, or technical reader evaluating the work."
  ],
  [
    "Project brief",
    "A fictional portfolio term meaning the problem, purpose, audience, scope, constraints, safety rules, deliverables, and success criteria."
  ],
  [
    "Evidence register",
    "A fictional portfolio term meaning an index linking claims to logs, timelines, findings, diagrams, decisions, reports, validation, and reflection."
  ],
  [
    "Analytical narrative",
    "A fictional portfolio term meaning the explanation connecting question, evidence, interpretation, decision, action, validation, and learning."
  ],
  [
    "Artifact component",
    "A fictional portfolio term meaning a section such as a diagram, timeline, evidence table, finding, recommendation, communication, validation record, or reflection."
  ],
  [
    "Traceability",
    "A fictional portfolio term meaning the connection among a learning claim, evidence identifier, explanation, decision, result, and reviewer conclusion."
  ],
  [
    "Portfolio sanitization",
    "A fictional portfolio term meaning the process of replacing or removing real names, systems, accounts, logs, messages, incidents, suppliers, dates, screenshots, and confidential details."
  ],
  [
    "Design hierarchy",
    "A fictional portfolio term meaning the use of headings, spacing, labels, sequence, emphasis, and grouping so readers understand what matters first."
  ],
  [
    "Decision usefulness",
    "A fictional portfolio term meaning how well an artifact helps a reader understand the issue, evidence, impact, action, validation, and next step."
  ],
  [
    "Reflection",
    "A fictional portfolio term meaning an explanation of what was learned, what was difficult, what changed after feedback, what remains uncertain, and what improves next."
  ],
  [
    "Version history",
    "A fictional portfolio term meaning a record of revisions, reviewer feedback, changes, approvals, and final status."
  ],
  [
    "Quality review",
    "A fictional portfolio term meaning a check for accuracy, traceability, clarity, privacy, accessibility, consistency, design, unsupported claims, and audience fit."
  ],
  [
    "Portfolio-safe visual",
    "A fictional portfolio term meaning a diagram, dashboard, timeline, or table using invented systems, identities, evidence, dates, labels, and outcomes."
  ],
  [
    "Artifact defense",
    "A fictional portfolio term meaning a short presentation explaining the purpose, evidence, decisions, limitations, learning, and improvement behind the work."
  ]
];
const artifactTypes = [
  {
    "type": "Defensive investigation package",
    "claim": "Demonstrates fictional evidence collection, source validation, timeline normalization, findings, confidence, limits, ownership, and next actions.",
    "components": "Core components include project brief, evidence register, timeline, findings matrix, case-boundary map, decisions, validation, and final report.",
    "reviewer_question": "Can the student explain what each record proves and does not prove?",
    "risk": "Common risk: too much raw data without reasoning.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Phishing triage artifact",
    "claim": "Demonstrates fictional sender, routing, authentication, content, business context, campaign, user interaction, and guidance analysis.",
    "components": "Core components include message comparison, evidence matrix, user-action record, disposition, communication, and detection feedback.",
    "reviewer_question": "Can the student explain the difference among a click, credential entry, compromise, and campaign impact?",
    "risk": "Common risk: using or opening real suspicious content.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "IAM review artifact",
    "claim": "Demonstrates fictional identity legitimacy, direct and inherited access, least privilege, separation of duties, exceptions, lifecycle, ownership, and validation.",
    "components": "Core components include identity inventory, effective-access map, decision register, owner communication, remediation, and validation.",
    "reviewer_question": "Can the student explain why recent use does not automatically justify access?",
    "risk": "Common risk: showing real account names or permissions.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Web or cloud defense review",
    "claim": "Demonstrates fictional control-state review, exposure reasoning, shared responsibility, business context, rollback, validation, and residual risk.",
    "components": "Core components include architecture diagram, control matrix, evidence register, findings, owner map, action plan, and validation.",
    "reviewer_question": "Can the student explain the difference among weakness, possible exposure, confirmed access, and disclosure?",
    "risk": "Common risk: turning the artifact into real-system testing instructions.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Incident-response tabletop",
    "claim": "Demonstrates fictional readiness, declaration criteria, authority, continuity, communication, recovery, closure, and lessons learned.",
    "components": "Core components include exercise charter, inject log, decision register, communication matrix, recovery criteria, and after-action plan.",
    "reviewer_question": "Can the student explain the difference among proposed, authorized, completed, and validated actions?",
    "risk": "Common risk: making exercise decisions look like real operational actions.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Risk recommendation brief",
    "claim": "Demonstrates fictional likelihood, impact, control state, business context, options, ownership, treatment, validation, and residual risk.",
    "components": "Core components include risk statement, evidence, assumptions, scoring rationale, treatment options, owner decision, and success measures.",
    "reviewer_question": "Can the student explain why the recommendation is proportionate?",
    "risk": "Common risk: presenting technical severity as the complete business risk.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Security diagram package",
    "claim": "Demonstrates fictional architecture, trust boundaries, data flows, identities, controls, evidence sources, owners, risks, assumptions, and limitations.",
    "components": "Core components include diagram, legend, annotations, evidence references, risk points, control notes, and reviewer explanation.",
    "reviewer_question": "Can the student explain whether a new reader understands the system and defensive question?",
    "risk": "Common risk: a polished visual without analytical meaning.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  },
  {
    "type": "Integrated capstone artifact",
    "claim": "Demonstrates fictional multi-domain evidence handling, case boundaries, priority, communication, risk, validation, reporting, reflection, and presentation.",
    "components": "Core components include charter, evidence, timeline, diagrams, cases, findings, recommendations, communications, validation, metrics, report, and reflection.",
    "reviewer_question": "Can the student explain the complete reasoning chain from evidence to outcome?",
    "risk": "Common risk: too many sections without purpose or hierarchy.",
    "improvement": "Keep the main question visible, select decision-changing evidence, explain limitations, and validate the final outcome."
  }
];
const artifactStructure = [
  {
    "section": "1. Cover and artifact identity",
    "purpose": "This fictional section should identify the artifact, version, audience, status, date, and safety classification.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "2. Project brief",
    "purpose": "This fictional section should define the problem, purpose, scope, constraints, safety boundary, deliverables, and success criteria.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "3. Learning claims",
    "purpose": "This fictional section should state three to five skills the work is intended to prove.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "4. Evidence register",
    "purpose": "This fictional section should index the fictional sources and connect them to claims.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "5. Analytical narrative",
    "purpose": "This fictional section should explain the reasoning from question through validation.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "6. Visual evidence",
    "purpose": "This fictional section should clarify relationships, sequence, boundaries, ownership, controls, and risk.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "7. Decisions and recommendations",
    "purpose": "This fictional section should show priority, ownership, authority, rationale, deadlines, rollback, and success measures.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "8. Validation and outcomes",
    "purpose": "This fictional section should show whether the intended defensive state was achieved.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "9. Reflection and revision",
    "purpose": "This fictional section should explain difficulty, feedback, changes, learning, and next improvement.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  },
  {
    "section": "10. Appendices and safety review",
    "purpose": "This fictional section should preserve supporting detail, quality checks, version history, and privacy review.",
    "include": "Include only the information needed to support the learning claim, evidence chain, audience decision, and portfolio review.",
    "avoid": "Avoid unsupported certainty, repeated data, vague statements, real identifiers, private material, unsafe instructions, and unexplained technical detail.",
    "quality": "A reviewer can understand the section, trace its evidence, identify its limitation, and explain why it belongs in the artifact."
  }
];
const reviewQuestions = [
  {
    "question": "What learning claim does this section prove?",
    "strong": "Connect the section to a specific fictional skill and evidence identifier.",
    "weak": "Include the section only because other portfolios have one.",
    "review": "Would the artifact still prove the skill without this section?"
  },
  {
    "question": "Is the evidence necessary and sufficient?",
    "strong": "Use enough fictional evidence to support the claim while removing repetition and private detail.",
    "weak": "Include every available record.",
    "review": "Which record changes the reader's conclusion?"
  },
  {
    "question": "Can the reviewer follow the reasoning?",
    "strong": "Show observation, conclusion, alternative, confidence, impact, owner, action, and validation.",
    "weak": "Jump directly from alert to recommendation.",
    "review": "Where is the link between evidence and decision?"
  },
  {
    "question": "Does the visual answer a question?",
    "strong": "Use a visual to clarify relationships, boundaries, sequence, ownership, or risk.",
    "weak": "Add a visual only for decoration.",
    "review": "What becomes easier to understand because of it?"
  },
  {
    "question": "Is the audience clear?",
    "strong": "Use terminology, detail, tone, and requests appropriate for the intended reader.",
    "weak": "Write one version for every possible audience.",
    "review": "What does this reader need to decide or do?"
  },
  {
    "question": "Is the outcome validated?",
    "strong": "Show effective state, service function, source health, owner signoff, monitoring, and residual risk.",
    "weak": "Call the artifact complete because every section exists.",
    "review": "Which evidence proves the intended result?"
  },
  {
    "question": "Is the artifact fully fictionalized?",
    "strong": "Invent all names, systems, dates, identifiers, suppliers, messages, screenshots, and outcomes.",
    "weak": "Copy real material and remove only obvious names.",
    "review": "Could any detail reveal private information?"
  },
  {
    "question": "Does the reflection show growth?",
    "strong": "Explain difficulty, feedback, revision, result, remaining gap, and next action.",
    "weak": "Write only that the student learned a lot.",
    "review": "What changed between the first and final version?"
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the artifact",
    "detail": "Choose purpose, claim, audience, format, scope, privacy boundary, deliverables, deadline, and success criteria.",
    "output": "Artifact project brief"
  },
  {
    "step": "2",
    "title": "Select evidence",
    "detail": "Choose logs, timelines, diagrams, findings, decisions, communications, validation, and reflection that support the claims.",
    "output": "Evidence register"
  },
  {
    "step": "3",
    "title": "Build the reasoning chain",
    "detail": "Connect question, evidence, source health, observation, conclusion, alternatives, confidence, impact, ownership, action, and validation.",
    "output": "Analytical narrative"
  },
  {
    "step": "4",
    "title": "Create visuals and structure",
    "detail": "Organize headings, sequence, diagrams, timelines, matrices, captions, labels, legends, and references.",
    "output": "Artifact draft"
  },
  {
    "step": "5",
    "title": "Tailor for the audience",
    "detail": "Adjust terminology, detail, summaries, requests, accessibility, and presentation style.",
    "output": "Audience-ready version"
  },
  {
    "step": "6",
    "title": "Sanitize and review",
    "detail": "Confirm fictionalization, privacy, traceability, accuracy, consistency, accessibility, and unsupported-claim checks.",
    "output": "Quality-review record"
  },
  {
    "step": "7",
    "title": "Revise and validate",
    "detail": "Use reviewer feedback to strengthen claims, evidence, visuals, decisions, outcomes, limitations, and reflection.",
    "output": "Validated final artifact"
  },
  {
    "step": "8",
    "title": "Present and reflect",
    "detail": "Defend the artifact, answer questions, explain limitations, document learning, and set the next improvement goal.",
    "output": "Presentation and reflection package"
  }
];
const findings = [
  {
    "id": "NBR-PORT-F01",
    "statement": "The fictional draft contains strong technical evidence but does not clearly state which learning claims it proves.",
    "support": "Detailed timeline, findings, and diagrams are present while the introduction contains only a broad cybersecurity goal.",
    "alternative": "The artifact may have been designed for a technical reader who already knows the purpose.",
    "confidence": "High",
    "impact": "Reviewers may miss the student's specific skills and growth.",
    "next": "Add three evidence-linked learning claims and map every major section to one claim."
  },
  {
    "id": "NBR-PORT-F02",
    "statement": "The fictional evidence register is complete but includes too much repeated data.",
    "support": "Twenty-eight records are listed while only twelve change findings, decisions, or validation.",
    "alternative": "The extra records may still support a technical appendix.",
    "confidence": "High",
    "impact": "Important reasoning becomes harder to find.",
    "next": "Move supporting records to an appendix and keep decision-changing evidence in the main artifact."
  },
  {
    "id": "NBR-PORT-F03",
    "statement": "The fictional diagram is polished but does not label trust boundaries, owners, evidence sources, or risk points.",
    "support": "Systems and arrows are clear but the visual lacks a legend, boundary labels, and evidence references.",
    "alternative": "Some missing information may appear in surrounding text.",
    "confidence": "High",
    "impact": "The visual does not independently demonstrate defensive understanding.",
    "next": "Add a legend, trust boundaries, identity paths, controls, owners, risks, and evidence identifiers."
  },
  {
    "id": "NBR-PORT-F04",
    "statement": "The fictional leadership summary contains too much technical detail and no decision request.",
    "support": "The summary includes raw fields and a long event list but omits service status, impact limits, owner action, and next milestone.",
    "alternative": "The summary may have been written for analysts.",
    "confidence": "High",
    "impact": "The intended reader may not understand the required decision.",
    "next": "Rewrite around facts, impact, actions, decision, residual risk, and next update."
  },
  {
    "id": "NBR-PORT-F05",
    "statement": "The fictional portfolio is privacy-safe but the reflection does not show revision or growth.",
    "support": "All content is invented while the reflection only says the project was useful.",
    "alternative": "Reviewer feedback may not have been recorded during development.",
    "confidence": "High",
    "impact": "The artifact demonstrates output but not learning process.",
    "next": "Add the original challenge, feedback, revision, result, remaining gap, and next improvement."
  },
  {
    "id": "NBR-PORT-F06",
    "statement": "The fictional artifact is ready for final presentation after targeted clarity improvements.",
    "support": "Technical accuracy, defensive ethics, validation, fictionalization, and core analysis are strong.",
    "alternative": "A live presentation may reveal additional explanation gaps.",
    "confidence": "Medium-High",
    "impact": "Remaining issues affect clarity rather than core defensive accuracy.",
    "next": "Complete the revisions, perform peer review, rehearse the defense, and record the final version."
  }
];
const commonMistakes = [
  "Building around page count, visual effects, or technical volume instead of a learning claim.",
  "Including every fictional log, alert, table, and screenshot without explaining which evidence changes the conclusion.",
  "Using a polished diagram that lacks boundaries, evidence, owners, risk points, or analytical purpose.",
  "Presenting possible impact as confirmed impact to make the artifact sound dramatic.",
  "Writing the same summary for technical reviewers, leadership, teachers, and portfolio readers.",
  "Listing vague recommendations without rationale, owner, authority, deadline, validation, or success measure.",
  "Treating completed sections as proof that the intended outcome was validated.",
  "Using copied definitions instead of original explanation and application.",
  "Writing reflection without difficulty, feedback, revision, result, or next goal.",
  "Copying or lightly editing real reports, diagrams, logs, screenshots, messages, identities, incidents, or company material.",
  "Removing only passwords while leaving real systems, usernames, domains, timestamps, suppliers, locations, or case details.",
  "Using decoration that makes the artifact harder to read.",
  "Failing to maintain version history, reviewer feedback, and final approval status.",
  "Including instructions that encourage real-system probing, suspicious-content interaction, credential use, or unauthorized testing."
];
const quizQuestions = [
  {
    "question": "What should a fictional defender portfolio artifact prove?",
    "choices": [
      "A specific learning claim supported by evidence, reasoning, communication, validation, ethics, and reflection.",
      "That the student can create the longest document.",
      "That every technical detail is included.",
      "That the fictional incident was severe."
    ],
    "answer": 0,
    "explanation": "A strong artifact demonstrates specific skills through traceable evidence."
  },
  {
    "question": "Why should the main artifact use selected fictional evidence?",
    "choices": [
      "The reader should see the evidence that changes the conclusion while supporting detail can remain in an appendix.",
      "Evidence is unnecessary.",
      "Only one record should ever be shown.",
      "Raw data is more important than explanation."
    ],
    "answer": 0,
    "explanation": "Selection improves clarity without weakening traceability."
  },
  {
    "question": "What makes a fictional security visual useful?",
    "choices": [
      "It answers a clear question and labels systems, flows, boundaries, controls, owners, risks, evidence, and limitations.",
      "It uses many colors.",
      "It includes every possible system.",
      "It replaces written reasoning."
    ],
    "answer": 0,
    "explanation": "A useful visual supports analysis rather than decoration."
  },
  {
    "question": "What belongs in a fictional leadership artifact summary?",
    "choices": [
      "Facts, confirmed and possible impact, current actions, service status, decision needed, residual risk, and next milestone.",
      "Every raw log field.",
      "Only the worst-case scenario.",
      "No mention of uncertainty."
    ],
    "answer": 0,
    "explanation": "Leadership needs concise decision-ready information."
  },
  {
    "question": "What makes fictional reflection strong?",
    "choices": [
      "It explains difficulty, feedback, revision, result, remaining gap, and next improvement.",
      "It says the project was interesting.",
      "It repeats the executive summary.",
      "It avoids discussing mistakes."
    ],
    "answer": 0,
    "explanation": "Reflection should demonstrate growth and professional self-assessment."
  },
  {
    "question": "When is a fictional portfolio artifact ready to share?",
    "choices": [
      "After accuracy, traceability, audience fit, fictionalization, privacy, accessibility, validation, consistency, and version review are complete.",
      "When all sections have text.",
      "When the design looks polished.",
      "When one reviewer likes it."
    ],
    "answer": 0,
    "explanation": "Readiness requires quality, safety, and evidence checks."
  },
  {
    "question": "What makes an artifact portfolio-safe?",
    "choices": [
      "All systems, identities, evidence, incidents, messages, suppliers, dates, screenshots, and outcomes are fully invented.",
      "Only passwords are removed.",
      "Real logs are used with different usernames.",
      "A real report is copied with a fictional title."
    ],
    "answer": 0,
    "explanation": "Full fictionalization is required."
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function BuildingADefenderPortfolioArtifactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I17</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 2 of 8</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Portfolio Builder</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I17.2 Building a Defender Portfolio Artifact
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Turn fictional defensive work into a polished, traceable,
            audience-ready, privacy-safe artifact that demonstrates what you
            understand, how you reason, what you decided, how you validated the
            outcome, and how you improved.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I17: Intermediate Capstone and Portfolio"
          lessonTitle="Building a Defender Portfolio Artifact"
          lessonNumber={2}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional systems, identities, evidence, messages, incidents, suppliers, dates, diagrams, screenshots, actions, and outcomes.",
            "I will not copy, lightly edit, upload, or expose real logs, credentials, reports, diagrams, source code, private messages, school records, employee records, cloud resources, company systems, or confidential project material.",
            "I will build the artifact around a specific learning claim rather than technical volume, page count, or decoration.",
            "I will connect fictional evidence to reasoning, decisions, ownership, validation, limitations, reflection, and improvement.",
            "I will not access, test, scan, change, or investigate real systems or suspicious content for portfolio material.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="A Portfolio Should Show How You Think, Not Just What You Collected">
          <p className="leading-8">
            A fictional student submits a forty-page portfolio containing
            dashboards, timelines, diagrams, and logs. The work looks
            impressive, but the reviewer cannot identify the main question,
            learning claim, decision, evidence limit, validation result, or
            student reflection. A professional artifact selects evidence and
            explains the complete reasoning chain.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak artifact</p>
              <p className="mt-2 leading-7">Include everything, rely on decoration, repeat alert titles, hide uncertainty, use vague recommendations, skip validation, and write a generic reflection.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional artifact</p>
              <p className="mt-2 leading-7">Define claims, select evidence, show reasoning, use purposeful visuals, tailor communication, validate outcomes, preserve privacy, document revision, and reflect honestly.</p>
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

        <SectionCard eyebrow="Why This Matters" title="A Strong Artifact Makes Learning Visible to Another Person">
          <p className="leading-8">
            Fictional defensive work becomes portfolio-ready when a reviewer
            can understand the purpose, evidence, reasoning, owner decisions,
            impact limits, action, validation, reflection, and improvement
            without needing the student to explain every missing connection.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Claimā€“Evidenceā€“Reasoningā€“Outcomeā€“Reflection Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Claim", "Which fictional technical, analytical, communication, validation, ethical, or growth skill should the artifact prove?"],
              ["Evidence", "Which fictional records, diagrams, timelines, findings, decisions, reports, communications, and tests support the claim?"],
              ["Reasoning", "How did the student move from question to evidence, conclusion, alternatives, impact, owner, and action?"],
              ["Outcome", "Which fictional access, configuration, source, user, service, communication, and residual-risk evidence validates the result?"],
              ["Reflection", "What was difficult, what feedback changed the work, what improved, what remains uncertain, and what happens next?"],
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
          <h2 className="mt-2 text-2xl font-bold text-white">Portfolio Design, Evidence, and Review Terms</h2>
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Artifact Options</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Defender Portfolio Artifact Types</h2>
          <div className="mt-6 grid gap-5">
            {artifactTypes.map((item) => (
              <article key={item.type} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.type}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Learning claim", item.claim],
                    ["Core components", item.components],
                    ["Reviewer question", item.reviewer_question],
                    ["Common risk", item.risk],
                    ["Improvement", item.improvement],
                  ].map(([label, detail]) => (
                    <div key={`${item.type}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Artifact Architecture</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Ten Sections of a Strong Fictional Portfolio Artifact</h2>
          <div className="mt-6 grid gap-5">
            {artifactStructure.map((item) => (
              <article key={item.section} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.section}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Include", item.include],
                    ["Avoid", item.avoid],
                    ["Quality standard", item.quality],
                  ].map(([label, detail]) => (
                    <div key={`${item.section}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Reviewer Questions</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Questions before Finalizing the Artifact</h2>
          <div className="mt-6 grid gap-5">
            {reviewQuestions.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{item.question}</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong artifact</p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak artifact</p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Review question</p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Portfolio Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Idea to Artifact Defense</h2>
          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
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
          title="Fake Defender Portfolio Quality Dashboard"
          subtitle="Training dashboard for fictional artifact review only."
          metrics={[
            { label: "Learning claims", value: "3", note: "The fictional artifact demonstrates evidence analysis, audience communication, and outcome validation." },
            { label: "Decision-changing evidence", value: "12", note: "Supporting fictional records remain in an appendix while the main artifact stays focused." },
            { label: "Privacy review issues", value: "0", note: "Every fictional identity, system, log, message, supplier, incident, date, screenshot, and outcome is invented." },
          ]}
        />

        <FakeAlertCard
          title="Portfolio Draft Contains Strong Evidence but Weak Learning Claims"
          severity="Medium"
          time="5:08 PM"
          source="Fake Portfolio Quality Console"
          details="A fictional artifact includes timelines, diagrams, findings, and reports but does not clearly state what the student learned or which evidence proves each skill."
          recommendation="Define three learning claims, map each section to evidence, remove repeated data, label visual boundaries and risks, rewrite the leadership summary, strengthen reflection, and complete privacy and accessibility review."
        />

        <FakeLogPanel
          title="Fake Portfolio Revision Timeline"
          logs={[
            "09:00 BRIEF audience='teacher-and-reviewer'",
            "09:15 CLAIM evidence-analysis='defined'",
            "09:30 CLAIM communication='defined'",
            "09:45 CLAIM validation='defined'",
            "10:00 EVIDENCE records='28'",
            "10:15 EVIDENCE main-set='12'",
            "10:30 DIAGRAM trust-boundaries='missing'",
            "10:45 SUMMARY leadership='too-technical'",
            "11:00 REFLECTION revision='missing'",
            "11:15 PRIVACY fictionalization='verified'",
            "11:30 REVIEW traceability='partial'",
            "11:45 REVISION diagram-labels='added'",
            "12:00 REVISION leadership-summary='rewritten'",
            "12:15 REVISION reflection='expanded'",
            "12:30 REVIEW accessibility='passed'",
            "12:45 FINAL artifact='presentation-ready'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Portfolio Findings</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Quality Findings</h2>
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
          title="Is the Forty-Page Artifact Automatically Stronger?"
          evidence={[
            "The fictional artifact contains twenty-eight evidence records.",
            "Only twelve records change a finding, decision, or validation result.",
            "Three learning claims are not stated clearly.",
            "The diagram lacks trust boundaries and evidence references.",
            "Technical analysis and privacy controls are strong.",
            "The reflection does not explain revision or growth.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The artifact has strong content but needs clearer claims, selected evidence, purposeful visuals, and reflection before final presentation.",
            "The artifact is automatically excellent because it is long.",
            "The artifact should remove all evidence.",
            "Technical accuracy makes audience clarity unnecessary.",
          ]}
          bestAnswer={0}
          explanation="Artifact quality depends on purpose, evidence, reasoning, audience, validation, privacy, and reflection rather than length."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken a Defender Portfolio Artifact">
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Fictional Defender Portfolio Artifact">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p>
              <h3 className="mt-3 text-xl font-black text-white">Claims, Evidence, Reasoning, Visuals, Outcomes, and Reflection</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Select one fictional Intermediate defensive project and turn it
                into a polished artifact another person can understand and evaluate.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Artifact cover, identity, version, audience, purpose, safety classification, and project brief.</li>
                <li>Three to five learning claims linked to specific evidence and artifact sections.</li>
                <li>Evidence register with relevance, source health, limitations, artifact location, and claim mapping.</li>
                <li>Analytical narrative covering question, observations, conclusions, alternatives, confidence, impact, owners, actions, and validation.</li>
                <li>At least two purposeful fictional visuals with legends, boundaries, labels, evidence references, risks, and reviewer notes.</li>
                <li>Decision and recommendation table with rationale, owner, authority, deadline, dependency, rollback, validation, and residual risk.</li>
                <li>Audience-ready summary, outcome validation, quality checklist, version history, and privacy review.</li>
                <li>Reflection, artifact-defense notes, reviewer questions, final revision, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only fully fictional material. Do not copy, lightly edit,
            expose, or recreate real systems, credentials, logs, messages,
            reports, diagrams, source code, suppliers, incidents, screenshots,
            employee records, school records, or confidential project details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Student Wants to Include Every Fictional Log Record"
          scenario="The main artifact contains twenty-eight records, but only twelve affect the findings, decisions, or validation."
          choices={[
            { label: "Choice A", response: "Keep decision-changing evidence in the main artifact, move supporting records to an appendix, and explain the selection criteria.", outcome: "Best portfolio choice. The artifact remains focused and traceable.", tone: "best" },
            { label: "Choice B", response: "Keep all records in the main section because more evidence always looks stronger.", outcome: "Weak. Repetition can hide the reasoning and important evidence.", tone: "risk" },
            { label: "Choice C", response: "Remove all evidence and keep only conclusions.", outcome: "Weak. Claims would no longer be traceable.", tone: "risk" },
          ]}
        />

        <ScenarioDecisionLab
          title="A Reviewer Requests the Original Real Screenshot"
          scenario="The fictional artifact demonstrates the concept, but the requested original material would expose systems, identities, and private organizational context."
          choices={[
            { label: "Choice A", response: "Use a fully invented portfolio-safe visual, explain the sanitization, and preserve only the professional learning claim.", outcome: "Best privacy choice. The artifact remains useful without exposing private material.", tone: "best" },
            { label: "Choice B", response: "Share the real screenshot after hiding the password field.", outcome: "Unsafe. Other sensitive context may remain visible.", tone: "risk" },
            { label: "Choice C", response: "Copy the screenshot and replace only the organization name.", outcome: "Unsafe. Light editing does not fully fictionalize the material.", tone: "risk" },
          ]}
        />

        <DefenderChecklist
          title="Defender Portfolio Artifact Checklist"
          items={[
            "I can define a fictional artifact purpose, audience, learning claim, scope, privacy boundary, deliverables, deadline, and success criteria.",
            "I can select fictional evidence that directly supports claims without overwhelming the reader.",
            "I can connect fictional question, evidence, reasoning, decision, owner, action, validation, and reflection.",
            "I can create fictional diagrams, timelines, matrices, dashboards, and tables with clear analytical purpose.",
            "I can tailor fictional terminology, detail, summaries, action requests, and presentation style to the audience.",
            "I can distinguish fictional control weakness, possible exposure, confirmed access, confirmed impact, validation, and residual risk.",
            "I can write fictional recommendations with rationale, owner, authority, deadline, dependency, rollback, and success measure.",
            "I can complete fictional accuracy, traceability, privacy, accessibility, consistency, unsupported-claim, and version reviews.",
            "I can explain fictional feedback, revision, outcome, remaining gap, and next improvement.",
            "I will never expose or recreate real credentials, systems, logs, reports, messages, source code, diagrams, suppliers, incidents, screenshots, employee data, school records, or confidential information.",
          ]}
        />

        <MiniQuiz title="I17.2 Mini Quiz: Building a Defender Portfolio Artifact" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Defender Portfolio Artifact Package. Include the cover, artifact identity, version, audience, project brief, three to five learning claims, evidence register, analytical narrative, selected evidence, two purposeful visuals, findings, decision and recommendation table, owner map, validation, audience summary, privacy review, accessibility review, quality checklist, version history, reviewer feedback, final revision, artifact-defense notes, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, logs, messages, incidents, suppliers, diagrams, screenshots, dates, actions, and outcomes.",
            "Make every major section support a specific learning claim.",
            "Select evidence that changes the conclusion and place supporting detail in appendices.",
            "Show what changed after feedback and why the final version is stronger.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A defender portfolio artifact should demonstrate a specific learning claim.",
            "Selected evidence and clear reasoning are more useful than technical volume.",
            "Purposeful visuals should explain relationships, boundaries, sequence, ownership, risk, or validation.",
            "Audience, terminology, detail, and decision requests should be designed intentionally.",
            "Completed sections are not the same as validated outcomes.",
            "Reflection should show difficulty, feedback, revision, growth, remaining gaps, and next action.",
            "Portfolio artifacts must be fully fictional and should never expose or recreate private defensive material.",
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