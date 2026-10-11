import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Apply the full CyberPatriot forensics workflow to one fictional multi-source case.",
  "Identify the strongest evidence source for each question before drawing a conclusion.",
  "Correlate authentication, browser, file, archive, scheduled-task, process, service, network, and security-product evidence.",
  "Separate direct observations from supported inferences and unsupported claims.",
  "Build a concise timeline while preserving uncertainty, timestamp context, and competing explanations.",
  "Practice writing short, defensible forensic answers that explain what happened and what remains unknown.",
];

const caseRules = [
  {
    title: "Use only the provided evidence",
    text:
      "Do not invent missing logs, assume intent, or rely on facts that are not present in the case.",
  },
  {
    title: "Separate observation from inference",
    text:
      "State what each artifact directly proves before combining sources into a broader conclusion.",
  },
  {
    title: "Preserve timestamp meaning",
    text:
      "Treat browser, filesystem, archive, process, event-log, and network times as different evidence types.",
  },
  {
    title: "Corroborate important links",
    text:
      "Strong conclusions should connect at least two independent artifacts when possible.",
  },
  {
    title: "Do not confuse capability with action",
    text:
      "Administrator membership, sudo access, macro capability, and service privilege do not prove those capabilities were used.",
  },
  {
    title: "Record uncertainty",
    text:
      "If the evidence supports multiple explanations, say so explicitly instead of forcing one answer.",
  },
];

const scenarioFacts = [
  {
    label: "Host",
    value:
      "CP-LAB-17",
  },
  {
    label: "Platform",
    value:
      "Windows 11 training VM",
  },
  {
    label: "Primary account",
    value:
      "trainee17",
  },
  {
    label: "Authorized software",
    value:
      "Browser, PowerShell, document viewer, Defender, LabReporter service",
  },
  {
    label: "Required service",
    value:
      "LabReporter must remain enabled",
  },
  {
    label: "Time window",
    value:
      "13:00-14:00 local time",
  },
  {
    label: "Safety boundary",
    value:
      "All hosts, addresses, files, and events are fictional training artifacts",
  },
];

