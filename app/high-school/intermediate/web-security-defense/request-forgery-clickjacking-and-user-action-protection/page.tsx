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
const modulePath = `${trackPath}/web-security-defense`;
const previousLesson = `${modulePath}/cross-site-scripting-and-browser-side-defense`;
const nextLesson = `${modulePath}/secure-headers-cookies-tls-and-configuration`;

const objectives = [
  "Explain how fictional authenticated browser state, cookies, origins, forms, links, frames, and user actions can combine to create request-forgery or clickjacking risk.",
  "Distinguish cross-site request forgery, clickjacking, open redirects, unsafe state-changing GET requests, confused-deputy behavior, and ordinary user error.",
  "Identify defensive controls such as anti-forgery tokens, SameSite cookies, origin and referer checks, reauthentication, confirmations, frame protections, and transaction review.",
  "Evaluate fictional browser, application, session, policy, user, and business evidence without creating harmful demonstrations or testing real sites.",
  "Create a professional fictional User Action Protection Review with findings, owners, remediation, validation, monitoring, and residual risk."
];

const vocabulary = [
  [
    "Cross-site request forgery",
    "A defensive category in which a fictional authenticated browser is caused to send an unintended state-changing request to another application."
  ],
  [
    "Clickjacking",
    "A defensive category in which a fictional user is visually misled into clicking or interacting with a hidden or disguised interface."
  ],
  [
    "Anti-forgery token",
    "A fictional unpredictable value tied to approved application state and validated by the server before sensitive requests are accepted."
  ],
  [
    "Origin",
    "A fictional combination of scheme, host, and port used by browsers and servers to describe where a request or page comes from."
  ],
  [
    "Referer",
    "A fictional request header that may identify the previous page or source location, subject to browser and privacy behavior."
  ],
  [
    "SameSite cookie",
    "A fictional cookie attribute that limits when browsers send the cookie from cross-site contexts."
  ],
  [
    "State-changing request",
    "A fictional request that creates, updates, deletes, approves, pays, shares, resets, enrolls, or otherwise changes application or business state."
  ],
  [
    "Reauthentication",
    "A fictional requirement to prove identity again before a sensitive action or after elevated risk."
  ],
  [
    "Confirmation step",
    "A fictional user-facing review that clearly states the action, target, amount, recipient, or permission before completion."
  ],
  [
    "Frame protection",
    "A fictional browser and server control that restricts whether a page may be embedded inside another page."
  ],
  [
    "Confused deputy",
    "A fictional condition where a trusted application performs an action using its authority after receiving an untrusted or misleading request."
  ],
  [
    "Idempotency",
    "A fictional design property that prevents duplicate submissions from creating repeated unintended business actions."
  ]
];

const threatPatterns = [
  {
    "pattern": "Cross-site form submission",
    "scenario": "A fictional user is signed in to the payroll portal while another page attempts to submit a change request to it.",
    "risk": "The browser may include session cookies even though the user did not intentionally use the payroll portal.",
    "strongDefense": "Anti-forgery token, SameSite cookie policy, origin checks, server-side authorization, and confirmation for sensitive changes.",
    "evidence": "Origin, cookie context, token result, route, session, user action, application decision, and system-of-record state."
  },
  {
    "pattern": "State-changing GET request",
    "scenario": "A fictional delete or approval action is triggered by following a link or loading an image-style URL.",
    "risk": "Browsers, crawlers, previews, and users may activate the action unintentionally.",
    "strongDefense": "Use appropriate non-GET methods, require anti-forgery validation, authorization, confirmation, and idempotent processing.",
    "evidence": "Method, route, request source, user session, action result, and database state."
  },
  {
    "pattern": "Hidden framed button",
    "scenario": "A fictional sensitive button is visually covered by another page element while the protected application is embedded underneath.",
    "risk": "The user may click an action they cannot clearly see or understand.",
    "strongDefense": "Frame-ancestors or equivalent protection, clear confirmation, reauthentication, and user-visible context.",
    "evidence": "Frame policy, parent origin, browser behavior, click coordinates, action route, and final result."
  },
  {
    "pattern": "Transparent overlay",
    "scenario": "A fictional page places an invisible or nearly invisible interface over a harmless-looking control.",
    "risk": "The user’s click can be redirected to a hidden application action.",
    "strongDefense": "Restrict framing, avoid sensitive single-click actions, require confirmation, and monitor unexpected framed use.",
    "evidence": "Browser DOM, frame tree, policy result, user report, action request, and application logs."
  },
  {
    "pattern": "Open redirect in trusted application",
    "scenario": "A fictional trusted portal accepts an arbitrary destination and sends users to an unapproved site.",
    "risk": "The trusted domain can be used to make deceptive navigation look legitimate.",
    "strongDefense": "Server-defined route names or exact destination allowlists with clear user confirmation.",
    "evidence": "Received destination, normalized host, allowlist decision, redirect response, browser navigation, and owner approval."
  },
  {
    "pattern": "Repeated or duplicate submission",
    "scenario": "A fictional payment or enrollment form is submitted twice because of retry behavior or repeated clicks.",
    "risk": "The same intended action may create duplicate business state.",
    "strongDefense": "Idempotency key, server-side duplicate detection, transaction state, confirmation, and visible completion status.",
    "evidence": "Request IDs, idempotency key, user, amount or object, transaction IDs, and final system state."
  },
  {
    "pattern": "Cross-origin API request",
    "scenario": "A fictional browser page from one origin attempts to call a protected API at another origin.",
    "risk": "Overbroad cross-origin configuration may expose sensitive responses or actions to unintended browser contexts.",
    "strongDefense": "Exact origin allowlists, narrow methods and headers, credential restrictions, anti-forgery controls, and authorization.",
    "evidence": "Origin, preflight, allowed origin, credentials mode, method, route, response, and application result."
  },
  {
    "pattern": "Misleading approval flow",
    "scenario": "A fictional user sees a generic Continue button without clear recipient, amount, permission, or effect.",
    "risk": "The user may approve an action without understanding the actual business consequence.",
    "strongDefense": "Explicit confirmation, trusted context, reauthentication, separation of duties, and transaction review.",
    "evidence": "Displayed confirmation, target, amount or scope, user action, approval chain, and system-of-record result."
  }
];

