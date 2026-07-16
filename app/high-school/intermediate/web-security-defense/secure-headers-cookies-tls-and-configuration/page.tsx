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
const previousLesson = `${modulePath}/request-forgery-clickjacking-and-user-action-protection`;
const nextLesson = `${modulePath}/web-logs-alerts-and-defensive-investigation`;

const objectives = [
  "Explain how fictional TLS, certificates, HTTPS redirects, transport security, reverse proxies, cookies, browser headers, application settings, and deployment configuration work together.",
  "Distinguish confidentiality, integrity, authentication, cookie protection, browser policy, server hardening, error handling, secrets management, and secure defaults.",
  "Evaluate fictional certificate, protocol, header, cookie, proxy, application, container, cloud, and deployment evidence without probing or changing real systems.",
  "Identify narrow defensive improvements for weak transport, overbroad cookies, missing headers, debug exposure, default accounts, excessive services, unsafe secrets, and configuration drift.",
  "Create a professional fictional Secure Web Configuration Review with findings, owners, validation, monitoring, rollback, and residual risk."
];

const vocabulary = [
  [
    "TLS",
    "A fictional transport security protocol that protects data confidentiality and integrity between approved clients and servers."
  ],
  [
    "Certificate",
    "A fictional signed identity document that connects a public key with a domain or service under a trust chain and validity period."
  ],
  [
    "HTTPS",
    "Fictional HTTP communication protected by TLS."
  ],
  [
    "HSTS",
    "A fictional browser instruction that requires future connections to an approved host to use HTTPS for a defined period."
  ],
  [
    "Secure cookie",
    "A fictional cookie configured to travel only over approved encrypted transport."
  ],
  [
    "HttpOnly cookie",
    "A fictional cookie configured so normal page scripts cannot directly read it."
  ],
  [
    "SameSite",
    "A fictional cookie setting that limits when the browser sends the cookie from cross-site contexts."
  ],
  [
    "Content Security Policy",
    "A fictional browser policy that restricts approved content sources and selected page behaviors."
  ],
  [
    "Frame restriction",
    "A fictional header or policy that limits which origins may embed a page."
  ],
  [
    "Referrer policy",
    "A fictional browser policy controlling how much source-page information is sent during navigation."
  ],
  [
    "Secure default",
    "A fictional configuration state that begins with the narrowest safe behavior and requires explicit approval for broader access."
  ],
  [
    "Configuration drift",
    "A fictional difference between the approved baseline and the deployed system caused by manual changes, outdated templates, or inconsistent environments."
  ]
];

const transportLayers = [
  {
    "layer": "Client and browser",
    "role": "A fictional browser validates the host, certificate chain, dates, supported protocol, page policy, and cookie behavior before or during application use.",
    "evidence": "Browser security view, host, certificate details, protocol, page URL, policy headers, cookie attributes, and user-visible warning state.",
    "defensiveQuestion": "Did the browser connect to the expected host using approved transport without warnings or mixed-content behavior?",
    "limitation": "The browser view does not prove the backend application, proxy, or internal service configuration is secure."
  },
  {
    "layer": "DNS and destination",
    "role": "Fictional name resolution directs the client toward the intended service endpoint.",
    "evidence": "Approved DNS record, host ownership, certificate name, destination, service inventory, and change record.",
    "defensiveQuestion": "Does the exact host belong to the expected application and resolve through the approved architecture?",
    "limitation": "Correct name resolution does not prove the application or certificate is current and properly configured."
  },
  {
    "layer": "Edge or load balancer",
    "role": "A fictional edge service terminates TLS, selects certificates, enforces protocol and cipher policy, redirects HTTP, and forwards requests.",
    "evidence": "Listener, certificate ID, protocol, cipher category, redirect rule, HSTS response, route, and upstream target.",
    "defensiveQuestion": "Which transport and browser-security controls are enforced before traffic reaches the application?",
    "limitation": "The edge may protect external transport while internal traffic or application settings remain weak."
  },
  {
    "layer": "Reverse proxy",
    "role": "A fictional proxy routes traffic, adds or removes headers, normalizes client context, and connects to upstream services.",
    "evidence": "Proxy route, forwarded scheme, host, trusted headers, upstream protocol, response headers, and request ID.",
    "defensiveQuestion": "Are scheme, host, client, and security headers derived from trusted infrastructure rather than user input?",
    "limitation": "Misconfigured trust in forwarded headers can cause unsafe redirects, cookie settings, or application decisions."
  },
  {
    "layer": "Application",
    "role": "A fictional application creates cookies, security headers, redirects, errors, sessions, and feature behavior.",
    "evidence": "Application configuration, framework settings, cookie creation, response headers, debug mode, environment, and route behavior.",
    "defensiveQuestion": "Does the application use secure defaults consistently across every route and environment?",
    "limitation": "Application code may assume the proxy adds controls that are absent on another deployment path."
  },
  {
    "layer": "Internal service connection",
    "role": "Fictional services communicate through internal APIs, databases, queues, storage, and identity providers.",
    "evidence": "Service identity, endpoint, protocol, certificate, network policy, secret reference, and connection result.",
    "defensiveQuestion": "Are sensitive internal connections authenticated, encrypted where required, narrowly allowed, and monitored?",
    "limitation": "An internal network location does not automatically make communication trusted."
  },
  {
    "layer": "Deployment platform",
    "role": "A fictional container, virtual machine, serverless platform, or cloud service supplies runtime settings, secrets, ports, identities, and update behavior.",
    "evidence": "Image or build ID, environment variables, secret references, service account, exposed ports, deployment template, and version.",
    "defensiveQuestion": "Does the deployed runtime match the approved baseline without unnecessary services, secrets, or privileges?",
    "limitation": "A secure application configuration can be weakened by the surrounding runtime or platform."
  },
  {
    "layer": "Monitoring and governance",
    "role": "Fictional certificate, configuration, header, cookie, drift, change, and availability events are reviewed by accountable owners.",
    "evidence": "Baseline, scan result, certificate-expiry alert, change ticket, deployment record, owner, validation, and exception.",
    "defensiveQuestion": "Who owns each control, detects drift, validates changes, and renews certificates before failure?",
    "limitation": "A dashboard result should be confirmed against current deployed behavior and business context."
  }
];