const evidenceSet = [
  {
    id: "E01",
    time: "13:02:11",
    source: "Windows Security",
    detail:
      "Event 4624 records a successful interactive logon for trainee17 with logon type 2.",
    direct:
      "Windows accepted authentication for trainee17 and created an interactive session.",
  },
  {
    id: "E02",
    time: "13:05:44",
    source: "Browser History",
    detail:
      "Browser visits https://training.example/resources/utilities.",
    direct:
      "The browser recorded a visit to that training URL.",
  },
  {
    id: "E03",
    time: "13:06:02",
    source: "Browser Download",
    detail:
      "File utility-pack.zip is downloaded to C:\\Users\\trainee17\\Downloads\\utility-pack.zip.",
    direct:
      "The browser recorded a download to that path.",
  },
  {
    id: "E04",
    time: "13:06:03",
    source: "Filesystem",
    detail:
      "utility-pack.zip appears in Downloads with size 126 KB and SHA-256 HASH-ZIP-17.",
    direct:
      "The local archive existed at that path with that size and hash.",
  },
  {
    id: "E05",
    time: "13:06:05",
    source: "Archive Listing",
    detail:
      "utility-pack.zip contains scripts/helper.ps1, docs/readme.txt, and bin/reporter-helper.exe.",
    direct:
      "Those paths are recorded inside the archive.",
  },
  {
    id: "E06",
    time: "13:06:05",
    source: "Archive Metadata",
    detail:
      "helper.ps1 has an internal modification timestamp of 2025-02-14 08:20.",
    direct:
      "The archive stores that internal modification timestamp.",
  },
  {
    id: "E07",
    time: "13:09:31",
    source: "Filesystem",
    detail:
      "helper.ps1 appears at C:\\Users\\trainee17\\AppData\\Local\\UtilityLab\\helper.ps1.",
    direct:
      "The script existed locally at that path by 13:09:31.",
  },
  {
    id: "E08",
    time: "13:09:31",
    source: "File Hash",
    detail:
      "Extracted helper.ps1 hash matches the hash of helper.ps1 stored in the archive.",
    direct:
      "The extracted script content is identical to the archived script content.",
  },
  {
    id: "E09",
    time: "13:10:07",
    source: "Windows Security",
    detail:
      "Event 4720 records creation of local account report-helper.",
    direct:
      "The report-helper account was created at that time.",
  },
  {
    id: "E10",
    time: "13:10:22",
    source: "Windows Security",
    detail:
      "Event 4732 records report-helper added to local Administrators.",
    direct:
      "The account gained local administrative group membership.",
  },
  {
    id: "E11",
    time: "13:11:18",
    source: "Task Scheduler",
    detail:
      "Task UtilityCheck is registered to run every 15 minutes as report-helper.",
    direct:
      "A scheduled task was created with that schedule and run-as account.",
  },
  {
    id: "E12",
    time: "13:11:18",
    source: "Task Action",
    detail:
      "UtilityCheck action launches powershell.exe with helper.ps1 as an argument.",
    direct:
      "The task is configured to launch PowerShell with that script.",
  },
  {
    id: "E13",
    time: "13:15:00",
    source: "Task Scheduler Operational",
    detail:
      "UtilityCheck trigger fires.",
    direct:
      "The scheduler recorded a trigger event for UtilityCheck.",
  },
  {
    id: "E14",
    time: "13:15:01",
    source: "Process Evidence",
    detail:
      "powershell.exe starts as PID 6204 under report-helper with helper.ps1 in the command line.",
    direct:
      "PowerShell executed under report-helper and referenced helper.ps1.",
  },
  {
    id: "E15",
    time: "13:15:02",
    source: "Process Evidence",
    detail:
      "PowerShell starts reporter-helper.exe as child PID 6210.",
    direct:
      "The child process was launched by the PowerShell process.",
  },
  {
    id: "E16",
    time: "13:15:03",
    source: "Network State",
    detail:
      "PID 6210 establishes TCP connection to fictional 203.0.113.171:443.",
    direct:
      "The child process communicated with that fictional remote endpoint.",
  },
  {
    id: "E17",
    time: "13:16:40",
    source: "Defender",
    detail:
      "Defender scans reporter-helper.exe and records no detection.",
    direct:
      "Defender scanned the file and did not flag it in this fictional record.",
  },
  {
    id: "E18",
    time: "13:19:05",
    source: "Windows System",
    detail:
      "Service LabReporter enters the running state.",
    direct:
      "The required LabReporter service was running at that time.",
  },
  {
    id: "E19",
    time: "13:19:06",
    source: "Service Configuration",
    detail:
      "LabReporter runs from C:\\ProgramData\\LabReporter\\reporter.exe under LocalService.",
    direct:
      "The service uses that executable path and account.",
  },
  {
    id: "E20",
    time: "13:19:07",
    source: "Network State",
    detail:
      "LabReporter process listens on 127.0.0.1:8099.",
    direct:
      "The required service is listening only on loopback at that moment.",
  },
  {
    id: "E21",
    time: "13:22:14",
    source: "Filesystem",
    detail:
      "readme.txt is opened by the document viewer from the extracted UtilityLab directory.",
    direct:
      "The text document was opened by the viewer application.",
  },
  {
    id: "E22",
    time: "13:30:00",
    source: "Task Scheduler Operational",
    detail:
      "UtilityCheck triggers a second time.",
    direct:
      "The scheduler recorded a second trigger.",
  },
  {
    id: "E23",
    time: "13:30:02",
    source: "Process Evidence",
    detail:
      "reporter-helper.exe again appears as a child of powershell.exe.",
    direct:
      "The same parent-child execution chain occurred again.",
  },
  {
    id: "E24",
    time: "13:30:03",
    source: "Network State",
    detail:
      "reporter-helper.exe again connects to fictional 203.0.113.171:443.",
    direct:
      "The process made another connection to the same fictional endpoint.",
  },
  {
    id: "E25",
    time: "13:35:10",
    source: "Team Change Log",
    detail:
      "Team records report-helper account state, group membership, task configuration, file hashes, process chain, and network evidence.",
    direct:
      "The team documented relevant evidence before making changes.",
  },
  {
    id: "E26",
    time: "13:36:00",
    source: "Team Change Log",
    detail:
      "Team disables UtilityCheck after confirming it is not required by the fictional scenario.",
    direct:
      "The scheduled task was disabled as a defensive action.",
  },
  {
    id: "E27",
    time: "13:36:20",
    source: "Team Change Log",
    detail:
      "Team disables report-helper after confirming no required service depends on it.",
    direct:
      "The account was disabled after preservation and requirement review.",
  },
];

