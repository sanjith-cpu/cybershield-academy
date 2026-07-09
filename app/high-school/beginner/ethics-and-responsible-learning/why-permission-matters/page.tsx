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
const previousModule = "/high-school/beginner/cybersecurity-foundations/module-test";
const nextLesson = `${modulePath}/legal-vs-illegal-cyber-activity`;

const permissionQuestions = [
  {
    question: "Do I own this system, account, file, or device?",
    safeAnswer: "Yes, and I am using it normally or inside approved learning instructions.",
    warning: "Owning a device does not automatically give permission to access other people's accounts, files, or networks.",
  },
  {
    question: "Did someone with authority clearly give permission?",
    safeAnswer: "Yes, the task, limits, and allowed actions are clear.",
    warning: "A vague comment like 'try it' is not enough for real systems. Ask for written or teacher-approved scope.",
  },
  {
    question: "Is this inside a safe lab?",
    safeAnswer: "Yes, it uses fake data, fake users, and instructions built for training.",
    warning: "A real school website, public account, or classmate's device is not a lab.",
  },
  {
    question: "Could this expose, change, interrupt, or embarrass someone?",
    safeAnswer: "No, the activity avoids private data and does not affect real people or real services.",
    warning: "If real people, real data, or real services could be affected, stop and ask trusted help.",
  },
];

