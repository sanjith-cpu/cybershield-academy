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
const previousLesson = `${modulePath}/safe-labs-vs-real-systems`;
const nextLesson = `${modulePath}/professional-ethics-and-digital-trust`;

const reportingFlow = [
  {
    title: "Notice",
    detail: "Recognize that something may be unsafe, confusing, suspicious, or outside normal expectations.",
  },
  {
    title: "Pause",
    detail: "Do not click, reply, forward, download, test, investigate, or try to prove the problem yourself.",
  },
  {
    title: "Preserve safely",
    detail: "Keep basic visible details if instructed, such as the sender name, time, screenshot of the message, or page title.",
  },
  {
    title: "Tell trusted help",
    detail: "Report to a teacher, guardian, counselor, school technology staff, or the official reporting method.",
  },
  {
    title: "Document clearly",
    detail: "Use calm facts: what you saw, when you saw it, where it appeared, and what you did next.",
  },
];

const reportParts = [
  ["What happened?", "Describe the visible issue in plain language without guessing or exaggerating."],
  ["Where did it happen?", "Name the app, class tool, inbox, device, or page where the concern appeared."],
  ["When did it happen?", "Include the date and approximate time if you know it."],
  ["Who needs to know?", "Send it to the correct trusted adult, teacher, guardian, counselor, or school technology staff."],
  ["What did you do?", "Explain whether you clicked nothing, closed the page, saved a screenshot, or asked for help."],
  ["What should not be included?", "Do not include passwords, private information, rumors, or unrelated screenshots."],
];

const goodReportExamples = [
  {
    label: "Clear",
    text: "At 9:15 AM, I received a message in my school inbox claiming my account would close today. I did not click the button. I am reporting it to school technology staff.",
  },
  {
    label: "Calm",
    text: "A class app showed a login warning that I have not seen before. I stopped using it and asked my teacher before entering any information.",
  },
  {
    label: "Useful",
    text: "The message appeared in a group chat and asked students to share usernames. I did not respond. I can show the message to a trusted adult if needed.",
  },
];

