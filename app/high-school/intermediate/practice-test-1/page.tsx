import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const intermediatePath = "/high-school/intermediate";
const previousPage = `${intermediatePath}/intermediate-capstone-and-portfolio/module-test`;
const nextPage = `${intermediatePath}/practice-test-2`;

const testQuestions = [
  {
    "question": "A fictional analyst sees traffic from a user workstation to a server on a known service port. What should the analyst determine first?",
    "choices": [
      "Whether the source, destination, service, timing, user role, and business purpose match the expected network baseline.",
      "Whether the port number is commonly associated with attacks.",
      "Whether the workstation should be disconnected immediately.",
      "Whether the server is located in the same building."
    ],
    "answer": 0,
    "explanation": "A port alone does not establish risk. Defensive analysis begins with context, expected behavior, and evidence."
  },
  {
    "question": "Which fictional network design best limits unnecessary movement between student devices and administrative systems?",
    "choices": [
      "Place every device in one flat network.",
      "Use separate network segments with approved rules between them.",
      "Allow all traffic and review logs later.",
      "Give every user administrator permissions."
    ],
    "answer": 1,
    "explanation": "Segmentation reduces unnecessary access paths and supports controlled communication between trust zones."
  },
  {
    "question": "A fictional DNS record points a business name to an unexpected address. What is the strongest next step?",
    "choices": [
      "Assume the domain was taken over.",
      "Disable DNS for the entire organization.",
      "Compare approved DNS records, change history, owner confirmation, and relevant resolution evidence.",
      "Publish the unexpected address publicly."
    ],
    "answer": 2,
    "explanation": "The difference requires validation against authoritative configuration, ownership, and change evidence."
  },
  {
    "question": "A fictional Linux process has an unfamiliar name. Which conclusion is strongest?",
    "choices": [
      "The system is compromised.",
      "The process is safe because it is running.",
      "The process should be deleted immediately.",
      "The process requires comparison with package, service, user, path, parent-process, timing, and baseline evidence."
    ],
    "answer": 3,
    "explanation": "An unfamiliar name is an observation, not proof of malicious activity."
  },
  {
    "question": "Which fictional Linux permission review best supports least privilege?",
    "choices": [
      "Identify the owner, group, effective permissions, business need, inherited access, and required final state.",
      "Remove every permission from every file.",
      "Give all analysts root access.",
      "Review only the file name."
    ],
    "answer": 0,
    "explanation": "Least-privilege review must consider effective access, purpose, ownership, and validation."
  },
  {
    "question": "A fictional Linux service restarts after an approved update. What should the analyst do?",
    "choices": [
      "Treat the restart as confirmed persistence.",
      "Compare the restart timing, change record, service state, package evidence, logs, and post-change validation.",
      "Ignore every restart during maintenance.",
      "Disable the server."
    ],
    "answer": 1,
    "explanation": "Approved maintenance provides context, but resulting behavior still requires validation."
  },
  {
    "question": "A fictional Windows scheduled task runs under a service account during the approved patch window. What is the best conclusion?",
    "choices": [
      "It is automatically malicious because it uses a service account.",
      "It is automatically safe because it occurs during maintenance.",
      "Compare the task name, account, path, timing, owner, baseline, and conflicting evidence before concluding.",
      "Merge it with every alert from the same shift."
    ],
    "answer": 2,
    "explanation": "Baseline and context determine whether the task is expected."
  },
  {
    "question": "Which fictional Windows account finding requires the most direct owner review?",
    "choices": [
      "A disabled account with no group membership.",
      "A standard account used during normal hours.",
      "A documented service account with approved permissions.",
      "An active privileged account with no current owner or business need."
    ],
    "answer": 3,
    "explanation": "Unowned privileged capability creates a significant governance and access-control concern."
  },
  {
    "question": "What is the strongest fictional evidence that a Windows security setting was successfully corrected?",
    "choices": [
      "The ticket is marked complete.",
      "The intended effective setting is confirmed, service function is tested, and the owner signs off.",
      "The alert stops appearing.",
      "The change command was entered."
    ],
    "answer": 1,
    "explanation": "Completion and silence do not prove the actual defensive state."
  },
  {
    "question": "A fictional log source stops delivering events for thirty minutes. What does this prove?",
    "choices": [
      "An attacker deleted the logs.",
      "No activity occurred during the gap.",
      "Monitoring assurance is reduced and source recovery or compensating evidence is needed.",
      "The entire incident is confirmed."
    ],
    "answer": 2,
    "explanation": "A source gap establishes reduced visibility, not harmful activity or harmlessness."
  },
  {
    "question": "Why should fictional event time and collection time remain separate?",
    "choices": [
      "Delayed collection can otherwise create a false sequence.",
      "Collection time proves the user's intent.",
      "They are always identical.",
      "Only cloud logs use both timestamps."
    ],
    "answer": 0,
    "explanation": "Different timestamps represent different stages in evidence generation and delivery."
  },
  {
    "question": "Which fictional finding is written most professionally?",
    "choices": [
      "The High alert proves a breach.",
      "The user was definitely malicious.",
      "Nothing happened because the service remained online.",
      "The supplied records support an unauthorized page view; modification and wider disclosure remain unconfirmed."
    ],
    "answer": 3,
    "explanation": "The statement separates confirmed activity from unsupported impact."
  },
  {
    "question": "What is the strongest purpose of a fictional defensive tool comparison?",
    "choices": [
      "To identify which tool has the most features.",
      "To explain what each source can observe, what it cannot prove, how healthy it is, and how it supports decisions.",
      "To choose one tool and ignore all others.",
      "To copy vendor claims into a report."
    ],
    "answer": 1,
    "explanation": "Defensive tool value depends on coverage, limits, source health, context, and decision usefulness."
  },
  {
    "question": "A fictional endpoint alert and network alert occur near the same time. When should they become one case?",
    "choices": [
      "Whenever both severities are High.",
      "Whenever the dashboard groups them.",
      "When shared identity, system, session, evidence, action, or impact links support the relationship.",
      "Whenever they occur on the same day."
    ],
    "answer": 2,
    "explanation": "Temporal proximity supports coordination but does not prove one cause."
  },
  {
    "question": "Which fictional evidence best validates that a detection improvement worked?",
    "choices": [
      "The analyst likes the new rule.",
      "The rule was saved.",
      "The documentation was updated.",
      "Approved test evidence shows expected detection, acceptable noise, healthy sources, correct routing, and owner review."
    ],
    "answer": 3,
    "explanation": "Validation requires measurable behavior and source health, not merely implementation."
  },
  {
    "question": "A fictional supplier account was approved six months ago but the project ended. What matters most now?",
    "choices": [
      "Current business need, effective access, owner confirmation, approval status, expiration, and required final state.",
      "The fact that the account was used recently.",
      "The original approval alone.",
      "The supplier's job title."
    ],
    "answer": 0,
    "explanation": "Current need and effective state determine whether access should remain."
  },
  {
    "question": "Which fictional IAM review most accurately measures access?",
    "choices": [
      "Review only the visible role name.",
      "Review direct, inherited, nested, conditional, exception-based, service-account, and supplier access paths.",
      "Review only recent sign-ins.",
      "Ask the user whether access feels necessary."
    ],
    "answer": 1,
    "explanation": "Effective access may come from several paths beyond a visible role."
  },
  {
    "question": "What is the strongest validation after removing fictional privileged access?",
    "choices": [
      "The removal ticket is closed.",
      "The account owner says it is done.",
      "Effective permissions, active sessions, related groups, service impact, and owner signoff are checked.",
      "The alert severity decreases."
    ],
    "answer": 2,
    "explanation": "The final effective state and operational impact must be verified."
  },
  {
    "question": "A fictional email fails sender checks and uses an unrelated sign-in destination. What is the strongest conclusion?",
    "choices": [
      "The message is high-confidence suspicious or malicious, but user impact still requires separate evidence.",
      "Every recipient account is compromised.",
      "The sender is definitely a known attacker.",
      "The message is safe if it contains no attachment."
    ],
    "answer": 0,
    "explanation": "Message disposition and user-impact confidence are separate judgments."
  },
  {
    "question": "One fictional user clicked a phishing link but reports entering no information. What is confirmed?",
    "choices": [
      "Credential disclosure.",
      "One click requiring targeted identity review and user guidance.",
      "Account takeover.",
      "Organization-wide compromise."
    ],
    "answer": 1,
    "explanation": "The click is confirmed; credential entry and compromise are not."
  },
  {
    "question": "What is the safest fictional phishing-lab practice?",
    "choices": [
      "Open a real suspicious attachment in a personal account.",
      "Follow the real link without entering credentials.",
      "Use fully invented messages and supplied evidence without interacting with real suspicious content.",
      "Forward the message to classmates for testing."
    ],
    "answer": 2,
    "explanation": "Safe learning should use fictional or controlled evidence and avoid real suspicious content."
  },
  {
    "question": "A fictional support role can load a manager-only web page. What is confirmed?",
    "choices": [
      "The entire application is compromised.",
      "All manager data was changed.",
      "The user stole information.",
      "An authorization gap and unauthorized page view."
    ],
    "answer": 3,
    "explanation": "The evidence supports a control weakness and page view, not broader impact."
  },
  {
    "question": "Which fictional validation best confirms a corrected web authorization rule?",
    "choices": [
      "An approved role succeeds, an unapproved role is denied, service health remains stable, and the owner reviews the result.",
      "The developer says the code was changed.",
      "The alert disappears.",
      "The page title changes."
    ],
    "answer": 0,
    "explanation": "Both allowed and denied behavior should be tested with service impact and ownership."
  },
  {
    "question": "What is the strongest fictional secure-coding recommendation for repeated authorization mistakes?",
    "choices": [
      "Add more warning messages.",
      "Centralize authorization checks, define expected role behavior, add approved and denied tests, and monitor failures.",
      "Hide the route from navigation.",
      "Rename the page."
    ],
    "answer": 1,
    "explanation": "A durable recommendation improves design, testability, and monitoring."
  },
  {
    "question": "Which fictional vulnerability should receive the highest priority?",
    "choices": [
      "The one with the longest description.",
      "The one with the newest scanner signature.",
      "The one with significant asset value, real exposure, weak controls, credible impact, and a feasible treatment need.",
      "Every finding should receive equal priority."
    ],
    "answer": 2,
    "explanation": "Priority combines technical and business context."
  },
  {
    "question": "What is the strongest response when a fictional scanner reports a severe issue but asset ownership is unknown?",
    "choices": [
      "Declare a breach.",
      "Delete the asset.",
      "Ignore the result.",
      "Validate the finding, identify the asset and owner, determine exposure and business context, then prioritize."
    ],
    "answer": 3,
    "explanation": "Scanner output is one input and must be validated in asset context."
  },
  {
    "question": "What should a fictional vulnerability exception include?",
    "choices": [
      "Reason, owner, authority, scope, expiration, compensating controls, monitoring, validation, and review trigger.",
      "Only the phrase accepted risk.",
      "No deadline because it is temporary.",
      "The scanner score only."
    ],
    "answer": 0,
    "explanation": "Exceptions require accountability, limits, safeguards, and reassessment."
  },
  {
    "question": "What should determine whether a fictional case becomes a declared incident?",
    "choices": [
      "Alert color alone.",
      "Evidence, impact, criticality, scope, uncertainty, criteria, and authorized decision ownership.",
      "Whether the service is offline.",
      "Whether a user is worried."
    ],
    "answer": 1,
    "explanation": "Declaration is an evidence-based governance decision."
  },
  {
    "question": "Why should fictional containment decisions consider service continuity?",
    "choices": [
      "Availability is more important than security.",
      "Containment should never change systems.",
      "A targeted reversible action may reduce risk without causing unnecessary operational harm.",
      "Every incident requires full shutdown."
    ],
    "answer": 2,
    "explanation": "Proportionate action should balance risk reduction, authority, evidence, and continuity."
  },
  {
    "question": "When is fictional incident closure strongest?",
    "choices": [
      "When alerts stop.",
      "When the ticket is closed.",
      "When the service returns.",
      "When evidence, actions, access, configuration, source health, user state, service function, communication, owner signoff, monitoring, and residual risk are addressed."
    ],
    "answer": 3,
    "explanation": "Closure requires validated outcomes and documented limits."
  },
  {
    "question": "What is the strongest fictional digital-forensics statement?",
    "choices": [
      "The supplied evidence supports a defined conclusion within its scope and does not prove activity outside that scope.",
      "Missing evidence proves the suspect deleted it.",
      "One timestamp proves intent.",
      "Every artifact belongs to the same actor."
    ],
    "answer": 0,
    "explanation": "Forensic conclusions should remain bounded by evidence and source limitations."
  },
  {
    "question": "Why is a fictional chain-of-custody or handling record useful?",
    "choices": [
      "It proves the evidence is correct.",
      "It documents who handled the evidence, when, why, how, and under which approved process.",
      "It replaces source-health review.",
      "It confirms the identity of an attacker."
    ],
    "answer": 1,
    "explanation": "Handling records support accountability and review but do not automatically prove content accuracy."
  },
  {
    "question": "A fictional artifact has a timestamp conflict. What should the analyst do?",
    "choices": [
      "Choose the timestamp that supports the preferred theory.",
      "Delete both records.",
      "Document the conflict, compare source clocks and collection paths, and preserve uncertainty.",
      "Treat the conflict as proof of tampering."
    ],
    "answer": 2,
    "explanation": "Conflicting evidence should be investigated and documented rather than forced into one narrative."
  },
  {
    "question": "What does shared responsibility mean in a fictional cloud environment?",
    "choices": [
      "The provider is responsible for every customer configuration.",
      "The customer is responsible for every physical control.",
      "No one owns inherited controls.",
      "Provider and customer responsibilities differ by service and must be mapped explicitly."
    ],
    "answer": 3,
    "explanation": "Cloud responsibility depends on the service model and control ownership."
  },
  {
    "question": "A fictional cloud policy contains a broad-read condition. What should the analyst state?",
    "choices": [
      "The condition creates a serious control weakness and possible exposure; successful access and disclosure require additional evidence.",
      "All data was disclosed.",
      "The provider caused a breach.",
      "The issue is harmless because encryption exists."
    ],
    "answer": 0,
    "explanation": "Configuration weakness, exposure, access, and disclosure are different claims."
  },
  {
    "question": "Which fictional cloud-remediation validation is strongest?",
    "choices": [
      "The policy file was edited.",
      "The effective policy, approved identities, denied identities, logging, service function, and owner signoff are confirmed.",
      "The console shows no alert.",
      "The change ticket is complete."
    ],
    "answer": 1,
    "explanation": "Validation should prove the effective state and preserve required service."
  },
  {
    "question": "What makes a fictional security policy useful?",
    "choices": [
      "It is long and technical.",
      "It contains severe penalties.",
      "It defines purpose, scope, responsibilities, requirements, exceptions, evidence, review, and enforcement clearly.",
      "It assigns every responsibility to security."
    ],
    "answer": 2,
    "explanation": "A useful policy creates clear, accountable, reviewable expectations."
  },
  {
    "question": "Which fictional risk statement is strongest?",
    "choices": [
      "Security is weak.",
      "A High alert exists.",
      "The system may be hacked.",
      "Because an expired supplier exception leaves unnecessary administrative access to a confidential service, unauthorized access or change could affect confidentiality and operations."
    ],
    "answer": 3,
    "explanation": "A complete risk statement connects asset, event, weakness, consequence, and impact."
  },
  {
    "question": "What should a fictional risk recommendation include?",
    "choices": [
      "Options, rationale, owner, authority, priority, deadline, dependencies, continuity, rollback, validation, monitoring, and residual risk.",
      "Only the preferred technical fix.",
      "Only a severity score.",
      "No alternative because alternatives weaken the case."
    ],
    "answer": 0,
    "explanation": "Decision-ready recommendations explain tradeoffs and accountability."
  },
  {
    "question": "What is the strongest fictional SOC handoff?",
    "choices": [
      "A list of every alert title.",
      "A concise case summary with evidence, source health, case boundaries, findings, confidence, actions, owners, blockers, validation, and next decisions.",
      "A screenshot of the dashboard.",
      "A message saying continue monitoring."
    ],
    "answer": 1,
    "explanation": "A handoff should allow the next analyst to continue accurately and safely."
  },
  {
    "question": "Which fictional SOC metric best supports quality improvement?",
    "choices": [
      "Number of tickets closed, without context.",
      "Fastest analyst response only.",
      "A balanced set covering evidence quality, correct case boundaries, owner assignment, action timeliness, validation, communication, and rework.",
      "Number of High alerts created."
    ],
    "answer": 2,
    "explanation": "Quality metrics should measure useful outcomes, not speed or volume alone."
  },
  {
    "question": "A fictional queue contains several alerts from one shift. What is the best first organizational step?",
    "choices": [
      "Merge all alerts into one incident.",
      "Close the lowest-severity alerts.",
      "Assign every alert to one analyst.",
      "Review systems, identities, evidence, owners, service context, relationships, and priority before creating case structure."
    ],
    "answer": 3,
    "explanation": "Queue organization should follow evidence, context, and ownership."
  },
  {
    "question": "What should remain consistent across fictional technical, service, leadership, user, supplier, and portfolio messages?",
    "choices": [
      "Facts, evidence limits, impact, status, actions, validation, and residual risk.",
      "Exact wording.",
      "Exact length.",
      "Amount of technical detail."
    ],
    "answer": 0,
    "explanation": "Audience adaptation changes presentation, not the supported fact base."
  },
  {
    "question": "What belongs at the beginning of a fictional leadership update?",
    "choices": [
      "Every raw event.",
      "Current facts, confirmed and possible impact, service state, actions, decision needed, owner, residual risk, and next update.",
      "A list of technical acronyms.",
      "The worst possible scenario."
    ],
    "answer": 1,
    "explanation": "Leadership communication should immediately support decisions."
  },
  {
    "question": "What makes a fictional action request clear?",
    "choices": [
      "It says please investigate.",
      "It contains a severe warning.",
      "It identifies the exact action, authorized owner, deadline, required evidence, response channel, and validation.",
      "It avoids naming responsibility."
    ],
    "answer": 2,
    "explanation": "A clear request defines who should do what, by when, and how success is verified."
  },
  {
    "question": "What makes a fictional security diagram trustworthy?",
    "choices": [
      "It contains many icons.",
      "It uses several colors.",
      "It fills the entire page.",
      "Every important node, flow, boundary, control, risk, owner, and unknown has a clear purpose and evidence basis."
    ],
    "answer": 3,
    "explanation": "Diagram quality depends on supported meaning, not visual complexity."
  },
  {
    "question": "How should an unconfirmed fictional relationship appear in a diagram?",
    "choices": [
      "As a clearly marked unknown or assumption with the evidence needed for confirmation.",
      "As a solid confirmed arrow.",
      "As the root cause.",
      "It should be hidden."
    ],
    "answer": 0,
    "explanation": "Visuals should preserve uncertainty explicitly."
  },
  {
    "question": "What should a fictional defender portfolio artifact demonstrate?",
    "choices": [
      "The largest possible evidence collection.",
      "A specific learning claim through selected evidence, reasoning, decisions, validation, communication, reflection, and revision.",
      "Only technical definitions.",
      "Only polished visual design."
    ],
    "answer": 1,
    "explanation": "A portfolio artifact should make applied learning visible and traceable."
  },
  {
    "question": "What is the strongest evidence of fictional final readiness?",
    "choices": [
      "Completing every module.",
      "A polished homepage.",
      "Consistent performance across recall, mixed scenarios, artifacts, communication, validation, transfer, safety, reflection, and reassessment.",
      "One perfect practice test."
    ],
    "answer": 2,
    "explanation": "Final readiness requires several dimensions of demonstrated performance."
  },
  {
    "question": "What makes the fictional Intermediate portfolio and practice assessment safe to share?",
    "choices": [
      "Only passwords are removed.",
      "Real records are shortened.",
      "The organization name is changed.",
      "Every organization, system, identity, log, message, supplier, incident, score, date, action, and outcome is invented."
    ],
    "answer": 3,
    "explanation": "Complete fictionalization protects privacy and keeps the work safe and ethical."
  }
];

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

export default function IntermediatePracticeTestOnePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Practice Test 1
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              50 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Intermediate Practice Test 1
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete a fifty-question full-track assessment covering fictional
            networking, Linux, Windows, logs, tools, identity, email defense,
            web defense, secure coding, vulnerability management, incident
            response, forensics, cloud, risk, SOC work, defensive labs, and
            portfolio skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: I17 Module Test
            </Link>

            <Link
              href={intermediatePath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Intermediate Track
            </Link>

            <Link
              href={nextPage}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Practice Test 2
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed all seventeen Intermediate modules.",
            "I will answer all fifty questions before using the explanations for review.",
            "I will choose answers based on fictional evidence, scope, ownership, impact limits, service context, and validation.",
            "I will record recurring missed concepts instead of memorizing answer positions.",
            "I will use only fictional, defensive, authorized, privacy-safe learning material.",
          ]}
        />

        <SectionCard
          eyebrow="Practice Test Instructions"
          title="Complete All 50 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work through the full test without opening lesson pages.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Select the strongest evidence-based, proportionate, authorized,
                and defensive response.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Use the explanations to create a targeted review plan before
                Practice Test 2.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Pay close attention to source health, case boundaries, effective
            access, possible versus confirmed impact, owner authority, service
            continuity, action status, validation, and residual risk.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Intermediate Practice Test 1"
          questions={testQuestions}
        />

        <SectionCard
          eyebrow="Score Guide"
          title="Use the Result to Plan Your Review"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "46–50 correct",
                "Strong full-track readiness. Review each missed explanation and verify that your portfolio demonstrates the same skills.",
              ],
              [
                "40–45 correct",
                "Solid readiness. Identify the two or three recurring domains that need targeted mixed practice.",
              ],
              [
                "32–39 correct",
                "Developing readiness. Revisit the related modules, repair artifacts, and complete delayed reassessment.",
              ],
              [
                "0–31 correct",
                "Foundation review needed. Rebuild the highest-impact domains before Practice Test 2.",
              ],
            ].map(([score, guidance]) => (
              <div
                key={score}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="font-black text-yellow-200">{score}</h3>
                <p className="mt-2 text-sm leading-6">{guidance}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 leading-7 text-cyan-50">
            The score is one evidence source. Final Intermediate readiness also
            depends on fictional labs, reports, diagrams, recommendations,
            communications, validation records, transfer tasks, reflection,
            revision, and artifact-defense performance.
          </p>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Review why each missed option is weaker rather than memorizing the answer letter.",
            "Prioritize recurring gaps in evidence limits, case boundaries, ownership, impact language, validation, and residual risk.",
            "Use mixed scenarios because Intermediate questions often combine more than one domain.",
            "Repair the related fictional portfolio artifact when a missed question reveals an applied weakness.",
            "Complete Practice Test 2 only after focused review and at least one delayed reassessment.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Next Assessment
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to Intermediate Practice Test 2
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review the weakest domains, correct any related fictional
            artifacts, and reassess the recurring gaps before beginning the
            second fifty-question practice test.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: I17 Module Test
            </Link>

            <Link
              href={intermediatePath}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Intermediate Track
            </Link>

            <Link
              href={nextPage}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next: Practice Test 2
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}