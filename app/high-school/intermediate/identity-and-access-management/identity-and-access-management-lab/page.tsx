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
const modulePath = `${trackPath}/identity-and-access-management`;
const previousLesson = `${modulePath}/identity-logs-and-access-monitoring`;
const nextLesson = `${modulePath}/module-test`;

const objectives = [
  "Integrate fictional identity, authentication, authorization, role, permission, lifecycle, privileged-access, and monitoring evidence into one defensible review.",
  "Separate confirmed facts, reasonable conclusions, alternative explanations, tool interpretations, business context, and evidence gaps.",
  "Prioritize fictional identity findings using access scope, resource sensitivity, privilege, duration, owner, session state, and business impact.",
  "Design narrow owner-approved remediation with rollback, positive tests, negative tests, session validation, monitoring, and closure criteria.",
  "Create a portfolio-ready fictional Identity and Access Review Report that is traceable, professional, privacy-preserving, and evidence based.",
];

const vocabulary = [
  [
    "Identity review",
    "A structured fictional evaluation of accounts, authentication, authorization, roles, permissions, lifecycle, sessions, ownership, and monitoring.",
  ],
  [
    "Scope",
    "The fictional identities, systems, applications, resources, time range, environments, and evidence included in the review.",
  ],
  [
    "Confirmed fact",
    "A statement directly supported by one or more preserved fictional evidence sources.",
  ],
  [
    "Reasonable conclusion",
    "An evidence-based fictional interpretation that is supported but still includes stated assumptions or limitations.",
  ],
  [
    "Alternative explanation",
    "Another plausible fictional interpretation that should be considered until stronger evidence excludes it.",
  ],
  [
    "Finding",
    "A documented fictional condition in which access, ownership, lifecycle, session, policy, monitoring, or evidence differs from the approved state.",
  ],
  [
    "Risk priority",
    "The fictional importance assigned to a finding using scope, sensitivity, privilege, duration, exposure, likelihood, and business impact.",
  ],
  [
    "Compensating control",
    "A temporary fictional safeguard used when the preferred access-control improvement cannot be completed immediately.",
  ],
  [
    "Remediation owner",
    "The accountable fictional person or team responsible for correcting, validating, monitoring, and closing a finding.",
  ],
  [
    "Residual risk",
    "The fictional risk that remains after approved remediation and validation are complete.",
  ],
  [
    "Closure criteria",
    "The exact fictional technical, business, monitoring, ownership, and evidence conditions required to close a finding.",
  ],
  [
    "Evidence appendix",
    "A traceable fictional index connecting report conclusions to source records, timestamps, event IDs, owners, and limitations.",
  ],
];

const evidencePackets = [
  {
    packet: "Packet A: Identity inventory",
    records:
      "Fictional account identifiers, account types, owners, managers, departments, service purposes, creation dates, expiration dates, status, and last review.",
    question:
      "Which accounts are active, temporary, dormant, privileged, service based, shared, emergency, duplicated, or unowned?",
  },
  {
    packet: "Packet B: Authentication evidence",
    records:
      "Fictional password results, MFA challenges, factor changes, device trust, sign-in policy, recovery, remembered sessions, and step-up events.",
    question:
      "Which authentication events meet the required assurance, and which require more evidence?",
  },
  {
    packet: "Packet C: Authorization evidence",
    records:
      "Fictional direct permissions, groups, nested groups, roles, resource shares, application-local roles, attributes, policies, and access decisions.",
    question:
      "What is the effective access for each important identity-resource-action combination?",
  },
  {
    packet: "Packet D: Privileged-access evidence",
    records:
      "Fictional privileged requests, approvals, administrative accounts, devices, MFA, role activations, sessions, actions, targets, expiration, and post-use review.",
    question:
      "Is privilege narrow, time limited, independently approved, monitored, and completely removed after use?",
  },
  {
    packet: "Packet E: Lifecycle evidence",
    records:
      "Fictional joiner, mover, leaver, temporary-access, suspension, reactivation, ownership-transfer, recertification, and deprovisioning events.",
    question:
      "Does the current technical state match the approved lifecycle state across every system?",
  },
  {
    packet: "Packet F: Monitoring evidence",
    records:
      "Fictional alerts, raw events, timestamps, correlation IDs, sessions, devices, role changes, application actions, source-health records, analyst notes, and owner confirmation.",
    question:
      "Which alerts represent expected activity, correct policy enforcement, false positives, suspicious patterns, confirmed issues, or evidence gaps?",
  },
  {
    packet: "Packet G: Business evidence",
    records:
      "Fictional job functions, application owners, resource owners, project dates, service dependencies, approvals, support records, expected workflows, and sensitivity labels.",
    question:
      "Which technical access paths are still required for a current approved purpose?",
  },
  {
    packet: "Packet H: Validation evidence",
    records:
      "Fictional positive tests, negative tests, session refresh, role expiration, application-local cleanup, service health, owner acceptance, monitoring, and closure records.",
    question:
      "Did the correction preserve required work, remove unnecessary access, and remain effective after sessions and applications refreshed?",
  },
];

