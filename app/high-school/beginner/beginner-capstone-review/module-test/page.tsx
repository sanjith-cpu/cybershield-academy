import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/beginner/beginner-capstone-review";
const previousLesson = `${modulePath}/beginner-final-readiness-lab`;

const testQuestions = [
  {
    question: "What does the CIA triad represent?",
    choices: [
      "Confidentiality, integrity, and availability.",
      "Control, identity, and access.",
      "Certificates, internet, and accounts.",
      "Containment, investigation, and authorization.",
    ],
    answer: 0,
    explanation:
      "The CIA triad describes three core protection goals: confidentiality, integrity, and availability.",
  },
  {
    question: "What is a vulnerability?",
    choices: [
      "A weakness that could be used or triggered by a threat.",
      "A confirmed cyberattack.",
      "A security owner.",
      "A backup schedule.",
    ],
    answer: 0,
    explanation:
      "A vulnerability is a weakness in technology, process, configuration, or behavior.",
  },
  {
    question: "What is defense in depth?",
    choices: [
      "Using multiple protective layers so one failed control does not expose everything.",
      "Depending on one security product.",
      "Giving every user administrator access.",
      "Turning off monitoring after prevention is installed.",
    ],
    answer: 0,
    explanation:
      "Layered controls reduce dependence on any one safeguard.",
  },
  {
    question: "What must happen before a defensive lab begins?",
    choices: [
      "Authorization and scope must be confirmed.",
      "The learner should test any visible system.",
      "Logging should be disabled.",
      "A real account should be created.",
    ],
    answer: 0,
    explanation:
      "Safe cybersecurity learning begins with explicit permission and clearly defined boundaries.",
  },
  {
    question: "What should happen when unexpected real personal data appears in a fictional lab?",
    choices: [
      "Stop, preserve the source safely, and notify the instructor or owner.",
      "Continue because the activity is educational.",
      "Publish the data as evidence.",
      "Copy the data into a personal file.",
    ],
    answer: 0,
    explanation:
      "Unexpected real data creates privacy and authorization risk and should trigger a stop condition.",
  },
  {
    question: "What is responsible disclosure?",
    choices: [
      "Reporting a possible issue through an approved channel without exposing unnecessary details.",
      "Publishing the issue immediately.",
      "Testing the issue on unrelated systems.",
      "Ignoring the issue permanently.",
    ],
    answer: 0,
    explanation:
      "Responsible disclosure protects users and owners while supporting safe correction.",
  },
  {
    question: "What does DNS do?",
    choices: [
      "It translates domain names into network addresses.",
      "It stores passwords.",
      "It replaces a router.",
      "It guarantees that every website is safe.",
    ],
    answer: 0,
    explanation:
      "DNS helps devices find the network address connected to a human-friendly domain name.",
  },
  {
    question: "What is a router used for?",
    choices: [
      "Directing traffic between networks.",
      "Creating every website.",
      "Storing browser cookies.",
      "Replacing account recovery.",
    ],
    answer: 0,
    explanation:
      "Routers help data travel between networks toward the correct destination.",
  },
  {
    question: "What does HTTPS mainly protect?",
    choices: [
      "The connection between the browser and website.",
      "The honesty of every website owner.",
      "The safety of every download.",
      "The accuracy of every page claim.",
    ],
    answer: 0,
    explanation:
      "HTTPS protects transport through encryption and certificate-based trust, but it does not guarantee that the content is honest.",
  },
  {
    question: "What is the safest response to a certificate warning?",
    choices: [
      "Do not continue or enter information; use a trusted route and report the warning if needed.",
      "Ignore it because warnings are harmless.",
      "Disable browser security.",
      "Enter credentials quickly.",
    ],
    answer: 0,
    explanation:
      "Certificate warnings should not be bypassed casually because the secure connection may not be trustworthy.",
  },
  {
    question: "Why should important accounts use unique passwords?",
    choices: [
      "So one exposed password does not endanger every other account.",
      "So passwords are easier to share.",
      "So MFA is unnecessary.",
      "So recovery methods can be removed.",
    ],
    answer: 0,
    explanation:
      "Unique credentials limit damage when one account or password is exposed.",
  },
  {
    question: "What is the main purpose of a password manager?",
    choices: [
      "To generate and securely store unique passwords.",
      "To publish passwords.",
      "To replace every other control.",
      "To disable account recovery.",
    ],
    answer: 0,
    explanation:
      "Password managers make strong, unique credentials practical across many accounts.",
  },
  {
    question: "What does multi-factor authentication add?",
    choices: [
      "Another type of verification beyond the password.",
      "A second copy of the same password.",
      "Automatic administrator access.",
      "A public recovery code.",
    ],
    answer: 0,
    explanation:
      "MFA requires different verification factors and reduces dependence on a password alone.",
  },
  {
    question: "What is data classification?",
    choices: [
      "Labeling information by sensitivity, value, and required protection.",
      "Deleting every file.",
      "Sharing all data publicly.",
      "Giving every user the same access.",
    ],
    answer: 0,
    explanation:
      "Classification helps determine access, storage, sharing, retention, and protection requirements.",
  },
  {
    question: "Which recovery practice is strongest?",
    choices: [
      "Use current trusted recovery methods and protect recovery codes.",
      "Post recovery codes in a public note.",
      "Keep an old phone number forever.",
      "Share recovery access with strangers.",
    ],
    answer: 0,
    explanation:
      "Recovery methods should be current, trusted, protected, and reviewed regularly.",
  },
  {
    question: "What is phishing?",
    choices: [
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A routine software update.",
      "A type of backup.",
      "A secure login method.",
    ],
    answer: 0,
    explanation:
      "Phishing uses deceptive messages or websites to manipulate the target.",
  },
  {
    question: "What is social engineering?",
    choices: [
      "Using deception, pressure, impersonation, trust, or emotion to influence a person.",
      "Testing backups.",
      "Encrypting every connection.",
      "Installing approved software.",
    ],
    answer: 0,
    explanation:
      "Social engineering targets human judgment and behavior.",
  },
  {
    question: "What should happen to an unexpected attachment?",
    choices: [
      "Do not open it; preserve the message and follow the approved review process.",
      "Open it immediately.",
      "Upload it publicly.",
      "Forward it to classmates.",
    ],
    answer: 0,
    explanation:
      "Unexpected files should not be opened or run during beginner defensive triage.",
  },
  {
    question: "What is containment?",
    choices: [
      "An approved action used to limit possible harm while preserving evidence.",
      "Deleting all logs.",
      "Ignoring the alert.",
      "Sharing suspicious files.",
    ],
    answer: 0,
    explanation:
      "Containment limits risk while protecting the evidence needed for further review.",
  },
  {
    question: "What is the strongest response to related account, email, endpoint, and network alerts?",
    choices: [
      "Correlate the evidence, prioritize the case, assign ownership, take authorized actions, and document the timeline.",
      "Handle every alert separately.",
      "Delete low-severity alerts before review.",
      "Assume the first alert explains everything.",
    ],
    answer: 0,
    explanation:
      "Connected evidence should be reviewed as one coordinated case when the facts support that relationship.",
  },
  {
    question: "What makes a strong portfolio artifact?",
    choices: [
      "It clearly demonstrates a skill through specific evidence and explanation.",
      "It is the longest file.",
      "It includes private data.",
      "It uses the most technical vocabulary possible.",
    ],
    answer: 0,
    explanation:
      "A strong artifact connects a specific skill claim with understandable evidence.",
  },
  {
    question: "Why is redaction important?",
    choices: [
      "It protects sensitive, private, identifying, and unnecessary information.",
      "It removes the need for permission.",
      "It hides every learning result.",
      "It guarantees expert-level work.",
    ],
    answer: 0,
    explanation:
      "Redaction allows work to be shared without exposing information that should remain protected.",
  },
  {
    question: "Which skill claim is strongest?",
    choices: [
      "I can analyze a fictional phishing report by reviewing evidence, uncertainty, and safe next actions.",
      "I know everything about cybersecurity.",
      "I am an expert because I completed one quiz.",
      "Cybersecurity is always easy for me.",
    ],
    answer: 0,
    explanation:
      "The strongest claim is specific, limited, measurable, and supported by relevant evidence.",
  },
  {
    question: "How should a learner prioritize final review?",
    choices: [
      "Focus first on high-impact topics with weak evidence, repeated mistakes, or low confidence.",
      "Review only favorite topics.",
      "Ignore missed questions.",
      "Study every topic for the same amount of time.",
    ],
    answer: 0,
    explanation:
      "Strong review targets the areas where misunderstanding creates the greatest risk or difficulty.",
  },
  {
    question: "What should happen after a missed practice question?",
    choices: [
      "Review the explanation, identify the misunderstanding, practice again, and record the gap.",
      "Ignore it permanently.",
      "Change the answer key.",
      "Memorize only the answer letter.",
    ],
    answer: 0,
    explanation:
      "A missed question becomes useful when it leads to a specific improvement action.",
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

export default function BeginnerCapstoneReviewModuleTestPage() {
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
              Module B15
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              25 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15 Module Test: Beginner Capstone Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Test your full Beginner Track readiness across foundations, ethics,
            networks, web safety, accounts, privacy, data, threats, defensive
            response, portfolio reflection, and final review planning.
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
            "I completed or reviewed all seven B15 lessons.",
            "I will choose answers before revealing results and explanations.",
            "I understand that all examples are fictional, defensive, and designed for safe review.",
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
                Choose the strongest ethical and defensive answer.
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
          title="B15 Scored Module Test"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "Beginner readiness combines concepts, ethical judgment, evidence review, safe action, documentation, and reflection.",
            "Authorization, scope, privacy, and stop conditions guide every safe cybersecurity activity.",
            "Network, browser, identity, account, data, threat, and recovery evidence often connect.",
            "Strong defenders preserve evidence, document uncertainty, assign ownership, and choose proportionate authorized actions.",
            "Portfolio claims should be specific, accurate, supported, safely redacted, and connected to future learning.",
            "Missed questions should become targeted review actions before the practice tests and Beginner Final Test.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Beginner Curriculum Review Complete
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review missed questions, revisit weak lessons, and return to the
            Beginner Track when you are ready for the track-level practice tests
            and final assessment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: B15.7 Beginner Final Readiness Lab
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Back to B15
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