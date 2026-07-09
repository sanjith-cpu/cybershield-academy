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
const previousLesson = `${modulePath}/what-cybersecurity-protects`;
const nextLesson = `${modulePath}/threats-vulnerabilities-risk`;

const ciaGoals = [
  {
    letter: "C",
    title: "Confidentiality",
    question: "Who should be able to see it?",
    meaning: "Protect information from being viewed by people who are not supposed to access it.",
    example: "A student's fake grade report should only be visible to approved users.",
  },
  {
    letter: "I",
    title: "Integrity",
    question: "Can we trust that it is accurate?",
    meaning: "Protect information and systems from being changed in the wrong way.",
    example: "A fake assignment score should not change unless an approved teacher updates it.",
  },
  {
    letter: "A",
    title: "Availability",
    question: "Can authorized people use it when needed?",
    meaning: "Protect access to systems, services, and data so they work when authorized users need them.",
    example: "A fake learning portal should be reachable when students need to submit work.",
  },
];

export default function ConfidentialityIntegrityAvailabilityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B1 • Lesson B1.2
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Confidentiality, Integrity, and Availability
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The CIA triad is one of the most important beginner security models. It helps defenders explain
                what kind of protection is needed: keeping information private, keeping it accurate, and keeping it usable.
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Visual Model</p>
              <h2 className="mt-3 text-2xl font-black text-white">The CIA Triad</h2>
              <div className="mt-6 grid gap-3">
                {ciaGoals.map((goal) => (
                  <div key={goal.letter} className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-2xl font-black text-slate-950">
                      {goal.letter}
                    </div>
                    <div>
                      <p className="font-black text-cyan-100">{goal.title}</p>
                      <p className="text-sm text-slate-400">{goal.question}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-sm text-yellow-50">
                Training rule: every example here is fake, defensive, and school-safe.
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
          lessonTitle="B1.2 Confidentiality, Integrity, and Availability"
          lessonNumber={2}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can explain that cybersecurity protects valuable assets.",
            "I understand that not every cyber problem is the same type of problem.",
            "I am ready to classify fake examples without guessing or testing real systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Real-World Professional Hook</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A defender needs a clear security goal.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Imagine a fictional school system called Falcon Portal. If a student's fake grade is shown to the wrong
            person, that is a confidentiality problem. If the fake grade is changed incorrectly, that is an integrity
            problem. If the portal is down when students need it, that is an availability problem.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            The CIA triad gives defenders a simple professional language for describing what went wrong and what kind
            of protection matters most.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Define confidentiality, integrity, and availability using safe school examples.",
            },
            {
              title: "Learning Objective 2",
              text: "Classify fake incidents by which CIA goal is most directly affected.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose beginner defensive controls that support each CIA goal.",
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
          <h2 className="mt-2 text-2xl font-bold text-white">Different problems need different defenses.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <h3 className="font-bold text-white">Private but unavailable?</h3>
              <p className="mt-2">The data might still be confidential, but users cannot use it. That points to availability.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <h3 className="font-bold text-white">Available but incorrect?</h3>
              <p className="mt-2">The system might load, but the information cannot be trusted. That points to integrity.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-bold text-white">Accurate but exposed?</h3>
              <p className="mt-2">The information may be correct, but the wrong audience can see it. That points to confidentiality.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Core Concept</p>
          <h2 className="mt-2 text-2xl font-bold text-white">The CIA triad explains what defenders are trying to protect.</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {ciaGoals.map((goal) => (
              <div key={goal.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-2xl font-black text-slate-950">
                    {goal.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-cyan-100">{goal.title}</h3>
                    <p className="text-sm text-slate-400">{goal.question}</p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{goal.meaning}</p>
                <p className="mt-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">
                  <span className="font-bold text-cyan-200">Fake example:</span> {goal.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
          <h2 className="mt-2 text-2xl font-bold text-white">CIA protection triangle</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            This built-in visual acts like an image without needing an external file. It shows how one system can need
            all three security goals at the same time.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center">
                <p className="text-3xl font-black text-cyan-200">C</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Private</p>
              </div>
              <div className="absolute bottom-8 left-8 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-center">
                <p className="text-3xl font-black text-yellow-200">I</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-100">Accurate</p>
              </div>
              <div className="absolute bottom-8 right-8 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-center">
                <p className="text-3xl font-black text-emerald-200">A</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">Usable</p>
              </div>
              <div className="rounded-full border border-slate-600 bg-slate-900 px-6 py-4 text-center shadow-2xl shadow-cyan-950/40">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Protected Asset</p>
                <p className="mt-1 text-xl font-black text-white">Fake Grade Portal</p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ["Confidentiality control", "Use approved access rules so only the right fake users can view the right fake records."],
                ["Integrity control", "Use review steps and change records so fake grades are not edited incorrectly."],
                ["Availability control", "Use backups, maintenance plans, and support workflows so the fake portal can recover."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                  <h3 className="font-black text-cyan-200">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VisualDiagramCard
          title="From Event to CIA Goal"
          description="When something happens, defenders do not panic or guess. They classify the problem, then choose the safest defensive next step."
          steps={[
            "Read the fake evidence carefully.",
            "Decide whether privacy, accuracy, or access is most affected.",
            "Choose a defensive response and report through the right path.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">CIA terms defenders use</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Confidentiality", "The security goal of keeping information visible only to authorized people."],
              ["Integrity", "The security goal of keeping information accurate, complete, and trustworthy."],
              ["Availability", "The security goal of keeping systems and data usable when authorized people need them."],
              ["Authorized user", "A person or account that has approved permission to access a system or data."],
              ["Unauthorized access", "Access by someone who does not have permission. Students should report concerns instead of investigating themselves."],
              ["Security goal", "The protection outcome a defender is trying to support, such as privacy, accuracy, or uptime."],
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
          <h2 className="mt-2 text-2xl font-bold text-white">How to classify a fake incident</h2>
          <div className="mt-5 space-y-3">
            {[
              "Ask what asset is affected, such as a fake account, grade, file, device, or portal.",
              "Ask whether the main issue is exposure, incorrect change, or loss of access.",
              "Match exposure to confidentiality, incorrect change to integrity, and loss of access to availability.",
              "Look for overlap. Some incidents can affect more than one CIA goal.",
              "Choose a defensive response that fits the evidence and stays inside approved boundaries.",
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
          <h2 className="mt-2 text-2xl font-bold text-white">What beginners often confuse</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Calling every issue a privacy issue", "Some issues are about accuracy or access, not only who can see data."],
              ["Ignoring overlap", "One fake event can affect multiple goals, such as a file being exposed and changed."],
              ["Jumping to blame", "Defenders classify evidence first and avoid accusing people without facts."],
            ].map(([mistake, correction]) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-slate-950 p-5">
                <h3 className="font-bold text-red-100">{mistake}</h3>
                <p className="mt-2 text-slate-300">{correction}</p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake CIA Status Dashboard"
          subtitle="A fictional security dashboard showing how a defender might summarize protection goals."
          metrics={[
            { label: "Confidentiality", value: "Review", note: "One fake report may be visible to the wrong test group." },
            { label: "Integrity", value: "Stable", note: "No fake records show unexpected changes." },
            { label: "Availability", value: "Degraded", note: "Portal response time is slow for a practice class." },
          ]}
        />

        <FakeAlertCard
          title="Fake Grade Portal Visibility Alert"
          severity="Medium"
          time="10:42 AM"
          source="Fake Access Review System"
          details="A fictional practice report appears to be visible to a test group that should not need it. No real student data is involved."
          recommendation="Treat this as a confidentiality concern. Do not share screenshots publicly. Document the fake evidence and route it to the approved technology contact."
        />

        <FakeLogPanel
          title="Fake CIA Event Samples"
          logs={[
            "10:01 portal.report access_group=students result=allowed file=fake-grade-summary.pdf",
            "10:08 portal.record grade_change status=approved_by_teacher value=93",
            "10:16 portal.service status=slow users_affected=42",
            "10:42 access_review finding='fake report visible to extra test group' cia_goal=confidentiality",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Classify fake events by CIA goal</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Read each fictional event. Decide which CIA goal is most directly affected. This lab is about classification,
            not real investigation, testing, or blame.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              ["Fake Event 1", "A practice health form is visible to a club member who should not need it.", "Most direct goal: Confidentiality"],
              ["Fake Event 2", "A practice assignment score changes from 88 to 8 because of a typo.", "Most direct goal: Integrity"],
              ["Fake Event 3", "A practice learning site cannot load during a review session.", "Most direct goal: Availability"],
              ["Fake Event 4", "A fake backup restores an older version of a document by mistake.", "Most direct goal: Integrity"],
              ["Fake Event 5", "A fictional lunch payment page is offline for scheduled maintenance.", "Most direct goal: Availability"],
              ["Fake Event 6", "A fake club roster is emailed to a wider test list than intended.", "Most direct goal: Confidentiality"],
            ].map(([event, situation, answer]) => (
              <div key={event} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{event}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{situation}</p>
                <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm font-bold text-emerald-100">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which CIA goal is most affected?"
          evidence={[
            "A fictional portal loads normally for all test users.",
            "A fake student report is accurate and has not been changed.",
            "The report is visible to an extra test group that should not need it.",
            "No real people, accounts, or data are involved in this training example.",
          ]}
          question="What is the best beginner defender conclusion?"
          options={[
            "This is mainly a confidentiality issue because the fake report is visible to the wrong audience.",
            "This is mainly an availability issue because the portal loads normally.",
            "This proves a real attack happened and students should investigate accounts.",
            "This is not a security issue because the fake report is accurate.",
          ]}
          bestAnswer={0}
          explanation="The safest conclusion follows the fake evidence: the report is visible to an extra group, so confidentiality is most directly affected. Defenders avoid guessing and use approved reporting paths."
        />

        <ScenarioDecisionLab
          title="A classmate sends you a real screenshot"
          scenario="A classmate says they can see something in a real school system that they probably should not see. They offer to send you a screenshot so you can help classify it. What should you do?"
          choices={[
            {
              label: "A",
              response: "Tell them not to send private screenshots, avoid sharing details, and report the concern to a trusted teacher or school technology staff.",
              outcome: "Best choice. This protects privacy and moves the concern to approved adults and support staff.",
              tone: "best",
            },
            {
              label: "B",
              response: "Ask them to send the screenshot so you can decide whether it is confidentiality, integrity, or availability.",
              outcome: "Risky. Students should not collect or spread private screenshots from real systems.",
              tone: "risk",
            },
            {
              label: "C",
              response: "Log into their account to see whether the same issue appears for you.",
              outcome: "Unsafe. Never use another person's account or ask for credentials.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can define confidentiality, integrity, and availability.",
            "I can match fake examples to the most affected CIA goal.",
            "I understand that one event can affect more than one CIA goal.",
            "I can choose safe reporting instead of collecting real private screenshots or testing real systems.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "Which CIA goal focuses on keeping information visible only to authorized people?",
              choices: ["Availability", "Confidentiality", "Integrity", "Formatting"],
              answer: 1,
              explanation: "Confidentiality is about protecting information from being seen by people who should not access it.",
            },
            {
              question: "A fake grade changes from 91 to 19 because of an input mistake. Which CIA goal is most directly affected?",
              choices: ["Integrity", "Availability", "Confidentiality", "Branding"],
              answer: 0,
              explanation: "Integrity is about accuracy and trustworthiness. An incorrect change affects integrity.",
            },
            {
              question: "A fake learning portal is private and accurate, but students cannot access it during class. Which goal is most affected?",
              choices: ["Confidentiality", "Availability", "Color contrast", "File naming"],
              answer: 1,
              explanation: "Availability means authorized users can access the system or data when needed.",
            },
            {
              question: "What should a student do if a real system appears to expose private information?",
              choices: [
                "Collect screenshots and send them to friends",
                "Try to test whether more private pages are exposed",
                "Avoid spreading private details and report it to a trusted teacher, guardian, counselor, or school technology staff",
                "Ignore it because confidentiality is only for companies",
              ],
              answer: 2,
              explanation: "Students should protect privacy and use trusted reporting paths instead of investigating or sharing real private information.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write a CIA Classification Brief"
          prompt="Create a fake school technology scenario with three short events: one confidentiality issue, one integrity issue, and one availability issue. For each event, write 2-3 sentences explaining what happened, which CIA goal is most affected, and what safe defensive response should happen next."
          tips={[
            "Use fictional names, accounts, and systems only.",
            "Explain your classification with evidence, not guesses.",
            "End with a trusted reporting or support path.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Confidentiality means information is visible only to authorized people.",
            "Integrity means information and systems are accurate, complete, and trustworthy.",
            "Availability means authorized people can use systems and data when needed.",
            "The CIA triad helps defenders explain what kind of security problem they are seeing.",
            "Real privacy or system concerns should be reported safely, not investigated by students on their own.",
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