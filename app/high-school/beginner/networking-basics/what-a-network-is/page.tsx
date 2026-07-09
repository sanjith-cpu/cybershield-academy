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
const nextLesson = `${modulePath}/ip-addresses-and-network-identity`;

const networkParts = [
  {
    label: "Device",
    example: "Laptop, phone, tablet, printer, camera, server, or classroom display",
    defenderView: "Defenders identify which devices are connected before deciding what is normal or unusual.",
  },
  {
    label: "Connection",
    example: "Wi-Fi, Ethernet cable, cellular, Bluetooth, or another approved link",
    defenderView: "The connection path affects reliability, visibility, and safety rules.",
  },
  {
    label: "Rules",
    example: "Protocols that define how devices format and exchange information",
    defenderView: "Rules help defenders understand what should happen during normal communication.",
  },
  {
    label: "Service",
    example: "Website, school portal, file share, printer, video meeting, or email system",
    defenderView: "Services are the destination or function that users are trying to reach.",
  },
  {
    label: "Control",
    example: "Password, firewall rule, content filter, guest network, or access policy",
    defenderView: "Controls help decide who can connect, what they can reach, and what should be blocked.",
  },
];

const vocab = [
  ["Network", "A group of devices connected so they can share information or services."],
  ["Node", "Any device or system that participates in a network, such as a laptop, router, or printer."],
  ["Traffic", "Information moving across a network. In beginner lessons, think of it as messages traveling between devices."],
  ["Protocol", "An agreed set of rules for how communication should happen."],
  ["Local Network", "A smaller network in one place, such as a home, classroom, or school lab."],
  ["Internet", "A massive network of networks that connects many organizations, services, and devices around the world."],
];

const mistakes = [
  "Thinking a network is only Wi-Fi. Wi-Fi is one connection method, not the whole network.",
  "Assuming every connected device should be trusted. Defenders still check permissions, purpose, and context.",
  "Jumping to conclusions from one fake event instead of comparing it with normal activity.",
  "Forgetting that networks include rules, services, controls, and people, not only devices.",
];

