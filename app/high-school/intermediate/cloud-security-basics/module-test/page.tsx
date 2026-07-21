import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/cloud-security-basics`;
const previousLesson = `${modulePath}/cloud-security-basics-lab`;

const questions = [
  {
    "question": "What does the fictional cloud shared-responsibility model explain?",
    "choices": [
      "Which security, configuration, monitoring, data, identity, recovery, and incident duties belong to the provider, customer, or both.",
      "That the provider owns every security decision.",
      "That the customer owns the provider's physical facilities.",
      "That managed services require no customer controls."
    ],
    "answer": 0,
    "explanation": "Shared responsibility defines control ownership and handoffs across provider-managed and customer-managed layers."
  },
  {
    "question": "Which statement about a fictional managed cloud service is strongest?",
    "choices": [
      "The provider manages documented service components, while the customer still owns choices such as identities, data, configuration, logging, and business use.",
      "The provider automatically protects every customer configuration.",
      "The customer has no incident-response duties.",
      "Managed means the service cannot be misconfigured."
    ],
    "answer": 0,
    "explanation": "Managed services reduce some operational duties but do not remove customer governance and configuration responsibilities."
  },
  {
    "question": "What should a fictional responsibility matrix include?",
    "choices": [
      "The control, provider duty, customer duty, shared handoff, owner, evidence, escalation path, and unresolved gap.",
      "Only the provider name.",
      "Only a list of cloud products.",
      "Only the final incident conclusion."
    ],
    "answer": 0,
    "explanation": "A complete matrix makes control ownership, evidence, and handoffs reviewable."
  },
  {
    "question": "What is fictional effective cloud access?",
    "choices": [
      "The permission that remains after direct roles, groups, resource policies, guardrails, explicit denies, session conditions, delegation, and application rules are combined.",
      "Only the directly assigned role.",
      "Only the role name shown in one dashboard.",
      "Every action listed in provider documentation."
    ],
    "answer": 0,
    "explanation": "Cloud permission should be evaluated across all interacting authorization layers."
  },
  {
    "question": "Which conclusion about a broad fictional service role is best supported?",
    "choices": [
      "The role exceeds the documented business need and should be reviewed, but assignment alone does not prove that the extra permission was used.",
      "Every listed permission was used.",
      "The service identity acted maliciously.",
      "The provider caused a data breach."
    ],
    "answer": 0,
    "explanation": "Capability supports a least-privilege finding, not automatic evidence of use, intent, or impact."
  },
  {
    "question": "What is the purpose of fictional just-in-time privileged access?",
    "choices": [
      "Activate powerful access only for an approved task and limited time, then remove it automatically while preserving monitoring and review.",
      "Keep administrator access permanently active.",
      "Avoid recording privileged sessions.",
      "Replace emergency-access planning."
    ],
    "answer": 0,
    "explanation": "Just-in-time access reduces standing privilege while preserving approved administration."
  },
  {
    "question": "What should happen to a fictional partner role after its project ends?",
    "choices": [
      "Review the sponsor, business purpose, scope, expiration, activity, and either remove or formally renew the access.",
      "Leave it active indefinitely.",
      "Delete all evidence that it existed.",
      "Assume the partner still needs access."
    ],
    "answer": 0,
    "explanation": "External access requires current sponsorship, need, scope, ownership, and expiration."
  },
  {
    "question": "What should a fictional cloud data inventory include?",
    "choices": [
      "Primary storage, replicas, versions, snapshots, backups, exports, caches, logs, archives, owners, classifications, and dependencies.",
      "Only the largest database.",
      "Only publicly visible objects.",
      "Only the storage dashboard total."
    ],
    "answer": 0,
    "explanation": "Cloud data protection applies to every meaningful copy and processing location."
  },
  {
    "question": "What does fictional encryption enabled most directly support?",
    "choices": [
      "That a documented encryption control is configured within its stated boundary.",
      "That every copy is protected end to end.",
      "That key ownership and recovery are correct.",
      "That no identity can access the data."
    ],
    "answer": 0,
    "explanation": "Encryption status must still be correlated with copies, keys, permissions, network paths, and recovery."
  },
  {
    "question": "Why is fictional versioning not automatically a complete backup?",
    "choices": [
      "Versions may share the same service, identity, retention, deletion, account, or failure boundary as the primary data.",
      "Versioning never helps recovery.",
      "Backups cannot contain versions.",
      "Only databases require recovery planning."
    ],
    "answer": 0,
    "explanation": "Versioning is useful but may not provide independent recovery protection."
  },
  {
    "question": "What should a fictional restore test prove?",
    "choices": [
      "That approved data can be recovered using available identities, keys, targets, procedures, monitoring, and documented recovery objectives.",
      "Only that a backup job completed.",
      "That no future failure can occur.",
      "That retention is unnecessary."
    ],
    "answer": 0,
    "explanation": "Restore testing validates practical recoverability, not just backup creation."
  },
  {
    "question": "What determines fictional effective network reachability?",
    "choices": [
      "Addresses, routes, return paths, gateways, security rules, endpoints, service policies, identities, conditions, and application authorization together.",
      "Only one inbound rule.",
      "Only a public IP address.",
      "Only a DNS record."
    ],
    "answer": 0,
    "explanation": "Cloud reachability is the result of several network and service-control layers."
  },
  {
    "question": "What does a fictional private endpoint prove?",
    "choices": [
      "That a private service path exists within the documented configuration.",
      "That no wider route exists.",
      "That the service cannot have another endpoint.",
      "That every request is authorized."
    ],
    "answer": 0,
    "explanation": "A private endpoint should be compared with alternate routes, resource policies, and service settings."
  },
  {
    "question": "What can a fictional network-flow record most directly support?",
    "choices": [
      "A recorded network relationship between the listed source and destination under the documented conditions.",
      "The complete payload contents.",
      "Human intent.",
      "Confirmed data disclosure."
    ],
    "answer": 0,
    "explanation": "Flow evidence describes a network relationship, not the complete application meaning or intent."
  },
  {
    "question": "Why should fictional cloud egress be reviewed even when inbound access is narrow?",
    "choices": [
      "A workload may still reach unnecessary destinations, increasing dependency, exposure, and incident scope.",
      "Outbound traffic is always harmless.",
      "Only public services use outbound connections.",
      "Egress cannot affect data protection."
    ],
    "answer": 0,
    "explanation": "Outbound capability can expand practical risk and should match documented business dependencies."
  },
  {
    "question": "What must be checked before using missing fictional cloud events as evidence?",
    "choices": [
      "Expected event generation, enablement, scope, delivery, parsing, retention, access, ownership, and source health.",
      "Only the dashboard color.",
      "Only the alert severity.",
      "Only whether one analyst found an event."
    ],
    "answer": 0,
    "explanation": "Absence is meaningful only within a verified evidence boundary."
  },
  {
    "question": "Why should fictional event time and receipt time remain separate?",
    "choices": [
      "They describe when activity occurred and when the monitoring system received the record, which may differ because of delay.",
      "They are always identical.",
      "Receipt time always replaces event time.",
      "Only dashboard display time matters."
    ],
    "answer": 0,
    "explanation": "Keeping both values prevents incorrect timeline conclusions when delivery is delayed."
  },
  {
    "question": "What does a fictional high-severity cloud alert prove?",
    "choices": [
      "That a high-priority detection condition matched and requires investigation, not that an incident or impact is already confirmed.",
      "That malicious activity definitely occurred.",
      "That immediate destructive containment is always required.",
      "That the alert source is complete."
    ],
    "answer": 0,
    "explanation": "Severity prioritizes response but does not replace evidence review."
  },
  {
    "question": "What makes fictional detection suppression defensible?",
    "choices": [
      "Narrow documented conditions, preserved evidence, important exceptions, ownership, review, validation, and version history.",
      "Disabling every noisy rule.",
      "Deleting the underlying events.",
      "Suppressing all privileged activity during maintenance."
    ],
    "answer": 0,
    "explanation": "Suppression should reduce repetitive noise without hiding meaningful risk."
  },
  {
    "question": "What is fictional configuration drift?",
    "choices": [
      "A difference between the approved cloud security baseline and the current effective configuration.",
      "Any cloud alert.",
      "Any provider maintenance action.",
      "Only a publicly reachable resource."
    ],
    "answer": 0,
    "explanation": "Drift is measured by comparing expected and effective states."
  },
  {
    "question": "What should happen before accepting a fictional posture finding as accurate?",
    "choices": [
      "Validate effective state, inheritance, defaults, exceptions, source health, ownership, business need, compensating controls, and supporting evidence.",
      "Trust the automated severity label.",
      "Change the resource immediately.",
      "Assume the rule cannot produce false positives."
    ],
    "answer": 0,
    "explanation": "Posture tools identify conditions that still require context and evidence validation."
  },
  {
    "question": "What makes a fictional cloud exception defensible?",
    "choices": [
      "A clear baseline, business reason, narrow scope, owner, compensating controls, residual risk, expiration, review, removal plan, and approval.",
      "A comment saying temporary.",
      "No expiration date.",
      "A broad verbal approval with no evidence."
    ],
    "answer": 0,
    "explanation": "Exceptions should be controlled and reviewable risk decisions."
  },
  {
    "question": "What should happen before a major fictional cloud containment action?",
    "choices": [
      "Confirm the supported risk, preserve evidence, map dependencies, identify authority, define validation, preserve rollback, and enable monitoring.",
      "Delete the affected resource immediately.",
      "Disable every identity in the tenant.",
      "Assume the provider owns the entire response."
    ],
    "answer": 0,
    "explanation": "Cloud containment should reduce risk without avoidable evidence loss, disruption, or loss of recovery options."
  },
  {
    "question": "What is the strongest interpretation when a staged fictional role reduction breaks an approved workflow?",
    "choices": [
      "The test revealed an undocumented dependency, so the team should roll back, map the dependency, redesign the least-privilege path, and retest.",
      "The application is malicious.",
      "The original security risk was not real.",
      "The broad role should remain permanent without review."
    ],
    "answer": 0,
    "explanation": "A failed staged test is useful evidence for safer dependency-aware redesign."
  },
  {
    "question": "Which final conclusion is best supported by the fictional Northbridge Cloud Security Basics case?",
    "choices": [
      "The evidence supports combined customer-controlled cloud gaps and one unsafe change event, but no confirmed compromise, disclosure, data loss, or broad outage; closure requires restored monitoring, validated remediation, residual-risk approval, and follow-up review.",
      "The provider caused a confirmed breach.",
      "The migration partner stole confidential data.",
      "No meaningful risk existed because compromise was not confirmed."
    ],
    "answer": 0,
    "explanation": "The strongest conclusion recognizes serious control risk while preserving the supported impact and evidence limits."
  }
];

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

export default function CloudSecurityBasicsModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.11),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-200">
              Module I13
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              25-Question Module Test
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13 Cloud Security Basics Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of fictional shared responsibility,
            cloud identities, least privilege, storage, data protection,
            networking, service exposure, logging, detection, configuration
            drift, incident response, recovery, validation, communication, and
            portfolio safety.
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
            "I completed or reviewed I13.1 through I13.8.",
            "I will answer every question before revealing the explanation.",
            "I understand that all providers, organizations, accounts, identities, resources, networks, storage, databases, logs, alerts, and events in this test are fictional.",
            "I will use only defensive, authorized, privacy-aware, and evidence-based reasoning.",
            "I will review every missed question and update my fictional cloud-security portfolio package before marking the module complete.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Assessment Rules
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Complete All 25 Questions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
              <p className="font-black text-blue-100">Answer first</p>
              <p className="mt-2 text-sm leading-6">
                Select the strongest answer before opening the explanation.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="font-black text-emerald-100">Target score</p>
              <p className="mt-2 text-sm leading-6">
                Score at least 20 out of 25 before marking Module I13 complete.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="font-black text-yellow-100">
                Use bounded reasoning
              </p>
              <p className="mt-2 text-sm leading-6">
                Prefer answers that preserve responsibility boundaries,
                business need, source health, alternatives, confidence,
                limitations, validation, and rollback.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="font-black text-purple-100">
                Review missed concepts
              </p>
              <p className="mt-2 text-sm leading-6">
                Return to the matching lesson and revise the related fictional
                portfolio artifact after every missed question.
              </p>
            </div>
          </div>
        </section>

        <MiniQuiz
          title="I13 Module Test: Cloud Security Basics"
          questions={questions}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Score Guide
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Interpret Your Module-Test Result
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xl font-black text-emerald-100">23–25</p>
              <p className="mt-2 text-sm leading-6">
                Excellent mastery. Your cloud evidence reasoning, control
                ownership, and remediation decisions are consistently
                professional.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-xl font-black text-cyan-100">20–22</p>
              <p className="mt-2 text-sm leading-6">
                Module standard achieved. Review missed questions and improve
                the matching portfolio sections.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xl font-black text-yellow-100">16–19</p>
              <p className="mt-2 text-sm leading-6">
                Developing mastery. Revisit the weakest lessons and retake the
                test after revising your cloud-security package.
              </p>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-xl font-black text-red-100">0–15</p>
              <p className="mt-2 text-sm leading-6">
                Rebuild the foundations. Review I13.1 through I13.8 in order
                before attempting the module test again.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Mastery Review
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Connect Missed Questions to the Correct Lesson
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "I13.1",
                "Shared responsibility, cloud service models, deployment choices, control ownership, evidence, and handoffs",
              ],
              [
                "I13.2",
                "Human and service identities, roles, policies, effective access, least privilege, lifecycle, privileged access, and reviews",
              ],
              [
                "I13.3",
                "Storage, databases, classification, encryption, keys, versioning, retention, backup, restore, and data protection",
              ],
              [
                "I13.4",
                "Virtual networks, subnets, routes, gateways, endpoints, segmentation, egress, reachability, DNS, and flow evidence",
              ],
              [
                "I13.5",
                "Cloud audit sources, source health, event and receipt time, detections, alerts, tuning, suppression, and bounded findings",
              ],
              [
                "I13.6",
                "Secure baselines, effective state, configuration drift, posture findings, exceptions, risk ranking, remediation, and closure",
              ],
              [
                "I13.7",
                "Cloud incident roles, evidence preservation, scope, containment, provider boundaries, rollback, recovery, and communication",
              ],
              [
                "I13.8",
                "Integrated cloud case reasoning, combined risk, failed validation, ordered action plans, recovery, closure, and portfolio safety",
              ],
            ].map(([lesson, focus]) => (
              <div
                key={lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="font-black text-cyan-100">{lesson}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <DefenderChecklist
          title="Module I13 Mastery Checklist"
          items={[
            "I can assign fictional cloud security duties across provider, customer, application, identity, data, network, monitoring, recovery, and approval owners.",
            "I can calculate fictional effective access using roles, groups, resource policies, guardrails, denies, sessions, delegation, and application controls.",
            "I can review fictional human, service, partner, privileged, and emergency identities through ownership, least privilege, lifecycle, monitoring, and expiration.",
            "I can inventory fictional primary data, versions, replicas, snapshots, backups, exports, logs, caches, and archives.",
            "I can evaluate fictional encryption, key ownership, key use, network paths, versioning, retention, backup coverage, and restore readiness.",
            "I can calculate fictional effective network reachability using routes, return paths, rules, endpoints, service policies, identities, and application authorization.",
            "I can validate fictional cloud log sources through expected events, enablement, delivery, delay, parsing, retention, access, ownership, and limitations.",
            "I can treat fictional alerts and posture findings as investigation questions rather than automatic proof of incidents or impact.",
            "I can compare fictional secure baselines with effective configuration and identify combined drift across identity, storage, network, logging, and recovery.",
            "I can review fictional exceptions using business reason, narrow scope, compensating controls, residual risk, expiration, approval, and removal plans.",
            "I can plan fictional containment and remediation with authority, evidence preservation, dependencies, staged validation, rollback, monitoring, and communication.",
            "I can validate fictional recovery and closure through safe state, service function, identities, data, paths, logs, owners, residual risk, and lessons learned.",
            "I can distinguish capability, reachability, observed activity, control gap, potential impact, confirmed impact, compromise, and disclosure.",
            "I will never use or expose real cloud tenants, accounts, identities, roles, resources, networks, storage, databases, keys, logs, alerts, provider cases, owners, or private data in these labs.",
          ]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Review your fictional Northbridge Cloud Security Basics Portfolio Package. Confirm that it includes a case charter, shared-responsibility matrix, cloud architecture and trust-boundary map, asset and dependency inventory, identity and effective-access review, data classification and storage map, encryption and key-responsibility register, network reachability and segmentation matrix, logging source and source-health register, detection specifications, secure-baseline and drift review, exception register, incident action log, ordered remediation plan, validation and rollback records, recovery and closure package, technical report, leadership summary, reflection, and portfolio-safety statement."
          tips={[
            "Remove or replace anything that resembles real cloud architecture, identities, providers, logs, or private records.",
            "Confirm that every finding links to exact fictional parent evidence and preserves source-health limits.",
            "Preserve alternatives, confidence, limitations, failed tests, rollback, residual risk, and owner decisions.",
            "Make the final package understandable to both technical and nontechnical reviewers.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Cloud security begins with clear shared-responsibility boundaries and named control owners.",
            "Effective access and effective reachability require analysis across several interacting policy and network layers.",
            "Cloud data protection covers every meaningful copy, key decision, retention rule, backup scope, and recovery path.",
            "Alerts, severity labels, posture findings, and broad capabilities do not independently prove incidents, intent, or impact.",
            "Source health determines how strongly cloud logs can support both positive and negative conclusions.",
            "Configuration drift should be prioritized through practical exposure, privilege, data sensitivity, reachability, business effect, confidence, and combined risk.",
            "Cloud containment and remediation should be authorized, staged, reversible, validated, monitored, and dependency-aware.",
            "Portfolio artifacts should use fully fictional cloud evidence and never expose real accounts, architecture, identities, data, logs, providers, or private records.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Review or Return to the Intermediate Track
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