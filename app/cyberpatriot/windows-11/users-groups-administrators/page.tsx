import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between an authorized account, an authorized administrator, a disabled account, and an account that requires investigation.",
  "Review local Windows 11 users and groups without assuming every unfamiliar account is malicious.",
  "Use scenario evidence to decide which users should exist and which users should have elevated privileges.",
  "Apply least privilege by correcting unnecessary administrator access without removing legitimate users.",
  "Recognize built-in and special accounts that require context before modification.",
  "Verify identity changes so required access remains available and privilege changes actually took effect.",
];

const identityCategories = [
  {
    title: "Authorized administrator",
    meaning:
      "A user explicitly allowed to have elevated administrative privileges for the scenario or system role.",
    action:
      "Keep the account and required privilege. Verify it belongs only to the groups it actually needs.",
  },
  {
    title: "Authorized standard user",
    meaning:
      "A legitimate user who should be able to sign in or use the system but does not require administrative privilege.",
    action:
      "Keep the account, remove unnecessary elevation if present, and preserve required access.",
  },
  {
    title: "Unauthorized account",
    meaning:
      "An account whose existence conflicts with clear scenario requirements or other strong evidence.",
    action:
      "Document the evidence, consider dependencies, then use the least disruptive justified remediation.",
  },
  {
    title: "Unknown / needs investigation",
    meaning:
      "An account is unfamiliar or not clearly explained, but the available evidence is not strong enough for a destructive decision.",
    action:
      "Investigate ownership, activity, group membership, dependencies, and scenario context before acting.",
  },
];

const reviewOrder = [
  {
    number: "01",
    title: "Build the scenario identity map",
    text: "Write down every authorized user and every authorized administrator separately. Do not merge these two lists.",
  },
  {
    number: "02",
    title: "Inventory local accounts",
    text: "Review the local user list, enabled state, descriptions, and other account details before changing anything.",
  },
  {
    number: "03",
    title: "Review privileged groups",
    text: "Check Administrators and other groups that grant meaningful system access or management capability.",
  },
  {
    number: "04",
    title: "Compare scenario to system",
    text: "Classify each account based on evidence: authorized administrator, authorized standard user, unauthorized, or unknown.",
  },
  {
    number: "05",
    title: "Correct privilege before deleting",
    text: "If a legitimate user only has the wrong privilege, fix the group membership instead of removing the user account.",
  },
  {
    number: "06",
    title: "Verify access and membership",
    text: "Confirm the new group state and make sure required users and administrators still have the access the scenario expects.",
  },
];

const builtInAccounts = [
  {
    name: "Administrator",
    text:
      "Windows includes a built-in Administrator account. Its state and use should be reviewed in context rather than treated exactly like an ordinary named user.",
  },
  {
    name: "Guest",
    text:
      "The built-in Guest account is normally restricted and should be reviewed carefully if enabled. Do not confuse the built-in account with a normal user merely named similarly.",
  },
  {
    name: "DefaultAccount",
    text:
      "Windows may include system-managed accounts that exist for operating-system functions. Their presence alone is not evidence of compromise.",
  },
  {
    name: "WDAGUtilityAccount",
    text:
      "Some Windows editions or features may create specialized system accounts. Understand purpose before modifying or deleting them.",
  },
];

const evidenceQuestions = [
  "Is the account explicitly listed in the scenario?",
  "Is the user authorized to exist but not authorized as an administrator?",
  "What groups is the account currently in?",
  "Is the account enabled or disabled?",
  "Does a service, scheduled task, file, or application appear to depend on the account?",
  "Is there recent login or activity evidence that matters to a forensic question?",
  "Is this a built-in or system-managed account rather than a normal user?",
  "What is the least disruptive justified correction?",
];

const adminReview = [
  {
    title: "Administrators membership",
    text:
      "Compare every member against the scenario. Administrative access should be limited to users who actually need it.",
  },
  {
    title: "Nested or indirect privilege",
    text:
      "Remember that group membership can grant privilege indirectly. Review relevant privileged groups instead of checking only one user at a time.",
  },
  {
    title: "Temporary elevation",
    text:
      "If a legitimate user appears to have unnecessary elevation, determine whether the privilege is required by the scenario before removing it.",
  },
  {
    title: "Service and task context",
    text:
      "Some services or scheduled tasks may run under specific accounts. Understand that dependency before disabling or deleting an account.",
  },
];

const windowsTools = [
  {
    title: "Computer Management",
    path:
      "Win + R → compmgmt.msc → System Tools → Local Users and Groups → Users / Groups",
    detail:
      "Local Users and Groups provides a graphical view of local accounts and group membership on supported Windows editions.",
  },
  {
    title: "Settings",
    path:
      "Settings → Accounts → Other users",
    detail:
      "Useful for common account views and sign-in configuration, though it does not expose every local security detail.",
  },
  {
    title: "Control Panel / legacy tools",
    path:
      "Control Panel → User Accounts → User Accounts",
    detail:
      "Some account and group views still exist in traditional Windows administrative interfaces and can provide useful context.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when the command requires elevation",
    detail:
      "Useful for fast inventory and verification when you understand the command and are working in an authorized environment.",
  },
];

