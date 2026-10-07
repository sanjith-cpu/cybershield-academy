import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between Local Group Policy and domain-based Group Policy.",
  "Use Group Policy Management to identify GPOs, links, scope, inheritance, enforcement, and filtering.",
  "Understand the basic processing order of Local, Site, Domain, and Organizational Unit policy.",
  "Recognize why editing the wrong GPO can affect many systems at once.",
  "Use gpresult and PowerShell to inspect effective policy before making changes.",
  "Review security-related settings without assuming one universal configuration is correct for every server role.",
];

const coreConcepts = [
  {
    title: "Group Policy Object",
    text:
      "A collection of policy settings that can be linked to Active Directory sites, domains, or organizational units.",
  },
  {
    title: "Link",
    text:
      "A connection between a GPO and a site, domain, or OU that determines where the GPO can apply.",
  },
  {
    title: "Scope",
    text:
      "The users or computers that can receive a policy based on location, security filtering, WMI filtering, and other conditions.",
  },
  {
    title: "Inheritance",
    text:
      "Policy linked higher in Active Directory can flow downward unless blocked or overridden by later processing rules.",
  },
  {
    title: "Precedence",
    text:
      "When multiple policies configure the same setting, processing order and link order help determine the effective result.",
  },
  {
    title: "Effective policy",
    text:
      "The final policy a user or computer actually receives after all applicable GPOs, filters, and processing rules are considered.",
  },
];

const toolPaths = [
  {
    title: "Group Policy Management",
    path:
      "Server Manager → Tools → Group Policy Management",
    shortcut:
      "Win + R → gpmc.msc",
    note:
      "Primary console for reviewing domains, OUs, GPOs, links, inheritance, security filtering, and Group Policy Results.",
  },
  {
    title: "Edit a GPO",
    path:
      "Group Policy Management → Group Policy Objects → right-click the intended GPO → Edit",
    shortcut:
      "Confirm the GPO name and scope before opening the editor.",
    note:
      "Editing a domain GPO can affect many systems. Review scope and existing settings before changing anything.",
  },
  {
    title: "Group Policy Results",
    path:
      "Group Policy Management → Group Policy Results → right-click → Group Policy Results Wizard",
    shortcut:
      "Use to inspect effective policy for a specific computer and user.",
    note:
      "Useful when expected settings do not match what you see in the editor.",
  },
  {
    title: "Group Policy Modeling",
    path:
      "Group Policy Management → Group Policy Modeling → right-click → Group Policy Modeling Wizard",
    shortcut:
      "Available in domain environments with the appropriate services and permissions.",
    note:
      "Can simulate policy application without changing the target system.",
  },
  {
    title: "Local Group Policy",
    path:
      "Win + R → gpedit.msc",
    shortcut:
      "Use only when local policy is the correct scope.",
    note:
      "On a domain-managed system, a domain GPO may override or supersede local settings.",
  },
  {
    title: "PowerShell / Command Prompt",
    path:
      "Start → search PowerShell or Command Prompt → Run as administrator when required",
    shortcut:
      "Use gpresult and GroupPolicy cmdlets for read-only inspection.",
    note:
      "Always inspect before forcing updates or making broad policy changes.",
  },
];

const processingOrder = [
  {
    step: "01",
    title: "Local policy",
    text:
      "Local Group Policy is processed first. On a domain-managed server it can be overridden by later domain policy.",
  },
  {
    step: "02",
    title: "Site policy",
    text:
      "GPOs linked to the Active Directory site can apply next when the environment uses site-level policy.",
  },
  {
    step: "03",
    title: "Domain policy",
    text:
      "GPOs linked to the domain can apply broadly to users and computers in that domain.",
  },
  {
    step: "04",
    title: "OU policy",
    text:
      "GPOs linked to organizational units are processed as the object moves deeper through the OU hierarchy.",
  },
  {
    step: "05",
    title: "Resulting policy",
    text:
      "The final effective setting reflects applicable GPOs, precedence, filters, inheritance, and special processing behavior.",
  },
];

const scopeQuestions = [
  "Where is this GPO linked?",
  "Does it apply to the whole domain, one OU, or a smaller scope?",
  "Is the target server located in the OU you expect?",
  "Is Security Filtering limiting which users or computers receive the GPO?",
  "Is a WMI filter attached?",
  "Is inheritance blocked on the target OU?",
  "Is the GPO link enforced?",
  "Are multiple GPOs configuring the same setting?",
  "What is the link order and processing precedence?",
  "What does gpresult show as the effective policy?",
];

