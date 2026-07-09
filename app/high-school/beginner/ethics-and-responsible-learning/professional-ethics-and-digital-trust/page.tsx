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
const previousLesson = `${modulePath}/responsible-reporting-concepts`;
const nextLesson = `${modulePath}/ethics-decision-lab`;

const trustPrinciples = [
  {
    title: "Permission",
    detail: "Only work on systems, files, accounts, or data when you have clear approval from the correct owner or authority.",
  },
  {
    title: "Privacy",
    detail: "Treat other people’s information as protected, even when you can technically see it.",
  },
  {
    title: "Accuracy",
    detail: "Separate facts from guesses so reports, tickets, and conversations do not mislead people.",
  },
  {
    title: "Accountability",
    detail: "Own your actions, document what you did, and ask for help when you are unsure.",
  },
  {
    title: "Restraint",
    detail: "Do the safest necessary action, not the most exciting or most invasive action.",
  },
  {
    title: "Respect",
    detail: "Protect people from embarrassment, blame, rumors, and unnecessary exposure.",
  },
];

const ethicsSignals = [
  ["Green Flag", "The student asks for permission before opening a file that is not theirs."],
  ["Green Flag", "The student reports a concern using calm facts and avoids naming people without evidence."],
  ["Yellow Flag", "The student is curious and wants to keep investigating, but the system is real and permission is unclear."],
  ["Red Flag", "The student shares private screenshots in a group chat to prove a point."],
  ["Red Flag", "The student uses access they accidentally received to look through another person’s work."],
  ["Green Flag", "The student stops, documents safely, and asks a trusted adult or technology staff member what to do next."],
];

export default function ProfessionalEthicsDigitalTrustPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.6
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Professional Ethics and Digital Trust
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cybersecurity work depends on trust. Students must learn that technical skill is not enough. A responsible defender protects privacy, follows boundaries, communicates honestly, and chooses the safest action even when curiosity makes another option tempting.
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
                Professional Rule
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Defenders protect trust, not just technology.
              </h2>
              <p className="mt-4 text-slate-300">
                Every technical decision affects real people. Ethical defenders think about privacy, fairness, permission, impact, and accountability before they act.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Safe rule: if permission, privacy, or harm is unclear, stop and ask a trusted adult, teacher, guardian, counselor, or school technology staff member.
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
            ← B2.5
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
          lessonTitle="B2.6 Professional Ethics and Digital Trust"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that technical access does not automatically mean permission.",
            "I can explain why privacy matters when discussing cyber concerns.",
            "I am ready to think like a trustworthy defender, not just a curious student.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Cybersecurity teams are trusted with sensitive systems and sensitive information.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            A cybersecurity professional may see logs, alerts, account names, file paths, device details, support tickets, or incident notes. That access creates responsibility. People trust defenders to use information only for the right purpose and only within approved boundaries.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            High school students can practice the same mindset: pause before acting, avoid unnecessary exposure, report concerns respectfully, and never use accidental access as an excuse to look around.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain why ethics and trust are part of cybersecurity, not separate from it.",
            },
            {
              title: "Learning Objective 2",
              text: "Identify professional behaviors that protect privacy, permission, and accountability.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose ethical responses when curiosity, access, and responsibility conflict.",
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
            Trust is hard to earn and easy to lose.
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">People rely on defenders</h3>
              <p className="mt-3 leading-7">
                Teachers, families, classmates, and organizations rely on defenders to handle concerns carefully and respectfully.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Access creates responsibility</h3>
              <p className="mt-3 leading-7">
                Seeing something by accident does not make it okay to explore, copy, share, or use it.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Misuse damages safety</h3>
              <p className="mt-3 leading-7">
                Unethical behavior can expose private information, harm reputations, break rules, and reduce confidence in security work.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept Explanation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Professional ethics means doing the right thing with access, information, and skill.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Cybersecurity ethics is the habit of asking, “Am I allowed to do this, should I do this, and could this harm someone?” A person may have the ability to open a file, inspect a message, or view a setting, but ethical defenders also ask whether they have permission and whether their action is necessary.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Digital trust is the confidence people have that systems, teams, and individuals will handle technology responsibly. Trust grows when defenders are honest, careful, privacy-aware, and willing to ask for guidance when boundaries are unclear.
          </p>
        </section>

        <VisualDiagramCard
          title="The Digital Trust Triangle"
          description="Professional trust grows when defenders combine permission, privacy, and accountability before taking action. Missing one side makes the situation unstable."
          steps={[
            "Confirm permission before acting",
            "Protect privacy while reviewing concerns",
            "Document and explain actions responsibly",
          ]}
        />

        <FakeDashboardCard
          title="Fake Digital Trust Dashboard"
          subtitle="A training-only dashboard showing what school technology staff might track when reviewing ethical handling of cyber concerns."
          metrics={[
            {
              label: "Reports with clear permission",
              value: "24",
              note: "Actions were taken only in approved learning spaces or official reporting channels.",
            },
            {
              label: "Privacy issues avoided",
              value: "17",
              note: "Students removed private details before reporting or discussing concerns.",
            },
            {
              label: "Questions escalated safely",
              value: "9",
              note: "Students asked trusted staff before continuing when boundaries were unclear.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ethics and trust terms students should know
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Ethics", "Principles that guide responsible choices, especially when skill or access could affect others."],
              ["Trust", "Confidence that people and systems will act responsibly and protect what matters."],
              ["Accountability", "Being able to explain your actions and accept responsibility for them."],
              ["Confidentiality", "Protecting information from unnecessary or unauthorized exposure."],
              ["Need-to-Know", "Only accessing or sharing information when it is necessary for an approved purpose."],
              ["Misuse", "Using access, tools, or knowledge in a way that is not allowed or not appropriate."],
              ["Transparency", "Being clear and honest about what happened, what you did, and what you do not know."],
              ["Professionalism", "Acting with care, respect, honesty, and responsibility in technical situations."],
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
            Six principles of trustworthy cyber behavior
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-200">{principle.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{principle.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ethical mistakes that can break digital trust
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Assuming that accidental access gives permission to keep looking.",
              "Sharing screenshots that expose names, accounts, grades, messages, or private details.",
              "Making public accusations before facts are checked by trusted adults or staff.",
              "Using cybersecurity knowledge to embarrass, scare, pressure, or impress other students.",
              "Collecting more information than needed for a safe report.",
              "Hiding a mistake instead of asking for help quickly and honestly.",
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
            Sort digital trust signals
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Review the fake signals below. Green flags build trust, yellow flags require caution, and red flags break trust. The goal is to notice the ethical boundary before the situation becomes risky.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ethicsSignals.map(([label, text]) => (
              <div
                key={text}
                className={
                  label === "Green Flag"
                    ? "rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5 text-emerald-100"
                    : label === "Yellow Flag"
                      ? "rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5 text-yellow-100"
                      : "rounded-2xl border border-red-400/40 bg-red-400/10 p-5 text-red-100"
                }
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white">{label}</p>
                <p className="mt-3 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Was trust protected?"
          evidence={[
            "A student accidentally sees a shared folder containing another class period’s project notes.",
            "The student did not open the files, did not copy anything, and did not tell classmates.",
            "The student sent a short private report to the teacher saying the folder may have the wrong sharing setting.",
          ]}
          question="Which conclusion is most accurate?"
          options={[
            "The student should have opened the files to collect more proof.",
            "The student protected trust by limiting action, avoiding private exposure, and reporting to the right person.",
            "The student should post a warning with screenshots so everyone knows about the folder.",
            "The student did nothing useful because they did not investigate deeply.",
          ]}
          bestAnswer={1}
          explanation="The student acted ethically by limiting access, protecting privacy, and reporting the concern through a trusted channel. Defenders do not need to invade privacy to be helpful."
        />

        <ScenarioDecisionLab
          title="Accidental access creates an ethical choice"
          scenario="You open a class tool and notice that you can see a folder that looks like it belongs to a different class. You are curious because the file names look interesting."
          choices={[
            {
              label: "Choice A",
              response: "Open a few files to confirm what is inside before telling anyone.",
              outcome: "Risky choice. Accidental access does not give permission to inspect someone else’s files.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Close the folder, do not copy or share anything, and privately tell your teacher or school technology staff what you saw.",
              outcome: "Best choice. This protects privacy, respects boundaries, and helps the right people fix the issue.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Tell a few friends so they can check whether they can see it too.",
              outcome: "Caution. This spreads the exposure. It is safer to report privately to trusted help.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Ethics Review Alert: Privacy Boundary"
          severity="High"
          time="11:18 AM"
          source="CyberShield Training Ethics Board"
          details="A fake student report includes screenshots with visible names, account labels, and private notes that are not needed to explain the concern. The report was sent to a group chat instead of a trusted adult or staff member."
          recommendation="Remove unnecessary private details, avoid group sharing, and report only the minimum useful facts to the correct trusted person or team."
        />

        <FakeLogPanel
          title="Fake Trust-Preserving Response Timeline"
          logs={[
            "11:12 | accidental-access | Student notices unexpected shared folder",
            "11:13 | restraint | Student closes folder without opening files",
            "11:14 | privacy | Student does not copy, screenshot, or share private contents",
            "11:16 | report | Student sends calm private note to teacher",
            "11:18 | review | Teacher escalates sharing setting concern to school technology staff",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Professional Decision Formula
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ask four questions before taking action
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              ["Am I allowed?", "Permission must be clear before accessing, testing, changing, or reviewing anything."],
              ["Is it necessary?", "A trustworthy defender uses the minimum action needed for the approved purpose."],
              ["Could this expose someone?", "Protect names, accounts, messages, records, and other private details."],
              ["Who should know?", "Report concerns to trusted adults, teachers, guardians, counselors, or school technology staff."],
            ].map(([question, answer], index) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">{index + 1}.</span>
                <span className="font-bold text-white">{question}</span> {answer}
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Professional Ethics Checklist"
          items={[
            "I can explain why cybersecurity skill must be guided by ethics and trust.",
            "I can identify when accidental access does not equal permission.",
            "I can protect privacy by sharing only the minimum useful facts with trusted help.",
            "I can separate facts from guesses when describing cyber concerns.",
            "I can stop and ask for guidance when permission, privacy, or potential harm is unclear.",
          ]}
        />

        <MiniQuiz
          title="B2.6 Mini Quiz: Professional Ethics and Digital Trust"
          questions={[
            {
              question: "What does accidental access mean?",
              choices: [
                "You now have permission to explore the information",
                "You should share what you found before it disappears",
                "You may have seen something by mistake, but you still need permission before accessing more",
                "You should test whether other students can access it too",
              ],
              answer: 2,
              explanation: "Accidental access does not create permission. A trustworthy response is to stop, avoid further access, and report safely.",
            },
            {
              question: "Which behavior best protects digital trust?",
              choices: [
                "Sharing screenshots with friends to prove a concern",
                "Using only approved access for approved purposes",
                "Guessing who caused a problem in a public chat",
                "Collecting extra private details just in case",
              ],
              answer: 1,
              explanation: "Digital trust grows when people use access only for approved purposes and handle information carefully.",
            },
            {
              question: "Why is privacy part of cybersecurity ethics?",
              choices: [
                "Because technical information never affects people",
                "Because people’s information can be harmed by unnecessary exposure",
                "Because privacy only matters outside of school",
                "Because reports should include every detail possible",
              ],
              answer: 1,
              explanation: "Cybersecurity work often touches information about people. Ethical defenders avoid unnecessary exposure and share only what is needed.",
            },
            {
              question: "What should you do when permission or harm is unclear?",
              choices: [
                "Keep going until you understand the situation",
                "Ask a trusted adult, teacher, guardian, counselor, or school technology staff member",
                "Ask friends to help investigate",
                "Post the concern publicly",
              ],
              answer: 1,
              explanation: "When boundaries are unclear, the safest choice is to stop and ask trusted help before continuing.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create a Digital Trust Code"
          prompt="Write a five-rule Digital Trust Code for a high school cybersecurity learner. Each rule should explain how a student can use cyber knowledge responsibly while protecting permission, privacy, and trust."
          tips={[
            "Include one rule about accidental access and permission.",
            "Include one rule about privacy-safe reporting.",
            "Include one rule about asking trusted help when boundaries are unclear.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity skill must be guided by ethics, permission, privacy, and accountability.",
            "Digital trust means people believe systems and defenders will handle information responsibly.",
            "Accidental access does not give permission to explore, copy, share, or use information.",
            "Ethical defenders use the minimum safe action needed and report concerns through trusted channels.",
            "When something feels unclear or unsafe, students should stop and ask trusted adults, teachers, guardians, counselors, or school technology staff for help.",
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