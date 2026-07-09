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

const modulePath = "/high-school/beginner/cybersecurity-foundations";
const previousLesson = `${modulePath}/confidentiality-integrity-availability`;
const nextLesson = `${modulePath}/how-cyber-defenders-think`;

const coreTerms = [
  {
    term: "Asset",
    plain: "Something valuable that needs protection.",
    example: "A fake student portal, a practice account, a school device, or a class project file.",
  },
  {
    term: "Threat",
    plain: "Something that could cause harm to an asset.",
    example: "A scam message, a lost device, a power outage, or a person trying to access something they should not.",
  },
  {
    term: "Vulnerability",
    plain: "A weakness that could make harm more likely or more serious.",
    example: "A weak password, missing updates, confusing permissions, or no backup plan.",
  },
  {
    term: "Risk",
    plain: "The chance and impact of harm if a threat affects a vulnerable asset.",
    example: "A fake club account with a weak password could be taken over and used to send misleading messages.",
  },
  {
    term: "Control",
    plain: "A safeguard that reduces risk.",
    example: "MFA, updates, backups, access reviews, reporting workflows, and training.",
  },
  {
    term: "Impact",
    plain: "How serious the harm would be if the risk happened.",
    example: "A small typo may be low impact, while losing access to an important project folder may be higher impact.",
  },
];

const riskRows = [
  {
    asset: "Fake club email account",
    threat: "Impersonation message",
    vulnerability: "No MFA enabled",
    impact: "High",
    likelihood: "Medium",
    response: "Enable MFA and create a trusted reporting path.",
  },
  {
    asset: "Practice science project file",
    threat: "Accidental deletion",
    vulnerability: "No backup copy",
    impact: "Medium",
    likelihood: "Medium",
    response: "Use version history and a backup plan.",
  },
  {
    asset: "Fake class website",
    threat: "Confusing fake login prompt",
    vulnerability: "Students are unsure how to verify the page",
    impact: "Medium",
    likelihood: "Low",
    response: "Teach URL checking and ask students to report suspicious prompts.",
  },
];

export default function ThreatsVulnerabilitiesRiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B1 • Lesson B1.3
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Threats, Vulnerabilities, and Risk
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cyber defenders do not protect everything the same way. They identify what is valuable, what could go wrong,
                what weaknesses exist, and which risks deserve attention first.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={previousLesson}
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  ← Previous Lesson
                </Link>
                <Link
                  href={modulePath}
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Back to Module
                </Link>
                <Link
                  href={nextLesson}
                  className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Next Lesson
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Risk Model</p>
              <h2 className="mt-3 text-2xl font-black text-white">Asset + Threat + Vulnerability</h2>
              <div className="mt-6 space-y-3">
                {[
                  ["Asset", "What needs protection?"],
                  ["Threat", "What could cause harm?"],
                  ["Vulnerability", "What weakness could be used or triggered?"],
                  ["Risk", "How likely and serious is the harm?"],
                ].map(([label, text], index) => (
                  <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-black text-cyan-100">{label}</p>
                        <p className="text-sm text-slate-400">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm text-yellow-50">
                Training rule: students classify fake examples and choose safe defensive responses. They never test real systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link href={previousLesson} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            ← Previous
          </Link>
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
            Next Lesson →
          </Link>
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B1: Cybersecurity Foundations"
          lessonTitle="B1.3 Threats, Vulnerabilities, and Risk"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can explain what cybersecurity protects.",
            "I can describe confidentiality, integrity, and availability.",
            "I am ready to use fake examples only and avoid testing real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Real-World Professional Hook</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Defenders prioritize risk because time and resources are limited.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a fictional school technology team responsible for accounts, devices, class websites, and shared files.
            They cannot fix every small issue instantly. They need a way to decide what matters most. Risk thinking helps
            them ask: what asset is affected, what could go wrong, what weakness exists, and how serious would the harm be?
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            This lesson teaches the beginner language defenders use before they choose controls, write reports, or escalate a concern.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Define asset, threat, vulnerability, risk, likelihood, impact, and control.",
            },
            {
              title: "Learning Objective 2",
              text: "Classify fake cyber scenarios using a simple risk thinking model.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose safe defensive responses that reduce risk without investigating real systems.",
            },
          ].map((objective) => (
            <div key={objective.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{objective.title}</p>
              <p className="mt-3 text-slate-300">{objective.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Why This Matters</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Risk thinking keeps defenders focused and calm.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <h3 className="font-bold text-white">It prevents panic.</h3>
              <p className="mt-2">Not every alert means a disaster happened. Defenders look at evidence before reacting.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <h3 className="font-bold text-white">It helps prioritize.</h3>
              <p className="mt-2">A high-impact account issue may deserve faster attention than a low-impact cosmetic bug.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <h3 className="font-bold text-white">It supports better controls.</h3>
              <p className="mt-2">Once the risk is clear, defenders can choose safeguards like MFA, backups, updates, and access reviews.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Core Concept</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Risk is not just danger. It is danger in context.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A threat by itself is not the full story. A vulnerability by itself is not the full story. Defenders care about
            how a threat could affect an asset through a weakness, and how likely and harmful that outcome would be.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Threat</p>
              <h3 className="mt-2 text-xl font-black text-white">What could cause harm?</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Examples include fake scam messages, accidental deletion, device loss, outages, or unauthorized access attempts.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">Vulnerability</p>
              <h3 className="mt-2 text-xl font-black text-white">What weakness exists?</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Examples include weak passwords, no MFA, missing updates, confusing permissions, or no recovery plan.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Risk</p>
              <h3 className="mt-2 text-xl font-black text-white">How serious is the possible outcome?</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Risk combines what could happen, how likely it is, and how much it would affect people, data, or services.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Risk equation visual</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            This built-in visual acts like an image. It shows how a defender moves from asset identification to a safe risk response.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_0.25fr_1fr_0.25fr_1fr_0.35fr_1fr] lg:items-center">
              {[
                ["Asset", "Fake club account", "text-cyan-200", "border-cyan-400/40", "bg-cyan-400/10"],
                ["Threat", "Impersonation message", "text-yellow-200", "border-yellow-400/40", "bg-yellow-400/10"],
                ["Vulnerability", "No MFA enabled", "text-red-200", "border-red-400/40", "bg-red-400/10"],
                ["Risk", "Misleading message sent from trusted account", "text-emerald-200", "border-emerald-400/40", "bg-emerald-400/10"],
              ].map(([label, text, textColor, borderColor, bgColor], index) => (
                <>
                  <div key={label} className={`rounded-2xl border ${borderColor} ${bgColor} p-5`}>
                    <p className={`text-sm font-bold uppercase tracking-[0.2em] ${textColor}`}>{label}</p>
                    <p className="mt-3 font-bold text-white">{text}</p>
                  </div>
                  {index < 3 && (
                    <div key={`${label}-arrow`} className="hidden text-center text-3xl font-black text-slate-500 lg:block">
                      →
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <span className="font-bold">Defensive response:</span> enable MFA, review trusted senders, document the fake scenario, and teach a reporting workflow.
            </div>
          </div>
        </section>

        <VisualDiagramCard
          title="Beginner Risk Thinking Workflow"
          description="A simple defender workflow helps students avoid guessing, blaming, or testing real systems. The goal is to classify the issue and choose a safe response."
          steps={[
            "Identify the fake asset and why it matters.",
            "Name the possible threat and weakness.",
            "Estimate impact, choose a control, and report through approved help.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Risk terms defenders use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreTerms.map((item) => (
              <div key={item.term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{item.term}</h3>
                <p className="mt-2 text-slate-300">{item.plain}</p>
                <p className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-400">
                  <span className="font-bold text-cyan-200">Fake example:</span> {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
          <h2 className="mt-2 text-2xl font-bold text-white">How defenders describe risk</h2>
          <div className="mt-5 space-y-3">
            {[
              "Start with the asset. You cannot protect what you have not identified.",
              "Name the threat. Be specific about what could cause harm, but avoid dramatic guesses.",
              "Name the vulnerability. A weakness makes the threat more likely or more harmful.",
              "Estimate likelihood and impact. Use simple labels like low, medium, or high for beginner analysis.",
              "Recommend a control. The control should reduce the risk and stay inside approved defensive boundaries.",
              "Escalate real concerns to trusted adults, teachers, guardians, counselors, or school technology staff.",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
                <span className="mr-3 font-black text-cyan-300">{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">Common Mistakes</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What beginners often get wrong</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Confusing threat and vulnerability", "A threat is what could cause harm. A vulnerability is the weakness that makes harm possible or worse."],
              ["Calling every issue high risk", "Risk depends on context, likelihood, and impact. Defenders prioritize based on evidence."],
              ["Trying to verify real issues alone", "Students should not test real systems. They should document safely and report to trusted support."],
            ].map(([mistake, correction]) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-slate-950 p-5">
                <h3 className="font-bold text-red-100">{mistake}</h3>
                <p className="mt-2 text-slate-300">{correction}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Risk Overview Dashboard"
          subtitle="A fictional dashboard showing beginner risk labels for training only. No real systems, people, or accounts are involved."
          metrics={[
            { label: "Open fake risks", value: "3", note: "Three practice scenarios need a defensive recommendation." },
            { label: "Highest impact", value: "High", note: "The fake club account could send misleading messages." },
            { label: "Recommended next control", value: "MFA", note: "The most useful first safeguard for the account scenario." },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Risk Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Training risk register sample</h2>
          <p className="mt-3 leading-7 text-slate-300">
            A risk register is a structured list of risks and planned responses. This one uses fake school-safe examples only.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
            <div className="grid gap-px bg-slate-800 text-sm md:grid-cols-6">
              {riskRows.map((row) => (
                <>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Asset</p>
                    <p className="font-bold text-cyan-100">{row.asset}</p>
                  </div>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Threat</p>
                    <p className="text-slate-300">{row.threat}</p>
                  </div>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Vulnerability</p>
                    <p className="text-slate-300">{row.vulnerability}</p>
                  </div>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Impact</p>
                    <p className="font-bold text-yellow-100">{row.impact}</p>
                  </div>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Likelihood</p>
                    <p className="font-bold text-cyan-100">{row.likelihood}</p>
                  </div>
                  <div className="bg-slate-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:hidden">Response</p>
                    <p className="text-emerald-100">{row.response}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        <FakeAlertCard
          title="Fake Risk Review Alert"
          severity="Medium"
          time="11:18 AM"
          source="CyberShield Training Risk Console"
          details="A fictional club email account does not have MFA enabled. The account is used to send announcements in a fake practice environment."
          recommendation="Classify the asset, threat, vulnerability, likelihood, and impact. Recommend MFA, access review, and a trusted reporting workflow. Do not test any real account."
        />

        <FakeLogPanel
          title="Fake Risk Clues"
          logs={[
            "11:02 asset=club-email value=high owner=fake-student-organization",
            "11:05 control_check=mfa status=not_enabled account=club-email-demo",
            "11:09 threat_model=impersonation likelihood=medium impact=high",
            "11:18 recommendation='enable MFA and document approved account owner' status=draft",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Build a risk statement</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A risk statement usually connects the asset, threat, vulnerability, and possible impact. Use the examples below
            to practice writing safe, evidence-based risk statements.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              [
                "Account risk",
                "Because the fake club account has no MFA, an impersonation threat could lead to misleading announcements being sent from a trusted account.",
                "Recommended control: enable MFA and review account ownership.",
              ],
              [
                "Data risk",
                "Because the practice project folder has no backup copy, accidental deletion could make the file unavailable during a deadline.",
                "Recommended control: use version history and scheduled backups.",
              ],
              [
                "Privacy risk",
                "Because the fake roster permissions are too broad, private practice data could be visible to people who do not need it.",
                "Recommended control: review permissions and apply least privilege.",
              ],
            ].map(([title, statement, control]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{statement}</p>
                <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm font-bold text-emerald-100">
                  {control}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which statement describes the risk best?"
          evidence={[
            "A fictional club account sends announcements to a large fake audience.",
            "The account does not have MFA enabled in the practice scenario.",
            "No suspicious real activity is being investigated.",
            "The club wants to reduce the chance of impersonation before a major event.",
          ]}
          question="What is the best beginner defender conclusion?"
          options={[
            "The risk is that a trusted fake club account could be impersonated more easily because MFA is not enabled.",
            "The threat is MFA because it makes logging in slower.",
            "Students should try logging into the account to see whether it is vulnerable.",
            "There is no risk because nothing bad has already happened.",
          ]}
          bestAnswer={0}
          explanation="The best answer connects asset, threat, vulnerability, and possible impact. Defenders can reduce the risk by enabling MFA and using approved account management, without testing real accounts."
        />

        <ScenarioDecisionLab
          title="You notice a possible real weakness"
          scenario="You are helping with a school club website and notice that a shared document may be visible to more people than expected. You are not sure whether it contains private information. What is the safest next step?"
          choices={[
            {
              label: "A",
              response: "Do not spread the link or inspect private contents. Tell the club advisor or trusted school technology staff and explain what you noticed.",
              outcome: "Best choice. This protects privacy, avoids unnecessary access, and uses an approved reporting path.",
              tone: "best",
            },
            {
              label: "B",
              response: "Open every file in the folder to see how serious the problem is before telling anyone.",
              outcome: "Risky. Students should not inspect private contents to measure risk. Report the concern safely.",
              tone: "risk",
            },
            {
              label: "C",
              response: "Post the link in a group chat and ask classmates whether they can open it too.",
              outcome: "Unsafe. Sharing a possible exposure can make the risk worse.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can define asset, threat, vulnerability, risk, impact, and control.",
            "I can explain why threat and vulnerability are not the same thing.",
            "I can write a beginner risk statement using fake evidence.",
            "I can choose safe reporting and defensive controls instead of testing real systems.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "In cybersecurity, what is an asset?",
              choices: ["Something valuable that needs protection", "A guaranteed cyber attack", "A random error message", "A person who breaks rules"],
              answer: 0,
              explanation: "An asset is something valuable, such as an account, file, device, system, or data set, that needs protection.",
            },
            {
              question: "Which option is the best example of a vulnerability?",
              choices: ["A fake club account", "A weak password on a fake account", "A scam message threat", "A completed backup"],
              answer: 1,
              explanation: "A vulnerability is a weakness. A weak password is a weakness that can increase risk.",
            },
            {
              question: "What does risk combine?",
              choices: ["Only the name of the system", "Only whether a student is worried", "Possible harm, likelihood, and impact", "The color of a warning banner"],
              answer: 2,
              explanation: "Risk is about possible harm in context, including likelihood and impact.",
            },
            {
              question: "What should a student do when they notice a possible real security weakness?",
              choices: [
                "Test it more to prove it is real",
                "Share it widely so others can confirm it",
                "Avoid spreading details and report it to a trusted teacher, guardian, counselor, or school technology staff",
                "Ignore it because only professionals can notice risk",
              ],
              answer: 2,
              explanation: "Students should use trusted reporting paths and avoid testing, spreading, or collecting private information.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create a Beginner Risk Register Entry"
          prompt="Write one fake risk register entry for a school-safe scenario. Include the asset, threat, vulnerability, likelihood, impact, and recommended control. Keep the example fictional and defensive."
          tips={[
            "Use fake names, fake accounts, and fake systems only.",
            "Explain the risk with evidence instead of fear.",
            "Choose a safe control like MFA, backups, updates, permissions review, or reporting.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "An asset is something valuable that needs protection.",
            "A threat is something that could cause harm, while a vulnerability is a weakness that could make harm possible or worse.",
            "Risk combines possible harm, likelihood, and impact in context.",
            "Controls are safeguards that reduce risk, such as MFA, backups, updates, access reviews, and training.",
            "Students should report real concerns through trusted adults or school technology staff instead of testing real systems.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link href={previousLesson} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            ← Previous
          </Link>
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
            Next Lesson →
          </Link>
        </nav>
      </div>

      <Footer />
    </main>
  );
}