const quizQuestions = [
  {
    question: "What is the best beginner definition of a network?",
    choices: [
      "A single computer that stores every file in one place.",
      "A group of connected devices that can share information or services using agreed rules.",
      "Only the public internet and nothing else.",
      "A tool for bypassing school technology rules.",
    ],
    answer: 1,
    explanation:
      "A network is a group of connected devices that communicate or share services using rules. It can be small, like a classroom network, or huge, like the internet.",
  },
  {
    question: "Which item is a network node?",
    choices: [
      "Only a cloud company headquarters.",
      "A laptop, printer, router, or server connected to the network.",
      "Only a website name typed into a browser.",
      "Only a password written on paper.",
    ],
    answer: 1,
    explanation:
      "A node is any device or system that participates in the network, such as a laptop, printer, router, or server.",
  },
  {
    question: "A fake log says a classroom tablet joined the school Wi-Fi at 8:10. What should a defender do first?",
    choices: [
      "Assume something illegal happened immediately.",
      "Check whether the device, time, and network match expected classroom activity.",
      "Try to access the tablet without permission.",
      "Delete the log so no one worries.",
    ],
    answer: 1,
    explanation:
      "Defenders compare events with expected context before making conclusions. They do not access real devices or delete evidence without authorization.",
  },
  {
    question: "Why do defenders use network diagrams?",
    choices: [
      "To guess passwords faster.",
      "To understand which devices, paths, services, and controls are involved before making decisions.",
      "To avoid asking technology staff for help.",
      "To make every device public on the internet.",
    ],
    answer: 1,
    explanation:
      "Network diagrams help defenders understand communication paths and system relationships. Good diagrams support safer decisions.",
  },
  {
    question: "Which statement is safest for a student in a school network environment?",
    choices: [
      "I should inspect other students' devices to see what they are doing.",
      "I should change router settings because I am curious.",
      "I should use approved networks and report confusing or unsafe issues to a trusted adult or school technology staff.",
      "I should test unknown network tools on school systems.",
    ],
    answer: 2,
    explanation:
      "Students should stay within approved use, avoid touching systems they do not own or manage, and report concerns through trusted help.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
        href="/high-school"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        High School Hub
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
          Next: B4.2 IP Addresses
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

export default function WhatANetworkIsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.1
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                What a Network Is
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A network is a group of connected devices that can share information or services. Cyber defenders study networks because every login, website visit, file share, printer request, update, and alert depends on devices communicating in safe, expected ways.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders cannot protect what they cannot map.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                In real security work, teams first ask: What devices exist? How are they connected? What services are they using? What controls should protect them? This lesson builds that beginner foundation using fake examples only.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-100">
                Safety boundary: do not scan, test, inspect, or change any real school, home, or public network. This lesson is about understanding safe diagrams and fake training evidence.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-4">
          <Link href={modulePath} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            Back to Module
          </Link>
          <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            Beginner Track
          </Link>
          <Link href="/high-school" className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            High School Hub
          </Link>
          <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300">
            Next Lesson
          </Link>
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B4: Networking Basics"
          lessonTitle="B4.1 What a Network Is"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I know a device can connect to Wi-Fi or a cable to reach services.",
            "I understand that school networks have rules and permission boundaries.",
            "I am ready to use only fake diagrams and fake logs for practice.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can explain networks clearly.">
            <ul className="space-y-3 leading-7">
              <li>• Define a network as connected devices, services, rules, and controls.</li>
              <li>• Identify common network nodes such as laptops, routers, printers, and servers.</li>
              <li>• Explain why defenders need maps before making security decisions.</li>
              <li>• Read a fake beginner network diagram without touching a real network.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="Almost every cyber event happens through a network path.">
            <p className="leading-7">
              If a student signs into a learning portal, a phone joins Wi-Fi, a printer receives a document, or a browser opens a website, network communication is involved. Defenders use network knowledge to separate normal activity from confusing, risky, or blocked activity.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="A network is more than a Wi-Fi name.">
          <p className="leading-8">
            Many beginners think a network is just the Wi-Fi option they click. A better view is that a network includes devices, connection methods, communication rules, services, and safety controls. A classroom network could include student laptops, a teacher computer, a printer, a wireless access point, a router, school filtering, and approved learning websites. The internet is much larger, but it is still built from networks connecting to other networks.
          </p>
          <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-50">
            Beginner defender idea: before asking “Is this bad?” ask “What is connected, what is it trying to reach, and what would normal look like?”
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Classroom network communication map</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            This fake map shows how a student laptop might reach an approved learning website. The goal is not to memorize every technical detail yet. The goal is to see that communication moves through multiple systems and rules.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {[
              ["1", "Student Device", "A laptop starts a request to open learning.example."],
              ["2", "School Wi-Fi", "The approved network carries the request inside the school."],
              ["3", "Router / Gateway", "Traffic is directed toward the correct outside destination."],
              ["4", "DNS Service", "The readable website name is matched to a network destination."],
              ["5", "Learning Site", "The approved service sends back the page content."],
            ].map(([number, title, detail]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                  {number}
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Key Vocabulary" title="Network words you need first">
            <div className="grid gap-3">
              {vocab.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="font-black text-cyan-200">{term}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Technical Breakdown" title="What defenders look for in a beginner network map">
            <div className="grid gap-3">
              {networkParts.map((part) => (
                <div key={part.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="font-black text-white">{part.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300"><span className="text-cyan-200">Example:</span> {part.example}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400"><span className="text-emerald-200">Defender view:</span> {part.defenderView}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <FakeDashboardCard
          title="Fake Classroom Network Snapshot"
          subtitle="A fictional dashboard for learning how defenders summarize a small network. No real devices or real student data are shown."
          metrics={[
            { label: "Connected training devices", value: "18", note: "Mostly student laptops and tablets for a fake lesson." },
            { label: "Approved services reached", value: "4", note: "Learning portal, printer queue, video class, and update service." },
            { label: "Blocked unsafe paths", value: "2", note: "Guest network prevented access to internal classroom resources." },
          ]}
        />

        <FakeLogPanel
          title="Fake Network Events"
          logs={[
            "08:10 device=student-laptop-04 event=joined_network network=classroom-wifi status=expected",
            "08:12 device=student-laptop-04 event=requested_service service=learning.example status=allowed",
            "08:12 device=dns-training event=name_lookup site=learning.example status=resolved",
            "08:13 device=guest-tablet-02 event=printer_access network=guest-wifi status=blocked_by_policy",
            "08:15 device=teacher-laptop-01 event=video_class service=classroom-meet status=allowed",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Beginner networking misunderstandings to avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Build a fake classroom network map">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: List fake nodes</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Use fictional items: student laptop, teacher laptop, printer, school Wi-Fi, router, DNS, learning site.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Draw safe paths</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Show which fake devices are allowed to reach the learning site and which network is only for guests.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Add controls</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Label approved Wi-Fi, guest restrictions, account login, and school technology staff support.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which event needs the most careful review?"
          evidence={[
            "A student laptop joins the classroom Wi-Fi during class time.",
            "The teacher laptop opens the approved class meeting service.",
            "A guest tablet tries to reach an internal printer and is blocked by policy.",
            "DNS resolves learning.example for a classroom browser request.",
          ]}
          question="What is the safest beginner conclusion?"
          options={[
            "The guest tablet block is worth documenting because it shows the guest network control worked as intended.",
            "The student laptop joining Wi-Fi proves the student did something wrong.",
            "DNS activity always means a network has been attacked.",
            "The teacher laptop should be inspected by students without permission.",
          ]}
          bestAnswer={0}
          explanation="The guest tablet event is not automatically an incident. It is useful evidence that a control blocked internal access from the guest network. Defenders document it calmly and stay within permission boundaries."
        />

        <ScenarioDecisionLab
          title="A confusing network warning appears"
          scenario="A fictional student sees a school laptop message saying, 'This network does not allow printer access.' The student is on the guest Wi-Fi, not the classroom Wi-Fi. What should they do?"
          choices={[
            {
              label: "A",
              response: "Switch networks or change settings until printing works.",
              outcome: "Risky. Students should not change network settings or try to bypass access rules.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Ask the teacher or school technology staff which approved network should be used for printing.",
              outcome: "Best choice. This respects network rules, permission boundaries, and trusted support.",
              tone: "best",
            },
            {
              label: "C",
              response: "Ignore all network rules because printing is not a cybersecurity issue.",
              outcome: "Caution. Printing still involves network access, permissions, and data handling.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Guest Network Blocked Internal Resource"
          severity="Low"
          time="08:13"
          source="Fake training gateway"
          details="A fictional guest tablet attempted to reach an internal printer queue. The request was blocked because guest devices should not access internal classroom resources."
          recommendation="Document the event as a successful policy block. If a real student needs printer access, ask a teacher or school technology staff member for the approved process."
        />

        <DefenderChecklist
          title="Network Basics Checklist"
          items={[
            "I can explain that a network is connected devices, services, rules, and controls.",
            "I can identify common nodes in a simple fake network diagram.",
            "I can read fake network events without jumping to accusations.",
            "I can explain why permission matters before touching any real network.",
            "I know to involve a trusted adult or school technology staff when a real network issue feels unsafe or confusing.",
          ]}
        />

        <MiniQuiz title="What a Network Is Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Create a beginner network explanation"
          prompt="Write a short paragraph explaining a school classroom network to a younger student. Include the words device, connection, service, rule, and control. Keep it safe and do not mention any real school network details."
          tips={[
            "Use fake examples only.",
            "Explain the path in simple steps.",
            "Mention trusted help for real issues.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A network is a group of connected devices that can share information or services using rules.",
            "Networks include devices, connections, protocols, services, and safety controls.",
            "Defenders use maps and fake evidence to understand what is normal before deciding what needs attention.",
            "Students should never test, scan, change, or inspect real networks without clear permission and trusted supervision.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}