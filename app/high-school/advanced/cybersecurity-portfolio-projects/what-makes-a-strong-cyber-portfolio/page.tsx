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
const previousLesson = modulePath;
const nextLesson = `${modulePath}/security-diagram-project`;

const objectives = [
  "Explain what a cybersecurity portfolio is and how it differs from a résumé, certificate list, code dump, screenshot folder, or collection of unfinished exercises.",
  "Evaluate portfolio artifacts using evidence quality, reasoning quality, clarity, safety, audience fit, completeness, and professional presentation rather than appearance alone.",
  "Choose evidence that proves what the student understood, decided, documented, and improved while removing private, sensitive, real-world, or unnecessary information.",
  "Write concise artifact context that explains the problem, scope, evidence, reasoning, result, limitations, and lessons learned without exaggerating skill or certainty.",
  "Build a Cyber Portfolio Quality Blueprint that maps future A19 projects to skills, audiences, evidence, revision needs, and safe presentation choices.",
];

const portfolioDefinition = [
  {
    idea: "A portfolio is evidence of applied learning",
    explanation:
      "A strong portfolio does not merely claim that you understand cybersecurity. It shows selected work that demonstrates how you interpreted a problem, used evidence, made a bounded defensive decision, documented your reasoning, and improved the result after review.",
  },
  {
    idea: "A portfolio is curated, not complete",
    explanation:
      "Professionals do not publish every draft, every screenshot, every note, and every exercise. They choose artifacts that best represent the skills they want an audience to understand, then remove noise and explain why each artifact matters.",
  },
  {
    idea: "A portfolio needs context",
    explanation:
      "A diagram without explanation may look polished but reveal little about the student's reasoning. A useful artifact explains the objective, constraints, decisions, assumptions, evidence, tradeoffs, outcome, and remaining limitations.",
  },
  {
    idea: "A portfolio should be truthful",
    explanation:
      "A student should clearly distinguish original work, guided exercises, team contributions, supplied fictional evidence, templates, and revisions. Professional credibility depends on accurate attribution and honest scope.",
  },
  {
    idea: "A portfolio should be safe to share",
    explanation:
      "Portfolio work should never reveal real credentials, private records, internal network information, live security findings, proprietary data, confidential client material, or details that could create risk for another person or organization.",
  },
];

const strongArtifactDimensions = [
  {
    dimension: "Purpose",
    question: "What problem or learning goal does this artifact address?",
    strong:
      "The reader can understand why the artifact exists before reading technical details.",
    weak:
      "The artifact appears without a goal, prompt, scenario, or reason for inclusion.",
  },
  {
    dimension: "Scope",
    question: "What was included, excluded, assumed, or constrained?",
    strong:
      "The artifact states boundaries and does not pretend to cover more than it actually covers.",
    weak:
      "The student uses broad claims such as 'secured the whole environment' without evidence or authorization.",
  },
  {
    dimension: "Evidence",
    question: "What information supports the conclusions?",
    strong:
      "Relevant fictional logs, diagrams, requirements, observations, metrics, or case records are referenced clearly.",
    weak:
      "Conclusions appear with no supporting evidence or depend only on visual polish.",
  },
  {
    dimension: "Reasoning",
    question: "Can the reader see how evidence became a decision?",
    strong:
      "The artifact explains alternatives, tradeoffs, uncertainty, and why the final recommendation was chosen.",
    weak:
      "The artifact lists controls or answers without explaining why they fit the case.",
  },
  {
    dimension: "Result",
    question: "What did the artifact produce or clarify?",
    strong:
      "The outcome is specific: a review, decision, diagram, report, recommendation, or validated learning result.",
    weak:
      "The artifact ends without a conclusion, recommendation, or explanation of what was learned.",
  },
  {
    dimension: "Limitations",
    question: "What remains uncertain or outside the artifact?",
    strong:
      "The student identifies evidence gaps, assumptions, untested ideas, and boundaries of the conclusion.",
    weak:
      "The artifact presents every conclusion as complete and certain.",
  },
  {
    dimension: "Presentation",
    question: "Can the intended audience understand the work efficiently?",
    strong:
      "Headings, labels, diagrams, summaries, tables, and supporting detail are organized around reader needs.",
    weak:
      "The page is a wall of text, unexplained screenshots, raw logs, or decorative elements with no hierarchy.",
  },
  {
    dimension: "Safety and integrity",
    question: "Is the work ethical, attributable, and safe to share?",
    strong:
      "The artifact uses fictional data, removes sensitive details, credits sources or templates, and states the student's actual role.",
    weak:
      "The artifact contains private information, real credentials, copied work presented as original, or unsupported claims of access or impact.",
  },
];

const portfolioVsOtherDocuments = [
  {
    type: "Résumé",
    purpose: "Summarizes experience, education, skills, and achievements quickly.",
    portfolioDifference:
      "The portfolio provides deeper evidence behind selected claims by showing work products and reasoning.",
  },
  {
    type: "Certificate list",
    purpose: "Shows that a learner completed or passed defined training or assessment.",
    portfolioDifference:
      "A certificate can support credibility, but it does not replace evidence of how the learner applies concepts.",
  },
  {
    type: "Git repository",
    purpose: "Stores code, version history, documentation, and project files.",
    portfolioDifference:
      "A repository may be one portfolio source, but a portfolio still needs curation, explanation, safe context, and audience-focused presentation.",
  },
  {
    type: "Lab folder",
    purpose: "Stores exercises, notes, screenshots, and class outputs.",
    portfolioDifference:
      "A portfolio selects the strongest learning evidence from the folder and revises it into a coherent artifact.",
  },
  {
    type: "Presentation",
    purpose: "Communicates a topic or decision to an audience in a limited time.",
    portfolioDifference:
      "A presentation can be a portfolio artifact, but the portfolio should explain the context, student's contribution, evidence, and outcome.",
  },
];

