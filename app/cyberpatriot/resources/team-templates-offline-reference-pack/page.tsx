import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamTemplates = [
  {
    title: "Mission Extraction Sheet",
    purpose:
      "Turn the README and round instructions into a short list of systems, approved users, required services, restrictions, and priorities.",
    fields: [
      "System / image",
      "Approved users",
      "Approved administrators",
      "Required services",
      "Required applications",
      "Required remote access",
      "Network requirements",
      "Do-not-change items",
      "Special scenario notes",
    ],
  },
  {
    title: "Priority Board",
    purpose:
      "Give the team one shared view of what is being investigated, changed, verified, or deferred.",
    fields: [
      "Priority",
      "System",
      "Finding",
      "Owner",
      "Status",
      "Dependency",
      "Next action",
      "Verification needed",
    ],
  },
  {
    title: "Change Log",
    purpose:
      "Record meaningful changes so the team can understand what happened and recover from mistakes.",
    fields: [
      "Time",
      "System",
      "Team member",
      "Original state",
      "Change made",
      "Reason",
      "Verification",
      "Result",
    ],
  },
  {
    title: "Evidence Log",
    purpose:
      "Preserve useful observations before remediation and make findings reproducible for another teammate.",
    fields: [
      "Time",
      "System",
      "Evidence source",
      "Path / event / command",
      "Observation",
      "Related user or process",
      "Interpretation",
      "Follow-up",
    ],
  },
  {
    title: "Handoff Note",
    purpose:
      "Transfer ownership without forcing the next teammate to repeat the investigation.",
    fields: [
      "System",
      "Issue",
      "What was checked",
      "What was found",
      "What was changed",
      "What still needs work",
      "Important warning",
      "Verification state",
    ],
  },
  {
    title: "Final Verification Sheet",
    purpose:
      "Run a controlled final sweep without introducing risky late-round experimentation.",
    fields: [
      "Required users",
      "Required administrators",
      "Required services",
      "Network connectivity",
      "Remote access",
      "Security tools",
      "Evidence saved",
      "Changes documented",
      "Known unresolved items",
    ],
  },
];

const statusValues = [
  {
    title: "Not Started",
    detail:
      "The finding or review item has not yet been assigned or investigated.",
  },
  {
    title: "Investigating",
    detail:
      "A teammate owns the item and is collecting evidence or checking dependencies.",
  },
  {
    title: "Changed",
    detail:
      "A modification was made but the result has not yet been fully verified.",
  },
  {
    title: "Verified",
    detail:
      "The change and required functionality were checked successfully.",
  },
  {
    title: "Unresolved",
    detail:
      "The team investigated the issue but does not yet have a safe, justified resolution.",
  },
  {
    title: "Do Not Touch",
    detail:
      "The team identified an explicit mission dependency, restriction, or unacceptable risk.",
  },
];

const packFolders = [
  {
    folder: "00-RULES-AND-ROUND",
    contents: [
      "Current official rules or permitted rule references",
      "Round instructions supplied to the team",
      "Technical requirements",
      "Coach-approved logistical notes",
    ],
  },
  {
    folder: "01-MISSION-TEMPLATES",
    contents: [
      "Blank mission extraction sheet",
      "Priority board template",
      "Change-log template",
      "Evidence-log template",
      "Handoff template",
    ],
  },
  {
    folder: "02-WINDOWS",
    contents: [
      "Windows administration notes",
      "Event-log references",
      "Account and group references",
      "Services and firewall references",
      "Microsoft documentation bookmarks",
    ],
  },
  {
    folder: "03-WINDOWS-SERVER",
    contents: [
      "AD DS concepts",
      "DNS dependency notes",
      "Group Policy references",
      "Share and NTFS permission notes",
      "Server-role references",
    ],
  },
  {
    folder: "04-LINUX",
    contents: [
      "User and group references",
      "Permissions notes",
      "systemd references",
      "Log locations",
      "Networking and firewall references",
    ],
  },
  {
    folder: "05-CISCO",
    contents: [
      "Show-command references",
      "VLAN and trunk notes",
      "Routing references",
      "ACL concepts",
      "Troubleshooting sequence",
    ],
  },
  {
    folder: "06-FORENSICS",
    contents: [
      "Evidence template",
      "Hash references",
      "Timeline template",
      "Windows log references",
      "Linux evidence references",
    ],
  },
  {
    folder: "07-QUICK-REFERENCE",
    contents: [
      "Common ports and protocols",
      "Command index",
      "Verification checklist",
      "Troubleshooting questions",
      "Team communication conventions",
    ],
  },
];

