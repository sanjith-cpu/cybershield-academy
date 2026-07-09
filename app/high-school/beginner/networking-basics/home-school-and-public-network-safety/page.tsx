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
const previousLesson = `${modulePath}/packets-and-network-traffic-concepts`;
const nextLesson = `${modulePath}/network-diagram-review-lab`;

const vocab = [
  ["Trusted network", "A network managed by people or an organization you trust, such as your home network or school technology team."],
  ["Guest network", "A separated network meant for visitors or personal devices. It usually has less access to internal systems."],
  ["Public Wi-Fi", "A network in places like libraries, hotels, airports, restaurants, or events. It should be treated as higher risk."],
  ["Captive portal", "A sign-in or terms page that sometimes appears before using public or guest Wi-Fi."],
  ["Network boundary", "A separation between different parts of a network, such as guest devices and internal school systems."],
  ["Sensitive activity", "Actions involving private accounts, personal data, financial information, school systems, or important files."],
];

const mistakes = [
  "Assuming all Wi-Fi with a familiar name is safe. Fake or confusing network names can exist, so students should verify with a trusted adult or staff member.",
  "Treating public Wi-Fi like a private home network. Public networks should be used carefully, especially for sensitive activity.",
  "Trying to bypass school or guest network restrictions. Boundaries exist to protect students, staff, devices, and internal systems.",
  "Ignoring browser warnings, captive portal confusion, or unexpected login prompts. Those clues should be paused and reported instead of clicked through quickly.",
];

const environmentRows = [
  {
    place: "Home",
    trust: "Usually higher trust",
    examples: "Family router, personal devices, home printer",
    saferChoice: "Keep router settings updated, use strong Wi-Fi passwords, and avoid sharing access widely.",
  },
  {
    place: "School",
    trust: "Managed by staff",
    examples: "Student Wi-Fi, school devices, classroom systems",
    saferChoice: "Follow acceptable use rules and ask school technology staff when access or warnings are confusing.",
  },
  {
    place: "Public",
    trust: "Lower trust",
    examples: "Cafe Wi-Fi, hotel Wi-Fi, event Wi-Fi",
    saferChoice: "Avoid sensitive activity when possible, watch for warnings, and use official networks only.",
  },
  {
    place: "Guest",
    trust: "Limited access",
    examples: "Visitor network, personal phone Wi-Fi, temporary access",
    saferChoice: "Respect blocks and do not try to reach internal systems from a guest network.",
  },
];

