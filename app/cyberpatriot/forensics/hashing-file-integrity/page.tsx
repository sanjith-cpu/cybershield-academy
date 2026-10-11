import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what a cryptographic hash represents and why it is useful in forensic work.",
  "Distinguish file identity from filename, location, ownership, and user intent.",
  "Use SHA-256 style hashes to compare original files, working copies, and later versions.",
  "Understand why even a tiny content change produces a different digest.",
  "Document the algorithm, source path, observation time, and resulting digest correctly.",
  "Use hashes as one piece of evidence rather than treating them as a complete verdict.",
];

const hashConcepts = [
  {
    title: "Deterministic",
    text:
      "The same input processed by the same hashing algorithm produces the same digest.",
  },
  {
    title: "Fixed length",
    text:
      "A cryptographic hash produces a digest of a predictable size regardless of whether the source file is tiny or very large.",
  },
  {
    title: "Content sensitive",
    text:
      "Changing even one byte changes the digest, which makes hashes useful for detecting modified content.",
  },
  {
    title: "One-way",
    text:
      "A secure cryptographic hash is designed so the original file cannot practically be reconstructed from the digest alone.",
  },
  {
    title: "Identity aid",
    text:
      "A digest helps distinguish exact file content from filenames that may be duplicated, renamed, or misleading.",
  },
  {
    title: "Not a verdict",
    text:
      "A hash does not by itself prove who created the file, why it exists, or whether a user intentionally opened it.",
  },
];

const algorithmCards = [
  {
    name: "SHA-256",
    status: "Preferred for training",
    notes:
      "Widely used for integrity checks and produces a 256-bit digest. Good default for CyberPatriot-style evidence documentation.",
  },
  {
    name: "SHA-1",
    status: "Legacy awareness",
    notes:
      "Historically common but no longer considered collision-resistant enough for modern security-sensitive use.",
  },
  {
    name: "MD5",
    status: "Legacy awareness",
    notes:
      "Still seen in older tools and datasets, but not suitable for strong collision-resistant security guarantees.",
  },
];

const fileIdentity = [
  {
    property: "Filename",
    strength:
      "Weak identity clue",
    reason:
      "Files can be renamed, copied, duplicated, or intentionally given misleading names.",
  },
  {
    property: "Path",
    strength:
      "Context clue",
    reason:
      "Location matters, but identical content can exist in many different directories.",
  },
  {
    property: "Size",
    strength:
      "Useful supporting clue",
    reason:
      "Different files can have the same size, so size alone does not establish exact identity.",
  },
  {
    property: "Timestamp",
    strength:
      "Timeline clue",
    reason:
      "Useful for sequence reasoning but can change because of copying, extraction, restoration, or system behavior.",
  },
  {
    property: "Owner",
    strength:
      "Identity context",
    reason:
      "Shows which account owns the file, not necessarily who created, downloaded, or intentionally used it.",
  },
  {
    property: "Cryptographic hash",
    strength:
      "Strong content identity clue",
    reason:
      "Matching secure hashes strongly support that two files contain the same bytes.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Identify the artifact",
    text:
      "Record the source system, exact path, filename, size, and why the file matters to the forensic question.",
  },
  {
    step: "02",
    title: "Choose the algorithm",
    text:
      "Use a modern algorithm such as SHA-256 when the environment and tools support it.",
  },
  {
    step: "03",
    title: "Compute the digest",
    text:
      "Hash the file without editing or executing it. Record the algorithm and digest exactly.",
  },
  {
    step: "04",
    title: "Preserve the result",
    text:
      "Store the digest with the evidence note so later copies or versions can be compared.",
  },
  {
    step: "05",
    title: "Compare carefully",
    text:
      "A matching digest supports identical content. A different digest proves the content differs, but not why it changed.",
  },
  {
    step: "06",
    title: "Corroborate",
    text:
      "Combine the hash with path, timestamps, logs, ownership, browser records, or other evidence to answer the actual question.",
  },
];

const windowsExamples = [
  {
    label: "PowerShell SHA-256",
    command: `Get-FileHash "C:\\Users\\trainee\\Downloads\\sample.zip" -Algorithm SHA256`,
    use:
      "Returns the file path, algorithm, and digest for documentation.",
  },
  {
    label: "PowerShell default",
    command: `Get-FileHash "C:\\Evidence\\notes.txt"`,
    use:
      "PowerShell commonly defaults to SHA-256, but explicitly naming the algorithm makes documentation clearer.",
  },
  {
    label: "Compare two files",
    command: `$a = (Get-FileHash "C:\\Evidence\\original.bin" -Algorithm SHA256).Hash
$b = (Get-FileHash "C:\\Evidence\\copy.bin" -Algorithm SHA256).Hash
$a -eq $b`,
    use:
      "Returns True when both digests match exactly.",
  },
];

