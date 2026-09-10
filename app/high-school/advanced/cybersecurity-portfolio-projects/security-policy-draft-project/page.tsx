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

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const previousLesson = `${modulePath}/detection-plan-project`;
const nextLesson = `${modulePath}/cloud-security-review-project`;

const objectives = [
  "Explain what a cybersecurity policy does, how it differs from a standard, procedure, guideline, plan, and technical configuration, and why policy should connect to real organizational risk.",
  "Write clear policy statements that define purpose, scope, responsibilities, required behavior, exceptions, evidence, review, and enforcement without becoming vague or overly technical.",
  "Translate fictional risk, identity, logging, recovery, change, and incident-response expectations into policy requirements that are measurable and reviewable.",
  "Evaluate weak policy language for ambiguity, overreach, missing ownership, unrealistic absolutes, and unsafe disclosure, then revise it into defensible professional language.",
  "Create a portfolio-ready Security Policy Draft Project that demonstrates governance reasoning, audience awareness, traceability, ethical boundaries, and practical implementation thinking.",
];

const policyHierarchy = [
  {
    item: "Policy",
    purpose:
      "States the organization's required direction, expectations, responsibilities, and governance principles.",
    example:
      "Privileged access must be limited to approved roles, reviewed on a defined schedule, and removed when no longer required.",
  },
  {
    item: "Standard",
    purpose:
      "Defines mandatory criteria that support the policy, often with more specific control or quality requirements.",
    example:
      "Temporary privileged access must have an owner, an approval record, an expiration date, and evidence of review.",
  },
  {
    item: "Procedure",
    purpose:
      "Explains how authorized staff carry out a task in a specific environment or workflow.",
    example:
      "A fictional access-review procedure describes who initiates the review, who approves it, and how completion is recorded.",
  },
  {
    item: "Guideline",
    purpose:
      "Provides recommended practices that allow judgment when strict requirements are not appropriate.",
    example:
      "Teams should prefer lower-privilege roles when several approved options can meet the same business need.",
  },
  {
    item: "Technical configuration",
    purpose:
      "Implements a control in a system. Configuration details belong with authorized operations, not in a broad governance policy.",
    example:
      "A production identity setting would be an implementation detail and is intentionally excluded from this student portfolio.",
  },
];

const policyParts = [
  {
    title: "Purpose",
    question: "Why does the policy exist?",
    detail:
      "Connect the policy to a business, security, legal, privacy, resilience, or governance need without using generic language such as 'because security is important.'",
  },
  {
    title: "Scope",
    question: "Who and what does the policy apply to?",
    detail:
      "Define included people, systems, services, data, contractors, or business units and make important exclusions visible.",
  },
  {
    title: "Definitions",
    question: "Which terms must readers interpret consistently?",
    detail:
      "Define terms such as privileged access, sensitive data, security event, owner, exception, or review when ambiguity could affect compliance.",
  },
  {
    title: "Roles and responsibilities",
    question: "Who must do what?",
    detail:
      "Separate responsibilities for users, managers, service owners, security teams, risk owners, administrators, and approvers where appropriate.",
  },
  {
    title: "Requirements",
    question: "What must or must not happen?",
    detail:
      "Use clear, testable language. Requirements should be specific enough to review while remaining high-level enough to survive technology changes.",
  },
  {
    title: "Evidence",
    question: "How can the organization show the requirement was followed?",
    detail:
      "Identify records such as approvals, review evidence, training completion, change tickets, recovery tests, or monitoring summaries without exposing private details.",
  },
  {
    title: "Exceptions",
    question: "How are legitimate deviations governed?",
    detail:
      "Require owner approval, rationale, risk consideration, compensating controls when appropriate, expiration, and review instead of allowing informal permanent exceptions.",
  },
  {
    title: "Enforcement and escalation",
    question: "What happens when requirements are not met?",
    detail:
      "Describe accountable review, remediation, escalation, and corrective action proportionately. Avoid threatening or unrealistic language.",
  },
  {
    title: "Review cycle",
    question: "When must the policy be reconsidered?",
    detail:
      "Use scheduled review plus event-driven review after major architecture, legal, organizational, threat, or business changes.",
  },
];

