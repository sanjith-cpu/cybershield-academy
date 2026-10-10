import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain Linux file ownership, group ownership, and rwx permissions for users, groups, and others.",
  "Read symbolic and numeric permission modes without relying on memorized guesses.",
  "Understand how directories use read, write, and execute permissions differently from regular files.",
  "Recognize when setuid, setgid, and sticky bits are expected, risky, or worthy of investigation.",
  "Use inspection commands to understand ownership and permissions before changing them.",
  "Apply narrow permission fixes without breaking required users, services, scripts, or applications.",
];

const coreConcepts = [
  {
    title: "Owner",
    text:
      "Every file and directory has an owning user. Ownership affects which permission bits apply and often reflects which user or service is responsible for the object.",
  },
  {
    title: "Group",
    text:
      "Every file and directory also has an owning group. Group permissions are a common way to share access without granting access to everyone.",
  },
  {
    title: "Read",
    text:
      "For regular files, read allows content to be viewed. For directories, read allows the directory entries to be listed when other required permissions are present.",
  },
  {
    title: "Write",
    text:
      "For regular files, write allows content modification. For directories, write controls whether entries can be created, renamed, or deleted when combined with execute permission.",
  },
  {
    title: "Execute",
    text:
      "For regular files, execute allows the file to be run as a program or script when other requirements are met. For directories, execute allows traversal into the directory.",
  },
  {
    title: "Least privilege",
    text:
      "Permissions should give users and services only the access required for their role while preserving the functionality the scenario expects.",
  },
];

const modeExamples = [
  {
    mode: "-rw-r-----",
    numeric: "640",
    meaning:
      "Owner can read and write; group can read; others have no access.",
  },
  {
    mode: "-rwxr-x---",
    numeric: "750",
    meaning:
      "Owner has full access; group can read and execute; others have no access.",
  },
  {
    mode: "drwxr-x---",
    numeric: "750",
    meaning:
      "Directory owner can list, create, delete, and traverse; group can list and traverse; others have no access.",
  },
  {
    mode: "-rw-------",
    numeric: "600",
    meaning:
      "Only the owner can read and write the file.",
  },
  {
    mode: "drwx------",
    numeric: "700",
    meaning:
      "Only the owner can access and modify the directory contents.",
  },
  {
    mode: "-rwxr-xr-x",
    numeric: "755",
    meaning:
      "Owner can read, write, and execute; group and others can read and execute.",
  },
];

const numericMap = [
  { value: "4", permission: "read", symbol: "r" },
  { value: "2", permission: "write", symbol: "w" },
  { value: "1", permission: "execute", symbol: "x" },
  { value: "0", permission: "none", symbol: "-" },
];

const directorySemantics = [
  {
    permission: "Read on a directory",
    effect:
      "Allows directory entries to be listed, but without execute permission you may not be able to access metadata or descend into entries normally.",
  },
  {
    permission: "Write on a directory",
    effect:
      "Allows creation, deletion, or renaming of entries when execute permission is also available. This can matter even if the file itself is not writable.",
  },
  {
    permission: "Execute on a directory",
    effect:
      "Allows traversal and access to entries by name. A directory with execute but no read can sometimes allow access to known filenames without allowing a listing.",
  },
];

const inspectionCommands = [
  {
    command: "ls -l /path/to/item",
    purpose:
      "Show symbolic permissions, owner, group, size, and timestamp information.",
  },
  {
    command: "ls -ld /path/to/directory",
    purpose:
      "Inspect the directory itself instead of listing its contents.",
  },
  {
    command: "stat /path/to/item",
    purpose:
      "Show detailed ownership, numeric mode, symbolic mode, timestamps, inode information, and other metadata.",
  },
  {
    command: "namei -l /path/to/item",
    purpose:
      "Show permissions and ownership for each component of a path, which is useful when access fails because of a parent directory.",
  },
  {
    command: "id username",
    purpose:
      "Show the user's UID, primary group, and supplementary groups that may affect access.",
  },
  {
    command: "getfacl /path/to/item",
    purpose:
      "Display POSIX ACLs when the getfacl tool is installed. ACLs can grant access beyond the basic owner/group/other bits.",
  },
  {
    command: "find /path -xdev -type f -perm -4000 -print 2>/dev/null",
    purpose:
      "Find setuid files inside a scoped filesystem. Keep searches limited and interpret results before acting.",
  },
  {
    command: "find /path -xdev -type f -perm -2000 -print 2>/dev/null",
    purpose:
      "Find setgid regular files inside a scoped filesystem for review.",
  },
  {
    command: "find /path -xdev -type d -perm -0002 -print 2>/dev/null",
    purpose:
      "Find world-writable directories in a scoped area for investigation.",
  },
  {
    command: "sudo -u username test -r /path && echo readable",
    purpose:
      "Test whether a particular user can read a path without changing permissions.",
  },
];

