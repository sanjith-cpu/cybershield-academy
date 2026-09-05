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
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = `${modulePath}/secure-web-architecture-principles`;
const nextLesson = `${modulePath}/authorization-and-access-control-design`;

const objectives = [
  "Distinguish authentication, identity assurance, multi-factor concepts, account recovery, session management, authorization, and sensitive-action verification as related but separate defensive decisions.",
  "Evaluate fictional authentication designs through security, usability, accessibility, privacy, support burden, recovery risk, administrative privilege, and business continuity.",
  "Design a fictional session lifecycle covering creation, duration, inactivity, renewal, privilege changes, device/context changes, logout, revocation concepts, and recovery transitions without discussing session theft or bypass.",
  "Use fictional evidence to identify weak identity assumptions, overlong privilege, unclear recovery ownership, monitoring gaps, support-process risk, and inconsistent session handling.",
  "Create a professional fictional Authentication and Session Design Review containing user journeys, assurance goals, recovery paths, session states, owner decisions, monitoring questions, exceptions, validation, and public-safe communication."
];

const vocabulary = [
  [
    "Authentication",
    "A fictional process used to establish that a user, administrator, or service has presented the expected identity evidence before a protected session begins."
  ],
  [
    "Identity assurance",
    "The level of confidence a fictional system needs that the identity context is appropriate for a specific business action or risk level."
  ],
  [
    "Authentication factor",
    "A conceptual identity signal from a different factor category, such as something known, possessed, or inherent. A10 uses these only as defensive design concepts."
  ],
  [
    "Multi-factor authentication concept",
    "A fictional design that requires more than one independent factor category for selected sign-in or high-risk events."
  ],
  [
    "Account recovery",
    "The fictional process for restoring legitimate access when normal authentication cannot be completed. Recovery should not silently become weaker than normal sign-in."
  ],
  [
    "Session",
    "A fictional period in which an application recognizes an already-authenticated user or service under defined duration, privilege, context, monitoring, and termination rules."
  ],
  [
    "Session creation",
    "The fictional transition from successful authentication into an application-recognized session with a defined user, privilege state, scope, and owner policy."
  ],
  [
    "Inactivity timeout",
    "A fictional rule that ends or reduces a session after an approved period without meaningful activity."
  ],
  [
    "Absolute session limit",
    "A fictional maximum session lifetime after which fresh authentication or another approved identity check is required."
  ],
  [
    "Reauthentication",
    "A fictional requirement to repeat approved identity verification before a higher-risk action, privilege change, recovery action, or sensitive administrative task."
  ],
  [
    "Session renewal",
    "A fictional controlled transition that extends or replaces session state according to approved policy without changing user privilege unexpectedly."
  ],
  [
    "Logout",
    "A fictional user- or system-initiated transition that ends the recognized session and should lead to predictable application state."
  ],
  [
    "Revocation concept",
    "A fictional defender-controlled ability to invalidate previously accepted session state after a risk event, account change, or owner decision."
  ],
  [
    "Device/context change",
    "A fictional change in approved device, browser, location class, network context, or user-risk context that may justify additional verification or review."
  ],
  [
    "Administrative session",
    "A fictional privileged session for higher-impact configuration or support functions with stronger identity, shorter lifetime, tighter monitoring, and clearer ownership expectations."
  ],
  [
    "Recovery assurance",
    "The confidence that a fictional account-recovery process restores the correct user without introducing a weaker path than ordinary authentication."
  ]
];

const principles = [
  [
    "Authentication is not authorization",
    "Successful identity verification does not automatically grant access to every resource or action.",
    "Which fictional authorization decision still needs to happen after sign-in?"
  ],
  [
    "Use risk-appropriate assurance",
    "Ordinary user activity, sensitive changes, recovery, and administrative actions may require different identity assurance.",
    "Which business actions justify stronger fictional verification?"
  ],
  [
    "Protect recovery as carefully as sign-in",
    "A weak recovery path can undermine otherwise strong authentication.",
    "Does the recovery workflow preserve equivalent ownership, monitoring, privacy, and identity confidence?"
  ],
  [
    "Treat sessions as security state",
    "A session carries identity and privilege assumptions across time, so creation, duration, renewal, change, and termination should be explicit.",
    "What identity and privilege state does this fictional session represent right now?"
  ],
  [
    "Shorter is not automatically better",
    "Very short sessions may reduce exposure but can create usability, accessibility, support, and workflow problems.",
    "What fictional timeout balances risk, user need, critical workflow, and reauthentication burden?"
  ],
  [
    "Privilege changes should change session thinking",
    "Administrative elevation, role changes, recovery, or sensitive actions can justify fresh verification and updated monitoring.",
    "Should the existing fictional session remain sufficient after this change?"
  ],
  [
    "Context changes deserve review, not panic",
    "A new device or context can be important without automatically meaning compromise.",
    "Which context change is meaningful enough to require additional verification, monitoring, or user communication?"
  ],
  [
    "Logout and revocation should be predictable",
    "Users and defenders need to know when a session is no longer valid and how that state is reflected across dependent services.",
    "Which fictional systems must recognize that the session ended?"
  ],
  [
    "Monitor identity decisions, not private behavior",
    "Useful monitoring focuses on sign-in state, recovery, privilege, session changes, administrative actions, failures, and source health while minimizing unnecessary personal information.",
    "Which identity events answer a defender question without excessive collection?"
  ],
  [
    "Separate admin sessions from ordinary sessions",
    "Privileged work has higher impact and should not inherit ordinary user session assumptions automatically.",
    "What stronger fictional identity, duration, monitoring, and approval rules apply to administrative work?"
  ],
  [
    "Design for accessibility and support",
    "Security that legitimate users cannot complete reliably may drive unsafe workarounds and support pressure.",
    "Which fictional users may need an accessible, approved path without weakening identity assurance?"
  ],
  [
    "Make ownership explicit",
    "Authentication, recovery, session policy, support exceptions, monitoring, privacy, and emergency access need named fictional owners.",
    "Who can approve a change, exception, or session-policy decision?"
  ]
];

