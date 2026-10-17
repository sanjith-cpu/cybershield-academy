import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const practiceResources = [
  {
    title: "CyberShield Practice Labs",
    href: "/cyberpatriot/practice-labs",
    external: false,
    description:
      "Use the twelve CyberShield competition-style labs for Windows, Linux, Cisco, forensics, mixed-system triage, and full-round simulation.",
  },
  {
    title: "Microsoft Evaluation Center",
    href: "https://www.microsoft.com/en-us/evalcenter",
    external: true,
    description:
      "Official Microsoft evaluation resources for products such as Windows 11 Enterprise and Windows Server.",
  },
  {
    title: "Ubuntu Server Tutorials",
    href: "https://ubuntu.com/server/docs/tutorial/",
    external: true,
    description:
      "Official step-by-step Ubuntu Server tutorials for building familiarity with installation, administration, packages, networking, and services.",
  },
  {
    title: "Ubuntu Server Documentation",
    href: "https://ubuntu.com/server/docs/",
    external: true,
    description:
      "Use Canonical's current tutorials, how-to guides, explanations, and references when designing Linux practice systems.",
  },
  {
    title: "Cisco Packet Tracer",
    href: "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html",
    external: true,
    description:
      "Cisco's virtual networking environment for practicing device configuration, connectivity, troubleshooting, and network simulation.",
  },
  {
    title: "Exploring Networking with Packet Tracer",
    href: "https://www.netacad.com/courses/exploring-networking-cisco-packet-tracer?courseLang=en-US",
    external: true,
    description:
      "A Cisco self-paced lab course that practices building, managing, monitoring, and troubleshooting a simulated network.",
  },
];

const safeLabRules = [
  {
    title: "Use isolated systems",
    detail:
      "Practice inside disposable VMs, approved lab machines, Packet Tracer, or other environments specifically created for training.",
  },
  {
    title: "Snapshot first",
    detail:
      "Create a known-good snapshot or restore point before introducing mistakes, insecure settings, or troubleshooting scenarios.",
  },
  {
    title: "Never use real credentials",
    detail:
      "Use fictional usernames, passwords, domains, addresses, files, and organizations in student-built labs.",
  },
  {
    title: "Keep the mission visible",
    detail:
      "Every lab should state which users, services, applications, and connectivity must remain functional.",
  },
  {
    title: "Record the starting state",
    detail:
      "Document enough baseline information that students can distinguish the intended system from their own later changes.",
  },
  {
    title: "Reset after practice",
    detail:
      "Restore the VM or simulation when a lab ends so insecure practice configurations are not accidentally reused elsewhere.",
  },
];

const platformDrills = [
  {
    title: "Windows 11",
    drills: [
      "Review local users and administrator membership.",
      "Investigate services and startup behavior.",
      "Review firewall and Defender state.",
      "Inspect scheduled tasks and remote-access settings.",
      "Use Event Viewer to support findings.",
      "Verify an approved user can still work after changes.",
    ],
  },
  {
    title: "Windows Server",
    drills: [
      "Review local and domain identities.",
      "Inspect privileged groups.",
      "Verify required server roles.",
      "Practice DNS-dependent troubleshooting.",
      "Review shares and NTFS permissions.",
      "Test mission services after policy changes.",
    ],
  },
  {
    title: "Ubuntu & Mint",
    drills: [
      "Review users, groups, and sudo access.",
      "Inspect permissions and ownership.",
      "Investigate services with systemctl.",
      "Review logs with journalctl.",
      "Inspect listening sockets and firewall state.",
      "Verify required services after remediation.",
    ],
  },
  {
    title: "Cisco",
    drills: [
      "Diagnose interface-state problems.",
      "Correct VLAN membership.",
      "Troubleshoot trunking.",
      "Review IP addressing and routing.",
      "Analyze ACL placement and order.",
      "Verify end-to-end and return-path connectivity.",
    ],
  },
  {
    title: "Forensics",
    drills: [
      "Preserve a suspicious file before remediation.",
      "Calculate and record a file hash.",
      "Build a simple event timeline.",
      "Correlate logs with processes and network activity.",
      "Identify persistence clues.",
      "Write an evidence-backed conclusion.",
    ],
  },
  {
    title: "Team Operations",
    drills: [
      "Assign platform ownership quickly.",
      "Use a shared priority board.",
      "Record changes in a common log.",
      "Practice short handoffs.",
      "Perform a mid-round sync.",
      "Run a timed final verification sweep.",
    ],
  },
];

