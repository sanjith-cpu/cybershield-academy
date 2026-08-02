import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  FakeDashboardCard,
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/advanced-networking-defense`;
const previousLesson = `${modulePath}/advanced-network-defense-lab`;
const nextModule = `${trackPath}/detection-engineering`;

const testDomains = [
  {
    domain: "Defensive network architecture",
    lessons: "A4.1",
    focus:
      "Mission-driven zones, trust boundaries, identities, services, dependencies, evidence, management, failure behavior, and lifecycle ownership.",
    questionRange: "Questions 1–3",
  },
  {
    domain: "Segmentation and microsegmentation",
    lessons: "A4.2",
    focus:
      "Purpose-driven separation, least connectivity, identity-aware policy, east-west communication, blast radius, exceptions, and review triggers.",
    questionRange: "Questions 4–5",
  },
  {
    domain: "Firewall strategy and rule hygiene",
    lessons: "A4.3",
    focus:
      "Rule purpose, source, destination, identity, service, owner, evidence, expiration, shadowing, cleanup, validation, and rollback.",
    questionRange: "Questions 6–8",
  },
  {
    domain: "IDS/IPS and network visibility",
    lessons: "A4.4",
    focus:
      "Sensor placement, evidence limits, source health, alerts, tuning, prevention decisions, encrypted boundaries, and proportional response.",
    questionRange: "Questions 9–11",
  },
  {
    domain: "Secure remote access",
    lessons: "A4.5",
    focus:
      "Human and device identity, purpose, assignment, destinations, session evidence, supplier access, emergency access, revocation, and recovery.",
    questionRange: "Questions 12–13",
  },
  {
    domain: "Wireless defense",
    lessons: "A4.6",
    focus:
      "Managed, guest, service-device, administrative, supplier, event, and recovery classes with onboarding, ownership, policy, evidence, and offboarding.",
    questionRange: "Questions 14–15",
  },
  {
    domain: "Baselines and anomaly concepts",
    lessons: "A4.7",
    focus:
      "Expected behavior, peer groups, seasonality, change, maintenance, source health, anomaly interpretation, tuning, confidence, and impact.",
    questionRange: "Questions 16–18",
  },
  {
    domain: "DNS security concepts",
    lessons: "A4.8",
    focus:
      "Zones, records, resolvers, caching, policy, ownership, privacy, source health, unexpected resolution, change, failover, and recovery.",
    questionRange: "Questions 19–21",
  },
  {
    domain: "Network resilience and redundancy",
    lessons: "A4.9",
    focus:
      "Mission objectives, independent failure domains, capacity, health checks, degraded modes, failover, failback, reconciliation, and exercises.",
    questionRange: "Questions 22–24",
  },
  {
    domain: "Integrated network-defense decision",
    lessons: "A4.10",
    focus:
      "Evidence-supported findings, prioritization, corrective actions, phased implementation, residual risk, executive communication, and complete fictionalization.",
    questionRange: "Question 25",
  },
];

const finalReviewCards = [
  {
    title: "Architecture is an operating model",
    detail:
      "A fictional diagram documents intended zones and trust boundaries, but defenders still need implementation, policy, identity, evidence, source-health, ownership, exception, failure, and recovery validation.",
  },
  {
    title: "Authentication is not complete authorization",
    detail:
      "A fictional user, device, service, supplier, or administrator may authenticate successfully while destination, purpose, assignment, object, operation, time, and lifecycle remain unauthorized or unresolved.",
  },
  {
    title: "Connection does not prove safety",
    detail:
      "A fictional device joining wireless, a resolver returning an answer, a path becoming reachable, or a firewall allowing traffic does not prove correct class, destination, service state, business action, or harmless behavior.",
  },
  {
    title: "Alerts are observations",
    detail:
      "A fictional alert can support review, correlation, prioritization, or prevention, but it does not automatically prove compromise, intent, cause, scope, or impact.",
  },
  {
    title: "Source health changes confidence",
    detail:
      "Fictional connectivity, freshness, completeness, queue age, clock, schema, transformation, duplication, provenance, and blind periods should be evaluated separately.",
  },
  {
    title: "Anomalies require context",
    detail:
      "Fictional differences may reflect approved change, maintenance, seasonality, recovery, source-health problems, policy drift, service degradation, or a security-relevant condition.",
  },
  {
    title: "Redundancy must be independent",
    detail:
      "Fictional duplicate links, devices, resolvers, services, providers, locations, and people may share power, management, identity, DNS, monitoring, supplier, policy, or approval failure domains.",
  },
  {
    title: "Recovery exceeds connectivity",
    detail:
      "Fictional full recovery requires dependency restoration, evidence, service validation, queue and session reconciliation, cache review, emergency-access revocation, user communication, and closure.",
  },
];

const questions = [
  {
    question:
      "What is the strongest starting point for fictional defensive network architecture?",
    choices: [
      "Selecting as many security products as possible.",
      "Defining mission outcomes, users, services, data, identities, trust boundaries, dependencies, owners, evidence, failure behavior, and recovery.",
      "Drawing every device before understanding the service.",
      "Placing every internal system into one trusted zone.",
    ],
    answer: 1,
    explanation:
      "Professional architecture begins with mission and trust decisions. Technology and topology should support those decisions rather than define them automatically.",
  },
  {
    question:
      "A fictional architecture diagram shows a separate data zone. What does that prove?",
    choices: [
      "Only approved services can reach the data.",
      "The data is safe from every failure.",
      "The intended design includes separation, but effective policy, identity, application authorization, evidence, exceptions, and lifecycle still require validation.",
      "No administrative access exists.",
    ],
    answer: 2,
    explanation:
      "A diagram documents design intent. It does not prove that implementation or operating behavior matches that intent.",
  },
  {
    question:
      "Which fictional architecture decision best reduces blast radius?",
    choices: [
      "Allow every application to reach every internal destination.",
      "Group unrelated services together because they share one owner.",
      "Separate services by mission, trust, identity, data, communication, administration, evidence, and recovery needs.",
      "Remove all monitoring between zones.",
    ],
    answer: 2,
    explanation:
      "Purpose-driven separation limits how far one failure, error, stale identity, or policy decision can spread.",
  },
  {
    question:
      "What is the strongest purpose of fictional network segmentation?",
    choices: [
      "To create more diagrams.",
      "To reduce unnecessary trust and communication while preserving approved mission paths.",
      "To make every zone equally trusted.",
      "To replace identity and application authorization.",
    ],
    answer: 1,
    explanation:
      "Segmentation limits communication and blast radius, but it does not replace identity or application-level controls.",
  },
  {
    question:
      "A fictional service needs one application destination and approved DNS. Which policy best follows least connectivity?",
    choices: [
      "Allow the entire source zone to reach every internal zone.",
      "Allow the service identity to reach only the required application destination and approved DNS under documented conditions.",
      "Allow every destination temporarily and review later.",
      "Move the service into the administrative zone.",
    ],
    answer: 1,
    explanation:
      "Least connectivity limits the source, destination, purpose, service, identity, and conditions to what the mission requires.",
  },
  {
    question:
      "Which fictional firewall-rule description is strongest?",
    choices: [
      "Allow internal traffic.",
      "Permit application-service identity A from application zone A to notification-service group B for approved delivery operations, owned by the notification team, reviewed after service or architecture change, with evidence and rollback.",
      "Allow any service to the notification network.",
      "Permit temporary access with no expiration because the project is important.",
    ],
    answer: 1,
    explanation:
      "Strong firewall governance records source, destination, identity, service, purpose, owner, evidence, lifecycle, and review conditions.",
  },
  {
    question:
      "A fictional broad legacy firewall rule may support an undocumented dependency. What is the strongest response?",
    choices: [
      "Delete it immediately without review.",
      "Keep it forever because it might be needed.",
      "Mark it Conditional, validate service dependencies and usage evidence, design narrower replacements, stage the change, monitor outcomes, and retain rollback.",
      "Copy the rule into every zone.",
    ],
    answer: 2,
    explanation:
      "The response reduces risk without breaking an unknown mission dependency or treating uncertainty as permission for permanent broad access.",
  },
  {
    question:
      "Why are rule ownership and expiration important?",
    choices: [
      "They make firewall tables longer.",
      "They ensure temporary or changed communication has accountable purpose, review, recertification, removal, and closure.",
      "They prove the rule has never been misused.",
      "They replace policy validation.",
    ],
    answer: 1,
    explanation:
      "Ownership and lifecycle prevent temporary access, migrations, suppliers, and exceptions from becoming unreviewed permanent authority.",
  },
  {
    question:
      "What does a fictional IDS/IPS alert prove?",
    choices: [
      "A compromise definitely occurred.",
      "The source was malicious.",
      "A defined observation matched a detection condition and requires evidence-aware interpretation.",
      "The affected service must be disconnected immediately.",
    ],
    answer: 2,
    explanation:
      "Alerts are observations. Cause, intent, scope, impact, and response require supporting context and evidence.",
  },
  {
    question:
      "A fictional sensor reports Green connectivity, but its last event is twenty minutes old and queue age is rising. What is the strongest conclusion?",
    choices: [
      "Visibility is healthy because the sensor is connected.",
      "The underlying network is definitely quiet.",
      "The source is Degraded, and dependent conclusions should be limited until freshness and completeness are restored or alternate evidence is reviewed.",
      "The sensor was definitely attacked.",
    ],
    answer: 2,
    explanation:
      "Connectivity and evidence freshness are separate. Delayed evidence lowers confidence in what the source can prove.",
  },
  {
    question:
      "When is fictional automated prevention most appropriate?",
    choices: [
      "Whenever any alert appears.",
      "When the condition has strong evidence, bounded scope, acceptable false-positive risk, clear mission impact, rollback, source health, ownership, and validation.",
      "Only when no monitoring exists.",
      "When leadership wants zero alerts.",
    ],
    answer: 1,
    explanation:
      "Prevention should be proportional and evidence-based because incorrect blocking can create mission harm.",
  },
  {
    question:
      "A fictional supplier identity authenticates successfully through remote access. What remains to be authorized?",
    choices: [
      "Nothing; authentication grants full trust.",
      "Sponsor, purpose, assignment, device, destination, time, session, action, evidence, expiration, and revocation.",
      "Only the supplier company name.",
      "Only the network location.",
    ],
    answer: 1,
    explanation:
      "Authentication identifies a subject. Remote-access authorization still requires purpose, context, destination, session, and lifecycle decisions.",
  },
  {
    question:
      "What is strongest for fictional emergency administrative access?",
    choices: [
      "A permanent shared administrator account.",
      "A separate approved identity, managed device, limited destinations, independent approval, time limit, session evidence, change record, revocation, and retrospective review.",
      "Normal employee access with a verbal request.",
      "Broad access with monitoring disabled.",
    ],
    answer: 1,
    explanation:
      "Emergency access should be bounded, accountable, observable, temporary, and fully revoked after the approved purpose ends.",
  },
  {
    question:
      "Which fictional wireless design is strongest for service devices?",
    choices: [
      "Place every service device in the employee class.",
      "Use owned device identities, a dedicated class, narrow destinations, monitoring, support, replacement, expiration, and retirement.",
      "Allow peer communication with every nearby device.",
      "Avoid documenting the devices because no human signs in.",
    ],
    answer: 1,
    explanation:
      "Service devices need explicit ownership, purpose, class, communication, support, evidence, and lifecycle controls.",
  },
  {
    question:
      "An unrecognized fictional device appears in a service-device wireless class. What is the strongest initial response?",
    choices: [
      "Declare it malicious.",
      "Publish the device identity.",
      "Mark it Unvalidated, preserve evidence, validate inventory, owner, purpose, onboarding, destinations, source health, replacement history, and support context.",
      "Ignore it because the class is limited.",
    ],
    answer: 2,
    explanation:
      "Unexpected evidence supports validation. It does not establish intent or justify public identification.",
  },
  {
    question:
      "What is the strongest definition of a fictional network baseline?",
    choices: [
      "A permanent list of every allowed connection.",
      "An evidence-supported model of expected behavior for defined identities, services, destinations, times, states, peer groups, and mission conditions.",
      "Proof that repeated behavior is safe.",
      "A replacement for firewall policy.",
    ],
    answer: 1,
    explanation:
      "Baselines support comparison and anomaly review. They do not define authorization or prove safety.",
  },
  {
    question:
      "A fictional service communicates with a new destination after an approved deployment. What is the strongest conclusion?",
    choices: [
      "The service is compromised.",
      "The new destination should be learned automatically.",
      "A behavior difference occurred; deployment expectations, destination purpose, policy, owner, source health, application outcome, and expiration require review.",
      "The anomaly should be closed because a change existed.",
    ],
    answer: 2,
    explanation:
      "Approved change may explain a difference, but implementation and impact still require evidence.",
  },
  {
    question:
      "Why can automatic baseline learning be dangerous?",
    choices: [
      "Because baselines should never change.",
      "Because persistent policy drift, stale exceptions, source-health problems, or unsafe behavior may become normalized without validation.",
      "Because every anomaly is harmful.",
      "Because owners should not review behavior.",
    ],
    answer: 1,
    explanation:
      "Baseline updates should occur only after intended purpose, authorization, evidence, and residual risk are understood.",
  },
  {
    question:
      "A fictional DNS resolver returns an answer successfully. What does that prove?",
    choices: [
      "The destination is authorized and healthy.",
      "Every approved resolver and cache has the same answer.",
      "The resolver returned an answer under the available conditions; authoritative state, cache freshness, policy, service authorization, source health, and application outcome still require validation.",
      "The service cannot fail.",
    ],
    answer: 2,
    explanation:
      "Resolution availability is only one layer of DNS and service assurance.",
  },
  {
    question:
      "Two fictional approved resolvers return different destination categories for one service name. What is the strongest response?",
    choices: [
      "Assume one was manipulated.",
      "Ignore the difference because both are approved.",
      "Validate audience policy, authoritative version, cache state, temporary aliases, policy versions, source health, owner intent, and application outcomes.",
      "Delete every DNS record.",
    ],
    answer: 2,
    explanation:
      "Different answers can result from intended views, caches, changes, policy drift, or evidence problems. Context is required.",
  },
  {
    question:
      "Why should fictional DNS evidence be minimized?",
    choices: [
      "Because DNS evidence has no defensive value.",
      "Because exact requester and naming activity can reveal sensitive user behavior and internal architecture beyond what an approved defender question requires.",
      "Because every DNS event should be public.",
      "Because privacy is unrelated to network defense.",
    ],
    answer: 1,
    explanation:
      "Purpose-based minimization preserves useful evidence while reducing privacy, access, retention, and trust risk.",
  },
  {
    question:
      "Two fictional backup links use different devices but share provider, power, DNS, identity, and management. What is the strongest conclusion?",
    choices: [
      "They are fully independent.",
      "They provide some component redundancy but share major correlated failure domains.",
      "They guarantee continuous service.",
      "They require no exercise.",
    ],
    answer: 1,
    explanation:
      "Resilience depends on actual dependency independence rather than duplicate labels or devices.",
  },
  {
    question:
      "A fictional alternate path restores read access but cannot support peak updates and reporting. What is the strongest response?",
    choices: [
      "Keep every feature active until the path overloads.",
      "Declare full recovery.",
      "Enter an approved degraded mode that preserves critical reads and priority updates, queues or pauses lower-priority work, monitors capacity, and continues recovery.",
      "Open broad administrative access.",
    ],
    answer: 2,
    explanation:
      "Graceful degradation preserves the most important mission outcomes within real capacity limits.",
  },
  {
    question:
      "When is fictional failback ready?",
    choices: [
      "As soon as the primary link becomes Green.",
      "After primary stability, dependency readiness, queue and session reconciliation, DNS and cache review, policy validation, source health, approval, phased return, observation, and rollback readiness.",
      "Before emergency roles are revoked.",
      "Whenever the alternate path is inconvenient.",
    ],
    answer: 1,
    explanation:
      "Failback is a controlled change requiring both technical and business-state readiness.",
  },
  {
    question:
      "Which statement best represents professional fictional network-defense judgment?",
    choices: [
      "The presence of firewalls, monitoring, DNS, remote access, and backup paths proves strong assurance.",
      "Every unknown condition should be removed immediately.",
      "Assurance should reflect integrated evidence, source health, ownership, identity, policy, DNS, baselines, capacity, recovery, residual risk, validation, and honest uncertainty.",
      "Only the largest statistical anomaly matters.",
    ],
    answer: 2,
    explanation:
      "Professional judgment integrates control design, effective behavior, evidence quality, mission impact, lifecycle, and uncertainty rather than relying on technology presence or one metric.",
  },
];

const scoreBands = [
  {
    range: "23–25 correct",
    label: "Advanced Mastery",
    meaning:
      "You can integrate architecture, policy, identity, visibility, DNS, resilience, evidence, and recovery with strong professional judgment.",
    nextStep:
      "Continue to A5 Detection Engineering and preserve the same evidence-aware, fictional, defensive standard.",
  },
  {
    range: "20–22 correct",
    label: "Strong Readiness",
    meaning:
      "You understand the major A4 concepts and can apply them in most fictional defensive scenarios.",
    nextStep:
      "Review the explanations for missed questions and revisit the matching lesson sections before A5.",
  },
  {
    range: "16–19 correct",
    label: "Developing Integration",
    meaning:
      "You understand several individual controls but need stronger integration across evidence, identity, DNS, source health, and recovery.",
    nextStep:
      "Revisit A4.4, A4.7, A4.8, A4.9, and A4.10, then retake the module test.",
  },
  {
    range: "0–15 correct",
    label: "Rebuild the Foundation",
    meaning:
      "Important architecture, authorization, evidence, lifecycle, and resilience ideas need additional review.",
    nextStep:
      "Return to the A4 module homepage and review the lessons in sequence before retaking the test.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A4
      </Link>

      <Link
        href={nextModule}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module: A5
      </Link>
    </div>
  );
}

export default function AdvancedNetworkingDefenseModuleTestPage() {
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
              Module A4
            </span>
            <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-yellow-100">
              25 Questions
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Advanced Networking Defense Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A4 Module Test: Advanced Networking Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate mastery of defensive network architecture,
            segmentation, firewall governance, IDS/IPS visibility, secure remote
            access, wireless defense, network baselines, DNS security,
            resilience, evidence quality, recovery, and professional defensive
            decision-making.
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
            "I completed or reviewed A4.1 through A4.10.",
            "I will answer each question before revealing the correct response and explanation.",
            "I understand that this assessment uses only fictional, defensive, authorized, and non-operational scenarios.",
            "I will distinguish authentication, authorization, connection, service state, evidence, and business outcome.",
            "I will not treat an alert, anomaly, unknown device, stale record, or failed health check as automatic proof of malicious intent.",
            "I will use evidence quality, source health, mission impact, lifecycle, recovery, and uncertainty in my decisions.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Rules"
          title="How to Complete the A4 Module Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Answer first",
                "Choose your response before revealing the correct answer. The hidden explanation is part of the learning process.",
              ],
              [
                "Use integrated reasoning",
                "Look beyond one technology or alert. Consider identity, purpose, policy, source health, service state, impact, recovery, and lifecycle.",
              ],
              [
                "Preserve uncertainty",
                "Select the response that uses evidence responsibly and avoids unsupported claims about compromise, intent, cause, or scope.",
              ],
              [
                "Prioritize mission safety",
                "Prefer bounded, reversible, validated actions that protect users and services without creating uncontrolled trust or disruption.",
              ],
              [
                "Score honestly",
                "Count only questions answered correctly before revealing the explanation.",
              ],
              [
                "Review missed domains",
                "Use the domain map and score guidance to revisit specific lessons before continuing to A5.",
              ],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Coverage Map"
          title="Every A4 Lesson Is Assessed"
        >
          <div className="grid gap-5">
            {testDomains.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-purple-100">
                    {item.lessons}
                  </span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                    {item.questionRange}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {item.domain}
                  </h3>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{item.focus}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Final Review"
          title="Eight Ideas to Keep in Mind"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {finalReviewCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-emerald-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <FakeDashboardCard
          title="Fake A4 Assessment Dashboard"
          subtitle="Fictional assessment coverage and readiness indicators for this module test."
          metrics={[
            {
              label: "Questions",
              value: "25",
              note: "Every question includes four choices and a hidden answer explanation.",
            },
            {
              label: "A4 lessons assessed",
              value: "10 / 10",
              note: "The test covers architecture through the integrated network-defense lab.",
            },
            {
              label: "Recommended mastery score",
              value: "23+",
              note: "A score of 23–25 indicates strong integrated readiness for A5 Detection Engineering.",
            },
          ]}
        />

        <MiniQuiz
          title="A4 Module Test: 25 Questions"
          questions={questions}
        />

        <SectionCard
          eyebrow="Score Interpretation"
          title="What Your Result Means"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {scoreBands.map((band) => (
              <article
                key={band.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                    {band.range}
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {band.label}
                  </h3>
                </div>

                <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4 text-blue-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                    Meaning
                  </p>
                  <p className="mt-2 text-sm leading-6">{band.meaning}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Recommended next step
                  </p>
                  <p className="mt-2 text-sm leading-6">{band.nextStep}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="A4 Mastery Checklist"
          items={[
            "I can explain fictional network architecture through mission, zones, trust boundaries, identities, services, dependencies, evidence, failure, and recovery.",
            "I can design fictional segmentation and microsegmentation around purpose, identity, least connectivity, blast radius, ownership, and lifecycle.",
            "I can evaluate fictional firewall rules through source, destination, service, identity, purpose, owner, evidence, expiration, validation, and rollback.",
            "I can interpret fictional IDS/IPS alerts and visibility without treating observations as proof of compromise or intent.",
            "I can design fictional remote access using human identity, device identity, purpose, assignment, destinations, session evidence, expiration, revocation, and emergency controls.",
            "I can separate fictional wireless users and devices into managed, guest, service-device, administrative, supplier, event, and recovery classes.",
            "I can build fictional baselines using identities, services, destinations, timing, volume, peer groups, change, seasonality, source health, and recovery states.",
            "I can evaluate fictional DNS through zones, records, resolvers, caching, policy, ownership, privacy, source health, change, and recovery.",
            "I can evaluate fictional resilience through mission outcomes, failure domains, diversity, capacity, degraded modes, failover, reconciliation, failback, and exercises.",
            "I can write fictional findings with observation, evidence, alternatives, confidence, scope, impact, priority, action, owner, completion criteria, residual risk, and review triggers.",
            "I can design phased fictional corrective actions with validation, rollback, support, communication, maintenance, and executive reporting.",
            "I can keep every network-defense artifact completely fictional, defensive, authorized, non-operational, privacy-safe, and suitable for public learning.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Strong network defense begins with mission outcomes, identities, trust boundaries, services, dependencies, and accountable ownership.",
            "Segmentation and firewall policy should preserve approved communication while reducing unnecessary trust and blast radius.",
            "Authentication, connection, name resolution, and path availability do not automatically prove authorization, service health, or correct business outcomes.",
            "Alerts and anomalies are observations that require source health, context, alternatives, confidence, scope, impact, and proportional response.",
            "Remote and wireless access require complete identity, device, purpose, destination, session, support, exception, revocation, and lifecycle governance.",
            "Baselines should represent expected variation and operating states without automatically learning every observed behavior.",
            "DNS requires governance of zones, records, resolvers, caches, policy, privacy, evidence, change, resilience, and recovery.",
            "Redundancy becomes resilience only when alternatives have sufficient independence, capacity, health validation, degraded-mode planning, and recovery evidence.",
            "Failover, degraded operation, recovery, reconciliation, failback, and closure are separate defensive decisions.",
            "Every CyberShield assessment and portfolio artifact must remain fully fictional, ethical, defensive, non-operational, and incapable of exposing real systems or people.",
          ]}
        />

        <SectionCard
          eyebrow="Module Completion"
          title="Advanced Networking Defense Complete"
        >
          <p className="leading-8">
            You have now completed the A4 homepage, all ten lessons, the
            Advanced Network Defense Lab, and the 25-question module test. Your
            next module is A5 Detection Engineering.
          </p>

          <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
            Before continuing, record your score, the questions you missed, the
            A4 lessons connected to those questions, one concept that changed
            your defensive thinking, and one fictional portfolio artifact you
            are most prepared to create.
          </div>

          <div className="mt-6">
            <Navigation />
          </div>
        </SectionCard>
      </div>

      <Footer />
    </main>
  );
}