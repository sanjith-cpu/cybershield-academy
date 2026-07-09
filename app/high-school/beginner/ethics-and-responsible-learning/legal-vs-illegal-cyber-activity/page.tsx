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
const previousLesson = `${modulePath}/why-permission-matters`;
const nextLesson = `${modulePath}/school-rules-and-acceptable-use`;

const boundaryCards = [
  {
    title: "Permission",
    safe: "A teacher, guardian, owner, or authorized staff member clearly approves the activity.",
    unsafe:
      "A student guesses that an activity is okay because it seems harmless or interesting.",
  },
  {
    title: "Scope",
    safe: "The exact system, task, time, and limits are defined before the activity starts.",
    unsafe:
      "A student keeps exploring beyond the assignment because they found something unexpected.",
  },
  {
    title: "Intent",
    safe: "The purpose is learning, protection, documentation, or responsible reporting.",
    unsafe:
      "The purpose is showing off, embarrassing someone, proving access, or bypassing a rule.",
  },
  {
    title: "Impact",
    safe: "The activity uses fake data and does not change, expose, interrupt, or collect real information.",
    unsafe:
      "The activity touches real accounts, real files, real private messages, or real school systems.",
  },
];

const decisionExamples = [
  {
    situation:
      "Completing a teacher-provided fake phishing analysis worksheet.",
    label: "Allowed learning",
    tone: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
  },
  {
    situation:
      "Opening a classmate's unlocked laptop to see if their account is secure.",
    label: "Not allowed",
    tone: "border-red-400/40 bg-red-400/10 text-red-100",
  },
  {
    situation:
      "Finding a broken link on a school page and wondering whether more pages are exposed.",
    label: "Stop and report",
    tone: "border-yellow-400/40 bg-yellow-400/10 text-yellow-100",
  },
  {
    situation:
      "Practicing account-security decisions using fake users named student1 and student2.",
    label: "Allowed lab",
    tone: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
  },
];

export default function LegalVsIllegalCyberActivityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.2
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Legal vs Illegal Cyber Activity
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                In cybersecurity, the line between responsible learning and
                unsafe behavior is not just the tool or topic. The line is
                permission, scope, intent, and impact.
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
                Ethics Filter
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Same action, different context.
              </h2>
              <p className="mt-4 text-slate-300">
                Reading a fake log inside CyberShield is safe training. Trying
                to inspect a real school system without approval is not.
                Responsible defenders check the context before they act.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: never test real accounts, websites, networks,
                devices, or messages unless a trusted authority clearly gives
                permission and scope.
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
            ← B2.1
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
          lessonTitle="B2.2 Legal vs Illegal Cyber Activity"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that permission comes before cyber activity.",
            "I know that CyberShield examples use fake data and fake systems only.",
            "I am ready to judge cyber decisions by permission, scope, intent, and impact.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Professionals do not use curiosity as permission.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A cybersecurity student might notice something strange: a public
            webpage, an unlocked computer, a shared folder, a weak password
            habit, or a suspicious message. The professional response is not to
            investigate on their own. The professional response is to pause,
            avoid touching private data, document only safe details, and report
            the concern through the right trusted channel.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            This lesson helps you separate legal, ethical, school-safe learning
            from actions that cross boundaries. The goal is not to memorize
            laws. The goal is to build a defender mindset that protects people
            and avoids harm.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain why permission and scope decide whether cyber activity is appropriate.",
            },
            {
              title: "Learning Objective 2",
              text: "Classify fake scenarios as allowed learning, ask-first situations, or not-allowed actions.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose safe alternatives when a situation involves real systems, real people, or private data.",
            },
          ].map((objective) => (
            <div
              key={objective.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                {objective.title}
              </p>
              <p className="mt-3 text-slate-300">{objective.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Why This Matters
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            A legal boundary protects people, data, and trust.
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-bold text-white">Legal and safe</h3>
              <p className="mt-2">
                Working in a fake lab, following teacher instructions, using
                your own accounts responsibly, or reporting a concern without
                investigating further.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-bold text-white">Unclear</h3>
              <p className="mt-2">
                Anything involving another person's account, a school system, a
                real website, shared files, private messages, or technology you
                do not control.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Not allowed</h3>
              <p className="mt-2">
                Guessing passwords, bypassing settings, scanning real systems,
                collecting private data, changing files, or proving access
                without approval.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            The four-part boundary test
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Before any cyber activity, ask four questions. Do I have permission?
            Is the scope clear? Is my intent protective and educational? Could
            this activity harm, expose, interrupt, or embarrass anyone? If any
            answer is unclear, the activity should stop until a trusted adult or
            authorized staff member gives guidance.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {boundaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-200">
                  {card.title}
                </h3>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
                    <span className="font-bold text-white">Safe version:</span>{" "}
                    {card.safe}
                  </div>
                  <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                    <span className="font-bold text-white">
                      Unsafe version:
                    </span>{" "}
                    {card.unsafe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Legal/Ethical Decision Flow"
          description="Use this safe decision flow when you are not sure whether an activity is appropriate. The safest defenders slow down before they act."
          steps={[
            "Check permission and ownership",
            "Check scope, rules, and allowed actions",
            "Stop, document safely, and ask trusted help if anything is unclear",
          ]}
        />

        <FakeDashboardCard
          title="Training Boundary Dashboard"
          subtitle="A fake classroom dashboard that shows how defenders classify activities before acting."
          metrics={[
            {
              label: "Approved labs",
              value: "4",
              note: "Fake-data activities with teacher-approved instructions.",
            },
            {
              label: "Ask-first cases",
              value: "3",
              note: "Real systems or unclear ownership need trusted guidance.",
            },
            {
              label: "Blocked actions",
              value: "2",
              note: "Actions would touch real accounts, files, or services.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Words defenders use carefully
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Authorization",
                "Approval from someone with authority to allow a specific action.",
              ],
              [
                "Scope",
                "The exact limits of what is allowed, including systems, tasks, and time.",
              ],
              [
                "Consent",
                "Clear agreement from the right person before accessing or using something.",
              ],
              [
                "Private data",
                "Information that belongs to a person, account, school, family, or organization.",
              ],
              [
                "Responsible reporting",
                "Safely telling the right trusted person about a concern without investigating further.",
              ],
              [
                "Bypassing",
                "Avoiding a rule, control, login, setting, or restriction. Students should not do this.",
              ],
              [
                "Real system",
                "A live website, account, network, device, app, or file storage area that affects real people.",
              ],
              [
                "Safe lab",
                "A controlled training space using fake data, fake users, and clear instructions.",
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
            Why context changes everything
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-bold text-white">In a safe lab</h3>
              <p className="mt-3 leading-7 text-slate-300">
                The system is designed for learning. The data is fake. The task
                is approved. The instructions define what students may do.
                Mistakes do not expose real people or damage real services.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <h3 className="text-xl font-bold text-white">On a real system</h3>
              <p className="mt-3 leading-7 text-slate-300">
                The system belongs to a person, school, company, or
                organization. It may contain private information. Even simple
                exploration can cause harm, break rules, or create panic if it
                is not authorized.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Mistakes that responsible learners avoid
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Thinking 'I was just curious' makes real-system testing okay.",
              "Assuming a classmate's unlocked device gives permission to look around.",
              "Using tools, searches, or scripts on school networks without teacher-approved scope.",
              "Opening, forwarding, or saving private screenshots to prove a point.",
              "Continuing to explore after noticing something that seems misconfigured or sensitive.",
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
            Classify the boundary
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Review each fake situation. Your job is not to investigate. Your job
            is to classify the boundary and choose the safest next step.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {decisionExamples.map((example) => (
              <div
                key={example.situation}
                className={`rounded-2xl border p-5 ${example.tone}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  {example.label}
                </p>
                <p className="mt-3 leading-7">{example.situation}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="The shared folder concern"
          evidence={[
            "A student sees a shared folder name that looks like it might contain class roster files.",
            "The student has not opened the folder and does not know whether access was intentional.",
            "The folder appears inside a real school account, not a CyberShield fake lab.",
          ]}
          question="What is the safest defensive conclusion?"
          options={[
            "Open the folder quickly to confirm what is inside.",
            "Ask friends if they can also access the folder.",
            "Do not open it. Report the folder name and location to a teacher or school technology staff.",
            "Download a copy in case the folder disappears.",
          ]}
          bestAnswer={2}
          explanation="Because this involves a real school system and possible private data, the student should avoid opening or copying anything and report only safe details to trusted staff."
        />

        <ScenarioDecisionLab
          title="A friend asks you to 'test' their account"
          scenario="A friend says, 'I think my account is secure. Try to get in and tell me if my password is bad.' You are not in a teacher-approved lab and there are no written rules or boundaries."
          choices={[
            {
              label: "Choice A",
              response:
                "Try a few guesses because your friend said it was okay.",
              outcome:
                "Risky choice. Casual permission from a friend is not a safe cybersecurity scope, and guessing logins crosses a serious boundary.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response:
                "Decline, explain that real accounts are not labs, and suggest using a password-strength lesson or trusted security settings instead.",
              outcome:
                "Best choice. You protect your friend, avoid unsafe access, and redirect the situation toward approved defensive learning.",
              tone: "best",
            },
            {
              label: "Choice C",
              response:
                "Ask your friend to write down the password so you can judge it.",
              outcome:
                "Risky choice. Students should not collect or view real passwords. Use general password guidance instead.",
              tone: "risk",
            },
          ]}
        />

        <FakeAlertCard
          title="Boundary Warning: Real Account Request"
          severity="Medium"
          time="09:42 AM"
          source="CyberShield Ethics Trainer"
          details="A student was asked to test a real account outside a lab. The account belongs to a real person and contains private information."
          recommendation="Do not test, guess, collect, or access anything. Explain the boundary and recommend approved security settings or a teacher-supervised fake lab."
        />

        <FakeLogPanel
          title="Fake Ethics Review Log"
          logs={[
            "09:40 | student-question | Friend asked for real account testing",
            "09:41 | boundary-check | Permission unclear: real account, no teacher-approved scope",
            "09:42 | decision | Decline testing request",
            "09:43 | safe-action | Recommend password settings lesson and trusted adult guidance",
            "09:44 | status | No real account access attempted",
          ]}
        />

        <DefenderChecklist
          title="Legal vs Illegal Activity Checklist"
          items={[
            "I can explain why permission and scope matter before any cybersecurity action.",
            "I can identify when a real system is not a safe lab.",
            "I can stop when an activity could expose, change, or interrupt real data or services.",
            "I can choose safe alternatives like reporting, asking trusted help, or using fake labs.",
            "I can avoid collecting passwords, screenshots, private messages, or proof from real accounts.",
          ]}
        />

        <MiniQuiz
          title="B2.2 Mini Quiz: Boundaries and Safe Decisions"
          questions={[
            {
              question:
                "Which factor most clearly separates safe cyber learning from unsafe activity?",
              choices: [
                "How advanced the topic sounds",
                "Whether the activity has permission, scope, safe intent, and no harmful impact",
                "Whether the student already knows a lot about computers",
                "Whether the activity only takes a few minutes",
              ],
              answer: 1,
              explanation:
                "Cybersecurity activity must be judged by permission, scope, intent, and impact. Skill level or time does not replace authorization.",
            },
            {
              question:
                "A student finds a real school folder that might contain private files. What should they do?",
              choices: [
                "Open it to confirm the concern",
                "Copy it before reporting",
                "Share it with friends to see if they can access it",
                "Do not open it; report safe details to trusted school staff",
              ],
              answer: 3,
              explanation:
                "When private data may be involved, avoid opening, copying, or sharing. Report only safe details to the right trusted person.",
            },
            {
              question:
                "Which example is safest for a cybersecurity beginner lesson?",
              choices: [
                "Testing a public website without approval",
                "Practicing with fake accounts and fake logs inside CyberShield",
                "Guessing a friend's password after they ask you to",
                "Looking through a classmate's unlocked device",
              ],
              answer: 1,
              explanation:
                "Fake accounts and fake logs inside an approved training page are safe. Real systems, accounts, and devices are not student testing grounds.",
            },
            {
              question: "Why is 'I was just curious' not enough?",
              choices: [
                "Because curiosity cannot replace permission or prevent harm",
                "Because curiosity is never useful in cybersecurity",
                "Because only adults are allowed to learn cybersecurity",
                "Because cybersecurity has no gray areas",
              ],
              answer: 0,
              explanation:
                "Curiosity is valuable when it stays inside safe boundaries. It does not replace authorization or make real-system testing okay.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write a Responsible Learning Boundary Statement"
          prompt="Write a 5-7 sentence statement explaining how you will keep cybersecurity learning legal, ethical, and school-safe. Include permission, scope, fake labs, real systems, and trusted reporting."
          tips={[
            "Use the phrase: permission before action.",
            "Explain why fake labs are different from real systems.",
            "Include who you would ask when a situation feels unclear.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Legal and ethical cybersecurity depends on permission, scope, intent, and impact.",
            "Safe labs use fake data, fake users, and approved instructions.",
            "Real accounts, devices, networks, folders, and websites are not student testing spaces without clear authorization.",
            "When a situation is unclear, stop and ask a trusted adult, teacher, guardian, counselor, or school technology staff.",
            "Responsible defenders protect people and trust before proving technical skill.",
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