const difficultyLevels = [
  {
    level: "Level 1",
    title: "Single Finding",
    time: "10-20 minutes",
    purpose:
      "Practice one skill with a clear objective and very little unrelated noise.",
    examples: [
      "Find one unauthorized administrator.",
      "Repair one broken VLAN assignment.",
      "Identify one unexpected listening service.",
    ],
  },
  {
    level: "Level 2",
    title: "Focused System",
    time: "30-45 minutes",
    purpose:
      "Practice several related findings on one platform while preserving required functionality.",
    examples: [
      "Windows account and service review.",
      "Linux privilege and service review.",
      "Cisco VLAN and routing troubleshooting.",
    ],
  },
  {
    level: "Level 3",
    title: "Competition Slice",
    time: "60-90 minutes",
    purpose:
      "Combine technical work, evidence, prioritization, documentation, and verification under time pressure.",
    examples: [
      "Windows Server identity plus shares.",
      "Linux services plus persistence.",
      "Forensics timeline plus remediation decision.",
    ],
  },
  {
    level: "Level 4",
    title: "Full Simulation",
    time: "2+ hours",
    purpose:
      "Coordinate several systems and teammates using realistic competition workflow and limited time.",
    examples: [
      "Mixed Windows, Linux, and Cisco round.",
      "Shared evidence and change log.",
      "Final verification and team handoff.",
    ],
  },
];

const labBuildTemplate = [
  {
    field: "Mission",
    question:
      "What must the system continue doing throughout the lab?",
  },
  {
    field: "Approved Users",
    question:
      "Which identities are authorized and which privileges are required?",
  },
  {
    field: "Required Services",
    question:
      "Which applications, network services, shares, or server roles must remain available?",
  },
  {
    field: "Starting State",
    question:
      "What configuration should the student observe before making changes?",
  },
  {
    field: "Findings",
    question:
      "Which deliberately planted issues should the student investigate?",
  },
  {
    field: "Evidence",
    question:
      "Which logs, files, processes, commands, or network clues support each finding?",
  },
  {
    field: "Safety Boundary",
    question:
      "What must the student avoid changing because it would break the scenario?",
  },
  {
    field: "Verification",
    question:
      "How will the student prove required functionality still works?",
  },
  {
    field: "Reset Method",
    question:
      "Which snapshot, backup, or simulator reset returns the environment to its starting state?",
  },
];

const practiceCycle = [
  {
    number: "01",
    title: "Read",
    description:
      "Read the mission, approved users, required services, restrictions, and expected deliverables.",
  },
  {
    number: "02",
    title: "Baseline",
    description:
      "Record important system state before making changes.",
  },
  {
    number: "03",
    title: "Prioritize",
    description:
      "Identify high-confidence, high-impact work instead of changing everything immediately.",
  },
  {
    number: "04",
    title: "Investigate",
    description:
      "Use commands, logs, configuration, and documentation to understand each finding.",
  },
  {
    number: "05",
    title: "Change",
    description:
      "Make the narrowest justified change that improves security while preserving the mission.",
  },
  {
    number: "06",
    title: "Verify",
    description:
      "Confirm both the security result and required functionality.",
  },
  {
    number: "07",
    title: "Document",
    description:
      "Record what was found, changed, verified, and left unresolved.",
  },
  {
    number: "08",
    title: "Debrief",
    description:
      "Review mistakes, missed evidence, slow decisions, and useful techniques before resetting the lab.",
  },
];

const scoringDimensions = [
  {
    title: "Technical Accuracy",
    description:
      "Was the actual problem identified and corrected without unnecessary changes?",
  },
  {
    title: "Mission Preservation",
    description:
      "Did approved users, required services, networking, and applications continue working?",
  },
  {
    title: "Evidence Quality",
    description:
      "Were findings supported by logs, configuration, processes, files, or network evidence?",
  },
  {
    title: "Verification",
    description:
      "Did the student prove the result instead of assuming the change worked?",
  },
  {
    title: "Documentation",
    description:
      "Could another teammate understand what happened and reproduce the verification?",
  },
  {
    title: "Time Management",
    description:
      "Did the student spend time on high-value work and recognize when to move on?",
  },
  {
    title: "Team Communication",
    description:
      "Were ownership, dependencies, handoffs, and unresolved risks communicated clearly?",
  },
  {
    title: "Recovery Discipline",
    description:
      "Could the student recognize a harmful change and return to a known-good state?",
  },
];

