import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Remote Desktop depends on users, group membership, user rights, firewall rules, services, and network reachability.",
  "Review whether RDP is required before enabling, disabling, or narrowing access.",
  "Distinguish secure remote administration from unnecessary remote exposure.",
  "Recognize how Network Level Authentication, allowed users, firewall scope, and service state affect RDP security.",
  "Use Windows Settings, System Properties, Local Security Policy, Services, Firewall, and PowerShell to inspect RDP safely.",
  "Verify both authorized remote access and reduced exposure after changes.",
];

const rdpDependencies = [
  {
    title: "Remote Desktop setting",
    text:
      "Windows must permit Remote Desktop connections before a user can connect.",
  },
  {
    title: "Authorized user",
    text:
      "The connecting account must be allowed to use RDP and must not be blocked by account state or policy.",
  },
  {
    title: "Group membership",
    text:
      "Administrators and Remote Desktop Users can affect who is allowed to connect, depending on the policy configuration.",
  },
  {
    title: "User Rights Assignment",
    text:
      "The right to log on through Remote Desktop Services can grant or restrict access regardless of other settings.",
  },
  {
    title: "Firewall",
    text:
      "Inbound firewall rules must allow the required RDP traffic on the active profile and appropriate remote scope.",
  },
  {
    title: "Remote Desktop Services",
    text:
      "Required Windows services must be available for remote sessions to function.",
  },
  {
    title: "Network reachability",
    text:
      "The client must be able to reach the Windows host across the intended network path.",
  },
  {
    title: "Credential security",
    text:
      "Strong passwords, account lockout, least privilege, and secure authentication all matter because RDP exposes a remote sign-in path.",
  },
];

const securityControls = [
  {
    title: "Network Level Authentication",
    text:
      "NLA requires authentication before a full remote desktop session is created, reducing unnecessary exposure to unauthenticated sessions.",
  },
  {
    title: "Least-privilege users",
    text:
      "Only users who need remote access should be allowed to connect.",
  },
  {
    title: "Restricted firewall scope",
    text:
      "If the scenario supports it, limit RDP firewall access to the network or remote addresses that actually need it.",
  },
  {
    title: "Strong account policy",
    text:
      "Remote access is only as strong as the accounts exposed through it. Password and lockout policy matter.",
  },
  {
    title: "Minimal administrative privilege",
    text:
      "A user who needs RDP does not automatically need to be a local administrator.",
  },
  {
    title: "Logging and review",
    text:
      "Sign-in events, failed attempts, and remote-session evidence can help with troubleshooting and forensics.",
  },
];

const inspectionTools = [
  {
    title: "Windows Settings",
    command: "Settings → System → Remote Desktop",
    text:
      "Shows whether Remote Desktop is enabled and provides access to related configuration.",
  },
  {
    title: "System Properties",
    command: "sysdm.cpl",
    text:
      "Provides classic Remote settings and access to Remote Desktop user selection on supported editions.",
  },
  {
    title: "Local Security Policy",
    command: "secpol.msc",
    text:
      "Review 'Allow log on through Remote Desktop Services' and relevant deny rights.",
  },
  {
    title: "Services",
    command: "services.msc",
    text:
      "Review Remote Desktop Services and related service state without changing anything blindly.",
  },
  {
    title: "Firewall with Advanced Security",
    command: "wf.msc",
    text:
      "Review the Remote Desktop inbound rules, active profile, enabled state, and remote address scope.",
  },
];

const powershellExamples = [
  {
    label: "Check whether Remote Desktop is allowed",
    command:
      'Get-ItemProperty "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" -Name fDenyTSConnections',
    purpose:
      "Shows whether Windows is configured to deny or allow Remote Desktop connections.",
  },
  {
    label: "Review Remote Desktop Users",
    command:
      'Get-LocalGroupMember -Group "Remote Desktop Users"',
    purpose:
      "Shows users and groups explicitly assigned to the local Remote Desktop Users group.",
  },
  {
    label: "Review RDP firewall rules",
    command:
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select-Object DisplayName, Enabled, Direction, Action, Profile',
    purpose:
      "Provides a quick view of Remote Desktop firewall rule state.",
  },
  {
    label: "Review remote scope",
    command:
      'Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Get-NetFirewallAddressFilter',
    purpose:
      "Shows remote address scope for RDP rules so broad exposure can be identified.",
  },
];

const authorizationQuestions = [
  "Does the scenario require Remote Desktop at all?",
  "Which exact users are authorized to connect remotely?",
  "Do those users need standard-user access or administrator privilege?",
  "Are they members of Remote Desktop Users, Administrators, or another authorized group?",
  "Does User Rights Assignment allow them to log on through RDP?",
  "Is any deny right blocking them?",
  "Is the account enabled and allowed to sign in?",
  "Does the account have a strong credential under the current password policy?",
];

const firewallQuestions = [
  "Which firewall profile is active?",
  "Are the Remote Desktop inbound rules enabled only where required?",
  "Does the rule apply to Domain, Private, Public, or all profiles?",
  "Is remote address scope broader than necessary?",
  "Does the scenario require RDP from one subnet, one host, or a wider network?",
  "Would narrowing scope still preserve required access?",
  "Could another firewall rule be blocking or overriding the expected path?",
];

