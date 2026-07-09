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
const previousLesson = `${modulePath}/ip-addresses-and-network-identity`;
const nextLesson = `${modulePath}/dns-and-website-names`;

const vocab = [
  ["Router", "A device that helps traffic move between different networks, such as a home network and the internet."],
  ["Switch", "A device that helps wired devices on the same local network communicate efficiently."],
  ["Access Point", "A device that provides wireless access to a network. Many home routers include this function."],
  ["Wi-Fi Network", "A wireless network that lets approved devices connect without a cable."],
  ["Guest Network", "A separated network area often used for visitors so they do not need access to private internal resources."],
  ["Network Segmentation", "The idea of separating devices or users into safer groups based on role, trust level, or purpose."],
];

const deviceRoles = [
  {
    title: "Router",
    role: "Connects networks",
    detail: "A router decides where traffic should go next when information needs to leave one network and reach another.",
    defenderNote: "Defenders care about router rules because they shape what traffic is allowed between network areas.",
  },
  {
    title: "Switch",
    role: "Connects local wired devices",
    detail: "A switch helps devices in the same local space, like desktops or printers, communicate through cables.",
    defenderNote: "Defenders care about switches because they show where local devices are connected and how traffic stays organized.",
  },
  {
    title: "Wi-Fi Access Point",
    role: "Connects wireless devices",
    detail: "An access point lets approved laptops, phones, tablets, and classroom devices join the network wirelessly.",
    defenderNote: "Defenders care about Wi-Fi because wireless access needs passwords, approved users, and careful separation.",
  },
];

const mistakes = [
  "Calling every network device a router. Routers, switches, and access points have different jobs even when one home device combines them.",
  "Thinking Wi-Fi safety only means having a password. Defenders also think about guest networks, updates, device access, and reporting strange behavior.",
  "Connecting unknown devices to a school or shared network. Real network changes require permission from a trusted adult or technology staff.",
  "Assuming a blocked guest connection means something is broken. Sometimes a block means the network separation is working correctly.",
];

