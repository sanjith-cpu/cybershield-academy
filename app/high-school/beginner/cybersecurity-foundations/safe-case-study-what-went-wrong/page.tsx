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

const moduleHref = "/high-school/beginner/cybersecurity-foundations";
const previousHref = "/high-school/beginner/cybersecurity-foundations/security-controls-layers";
const nextHref = "/high-school/beginner/cybersecurity-foundations/foundations-review-lab";

function NavButton({ href, children, variant = "secondary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          : "rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      }
    >
      {children}
    </Link>
  );
}

function LessonNav() {
  return (
    <nav className="flex flex-wrap gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <NavButton href={previousHref}>← Previous Lesson</NavButton>
      <NavButton href={moduleHref}>Back to Module</NavButton>
      <NavButton href="/high-school/beginner">Beginner Track</NavButton>
      <NavButton href={nextHref} variant="primary">
        Next Lesson →
      </NavButton>
    </nav>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function CaseStudyTimeline() {
  const events = [
    {
      time: "8:05 AM",
      title: "Normal club activity",
      detail: "A fake student club account signs in from the usual school network and opens a shared project folder.",
      status: "Expected",
      style: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    },
    {
      time: "8:32 AM",
      title: "Unusual permission change",
      detail: "The shared folder changes from invited editors only to anyone with the link can view.",
      status: "Review",
      style: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
    },
    {
      time: "8:46 AM",
      title: "Report from a student",
      detail: "A student notices that a file link appears in a group chat where it was not expected.",
      status: "Evidence",
      style: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    },
    {
      time: "9:10 AM",
      title: "Safer setting restored",
      detail: "A teacher sponsor restores invited-only sharing and asks school technology staff to review the account settings.",
      status: "Response",
      style: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Timeline</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Fake Case Timeline: The Shared Folder Incident</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A safe case study lets you practice defender thinking without using real private information, real accounts, real links, or real suspicious websites.
      </p>

      <div className="mt-6 grid gap-4">
        {events.map((event, index) => (
          <div key={event.time} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">{event.time}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{event.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{event.detail}</p>
                </div>
              </div>
              <span className={`rounded-full border px-4 py-2 text-sm font-bold ${event.style}`}>{event.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatWentWrongBoard() {
  const cards = [
    {
      title: "Asset",
      question: "What needed protection?",
      answer: "A fake shared project folder with club documents and event planning files.",
      style: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    },
    {
      title: "Risk",
      question: "What could go wrong?",
      answer: "People outside the intended group could view files or spread the link further.",
      style: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
    },
    {
      title: "Control Gap",
      question: "Which safeguard was weak?",
      answer: "Sharing permissions changed without quick review, ownership, or a clear notification path.",
      style: "border-red-400/30 bg-red-400/10 text-red-100",
    },
    {
      title: "Better Response",
      question: "What should defenders do?",
      answer: "Restore safer settings, document evidence, notify the responsible adult, and review account settings.",
      style: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Case Board</p>
      <h2 className="mt-2 text-2xl font-bold text-white">How Defenders Ask “What Went Wrong?”</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Defenders do not start by blaming people. They organize the case into facts: asset, risk, control gap, response, and prevention.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className={`rounded-2xl border p-5 ${card.style}`}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">{card.title}</p>
            <h3 className="mt-3 text-xl font-black text-white">{card.question}</h3>
            <p className="mt-3 leading-7">{card.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseEvidenceTable() {
  const rows = [
    ["Confirmed fact", "Sharing setting changed at 8:32 AM", "Useful evidence"],
    ["Confirmed fact", "A student saw the link in an unexpected group chat", "Useful evidence"],
    ["Unknown", "Who changed the setting and why", "Needs careful review"],
    ["Unknown", "Whether anyone outside the club opened the file", "Do not assume"],
    ["Safe next step", "Restore safer sharing and notify the responsible adult", "Recommended"],
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Sorting</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Separate Facts From Assumptions</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A big part of safe case-study work is knowing what the evidence actually shows and what still needs review.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        <div className="grid grid-cols-3 bg-slate-950 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
          <div className="border-r border-slate-800 p-4">Type</div>
          <div className="border-r border-slate-800 p-4">Statement</div>
          <div className="p-4">Defender Meaning</div>
        </div>
        {rows.map(([type, statement, meaning]) => (
          <div key={statement} className="grid grid-cols-3 border-t border-slate-800 bg-slate-900/70 text-sm text-slate-300">
            <div className="border-r border-slate-800 p-4 font-semibold text-white">{type}</div>
            <div className="border-r border-slate-800 p-4">{statement}</div>
            <div className="p-4">{meaning}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SafeCaseStudyWhatWentWrongPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">High School Beginner • Module B1 • Lesson 6</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Safe Case Study: What Went Wrong?</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Practice analyzing a fake cybersecurity case like a beginner defender: identify the asset, sort evidence, avoid assumptions, find the control gap, and recommend safe next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavButton href={previousHref}>← Previous Lesson</NavButton>
              <NavButton href={nextHref} variant="primary">
                Next Lesson →
              </NavButton>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <LessonNav />

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B1: Cybersecurity Foundations"
          lessonTitle="B1.6 Safe Case Study: What Went Wrong?"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can explain that cybersecurity protects people, data, accounts, devices, and systems.",
            "I can connect threats, vulnerabilities, and impact to risk.",
            "I understand that security controls work best in layers.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Defenders Learn From Incidents Without Creating More Harm">
          <p className="leading-8">
            Cybersecurity teams often study what happened after a problem so they can improve defenses. In professional environments, this is not about gossip, panic, or blame. It is about learning from evidence, protecting people, documenting clearly, and reducing the chance that the same problem happens again.
          </p>
          <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-50">
            <span className="font-bold">Safety boundary:</span> this case study is completely fake. Do not investigate real accounts, open suspicious links, test real systems, or collect anyone&apos;s private information.
          </div>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="By the End of This Lesson, You Should Be Able To">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Analyze a fake case using asset, risk, evidence, controls, and response.",
              "Separate confirmed facts from assumptions.",
              "Identify at least one control gap in a safe scenario.",
              "Recommend calm defensive actions that stay within permission boundaries.",
              "Explain why trusted reporting matters when something seems unsafe.",
              "Write a short beginner incident summary using fake evidence only.",
            ].map((objective) => (
              <div key={objective} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
                {objective}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Case Studies Build Judgment, Not Panic">
          <p className="leading-8">
            Beginner cybersecurity students need more than definitions. They need practice deciding what the evidence means and what the safest next step should be. A safe case study gives students a realistic defender mindset while keeping everything ethical, school-appropriate, and fake-data only.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <h3 className="font-black text-white">Protect People</h3>
              <p className="mt-2">Avoid blame, rumors, and unsafe investigation.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
              <h3 className="font-black text-white">Protect Evidence</h3>
              <p className="mt-2">Write down what is known without changing the story.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-100">
              <h3 className="font-black text-white">Improve Controls</h3>
              <p className="mt-2">Use the case to strengthen safer settings and reporting paths.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="The Five-Part Case Study Method">
          <p className="leading-8">
            A beginner defender can analyze many safe scenarios using five questions: What needed protection? What happened? What evidence supports that? Which control failed or was missing? What safe action should happen next?
          </p>
        </SectionCard>

        <VisualDiagramCard
          title="Beginner Case Study Flow"
          description="Use this flow any time you review a fake cybersecurity scenario. It keeps the analysis calm, evidence-based, and defensive."
          steps={[
            "Identify the protected asset and the risk",
            "Sort evidence into facts and assumptions",
            "Recommend safe controls, reporting, and recovery",
          ]}
        />

        <CaseStudyTimeline />

        <WhatWentWrongBoard />

        <SectionCard eyebrow="Key Vocabulary" title="Terms for Case-Study Analysis">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Case Study", "A safe review of a situation to understand what happened and how defenses can improve."],
              ["Incident", "An event that may affect the safety, privacy, availability, or trustworthiness of a system or data."],
              ["Evidence", "Information that supports what is known, such as a fake alert, fake log, or documented observation."],
              ["Assumption", "A guess that is not fully proven by the evidence yet."],
              ["Control Gap", "A missing, weak, or poorly used safeguard that allowed risk to increase."],
              ["Lessons Learned", "A review step focused on improving future defenses instead of blaming people."],
            ].map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <h3 className="font-bold text-cyan-200">{term}</h3>
                <p className="mt-2 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Technical Breakdown" title="What Went Wrong in the Fake Scenario?">
          <p className="leading-8">
            The problem was not only that a link appeared somewhere unexpected. The deeper issue was that a sharing control changed in a way that increased exposure risk. A beginner defender should notice the difference between the symptom and the control gap.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Symptom</h3>
              <p className="mt-2 leading-7">The file link showed up in an unexpected place. This is the clue that caused concern.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Control Gap</h3>
              <p className="mt-2 leading-7">The folder permissions allowed wider viewing than intended, and the change was not reviewed quickly enough.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-100">
              <h3 className="font-black text-white">Safe Response</h3>
              <p className="mt-2 leading-7">Restore safer settings, document what was observed, and ask the responsible adult or technology staff to review.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Future Improvement</h3>
              <p className="mt-2 leading-7">Use clearer folder ownership, regular permission reviews, and a trusted reporting process.</p>
            </div>
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake Case Review Dashboard"
          subtitle="Training-only dashboard for the shared folder case. Every number is fake and used only for defensive reasoning practice."
          metrics={[
            { label: "Confirmed evidence items", value: "3", note: "Permission change, unexpected link location, safer setting restored." },
            { label: "Unproven assumptions", value: "2", note: "Who changed the setting and whether outside access occurred." },
            { label: "Recommended priority", value: "Medium", note: "Exposure risk increased, but no fake evidence confirms data loss." },
          ]}
        />

        <CaseEvidenceTable />

        <SectionCard eyebrow="Common Mistakes" title="What Beginners Should Avoid During a Case Study">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 1</h3>
              <p className="mt-2">Blaming a person before the evidence supports it.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 2</h3>
              <p className="mt-2">Testing real links, accounts, or systems without permission.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 3</h3>
              <p className="mt-2">Fixing one setting but never improving the process that allowed the risk.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Write a Beginner Incident Summary">
          <p className="leading-8">
            In this lab, write a short summary using only the fake timeline and fake evidence on this page. Do not use real names, real links, real screenshots, or real private information.
          </p>
          <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-bold text-cyan-200">Summary Template</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p><span className="font-bold text-white">What happened:</span> A fake shared folder permission setting changed and increased exposure risk.</p>
              <p><span className="font-bold text-white">Evidence:</span> Fake timeline entries, fake alert, and fake log panel.</p>
              <p><span className="font-bold text-white">Risk:</span> People outside the intended group could view or spread the file link.</p>
              <p><span className="font-bold text-white">Safe response:</span> Restore safer sharing, document the event, and notify a trusted adult or technology staff.</p>
              <p><span className="font-bold text-white">Improvement:</span> Review folder ownership and create clearer sharing rules.</p>
            </div>
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Shared Folder Exposure Review"
          severity="Medium"
          time="08:46 AM"
          source="Fake Classroom File Monitor"
          details="A training-only alert says a fake shared folder link appeared outside the expected project group after a permission change. No real file, person, account, or link is involved."
          recommendation="Treat this as a permission and reporting issue. Restore safer sharing through the proper owner, document the evidence, and ask a trusted adult or school technology staff member to review."
        />

        <FakeLogPanel
          title="Fake Case Evidence Log"
          logs={[
            "08:05:14 account.signin user=club-helper network=school status=expected",
            "08:32:47 folder.permission_change folder=project-notes from=invited_only to=anyone_with_link_view status=review_needed",
            "08:46:09 report.received source=student_observation issue=unexpected_link_location",
            "09:10:22 folder.permission_restore folder=project-notes to=invited_only owner=teacher_sponsor",
            "09:13:40 recommendation.created action=review_owner_settings document_case improve_sharing_process",
          ]}
        />

        <AnalyzeEvidenceCard
          title="What Does the Evidence Actually Prove?"
          evidence={[
            "The fake log confirms the sharing permission changed.",
            "The fake report says the link appeared in an unexpected place.",
            "The fake evidence does not prove who changed the setting or whether outside access happened.",
          ]}
          question="Which conclusion is safest and most evidence-based?"
          options={[
            "Someone definitely stole the files, so accuse the most recent editor.",
            "The permission change increased exposure risk and should be reviewed, but some details are still unknown.",
            "There is no problem because the setting was restored later.",
            "Students should test the link from personal accounts to see what happens.",
          ]}
          bestAnswer={1}
          explanation="The evidence supports a permission exposure risk, not a complete story about intent or impact. Defenders should restore safer settings, document facts, and request trusted review."
        />

        <ScenarioDecisionLab
          title="Choose the Safest Case-Study Response"
          scenario="You are reviewing the fake shared-folder case for class. A classmate says, 'We should find out who did it by checking everyone’s real accounts.'"
          choices={[
            {
              label: "A",
              response: "Agree and start looking through real accounts or private messages.",
              outcome: "This is unsafe and not allowed. Students should not investigate real accounts, private messages, or systems.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Explain that the class should only use the fake evidence and should involve a trusted adult for real concerns.",
              outcome: "Best choice. This keeps the activity defensive, ethical, and within school-safe boundaries.",
              tone: "best",
            },
            {
              label: "C",
              response: "Ignore the case because it is fake and cannot teach anything useful.",
              outcome: "This misses the point. Fake cases can safely teach evidence sorting, control gaps, and defensive response.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can use the five-part case study method: asset, event, evidence, control gap, response.",
            "I can separate confirmed facts from assumptions.",
            "I can avoid blame when the evidence does not prove intent.",
            "I can recommend safe next steps without testing real systems or links.",
            "I know to involve trusted adults, guardians, teachers, counselors, or school technology staff when something feels unsafe.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "What is the main goal of a safe cybersecurity case study?",
              choices: [
                "To blame someone quickly",
                "To learn from evidence and improve defenses safely",
                "To test real suspicious links",
                "To collect private information",
              ],
              answer: 1,
              explanation: "A safe case study helps students learn from fake evidence, practice defensive thinking, and improve controls without creating harm.",
            },
            {
              question: "Which statement is an assumption in the fake shared-folder case?",
              choices: [
                "The folder permission changed",
                "The safer setting was restored",
                "The person who changed the setting had bad intent",
                "A report was received from a student observation",
              ],
              answer: 2,
              explanation: "The fake evidence does not prove intent. Defenders should avoid blaming someone without enough evidence.",
            },
            {
              question: "What is a control gap?",
              choices: [
                "A missing or weak safeguard that allows risk to increase",
                "A final proof that data was stolen",
                "A reason to avoid documentation",
                "A real system students should test",
              ],
              answer: 0,
              explanation: "A control gap is a weakness in safeguards, such as unclear ownership or permission review.",
            },
            {
              question: "What is the safest response if a real school account or file seems unsafe?",
              choices: [
                "Investigate it alone",
                "Share the link so friends can check it",
                "Ask a trusted adult, teacher, guardian, counselor, or school technology staff member for help",
                "Post the evidence publicly",
              ],
              answer: 2,
              explanation: "Students should not handle serious cyber concerns alone. Trusted adults and school technology staff can help respond safely.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Write a Safe Case Study Summary"
          prompt="Write a one-page fake case study summary using the shared-folder scenario. Include: what needed protection, what happened, what evidence supports the concern, what is still unknown, what control gap existed, and what safe next step should happen."
          tips={[
            "Use only fake evidence from this lesson.",
            "Separate facts from assumptions.",
            "End with a calm defensive recommendation.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Safe case studies help students practice evidence-based defender thinking without using real private data or systems.",
            "Defenders separate facts from assumptions before making conclusions.",
            "A control gap is a missing, weak, or poorly reviewed safeguard that allows risk to increase.",
            "When something feels unsafe in real life, students should involve trusted adults, guardians, teachers, counselors, or school technology staff.",
          ]}
        />

        <LessonNav />
      </div>

      <Footer />
    </main>
  );
}