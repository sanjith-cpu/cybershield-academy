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
const previousLesson = `${modulePath}/api-security-concepts`;
const nextLesson = `${modulePath}/secrets-and-configuration-management`;

const objectives = [
  "Explain how browser-facing protections work as layered defensive controls around transport, content execution, framing, content-type handling, referrer privacy, cookies, and browser policy behavior.",
  "Evaluate fictional browser-protection decisions through security goal, application architecture, compatibility, usability, privacy, exceptions, rollout, monitoring, validation, and rollback.",
  "Distinguish the purpose of major browser-facing control categories without treating any one header, cookie attribute, or policy as complete web security.",
  "Use fictional evidence to identify missing ownership, weak exception governance, over-broad compatibility changes, incomplete rollout validation, stale policy assumptions, and monitoring gaps without bypass testing.",
  "Create a professional fictional Browser Protection Review package containing policy goals, control categories, cookie/session expectations, compatibility notes, exception records, rollout stages, monitoring questions, validation criteria, rollback plans, and public-safe documentation.",
];

const vocabulary = [
  {
    term: "Browser-facing protection",
    definition:
      "A fictional policy or response behavior that helps the browser handle transport, content, framing, referrer information, cookies, or other web interactions more safely.",
  },
  {
    term: "Transport enforcement",
    definition:
      "A defensive concept that tells browsers to use protected transport consistently for an approved fictional web service after the architecture and deployment are ready.",
  },
  {
    term: "Content Security Policy concept",
    definition:
      "A browser-facing defensive policy that restricts which approved content sources or execution categories are allowed for a fictional application. A10 studies its purpose and governance, not bypasses.",
  },
  {
    term: "Framing protection",
    definition:
      "A defensive control category that limits whether a fictional page may be embedded inside another browsing context when that embedding is not part of the approved design.",
  },
  {
    term: "Content-type protection",
    definition:
      "A defensive browser policy that reduces ambiguity about how certain fictional responses should be interpreted.",
  },
  {
    term: "Referrer policy",
    definition:
      "A browser privacy control that limits how much navigation-source information is shared when fictional users move between pages or services.",
  },
  {
    term: "Cookie attribute",
    definition:
      "A defensive property that helps define when a fictional browser cookie may be transported, exposed to scripts, or included in cross-site contexts.",
  },
  {
    term: "Secure cookie concept",
    definition:
      "A defensive expectation that a sensitive fictional cookie is only sent over protected transport.",
  },
  {
    term: "HttpOnly concept",
    definition:
      "A defensive cookie property that limits script access to certain fictional session-related cookie values.",
  },
  {
    term: "SameSite concept",
    definition:
      "A defensive cookie policy that controls when fictional cookies are sent in cross-site browsing situations according to the application's legitimate workflow.",
  },
  {
    term: "Policy exception",
    definition:
      "A fictional approved deviation from the preferred browser-protection policy with a documented reason, owner, scope, duration, monitoring, validation, and expiration.",
  },
  {
    term: "Compatibility",
    definition:
      "The ability of fictional browser protections to coexist with legitimate application behavior, approved third-party content, accessibility, user workflows, and supported clients.",
  },
  {
    term: "Report-only / observation phase",
    definition:
      "A fictional staged review concept in which a team observes policy effects before stricter enforcement, when the control and platform support such a safe rollout mode.",
  },
  {
    term: "Rollout",
    definition:
      "A fictional controlled process for introducing a browser protection in stages with owners, validation, user-impact review, monitoring, and rollback.",
  },
  {
    term: "Rollback",
    definition:
      "A fictional predefined plan to safely reverse or narrow a browser-protection change if legitimate business or accessibility impact becomes unacceptable.",
  },
  {
    term: "Defense in depth",
    definition:
      "The principle that architecture, authentication, authorization, input/output safety, APIs, browser protections, secrets, monitoring, and recovery work together rather than relying on one control.",
  },
];

const principles = [
  {
    principle: "Start with the security goal",
    explanation:
      "A browser protection should exist because it reduces a defined fictional risk or privacy exposure, not because a checklist says every site must use every control identically.",
    question:
      "What exact defensive outcome should this control support?",
  },
  {
    principle: "Use layers, not magic settings",
    explanation:
      "Transport policy, content restrictions, framing, cookies, referrer privacy, authorization, input/output safety, and secure architecture protect different parts of the system.",
    question:
      "Which other fictional controls must still work if this browser layer fails?",
  },
  {
    principle: "Match the application architecture",
    explanation:
      "A policy should reflect how the fictional application actually loads content, uses approved third parties, handles sessions, embeds content, and supports users.",
    question:
      "Which legitimate application behaviors does this policy need to permit?",
  },
  {
    principle: "Protect sessions deliberately",
    explanation:
      "Cookie protections should match transport, session design, browser context, authentication, and cross-site business needs.",
    question:
      "Which fictional cookie behavior is necessary for the approved session journey?",
  },
  {
    principle: "Protect privacy by default",
    explanation:
      "Referrer and content-sharing decisions should minimize unnecessary leakage of fictional path, page, or business context.",
    question:
      "How much navigation context does the destination actually need?",
  },
  {
    principle: "Stage major changes",
    explanation:
      "A broad browser-policy change can affect legitimate content, accessibility tools, suppliers, reports, or embedded business functions.",
    question:
      "Can the fictional team observe impact before full enforcement?",
  },
  {
    principle: "Govern exceptions",
    explanation:
      "Compatibility exceptions should have business reason, owner, exact scope, duration, monitoring, and expiration rather than becoming permanent silent gaps.",
    question:
      "Why is this exception necessary, and when will it end?",
  },
  {
    principle: "Monitor control health",
    explanation:
      "Defenders need to know when expected protections are missing, changed, misapplied, or causing business impact.",
    question:
      "Which fictional signal shows that the intended browser policy is still present and effective?",
  },
  {
    principle: "Validate legitimate workflows",
    explanation:
      "Security validation includes confirming sign-in, navigation, forms, reports, accessibility, approved integrations, and recovery still work as intended.",
    question:
      "Which ordinary user journeys must remain functional after rollout?",
  },
  {
    principle: "Plan rollback before enforcement",
    explanation:
      "A change is safer when the team knows how to return to the previous approved state if compatibility or business impact is unacceptable.",
    question:
      "What condition triggers rollback or narrowing?",
  },
  {
    principle: "Document ownership",
    explanation:
      "Policy maintenance, supplier exceptions, cookie decisions, monitoring, rollout, and review all need named fictional owners.",
    question:
      "Who approves, maintains, validates, and re-reviews this browser control?",
  },
  {
    principle: "Never confuse policy presence with complete security",
    explanation:
      "A browser header cannot repair broken authorization, weak recovery, over-broad API access, excessive data exposure, or unsafe secrets management.",
    question:
      "Which broader web-defense decision still needs independent review?",
  },
];

