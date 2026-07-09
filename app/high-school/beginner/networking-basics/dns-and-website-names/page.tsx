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
const previousLesson = `${modulePath}/routers-switches-and-wi-fi`;
const nextLesson = `${modulePath}/packets-and-network-traffic-concepts`;

const vocab = [
  ["DNS", "Domain Name System. A system that helps translate website names into network addresses that devices can use."],
  ["Domain Name", "A human-readable website name, such as learning.example, used in fake CyberShield examples."],
  ["Resolver", "A service that helps answer a device's DNS question by finding the address for a domain name."],
  ["Record", "A DNS answer type. Beginner lessons only need to know that records connect names to information."],
  ["Cache", "Temporary saved information. DNS answers may be stored for a short time so repeated requests can be faster."],
  ["DNS Filtering", "A defensive control that may block known risky or disallowed domains before a browser connects."],
];

const mistakes = [
  "Thinking DNS proves a website is safe. DNS helps find where a name points, but it does not guarantee that the destination is trustworthy.",
  "Assuming every DNS block is a technical error. Sometimes a blocked DNS lookup means a school or organization policy is working.",
  "Typing suspicious real links into a browser to investigate them. CyberShield uses fake examples only; real suspicious links should be reported, not tested.",
  "Confusing a website name with the full web address. A full URL can include the scheme, domain, path, query text, and other clues.",
];

const dnsSteps = [
  {
    title: "1. Student types a name",
    detail: "The browser receives a human-friendly name like learning.example.",
    defenderView: "The requested name becomes evidence defenders can review in fake logs.",
  },
  {
    title: "2. Device asks DNS",
    detail: "The device asks a resolver where that name points on the network.",
    defenderView: "A resolver or filter may allow, block, or log the request based on policy.",
  },
  {
    title: "3. DNS returns an answer",
    detail: "If allowed, the system receives address information for the destination.",
    defenderView: "The answer can be cached temporarily and compared with expected activity.",
  },
  {
    title: "4. Browser connects",
    detail: "The browser can now try to connect to the destination using the network address.",
    defenderView: "DNS is one part of the path. HTTPS, certificates, content, and behavior still matter.",
  },
];

