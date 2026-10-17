import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const officialLinks = [
  {
    title: "CyberPatriot Training Materials",
    href: "https://www.uscyberpatriot.org/training-materials/",
    purpose:
      "Official starting point for Network Security Challenge training, Cisco preparation, starter modules, Windows and Linux tools, and archived material.",
    when:
      "Use before every season and again before each round to confirm the current training scope.",
  },
  {
    title: "Technical Specifications",
    href: "https://www.uscyberpatriot.org/technical-specifications/",
    purpose:
      "Current host-computer, virtualization, software, website-access, and network requirements for competition systems.",
    when:
      "Check before installing or updating competition software and before the required practice round.",
  },
  {
    title: "Competition Overview",
    href: "https://www.uscyberpatriot.org/competition/",
    purpose:
      "Official competition landing page for current-season information, registration, schedule, scoring, rules, and related competition resources.",
    when:
      "Use whenever the team needs the official source for current competition information.",
  },
  {
    title: "Rules Book",
    href: "https://www.uscyberpatriot.org/competition/",
    purpose:
      "Access the current Rules Book from the official competition site and treat it as the controlling source for competition procedures and restrictions.",
    when:
      "Review before the season, before each round, and whenever a competition-process question appears.",
  },
  {
    title: "CyberPatriot Website",
    href: "https://www.uscyberpatriot.org/",
    purpose:
      "Official AFA CyberPatriot website for announcements, competition pages, program information, and links to current-season resources.",
    when:
      "Use as the root source instead of relying on old bookmarks or third-party summaries.",
  },
  {
    title: "Cisco Networking Academy",
    href: "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html",
    purpose:
      "Official Cisco training and competition environment used for CyberPatriot networking content and Packet Tracer activities.",
    when:
      "Use the season-specific course and credentials provided through the official CyberPatriot process.",
  },
];

const sourceOrder = [
  {
    number: "01",
    title: "Current round instructions",
    detail:
      "Round emails, the Coach Dashboard, and current instructions are more specific than general training pages. Read them first for that round.",
  },
  {
    number: "02",
    title: "Current Rules Book",
    detail:
      "Use the official rules when deciding whether a tool, action, competition setup, or support request is allowed.",
  },
  {
    number: "03",
    title: "Technical Specifications",
    detail:
      "Use the live technical-specifications page for required versions, host requirements, networking, and competition software.",
  },
  {
    number: "04",
    title: "Current training materials",
    detail:
      "Use CyberPatriot training material to build the required foundation, then deepen the same topics with authoritative vendor documentation.",
  },
  {
    number: "05",
    title: "Vendor documentation",
    detail:
      "Use Microsoft, Ubuntu, Linux Mint, Cisco, VMware/Broadcom, and other primary documentation for technical details.",
  },
  {
    number: "06",
    title: "Team notes",
    detail:
      "Your own notes are useful only after they have been checked against current official sources and kept free of live-round answers.",
  },
];

const currentSeasonFacts = [
  {
    label: "Host architecture",
    value: "64-bit host computer and operating system required",
  },
  {
    label: "Virtualization",
    value: "Hardware virtualization must be enabled",
  },
  {
    label: "VM platform",
    value: "VMware Workstation Pro 26H1 is the CP-19 standard",
  },
  {
    label: "Cisco simulator",
    value: "Packet Tracer 9.0.0 is listed for CP-19",
  },
  {
    label: "Memory",
    value: "8 GB RAM minimum listed",
  },
  {
    label: "Free disk",
    value: "40 GB minimum listed",
  },
];

const trainingScope = [
  {
    title: "Network Security Challenge",
    items: [
      "Windows and Linux virtual-machine images",
      "Maintaining and hardening required services",
      "Finding and fixing vulnerabilities",
      "Malware and persistence investigation",
      "Forensics questions tied to evidence and actions",
    ],
  },
  {
    title: "Cisco Networking Challenge",
    items: [
      "Season-specific Cisco training content",
      "Networking quiz material",
      "Packet Tracer exercises",
      "Addressing and subnetting",
      "Routing, switching, and security concepts",
    ],
  },
  {
    title: "Unscored Preparation",
    items: [
      "Exhibition material when available",
      "Training Round for guided preparation",
      "Practice Round for team workflow",
      "Local network-compatibility testing",
      "VM launch and scoring-connectivity validation",
    ],
  },
];