const protectionControls = [
  {
    "control": "Anti-forgery token",
    "purpose": "Require a fictional server-validated value tied to approved application state before accepting sensitive requests.",
    "benefit": "Helps distinguish requests created by the legitimate application flow from unrelated cross-site submissions.",
    "limitation": "Tokens must be unpredictable, validated correctly, scoped appropriately, and protected from unsafe rendering or leakage.",
    "validation": "Confirm approved requests succeed and requests with missing, invalid, reused, or mismatched tokens are denied safely."
  },
  {
    "control": "SameSite cookie policy",
    "purpose": "Limit when a fictional browser sends session cookies from cross-site contexts.",
    "benefit": "Reduces unintended authenticated requests from unrelated sites.",
    "limitation": "Required identity, payment, and integration flows may need carefully designed exceptions.",
    "validation": "Test approved same-site and cross-site workflows in supported browsers without weakening sensitive routes."
  },
  {
    "control": "Origin and referer validation",
    "purpose": "Compare the fictional request source with approved application origins for sensitive operations.",
    "benefit": "Adds server-side context about where the browser request came from.",
    "limitation": "Headers can be absent or affected by browser, proxy, and privacy behavior, so fallback design is required.",
    "validation": "Confirm approved origins work, unapproved origins are denied, and missing-header cases follow documented policy."
  },
  {
    "control": "Correct HTTP methods",
    "purpose": "Use fictional GET for retrieval and non-GET methods for state-changing actions.",
    "benefit": "Reduces accidental activation by links, crawlers, previews, and browser loading behavior.",
    "limitation": "Method choice alone does not provide anti-forgery or authorization protection.",
    "validation": "Confirm state-changing GET requests are rejected and approved methods still require all other controls."
  },
  {
    "control": "Sensitive-action confirmation",
    "purpose": "Show the fictional user the exact action, target, amount, recipient, permission, or data effect before completion.",
    "benefit": "Reduces hidden, misleading, accidental, and duplicate actions.",
    "limitation": "Generic confirmations can become meaningless if they do not show trusted details.",
    "validation": "Test that users can identify the real action and that canceling causes no state change."
  },
  {
    "control": "Reauthentication or step-up verification",
    "purpose": "Require fresh fictional identity proof before selected high-risk actions.",
    "benefit": "Limits the value of an unattended or older session.",
    "limitation": "It should be risk based and accessible without creating unnecessary friction or unsafe bypasses.",
    "validation": "Confirm normal low-risk actions remain usable and high-risk actions require fresh approved verification."
  },
  {
    "control": "Frame restrictions",
    "purpose": "Limit whether fictional pages may be embedded by other origins.",
    "benefit": "Reduces clickjacking and deceptive overlay opportunities.",
    "limitation": "Approved embedded workflows require exact, owned, and tested exceptions.",
    "validation": "Confirm sensitive pages cannot be framed by unapproved origins while required approved embeds still work."
  },
  {
    "control": "Idempotency and transaction state",
    "purpose": "Prevent fictional duplicate requests from creating repeated actions.",
    "benefit": "Protects payments, enrollments, approvals, and other high-impact workflows from retries and double clicks.",
    "limitation": "Keys, time windows, object scope, and final-state handling must be designed carefully.",
    "validation": "Submit safe duplicate test requests and confirm one intended business result."
  }
];

