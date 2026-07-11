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
const previousLesson = `${modulePath}/accounts-privacy-and-data-review`;
const nextLesson = `${modulePath}/beginner-portfolio-reflection`;

const vocabulary = [
  [
    "Malware",
    "Software designed to disrupt, damage, spy on, steal from, or gain unauthorized access to systems and data.",
  ],
  [
    "Phishing",
    "A deceptive message or website designed to manipulate someone into revealing information or taking an unsafe action.",
  ],
  [
    "Social engineering",
    "The use of deception, pressure, impersonation, trust, or emotion to influence a person.",
  ],
  [
    "Indicator",
    "A piece of evidence that may help explain suspicious or harmful activity.",
  ],
  [
    "Containment",
    "An approved action used to limit possible harm while preserving evidence and allowing further review.",
  ],
  [
    "Escalation",
    "Sending a case to a more specialized or authorized responder when impact, uncertainty, scope, or risk requires it.",
  ],
];

const defenseLayers = [
  {
    title: "Prevent",
    question: "What reduces the chance that the threat succeeds?",
    examples:
      "Updates, unique credentials, MFA, safe settings, filtering, least privilege, backups, and awareness.",
  },
  {
    title: "Detect",
    question: "What evidence helps defenders notice unusual or risky activity?",
    examples:
      "Alerts, logs, reports, login notifications, endpoint tools, network monitoring, and user observations.",
  },
  {
    title: "Respond",
    question: "What approved action limits harm and supports investigation?",
    examples:
      "Preserve evidence, verify users, isolate devices, restrict access, block indicators, assign owners, and escalate.",
  },
  {
    title: "Recover",
    question: "How does the organization restore safe operations and reduce repeat risk?",
    examples:
      "Restore testing, credential resets, patching, recovery ownership, lessons learned, and control improvements.",
  },
];

const reviewRows = [
  {
    item: "Urgent account message",
    evidence:
      "Display name looks familiar, sender domain is different, and the message asks for immediate password verification",
    decision:
      "Preserve the message, avoid links and replies, use the official service directly, and report it.",
  },
  {
    item: "Unexpected attachment",
    evidence:
      "The file was not requested and the sender pressures the user to open it quickly",
    decision:
      "Do not open or run it. Preserve the message and follow the approved email-triage process.",
  },
  {
    item: "Blocked endpoint script",
    evidence:
      "A security tool blocks an unsigned script after a suspicious download",
    decision:
      "Preserve the alert, review related email and network evidence, contain as authorized, and escalate if needed.",
  },
  {
    item: "New login alert",
    evidence:
      "A successful login appears from an unfamiliar device and location",
    decision:
      "Verify the user through a trusted channel, review MFA and session activity, and secure the account if unauthorized.",
  },
  {
    item: "Backup warning",
    evidence:
      "Important backups report success, but no restore test or recovery owner exists",
    decision:
      "Assign ownership and validate recovery rather than assuming backup status proves readiness.",
  },
];

const mistakes = [
  "Calling every suspicious event a confirmed attack without enough evidence.",
  "Opening an attachment or link to see whether it is dangerous.",
  "Assuming a blocked action means the entire incident is over.",
  "Ignoring related account, email, endpoint, network, and backup evidence.",
  "Taking containment actions without authority or impact review.",
  "Failing to document uncertainty, ownership, escalation, and next steps.",
];

