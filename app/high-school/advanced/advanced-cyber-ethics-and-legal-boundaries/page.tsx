import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const advancedPath = "/high-school/advanced";
const modulePath =
  `${advancedPath}/advanced-cyber-ethics-and-legal-boundaries`;

const lessons = [
  {
    "number": "A1.1",
    "title": "Professional Responsibility in Cybersecurity",
    "slug": "professional-responsibility-in-cybersecurity",
    "focus": "Understand why cybersecurity professionals must protect people, systems, data, trust, and public safety.",
    "lab": "Evaluate a fictional analyst decision and document the professional duty involved.",
    "artifact": "Professional responsibility statement"
  },
  {
    "number": "A1.2",
    "title": "Authorization, Scope, and Written Permission",
    "slug": "authorization-scope-and-written-permission",
    "focus": "Define authorization, written scope, approved systems, allowed actions, time limits, owners, and stop conditions.",
    "lab": "Review a fictional authorization letter and identify missing or unclear boundaries.",
    "artifact": "Authorization and scope checklist"
  },
  {
    "number": "A1.3",
    "title": "Legal Risk and Consequences",
    "slug": "legal-risk-and-consequences",
    "focus": "Recognize how unauthorized access, privacy violations, data mishandling, and reckless decisions can create serious consequences.",
    "lab": "Compare fictional actions and classify their legal, ethical, operational, and trust risks.",
    "artifact": "Legal-risk decision matrix"
  },
  {
    "number": "A1.4",
    "title": "Responsible Disclosure Concepts",
    "slug": "responsible-disclosure-concepts",
    "focus": "Learn safe reporting, evidence limits, coordinated communication, ownership, timelines, and non-public handling.",
    "lab": "Draft a fictional responsible-disclosure notice using only authorized evidence.",
    "artifact": "Responsible disclosure brief"
  },
  {
    "number": "A1.5",
    "title": "Handling Sensitive Information Ethically",
    "slug": "handling-sensitive-information-ethically",
    "focus": "Protect confidential, personal, school, employee, customer, security, and incident information.",
    "lab": "Classify fictional records and choose minimum-necessary access, storage, sharing, and deletion decisions.",
    "artifact": "Sensitive-information handling plan"
  },
  {
    "number": "A1.6",
    "title": "Research Boundaries and Safe Environments",
    "slug": "research-boundaries-and-safe-environments",
    "focus": "Distinguish safe simulations, fictional labs, controlled environments, approved research, and prohibited real-world actions.",
    "lab": "Design a fictional research boundary with allowed actions, prohibited actions, evidence sources, and emergency stops.",
    "artifact": "Safe research environment plan"
  },
  {
    "number": "A1.7",
    "title": "Conflicts of Interest and Trust",
    "slug": "conflicts-of-interest-and-trust",
    "focus": "Identify personal benefit, divided loyalty, pressure, gifts, secrecy requests, and other threats to professional independence.",
    "lab": "Analyze a fictional conflict-of-interest case and prepare a disclosure and recusal decision.",
    "artifact": "Conflict-of-interest response"
  },
  {
    "number": "A1.8",
    "title": "Ethics in AI and Automation",
    "slug": "ethics-in-ai-and-automation",
    "focus": "Evaluate privacy, bias, explainability, human oversight, approval gates, failure modes, and accountability in security automation.",
    "lab": "Review a fictional automated-response proposal and add human controls, limits, rollback, and validation.",
    "artifact": "Ethical automation review"
  },
  {
    "number": "A1.9",
    "title": "Professional Communication During Risk",
    "slug": "professional-communication-during-risk",
    "focus": "Communicate evidence, uncertainty, impact, actions, ownership, urgency, and residual risk without exaggeration.",
    "lab": "Create aligned technical, leadership, user, and supplier messages from one fictional fact set.",
    "artifact": "Multi-audience risk communication package"
  },
  {
    "number": "A1.10",
    "title": "Advanced Ethics Case Lab",
    "slug": "advanced-ethics-case-lab",
    "focus": "Integrate authorization, legal risk, sensitive data, disclosure, research boundaries, conflicts, automation, and communication.",
    "lab": "Resolve a complex fictional ethics case and defend every decision with scope, ownership, evidence, and safety limits.",
    "artifact": "Advanced ethics case portfolio"
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Identify the professional duty",
    "detail": "Clarify who could be affected, what must be protected, what role the defender holds, and what responsibilities apply."
  },
  {
    "step": "2",
    "title": "Verify authorization and scope",
    "detail": "Check written permission, approved systems, allowed actions, time limits, owners, evidence rules, and stop conditions."
  },
  {
    "step": "3",
    "title": "Protect sensitive information",
    "detail": "Use minimum-necessary access, safe storage, controlled sharing, accurate handling, retention limits, and deletion rules."
  },
  {
    "step": "4",
    "title": "Evaluate legal and ethical risk",
    "detail": "Compare possible harm, privacy effects, service impact, trust, conflicts, unintended consequences, and professional standards."
  },
  {
    "step": "5",
    "title": "Choose a safe authorized action",
    "detail": "Select the least intrusive, proportionate, reversible, owner-approved, evidence-preserving, and service-aware response."
  },
  {
    "step": "6",
    "title": "Communicate and document",
    "detail": "Record facts, evidence limits, decisions, authority, actions, validation, unresolved questions, residual risk, and next review."
  }
];
const objectives = [
  "Explain professional responsibility in advanced defensive cybersecurity work.",
  "Separate curiosity, technical ability, business need, and legal authorization.",
  "Evaluate written permission, scope, stop conditions, ownership, and evidence limits.",
  "Handle fictional sensitive information using minimum-necessary and privacy-aware practices.",
  "Describe responsible disclosure without exposing real systems or teaching operational exploitation.",
  "Identify conflicts of interest, pressure, secrecy requests, and threats to professional trust.",
  "Evaluate AI and automation through human oversight, accountability, explainability, rollback, and validation.",
  "Create accurate multi-audience communication during fictional security risk."
];
const evidencePreview = [
  {
    "source": "Authorization memo",
    "observation": "Lists two approved systems and a four-hour review window.",
    "supports": "Limited written permission exists for defined systems and time.",
    "does_not_prove": "Permission for other systems, other actions, later testing, or public disclosure."
  },
  {
    "source": "Supervisor message",
    "observation": "Asks the analyst to collect a private employee file not listed in scope.",
    "supports": "A request was made outside the written authorization boundary.",
    "does_not_prove": "That the request is legally approved or ethically justified."
  },
  {
    "source": "Automation proposal",
    "observation": "Would automatically disable accounts after one alert with no human approval.",
    "supports": "The design lacks an approval gate and may create service or user harm.",
    "does_not_prove": "That every automated action is unethical or unsafe."
  }
];