const writingPrinciples = [
  {
    title: "Use must for true requirements",
    detail:
      "If compliance is mandatory, use direct language such as 'must' or 'must not.' Avoid weakening required controls with vague words such as 'should generally' unless flexibility is intentional.",
  },
  {
    title: "Avoid impossible absolutes",
    detail:
      "Statements such as 'all attacks will be prevented' or 'systems will never fail' are not defensible. Policy should require reasonable controls, monitoring, recovery, and review.",
  },
  {
    title: "Be technology-aware but not technology-trapped",
    detail:
      "Policy should describe enduring expectations. Product names, commands, configuration paths, and rapidly changing settings usually belong in standards or procedures.",
  },
  {
    title: "Make ownership visible",
    detail:
      "A requirement without a responsible role can become everybody's problem and nobody's task. State who approves, reviews, maintains, or validates the requirement.",
  },
  {
    title: "Connect requirements to evidence",
    detail:
      "A policy becomes more useful when readers know what record, review, or artifact demonstrates compliance.",
  },
  {
    title: "Design exceptions instead of pretending none exist",
    detail:
      "Real organizations sometimes need temporary deviations. A governed exception process is safer than forcing people into hidden workarounds.",
  },
];

const weakStrongPairs = [
  {
    weak: "Users should have secure passwords.",
    strong:
      "Workforce identities must use the organization's approved authentication controls, and privileged identities must receive stronger protection and recurring access review appropriate to their risk.",
    reason:
      "The stronger version defines required behavior and recognizes that identity risk differs by privilege without hard-coding one product or password rule.",
  },
  {
    weak: "Admins can only access systems when needed.",
    strong:
      "Privileged access must be approved for a defined business purpose, limited to required scope, assigned to a named owner, reviewed periodically, and removed or reduced when the need ends.",
    reason:
      "The revised statement makes purpose, scope, ownership, lifecycle, and review measurable.",
  },
  {
    weak: "Logs must catch every attack.",
    strong:
      "Security-relevant systems must produce appropriate audit evidence, and monitoring owners must review source coverage and health so known visibility gaps are documented and addressed.",
    reason:
      "Logging supports visibility but cannot guarantee detection of every event. The stronger policy defines a defensible obligation.",
  },
  {
    weak: "No security exceptions are allowed.",
    strong:
      "Exceptions to mandatory security requirements must be documented, approved by an accountable owner, supported by a risk rationale, time-bounded where appropriate, and reviewed until closed or formally renewed.",
    reason:
      "A governed exception process is more realistic and safer than an absolute rule that encourages undocumented workarounds.",
  },
  {
    weak: "Backups should always work.",
    strong:
      "Owners of critical fictional services must maintain documented recovery responsibilities and periodically validate that approved recovery processes can restore required business functions.",
    reason:
      "The stronger version focuses on ownership and validation rather than promising impossible perfection.",
  },
  {
    weak: "Employees must report anything suspicious immediately.",
    strong:
      "Workforce members must promptly report security concerns through an approved channel when they observe unexpected account, device, data, or service behavior, and response teams must preserve appropriate records for review.",
    reason:
      "The requirement is still clear but provides usable scope and avoids unrealistic interpretations of 'anything suspicious.'",
  },
];

const traceability = [
  {
    source: "RISK-NB-201 — privileged-role lifecycle uncertainty",
    policyArea: "Identity and Access Governance",
    requirement:
      "Privileged roles must have named owners, documented business purpose, periodic review, and timely removal or reduction when access is no longer required.",
    evidence:
      "Synthetic role review record, owner approval, expiration record for temporary access",
  },
  {
    source: "RISK-NB-203 — telemetry freshness evidence gap",
    policyArea: "Security Logging and Monitoring",
    requirement:
      "Owners of security-relevant telemetry must define expected source coverage and health and document material visibility gaps that affect defensive decisions.",
    evidence:
      "Synthetic source-health summary, monitoring review record, documented visibility exception",
  },
  {
    source: "RISK-NB-205 — queue and recovery dependency",
    policyArea: "Resilience and Recovery",
    requirement:
      "Critical service owners must maintain recovery responsibilities, identify important dependencies, and periodically validate recovery readiness using approved exercises.",
    evidence:
      "Synthetic recovery test record, dependency inventory, owner sign-off",
  },
  {
    source: "DET-NB-301 — privileged role change detection",
    policyArea: "Detection and Escalation",
    requirement:
      "High-impact access changes must generate appropriate audit evidence and be reviewable against ownership and approval context.",
    evidence:
      "Synthetic identity event, approval reference, monitoring review record",
  },
  {
    source: "A19.3 Incident Report Project",
    policyArea: "Incident Documentation",
    requirement:
      "Security incidents must be documented with scope, evidence, decisions, owners, communication, recovery status, and unresolved questions appropriate to the event.",
    evidence:
      "Fictional incident report and decision record",
  },
];

