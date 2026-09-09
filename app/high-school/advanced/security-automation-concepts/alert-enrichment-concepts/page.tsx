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
const modulePath = `${trackPath}/security-automation-concepts`;
const previousLesson = `${modulePath}/automation-vs-human-judgment`;
const nextLesson = `${modulePath}/ticketing-and-workflow-automation`;

const objectives = [
  "Explain alert enrichment as the safe addition of relevant context, ownership, asset metadata, timestamps, known-good references, prior workflow history, and evidence confidence to a synthetic alert without taking autonomous response action.",
  "Evaluate enrichment sources using relevance, freshness, attribution, completeness, confidence, privacy impact, sensitivity, ownership, and failure behavior rather than treating every available field as useful.",
  "Design safe handling for missing, stale, conflicting, duplicated, or low-confidence enrichment so uncertainty remains visible and analysts can still review the alert.",
  "Distinguish enrichment that supports analyst judgment from over-enrichment that creates noise, unnecessary sensitive-data exposure, or false confidence.",
  "Build an Alert Enrichment Plan that becomes the third artifact in the A17 Safe Automation Design and Governance Plan.",
];

const enrichmentPurposes = [
  {
    purpose: "Asset context",
    example:
      "Attach fictional asset owner, business service, criticality, environment label, and support group.",
    analystValue:
      "Helps the analyst understand what the alert is associated with before interpreting significance.",
    caution:
      "The enrichment should not decide severity simply because an asset is important.",
  },
  {
    purpose: "Ownership context",
    example:
      "Attach the fictional team responsible for the asset or service.",
    analystValue:
      "Reduces manual lookup and improves routing or consultation.",
    caution:
      "Ownership data must be current; stale ownership can misroute work.",
  },
  {
    purpose: "Change context",
    example:
      "Attach a synthetic maintenance window or approved change reference when relevant.",
    analystValue:
      "Helps explain activity that may be expected in a known operational window.",
    caution:
      "A change reference is context, not automatic proof that every related alert is harmless.",
  },
  {
    purpose: "Alert history",
    example:
      "Attach links to recent synthetic alerts with matching service, category, or fingerprint.",
    analystValue:
      "Provides pattern context without forcing the analyst to search the entire queue.",
    caution:
      "Similarity does not guarantee equivalence.",
  },
  {
    purpose: "Ticket context",
    example:
      "Attach existing fictional ticket IDs, current owner, status, and escalation history.",
    analystValue:
      "Reduces duplicate work and shows whether the issue is already under review.",
    caution:
      "The workflow should preserve source records instead of silently merging distinct issues.",
  },
  {
    purpose: "Evidence quality",
    example:
      "Attach source name, last refresh time, confidence, and missing-field state.",
    analystValue:
      "Lets the analyst judge whether enrichment should influence the decision.",
    caution:
      "A field with unknown freshness should not look as trustworthy as a current source.",
  },
  {
    purpose: "Known-safe references",
    example:
      "Attach fictional approved service accounts, maintenance tasks, or test assets when they are relevant to the alert.",
    analystValue:
      "Helps the analyst compare the alert with known context.",
    caution:
      "Known-safe context should not create blanket suppression.",
  },
  {
    purpose: "Workflow readiness",
    example:
      "Attach whether required enrichment fields are complete enough for the next review stage.",
    analystValue:
      "Helps the queue distinguish ready-for-review alerts from records needing more context.",
    caution:
      "Incomplete enrichment should lead to a visible degraded state, not hidden skipping.",
  },
];

const sourceQualityDimensions = [
  {
    dimension: "Relevance",
    question:
      "Does this field materially help the analyst understand, route, prioritize, or review the alert?",
    strong:
      "The source directly supports the current alert workflow.",
    weak:
      "The source adds unrelated detail because the platform can access it.",
  },
  {
    dimension: "Freshness",
    question:
      "How current must this enrichment be before the analyst can rely on it?",
    strong:
      "The source exposes a last-refreshed time and freshness threshold.",
    weak:
      "The workflow shows a value with no indication of age.",
  },
  {
    dimension: "Attribution",
    question:
      "Can the analyst identify where the enrichment came from?",
    strong:
      "Source name, version, and lookup time are visible.",
    weak:
      "The field appears with no source reference.",
  },
  {
    dimension: "Completeness",
    question:
      "What does the workflow do when some expected enrichment is unavailable?",
    strong:
      "Missing fields are marked clearly and the workflow continues in a safe degraded state.",
    weak:
      "Missing fields are omitted so the analyst cannot tell the evidence is incomplete.",
  },
  {
    dimension: "Confidence",
    question:
      "How strongly should this source influence the analyst?",
    strong:
      "Confidence or quality state is explicit and evidence-based.",
    weak:
      "All fields appear equally authoritative regardless of source quality.",
  },
  {
    dimension: "Privacy and sensitivity",
    question:
      "Is the enrichment limited to the minimum information needed for the defensive task?",
    strong:
      "The workflow uses synthetic or low-sensitivity operational metadata only.",
    weak:
      "The workflow copies unnecessary personal or sensitive content into every alert.",
  },
  {
    dimension: "Ownership",
    question:
      "Who maintains the enrichment source and its accuracy?",
    strong:
      "A fictional source owner and review responsibility are documented.",
    weak:
      "No one owns stale mappings or bad metadata.",
  },
  {
    dimension: "Failure behavior",
    question:
      "What happens if the source is unavailable, slow, contradictory, or malformed?",
    strong:
      "The workflow marks the condition, records it, and falls back safely.",
    weak:
      "The workflow guesses, blocks indefinitely, or hides the failure.",
  },
];

