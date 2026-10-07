import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what Local Security Policy controls beyond ordinary Windows settings.",
  "Review User Rights Assignment, Security Options, and Audit Policy with scenario context.",
  "Recognize high-impact policy changes that can affect logon, RDP, networking, services, or evidence.",
  "Distinguish allow rights from deny rights and understand why group membership matters.",
  "Use evidence and least-disruptive reasoning before changing local security policy.",
  "Verify policy, access, functionality, and logging after meaningful changes.",
];

const policyDomains = [
  { title: "Account Policies", text: "Password and lockout settings are part of Local Security Policy. They control how local credentials and failed sign-ins are handled." },
  { title: "Audit Policy", text: "Determines which security-relevant activity Windows records, affecting both detection and forensic evidence." },
  { title: "User Rights Assignment", text: "Defines which users or groups may perform sensitive actions such as local logon, network access, RDP logon, backup, or shutdown." },
  { title: "Security Options", text: "Controls many system-wide behaviors involving accounts, interactive logon, network access, UAC, devices, and other protections." },
];

const userRights = [
  { name: "Allow log on locally", purpose: "Controls who may sign in interactively at the computer.", caution: "Removing a required user or administrator can block local access." },
  { name: "Deny log on locally", purpose: "Explicitly prevents selected users or groups from local interactive sign-in.", caution: "Deny assignments can override expected access and create lockouts." },
  { name: "Access this computer from the network", purpose: "Controls which users or groups may access resources across the network.", caution: "Changing this can affect shares, remote administration, or required services." },
  { name: "Deny access to this computer from the network", purpose: "Explicitly blocks selected users or groups from network access.", caution: "Broad deny assignments can break legitimate network workflows." },
  { name: "Allow log on through Remote Desktop Services", purpose: "Controls who may use RDP when Remote Desktop is enabled.", caution: "Changing it can break required remote administration." },
  { name: "Shut down the system", purpose: "Controls who may shut down the computer.", caution: "Unnecessary assignment creates additional operational risk." },
  { name: "Back up files and directories", purpose: "Grants powerful backup access that can bypass normal file permissions.", caution: "Limit this right to users or groups that genuinely need it." },
  { name: "Restore files and directories", purpose: "Allows restoration actions that can affect ownership and permissions.", caution: "This capability should not be assigned broadly." },
];

const securityOptions = [
  { title: "Interactive logon", text: "Sign-in messages, Ctrl+Alt+Del behavior, inactivity controls, and other local sign-in behavior." },
  { title: "Accounts", text: "Built-in account behavior and other account-related operating-system security settings." },
  { title: "Network access", text: "Anonymous access, local account behavior, and settings that influence network authentication." },
  { title: "User Account Control", text: "Elevation prompts, administrator approval behavior, and secure-desktop choices." },
  { title: "Devices", text: "Settings that can restrict device or removable-media behavior depending on the environment." },
  { title: "System security", text: "Additional system-wide controls that may improve security but can also affect compatibility or required software." },
];

const auditCategories = [
  { title: "Account Logon", text: "Helps record authentication activity involving account validation." },
  { title: "Logon / Logoff", text: "Tracks sign-in sessions, logoffs, and related authentication behavior." },
  { title: "Account Management", text: "Records user and group changes and can support privilege or identity investigations." },
  { title: "Policy Change", text: "Records changes to important security and audit policy." },
  { title: "Privilege Use", text: "Can provide evidence about use of sensitive privileges, though excessive auditing may create noise." },
  { title: "System", text: "Captures important security-subsystem and system events relevant to troubleshooting and forensics." },
];

const impactLevels = [
  { title: "Lower impact", text: "Limited side effects and easy verification. Strong evidence may make this suitable for a normal Do Now task." },
  { title: "Medium impact", text: "Can affect a user group, audit source, application, or specific workflow. Document and test carefully." },
  { title: "High impact", text: "Can affect all users, administrators, RDP, network authentication, or system-wide behavior. Coordinate and preserve recovery access." },
];