const reviewDomains = [
  {
    domain: "Identity and account ownership",
    questions:
      "Does every fictional user, service, application, privileged, emergency, temporary, shared, and dormant account have a valid purpose and accountable owner?",
    evidence:
      "Inventory, sponsor, manager, service owner, application owner, lifecycle record, and recertification decision.",
    commonFindings:
      "Orphaned service accounts, shared identities, duplicate accounts, dormant access, missing sponsors, and stale ownership.",
  },
  {
    domain: "Authentication assurance",
    questions:
      "Do fictional factors, devices, sessions, recovery, remembered access, and step-up requirements match account and resource sensitivity?",
    evidence:
      "Sign-in logs, MFA, factor registration, recovery, device records, session state, policy result, and owner confirmation.",
    commonFindings:
      "Weak recovery, unexpected MFA, stale registered devices, remembered sessions, and incomplete post-reset session cleanup.",
  },
  {
    domain: "Authorization and effective access",
    questions:
      "Do fictional roles, groups, direct grants, nested groups, resource shares, application-local permissions, and policy conditions match approved need?",
    evidence:
      "Role catalog, group membership, permission records, access requests, application decisions, resource owners, and policy logs.",
    commonFindings:
      "Excessive direct grants, inherited access, local-role gaps, stale project permissions, conflicting policies, and missing attributes.",
  },
  {
    domain: "Privileged access",
    questions:
      "Are fictional administrative identities separate, named, narrowly scoped, time limited, independently approved, monitored, and fully de-elevated?",
    evidence:
      "Request, approval, administrative account, device, MFA, role activation, session, action, target, expiration, and post-use review.",
    commonFindings:
      "Standing privilege, shared administration, self-approval, broad service privilege, unowned emergency accounts, and stale sessions.",
  },
  {
    domain: "Account lifecycle",
    questions:
      "Do fictional joiner, mover, leaver, temporary, suspension, reactivation, and ownership changes update every account, role, session, device, application, and resource?",
    evidence:
      "Lifecycle event, approvals, directory changes, local application changes, session actions, resource transfer, and owner validation.",
    commonFindings:
      "Privilege accumulation, missed expiration, local-access remnants, unrevoked sessions, dormant accounts, and incomplete ownership transfer.",
  },
  {
    domain: "Monitoring and evidence quality",
    questions:
      "Are fictional identity events complete, timely, correlated, understandable, retained, routed to owners, and tied to clear case decisions?",
    evidence:
      "Source health, event IDs, timestamps, correlation values, alerts, analyst notes, owner reports, validation, and closure.",
    commonFindings:
      "Missing application logs, stale baselines, incomplete IDs, unowned alerts, delayed ingestion, and unsupported conclusions.",
  },
];

