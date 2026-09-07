import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/advanced/identity-zero-trust-and-access-control";
const previousLesson = `${modulePath}/zero-trust-design-lab`;
const nextModule = "/high-school/advanced/cryptography-and-key-management-concepts";

const questions = [
  {
    question:
      "What is the strongest reason identity is treated as a security perimeter in modern architecture?",
    choices: [
      "Because users are always inside one trusted network.",
      "Because access decisions increasingly depend on who or what the principal is, what resource is requested, and what evidence supports the relationship.",
      "Because identity replaces every network control.",
      "Because all applications should share one account.",
    ],
    answer: 1,
    explanation:
      "Identity architecture focuses on explicit identity-to-resource relationships rather than broad location-based trust.",
  },
  {
    question:
      "Which identity relationship is strongest for a production application connecting to its database?",
    choices: [
      "A shared human administrator account.",
      "A named workload identity with application-specific resource authorization.",
      "Any identity inside the private network.",
      "A permanent external partner identity.",
    ],
    answer: 1,
    explanation:
      "Workload identities provide accountable, resource-specific non-human access.",
  },
  {
    question:
      "What best describes zero trust?",
    choices: [
      "Deny every access request.",
      "Trust only devices on the internal network.",
      "Reduce assumed trust through explicit verification, least privilege, bounded access, evidence, and reassessment.",
      "Replace authorization with authentication.",
    ],
    answer: 2,
    explanation:
      "Zero trust is an architecture strategy for making access decisions explicit and reviewable.",
  },
  {
    question:
      "A staging workload successfully authenticates but requests a production database without an approved production purpose. What should happen?",
    choices: [
      "Allow because authentication succeeded.",
      "Allow because both environments belong to the same team.",
      "Deny because identity verification does not create production authorization.",
      "Allow read-only access permanently.",
    ],
    answer: 2,
    explanation:
      "Environment and purpose are part of resource-specific authorization.",
  },
  {
    question:
      "What is the core purpose of federation?",
    choices: [
      "To let one identity source provide trusted identity context to another service.",
      "To make all applications use the same permissions.",
      "To eliminate application ownership.",
      "To make partner access permanent.",
    ],
    answer: 0,
    explanation:
      "Federation centralizes identity trust while relying services still enforce authorization.",
  },
  {
    question:
      "What does single sign-on improve most directly?",
    choices: [
      "Application authorization scope.",
      "The user experience by reducing repeated authentication across approved services.",
      "Database encryption.",
      "Privileged-role ownership.",
    ],
    answer: 1,
    explanation:
      "SSO reduces repeated sign-in but should not broaden application permissions.",
  },
  {
    question:
      "What is the strongest design for external federation?",
    choices: [
      "Permanent access to all SSO-connected applications.",
      "Current sponsor, narrow population and resource scope, review or expiration, and monitoring.",
      "No internal owner because the users belong to another company.",
      "Shared local credentials for the partner team.",
    ],
    answer: 1,
    explanation:
      "External federation should remain bounded, sponsored, and lifecycle-controlled.",
  },
  {
    question:
      "What is conditional access?",
    choices: [
      "A policy process that combines identity with relevant context to decide whether access is allowed, denied, stepped up, limited, or reviewed.",
      "A permanent deny rule.",
      "A replacement for federation.",
      "A method for removing every device requirement.",
    ],
    answer: 0,
    explanation:
      "Conditional access uses relevant policy signals to produce an explainable outcome.",
  },
  {
    question:
      "When is step-up verification most appropriate?",
    choices: [
      "For every low-risk action regardless of context.",
      "When a user requests a more sensitive resource or higher-impact privilege.",
      "Only after access has already been denied permanently.",
      "Only for workloads.",
    ],
    answer: 1,
    explanation:
      "Step-up is strongest when targeted to meaningful increases in sensitivity or privilege.",
  },
  {
    question:
      "A sensitive access policy depends on device context, but the device-context source is stale. What is strongest?",
    choices: [
      "Treat the stale value as current.",
      "Use a defined fallback such as review, limit, or deny and restore source health.",
      "Automatically allow because the identity is valid.",
      "Ignore the policy permanently.",
    ],
    answer: 1,
    explanation:
      "Stale evidence should produce a visible fallback instead of silent trust.",
  },
  {
    question:
      "What is the core idea of RBAC?",
    choices: [
      "Permissions are grouped into roles and identities receive access through role membership.",
      "Every decision depends only on device state.",
      "Every user gets a unique custom policy.",
      "Network location grants all access.",
    ],
    answer: 0,
    explanation:
      "RBAC represents reusable responsibilities through roles.",
  },
  {
    question:
      "What is the core idea of ABAC?",
    choices: [
      "Every employee receives the same role.",
      "Policy evaluates relevant attributes about the principal, resource, action, or context.",
      "Only administrators can receive access.",
      "Authorization is based only on physical location.",
    ],
    answer: 1,
    explanation:
      "ABAC makes authorization decisions using relevant attributes.",
  },
  {
    question:
      "When is a hybrid RBAC + ABAC model especially useful?",
    choices: [
      "When stable responsibility belongs in a role but changing context such as environment, project, or privilege activation should refine the decision.",
      "When ownership should be removed.",
      "When all role reviews should stop.",
      "When every user should become an administrator.",
    ],
    answer: 0,
    explanation:
      "Hybrid models combine understandable role structure with contextual precision.",
  },
  {
    question:
      "What is role explosion?",
    choices: [
      "The uncontrolled growth of many narrowly different roles that become difficult to govern.",
      "A successful privileged activation.",
      "A federation health event.",
      "The retirement of unused roles.",
    ],
    answer: 0,
    explanation:
      "Role explosion makes access models hard to understand and maintain.",
  },
  {
    question:
      "What is the difference between privileged eligibility and active privilege?",
    choices: [
      "There is no difference.",
      "Eligibility means an identity may request or activate privilege; active privilege means the administrative capability is currently usable.",
      "Active privilege is always lower risk.",
      "Eligibility applies only to external users.",
    ],
    answer: 1,
    explanation:
      "Separating eligibility from active privilege reduces standing administrative exposure.",
  },
  {
    question:
      "Why is just-in-time privileged access valuable?",
    choices: [
      "It keeps administrative power permanently active.",
      "It ties high-impact privilege to an approved task and limited time window.",
      "It removes the need for monitoring.",
      "It replaces all access reviews.",
    ],
    answer: 1,
    explanation:
      "JIT privilege reduces the duration of high-impact access while preserving legitimate administration.",
  },
  {
    question:
      "A migration project ended, but a former administrator remains eligible for the migration-admin role. What should happen?",
    choices: [
      "Keep eligibility forever.",
      "Remove the obsolete eligibility because the responsibility ended.",
      "Convert it to standing privilege.",
      "Ignore it unless the user activates it.",
    ],
    answer: 1,
    explanation:
      "Privileged eligibility should follow current responsibility and lifecycle.",
  },
  {
    question:
      "What is strongest for emergency or break-glass access?",
    choices: [
      "Use it as the easiest daily administrator path.",
      "Keep it exceptional, bounded, monitored, and subject to post-use review.",
      "Share one account with everyone.",
      "Disable all evidence collection during emergencies.",
    ],
    answer: 1,
    explanation:
      "Emergency access supports resilience but should not become ungoverned standing privilege.",
  },
  {
    question:
      "Why should identity monitoring include authorization events in addition to sign-ins?",
    choices: [
      "Because authentication does not explain which resources and actions were allowed or denied.",
      "Because sign-ins are never useful.",
      "Because authorization applies only to privileged users.",
      "Because federation makes application logs unnecessary.",
    ],
    answer: 0,
    explanation:
      "Authorization evidence explains what an authenticated principal could actually do.",
  },
  {
    question:
      "What does source health tell an identity-monitoring team?",
    choices: [
      "Whether the telemetry source itself is current, delayed, stale, partial, missing, or Unknown.",
      "Whether every identity is safe.",
      "Whether all policies should allow access.",
      "Whether users prefer SSO.",
    ],
    answer: 0,
    explanation:
      "Source health prevents teams from confusing missing evidence with a quiet environment.",
  },
  {
    question:
      "What is the main purpose of an access review?",
    choices: [
      "To approve every current entitlement.",
      "To decide whether an existing identity-to-resource relationship should continue, change, expire, or be removed.",
      "To replace authentication.",
      "To grant permanent privilege.",
    ],
    answer: 1,
    explanation:
      "Access review is a lifecycle governance decision about current need.",
  },
  {
    question:
      "A reporting analyst still needs dashboard access but no longer needs sensitive export capability. What is the strongest review outcome?",
    choices: [
      "Confirm everything.",
      "Reduce access by removing the unnecessary sensitive entitlement.",
      "Remove all reporting access.",
      "Grant more access to avoid future reviews.",
    ],
    answer: 1,
    explanation:
      "Good governance preserves necessary work while reducing unnecessary scope.",
  },
  {
    question:
      "What is strongest for an unowned legacy production identity with partial monitoring and uncertain business purpose?",
    choices: [
      "Confirm because it still works.",
      "Keep it Blocked or Unknown until ownership and current need are resolved.",
      "Make it permanent.",
      "Ignore it because it is old.",
    ],
    answer: 1,
    explanation:
      "Operational usefulness does not replace accountable ownership and current authorization evidence.",
  },
  {
    question:
      "Which design best balances security and usability for high-impact production administration?",
    choices: [
      "Permanent broad administrator access to reduce friction.",
      "Targeted step-up verification plus time-bounded privileged activation.",
      "Block all administration permanently.",
      "Require privileged-level verification for every low-risk application action.",
    ],
    answer: 1,
    explanation:
      "Targeted friction is proportionate when resource sensitivity and privilege are high.",
  },
  {
    question:
      "A zero-trust architecture review finds strong modern controls but two material Blocked findings: an unowned legacy identity and obsolete privileged eligibility. What is the strongest overall recommendation?",
    choices: [
      "Approve because most controls are green.",
      "HOLD until the blockers are closed or explicitly governed through an authorized decision.",
      "Ignore the findings because they affect only a few identities.",
      "Reject the architecture permanently.",
    ],
    answer: 1,
    explanation:
      "Material blockers should prevent full approval even when the broader architecture is strong.",
  },
];