const enrichmentStates = [
  {
    state: "Current",
    meaning:
      "The enrichment source is within the approved freshness window.",
    display:
      "Show the value plus source and timestamp.",
    analystUse:
      "May be considered normally with the rest of the evidence.",
  },
  {
    state: "Stale",
    meaning:
      "The source value exists but is older than the approved threshold.",
    display:
      "Show the value with a visible stale indicator.",
    analystUse:
      "Treat as lower-confidence context and consider verification.",
  },
  {
    state: "Missing",
    meaning:
      "The source did not return a required or expected value.",
    display:
      "Show Missing rather than leaving a blank that could be misread.",
    analystUse:
      "Use the safe fallback or manual review path.",
  },
  {
    state: "Conflicting",
    meaning:
      "Two trusted sources provide different values.",
    display:
      "Show both sources, timestamps, and the conflict state.",
    analystUse:
      "Do not let automation choose silently; require review where the conflict matters.",
  },
  {
    state: "Unavailable",
    meaning:
      "The enrichment dependency cannot currently be reached.",
    display:
      "Show source unavailable and preserve the rest of the alert evidence.",
    analystUse:
      "Continue only if the workflow's degraded mode allows it.",
  },
  {
    state: "Rejected",
    meaning:
      "The returned data fails validation or falls outside the expected format.",
    display:
      "Show rejected enrichment with reason.",
    analystUse:
      "Do not treat the rejected value as evidence.",
  },
];

const overEnrichmentRisks = [
  {
    risk: "Noise",
    problem:
      "The alert contains dozens of fields that do not change the analyst's understanding.",
    better:
      "Prioritize a small set of workflow-relevant context.",
  },
  {
    risk: "Sensitive-data duplication",
    problem:
      "Every alert receives copied personal or confidential content even when operational metadata is enough.",
    better:
      "Use the minimum context needed and reference deeper records only when authorized and necessary.",
  },
  {
    risk: "False confidence",
    problem:
      "A large amount of enrichment makes the alert look well-supported even when key sources are stale.",
    better:
      "Display quality and freshness, not just quantity.",
  },
  {
    risk: "Slow workflow",
    problem:
      "Too many dependencies make enrichment fragile and delay analyst review.",
    better:
      "Separate essential enrichment from optional context and use bounded timeouts.",
  },
  {
    risk: "Conflicting context",
    problem:
      "Multiple sources disagree but the interface does not expose the conflict.",
    better:
      "Preserve attribution and show disagreement explicitly.",
  },
  {
    risk: "Hidden ownership drift",
    problem:
      "Routing uses a stale ownership source that nobody maintains.",
    better:
      "Assign source ownership and freshness review.",
  },
  {
    risk: "Scope creep",
    problem:
      "The enrichment workflow gradually adds fields because they might be useful someday.",
    better:
      "Review each new field against the current defensive purpose.",
  },
  {
    risk: "Suppression by enrichment",
    problem:
      "Known-safe context is treated as automatic proof that an alert should be ignored.",
    better:
      "Use enrichment to inform the analyst rather than silently dismissing evidence.",
  },
];

