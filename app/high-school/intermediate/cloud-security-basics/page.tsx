import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/cloud-security-basics`;

const lessons = [
  {
    "number": "I13.1",
    "title": "Shared Responsibility and Cloud Security Foundations",
    "slug": "shared-responsibility-and-cloud-security-foundations",
    "summary": "Understand fictional cloud service models, shared responsibility, trust boundaries, owners, assets, data flows, regions, accounts, subscriptions, projects, and the difference between provider controls and customer responsibilities.",
    "focus": [
      "Cloud service and deployment models",
      "Provider, customer, and shared responsibilities",
      "Assets, owners, trust boundaries, and data flows",
      "Authorization, privacy, scope, and safe evidence use"
    ],
    "lab": "Build a fictional shared-responsibility and cloud-asset map for the Northbridge Learning Cloud."
  },
  {
    "number": "I13.2",
    "title": "Cloud Identities, Roles, and Least Privilege",
    "slug": "cloud-identities-roles-and-least-privilege",
    "summary": "Analyze fictional users, service identities, roles, permissions, sessions, temporary access, federation, privileged paths, approvals, and access-review evidence without accessing any real cloud account.",
    "focus": [
      "Users, groups, roles, and service identities",
      "Least privilege and separation of duties",
      "Temporary access and privileged workflows",
      "Access reviews, ownership, and evidence limits"
    ],
    "lab": "Create a fictional cloud identity-and-access review with roles, risks, owners, evidence, and remediation decisions."
  },
  {
    "number": "I13.3",
    "title": "Secure Cloud Storage and Data Protection",
    "slug": "secure-cloud-storage-and-data-protection",
    "summary": "Study fictional object storage, databases, backups, encryption concepts, keys, versioning, retention, sharing, public access, classification, recovery, and data-lifecycle controls.",
    "focus": [
      "Storage permissions and public-access prevention",
      "Encryption and key-management concepts",
      "Versioning, backup, retention, and recovery",
      "Classification, minimization, and lifecycle decisions"
    ],
    "lab": "Review a fictional storage posture and design a safer data-protection plan."
  },
  {
    "number": "I13.4",
    "title": "Cloud Networking and Service Exposure",
    "slug": "cloud-networking-and-service-exposure",
    "summary": "Interpret fictional virtual networks, subnets, routes, gateways, security rules, private endpoints, load balancers, service exposure, segmentation, and network evidence.",
    "focus": [
      "Virtual networks, subnets, routes, and gateways",
      "Inbound and outbound access boundaries",
      "Private services and public exposure",
      "Segmentation, dependency mapping, and validation"
    ],
    "lab": "Build a fictional cloud network exposure map and recommend defensive changes."
  },
  {
    "number": "I13.5",
    "title": "Cloud Logging, Monitoring, and Detection",
    "slug": "cloud-logging-monitoring-and-detection",
    "summary": "Use fictional control-plane, identity, storage, network, application, configuration, and billing records to identify meaningful signals, source-health limits, and detection gaps.",
    "focus": [
      "Cloud audit, identity, storage, and network logs",
      "Monitoring coverage and source health",
      "Detection logic and false-positive control",
      "Timeline correlation and evidence lineage"
    ],
    "lab": "Create a fictional cloud monitoring coverage matrix and investigate a supplied alert."
  },
  {
    "number": "I13.6",
    "title": "Cloud Configuration and Misconfiguration Defense",
    "slug": "cloud-configuration-and-misconfiguration-defense",
    "summary": "Evaluate fictional cloud configuration drift, policy violations, exposed services, broad permissions, disabled logging, missing encryption, unmanaged resources, and change-control evidence.",
    "focus": [
      "Secure baselines and configuration drift",
      "Misconfiguration evidence and prioritization",
      "Policy, ownership, exception, and remediation",
      "Validation, rollback, monitoring, and closure"
    ],
    "lab": "Prioritize a fictional cloud posture backlog using evidence, exposure, impact, ownership, and safe validation."
  },
  {
    "number": "I13.7",
    "title": "Cloud Incident Response and Recovery",
    "slug": "cloud-incident-response-and-recovery",
    "summary": "Coordinate fictional cloud containment, identity protection, evidence preservation, configuration correction, recovery, validation, communication, and lessons learned across shared owners.",
    "focus": [
      "Cloud-specific incident roles and escalation",
      "Identity, storage, network, and service containment",
      "Evidence preservation and provider coordination",
      "Recovery, validation, communication, and review"
    ],
    "lab": "Build a fictional cloud incident action plan with owners, approvals, evidence, rollback, and closure criteria."
  },
  {
    "number": "I13.8",
    "title": "Cloud Security Basics Lab",
    "slug": "cloud-security-basics-lab",
    "summary": "Integrate shared responsibility, identity, data protection, networking, logging, configuration defense, incident response, evidence reasoning, reporting, and portfolio-safe communication.",
    "focus": [
      "End-to-end fictional cloud security review",
      "Evidence-based risk and control decisions",
      "Owner, timeline, validation, and communication",
      "Final cloud security portfolio artifact"
    ],
    "lab": "Complete the fictional Northbridge Learning Cloud integrated defense case."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the cloud boundary",
    "detail": "Identify the fictional service model, accounts, projects, regions, assets, owners, data, identities, dependencies, trust boundaries, and approved review scope.",
    "output": "Cloud scope and responsibility map."
  },
  {
    "step": "2",
    "title": "Inventory identities, data, and exposure",
    "detail": "Record fictional users, service identities, roles, storage, databases, networks, public endpoints, keys, backups, logs, and critical services.",
    "output": "Cloud asset and access inventory."
  },
  {
    "step": "3",
    "title": "Compare with secure expectations",
    "detail": "Evaluate fictional least privilege, encryption, private access, logging, segmentation, retention, recovery, configuration baselines, and owner requirements.",
    "output": "Control comparison and evidence gaps."
  },
  {
    "step": "4",
    "title": "Prioritize cloud risks",
    "detail": "Consider fictional exposure, privilege, data sensitivity, reachability, exploitability, business effect, evidence confidence, and compensating controls.",
    "output": "Risk-ranked cloud findings."
  },
  {
    "step": "5",
    "title": "Plan defensive action",
    "detail": "Assign fictional owners, approvals, containment, remediation, validation, rollback, monitoring, communication, and completion evidence.",
    "output": "Cloud defense action plan."
  },
  {
    "step": "6",
    "title": "Validate and communicate",
    "detail": "Confirm fictional control effectiveness, residual risk, source health, evidence lineage, reviewer approval, lessons learned, and portfolio-safe reporting.",
    "output": "Validated closure and portfolio package."
  }
];
const objectives = [
  "Explain fictional cloud service models, shared responsibility, trust boundaries, assets, owners, dependencies, and customer-versus-provider security duties.",
  "Evaluate fictional cloud identities, roles, service accounts, temporary access, storage permissions, encryption concepts, networks, logging, and configuration baselines.",
  "Use multi-source fictional evidence to distinguish direct observations, supported findings, alternatives, confidence, limitations, and missing evidence.",
  "Prioritize fictional cloud risks using exposure, privilege, data sensitivity, reachability, business effect, source health, and compensating controls.",
  "Design fictional cloud remediation and incident actions with owners, approvals, validation, rollback, monitoring, communication, and closure criteria.",
  "Create a complete portfolio-safe cloud security package using only fictional systems, evidence, identities, data, routes, alerts, owners, and decisions."
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

export default function CloudSecurityBasicsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              High School Intermediate
            </span>

            <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-blue-200">
              Module I13
            </span>

            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
              8 Lessons + Module Test
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I13 Cloud Security Basics
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how defenders protect fictional cloud identities, data,
            storage, networks, services, configurations, logs, recovery, and
            shared responsibilities. Build evidence-based cloud security
            decisions without accessing any real cloud account or private data.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/shared-responsibility-and-cloud-security-foundations`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I13.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Module", "I13"],
            ["Lessons", "8"],
            ["Assessment", "25 questions"],
            ["Portfolio", "Cloud defense package"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                {label}
              </p>
              <p className="mt-2 text-xl font-black text-white">{value}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Main Question"
          title="How Can a Defender Reduce Cloud Risk without Losing Evidence, Privacy, Availability, or Ownership Clarity?"
        >
          <p className="leading-8">
            Cloud security is not only about one provider dashboard or one
            exposed setting. A fictional environment may include customer
            identities, provider services, applications, storage, databases,
            networks, keys, logs, deployment systems, vendors, regions, and
            business owners. Each layer has a different responsibility and
            evidence boundary. This module teaches you to map those boundaries,
            identify meaningful risks, correlate several sources, and plan safe,
            owned, testable defensive action.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
            Safety and Authorization Boundary
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Use Only Fictional Cloud Evidence
          </h2>

          <p className="mt-4 leading-8">
            Every account, project, identity, role, bucket, database, key,
            network, route, service, configuration, log, alert, incident,
            organization, owner, and decision in Module I13 is fictional. Do not
            sign in to, scan, test, query, change, export from, or investigate
            any real cloud environment. The labs focus on defensive reasoning
            from supplied training records.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Six-Step Cloud Defense Workflow
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Scope, Inventory, Compare, Prioritize, Act, and Validate
          </h2>

          <div className="mt-6 grid gap-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.42fr_1fr_0.75fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {item.step}
                </span>

                <h3 className="font-black text-cyan-100">{item.title}</h3>

                <p className="text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>

                <p className="text-sm leading-6 text-emerald-100">
                  <span className="font-black text-emerald-200">Output: </span>
                  {item.output}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Objectives
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            What You Will Be Able to Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <article
                key={objective}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 font-semibold leading-7">{objective}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Lessons
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Eight Cloud Security Lessons
          </h2>

          <div className="mt-6 grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-black text-cyan-200">
                    {lesson.number}
                  </span>

                  <h3 className="text-xl font-black text-white">
                    {lesson.title}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {lesson.summary}
                </p>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                      Lesson focus
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-6">
                      {lesson.focus.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-blue-200">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Safe fictional lab
                    </p>

                    <p className="mt-3 text-sm leading-6">{lesson.lab}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Fake Evidence Preview
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Northbridge Learning Cloud Security Review
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 p-5 text-red-50">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Identity signal
              </p>
              <p className="mt-3 text-sm leading-6">
                A fictional service role has broader storage permissions than
                its documented export workflow requires.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Configuration signal
              </p>
              <p className="mt-3 text-sm leading-6">
                A fictional storage container allows a wider network path than
                the approved private-service design.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Evidence boundary
              </p>
              <p className="mt-3 text-sm leading-6">
                Supplied audit records show no supported public sharing within
                verified coverage, but source and retention limits remain.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6 text-purple-50">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
            Module Portfolio Outcome
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Cloud Security Defense Package
          </h2>

          <p className="mt-4 leading-8">
            By the end of Module I13, you will create a fictional portfolio
            package containing a cloud responsibility map, asset inventory,
            identity review, storage and data-protection assessment, network
            exposure map, monitoring coverage matrix, misconfiguration backlog,
            incident action plan, evidence-based findings, technical report,
            leadership summary, validation plan, and portfolio-safety statement.
          </p>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
            Module Assessment
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            I13 Cloud Security Basics Module Test
          </h2>

          <p className="mt-4 leading-8">
            After completing all eight lessons, take the exact-format
            25-question module test. The assessment covers shared
            responsibility, identities, data protection, networking, logging,
            configuration defense, incident response, evidence limits, and
            portfolio-safe communication.
          </p>

          <div className="mt-5">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Navigation
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Start Module I13
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/shared-responsibility-and-cloud-security-foundations`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I13.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}