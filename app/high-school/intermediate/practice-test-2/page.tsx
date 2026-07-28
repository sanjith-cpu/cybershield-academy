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
const previousPage = `${intermediatePath}/practice-test-1`;
const nextPage = `${intermediatePath}/final-test`;

const testQuestions = [
  {
    "question": "A fictional SOC dashboard groups a supplier sign-in, cloud policy change, phishing click, and web authorization alert into one incident because they occurred within forty minutes. What is the strongest first decision?",
    "choices": [
      "Declare one common-cause incident immediately.",
      "Separate the records by systems, identities, sources, owners, actions, and impact limits while keeping one coordinated response view.",
      "Close the lowest-severity alert.",
      "Treat the supplier as the confirmed cause."
    ],
    "answer": 1,
    "explanation": "Shared timing supports coordination, but it does not prove one cause or one operational case."
  },
  {
    "question": "A fictional workstation connects to a server on an uncommon port immediately after an approved software update. Which evidence should be reviewed first?",
    "choices": [
      "The port number alone.",
      "Whether the user has administrator rights.",
      "Approved change records, process ownership, destination purpose, baseline traffic, timing, and related logs.",
      "The number of other devices on the subnet."
    ],
    "answer": 2,
    "explanation": "Context, baseline, ownership, and change evidence are stronger than the port number by itself."
  },
  {
    "question": "A fictional network sensor reports repeated denied connections from one internal device. Which conclusion is strongest?",
    "choices": [
      "A compromise is confirmed.",
      "The device is harmless because the connections were blocked.",
      "The denied attempts require context, source health, process evidence, destination purpose, and baseline comparison.",
      "The firewall should be disabled for testing."
    ],
    "answer": 2,
    "explanation": "Blocked activity still requires investigation, but it does not prove compromise or safety."
  },
  {
    "question": "A fictional Linux service account owns a new file in a protected directory. What is the strongest next step?",
    "choices": [
      "Delete the file immediately.",
      "Compare file path, creation time, package source, process ancestry, permissions, change records, owner purpose, and baseline.",
      "Assume persistence.",
      "Ignore the file because a service account created it."
    ],
    "answer": 1,
    "explanation": "The file needs evidence-based review before any conclusion or action."
  },
  {
    "question": "A fictional Linux log shows three failed service starts followed by one successful start after maintenance. What does this prove?",
    "choices": [
      "Malicious persistence.",
      "A temporary service-start problem that should be compared with maintenance, configuration, package, and validation evidence.",
      "A confirmed outage.",
      "That the service is permanently healthy."
    ],
    "answer": 1,
    "explanation": "The sequence supports a reliability issue and recovery, not necessarily malicious activity or permanent health."
  },
  {
    "question": "A fictional Windows endpoint creates a scheduled task under a known service account outside the normal patch window. Which response is strongest?",
    "choices": [
      "Compare the task, path, account, timing, owner, change history, baseline, and related events before deciding.",
      "Delete the task immediately.",
      "Assume the service account was stolen.",
      "Ignore it because the account is known."
    ],
    "answer": 0,
    "explanation": "Known accounts can still be used unexpectedly, and unfamiliar timing requires contextual review."
  },
  {
    "question": "A fictional Windows security setting shows the intended value in the configuration tool, but the service still behaves as before. What should the defender conclude?",
    "choices": [
      "The change is validated because the setting appears correct.",
      "The service must be compromised.",
      "The effective state is not yet validated; service behavior, policy application, dependencies, and owner review are still needed.",
      "The ticket should be closed."
    ],
    "answer": 2,
    "explanation": "Displayed configuration does not always equal effective behavior."
  },
  {
    "question": "A fictional alert was generated at 10:40, but the underlying event occurred at 10:05 and was collected at 10:38. Which time belongs first in the incident sequence?",
    "choices": [
      "10:40 because the alert is highest severity.",
      "10:38 because collection comes before events.",
      "10:05 because event time represents when the activity occurred.",
      "All three times should be merged."
    ],
    "answer": 2,
    "explanation": "Event, collection, and alert times represent different stages and should remain distinct."
  },
  {
    "question": "A fictional log source reports healthy delivery, but a second source covering the same service stops reporting. What is the strongest statement?",
    "choices": [
      "No evidence gap exists because one source remains healthy.",
      "The entire service is compromised.",
      "Coverage is partially reduced; the remaining source may compensate for some questions but not necessarily all.",
      "The unhealthy source should be ignored permanently."
    ],
    "answer": 2,
    "explanation": "Redundant sources may reduce uncertainty, but coverage should be mapped rather than assumed complete."
  },
  {
    "question": "A fictional detection rule fires on approved administrator activity every morning. What is the strongest improvement?",
    "choices": [
      "Disable the rule.",
      "Add evidence-based context such as approved identities, time windows, change records, source health, and exceptions while preserving true-positive coverage.",
      "Raise the severity.",
      "Ignore the alerts."
    ],
    "answer": 1,
    "explanation": "Tuning should reduce predictable noise without hiding harmful activity."
  },
  {
    "question": "A fictional tool vendor claims its alert proves account compromise. What should the analyst do?",
    "choices": [
      "Repeat the vendor wording in the report.",
      "Validate the underlying evidence, source coverage, identity state, user interaction, alternate explanations, and confirmed impact.",
      "Assume the vendor is always correct.",
      "Delete the alert."
    ],
    "answer": 1,
    "explanation": "Tool conclusions should be tested against evidence and scope."
  },
  {
    "question": "A fictional supplier account is still active because an old ticket says permanent access. The service owner says the project ended. What is the strongest decision?",
    "choices": [
      "Keep access because the old ticket says permanent.",
      "Remove all supplier access organization-wide.",
      "Review current business need, owner authority, effective access, policy, exception status, and required final state.",
      "Ask the supplier to decide."
    ],
    "answer": 2,
    "explanation": "Current need and authorized ownership should govern access."
  },
  {
    "question": "A fictional user has no direct privileged role but can reach an administrative resource through a nested group. What does this demonstrate?",
    "choices": [
      "Direct role review is enough.",
      "Effective access can come through inherited or nested paths.",
      "The user is malicious.",
      "Nested groups should always be banned."
    ],
    "answer": 1,
    "explanation": "IAM review must include indirect access paths."
  },
  {
    "question": "A fictional emergency account remains enabled two weeks after the emergency ended. What is the strongest recommendation?",
    "choices": [
      "Keep it enabled in case it is needed again.",
      "Remove or restrict it according to policy, review sessions and actions, confirm owner approval, and validate the final state.",
      "Share the account with more responders.",
      "Rename the account."
    ],
    "answer": 1,
    "explanation": "Emergency access should be time-limited, owned, reviewed, and validated."
  },
  {
    "question": "A fictional email is malicious with high confidence, but no user clicked it. Which action is proportionate?",
    "choices": [
      "Reset every account in the organization.",
      "Remove related messages, document the campaign, notify relevant users if needed, and monitor for interaction evidence.",
      "Ignore it because there was no click.",
      "Disable email service."
    ],
    "answer": 1,
    "explanation": "The malicious message should be contained, but user-impact actions should match actual interaction evidence."
  },
  {
    "question": "A fictional user clicked a suspicious link and later completed a successful sign-in from the usual device and location. What is the strongest conclusion?",
    "choices": [
      "Compromise is ruled out.",
      "Compromise is confirmed.",
      "The click is confirmed, while identity state requires targeted review of credentials, sessions, authentication, and related activity.",
      "The user should be blamed."
    ],
    "answer": 2,
    "explanation": "Normal-looking activity neither confirms nor rules out compromise by itself."
  },
  {
    "question": "A fictional web application blocks one test input but accepts a related encoded form. What does this suggest?",
    "choices": [
      "The application is fully secure.",
      "The control may be inconsistent and requires broader safe validation of expected handling.",
      "The user account is compromised.",
      "All input validation should be removed."
    ],
    "answer": 1,
    "explanation": "One blocked test does not prove complete control coverage."
  },
  {
    "question": "A fictional support role can view a manager page but cannot submit changes. Which impact statement is strongest?",
    "choices": [
      "Unauthorized page view is confirmed; modification remains unconfirmed.",
      "The entire database was changed.",
      "No issue exists because changes were blocked.",
      "Manager accounts are compromised."
    ],
    "answer": 0,
    "explanation": "Viewing restricted content and changing it are separate impact levels."
  },
  {
    "question": "A fictional code review finds authorization checks repeated differently across several routes. Which recommendation is strongest?",
    "choices": [
      "Add more comments.",
      "Rename the routes.",
      "Centralize authorization logic, define role rules, add approved and denied tests, and monitor failures.",
      "Hide the navigation links."
    ],
    "answer": 2,
    "explanation": "A centralized, testable control is stronger than cosmetic changes."
  },
  {
    "question": "A fictional vulnerability scanner reports critical severity on a system isolated from users and protected by strong controls. What should happen next?",
    "choices": [
      "Ignore the finding forever.",
      "Prioritize it automatically above every other finding.",
      "Validate the issue and assess asset value, exposure, controls, exploitability, continuity, and treatment options.",
      "Publicly disclose the system."
    ],
    "answer": 2,
    "explanation": "Technical severity is important but must be placed in business and control context."
  },
  {
    "question": "A fictional medium-severity issue affects an internet-facing identity service with weak monitoring. Why might it receive high priority?",
    "choices": [
      "Medium severity always means high priority.",
      "Exposure, asset value, control weakness, user impact, and detection limitations may raise business risk.",
      "The scanner used a red icon.",
      "The service owner requested attention."
    ],
    "answer": 1,
    "explanation": "Business priority depends on context beyond the technical rating."
  },
  {
    "question": "A fictional vulnerability cannot be fixed before the maintenance window. What is the strongest temporary plan?",
    "choices": [
      "Accept it permanently.",
      "Use defined compensating controls, owner approval, monitoring, expiration, escalation triggers, and a replacement deadline.",
      "Hide the finding.",
      "Disable all monitoring."
    ],
    "answer": 1,
    "explanation": "A controlled delay requires accountable temporary safeguards and reassessment."
  },
  {
    "question": "A fictional incident commander wants to disable a critical service because one suspicious sign-in occurred. Services are stable and targeted account controls are available. What is the strongest response?",
    "choices": [
      "Disable everything immediately.",
      "Ignore the sign-in.",
      "Use targeted, reversible, authorized controls while preserving service and continuing evidence review.",
      "Wait until confirmed damage occurs."
    ],
    "answer": 2,
    "explanation": "Containment should be proportionate to evidence, authority, risk, and continuity."
  },
  {
    "question": "A fictional response ticket says containment completed, but the account still has an active session. What is the correct status?",
    "choices": [
      "Validated.",
      "Completed and closed.",
      "Containment is incomplete or not yet effective.",
      "No further action is needed."
    ],
    "answer": 2,
    "explanation": "The intended effective state has not been reached."
  },
  {
    "question": "A fictional incident report states that no data loss occurred because no loss appears in the reviewed logs. What is missing?",
    "choices": [
      "A stronger severity label.",
      "The report should state the evidence scope and avoid a universal no-loss conclusion.",
      "The user's name.",
      "A screenshot of every log."
    ],
    "answer": 1,
    "explanation": "Absence in covered evidence is not proof across all paths."
  },
  {
    "question": "A fictional forensic timeline contains two records with conflicting timestamps. Which action is strongest?",
    "choices": [
      "Keep the timestamp that supports the preferred conclusion.",
      "Delete both records.",
      "Compare source clocks, time zones, collection paths, and metadata while documenting uncertainty.",
      "Treat the conflict as confirmed tampering."
    ],
    "answer": 2,
    "explanation": "Conflicts require transparent reconciliation and limitation handling."
  },
  {
    "question": "A fictional analyst receives a copied log excerpt without source details. How should it be used?",
    "choices": [
      "As final proof.",
      "As unverified supporting material until source, integrity, time, collection, and ownership are established.",
      "It should be deleted immediately.",
      "As proof of actor identity."
    ],
    "answer": 1,
    "explanation": "Evidence quality depends on provenance and context."
  },
  {
    "question": "A fictional cloud provider secures the physical platform, but a customer creates a broad storage policy. Who owns the policy correction?",
    "choices": [
      "Only the provider.",
      "The customer role responsible for cloud configuration and data access.",
      "No one because the provider hosts the service.",
      "The end user who first noticed it."
    ],
    "answer": 1,
    "explanation": "Shared responsibility assigns customer configuration to the appropriate customer owner."
  },
  {
    "question": "A fictional cloud storage policy is restored, but the source-health monitor remains unhealthy. What is the strongest status?",
    "choices": [
      "Fully validated.",
      "Configuration corrected, while monitoring validation remains incomplete.",
      "Closed because the policy changed.",
      "No residual uncertainty remains."
    ],
    "answer": 1,
    "explanation": "Control correction and monitoring assurance are separate outcomes."
  },
  {
    "question": "A fictional cloud key is rotated, but an old application still depends on the previous key. What should happen?",
    "choices": [
      "Declare the rotation validated.",
      "Ignore the application.",
      "Review dependency, service function, approved transition, rollback, effective key use, and owner signoff.",
      "Publish both keys."
    ],
    "answer": 2,
    "explanation": "Key rotation must be validated against dependencies and actual use."
  },
  {
    "question": "A fictional policy says privileged access must expire, but no review process or owner is defined. What is the strongest improvement?",
    "choices": [
      "Add purpose, scope, owner, approval, expiration, review evidence, exception handling, enforcement, and validation.",
      "Make the policy longer.",
      "Add more severe penalties.",
      "Remove the expiration requirement."
    ],
    "answer": 0,
    "explanation": "Policy requirements need accountable operating and review mechanisms."
  },
  {
    "question": "A fictional risk recommendation proposes monitoring only, even though unsupported privileged access is confirmed. What is the strongest critique?",
    "choices": [
      "Monitoring alone does not reduce the current access weakness.",
      "Monitoring is always sufficient.",
      "The risk should be ignored.",
      "Every account should be deleted."
    ],
    "answer": 0,
    "explanation": "Confirmed high-impact capability usually requires corrective treatment in addition to monitoring."
  },
  {
    "question": "A fictional risk owner accepts a risk without an expiration or review trigger. What is missing?",
    "choices": [
      "A scanner score.",
      "A documented time limit, monitoring, reassessment condition, rationale, and owner authority.",
      "A public announcement.",
      "A more severe title."
    ],
    "answer": 1,
    "explanation": "Risk acceptance should be bounded, owned, monitored, and revisited."
  },
  {
    "question": "A fictional SOC analyst closes many cases quickly, but several reopen because validation was incomplete. Which metric needs improvement?",
    "choices": [
      "Closure speed only.",
      "Case-quality and rework measures, including evidence, ownership, validation, and recurrence.",
      "Number of dashboards.",
      "Number of alert colors."
    ],
    "answer": 1,
    "explanation": "Fast closure is not useful if cases repeatedly reopen."
  },
  {
    "question": "A fictional shift handoff says only 'continue monitoring.' What is missing?",
    "choices": [
      "A screenshot.",
      "Case purpose, evidence, source health, boundaries, findings, actions, owners, blockers, validation, and next decisions.",
      "More acronyms.",
      "The analyst's personal opinion."
    ],
    "answer": 1,
    "explanation": "A handoff should allow accurate continuation of the work."
  },
  {
    "question": "A fictional SOC queue contains one severe but well-contained issue and one moderate issue affecting a critical identity service with weak visibility. What should determine priority?",
    "choices": [
      "Severity labels alone.",
      "Evidence, asset value, exposure, control state, impact, uncertainty, continuity, and owner decision needs.",
      "Which alert arrived first.",
      "Which alert has more text."
    ],
    "answer": 1,
    "explanation": "Priority is contextual and decision-focused."
  },
  {
    "question": "A fictional leadership message includes twenty raw log lines but no decision request. What is the strongest revision?",
    "choices": [
      "Add more logs.",
      "Open with current facts, impact limits, service state, actions, decision needed, owner, residual risk, and next update; move logs to an appendix.",
      "Remove all evidence.",
      "Use more technical acronyms."
    ],
    "answer": 1,
    "explanation": "Leadership communication should be concise and decision-ready while preserving supporting detail."
  },
  {
    "question": "A fictional user notice says 'your account was compromised' after one link click and no confirmed credential entry. What is wrong?",
    "choices": [
      "The language overstates confirmed impact.",
      "The message is too short.",
      "The user should receive raw logs.",
      "The notice should identify other users."
    ],
    "answer": 0,
    "explanation": "The confirmed click should not be converted into an unsupported compromise claim."
  },
  {
    "question": "A fictional supplier notice says 'contact us if needed' after access removal. What should be added?",
    "choices": [
      "The exact action, owner, required evidence, approval path, deadline, response channel, and validation.",
      "A more severe warning.",
      "Every unrelated case detail.",
      "A public link to internal systems."
    ],
    "answer": 0,
    "explanation": "The recipient needs a clear, accountable next step."
  },
  {
    "question": "A fictional architecture diagram shows a solid arrow from a supplier identity to confidential storage based only on shared timing. What is the strongest correction?",
    "choices": [
      "Keep the arrow because it looks clear.",
      "Remove the supplier from the diagram.",
      "Change the relationship to an unknown marker and list the evidence needed for confirmation.",
      "Label the supplier as root cause."
    ],
    "answer": 2,
    "explanation": "The visual should preserve uncertainty and evidence limits."
  },
  {
    "question": "A fictional diagram uses color alone to distinguish confirmed, possible, and unknown relationships. What should be improved?",
    "choices": [
      "Add labels, shapes, line patterns, legends, captions, and written summaries.",
      "Use brighter colors.",
      "Remove the legend.",
      "Use smaller text."
    ],
    "answer": 0,
    "explanation": "Accessible diagrams communicate meaning through more than color."
  },
  {
    "question": "A fictional portfolio artifact contains every raw record but no learning claim. What is the strongest revision?",
    "choices": [
      "Add more records.",
      "Define a clear learning claim, select decision-changing evidence, explain reasoning, include validation, reflection, and revision history.",
      "Remove all evidence.",
      "Increase the font size."
    ],
    "answer": 1,
    "explanation": "A portfolio artifact should demonstrate a specific skill through traceable reasoning."
  },
  {
    "question": "A fictional portfolio reflection says only 'I learned a lot.' What should be added?",
    "choices": [
      "What the original approach was, what feedback revealed, what changed, what improved, what remains uncertain, and the next learning goal.",
      "More screenshots.",
      "A higher severity rating.",
      "Real company examples."
    ],
    "answer": 0,
    "explanation": "A strong reflection explains evidence of growth and next steps."
  },
  {
    "question": "A fictional readiness review uses only quiz averages. What is the strongest improvement?",
    "choices": [
      "Add labs, reports, diagrams, recommendations, communication, validation, transfer tasks, revisions, reflection, and presentation evidence.",
      "Use fewer quizzes.",
      "Round the score upward.",
      "Count completed pages."
    ],
    "answer": 0,
    "explanation": "Final readiness includes several forms of applied performance."
  },
  {
    "question": "A fictional learner repeatedly confuses completed changes with validated outcomes. What is the strongest repair?",
    "choices": [
      "Memorize the word validation.",
      "Add measurable effective-state, service, source, user, owner, communication, monitoring, and residual-risk checks to several mixed scenarios.",
      "Remove corrective actions from the portfolio.",
      "Skip the capstone."
    ],
    "answer": 1,
    "explanation": "The repair should practice the entire validation workflow across contexts."
  },
  {
    "question": "A fictional learner scores well but misses one nested IAM path and one residual-risk consistency check. What is the strongest readiness conclusion?",
    "choices": [
      "Fully ready because the overall score is high.",
      "Must repeat the entire track.",
      "Conditionally ready with targeted repair and reassessment.",
      "Not ready because perfection is required."
    ],
    "answer": 2,
    "explanation": "Focused gaps can be repaired without ignoring them or restarting everything."
  },
  {
    "question": "A fictional capstone contains six cases, all immediate actions are complete, and services are stable. What is still required before monitored follow-up?",
    "choices": [
      "Only a closed ticket.",
      "Access, configuration, source, user, service, owner, communication, monitoring, residual-risk, and reassessment validation.",
      "A quieter dashboard.",
      "A lower alert count."
    ],
    "answer": 1,
    "explanation": "Transition requires validated outcomes across technical and operational dimensions."
  },
  {
    "question": "A fictional final report says one common actor caused all six cases, but no shared identity, session, access path, or evidence supports it. What is the strongest correction?",
    "choices": [
      "Keep the statement because it makes the report simpler.",
      "State that the cases were coordinated but common cause remains unconfirmed.",
      "Remove every case from the report.",
      "Name the supplier as the actor."
    ],
    "answer": 1,
    "explanation": "The report should preserve coordination without inventing attribution."
  },
  {
    "question": "What makes this fictional Practice Test 2 and its related portfolio work safe to share?",
    "choices": [
      "Only credentials are removed.",
      "Real logs are shortened.",
      "Every organization, system, identity, log, message, supplier, incident, score, date, action, and outcome is invented.",
      "The organization name is changed while all other details remain."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects privacy and keeps the work safe and ethical."
  },
  {
    "question": "A fictional analyst finishes Practice Test 2 with several missed questions in evidence limits, ownership, and validation. What is the strongest next step before the Final Test?",
    "choices": [
      "Memorize the answer letters.",
      "Immediately begin the Final Test.",
      "Review the missed reasoning patterns, repair related fictional artifacts, complete mixed practice, and reassess after a delay.",
      "Ignore the misses because the test is only practice."
    ],
    "answer": 2,
    "explanation": "Targeted review and delayed reassessment are stronger than memorization or immediate continuation."
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

export default function IntermediatePracticeTestTwoPage() {
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
              Practice Test 2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              50 Applied Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Intermediate Practice Test 2
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete fifty mixed fictional scenarios focused on evidence
            analysis, case boundaries, applied defensive decisions, ownership,
            service continuity, impact limits, communication, validation,
            residual risk, and portfolio reasoning across the full
            Intermediate track.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: Practice Test 1
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
              Final Test
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed Practice Test 1 and reviewed recurring missed concepts.",
            "I will answer all fifty mixed scenarios before using explanations for review.",
            "I will distinguish observations, conclusions, alternate explanations, potential impact, confirmed impact, and unknowns.",
            "I will check case boundaries, owner authority, service continuity, action status, validation, and residual risk.",
            "I will use only fictional, defensive, authorized, privacy-safe learning material.",
          ]}
        />

        <SectionCard
          eyebrow="Practice Test Instructions"
          title="Use Applied Evidence-Based Reasoning"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Read the boundary</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Identify the fictional system, identity, source, time window,
                owner, service, action, and evidence limit.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Compare the options</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Prefer the answer that is proportionate, authorized,
                reversible, service-aware, measurable, and evidence-limited.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Review the pattern</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Record repeated errors in case structure, impact language,
                ownership, communication, validation, or residual risk.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Many questions include one technically possible answer and one
            professionally stronger answer. Choose the response that best
            preserves evidence, authority, safety, continuity, and validation.
          </div>
        </SectionCard>

        <MiniQuiz
          title="Intermediate Practice Test 2"
          questions={testQuestions}
        />

        <SectionCard
          eyebrow="Score Guide"
          title="Use the Result before the Final Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "46–50 correct",
                "Strong applied readiness. Review every missed explanation and verify that your final portfolio uses the same reasoning.",
              ],
              [
                "40–45 correct",
                "Solid applied readiness. Complete focused review of the two or three recurring decision patterns.",
              ],
              [
                "32–39 correct",
                "Developing applied readiness. Revisit the related modules, revise artifacts, and complete delayed reassessment.",
              ],
              [
                "0–31 correct",
                "Major review needed. Rebuild high-impact concepts before beginning the 125-question Final Test.",
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
            Before the Final Test, review the exact reason each missed choice
            was weaker. Repair the related fictional report, diagram,
            recommendation, communication, or validation record when the error
            reflects an applied skill gap.
          </p>
        </SectionCard>

        <KeyTakeaways
          takeaways={[
            "Applied Intermediate decisions depend on evidence, scope, ownership, context, and validation rather than alert severity alone.",
            "Shared timing may justify coordination but does not establish a common cause.",
            "Possible exposure, confirmed access, confirmed impact, and residual uncertainty should remain separate.",
            "Proportionate defensive actions preserve service whenever targeted reversible controls are sufficient.",
            "Audience-specific communication should preserve one approved fictional fact set.",
            "Final closure requires validated technical and operational outcomes, not completed tickets or quiet dashboards.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Next Assessment
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue to the 125-Question Intermediate Final Test
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review recurring mistakes, revise related fictional artifacts,
            complete delayed reassessment, and confirm that no major safety,
            ownership, validation, or evidence-boundary gap remains.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: Practice Test 1
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
              Next: Final Test
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}