const quizQuestions = [
  {
    question: "Why should public Wi-Fi be treated more carefully than a home network?",
    choices: [
      "Because the user usually does not control who manages or joins the network.",
      "Because public Wi-Fi is always illegal to use.",
      "Because public Wi-Fi automatically protects every account better than home Wi-Fi.",
      "Because public Wi-Fi should be used to test school systems.",
    ],
    answer: 0,
    explanation:
      "Public Wi-Fi is not automatically unsafe, but it is less trusted because the user usually does not control the network or know who else is using it.",
  },
  {
    question: "A school guest network blocks access to an internal gradebook. What is the safest interpretation?",
    choices: [
      "The block may be a protective boundary working as intended.",
      "The student should keep trying until the block fails.",
      "The gradebook should be posted publicly.",
      "The network is useless and should be ignored.",
    ],
    answer: 0,
    explanation:
      "Guest networks are often separated from internal systems. A block can be a normal security control, not something to bypass.",
  },
  {
    question: "Which action is safest when a student is unsure which Wi-Fi network at school is official?",
    choices: [
      "Ask a teacher or school technology staff before connecting.",
      "Connect to whichever network has the strongest signal.",
      "Try every network until one works.",
      "Share passwords with classmates to compare access.",
    ],
    answer: 0,
    explanation:
      "When a network name is confusing, students should verify with trusted adults or school technology staff instead of guessing.",
  },
  {
    question: "Which activity should students be extra careful about on public Wi-Fi?",
    choices: [
      "Logging into important accounts or handling sensitive information.",
      "Reading a public school announcement page.",
      "Looking at a public restaurant menu.",
      "Checking the weather.",
    ],
    answer: 0,
    explanation:
      "Sensitive activity involves important accounts, personal data, school systems, or financial information, so it needs extra caution on less trusted networks.",
  },
  {
    question: "What follows CyberShield safety rules?",
    choices: [
      "Use fake network examples to choose safe defensive decisions and ask trusted staff about real concerns.",
      "Bypass a school network block to see if it can be done.",
      "Collect classmates' Wi-Fi passwords for a lab.",
      "Test suspicious public Wi-Fi networks to see what happens.",
    ],
    answer: 0,
    explanation:
      "CyberShield uses fake examples only. Real network bypassing, password collection, and suspicious network testing are not allowed.",
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
          Previous: B4.5
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
          Next: B4.7 Network Diagram Review Lab
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

function NetworkContextMap() {
  const contexts = [
    {
      title: "Home network",
      trust: "Higher trust, still needs care",
      details: "Usually controlled by a family or guardian. Safer choices include strong Wi-Fi passwords, updates, and careful sharing.",
      tag: "Private space",
    },
    {
      title: "School network",
      trust: "Managed environment",
      details: "Designed for learning, filtering, device management, and school rules. Confusing access issues should go to staff.",
      tag: "Rules apply",
    },
    {
      title: "Guest network",
      trust: "Limited access",
      details: "Often separated from internal systems. Blocks may be expected and should not be bypassed.",
      tag: "Restricted",
    },
    {
      title: "Public Wi-Fi",
      trust: "Lower trust",
      details: "Useful but less controlled. Students should be careful with sensitive logins, warnings, and unknown network names.",
      tag: "Extra caution",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Different networks create different trust levels</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Students do not need to panic about networks. They need to slow down, recognize the environment, and choose actions that match the level of trust and permission.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {contexts.map((context) => (
          <article key={context.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
              {context.tag}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{context.title}</h3>
            <p className="mt-2 text-sm font-bold text-cyan-200">{context.trust}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{context.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NetworkComparisonTable() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Comparison Table</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Home, school, public, and guest networks</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        This table uses fictional examples. The goal is to compare safe decisions, not to test real networks.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="grid gap-0 border-b border-slate-800 bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-cyan-200 md:grid-cols-4">
          <span>Environment</span>
          <span>Trust level</span>
          <span>Examples</span>
          <span>Safer choice</span>
        </div>
        {environmentRows.map((row) => (
          <div key={row.place} className="grid gap-3 border-b border-slate-800 px-4 py-4 text-sm text-slate-300 last:border-b-0 md:grid-cols-4">
            <span className="font-black text-white">{row.place}</span>
            <span className="font-bold text-cyan-100">{row.trust}</span>
            <span>{row.examples}</span>
            <span>{row.saferChoice}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SafetyDecisionGrid() {
  const decisions = [
    {
      label: "Use public Wi-Fi for low-risk browsing",
      status: "Usually okay",
      detail: "Reading public pages can be reasonable when the network name is verified and the browser is not showing warnings.",
      tone: "emerald",
    },
    {
      label: "Log into important accounts on unknown Wi-Fi",
      status: "Use caution",
      detail: "Sensitive activity deserves extra care. Pause if the network name, login page, or browser warning seems suspicious.",
      tone: "yellow",
    },
    {
      label: "Bypass a school block",
      status: "Do not do this",
      detail: "Blocks and boundaries may protect students, staff, and internal systems. Ask trusted staff if access is needed.",
      tone: "red",
    },
    {
      label: "Ask staff which network is official",
      status: "Best practice",
      detail: "Verification is the safest move when multiple networks, guest portals, or warnings are confusing.",
      tone: "emerald",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">A simple decision model for network safety</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {decisions.map((decision) => {
          const style =
            decision.tone === "red"
              ? "border-red-400/30 bg-red-400/10 text-red-100"
              : decision.tone === "yellow"
                ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-100"
                : "border-emerald-400/30 bg-emerald-400/10 text-emerald-100";

          return (
            <article key={decision.label} className={`rounded-2xl border p-5 ${style}`}>
              <p className="text-sm font-black uppercase tracking-[0.16em]">{decision.status}</p>
              <h3 className="mt-2 text-xl font-black text-white">{decision.label}</h3>
              <p className="mt-3 leading-7">{decision.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function HomeSchoolAndPublicNetworkSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.6
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Home, School, and Public Network Safety
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Networks are not all the same. A home network, school network, guest network, and public Wi-Fi environment each require different levels of trust, caution, and permission-aware behavior.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Focus</span>
                  <span className="font-bold text-white">Network trust levels</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Visual</span>
                  <span className="font-bold text-white">Context map</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Lab</span>
                  <span className="font-bold text-white">Fake Wi-Fi safety review</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Safety rule</span>
                  <span className="font-bold text-cyan-200">Do not bypass blocks</span>
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
          lessonTitle="B4.6 Home, School, and Public Network Safety"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain that devices connect through different types of networks.",
            "I understand that guest networks may have less access than internal school networks.",
            "I will not test suspicious networks, bypass blocks, or collect real network information.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can choose safer network behavior.">
            <ul className="space-y-3 leading-7">
              <li>• Compare home, school, guest, and public networks.</li>
              <li>• Explain why trust level changes depending on the network environment.</li>
              <li>• Identify safer choices for public Wi-Fi and school network access.</li>
              <li>• Choose permission-aware responses when access is blocked or confusing.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Professional Hook" title="Defenders think about context before access">
            <p className="leading-7">
              In organizations, defenders separate networks so different devices have different access. A guest phone should not usually reach internal systems. A public Wi-Fi connection should not be trusted the same way as a managed internal network. Context helps defenders decide what should be allowed, blocked, or reviewed.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Why This Matters" title="The same action can have different risk on different networks">
          <p className="leading-8">
            Checking a public website from a cafe network might be normal. Logging into a sensitive account from an unknown network may need more caution. Trying to bypass a school network block is not okay. Safer cybersecurity means matching your behavior to the trust level, rules, and purpose of the network.
          </p>
        </SectionCard>

        <NetworkContextMap />
        <NetworkComparisonTable />
        <SafetyDecisionGrid />

        <SectionCard eyebrow="Core Concept" title="Network safety starts with three questions">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">1. Who manages it?</h3>
              <p className="mt-3 leading-7 text-slate-300">Home, school, guest, and public networks have different managers and rules.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">2. What am I doing?</h3>
              <p className="mt-3 leading-7 text-slate-300">Sensitive activity needs more caution than reading public information.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">3. Do I have permission?</h3>
              <p className="mt-3 leading-7 text-slate-300">School and organization networks have boundaries. Do not bypass blocks or guess access.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Key Vocabulary" title="Terms to know before reviewing network safety choices">
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
          title="Fake Wi-Fi Environment Dashboard"
          subtitle="A fictional dashboard showing how a school might separate network environments for safer access decisions."
          metrics={[
            { label: "Student devices", value: "128", note: "Connected to a managed student learning network." },
            { label: "Guest devices", value: "31", note: "Separated from internal staff and gradebook systems." },
            { label: "Policy blocks", value: "7", note: "Mostly guest-to-internal requests blocked by design." },
          ]}
        />

        <FakeLogPanel
          title="Fake Network Safety Events"
          logs={[
            "11:20 network=student-wifi device=school-laptop-12 destination=learning.example result=allowed context=classwork",
            "11:23 network=guest-wifi device=visitor-phone-07 destination=internal-printer.example result=blocked context=guest-boundary",
            "11:24 network=public-cafe-wifi device=student-phone-03 destination=bank-login.example result=user-paused context=sensitive-activity",
            "11:26 network=student-wifi device=student-laptop-18 destination=unknown-captive-page.example result=reported context=unexpected-prompt",
            "11:29 network=guest-wifi device=visitor-tablet-02 destination=school-calendar.example result=allowed context=public-information",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Network safety mistakes to avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Choose the safest network response using fake scenarios">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: Identify the network</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Home, school, guest, or public? The environment changes the trust level.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Identify the activity</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Is the action low risk, sensitive, school-related, or internal?</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Check permission</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">If a block appears, do not bypass it. Ask trusted staff if access is needed.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 4: Decide safely</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Pause, report, use an official network, or choose a safer time and place for sensitive activity.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Which fake event needs the most caution?"
          evidence={[
            "Fake event A: student laptop opens learning.example on student Wi-Fi for classwork.",
            "Fake event B: visitor phone tries to reach internal-printer.example from guest Wi-Fi and is blocked.",
            "Fake event C: student phone on public cafe Wi-Fi begins opening bank-login.example, then pauses.",
            "Fake event D: student laptop sees an unexpected captive portal page on school Wi-Fi and reports it.",
          ]}
          question="Which event should a student treat with the most personal caution?"
          options={[
            "Event C, because sensitive account activity on public Wi-Fi deserves extra care.",
            "Event A, because learning websites are always the most dangerous.",
            "Event B, because blocked guest access should be bypassed immediately.",
            "Event D, because reporting an unexpected prompt is never useful.",
          ]}
          bestAnswer={0}
          explanation="Sensitive account activity on public Wi-Fi needs extra caution. The safest move is to pause and use a more trusted connection for important accounts when possible."
        />

        <ScenarioDecisionLab
          title="A friend asks for help getting around the school guest network"
          scenario="Your friend is on guest Wi-Fi and says, 'The school system is blocked. Can you help me get around it?' What should you do?"
          choices={[
            {
              label: "A",
              response: "Explain that guest network blocks should not be bypassed and suggest asking a teacher or technology staff if access is needed.",
              outcome: "Best choice. It respects permission, network boundaries, and school safety rules.",
              tone: "best",
            },
            {
              label: "B",
              response: "Try different settings or networks until the internal system loads.",
              outcome: "Risky. That encourages bypassing controls and could violate school rules.",
              tone: "risk",
            },
            {
              label: "C",
              response: "Share another student's device because it might already have access.",
              outcome: "Risky. Sharing devices or access can create privacy and accountability problems.",
              tone: "risk",
            },
          ]}
        />

        <FakeAlertCard
          title="Guest Network Boundary Block"
          severity="Low"
          time="11:23"
          source="Fake Wi-Fi policy alert"
          details="A fictional visitor phone attempted to reach an internal printer from the guest network. The request was blocked by the fake network boundary. No real systems or student data are involved."
          recommendation="Do not bypass the block. If access is needed for school work, ask a teacher or school technology staff to provide the correct approved process."
        />

        <DefenderChecklist
          title="Network Safety Checklist"
          items={[
            "I can compare home, school, guest, and public networks.",
            "I can explain why public Wi-Fi requires extra caution for sensitive activity.",
            "I can explain why guest networks may be blocked from internal systems.",
            "I know to verify official networks with trusted adults or staff when names are confusing.",
            "I know not to bypass school network blocks or test suspicious networks.",
          ]}
        />

        <MiniQuiz title="Home, School, and Public Network Safety Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Write a network safety recommendation"
          prompt="Write a short recommendation for a new high school student explaining how to behave differently on home Wi-Fi, school Wi-Fi, guest Wi-Fi, and public Wi-Fi. Include one caution and one trusted-help step."
          tips={[
            "Use simple but professional language.",
            "Explain that blocks and boundaries can be protective controls.",
            "Mention asking teachers, guardians, or school technology staff when something feels confusing or unsafe.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Home, school, guest, and public networks have different trust levels and rules.",
            "Public Wi-Fi requires extra caution for sensitive account activity and unexpected prompts.",
            "Guest network blocks may be normal protective boundaries and should not be bypassed.",
            "Students should ask trusted adults, teachers, guardians, or school technology staff when network access feels confusing or unsafe.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}