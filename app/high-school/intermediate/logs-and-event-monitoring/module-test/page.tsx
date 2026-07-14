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
const modulePath = `${trackPath}/logs-and-event-monitoring`;
const previousLesson = `${modulePath}/log-review-lab`;

const assessmentTopics = [
  {
    title: "Log Foundations",
    detail: "What logs are, why defenders use them, source limitations, evidence quality, and the difference between records and conclusions.",
  },
  {
    title: "Time and Event Context",
    detail: "Original timestamps, normalized timestamps, time zones, clock drift, collection delay, event IDs, providers, severity, and confidence.",
  },
  {
    title: "Authentication Logs",
    detail: "Sign-ins, failures, MFA, lockouts, password changes, sessions, service identities, source context, and expected versus review-required patterns.",
  },
  {
    title: "System and Application Logs",
    detail: "Processes, services, updates, permissions, dependencies, crashes, resource conditions, recovery, and root-cause analysis.",
  },
  {
    title: "Network and Web Logs",
    detail: "DNS, firewall, proxy, web server, network-flow, endpoint, application, source, destination, ports, methods, paths, responses, and request IDs.",
  },
  {
    title: "Pattern Analysis",
    detail: "Baselines, normal, expected, unusual, suspicious, administrative, failed, evidence-incomplete, prioritization, and false positives.",
  },
  {
    title: "Timeline Construction",
    detail: "Normalization, correlation, confirmed order, likely order, uncertain order, parallel activity, causation, corroboration, and evidence gaps.",
  },
  {
    title: "Integrated Review",
    detail: "Scope, source inventory, evidence chains, findings, confidence, impact, ownership, safe recommendations, validation, and residual risk.",
  },
];