const linuxExamples = [
  {
    label: "SHA-256",
    command: `sha256sum /home/trainee/Downloads/sample.zip`,
    use:
      "Prints the digest followed by the file path.",
  },
  {
    label: "Multiple files",
    command: `sha256sum file1.txt file2.txt file3.txt`,
    use:
      "Useful for building a simple integrity list for several fictional artifacts.",
  },
  {
    label: "Verify a saved list",
    command: `sha256sum -c hashes.txt`,
    use:
      "Checks whether files still match the recorded SHA-256 digests when the saved list is formatted correctly.",
  },
];

const interpretationCases = [
  {
    finding:
      "Two files have the same filename but different SHA-256 hashes.",
    conclusion:
      "The files contain different bytes despite sharing the same name.",
    notSupported:
      "Which file is malicious or which user changed it.",
  },
  {
    finding:
      "Two files in different folders have the same SHA-256 hash.",
    conclusion:
      "The file contents are extremely likely to be identical.",
    notSupported:
      "Why both copies exist or who placed them there.",
  },
  {
    finding:
      "A working copy has the same hash as the original.",
    conclusion:
      "The copied file content matches the original at the time of comparison.",
    notSupported:
      "Whether metadata such as timestamps or permissions also match.",
  },
  {
    finding:
      "A file's hash changed after editing.",
    conclusion:
      "The underlying file content changed.",
    notSupported:
      "Exactly which bytes changed unless another comparison identifies them.",
  },
  {
    finding:
      "A hash appears in a known-bad training list.",
    conclusion:
      "The file content matches that training indicator if the list is trusted.",
    notSupported:
      "How the file arrived, who used it, or what actions occurred on the host.",
  },
  {
    finding:
      "A digest is absent from a reference list.",
    conclusion:
      "No match was found in that particular list.",
    notSupported:
      "That the file is safe.",
  },
];

const collisionConcepts = [
  {
    title: "What is a collision?",
    text:
      "A collision occurs when two different inputs produce the same hash digest.",
  },
  {
    title: "Why it matters",
    text:
      "Strong cryptographic hashes are designed to make finding collisions computationally impractical.",
  },
  {
    title: "Why algorithm choice matters",
    text:
      "Older algorithms such as MD5 and SHA-1 have known collision weaknesses, so SHA-256 is a stronger integrity choice.",
  },
  {
    title: "What competition students need",
    text:
      "You do not need to perform collision attacks. You need to recognize that modern secure algorithms provide stronger integrity confidence.",
  },
];

const metadataVsHash = [
  {
    question:
      "Did the filename change?",
    best:
      "Compare filename and path metadata.",
    hashRole:
      "A matching hash can show the content stayed the same even if the name changed.",
  },
  {
    question:
      "Did the file content change?",
    best:
      "Compare secure hashes from before and after.",
    hashRole:
      "Different hashes show the content is not identical.",
  },
  {
    question:
      "Was the file copied?",
    best:
      "Use path, timestamps, logs, and user activity.",
    hashRole:
      "Matching hashes can support that the copy contains the same content.",
  },
  {
    question:
      "Who created the file?",
    best:
      "Use logs, application artifacts, ownership, timestamps, and user activity.",
    hashRole:
      "The hash does not identify the creator.",
  },
  {
    question:
      "Was the file opened?",
    best:
      "Use application history, recent-file artifacts, logs, or process evidence.",
    hashRole:
      "The hash cannot prove execution or opening.",
  },
  {
    question:
      "Is this exactly the same evidence file as before?",
    best:
      "Compare a recorded secure hash and source documentation.",
    hashRole:
      "A matching digest is the strongest content-level comparison.",
  },
];

const documentationFields = [
  "Evidence label",
  "Source system",
  "Exact path",
  "Filename",
  "File size",
  "Hash algorithm",
  "Hash digest",
  "Observation time",
  "Artifact timestamp(s)",
  "Reason for hashing",
  "Related forensic question",
  "Corroborating evidence",
];

const sampleEvidence = {
  label: "F-03",
  system: "CP-WIN-07",
  path: "C:\\Users\\analyst\\Downloads\\training-archive.zip",
  size: "4.6 MB",
  algorithm: "SHA-256",
  digest: "7E3A...F91C (fictional shortened training digest)",
  observed: "2026-10-10 16:42 EDT",
  purpose: "Confirm file identity before later cleanup",
};

