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
  VisualDiagramCard,
} from "@/components/high-school/HighSchoolComponents";

const moduleHref = "/high-school/beginner/cybersecurity-foundations";
const previousHref = "/high-school/beginner/cybersecurity-foundations/safe-case-study-what-went-wrong";
const nextHref = "/high-school/beginner/cybersecurity-foundations/module-test";

function NavButton({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          : "rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      }
    >
      {children}
    </Link>
  );
}

function LessonNav() {
  return (
    <nav className="flex flex-wrap gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <NavButton href={previousHref}>← Previous Lesson</NavButton>
      <NavButton href={moduleHref}>Back to Module</NavButton>
      <NavButton href="/high-school/beginner">Beginner Track</NavButton>
      <NavButton href={nextHref} variant="primary">
        Module Test →
      </NavButton>
    </nav>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function FoundationsMap() {
  const items = [
    {
      label: "Assets",
      title: "What needs protection?",
      detail: "Accounts, files, identities, devices, systems, learning spaces, and trusted communication.",
    },
    {
      label: "CIA Triad",
      title: "What kind of protection?",
      detail: "Confidentiality keeps access limited, integrity keeps information accurate, and availability keeps services usable.",
    },
    {
      label: "Risk",
      title: "What could go wrong?",
      detail: "Risk connects a threat, a vulnerability, an impact, and the likelihood that the problem could happen.",
    },
    {
      label: "Controls",
      title: "What reduces the risk?",
      detail: "Policies, settings, training, MFA, backups, updates, logs, approvals, and other defensive layers.",
    },
    {
      label: "Evidence",
      title: "What do we actually know?",
      detail: "Defenders use logs, reports, screenshots, settings, and timelines without guessing beyond the facts.",
    },
    {
      label: "Response",
      title: "What is the safest next step?",
      detail: "Protect people first, preserve evidence, document clearly, restore safer settings, and ask trusted help.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Review Map</p>
      <h2 className="mt-2 text-2xl font-bold text-white">The Beginner Defender Thinking Map</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        This map connects the full Cybersecurity Foundations module into one workflow. A beginner defender should be able to move from asset protection to safe response without jumping to unsafe actions.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
                {index + 1}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewSprintBoard() {
  const tasks = [
    {
      title: "Asset Inventory",
      prompt: "Name three assets in the fake club workspace that need protection.",
      example: "Club account, project folder, event schedule.",
      tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    },
    {
      title: "CIA Labeling",
      prompt: "Decide whether each issue affects confidentiality, integrity, availability, or more than one.",
      example: "Wrong file version = integrity. Locked-out account = availability.",
      tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    },
    {
      title: "Risk Statement",
      prompt: "Write a one-sentence risk statement using threat, vulnerability, and impact.",
      example: "If sharing settings are too open, an unintended person may view club files.",
      tone: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
    },
    {
      title: "Control Match",
      prompt: "Match one safeguard to each risk instead of trying to solve everything at once.",
      example: "Open sharing risk → invited-only access and owner review.",
      tone: "border-purple-400/30 bg-purple-400/10 text-purple-100",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Foundations Review Sprint</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        In this lab, students practice thinking like defenders using fake evidence. The goal is not to find someone to blame. The goal is to organize facts, reduce risk, and communicate clearly.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <div key={task.title} className={`rounded-2xl border p-5 ${task.tone}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Review Task</p>
            <h3 className="mt-3 text-xl font-black text-white">{task.title}</h3>
            <p className="mt-3 leading-7">{task.prompt}</p>
            <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200">
              <span className="font-bold text-cyan-200">Example:</span> {task.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FakeCasePacket() {
  const rows = [
    ["Asset", "Club project folder", "Contains fake event plans and shared team notes"],
    ["Observation", "Sharing setting changed", "Anyone with the link could view for 38 minutes"],
    ["Report", "Student reported unexpected link", "Useful evidence, but still needs verification"],
    ["Control", "Invited-only sharing", "Reduces accidental exposure"],
    ["Control", "MFA on club account", "Reduces account takeover risk"],
    ["Next step", "Ask teacher sponsor and school tech staff to review", "Keeps response responsible and authorized"],
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Evidence Packet</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Review the Case Packet</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A defensive review packet should be simple, factual, and safe. Everything below is fake training data.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        <div className="grid grid-cols-3 bg-slate-950 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
          <div className="border-r border-slate-800 p-4">Type</div>
          <div className="border-r border-slate-800 p-4">Item</div>
          <div className="p-4">Why it matters</div>
        </div>
        {rows.map((row, index) => (
          <div key={row.join("-")} className={`grid grid-cols-3 text-sm ${index % 2 === 0 ? "bg-slate-900" : "bg-slate-950"}`}>
            <div className="border-r border-slate-800 p-4 font-semibold text-slate-200">{row[0]}</div>
            <div className="border-r border-slate-800 p-4 text-slate-300">{row[1]}</div>
            <div className="p-4 text-slate-300">{row[2]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VocabularyReviewGrid() {
  const terms = [
    ["Asset", "Something valuable that needs protection."],
    ["Threat", "Something that could cause harm."],
    ["Vulnerability", "A weakness that could make harm easier."],
    ["Risk", "The chance and impact of something going wrong."],
    ["Control", "A safeguard that reduces risk."],
    ["Defense-in-depth", "Using multiple layers so one failure does not ruin everything."],
    ["Confidentiality", "Keeping information limited to the right people."],
    ["Integrity", "Keeping information accurate and trustworthy."],
    ["Availability", "Keeping systems and information usable when needed."],
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary Review</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Module 1 Vocabulary You Should Own</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {terms.map(([term, definition]) => (
          <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-bold text-cyan-200">{term}</h3>
            <p className="mt-3 leading-7 text-slate-300">{definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommonMistakesReview() {
  const mistakes = [
    {
      mistake: "Jumping to conclusions before checking evidence.",
      better: "Separate confirmed facts from assumptions and unknowns.",
    },
    {
      mistake: "Thinking cybersecurity only protects computers.",
      better: "Remember that cybersecurity also protects people, trust, identity, time, and learning spaces.",
    },
    {
      mistake: "Treating one control as a complete solution.",
      better: "Use defense-in-depth: settings, training, monitoring, documentation, and trusted reporting together.",
    },
    {
      mistake: "Trying to investigate serious issues alone.",
      better: "Stop, document what you safely observed, and ask a trusted adult or school technology staff member.",
    },
  ];

  return (
    <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">Common Mistakes</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Mistakes to Avoid Before the Module Test</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {mistakes.map((item) => (
          <div key={item.mistake} className="rounded-2xl border border-red-400/30 bg-slate-950 p-5">
            <p className="font-bold text-red-100">Avoid: {item.mistake}</p>
            <p className="mt-3 leading-7 text-emerald-100"><span className="font-bold">Better:</span> {item.better}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FoundationsReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-cyan-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">High School Beginner • Module B1 • Lesson 7</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Foundations Review Lab</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Bring the whole Cybersecurity Foundations module together: assets, CIA, threats, vulnerabilities, risk, defender thinking, controls, layers, and safe case-study reasoning.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">Fake evidence only</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">Defensive review lab</span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-200">Module test readiness</span>
          </div>
        </div>

        <LessonNav />

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B1: Cybersecurity Foundations"
          lessonTitle="B1.7 Foundations Review Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start the Review Lab"
          items={[
            "I can explain what cybersecurity protects beyond just computers.",
            "I can describe confidentiality, integrity, and availability in my own words.",
            "I know the difference between a threat, a vulnerability, and a risk.",
            "I understand why defenders use evidence and safe escalation instead of guessing.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="How Real Training Labs Are Different From Regular Notes">
          <p className="leading-8">
            In a real cybersecurity learning path, review is not just memorizing terms. Students are expected to apply the terms to messy situations: a confusing alert, a file-sharing mistake, an unclear report, or a dashboard with mixed signals. This review lab turns Module 1 into a defender-style practice session.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="By the End of This Lesson, You Should Be Able To">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Identify assets, risks, controls, and evidence in a fake scenario.",
              "Apply the CIA triad to beginner cybersecurity situations.",
              "Explain why defense-in-depth is stronger than one single safeguard.",
              "Choose safe defensive next steps when evidence is incomplete.",
              "Prepare for the Module B1 test without seeing answers early.",
              "Write a short portfolio-ready incident summary using clear language.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Foundations Make Every Later Track Easier">
          <p className="leading-8">
            Beginner cybersecurity can feel simple at first, but these ideas become the base for networking defense, logs, IAM, incident response, cloud security, secure coding, risk management, and advanced architecture. If a student can clearly explain assets, risk, controls, evidence, and safe response now, the Intermediate and Advanced tracks will make much more sense later.
          </p>
        </SectionCard>

        <FoundationsMap />

        <VocabularyReviewGrid />

        <VisualDiagramCard
          title="Module 1 Concept Flow"
          description="Use this flow when you are not sure how to analyze a situation. Start with what matters, then identify what could go wrong, then choose a safe defensive action."
          steps={[
            "Identify what needs protection",
            "Describe what could go wrong",
            "Match the safest defensive control",
          ]}
        />

        <SectionCard eyebrow="Core Concept Review" title="The One-Sentence Version of Module B1">
          <p className="leading-8">
            Cybersecurity protects valuable people, data, systems, and trust by using evidence-based thinking, risk reduction, and layered safeguards to prevent harm, detect problems, and respond safely.
          </p>
        </SectionCard>

        <SectionCard eyebrow="Technical Breakdown" title="How to Think Through Any Beginner Security Scenario">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-200">Step 1: Name the asset</h3>
              <p className="mt-3 leading-7 text-slate-300">Do not start with the problem. Start with what needs protection: an account, file, device, service, identity, or group.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-200">Step 2: Label the risk</h3>
              <p className="mt-3 leading-7 text-slate-300">Connect the threat, vulnerability, likelihood, and impact. Risk is not just a scary word; it is a structured way to think.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-200">Step 3: Choose the control</h3>
              <p className="mt-3 leading-7 text-slate-300">Pick a safeguard that actually reduces the risk, like MFA, limited permissions, backups, updates, review steps, or reporting.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-200">Step 4: Document safely</h3>
              <p className="mt-3 leading-7 text-slate-300">Write what happened, what evidence exists, what is unknown, and who should be asked for trusted help.</p>
            </div>
          </div>
        </SectionCard>

        <CommonMistakesReview />

        <ReviewSprintBoard />

        <FakeDashboardCard
          title="Fake Foundations Review Dashboard"
          subtitle="A training dashboard for a fictional student club workspace. These numbers are fake and designed only for safe defensive practice."
          metrics={[
            { label: "Assets identified", value: "6", note: "Accounts, files, devices, shared folders, event plans, and trusted messages." },
            { label: "Risks reviewed", value: "4", note: "Open sharing, weak passwords, missing backups, and unclear reporting." },
            { label: "Controls matched", value: "7", note: "MFA, limited permissions, backups, updates, checklists, ownership, and escalation." },
          ]}
        />

        <FakeCasePacket />

        <FakeAlertCard
          title="Fake Review Alert: Open Sharing Detected"
          severity="Medium"
          time="10:22 AM"
          source="CyberShield Training Workspace"
          details="A fake shared folder changed from invited-only access to anyone-with-link access. The dashboard does not prove harm by itself, but it shows a setting that should be reviewed."
          recommendation="Restore least-necessary access, identify the folder owner, document the timeline, and ask the teacher sponsor or school technology staff to review account settings."
        />

        <FakeLogPanel
          title="Fake Review Log: Permission and Response Timeline"
          logs={[
            "2026-07-09 10:22:14 INFO folder=club-projects setting=anyone_with_link_view user=training-user-04",
            "2026-07-09 10:26:41 WARN student_report=unexpected_link_seen channel=fake-club-chat",
            "2026-07-09 10:31:09 INFO folder=club-projects setting=invited_only user=teacher-sponsor",
            "2026-07-09 10:35:20 INFO action=review_requested assigned_to=school_tech_staff status=open",
            "2026-07-09 10:46:55 INFO reminder=do_not_open_unknown_links note=fake-training-data",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Is the Best Defensive Conclusion?"
          evidence={[
            "The fake folder setting changed to anyone-with-link view for 38 minutes.",
            "A student reported seeing the link in an unexpected fake group chat.",
            "The log does not show whether an outside person opened the folder.",
            "The teacher sponsor restored invited-only access and requested a review.",
          ]}
          question="Which conclusion is strongest based only on the evidence?"
          options={[
            "The evidence proves that a serious attack definitely happened.",
            "There was a confirmed risky sharing setting that needed review, but some impact details are still unknown.",
            "The student who reported the link caused the whole issue.",
            "Nothing matters because the setting was changed back later.",
          ]}
          bestAnswer={1}
          explanation="The safest conclusion uses confirmed facts without exaggerating. The setting was risky and needed review, but the evidence does not prove every possible impact."
        />

        <ScenarioDecisionLab
          title="Final Module 1 Decision Challenge"
          scenario="You are helping a teacher sponsor review a fake club workspace. You see a risky sharing setting, one student report, and a few logs. The teacher asks what to do next."
          choices={[
            {
              label: "Choice A",
              response: "Write a short evidence summary, restore safer sharing, and ask school technology staff to review the account settings.",
              outcome: "Best choice. This protects the asset, documents evidence, and keeps the response authorized and safe.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Message every student and say that someone definitely broke into the account.",
              outcome: "Risky choice. That jumps beyond the evidence and could create confusion or unfair blame.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore it because the folder is only for a student club.",
              outcome: "Weak choice. Student club data and trust still matter, even if the situation is not a major emergency.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          title="Module B1 Readiness Checklist"
          items={[
            "I can explain what cybersecurity protects using more than one example.",
            "I can match confidentiality, integrity, and availability to real situations.",
            "I can tell the difference between a threat, vulnerability, risk, and control.",
            "I can explain why defenders use layers instead of one single safeguard.",
            "I can separate confirmed evidence from assumptions.",
            "I can choose safe next steps without testing real systems or handling serious issues alone.",
          ]}
        />

        <MiniQuiz
          title="Foundations Review Mini Quiz"
          questions={[
            {
              question: "Which sentence best explains cybersecurity at the beginner level?",
              choices: [
                "Cybersecurity only means stopping hackers.",
                "Cybersecurity protects people, data, systems, accounts, and trust using safe defensive actions.",
                "Cybersecurity means testing any suspicious website you find.",
                "Cybersecurity is only about passwords.",
              ],
              answer: 1,
              explanation: "Cybersecurity is broader than one threat or one tool. It protects people, data, systems, accounts, and trust through defensive practices.",
            },
            {
              question: "A shared file is accidentally edited with wrong information. Which part of the CIA triad is most directly affected?",
              choices: ["Confidentiality", "Integrity", "Availability", "Authentication"],
              answer: 1,
              explanation: "Integrity means information stays accurate and trustworthy. Wrong edits are an integrity issue.",
            },
            {
              question: "Which option is the best example of defense-in-depth?",
              choices: [
                "Using only one strong password and no other safeguards.",
                "Using MFA, limited permissions, updates, backups, training, and reporting together.",
                "Ignoring small risks until they become serious.",
                "Letting everyone have the same account access to keep things simple.",
              ],
              answer: 1,
              explanation: "Defense-in-depth means using multiple layers so one weak point does not ruin the whole system.",
            },
            {
              question: "What should a student do when a cybersecurity situation feels serious or unsafe?",
              choices: [
                "Try to investigate alone before anyone else knows.",
                "Click around until the problem is understood.",
                "Stop, document safe observations, and ask a trusted adult or school technology staff member.",
                "Post the details publicly so more people can help.",
              ],
              answer: 2,
              explanation: "Students should not handle serious problems alone. Safe observation, documentation, and trusted help are the right beginner response.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Portfolio Artifact: Beginner Security Review Summary"
          prompt="Write a 6-8 sentence summary of the fake shared-folder case. Include the asset, the risk, the evidence, the safest control, and the trusted adult or staff role that should help."
          tips={[
            "Use calm, professional wording.",
            "Separate facts from assumptions.",
            "Recommend defensive next steps only.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity protects people, data, systems, accounts, learning spaces, and trust.",
            "The CIA triad helps defenders name what kind of protection is needed.",
            "Risk connects threats, vulnerabilities, likelihood, and impact.",
            "Defense-in-depth uses multiple safeguards instead of relying on one perfect control.",
            "Good defenders use evidence, avoid guessing, document clearly, and ask trusted help when needed.",
          ]}
        />

        <LessonNav />
      </section>

      <Footer />
    </main>
  );
}