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
  "/high-school/beginner/beginner-defensive-practice-labs";
const previousLesson =
  `${modulePath}/multi-alert-defensive-challenge`;

const testQuestions = [
  {
    question: "What must happen before any defensive lab activity begins?",
    choices: [
      "Explicit authorization and a clearly defined scope must be confirmed.",
      "The learner should test whatever system is visible.",
      "The learner should create an administrator account.",
      "The learner should disable logging.",
    ],
    answer: 0,
    explanation:
      "Defensive practice requires explicit permission and clearly defined boundaries before any activity begins.",
  },
  {
    question: "What does scope define in a defensive lab?",
    choices: [
      "The approved systems, accounts, data, tools, actions, time window, and goals.",
      "Every system reachable from the lab computer.",
      "Only the name of the lesson.",
      "A list of actions the learner may invent.",
    ],
    answer: 0,
    explanation:
      "Scope describes exactly where, when, and how authorized activity may occur.",
  },
  {
    question: "What should happen when unexpected real personal data appears in a fictional lab?",
    choices: [
      "Stop, preserve the evidence safely, and notify the instructor or owner.",
      "Continue because the lab has already started.",
      "Publish the data as proof.",
      "Copy the data into a personal account.",
    ],
    answer: 0,
    explanation:
      "Unexpected real data is a stop condition because it may create privacy and authorization risk.",
  },
  {
    question: "Why should original evidence be preserved?",
    choices: [
      "So the source remains unchanged and later review stays trustworthy.",
      "So it can be edited without documentation.",
      "So logs can be deleted sooner.",
      "So authorization is no longer needed.",
    ],
    answer: 0,
    explanation:
      "Preserving originals protects evidence integrity and supports reliable review.",
  },
  {
    question: "Which statement about public systems is correct?",
    choices: [
      "Public visibility does not create permission to test the system.",
      "Every public website is automatically in scope.",
      "A visible login page may be tested without approval.",
      "Educational intent replaces authorization.",
    ],
    answer: 0,
    explanation:
      "A system being public or reachable does not mean testing is authorized.",
  },
  {
    question: "What is least privilege?",
    choices: [
      "Giving an identity only the minimum access needed for approved responsibilities.",
      "Giving every user administrator access.",
      "Keeping old permissions indefinitely.",
      "Removing all access from every account.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits access to what is actually required for the approved role or task.",
  },
  {
    question: "What is the difference between authentication and authorization?",
    choices: [
      "Authentication verifies identity; authorization determines permitted access.",
      "Authentication grants administrator rights automatically.",
      "Authorization verifies passwords only.",
      "They are exactly the same process.",
    ],
    answer: 0,
    explanation:
      "Authentication answers who the identity is, while authorization answers what it may do.",
  },
  {
    question: "What is the safest response to a former contractor account that remains enabled?",
    choices: [
      "Suspend or disable it through the approved process, preserve evidence, and document the offboarding gap.",
      "Leave it active indefinitely.",
      "Share it with a replacement contractor.",
      "Delete all login logs first.",
    ],
    answer: 0,
    explanation:
      "Accounts should not remain active after the approved business need ends.",
  },
  {
    question: "Why are shared administrator accounts risky?",
    choices: [
      "They weaken accountability and make it harder to identify who performed an action.",
      "They always improve security.",
      "They make MFA unnecessary.",
      "They eliminate the need for logging.",
    ],
    answer: 0,
    explanation:
      "Named accounts support accountability, access review, and incident investigation.",
  },
  {
    question: "What is the strongest access-review decision?",
    choices: [
      "Match permissions to current approved responsibilities and document every change.",
      "Keep every permission to avoid questions.",
      "Grant extra access just in case.",
      "Delete accounts without evidence or approval.",
    ],
    answer: 0,
    explanation:
      "Access reviews should use current business need, least privilege, evidence, and documented approval.",
  },
  {
    question: "What is email triage?",
    choices: [
      "A structured review used to determine message risk, priority, evidence, and next action.",
      "Opening every attachment immediately.",
      "Replying to every unknown sender.",
      "Deleting every message with urgent wording.",
    ],
    answer: 0,
    explanation:
      "Email triage uses evidence and context to determine how a reported message should be handled safely.",
  },
  {
    question: "Why is a familiar display name not enough to trust an email?",
    choices: [
      "Because the visible name may not match the real sending address or domain.",
      "Because every familiar name is malicious.",
      "Because the message body never matters.",
      "Because email addresses are always hidden.",
    ],
    answer: 0,
    explanation:
      "Attackers can imitate familiar names, so the full address and domain must be reviewed.",
  },
  {
    question: "What should a defender do with an unexpected attachment?",
    choices: [
      "Do not open it; preserve the message and verify through a trusted channel.",
      "Open it in case it is important.",
      "Upload it publicly for review.",
      "Rename it and run it.",
    ],
    answer: 0,
    explanation:
      "Unexpected attachments should be handled through approved review procedures without opening them.",
  },
  {
    question: "What is the safest response to a suspicious password-reset link?",
    choices: [
      "Avoid the link and access the official service directly through a trusted route.",
      "Click it quickly before the account closes.",
      "Reply with the password.",
      "Forward it to friends.",
    ],
    answer: 0,
    explanation:
      "Using the official service directly avoids relying on an untrusted message link.",
  },
  {
    question: "Why should the original suspicious email be preserved?",
    choices: [
      "It may contain headers, timestamps, sender details, and other evidence needed for review.",
      "It makes clicking the link safe.",
      "It proves the message is malicious.",
      "It removes the need for reporting.",
    ],
    answer: 0,
    explanation:
      "The original message may contain important evidence for investigation and documentation.",
  },
  {
    question: "What is an endpoint alert?",
    choices: [
      "A security notification about suspicious or policy-related activity on a managed device.",
      "Automatic proof of compromise.",
      "A type of password.",
      "A backup schedule.",
    ],
    answer: 0,
    explanation:
      "Endpoint alerts are starting points for investigation and require evidence and context.",
  },
  {
    question: "What is containment?",
    choices: [
      "An approved action used to limit possible harm, such as isolating a device.",
      "Deleting all logs.",
      "Sharing suspicious files.",
      "Ignoring the alert.",
    ],
    answer: 0,
    explanation:
      "Containment limits possible harm while preserving the opportunity for further review.",
  },
  {
    question: "Why is device context important during endpoint analysis?",
    choices: [
      "It helps explain whether activity matches the user, role, device purpose, and recent changes.",
      "It removes the need for evidence.",
      "It proves every alert is malicious.",
      "It makes documentation unnecessary.",
    ],
    answer: 0,
    explanation:
      "Context helps distinguish expected activity from behavior that needs escalation.",
  },
  {
    question: "What should happen to a suspicious file during beginner endpoint triage?",
    choices: [
      "Do not open or run it; preserve the provided evidence and follow the approved playbook.",
      "Run it again to confirm the alert.",
      "Send it to classmates.",
      "Upload it to a public website.",
    ],
    answer: 0,
    explanation:
      "Suspicious files should not be executed, opened, or shared during beginner defensive analysis.",
  },
  {
    question: "What is a network baseline?",
    choices: [
      "A documented pattern of expected communication used for comparison.",
      "A guarantee that every connection is safe.",
      "A list of passwords.",
      "A type of malware.",
    ],
    answer: 0,
    explanation:
      "A baseline helps defenders compare current traffic with expected systems, services, schedules, and patterns.",
  },
  {
    question: "Why is an unusual network connection not automatic proof of an attack?",
    choices: [
      "Because approved changes, maintenance, new applications, and legitimate activity may explain it.",
      "Because unusual traffic is always harmless.",
      "Because network logs are never useful.",
      "Because defenders should ignore anomalies.",
    ],
    answer: 0,
    explanation:
      "Anomalies require context before a reliable conclusion can be made.",
  },
  {
    question: "What is network segmentation?",
    choices: [
      "Separating systems or network areas to limit unnecessary communication and reduce risk.",
      "Giving every system access to every other system.",
      "Deleting connection records.",
      "Turning off authentication.",
    ],
    answer: 0,
    explanation:
      "Segmentation limits unnecessary access and can reduce incident spread.",
  },
  {
    question: "What is restore validation?",
    choices: [
      "A controlled test confirming backup data can be recovered and used as expected.",
      "A report showing only that a backup job started.",
      "Deleting old copies without review.",
      "Turning off retention rules.",
    ],
    answer: 0,
    explanation:
      "A backup is only trustworthy when recovery can be tested safely and successfully.",
  },
  {
    question: "What do recovery point and recovery time objectives describe?",
    choices: [
      "Acceptable data loss and the target time to restore service.",
      "Password length and account age.",
      "The total number of backup servers.",
      "The age of the oldest device.",
    ],
    answer: 0,
    explanation:
      "The recovery point objective addresses acceptable data loss, while the recovery time objective addresses restoration time.",
  },
  {
    question: "What is the strongest multi-alert defensive response?",
    choices: [
      "Correlate evidence, prioritize by risk, assign ownership, take authorized actions, and document the timeline.",
      "Handle every alert separately without checking relationships.",
      "Delete low-severity alerts before review.",
      "Ask users for passwords and MFA codes.",
    ],
    answer: 0,
    explanation:
      "Coordinated defensive work depends on correlation, prioritization, ownership, authorization, and documentation.",
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

export default function BeginnerDefensivePracticeLabsModuleTestPage() {
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
              Module B14
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              25 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B14 Module Test: Beginner Defensive Practice Labs
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Test your understanding of lab safety, authorization, identity and
            access, phishing triage, endpoint alerts, network traffic, backup
            validation, correlation, prioritization, ownership, and escalation.
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
            "I completed or reviewed all seven B14 lessons.",
            "I will choose answers before revealing results and explanations.",
            "I understand that every lab example is fictional, inert, authorized, and defensive.",
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
                Select the strongest defensive answer based on the lessons.
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
          title="B14 Scored Module Test"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "Defensive practice begins with explicit authorization, clear scope, safe evidence handling, and stop conditions.",
            "Identity and access decisions should follow current business need, least privilege, accountability, and documentation.",
            "Phishing triage should preserve the message and avoid suspicious links, attachments, forms, and reply instructions.",
            "Endpoint and network alerts require context, related evidence, proportionate containment, and approved escalation.",
            "Backup success does not prove recovery readiness; restore testing and ownership are essential.",
            "Multi-alert defense depends on correlation, prioritization, case ownership, honest uncertainty, and one clear timeline.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Your Results and Continue
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review any missed questions, revisit the matching practice labs,
            and return to the Beginner Track when you are ready.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: B14.7 Multi-Alert Defensive Challenge
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Back to B14
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Return to Beginner Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}