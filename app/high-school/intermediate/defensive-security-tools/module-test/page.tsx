import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/defensive-security-tools`;
const previousLesson = `${modulePath}/defensive-tool-analysis-lab`;

const assessmentTopics = [
  {
    number: "01",
    title: "Safe Defensive Tool Use",
    detail:
      "Authorization, scope, ownership, privacy, least privilege, action levels, rollback, validation, and evidence preservation.",
  },
  {
    number: "02",
    title: "Endpoint Protection and EDR",
    detail:
      "Endpoint alerts, process trees, paths, publishers, prevention, quarantine, isolation, tool health, and recovery.",
  },
  {
    number: "03",
    title: "Firewalls and Network Controls",
    detail:
      "Rules, zones, directions, state, allow and deny outcomes, least privilege, object accuracy, and positive and negative testing.",
  },
  {
    number: "04",
    title: "Vulnerability and Configuration Assessment",
    detail:
      "Findings, asset identity, exposure, false positives, compensating controls, accepted risk, remediation, and verification.",
  },
  {
    number: "05",
    title: "SIEM and Log Management",
    detail:
      "Collection, parsing, normalization, enrichment, correlation, thresholds, source health, tuning, and retention.",
  },
  {
    number: "06",
    title: "Email, Web, and DNS Controls",
    detail:
      "Sender evidence, attachments, links, DNS, secure web gateways, browser protection, policy actions, and user reporting.",
  },
  {
    number: "07",
    title: "Validation and Tuning",
    detail:
      "True positives, benign true positives, false positives, false negatives, narrow tuning, testing, rollback, and monitoring.",
  },
  {
    number: "08",
    title: "Integrated Tool Analysis",
    detail:
      "Cross-tool evidence, coverage maps, finding separation, contextual priority, accountable ownership, and residual risk.",
  },
];

const questions = [
  {
    question:
      "1. What should happen before a defender uses a security tool in an environment?",
    choices: [
      "The owner, authorization, purpose, scope, evidence boundary, action level, and safety limits should be defined.",
      "The defender should open every available console and decide the scope afterward.",
      "The defender should collect all user activity in case it becomes useful.",
      "The defender should use the highest-privilege account available.",
    ],
    answer: 0,
    explanation:
      "Authorization and scope come before tool access, evidence collection, testing, or changes.",
  },
  {
    question:
      "2. Which action requires the strongest change-control safeguards?",
    choices: [
      "Reading a supplied fictional alert.",
      "Comparing two preserved fictional event records.",
      "Isolating a fictional device through an approved response control.",
      "Writing a summary of confirmed facts.",
    ],
    answer: 2,
    explanation:
      "Isolation can disrupt users, services, connectivity, and evidence collection, so it requires explicit authority, impact review, validation, and a release plan.",
  },
  {
    question:
      "3. What does an endpoint alert directly prove?",
    choices: [
      "The tool matched configured logic and recorded the displayed endpoint evidence and action.",
      "The device is definitely compromised.",
      "The physical user intentionally caused the activity.",
      "Every related process and file has been identified.",
    ],
    answer: 0,
    explanation:
      "An endpoint alert is an evidence lead. It still requires device, user, process, path, publisher, action, timeline, tool-health, and owner context.",
  },
  {
    question:
      "4. Which evidence combination most strongly supports expected software-deployment activity?",
    choices: [
      "A familiar filename alone.",
      "A medium-severity endpoint alert alone.",
      "An approved change, expected deployment agent, matching package and publisher, approved path, owner validation, and no concerning follow-on behavior.",
      "A successful network connection alone.",
    ],
    answer: 2,
    explanation:
      "Independent change, process, package, publisher, path, owner, and monitoring evidence creates a defensible expected-activity conclusion.",
  },
  {
    question:
      "5. What does quarantine before observed execution best support?",
    choices: [
      "The fictional file was restricted before the supplied evidence shows execution.",
      "The device was fully compromised.",
      "The user intended to launch the file.",
      "Every related file and process was permanently removed.",
    ],
    answer: 0,
    explanation:
      "Quarantine confirms a control action. It does not automatically prove execution, intent, full scope, or permanent resolution.",
  },
  {
    question:
      "6. What does an allowed firewall event directly prove?",
    choices: [
      "The traffic was safe and approved by every owner.",
      "The firewall permitted the recorded traffic under the matched rule and conditions.",
      "The application processed the request successfully.",
      "The user intended the connection.",
    ],
    answer: 1,
    explanation:
      "The firewall event proves a policy decision, not complete safety, business approval, or application outcome.",
  },
  {
    question:
      "7. Which fictional firewall rule best follows least privilege?",
    choices: [
      "Any internal source to the entire database zone on every service.",
      "One approved application source to one required destination on one required service, with logging, ownership, expiration review, and validation.",
      "All outbound traffic for software updates.",
      "A permanent vendor-support rule from any source.",
    ],
    answer: 1,
    explanation:
      "Least privilege limits source, destination, service, application, time, and ownership to the exact approved workflow.",
  },
  {
    question:
      "8. Why should firewall validation include a negative test?",
    choices: [
      "To confirm unrelated fictional sources remain blocked after the intended path is allowed.",
      "To prove every future connection will be safe.",
      "To remove the need for rollback.",
      "To disable logging during the test.",
    ],
    answer: 0,
    explanation:
      "Positive testing confirms the required path works; negative testing checks that unintended access was not opened.",
  },
  {
    question:
      "9. What does a vulnerability-assessment finding directly prove?",
    choices: [
      "The system is definitely compromised.",
      "The tool reported a condition under its current scope, evidence, and logic.",
      "The scanner severity is the final business priority.",
      "Immediate remediation is safe without validation.",
    ],
    answer: 1,
    explanation:
      "The finding must be validated against the correct asset, version, setting, exposure, controls, owner, and business context.",
  },
  {
    question:
      "10. What is the strongest method for prioritizing a fictional vulnerability finding?",
    choices: [
      "Use only the scanner severity.",
      "Use only the asset name.",
      "Combine evidence strength, exposure, privilege, criticality, business impact, existing controls, urgency, and remediation complexity.",
      "Remediate findings alphabetically.",
    ],
    answer: 2,
    explanation:
      "Contextual priority combines technical evidence with business and operational risk.",
  },
  {
    question:
      "11. What is a compensating control?",
    choices: [
      "A validated separate safeguard that reduces risk while the underlying condition remains.",
      "Proof that the finding is false.",
      "A permanent reason to ignore remediation.",
      "A replacement for accountable ownership.",
    ],
    answer: 0,
    explanation:
      "Compensating controls reduce exposure or impact, but the original finding and residual risk must remain documented.",
  },
  {
    question:
      "12. When is a vulnerability or configuration finding fully remediated?",
    choices: [
      "When the dashboard changes color.",
      "When the technical condition is corrected, required business function is validated, monitoring is healthy, and residual risk is documented.",
      "When a test environment succeeds.",
      "When the finding is assigned to an owner.",
    ],
    answer: 1,
    explanation:
      "Remediation requires correction plus technical and business validation in the approved target environment.",
  },
  {
    question:
      "13. What is the purpose of normalization in a SIEM?",
    choices: [
      "To map differently formatted source fields into a consistent comparison model.",
      "To prove every event is malicious.",
      "To remove the need for raw source events.",
      "To guarantee every source uses the same meaning.",
    ],
    answer: 0,
    explanation:
      "Normalization supports comparison, but original source meaning must remain preserved because mappings can be incomplete or incorrect.",
  },
  {
    question:
      "14. What can a parser failure cause?",
    choices: [
      "Required fields may be missing, misplaced, or mislabeled, weakening searches and correlation rules.",
      "The source event becomes automatically malicious.",
      "Retention becomes unlimited.",
      "The correct owner is assigned automatically.",
    ],
    answer: 0,
    explanation:
      "Rules that depend on incorrectly parsed fields can become noisy, inaccurate, or silent.",
  },
  {
    question:
      "15. What is a benign true positive?",
    choices: [
      "The tool correctly detects its defined behavior, but the activity is approved or expected after review.",
      "The tool fails to detect relevant activity.",
      "The alert is created only because data is duplicated.",
      "The source is disconnected.",
    ],
    answer: 0,
    explanation:
      "The detection logic is technically correct, but business and owner evidence explains the activity as expected.",
  },
  {
    question:
      "16. Which is the strongest response to a noisy SIEM rule?",
    choices: [
      "Disable the entire rule.",
      "Exclude the entire user group or network zone.",
      "Identify the exact expected pattern, make a narrow approved change, test positive and negative cases, preserve high-risk coverage, prepare rollback, and monitor.",
      "Increase every threshold until alerts disappear.",
    ],
    answer: 2,
    explanation:
      "Narrow, tested tuning reduces known noise without creating a broad false-negative gap.",
  },
  {
    question:
      "17. What does passing fictional sender authentication directly support?",
    choices: [
      "The sending infrastructure was authorized under the available domain policy.",
      "The message content and business request are definitely safe.",
      "Every link is approved.",
      "The physical sender is known with certainty.",
    ],
    answer: 0,
    explanation:
      "Authentication supports sending authorization and integrity checks, not complete content or business legitimacy.",
  },
  {
    question:
      "18. What does a DNS event directly prove?",
    choices: [
      "A fictional client or application requested resolution for the recorded domain.",
      "The user successfully visited and trusted the page.",
      "A file was downloaded.",
      "The destination content was safe.",
    ],
    answer: 0,
    explanation:
      "DNS evidence supports name-resolution analysis but does not prove a later web request or user interaction.",
  },
  {
    question:
      "19. Why should a user report remain important when an automated control allowed a message?",
    choices: [
      "The user may notice unexpected business context, timing, request, or appearance that the tool did not understand.",
      "User reports automatically prove the message is harmful.",
      "Automated controls are never useful.",
      "Every reported message should be deleted without review.",
    ],
    answer: 0,
    explanation:
      "Human context can identify concerns outside automated reputation, content, and policy logic.",
  },
  {
    question:
      "20. What is the greatest risk of a broad exclusion?",
    choices: [
      "It can hide unrelated high-risk activity and create false-negative coverage gaps.",
      "It always increases alert volume.",
      "It automatically repairs parsing.",
      "It improves asset ownership records.",
    ],
    answer: 0,
    explanation:
      "Exclusions should match only the exact approved pattern and preserve privileged, new-device, unknown-process, unusual-time, and other high-risk variations.",
  },
  {
    question:
      "21. Which test best checks whether important coverage remains after tuning?",
    choices: [
      "Only the expected maintenance case.",
      "A high-risk variation involving a privileged account, new device, unknown process, unexpected destination, or unapproved time.",
      "Only the dashboard alert count.",
      "Only a duplicate event.",
    ],
    answer: 1,
    explanation:
      "High-risk testing verifies that noise reduction did not hide the behavior the rule must still detect.",
  },
  {
    question:
      "22. Why should the original fictional rule or policy version be preserved?",
    choices: [
      "So reviewers can compare behavior, audit the change, and restore the previous state if validation fails.",
      "So testing becomes unnecessary.",
      "So all earlier alerts can be deleted.",
      "So owner approval is no longer required.",
    ],
    answer: 0,
    explanation:
      "Preservation supports traceability, rollback, reliable testing, and change accountability.",
  },
  {
    question:
      "23. Five tools produce alerts on the same day, but the events share no user, device, process, request, destination, or causal sequence. What is the strongest conclusion?",
    choices: [
      "Treat every alert as one major incident.",
      "Keep the findings separate and correlate only where shared evidence supports a relationship.",
      "Ignore every finding because the alerts are unrelated.",
      "Use the highest severity as proof that it caused the others.",
    ],
    answer: 1,
    explanation:
      "Time proximity alone does not establish one incident or causal chain.",
  },
  {
    question:
      "24. Why might a medium-severity visibility gap receive higher priority than a high-severity contained alert?",
    choices: [
      "The visibility gap may affect detection across many assets, while the contained alert shows limited current impact.",
      "Medium severity is always more important.",
      "Contained alerts never require review.",
      "Dashboard severity has no meaning at all.",
    ],
    answer: 0,
    explanation:
      "Contextual priority considers scope, confidence, impact, control outcome, and false-negative risk rather than severity alone.",
  },
  {
    question:
      "25. What makes a final defensive-tool report professionally traceable?",
    choices: [
      "Every conclusion and recommendation links back to preserved fictional source records, configurations, owners, tests, limitations, and validation results.",
      "The report repeats every dashboard label without analysis.",
      "The report uses absolute language and removes uncertainty.",
      "The report contains many screenshots without source details.",
    ],
    answer: 0,
    explanation:
      "Traceability allows another reviewer to verify the evidence, reasoning, action, and outcome.",
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

export default function DefensiveSecurityToolsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I5
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              25 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I5 Module Test: Defensive Security Tools
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of safe tool use, endpoint
            protection, firewalls, vulnerability assessment, SIEM, email and
            web controls, validation, tuning, and integrated defensive analysis.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed all eight Module I5 lessons.",
            "I can explain the difference between tool output, source evidence, business context, and a verified finding.",
            "I can distinguish observation, prevention, quarantine, isolation, remediation, validation, and recovery.",
            "I understand false positives, benign true positives, false negatives, duplicate alerts, evidence gaps, and residual risk.",
            "I will answer from a fictional, authorized, privacy-respecting, and defensive perspective.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Instructions"
          title="Complete All 25 Questions Before Reviewing the Answers"
        >
          <p className="leading-8">
            Read each question carefully and choose the strongest
            evidence-based defensive response. The correct answer and
            explanation remain hidden until you reveal them through the quiz
            component. Some incorrect choices contain a partly true statement,
            but only one choice includes the complete professional workflow.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-200">
                Recommended score
              </p>
              <p className="mt-2 text-2xl font-black text-white">20/25+</p>
              <p className="mt-2 text-sm leading-6 text-cyan-50">
                Review any missed concept before continuing to Module I6.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-yellow-200">
                Evidence rule
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                Prefer conclusions supported by preserved source evidence,
                context, limitations, ownership, validation, and monitoring.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-200">
                Safety rule
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Choose fictional, authorized, narrow, reversible, and
                privacy-protective actions.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Assessment Coverage
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Topic Areas from Module I5
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {assessmentTopics.map((topic) => (
              <div
                key={topic.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    {topic.number}
                  </span>
                  <h3 className="font-black text-white">{topic.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {topic.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="I5 Module Test: 25 Questions"
          questions={questions}
        />

        <DefenderChecklist
          title="Post-Test Review Checklist"
          items={[
            "I can explain why authorization, scope, ownership, privacy, and least privilege come before tool use.",
            "I can interpret endpoint alerts without assuming compromise from an alert title or severity.",
            "I can design and validate a least-privilege firewall rule using positive and negative testing.",
            "I can validate and prioritize vulnerability findings using asset, exposure, privilege, business, and control context.",
            "I can explain collection, parsing, normalization, enrichment, correlation, thresholding, and retention in a SIEM.",
            "I can trace fictional email, DNS, web, browser, endpoint, user-report, and owner evidence across layers.",
            "I can distinguish true positives, benign true positives, false positives, false negatives, duplicates, and evidence-incomplete findings.",
            "I can design narrow tuning with preserved configuration, approval, tests, rollback, monitoring, and residual-risk documentation.",
            "I can separate unrelated multi-tool findings and prioritize them contextually instead of using dashboard severity alone.",
            "I can link every recommendation to preserved fictional evidence, accountable ownership, validation, limitations, and closure criteria.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Defensive tools improve visibility and control, but no tool provides complete context or certainty.",
            "Tool output becomes a verified finding only after source evidence, ownership, business context, limitations, and validation are added.",
            "Safe tool actions are authorized, narrow, least-privileged, reversible, monitored, and documented.",
            "False-positive reduction must not create false-negative coverage gaps.",
            "Displayed severity differs from evidence confidence, business impact, control outcome, and contextual priority.",
            "Professional defensive analysis preserves evidence, assigns accountable owners, validates outcomes, and records residual risk.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Module Completion
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Module I5: Defensive Security Tools Complete
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            After reviewing your results, return to the module homepage and
            confirm that all eight lessons and this module test open correctly.
            Your strongest portfolio artifact from this module is the fictional
            Defensive Tool Effectiveness Report.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={modulePath}
              className="rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
            >
              Return to Module I5
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:bg-emerald-300/10"
            >
              Intermediate Track
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Module I5
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}