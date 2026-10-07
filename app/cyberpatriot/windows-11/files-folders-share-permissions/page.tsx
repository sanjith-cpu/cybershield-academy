import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the difference between NTFS permissions, share permissions, ownership, inheritance, and effective access.",
  "Review file and folder access without assuming that one visible permission entry tells the whole story.",
  "Use least privilege to preserve required access while removing unnecessary exposure.",
  "Recognize how local permissions and network share permissions combine when a folder is accessed remotely.",
  "Use File Explorer, Computer Management, icacls, and PowerShell to inspect permissions in an authorized environment.",
  "Verify that authorized users retain required access and unauthorized users lose unnecessary access after changes.",
];

const permissionLayers = [
  {
    title: "NTFS permissions",
    text:
      "Control access to files and folders on NTFS volumes. They apply both locally and, in combination with share permissions, across the network.",
  },
  {
    title: "Share permissions",
    text:
      "Apply when a folder is accessed through a Windows network share. They do not replace NTFS permissions.",
  },
  {
    title: "Ownership",
    text:
      "The owner has special control over the object and may be able to change permissions. Ownership should be reviewed when access seems unusual.",
  },
  {
    title: "Inheritance",
    text:
      "Permissions can flow from a parent folder to child folders and files. Inherited entries may explain access that is not obvious from one object.",
  },
  {
    title: "Effective access",
    text:
      "The access a user actually receives after group memberships, explicit permissions, inherited permissions, denies, and share permissions are considered together.",
  },
];

const commonPermissions = [
  {
    title: "Full control",
    text:
      "Allows reading, writing, modifying, deleting, and changing permissions. This is highly privileged and should be limited.",
  },
  {
    title: "Modify",
    text:
      "Allows reading, writing, changing, and deleting content but does not provide every permission-management capability of Full control.",
  },
  {
    title: "Read & execute",
    text:
      "Allows reading files and running executable content where applicable.",
  },
  {
    title: "Read",
    text:
      "Allows viewing file and folder content without modification.",
  },
  {
    title: "Write",
    text:
      "Allows creation or modification of files or folders depending on the object and inherited rights.",
  },
];

const inheritanceConcepts = [
  {
    title: "Inherited allow",
    text:
      "A user may receive access from a parent folder even if the child folder has no explicit allow entry for that user.",
  },
  {
    title: "Explicit allow",
    text:
      "An explicit permission is assigned directly to the object rather than inherited from a parent.",
  },
  {
    title: "Explicit deny",
    text:
      "Deny entries can override expected access and should be used carefully because they can create confusing results.",
  },
  {
    title: "Broken inheritance",
    text:
      "A child object may stop inheriting from its parent and maintain a different permission set.",
  },
  {
    title: "Group-based access",
    text:
      "Users often receive access through groups, so reviewing only the user's direct entries may miss the real source of permission.",
  },
];

const sharePermissionModel = [
  {
    title: "Local access",
    text:
      "When a user accesses the folder directly on the computer, NTFS permissions determine the result.",
  },
  {
    title: "Network access",
    text:
      "When a user accesses the folder through a Windows share, both share permissions and NTFS permissions matter.",
  },
  {
    title: "Most restrictive result",
    text:
      "For remote access, the effective result is limited by the combination of share and NTFS permissions.",
  },
  {
    title: "Scenario requirement",
    text:
      "A share should be available only to the users or groups who need it, with no more access than the required workflow demands.",
  },
];

const reviewQuestions = [
  "Who is supposed to access this file, folder, or share?",
  "Should the user have Read, Modify, or Full control?",
  "Is access assigned directly or through a group?",
  "Is the permission inherited from a parent?",
  "Is there an explicit deny that changes the expected result?",
  "Does the folder also have share permissions?",
  "Who owns the object?",
  "Could changing permissions break a required application, service, or user workflow?",
  "Does a forensic question depend on the file, timestamps, or existing access configuration?",
  "How will the team test the final effective access?",
];

