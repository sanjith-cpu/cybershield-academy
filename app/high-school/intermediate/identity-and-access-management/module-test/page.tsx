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
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/identity-and-access-management`;
const previousLesson = `${modulePath}/identity-and-access-management-lab`;
const nextModulePath = `${trackPath}/email-security-and-phishing-defense`;

const moduleTopics = [
  {
    lesson: "I6.1",
    title: "Identity, Authentication, and Authorization",
    focus:
      "Identity, accounts, credentials, authentication, authorization, sessions, access decisions, and evidence limitations.",
  },
  {
    lesson: "I6.2",
    title: "Accounts, Roles, and Least Privilege",
    focus:
      "User, service, shared, temporary, emergency, and privileged accounts; roles, groups, permissions, ownership, and least privilege.",
  },
  {
    lesson: "I6.3",
    title: "Passwords, MFA, and Authentication Factors",
    focus:
      "Knowledge, possession, inherence, device trust, MFA, passwordless authentication, recovery, factor lifecycle, and session review.",
  },
  {
    lesson: "I6.4",
    title: "Access Control Models and Permissions",
    focus:
      "DAC, MAC, RBAC, rule-based, attribute-based, relationship-based, resource-level, and policy-based controls.",
  },
  {
    lesson: "I6.5",
    title: "Privileged Access and Administrative Accounts",
    focus:
      "Administrative identities, standing privilege, temporary elevation, emergency access, separation of duties, and de-elevation.",
  },
  {
    lesson: "I6.6",
    title: "Account Lifecycle and Access Reviews",
    focus:
      "Joiners, movers, leavers, temporary access, dormant accounts, recertification, ownership transfer, and closure.",
  },
  {
    lesson: "I6.7",
    title: "Identity Logs and Access Monitoring",
    focus:
      "Identity-provider, directory, application, device, session, recovery, privileged, lifecycle, and case evidence.",
  },
  {
    lesson: "I6.8",
    title: "Identity and Access Management Lab",
    focus:
      "Integrated IAM evidence, findings, prioritization, remediation, validation, monitoring, residual risk, and reporting.",
  },
];

const questions = [
  {
    question:
      "Which statement best distinguishes identity from an account?",
    choices: [
      "An identity is the fictional person, service, device, or application represented; an account is the technical record used by systems.",
      "An identity is always a password, while an account is always a role.",
      "An account proves the physical person using it.",
      "Identity and account are always identical concepts.",
    ],
    answer: 0,
    explanation:
      "Identity describes who or what is represented, while an account is one technical mechanism used to represent that identity.",
  },
  {
    question:
      "What does successful authentication directly establish?",
    choices: [
      "The system accepted the required fictional authentication evidence for the account or session.",
      "The physical person is known with certainty.",
      "Every later action is authorized.",
      "The account owner has safe intent.",
    ],
    answer: 0,
    explanation:
      "Authentication success supports acceptance of the presented evidence, but it does not automatically prove physical identity, intent, or authorization.",
  },
  {
    question:
      "What is authorization?",
    choices: [
      "The decision about whether a fictional account or session may perform a specific action on a specific resource.",
      "The process of creating a password.",
      "The process of proving that every sign-in is safe.",
      "The process of assigning every user administrator access.",
    ],
    answer: 0,
    explanation:
      "Authorization evaluates resource, action, role, permission, policy, and context after or alongside authentication.",
  },
  {
    question:
      "Which example best follows least privilege?",
    choices: [
      "Granting a fictional reviewer view access to one required report for thirty days.",
      "Granting permanent report administrator access because it includes view.",
      "Using one shared administrator account for a team.",
      "Keeping a project role active after the project ends.",
    ],
    answer: 0,
    explanation:
      "Least privilege limits action, resource, duration, context, and ownership to the minimum approved need.",
  },
  {
    question:
      "Why can direct permissions become difficult to govern?",
    choices: [
      "They can accumulate outside standard roles and be missed during access reviews.",
      "They never grant access.",
      "They always expire automatically.",
      "They cannot affect applications.",
    ],
    answer: 0,
    explanation:
      "Direct grants can bypass role-based review and remain after the original business need ends.",
  },
  {
    question:
      "What makes a service account orphaned?",
    choices: [
      "It has no valid active owner, current workload, or review path.",
      "It has a named application owner.",
      "It uses a managed identity.",
      "It is reviewed quarterly.",
    ],
    answer: 0,
    explanation:
      "Without ownership and purpose, the organization cannot reliably manage permissions, authentication, rotation, monitoring, or removal.",
  },
  {
    question:
      "Which design best supports separation of duties?",
    choices: [
      "One fictional user creates a request and a different authorized user approves it.",
      "One account creates, approves, implements, and verifies the same sensitive action.",
      "Every user receives all workflow permissions.",
      "A shared administrator approves its own changes.",
    ],
    answer: 0,
    explanation:
      "Separation of duties prevents one identity from controlling every critical step of a sensitive workflow.",
  },
  {
    question:
      "What makes authentication multi-factor?",
    choices: [
      "The process uses evidence from more than one independent factor category.",
      "The same password is entered twice.",
      "The user sees two screens.",
      "The system asks two questions from the same category.",
    ],
    answer: 0,
    explanation:
      "Multiple steps are not necessarily multiple factors. Independent categories are required.",
  },
  {
    question:
      "What does an approved fictional MFA challenge directly support?",
    choices: [
      "The registered factor produced an accepted result for the linked challenge.",
      "The physical user is known with certainty.",
      "Every later action is approved.",
      "The device can never be lost, shared, or misused.",
    ],
    answer: 0,
    explanation:
      "MFA approval strengthens authentication assurance, but it does not prove physical identity, intent, or authorization for every action.",
  },
  {
    question:
      "Why is account recovery a critical security control?",
    choices: [
      "A weak recovery path can bypass stronger normal authentication.",
      "Recovery automatically removes every session.",
      "Recovery never requires ownership.",
      "Recovery should collect as much personal data as possible.",
    ],
    answer: 0,
    explanation:
      "Recovery can become the weakest authentication path if verification, ownership, factor cleanup, and session cleanup are poor.",
  },
  {
    question:
      "What is step-up authentication?",
    choices: [
      "A request for stronger or fresh fictional authentication before a sensitive action.",
      "A permanent administrator assignment.",
      "A password shared with a manager.",
      "A way to disable authorization.",
    ],
    answer: 0,
    explanation:
      "Step-up authentication matches additional assurance to a specific resource or action.",
  },
  {
    question:
      "Which statement best describes role-based access control?",
    choices: [
      "Permissions are assigned to fictional roles, and identities receive access through role membership.",
      "Every resource owner must share files manually.",
      "The system ignores job function.",
      "Every role automatically includes administrator access.",
    ],
    answer: 0,
    explanation:
      "RBAC organizes permissions around defined job or service functions.",
  },
  {
    question:
      "What is attribute-based access control?",
    choices: [
      "A model that evaluates fictional subject, resource, action, and environmental attributes.",
      "A model that uses only passwords.",
      "A model that ignores device and session context.",
      "A model based only on shared accounts.",
    ],
    answer: 0,
    explanation:
      "ABAC combines attributes such as role, resource sensitivity, device state, environment, and action.",
  },
  {
    question:
      "What is effective access?",
    choices: [
      "The final fictional access available after direct, inherited, role, group, resource, policy, local, and session conditions are evaluated.",
      "Only the permission shown in a role name.",
      "Only direct permissions.",
      "Every action attempted after authentication.",
    ],
    answer: 0,
    explanation:
      "Effective access is the combined result of all relevant access paths and policy conditions.",
  },
  {
    question:
      "Why can permission inheritance be risky?",
    choices: [
      "A sensitive child resource may receive broader access from its parent than the owner intended.",
      "Inherited permissions never work.",
      "Inheritance automatically deletes ownership.",
      "Inheritance always creates a password.",
    ],
    answer: 0,
    explanation:
      "Inheritance is useful, but boundaries and exceptions must be reviewed and tested.",
  },
  {
    question:
      "What is standing privilege?",
    choices: [
      "Fictional privileged access that remains continuously assigned.",
      "A temporary role that expires automatically.",
      "A standard account with no administrative access.",
      "A completed access review.",
    ],
    answer: 0,
    explanation:
      "Standing privilege remains available even when no approved administrative task is active.",
  },
  {
    question:
      "What is just-in-time privileged access?",
    choices: [
      "Privilege is granted only when approved and needed, then removed or expired.",
      "Permanent administrator access for every support user.",
      "A shared password used during maintenance.",
      "An unowned emergency role.",
    ],
    answer: 0,
    explanation:
      "Just-in-time access reduces continuous exposure by limiting when privilege exists.",
  },
  {
    question:
      "What is just-enough privileged access?",
    choices: [
      "Privilege is limited to the exact actions and resources required.",
      "Every administrator receives every permission.",
      "The role has no expiration.",
      "The privileged session remains remembered.",
    ],
    answer: 0,
    explanation:
      "Just-enough access reduces the scope of elevated capability.",
  },
  {
    question:
      "What should happen when a temporary privileged role expires?",
    choices: [
      "Verify role removal, refresh or revoke sessions, test denied privileged actions, and document closure.",
      "Assume every application removed access.",
      "Convert the role to standing privilege.",
      "Delete all related evidence.",
    ],
    answer: 0,
    explanation:
      "Role state and session state can differ, so effective de-elevation must be validated.",
  },
  {
    question:
      "What is a mover event?",
    choices: [
      "A fictional identity’s job, project, department, responsibility, owner, device, or service purpose changes.",
      "A fictional password is entered incorrectly.",
      "A firewall rule changes.",
      "A module test begins.",
    ],
    answer: 0,
    explanation:
      "Mover events require comparing the old approved access state with the new required state.",
  },
  {
    question:
      "What is privilege accumulation?",
    choices: [
      "New access is added while old access remains after responsibilities change.",
      "A temporary role expires correctly.",
      "A resource owner removes a stale share.",
      "A session is revoked.",
    ],
    answer: 0,
    explanation:
      "Privilege accumulation often occurs when mover workflows add new access without removing old access.",
  },
  {
    question:
      "Why must leaver workflows include session revocation?",
    choices: [
      "Existing fictional browser or application sessions may continue after the central account changes.",
      "Sessions always contain readable passwords.",
      "Session revocation replaces resource ownership transfer.",
      "Disabling an account automatically grants privilege.",
    ],
    answer: 0,
    explanation:
      "Account state and session state can differ across systems and applications.",
  },
  {
    question:
      "What does a correlation ID help defenders do?",
    choices: [
      "Connect related fictional sign-in, challenge, session, application, and access-decision events.",
      "Prove physical identity with certainty.",
      "Grant administrator access.",
      "Replace account ownership.",
    ],
    answer: 0,
    explanation:
      "Correlation IDs help reconstruct an evidence-linked event sequence across systems.",
  },
  {
    question:
      "What is the strongest response when identity logs are incomplete?",
    choices: [
      "State the evidence gap, confidence, owner, due date, temporary control, and decision criteria.",
      "Assume the missing events were safe.",
      "Invent a complete timeline.",
      "Close the case automatically.",
    ],
    answer: 0,
    explanation:
      "Evidence-incomplete cases should remain transparent and owned rather than being presented as certainty.",
  },
  {
    question:
      "Which closure plan is strongest for an IAM finding?",
    choices: [
      "Confirm remediation, required and denied actions, session and factor state, monitoring, owner acceptance, residual risk, and evidence.",
      "Close when the change ticket says completed.",
      "Close after one dashboard turns green.",
      "Close without an owner or due date.",
    ],
    answer: 0,
    explanation:
      "Professional IAM closure requires technical, business, monitoring, ownership, and evidence conditions.",
  },
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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={nextModulePath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Module
      </Link>
    </div>
  );
}

export default function IdentityAndAccessManagementModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I6
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              25-Question Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6 Module Test: Identity and Access Management
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your understanding of fictional identity, authentication,
            authorization, accounts, roles, least privilege, MFA, access-control
            models, privileged access, lifecycle, monitoring, remediation, and
            evidence-based IAM closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I6: Identity and Access Management"
          lessonTitle="Module Test"
          lessonNumber={9}
          totalLessons={9}
        />

        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed lessons I6.1 through I6.8.",
            "I will answer each question before revealing its explanation.",
            "I understand that all users, accounts, devices, systems, applications, roles, sessions, and organizations in this test are fictional.",
            "I will focus on defensive reasoning, evidence limits, least privilege, ownership, validation, and safe closure.",
            "I will review missed questions and return to the related lesson when needed.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete All 25 Questions"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
              <h3 className="font-black text-cyan-100">Recommended process</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-cyan-50">
                <li>Read the exact wording of the question.</li>
                <li>Choose the best evidence-based defensive answer.</li>
                <li>Reveal the explanation only after making your choice.</li>
                <li>Record any missed topic for review.</li>
                <li>Complete the final readiness checklist.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
              <h3 className="font-black text-yellow-100">Suggested benchmark</h3>
              <p className="mt-3 text-sm leading-6 text-yellow-50">
                A score of 20 out of 25 or higher shows strong readiness to move
                forward. Review every explanation, including questions answered
                correctly, because the explanation identifies the evidence and
                reasoning standard expected in later modules.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Coverage
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Lessons Assessed
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {moduleTopics.map((topic) => (
              <div
                key={topic.lesson}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                    {topic.lesson}
                  </span>
                  <h3 className="font-black text-white">{topic.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {topic.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake IAM Module-Test Readiness Dashboard"
          subtitle="Training dashboard summarizing the fictional evidence domains assessed in this module test."
          metrics={[
            {
              label: "Questions",
              value: "25",
              note: "Identity, authentication, authorization, roles, MFA, access models, privilege, lifecycle, monitoring, and closure.",
            },
            {
              label: "Evidence domains",
              value: "8",
              note: "Account, authentication, authorization, permission, privilege, lifecycle, monitoring, and validation evidence.",
            },
            {
              label: "Target score",
              value: "20+",
              note: "Review every missed question and return to the related lesson before advancing.",
            },
          ]}
        />

        <FakeAlertCard
          title="IAM Review Finds Several Connected Control Gaps"
          severity="High"
          time="04:25 PM"
          source="Fake Module-Test Evidence Console"
          details="A fictional mover retains old application access, a service account has no owner, a privileged role expires before its session, and a recovery event leaves an old factor registered. Each issue requires a different owner and correction, but all require evidence, narrow remediation, validation, and closure."
          recommendation="Do not apply one broad response. Separate each finding, preserve its source evidence, identify technical and business owners, correct narrowly, validate required and denied paths, monitor, and document residual risk."
        />

        <FakeLogPanel
          title="Fake IAM Review Summary"
          logs={[
            "IAM-01 identity='svc-report-old' finding='orphaned_service_account' priority='high'",
            "IAM-02 identity='training-mchen' finding='mover_privilege_accumulation' priority='high'",
            "IAM-03 role='service-operator' finding='privileged_session_gap' priority='high'",
            "IAM-04 identity='training-amorgan' finding='old_factor_after_recovery' priority='high'",
            "IAM-05 identity='training-rpatel' finding='excessive_report_role' priority='medium'",
            "IAM-06 resource='restricted-child-folder' finding='unsafe_inheritance' priority='medium'",
            "IAM-07 monitoring='dormant_reactivation_alert' finding='context_gap' priority='medium'",
            "IAM-08 account='break-glass-training' finding='review_overdue' priority='medium'",
            "VALIDATION required_access='pass' denied_access='pass'",
            "VALIDATION sessions='pass' factors='pass' local_access='pass'",
            "OWNER_REVIEW technical='approved' business='approved'",
            "CLOSURE residual_risk='documented'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Warm-Up Evidence Question"
          evidence={[
            "A fictional user is approved for report-view for thirty days.",
            "The account receives report-admin instead.",
            "The application confirms view, edit, export, and configuration permissions.",
            "No evidence shows the extra permissions were used.",
            "The owner confirms only view is required.",
            "After remediation, report viewing succeeds.",
            "After remediation, configuration is denied.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The account had excessive access even though the extra permissions were not used; the narrow role correction is validated.",
            "The account should keep administrator because no misuse occurred.",
            "Every reporting permission should be removed.",
            "The successful sign-in proves the broad role was approved.",
          ]}
          bestAnswer={0}
          explanation="IAM reviews evaluate available capability and approved need, not only whether misuse has already occurred."
        />

        <MiniQuiz
          title="I6 Module Test: 25 Questions"
          questions={questions}
        />

        <ScenarioDecisionLab
          title="Final Scenario: Several IAM Findings Appear at Once"
          scenario="A fictional organization finds a mover with old access, an unowned service account, an expired privileged role with an active session, and a recovery event with an old factor still registered."
          choices={[
            {
              label: "Choice A",
              response:
                "Separate the findings, preserve evidence, assign accountable owners, prioritize by privilege and exposure, use narrow remediation, validate required and denied paths, review sessions and factors, monitor, and document residual risk.",
              outcome:
                "Best defensive choice. Different IAM findings require coordinated but distinct evidence-based responses.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Delete every account immediately.",
              outcome:
                "Overbroad. This could break required workflows and destroy useful evidence.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the findings because no confirmed harmful action is shown.",
              outcome:
                "Unsafe. Control gaps should be corrected before they create greater exposure.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Module I6 Completion Checklist"
          items={[
            "I distinguish fictional identity, account, credential, authentication, authorization, permission, role, session, and access decision.",
            "I apply least privilege by limiting action, resource, duration, context, account type, and business purpose.",
            "I understand MFA, passwordless authentication, recovery, factor lifecycle, remembered sessions, and evidence limitations.",
            "I distinguish RBAC, ABAC, DAC, MAC, rule-based, relationship-based, resource-level, and policy-based access control.",
            "I calculate effective access across direct, inherited, nested, role, group, resource, local, policy, exception, and session paths.",
            "I govern privileged access with named accounts, protected devices, fresh authentication, narrow temporary roles, session evidence, and de-elevation.",
            "I review joiners, movers, leavers, temporary access, dormant accounts, service ownership, sessions, resources, and local applications.",
            "I correlate fictional identity-provider, directory, application, device, recovery, privilege, lifecycle, and owner evidence.",
            "I separate confirmed facts, reasonable conclusions, alternative explanations, tool interpretations, and evidence gaps.",
            "I close IAM findings only after narrow remediation, positive and negative tests, session and factor review, monitoring, owner acceptance, and residual-risk documentation.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Authentication establishes accepted account or session evidence; authorization decides which resource actions are permitted.",
            "Least privilege requires exact actions, resources, duration, ownership, and business purpose.",
            "MFA strengthens authentication but does not prove physical identity, intent, or authorization for every later action.",
            "Effective access includes direct, inherited, role, group, local, resource, policy, and session paths.",
            "Privileged access should be named, narrow, time limited, approved, monitored, and fully de-elevated.",
            "IAM closure requires technical validation, business validation, monitoring, ownership, evidence traceability, and residual-risk documentation.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-200">
            Module Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            You Completed I6: Identity and Access Management
          </h2>
          <p className="mt-4 max-w-4xl leading-8">
            Review any missed questions, revisit the related lesson, and verify
            that all eight lessons and this module test open correctly from the
            module homepage before committing the completed module.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}