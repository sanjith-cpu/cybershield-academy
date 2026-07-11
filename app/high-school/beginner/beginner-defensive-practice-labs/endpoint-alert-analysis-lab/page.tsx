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
  `${modulePath}/phishing-and-email-triage-lab`;
const nextLesson =
  `${modulePath}/network-traffic-review-lab`;

const vocab = [
  [
    "Endpoint",
    "A user device or managed system such as a laptop, desktop, tablet, server, or mobile device.",
  ],
  [
    "Endpoint alert",
    "A security notification about suspicious or policy-related activity on a managed device.",
  ],
  [
    "Process",
    "A running program or system task that may be reviewed as part of an endpoint investigation.",
  ],
  [
    "Containment",
    "An approved action used to limit possible harm, such as isolating a device or disabling a risky connection.",
  ],
  [
    "Device context",
    "Information about the device owner, role, location, operating system, recent changes, and normal activity.",
  ],
  [
    "Chain of events",
    "The ordered sequence of files, processes, user actions, alerts, and timestamps connected to an incident.",
  ],
];

const triageStages = [
  {
    title: "Review the alert",
    example:
      "Identify the device, user, severity, time, detection source, file, process, and reported action.",
  },
  {
    title: "Build context",
    example:
      "Compare recent changes, approved software, user activity, device role, and related endpoint events.",
  },
  {
    title: "Assess the chain",
    example:
      "Connect files, processes, network activity, account events, and timestamps without altering evidence.",
  },
  {
    title: "Choose response",
    example:
      "Close, monitor, isolate, collect more evidence, or escalate according to scope and playbooks.",
  },
];

const endpointRows = [
  {
    item: "Blocked suspicious file",
    source: "Security tool prevented execution after an email download",
    review:
      "Preserve the alert, review related events, and escalate according to the malware playbook.",
  },
  {
    item: "Approved software installer",
    source: "Signed application installed during a documented maintenance window",
    review:
      "Likely expected activity if the ticket, publisher, timing, and owner all match.",
  },
  {
    item: "Repeated script alerts",
    source: "Unknown script launches from a temporary folder on a student laptop",
    review:
      "High concern. Isolate through approved procedures and escalate for deeper review.",
  },
  {
    item: "High CPU usage",
    source: "Video editing application runs during an approved class project",
    review:
      "Unusual performance alone is not proof of malicious activity; verify context.",
  },
  {
    item: "Security tool disabled",
    source: "Protection stops unexpectedly with no approved change record",
    review:
      "Preserve evidence, verify device status, and escalate quickly.",
  },
];

const mistakes = [
  "Re-running a suspicious file to see what happens.",
  "Deleting the alert before related evidence is preserved.",
  "Isolating every device without considering business or instructional impact.",
  "Assuming a signed file is automatically safe.",
  "Ignoring approved maintenance tickets and user context.",
  "Requesting passwords or private personal data from the device owner.",
];