const headerControls = [
  {
    "header": "Strict-Transport-Security",
    "purpose": "A fictional browser is instructed to use HTTPS for future requests to the approved host.",
    "strongPattern": "Use a validated max age, include subdomains only after inventory, and consider preload only after careful readiness review.",
    "weakPattern": "Enable a broad policy before confirming every required subdomain supports HTTPS.",
    "evidence": "Response header, host inventory, HTTPS test, redirect behavior, exception list, and owner approval."
  },
  {
    "header": "Content-Security-Policy",
    "purpose": "A fictional page limits approved scripts, styles, frames, connections, images, forms, and other browser content.",
    "strongPattern": "Start with inventory and report-only review, fix unsafe dependencies, enforce narrow sources, and monitor.",
    "weakPattern": "Allow broad wildcards and unsafe inline behavior so compatibility warnings disappear.",
    "evidence": "Policy version, directive, page, source inventory, report, application owner, and browser result."
  },
  {
    "header": "Frame protections",
    "purpose": "A fictional application restricts which origins may embed sensitive pages.",
    "strongPattern": "Use frame-ancestors or equivalent policy with exact approved embedding needs.",
    "weakPattern": "Permit arbitrary framing or rely only on visual design.",
    "evidence": "Header, content policy, parent origin, browser result, approved widget list, and test."
  },
  {
    "header": "X-Content-Type-Options",
    "purpose": "A fictional browser is instructed not to reinterpret selected response types beyond the declared content type.",
    "strongPattern": "Declare correct content types and use the protective option consistently.",
    "weakPattern": "Serve ambiguous content types and depend on browser guessing.",
    "evidence": "Response header, content type, route, file metadata, browser behavior, and validation result."
  },
  {
    "header": "Referrer-Policy",
    "purpose": "A fictional application limits how much source-page information the browser sends during navigation.",
    "strongPattern": "Choose a privacy-aware policy that still supports required owned analytics and workflows.",
    "weakPattern": "Send full sensitive paths and query details to unrelated destinations.",
    "evidence": "Header, navigation source, destination, browser request, business need, and privacy review."
  },
  {
    "header": "Permissions-Policy",
    "purpose": "A fictional application limits selected browser capabilities such as camera, microphone, location, or fullscreen.",
    "strongPattern": "Disable unneeded capabilities and grant exact approved origins only where required.",
    "weakPattern": "Allow every capability to every embedded origin.",
    "evidence": "Header, feature inventory, embedded origins, user workflow, browser behavior, and owner approval."
  },
  {
    "header": "Cache-Control",
    "purpose": "A fictional application defines whether and how browsers and intermediaries may cache responses.",
    "strongPattern": "Use no-store or other appropriate directives for sensitive personalized responses and safe caching for public static content.",
    "weakPattern": "Cache account, payment, or private records in shared or long-lived contexts without review.",
    "evidence": "Header, route classification, response type, browser cache behavior, proxy behavior, and privacy requirement."
  },
  {
    "header": "Cross-origin isolation headers",
    "purpose": "A fictional application controls selected cross-origin resource and document relationships.",
    "strongPattern": "Use only when required, understand compatibility, and configure exact resource behavior.",
    "weakPattern": "Copy complex headers without understanding the application’s cross-origin dependencies.",
    "evidence": "Header set, resource inventory, origin relationships, browser errors, approved use case, and validation."
  }
];

