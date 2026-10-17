import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const debriefAreas = [
  {
    title: "What Worked",
    items: [
      "Which platform workflows were fast and reliable?",
      "Which references or checklists were genuinely useful?",
      "Which team communication habits reduced duplicate work?",
      "Which verification methods caught mistakes before they became larger problems?",
    ],
  },
  {
    title: "What Slowed Us Down",
    items: [
      "Which investigations took too long?",
      "Where did the team repeat work or lose context?",
      "Which commands, tools, or concepts caused hesitation?",
      "Which decisions were delayed because ownership was unclear?",
    ],
  },
  {
    title: "What Broke or Nearly Broke",
    items: [
      "Which changes affected required functionality?",
      "Which dependencies were discovered too late?",
      "Which late-round actions created unnecessary risk?",
      "Which systems needed rollback or recovery?",
    ],
  },
  {
    title: "Evidence & Documentation",
    items: [
      "Did the team preserve original state before high-impact changes?",
      "Were important findings recorded with system and time context?",
      "Were unresolved items visible at the end?",
      "Could another teammate understand the major decisions from the log alone?",
    ],
  },
  {
    title: "Team Operations",
    items: [
      "Did every platform have a clear owner?",
      "Were handoffs complete and understandable?",
      "Did teammates escalate blockers early enough?",
      "Did the team lead maintain a useful priority picture?",
    ],
  },
  {
    title: "Next Practice Priorities",
    items: [
      "Which technical topic needs deliberate practice next?",
      "Which workflow should be rehearsed under time pressure?",
      "Which quick-reference page or checklist is missing?",
      "Which mistake should the team design a practice lab around?",
    ],
  },
];

const quickDebrief = [
  {
    step: "01",
    title: "Capture immediate reactions",
    detail:
      "Before details fade, each teammate records one thing that worked, one thing that slowed them down, and one thing they would change next round.",
  },
  {
    step: "02",
    title: "Review the change log",
    detail:
      "Use the shared record to reconstruct the round instead of relying only on memory.",
  },
  {
    step: "03",
    title: "Identify turning points",
    detail:
      "Find the decisions, discoveries, mistakes, or recoveries that most affected the team's performance.",
  },
  {
    step: "04",
    title: "Separate skill gaps from process gaps",
    detail:
      "Decide whether each problem came from technical knowledge, weak communication, poor prioritization, missing evidence, or time pressure.",
  },
  {
    step: "05",
    title: "Choose practice actions",
    detail:
      "Turn the most important lessons into specific drills, labs, references, or team procedures.",
  },
  {
    step: "06",
    title: "Assign owners and dates",
    detail:
      "A lesson becomes useful only when someone owns the follow-up and the team knows when it will be practiced or reviewed.",
  },
];

const incidentReview = [
  "What was the original condition?",
  "What evidence did we have at the time?",
  "What decision did we make?",
  "Why did that decision seem reasonable then?",
  "What happened after the change?",
  "How quickly did we detect the result?",
  "Did we have a rollback path?",
  "What should we do differently next time?",
];

const practiceBacklog = [
  {
    category: "Knowledge gap",
    example: "We did not understand a service, log source, permission model, or network behavior quickly enough.",
    action: "Create a focused study note and short hands-on lab.",
  },
  {
    category: "Command hesitation",
    example: "We knew the concept but spent too long remembering the correct command or path.",
    action: "Add the command to the quick-reference section and practice it repeatedly.",
  },
  {
    category: "Verification gap",
    example: "We made a correct-looking change but did not confirm mission functionality.",
    action: "Add a verification step to the relevant checklist or practice lab.",
  },
  {
    category: "Communication gap",
    example: "Two teammates duplicated work or a dependency was not shared.",
    action: "Improve status language, ownership rules, or handoff format.",
  },
  {
    category: "Prioritization gap",
    example: "Low-value work consumed time while a higher-impact issue remained unresolved.",
    action: "Practice P1-P4 ranking using timed fictional scenarios.",
  },
  {
    category: "Late-round risk",
    example: "The team kept experimenting when recovery time was nearly gone.",
    action: "Rehearse the Final 30 and Final 15 procedures during practice rounds.",
  },
];