const hashSetPractice = [
  {
    file: "report-a.txt",
    hash: "AAA111",
    note:
      "Baseline report file.",
  },
  {
    file: "report-a-copy.txt",
    hash: "AAA111",
    note:
      "Same digest as report-a.txt.",
  },
  {
    file: "report-a-edited.txt",
    hash: "BBB222",
    note:
      "Different digest.",
  },
  {
    file: "archive.zip",
    hash: "CCC333",
    note:
      "Distinct artifact.",
  },
  {
    file: "archive-renamed.zip",
    hash: "CCC333",
    note:
      "Different name, same digest.",
  },
  {
    file: "archive-repacked.zip",
    hash: "DDD444",
    note:
      "Different digest even if extracted contents may overlap.",
  },
];

const hashSetQuestions = [
  {
    question:
      "Which two text files contain identical bytes?",
    answer:
      "report-a.txt and report-a-copy.txt because both use digest AAA111.",
  },
  {
    question:
      "Which file definitely differs in content from report-a.txt?",
    answer:
      "report-a-edited.txt because its digest is BBB222.",
  },
  {
    question:
      "What does archive-renamed.zip demonstrate?",
    answer:
      "A filename can change while content remains identical.",
  },
  {
    question:
      "Does archive-repacked.zip prove malicious modification?",
    answer:
      "No. Its different digest only proves that the archive bytes differ.",
  },
  {
    question:
      "What extra evidence would explain why the archive changed?",
    answer:
      "File timestamps, application history, user activity, logs, and related filesystem evidence.",
  },
];

const integrityBaseline = [
  {
    stage: "Baseline",
    purpose:
      "Record trusted or original hashes before intentional changes.",
  },
  {
    stage: "Working copy",
    purpose:
      "Confirm a copied artifact matches the baseline content.",
  },
  {
    stage: "Post-change",
    purpose:
      "Identify whether content changed after an authorized edit or update.",
  },
  {
    stage: "Final review",
    purpose:
      "Confirm important evidence files still match documented reference digests where expected.",
  },
];

const pitfalls = [
  {
    title: "Hashing the wrong file",
    text:
      "A correct digest of the wrong path is still the wrong evidence. Verify the source location first.",
  },
  {
    title: "Forgetting the algorithm",
    text:
      "A digest without SHA-256, SHA-1, MD5, or another algorithm label is incomplete documentation.",
  },
  {
    title: "Treating hash match as motive",
    text:
      "A content match does not explain who placed the file there or why.",
  },
  {
    title: "Assuming no reference match means safe",
    text:
      "Reference lists are incomplete. No match means only that the list did not contain that digest.",
  },
  {
    title: "Hashing after editing",
    text:
      "If you modify the artifact first, the digest no longer represents the original content.",
  },
  {
    title: "Copying a digest incorrectly",
    text:
      "One wrong character makes comparison invalid. Copy the full value exactly.",
  },
  {
    title: "Ignoring path context",
    text:
      "The same content in a system directory and a Downloads folder may have different investigative meaning.",
  },
  {
    title: "Using legacy algorithms blindly",
    text:
      "Older digests may appear in tools, but stronger modern algorithms are preferable for integrity work.",
  },
];

const practiceScenario = [
  {
    time: "10:03",
    evidence:
      "User trainee2 logs in to the fictional workstation CP-WS-12.",
  },
  {
    time: "10:07",
    evidence:
      "Browser history records a download named helper.exe into Downloads.",
  },
  {
    time: "10:08",
    evidence:
      "helper.exe is hashed with SHA-256 and recorded as HASH-A.",
  },
  {
    time: "10:11",
    evidence:
      "A copy named updater.exe appears in another folder.",
  },
  {
    time: "10:12",
    evidence:
      "updater.exe is hashed and also produces HASH-A.",
  },
  {
    time: "10:15",
    evidence:
      "helper.exe is edited in the fictional lab and now produces HASH-B.",
  },
];

const scenarioQuestions = [
  {
    question:
      "What does the matching HASH-A value establish?",
    answer:
      "helper.exe at 10:08 and updater.exe at 10:12 contained identical bytes.",
  },
  {
    question:
      "Does the renamed updater.exe prove a different program?",
    answer:
      "No. The matching hash shows the file content was the same despite the different name.",
  },
  {
    question:
      "What does HASH-B establish?",
    answer:
      "The later helper.exe content differs from the earlier HASH-A version.",
  },
  {
    question:
      "Can the hashes prove who renamed the file?",
    answer:
      "No. User activity, logs, or filesystem evidence would be needed.",
  },
  {
    question:
      "Why should HASH-A have been recorded before editing?",
    answer:
      "It preserves the identity of the original content for later comparison.",
  },
  {
    question:
      "What other evidence would help explain the file's history?",
    answer:
      "Browser records, timestamps, ownership, process activity, logs, and the source and destination paths.",
  },
];

