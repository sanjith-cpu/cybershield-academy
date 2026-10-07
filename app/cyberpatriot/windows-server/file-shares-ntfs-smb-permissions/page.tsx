import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between share permissions and NTFS permissions on Windows Server.",
  "Use File Explorer, Computer Management, Server Manager, and PowerShell to review SMB shares and folder permissions.",
  "Understand ownership, inheritance, explicit permissions, inherited permissions, Allow, Deny, and effective access.",
  "Recognize how share permissions and NTFS permissions combine for network access.",
  "Apply least privilege without breaking required file access for users, groups, applications, or service accounts.",
  "Verify required SMB access from an authorized client after any permission or share change.",
];

const coreConcepts = [
  {
    title: "SMB share",
    text:
      "A folder or resource published over the network through the Server Message Block protocol.",
  },
  {
    title: "Share permission",
    text:
      "A permission applied at the SMB share layer that controls network access to the share.",
  },
  {
    title: "NTFS permission",
    text:
      "A file-system permission applied to files and folders on an NTFS volume, whether access is local or through a share.",
  },
  {
    title: "Ownership",
    text:
      "The owner of a file or folder can influence permission management and may be able to change access controls.",
  },
  {
    title: "Inheritance",
    text:
      "Allows child files and folders to receive permissions from a parent folder unless inheritance is changed.",
  },
  {
    title: "Effective access",
    text:
      "The access a user actually receives after all applicable group memberships, NTFS permissions, share permissions, inheritance, and Deny rules are considered.",
  },
];

const toolPaths = [
  {
    title: "File Explorer",
    path:
      "Right-click folder → Properties → Sharing / Security",
    note:
      "Use Sharing for share-related settings and Security for NTFS permissions.",
  },
  {
    title: "Advanced Security Settings",
    path:
      "Right-click folder → Properties → Security → Advanced",
    note:
      "Review owner, inheritance, explicit permissions, inherited permissions, and effective access.",
  },
  {
    title: "Computer Management",
    path:
      "Win + R → compmgmt.msc → System Tools → Shared Folders → Shares / Sessions / Open Files",
    note:
      "Review active shares, connected users, sessions, and open files.",
  },
  {
    title: "Server Manager",
    path:
      "Server Manager → File and Storage Services → Shares",
    note:
      "Useful for reviewing and managing SMB shares when File and Storage Services is installed.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    note:
      "Use Get-SmbShare, Get-SmbShareAccess, Get-Acl, and related commands for inspection.",
  },
  {
    title: "Command Prompt / icacls",
    path:
      "Start → search Command Prompt → Run as administrator when required",
    note:
      "icacls can inspect and change NTFS permissions. Use changes only after documenting the original state.",
  },
];

const permissionLayers = [
  {
    title: "Share permissions",
    scope:
      "Network access through the SMB share.",
    examples:
      "Read, Change, Full Control.",
    note:
      "Share permissions do not replace NTFS permissions.",
  },
  {
    title: "NTFS permissions",
    scope:
      "Files and folders on the disk, including local and network access.",
    examples:
      "Read, Write, Modify, Read & execute, Full control, special permissions.",
    note:
      "NTFS usually provides the more detailed permission model.",
  },
  {
    title: "Combined result",
    scope:
      "Network users are constrained by both layers.",
    examples:
      "If share access is broader than NTFS, NTFS can still restrict the user.",
    note:
      "Always inspect both layers when troubleshooting network access.",
  },
];

const commonNtfsPermissions = [
  {
    title: "Read",
    text:
      "Allows reading file contents and basic folder information.",
  },
  {
    title: "Read & execute",
    text:
      "Allows reading plus executing programs and traversing folders where applicable.",
  },
  {
    title: "List folder contents",
    text:
      "Allows viewing file and folder names inside a directory.",
  },
  {
    title: "Write",
    text:
      "Allows creating files or folders and writing data, depending on the inherited and advanced permissions.",
  },
  {
    title: "Modify",
    text:
      "Typically includes read, write, execute, and delete capabilities without full permission-control authority.",
  },
  {
    title: "Full control",
    text:
      "Includes broad data access plus permission and ownership-related control. Use only when truly required.",
  },
];

const reviewQuestions = [
  "What share is required by the scenario?",
  "What local folder path backs the share?",
  "Which users or groups should have network access?",
  "Which users or groups should be read-only?",
  "Which users or groups need Modify access?",
  "Does any application or service account depend on the folder?",
  "What share permissions are currently configured?",
  "What NTFS permissions are currently configured?",
  "Are permissions inherited or explicit?",
  "How will access be tested from an authorized client?",
];

