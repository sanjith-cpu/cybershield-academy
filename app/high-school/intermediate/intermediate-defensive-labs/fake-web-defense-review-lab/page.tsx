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
const modulePath = `${trackPath}/intermediate-defensive-labs`;
const previousLesson = `${modulePath}/fake-iam-permission-review-lab`;
const nextLesson = `${modulePath}/fake-cloud-misconfiguration-review-lab`;

const objectives = [
  "Define a fictional web-defense review scope covering application, service, identity, route, request type, data classification, business owner, change window, approved evidence, privacy limits, and decision authority.",
  "Evaluate fictional web alerts, access records, authentication events, application behavior, configuration, security headers, source health, business context, and change records without probing or testing real websites.",
  "Distinguish fictional warning signs, direct observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and defensive disposition.",
  "Choose proportionate fictional defensive actions such as monitor, validate, tune, harden, roll back, restrict, coordinate, escalate, or close with documented rationale.",
  "Create a portfolio-safe fictional web-defense review package with an evidence register, request timeline, control matrix, findings, owner communication, validation, metrics, and improvement recommendations."
];
const vocabulary = [
  [
    "Web application",
    "A fictional browser-accessible service that processes requests, identities, sessions, business actions, or data."
  ],
  [
    "Route",
    "A fictional application path or endpoint that accepts a particular type of request or performs a defined function."
  ],
  [
    "Request method",
    "A fictional operation such as viewing, submitting, updating, or deleting data through an approved application path."
  ],
  [
    "Session",
    "A fictional authenticated or anonymous interaction state maintained between a user and a web application."
  ],
  [
    "Security header",
    "A fictional response setting that helps browsers apply defensive behavior around content, framing, transport, or resource loading."
  ],
  [
    "Input validation",
    "A fictional defensive process that checks whether supplied data matches expected type, length, format, range, and context before processing."
  ],
  [
    "Output encoding",
    "A fictional defensive process that renders data safely for the destination context so it is not interpreted as active content."
  ],
  [
    "Authentication event",
    "A fictional sign-in, sign-out, token, session, challenge, failure, or account state recorded by an approved identity source."
  ],
  [
    "Authorization check",
    "A fictional control that decides whether an authenticated identity may perform a requested action on a resource."
  ],
  [
    "Configuration baseline",
    "A fictional approved set of application, server, platform, routing, header, logging, and access settings."
  ],
  [
    "Web alert",
    "A fictional detection signal produced from request, application, identity, network, configuration, or source-health evidence."
  ],
  [
    "False positive",
    "A fictional alert that matched the detection logic but did not represent the harmful behavior the rule intended to identify."
  ],
  [
    "False negative",
    "A fictional harmful condition that the defensive logic failed to identify."
  ],
  [
    "Rate limit",
    "A fictional control that restricts repeated requests over time to reduce abuse, overload, or automated misuse."
  ],
  [
    "Effective control state",
    "The fictional defensive condition that actually exists after configuration, inherited settings, platform defaults, exceptions, and deployment state are combined."
  ],
  [
    "Web-defense finding",
    "A fictional evidence-limited conclusion about application behavior, control state, risk, ownership, action, validation, and residual uncertainty."
  ]
];
const webRecords = [
  {
    "id": "NBR-WEB-01",
    "record": "A fictional login route generated sixty failed sign-in requests from one source description in ten minutes.",
    "source": "Web gateway and identity service",
    "health": "Healthy",
    "context": "The requests targeted one fictional test account that is disabled.",
    "control": "Rate limiting triggered after the twentieth request.",
    "owner": "Identity Owner and Web Service Owner",
    "risk": "Automated sign-in abuse is plausible, but account compromise is not supported.",
    "decision": "Retain the rate limit, review the detection threshold, and monitor for distributed patterns.",
    "limit": "The supplied source description is fictional and no real address is included."
  },
  {
    "id": "NBR-WEB-02",
    "record": "A fictional search field received unusual encoded characters during an approved quality-assurance test.",
    "source": "Application audit and test register",
    "health": "Healthy",
    "context": "The named tester, change window, test case, and route match the approved plan.",
    "control": "Input validation rejected the request and returned a safe error.",
    "owner": "Application Owner and QA Owner",
    "risk": "The alert represents expected defensive testing.",
    "decision": "Close as authorized testing and use the event as a positive control-validation example.",
    "limit": "The test proves the supplied case was rejected, not that every possible input is safe."
  },
  {
    "id": "NBR-WEB-03",
    "record": "A fictional account-settings route allowed a support role to view a page intended for managers.",
    "source": "Application authorization log",
    "health": "Healthy",
    "context": "The support role should view user status but not manager-only settings.",
    "control": "The page loaded, but the supplied record shows no setting change.",
    "owner": "Application Owner and Access Control Owner",
    "risk": "Authorization design is broader than documented business need.",
    "decision": "Restrict the route, test role behavior, review related permissions, and validate no wider exposure.",
    "limit": "Viewing is supported; modification and data disclosure beyond the page are unconfirmed."
  },
  {
    "id": "NBR-WEB-04",
    "record": "A fictional application response omitted one approved browser-security header after a deployment.",
    "source": "Configuration monitor",
    "health": "Healthy",
    "context": "The missing header began immediately after a documented release.",
    "control": "Other required headers remained present.",
    "owner": "Web Platform Owner",
    "risk": "One browser-side defense is weakened.",
    "decision": "Restore the baseline through the approved deployment process and verify across routes.",
    "limit": "No exploitation or user impact is confirmed."
  },
  {
    "id": "NBR-WEB-05",
    "record": "A fictional file-upload route accepted a document type outside the approved list in a staging environment.",
    "source": "Staging application audit",
    "health": "Healthy",
    "context": "The event occurred during an approved regression test and no production upload is shown.",
    "control": "The file was stored in an isolated fictional test location and not executed.",
    "owner": "Application Owner and Secure Development Owner",
    "risk": "The validation rule does not match the approved design.",
    "decision": "Correct the validation logic, test positive and negative cases, and confirm production is unaffected.",
    "limit": "The supplied evidence does not show production exposure or execution."
  },
  {
    "id": "NBR-WEB-06",
    "record": "A fictional administrator session remained active after the documented sign-out event.",
    "source": "Identity session record and application audit",
    "health": "Healthy with one delayed field",
    "context": "The user closed the browser after sign-out, but the application session expired twelve minutes later.",
    "control": "No additional administrative action is recorded during the remaining session.",
    "owner": "Identity Owner and Application Owner",
    "risk": "Session termination does not meet the approved immediate-revocation expectation.",
    "decision": "Correct session invalidation and validate sign-out behavior across privileged roles.",
    "limit": "Session persistence is confirmed; misuse during the interval is not."
  },
  {
    "id": "NBR-WEB-07",
    "record": "A fictional public information route produced a high number of requests during a scheduled school event.",
    "source": "Web gateway, event calendar, and service metrics",
    "health": "Healthy",
    "context": "Request volume matches the event time and approved public audience.",
    "control": "Service performance remained within target and no restricted route was involved.",
    "owner": "Web Service Owner",
    "risk": "The volume is high but appears expected.",
    "decision": "Close as expected demand and refine the alert to include route and event context.",
    "limit": "The conclusion applies only to the supplied route and time window."
  },
  {
    "id": "NBR-WEB-08",
    "record": "A fictional configuration change enabled detailed error messages on one production route.",
    "source": "Configuration history and application response monitor",
    "health": "Healthy",
    "context": "The change was made outside the approved release window.",
    "control": "The response exposed fictional framework and component names but no credentials.",
    "owner": "Application Owner and Web Platform Owner",
    "risk": "Unnecessary technical detail may improve an attacker's understanding of the service.",
    "decision": "Restore safe error handling, review the change, and validate related routes.",
    "limit": "No exploitation or sensitive-data disclosure is confirmed."
  },
  {
    "id": "NBR-WEB-09",
    "record": "A fictional content-security policy report showed one blocked external script after a new analytics integration.",
    "source": "Browser-security report collector",
    "health": "Delayed but complete",
    "context": "The script belongs to an approved fictional analytics supplier, but its source is not in the current allowlist.",
    "control": "The browser policy blocked the script and the page continued to function.",
    "owner": "Application Owner and Supplier Owner",
    "risk": "The integration is incomplete; broad allowlisting could weaken the control.",
    "decision": "Validate the supplier source and add only the minimum approved directive if needed.",
    "limit": "The blocked script is not proven harmful."
  },
  {
    "id": "NBR-WEB-10",
    "record": "A fictional password-reset route returned different messages for known and unknown usernames.",
    "source": "Application behavior test",
    "health": "Healthy",
    "context": "The behavior occurred in production during an approved defensive review using fictional test identities.",
    "control": "Rate limiting remained active.",
    "owner": "Identity Owner and Application Owner",
    "risk": "Response differences may reveal whether an account exists.",
    "decision": "Standardize responses, preserve rate limiting, and validate user-support requirements.",
    "limit": "No account misuse or user targeting is confirmed."
  }
];
const reviewQuestions = [
  {
    "question": "What exact application behavior is directly supported?",
    "strong": "Record the fictional route, method, identity, session, source, time, response, control state, and business action.",
    "weak": "Repeat the alert title without identifying what occurred.",
    "review": "Which evidence field supports each claimed behavior?"
  },
  {
    "question": "Was the activity expected or authorized?",
    "strong": "Compare fictional change, test, maintenance, campaign, event, supplier, and business records.",
    "weak": "Assume unusual behavior is harmful or approved activity is safe.",
    "review": "Which owner and record confirm the context?"
  },
  {
    "question": "Did the control operate as designed?",
    "strong": "Evaluate fictional validation, authorization, session, header, rate-limit, error-handling, upload, logging, and browser-policy outcomes.",
    "weak": "Treat the presence of any control as proof of complete protection.",
    "review": "What passed, what failed, and what remains untested?"
  },
  {
    "question": "What is the effective control state?",
    "strong": "Combine fictional code behavior, platform settings, inherited configuration, deployment version, exception, and route-specific results.",
    "weak": "Rely only on the written baseline.",
    "review": "What configuration actually reached the application?"
  },
  {
    "question": "What impact is confirmed?",
    "strong": "Separate fictional page view, modification, access, disclosure, execution, account state, service degradation, and blocked activity.",
    "weak": "Treat possible impact as confirmed.",
    "review": "Which source proves the impact occurred?"
  },
  {
    "question": "Which alternate explanation fits the evidence?",
    "strong": "Test fictional quality assurance, maintenance, public demand, supplier integration, misconfiguration, user error, automation, and abuse hypotheses.",
    "weak": "Choose the most dramatic explanation first.",
    "review": "What evidence would strengthen or weaken each explanation?"
  },
  {
    "question": "Which action is proportionate?",
    "strong": "Choose fictional monitoring, tuning, hardening, rollback, restriction, owner review, supplier validation, case escalation, or closure.",
    "weak": "Shut down the entire application for every alert.",
    "review": "What is the least disruptive action that reduces risk and uncertainty?"
  },
  {
    "question": "How will the result be validated?",
    "strong": "Confirm fictional route behavior, role access, session state, headers, validation, service function, source health, owner signoff, and residual risk.",
    "weak": "Close the case when the alert stops.",
    "review": "What evidence proves the intended defensive state exists?"
  }
];
const controlMatrix = [
  {
    "control": "Authentication",
    "purpose": "Confirm the fictional identity and sign-in state before protected actions.",
    "evidence": "Identity events, session records, challenge results, sign-out behavior, and account status.",
    "failure": "A protected route accepts an unauthenticated or invalid session.",
    "validation": "Test approved positive and negative fictional cases and review source health."
  },
  {
    "control": "Authorization",
    "purpose": "Restrict fictional actions and data to identities with approved business need.",
    "evidence": "Role map, route decision, group membership, effective access, owner approval, and action result.",
    "failure": "A support role reaches a manager-only route.",
    "validation": "Test role boundaries and confirm no inherited path remains."
  },
  {
    "control": "Input validation",
    "purpose": "Reject fictional data that does not match expected format, type, length, range, or context.",
    "evidence": "Request record, validation result, safe error, test case, and application response.",
    "failure": "A staging upload accepts an unapproved document type.",
    "validation": "Run approved positive, negative, boundary, missing-field, and malformed-input tests."
  },
  {
    "control": "Output handling",
    "purpose": "Render fictional data and errors without exposing unnecessary detail or active content.",
    "evidence": "Application response, template behavior, error settings, and browser result.",
    "failure": "Detailed production errors reveal framework and component names.",
    "validation": "Confirm safe errors across relevant routes and deployment states."
  },
  {
    "control": "Session management",
    "purpose": "Create, rotate, expire, and revoke fictional sessions according to approved security expectations.",
    "evidence": "Sign-in, token, sign-out, session, privileged action, and expiration records.",
    "failure": "A privileged session remains active after sign-out.",
    "validation": "Test sign-out, timeout, revocation, role change, and recovery scenarios."
  },
  {
    "control": "Rate limiting",
    "purpose": "Reduce fictional automated abuse, repeated requests, overload, or enumeration.",
    "evidence": "Request counts, threshold, block action, identity context, route, and service impact.",
    "failure": "Repeated requests continue without control or legitimate users are blocked excessively.",
    "validation": "Test allowed, threshold, distributed, recovery, and business-volume conditions."
  },
  {
    "control": "Browser-security headers",
    "purpose": "Guide fictional browser defenses around content, framing, transport, and external resources.",
    "evidence": "Response headers, route coverage, deployment version, baseline, and browser report.",
    "failure": "A required header is missing after deployment.",
    "validation": "Check representative routes, error pages, redirects, and content types."
  },
  {
    "control": "Logging and monitoring",
    "purpose": "Provide fictional evidence for requests, identities, sessions, decisions, changes, failures, and source health.",
    "evidence": "Application audit, gateway records, identity events, configuration history, alerts, and source monitor.",
    "failure": "A critical route is not logged or a source arrives too late for reliable triage.",
    "validation": "Confirm delivery, parsing, completeness, timeliness, coverage, ownership, and alert operation."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Define the web-review scope",
    "detail": "Identify fictional application, route, identity, service, request type, data, time window, owners, approved evidence, privacy, authority, and decisions.",
    "output": "Web-defense review charter."
  },
  {
    "step": "2",
    "title": "Inventory and validate evidence",
    "detail": "List fictional gateway, application, identity, configuration, source-health, change, test, supplier, and business records with health and limits.",
    "output": "Evidence register."
  },
  {
    "step": "3",
    "title": "Reconstruct request and control behavior",
    "detail": "Normalize fictional request, authentication, authorization, application, response, collection, alert, owner, and validation times.",
    "output": "Request and control timeline."
  },
  {
    "step": "4",
    "title": "Compare approved context",
    "detail": "Review fictional testing, maintenance, deployment, event, supplier, role, route, and business-process records.",
    "output": "Context matrix."
  },
  {
    "step": "5",
    "title": "Write findings and impact limits",
    "detail": "Document fictional observations, conclusions, alternatives, missing evidence, confidence, potential impact, confirmed impact, and scope.",
    "output": "Findings matrix."
  },
  {
    "step": "6",
    "title": "Choose and authorize actions",
    "detail": "Assign fictional tuning, hardening, rollback, restriction, monitoring, supplier, identity, application, risk, or response actions with deadlines.",
    "output": "Action and escalation plan."
  },
  {
    "step": "7",
    "title": "Validate defensive outcomes",
    "detail": "Confirm fictional route behavior, effective access, session state, headers, validation, error handling, service function, source health, and residual risk.",
    "output": "Validation record."
  },
  {
    "step": "8",
    "title": "Close and improve",
    "detail": "Complete fictional peer review, closure criteria, secure-development feedback, detection tuning, runbook, training, metrics, supplier, and governance improvements.",
    "output": "Closure and improvement package."
  }
];
const findings = [
  {
    "id": "NBR-WEB-F01",
    "statement": "The fictional repeated login failures represent plausible automated sign-in abuse, but account compromise is not supported.",
    "support": "Sixty failures, one source description, ten-minute window, disabled test account, healthy identity records, and successful rate limiting.",
    "alternative": "A misconfigured test or monitoring tool could create similar activity.",
    "confidence": "Medium-High",
    "impact": "Abuse attempts are supported; successful sign-in and account takeover are unconfirmed.",
    "next": "Retain the control, monitor for distribution, review thresholds, and validate test context."
  },
  {
    "id": "NBR-WEB-F02",
    "statement": "The fictional search-field alert is authorized quality-assurance testing and the input-validation control operated correctly.",
    "support": "Matching tester, route, time, test case, approved plan, rejected request, and safe error.",
    "alternative": "A copied request outside the approved test may exist but is not shown.",
    "confidence": "High",
    "impact": "No application compromise or harmful execution is supported.",
    "next": "Close the alert and preserve it as control-validation evidence."
  },
  {
    "id": "NBR-WEB-F03",
    "statement": "The fictional support role has excessive access to a manager-only route.",
    "support": "Healthy authorization log, documented role design, successful page view, and no approved exception.",
    "alternative": "The route documentation may be outdated.",
    "confidence": "High",
    "impact": "Unauthorized page view is supported; setting modification and wider disclosure are unconfirmed.",
    "next": "Restrict the route, test roles, review related entitlements, and validate effective access."
  },
  {
    "id": "NBR-WEB-F04",
    "statement": "The fictional missing security header is a confirmed baseline deviation caused by the recent deployment.",
    "support": "Healthy configuration monitor, deployment timing, route response, approved baseline, and continued presence of other headers.",
    "alternative": "A route-specific exception may exist but is not documented.",
    "confidence": "High",
    "impact": "One browser-side defense is weakened; exploitation is unconfirmed.",
    "next": "Restore the header and validate route coverage."
  },
  {
    "id": "NBR-WEB-F05",
    "statement": "The fictional privileged sign-out behavior does not meet the approved immediate session-revocation expectation.",
    "support": "Sign-out record, continuing session state, twelve-minute expiration delay, privileged role, and no further actions.",
    "alternative": "The delayed field may overstate the exact active interval.",
    "confidence": "Medium-High",
    "impact": "Session persistence is supported; misuse is unconfirmed.",
    "next": "Correct invalidation and test sign-out, timeout, role-change, and recovery behavior."
  },
  {
    "id": "NBR-WEB-F06",
    "statement": "The fictional detailed production error response requires rollback and secure error handling.",
    "support": "Outside-window configuration change, healthy response monitor, framework detail exposure, and no approved exception.",
    "alternative": "The route may have been temporarily enabled for urgent support.",
    "confidence": "High",
    "impact": "Technical detail exposure is confirmed; exploitation and credential disclosure are unconfirmed.",
    "next": "Restore safe errors, review the change, and validate related routes."
  }
];
const commonMistakes = [
  "Probing, scanning, testing, or interacting with real websites or applications without explicit authorization.",
  "Treating a fictional web alert as proof of compromise.",
  "Assuming approved testing means every observed action is safe.",
  "Assuming a blocked request proves the application is secure against every variation.",
  "Treating high request volume as harmful without route, event, audience, and service context.",
  "Treating page access as proof of data modification or disclosure.",
  "Treating a missing header as proof of exploitation.",
  "Broadly allowlisting a supplier script without validating the minimum required source and directive.",
  "Disabling rate limits because legitimate users experienced one alert.",
  "Closing a session issue because no misuse was observed.",
  "Using only the written baseline instead of validating the effective deployed state.",
  "Ignoring source delays, missing fields, route coverage, or configuration inheritance.",
  "Changing production controls without the correct application, platform, identity, service, risk, or emergency authority.",
  "Using or exposing real credentials, employee data, school records, company URLs, private applications, source code, logs, suppliers, incidents, or confidential web-security information."
];
const quizQuestions = [
  {
    "question": "What is the safest basis for a fictional web-defense finding?",
    "choices": [
      "Correlated route, identity, request, response, control, source-health, business-context, and validation evidence.",
      "The alert title alone.",
      "The most dramatic possible impact.",
      "A copied technical term."
    ],
    "answer": 0,
    "explanation": "A defensible finding connects the full evidence and decision chain."
  },
  {
    "question": "What does a fictional blocked unusual input prove?",
    "choices": [
      "The supplied test case was rejected, but every possible input is not automatically proven safe.",
      "The application is completely secure.",
      "A real attacker was present.",
      "No further testing is needed."
    ],
    "answer": 0,
    "explanation": "One successful control result has a limited scope."
  },
  {
    "question": "How should the fictional support-role access issue be handled?",
    "choices": [
      "Restrict the manager-only route, test related roles, review effective access, and validate no wider exposure.",
      "Disable every support user.",
      "Report confirmed data theft.",
      "Ignore it because no setting changed."
    ],
    "answer": 0,
    "explanation": "The response should correct the authorization gap without overstating impact."
  },
  {
    "question": "What does a missing fictional browser-security header prove?",
    "choices": [
      "A baseline deviation and weakened browser-side defense, not automatic exploitation.",
      "A confirmed incident.",
      "Credential theft.",
      "Application unavailability."
    ],
    "answer": 0,
    "explanation": "Control weakness and exploitation are separate conclusions."
  },
  {
    "question": "Why should a fictional privileged session be reviewed after sign-out?",
    "choices": [
      "The approved expectation requires prompt invalidation, and persistent access creates unnecessary capability.",
      "Every delayed session is malicious.",
      "Sign-out events are never trustworthy.",
      "The user should retain the session for convenience."
    ],
    "answer": 0,
    "explanation": "Session termination should match the approved defensive design."
  },
  {
    "question": "What is the safest response to a blocked fictional supplier analytics script?",
    "choices": [
      "Validate the supplier source and add only the minimum approved policy change if needed.",
      "Allow every supplier domain.",
      "Disable the browser policy.",
      "Declare the script malicious."
    ],
    "answer": 0,
    "explanation": "The blocked integration requires narrow validation rather than broad allowlisting."
  },
  {
    "question": "When is a fictional web-defense review complete?",
    "choices": [
      "After the intended route, access, session, configuration, control, service, source-health, owner, residual-risk, and follow-up states are validated.",
      "When the alert disappears.",
      "When one owner replies.",
      "When a configuration ticket closes."
    ],
    "answer": 0,
    "explanation": "Completion requires validation of the actual defensive outcome."
  }
];

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Previous Lesson</Link>
      <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">Back to Module</Link>
      <Link href={nextLesson} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Next Lesson</Link>
    </div>
  );
}

export default function FakeWebDefenseReviewLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.17),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Intermediate</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module I16</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Lesson 4 of 8</span>
          </div>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">I16.4 Fake Web Defense Review Lab</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">Review fictional web alerts, application behavior, access decisions, sessions, validation, security headers, configuration, source health, business context, and defensive controls without probing or testing real websites.</p>
          <div className="mt-8"><Navigation /></div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar track="High School Intermediate" moduleTitle="I16: Intermediate Defensive Labs" lessonTitle="Fake Web Defense Review Lab" lessonNumber={4} totalLessons={8} />

        <ReadinessCheck title="Before You Start" items={[
          "I will use only the supplied fictional Northbridge applications, routes, identities, sessions, requests, responses, configurations, sources, changes, owners, and decisions.",
          "I will not probe, scan, test, access, or interact with real websites, applications, accounts, routes, systems, or private data.",
          "I will not request or expose real credentials, employee data, school records, company URLs, source code, logs, suppliers, incidents, or confidential web-security information.",
          "I will distinguish warning signs, observations, supported conclusions, alternate explanations, missing evidence, potential impact, confirmed impact, confidence, and defensive disposition.",
          "I will create only defensive, fictional, privacy-safe, and portfolio-safe artifacts.",
        ]} />

        <SectionCard eyebrow="Professional Hook" title="A Control Weakness Is Not the Same as a Confirmed Exploit">
          <p className="leading-8">A fictional deployment removed one browser-security header from a production route. The deviation is real and should be corrected, but no exploitation or user impact is supported. Professional web defense separates control condition, possible exposure, confirmed behavior, confirmed impact, owner authority, and validation.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">Weak web review</p><p className="mt-2 leading-7">Treat every alert as compromise, test the live site without authorization, shut down broadly, ignore business context, and close when the alert disappears.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100"><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Professional web review</p><p className="mt-2 leading-7">Define scope, validate evidence, reconstruct behavior, compare approved context, assess controls, act proportionately, validate outcomes, and improve.</p></div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => <div key={objective} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Objective {index + 1}</p><p className="mt-3 font-semibold leading-7">{objective}</p></div>)}
        </section>

        <SectionCard eyebrow="Why This Matters" title="Web Defenders Must Protect Both Security and Service Function"><p className="leading-8">Fictional web alerts may come from legitimate testing, public demand, automated abuse, role design, deployment mistakes, integration changes, session behavior, or application defects. Strong review corrects real weaknesses without creating unsupported incident claims or unnecessary service disruption.</p></SectionCard>

        <SectionCard eyebrow="Core Concept" title="Use the Route–Identity–Control–Context–Validation Model">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Route", "Which fictional application path, request type, data, response, service, and business action are involved?"],
              ["Identity", "Which fictional user, role, session, supplier, public client, application identity, or test identity performed the action?"],
              ["Control", "Which fictional authentication, authorization, validation, output, session, rate-limit, header, logging, and configuration controls applied?"],
              ["Context", "Which fictional test, maintenance, deployment, event, supplier, role, and business records explain or challenge the activity?"],
              ["Validation", "Which fictional route behavior, access state, session result, configuration, service function, source health, owner signoff, and residual risk prove the outcome?"],
            ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"><p className="font-black text-blue-100">{title}</p><p className="mt-2 text-sm leading-6">{detail}</p></div>)}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Vocabulary</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Web Defense and Application-Evidence Terms</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{vocabulary.map(([term, definition]) => <article key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="font-black text-cyan-100">{term}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{definition}</p></article>)}</div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Web Evidence Register</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Ten Fictional Northbridge Web Records</h2>
          <div className="mt-6 grid gap-5">{webRecords.map((item) => <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><h3 className="text-lg font-black text-white">{item.record}</h3><span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-purple-200">{item.health}</span></div><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Source",item.source],["Business context",item.context],["Control state",item.control],["Owner",item.owner],["Risk",item.risk],["Decision",item.decision],["Evidence limit",item.limit]].map(([label,detail]) => <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Review Questions</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Questions before Final Disposition</h2>
          <div className="mt-6 grid gap-5">{reviewQuestions.map((item) => <article key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.question}</h3><div className="mt-4 grid gap-4 lg:grid-cols-3"><div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Strong review</p><p className="mt-2 text-sm leading-6">{item.strong}</p></div><div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak review</p><p className="mt-2 text-sm leading-6">{item.weak}</p></div><div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50"><p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">Reviewer question</p><p className="mt-2 text-sm leading-6">{item.review}</p></div></div></article>)}</div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Control Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Fictional Web Defense Controls</h2>
          <div className="mt-6 grid gap-5">{controlMatrix.map((item) => <article key={item.control} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><h3 className="text-lg font-black text-cyan-100">{item.control}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Purpose",item.purpose],["Evidence",item.evidence],["Failure example",item.failure],["Validation",item.validation]].map(([label,detail]) => <div key={`${item.control}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Web Review Workflow</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Eight Steps from Scope to Improvement</h2>
          <div className="mt-6 grid gap-4">{workflow.map((item) => <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.12fr_0.45fr_1fr_0.75fr]"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{item.step}</span><h3 className="font-black text-cyan-100">{item.title}</h3><p className="text-sm leading-6 text-slate-300">{item.detail}</p><p className="text-sm leading-6 text-emerald-100"><span className="font-black text-emerald-200">Output: </span>{item.output}</p></article>)}</div>
        </section>

        <FakeDashboardCard title="Fake Northbridge Web Defense Dashboard" subtitle="Training dashboard for fictional application evidence only." metrics={[
          { label: "Web records reviewed", value: "10", note: "Authentication, authorization, validation, session, header, upload, rate-limit, error, and supplier-integration evidence are represented." },
          { label: "Control corrections required", value: "6", note: "Authorization, header, upload validation, session invalidation, error handling, and response consistency require action." },
          { label: "Confirmed exploitation", value: "0", note: "The fictional evidence supports control weaknesses and corrective work but no confirmed exploitation." },
        ]} />

        <FakeAlertCard title="Manager-Only Route Was Visible to a Support Role" severity="High" time="9:14 PM" source="Fake Northbridge Web Defense Console" details="A fictional support role successfully viewed a manager-only account-settings route. The supplied evidence shows no setting modification, wider data disclosure, or account compromise." recommendation="Restrict the route, review related role mappings and inherited access, test positive and negative authorization cases, validate effective access, notify the application and access owners, and preserve that confirmed impact is limited to page visibility." />

        <FakeLogPanel title="Fake Northbridge Web Review Timeline" logs={[
          "18:00 LOGIN failures='60'",
          "18:04 RATE-LIMIT threshold='triggered'",
          "18:12 QA input-test='approved'",
          "18:13 VALIDATION request='rejected'",
          "18:26 AUTHZ support-role='manager-route-view'",
          "18:34 HEADER baseline='missing-one'",
          "18:42 UPLOAD staging-type='outside-list'",
          "18:50 SESSION signout='received'",
          "19:02 SESSION privileged='expired'",
          "19:10 EVENT public-route-volume='expected'",
          "19:18 ERROR detail='enabled-outside-window'",
          "19:26 CSP supplier-script='blocked'",
          "19:34 RESET response-difference='confirmed'",
          "19:42 ACTION route-restriction='planned'",
          "19:50 ACTION header-restore='approved'",
          "20:00 VALIDATION status='pending'",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Findings Matrix</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Six Fictional Web Findings with Confidence and Limits</h2>
          <div className="mt-6 grid gap-5">{findings.map((item) => <article key={item.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">{item.id}</span><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-200">{item.confidence}</span></div><h3 className="mt-4 text-lg font-black text-white">{item.statement}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Evidence support",item.support],["Alternate explanation",item.alternative],["Impact statement",item.impact],["Next action",item.next]].map(([label,detail]) => <div key={`${item.id}-${label}`} className="rounded-xl border border-slate-700 bg-slate-900 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p></div>)}</div></article>)}</div>
        </section>

        <AnalyzeEvidenceCard title="Did the Support Role's Page View Confirm Data Theft?" evidence={[
          "The fictional support role should not access the manager-only route.",
          "The authorization log shows the page loaded.",
          "No approved exception is recorded.",
          "No setting modification is shown.",
          "No wider data disclosure is shown.",
          "No account compromise is confirmed.",
        ]} question="Which conclusion is strongest?" options={[
          "An authorization gap and unauthorized page view are confirmed, while modification, wider disclosure, and data theft remain unconfirmed.",
          "The page view proves data theft.",
          "No action is required because no setting changed.",
          "Every support identity should be disabled.",
        ]} bestAnswer={0} explanation="The strongest conclusion preserves the confirmed control failure and the limits of the supplied impact evidence." />

        <SectionCard eyebrow="Common Mistakes" title="Mistakes That Weaken Fictional Web Defense Reviews"><div className="grid gap-3 md:grid-cols-2">{commonMistakes.map((mistake) => <div key={mistake} className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">{mistake}</div>)}</div></SectionCard>

        <SectionCard eyebrow="Safe Practice Lab" title="Build the Northbridge Fake Web Defense Review Package">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Your fictional assignment</p><h3 className="mt-3 text-xl font-black text-white">Routes, Identities, Controls, Findings, Actions, and Validation</h3><p className="mt-3 leading-7 text-slate-300">Use only the supplied fictional Northbridge web records to create a complete, evidence-limited defensive review.</p></div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50"><p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">Required deliverables</p><ol className="mt-3 list-decimal space-y-2 pl-5 leading-7"><li>Web-defense review charter with application, route, identity, service, request, data, owners, privacy, authority, and deadlines.</li><li>Evidence register covering gateway, application, identity, configuration, source health, change, test, supplier, and business records.</li><li>Request and control timeline with event, collection, alert, owner, action, and validation times.</li><li>Control matrix for authentication, authorization, validation, output, session, rate limiting, headers, logging, and configuration.</li><li>Findings with evidence, alternatives, confidence, potential impact, confirmed impact, limitations, owners, and actions.</li><li>Hardening, tuning, rollback, restriction, supplier, monitoring, communication, and escalation plan.</li><li>Validation, closure criteria, metrics, secure-development feedback, detection improvements, and residual risk.</li><li>Technical summary, leadership summary, reflection, and portfolio-safety statement.</li></ol></div>
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">Complete the lab only with fictional evidence displayed on this page. Do not probe, scan, test, access, or interact with real websites, applications, accounts, routes, systems, or private data.</div>
        </SectionCard>

        <ScenarioDecisionLab title="The Team Wants to Shut Down the Entire Application" scenario="The fictional review confirms one authorization gap and one missing header, but service function remains healthy and no exploitation is confirmed." choices={[
          { label: "Choice A", response: "Restrict the affected route, restore the header, review related controls, monitor, validate, and escalate only if broader exposure or impact is supported.", outcome: "Best web-defense choice. Real weaknesses are corrected without unnecessary service disruption.", tone: "best" },
          { label: "Choice B", response: "Shut down the entire application immediately.", outcome: "Overbroad. The supplied evidence supports targeted corrections.", tone: "risk" },
          { label: "Choice C", response: "Ignore both findings because no exploitation is confirmed.", outcome: "Unsafe. Control weaknesses still require correction.", tone: "risk" },
        ]} />

        <ScenarioDecisionLab title="An Approved Supplier Script Is Blocked by Browser Policy" scenario="The fictional analytics integration is approved, the browser control blocked the script, and the page remained functional." choices={[
          { label: "Choice A", response: "Validate the exact supplier source and required functionality, then add only the minimum approved policy change if necessary and test the result.", outcome: "Best integration choice. The control is changed narrowly and with evidence.", tone: "best" },
          { label: "Choice B", response: "Allow every source used by the supplier.", outcome: "Unsafe. Broad allowlisting weakens the control unnecessarily.", tone: "risk" },
          { label: "Choice C", response: "Declare the supplier script malicious.", outcome: "Unsupported. The script is blocked but not proven harmful.", tone: "risk" },
        ]} />

        <DefenderChecklist title="Fake Web Defense Review Checklist" items={[
          "I can define a fictional web-review scope covering application, route, identity, service, request, data, owners, privacy, authority, and deadlines.",
          "I can evaluate fictional gateway, application, identity, configuration, source-health, change, test, supplier, and business records.",
          "I can distinguish fictional control weakness, attempted behavior, blocked behavior, successful behavior, potential impact, confirmed impact, and exploitation evidence.",
          "I can review fictional authentication, authorization, validation, output, session, rate-limit, header, logging, and configuration controls.",
          "I can compare fictional web alerts with approved test, maintenance, deployment, event, supplier, role, and business context.",
          "I can choose fictional monitor, tune, harden, roll back, restrict, coordinate, escalate, or close decisions proportionately.",
          "I can assign fictional application, platform, identity, supplier, service, data, risk, communication, and response owners correctly.",
          "I can validate fictional route behavior, effective access, session state, configuration, service function, source health, owner signoff, and residual risk.",
          "I can improve fictional secure-development feedback, detection logic, runbooks, deployment checks, supplier review, training, metrics, and governance.",
          "I will use only fictional evidence and never expose real credentials, websites, applications, source code, employee data, school records, suppliers, incidents, or confidential information.",
        ]} />

        <MiniQuiz title="I16.4 Mini Quiz: Fake Web Defense Review Lab" questions={quizQuestions} />

        <PortfolioPrompt title="Portfolio Prompt" prompt="Create a fictional Fake Web Defense Review Package for Northbridge. Include the review charter, evidence register, request and control timeline, business-context matrix, control matrix, findings, owner map, hardening and tuning plan, rollback and restriction decisions, supplier review, communication record, validation, closure criteria, residual risk, metrics, secure-development improvements, leadership summary, technical summary, reflection, and a portfolio-safety statement." tips={[
          "Use only fictional applications, routes, requests, identities, sessions, configurations, sources, suppliers, owners, actions, dates, and outcomes.",
          "Do not probe, scan, test, or interact with any real website or application.",
          "Do not treat alerts, blocked requests, missing headers, page views, high volume, or source delay as automatic proof of compromise.",
          "Show how a confirmed control weakness can require correction while exploitation remains unconfirmed.",
        ]} />

        <KeyTakeaways takeaways={[
          "Web-defense review begins with exact route, identity, request, control, source, and business context.",
          "A control weakness is not the same as confirmed exploitation.",
          "Blocked activity proves only the supplied control result and test scope.",
          "Page access, modification, disclosure, and account compromise are separate impact levels.",
          "Effective deployed state matters more than the written baseline alone.",
          "Defensive actions should reduce risk without unnecessary service disruption.",
          "Portfolio artifacts should use fully fictional evidence and never expose real applications or private data.",
        ]} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Navigation</p><h2 className="mt-2 text-2xl font-bold text-white">Continue Module I16</h2><div className="mt-5"><Navigation /></div></section>
      </div>
      <Footer />
    </main>
  );
}