const cookieControls = [
  {
    "control": "Secure",
    "purpose": "Send the fictional cookie only through approved encrypted transport.",
    "gap": "The browser may send the cookie over unintended nonsecure transport if another path is reachable.",
    "validation": "Confirm approved HTTPS requests include the cookie and HTTP requests do not.",
    "owner": "Application and platform owners"
  },
  {
    "control": "HttpOnly",
    "purpose": "Prevent normal fictional page scripts from directly reading a protected session cookie.",
    "gap": "Browser-side weaknesses can gain easier access to session state when the attribute is absent.",
    "validation": "Confirm the application works while normal page scripts cannot directly read the protected cookie.",
    "owner": "Application owner"
  },
  {
    "control": "SameSite",
    "purpose": "Limit when a fictional browser sends the cookie from cross-site contexts.",
    "gap": "A weak or incorrect setting can increase request-forgery risk or break required identity and integration flows.",
    "validation": "Test approved same-site and cross-site flows using supported browsers.",
    "owner": "Application and identity owners"
  },
  {
    "control": "Narrow Domain",
    "purpose": "Send the fictional cookie only to the exact required host or approved subdomain scope.",
    "gap": "A broad parent-domain cookie can reach unrelated or less-trusted applications.",
    "validation": "Confirm only the intended hosts receive the cookie.",
    "owner": "Platform and application owners"
  },
  {
    "control": "Narrow Path",
    "purpose": "Limit the fictional cookie to the application routes that require it.",
    "gap": "An overbroad path can expose cookie state to unrelated routes on the same host.",
    "validation": "Confirm required routes receive the cookie and unrelated routes do not.",
    "owner": "Application owner"
  },
  {
    "control": "Expiration and lifetime",
    "purpose": "Limit how long the fictional cookie or session remains usable.",
    "gap": "Very long lifetimes increase risk from forgotten, copied, or unattended sessions.",
    "validation": "Test idle, absolute, logout, revocation, and renewal behavior.",
    "owner": "Identity and application owners"
  },
  {
    "control": "Rotation",
    "purpose": "Replace fictional session identifiers after sign-in, recovery, privilege change, or elevated risk.",
    "gap": "Reusing the same identifier across trust changes can preserve unsafe session state.",
    "validation": "Confirm the old identifier stops working after rotation.",
    "owner": "Application and identity owners"
  },
  {
    "control": "Minimal content",
    "purpose": "Store only the fictional identifier or state required for the approved browser function.",
    "gap": "Sensitive personal, role, tenant, or business data in client-managed cookies increases exposure and tampering risk.",
    "validation": "Review cookie contents and verify sensitive state is protected and kept server side where appropriate.",
    "owner": "Application and privacy owners"
  }
];

const configurationAreas = [
  {
    "area": "Debug and development modes",
    "secureBaseline": "Disabled in fictional production, with safe user errors and protected internal diagnostics.",
    "risk": "Detailed stack traces, routes, variables, files, services, or test functions may become visible.",
    "evidence": "Environment, build flag, response, error log, deployment template, and owner.",
    "validation": "Trigger supplied safe error cases and confirm generic user messages with useful internal correlation."
  },
  {
    "area": "Default accounts and credentials",
    "secureBaseline": "Remove, disable, rename, or secure fictional defaults before production use.",
    "risk": "Well-known or shared administrative access can remain active without accountability.",
    "evidence": "Account inventory, authentication method, last use, owner, role, and disable result.",
    "validation": "Confirm approved named accounts work and default or shared accounts do not."
  },
  {
    "area": "Secrets and keys",
    "secureBaseline": "Use fictional managed secret storage, narrow identities, rotation, access logging, and no source-code storage.",
    "risk": "Secrets in code, images, logs, files, or broad environment variables can be copied or exposed.",
    "evidence": "Secret reference, access policy, service identity, rotation date, deployment record, and scan result.",
    "validation": "Confirm the application retrieves only required secrets and old versions are retired safely."
  },
  {
    "area": "Exposed ports and services",
    "secureBaseline": "Expose only fictional listeners required by the approved architecture.",
    "risk": "Unused administrative, debug, database, or management interfaces increase attack surface.",
    "evidence": "Service inventory, listener, network policy, owner, route, and platform configuration.",
    "validation": "Confirm required services are reachable through approved paths and unrelated services are denied."
  },
  {
    "area": "File and directory permissions",
    "secureBaseline": "Give fictional application identities only required read, write, or execute access.",
    "risk": "Broad permissions can allow modification or disclosure beyond the intended application scope.",
    "evidence": "Runtime identity, path, permission, owner, access event, and required business operation.",
    "validation": "Confirm required files work and unrelated paths are denied."
  },
  {
    "area": "Error pages and banners",
    "secureBaseline": "Use fictional branded safe errors without unnecessary server, framework, version, or path detail.",
    "risk": "Implementation detail can support targeting or reveal internal design.",
    "evidence": "Response headers, error body, server banner, framework setting, and browser result.",
    "validation": "Review common 4xx and 5xx cases across edge, proxy, server, and application layers."
  },
  {
    "area": "Dependencies and runtime versions",
    "secureBaseline": "Use fictional supported versions with accountable update, testing, rollback, and end-of-life tracking.",
    "risk": "Unsupported libraries or runtimes may contain known weaknesses or lack fixes.",
    "evidence": "Build manifest, runtime version, support status, owner, update plan, and deployment test.",
    "validation": "Confirm the new version preserves required routes, security controls, logs, and performance."
  },
  {
    "area": "Environment consistency",
    "secureBaseline": "Use fictional version-controlled templates and approved differences between development, test, and production.",
    "risk": "Manual or undocumented changes create drift and inconsistent protection.",
    "evidence": "Template, deployment output, drift report, change ticket, environment, and owner.",
    "validation": "Compare deployed values with baseline and confirm every difference is approved."
  }
];