const weeklyRotation = [
  {
    day: "Session 1",
    focus: "Windows workstation",
    goal:
      "Accounts, services, firewall, startup, remote access, and event evidence.",
  },
  {
    day: "Session 2",
    focus: "Linux",
    goal:
      "Users, sudo, permissions, services, logs, sockets, and scheduled activity.",
  },
  {
    day: "Session 3",
    focus: "Networking",
    goal:
      "Interfaces, VLANs, trunks, addressing, routing, ACLs, and verification.",
  },
  {
    day: "Session 4",
    focus: "Windows Server",
    goal:
      "Identity, roles, DNS, shares, permissions, policy, and server dependencies.",
  },
  {
    day: "Session 5",
    focus: "Forensics",
    goal:
      "Evidence preservation, hashes, logs, timelines, persistence, and conclusions.",
  },
  {
    day: "Session 6",
    focus: "Mixed simulation",
    goal:
      "Prioritization, ownership, change logging, handoffs, and final verification.",
  },
];

const weakVsBetter = [
  {
    weak: "Practice by memorizing a hardening checklist.",
    better:
      "Practice identifying why a setting matters, when it applies, and how to verify the result.",
  },
  {
    weak: "Use the same VM until every answer is memorized.",
    better:
      "Rotate scenarios, users, services, evidence, and failure patterns so the student must investigate.",
  },
  {
    weak: "Only practice fixing known security settings.",
    better:
      "Include broken dependencies, ambiguous findings, mission requirements, and legitimate exceptions.",
  },
  {
    weak: "Reset immediately after making a mistake.",
    better:
      "First diagnose what the change broke and practice recovering safely when possible.",
  },
  {
    weak: "Score only the number of fixes.",
    better:
      "Evaluate accuracy, mission preservation, evidence, verification, documentation, communication, and time management.",
  },
  {
    weak: "Use real systems for realism.",
    better:
      "Use isolated VMs, simulations, and intentionally disposable practice environments.",
  },
];

const finalChecklist = [
  "Practice only on authorized lab systems, VMs, and simulations.",
  "Create a restorable starting state before modifying the lab.",
  "Use fictional accounts, organizations, credentials, and evidence.",
  "Include a clear mission and required services.",
  "Practice observation before modification.",
  "Require evidence for important conclusions.",
  "Include verification after meaningful changes.",
  "Rotate systems and scenarios instead of memorizing one image.",
  "Include ambiguous and legitimate configurations, not only obvious mistakes.",
  "Practice team communication and handoffs.",
  "Debrief before resetting the lab.",
  "Increase difficulty gradually from isolated skills to full simulations.",
];

export default function PracticeLabResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources/nist-cisa-security-standards"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/team-templates-offline-reference-pack" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 11
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Practice &amp; Lab Resources
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Turn documentation into repeatable hands-on practice using isolated
            virtual machines, network simulations, fictional evidence, timed
            drills, and full competition-style scenarios.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            The goal is not to memorize one image. Good practice develops the
            ability to inspect an unfamiliar system, reason from evidence,
            preserve mission requirements, make controlled changes, and verify
            the result.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Practice safety rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Break practice systems, not real systems
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Use disposable VMs, snapshots, Packet Tracer files, and fictional
            scenarios. Do not reproduce intentionally insecure lab settings on
            school, home, business, or other real production systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Practice resource library
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practiceResources.map((item) =>
            item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/40"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-bold text-cyan-300">
                  Open resource &rarr;
                </p>
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 transition hover:border-cyan-400/50"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-bold text-cyan-300">
                  Open CyberShield labs &rarr;
                </p>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Safe lab design rules
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {safeLabRules.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Platform drill library
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformDrills.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">
                {area.title}
              </h3>

              <div className="mt-4 grid gap-2">
                {area.drills.map((drill) => (
                  <div
                    key={drill}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
                  >
                    {drill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Increase difficulty gradually
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {difficultyLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.level}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  {item.time}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>

                <div className="mt-4 grid gap-2">
                  {item.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs leading-5 text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Build your own fictional lab
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {labBuildTemplate.map((item) => (
            <div
              key={item.field}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="font-black text-cyan-300">
                {item.field}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.question}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Repeatable practice cycle
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {practiceCycle.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">
                {item.number}
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Score more than fixes
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {scoringDimensions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Example practice rotation
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {weeklyRotation.map((item) => (
              <div
                key={item.day}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">
                  {item.day}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {item.focus}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak practice vs better practice
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak practice
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better practice
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.better}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Practice resource checklist
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Resources
            </Link>

            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/resources/nist-cisa-security-standards"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Resource
            </Link>

            <Link href="/cyberpatriot/resources/team-templates-offline-reference-pack" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}