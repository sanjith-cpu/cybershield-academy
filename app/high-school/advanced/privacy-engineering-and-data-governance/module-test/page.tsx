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
const modulePath = `${trackPath}/privacy-engineering-and-data-governance`;
const previousLesson = `${modulePath}/privacy-engineering-lab`;

const questions = [
  {
    question:
      "Which statement best describes privacy engineering?",
    choices: [
      "It translates privacy goals into requirements, architecture, controls, evidence, ownership, and lifecycle decisions.",
      "It is only the process of writing privacy policies.",
      "It is identical to cybersecurity.",
      "It focuses only on encryption.",
    ],
    answer: 0,
    explanation:
      "Privacy engineering converts privacy goals into concrete system and governance decisions across the lifecycle.",
  },
  {
    question:
      "Why does strong security not automatically guarantee strong privacy?",
    choices: [
      "Security can protect data from unauthorized access while the organization may still collect, use, share, infer, or retain more data than is appropriate.",
      "Security controls never protect personal data.",
      "Privacy and security are unrelated.",
      "Privacy only applies when security controls fail.",
    ],
    answer: 0,
    explanation:
      "Security protects necessary data, while privacy also asks whether the data practice itself is appropriate.",
  },
  {
    question:
      "What is the strongest purpose of a data inventory?",
    choices: [
      "To document what data exists, where it comes from, where it goes, who owns it, who accesses it, why it exists, and how it is governed.",
      "To list only database names.",
      "To record only data classifications.",
      "To replace risk assessments.",
    ],
    answer: 0,
    explanation:
      "A useful inventory provides the factual foundation for later minimization, retention, risk, and governance decisions.",
  },
  {
    question:
      "Which factor can make ordinary data more privacy-sensitive?",
    choices: [
      "Combining it with other data so individuals become easier to identify or infer information about.",
      "Changing the font used to display it.",
      "Moving it to a faster server.",
      "Compressing the file.",
    ],
    answer: 0,
    explanation:
      "Linkability, context, combination, and inference can increase privacy sensitivity even when individual fields appear ordinary.",
  },
  {
    question:
      "What is the strongest example of data minimization?",
    choices: [
      "Collecting only the fields needed for the current purpose and reducing precision, access, sharing, copies, inference, and retention where possible.",
      "Collecting everything and deleting unused data years later.",
      "Encrypting every field regardless of necessity.",
      "Keeping extra data for possible future use.",
    ],
    answer: 0,
    explanation:
      "Minimization applies across collection, precision, access, sharing, copies, derived data, and retention.",
  },
  {
    question:
      "A scheduling partner needs four fields, but the integration sends eight. What is the strongest privacy-engineering response?",
    choices: [
      "Reduce the interface to the four fields supported by the approved scheduling purpose.",
      "Keep all eight because the connection is encrypted.",
      "Keep all eight because the supplier is approved.",
      "Keep all eight for possible future features.",
    ],
    answer: 0,
    explanation:
      "Purpose limitation and minimization support narrowing the payload to what the current service actually needs.",
  },
  {
    question:
      "What is purpose limitation?",
    choices: [
      "Keeping data use aligned with the approved purpose and reviewing materially different secondary uses separately.",
      "Using one broad purpose statement for every future data use.",
      "Preventing all secondary use under every circumstance.",
      "Limiting each product to one database.",
    ],
    answer: 0,
    explanation:
      "Purpose limitation prevents silent expansion into unrelated or materially different uses.",
  },
  {
    question:
      "Which statement about consent is strongest?",
    choices: [
      "Consent can support meaningful optional choice, but it does not replace minimization, purpose limitation, retention, security, or governance.",
      "Consent makes any data practice acceptable.",
      "Consent is always required for every necessary service function.",
      "Consent eliminates privacy risk.",
    ],
    answer: 0,
    explanation:
      "Consent is one privacy mechanism, not a universal substitute for good system design.",
  },
  {
    question:
      "Which design is most privacy-respecting for an optional feature?",
    choices: [
      "Keep the optional feature off by default and let the user enable it through a clear, accessible choice.",
      "Enable it automatically because users can disable it later.",
      "Hide the setting in several menus.",
      "Bundle it with unrelated required service features.",
    ],
    answer: 0,
    explanation:
      "Privacy-respecting defaults reduce optional processing unless the user meaningfully chooses it.",
  },
  {
    question:
      "What does contextual integrity emphasize?",
    choices: [
      "Whether information flows fit the expected relationship among the data, purpose, recipient, people, and service context.",
      "Whether all data is encrypted.",
      "Whether every user makes the same privacy choice.",
      "Whether the system uses the same database technology.",
    ],
    answer: 0,
    explanation:
      "Privacy expectations depend heavily on who is sharing what, with whom, why, and in what context.",
  },
  {
    question:
      "What should a strong retention rule include?",
    choices: [
      "Purpose, retention period, trigger, end action, owner, exception path, and evidence.",
      "Only the number of days.",
      "Only the deletion date.",
      "Only the system name.",
    ],
    answer: 0,
    explanation:
      "Retention decisions should be reviewable and connected to purpose, ownership, lifecycle action, and evidence.",
  },
  {
    question:
      "A project needs long-term aggregate trends but only short-term individual-level events. What is the strongest design?",
    choices: [
      "Keep approved aggregate trends longer and expire individual-level events after the bounded project need.",
      "Keep both forms for the same long period.",
      "Delete both immediately.",
      "Share the individual-level events with more teams.",
    ],
    answer: 0,
    explanation:
      "Different forms of data can have different retention periods based on continuing purpose.",
  },
  {
    question:
      "Why should supplier-side deletion evidence matter?",
    choices: [
      "Because external copies remain part of the privacy lifecycle even after internal copies are removed.",
      "Because supplier contracts automatically prove deletion.",
      "Because internal deletion never matters.",
      "Because suppliers always retain data forever.",
    ],
    answer: 0,
    explanation:
      "Lifecycle scope should include relevant third-party copies and current evidence.",
  },
  {
    question:
      "What is the strongest description of privacy risk?",
    choices: [
      "The possibility that a data practice could create adverse consequences for people or the organization through collection, use, access, sharing, inference, retention, expectations, or weak controls.",
      "Only the probability of a data breach.",
      "Only a legal penalty.",
      "Only a data classification label.",
    ],
    answer: 0,
    explanation:
      "Privacy risk is broader than breach risk and includes purpose, expectations, inference, lifecycle, and governance consequences.",
  },
  {
    question:
      "What is residual privacy risk?",
    choices: [
      "The privacy risk that remains after current controls and treatments are considered.",
      "The risk before controls are applied.",
      "A supplier contract.",
      "A data-classification level.",
    ],
    answer: 0,
    explanation:
      "Residual risk is what remains after minimization, security, lifecycle, governance, and other treatments.",
  },
  {
    question:
      "How should low evidence confidence affect a privacy assessment?",
    choices: [
      "It should increase visible uncertainty and prevent stronger conclusions than the evidence supports.",
      "It should automatically make the risk Low.",
      "It should automatically close the risk.",
      "It should remove the need for an owner.",
    ],
    answer: 0,
    explanation:
      "Weak, stale, or partial evidence should reduce confidence rather than create false reassurance.",
  },
  {
    question:
      "Which statement best describes a Data Owner?",
    choices: [
      "The accountable role for major business decisions about data purpose, classification, sharing, retention, and governance.",
      "The person who physically administers the database.",
      "The person who writes every security control.",
      "The evidence custodian for every system.",
    ],
    answer: 0,
    explanation:
      "Data ownership is about business accountability, not merely technical administration.",
  },
  {
    question:
      "Why can the Control Owner, Evidence Owner, Remediation Owner, and Risk Owner be different people?",
    choices: [
      "Because control effectiveness, evidence custody, corrective work, and business-risk accountability are distinct responsibilities.",
      "Because organizations should avoid clear accountability.",
      "Because privacy teams must own all four roles.",
      "Because evidence owners automatically approve residual risk.",
    ],
    answer: 0,
    explanation:
      "Strong governance separates distinct responsibilities while maintaining clear accountability and handoffs.",
  },
  {
    question:
      "What is privacy by design?",
    choices: [
      "Building privacy requirements into architecture, defaults, interfaces, access boundaries, lifecycle, evidence, and governance before problems become expensive to fix.",
      "Adding a privacy notice after launch.",
      "Encrypting every database and stopping there.",
      "Collecting broad data first and minimizing later.",
    ],
    answer: 0,
    explanation:
      "Privacy by design turns privacy principles into the way the system actually works.",
  },
  {
    question:
      "Which architecture pattern best supports minimization for a supplier integration?",
    choices: [
      "A purpose-specific narrow interface schema that exposes only required fields.",
      "A full-record API protected by policy.",
      "A broad data export with encryption.",
      "A shared database containing all customer information.",
    ],
    answer: 0,
    explanation:
      "Narrow interfaces make minimization an architectural property rather than a reminder.",
  },
  {
    question:
      "What is strongest for privacy-related system logs and governance evidence?",
    choices: [
      "Record the metadata needed to prove control operation without unnecessarily copying sensitive content.",
      "Copy complete personal records into every log.",
      "Avoid all logs.",
      "Store sensitive logs in a public location.",
    ],
    answer: 0,
    explanation:
      "Good observability supports assurance while minimizing additional data exposure.",
  },
  {
    question:
      "Why is more user friction not automatically stronger security?",
    choices: [
      "Friction can create failure, exclusion, workarounds, and support burden without necessarily reducing the relevant risk.",
      "Security controls should never add any friction.",
      "Friction only affects privacy.",
      "Friction proves a user is authorized.",
    ],
    answer: 0,
    explanation:
      "Control effectiveness should be measured by actual risk reduction, not difficulty alone.",
  },
  {
    question:
      "What is the strongest approach to accessibility in authentication or recovery?",
    choices: [
      "Provide equivalent governed paths that preserve necessary security while remaining usable by legitimate users with different needs.",
      "Treat accessibility as an informal bypass.",
      "Remove verification from accessible paths.",
      "Require one method for every user regardless of accessibility.",
    ],
    answer: 0,
    explanation:
      "Accessibility belongs inside the main control design, not outside it as an insecure exception.",
  },
  {
    question:
      "What should happen when a privacy issue has a remediation plan but no closure evidence yet?",
    choices: [
      "Keep the issue open until objective evidence shows the target state was reached.",
      "Mark it Closed because work has started.",
      "Mark it Closed because an owner was assigned.",
      "Remove it from the risk register.",
    ],
    answer: 0,
    explanation:
      "Planned or completed work is not the same as evidence that residual privacy risk reached the approved state.",
  },
  {
    question:
      "What is the strongest purpose of the final Privacy Engineering Review?",
    choices: [
      "Integrate context, inventory, minimization, expectations, lifecycle, privacy risk, governance, architecture, tradeoffs, evidence, ownership, and recommendations into one decision-ready package.",
      "Produce one privacy score for the entire organization.",
      "Replace all earlier artifacts.",
      "List only the highest data classifications.",
    ],
    answer: 0,
    explanation:
      "The capstone connects evidence across the entire privacy-engineering lifecycle so leaders can make defensible decisions.",
  },
];