const quizQuestions = [
  {
    question: "What is phishing?",
    choices: [
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A routine software update.",
      "A type of data backup.",
      "A secure login method.",
    ],
    answer: 0,
    explanation:
      "Phishing uses deceptive messages, websites, or requests to manipulate the target.",
  },
  {
    question: "What is social engineering?",
    choices: [
      "Using deception, pressure, impersonation, trust, or emotion to influence a person.",
      "Installing every available application.",
      "Encrypting every network connection.",
      "Testing backups.",
    ],
    answer: 0,
    explanation:
      "Social engineering targets human judgment and behavior rather than relying only on technical weaknesses.",
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
      "Containment limits risk without destroying the evidence needed for investigation.",
  },
  {
    question: "What is the strongest response to several related alerts?",
    choices: [
      "Correlate the evidence, prioritize the case, assign ownership, take authorized actions, and document the timeline.",
      "Handle every alert separately without checking relationships.",
      "Delete low-severity alerts before review.",
      "Assume the first alert explains everything.",
    ],
    answer: 0,
    explanation:
      "Connected alerts should be reviewed together through evidence, prioritization, ownership, and documentation.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
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
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B15.4 Accounts, Privacy, and Data Review
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B15.6 Beginner Portfolio Reflection
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function DefenseReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Prevent, Detect, Respond, and Recover
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        Strong defense uses multiple layers before, during, and after a security
        event.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {defenseLayers.map((layer, index) => (
          <div
            key={layer.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{layer.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">{layer.question}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {layer.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThreatReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Threat Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence, Risk, and Safer Defensive Decisions
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional example connects a possible threat with evidence,
            context, defensive controls, and an approved next action.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {reviewRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.5fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.evidence}</p>
            <p className="text-sm font-semibold text-yellow-100">
              {row.decision}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ThreatsAndDefensesReviewPage() {
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
              Lesson 5 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.5 Threats and Defenses Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review malware concepts, phishing, impersonation, social
            engineering, suspicious files, device protection, alerts,
            reporting, triage, containment, escalation, recovery, and layered
            defense.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Threats and Defenses Review"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can recognize common phishing, impersonation, social-engineering, and suspicious-file indicators.",
            "I remember that alerts are evidence for review, not automatic proof of compromise.",
            "I will use only fictional messages, accounts, files, devices, logs, alerts, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="Threats Often Cross Multiple People, Accounts, Devices, and Services"
        >
          <p className="leading-8">
            A suspicious message may lead to an account alert, unexpected
            download, endpoint event, network connection, and recovery concern.
            Defenders protect users by connecting the evidence instead of
            treating each signal as a separate story.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Review rule:</span> never open, run,
            upload, share, or test suspicious files, links, scripts, or
            credentials during beginner defensive review.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain common threats including phishing, social engineering, malware concepts, impersonation, and unsafe files.",
            "Review fictional account, email, endpoint, network, and backup evidence without overstating conclusions.",
            "Choose layered preventive, detective, response, containment, escalation, and recovery actions.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="One Layer May Stop Part of the Threat but Not the Entire Incident"
        >
          <p className="leading-8">
            A filter may block a message, an endpoint tool may stop a script, or
            a firewall may deny a connection. Defenders still need to review
            related users, accounts, devices, data, logs, and recovery needs.
          </p>
        </SectionCard>

        <DefenseReviewBoard />

        <SectionCard
          eyebrow="Core Concept"
          title="Threat Review Combines Indicators, Context, Impact, and Defensive Action"
        >
          <p className="leading-8">
            Indicators become more useful when defenders connect them to the
            affected asset, user, account, device, timing, expected activity,
            possible impact, and existing controls.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Threats and Defenses Review Terms
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ThreatReviewBoard />

        <FakeDashboardCard
          title="Fake Threats and Defenses Dashboard"
          subtitle="Training dashboard using fictional email reports, account alerts, endpoint events, network evidence, backups, owners, and response decisions."
          metrics={[
            {
              label: "Reports reviewed",
              value: "46",
              note: "Fictional phishing, impersonation, suspicious-file, account, device, and network reports.",
            },
            {
              label: "Correlated cases",
              value: "13",
              note: "Related messages, users, accounts, endpoints, destinations, timestamps, and recovery systems.",
            },
            {
              label: "Cases escalated",
              value: "5",
              note: "Privileged access, active device risk, possible spread, sensitive data, and recovery uncertainty.",
            },
          ]}
        />

        <FakeAlertCard
          title="Suspicious Message, Account Login, and Endpoint Alert Share One Timeline"
          severity="High"
          time="1:27 PM"
          source="Fake Security Operations Monitor"
          details="A fictional user reports an urgent document-sharing message, a successful login appears from an unfamiliar device, and an endpoint tool blocks an unsigned script after an unexpected download."
          recommendation="Preserve all evidence, verify the user through a trusted channel, secure the account, contain the device if authorized, review related network activity, and escalate."
        />

        <FakeLogPanel
          title="Fake Threat Correlation Log"
          logs={[
            "12:38:11 EMAIL user='teacher_12' subject='urgent_shared_document'",
            "12:42:36 URL domain='lookalike' credentials_submitted='unknown'",
            "12:49:08 IDENTITY login='success' device='unfamiliar'",
            "12:54:31 ENDPOINT download='unexpected_archive' script='blocked'",
            "13:02:17 NETWORK outbound_attempts='5' result='denied'",
            "13:11:44 USER verification='not_yet_completed'",
            "13:27:09 CASE priority='high' owner='incident_lead' escalation='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Case Should Be Prioritized First?"
          evidence={[
            "A fictional teacher reports an urgent shared-document email.",
            "The same account logs in from an unfamiliar device.",
            "The user's laptop triggers a blocked unsigned-script alert.",
            "The device makes several denied outbound connection attempts.",
            "A separate printer status alert has no related evidence.",
          ]}
          question="What is the strongest priority decision?"
          options={[
            "Prioritize the connected teacher-account case, preserve evidence, verify the user, contain as authorized, and escalate.",
            "Prioritize the printer status alert because it appeared first.",
            "Close the case because the script was blocked.",
            "Delete the suspicious email to reduce duplicate evidence.",
          ]}
          bestAnswer={0}
          explanation="The correlated identity, email, endpoint, and network evidence creates the greatest supported risk."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Threat Review and Response"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Capstone Lab"
          title="Triage a Fictional Mixed-Threat Queue"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Security Queue
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Security Desk
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                The fictional queue includes phishing reports, account alerts,
                suspicious downloads, endpoint events, network warnings,
                expected maintenance, false positives, and recovery gaps.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Preserve the original message, alert, log, report, and timestamp.</li>
                <li>Group related evidence by user, account, device, destination, and time.</li>
                <li>Separate confirmed facts, likely connections, and uncertainty.</li>
                <li>Review impact, urgency, spread risk, privilege, and asset importance.</li>
                <li>Choose authorized preventive, containment, response, and recovery actions.</li>
                <li>Assign ownership, escalate when needed, and document the timeline.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Urgent Email Requests Immediate Password Verification"
          scenario="A fictional message uses a familiar display name, a mismatched sender domain, a threatening deadline, and a link to a look-alike sign-in page."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not use the link or reply. Preserve the message, access the official service directly, verify account status, and report it.",
              outcome:
                "Best defensive choice. The response avoids the request while preserving evidence.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Enter the password quickly before the account closes.",
              outcome:
                "Risky. Urgency and a mismatched domain are strong warning signs.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Forward the message to friends so they can test it.",
              outcome:
                "Unsafe. Suspicious content should not be spread.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Security Tool Blocks One Suspicious Script"
          scenario="A fictional endpoint tool blocks an unsigned script, but related login and network events remain unexplained."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve the alert, correlate related evidence, verify the user, contain as authorized, and escalate according to impact and uncertainty.",
              outcome:
                "Best defensive choice. A blocked action does not prove the entire case is resolved.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the case immediately because the script was blocked.",
              outcome:
                "Risky. Other evidence may show continuing account or device risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Run the script again to see what happens.",
              outcome:
                "Unsafe. Suspicious scripts should never be executed during beginner review.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Threats and Defenses Review Checklist"
          items={[
            "I preserve original messages, alerts, logs, reports, and timestamps.",
            "I do not open, run, upload, share, or test suspicious links, files, or scripts.",
            "I connect related account, email, endpoint, network, data, and backup evidence.",
            "I separate confirmed facts, likely connections, and uncertainty.",
            "I prioritize using impact, urgency, spread risk, privilege, and asset importance.",
            "I use authorized preventive, containment, response, escalation, and recovery actions.",
            "I document owners, evidence, decisions, limitations, and next steps.",
          ]}
        />

        <MiniQuiz
          title="B15.5 Mini Quiz: Threats and Defenses Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional threat-and-defense case review. Include the affected asset, user, account, device, message, file, destination, indicators, confirmed facts, uncertainty, possible impact, preventive controls, detective controls, containment, escalation, recovery actions, owner, timeline, and next steps."
          tips={[
            "Use fictional users, accounts, messages, files, devices, alerts, logs, and organizations only.",
            "Never include or interact with real suspicious files, links, passwords, MFA codes, or private evidence.",
            "Explain how prevention, detection, response, and recovery support one another.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Phishing and social engineering use deception, pressure, impersonation, trust, and emotion.",
            "Alerts and indicators require evidence and context before a reliable conclusion.",
            "Suspicious links, files, scripts, and credentials should never be opened, run, shared, or tested.",
            "Layered defense includes prevention, detection, response, containment, escalation, and recovery.",
            "Strong defenders correlate related evidence, assign ownership, document uncertainty, and choose authorized actions.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}