const coverage = [
  {
    range: "Questions 1–2",
    topic: "Identity perimeter and workload identity",
    lessons: "A13.1",
  },
  {
    range: "Questions 3–4",
    topic: "Zero-trust principles and environment boundaries",
    lessons: "A13.2",
  },
  {
    range: "Questions 5–7",
    topic: "Federation and SSO",
    lessons: "A13.3",
  },
  {
    range: "Questions 8–10",
    topic: "Conditional access and policy decisions",
    lessons: "A13.4",
  },
  {
    range: "Questions 11–14",
    topic: "RBAC, ABAC, hybrid models, and role explosion",
    lessons: "A13.5",
  },
  {
    range: "Questions 15–18",
    topic: "Privileged access management",
    lessons: "A13.6",
  },
  {
    range: "Questions 19–20",
    topic: "Identity logging and monitoring",
    lessons: "A13.7",
  },
  {
    range: "Questions 21–23",
    topic: "Access reviews and governance",
    lessons: "A13.8",
  },
  {
    range: "Question 24",
    topic: "Security and usability tradeoffs",
    lessons: "A13.9",
  },
  {
    range: "Question 25",
    topic: "Integrated zero-trust architecture decision",
    lessons: "A13.10",
  },
];

const reviewMap = [
  {
    score: "21–25",
    meaning:
      "Strong readiness. You can integrate identity, access, privilege, monitoring, and governance evidence.",
    action:
      "Review only any question explanations you missed, then continue to A14.",
  },
  {
    score: "17–20",
    meaning:
      "Good readiness with a few targeted gaps.",
    action:
      "Use the coverage map to revisit the lessons tied to missed questions.",
  },
  {
    score: "13–16",
    meaning:
      "Partial readiness. Core ideas are present, but some architecture relationships need reinforcement.",
    action:
      "Revisit A13.2, A13.4, A13.6, A13.7, and A13.8 before moving on.",
  },
  {
    score: "0–12",
    meaning:
      "Rebuild the identity architecture model before continuing.",
    action:
      "Review the A13 homepage and work back through the lessons in order, focusing on how identity, authorization, lifecycle, and evidence connect.",
  },
];