const workflow = [
  {
    step: "1. Define the application behavior",
    detail:
      "Document fictional pages, content sources, approved third parties, embedding needs, session cookies, navigation, reports, accessibility, and browser-supported workflows.",
    output:
      "Browser behavior inventory.",
  },
  {
    step: "2. Define the security goals",
    detail:
      "State which fictional transport, content, framing, cookie, referrer, privacy, and interpretation risks the browser controls should reduce.",
    output:
      "Browser protection goal register.",
  },
  {
    step: "3. Map control categories",
    detail:
      "Choose conceptual layers for transport enforcement, content restrictions, framing, content-type handling, referrer privacy, and cookies.",
    output:
      "Control-to-goal matrix.",
  },
  {
    step: "4. Review compatibility",
    detail:
      "Compare proposed policy with legitimate application content, approved integrations, accessibility, old supported clients, reports, and supplier dependencies.",
    output:
      "Compatibility review.",
  },
  {
    step: "5. Review cookie/session behavior",
    detail:
      "Connect fictional session cookies to authentication, session duration, protected transport, script-access need, cross-site business needs, logout, and recovery.",
    output:
      "Cookie/session policy board.",
  },
  {
    step: "6. Define exceptions",
    detail:
      "Record any compatibility exception with owner, scope, purpose, compensating controls, monitoring, duration, expiration, and re-review.",
    output:
      "Exception register.",
  },
  {
    step: "7. Stage rollout",
    detail:
      "Introduce fictional controls in a safe observation, pilot, partial-enforcement, or full-enforcement sequence where appropriate.",
    output:
      "Rollout plan.",
  },
  {
    step: "8. Monitor and validate",
    detail:
      "Check policy presence, compatibility, user impact, application errors, approved content, session behavior, source health, and business workflows.",
    output:
      "Validation and monitoring evidence.",
  },
  {
    step: "9. Roll back or narrow if needed",
    detail:
      "Use predefined criteria to reverse, narrow, or adjust the fictional change if legitimate business impact exceeds the accepted threshold.",
    output:
      "Rollback or adjustment decision.",
  },
  {
    step: "10. Review after change",
    detail:
      "Update architecture, supplier, session, privacy, monitoring, exception, and policy documentation after the control is stable.",
    output:
      "Browser Protection Review package.",
  },
];

const protectionCatalog = [
  {
    category: "Protected transport",
    purpose:
      "Keep approved fictional browser communication on protected transport and reduce accidental fallback to unprotected transport.",
    ownerQuestions:
      "Is the entire supported service ready? Are redirects, subdomains, suppliers, recovery paths, and monitoring aligned?",
    compatibility:
      "Legacy or alternate paths may fail if they are not ready for the protected-transport expectation.",
    evidence:
      "Architecture inventory, deployment plan, supported-domain list, monitoring, rollback readiness.",
  },
  {
    category: "Content restrictions",
    purpose:
      "Limit which categories or approved sources of browser-executed content the fictional application accepts.",
    ownerQuestions:
      "Which scripts, styles, media, frames, fonts, and connections are legitimate for the current application?",
    compatibility:
      "Overly broad restrictions may break approved application behavior; overly broad allowances may weaken the goal.",
    evidence:
      "Content inventory, supplier list, application build notes, policy observations, user-flow validation.",
  },
  {
    category: "Framing protections",
    purpose:
      "Prevent fictional pages from being embedded where embedding is not part of the approved business design.",
    ownerQuestions:
      "Which pages, if any, are legitimately embedded by approved parent applications?",
    compatibility:
      "Some legitimate portal integrations may require approved embedding.",
    evidence:
      "Architecture diagram, integration register, page-owner approval, browser behavior review.",
  },
  {
    category: "Content-type handling",
    purpose:
      "Reduce browser ambiguity about how certain fictional responses should be interpreted.",
    ownerQuestions:
      "Are response types explicit and consistent with the intended content?",
    compatibility:
      "Incorrect legacy response metadata may surface when stricter browser interpretation is applied.",
    evidence:
      "Response inventory, content-owner review, application test evidence.",
  },
  {
    category: "Referrer privacy",
    purpose:
      "Limit unnecessary sharing of fictional navigation-source detail.",
    ownerQuestions:
      "Which destinations need origin or path context, and which do not?",
    compatibility:
      "Analytics or supplier workflows may rely on more referrer information than the privacy goal allows.",
    evidence:
      "Analytics purpose, supplier data map, privacy review, business requirements.",
  },
  {
    category: "Secure cookie transport",
    purpose:
      "Ensure sensitive fictional cookies are used only with protected transport.",
    ownerQuestions:
      "Which cookies represent session or sensitive state, and is protected transport universal for their workflow?",
    compatibility:
      "Any unprotected legacy path conflicts with the secure-cookie goal.",
    evidence:
      "Session design, cookie register, transport readiness, logout/recovery review.",
  },
  {
    category: "Script-restricted session cookies",
    purpose:
      "Limit script access to fictional session-related cookie values when script access is not required.",
    ownerQuestions:
      "Does any approved client-side functionality truly need access to this cookie value?",
    compatibility:
      "Client-side code relying on direct cookie access may require redesign.",
    evidence:
      "Session architecture, client behavior inventory, application-owner approval.",
  },
  {
    category: "Cross-site cookie policy",
    purpose:
      "Control when fictional cookies are included in cross-site navigation or integration contexts.",
    ownerQuestions:
      "Which cross-site workflows are legitimate, and what is the least permissive setting that still supports them?",
    compatibility:
      "Federated sign-in, embedded tools, or approved cross-site workflows may require careful design.",
    evidence:
      "Authentication journey, supplier/integration map, session behavior, browser support review.",
  },
];