const findings = [
  {
    id: "IAM-01",
    title: "Orphaned legacy service account",
    evidence:
      "Fictional service account svc-report-old retains read access to a retired reporting endpoint. No current application team claims ownership, and the last approved review is eleven months old.",
    impact:
      "A non-human identity remains usable without accountable ownership, current dependency evidence, or reliable credential and permission lifecycle.",
    priority:
      "High",
    owner:
      "Identity Governance and Reporting Application Team",
    recommendation:
      "Assign an investigation owner, identify dependencies, restrict source use, disable through approved change control, validate reporting, and remove after the observation period.",
  },
  {
    id: "IAM-02",
    title: "Mover privilege accumulation",
    evidence:
      "Fictional user training-mchen receives analytics-reviewers but retains student-services-editors and one application-local case-editor permission.",
    impact:
      "The account can access resources unrelated to the current role and retains an old editing capability.",
    priority:
      "High",
    owner:
      "Learning Analytics Owner and Student Services Owner",
    recommendation:
      "Remove former-role access, refresh sessions, transfer owned resources, validate analytics access, and verify former editing and export actions are denied.",
  },
  {
    id: "IAM-03",
    title: "Temporary privileged session outlives role",
    evidence:
      "A fictional service-operator role expires at 13:56, but an administrative application session retains privileged claims for two minutes.",
    impact:
      "The technical session remains more powerful than the current authorization state during the refresh gap.",
    priority:
      "High",
    owner:
      "Privileged Access Team and Application Owner",
    recommendation:
      "Revoke or refresh sessions automatically at role expiration, test related applications, and monitor de-elevation failures.",
  },
  {
    id: "IAM-04",
    title: "Recovery leaves an old factor registered",
    evidence:
      "A fictional account completes approved device replacement, but the lost phone remains listed as a valid factor and two remembered sessions remain active.",
    impact:
      "Old factor and session paths may continue after the owner believes recovery is complete.",
    priority:
      "High",
    owner:
      "Identity Support and Account Owner",
    recommendation:
      "Remove and verify the old factor, revoke unconfirmed sessions, validate the new factor, review recent sign-ins, and monitor.",
  },
  {
    id: "IAM-05",
    title: "Broad report administrator granted for view need",
    evidence:
      "A fictional request approves report-view for thirty days, but the implemented role allows view, edit, export, and configuration.",
    impact:
      "The account has capabilities beyond the approved business purpose even though no misuse is recorded.",
    priority:
      "Medium",
    owner:
      "Reporting Resource Owner",
    recommendation:
      "Replace report-admin with report-viewers, refresh sessions, validate report viewing, verify edit and configuration are denied, and confirm expiration.",
  },
  {
    id: "IAM-06",
    title: "Restricted child folder inherits broad access",
    evidence:
      "A fictional project group is approved for the main workspace but can open a restricted child folder through parent inheritance.",
    impact:
      "Resource-level access exceeds the approved boundary.",
    priority:
      "Medium",
    owner:
      "Project Resource Owner",
    recommendation:
      "Create the approved child-resource restriction, refresh sessions, test main access, verify child denial, and monitor alternate paths.",
  },
  {
    id: "IAM-07",
    title: "Dormant account monitoring alert lacks context",
    evidence:
      "A fictional dormant account reactivation produces a high-severity alert, but the initial case view omits the approved project request and owner confirmation.",
    impact:
      "Analysts may overreact to approved activity or miss that the sensitive export was correctly denied.",
    priority:
      "Medium",
    owner:
      "Security Monitoring Team",
    recommendation:
      "Add lifecycle and owner context to the alert, preserve the denied-action evidence, tune the baseline carefully, and document classification logic.",
  },
  {
    id: "IAM-08",
    title: "Emergency account review is overdue",
    evidence:
      "A fictional break-glass account has named owners and alerting but has not completed a scheduled safe test or credential-rotation review.",
    impact:
      "The organization cannot confirm that emergency access will work correctly or remain protected when needed.",
    priority:
      "Medium",
    owner:
      "Identity Operations Leadership",
    recommendation:
      "Conduct an approved safe test, verify alerting and storage, review permissions, rotate authentication material if required, and document results.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Confirm scope and evidence",
    detail:
      "List the fictional identities, systems, applications, resources, time range, owners, and source records included in the review.",
  },
  {
    step: "2",
    title: "Build the approved-state model",
    detail:
      "Document the fictional business purpose, account type, role, permissions, duration, device, session, owner, and lifecycle expectation.",
  },
  {
    step: "3",
    title: "Calculate the current state",
    detail:
      "Trace authentication, groups, roles, direct grants, local access, privilege, sessions, factors, resources, and monitoring evidence.",
  },
  {
    step: "4",
    title: "Write and prioritize findings",
    detail:
      "Separate confirmed facts, conclusions, alternatives, evidence gaps, impact, priority, and accountable owners.",
  },
  {
    step: "5",
    title: "Remediate and validate",
    detail:
      "Use narrow approved changes, preserve prior state, prepare rollback, refresh sessions, and test required and denied actions.",
  },
  {
    step: "6",
    title: "Monitor and close",
    detail:
      "Confirm owner acceptance, related-system review, monitoring, residual risk, due dates, and evidence-based closure criteria.",
  },
];