const specialBits = [
  {
    bit: "setuid",
    marker: "s on owner execute",
    numeric: "4000",
    meaning:
      "On executable files, may cause the process to run with the effective UID of the file owner.",
    caution:
      "Many legitimate administrative tools use setuid. Unexpected setuid files deserve investigation, not automatic deletion.",
  },
  {
    bit: "setgid",
    marker: "s on group execute",
    numeric: "2000",
    meaning:
      "On executable files, may run with the file's group. On directories, newly created entries may inherit the directory's group.",
    caution:
      "Setgid directories are common for collaborative group workflows. Understand purpose before removal.",
  },
  {
    bit: "sticky",
    marker: "t on others execute",
    numeric: "1000",
    meaning:
      "On shared directories, restricts deletion or renaming so users generally cannot remove files they do not own.",
    caution:
      "The sticky bit is commonly expected on shared temporary directories such as /tmp.",
  },
];

const ownershipReasoning = [
  {
    finding: "A web directory is owned by root",
    weak:
      "Change the entire tree to the web-service account.",
    better:
      "Determine which files the service must only read, which directories it must write, how deployment is performed, and whether root ownership is intentionally protecting application code.",
  },
  {
    finding: "A user's SSH private key is group-readable",
    weak:
      "Fix every file in the home directory recursively.",
    better:
      "Correct only the SSH-related file or directory permissions that are actually wrong and verify the authorized login path afterward.",
  },
  {
    finding: "A service cannot read its configuration",
    weak:
      "chmod 777 the configuration file.",
    better:
      "Identify the service user and group, inspect the path components, and grant only the specific read or traversal access required.",
  },
  {
    finding: "A shared directory is group-writable",
    weak:
      "Remove group write because write access is dangerous.",
    better:
      "Check whether collaboration is required, whether setgid maintains group ownership, and whether access is limited to the correct group.",
  },
  {
    finding: "A file is world-writable",
    weak:
      "Assume it is malicious.",
    better:
      "Treat it as a high-priority permission review. Identify purpose, owner, package or service relationship, and whether broad write access is justified.",
  },
  {
    finding: "A setuid binary exists",
    weak:
      "Remove setuid from every result.",
    better:
      "Identify the package, expected mode, executable purpose, path, ownership, and whether the file is trusted before changing a privilege mechanism.",
  },
];

const controlledChanges = [
  {
    goal: "Change file owner",
    command: "sudo chown username /path/to/file",
    caution:
      "Use only when the desired owner is known. Changing service or package-managed file ownership can break functionality.",
  },
  {
    goal: "Change owner and group",
    command: "sudo chown username:groupname /path/to/file",
    caution:
      "Confirm both identities and expected access before applying the change.",
  },
  {
    goal: "Change only group ownership",
    command: "sudo chgrp groupname /path/to/file",
    caution:
      "Useful when group-based collaboration is intended and owner should remain unchanged.",
  },
  {
    goal: "Set owner read/write only",
    command: "sudo chmod 600 /path/to/file",
    caution:
      "Appropriate only when the file should be private to its owner. Verify dependent services or users do not require access.",
  },
  {
    goal: "Set owner full, group read/execute",
    command: "sudo chmod 750 /path/to/directory",
    caution:
      "Directory access depends on intended traversal and collaboration requirements.",
  },
  {
    goal: "Remove world write",
    command: "sudo chmod o-w /path/to/item",
    caution:
      "Symbolic changes can be safer when you want to alter one permission while preserving the rest.",
  },
];

const aclConcepts = [
  {
    title: "ACLs extend basic permissions",
    text:
      "POSIX ACLs can grant or restrict access for additional users and groups beyond the single owner, owning group, and others fields.",
  },
  {
    title: "ls may show a plus sign",
    text:
      "An ls -l mode ending with + can indicate extended ACL information is present.",
  },
  {
    title: "getfacl shows the detail",
    text:
      "When available, getfacl reveals named user and group entries and the ACL mask.",
  },
  {
    title: "The ACL mask matters",
    text:
      "The mask can limit the effective permissions of named users, named groups, and the owning group.",
  },
  {
    title: "Default ACLs can inherit",
    text:
      "Directories can have default ACLs that influence permissions on newly created children.",
  },
  {
    title: "Do not erase ACLs blindly",
    text:
      "Removing ACLs can break legitimate application or collaboration access even if basic rwx bits look simpler afterward.",
  },
];