const coverage = [
  {
    range: "Questions 1–3",
    focus:
      "Privacy engineering foundations, privacy vs. security, and data inventory.",
  },
  {
    range: "Questions 4–7",
    focus:
      "Sensitivity, linkability, minimization, partner scope, and purpose limitation.",
  },
  {
    range: "Questions 8–10",
    focus:
      "Consent, privacy-respecting defaults, user expectations, and contextual integrity.",
  },
  {
    range: "Questions 11–13",
    focus:
      "Retention, aggregate vs. individual lifecycle, and supplier deletion evidence.",
  },
  {
    range: "Questions 14–16",
    focus:
      "Privacy risk, residual risk, and evidence confidence.",
  },
  {
    range: "Questions 17–18",
    focus:
      "Data governance roles, control ownership, evidence ownership, remediation, and risk ownership.",
  },
  {
    range: "Questions 19–21",
    focus:
      "Privacy by design, narrow interfaces, architecture, and privacy-aware evidence.",
  },
  {
    range: "Questions 22–23",
    focus:
      "Security/privacy/usability tradeoffs and accessible control design.",
  },
  {
    range: "Questions 24–25",
    focus:
      "Evidence-based closure and integrated Privacy Engineering Review decisions.",
  },
];

const targetedReview = [
  {
    result: "Missed Questions 1–3",
    review:
      "A16.1 Privacy Engineering Principles and A16.2 Data Classification and Inventory.",
  },
  {
    result: "Missed Questions 4–7",
    review:
      "A16.2 Data Classification and Inventory and A16.3 Data Minimization and Purpose Limitation.",
  },
  {
    result: "Missed Questions 8–10",
    review:
      "A16.4 Consent and User Expectations.",
  },
  {
    result: "Missed Questions 11–13",
    review:
      "A16.5 Retention and Deletion Concepts.",
  },
  {
    result: "Missed Questions 14–16",
    review:
      "A16.6 Privacy Risk Assessments.",
  },
  {
    result: "Missed Questions 17–18",
    review:
      "A16.7 Data Governance Roles.",
  },
  {
    result: "Missed Questions 19–21",
    review:
      "A16.8 Privacy by Design in Systems.",
  },
  {
    result: "Missed Questions 22–23",
    review:
      "A16.9 Balancing Security, Privacy, and Usability.",
  },
  {
    result: "Missed Questions 24–25",
    review:
      "A16.10 Privacy Engineering Lab.",
  },
];

