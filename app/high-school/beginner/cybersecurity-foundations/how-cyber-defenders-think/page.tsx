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
const previousLesson = `${modulePath}/threats-vulnerabilities-risk`;
const nextLesson = `${modulePath}/security-controls-layers`;

const defenderMindsets = [
  {
    title: "Start with protection, not curiosity",
    text: "A defender asks how to reduce harm, protect people, and report concerns safely instead of poking around real systems.",
  },
  {
    title: "Use evidence before conclusions",
    text: "A single clue is not enough. Defenders collect safe facts, compare context, and avoid dramatic guesses.",
  },
  {
    title: "Prioritize by risk",
    text: "The most urgent issue is not always the loudest one. Defenders consider impact, likelihood, and who could be affected.",
  },
  {
    title: "Document clearly",
    text: "Good notes help teachers, school technology staff, and security teams understand what happened and what should happen next.",
  },
];

const triageSteps = [
  "Observe the clue",
  "Confirm the context",
  "Identify the asset",
  "Estimate risk",
  "Choose a safe action",
  "Document and escalate when needed",
];

const comparisonRows = [
  {
    impulse: "Click the suspicious link to see what happens.",
    defender: "Do not click. Capture safe visible details and report through the approved path.",
  },
  {
    impulse: "Assume one weird login alert means the account is definitely hacked.",
    defender: "Review safe evidence, check timing/context, and escalate if the pattern looks concerning.",
  },
  {
    impulse: "Tell everyone in a group chat that something is broken.",
    defender: "Avoid spreading possible risk. Notify a trusted adult, teacher, or school technology staff.",
  },
  {
    impulse: "Ignore the issue because it might be nothing.",
    defender: "Record the concern and report it if it could affect privacy, access, or safety.",
  },
];

