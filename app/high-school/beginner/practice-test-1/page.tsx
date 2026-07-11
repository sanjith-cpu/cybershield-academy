import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const beginnerPath = "/high-school/beginner";
const previousPage = `${beginnerPath}/beginner-capstone-review/module-test`;
const nextPage = `${beginnerPath}/practice-test-2`;

const testQuestions = [
  {
    question: "Which cybersecurity goal focuses on preventing unauthorized viewing of information?",
    choices: ["Confidentiality.", "Integrity.", "Availability.", "Redundancy."],
    answer: 0,
    explanation: "Confidentiality protects information from unauthorized access or disclosure.",
  },
  {
    question: "Which cybersecurity goal focuses on preventing improper changes to information?",
    choices: ["Integrity.", "Availability.", "Confidentiality.", "Convenience."],
    answer: 0,
    explanation: "Integrity protects the accuracy and trusted state of data and systems.",
  },
  {
    question: "Which cybersecurity goal focuses on keeping approved services usable when needed?",
    choices: ["Availability.", "Confidentiality.", "Integrity.", "Classification."],
    answer: 0,
    explanation: "Availability ensures authorized users can access systems and data when required.",
  },
  {
    question: "What is an asset?",
    choices: [
      "Something valuable that should be protected.",
      "Only a physical laptop.",
      "A confirmed attack.",
      "A security alert color.",
    ],
    answer: 0,
    explanation: "Assets may include people, accounts, devices, data, services, money, and reputation.",
  },
  {
    question: "What is the difference between a threat and a vulnerability?",
    choices: [
      "A threat may cause harm, while a vulnerability is a weakness that could be used.",
      "They are exactly the same.",
      "A vulnerability is always a person.",
      "A threat is always a software bug.",
    ],
    answer: 0,
    explanation: "Threats create or trigger harm, while vulnerabilities are weaknesses that make harm possible.",
  },
  {
    question: "What does defense in depth mean?",
    choices: [
      "Using multiple protective layers.",
      "Using only one expensive tool.",
      "Giving every user administrator access.",
      "Turning off monitoring after installation.",
    ],
    answer: 0,
    explanation: "Layered defenses reduce dependence on any one control.",
  },
  {
    question: "What must be confirmed before any cybersecurity lab activity begins?",
    choices: [
      "Authorization and scope.",
      "A public website.",
      "An administrator password.",
      "A live production account.",
    ],
    answer: 0,
    explanation: "Safe cybersecurity activity requires explicit permission and clearly defined boundaries.",
  },
  {
    question: "What does scope define?",
    choices: [
      "The approved systems, data, tools, actions, time, and goals.",
      "Every system reachable from the device.",
      "Only the lesson title.",
      "Any action the learner wants to try.",
    ],
    answer: 0,
    explanation: "Scope identifies exactly what is and is not permitted.",
  },
  {
    question: "What should happen when permission is unclear?",
    choices: [
      "Stop and ask the responsible owner or instructor.",
      "Continue because the goal is educational.",
      "Test only a small part.",
      "Assume public visibility means permission.",
    ],
    answer: 0,
    explanation: "Uncertainty is not authorization.",
  },
  {
    question: "What should happen when unexpected real personal data appears in a fictional lab?",
    choices: [
      "Stop, preserve the source safely, and notify the instructor or owner.",
      "Continue and publish the data.",
      "Copy it into a personal note.",
      "Share it with classmates.",
    ],
    answer: 0,
    explanation: "Unexpected real data creates privacy and authorization risk.",
  },
  {
    question: "What is responsible disclosure?",
    choices: [
      "Reporting a possible issue through an approved channel without exposing unnecessary details.",
      "Posting the issue publicly before contacting the owner.",
      "Testing the issue on unrelated systems.",
      "Keeping the issue secret forever.",
    ],
    answer: 0,
    explanation: "Responsible disclosure supports safe correction while protecting users and owners.",
  },
  {
    question: "Which device directs traffic between networks?",
    choices: ["Router.", "Monitor.", "Keyboard.", "Printer driver."],
    answer: 0,
    explanation: "Routers help traffic move between different networks.",
  },
  {
    question: "What does DNS do?",
    choices: [
      "Translates domain names into network addresses.",
      "Stores passwords.",
      "Replaces web browsers.",
      "Guarantees website honesty.",
    ],
    answer: 0,
    explanation: "DNS helps devices locate the address associated with a domain name.",
  },
  {
    question: "What is a port in networking?",
    choices: [
      "A numbered logical doorway used by applications and services.",
      "A physical password.",
      "A type of backup.",
      "A web page title.",
    ],
    answer: 0,
    explanation: "Ports help identify the application or service involved in communication.",
  },
  {
    question: "What is a protocol?",
    choices: [
      "A shared set of communication rules.",
      "A type of malware.",
      "A user account.",
      "A data classification label.",
    ],
    answer: 0,
    explanation: "Protocols define how systems exchange information.",
  },
  {
    question: "What does HTTPS mainly protect?",
    choices: [
      "The connection between a browser and a website.",
      "The honesty of every website.",
      "The safety of every file.",
      "The accuracy of every claim.",
    ],
    answer: 0,
    explanation: "HTTPS encrypts the connection and supports certificate-based trust, but it does not guarantee content is trustworthy.",
  },
  {
    question: "What is the safest response to a browser certificate warning?",
    choices: [
      "Do not continue or enter information; use a trusted route and report the warning if needed.",
      "Ignore it because warnings are harmless.",
      "Disable browser security.",
      "Enter credentials quickly.",
    ],
    answer: 0,
    explanation: "Certificate warnings should not be bypassed casually.",
  },
  {
    question: "Why should users read the full URL?",
    choices: [
      "To identify the actual domain and possible look-alike spelling.",
      "To confirm the page color.",
      "To prove the site is safe because it has a logo.",
      "To avoid checking HTTPS.",
    ],
    answer: 0,
    explanation: "Look-alike domains can imitate trusted services while using different addresses.",
  },
  {
    question: "What is the safest response to an unexpected download?",
    choices: [
      "Avoid opening it, preserve relevant details, and report it.",
      "Run it immediately.",
      "Rename it and try again.",
      "Share it with friends.",
    ],
    answer: 0,
    explanation: "Unexpected files should not be opened or executed during beginner review.",
  },
  {
    question: "Why should important accounts use unique passwords?",
    choices: [
      "So one exposed password does not endanger every other account.",
      "So passwords can be shared more easily.",
      "So MFA is unnecessary.",
      "So recovery can be disabled.",
    ],
    answer: 0,
    explanation: "Unique passwords limit the damage caused by one compromised credential.",
  },
  {
    question: "What is the main purpose of a password manager?",
    choices: [
      "To generate and securely store unique passwords.",
      "To publish passwords.",
      "To replace every other control.",
      "To disable recovery options.",
    ],
    answer: 0,
    explanation: "Password managers make strong, unique credentials practical across many accounts.",
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
    explanation: "MFA reduces dependence on one password by requiring another verification factor.",
  },
  {
    question: "What is the strongest account recovery practice?",
    choices: [
      "Use current trusted recovery methods and protect recovery codes.",
      "Post recovery codes publicly.",
      "Use an old phone number forever.",
      "Share recovery access with strangers.",
    ],
    answer: 0,
    explanation: "Recovery methods should be current, protected, and reviewed regularly.",
  },
  {
    question: "What is least privilege?",
    choices: [
      "Giving only the minimum access needed for approved responsibilities.",
      "Giving every account administrator access.",
      "Keeping all old permissions.",
      "Removing every permission from every user.",
    ],
    answer: 0,
    explanation: "Least privilege limits access to what the role actually requires.",
  },
  {
    question: "Why are shared administrator accounts risky?",
    choices: [
      "They weaken accountability.",
      "They automatically improve security.",
      "They make MFA unnecessary.",
      "They remove the need for logs.",
    ],
    answer: 0,
    explanation: "Named accounts help identify who performed an action and support review.",
  },
  {
    question: "What is data classification?",
    choices: [
      "Labeling information by sensitivity, value, and required protection.",
      "Deleting all data.",
      "Sharing everything publicly.",
      "Giving every user the same access.",
    ],
    answer: 0,
    explanation: "Classification guides access, storage, sharing, retention, and protection decisions.",
  },
  {
    question: "What should happen to an old public sharing link after a project ends?",
    choices: [
      "Restrict or remove it and review current access.",
      "Leave it active forever.",
      "Post it more widely.",
      "Remove the owner.",
    ],
    answer: 0,
    explanation: "Sharing should match current need and should be reviewed when work ends.",
  },
  {
    question: "What does restore validation confirm?",
    choices: [
      "That backup data can actually be recovered and used.",
      "Only that a backup job started.",
      "That old files were deleted.",
      "That the password is strong.",
    ],
    answer: 0,
    explanation: "A backup is only trustworthy when recovery can be tested safely.",
  },
  {
    question: "What does the recovery point objective describe?",
    choices: [
      "The acceptable amount of data loss.",
      "The password length.",
      "The number of users.",
      "The firewall rule count.",
    ],
    answer: 0,
    explanation: "The recovery point objective addresses how much recent data loss is acceptable.",
  },
  {
    question: "What does the recovery time objective describe?",
    choices: [
      "The target time for restoring service.",
      "The age of the backup server.",
      "The number of recovery codes.",
      "The time a user logs in.",
    ],
    answer: 0,
    explanation: "The recovery time objective describes how quickly service should be restored.",
  },
  {
    question: "What is phishing?",
    choices: [
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A routine software update.",
      "A type of backup.",
      "A secure authentication method.",
    ],
    answer: 0,
    explanation: "Phishing uses deceptive messages or websites to manipulate the target.",
  },
  {
    question: "What is social engineering?",
    choices: [
      "Using deception, pressure, impersonation, trust, or emotion to influence a person.",
      "Testing backups.",
      "Installing approved software.",
      "Encrypting a connection.",
    ],
    answer: 0,
    explanation: "Social engineering targets human judgment and behavior.",
  },
  {
    question: "Which phishing indicator is strongest?",
    choices: [
      "A mismatched domain combined with urgency and a request for credentials.",
      "A familiar logo alone.",
      "A professional design.",
      "Correct spelling.",
    ],
    answer: 0,
    explanation: "Strong triage combines sender, domain, urgency, request, and link evidence.",
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
    explanation: "Unexpected attachments should not be opened or executed.",
  },
  {
    question: "What is an endpoint alert?",
    choices: [
      "A notification about suspicious or policy-related activity on a managed device.",
      "Automatic proof of compromise.",
      "A password type.",
      "A backup schedule.",
    ],
    answer: 0,
    explanation: "Endpoint alerts are starting points for investigation, not automatic proof.",
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
    explanation: "Containment limits risk without destroying the evidence needed for review.",
  },
  {
    question: "Why is device context important?",
    choices: [
      "It helps explain whether activity matches the user, role, purpose, and recent changes.",
      "It proves every alert is malicious.",
      "It removes the need for evidence.",
      "It replaces documentation.",
    ],
    answer: 0,
    explanation: "Context helps distinguish expected behavior from activity requiring escalation.",
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
    explanation: "Baselines help defenders compare current activity with expected patterns.",
  },
  {
    question: "Why is unusual traffic not automatic proof of an attack?",
    choices: [
      "Approved changes, maintenance, or legitimate activity may explain it.",
      "Unusual traffic is always harmless.",
      "Network logs are never useful.",
      "Anomalies should always be ignored.",
    ],
    answer: 0,
    explanation: "Anomalies require technical and business context.",
  },
  {
    question: "What is network segmentation?",
    choices: [
      "Separating systems or network areas to limit unnecessary communication.",
      "Giving every system access to every other system.",
      "Deleting network logs.",
      "Disabling authentication.",
    ],
    answer: 0,
    explanation: "Segmentation can reduce unnecessary access and limit incident spread.",
  },
  {
    question: "What is correlation?",
    choices: [
      "Connecting related users, accounts, devices, messages, alerts, logs, and timestamps.",
      "Deleting duplicate alerts.",
      "Changing all alerts to high severity.",
      "Assigning every alert to a different team.",
    ],
    answer: 0,
    explanation: "Correlation helps defenders see a complete supported pattern.",
  },
  {
    question: "Which factor should influence incident priority?",
    choices: [
      "Evidence, impact, urgency, spread risk, privilege, and uncertainty.",
      "Only the alert color.",
      "Only the first timestamp.",
      "Only the number of alerts.",
    ],
    answer: 0,
    explanation: "Priority should reflect the real defensive risk and available context.",
  },
  {
    question: "Why is case ownership important?",
    choices: [
      "It makes someone responsible for coordination, documentation, escalation, and follow-up.",
      "It removes the need for teamwork.",
      "It proves the case is malicious.",
      "It replaces evidence preservation.",
    ],
    answer: 0,
    explanation: "Clear ownership prevents gaps and duplicated work.",
  },
  {
    question: "What should a defender do when evidence is incomplete?",
    choices: [
      "Document uncertainty, gather approved context, choose a proportionate action, and escalate when needed.",
      "Invent missing details.",
      "State total confidence.",
      "Close the case immediately.",
    ],
    answer: 0,
    explanation: "Honest uncertainty supports safer and more trustworthy decisions.",
  },
  {
    question: "What makes a strong portfolio artifact?",
    choices: [
      "It demonstrates a specific skill through clear evidence and explanation.",
      "It contains private information.",
      "It is the longest file.",
      "It uses the most technical words possible.",
    ],
    answer: 0,
    explanation: "Strong artifacts connect a skill claim with understandable evidence.",
  },
  {
    question: "Why is redaction important?",
    choices: [
      "It protects sensitive, private, identifying, and unnecessary information.",
      "It removes the need for permission.",
      "It hides all learning evidence.",
      "It guarantees expert-level work.",
    ],
    answer: 0,
    explanation: "Redaction protects information while preserving the evidence needed to demonstrate skill.",
  },
  {
    question: "Which skill claim is strongest?",
    choices: [
      "I can analyze a fictional phishing report by reviewing evidence, uncertainty, and safe next actions.",
      "I know everything about cybersecurity.",
      "I am an expert because I completed one quiz.",
      "I never make mistakes.",
    ],
    answer: 0,
    explanation: "Specific, limited, evidence-based claims are more credible than broad titles.",
  },
  {
    question: "What should a reflection include?",
    choices: [
      "What was learned, what evidence shows it, what was difficult, what changed, and what comes next.",
      "Only the title.",
      "Only the score.",
      "Only positive statements.",
    ],
    answer: 0,
    explanation: "Reflection should be specific, honest, and focused on growth.",
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
    explanation: "Targeted review is stronger than treating all topics equally.",
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
    explanation: "Missed questions should become specific improvement actions.",
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

export default function BeginnerPracticeTestOnePage() {
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
              Practice Test 1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              50 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Beginner Practice Test 1
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete a 50-question full-track assessment covering Beginner
            cybersecurity foundations, ethics, networking, web safety,
            accounts, privacy, data, threats, defensive response, recovery,
            portfolio skills, and readiness.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B15 Module Test
            </Link>
            <Link
              href={beginnerPath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Beginner Track
            </Link>
            <Link
              href={nextPage}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Practice Test 2
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed the fifteen Beginner modules.",
            "I will answer every question before submitting the test.",
            "I will use missed questions to build a focused review plan.",
          ]}
        />

        <SectionCard
          eyebrow="Practice Test Instructions"
          title="Complete All 50 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work through the test without checking lesson pages.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Select the strongest ethical and defensive answer.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit to reveal the score and explanations.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations stay hidden until submission. Record every
            missed topic before moving to Practice Test 2.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Beginner Practice Test 1"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "Use the score as evidence, not as the only measure of readiness.",
            "Review why each missed answer was wrong instead of memorizing the correct letter.",
            "Prioritize high-impact knowledge gaps that appear more than once.",
            "Practice explaining the safest answer in your own words.",
            "Complete Practice Test 2 after reviewing the weakest domains from this test.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Next Assessment
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to Beginner Practice Test 2
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review your missed questions first. Then complete the second
            50-question practice test before attempting the Beginner Final Test.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: B15 Module Test
            </Link>
            <Link
              href={beginnerPath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Beginner Track
            </Link>
            <Link
              href={nextPage}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next: Practice Test 2
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}