const reviewQuestions = [
  "What exact policy setting is currently configured?",
  "What scenario requirement or security objective does it affect?",
  "Which users, groups, services, or remote workflows depend on it?",
  "Is the current setting clearly weak, or only unfamiliar?",
  "Could a deny right override an allow right?",
  "Could the change affect RDP, file sharing, local logon, or service accounts?",
  "Could the setting change what security events are recorded?",
  "How will the team verify security and functionality afterward?",
];

const allowDeny = [
  { title: "Allow rights grant capability", text: "An allow assignment can permit an account or group to perform an action such as local logon or RDP logon." },
  { title: "Deny rights explicitly block capability", text: "Deny assignments are intentionally restrictive and can override expected access." },
  { title: "Group membership affects the result", text: "A user may receive rights through one or more groups, so review both the assignment and the user's memberships." },
  { title: "Effective access must be tested", text: "If allow and deny settings interact, verify the real behavior instead of assuming the list alone tells the full story." },
];

const tools = [
  { title: "Local Security Policy", command: "secpol.msc", text: "Primary graphical tool for local account policies, audit policy, user rights, and security options on supported Windows editions." },
  { title: "Local Group Policy Editor", command: "gpedit.msc", text: "Provides broader local policy configuration and can expose settings outside the narrower security console." },
  { title: "Applied policy overview", command: "gpresult /r", text: "Helps show whether policy sources beyond a simple local setting may be influencing the system." },
];

const policyPaths = [
  {
    title: "Password Policy",
    path: "Win + R → secpol.msc → Account Policies → Password Policy",
    lookFor: "Length, history, age, complexity, and related local password settings.",
  },
  {
    title: "Account Lockout Policy",
    path: "Win + R → secpol.msc → Account Policies → Account Lockout Policy",
    lookFor: "Threshold, duration, and reset-counter behavior.",
  },
  {
    title: "User Rights Assignment",
    path: "Win + R → secpol.msc → Local Policies → User Rights Assignment",
    lookFor: "Who may log on locally, through RDP, from the network, shut down the system, back up files, and perform other sensitive actions.",
  },
  {
    title: "Security Options",
    path: "Win + R → secpol.msc → Local Policies → Security Options",
    lookFor: "Account, interactive logon, UAC, network access, device, and other system-wide security behaviors.",
  },
  {
    title: "Audit Policy",
    path: "Win + R → secpol.msc → Local Policies → Audit Policy",
    lookFor: "Which categories of security-relevant activity Windows is configured to record.",
  },
];

const cases = [
  { title: "RDP is required but login fails", evidence: "The scenario requires Morgan to administer through RDP. RDP is enabled and the firewall appears correct, but Morgan cannot sign in.", reasoning: "The issue may be User Rights Assignment or group membership rather than the RDP service itself.", response: "Review the RDP logon right, relevant deny rights, and Morgan's group membership before changing unrelated settings." },
  { title: "Network access is too broad", evidence: "A broad group can access the computer from the network although only a limited project group requires network access.", reasoning: "The assignment may be excessive, but changing it can affect shares and remote administration.", response: "Map required users and services, narrow carefully, and test the required network path afterward." },
  { title: "Important auditing is disabled", evidence: "The scenario includes forensic questions about account changes, but account-management auditing is disabled.", reasoning: "Without appropriate auditing, future account changes may not be recorded.", response: "Enable the relevant audit category if appropriate, then perform a safe test and verify the Security log records it." },
  { title: "A stricter option breaks required software", evidence: "A restrictive security option looks attractive, but a required application depends on the current behavior.", reasoning: "Technically stricter does not automatically mean correct for the scenario.", response: "Preserve the required application and change policy only when the scenario and compatibility evidence support it." },
];

const auditSteps = [
  "Decide what event question you need to answer.",
  "Enable only the audit categories relevant to that question.",
  "Perform a benign authorized action that should create an event.",
  "Open Event Viewer and find the expected Security log evidence.",
  "Document which policy produced which observable event.",
];

const safetyQuestions = [
  "Do I have a working administrative session before changing this policy?",
  "Could this block local logon or RDP?",
  "Could this affect file sharing or network access?",
  "Could a service or scheduled task depend on the affected account or right?",
  "Does the scenario require the current behavior?",
  "Do I understand allow versus deny behavior here?",
  "Will this alter forensic or audit visibility?",
  "What exact test will prove the change is safe afterward?",
];

