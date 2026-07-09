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
const previousLesson = `${modulePath}/what-a-network-is`;
const nextLesson = `${modulePath}/routers-switches-and-wi-fi`;

const vocab = [
  ["IP Address", "A network address that helps information move to the right device or service."],
  ["Network Identity", "The way a device is recognized on a network using details such as an address, name, role, and connection context."],
  ["Private Address", "An address commonly used inside homes, schools, and organizations, not as a direct public internet identity."],
  ["Public Address", "An address used for internet-facing communication. Students should not collect, post, or investigate real public addresses."],
  ["Dynamic Address", "An address that may change over time, often assigned automatically by a network service."],
  ["Static Address", "An address that is intentionally kept the same for a device or service that needs predictable access."],
];

const identityParts = [
  {
    label: "Address",
    detail: "A fake IP address such as 192.0.2.24 helps a training diagram show where traffic is going.",
    defenderUse: "Used to group fake events and understand which device or service is involved.",
  },
  {
    label: "Device name",
    detail: "A readable label such as student-laptop-04 or classroom-printer makes diagrams easier to understand.",
    defenderUse: "Used to connect technical evidence with the device's expected purpose.",
  },
  {
    label: "Network location",
    detail: "A device might be on classroom Wi-Fi, guest Wi-Fi, a home network, or a training lab network.",
    defenderUse: "Used to decide what access should be normal for that network zone.",
  },
  {
    label: "Expected role",
    detail: "A printer, student laptop, teacher laptop, router, or server should behave differently.",
    defenderUse: "Used to avoid treating every device event the same way.",
  },
];

const mistakes = [
  "Thinking an IP address proves who a person is. It usually identifies a network location or device context, not a full human story by itself.",
  "Sharing real IP addresses or screenshots online. Treat real network details as sensitive unless a trusted adult or school technology staff says otherwise.",
  "Assuming every unfamiliar address is dangerous. Defenders compare addresses with context, timing, network zone, and expected behavior.",
  "Trying to investigate real addresses without permission. CyberShield activities should use fake diagrams and fake data only.",
];

