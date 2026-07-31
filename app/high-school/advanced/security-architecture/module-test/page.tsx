import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/security-architecture`;
const previousLesson = `${modulePath}/security-architecture-design-lab`;

const sectionOne = [
  {
    "question": "What best describes security architecture in the fictional Northbridge environment?",
    "choices": [
      "A list of security products.",
      "A coordinated design connecting mission, trust, identity, data, controls, evidence, failure, recovery, ownership, and governance.",
      "A network diagram with many colors.",
      "A set of administrator passwords."
    ],
    "answer": 1,
    "explanation": "Security architecture coordinates decisions and controls across the complete mission rather than focusing on one tool or diagram."
  },
  {
    "question": "Which statement best reflects defense in depth?",
    "choices": [
      "One strong control should prevent every failure.",
      "Several independent fictional control layers should reduce, detect, respond to, recover from, and govern risk.",
      "Every control should depend on the same identity platform.",
      "Only preventive controls matter."
    ],
    "answer": 1,
    "explanation": "Defense in depth combines different control types and avoids relying on one shared failure point."
  },
  {
    "question": "What makes a fictional trust boundary meaningful?",
    "choices": [
      "It is shown with a bold line on a diagram.",
      "Every crossing defines identity, action, target, data, purpose, owner, control, evidence, failure behavior, and denied alternatives.",
      "It separates two subnets.",
      "It uses a different background color."
    ],
    "answer": 1,
    "explanation": "A boundary matters only when the trust decision and its enforcement, evidence, and ownership are explicit."
  },
  {
    "question": "A fictional internal service is allowed to call every other internal service because it is inside the network. What is the main architecture weakness?",
    "choices": [
      "The service needs a faster connection.",
      "Network location is being treated as automatic identity and authorization.",
      "The service should receive administrator privilege.",
      "The network needs more diagrams."
    ],
    "answer": 1,
    "explanation": "Internal location should not replace registered identity, explicit authorization, purpose, action, and target scope."
  },
  {
    "question": "Which item belongs in a strong fictional trust-boundary register?",
    "choices": [
      "Only the zone names.",
      "Crossing purpose, identity, source, destination, action, data, owner, control, evidence, failure state, and review.",
      "Only the firewall product.",
      "Only the risk rating."
    ],
    "answer": 1,
    "explanation": "A complete register records how trust is granted, constrained, observed, failed, recovered, and governed."
  },
  {
    "question": "A fictional security control, approval workflow, evidence source, and recovery process all depend on one platform. What risk does this create?",
    "choices": [
      "Improved accessibility.",
      "A correlated failure domain.",
      "Reduced complexity with no downside.",
      "Guaranteed recovery."
    ],
    "answer": 1,
    "explanation": "Several supposedly separate safeguards may fail together because they share one dependency."
  },
  {
    "question": "What is strongest evidence that a fictional architecture diagram matches reality?",
    "choices": [
      "The diagram was approved last year.",
      "Effective identities, flows, settings, services, exceptions, and evidence are compared with the approved design.",
      "The diagram contains every product logo.",
      "No one has reported a problem."
    ],
    "answer": 1,
    "explanation": "Architecture must be validated against effective state rather than trusted as documentation alone."
  },
  {
    "question": "What should happen when a fictional design assumption becomes uncertain?",
    "choices": [
      "Continue treating it as fact.",
      "Record the uncertainty, evidence, owner, confidence, review trigger, and response if the assumption changes.",
      "Delete the assumption.",
      "Hide it from decision-makers."
    ],
    "answer": 1,
    "explanation": "Assumptions should be visible, owned, reviewable, and connected to a fallback or decision trigger."
  },
  {
    "question": "Which control stack is most complete for a fictional high-impact risk?",
    "choices": [
      "One preventive control.",
      "Preventive, detective, responsive, recovery, governance, and compensating controls with owners and evidence.",
      "A policy statement only.",
      "An alert without a response owner."
    ],
    "answer": 1,
    "explanation": "A layered stack addresses prevention, visibility, response, restoration, accountability, and exceptions."
  },
  {
    "question": "Which statement best describes a fictional architecture requirement?",
    "choices": [
      "Use strong security.",
      "A measurable, owned outcome with rationale, validation, evidence, and failure criteria.",
      "Buy a modern platform.",
      "Follow best practices."
    ],
    "answer": 1,
    "explanation": "Strong requirements define what must be true and how the organization will prove it."
  }
];
const sectionTwo = [
  {
    "question": "What is the strongest starting point for fictional network segmentation?",
    "choices": [
      "Create as many zones as possible.",
      "Group services by mission, trust, data, identity, administration, evidence, failure, and recovery needs.",
      "Place every internal service in one trusted zone.",
      "Block all communication permanently."
    ],
    "answer": 1,
    "explanation": "Segmentation should reflect meaningful mission and trust differences rather than visual complexity."
  },
  {
    "question": "What should every approved fictional network flow define?",
    "choices": [
      "Source and destination only.",
      "Source, destination, identity, service, action, data, purpose, owner, decision, evidence, failure behavior, and review.",
      "Firewall name and rule number only.",
      "The user who requested it only."
    ],
    "answer": 1,
    "explanation": "A defensible flow includes the complete trust and governance decision."
  },
  {
    "question": "A fictional emergency network rule remains active after recovery. What is the strongest response?",
    "choices": [
      "Leave it active for convenience.",
      "Preserve evidence, confirm service health, remove the rule, validate effective flows, and obtain owner signoff.",
      "Delete the rule record.",
      "Convert it into permanent access automatically."
    ],
    "answer": 1,
    "explanation": "Temporary recovery paths must be closed and validated so they do not become permanent bypasses."
  },
  {
    "question": "What best describes identity-centered architecture?",
    "choices": [
      "Adding a login screen.",
      "Designing fictional human, service, device, workload, supplier, administrator, automation, emergency, and recovery identities across authority, lifecycle, evidence, failure, and recovery.",
      "Using one directory.",
      "Giving every user the same role."
    ],
    "answer": 1,
    "explanation": "Identity-centered architecture covers multiple identity types and their complete authority and lifecycle."
  },
  {
    "question": "What is the difference between fictional authentication and authorization?",
    "choices": [
      "They are the same.",
      "Authentication establishes identity; authorization decides whether that identity may perform a specific action on a specific target under current conditions.",
      "Authorization creates the identity.",
      "Authentication grants administrator access."
    ],
    "answer": 1,
    "explanation": "Identity proof does not automatically grant permission for every action or resource."
  },
  {
    "question": "Which design best supports separation of duties?",
    "choices": [
      "One fictional administrator requests, approves, performs, validates, and deletes evidence.",
      "Different authorized owners request, approve, perform, preserve evidence, validate, and accept residual risk.",
      "A shared administrator account performs every task.",
      "No approval is needed during urgent work."
    ],
    "answer": 1,
    "explanation": "High-impact actions should divide authority and evidence across independent roles."
  },
  {
    "question": "What is the strongest approach to fictional service identities?",
    "choices": [
      "Use one broad shared credential for every application.",
      "Use unique owned identities with narrow roles, approved paths, lifecycle, monitoring, rotation conceptually, and recovery.",
      "Treat application location as identity.",
      "Give all services administrator rights."
    ],
    "answer": 1,
    "explanation": "Unique, narrow, attributable service identities reduce blast radius and improve accountability."
  },
  {
    "question": "What best describes logging and visibility by design?",
    "choices": [
      "Collect every available event.",
      "Start with approved evidence questions, then design proportionate sources, fields, health, time, privacy, access, retention, resilience, and validation.",
      "Build one dashboard.",
      "Retain all content forever."
    ],
    "answer": 1,
    "explanation": "Visibility is question-driven and depends on trustworthy and proportionate evidence."
  },
  {
    "question": "Why must fictional source health be monitored?",
    "choices": [
      "To make dashboards more colorful.",
      "To distinguish no activity from no evidence.",
      "To replace event integrity.",
      "To eliminate the need for logging owners."
    ],
    "answer": 1,
    "explanation": "A silent or failed source can otherwise be mistaken for a safe environment."
  },
  {
    "question": "A fictional parser update removes approver and target fields from privileged events. What is the strongest conclusion?",
    "choices": [
      "The original actions were malicious.",
      "Evidence quality became incomplete after a version change and affected records must be validated.",
      "The logging platform should be removed.",
      "The event time is automatically false."
    ],
    "answer": 1,
    "explanation": "Schema drift weakens evidence without proving anything about the original action."
  }
];
const sectionThree = [
  {
    "question": "Why is a fictional backup not the same as recovery?",
    "choices": [
      "Backups are never useful.",
      "Recovery also requires trusted restore states, identities, dependencies, order, evidence, service validation, communication, and closure.",
      "Recovery concerns only applications.",
      "A completed backup proves every service can be restored."
    ],
    "answer": 1,
    "explanation": "A backup is one recovery input, not proof of complete mission restoration."
  },
  {
    "question": "The fictional application is online, but identity synchronization, logging, and supplier validation are incomplete. What is strongest?",
    "choices": [
      "Declare full recovery.",
      "Keep recovery open and maintain limited service until dependencies, evidence, users, and temporary access are validated.",
      "Ignore the missing dependencies.",
      "Delete the recovery case."
    ],
    "answer": 1,
    "explanation": "Application availability alone does not prove complete service recovery."
  },
  {
    "question": "Which fictional recovery identity design is strongest?",
    "choices": [
      "Use the same production administrator account.",
      "Use separately governed recovery identities with independent approval, narrow scope, evidence, expiration, and post-use closure.",
      "Share one emergency identity with all operators.",
      "Leave emergency access active permanently."
    ],
    "answer": 1,
    "explanation": "Recovery authority should not depend completely on the same production failure domain."
  },
  {
    "question": "What best describes a fictional secure default?",
    "choices": [
      "Enable every feature and remove risky ones later.",
      "Begin with minimum safe capability and add only approved access, services, paths, data, privilege, and integrations.",
      "Block every mission function permanently.",
      "Use the product default unchanged."
    ],
    "answer": 1,
    "explanation": "Secure defaults make capability deliberate, minimal, owned, and reviewable."
  },
  {
    "question": "What makes a fictional baseline exception defensible?",
    "choices": [
      "It is labeled temporary.",
      "It has purpose, owner, scope, risk, compensating controls, evidence, expiration, remediation, recovery behavior, and review.",
      "An administrator requested it.",
      "It has existed for a long time."
    ],
    "answer": 1,
    "explanation": "A defensible exception is narrow, accountable, monitored, time-limited, and removable."
  },
  {
    "question": "A fictional hardening change breaks an undocumented identity dependency. What is strongest?",
    "choices": [
      "Remove every hardening control.",
      "Pause rollout, preserve the intended restriction, document the minimum dependency, approve a narrow path, add evidence, and validate recovery.",
      "Keep the outage because stricter settings are always safer.",
      "Restore broad internal trust."
    ],
    "answer": 1,
    "explanation": "The hidden dependency should be corrected without reopening unnecessary exposure."
  },
  {
    "question": "What should be defined before comparing fictional architecture options?",
    "choices": [
      "The preferred supplier.",
      "The decision, owners, non-negotiable requirements, constraints, assumptions, and consistent criteria.",
      "The cheapest purchase price.",
      "The final architecture diagram."
    ],
    "answer": 1,
    "explanation": "Clear requirements and criteria prevent the comparison from being manipulated around a preferred answer."
  },
  {
    "question": "The fictional lowest-price option has the highest training, migration, lock-in, and recovery cost. What is strongest?",
    "choices": [
      "Choose it because purchase price is lowest.",
      "Compare complete lifecycle cost, uncertainty, failure domains, staffing, and future flexibility.",
      "Ignore non-purchase costs.",
      "Reject every low-cost option automatically."
    ],
    "answer": 1,
    "explanation": "Purchase price is only one part of lifecycle sustainability and risk."
  },
  {
    "question": "A fictional preferred identity design fails accessibility testing. What should happen?",
    "choices": [
      "Launch because most users succeed.",
      "Treat accessibility as a release gate, redesign the flow, provide a safe equivalent path, and retest.",
      "Remove identity controls entirely.",
      "Tell excluded users not to use the service."
    ],
    "answer": 1,
    "explanation": "Security architecture must protect and remain usable by intended users."
  },
  {
    "question": "What makes the complete fictional A2 architecture safe to publish as a student portfolio artifact?",
    "choices": [
      "Only passwords are removed.",
      "Real diagrams are simplified.",
      "Every organization, system, identity, data flow, configuration, source, cost, supplier, decision, date, and outcome is invented.",
      "Only names are changed."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects real organizations, people, systems, security details, and decisions."
  }
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A2
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Advanced Track
      </Link>
    </div>
  );
}

export default function A2SecurityArchitectureModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A2
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-200">
              Module Test
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              30 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A2 Module Test: Security Architecture
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your understanding of security architecture, defense in depth,
            trust boundaries, segmentation, identity, visibility, resilience,
            secure defaults, tradeoffs, and integrated architecture design.
            Every scenario, organization, system, identity, record, and outcome
            in this assessment is fictional.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A2: Security Architecture"
          lessonTitle="Module Test"
          lessonNumber={11}
          totalLessons={11}
        />

        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed A2.1 through A2.10.",
            "I will answer each question before revealing the correct answer.",
            "I will use the explanations to identify concepts that need review.",
            "I understand that every scenario and evidence item is fictional and intended only for defensive education.",
            "I will not apply this assessment to real systems, identities, logs, configurations, suppliers, or recovery environments.",
            "I am ready to review security architecture as one integrated discipline.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete All 30 Questions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Questions", "30 multiple-choice questions divided into three sections."],
              ["Answer method", "Choose your answer first, then reveal the hidden answer and explanation."],
              ["Recommended time", "30–45 minutes without using outside notes on the first attempt."],
              ["Mastery target", "Aim for at least 24 correct answers out of 30."],
              ["Retake rule", "Review missed concepts before attempting the test again."],
              ["Safety boundary", "Use only the fictional evidence and defensive reasoning presented in Module A2."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="font-black text-cyan-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Test Blueprint"
          title="What This Assessment Covers"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
              <p className="text-lg font-black text-blue-100">
                Section 1 · Questions 1–10
              </p>
              <p className="mt-2 text-sm leading-6">
                Security architecture, defense in depth, trust boundaries,
                requirements, assumptions, control stacks, and effective-state
                validation.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-lg font-black text-purple-100">
                Section 2 · Questions 11–20
              </p>
              <p className="mt-2 text-sm leading-6">
                Segmentation, approved flows, identity-centered architecture,
                service identities, authorization, visibility, source health,
                and evidence quality.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-lg font-black text-emerald-100">
                Section 3 · Questions 21–30
              </p>
              <p className="mt-2 text-sm leading-6">
                Recovery, secure defaults, hardening, exceptions, constraints,
                lifecycle cost, accessibility, tradeoffs, and final portfolio
                safety.
              </p>
            </div>
          </div>
        </SectionCard>

        <MiniQuiz
          title="Section 1: Architecture Foundations"
          questions={sectionOne}
        />

        <MiniQuiz
          title="Section 2: Segmentation, Identity, and Visibility"
          questions={sectionTwo}
        />

        <MiniQuiz
          title="Section 3: Recovery, Hardening, and Decisions"
          questions={sectionThree}
        />

        <SectionCard
          eyebrow="Score Guide"
          title="Interpret Your First Attempt"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "27–30 correct",
                "Advanced mastery. Review any missed explanation, then continue.",
              ],
              [
                "24–26 correct",
                "Module ready. Review missed topics before beginning A3.",
              ],
              [
                "18–23 correct",
                "Developing. Revisit the matching A2 lessons and retake the test.",
              ],
              [
                "0–17 correct",
                "Rebuild foundations. Review A2.1–A2.10 in order before retaking.",
              ],
            ].map(([range, guidance]) => (
              <div
                key={range}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xl font-black text-cyan-100">{range}</p>
                <p className="mt-2 text-sm leading-6">{guidance}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Targeted Review Plan"
          title="Match Missed Questions to the Correct Lesson"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["A2.1–A2.3", "Review architecture meaning, defense in depth, trust boundaries, assumptions, requirements, and control layering."],
              ["A2.4", "Review mission-based segmentation, flow decisions, denied paths, temporary rules, and effective-flow validation."],
              ["A2.5", "Review identity types, authentication, authorization, least privilege, separation of duties, and identity lifecycle."],
              ["A2.6", "Review evidence questions, event fields, source health, time quality, privacy, schema drift, and end-to-end visibility."],
              ["A2.7", "Review continuity, backup versus recovery, recovery identities, dependency order, service validation, and closure."],
              ["A2.8", "Review secure defaults, least functionality, measurable baselines, drift, exceptions, rollback, and restored states."],
              ["A2.9", "Review constraints, consistent criteria, lifecycle cost, accessibility, privacy, pilots, reversibility, and sunset criteria."],
              ["A2.10", "Review integrated requirements, control stacks, validation scenarios, decision records, ownership, and final approval gates."],
            ].map(([lesson, guidance]) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="font-black text-cyan-100">{lesson}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {guidance}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Module Reflection"
          title="Record Your Architecture Readiness"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Which fictional architecture concept felt strongest on your first attempt?",
              "Which lesson produced the most missed questions?",
              "Which fictional evidence limitation or failure mode changed your answer?",
              "Which architecture decision would you explain most confidently to a review board?",
              "Which recovery, privacy, accessibility, or ownership issue still needs review?",
              "What will you revise before starting Module A3: Threat Modeling?",
            ].map((prompt) => (
              <div
                key={prompt}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-sm leading-6 text-purple-50"
              >
                {prompt}
              </div>
            ))}
          </div>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Security architecture coordinates fictional mission, trust, identity, data, controls, evidence, failure, recovery, ownership, and governance.",
            "Defense in depth uses multiple independent fictional control layers rather than one shared point of failure.",
            "Trust boundaries and segmentation require explicit identities, actions, data, paths, owners, evidence, failure behavior, and denied alternatives.",
            "Authentication establishes fictional identity; authorization decides whether a specific action on a specific target is allowed.",
            "Visibility by design begins with fictional evidence questions and includes source health, time quality, context, privacy, access, retention, resilience, and confidence.",
            "Recovery is broader than backup or application availability and requires identity, data, dependencies, evidence, users, communication, closure, and owner acceptance.",
            "Secure defaults begin with minimum fictional capability and add only approved access, services, paths, data, privilege, and integrations.",
            "Architecture tradeoffs must compare fictional security, privacy, accessibility, availability, operations, cost, evidence, recovery, suppliers, and reversibility consistently.",
            "Effective-state validation is stronger than diagrams, policies, baselines, or intended configuration alone.",
            "Every CyberShield architecture artifact must remain fully fictional, defensive, non-operational, privacy-safe, and incapable of exposing real organizations or systems.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Module A2 Complete
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Return to the module homepage to review any lesson or return to the
            Advanced track before beginning Module A3.
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