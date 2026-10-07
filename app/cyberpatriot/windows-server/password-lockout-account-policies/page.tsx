import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how local password policy differs from domain password policy on Windows Server.",
  "Use the correct administrative path to review password and account lockout settings at the right scope.",
  "Interpret password length, history, age, complexity, lockout threshold, lockout duration, and reset counter settings.",
  "Use gpresult, net accounts, and Active Directory PowerShell to inspect effective account-policy context.",
  "Recognize why domain controllers and domain users require domain-level policy reasoning.",
  "Avoid one-size-fits-all values by following scenario requirements, organizational policy, and dependency-aware verification.",
];

const policyConcepts = [
  {
    title: "Password policy",
    text:
      "Controls password-related requirements such as history, age, length, and complexity at the applicable local or domain scope.",
  },
  {
    title: "Account lockout policy",
    text:
      "Controls when repeated failed sign-in attempts can lock an account and how long that lockout lasts.",
  },
  {
    title: "Domain policy",
    text:
      "For domain accounts, password and lockout behavior is normally governed by domain-level policy rather than one member server's local setting.",
  },
  {
    title: "Local policy",
    text:
      "Applies to local accounts on a standalone or member server when the setting is not superseded by other applicable policy.",
  },
  {
    title: "Fine-grained password policy",
    text:
      "In Active Directory, Password Settings Objects can apply different password or lockout requirements to selected users or global security groups.",
  },
  {
    title: "Effective policy",
    text:
      "The policy that actually governs the target account after scope, domain configuration, and any fine-grained password policy are considered.",
  },
];

const toolPaths = [
  {
    title: "Domain password policy in Group Policy Management",
    path:
      "Server Manager → Tools → Group Policy Management → Forest → Domains → your domain → review the domain-linked GPO that defines account policy",
    quick:
      "Win + R → gpmc.msc",
    note:
      "For domain accounts, review the domain-level policy source instead of assuming a member server's local policy controls the result.",
  },
  {
    title: "Password Policy",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies → Password Policy",
    quick:
      "Open the correct GPO first, then navigate to Password Policy.",
    note:
      "Review each configured value in context. Do not substitute arbitrary values for scenario or organizational requirements.",
  },
  {
    title: "Account Lockout Policy",
    path:
      "Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies → Account Lockout Policy",
    quick:
      "Open the correct GPO first, then navigate to Account Lockout Policy.",
    note:
      "Lockout policy reduces password-guessing risk but overly aggressive settings can create availability problems.",
  },
  {
    title: "Local Security Policy",
    path:
      "Win + R → secpol.msc → Account Policies",
    quick:
      "Use on applicable member or standalone servers for local-account policy review.",
    note:
      "Do not assume this is the effective source for domain-user password policy.",
  },
  {
    title: "Local Group Policy",
    path:
      "Win + R → gpedit.msc → Computer Configuration → Windows Settings → Security Settings → Account Policies",
    quick:
      "Useful for local policy review when local scope is appropriate.",
    note:
      "Domain GPOs can supersede local settings on domain-joined systems.",
  },
  {
    title: "Active Directory Administrative Center",
    path:
      "Server Manager → Tools → Active Directory Administrative Center → your domain → System → Password Settings Container",
    quick:
      "Use when reviewing fine-grained password policies.",
    note:
      "Fine-grained password policy can change the result for selected domain users or groups even when the default domain policy looks correct.",
  },
];

const passwordSettings = [
  {
    title: "Enforce password history",
    meaning:
      "Determines how many previous passwords are remembered so users cannot immediately recycle them.",
    decision:
      "Review the required policy and whether account workflows depend on frequent password changes.",
  },
  {
    title: "Maximum password age",
    meaning:
      "Defines how long a password can remain valid before change is required when expiration is used.",
    decision:
      "Do not assume shorter is always safer. Follow the scenario or authorized policy.",
  },
  {
    title: "Minimum password age",
    meaning:
      "Controls how soon a password can be changed again and can help prevent rapid cycling through password history.",
    decision:
      "Review together with password history and administrative reset procedures.",
  },
  {
    title: "Minimum password length",
    meaning:
      "Sets the minimum number of characters required for passwords under the applicable policy.",
    decision:
      "Use the scenario or organizational requirement rather than inventing a universal competition value.",
  },
  {
    title: "Password must meet complexity requirements",
    meaning:
      "Enables Windows complexity rules for applicable passwords.",
    decision:
      "Understand what the setting changes and verify that required accounts can still authenticate after policy changes.",
  },
  {
    title: "Store passwords using reversible encryption",
    meaning:
      "Allows passwords to be stored in a form that can be recovered by the system for legacy authentication needs.",
    decision:
      "Treat enabling this as high risk unless an explicit authorized requirement justifies it.",
  },
];

