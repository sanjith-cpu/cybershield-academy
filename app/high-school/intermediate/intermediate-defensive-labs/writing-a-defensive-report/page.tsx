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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-incident-response-tabletop`;
const nextLesson = `${modulePath}/intermediate-multi-step-lab`;

const objectives = [
  "Define a fictional defensive-report purpose, audience, scope, decision need, evidence boundary, privacy limit, owner, deadline, and review standard.",
  "Transform fictional logs, alerts, identity records, cloud evidence, web evidence, supplier context, source-health findings, and incident decisions into accurate report sections.",
  "Distinguish fictional observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, limitations, recommendations, and residual risk.",
  "Write audience-specific fictional technical, service-owner, leadership, user-support, supplier, and portfolio-safe summaries without exposing sensitive information.",
  "Create a complete fictional defensive report with executive summary, scope, methods, evidence register, timeline, findings, recommendations, validation, limitations, appendices, and quality review."
];
const vocabulary = [
  [
    "Report purpose",
    "A fictional statement describing why the document exists, which decision it supports, who will use it, and what outcome is expected."
  ],
  [
    "Audience",
    "The fictional technical, service, leadership, user-support, supplier, risk, recovery, or portfolio reader who needs a particular level of detail."
  ],
  [
    "Scope statement",
    "A fictional boundary covering systems, identities, services, suppliers, data, time period, evidence, exclusions, privacy, and authority."
  ],
  [
    "Executive summary",
    "A fictional concise overview of the issue, confirmed facts, impact, actions, unresolved risk, and decisions needed."
  ],
  [
    "Method",
    "A fictional explanation of how approved evidence was collected, validated, normalized, compared, and reviewed."
  ],
  [
    "Evidence citation",
    "A fictional reference connecting a statement to a specific source, record identifier, timestamp, source-health note, and limitation."
  ],
  [
    "Direct observation",
    "A fictional statement that restates healthy evidence without adding interpretation."
  ],
  [
    "Supported conclusion",
    "A fictional interpretation that follows reasonably from evidence and clearly states confidence and limits."
  ],
  [
    "Alternate explanation",
    "A fictional plausible interpretation that also fits part of the evidence and should be tested or preserved."
  ],
  [
    "Finding",
    "A fictional evidence-limited conclusion with scope, support, confidence, impact, owner, recommendation, validation, and residual risk."
  ],
  [
    "Recommendation",
    "A fictional proposed defensive action connected to a finding, owner, priority, authority, deadline, rollback, and success measure."
  ],
  [
    "Limitation",
    "A fictional evidence, source, time, scope, coverage, privacy, authority, or method boundary that affects what the report can claim."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after corrective action, validation, monitoring, or accepted uncertainty."
  ],
  [
    "Technical appendix",
    "A fictional supporting section containing detailed timelines, evidence tables, field mappings, decision records, and validation results."
  ],
  [
    "Quality review",
    "A fictional peer or owner check for accuracy, traceability, clarity, privacy, consistency, unsupported claims, and decision usefulness."
  ],
  [
    "Portfolio-safe version",
    "A fictional sanitized report that uses invented names, systems, evidence, dates, identifiers, and outcomes while preserving professional structure."
  ]
];
const reportSections = [
  {
    "section": "Title and document control",
    "purpose": "Identify the fictional report, version, author role, reviewer role, date, classification, owner, and distribution boundary.",
    "include": "Report title, fictional case identifier, version, status, prepared by role, reviewed by role, date, and approved audience.",
    "avoid": "Real names, real organizations, real case numbers, confidential labels, or private distribution lists.",
    "quality": "The reader can identify the current approved version and intended audience."
  },
  {
    "section": "Executive summary",
    "purpose": "Give decision-makers the fictional issue, confirmed facts, impact, actions, open risk, and decision request in a short form.",
    "include": "What happened, what is confirmed, what is not confirmed, what was done, current service state, residual risk, and next decision.",
    "avoid": "Raw logs, unexplained acronyms, unsupported certainty, blame, or technical detail that does not support a decision.",
    "quality": "A leadership reader can understand the situation and next step in under two minutes."
  },
  {
    "section": "Scope and exclusions",
    "purpose": "Define the fictional systems, identities, services, suppliers, data, time period, evidence, privacy limits, authority, and excluded questions.",
    "include": "Exact boundaries, review window, approved sources, owners, constraints, assumptions, and out-of-scope items.",
    "avoid": "Broad claims that appear to cover systems or time periods not reviewed.",
    "quality": "Every conclusion can be checked against a clear boundary."
  },
  {
    "section": "Methods",
    "purpose": "Explain the fictional review approach so another authorized reviewer can understand how conclusions were formed.",
    "include": "Source validation, timestamp normalization, correlation, context review, owner confirmation, confidence method, and peer review.",
    "avoid": "Operational details that would expose real systems or create unsafe testing instructions.",
    "quality": "The method is repeatable at a professional level without revealing sensitive implementation details."
  },
  {
    "section": "Evidence register",
    "purpose": "Index the fictional sources used and document source health, relevance, ownership, timing, scope, and limitations.",
    "include": "Evidence identifier, source, event time, collection time, owner, health, relevance, confidence contribution, and limitation.",
    "avoid": "Unnecessary raw content, credentials, private data, real addresses, or unexplained excerpts.",
    "quality": "Each important statement can be traced to one or more evidence identifiers."
  },
  {
    "section": "Timeline",
    "purpose": "Present fictional events, collection, alerts, decisions, actions, communication, recovery, and validation in the correct order.",
    "include": "Normalized timestamps, event type, evidence reference, owner, interpretation, and uncertainty.",
    "avoid": "Mixing event and collection times or inserting unsupported events.",
    "quality": "The sequence remains accurate even when sources were delayed."
  },
  {
    "section": "Findings",
    "purpose": "State fictional observations and supported conclusions with confidence, impact, alternatives, limits, owners, and next action.",
    "include": "Finding identifier, statement, evidence, alternate explanation, confidence, potential impact, confirmed impact, recommendation, and validation.",
    "avoid": "Alert titles presented as conclusions or possible impact presented as confirmed impact.",
    "quality": "Each finding is specific, evidence-limited, actionable, and reviewable."
  },
  {
    "section": "Recommendations and action plan",
    "purpose": "Convert fictional findings into prioritized defensive work with ownership and measurable success.",
    "include": "Action, rationale, owner, priority, authority, deadline, dependency, rollback, validation, and residual risk.",
    "avoid": "Vague advice such as improve security or monitor more closely.",
    "quality": "Every action has an owner, due date, and success measure."
  },
  {
    "section": "Validation and closure",
    "purpose": "Show whether fictional access, configuration, logging, service, communication, and owner outcomes were confirmed.",
    "include": "Validation evidence, owner signoff, failed checks, remaining gaps, monitoring period, closure criteria, and follow-up.",
    "avoid": "Treating a closed ticket or stopped alert as proof of complete resolution.",
    "quality": "The reader can see exactly what is fixed, what remains, and why the case may close or transition."
  },
  {
    "section": "Limitations and residual risk",
    "purpose": "Preserve fictional uncertainty and explain what the evidence could not establish.",
    "include": "Source gaps, incomplete coverage, delayed records, missing owner confirmation, excluded systems, privacy limits, and remaining risk.",
    "avoid": "Hiding uncertainty to make the report sound stronger.",
    "quality": "The report is honest about what remains unknown and how that affects decisions."
  },
  {
    "section": "Appendices",
    "purpose": "Provide fictional supporting detail without overwhelming the main report.",
    "include": "Detailed timeline, evidence matrix, decision register, communication log, validation results, glossary, and portfolio-safety statement.",
    "avoid": "Sensitive raw data, real identifiers, credentials, private messages, or unsafe technical detail.",
    "quality": "The appendices strengthen traceability while preserving privacy and readability."
  }
];
const audienceMatrix = [
  {
    "audience": "Technical analyst",
    "needs": "Fictional evidence identifiers, source health, timeline, field interpretation, alternatives, confidence, actions, and validation.",
    "tone": "Precise, evidence-heavy, and operationally clear.",
    "omit": "Unnecessary leadership narrative and private personal details.",
    "example": "NBR-CLD-01 confirms an unsupported broad-read condition; no covered unauthorized read is confirmed."
  },
  {
    "audience": "Service owner",
    "needs": "Fictional service impact, dependencies, approved changes, business tradeoffs, rollback, continuity, and recovery criteria.",
    "tone": "Decision-focused and connected to service function.",
    "omit": "Long raw logs that do not change the service decision.",
    "example": "The approved storage restriction preserves service availability; validate application access before closure."
  },
  {
    "audience": "Leadership",
    "needs": "Fictional facts, confirmed impact, possible impact, actions, service status, decisions required, residual risk, and next update.",
    "tone": "Concise, calm, accountable, and uncertainty-aware.",
    "omit": "Technical jargon, unsupported worst-case language, and unnecessary evidence detail.",
    "example": "A serious access-control weakness was corrected; no confirmed disclosure appears in covered evidence."
  },
  {
    "audience": "User-support team",
    "needs": "Fictional user impact, approved guidance, escalation path, identity-recovery steps, reporting process, and next update.",
    "tone": "Clear, supportive, and action-oriented.",
    "omit": "Private case details, blame, and technical content users do not need.",
    "example": "One fictional user clicked but entered no information; targeted identity review is complete and account compromise remains unconfirmed."
  },
  {
    "audience": "Supplier owner",
    "needs": "Fictional supplier access status, verified request, service need, evidence required, deadlines, exceptions, and escalation path.",
    "tone": "Formal, specific, and independently verified.",
    "omit": "Unverified contact details, accusations, and unrelated internal evidence.",
    "example": "The supplier exception expired; access remains removed pending a new approved, time-limited request."
  },
  {
    "audience": "Portfolio reviewer",
    "needs": "Fictional professional structure, analytical reasoning, evidence traceability, defensive judgment, privacy, reflection, and improvement.",
    "tone": "Educational, sanitized, and clearly fictional.",
    "omit": "Real organizations, real incidents, real credentials, real systems, or private data.",
    "example": "This artifact uses invented Northbridge evidence to demonstrate evidence-limited defensive reporting."
  }
];
const qualityChecks = [
  {
    "check": "Traceability",
    "question": "Can every important fictional claim be connected to one or more evidence identifiers?",
    "pass": "Each observation, conclusion, impact statement, and recommendation cites the relevant record.",
    "fail": "The report relies on general statements or alert titles without evidence references."
  },
  {
    "check": "Scope accuracy",
    "question": "Do fictional conclusions remain inside the reviewed systems, identities, services, sources, and time window?",
    "pass": "The report states exact boundaries and avoids universal claims.",
    "fail": "The report claims no access occurred anywhere when only one source was reviewed."
  },
  {
    "check": "Timestamp accuracy",
    "question": "Are fictional event, collection, alert, action, communication, and validation times separated?",
    "pass": "Delayed sources are normalized and explained.",
    "fail": "Collection delay creates a false sequence."
  },
  {
    "check": "Impact discipline",
    "question": "Are fictional potential exposure, confirmed access, confirmed disclosure, service impact, and account compromise separated?",
    "pass": "Each impact level is supported or marked unconfirmed.",
    "fail": "A broad policy or click is described as a confirmed breach."
  },
  {
    "check": "Confidence and alternatives",
    "question": "Does each major fictional conclusion include confidence, alternate explanations, and missing evidence?",
    "pass": "The report shows why the conclusion is strongest and what could change it.",
    "fail": "The report presents one interpretation as certain without review."
  },
  {
    "check": "Ownership and authority",
    "question": "Does every fictional recommendation identify the correct owner and approval boundary?",
    "pass": "Identity, service, cloud, supplier, communications, risk, and recovery owners are distinguished.",
    "fail": "The analyst appears to authorize every action."
  },
  {
    "check": "Validation",
    "question": "Does the fictional report prove the intended defensive state after action?",
    "pass": "Effective access, configuration, logging, service, owner signoff, and residual risk are validated.",
    "fail": "A closed ticket is treated as proof."
  },
  {
    "check": "Privacy and portfolio safety",
    "question": "Does the fictional report avoid real credentials, private data, real systems, real incidents, and confidential details?",
    "pass": "Names, systems, evidence, dates, identifiers, and outcomes are fully invented.",
    "fail": "The report copies or lightly edits real organizational material."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define purpose and audience",
    "detail": "Identify the fictional decision, readers, scope, deadline, privacy limit, owner, review standard, and report type.",
    "output": "Report charter."
  },
  {
    "step": "2",
    "title": "Build the evidence register",
    "detail": "Index fictional logs, alerts, identity, web, cloud, supplier, source-health, communication, action, and validation records.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Normalize and organize",
    "detail": "Separate fictional event, collection, alert, action, communication, recovery, and validation times and group evidence by question.",
    "output": "Normalized timeline and evidence map."
  },
  {
    "step": "4",
    "title": "Draft observations and findings",
    "detail": "Write fictional direct observations, supported conclusions, alternatives, missing evidence, confidence, impact, owners, and limits.",
    "output": "Findings draft."
  },
  {
    "step": "5",
    "title": "Write recommendations",
    "detail": "Connect fictional actions to findings with priority, owner, authority, deadline, dependency, rollback, success measure, and residual risk.",
    "output": "Action plan."
  },
  {
    "step": "6",
    "title": "Tailor summaries by audience",
    "detail": "Create fictional technical, service, leadership, user-support, supplier, and portfolio-safe summaries with the correct level of detail.",
    "output": "Audience summary set."
  },
  {
    "step": "7",
    "title": "Validate and peer review",
    "detail": "Check fictional traceability, scope, timestamps, impact, confidence, privacy, ownership, consistency, service state, and closure evidence.",
    "output": "Quality review record."
  },
  {
    "step": "8",
    "title": "Finalize and preserve",
    "detail": "Approve the fictional version, distribution, appendices, residual risk, follow-up, retention, and portfolio-safe copy.",
    "output": "Final defensive report package."
  }
];
const findings = [
  {
    "id": "NBR-RPT-F01",
    "statement": "The fictional supplier administrator retained unsupported access after the documented exception expired.",
    "support": "Expired approval, active identity, post-expiration sign-in, confidential service scope, supplier-owner confirmation, and no renewal.",
    "alternative": "A legitimate emergency support need may have existed but was not documented.",
    "confidence": "High",
    "impact": "Unsupported administrative capability is confirmed; misuse and disclosure are unconfirmed.",
    "recommendation": "Keep access removed and require a new narrow, time-limited approval for any future support."
  },
  {
    "id": "NBR-RPT-F02",
    "statement": "The fictional confidential storage policy contained an unsupported broad-read condition.",
    "support": "Outside-window change, confidential classification, effective policy evaluation, no approved exception, and successful restoration.",
    "alternative": "A temporary business sharing need may have existed but was not recorded.",
    "confidence": "High",
    "impact": "Possible exposure is supported; unauthorized access and disclosure are unconfirmed.",
    "recommendation": "Maintain approved access, review covered access evidence, and automate policy drift checks."
  },
  {
    "id": "NBR-RPT-F03",
    "statement": "The fictional cloud audit-source outage reduced monitoring assurance during the review window.",
    "support": "Healthy source-health monitor, thirty-eight-minute delivery gap, privileged coverage, recovered records, and partial compensating sources.",
    "alternative": "A nonsecurity pipeline failure may explain the outage.",
    "confidence": "High",
    "impact": "Visibility was reduced; harmful activity during the gap is unconfirmed.",
    "recommendation": "Improve failover, source-delay alerting, gap reconstruction, and closure guidance."
  },
  {
    "id": "NBR-RPT-F04",
    "statement": "The fictional payroll-themed message was high-confidence malicious, but account compromise was not confirmed.",
    "support": "Failed sender checks, unrelated destination, urgent credential request, no approved campaign, one click, and no credential entry evidence.",
    "alternative": "A badly configured legitimate vendor message is possible but not supported.",
    "confidence": "High",
    "impact": "One click is confirmed; credential disclosure and account takeover are unconfirmed.",
    "recommendation": "Maintain targeted identity review, user guidance, message removal, and detection improvement."
  },
  {
    "id": "NBR-RPT-F05",
    "statement": "The fictional supplier, cloud, telemetry, and phishing records should not be represented as one confirmed incident.",
    "support": "Different identities, systems, evidence, requested actions, owners, timelines, and confidence boundaries.",
    "alternative": "Later evidence may establish a relationship between some records.",
    "confidence": "High",
    "impact": "Combining them would create unsupported scope and misleading ownership.",
    "recommendation": "Maintain separate cases and link only evidence-supported relationships."
  },
  {
    "id": "NBR-RPT-F06",
    "statement": "The fictional response can transition to monitored follow-up after validated control restoration and documented residual uncertainty.",
    "support": "Supplier access removed, storage policy restored, logging current, service healthy, owner signoff, and no confirmed disclosure in covered evidence.",
    "alternative": "Unresolved source coverage or related activity may require continued formal response.",
    "confidence": "Medium-High",
    "impact": "Immediate control issues are corrected; residual uncertainty and improvement work remain.",
    "recommendation": "Document closure limits, continue targeted monitoring, and track all improvements to completion."
  }
];
const commonMistakes = [
  "Copying fictional alert titles into the report as though they were validated findings.",
  "Using broad language such as the environment was secure or no access occurred anywhere.",
  "Mixing fictional event time with collection, alert, action, or validation time.",
  "Reporting possible exposure as confirmed access or disclosure.",
  "Reporting a click as confirmed credential compromise.",
  "Hiding alternate explanations or missing evidence to make the report sound stronger.",
  "Writing vague recommendations without owners, deadlines, authority, rollback, or success measures.",
  "Using the same detail level for analysts, service owners, leadership, users, suppliers, and portfolio reviewers.",
  "Including unnecessary raw fictional logs instead of citing relevant evidence.",
  "Treating an approved action as completed or a completed action as validated.",
  "Closing the report because an alert stopped or a ticket was marked complete.",
  "Using inconsistent identifiers, times, confidence labels, or impact language across sections.",
  "Leaving limitations and residual risk until the appendix where decision-makers may miss them.",
  "Using or exposing real credentials, employee data, school records, organizations, systems, incidents, messages, suppliers, logs, cloud resources, or confidential report content."
];
const quizQuestions = [
  {
    "question": "What is the main purpose of a fictional defensive report?",
    "choices": [
      "To turn approved evidence into accurate, traceable, decision-ready defensive conclusions and actions.",
      "To include as many raw logs as possible.",
      "To prove the worst-case scenario.",
      "To replace owner decisions."
    ],
    "answer": 0,
    "explanation": "A defensive report supports decisions through evidence, scope, ownership, and validation."
  },
  {
    "question": "What belongs in a strong fictional executive summary?",
    "choices": [
      "The issue, confirmed facts, impact, actions, service state, residual risk, and decision needed.",
      "Every technical field.",
      "Only the alert title.",
      "A long glossary."
    ],
    "answer": 0,
    "explanation": "Leadership needs concise decision-ready information."
  },
  {
    "question": "Why should fictional findings include alternate explanations?",
    "choices": [
      "They show which other interpretations fit the evidence and what additional evidence could change confidence.",
      "They make the report longer.",
      "They prove the main finding is wrong.",
      "They replace recommendations."
    ],
    "answer": 0,
    "explanation": "Alternatives improve analytical honesty and review quality."
  },
  {
    "question": "What makes a fictional recommendation actionable?",
    "choices": [
      "It has a rationale, owner, priority, authority, deadline, dependency, rollback, success measure, and residual-risk statement.",
      "It says improve monitoring.",
      "It is marked urgent.",
      "It contains technical jargon."
    ],
    "answer": 0,
    "explanation": "Actionable recommendations are specific and accountable."
  },
  {
    "question": "What is the strongest fictional impact statement for the broad storage policy?",
    "choices": [
      "Possible exposure is supported, while unauthorized access and disclosure remain unconfirmed.",
      "All files were disclosed.",
      "No risk existed.",
      "The provider was compromised."
    ],
    "answer": 0,
    "explanation": "The statement preserves both the control weakness and evidence limits."
  },
  {
    "question": "When should a fictional report be considered final?",
    "choices": [
      "After traceability, scope, timestamps, impact, confidence, ownership, privacy, validation, consistency, and approval are reviewed.",
      "When the first draft is complete.",
      "When the alert closes.",
      "When the report is long enough."
    ],
    "answer": 0,
    "explanation": "A final report requires quality and approval checks."
  },
  {
    "question": "What makes a fictional report portfolio-safe?",
    "choices": [
      "It uses invented names, systems, evidence, dates, identifiers, and outcomes while preserving professional structure and analysis.",
      "It removes only passwords.",
      "It copies a real report with a different title.",
      "It hides the source organization name but keeps real logs."
    ],
    "answer": 0,
    "explanation": "Portfolio safety requires full fictionalization, not light editing of real material."
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
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
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

export default function WritingADefensiveReportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I16
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.7 Writing a Defensive Report
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Convert fictional defensive evidence into accurate analyst notes,
            findings, owner requests, leadership summaries, recommendations,
            validation records, limitations, and a portfolio-safe professional
            report.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I16: Intermediate Defensive Labs"
          lessonTitle="Writing a Defensive Report"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge evidence, identities, systems, services, suppliers, messages, cloud resources, timelines, owners, actions, and outcomes.",
            "I will not copy, rewrite, summarize, or expose any real incident report, credential, employee record, school record, company log, private message, supplier record, cloud identifier, or confidential organizational document.",
            "I will distinguish observations, conclusions, alternatives, missing evidence, potential impact, confirmed impact, confidence, limitations, recommendations, validation, and residual risk.",
            "I will tailor technical, service, leadership, user-support, supplier, and portfolio summaries to the correct fictional audience.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Report Can Be Technically Detailed and Still Fail Its Reader"
        >
          <p className="leading-8">
            A fictional analyst may include every log line yet still leave
            leadership unable to answer three questions: What is confirmed?
            What has been done? What decision is needed next? Professional
            reporting preserves technical traceability while organizing
            evidence around scope, findings, impact, ownership, action,
            validation, limitations, and audience needs.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak report
              </p>

              <p className="mt-2 leading-7">
                Copy raw logs, repeat alert titles, overstate impact, hide
                uncertainty, recommend vague actions, use one summary for every
                audience, and close without validation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional report
              </p>

              <p className="mt-2 leading-7">
                Define purpose, cite evidence, normalize time, write findings,
                preserve alternatives and limits, assign actions, validate
                outcomes, tailor summaries, and complete quality review.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>

              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Defensive Work Becomes Valuable When Another Person Can Review and Act on It"
        >
          <p className="leading-8">
            Fictional investigations, IAM reviews, phishing triage, web
            findings, cloud findings, and incident decisions all depend on
            accurate documentation. A strong report allows another authorized
            reviewer to understand what happened, why the conclusion is
            reasonable, what remains unknown, who owns the next action, and
            what evidence proves resolution.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Purpose–Evidence–Finding–Action–Validation Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Purpose", "Which fictional audience, decision, scope, deadline, privacy boundary, and outcome define the report?"],
              ["Evidence", "Which fictional records, timestamps, source-health notes, context, owners, and limitations support the analysis?"],
              ["Finding", "Which fictional observation, conclusion, alternative, confidence, potential impact, confirmed impact, and limitation are supported?"],
              ["Action", "Which fictional recommendation, owner, priority, authority, deadline, dependency, rollback, and success measure follow?"],
              ["Validation", "Which fictional access, configuration, logging, service, communication, owner, residual-risk, and closure evidence proves the result?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Defensive Reporting and Quality Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Report Architecture
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eleven Sections of a Fictional Defensive Report
          </h2>

          <div className="mt-6 grid gap-5">
            {reportSections.map((item, index) => (
              <article
                key={item.section}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.section}
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Purpose", item.purpose],
                    ["Include", item.include],
                    ["Avoid", item.avoid],
                    ["Quality standard", item.quality],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.section}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Audience Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Report Audiences
          </h2>

          <div className="mt-6 grid gap-5">
            {audienceMatrix.map((item) => (
              <article
                key={item.audience}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.audience}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Needs", item.needs],
                    ["Tone", item.tone],
                    ["Omit", item.omit],
                    ["Fictional example", item.example],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.audience}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
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
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Quality Review
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Checks before a Fictional Report Is Final
          </h2>

          <div className="mt-6 grid gap-5">
            {qualityChecks.map((item) => (
              <article
                key={item.check}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.check}
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Pass
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.pass}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Fail
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.fail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Reporting Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Purpose to Final Report
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">{item.detail}</p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Defensive Reporting Dashboard"
          subtitle="Training dashboard for fictional report quality only."
          metrics={[
            {
              label: "Evidence-backed findings",
              value: "6",
              note: "Supplier access, storage policy, source health, phishing, case boundaries, and closure transition are represented.",
            },
            {
              label: "Audience summaries",
              value: "6",
              note: "Technical, service, leadership, user-support, supplier, and portfolio audiences receive different detail.",
            },
            {
              label: "Unsupported claims",
              value: "0",
              note: "The fictional final draft preserves impact limits, confidence, alternatives, limitations, and residual risk.",
            },
          ]}
        />

        <FakeAlertCard
          title="Draft Report Overstates Confidential Data Exposure"
          severity="High"
          time="2:18 PM"
          source="Fake Northbridge Report Quality Console"
          details="A fictional draft states that confidential data was exposed, but the supplied evidence confirms only an unsupported broad-read policy and no covered unauthorized read."
          recommendation="Revise the impact statement, cite the exact evidence, document source coverage, preserve possible exposure, separate confirmed and unconfirmed impact, add owner and validation status, and complete peer review before distribution."
        />

        <FakeLogPanel
          title="Fake Northbridge Report Revision Timeline"
          logs={[
            "13:00 PURPOSE audience='leadership-and-technical'",
            "13:08 SCOPE systems='supplier-cloud-email'",
            "13:16 EVIDENCE records='18'",
            "13:24 TIMELINE normalized='complete'",
            "13:32 FINDING supplier-access='high-confidence'",
            "13:40 FINDING storage-exposure='possible'",
            "13:48 LIMIT disclosure='unconfirmed'",
            "13:56 FINDING audit-gap='visibility-reduced'",
            "14:04 CASE phishing-linkage='unsupported'",
            "14:12 DRAFT impact='overstated'",
            "14:18 REVIEW correction='required'",
            "14:26 ACTION owners='assigned'",
            "14:34 VALIDATION controls='restored'",
            "14:42 RESIDUAL monitoring='open'",
            "14:50 PRIVACY fictionalization='verified'",
            "15:00 FINAL peer-review='approved'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Report Findings with Confidence and Limits
          </h2>

          <div className="mt-6 grid gap-5">
            {findings.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    {item.confidence}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.statement}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Evidence support", item.support],
                    ["Alternate explanation", item.alternative],
                    ["Impact statement", item.impact],
                    ["Recommendation", item.recommendation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
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
        </section>

        <AnalyzeEvidenceCard
          title="Which Leadership Sentence Is Defensible?"
          evidence={[
            "The fictional storage policy contained an unsupported broad-read condition.",
            "The storage resource contains fictional confidential data.",
            "The policy was restored to the approved identity group.",
            "The audit source recovered after a delivery gap.",
            "No covered unauthorized read is observed.",
            "The available sources do not represent every possible access path.",
          ]}
          question="Which sentence is strongest?"
          options={[
            "A serious access-control weakness was corrected; no covered unauthorized read or disclosure is confirmed, and targeted monitoring continues because source coverage is limited.",
            "Confidential data was definitely exposed.",
            "No unauthorized access occurred anywhere.",
            "The event was harmless because the policy was restored.",
          ]}
          bestAnswer={0}
          explanation="The strongest sentence communicates severity, action, current impact evidence, remaining uncertainty, and follow-up."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional Defensive Reports"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Write the Northbridge Fictional Defensive Report"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Evidence, Findings, Actions, Validation, and Audience Summaries
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the fictional Northbridge evidence from this module to
                produce one complete professional defensive report.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Document control, purpose, audience, classification, owner, version, and distribution boundary.</li>
                <li>Executive summary with facts, impact, actions, service state, residual risk, and decision request.</li>
                <li>Scope, exclusions, privacy limits, methods, assumptions, and evidence register.</li>
                <li>Normalized timeline and evidence-to-finding traceability matrix.</li>
                <li>Findings with observations, conclusions, alternatives, confidence, potential impact, confirmed impact, limitations, owners, and recommendations.</li>
                <li>Action plan with priority, owner, authority, deadline, dependency, rollback, success measure, and residual risk.</li>
                <li>Validation, closure criteria, open monitoring, limitations, appendices, and quality-review record.</li>
                <li>Technical, service-owner, leadership, user-support, supplier, and portfolio-safe summaries.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Build the report only from fictional evidence. Do not copy or
            lightly edit a real report, incident, log set, message, identity
            record, supplier record, cloud record, school record, or company
            document.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Leadership Asks for a Stronger Impact Statement"
          scenario="The fictional draft already states that possible exposure is confirmed but unauthorized access and disclosure are not."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the evidence-limited impact statement, explain the source coverage and remaining uncertainty, and state which validation or monitoring could change confidence.",
              outcome:
                "Best reporting choice. Accuracy is more valuable than dramatic certainty.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Change the report to say confidential data was exposed.",
              outcome:
                "Unsupported. The evidence does not confirm disclosure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove all mention of possible exposure.",
              outcome:
                "Misleading. The broad policy created a serious risk condition.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Portfolio Reviewer Wants to See the Original Logs"
          scenario="The fictional report structure is educational, but the requested original material would contain private organizational data if it were real."
          choices={[
            {
              label: "Choice A",
              response:
                "Provide only fully fictionalized evidence, invented identifiers, sanitized diagrams, analytical summaries, reflection, and a clear portfolio-safety statement.",
              outcome:
                "Best portfolio choice. Professional structure is preserved without exposing private material.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Include real logs after removing passwords.",
              outcome:
                "Unsafe. Logs may still expose identities, systems, incidents, and confidential context.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Copy a real report and change the organization name.",
              outcome:
                "Unsafe. Light editing does not create a fictional artifact.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Writing a Defensive Report Checklist"
          items={[
            "I can define a fictional report purpose, audience, scope, deadline, privacy limit, owner, review standard, and decision need.",
            "I can build a fictional evidence register with identifiers, timestamps, source health, relevance, ownership, confidence contribution, and limitations.",
            "I can separate fictional event, collection, alert, action, communication, recovery, and validation times.",
            "I can distinguish fictional observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, limitations, and residual risk.",
            "I can write fictional recommendations with rationale, owner, priority, authority, deadline, dependency, rollback, success measure, and validation.",
            "I can tailor fictional technical, service, leadership, user-support, supplier, and portfolio-safe summaries.",
            "I can validate fictional access, configuration, logging, service, communication, owner, closure, and residual-risk outcomes.",
            "I can complete fictional traceability, scope, timestamp, impact, confidence, consistency, privacy, ownership, and peer-review checks.",
            "I can create a fully fictional portfolio version with invented names, systems, evidence, dates, identifiers, and outcomes.",
            "I will never expose real credentials, employee data, school records, incidents, reports, logs, messages, suppliers, cloud resources, systems, or confidential organizational information.",
          ]}
        />

        <MiniQuiz
          title="I16.7 Mini Quiz: Writing a Defensive Report"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Northbridge Defensive Report Package. Include document control, purpose, audience, executive summary, scope, exclusions, privacy limits, methods, evidence register, normalized timeline, findings, alternate explanations, confidence, impact statements, recommendations, owner and action plan, validation, closure criteria, limitations, residual risk, appendices, technical summary, service-owner summary, leadership summary, user-support summary, supplier summary, portfolio-safe summary, quality-review checklist, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional systems, identities, services, suppliers, messages, logs, cloud resources, evidence, dates, identifiers, actions, and outcomes.",
            "Make every important claim traceable to an evidence identifier and source-health note.",
            "Do not hide limitations or turn possible impact into confirmed impact.",
            "Show how the same facts are communicated differently to analysts, service owners, leadership, users, suppliers, and portfolio reviewers.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A defensive report exists to support a decision, not to display raw technical volume.",
            "Purpose, audience, scope, evidence, findings, actions, validation, and limitations should remain connected.",
            "Observations, conclusions, alternatives, potential impact, confirmed impact, and residual risk are different report elements.",
            "Recommendations become useful when they have owners, authority, deadlines, and success measures.",
            "Different audiences need different levels of detail while the underlying facts remain consistent.",
            "A report is not final until traceability, privacy, accuracy, consistency, and validation are reviewed.",
            "Portfolio artifacts must be fully fictional and should never expose real defensive records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I16
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}