const lifecycle = [
  [
    "1. Identity request",
    "A fictional user or service begins an approved sign-in or access journey.",
    "Purpose, user class, requested service, and risk context are known."
  ],
  [
    "2. Authentication",
    "The fictional identity service evaluates the required identity evidence for that journey.",
    "Authentication result plus bounded assurance context."
  ],
  [
    "3. Session creation",
    "The application creates recognized session state with approved privilege, scope, timing, and monitoring expectations.",
    "Session start record and expected privilege."
  ],
  [
    "4. Normal activity",
    "The fictional session supports ordinary approved actions while authorization remains independent for each protected resource or action.",
    "Ongoing user workflow with bounded session state."
  ],
  [
    "5. Context review",
    "Device, role, recovery, administrative, or business-risk changes may trigger additional verification or owner review.",
    "Continue, step up, limit, or end the fictional session."
  ],
  [
    "6. Sensitive action",
    "Higher-impact fictional actions may require fresh verification or a privileged session rather than relying indefinitely on ordinary session state.",
    "Reauthentication or separate administrative session decision."
  ],
  [
    "7. Renewal",
    "The session may be extended or replaced under approved policy if identity, risk, source health, and business conditions remain acceptable.",
    "Updated session state with preserved ownership."
  ],
  [
    "8. Logout or system termination",
    "The fictional session ends due to user action, timeout, owner decision, account change, recovery event, or risk response.",
    "Predictable session termination record."
  ],
  [
    "9. Cross-service recognition",
    "Dependent fictional services should align with the updated identity/session state according to architecture and ownership.",
    "Consistent post-termination behavior."
  ],
  [
    "10. Review and improvement",
    "Authentication, recovery, timeout, support, accessibility, monitoring, and false-positive lessons are reviewed.",
    "Updated identity/session design and owner actions."
  ]
];

const journeys = [
  [
    "Standard user sign-in",
    "Access ordinary support features under normal fictional risk.",
    "Appropriate user authentication, bounded session, ordinary authorization.",
    "Unnecessary friction, accessibility failure, excessive data collection.",
    "Identity Owner + Application Owner"
  ],
  [
    "Sensitive account change",
    "Change an important fictional account setting.",
    "Existing session plus risk-appropriate fresh verification before the change.",
    "Relying indefinitely on an old session for a higher-impact action.",
    "Identity Owner + Application Owner"
  ],
  [
    "Account recovery",
    "Restore legitimate access after the normal sign-in path is unavailable.",
    "Purpose-limited recovery, identity confidence, support ownership, monitoring, user notice, post-recovery session review.",
    "Recovery becoming an easier path than ordinary authentication.",
    "Identity Owner + Support Owner"
  ],
  [
    "Administrative sign-in",
    "Perform privileged fictional configuration or support administration.",
    "Stronger identity expectations, separate privileged role/session, shorter lifetime, monitoring, approval.",
    "Reusing ordinary user session assumptions for high-impact administration.",
    "Operations Owner + Identity Owner"
  ],
  [
    "Device/context change",
    "Continue or resume a fictional session after meaningful context change.",
    "Risk review and additional verification when justified by policy.",
    "Automatically treating every context change as compromise or ignoring all changes.",
    "Identity Owner + Monitoring Owner"
  ],
  [
    "Password or identity-setting change",
    "Modify a fictional identity-related setting.",
    "Fresh verification, clear user communication, audit event, session-policy review.",
    "Allowing a stale session to make high-impact identity changes without review.",
    "Identity Owner"
  ],
  [
    "Logout",
    "End a fictional recognized user session.",
    "Predictable termination and aligned dependent-service behavior.",
    "Only changing the user interface while session state remains ambiguous.",
    "Application Owner + Identity Owner"
  ],
  [
    "Emergency support access",
    "Handle a rare fictional business-critical support situation.",
    "Predefined approval, least privilege, time bounds, monitoring, documentation, expiration, post-use review.",
    "Improvised exceptions with no owner or review.",
    "Support Owner + Governance Reviewer"
  ]
];