const cookieMatrix = [
  {
    cookie: "Session Cookie S",
    purpose:
      "Maintain fictional standard-user session state.",
    sensitivity:
      "High",
    transport:
      "Protected transport required.",
    script:
      "No script access needed under the fictional design.",
    crossSite:
      "Restricted to the minimum behavior needed for approved authentication and navigation.",
    lifecycle:
      "Created after authentication; expires according to A10.2 session policy; ends on logout/termination.",
  },
  {
    cookie: "Admin Session Cookie A",
    purpose:
      "Maintain fictional privileged administrative session state.",
    sensitivity:
      "Very High",
    transport:
      "Protected transport required.",
    script:
      "No script access needed.",
    crossSite:
      "Tightly limited to approved administrative workflow.",
    lifecycle:
      "Separate privileged session, shorter approved lifetime, ends after admin task/timeout.",
  },
  {
    cookie: "Preference Cookie P",
    purpose:
      "Remember a fictional low-risk display preference.",
    sensitivity:
      "Low",
    transport:
      "Protected transport expected with the application.",
    script:
      "May be read by approved client UI only if the architecture requires it.",
    crossSite:
      "No cross-site business need documented.",
    lifecycle:
      "Bounded retention and user-reset behavior.",
  },
  {
    cookie: "Recovery Transition Cookie R",
    purpose:
      "Support a fictional short-lived post-recovery transition.",
    sensitivity:
      "High",
    transport:
      "Protected transport required.",
    script:
      "No script access needed.",
    crossSite:
      "No general cross-site use.",
    lifecycle:
      "Short-lived; replaced or removed when recovery validation completes.",
  },
];

const rolloutStages = [
  {
    stage: "Stage 1 — Inventory",
    goal:
      "Understand fictional current behavior before changing browser policy.",
    evidence:
      "Content sources, integrations, cookies, frames, reports, accessibility, supported browsers, suppliers.",
    exit:
      "Owners agree the inventory is complete enough for a pilot.",
  },
  {
    stage: "Stage 2 — Observe",
    goal:
      "Collect fictional compatibility observations where the platform/control supports safe non-enforcing review.",
    evidence:
      "Expected policy effects, browser reports, application errors, user-impact notes, source health.",
    exit:
      "Major legitimate dependencies and exceptions are understood.",
  },
  {
    stage: "Stage 3 — Pilot",
    goal:
      "Apply the fictional control to a small approved scope or test environment.",
    evidence:
      "User journeys, accessibility, authentication, reports, integrations, session behavior, monitoring.",
    exit:
      "Pilot meets security and business acceptance criteria.",
  },
  {
    stage: "Stage 4 — Partial enforcement",
    goal:
      "Expand to a controlled production-like or limited-user scope when appropriate.",
    evidence:
      "Compatibility metrics, exception use, help-desk impact, policy presence, browser support.",
    exit:
      "No unresolved high-impact compatibility or privacy issue.",
  },
  {
    stage: "Stage 5 — Full enforcement",
    goal:
      "Apply the approved policy across the intended fictional scope.",
    evidence:
      "Policy presence, application health, user-flow success, session behavior, exceptions, source health.",
    exit:
      "Control is stable and owner-approved.",
  },
  {
    stage: "Stage 6 — Continuous review",
    goal:
      "Re-check after new suppliers, new content, browser changes, session changes, architecture changes, or incidents.",
    evidence:
      "Change records, exception register, monitoring trends, user-impact reports, owner review.",
    exit:
      "Ongoing; next review trigger is documented.",
  },
];

const exceptionRegister = [
  {
    id: "EX-01",
    need:
      "A fictional legacy reporting widget requires a temporary content-source exception.",
    owner:
      "Reporting Owner",
    scope:
      "Reporting page only.",
    duration:
      "30-day migration window.",
    compensating:
      "Limited page scope, monitoring, no privileged workflow, migration tracked.",
    validation:
      "Confirm new reporting component works before exception removal.",
    expiration:
      "Automatically reviewed at day 30.",
  },
  {
    id: "EX-02",
    need:
      "An approved supplier frame is required for one fictional support-status view.",
    owner:
      "Supplier Owner + Application Owner",
    scope:
      "Single approved page and parent integration.",
    duration:
      "Until supplier integration redesign.",
    compensating:
      "Purpose limitation, minimized data, monitoring, page-level review.",
    validation:
      "Confirm only approved embedding relationship exists.",
    expiration:
      "Re-review after supplier version change.",
  },
  {
    id: "EX-03",
    need:
      "A federated sign-in journey requires specific cross-site cookie behavior.",
    owner:
      "Identity Owner",
    scope:
      "Authentication journey only.",
    duration:
      "While the approved identity architecture requires it.",
    compensating:
      "Separate session design, strong ownership, monitoring, minimized cookie scope.",
    validation:
      "Confirm ordinary portal cookies remain more restrictive.",
    expiration:
      "Re-review on identity-provider or session-architecture change.",
  },
];

const monitoringQuestions = [
  "Are expected fictional browser protections present on the pages and responses where they are required?",
  "Did a recent release remove, weaken, or broaden a browser policy unexpectedly?",
  "Are content-policy observations increasing because of legitimate application change or an unreviewed dependency?",
  "Are framing-policy exceptions limited to approved pages and parent relationships?",
  "Are sensitive session cookies using the intended protected-transport and script-access restrictions?",
  "Are cross-site cookie decisions still aligned with the approved authentication and integration journeys?",
  "Is referrer information being minimized according to the current privacy design?",
  "Are browser-policy changes causing accessibility, sign-in, reporting, or supplier workflow failures?",
  "Are exception records current, time-bound, owned, and approaching expiration?",
  "Is the monitoring source Healthy enough to support the conclusion that the expected policy is present?",
  "Are rollback conditions or compatibility incidents increasing after enforcement?",
  "Have new suppliers, content sources, browser features, or architecture changes triggered a re-review?",
];

