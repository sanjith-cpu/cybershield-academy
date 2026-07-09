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
const nextLesson = `${modulePath}/confidentiality-integrity-availability`;

export default function WhatCybersecurityProtectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B1 • Lesson B1.1
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                What Cybersecurity Protects
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cybersecurity is not only about computers. It protects people, data, accounts, devices,
                networks, services, trust, and the ability for a school or organization to keep working safely.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
                  Back to Beginner Track
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Professional Lens</p>
              <h2 className="mt-3 text-2xl font-black text-white">Defenders protect value.</h2>
              <p className="mt-4 text-slate-300">
                A defender first asks: What matters here? Who relies on it? What could happen if it is exposed,
                changed, lost, interrupted, or misused?
              </p>
              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
                Training rule: every example on this page uses fake data and defensive thinking only.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-4">
          <Link href={modulePath} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            ← Back to Module
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
          lessonTitle="B1.1 What Cybersecurity Protects"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that this course is about ethical, defensive cybersecurity.",
            "I can explain why fake examples are safer than real targets.",
            "I am ready to think like a defender, not an attacker.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Real-World Professional Hook</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A security team starts with assets, not tools.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a school district opening a new online assignment portal. Before a defender thinks about
            passwords, alerts, backups, or policies, they need to identify what the portal protects: student work,
            grades, teacher accounts, class schedules, parent communication, device access, and the trust that the
            system will be available when students need it.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            This is the first professional habit: cybersecurity protects things that have value. Those things are
            called assets. An asset can be digital, physical, human, operational, or reputational.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Define cybersecurity as protection of people, data, devices, systems, services, and trust.",
            },
            {
              title: "Learning Objective 2",
              text: "Identify common asset types in a school or small organization using fake examples.",
            },
            {
              title: "Learning Objective 3",
              text: "Explain why defenders ask what can go wrong before choosing a control.",
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
          <h2 className="mt-2 text-2xl font-bold text-white">Bad security choices usually begin with a blurry target.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Defender thinking</h3>
              <p className="mt-2">Start by identifying what needs protection, who depends on it, and what harm could happen if it fails.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Common beginner mistake</h3>
              <p className="mt-2">Jump straight to a tool or scary threat without understanding what asset is actually at risk.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Core Concept</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Cybersecurity protects assets from harm.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            In cybersecurity, an asset is anything valuable enough to protect. A student account is an asset because
            it controls access. A class website is an asset because students rely on it. A school laptop is an asset
            because it stores work and connects to other systems. A backup is an asset because it helps recovery.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["People", "Students, teachers, families, staff, and anyone affected by cyber choices."],
              ["Data", "Assignments, grades, schedules, messages, records, and other information."],
              ["Systems", "Devices, apps, websites, networks, accounts, and cloud services."],
              ["Trust", "Confidence that systems are accurate, private enough, reliable, and responsibly managed."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-200">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Asset Protection Flow"
          description="A beginner defender can use this simple flow before choosing any security control."
          steps={[
            "Identify the asset and why it matters.",
            "Ask what could expose, change, interrupt, or misuse it.",
            "Choose a safe defensive control and document the reason.",
          ]}
        />

        <FakeDashboardCard
          title="Fake School Portal Asset Dashboard"
          subtitle="This dashboard is fictional. It shows the types of things defenders might track before choosing protections."
          metrics={[
            { label: "Protected accounts", value: "1,240", note: "Student, teacher, and staff login identities." },
            { label: "Critical services", value: "6", note: "Learning portal, gradebook, email, Wi-Fi, file storage, help desk." },
            { label: "Recovery priority", value: "High", note: "Assignments and grades must be recoverable after mistakes or outages." },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Words defenders use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Asset", "Something valuable that needs protection, such as data, accounts, devices, services, or trust."],
              ["Control", "A safeguard that reduces risk, such as MFA, backups, updates, monitoring, or clear rules."],
              ["Impact", "The harm that could happen if an asset is exposed, changed, lost, or unavailable."],
              ["Stakeholder", "A person or group affected by the asset, such as students, teachers, families, or staff."],
              ["Availability", "The need for a system or data to be usable when authorized people need it."],
              ["Defensive scope", "The approved boundary of what a defender is allowed to review or protect."],
            ].map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
          <h2 className="mt-2 text-2xl font-bold text-white">The five protection questions</h2>
          <div className="mt-5 space-y-3">
            {[
              "What asset are we protecting?",
              "Who is allowed to use it?",
              "What could go wrong if it is exposed, changed, lost, or unavailable?",
              "Which safe control reduces that risk?",
              "Who should be told if something feels unsafe or outside your role?",
            ].map((question, index) => (
              <div key={question} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
                <span className="mr-3 font-black text-cyan-300">{index + 1}</span>
                {question}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">Common Mistakes</p>
          <h2 className="mt-2 text-2xl font-bold text-white">What beginners often misunderstand</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Thinking security is only about hackers", "Cybersecurity also protects against mistakes, outages, lost devices, weak processes, and unclear responsibility."],
              ["Protecting everything equally", "Defenders prioritize based on value, impact, likelihood, and the people affected."],
              ["Testing real systems", "CyberShield practice must stay in fake labs and approved learning spaces only."],
            ].map(([mistake, correction]) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-slate-950 p-5">
                <h3 className="font-bold text-red-100">{mistake}</h3>
                <p className="mt-2 text-slate-300">{correction}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeAlertCard
          title="Unusual Portal Availability Notice"
          severity="Medium"
          time="09:14 AM"
          source="Fake Student Portal Monitor"
          details="The fictional assignment portal was unavailable for 12 minutes during a class period. No real system is involved. Students reported they could not submit a practice assignment."
          recommendation="Treat availability as a protected cybersecurity goal. Document what happened, notify the right school technology staff, and review backup submission options."
        />

        <FakeLogPanel
          title="Fake Asset Clues"
          logs={[
            "09:00 portal.service status=healthy users=312",
            "09:12 portal.service status=degraded users_affected=87",
            "09:14 helpdesk.ticket category=availability summary='students cannot submit practice work'",
            "09:24 portal.service status=healthy recovery_note='service restored by approved admin team'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Map assets in a fake school portal</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Review the fictional portal below. Your job is not to test, break, bypass, or investigate any real system.
            Your job is to identify what needs protection and choose safe defensive thinking.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              ["Portal login", "Protects account access and identity."],
              ["Assignment uploads", "Protects student work, deadlines, and teacher feedback."],
              ["Grade view", "Protects accuracy, privacy, and trust."],
              ["Teacher admin panel", "Protects privileged actions and class management."],
              ["Cloud file storage", "Protects availability and recovery of important documents."],
              ["Help desk ticket", "Protects communication and response documentation."],
            ].map(([asset, purpose]) => (
              <div key={asset} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{asset}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{purpose}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which asset matters most first?"
          evidence={[
            "A fake class portal is unavailable during school hours.",
            "Students cannot submit a practice assignment before the deadline.",
            "A teacher reports that grades are still visible and unchanged.",
            "The approved technology staff already restored service after 12 minutes.",
          ]}
          question="What is the best beginner defender conclusion?"
          options={[
            "This is mainly an availability issue affecting the portal service and student work submissions.",
            "This proves someone stole grades, so students should investigate accounts themselves.",
            "This should be ignored because the outage was short.",
            "Students should try different real portal tricks to see what caused it.",
          ]}
          bestAnswer={0}
          explanation="The safest conclusion is based only on the fake evidence: the portal was briefly unavailable, which affected submissions. Defenders avoid guessing and do not test real systems without authorization."
        />

        <ScenarioDecisionLab
          title="A classmate asks you to check a real portal problem"
          scenario="A classmate says the real school portal acted strangely and asks you to test it because you are learning cybersecurity. What should you do?"
          choices={[
            {
              label: "A",
              response: "Try a few real tests quickly because it is for learning.",
              outcome: "Risky. Learning cybersecurity does not give permission to test real systems.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Tell the classmate not to share private details, document the basic concern, and report it to a trusted teacher or school technology staff.",
              outcome: "Best choice. This protects people, respects permission boundaries, and gets the issue to the right adults.",
              tone: "best",
            },
            {
              label: "C",
              response: "Ask for their password so you can check whether the account works.",
              outcome: "Unsafe. Never ask for or handle another person's password.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can name at least four types of assets cybersecurity protects.",
            "I can explain why people and trust are part of cybersecurity.",
            "I can separate fake practice labs from real systems that require permission.",
            "I can choose a safe reporting path when something feels unsafe.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "Which option is the best definition of an asset in cybersecurity?",
              choices: [
                "Only a physical computer",
                "Anything valuable enough to protect",
                "Only a password",
                "Only a hacker tool",
              ],
              answer: 1,
              explanation: "An asset can be data, accounts, devices, systems, services, people, processes, or trust.",
            },
            {
              question: "A school learning portal is down during class. Which protected area is most directly affected?",
              choices: ["Availability", "Graphic design", "Entertainment", "Keyboard shortcuts"],
              answer: 0,
              explanation: "Availability means authorized users can access a system or data when needed.",
            },
            {
              question: "What should a student do if a real school system seems unsafe?",
              choices: [
                "Test it personally to prove the problem",
                "Post screenshots publicly",
                "Report it to a trusted teacher, guardian, counselor, or school technology staff",
                "Ask classmates for passwords",
              ],
              answer: 2,
              explanation: "Students should use trusted reporting paths and avoid testing real systems without authorization.",
            },
            {
              question: "Why do defenders identify assets before choosing tools?",
              choices: [
                "So they know what value needs protection and what harm they are reducing",
                "So they can skip documentation",
                "So they can ignore people and only focus on devices",
                "So they can make every issue sound equally serious",
              ],
              answer: 0,
              explanation: "Good defensive decisions connect controls to the value, impact, and people involved.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write an Asset Protection Snapshot"
          prompt="Choose a fake school system, such as a practice portal, library checkout app, club sign-up form, or cafeteria payment page. Write 6-8 sentences explaining what assets it protects, who depends on it, and what could go wrong if it is unavailable, changed, exposed, or misused."
          tips={[
            "Use fake examples only.",
            "Mention people, data, systems, and trust.",
            "End with a safe reporting or protection recommendation.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity protects more than computers; it protects people, data, accounts, systems, services, and trust.",
            "An asset is anything valuable enough to protect.",
            "Defenders ask what matters, what could go wrong, and which safe control reduces risk.",
            "Students should never test real systems without permission; concerns should go to trusted adults or school technology staff.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-4">
          <Link href={modulePath} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">
            ← Back to Module
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