const checklist = [
  "I verify the exact file path before hashing.",
  "I use a modern algorithm such as SHA-256 where available.",
  "I record the algorithm name with the digest.",
  "I copy the full digest accurately.",
  "I hash before intentionally editing or deleting the artifact.",
  "I record the source system and observation time.",
  "I understand that matching hashes support identical content, not identical metadata.",
  "I understand that different hashes prove different content, not malicious intent.",
  "I combine the hash with contextual evidence.",
  "I do not execute unknown files simply to identify them.",
  "I avoid publishing real credentials or sensitive secret material.",
  "I preserve enough notes that a teammate can reproduce the comparison.",
];

const reflection = [
  "Why is a cryptographic hash usually stronger evidence of exact content identity than a filename?",
  "What does a different SHA-256 digest prove?",
  "What does a matching SHA-256 digest fail to prove?",
  "Why should the algorithm name always be documented?",
  "How can a renamed file still be shown to contain identical content?",
  "Why is SHA-256 generally preferable to MD5 or SHA-1 for integrity work?",
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

export default function HashingFileIntegrityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/evidence-preservation-documentation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/file-systems-important-paths"
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
                Forensics · Lesson 03
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hashing &amp; File Integrity
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how cryptographic hashes help identify exact file content,
                verify working copies, detect changes, and preserve evidence
                integrity without confusing content identity with user intent.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                A hash is powerful because it describes the bytes of a file, not
                its filename. It is still only one part of a complete forensic
                explanation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Preferred algorithm</span>
                  <span className="font-bold text-white">SHA-256</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main use</span>
                  <span className="font-bold text-white">Integrity</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Strong clue</span>
                  <span className="font-bold text-white">Content identity</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Not proof of</span>
                  <span className="font-bold text-white">Intent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Learning objectives"
            title="Use hashes as precise file-content evidence"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Hash the content, not the name
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Two files can have different names but identical bytes. They can
              also have the same name while containing completely different
              content. A secure hash gives you a content-level comparison.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
              Important limit
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Identity is not intent
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Even a perfect file match does not prove who downloaded it, who
              opened it, why it exists, or whether it is safe. Those questions
              require additional evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Hash fundamentals"
            title="What makes cryptographic hashing useful"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hashConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Algorithms"
            title="Prefer modern hashes for integrity work"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {algorithmCards.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-black text-white">
                    {item.name}
                  </h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold text-cyan-200">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Competition takeaway
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              You may encounter legacy MD5 or SHA-1 values in old datasets or
              tools. For new integrity documentation, use a stronger modern
              algorithm such as SHA-256 when available.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="File identity"
            title="Compare hashes with other evidence fields"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fileIdentity.map((item) => (
              <div
                key={item.property}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.property}
                </h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  {item.strength}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Integrity workflow"
            title="Hash before change, compare after"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows"
              title="PowerShell file hashing"
            />
            <div className="mt-6 grid gap-4">
              {windowsExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux"
              title="SHA-256 file hashing"
            />
            <div className="mt-6 grid gap-4">
              {linuxExamples.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="font-black text-white">{item.label}</h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
{item.command}
                  </pre>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Interpretation"
            title="Know exactly what a hash comparison supports"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {interpretationCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.finding}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.conclusion}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-200">
                    Not supported
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.notSupported}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Collisions"
            title="Understand why stronger algorithms matter"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {collisionConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Hash vs metadata"
            title="Use the right evidence for the right question"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {metadataVsHash.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.question}
                </h3>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                    Best evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.best}
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">
                    Hash role
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.hashRole}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Documentation"
            title="Record enough information to make the digest useful"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {documentationFields.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Sample evidence record
            </p>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
{`Evidence label: ${sampleEvidence.label}
Source system: ${sampleEvidence.system}
Path: ${sampleEvidence.path}
Size: ${sampleEvidence.size}
Algorithm: ${sampleEvidence.algorithm}
Digest: ${sampleEvidence.digest}
Observation time: ${sampleEvidence.observed}
Purpose: ${sampleEvidence.purpose}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Hash set exercise"
            title="Read a small digest table like forensic evidence"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hashSetPractice.map((item) => (
              <div
                key={item.file}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.file}</h3>
                <p className="mt-3 font-mono text-sm font-bold text-cyan-300">
                  {item.hash}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hashSetQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Question {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Integrity baseline"
            title="Use hashes at multiple points in the evidence lifecycle"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {integrityBaseline.map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.stage}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Hashing mistakes that weaken forensic evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pitfalls.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Fictional integrity lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Follow one file through download, rename, copy, and edit
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceScenario.map((item) => (
              <div
                key={`${item.time}-${item.evidence}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.time}
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.evidence}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scenarioQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                  Task {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
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
                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your integrity reasoning
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
                Use hashes to identify exact file content, not to infer user
                motive. Record the algorithm, digest, path, system, and time,
                then combine the result with logs and metadata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Forensics
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
              href="/cyberpatriot/forensics/evidence-preservation-documentation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/file-systems-important-paths"
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