const tools = [
  {
    title: "File Explorer — Security tab",
    command: "Properties → Security",
    text:
      "Shows NTFS permission entries and provides access to Advanced Security Settings.",
  },
  {
    title: "Advanced Security Settings",
    command: "Properties → Security → Advanced",
    text:
      "Shows ownership, inherited entries, explicit entries, inheritance state, and effective-access tools.",
  },
  {
    title: "Shared Folders",
    command: "Computer Management → Shared Folders",
    text:
      "Shows shares, sessions, and open files, which can help identify active network access.",
  },
  {
    title: "Share properties",
    command: "Properties → Sharing → Advanced Sharing → Permissions",
    text:
      "Shows permissions that apply when the folder is accessed through the share.",
  },
];

const commandExamples = [
  {
    label: "Inspect NTFS permissions",
    command: 'icacls "C:\\Practice\\Project"',
    purpose:
      "Displays access-control entries for a selected authorized practice folder.",
  },
  {
    label: "PowerShell ACL inspection",
    command: 'Get-Acl "C:\\Practice\\Project" | Format-List',
    purpose:
      "Shows owner, access entries, and other ACL information for inspection.",
  },
  {
    label: "Review SMB shares",
    command: "Get-SmbShare",
    purpose:
      "Lists Windows SMB shares and basic properties.",
  },
  {
    label: "Review SMB share access",
    command: 'Get-SmbShareAccess -Name "ProjectShare"',
    purpose:
      "Shows share-level access entries for a known authorized practice share.",
  },
];

const classification = [
  {
    label: "Required access",
    text:
      "The user or group clearly needs access to perform a scenario-required task.",
    action:
      "Keep the access, but reduce it to the minimum permission level needed.",
  },
  {
    label: "Excessive access",
    text:
      "The user needs access, but has more privilege than necessary.",
    action:
      "Reduce Full control or Modify to the least privilege that supports the task.",
  },
  {
    label: "Unauthorized access",
    text:
      "A user or group has access with no scenario or operational justification.",
    action:
      "Remove or correct the permission after confirming dependencies and effective access.",
  },
  {
    label: "Unknown access",
    text:
      "The permission entry is unfamiliar or appears to come from an unexpected group or inheritance path.",
    action:
      "Investigate group membership, inheritance, ownership, and application dependencies before changing it.",
  },
];

const leastPrivilegeExamples = [
  {
    title: "Read-only research folder",
    text:
      "Users who only need to view documents should not receive Modify or Full control.",
  },
  {
    title: "Shared project folder",
    text:
      "Contributors may need Modify while reviewers may need only Read. Different roles can require different groups.",
  },
  {
    title: "Administrative folder",
    text:
      "Only administrators or a narrow management group may need access to sensitive configuration files.",
  },
  {
    title: "Application data",
    text:
      "Changing permissions manually can break software if the application expects a service account or system principal to have access.",
  },
];

const ownershipConcepts = [
  {
    title: "Ownership is not ordinary access",
    text:
      "The owner may not automatically have every read or write permission, but ownership can allow control over permission changes.",
  },
  {
    title: "Taking ownership is high impact",
    text:
      "Changing ownership can alter the security model of a folder and may affect applications or system files.",
  },
  {
    title: "Preserve system ownership",
    text:
      "System-managed folders often have intentional ownership and ACL structures. Do not take ownership merely because access is inconvenient.",
  },
  {
    title: "Document unusual ownership",
    text:
      "Unexpected ownership on a sensitive folder can be evidence worth recording before changing it.",
  },
];

const decisionCases = [
  {
    title: "Authorized user has Full control",
    evidence:
      "Avery is authorized to read and edit project documents, but the folder grants Avery Full control.",
    reasoning:
      "Avery needs access, but permission-management capability is unnecessary.",
    response:
      "Reduce access to the level required for editing, then verify Avery can still complete the project workflow.",
  },
  {
    title: "Everyone has broad share access",
    evidence:
      "A project share grants broad access at the share level while NTFS permissions are more restrictive.",
    reasoning:
      "The NTFS layer may reduce actual access, but the broad share still creates unnecessary ambiguity and exposure.",
    response:
      "Align share permissions with the intended audience while preserving the required users and verifying remote access.",
  },
  {
    title: "Unknown group inherits access",
    evidence:
      "An unfamiliar local group appears on a folder through inheritance from the parent directory.",
    reasoning:
      "Removing the child entry alone may not work because the source is inherited.",
    response:
      "Investigate the group, parent ACL, and required application access before changing inheritance or group membership.",
  },
  {
    title: "Required application folder is restricted",
    evidence:
      "A service account loses access after permissions are tightened on the application's data folder.",
    reasoning:
      "The security change removed a dependency the application actually requires.",
    response:
      "Restore the narrow service-account access required by the application and verify the service works.",
  },
];

