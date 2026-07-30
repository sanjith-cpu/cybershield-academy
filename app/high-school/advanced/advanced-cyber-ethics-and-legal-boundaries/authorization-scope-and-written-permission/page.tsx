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
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const previousLesson =
  `${modulePath}/professional-responsibility-in-cybersecurity`;
const nextLesson =
  `${modulePath}/legal-risk-and-consequences`;

const objectives = [
  "Explain why written authorization is the foundation of lawful, ethical, and professionally defensible cybersecurity work.",
  "Distinguish business need, verbal requests, technical access, emergency pressure, and supervisor seniority from actual permission.",
  "Define scope across systems, identities, data, actions, methods, locations, time windows, evidence handling, communication, and stop conditions.",
  "Identify missing, contradictory, expired, or overly broad language in a fictional authorization document.",
  "Build a portfolio-ready authorization and scope package with approvals, boundaries, escalation routes, evidence rules, validation, and closure criteria."
];
const vocabulary = [
  [
    "Written authorization",
    "Documented permission from the appropriate owner or authority for a defined cybersecurity purpose, scope, time, method, and responsibility structure."
  ],
  [
    "Scope statement",
    "A precise description of what is included, excluded, permitted, prohibited, time-limited, evidence-limited, and owner-approved."
  ],
  [
    "In-scope asset",
    "A fictional system, service, identity, data set, application, device, network zone, or environment explicitly included in written permission."
  ],
  [
    "Out-of-scope asset",
    "Anything not explicitly approved, including connected systems, personal devices, private accounts, third-party services, unrelated data, and later time periods."
  ],
  [
    "Allowed action",
    "A specific activity the authorized defender may perform, such as reviewing supplied logs, analyzing a fictional diagram, or validating an approved configuration state."
  ],
  [
    "Prohibited action",
    "An activity not permitted by the authorization, such as live testing, scanning, accessing private messages, changing production systems, or public disclosure."
  ],
  [
    "Method boundary",
    "The approved way an action may be performed, including tools, evidence sources, environments, and safety controls."
  ],
  [
    "Time window",
    "The period during which the authorized work may occur, including start, end, timezone, review checkpoints, and expiration."
  ],
  [
    "Data boundary",
    "The exact information categories, fields, classifications, owners, retention limits, and sharing rules permitted for the task."
  ],
  [
    "Delegated authority",
    "Permission formally assigned by an authorized owner to another role, including the limits of that delegation."
  ],
  [
    "Approval gate",
    "A required checkpoint before a new action, scope expansion, disclosure, data access, or service-impacting change may proceed."
  ],
  [
    "Scope expansion",
    "A proposed change that adds systems, identities, data, actions, methods, time, suppliers, or communication beyond the current authorization."
  ],
  [
    "Stop condition",
    "A defined event that requires work to pause, such as unexpected sensitive data, unclear ownership, expired permission, service instability, or evidence-integrity concerns."
  ],
  [
    "Emergency authority",
    "A narrowly defined, documented, time-limited permission used under approved emergency procedures, not a general excuse to ignore boundaries."
  ],
  [
    "Evidence-handling rule",
    "A requirement governing what evidence may be viewed, copied, stored, shared, retained, deleted, or included in reports."
  ],
  [
    "Closure criteria",
    "The evidence, validation, owner signoff, communication, recordkeeping, and residual-risk conditions required before authorized work is complete."
  ]
];
const scopeDimensions = [
  {
    "dimension": "Purpose",
    "include": "The fictional security question, business need, expected decision, and intended outcome.",
    "exclude": "General curiosity, unrelated improvement work, or investigation of other possible issues.",
    "evidence": "Task request, owner statement, ticket, project brief, or incident objective.",
    "risk": "A vague purpose can justify almost any action after the fact."
  },
  {
    "dimension": "Systems and services",
    "include": "Exact fictional hostnames, applications, environments, network zones, services, and tenant or project boundaries.",
    "exclude": "Connected systems, backups, personal devices, supplier systems, or environments not named.",
    "evidence": "Asset inventory, architecture diagram, owner confirmation, and environment label.",
    "risk": "Connected does not mean authorized."
  },
  {
    "dimension": "Identities and accounts",
    "include": "Exact fictional user, service, administrator, supplier, test, and emergency identities that may be reviewed.",
    "exclude": "Other users, personal accounts, shared identities, or unrelated privileged accounts.",
    "evidence": "IAM inventory, owner confirmation, role map, and test-account plan.",
    "risk": "Reviewing unrelated identities can create privacy and trust harm."
  },
  {
    "dimension": "Data and evidence",
    "include": "Approved fictional log fields, alert records, diagrams, policy excerpts, configuration snapshots, and owner statements.",
    "exclude": "Private messages, full mailboxes, personal files, confidential records, or unrelated evidence.",
    "evidence": "Data classification, evidence list, data-owner approval, and minimum-necessary justification.",
    "risk": "Overcollection creates privacy, retention, and disclosure risk."
  },
  {
    "dimension": "Actions",
    "include": "Reviewing supplied evidence, documenting findings, comparing approved states, and recommending actions.",
    "exclude": "Live access, scanning, configuration changes, account disabling, data export, or public disclosure unless explicitly approved.",
    "evidence": "Action list, procedure, change authority, and owner approval.",
    "risk": "A general phrase like investigate does not authorize every possible action."
  },
  {
    "dimension": "Methods and tools",
    "include": "Approved fictional dashboards, provided logs, static diagrams, worksheets, or controlled training environments.",
    "exclude": "Unapproved tools, live probes, real suspicious content, personal accounts, or uncontrolled environments.",
    "evidence": "Method list, environment diagram, tool approval, and safety controls.",
    "risk": "An allowed goal does not automatically authorize every method."
  },
  {
    "dimension": "Time and location",
    "include": "Start, end, timezone, permitted work location, supervision, checkpoints, and expiration.",
    "exclude": "Later work, unsupervised continuation, remote work, or after-hours access not approved.",
    "evidence": "Authorization dates, schedule, location rule, and extension procedure.",
    "risk": "Permission can expire even when the technical task is unfinished."
  },
  {
    "dimension": "Communication",
    "include": "Who may receive technical, service, leadership, user, supplier, teacher, or portfolio updates.",
    "exclude": "Public posts, class group chats, unrelated staff, friends, or unapproved external sharing.",
    "evidence": "Communication plan, audience list, confidentiality rule, and disclosure owner.",
    "risk": "Authorized analysis does not automatically authorize disclosure."
  },
  {
    "dimension": "Service impact",
    "include": "Permitted disruption, maintenance windows, continuity requirements, rollback, and owner-approved thresholds.",
    "exclude": "Broad shutdown, irreversible change, or unplanned outage.",
    "evidence": "Service criticality, dependency map, change plan, owner approval, and rollback test.",
    "risk": "A technically correct action can still create unacceptable business harm."
  },
  {
    "dimension": "Closure",
    "include": "Required findings, action records, validation, communication, evidence handling, signoff, residual risk, and retention.",
    "exclude": "Automatic closure when alerts stop or a ticket is marked complete.",
    "evidence": "Closure checklist, validation results, owner signoff, and residual-risk statement.",
    "risk": "Incomplete validation can leave hidden gaps."
  }
];
const authorizationRoles = [
  {
    "role": "Task requester",
    "responsibility": "Explains the fictional need, desired outcome, urgency, and business context.",
    "may_authorize": "Only actions within the requester's formally delegated authority.",
    "may_not_authorize": "Systems, data, privacy access, service changes, disclosure, or supplier actions outside that delegation.",
    "evidence": "Role description, delegation, ticket ownership, and approval limits."
  },
  {
    "role": "System or service owner",
    "responsibility": "Defines system purpose, criticality, dependencies, acceptable disruption, and approved technical boundaries.",
    "may_authorize": "System-specific review or change within policy and delegated authority.",
    "may_not_authorize": "Unrelated data access, legal exceptions, or actions on third-party systems they do not own.",
    "evidence": "Asset ownership record, service catalog, change authority, and owner confirmation."
  },
  {
    "role": "Data owner or privacy authority",
    "responsibility": "Defines which fictional information may be used, who may access it, minimum fields, sharing, retention, and deletion.",
    "may_authorize": "Approved data use within policy and purpose.",
    "may_not_authorize": "Technical changes or public disclosure beyond the role's authority.",
    "evidence": "Classification, privacy rule, data-use approval, and retention requirement."
  },
  {
    "role": "Security manager or incident lead",
    "responsibility": "Coordinates defensive scope, evidence, cases, priorities, actions, escalation, and validation.",
    "may_authorize": "Security activities within the documented response plan and delegated authority.",
    "may_not_authorize": "Every legal, privacy, business, supplier, or public-communication decision.",
    "evidence": "Incident plan, delegation, playbook, and role assignment."
  },
  {
    "role": "Change authority",
    "responsibility": "Reviews fictional configuration, access, service, or infrastructure changes for risk, timing, rollback, and validation.",
    "may_authorize": "Approved changes within the governed process.",
    "may_not_authorize": "Data collection, disclosure, or investigation outside the approved change.",
    "evidence": "Change record, approval, maintenance window, rollback, and test plan."
  },
  {
    "role": "Legal, policy, or compliance owner",
    "responsibility": "Interprets obligations, policies, contracts, disclosure rules, exceptions, and documentation requirements.",
    "may_authorize": "Specialized legal or policy decisions within formal authority.",
    "may_not_authorize": "Technical actions or business disruption without the relevant technical and service owners.",
    "evidence": "Policy, procedure, contract, exception, legal review, and approval record."
  },
  {
    "role": "Supplier or partner owner",
    "responsibility": "Coordinates fictional external systems, contracts, access, evidence requests, service dependencies, and communication.",
    "may_authorize": "Actions permitted by the approved agreement and delegated relationship.",
    "may_not_authorize": "Access to supplier systems beyond the contract or without the supplier's authorization.",
    "evidence": "Agreement, access record, owner contact, scope clause, and communication plan."
  },
  {
    "role": "Risk owner or leadership",
    "responsibility": "Selects treatment, accepts residual risk, assigns resources, and approves major business-impact decisions.",
    "may_authorize": "Business risk decisions within governance and legal boundaries.",
    "may_not_authorize": "Unlawful, unsafe, deceptive, privacy-invasive, or technically undefined actions.",
    "evidence": "Risk decision, leadership approval, owner assignment, deadline, and residual-risk acceptance."
  }
];
const scopeReviewSteps = [
  {
    "step": "1",
    "title": "Confirm the document and authority",
    "questions": "Who issued the fictional permission, what role do they hold, and what evidence proves their authority?",
    "output": "Authorization source and authority record.",
    "red_flag": "The document is unsigned, copied from an old project, or approved by a role without ownership."
  },
  {
    "step": "2",
    "title": "Define the exact purpose",
    "questions": "What question must be answered, which decision will use the result, and what outcome is expected?",
    "output": "One-sentence purpose statement.",
    "red_flag": "The task says investigate everything or make the system secure."
  },
  {
    "step": "3",
    "title": "List in-scope and out-of-scope assets",
    "questions": "Which exact systems, services, identities, data sets, environments, suppliers, and locations are included or excluded?",
    "output": "Scope inventory with ownership.",
    "red_flag": "The document names one application but says related systems without defining them."
  },
  {
    "step": "4",
    "title": "List allowed and prohibited actions",
    "questions": "May the defender review, query, test, change, disable, export, contact, disclose, or only recommend?",
    "output": "Action-permission matrix.",
    "red_flag": "The word investigate is used without methods, limits, or approval gates."
  },
  {
    "step": "5",
    "title": "Define evidence and privacy rules",
    "questions": "Which fields may be used, who owns them, how are they stored, who may receive them, and when are they deleted?",
    "output": "Evidence-handling plan.",
    "red_flag": "The authorization permits all logs but gives no classification, purpose, retention, or sharing limit."
  },
  {
    "step": "6",
    "title": "Set time, supervision, and location",
    "questions": "When may work begin and end, what timezone applies, where may it occur, and who must supervise?",
    "output": "Authorized schedule and location record.",
    "red_flag": "The date is expired or no end time exists."
  },
  {
    "step": "7",
    "title": "Define approval gates and stop conditions",
    "questions": "What requires additional approval, and which unexpected events require immediate pause or escalation?",
    "output": "Gate and stop-condition table.",
    "red_flag": "There is no process for unexpected data, service instability, scope expansion, or evidence-integrity problems."
  },
  {
    "step": "8",
    "title": "Define communication and disclosure",
    "questions": "Who may receive findings, who approves user or supplier contact, and what may enter a portfolio?",
    "output": "Audience and disclosure map.",
    "red_flag": "The defender may share results as needed without defining recipients or confidentiality."
  },
  {
    "step": "9",
    "title": "Define action and rollback authority",
    "questions": "Who may approve and execute changes, what service impact is acceptable, and how will rollback work?",
    "output": "Change and continuity plan.",
    "red_flag": "The analyst may take necessary action without owner review."
  },
  {
    "step": "10",
    "title": "Define validation and closure",
    "questions": "What proves success, who signs off, what remains monitored, and how is residual risk documented?",
    "output": "Validation and closure checklist.",
    "red_flag": "Closure occurs when the alert disappears."
  }
];
const evidenceMatrix = [
  {
    "id": "AUTH-01",
    "source": "Fictional signed authorization memo",
    "observation": "Approves review of APP-TRAIN-01 and ID-TRAIN-01 using supplied logs from 9:00 AM to 1:00 PM.",
    "supports": "Two assets, one evidence method, and one time window are authorized.",
    "limits": "Does not authorize live access, connected systems, private messages, configuration changes, or later work.",
    "action": "Use as the primary boundary and pause any request outside it."
  },
  {
    "id": "AUTH-02",
    "source": "Fictional project ticket",
    "observation": "States the purpose is to determine whether a training sign-in alert matches expected service-account behavior.",
    "supports": "The approved question is narrow and identity-focused.",
    "limits": "Does not authorize a broad search for unrelated weaknesses.",
    "action": "Keep evidence collection tied to the stated question."
  },
  {
    "id": "AUTH-03",
    "source": "Fictional asset inventory",
    "observation": "Shows APP-TRAIN-01 depends on DB-TRAIN-02 and supplier service EXT-DEMO-03.",
    "supports": "Dependencies exist and may affect service interpretation.",
    "limits": "Does not place the database or supplier service inside scope.",
    "action": "Document dependencies but seek separate permission before reviewing them."
  },
  {
    "id": "AUTH-04",
    "source": "Fictional supervisor message",
    "observation": "Requests review of DB-TRAIN-02 because it is connected to the approved application.",
    "supports": "A scope-expansion request exists.",
    "limits": "Does not prove the supervisor owns the database or may expand scope.",
    "action": "Pause database review and route the request to the database owner and security lead."
  },
  {
    "id": "AUTH-05",
    "source": "Fictional data-classification sheet",
    "observation": "Authentication logs are internal; mailbox content is confidential and needs data-owner approval.",
    "supports": "Different evidence categories require different controls.",
    "limits": "Does not decide whether mailbox content is necessary.",
    "action": "Use approved authentication fields and avoid mailbox access."
  },
  {
    "id": "AUTH-06",
    "source": "Fictional schedule record",
    "observation": "The review window ends at 1:00 PM in Eastern Time.",
    "supports": "Authorization expires at a defined time.",
    "limits": "Does not permit continuation if the task is incomplete.",
    "action": "Stop at expiration or obtain documented extension before continuing."
  },
  {
    "id": "AUTH-07",
    "source": "Fictional change policy",
    "observation": "Only the change owner may approve account disabling or configuration changes.",
    "supports": "The analyst may recommend but not execute those actions.",
    "limits": "Does not prove a change is necessary.",
    "action": "Prepare evidence-based options for the authorized change owner."
  },
  {
    "id": "AUTH-08",
    "source": "Fictional disclosure rule",
    "observation": "Findings may be shared only with the security lead, service owner, privacy reviewer, and assigned teacher.",
    "supports": "A limited audience is approved.",
    "limits": "Does not authorize class-wide, public, social-media, or supplier disclosure.",
    "action": "Use the approved audience map and fully fictionalize the portfolio version."
  }
];
const authorizationDocumentFields = [
  {
    "field": "Authorized purpose",
    "strong_example": "Determine whether the fictional service-account sign-in alert matches expected behavior using supplied records.",
    "weak_example": "Investigate suspicious activity.",
    "why": "A narrow purpose limits unrelated collection and actions."
  },
  {
    "field": "Authorized assets",
    "strong_example": "APP-TRAIN-01 and ID-TRAIN-01 only.",
    "weak_example": "The application and related systems.",
    "why": "Exact asset names prevent accidental expansion to dependencies."
  },
  {
    "field": "Authorized evidence",
    "strong_example": "Supplied sign-in, service-health, and owner-confirmation records listed in Appendix A.",
    "weak_example": "Any useful logs or messages.",
    "why": "Evidence categories need purpose, ownership, and privacy controls."
  },
  {
    "field": "Allowed actions",
    "strong_example": "Review supplied evidence, compare baseline, document findings, and recommend owner-approved next steps.",
    "weak_example": "Take necessary security action.",
    "why": "Action verbs must be explicit."
  },
  {
    "field": "Prohibited actions",
    "strong_example": "No live access, scanning, account disabling, configuration changes, private-message review, data export, or public disclosure.",
    "weak_example": "Use good judgment.",
    "why": "Prohibitions make boundaries reviewable and enforceable."
  },
  {
    "field": "Time and location",
    "strong_example": "9:00 AM–1:00 PM Eastern Time in the supervised fictional training environment.",
    "weak_example": "Complete today.",
    "why": "Time, timezone, environment, and supervision should be explicit."
  },
  {
    "field": "Approval gates",
    "strong_example": "New assets, new data types, live actions, supplier contact, and service-impacting changes require written approval.",
    "weak_example": "Ask when needed.",
    "why": "The document should define exactly what needs further authorization."
  },
  {
    "field": "Stop conditions",
    "strong_example": "Pause for unexpected confidential data, scope conflict, service instability, expired permission, or evidence-integrity concern.",
    "weak_example": "Stop if something goes wrong.",
    "why": "Specific conditions support safe and consistent decisions."
  },
  {
    "field": "Communication",
    "strong_example": "Technical details to the security lead; service impact to the owner; privacy issues to the data owner; fictional portfolio summary to the teacher.",
    "weak_example": "Share results with stakeholders.",
    "why": "Audience, content, owner, and confidentiality should be defined."
  },
  {
    "field": "Validation and closure",
    "strong_example": "Close only after evidence review, owner decision, effective-state checks, service validation, communication, evidence handling, signoff, and residual-risk record.",
    "weak_example": "Close when the alert is gone.",
    "why": "Closure should reflect validated technical and operational outcomes."
  }
];
const commonMistakes = [
  "Assuming a verbal request from a senior person automatically overrides written boundaries.",
  "Treating technical access, administrator rights, or tool capability as permission.",
  "Interpreting connected, related, supporting, or dependent systems as automatically in scope.",
  "Using the word investigate as permission for any method or evidence source.",
  "Allowing authorization to continue after its time window expires.",
  "Collecting full records when only a few approved fields are needed.",
  "Failing to name prohibited actions because they seem obvious.",
  "Using old authorization documents for a new project, system, owner, or time period.",
  "Allowing one owner to approve actions that belong to another owner, such as private data access or supplier testing.",
  "Making a live or service-impacting change when the authorization permits review and recommendation only.",
  "Sharing findings with unapproved audiences because the information seems educational or helpful.",
  "Treating an emergency as unlimited permission instead of using narrow documented emergency authority.",
  "Failing to define stop conditions for unexpected sensitive data, unstable service, scope conflict, or evidence damage.",
  "Closing work when the ticket is complete rather than when required validation and signoff are complete."
];
const quizQuestions = [
  {
    "question": "What best distinguishes written authorization from a verbal request?",
    "choices": [
      "Written authorization defines the approved purpose, scope, actions, time, owners, evidence rules, and limits.",
      "A verbal request is always stronger because it is faster.",
      "Written authorization is optional when the requester is senior.",
      "There is no difference if the defender has technical access."
    ],
    "answer": 0,
    "explanation": "Written authorization creates a reviewable, accountable boundary that verbal pressure or technical access cannot replace."
  },
  {
    "question": "A fictional application depends on a database that is not named in the authorization. What is strongest?",
    "choices": [
      "The database is automatically in scope because it is connected.",
      "Document the dependency and seek separate written permission before reviewing the database.",
      "Review the database secretly to avoid delay.",
      "Assume the service owner approved it."
    ],
    "answer": 1,
    "explanation": "Dependencies matter for context, but connected systems are not automatically authorized."
  },
  {
    "question": "Which phrase creates the weakest fictional action boundary?",
    "choices": [
      "Review supplied sign-in logs and recommend next steps.",
      "No live access, scanning, changes, or private-message review.",
      "Take any necessary security action.",
      "Configuration changes require change-owner approval."
    ],
    "answer": 2,
    "explanation": "Any necessary action is vague and can be interpreted far beyond the intended purpose."
  },
  {
    "question": "What should happen when a fictional authorization window expires before the review is complete?",
    "choices": [
      "Continue because the task started on time.",
      "Stop and obtain a documented extension before continuing.",
      "Use a personal device to finish.",
      "Change the timestamp in the notes."
    ],
    "answer": 1,
    "explanation": "Permission is time-limited and does not continue automatically because work remains unfinished."
  },
  {
    "question": "Why should fictional stop conditions be specific?",
    "choices": [
      "They define when work must pause for scope, privacy, service, evidence, or authority concerns.",
      "They guarantee no mistake will occur.",
      "They eliminate the need for owners.",
      "They allow the defender to ignore written scope until a problem appears."
    ],
    "answer": 0,
    "explanation": "Specific stop conditions make safe escalation consistent and reviewable."
  },
  {
    "question": "A fictional analyst is authorized to review logs and recommend actions. May the analyst disable an account?",
    "choices": [
      "Yes, because recommendation implies execution.",
      "Yes, if the alert is High.",
      "Only if separate written authority or the defined approval process authorizes that change.",
      "Yes, if the service owner is unavailable."
    ],
    "answer": 2,
    "explanation": "Review, recommendation, approval, and execution are different authorities."
  },
  {
    "question": "What makes an authorization portfolio artifact safe to share?",
    "choices": [
      "Only real passwords are removed.",
      "Every organization, asset, identity, document, log, owner, date, request, action, and outcome is invented.",
      "The real document is shortened.",
      "The company name is replaced but all other details remain."
    ],
    "answer": 1,
    "explanation": "Complete fictionalization protects privacy, confidentiality, and real organizational boundaries."
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A1
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

export default function AuthorizationScopeAndWrittenPermissionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 2 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Authorization and Scope
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.2 Authorization, Scope, and Written Permission
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders turn a broad request into a
            precise written boundary covering purpose, assets, identities,
            data, actions, methods, time, ownership, approval gates, stop
            conditions, communication, validation, and closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A1: Advanced Cyber Ethics and Legal Boundaries"
          lessonTitle="Authorization, Scope, and Written Permission"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional documents, systems, identities, owners, requests, logs, dates, actions, and outcomes.",
            "I understand that verbal requests, technical access, urgency, good intentions, or seniority do not automatically create permission.",
            "I will not access, scan, test, alter, bypass, investigate, or disclose a real system without explicit written authorization.",
            "I will treat connected systems, dependencies, backups, supplier services, personal devices, and unrelated data as out of scope unless they are named.",
            "I will pause when permission is missing, expired, contradictory, overly broad, or issued by a role without the required authority.",
            "I will not use real authorization letters, internal policies, confidential screenshots, private messages, employee records, school records, or real incident documents.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Connected Does Not Mean Authorized"
        >
          <p className="leading-8">
            A fictional analyst is authorized to review supplied sign-in logs
            for APP-TRAIN-01 and ID-TRAIN-01 from 9:00 AM to 1:00 PM. The
            application depends on DB-TRAIN-02 and supplier service
            EXT-DEMO-03. A supervisor asks the analyst to check the database
            because it is related. Professional scope discipline requires the
            analyst to document the dependency, verify ownership, and seek
            separate written authorization rather than treating architecture
            connections as automatic permission.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak interpretation
              </p>
              <p className="mt-2 leading-7">
                The database supports the application, so it must be included.
                The supervisor asked, and the analyst has access.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional interpretation
              </p>
              <p className="mt-2 leading-7">
                The database is a relevant dependency but remains out of scope
                until the correct owner provides written permission and defines
                the approved evidence, actions, time, and limits.
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
          title="Scope Protects Both the Organization and the Defender"
        >
          <p className="leading-8">
            Strong authorization protects fictional users, owners, systems,
            data, services, suppliers, evidence, and the defender performing
            the work. It creates a shared record of why the task exists, what
            may happen, what must not happen, who may decide, when work must
            stop, how evidence is handled, and what proves completion. Without
            that structure, even useful defensive work can become invasive,
            disruptive, inaccurate, unreviewable, or legally risky.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Prevents accidental expansion",
                "Dependencies, connected systems, and interesting findings stay outside scope until approved.",
              ],
              [
                "Protects evidence and privacy",
                "Only approved fictional records and minimum fields are viewed, stored, shared, retained, and reported.",
              ],
              [
                "Clarifies accountability",
                "Recommendation, approval, execution, communication, validation, and risk acceptance are assigned to authorized roles.",
              ],
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

        <SectionCard
          eyebrow="Core Model"
          title="Permission Must Answer Six Questions"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Why?", "What fictional purpose, decision, and expected outcome justify the task?"],
              ["What?", "Which exact systems, identities, data, services, evidence, and environments are included?"],
              ["How?", "Which actions, methods, tools, controls, approvals, and prohibitions apply?"],
              ["When and where?", "What start, end, timezone, location, supervision, and expiration govern the work?"],
              ["Who?", "Who requested, owns, approves, executes, communicates, validates, reviews, and accepts residual risk?"],
              ["When must work stop?", "Which scope, privacy, service, evidence, authority, competence, or conflict condition triggers a pause?"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Authorization and Scope"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Scope Dimensions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Boundaries a Professional Authorization Should Define
          </h2>

          <div className="mt-6 grid gap-5">
            {scopeDimensions.map((item) => (
              <article
                key={item.dimension}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.dimension}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Include", item.include],
                    ["Exclude", item.exclude],
                    ["Evidence", item.evidence],
                    ["Risk if vague", item.risk],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.dimension}-${label}`}
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
            Authorization Roles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            One Person Rarely Owns Every Permission
          </h2>

          <div className="mt-6 grid gap-5">
            {authorizationRoles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Responsibility", item.responsibility],
                    ["May authorize", item.may_authorize],
                    ["May not authorize", item.may_not_authorize],
                    ["Authority evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
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
            Scope Review Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps for Reviewing Written Permission
          </h2>

          <div className="mt-6 grid gap-5">
            {scopeReviewSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Red flag
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.red_flag}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Authorization Document Quality
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Strong Language versus Dangerous Ambiguity
          </h2>

          <div className="mt-6 grid gap-5">
            {authorizationDocumentFields.map((item) => (
              <article
                key={item.field}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.field}
                </h3>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Strong example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.strong_example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak example
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.weak_example}
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Why it matters
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.why}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Authorization and Scope Dashboard"
          subtitle="Fictional permission review for training only."
          metrics={[
            {
              label: "Authorized assets",
              value: "2",
              note: "APP-TRAIN-01 and ID-TRAIN-01 are explicitly listed.",
            },
            {
              label: "Scope conflicts",
              value: "3",
              note: "Database review, mailbox export, and supplier contact require separate approval.",
            },
            {
              label: "Time remaining",
              value: "42 min",
              note: "Current authorization expires at 1:00 PM Eastern Time.",
            },
          ]}
        />

        <FakeAlertCard
          title="Scope Expansion Requested without Confirmed Owner Approval"
          severity="High"
          time="12:18 PM"
          source="Fake Northbridge Authorization Review Console"
          details="A fictional supervisor requests review of DB-TRAIN-02 and a full confidential mailbox export. Neither asset nor evidence category appears in the signed authorization memo."
          recommendation="Pause the expanded work, document each requested change, confirm system and data ownership, define minimum-necessary evidence, obtain written approval, and update the time window and stop conditions before proceeding."
        />

        <FakeLogPanel
          title="Fake Authorization Review Timeline"
          logs={[
            "09:00 AUTH assets='APP-TRAIN-01,ID-TRAIN-01'",
            "09:00 AUTH evidence='supplied-sign-in-logs'",
            "09:00 AUTH actions='review,document,recommend'",
            "09:00 AUTH window='09:00-13:00 ET'",
            "10:05 DEPENDENCY asset='DB-TRAIN-02'",
            "10:06 SCOPE database='not-listed'",
            "10:15 REQUEST database-review='supervisor'",
            "10:17 OWNER database='unconfirmed'",
            "11:05 REQUEST mailbox-export='full'",
            "11:06 DATA mailbox='confidential'",
            "11:07 SCOPE mailbox='not-approved'",
            "11:10 DECISION expanded-work='paused'",
            "11:20 OPTION auth-fields-only='available'",
            "12:00 REQUEST supplier-contact='proposed'",
            "12:01 DISCLOSURE supplier='not-approved'",
            "12:18 ESCALATION scope-expansion='requested'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What the Authorization Evidence Supports
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Professional action", item.action],
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
          title="May the Fictional Analyst Review the Database?"
          evidence={[
            "The signed authorization names APP-TRAIN-01 and ID-TRAIN-01 only.",
            "DB-TRAIN-02 is a dependency but is not listed as an authorized asset.",
            "A supervisor requested database review.",
            "Database ownership and delegated authority are unconfirmed.",
            "The current permission allows supplied-log review, documentation, and recommendation only.",
            "The authorization window ends at 1:00 PM Eastern Time.",
          ]}
          options={[
            "Document the dependency, pause database review, confirm the owner, define approved evidence and actions, and obtain written scope expansion before proceeding.",
            "Review the database because it supports an authorized application.",
            "Review only a small part of the database without telling anyone.",
            "Assume the supervisor's message replaces the signed authorization.",
          ]}
          bestAnswer={0}
          explanation="A relevant dependency remains out of scope until the correct owner provides explicit written permission defining evidence, actions, time, and limits."
        />

        <SectionCard
          eyebrow="Common Scope Mistakes"
          title="Patterns That Turn a Legitimate Task into Unauthorized Work"
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
          title="Build a Fictional Authorization and Scope Package"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Rewrite the Northbridge Authorization
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                copy, lightly edit, or summarize a real authorization letter,
                policy, contract, incident plan, scope statement, system
                record, private message, or confidential document.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Authorized purpose and decision question.</li>
                <li>In-scope and out-of-scope asset inventory.</li>
                <li>Identity, data, evidence, action, method, time, and location boundaries.</li>
                <li>Authorization-role and ownership map.</li>
                <li>Allowed and prohibited action matrix.</li>
                <li>Approval gates and scope-expansion procedure.</li>
                <li>Stop conditions and emergency-authority limits.</li>
                <li>Communication, disclosure, retention, and portfolio rules.</li>
                <li>Validation and closure checklist.</li>
                <li>Reflection and revision history after fictional reviewer feedback.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The finished artifact must remain fully fictional and may never be
            used as permission to access, test, scan, alter, bypass, investigate,
            or disclose any real system, account, data, network, application,
            organization, person, or supplier.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Authorization Expires in Ten Minutes"
          scenario="The fictional review is incomplete, but the written authorization ends at 1:00 PM. The analyst believes another hour would probably finish the work."
          choices={[
            {
              label: "Choice A",
              response: "Stop at expiration, preserve notes, communicate status, and obtain a documented extension before continuing.",
              outcome: "Best professional choice. Time limits are part of authorization and do not extend automatically.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Continue because the task began during the approved window.",
              outcome: "Risky. Authorization applies to the entire work period, not only the start time.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Finish from a personal device after hours.",
              outcome: "Unsafe. This may violate location, supervision, data-handling, and time boundaries.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Emergency Request Says to Disable the Account"
          scenario="A fictional manager requests immediate account disabling after one High alert. The current authorization permits review and recommendation only, and the account supports an important service."
          choices={[
            {
              label: "Choice A",
              response: "Use the approved emergency process, confirm the authorized change owner, document the service dependency, compare targeted options, and execute only after proper approval.",
              outcome: "Best professional choice. Emergency handling remains documented, narrow, owner-approved, service-aware, and reversible.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable the account because emergency language overrides scope.",
              outcome: "Risky. Emergency pressure does not automatically grant unlimited technical authority.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the alert because the current scope does not allow changes.",
              outcome: "Unsafe. The analyst should escalate through the approved emergency path rather than ignore the risk.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Authorization and Scope Checklist"
          items={[
            "I can identify the fictional authorization source, issuer, role, delegation, signature, date, and expiration.",
            "I can state the fictional purpose, question, expected decision, and outcome in one precise sentence.",
            "I can list exact in-scope and out-of-scope systems, services, identities, data, evidence, environments, suppliers, locations, and dependencies.",
            "I can distinguish fictional review, recommendation, approval, execution, communication, validation, and risk-acceptance authority.",
            "I can define allowed actions, prohibited actions, approved methods, tools, evidence sources, and safety controls.",
            "I can define fictional time window, timezone, location, supervision, review checkpoints, and extension process.",
            "I can apply minimum-necessary data, classification, owner approval, access, storage, sharing, retention, deletion, and portfolio rules.",
            "I can identify scope expansion and route it to the correct system, data, service, change, supplier, legal, privacy, or risk owner.",
            "I can define approval gates for new assets, new data, live actions, changes, supplier contact, disclosure, and service impact.",
            "I can define stop conditions for unclear authority, expired permission, unexpected sensitive data, unstable service, evidence concerns, conflicts, or competence limits.",
            "I can define fictional rollback, validation, owner signoff, communication, residual risk, evidence handling, and closure criteria.",
            "I will never treat this lesson or any fictional artifact as permission for real-world access, testing, scanning, changes, bypass, investigation, or disclosure.",
          ]}
        />

        <MiniQuiz
          title="A1.2 Mini Quiz: Authorization, Scope, and Written Permission"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Authorization, Scope, and Written Permission Package for the Northbridge training review. Include the authorized purpose, issuing authority, role delegation, exact in-scope and out-of-scope assets, identities, data, evidence, actions, methods, tools, locations, time window, supervision, allowed and prohibited actions, evidence-handling rules, approval gates, stop conditions, emergency limits, communication audiences, disclosure rules, scope-expansion process, rollback, validation, closure, residual risk, reviewer feedback, revision history, and portfolio-safety statement."
          tips={[
            "Use precise fictional names and identifiers instead of vague phrases such as related systems or necessary action.",
            "Show that connected systems and dependencies remain out of scope until separately approved.",
            "Separate the requester, system owner, data owner, security lead, change authority, privacy reviewer, supplier owner, and risk owner.",
            "Include at least one missing or ambiguous clause, revise it after feedback, and explain why the revision creates a safer boundary.",
            "State clearly that the artifact is fictional and provides no real-world authorization.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Written authorization turns a broad request into an accountable professional boundary.",
            "Technical access, skill, urgency, business pressure, seniority, good intentions, and connected architecture do not automatically create permission.",
            "Scope should define purpose, assets, identities, data, evidence, actions, methods, tools, time, location, ownership, communication, service impact, validation, and closure.",
            "In-scope and out-of-scope lists should be explicit because related, dependent, or connected systems are not automatically authorized.",
            "Review, recommendation, approval, execution, communication, validation, and risk acceptance belong to different roles.",
            "Scope expansion requires a documented request, correct owner, updated boundaries, approvals, time, evidence rules, and stop conditions.",
            "Emergency authority should remain narrow, time-limited, documented, reversible, owner-aware, and reviewable.",
            "Authorization can expire before a task is complete, and work must pause until a documented extension exists.",
            "Authorized analysis does not automatically authorize data access, service changes, supplier contact, user notification, public disclosure, or portfolio sharing.",
            "Every CyberShield authorization artifact must remain fully fictional, defensive, privacy-safe, and incapable of granting real-world permission.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A1
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