const allowedStudyContent = [
  "Public vendor documentation.",
  "Personal notes created during training.",
  "Course notes that the current competition rules permit.",
  "Blank team templates.",
  "Command syntax references.",
  "Ports and protocols references.",
  "General troubleshooting workflows.",
  "Public security standards and benchmarks.",
  "Public CyberPatriot training resources.",
  "Fictional practice-lab notes.",
];

const neverPack = [
  {
    title: "Current competition answers",
    detail:
      "Do not place vulnerability answers, discovered scoring items, or answer keys from an active scored round into a shared reference pack.",
  },
  {
    title: "Other teams' material",
    detail:
      "Do not collect another team's scripts, notes, findings, scoring reports, or competition intelligence.",
  },
  {
    title: "Competition credentials",
    detail:
      "Do not store Team IDs, unique identifiers, passwords, NetAcad credentials, or other sensitive round credentials in a general study pack.",
  },
  {
    title: "Restricted images or round files",
    detail:
      "Competition images and controlled round materials should be handled only according to current CyberPatriot instructions.",
  },
  {
    title: "Unreviewed hardening scripts",
    detail:
      "A large script can make broad changes, break mission services, and hide what actually changed.",
  },
  {
    title: "Mystery command collections",
    detail:
      "Do not build a pack of commands the team cannot explain, scope, or verify.",
  },
];

const quickReferenceCategories = [
  {
    title: "Windows",
    entries: [
      "Users and groups",
      "Services",
      "Scheduled tasks",
      "Event Viewer",
      "Firewall",
      "Defender",
      "Remote access",
    ],
  },
  {
    title: "Windows Server",
    entries: [
      "AD DS",
      "Privileged groups",
      "DNS",
      "Group Policy",
      "Shares",
      "NTFS permissions",
      "Server roles",
    ],
  },
  {
    title: "Linux",
    entries: [
      "Users and groups",
      "sudo",
      "Permissions",
      "systemctl",
      "journalctl",
      "ss",
      "UFW",
    ],
  },
  {
    title: "Cisco",
    entries: [
      "Interfaces",
      "VLANs",
      "Trunks",
      "Addressing",
      "Routes",
      "ACLs",
      "Configuration verification",
    ],
  },
  {
    title: "Forensics",
    entries: [
      "Hashes",
      "File metadata",
      "Logs",
      "Processes",
      "Persistence",
      "Network evidence",
      "Timeline correlation",
    ],
  },
  {
    title: "Team Operations",
    entries: [
      "Mission extraction",
      "Priority board",
      "Change log",
      "Evidence log",
      "Handoffs",
      "Mid-round sync",
      "Final verification",
    ],
  },
];

const referenceRules = [
  {
    number: "01",
    title: "Know the source",
    detail:
      "Prefer official vendor documentation, official project manuals, CyberPatriot materials, and reputable security standards.",
  },
  {
    number: "02",
    title: "Know the version",
    detail:
      "A command, setting, service, or menu can change between operating-system and product versions.",
  },
  {
    number: "03",
    title: "Know the purpose",
    detail:
      "Every reference entry should explain why the command or setting matters, not only what to type.",
  },
  {
    number: "04",
    title: "Know the impact",
    detail:
      "Mark commands and settings that can recursively change files, stop services, alter firewall state, or affect multiple users.",
  },
  {
    number: "05",
    title: "Know the verification",
    detail:
      "A useful reference should include how to confirm that the system still performs its required function.",
  },
  {
    number: "06",
    title: "Keep it searchable",
    detail:
      "Use clear names, short headings, platform folders, and predictable structure instead of one enormous document.",
  },
];