export default function ResponsibleReportingConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.5
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Responsible Reporting Concepts
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cybersecurity is not only about spotting problems. It is also about reporting concerns in a safe, calm, and useful way. This lesson teaches students how to report cyber concerns without escalating risk, spreading rumors, or trying to investigate real systems alone.
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
                Reporting Rule
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                Report concerns. Do not become the investigator.
              </h2>
              <p className="mt-4 text-slate-300">
                Students help most when they preserve basic facts, avoid risky actions, and alert the correct trusted person or team.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Safe rule: do not click suspicious links, open risky attachments, test real systems, or search for proof. Pause and report through trusted channels.
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
            ← B2.4
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
          lessonTitle="B2.5 Responsible Reporting Concepts"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that reporting is safer than investigating real systems alone.",
            "I can describe a concern calmly using facts instead of rumors.",
            "I am ready to protect privacy when sharing cyber concerns.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Good reporting helps teams respond faster and safer.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            In professional cybersecurity, reports become tickets, alerts, case notes, and response actions. A report that is calm, specific, and privacy-aware can help defenders understand what happened without wasting time or creating confusion.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            The same is true at school. A student who says, “I saw this message, I did not click it, and I am reporting it,” is being much more helpful than a student who clicks around, sends it to friends, or tries to prove what it is.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain what responsible reporting means in school-safe cybersecurity learning.",
            },
            {
              title: "Learning Objective 2",
              text: "Identify what information belongs in a useful cyber concern report.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose safe reporting actions instead of risky investigation actions.",
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
            Reporting is a defensive skill, not a tattling habit.
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Protects people</h3>
              <p className="mt-3 leading-7">
                Reporting helps trusted adults and technology staff protect accounts, devices, privacy, and learning spaces.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Reduces confusion</h3>
              <p className="mt-3 leading-7">
                Clear facts prevent rumors, panic, false accusations, and unnecessary sharing of private information.
              </p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Avoids extra risk</h3>
              <p className="mt-3 leading-7">
                Trying to investigate alone can cause more harm than the original concern, especially on real systems.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept Explanation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Responsible reporting means sharing the right facts with the right people.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Responsible reporting is the process of telling a trusted person or official team about a cyber concern without making the situation worse. The goal is not to embarrass someone, spread a screenshot, expose private information, or prove a theory. The goal is to get help safely.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            A good report answers basic questions: what happened, where it happened, when it happened, who needs to know, and what safe action you already took. It does not include passwords, private data, rumors, or instructions that encourage someone else to click or test.
          </p>
        </section>

        <VisualDiagramCard
          title="Responsible Reporting Flow"
          description="Use this safe flow when you see a suspicious message, confusing login warning, account concern, unsafe post, or possible privacy issue."
          steps={[
            "Notice the concern and pause before taking action",
            "Preserve only safe visible facts without clicking or testing",
            "Report to trusted help using calm and specific language",
          ]}
        />

        <FakeDashboardCard
          title="Fake Reporting Queue Dashboard"
          subtitle="A training-only dashboard showing how clear student reports can help school technology staff triage concerns."
          metrics={[
            {
              label: "Reports with clear facts",
              value: "18",
              note: "These include where, when, and what appeared without private details.",
            },
            {
              label: "Reports needing follow-up",
              value: "4",
              note: "These are missing context or contain unclear screenshots.",
            },
            {
              label: "Risky student actions avoided",
              value: "12",
              note: "Students reported instead of clicking, replying, testing, or forwarding.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Reporting terms students should know
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Report", "A clear message sent to a trusted person or official team about a concern."],
              ["Escalation", "Moving a concern to someone with more authority, training, or responsibility."],
              ["Triage", "Sorting reports by urgency, evidence, and possible impact."],
              ["Evidence", "Safe visible facts that help explain what happened."],
              ["Privacy", "Protecting personal information while discussing a concern."],
              ["Screenshot", "A picture of what appeared. Use only when allowed and avoid exposing private information."],
              ["Ticket", "A tracked work item used by support or security teams."],
              ["False Alarm", "A concern that turns out not to be harmful but was still reasonable to report."],
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
            What belongs in a useful report?
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportParts.map(([part, detail]) => (
              <div
                key={part}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-200">{part}</h3>
                <p className="mt-3 leading-7 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Reporting mistakes that can make the situation worse
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Clicking a suspicious link to check whether it is real before reporting.",
              "Forwarding the suspicious message to friends to ask what they think.",
              "Posting screenshots publicly instead of reporting privately to trusted help.",
              "Adding guesses like “this is definitely a hacker” without evidence.",
              "Including passwords, private messages, student records, or unrelated personal details.",
              "Trying to test a real account, website, network, or device to collect more proof.",
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
            Build a clean cyber concern report
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Use the fake situation below to decide what should and should not go into a responsible report.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-200">Fake Situation</p>
            <p className="mt-3 leading-7">
              A student receives a school-style message saying, “Your project account will be deleted today. Confirm your username now.” The message appears in a class chat at 2:40 PM. The sender name is unfamiliar. The student has not clicked anything.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {goodReportExamples.map((example) => (
              <div
                key={example.label}
                className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5 text-emerald-100"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  {example.label} Report Style
                </p>
                <p className="mt-3 leading-7">{example.text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Which report is most responsible?"
          evidence={[
            "A fake class chat message asks students to confirm usernames.",
            "The sender is unfamiliar and the message creates urgency.",
            "The student has not clicked, replied, or shared the message publicly.",
          ]}
          question="Which report is safest and most useful?"
          options={[
            "This is probably a hacker. Everyone should click carefully and see what happens.",
            "At 2:40 PM, I saw an unfamiliar class chat message asking for usernames. I did not click or reply. I am reporting it to my teacher or school technology staff.",
            "I posted the screenshot publicly so other students can investigate it.",
            "I need to test whether the message is real before bothering an adult.",
          ]}
          bestAnswer={1}
          explanation="The best report is specific, calm, and safe. It explains what happened and what the student did not do, then sends the concern to trusted help."
        />

        <ScenarioDecisionLab
          title="A suspicious message appears in your class chat"
          scenario="You see a message asking students to confirm usernames before the end of the day. A friend says to forward it to everyone so they know not to trust it."
          choices={[
            {
              label: "Choice A",
              response: "Forward the message widely so everyone can inspect it.",
              outcome: "Risky choice. Forwarding can spread the message, expose more students, and create confusion.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Do not click or forward it. Report it to a teacher or school technology staff with the time, location, and visible message details.",
              outcome: "Best choice. This protects others while keeping the report calm, private, and useful.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Reply to the sender and ask whether they are real.",
              outcome: "Caution. Replying can create more risk. It is safer to report through trusted channels.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Report Quality Alert: Missing Context"
          severity="Medium"
          time="2:47 PM"
          source="CyberShield Training Ticket System"
          details="A report says only, “Someone is hacking the class chat.” The report does not include where the message appeared, when it appeared, what it asked for, or whether the student clicked anything."
          recommendation="Rewrite the report with clear facts: what appeared, where it appeared, when it appeared, what action was taken, and who should review it. Avoid guesses and private information."
        />

        <FakeLogPanel
          title="Fake Responsible Reporting Timeline"
          logs={[
            "14:40 | concern-seen | Unfamiliar message requests usernames in class chat",
            "14:41 | safe-action | Student does not click, reply, or forward",
            "14:42 | privacy-check | No passwords or private records included in report",
            "14:44 | report-created | Includes where, when, what appeared, and safe action taken",
            "14:47 | escalation | Teacher and school technology staff receive report",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Report Writing Formula
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Use the four-sentence method
          </h2>
          <div className="mt-5 grid gap-3">
            {reportingFlow.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300"
              >
                <span className="mr-3 font-black text-cyan-300">{index + 1}.</span>
                <span className="font-bold text-white">{step.title}:</span> {step.detail}
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Responsible Reporting Checklist"
          items={[
            "I can explain why students should report concerns instead of investigating real systems alone.",
            "I can write a calm report that includes what, where, when, and what safe action was taken.",
            "I can avoid including passwords, private information, rumors, or unnecessary screenshots.",
            "I can choose trusted adults, teachers, guardians, counselors, or school technology staff as reporting contacts.",
            "I can stop myself from clicking, forwarding, replying, downloading, or testing when something feels suspicious.",
          ]}
        />

        <MiniQuiz
          title="B2.5 Mini Quiz: Responsible Reporting Concepts"
          questions={[
            {
              question: "What is the main goal of responsible reporting?",
              choices: [
                "To prove the problem by testing it yourself",
                "To get trusted help safely using clear facts",
                "To warn everyone by forwarding the message",
                "To collect as much private information as possible",
              ],
              answer: 1,
              explanation: "Responsible reporting shares clear facts with trusted help without creating more risk.",
            },
            {
              question: "Which detail belongs in a cyber concern report?",
              choices: [
                "Your password so staff can check your account",
                "A guess about who caused it",
                "Where and when the suspicious message appeared",
                "A challenge for friends to test the link",
              ],
              answer: 2,
              explanation: "Where and when the issue appeared helps trusted adults or staff understand the situation safely.",
            },
            {
              question: "What should a student avoid after seeing a suspicious link?",
              choices: [
                "Pausing before action",
                "Reporting to trusted help",
                "Clicking the link to see whether it is real",
                "Describing the message calmly",
              ],
              answer: 2,
              explanation: "Students should not click suspicious links to verify them. They should pause and report through trusted channels.",
            },
            {
              question: "Why should reports avoid rumors?",
              choices: [
                "Rumors can confuse the response and unfairly blame people",
                "Rumors make reports more technical",
                "Rumors are required for escalation",
                "Rumors replace evidence",
              ],
              answer: 0,
              explanation: "Responsible reports use facts, not guesses. Rumors can create confusion and harm trust.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write a Responsible Report Template"
          prompt="Create a short report template that a student could use when they see a suspicious message, account warning, unsafe post, or privacy concern. The template should be calm, specific, and privacy-safe."
          tips={[
            "Include fields for what happened, where it happened, and when it happened.",
            "Add a line for what safe action the student already took.",
            "Add a reminder not to include passwords, private data, rumors, or risky links.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Responsible reporting means sharing the right facts with the right trusted people.",
            "Students should report cyber concerns instead of investigating real systems alone.",
            "A useful report includes what happened, where it happened, when it happened, and what safe action was taken.",
            "Reports should avoid passwords, private information, rumors, public screenshots, and risky links.",
            "When something feels unsafe, students should ask trusted adults, teachers, guardians, counselors, or school technology staff for help.",
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