const enrichmentPlanFields = [
  {
    field: "ENR ID",
    purpose:
      "Stable identifier for the enrichment rule or field set.",
    example:
      "ENR-301",
  },
  {
    field: "Linked workflow",
    purpose:
      "Connects the enrichment to an A17.1 opportunity and A17.2 human-judgment boundary.",
    example:
      "OPP-101 / HITL-201",
  },
  {
    field: "Alert field",
    purpose:
      "Names the synthetic alert attribute being enriched.",
    example:
      "asset_owner",
  },
  {
    field: "Source",
    purpose:
      "Names the fictional enrichment source.",
    example:
      "Northbridge Asset Directory",
  },
  {
    field: "Why needed",
    purpose:
      "Explains how the enrichment supports analyst work.",
    example:
      "Improves ownership context and ticket routing",
  },
  {
    field: "Freshness requirement",
    purpose:
      "Defines how current the source must be.",
    example:
      "Within 4 hours",
  },
  {
    field: "Confidence",
    purpose:
      "Records the expected quality or trust level.",
    example:
      "High when current",
  },
  {
    field: "Missing behavior",
    purpose:
      "Defines what happens when the source returns no value.",
    example:
      "Display Missing and route normally to analyst review",
  },
  {
    field: "Conflict behavior",
    purpose:
      "Defines what happens when sources disagree.",
    example:
      "Show both values and require analyst resolution",
  },
  {
    field: "Sensitivity",
    purpose:
      "Records whether the enrichment is low-sensitivity operational metadata or needs extra protection.",
    example:
      "Operational metadata",
  },
  {
    field: "Owner",
    purpose:
      "Names the fictional role responsible for the source or enrichment rule.",
    example:
      "Security Platform Owner",
  },
  {
    field: "Review trigger",
    purpose:
      "Defines what should reopen the design.",
    example:
      "Source schema change, stale-data spike, routing error increase",
  },
];

const northbridgeEnrichment = [
  {
    id: "ENR-301",
    linked:
      "OPP-101 / HITL-201",
    field:
      "asset_owner",
    source:
      "Northbridge Asset Directory",
    why:
      "Helps analysts understand ownership and route consultation.",
    freshness:
      "Within 4 hours",
    confidence:
      "High when current",
    sensitivity:
      "Operational metadata",
    missing:
      "Show Missing; do not guess.",
    conflict:
      "Show both ownership sources if disagreement exists.",
    owner:
      "Security Platform Owner",
    human:
      "Analyst interprets the alert and may flag ownership as incorrect.",
    state:
      "Current",
  },
  {
    id: "ENR-302",
    linked:
      "OPP-101 / HITL-201",
    field:
      "business_criticality",
    source:
      "Fictional Service Catalog",
    why:
      "Provides business-impact context.",
    freshness:
      "Within 24 hours",
    confidence:
      "High when catalog mapping is current",
    sensitivity:
      "Operational metadata",
    missing:
      "Display Unknown criticality and continue to review.",
    conflict:
      "Prefer no automatic choice; show disagreement if multiple catalogs differ.",
    owner:
      "Service Management Owner",
    human:
      "Analyst uses criticality as one factor, not the final severity decision.",
    state:
      "Current",
  },
  {
    id: "ENR-303",
    linked:
      "OPP-104 / HITL-203",
    field:
      "maintenance_window",
    source:
      "Synthetic Change Calendar",
    why:
      "Shows whether the service is in a known approved maintenance period.",
    freshness:
      "Within 15 minutes",
    confidence:
      "Moderate-High",
    sensitivity:
      "Operational schedule metadata",
    missing:
      "Show No current maintenance context available.",
    conflict:
      "Show conflicting change references and require analyst review.",
    owner:
      "Change Management Owner",
    human:
      "Analyst decides whether the maintenance context actually explains the alert.",
    state:
      "Current",
  },
  {
    id: "ENR-304",
    linked:
      "OPP-103 / HITL-202",
    field:
      "related_alert_ids",
    source:
      "Synthetic Alert History",
    why:
      "Helps analysts identify recent related records.",
    freshness:
      "Near-current queue state",
    confidence:
      "Moderate",
    sensitivity:
      "Alert metadata",
    missing:
      "Show no related records found.",
    conflict:
      "Preserve all matching references; do not discard originals.",
    owner:
      "Detection Operations Owner",
    human:
      "Analyst decides whether similarity means the alerts belong together.",
    state:
      "Conditional",
  },
  {
    id: "ENR-305",
    linked:
      "OPP-102 / HITL-205",
    field:
      "existing_ticket",
    source:
      "Fictional Ticket Registry",
    why:
      "Reduces duplicate ticket creation and shows current ownership.",
    freshness:
      "Within 5 minutes",
    confidence:
      "High",
    sensitivity:
      "Workflow metadata",
    missing:
      "Create a new ticket only when no valid matching ticket exists under the approved rule.",
    conflict:
      "Show multiple candidate tickets for analyst confirmation if the match is ambiguous.",
    owner:
      "SOC Workflow Owner",
    human:
      "Analyst confirms whether the ticket actually covers the current issue when ambiguity exists.",
    state:
      "Current",
  },
  {
    id: "ENR-306",
    linked:
      "OPP-106 / HITL-206",
    field:
      "source_health",
    source:
      "Fictional Enrichment Health Monitor",
    why:
      "Shows whether an enrichment source is healthy, delayed, stale, or unavailable.",
    freshness:
      "Within 5 minutes",
    confidence:
      "High",
    sensitivity:
      "Operational health metadata",
    missing:
      "Mark health unknown and notify workflow owner.",
    conflict:
      "Use the most recent health evidence only if source attribution is valid; otherwise flag conflict.",
    owner:
      "Security Platform Owner",
    human:
      "Platform owner decides whether to disable or degrade the workflow.",
    state:
      "Monitor",
  },
  {
    id: "ENR-307",
    linked:
      "OPP-104 / HITL-203",
    field:
      "playbook_reference",
    source:
      "Approved Fictional Playbook Catalog",
    why:
      "Connects the alert category to relevant defensive guidance.",
    freshness:
      "Current published version",
    confidence:
      "High when category mapping is valid",
    sensitivity:
      "Low",
    missing:
      "Present general triage guidance.",
    conflict:
      "Show multiple relevant playbooks and let the analyst choose.",
    owner:
      "Incident Response Process Owner",
    human:
      "Analyst selects the playbook that fits the current evidence and context.",
    state:
      "Decision Support",
  },
];