const sourceGroups = [
  {
    group: "Authentication & account",
    refs:
      "E01, E09, E10",
    purpose:
      "Establishes session start, account creation, and privilege change.",
  },
  {
    group: "Browser & file arrival",
    refs:
      "E02-E08",
    purpose:
      "Establishes web activity, download, archive contents, extraction, and file identity.",
  },
  {
    group: "Scheduler & process",
    refs:
      "E11-E15, E22-E23",
    purpose:
      "Establishes recurring scheduled execution and parent-child process relationships.",
  },
  {
    group: "Network",
    refs:
      "E16, E20, E24",
    purpose:
      "Separates outbound helper connections from the required local-only service listener.",
  },
  {
    group: "Security product",
    refs:
      "E17",
    purpose:
      "Adds independent scan context but does not prove trustworthiness.",
  },
  {
    group: "Required service",
    refs:
      "E18-E20",
    purpose:
      "Shows that LabReporter is a separate, required component with a different path, account, and network behavior.",
  },
  {
    group: "Team actions",
    refs:
      "E25-E27",
    purpose:
      "Separates original evidence from defensive changes.",
  },
];

const keyQuestions = [
  {
    question:
      "How did helper.ps1 arrive on the system?",
    answer:
      "The strongest evidence is the browser download of utility-pack.zip, the archive listing showing scripts/helper.ps1, the later extracted AppData copy, and matching hashes between archived and extracted content.",
    confidence:
      "High",
  },
  {
    question:
      "Does the 2025 timestamp prove helper.ps1 existed locally in 2025?",
    answer:
      "No. That is an archive-internal timestamp. The local extraction evidence places helper.ps1 on this VM at 13:09:31.",
    confidence:
      "High",
  },
  {
    question:
      "What changed the account privilege state?",
    answer:
      "report-helper was created at 13:10:07 and added to local Administrators at 13:10:22.",
    confidence:
      "High",
  },
  {
    question:
      "What explains recurring execution?",
    answer:
      "UtilityCheck was configured to run every 15 minutes as report-helper and launch PowerShell with helper.ps1. Task triggers and process evidence at 13:15 and 13:30 corroborate actual execution.",
    confidence:
      "High",
  },
  {
    question:
      "What caused the outbound connection?",
    answer:
      "The strongest supported chain is UtilityCheck trigger → powershell.exe → reporter-helper.exe → TCP connection to 203.0.113.171:443.",
    confidence:
      "High",
  },
  {
    question:
      "Is LabReporter the same component as reporter-helper.exe?",
    answer:
      "No evidence supports that. LabReporter runs from ProgramData under LocalService and listens on loopback 8099, while reporter-helper.exe is launched from the UtilityLab chain and makes outbound connections.",
    confidence:
      "High",
  },
  {
    question:
      "Does Defender's no-detection result prove reporter-helper.exe is safe?",
    answer:
      "No. It only proves that the fictional scan record contained no detection at that time.",
    confidence:
      "High",
  },
  {
    question:
      "Did trainee17 personally create report-helper?",
    answer:
      "The case proves the account was created during trainee17's active session, but it does not directly prove who physically initiated the account-creation action.",
    confidence:
      "Moderate",
  },
];

const directInferenceExamples = [
  {
    statement:
      "utility-pack.zip was downloaded to the trainee17 Downloads directory.",
    classification:
      "Direct",
    support:
      "E03-E04",
  },
  {
    statement:
      "helper.ps1 came from utility-pack.zip.",
    classification:
      "Correlated inference",
    support:
      "E05, E07, E08",
  },
  {
    statement:
      "report-helper had administrative capability.",
    classification:
      "Direct",
    support:
      "E10",
  },
  {
    statement:
      "report-helper used administrative privileges during the task.",
    classification:
      "Unsupported",
    support:
      "No event in the case proves privileged action.",
  },
  {
    statement:
      "UtilityCheck caused recurring PowerShell execution.",
    classification:
      "Strong correlated inference",
    support:
      "E11-E14, E22-E23",
  },
  {
    statement:
      "203.0.113.171 is malicious.",
    classification:
      "Unsupported",
    support:
      "The case only records fictional network connections.",
  },
];