const evidenceTypes = [
  {
    type: "Artifact evidence",
    meaning:
      "The actual product: a fictional architecture diagram, incident report, threat model, risk assessment, detection plan, policy draft, cloud review, or presentation.",
  },
  {
    type: "Reasoning evidence",
    meaning:
      "Notes, decision records, assumptions, tradeoff analysis, or a short explanation that shows why the artifact looks the way it does.",
  },
  {
    type: "Process evidence",
    meaning:
      "Version history, review notes, before-and-after changes, checklists, or revision records that show improvement rather than a single unexplained final file.",
  },
  {
    type: "Validation evidence",
    meaning:
      "Safe checks showing that the work meets its stated requirements—for example, a diagram review checklist, rubric result, consistency check, or fictional stakeholder feedback.",
  },
  {
    type: "Reflection evidence",
    meaning:
      "A concise explanation of what the learner discovered, what they would improve, and which limitations remain.",
  },
];

const audienceProfiles = [
  {
    audience: "Teacher or evaluator",
    caresAbout:
      "Learning objectives, accuracy, reasoning, completeness, rubric alignment, and evidence that the student understands the work.",
    presentation:
      "Include enough explanation to demonstrate mastery and make the student's decisions traceable.",
  },
  {
    audience: "College or scholarship reviewer",
    caresAbout:
      "Initiative, intellectual depth, progression, communication, persistence, ethical judgment, and meaningful project outcomes.",
    presentation:
      "Prioritize a few strong artifacts with concise context, growth, and clear ownership of the work.",
  },
  {
    audience: "Internship or early-career reviewer",
    caresAbout:
      "Problem solving, defensive reasoning, documentation, communication, technical foundations, judgment, and ability to learn.",
    presentation:
      "Use professional summaries, evidence-backed decisions, readable artifacts, and honest descriptions of scope.",
  },
  {
    audience: "Technical peer",
    caresAbout:
      "Assumptions, evidence, architecture, tradeoffs, methodology, limitations, and whether another person can understand the work.",
    presentation:
      "Provide more technical detail while still avoiding unnecessary raw data or unsafe operational information.",
  },
  {
    audience: "Nontechnical leader",
    caresAbout:
      "What the project addressed, why it mattered, what was learned, what decision resulted, and what risk or value was demonstrated.",
    presentation:
      "Lead with meaning and outcomes; keep technical details available but secondary.",
  },
];

const artifactContextModel = [
  {
    label: "Problem",
    explanation:
      "State the fictional or educational challenge in one or two sentences. The reader should understand what needed to be solved or reviewed.",
  },
  {
    label: "Scope",
    explanation:
      "Describe the boundaries, supplied evidence, assumptions, and what the project intentionally did not do.",
  },
  {
    label: "Approach",
    explanation:
      "Explain the major reasoning method, comparison, review criteria, or design choices without turning the portfolio into a giant lesson transcript.",
  },
  {
    label: "Evidence",
    explanation:
      "Reference the most important supporting records, requirements, diagrams, metrics, or observations.",
  },
  {
    label: "Decision or result",
    explanation:
      "State the recommendation, design, finding, final artifact, or conclusion produced by the work.",
  },
  {
    label: "Limitations",
    explanation:
      "Keep uncertainty visible. Explain missing evidence, assumptions, fictional constraints, or areas not validated.",
  },
  {
    label: "Reflection",
    explanation:
      "Briefly explain what improved, what you learned, and what you would change in a later version.",
  },
];

const curationPrinciples = [
  "Choose artifacts that prove different skills rather than repeating the same skill ten times.",
  "Prefer a smaller set of well-explained work over a large gallery of unexplained files.",
  "Show progression when it adds value: an early draft, review feedback, and improved final version can demonstrate learning.",
  "Use consistent titles, dates, artifact summaries, and safe fictional labels so the portfolio feels intentional.",
  "Remove redundant screenshots, raw logs, duplicate diagrams, temporary files, and notes that do not help the audience understand the work.",
  "Keep technical depth available, but lead with a concise summary so a reader can understand the purpose before diving deeper.",
];

const safetyReview = [
  {
    risk: "Real credentials or secrets",
    decision:
      "Never include passwords, access tokens, API keys, private keys, session material, recovery codes, or screenshots containing them.",
  },
  {
    risk: "Private or identifying information",
    decision:
      "Remove real names, email addresses, student records, addresses, private messages, account details, and personal identifiers unless the material is fictional.",
  },
  {
    risk: "Internal organizational details",
    decision:
      "Do not publish real internal network diagrams, hostnames, private architecture, confidential tickets, live alert details, or nonpublic security findings.",
  },
  {
    risk: "Copied or collaborative work",
    decision:
      "Credit templates, references, teammates, instructors, or supplied case material and explain what part you personally created or changed.",
  },
  {
    risk: "Inflated claims",
    decision:
      "Use accurate language such as 'designed a fictional review,' 'analyzed supplied synthetic evidence,' or 'created a defensive model' instead of claiming unauthorized real-world impact.",
  },
  {
    risk: "Unsafe demonstration material",
    decision:
      "Keep portfolio examples defensive and inert. Do not include exploit instructions, credential attacks, evasion methods, harmful payloads, or operational steps that could be misused.",
  },
];