const usePatterns = [
  {
    weak: "Use an old PDF because it is already downloaded.",
    better:
      "Open the current official page first, then use archived material only when the concept is still relevant.",
  },
  {
    weak: "Assume last season's VMware or Packet Tracer version is still correct.",
    better:
      "Verify required software versions on the current Technical Specifications page before the season and before major updates.",
  },
  {
    weak: "Treat training materials as a complete checklist of everything that can appear.",
    better:
      "Use official training as the foundation, then deepen the same concepts with primary vendor documentation and authorized practice.",
  },
  {
    weak: "Search the web first whenever the team is unsure about a rule.",
    better:
      "Use current round instructions, the Rules Book, and official CyberPatriot pages before third-party explanations.",
  },
  {
    weak: "Copy competition answers or vulnerability lists into team references.",
    better:
      "Build references around concepts, commands, verification, troubleshooting, and defensive reasoning rather than live-round answers.",
  },
  {
    weak: "Keep one large folder called resources.",
    better:
      "Separate official rules, technical requirements, platform documentation, networking references, and team-created notes.",
  },
];

const verifyBeforeRound = [
  "Current Rules Book reviewed",
  "Current Technical Specifications reviewed",
  "Required VM software version confirmed",
  "Required Packet Tracer version confirmed",
  "Hardware virtualization enabled",
  "RAM and disk-space requirements checked",
  "Competition websites accessible from the venue network",
  "HTTP/HTTPS competition connectivity checked",
  "Coach Dashboard information available to the coach",
  "Current-season training material reviewed",
  "Cisco course access confirmed when applicable",
  "Practice Round or connectivity test completed as instructed",
];

const officialSourceHabits = [
  "Check the date and season before trusting a saved document.",
  "Prefer pages under uscyberpatriot.org for competition-specific requirements.",
  "Use the Coach Dashboard for information intentionally restricted to registered teams and coaches.",
  "Use vendor documentation for commands and product behavior, not for deciding CyberPatriot rules.",
  "Save useful references offline only when competition rules and round instructions permit their use.",
  "Label archived references clearly so they are not confused with current-season requirements.",
  "Record the official source next to important team procedures so they can be rechecked quickly.",
  "When official sources conflict with team notes, update the team notes.",
];

const finalQuestions = [
  "Can the team find the current Rules Book quickly?",
  "Can the team find the live Technical Specifications page quickly?",
  "Does everyone know that current round instructions outrank old team notes?",
  "Are required software versions checked against the current season?",
  "Are archived materials clearly separated from current materials?",
  "Does the team know where CyberPatriot training ends and vendor documentation begins?",
  "Are team references focused on learning and defensive verification rather than live answers?",
  "Can the coach access current dashboard information before competition day?",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function CyberPatriotOfficialResourcesPage() {
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

          <Link href="/cyberpatriot/resources/windows-11-microsoft-learn" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                CyberPatriot Resources &middot; Resource 01 &middot; Official Sources
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                CyberPatriot Official Resources
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Start with the sources that control the competition. Current
                round instructions, the Rules Book, Technical Specifications,
                official training material, and the Coach Dashboard should be
                checked before old notes, archived files, or third-party guides.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This page is a navigation and verification guide. It does not
                contain live-round answers or vulnerability lists.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Resource Goal
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Rules</span>
                  <span className="font-bold text-white">Current</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Technical requirements</span>
                  <span className="font-bold text-white">Verified</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Training</span>
                  <span className="font-bold text-white">Official first</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Team notes</span>
                  <span className="font-bold text-white">Secondary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Source rule
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Current official instructions beat old team memory
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Software versions, competition procedures, approved access, round
            timing, challenge details, and technical requirements can change.
            Recheck the official source instead of assuming last season still
            applies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Official links"
            title="Keep these primary sources easy to reach"
            description="Open the live official page whenever the current season, current round, or current software requirement matters."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {officialLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  Purpose
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                  When to use it
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.when}
                </p>

                <div className="mt-auto pt-5 text-sm font-bold text-cyan-300">
                  Open official source &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Source order
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Use the most authoritative source that answers the question
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sourceOrder.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.number}</p>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Current technical snapshot"
            title="Recheck these values on the live Technical Specifications page"
            description="This snapshot reflects the current CP-19 technical page. Treat the live page as authoritative if anything changes."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {currentSeasonFacts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Official training scope"
            title="Know what the CyberPatriot training pages are preparing you for"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trainingScope.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-xl font-black text-white">{area.title}</h3>

                <div className="mt-4 grid gap-2">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Weak habit vs better habit
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Build a current reference library instead of a pile of old files
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {usePatterns.map((item) => (
              <div
                key={item.weak}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                  Weak habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {item.weak}
                </p>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Better habit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.better}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Official-source habits"
            title="Keep current-season information separate from reusable technical knowledge"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {officialSourceHabits.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Before-round verification
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm the official requirements before competition day
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {verifyBeforeRound.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Final questions"
            title="Check whether your team can find the official answer quickly"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {finalQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{question}</p>
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

          <Link href="/cyberpatriot/resources/windows-11-microsoft-learn" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Next Resource &rarr;</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