const powerShellChecks = [
  {
    label: "List SMB shares",
    command:
      "Get-SmbShare | Select-Object Name, Path, Description, Special",
    purpose:
      "Creates an inventory of SMB shares and the paths they expose.",
  },
  {
    label: "Review one share",
    command:
      'Get-SmbShare -Name "ShareName" | Format-List *',
    purpose:
      "Shows detailed properties for a specific SMB share.",
  },
  {
    label: "Review share permissions",
    command:
      'Get-SmbShareAccess -Name "ShareName"',
    purpose:
      "Shows users or groups with Allow or Deny access at the share layer.",
  },
  {
    label: "Review NTFS ACL",
    command:
      'Get-Acl "C:\\Path\\To\\Folder" | Format-List',
    purpose:
      "Shows owner and access-control information for a folder.",
  },
  {
    label: "Review NTFS entries",
    command:
      '(Get-Acl "C:\\Path\\To\\Folder").Access | Select-Object IdentityReference, FileSystemRights, AccessControlType, IsInherited',
    purpose:
      "Creates a readable list of NTFS permission entries.",
  },
  {
    label: "Review with icacls",
    command:
      'icacls "C:\\Path\\To\\Folder"',
    purpose:
      "Shows NTFS permission entries using the built-in command-line tool.",
  },
  {
    label: "Active SMB sessions",
    command:
      "Get-SmbSession | Select-Object ClientComputerName, ClientUserName, NumOpens",
    purpose:
      "Shows current SMB clients and can reveal active dependencies before changes.",
  },
  {
    label: "Open SMB files",
    command:
      "Get-SmbOpenFile | Select-Object ClientComputerName, ClientUserName, Path",
    purpose:
      "Shows files currently open through SMB before disruptive changes.",
  },
];

const inheritanceConcepts = [
  {
    title: "Inherited permission",
    text:
      "Received from a parent folder. Inheritance helps keep permissions consistent across a tree.",
  },
  {
    title: "Explicit permission",
    text:
      "Assigned directly to the file or folder and may differ from the parent.",
  },
  {
    title: "Disable inheritance",
    text:
      "Stops normal permission inheritance and should be done only when the folder truly needs a different access model.",
  },
  {
    title: "Convert inherited permissions",
    text:
      "Can turn inherited entries into explicit entries, preserving the current access while breaking the inheritance link.",
  },
  {
    title: "Remove inherited permissions",
    text:
      "Can immediately remove access for users and services that depended on the parent permissions.",
  },
  {
    title: "Permission drift",
    text:
      "Too many explicit exceptions make a folder tree difficult to understand and troubleshoot.",
  },
];

const denyGuidance = [
  {
    title: "Deny can override Allow",
    text:
      "A Deny entry can block access even when another group grants Allow, which makes troubleshooting more complex.",
  },
  {
    title: "Use groups first",
    text:
      "Prefer assigning access to well-defined groups rather than creating many user-specific entries.",
  },
  {
    title: "Use Deny only when needed",
    text:
      "Many environments can achieve least privilege by simply not granting unnecessary access.",
  },
  {
    title: "Check nested group membership",
    text:
      "A user may receive permissions through multiple groups, including nested domain groups.",
  },
];

const effectiveAccessSteps = [
  {
    number: "01",
    title: "Identify the user",
    text:
      "Know the exact local or domain identity whose access you are testing.",
  },
  {
    number: "02",
    title: "Review group memberships",
    text:
      "Identify groups that may grant or restrict access.",
  },
  {
    number: "03",
    title: "Review share access",
    text:
      "Check whether the identity or one of its groups is allowed or denied at the SMB share layer.",
  },
  {
    number: "04",
    title: "Review NTFS access",
    text:
      "Check inherited and explicit NTFS permissions on the folder and relevant child objects.",
  },
  {
    number: "05",
    title: "Check Deny entries",
    text:
      "Look for explicit or inherited Deny entries that may override expected access.",
  },
  {
    number: "06",
    title: "Test from the client",
    text:
      "Use the actual network path and authorized account to prove the final result.",
  },
];

const secureDesignExamples = [
  {
    title: "Read-only department share",
    scenario:
      "All members of a department should read files but only one editing group should modify them.",
    approach:
      "Use domain groups for readers and editors, keep permissions group-based, and avoid granting Full Control to ordinary users.",
    verify:
      "Test reading with a reader account and creating/editing with an editor account.",
  },
  {
    title: "Application data folder",
    scenario:
      "A required service account needs Modify access, while normal users should have no direct access.",
    approach:
      "Grant the service identity only the rights it needs and avoid broad user-group access.",
    verify:
      "Confirm the application still writes data and an unauthorized user cannot browse the folder.",
  },
  {
    title: "Administrative archive",
    scenario:
      "Administrators need full management rights, while users only need read access.",
    approach:
      "Separate administrative and user groups instead of granting Full Control broadly.",
    verify:
      "Test with one authorized administrator and one standard user.",
  },
];

