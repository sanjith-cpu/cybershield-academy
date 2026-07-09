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
const previousLesson = `${modulePath}/professional-ethics-and-digital-trust`;
const moduleTest = `${modulePath}/module-test`;

const decisionFramework = [
  {
    step: "Pause",
    detail:
      "Do not click, open, copy, test, share, or continue exploring when a cyber situation feels unclear.",
  },
  {
    step: "Check Permission",
    detail:
      "Ask whether the system, data, account, file, or activity is clearly approved for you to use.",
  },
  {
    step: "Limit Exposure",
    detail:
      "Avoid screenshots, names, private details, public posts, or extra details that are not needed for a safe report.",
  },
  {
    step: "Choose Trusted Help",
    detail:
      "Report concerns to a teacher, guardian, counselor, school technology staff member, or another approved adult.",
  },
  {
    step: "Document Carefully",
    detail:
      "Use calm facts: what you noticed, when you noticed it, and what you did not do. Avoid blame or guesses.",
  },
  {
    step: "Stop After Reporting",
    detail:
      "Once the concern is reported, do not continue investigating unless a trusted authority gives clear permission.",
  },
];

const caseBoard = [
  {
    label: "Case 1",
    title: "Unexpected access",
    situation:
      "A shared class folder shows files from another group that you were not supposed to see.",
    safestAction:
      "Close the folder, do not open files, and privately tell the teacher or school technology staff.",
  },
  {
    label: "Case 2",
    title: "Suspicious message",
    situation:
      "A fake support message asks a student to confirm their school login details through a link.",
    safestAction:
      "Do not click the link, do not reply, and report the message using the school’s approved process.",
  },
  {
    label: "Case 3",
    title: "Curiosity pressure",
    situation:
      "A friend says they found a way to view a hidden page and wants you to try it too.",
    safestAction:
      "Do not try it. Explain that permission matters and ask a trusted adult for guidance if needed.",
  },
  {
    label: "Case 4",
    title: "Private screenshot",
    situation:
      "A student wants to post a screenshot of a cyber concern, but names and account details are visible.",
    safestAction:
      "Do not post it publicly. Share only minimum necessary facts through a trusted reporting path.",
  },
];

const greenYellowRed = [
  {
    color: "Green",
    action: "Stop and ask for permission before continuing.",
    reason: "This keeps the learner inside approved boundaries.",
  },
  {
    color: "Green",
    action: "Report only what you noticed, not guesses about who caused it.",
    reason: "This protects accuracy and avoids unfair blame.",
  },
  {
    color: "Yellow",
    action: "Save a screenshot without checking whether private information is visible.",
    reason: "This may expose unnecessary details. Ask trusted help first when unsure.",
  },
  {
    color: "Red",
    action: "Keep testing a real system because you are curious.",
    reason: "Curiosity is not permission. Real systems are not safe labs.",
  },
  {
    color: "Red",
    action: "Invite friends to verify the issue by trying it themselves.",
    reason: "This spreads the risk and may cause more unauthorized activity.",
  },
  {
    color: "Green",
    action: "Use fake data and training pages for practice labs.",
    reason: "Safe labs protect people while still building useful skills.",
  },
];