const labSteps = [
  { number: "01", title: "Read the fictional scenario", text: "Morgan is the only authorized administrator. Avery and Riley are standard users. Morgan must use RDP. File sharing is required for a small project group. A forensic question asks when local accounts were modified." },
  { number: "02", title: "Inspect the fictional policy", text: "RDP logon is allowed for Administrators, network access is granted broadly, no deny-logon conflict is present, and account-management auditing is disabled." },
  { number: "03", title: "Identify the meaningful problems", text: "RDP access aligns with the scenario. Network access appears broader than required. Audit visibility does not support the forensic need." },
  { number: "04", title: "Plan controlled corrections", text: "Map the users who genuinely require network access, narrow the assignment without breaking the share, and enable the relevant account-management auditing." },
  { number: "05", title: "Test functionality", text: "Confirm Morgan can still use RDP and the project group can still reach the required share." },
  { number: "06", title: "Verify evidence", text: "Perform a safe authorized account-management action and confirm the expected Security log event is recorded." },
];

const mistakes = [
  { title: "Changing user rights blindly", text: "One setting can affect local sign-in, RDP, shares, services, backup capability, or another required workflow." },
  { title: "Ignoring deny assignments", text: "Deny rights can override access that appears to be granted elsewhere." },
  { title: "Assuming stricter is always better", text: "A stronger-looking setting can still be wrong if it conflicts with the scenario or required software." },
  { title: "Enabling every audit category", text: "Too much logging creates noise. Audit what supports the security and forensic questions you need to answer." },
  { title: "Making high-impact changes without recovery access", text: "Do not risk losing the only working administrative path to the image." },
  { title: "Skipping functional verification", text: "Policy work is not complete until required users, RDP, shares, services, and logging still function." },
];

const verification = [
  "Re-open each changed setting and confirm its final value.",
  "Confirm authorized local logon still works.",
  "Confirm required RDP access still works when applicable.",
  "Confirm required network access and shares still work.",
  "Confirm service accounts and privileged groups were not unintentionally blocked.",
  "Confirm expected audit events are being recorded.",
  "Check Event Viewer for errors related to the change.",
  "Document high-impact policy changes and test results.",
  "Re-read scenario requirements before leaving Local Security Policy.",
];

const reflection = [
  "Why can User Rights Assignment be riskier to change than a normal visual setting?",
  "How can a deny right affect an account that also belongs to an allowed group?",
  "Why should RDP be tested after changing user rights?",
  "What is the purpose of auditing account-management activity?",
  "Why can enabling every audit category be counterproductive?",
  "What should you verify after changing a high-impact security option?",
];