const performanceGuide = [
  {
    band: "22–25 correct",
    meaning:
      "Strong A16 mastery. You are ready to move forward while keeping the portfolio as a reference.",
  },
  {
    band: "18–21 correct",
    meaning:
      "Good understanding. Review the lesson groups connected to the questions you missed.",
  },
  {
    band: "14–17 correct",
    meaning:
      "Developing understanding. Revisit the targeted lessons before beginning the next Advanced module.",
  },
  {
    band: "0–13 correct",
    meaning:
      "Rebuild the foundations. Review A16.1–A16.6 first, then revisit governance, architecture, tradeoffs, and the capstone.",
  },
];

const checklistItems = [
  "I can explain privacy engineering as a system-design and governance discipline.",
  "I can distinguish privacy goals from security goals.",
  "I can read a data inventory and explain classification context.",
  "I can test necessity and apply data minimization.",
  "I can explain purpose limitation and secondary use.",
  "I can evaluate notice, choice, defaults, accessibility, and user expectations.",
  "I can design retention, deletion, archival, expiry, and evidence.",
  "I can explain supplier-held data lifecycle responsibilities.",
  "I can write a privacy risk scenario.",
  "I can distinguish inherent and residual privacy risk.",
  "I can use evidence confidence appropriately.",
  "I can distinguish Data Owner, System Owner, Control Owner, Evidence Owner, Remediation Owner, and Risk Owner.",
  "I can identify privacy-by-design architecture patterns.",
  "I can balance privacy, security, usability, accessibility, operations, and business value.",
  "I can require objective closure evidence.",
  "I can integrate A16 evidence into a leadership-ready Privacy Engineering Review.",
];