const umaskConcepts = [
  {
    title: "umask affects defaults",
    text:
      "The umask influences which permission bits are removed from the default mode when new files and directories are created.",
  },
  {
    title: "It is not a permission by itself",
    text:
      "umask modifies creation behavior. It does not directly change existing files.",
  },
  {
    title: "Process context matters",
    text:
      "A user's shell, a service, or an application may use different umask settings.",
  },
  {
    title: "Check before changing",
    text:
      "A stricter umask can improve privacy but may break workflows that depend on group-readable or group-writable files.",
  },
];

const highRiskPatterns = [
  {
    pattern: "chmod -R 777 /some/path",
    risk:
      "Grants broad read/write/execute access recursively and destroys the intended permission model.",
  },
  {
    pattern: "chown -R user:user /system/path",
    risk:
      "Can break package ownership, service accounts, executable behavior, and application access across a large tree.",
  },
  {
    pattern: "Removing all setuid bits",
    risk:
      "Can break legitimate system tools that rely on controlled privilege elevation.",
  },
  {
    pattern: "Fixing access by adding everyone to one group",
    risk:
      "Expands privilege and file access instead of solving the actual ownership or role problem.",
  },
  {
    pattern: "Changing /etc, /usr, or /var recursively",
    risk:
      "These trees contain many files with intentionally different ownership and permission requirements.",
  },
  {
    pattern: "Ignoring parent-directory permissions",
    risk:
      "A file may look readable while a missing execute permission on a parent directory still blocks access.",
  },
];

const verification = [
  {
    area: "Mode",
    check:
      "Re-run ls -l and stat to confirm only the intended permission bits changed.",
  },
  {
    area: "Ownership",
    check:
      "Confirm the expected user and group own the object after chown or chgrp.",
  },
  {
    area: "Path access",
    check:
      "Use namei -l or a user-context test to confirm every directory component permits the required traversal.",
  },
  {
    area: "Service",
    check:
      "If a service depends on the path, verify the service can still read, write, or execute exactly what it requires.",
  },
  {
    area: "User workflow",
    check:
      "Test the scenario-required user's actual access rather than assuming the mode string guarantees success.",
  },
  {
    area: "Evidence",
    check:
      "Confirm relevant metadata and suspicious permission evidence were recorded before remediation.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: Morgan is the administrator; Avery and Riley share a required project directory; an internal web service reads configuration from /srv/cyberapp but should not rewrite application code.",
  },
  {
    step: "02",
    task:
      "Inspect ownership and modes for /srv/cyberapp, its parent directories, the shared project directory, and the relevant user home directories.",
  },
  {
    step: "03",
    task:
      "Use id and namei -l to determine which groups and parent-directory permissions actually control access.",
  },
  {
    step: "04",
    task:
      "Classify a world-writable configuration file as a confirmed permission problem, but preserve its contents and metadata before changing it.",
  },
  {
    step: "05",
    task:
      "Correct only the necessary owner/group or permission bits rather than applying recursive 777 or broad chown changes.",
  },
  {
    step: "06",
    task:
      "Inspect any setuid or setgid findings in the scoped practice directory and determine whether they are expected.",
  },
  {
    step: "07",
    task:
      "Verify Avery and Riley retain required collaboration access and the web service still functions with least privilege.",
  },
];

const checklist = [
  "I can read rwx permissions for owner, group, and others.",
  "I can convert common symbolic modes to numeric values and understand what the numbers represent.",
  "I understand that directory read, write, and execute permissions have different effects than file permissions.",
  "I inspect ownership, group membership, and parent-directory permissions before changing access.",
  "I know what setuid, setgid, and sticky bits do at a high level.",
  "I do not remove special bits simply because they look unusual.",
  "I understand that ACLs can grant access beyond basic owner/group/other permissions.",
  "I know that umask influences new-file defaults rather than existing files.",
  "I avoid recursive chmod or chown changes unless the exact permission model is known.",
  "I verify both security and required functionality after every permission change.",
];

const reflection = [
  "Why can chmod 777 solve an access problem while simultaneously creating a security problem?",
  "Why can a user fail to access a readable file when a parent directory lacks execute permission?",
  "Why should setuid files be investigated instead of automatically modified?",
  "How can ACLs make the output of ls -l incomplete as an access explanation?",
  "Why can changing ownership break a service even if the permissions look permissive?",
  "What should you test after changing permissions on a directory used by multiple users or a service?",
];

export default function LinuxFileOwnershipPermissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/passwords-authentication-account-policies"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/packages-repositories-software-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Linux · Lesson 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                File Ownership & Permissions
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Linux ownership, groups, rwx permissions, special bits,
                ACLs, directory semantics, and least privilege work together so
                you can fix access problems without opening the system too far.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Permissions are not just numbers. They describe which identities
                can read, modify, traverse, or execute a resource. Strong
                defensive work starts by understanding the user, group, path,
                service, and required workflow before changing a mode.
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
                  <span>Special bits</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">10</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Least-privilege access</span>
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
            Understand the access model before changing it
          </h2>

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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Access should match the role
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The objective is not to make every file private. Some files must be
              readable by services, some directories must be collaborative, and
              some executables need special privilege behavior. The correct mode
              is the one that supports the required role with the least access
              necessary.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Permission risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Broad fixes can create broader problems
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Commands such as recursive chmod or chown can modify hundreds of
              objects with different intended roles. Fix the smallest confirmed
              scope and verify dependent users and services afterward.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Permission fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind Linux access control
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Reading modes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Symbolic and numeric permissions describe the same access
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modeExamples.map((item) => (
              <div
                key={item.mode}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <code className="text-lg font-black text-cyan-200">
                    {item.mode}
                  </code>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.numeric}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numericMap.map((item) => (
              <div
                key={item.value}
                className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-black text-cyan-200">
                    {item.value}
                  </span>
                  <code className="text-lg font-black text-white">
                    {item.symbol}
                  </code>
                </div>
                <p className="mt-2 text-sm capitalize text-slate-300">
                  {item.permission}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="text-sm font-black text-white">
              Example: 750
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              7 means 4+2+1: read, write, execute for the owner. 5 means 4+1:
              read and execute for the group. 0 means no access for others.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Directory permissions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            rwx means something different on directories
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {directorySemantics.map((item) => (
              <div
                key={item.permission}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.permission}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.effect}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Parent directories matter
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A file can have the correct mode and still be inaccessible because
              the user cannot traverse one of its parent directories. Use
              <code className="mx-1 rounded bg-slate-950 px-2 py-1 text-cyan-200">
                namei -l
              </code>
              when the visible file permissions do not explain the problem.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Commands that explain access before you change it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Search scope matters
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Permission searches can produce a lot of output. Start with a
              relevant directory or filesystem and use
              <code className="mx-1 rounded bg-slate-950 px-2 py-1 text-cyan-200">
                -xdev
              </code>
              when you want to avoid crossing into other mounted filesystems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Special permission bits
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Powerful behaviors that require context
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {specialBits.map((item) => (
              <div
                key={item.bit}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-black text-white">{item.bit}</h3>
                  <code className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">
                    {item.numeric}
                  </code>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-300">
                  {item.marker}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-300">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Avoid permission guesses
          </h2>

          <div className="mt-8 grid gap-5">
            {ownershipReasoning.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled changes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Change only the confirmed access problem
          </h2>

          <div className="mt-8 grid gap-4">
            {controlledChanges.map((item) => (
              <div
                key={item.goal}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.8fr_1fr_1.2fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Goal
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    {item.goal}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Example
                  </p>
                  <code className="mt-2 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              ACLs
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Access beyond owner, group, and others
            </h2>

            <div className="mt-6 grid gap-3">
              {aclConcepts.map((item) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              umask
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Default permissions for newly created objects
            </h2>

            <div className="mt-6 grid gap-3">
              {umaskConcepts.map((item) => (
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

            <code className="mt-5 block rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
              umask
            </code>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            High-risk permission shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Fast fixes that often create security or availability problems
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskPatterns.map((item) => (
              <div
                key={item.pattern}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <code className="text-sm font-black text-red-100">
                  {item.pattern}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove access from the perspective that matters
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <p className="text-sm font-black text-emerald-200">
              Permission success is functional success
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              A mode string can look correct while the application still fails.
              Test the real user or service behavior after the change.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Repair fictional Linux permissions without overcorrecting
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Ownership and permissions exist to support real identities,
                services, and workflows. Inspect first, make the smallest
                justified change, and verify access from the perspective of the
                user or service that actually depends on the path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/passwords-authentication-account-policies"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              ← Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/packages-repositories-software-review"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