const quizQuestions = [
  {
    question: "What is a router's beginner-friendly job?",
    choices: [
      "It helps traffic move between different networks.",
      "It guarantees every website is safe.",
      "It stores every student's password.",
      "It lets students change school network rules without permission.",
    ],
    answer: 0,
    explanation:
      "A router helps traffic move between networks, such as a local network and the internet. It is not a safety guarantee or permission to change settings.",
  },
  {
    question: "What does a switch usually help with?",
    choices: [
      "Connecting local wired devices on the same network.",
      "Writing school acceptable use policies.",
      "Replacing authentication for every account.",
      "Proving that a message is phishing.",
    ],
    answer: 0,
    explanation:
      "A switch connects local wired devices and helps traffic move efficiently inside a local network area.",
  },
  {
    question: "Why might a guest Wi-Fi network be useful?",
    choices: [
      "It can separate visitors from private internal resources.",
      "It allows visitors to bypass all school rules.",
      "It makes every device invisible to defenders.",
      "It removes the need for reporting suspicious activity.",
    ],
    answer: 0,
    explanation:
      "Guest networks are often used to separate visitor devices from internal systems. That separation supports safer access control.",
  },
  {
    question: "A fake log says guest-tablet-02 was blocked from reaching class-printer-01. What is the safest first interpretation?",
    choices: [
      "The guest separation rule may have worked as intended.",
      "The student should try to bypass the block.",
      "The printer is definitely infected.",
      "The guest tablet owner definitely had bad intent.",
    ],
    answer: 0,
    explanation:
      "A block can mean a control worked. Defenders review context and avoid jumping to conclusions about intent.",
  },
  {
    question: "Which action follows CyberShield safety rules?",
    choices: [
      "Use a fake classroom network diagram to explain device roles.",
      "Change real router settings without permission.",
      "Connect unknown devices to a school network for testing.",
      "Ask classmates for real Wi-Fi passwords for practice.",
    ],
    answer: 0,
    explanation:
      "CyberShield practice uses fake diagrams and fake data only. Real network changes or password sharing require authorization and trusted guidance.",
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
          Previous: B4.2
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
          Next: B4.4 DNS and Website Names
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

function ClassroomNetworkMap() {
  const nodes = [
    { label: "Student Laptop", detail: "Approved Wi-Fi device", zone: "Classroom Wi-Fi" },
    { label: "Access Point", detail: "Wireless entry point", zone: "Wi-Fi access" },
    { label: "Switch", detail: "Local wired traffic", zone: "Classroom network" },
    { label: "Router", detail: "Network boundary", zone: "Internet path" },
    { label: "Learning Site", detail: "Approved destination", zone: "External service" },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Router, switch, and Wi-Fi path</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        This fake classroom diagram shows how a wireless device can reach an approved learning site. The labels are simplified so students can understand the roles before studying deeper networking.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node.label} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
                {index + 1}
              </div>
              {index < nodes.length - 1 && <span className="hidden text-2xl font-black text-cyan-300 lg:block">→</span>}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{node.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{node.detail}</p>
            <p className="mt-4 rounded-full border border-slate-700 px-3 py-2 text-xs font-bold text-cyan-200">{node.zone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoleComparison() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Do not mix up the device roles</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {deviceRoles.map((device) => (
          <article key={device.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{device.role}</p>
            <h3 className="mt-3 text-2xl font-black text-white">{device.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{device.detail}</p>
            <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
              <span className="font-black">Defender view:</span> {device.defenderNote}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function RoutersSwitchesAndWiFiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.3
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Routers, Switches, and Wi-Fi
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Networks use different devices to move information. Beginner defenders do not need to reconfigure real equipment; they need to understand what each device does, how traffic is separated, and why permission matters before touching any network.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Focus</span>
                  <span className="font-bold text-white">Network device roles</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Visual</span>
                  <span className="font-bold text-white">Classroom network map</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Lab</span>
                  <span className="font-bold text-white">Fake Wi-Fi access review</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Safety rule</span>
                  <span className="font-bold text-cyan-200">No real router changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12">
        <nav className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <TopNav />
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B4: Networking Basics"
          lessonTitle="B4.3 Routers, Switches, and Wi-Fi"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain that a network connects devices and services.",
            "I understand that IP addresses are network clues, not full human identity proof.",
            "I will use only fake diagrams and fake data for this lesson.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can explain common network devices safely.">
            <ul className="space-y-3 leading-7">
              <li>• Explain the basic jobs of routers, switches, and Wi-Fi access points.</li>
              <li>• Describe why guest networks and separation can reduce risk.</li>
              <li>• Interpret a fake network diagram without touching a real network.</li>
              <li>• Choose safe actions when a real network issue involves school or shared devices.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Professional Hook" title="Why defenders care about the path traffic takes">
            <p className="leading-7">
              In a real organization, defenders need to know where devices connect and what paths traffic can take. A blocked connection, a guest network, or a separated printer area might be normal security design, not an emergency. Good defenders map the environment before making decisions.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Why This Matters" title="Network devices shape what is allowed">
          <p className="leading-8">
            Routers, switches, and Wi-Fi equipment are like traffic organizers. They do not make every decision alone, but they help enforce how devices connect, where information can travel, and which areas should stay separated. If students understand these roles, they can read diagrams and alerts more responsibly.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="One box at home may hide several jobs">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Home view</h3>
              <p className="mt-3 leading-7 text-slate-300">A home Wi-Fi box may combine router, switch, firewall, and wireless access point features in one device.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">School view</h3>
              <p className="mt-3 leading-7 text-slate-300">A school or organization may use many separate devices and rules so different groups have different levels of access.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Defender view</h3>
              <p className="mt-3 leading-7 text-slate-300">Defenders read the diagram, check approved zones, and document what happened before deciding whether something needs escalation.</p>
            </div>
          </div>
        </SectionCard>

        <ClassroomNetworkMap />

        <SectionCard eyebrow="Key Vocabulary" title="Terms to know before reading network diagrams">
          <div className="grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <RoleComparison />

        <FakeDashboardCard
          title="Classroom Network Overview"
          subtitle="A fake dashboard showing separated network areas for beginner defensive reasoning."
          metrics={[
            { label: "Classroom Wi-Fi", value: "18", note: "Approved student devices connected." },
            { label: "Guest Wi-Fi", value: "4", note: "Visitor devices separated from internal resources." },
            { label: "Blocked attempts", value: "2", note: "Guest-to-printer requests blocked by policy." },
          ]}
        />

        <FakeLogPanel
          title="Fake Router, Switch, and Wi-Fi Events"
          logs={[
            "08:03 access-point-01 allowed student-laptop-04 onto classroom-wifi",
            "08:04 switch-02 learned classroom-printer-01 on approved wired port",
            "08:06 router-01 allowed classroom-wifi traffic to learning.example",
            "08:07 router-01 blocked guest-wifi traffic to class-printer-01",
            "08:08 access-point-01 reported normal signal quality for classroom-wifi",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Beginner network mistakes to avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Review a fake Wi-Fi access decision">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: Identify the zone</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Decide whether the fake device is on classroom Wi-Fi, guest Wi-Fi, or a wired classroom network.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Check the role</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Compare the device role with the resource it tried to reach.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Read the result</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Look for allowed, blocked, expected, or needs-review outcomes in the fake event.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 4: Choose safely</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Document fake findings. For real networks, ask school technology staff instead of changing settings.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Did the network separation work?"
          evidence={[
            "Fake device: guest-tablet-02 joined guest-wifi at 08:06.",
            "Fake request: guest-tablet-02 tried to reach class-printer-01.",
            "Fake policy: guest-wifi cannot access classroom printers.",
            "Fake router result: request blocked automatically.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "The guest network separation likely worked, so document the block and do not bypass it.",
            "The student should change the router settings to allow the printer.",
            "The guest device owner definitely had bad intent.",
            "The printer should be unplugged immediately without asking anyone.",
          ]}
          bestAnswer={0}
          explanation="The fake evidence shows a policy block that matches the expected rule. A beginner defender documents the event and avoids changing real settings or assuming intent."
        />

        <ScenarioDecisionLab
          title="A friend wants to fix the Wi-Fi"
          scenario="A friend says the school Wi-Fi is slow and suggests changing network settings on a classroom device to test it. What should you do?"
          choices={[
            {
              label: "A",
              response: "Try changing the settings because the goal is to help.",
              outcome: "Risky. Good intentions do not replace permission. Real network settings should not be changed by students unless clearly authorized.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Document what you noticed and tell a teacher or school technology staff.",
              outcome: "Best choice. This respects authorization, protects the network, and gets the issue to people who are allowed to investigate.",
              tone: "best",
            },
            {
              label: "C",
              response: "Ask classmates for their Wi-Fi details so you can compare devices.",
              outcome: "Risky. Collecting real network details from others creates privacy and permission problems.",
              tone: "risk",
            },
          ]}
        />

        <FakeAlertCard
          title="Guest Network Blocked Internal Resource"
          severity="Low"
          time="08:07"
          source="Fake router training alert"
          details="A fictional guest Wi-Fi device attempted to reach a classroom printer. The fake router blocked the connection because guest devices are separated from internal classroom resources."
          recommendation="Record the event as a likely successful policy block. Do not try to bypass the separation. For real network issues, ask a teacher or school technology staff."
        />

        <DefenderChecklist
          title="Routers, Switches, and Wi-Fi Checklist"
          items={[
            "I can explain the basic difference between a router, switch, and Wi-Fi access point.",
            "I understand that one home device can combine several network jobs.",
            "I can explain why guest networks help separate visitor devices from internal resources.",
            "I can read a fake network event without assuming intent too quickly.",
            "I know not to change real network settings, connect unknown devices, or collect real network details without permission.",
          ]}
        />

        <MiniQuiz title="Routers, Switches, and Wi-Fi Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a fake classroom network explanation"
          prompt="Write a short paragraph explaining how a student laptop could reach an approved learning website through Wi-Fi, a switch, and a router. Then add one sentence explaining why a guest device should not reach an internal classroom printer."
          tips={[
            "Use fake names like student-laptop-04 and learning.example.",
            "Explain the role of each network device clearly.",
            "Mention permission and trusted help for real network concerns.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Routers help traffic move between networks, switches connect local wired devices, and access points provide wireless entry to a network.",
            "Guest networks and segmentation help separate devices based on trust level and purpose.",
            "A blocked connection can be a sign that a defensive rule worked correctly.",
            "CyberShield practice uses fake data only; students should never change real network settings or investigate real networks without permission.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}