const quizQuestions = [
  {
    question: "What is an endpoint alert?",
    choices: [
      "A security notification about suspicious or policy-related activity on a managed device.",
      "A guaranteed confirmed incident.",
      "A type of password.",
      "A network cable.",
    ],
    answer: 0,
    explanation:
      "Endpoint alerts are starting points for review and must be interpreted with evidence and context.",
  },
  {
    question: "What is containment?",
    choices: [
      "An approved action used to limit possible harm, such as isolating a device.",
      "Deleting all logs.",
      "Sharing the suspicious file.",
      "Ignoring the alert.",
    ],
    answer: 0,
    explanation:
      "Containment limits exposure while preserving the opportunity for further investigation.",
  },
  {
    question: "Why is device context important?",
    choices: [
      "It helps explain whether activity matches the user, role, software, location, and recent changes.",
      "It removes the need for evidence.",
      "It proves every alert is malicious.",
      "It makes documentation unnecessary.",
    ],
    answer: 0,
    explanation:
      "Context helps distinguish expected behavior from activity that needs escalation.",
  },
  {
    question: "What should a learner do with a suspicious file in a defensive lab?",
    choices: [
      "Do not open or run it; preserve provided evidence and follow the approved playbook.",
      "Run it again for confirmation.",
      "Send it to friends.",
      "Upload it publicly.",
    ],
    answer: 0,
    explanation:
      "Suspicious files should not be executed during beginner defensive triage.",
  },
  {
    question: "Which is the strongest endpoint decision?",
    choices: [
      "Use evidence, context, scope, playbooks, and impact to choose close, monitor, isolate, or escalate.",
      "Isolate every device automatically.",
      "Close every low-severity alert immediately.",
      "Ignore approved change records.",
    ],
    answer: 0,
    explanation:
      "Defensive decisions should be evidence-based, proportionate, authorized, and documented.",
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
          Previous: B14.3 Phishing and Email Triage Lab
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
          Next: B14.5 Network Traffic Review Lab
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

function EndpointFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        The Endpoint Alert Triage Workflow
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Strong endpoint analysis connects the alert with device context, related
        events, impact, playbooks, and documented response.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {triageStages.map((stage, index) => (
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
        <span className="font-bold">Endpoint rule:</span> do not re-run, open, or
        share suspicious files. Preserve evidence and follow the approved
        response path.
      </div>
    </section>
  );
}

function FakeEndpointPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Endpoint Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Alert and Device Context Review
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares alert evidence, device context,
            expected activity, and the safest response.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {endpointRows.map((row) => (
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

function EndpointDecisionBoard() {
  const areas = [
    {
      name: "Alert details",
      saferQuestion:
        "Which file, process, user, device, time, severity, and detection source are involved?",
      saferChoice:
        "Record the alert exactly and preserve the original evidence.",
    },
    {
      name: "Device context",
      saferQuestion:
        "What is the device role, owner, location, normal use, and recent approved change history?",
      saferChoice:
        "Compare the alert with expected behavior and documented changes.",
    },
    {
      name: "Related activity",
      saferQuestion:
        "Are there connected files, processes, logins, downloads, or network events?",
      saferChoice:
        "Build a timeline and separate confirmed facts from assumptions.",
    },
    {
      name: "Response",
      saferQuestion:
        "Does the evidence justify close, monitor, isolate, collect more evidence, or escalate?",
      saferChoice:
        "Choose the least disruptive authorized action that safely addresses the risk.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Endpoint Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Endpoint Decision Board
      </h2>
      <p className="mt-3 text-slate-300">
        Strong endpoint decisions balance urgency, evidence, business impact,
        authority, and preservation.
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

export default function EndpointAlertAnalysisLabPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14.4 Endpoint Alert Analysis Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice reviewing fictional endpoint alerts, device context, files,
            processes, user activity, recent changes, containment decisions,
            documentation, and escalation.
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
          lessonTitle="Endpoint Alert Analysis Lab"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that endpoint alerts are starting points, not automatic proof of compromise.",
            "I will use fictional devices, users, files, processes, tickets, logs, and organizations only.",
            "I will not open, run, upload, or share suspicious files during analysis.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Same Alert Can Mean Very Different Things on Different Devices"
        >
          <p className="leading-8">
            A script on an administrator workstation, a video editor on a media
            laptop, and an installer during a maintenance window may require
            very different responses. Device role and user context matter.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Lab safety reminder:</span> all endpoint
            evidence is fictional. Do not download, execute, inspect, or
            distribute real suspicious files.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain endpoints, alerts, processes, containment, device context, and event chains.",
            "Analyze fictional file, process, user, device, ticket, and timeline evidence.",
            "Choose safe close, monitor, isolate, collect-evidence, or escalate decisions.",
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
          title="Endpoint Response Must Be Fast, Careful, and Proportionate"
        >
          <p className="leading-8">
            Delayed containment can allow harm to spread, but unnecessary
            isolation can interrupt classes, services, or business work.
            Defenders must use evidence and approved playbooks to balance both
            risks.
          </p>
        </SectionCard>

        <EndpointFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Build the Event Chain Before Choosing the Response"
        >
          <p className="leading-8">
            Analysts connect the alert to the user action, file source, process
            launch, child processes, device role, network activity, related
            logins, security-tool response, and recent approved changes.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Endpoint Analysis
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

        <EndpointDecisionBoard />
        <FakeEndpointPanel />

        <FakeDashboardCard
          title="Fake Endpoint Security Dashboard"
          subtitle="Training dashboard using fictional devices, users, files, processes, alerts, tickets, and response decisions."
          metrics={[
            {
              label: "Endpoint alerts reviewed",
              value: "34",
              note: "Fictional malware, script, software, protection, performance, and policy alerts.",
            },
            {
              label: "Devices isolated",
              value: "4",
              note: "Evidence justified approved containment and specialist escalation.",
            },
            {
              label: "Explained alerts",
              value: "22",
              note: "Approved software, maintenance, class projects, and duplicate detections.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unknown Script Launches From Temporary Folder"
          severity="High"
          time="3:18 PM"
          source="Fake Endpoint Protection"
          details="A fictional student laptop launches an unsigned script from a temporary folder shortly after an unexpected email attachment was downloaded."
          recommendation="Preserve the alert and timeline, isolate the device through the approved playbook, review related email and network evidence, and escalate."
        />

        <FakeLogPanel
          title="Fake Endpoint Event Log"
          logs={[
            "14:52:03 DOWNLOAD source='email_attachment' file='project_update.zip'",
            "14:55:41 EXTRACT path='temp/project_update'",
            "14:57:18 PROCESS parent='archive_viewer' child='script_runner'",
            "15:01:09 SCRIPT signed='false' location='temporary_folder'",
            "15:05:26 PROTECTION action='blocked' status='successful'",
            "15:11:44 NETWORK outbound='attempted' result='blocked'",
            "15:18:02 DECISION isolate='approved' escalate='incident_response'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should This Device Be Isolated?"
          evidence={[
            "A fictional device downloaded an unexpected email attachment.",
            "An unsigned script launched from a temporary folder.",
            "The endpoint tool blocked execution and an outbound connection attempt.",
            "No approved software ticket explains the activity.",
          ]}
          question="What is the strongest defensive action?"
          options={[
            "Preserve evidence, isolate through the approved playbook, review related email and network activity, document the case, and escalate.",
            "Run the script again to confirm the alert.",
            "Close the alert because execution was blocked.",
            "Delete all endpoint logs.",
          ]}
          bestAnswer={0}
          explanation="The related download, script launch, and outbound attempt justify containment and escalation even though the tool blocked part of the activity."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Endpoint Triage"
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
          title="Triage a Fictional Endpoint Alert Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Device Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Endpoints
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional queue includes blocked malware, approved software,
                unusual scripts, high resource use, disabled protection, and
                removable-media alerts.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Triage Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Record device, user, alert source, severity, and timestamp.</li>
                <li>Review file, process, user action, and recent approved changes.</li>
                <li>Build the related event chain and identify missing context.</li>
                <li>Assess device role, possible impact, and spread risk.</li>
                <li>Choose close, monitor, isolate, collect evidence, or escalate.</li>
                <li>Document reasoning, owner, approval, and follow-up.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Signed Installer Runs During an Approved Maintenance Window"
          scenario="A fictional endpoint alert detects a signed software installer that matches a current change ticket, approved publisher, expected device group, and scheduled time."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the ticket, publisher, device group, and timing, then document and close or downgrade according to policy.",
              outcome:
                "Best defensive choice. The evidence supports expected activity.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Isolate every device immediately without reviewing context.",
              outcome:
                "Risky. Unnecessary containment can disrupt approved work.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the alert without notes.",
              outcome:
                "Unsafe. Future analysts lose useful context.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="Endpoint Protection Is Disabled Without an Approved Change"
          scenario="A fictional managed laptop stops reporting to the endpoint security tool, and no maintenance ticket or owner explanation exists."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the last known evidence, verify device status through approved channels, apply authorized containment if needed, and escalate.",
              outcome:
                "Best defensive choice. Missing protection and missing context require prompt review.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore it because no malware alert appeared.",
              outcome:
                "Risky. Loss of visibility can itself be important evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ask the user for their password to inspect the device.",
              outcome:
                "Unsafe. Credentials must never be requested.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Endpoint Alert Analysis Checklist"
          items={[
            "I record the device, user, alert source, severity, time, file, and process.",
            "I review device role, ownership, recent changes, and expected activity.",
            "I connect related files, processes, logins, downloads, and network events.",
            "I preserve original evidence and do not run suspicious files.",
            "I choose proportionate, authorized containment and escalation actions.",
            "I consider service, classroom, user, and business impact.",
            "I document reasoning, owner, approval, timestamps, and follow-up.",
          ]}
        />

        <MiniQuiz
          title="B14.4 Mini Quiz: Endpoint Alert Analysis"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional endpoint alert report. Include device, user, role, alert source, severity, timeline, file, process chain, recent changes, related login or network evidence, impact, containment decision, escalation path, owner, and final case notes."
          tips={[
            "Use fictional devices, users, files, processes, alerts, tickets, and organizations only.",
            "Do not include real malware, suspicious downloads, credentials, or live endpoint data.",
            "Explain why the final action was proportionate to the evidence and impact.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Endpoint alerts require evidence and context before a conclusion is made.",
            "Device role, user activity, recent changes, files, processes, and related events all matter.",
            "Suspicious files should never be re-run, opened, or shared during beginner triage.",
            "Containment should be authorized, proportionate, and supported by playbooks.",
            "Clear timelines, preserved evidence, documentation, and escalation support effective response.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}