const checklist = [
  "I can distinguish authentication from authorization.",
  "I can explain zero trust without describing it as deny everything.",
  "I can explain how federation and SSO relate to relying-service authorization.",
  "I can evaluate conditional-access outcomes such as allow, deny, step-up, limited, and review.",
  "I can distinguish RBAC, ABAC, and hybrid models.",
  "I can identify role explosion and stale attribute risk.",
  "I can distinguish privileged eligibility from active privilege.",
  "I can explain just-in-time and emergency access governance.",
  "I can explain why identity monitoring needs both authentication and authorization evidence.",
  "I can explain source health and evidence freshness.",
  "I can make access-review decisions using purpose, lifecycle, ownership, privilege, and evidence.",
  "I can explain why usability and recoverability affect control quality.",
  "I can keep Unknown and Blocked findings visible.",
  "I can issue an architecture decision based on blockers, conditions, and evidence.",
];

const takeaways = [
  "Identity architecture connects principals, resources, authorization, lifecycle, privilege, evidence, and ownership.",
  "Zero trust reduces assumed trust rather than blocking legitimate work.",
  "Federation centralizes authentication while relying services retain authorization responsibility.",
  "Conditional access should use relevant context and visible fallback decisions.",
  "RBAC, ABAC, and hybrid models should balance clarity, least privilege, and maintainability.",
  "Privileged access should be temporary, attributable, scoped, monitored, and reviewed.",
  "Identity monitoring should cover authentication, authorization, lifecycle, privilege, policy, and source health.",
  "Access governance asks whether access should still exist now.",
  "Usability, accessibility, recovery, and supportability affect whether controls work reliably.",
  "Professional architecture decisions preserve strong controls while isolating blockers and defining remediation.",
];