const lockoutSettings = [
  {
    title: "Account lockout threshold",
    meaning:
      "Specifies how many failed sign-in attempts can trigger lockout when lockout is configured.",
    risk:
      "Too permissive can allow repeated guessing; too aggressive can make denial-of-service or accidental lockouts easier.",
  },
  {
    title: "Account lockout duration",
    meaning:
      "Controls how long a locked account remains locked before automatic recovery when configured that way.",
    risk:
      "Long lockouts can interrupt required administration or service access if applied carelessly.",
  },
  {
    title: "Reset account lockout counter after",
    meaning:
      "Defines when the failed-attempt counter returns toward a clean state.",
    risk:
      "Review it together with threshold and duration rather than treating each value independently.",
  },
];

const scopeExamples = [
  {
    account: "Local user on a member server",
    likelySource:
      "Local security policy or applicable policy affecting that server's local accounts.",
    inspect:
      "secpol.msc, gpresult, and net accounts on the member server.",
  },
  {
    account: "Domain user",
    likelySource:
      "Default domain password policy or another domain-level account-policy source.",
    inspect:
      "Group Policy Management plus Get-ADDefaultDomainPasswordPolicy.",
  },
  {
    account: "Domain user with fine-grained policy",
    likelySource:
      "A Password Settings Object with higher precedence for that user or group.",
    inspect:
      "Active Directory Administrative Center or Get-ADUserResultantPasswordPolicy.",
  },
  {
    account: "Built-in local administrator on a member server",
    likelySource:
      "Local account policy on that member server, subject to applicable security configuration.",
    inspect:
      "Local Security Policy and local account state.",
  },
  {
    account: "Service account",
    likelySource:
      "Depends on whether the identity is local or domain-based and whether a fine-grained policy applies.",
    inspect:
      "Identify the account type first, then inspect the correct local or domain policy source.",
  },
];

const inspectionCommands = [
  {
    label: "Local account policy summary",
    command:
      "net accounts",
    purpose:
      "Shows a concise local account-policy summary on the current system. On a domain controller, interpret output in the correct domain context.",
  },
  {
    label: "Domain account policy summary",
    command:
      "net accounts /domain",
    purpose:
      "Queries domain account-policy information when run with appropriate domain connectivity and permissions.",
  },
  {
    label: "Default domain password policy",
    command:
      "Get-ADDefaultDomainPasswordPolicy",
    purpose:
      "Shows the Active Directory domain's default password and lockout policy when the ActiveDirectory module is available.",
  },
  {
    label: "Resultant fine-grained password policy",
    command:
      'Get-ADUserResultantPasswordPolicy -Identity "username"',
    purpose:
      "Shows the effective fine-grained password policy for a specific domain user when one applies.",
  },
  {
    label: "List fine-grained password policies",
    command:
      "Get-ADFineGrainedPasswordPolicy -Filter * | Select-Object Name, Precedence, MinPasswordLength, PasswordHistoryCount, LockoutThreshold",
    purpose:
      "Inventories Password Settings Objects without changing them.",
  },
  {
    label: "Effective Group Policy summary",
    command:
      "gpresult /r",
    purpose:
      "Shows applied Group Policy context and helps confirm whether the expected domain GPO is affecting the server.",
  },
];

const fineGrained = [
  {
    title: "Why it exists",
    text:
      "Fine-grained password policy allows different domain users or global security groups to receive different password and lockout requirements.",
  },
  {
    title: "Where it lives",
    text:
      "Password Settings Objects are stored in Active Directory and can be reviewed in Active Directory Administrative Center or with PowerShell.",
  },
  {
    title: "Precedence",
    text:
      "When multiple Password Settings Objects could apply, precedence helps determine which one wins.",
  },
  {
    title: "Resultant policy",
    text:
      "Always check the user's resultant password policy instead of guessing from group membership alone.",
  },
  {
    title: "Service accounts",
    text:
      "Some environments use different password behavior for service identities, but every exception should be justified and protected carefully.",
  },
  {
    title: "Competition reasoning",
    text:
      "If a user's behavior does not match the default domain policy, investigate whether a fine-grained policy is affecting the account.",
  },
];

