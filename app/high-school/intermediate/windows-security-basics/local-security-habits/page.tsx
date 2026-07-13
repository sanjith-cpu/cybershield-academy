import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/windows-security-basics`;
const previousLesson = `${modulePath}/startup-apps-and-services`;
const nextLesson = `${modulePath}/windows-security-review-lab`;

const objectives = ["Explain how locking, sign-in habits, updates, downloads, browsers, removable media, backups, privacy, and reporting contribute to Windows security.", "Evaluate fictional daily-use decisions using device role, account privilege, data sensitivity, network context, source trust, and organizational policy.", "Distinguish safe convenience from risky shortcuts such as shared accounts, ignored warnings, broad downloads, and unapproved removable media.", "Connect user behavior with Windows accounts, permissions, Defender, firewall, updates, Event Viewer, startup items, services, and backup evidence.", "Create a professional local-security checklist with owners, training messages, validation evidence, monitoring, and review dates."];
const vocabulary = [["Screen lock", "A control that requires the user to authenticate again before resuming an unattended session."], ["Session", "The active period in which a user is signed in and applications, files, and services are available."], ["Trusted source", "An approved publisher, organizational portal, vendor location, or managed software source supported by available evidence."], ["Download warning", "A browser, reputation, Defender, or organizational message indicating that a file, site, or source requires review."], ["Removable media", "Portable storage such as a USB drive or external storage device."], ["Sensitive data", "Information requiring stronger protection because exposure, alteration, or loss could harm people or operations."], ["Backup", "A protected copy of required data or system state used for recovery."], ["Recovery test", "A controlled check confirming that required data or system state can actually be restored."], ["Privacy setting", "A configuration that controls access to data, sensors, identifiers, activity, or application permissions."], ["Phishing report", "An approved report of a suspicious message, link, attachment, prompt, or sign-in request."], ["Secure disposal", "An approved process for removing data or retiring media and devices without exposing protected information."], ["Security habit", "A repeated user behavior that supports or weakens technical controls over time."], ["Least privilege", "Using only the account authority and access needed for the current approved task."], ["Source verification", "Confirming a message, site, file, publisher, or request through a separate approved channel."], ["Protected storage", "An approved location with managed access, backup, retention, and recovery controls."], ["Incident reporting", "Promptly notifying the approved owner or security process about a suspicious or harmful situation."]];
const habitDomains = [{"title": "Locking and unattended devices", "purpose": "Lock the device before stepping away and use approved automatic-lock settings.", "evidence": "Lock policy, inactivity setting, user report, session event, device role, location, and exception record.", "risk": "An unlocked session can expose files, messages, applications, and elevated access.", "teaching": "A ten-second lock habit protects every open application and active session."}, {"title": "Account separation", "purpose": "Use a standard account for daily work and a separate approved administrator identity only when needed.", "evidence": "Account inventory, local groups, last use, role, owner, support ticket, and sign-in history.", "risk": "Daily use of elevated access increases the impact of mistakes, unsafe downloads, and account misuse.", "teaching": "Use ordinary access for ordinary work and elevation only for approved administrative tasks."}, {"title": "Updates and restarts", "purpose": "Allow approved updates, complete required restarts, and report compatibility problems instead of delaying indefinitely.", "evidence": "Update history, restart state, support status, owner, maintenance window, application test, and event records.", "risk": "Delayed maintenance can leave known weaknesses or unsupported software in use.", "teaching": "Installed is not always active; restart and validation may still be required."}, {"title": "Downloads and software", "purpose": "Use approved software sources, verify publisher and purpose, and respect browser or Defender warnings.", "evidence": "Download source, publisher, file path, reputation, protection history, owner approval, and application need.", "risk": "Unapproved or outdated software may introduce unsafe files, unwanted applications, or unsupported components.", "teaching": "Business need does not prove that a specific installer is trustworthy."}, {"title": "Browsers and extensions", "purpose": "Keep the browser supported, limit extensions, review permissions, and avoid unsafe sign-in prompts.", "evidence": "Browser version, extension inventory, permissions, warning events, policy, owner, and usage report.", "risk": "Extensions and stored sessions may expose browsing data, credentials, downloads, and organizational information.", "teaching": "Extensions should have a clear owner, purpose, publisher, and permission scope."}, {"title": "Removable media", "purpose": "Use only approved media, follow scanning and data-handling rules, and avoid unknown devices.", "evidence": "Media owner, approval, device record, file classification, scan result, transfer purpose, and disposal record.", "risk": "Unknown or unmanaged media can introduce unsafe files or remove sensitive data from controlled storage.", "teaching": "Unknown media is both a device-security and data-governance concern."}, {"title": "Backups and recovery", "purpose": "Save required work to approved protected locations and confirm that recovery is tested.", "evidence": "Backup scope, last success, retention, recovery owner, restore test, failure events, and user workflow.", "risk": "Local-only or unprotected data may be lost through device failure, accidental deletion, or unauthorized change.", "teaching": "A backup report is useful, but a recovery test proves the process can restore work."}, {"title": "Reporting and escalation", "purpose": "Report suspicious prompts, files, lost devices, unusual behavior, and possible exposure quickly.", "evidence": "Report time, user statement, screenshot or alert record, device status, owner, support ticket, and response timeline.", "risk": "Delayed reporting can increase impact and reduce the evidence available to defenders.", "teaching": "Users do not need to know the exact cause before reporting a suspicious situation."}];
const riskyShortcuts = [{"title": "Sharing one account", "purpose": "It seems faster for a classroom, club, support team, or shared workstation.", "evidence": "Named accounts, shared-device design, role ownership, sign-in history, and offboarding records.", "risk": "Accountability, access review, sign-in protection, personalization, and offboarding become weaker.", "teaching": "Use named identities or an approved managed shared-device design."}, {"title": "Ignoring a restart", "purpose": "The user wants to avoid interrupting work or reopening applications.", "evidence": "Update state, pending restart, maintenance window, application test, and owner communication.", "risk": "Installed changes may not become active and service or application health remains unvalidated.", "teaching": "Save work, restart in the approved window, and validate the new running state."}, {"title": "Bypassing a browser warning", "purpose": "The site or download appears necessary and the warning feels inconvenient.", "evidence": "URL, warning, source, publisher, message origin, owner, and separate verification.", "risk": "The user may enter credentials, open unsafe content, or install unapproved software.", "teaching": "Stop, preserve the warning, and use the known portal or approved source."}, {"title": "Using a personal USB drive", "purpose": "It makes file transfer fast and avoids waiting for approved storage.", "evidence": "Media approval, owner, transfer purpose, file classification, scan result, and disposal record.", "risk": "Sensitive data may leave managed storage and unknown files may enter the Windows environment.", "teaching": "Use approved protected storage or approved media with documented handling."}, {"title": "Saving only to the local Desktop", "purpose": "The location is easy to find and feels immediate.", "evidence": "Backup scope, synchronized folders, retention, recovery test, and owner guidance.", "risk": "Data may not be included in approved backup, retention, sharing, or recovery processes.", "teaching": "Use the approved synchronized or backed-up location."}, {"title": "Turning off protection for compatibility", "purpose": "An application, installer, or script appears blocked.", "evidence": "Defender alert, publisher, source, application owner, exclusion, test, and approved exception.", "risk": "The device loses protection and the real compatibility or trust problem remains unresolved.", "teaching": "Solve the source or compatibility problem with a narrow approved response."}];
const contextFactors = [{"title": "Device role", "detail": "A personal learning device, shared lab workstation, staff records device, travel laptop, kiosk, and administrator workstation need different habits."}, {"title": "Account privilege", "detail": "Daily actions under administrator privilege create greater impact than the same actions under a standard account."}, {"title": "Data sensitivity", "detail": "Student records, personal information, internal documents, credentials, and public materials require different handling."}, {"title": "Network context", "detail": "Public, home, school, segmented, and restricted networks have different trust and sharing expectations."}, {"title": "Physical environment", "detail": "Classrooms, libraries, travel areas, offices, events, and shared spaces change risks from observation, theft, and unattended sessions."}, {"title": "Source trust", "detail": "An approved portal, known publisher, organizational message, unofficial mirror, unknown drive, and shortened link provide different evidence."}, {"title": "Time pressure", "detail": "Urgency can encourage unsafe shortcuts, so reporting and approval paths must remain usable under pressure."}, {"title": "Recovery readiness", "detail": "Backup, account recovery, device tracking, encryption recovery, and owner support affect the safe response to loss or failure."}];
const evidenceMatrix = [{"title": "Account and lock evidence", "supports": "User, account type, privilege, lock state, inactivity setting, sign-in time, and session context.", "limit": "Does not prove the physical person behind every action or the complete activity during the session."}, {"title": "Download and browser evidence", "supports": "Source, publisher, path, browser warning, reputation result, extension, and user decision.", "limit": "Does not automatically prove intent, complete trust, or final file behavior."}, {"title": "Defender and protection history", "supports": "Detection, scan, action, quarantine, exclusion, protection state, and related process context.", "limit": "Does not prove complete origin, impact, or that every unsafe condition was found."}, {"title": "Removable-media record", "supports": "Media identity, owner, approval, connection time, scan result, transfer purpose, and file classification.", "limit": "Does not prove every transferred file or all later use without additional logging."}, {"title": "Backup and recovery evidence", "supports": "Backup scope, last success, retention, owner, protected destination, and restore test.", "limit": "Does not prove every user file is included or every recovery scenario will succeed."}, {"title": "Event Viewer and system records", "supports": "Sign-in, lock, service, application, device, update, and protection timeline evidence.", "limit": "Logs may be incomplete, delayed, filtered, overwritten, or missing human context."}, {"title": "Policy and training record", "supports": "Expected behavior, approved sources, reporting path, handling rules, owner, and training completion.", "limit": "Does not prove the user followed the policy in a specific situation."}, {"title": "User and support report", "supports": "Observed prompt, action, timing, device state, business need, and initial impact.", "limit": "Human reports may be incomplete, delayed, or influenced by assumptions."}];
const workflow = [{"step": "1", "title": "Identify the situation", "detail": "Record the fictional device, user, account type, location, network, data, application, and time pressure."}, {"step": "2", "title": "Pause risky action", "detail": "Stop before entering credentials, bypassing warnings, connecting unknown media, or changing protection."}, {"step": "3", "title": "Preserve evidence", "detail": "Record the warning, source, file, prompt, device state, account context, time, and user report."}, {"step": "4", "title": "Use the approved path", "detail": "Contact the named owner, support channel, security team, teacher, administrator, or application owner."}, {"step": "5", "title": "Apply the narrow response", "detail": "Use the least disruptive approved action that protects data, identity, device, and required work."}, {"step": "6", "title": "Validate and learn", "detail": "Confirm protection, access, recovery, application function, reporting, and the updated security habit."}];
const reportTriggers = [{"title": "Unexpected sign-in prompt", "purpose": "Do not enter credentials; preserve the prompt and verify through an approved channel.", "evidence": "User, device, application, source, time, network, screenshot or message text, and any action already taken.", "risk": "Credential entry could expose the account and every connected service.", "teaching": "Use the known portal directly rather than trusting the link."}, {"title": "Defender or browser warning", "purpose": "Stop the download or launch, keep the item isolated, and preserve the warning.", "evidence": "Detection or warning, file path, source, publisher, user, process, time, and business need.", "risk": "Bypassing the warning may weaken endpoint and browser protection.", "teaching": "Required software should come from an approved source and review process."}, {"title": "Unknown removable media", "purpose": "Do not connect it to a managed Windows device; follow the approved lost-media or review process.", "evidence": "Where it was found, physical description, owner if known, time, and whether any device contact occurred.", "risk": "Unknown media may contain unsafe files or protected information.", "teaching": "Do not investigate unknown media on an ordinary workstation."}, {"title": "Lost or stolen device", "purpose": "Report immediately through the emergency device-loss path and avoid exposing recovery or account details publicly.", "evidence": "Device owner, last known time and general location, lock state, encryption status if known, and sensitive-data context.", "risk": "Delay may increase physical, identity, and data exposure.", "teaching": "Fast reporting enables account, device, and data-protection steps."}, {"title": "Unexpected software or startup behavior", "purpose": "Do not disable random components; record the name, path, message, timing, and impact.", "evidence": "Application or service, user, device, owner, recent changes, warning, event time, and observed behavior.", "risk": "Unplanned changes may break required security, backup, or application functions.", "teaching": "Collect context before deciding whether the behavior is expected or unsafe."}, {"title": "Possible data exposure", "purpose": "Stop further sharing or transfer, preserve evidence, and notify the data owner or security process.", "evidence": "Data type, approved audience, actual audience, time, system, action taken, and remaining access.", "risk": "Continued access may expand the number of people or systems affected.", "teaching": "Users should report quickly even when the exact exposure is uncertain."}];
const mistakes = ["Leaving a signed-in Windows session unlocked in a shared or public space.", "Using an administrator account for everyday browsing, email, and downloads.", "Sharing passwords, PINs, recovery codes, or named accounts with classmates or coworkers.", "Ignoring browser, reputation, Defender, or organizational warnings because the task feels urgent.", "Downloading software from an unofficial mirror when an approved source exists.", "Connecting unknown or personal removable media to a managed Windows device.", "Saving important work only to a local folder that is not included in approved backup.", "Turning off protection, firewall, or updates to solve a compatibility problem.", "Posting screenshots that reveal real usernames, device names, paths, alerts, or internal settings.", "Waiting to report a lost device, suspicious prompt, unsafe file, or possible exposure.", "Assuming a familiar logo or display name proves that a message, site, or installer is trustworthy.", "Treating user training as a replacement for technical controls or treating technical controls as a replacement for training."];
const quizQuestions = [{"question": "Why should a Windows device be locked before stepping away?", "choices": ["To prevent unauthorized use of the active session, files, and applications.", "To install every update.", "To disable networking.", "To remove the user profile."], "answer": 0, "explanation": "A locked session reduces physical access risk while preserving the user's work."}, {"question": "Why is a standard account better for daily work than an administrator account?", "choices": ["It reduces the impact of mistakes, unsafe downloads, and unauthorized changes.", "It removes the need for passwords.", "It prevents every security incident.", "It disables all applications."], "answer": 0, "explanation": "Daily least privilege limits what routine activity can change."}, {"question": "What should a user do when a browser shows an unexpected sign-in warning?", "choices": ["Stop, preserve the warning, and verify through an approved channel before entering credentials.", "Enter credentials quickly.", "Disable the browser protection.", "Share the password with support."], "answer": 0, "explanation": "Pausing and verifying protects identity and preserves evidence."}, {"question": "Why is an unknown USB drive risky?", "choices": ["It may contain unsafe files or create uncontrolled data transfer.", "All removable media is automatically encrypted.", "USB drives cannot store files.", "Connecting it improves Defender."], "answer": 0, "explanation": "Unknown media can affect both device safety and data governance."}, {"question": "What does a successful backup report prove?", "choices": ["The recorded backup job succeeded for the listed scope under the shown conditions.", "Every file can definitely be restored.", "No recovery test is needed.", "The device cannot fail."], "answer": 0, "explanation": "Backup success is useful evidence, but scope and recovery still require validation."}, {"question": "A required installer is blocked by Defender. What is the strongest response?", "choices": ["Keep it isolated, verify the approved source, publisher, version, owner, and business need, then use the authorized review process.", "Disable Defender permanently.", "Restore it because the application is required.", "Download another copy from an unofficial mirror."], "answer": 0, "explanation": "Business need does not prove that the specific file is safe."}, {"question": "Why should suspicious activity be reported quickly?", "choices": ["Fast reporting can reduce impact and preserve more useful evidence.", "Reporting automatically proves compromise.", "Reporting removes the need for technical review.", "Reporting should wait until the user knows the exact cause."], "answer": 0, "explanation": "Early reporting helps defenders investigate and respond before evidence or control is lost."}];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Previous Lesson
      </Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
        Back to Module
      </Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
        Next Lesson
      </Link>
    </div>
  );
}

function FourPartGuide({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Array<{
    title: string;
    purpose: string;
    evidence: string;
    risk: string;
    teaching: string;
  }>;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-black text-cyan-100">{item.title}</h3>
            <div className="mt-4 rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Expected action</p>
              <p className="mt-2 text-sm leading-6 text-blue-50">{item.purpose}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Evidence</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.evidence}</p>
            </div>
            <div className="mt-3 rounded-xl border border-red-400/30 bg-red-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-200">Risk</p>
              <p className="mt-2 text-sm leading-6 text-red-50">{item.risk}</p>
            </div>
            <div className="mt-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Teaching message</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.teaching}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContextGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Decision Context</p>
      <h2 className="mt-2 text-2xl font-bold text-white">The Same Action Can Carry Different Risk in Different Contexts</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {contextFactors.map((item) => (
          <div key={item.title} className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5">
            <h3 className="font-black text-cyan-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Evidence Analysis</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What Local-Security Evidence Can and Cannot Prove</h2>
      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div key={item.title} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Evidence source</p>
              <p className="mt-2 font-black text-cyan-100">{item.title}</p>
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Can support</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">{item.supports}</p>
            </div>
            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-200">Limitation</p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">{item.limit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Defensive Workflow</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Respond to a Risky Local-Security Situation in Six Steps</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div key={item.step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">{item.step}</div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LocalSecurityHabitsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I3</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 7 of 8</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I3.7 Local Security Habits</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Connect everyday Windows choices—locking, accounts, updates, downloads, browsers, removable media, backups, privacy, and reporting—to the technical controls that protect a device.
          </p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I3: Windows Security Basics"
          lessonTitle="Local Security Habits"
          lessonNumber={7}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand Windows accounts, permissions, updates, Defender, Event Viewer, startup apps, services, and controlled change.",
            "I understand that user behavior and technical controls must support each other.",
            "I will preserve warning, source, file, account, device, media, backup, and reporting evidence before making conclusions.",
            "I will use only fictional users, devices, alerts, files, messages, drives, settings, and organizations.",
            "I will not access, connect, upload, install, disable, share, or alter anything on a real device without explicit authorization.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Strong Security Habits Keep Technical Controls Effective">
          <p className="leading-8">
            Windows can use accounts, permissions, firewall profiles, Defender, encryption, updates, event logs, backups, and services. Those controls still depend on users locking devices, choosing approved sources, protecting credentials, reporting warnings, and handling data correctly.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Weak response</p>
              <p className="mt-2 leading-7">“The device has security software, so user behavior does not matter.”</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Strong response</p>
              <p className="mt-2 leading-7">“Use technical controls and repeatable habits together, then report unusual situations before convenience becomes exposure.”</p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Daily Choices Shape Identity, Data, Device, and Recovery Risk">
          <p className="leading-8">
            A single unlocked session, unverified download, shared account, ignored restart, unknown drive, or delayed report can bypass or weaken several technical protections. Repeatable secure habits reduce exposure before an incident begins.
          </p>
        </SectionCard>

        <FourPartGuide eyebrow="Habit Domains" title="Daily Windows Security Is a Connected System" items={habitDomains} />
        <FourPartGuide eyebrow="Risky Shortcuts" title="Convenience Should Not Remove Accountability or Protection" items={riskyShortcuts} />

        <SectionCard eyebrow="Core Concept" title="User Action, Technical Control, Evidence, and Recovery Belong Together">
          <p className="leading-8">
            A strong habit is not just advice. It should connect an expected user action with a Windows control, evidence that the control worked, an owner who can help, and a recovery path when something goes wrong.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              ["Action", "What should the user do or avoid?"],
              ["Control", "Which Windows or organizational protection supports it?"],
              ["Evidence", "How can defenders confirm the situation and result?"],
              ["Recovery", "Who owns the next step if protection or work is affected?"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5">
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ContextGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Local Windows Security Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </section>

        <EvidenceGuide />
        <WorkflowGuide />
        <FourPartGuide eyebrow="Reporting Triggers" title="Know When to Stop and Escalate" items={reportTriggers} />

        <FakeDashboardCard
          title="Fake Windows Security Habits Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services Windows fleet."
          metrics={[
            {
              label: "Unlocked-session findings",
              value: "7",
              note: "Five occurred on shared workstations and two occurred on staff devices in open office areas.",
            },
            {
              label: "Unapproved download attempts",
              value: "11",
              note: "Seven were stopped by browser or reputation warnings, three were quarantined, and one was reported before download.",
            },
            {
              label: "Backup-location gaps",
              value: "6",
              note: "Six users stored active work only in local profile folders not included in the approved recovery workflow.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unapproved USB Transfer and Local-Only Data Create Exposure and Recovery Risk"
          severity="High"
          time="01:27 PM"
          source="Fake Windows User Security Monitor"
          details="A fictional user copied internal project files from a local Desktop folder to a personal USB drive because the approved team share was temporarily unavailable. The device was unlocked during the transfer, the USB drive has no approval record, and the local folder is not included in the approved backup."
          recommendation="Stop further transfer, preserve user, device, file, media, lock, backup, and network evidence, notify the data owner, move required work to approved protected storage, review the media through the authorized process, and improve the outage workflow."
        />

        <FakeLogPanel
          title="Fake Local-Security Incident Timeline"
          logs={[
            "12:48:00 DEVICE name='training-win-41' role='project-workstation' owner='design-team'",
            "12:52:17 NETWORK approved_share='unavailable' outage_ticket='open'",
            "12:58:03 USER action='save_to_desktop' files='internal_project_documents'",
            "13:04:22 BACKUP path='C:\\Users\\sample-user\\Desktop' included='false'",
            "13:08:49 MEDIA type='personal_usb' approval='none'",
            "13:11:06 SESSION device_lock='false' location='shared_workspace'",
            "13:12:33 TRANSFER source='Desktop' destination='personal_usb' classification='internal'",
            "13:15:48 USER report_reason='needed_to_continue_work'",
            "13:18:29 OWNER approved_transfer='false' approved_alternative='temporary_protected_share'",
            "13:22:40 RESPONSE transfer='stopped' media='isolated_for_review'",
            "13:27:11 CORRELATION finding='unapproved_media_and_local_only_storage_during_outage' confidence='high'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Local-Security Response Is Best Supported?"
          evidence={[
            "The fictional team share was temporarily unavailable.",
            "An approved temporary protected share existed but the user did not know about it.",
            "Internal project files were saved only to the local Desktop.",
            "The local Desktop path was not included in approved backup.",
            "A personal USB drive had no approval record.",
            "The device remained unlocked in a shared workspace.",
            "The data owner did not approve the transfer.",
            "The user reported that the goal was to continue required work.",
          ]}
          question="What is the strongest next action?"
          options={[
            "Stop further transfer, preserve evidence, notify the data owner, use the approved temporary share, review the USB through the authorized process, confirm backup, and improve outage training.",
            "Delete every project file immediately.",
            "Allow personal USB use whenever a network share is unavailable.",
            "Blame the user without correcting the missing outage guidance.",
          ]}
          bestAnswer={0}
          explanation="The response protects data, preserves evidence, restores approved work, and addresses both the unsafe action and the missing operational guidance."
        />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Local Windows Security">
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build a Fictional Windows Workstation Security Guide">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Fictional Environment</p>
              <h3 className="mt-3 text-xl font-black text-white">Meadowbrook Daily Windows Security Review</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review sixteen fictional user scenarios involving shared workstations, travel laptops, downloads, browser warnings, administrator use, removable media, backups, lost devices, privacy settings, and reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">Required Analysis</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Identify device role, account privilege, data, location, network, source, and time pressure.</li>
                <li>Classify the user action as safe, risky, or review-required.</li>
                <li>Connect the action to accounts, permissions, Defender, firewall, updates, logs, startup, services, or backups.</li>
                <li>Record confirmed facts, likely explanation, gaps, and unsupported assumptions.</li>
                <li>Write the immediate safe action and reporting path.</li>
                <li>Assign the technical control, evidence source, owner, and recovery step.</li>
                <li>Create a final user-facing checklist with clear explanations.</li>
              </ol>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional scenarios. Do not connect unknown media, open suspicious files, enter credentials into prompts, change security settings, or expose real account, device, or data details.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Browser Prompts for a School Password on an Unfamiliar Page"
          scenario="A fictional student follows a shortened link from a message and sees a page using the school logo. The address differs from the approved sign-in portal, and the browser displays a security warning."
          choices={[
            {
              label: "Choice A",
              response: "Do not enter credentials, preserve the message and warning, close the page, use the known portal directly, and report the link through the approved phishing process.",
              outcome: "Best defensive choice. Identity is protected and useful evidence is preserved.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Enter the password because the page uses the school logo.",
              outcome: "Unsafe. Familiar branding does not prove source trust.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Ignore the warning and download the site's security certificate.",
              outcome: "Unsafe and unnecessary.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Teacher Needs a Blocked Application Before Class"
          scenario="A fictional teacher needs an approved classroom application, but the available installer is blocked and came from an unofficial mirror. Class begins in 20 minutes."
          choices={[
            {
              label: "Choice A",
              response: "Keep the installer isolated, contact the approved software or support channel, use a safe temporary lesson alternative, and obtain the current package from the approved source.",
              outcome: "Best defensive choice. Time pressure does not justify weakening protection.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Disable Defender and install the mirror copy.",
              outcome: "Unsafe. Protection and source trust are both weakened.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Use a shared administrator password to force installation.",
              outcome: "Unsafe. Shared elevation weakens accountability and least privilege.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Local Windows Security Habits Checklist"
          items={[
            "I lock the fictional Windows device before leaving it unattended.",
            "I use a standard account for daily work and separate approved elevation when needed.",
            "I complete approved updates and restarts and report compatibility issues.",
            "I use approved software sources and respect browser, reputation, and Defender warnings.",
            "I review browser extensions, permissions, sessions, and support status.",
            "I use only approved removable media and protected transfer methods.",
            "I save required work to approved backed-up or synchronized locations.",
            "I protect sensitive data, privacy settings, recovery information, and device details.",
            "I report suspicious prompts, files, lost devices, unusual behavior, and possible exposure quickly.",
            "I never publish real usernames, device names, paths, alerts, passwords, recovery codes, or internal settings.",
          ]}
        />

        <MiniQuiz title="I3.7 Mini Quiz: Local Security Habits" questions={quizQuestions} />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Windows Workstation Security Guide covering sixteen daily-use scenarios. For each scenario, include device role, account privilege, data sensitivity, location, network, source trust, risky action, technical control, evidence, immediate safe response, owner, reporting path, recovery step, validation, and teaching message."
          tips={[
            "Use only fictional users, devices, accounts, files, messages, drives, alerts, and organizations.",
            "Include locking, standard-user use, updates, browser warnings, downloads, removable media, backups, lost devices, privacy, and reporting.",
            "Show how at least six user actions connect to Windows technical controls.",
            "Do not include real credentials, device names, school portals, internal policies, screenshots, or personal data.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Local Windows security depends on repeatable user habits and technical controls working together.",
            "Locking, standard-account use, updates, trusted downloads, browser safety, approved media, backups, and reporting reduce daily risk.",
            "Time pressure and convenience often create the most dangerous shortcuts.",
            "Warnings should be preserved and verified rather than bypassed.",
            "Backup success and protection status still require scope and recovery validation.",
            "Strong reporting protects identity, data, devices, and evidence while improving future guidance.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Continue Module I3</h2>
          <div className="mt-5"><Navigation /></div>
        </section>
      </div>

      <Footer />
    </main>
  );
}