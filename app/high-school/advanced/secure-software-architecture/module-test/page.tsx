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
const modulePath = `${trackPath}/secure-software-architecture`;
const previousLesson = `${modulePath}/secure-software-design-lab`;
const nextModule = `${trackPath}/cloud-security-architecture`;

const coverage = [
  {
    range: "Questions 1–3",
    lessons: "A11.1 — Security in the Software Lifecycle",
    focus:
      "Lifecycle ownership, security evidence, traceability, change triggers, and retirement.",
  },
  {
    range: "Questions 4–6",
    lessons: "A11.2 — Secure Design Requirements",
    focus:
      "Specific, scoped, owned, traceable requirements and acceptance evidence.",
  },
  {
    range: "Questions 7–9",
    lessons: "A11.3 — Threat Modeling for Software",
    focus:
      "Assets, trust boundaries, threat statements, controls, evidence, and uncertainty.",
  },
  {
    range: "Questions 10–11",
    lessons: "A11.4 — Secrets Management Concepts",
    focus:
      "Metadata, ownership, environment separation, scope, rotation, redaction, and retirement.",
  },
  {
    range: "Questions 12–14",
    lessons: "A11.5 — Dependency and Supply Chain Risk Concepts",
    focus:
      "Provenance, support, runtime context, ownership, updates, exceptions, and evidence limits.",
  },
  {
    range: "Questions 15–17",
    lessons: "A11.6 — Secure Error Handling and Logging",
    focus:
      "Audience separation, correlation, redaction, auditability, retention, and source health.",
  },
  {
    range: "Questions 18–19",
    lessons: "A11.7 — Code Review for Security",
    focus:
      "Requirements-driven review, implementation evidence, findings, limitations, and validation needs.",
  },
  {
    range: "Questions 20–21",
    lessons: "A11.8 — Testing Security Requirements Safely",
    focus:
      "Authorization, expected outcomes, synthetic data, evidence, stop conditions, and bounded conclusions.",
  },
  {
    range: "Questions 22–23",
    lessons: "A11.9 — Secure Deployment Concepts",
    focus:
      "Artifact identity, configuration, release gates, monitoring, rollback, and post-release validation.",
  },
  {
    range: "Questions 24–25",
    lessons: "A11.10 — Secure Software Design Lab",
    focus:
      "Integrated architecture assessment, residual risk, evidence conflicts, decision records, and final release reasoning.",
  },
];

