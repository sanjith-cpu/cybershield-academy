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
  "/high-school/beginner/beginner-defensive-practice-labs";
const previousLesson =
  `${modulePath}/endpoint-alert-analysis-lab`;
const nextLesson =
  `${modulePath}/backup-and-recovery-validation-lab`;

const vocab = [
  [
    "Network traffic",
    "The flow of data between devices, services, applications, and networks.",
  ],
  [
    "Connection record",
    "A summary showing details such as source, destination, service, time, direction, and connection result.",
  ],
  [
    "Baseline",
    "A documented pattern of expected activity used to compare current behavior with normal operations.",
  ],
  [
    "Segmentation",
    "Separating systems or network areas to limit unnecessary communication and reduce risk.",
  ],
  [
    "Allowed service",
    "A network service that is approved for a specific system, user group, or business purpose.",
  ],
  [
    "Anomaly",
    "Activity that differs from the expected pattern and requires context before it can be judged.",
  ],
];

const workflowStages = [
  {
    title: "Identify the connection",
    example:
      "Review the fictional source, destination, service, direction, timestamp, volume, and result.",
  },
  {
    title: "Compare with the baseline",
    example:
      "Check whether the system normally communicates with that destination, service, and schedule.",
  },
  {
    title: "Add context",
    example:
      "Review approved changes, application needs, user activity, asset role, and related alerts.",
  },
  {
    title: "Choose and document action",
    example:
      "Close, monitor, investigate, restrict, or escalate according to evidence, scope, and policy.",
  },
];

const trafficRows = [
  {
    item: "Nightly backup traffic",
    source: "Large transfer from the file server to the approved backup service at the scheduled time",
    review:
      "Likely expected if the destination, schedule, ticket, and backup job all match.",
  },
  {
    item: "Student laptop to admin service",
    source: "Repeated connection attempts to a restricted management service",
    review:
      "Investigate because the device role does not normally require this access.",
  },
  {
    item: "New cloud destination",
    source: "Teacher device contacts a newly approved learning platform",
    review:
      "Verify the change record and application owner before classifying the activity.",
  },
  {
    item: "Blocked outbound connection",
    source: "Endpoint alert and firewall record show a denied attempt after a suspicious script event",
    review:
      "High concern. Preserve the related evidence and escalate the connected case.",
  },
  {
    item: "Software update traffic",
    source: "Managed devices contact the approved update service during the maintenance window",
    review:
      "Likely expected when source group, destination, certificate, and schedule match.",
  },
];

const mistakes = [
  "Treating every unusual connection as malicious without reviewing context.",
  "Assuming high data volume automatically proves data theft.",
  "Ignoring source and destination roles when reviewing traffic.",
  "Changing firewall or segmentation rules without approval and rollback planning.",
  "Deleting connection records before related evidence is preserved.",
  "Using live packet capture or scanning tools outside an explicitly authorized lab.",
];