export default function HowCyberDefendersThinkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
            High School Beginner • Module B1 • Lesson B1.4
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                How Cyber Defenders Think
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cyber defenders do more than notice problems. They think in a calm, ethical, evidence-based way so they can
                protect people, data, devices, and systems without making the situation worse.
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Defender Mindset</p>
              <h2 className="mt-3 text-2xl font-black text-white">Calm • Legal • Evidence-Based</h2>
              <div className="mt-6 space-y-3">
                {[
                  ["Calm", "Avoid panic and drama."],
                  ["Legal", "Stay within permission."],
                  ["Evidence-Based", "Use facts, not guesses."],
                  ["Protective", "Reduce harm safely."],
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
                Training rule: this page uses fake alerts, fake logs, and fake scenarios only. Students should never investigate
                real accounts, private files, suspicious links, or real systems on their own.
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
          lessonTitle="B1.4 How Cyber Defenders Think"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can explain the difference between a threat, vulnerability, and risk.",
            "I understand that defenders use fake labs and approved systems only.",
            "I am ready to practice calm evidence-based thinking instead of guessing.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Real-World Professional Hook</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A good defender is careful before they are technical.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            In a real organization, security teams receive alerts, reports, tickets, emails, logs, screenshots, and questions from
            users. Their job is not to instantly accuse someone or chase every clue. Their job is to protect people and systems
            using safe steps, good judgment, and clear communication.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Beginner students can start building that mindset now: pause, identify what needs protection, look for safe evidence,
            choose the lowest-risk action, and ask trusted adults or approved technology staff for help when needed.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {defenderMindsets.map((mindset) => (
            <div key={mindset.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="font-black text-cyan-200">{mindset.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{mindset.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Learning Objectives</p>
          <h2 className="mt-2 text-2xl font-bold text-white">By the end, students should be able to:</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Explain the defender mindset: calm, ethical, evidence-based, and protective.",
              "Use a simple triage process to decide what a fake alert means.",
              "Choose safe next steps without investigating real systems or private information.",
            ].map((objective) => (
              <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
                {objective}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Why This Matters</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Cybersecurity mistakes often happen when people rush.</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5">
              <h3 className="font-bold text-red-100">Rushing can spread risk</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Clicking, forwarding, reposting, or testing something suspicious can make a problem larger.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <h3 className="font-bold text-yellow-100">Guessing can mislead people</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Defenders need context before deciding whether something is normal, risky, or urgent.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <h3 className="font-bold text-emerald-100">A process protects everyone</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                A safe workflow helps students, teachers, families, and technology teams respond clearly.
              </p>
            </div>
          </div>
        </section>

        <VisualDiagramCard
          title="The Beginner Defender Thinking Loop"
          description="This visual model shows how defenders move from a clue to a safe action. The loop is about decision-making, not hacking or testing real targets."
          steps={triageSteps}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Core Concept Explanation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Defenders separate clues from conclusions.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A clue is something you can safely observe, such as a warning banner, a strange subject line, a login alert, a changed
            permission setting, or a report from a user. A conclusion is what you think the clue means. Defenders do not jump
            straight from one clue to a major conclusion. They ask what is known, what is unknown, and who should handle the issue.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-100">Safe clue</h3>
              <p className="mt-2 text-slate-300">“A fake login alert says a practice account was accessed from a new location.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <h3 className="font-black text-emerald-100">Careful conclusion</h3>
              <p className="mt-2 text-slate-300">“This needs review. We should check approved evidence and notify the account owner through a trusted process.”</p>
            </div>
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Defender Triage Dashboard"
          subtitle="A fictional training dashboard showing how a beginner defender might sort alerts by safety, evidence, and risk."
          metrics={[
            { label: "Fake alerts waiting", value: "4", note: "Practice items need calm review, not panic." },
            { label: "Highest priority", value: "Account", note: "Account access can affect privacy and trust." },
            { label: "Safest next step", value: "Report", note: "Use a trusted adult or approved technology support path." },
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Words defenders use when thinking clearly</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Triage", "Sorting issues by urgency, evidence, and possible impact."],
              ["Context", "Background information that helps explain whether something is normal or concerning."],
              ["Escalation", "Passing a concern to the right trusted person or team."],
              ["Evidence", "Safe facts that support a decision without invading privacy or testing real systems."],
              ["False positive", "An alert that looks concerning but turns out not to be a real problem."],
              ["Documentation", "Clear notes that explain what was seen, when it happened, and what action was taken."],
            ].map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
          <h2 className="mt-2 text-2xl font-bold text-white">A beginner triage workflow</h2>
          <div className="mt-6 grid gap-4">
            {triageSteps.map((step, index) => (
              <div key={step} className="grid gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-5 md:grid-cols-[80px_1fr] md:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-xl font-black text-slate-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-black text-white">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {index === 0 && "Notice the visible clue without clicking, opening private content, or testing anything."}
                    {index === 1 && "Ask what system, account, user, or message the clue belongs to."}
                    {index === 2 && "Decide what needs protection: privacy, account access, device health, data, or availability."}
                    {index === 3 && "Consider possible impact and likelihood using what is safely known."}
                    {index === 4 && "Pick the action that reduces risk without creating more risk."}
                    {index === 5 && "Write clear notes and involve a trusted adult, teacher, guardian, counselor, or school technology staff when needed."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">Common Mistakes</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Impulse thinking vs defender thinking</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-red-400/30">
            <div className="grid bg-red-400/20 text-sm font-bold text-red-50 md:grid-cols-2">
              <div className="border-b border-red-400/30 p-4 md:border-r">Impulse response</div>
              <div className="border-b border-red-400/30 p-4">Defender response</div>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.impulse} className="grid border-b border-red-400/20 last:border-b-0 md:grid-cols-2">
                <div className="border-red-400/20 bg-slate-950 p-4 text-red-100 md:border-r">{row.impulse}</div>
                <div className="bg-slate-950 p-4 text-emerald-100">{row.defender}</div>
              </div>
            ))}
          </div>
        </section>

        <FakeAlertCard
          title="Fake Triage Alert: New Login Location"
          severity="Medium"
          time="09:42 AM"
          source="CyberShield Training Identity Console"
          details="A fictional practice account received a new-location login alert. The login happened during a time when the fake account owner may have been traveling for a school event."
          recommendation="Do not assume account takeover from one clue. Review approved context, notify the account owner through a trusted path, and recommend MFA and password review if the owner does not recognize the activity."
        />

        <FakeLogPanel
          title="Fake Triage Notes"
          logs={[
            "09:42 alert_type=new_location_login account=practice-club-demo severity=medium",
            "09:45 context_check=school_trip_calendar status=possible_match",
            "09:48 safe_action=contact_account_owner_through_trusted_channel status=pending",
            "09:52 recommendation=verify_activity_enable_mfa_document_outcome",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Safe Defensive Lab</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Write a safe triage note</h2>
          <p className="mt-4 leading-8 text-slate-300">
            A triage note should be short, factual, and protective. It should not include private information, accusations, or
            risky testing steps. Use the format below for fake practice scenarios.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              ["What was observed?", "A fake practice account showed a new-location login alert at 09:42 AM."],
              ["What is the possible risk?", "If the owner does not recognize it, the account may need password review and MFA."],
              ["What is the safe next step?", "Contact the account owner through an approved channel and document the result."],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-200">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="What should the defender conclude?"
          evidence={[
            "A fake new-location alert appeared for a practice account.",
            "The time overlaps with a fictional school travel event.",
            "The account has not reported any missing data or suspicious messages.",
            "MFA is available but not yet enabled in the fake training account.",
          ]}
          question="Which conclusion best matches defender thinking?"
          options={[
            "There is a clue that needs safe verification, but one alert is not enough to make a final conclusion.",
            "The account is definitely compromised and students should try to log in to prove it.",
            "The alert should be ignored because travel explains everything.",
            "The alert should be posted publicly so others can investigate it faster.",
          ]}
          bestAnswer={0}
          explanation="Defender thinking avoids both panic and dismissal. The safest conclusion is to verify through trusted channels, enable protective controls when appropriate, and document the outcome."
        />

        <ScenarioDecisionLab
          title="A classmate sends a suspicious screenshot"
          scenario="A classmate sends you a screenshot of a fake prize message and asks whether they should click the link. The screenshot does not show private information, but the message looks suspicious. What should you do?"
          choices={[
            {
              label: "A",
              response: "Tell them not to click, save the visible screenshot if needed, and report it to a trusted adult or school technology staff.",
              outcome: "Best choice. This reduces risk, avoids interacting with the suspicious message, and uses trusted help.",
              tone: "best",
            },
            {
              label: "B",
              response: "Click the link on your own device to check whether it is fake.",
              outcome: "Unsafe. Defenders do not test suspicious links on real devices or accounts.",
              tone: "risk",
            },
            {
              label: "C",
              response: "Forward the message to more students so everyone can judge it.",
              outcome: "Risky. Forwarding suspicious messages can spread harm and confusion.",
              tone: "risk",
            },
          ]}
        />

        <MiniQuiz
          title="How Cyber Defenders Think Quiz"
          questions={[
            {
              question: "What is the safest first habit when seeing a suspicious message?",
              choices: [
                "Click it quickly before it disappears.",
                "Pause, avoid interacting, and use a trusted reporting path.",
                "Forward it to friends for opinions.",
                "Assume it is harmless if it looks professional.",
              ],
              answer: 1,
              explanation: "Defenders reduce risk first. They avoid clicking or spreading suspicious content and report through trusted channels.",
            },
            {
              question: "Why do defenders avoid jumping to conclusions?",
              choices: [
                "Because evidence and context are needed before deciding what an alert means.",
                "Because alerts are always fake.",
                "Because documentation is not important.",
                "Because cybersecurity is only about passwords.",
              ],
              answer: 0,
              explanation: "A clue needs context. Defenders use evidence-based decisions instead of assumptions.",
            },
            {
              question: "What does escalation mean in a beginner defensive workflow?",
              choices: [
                "Making the problem public online.",
                "Trying more advanced actions without permission.",
                "Passing the concern to the right trusted person or team.",
                "Ignoring the issue until someone else sees it.",
              ],
              answer: 2,
              explanation: "Escalation means involving the appropriate trusted adult, teacher, guardian, counselor, or technology staff.",
            },
            {
              question: "Which note is most like defender documentation?",
              choices: [
                "Something is totally hacked!!!",
                "I clicked everything and found weird stuff.",
                "09:42 AM: fake new-location alert appeared; safe next step is to verify with account owner through approved channel.",
                "Everyone should try the link and report back.",
              ],
              answer: 2,
              explanation: "Good documentation is factual, calm, time-aware, and focused on safe next steps.",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can explain why defenders pause before taking action.",
            "I can separate safe clues from unsupported conclusions.",
            "I can use a beginner triage workflow for fake alerts.",
            "I can choose a safe reporting path instead of testing real systems.",
            "I can write a short, factual triage note.",
          ]}
        />

        <PortfolioPrompt
          title="Create a One-Page Defender Mindset Guide"
          prompt="Write a short guide for a new CyberShield student explaining how a beginner defender should respond to suspicious messages, login alerts, or privacy concerns without making the situation worse."
          tips={[
            "Include the words: evidence, context, triage, escalation, and documentation.",
            "Use one fake example, not a real account, real person, or real link.",
            "End with a trusted-help reminder for students.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cyber defenders think calmly, legally, ethically, and protectively.",
            "A clue is not the same as a conclusion; context matters.",
            "Triage helps defenders sort issues by evidence, risk, and safe next steps.",
            "Students should not investigate real systems, click suspicious links, or inspect private content.",
            "Trusted adults, teachers, guardians, counselors, and school technology staff are part of a safe response plan.",
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