const securityAreas = [
  {
    title: "Password and account policy",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies",
    text:
      "Review password and account lockout policy at the correct domain or local scope. Do not assume arbitrary universal values.",
  },
  {
    title: "User Rights Assignment",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Local Policies → User Rights Assignment",
    text:
      "Controls rights such as log on locally, log on through Remote Desktop Services, and service-related privileges.",
  },
  {
    title: "Security Options",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Local Policies → Security Options",
    text:
      "Contains many operating-system and authentication behavior settings.",
  },
  {
    title: "Audit Policy",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Advanced Audit Policy Configuration",
    text:
      "Controls detailed security auditing and can affect the evidence available in Event Viewer.",
  },
  {
    title: "Windows Defender Firewall",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Windows Defender Firewall with Advanced Security",
    text:
      "Can centrally define firewall profiles and rules. Review carefully to preserve required server services.",
  },
  {
    title: "Restricted Groups / group control",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Restricted Groups",
    text:
      "Can manage group membership centrally and therefore has high impact when used.",
  },
];

const gpoReview = [
  {
    title: "Name",
    text:
      "Does the GPO name clearly describe its intended purpose, or is it ambiguous?",
  },
  {
    title: "Link location",
    text:
      "Which domain, site, or OU receives the GPO?",
  },
  {
    title: "Status",
    text:
      "Is the GPO enabled, or are its user/computer settings partially disabled?",
  },
  {
    title: "Security filtering",
    text:
      "Which security principals are allowed to apply the GPO?",
  },
  {
    title: "Delegation",
    text:
      "Who can read, edit, or manage the GPO?",
  },
  {
    title: "Settings",
    text:
      "Which actual user or computer policies are configured?",
  },
  {
    title: "WMI filtering",
    text:
      "Does the GPO apply only when a device matches specific system conditions?",
  },
  {
    title: "Results",
    text:
      "Does the target server actually receive the GPO?",
  },
];

const powerShellChecks = [
  {
    label: "List all GPOs",
    command:
      "Get-GPO -All | Select-Object DisplayName, Id, GpoStatus, CreationTime, ModificationTime",
    purpose:
      "Creates a read-only inventory of Group Policy Objects when the GroupPolicy module is available.",
  },
  {
    label: "Inspect one GPO",
    command:
      'Get-GPO -Name "GPO Name" | Format-List *',
    purpose:
      "Shows metadata for a specific GPO. Replace GPO Name with the policy being reviewed.",
  },
  {
    label: "Generate an HTML GPO report",
    command:
      'Get-GPOReport -Name "GPO Name" -ReportType Html -Path "$env:USERPROFILE\\Desktop\\GPO-Report.html"',
    purpose:
      "Exports a readable report of the GPO's configured settings without modifying it.",
  },
  {
    label: "Effective policy summary",
    command:
      "gpresult /r",
    purpose:
      "Displays a concise summary of applied computer and user policies.",
  },
  {
    label: "Detailed effective-policy report",
    command:
      'gpresult /h "$env:USERPROFILE\\Desktop\\gpresult.html"',
    purpose:
      "Creates a detailed HTML report that can help explain why a setting is effective.",
  },
  {
    label: "Force policy refresh",
    command:
      "gpupdate /force",
    purpose:
      "Requests an immediate policy refresh. Use only when justified and understand that some settings may require sign-out or restart.",
  },
];

const localVsDomain = [
  {
    title: "Local policy",
    scope:
      "One server",
    strength:
      "Useful for standalone systems or settings not controlled by domain policy.",
    caution:
      "May be overridden by domain policy on domain-joined systems.",
  },
  {
    title: "Domain GPO",
    scope:
      "Many users or computers",
    strength:
      "Provides centralized, repeatable security configuration.",
    caution:
      "A bad change can affect multiple systems at once.",
  },
  {
    title: "OU-linked GPO",
    scope:
      "Objects in one OU hierarchy",
    strength:
      "Allows role-based policy for servers, workstations, departments, or other logical groups.",
    caution:
      "Moving an object to a different OU can change which policies apply.",
  },
];

const highRiskSituations = [
  {
    title: "Editing Default Domain Policy casually",
    text:
      "Broad changes to a domain-linked default policy can affect many users and computers. Use targeted GPOs when appropriate and preserve the intended domain-wide settings.",
  },
  {
    title: "Editing Default Domain Controllers Policy blindly",
    text:
      "Domain controllers are security-sensitive systems. Understand the intended setting and downstream impact first.",
  },
  {
    title: "Changing User Rights Assignment",
    text:
      "Removing a required service or administrator right can break logon, services, backup, or remote administration.",
  },
  {
    title: "Changing firewall policy centrally",
    text:
      "A single GPO can make required services unreachable across multiple servers.",
  },
  {
    title: "Using gpupdate /force without context",
    text:
      "A refresh can immediately apply new settings and expose configuration mistakes faster than expected.",
  },
  {
    title: "Assuming the editor equals the effective result",
    text:
      "A GPO can contain a setting but not actually apply to the server because of scope, filtering, precedence, or inheritance.",
  },
];