const competingExplanations = [
  {
    issue:
      "Who created report-helper?",
    possibilities:
      "An interactive user, an administrative script, or another process operating during the session.",
    bestEvidence:
      "Account-creation event timing plus process or command evidence would be needed for stronger attribution.",
  },
  {
    issue:
      "Why was utility-pack.zip downloaded?",
    possibilities:
      "Training activity, testing, automation, or another purpose.",
    bestEvidence:
      "Scenario context or user/task instructions would be needed to establish intent.",
  },
  {
    issue:
      "Why did reporter-helper.exe connect outbound?",
    possibilities:
      "Expected training behavior, telemetry, update behavior, or unauthorized activity.",
    bestEvidence:
      "Application configuration, scenario requirement, destination context, or application logs would be needed.",
  },
  {
    issue:
      "Was the file trusted because Defender did not flag it?",
    possibilities:
      "No detection can mean benign content, missing signature, limited coverage, or no relevant detection rule.",
    bestEvidence:
      "Do not infer trust from no-detection alone.",
  },
];

const timeline = [
  {
    time: "13:02",
    event:
      "trainee17 interactive logon",
    refs:
      "E01",
    confidence:
      "High",
  },
  {
    time: "13:05-13:06",
    event:
      "Training site visited and utility-pack.zip downloaded",
    refs:
      "E02-E04",
    confidence:
      "High",
  },
  {
    time: "13:06",
    event:
      "Archive contains helper.ps1 and reporter-helper.exe",
    refs:
      "E05-E06",
    confidence:
      "High",
  },
  {
    time: "13:09",
    event:
      "helper.ps1 appears under AppData with matching archived hash",
    refs:
      "E07-E08",
    confidence:
      "High",
  },
  {
    time: "13:10",
    event:
      "report-helper created and added to Administrators",
    refs:
      "E09-E10",
    confidence:
      "High",
  },
  {
    time: "13:11",
    event:
      "UtilityCheck registered to run helper.ps1 every 15 minutes as report-helper",
    refs:
      "E11-E12",
    confidence:
      "High",
  },
  {
    time: "13:15",
    event:
      "Task triggers; PowerShell launches helper.ps1 and reporter-helper.exe; outbound connection follows",
    refs:
      "E13-E16",
    confidence:
      "High",
  },
  {
    time: "13:16",
    event:
      "Defender scans reporter-helper.exe with no detection",
    refs:
      "E17",
    confidence:
      "High",
  },
  {
    time: "13:19",
    event:
      "Required LabReporter service starts and listens only on loopback 8099",
    refs:
      "E18-E20",
    confidence:
      "High",
  },
  {
    time: "13:30",
    event:
      "UtilityCheck triggers again; reporter-helper.exe repeats outbound connection",
    refs:
      "E22-E24",
    confidence:
      "High",
  },
  {
    time: "13:35-13:36",
    event:
      "Team preserves evidence, then disables UtilityCheck and report-helper",
    refs:
      "E25-E27",
    confidence:
      "High",
  },
];

const decisionPoints = [
  {
    title: "Keep LabReporter",
    reason:
      "The scenario says it is required, and the evidence shows it is a separate service with a local-only listener.",
  },
  {
    title: "Review UtilityCheck",
    reason:
      "It is not listed as required and directly explains recurring execution of the extracted script.",
  },
  {
    title: "Review report-helper",
    reason:
      "It is newly created, privileged, used by UtilityCheck, and not required by a scenario dependency.",
  },
  {
    title: "Do not treat no-detection as approval",
    reason:
      "Defender's fictional result is one evidence point, not a trust decision.",
  },
  {
    title: "Preserve before disablement",
    reason:
      "Task, account, file, process, and network evidence should be captured first.",
  },
  {
    title: "Keep conclusions narrow",
    reason:
      "The case supports execution and network activity but not malicious intent or human attribution.",
  },
];