const policySections = [
  {
    id: "POL-NB-01",
    title: "Identity and Access Governance",
    purpose:
      "Protect access to fictional Northbridge systems by requiring approved identity, least privilege, lifecycle review, and accountable ownership.",
    requirements: [
      "Access must be based on an approved business or service purpose.",
      "Privileged roles must be limited, owned, reviewed, and reduced or removed when no longer needed.",
      "Temporary elevated access must include an expiration or explicit review point.",
      "Service identities must have defined workload purpose and ownership.",
      "Access exceptions must follow the governed exception process.",
    ],
  },
  {
    id: "POL-NB-02",
    title: "Security Logging and Monitoring",
    purpose:
      "Maintain enough defensive evidence to support triage, investigation, accountability, and recovery validation.",
    requirements: [
      "Security-relevant systems must produce appropriate audit evidence for defined defensive use cases.",
      "Monitoring owners must document required telemetry sources and known visibility limitations.",
      "Material source-health issues must be tracked when they reduce detection confidence or coverage.",
      "Detection tuning must preserve defensive value and include review and rollback considerations.",
      "Monitoring data must be handled according to privacy, retention, and access requirements.",
    ],
  },
  {
    id: "POL-NB-03",
    title: "Security Incident Management",
    purpose:
      "Ensure that security events are assessed, escalated, documented, communicated, and closed through an accountable process.",
    requirements: [
      "Potential incidents must be evaluated using available evidence and bounded confidence.",
      "Material incidents must have a named coordinator or accountable response role.",
      "Important decisions and communication must be documented.",
      "Recovery must include criteria for returning the affected service to trusted operation.",
      "Post-incident review must capture lessons, unresolved risks, and follow-up ownership.",
    ],
  },
  {
    id: "POL-NB-04",
    title: "Resilience and Recovery",
    purpose:
      "Support continued operation and trustworthy recovery of critical fictional services.",
    requirements: [
      "Critical services must identify important dependencies and recovery owners.",
      "Recovery expectations must reflect business importance and realistic service needs.",
      "Approved recovery processes must be reviewed or exercised periodically.",
      "Recovery evidence must be sufficient to support a decision that service can return to trusted operation.",
      "Known recovery gaps must be documented and assigned for treatment.",
    ],
  },
  {
    id: "POL-NB-05",
    title: "Security Exceptions",
    purpose:
      "Provide a controlled path for temporary or justified deviations from mandatory security requirements.",
    requirements: [
      "Exceptions must identify the requirement being deviated from and the business reason.",
      "An accountable owner must approve the exception.",
      "Residual risk and compensating controls must be documented where applicable.",
      "Exceptions must include an expiration or scheduled review point unless formally approved otherwise.",
      "Expired exceptions must be closed, renewed, or escalated rather than silently continuing.",
    ],
  },
];

const exceptionRecord = {
  id: "EXC-NB-17",
  policy: "POL-NB-02 Security Logging and Monitoring",
  request:
    "A fictional legacy reporting component cannot yet provide the preferred telemetry context while a planned replacement is being completed.",
  rationale:
    "The service supports a low-impact internal reporting function, and immediate replacement would disrupt an ongoing migration.",
  controls:
    "Restricted access, alternate application audit record, daily owner review during the synthetic exercise, and documented monitoring limitation.",
  residualRisk:
    "Low to Moderate, primarily reduced investigation context rather than loss of core service protection.",
  owner: "Reporting Service Owner",
  approval: "Security Governance Reviewer",
  expires: "End of fictional migration milestone",
  closure:
    "Replace the legacy component, verify expected telemetry, and close or formally reassess the exception.",
};

const commonMistakes = [
  {
    title: "Turning policy into a technical manual",
    detail:
      "Commands, product-specific settings, and implementation steps become stale quickly and usually belong in standards or procedures.",
  },
  {
    title: "Writing requirements nobody can verify",
    detail:
      "If a statement cannot be observed, reviewed, or evidenced in some reasonable way, it may be too vague to govern effectively.",
  },
  {
    title: "Using undefined terms",
    detail:
      "Words such as critical, sensitive, promptly, privileged, and material may need definitions so different teams interpret the requirement consistently.",
  },
  {
    title: "Ignoring exceptions",
    detail:
      "Absolute rules without an exception path can create hidden noncompliance. Governed exceptions preserve accountability.",
  },
  {
    title: "Confusing policy with a guarantee",
    detail:
      "A policy can require controls and responsible behavior, but it cannot guarantee that no incident, outage, mistake, or control failure will ever occur.",
  },
  {
    title: "Publishing sensitive internal detail",
    detail:
      "A portfolio policy should demonstrate governance skill without exposing real internal architecture, names, security weaknesses, legal matters, or confidential business information.",
  },
];