export default function WhyPermissionMattersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.1
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Why Permission Matters
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Ethical cybersecurity begins before any technical action. Permission decides whether an activity is
                responsible learning, approved defense, or an unsafe boundary violation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={previousModule}
                  className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  ← Previous Module Test
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Ethics Lens</p>
              <h2 className="mt-3 text-2xl font-black text-white">Permission is the boundary.</h2>
              <p className="mt-4 text-slate-300">
                A defender does not prove skill by crossing lines. A defender proves skill by staying inside approved
                scope, protecting people, and asking for help when the boundary is unclear.
              </p>
              <div className="mt-5 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                Training rule: when permission is unclear, the safest answer is to stop and ask a trusted adult,
                teacher, guardian, counselor, or school technology staff.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousModule}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← B1 Test
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
          lessonTitle="B2.1 Why Permission Matters"
          lessonNumber={1}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that CyberShield uses fake data and defensive examples only.",
            "I know that curiosity does not replace permission.",
            "I am ready to stop and ask for help when a cyber situation feels unclear or unsafe.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">Professional defenders work inside approved scope.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a student notices that a school webpage looks outdated and wonders whether it has a security
            problem. The responsible choice is not to test it, poke around, guess passwords, open hidden pages, or ask
            friends to try things. The responsible choice is to document the concern safely and report it to a teacher
            or school technology staff.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            In cybersecurity, permission is more than being allowed to learn. Permission defines the exact system,
            exact task, exact limits, and exact purpose of the work. Without that boundary, even a well-meaning action
            can put people, data, trust, and school technology at risk.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain why permission and authorization are required before cybersecurity activity.",
            },
            {
              title: "Learning Objective 2",
              text: "Recognize safe lab situations, ask-first situations, and not-allowed situations.",
            },
            {
              title: "Learning Objective 3",
              text: "Use a permission checklist before making a defensive decision.",
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
          <h2 className="mt-2 text-2xl font-bold text-white">The same action can be safe or unsafe depending on permission.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Safe learning</h3>
              <p className="mt-2">
                Practicing in a teacher-approved fake lab with fake accounts, fake logs, and clear instructions.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-bold text-white">Ask first</h3>
              <p className="mt-2">
                Looking at a system, file, message, or setting where the owner, rules, or purpose are unclear.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Not allowed</h3>
              <p className="mt-2">
                Trying to access, test, change, collect, share, or investigate real systems without clear permission.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Core Concept</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Permission has four parts.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Beginners sometimes think permission means, "someone said it was okay." In professional cybersecurity,
            permission is more exact. It answers who approved the work, what system is included, what actions are
            allowed, and what limits protect people and data.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Authority", "The person giving permission must actually have the right to approve the activity."],
              ["Scope", "The approved boundary explains what systems, accounts, files, or examples are included."],
              ["Actions", "The instructions explain what you may do and what you must not do."],
              ["Purpose", "The work supports learning, defense, safety, or reporting, not curiosity at someone else's expense."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="text-lg font-black text-cyan-200">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Permission Filter"
          description="Use this before any cybersecurity activity. If any answer is unclear, pause and ask for trusted help."
          steps={[
            "Is the activity clearly approved by the owner or teacher?",
            "Is the work inside a safe fake lab or written scope?",
            "Can I complete the task without affecting real people, private data, or real systems?",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Safe Permission Decision Board</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fake board shows how a beginner defender sorts situations before acting.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">Allowed</p>
              <h3 className="mt-3 text-xl font-black text-white">Approved lab task</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-100">
                The page uses fake users, fake logs, fake alerts, and instructions created for practice.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-200">Ask First</p>
              <h3 className="mt-3 text-xl font-black text-white">Unclear ownership</h3>
              <p className="mt-3 text-sm leading-6 text-yellow-100">
                A classmate asks for help with an account setting. Confirm the person owns the account and ask a
                trusted adult when the issue involves privacy or security.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-200">Not Allowed</p>
              <h3 className="mt-3 text-xl font-black text-white">Real system testing</h3>
              <p className="mt-3 text-sm leading-6 text-red-100">
                A real school website, account, Wi-Fi network, public website, or shared device is not a playground
                for experimentation.
              </p>
            </div>
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Permission Review Dashboard"
          subtitle="This fictional dashboard shows how defenders track whether work is inside approved scope."
          metrics={[
            { label: "Approved lab assets", value: "4", note: "Fake portal, fake email inbox, fake logs, fake tickets." },
            { label: "Real systems in scope", value: "0", note: "Beginner students do not test real school or public systems." },
            { label: "Decision rule", value: "Ask", note: "Unclear permission means pause and ask trusted help." },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Words defenders use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Permission", "Clear approval to do a specific activity within specific limits."],
              ["Authorization", "A formal right or approval to access, use, review, or change something."],
              ["Scope", "The exact boundary of what is included and what is not included in an activity."],
              ["Ownership", "The person or organization responsible for a system, account, file, or device."],
              ["Consent", "Agreement from the right person for a specific action, situation, and purpose."],
              ["Responsible learning", "Studying cybersecurity in a way that protects people, privacy, school rules, and trust."],
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
          <h2 className="mt-2 text-2xl font-bold text-white">Permission is a security control.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A security control reduces risk. Permission is a control because it prevents random, unapproved,
            confusing, or harmful activity. It protects the student, the system owner, the school, and the people whose
            data may be connected to the system.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {permissionQuestions.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-white">{item.question}</h3>
                <p className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-100">
                  Safe answer: {item.safeAnswer}
                </p>
                <p className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-3 text-sm text-yellow-100">
                  Watch out: {item.warning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Common Mistakes</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Ethical mistakes usually happen before the technical mistake.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Mistake", "Assuming friendship equals permission", "A friend asking for help does not let you access private data, accounts, or devices without clear boundaries."],
              ["Mistake", "Testing a real website because it looks harmless", "Real systems belong to someone. Use fake labs only unless there is clear authorized scope."],
              ["Mistake", "Sharing screenshots with private details", "Even when reporting a concern, protect names, personal details, and sensitive information."],
              ["Mistake", "Trying to solve everything alone", "Cyber concerns should be escalated to trusted adults, teachers, guardians, counselors, or technology staff."],
            ].map(([label, title, text]) => (
              <div key={title} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-red-200">{label}</p>
                <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-red-100">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Sort the situation before acting.</h2>
          <p className="mt-3 leading-8 text-slate-300">
            Read each fake situation. Decide whether it is allowed, ask-first, or not allowed. Do not perform any real
            action; this is a thinking lab only.
          </p>
          <div className="mt-6 grid gap-4">
            {[
              {
                situation: "A CyberShield page gives you fake log entries and asks you to identify which one needs reporting.",
                answer: "Allowed",
                reason: "The data is fake, the task is defensive, and the page gives clear instructions.",
              },
              {
                situation: "A classmate says their account is acting weird and asks you to look through their messages.",
                answer: "Ask first / get trusted help",
                reason: "Messages may contain private information. A trusted adult or school technology staff should guide the next step.",
              },
              {
                situation: "You wonder whether the school Wi-Fi has a weakness and want to test it from your laptop.",
                answer: "Not allowed",
                reason: "A real school network is not a practice lab. Report concerns through trusted channels instead.",
              },
            ].map((item) => (
              <div key={item.situation} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="font-semibold text-white">{item.situation}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-[0.35fr_1fr]">
                  <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3 font-bold text-cyan-100">
                    {item.answer}
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300">
                    {item.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Permission Evidence Review"
          evidence={[
            "The activity involves a real student account, not a fake training account.",
            "The student says they are just curious and does not have written teacher instructions.",
            "Private messages or account settings might be visible if they continue.",
            "A teacher and school technology staff are available to ask for help.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "Continue because the student has good intentions.",
            "Stop, avoid viewing private information, and ask a trusted adult or school technology staff for guidance.",
            "Ask more classmates to help investigate faster.",
            "Take screenshots of everything and send them to a group chat.",
          ]}
          bestAnswer={1}
          explanation="Good intentions are not enough. The safest defensive conclusion is to stop, avoid private information, and use trusted reporting or help channels."
        />

        <ScenarioDecisionLab
          title="A Friend Asks You to Check Something"
          scenario="A friend says their school account shows a strange notification. They hand you their laptop and say, 'Can you figure it out?' You are interested in cybersecurity and want to help."
          choices={[
            {
              label: "Choice A",
              response: "Open the account settings, messages, and files to look for clues.",
              outcome: "Risky. You may see private information and go beyond what a student should handle alone.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Tell your friend not to click anything else, keep the notification visible, and ask a teacher or school technology staff for help.",
              outcome: "Best choice. You protect privacy, preserve the situation, and involve the right support.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Search online for similar issues and try random fixes until it disappears.",
              outcome: "Caution. Random fixes can make the issue worse or hide useful information from the people who should review it.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Unclear Permission Boundary"
          severity="Medium"
          time="09:42 AM"
          source="CyberShield Ethics Training Console"
          details="A learner wants to investigate a real account issue but does not have a teacher-approved scope, fake lab environment, or clear privacy boundary."
          recommendation="Pause the activity, avoid viewing private information, and ask a trusted adult, teacher, guardian, counselor, or school technology staff for guidance."
        />

        <FakeLogPanel
          title="Permission Decision Log"
          logs={[
            "09:40:12 training-event=student_observed_issue system=fake-portal context=classroom",
            "09:41:03 decision-point=permission_check status=unclear owner=real-user privacy-risk=possible",
            "09:41:20 action=stop_and_ask outcome=safe escalation=teacher_or_tech_staff",
            "09:42:00 note=do_not_collect_private_data do_not_share_screenshots do_not_test_real_systems",
          ]}
        />

        <DefenderChecklist
          title="Permission Checklist"
          items={[
            "I can explain why permission comes before technical action.",
            "I can identify who owns a system, account, device, or file before making a decision.",
            "I can separate approved fake labs from real systems.",
            "I can pause when scope, ownership, or privacy is unclear.",
            "I can ask a trusted adult, teacher, guardian, counselor, or school technology staff for help.",
          ]}
        />

        <MiniQuiz
          title="B2.1 Mini Quiz: Permission Matters"
          questions={[
            {
              question: "What is the safest first question before any cybersecurity activity?",
              choices: [
                "How fast can I solve it?",
                "Do I have clear permission and scope?",
                "Can I find a tool for it?",
                "Will my friends think it is impressive?",
              ],
              answer: 1,
              explanation: "Permission and scope decide whether an activity is ethical, safe, and approved.",
            },
            {
              question: "Which situation is safest for beginner cybersecurity practice?",
              choices: [
                "A teacher-approved fake lab with fake data",
                "A real school website that looks old",
                "A friend's private account",
                "A public website found online",
              ],
              answer: 0,
              explanation: "Fake labs with clear instructions are designed for safe learning without affecting real people or systems.",
            },
            {
              question: "What should you do when permission is unclear?",
              choices: [
                "Continue carefully",
                "Ask classmates to vote",
                "Stop and ask a trusted adult or technology staff",
                "Try a small test first",
              ],
              answer: 2,
              explanation: "Unclear permission means pause. Trusted adults or technology staff can guide the safe next step.",
            },
            {
              question: "Which phrase best describes scope?",
              choices: [
                "The exact boundary of what is included and allowed",
                "The most interesting part of a system",
                "A guess about what might be vulnerable",
                "A shortcut to finishing faster",
              ],
              answer: 0,
              explanation: "Scope defines what is included, what is allowed, and what is outside the activity.",
            },
            {
              question: "Why is permission a security control?",
              choices: [
                "It makes every activity more advanced",
                "It reduces risk by preventing unapproved or harmful action",
                "It replaces the need for reporting",
                "It lets students work without supervision",
              ],
              answer: 1,
              explanation: "Permission reduces risk by setting safe boundaries before anyone acts.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write a Responsible Learning Pledge"
          prompt="Write a 5-7 sentence pledge explaining how you will learn cybersecurity responsibly. Include permission, fake labs, privacy, trusted help, and why ethical boundaries matter."
          tips={[
            "Use first person: 'I will...'",
            "Mention fake examples and approved scope.",
            "Include who you will ask when something feels unsafe.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Permission is the first rule of ethical cybersecurity.",
            "Professional defenders work inside approved scope and clear boundaries.",
            "Real systems, accounts, networks, and private data are not practice labs.",
            "Good intentions do not replace authorization, consent, or school rules.",
            "When permission is unclear, stop and ask trusted adults or school technology staff for help.",
          ]}
        />

        <nav className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:grid-cols-5">
          <Link
            href={previousModule}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-center font-bold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            ← B1 Test
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