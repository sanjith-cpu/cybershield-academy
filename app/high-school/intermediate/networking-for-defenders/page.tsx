import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/networking-for-defenders`;

const lessons = [
  {
    number: "I1.1",
    title: "Network Models and Defensive Thinking",
    route: "network-models-and-defensive-thinking",
    focus:
      "Compare layered network models and use them to organize defensive evidence, controls, and troubleshooting decisions.",
    lab:
      "Map a fictional connection across layers and identify where monitoring and protection belong.",
  },
  {
    number: "I1.2",
    title: "IP Addressing, Subnets, and Network Boundaries",
    route: "ip-addressing-subnets-and-network-boundaries",
    focus:
      "Review IPv4 structure, private addressing, subnet concepts, network boundaries, and how defenders interpret address context.",
    lab:
      "Classify fictional addresses and explain which systems share or cross a network boundary.",
  },
  {
    number: "I1.3",
    title: "Ports, Protocols, and Services",
    route: "ports-protocols-and-services",
    focus:
      "Connect common ports and protocols with services, expected behavior, exposure, and defensive review.",
    lab:
      "Analyze a fictional service inventory and identify unnecessary, expected, and review-required services.",
  },
  {
    number: "I1.4",
    title: "DNS, DHCP, and Common Network Services",
    route: "dns-dhcp-and-common-network-services",
    focus:
      "Understand how DNS, DHCP, and other core services support networks and create useful defensive evidence.",
    lab:
      "Correlate fictional DNS and DHCP records with users, devices, destinations, and timestamps.",
  },
  {
    number: "I1.5",
    title: "Firewalls and Network Access Rules",
    route: "firewalls-and-network-access-rules",
    focus:
      "Interpret allow and deny logic, traffic direction, source, destination, service, purpose, and change control.",
    lab:
      "Review fictional firewall rules and recommend safer, narrower access decisions.",
  },
  {
    number: "I1.6",
    title: "Network Segmentation Concepts",
    route: "network-segmentation-concepts",
    focus:
      "Learn how zones, trust boundaries, role separation, and restricted pathways can reduce unnecessary access and incident spread.",
    lab:
      "Redesign a fictional flat network into safer defensive zones.",
  },
  {
    number: "I1.7",
    title: "Reading Safe Network Diagrams",
    route: "reading-safe-network-diagrams",
    focus:
      "Read symbols, labels, trust boundaries, traffic paths, security controls, and evidence points in fictional diagrams.",
    lab:
      "Evaluate a fictional network diagram for missing labels, unclear ownership, and defensive blind spots.",
  },
  {
    number: "I1.8",
    title: "Network Defense Analysis Lab",
    route: "network-defense-analysis-lab",
    focus:
      "Combine addressing, services, DNS, DHCP, firewall rules, segmentation, logs, and diagrams into one defensive case.",
    lab:
      "Complete a multi-source fictional network investigation and write an evidence-based recommendation.",
  },
];

const objectives = [
  "Use network models to organize defensive evidence and explain where controls operate.",
  "Interpret fictional IP addresses, subnet boundaries, ports, protocols, and services.",
  "Connect DNS and DHCP records with devices, users, destinations, and timestamps.",
  "Review firewall access rules using source, destination, service, direction, purpose, and least privilege.",
  "Explain how segmentation and trust boundaries reduce unnecessary access and possible spread.",
  "Read safe network diagrams and identify monitoring points, control gaps, and unclear assumptions.",
];

const workflow = [
  {
    step: "Observe",
    detail:
      "Collect fictional diagrams, address records, service inventories, firewall rules, and network logs.",
  },
  {
    step: "Correlate",
    detail:
      "Connect sources, destinations, users, devices, ports, services, and timestamps.",
  },
  {
    step: "Compare",
    detail:
      "Check activity against expected architecture, approved changes, baselines, and business purpose.",
  },
  {
    step: "Decide",
    detail:
      "Choose a proportionate defensive action and state what is confirmed, likely, or uncertain.",
  },
  {
    step: "Document",
    detail:
      "Record evidence, impact, ownership, recommendation, limitations, and follow-up.",
  },
];

const fakeEvents = [
  {
    time: "09:12:08",
    source: "DHCP",
    event: "Device student-lab-17 receives 10.24.18.44",
    meaning:
      "Connects the fictional device to an address during the review window.",
  },
  {
    time: "09:14:31",
    source: "DNS",
    event: "Device requests updates.training-cloud.test",
    meaning:
      "Provides destination-name context but does not prove the activity is safe.",
  },
  {
    time: "09:14:33",
    source: "Firewall",
    event: "Outbound HTTPS connection allowed",
    meaning:
      "Shows the rule decision, direction, service, and destination context.",
  },
  {
    time: "09:16:02",
    source: "Inventory",
    event: "Approved learning application update window begins",
    meaning:
      "Business context may explain the new destination and timing.",
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

export default function NetworkingForDefendersModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href={trackPath}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Beginner Review
            </Link>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  High School Intermediate
                </span>
                <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                  Module I1 of 17
                </span>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
                  Defensive Only
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                I1: Networking for Defenders
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Move beyond basic network vocabulary and learn how defenders
                organize, monitor, segment, analyze, and document fictional
                network activity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/network-models-and-defensive-thinking`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Start I1.1
                </Link>
                <Link
                  href={`${modulePath}/module-test`}
                  className="rounded-xl border border-yellow-300/50 bg-yellow-300/10 px-6 py-3 font-black text-yellow-100 transition hover:border-yellow-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                Module Snapshot
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Stat label="Track" value="Intermediate" />
                <Stat label="Module" value="I1 of 17" />
                <Stat label="Lessons" value="8" />
                <Stat label="Module test" value="25 questions" />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5">
                <p className="font-black text-blue-200">
                  Intermediate begins here
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  This module expects Beginner networking knowledge and adds
                  subnet context, service review, firewall logic, segmentation,
                  diagrams, and evidence-based analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:px-8">
        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Main Question
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              How do defenders understand network activity well enough to
              protect systems and make safe decisions?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-cyan-50">
              Students will connect architecture, address boundaries, services,
              access rules, logs, and approved purpose instead of judging a
              connection from one alert or one technical detail.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Safety Boundary
            </p>
            <p className="mt-4 leading-7 text-yellow-50">
              Every address, domain, network, firewall rule, log, diagram,
              device, user, and organization in this module is fictional.
              Students never scan, probe, test, or change real systems.
            </p>
          </div>
        </section>

        <SectionCard
          eyebrow="Professional Workflow"
          title="Observe, Correlate, Compare, Decide, and Document"
        >
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-black text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Learning Objectives"
          title="What Students Will Be Able to Do"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {objectives.map((objective) => (
              <div
                key={objective}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-slate-950">
                  ✓
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section>
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Module Path
            </p>
            <h2 className="mt-3 text-4xl font-black text-white">
              Eight Intermediate Lessons
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Each lesson includes professional hooks, fictional technical
              evidence, safe defensive labs, scenario decisions, a scored quiz,
              a checklist, and a portfolio prompt.
            </p>
          </div>

          <div className="grid gap-5">
            {lessons.map((lesson, index) => (
              <Link
                key={lesson.number}
                href={`${modulePath}/${lesson.route}`}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div className="grid gap-5 lg:grid-cols-[0.22fr_1fr_1fr_auto] lg:items-center">
                  <div>
                    <p className="text-lg font-black text-cyan-300">
                      {lesson.number}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Lesson {index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {lesson.lab}
                    </p>
                  </div>

                  <span className="font-black text-cyan-300">Open →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SectionCard
          eyebrow="Fake Evidence Preview"
          title="How Intermediate Network Evidence Connects"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            {fakeEvents.map((event) => (
              <div
                key={`${event.time}-${event.source}`}
                className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.45fr_0.5fr_1.1fr_1.4fr]"
              >
                <p className="font-mono text-sm text-slate-400">{event.time}</p>
                <p className="font-black text-cyan-200">{event.source}</p>
                <p className="text-sm text-slate-200">{event.event}</p>
                <p className="text-sm leading-6 text-yellow-100">
                  {event.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
            A strong conclusion uses the records together: address assignment,
            destination name, access decision, approved application, timing, and
            expected purpose.
          </div>
        </SectionCard>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              Portfolio Outcome
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Network Defense Analysis Report
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Students will build a fictional report containing a labeled
              network diagram, address and service context, evidence timeline,
              firewall review, segmentation recommendation, uncertainty, and
              next actions.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-300/30 bg-yellow-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
              Module Assessment
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              25-Question I1 Module Test
            </h2>
            <p className="mt-4 leading-7 text-yellow-50">
              The test will cover models, subnet concepts, ports, protocols,
              services, DNS, DHCP, firewalls, segmentation, diagrams, and
              evidence-based network decisions. Answers stay hidden until
              submission.
            </p>

            <Link
              href={`${modulePath}/module-test`}
              className="mt-6 inline-flex rounded-xl bg-yellow-300 px-5 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
            >
              Open Module Test
            </Link>
          </div>
        </section>

        <section className="flex flex-wrap justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href={trackPath}
            className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Intermediate Track
          </Link>
          <Link
            href={`${modulePath}/network-models-and-defensive-thinking`}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Start I1.1 →
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}