const northbridgeArtifacts = [
  {
    id: "PF-1901",
    title: "Northbridge Segmentation Diagram",
    currentState:
      "Readable fictional network-defense diagram with labels and trust boundaries, but no project summary.",
    strength:
      "Shows visual architecture skill and defensive organization.",
    gap:
      "The reader cannot tell what design problem was solved, why boundaries were chosen, or what assumptions were used.",
    nextRevision:
      "Add a concise problem statement, scope, key decisions, trust-boundary explanation, limitations, and reflection.",
  },
  {
    id: "PF-1902",
    title: "Incident Tabletop Report",
    currentState:
      "Strong fictional incident timeline and decision log with clear uncertainty labels.",
    strength:
      "Shows evidence handling, communication, decision ownership, and changing confidence.",
    gap:
      "The document is sixteen pages and has no one-paragraph reader orientation.",
    nextRevision:
      "Add an executive summary and a short artifact card that explains the educational scope and student's role.",
  },
  {
    id: "PF-1903",
    title: "Cloud Review Screenshot Set",
    currentState:
      "Twelve screenshots from a fictional mock dashboard with short captions.",
    strength:
      "Shows that several configuration ideas were reviewed.",
    gap:
      "Screenshots dominate the artifact while the reasoning, decision criteria, and final recommendation are unclear.",
    nextRevision:
      "Replace most screenshots with a structured review summary and keep only the few visuals that prove a specific point.",
  },
  {
    id: "PF-1904",
    title: "Risk Assessment Project",
    currentState:
      "Fictional risk register with likelihood, impact, controls, residual risk, treatment, owners, and review triggers.",
    strength:
      "Shows business-oriented defensive reasoning and governance.",
    gap:
      "The portfolio page says 'performed enterprise risk management' even though the exercise used supplied synthetic records.",
    nextRevision:
      "Rewrite the description accurately: 'Built a fictional risk register from supplied synthetic evidence and documented treatment decisions.'",
  },
  {
    id: "PF-1905",
    title: "Detection Plan Draft",
    currentState:
      "Defensive detection design using fictional signals, context enrichment, expected analyst action, quality metrics, and rollback criteria.",
    strength:
      "Shows detection reasoning without exposing operational attack methods.",
    gap:
      "The draft still contains instructor comments and an outdated first-version conclusion.",
    nextRevision:
      "Resolve comments, remove obsolete text, record the major revision, and publish a clean final version plus a short change note.",
  },
  {
    id: "PF-1906",
    title: "Security Policy Draft",
    currentState:
      "Two-page fictional policy covering ownership, access review, evidence, exceptions, and review dates.",
    strength:
      "Shows concise policy writing and governance thinking.",
    gap:
      "No note explains which audience the policy serves or which controls were intentionally left outside scope.",
    nextRevision:
      "Add audience, purpose, scope, exclusions, and a short rationale for the selected policy requirements.",
  },
];

const dashboardMetrics = [
  {
    label: "Candidate artifacts",
    value: "6",
    note: "Fictional A19 starter set under review",
  },
  {
    label: "Ready to present",
    value: "1",
    note: "Only one artifact currently has context, evidence, and clean presentation",
  },
  {
    label: "Needs context",
    value: "4",
    note: "Several artifacts show work but do not explain reasoning or scope",
  },
  {
    label: "Integrity issue",
    value: "1",
    note: "One description overstates what the student actually did",
  },
  {
    label: "Privacy findings",
    value: "0",
    note: "All examples in this lesson use fictional data",
  },
  {
    label: "Next action",
    value: "Curate",
    note: "Revise descriptions before adding more artifacts",
  },
];

const logPreview = [
  "09:05 | REVIEW | PF-1901 | Strong diagram; project purpose missing.",
  "09:12 | REVIEW | PF-1902 | Evidence quality strong; add reader orientation.",
  "09:20 | REVIEW | PF-1903 | Screenshot-heavy; reasoning not visible.",
  "09:28 | INTEGRITY | PF-1904 | Description overstates real-world scope.",
  "09:36 | REVISION | PF-1905 | Remove unresolved instructor comments before publishing.",
  "09:44 | REVIEW | PF-1906 | Add intended audience and explicit scope.",
  "09:55 | CURATION | SET-19A | Keep six candidates; prioritize revision over adding more files.",
];

const artifactReviewQuestions = [
  "Can a reader understand the problem without opening every supporting file?",
  "Does the artifact make the student's own contribution clear?",
  "Can major conclusions be traced to evidence or requirements?",
  "Does the artifact show reasoning, tradeoffs, or decision criteria rather than only a final answer?",
  "Are assumptions, uncertainty, and limitations visible?",
  "Is the level of technical detail appropriate for the intended audience?",
  "Has unnecessary or sensitive information been removed?",
  "Is attribution accurate for templates, supplied evidence, collaboration, and references?",
  "Does the artifact have a clean final state rather than unresolved comments or contradictory versions?",
  "Can the student explain what they learned and what they would improve?",
];

