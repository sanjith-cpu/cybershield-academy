import Link from "next/link";
import type { ReactNode } from "react";
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
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/beginner/beginner-capstone-review";
const previousLesson = `${modulePath}/beginner-portfolio-reflection`;
const nextLesson = `${modulePath}/module-test`;

const vocabulary = [
  ["Readiness", "The ability to recall, explain, apply, document, and review a skill safely and accurately."],
  ["Knowledge gap", "A concept, process, or decision area that still needs review or practice."],
  ["Confidence level", "A documented estimate of how certain a learner is, based on evidence rather than guesswork."],
  ["Correlation", "Connecting related users, accounts, devices, messages, alerts, logs, systems, and timestamps."],
  ["Prioritization", "Ranking cases or review topics by impact, urgency, uncertainty, spread risk, and importance."],
  ["Review plan", "A structured set of next steps used to close knowledge gaps before an assessment."],
];

const readinessStages = [
  {
    title: "Recall",
    question: "Can I explain the key terms and principles without relying only on recognition?",
    examples: "CIA, risk, ethics, networks, web safety, accounts, privacy, threats, cryptography, careers, and labs.",
  },
  {
    title: "Connect",
    question: "Can I explain how concepts from different modules affect one another?",
    examples: "Identity and phishing, browsers and DNS, backups and availability, alerts and evidence, privacy and sharing.",
  },
  {
    title: "Apply",
    question: "Can I use fictional evidence to choose a safe and proportionate defensive action?",
    examples: "Preserve, verify, restrict, contain, recover, report, escalate, document, or close.",
  },
  {
    title: "Reflect",
    question: "Can I identify what I know, what I am unsure about, and what I need to review next?",
    examples: "Confidence ratings, missed questions, weak explanations, incomplete artifacts, and next study actions.",
  },
];

const challengeRows = [
  {
    domain: "Foundations and ethics",
    evidence: "A learner understands the risk but cannot explain whether the activity is authorized",
    review: "Revisit authorization, scope, privacy, evidence handling, stop conditions, and responsible disclosure.",
  },
  {
    domain: "Networks and web",
    evidence: "A learner recognizes a suspicious page but cannot explain DNS, URLs, HTTPS, or certificate warnings",
    review: "Review the full web connection path and the difference between secure transport and trustworthy content.",
  },
  {
    domain: "Accounts and data",
    evidence: "A learner recommends MFA but ignores password reuse, recovery, privacy settings, sharing, and backups",
    review: "Review account protection as one connected identity, privacy, data, and recovery system.",
  },
  {
    domain: "Threats and defense",
    evidence: "A learner sees a blocked alert and assumes the case is finished",
    review: "Review correlation, containment, escalation, ownership, uncertainty, and recovery.",
  },
  {
    domain: "Portfolio and careers",
    evidence: "A learner lists projects but cannot connect them to specific skills or next goals",
    review: "Review evidence-based skill claims, reflection, revision, redaction, role families, and learning plans.",
  },
];

const mistakes = [
  "Reviewing only vocabulary without practicing decisions and explanations.",
  "Studying every topic equally instead of prioritizing weaker areas.",
  "Treating confidence as proof of knowledge.",
  "Ignoring wrong answers instead of analyzing why they were wrong.",
  "Skipping documentation, uncertainty, ownership, and next actions.",
  "Using real credentials, private data, suspicious files, or live systems during practice.",
];