const dashboardMetrics = [
  {
    label: "Enrichment records",
    value: "7",
    note: "Asset, criticality, maintenance, history, ticket, health, and playbook context",
  },
  {
    label: "Current sources",
    value: "5",
    note: "Most sources are within the defined freshness window",
  },
  {
    label: "Analyst judgment retained",
    value: "7",
    note: "Every enrichment supports review without making the final decision",
  },
  {
    label: "Sensitive-data copies",
    value: "0",
    note: "The design uses synthetic operational metadata only",
  },
];

const logs = [
  "[08:12] ENR-301 field=asset_owner source=ASSET_DIRECTORY freshness=CURRENT state=ATTACHED",
  "[08:34] ENR-302 field=business_criticality source=SERVICE_CATALOG confidence=HIGH state=ATTACHED",
  "[08:56] ENR-303 field=maintenance_window source=CHANGE_CALENDAR freshness=CURRENT state=ATTACHED",
  "[09:18] ENR-304 field=related_alert_ids source=ALERT_HISTORY confidence=MODERATE state=CONDITIONAL",
  "[09:40] ENR-305 field=existing_ticket source=TICKET_REGISTRY match=VALID state=ATTACHED",
  "[10:02] ENR-306 field=source_health source=HEALTH_MONITOR state=MONITOR",
  "[10:24] ENR-307 field=playbook_reference source=PLAYBOOK_CATALOG mode=DECISION_SUPPORT",
];

const antiPatterns = [
  {
    title: "Every available field becomes enrichment",
    problem:
      "The alert grows with unrelated data that does not improve the decision.",
    better:
      "Require a documented analyst use for every enrichment field.",
  },
  {
    title: "No freshness indicator",
    problem:
      "Old ownership or change data looks current.",
    better:
      "Display last refresh and stale state.",
  },
  {
    title: "Missing means false",
    problem:
      "The workflow treats an absent field as proof that the condition does not exist.",
    better:
      "Distinguish Missing from a confirmed negative result.",
  },
  {
    title: "Conflict resolved silently",
    problem:
      "The workflow picks one of two disagreeing sources without showing the analyst.",
    better:
      "Preserve attribution and expose the conflict.",
  },
  {
    title: "Known-safe means suppress",
    problem:
      "A maintenance reference automatically closes or hides an alert.",
    better:
      "Use maintenance as context and preserve analyst judgment.",
  },
  {
    title: "Sensitive content copied everywhere",
    problem:
      "Enrichment duplicates unnecessary personal or confidential content into alert records.",
    better:
      "Use the minimum operational metadata needed for the task.",
  },
  {
    title: "No source owner",
    problem:
      "Stale or wrong mappings remain because no one owns source quality.",
    better:
      "Assign a source owner and review trigger.",
  },
  {
    title: "Dependency outage blocks the whole queue",
    problem:
      "One optional enrichment failure stops analysts from reviewing alerts.",
    better:
      "Separate essential and optional context and use safe degraded modes.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Attach the asset owner with source and timestamp, and display Missing if the directory has no valid value.",
    outcome:
      "Best. The workflow adds useful context without guessing or hiding evidence quality.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Guess the owner from the last ticket when the directory is missing.",
    outcome:
      "Risky. Historical ownership may be wrong and should not be presented as current fact.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Block all analyst review until the owner directory returns.",
    outcome:
      "Caution. Ownership is useful, but a safe degraded review path may be better than stopping the whole queue.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Show both conflicting maintenance references, their sources and timestamps, and let the analyst determine whether the context explains the alert.",
    outcome:
      "Best. The analyst sees the evidence disagreement instead of receiving a hidden machine choice.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Automatically choose whichever maintenance source says the activity is approved.",
    outcome:
      "Risky. That biases the workflow toward suppression and hides uncertainty.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Automatically ignore all maintenance context because disagreement exists.",
    outcome:
      "Caution. The context may still be useful if presented honestly.",
    tone: "caution" as const,
  },
];