const quizQuestions = [
  {
    question:
      "What is the main role of a cybersecurity policy?",
    choices: [
      "To state required organizational direction, responsibilities, expectations, and governance principles",
      "To provide detailed exploitation instructions",
      "To replace every technical configuration file",
      "To guarantee that incidents can never occur",
    ],
    answer: 0,
    explanation:
      "Policy establishes durable organizational requirements and responsibilities. More detailed implementation belongs in supporting standards and procedures.",
  },
  {
    question:
      "Which statement is the strongest policy requirement?",
    choices: [
      "Privileged access must have an approved purpose, named owner, defined scope, periodic review, and timely removal when no longer required",
      "Admins should be careful",
      "Security should always be strong",
      "Use whichever access seems convenient",
    ],
    answer: 0,
    explanation:
      "The strongest statement is clear, mandatory, reviewable, and tied to ownership and lifecycle.",
  },
  {
    question:
      "Why should policy avoid unnecessary product-specific configuration details?",
    choices: [
      "Because policy should remain durable while standards and procedures can carry implementation-specific details",
      "Because technical controls never matter",
      "Because policy should never mention security",
      "Because procedures are always optional",
    ],
    answer: 0,
    explanation:
      "Policy describes enduring expectations. Detailed implementation can change more frequently and is usually better placed in standards or procedures.",
  },
  {
    question:
      "What makes a security exception professionally governed?",
    choices: [
      "Documented rationale, accountable approval, residual risk, compensating controls where appropriate, and a review or expiration point",
      "A verbal agreement with no record",
      "A permanent hidden workaround",
      "Deleting the original requirement",
    ],
    answer: 0,
    explanation:
      "A governed exception is visible, owned, justified, risk-aware, and reviewed rather than silently continuing forever.",
  },
  {
    question:
      "What is the strongest way to connect a policy to a portfolio risk assessment?",
    choices: [
      "Map risk statements to policy requirements and identify evidence that would demonstrate the requirement is being followed",
      "Copy risk scores into the policy with no explanation",
      "Remove ownership information",
      "Publish real production weaknesses",
    ],
    answer: 0,
    explanation:
      "Traceability shows why a requirement exists and how compliance can be reviewed.",
  },
  {
    question:
      "Why is 'all attacks will be prevented' weak policy language?",
    choices: [
      "It is an unrealistic absolute that cannot be guaranteed or meaningfully reviewed",
      "It is too short",
      "It does not mention a product name",
      "It contains the word attack",
    ],
    answer: 0,
    explanation:
      "Professional policy sets reasonable control and governance expectations rather than promising impossible outcomes.",
  },
  {
    question:
      "What is safest for a student Security Policy Draft Project?",
    choices: [
      "Use fictional organizations, synthetic evidence, abstracted requirements, and no real confidential security information",
      "Include a real company's unresolved weaknesses as examples",
      "Publish credentials to prove the policy is needed",
      "Copy private internal policy documents without permission",
    ],
    answer: 0,
    explanation:
      "A student portfolio should prove governance reasoning without exposing private, proprietary, or real security-sensitive information.",
  },
];

