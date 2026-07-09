import type { ReactNode } from "react";
import Link from "next/link";
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

const modulePath = "/high-school/beginner/networking-basics";
const previousLesson = `${modulePath}/home-school-and-public-network-safety`;
const moduleTest = `${modulePath}/module-test`;

const objectives = [
  "Read a simple network diagram and identify major parts like devices, Wi-Fi, routers, DNS, and destinations.",
  "Explain how information moves through a beginner-level network path using safe, fake examples.",
  "Spot missing context in a diagram before making a defensive decision.",
  "Write a short, professional recommendation for improving a fictional network diagram.",
];

const vocab = [
  ["Network diagram", "A visual map showing devices, connections, network areas, and communication paths."],
  ["Endpoint", "A device that joins a network, such as a laptop, phone, tablet, printer, or server."],
  ["Gateway", "A device or service that helps traffic move from one network area to another."],
  ["Boundary", "A separation between network areas, such as student Wi-Fi, guest Wi-Fi, and internal school systems."],
  ["Traffic path", "The route information follows from a source device toward a destination service."],
  ["Diagram gap", "Missing information that should be clarified before a defender makes a conclusion."],
];

const mistakes = [
  "Assuming a diagram shows everything. Real diagrams are often simplified, outdated, or missing labels.",
  "Jumping to a conclusion from one line or icon. Defenders compare diagrams, logs, user reports, and known rules.",
  "Ignoring boundaries between guest, student, staff, and internal systems. Boundaries are part of safe network design.",
  "Using diagrams as permission to touch real systems. In CyberShield, diagrams are for fake-data learning only.",
];

const reviewSteps = [
  {
    number: "1",
    title: "Identify the source",
    text: "Start with the device or user that begins the request, such as a student laptop in a classroom.",
  },
  {
    number: "2",
    title: "Trace the path",
    text: "Follow the connection from device to Wi-Fi, router, DNS, filter, and destination.",
  },
  {
    number: "3",
    title: "Check boundaries",
    text: "Notice where the traffic crosses from one network area to another, such as guest to internal.",
  },
  {
    number: "4",
    title: "Compare evidence",
    text: "Use fake logs, alerts, and dashboard data to decide what the diagram does and does not prove.",
  },
  {
    number: "5",
    title: "Write a recommendation",
    text: "Explain the safest next step clearly, without blaming people or guessing beyond the evidence.",
  },
];

const diagramNodes = [
  {
    label: "Student Laptop",
    detail: "Endpoint on student Wi-Fi",
    badge: "Source",
  },
  {
    label: "Student Wi-Fi",
    detail: "Managed learning network",
    badge: "Access",
  },
  {
    label: "Router / Gateway",
    detail: "Moves traffic between areas",
    badge: "Boundary",
  },
  {
    label: "DNS Filter",
    detail: "Looks up approved names",
    badge: "Control",
  },
  {
    label: "Learning Site",
    detail: "Approved class platform",
    badge: "Destination",
  },
];