const quizQuestions = [
  {
    question: "What does readiness mean in this capstone?",
    choices: [
      "The ability to recall, explain, apply, document, and review skills safely and accurately.",
      "Memorizing only definitions.",
      "Finishing every page without reflection.",
      "Feeling confident without evidence.",
    ],
    answer: 0,
    explanation: "Readiness includes knowledge, application, documentation, judgment, and review.",
  },
  {
    question: "What is a knowledge gap?",
    choices: [
      "A concept, process, or decision area that still needs review or practice.",
      "A completed lesson.",
      "A correct answer.",
      "A final score only.",
    ],
    answer: 0,
    explanation: "Knowledge gaps help learners identify exactly what to review next.",
  },
  {
    question: "How should a learner prioritize review?",
    choices: [
      "Focus first on high-impact topics with weak evidence, repeated mistakes, or low confidence.",
      "Review only favorite topics.",
      "Ignore missed questions.",
      "Study every topic for the same amount of time.",
    ],
    answer: 0,
    explanation: "Strong review targets the areas where misunderstanding would create the greatest difficulty.",
  },
  {
    question: "What is the strongest response to incomplete evidence?",
    choices: [
      "Document uncertainty, gather approved context, choose a proportionate action, and escalate when needed.",
      "Invent the missing details.",
      "State total confidence.",
      "Delete the case.",
    ],
    answer: 0,
    explanation: "Honest uncertainty supports safer and more trustworthy decisions.",
  },
  {
    question: "What should happen after a missed practice question?",
    choices: [
      "Review the explanation, identify the misunderstanding, practice the concept again, and record the gap.",
      "Ignore it and move on permanently.",
      "Change the answer key.",
      "Memorize only the letter choice.",
    ],
    answer: 0,
    explanation: "A missed question is useful when it leads to a specific review and improvement action.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href="/high-school/beginner" className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Beginner Track
      </Link>
      <Link href={nextLesson} className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Module Test
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Finish Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Previous: B15.6 Beginner Portfolio Reflection
        </Link>
        <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Back to Module
        </Link>
        <Link href="/high-school/beginner" className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          Beginner Track
        </Link>
        <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
          Next: B15 Module Test
        </Link>
      </div>
    </section>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function ReadinessReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Review</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Recall, Connect, Apply, and Reflect</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Final readiness is not only remembering facts. It is explaining relationships, making safe decisions, documenting evidence, and knowing what still needs review.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {readinessStages.map((stage, index) => (
          <div key={stage.title} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">{index + 1}</div>
            <h3 className="mt-4 text-xl font-black text-white">{stage.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">{stage.question}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stage.examples}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChallengeReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Readiness Review Board</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Evidence of Gaps and Next Review Actions</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional example shows a partial strength and the next review needed before assessment.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">Fake Data</span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {challengeRows.map((row) => (
          <div key={row.domain} className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.5fr]">
            <p className="font-bold text-cyan-100">{row.domain}</p>
            <p className="text-slate-300">{row.evidence}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BeginnerFinalReadinessLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Beginner</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module B15</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 7 of 7</span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.7 Beginner Final Readiness Lab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Combine the full Beginner Track through mixed fictional evidence, safe decisions, confidence checks, knowledge-gap review, and a final assessment preparation plan.
          </p>

          <div className="mt-8"><TopNav /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Beginner Final Readiness Lab"
          lessonNumber={7}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can identify my strongest and weakest Beginner Track domains.",
            "I am ready to explain decisions instead of choosing answers by recognition alone.",
            "I will use only fictional users, accounts, devices, messages, files, networks, alerts, and organizations.",
          ]}
        />

        <SectionCard eyebrow="Capstone Hook" title="Readiness Means Knowing What You Know and What You Still Need to Review">
          <p className="leading-8">
            Final preparation is strongest when the learner can recall key concepts, connect them across modules, apply them to evidence, explain uncertainty, and turn mistakes into a focused review plan.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Readiness rule:</span> confidence is not proof. Use explanations, evidence, practice results, and reflection to decide what is truly ready.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Connect cybersecurity foundations, ethics, networks, web safety, accounts, privacy, data, threats, cryptography, careers, and labs.",
            "Use mixed fictional evidence to choose safe, proportionate, authorized, and documented defensive actions.",
            "Build a targeted review plan based on knowledge gaps, confidence levels, repeated mistakes, and assessment evidence.",
          ].map((objective) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Learning Objective</p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Final Assessments Measure Connections, Not Isolated Vocabulary">
          <p className="leading-8">
            A question about phishing may also involve identity, browsers, privacy, evidence, reporting, endpoint alerts, network traffic, recovery, and ethics. Strong readiness depends on seeing those relationships.
          </p>
        </SectionCard>

        <ReadinessReviewBoard />

        <SectionCard eyebrow="Core Concept" title="Use Evidence to Build a Review Plan">
          <p className="leading-8">
            Missed questions, weak explanations, uncertain decisions, incomplete artifacts, and repeated mistakes reveal where review time should go. Strong areas still need practice, but weaker high-impact areas should come first.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Final Readiness Review Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <ChallengeReviewBoard />

        <FakeDashboardCard
          title="Fake Beginner Readiness Dashboard"
          subtitle="Training dashboard using fictional review domains, quiz results, confidence levels, artifacts, knowledge gaps, and next actions."
          metrics={[
            {
              label: "Domains reviewed",
              value: "10",
              note: "Foundations, ethics, networks, web, identity, privacy, data, threats, cryptography, careers, and labs.",
            },
            {
              label: "Knowledge gaps",
              value: "8",
              note: "Weak explanations, repeated mistakes, uncertain decisions, incomplete artifacts, and missed questions.",
            },
            {
              label: "Priority review actions",
              value: "5",
              note: "Authorization, HTTPS trust, account recovery, alert correlation, and evidence-based portfolio claims.",
            },
          ]}
        />

        <FakeAlertCard
          title="High Confidence Does Not Match Practice Evidence"
          severity="Medium"
          time="5:04 PM"
          source="Fake Readiness Review Monitor"
          details="A fictional learner reports high confidence in networking and web concepts but repeatedly misses questions about DNS, URLs, HTTPS, certificates, and browser warnings."
          recommendation="Lower the confidence rating, review the missed concepts, complete another safe practice set, explain each answer, and update the readiness plan."
        />

        <FakeLogPanel
          title="Fake Final Readiness Log"
          logs={[
            "16:12:08 DOMAIN name='foundations' confidence='high' evidence='strong'",
            "16:18:31 DOMAIN name='ethics' confidence='medium' gaps='scope_and_stop_conditions'",
            "16:26:44 DOMAIN name='web' confidence='high' quiz_accuracy='58_percent'",
            "16:33:19 REVIEW mismatch='confidence_vs_evidence'",
            "16:41:52 ACTION revisit='dns_https_certificates_urls'",
            "16:49:06 PRACTICE explanation_required='true'",
            "17:04:27 STATUS final_readiness='in_progress'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Topic Should Be Reviewed First?"
          evidence={[
            "A fictional learner scores 92% on account-security practice and explains the answers clearly.",
            "The same learner scores 56% on ethics and scope questions.",
            "Several missed ethics questions involve real-data stop conditions and public-system authorization.",
            "The module test is scheduled after one more review session.",
          ]}
          question="What is the strongest review priority?"
          options={[
            "Review authorization, scope, public-system permission, privacy, and stop conditions first.",
            "Spend the entire session repeating the strongest account-security topic.",
            "Ignore the missed ethics questions because the learner feels confident.",
            "Memorize only the answer letters.",
          ]}
          bestAnswer={0}
          explanation="The ethics gap is high impact, repeated, and directly supported by the practice evidence."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Final Readiness">
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Capstone Lab" title="Complete a Fictional Final Readiness Shift">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fake Readiness Queue</p>
              <h3 className="mt-3 text-xl font-black text-white">Community Learning Portal Final Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional queue contains account alerts, phishing reports, browser warnings, network events, backup gaps, privacy findings, authorization questions, portfolio artifacts, and career-planning decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Readiness Steps</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Classify each item by Beginner Track domain.</li>
                <li>Write the key concept or principle connected to the item.</li>
                <li>Choose the safest authorized action and explain why.</li>
                <li>Rate confidence as high, medium, or low using evidence.</li>
                <li>Record misunderstandings, uncertainty, and repeated mistakes.</li>
                <li>Build a prioritized review plan before the module test.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Learner Feels Ready but Cannot Explain the Answers"
          scenario="A fictional learner chooses several correct answers but cannot explain why the alternatives are unsafe or incorrect."
          choices={[
            {
              label: "Choice A",
              response: "Mark the topic as partially ready, review the reasoning, explain every option, and complete another mixed practice set.",
              outcome: "Best readiness choice. Recognition without explanation is incomplete evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Mark the topic fully mastered because the answers were correct.",
              outcome: "Risky. Correct guesses do not prove understanding.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Skip the topic permanently.",
              outcome: "Unsafe for learning. The gap should guide focused review.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Mixed Alert Case Includes Several Connected Domains"
          scenario="A fictional urgent email, unfamiliar login, blocked script, denied network traffic, and overdue restore test all involve the same user and system."
          choices={[
            {
              label: "Choice A",
              response: "Correlate the evidence, preserve originals, prioritize by impact, assign ownership, contain as authorized, review recovery, and escalate.",
              outcome: "Best capstone choice. The response connects identity, email, endpoint, network, recovery, evidence, and ethics.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Close the case because one script was blocked.",
              outcome: "Risky. The remaining account, network, and recovery evidence is unresolved.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Run the suspicious file to confirm what it does.",
              outcome: "Unsafe. Suspicious content must never be executed during beginner defensive review.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Beginner Final Readiness Checklist"
          items={[
            "I can recall and explain key concepts from every Beginner module.",
            "I can connect identity, web, network, privacy, data, threat, recovery, ethics, and career concepts.",
            "I use fictional evidence to choose safe, authorized, and proportionate actions.",
            "I separate confirmed facts, likely connections, uncertainty, and unsupported assumptions.",
            "I compare confidence with quiz results, explanations, artifacts, and practice evidence.",
            "I record knowledge gaps and prioritize high-impact weak areas.",
            "I have a clear review plan before the module test and track-level assessments.",
          ]}
        />

        <MiniQuiz title="B15.7 Mini Quiz: Beginner Final Readiness Lab" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page Beginner Final Readiness Plan. Include every review domain, confidence level, supporting evidence, recent score, strongest skill, weakest skill, repeated mistake, ethical risk, portfolio evidence, priority level, exact review action, completion target, and final reflection."
          tips={[
            "Use fictional assessment data, examples, users, systems, accounts, and organizations only.",
            "Base confidence on explanations, practice results, artifacts, and decisions rather than feelings alone.",
            "Prioritize weaker high-impact areas before repeating already strong topics.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Readiness includes recall, connection, application, documentation, reflection, and safe judgment.",
            "Confidence should match evidence from explanations, practice, artifacts, and decisions.",
            "Knowledge gaps become useful when they lead to specific review actions.",
            "Mixed cybersecurity cases often connect several Beginner Track domains at once.",
            "A targeted review plan is stronger than studying every topic equally.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}