const remediationPlan = [
  {
    finding: "IAM-01 Orphaned service account",
    immediateAction:
      "Assign a fictional investigation owner, restrict the account to its known source workload, and preserve current usage and dependency evidence.",
    permanentAction:
      "Disable through approved change control, observe for service impact, remove the unused permission and identity, and update the service inventory.",
    rollback:
      "Re-enable only through documented owner approval if a validated dependency fails during the observation window.",
    validation:
      "Confirm approved reports continue, the account cannot authenticate or access the retired endpoint, and no alternate identity depends on the old permission.",
  },
  {
    finding: "IAM-02 Mover privilege accumulation",
    immediateAction:
      "Preserve old and new access records, remove former department roles and local permissions, and refresh affected sessions.",
    permanentAction:
      "Add old-state versus new-state comparison to mover workflows and require both former and new resource-owner review.",
    rollback:
      "Restore only the exact former permission through a time-limited approved exception if a documented transition task remains.",
    validation:
      "Confirm analytics viewing and comments work while former case editing, record export, and project shares are denied.",
  },
  {
    finding: "IAM-03 Privileged session outlives role",
    immediateAction:
      "Revoke the fictional administrative session when the temporary role expires and preserve role, session, application, and action evidence.",
    permanentAction:
      "Connect privileged-role expiration to application-session revocation and add a de-elevation monitoring alert.",
    rollback:
      "Issue a new narrow elevation through the approved request path rather than restoring the stale session.",
    validation:
      "Confirm the approved task completed, the role is absent, old sessions cannot perform privileged actions, and unrelated actions remain denied.",
  },
  {
    finding: "IAM-04 Old factor remains after recovery",
    immediateAction:
      "Remove the fictional lost-device factor, revoke unconfirmed sessions, and review surrounding sign-ins and recovery records.",
    permanentAction:
      "Require factor removal and session review as mandatory recovery closure steps.",
    rollback:
      "Re-register a factor only after approved owner verification and device validation.",
    validation:
      "Confirm the replacement factor works, the old factor cannot authenticate, unconfirmed sessions are invalid, and required applications remain available.",
  },
  {
    finding: "IAM-05 Broad report role",
    immediateAction:
      "Replace fictional report-admin with report-viewers and refresh the application session.",
    permanentAction:
      "Add approved-action comparison and negative permission tests to the access-provisioning workflow.",
    rollback:
      "Restore only the exact owner-approved action if business validation identifies a missing requirement.",
    validation:
      "Confirm report viewing succeeds while editing, export administration, configuration, and role management remain denied.",
  },
  {
    finding: "IAM-06 Unsafe resource inheritance",
    immediateAction:
      "Apply the approved fictional restriction to the sensitive child folder and refresh affected sessions.",
    permanentAction:
      "Add inheritance-boundary tests to project workspace creation and access recertification.",
    rollback:
      "Restore the prior permission only if the resource owner changes the approved sensitivity boundary through a documented request.",
    validation:
      "Confirm the main workspace remains available and the restricted child folder has no direct, inherited, share, local, or session access path.",
  },
  {
    finding: "IAM-07 Monitoring context gap",
    immediateAction:
      "Attach the fictional lifecycle approval, role, owner confirmation, application denial, and session evidence to the monitoring case.",
    permanentAction:
      "Enrich dormant-account alerts with current lifecycle, owner, role, and approved-duration context.",
    rollback:
      "Return to the prior alert format if enrichment causes ingestion failure while preserving the underlying raw events.",
    validation:
      "Confirm analysts can distinguish approved reactivation from correctly denied sensitive actions and that no alert coverage is lost.",
  },
  {
    finding: "IAM-08 Overdue emergency-account review",
    immediateAction:
      "Assign a fictional test owner and schedule an approved non-disruptive emergency-access validation.",
    permanentAction:
      "Enforce periodic ownership, storage, permission, alerting, safe-test, rotation, and post-use review requirements.",
    rollback:
      "Use the documented secondary recovery path if the emergency account fails the safe test.",
    validation:
      "Confirm the account authenticates only under approved conditions, alerts route correctly, permissions are narrow, and review evidence is complete.",
  },
];

const validationMatrix = [
  {
    validation: "Required access",
    question:
      "Can each fictional identity still complete the exact approved business or service action after remediation?",
    example:
      "training-mchen can view and comment on the analytics dashboard.",
    evidence:
      "Application decision, session, role, resource, owner confirmation, and expected workflow result.",
  },
  {
    validation: "Removed access",
    question:
      "Are fictional old, excessive, privileged, local, inherited, or unrelated actions denied?",
    example:
      "training-mchen cannot edit Student Services cases or export student records.",
    evidence:
      "Negative application event, effective-access calculation, refreshed session, and owner-approved scope.",
  },
  {
    validation: "Session alignment",
    question:
      "Do fictional active and remembered sessions reflect current account, role, factor, device, and lifecycle state?",
    example:
      "The expired service-operator role cannot continue through an older administrative session.",
    evidence:
      "Session inventory, revocation, refresh, new decision, and denied privileged action.",
  },
  {
    validation: "Factor lifecycle",
    question:
      "Do fictional registered factors and recovery methods match current ownership and approved devices?",
    example:
      "The lost phone is removed and the approved replacement factor works.",
    evidence:
      "Factor inventory, removal record, registration record, owner validation, and sign-in test.",
  },
  {
    validation: "Application-local access",
    question:
      "Do fictional local application roles, shares, owners, and permissions match central governance decisions?",
    example:
      "The former case-editor permission is removed inside the application.",
    evidence:
      "Application role record, local access list, session refresh, denied action, and owner confirmation.",
  },
  {
    validation: "Resource ownership",
    question:
      "Do fictional reports, folders, services, groups, applications, and approval queues have current accountable owners?",
    example:
      "Student Services reports transfer to the approved successor owner.",
    evidence:
      "Before-and-after owner records, successor access, notifications, and original-owner removal.",
  },
  {
    validation: "Monitoring coverage",
    question:
      "Do fictional identity, role, factor, session, privilege, application, and lifecycle events reach the expected monitoring and case systems?",
    example:
      "Role expiration and privileged-session revocation appear in the monitoring timeline.",
    evidence:
      "Source health, ingestion timestamps, event IDs, alert route, case link, and reviewer confirmation.",
  },
  {
    validation: "Business acceptance",
    question:
      "Do fictional resource, application, service, identity, and process owners accept the final technical state?",
    example:
      "The reporting owner confirms view access works and administrative actions remain unnecessary.",
    evidence:
      "Owner statement, workflow test, exception record, due date, residual risk, and closure approval.",
  },
];