const shortAnswerTasks = [
  {
    prompt:
      "Identify the strongest evidence that utility-pack.zip was downloaded.",
    answer:
      "E03 browser download record plus E04 matching local archive appearance.",
  },
  {
    prompt:
      "Identify the strongest evidence that helper.ps1 came from the archive.",
    answer:
      "E05 archive listing, E07 extracted local path, and E08 matching hash.",
  },
  {
    prompt:
      "Identify the strongest evidence of persistence.",
    answer:
      "E11-E12 task registration and action, corroborated by E13-E14 and E22-E23 execution.",
  },
  {
    prompt:
      "Identify the strongest evidence of outbound communication.",
    answer:
      "E16 and E24, both tied to reporter-helper.exe process activity.",
  },
  {
    prompt:
      "Identify one fact that should not be overclaimed.",
    answer:
      "The no-detection Defender scan does not prove reporter-helper.exe is safe.",
  },
  {
    prompt:
      "Identify one necessary service that should not be disabled.",
    answer:
      "LabReporter, because the scenario explicitly requires it.",
  },
];

const finalCaseQuestions = [
  {
    question:
      "What is the best concise explanation of the main event chain?",
    answer:
      "During trainee17's session, utility-pack.zip was downloaded, helper.ps1 was extracted with matching content, report-helper was created and privileged, UtilityCheck was registered to run helper.ps1 every 15 minutes, the task launched PowerShell and reporter-helper.exe, and that child process made repeated outbound connections.",
  },
  {
    question:
      "Which part of that explanation is inference rather than a single direct artifact?",
    answer:
      "That helper.ps1 came from the downloaded archive and that UtilityCheck caused the process chain are correlated conclusions supported by multiple artifacts.",
  },
  {
    question:
      "What should remain explicitly unknown?",
    answer:
      "Intent, who physically initiated the account creation, whether the remote endpoint was benign or malicious, and why the archive was downloaded.",
  },
  {
    question:
      "What defensive actions are justified by the fictional scenario?",
    answer:
      "Preserve evidence, review and disable UtilityCheck if not required, disable report-helper if no dependency requires it, and leave LabReporter enabled because it is required.",
  },
  {
    question:
      "What should be documented as team-generated evidence?",
    answer:
      "The 13:35-13:36 preservation and disablement actions should be kept separate from the original event sequence.",
  },
  {
    question:
      "What makes this case high confidence overall?",
    answer:
      "The major links are corroborated across independent browser, filesystem, account, scheduler, process, network, service, and change-log evidence.",
  },
];

const mistakes = [
  {
    title: "Calling the remote host malicious",
    text:
      "The case only shows a connection to a fictional endpoint.",
  },
  {
    title: "Treating Defender no-detection as trust",
    text:
      "No detection is not proof of safety.",
  },
  {
    title: "Blaming trainee17 directly",
    text:
      "The session timing supports context, but not physical-person attribution.",
  },
  {
    title: "Disabling LabReporter",
    text:
      "The scenario explicitly requires it and the evidence separates it from reporter-helper.exe.",
  },
  {
    title: "Using the 2025 archive timestamp as local history",
    text:
      "The archive-internal mtime does not prove earlier local existence.",
  },
  {
    title: "Ignoring the second task execution",
    text:
      "Repeated execution strongly supports persistence and recurring behavior.",
  },
  {
    title: "Deleting before hashing",
    text:
      "That would weaken file-identity evidence.",
  },
  {
    title: "Merging team actions into original activity",
    text:
      "Defensive disablement must remain clearly separated in the timeline.",
  },
];

const reviewChecklist = [
  "I started with the forensic question, not the answer I expected.",
  "I used direct artifacts before making inferences.",
  "I connected download, extraction, and hash evidence.",
  "I separated account privilege from proof of privileged action.",
  "I used task history plus process evidence to prove recurring execution.",
  "I mapped network activity to the owning child process.",
  "I separated LabReporter from reporter-helper.exe.",
  "I kept archive-internal time separate from local extraction time.",
  "I preserved uncertainty about human attribution and intent.",
  "I treated Defender no-detection as limited evidence.",
  "I separated team changes from original system events.",
  "I wrote a concise conclusion that stays inside the evidence.",
];

