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
const previousLesson = `${modulePath}/dns-and-website-names`;
const nextLesson = `${modulePath}/home-school-and-public-network-safety`;

const vocab = [
  ["Packet", "A small piece of network communication. Large messages are split into smaller pieces so networks can move them efficiently."],
  ["Traffic", "The flow of network communication between devices, services, and destinations."],
  ["Source", "Where a packet or network request appears to come from in a fake training example."],
  ["Destination", "Where a packet or network request is trying to go in a fake training example."],
  ["Protocol", "A set of rules for communication. Beginner examples include web, DNS, and basic network service concepts."],
  ["Metadata", "Context about the communication, such as time, source, destination, and result. It is not the same as reading private content."],
];

const mistakes = [
  "Thinking one packet explains the whole story. Defenders usually need context from several events before making a conclusion.",
  "Confusing traffic metadata with private message contents. Beginner network review focuses on safe fake context, not spying on real people.",
  "Assuming high traffic always means danger. Updates, backups, video calls, and classroom apps can create normal traffic spikes.",
  "Jumping from 'unusual' to 'malicious' too quickly. A defender documents what is known, what is unknown, and what needs trusted review.",
];

const trafficRows = [
  { time: "10:04", source: "student-laptop-04", destination: "learning.example", type: "HTTPS", result: "Allowed", note: "Expected class site" },
  { time: "10:05", source: "student-laptop-04", destination: "dns-filter.example", type: "DNS", result: "Allowed", note: "Name lookup completed" },
  { time: "10:06", source: "lab-printer-01", destination: "update.example", type: "Update", result: "Allowed", note: "Scheduled firmware check" },
  { time: "10:07", source: "guest-phone-09", destination: "internal-gradebook.example", type: "Internal access", result: "Blocked", note: "Guest network should not reach internal systems" },
];