const corsReview = [
  {
    "area": "Allowed origins",
    "strongPattern": "Exact fictional application origins are listed and owned.",
    "weakPattern": "Any origin is reflected or a broad wildcard is used with sensitive access.",
    "evidence": "Origin, configuration, response header, application owner, and browser result.",
    "question": "Which exact browser applications need cross-origin access?"
  },
  {
    "area": "Credentials",
    "strongPattern": "Fictional credentialed requests are allowed only for approved origins and routes.",
    "weakPattern": "Credentials are allowed broadly without a precise origin and business need.",
    "evidence": "Credentials mode, cookie behavior, allowed-origin response, route, and session context.",
    "question": "Does the cross-origin request require user session state at all?"
  },
  {
    "area": "Methods",
    "strongPattern": "Only required fictional methods are allowed.",
    "weakPattern": "All methods are permitted by default.",
    "evidence": "Preflight request, allowed methods, route implementation, and application result.",
    "question": "Which operations are actually required by the approved client?"
  },
  {
    "area": "Headers",
    "strongPattern": "Only required fictional request headers are accepted.",
    "weakPattern": "Any header is allowed without review.",
    "evidence": "Requested headers, allowed headers, application parser, and security controls.",
    "question": "Could custom headers influence identity, tenant, role, or routing decisions?"
  },
  {
    "area": "Readable response",
    "strongPattern": "Only approved fictional response data is exposed to the calling origin.",
    "weakPattern": "Sensitive data is returned because the server assumes browser policy provides authorization.",
    "evidence": "Response fields, account, route, origin, authorization, and browser access result.",
    "question": "Would the same data be allowed if the request came from the approved application directly?"
  },
  {
    "area": "Preflight handling",
    "strongPattern": "Fictional preflight checks are consistent, narrow, cached safely, and tied to actual route behavior.",
    "weakPattern": "The preflight allows more than the real application intends.",
    "evidence": "OPTIONS request, response headers, cache duration, origin, method, and later request.",
    "question": "Does the preflight accurately describe the permitted action?"
  },
  {
    "area": "Error handling",
    "strongPattern": "Denied fictional origins receive safe responses without sensitive detail.",
    "weakPattern": "Errors reveal internal origin lists, routes, credentials, or stack details.",
    "evidence": "Response status, body category, internal log, request ID, and redaction result.",
    "question": "Can defenders investigate the denial without exposing internal details to the client?"
  },
  {
    "area": "Monitoring",
    "strongPattern": "Fictional cross-origin denials, unexpected origins, policy changes, and sensitive-route use are monitored.",
    "weakPattern": "No owner reviews broad origin changes or repeated denied requests.",
    "evidence": "Change record, event schema, dashboard, alert, owner, and review result.",
    "question": "Who owns the cross-origin policy and validates changes?"
  }
];

const evidenceMatrix = [
  {
    "source": "Browser request record",
    "supports": "The fictional origin, method, route, cookie context, headers, frame context, and user interaction.",
    "limitation": "Browser evidence may be incomplete and does not alone prove server acceptance or business impact."
  },
  {
    "source": "Application anti-forgery log",
    "supports": "The fictional token presence, match result, session binding, route, decision, and rejection reason.",
    "limitation": "A token pass does not replace authorization, confirmation, or transaction controls."
  },
  {
    "source": "Session and cookie metadata",
    "supports": "The fictional cookie attributes, issue time, scope, same-site behavior, session, account, and expiration.",
    "limitation": "Cookie metadata does not prove the user intended the request."
  },
  {
    "source": "Frame and content-policy record",
    "supports": "The fictional parent origin, embedding decision, frame restriction, browser violation, and page.",
    "limitation": "A frame-policy event does not by itself prove a user clicked or a protected action completed."
  },
  {
    "source": "Application authorization record",
    "supports": "The fictional account, role, resource, route, action, policy, result, and reason.",
    "limitation": "Authorization success does not prove clear user understanding or business approval."
  },
  {
    "source": "Transaction or database record",
    "supports": "The fictional object, amount, recipient, approval, transaction ID, commit, rollback, and final state.",
    "limitation": "The data layer may not explain how the browser request was initiated."
  },
  {
    "source": "User and owner report",
    "supports": "The fictional visible page, intended action, understood confirmation, expected workflow, and business consequence.",
    "limitation": "Human memory and interpretation require technical correlation."
  },
  {
    "source": "Code and configuration review",
    "supports": "The fictional token logic, origin policy, cookie settings, frame restrictions, method handling, confirmation, and idempotency design.",
    "limitation": "Review should be confirmed against deployed behavior and current application versions."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Identify sensitive actions",
    "detail": "List fictional create, update, delete, approve, pay, share, reset, enroll, export, and permission-changing operations."
  },
  {
    "step": "2",
    "title": "Map browser state",
    "detail": "Review fictional cookies, sessions, origins, frames, methods, forms, redirects, and cross-origin behavior."
  },
  {
    "step": "3",
    "title": "Review request protections",
    "detail": "Evaluate fictional anti-forgery tokens, SameSite settings, origin checks, authorization, and safe method design."
  },
  {
    "step": "4",
    "title": "Protect user intent",
    "detail": "Require fictional clear confirmation, trusted context, reauthentication, separation of duties, and idempotency where appropriate."
  },
  {
    "step": "5",
    "title": "Correlate impact",
    "detail": "Compare fictional browser, application, session, transaction, user, and business records before claiming completion or harm."
  },
  {
    "step": "6",
    "title": "Remediate and validate",
    "detail": "Apply narrow fictional fixes, test approved and denied flows, monitor, define rollback, and document residual risk."
  }
];