const denyGuidance = [
  {
    title: "Prefer clear group design",
    text:
      "It is usually easier to manage who should receive access than to build complex layers of deny entries.",
  },
  {
    title: "Use deny carefully",
    text:
      "A deny can override access inherited through groups and produce surprising results.",
  },
  {
    title: "Test effective access",
    text:
      "If a deny is present, verify the actual result for the affected user or group.",
  },
  {
    title: "Do not remove blindly",
    text:
      "An existing deny may protect sensitive content. Understand why it exists before deleting it.",
  },
];

const shareSecurityQuestions = [
  "Is the share actually required?",
  "Which users or computers need remote access?",
  "Does the active firewall profile allow the required SMB traffic?",
  "Are share permissions broader than necessary?",
  "Are NTFS permissions broader than necessary?",
  "Do authorized users receive the same intended access locally and remotely?",
  "Are there active sessions or open files that could be interrupted by the change?",
  "Should the share remain hidden or discoverable according to the scenario?",
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional scenario",
    text:
      "A project folder must be shared with Avery and Riley. Avery needs Modify access, Riley needs Read access, and Morgan is the authorized administrator. Other local users should not access the project.",
  },
  {
    number: "02",
    title: "Inspect NTFS permissions",
    text:
      "The folder inherits broad Users-group Modify access from its parent and also gives Morgan Full control.",
  },
  {
    number: "03",
    title: "Inspect share permissions",
    text:
      "The share grants broad Change access to a large group, which is wider than the scenario requires.",
  },
  {
    number: "04",
    title: "Design least privilege",
    text:
      "Avery should keep Modify, Riley should receive Read, Morgan should retain administrative control, and unnecessary broad access should be removed.",
  },
  {
    number: "05",
    title: "Apply controlled changes",
    text:
      "Adjust the NTFS and share permissions with inheritance and group membership in mind rather than adding multiple confusing deny rules.",
  },
  {
    number: "06",
    title: "Verify effective access",
    text:
      "Test Avery locally and remotely for Modify, Riley for Read-only access, Morgan for administration, and an unauthorized user for denied access.",
  },
];

const troubleshooting = [
  {
    symptom: "User can access locally but not through the share",
    questions:
      "Are share permissions more restrictive than NTFS? Is SMB allowed through the firewall? Is the user accessing the correct share name?",
  },
  {
    symptom: "User has access even after direct permission removal",
    questions:
      "Is access inherited? Is the user a member of another allowed group? Does ownership or another ACL entry provide access?",
  },
  {
    symptom: "Application stops working",
    questions:
      "Did the application or service account lose access to its data or configuration folder? Was inherited access removed?",
  },
  {
    symptom: "Permission changes keep propagating unexpectedly",
    questions:
      "Is inheritance enabled? Was the parent ACL changed? Did the change convert inherited entries to explicit entries?",
  },
];

const mistakes = [
  {
    title: "Looking only at direct user entries",
    text:
      "Group membership and inheritance often explain effective access.",
  },
  {
    title: "Using deny as the first fix",
    text:
      "Complex deny rules can make permissions harder to understand and troubleshoot.",
  },
  {
    title: "Ignoring share permissions",
    text:
      "Remote access depends on both share and NTFS permissions.",
  },
  {
    title: "Taking ownership unnecessarily",
    text:
      "Changing ownership can disrupt system or application security structures.",
  },
  {
    title: "Removing SYSTEM or service access blindly",
    text:
      "Applications and Windows components may depend on these principals.",
  },
  {
    title: "No effective-access test",
    text:
      "A permission dialog can look correct while the real user experience is still wrong.",
  },
];

const verification = [
  "Confirm the folder owner is appropriate.",
  "Confirm inheritance is configured intentionally.",
  "Confirm explicit permissions are limited to required users and groups.",
  "Confirm share permissions match the remote-access requirement.",
  "Confirm authorized users receive the intended Read or Modify access.",
  "Confirm unauthorized users do not receive unnecessary access.",
  "Confirm required applications or service accounts still function.",
  "Confirm required shares remain reachable through the firewall.",
  "Review open sessions if the share is actively used.",
  "Document high-impact permission changes and unresolved access questions.",
];