const quizQuestions = [
  {
    question: "What is a packet in a beginner networking lesson?",
    choices: [
      "A small piece of network communication that helps move data across a network.",
      "A full private conversation that defenders should read.",
      "A password storage tool.",
      "A way to bypass school network rules.",
    ],
    answer: 0,
    explanation:
      "Packets are small pieces of network communication. CyberShield uses fake traffic examples to teach defensive reasoning safely.",
  },
  {
    question: "Which traffic clue is usually useful for beginner defensive analysis?",
    choices: [
      "Time, source, destination, type, and result in a fake log.",
      "A student's private messages.",
      "Someone's real password.",
      "Instructions for forcing a blocked connection to work.",
    ],
    answer: 0,
    explanation:
      "Beginner defensive traffic analysis focuses on safe metadata in fake logs, not private content, passwords, or bypassing.",
  },
  {
    question: "A fake guest device tries to reach an internal gradebook and is blocked. What is the safest conclusion?",
    choices: [
      "The block may be a normal protective control, so document the event and do not bypass it.",
      "The guest should try another network until it works.",
      "The gradebook is definitely broken.",
      "The student should share instructions for reaching it.",
    ],
    answer: 0,
    explanation:
      "Guest networks are often separated from internal systems. A block can be a protective control working correctly.",
  },
  {
    question: "Why should defenders avoid judging from one packet or one event only?",
    choices: [
      "One event may not show enough context to understand what happened.",
      "One event always proves a person is guilty.",
      "Packets are never useful.",
      "Logs should always be ignored.",
    ],
    answer: 0,
    explanation:
      "Defenders connect multiple pieces of evidence and avoid overreacting. Context matters.",
  },
  {
    question: "Which action follows CyberShield safety rules?",
    choices: [
      "Review fake packet and traffic logs to choose a safe defensive response.",
      "Capture traffic from a real school network without permission.",
      "Try to bypass a guest network block.",
      "Ask classmates to send real passwords for a lab.",
    ],
    answer: 0,
    explanation:
      "CyberShield labs use fake data only. Real network monitoring, bypassing, and collecting passwords are not allowed.",
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
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B4</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B4.4
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
          Next: B4.6 Home, School, and Public Network Safety
        </Link>
      </div>
    </section>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function PacketFlowDiagram() {
  const steps = [
    {
      title: "1. Message is prepared",
      detail: "A device needs to send or request something, such as a fake classroom webpage.",
      clue: "Defenders ask: Is this expected for the user's role and time?",
    },
    {
      title: "2. Data is split into packets",
      detail: "The communication can be divided into smaller pieces so it can move through the network.",
      clue: "Defenders review safe metadata like source, destination, type, and result.",
    },
    {
      title: "3. Network devices move traffic",
      detail: "Switches, routers, Wi-Fi, and filters help send packets toward the destination.",
      clue: "Defenders check whether policy allowed, blocked, or flagged the activity.",
    },
    {
      title: "4. Evidence is reviewed carefully",
      detail: "Fake logs and dashboards help students practice reading traffic without touching real networks.",
      clue: "Defenders avoid guessing and document what the evidence actually says.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Packet and traffic flow from a defender viewpoint</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Beginners do not need to memorize every technical detail. The important idea is that network communication leaves safe clues in fake training logs: where it started, where it tried to go, what type it was, and whether the result was expected.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail}</p>
            <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
              <span className="font-black">Defender clue:</span> {step.clue}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrafficTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Traffic Table</p>
      <h2 className="mt-2 text-2xl font-bold text-white">A beginner traffic view focuses on safe context</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        This table is fictional. It shows how defenders can review basic traffic metadata without collecting private student information or testing real systems.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="grid grid-cols-6 gap-0 border-b border-slate-800 bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
          <span>Time</span>
          <span className="col-span-1">Source</span>
          <span className="col-span-1">Destination</span>
          <span>Type</span>
          <span>Result</span>
          <span>Note</span>
        </div>
        {trafficRows.map((row) => (
          <div key={`${row.time}-${row.source}-${row.destination}`} className="grid grid-cols-6 gap-0 border-b border-slate-800 px-4 py-4 text-sm text-slate-300 last:border-b-0">
            <span className="font-mono font-bold text-cyan-100">{row.time}</span>
            <span>{row.source}</span>
            <span>{row.destination}</span>
            <span>{row.type}</span>
            <span className={row.result === "Blocked" ? "font-bold text-yellow-200" : "font-bold text-emerald-200"}>{row.result}</span>
            <span>{row.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MetadataBreakdown() {
  const zones = [
    ["Time", "When the event happened. Helpful for building a timeline."],
    ["Source", "The fake device or account the event appears to start from."],
    ["Destination", "The fake service, site, or internal resource the traffic tried to reach."],
    ["Type", "The category of communication, such as web, DNS, update, or internal access."],
    ["Result", "Whether a fake control allowed, blocked, warned, or logged the event."],
    ["Context", "Expected classwork, device role, network type, and whether trusted staff need to review it."],
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Traffic metadata is context, not a full story</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {zones.map(([label, description]) => (
          <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-lg font-black text-cyan-200">{label}</h3>
            <p className="mt-3 leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PacketsAndNetworkTrafficConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.5
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Packets and Network Traffic Concepts
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Network communication does not move as one giant object. It is broken into smaller pieces and creates traffic patterns. Defenders use safe metadata, fake logs, and context to understand what happened without guessing or invading privacy.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Focus</span>
                  <span className="font-bold text-white">Traffic basics</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Visual</span>
                  <span className="font-bold text-white">Packet flow model</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Lab</span>
                  <span className="font-bold text-white">Fake traffic review</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Safety rule</span>
                  <span className="font-bold text-cyan-200">Fake logs only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B4: Networking Basics"
          lessonTitle="B4.5 Packets and Network Traffic Concepts"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain that devices use networks to reach services and websites.",
            "I understand DNS helps connect names to destinations.",
            "I will only review fake traffic examples and will not inspect real network traffic.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can read basic traffic clues.">
            <ul className="space-y-3 leading-7">
              <li>• Explain what packets and network traffic mean at a beginner level.</li>
              <li>• Identify safe metadata fields in a fake traffic log.</li>
              <li>• Distinguish expected traffic, blocked traffic, and traffic that needs review.</li>
              <li>• Choose safe defensive responses without bypassing controls or touching real systems.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Professional Hook" title="Why SOC teams care about traffic context">
            <p className="leading-7">
              Security teams often review traffic patterns to understand whether systems are behaving normally. A single event rarely tells the whole story. A careful defender checks time, source, destination, result, and business context before deciding whether something is normal, blocked by policy, or worth escalation.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Why This Matters" title="Traffic clues help defenders make calmer decisions">
          <p className="leading-8">
            Without context, network activity can look confusing. A device contacting an update service might be normal. A guest device trying to reach an internal system might be blocked by design. A defender learns to read evidence carefully, avoid assumptions, and ask trusted technology staff for real-world issues.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="Packets are pieces. Traffic is the flow.">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Packets</h3>
              <p className="mt-3 leading-7 text-slate-300">Small pieces of communication that help devices move information across a network.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Traffic</h3>
              <p className="mt-3 leading-7 text-slate-300">The overall movement of network communication between devices, services, and destinations.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Defensive review</h3>
              <p className="mt-3 leading-7 text-slate-300">Using fake logs and safe metadata to understand patterns without testing real networks or reading private content.</p>
            </div>
          </div>
        </SectionCard>

        <PacketFlowDiagram />
        <MetadataBreakdown />
        <TrafficTable />

        <SectionCard eyebrow="Key Vocabulary" title="Terms to know before reading fake traffic evidence">
          <div className="grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Network Traffic Summary"
          subtitle="A fictional beginner dashboard showing how defenders might summarize traffic patterns using safe fake data."
          metrics={[
            { label: "Expected web traffic", value: "68", note: "Normal fake class site requests during the lesson." },
            { label: "Policy blocks", value: "4", note: "Blocked attempts from guest devices to internal resources." },
            { label: "Needs review", value: "2", note: "Unfamiliar destinations that require trusted staff context." },
          ]}
        />

        <FakeLogPanel
          title="Fake Packet and Traffic Events"
          logs={[
            "10:04 src=student-laptop-04 dst=learning.example type=HTTPS result=allowed context=classwork",
            "10:05 src=student-laptop-04 dst=dns-filter.example type=DNS result=allowed context=name-lookup",
            "10:06 src=lab-printer-01 dst=update.example type=UPDATE result=allowed context=scheduled-check",
            "10:07 src=guest-phone-09 dst=internal-gradebook.example type=INTERNAL result=blocked context=guest-network-boundary",
            "10:08 src=guest-phone-09 dst=internal-gradebook.example type=INTERNAL result=blocked context=repeat-attempt-needs-review",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Beginner traffic analysis mistakes to avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Review fake traffic without touching a real network">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: Identify fields</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Find the time, source, destination, type, result, and context in the fake event.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Compare to expected use</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Ask whether the traffic matches normal class activity, device role, or network location.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Avoid overclaiming</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Use words like appears, may, and needs review instead of making unsupported accusations.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 4: Choose safely</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Document the fake finding. For real concerns, ask a teacher or school technology staff.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Is the guest device traffic normal, blocked, or suspicious?"
          evidence={[
            "Fake device: guest-phone-09 tried to reach internal-gradebook.example twice.",
            "Fake network: the source is on a guest network, not a staff or internal network.",
            "Fake result: both attempts were blocked by policy.",
            "Fake context: guest networks should not reach internal systems.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "The block may be a normal protective control, but the repeat attempt should be documented for trusted staff review.",
            "The guest device should be taught how to reach the internal site another way.",
            "The gradebook should be shared publicly so blocks are not needed.",
            "The defender should accuse the guest user immediately based on two fake events.",
          ]}
          bestAnswer={0}
          explanation="The evidence shows a guest-to-internal boundary block. The safe response is to document the repeated fake event and escalate through trusted channels without bypassing or accusing."
        />

        <ScenarioDecisionLab
          title="A student asks why their guest phone cannot reach a school system"
          scenario="A student says their phone is blocked from an internal school site and asks you how to get around the network restriction. What is the safest response?"
          choices={[
            {
              label: "A",
              response: "Tell them not to bypass the restriction and to ask a teacher or school technology staff if access is needed for class.",
              outcome: "Best choice. This respects authorization, school rules, and network boundaries.",
              tone: "best",
            },
            {
              label: "B",
              response: "Suggest trying another Wi-Fi network or changing settings until it works.",
              outcome: "Risky. That encourages bypassing controls and may violate school rules.",
              tone: "risk",
            },
            {
              label: "C",
              response: "Ignore the traffic because blocked events are never important.",
              outcome: "Caution. A block may be normal, but repeated or unusual blocks can still be worth documenting for trusted review.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Repeated Guest-to-Internal Traffic Block"
          severity="Medium"
          time="10:08"
          source="Fake network boundary alert"
          details="A fictional guest phone attempted to reach an internal gradebook destination twice. Both events were blocked by the fake network policy. No real systems or real student data are involved."
          recommendation="Do not bypass the block. Document the fake evidence, explain that guest networks should not reach internal systems, and escalate real access problems to school technology staff."
        />

        <DefenderChecklist
          title="Packets and Traffic Checklist"
          items={[
            "I can explain packets as small pieces of network communication.",
            "I can explain traffic as the flow of communication across a network.",
            "I can identify source, destination, type, result, and context in a fake traffic log.",
            "I can avoid overclaiming from one event and look for supporting context.",
            "I know not to capture, inspect, or manipulate real network traffic without permission.",
          ]}
        />

        <MiniQuiz title="Packets and Network Traffic Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Write a traffic analysis note"
          prompt="Write a short defensive note about the fake guest-phone-09 traffic. Include the source, destination, result, why the block may be expected, and what trusted next step should happen if this were a real school access issue."
          tips={[
            "Use cautious wording: appears, may, likely, needs review.",
            "Do not accuse a person based on limited evidence.",
            "Recommend trusted staff review instead of bypassing controls.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Packets are small pieces of communication, and traffic is the overall flow across a network.",
            "Fake traffic logs can show safe metadata such as time, source, destination, type, result, and context.",
            "Defenders avoid jumping to conclusions from one event and look for patterns and trusted context.",
            "CyberShield uses fake logs only; students should not inspect real network traffic, bypass blocks, or change network settings without authorization.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}