const troubleshooting = [
  {
    symptom: "A setting in the GPO is not active on the server.",
    checks:
      "Confirm the GPO is linked to the correct location, the server is in the expected OU, Security Filtering permits application, and the computer portion of the GPO is enabled.",
  },
  {
    symptom: "The server receives a different setting than expected.",
    checks:
      "Use gpresult to find competing GPOs, link order, and effective policy. Check OU inheritance and enforced links.",
  },
  {
    symptom: "A local policy change keeps reverting.",
    checks:
      "A domain GPO may be applying the setting again. Inspect effective domain policy rather than repeatedly editing Local Group Policy.",
  },
  {
    symptom: "A required service stops working after policy refresh.",
    checks:
      "Review recent GPO changes, User Rights Assignment, firewall settings, service configuration, and event logs.",
  },
  {
    symptom: "RDP works for administrators but not a required non-admin user.",
    checks:
      "Review Remote Desktop Users, User Rights Assignment, deny rights, RDP policy, and firewall configuration.",
  },
  {
    symptom: "gpresult does not show the GPO.",
    checks:
      "Check object location, security filtering, WMI filtering, GPO status, link state, and whether the command is being run in the correct user/computer context.",
  },
];

const decisionCases = [
  {
    title: "Local security setting looks weak",
    evidence:
      "A student opens gpedit.msc and sees a local setting that appears less restrictive than expected.",
    reasoning:
      "On a domain-joined server, Local Group Policy may not be the effective source of that setting.",
    response:
      "Run gpresult, identify the winning GPO, and inspect the domain policy before changing the local setting.",
  },
  {
    title: "Unknown GPO linked to the Servers OU",
    evidence:
      "The GPO configures firewall and user-rights settings but its name is vague.",
    reasoning:
      "The policy affects a high-value scope and may be essential or misconfigured.",
    response:
      "Review the GPO report, filtering, delegation, link state, and actual effective results before editing or unlinking it.",
  },
  {
    title: "Domain Admin loses RDP after policy refresh",
    evidence:
      "Remote administration worked before gpupdate but fails afterward.",
    reasoning:
      "A new or modified policy may have changed User Rights Assignment or firewall behavior.",
    response:
      "Use local console access if available, inspect gpresult and event logs, identify the policy change, and restore the intended authorized access narrowly.",
  },
  {
    title: "Two GPOs configure the same setting",
    evidence:
      "One GPO enables a setting and another disables it.",
    reasoning:
      "The final result depends on scope, inheritance, precedence, and link order.",
    response:
      "Use gpresult or Group Policy Results instead of guessing which GPO wins.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Open Group Policy Management",
    text:
      "In the fictional CYBERSHIELD.LOCAL domain, use Server Manager → Tools → Group Policy Management or Win + R → gpmc.msc.",
  },
  {
    number: "02",
    title: "Map the policy structure",
    text:
      "Expand the forest, domain, and Servers OU. Record which GPOs are linked at the domain and server OU levels.",
  },
  {
    number: "03",
    title: "Inspect the server-security GPO",
    text:
      "Review Scope, Details, Settings, Delegation, Security Filtering, and any WMI filter before editing.",
  },
  {
    number: "04",
    title: "Confirm effective policy",
    text:
      "Use gpresult /r or an HTML gpresult report on the fictional server to identify which GPOs actually apply.",
  },
  {
    number: "05",
    title: "Investigate a conflicting setting",
    text:
      "A required RDP user cannot connect. Trace the setting through User Rights Assignment and determine which GPO supplies the effective rule.",
  },
  {
    number: "06",
    title: "Verify after a controlled change",
    text:
      "If the scenario justifies a policy change, apply the narrowest change, refresh policy, confirm RDP works for the authorized user, and check for new errors.",
  },
];

const changeDiscipline = [
  "Confirm the exact GPO before editing.",
  "Confirm the GPO's link location and scope.",
  "Review current settings before changing them.",
  "Record the original value.",
  "Make one narrow change at a time.",
  "Refresh policy only when justified.",
  "Verify the target setting with gpresult.",
  "Test the required service or access path.",
  "Check Event Viewer for policy or service errors.",
  "Document the result and rollback path.",
];