const powershellExamples = [
  {
    label: "List local users",
    command: "Get-LocalUser",
    purpose:
      "Shows local accounts and basic state information so the team can compare the system to the scenario.",
  },
  {
    label: "List local groups",
    command: "Get-LocalGroup",
    purpose:
      "Shows available local groups and helps identify where privileges may be assigned.",
  },
  {
    label: "Review Administrators",
    command: 'Get-LocalGroupMember -Group "Administrators"',
    purpose:
      "Displays current local Administrators membership for comparison with authorized administrators.",
  },
  {
    label: "Inspect one user",
    command: 'Get-LocalUser -Name "exampleuser"',
    purpose:
      "Shows detailed local account information for a specific fictional or authorized practice user.",
  },
];

const decisionCases = [
  {
    title: "Legitimate user, excessive privilege",
    scenario:
      "Taylor is listed as an authorized user but not as an administrator. Taylor is currently a member of Administrators.",
    weak:
      "Delete Taylor because the account appears in a privileged group.",
    better:
      "Keep Taylor's legitimate account, remove only the unnecessary administrator membership, and verify Taylor remains able to use the system as required.",
  },
  {
    title: "Unfamiliar account with unclear purpose",
    scenario:
      "An account named svc_media is not mentioned in the user list, but a required application appears to use a service with a similar name.",
    weak:
      "Delete the account immediately because it is not in the user list.",
    better:
      "Investigate service ownership, logon configuration, application dependencies, and scenario requirements before deciding whether the account is unnecessary.",
  },
  {
    title: "Clearly unauthorized administrator",
    scenario:
      "The scenario explicitly identifies one authorized administrator. A second ordinary user is also in Administrators with no stated need for elevation.",
    weak:
      "Disable every administrator except the named one without checking whether the other account is still a required standard user.",
    better:
      "Correct the unauthorized privilege while preserving any legitimate account existence required by the scenario.",
  },
  {
    title: "Built-in account",
    scenario:
      "The built-in Guest account appears in the account inventory.",
    weak:
      "Treat it exactly like a newly created suspicious user.",
    better:
      "Recognize it as a built-in account, review its enabled state and policy context, and make a decision based on the system requirements.",
  },
];

const groupConcepts = [
  {
    title: "Administrators",
    text:
      "Members can make broad system changes. Membership deserves careful scenario comparison and verification.",
  },
  {
    title: "Users",
    text:
      "Standard users normally receive routine access without full administrative control.",
  },
  {
    title: "Remote Desktop Users",
    text:
      "Membership may matter when the scenario requires Remote Desktop access for specific non-administrator users.",
  },
  {
    title: "Backup Operators and other privileged groups",
    text:
      "Some groups grant specialized rights. Do not assume only Administrators matters when reviewing privilege.",
  },
];

const verification = [
  {
    title: "Account existence",
    text: "Confirm every user who must remain on the system still exists.",
  },
  {
    title: "Enabled state",
    text: "Confirm accounts are enabled or disabled according to the intended secure state and scenario.",
  },
  {
    title: "Group membership",
    text: "Re-open the group or re-run the inspection command to prove the privilege change took effect.",
  },
  {
    title: "Required access",
    text: "Confirm authorized users can still perform the functions they are supposed to perform.",
  },
  {
    title: "Administrator access",
    text: "Confirm the team has not removed all valid administrative access needed to continue managing the image.",
  },
  {
    title: "Evidence preservation",
    text: "Confirm account changes did not destroy information still needed for forensic questions or troubleshooting.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Authorized administrators: Morgan. Authorized standard users: Avery, Jordan, Riley. RDP is required for Morgan. A forensic question asks about failed sign-ins from the previous evening.",
  },
  {
    number: "02",
    title: "Review the fictional system state",
    text:
      "Administrators currently contains Morgan, Jordan, and a user named tempadmin. Avery, Jordan, Riley, and tempadmin all exist as enabled local accounts.",
  },
  {
    number: "03",
    title: "Classify each identity",
    text:
      "Morgan is an authorized administrator. Avery, Jordan, and Riley are authorized standard users. tempadmin conflicts with the scenario and requires evidence-based remediation.",
  },
  {
    number: "04",
    title: "Choose the least disruptive changes",
    text:
      "Jordan should remain a user but lose unnecessary administrator privilege. tempadmin requires review of activity and dependencies before the account is removed or disabled.",
  },
  {
    number: "05",
    title: "Protect forensic evidence",
    text:
      "Before destructive changes, review relevant sign-in evidence so the failed-login question can still be answered.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Confirm Morgan is the only authorized administrator, Avery/Jordan/Riley remain available as standard users, required RDP still works, and forensic findings are documented.",
  },
];