const revisionWorkflow = [
  {
    stage: "Inventory",
    description:
      "List candidate artifacts and identify the skill, project purpose, intended audience, and current state of each one.",
  },
  {
    stage: "Evaluate",
    description:
      "Review purpose, scope, evidence, reasoning, result, limitations, presentation, safety, and integrity.",
  },
  {
    stage: "Curate",
    description:
      "Choose which artifacts actually strengthen the portfolio. Archive duplicates and weak examples instead of publishing everything.",
  },
  {
    stage: "Revise",
    description:
      "Improve explanations, labels, diagrams, summaries, findings, and final formatting while preserving the original meaning and truthful scope.",
  },
  {
    stage: "Sanitize",
    description:
      "Remove real secrets, private data, internal identifiers, live findings, unnecessary raw records, and any information that should not be shared.",
  },
  {
    stage: "Validate",
    description:
      "Check that links, titles, evidence references, artifact descriptions, attribution, and audience-facing explanations are accurate and consistent.",
  },
  {
    stage: "Reflect",
    description:
      "Add a short learning note that explains what improved, what remains limited, and how the artifact represents the student's growth.",
  },
];

const antiPatterns = [
  {
    antiPattern: "Screenshot museum",
    whyWeak:
      "A page full of screenshots may prove that something was opened, but it usually does not prove the learner understood the problem or made a defensible decision.",
    improve:
      "Keep only visuals that support a specific point and add concise explanation of evidence, reasoning, and result.",
  },
  {
    antiPattern: "Tool-name résumé",
    whyWeak:
      "Listing many tools can make the portfolio broad but shallow when there is no evidence showing what the student understood or produced.",
    improve:
      "Organize around problems solved and skills demonstrated; mention tools only when they matter to the artifact.",
  },
  {
    antiPattern: "Unexplained final answer",
    whyWeak:
      "A correct-looking final diagram or report does not show how the student evaluated alternatives or handled uncertainty.",
    improve:
      "Add a short reasoning section, decision record, or annotated summary of the most important choices.",
  },
  {
    antiPattern: "Everything is critical",
    whyWeak:
      "Inflated language reduces trust. If every artifact is 'enterprise-grade,' 'critical,' or 'complete,' the reader cannot distinguish real evidence from marketing language.",
    improve:
      "Use precise claims tied to what the artifact actually demonstrates.",
  },
  {
    antiPattern: "Raw classroom dump",
    whyWeak:
      "Drafts, temporary files, teacher comments, duplicated exports, and half-finished notes make the portfolio difficult to review.",
    improve:
      "Publish a clean final artifact and optionally one intentional revision comparison when it demonstrates growth.",
  },
  {
    antiPattern: "Hidden limitations",
    whyWeak:
      "Removing uncertainty can make an artifact appear more confident, but professional work is stronger when important assumptions and boundaries remain visible.",
    improve:
      "Include a concise limitations or evidence-gap section where it materially affects the conclusion.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Keep the diagram, add a concise project summary, explain the fictional scope and trust-boundary decisions, identify two major tradeoffs, and include one limitation.",
    outcome:
      "Best choice. It preserves the strong visual while adding the reasoning and context an evaluator needs.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Add ten more screenshots so the page looks more technical.",
    outcome:
      "Caution. More visual evidence does not solve the missing-context problem and may make the artifact harder to review.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Describe the project as a production network redesign even though it was a fictional educational exercise.",
    outcome:
      "Risky. Overstating scope damages professional credibility and misrepresents the work.",
    tone: "risk" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Remove the private material entirely, replace it with fictional placeholders if needed, review the rest of the artifact for sensitive context, and document that the public version was sanitized.",
    outcome:
      "Best choice. Public portfolio evidence should demonstrate the skill without exposing private or real operational information.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Blur only the password while leaving real usernames, internal hostnames, and private ticket details visible.",
    outcome:
      "Caution. Partial redaction can still expose unnecessary sensitive information and should not be the default approach.",
    tone: "caution" as const,
  },
  {
    label: "Choice C",
    response:
      "Publish the original screenshot because showing real information makes the portfolio look more authentic.",
    outcome:
      "Risky. Authenticity does not justify exposing private, confidential, credential, or internal security information.",
    tone: "risk" as const,
  },
];

const labSteps = [
  "Create a fictional portfolio inventory with six to eight candidate artifacts. For each artifact, record title, skill demonstrated, intended audience, current state, and whether it is safe to share.",
  "Choose three artifacts that demonstrate different capabilities—for example architecture reasoning, incident communication, and risk analysis—instead of choosing three nearly identical reports.",
  "Write a two- or three-sentence context statement for each selected artifact covering the problem, fictional scope, and your contribution.",
  "Add an evidence-and-reasoning note that identifies the strongest evidence, one major decision, one tradeoff, and one limitation for each artifact.",
  "Perform a safety review. Confirm that every name, account, system, ticket, alert, address, diagram, log, and record is fictional or intentionally public and appropriate to share.",
  "Perform an integrity review. Confirm that you accurately describe templates, supplied evidence, collaboration, instructor guidance, and what you personally created.",
  "Perform a presentation review. Remove duplicate screenshots, unresolved comments, obsolete drafts, unexplained raw logs, and decorative material that does not support the story.",
  "Create a final Cyber Portfolio Quality Blueprint that records which artifact will be improved in each later A19 lesson and what evidence will show growth.",
];

