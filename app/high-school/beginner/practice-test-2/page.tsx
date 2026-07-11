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
const previousPage = `${beginnerPath}/practice-test-1`;
const nextPage = `${beginnerPath}/final-test`;

const testQuestions = [
  {
    question: "Which control best supports confidentiality for a shared document?",
    choices: [
      "Restrict access to approved users only.",
      "Make the link public.",
      "Disable all logging.",
      "Remove the file owner.",
    ],
    answer: 0,
    explanation:
      "Confidentiality is strengthened when only authorized users can access the information.",
  },
  {
    question: "Which control best supports integrity for an important file?",
    choices: [
      "Use permissions, version history, approvals, and change records.",
      "Allow anyone to edit anonymously.",
      "Delete all backups.",
      "Disable authentication.",
    ],
    answer: 0,
    explanation:
      "Integrity depends on controlling and recording authorized changes.",
  },
  {
    question: "Which control best supports availability?",
    choices: [
      "Tested backups, monitoring, redundancy, and recovery planning.",
      "One unverified copy.",
      "No owner.",
      "No update process.",
    ],
    answer: 0,
    explanation:
      "Availability requires systems and data to remain accessible or recoverable when needed.",
  },
  {
    question: "Which statement best describes risk?",
    choices: [
      "The possibility that a threat may use a vulnerability and cause harm to an asset.",
      "A guaranteed attack.",
      "A password policy.",
      "A device name.",
    ],
    answer: 0,
    explanation:
      "Risk connects assets, threats, vulnerabilities, likelihood, and impact.",
  },
  {
    question: "What is a control?",
    choices: [
      "A safeguard used to prevent, detect, respond to, or recover from risk.",
      "A confirmed attacker.",
      "A public website.",
      "A user profile.",
    ],
    answer: 0,
    explanation:
      "Controls reduce risk through prevention, detection, response, or recovery.",
  },
  {
    question: "Which example shows defense in depth?",
    choices: [
      "Unique passwords, MFA, login alerts, least privilege, and recovery review used together.",
      "One shared password.",
      "One security tool with no monitoring.",
      "No backup plan.",
    ],
    answer: 0,
    explanation:
      "Defense in depth uses multiple layers so one failure does not expose everything.",
  },
  {
    question: "Who should provide authorization for a cybersecurity activity?",
    choices: [
      "The responsible owner or an approved authority.",
      "Any student.",
      "Any internet user.",
      "The first person who finds the system.",
    ],
    answer: 0,
    explanation:
      "Authorization must come from someone responsible for the system or environment.",
  },
  {
    question: "Which action is outside scope?",
    choices: [
      "Interacting with a real public system when only a fictional sandbox was approved.",
      "Reviewing the provided fictional logs.",
      "Using the approved read-only dashboard.",
      "Writing a defensive report from the lab evidence.",
    ],
    answer: 0,
    explanation:
      "Scope does not expand simply because another system is visible or reachable.",
  },
  {
    question: "Why are stop conditions important?",
    choices: [
      "They pause activity when unexpected risk, real data, instability, or unclear permission appears.",
      "They allow the learner to continue without approval.",
      "They remove privacy requirements.",
      "They replace documentation.",
    ],
    answer: 0,
    explanation:
      "Stop conditions protect people, systems, data, evidence, and authorization boundaries.",
  },
  {
    question: "Which evidence-handling practice is strongest?",
    choices: [
      "Preserve originals, document timestamps, restrict access, and work from approved copies.",
      "Edit the original evidence.",
      "Delete timestamps.",
      "Share the evidence publicly.",
    ],
    answer: 0,
    explanation:
      "Preserving originals supports trustworthy review and accountability.",
  },
  {
    question: "What is privacy minimization?",
    choices: [
      "Collecting, viewing, storing, and sharing only what the task requires.",
      "Collecting every available detail.",
      "Publishing all information.",
      "Disabling access controls.",
    ],
    answer: 0,
    explanation:
      "Privacy improves when unnecessary personal information is not collected or exposed.",
  },
  {
    question: "What is an IP address used for?",
    choices: [
      "Helping devices send data to the correct network destination.",
      "Storing passwords.",
      "Classifying documents.",
      "Creating recovery codes.",
    ],
    answer: 0,
    explanation:
      "IP addresses identify network destinations for communication.",
  },
  {
    question: "Which statement about DNS is correct?",
    choices: [
      "It helps map domain names to network addresses.",
      "It guarantees website trustworthiness.",
      "It encrypts every file.",
      "It replaces MFA.",
    ],
    answer: 0,
    explanation:
      "DNS supports name resolution but does not prove that a site is trustworthy.",
  },
  {
    question: "Which evidence best helps review a network connection?",
    choices: [
      "Source, destination, service, protocol, time, volume, and expected purpose.",
      "Only the alert color.",
      "Only the device wallpaper.",
      "Only the user's opinion.",
    ],
    answer: 0,
    explanation:
      "Strong network review combines technical details with business context.",
  },
  {
    question: "Why are ports useful?",
    choices: [
      "They help identify the application or service involved in communication.",
      "They create user accounts.",
      "They store backups.",
      "They replace routers.",
    ],
    answer: 0,
    explanation:
      "Ports help distinguish services such as web, email, or other applications.",
  },
  {
    question: "Which statement about HTTPS is correct?",
    choices: [
      "It can protect the connection even when the website itself is deceptive.",
      "It guarantees the website owner is honest.",
      "It guarantees every download is safe.",
      "It makes URL review unnecessary.",
    ],
    answer: 0,
    explanation:
      "HTTPS secures transport, but users must still evaluate the domain, request, and context.",
  },
  {
    question: "Which URL detail is most important during look-alike review?",
    choices: [
      "The actual registered domain and spelling.",
      "The logo size.",
      "The page background.",
      "The number of images.",
    ],
    answer: 0,
    explanation:
      "Look-alike pages often imitate appearance while using a different domain.",
  },
  {
    question: "What should a user do when a page requests unexpected browser permissions?",
    choices: [
      "Deny or pause, verify the need, and use the official service through a trusted route.",
      "Approve everything automatically.",
      "Disable browser protections.",
      "Enter credentials first.",
    ],
    answer: 0,
    explanation:
      "Browser permissions should match an expected and verified purpose.",
  },
  {
    question: "Which response to an unfamiliar cloud destination is strongest?",
    choices: [
      "Compare it with approved changes, application ownership, domain, service, and device group.",
      "Assume it is malicious immediately.",
      "Ignore it permanently.",
      "Block it without authority.",
    ],
    answer: 0,
    explanation:
      "New legitimate services can create unfamiliar traffic, so context and approval records matter.",
  },
  {
    question: "What is a digital identity?",
    choices: [
      "The accounts, identifiers, credentials, devices, profiles, and activity connected to a person or organization.",
      "Only a profile picture.",
      "Only a password.",
      "Only a device name.",
    ],
    answer: 0,
    explanation:
      "Digital identity includes many connected elements beyond one account or password.",
  },
  {
    question: "Which passphrase practice is strongest?",
    choices: [
      "Use a long, unique passphrase for each important account.",
      "Reuse one short password everywhere.",
      "Share the passphrase with friends.",
      "Store it in a public document.",
    ],
    answer: 0,
    explanation:
      "Length and uniqueness both matter for account protection.",
  },
  {
    question: "Which MFA response is safest?",
    choices: [
      "Deny an unexpected approval request and review the account through the official service.",
      "Approve every request.",
      "Share the code with the sender.",
      "Disable MFA permanently.",
    ],
    answer: 0,
    explanation:
      "Unexpected MFA prompts may indicate attempted account access.",
  },
  {
    question: "Why should recovery codes be protected?",
    choices: [
      "They may allow account access when the usual authentication method is unavailable.",
      "They are harmless public information.",
      "They replace every password.",
      "They should be posted online.",
    ],
    answer: 0,
    explanation:
      "Recovery codes can provide powerful access and must be stored securely.",
  },
  {
    question: "Which access-review decision is strongest?",
    choices: [
      "Remove permissions that are no longer required and document the change.",
      "Keep every old permission.",
      "Grant more access just in case.",
      "Use one shared administrator account.",
    ],
    answer: 0,
    explanation:
      "Access should match current responsibilities and least privilege.",
  },
  {
    question: "What should happen to a former contractor account?",
    choices: [
      "Disable or suspend it through the approved offboarding process.",
      "Leave it active forever.",
      "Share it with another person.",
      "Delete all related logs first.",
    ],
    answer: 0,
    explanation:
      "Accounts should not remain active after the approved need ends.",
  },
  {
    question: "Which privacy setting is strongest for personal profile details?",
    choices: [
      "Limit visibility to the smallest appropriate audience.",
      "Make all details public.",
      "Share exact location history.",
      "Publish recovery information.",
    ],
    answer: 0,
    explanation:
      "Privacy improves when personal information is shared only with the intended audience.",
  },
  {
    question: "What is the safest response to an app permission that is no longer needed?",
    choices: [
      "Remove the permission and verify the app still works as required.",
      "Keep every permission forever.",
      "Grant additional access.",
      "Share the account password.",
    ],
    answer: 0,
    explanation:
      "Permissions should match current need and be reviewed regularly.",
  },
  {
    question: "Which backup plan is strongest?",
    choices: [
      "Separate protected copies, clear ownership, regular testing, and documented recovery goals.",
      "One copy on the same device.",
      "No owner.",
      "No restore testing.",
    ],
    answer: 0,
    explanation:
      "Strong backups require protection, separation, ownership, and validation.",
  },
  {
    question: "What is phishing triage?",
    choices: [
      "A structured review of message risk, evidence, priority, and next action.",
      "Opening every attachment.",
      "Replying to unknown senders.",
      "Deleting every urgent email.",
    ],
    answer: 0,
    explanation:
      "Phishing triage uses message evidence and context to determine a safe response.",
  },
  {
    question: "Which sender indicator is most useful?",
    choices: [
      "The full sending address and domain.",
      "Only the display name.",
      "Only the profile image.",
      "Only the signature.",
    ],
    answer: 0,
    explanation:
      "Display names can be imitated, so the actual address and domain matter.",
  },
  {
    question: "Which request is a strong phishing warning sign?",
    choices: [
      "An urgent demand for passwords, MFA codes, payment, or immediate sign-in.",
      "A scheduled class reminder.",
      "A normal calendar invitation from a verified source.",
      "A message with no request.",
    ],
    answer: 0,
    explanation:
      "Urgency combined with sensitive requests is a common manipulation pattern.",
  },
  {
    question: "What should a user do with a suspicious password-reset message?",
    choices: [
      "Avoid the link and access the official account page directly.",
      "Click the link immediately.",
      "Reply with the old password.",
      "Forward the message widely.",
    ],
    answer: 0,
    explanation:
      "Using the official service directly avoids relying on an untrusted message link.",
  },
  {
    question: "Why should the original suspicious message be preserved?",
    choices: [
      "It may contain headers, timestamps, sender details, URLs, and other evidence.",
      "It makes the link safe.",
      "It proves the sender is malicious.",
      "It removes the need for reporting.",
    ],
    answer: 0,
    explanation:
      "The original message may contain important evidence needed for review.",
  },
  {
    question: "What is malware?",
    choices: [
      "Software designed to disrupt, damage, spy on, steal from, or gain unauthorized access.",
      "A secure browser setting.",
      "A backup schedule.",
      "A password manager.",
    ],
    answer: 0,
    explanation:
      "Malware is harmful software designed for unauthorized or damaging purposes.",
  },
  {
    question: "Which endpoint action is safest for a suspicious file?",
    choices: [
      "Do not open or run it; preserve evidence and follow the approved playbook.",
      "Execute it again.",
      "Upload it publicly.",
      "Send it to classmates.",
    ],
    answer: 0,
    explanation:
      "Suspicious files should not be executed or shared during beginner analysis.",
  },
  {
    question: "What does an endpoint process chain show?",
    choices: [
      "The sequence of programs, files, or actions connected to an event.",
      "Only the device name.",
      "Only the alert severity.",
      "Only the user's role.",
    ],
    answer: 0,
    explanation:
      "Process chains help explain how activity started and what followed.",
  },
  {
    question: "Which endpoint case deserves higher priority?",
    choices: [
      "A privileged account, suspicious download, blocked script, and unusual network activity on the same device.",
      "A harmless wallpaper change.",
      "A resolved printer message.",
      "A normal approved update.",
    ],
    answer: 0,
    explanation:
      "Privilege, correlation, possible impact, and active evidence increase priority.",
  },
  {
    question: "Why is a blocked script not enough to close a case?",
    choices: [
      "Related account, email, network, or recovery evidence may remain unresolved.",
      "Blocked events are always harmless.",
      "Logs are unnecessary.",
      "Users should run the script again.",
    ],
    answer: 0,
    explanation:
      "One successful control may stop only part of the activity.",
  },
  {
    question: "Which network event should be correlated with an endpoint alert?",
    choices: [
      "Outbound attempts from the same device during the same time window.",
      "An unrelated printer status message.",
      "A normal login from another user.",
      "A scheduled class event.",
    ],
    answer: 0,
    explanation:
      "Shared device and time context can connect network and endpoint evidence.",
  },
  {
    question: "What is escalation?",
    choices: [
      "Moving a case to a more specialized or authorized responder when risk or uncertainty requires it.",
      "Deleting the case.",
      "Sharing evidence publicly.",
      "Ignoring the alert.",
    ],
    answer: 0,
    explanation:
      "Escalation helps ensure the right expertise and authority are involved.",
  },
  {
    question: "Which incident timeline is strongest?",
    choices: [
      "An ordered record of relevant events, evidence, actions, owners, and decisions.",
      "A list with no timestamps.",
      "A guess about what happened.",
      "Only the final alert.",
    ],
    answer: 0,
    explanation:
      "Timelines help defenders understand sequence, correlation, and response.",
  },
  {
    question: "What should be documented in a case?",
    choices: [
      "Evidence, facts, uncertainty, decisions, owners, actions, limitations, and next steps.",
      "Only the alert title.",
      "Only the final score.",
      "Only the user's opinion.",
    ],
    answer: 0,
    explanation:
      "Complete documentation supports accountability and reliable follow-up.",
  },
  {
    question: "Which portfolio artifact is strongest?",
    choices: [
      "A safely recreated report with a clear skill claim, evidence, reflection, and revision.",
      "A screenshot with private data.",
      "A title with no explanation.",
      "An exaggerated expert claim.",
    ],
    answer: 0,
    explanation:
      "Strong artifacts are specific, safe, evidence-based, and reflective.",
  },
  {
    question: "Which reflection statement is strongest?",
    choices: [
      "I initially confused HTTPS with website trust, then revised my diagram to separate secure transport from domain legitimacy.",
      "I learned a lot.",
      "Everything was easy.",
      "I am now an expert.",
    ],
    answer: 0,
    explanation:
      "Strong reflection identifies the misunderstanding, change, and evidence of improvement.",
  },
  {
    question: "What should happen before sharing a screenshot in a portfolio?",
    choices: [
      "Redact or recreate sensitive names, emails, tickets, credentials, and internal details.",
      "Publish it immediately.",
      "Add more private data.",
      "Remove all explanation.",
    ],
    answer: 0,
    explanation:
      "Portfolio evidence should demonstrate skill without exposing protected information.",
  },
  {
    question: "Which beginner skill claim is most credible?",
    choices: [
      "I can review fictional web evidence by checking the domain, HTTPS status, warning messages, and user request.",
      "I can secure every organization.",
      "I know all of cybersecurity.",
      "I never need supervision.",
    ],
    answer: 0,
    explanation:
      "Credible claims are specific, limited, and supported by evidence.",
  },
  {
    question: "What is a knowledge gap?",
    choices: [
      "A concept, process, or decision area that still needs review or practice.",
      "A completed lesson.",
      "A correct answer.",
      "A certificate.",
    ],
    answer: 0,
    explanation:
      "Knowledge gaps guide focused review and practice.",
  },
  {
    question: "Which evidence should lower a learner's confidence rating?",
    choices: [
      "Repeated missed questions and weak explanations in the same domain.",
      "One correctly explained practice set.",
      "A revised artifact.",
      "A strong checklist.",
    ],
    answer: 0,
    explanation:
      "Confidence should match actual evidence of understanding.",
  },
  {
    question: "What is the best use of a practice-test score?",
    choices: [
      "Identify weak domains, review explanations, and build a targeted study plan.",
      "Treat it as the only measure of ability.",
      "Ignore missed questions.",
      "Memorize answer letters.",
    ],
    answer: 0,
    explanation:
      "Practice scores are useful when they lead to focused review and improved reasoning.",
  },
  {
    question: "What should happen before the Beginner Final Test?",
    choices: [
      "Review repeated errors, explain weak concepts, complete targeted practice, and confirm readiness.",
      "Skip all missed topics.",
      "Use only confidence feelings.",
      "Avoid reviewing explanations.",
    ],
    answer: 0,
    explanation:
      "Final readiness should be based on evidence, targeted review, and clear explanations.",
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

export default function BeginnerPracticeTestTwoPage() {
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
              Practice Test 2
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              50 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Beginner Practice Test 2
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete a second 50-question full-track assessment using new
            questions across Beginner cybersecurity foundations, ethics,
            networking, web safety, identity, privacy, data, threats, defensive
            response, recovery, portfolio skills, and readiness.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: Practice Test 1
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
              Beginner Final Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I reviewed the weak domains identified by Practice Test 1.",
            "I will answer every question before revealing the score.",
            "I will compare this result with Practice Test 1 before attempting the final test.",
          ]}
        />

        <SectionCard
          eyebrow="Practice Test Instructions"
          title="Complete All 50 New Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work independently without checking lesson pages.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Choose the strongest evidence-based defensive answer.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit, review explanations, and update your final readiness plan.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations stay hidden until submission. Revisit any
            repeated gaps before opening the Beginner Final Test.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Beginner Practice Test 2"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "Compare the results from both practice tests instead of relying on one score.",
            "Repeated mistakes reveal priority review areas.",
            "Correct answers should be supported by clear explanations, not recognition alone.",
            "Review high-impact ethics, identity, web, threat, and recovery gaps before the final test.",
            "Attempt the Beginner Final Test only after completing targeted review.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Final Assessment
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to the Beginner Final Test
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Compare both practice-test results, review repeated mistakes, and
            continue when your explanations and evidence show final readiness.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: Practice Test 1
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
              Next: Beginner Final Test
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}