const takeaways = [
  "Policy defines required organizational direction, responsibilities, and governance; standards and procedures provide more specific implementation support.",
  "Strong policy language is clear, durable, reviewable, owned, and connected to real organizational risk.",
  "Purpose, scope, definitions, responsibilities, requirements, evidence, exceptions, enforcement, and review make a policy easier to govern.",
  "Good policy avoids impossible absolutes and does not confuse required controls with guarantees of perfect security.",
  "Exceptions should be documented, approved, risk-aware, time-bounded where appropriate, and reviewed until closed.",
  "Traceability from risks and detection needs to policy requirements helps explain why the policy exists.",
  "Policy requirements should be measurable enough that evidence can demonstrate whether the organization is following them.",
  "Student policy portfolios should use fictional organizations and must not expose real confidential security, legal, personnel, or infrastructure information.",
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
        Module A19
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

export default function SecurityPolicyDraftProjectPage() {
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
              A19.7
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.7
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security Policy Draft Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Security policy turns risk and defensive expectations into clear
            organizational requirements. A strong draft explains what must happen,
            who owns it, what evidence supports compliance, how exceptions work,
            and when the policy must be reviewed.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson uses a fictional Northbridge organization only. It teaches
            governance and policy writing, not real configuration, enforcement,
            access, monitoring, or investigation of any live environment.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A19: Cybersecurity Portfolio Projects"
          lessonTitle="Security Policy Draft Project"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand how A19.5 and A19.6 connect risk, monitoring, ownership, and review.",
            "I can distinguish a high-level requirement from a technical implementation detail.",
            "I understand that policy should support governance and accountability rather than promise perfect security.",
            "I will use only fictional organizations, synthetic records, and publication-safe examples.",
          ]}
        />

        <Section eyebrow="Professional Hook" title="Security Decisions Become Repeatable When Expectations Are Written Clearly">
          <p className="leading-8">
            An organization may agree that privileged access should be limited,
            important logs should remain available, critical services should be
            recoverable, and incidents should be documented. But if those
            expectations exist only as informal knowledge, teams may apply them
            differently or forget them when people, technology, and priorities
            change.
          </p>

          <p className="mt-4 leading-8">
            Policy turns important expectations into organizational commitments. It
            says what is required, who is responsible, how exceptions are governed,
            and what evidence demonstrates that the requirement is being followed.
            Good policy does not replace professional judgment; it gives that
            judgment a consistent framework.
          </p>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Outcomes for A19.7">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7 text-cyan-50">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Teaching" title="Policy Is Direction, Not a Configuration File">
          <p className="leading-8">
            Security governance documents exist at different levels. A policy sets
            direction and mandatory expectations. A standard turns that direction
            into more specific criteria. A procedure explains how authorized people
            perform a task. A guideline recommends good practice where judgment is
            allowed. Technical configuration implements controls in a specific
            system.
          </p>

          <p className="mt-4 leading-8">
            Keeping those levels separate makes security documentation easier to
            maintain. A policy can remain useful for years even when products and
            systems change, while standards and procedures can be updated more
            frequently.
          </p>

          <div className="mt-6 grid gap-5">
            {policyHierarchy.map((item) => (
              <article
                key={item.item}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="text-xl font-black text-blue-50">{item.item}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {item.purpose}
                </p>
                <p className="mt-4 rounded-xl border border-blue-300/20 bg-slate-950/40 p-4 text-sm leading-7 text-blue-50">
                  <span className="font-black">Fictional example:</span>{" "}
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Policy Anatomy" title="Nine Parts of a Reviewable Security Policy">
          <div className="grid gap-5">
            {policyParts.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-semibold text-purple-100">
                      {item.question}
                    </p>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Writing Principles" title="Six Rules for Policy Language That People Can Actually Use">
          <div className="grid gap-5 md:grid-cols-2">
            {writingPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Revision Practice" title="Turn Weak Policy Statements into Defensible Requirements">
          <div className="grid gap-5">
            {weakStrongPairs.map((item) => (
              <article
                key={item.weak}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak
                    </p>
                    <p className="mt-2 leading-7 text-red-50">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Stronger
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {item.strong}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Why it improves:</span>{" "}
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Traceability" title="Show Why Each Requirement Exists">
          <p className="leading-8">
            A portfolio policy becomes more credible when the reader can trace a
            requirement back to a risk, detection need, incident lesson, recovery
            need, or governance decision. Traceability prevents the policy from
            looking like a random list of rules.
          </p>

          <div className="mt-6 grid gap-5">
            {traceability.map((item) => (
              <article
                key={item.source}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.policyArea}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Source:</span> {item.source}
                </p>
                <p className="mt-3 text-sm leading-7 text-white">
                  <span className="font-black">Requirement:</span>{" "}
                  {item.requirement}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Evidence:</span> {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Policy Governance Board"
          subtitle="Synthetic portfolio dashboard for a fictional security-policy review."
          metrics={[
            {
              label: "Draft policy sections",
              value: "5",
              note: "Identity, monitoring, incidents, recovery, and exceptions",
            },
            {
              label: "Traceable requirements",
              value: "24",
              note: "Requirements map to fictional risks, detections, incidents, or recovery needs",
            },
            {
              label: "Open policy issues",
              value: "3",
              note: "Definition clarity, exception ownership, and evidence language need final review",
            },
            {
              label: "Scheduled review",
              value: "Annual + Event",
              note: "Review also occurs after major architecture, legal, or organizational change",
            },
          ]}
        />

        <FakeAlertCard
          title="Policy Requirement Lacks an Accountable Owner"
          severity="Medium"
          time="Synthetic policy review checkpoint"
          source="Northbridge Governance Review"
          details="A draft requirement says security exceptions must be reviewed, but it does not identify which role owns the approval or renewal decision."
          recommendation="Revise the requirement to identify an accountable role and require rationale, residual risk, expiration or review date, and closure evidence."
        />

        <FakeLogPanel
          title="Synthetic Policy Review Notes"
          logs={[
            "[POL-01] privileged access language now includes business purpose, owner, review, and removal.",
            "[POL-02] monitoring requirement revised to describe coverage and source health rather than promising perfect detection.",
            "[POL-03] incident documentation requirement includes evidence, decision ownership, communication, and recovery.",
            "[POL-04] recovery language includes validation and dependency ownership.",
            "[POL-05] exception workflow requires rationale, approval, residual risk, and review.",
            "[REVIEW] three vague terms identified for definition: material, privileged, promptly.",
            "[SAFETY] no real organization names, internal systems, credentials, or confidential policy details are included.",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Evidence Analysis 1 — Policy or Procedure?"
          question="Which content belongs most naturally in a high-level security policy?"
          evidence={[
            "The organization wants a durable requirement for privileged-access governance.",
            "Different technical platforms may implement privileged access differently.",
            "The requirement must survive product and architecture changes.",
            "Detailed administrative steps change more frequently than governance expectations.",
          ]}
          options={[
            "Require approved purpose, least privilege, ownership, recurring review, and timely removal while leaving product-specific steps to standards or procedures",
            "Include exact production configuration commands in the policy",
            "List real privileged account names in the policy",
            "Avoid defining any responsibility so each team can decide independently",
          ]}
          bestAnswer={0}
          explanation="Policy should state durable expectations and ownership. Detailed implementation belongs in lower-level supporting documents."
        />

        <Section eyebrow="Fictional Policy Draft" title="Five Northbridge Policy Sections">
          <p className="leading-8">
            The following sections show how a student portfolio can present policy
            language without copying a real organization's private documents. They
            remain intentionally technology-neutral and focus on governance.
          </p>

          <div className="mt-6 grid gap-5">
            {policySections.map((section) => (
              <article
                key={section.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                    {section.id}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {section.title}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  <span className="font-black text-white">Purpose:</span>{" "}
                  {section.purpose}
                </p>

                <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Requirements
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-50">
                    {section.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis 2 — Unrealistic Absolute"
          question="A draft says, 'Security logs must detect every attack immediately.' What is the strongest revision?"
          evidence={[
            "Detection depends on telemetry coverage, source health, context, and signal design.",
            "No monitoring system can guarantee perfect detection of every possible event.",
            "Policy should define reasonable mandatory expectations that can be reviewed.",
            "A19.6 emphasized source coverage, visibility gaps, and defensive signal quality.",
          ]}
          options={[
            "Require security-relevant audit evidence, defined monitoring ownership, source-health review, and documentation of material visibility gaps",
            "Keep the statement because stronger wording guarantees stronger security",
            "Remove logging requirements entirely",
            "Add instructions for avoiding detection so the policy can test itself",
          ]}
          bestAnswer={0}
          explanation="Good policy sets enforceable expectations without making impossible guarantees. Monitoring quality includes coverage, ownership, review, and known limitations."
        />

        <Section eyebrow="Exception Governance" title="Exceptions Are Decisions, Not Secret Workarounds">
          <p className="leading-8">
            A policy that assumes exceptions never occur can create hidden risk.
            Sometimes a legacy system, contractual need, availability requirement,
            migration, or temporary business constraint prevents immediate
            compliance. A mature policy defines how those deviations are approved
            and reviewed.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-950">
                {exceptionRecord.id}
              </span>
              <h3 className="font-black text-yellow-50">
                Fictional Exception Record
              </h3>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["Policy", exceptionRecord.policy],
                ["Request", exceptionRecord.request],
                ["Rationale", exceptionRecord.rationale],
                ["Compensating Controls", exceptionRecord.controls],
                ["Residual Risk", exceptionRecord.residualRisk],
                ["Owner", exceptionRecord.owner],
                ["Approval", exceptionRecord.approval],
                ["Expiration", exceptionRecord.expires],
                ["Closure", exceptionRecord.closure],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-yellow-300/20 bg-slate-950/40 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-yellow-50">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Evidence of Compliance" title="Policy Becomes Stronger When Review Evidence Is Defined">
          <p className="leading-8">
            A policy does not need to list every operational record, but it should
            be clear how compliance can be demonstrated. Evidence supports audits,
            internal reviews, risk decisions, and improvement.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Identity policy evidence",
                detail:
                  "Synthetic access-review completion, approval record, owner assignment, expiration record, or exception record.",
              },
              {
                title: "Monitoring policy evidence",
                detail:
                  "Synthetic source-health summary, detection review, coverage report, tuning record, or documented visibility gap.",
              },
              {
                title: "Incident policy evidence",
                detail:
                  "Fictional incident report, decision log, communication record, recovery status, and lessons-learned review.",
              },
              {
                title: "Recovery policy evidence",
                detail:
                  "Synthetic recovery exercise, dependency review, owner sign-off, and validation criteria.",
              },
              {
                title: "Exception policy evidence",
                detail:
                  "Approved request, risk rationale, compensating controls, residual-risk statement, expiration, and closure evidence.",
              },
              {
                title: "Policy governance evidence",
                detail:
                  "Version history, review date, approval record, change rationale, stakeholder review, and scheduled next review.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Common Mistakes" title="Avoid These Policy-Drafting Anti-Patterns">
          <div className="grid gap-5 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5"
              >
                <h3 className="font-black text-yellow-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-yellow-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Safe Fictional Lab" title="Draft a Northbridge Security Policy">
          <p className="leading-8">
            Use the supplied fictional risks, detection plans, and policy sections.
            Your work is documentation only. You are not configuring, enforcing, or
            testing any control.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Task 1 — Define purpose and scope",
                detail:
                  "Write one paragraph explaining why the fictional policy exists and which systems, users, services, and data it covers.",
              },
              {
                title: "Task 2 — Choose three policy areas",
                detail:
                  "Select three of the five Northbridge policy sections and refine each into four to six clear mandatory requirements.",
              },
              {
                title: "Task 3 — Add responsibilities",
                detail:
                  "Identify the fictional roles accountable for ownership, approval, review, evidence, exception handling, and escalation.",
              },
              {
                title: "Task 4 — Define evidence",
                detail:
                  "For each chosen requirement, identify one safe synthetic record or artifact that could demonstrate compliance.",
              },
              {
                title: "Task 5 — Create one exception",
                detail:
                  "Draft a fictional exception with rationale, owner, residual risk, compensating controls, expiration, and closure criteria.",
              },
              {
                title: "Task 6 — Perform a language review",
                detail:
                  "Find vague words, impossible absolutes, technical details, or missing owners and revise them before finalizing the artifact.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
              >
                <h3 className="font-black text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision 1 — A Team Cannot Meet a Requirement Temporarily"
          scenario="A fictional legacy service cannot meet one new monitoring requirement until a scheduled migration is complete."
          choices={[
            {
              label: "Choice A",
              response:
                "Use the documented exception process with accountable approval, rationale, residual risk, compensating controls, expiration, and closure criteria.",
              outcome:
                "Best governance choice. The deviation remains visible, owned, time-bounded, and reviewable.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Tell the team to ignore the policy quietly until the migration is finished.",
              outcome:
                "Risky. Hidden exceptions weaken accountability and make residual risk difficult to govern.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Access a real legacy service without permission to see whether the policy can be enforced.",
              outcome:
                "Unsafe. This lesson does not authorize access, configuration, or testing of real systems.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Scenario Decision 2 — Policy Contains a Product-Specific Command"
          scenario="A fictional policy draft includes an exact command for configuring one security tool."
          choices={[
            {
              label: "Choice A",
              response:
                "Move the implementation-specific command to an authorized standard or procedure and keep the policy focused on the durable security requirement and accountable owner.",
              outcome:
                "Best choice. This keeps policy stable while allowing implementation details to change safely.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Add more commands so the policy becomes a complete administration manual.",
              outcome:
                "Risky. Policy becomes difficult to maintain and mixes governance with technical procedure.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Publish real production configuration details to make the portfolio look advanced.",
              outcome:
                "Unsafe. Student portfolio work should not expose real security-sensitive configuration.",
              tone: "risk",
            },
          ]}
        />

        <Section eyebrow="Advanced Challenge" title="Review the Policy from Three Professional Perspectives">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Security Governance",
                detail:
                  "Check traceability, ownership, exception handling, review cycles, evidence, and consistency across requirements.",
              },
              {
                title: "Service Owner",
                detail:
                  "Check whether responsibilities are understandable, requirements are realistic, and the policy supports business needs without unnecessary ambiguity.",
              },
              {
                title: "Portfolio Reviewer",
                detail:
                  "Check whether the artifact demonstrates structured reasoning, ethical boundaries, audience awareness, revision skill, and professional communication.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-purple-100">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <DefenderChecklist
          title="Security Policy Draft Project Checklist"
          items={[
            "I wrote a clear purpose and scope.",
            "I distinguish policy requirements from standards, procedures, guidelines, and technical configuration.",
            "My mandatory requirements use clear language such as must or must not where appropriate.",
            "I avoided impossible guarantees and vague slogans.",
            "Important terms are defined or used consistently.",
            "Responsibilities identify accountable fictional roles.",
            "Requirements can be supported by reasonable evidence.",
            "The exception process includes rationale, ownership, residual risk, review, and closure.",
            "The policy includes a scheduled and event-driven review approach.",
            "I can trace major requirements back to fictional risks, detection needs, incidents, or recovery goals.",
            "I removed unnecessary product-specific details and confidential information.",
            "The final artifact uses only fictional Northbridge content and synthetic evidence.",
          ]}
        />

        <Section eyebrow="Assessment" title="A19.7 Knowledge Check">
          <MiniQuiz
            title="A19.7 Mini Quiz: Security Policy Draft Project"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Prompt — Security Policy Draft Project"
          prompt="Create a professional fictional Northbridge Security Policy Draft. Include title, purpose, scope, definitions, roles and responsibilities, three to five policy areas, clear mandatory requirements, evidence expectations, a governed exception process, enforcement or escalation language, review cycle, traceability to fictional risks or detection needs, and a short publication-safety statement."
          tips={[
            "Keep the policy technology-neutral enough to remain useful if products change.",
            "Use must or must not for true mandatory requirements and avoid impossible absolutes.",
            "Make ownership and evidence visible so requirements can be reviewed.",
            "Include one fictional exception example showing rationale, residual risk, approval, expiration, and closure.",
            "Use only synthetic Northbridge risks, detections, incidents, records, and roles.",
            "Do not include real internal policies, credentials, configuration commands, private records, or confidential weaknesses.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.8?">
          <p className="leading-8">
            A19.8 moves into the Cloud Security Review Project. Before continuing,
            make sure you can explain how policy expectations connect to cloud
            identity, data protection, logging, responsibility, resilience, and
            governance without assuming that using cloud services automatically
            transfers all security responsibility.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the difference between policy, standard, procedure, guideline, and configuration.",
              "I can write a clear mandatory security requirement with ownership and evidence.",
              "I can revise vague or unrealistic policy language into defensible professional language.",
              "I can explain how a governed exception differs from quietly ignoring a requirement.",
              "I can trace a policy requirement back to a fictional risk, detection need, incident lesson, or recovery goal.",
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

        <Section eyebrow="Portfolio Build Guide" title="Keep the Policy Draft Professional and Easy to Defend">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Use a clean document hierarchy",
                detail:
                  "Purpose, scope, definitions, responsibilities, requirements, exceptions, enforcement, and review should be easy to locate.",
              },
              {
                title: "Number important requirements",
                detail:
                  "Stable IDs make it easier to map policy statements to risks, evidence, exceptions, and future revisions.",
              },
              {
                title: "Add a short rationale only where useful",
                detail:
                  "Policy should stay concise, but a brief rationale can help readers understand especially important or unfamiliar requirements.",
              },
              {
                title: "Show traceability",
                detail:
                  "A simple appendix or mapping table can show which fictional risks and portfolio artifacts motivated the major requirements.",
              },
              {
                title: "Include revision history",
                detail:
                  "Document version, date, reviewer, and reason for change so the portfolio demonstrates governance over time.",
              },
              {
                title: "Separate evidence from sensitive detail",
                detail:
                  "Describe what evidence should exist without publishing real account names, logs, internal diagrams, or private records.",
              },
              {
                title: "Review for audience clarity",
                detail:
                  "A manager, technical owner, and security reviewer should all understand what the policy expects from them.",
              },
              {
                title: "End with publication safety",
                detail:
                  "State that the artifact is fictional and contains no real confidential policy, infrastructure, personnel, or security information.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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
            Policy drafting is governance work, not authorization to inspect or change real systems
          </h2>
          <p className="mt-3 leading-7">
            Use only fictional Northbridge examples and synthetic evidence. Do not
            access, configure, monitor, investigate, test, scan, probe, or change
            any real system for this project. Do not publish real credentials,
            internal policies, private personnel information, production
            configurations, confidential architecture, legal matters, or unresolved
            security weaknesses. The lesson is about policy reasoning, ownership,
            evidence, exceptions, review, and professional communication.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.7 Security Policy Draft Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a portfolio structure for translating security risks and
            defensive expectations into clear governance requirements. Next, A19.8
            applies portfolio review skills to a fictional cloud environment.
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