const changeLogExample = [
  ["10:14", "Win11", "Alex", "Remote Desktop enabled", "Disabled RDP", "README did not require remote access", "Confirmed local login and required application", "Verified"],
  ["10:27", "Ubuntu", "Jordan", "User in sudo group", "Removed unauthorized sudo membership", "User approved but not approved administrator", "User login still works", "Verified"],
  ["10:41", "Server", "Sam", "Share permission under review", "No change", "Required department share may depend on existing group", "Needs team lead review", "Unresolved"],
];

const handoffExample = [
  {
    label: "System",
    value: "Ubuntu VM",
  },
  {
    label: "Issue",
    value: "Unexpected listening service on TCP port 8080",
  },
  {
    label: "Checked",
    value: "ss output, systemctl status, service configuration, journal entries",
  },
  {
    label: "Finding",
    value: "Service is tied to the required internal web application",
  },
  {
    label: "Action",
    value: "No disable action taken",
  },
  {
    label: "Next",
    value: "Review firewall exposure while preserving local application access",
  },
];

const preRoundChecklist = [
  "Confirm the current CyberPatriot rules and round instructions.",
  "Confirm which references and resources are permitted for that round.",
  "Confirm required competition software and network access.",
  "Test the team's lab computers and virtualization environment.",
  "Organize reference material by platform.",
  "Remove stale or duplicate copies of notes.",
  "Remove any restricted or team-external competition material.",
  "Prepare blank mission, priority, evidence, change, and handoff templates.",
  "Make the pack readable without depending on one teammate.",
  "Confirm everyone knows where the pack is located.",
  "Keep credentials separate from general reference material.",
  "Let the coach control materials that the rules assign to the coach.",
];

const competitionDayUse = [
  {
    phase: "Start",
    actions: [
      "Read the current round instructions before consulting generic notes.",
      "Complete the mission extraction sheet.",
      "Assign system ownership.",
      "Create the shared priority board.",
    ],
  },
  {
    phase: "Work",
    actions: [
      "Use references to answer specific technical questions.",
      "Record meaningful changes.",
      "Capture evidence before destructive remediation.",
      "Update item status after verification.",
    ],
  },
  {
    phase: "Sync",
    actions: [
      "Review verified work.",
      "Identify blocked items.",
      "Transfer ownership with handoff notes.",
      "Refresh priorities based on remaining risk and time.",
    ],
  },
  {
    phase: "Finish",
    actions: [
      "Stop broad experimentation.",
      "Verify mission-critical users and services.",
      "Review unresolved changes.",
      "Confirm documentation is complete.",
    ],
  },
];

const weakVsBetter = [
  {
    weak: "Create a 200-page document containing every command the team has ever seen.",
    better:
      "Organize short references by platform, task, impact, and verification method.",
  },
  {
    weak: "Copy scripts from the internet into the reference pack.",
    better:
      "Include only commands and scripts the team understands, is permitted to use, and can verify safely.",
  },
  {
    weak: "Store passwords and competition credentials beside general notes.",
    better:
      "Keep sensitive competition credentials controlled separately according to current rules and coach instructions.",
  },
  {
    weak: "Use an old checklist without reading the current README.",
    better:
      "Treat the current mission and round instructions as the authority for that image.",
  },
  {
    weak: "Record only successful fixes.",
    better:
      "Record meaningful changes, verification, unresolved risks, and important no-change decisions.",
  },
  {
    weak: "One teammate owns all reference knowledge.",
    better:
      "Use a shared structure that every team member can navigate quickly.",
  },
];

