import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const modulePath =
  "/high-school/beginner/cybersecurity-careers-and-certifications";
const previousLesson = `${modulePath}/career-planning-lab`;
const nextModule =
  "/high-school/beginner/beginner-defensive-practice-labs";

const testQuestions = [
  {
    question: "What is a cybersecurity career family?",
    choices: [
      "A group of roles with related responsibilities, goals, skills, or work environments.",
      "A single required job title for every beginner.",
      "A list of cybersecurity product brands.",
      "A type of password policy.",
    ],
    answer: 0,
    explanation:
      "Career families group related roles so learners can compare responsibilities, skills, work styles, and learning paths.",
  },
  {
    question: "Why should students compare responsibilities instead of relying only on job titles?",
    choices: [
      "Because the same title can mean different work in different organizations.",
      "Because job responsibilities never change.",
      "Because titles reveal every technical skill automatically.",
      "Because all cybersecurity roles are identical.",
    ],
    answer: 0,
    explanation:
      "Job titles vary widely, so daily tasks, expected outcomes, tools, schedule, and communication needs provide better evidence.",
  },
  {
    question: "Which career family commonly reviews alerts, investigates evidence, and escalates incidents?",
    choices: [
      "Security operations.",
      "Graphic design.",
      "Transportation management.",
      "Retail merchandising.",
    ],
    answer: 0,
    explanation:
      "Security operations teams commonly monitor alerts, investigate evidence, document findings, and support response.",
  },
  {
    question: "Which career family commonly designs and implements technical safeguards?",
    choices: [
      "Security engineering and architecture.",
      "Event planning.",
      "Public relations only.",
      "Building maintenance.",
    ],
    answer: 0,
    explanation:
      "Security engineers and architects design, build, test, maintain, and improve technical controls and systems.",
  },
  {
    question: "Which career family connects security with policy, risk, audits, standards, and business needs?",
    choices: [
      "Governance, risk, and compliance.",
      "Video production.",
      "Food service.",
      "Landscape architecture.",
    ],
    answer: 0,
    explanation:
      "GRC work connects security decisions with policy, risk, compliance, privacy, audit evidence, and organizational goals.",
  },
  {
    question: "What is alert triage?",
    choices: [
      "The first review used to judge relevance, priority, impact, and next action.",
      "Deleting every alert immediately.",
      "Changing every alert to high severity.",
      "Calling every user before reviewing evidence.",
    ],
    answer: 0,
    explanation:
      "Triage helps analysts decide which alerts need more investigation, escalation, monitoring, or safe closure.",
  },
  {
    question: "What is a false positive?",
    choices: [
      "An alert that appears suspicious but is explained by normal, approved, or harmless activity.",
      "A confirmed serious incident.",
      "A deleted log file.",
      "A public password.",
    ],
    answer: 0,
    explanation:
      "False positives are alerts that look suspicious at first but are not malicious after review.",
  },
  {
    question: "Why are clear SOC case notes important?",
    choices: [
      "They preserve evidence, actions, decisions, ownership, and unanswered questions.",
      "They replace investigation.",
      "They guarantee an alert is harmless.",
      "They remove the need for escalation.",
    ],
    answer: 0,
    explanation:
      "Clear notes allow teammates to understand the case and continue the response accurately.",
  },
  {
    question: "When should a SOC analyst escalate a case?",
    choices: [
      "When evidence, impact, uncertainty, policy, or authority requires a more specialized response.",
      "Whenever the alert title sounds dramatic.",
      "Only after deleting the logs.",
      "Never.",
    ],
    answer: 0,
    explanation:
      "Escalation should follow evidence, impact, policy, scope, playbooks, and analyst authority.",
  },
  {
    question: "What should a SOC analyst never request from a user?",
    choices: [
      "A password, MFA code, or recovery code.",
      "The approved ticket number.",
      "The device name.",
      "The time the event occurred.",
    ],
    answer: 0,
    explanation:
      "Analysts should use approved verification methods and never request account secrets.",
  },
  {
    question: "What is security architecture?",
    choices: [
      "The high-level structure connecting systems, users, data, trust boundaries, risks, and controls.",
      "A list of software colors.",
      "A single firewall rule.",
      "A temporary support ticket.",
    ],
    answer: 0,
    explanation:
      "Architecture focuses on how the environment fits together and where protections should be placed.",
  },
  {
    question: "What is security engineering?",
    choices: [
      "Designing, implementing, testing, maintaining, and improving technical controls.",
      "Writing only marketing materials.",
      "Deleting every security alert.",
      "Choosing passwords for other users.",
    ],
    answer: 0,
    explanation:
      "Security engineering turns requirements into working, tested, maintainable safeguards.",
  },
  {
    question: "What does defense in depth mean?",
    choices: [
      "Using multiple layers of protection so one control failure does not expose everything.",
      "Using one expensive product as the entire security plan.",
      "Turning off all monitoring.",
      "Allowing every user full access.",
    ],
    answer: 0,
    explanation:
      "Layered safeguards reduce dependence on a single control.",
  },
  {
    question: "Why should security controls be tested before deployment?",
    choices: [
      "To confirm they work, meet requirements, and avoid harmful side effects.",
      "To avoid documentation.",
      "To guarantee no future change is needed.",
      "To bypass approval.",
    ],
    answer: 0,
    explanation:
      "Testing verifies effectiveness, reliability, compatibility, safety, and rollback readiness.",
  },
  {
    question: "What is governance in cybersecurity?",
    choices: [
      "The structures, responsibilities, policies, and oversight used to guide security decisions.",
      "A type of antivirus scan.",
      "A password format.",
      "A single technical control.",
    ],
    answer: 0,
    explanation:
      "Governance defines how security is directed, owned, reviewed, and aligned with organizational goals.",
  },
  {
    question: "What is compliance?",
    choices: [
      "Meeting applicable laws, regulations, standards, contracts, policies, and requirements.",
      "Guaranteeing that no incident can ever occur.",
      "Deleting all risk records.",
      "Allowing every user full access.",
    ],
    answer: 0,
    explanation:
      "Compliance means meeting defined obligations, but it does not remove every security risk.",
  },
  {
    question: "Which is a valid risk treatment option?",
    choices: [
      "Reduce, avoid, transfer, or accept the risk through an authorized process.",
      "Hide the risk from leadership.",
      "Delete the evidence.",
      "Assume the risk will disappear.",
    ],
    answer: 0,
    explanation:
      "Organizations commonly reduce, avoid, transfer, or accept risk based on evidence, authority, cost, and priorities.",
  },
  {
    question: "Why is audit evidence important?",
    choices: [
      "It shows whether a control exists, operates, and is reviewed as required.",
      "It replaces every control.",
      "It makes risk assessment unnecessary.",
      "It guarantees perfect security.",
    ],
    answer: 0,
    explanation:
      "Reliable evidence supports objective review and helps determine whether controls are working.",
  },
  {
    question: "What should a learner review before choosing a certification?",
    choices: [
      "Objectives, level, prerequisites, cost, preparation time, and relevance to the goal.",
      "Only the credential's title.",
      "Only the exam price.",
      "Only social-media popularity.",
    ],
    answer: 0,
    explanation:
      "A certification is most useful when it matches the learner's level, goal, time, budget, and actual preparation.",
  },
  {
    question: "Which statement about certifications is strongest?",
    choices: [
      "They can support a learning path but do not replace skills, practice, ethics, communication, or experience.",
      "They guarantee every job.",
      "They are the only evidence that matters.",
      "The hardest credential is always the best first choice.",
    ],
    answer: 0,
    explanation:
      "Certifications are one part of career readiness and should be supported by real learning and evidence.",
  },
  {
    question: "Why is authorized hands-on practice important?",
    choices: [
      "It helps learners apply concepts, troubleshoot, document evidence, and learn from mistakes.",
      "It makes ethics unnecessary.",
      "It permits testing any real system.",
      "It replaces all theory and communication.",
    ],
    answer: 0,
    explanation:
      "Safe, authorized practice turns knowledge into usable skill while protecting people and systems.",
  },
  {
    question: "What makes a portfolio artifact strong?",
    choices: [
      "Clear scope, process, evidence, outcome, ethics, reflection, and next steps.",
      "A long list of tools with no explanation.",
      "Private screenshots from real systems.",
      "Claims that cannot be verified.",
    ],
    answer: 0,
    explanation:
      "Strong artifacts explain what was done, why it was done, what evidence supports the result, and what was learned.",
  },
  {
    question: "Why is redaction important in a cyber portfolio?",
    choices: [
      "It removes or masks private, sensitive, confidential, or unnecessary information.",
      "It makes unauthorized work acceptable.",
      "It replaces permission.",
      "It proves every project is advanced.",
    ],
    answer: 0,
    explanation:
      "Redaction helps protect people and organizations when sharing otherwise appropriate artifacts.",
  },
  {
    question: "What is a milestone in a career plan?",
    choices: [
      "A measurable checkpoint used to review progress, evidence, obstacles, and next steps.",
      "A permanent career decision.",
      "A type of cyberattack.",
      "An automatic certification.",
    ],
    answer: 0,
    explanation:
      "Milestones make progress measurable and create opportunities to adjust the plan.",
  },
  {
    question: "Why should a career plan include a contingency path?",
    choices: [
      "Because time, cost, readiness, interests, and opportunities can change.",
      "Because the main plan should be ignored.",
      "Because no progress can be measured.",
      "Because every certification is required.",
    ],
    answer: 0,
    explanation:
      "Alternative routes make a career plan resilient when circumstances or priorities change.",
  },
];

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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

export default function CybersecurityCareersCertificationsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B13
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              25 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B13 Module Test: Cybersecurity Careers and Certifications
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Test your understanding of cybersecurity career families, SOC work,
            engineering and architecture, GRC, certifications, learning paths,
            portfolios, and career planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous Lesson
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
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed all seven B13 lessons.",
            "I will choose answers before revealing results and explanations.",
            "I understand that this test uses fictional and defensive cybersecurity examples.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete All 25 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Read each question and all answer choices carefully.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Select the strongest answer based on the lessons.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit the test to reveal your score and explanations.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations remain hidden until you submit the test.
          </div>
        </SectionCard>

        <MiniQuiz
          title="B13 Scored Module Test"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "Cybersecurity includes many technical, investigative, business, policy, education, and leadership career families.",
            "Strong SOC work depends on evidence, context, documentation, playbooks, and timely escalation.",
            "Engineering and architecture connect security requirements with layered, tested, maintainable controls.",
            "GRC professionals connect governance, risk, compliance, audit evidence, privacy, and accountable decision-making.",
            "Certifications support learning but do not replace skills, ethics, communication, authorized practice, or experience.",
            "Strong portfolios use safe evidence, clear scope, reflection, redaction, and honest skill claims.",
            "Career plans should include focused goals, milestones, evidence, review dates, networking, and alternative paths.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Your Beginner Track
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review any missed questions, revisit the matching lessons, and
            continue to the next beginner module when you are ready.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: B13.7 Career Planning Lab
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Back to B13
            </Link>
            <Link
              href={nextModule}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next Module
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}