const evidenceSet = [
  {
    id: "BROW-01",
    source: "Fictional browser protection inventory",
    health: "Current",
    observation:
      "Northbridge documents transport, content, framing, content-type, referrer, and cookie protection goals.",
    supports:
      "Layered browser-protection review.",
    limits:
      "An inventory does not prove every response contains the intended policy.",
    use:
      "Map controls to security goals and owners.",
  },
  {
    id: "BROW-02",
    source: "Fictional session/cookie register",
    health: "Current",
    observation:
      "Standard, admin, preference, and recovery-transition cookies have different purposes and sensitivity.",
    supports:
      "Cookie policy should be purpose-specific rather than one-size-fits-all.",
    limits:
      "Does not prove browser implementation is correct.",
    use:
      "Review transport, script-access, cross-site, and lifecycle decisions.",
  },
  {
    id: "BROW-03",
    source: "Fictional content inventory",
    health: "Current",
    observation:
      "The Support Portal uses first-party scripts/styles plus one approved reporting widget and one approved supplier integration.",
    supports:
      "Content restrictions can be based on known legitimate dependencies.",
    limits:
      "Does not prove every content source is still required.",
    use:
      "Compatibility, supplier, and exception review.",
  },
  {
    id: "BROW-04",
    source: "Fictional rollout report",
    health: "Healthy",
    observation:
      "Pilot users completed sign-in, support case, report, notification, accessibility, and logout workflows successfully.",
    supports:
      "The pilot met major user-flow acceptance criteria.",
    limits:
      "Does not prove every browser, page, or edge case is covered.",
    use:
      "Support staged rollout decision.",
  },
  {
    id: "BROW-05",
    source: "Fictional exception register",
    health: "Conditional",
    observation:
      "EX-01 has seven days remaining, but the migration owner has not posted the latest validation note.",
    supports:
      "The exception is still within approved duration.",
    limits:
      "Closure readiness is uncertain.",
    use:
      "Require owner update before renewal or expiration.",
  },
  {
    id: "BROW-06",
    source: "Fictional privacy review",
    health: "Current",
    observation:
      "Referrer policy is designed to share only the minimum navigation-source detail needed by approved destinations.",
    supports:
      "Privacy-by-design objective.",
    limits:
      "Does not prove every third party processes data as expected.",
    use:
      "Supplier and analytics governance review.",
  },
  {
    id: "BROW-07",
    source: "Fictional monitoring summary",
    health: "Healthy",
    observation:
      "Policy presence, content-policy observations, session-cookie policy, compatibility errors, exception age, and rollout state are monitored.",
    supports:
      "High-level browser-protection observability.",
    limits:
      "Does not prove every alert is independent or actionable.",
    use:
      "Monitoring and source-health design.",
  },
  {
    id: "BROW-08",
    source: "Fictional change proposal",
    health: "Current",
    observation:
      "A new analytics supplier would add a new content source and receive broader referrer detail than the current privacy design.",
    supports:
      "A browser-content and privacy contract change.",
    limits:
      "Does not prove the supplier is unsafe.",
    use:
      "Trigger content, privacy, supplier, exception, monitoring, and rollout re-review.",
  },
];

const commonMistakes = [
  {
    mistake: "One header equals complete web security",
    why:
      "Browser protections do not replace architecture, authentication, authorization, input/output safety, APIs, secrets, monitoring, or recovery.",
    correction:
      "Use browser controls as one layer in defense in depth.",
  },
  {
    mistake: "Copy a policy without understanding the app",
    why:
      "A fictional application may have legitimate content, supplier, accessibility, or authentication dependencies that differ from another site.",
    correction:
      "Inventory real fictional application behavior before rollout.",
  },
  {
    mistake: "Make broad compatibility exceptions",
    why:
      "A global exception for one broken page weakens the policy across unrelated workflows.",
    correction:
      "Scope exceptions to the smallest page, content source, cookie, or integration needed.",
  },
  {
    mistake: "Leave exceptions forever",
    why:
      "Temporary compatibility decisions can quietly become permanent architecture.",
    correction:
      "Use owner, duration, monitoring, validation, expiration, and re-review.",
  },
  {
    mistake: "Use one cookie policy for every cookie",
    why:
      "Session, admin, recovery, and low-risk preference cookies have different sensitivity and business needs.",
    correction:
      "Review each fictional cookie by purpose and lifecycle.",
  },
  {
    mistake: "Ignore privacy",
    why:
      "Browser policies can affect referrer information, third-party content, analytics, and session data.",
    correction:
      "Include data minimization and audience purpose in the control review.",
  },
  {
    mistake: "Enforce without rollback",
    why:
      "Unexpected compatibility or accessibility impact can disrupt legitimate users.",
    correction:
      "Define rollback and narrowing criteria before major enforcement.",
  },
  {
    mistake: "Validate by bypass testing",
    why:
      "A10.6 teaches defensive browser policy design and rollout, not evasion.",
    correction:
      "Validate policy presence, legitimate workflows, monitoring, compatibility, ownership, and expected behavior.",
  },
];