const weakVsBetter = [
  {
    weak: "Only talk about the score or result.",
    better:
      "Review the decisions and workflows that produced the result so the team can repeat strengths and fix weaknesses.",
  },
  {
    weak: "Blame the person who made a mistake.",
    better:
      "Examine the evidence, process, communication, and verification conditions that allowed the mistake to happen.",
  },
  {
    weak: "Write down every problem the team noticed.",
    better:
      "Rank the few lessons that will most improve the next round and turn them into specific practice actions.",
  },
  {
    weak: "Wait several days before debriefing.",
    better:
      "Capture the first debrief while details are fresh, then do deeper practice planning afterward.",
  },
  {
    weak: "Say we need to practice Linux more.",
    better:
      "Name the exact Linux skill, such as sudo review, systemd dependencies, SSH verification, or cron persistence, and build a drill around it.",
  },
  {
    weak: "Fix the checklist later.",
    better:
      "Update references and checklists while the missing step is still clear in the team's memory.",
  },
];

const debriefQuestions = [
  "What was our best decision of the round?",
  "What was our highest-cost mistake or near-miss?",
  "Where did we lose the most time?",
  "Which platform needed more confidence or depth?",
  "Which communication habit helped most?",
  "Which dependency surprised us?",
  "Which verification step should become mandatory?",
  "What is the single most important thing to practice before the next round?",
];

const finalOutputs = [
  "Three strengths to preserve",
  "Three weaknesses to improve",
  "Top technical practice topic",
  "Top teamwork/process practice topic",
  "Checklist or quick-reference update",
  "Practice lab to build or repeat",
  "Owner for each follow-up",
  "Target date before the next competition",
];

const finalChecklist = [
  "Immediate reactions were captured while details were fresh.",
  "The shared change log was reviewed.",
  "Major turning points were identified.",
  "Mistakes were analyzed without personal blame.",
  "Knowledge gaps were separated from process gaps.",
  "Verification failures were identified.",
  "Communication and ownership problems were identified.",
  "Late-round risk decisions were reviewed.",
  "The team selected a small number of high-value practice priorities.",
  "References or checklists that need updates were identified.",
  "Follow-up actions have owners.",
  "The next practice session has clear objectives.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function PostRoundDebriefPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Day Guide
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
            href="/cyberpatriot/competition-day-guide/final-15-minutes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Guide
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Competition Day Guide &middot; Guide 12 &middot; Post-Round
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Post-Round Debrief
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The round is over, but the learning is not. A good debrief turns
                fresh competition experience into better technical skills,
                stronger teamwork, clearer references, and smarter practice.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to assign blame or replay every detail. Focus on
                the few decisions, skills, and workflows that will most improve
                the next round.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Debrief Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Strengths</span>
                  <span className="font-bold text-white">Preserved</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Weaknesses</span>
                  <span className="font-bold text-white">Specific</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Practice</span>
                  <span className="font-bold text-white">Prioritized</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Follow-up</span>
                  <span className="font-bold text-white">Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Debrief rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Analyze the process, not the person
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            When something went wrong, ask what evidence, workflow,
            communication, verification, or time-pressure condition allowed it
            to happen. The goal is a stronger team system for next time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Quick debrief"
            title="Capture the round before the details fade"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickDebrief.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.step}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Six review areas"
            title="Review the round from more than one angle"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {debriefAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{area.title}</h3>

                <div className="mt-4 grid gap-2">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Incident review
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Use mistakes and near-misses as practice material
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {incidentReview.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Practice backlog
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Convert observations into specific improvement work
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceBacklog.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.example}
                </p>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-200">
                  Action: {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak debrief vs better debrief
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Replace vague reflection with useful next actions
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {weakVsBetter.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak debrief
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better debrief
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Debrief questions"
            title="End with the lessons that matter most"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {debriefQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Debrief outputs"
            title="Leave the review with concrete follow-up"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {finalOutputs.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center"
              >
                <p className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Post-Round Debrief final checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Turn this round into a better next round
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/competition-day-guide"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Competition Day Guide
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <Link
            href="/cyberpatriot/competition-day-guide/final-15-minutes"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Guide
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