export default function LocalSecurityPolicyPage() {
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
            <Link href="/cyberpatriot/windows-11/password-account-policies" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/microsoft-defender-antivirus" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Windows 11 · Lesson 04</p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Local Security Policy</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Learn how local policy controls user rights, auditing, account behavior, and system-wide security decisions that can affect the entire Windows image.</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">The goal is not to make every option more restrictive. Understand what the policy controls, compare it with the scenario, make justified changes, and verify the result.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Major policy domains</span><span className="font-bold text-white">4</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>User-right examples</span><span className="font-bold text-white">8</span></div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3"><span>Audit categories</span><span className="font-bold text-white">6</span></div>
                <div className="flex items-center justify-between gap-6"><span>Main goal</span><span className="font-bold text-white">Safe policy hardening</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Learning objectives</p>
          <h2 className="mt-3 text-3xl font-black text-white">What this lesson should help you do</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Core concept</p><h2 className="mt-3 text-2xl font-black text-white">Policy defines what the system permits</h2><p className="mt-4 text-sm leading-7 text-slate-300">Account review asks who exists. Local Security Policy goes further: what may that user or group do, and what security activity should Windows record?</p></div>
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">High-impact warning</p><h2 className="mt-3 text-2xl font-black text-white">Some policy changes can lock out the team</h2><p className="mt-4 text-sm leading-7 text-slate-300">User-right and security-option changes can affect administrators, RDP, local sign-in, shares, services, and authentication.</p><div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">Preserve a valid administrative path and know how you will test a high-impact change.</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Quick path map</p>
          <h2 className="mt-3 text-3xl font-black text-white">Exactly where to go in Local Security Policy</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
            Open the console first with <span className="font-semibold text-cyan-200">Win + R → secpol.msc</span>, then use the path that matches the requirement you are reviewing.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {policyPaths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.lookFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Policy map</p><h2 className="mt-2 text-3xl font-black text-white">Four major areas to recognize</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{policyDomains.map((item) => <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">User Rights Assignment</p><h2 className="mt-3 text-3xl font-black text-white">Rights can change who may perform sensitive actions</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{userRights.map((item) => <article key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-white">{item.name}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p><div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3"><p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Caution</p><p className="mt-2 text-sm leading-6 text-slate-300">{item.caution}</p></div></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Allow vs deny</p><h2 className="mt-3 text-2xl font-black text-white">Understand effective access</h2><div className="mt-5 grid gap-3">{allowDeny.map((item) => <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-black text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p></div>)}</div></div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Evidence questions</p><h2 className="mt-3 text-2xl font-black text-white">Ask before changing security policy</h2><div className="mt-5 grid gap-3">{reviewQuestions.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Security Options</p><h2 className="mt-2 text-3xl font-black text-white">System-wide behavior deserves careful reasoning</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{securityOptions.map((item) => <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Audit Policy</p><h2 className="mt-3 text-3xl font-black text-white">Decide what security activity Windows should record</h2><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{auditCategories.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Impact levels</p><h2 className="mt-3 text-2xl font-black text-white">Classify before changing</h2><div className="mt-5 grid gap-3">{impactLevels.map((item) => <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-black text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p></div>)}</div></div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Inspection tools</p><h2 className="mt-3 text-2xl font-black text-white">Understand current policy first</h2><div className="mt-5 grid gap-3">{tools.map((item) => <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><h3 className="font-black text-white">{item.title}</h3><code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">{item.command}</code><p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Decision cases</p><h2 className="mt-3 text-3xl font-black text-white">Local policy decisions in context</h2><div className="mt-8 grid gap-5 lg:grid-cols-2">{cases.map((item) => <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"><h3 className="text-xl font-black text-white">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p><p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p><div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Response</p><p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p></div></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Audit verification</p><h2 className="mt-3 text-2xl font-black text-white">Prove the logging works</h2><div className="mt-5 grid gap-3">{auditSteps.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Before a high-impact change</p><h2 className="mt-3 text-2xl font-black text-white">Eight safety questions</h2><div className="mt-5 grid gap-3">{safetyQuestions.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9"><p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Fictional defensive lab</p><h2 className="mt-3 text-3xl font-black text-white">Secure policy without breaking required access</h2><div className="mt-8 grid gap-4">{labSteps.map((item) => <div key={item.number} className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Step {item.number}</p><h3 className="mt-2 font-black text-white">{item.title}</h3></div><p className="text-sm leading-7 text-slate-300">{item.text}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Common mistakes</p><h2 className="mt-2 text-3xl font-black text-white">Policy changes that create avoidable problems</h2><div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{mistakes.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"><h3 className="text-lg font-black text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p></div>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reflection</p><h2 className="mt-3 text-2xl font-black text-white">Test your security-policy reasoning</h2><div className="mt-5 grid gap-3">{reflection.map((item, index) => <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Question {index + 1}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verification checklist</p><h2 className="mt-3 text-2xl font-black text-white">Confirm the final policy state</h2><div className="mt-5 grid gap-3">{verification.map((item, index) => <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"><span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9"><div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Next Windows lesson</p><h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Microsoft Defender Antivirus</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Next, review Defender protection status, exclusions, scan behavior, protection history, and evidence without destroying information that may matter to the competition image.</p></div><Link
              href="/cyberpatriot/windows-11/microsoft-defender-antivirus"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 05 →
            </Link></div></div>
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
            <Link href="/cyberpatriot/windows-11/password-account-policies" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/microsoft-defender-antivirus" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