const sessionStates = [
  [
    "Unauthenticated",
    "No approved fictional session exists.",
    "Only public or pre-authentication functions are available.",
    "Sign-in and recovery attempts may be monitored at a minimized level."
  ],
  [
    "Authenticated standard",
    "The fictional user has completed normal authentication.",
    "Ordinary user actions still require independent authorization.",
    "Session age, meaningful risk changes, and security-relevant account events."
  ],
  [
    "Step-up verified",
    "The fictional user completed additional approved verification for a higher-risk action.",
    "Temporary higher-assurance action context; not unlimited privilege.",
    "Reason, timing, action class, and completion."
  ],
  [
    "Administrative",
    "The fictional user is operating under a separately approved privileged session.",
    "Only the minimum administrative capabilities assigned to the role.",
    "Start/end, high-impact changes, source health, approval context, and exceptions."
  ],
  [
    "Recovery transition",
    "The fictional account has just completed recovery.",
    "Conservative post-recovery state until important identity/session checks are complete.",
    "Recovery owner, user notice, session reset/review concept, high-risk actions."
  ],
  [
    "Restricted",
    "The fictional session remains recognized but capability is intentionally limited.",
    "Only approved low-risk or continuity actions.",
    "Reason for restriction, owner, review trigger, user communication."
  ],
  [
    "Terminated",
    "The fictional session is no longer accepted.",
    "No continued session-based access.",
    "Termination reason, owner/source, dependent-service consistency."
  ]
];

const evidenceSet = [
  [
    "AUTH-01",
    "Fictional sign-in policy",
    "Current",
    "Standard users and administrators have different fictional authentication journeys.",
    "Supports differentiated assurance based on role and impact.",
    "Does not prove implementation quality or account security.",
    "Review assurance, admin separation, monitoring, recovery, and accessibility."
  ],
  [
    "AUTH-02",
    "Fictional session policy",
    "Current",
    "Standard sessions have inactivity and absolute lifetime rules; privileged sessions have shorter approved lifetimes.",
    "Supports explicit session lifecycle design.",
    "Does not prove every service enforces the policy consistently.",
    "Review cross-service ownership and validation."
  ],
  [
    "AUTH-03",
    "Fictional recovery workflow",
    "Conditional",
    "Recovery requires approved identity checks and user notification, but post-recovery session behavior is not fully documented.",
    "Supports a governed recovery process with one incomplete design area.",
    "Does not prove recovery is weak or bypassable.",
    "Record a session-transition Unknown and assign the Identity Owner."
  ],
  [
    "AUTH-04",
    "Fictional admin workflow",
    "Current",
    "Administrative work uses a separate role and separately initiated privileged session.",
    "Supports separation of ordinary and privileged session state.",
    "Does not prove least privilege or monitoring completeness.",
    "Review admin authorization, duration, approvals, logging, and termination."
  ],
  [
    "AUTH-05",
    "Fictional monitoring summary",
    "Healthy",
    "Sign-in outcomes, recovery events, privilege changes, administrative session starts/ends, and forced terminations are monitored.",
    "Supports useful identity/session observability.",
    "Does not prove all alerts are high quality or privacy-minimized.",
    "Review source health, baseline, correlation, retention, and privacy."
  ],
  [
    "AUTH-06",
    "Fictional user-support note",
    "Current",
    "Users sometimes contact support after repeated session timeout during long case-writing workflows.",
    "Supports a usability and workflow concern.",
    "Does not prove timeouts should be removed.",
    "Review risk, session duration, draft preservation, accessibility, and reauthentication design."
  ],
  [
    "AUTH-07",
    "Fictional change record",
    "Current",
    "A proposed feature would keep privileged session state active after the user returns to ordinary portal tasks.",
    "Supports a meaningful privilege-state design change.",
    "Does not prove compromise or misuse.",
    "Review least privilege, session separation, duration, user clarity, monitoring, and termination."
  ],
  [
    "AUTH-08",
    "Fictional source-health record",
    "Degraded",
    "Identity monitoring was delayed during a short maintenance interval.",
    "Supports a visibility limitation.",
    "Does not prove suspicious identity activity occurred.",
    "Limit absence claims for the interval and use alternate fictional records where possible."
  ]
];

const assuranceMatrix = [
  [
    "Ordinary user workflow",
    "Standard",
    "Normal approved user authentication and bounded session.",
    "Keep friction reasonable while preserving independent authorization."
  ],
  [
    "Sensitive profile/account change",
    "Elevated",
    "Fresh approved verification before the higher-impact change.",
    "Avoid relying indefinitely on older session state."
  ],
  [
    "Account recovery",
    "Elevated",
    "Recovery-specific identity assurance plus notification and post-recovery session review.",
    "Recovery should not become the easiest path into the account."
  ],
  [
    "Administrative configuration",
    "High",
    "Separate privileged authentication/session expectations, least privilege, shorter lifetime, monitoring, and approval.",
    "Administrative impact justifies stronger controls and clearer ownership."
  ],
  [
    "Emergency support exception",
    "High + governed exception",
    "Predefined approval, time bounds, least privilege, monitoring, documentation, expiration, and review.",
    "Do not improvise emergency access outside governance."
  ]
];

const monitoringQuestions = [
  "Are fictional sign-in outcomes within the expected baseline for each user class?",
  "Are recovery events occurring with the expected owner, notification, and post-recovery review?",
  "Are privileged sessions created only for approved roles and expected administrative purposes?",
  "Do privileged sessions end when the approved task or time window ends?",
  "Are sensitive identity or account changes followed by the expected verification and audit event?",
  "Are forced session terminations correlated with account, support, or incident decisions?",
  "Are repeated timeout/support problems indicating a usability or accessibility design issue?",
  "Is the identity/session monitoring source Healthy enough to support the current conclusion?",
  "Are duplicate or derived identity alerts being counted as independent evidence?",
  "Are logs minimized to security-relevant identity/session state rather than unnecessary private user behavior?"
];