const nlaConcepts = [
  {
    title: "Authenticate earlier",
    text:
      "NLA requires the user to authenticate before Windows creates the full graphical remote session.",
  },
  {
    title: "Reduce exposed session resources",
    text:
      "Because authentication happens earlier, fewer remote-session resources are exposed to unauthenticated clients.",
  },
  {
    title: "Compatibility matters",
    text:
      "Very old or unusual clients may have compatibility issues, so the scenario and environment still matter.",
  },
  {
    title: "Not a replacement for other controls",
    text:
      "NLA does not replace strong passwords, lockout policy, firewall scope, least privilege, or logging.",
  },
];

const decisionCases = [
  {
    title: "RDP is required for one administrator",
    evidence:
      "The scenario says Morgan must administer the image remotely. RDP is enabled and Morgan is an administrator.",
    reasoning:
      "The remote function is required, so disabling RDP would violate the scenario.",
    response:
      "Keep RDP available, restrict access to Morgan or the required admin group, enable secure authentication, narrow firewall scope where possible, and verify the connection.",
  },
  {
    title: "RDP enabled but not required",
    evidence:
      "Remote Desktop is enabled, but the scenario describes only local administration and no remote workflow.",
    reasoning:
      "An unnecessary remote sign-in path adds attack surface.",
    response:
      "Confirm there is no hidden dependency, then disable or otherwise remove the unnecessary remote exposure and verify local administration remains intact.",
  },
  {
    title: "Authorized user cannot connect",
    evidence:
      "Riley is supposed to connect through RDP, but the connection is rejected.",
    reasoning:
      "The failure may come from group membership, user rights, account state, firewall, service state, or network path.",
    response:
      "Troubleshoot the dependency chain rather than changing unrelated settings or granting administrator rights unnecessarily.",
  },
  {
    title: "RDP open on Public profile",
    evidence:
      "RDP rules are enabled for Public and allow any remote address, but the scenario only needs internal lab access.",
    reasoning:
      "The service is required, but the exposure is broader than the requirement.",
    response:
      "Keep RDP available on the needed profile and narrow remote scope to the authorized network if the environment supports it.",
  },
];

const sessionEvidence = [
  {
    title: "Successful sign-ins",
    text:
      "Can help confirm that authorized remote access works and establish when a user connected.",
  },
  {
    title: "Failed sign-ins",
    text:
      "Repeated failures may indicate configuration problems, stale credentials, or potentially suspicious access attempts.",
  },
  {
    title: "Account context",
    text:
      "Usernames and groups help determine whether the connecting account was authorized.",
  },
  {
    title: "Time correlation",
    text:
      "Match RDP activity with firewall, account, event-log, and forensic timelines.",
  },
  {
    title: "Source information",
    text:
      "Where available, network source details can help explain which system initiated the connection.",
  },
  {
    title: "Session state",
    text:
      "Active, disconnected, or ended sessions can help explain current access and user activity.",
  },
];

const troubleshooting = [
  {
    symptom: "Remote Desktop says access is denied",
    questions:
      "Is the user authorized? Is the account enabled? Is the user in an allowed group? Does User Rights Assignment allow RDP logon? Is a deny right overriding access?",
  },
  {
    symptom: "Connection times out",
    questions:
      "Is the host reachable? Is RDP enabled? Are Remote Desktop Services running? Is the firewall rule enabled on the active profile and correct remote scope?",
  },
  {
    symptom: "RDP worked before a firewall change",
    questions:
      "Was the active profile changed? Did remote address scope become too narrow? Was the Remote Desktop rule disabled or replaced?",
  },
  {
    symptom: "RDP works only for administrators",
    questions:
      "Do standard users belong to Remote Desktop Users? Does policy allow that group to log on through Remote Desktop Services?",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "Morgan is the authorized administrator and must connect through RDP from the internal lab network. Avery and Riley are standard users and do not need RDP.",
  },
  {
    number: "02",
    title: "Inspect RDP configuration",
    text:
      "Remote Desktop is enabled. NLA is enabled. Morgan is in Administrators. Avery is also in Remote Desktop Users even though the scenario does not require it.",
  },
  {
    number: "03",
    title: "Inspect policy and firewall",
    text:
      "The RDP logon right includes Administrators and Remote Desktop Users. Firewall rules are enabled on Private and Public and allow any remote address.",
  },
  {
    number: "04",
    title: "Design least privilege",
    text:
      "Morgan should keep RDP access. Avery should not retain unnecessary remote access. Public-profile RDP exposure is broader than required.",
  },
  {
    number: "05",
    title: "Apply controlled changes",
    text:
      "Remove Avery from Remote Desktop Users, preserve Morgan's access, and narrow the firewall configuration to the required internal environment.",
  },
  {
    number: "06",
    title: "Verify",
    text:
      "Test that Morgan can still connect from the authorized path, Avery cannot use RDP, NLA remains enabled, and local access remains available.",
  },
];