const questions = [
  {
    question:
      "1. Which statement best describes security in the software lifecycle?",
    choices: [
      "Security is mainly a final checklist completed after development.",
      "Security responsibilities, evidence, and decisions should appear throughout planning, design, implementation, validation, release, operation, maintenance, and retirement.",
      "Security belongs only to the security team.",
      "Security work ends after deployment.",
    ],
    answer: 1,
    explanation:
      "A11.1 treats security as a lifecycle responsibility rather than a final release gate.",
  },
  {
    question:
      "2. Why is traceability valuable in a secure software lifecycle?",
    choices: [
      "It proves that every security control is perfect.",
      "It connects requirements, design decisions, review evidence, validation, release decisions, and later maintenance.",
      "It removes the need for ownership.",
      "It replaces testing.",
    ],
    answer: 1,
    explanation:
      "Traceability shows how an important security expectation moves through the lifecycle and which evidence supports it.",
  },
  {
    question:
      "3. A new privileged role is added after the original architecture review. What is the strongest response?",
    choices: [
      "Assume the original evidence still applies.",
      "Treat the role as a change trigger and reopen the relevant requirements, threat-model, review, and validation work.",
      "Update only the user-interface label.",
      "Wait until retirement to document it.",
    ],
    answer: 1,
    explanation:
      "A role change can alter privilege, ownership, authorization, audit, and validation assumptions.",
  },
  {
    question:
      "4. Which requirement is strongest?",
    choices: [
      "Use strong authentication.",
      "Make the application secure.",
      "Privileged staff access must use the approved identity service and required additional verification, with an accountable owner and defined acceptance evidence.",
      "Use good passwords.",
    ],
    answer: 2,
    explanation:
      "A strong requirement is specific, scoped, owned, traceable, evidence-aware, and tied to expected behavior.",
  },
  {
    question:
      "5. Why should a secure design requirement avoid over-prescribing implementation when possible?",
    choices: [
      "Because the requirement should describe the security outcome while leaving room for an approved implementation that satisfies it.",
      "Because implementation never matters.",
      "Because requirements should contain no acceptance criteria.",
      "Because developers should guess what security means.",
    ],
    answer: 0,
    explanation:
      "Requirements should define expected security behavior clearly without unnecessarily locking the design to one technical mechanism.",
  },
  {
    question:
      "6. What is the strongest way to handle a requirement exception?",
    choices: [
      "Delete the requirement.",
      "Create a time-bounded, owned exception with rationale, compensating controls, review date, residual risk, and closure criteria.",
      "Mark the requirement passed.",
      "Leave the exception undocumented.",
    ],
    answer: 1,
    explanation:
      "Governed exceptions preserve accountability and a path back to the intended security standard.",
  },
  {
    question:
      "7. What is the main purpose of software threat modeling?",
    choices: [
      "To exploit the application before attackers do.",
      "To understand the design, identify what could go wrong, evaluate safeguards, prioritize concerns, and document uncertainty and ownership.",
      "To prove that no threat exists.",
      "To replace secure requirements.",
    ],
    answer: 1,
    explanation:
      "Threat modeling is defensive architecture reasoning about possible outcomes, controls, evidence, and decisions.",
  },
  {
    question:
      "8. Which is the best example of a trust boundary?",
    choices: [
      "A heading in a security report.",
      "A data flow from the internal application to an external scheduling provider with different ownership and trust assumptions.",
      "A button color.",
      "A developer job title.",
    ],
    answer: 1,
    explanation:
      "Trust boundaries mark places where identity, data, control, environment, or ownership assumptions change.",
  },
  {
    question:
      "9. A threat statement identifies a possible unauthorized-access outcome. What does that prove?",
    choices: [
      "That unauthorized access definitely occurred.",
      "That a real attacker is present.",
      "That the design should review the concern, safeguards, evidence, and residual uncertainty.",
      "That the system must be shut down immediately.",
    ],
    answer: 2,
    explanation:
      "A threat statement describes a plausible concern; it does not prove exploitation or impact.",
  },
  {
    question:
      "10. Which information belongs in a metadata-only secrets governance record?",
    choices: [
      "The actual password or token value.",
      "Owner, purpose, environment, scope, storage class, rotation date, dependencies, and status.",
      "The full private key.",
      "A screenshot of the secret value.",
    ],
    answer: 1,
    explanation:
      "Governance review should rely on non-secret metadata rather than exposing secret values.",
  },
  {
    question:
      "11. Why is environment separation important for secrets?",
    choices: [
      "Because test and production should always share credentials for convenience.",
      "Because separate environments should not casually share sensitive access, which reduces exposure and simplifies ownership and incident scope.",
      "Because only production needs authentication.",
      "Because rotation is impossible across environments.",
    ],
    answer: 1,
    explanation:
      "Environment-specific secret governance prevents lower-trust environments from becoming part of the production trust boundary.",
  },
  {
    question:
      "12. A dependency is listed in test tooling but is absent from the production artifact. What is the strongest conclusion?",
    choices: [
      "It is confirmed production runtime exposure.",
      "The evidence supports test-only presence, not production runtime use.",
      "It proves the application is compromised.",
      "It must be removed from all testing.",
    ],
    answer: 1,
    explanation:
      "Dependency presence, runtime use, reachability, activity, and impact are separate claims.",
  },
  {
    question:
      "13. Why does dependency provenance matter?",
    choices: [
      "Because the package name alone always proves the artifact identity.",
      "Because teams should be able to connect the component to an approved source, supplier, version, or build path.",
      "Because provenance replaces compatibility testing.",
      "Because supported software never needs review.",
    ],
    answer: 1,
    explanation:
      "Provenance helps establish where the dependency came from and whether it matches the approved source or artifact.",
  },
  {
    question:
      "14. What is the strongest response when a business-critical dependency cannot be updated immediately?",
    choices: [
      "Ignore the problem permanently.",
      "Create a narrow, time-bounded, owned exception with compensating controls, monitoring, target state, and closure criteria.",
      "Deploy an untested replacement immediately.",
      "Remove the dependency record.",
    ],
    answer: 1,
    explanation:
      "A governed exception keeps temporary dependency risk visible and actionable.",
  },
  {
    question:
      "15. Why should user-facing errors and protected diagnostics contain different levels of detail?",
    choices: [
      "Because users need useful guidance without unnecessary internal detail, while protected reviewers may need sanitized technical context.",
      "Because users should always see full stack traces.",
      "Because diagnostics should never record anything.",
      "Because user errors and logs should contain the same fields.",
    ],
    answer: 0,
    explanation:
      "Secure error handling separates audiences so each receives only the information needed for their purpose.",
  },
  {
    question:
      "16. What is the purpose of a correlation ID?",
    choices: [
      "To store a user's password.",
      "To connect related events across services without exposing secret values.",
      "To replace authorization.",
      "To prove an incident occurred.",
    ],
    answer: 1,
    explanation:
      "Correlation IDs improve traceability across distributed workflows while remaining non-secret references.",
  },
  {
    question:
      "17. A security dashboard shows no authorization events, but the source-health monitor says the source is stale. What is the strongest conclusion?",
    choices: [
      "No authorization activity occurred.",
      "The evidence is incomplete until source health and delivery are understood.",
      "Authorization is working perfectly.",
      "Source health does not matter.",
    ],
    answer: 1,
    explanation:
      "No logs is not the same as no activity when the evidence source itself may be degraded.",
  },
  {
    question:
      "18. What should guide a security-focused code review?",
    choices: [
      "Only coding style.",
      "The relevant security requirements, architecture intent, threat-model concerns, and the scope of the change.",
      "Only whether the build passes.",
      "Only the reviewer's personal preference.",
    ],
    answer: 1,
    explanation:
      "Security code review is strongest when implementation evidence is compared to expected security behavior.",
  },
  {
    question:
      "19. Pseudocode calls a function named RecoveryPolicy.check, but the policy rules are not supplied. What is the strongest review conclusion?",
    choices: [
      "Separation of duties is fully Confirmed.",
      "The application is definitely insecure.",
      "A policy check exists, but the specific hidden rule remains Unknown until evidence is supplied.",
      "The reviewer should attempt to bypass the policy.",
    ],
    answer: 2,
    explanation:
      "Code review should not invent behavior that is not visible in the supplied evidence.",
  },
  {
    question:
      "20. What should happen before security validation begins?",
    choices: [
      "Use production because it is most realistic.",
      "Confirm authorization, scope, environment, synthetic identities, expected outcomes, evidence, owners, and stop conditions.",
      "Collect every available log.",
      "Skip expected results so the tester stays flexible.",
    ],
    answer: 1,
    explanation:
      "Safe validation is bounded and planned before execution.",
  },
  {
    question:
      "21. A required validation result is not present in the evidence package. What is the strongest status?",
    choices: [
      "Confirmed",
      "Unknown",
      "Passed by default",
      "Not Applicable",
    ],
    answer: 1,
    explanation:
      "Missing evidence should remain Unknown until the required result exists.",
  },
  {
    question:
      "22. Why must the released artifact match the artifact that was reviewed and validated?",
    choices: [
      "Because the release file name should look familiar.",
      "Because review and validation evidence may not apply to a different build.",
      "Because all builds are identical.",
      "Because configuration never matters.",
    ],
    answer: 1,
    explanation:
      "Artifact identity is a core part of release traceability.",
  },
  {
    question:
      "23. A production configuration differs from the approved baseline with no change record. What is the strongest response?",
    choices: [
      "Ignore it because source code did not change.",
      "Pause the release and determine whether the drift is intentional, approved, and safe.",
      "Delete the baseline.",
      "Assume production is correct.",
    ],
    answer: 1,
    explanation:
      "Security-sensitive configuration can change application behavior independently of code.",
  },
  {
    question:
      "24. Why should residual risk appear in the final architecture assessment?",
    choices: [
      "To make the report sound more serious.",
      "Because safeguards reduce risk but may not eliminate every uncertainty, dependency, or future maintenance burden.",
      "Because every control is ineffective.",
      "Because no release decision should ever be made.",
    ],
    answer: 1,
    explanation:
      "Residual risk gives decision-makers an accurate view of what remains after controls and evidence are considered.",
  },
  {
    question:
      "25. The final A11 assessment has one mandatory release gate with missing current evidence. What is the strongest recommendation?",
    choices: [
      "Release because most other areas are strong.",
      "Hold or remediate according to the defined release policy until the blocking evidence gap is resolved.",
      "Change the status to Confirmed.",
      "Delete the requirement from the final assessment.",
    ],
    answer: 1,
    explanation:
      "A defensible architecture decision follows current evidence and the defined release policy rather than schedule pressure.",
  },
];