const challengeCriteria = [
  {
    criterion: "Evidence diversity",
    strong:
      "The selected set demonstrates several different defensive capabilities rather than repeating one assignment format.",
  },
  {
    criterion: "Traceable reasoning",
    strong:
      "Each artifact makes at least one important decision understandable from evidence, assumptions, or requirements.",
  },
  {
    criterion: "Audience fit",
    strong:
      "The amount of technical detail, summary language, and visual explanation match the intended reviewer.",
  },
  {
    criterion: "Professional integrity",
    strong:
      "Descriptions are accurate about scope, collaboration, supplied material, fictional evidence, and the student's contribution.",
  },
  {
    criterion: "Safe publication",
    strong:
      "No private data, credentials, internal security details, live findings, or harmful operational content is exposed.",
  },
  {
    criterion: "Revision evidence",
    strong:
      "The portfolio demonstrates improvement through intentional edits, review notes, or a clear before-and-after explanation where useful.",
  },
];

const checklistItems = [
  "I can explain why a portfolio should prove applied learning instead of only listing claims or tools.",
  "I can distinguish a portfolio artifact from a résumé entry, certificate, screenshot folder, repository, or raw lab output.",
  "I can evaluate an artifact using purpose, scope, evidence, reasoning, result, limitations, presentation, safety, and integrity.",
  "I can identify the intended audience and adjust the level of technical detail without changing the underlying facts.",
  "I can write truthful descriptions of fictional projects, supplied case material, guided labs, collaboration, and my own contribution.",
  "I can remove private, sensitive, internal, credential, and unnecessary information before sharing an artifact.",
  "I can explain why a few strong, curated artifacts are usually more useful than a large unorganized collection.",
  "I can show learning through revision instead of pretending the first draft was perfect.",
  "I can preserve limitations and uncertainty when they materially affect a conclusion.",
  "I can create a Cyber Portfolio Quality Blueprint for the remaining A19 projects.",
];

const quizQuestions = [
  {
    question: "Which description best captures the purpose of a cybersecurity portfolio?",
    choices: [
      "A curated set of work that demonstrates applied skills, reasoning, communication, and growth",
      "A list of every cybersecurity tool the student has heard of",
      "A folder containing every screenshot from every lab",
      "A replacement for all résumés, transcripts, and certificates",
    ],
    answer: 0,
    explanation:
      "A portfolio is curated evidence of applied learning. It can support a résumé or certificate, but it should show work, reasoning, results, and growth rather than simply list claims.",
  },
  {
    question: "A fictional architecture diagram looks polished but has no explanation of the problem, constraints, or design choices. What is the strongest improvement?",
    choices: [
      "Add concise context explaining the problem, scope, major decisions, evidence, tradeoffs, and limitations",
      "Add more decorative icons",
      "Add unrelated screenshots from other lessons",
      "Claim that the diagram represents a production environment",
    ],
    answer: 0,
    explanation:
      "The missing evidence is reasoning and context. Visual polish helps readability, but it does not show why the design exists or how decisions were made.",
  },
  {
    question: "Why should a portfolio identify limitations?",
    choices: [
      "Because professional credibility improves when the artifact accurately shows what the evidence and scope do not establish",
      "Because every artifact must sound uncertain about everything",
      "Because limitations make technical work look less advanced",
      "Because a portfolio should avoid giving any conclusion",
    ],
    answer: 0,
    explanation:
      "Important assumptions, missing evidence, and scope boundaries help a reader judge the strength of the work. The goal is bounded confidence, not vague uncertainty.",
  },
  {
    question: "Which portfolio description is the most professionally accurate for a school project using supplied synthetic evidence?",
    choices: [
      "Built a fictional defensive risk register from supplied synthetic evidence and documented treatment decisions",
      "Performed enterprise-wide risk management for a live company",
      "Secured a real organization from cyberattacks",
      "Eliminated all security risk from the environment",
    ],
    answer: 0,
    explanation:
      "The strongest description accurately states the educational, fictional scope and what the student actually produced without exaggerating authority or impact.",
  },
  {
    question: "What should a student do if a candidate portfolio screenshot contains real credentials or private internal information?",
    choices: [
      "Do not publish it; remove the sensitive material and use safe fictional evidence if the skill still needs to be demonstrated",
      "Publish it because real information proves authenticity",
      "Hide only one field and publish the rest automatically",
      "Post it privately first and make it public later",
    ],
    answer: 0,
    explanation:
      "Sensitive real-world information should not be used as public portfolio evidence. The skill can be demonstrated with fictional, sanitized, or purpose-built safe material.",
  },
  {
    question: "Why is a smaller curated portfolio often stronger than a very large unorganized one?",
    choices: [
      "Because selected artifacts can demonstrate distinct skills clearly without forcing the reader through duplicate or unexplained material",
      "Because technical portfolios should contain only one project",
      "Because reviewers never want technical detail",
      "Because revision is unnecessary when fewer files are shown",
    ],
    answer: 0,
    explanation:
      "Curation helps the reader understand the student's strongest and most diverse evidence. Technical detail can still be available inside each selected artifact.",
  },
  {
    question: "Which combination provides the strongest evidence that a portfolio artifact represents learning rather than only a final answer?",
    choices: [
      "A clear final artifact plus context, reasoning, validation, revision, and reflection",
      "A final screenshot with no explanation",
      "A list of software names used during the project",
      "A claim that the project was difficult",
    ],
    answer: 0,
    explanation:
      "Strong portfolios make the learning process visible enough to understand how evidence and reasoning produced the result and how review improved the work.",
  },
];