const hardeningChecklist = [
  "Confirm whether RDP is required by the scenario.",
  "Identify exactly which users need remote access.",
  "Remove unnecessary users from Remote Desktop Users.",
  "Do not grant administrator privilege merely to make RDP work.",
  "Review 'Allow log on through Remote Desktop Services.'",
  "Review deny rights that may affect RDP.",
  "Confirm NLA is enabled when appropriate.",
  "Confirm Remote Desktop Services are available.",
  "Confirm firewall rules apply only to required profiles.",
  "Narrow remote address scope when supported by the scenario.",
  "Review password and lockout policy for exposed accounts.",
  "Check sign-in logs for relevant RDP evidence.",
];

const verification = [
  "Confirm RDP is enabled only if required.",
  "Confirm the authorized user can connect remotely.",
  "Confirm unauthorized users cannot use RDP.",
  "Confirm NLA is enabled when appropriate.",
  "Confirm the expected Remote Desktop Services are running.",
  "Confirm firewall rules are enabled only where required.",
  "Confirm remote address scope matches the intended network.",
  "Confirm local logon still works.",
  "Confirm no required application or remote-management workflow was broken.",
  "Check logs for failed or suspicious remote sign-in evidence.",
  "Document all high-impact RDP changes.",
];

const mistakes = [
  {
    title: "Disabling RDP without reading the scenario",
    text:
      "If remote administration is required, turning RDP off solves the wrong problem.",
  },
  {
    title: "Adding users to Administrators just to make RDP work",
    text:
      "Remote access and administrative privilege are separate decisions.",
  },
  {
    title: "Ignoring User Rights Assignment",
    text:
      "A correct group membership can still fail if policy does not permit remote logon.",
  },
  {
    title: "Opening RDP to every network",
    text:
      "A required service does not need unrestricted exposure.",
  },
  {
    title: "Troubleshooting by disabling the firewall",
    text:
      "That removes an important protection layer and hides the real rule or scope problem.",
  },
  {
    title: "No end-to-end test",
    text:
      "RDP is not verified until the authorized user connects through the intended network path.",
  },
];

const reflection = [
  "Why does a user not need to be an administrator just to use Remote Desktop?",
  "How can User Rights Assignment block a user who appears to be in the correct group?",
  "Why should RDP firewall scope be reviewed instead of simply enabling the default rules everywhere?",
  "What security benefit does Network Level Authentication provide?",
  "Why should failed RDP sign-ins be reviewed as evidence?",
  "What should be verified after narrowing RDP access?",
];

export default function RemoteAccessRdpPage() {
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
            <Link href="/cyberpatriot/windows-11/files-folders-share-permissions" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/task-scheduler-persistence-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Remote Access &amp; RDP
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Secure Remote Desktop by understanding the full dependency
                chain: users, rights, services, firewall, network scope, and
                authentication all have to align.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not simply “RDP on” or “RDP off.” The goal is to
                preserve only the remote access the scenario actually requires,
                for only the users and networks that need it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>RDP dependencies</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Security controls</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main principle</span>
                  <span className="font-bold text-white">Required-only access</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure remote administration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            What this lesson should help you do
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core concept
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              RDP is a chain, not one setting
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A user can be authorized but still fail because of user rights,
              firewall scope, service state, or network path. Likewise, an
              enabled service is not secure if access is broader than required.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Remote-access warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              A required service can still be overexposed
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              RDP may be necessary while the users, profiles, or remote-address
              scope are too broad.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Preserve required access, then narrow who can use it and where
              connections can come from.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          RDP dependency chain
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Eight things that have to align
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rdpDependencies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Security controls
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep remote administration narrow and intentional
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {securityControls.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Windows tools
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Inspect Remote Desktop from every relevant layer
            </h2>
            <div className="mt-5 grid gap-3">
              {inspectionTools.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              PowerShell inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Query RDP state without changing it
            </h2>
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
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              User authorization
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm who is allowed to connect
            </h2>
            <div className="mt-5 grid gap-3">
              {authorizationQuestions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-yellow-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Firewall scope
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm where RDP can be reached from
            </h2>
            <div className="mt-5 grid gap-3">
              {firewallQuestions.map((item, index) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Network Level Authentication
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Authenticate before the full remote session
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {nlaConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            RDP decisions in context
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            RDP as evidence
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remote access leaves useful traces
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sessionEvidence.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When Remote Desktop does not work
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.questions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep required RDP while removing unnecessary access
          </h2>
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
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            RDP hardening checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Review every layer before leaving Remote Access
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {hardeningChecklist.map((item, index) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Remote-access habits that create avoidable problems
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
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
              Test your RDP reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the final remote-access state
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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
                Task Scheduler &amp; Persistence Review
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how scheduled tasks, triggers, actions, accounts,
                paths, and recurring execution can support legitimate automation
                or create suspicious persistence.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/task-scheduler-persistence-review"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 12 →
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
            <Link href="/cyberpatriot/windows-11/files-folders-share-permissions" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/task-scheduler-persistence-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