const troubleshooting = [
  {
    symptom: "User can open the share but cannot modify files.",
    checks:
      "Review share Change/Full Control access, NTFS Modify/Write permissions, inheritance, file-level ACLs, and any Deny entries.",
  },
  {
    symptom: "User cannot access the share at all.",
    checks:
      "Confirm the share exists, SMB service is available, firewall permits required access, the user is allowed at the share layer, NTFS permits access, and the network path is correct.",
  },
  {
    symptom: "Permission changes affected many subfolders unexpectedly.",
    checks:
      "Review inheritance and whether changes were propagated to child objects. Restore the documented original ACL if needed.",
  },
  {
    symptom: "A service fails after folder permissions changed.",
    checks:
      "Review the service account, required folder rights, executable/data paths, and application logs.",
  },
  {
    symptom: "User appears to have access through multiple groups.",
    checks:
      "Review direct and nested group membership plus Allow and Deny entries. Use Advanced Security Effective Access when appropriate.",
  },
  {
    symptom: "Share works locally but not across the network.",
    checks:
      "Check SMB share configuration, firewall rules, Server service, share permissions, network reachability, and client credentials.",
  },
];

const riskySituations = [
  {
    title: "Everyone: Full Control",
    text:
      "Broad Full Control can allow users to change permissions, delete data, or alter files beyond what the scenario requires.",
  },
  {
    title: "Changing ownership casually",
    text:
      "Ownership changes can affect permission management and may disrupt applications or administrative workflows.",
  },
  {
    title: "Breaking inheritance at the top of a tree",
    text:
      "A single inheritance change can affect hundreds of child objects.",
  },
  {
    title: "Deleting built-in or administrative entries",
    text:
      "SYSTEM, Administrators, service identities, or application groups may be required.",
  },
  {
    title: "Closing active SMB sessions blindly",
    text:
      "Users may have open files and unsaved work. Review active sessions before disruptive changes.",
  },
  {
    title: "Using Deny as the first tool",
    text:
      "Deny rules are powerful and can create confusing effective-access results.",
  },
];

const decisionCases = [
  {
    title: "Everyone has Full Control on a required share",
    evidence:
      "The TeamDocs share is required, but the broad permission grants more access than the scenario needs.",
    reasoning:
      "The share must remain available while excessive privilege should be reduced.",
    response:
      "Document current share and NTFS permissions, identify required reader/editor groups, replace broad access with least-privilege group access, and verify from client accounts.",
  },
  {
    title: "Unknown service account has Modify on application data",
    evidence:
      "The account is not a human user and the folder supports a required application.",
    reasoning:
      "The account may be a legitimate application identity.",
    response:
      "Confirm the service or application dependency before removing access. Reduce rights only if the application can still function.",
  },
  {
    title: "One user is denied despite being in an allowed group",
    evidence:
      "The user belongs to Editors but still cannot write.",
    reasoning:
      "A Deny entry or more restrictive NTFS permission may override the expected access.",
    response:
      "Review both share and NTFS permissions, nested groups, explicit Deny entries, and effective access before changing anything.",
  },
  {
    title: "Old share appears unused",
    evidence:
      "No one recognizes the share and there are no current sessions.",
    reasoning:
      "Lack of active sessions does not prove the share is unnecessary.",
    response:
      "Review scenario requirements, application dependencies, historical use, folder contents, service accounts, and permissions before removing it.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Identify the fictional requirement",
    text:
      "FILE-SRV hosts the required TeamDocs share. StaffReaders need read access, StaffEditors need modify access, Morgan administers the server, and AppSvc uses a separate application-data folder.",
  },
  {
    number: "02",
    title: "Inventory the shares",
    text:
      "Use Computer Management, Server Manager, and Get-SmbShare to identify share names, paths, and current clients.",
  },
  {
    number: "03",
    title: "Review share permissions",
    text:
      "Run Get-SmbShareAccess for TeamDocs and compare the result with the scenario-required groups.",
  },
  {
    number: "04",
    title: "Review NTFS permissions",
    text:
      "Use the Security tab, Advanced Security, Get-Acl, and icacls to document inherited and explicit permissions.",
  },
  {
    number: "05",
    title: "Harden narrowly",
    text:
      "Preserve administrative and application dependencies, remove only clearly excessive access, and keep reader/editor rights aligned with the scenario.",
  },
  {
    number: "06",
    title: "Verify from clients",
    text:
      "Confirm a reader can read but not modify, an editor can modify, Morgan retains administration, AppSvc still works, and an unauthorized user cannot access the share.",
  },
];