const labPhases = [
  {
    phase: "Phase 1 — Build the browser behavior inventory",
    tasks: [
      "List fictional pages, first-party content, approved supplier content, embedded pages, reports, authentication journeys, cookies, accessibility needs, and supported browser classes.",
      "Identify the owner of each dependency.",
      "Keep all systems and content sources invented.",
    ],
  },
  {
    phase: "Phase 2 — Define protection goals",
    tasks: [
      "Create goals for transport enforcement, content restrictions, framing, content-type handling, referrer privacy, and cookie behavior.",
      "Write one defender question per goal.",
      "State what each control cannot replace.",
    ],
  },
  {
    phase: "Phase 3 — Build the cookie policy board",
    tasks: [
      "Use Session Cookie S, Admin Session Cookie A, Preference Cookie P, and Recovery Transition Cookie R.",
      "Document purpose, sensitivity, transport expectation, script-access need, cross-site need, lifetime, logout, and recovery behavior.",
      "Connect the decisions to A10.2 session design.",
    ],
  },
  {
    phase: "Phase 4 — Review compatibility",
    tasks: [
      "Use sign-in, support case, report, notification, accessibility, supplier, and logout workflows.",
      "Identify which browser protections could affect each workflow.",
      "Record Unknowns rather than weakening policy preemptively.",
    ],
  },
  {
    phase: "Phase 5 — Create exception governance",
    tasks: [
      "Use EX-01 through EX-03 and add two more fictional exceptions.",
      "For each include reason, owner, exact scope, duration, compensating controls, monitoring, validation, expiration, and re-review.",
      "Reject any exception with no owner or end condition.",
    ],
  },
  {
    phase: "Phase 6 — Build staged rollout",
    tasks: [
      "Use Inventory, Observe, Pilot, Partial Enforcement, Full Enforcement, and Continuous Review.",
      "Define evidence and exit criteria for each stage.",
      "Include rollback conditions and communication owners.",
    ],
  },
  {
    phase: "Phase 7 — Build monitoring",
    tasks: [
      "Use the twelve defender questions from this lesson.",
      "Add source health, alert lineage, user-impact review, exception age, supplier change, and rollout state.",
      "State which conclusions become Unknown if monitoring is Degraded.",
    ],
  },
  {
    phase: "Phase 8 — Produce the review package",
    tasks: [
      "Create protection-goal matrix, cookie board, compatibility review, exception register, rollout plan, monitoring plan, evidence review, findings, owners, validation criteria, rollback plan, technical summary, leadership summary, privacy summary, and public-safe artifact.",
      "Do not include bypass or evasion testing.",
      "Use fictional data only.",
    ],
  },
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
        Module A10
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

export default function SecureHeadersAndBrowserProtectionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A10
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Lesson A10.6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Browser Protection Layers
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10.6 Secure Headers and Browser Protections
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders review browser-facing controls as
            layered protections around transport, content execution, framing,
            response interpretation, referrer privacy, cookies, compatibility,
            exceptions, rollout, monitoring, validation, and rollback. The
            lesson stays defensive and conceptual—no bypass testing or exploit
            construction.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A10: Advanced Web Security Defense"
          lessonTitle="Secure Headers and Browser Protections"
          lessonNumber={6}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that A10.6 teaches defensive browser-policy design, not bypass testing, exploit construction, malicious markup, or browser-policy evasion.",
            "I will use only invented Northbridge pages, cookies, content sources, suppliers, policy observations, exceptions, rollout records, and monitoring data.",
            "I will treat browser protections as layers that complement architecture, authentication, authorization, input/output safety, APIs, secrets, monitoring, and recovery.",
            "I will review compatibility, accessibility, privacy, legitimate integrations, and user workflows before approving broad enforcement.",
            "I will use exception governance with owners, scope, duration, monitoring, validation, and expiration.",
            "I will not test real websites, browser policies, cookies, headers, content sources, or supplier integrations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Browser Policy Can Help Only When It Matches the Application"
        >
          <p className="leading-8">
            A fictional team copies a strict browser policy from another
            application and applies it everywhere. Sign-in still works, but the
            reporting widget fails, one accessibility workflow breaks, and a
            supplier integration stops loading. The policy may have a good
            security goal, but the rollout ignored legitimate application
            behavior.
          </p>

          <p className="mt-4 leading-8">
            Professional browser defense starts by understanding the fictional
            application, then matching controls to goals, compatibility,
            privacy, and user journeys. Strong controls are most effective when
            they are owned, staged, monitored, validated, and reversible.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak browser-policy thinking
              </p>
              <p className="mt-2 leading-7">
                “This header is considered secure, so we should enable the
                strictest possible version everywhere immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Defender browser-policy thinking
              </p>
              <p className="mt-2 leading-7">
                “Define the security goal, understand legitimate browser
                behavior, choose the least permissive compatible design, stage
                rollout, monitor impact, govern exceptions, and keep rollback
                ready.”
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="Five Objectives for A10.6"
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
          title="The Browser Is a Security Boundary With Business Consequences"
        >
          <p className="leading-8">
            Browser-facing controls affect content, sessions, privacy,
            integrations, accessibility, navigation, reporting, and user
            experience. A change can strengthen one layer while accidentally
            breaking an approved workflow somewhere else.
          </p>

          <p className="mt-4 leading-8">
            That is why a professional browser-protection program combines
            security goals with architecture, inventory, staged rollout,
            compatibility, monitoring, exception management, and rollback
            instead of treating headers as isolated checklist items.
          </p>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Browser Protection Language"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{item.term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Framework"
          title="Twelve Browser Protection Principles"
        >
          <div className="grid gap-5">
            {principles.map((item, index) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.principle}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.explanation}
                    </p>

                    <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                        Defender question
                      </p>
                      <p className="mt-2 text-sm leading-6">{item.question}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Professional Workflow"
          title="The Ten-Step Browser Protection Review Workflow"
        >
          <div className="grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.step}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.detail}</p>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Output
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fictional Northbridge Browser Protection Dashboard"
          subtitle="A10.6 — browser policy review"
          metrics={[
            {
              label: "Protection categories",
              value: "8",
              note: "Transport, content, framing, content type, referrer privacy, and cookie layers",
            },
            {
              label: "Cookie classes",
              value: "4",
              note: "Standard session, admin session, preference, and recovery transition",
            },
            {
              label: "Rollout stages",
              value: "6",
              note: "Inventory, observe, pilot, partial enforcement, full enforcement, continuous review",
            },
            {
              label: "Primary rule",
              value: "Layer + validate",
              note: "Browser controls strengthen other defenses but do not replace them",
            },
          ]}
        />

        <SectionCard
          eyebrow="Protection Catalog"
          title="Eight Browser-Facing Defensive Layers"
        >
          <div className="grid gap-5">
            {protectionCatalog.map((item) => (
              <article
                key={item.category}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">
                  {item.category}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Owner questions
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.ownerQuestions}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Compatibility
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {item.compatibility}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Review evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Fictional Browser Policy Change Warning"
          severity="High"
          time="Northbridge browser review 16:30"
          source="A10.6 browser protection board"
          details="A new analytics supplier would require an additional approved content source and would receive broader referrer information than the current privacy design. The proposal has no updated privacy review, exception scope, monitoring plan, rollout stage, or rollback criteria."
          recommendation="Hold the change. Re-review supplier purpose, content-source scope, referrer minimization, privacy, monitoring, compatibility, exception governance, rollout evidence, and rollback before approving the new browser-facing dependency."
        />

        <SectionCard
          eyebrow="Cookie and Session Alignment"
          title="Four Fictional Cookie Classes"
        >
          <div className="grid gap-5">
            {cookieMatrix.map((item) => (
              <article
                key={item.cookie}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.cookie}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    Sensitivity: {item.sensitivity}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Transport", item.transport],
                    ["Script access", item.script],
                    ["Cross-site behavior", item.crossSite],
                    ["Lifecycle", item.lifecycle],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeLogPanel
          title="Fictional Browser Protection Review Log"
          logs={[
            "16:00 | INVENTORY | first_party_content=reviewed | suppliers=2",
            "16:05 | COOKIE | Session-S | sensitivity=High | script_access=not-needed",
            "16:08 | COOKIE | Admin-A | privileged=true | lifetime=shorter",
            "16:12 | FRAME | supplier_status_view | embedding=approved-exception",
            "16:16 | REFERRER | policy=minimized | privacy_owner=approved",
            "16:20 | PILOT | sign-in,case,report,accessibility,logout=pass",
            "16:24 | EXCEPTION | EX-01 | days_remaining=7 | owner_update=missing",
            "16:30 | CHANGE | new-analytics-supplier=true | privacy_review=missing | approval=hold",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Analyze the New Analytics Supplier"
          question="What is the strongest response to BROW-08?"
          evidence={[
            "The new supplier would add a new browser content source.",
            "The supplier would receive broader referrer detail than the current privacy design.",
            "No updated exception, privacy, monitoring, rollout, or rollback record exists.",
            "No supplied evidence says the supplier is malicious.",
          ]}
          options={[
            "Approve because analytics suppliers are common.",
            "Hold the change until content scope, privacy, business purpose, exception governance, monitoring, rollout, and rollback are reviewed and owner-approved.",
            "Block every third-party content source permanently.",
            "Test whether the browser policy can be bypassed before deciding.",
          ]}
          bestAnswer={1}
          explanation="A new browser-facing dependency changes content and privacy assumptions. The defensive response is structured review, not automatic trust, blanket rejection, or bypass testing."
        />

        <SectionCard
          eyebrow="Staged Rollout"
          title="Six Browser Protection Rollout Stages"
        >
          <div className="grid gap-5">
            {rolloutStages.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.stage}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.goal}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.evidence}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Exit condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.exit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1: Strict Policy Breaks the Reporting Widget"
          scenario="During a fictional pilot, a stricter content policy blocks the approved reporting widget used by managers. The widget is business-required, but the proposed exception would broadly allow the supplier across every Northbridge page."
          choices={[
            {
              label: "Choice A",
              response:
                "Create the broad site-wide supplier exception so the widget works everywhere.",
              outcome:
                "A global exception is wider than the documented business need and weakens unrelated pages.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Scope the exception to the reporting workflow only, document owner and duration, monitor the dependency, validate legitimate manager use, and track migration or redesign.",
              outcome:
                "This preserves the security goal while allowing the approved business function with bounded risk.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Remove the reporting feature immediately without consulting the business owner.",
              outcome:
                "Security design should protect the business function, not silently eliminate it.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Exception Governance"
          title="Three Fictional Browser Policy Exceptions"
        >
          <div className="grid gap-5">
            {exceptionRegister.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-100">
                    {item.duration}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.need}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Owner", item.owner],
                    ["Scope", item.scope],
                    ["Compensating controls", item.compensating],
                    ["Validation", item.validation],
                    ["Expiration / re-review", item.expiration],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Analyze the Expiring Exception"
          question="What is the strongest response to BROW-05?"
          evidence={[
            "EX-01 is still inside its approved 30-day window.",
            "Seven days remain.",
            "The latest migration validation note is missing.",
            "No supplied evidence shows the exception has already expired or caused an incident.",
          ]}
          options={[
            "Renew the exception automatically for another year.",
            "Ask the owner for current migration/validation evidence before deciding whether to remove, narrow, or briefly renew the exception.",
            "Assume the reporting widget is malicious.",
            "Ignore the missing validation because the exception has not expired yet.",
          ]}
          bestAnswer={1}
          explanation="Exception governance is evidence-based. The missing validation note creates an ownership/closure Unknown that should be resolved before renewal or expiration."
        />

        <SectionCard
          eyebrow="Monitoring"
          title="Twelve Defender Questions for Browser Protection Health"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {monitoringQuestions.map((question, index) => (
              <div
                key={question}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  Question {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7">{question}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2: Accessibility Regression After Enforcement"
          scenario="After a fictional full-enforcement rollout, one supported accessibility workflow stops working for a small group of legitimate users. Monitoring confirms the browser policy change caused the regression, and the team has a documented rollback path."
          choices={[
            {
              label: "Choice A",
              response:
                "Ignore the issue because the stricter policy is more secure.",
              outcome:
                "A control that blocks legitimate supported users without review may fail the business and accessibility requirements of the architecture.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Use the predefined rollback or narrowly scoped adjustment, restore the supported workflow, investigate the exact compatibility need, and re-enter staged validation before re-enforcement.",
              outcome:
                "This uses rollback as a safety control while preserving the long-term security goal.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Remove all browser protections permanently.",
              outcome:
                "One compatibility regression does not justify abandoning the entire defense layer.",
              tone: "caution",
            },
          ]}
        />

        <SectionCard
          eyebrow="Fictional Evidence"
          title="Northbridge Browser Protection Evidence Set"
        >
          <div className="grid gap-5">
            {evidenceSet.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.health}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.source}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Limits", item.limits],
                    ["Review use", item.use],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Common Mistakes"
          title="Eight Browser Protection Mistakes to Avoid"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.mistake}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-red-100">
                  {item.mistake}
                </h3>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Why it fails
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Professional correction
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.correction}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Fictional Lab"
          title="Build the Northbridge Browser Protection Review"
        >
          <p className="leading-8">
            Use only the invented browser behaviors, cookie classes,
            protection categories, rollout stages, exceptions, monitoring
            questions, and evidence on this page. The lab teaches defensive
            policy design, compatibility, privacy, rollout, validation, and
            rollback—not browser-policy bypass.
          </p>

          <div className="mt-6 grid gap-5">
            {labPhases.map((item) => (
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
              Do not test real websites, headers, cookie attributes, browser
              policies, content restrictions, frame protections, referrer
              controls, suppliers, or authentication flows. Do not create
              malicious markup, exploit pages, bypass tests, policy-evasion
              examples, or real browser attacks. Use only fictional policy and
              compatibility evidence.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Challenge"
          title="Design a Layered Browser Protection Program for Three Different Page Types"
        >
          <p className="leading-8">
            Northbridge has three fictional page groups: ordinary support pages,
            privileged administrative pages, and a reporting page with one
            approved supplier widget. Design a browser-protection program that
            treats them differently where the business need justifies it.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Define the security and privacy goal for each page group.",
              "Map protected transport, content restrictions, framing, content-type, referrer, and cookie layers.",
              "Create separate cookie expectations for standard and administrative sessions.",
              "Document the supplier widget as a purpose-limited dependency rather than a global exception.",
              "Create accessibility and compatibility acceptance criteria.",
              "Build an exception record with owner, scope, duration, monitoring, validation, and expiration.",
              "Create a six-stage rollout plan.",
              "Define rollback conditions for user-impact or supplier regressions.",
              "Build monitoring questions for policy presence, cookie behavior, compatibility, privacy, and exception age.",
              "Write a leadership summary explaining why layered controls, staged rollout, and exception governance are stronger than copying one strict policy everywhere.",
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
          title="A10.6 Secure Headers and Browser Protections Checklist"
          items={[
            "I can explain the defensive purpose of protected transport, content restrictions, framing, content-type, referrer, and cookie protection categories.",
            "I can treat browser protections as layers rather than complete web security.",
            "I can map browser controls to real fictional application behavior and business requirements.",
            "I can align cookie protection with session sensitivity and lifecycle.",
            "I can review privacy impacts such as referrer detail and third-party content.",
            "I can stage browser-policy rollout rather than enforce broad change blindly.",
            "I can govern compatibility exceptions with scope, owner, duration, monitoring, validation, and expiration.",
            "I can validate legitimate workflows including sign-in, reports, accessibility, suppliers, and logout.",
            "I can define monitoring for policy presence, changes, exceptions, compatibility, cookies, and source health.",
            "I can use rollback as a safety control when legitimate impact becomes unacceptable.",
            "I can record Unknowns without bypass testing.",
            "I can create a public-safe browser protection artifact without real sites, policy values, cookies, or bypass examples.",
          ]}
        />

        <MiniQuiz
          title="A10.6 Mini Quiz: Secure Headers and Browser Protections"
          questions={[
            {
              question:
                "What is the strongest way to think about browser protections?",
              choices: [
                "One header can secure the entire application.",
                "They are layers that complement architecture, identity, authorization, input/output safety, APIs, secrets, monitoring, and recovery.",
                "They replace server-side authorization.",
                "They are only useful for public websites.",
              ],
              answer: 1,
              explanation:
                "Browser-facing controls reduce specific classes of risk but do not replace other web defenses.",
            },
            {
              question:
                "Why should a content-restriction policy begin with an application inventory?",
              choices: [
                "To identify legitimate content, suppliers, integrations, accessibility needs, and user workflows before enforcement.",
                "To find bypass methods.",
                "To copy every third-party domain automatically.",
                "To remove monitoring.",
              ],
              answer: 0,
              explanation:
                "A defensible policy must reflect legitimate application behavior and business needs.",
            },
            {
              question:
                "What is strongest for a fictional admin session cookie?",
              choices: [
                "Treat it the same as a low-risk preference cookie.",
                "Align it with protected transport, no unnecessary script access, limited cross-site behavior, shorter privileged lifetime, and explicit session ownership.",
                "Share it with every page and supplier.",
                "Keep it active indefinitely.",
              ],
              answer: 1,
              explanation:
                "Cookie handling should match the sensitivity and lifecycle of the session it supports.",
            },
            {
              question:
                "Why should browser-policy exceptions expire?",
              choices: [
                "All exceptions are malicious.",
                "Temporary compatibility needs can become permanent policy gaps if they are not reviewed and removed or renewed deliberately.",
                "Expiration removes the need for monitoring.",
                "Browsers require every exception to last 30 days.",
              ],
              answer: 1,
              explanation:
                "Expiration keeps compatibility decisions visible and owned.",
            },
            {
              question:
                "A stricter policy breaks a supported accessibility workflow. What is strongest?",
              choices: [
                "Ignore the users because security is more important.",
                "Use the predefined rollback or narrow adjustment, restore the workflow, analyze the compatibility need, and re-enter staged validation.",
                "Remove all browser protections forever.",
                "Test policy bypass methods.",
              ],
              answer: 1,
              explanation:
                "Rollback is part of safe change management when legitimate user impact exceeds the approved threshold.",
            },
            {
              question:
                "What does a Healthy browser-policy monitoring source prove?",
              choices: [
                "The entire web application is secure.",
                "Only that the monitored policy/source state is available enough to support its bounded observations.",
                "Authorization is correct.",
                "All exceptions are unnecessary.",
              ],
              answer: 1,
              explanation:
                "Monitoring health supports bounded conclusions; it does not prove unrelated controls.",
            },
            {
              question:
                "What is strongest when a new supplier changes content and referrer behavior?",
              choices: [
                "Approve automatically because it is a supplier.",
                "Trigger content, privacy, exception, monitoring, compatibility, rollout, and rollback review.",
                "Test the supplier for browser-policy bypasses.",
                "Disable all third parties permanently.",
              ],
              answer: 1,
              explanation:
                "A new dependency changes browser and privacy assumptions and should be reviewed as a governed architecture change.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Prompt: Browser Protection Review"
          prompt="Create a fully fictional A10.6 Browser Protection Review for Northbridge. Include browser behavior inventory; supported page groups; first-party and supplier content; security goals; protected-transport goal; content-restriction goal; framing goal; content-type goal; referrer-privacy goal; cookie register; standard-session cookie; admin-session cookie; preference cookie; recovery-transition cookie; compatibility requirements; accessibility requirements; approved integrations; exception register; owner; scope; duration; compensating controls; monitoring; validation; expiration; rollout stages; pilot evidence; full-enforcement criteria; rollback criteria; monitoring questions; source-health expectations; findings; remediation owners; technical summary; leadership summary; privacy summary; and a public-safe architecture diagram. Keep all organizations, pages, cookies, suppliers, policy observations, and outcomes invented, and include no bypass testing or exploit content."
          tips={[
            "Map each control to a specific security or privacy goal.",
            "Treat browser protections as layers, not replacements for other web defenses.",
            "Align cookie decisions with A10.2 session sensitivity and lifecycle.",
            "Use staged rollout and clear rollback criteria.",
            "Keep compatibility exceptions narrow, owned, monitored, and time-bound.",
            "Use fictional observations rather than real websites or bypass tests.",
          ]}
        />

        <SectionCard
          eyebrow="Confidence / Readiness Reflection"
          title="Are You Ready for A10.7 Secrets and Configuration Management?"
        >
          <p className="leading-8">
            Rate your readiness from 1 to 5 for browser-protection goals,
            content and framing decisions, cookie policy, privacy, staged
            rollout, compatibility, exception governance, monitoring,
            validation, and rollback.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "I can explain why browser protections are defense-in-depth layers.",
              "I can map transport, content, framing, content-type, referrer, and cookie controls to specific goals.",
              "I can align cookie protections with standard, privileged, preference, and recovery session purposes.",
              "I can review third-party content and referrer privacy.",
              "I can stage broad policy changes.",
              "I can create narrow, time-bound compatibility exceptions.",
              "I can validate accessibility and legitimate workflows after browser-policy changes.",
              "I can design monitoring and source-health review for browser protections.",
              "I can define rollback and re-review triggers.",
              "I am ready to focus on secrets, credentials, environment-specific configuration, ownership, least privilege, rotation concepts, change control, logging limits, recovery, and emergency handling in A10.7.",
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

        <SectionCard
          eyebrow="Portfolio Build Guide"
          title="What a Strong A10.6 Artifact Should Show"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A browser behavior and content inventory",
              "Security goals for every protection category",
              "Transport-enforcement planning",
              "Content-restriction purpose and dependencies",
              "Framing and content-type decisions",
              "Referrer privacy and supplier data review",
              "Cookie policy tied to session sensitivity",
              "Compatibility and accessibility criteria",
              "Narrow exception governance",
              "Staged rollout with exit criteria",
              "Monitoring and source-health questions",
              "Rollback and narrowing criteria",
              "Evidence-based findings and owners",
              "Leadership and privacy summaries",
              "A public-safe diagram with invented details only",
              "A reflection explaining why browser policy does not replace authorization or secure architecture",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Portfolio element {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Browser protections are layered defenses around transport, content, framing, response interpretation, referrer privacy, and cookies.",
            "A browser policy should start with a defined security goal and a real fictional application inventory.",
            "No single header, cookie attribute, or browser policy replaces secure architecture, authorization, input/output safety, APIs, secrets, monitoring, or recovery.",
            "Session cookies should be reviewed by purpose, sensitivity, transport, script-access need, cross-site behavior, lifetime, and logout/recovery lifecycle.",
            "Compatibility, accessibility, approved suppliers, and legitimate user workflows belong in the security review.",
            "Exceptions should be narrow, owned, time-bound, monitored, validated, and designed to expire.",
            "Staged rollout reduces the chance that a broad policy change silently breaks legitimate workflows.",
            "Monitoring should cover policy presence, changes, exceptions, cookie behavior, compatibility, privacy, and source health.",
            "Rollback is a planned safety control, not a failure of security.",
            "A10.6 prepares you for A10.7, where secrets and configuration become another governed layer of web defense.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Defensive Browser Policy Review — No Bypass Testing
          </h2>
          <p className="mt-3 leading-7">
            Nothing in A10.6 authorizes testing real websites, headers, cookie
            attributes, content restrictions, frame protections, browser
            policies, referrer behavior, suppliers, or sign-in flows. Do not
            create malicious markup, exploit pages, bypass demonstrations,
            policy-evasion examples, or browser attacks. Use only fictional
            policy, compatibility, rollout, monitoring, and owner evidence.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Continue to Secrets and Configuration Management
          </h2>
          <p className="mt-3 max-w-4xl leading-7">
            A10.6 established layered browser protections, cookie policy,
            privacy, compatibility, exceptions, staged rollout, monitoring,
            validation, and rollback. A10.7 will focus on how fictional secrets,
            credentials, service identities, environment-specific
            configuration, certificates, keys, feature settings, administrative
            values, ownership, least privilege, change control, logging limits,
            recovery, and emergency handling are governed safely.
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