const mistakes = [
  {
    title: "Authorized user = authorized admin",
    text:
      "A person may be allowed to have an account without being allowed to have elevated privilege.",
  },
  {
    title: "Deleting instead of de-privileging",
    text:
      "Removing a legitimate account can break required access when the real problem is only excessive group membership.",
  },
  {
    title: "Unknown account = malicious account",
    text:
      "Unfamiliar service or system accounts require context and evidence before destructive action.",
  },
  {
    title: "Checking only Administrators",
    text:
      "Other groups may grant meaningful rights or support required access such as Remote Desktop.",
  },
  {
    title: "Ignoring task or service dependencies",
    text:
      "An account may be tied to a required service, scheduled task, or application. Check dependencies first.",
  },
  {
    title: "No post-change verification",
    text:
      "A successful removal command or GUI change does not prove the final identity state is correct.",
  },
];

const reflection = [
  "Why should authorized users and authorized administrators be written as separate lists?",
  "Why is removing administrator membership often safer than deleting a legitimate user?",
  "What makes a built-in Windows account different from an ordinary user account?",
  "What evidence would you gather before removing an unfamiliar service account?",
  "Why should groups other than Administrators sometimes be reviewed?",
  "What should be verified after changing user or group membership?",
];

const checklist = [
  "Write the authorized-user list.",
  "Write the authorized-administrator list separately.",
  "Inventory local users.",
  "Check enabled and disabled account states.",
  "Review Administrators membership.",
  "Review other relevant privileged or access groups.",
  "Identify built-in or system-managed accounts before changing them.",
  "Check service, scheduled-task, or application dependencies for unfamiliar accounts.",
  "Separate account existence from account privilege.",
  "Correct unnecessary privilege with the least disruptive change.",
  "Protect account-related forensic evidence before destructive actions.",
  "Verify users and groups after every meaningful change.",
  "Confirm required administrators still have management access.",
  "Document unresolved identity questions for later review.",
];

export default function UsersGroupsAdministratorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/competition-workflow" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/password-account-policies" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows 11 · Lesson 02
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Users, Groups &amp; Administrators
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review Windows identities carefully, separate legitimate users
                from privileged users, and correct unnecessary access without
                breaking required accounts or services.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Identity review is not “delete every account you do not
                recognize.” Strong Windows defense compares scenario
                authorization, current group membership, account purpose,
                dependencies, activity, and privilege before changing the
                system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Identity categories</span>
                  <span className="font-bold text-white">4</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Review sequence</span>
                  <span className="font-bold text-white">6 steps</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main principle</span>
                  <span className="font-bold text-white">Least privilege</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Correct identities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Learning objectives
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              What identity review should help you do
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Account existence and privilege are separate questions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A user can be completely legitimate while still having too much
              privilege. If the scenario authorizes the account but not
              administrative access, the correct response may be to change
              group membership rather than remove the account.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Identity warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Unfamiliar does not automatically mean unauthorized
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Windows can contain built-in, system-managed, service, and
              application-related accounts. Investigate purpose and dependency
              before destructive actions.
            </p>

            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Strong evidence should come before account deletion or other
              irreversible identity changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Identity classification
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Four categories for every account you review
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {identityCategories.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.meaning}
              </p>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Response
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.action}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Review sequence
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              A practical identity review from scenario to verification
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviewOrder.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Evidence questions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ask before changing an account
            </h2>

            <div className="mt-5 grid gap-3">
              {evidenceQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Administrator review
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Privilege deserves extra scrutiny
            </h2>

            <div className="mt-5 grid gap-3">
              {adminReview.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Built-in and system accounts
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Recognize context before modification
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Windows may contain accounts that exist because of the operating
              system or enabled features. Their presence should be understood
              before the team treats them like ordinary scenario users.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {builtInAccounts.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Group concepts
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            More than one group can affect access
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groupConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Where identity information can be reviewed
            </h2>

            <div className="mt-5 grid gap-3">
              {windowsTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.path}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Fast identity visibility in authorized practice
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              These examples are inspection-focused. Read the output and compare
              it with the scenario before making changes.
            </p>

            <div className="mt-5 grid gap-3">
              {powershellExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Decision cases
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Identity decisions should match the evidence
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.scenario}
                </p>

                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                    Weak response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.weak}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Better response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.better}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Prove the final identity state is correct
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Fictional defensive lab
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Build the correct user and privilege state
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Common mistakes
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Identity-review habits that create problems
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your identity reasoning
            </h2>

            <div className="mt-5 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Identity checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Review before leaving the account area
            </h2>

            <div className="mt-5 grid gap-3">
              {checklist.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Password &amp; Account Policies
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how password length, complexity, history, lockout,
                expiration, and related policy choices affect Windows account
                security and user access.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/password-account-policies"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 03 →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows 11
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-11/competition-workflow" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/password-account-policies" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