const reviewMap = [
  {
    topic: "Lifecycle and requirements",
    lesson: "Review A11.1–A11.2",
    signals:
      "You missed questions about ownership, traceability, requirement quality, acceptance evidence, or exceptions.",
  },
  {
    topic: "Threat modeling",
    lesson: "Review A11.3",
    signals:
      "You confused threat concerns with proof, or had trouble with trust boundaries and evidence limits.",
  },
  {
    topic: "Secrets and dependencies",
    lesson: "Review A11.4–A11.5",
    signals:
      "You missed metadata, environment separation, provenance, runtime context, updates, or exceptions.",
  },
  {
    topic: "Logging and code review",
    lesson: "Review A11.6–A11.7",
    signals:
      "You missed correlation IDs, source health, audience separation, implementation evidence, or review limitations.",
  },
  {
    topic: "Validation and deployment",
    lesson: "Review A11.8–A11.9",
    signals:
      "You missed authorization scope, stop conditions, artifact identity, configuration drift, rollback, or release gates.",
  },
  {
    topic: "Integrated architecture reasoning",
    lesson: "Review A11.10",
    signals:
      "You struggled with residual risk, evidence conflicts, change triggers, or final release recommendations.",
  },
];

const performanceGuide = [
  {
    band: "22–25 correct",
    meaning:
      "Strong A11 readiness. You are reasoning across the module rather than memorizing isolated terms.",
  },
  {
    band: "18–21 correct",
    meaning:
      "Good understanding. Review the specific evidence or lifecycle areas behind the questions you missed.",
  },
  {
    band: "14–17 correct",
    meaning:
      "Developing understanding. Revisit the targeted lessons before moving to the next Advanced architecture module.",
  },
  {
    band: "0–13 correct",
    meaning:
      "Rebuild the core concepts first: requirements, threat modeling, evidence discipline, ownership, validation, and release reasoning.",
  },
];