const investigationTimeline = [
  {
    "time": "15:10:01",
    "source": "Session",
    "event": "A fictional finance user is signed in to the approved invoice portal with a valid secure session.",
    "meaning": "Authenticated browser state exists before the later request."
  },
  {
    "time": "15:12:14",
    "source": "External page",
    "event": "The user opens a fictional supplier article in another tab.",
    "meaning": "A separate browser origin becomes active."
  },
  {
    "time": "15:12:16",
    "source": "Cross-site request",
    "event": "The external page attempts to submit a hidden invoice-approval request to the finance portal.",
    "meaning": "A request-forgery pattern is attempted."
  },
  {
    "time": "15:12:17",
    "source": "Cookie policy",
    "event": "The fictional session cookie is withheld because the request is cross-site and the cookie uses a restrictive SameSite policy.",
    "meaning": "One browser-layer control reduces authenticated request context."
  },
  {
    "time": "15:12:18",
    "source": "Application",
    "event": "The finance portal also rejects the request because the anti-forgery token is missing and the origin is unapproved.",
    "meaning": "Server-side protections independently deny the action."
  },
  {
    "time": "15:12:19",
    "source": "Transaction",
    "event": "No fictional invoice approval, payment state, or database transaction is created.",
    "meaning": "No confirmed business impact follows the denied request."
  },
  {
    "time": "15:13:02",
    "source": "Monitoring",
    "event": "A structured event records the session, route, unapproved origin, missing token, denial, and request ID.",
    "meaning": "Defenders receive useful evidence without storing sensitive content."
  },
  {
    "time": "15:18:00",
    "source": "Review",
    "event": "The team finds a legacy invoice route that still accepts state-changing GET requests.",
    "meaning": "A separate control weakness exists even though the first request was denied."
  },
  {
    "time": "15:22:00",
    "source": "Containment",
    "event": "The legacy route is disabled and requests are redirected to a safe review page.",
    "meaning": "Narrow containment prevents accidental activation."
  },
  {
    "time": "15:29:00",
    "source": "Remediation",
    "event": "The application replaces the route with POST, anti-forgery validation, authorization, explicit invoice confirmation, and idempotency.",
    "meaning": "Method, browser, application, user-intent, and duplicate-action controls are combined."
  },
  {
    "time": "15:36:00",
    "source": "Frame review",
    "event": "Sensitive finance pages receive restrictive frame-ancestor protection.",
    "meaning": "Clickjacking defense is added to the same workflow."
  },
  {
    "time": "15:44:00",
    "source": "Positive test",
    "event": "An approved finance user reviews the exact invoice and completes one approval after reauthentication.",
    "meaning": "Legitimate sensitive use remains available."
  },
  {
    "time": "15:48:00",
    "source": "Negative test",
    "event": "Missing-token, wrong-origin, framed, GET, duplicate, and canceled requests create no approval.",
    "meaning": "Several unsafe conditions are denied."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No new cross-site approval attempts succeed, and normal invoice processing remains stable.",
    "meaning": "Short-term validation supports closure."
  }
];