export default function EthicsDecisionLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.7
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Ethics Decision Lab
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This review lab helps students practice ethical cyber decision-making with fake cases. The goal is to choose safe, permitted, privacy-aware responses before moving into the Module B2 test.
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
                  href={moduleTest}
                  className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Lab Mission
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Choose the safest action before the situation gets worse.
              </h2>
              <p className="mt-4 text-slate-300">
                Ethical cybersecurity is not just knowing rules. It is applying those rules when curiosity, pressure, confusion, or urgency makes the wrong choice tempting.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training reminder: all cases on this page are fake. Students should never investigate real systems, real accounts, or real suspicious links on their own.
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
            ← B2.6
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
            href={moduleTest}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Module Test →
          </Link>
        </nav>

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B2: Ethics and Responsible Learning"
          lessonTitle="B2.7 Ethics Decision Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start the Ethics Lab"
          items={[
            "I understand that permission is required before using or testing systems.",
            "I can explain the difference between safe training labs and real systems.",
            "I am ready to choose cautious, privacy-protecting actions in fake scenarios.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Most ethical mistakes happen before people stop to think.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            In real organizations, defenders often work under pressure. Alerts may look urgent, people may ask for quick answers, and evidence may be incomplete. A responsible defender slows down enough to protect people, permissions, and data while still helping the situation move toward a safe resolution.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            This lab builds that habit at a beginner level. Students will practice choosing actions that are approved, limited, respectful, and reportable.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Use an ethical decision framework to respond to fake cybersecurity scenarios.",
            },
            {
              title: "Learning Objective 2",
              text: "Sort safe, cautious, and unsafe actions when permission or privacy is involved.",
            },
            {
              title: "Learning Objective 3",
              text: "Prepare for the Module B2 test by reviewing permission, legality, school rules, safe labs, reporting, and trust.",
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
            Responsible learners build safer school communities.
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Ethics prevents harm</h3>
              <p className="mt-3 leading-7">
                Safe choices reduce privacy exposure, rumor spreading, unauthorized access, and unnecessary panic.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Boundaries protect learning</h3>
              <p className="mt-3 leading-7">
                Clear rules let students practice cybersecurity without touching real systems or real data.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Curiosity needs control</h3>
              <p className="mt-3 leading-7">
                Curiosity is useful, but it becomes risky when it ignores permission, privacy, or safety.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept Explanation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ethical decisions are easier when students use a repeatable process.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A decision lab is a safe practice space where students study fake cases and choose responsible actions. Instead of memorizing one rule, students learn how to reason through new situations: Who owns the system? Was permission given? Could someone’s information be exposed? Is this a safe lab or a real system? Who is the right trusted person to tell?
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            The safest beginner pattern is simple: pause, limit action, protect privacy, report through trusted channels, and stop after reporting unless an authorized adult gives clear guidance.
          </p>
        </section>

        <VisualDiagramCard
          title="The Safe Cyber Decision Loop"
          description="When a cyber situation feels unclear, students can move through this loop instead of reacting quickly. The loop keeps learning defensive, ethical, and school-safe."
          steps={[
            "Pause before acting",
            "Check permission and privacy",
            "Report to trusted help",
          ]}
        />

        <FakeDashboardCard
          title="Fake Ethics Lab Dashboard"
          subtitle="A training dashboard showing how safe decision-making protects students, teachers, and systems."
          metrics={[
            {
              label: "Fake cases reviewed",
              value: "12",
              note: "Students practiced with made-up scenarios, not real systems or real student data.",
            },
            {
              label: "Privacy-safe reports",
              value: "10",
              note: "Reports avoided unnecessary names, screenshots, or private information.",
            },
            {
              label: "Unsafe actions prevented",
              value: "8",
              note: "Students chose to stop, ask, and report instead of investigating on their own.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review terms for ethical decision-making
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Authorization", "Clear approval from the correct owner or authority to use, access, test, or change something."],
              ["Safe Lab", "A controlled practice space using fake data and approved activities."],
              ["Real System", "A real account, website, network, app, device, or file space that students should not test without permission."],
              ["Reporting Path", "The correct trusted person or official process used to share a concern safely."],
              ["Minimum Necessary", "Sharing only the details needed to explain a concern without exposing extra private information."],
              ["Escalation", "Passing a concern to someone with more authority, responsibility, or technical ability."],
              ["Boundary", "A rule or limit that explains what students are and are not allowed to do."],
              ["Ethical Judgment", "Choosing the safest responsible action when a situation is unclear or tempting."],
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
            Six-step ethics decision framework
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {decisionFramework.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-black text-cyan-200">{item.step}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Mistakes this lab is designed to prevent
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Confusing technical ability with permission.",
              "Treating a real school system like a training lab.",
              "Sharing private evidence publicly instead of using trusted reporting paths.",
              "Trying to prove a concern by continuing to investigate without approval.",
              "Asking friends to test a situation instead of asking a trusted adult or staff member.",
              "Writing reports that include guesses, blame, or unnecessary private details.",
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
            Fake ethics case board
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Review each fake case and compare the safest action with the risky temptation. This lab uses fake scenarios only and does not ask students to test real systems.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {caseBoard.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  {item.label}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.situation}</p>
                <div className="mt-4 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-100">
                  <span className="font-bold">Safest action:</span> {item.safestAction}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decision Sorting Board
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Green, yellow, and red choices
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Green choices are safe and responsible. Yellow choices need caution or trusted guidance. Red choices should be avoided.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {greenYellowRed.map((item) => (
              <div
                key={item.action}
                className={
                  item.color === "Green"
                    ? "rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5 text-emerald-100"
                    : item.color === "Yellow"
                      ? "rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5 text-yellow-100"
                      : "rounded-2xl border border-red-400/40 bg-red-400/10 p-5 text-red-100"
                }
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  {item.color} Choice
                </p>
                <p className="mt-3 font-bold text-white">{item.action}</p>
                <p className="mt-3 leading-7">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which response protects permission and privacy?"
          evidence={[
            "A student sees an error message that shows a page title they were not expecting.",
            "The page appears to belong to a real school system, not a CyberShield training lab.",
            "The student has not been given permission to explore the page.",
            "The student can describe what happened without showing private information.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The student should keep clicking to see whether the page reveals more information.",
            "The student should ask friends to try the same thing and compare results.",
            "The student should stop, avoid collecting extra evidence, and report the concern privately to trusted help.",
            "The student should post the page title publicly so others know the system has an issue.",
          ]}
          bestAnswer={2}
          explanation="The safest response is to stop, avoid further access, protect privacy, and report through a trusted channel. The student does not need to investigate more to be helpful."
        />

        <ScenarioDecisionLab
          title="Ethics decision challenge: curiosity vs responsibility"
          scenario="During a school project, a classmate says they found a way to view a hidden page in a real school tool. They ask you to try it so the group can prove whether it works."
          choices={[
            {
              label: "Choice A",
              response: "Try it once because you are only checking whether the claim is true.",
              outcome: "Risky choice. Real systems are not practice labs, and trying it without permission can break rules even if the goal feels harmless.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Decline, explain that permission matters, and suggest telling a teacher or school technology staff member privately.",
              outcome: "Best choice. This protects boundaries, avoids spreading the issue, and gets trusted help involved.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Ask the classmate to send screenshots so you can decide what to do.",
              outcome: "Caution. Screenshots may expose private details or spread evidence unnecessarily. It is better to report safely without collecting extra information.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Ethics Lab Alert: Real System Boundary"
          severity="High"
          time="2:42 PM"
          source="CyberShield Fake Training Monitor"
          details="A student is tempted to test a real school tool after hearing a rumor about a hidden page. The student has no written permission, no approved lab scope, and no trusted adult supervising the activity."
          recommendation="Do not test the real tool. Stop, document only basic facts, and report the concern to a teacher, guardian, counselor, or school technology staff member."
        />

        <FakeLogPanel
          title="Fake Responsible Decision Timeline"
          logs={[
            "14:35 | concern-heard | Student hears claim about hidden page in real school tool",
            "14:36 | boundary-check | Student recognizes this is not an approved training lab",
            "14:37 | privacy-check | Student avoids screenshots, links, names, and extra details",
            "14:40 | trusted-report | Student privately tells teacher what was heard",
            "14:42 | stop-action | Student does not continue testing or discussing the claim",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module B2 Review Map
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What this module taught
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              ["B2.1 Permission", "Cybersecurity activity must begin with clear authorization."],
              ["B2.2 Legal vs Illegal", "The same technical action can be acceptable or unacceptable depending on permission, ownership, and intent."],
              ["B2.3 School Rules", "Acceptable use policies explain what students may and may not do with school technology."],
              ["B2.4 Safe Labs", "Training labs use fake data and approved activities; real systems are not practice spaces."],
              ["B2.5 Reporting", "Responsible reporting means using trusted channels and minimum necessary information."],
              ["B2.6 Trust", "Digital trust depends on privacy, honesty, accountability, and restraint."],
              ["B2.7 Decision Lab", "Ethical learners pause, check permission, protect privacy, and ask trusted help."],
            ].map(([lesson, reminder]) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300"
              >
                <span className="font-black text-cyan-200">{lesson}:</span> {reminder}
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Ethics Decision Lab Checklist"
          items={[
            "I can use a pause-check-report process when a cyber situation is unclear.",
            "I can explain why real systems should not be used as practice labs.",
            "I can choose privacy-safe reporting over public sharing or unnecessary screenshots.",
            "I can recognize unsafe pressure from friends or classmates and choose a responsible response.",
            "I am ready for the Module B2 test on permission, laws, school rules, safe labs, reporting, ethics, and trust.",
          ]}
        />

        <MiniQuiz
          title="B2.7 Mini Quiz: Ethics Decision Lab"
          questions={[
            {
              question: "What is the best first step when a cyber situation feels unclear?",
              choices: [
                "Click around until you understand it",
                "Pause before acting",
                "Ask classmates to test it",
                "Post a warning publicly",
              ],
              answer: 1,
              explanation: "Pausing prevents rushed choices. After pausing, students should check permission, protect privacy, and ask trusted help.",
            },
            {
              question: "Why are safe labs different from real systems?",
              choices: [
                "Safe labs use approved fake examples for learning, while real systems require permission and may contain real data",
                "Safe labs are only for younger students",
                "Real systems are always okay to test if the goal is learning",
                "Safe labs do not need rules",
              ],
              answer: 0,
              explanation: "Safe labs are designed for practice with fake data and approved boundaries. Real systems are not practice spaces without authorization.",
            },
            {
              question: "Which response uses minimum necessary information?",
              choices: [
                "Sharing a screenshot with names visible in a group chat",
                "Listing every person you think might be involved",
                "Privately reporting what happened, when it happened, and avoiding extra private details",
                "Copying files to prove the issue is real",
              ],
              answer: 2,
              explanation: "Minimum necessary information means reporting useful facts without exposing private details or collecting extra evidence.",
            },
            {
              question: "A friend pressures you to test a hidden page in a school tool. What is the safest choice?",
              choices: [
                "Try it only once",
                "Tell the friend to test it first",
                "Decline and suggest reporting the concern to trusted help",
                "Share the hidden page with more students",
              ],
              answer: 2,
              explanation: "The safe response is to decline unauthorized testing and use a trusted reporting path.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write an Ethics Decision Pledge"
          prompt="Write a short pledge for yourself as a CyberShield learner. Explain how you will handle permission, privacy, safe labs, reporting, and trusted help when cybersecurity situations feel unclear."
          tips={[
            "Include one promise about never using real systems as practice labs.",
            "Include one promise about reporting concerns privately and respectfully.",
            "Include one promise about asking trusted help when boundaries are unclear.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Ethical cybersecurity decisions should protect permission, privacy, safety, and trust.",
            "Safe labs use fake data and approved boundaries; real systems require clear authorization.",
            "Students should not investigate real cyber concerns alone or ask friends to test them.",
            "Responsible reports should use calm facts and minimum necessary information.",
            "When permission or harm is unclear, the safest choice is to stop and ask a trusted adult, teacher, guardian, counselor, or school technology staff member.",
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
            href={moduleTest}
            className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 hover:bg-cyan-300"
          >
            Module Test →
          </Link>
        </nav>
      </div>

      <Footer />
    </main>
  );
}