const commonMistakes = [
  [
    "Authentication equals authorization",
    "A signed-in fictional user may still lack permission for a specific resource or action.",
    "Keep resource/action authorization independent from authentication."
  ],
  [
    "Strong sign-in, weak recovery",
    "A recovery path can undermine otherwise strong assurance if it has weaker ownership or review.",
    "Design recovery with comparable identity confidence, monitoring, notification, and post-recovery session handling."
  ],
  [
    "Sessions never change after sign-in",
    "Privilege, device, recovery, account, and business context can change over time.",
    "Define reauthentication, renewal, restriction, termination, and review states."
  ],
  [
    "One timeout for every user and action",
    "Different risk, accessibility, workflow, and administrative contexts may justify different policy.",
    "Use risk-appropriate session lifetimes with explicit owner reasoning."
  ],
  [
    "Privilege survives ordinary task switching",
    "A fictional user may retain more privilege than needed after administrative work ends.",
    "Separate privileged sessions and terminate or reduce them predictably."
  ],
  [
    "Context change equals compromise",
    "A new device or network context can be meaningful without automatically proving account misuse.",
    "Use context as one risk signal requiring proportional review."
  ],
  [
    "No monitoring of recovery",
    "Recovery is a high-value identity event and should not disappear from defender visibility.",
    "Monitor recovery state, owner action, user notification, session transition, and important follow-up events."
  ],
  [
    "Collect excessive identity data",
    "More personal information does not automatically improve authentication or monitoring.",
    "Use minimization and collect only what the approved identity/security purpose needs."
  ]
];

const labPhases: Array<[string, string[]]> = [
  [
    "Phase 1 — Define identity journeys",
    [
      "Create fictional journeys for standard sign-in, sensitive action, recovery, administration, device/context change, logout, and emergency support.",
      "State the business purpose and assurance goal for each.",
      "Keep authorization separate from authentication."
    ]
  ],
  [
    "Phase 2 — Build the session state model",
    [
      "Use Unauthenticated, Authenticated Standard, Step-up Verified, Administrative, Recovery Transition, Restricted, and Terminated states.",
      "Define entry conditions, allowed capability, owner, monitoring, and exit conditions.",
      "Do not use real cookies, tokens, credentials, or bypass examples."
    ]
  ],
  [
    "Phase 3 — Review recovery",
    [
      "Document fictional recovery purpose, owner, identity confidence, user notification, privacy, support role, monitoring, post-recovery session state, and re-review.",
      "Identify at least three ways recovery design can become operationally risky without describing attack techniques.",
      "Create safer design decisions."
    ]
  ],
  [
    "Phase 4 — Review session policy",
    [
      "Compare inactivity timeout, absolute lifetime, renewal, sensitive-action reauthentication, administrative duration, logout, and forced termination concepts.",
      "Document usability, accessibility, privacy, support, and business tradeoffs.",
      "Assign an owner to every exception."
    ]
  ],
  [
    "Phase 5 — Build monitoring questions",
    [
      "Use the ten defender questions in this lesson.",
      "Add source-health requirements, baselines, false-positive context, privacy limits, and decision value.",
      "Record which conclusions become Unknown when identity monitoring is Degraded."
    ]
  ],
  [
    "Phase 6 — Evaluate evidence",
    [
      "Review AUTH-01 through AUTH-08.",
      "For each, record observation, supports, limitations, owner, current confidence, and design question.",
      "Do not turn incomplete design evidence into claims of account compromise."
    ]
  ],
  [
    "Phase 7 — Create decision records",
    [
      "Write at least six fictional authentication/session decisions.",
      "Include assurance goal, alternatives, usability tradeoff, privacy impact, support impact, monitoring, validation, residual risk, and re-review trigger.",
      "Include at least one admin-session and one recovery decision."
    ]
  ],
  [
    "Phase 8 — Produce the public-safe package",
    [
      "Create a user-journey diagram and session-state diagram using invented labels.",
      "Write a technical review, user-support note, leadership summary, and governance summary.",
      "Remove all real passwords, tokens, cookies, account identifiers, URLs, or implementation secrets."
    ]
  ]
];



function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
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
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
        Module A10
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