const reflection = [
  "Which artifact in the case would you trust least if viewed alone, and why?",
  "What additional evidence would most improve attribution for the report-helper account creation?",
  "Why does the second UtilityCheck execution increase confidence in the persistence conclusion?",
  "What evidence proves LabReporter and reporter-helper.exe are separate components?",
  "Which statements in the case are direct observations and which are correlated conclusions?",
  "How would you summarize this case in three sentences without overclaiming?",
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

export default function ForensicsPracticeCasePage() {
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
              href="/cyberpatriot/forensics/timeline-reconstruction-correlation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/final-review-checklist"
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
                Forensics · Lesson 17
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Forensics Practice Case
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Work through a complete fictional CyberPatriot-style evidence
                set and practice turning browser, file, account, scheduler,
                process, network, service, and security evidence into one
                defensible explanation.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                This case is intentionally multi-source. The goal is not to find
                one magic artifact. The goal is to choose the right evidence,
                correlate it, and stop exactly where the evidence stops.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Case Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Evidence items</span>
                  <span className="font-bold text-white">27</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Host</span>
                  <span className="font-bold text-white">CP-LAB-17</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main skill</span>
                  <span className="font-bold text-white">Correlation</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Evidence-backed conclusion</span>
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
            title="Apply the complete forensic reasoning workflow"
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
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Case rules
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Treat the evidence like a real competition question
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseRules.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Scenario"
            title="Fictional case background"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {scenarioFacts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Evidence set"
            title="Read every artifact before deciding what happened"
            description="Each card includes the direct observation supported by that artifact. Broader conclusions come later."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceSet.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black text-cyan-300">{item.id}</span>
                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
                    {item.time}
                  </span>
                </div>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  {item.source}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.detail}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-200">
                    Directly supports
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.direct}
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
            label="Evidence map"
            title="Group artifacts by the question they answer"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sourceGroups.map((item) => (
              <div
                key={item.group}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.group}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">{item.refs}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Key case questions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build each answer from the strongest available evidence
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {keyQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  Confidence: {item.confidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Direct vs inferred"
            title="Classify the statement before using it"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {directInferenceExamples.map((item) => (
              <div
                key={item.statement}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="font-bold text-white">{item.statement}</p>
                <p className="mt-3 text-sm font-black text-cyan-300">
                  {item.classification}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Evidence: {item.support}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/15 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Competing explanations
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Identify what the case still cannot prove
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {competingExplanations.map((item) => (
              <div
                key={item.issue}
                className="rounded-2xl border border-yellow-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.issue}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Possible explanations: {item.possibilities}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Needed for stronger conclusion: {item.bestEvidence}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Case timeline"
            title="Normalize the sequence without losing source context"
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
            <div className="grid grid-cols-[0.75fr_2.5fr_0.8fr_0.8fr] bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-slate-400">
              <span>Time</span>
              <span>Event</span>
              <span>Refs</span>
              <span>Confidence</span>
            </div>

            {timeline.map((item) => (
              <div
                key={`${item.time}-${item.event}`}
                className="grid grid-cols-[0.75fr_2.5fr_0.8fr_0.8fr] gap-3 border-t border-slate-800 bg-slate-950/60 px-4 py-4 text-sm"
              >
                <span className="font-bold text-cyan-300">{item.time}</span>
                <span className="text-slate-300">{item.event}</span>
                <span className="text-slate-400">{item.refs}</span>
                <span className="text-slate-400">{item.confidence}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Decision points"
            title="Use scenario requirements before changing the system"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {decisionPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Short-answer drill
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Practice concise evidence-backed answers
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {shortAnswerTasks.map((item, index) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  Drill {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.prompt}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.answer}
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
            label="Final case review"
            title="Write the complete answer without overclaiming"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {finalCaseQuestions.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                  Question {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.answer}
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
            Errors that would weaken this case analysis
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
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
              Case checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving to the final review
            </h2>

            <div className="mt-6 grid gap-3">
              {reviewChecklist.map((item, index) => (
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
              Check your case reasoning
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
                The strongest forensic answers are short, source-driven, and
                explicit about uncertainty. Correlate aggressively, but never
                claim more than the artifacts support.
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
              href="/cyberpatriot/forensics/timeline-reconstruction-correlation"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/forensics/final-review-checklist"
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