const quizQuestions = [
  {
    question: "What is a network baseline?",
    choices: [
      "A documented pattern of expected activity used for comparison.",
      "A guarantee that every future connection is safe.",
      "A list of passwords.",
      "A type of endpoint malware.",
    ],
    answer: 0,
    explanation:
      "A baseline helps defenders compare current activity with expected systems, services, schedules, and communication patterns.",
  },
  {
    question: "Why is an anomaly not automatic proof of an attack?",
    choices: [
      "Because approved changes, new applications, maintenance, and legitimate user activity may explain it.",
      "Because unusual activity is always harmless.",
      "Because logs cannot provide evidence.",
      "Because network traffic should never be reviewed.",
    ],
    answer: 0,
    explanation:
      "Anomalies require context before a reliable conclusion can be made.",
  },
  {
    question: "What is segmentation?",
    choices: [
      "Separating systems or network areas to limit unnecessary communication.",
      "Giving every system access to every other system.",
      "Deleting network logs.",
      "Turning off authentication.",
    ],
    answer: 0,
    explanation:
      "Segmentation reduces unnecessary access and can limit the spread of an incident.",
  },
  {
    question: "Which traffic record deserves the most concern?",
    choices: [
      "A student laptop repeatedly attempting to reach a restricted administrator service with no approved need.",
      "A scheduled backup to the approved backup destination.",
      "A managed update during the documented maintenance window.",
      "An expected classroom application connection.",
    ],
    answer: 0,
    explanation:
      "The device role, restricted service, repeated attempts, and missing business need justify investigation.",
  },
  {
    question: "What is the strongest response to suspicious network activity?",
    choices: [
      "Preserve evidence, compare with context and related alerts, document findings, and escalate according to policy.",
      "Change production firewall rules immediately without approval.",
      "Delete the logs.",
      "Assume the connection is harmless.",
    ],
    answer: 0,
    explanation:
      "Network response should be evidence-based, authorized, proportionate, and documented.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B14</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B14.4 Endpoint Alert Analysis Lab
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
          Next: B14.6 Backup and Recovery Validation Lab
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

function NetworkFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Network Traffic Review Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong network review connects connection details with baselines,
        system roles, approved changes, related alerts, and documented action.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {workflowStages.map((stage, index) => (
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
        <span className="font-bold">Network rule:</span> unusual traffic deserves
        review, but only evidence and context can explain what it means.
      </div>
    </section>
  );
}

function FakeTrafficPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Network Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Connection and Baseline Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares source, destination, service, timing,
            expected purpose, related evidence, and defensive action.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {trafficRows.map((row) => (
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

function NetworkDecisionBoard() {
  const areas = [
    {
      name: "Connection details",
      saferQuestion:
        "Which source, destination, service, direction, time, volume, and result are involved?",
      saferChoice:
        "Record the connection accurately and preserve the original summary.",
    },
    {
      name: "Expected purpose",
      saferQuestion:
        "Does the source system normally need this destination, service, schedule, and data flow?",
      saferChoice:
        "Compare the traffic with the asset role, baseline, approved application, and change records.",
    },
    {
      name: "Related evidence",
      saferQuestion:
        "Are there connected endpoint, identity, email, firewall, or backup events?",
      saferChoice:
        "Build a timeline and connect the evidence without changing the source records.",
    },
    {
      name: "Defensive response",
      saferQuestion:
        "Does the evidence justify closing, monitoring, investigating, restricting, or escalating?",
      saferChoice:
        "Choose an authorized, proportionate action and document the reason, owner, and follow-up.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Network Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Network Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        A connection becomes meaningful only when it is compared with system
        roles, expected services, timing, related evidence, and business context.
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
                Review question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Strong defensive action
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetworkTrafficReviewLabPage() {
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
              Module B14
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.5 Network Traffic Review Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing fictional connection records, system roles,
            services, timing, traffic volume, baselines, segmentation, approved
            changes, related alerts, and escalation decisions.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B14: Beginner Defensive Practice Labs"
          lessonTitle="Network Traffic Review Lab"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that an unusual connection is evidence to review, not automatic proof of an attack.",
            "I will use fictional devices, services, networks, traffic summaries, logs, and organizations only.",
            "I will not scan, capture, test, block, or modify real network traffic or systems.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Large Data Transfer Can Be a Backup, an Update, a Class Project, or a Security Incident"
        >
          <p className="leading-8">
            Network evidence gains meaning only when defenders understand which
            systems are involved, what services they use, when the activity
            occurred, and whether the connection matches an approved purpose.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> all traffic
            records and networks in this lesson are fictional. Do not use packet
            capture, scanning, firewall, or testing tools on real networks
            without explicit authorization.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain network traffic, connection records, baselines, segmentation, allowed services, and anomalies.",
            "Compare fictional source, destination, service, timing, volume, and result with expected activity.",
            "Choose safe close, monitor, investigate, restrict, or escalate decisions based on evidence and context.",
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
          title="Network Context Helps Defenders Find Both Risk and Normal Operations"
        >
          <p className="leading-8">
            Without context, defenders may miss suspicious communication or
            disrupt legitimate backups, updates, cloud applications, and
            classroom services. Reliable review reduces both errors.
          </p>
        </SectionCard>

        <NetworkFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Source, Destination, Service, Time, and Purpose Belong Together"
        >
          <p className="leading-8">
            A useful network review asks who initiated the connection, which
            service was used, whether the systems normally communicate, what
            changed recently, how much data moved, and which related alerts
            support or contradict the concern.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Network Traffic Review
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

        <NetworkDecisionBoard />
        <FakeTrafficPanel />

        <FakeDashboardCard
          title="Fake Network Traffic Dashboard"
          subtitle="Training dashboard using fictional systems, connection summaries, services, baselines, segmentation rules, tickets, and response decisions."
          metrics={[
            {
              label: "Connections reviewed",
              value: "58",
              note: "Fictional backup, update, learning-platform, management, email, and endpoint traffic.",
            },
            {
              label: "Anomalies investigated",
              value: "11",
              note: "Unexpected services, unfamiliar destinations, unusual schedules, and denied connections.",
            },
            {
              label: "Confirmed expected activity",
              value: "39",
              note: "Approved backups, updates, class applications, and documented maintenance.",
            },
          ]}
        />

        <FakeAlertCard
          title="Student Laptop Repeatedly Contacts Restricted Admin Service"
          severity="High"
          time="11:42 AM"
          source="Fake Network Monitoring"
          details="A fictional student laptop makes repeated denied connection attempts to a restricted management service normally used only by administrator devices."
          recommendation="Preserve the connection records, review related endpoint and identity evidence, verify the device role, document the timeline, and escalate."
        />

        <FakeLogPanel
          title="Fake Network Connection Log"
          logs={[
            "11:18:03 SOURCE device='student_laptop_24' segment='student_vlan'",
            "11:19:27 DESTINATION service='admin_management' segment='restricted'",
            "11:21:41 CONNECTION attempts='12' result='denied'",
            "11:24:18 BASELINE expected='false' business_need='none'",
            "11:28:52 ENDPOINT related_alert='unsigned_script_blocked'",
            "11:35:06 IDENTITY user_login='normal' privilege='standard'",
            "11:42:11 DECISION investigate='true' escalate='network_and_endpoint'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Does This Traffic Need Escalation?"
          evidence={[
            "A fictional student laptop is in the student network segment.",
            "It makes 12 denied attempts to a restricted administrator service.",
            "No approved class application or change ticket requires the service.",
            "A related endpoint alert shows an unsigned script was blocked.",
          ]}
          question="What is the strongest defensive action?"
          options={[
            "Preserve the network and endpoint evidence, document the timeline, verify context, and escalate the connected case.",
            "Ignore the traffic because every connection was denied.",
            "Allow the restricted service so the attempts stop.",
            "Delete the connection records.",
          ]}
          bestAnswer={0}
          explanation="The unusual service, repeated attempts, missing business need, and related endpoint alert justify escalation even though the connections were blocked."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Network Review"
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
          eyebrow="Safe Practice Lab"
          title="Review a Fictional Network Activity Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Traffic Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Network
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional queue includes backup transfers, software updates,
                cloud application traffic, restricted-service attempts, blocked
                outbound connections, and scheduled administrative access.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Record source, destination, service, direction, time, volume, and result.</li>
                <li>Identify the source and destination roles and network segments.</li>
                <li>Compare the connection with the approved baseline and change records.</li>
                <li>Review related identity, endpoint, email, firewall, and backup evidence.</li>
                <li>Choose close, monitor, investigate, restrict, or escalate.</li>
                <li>Document reasoning, owner, approval, timestamps, and follow-up.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="Large Nightly Transfer Matches the Approved Backup Schedule"
          scenario="A fictional file server sends a large amount of data to the approved backup service during the scheduled backup window, and the backup job reports success."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the destination, schedule, job status, and ticket, then document and close or mark as expected.",
              outcome:
                "Best defensive choice. The evidence supports normal backup activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Block the destination immediately because the data volume is high.",
              outcome:
                "Risky. High volume alone does not prove malicious activity.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the backup records.",
              outcome:
                "Unsafe. Evidence should be preserved and documented.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A New Cloud Destination Appears After an Approved Application Launch"
          scenario="A fictional teacher device begins contacting a new cloud service on the same day an approved learning platform is deployed."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the change ticket, application owner, destination, service, and expected device group before classifying the traffic.",
              outcome:
                "Best defensive choice. The timing suggests a possible approved explanation that still requires confirmation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the destination is malicious because it is new.",
              outcome:
                "Risky. New activity can be legitimate after an approved change.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Change production firewall rules without approval.",
              outcome:
                "Unsafe. Network changes require authorization, testing, documentation, and rollback planning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Network Traffic Review Checklist"
          items={[
            "I record source, destination, service, direction, time, volume, and result.",
            "I identify system roles, owners, segments, and expected communication needs.",
            "I compare activity with baselines, change records, and approved applications.",
            "I review related identity, endpoint, email, firewall, and backup evidence.",
            "I separate confirmed facts, assumptions, and missing context.",
            "I choose authorized, proportionate close, monitor, investigate, restrict, or escalate actions.",
            "I preserve records and document reasoning, owners, approvals, and follow-up.",
          ]}
        />

        <MiniQuiz
          title="B14.5 Mini Quiz: Network Traffic Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional network traffic review report. Include source, destination, service, direction, timestamp, volume, connection result, asset roles, network segments, expected baseline, related alerts, approved changes, risk decision, owner, escalation path, and final case notes."
          tips={[
            "Use fictional devices, services, networks, connection records, tickets, and organizations only.",
            "Do not include real IP addresses, live traffic captures, credentials, or private network details.",
            "Explain how the baseline and related evidence support the final decision.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Network traffic must be interpreted with source, destination, service, time, volume, and purpose.",
            "Anomalies require investigation but are not automatic proof of malicious activity.",
            "Baselines and approved changes help explain expected communication.",
            "Segmentation limits unnecessary access and can reduce incident spread.",
            "Strong network decisions preserve evidence, connect related alerts, follow authorization, and document reasoning.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}