const checklist = [
  "Identify the exact users and groups who require access.",
  "Separate local NTFS access from network share access.",
  "Review inherited and explicit permissions.",
  "Review ownership before taking ownership or changing it.",
  "Review group membership for users with unexpected access.",
  "Review share permissions for every required SMB share.",
  "Reduce excessive Full control or Modify access.",
  "Avoid unnecessary deny entries.",
  "Preserve required application and service-account access.",
  "Test authorized and unauthorized effective access.",
  "Verify firewall and share availability after remote-access changes.",
  "Document important permission changes.",
];

const reflection = [
  "What is the difference between NTFS permissions and share permissions?",
  "Why can a user still have access after a direct permission entry is removed?",
  "Why should inheritance be reviewed before changing a child folder?",
  "When can taking ownership create problems?",
  "Why is effective access more important than one visible ACL entry?",
  "What should be tested after changing permissions on a required share?",
];

export default function FilesFoldersSharePermissionsPage() {
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
            <Link href="/cyberpatriot/windows-11/installed-software-unwanted-applications" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/remote-access-rdp" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
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
                Windows 11 · Lesson 10
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Files, Folders &amp; Share Permissions
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how NTFS permissions, share permissions, ownership,
                inheritance, group membership, and effective access combine to
                determine who can actually reach Windows data.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Permission hardening is not just removing names from a list.
                Strong teams understand where access comes from, preserve
                required workflows, and verify the final result from the user's
                perspective.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Permission layers</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Common NTFS levels</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main principle</span>
                  <span className="font-bold text-white">Least privilege</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Correct effective access</span>
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
            What permission review should help you do
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
              Effective access is the real answer
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A user's actual access may come from direct entries, inherited
              entries, group membership, ownership, and share permissions.
              Review the whole path before deciding.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Permission warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Removing access can break applications and services
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              SYSTEM, service accounts, administrators, or application groups
              may have legitimate access to data folders.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Preserve required dependencies and test the real workflow after
              high-impact ACL changes.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Permission layers
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Five ideas that determine access
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {permissionLayers.map((item) => (
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
            NTFS permission levels
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match permission level to the required task
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {commonPermissions.map((item) => (
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
          Inheritance and groups
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Access may come from somewhere else
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Local vs network access
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Share and NTFS permissions work together
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sharePermissionModel.map((item) => (
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
              Inspect permissions from the GUI
            </h2>
            <div className="mt-5 grid gap-3">
              {tools.map((item) => (
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
              Command-line inspection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Read ACLs and share access efficiently
            </h2>
            <div className="mt-5 grid gap-3">
              {commandExamples.map((item) => (
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
        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Before changing permissions
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Ten questions to answer
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {reviewQuestions.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Access classification
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Decide what kind of permission problem you have
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {classification.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                  Response
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.action}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Least-privilege examples
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Match access to role
            </h2>
            <div className="mt-5 grid gap-3">
              {leastPrivilegeExamples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Ownership
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Treat ownership changes as high impact
            </h2>
            <div className="mt-5 grid gap-3">
              {ownershipConcepts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Permission decisions in context
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Deny permissions
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Use explicit deny sparingly
            </h2>
            <div className="mt-5 grid gap-3">
              {denyGuidance.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Share security
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Review remote-access requirements too
            </h2>
            <div className="mt-5 grid gap-3">
              {shareSecurityQuestions.map((item, index) => (
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
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build least-privilege access for a shared project folder
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
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When permissions do not behave as expected
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Permission habits that create avoidable problems
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm the final access model
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
            Before leaving Files, Folders &amp; Shares
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
                Next Windows lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Remote Access &amp; RDP
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, learn how Remote Desktop depends on users, user rights,
                firewall rules, services, network exposure, and secure access
                decisions.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-11/remote-access-rdp"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 11 →
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
            <Link href="/cyberpatriot/windows-11/installed-software-unwanted-applications" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              ← Previous Lesson
            </Link>
            <Link href="/cyberpatriot/windows-11/remote-access-rdp" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