export default function AdvancedEthicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.2em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              10 Lessons + Module Test
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                Professional Foundations
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                A1. Advanced Cyber Ethics and Legal Boundaries
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                Build the professional judgment required to work safely,
                ethically, legally, and responsibly before touching any
                cybersecurity task. Learn authorization, scope, disclosure,
                privacy, research boundaries, conflicts of interest, AI ethics,
                and communication during risk.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/professional-responsibility-in-cybersecurity`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Start A1.1
                </Link>

                <Link
                  href={advancedPath}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Advanced Track
                </Link>

                <Link
                  href="/high-school"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
                >
                  High School Hub
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-cyan-400/30 bg-slate-950/75 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Module Snapshot
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["10", "Lessons"],
                  ["25", "Test questions"],
                  ["6", "Workflow steps"],
                  ["8", "Objectives"],
                  ["10", "Portfolio artifacts"],
                  ["100%", "Fictional and safe"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4"
                  >
                    <p className="text-3xl font-black text-cyan-200">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-purple-400/30 bg-purple-400/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                  Main Module Question
                </p>
                <p className="mt-3 font-bold leading-7 text-purple-50">
                  How can a cybersecurity professional use technical skill
                  without crossing legal, ethical, privacy, safety, or trust
                  boundaries?
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12">
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Why This Module Comes First
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Permission Comes before Technical Ability
            </h2>
            <p className="mt-4 leading-8 text-cyan-50">
              Knowing how to perform a technical action does not automatically
              make that action authorized, safe, necessary, proportionate, or
              ethical. Professional defenders begin with written scope,
              ownership, privacy, evidence limits, service impact, and stop
              conditions.
            </p>
          </article>

          <article className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
              Non-Negotiable Safety Boundary
            </p>
            <h2 className="mt-3 text-3xl font-black">
              No Real-World Testing or Private Data
            </h2>
            <p className="mt-4 leading-8 text-yellow-50">
              Never access, scan, test, alter, bypass, investigate, or disclose
              a real system without explicit written authorization. Never use
              real credentials, suspicious files, phishing links, private
              messages, employee records, school records, or confidential
              information in this course. Every lab uses invented evidence.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Professional Ethics Workflow
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Six Steps Used across Module A1
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {item.step}
                </span>

                <div>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Module Objectives
          </p>
          <h2 className="mt-3 text-3xl font-black">
            By the End of A1, Students Will Be Able To
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <article
                key={objective}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-400/10 font-black text-purple-200">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-200">{objective}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Module Lessons
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Complete A1.1 through A1.10
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Each lesson develops one professional ethics skill through
              fictional evidence, decision-making, safe labs, hidden-answer
              checks, and a substantial portfolio artifact.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/70"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-xl bg-cyan-400 px-3 py-2 text-sm font-black text-slate-950">
                    {lesson.number}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Advanced Lesson
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white">
                  {lesson.title}
                </h3>

                <div className="mt-5 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    {lesson.focus}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Safe fictional lab
                  </p>
                  <p className="mt-2 text-sm leading-6 text-yellow-50">
                    {lesson.lab}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    Portfolio artifact
                  </p>
                  <p className="mt-2 text-sm leading-6 text-purple-50">
                    {lesson.artifact}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Separate What the Evidence Supports from What It Does Not Prove
          </h2>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-700">
            <table className="min-w-full divide-y divide-slate-700 text-left">
              <thead className="bg-slate-950">
                <tr className="text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
                  <th className="px-5 py-4">Source</th>
                  <th className="px-5 py-4">Observation</th>
                  <th className="px-5 py-4">Supports</th>
                  <th className="px-5 py-4">Does Not Prove</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800 bg-slate-900/70">
                {evidencePreview.map((item) => (
                  <tr key={item.source} className="align-top">
                    <td className="px-5 py-4 font-black text-white">
                      {item.source}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-slate-300">
                      {item.observation}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-emerald-100">
                      {item.supports}
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-yellow-100">
                      {item.does_not_prove}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
              Module Portfolio Outcome
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Advanced Ethics and Authorization Decision Package
            </h2>
            <p className="mt-4 leading-8 text-purple-50">
              By the end of A1, students will combine ten artifacts into one
              polished package containing professional duties, authorization
              boundaries, a legal-risk matrix, responsible disclosure,
              sensitive-information handling, safe research rules, conflict
              management, ethical automation review, multi-audience
              communication, and a final ethics case.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Clear fictional learning claim",
                "Written authorization boundary",
                "Evidence-to-decision traceability",
                "Privacy and minimum-necessary handling",
                "Human oversight and approval gates",
                "Accurate multi-audience communication",
                "Validation and unresolved questions",
                "Reflection and revision history",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-purple-300/25 bg-slate-950/50 p-4 text-sm font-semibold text-purple-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="flex flex-col rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
              A1 Module Test
            </p>
            <h2 className="mt-3 text-3xl font-black">
              25 Questions
            </h2>
            <p className="mt-4 leading-8 text-yellow-50">
              Assess professional responsibility, authorization, written
              scope, legal and ethical risk, disclosure, privacy, research
              boundaries, conflicts, AI automation, communication, and
              integrated case decisions.
            </p>

            <div className="mt-auto pt-7">
              <Link
                href={`${modulePath}/module-test`}
                className="inline-flex rounded-xl bg-yellow-300 px-5 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
              >
                Open A1 Module Test
              </Link>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
            Begin Module A1
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Start with Professional Responsibility
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            The first Advanced lesson establishes the professional duty to
            protect people, systems, data, service continuity, trust, evidence,
            privacy, and public safety before making any technical decision.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/professional-responsibility-in-cybersecurity`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A1.1
            </Link>

            <Link
              href={advancedPath}
              className="rounded-xl border border-emerald-300/40 px-6 py-3 font-black text-emerald-50 transition hover:border-white"
            >
              Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}