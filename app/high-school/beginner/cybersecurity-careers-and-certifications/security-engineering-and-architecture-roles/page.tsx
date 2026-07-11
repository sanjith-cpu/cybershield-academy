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

const modulePath =
  "/high-school/beginner/cybersecurity-careers-and-certifications";
const previousLesson = `${modulePath}/what-soc-analysts-do`;
const nextLesson =
  `${modulePath}/governance-risk-and-compliance-roles`;

const vocab = [
  [
    "Security engineering",
    "The design, implementation, testing, maintenance, and improvement of technical security controls and systems.",
  ],
  [
    "Security architecture",
    "The high-level structure that connects security requirements, systems, data, users, trust boundaries, and controls.",
  ],
  [
    "Security control",
    "A safeguard used to reduce risk, such as access control, encryption, logging, segmentation, backups, or monitoring.",
  ],
  [
    "Secure configuration",
    "A tested system setup that reduces unnecessary exposure and follows approved security requirements.",
  ],
  [
    "Defense in depth",
    "The use of multiple protective layers so one control failure does not automatically expose the entire system.",
  ],
  [
    "Design review",
    "A structured evaluation of a system plan before or during implementation to identify risks, assumptions, and control gaps.",
  ],
];

const engineeringStages = [
  {
    title: "Understand requirements",
    example:
      "Identify assets, users, data, business needs, threats, legal needs, and acceptable risk.",
  },
  {
    title: "Design controls",
    example:
      "Choose access, encryption, logging, segmentation, backup, monitoring, and recovery protections.",
  },
  {
    title: "Build and test",
    example:
      "Implement controls in an authorized environment and verify that they work as intended.",
  },
  {
    title: "Maintain and improve",
    example:
      "Review logs, incidents, changes, failures, updates, and new requirements over time.",
  },
];

const engineeringRows = [
  {
    item: "Cloud security engineer",
    source: "Builds identity, logging, network, encryption, and configuration controls",
    review:
      "Focuses on secure implementation and ongoing technical improvement.",
  },
  {
    item: "Security architect",
    source: "Maps trust boundaries, data flows, requirements, systems, and control layers",
    review:
      "Focuses on high-level design, tradeoffs, dependencies, and long-term structure.",
  },
  {
    item: "Network security engineer",
    source: "Implements segmentation, firewall policy, secure remote access, and monitoring",
    review:
      "Focuses on protecting communication paths and limiting unnecessary access.",
  },
  {
    item: "Application security engineer",
    source: "Supports secure development, testing, code review, and vulnerability reduction",
    review:
      "Focuses on software security throughout the development lifecycle.",
  },
  {
    item: "Security platform engineer",
    source: "Maintains defensive tools, integrations, automation, detection pipelines, and reliability",
    review:
      "Focuses on making security systems dependable, scalable, and usable.",
  },
];

const mistakes = [
  "Selecting tools before understanding the security requirement.",
  "Designing one control as if it can prevent every failure.",
  "Ignoring usability, maintenance, cost, reliability, and business impact.",
  "Changing production systems without approval, testing, rollback, or documentation.",
  "Treating architecture diagrams as permanent and never reviewing them.",
  "Building controls that generate logs but no one is responsible for reviewing them.",
];

const quizQuestions = [
  {
    question: "What is security engineering?",
    choices: [
      "Designing, implementing, testing, maintaining, and improving technical security controls.",
      "Writing only company advertisements.",
      "Deleting every security alert.",
      "Choosing passwords for other users.",
    ],
    answer: 0,
    explanation:
      "Security engineering turns security requirements into working, tested, maintainable controls.",
  },
  {
    question: "What is security architecture?",
    choices: [
      "The high-level structure connecting systems, users, data, trust boundaries, risks, and controls.",
      "A list of computer colors.",
      "A single firewall rule.",
      "A temporary help desk ticket.",
    ],
    answer: 0,
    explanation:
      "Architecture focuses on how the whole environment fits together and where protections belong.",
  },
  {
    question: "What does defense in depth mean?",
    choices: [
      "Using multiple protective layers so one failure does not expose everything.",
      "Using only one very expensive product.",
      "Turning off all monitoring.",
      "Allowing every user full access.",
    ],
    answer: 0,
    explanation:
      "Layered safeguards reduce reliance on a single control.",
  },
  {
    question: "Why should engineers test controls before deployment?",
    choices: [
      "To confirm the control works, avoids harmful side effects, and meets requirements.",
      "To make documentation unnecessary.",
      "To guarantee no future change is needed.",
      "To avoid approval.",
    ],
    answer: 0,
    explanation:
      "Testing helps verify effectiveness, reliability, compatibility, and safe operation.",
  },
  {
    question: "What should happen when a design assumption changes?",
    choices: [
      "Review the architecture, risks, controls, dependencies, and documentation.",
      "Ignore it permanently.",
      "Delete all diagrams.",
      "Disable every user account.",
    ],
    answer: 0,
    explanation:
      "Security designs must evolve when systems, users, threats, business needs, or assumptions change.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href="/high-school/beginner"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Beginner Track
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B13</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B13.2 What SOC Analysts Do
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B13.4 Governance, Risk, and Compliance Roles
        </Link>
      </div>
    </section>
  );
}

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

function EngineeringFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Secure Design and Engineering Cycle
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Engineers and architects move from requirements to design, implementation,
        testing, maintenance, and continuous improvement.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {engineeringStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Design rule:</span> the best control is not
        simply the strongest-looking option. It must reduce the right risk,
        work reliably, support users, and be maintainable.
      </div>
    </section>
  );
}

function FakeEngineeringPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Engineering Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Role and Responsibility Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares several engineering and architecture
            roles by responsibility, design focus, and expected outcome.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {engineeringRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesignDecisionBoard() {
  const areas = [
    {
      name: "Requirements",
      saferQuestion:
        "What must be protected, from which risks, for which users, and under which constraints?",
      saferChoice:
        "Translate business and security needs into specific, testable requirements.",
    },
    {
      name: "Architecture",
      saferQuestion:
        "Where do data, users, services, trust boundaries, dependencies, and failure points connect?",
      saferChoice:
        "Create a clear design showing layers, data flows, controls, and ownership.",
    },
    {
      name: "Implementation",
      saferQuestion:
        "Can the control be configured, tested, monitored, supported, and rolled back safely?",
      saferChoice:
        "Use approved environments, secure defaults, testing, change control, and documentation.",
    },
    {
      name: "Operations",
      saferQuestion:
        "Who reviews the logs, updates the control, responds to failure, and measures effectiveness?",
      saferChoice:
        "Assign ownership, maintenance, monitoring, recovery, and review responsibilities.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Design Thinking
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Security Design Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong design connects technical controls with risk, users, operations,
        ownership, testing, and long-term maintenance.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Design question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong engineering action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SecurityEngineeringArchitectureRolesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B13
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13.3 Security Engineering and Architecture Roles
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how security engineers and architects turn requirements into
            layered, testable, maintainable controls across networks, cloud
            systems, applications, identities, endpoints, and data.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B13: Cybersecurity Careers and Certifications"
          lessonTitle="Security Engineering and Architecture Roles"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that security engineering and architecture are defensive, authorized, and design-focused roles.",
            "I will use fictional systems, organizations, users, networks, diagrams, logs, and requirements only.",
            "I am ready to compare requirements, controls, trust boundaries, testing, maintenance, and ownership.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Secure Systems Do Not Appear by Accident"
        >
          <p className="leading-8">
            Every secure login flow, segmented network, protected cloud service,
            logging pipeline, backup design, encryption control, and recovery
            plan depends on people who understand requirements and build systems
            that can be tested and maintained.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never test,
            change, scan, or configure real systems without explicit
            authorization, approved scope, a rollback plan, and supervision.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain the difference between security engineering and security architecture.",
            "Connect risks and requirements with layered technical controls.",
            "Evaluate fictional designs for testability, usability, ownership, maintenance, and recovery.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="A Control Must Work in the Real Environment"
        >
          <p className="leading-8">
            A design can look secure on paper but fail if it blocks important
            work, creates unmanageable alerts, has no owner, cannot be updated,
            or depends on one fragile component. Engineering turns ideas into
            dependable systems.
          </p>
        </SectionCard>

        <EngineeringFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Architecture Defines the Structure; Engineering Makes It Work"
        >
          <p className="leading-8">
            Architects focus on the overall design, trust boundaries,
            dependencies, control placement, and long-term direction. Engineers
            implement, configure, automate, test, monitor, and improve the
            controls within that design.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Secure Design and Engineering
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <DesignDecisionBoard />
        <FakeEngineeringPanel />

        <FakeDashboardCard
          title="Fake Secure Design Dashboard"
          subtitle="Training dashboard using fictional systems, requirements, data flows, controls, owners, and test results."
          metrics={[
            {
              label: "Requirements mapped",
              value: "31",
              note: "Identity, data, availability, logging, privacy, backup, and recovery needs.",
            },
            {
              label: "Controls designed",
              value: "19",
              note: "Layered access, encryption, segmentation, monitoring, backup, and recovery protections.",
            },
            {
              label: "Open design gaps",
              value: "4",
              note: "Ownership, log review, rollback testing, and third-party dependency questions remain.",
            },
          ]}
        />

        <FakeAlertCard
          title="New Cloud Service Has No Assigned Security Log Owner"
          severity="Medium"
          time="2:35 PM"
          source="Fake Architecture Review"
          details="A fictional cloud service produces authentication, administrative, and data-access logs, but no team is assigned to review, retain, or respond to them."
          recommendation="Assign ownership, define retention and review expectations, connect alerts to an approved response process, and test that evidence is available when needed."
        />

        <FakeLogPanel
          title="Fake Design Review Log"
          logs={[
            "13:42:10 REQUIREMENT data='student_records' classification='sensitive'",
            "13:47:23 TRUST_BOUNDARY public_web='true' admin_portal='restricted'",
            "13:53:41 CONTROL identity='mfa' access='least_privilege'",
            "14:02:18 CONTROL encryption='at_rest_and_transit' backups='daily'",
            "14:11:37 GAP logging_owner='unassigned' retention='undefined'",
            "14:20:56 TEST restore='passed' alert_routing='failed'",
            "14:35:04 ACTION owner='security_platform_team' due='7_days'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Design Ready for Approval?"
          evidence={[
            "A fictional student-record system uses MFA and least-privilege access.",
            "Data is encrypted in transit and at rest.",
            "Backups exist and a restore test passed.",
            "Security logs are generated, but no owner, retention rule, or alert route is defined.",
          ]}
          question="What is the strongest design-review decision?"
          options={[
            "Approve the good controls conditionally but require logging ownership, retention, alert routing, and response testing before production use.",
            "Approve immediately because encryption is enabled.",
            "Reject every control and start over without explanation.",
            "Disable logging so the ownership issue disappears.",
          ]}
          bestAnswer={0}
          explanation="The design has strong controls, but operational ownership and response readiness are still incomplete."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Secure Design"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Career Lab"
          title="Review a Fictional Secure-System Design"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake System
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                School Resource Portal
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional portal includes public pages, student accounts,
                teacher administration, document storage, notifications,
                backups, logs, and a third-party email service.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Design Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify assets, users, data, trust boundaries, and dependencies.</li>
                <li>List security, privacy, availability, and recovery requirements.</li>
                <li>Choose layered controls for each major risk.</li>
                <li>Assign owners for logs, updates, incidents, and backups.</li>
                <li>Define tests, success criteria, rollback, and maintenance.</li>
                <li>Record open questions and approval conditions.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Team Wants to Deploy a New Security Tool Immediately"
          scenario="A fictional team chooses a security product before defining the problem, required outcome, affected users, integration needs, or maintenance owner."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause deployment, define requirements, compare options, test safely, assign ownership, and document approval criteria.",
              outcome:
                "Best engineering choice. Tools should follow requirements and controlled testing.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Deploy directly to production because the product is popular.",
              outcome:
                "Risky. Popularity does not prove fit, safety, reliability, or maintainability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable existing protections before testing.",
              outcome:
                "Unsafe. Removing controls can increase exposure and complicate recovery.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="One Firewall Rule Is Treated as the Entire Security Plan"
          scenario="A fictional design relies on a single firewall rule but has no identity controls, encryption, logging, backups, monitoring, or recovery process."
          choices={[
            {
              label: "Choice A",
              response:
                "Redesign using defense in depth with identity, access, encryption, segmentation, logging, backups, monitoring, and recovery.",
              outcome:
                "Best architecture choice. Multiple layers reduce dependence on one control.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the single rule and assume it cannot fail.",
              outcome:
                "Risky. Every control can be misconfigured, bypassed, or become outdated.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove documentation so attackers cannot read it.",
              outcome:
                "Unsafe. Approved internal documentation supports maintenance and incident response.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Security Engineering and Architecture Checklist"
          items={[
            "I begin with risks, requirements, users, data, systems, and constraints.",
            "I use defense in depth instead of relying on one control.",
            "I identify trust boundaries, dependencies, failure points, and owners.",
            "I test controls in authorized environments before deployment.",
            "I document configuration, approval, rollback, monitoring, and maintenance.",
            "I consider usability, reliability, cost, performance, privacy, and business impact.",
            "I review designs when systems, threats, users, or assumptions change.",
          ]}
        />

        <MiniQuiz
          title="B13.3 Mini Quiz: Security Engineering and Architecture"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional secure-system design. Include assets, users, data flows, trust boundaries, major risks, layered controls, control owners, test plans, success criteria, rollback, monitoring, maintenance, and open questions."
          tips={[
            "Use fictional organizations, systems, users, diagrams, logs, and requirements only.",
            "Do not test, scan, access, or modify any real system without explicit authorization.",
            "Explain why each control matches a specific risk or requirement.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Security architecture defines the overall structure, trust boundaries, dependencies, and control placement.",
            "Security engineering implements, tests, monitors, maintains, and improves those controls.",
            "Requirements should come before tools.",
            "Defense in depth reduces reliance on a single safeguard.",
            "Ownership, testing, maintenance, usability, and recovery are part of secure design.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}