export default function A13ModuleTestPage() {
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
              A13 Module Test
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Identity, Zero Trust, and Access Control
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A13 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question assessment checks whether you can connect identity
            perimeter, zero trust, federation, conditional access, RBAC/ABAC,
            privileged access, monitoring, governance, and usability into one
            defensible access-control model.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Answer from the defensive architecture concepts taught in A13. The
            quiz hides answers until you reveal them through the existing
            CyberShield Academy quiz component.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A13.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Module A13
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A13 Module Test Readiness"
          items={[
            "I completed or reviewed A13.1 through A13.10.",
            "I can reason about identity-to-resource relationships instead of memorizing isolated terms.",
            "I can distinguish Confirmed, Conditional, Unknown, Blocked, and Accepted Risk.",
            "I understand this assessment uses only fictional defensive scenarios.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Coverage Map
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            What the 25 Questions Cover
          </h2>

          <div className="mt-6 grid gap-4">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.range}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    {item.lessons}
                  </span>
                </div>
                <h3 className="mt-3 font-black text-blue-50">{item.topic}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Assessment
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            25-Question Module Test
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Work through all 25 questions before using the explanations to
            review missed concepts.
          </p>

          <div className="mt-6">
            <MiniQuiz
              title="A13 Module Test: Identity, Zero Trust, and Access Control"
              questions={questions}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Performance Guide
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Interpret Your Result
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewMap.map((item) => (
              <article
                key={item.score}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="text-xl font-black text-emerald-50">
                  {item.score}
                </h3>
                <p className="mt-2 leading-7 text-emerald-100">
                  {item.meaning}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  Next step: {item.action}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
            Targeted Review
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Use Missed Questions to Find the Right Lesson
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coverage.map((item) => (
              <article
                key={`${item.range}-review`}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <p className="text-sm font-black text-yellow-50">
                  {item.range} → {item.lessons}
                </p>
                <p className="mt-2 text-sm leading-7 text-yellow-100">
                  Review {item.topic.toLowerCase()}.
                </p>
              </article>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="A13 Mastery Checklist"
          items={checklist}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            A13 — Identity, Zero Trust, and Access Control
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            You have completed the A13 learning sequence and its 25-question
            module assessment. The next Advanced module is A14 — Cryptography
            and Key Management Concepts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A13.10
            </Link>

            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Review A13
            </Link>

            <Link
              href={nextModule}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Next: A14
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}