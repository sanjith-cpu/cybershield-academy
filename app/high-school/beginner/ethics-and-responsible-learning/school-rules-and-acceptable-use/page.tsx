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
const previousLesson = `${modulePath}/legal-vs-illegal-cyber-activity`;
const nextLesson = `${modulePath}/safe-labs-vs-real-systems`;

const policySections = [
  {
    title: "Accounts",
    rule: "Use only your own assigned account and keep login information private.",
    why: "Accounts connect actions to real people. Sharing, borrowing, or guessing accounts can harm privacy and trust.",
  },
  {
    title: "Devices",
    rule: "Use school and shared devices for approved learning activities only.",
    why: "Shared devices may contain settings, files, and access that affect other students and staff.",
  },
  {
    title: "Networks",
    rule: "Do not test, scan, bypass, interrupt, or explore school networks.",
    why: "Networks support classes, safety systems, communication, and student information. They are real systems, not labs.",
  },
  {
    title: "Data",
    rule: "Do not open, copy, save, forward, or publish private information.",
    why: "Student data, teacher files, grades, rosters, messages, and screenshots can expose people even when the intent is harmless.",
  },
];

const acceptableUseDecisions = [
  {
    situation: "Using a teacher-provided fake account to complete a CyberShield worksheet.",
    status: "Acceptable",
    explanation: "The account is fake, the task is approved, and the scope is clear.",
    tone: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
  },
  {
    situation: "Trying to change a browser setting on a school device to get around a restriction.",
    status: "Not acceptable",
    explanation: "Bypassing rules or settings is outside school-safe cybersecurity learning.",
    tone: "border-red-400/40 bg-red-400/10 text-red-100",
  },
  {
    situation: "Seeing an exposed real class file name and reporting only the location to a teacher.",
    status: "Responsible",
    explanation: "The student avoids opening private content and uses a trusted reporting path.",
    tone: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
  },
  {
    situation: "Installing an unknown extension on a school browser because it looks useful.",
    status: "Ask first",
    explanation: "Extensions can affect privacy and security. Students should follow school technology rules and get approval.",
    tone: "border-yellow-400/40 bg-yellow-400/10 text-yellow-100",
  },
];

export default function SchoolRulesAndAcceptableUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B2 • Lesson B2.3
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                School Rules and Acceptable Use
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cybersecurity learning has to respect the rules of the place where technology is being used. In school, that means accounts, devices, networks, apps, and data must stay inside acceptable-use boundaries.
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
                Acceptable Use Lens
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                School technology is real infrastructure.
              </h2>
              <p className="mt-4 text-slate-300">
                A classroom device or school account may feel ordinary, but it connects to real people, real records, real learning systems, and real responsibilities.
              </p>
              <div className="mt-5 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-sm text-yellow-100">
                Training rule: if the activity changes settings, touches real accounts, explores real systems, collects data, bypasses rules, or affects others, stop and ask a trusted teacher or school technology staff member.
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
            ← B2.2
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
          lessonTitle="B2.3 School Rules and Acceptable Use"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I understand that school technology belongs to a real learning environment.",
            "I know acceptable-use rules apply even when I am trying to learn cybersecurity.",
            "I am ready to choose safe actions when rules, ownership, or privacy are involved.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Real-World Professional Hook
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Every organization has rules for technology use.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Cybersecurity professionals do not walk into a company and make up their own rules. They follow policies, contracts, access approvals, privacy requirements, and written procedures. Students need the same habit at school. Acceptable-use rules explain what students can and cannot do with accounts, devices, networks, apps, storage, email, and online learning tools.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            A strong cyber learner does not treat school technology as a playground. They treat it like a shared environment that must stay reliable, respectful, private, and safe for everyone.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learning Objective 1",
              text: "Explain what acceptable-use rules are and why schools use them.",
            },
            {
              title: "Learning Objective 2",
              text: "Apply school-safe boundaries to accounts, devices, networks, apps, and data.",
            },
            {
              title: "Learning Objective 3",
              text: "Choose responsible next steps when a cyber learning idea conflicts with school rules.",
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
            Acceptable use protects learning, privacy, and trust.
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Protects people</h3>
              <p className="mt-3 leading-7">
                Rules reduce the chance that student information, class files, private messages, or personal devices are exposed.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-100">
              <h3 className="font-black text-white">Protects learning</h3>
              <p className="mt-3 leading-7">
                Reliable networks, devices, and accounts help classes run smoothly and keep students connected to assignments.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Protects trust</h3>
              <p className="mt-3 leading-7">
                Following rules shows teachers and staff that students can learn cybersecurity responsibly.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Core Concept Explanation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Acceptable-use policies define the boundary for school technology.
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            An acceptable-use policy is a set of rules for using technology in a school or organization. It may cover accounts, passwords, devices, networks, websites, downloads, extensions, communication tools, privacy, AI tools, file sharing, and reporting. The exact rules can be different by school, but the defender mindset stays the same: follow the rules, use technology for approved purposes, protect privacy, and ask before doing anything unclear.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            In cybersecurity class, this matters because some technical topics can sound exciting but are not appropriate on real school systems. Students should practice in safe fake labs, not on real school devices, networks, accounts, or websites.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {policySections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-200">{section.title}</h3>
                <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
                  <span className="font-bold text-white">Rule:</span> {section.rule}
                </p>
                <p className="mt-3 rounded-xl border border-slate-700 bg-slate-900 p-4 text-slate-300">
                  <span className="font-bold text-white">Why:</span> {section.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        <VisualDiagramCard
          title="Acceptable-Use Decision Flow"
          description="Use this simple professional decision flow before doing anything with school technology. The safest choice is often to ask before acting."
          steps={[
            "Identify the technology involved: account, device, network, app, or data",
            "Check whether the action is approved by school rules and teacher instructions",
            "Use a fake lab or ask trusted staff if the action touches real systems or private information",
          ]}
        />

        <FakeDashboardCard
          title="Fake School Technology Boundary Dashboard"
          subtitle="A training-only dashboard showing how a school might group technology decisions. This uses fake numbers and fake categories."
          metrics={[
            {
              label: "Approved class tasks",
              value: "12",
              note: "Teacher-provided lessons, fake labs, research, and assignments.",
            },
            {
              label: "Needs approval",
              value: "5",
              note: "Downloads, extensions, device settings, and shared tools.",
            },
            {
              label: "Not allowed",
              value: "4",
              note: "Bypassing rules, accessing others' accounts, or exploring real systems.",
            },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Policy words that matter
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Acceptable Use",
                "The approved way students may use school technology and online tools.",
              ],
              [
                "Policy",
                "A written rule or expectation that guides behavior and decisions.",
              ],
              [
                "School Device",
                "A laptop, tablet, desktop, or other device managed by the school.",
              ],
              [
                "School Network",
                "The Wi-Fi, wired connections, filters, services, and systems that keep school technology connected.",
              ],
              [
                "Managed Account",
                "An account provided by a school or organization with rules and monitoring responsibilities.",
              ],
              [
                "Bypass",
                "Trying to get around a control, restriction, filter, setting, or login. Students should not do this.",
              ],
              [
                "Private Information",
                "Data connected to real people, including grades, messages, rosters, files, photos, or account details.",
              ],
              [
                "Trusted Reporting",
                "Telling a teacher, guardian, counselor, or school technology staff member without investigating further.",
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
            Five school technology areas to treat carefully
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-5">
            {[
              {
                title: "Accounts",
                safe: "Use your own account and approved login methods.",
              },
              {
                title: "Devices",
                safe: "Keep settings, installed apps, and device use inside school rules.",
              },
              {
                title: "Networks",
                safe: "Use the network for normal learning, not testing or exploration.",
              },
              {
                title: "Apps",
                safe: "Use approved apps, sites, extensions, and learning tools.",
              },
              {
                title: "Data",
                safe: "Avoid opening or sharing information that may belong to others.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.safe}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
            Common Mistakes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            What cyber learners should not do at school
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Assuming school rules do not apply because the goal is cybersecurity learning.",
              "Changing settings on managed devices without approval.",
              "Trying to bypass filters, restrictions, blocks, or monitoring tools.",
              "Testing school websites, networks, accounts, printers, or apps outside a teacher-approved fake lab.",
              "Saving screenshots or copies of real private information to prove that something is wrong.",
              "Letting friends use your school account because it feels convenient.",
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
            Review a fake acceptable-use policy
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Read the fake policy note below. Then compare the examples and decide whether each action fits the policy.
          </p>
          <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Fake Policy Excerpt
            </p>
            <p className="mt-3 leading-8 text-slate-300">
              Students may use school accounts, devices, networks, and approved apps for learning activities assigned or approved by school staff. Students may not attempt to bypass controls, access another person's account, inspect private files, change device settings, install unapproved software or extensions, or test real school systems. If students notice a possible security or privacy concern, they should stop and report safe details to a trusted adult or school technology staff.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {acceptableUseDecisions.map((example) => (
              <div
                key={example.situation}
                className={`rounded-2xl border p-5 ${example.tone}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  {example.status}
                </p>
                <p className="mt-3 leading-7">{example.situation}</p>
                <p className="mt-3 text-sm leading-6 opacity-90">{example.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="The browser extension request"
          evidence={[
            "A student wants to install a browser extension on a school-managed laptop because it claims to block ads.",
            "The extension requests permission to read and change data on websites.",
            "The teacher has not approved the extension, and the device is managed by the school.",
          ]}
          question="What is the safest school-appropriate decision?"
          options={[
            "Install it because it might make browsing easier.",
            "Ask a trusted teacher or school technology staff member before installing anything.",
            "Install it and remove it before returning the laptop.",
            "Tell classmates to try it first and see what happens.",
          ]}
          bestAnswer={1}
          explanation="School-managed devices and browser extensions require approval. Extensions can affect privacy and security, so the student should ask trusted staff before installing anything."
        />

        <ScenarioDecisionLab
          title="A shortcut seems blocked"
          scenario="You are working on a school laptop. A website shortcut for a class resource does not load because of a school filter. A friend says they know a way around the filter and offers to show you."
          choices={[
            {
              label: "Choice A",
              response: "Use the workaround because the website is for class.",
              outcome: "Risky choice. Even if the goal is schoolwork, bypassing filters or restrictions is not acceptable. Ask a teacher for the correct access path.",
              tone: "risk",
            },
            {
              label: "Choice B",
              response: "Ask the teacher or school technology staff for help accessing the resource properly.",
              outcome: "Best choice. This keeps you inside school rules and gives staff a chance to fix the access issue safely.",
              tone: "best",
            },
            {
              label: "Choice C",
              response: "Try the workaround only once and stop if it fails.",
              outcome: "Caution. Trying to bypass a control is still outside acceptable use, even one time.",
              tone: "caution",
            },
          ]}
        />

        <FakeAlertCard
          title="Acceptable Use Warning: Unapproved Setting Change"
          severity="Medium"
          time="10:18 AM"
          source="CyberShield School Safety Trainer"
          details="A student is considering changing settings on a managed school device to access a blocked class resource. The device and network are real school systems."
          recommendation="Do not bypass settings or filters. Ask the teacher or school technology staff for the approved way to access the class resource."
        />

        <FakeLogPanel
          title="Fake Acceptable-Use Review Log"
          logs={[
            "10:15 | student-action | Class resource blocked on managed school laptop",
            "10:16 | boundary-check | Real device and real school filter involved",
            "10:17 | policy-review | Bypassing controls not allowed",
            "10:18 | safe-action | Student asks teacher for approved access path",
            "10:20 | status | No setting changes or bypass attempts made",
          ]}
        />

        <DefenderChecklist
          title="School Rules and Acceptable Use Checklist"
          items={[
            "I can explain why school accounts, devices, networks, apps, and data need rules.",
            "I can avoid changing settings, installing tools, or using workarounds without approval.",
            "I can tell the difference between approved class tasks and unsafe real-system testing.",
            "I can protect private school information by not opening, copying, or sharing it.",
            "I can report concerns to a teacher, guardian, counselor, or school technology staff member.",
          ]}
        />

        <MiniQuiz
          title="B2.3 Mini Quiz: Acceptable Use"
          questions={[
            {
              question: "What is the main purpose of an acceptable-use policy?",
              choices: [
                "To stop students from learning technology",
                "To define safe and approved ways to use school technology",
                "To make every website unavailable",
                "To replace teacher instructions",
              ],
              answer: 1,
              explanation: "Acceptable-use policies explain how school technology should be used safely, responsibly, and appropriately.",
            },
            {
              question: "A student notices a possible private file on a real school drive. What should they do?",
              choices: [
                "Open it to confirm the contents",
                "Download it as proof",
                "Avoid opening it and report safe details to trusted staff",
                "Share the folder name with friends",
              ],
              answer: 2,
              explanation: "The student should not open, copy, or share possible private data. Reporting safe details protects people and follows school-safe boundaries.",
            },
            {
              question: "Which action is most likely outside acceptable use?",
              choices: [
                "Completing a fake CyberShield lab assigned by a teacher",
                "Using your own school account for homework",
                "Trying to bypass a school filter or restriction",
                "Asking a teacher for help accessing a class resource",
              ],
              answer: 2,
              explanation: "Bypassing filters, settings, or restrictions is not appropriate. Students should ask for approved help instead.",
            },
            {
              question: "Why should students avoid installing unknown extensions on school devices?",
              choices: [
                "Extensions are always illegal",
                "Extensions can affect privacy, permissions, and device safety, so approval is needed",
                "Extensions only work on personal devices",
                "Extensions cannot be removed",
              ],
              answer: 1,
              explanation: "Extensions can request sensitive permissions and affect managed devices. Students should follow school rules and ask trusted staff first.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create an Acceptable-Use Decision Guide"
          prompt="Write a one-page student-friendly guide called 'Before I Use School Technology.' Explain what students should check before using accounts, devices, networks, apps, or data for cyber learning."
          tips={[
            "Include the phrase: ask before acting.",
            "Mention real systems versus fake labs.",
            "Explain what to do when a privacy or security concern appears.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Acceptable-use rules protect students, staff, devices, networks, data, and trust.",
            "School technology is real infrastructure, not a place for unsupervised testing.",
            "Cybersecurity learning should happen in approved fake labs with clear scope.",
            "Bypassing controls, changing settings, installing unapproved tools, or accessing others' data is not school-safe.",
            "When rules are unclear, stop and ask a trusted adult, teacher, guardian, counselor, or school technology staff member.",
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