const quizQuestions = [
  {
    question: "What is the main beginner purpose of an IP address?",
    choices: [
      "To help information move to the right device or service on a network.",
      "To guarantee that a device is safe.",
      "To show a student's full private identity.",
      "To let students inspect real networks without permission.",
    ],
    answer: 0,
    explanation:
      "An IP address helps network communication reach the right place. It is not a complete identity, safety rating, or permission to investigate real systems.",
  },
  {
    question: "A fake dashboard shows classroom-laptop-07 using 192.0.2.47. What should a beginner defender do first?",
    choices: [
      "Assume the device is attacking the network.",
      "Match the fake address with the device name, network zone, time, and expected activity.",
      "Post the address online to ask strangers about it.",
      "Try to connect to the device without permission.",
    ],
    answer: 1,
    explanation:
      "Defenders connect evidence with context before making conclusions. They do not post real network details or touch devices without authorization.",
  },
  {
    question: "Which statement is safest?",
    choices: [
      "A real IP address should be treated like casual information that can always be shared.",
      "Real network details should be handled carefully and shared only through approved trusted channels.",
      "Students should collect classmates' device addresses for practice.",
      "An IP address always identifies the exact person using a device.",
    ],
    answer: 1,
    explanation:
      "Real network details can be sensitive. CyberShield practice should use fake examples, and real concerns should go to trusted adults or technology staff.",
  },
  {
    question: "What does network identity include besides an address?",
    choices: [
      "Only the color of the device.",
      "Device name, role, network zone, expected behavior, and permission context.",
      "Only the password used to log in.",
      "Only the browser icon.",
    ],
    answer: 1,
    explanation:
      "Defenders think about the whole context: address, device name, role, location, behavior, and what the device is allowed to do.",
  },
  {
    question: "A guest device tries to reach an internal classroom resource and gets blocked. What is the best first conclusion?",
    choices: [
      "The block may show that the access control worked, so document the fake event and check context.",
      "The guest device should be investigated by students immediately.",
      "The address should be copied into random websites.",
      "The access rule should be bypassed because the student is curious.",
    ],
    answer: 0,
    explanation:
      "A blocked request can be a normal security control working. Defenders document and review context instead of bypassing rules or investigating real devices.",
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
          Previous: B4.1
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
          Next: B4.3 Routers, Switches, and Wi-Fi
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

export default function IPAddressesAndNetworkIdentityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.2
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                IP Addresses and Network Identity
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Devices need a way to be found on a network. IP addresses help traffic move to the right place, while network identity gives defenders more context: device name, role, location, expected activity, and permission boundaries.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Professional Hook</p>
              <h2 className="mt-3 text-2xl font-black text-white">An address is a clue, not the whole story.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Security teams often see addresses in logs, dashboards, tickets, and diagrams. They use those addresses to organize evidence, but they still need context before deciding whether something is normal, blocked, risky, or worth escalating.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm leading-6 text-yellow-100">
                Safety boundary: do not collect, post, lookup, scan, or test real IP addresses from your school, home, friends, games, or public networks. CyberShield uses fake training data only.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-4">
          <Link href={previousLesson} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            Previous Lesson
          </Link>
          <Link href={modulePath} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            Back to Module
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
          lessonTitle="B4.2 IP Addresses and Network Identity"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that networks move information between devices and services.",
            "I know that real network details should not be shared casually.",
            "I am ready to use only fake addresses, fake dashboards, and fake logs for practice.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can explain network identity safely.">
            <ul className="space-y-3 leading-7">
              <li>• Explain that an IP address helps network information reach the correct destination.</li>
              <li>• Describe why an address alone is not enough to identify a person or prove intent.</li>
              <li>• Compare device name, address, network zone, and expected role as defender context.</li>
              <li>• Read fake address cards and fake logs without touching a real network.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Why This Matters" title="Defenders use addresses to connect evidence carefully.">
            <p className="leading-7">
              When a device joins Wi-Fi, opens a website, prints a document, or triggers a warning, logs may include addresses. A beginner defender should not panic or accuse someone from one address. The safer move is to combine clues and ask whether the activity matches the device's approved role.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Core Concept" title="IP addresses are network delivery labels.">
          <p className="leading-8">
            An IP address is like a delivery label for network communication. It helps information travel toward a device or service. But it is not the same as a student's full identity, a password, a location report, or proof of wrongdoing. In defensive work, addresses are clues that must be reviewed with time, device name, network zone, account context, and normal behavior.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-50">
              <p className="font-black">Address</p>
              <p className="mt-2 text-sm leading-6">Where traffic is being sent in a network diagram or log.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
              <p className="font-black">Context</p>
              <p className="mt-2 text-sm leading-6">What device, role, time, network, and expected behavior surround the address.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="font-black">Decision</p>
              <p className="mt-2 text-sm leading-6">Whether to document, ask for help, report, or keep monitoring through approved channels.</p>
            </div>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Fake device identity cards</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            These fictional cards show why defenders need more than one clue. The address helps organize traffic, but the role and network zone explain what the device should normally do.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Student Laptop", "student-laptop-07", "192.0.2.47", "Classroom Wi-Fi", "Learning portal, video class, approved web research"],
              ["Teacher Laptop", "teacher-laptop-01", "192.0.2.15", "Staff Wi-Fi", "Class meeting, gradebook, presentation display"],
              ["Class Printer", "class-printer-02", "198.51.100.22", "Internal resources", "Receives approved print jobs only"],
              ["Guest Tablet", "guest-tablet-03", "203.0.113.88", "Guest Wi-Fi", "Internet access only, no internal printer access"],
            ].map(([role, name, address, zone, expected]) => (
              <div key={name} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Fake Device</p>
                <h3 className="mt-3 text-xl font-black text-white">{role}</h3>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <p><span className="font-bold text-cyan-200">Name:</span> {name}</p>
                  <p><span className="font-bold text-cyan-200">Address:</span> {address}</p>
                  <p><span className="font-bold text-cyan-200">Zone:</span> {zone}</p>
                  <p><span className="font-bold text-emerald-200">Expected:</span> {expected}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Key Vocabulary" title="Address and identity words">
            <div className="grid gap-3">
              {vocab.map(([term, definition]) => (
                <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="font-black text-cyan-200">{term}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{definition}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Technical Breakdown" title="How defenders build safer context">
            <div className="grid gap-3">
              {identityParts.map((part) => (
                <div key={part.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="font-black text-white">{part.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{part.detail}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400"><span className="text-emerald-200">Defender use:</span> {part.defenderUse}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <FakeDashboardCard
          title="Fake Network Identity Snapshot"
          subtitle="A fictional dashboard showing how a defender might summarize approved training devices. No real network information is used."
          metrics={[
            { label: "Known fake devices", value: "24", note: "Devices already listed in the training inventory." },
            { label: "Guest zone devices", value: "6", note: "Allowed to reach internet-only training services." },
            { label: "Address changes today", value: "3", note: "Expected because some addresses are assigned dynamically." },
          ]}
        />

        <FakeLogPanel
          title="Fake Address Assignment Events"
          logs={[
            "09:02 device=student-laptop-07 assigned_address=192.0.2.47 zone=classroom-wifi method=dynamic status=expected",
            "09:04 device=teacher-laptop-01 assigned_address=192.0.2.15 zone=staff-wifi method=dynamic status=expected",
            "09:07 device=guest-tablet-03 assigned_address=203.0.113.88 zone=guest-wifi method=dynamic status=expected",
            "09:10 device=guest-tablet-03 attempted_resource=class-printer-02 result=blocked reason=guest_zone_policy",
            "09:12 device=student-laptop-07 requested_service=learning.example result=allowed reason=approved_service",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Address mistakes that lead to bad conclusions">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Match fake addresses to fake network roles">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: Read the card</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Use the fake device name, fake address, zone, and expected purpose. Do not use real devices.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Compare behavior</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Ask whether the fake event matches the device's expected role and approved network zone.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Choose a safe response</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Document normal events, note blocked events, and involve trusted adults or technology staff for real concerns.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which clue matters most with the address?"
          evidence={[
            "Fake address 203.0.113.88 belongs to guest-tablet-03 in the guest Wi-Fi zone.",
            "The same guest tablet tried to reach class-printer-02.",
            "The policy says guest devices should not access internal printers.",
            "The fake gateway blocked the request automatically.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "The block likely shows the guest network rule worked; document it and do not bypass the control.",
            "The address proves the guest user had bad intent.",
            "Students should try to manually connect the guest tablet to the printer.",
            "The address should be posted publicly for others to investigate.",
          ]}
          bestAnswer={0}
          explanation="The fake evidence shows an expected policy block. The safest conclusion is to document the event and respect the access rule. An address alone does not prove intent."
        />

        <ScenarioDecisionLab
          title="A classmate asks for a real address"
          scenario="During a group project, a classmate says, 'Send me the IP address from your home router so I can compare it with mine.' What is the safest response?"
          choices={[
            {
              label: "A",
              response: "Send the real address because it sounds technical and harmless.",
              outcome: "Risky. Real network details should not be shared casually, especially in school projects or group chats.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Use the fake CyberShield training addresses instead and ask the teacher if real network details are needed.",
              outcome: "Best choice. It keeps the activity fake-data only and uses trusted adult guidance.",
              tone: "best",
            },
            {
              label: "C",
              response: "Try to collect more addresses from friends so the project has more examples.",
              outcome: "Risky. Collecting real network information from others crosses a privacy and permission boundary.",
              tone: "risk",
            },
          ]}
        />

        <FakeAlertCard
          title="Address Context Needed"
          severity="Low"
          time="09:10"
          source="Fake classroom gateway"
          details="A fictional guest-zone address attempted to reach an internal classroom printer. The request was blocked by the training policy."
          recommendation="Do not investigate the device directly. Record the address, device label, zone, and policy result in the fake ticket. For a real issue, ask school technology staff."
        />

        <DefenderChecklist
          title="IP Address and Network Identity Checklist"
          items={[
            "I can explain that an IP address helps traffic reach a device or service.",
            "I understand that an address alone does not prove a person's identity or intent.",
            "I can combine device name, role, zone, time, and expected behavior before making a conclusion.",
            "I know not to collect, post, lookup, scan, or test real addresses for practice.",
            "I know to use trusted adults, teachers, or school technology staff for real network concerns.",
          ]}
        />

        <MiniQuiz title="IP Addresses and Network Identity Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Write a fake network identity note"
          prompt="Create a short fake ticket note for guest-tablet-03. Include the fake address, network zone, attempted resource, policy result, and safest next step. Do not use real addresses or real device names."
          tips={[
            "Use fake training data only.",
            "Separate facts from conclusions.",
            "Recommend trusted help for real issues.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "An IP address helps network traffic reach the right place, but it is only one clue.",
            "Network identity includes address, device name, role, zone, expected behavior, and permission context.",
            "Defenders avoid accusations from one address and review evidence calmly.",
            "Students should never collect, post, lookup, scan, or test real network addresses for CyberShield practice.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}