const mistakes = [
  {
    title: "Editing the wrong GPO",
    text:
      "Similar names or broad default policies can make a small mistake affect many systems.",
  },
  {
    title: "Ignoring scope",
    text:
      "A correct security setting in the wrong scope can break unrelated users or servers.",
  },
  {
    title: "Trusting gpedit.msc on a domain server",
    text:
      "Local policy does not prove the effective domain-managed configuration.",
  },
  {
    title: "Forcing policy before reviewing it",
    text:
      "gpupdate /force can immediately apply a mistake to the target system.",
  },
  {
    title: "Ignoring filtering and inheritance",
    text:
      "The GPO may be linked but still not apply to the target.",
  },
  {
    title: "Changing multiple policies at once",
    text:
      "Large batches make it difficult to identify which change caused a failure.",
  },
];

const verification = [
  "The intended GPO is linked to the expected site, domain, or OU.",
  "Security Filtering permits only the intended users or computers.",
  "The target server is in the expected OU.",
  "gpresult shows the intended GPO as applied.",
  "No unexpected GPO is overriding the setting.",
  "Required logon rights remain available.",
  "Required remote administration still works.",
  "Required services remain reachable through the firewall.",
  "Relevant Event Viewer logs show no new policy-processing errors.",
  "The original value and final value are documented.",
];

const checklist = [
  "Open Group Policy Management with gpmc.msc or Server Manager.",
  "Identify domain, OU, and GPO structure.",
  "Confirm where each relevant GPO is linked.",
  "Review Security Filtering and WMI filtering.",
  "Check whether inheritance is blocked or links are enforced.",
  "Review link order and competing settings.",
  "Use gpresult to inspect effective policy.",
  "Export a GPO report when deeper review is needed.",
  "Avoid casual edits to broad default policies.",
  "Record original settings before changing them.",
  "Make one controlled policy change at a time.",
  "Verify required services and access after policy refresh.",
];

const reflection = [
  "Why is Local Group Policy not always the effective configuration on a domain-joined server?",
  "What is the difference between linking a GPO and a GPO actually applying?",
  "Why can Security Filtering change the effective result?",
  "Why should gpresult be used before troubleshooting a policy mismatch?",
  "What makes User Rights Assignment a high-impact policy area?",
  "Why is a narrow OU-linked GPO often safer than changing a domain-wide policy for a server-specific requirement?",
];

export default function GroupPolicyManagementPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/active-directory-users-computers" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/password-lockout-account-policies" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Group Policy Management
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how domain policy is organized, where GPOs apply, how
                inheritance and precedence affect the final result, and how to
                verify effective security policy before changing anything.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Group Policy is powerful because one policy can configure many
                systems at once. That same power makes scope, verification, and
                change discipline essential.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Primary console</span>
                  <span className="font-bold text-white">GPMC</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key verifier</span>
                  <span className="font-bold text-white">gpresult</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Effective policy</span>
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Core vocabulary
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Six ideas that explain how Group Policy works
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              The configured setting is not always the effective setting
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Scope, inheritance, filtering, link order, and competing GPOs can
              change which value a server actually receives.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              High-impact warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One GPO can change many systems
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A small change to firewall, user rights, password policy, or
              security options can affect an entire domain or OU.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Confirm scope and effective policy before editing a domain GPO.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to go for Group Policy review
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Quick action
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.shortcut}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Policy processing
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          From Local Policy to effective domain policy
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processingOrder.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black text-cyan-300">{item.step}</p>
              <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Scope review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before editing a GPO
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {scopeQuestions.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <span className="font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Security policy map
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Common security areas inside a computer GPO
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {securityAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.path}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          GPO inspection
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What to review before touching settings
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gpoReview.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell and command-line inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect GPOs and effective policy
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powerShellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Scope comparison
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Local, domain, and OU policy are not interchangeable
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {localVsDomain.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Scope
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.scope}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.strength}</p>
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                <p className="text-sm leading-6 text-yellow-100">{item.caution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk situations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Group Policy changes that deserve extra caution
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskSituations.map((item) => (
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
            When the policy you expect is not the policy you get
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Symptom
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Check
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.checks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Policy reasoning in context
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
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace policy on SRV-APP01
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Change discipline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten steps for controlled Group Policy changes
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {changeDiscipline.map((item, index) => (
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
          Group Policy mistakes with broad consequences
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
              Test your Group Policy reasoning
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

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the intended policy is actually effective
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving Group Policy review
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Password, Lockout &amp; Account Policies
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how domain and local password policy differ, where
                account lockout settings live, how effective policy is
                determined, and how to avoid one-size-fits-all policy values.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/password-lockout-account-policies"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 06 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/active-directory-users-computers" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/password-lockout-account-policies" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
