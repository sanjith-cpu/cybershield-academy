import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/web-security-defense`;
const previousLesson = `${modulePath}/web-security-defense-lab`;

const reviewAreas = [
  {
    "title": "Web architecture and HTTP",
    "detail": "Browsers, clients, requests, responses, methods, URLs, headers, status codes, reverse proxies, web servers, applications, APIs, databases, and trust boundaries."
  },
  {
    "title": "Authentication, sessions, and authorization",
    "detail": "Identity claims, factors, cookies, tokens, session rotation, expiration, revocation, roles, permissions, object ownership, tenants, workflow rules, and least privilege."
  },
  {
    "title": "Input validation and injection defense",
    "detail": "Untrusted input, schemas, type and range checks, allowlists, parameterization, safe APIs, output handling, least privilege, safe errors, and evidence-based impact review."
  },
  {
    "title": "Browser-side defense",
    "detail": "Reflected, stored, and client-side rendering risks, context-specific encoding, sanitization, safe DOM APIs, trusted templates, content security policy, and isolation."
  },
  {
    "title": "Request and user-action protection",
    "detail": "Anti-forgery tokens, SameSite cookies, origins, state-changing methods, confirmations, reauthentication, frame restrictions, cross-origin policy, and idempotency."
  },
  {
    "title": "TLS, headers, cookies, and configuration",
    "detail": "Certificates, HTTPS, HSTS, browser headers, cookie attributes, proxies, debug settings, secrets, services, runtimes, secure defaults, drift, validation, and rollback."
  },
  {
    "title": "Logs, alerts, and investigation",
    "detail": "Raw events, parsing, normalization, enrichment, correlation, alerts, findings, request IDs, sessions, objects, transactions, confidence, alternatives, and evidence gaps."
  },
  {
    "title": "Integrated web defense",
    "detail": "Scope, architecture, findings, narrow remediation, accountable owners, positive tests, negative tests, monitoring, residual risk, portfolio reporting, and professional closure."
  }
];

const examRules = [
  "Complete all twenty-five questions using only the concepts from Module I8.",
  "Read every choice before revealing the answer.",
  "Treat all applications, accounts, sessions, requests, records, users, devices, and organizations as fictional.",
  "Do not use real credentials, cookies, tokens, source code, logs, websites, applications, or private data.",
  "Choose the answer that is most evidence based, least assumptive, safest, narrowest, and easiest to validate.",
  "Remember that a request, alert, weakness, successful sign-in, or browser event does not automatically prove impact."
];

const scoreBands = [
  {
    "range": "23–25 correct",
    "label": "Module mastery",
    "meaning": "You can integrate architecture, controls, evidence, validation, and closure into a defensible web-security review.",
    "nextStep": "Save your I8.8 case report as a portfolio artifact and continue to Module I9."
  },
  {
    "range": "20–22 correct",
    "label": "Strong readiness",
    "meaning": "You understand the module well but should review the few topics connected to your missed questions.",
    "nextStep": "Revisit the matching lesson sections, then retake the test."
  },
  {
    "range": "16–19 correct",
    "label": "Developing readiness",
    "meaning": "You understand several major ideas but need a more consistent evidence and control workflow.",
    "nextStep": "Review I8.2, I8.3, I8.5, I8.6, and I8.7 before retaking."
  },
  {
    "range": "0–15 correct",
    "label": "Rebuild the foundation",
    "meaning": "Review the full module and focus on separating requests, control decisions, data state, user intent, and business impact.",
    "nextStep": "Repeat the lesson readiness checks, scenario labs, and mini quizzes before trying again."
  }
];

const quizQuestions = [
  {
    "question": "Which statement best describes the relationship between a fictional browser, web server, application, and database?",
    "choices": [
      "The browser creates a request, the server and application process it, and the database may read or change state under controlled application logic.",
      "The browser communicates directly with every database without application controls.",
      "The web server automatically authorizes every request.",
      "A database response proves the user intended the action."
    ],
    "answer": 0,
    "explanation": "A web workflow crosses several layers, and each layer provides different evidence and controls."
  },
  {
    "question": "What does a fictional HTTP 200 response most directly prove?",
    "choices": [
      "The responding layer successfully handled the request according to its own behavior.",
      "The user was authorized for every object.",
      "The database definitely changed.",
      "The request was harmless."
    ],
    "answer": 0,
    "explanation": "A success status is useful but does not replace authorization, data, and business evidence."
  },
  {
    "question": "Which statement correctly separates authentication and authorization?",
    "choices": [
      "Authentication evaluates an identity claim; authorization decides whether that identity may perform a specific action on a specific resource.",
      "Authentication and authorization are identical.",
      "Authorization creates session cookies.",
      "Authentication proves every business action is approved."
    ],
    "answer": 0,
    "explanation": "A user can authenticate successfully and still be denied a protected action."
  },
  {
    "question": "Why should a fictional session identifier rotate after sign-in or privilege elevation?",
    "choices": [
      "It replaces earlier session state across a trust transition and allows the old identifier to be invalidated.",
      "It removes the need for expiration.",
      "It grants every permission.",
      "It proves physical identity."
    ],
    "answer": 0,
    "explanation": "Rotation reduces risk from identifiers created before a higher-trust state."
  },
  {
    "question": "Which design best protects a fictional student record?",
    "choices": [
      "The server checks the authenticated account, role, tenant, relationship, object owner, and requested action.",
      "The browser hides links to other records.",
      "The application trusts the record ID in the URL.",
      "Every signed-in user can read every record."
    ],
    "answer": 0,
    "explanation": "Object-level authorization must use trusted server-side context."
  },
  {
    "question": "Why must fictional server-side validation repeat important checks performed in the browser?",
    "choices": [
      "Client behavior can be modified or bypassed, so the server remains the authoritative processing boundary.",
      "Browsers cannot display validation messages.",
      "Server validation proves user intent.",
      "Client-side fields cannot contain text."
    ],
    "answer": 0,
    "explanation": "Client validation helps usability but cannot enforce security against modified requests."
  },
  {
    "question": "Which strategy is strongest for a fictional report sort option?",
    "choices": [
      "Map a small approved set of user choices to server-defined sort operations.",
      "Insert any received text into query structure.",
      "Reject one known unwanted word.",
      "Trust the hidden form field."
    ],
    "answer": 0,
    "explanation": "Structural choices should come from strict server-controlled allowlists."
  },
  {
    "question": "What is the primary defensive benefit of parameterization?",
    "choices": [
      "It keeps fictional data values separate from the structure of a supported query or command interface.",
      "It authorizes every object.",
      "It replaces output encoding.",
      "It proves the user is trusted."
    ],
    "answer": 0,
    "explanation": "Parameterization prevents values from being interpreted as instruction structure in supported contexts."
  },
  {
    "question": "Why can fictional stored data still require output handling?",
    "choices": [
      "Content safe in storage can become unsafe when reused in a browser, document, export, log, or other context.",
      "Database content is always trusted.",
      "Output handling is only for passwords.",
      "Stored data never reaches users."
    ],
    "answer": 0,
    "explanation": "Safety depends on the current output context, not only where the data was stored."
  },
  {
    "question": "Which rendering pattern is strongest for fictional plain text?",
    "choices": [
      "Use the framework’s normal escaped text binding or a safe text-insertion API.",
      "Insert the value through raw markup.",
      "Trust it because it came from an internal API.",
      "Disable browser security policy."
    ],
    "answer": 0,
    "explanation": "Plain text should remain text through safe framework or DOM APIs."
  },
  {
    "question": "When is sanitization most appropriate?",
    "choices": [
      "When a fictional workflow intentionally supports a limited, documented set of rich-text markup.",
      "For every plain-text field.",
      "As a replacement for authorization.",
      "To make arbitrary active content safe."
    ],
    "answer": 0,
    "explanation": "Sanitization is for narrowly defined rich content and requires careful configuration and maintenance."
  },
  {
    "question": "What is the strongest interpretation of a fictional Content Security Policy report?",
    "choices": [
      "The browser observed content or behavior that conflicted with the policy; cause and impact still require investigation.",
      "Account compromise is proven.",
      "The user acted maliciously.",
      "The policy should be disabled."
    ],
    "answer": 0,
    "explanation": "A policy report is valuable evidence but not complete proof of intent or impact."
  },
  {
    "question": "What is the core risk in fictional cross-site request forgery?",
    "choices": [
      "A browser may send an authenticated state-changing request the user did not intentionally initiate.",
      "Every cross-origin request steals a password.",
      "The database becomes public automatically.",
      "The browser can no longer use cookies."
    ],
    "answer": 0,
    "explanation": "Trusted browser session state can be attached to an unintended request."
  },
  {
    "question": "Which protection combination is strongest for a fictional sensitive form?",
    "choices": [
      "Anti-forgery token, SameSite cookie, origin validation, authorization, clear confirmation, and reauthentication where appropriate.",
      "A hidden submit button.",
      "A GET request with a long URL.",
      "A warning in the footer."
    ],
    "answer": 0,
    "explanation": "Several controls protect browser context, server acceptance, user intent, and high-risk actions."
  },
  {
    "question": "Why should fictional state-changing actions avoid GET?",
    "choices": [
      "Links, crawlers, previews, and normal browser loading can activate GET requests unintentionally.",
      "GET cannot include a path.",
      "POST automatically authorizes the user.",
      "GET always disables cookies."
    ],
    "answer": 0,
    "explanation": "Method design reduces accidental activation but still requires other controls."
  },
  {
    "question": "Why is fictional idempotency useful for payments and approvals?",
    "choices": [
      "It helps repeated or retried requests produce only one intended business result.",
      "It proves physical identity.",
      "It removes the need for authorization.",
      "It makes every request same-site."
    ],
    "answer": 0,
    "explanation": "Idempotency protects high-impact workflows from duplicate results."
  },
  {
    "question": "What does fictional HTTPS most directly provide?",
    "choices": [
      "Protected transport confidentiality and integrity between the approved client and server endpoint.",
      "Proof that every application action is authorized.",
      "Proof that the business request is legitimate.",
      "Automatic secure cookie configuration."
    ],
    "answer": 0,
    "explanation": "HTTPS protects transport, while application trust and authorization need separate evidence."
  },
  {
    "question": "Which fictional primary session cookie design is strongest?",
    "choices": [
      "Secure, HttpOnly, appropriate SameSite, narrow host and path scope, limited lifetime, rotation, and server-side validation.",
      "Parent-domain scope with no expiration.",
      "Role and password data stored directly in the cookie.",
      "Available to every page script."
    ],
    "answer": 0,
    "explanation": "A protected session cookie should be narrow, limited, and connected to secure server-side logic."
  },
  {
    "question": "A fictional error route reveals a framework version while the main route is hardened. What is the strongest conclusion?",
    "choices": [
      "Security-control coverage is inconsistent across routes and the error path requires remediation.",
      "The entire application is compromised.",
      "The main route proves every path is safe.",
      "Framework versions should always be public."
    ],
    "answer": 0,
    "explanation": "Headers, errors, and configuration must be validated across every route and host."
  },
  {
    "question": "What is the strongest interpretation of a fictional high-severity web alert?",
    "choices": [
      "It is a prioritized analytic starting point that requires source, control, impact, user, and business correlation.",
      "It proves compromise.",
      "It proves data loss.",
      "It proves malicious intent."
    ],
    "answer": 0,
    "explanation": "Severity guides attention but does not replace investigation evidence."
  },
  {
    "question": "Why should analysts compare raw fictional events with normalized events?",
    "choices": [
      "Parsing and normalization can drop, transform, or misclassify important source details.",
      "Normalized events are always false.",
      "Raw events prove user intent.",
      "Raw events replace business records."
    ],
    "answer": 0,
    "explanation": "Analysts should verify that source details were mapped correctly."
  },
  {
    "question": "A fictional teacher makes three export requests, all denied, and no export job exists. What is the strongest direct conclusion?",
    "choices": [
      "Repeated export requests occurred and were denied; export impact is not confirmed.",
      "The teacher stole the data.",
      "The account is definitely compromised.",
      "The export succeeded because the route was requested."
    ],
    "answer": 0,
    "explanation": "Request attempts, control decisions, intent, and downstream impact are separate."
  },
  {
    "question": "Which detection-tuning approach is strongest?",
    "choices": [
      "Add authorization result, downstream state, account role, asset value, and legitimate-workflow context, then test true and false cases.",
      "Suppress every event from the route.",
      "Lower every alert to informational.",
      "Block all users who trigger the rule once."
    ],
    "answer": 0,
    "explanation": "Contextual tuning reduces noise while preserving meaningful detection."
  },
  {
    "question": "A fictional weakness is confirmed, but harmful use is not. Which finding statement is strongest?",
    "choices": [
      "The specific control weakness is confirmed and requires remediation; downstream account, data, or business impact is not confirmed in the available evidence.",
      "The entire environment was compromised.",
      "No action is needed because impact is not confirmed.",
      "Every user is responsible."
    ],
    "answer": 0,
    "explanation": "Strong findings take confirmed weaknesses seriously without overstating impact."
  },
  {
    "question": "Which closure plan is strongest for Module I8?",
    "choices": [
      "Validate architecture, identity, sessions, authorization, input, rendering, request protection, configuration, logs, data state, legitimate workflows, denied cases, monitoring, gaps, residual risk, rollback, and owner approval.",
      "Close after one fix deploys.",
      "Close when alerts stop for one hour.",
      "Close after changing the password."
    ],
    "answer": 0,
    "explanation": "Professional closure combines technical, business, monitoring, evidence, and governance validation."
  }
];

const masteryItems = [
  "I can explain the full fictional browser-to-database request path.",
  "I can separate authentication, session recognition, authorization, user intent, and impact.",
  "I can define a server-side input contract and explain parameterization and strict allowlists.",
  "I can map fictional data sources to exact browser and document output contexts.",
  "I can explain anti-forgery tokens, SameSite cookies, origin checks, confirmations, frame restrictions, and idempotency.",
  "I can review fictional TLS, certificates, headers, cookies, errors, services, secrets, and configuration drift.",
  "I can compare raw records, normalized events, alerts, application decisions, database state, user reports, and business evidence.",
  "I can write findings that separate facts, conclusions, alternatives, confidence, limitations, and evidence gaps.",
  "I can design narrow remediation with accountable owners, positive tests, negative tests, monitoring, rollback, and residual risk.",
  "I can create a privacy-safe fictional Web Security Defense Case Report without exposing real systems or people."
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
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

export default function WebSecurityDefenseModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I8
            </span>

            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8 Module Test: Web Security Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete twenty-five questions covering web architecture, HTTP,
            authentication, sessions, access control, input validation,
            injection defense, browser-side security, request protection, TLS,
            headers, cookies, configuration, logs, alerts, investigation,
            remediation, validation, and professional closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed Lessons I8.1 through I8.8.",
            "I understand that choices appear before answers and explanations.",
            "I will choose the most evidence-based and defensible answer.",
            "I will treat all examples as fictional, safe, inert, authorized, and defensive.",
            "I will not use real websites, credentials, sessions, cookies, tokens, logs, source code, or private data.",
          ]}
        />

        <SectionCard
          eyebrow="Test Structure"
          title="Twenty-Five Questions Across Eight Review Areas"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {reviewAreas.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Exam Rules"
          title="How to Complete the Test"
        >
          <div className="grid gap-3">
            {examRules.map((rule, index) => (
              <div
                key={rule}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-6 text-blue-50">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="I8 Module Test: 25 Questions"
          questions={quizQuestions}
        />

        <SectionCard
          eyebrow="Score Interpretation"
          title="Use Your Result to Choose the Next Step"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {scoreBands.map((band) => (
              <div
                key={band.range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {band.range}
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  {band.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {band.meaning}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Next step
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-50">
                    {band.nextStep}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="Module I8 Mastery Checklist"
          items={masteryItems}
        />

        <PortfolioPrompt
          title="Final I8 Portfolio Check"
          prompt="Review your fictional Web Security Defense Case Report from I8.8. Confirm that it includes scope, architecture, trust boundaries, evidence index, normalized timeline, findings, facts, conclusions, alternatives, confidence, evidence gaps, owners, remediation, positive tests, negative tests, monitoring, rollback, residual risk, lessons learned, and closure criteria."
          tips={[
            "Use only fictional names, applications, accounts, requests, sessions, certificates, logs, records, users, and organizations.",
            "For each finding, show exactly what the evidence proves and what it does not prove.",
            "Keep weaknesses, attempted actions, control decisions, user effects, data state, and business impact separate.",
            "Remove all real credentials, cookies, tokens, hostnames, routes, source code, logs, screenshots, database records, and private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Web defense requires connected understanding of architecture, identity, sessions, access, input, rendering, user actions, transport, configuration, and evidence.",
            "A successful sign-in, valid session, alert, request, status code, or weakness does not automatically prove authorization or impact.",
            "Strong controls use server-side validation, parameterization, safe rendering, request protection, secure configuration, least privilege, and layered monitoring.",
            "Strong investigations correlate raw technical evidence with user and business records while documenting confidence and gaps.",
            "Strong remediation is narrow, owned, testable, monitored, reversible, and designed to preserve legitimate workflows.",
            "Strong closure includes validation, monitoring, residual risk, evidence gaps, rollback, and technical and business approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to Module I8
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