const takeaways = [
  "Privacy engineering connects purpose, data, architecture, controls, evidence, ownership, and lifecycle.",
  "Security supports privacy but does not justify unnecessary collection, sharing, inference, or retention.",
  "Data inventory and classification provide the factual foundation for later privacy decisions.",
  "Minimization should reduce unnecessary data before other controls are used to protect it.",
  "Consent and user-facing notices must match actual system behavior.",
  "Retention should be tied to continuing purpose and supported by lifecycle evidence.",
  "Privacy risk includes expectation, inference, lifecycle, access, sharing, and governance consequences—not only breaches.",
  "Clear governance separates data ownership, control ownership, evidence ownership, remediation ownership, and risk ownership.",
  "Privacy by design turns privacy requirements into system behavior.",
  "Balanced decisions preserve legitimate security, privacy, usability, accessibility, operations, and business value.",
  "Closure requires evidence; monitoring requires review triggers.",
  "The A16 Privacy Engineering Review is the module’s final portfolio outcome.",
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
        Module A16
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Advanced Track
      </Link>
    </div>
  );
}

export default function A16ModuleTestPage() {
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
              A16 Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              25 Questions
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Privacy Engineering and Data Governance
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A16 Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This 25-question test checks your understanding across all ten A16
            lessons: privacy engineering principles, data inventory,
            minimization, consent and expectations, retention, privacy risk,
            governance, privacy by design, balanced decision-making, and the
            final Privacy Engineering Review.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Answers remain hidden until you reveal them through the quiz
            component. All scenarios are fictional and school-appropriate.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="A16 Module Test Readiness"
          items={[
            "I completed A16.1 through A16.10.",
            "I can explain how privacy, security, usability, governance, and lifecycle interact.",
            "I can reason from evidence instead of relying on one privacy score.",
            "I am ready to review missed topics after finishing the test.",
          ]}
        />

        <Section
          eyebrow="Test Coverage"
          title="What the 25 Questions Measure"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {coverage.map((item) => (
              <article
                key={item.range}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-50">{item.range}</p>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  {item.focus}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Assessment"
          title="25-Question A16 Module Test"
        >
          <MiniQuiz
            title="A16 Module Test: Privacy Engineering and Data Governance"
            questions={questions}
          />
        </Section>

        <Section
          eyebrow="Performance Guide"
          title="How to Interpret Your Result"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {performanceGuide.map((item) => (
              <article
                key={item.band}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.band}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Targeted Review"
          title="Use Missed Questions to Choose What to Revisit"
        >
          <div className="grid gap-4">
            {targetedReview.map((item) => (
              <article
                key={item.result}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.result}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  Review: {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="A16 Mastery Checklist"
          items={checklistItems}
        />

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Assessment Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Keep all privacy examples fictional and defensive
          </h2>
          <p className="mt-3 leading-7">
            The test is designed for synthetic privacy engineering scenarios.
            Do not use real personal records, private accounts, confidential
            organizational data, or real supplier systems while reviewing these
            concepts.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Module Completion
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A16 — Privacy Engineering and Data Governance
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            After you complete this assessment and review any missed topics,
            your A16 lesson sequence, module assessment, and Privacy Engineering
            Review portfolio package are complete.
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