export default function AuthenticationAndSessionDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">High School Advanced</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">Module A10</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">Lesson A10.2</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Identity and Sessions</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">A10.2 Authentication and Session Design</h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders design fictional authentication and session lifecycles around identity assurance, multi-factor concepts, recovery, session creation, duration, renewal, logout, sensitive actions, administrative privilege, device/context changes, monitoring, accessibility, privacy, support, and owner decisions—without credential attacks, session theft, bypass methods, or real-account testing.
          </p>

          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Authentication and Session Design"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.2 teaches defensive authentication and session design, not password attacks, credential collection, session theft, token capture, phishing, bypass methods, or account takeover.",
            "I will use only invented Northbridge users, roles, sessions, policies, recovery events, support records, monitoring data, and decisions.",
            "I can keep authentication and authorization separate: proving identity does not automatically grant a protected action.",
            "I will treat account recovery as a security-sensitive identity journey with its own owner, monitoring, privacy, notification, and session-transition requirements.",
            "I will evaluate timeout and reauthentication choices through security, usability, accessibility, support impact, privacy, and business continuity rather than assuming stricter is always better.",
            "I will not use real passwords, cookies, session tokens, account identifiers, login pages, private traffic, or live testing.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="The Login Page Is Only the Beginning of Identity Security">
          <p className="leading-8">
            A fictional user signs in successfully at 9:00 a.m. That single event does not answer what should happen at noon, after a role change, during a sensitive account update, after recovery, on a new device, or when the user switches into an administrative function.
          </p>
          <p className="mt-4 leading-8">
            Professional identity design therefore treats authentication as the start of a lifecycle. Session age, privilege, business action, recovery, context, monitoring, support, user experience, and termination all matter after the first sign-in.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak identity thinking</p>
              <p className="mt-2 leading-7">“The user signed in once, so every action during the session can rely on that forever.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Defender identity thinking</p>
              <p className="mt-2 leading-7">“Identity assurance, session age, privilege, recovery state, sensitive actions, context changes, monitoring, and user experience all influence whether the current session is still appropriate.”</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="Five Objectives for A10.2">
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Objective {index + 1}</p>
                <p className="mt-3 text-sm font-semibold leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why It Matters" title="Authentication Is an Ongoing Risk and User-Experience Decision">
          <p className="leading-8">
            Weak identity design can create excessive privilege, confusing recovery, stale administrative access, inconsistent logout, unsupported exceptions, or monitoring gaps. Overly strict design can also create accessibility problems, lost work, repeated support calls, and pressure for unsafe workarounds.
          </p>
          <p className="mt-4 leading-8">
            The goal is not “maximum friction.” The goal is appropriate assurance for the fictional action, consistent session state, strong ownership, reliable monitoring, safe recovery, and a usable process for legitimate users.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Advanced Vocabulary" title="Authentication and Session Language">
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Framework" title="Twelve Authentication and Session Principles">
          <div className="grid gap-5">
            {principles.map(([principle, explanation, question], index) => (
              <article key={principle} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-black text-white">{principle}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{explanation}</p>
                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defender question</p>
                      <p className="mt-2 text-sm leading-6">{question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Professional Workflow" title="The Ten-Stage Authentication and Session Lifecycle">
          <div className="grid gap-5">
            {lifecycle.map(([stage, detail, output]) => (
              <article key={stage} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-xl font-black text-white">{stage}</h3>
                <p className="mt-2 leading-7 text-slate-300">{detail}</p>
                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Expected output</p>
                  <p className="mt-2 text-sm leading-6">{output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Identity and Session Dashboard"
          subtitle="A10.2 — defensive design review"
          metrics={[
            { label: "Identity journeys", value: "8", note: "Standard sign-in, sensitive change, recovery, admin, context change, identity-setting change, logout, and emergency support" },
            { label: "Session states", value: "7", note: "Unauthenticated, Standard, Step-up, Administrative, Recovery Transition, Restricted, and Terminated" },
            { label: "Monitoring questions", value: "10", note: "Identity/session visibility is tied to defender questions and privacy limits" },
            { label: "Primary design rule", value: "Assurance matches action", note: "Higher-impact actions may require stronger verification without making every user journey unnecessarily difficult" },
          ]}
        />

        <SectionCard eyebrow="User Journeys" title="Eight Fictional Authentication and Session Journeys">
          <div className="grid gap-5">
            {journeys.map(([journey, purpose, assurance, risk, owner]) => (
              <article key={journey} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-white">{journey}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Purpose</p>
                    <p className="mt-2 text-sm leading-6">{purpose}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Defensive design</p>
                    <p className="mt-2 text-sm leading-6">{assurance}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Design risk</p>
                    <p className="mt-2 text-sm leading-6">{risk}</p>
                  </div>
                  <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-purple-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">Owner</p>
                    <p className="mt-2 text-sm leading-6">{owner}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Privileged Session Design Warning"
          severity="High"
          time="Northbridge identity review 11:20"
          source="A10.2 session-design board"
          details="A proposed workflow would keep a user's privileged administrative session active after the user returns to ordinary Support Portal work, with no separate timeout, visual state, monitoring expectation, or termination rule."
          recommendation="Keep privileged session state separate from ordinary user activity. Define stronger assurance, least privilege, shorter approved lifetime, clear start/end behavior, monitored administrative actions, user-visible context, and predictable termination before approving the design."
        />

        <SectionCard eyebrow="Session State Model" title="Seven Fictional Session States">
          <div className="grid gap-5">
            {sessionStates.map(([state, meaning, capability, monitoring]) => (
              <article key={state} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{state}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{meaning}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Allowed capability</p>
                    <p className="mt-2 text-sm leading-6">{capability}</p>
                  </div>
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Monitoring focus</p>
                    <p className="mt-2 text-sm leading-6">{monitoring}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Assurance Matrix" title="Match Identity Assurance to the Fictional Action">
          <div className="grid gap-5">
            {assuranceMatrix.map(([action, assurance, design, caution]) => (
              <article key={action} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">{action}</h3>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">{assurance}</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Design expectation</p>
                    <p className="mt-2 text-sm leading-6">{design}</p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Caution</p>
                    <p className="mt-2 text-sm leading-6">{caution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Authentication and Session Review Log"
          logs={[
            "11:00 | AUTH | journey=standard-user | result=approved | session=Standard",
            "11:05 | ACTION | type=sensitive-account-change | verification=fresh-approved-check",
            "11:08 | SESSION | state=Step-up-Verified | scope=sensitive-action-only",
            "11:12 | ADMIN | role=SupportAdmin | separate_session=true | monitoring=Healthy",
            "11:15 | RECOVERY | event=completed | user_notice=true | post_recovery_state=review-required",
            "11:18 | SUPPORT | issue=timeout-during-long-workflow | review=usability-and-risk",
            "11:20 | DESIGN | privileged_state_persists=true | approval=hold",
            "11:23 | SOURCE_HEALTH | identity_monitoring=Degraded | absence_claim=limited",
            "11:27 | SESSION | forced_termination=owner-approved | dependent_services=reviewed",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the Recovery Design"
          question="What is the strongest response to AUTH-03?"
          evidence={[
            "The recovery workflow has approved identity checks.",
            "User notification is included.",
            "Post-recovery session behavior is not fully documented.",
            "No supplied evidence shows the account or recovery process was bypassed.",
          ]}
          options={[
            "Declare the recovery workflow insecure and compromised.",
            "Record the post-recovery session transition as an Unknown, assign the Identity Owner, define expected session restriction/verification/monitoring, and validate the design before calling recovery complete.",
            "Ignore the missing session behavior because recovery already succeeded.",
            "Test the real recovery path to see whether it can be bypassed.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports an incomplete design area, not a proven bypass. A strong defensive review records the Unknown, assigns ownership, and defines safe validation criteria."
        />

        <SectionCard eyebrow="Monitoring" title="Ten Defender Questions for Identity and Session Monitoring">
          <div className="grid gap-4 md:grid-cols-2">
            {monitoringQuestions.map((question, index) => (
              <div key={question} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Question {index + 1}</p>
                <p className="mt-2 text-sm leading-7">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: The Long Case-Writing Session"
          scenario="Fictional support users frequently lose unsaved work because the current session expires during long case-writing tasks. The security team proposes removing session limits entirely so users never have to sign in again."
          choices={[
            { label: "Choice A", response: "Remove all session limits so users are never interrupted.", outcome: "Eliminating session boundaries ignores identity risk, shared-device concerns, role changes, account events, and long-lived privilege.", tone: "risk" },
            { label: "Choice B", response: "Review the actual workflow, preserve drafts safely, distinguish inactivity from active work, choose risk-appropriate inactivity and absolute limits, support accessible reauthentication, and monitor support impact.", outcome: "This balances security with usability, accessibility, business continuity, and predictable session state.", tone: "best" },
            { label: "Choice C", response: "Make the timeout much shorter so users learn to work faster.", outcome: "Security friction without business reasoning can create support problems and unsafe workarounds.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Fictional Evidence" title="Northbridge Authentication and Session Evidence Set">
          <div className="grid gap-5">
            {evidenceSet.map(([id, source, health, observation, supports, limits, use]) => (
              <article key={id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">{health}</span>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{source}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", observation],
                    ["Supports", supports],
                    ["Limits", limits],
                    ["Review use", use],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Monitoring Gap"
          question="What does AUTH-08 mean for a statement that 'no unusual identity event occurred during the maintenance interval'?"
          evidence={[
            "Identity monitoring was Degraded during the interval.",
            "The delay affected the source used for identity/session visibility.",
            "No supplied evidence proves suspicious activity occurred.",
          ]}
          options={[
            "The absence statement is fully reliable because no alert was shown.",
            "The interval should be treated as a visibility limitation; strong absence claims should be reduced, and alternate fictional evidence may be used if available.",
            "The monitoring gap proves an account was compromised.",
            "All identity monitoring should be ignored permanently.",
          ]}
          bestAnswer={1}
          explanation="Source degradation creates uncertainty. It does not prove safety or compromise, but it limits the strength of absence claims."
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Privileged Session Persists"
          scenario="A fictional administrator finishes a short configuration task and returns to ordinary Support Portal work. The proposed design keeps the privileged session active in the background for convenience."
          choices={[
            { label: "Choice A", response: "Keep the privileged session active because the user already proved they are an administrator.", outcome: "Identity role alone does not justify retaining high-impact privilege longer than needed.", tone: "risk" },
            { label: "Choice B", response: "End or reduce the privileged session after the approved task, return the user to ordinary session state, and require fresh privileged verification when another administrative task begins.", outcome: "This supports least privilege, clear user state, shorter privileged lifetime, and stronger monitoring.", tone: "best" },
            { label: "Choice C", response: "Log the user out of every system after each administrative click.", outcome: "Excessive disruption is not automatically stronger security; the design should match risk and workflow.", tone: "caution" },
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Eight Authentication and Session Mistakes to Avoid">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map(([mistake, why, correction]) => (
              <article key={mistake} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-red-100">{mistake}</h3>
                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Why it fails</p>
                  <p className="mt-2 text-sm leading-6">{why}</p>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Professional correction</p>
                  <p className="mt-2 text-sm leading-6">{correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Fictional Lab" title="Build the Northbridge Authentication and Session Design Review">
          <p className="leading-8">
            Use only the invented journeys, policies, session states, monitoring records, and evidence on this page. The lab is about defensive identity design, usability, accessibility, privacy, ownership, and monitoring—not bypassing authentication or obtaining session material.
          </p>
          <div className="mt-6 grid gap-5">
            {labPhases.map(([phase, tasks]) => (
              <article key={phase} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-100">{phase}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {tasks.map((task) => <li key={task}>• {task}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Do not test real sign-in pages, recovery flows, accounts, sessions, cookies, tokens, devices, or administrative functions. Do not guess passwords, collect credentials, capture session material, send deceptive messages, bypass authentication, or attempt account access. Use fictional policy and evidence only.
            </p>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Advanced Challenge" title="Design Identity for Three Different Risk Levels">
          <p className="leading-8">
            Redesign Northbridge identity and session behavior for ordinary support work, sensitive account changes, and privileged administration. Each journey should use different assurance and session expectations without creating confusing or inaccessible user experiences.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Define the identity assurance goal for ordinary, sensitive, and administrative actions.",
              "Create separate session states and transition rules for all three risk levels.",
              "Design a recovery path that does not become weaker than normal authentication.",
              "Define when fresh verification is required and why.",
              "Set conceptual inactivity and absolute lifetime policies with usability reasoning rather than arbitrary strictness.",
              "Create an accessible support path for legitimate users who cannot complete the default journey.",
              "Define monitored events for sign-in, recovery, privilege, sensitive changes, logout, and forced termination.",
              "Create a response for a Degraded identity-monitoring source.",
              "Write a privacy-minimization statement for identity and session logs.",
              "Create a leadership summary explaining the security/usability tradeoffs and owner decisions.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-7 text-purple-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10.2 Authentication and Session Design Checklist"
          items={[
            "I can separate authentication, authorization, account recovery, session management, and sensitive-action verification.",
            "I can explain why identity assurance should match the risk and business impact of the fictional action.",
            "I can design fictional standard, step-up, administrative, recovery-transition, restricted, and terminated session states.",
            "I can evaluate inactivity and absolute session limits through security, usability, accessibility, support, and continuity.",
            "I can explain why privileged sessions should be separated from ordinary user sessions.",
            "I can review account recovery as a high-value identity journey with owner, monitoring, notification, privacy, and post-recovery session rules.",
            "I can treat device/context change as a risk signal without automatically declaring compromise.",
            "I can define predictable logout and revocation concepts across dependent fictional services.",
            "I can design identity/session monitoring around defender questions, source health, baselines, privacy, and decision value.",
            "I can record Unknowns and incomplete design assumptions without offensive testing.",
            "I can create accessible support and exception paths with explicit ownership and review.",
            "I can create a public-safe fictional identity/session portfolio artifact without real passwords, tokens, cookies, accounts, or implementation secrets.",
          ]}
        />

        <MiniQuiz
          title="A10.2 Mini Quiz: Authentication and Session Design"
          questions={[
            { question: "What does successful fictional authentication establish?", choices: ["The user may perform every action in the application.", "The expected identity evidence was accepted for the current journey; authorization is still a separate decision.", "The session should never expire.", "Administrative privilege is automatically granted."], answer: 1, explanation: "Authentication and authorization are separate. Identity confidence does not automatically grant every protected action." },
            { question: "Why should account recovery receive strong defensive design attention?", choices: ["Recovery is only a customer-service function.", "A weak recovery path can undermine normal authentication if it restores access with lower assurance or weak ownership.", "Recovery should always be disabled.", "Recovery does not affect sessions."], answer: 1, explanation: "Recovery is a security-sensitive identity journey and should preserve appropriate assurance, ownership, monitoring, notification, and post-recovery session review." },
            { question: "What is strongest for a fictional sensitive account change?", choices: ["Rely on any existing session regardless of age or context.", "Use risk-appropriate fresh verification before the higher-impact change and continue independent authorization.", "Require the user to create a new account.", "Give the user administrative privilege temporarily."], answer: 1, explanation: "Higher-impact actions may justify fresh verification without turning ordinary users into administrators." },
            { question: "Why should privileged sessions be separated from ordinary sessions?", choices: ["Administrators should never use ordinary features.", "Privileged actions have higher impact and need stronger assurance, shorter approved lifetime, clearer monitoring, and predictable termination.", "Ordinary sessions are always insecure.", "Separate sessions remove the need for authorization."], answer: 1, explanation: "Privilege should exist only when needed and under stronger session assumptions." },
            { question: "What does a Degraded fictional identity-monitoring source mean?", choices: ["Account compromise is confirmed.", "Nothing suspicious occurred because no alert appeared.", "Visibility is limited, so strong absence claims should be reduced and alternate evidence may be needed.", "All session state should be deleted."], answer: 2, explanation: "Source degradation creates uncertainty, not proof of safety or compromise." },
            { question: "Which timeout decision is strongest?", choices: ["Use the shortest possible timeout for every user and action.", "Remove all timeouts for convenience.", "Choose risk-appropriate inactivity and absolute limits while considering workflow, accessibility, support, sensitive actions, and reauthentication.", "Use a random timeout so users cannot predict it."], answer: 2, explanation: "Session policy should balance security with legitimate workflow and accessibility rather than optimize only for strictness." },
            { question: "What is the strongest response to incomplete post-recovery session documentation?", choices: ["Test a real account to see what happens.", "Assume the safest behavior.", "Record the area as an Unknown, assign an owner, define the expected post-recovery state and validation, and review before approval.", "Assume account takeover is possible."], answer: 2, explanation: "Professional defensive review preserves Unknowns and validates design safely rather than inventing missing facts or testing real accounts." },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Authentication and Session Design Review"
          prompt="Create a fully fictional A10.2 Authentication and Session Design Review for Northbridge. Include standard-user, sensitive-action, recovery, administrative, device/context-change, identity-setting-change, logout, and emergency-support journeys; assurance goals; user classes; accessibility considerations; authentication-factor concepts; MFA concepts; recovery owner; user notification; session states; session creation; inactivity policy; absolute lifetime; renewal; fresh verification; privilege changes; administrative session rules; logout; revocation concepts; dependent-service behavior; monitoring questions; source-health requirements; false-positive context; privacy/minimization; support impact; exceptions; decision owners; validation questions; residual risk; re-review triggers; technical summary; user-support summary; leadership summary; governance summary; and a public-safe state diagram. Every user, account, role, session, event, owner, and decision must be invented."
          tips={[
            "Keep authentication and authorization separate throughout the design.",
            "Treat recovery as a high-value identity journey rather than a weaker backup path.",
            "Use session states and transitions instead of assuming one session remains appropriate forever.",
            "Balance timeout and reauthentication decisions with usability, accessibility, privacy, support, and business continuity.",
            "Make privileged session start and end behavior explicit.",
            "Do not include real passwords, tokens, cookies, account identifiers, login pages, or bypass techniques.",
          ]}
        />

        <SectionCard eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A10.3 Authorization and Access Control Design?">
          <p className="leading-8">
            Rate your readiness from 1 to 5 for separating authentication from authorization, designing recovery, reasoning about session lifecycle, choosing risk-appropriate assurance, handling privileged sessions, preserving usability/accessibility, and monitoring identity decisions safely.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain what authentication establishes and what it does not establish.",
              "I can explain why recovery needs comparable assurance and ownership.",
              "I can model session creation, normal activity, step-up verification, renewal, restriction, logout, and termination.",
              "I can separate ordinary and privileged session state.",
              "I can reason about inactivity and absolute session limits without assuming stricter is always better.",
              "I can define when fresh verification is appropriate for a sensitive action.",
              "I can treat context change as one risk input rather than automatic proof of compromise.",
              "I can design identity/session monitoring around source health and privacy.",
              "I can record Unknowns and assign owners instead of testing real accounts.",
              "I am ready to focus on authorization, least privilege, resource ownership, and access-control decisions in A10.3.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Portfolio Build Guide" title="What a Strong A10.2 Artifact Should Show">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A clear identity-assurance goal for each fictional user journey",
              "Authentication and authorization shown as separate decisions",
              "A recovery design with ownership, user notice, monitoring, and post-recovery session rules",
              "A session-state diagram with defined transitions",
              "Risk-appropriate inactivity and absolute lifetime reasoning",
              "Sensitive-action fresh-verification decisions",
              "Separate administrative session rules",
              "Accessible and supportable user journeys",
              "Logout and termination behavior across dependent services",
              "Identity/session monitoring questions and source-health requirements",
              "Privacy and minimization rules for identity logs",
              "Exception and emergency-access governance",
              "Decision records with tradeoffs, owners, and validation",
              "A technical, user-support, leadership, and governance summary",
              "A public-safe artifact with invented identity/session information only",
              "A reflection on how good session design reduces both security risk and user confusion",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Portfolio element {index + 1}</p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Authentication establishes identity context; authorization separately determines what that identity may do.",
            "Identity assurance should match the risk, business impact, privilege, and user journey rather than use one rule for every action.",
            "Account recovery must not silently become a weaker path than ordinary authentication.",
            "Sessions are security state that should have explicit creation, duration, renewal, privilege, context, logout, termination, and monitoring rules.",
            "Privileged administrative sessions deserve stronger assurance, shorter lifetime, clearer ownership, and more focused monitoring than ordinary user sessions.",
            "Timeouts and reauthentication should balance security with usability, accessibility, support burden, and business continuity.",
            "Device or context change is a risk signal, not automatic proof of account compromise.",
            "Identity/session monitoring should answer defender questions while minimizing unnecessary personal information.",
            "A Degraded source limits strong identity absence claims but does not prove suspicious activity.",
            "A10.2 prepares you for A10.3, where authenticated identities are mapped to specific resources, actions, ownership relationships, roles, exceptions, and least-privilege decisions.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">Safety Boundary</p>
          <h2 className="mt-2 text-2xl font-black">Defensive Identity Design — No Credential or Session Attacks</h2>
          <p className="mt-3 leading-7">
            Nothing in A10.2 authorizes testing real login pages, accounts, recovery paths, passwords, sessions, cookies, tokens, devices, or administrative functions. Do not guess or collect credentials, capture session material, create deceptive messages, bypass authentication, access accounts, or test session weaknesses. Use only fictional design records, policies, events, and safe defender questions.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Lesson Complete</p>
          <h2 className="mt-2 text-2xl font-black">Continue to Authorization and Access Control Design</h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.2 established identity assurance, recovery, session states, duration, renewal, fresh verification, privileged sessions, logout, source health, privacy, accessibility, support, and monitoring. A10.3 will build on that foundation by deciding exactly which authenticated users and services may perform which actions on which fictional resources.
          </p>
          <div className="mt-6"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}