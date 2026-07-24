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
const modulePath = `${trackPath}/security-operations-basics`;
const previousLesson = `${modulePath}/escalation-communication-and-handoffs`;
const nextLesson = `${modulePath}/soc-metrics-quality-and-continuous-improvement`;

const objectives = [
  "Explain how fictional threat intelligence supports security operations through source evaluation, relevance, confidence, timeliness, local context, defensive action, and review.",
  "Distinguish fictional threat data, threat information, threat intelligence, indicators, behaviors, hypotheses, warnings, assessments, and confirmed local evidence.",
  "Evaluate fictional intelligence sources using provenance, purpose, credibility, access, timeliness, specificity, corroboration, bias, uncertainty, and handling limits.",
  "Translate fictional intelligence into proportionate monitoring, owner review, detection improvement, case enrichment, risk communication, and reassessment without overstating local impact.",
  "Create a portfolio-safe fictional threat-intelligence package with source records, relevance assessments, confidence statements, intelligence notes, action plans, validation, metrics, and leadership summaries."
];
const vocabulary = [
  [
    "Threat data",
    "A fictional raw observation such as a reported domain, behavior, service pattern, time, campaign label, or technical event without full interpretation."
  ],
  [
    "Threat information",
    "Fictional organized data that adds context, source details, timing, relationships, or descriptive meaning."
  ],
  [
    "Threat intelligence",
    "Fictional analyzed information that is relevant, evidence-based, confidence-rated, decision-focused, and connected to a specific defensive need."
  ],
  [
    "Indicator",
    "A fictional observable value or condition that may support investigation or monitoring when used with context."
  ],
  [
    "Behavior",
    "A fictional pattern of actions, techniques, sequences, access, configuration, or service use that may be more durable than one indicator."
  ],
  [
    "Intelligence requirement",
    "A fictional question that defines what the SOC needs to know, why it matters, who will decide, and when the answer is needed."
  ],
  [
    "Provenance",
    "A fictional record of where intelligence came from, how it was produced, who handled it, and which transformations occurred."
  ],
  [
    "Source credibility",
    "A fictional judgment about whether a source is generally trustworthy for the type of information it provides."
  ],
  [
    "Information reliability",
    "A fictional judgment about how strongly the specific claim is supported, corroborated, current, and internally consistent."
  ],
  [
    "Relevance",
    "A fictional assessment of whether the intelligence applies to the organization’s services, technologies, identities, suppliers, data, geography concepts, or business processes."
  ],
  [
    "Timeliness",
    "A fictional assessment of whether the information is current enough to support the required decision."
  ],
  [
    "Confidence",
    "A fictional statement of how strongly the available evidence supports the assessment, including uncertainty and limitations."
  ],
  [
    "Corroboration",
    "Fictional support from additional independent or complementary sources."
  ],
  [
    "Local validation",
    "A fictional check of whether supplied intelligence appears in approved internal evidence or affects local services, identities, assets, suppliers, or controls."
  ],
  [
    "Intelligence note",
    "A fictional concise assessment that records the requirement, sources, key judgments, evidence, confidence, limitations, actions, and review date."
  ],
  [
    "Intelligence failure",
    "A fictional gap such as stale information, weak relevance, missing source context, unsupported certainty, delayed sharing, or action without validation."
  ]
];
const intelligenceQuestions = [
  {
    "question": "What decision does the intelligence support?",
    "strong": "The fictional requirement names the decision, audience, protected service, owner, deadline, and acceptable evidence.",
    "weak": "The SOC collects threat reports without a defined use.",
    "review": "What will change if the assessment is true?"
  },
  {
    "question": "Who produced the information and why?",
    "strong": "The fictional source, purpose, collection method, intended audience, access path, and possible bias are documented.",
    "weak": "A copied claim is treated as authoritative because it appears detailed.",
    "review": "What incentives or limitations may shape the source?"
  },
  {
    "question": "How current is the claim?",
    "strong": "The fictional publication time, observation time, last update, expiration concept, and review date are recorded.",
    "weak": "Old indicators are treated as permanent evidence of current activity.",
    "review": "Is the information timely for this decision?"
  },
  {
    "question": "How specific and testable is the claim?",
    "strong": "The fictional assessment identifies behavior, service, identity, indicator, condition, time window, scope, and expected local evidence.",
    "weak": "The intelligence says organizations may be targeted without defining observable conditions.",
    "review": "Can defenders validate the claim safely?"
  },
  {
    "question": "How well is the claim supported?",
    "strong": "The fictional assessment compares source credibility, claim reliability, corroboration, conflicts, alternatives, and confidence.",
    "weak": "One source is treated as proof.",
    "review": "Which evidence supports or challenges the assessment?"
  },
  {
    "question": "Is the intelligence locally relevant?",
    "strong": "The fictional assessment maps technologies, suppliers, services, identities, data, business processes, exposure, controls, and local evidence.",
    "weak": "Global attention is treated as local compromise.",
    "review": "Which local assets or decisions are actually affected?"
  },
  {
    "question": "What action is proportionate?",
    "strong": "The fictional recommendation identifies monitoring, case enrichment, owner review, detection testing, control validation, communication, or no action with rationale.",
    "weak": "The SOC blocks or escalates broadly based on unvalidated information.",
    "review": "What is the least disruptive action that reduces uncertainty or risk?"
  },
  {
    "question": "When should the assessment be reviewed?",
    "strong": "The fictional note includes expiration, reassessment triggers, owner, source updates, local findings, and closure criteria.",
    "weak": "The intelligence stays active indefinitely.",
    "review": "What new evidence would strengthen, weaken, or end the assessment?"
  }
];
const sourceRecords = [
  {
    "id": "NBR-INT-01",
    "source": "Fictional industry coordination bulletin",
    "claim": "A campaign may target outdated remote-support services using stolen supplier credentials.",
    "credibility": "Medium-High",
    "reliability": "Medium",
    "timeliness": "Current",
    "relevance": "Northbridge uses a fictional remote-support service and has one recently expired supplier account.",
    "corroboration": "A second fictional advisory describes similar supplier-identity abuse concepts.",
    "action": "Review supplier identities, support-service exposure, source health, and approved remote-support controls.",
    "limit": "No Northbridge compromise or supplier misuse is confirmed."
  },
  {
    "id": "NBR-INT-02",
    "source": "Fictional vendor security notice",
    "claim": "A configuration weakness may affect a specific legacy connector version under narrow conditions.",
    "credibility": "High",
    "reliability": "High",
    "timeliness": "Current",
    "relevance": "Northbridge inventory shows the fictional connector version is not deployed in production.",
    "corroboration": "Asset and software records are healthy and consistent.",
    "action": "Document non-applicability, verify test environments, and reassess if inventory changes.",
    "limit": "The notice is valid, but local production exposure is not supported."
  },
  {
    "id": "NBR-INT-03",
    "source": "Fictional community report",
    "claim": "A reported domain may be associated with credential-harvesting activity.",
    "credibility": "Medium",
    "reliability": "Low-Medium",
    "timeliness": "Recent",
    "relevance": "No supplied Northbridge evidence shows contact with the domain.",
    "corroboration": "One fictional independent source reports related behavior but not the same domain.",
    "action": "Add narrow watchlist context and validate source health without broad blocking.",
    "limit": "The domain claim and local relevance remain uncertain."
  },
  {
    "id": "NBR-INT-04",
    "source": "Fictional supplier incident advisory",
    "claim": "A communications provider experienced delayed delivery caused by an internal platform failure.",
    "credibility": "High",
    "reliability": "Medium-High",
    "timeliness": "Current",
    "relevance": "Northbridge saw matching notification delays during the same time period.",
    "corroboration": "Internal delivery metrics align with the supplier timeline.",
    "action": "Update the operational case, monitor recovery, and avoid claiming a malicious cause.",
    "limit": "The supplier root cause is preliminary."
  },
  {
    "id": "NBR-INT-05",
    "source": "Fictional intelligence newsletter",
    "claim": "Organizations in several sectors may face increased privileged-access abuse during maintenance periods.",
    "credibility": "Medium",
    "reliability": "Low-Medium",
    "timeliness": "Current",
    "relevance": "Northbridge has repeated maintenance alerts but also strong approved context.",
    "corroboration": "No supplied local evidence shows out-of-scope maintenance activity.",
    "action": "Use the claim as a hypothesis for narrow detection tests, not as proof of misuse.",
    "limit": "The report is broad and not specific to Northbridge."
  },
  {
    "id": "NBR-INT-06",
    "source": "Fictional internal lessons-learned note",
    "claim": "Past source-health gaps reduced confidence during high-priority case review.",
    "credibility": "High",
    "reliability": "High",
    "timeliness": "Current for the operating model",
    "relevance": "Northbridge currently has a critical reporting audit-source gap.",
    "corroboration": "Case quality and telemetry records show the same operational weakness.",
    "action": "Prioritize source-health detection, compensating evidence, ownership, and restoration validation.",
    "limit": "The note supports monitoring risk, not malicious activity during the gap."
  },
  {
    "id": "NBR-INT-07",
    "source": "Fictional analyst social post",
    "claim": "A new campaign is allegedly targeting every organization using cloud storage.",
    "credibility": "Low",
    "reliability": "Low",
    "timeliness": "Recent",
    "relevance": "Northbridge uses fictional cloud storage, but the claim is extremely broad.",
    "corroboration": "No reliable fictional source supports the universal claim.",
    "action": "Do not operationalize; seek stronger sources and continue normal control monitoring.",
    "limit": "The claim is unsupported and overly broad."
  },
  {
    "id": "NBR-INT-08",
    "source": "Fictional regulator-style sector alert",
    "claim": "Critical-service organizations should verify supplier access expiration, logging continuity, and recovery ownership.",
    "credibility": "High",
    "reliability": "High",
    "timeliness": "Current",
    "relevance": "Northbridge has fictional findings in all three areas.",
    "corroboration": "Local identity, source-health, supplier, and recovery records support the control gaps.",
    "action": "Coordinate owner review, control validation, metrics, deadlines, and leadership reporting.",
    "limit": "The alert supports control action, not a confirmed incident."
  }
];
const confidenceLevels = [
  {
    "level": "High confidence",
    "meaning": "Multiple strong fictional sources, healthy local evidence, clear scope, recent information, limited conflict, and testable findings support the assessment.",
    "language": "Northbridge assesses with high confidence that the current audit-source gap reduces monitoring coverage.",
    "avoid": "Certain, guaranteed, or proven beyond the supplied scope."
  },
  {
    "level": "Medium confidence",
    "meaning": "Useful fictional evidence supports the assessment, but important source, scope, timeliness, corroboration, or local-validation limits remain.",
    "language": "Northbridge assesses with medium confidence that the supplier advisory explains the observed delivery delay.",
    "avoid": "The supplier definitely caused every delayed message."
  },
  {
    "level": "Low confidence",
    "meaning": "The fictional assessment depends on weak, broad, stale, conflicting, or poorly corroborated information.",
    "language": "Northbridge has low confidence that the reported domain is operationally relevant.",
    "avoid": "Block everywhere immediately because the domain appears in one report."
  },
  {
    "level": "Insufficient evidence",
    "meaning": "The fictional information cannot support a useful assessment or action beyond continued collection and normal monitoring.",
    "language": "The supplied evidence is insufficient to assess local compromise.",
    "avoid": "No evidence means the claim is false or true."
  }
];
const actionTypes = [
  {
    "action": "Monitor",
    "when": "The fictional intelligence is relevant enough to watch but local evidence and urgency remain limited.",
    "example": "Add a narrow watchlist for a reported domain while checking data quality and avoiding broad blocking.",
    "validation": "Confirm alert behavior, source health, review period, owner, and removal criteria."
  },
  {
    "action": "Enrich",
    "when": "The fictional intelligence adds useful context to an existing alert or case.",
    "example": "Add supplier-identity abuse concepts to the expired-account case without changing incident status.",
    "validation": "Record the source, confidence, relevance, limitations, and effect on priority or next action."
  },
  {
    "action": "Test a detection",
    "when": "The fictional behavior is specific, locally relevant, safely reproducible, and tied to a defensive decision.",
    "example": "Test maintenance-scope logic against approved and out-of-scope synthetic activity.",
    "validation": "Use positive, negative, boundary, missing-data, replay, and rollback tests."
  },
  {
    "action": "Validate a control",
    "when": "The fictional intelligence highlights a control condition already relevant to local services or suppliers.",
    "example": "Review supplier-access expiration and logging continuity.",
    "validation": "Confirm design, implementation, operation, evidence, owner, limitations, and residual risk."
  },
  {
    "action": "Request owner review",
    "when": "The fictional intelligence requires service, supplier, identity, risk, recovery, or leadership context or authority.",
    "example": "Ask the supplier owner whether remote-support access remains necessary.",
    "validation": "Record the question, decision owner, deadline, response, action, and follow-up."
  },
  {
    "action": "Communicate",
    "when": "The fictional assessment affects business priority, supplier coordination, risk treatment, service decisions, or leadership awareness.",
    "example": "Report that the sector alert aligns with local control gaps but does not indicate compromise.",
    "validation": "Preserve facts, confidence, limitations, owners, decisions, and next update."
  },
  {
    "action": "Take no new action",
    "when": "The fictional information is not applicable, too weak, already covered, expired, or unable to change a decision.",
    "example": "Document that a vendor notice does not affect the production inventory.",
    "validation": "Record the non-applicability evidence and reassessment trigger."
  },
  {
    "action": "Escalate collection",
    "when": "The fictional intelligence may be important, but stronger sources, local evidence, or specialist analysis are required quickly.",
    "example": "Seek authoritative confirmation before operationalizing a broad community claim.",
    "validation": "Define the intelligence gap, source request, owner, deadline, and decision dependency."
  }
];
const intelligenceWorkflow = [
  {
    "step": "1",
    "title": "Define the intelligence requirement",
    "detail": "State the fictional decision, audience, service, risk question, deadline, scope, privacy, and acceptable evidence.",
    "output": "Intelligence requirement."
  },
  {
    "step": "2",
    "title": "Collect approved sources",
    "detail": "Gather fictional internal, supplier, vendor, sector, community, and lessons-learned sources through approved channels.",
    "output": "Source register."
  },
  {
    "step": "3",
    "title": "Evaluate provenance and quality",
    "detail": "Assess fictional purpose, credibility, reliability, timeliness, specificity, access, bias, handling, and known limitations.",
    "output": "Source-quality assessment."
  },
  {
    "step": "4",
    "title": "Analyze relevance and corroboration",
    "detail": "Map fictional technologies, services, identities, suppliers, data, controls, local evidence, conflicts, and alternatives.",
    "output": "Relevance and corroboration matrix."
  },
  {
    "step": "5",
    "title": "Write the assessment",
    "detail": "Document fictional key judgments, evidence, confidence, uncertainty, scope, potential impact, confirmed impact, and what remains unproven.",
    "output": "Intelligence note."
  },
  {
    "step": "6",
    "title": "Choose proportionate actions",
    "detail": "Select fictional monitoring, enrichment, detection tests, control validation, owner review, communication, no action, or further collection.",
    "output": "Action plan."
  },
  {
    "step": "7",
    "title": "Operationalize and validate",
    "detail": "Assign fictional owners, deadlines, case links, tests, communication, source-health checks, success criteria, and rollback.",
    "output": "Operationalization record."
  },
  {
    "step": "8",
    "title": "Review, expire, and learn",
    "detail": "Reassess fictional confidence, source updates, local findings, action results, metrics, closure, expiration, and intelligence improvements.",
    "output": "Review and closure package."
  }
];
const findings = [
  {
    "id": "NBR-INT-F01",
    "statement": "The fictional sector warning is locally relevant because Northbridge has supplier-expiration, logging-continuity, and recovery-ownership gaps.",
    "support": "High-quality sector alert, healthy local identity and telemetry records, supplier findings, recovery ownership records, and current open actions.",
    "alternative": "The sector warning may be general guidance rather than evidence of a specific local threat.",
    "confidence": "High",
    "limitation": "No local incident or malicious campaign activity is confirmed."
  },
  {
    "id": "NBR-INT-F02",
    "statement": "The fictional remote-support campaign bulletin should enrich the expired-supplier-account case without changing it to a confirmed incident.",
    "support": "Current supplier account, expired approval, protected support service, two related fictional advisories, and incomplete activity review.",
    "alternative": "The supplier account may have a current undocumented support need.",
    "confidence": "Medium-High",
    "limitation": "No campaign match, misuse, or disclosure is confirmed."
  },
  {
    "id": "NBR-INT-F03",
    "statement": "The fictional vendor notice is not applicable to Northbridge production based on current inventory evidence.",
    "support": "High-credibility vendor source, specific affected version, healthy inventory, and no production deployment.",
    "alternative": "A test or untracked environment may still contain the version.",
    "confidence": "High",
    "limitation": "Inventory completeness outside production should be verified."
  },
  {
    "id": "NBR-INT-F04",
    "statement": "The fictional reported domain should be monitored narrowly rather than broadly blocked.",
    "support": "Recent but weakly corroborated claim, no local contact evidence, uncertain reputation, and available watchlist monitoring.",
    "alternative": "A stronger authoritative source may later justify broader action.",
    "confidence": "Low-Medium",
    "limitation": "The domain's current role and local relevance are uncertain."
  },
  {
    "id": "NBR-INT-F05",
    "statement": "The fictional supplier incident advisory likely explains the observed communications delay, but malicious cause remains unsupported.",
    "support": "High-credibility supplier notice, matching time window, aligned internal delivery metrics, and operational recovery activity.",
    "alternative": "An independent local issue may have contributed to the delay.",
    "confidence": "Medium-High",
    "limitation": "The supplier root cause is preliminary."
  },
  {
    "id": "NBR-INT-F06",
    "statement": "The fictional broad claim about universal cloud-storage targeting should not be operationalized.",
    "support": "Low-credibility source, unsupported universal language, no corroboration, no specific behavior, and no local evidence.",
    "alternative": "A narrower valid campaign may exist but is not supported by this claim.",
    "confidence": "High",
    "limitation": "Rejecting this claim does not prove no threat exists."
  }
];
const commonMistakes = [
  "Treating fictional threat data or a single indicator as complete threat intelligence.",
  "Collecting large numbers of reports without a defined intelligence requirement or decision.",
  "Confusing source credibility with the reliability of every claim from that source.",
  "Treating global attention, sector warnings, or campaign reporting as proof of local compromise.",
  "Blocking fictional indicators broadly without checking timeliness, context, reuse, local relevance, or business effect.",
  "Treating old indicators as permanently malicious.",
  "Using weak community claims as though they were authoritative.",
  "Ignoring internal lessons learned because external reports appear more technical.",
  "Failing to document confidence, alternatives, missing evidence, and what remains unconfirmed.",
  "Changing alert severity or incident status without local validation.",
  "Operationalizing intelligence without owners, deadlines, tests, source-health checks, rollback, and review.",
  "Keeping fictional watchlists and assessments active indefinitely without expiration.",
  "Sharing unnecessary sensitive internal details with external sources or suppliers.",
  "Using or exposing any real credentials, employee information, school records, private company intelligence, supplier reports, incident evidence, case data, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "What makes fictional information threat intelligence rather than raw data?",
    "choices": [
      "It is analyzed, relevant, confidence-rated, decision-focused, and connected to a specific defensive need.",
      "It contains a technical indicator.",
      "It comes from an external source.",
      "It is marked urgent."
    ],
    "answer": 0,
    "explanation": "Threat intelligence should support a defined decision with analyzed context and confidence."
  },
  {
    "question": "What does a fictional sector warning prove about Northbridge?",
    "choices": [
      "It may identify relevant control priorities, but it does not prove local compromise.",
      "A confirmed incident occurred.",
      "Every supplier is malicious.",
      "All related services must be shut down."
    ],
    "answer": 0,
    "explanation": "External relevance and local incident evidence are different."
  },
  {
    "question": "How should a fictional weakly corroborated domain report be handled?",
    "choices": [
      "Use narrow monitoring and seek stronger evidence rather than broad blocking.",
      "Block it everywhere permanently.",
      "Declare a campaign match.",
      "Ignore all future reports."
    ],
    "answer": 0,
    "explanation": "Proportionate monitoring preserves safety while uncertainty remains."
  },
  {
    "question": "What is local validation?",
    "choices": [
      "Checking whether the fictional intelligence appears in approved internal evidence or affects local services, identities, assets, suppliers, or controls.",
      "Copying the report into a case.",
      "Trusting the source reputation alone.",
      "Increasing severity automatically."
    ],
    "answer": 0,
    "explanation": "Local validation connects external information to the actual fictional environment."
  },
  {
    "question": "Why should fictional intelligence have an expiration or review date?",
    "choices": [
      "Relevance, indicators, services, sources, controls, and local conditions can change.",
      "Every assessment becomes false after one week.",
      "Expiration proves no threat exists.",
      "Only weak sources need review."
    ],
    "answer": 0,
    "explanation": "Threat intelligence is time-sensitive and should be reassessed."
  },
  {
    "question": "What makes a fictional confidence statement strong?",
    "choices": [
      "It explains the evidence, source quality, corroboration, relevance, uncertainty, alternatives, and limitations.",
      "It uses the word certain.",
      "It hides conflicting evidence.",
      "It copies the source's confidence."
    ],
    "answer": 0,
    "explanation": "Confidence should show why the assessment is strong or limited."
  },
  {
    "question": "What is the safest response to fictional intelligence that is not locally applicable?",
    "choices": [
      "Document non-applicability, preserve the evidence, define a reassessment trigger, and avoid unnecessary action.",
      "Deploy a broad block anyway.",
      "Delete the source record.",
      "Declare the environment safe forever."
    ],
    "answer": 0,
    "explanation": "A no-action decision can be defensible when it is evidence-based and reviewable."
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

export default function ThreatIntelligenceSecurityOperationsPage() {
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
              Module I15
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I15.6 Threat Intelligence in Security Operations
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders evaluate fictional threat sources, judge
            relevance and confidence, validate local evidence, convert
            intelligence into proportionate defensive action, and review when
            information should be updated, expired, or closed.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I15: Security Operations Basics"
          lessonTitle="Threat Intelligence in Security Operations"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge intelligence sources, indicators, services, identities, suppliers, controls, cases, and decisions.",
            "I will not request, expose, or evaluate real credentials, employee information, school records, private company intelligence, supplier reports, incident evidence, case data, or confidential SOC information.",
            "I will distinguish raw data, information, intelligence, indicators, behaviors, hypotheses, warnings, assessments, and confirmed local evidence.",
            "I will not treat external attention, sector warnings, source reputation, old indicators, or campaign reporting as proof of local compromise.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Threat Report Is Not Automatically a Local Incident"
        >
          <p className="leading-8">
            A fictional sector bulletin warns that supplier identities may be
            abused against remote-support services. Northbridge has a recently
            expired supplier account, so the report is relevant. However, the
            report does not prove that the supplier account was misused.
            Professional intelligence work connects the report to a defined
            decision, evaluates source quality, checks local evidence, states
            confidence and limits, and recommends proportionate action.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak intelligence use
              </p>

              <p className="mt-2 leading-7">
                Copy indicators, trust one source, skip local validation,
                overstate confidence, block broadly, and keep watchlists active
                forever.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional intelligence use
              </p>

              <p className="mt-2 leading-7">
                Define the requirement, evaluate provenance, compare sources,
                map local relevance, state confidence, act proportionately, and
                reassess.
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
          title="Good Intelligence Reduces Uncertainty without Creating Unsupported Certainty"
        >
          <p className="leading-8">
            Fictional threat information can improve detection, supplier
            review, case triage, control validation, leadership awareness, and
            risk prioritization. Poorly handled intelligence can create false
            incident declarations, broad blocking, wasted analyst time, privacy
            problems, and permanent stale watchlists. The goal is not to collect
            the most information. The goal is to improve a real defensive
            decision.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Requirement–Source–Relevance–Assessment–Action Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Requirement", "Which fictional decision, audience, service, risk question, owner, and deadline define the intelligence need?"],
              ["Source", "Who produced the fictional information, why, when, through which method, with which credibility, reliability, bias, and handling limits?"],
              ["Relevance", "Which fictional technologies, identities, suppliers, services, data, controls, and local evidence make the information applicable or not applicable?"],
              ["Assessment", "Which fictional judgments, corroboration, conflicts, alternatives, confidence, potential impact, confirmed impact, and limitations follow?"],
              ["Action", "Which fictional monitoring, enrichment, testing, control review, owner request, communication, no-action, expiration, or further collection is proportionate?"],
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
            Threat Intelligence and Operationalization Terms
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
            Intelligence Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before Operationalizing Fictional Intelligence
          </h2>

          <div className="mt-6 grid gap-5">
            {intelligenceQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.question}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong analysis
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.strong}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak analysis
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.weak}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Reviewer question
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Source Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Fictional Intelligence Sources
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceRecords.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.source}
                  </h3>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">
                    Credibility: {item.credibility}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    Reliability: {item.reliability}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Claim", item.claim],
                    ["Timeliness", item.timeliness],
                    ["Local relevance", item.relevance],
                    ["Corroboration", item.corroboration],
                    ["Proportionate action", item.action],
                    ["Evidence limit", item.limit],
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

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Confidence Language
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Four Fictional Confidence Levels
          </h2>

          <div className="mt-6 grid gap-5">
            {confidenceLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.level}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Meaning
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.meaning}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong language
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.language}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Avoid
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.avoid}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Action Options
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Proportionate Fictional Intelligence Actions
          </h2>

          <div className="mt-6 grid gap-5">
            {actionTypes.map((item) => (
              <article
                key={item.action}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.action}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {[
                    ["Use when", item.when],
                    ["Fictional example", item.example],
                    ["Validation", item.validation],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.action}-${label}`}
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
            Intelligence Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Requirement to Review
          </h2>

          <div className="mt-6 grid gap-4">
            {intelligenceWorkflow.map((item) => (
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
          title="Fake Northbridge Threat Intelligence Dashboard"
          subtitle="Training dashboard for fictional intelligence quality only."
          metrics={[
            {
              label: "Sources under review",
              value: "8",
              note: "High-, medium-, and low-credibility fictional sources with different relevance and confidence are represented.",
            },
            {
              label: "Operational actions",
              value: "6",
              note: "Monitoring, enrichment, owner review, detection testing, control validation, and communication actions are open.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The fictional intelligence supports local defensive action but no confirmed incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Sector Bulletin Mentions Supplier Credential Abuse"
          severity="Medium"
          time="10:12 PM"
          source="Fake Northbridge Intelligence Console"
          details="A fictional current bulletin reports supplier credential abuse against remote-support services. Northbridge has one recently expired supplier account and a protected support service, but no supplied evidence confirms campaign activity or misuse."
          recommendation="Enrich the supplier-access case, review identity and support-service controls, validate local activity, assess source health, define confidence and limits, and avoid changing incident status without local evidence."
        />

        <FakeLogPanel
          title="Fake Northbridge Intelligence Assessment Timeline"
          logs={[
            "09:00 REQUIREMENT decision='supplier-access review'",
            "09:08 SOURCE bulletin='industry coordination'",
            "09:16 QUALITY credibility='Medium-High' reliability='Medium'",
            "09:24 RELEVANCE remote-support='present'",
            "09:32 RELEVANCE expired-supplier-account='present'",
            "09:40 LOCAL evidence campaign-match='not found'",
            "09:48 CORROBORATE second-advisory='similar behavior concept'",
            "09:56 ASSESS confidence='Medium-High'",
            "10:04 LIMIT misuse='not confirmed'",
            "10:12 ACTION enrich-case='NBR-CASE-222'",
            "10:20 ACTION identity-review='opened'",
            "10:28 ACTION detection-test='planned'",
            "10:36 COMMUNICATION incident-status='unchanged'",
            "10:44 OWNER third-party-risk='assigned'",
            "10:52 REVIEW date='7 days'",
            "11:00 CLOSE source-note='operationalized with limits'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Northbridge Intelligence Findings and Limits
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

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Evidence support
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.support}</p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Alternative
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.alternative}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Limitation
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.limitation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Does the Supplier Campaign Bulletin Prove Local Compromise?"
          evidence={[
            "The fictional bulletin describes supplier credential abuse against remote-support services.",
            "Northbridge uses a fictional remote-support service.",
            "One fictional supplier account remains active after approval expiration.",
            "A second fictional source describes similar behavior concepts.",
            "No supplied local evidence shows a campaign match, misuse, or disclosure.",
            "Identity and support-service reviews are available.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The bulletin is locally relevant and should enrich defensive review, but it does not prove Northbridge compromise or supplier misuse.",
            "A confirmed incident occurred because Northbridge uses remote support.",
            "The supplier must be blamed immediately.",
            "The bulletin should be ignored because no incident is confirmed.",
          ]}
          bestAnswer={0}
          explanation="Relevance supports proportionate action, while local validation is still required for stronger conclusions."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Threat Intelligence in Security Operations"
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
          title="Build the Northbridge Threat Intelligence Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Requirements, Sources, Assessments, Actions, and Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge intelligence
                records to produce a decision-focused and evidence-limited
                intelligence package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Intelligence requirement with decision, audience, service, owner, deadline, privacy, and evidence needs.</li>
                <li>Source register with provenance, purpose, credibility, reliability, timeliness, specificity, access, bias, and handling limits.</li>
                <li>Relevance map for technologies, identities, suppliers, services, data, controls, local evidence, and exclusions.</li>
                <li>Corroboration and conflict matrix with alternatives, missing evidence, confidence, and limitations.</li>
                <li>Intelligence note with key judgments, potential impact, confirmed impact, what remains unproven, and review date.</li>
                <li>Action plan covering monitor, enrich, detection test, control validation, owner review, communication, no action, and further collection.</li>
                <li>Operationalization record with owners, deadlines, case links, tests, metrics, rollback, expiration, and closure.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company intelligence, supplier reports, incident evidence,
            case data, or confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Weak Community Source Reports a Suspicious Domain"
          scenario="The fictional domain claim is recent but weakly corroborated, and no local evidence shows contact with it."
          choices={[
            {
              label: "Choice A",
              response:
                "Create a narrow time-bound watchlist, verify data quality, seek stronger sources, define an owner and review date, and avoid broad blocking.",
              outcome:
                "Best intelligence choice. Uncertainty is preserved while collection improves.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Block the domain everywhere permanently.",
              outcome:
                "Weak. The claim and local relevance are uncertain.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Declare a local campaign match.",
              outcome:
                "Unsupported. No local evidence confirms contact or campaign activity.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A High-Credibility Vendor Notice Does Not Match Production Inventory"
          scenario="The fictional vendor notice is specific and reliable, but healthy inventory records show the affected version is not deployed in production."
          choices={[
            {
              label: "Choice A",
              response:
                "Document production non-applicability, verify test or untracked environments, define a reassessment trigger, and avoid unnecessary production action.",
              outcome:
                "Best applicability choice. Strong source quality does not replace local relevance.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Treat production as affected because the vendor is credible.",
              outcome:
                "Weak. Local inventory evidence does not support production exposure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the notice because it is not currently applicable.",
              outcome:
                "Weak. The evidence and reassessment path should be preserved.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Threat Intelligence in Security Operations Checklist"
          items={[
            "I can define a fictional intelligence requirement linked to a real defensive decision, audience, owner, service, and deadline.",
            "I can distinguish fictional threat data, information, intelligence, indicators, behaviors, hypotheses, warnings, assessments, and confirmed local evidence.",
            "I can evaluate fictional provenance, purpose, credibility, reliability, timeliness, specificity, access, bias, corroboration, and handling limits.",
            "I can map fictional intelligence to local technologies, identities, suppliers, services, data, controls, exposure, and evidence.",
            "I can write fictional confidence statements with evidence, conflicts, alternatives, uncertainty, limitations, and review dates.",
            "I can choose fictional monitoring, enrichment, detection testing, control validation, owner review, communication, no action, or further collection proportionately.",
            "I can avoid changing fictional incident status without local validation.",
            "I can assign fictional owners, deadlines, tests, source-health checks, case links, metrics, expiration, and closure.",
            "I can document fictional non-applicability without discarding the evidence or future trigger.",
            "I will use only fictional evidence and never expose real credentials, company intelligence, employee data, school records, suppliers, incidents, cases, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I15.6 Mini Quiz: Threat Intelligence in Security Operations"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Threat Intelligence in Security Operations Package for Northbridge. Include the intelligence requirement, source register, provenance review, credibility and reliability assessment, relevance map, corroboration matrix, confidence statement, intelligence note, action plan, case enrichment, detection and control recommendations, owner and deadline map, review and expiration plan, metrics, leadership summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional sources, indicators, behaviors, systems, identities, suppliers, services, cases, actions, dates, assessments, and outcomes.",
            "Do not treat external reporting, source reputation, old indicators, sector warnings, or campaign language as automatic proof of local compromise.",
            "Make every assessment traceable to a requirement, source quality, local relevance, corroboration, confidence, limitation, owner, action, and review date.",
            "Show why strong source credibility and local applicability are different questions.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Threat intelligence is analyzed, relevant, confidence-rated, and tied to a specific defensive decision.",
            "Source credibility and the reliability of a specific claim are different.",
            "External reporting does not prove local compromise.",
            "Local validation connects intelligence to real fictional services, identities, suppliers, assets, controls, and evidence.",
            "Proportionate actions can include monitoring, enrichment, testing, control review, communication, no action, or further collection.",
            "Confidence, uncertainty, expiration, review, and closure should be explicit.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational intelligence.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I15
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