const operationalRisks = [
  {
    title: "Locking out the only administrator",
    text:
      "Changing lockout behavior without preserving an authorized recovery path can interrupt management access.",
  },
  {
    title: "Breaking a service account",
    text:
      "Changing password behavior for an account used by a service, task, application, or scheduled job can cause failures.",
  },
  {
    title: "Editing local policy instead of domain policy",
    text:
      "The local value may be overwritten or irrelevant for domain users.",
  },
  {
    title: "Using arbitrary competition values",
    text:
      "A secure policy still needs to match scenario requirements and the authorized environment.",
  },
  {
    title: "Forcing password changes blindly",
    text:
      "Unexpected resets can break stored credentials used by services, tasks, applications, or remote processes.",
  },
  {
    title: "Ignoring fine-grained policy",
    text:
      "A specific user may receive different settings from the default domain policy.",
  },
];

const decisionCases = [
  {
    title: "Local policy looks weaker than expected",
    evidence:
      "On a domain-joined member server, secpol.msc shows a local password value that differs from the domain standard.",
    reasoning:
      "The local value does not prove what governs domain users.",
    response:
      "Inspect gpresult and the domain password policy before changing the local setting.",
  },
  {
    title: "One user does not follow the default domain password policy",
    evidence:
      "Most users share one set of requirements, but one service account behaves differently.",
    reasoning:
      "A fine-grained password policy may apply to that identity.",
    response:
      "Use Get-ADUserResultantPasswordPolicy and review Password Settings Objects before assuming the domain policy is broken.",
  },
  {
    title: "Lockout policy is extremely aggressive",
    evidence:
      "A small number of failed sign-ins can cause a long lockout.",
    reasoning:
      "The setting may reduce guessing attempts but also creates availability and accidental lockout risk.",
    response:
      "Compare the setting with scenario requirements and authorized policy, preserve administrator access, and change only if justified.",
  },
  {
    title: "Named service account password is being changed",
    evidence:
      "A required Windows service runs under a domain account whose password will be updated.",
    reasoning:
      "The service may still store the old credential and fail after the password changes.",
    response:
      "Document every dependency, coordinate the credential change, update dependent services or tasks, and verify them immediately.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Identify the account type",
    text:
      "Determine whether you are reviewing a local account, domain account, or service identity before looking at policy values.",
  },
  {
    number: "02",
    title: "Identify the policy source",
    text:
      "Use Local Security Policy for local-account context and Group Policy Management / Active Directory tools for domain-account context.",
  },
  {
    number: "03",
    title: "Inspect effective policy",
    text:
      "Use net accounts, gpresult, Get-ADDefaultDomainPasswordPolicy, and resultant password-policy checks as appropriate.",
  },
  {
    number: "04",
    title: "Compare against requirements",
    text:
      "Use the fictional scenario or authorized organizational policy as the standard instead of choosing arbitrary values.",
  },
  {
    number: "05",
    title: "Protect dependencies",
    text:
      "Identify administrators, services, tasks, applications, and remote workflows that could fail after password or lockout changes.",
  },
  {
    number: "06",
    title: "Change narrowly and verify",
    text:
      "Make the smallest justified change, then verify authentication, required services, and administrative access.",
  },
];

const verification = [
  "The correct local or domain policy source was identified.",
  "Domain users are governed by the intended domain password policy.",
  "Any fine-grained password policy is understood and intentional.",
  "Authorized administrators can still sign in.",
  "Required service accounts still run their services.",
  "Required scheduled tasks still authenticate successfully.",
  "Required applications using stored credentials still function.",
  "No unexpected lockouts occurred after the change.",
  "gpresult and domain-policy commands show the expected effective configuration.",
  "Relevant Security and System logs show no new authentication or service failures.",
];

const labSteps = [
  {
    number: "01",
    title: "Identify the fictional environment",
    text:
      "DC-PRACTICE hosts the CYBERSHIELD.LOCAL domain. Morgan is the required administrator, and AppSvc is a required domain service account.",
  },
  {
    number: "02",
    title: "Open the domain policy source",
    text:
      "Use Server Manager → Tools → Group Policy Management and locate the domain-linked GPO that defines account policy.",
  },
  {
    number: "03",
    title: "Review password and lockout policy",
    text:
      "Navigate to Account Policies → Password Policy and Account Lockout Policy. Record the configured values without changing them.",
  },
  {
    number: "04",
    title: "Confirm with PowerShell",
    text:
      "Run Get-ADDefaultDomainPasswordPolicy and compare its output with the values observed in Group Policy Management.",
  },
  {
    number: "05",
    title: "Investigate AppSvc",
    text:
      "Use Get-ADUserResultantPasswordPolicy -Identity AppSvc to determine whether a fine-grained policy changes its effective requirements.",
  },
  {
    number: "06",
    title: "Verify dependencies",
    text:
      "After any authorized policy or credential change, verify Morgan can administer the domain and the AppSvc-dependent application still runs.",
  },
];