const evidenceMatrix = [
  {
    "source": "Certificate record",
    "supports": "The fictional subject names, issuer, trust chain, key category, validity period, serial, and certificate owner.",
    "limitation": "A valid certificate does not prove the application itself is legitimate, authorized, or securely configured."
  },
  {
    "source": "TLS connection record",
    "supports": "The fictional protocol, cipher category, destination, certificate, client, edge listener, and handshake result.",
    "limitation": "Transport success does not prove secure cookies, headers, backend transport, or application behavior."
  },
  {
    "source": "HTTP response header review",
    "supports": "The fictional HSTS, content policy, frame, referrer, permissions, cache, content-type, and cross-origin controls.",
    "limitation": "A header on one route does not prove consistent coverage across all hosts, errors, redirects, APIs, and static paths."
  },
  {
    "source": "Cookie metadata",
    "supports": "The fictional cookie name category, domain, path, Secure, HttpOnly, SameSite, expiration, and browser behavior.",
    "limitation": "Metadata does not prove the server validates session state correctly or revokes it everywhere."
  },
  {
    "source": "Deployment configuration",
    "supports": "The fictional environment, runtime, image, ports, secret references, identities, flags, and version-controlled baseline.",
    "limitation": "The declared template should be confirmed against the running deployment."
  },
  {
    "source": "Runtime and service inventory",
    "supports": "The fictional listeners, processes, service identities, file access, dependencies, and network relationships.",
    "limitation": "Inventory can become stale and may omit short-lived or external services."
  },
  {
    "source": "User and business-owner report",
    "supports": "The fictional browser warning, broken workflow, expected host, approved embed, session behavior, and business consequence.",
    "limitation": "Human observations need technical and configuration correlation."
  },
  {
    "source": "Change and drift record",
    "supports": "The fictional baseline difference, change owner, reason, approval, deployment time, validation, exception, and rollback.",
    "limitation": "A documented change can still be insecure or incorrectly implemented."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Inventory hosts and paths",
    "detail": "List fictional domains, subdomains, ports, listeners, redirects, proxies, applications, APIs, errors, static content, and internal services."
  },
  {
    "step": "2",
    "title": "Review transport",
    "detail": "Evaluate fictional certificates, names, dates, trust, protocols, redirects, HSTS readiness, and internal encryption requirements."
  },
  {
    "step": "3",
    "title": "Review browser controls",
    "detail": "Inspect fictional security headers, cookie attributes, cache policy, frame restrictions, and cross-origin behavior."
  },
  {
    "step": "4",
    "title": "Review deployment settings",
    "detail": "Check fictional debug flags, secrets, accounts, ports, services, permissions, runtimes, banners, and environment drift."
  },
  {
    "step": "5",
    "title": "Correlate impact",
    "detail": "Compare fictional browser, edge, application, identity, user, and business evidence before claiming exposure or compromise."
  },
  {
    "step": "6",
    "title": "Remediate and validate",
    "detail": "Apply narrow fictional changes, test legitimate and denied behavior, monitor, define rollback, and document residual risk."
  }
];