const quizQuestions = [
  {
    question: "What should a defender do first when reviewing a beginner network diagram?",
    choices: [
      "Identify the source, destination, and main path shown in the diagram.",
      "Assume every unlabeled line is dangerous.",
      "Try to access every device on the diagram.",
      "Ignore labels and only look at the colors.",
    ],
    answer: 0,
    explanation:
      "A safe review starts by identifying the source, destination, and visible path. Defenders avoid guessing or touching real systems.",
  },
  {
    question: "A diagram shows guest Wi-Fi separated from internal school systems. What is that separation called?",
    choices: ["A network boundary", "A password reset", "A browser cache", "A file extension"],
    answer: 0,
    explanation:
      "A network boundary separates areas such as guest, student, staff, or internal systems. Boundaries help reduce risk.",
  },
  {
    question: "Which statement is safest when a diagram is missing labels?",
    choices: [
      "The missing labels should be clarified before making strong conclusions.",
      "Missing labels prove the network is unsafe.",
      "Missing labels mean students should test the network themselves.",
      "Missing labels do not matter in security work.",
    ],
    answer: 0,
    explanation:
      "Missing information is a diagram gap. Defenders document the gap and ask for clarification instead of guessing.",
  },
  {
    question: "What is a professional recommendation supposed to do?",
    choices: [
      "Explain a safe next step using evidence and clear reasoning.",
      "Blame a person for every problem on the diagram.",
      "Include instructions for bypassing network rules.",
      "Reveal private details from real students.",
    ],
    answer: 0,
    explanation:
      "A professional recommendation should be evidence-based, respectful, defensive, and safe. It should not include bypassing or private data.",
  },
  {
    question: "Which activity follows CyberShield safety rules?",
    choices: [
      "Review a fake network diagram and write a defensive summary.",
      "Scan a school network to fill in missing labels.",
      "Try to reach blocked internal systems from guest Wi-Fi.",
      "Collect classmates' device information for a real map.",
    ],
    answer: 0,
    explanation:
      "CyberShield labs use fake diagrams and fake evidence only. Students should not scan, probe, bypass, or collect private information.",
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
        href={moduleTest}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Finish Module B4</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B4.6
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
          href={moduleTest}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Start B4 Module Test
        </Link>
      </div>
    </section>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function NetworkDiagramReviewVisual() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Fake classroom network diagram review</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This diagram is intentionally simple. Your job is to trace the path, identify boundaries, and notice what
            information is missing before making a recommendation.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Fake Data Only
        </span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {diagramNodes.map((node, index) => (
          <div key={node.label} className="relative rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                {index + 1}
              </div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-100">
                {node.badge}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{node.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{node.detail}</p>
            {index < diagramNodes.length - 1 && (
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-center text-sm font-bold text-cyan-200 lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:mt-0 lg:-translate-y-1/2">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
          <h3 className="font-bold">What the diagram supports</h3>
          <p className="mt-2 text-sm leading-6">The student laptop reaches an approved learning site through managed school services.</p>
        </div>
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
          <h3 className="font-bold">What still needs context</h3>
          <p className="mt-2 text-sm leading-6">The diagram does not show who owns every device or whether the diagram is current.</p>
        </div>
        <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
          <h3 className="font-bold">What students must not do</h3>
          <p className="mt-2 text-sm leading-6">Do not test real networks, collect real device data, or try to bypass boundaries.</p>
        </div>
      </div>
    </section>
  );
}

function ReviewSteps() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Five-step network diagram review method</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {reviewSteps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {step.number}
            </div>
            <h3 className="mt-4 font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabWorksheet() {
  const tasks = [
    "Label the source device, destination service, and any visible network controls.",
    "Circle the boundary between the student network and anything outside it.",
    "List two things the diagram proves and two things it does not prove.",
    "Compare the diagram to the fake logs and dashboard before choosing a recommendation.",
    "Write a three-sentence defender summary using cautious, evidence-based language.",
  ];

  return (
    <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Safe Defensive Lab</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Network diagram review lab</h2>
      <p className="mt-3 text-cyan-50">
        Use the fake diagram and fake evidence on this page. Do not collect information from a real network, school
        system, classmate device, router, or Wi-Fi environment.
      </p>
      <div className="mt-5 grid gap-3">
        {tasks.map((task, index) => (
          <div key={task} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 text-cyan-50">
            <span className="mr-3 font-black text-cyan-300">Lab Step {index + 1}:</span>
            {task}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetworkDiagramReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                Beginner Module B4 • Lesson 7
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Network Diagram Review Lab
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
                A network diagram helps defenders explain how devices, networks, names, controls, and destinations
                connect. In this lab, you will review a fake classroom network map and practice cautious defensive
                reasoning.
              </p>
              <div className="mt-8">
                <TopNav />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 grid gap-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-300">Focus</span>
                  <span className="font-bold text-white">Diagram analysis</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-300">Visual</span>
                  <span className="font-bold text-white">Fake network map</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-300">Lab</span>
                  <span className="font-bold text-white">Defender summary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Next</span>
                  <span className="font-bold text-cyan-200">B4 Module Test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B4 Networking Basics"
          lessonTitle="B4.7 Network Diagram Review Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain what a network is at a beginner level.",
            "I understand that IP addresses, DNS, routers, switches, Wi-Fi, and packets are basic network concepts.",
            "I know CyberShield labs use fake diagrams and fake data only.",
            "I am ready to make careful conclusions instead of guessing from incomplete evidence.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Why defenders use diagrams">
          <p className="leading-8">
            Cybersecurity defenders often need to explain complicated systems clearly. A diagram can help a team see
            what is connected, where traffic is expected to flow, and where a boundary or control exists. But a diagram
            is not perfect evidence by itself. A professional defender treats it as one clue and compares it with logs,
            tickets, alerts, policies, and trusted staff knowledge.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="By the end of this lab, you should be able to...">
          <div className="grid gap-3 md:grid-cols-2">
            {objectives.map((objective) => (
              <div key={objective} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <span className="mr-3 font-black text-cyan-300">✓</span>
                {objective}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Diagrams turn technical confusion into safer decisions">
          <p className="leading-8">
            Beginner networking is not about touching real systems. It is about understanding the shape of a network so
            you can ask better questions. When defenders read diagrams carefully, they can explain where a problem might
            be, what evidence is missing, and who should help next. That keeps students, school systems, and personal
            devices safer.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="A good diagram review separates facts, gaps, and recommendations">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black">Facts</h3>
              <p className="mt-2 text-sm leading-6">What the diagram and fake evidence clearly show.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black">Gaps</h3>
              <p className="mt-2 text-sm leading-6">What is missing, unclear, outdated, or needs trusted confirmation.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-100">
              <h3 className="font-black">Recommendations</h3>
              <p className="mt-2 text-sm leading-6">The safest next step based on evidence, boundaries, and rules.</p>
            </div>
          </div>
        </SectionCard>

        <NetworkDiagramReviewVisual />

        <SectionCard eyebrow="Key Vocabulary" title="Diagram words defenders use">
          <div className="grid gap-3 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <h3 className="font-bold text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ReviewSteps />

        <SectionCard eyebrow="Common Mistakes" title="What to avoid during a diagram review">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <LabWorksheet />

        <div className="grid gap-8 lg:grid-cols-2">
          <FakeDashboardCard
            title="Fake Network Review Dashboard"
            subtitle="Fictional classroom network snapshot for diagram analysis practice."
            metrics={[
              { label: "Mapped devices", value: "5", note: "Laptop, Wi-Fi, gateway, DNS filter, learning site." },
              { label: "Known boundaries", value: "2", note: "Student Wi-Fi to gateway, gateway to web services." },
              { label: "Open questions", value: "3", note: "Diagram date, device owner labels, and filter rule context." },
            ]}
          />

          <FakeAlertCard
            title="Diagram context needs confirmation"
            severity="Low"
            time="09:25"
            source="CyberShield Training Dashboard"
            details="The fake diagram shows an expected path to a learning website, but it does not show whether the map is current or whether all device labels were verified."
            recommendation="Document the diagram gaps and ask a trusted technology staff member or instructor to confirm labels before making a final conclusion."
          />
        </div>

        <FakeLogPanel
          title="Fake Diagram Review Logs"
          logs={[
            "09:20 diagram_review opened: classroom-network-map-v3.fake",
            "09:21 source identified: student-laptop-07.fake",
            "09:22 destination identified: learning.example",
            "09:23 boundary noted: student-wifi -> gateway",
            "09:24 control noted: dns-filter.training.local",
            "09:25 gap recorded: diagram date not confirmed",
            "09:26 safe recommendation drafted: verify labels before final decision",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What is the safest conclusion?"
          evidence={[
            "The fake diagram shows student-laptop-07 connecting through student Wi-Fi.",
            "The fake logs show a DNS lookup for learning.example and a successful policy check.",
            "The dashboard says the diagram date and some labels are not confirmed.",
            "No fake alert says a real incident has happened.",
          ]}
          question="Which conclusion is most responsible?"
          options={[
            "The diagram supports an expected learning-site connection, but missing labels should be confirmed before final conclusions.",
            "The student laptop is definitely unsafe because the diagram has missing labels.",
            "Students should test the network to fill in the missing labels.",
            "The diagram proves the whole school network is perfectly secure.",
          ]}
          bestAnswer={0}
          explanation="The safest conclusion uses the evidence without exaggerating it. The connection looks expected in the fake data, but missing context should be documented and confirmed by trusted staff."
        />

        <ScenarioDecisionLab
          title="The diagram is missing a device label"
          scenario="A classmate says the diagram has an unlabeled box between the Wi-Fi and the learning website. They want to find out what it is by testing real network connections. What should you do?"
          choices={[
            {
              label: "A",
              response: "Use only the fake lab materials, mark the unlabeled box as a diagram gap, and ask a teacher or technology staff member for clarification.",
              outcome: "Best choice. This keeps the work defensive, evidence-based, and within permission boundaries.",
              tone: "best",
            },
            {
              label: "B",
              response: "Guess that the unlabeled box is dangerous and write that as the final answer.",
              outcome: "Caution. It is okay to notice uncertainty, but defenders should not turn a guess into a final conclusion.",
              tone: "caution",
            },
            {
              label: "C",
              response: "Try to test the real school network to identify the device.",
              outcome: "Risk. Students should not test, scan, probe, bypass, or investigate real networks. Ask trusted staff instead.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="B4.7 Defender Checklist"
          items={[
            "I can trace a simple fake network path from source to destination.",
            "I can identify endpoints, gateways, boundaries, controls, and destinations on a beginner diagram.",
            "I can separate confirmed facts from missing diagram context.",
            "I can write a safe recommendation without guessing or blaming.",
            "I know not to test, scan, or collect information from real networks for a CyberShield lab.",
          ]}
        />

        <MiniQuiz title="B4.7 Mini Scored Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a beginner network review note"
          prompt="Write a short network review note for the fake classroom diagram. Include one confirmed fact, one diagram gap, and one safe recommendation. Keep it professional and defensive."
          tips={[
            "Use evidence words: shows, suggests, does not confirm.",
            "Avoid blame or dramatic claims.",
            "Recommend trusted staff review when context is missing.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Network diagrams help defenders explain connections, boundaries, and controls.",
            "A diagram is useful evidence, but it may be incomplete or outdated.",
            "Good defenders separate facts, gaps, and recommendations.",
            "CyberShield labs use fake diagrams only; students should not test real networks.",
            "The next step is the B4 module test covering beginner networking concepts.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}