const mistakes = [
  {
    title: "Changing local policy for a domain-user problem",
    text:
      "The real setting may be coming from domain policy or a fine-grained policy.",
  },
  {
    title: "Copying values from a generic checklist",
    text:
      "Security policy should reflect the scenario and authorized environment, not arbitrary numbers.",
  },
  {
    title: "Ignoring service accounts",
    text:
      "A password change can break services, tasks, scripts, or applications that store credentials.",
  },
  {
    title: "Locking out required administrators",
    text:
      "Availability matters. Preserve an authorized recovery path before tightening lockout settings.",
  },
  {
    title: "Looking only at one GPO",
    text:
      "The policy you open may not be the effective policy for the target account.",
  },
  {
    title: "Ignoring fine-grained policy",
    text:
      "A selected user can receive different settings from the domain default.",
  },
];

const checklist = [
  "Identify whether the account is local or domain-based.",
  "Open the correct policy-management tool.",
  "Review Password Policy.",
  "Review Account Lockout Policy.",
  "Use gpresult to understand policy context.",
  "Use net accounts for a quick summary.",
  "Use Get-ADDefaultDomainPasswordPolicy for domain policy.",
  "Check fine-grained password policy when behavior differs by user.",
  "Protect required administrator access.",
  "Check service-account dependencies before password changes.",
  "Avoid arbitrary universal policy values.",
  "Verify authentication and required services after changes.",
];

const reflection = [
  "Why can secpol.msc show a value that is not the effective password policy for a domain user?",
  "What is the difference between default domain password policy and fine-grained password policy?",
  "Why should account lockout threshold, duration, and reset counter be reviewed together?",
  "How can a password change break a required service?",
  "Why is gpresult useful even when the password settings are being reviewed in Group Policy Management?",
  "What should be verified after changing password or lockout policy?",
];

export default function PasswordLockoutAccountPoliciesPage() {
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
            <Link href="/cyberpatriot/windows-server/group-policy-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/microsoft-defender-antivirus" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Password, Lockout &amp; Account Policies
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn where local and domain password policy actually comes
                from, how account lockout settings work together, and how to
                protect authentication without breaking required accounts.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The secure choice is not a memorized number. It is the policy
                that satisfies the scenario, protects the environment, and
                preserves required administrative and service access.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Password areas</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Lockout areas</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Policy scopes</span>
                  <span className="font-bold text-white">Local + domain</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Secure authentication</span>
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
          Core concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand the policy source before the value
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {policyConcepts.map((item) => (
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
              Scope comes before strength
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A strong-looking setting in the wrong place may do nothing for the
              account you are trying to protect.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Authentication policy can break required access
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Password resets and lockout changes can affect administrators,
              services, tasks, applications, and remote-management workflows.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Identify dependencies and preserve an authorized recovery path before high-impact changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review password and lockout policy
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
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.quick}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Password Policy
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          What each major setting actually controls
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {passwordSettings.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.meaning}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Decision note
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.decision}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Account Lockout Policy
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Three settings that must be reasoned about together
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {lockoutSettings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.meaning}</p>
                <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                  <p className="text-sm leading-6 text-yellow-100">{item.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Scope examples
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Which policy source controls which account?
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {scopeExamples.map((item) => (
            <div
              key={item.account}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.account}</h3>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Likely source
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.likelySource}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Inspect
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.inspect}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm policy instead of guessing
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
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
          Fine-grained password policy
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Why one domain user can behave differently from another
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fineGrained.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Safe review flow
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six steps from account type to verification
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-sm font-black text-cyan-300">{item.number}</p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Operational risks
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Account-policy mistakes can become availability problems
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {operationalRisks.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Password and lockout decisions in context
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
            Review CYBERSHIELD.LOCAL account policy
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Password-policy mistakes that create confusion or outages
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
              Test your account-policy reasoning
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
              Confirm authentication still works
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
            Before leaving password and lockout policy
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
                Microsoft Defender Antivirus
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review Defender health, real-time protection, exclusions,
                detections, security intelligence, scan history, and evidence
                preservation on Windows Server.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/microsoft-defender-antivirus"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 07 &rarr;
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
            <Link href="/cyberpatriot/windows-server/group-policy-management" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/microsoft-defender-antivirus" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