const checklistItems = [
  "I can explain security as a lifecycle responsibility.",
  "I can distinguish security goals from actionable secure design requirements.",
  "I can identify assets, trust boundaries, threat concerns, safeguards, evidence, and Unknowns.",
  "I can review secret governance without exposing secret values.",
  "I can separate dependency presence, runtime use, reachability, activity, and impact.",
  "I can explain safe error handling, logging, correlation, redaction, and source health.",
  "I can review fictional code evidence against security requirements.",
  "I can design safe validation using synthetic data and stop conditions.",
  "I can evaluate artifact identity, configuration baselines, rollback, monitoring, and release gates.",
  "I can identify residual risk, stale evidence, evidence conflicts, and change triggers.",
  "I can make a release recommendation that follows current evidence and policy.",
  "I understand that all CyberShield security work must remain defensive, fictional, authorized, and safe.",
];

const takeaways = [
  "A11 connects software security decisions from planning through retirement.",
  "Requirements create the expected behavior that later review and validation must support.",
  "Threat models identify design concerns without proving harmful activity occurred.",
  "Secrets and dependencies require lifecycle ownership, not one-time setup.",
  "Logging should be useful, minimized, redacted, and supported by source-health evidence.",
  "Code review supports implementation claims but does not replace runtime validation.",
  "Safe validation is authorized, bounded, synthetic, evidence-driven, and governed by stop conditions.",
  "Deployment readiness depends on the exact artifact, configuration, monitoring, rollback, exceptions, and current evidence.",
  "A mature architecture assessment keeps Unknowns and residual risk visible.",
  "The strongest security decisions are traceable, owned, evidence-based, and revisited when meaningful changes occur.",
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
        Module A11
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module — A12
      </Link>
    </div>
  );
}