const investigationTimeline = [
  {
    "time": "08:00:00",
    "source": "Certificate monitor",
    "event": "A fictional portal certificate is scheduled to expire in twenty-one days.",
    "meaning": "A renewal task is required before availability or trust is affected."
  },
  {
    "time": "08:03:00",
    "source": "Ownership review",
    "event": "The certificate owner and application owner confirm the exact production and disaster-recovery hosts.",
    "meaning": "Scope and accountability are established."
  },
  {
    "time": "08:07:00",
    "source": "Header review",
    "event": "The production login route includes HSTS, content policy, frame restriction, referrer policy, and no-store caching.",
    "meaning": "Several browser controls are present on the primary route."
  },
  {
    "time": "08:09:00",
    "source": "Error route",
    "event": "A fictional 500 error response from a legacy path omits HSTS and reveals a framework version banner.",
    "meaning": "Header coverage and error handling are inconsistent."
  },
  {
    "time": "08:11:00",
    "source": "Cookie review",
    "event": "The primary session cookie is Secure, HttpOnly, SameSite=Lax, host scoped, and time limited.",
    "meaning": "The main cookie matches the documented baseline."
  },
  {
    "time": "08:12:00",
    "source": "Legacy cookie",
    "event": "A separate fictional preference cookie is scoped to the parent domain and has a one-year lifetime.",
    "meaning": "A broad nonessential cookie requires scope and lifetime review."
  },
  {
    "time": "08:15:00",
    "source": "Deployment review",
    "event": "The legacy error service runs with a production debug flag enabled and an unnecessary management port.",
    "meaning": "Two configuration weaknesses are confirmed."
  },
  {
    "time": "08:18:00",
    "source": "Impact review",
    "event": "No fictional credential, session, private record, or administrative action exposure is found in supplied logs.",
    "meaning": "Configuration weaknesses are confirmed without confirmed account or business impact."
  },
  {
    "time": "08:22:00",
    "source": "Containment",
    "event": "The unnecessary management listener is removed from the service policy, and the debug route is restricted.",
    "meaning": "Narrow containment reduces exposure before the full deployment change."
  },
  {
    "time": "08:30:00",
    "source": "Remediation",
    "event": "The service receives the standard error handler, headers, debug-off setting, and approved listener template.",
    "meaning": "The legacy path is aligned with the baseline."
  },
  {
    "time": "08:36:00",
    "source": "Cookie remediation",
    "event": "The preference cookie becomes host scoped, shorter lived, and limited to the required path.",
    "meaning": "Nonessential browser state is narrowed."
  },
  {
    "time": "08:42:00",
    "source": "Certificate renewal",
    "event": "A new fictional certificate is issued, staged, and validated before activation.",
    "meaning": "The renewal uses a controlled change process."
  },
  {
    "time": "08:48:00",
    "source": "Positive test",
    "event": "Approved login, logout, identity redirect, error handling, static assets, APIs, and recovery workflows succeed.",
    "meaning": "Legitimate application use remains available."
  },
  {
    "time": "08:52:00",
    "source": "Negative test",
    "event": "HTTP access redirects safely, unapproved framing fails, debug detail is absent, the management port is denied, and old certificate use is removed.",
    "meaning": "The defensive baseline is enforced."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No new drift appears, certificate health is normal, and application error and latency rates remain stable.",
    "meaning": "Short-term validation supports closure."
  }
];

const commonMistakes = [
  "Treating fictional HTTPS as proof that the application, request, user, or business action is trustworthy.",
  "Checking only the homepage while missing login, error, redirect, API, static, legacy, and alternate-host responses.",
  "Enabling broad HSTS subdomain coverage before confirming every required subdomain supports HTTPS.",
  "Adding weak browser-policy allowances to remove reports without fixing unsafe dependencies.",
  "Using parent-domain cookies when only one exact host needs the state.",
  "Storing sensitive personal, role, tenant, or authorization data directly in user-modifiable cookies.",
  "Assuming logout or password change invalidates every session and token automatically.",
  "Leaving fictional debug mode, default accounts, management ports, framework banners, or test routes active in production.",
  "Placing secrets in source code, container images, logs, tickets, or broadly readable environment files.",
  "Trusting deployment templates without confirming the running service matches them.",
  "Making configuration changes without positive tests, negative tests, monitoring, rollback, and owner approval.",
  "Testing or probing real systems instead of using supplied fictional records and approved validation evidence."
];

const quizQuestions = [
  {
    "question": "What does fictional HTTPS most directly provide?",
    "choices": [
      "Protected transport confidentiality and integrity between the approved client and server endpoint.",
      "Proof that every page action is authorized.",
      "Proof that the business request is legitimate.",
      "Automatic secure cookie configuration."
    ],
    "answer": 0,
    "explanation": "HTTPS protects transport, while application identity, authorization, and business trust require separate evidence."
  },
  {
    "question": "Why should HSTS deployment be reviewed carefully before including all subdomains?",
    "choices": [
      "Every required subdomain must reliably support HTTPS or the policy can disrupt access.",
      "HSTS creates user accounts.",
      "HSTS replaces certificates.",
      "Subdomains never share policy."
    ],
    "answer": 0,
    "explanation": "Broad transport policy requires complete host inventory and readiness."
  },
  {
    "question": "Which fictional cookie design is strongest for a primary session?",
    "choices": [
      "Secure, HttpOnly, appropriate SameSite, narrow host and path scope, limited lifetime, rotation, and server-side validation.",
      "Parent-domain scope with no expiration.",
      "Sensitive role and password data stored in the cookie.",
      "Available to every page script."
    ],
    "answer": 0,
    "explanation": "A protected session cookie should be narrow, limited, and connected to secure server-side session logic."
  },
  {
    "question": "What does a fictional Content Security Policy provide?",
    "choices": [
      "Browser-side defense in depth that limits approved content sources and behaviors.",
      "A replacement for safe rendering and authorization.",
      "Guaranteed prevention of every web weakness.",
      "Database encryption."
    ],
    "answer": 0,
    "explanation": "Content policy is valuable defense in depth but does not replace safe application design."
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
    "explanation": "Headers, errors, and transport controls must be validated across every route and host."
  },
  {
    "question": "Which configuration-management pattern is strongest?",
    "choices": [
      "Version-controlled baselines, approved exceptions, drift detection, accountable owners, validation, monitoring, and rollback.",
      "Manual undocumented production changes.",
      "Permanent debug mode.",
      "Shared default administrator access."
    ],
    "answer": 0,
    "explanation": "Strong configuration governance keeps deployed systems aligned with approved standards."
  },
  {
    "question": "Which closure plan is strongest after a fictional web-configuration weakness?",
    "choices": [
      "Validate all hosts, routes, certificates, redirects, headers, cookies, services, errors, secrets, legitimate workflows, denied cases, drift monitoring, gaps, and owner approval.",
      "Close after the homepage loads.",
      "Close after renewing one certificate.",
      "Close because no user complained."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies complete coverage and preserves legitimate application behavior."
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

function TransportLayerGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Transport Architecture
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Layers from Browser to Governance
      </h2>

      <div className="mt-6 grid gap-5">
        {transportLayers.map((item) => (
          <div
            key={item.layer}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.layer}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.role}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Evidence
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50">
                  {item.evidence}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive question
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.defensiveQuestion}
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
          </div>
        ))}
      </div>
    </section>
  );
}

function HeaderControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Browser Security Headers
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Header Areas to Review
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {headerControls.map((item) => (
          <div
            key={item.header}
            className="rounded-2xl border border-cyan-400/25 bg-slate-950 p-5"
          >
            <h3 className="font-black text-cyan-100">{item.header}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Strong pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.strongPattern}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Weak pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.weakPattern}
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

function CookieControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Cookie Defense
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Cookie Controls and Their Owners
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cookieControls.map((item) => (
          <div
            key={item.control}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.control}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                Gap
              </p>
              <p className="mt-2 text-sm leading-6 text-red-50">
                {item.gap}
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                Validation
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.validation}
              </p>
            </div>

            <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
              Owner: {item.owner}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConfigurationGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Secure Configuration
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Production Areas That Need Secure Defaults
      </h2>

      <div className="mt-6 grid gap-5">
        {configurationAreas.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.area}</h3>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Secure baseline
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.secureBaseline}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Risk
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.risk}
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
                  Validation
                </p>
                <p className="mt-2 text-sm leading-6 text-yellow-50">
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Transport and Configuration Evidence Can Prove
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
        Review Web Configuration in Six Steps
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

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Configuration Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Certificate and Legacy-Route Review
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

export default function SecureHeadersCookiesTlsAndConfigurationPage() {
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
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.6 Secure Headers, Cookies, TLS, and Configuration
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional defenders review certificates, HTTPS,
            redirects, transport policy, security headers, cookie attributes,
            reverse proxies, error behavior, secrets, services, production
            settings, configuration drift, validation, monitoring, and
            professional closure.
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
          lessonTitle="Secure Headers, Cookies, TLS, and Configuration"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional HTTPS protects transport but does not prove application legitimacy, authorization, or business approval.",
            "I will review complete host, route, redirect, error, API, static, cookie, proxy, runtime, and deployment coverage.",
            "I will use only supplied fictional certificate, header, cookie, configuration, drift, user, and business evidence.",
            "I will not probe, scan, reconfigure, or attempt to access any real application or service.",
            "I will never publish real certificates, secrets, cookies, tokens, private routes, internal hosts, deployment settings, or user data.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secure Homepage Does Not Prove the Whole Application Is Secure"
        >
          <p className="leading-8">
            A fictional login page can use HTTPS and strong headers while a
            legacy error route reveals framework details. A primary session
            cookie can be narrowly protected while a parent-domain preference
            cookie lasts a year. A production template can be correct while the
            running service keeps debug mode and an unnecessary management port.
            Defenders verify every layer and every deployment path.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak review
              </p>
              <p className="mt-2 leading-7">
                “The fictional homepage uses HTTPS, so the certificates,
                cookies, headers, errors, services, and deployment are secure.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong review
              </p>
              <p className="mt-2 leading-7">
                “Inventory every host and route, compare deployed behavior with
                the approved baseline, remediate narrowly, and validate both
                legitimate use and denied conditions.”
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
          title="Configuration Controls the Behavior Around the Code"
        >
          <p className="leading-8">
            Fictional source code can be well designed while deployment flags,
            reverse-proxy trust, certificate selection, cookie scope, cache
            policy, default accounts, secrets, ports, permissions, unsupported
            runtimes, or manual changes create risk. Professional web defense
            combines application, platform, identity, network, browser, and
            governance evidence.
          </p>
        </SectionCard>

        <TransportLayerGuide />
        <HeaderControlGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Separate Six Configuration Questions"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Identity", "Does the fictional certificate and host match the intended application?"],
              ["Transport", "Is fictional communication protected through every required client, proxy, and service path?"],
              ["Browser", "Which fictional headers and cookie attributes guide secure browser behavior?"],
              ["Runtime", "Which fictional services, ports, identities, permissions, flags, and secrets are active?"],
              ["Coverage", "Do the fictional controls apply to every host, route, redirect, error, API, static, and legacy path?"],
              ["Governance", "Who owns the fictional baseline, renewal, drift detection, exception, validation, and rollback?"],
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

        <CookieControlGuide />
        <ConfigurationGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Transport and Secure Configuration Terms
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
          title="Fake Secure Web Configuration Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook student portal."
          metrics={[
            {
              label: "Reviewed endpoints",
              value: "73",
              note: "Fictional production, recovery, API, static, redirect, error, administrative, and disaster-recovery paths.",
            },
            {
              label: "Baseline matches",
              value: "68",
              note: "Endpoints aligned with approved certificate, header, cookie, runtime, service, and error standards.",
            },
            {
              label: "Open findings",
              value: "5",
              note: "Certificate renewal, legacy error route, broad cookie, management listener, and drift-review cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Error Service Differs from Production Baseline"
          severity="High"
          time="08:15 AM"
          source="Fake Secure Configuration Review Console"
          details="A fictional legacy error service omits selected security headers, reveals a framework version, runs with production debug enabled, and exposes an unnecessary management listener. The primary application route and session cookie match the approved baseline. No supplied evidence confirms credential, session, private-record, or administrative-action exposure."
          recommendation="Preserve the certificate, route, header, runtime, listener, and deployment evidence; restrict the affected service; apply the approved error, header, debug, listener, and cookie baseline; renew the certificate through controlled change; validate every host and route; monitor drift and application health."
        />

        <FakeLogPanel
          title="Fake Certificate and Configuration Timeline"
          logs={[
            "08:00:00 CERT_MONITOR host='portal.meadowbrook.example' expires_in='21d'",
            "08:03:00 OWNERSHIP production_hosts='confirmed' disaster_recovery='confirmed'",
            "08:07:00 HEADER_REVIEW route='/login' hsts='present' csp='present' cache='no-store'",
            "08:09:00 ERROR_ROUTE route='/legacy/error' hsts='missing' framework_banner='visible'",
            "08:11:00 COOKIE session secure='true' http_only='true' same_site='Lax' host_scope='true'",
            "08:12:00 COOKIE preference domain='parent' lifetime='365d'",
            "08:15:00 DEPLOYMENT debug='true' management_port='open'",
            "08:18:00 IMPACT credentials='not_confirmed' sessions='not_confirmed' records='not_confirmed'",
            "08:22:00 CONTAIN management_port='removed' debug_route='restricted'",
            "08:30:00 REMEDIATE error_handler='baseline' headers='baseline' debug='false'",
            "08:36:00 COOKIE_REMEDIATE host_scope='true' path='required_only' lifetime='reduced'",
            "08:42:00 CERT_RENEW staged='true' validation='pass'",
            "08:48:00 POSITIVE_TEST login='pass' logout='pass' api='pass' recovery='pass'",
            "08:52:00 NEGATIVE_TEST http_redirect='pass' framing='deny' debug_detail='absent' management_port='deny'",
            "DAY7 MONITOR drift='0' certificate_health='normal' error_rate='stable'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Configuration Conclusion Is Best Supported?"
          evidence={[
            "The fictional primary login route uses approved HTTPS, HSTS, content policy, frame restriction, referrer policy, and no-store caching.",
            "The primary session cookie is Secure, HttpOnly, SameSite=Lax, host scoped, and time limited.",
            "A legacy error route omits selected headers and reveals a framework version.",
            "The legacy service runs with debug enabled and an unnecessary management listener.",
            "A nonessential preference cookie is parent-domain scoped and long lived.",
            "No credential, session, private-record, or administrative-action exposure is confirmed in supplied logs.",
            "The affected service is restricted and aligned with the approved baseline.",
            "Positive and negative tests confirm legitimate workflows and denied unsafe conditions.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The primary route matches the reviewed baseline, while the legacy error service and broad preference cookie have confirmed configuration gaps; downstream account or business impact is not confirmed.",
            "The entire application is compromised because one header is missing.",
            "HTTPS on the login page proves every route is secure.",
            "Debug mode is safe because no user complained.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports specific configuration weaknesses, successful remediation and validation, and no confirmed downstream impact in the supplied records."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Secure Web Configuration"
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
          title="Complete a Fictional Secure Web Configuration Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Configuration Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty-two supplied fictional records covering domains,
                certificates, HTTPS, redirects, proxies, headers, cookies,
                errors, secrets, ports, services, permissions, runtimes,
                deployments, drift, owners, remediation, validation, monitoring,
                and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory every fictional host, route, redirect, error, API, static path, proxy, and internal service.</li>
                <li>Review certificate names, dates, trust, protocols, HTTPS redirects, HSTS readiness, and renewal ownership.</li>
                <li>Compare browser headers, cookies, caching, framing, permissions, and cross-origin behavior with the baseline.</li>
                <li>Review debug settings, accounts, secrets, ports, services, permissions, banners, runtimes, and environment drift.</li>
                <li>Separate confirmed configuration gaps, possible exposure, observed user effect, account evidence, and business impact.</li>
                <li>Write findings with owners, remediation, positive tests, negative tests, monitoring, rollback, gaps, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not scan, probe, connect to,
            reconfigure, or attempt to access real websites, servers, ports,
            certificates, accounts, secrets, cookies, tokens, logs, deployment
            systems, or private infrastructure data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Certificate Will Expire Soon"
          scenario="A fictional production certificate expires in twenty-one days. The application also has a disaster-recovery host and an identity callback that must remain trusted."
          choices={[
            {
              label: "Choice A",
              response:
                "Confirm exact hosts and owners, issue and stage the replacement, validate names and trust, test production and recovery workflows, schedule controlled activation, retain rollback, monitor, and remove the old certificate after successful cutover.",
              outcome:
                "Best defensive choice. Certificate renewal is an owned lifecycle and change-management process.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Wait until the final day because the current certificate still works.",
              outcome:
                "Risky. Late renewal increases outage and trust-failure risk.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Install the replacement without validating host names or application workflows.",
              outcome:
                "Incomplete. A certificate can be valid yet wrong for required hosts or integrations.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Legacy Service Uses Debug Mode"
          scenario="A fictional legacy error service runs in production with debug enabled, reveals framework details, and exposes an unnecessary management listener. No account or data impact is confirmed."
          choices={[
            {
              label: "Choice A",
              response:
                "Restrict the affected service, preserve evidence, disable debug, remove the listener, apply safe errors and baseline headers, test legitimate and denied conditions, monitor drift, and document that downstream impact is not confirmed.",
              outcome:
                "Best defensive choice. It addresses confirmed configuration gaps without overstating impact.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Ignore the issue because no data loss is visible.",
              outcome:
                "Unsafe. Confirmed production weaknesses still require remediation.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Shut down every web application.",
              outcome:
                "Overbroad. Containment should match the affected service and evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Secure Headers, Cookies, TLS, and Configuration Checklist"
          items={[
            "I inventory fictional domains, hosts, ports, routes, redirects, errors, APIs, static paths, proxies, and internal services.",
            "I review certificate names, trust, dates, ownership, renewal, activation, rollback, and removal.",
            "I validate HTTPS redirects, transport policy, mixed-content behavior, and required internal protection.",
            "I review HSTS, content policy, frame, content-type, referrer, permissions, cache, and cross-origin headers across every path.",
            "I review Secure, HttpOnly, SameSite, domain, path, lifetime, rotation, and minimal cookie content.",
            "I remove or restrict fictional debug modes, default accounts, unnecessary services, broad permissions, banners, and test routes.",
            "I protect secrets through managed storage, narrow identities, rotation, logging, and safe deployment.",
            "I compare running services with version-controlled baselines and investigate drift.",
            "I perform positive tests, negative tests, health monitoring, rollback preparation, and owner review after changes.",
            "I use only fictional evidence and never expose or test real infrastructure, secrets, certificates, sessions, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.6 Mini Quiz: Secure Headers, Cookies, TLS, and Configuration"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Secure Web Configuration Review using at least forty-two domain, certificate, TLS, redirect, proxy, header, cookie, cache, error, account, secret, port, service, permission, runtime, deployment, drift, owner, remediation, validation, monitoring, and closure records. Include a host inventory, certificate lifecycle plan, header and cookie matrix, production-baseline comparison, normalized timeline, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional hosts, certificates, applications, cookies, services, deployments, users, records, and organizations.",
            "Include one strong primary route, one legacy error-route gap, one broad cookie issue, one certificate lifecycle concern, and one configuration-drift case.",
            "Keep transport protection, application trust, configuration gap, observed exposure, account activity, and business impact separate.",
            "Do not include real certificates, secrets, cookies, tokens, hostnames, ports, screenshots, source code, or private infrastructure details.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional HTTPS protects transport but does not prove application legitimacy, authorization, or business approval.",
            "Certificates, redirects, HSTS, security headers, cookies, proxies, runtimes, and deployment settings form one connected control system.",
            "Security controls must be validated across every host, route, error, redirect, API, static path, and environment.",
            "Cookie protection depends on Secure, HttpOnly, SameSite, narrow scope, limited lifetime, rotation, and correct server-side session logic.",
            "Configuration drift, debug settings, default accounts, exposed services, weak permissions, and unsafe secrets can weaken otherwise secure code.",
            "Strong closure validates legitimate use, denied conditions, certificate health, drift monitoring, evidence gaps, residual risk, rollback, and owner approval.",
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