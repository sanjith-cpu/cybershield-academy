import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-web-security-defense`;
const previousLesson = `${modulePath}/web-defense-architecture-review-lab`;
const nextModule = `${trackPath}/secure-software-architecture`;

const coverage = [
  {
    lesson: "A10.1 Secure Web Architecture Principles",
    focus:
      "Trust boundaries, component responsibilities, least exposure, defense in depth, resilience, recovery, dependency ownership, privacy, observability, and change governance.",
  },
  {
    lesson: "A10.2 Authentication and Session Design",
    focus:
      "Identity assurance, session lifecycle, privileged sessions, recovery, logout, timeout, sensitive-action verification, usability, privacy, and monitoring.",
  },
  {
    lesson: "A10.3 Authorization and Access Control Design",
    focus:
      "Least privilege, deny by default, subject-resource-action-context decisions, object ownership, service identities, admin separation, exceptions, and recertification.",
  },
  {
    lesson: "A10.4 Input Handling and Output Safety",
    focus:
      "Input contracts, validation, normalization, business rules, authorization separation, context-aware output, safe errors, privacy, and minimized logging.",
  },
  {
    lesson: "A10.5 API Security Concepts",
    focus:
      "Caller identity, service identities, authorization, object ownership, request/response schemas, response minimization, safe errors, resource protection, versions, dependencies, and monitoring.",
  },
  {
    lesson: "A10.6 Secure Headers and Browser Protections",
    focus:
      "Transport expectations, content restrictions, framing, content-type handling, referrer privacy, cookie protections, compatibility, exceptions, rollout, monitoring, validation, and rollback.",
  },
  {
    lesson: "A10.7 Secrets and Configuration Management",
    focus:
      "Metadata-only secret governance, environment separation, least privilege, lifecycle/rotation, secure defaults, change control, configuration drift, redaction, exceptions, recovery, and monitoring.",
  },
  {
    lesson: "A10.8 Logging and Monitoring for Web Apps",
    focus:
      "Defender questions, event taxonomy, privacy-aware logging, source health, coverage, baselines, alert lineage, correlation, retention, monitoring gaps, escalation, and decision value.",
  },
  {
    lesson: "A10.9 Web Security Review Process",
    focus:
      "Review scope, exclusions, architecture, control matrix, evidence register, bounded findings, business impact, confidence, prioritization, remediation, validation, audience communication, residual risk, and closure.",
  },
  {
    lesson: "A10.10 Web Defense Architecture Review Lab",
    focus:
      "Integrated cross-control evidence analysis, source-health limitations, findings, remediation roadmaps, validation boards, residual risk, leadership communication, and portfolio-ready review output.",
  },
];

const performanceBands = [
  {
    range: "23–25 correct",
    label: "Advanced Ready",
    meaning:
      "You demonstrate strong command of the full A10 defensive web security workflow and are ready to continue to A11.",
  },
  {
    range: "20–22 correct",
    label: "Strong",
    meaning:
      "You understand the major A10 concepts. Review the specific lessons connected to missed questions before moving on.",
  },
  {
    range: "16–19 correct",
    label: "Developing",
    meaning:
      "You have a useful foundation, but several control relationships need review before the next module.",
  },
  {
    range: "0–15 correct",
    label: "Rebuild Core Concepts",
    meaning:
      "Return to the lesson roadmap, especially architecture, access control, APIs, browser protections, secrets/configuration, and monitoring.",
  },
];

const reviewMap = [
  {
    topic: "Architecture / trust boundaries",
    lessons: "A10.1, A10.9, A10.10",
    review:
      "Revisit component responsibilities, least exposure, dependency ownership, resilience, recovery, and cross-control architecture decisions.",
  },
  {
    topic: "Authentication / sessions",
    lessons: "A10.2",
    review:
      "Review identity assurance, session classes, privileged sessions, timeout, logout, recovery, and sensitive-action verification.",
  },
  {
    topic: "Authorization / object ownership",
    lessons: "A10.3, A10.5",
    review:
      "Review least privilege, deny by default, resource/action scope, object ownership, service identities, admin separation, and recertification.",
  },
  {
    topic: "Input / output safety",
    lessons: "A10.4",
    review:
      "Review input contracts, validation vs authorization, context-aware output, safe errors, privacy, and logging minimization.",
  },
  {
    topic: "API security",
    lessons: "A10.5",
    review:
      "Review callers, schemas, response minimization, safe errors, version governance, resource protection, supplier scope, and dependencies.",
  },
  {
    topic: "Browser protections",
    lessons: "A10.6",
    review:
      "Review browser protection layers, cookie policy, compatibility, exceptions, staged rollout, monitoring, validation, and rollback.",
  },
  {
    topic: "Secrets / configuration",
    lessons: "A10.7",
    review:
      "Review metadata-only inventories, environment separation, rotation, secure defaults, configuration drift, redaction, and emergency access.",
  },
  {
    topic: "Logging / monitoring",
    lessons: "A10.8",
    review:
      "Review defender questions, source health, coverage, baselines, alert lineage, correlation, retention, privacy, and monitoring gaps.",
  },
  {
    topic: "Review process / capstone",
    lessons: "A10.9, A10.10",
    review:
      "Review scope, evidence quality, bounded findings, business impact, ownership, prioritization, remediation, validation, residual risk, and audience communication.",
  },
];

const quizQuestions = [
  {
    question:
      "1. Which statement best describes a secure fictional web architecture?",
    choices: [
      "Every component should trust every internal service by default.",
      "Trust boundaries, component responsibilities, privileged paths, dependencies, recovery, and monitoring should be explicit and purpose-limited.",
      "Only browser settings matter.",
      "Security should be added after the application is finished.",
    ],
    answer: 1,
    explanation:
      "A10.1 emphasizes explicit architecture, bounded trust, separation, defense in depth, ownership, resilience, and observability.",
  },
  {
    question:
      "2. Why is least exposure important in a web architecture?",
    choices: [
      "It reduces unnecessary reachable functionality, data, and privilege while preserving required business workflows.",
      "It means every service must be publicly reachable.",
      "It removes the need for monitoring.",
      "It guarantees there will never be a security issue.",
    ],
    answer: 0,
    explanation:
      "Least exposure reduces unnecessary trust and attack surface without eliminating legitimate functionality.",
  },
  {
    question:
      "3. Which is the strongest session design for a fictional privileged administrator?",
    choices: [
      "Use the same long-lived session as ordinary browsing.",
      "Use a separate privileged session with stronger assurance, shorter approved lifetime, monitoring, and explicit end conditions.",
      "Disable logout.",
      "Share the session among administrators.",
    ],
    answer: 1,
    explanation:
      "A10.2 separates privileged sessions from ordinary user sessions and connects them to stronger assurance and lifecycle controls.",
  },
  {
    question:
      "4. What is the best reason to require sensitive-action reauthentication or verification?",
    choices: [
      "To make every workflow slower.",
      "To increase assurance before a higher-impact action even when an ordinary session already exists.",
      "To replace authorization.",
      "To make session monitoring unnecessary.",
    ],
    answer: 1,
    explanation:
      "Sensitive-action verification adds assurance but does not replace authorization.",
  },
  {
    question:
      "5. What does deny by default mean in access-control design?",
    choices: [
      "Every user is permanently blocked.",
      "Protected actions are not allowed unless an explicit approved policy grants the required subject, resource, action, and context.",
      "All authenticated users receive broad access.",
      "Only external users need authorization.",
    ],
    answer: 1,
    explanation:
      "Deny by default requires explicit permission rather than assuming access from identity or network location.",
  },
  {
    question:
      "6. A user is allowed to read some support cases but requests an unrelated case. Which control is most important?",
    choices: [
      "Object ownership or resource-scope authorization.",
      "Browser font settings.",
      "Secret rotation.",
      "Page color.",
    ],
    answer: 0,
    explanation:
      "A10.3 emphasizes that role permission must still be combined with ownership or exact resource scope.",
  },
  {
    question:
      "7. Which statement correctly separates validation and authorization?",
    choices: [
      "If an input is structurally valid, the requested action is automatically authorized.",
      "Validation checks whether data follows the expected contract; authorization separately decides whether the caller may perform the action.",
      "Authorization is only needed for administrators.",
      "Validation should be skipped for authenticated users.",
    ],
    answer: 1,
    explanation:
      "A10.4 keeps schema/field validity separate from permission to perform a protected business action.",
  },
  {
    question:
      "8. Which is the strongest output-safety principle?",
    choices: [
      "Return every stored field so the client can choose what it needs.",
      "Return only the information required for the approved audience and context, using safe output handling and privacy minimization.",
      "Show internal diagnostic details to every user.",
      "Copy full submitted input into every error message.",
    ],
    answer: 1,
    explanation:
      "A10.4 emphasizes context-aware output, privacy, audience separation, and safe errors.",
  },
  {
    question:
      "9. What does authenticating an API caller establish?",
    choices: [
      "Automatic access to every API resource.",
      "Caller identity only; authorization and object ownership still determine allowed resources and actions.",
      "Administrator status.",
      "Unlimited resource use.",
    ],
    answer: 1,
    explanation:
      "A10.5 separates API caller identity from authorization and ownership.",
  },
  {
    question:
      "10. Why should an API response be minimized?",
    choices: [
      "To return only the fields required for the approved caller purpose and reduce unnecessary exposure.",
      "To make the response unreadable.",
      "To avoid authorization checks.",
      "To eliminate versioning.",
    ],
    answer: 0,
    explanation:
      "Response minimization is a key A10.5 control for privacy and least exposure.",
  },
  {
    question:
      "11. What is the strongest way to govern a fictional API version change?",
    choices: [
      "Change the version label only.",
      "Review callers, data, authorization, response behavior, dependencies, monitoring, compatibility, migration, ownership, and retirement.",
      "Keep every old version forever.",
      "Disable monitoring during migration.",
    ],
    answer: 1,
    explanation:
      "API versions are governed contracts, not merely names.",
  },
  {
    question:
      "12. Which statement best describes browser protections?",
    choices: [
      "One strict header can replace all server-side security.",
      "They are layered controls that complement architecture, sessions, authorization, input/output safety, APIs, secrets, and monitoring.",
      "They are only useful for public websites.",
      "They should always be copied unchanged from another application.",
    ],
    answer: 1,
    explanation:
      "A10.6 treats browser protections as defense in depth, not a replacement for server-side controls.",
  },
  {
    question:
      "13. A strict browser policy breaks an approved reporting widget. What is the strongest response?",
    choices: [
      "Create a global permanent exception.",
      "Use a narrow, owned, monitored, time-bound exception or redesign, validate the workflow, and keep rollback available.",
      "Remove all browser protections.",
      "Ignore the business workflow.",
    ],
    answer: 1,
    explanation:
      "Compatibility exceptions should be narrow, governed, monitored, validated, and designed to expire.",
  },
  {
    question:
      "14. Which belongs in a professional fictional secret inventory?",
    choices: [
      "The actual secret value.",
      "Purpose, owner, environment, service, reference metadata, lifecycle state, access scope, and review/rotation dates.",
      "Screenshots of credentials.",
      "Production passwords for convenience.",
    ],
    answer: 1,
    explanation:
      "A10.7 uses metadata-only secret governance.",
  },
  {
    question:
      "15. Why should production and non-production secret classes be separate?",
    choices: [
      "To keep lower-risk environments from gaining unintended production capability.",
      "Because non-production does not need authentication.",
      "Because production secrets cannot expire.",
      "To make monitoring harder.",
    ],
    answer: 0,
    explanation:
      "Environment separation prevents lower environments from inheriting production trust.",
  },
  {
    question:
      "16. What is configuration drift?",
    choices: [
      "A difference between the approved configuration baseline and the observed or reported state.",
      "Proof of malicious activity.",
      "A planned release.",
      "A secret rotation.",
    ],
    answer: 0,
    explanation:
      "Drift establishes a state mismatch; cause and intent require separate evidence.",
  },
  {
    question:
      "17. What should come first when designing a security-relevant web log?",
    choices: [
      "Collect every available field.",
      "Define the defender question and decision the log should support.",
      "Store complete user content.",
      "Create the dashboard before defining sources.",
    ],
    answer: 1,
    explanation:
      "A10.8 begins with defender questions and then selects minimum useful metadata.",
  },
  {
    question:
      "18. Three alerts are all derived from one underlying authorization event. How should they be treated?",
    choices: [
      "As three independent confirmations.",
      "As one underlying source event unless separate independent evidence also exists.",
      "As no evidence at all.",
      "As proof of compromise.",
    ],
    answer: 1,
    explanation:
      "Alert lineage prevents derived alerts from being overcounted.",
  },
  {
    question:
      "19. What does a Degraded monitoring source mean for a no-event conclusion?",
    choices: [
      "No event definitely occurred.",
      "Visibility is limited, so the absence claim should be weaker or recorded as Unknown.",
      "An incident definitely occurred.",
      "The source should be permanently removed.",
    ],
    answer: 1,
    explanation:
      "Source health directly controls confidence in absence claims.",
  },
  {
    question:
      "20. Which statement best describes a professional web security review finding?",
    choices: [
      "It should be as dramatic as possible.",
      "It should be bounded by evidence and include impact, confidence, owner, remediation, validation, and residual risk.",
      "It should contain exploit instructions.",
      "It should omit Unknowns.",
    ],
    answer: 1,
    explanation:
      "A10.9 emphasizes evidence-bounded, traceable findings connected to decisions and closure.",
  },
  {
    question:
      "21. Why is remediation not automatically complete when code or configuration changes?",
    choices: [
      "Changes never matter.",
      "The intended defensive result still needs validation evidence before closure.",
      "Only leadership may close findings.",
      "Every change must be rolled back.",
    ],
    answer: 1,
    explanation:
      "Implementation activity and validated risk reduction are different states.",
  },
  {
    question:
      "22. In the A10.10 capstone, Team Blue users are denied after Release R-3 even though policy says they should be allowed, and one mapping references the previous release label. What is the strongest finding?",
    choices: [
      "The system is compromised.",
      "A likely application-to-policy role-mapping defect is causing legitimate authorization failures and should be corrected and validated.",
      "Team Blue users need administrator access.",
      "All API access should be disabled.",
    ],
    answer: 1,
    explanation:
      "The evidence supports a configuration/authorization integration defect, not a compromise claim.",
  },
  {
    question:
      "23. In the capstone, Supplier S monitoring source health is Unknown. What can the review conclude?",
    choices: [
      "Supplier S is definitely healthy.",
      "Current supplier status is Unknown; restore visibility or use alternate approved evidence before making a strong status claim.",
      "Supplier S is compromised.",
      "Supplier S must be permanently removed.",
    ],
    answer: 1,
    explanation:
      "Unknown source health requires bounded uncertainty.",
  },
  {
    question:
      "24. In the capstone, a secret rotation is complete for most consumers but one consumer has not validated the new reference state. What is strongest?",
    choices: [
      "Retire the old state immediately.",
      "Keep the rotation in Validation Pending until the remaining dependency validates and service health is confirmed.",
      "Cancel all future rotations.",
      "Copy the secret value into logs to investigate.",
    ],
    answer: 1,
    explanation:
      "A10.7 and A10.10 require dependency-aware validation before rotation closure.",
  },
  {
    question:
      "25. What proves an A10 review item is ready to close?",
    choices: [
      "An engineer says the work is done.",
      "The predefined validation evidence confirms the intended control outcome, owners agree closure criteria are met, and residual risk is recorded.",
      "The alert disappears once.",
      "The issue has been open for a long time.",
    ],
    answer: 1,
    explanation:
      "Closure requires evidence of the intended outcome, ownership, and residual-risk documentation.",
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
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
      >
        Advanced Track
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function A10ModuleTestPage() {
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
              Module A10 Assessment
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Hidden Answers
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A10 Module Test
          </h1>

          <p className="mt-3 text-xl font-bold text-cyan-100">
            Advanced Web Security Defense
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment covers the entire A10 module: secure
            web architecture, authentication and sessions, authorization,
            input/output safety, API security, browser protections,
            secrets/configuration, logging and monitoring, the professional
            review process, and the integrated Web Defense Architecture Review
            Lab.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A10 Module Test Readiness"
          items={[
            "I completed or reviewed A10.1 through A10.10.",
            "I understand the difference between architecture, authentication, authorization, validation, output safety, API controls, browser protections, secrets/configuration, and monitoring.",
            "I can separate observations, evidence, findings, Unknowns, impact, confidence, remediation, validation, and residual risk.",
            "I know that source health and alert lineage affect evidence strength.",
            "I understand that this assessment is fully defensive and conceptual.",
            "I will answer each question before revealing its explanation.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Coverage"
          title="All Ten A10 Lessons"
        >
          <div className="grid gap-5">
            {coverage.map((item, index) => (
              <article
                key={item.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {item.lesson}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.focus}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Test Strategy"
          title="How to Use This Assessment"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Answer each question before revealing the explanation.",
              "Choose the most defensible answer, not the most dramatic answer.",
              "Separate authentication from authorization.",
              "Separate validation from authorization.",
              "Treat source health and evidence lineage as part of confidence.",
              "Prefer least privilege, privacy, ownership, validation, and rollback.",
              "Do not convert an Unknown into a claim of safety or compromise.",
              "Remember that implementation work is not the same as validated closure.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Strategy {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7">{item}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="A10 Module Test: 25 Questions"
          questions={quizQuestions}
        />

        <SectionCard
          eyebrow="Performance Guide"
          title="Interpret Your Result"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {performanceBands.map((band) => (
              <article
                key={band.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-black text-cyan-100">
                    {band.range}
                  </span>
                  <span className="font-black text-white">{band.label}</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {band.meaning}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Targeted Review Map"
          title="Use Missed Questions to Choose What to Revisit"
        >
          <div className="grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.topic}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">
                    {item.topic}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-100">
                    {item.lessons}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.review}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A10 Completion Checklist"
          items={[
            "I can explain secure web architecture and trust boundaries.",
            "I can design authentication and session lifecycles appropriate to risk.",
            "I can apply deny by default, least privilege, object ownership, and service-identity governance.",
            "I can separate validation, authorization, output handling, and safe errors.",
            "I can evaluate API callers, resources, actions, schemas, versions, dependencies, and response minimization.",
            "I can explain browser protections as defense-in-depth layers.",
            "I can govern secrets using metadata only and manage configuration through secure defaults and change control.",
            "I can design privacy-aware web logging with source health, baselines, lineage, correlation, and monitoring-gap ownership.",
            "I can write bounded findings with business impact and confidence.",
            "I can assign remediation owners and validation criteria.",
            "I can record residual risk and closure conditions.",
            "I can produce a public-safe Web Defense Architecture Review without offensive testing or sensitive details.",
          ]}
        />

        <SectionCard
          eyebrow="Module Portfolio"
          title="A10 Portfolio Outcome: Web Defense Architecture Review"
        >
          <p className="leading-8">
            Your strongest A10 portfolio artifact combines the work from all ten
            lessons into one fictional Web Defense Architecture Review. It
            should demonstrate architecture reasoning, identity/session design,
            authorization, input/output safety, API governance, browser
            protections, secrets/configuration governance, monitoring,
            evidence-based findings, remediation, validation, residual risk,
            and audience-specific communication.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Review charter and scope",
              "Architecture and trust-boundary map",
              "Authentication/session model",
              "Authorization and object-ownership matrix",
              "Input/output contract review",
              "API caller/resource/action review",
              "Browser protection and cookie review",
              "Secrets/configuration metadata review",
              "Monitoring and source-health map",
              "Evidence register and lineage",
              "Bounded finding register",
              "Remediation and validation roadmap",
              "Residual-risk statement",
              "Leadership summary",
              "Governance/privacy summary",
              "Public-safe portfolio summary",
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
            "A10 treats web security as an integrated architecture problem rather than a collection of isolated settings.",
            "Authentication identifies the caller; authorization still determines what protected resources and actions are allowed.",
            "Input validity does not equal authorization, and safe output must match the intended audience and context.",
            "API security depends on explicit caller purpose, object ownership, minimized responses, versions, dependencies, and monitoring.",
            "Browser protections are defense-in-depth layers that require compatibility, exceptions, staged rollout, validation, and rollback.",
            "Secrets should be governed through metadata, least privilege, environment separation, lifecycle, rotation, redaction, and ownership.",
            "Monitoring quality depends on defender questions, source health, coverage, privacy, baselines, correlation, and alert lineage.",
            "A professional review separates observation from interpretation and keeps Unknowns explicit.",
            "Remediation is complete only when validation evidence confirms the intended result and residual risk is recorded.",
            "Completing this test finishes A10 Advanced Web Security Defense and prepares you for A11 Secure Software Architecture.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Defensive Concepts Only
          </h2>
          <p className="mt-3 leading-7">
            This assessment covers defensive architecture and secure design.
            Nothing here authorizes scanning, probing, exploit execution,
            bypass testing, credential attacks, session attacks, object
            enumeration, API abuse, browser-policy evasion, secret testing, or
            testing real websites, services, accounts, devices, or networks.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>

          <h2 className="mt-2 text-2xl font-black">
            A10 Advanced Web Security Defense Complete
          </h2>

          <p className="mt-3 max-w-4xl leading-7">
            After you verify this page locally, A10 will contain its module
            homepage, all ten Advanced lessons, and the 25-question Module Test.
            The next curriculum module is A11 Secure Software Architecture.
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