const quizQuestions = [
  {
    question:
      "What is alert enrichment?",
    choices: [
      "Adding relevant context and evidence metadata to an alert so a human can review it more effectively.",
      "Automatically executing a response action.",
      "Suppressing alerts when any known-safe context appears.",
      "Copying every available data source into the alert.",
    ],
    answer: 0,
    explanation:
      "Enrichment improves context and evidence without replacing analyst judgment.",
  },
  {
    question:
      "What should a strong enrichment field include?",
    choices: [
      "Source attribution, freshness, purpose, confidence or quality state, and failure behavior.",
      "Only the final value.",
      "Only a severity score.",
      "No indication of where the data came from.",
    ],
    answer: 0,
    explanation:
      "Analysts need to know where enrichment came from and how much trust to place in it.",
  },
  {
    question:
      "What is strongest when enrichment is stale?",
    choices: [
      "Show the value with a stale indicator and lower confidence.",
      "Hide the timestamp.",
      "Present it as current.",
      "Delete the alert.",
    ],
    answer: 0,
    explanation:
      "Stale context can still be useful if its age is visible.",
  },
  {
    question:
      "What is strongest when two enrichment sources conflict?",
    choices: [
      "Show both sources and their timestamps and preserve human review where the conflict matters.",
      "Silently choose the value that lowers severity.",
      "Silently choose the newest value every time.",
      "Remove both sources from the record.",
    ],
    answer: 0,
    explanation:
      "Conflicting evidence should remain visible rather than being silently resolved.",
  },
  {
    question:
      "Why is over-enrichment a problem?",
    choices: [
      "It can add noise, duplicate sensitive data, slow workflows, and create false confidence.",
      "More fields always improve decisions.",
      "It only affects storage cost.",
      "It eliminates analyst judgment.",
    ],
    answer: 0,
    explanation:
      "Useful enrichment should be relevant, bounded, and evidence-aware.",
  },
  {
    question:
      "What is strongest for known maintenance context?",
    choices: [
      "Use it as analyst context, not as automatic proof that the alert is harmless.",
      "Suppress every related alert automatically.",
      "Ignore maintenance windows completely.",
      "Treat maintenance as a high-confidence incident.",
    ],
    answer: 0,
    explanation:
      "Known-safe context supports interpretation but should not automatically determine disposition.",
  },
  {
    question:
      "What is the purpose of the Alert Enrichment Plan?",
    choices: [
      "Define enrichment fields, sources, freshness, confidence, missing/conflict behavior, ownership, analyst use, and review triggers.",
      "Replace the alert itself.",
      "Automate all response actions.",
      "Collect as much context as possible.",
    ],
    answer: 0,
    explanation:
      "The plan makes enrichment useful, reviewable, safe, and governable.",
  },
];

const checklistItems = [
  "Every enrichment field has a clear analyst use.",
  "Source attribution is visible.",
  "Freshness requirements are defined.",
  "Confidence or quality state is defined.",
  "Missing is distinct from false.",
  "Stale is distinct from current.",
  "Conflicting evidence is visible.",
  "Rejected enrichment is not treated as valid evidence.",
  "Essential and optional enrichment are distinguished.",
  "Sensitive-data duplication is minimized.",
  "Known-safe context does not automatically suppress alerts.",
  "Related-alert context preserves original records.",
  "Ticket enrichment preserves ambiguity when matches are uncertain.",
  "Analyst judgment remains explicit.",
  "Safe degraded mode is defined.",
  "Source ownership is assigned.",
  "Workflow ownership is assigned.",
  "Review triggers are defined.",
  "Health monitoring is considered.",
  "All examples remain fictional, inert, and defensive.",
];