const quizQuestions = [
  {
    question: "What is the beginner-friendly purpose of DNS?",
    choices: [
      "It helps translate human-readable website names into network addresses devices can use.",
      "It guarantees that every website is safe.",
      "It replaces passwords and MFA for accounts.",
      "It lets students test suspicious websites safely.",
    ],
    answer: 0,
    explanation:
      "DNS helps devices find where a website name points. It is not a safety guarantee and it is not permission to test suspicious links.",
  },
  {
    question: "A fake log says blocked.example was blocked by DNS filtering. What is the safest conclusion?",
    choices: [
      "A defensive rule may have blocked the request, so document it and avoid visiting the site.",
      "The student should try a different network to open it.",
      "The filter is definitely broken.",
      "The blocked site is definitely safe because DNS saw it.",
    ],
    answer: 0,
    explanation:
      "A DNS block can be a defensive control working correctly. The safe response is to document and report if needed, not bypass or test it.",
  },
  {
    question: "Which statement about DNS is most accurate?",
    choices: [
      "DNS is one clue in network activity, not a complete trust decision by itself.",
      "DNS automatically checks every file for malware.",
      "DNS means HTTPS is always valid.",
      "DNS removes the need for browser warnings.",
    ],
    answer: 0,
    explanation:
      "DNS can show what name was requested, but defenders combine DNS with other evidence such as browser warnings, certificates, logs, and user reports.",
  },
  {
    question: "Why do defenders review DNS logs?",
    choices: [
      "They can show which domain names devices tried to reach.",
      "They reveal every private message a student sent.",
      "They prove who typed every password.",
      "They allow students to control school filtering rules.",
    ],
    answer: 0,
    explanation:
      "DNS logs can show requested domain names and outcomes like allowed or blocked. They do not replace privacy rules or authorization boundaries.",
  },
  {
    question: "Which action follows CyberShield safety rules?",
    choices: [
      "Analyze fake DNS logs that use .example domains.",
      "Open a real suspicious link to see where it goes.",
      "Tell classmates how to bypass a school DNS filter.",
      "Change router DNS settings without permission.",
    ],
    answer: 0,
    explanation:
      "CyberShield practice uses fake data only. Students should not open real suspicious links, bypass filters, or change real network settings without authorization.",
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
          Previous: B4.3
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
          Next: B4.5 Packets and Network Traffic Concepts
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

function DNSFlowDiagram() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Framework</p>
      <h2 className="mt-2 text-2xl font-bold text-white">How a website name becomes a network destination</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        DNS is often described as a phonebook-style helper for the internet. That comparison is not perfect, but it helps beginners understand the main idea: people remember names, while devices need address information.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {dnsSteps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{step.detail}</p>
            <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
              <span className="font-black">Defender view:</span> {step.defenderView}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DNSNameBreakdown() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">A safe fake web address has several clue zones</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="border-b border-slate-800 bg-slate-900 px-5 py-4 font-mono text-sm text-cyan-100">
          https://portal.learning.example/courses/networking?week=4
        </div>
        <div className="grid gap-0 md:grid-cols-4">
          <div className="border-b border-slate-800 p-5 md:border-b-0 md:border-r">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Scheme</p>
            <p className="mt-2 font-mono text-white">https://</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">The connection type shown by the browser. It still needs other trust checks.</p>
          </div>
          <div className="border-b border-slate-800 p-5 md:border-b-0 md:border-r">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Subdomain</p>
            <p className="mt-2 font-mono text-white">portal</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">A named part before the main domain. Organizations may use many subdomains.</p>
          </div>
          <div className="border-b border-slate-800 p-5 md:border-b-0 md:border-r">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Domain</p>
            <p className="mt-2 font-mono text-white">learning.example</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">The main fake website name that DNS helps resolve.</p>
          </div>
          <div className="p-5">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Path and Query</p>
            <p className="mt-2 font-mono text-white">/courses?week=4</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Extra location or request details after the domain name.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DNSAndWebsiteNamesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#0f172a_58%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B4 • Lesson B4.4
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                DNS and Website Names
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Website names are easier for humans to remember than network addresses. DNS helps connect those names to destinations, but defenders still need to review context, filtering, browser warnings, and trusted reporting before deciding whether something is safe.
              </p>
              <div className="mt-8"><TopNav /></div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Focus</span>
                  <span className="font-bold text-white">DNS basics</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Visual</span>
                  <span className="font-bold text-white">Name-to-address flow</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <span>Lab</span>
                  <span className="font-bold text-white">Fake DNS log review</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Safety rule</span>
                  <span className="font-bold text-cyan-200">Do not test real suspicious links</span>
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
          lessonTitle="B4.4 DNS and Website Names"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain that networks connect devices and services.",
            "I understand routers, switches, and Wi-Fi have different network roles.",
            "I will use only fake domain names and fake DNS logs in this lesson.",
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard eyebrow="Learning Objectives" title="By the end of this lesson, you can explain DNS safely.">
            <ul className="space-y-3 leading-7">
              <li>• Explain why website names need DNS-style translation.</li>
              <li>• Identify parts of a fake website address without visiting real suspicious links.</li>
              <li>• Interpret fake DNS logs and DNS filtering outcomes.</li>
              <li>• Choose safe actions when a DNS warning or block appears.</li>
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Professional Hook" title="Why defenders look at DNS before browser traffic">
            <p className="leading-7">
              DNS requests can appear early in a device's attempt to reach a website. That makes DNS useful for defenders because fake training logs can show what domain was requested, whether a filter blocked it, and whether the request matched normal activity. It is evidence, not a final verdict by itself.
            </p>
          </SectionCard>
        </section>

        <SectionCard eyebrow="Why This Matters" title="Names are convenient, but convenience does not equal trust">
          <p className="leading-8">
            Students often recognize websites by names, not network addresses. Attackers and scammers can also use names that look familiar, confusing, or urgent. A beginner defender learns to slow down, read the name carefully, respect blocks and browser warnings, and report anything suspicious instead of testing it.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="DNS is a helper, not a safety guarantee">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Human-friendly name</h3>
              <p className="mt-3 leading-7 text-slate-300">People type and remember names like learning.example more easily than numeric addresses.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">DNS lookup</h3>
              <p className="mt-3 leading-7 text-slate-300">The device asks where that name points. A resolver or filter may answer, cache, or block the request.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-black text-cyan-200">Defensive judgment</h3>
              <p className="mt-3 leading-7 text-slate-300">Defenders combine DNS with other clues before making a safe decision.</p>
            </div>
          </div>
        </SectionCard>

        <DNSFlowDiagram />
        <DNSNameBreakdown />

        <SectionCard eyebrow="Key Vocabulary" title="Terms to know before reading DNS evidence">
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
          title="Fake DNS Filter Overview"
          subtitle="A fictional dashboard showing how a school-safe filter might summarize DNS requests for defensive review."
          metrics={[
            { label: "Allowed learning domains", value: "42", note: "Normal requests to approved class resources." },
            { label: "Blocked risky domains", value: "3", note: "Requests blocked by fake DNS policy." },
            { label: "Needs review", value: "1", note: "Unfamiliar domain name requires trusted staff review." },
          ]}
        />

        <FakeLogPanel
          title="Fake DNS Request Events"
          logs={[
            "09:14 student-laptop-07 asked DNS for learning.example -> allowed",
            "09:15 student-laptop-07 asked DNS for portal.learning.example -> allowed",
            "09:18 library-tablet-02 asked DNS for unknown-prize.example -> blocked by policy",
            "09:19 library-tablet-02 showed browser warning -> user closed tab",
            "09:20 teacher-device-01 reported unknown-prize.example to tech staff queue",
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="Beginner DNS mistakes to avoid">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Review a fake DNS filtering event">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 1: Find the name</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Identify the fake domain that was requested, such as learning.example or unknown-prize.example.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 2: Read the outcome</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Look for allowed, blocked, cached, or needs-review outcomes in the fake event.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 3: Check context</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Compare the request to the user's role and expected activity. Do not assume intent too quickly.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <p className="font-black text-cyan-200">Step 4: Choose safely</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Document fake findings. For real suspicious links or blocks, ask a teacher or school technology staff.</p>
            </div>
          </div>
        </SectionCard>

        <AnalyzeEvidenceCard
          title="Was the DNS block a problem or a protection?"
          evidence={[
            "Fake device: library-tablet-02 requested unknown-prize.example at 09:18.",
            "Fake DNS result: blocked by school-safe DNS policy.",
            "Fake browser result: warning appeared and the user closed the tab.",
            "Fake reporting result: teacher-device-01 reported the name to the technology queue.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "The block may have protected the device, so document it and let trusted staff review the fake report.",
            "The student should try another browser until the site opens.",
            "The blocked domain is definitely harmless because it used a normal-looking name.",
            "The class should share the domain so everyone can test it.",
          ]}
          bestAnswer={0}
          explanation="The fake evidence shows a DNS policy block and a safe user response. A defender documents the event and escalates through trusted channels instead of bypassing or testing the domain."
        />

        <ScenarioDecisionLab
          title="A classmate wants to check a blocked site"
          scenario="A classmate says a blocked website might be a mistake and wants to open it on a phone using a different network. What is the safest response?"
          choices={[
            {
              label: "A",
              response: "Tell them to test it somewhere else because school Wi-Fi blocked it.",
              outcome: "Risky. Bypassing a block can expose the user to risk and may break school rules.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Tell them not to open it and to report the block to a teacher or school technology staff if it affects classwork.",
              outcome: "Best choice. This respects safety, authorization, and trusted reporting channels.",
              tone: "best",
            },
            {
              label: "C",
              response: "Search for copies of the blocked site so the class can compare them.",
              outcome: "Risky. Searching around a suspicious or blocked site can increase exposure and is not needed for beginner defensive learning.",
              tone: "risk",
            },
          ]}
        />

        <FakeAlertCard
          title="DNS Filter Blocked Suspicious-Looking Domain"
          severity="Low"
          time="09:18"
          source="Fake DNS filter training alert"
          details="A fictional library tablet requested unknown-prize.example. The fake DNS filter blocked the request based on school-safe policy and displayed a browser warning."
          recommendation="Do not visit or bypass the blocked domain. Document the event in the fake training notes. For real blocked sites needed for classwork, ask a teacher or school technology staff."
        />

        <DefenderChecklist
          title="DNS and Website Names Checklist"
          items={[
            "I can explain that DNS helps translate website names into address information.",
            "I understand that DNS does not prove a site is safe by itself.",
            "I can identify the main domain in a fake URL without visiting it.",
            "I can review fake DNS logs and explain allowed, blocked, and needs-review outcomes.",
            "I know not to open real suspicious links, bypass DNS filters, or change DNS settings without permission.",
          ]}
        />

        <MiniQuiz title="DNS and Website Names Quiz" questions={quizQuestions} />

        <PortfolioPrompt
          title="Write a DNS safety explanation"
          prompt="Write a short beginner-friendly explanation of how DNS helps a browser find learning.example. Then explain why a DNS block should be treated as a safety signal instead of something to bypass."
          tips={[
            "Use fake names only, such as learning.example and unknown-prize.example.",
            "Explain that DNS is useful evidence but not the only safety clue.",
            "Mention trusted adults or school technology staff for real blocked or suspicious sites.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "DNS helps devices translate website names into address information that networks can use.",
            "A website name is not proof of safety; defenders still check context, browser warnings, certificates, logs, and reports.",
            "DNS filtering can block risky or disallowed domains before a browser connects.",
            "CyberShield practice uses fake domains and fake logs only; students should never test real suspicious links or bypass school filters.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}