const reportSections = [
  {
    section: "1. Executive summary",
    requiredContent:
      "Fictional purpose, scope, most important findings, highest priorities, major improvements, unresolved evidence gaps, and residual risk.",
  },
  {
    section: "2. Scope and safety boundary",
    requiredContent:
      "Fictional identities, systems, applications, resources, time range, evidence sources, exclusions, privacy protections, and authorized defensive limitations.",
  },
  {
    section: "3. Identity and account inventory",
    requiredContent:
      "Fictional user, service, application, privileged, temporary, emergency, shared, dormant, disabled, and orphaned account summary with ownership.",
  },
  {
    section: "4. Authentication review",
    requiredContent:
      "Fictional passwords, MFA, factors, devices, recovery, remembered sessions, step-up, assurance findings, and evidence limitations.",
  },
  {
    section: "5. Authorization review",
    requiredContent:
      "Fictional roles, groups, direct permissions, inheritance, local access, policies, effective-access examples, and least-privilege findings.",
  },
  {
    section: "6. Privileged-access review",
    requiredContent:
      "Fictional administrative identities, standing privilege, temporary elevation, emergency access, separation of duties, sessions, actions, and de-elevation.",
  },
  {
    section: "7. Lifecycle and access-review findings",
    requiredContent:
      "Fictional joiner, mover, leaver, temporary, dormant, suspension, ownership, recertification, session, and resource-transfer results.",
  },
  {
    section: "8. Monitoring and evidence quality",
    requiredContent:
      "Fictional log sources, timelines, event IDs, correlations, alert classifications, source-health findings, case ownership, and evidence gaps.",
  },
  {
    section: "9. Prioritized remediation roadmap",
    requiredContent:
      "Finding ID, priority, owner, immediate action, permanent action, dependency, due date, rollback, validation, and status.",
  },
  {
    section: "10. Validation and residual risk",
    requiredContent:
      "Fictional positive tests, negative tests, session and factor validation, monitoring, owner acceptance, exceptions, remaining risk, and closure criteria.",
  },
  {
    section: "11. Evidence appendix",
    requiredContent:
      "Traceable fictional source ID, timestamp, system, account, session, event, owner, related finding, limitation, and preservation note.",
  },
];

const mistakes = [
  "Writing a fictional identity review from alert titles or dashboard summaries without preserving raw evidence.",
  "Combining authentication success, physical identity, intent, authorization, and business approval into one unsupported conclusion.",
  "Listing roles without calculating direct, inherited, nested, resource, application-local, policy, and session-based effective access.",
  "Treating accounts with no recent use as harmless even when they retain active permissions, factors, or sessions.",
  "Recommending broad account deletion or privilege removal without checking dependencies, required workflows, owners, and rollback.",
  "Correcting a central role while ignoring local application access, resource ownership, remembered sessions, and registered devices.",
  "Assigning every finding to the identity team when application, resource, service, manager, or monitoring owners are responsible for parts of the correction.",
  "Using priority labels without explaining privilege, sensitivity, scope, duration, exposure, evidence, ownership, and business impact.",
  "Closing a finding after one successful test while skipping denied actions, session refresh, related systems, monitoring, and owner validation.",
  "Hiding evidence gaps or writing a confident cause when the fictional records support only a possible explanation.",
  "Including unnecessary personal data, real credentials, tokens, session values, addresses, screenshots, or internal architecture.",
  "Producing a report with no due dates, accountable owners, rollback, residual risk, or evidence-based closure criteria.",
];


const quizQuestions = [
  {
    question:
      "What is the strongest purpose of an integrated identity and access review?",
    choices: [
      "To compare the fictional approved state with current authentication, authorization, lifecycle, privilege, session, ownership, and monitoring evidence.",
      "To list every username without interpreting access.",
      "To grant administrator access to simplify testing.",
      "To replace all business owners with the identity team.",
    ],
    answer: 0,
    explanation:
      "An integrated review connects technical and business evidence to determine whether current access is correct, owned, monitored, and validated.",
  },
  {
    question:
      "Which statement is a confirmed fact?",
    choices: [
      "The fictional temporary privileged role expired at 13:56 according to the role record.",
      "The physical administrator definitely intended every later action.",
      "The application session was malicious because it remained active briefly.",
      "The owner approved every action because the role existed.",
    ],
    answer: 0,
    explanation:
      "A confirmed fact should be directly supported by preserved evidence without adding unsupported intent or attribution.",
  },
  {
    question:
      "Why should a remediation plan include positive and negative tests?",
    choices: [
      "To confirm required fictional work still succeeds while removed or unrelated access is denied.",
      "To expose real credentials.",
      "To keep every session active.",
      "To avoid involving resource owners.",
    ],
    answer: 0,
    explanation:
      "Both directions are required to prove that a correction is narrow and effective.",
  },
  {
    question:
      "Which finding should generally receive higher priority?",
    choices: [
      "An active, unowned fictional service identity with standing access to a sensitive resource.",
      "A correctly denied view request with complete owner approval.",
      "A closed low-risk issue with validated removal.",
      "A fictional training account with no permissions.",
    ],
    answer: 0,
    explanation:
      "Active exposure, missing ownership, standing access, and sensitive resources increase priority.",
  },
  {
    question:
      "What is residual risk?",
    choices: [
      "The fictional risk that remains after approved remediation and validation are complete.",
      "Every risk that existed before review.",
      "A password stored in a report.",
      "A role that has never been assigned.",
    ],
    answer: 0,
    explanation:
      "Residual risk documents remaining limitations, dependencies, monitoring gaps, or delayed improvements after treatment.",
  },
  {
    question:
      "Why is an evidence appendix important?",
    choices: [
      "It connects fictional report conclusions to specific source records, timestamps, owners, and limitations.",
      "It replaces all report analysis.",
      "It stores real passwords for future testing.",
      "It removes the need for validation.",
    ],
    answer: 0,
    explanation:
      "Traceability allows another reviewer to understand and verify how each conclusion was reached.",
  },
  {
    question:
      "Which closure plan is strongest?",
    choices: [
      "Confirm remediation, positive and negative tests, session and factor state, monitoring, owner acceptance, residual risk, and documented evidence.",
      "Close the finding when the change ticket says completed.",
      "Close after one dashboard turns green.",
      "Close without assigning an owner or due date.",
    ],
    answer: 0,
    explanation:
      "Professional closure requires technical, business, monitoring, ownership, and evidence conditions.",
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
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Module Test
      </Link>
    </div>
  );
}

function EvidencePacketGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Packets
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Packets for the Integrated Lab
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {evidencePackets.map((item) => (
          <div
            key={item.packet}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.packet}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.records}
            </p>

            <div className="mt-4 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.question}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewDomainGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Review Domains
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Six Domains That Must Be Reviewed Together
      </h2>

      <div className="mt-6 grid gap-5">
        {reviewDomains.map((item) => (
          <div
            key={item.domain}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.domain}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Review questions
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.questions}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Common findings
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.commonFindings}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FindingGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Findings
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Findings with Owners and Narrow Recommendations
      </h2>

      <div className="mt-6 grid gap-5">
        {findings.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                {item.id}
              </span>
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-200">
                {item.priority} Priority
              </span>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.impact}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Owner
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.owner}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Recommendation
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RemediationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Remediation Roadmap
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Connect Every Finding to Action, Rollback, and Validation
      </h2>

      <div className="mt-6 grid gap-5">
        {remediationPlan.map((item) => (
          <div
            key={item.finding}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.finding}</h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                  Immediate action
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.immediateAction}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Permanent action
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.permanentAction}
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Rollback
                </p>
                <p className="mt-2 text-sm leading-6 text-purple-50">
                  {item.rollback}
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Validation
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.validation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValidationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Validation Matrix
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways to Prove the Final State
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {validationMatrix.map((item) => (
          <div
            key={item.validation}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.validation}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.question}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Fictional example
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.example}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Portfolio Report Structure
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Eleven Sections for the Final Deliverable
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reportSections.map((item) => (
          <div
            key={item.section}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.section}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.requiredContent}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkflowGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Integrated Workflow
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Complete the Identity Review in Six Steps
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {item.step}
            </div>
            <h3 className="mt-4 font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function IdentityAndAccessManagementLabPage() {
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
              Lesson 8 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I6.8 Identity and Access Management Lab
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Integrate fictional accounts, authentication, authorization,
            permissions, privileged access, lifecycle, sessions, ownership,
            monitoring, findings, remediation, validation, and residual risk
            into one professional Identity and Access Review Report.
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
          lessonTitle="Identity and Access Management Lab"
          lessonNumber={8}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can distinguish fictional identity, account, authentication, authorization, permission, role, session, privilege, lifecycle, and monitoring evidence.",
            "I will separate confirmed facts, reasonable conclusions, alternatives, tool interpretations, owner statements, and evidence gaps.",
            "I will calculate effective access across direct, inherited, nested, role, resource, local, policy, and session paths.",
            "I will propose narrow owner-approved remediation with rollback, positive tests, negative tests, monitoring, and closure criteria.",
            "I will use only fictional accounts, devices, systems, resources, logs, owners, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Strong IAM Review Explains the Whole Access Story"
        >
          <p className="leading-8">
            A role list alone does not show effective access. A sign-in alone
            does not prove the physical person. A disabled account alone does
            not prove every session ended. A completed change alone does not
            prove the business workflow still works. This lab connects all
            available evidence into one traceable defensive report.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak report
              </p>
              <p className="mt-2 leading-7">
                “Several accounts look risky. Remove access and close the
                tickets.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong report
              </p>
              <p className="mt-2 leading-7">
                “Connect each finding to evidence, owner, approved state,
                current state, impact, priority, narrow correction, rollback,
                validation, monitoring, and residual risk.”
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Identity Controls Depend on One Another"
        >
          <p className="leading-8">
            Authentication can be strong while authorization is excessive.
            Least privilege can be correct while a remembered session remains
            active. A mover workflow can add the correct role while retaining
            an old local permission. Monitoring can identify a real pattern but
            omit the owner-approved lifecycle context. Integrated analysis
            prevents one control from hiding another control’s weakness.
          </p>
        </SectionCard>

        <EvidencePacketGuide />
        <ReviewDomainGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Compare Approved State, Current State, and Proven Final State"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Approved state",
                "Which fictional identity, account, role, action, resource, device, duration, owner, and purpose should exist?",
              ],
              [
                "Current state",
                "Which authentication, permissions, sessions, factors, applications, resources, and ownership relationships actually exist?",
              ],
              [
                "Difference",
                "Which access is excessive, stale, missing, unowned, inherited, local, privileged, or evidence incomplete?",
              ],
              [
                "Correction",
                "Which narrow owner-approved change fixes the difference without breaking required work?",
              ],
              [
                "Proven final state",
                "Which positive, negative, session, factor, resource, monitoring, and owner evidence supports closure?",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <FindingGuide />
        <RemediationGuide />
        <ValidationGuide />
        <ReportGuide />
        <WorkflowGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Integrated Identity Review Terms
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Integrated Identity and Access Review Dashboard"
          subtitle="Training dashboard for the fictional Northstar Learning Services IAM review."
          metrics={[
            {
              label: "Identities reviewed",
              value: "20",
              note: "Standard, privileged, service, application, temporary, emergency, shared, dormant, and orphaned identities.",
            },
            {
              label: "Findings",
              value: "8",
              note: "Four high-priority and four medium-priority identity, access, lifecycle, session, recovery, resource, emergency, and monitoring findings.",
            },
            {
              label: "Validation actions",
              value: "32",
              note: "Required-access, denied-access, session, factor, application-local, ownership, monitoring, and business-acceptance checks.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple IAM Findings Share One Root Governance Gap"
          severity="High"
          time="04:10 PM"
          source="Fake Integrated Identity Review Console"
          details="A fictional mover retains old access, an orphaned service account has no owner, a privileged session outlives role expiration, and a monitoring alert lacks lifecycle context. Each technical issue is different, but all four show incomplete ownership and closure evidence."
          recommendation="Assign accountable technical and business owners, preserve source evidence, correct each access path narrowly, validate sessions and applications, improve lifecycle and monitoring workflows, and track residual risk through documented closure criteria."
        />

        <FakeLogPanel
          title="Fake Integrated Review Evidence Timeline"
          logs={[
            "DAY1 INVENTORY identities='20' applications='9' service_accounts='6'",
            "DAY2 FINDING id='IAM-01' type='orphaned_service_account' priority='high'",
            "DAY3 FINDING id='IAM-02' type='mover_privilege_accumulation' priority='high'",
            "DAY4 FINDING id='IAM-03' type='privileged_session_gap' priority='high'",
            "DAY5 FINDING id='IAM-04' type='old_factor_after_recovery' priority='high'",
            "DAY6 FINDING id='IAM-05' type='excessive_report_role' priority='medium'",
            "DAY7 FINDING id='IAM-06' type='unsafe_resource_inheritance' priority='medium'",
            "DAY8 FINDING id='IAM-07' type='monitoring_context_gap' priority='medium'",
            "DAY9 FINDING id='IAM-08' type='emergency_review_overdue' priority='medium'",
            "DAY12 REMEDIATION high_priority='in_progress' owners='assigned'",
            "DAY16 VALIDATION required_access='pass' denied_access='pass'",
            "DAY17 VALIDATION sessions='pass' factors='pass' local_access='pass'",
            "DAY20 MONITORING related_findings='none_new'",
            "DAY30 REVIEW residual_risk='documented' closures='approved'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Integrated IAM Conclusion Is Best Supported?"
          evidence={[
            "A fictional mover retains one former central role and one local application permission.",
            "The new role and required analytics workflow are approved.",
            "A temporary privileged role expires, but an application session remains active briefly.",
            "A service account retains access without a current owner.",
            "A recovery event leaves an old factor registered.",
            "Required-access tests succeed after narrow remediation.",
            "Old, unrelated, privileged, and lost-factor paths are denied after validation.",
            "Owners accept the final state and residual monitoring work is documented.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The environment has several distinct IAM control gaps, but evidence-based narrow remediation can preserve required work while correcting ownership, lifecycle, session, factor, and access problems.",
            "Every account should be deleted because several findings exist.",
            "Successful MFA proves all identity activity is safe.",
            "The review can close before owners and validation confirm the final state.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports multiple specific control findings and a controlled remediation approach rather than broad disruption or unsupported certainty."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken the Final IAM Report"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Integrated Safe Lab"
          title="Produce the Northstar Identity and Access Review Report"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Forty-Eight Correlated IAM Records
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review fictional identities, sign-ins, MFA, factors, devices,
                sessions, roles, groups, direct permissions, resource shares,
                local application access, privileged elevation, lifecycle,
                recovery, monitoring, owners, approvals, validation, and
                source-health records.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Define scope, systems, identities, time range, evidence sources, exclusions, and safety boundary.</li>
                <li>Build an identity and account inventory with account types, owners, status, purpose, and review dates.</li>
                <li>Calculate effective access for the highest-risk subject-resource-action combinations.</li>
                <li>Write at least eight findings with evidence, impact, priority, owner, and recommendation.</li>
                <li>Create a remediation roadmap with immediate action, permanent action, rollback, due date, and dependencies.</li>
                <li>Run positive, negative, session, factor, local-access, ownership, monitoring, and business validation.</li>
                <li>Document evidence gaps, confidence, exceptions, residual risk, and closure criteria.</li>
                <li>Build an evidence appendix linking every conclusion to fictional source records.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real accounts,
            request passwords or MFA codes, change roles, disable identities,
            revoke live sessions, test real authentication, enter
            administrative consoles, inspect private data, or publish real
            users, devices, addresses, sessions, resources, screenshots, or
            internal IAM architecture.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="An Orphaned Service Account May Support an Unknown Dependency"
          scenario="A fictional service account has no active owner but still records occasional reads from a retired reporting endpoint. The team cannot immediately prove whether one legacy report depends on it."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve usage, permission, source, application, owner, and dependency evidence; assign an investigation owner; restrict the source; disable through approved change control; observe and validate reports; then remove if no approved dependency appears.",
              outcome:
                "Best defensive choice. The account is controlled and investigated without blindly retaining or deleting it.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep the account permanently because ownership is unknown.",
              outcome:
                "Unsafe. Missing ownership requires controlled investigation and a deadline.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete the account immediately without preserving evidence or checking reports.",
              outcome:
                "Risky. The evidence supports a controlled disable-and-validate process.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Finding Is Technically Fixed but Business Validation Is Missing"
          scenario="A fictional excessive report role is reduced, sessions are refreshed, and administrative actions are denied. The resource owner has not yet confirmed that the required monthly reporting workflow still works."
          choices={[
            {
              label: "Choice A",
              response:
                "Keep the finding open, preserve the technical validation, obtain owner confirmation of the required workflow, document any exception or residual risk, and close only when the defined criteria are complete.",
              outcome:
                "Best defensive choice. Technical correction and business acceptance are both required.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Close the finding because the administrator page is denied.",
              outcome:
                "Incomplete. Required business function has not been validated.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Restore the broad administrator role before asking the owner.",
              outcome:
                "Unsafe. The narrow role should be tested against the approved workflow first.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Integrated Identity and Access Management Checklist"
          items={[
            "I define the fictional scope, systems, applications, identities, resources, time range, exclusions, owners, and safety boundary.",
            "I inventory user, service, application, privileged, temporary, emergency, shared, dormant, disabled, duplicate, and orphaned accounts.",
            "I review authentication, factors, devices, recovery, sessions, roles, groups, permissions, resources, local access, privilege, lifecycle, and monitoring together.",
            "I distinguish confirmed facts, reasonable conclusions, alternative explanations, tool interpretations, owner statements, and evidence gaps.",
            "I calculate effective access across direct, inherited, nested, role, resource, local, policy, exception, and session paths.",
            "I prioritize findings using privilege, sensitivity, scope, duration, ownership, active exposure, business impact, and control dependency.",
            "I assign accountable technical and business owners, due dates, dependencies, and escalation paths.",
            "I use narrow remediation with preserved prior state, rollback, positive tests, negative tests, session and factor validation, and monitoring.",
            "I document business acceptance, related-system review, exceptions, residual risk, source limitations, and closure criteria.",
            "I use only fictional evidence and never publish real credentials, identities, devices, sessions, resources, screenshots, or internal IAM architecture.",
          ]}
        />

        <MiniQuiz
          title="I6.8 Mini Quiz: Identity and Access Management Lab"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a complete fictional Identity and Access Review Report using at least forty-eight identity, account, authentication, factor, device, session, role, group, permission, resource, application-local, privileged-access, lifecycle, recovery, monitoring, owner, approval, validation, and source-health records. Include scope, safety boundary, inventory, effective-access calculations, at least eight findings, prioritization, owners, remediation roadmap, rollback, positive and negative tests, session and factor validation, monitoring, evidence appendix, residual risk, and closure criteria."
          tips={[
            "Use only fictional identities, accounts, devices, applications, resources, sessions, owners, approvals, logs, and organizations.",
            "Include at least one orphaned service identity, mover-access gap, privileged-session gap, recovery-factor gap, broad role, inheritance issue, monitoring-context issue, and emergency-account review.",
            "Link each finding to source IDs and clearly separate facts, conclusions, alternatives, and limitations.",
            "Do not include real names, credentials, codes, tokens, account IDs, device IDs, addresses, session values, screenshots, or internal IAM architecture.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Integrated IAM review connects identity, authentication, authorization, privilege, lifecycle, sessions, ownership, monitoring, and business purpose.",
            "Approved state, current state, correction, and proven final state must remain traceable to fictional evidence.",
            "Findings should explain evidence, impact, priority, owner, recommendation, rollback, validation, and residual risk.",
            "Narrow remediation protects required work while removing unnecessary or stale access.",
            "Technical success alone is not closure; business owners, monitoring, sessions, factors, applications, and resources must confirm the final state.",
            "A professional evidence appendix makes conclusions transparent, reviewable, privacy preserving, and defensible.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete Module I6
          </h2>
          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}