const takeaways = [
  "A cybersecurity portfolio is curated evidence of applied learning, not a storage folder for every exercise.",
  "Strong artifacts connect purpose, scope, evidence, reasoning, result, limitations, and reflection.",
  "Audience awareness changes presentation depth, not the underlying facts or integrity of the work.",
  "Screenshots and tool names are supporting evidence only when they help prove a specific skill or decision.",
  "Professional integrity requires accurate attribution, truthful scope, and clear ownership of the student's contribution.",
  "Safe portfolio work removes real credentials, private information, confidential records, internal security details, and harmful operational content.",
  "Revision is evidence of growth; a polished portfolio often comes from improving a useful first draft rather than hiding the learning process.",
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
        A19 Module Home
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

export default function WhatMakesAStrongCyberPortfolioPage() {
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
              A19.1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.1
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            What Makes a Strong Cyber Portfolio
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A cybersecurity portfolio should do more than prove that files were
            created. It should help another person understand what you learned,
            how you reasoned, what evidence you used, what you produced, and how
            your judgment improved.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches the principles behind strong portfolio work
            before you begin the individual A19 projects. Every example uses
            fictional or synthetic material and is designed for safe public
            presentation.
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
          lessonTitle="What Makes a Strong Cyber Portfolio"
          lessonNumber={1}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A19.1 Entry Readiness"
          items={[
            "I understand that a portfolio should represent my own learning and contribution truthfully.",
            "I can keep all examples fictional, synthetic, public, or otherwise safe to share.",
            "I am ready to revise older work instead of treating the first draft as final.",
            "I will prioritize evidence and explanation over flashy presentation alone.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Strong Portfolio Answers the Reader's Most Important Question: What Does This Work Prove?"
        >
          <p className="leading-8">
            Imagine two students both include a network-defense diagram. The
            first student posts the image with the caption “Security
            Architecture Project.” The second explains the fictional problem,
            labels the trust boundaries, identifies the major design tradeoff,
            links the diagram to the requirements, states one limitation, and
            describes what changed after review.
          </p>

          <p className="mt-4 leading-8">
            The second artifact is stronger even if the diagrams look almost
            identical. The difference is not decoration. The difference is
            evidence of thinking.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              The goal of a portfolio is not to make every project look impressive. The goal is to make real learning understandable and credible.
            </p>
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for A19.1">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Concept" title="What a Cybersecurity Portfolio Actually Is">
          <div className="grid gap-5">
            {portfolioDefinition.map((item) => (
              <article
                key={item.idea}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.idea}</h3>
                <p className="mt-3 leading-8 text-slate-300">{item.explanation}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Comparison"
          title="A Portfolio Complements Other Records Instead of Replacing Them"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.16em] text-slate-400">
                <tr>
                  <th className="px-4 py-2">Document</th>
                  <th className="px-4 py-2">Primary purpose</th>
                  <th className="px-4 py-2">Portfolio difference</th>
                </tr>
              </thead>
              <tbody>
                {portfolioVsOtherDocuments.map((item) => (
                  <tr key={item.type} className="bg-slate-950">
                    <td className="rounded-l-2xl border-y border-l border-slate-700 px-4 py-4 font-black text-cyan-100">
                      {item.type}
                    </td>
                    <td className="border-y border-slate-700 px-4 py-4 leading-7 text-slate-300">
                      {item.purpose}
                    </td>
                    <td className="rounded-r-2xl border-y border-r border-slate-700 px-4 py-4 leading-7 text-slate-300">
                      {item.portfolioDifference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="Quality Model" title="Eight Dimensions of a Strong Artifact">
          <p className="leading-8">
            Portfolio quality is not one score. An artifact can be technically
            accurate but poorly explained, visually attractive but weakly
            supported, or deeply reasoned but unsafe to publish. Review the work
            across several dimensions instead of asking only whether it “looks
            professional.”
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {strongArtifactDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">
                  {item.dimension}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-purple-100">
                  Review question: {item.question}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                  <span className="font-black">Strong:</span> {item.strong}
                </div>
                <div className="mt-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-50">
                  <span className="font-black">Weak:</span> {item.weak}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence" title="A Portfolio Needs More Than the Final File">
          <p className="leading-8">
            The final artifact matters, but the strongest evidence often comes
            from the combination of the artifact and a small amount of process,
            reasoning, validation, and reflection evidence. You do not need to
            publish every draft. You do need enough context for the reader to
            understand what the final work represents.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {evidenceTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.type}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Audience" title="The Same Work Can Be Presented at Different Depths">
          <p className="leading-8">
            Audience awareness is not about changing the facts. It is about
            deciding which facts belong first, how much technical detail is
            useful, and what question the reader is trying to answer. A college
            reviewer may care most about growth and initiative. A technical
            peer may care more about assumptions and tradeoffs. Both should see
            truthful evidence.
          </p>

          <div className="mt-6 grid gap-5">
            {audienceProfiles.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-lg font-black text-blue-50">{item.audience}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  <span className="font-black">Usually cares about:</span> {item.caresAbout}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  <span className="font-black">Presentation choice:</span> {item.presentation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Artifact Context" title="Give the Reader a Short Path Through the Work">
          <p className="leading-8">
            A portfolio description should not become another fifty-page lesson.
            The goal is to create a short orientation that helps the reader know
            what to look for in the artifact. The following fields are useful
            because each answers a different reader question.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {artifactContextModel.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-100">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Curation" title="Strong Portfolios Are Selected, Not Dumped">
          <p className="leading-8">
            Curation is a professional decision. You are deciding what the
            portfolio should communicate about your abilities and which pieces
            of evidence best support that message. More files are not
            automatically more convincing.
          </p>

          <div className="mt-6 grid gap-4">
            {curationPrinciples.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safety and Integrity" title="Public Evidence Must Be Safe and Truthful">
          <p className="leading-8">
            Security work often deals with information that should never appear
            in a public student portfolio. The correct goal is not to make real
            private material look anonymous enough. The safer goal is to use
            fictional, synthetic, intentionally public, or purpose-built
            evidence that demonstrates the same learning without creating risk.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {safetyReview.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.risk}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.decision}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Portfolio Readiness Dashboard"
          subtitle="Fictional candidate artifacts, revision needs, and publication quality"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Portfolio Integrity Review Required"
          severity="Medium"
          time="10:10"
          source="Fictional Portfolio Review Queue"
          details="Artifact PF-1904 is technically strong, but its public description claims enterprise-wide real-world risk-management experience even though the project used supplied synthetic evidence in a school scenario."
          recommendation="Keep the artifact, revise the description so the fictional educational scope and student's actual contribution are accurate, and then re-review the portfolio for similar overstatement."
        />

        <FakeLogPanel
          title="Northbridge Fictional Portfolio Review Notes"
          logs={logPreview}
        />

        <Section eyebrow="Case Review" title="Six Candidate Northbridge Artifacts">
          <p className="leading-8">
            Each fictional artifact below contains something worth keeping and
            something worth improving. Portfolio review is not about labeling
            work as good or bad. It is about deciding what the artifact already
            proves, what the reader still cannot see, and what revision would
            make the evidence stronger.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeArtifacts.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Current State
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {item.currentState}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Existing Strength
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strength}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Portfolio Gap
                    </p>
                    <p className="mt-2 text-sm leading-7 text-yellow-50">
                      {item.gap}
                    </p>
                  </div>
                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Next Revision
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {item.nextRevision}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Strong Artifact, Weak Description"
          question="What is the strongest portfolio decision for PF-1904?"
          evidence={[
            "The fictional risk register includes likelihood, impact, controls, residual risk, treatment, owners, and review triggers.",
            "The work used supplied synthetic evidence in an educational scenario.",
            "The portfolio description says the student 'performed enterprise-wide risk management for a live organization.'",
            "No real organization, live environment, or production authority was involved.",
          ]}
          options={[
            "Keep the artifact because it demonstrates useful risk reasoning, but rewrite the description to state the fictional educational scope and the student's actual contribution accurately.",
            "Delete the artifact because any inaccurate description means the underlying work has no value.",
            "Keep the description because stronger wording makes the portfolio more competitive.",
            "Add more technical terms so the scope difference is less noticeable.",
          ]}
          bestAnswer={0}
          explanation="The artifact itself demonstrates useful learning. The problem is the inaccurate public claim. Professional integrity means preserving the work while correcting the description to match the real scope."
        />

        <Section eyebrow="Review Questions" title="Use Questions That Reveal What the Reader Can Actually Learn">
          <div className="grid gap-4 md:grid-cols-2">
            {artifactReviewQuestions.map((item, index) => (
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

        <Section eyebrow="Revision" title="Portfolio Quality Improves Through Deliberate Review">
          <p className="leading-8">
            Revision is not cosmetic cleanup at the end. It is part of the
            evidence. When you notice that a description overstates scope, a
            diagram lacks assumptions, or a report buries its conclusion, the
            correction demonstrates judgment.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {revisionWorkflow.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.stage}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Anti-Patterns" title="Common Portfolio Choices That Hide Learning Instead of Showing It">
          <div className="grid gap-5 md:grid-cols-2">
            {antiPatterns.map((item) => (
              <article
                key={item.antiPattern}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.antiPattern}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  <span className="font-black">Why it is weak:</span> {item.whyWeak}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Improve it:</span> {item.improve}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — A Strong Diagram with No Story"
          scenario="A fictional segmentation diagram is visually clear and technically reasonable, but the portfolio page does not explain the problem, scope, design decisions, evidence, or limitations."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Sensitive Material in a Candidate Artifact"
          scenario="A student notices that an old candidate screenshot contains a real username, an internal hostname, private ticket details, and a credential field from a system they were allowed to view for a different purpose."
          choices={scenarioTwoChoices}
        />

        <Section eyebrow="Safe Fictional Lab" title="Build Your Cyber Portfolio Quality Blueprint">
          <p className="leading-8">
            This lab prepares the structure you will use throughout A19. You are
            not trying to publish the final portfolio today. You are deciding
            what future artifacts should prove and what quality standard each
            one must meet before it is presented.
          </p>

          <div className="mt-6 grid gap-4">
            {labSteps.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Use fictional, synthetic, school-created, or intentionally public
              material only. Do not include real credentials, private records,
              confidential organizational information, live security findings,
              internal network details, or harmful operational instructions.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Screenshot-Heavy Portfolio"
          question="Which revision most directly improves PF-1903?"
          evidence={[
            "PF-1903 contains twelve fictional mock-dashboard screenshots.",
            "The screenshots show several configuration states but do not explain why they matter.",
            "The artifact has no review criteria, final finding, or recommendation.",
            "The intended audience is an internship reviewer who may spend only a few minutes on the artifact.",
          ]}
          options={[
            "Create a concise review summary that explains scope, criteria, evidence, findings, and recommendation, while keeping only the few screenshots that support specific claims.",
            "Add twelve more screenshots so every dashboard tab is represented.",
            "Remove all explanation and let the screenshots speak for themselves.",
            "Describe the screenshots as proof of production cloud administration experience.",
          ]}
          bestAnswer={0}
          explanation="The reader needs reasoning and a clear result. A few well-chosen visuals can support the evidence, but the artifact should not force the audience to reconstruct the student's thinking from screenshots."
        />

        <Section eyebrow="Advanced Challenge" title="Design a Portfolio Set That Proves Range Without Losing Depth">
          <p className="leading-8">
            Create a fictional six-artifact portfolio plan for a student applying
            to an early cybersecurity internship. The set should demonstrate
            different skills while still feeling connected. For each artifact,
            identify the intended audience, primary skill, strongest evidence,
            context summary, one limitation, one revision need, and one safety
            check.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {challengeCriteria.map((item) => (
              <article
                key={item.criterion}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.criterion}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.strong}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A19.1 Portfolio Quality Checklist"
          items={checklistItems}
        />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz
            title="A19.1 Mini Quiz: What Makes a Strong Cyber Portfolio"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Cyber Portfolio Quality Blueprint"
          prompt="Create your A19 Cyber Portfolio Quality Blueprint. Include six to eight candidate artifacts, the skill each one demonstrates, intended audience, fictional or safe evidence source, current quality, strongest proof, missing context, revision priority, safety/integrity check, and the A19 lesson where that artifact will be improved. Finish with a short statement describing what you want a reviewer to understand about your growth by the end of A19."
          tips={[
            "Choose artifacts that demonstrate different capabilities instead of repeating one project type.",
            "Use truthful descriptions of scope, supplied evidence, templates, guidance, and your own contribution.",
            "Record what each artifact proves and what it does not prove.",
            "Prefer fictional or purpose-built evidence over real private or internal material.",
            "Keep revision needs visible so the blueprint becomes a working plan for the rest of A19.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.2?">
          <p className="leading-8">
            A19.2 moves into the Security Diagram Project. Before continuing,
            make sure you can explain what will make that future diagram a
            portfolio artifact rather than merely a picture.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain what a cybersecurity portfolio is meant to prove.",
              "I can evaluate an artifact using evidence, reasoning, context, audience fit, and limitations.",
              "I can distinguish a strong final artifact from a screenshot-heavy or unexplained lab dump.",
              "I can identify what information must never appear in a public student portfolio.",
              "I can describe my own contribution and project scope accurately without exaggeration.",
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

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Blueprint Useful Throughout A19">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use one artifact ID system",
                detail:
                  "Assign stable IDs such as PF-01, PF-02, and PF-03 so revision notes, screenshots, diagrams, and review comments refer to the same artifact consistently.",
              },
              {
                title: "Separate artifact quality from presentation quality",
                detail:
                  "A technically strong artifact can still need a better summary, layout, or audience explanation. Track both instead of treating them as one score.",
              },
              {
                title: "Record the evidence behind every claim",
                detail:
                  "If the portfolio says an artifact demonstrates risk analysis, architecture reasoning, communication, or detection design, identify where that evidence appears.",
              },
              {
                title: "Use revision notes as learning evidence",
                detail:
                  "Record the important changes you made after feedback or self-review. You do not need to preserve every edit, only the revisions that reveal growth.",
              },
              {
                title: "Keep audience notes concise",
                detail:
                  "State who should understand the artifact and what they should learn from it. This will guide how much technical depth belongs in the final presentation.",
              },
              {
                title: "Run a publication safety check",
                detail:
                  "Before calling an artifact ready, confirm that it contains no real credentials, private data, confidential records, live findings, or unsafe operational detail.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
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
            A19.1 portfolio work stays fictional, defensive, privacy-safe, and truthful
          </h2>
          <p className="mt-3 leading-7">
            Do not publish or reuse real credentials, secrets, private personal
            information, confidential tickets, internal network details, live
            security findings, restricted organizational records, or harmful
            operational instructions. Do not misrepresent guided, collaborative,
            supplied, or fictional work as unauthorized real-world security
            activity. The goal is to demonstrate learning safely and accurately.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.1 What Makes a Strong Cyber Portfolio Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a quality standard for the rest of A19: each artifact
            should communicate purpose, evidence, reasoning, result, limitations,
            audience fit, safety, integrity, and growth. Next, A19.2 applies that
            standard to a Security Diagram Project.
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