const takeaways = [
  "Alert enrichment should improve context without making the final security decision.",
  "Useful enrichment has a clear analyst purpose, source, freshness, confidence, and failure state.",
  "Missing, stale, conflicting, unavailable, and rejected are different evidence states.",
  "A large amount of enrichment is not the same as high-quality enrichment.",
  "Known-safe context should inform judgment rather than automatically suppress evidence.",
  "Over-enrichment can create noise, privacy risk, dependency fragility, and false confidence.",
  "Safe degraded mode lets analysts continue when noncritical enrichment is unavailable.",
  "Source ownership matters because stale mappings can misroute work and distort context.",
  "Analyst override and source-quality feedback help enrichment improve over time.",
  "The Alert Enrichment Plan prepares you for A17.4 Ticketing and Workflow Automation.",
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
        Module A17
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

export default function AlertEnrichmentConceptsPage() {
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
              A17.3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Security Automation Concepts
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A17.3
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Alert Enrichment Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Alert enrichment adds useful context so analysts can make better
            decisions faster. This lesson focuses on source quality, freshness,
            confidence, missing and conflicting evidence, privacy-aware context,
            safe degraded modes, and the boundary between evidence support and
            autonomous judgment.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            All alerts, assets, owners, tickets, maintenance records, playbooks,
            sources, and evidence in this lesson are fictional or synthetic.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A17: Security Automation Concepts"
          lessonTitle="Alert Enrichment Concepts"
          lessonNumber={3}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A17.3 Entry Readiness"
          items={[
            "I can distinguish automated support from human judgment.",
            "I understand that context quality depends on source, freshness, and confidence.",
            "I can explain why missing evidence should remain visible.",
            "I will use only fictional or synthetic enrichment records.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="A Better Alert Is Not a Bigger Alert"
        >
          <p className="leading-8">
            An analyst does not need every fact the organization can collect.
            They need the right context for the current decision: what asset is
            involved, who owns it, whether a known change is active, whether a
            related ticket already exists, how current the evidence is, and
            whether anything is missing or contradictory.
          </p>

          <p className="mt-4 leading-8">
            Good enrichment reduces search work while keeping uncertainty
            visible. Bad enrichment adds noise, hides stale data, copies
            sensitive content, or creates the false impression that more fields
            mean more certainty.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              Enrichment should improve evidence quality—not pretend the machine already knows the answer.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Learning Objectives"
          title="Five Capabilities for This Lesson"
        >
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

        <Section
          eyebrow="Enrichment Purpose"
          title="Eight Kinds of Context That Can Help an Analyst"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {enrichmentPurposes.map((item) => (
              <article
                key={item.purpose}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.purpose}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Example: {item.example}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Analyst value: {item.analystValue}
                </p>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  Caution: {item.caution}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Source Quality"
          title="Eight Questions Before Trusting Enrichment"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {sourceQualityDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.dimension}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Ask: {item.question}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Strong: {item.strong}
                </p>
                <p className="mt-3 text-sm leading-7 text-red-100">
                  Weak: {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Evidence States"
          title="Current, Stale, Missing, Conflicting, Unavailable, and Rejected Are Different"
        >
          <p className="leading-8">
            Enrichment should communicate evidence state directly. A blank
            field can mean many things. A professional workflow distinguishes
            whether the source returned nothing, failed validation, is stale,
            disagrees with another source, or is temporarily unavailable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {enrichmentStates.map((item) => (
              <article
                key={item.state}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.state}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Display: {item.display}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Analyst use: {item.analystUse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Over-Enrichment"
          title="More Context Can Still Make the Workflow Worse"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {overEnrichmentRisks.map((item) => (
              <article
                key={item.risk}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.risk}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  Problem: {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Better design: {item.better}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Essential vs Optional Enrichment"
          title="Design the Workflow So One Optional Source Does Not Break Everything"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-50">Essential context</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-100">
                Evidence required before the next workflow stage can be trusted.
                Missing essential context should trigger pause, review, or a
                defined alternate path.
              </p>
            </article>

            <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-50">Optional context</h3>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                Helpful enrichment that improves efficiency but is not required
                for safe analyst review. Missing optional context should usually
                create a degraded indicator rather than block the queue.
              </p>
            </article>
          </div>

          <p className="mt-6 leading-8">
            The distinction should be based on the actual workflow and decision,
            not on which source is easiest to integrate.
          </p>
        </Section>

        <Section
          eyebrow="Privacy-Aware Enrichment"
          title="Context Should Be Useful Without Becoming a New Sensitive Dataset"
        >
          <p className="leading-8">
            Security workflows can create privacy problems when they copy more
            personal or confidential content than the analyst needs. A17 uses
            synthetic operational metadata only, but the design principle is
            broader: use the minimum context required for the defensive task.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Prefer stable operational identifiers over copied personal details.",
              "Attach ownership roles or team names rather than unnecessary individual profiles.",
              "Record source references instead of duplicating large source records.",
              "Use counts, status, confidence, and timestamps where detailed content is not needed.",
              "Limit enrichment to the current defensive purpose.",
              "Review new enrichment fields before adding them broadly.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Plan Anatomy"
          title="What a Reviewable Alert Enrichment Record Should Contain"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {enrichmentPlanFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.field}</h3>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  {item.purpose}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Example: {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Fictional Enrichment Plan"
          title="Seven Northbridge Enrichment Records"
        >
          <div className="grid gap-5">
            {northbridgeEnrichment.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 font-mono text-xs font-black text-purple-100">
                    {item.linked}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {item.field}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Source", item.source],
                    ["Why needed", item.why],
                    ["Freshness", item.freshness],
                    ["Confidence", item.confidence],
                    ["Sensitivity", item.sensitivity],
                    ["Missing behavior", item.missing],
                    ["Conflict behavior", item.conflict],
                    ["Owner", item.owner],
                    ["Human judgment", item.human],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Alert Enrichment Dashboard"
          subtitle="Fictional source quality, freshness, analyst judgment, and privacy-minimization summary"
          metrics={dashboardMetrics}
        />

        <FakeAlertCard
          title="Asset Ownership Enrichment Became Stale"
          severity="High"
          time="09:48"
          source="Fictional Enrichment Health Monitor"
          details="The asset ownership source exceeded its approved freshness window. Current alerts still contain the last known owner, but that value can no longer be treated as current."
          recommendation="Mark the enrichment Stale, preserve the source timestamp, keep analyst review available, and notify the source owner."
        />

        <FakeLogPanel
          title="Fictional Alert Enrichment Log"
          logs={logs}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Asset Ownership Enrichment"
          question="What is the strongest design for ENR-301?"
          evidence={[
            "Analysts repeatedly need asset ownership before routing or consultation.",
            "The fictional asset directory has stable IDs.",
            "The source exposes a refresh timestamp.",
            "Some assets occasionally have no current owner.",
            "Alert interpretation remains an analyst decision.",
          ]}
          options={[
            "Attach owner with source and timestamp, display Missing when no valid value exists, and keep alert interpretation with the analyst.",
            "Guess ownership from the most recent ticket when the directory is missing.",
            "Block all alert review until ownership is available.",
            "Automatically close alerts when the owner belongs to a trusted team.",
          ]}
          bestAnswer={0}
          explanation="The strongest design adds bounded, attributable context, preserves missing-data uncertainty, and does not turn enrichment into a final alert decision."
        />

        <Section
          eyebrow="Common Enrichment Mistakes"
          title="Eight Ways Context Becomes Noise or False Confidence"
        >
          <div className="grid gap-5">
            {antiPatterns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-red-100">
                      Why it fails: {item.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-100">
                      Better approach: {item.better}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Missing Asset Owner"
          scenario="A fictional alert reaches the enrichment stage. The current asset directory returns no valid owner, but the alert itself is still reviewable."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Conflicting Maintenance Context"
          scenario="Two fictional maintenance sources disagree about whether the affected service is inside an approved change window."
          choices={scenarioTwoChoices}
        />

        <Section
          eyebrow="Safe Fictional Lab"
          title="Build an Alert Enrichment Plan"
        >
          <p className="leading-8">
            Use synthetic alert fields and fictional sources to design useful,
            minimal, attributable enrichment that preserves uncertainty and
            analyst judgment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Create at least thirty fictional ENR records.",
              "Give every record a stable ENR ID.",
              "Link each record to an OPP and HITL ID.",
              "Name the synthetic alert field.",
              "Name the fictional enrichment source.",
              "Explain why the enrichment is needed.",
              "Classify the enrichment as Essential or Optional.",
              "Define the freshness requirement.",
              "Define how freshness is displayed.",
              "Define evidence confidence.",
              "Define source attribution.",
              "Define expected data format.",
              "Define validation behavior.",
              "Define Missing behavior.",
              "Define Stale behavior.",
              "Define Unavailable behavior.",
              "Define Rejected behavior.",
              "Define Conflict behavior.",
              "Define safe degraded mode.",
              "Record privacy or sensitivity level.",
              "Record whether the field duplicates source content or references it.",
              "Name the source owner.",
              "Name the workflow owner.",
              "Describe analyst use.",
              "Define analyst override or correction.",
              "Define health monitoring.",
              "Define review triggers.",
              "Define removal criteria for low-value enrichment.",
              "Include at least eight asset or service context records.",
              "Include at least five ticket or workflow context records.",
              "Include at least five known-change or known-safe context records.",
              "Include at least five evidence-quality records.",
              "Include at least five examples with missing-data fallback.",
              "Include at least five examples with stale-data handling.",
              "Include at least three examples with conflicting sources.",
              "Include at least three optional enrichments that should not block analyst review.",
              "Include at least three enrichments rejected because they add unnecessary sensitive content.",
              "Include at least three examples where enrichment supports but does not determine severity or disposition.",
            ].map((item, index) => (
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
              Use fictional alerts, assets, owners, tickets, changes, playbooks,
              and enrichment sources only. Do not query real networks, endpoints,
              accounts, cloud services, credentials, private records, or
              production security tools. Do not use enrichment as a way to
              automate destructive, exploitative, credential-related, bypass,
              or unauthorized actions.
            </p>
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Conflicting Maintenance Context"
          question="What is the strongest design when two maintenance sources disagree?"
          evidence={[
            "Both sources are approved fictional sources.",
            "Their timestamps are current.",
            "One says the service is inside a maintenance window.",
            "The other says no approved change is active.",
            "The alert still requires analyst interpretation.",
          ]}
          options={[
            "Show both values, sources, and timestamps and require analyst interpretation where the conflict matters.",
            "Automatically choose the source that says maintenance is active.",
            "Automatically choose the newest source even though both are current.",
            "Suppress the alert because at least one source indicates maintenance.",
          ]}
          bestAnswer={0}
          explanation="The workflow should preserve source attribution and disagreement rather than hiding uncertainty or biasing toward suppression."
        />

        <Section
          eyebrow="Advanced Challenge"
          title="Design an Enrichment Governance Standard"
        >
          <p className="leading-8">
            Create a fictional organization-wide standard for deciding which
            enrichment fields are worth adding, how sources are trusted, and how
            degraded or conflicting evidence should be handled.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Enrichment purpose",
              "Essential vs optional",
              "Source attribution",
              "Freshness threshold",
              "Confidence model",
              "Data format validation",
              "Missing state",
              "Stale state",
              "Unavailable state",
              "Rejected state",
              "Conflict state",
              "Safe degraded mode",
              "Privacy minimization",
              "Sensitive-data handling",
              "Analyst use",
              "Analyst correction",
              "Source ownership",
              "Workflow ownership",
              "Health monitoring",
              "Removal / review criteria",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            The strongest standard should reward useful, attributable context
            rather than maximum data collection.
          </p>
        </Section>

        <DefenderChecklist
          title="A17.3 Defender Checklist"
          items={checklistItems}
        />

        <Section
          eyebrow="Skill Check"
          title="Seven Questions"
        >
          <MiniQuiz
            title="A17.3 Mini Quiz: Alert Enrichment Concepts"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Alert Enrichment Plan"
          prompt="Create the third artifact for your A17 Safe Automation Design and Governance Plan: a fictional Alert Enrichment Plan with at least thirty records. Include ENR ID, linked OPP/HITL IDs, alert field, fictional source, purpose, Essential/Optional status, freshness, attribution, confidence, expected format, validation, Missing/Stale/Unavailable/Rejected/Conflict behavior, degraded mode, privacy/sensitivity level, source-reference vs copied content decision, source owner, workflow owner, analyst use, correction/override, health monitoring, review triggers, and removal criteria."
          tips={[
            "Add context only when it helps the analyst.",
            "Show source and freshness directly.",
            "Keep missing and stale evidence visible.",
            "Do not silently resolve source conflicts.",
            "Minimize sensitive-data duplication.",
            "Use fictional or synthetic records only.",
          ]}
        />

        <Section
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A17.4?"
        >
          <p className="leading-8">
            A17.4 focuses on Ticketing and Workflow Automation. Before
            continuing, make sure you can explain how enriched evidence should
            move into a ticket or queue without losing source quality,
            ownership, uncertainty, or analyst judgment.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain alert enrichment as evidence support rather than automated disposition.",
              "I can evaluate enrichment by relevance, source, freshness, confidence, and privacy impact.",
              "I can design Missing, Stale, Conflict, Unavailable, and Rejected states.",
              "I can distinguish essential from optional enrichment.",
              "I can explain why over-enrichment can make a workflow worse.",
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

        <Section
          eyebrow="Portfolio Build Guide"
          title="How to Make the Alert Enrichment Plan Look Professional"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Tie each field to analyst value",
                detail:
                  "A professional plan explains what decision or workflow step the enrichment supports.",
              },
              {
                title: "Show evidence quality",
                detail:
                  "Source, timestamp, confidence, validation, and conflict state should be reviewable.",
              },
              {
                title: "Show degraded behavior",
                detail:
                  "Missing optional context should not automatically stop the whole workflow.",
              },
              {
                title: "Show privacy minimization",
                detail:
                  "Prefer concise operational metadata instead of copying unnecessary sensitive source content.",
              },
              {
                title: "Show human judgment",
                detail:
                  "Known-safe or maintenance context should inform analysts without silently deciding the outcome.",
              },
              {
                title: "Show source ownership",
                detail:
                  "A useful enrichment source needs someone responsible for freshness and correctness.",
              },
              {
                title: "Show review triggers",
                detail:
                  "Source schema changes, stale-data spikes, conflicts, and bad routing should reopen the design.",
              },
              {
                title: "Connect forward",
                detail:
                  "A17.4 will use this enriched evidence to design safe ticketing, routing, assignment, and workflow transitions.",
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
            A17.3 enrichment remains fictional, inert, privacy-aware, defensive, and human-governed
          </h2>
          <p className="mt-3 leading-7">
            Do not query real networks, endpoints, cloud accounts, credentials,
            private records, production ticketing systems, or live security
            tools. Do not use enrichment to automate destructive,
            environment-changing, exploitative, credential-related, bypass, or
            unauthorized actions. This lesson is about context quality,
            evidence support, source health, and analyst judgment.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A17.3 Alert Enrichment Concepts Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a practical model for enrichment purpose, source
            quality, freshness, evidence states, privacy minimization, degraded
            mode, source ownership, and analyst judgment. Next, A17.4 focuses on
            Ticketing and Workflow Automation.
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