const mistakes = [
  {
    title: "Checking only NTFS permissions",
    text:
      "Network access can still fail because share permissions are a second layer.",
  },
  {
    title: "Checking only share permissions",
    text:
      "NTFS permissions may still restrict the user even when the share layer allows access.",
  },
  {
    title: "Granting Full Control for convenience",
    text:
      "Full Control often provides more privilege than users need.",
  },
  {
    title: "Breaking inheritance without a plan",
    text:
      "Large permission trees can become inconsistent and hard to troubleshoot.",
  },
  {
    title: "Removing service-account access",
    text:
      "Applications may fail even though user access looks correct.",
  },
  {
    title: "Testing only as an administrator",
    text:
      "Administrators may have broader rights than normal users, hiding permission problems.",
  },
];

const verification = [
  "Required SMB shares still exist.",
  "Share paths point to the correct folders.",
  "Required readers can read.",
  "Required editors can modify.",
  "Unauthorized users do not have unnecessary access.",
  "Administrative access remains intact.",
  "Required service accounts still function.",
  "No unexpected Deny entry blocks required access.",
  "Inheritance behaves as intended.",
  "SMB firewall and service dependencies remain healthy.",
];

const checklist = [
  "Open Computer Management → Shared Folders.",
  "Open Server Manager → File and Storage Services → Shares.",
  "Run Get-SmbShare.",
  "Run Get-SmbShareAccess on required shares.",
  "Review folder Security and Advanced Security.",
  "Review owner and inheritance.",
  "Run Get-Acl or icacls.",
  "Check active SMB sessions before disruptive changes.",
  "Use groups instead of many user-specific entries.",
  "Avoid unnecessary Full Control and Deny.",
  "Protect required service-account access.",
  "Verify required network access from client accounts.",
];

const reflection = [
  "Why do network users have to pass both share and NTFS permissions?",
  "Why is Full Control usually broader than ordinary users need?",
  "How can inheritance simplify permission management?",
  "Why can a Deny entry produce unexpected results?",
  "What should be checked before removing a service account from a folder ACL?",
  "Why should permission verification use standard user accounts instead of only an administrator?",
];

export default function FileSharesNtfsSmbPermissionsPage() {
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
            <Link href="/cyberpatriot/windows-server/roles-features-required-services" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/rdp-winrm-remote-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 11
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                File Shares, NTFS &amp; SMB Permissions
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Secure Windows file sharing by understanding how SMB share
                permissions and NTFS permissions combine, then apply least
                privilege without breaking required user or application access.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                File-server security is not one permission screen. Ownership,
                inheritance, group membership, share access, NTFS access, and
                service dependencies all contribute to the final result.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Access layers</span>
                  <span className="font-bold text-white">Share + NTFS</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main tools</span>
                  <span className="font-bold text-white">GUI + PowerShell</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key concern</span>
                  <span className="font-bold text-white">Effective access</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Least privilege</span>
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
          Six concepts that explain file-server access
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
              Network access is controlled by more than one layer
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A user connecting through SMB must satisfy the share layer and the
              NTFS layer. Troubleshooting only one side can lead to the wrong
              conclusion.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Permission warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Permission changes can break users and applications instantly
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Service accounts, inherited groups, open files, and nested group
              memberships may depend on the current ACL.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Document the current ACL and active dependencies before making broad permission changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review shares and permissions
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
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Permission layers
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Share permissions and NTFS permissions work together
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {permissionLayers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Scope
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.scope}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Examples
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.examples}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-300">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Common NTFS permissions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what each level actually permits
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonNtfsPermissions.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Share review
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Ten questions before changing file access
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {reviewQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell and command-line inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory shares, sessions, and ACLs
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
          Inheritance
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand where permissions come from
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {inheritanceConcepts.map((item) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Deny guidance
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Deny is powerful and easy to misuse
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {denyGuidance.map((item) => (
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
            Effective access
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Trace the user's real access from identity to client test
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {effectiveAccessSteps.map((item) => (
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
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Secure design examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use groups and narrow rights
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {secureDesignExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.scenario}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.approach}</p>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Verify
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.verify}</p>
                </div>
              </article>
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
            When file access does not match expectations
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
        <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk situations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Permission changes that deserve extra caution
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {riskySituations.map((item) => (
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
            Permission decisions in server context
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
            Secure TeamDocs on FILE-SRV
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
          Permission mistakes that break file access
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
              Test your permission reasoning
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
              Confirm least privilege and required access
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
            Before leaving file-share review
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
                RDP, WinRM &amp; Remote Administration
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review remote administrative access, authorized users,
                firewall exposure, Remote Desktop Services, WinRM, and safe
                management paths without locking the team out.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/rdp-winrm-remote-administration"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 12 &rarr;
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
            <Link href="/cyberpatriot/windows-server/roles-features-required-services" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/rdp-winrm-remote-administration" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
