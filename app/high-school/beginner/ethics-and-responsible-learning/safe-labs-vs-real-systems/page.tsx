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

const modulePath = "/high-school/beginner/ethics-and-responsible-learning";
const previousLesson = `${modulePath}/school-rules-and-acceptable-use`;
const nextLesson = `${modulePath}/responsible-reporting-concepts`;

const safeLabRules = [
  {
    title: "Fake data only",
    detail:
      "A safe lab uses made-up usernames, fake messages, fake logs, fake screenshots, and fictional systems created for learning.",
  },
  {
    title: "Clear permission",
    detail:
      "Students know exactly what they are allowed to do because a teacher, course, or lab instruction defines the scope.",
  },
  {
    title: "No real impact",
    detail:
      "A safe lab cannot interrupt real classes, accounts, devices, networks, websites, or private information.",
  },
  {
    title: "Defensive purpose",
    detail:
      "The activity teaches recognition, protection, reporting, documentation, or safer decisions, not harm or bypassing.",
  },
];

const comparisonRows = [
  {
    category: "Accounts",
    safeLab: "Fictional training accounts like student1@example.test",
    realSystem: "Real school, personal, teacher, or classmate accounts",
  },
  {
    category: "Messages",
    safeLab: "Fake phishing examples written for analysis",
    realSystem: "Real suspicious emails, texts, DMs, or links",
  },
  {
    category: "Logs",
    safeLab: "Training logs with made-up times, users, and events",
    realSystem: "Actual device, network, website, or account logs",
  },
  {
    category: "Networks",
    safeLab: "A diagram or isolated simulation created for class",
    realSystem: "School Wi-Fi, home routers, public networks, or websites",
  },
];

const labChecklist = [
  "The task uses fake or teacher-provided practice data.",
  "The instructions clearly say what is allowed and what is not allowed.",
  "No real account, real device, real network, real website, or private file is being tested.",
  "The activity helps students defend, analyze, document, or report safely.",
  "A trusted teacher or school staff member can answer questions before the activity begins.",
];

export default function SafeLabsVsRealSystemsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.4
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Safe Labs vs Real Systems
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cybersecurity students need a place to practice, but that place must be safe. This lesson explains the difference between approved fake labs and real systems that students should never test, explore, or change without permission.
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
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Boundary Rule
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Practice only where practice is allowed.
              </h2>
              <p className="mt-4 text-slate-300">
                A fake lab is like a training field. A real system is like an active classroom, office, network, or account. Cyber learners must know which one they are touching before they do anything.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Safe rule: if it belongs to a real person, school, company, website, device, network, or account, do not test it. Ask trusted adults or school technology staff for help.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousLesson}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← B2.3
          </Link>
          <Link
            href={modulePath}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Beginner Track
          </Link>
          <Link
            href="/high-school"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            High School Hub
          </Link>
          <Link
            href={nextLesson}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Next Lesson →
          </Link>
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B2: Ethics and Responsible Learning"
          lessonTitle="B2.4 Safe Labs vs Real Systems"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that cybersecurity practice must happen in approved spaces.",
            "I can slow down before touching a real account, website, device, or network.",
            "I am ready to use fake examples and defensive thinking only.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Professionals do not practice on live systems without authorization.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            In real cybersecurity jobs, teams use training ranges, simulations, written scopes, test environments, and approved procedures. They do not randomly test production systems, student accounts, public websites, school Wi-Fi, or someone else's device. Even defenders need permission and boundaries.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            High school students should build that habit early: use fake labs for learning, and treat real systems with respect. Safe practice protects people, privacy, trust, and your own future opportunities.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Define what makes a cybersecurity lab safe for students.",
            },
            {
              title: "Learning Objective 2",
              text: "Recognize when an activity is touching a real system and must stop.",
            },
            {
              title: "Learning Objective 3",
              text: "Use a simple decision checklist before starting any cyber learning activity.",
            },
          ].map((objective) => (
            <div
              key={objective.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                {objective.title}
              </p>
              <p className="mt-3 leading-7 text-slate-300">{objective.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Why This Matters
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            The same skill can be safe or unsafe depending on where it is practiced.
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Safe context</h3>
              <p className="mt-3 leading-7">
                Reading a fake alert in a class page is safe because it is designed for learning and cannot affect real people.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Unclear context</h3>
              <p className="mt-3 leading-7">
                A tool, website, device, or message that is not part of the lesson needs adult guidance before any action.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Unsafe context</h3>
              <p className="mt-3 leading-7">
                Testing real systems, trying workarounds, opening private files, or exploring access you were not given is not safe.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept Explanation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A safe lab is controlled, fake, authorized, and defensive.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A cybersecurity lab is a learning environment created for practice. In a safe student lab, the examples are fictional, the tasks are approved, the boundaries are clear, and the activity cannot harm real people or systems. A real system is anything connected to actual accounts, devices, networks, websites, organizations, files, or people.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            The safest habit is to ask four questions before starting: Is this fake? Is this approved? Is the scope clear? Could this affect someone real? If the answer is uncertain, stop and ask a trusted teacher, guardian, counselor, or school technology staff member.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {safeLabRules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-200">{rule.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{rule.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Safe Lab Boundary Model"
          description="Before a cyber activity begins, use this boundary model to decide whether it belongs in a student learning environment."
          steps={[
            "Confirm the activity uses fake or approved training material",
            "Confirm the task has written permission and clear scope",
            "Stop and report if the activity touches a real system or private data",
          ]}
        />

        <FakeDashboardCard
          title="Fake Lab Safety Dashboard"
          subtitle="A training-only dashboard showing how a teacher might review whether a cyber activity is safe for students."
          metrics={[
            {
              label: "Fake data used",
              value: "100%",
              note: "No real names, passwords, accounts, websites, or private records.",
            },
            {
              label: "Approved scope",
              value: "Clear",
              note: "The task explains what students can and cannot do.",
            },
            {
              label: "Real-system contact",
              value: "0",
              note: "No real devices, accounts, networks, or services are being tested.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Lab safety terms
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Safe Lab",
                "A controlled learning activity using fake or approved practice materials.",
              ],
              [
                "Real System",
                "Any actual account, device, website, network, app, service, or file connected to real people or organizations.",
              ],
              [
                "Scope",
                "The written boundary that explains exactly what is allowed in an activity.",
              ],
              [
                "Authorization",
                "Permission from the person or organization that has the right to approve the activity.",
              ],
              [
                "Simulation",
                "A fake environment that imitates real cyber situations for safe practice.",
              ],
              [
                "Production",
                "A real active system that people depend on. Students should not test production systems.",
              ],
              [
                "Private Data",
                "Information about real people, accounts, grades, messages, files, or activity.",
              ],
              [
                "Stop Point",
                "A moment when uncertainty means the safest next step is to pause and ask for trusted help.",
              ],
            ].map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Technical Breakdown
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Safe labs and real systems are not the same thing
          </h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700">
            <div className="grid gap-0 bg-slate-950 md:grid-cols-3">
              <div className="border-b border-slate-800 p-4 font-black text-cyan-200 md:border-r">
                Category
              </div>
              <div className="border-b border-slate-800 p-4 font-black text-emerald-200 md:border-r">
                Safe Lab Example
              </div>
              <div className="border-b border-slate-800 p-4 font-black text-red-200">
                Real-System Boundary
              </div>
              {comparisonRows.map((row) => (
                <div key={row.category} className="contents">
                  <div className="border-b border-slate-800 p-4 font-bold text-white md:border-r">
                    {row.category}
                  </div>
                  <div className="border-b border-slate-800 p-4 text-emerald-100 md:border-r">
                    {row.safeLab}
                  </div>
                  <div className="border-b border-slate-800 p-4 text-red-100">
                    {row.realSystem}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Mistakes that turn learning into risk
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Assuming a real website is okay to test because it is public.",
              "Using a personal, school, or friend's account as practice material.",
              "Trying cybersecurity tools or commands on school Wi-Fi, home routers, or public networks.",
              "Opening real suspicious links or attachments to see what they do.",
              "Exploring private files, logs, folders, settings, or accounts after noticing something unusual.",
              "Continuing an activity after the instructions become unclear or the scope feels uncertain.",
            ].map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-slate-950 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Safe Defensive Lab
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Classify each activity before you begin
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Read each activity card and decide whether it belongs in a safe student lab, needs approval, or should stop immediately.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Safe Lab</p>
              <p className="mt-3 leading-7">
                Analyze a fake login alert created by CyberShield Academy and choose the safest response.
              </p>
              <p className="mt-3 text-sm opacity-90">
                This is safe because the evidence is fake and the activity is defensive.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5 text-yellow-100">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Needs Approval</p>
              <p className="mt-3 leading-7">
                A teacher asks students to review a new classroom tool but does not explain what data it collects.
              </p>
              <p className="mt-3 text-sm opacity-90">
                Ask questions first. Students should not submit private information just to test a tool.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-5 text-red-100">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Stop</p>
              <p className="mt-3 leading-7">
                A student wants to test whether a real school website has weak login protection.
              </p>
              <p className="mt-3 text-sm opacity-90">
                This touches a real system. Do not test it. Report concerns through trusted adults or school technology staff.
              </p>
            </div>
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Is this a safe lab?"
          evidence={[
            "The activity uses a fake website diagram inside a lesson page.",
            "Students are asked to identify which defensive control should protect the login form.",
            "The instructions do not ask students to visit, scan, test, or interact with any real website.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "This is unsafe because it mentions a login form at all.",
            "This is likely a safe lab because it uses fake material and defensive analysis only.",
            "Students should find a real website with a login form to compare it.",
            "Students should enter a real username to make the example more realistic.",
          ]}
          bestAnswer={1}
          explanation="The activity stays inside a fake lesson environment and asks for defensive analysis only. Students should not move from the fake example to a real website."
        />

        <ScenarioDecisionLab
          title="A friend wants to make the lab more realistic"
          scenario="During a cyber lesson, a friend says the fake examples are boring. They suggest trying the same idea on a real school login page to see whether the lesson is accurate."
          choices={[
            {
              label: "Choice A",
              response: "Try the real login page because the goal is learning.",
              outcome: "Risky choice. Real login pages are real systems. Learning does not remove the need for authorization and scope.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Stay with the fake lab and ask the teacher for a safer advanced practice option.",
              outcome: "Best choice. This keeps learning inside approved boundaries and gives the teacher a chance to provide a safe challenge.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Only look at the real login page without touching anything else.",
              outcome: "Caution. Moving from a fake lab to a real system is a boundary problem. Ask first instead of improvising.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Lab Boundary Alert: Real-System Contact"
          severity="High"
          time="11:32 AM"
          source="CyberShield Safe Learning Monitor"
          details="A student activity appears to be moving from a fake lesson example to a real school login page. The original lab scope only allowed fake evidence review."
          recommendation="Stop the activity, return to the fake lab, and ask a trusted teacher or school technology staff member for guidance. Do not test real systems."
        />

        <FakeLogPanel
          title="Fake Lab Scope Review Log"
          logs={[
            "11:28 | lab-start | Activity: fake login-flow diagram review",
            "11:29 | scope-check | Allowed: identify defensive controls in fake diagram",
            "11:31 | boundary-warning | Student suggests using real school login page",
            "11:32 | safety-decision | Real-system testing not authorized",
            "11:33 | safe-action | Continue with fake lab and ask teacher for approved challenge",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Lab Safety Checklist
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Five questions before any cyber activity
          </h2>
          <div className="mt-5 grid gap-3">
            {labChecklist.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">{index + 1}.</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Safe Labs vs Real Systems Checklist"
          items={[
            "I can explain what makes a cybersecurity lab safe for students.",
            "I can identify real systems that should not be tested or explored without permission.",
            "I can check for fake data, approval, clear scope, and defensive purpose before starting.",
            "I can stop when an activity moves from a fake lab to a real account, device, network, website, or file.",
            "I can ask a trusted adult, teacher, counselor, guardian, or school technology staff member when boundaries are unclear.",
          ]}
        />

        <MiniQuiz
          title="B2.4 Mini Quiz: Safe Labs vs Real Systems"
          questions={[
            {
              question: "What is one sign that a cyber activity is a safe lab?",
              choices: [
                "It uses fake data and clear approved instructions",
                "It uses a real school account",
                "It asks students to test a public website",
                "It works better without teacher approval",
              ],
              answer: 0,
              explanation: "Safe labs use fake or approved practice materials, clear scope, and defensive learning goals.",
            },
            {
              question: "Which example is a real system boundary?",
              choices: [
                "A fictional log panel in a lesson",
                "A fake email written for class analysis",
                "A real school login page used by students and staff",
                "A made-up network diagram",
              ],
              answer: 2,
              explanation: "A real school login page is an active system connected to real accounts and should not be tested by students.",
            },
            {
              question: "What should a student do if a lab activity becomes unclear?",
              choices: [
                "Improvise carefully",
                "Ask a trusted teacher or school technology staff member before continuing",
                "Try it on a personal device instead",
                "Ask a friend to test it first",
              ],
              answer: 1,
              explanation: "Unclear scope is a stop point. Students should ask trusted adults or staff before continuing.",
            },
            {
              question: "Why is moving from a fake example to a real system unsafe?",
              choices: [
                "Real systems may affect real people, data, devices, networks, or organizations",
                "Fake examples are always more advanced",
                "Real systems never have security problems",
                "Cybersecurity learning does not need rules",
              ],
              answer: 0,
              explanation: "Real systems involve real people and responsibilities. Students need authorization and clear scope before any real-system activity.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Design a Safe Lab Boundary Card"
          prompt="Create a one-page boundary card for a future CyberShield lab. Include what students are allowed to do, what they are not allowed to do, what data is fake, and who they should ask for help."
          tips={[
            "Use the words scope, authorization, and fake data.",
            "Add a clear stop point for uncertainty.",
            "Make the card easy for a new student to understand.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Safe cybersecurity practice happens in approved fake labs, simulations, or clearly scoped training spaces.",
            "Real systems include real accounts, devices, websites, apps, networks, files, and people.",
            "Permission and scope are required even when the goal is defensive learning.",
            "Students should never test real school systems, public websites, personal devices, or other people's accounts as practice.",
            "When the boundary is unclear, stop and ask a trusted adult, teacher, guardian, counselor, or school technology staff member.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousLesson}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← Previous Lesson
          </Link>
          <Link
            href={modulePath}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Module
          </Link>
          <Link
            href="/high-school/beginner"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Beginner Track
          </Link>
          <Link
            href="/high-school"
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            High School Hub
          </Link>
          <Link
            href={nextLesson}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Next Lesson →
          </Link>
        </nav>
      </div>

      <Footer />
    </main>
  );
}