const finalChecklist = [
  "Verify current rules before every scored round.",
  "Keep the competition README and mission above generic hardening advice.",
  "Use blank reusable team templates.",
  "Organize references by platform and task.",
  "Prefer official documentation.",
  "Include purpose and verification with important commands.",
  "Flag high-impact actions clearly.",
  "Keep restricted competition materials out of general reference packs.",
  "Never use another team's competition information.",
  "Keep sensitive credentials controlled separately.",
  "Review and clean the pack before competition day.",
  "Use the pack to support reasoning rather than replace it.",
];

export default function TeamTemplatesOfflineReferencePackPage() {
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

          <Link
            href="/cyberpatriot/resources/practice-lab-resources"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Resource
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            CyberPatriot Resources &middot; Resource 12
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Team Templates &amp; Offline Reference Pack
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Build a clean, searchable collection of team templates and
            defensive references that helps competitors communicate, document,
            verify, and find trusted technical information quickly.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Always follow the current CyberPatriot Rules Book, round
            instructions, and coach guidance regarding permitted resources.
            Never treat this page as authorization to use a resource during a
            scored competition.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Competition integrity boundary
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            A reference pack is not a place for competition intelligence
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Keep active-round answers, another team's findings, restricted
            images, credentials, scoring information, and other controlled
            competition material out of reusable study references.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Core team templates
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamTemplates.map((template) => (
            <div
              key={template.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">
                {template.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {template.purpose}
              </p>

              <div className="mt-5 grid gap-2">
                {template.fields.map((field) => (
                  <div
                    key={field}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
                  >
                    {field}
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
            Shared status language
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            A short common vocabulary makes the priority board easier to read
            and reduces ambiguous handoffs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {statusValues.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-cyan-300">
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
        <h2 className="text-3xl font-black text-white">
          Suggested reference-pack structure
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packFolders.map((item) => (
            <div
              key={item.folder}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <code className="text-sm font-bold text-cyan-300">
                {item.folder}
              </code>

              <div className="mt-4 grid gap-2">
                {item.contents.map((entry) => (
                  <div
                    key={entry}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs leading-5 text-slate-300"
                  >
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
              General study content
            </p>

            <h2 className="mt-3 text-2xl font-black text-white">
              Useful material to prepare
            </h2>

            <div className="mt-6 grid gap-3">
              {allowedStudyContent.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-400/15 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-200">
              Keep out
            </p>

            <h2 className="mt-3 text-2xl font-black text-white">
              Material that does not belong in the pack
            </h2>

            <div className="mt-6 grid gap-3">
              {neverPack.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
                >
                  <p className="font-black text-white">{item.title}</p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Quick-reference categories
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickReferenceCategories.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-white">
                {area.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {area.entries.map((entry) => (
                  <span
                    key={entry}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {entry}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Build references that are actually usable
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {referenceRules.map((item) => (
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
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Example change log
        </h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
          <table className="min-w-[1050px] w-full text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-950/70 text-cyan-300">
              <tr>
                <th className="p-4">Time</th>
                <th className="p-4">System</th>
                <th className="p-4">Owner</th>
                <th className="p-4">Original State</th>
                <th className="p-4">Action</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Verification</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {changeLogExample.map((row) => (
                <tr
                  key={`${row[0]}-${row[1]}`}
                  className="border-b border-slate-800/70 text-slate-300"
                >
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${index}`}
                      className="p-4 align-top leading-6"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Example handoff note
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {handoffExample.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <h2 className="text-3xl font-black text-white">
            Pre-round reference-pack review
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {preRoundChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Using the pack during team operations
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {competitionDayUse.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-xl font-black text-cyan-300">
                {item.phase}
              </h3>

              <div className="mt-4 grid gap-2">
                {item.actions.map((action) => (
                  <div
                    key={action}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm leading-6 text-slate-300"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <h2 className="text-3xl font-black text-white">
          Weak pack vs better pack
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {weakVsBetter.map((item) => (
            <div
              key={item.weak}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                Weak approach
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.weak}
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                Better approach
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
            Final reference-pack checklist
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

          <Link
            href="/cyberpatriot/resources/practice-lab-resources"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            &larr; Previous Resource
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}