export default function SecureSoftwareArchitectureModuleTestPage() {
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
              Module A11
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              Module Test
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            A11 Module Assessment
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Secure Software Architecture Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question test checks your understanding of the full A11
            module: lifecycle security, requirements, threat modeling, secrets,
            dependencies, error handling, logging, code review, safe
            validation, deployment, and integrated architecture decisions.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Answers remain hidden until you reveal them through the quiz
            component. Use the explanations to identify exactly which lesson
            needs review.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A11 Module Test Readiness"
          items={[
            "I completed A11.1 through A11.10.",
            "I can explain how requirements, architecture, evidence, ownership, and lifecycle decisions connect.",
            "I understand that Unknown and Conditional are legitimate evidence states.",
            "I am ready to reason through scenarios instead of relying only on memorized definitions.",
          ]}
        />

        <Section
          eyebrow="Assessment Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-4">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-3 md:grid-cols-[160px_1fr]">
                  <div>
                    <p className="font-black text-cyan-200">{item.range}</p>
                  </div>
                  <div>
                    <h3 className="font-black text-white">{item.lessons}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.focus}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Before You Start"
          title="How to Use This Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Reason from evidence",
                detail:
                  "When two answers sound possible, choose the one that best matches the evidence actually provided.",
              },
              {
                title: "Protect uncertainty",
                detail:
                  "Do not turn missing evidence into a pass or convert a possible concern into proof of harm.",
              },
              {
                title: "Think lifecycle",
                detail:
                  "Ask how a decision affects requirements, ownership, validation, release, operation, maintenance, and retirement.",
              },
              {
                title: "Use the explanations",
                detail:
                  "After revealing an answer, note the lesson behind any question you missed.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="A11 Module Test"
          title="25 Questions"
        >
          <MiniQuiz
            title="A11 Secure Software Architecture — 25-Question Module Test"
            questions={questions}
          />
        </Section>

        <Section
          eyebrow="Performance Guide"
          title="Interpret Your Result"
        >
          <p className="leading-8">
            This guide is for self-review. The most useful result is not only
            the total score — it is knowing which security reasoning patterns
            need more practice.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {performanceGuide.map((item) => (
              <article
                key={item.band}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.band}
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review Map"
          title="Where to Go Back if You Missed Questions"
        >
          <div className="grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.topic}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                  <div>
                    <h3 className="font-black text-white">{item.topic}</h3>
                    <p className="mt-2 text-sm font-semibold text-cyan-200">
                      {item.lesson}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    {item.signals}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="A11 Mastery"
          title="What You Should Be Able to Explain After This Module"
        >
          <p className="leading-8">
            A11 is not about memorizing isolated security vocabulary. It is
            about understanding how software security decisions remain
            connected over time.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Why secure requirements need owners, evidence, and change triggers.",
              "Why a threat concern is not proof of compromise.",
              "Why secret values should stay out of reviews and portfolio artifacts.",
              "Why dependency context matters more than version age alone.",
              "Why useful logging includes redaction, correlation, retention, access, and source health.",
              "Why code review and runtime validation answer different questions.",
              "Why safe testing starts with authorization, scope, expected outcomes, and stop conditions.",
              "Why a release decision must match the exact artifact, configuration, and current evidence.",
              "Why residual risk and Unknowns belong in a professional architecture assessment.",
              "Why meaningful changes should reopen earlier security assumptions.",
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
        </Section>

        <DefenderChecklist
          title="A11 Module Completion Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A11 remains defensive and evidence-based
          </h2>
          <p className="mt-3 leading-7">
            This module does not authorize scanning, exploitation, bypass
            testing, credential attacks, fuzzing, malicious payloads, real
            secret collection, or access to production systems. All examples
            and assessment scenarios are fictional and school-appropriate.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A11 Secure Software Architecture
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            Completing this assessment finishes Module A11. The next Advanced
            module is A12 — Cloud Security Architecture, where you will apply
            architecture reasoning to cloud identity, services, data,
            configuration, monitoring, resilience, and governance.
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