const classifications = [
  {
    "classification": "Expected protected action",
    "meaning": "The fictional request uses the approved application flow, session, method, token, origin, authorization, confirmation, and transaction controls.",
    "documentation": "Record user, session, route, token result, origin, action, target, approval, transaction, and owner."
  },
  {
    "classification": "Cross-site request denied",
    "meaning": "The fictional browser or application rejects an unintended cross-site state-changing request.",
    "documentation": "Record origin, cookie context, token, route, decision, user state, and confirmation of no business change."
  },
  {
    "classification": "Request-forgery weakness",
    "meaning": "The fictional application accepts a sensitive request without sufficient anti-forgery, origin, method, confirmation, or authorization controls.",
    "documentation": "Record affected routes, sessions, actions, scope, owners, containment, remediation, and validation."
  },
  {
    "classification": "Clickjacking protection working",
    "meaning": "The fictional browser or application prevents sensitive pages from being framed by unapproved origins.",
    "documentation": "Record frame policy, parent origin, page, browser result, approved exceptions, and tests."
  },
  {
    "classification": "Clickjacking weakness",
    "meaning": "A fictional sensitive action can be visually disguised or overlaid because framing and confirmation controls are insufficient.",
    "documentation": "Record page, frame tree, user-visible context, action route, affected scope, and safe remediation."
  },
  {
    "classification": "Duplicate action prevented",
    "meaning": "Fictional idempotency or transaction state stops repeated requests from creating multiple business results.",
    "documentation": "Record request IDs, idempotency key, transaction IDs, final state, and validation."
  },
  {
    "classification": "Legitimate exception",
    "meaning": "A fictional cross-origin or embedded workflow is verified, narrowly scoped, owned, tested, monitored, and required.",
    "documentation": "Record exact origins, routes, methods, credentials, owners, expiration, validation, and rollback."
  },
  {
    "classification": "Evidence incomplete",
    "meaning": "The fictional browser, frame, session, token, transaction, user, or business evidence is insufficient for a reliable conclusion.",
    "documentation": "State the gap, confidence, temporary control, owner, due date, and decision criteria."
  }
];

const commonMistakes = [
  "Using fictional GET requests for actions that create, update, delete, approve, pay, share, or change permissions.",
  "Relying on SameSite cookies as the only request-forgery defense.",
  "Validating anti-forgery tokens without also enforcing authentication, authorization, and business rules.",
  "Accepting anti-forgery values from predictable or unrelated session state.",
  "Trusting origin or referer headers without a documented missing-header policy.",
  "Allowing broad cross-origin access with credentials.",
  "Treating a content-policy or frame denial as proof that a user clicked or a transaction completed.",
  "Hiding a sensitive action instead of providing clear confirmation and reauthentication.",
  "Failing to use idempotency for payments, enrollments, approvals, and retries.",
  "Creating broad frame or origin exceptions for an entire provider when only one owned application needs access.",
  "Closing after a denied request without confirming no database, payment, permission, or business state changed.",
  "Building harmful demonstrations or testing real sites instead of using safe fictional evidence."
];

const quizQuestions = [
  {
    "question": "What is the core risk in fictional cross-site request forgery?",
    "choices": [
      "A browser may send an authenticated state-changing request that the user did not intentionally initiate.",
      "The user always loses their password.",
      "The database automatically becomes public.",
      "Every cross-origin request is malicious."
    ],
    "answer": 0,
    "explanation": "The risk comes from trusted browser session state being applied to an unintended request."
  },
  {
    "question": "Which defense combination is strongest for a fictional sensitive form?",
    "choices": [
      "Anti-forgery token, SameSite cookie, origin validation, authorization, clear confirmation, and reauthentication where appropriate.",
      "A hidden submit button.",
      "A GET request with a long URL.",
      "A warning in the page footer."
    ],
    "answer": 0,
    "explanation": "Several controls protect browser context, server acceptance, user intent, and high-risk actions."
  },
  {
    "question": "Why should state-changing actions avoid GET?",
    "choices": [
      "Links, crawlers, previews, and normal browser loading can activate GET requests unintentionally.",
      "GET cannot include a path.",
      "GET always changes cookies.",
      "POST automatically authorizes the user."
    ],
    "answer": 0,
    "explanation": "Method design reduces accidental activation but still requires other controls."
  },
  {
    "question": "What is the primary purpose of frame restrictions?",
    "choices": [
      "Prevent unapproved origins from embedding fictional sensitive pages and misleading users through overlays.",
      "Encrypt every database field.",
      "Replace authentication.",
      "Allow all third-party widgets."
    ],
    "answer": 0,
    "explanation": "Frame protection reduces clickjacking and deceptive embedding risk."
  },
  {
    "question": "Why is idempotency useful for fictional payments and approvals?",
    "choices": [
      "It helps repeated or retried requests produce only one intended business result.",
      "It proves user identity.",
      "It removes the need for authorization.",
      "It makes every request cross-origin."
    ],
    "answer": 0,
    "explanation": "Idempotency protects against duplicate business actions."
  },
  {
    "question": "A fictional cross-site request is denied because the token is missing. What additional evidence is needed before closing?",
    "choices": [
      "Confirm cookie and origin behavior, authorization, transaction and database state, affected routes, legitimate use, monitoring, and owner approval.",
      "Nothing else is needed.",
      "Assume the user is malicious.",
      "Disable every account."
    ],
    "answer": 0,
    "explanation": "Closure requires proof of no impact and validation across all affected paths."
  },
  {
    "question": "Which cross-origin configuration is strongest?",
    "choices": [
      "Exact approved origins, required methods and headers, narrow credential use, server-side authorization, monitoring, and owner review.",
      "Reflect any origin and allow credentials.",
      "Allow all methods and headers.",
      "Trust the browser to provide authorization."
    ],
    "answer": 0,
    "explanation": "Cross-origin access should be exact, owned, limited, authorized, tested, and monitored."
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
        Next Lesson
      </Link>
    </div>
  );
}

function ThreatPatternGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Threat Patterns
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Ways User Actions Can Be Misrepresented
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {threatPatterns.map((item) => (
          <div
            key={item.pattern}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.pattern}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.scenario}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Risk
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.risk}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong defense
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongDefense}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Evidence
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProtectionControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        User Action Protection
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls That Work Together
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {protectionControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.control}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Benefit
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.benefit}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.validation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorsGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Cross-Origin Review
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Areas to Review Before Allowing Browser Access
      </h2>

      <div className="mt-6 grid gap-5">
        {corsReview.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.area}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongPattern}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak pattern
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakPattern}
                </p>
              </div>

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
                  Review question
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
                  {item.question}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Request and User-Action Evidence Can Prove
      </h2>

      <div className="mt-6 grid gap-4">
        {evidenceMatrix.map((item) => (
          <div
            key={item.source}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1fr_1fr]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Evidence source
              </p>
              <p className="mt-2 font-black text-cyan-100">{item.source}</p>
            </div>

            <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Can support
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.supports}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                Limitation
              </p>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                {item.limitation}
              </p>
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Defensive Workflow
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Protect Sensitive Browser Actions in Six Steps
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

function ClassificationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Classification
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Outcomes with Different Evidence Requirements
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {classifications.map((item) => (
          <div
            key={item.classification}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">
              {item.classification}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.meaning}
            </p>

            <div className="mt-4 rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                Required documentation
              </p>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                {item.documentation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Request Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Invoice Approval Attempt from Browser to Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.2fr_0.35fr_1fr_1fr]"
          >
            <p className="font-mono text-sm font-black text-cyan-300">
              {item.time}
            </p>

            <p className="text-sm font-black text-blue-200">{item.source}</p>

            <p className="text-sm font-semibold text-white">{item.event}</p>

            <p className="text-sm leading-6 text-slate-300">{item.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function RequestForgeryClickjackingAndUserActionProtectionPage() {
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
              Module I8
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 5 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.5 Request Forgery, Clickjacking, and User Action Protection
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional applications protect sensitive browser actions
            through anti-forgery tokens, SameSite cookies, origin checks,
            correct methods, clear confirmations, reauthentication, frame
            restrictions, idempotency, cross-origin review, evidence-based
            investigation, validation, and professional closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I8: Web Security Defense"
          lessonTitle="Request Forgery, Clickjacking, and User Action Protection"
          lessonNumber={5}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional authenticated browser state can be attached to requests the user did not clearly intend.",
            "I will not build or test request-forgery or clickjacking demonstrations against real websites.",
            "I will use only supplied fictional browser, session, frame, token, origin, transaction, and user evidence.",
            "I will separate attempted request, server decision, user intent, transaction state, and business impact.",
            "I will never publish real cookies, tokens, sessions, account data, transaction records, browser captures, or private application information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Valid Session Does Not Prove the User Intended the Action"
        >
          <p className="leading-8">
            A fictional browser can hold a valid finance session while another
            page attempts to submit an invoice approval. A hidden frame can place
            a sensitive button under a harmless-looking control. A duplicate
            request can create two payments unless transaction state is designed
            carefully. Defenders protect the connection between identity,
            browser context, user intent, authorization, and final business state.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 leading-7">
                “The fictional browser sent a valid session cookie, so accept the
                state-changing request immediately.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong design
              </p>
              <p className="mt-2 leading-7">
                “Verify token, origin, method, authorization, user confirmation,
                reauthentication, transaction state, and final business result.”
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
          title="Sensitive Actions Need Proof of Context and Intent"
        >
          <p className="leading-8">
            Fictional payment approval, account recovery, data sharing,
            enrollment, permission change, export, and deletion can be high
            impact even when they use a valid account and session. Strong systems
            verify the request came through the approved application, show the
            user exactly what will happen, require stronger proof when needed,
            prevent duplicates, record the final state, and allow safe review.
          </p>
        </SectionCard>

        <ThreatPatternGuide />
        <ProtectionControlGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Six Questions"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Session", "Which fictional account and browser session were attached to the request?"],
              ["Source", "Which fictional origin, frame, page, or application created the request?"],
              ["Request", "Which fictional method, route, token, target, and values were sent?"],
              ["Intent", "Did the fictional user clearly see and approve the exact action?"],
              ["Decision", "Which fictional authorization, token, origin, confirmation, and transaction controls acted?"],
              ["Impact", "Which fictional database, payment, permission, account, or business state actually changed?"],
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

        <CorsGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <ClassificationGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Request and User-Action Protection Terms
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
          title="Fake User Action Protection Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook finance and enrollment applications."
          metrics={[
            {
              label: "Sensitive routes",
              value: "37",
              note: "Fictional payment, approval, enrollment, reset, export, sharing, deletion, and permission routes.",
            },
            {
              label: "Denied cross-site requests",
              value: "84",
              note: "Missing-token, wrong-origin, framed, unsafe-method, expired-session, and canceled-action cases.",
            },
            {
              label: "Open findings",
              value: "5",
              note: "Legacy GET action, broad origin exception, weak confirmation, duplicate-action, and evidence-gap reviews.",
            },
          ]}
        />

        <FakeAlertCard
          title="Cross-Site Invoice Approval Attempt Denied"
          severity="High"
          time="03:12 PM"
          source="Fake User Action Protection Console"
          details="A fictional finance user has a valid session when an unrelated browser origin attempts to submit a hidden invoice-approval request. The session cookie is withheld by a restrictive SameSite policy, and the application independently rejects the request because the anti-forgery token is missing and the origin is unapproved. No approval or payment transaction is created."
          recommendation="Preserve the browser, session, token, origin, application, and transaction evidence; review every sensitive route; remove state-changing GET behavior; require anti-forgery validation, authorization, clear confirmation, reauthentication, frame protection, and idempotency; then test approved and denied workflows."
        />

        <FakeLogPanel
          title="Fake Request-Forgery and Remediation Timeline"
          logs={[
            "15:10:01 SESSION account='finance-104' app='invoice-portal' state='valid'",
            "15:12:14 BROWSER external_origin='supplier-article.example'",
            "15:12:16 CROSS_SITE_REQUEST route='/invoice/approve' method='POST'",
            "15:12:17 COOKIE same_site='restrictive' sent='false'",
            "15:12:18 APPLICATION token='missing' origin='unapproved' result='deny'",
            "15:12:19 TRANSACTION approval='none' payment='none' database_change='none'",
            "15:13:02 MONITOR event='structured' sensitive_content='not_stored'",
            "15:18:00 REVIEW legacy_route='/invoice/approve-link' method='GET'",
            "15:22:00 CONTAIN legacy_route='disabled'",
            "15:29:00 REMEDIATE method='POST' token='required' confirmation='explicit' idempotency='enabled'",
            "15:36:00 FRAME_POLICY finance_pages='restricted'",
            "15:44:00 POSITIVE_TEST approved_user='pass' reauth='pass' approval_count='1'",
            "15:48:00 NEGATIVE_TEST missing_token='deny' wrong_origin='deny' framed='deny' duplicate='one_result'",
            "DAY7 MONITOR successful_cross_site_approvals='0' normal_processing='stable'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Request-Forgery Conclusion Is Best Supported?"
          evidence={[
            "The fictional finance user has a valid session.",
            "An unrelated browser origin attempts to submit an invoice approval.",
            "The restrictive SameSite policy prevents the session cookie from being sent.",
            "The application also rejects the request because the anti-forgery token is missing.",
            "The origin is not on the approved application list.",
            "No approval, payment, or database transaction is created.",
            "A separate legacy GET route is discovered and disabled.",
            "After remediation, approved finance use succeeds while missing-token, wrong-origin, framed, GET, canceled, and duplicate requests do not create extra approvals.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "A cross-site approval attempt was denied by browser and server controls, no business impact is confirmed, and a separate legacy state-changing GET weakness required remediation.",
            "The invoice was paid because the user had a valid session.",
            "The user intentionally approved the invoice.",
            "SameSite alone permanently protects every route.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an attempted but denied request, no completed transaction, and a distinct legacy design weakness that needed correction."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken User Action Protection"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
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
          eyebrow="Safe Practice Lab"
          title="Complete a Fictional User Action Protection Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Sensitive Action Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty supplied fictional records covering sessions,
                cookies, origins, forms, tokens, methods, frames, cross-origin
                policy, confirmations, reauthentication, authorization,
                idempotency, transactions, user reports, remediation, validation,
                monitoring, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory every fictional state-changing route and business effect.</li>
                <li>Map session, cookie, origin, method, token, frame, confirmation, and authorization controls.</li>
                <li>Review cross-origin origins, credentials, methods, headers, responses, errors, and monitoring.</li>
                <li>Separate attempted request, user intent, server decision, transaction state, and business impact.</li>
                <li>Identify unsafe GET, missing-token, broad-origin, weak-confirmation, framing, and duplicate-action cases.</li>
                <li>Write findings with facts, confidence, alternatives, owners, remediation, positive tests, negative tests, rollback, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not create hidden forms,
            overlays, framing demonstrations, cross-site requests, or duplicate
            transactions against real applications. Do not access sessions,
            cookies, tokens, accounts, payments, permissions, or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Sensitive Action Uses GET"
          scenario="A fictional legacy application approves a request when a user follows a specially formatted link. The route changes business state and does not require an anti-forgery token or confirmation."
          choices={[
            {
              label: "Choice A",
              response:
                "Disable or restrict the route, replace it with an appropriate state-changing method, require token validation, authorization, explicit confirmation, idempotency, and validate that links or previews cannot complete the action.",
              outcome:
                "Best defensive choice. The design reduces accidental and cross-site activation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep GET and make the URL harder to guess.",
              outcome:
                "Weak control. Method and user-intent protections remain missing.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Trust the route because only signed-in users can reach it.",
              outcome:
                "Unsafe. Authenticated browser state can still be attached to unintended requests.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="An Approved Support Widget Needs Cross-Origin Access"
          scenario="A fictional support widget from one owned origin needs to read a limited help-status API from another owned origin. The current configuration allows any origin and credentials."
          choices={[
            {
              label: "Choice A",
              response:
                "Replace the broad policy with the exact owned origin, required method and headers, narrow credential use, server-side authorization, safe errors, monitoring, documented ownership, validation, and rollback.",
              outcome:
                "Best defensive choice. It preserves the approved widget while reducing unnecessary browser access.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep every origin allowed because the endpoint is internal.",
              outcome:
                "Overbroad. Browser origin boundaries still matter for internal applications.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Remove authorization because the browser policy already checks origin.",
              outcome:
                "Unsafe. Cross-origin policy does not replace authentication and authorization.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Request Forgery, Clickjacking, and User Action Protection Checklist"
          items={[
            "I inventory fictional create, update, delete, approve, pay, share, reset, enroll, export, and permission-changing routes.",
            "I use appropriate non-GET methods for state-changing actions.",
            "I validate anti-forgery tokens and combine them with SameSite cookies, origin checks, authorization, and business rules.",
            "I give users clear trusted confirmation of the exact target, amount, recipient, permission, or data effect.",
            "I use reauthentication or step-up verification for selected high-risk actions.",
            "I restrict framing of sensitive pages and document narrow approved embed exceptions.",
            "I configure cross-origin access with exact origins, required methods and headers, narrow credentials, safe errors, and monitoring.",
            "I use idempotency and transaction state to prevent duplicate business actions.",
            "I compare browser, application, session, transaction, user, and business evidence before claiming impact.",
            "I use only fictional evidence and never create harmful request-forgery or clickjacking demonstrations.",
          ]}
        />

        <MiniQuiz
          title="I8.5 Mini Quiz: Request Forgery, Clickjacking, and User Action Protection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional User Action Protection Review using at least forty session, cookie, origin, method, token, frame, cross-origin, confirmation, reauthentication, authorization, idempotency, transaction, user, business, remediation, validation, monitoring, and closure records. Include a sensitive-route inventory, request-protection matrix, frame and cross-origin review, normalized timeline, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, routes, accounts, sessions, origins, tokens, transactions, users, and organizations.",
            "Include one denied cross-site request, one state-changing GET weakness, one framing weakness, one duplicate-action case, and one approved cross-origin exception.",
            "Keep valid session, request source, user intent, server decision, transaction state, and business impact separate.",
            "Do not create or run hidden forms, overlays, frames, cross-site requests, or duplicate transactions.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A fictional valid session does not prove the user intended a sensitive action.",
            "Anti-forgery tokens, SameSite cookies, origin checks, authorization, confirmation, and reauthentication solve different parts of the problem.",
            "State-changing GET routes can be activated by links, crawlers, previews, and normal browser behavior.",
            "Frame restrictions and clear confirmations reduce clickjacking and hidden-action risk.",
            "Idempotency protects payments, approvals, enrollments, and retries from duplicate results.",
            "Strong closure validates approved and denied flows, transaction state, legitimate use, monitoring, evidence gaps, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I8
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