const questions = [
  {
    question: "What is the strongest definition of a log?",
    choices: [
      "A source-created record of an event, action, result, condition, or state.",
      "A final conclusion about why an event happened.",
      "A complete copy of everything a user did.",
      "A guarantee that the recorded activity was malicious.",
    ],
    answer: 0,
    explanation: "A log is evidence created by a source. It still requires context, correlation, and interpretation.",
  },
  {
    question: "Why should defenders preserve original log values?",
    choices: [
      "So another reviewer can verify normalization, filtering, and interpretation decisions.",
      "So time zones no longer matter.",
      "So every event becomes confirmed.",
      "So missing evidence can be recreated.",
    ],
    answer: 0,
    explanation: "Original evidence protects auditability and allows transformations to be checked.",
  },
  {
    question: "What does event time represent?",
    choices: [
      "When the source says the activity occurred.",
      "When an analyst opened the event.",
      "When the event was deleted.",
      "When the user wrote a support ticket.",
    ],
    answer: 0,
    explanation: "Event time is distinct from collection, ingestion, and analyst review time.",
  },
  {
    question: "What does collection time represent?",
    choices: [
      "When a collector or monitoring platform received the event.",
      "The exact moment the source activity occurred.",
      "The time the user approved the event.",
      "The time a report was finalized.",
    ],
    answer: 0,
    explanation: "Collection can occur after the event because of forwarding, queues, offline devices, or network delay.",
  },
  {
    question: "A workstation clock is two minutes slow. What is the strongest handling method?",
    choices: [
      "Preserve the original timestamp, document the offset, and add a normalized comparison time.",
      "Replace the original timestamp permanently.",
      "Ignore every event from the workstation.",
      "Use collection time as the event time.",
    ],
    answer: 0,
    explanation: "Both the source value and the documented transformation should remain visible.",
  },
  {
    question: "Why must an event ID be interpreted with its provider?",
    choices: [
      "The same number can mean different things under different sources or components.",
      "The provider determines user intent.",
      "The provider removes the need for the event message.",
      "The provider guarantees the event is important.",
    ],
    answer: 0,
    explanation: "Provider, source, version, message, fields, and surrounding events give an event ID meaning.",
  },
  {
    question: "What does a high-severity event directly prove?",
    choices: [
      "The source assigned high importance under its own rules.",
      "The system is definitely compromised.",
      "The event caused every later failure.",
      "The user acted intentionally.",
    ],
    answer: 0,
    explanation: "Severity is a prioritization clue, not proof of cause, intent, or impact.",
  },
  {
    question: "What does a successful sign-in directly prove?",
    choices: [
      "The authentication workflow completed successfully under the recorded conditions.",
      "The physical person is known with certainty.",
      "Every later session action was approved.",
      "The device is fully secure.",
    ],
    answer: 0,
    explanation: "Successful authentication does not automatically prove physical identity, intent, or safe later activity.",
  },
  {
    question: "What is a common expected cause of repeated sign-in failures after a password reset?",
    choices: [
      "A mail client, service, task, or device may still use an old saved credential.",
      "The account must be compromised.",
      "MFA must have been removed.",
      "The identity platform must be offline.",
    ],
    answer: 0,
    explanation: "Stale stored credentials commonly create repeated retries after a valid password change.",
  },
  {
    question: "What does an account lockout directly prove?",
    choices: [
      "The configured control responded to failed-attempt conditions.",
      "The user acted maliciously.",
      "The password was correct.",
      "The account was stolen.",
    ],
    answer: 0,
    explanation: "A lockout confirms the control response, not the cause of the failures.",
  },
  {
    question: "Why should MFA events be reviewed with sign-in events?",
    choices: [
      "They show whether an additional challenge was issued and how it was completed.",
      "MFA replaces all other evidence.",
      "MFA proves the physical user with absolute certainty.",
      "MFA determines the device clock.",
    ],
    answer: 0,
    explanation: "MFA adds important context but still has evidence limitations.",
  },
  {
    question: "What is the difference between a symptom and a root cause?",
    choices: [
      "A symptom is an observed effect, while the root cause is the underlying condition that best explains it.",
      "They always mean the same thing.",
      "A symptom is always more important.",
      "A root cause can be identified from severity alone.",
    ],
    answer: 0,
    explanation: "An application error may be a symptom of a permission, dependency, update, resource, or configuration problem.",
  },
  {
    question: "What does a service restart directly prove?",
    choices: [
      "The service changed state and returned to running under the recorded conditions.",
      "The original failure cause is known.",
      "The service is permanently fixed.",
      "The event was malicious.",
    ],
    answer: 0,
    explanation: "A restart confirms a state change, not the complete cause or permanent resolution.",
  },
  {
    question: "Why should application logs be correlated with system logs?",
    choices: [
      "They often describe different parts of the same failure, dependency, and recovery sequence.",
      "They are always identical.",
      "System logs replace application logs.",
      "Application logs contain no technical evidence.",
    ],
    answer: 0,
    explanation: "Different sources can corroborate and explain one another.",
  },
  {
    question: "What does high CPU usage directly prove?",
    choices: [
      "A process or workload consumed significant CPU during the observed period.",
      "The process is malicious.",
      "The process caused every application error.",
      "The device must be reinstalled.",
    ],
    answer: 0,
    explanation: "Resource use requires baseline, workload, process, dependency, and timing context.",
  },
  {
    question: "What does an allowed firewall event directly prove?",
    choices: [
      "The firewall permitted the recorded connection under the shown rule and conditions.",
      "The traffic was approved by the business owner.",
      "The content was safe.",
      "The user intended the connection.",
    ],
    answer: 0,
    explanation: "Allow confirms the firewall decision, not complete content, purpose, or approval.",
  },
  {
    question: "What does a DNS query directly prove?",
    choices: [
      "A client or application requested information about the recorded name.",
      "A later connection succeeded.",
      "A user intentionally visited the destination.",
      "The destination was harmful.",
    ],
    answer: 0,
    explanation: "DNS resolution activity does not prove connection, content, or intent.",
  },
  {
    question: "What does a large network flow directly prove?",
    choices: [
      "A significant amount of data moved between the recorded source and destination during the observed period.",
      "Sensitive information was stolen.",
      "The connection was malicious.",
      "The user approved the transfer.",
    ],
    answer: 0,
    explanation: "Volume requires process, application, destination, data role, owner, baseline, and change context.",
  },
  {
    question: "Why can one internal source address represent many users?",
    choices: [
      "A proxy, VPN gateway, shared server, or network translation device may represent multiple clients.",
      "Addresses are never useful.",
      "Every user shares one account.",
      "DNS replaces device identity.",
    ],
    answer: 0,
    explanation: "Shared infrastructure can hide the original client from downstream records.",
  },
  {
    question: "What is the best distinction between unusual and suspicious activity?",
    choices: [
      "Unusual differs from the baseline, while suspicious has enough concerning context or corroboration for focused review.",
      "They always mean the same thing.",
      "Unusual activity is always safe.",
      "Suspicious activity must have a critical severity label.",
    ],
    answer: 0,
    explanation: "Deviation alone is not enough for a suspicious classification.",
  },
  {
    question: "What should happen when important evidence is missing?",
    choices: [
      "Classify the pattern as evidence-incomplete, preserve confirmed facts, identify gaps, and request authorized supporting evidence.",
      "Guess the most likely cause.",
      "Call the pattern safe.",
      "Remove the related events.",
    ],
    answer: 0,
    explanation: "Honest uncertainty is stronger than unsupported classification.",
  },
  {
    question: "Which pattern deserves the highest review priority?",
    choices: [
      "A privileged account on a new device with denied MFA prompts, unusual timing, and no owner explanation.",
      "A scheduled backup transferring its usual volume.",
      "A documented patch server connecting to managed devices.",
      "One mistyped password from the usual laptop.",
    ],
    answer: 0,
    explanation: "Privilege, new device, MFA denials, unusual time, and missing owner context create a stronger combined concern.",
  },
  {
    question: "What does uncertain order mean in an event timeline?",
    choices: [
      "The available evidence cannot establish the exact sequence responsibly.",
      "The events are definitely unrelated.",
      "The analyst should guess the order.",
      "The highest-severity event happened first.",
    ],
    answer: 0,
    explanation: "Precision, clock differences, collection delay, or missing identifiers may prevent exact ordering.",
  },
  {
    question: "Why can events close in time still be unrelated?",
    choices: [
      "Different users, systems, applications, and workflows can create parallel activity during the same period.",
      "Timestamps are never useful.",
      "All sources use the same clock.",
      "Parallel activity only occurs during maintenance.",
    ],
    answer: 0,
    explanation: "Time proximity supports review but does not prove correlation or causation.",
  },
  {
    question: "What is the best first step in an integrated multi-source log review?",
    choices: [
      "Define a neutral scope and review question before deciding what happened.",
      "Choose the highest-severity alert as the root cause.",
      "Assume all events are connected.",
      "Remove incomplete records.",
    ],
    answer: 0,
    explanation: "A neutral question reduces confirmation bias and keeps the review evidence-based.",
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
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Back to Module
      </Link>
      <Link
        href={trackPath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

function TopicGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Assessment Coverage
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Areas Covered by the Module Test
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {assessmentTopics.map((topic, index) => (
          <div
            key={topic.title}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-cyan-100">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {topic.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LogsAndEventMonitoringModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I4
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              25-Question Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I4 Module Test: Logs and Event Monitoring
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of log evidence, timestamps, event
            context, authentication, system, application, network, web,
            pattern analysis, event timelines, and integrated defensive review.
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
            "I completed or reviewed all eight Module I4 lessons.",
            "I understand that choices appear first and explanations remain hidden until I reveal them.",
            "I will answer from defensive evidence rather than guessing from severity or dramatic wording.",
            "I understand that successful, failed, denied, rare, large, or unusual activity still requires context.",
            "I will use only the fictional scenarios and evidence supplied in the assessment.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Instructions"
          title="Complete All 25 Questions Carefully"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">
                Questions
              </p>
              <p className="mt-3 text-3xl font-black text-white">25</p>
              <p className="mt-2 text-sm leading-6 text-cyan-50">
                One best answer for each question.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                Recommended Goal
              </p>
              <p className="mt-3 text-3xl font-black text-white">80%+</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Review missed concepts before moving forward.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-200">
                Evidence Rule
              </p>
              <p className="mt-3 text-3xl font-black text-white">Context</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Choose the answer that best preserves evidence and avoids unsupported claims.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Read every choice before revealing the answer. The strongest option
            will usually preserve original evidence, correlate multiple sources,
            state limitations, and recommend the narrowest authorized defensive
            action.
          </div>
        </SectionCard>

        <TopicGuide />

        <MiniQuiz
          title="Module I4 Test: Logs and Event Monitoring"
          questions={questions}
        />

        <DefenderChecklist
          title="Post-Test Review Checklist"
          items={[
            "I can explain what a log directly proves and what still requires context.",
            "I can distinguish event time, collection time, ingestion time, and analyst review time.",
            "I can interpret event IDs with provider, source, message, version, and fields.",
            "I can review authentication events with device, application, MFA, session, and account-change evidence.",
            "I can separate system symptoms, root causes, contributing conditions, recovery, and residual risk.",
            "I can trace DNS, firewall, proxy, web server, application, and endpoint evidence across a request sequence.",
            "I can distinguish normal, expected, unusual, suspicious, administrative, failed, and evidence-incomplete activity.",
            "I can build a timeline with preserved originals, normalized time, correlation keys, order confidence, and gaps.",
            "I can write findings with facts, conclusions, alternatives, confidence, impact, owner, and safe next action.",
            "I understand that multiple alerts in one time window do not automatically form one incident.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Logs are evidence records, not automatic conclusions.",
            "Time normalization must preserve original values and document every transformation.",
            "Authentication, system, application, network, web, and endpoint sources answer different questions.",
            "Severity, rarity, failure, success, denial, and volume require context before classification.",
            "Timelines must distinguish confirmed, likely, uncertain, parallel, and unsupported order.",
            "Integrated reviews should preserve evidence, separate evidence chains, state confidence, and recommend narrow authorized actions.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
            Module Completion
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Module I4 Assessment Complete
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Return to the module homepage and confirm that all eight lesson
            cards and the module test open correctly before committing the
            completed module.
          </p>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}