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
const nextLesson = `${modulePath}/fake-phishing-triage-lab`;

const objectives = [
  "Define a fictional log-investigation scope that identifies the exact question, systems, identities, services, time window, approved evidence, owners, privacy limits, and expected decisions.",
  "Evaluate fictional authentication, endpoint, network, application, cloud, and source-health records for relevance, timestamp quality, completeness, duplication, conflicts, and blind spots.",
  "Build a normalized fictional timeline that separates event time, collection time, alert time, analyst action time, owner response time, and validation time.",
  "Write evidence-limited fictional findings that distinguish direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and next action.",
  "Create a portfolio-safe fictional log-investigation package with an evidence register, timeline, findings, owner map, escalation plan, validation record, leadership summary, and improvement recommendations."
];
const vocabulary = [
  [
    "Log source",
    "A fictional system, service, application, identity platform, network device, endpoint tool, cloud platform, supplier, or monitoring component that produces approved records."
  ],
  [
    "Event time",
    "The fictional time when an action or condition occurred at the source."
  ],
  [
    "Collection time",
    "The fictional time when a monitoring pipeline received or stored the event."
  ],
  [
    "Alert time",
    "The fictional time when detection logic created a signal from one or more events."
  ],
  [
    "Normalization",
    "A fictional process that converts different event formats, fields, and time zones into a consistent investigative view."
  ],
  [
    "Source health",
    "A fictional assessment of delivery, timeliness, parsing, completeness, coverage, duplication, ownership, and known blind spots."
  ],
  [
    "Evidence gap",
    "A fictional missing, delayed, stale, incomplete, conflicting, or unavailable source that limits confidence."
  ],
  [
    "Correlation",
    "A fictional process of comparing records across sources to identify relationships in time, identity, asset, service, action, or outcome."
  ],
  [
    "Direct observation",
    "A fictional statement copied from healthy evidence without added interpretation."
  ],
  [
    "Supported conclusion",
    "A fictional interpretation that follows reasonably from multiple evidence items and clearly states confidence and limits."
  ],
  [
    "Alternate explanation",
    "A fictional plausible interpretation that also fits part of the evidence and should be tested rather than ignored."
  ],
  [
    "Potential impact",
    "A fictional harm that could result if a condition is real but has not yet been confirmed."
  ],
  [
    "Confirmed impact",
    "A fictional harm directly supported by approved evidence."
  ],
  [
    "False sequence",
    "A fictional incorrect timeline caused by delayed ingestion, time-zone mismatch, duplicated events, or misordered records."
  ],
  [
    "Evidence register",
    "A fictional index of evidence identifiers, sources, owners, timestamps, relevance, health, scope, confidence, handling, and limitations."
  ],
  [
    "Validation record",
    "A fictional record showing whether security outcome, service function, source recovery, control state, owner signoff, and residual risk were confirmed."
  ]
];
const sourceRecords = [
  {
    "id": "NBR-LOG-01",
    "source": "Fictional identity sign-in service",
    "record": "A supplier account signed in to the confidential support service at 18:42.",
    "event_time": "18:42:11",
    "collection_time": "18:42:20",
    "health": "Healthy",
    "owner": "Identity Owner",
    "relevance": "Directly supports current access by an identity whose approval status requires review.",
    "limit": "The sign-in record alone does not prove which actions followed."
  },
  {
    "id": "NBR-LOG-02",
    "source": "Fictional supplier exception register",
    "record": "The supplier access exception expired at 17:00 and no approved extension is present.",
    "event_time": "17:00:00",
    "collection_time": "17:01:05",
    "health": "Healthy",
    "owner": "Third-Party Risk Owner",
    "relevance": "Supports that the current access capability is outside the documented approval window.",
    "limit": "A legitimate but undocumented emergency support need may exist."
  },
  {
    "id": "NBR-LOG-03",
    "source": "Fictional support-service activity log",
    "record": "The supplier identity viewed one service-status page and attempted no configuration changes.",
    "event_time": "18:43:02",
    "collection_time": "18:43:11",
    "health": "Healthy",
    "owner": "Service Owner",
    "relevance": "Provides limited context about post-sign-in activity.",
    "limit": "The source covers only the support service and not other connected systems."
  },
  {
    "id": "NBR-LOG-04",
    "source": "Fictional endpoint monitoring source",
    "record": "The administrator workstation started an approved maintenance tool at 19:05.",
    "event_time": "19:05:44",
    "collection_time": "19:06:01",
    "health": "Healthy",
    "owner": "Endpoint Owner",
    "relevance": "Supports the approved maintenance explanation for one later alert.",
    "limit": "It does not prove every subsequent action remained within scope."
  },
  {
    "id": "NBR-LOG-05",
    "source": "Fictional maintenance change record",
    "record": "Maintenance was approved from 19:00 to 20:00 for the reporting service and one named identity.",
    "event_time": "19:00:00",
    "collection_time": "18:00:00",
    "health": "Healthy",
    "owner": "Service Owner",
    "relevance": "Defines the approved maintenance identity, service, task, and time boundary.",
    "limit": "A valid change record does not automatically make all observed activity expected."
  },
  {
    "id": "NBR-LOG-06",
    "source": "Fictional network gateway",
    "record": "The maintenance workstation connected to the reporting service at 19:07 and 19:14.",
    "event_time": "19:07:13 / 19:14:28",
    "collection_time": "19:07:17 / 19:14:34",
    "health": "Healthy",
    "owner": "Network Owner",
    "relevance": "Corroborates the approved identity and service relationship.",
    "limit": "Network connection records do not show the exact application actions."
  },
  {
    "id": "NBR-LOG-07",
    "source": "Fictional application audit source",
    "record": "The reporting service recorded one configuration read and one approved restart.",
    "event_time": "19:08:02 / 19:15:03",
    "collection_time": "19:38:12 / 19:38:16",
    "health": "Delayed",
    "owner": "Application Owner",
    "relevance": "Supports expected maintenance actions but arrived thirty minutes late.",
    "limit": "The delay could create a false timeline if collection time is confused with event time."
  },
  {
    "id": "NBR-LOG-08",
    "source": "Fictional source-health monitor",
    "record": "The application audit source had a thirty-one-minute delivery delay.",
    "event_time": "19:06:00",
    "collection_time": "19:06:04",
    "health": "Healthy",
    "owner": "Telemetry Owner",
    "relevance": "Explains why supporting application records appeared after the alert.",
    "limit": "The monitor proves delay, not the completeness of all recovered events."
  },
  {
    "id": "NBR-LOG-09",
    "source": "Fictional cloud storage configuration history",
    "record": "A confidential storage policy changed at 20:11 outside the approved change window.",
    "event_time": "20:11:26",
    "collection_time": "20:11:31",
    "health": "Healthy",
    "owner": "Cloud Control Owner",
    "relevance": "Supports an unsupported configuration change requiring owner review.",
    "limit": "The record does not confirm whether effective access expanded."
  },
  {
    "id": "NBR-LOG-10",
    "source": "Fictional storage access monitor",
    "record": "No new external access event was observed between 20:11 and 20:45.",
    "event_time": "20:11–20:45",
    "collection_time": "20:46:02",
    "health": "Healthy with limited scope",
    "owner": "Cloud Security Owner",
    "relevance": "Provides some evidence against immediate confirmed data access.",
    "limit": "The source may not cover every access path or delayed event."
  },
  {
    "id": "NBR-LOG-11",
    "source": "Fictional reporting audit-source monitor",
    "record": "A critical audit source stopped delivering events at 21:02.",
    "event_time": "21:02:00",
    "collection_time": "21:02:05",
    "health": "Healthy",
    "owner": "Telemetry Owner",
    "relevance": "Supports a current monitoring blind spot on a critical service.",
    "limit": "The source gap does not prove malicious activity occurred."
  },
  {
    "id": "NBR-LOG-12",
    "source": "Fictional compensating service record",
    "record": "Alternate service-health and change records remained current during the source gap.",
    "event_time": "21:02–21:37",
    "collection_time": "Current",
    "health": "Healthy",
    "owner": "Service Owner",
    "relevance": "Provides partial compensating evidence while the preferred source is unavailable.",
    "limit": "Coverage is narrower than the missing audit source."
  }
];
const timelineRecords = [
  {
    "time": "17:00",
    "type": "Governance",
    "event": "Fictional supplier access exception expires.",
    "source": "NBR-LOG-02",
    "interpretation": "Documented approval ends."
  },
  {
    "time": "18:42",
    "type": "Identity",
    "event": "Supplier account signs in to the confidential support service.",
    "source": "NBR-LOG-01",
    "interpretation": "Current access occurs after expiration."
  },
  {
    "time": "18:43",
    "type": "Service",
    "event": "Supplier identity views one status page.",
    "source": "NBR-LOG-03",
    "interpretation": "Limited activity is observed; broader misuse is not supported."
  },
  {
    "time": "19:00",
    "type": "Change",
    "event": "Approved maintenance window begins.",
    "source": "NBR-LOG-05",
    "interpretation": "Maintenance context becomes active."
  },
  {
    "time": "19:05",
    "type": "Endpoint",
    "event": "Approved maintenance tool starts.",
    "source": "NBR-LOG-04",
    "interpretation": "Expected maintenance behavior is supported."
  },
  {
    "time": "19:07",
    "type": "Network",
    "event": "Maintenance workstation connects to the reporting service.",
    "source": "NBR-LOG-06",
    "interpretation": "Identity and service relationship is corroborated."
  },
  {
    "time": "19:08",
    "type": "Application",
    "event": "Configuration read occurs.",
    "source": "NBR-LOG-07",
    "interpretation": "Action fits the approved task but arrives late."
  },
  {
    "time": "19:15",
    "type": "Application",
    "event": "Approved restart occurs.",
    "source": "NBR-LOG-07",
    "interpretation": "Expected action is supported."
  },
  {
    "time": "19:38",
    "type": "Collection",
    "event": "Delayed application records arrive.",
    "source": "NBR-LOG-07 / NBR-LOG-08",
    "interpretation": "Collection delay explains the initial evidence gap."
  },
  {
    "time": "20:11",
    "type": "Cloud",
    "event": "Confidential storage policy changes outside the approved window.",
    "source": "NBR-LOG-09",
    "interpretation": "Unsupported control change requires review."
  },
  {
    "time": "20:46",
    "type": "Validation",
    "event": "No covered external access is observed after the storage change.",
    "source": "NBR-LOG-10",
    "interpretation": "Confirmed access impact remains unsupported."
  },
  {
    "time": "21:02",
    "type": "Telemetry",
    "event": "Critical reporting audit source stops delivering.",
    "source": "NBR-LOG-11",
    "interpretation": "Current monitoring blind spot begins."
  },
  {
    "time": "21:10",
    "type": "Operations",
    "event": "Compensating service records are confirmed healthy.",
    "source": "NBR-LOG-12",
    "interpretation": "Partial visibility remains available."
  },
  {
    "time": "21:37",
    "type": "Telemetry",
    "event": "Preferred source restoration is still pending.",
    "source": "NBR-LOG-11",
    "interpretation": "High-priority source-health work remains open."
  }
];
const findings = [
  {
    "id": "NBR-FIND-01",
    "statement": "The fictional supplier account used active access after its documented exception expired.",
    "support": "Healthy identity sign-in, healthy exception record, confidential service scope, and post-sign-in service activity.",
    "alternative": "A legitimate but undocumented emergency support need may exist.",
    "confidence": "High",
    "impact": "Unsupported capability is confirmed; misuse and disclosure are not confirmed.",
    "next": "Identity, service, and third-party risk owners should remove or narrowly renew access and complete activity review."
  },
  {
    "id": "NBR-FIND-02",
    "statement": "The fictional maintenance activity is strongly supported as expected behavior within the approved scope.",
    "support": "Approved change, approved identity, approved tool, network connection, delayed application records, and source-health explanation.",
    "alternative": "An unobserved out-of-scope action may still exist because one source was delayed.",
    "confidence": "High",
    "impact": "No unauthorized action or service impact is confirmed.",
    "next": "Complete source recovery review and open a narrow detection-tuning task."
  },
  {
    "id": "NBR-FIND-03",
    "statement": "The fictional application source delay created a misleading evidence sequence during maintenance triage.",
    "support": "Event times at 19:08 and 19:15, collection times near 19:38, and healthy source-health evidence confirming delay.",
    "alternative": "Some individual application events may also be missing.",
    "confidence": "High",
    "impact": "Investigation confidence was reduced temporarily; malicious activity is not supported.",
    "next": "Improve source-delay monitoring, analyst timeline guidance, and closure criteria."
  },
  {
    "id": "NBR-FIND-04",
    "statement": "The fictional storage-policy change requires owner review and rollback preparation.",
    "support": "Healthy configuration history, confidential scope, no matching approved window, and limited post-change access evidence.",
    "alternative": "The change may be legitimate but undocumented.",
    "confidence": "Medium-High",
    "impact": "Possible access-control exposure exists; unauthorized data access is unconfirmed.",
    "next": "Validate effective permissions and authorize rollback if unsupported."
  },
  {
    "id": "NBR-FIND-05",
    "statement": "The fictional critical audit-source gap is a High-priority monitoring risk.",
    "support": "Healthy source-health monitor, critical service, current thirty-five-minute gap, and narrower compensating evidence.",
    "alternative": "The outage may be a nonsecurity operational failure.",
    "confidence": "High",
    "impact": "Monitoring assurance is reduced; malicious activity during the gap is not confirmed.",
    "next": "Restore or fail over the source, preserve the gap window, and validate recovered events."
  },
  {
    "id": "NBR-FIND-06",
    "statement": "The supplied fictional records support multiple separate cases rather than one combined incident.",
    "support": "Different identities, services, time periods, owners, evidence sources, causes, decisions, and confidence levels.",
    "alternative": "Later evidence could identify a relationship between some records.",
    "confidence": "High",
    "impact": "Combining them now would create unsupported scope and confusing ownership.",
    "next": "Maintain separate case records with explicit links only where evidence supports a relationship."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the investigation question",
    "detail": "State the fictional event, identity, system, service, time window, business context, approved evidence, exclusions, owners, and required decision.",
    "output": "Investigation charter."
  },
  {
    "step": "2",
    "title": "Inventory and validate sources",
    "detail": "List fictional sources, owners, timestamps, health, coverage, parsing, duplicates, delays, conflicts, relevance, and limitations.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Normalize the timeline",
    "detail": "Separate fictional event time, collection time, alert time, action time, communication time, and validation time.",
    "output": "Normalized timeline."
  },
  {
    "step": "4",
    "title": "Correlate identities, assets, and services",
    "detail": "Compare fictional users, service accounts, suppliers, endpoints, network records, applications, cloud resources, changes, and owners.",
    "output": "Correlation map."
  },
  {
    "step": "5",
    "title": "Write findings and alternatives",
    "detail": "Document fictional observations, supported conclusions, alternate explanations, missing evidence, confidence, potential impact, confirmed impact, and limits.",
    "output": "Findings matrix."
  },
  {
    "step": "6",
    "title": "Assign owners and actions",
    "detail": "Route fictional identity, service, telemetry, cloud, supplier, detection, risk, communication, or response tasks with authority and deadlines.",
    "output": "Action and escalation plan."
  },
  {
    "step": "7",
    "title": "Validate outcomes",
    "detail": "Confirm fictional access state, source recovery, effective permissions, service function, detection behavior, owner decisions, and residual risk.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Close and improve",
    "detail": "Complete fictional peer review, closure criteria, retention, handoff, metrics, source, detection, runbook, training, and governance improvements.",
    "output": "Closure and improvement package."
  }
];
const commonMistakes = [
  "Reading fictional collection time as though it were event time.",
  "Using one source as proof when additional healthy sources disagree or remain missing.",
  "Assuming a healthy source has complete coverage of every relevant event.",
  "Treating missing evidence as proof that harmful activity did or did not occur.",
  "Combining unrelated identities, services, suppliers, time periods, and owners into one case.",
  "Copying raw log text without explaining relevance, source health, scope, confidence, and limitations.",
  "Writing alternate explanations as confirmed facts.",
  "Reporting potential impact as confirmed impact.",
  "Treating approved maintenance as proof that every action was expected.",
  "Treating expired access as proof of malicious intent.",
  "Closing a case when the alert stops instead of when evidence and validation criteria are complete.",
  "Ignoring source-health records when analyzing gaps, delays, or missing fields.",
  "Taking action without the correct identity, service, cloud, supplier, risk, or response authority.",
  "Using or exposing any real credentials, employee data, school records, company logs, supplier records, private cases, incident evidence, or confidential SOC information."
];
const quizQuestions = [
  {
    "question": "Why must event time and collection time be separated in a fictional log investigation?",
    "choices": [
      "Delayed ingestion can otherwise create a false sequence of events.",
      "The times are always identical.",
      "Collection time proves user intent.",
      "Only leadership reports need timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in the evidence pipeline."
  },
  {
    "question": "What does the fictional expired supplier exception prove?",
    "choices": [
      "The documented approval window ended, but malicious intent and misuse remain unconfirmed.",
      "A confirmed breach occurred.",
      "The supplier accessed every system.",
      "The account must have been stolen."
    ],
    "answer": 0,
    "explanation": "Expired approval confirms unsupported capability, not intent or impact."
  },
  {
    "question": "What is the strongest conclusion about the fictional maintenance activity?",
    "choices": [
      "Approved context and correlated evidence strongly support expected behavior, while the delayed source remains a documented limitation.",
      "Every maintenance alert is false.",
      "The alert proves an incident.",
      "The delayed source should be ignored."
    ],
    "answer": 0,
    "explanation": "The conclusion preserves both strong expected context and remaining evidence limits."
  },
  {
    "question": "What should happen after a fictional confidential storage policy changes outside the approved window?",
    "choices": [
      "Validate effective permissions and prepare authorized rollback while preserving that data access is unconfirmed.",
      "Report confirmed data exposure.",
      "Delete the configuration history.",
      "Ignore the change because no access event is visible."
    ],
    "answer": 0,
    "explanation": "The control change requires action without overstating impact."
  },
  {
    "question": "What does a fictional critical audit-source gap prove?",
    "choices": [
      "Monitoring visibility is reduced, but harmful activity during the gap is not automatically confirmed.",
      "A major incident occurred.",
      "The service is unavailable.",
      "Every event during the gap was malicious."
    ],
    "answer": 0,
    "explanation": "Source loss creates assurance risk, not automatic incident evidence."
  },
  {
    "question": "What makes a fictional finding defensible?",
    "choices": [
      "It links exact evidence, source health, scope, timeline, alternatives, confidence, impact status, limitations, owner, and next action.",
      "It repeats the alert title.",
      "It hides missing evidence.",
      "It assumes the worst-case explanation."
    ],
    "answer": 0,
    "explanation": "A defensible finding makes the entire reasoning chain reviewable."
  },
  {
    "question": "Why should the supplied fictional records remain in separate cases?",
    "choices": [
      "They involve different systems, identities, services, owners, evidence, time periods, causes, and decisions.",
      "Every alert must have its own case.",
      "Separate cases always receive higher priority.",
      "Cases should never be linked."
    ],
    "answer": 0,
    "explanation": "Case boundaries should follow evidence and decision ownership."
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

export default function FakeLogInvestigationLabPage() {
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
              Lesson 1 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I16.1 Fake Log Investigation Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Investigate fictional authentication, endpoint, network,
            application, cloud, supplier, and source-health records while
            preserving timeline accuracy, evidence quality, alternate
            explanations, confidence, ownership, and safe defensive scope.
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
          lessonTitle="Fake Log Investigation Lab"
          lessonNumber={1}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only the supplied fictional Northbridge logs, identities, services, suppliers, systems, cases, timestamps, owners, and decisions.",
            "I will not request, expose, or analyze real credentials, employee data, school records, private company logs, supplier records, incident evidence, or confidential SOC information.",
            "I will distinguish event time, collection time, alert time, analyst action time, owner response time, and validation time.",
            "I will separate direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and limitations.",
            "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same Logs Can Tell Different Stories if the Timeline Is Wrong"
        >
          <p className="leading-8">
            A fictional application event occurred at 19:08 but did not arrive
            in the monitoring system until 19:38. If the analyst treats
            collection time as event time, the action appears to happen after
            the alert instead of during approved maintenance. Professional log
            investigation validates source health, normalizes timestamps, and
            keeps observations separate from interpretation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak investigation
              </p>

              <p className="mt-2 leading-7">
                Copy raw lines, ignore source health, mix time fields, assume
                missing evidence proves harm, combine unrelated events, and
                close when the alert disappears.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional investigation
              </p>

              <p className="mt-2 leading-7">
                Define scope, inventory sources, normalize time, correlate
                context, write evidence-limited findings, assign owners,
                validate outcomes, and improve the process.
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
          title="Logs Support Decisions Only When Their Quality and Scope Are Understood"
        >
          <p className="leading-8">
            Fictional logs may support access removal, source restoration,
            detection tuning, case closure, owner escalation, control rollback,
            supplier review, or leadership communication. A detailed record is
            not automatically complete or correct. Strong investigation
            explains which source supports which conclusion, what the source
            cannot prove, and what action remains necessary.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Scope–Source–Time–Correlation–Decision Model"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Scope", "Which fictional question, system, identity, service, supplier, time window, exclusions, owner, and decision define the investigation?"],
              ["Source", "Which fictional records exist, who owns them, how healthy are they, what do they cover, and what are their limits?"],
              ["Time", "Which fictional event, collection, alert, action, communication, and validation times must be normalized?"],
              ["Correlation", "Which fictional identities, assets, services, changes, network paths, applications, cloud resources, and source-health records relate?"],
              ["Decision", "Which fictional conclusion, confidence, impact status, owner, action, authority, deadline, validation, and closure follow from the evidence?"],
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
            Log Investigation and Evidence Terms
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
            Evidence Register
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Twelve Fictional Northbridge Log Sources
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
                    {item.health}
                  </span>

                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-200">
                    {item.owner}
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Record", item.record],
                    ["Event time", item.event_time],
                    ["Collection time", item.collection_time],
                    ["Relevance", item.relevance],
                    ["Limitation", item.limit],
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
            Normalized Timeline
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Fourteen Fictional Events in Investigative Order
          </h2>

          <div className="mt-6 grid gap-4">
            {timelineRecords.map((item, index) => (
              <article
                key={`${item.time}-${item.source}`}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.18fr_0.25fr_1fr_0.85fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="font-black text-cyan-100">{item.time}</p>

                <p className="text-sm font-black uppercase tracking-[0.14em] text-purple-200">
                  {item.type}
                </p>

                <div>
                  <p className="text-sm leading-6 text-slate-300">{item.event}</p>
                  <p className="mt-1 font-mono text-xs text-cyan-300">
                    {item.source}
                  </p>
                </div>

                <p className="text-sm leading-6 text-emerald-100">
                  {item.interpretation}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Investigation Workflow
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Steps from Scope to Improvement
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
          title="Fake Northbridge Log Investigation Dashboard"
          subtitle="Training dashboard for fictional evidence only."
          metrics={[
            {
              label: "Sources reviewed",
              value: "12",
              note: "Identity, governance, service, endpoint, network, application, cloud, telemetry, and compensating records are represented.",
            },
            {
              label: "Open evidence gaps",
              value: "2",
              note: "One delayed application source and one active critical audit-source gap limit current assurance.",
            },
            {
              label: "Confirmed incidents",
              value: "0",
              note: "The fictional evidence supports active risks and control actions but no confirmed incident.",
            },
          ]}
        />

        <FakeAlertCard
          title="Expired Supplier Access and Critical Audit Gap Require Separate Cases"
          severity="High"
          time="9:42 PM"
          source="Fake Northbridge Investigation Console"
          details="A fictional supplier identity accessed a confidential service after approval expiration while a separate critical audit source remains unavailable. The records involve different systems, owners, evidence, and decisions."
          recommendation="Open separate cases, remove or narrowly renew supplier access, restore or fail over the source, preserve evidence limits, assign owners and deadlines, validate outcomes, and avoid combining the records into one unsupported incident."
        />

        <FakeLogPanel
          title="Fake Northbridge Mixed Log Extract"
          logs={[
            "17:00:00 EXCEPTION supplier-support='expired'",
            "18:42:11 AUTH supplier-identity='success'",
            "18:43:02 SERVICE page='status-view'",
            "19:00:00 CHANGE maintenance-window='open'",
            "19:05:44 ENDPOINT tool='approved-maintenance'",
            "19:07:13 NETWORK destination='reporting-service'",
            "19:08:02 APP action='configuration-read'",
            "19:15:03 APP action='approved-restart'",
            "19:38:12 COLLECTION app-source='delayed'",
            "20:11:26 CLOUD policy-change='outside-window'",
            "20:46:02 ACCESS external-events='none-observed-in-covered-source'",
            "21:02:00 SOURCE reporting-audit='delivery-stopped'",
            "21:10:00 COMPENSATE service-records='healthy'",
            "21:37:00 SOURCE restoration='pending'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Findings Matrix
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Six Fictional Findings with Confidence and Limits
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
                    ["Next action", item.next],
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
          title="Did the Delayed Application Log Prove the Maintenance Alert Was Malicious?"
          evidence={[
            "The fictional maintenance window was approved from 19:00 to 20:00.",
            "The approved maintenance identity and tool were used.",
            "Network records show connections to the approved reporting service.",
            "Application actions occurred at 19:08 and 19:15.",
            "The application records were collected near 19:38 because the source was delayed.",
            "No unauthorized action or service impact is confirmed.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The delayed source created temporary uncertainty, but the normalized event times and correlated evidence strongly support expected maintenance activity.",
            "The delayed source proves the maintenance was malicious.",
            "The application records should be ignored because they arrived late.",
            "Every maintenance alert should be permanently suppressed.",
          ]}
          bestAnswer={0}
          explanation="Source delay affects confidence and sequence, but normalized times and corroborating evidence support the expected explanation."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Fictional Log Investigations"
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
          title="Build the Northbridge Fake Log Investigation Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Your fictional assignment
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Scope, Evidence, Timeline, Findings, Actions, and Validation
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Use only the supplied fictional Northbridge records to create a
                complete, evidence-limited investigation package.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Investigation charter with question, scope, exclusions, owners, privacy, authority, and decision deadline.</li>
                <li>Evidence register with source, owner, event time, collection time, health, relevance, confidence, and limitations.</li>
                <li>Normalized timeline that separates event, collection, alert, action, communication, and validation times.</li>
                <li>Correlation map for identities, endpoints, network paths, services, cloud resources, changes, suppliers, and owners.</li>
                <li>Findings matrix with observations, supported conclusions, alternatives, missing evidence, confidence, potential impact, and confirmed impact.</li>
                <li>Action, escalation, communication, rollback, and validation plan.</li>
                <li>Case-boundary and evidence-linkage explanation.</li>
                <li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Complete the lab only with fictional evidence displayed on this
            page. Do not use real credentials, employee information, school
            records, company logs, supplier records, private cases, incidents,
            or confidential SOC information.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Analyst Wants to Merge the Supplier Access and Source Gap into One Incident"
          scenario="The fictional records occur during the same shift but involve different systems, owners, evidence sources, timelines, and decisions."
          choices={[
            {
              label: "Choice A",
              response:
                "Open separate cases, preserve any evidence-based links, assign distinct owners and deadlines, and combine them only if later evidence supports a relationship.",
              outcome:
                "Best investigation choice. Case scope follows evidence and decision ownership.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Merge them because they both appear serious.",
              outcome:
                "Unsupported. Similar urgency does not prove a shared cause.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the source gap because the supplier account is more urgent.",
              outcome:
                "Unsafe. The source gap remains a separate High-priority monitoring risk.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Leadership Wants a One-Sentence Storage-Policy Update"
          scenario="The fictional policy changed outside the approved window, but effective permissions and data-access impact remain under review."
          choices={[
            {
              label: "Choice A",
              response:
                "Report that an unsupported confidential-storage policy change is confirmed, access impact is unconfirmed, rollback review is active, owners are assigned, and the next update follows validation.",
              outcome:
                "Best communication choice. Facts and limits remain clear.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Report that confidential data was exposed.",
              outcome:
                "Unsupported. No data-access impact is confirmed.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Report that no risk exists because no covered access event was observed.",
              outcome:
                "Unsupported. The access source has limited scope.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Fake Log Investigation Checklist"
          items={[
            "I can define a fictional investigation question, scope, systems, identities, services, suppliers, time window, exclusions, owners, and decisions.",
            "I can distinguish fictional event, collection, alert, analyst action, owner response, and validation times.",
            "I can evaluate fictional source delivery, parsing, completeness, timeliness, duplication, coverage, ownership, and blind spots.",
            "I can correlate fictional identity, endpoint, network, application, cloud, change, supplier, and source-health records.",
            "I can separate fictional observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and limitations.",
            "I can create separate fictional cases when systems, identities, owners, timelines, evidence, causes, and decisions differ.",
            "I can assign fictional identity, service, telemetry, cloud, supplier, detection, risk, and communication owners correctly.",
            "I can write fictional findings with exact evidence, source health, scope, timeline, confidence, limits, owner, action, and validation.",
            "I can validate fictional access state, source recovery, permissions, service function, owner decisions, and residual risk before closure.",
            "I will use only fictional evidence and never expose real credentials, company logs, employee data, school records, suppliers, incidents, or confidential SOC information.",
          ]}
        />

        <MiniQuiz
          title="I16.1 Mini Quiz: Fake Log Investigation Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Fake Log Investigation Package for Northbridge. Include the investigation charter, source inventory, evidence register, normalized timeline, correlation map, facts and alternatives matrix, findings, case-boundary decision, owner and escalation map, action plan, communication record, validation, closure criteria, improvements, leadership summary, technical summary, reflection, and a portfolio-safety statement."
          tips={[
            "Use only fictional logs, identities, systems, services, suppliers, cases, sources, timestamps, actions, decisions, and outcomes.",
            "Do not treat source detail, alert severity, missing evidence, expired approval, approved maintenance, or absent access events as automatic proof.",
            "Make every conclusion traceable to exact evidence, source health, scope, timeline, alternatives, confidence, limits, owner, action, and validation.",
            "Show how collection delay can create a false sequence if timestamps are not normalized.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Log investigation begins with a clear question and scope.",
            "Event time and collection time must be separated.",
            "Source health determines how much confidence a log can support.",
            "Missing evidence changes confidence but does not prove harm or safety.",
            "Case boundaries should follow evidence, systems, identities, owners, timelines, and decisions.",
            "Findings should distinguish observations, conclusions, alternatives, impact status, confidence, and limits.",
            "Portfolio artifacts should use fully fictional evidence and never expose real organizational logs.",
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