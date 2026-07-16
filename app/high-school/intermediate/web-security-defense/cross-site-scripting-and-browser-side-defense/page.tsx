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
const previousLesson = `${modulePath}/input-validation-and-injection-defense`;
const nextLesson = `${modulePath}/request-forgery-clickjacking-and-user-action-protection`;

const objectives = [
  "Explain how fictional reflected, stored, and client-side rendering weaknesses can cause untrusted data to become active browser content.",
  "Distinguish context-specific output encoding, sanitization, safe DOM APIs, trusted templates, content security policy, and browser isolation controls.",
  "Identify fictional data flows from request, database, API, browser storage, URL, message, and third-party sources into HTML, attributes, URLs, styles, scripts, and documents.",
  "Evaluate fictional browser, application, rendering, content-security, user, and business evidence without creating or running harmful scripts.",
  "Create a professional fictional Browser-Side Defense Review with findings, owners, remediation, validation, monitoring, and residual risk."
];

const vocabulary = [
  [
    "Cross-site scripting",
    "A defensive category in which untrusted fictional data is interpreted as active browser content instead of remaining inert data."
  ],
  [
    "Reflected rendering",
    "A fictional pattern in which request data is immediately included in a response or page without safe context handling."
  ],
  [
    "Stored rendering",
    "A fictional pattern in which previously saved data is later displayed to one or more users."
  ],
  [
    "Client-side rendering",
    "A fictional pattern in which browser code reads data and inserts it into the page after the original response loads."
  ],
  [
    "Output context",
    "The exact fictional destination where data is placed, such as HTML text, an attribute, a URL, style data, script data, or a document field."
  ],
  [
    "Output encoding",
    "A defensive transformation that makes fictional data display as data for one exact output context."
  ],
  [
    "Sanitization",
    "A defensive process that removes or transforms disallowed fictional markup when limited rich content must be supported."
  ],
  [
    "Safe DOM API",
    "A fictional browser programming interface that inserts text or assigns well-defined properties without interpreting input as markup."
  ],
  [
    "Content Security Policy",
    "A fictional browser policy delivered by the application that limits approved content sources and selected browser behaviors."
  ],
  [
    "Trusted template",
    "A fictional server or client template whose structure is controlled by developers while untrusted values are bound only as data."
  ],
  [
    "Dangerous sink",
    "A defensive term for a fictional browser or rendering operation that may interpret untrusted content as markup, code, style, or navigation instructions."
  ],
  [
    "Source-to-sink flow",
    "A fictional path showing where data originated, how it was transformed, and where the browser finally used it."
  ]
];

const renderingContexts = [
  {
    "context": "HTML text",
    "example": "A fictional student comment appears as text inside a page section.",
    "risk": "If untrusted content is interpreted as markup, the browser may create unintended elements or behavior.",
    "defense": "Use framework-safe text binding or context-specific HTML text encoding.",
    "validation": "Confirm inert special-character samples display visibly as text and do not create new elements."
  },
  {
    "context": "HTML attribute",
    "example": "A fictional profile label is placed into an element title or data attribute.",
    "risk": "Unsafe characters or unsupported attribute use can change page structure or browser behavior.",
    "defense": "Use safe property assignment, strict attribute allowlists, and attribute-context encoding.",
    "validation": "Confirm the value remains inside the intended attribute and cannot create another attribute or element."
  },
  {
    "context": "URL destination",
    "example": "A fictional help link uses a destination selected from approved application routes.",
    "risk": "Untrusted destinations can redirect users to unintended locations or unsupported browser schemes.",
    "defense": "Use server-defined route names, exact approved schemes and hosts, URL parsing, and destination allowlists.",
    "validation": "Confirm approved internal routes work and unapproved schemes, hosts, and malformed values are rejected."
  },
  {
    "context": "Style or class selection",
    "example": "A fictional status field chooses among approved badge styles.",
    "risk": "Dynamic style text can influence layout, visibility, external loading, or browser behavior.",
    "defense": "Map small approved status values to server-defined classes instead of accepting arbitrary style content.",
    "validation": "Confirm only documented style choices are rendered."
  },
  {
    "context": "Script data",
    "example": "A fictional page initializes a safe configuration object for approved client behavior.",
    "risk": "Untrusted values placed inside script structure can become instructions rather than data.",
    "defense": "Avoid inline script construction, use structured serialization, trusted framework data binding, and restrictive policy.",
    "validation": "Confirm supplied inert values remain data and cannot alter script structure."
  },
  {
    "context": "Rich text",
    "example": "A fictional classroom announcement allows a limited set of formatting such as emphasis and lists.",
    "risk": "Allowing markup increases the chance that unsupported elements, attributes, links, or browser behaviors are preserved.",
    "defense": "Use a maintained sanitizer with an explicit small allowlist and safe link handling.",
    "validation": "Test approved formatting and confirm disallowed elements, attributes, destinations, and embedded content are removed."
  },
  {
    "context": "Document or export",
    "example": "A fictional comment is placed into a generated PDF, spreadsheet, or email summary.",
    "risk": "Content safe for browser text may be unsafe or misleading in another output format.",
    "defense": "Apply format-specific libraries, encoding, neutralization, and safe rendering for the destination document.",
    "validation": "Confirm inert samples remain nonactive in the generated format and preserve expected readability."
  },
  {
    "context": "Log and administrative viewer",
    "example": "A fictional validation event is displayed in an internal web console.",
    "risk": "Unsafe raw values can become active when defenders view logs or case evidence in a browser.",
    "defense": "Use structured fields, length limits, redaction, safe text rendering, and viewer-level content policy.",
    "validation": "Confirm suspicious-looking input is displayed as inert text without creating page elements or navigation."
  }
];

const dataSources = [
  {
    "source": "Query and path values",
    "flow": "A fictional search term or record label enters through the URL and is displayed in the page.",
    "defensiveQuestion": "Is the value validated and encoded for the exact rendering context?",
    "evidence": "Request ID, route, parameter, normalized value, response template, browser output, and content policy.",
    "limitation": "The request record alone does not prove how the browser interpreted the response."
  },
  {
    "source": "Form and API data",
    "flow": "A fictional user submits a field that is stored or returned through an API and later rendered.",
    "defensiveQuestion": "Does the application treat the data as untrusted at every later output boundary?",
    "evidence": "Request schema, API response, storage record, component, rendering method, and browser result.",
    "limitation": "Data can be safe in one context and unsafe in another."
  },
  {
    "source": "Database content",
    "flow": "A fictional profile, comment, announcement, or imported record is retrieved and displayed.",
    "defensiveQuestion": "Is stored content rendered through safe bindings or a narrowly configured sanitizer?",
    "evidence": "Object ID, original field, storage source, template, output context, and viewer result.",
    "limitation": "Storage does not make data trusted."
  },
  {
    "source": "Browser storage",
    "flow": "Fictional local or session storage values influence page state, labels, destinations, or rendered content.",
    "defensiveQuestion": "Does the application validate and safely use browser-controlled state?",
    "evidence": "Storage key category, application read, validation, sink, user session, and rendered result.",
    "limitation": "Browser storage is user controlled and may be changed by extensions or local scripts."
  },
  {
    "source": "Third-party content",
    "flow": "A fictional widget, analytics response, help article, or content feed is inserted into the application.",
    "defensiveQuestion": "Is the integration authenticated, schema validated, isolated, and rendered safely?",
    "evidence": "Provider, request ID, schema result, component, sandbox or policy, and browser behavior.",
    "limitation": "External content can change independently and may have different security practices."
  },
  {
    "source": "Error and diagnostic messages",
    "flow": "A fictional application error includes user-controlled values in a browser-visible message.",
    "defensiveQuestion": "Does the user receive a safe generic message while internal evidence remains structured and protected?",
    "evidence": "Error category, response, template, log event, request ID, and redaction result.",
    "limitation": "Generic responses require internal correlation to preserve diagnostic value."
  },
  {
    "source": "Uploaded or imported documents",
    "flow": "A fictional document field or extracted label appears in a web preview or administrative review page.",
    "defensiveQuestion": "Is extracted content treated as untrusted and rendered as text or within an isolated viewer?",
    "evidence": "File ID, extraction process, preview component, content type, sandbox policy, and browser result.",
    "limitation": "File extension and declared type do not prove safe content."
  },
  {
    "source": "Messages and notifications",
    "flow": "A fictional email subject, chat title, ticket summary, or notification body is displayed inside a web application.",
    "defensiveQuestion": "Does the application safely render content received from another system?",
    "evidence": "Source system, message ID, API record, application component, rendering method, and viewer event.",
    "limitation": "Trust in the sending system does not remove the need for output handling."
  }
];

const browserControls = [
  {
    "control": "Framework-safe text binding",
    "purpose": "Render fictional values as text through the framework’s normal escaped binding path.",
    "benefit": "Reduces accidental markup interpretation in common templates and components.",
    "limitation": "Developers can bypass safe defaults with raw HTML features or unsafe custom code.",
    "validation": "Review components and test inert special-character samples in every affected view."
  },
  {
    "control": "Context-specific encoding",
    "purpose": "Encode fictional data for the exact HTML text, attribute, URL, script-data, document, or other output context.",
    "benefit": "Prevents data from changing the intended structure of the destination.",
    "limitation": "One encoding method is not correct for every context.",
    "validation": "Map each source-to-sink flow and confirm the correct context handling."
  },
  {
    "control": "Sanitization for limited rich text",
    "purpose": "Remove or transform fictional markup outside a small approved set.",
    "benefit": "Allows selected formatting while reducing active or unsafe content.",
    "limitation": "Sanitizers require maintenance, exact configuration, safe URL handling, and careful testing.",
    "validation": "Test allowed formatting and disallowed elements, attributes, links, embeds, and malformed content."
  },
  {
    "control": "Safe DOM APIs",
    "purpose": "Use fictional text insertion and well-defined property assignment rather than raw markup construction.",
    "benefit": "Keeps user-controlled values as data in client-side rendering.",
    "limitation": "Some properties, URLs, styles, and event-like features still require allowlists and validation.",
    "validation": "Review browser code and confirm no untrusted values reach dangerous rendering operations."
  },
  {
    "control": "Content Security Policy",
    "purpose": "Limit fictional scripts, styles, frames, connections, images, forms, and other content to approved sources and behaviors.",
    "benefit": "Reduces the ability of unintended content to execute or load.",
    "limitation": "A policy is defense in depth and does not replace safe rendering or validation.",
    "validation": "Use report-only review, remove unsafe allowances where possible, test legitimate pages, then enforce and monitor."
  },
  {
    "control": "Trusted Types or equivalent policy",
    "purpose": "Restrict selected fictional browser sinks to values created by approved application policies.",
    "benefit": "Helps prevent accidental use of raw strings in dangerous rendering paths.",
    "limitation": "Coverage depends on browser support, application architecture, and correct policy design.",
    "validation": "Inventory protected sinks, review violations, and test all legitimate rendering paths."
  },
  {
    "control": "Isolation and sandboxing",
    "purpose": "Display fictional untrusted documents or third-party content in a restricted frame, viewer, origin, or process.",
    "benefit": "Reduces access to the parent application, account state, and sensitive browser capabilities.",
    "limitation": "Isolation settings can be weakened by overbroad permissions or same-origin design.",
    "validation": "Confirm the isolated content cannot reach parent data, navigation, storage, or privileged actions."
  },
  {
    "control": "Monitoring and safe evidence",
    "purpose": "Record fictional policy violations, unsafe rendering attempts, sanitizer changes, unusual destinations, and affected components.",
    "benefit": "Supports detection, debugging, tuning, and investigation.",
    "limitation": "Logs and dashboards must also render evidence safely and avoid private data.",
    "validation": "Confirm events are structured, redacted, deduplicated, and displayed as inert text."
  }
];

const cspDirectives = [
  {
    "directive": "default-src",
    "purpose": "Provide a fictional fallback source policy for content types that do not have a more specific rule.",
    "strongApproach": "Set a restrictive baseline and define only required content-specific sources.",
    "weakApproach": "Use an unrestricted wildcard as the normal default.",
    "validation": "Inventory required application resources and verify unexpected sources are denied."
  },
  {
    "directive": "script-src",
    "purpose": "Limit fictional script sources and selected inline behavior.",
    "strongApproach": "Use approved origins and nonce- or hash-based controls where supported; reduce unsafe allowances.",
    "weakApproach": "Allow arbitrary inline scripts and broad external sources.",
    "validation": "Test all legitimate scripts, review policy reports, and confirm unexpected scripts cannot load."
  },
  {
    "directive": "style-src",
    "purpose": "Limit fictional stylesheet sources and selected inline styling.",
    "strongApproach": "Allow only required style origins and controlled inline mechanisms where necessary.",
    "weakApproach": "Permit any external stylesheet source.",
    "validation": "Confirm approved layouts work and unapproved style sources are blocked."
  },
  {
    "directive": "connect-src",
    "purpose": "Limit fictional browser connections such as API, fetch, event, and socket destinations.",
    "strongApproach": "Allow only the approved application APIs and required third-party services.",
    "weakApproach": "Permit browser connections to arbitrary destinations.",
    "validation": "Review application network calls and confirm unexpected destinations are denied."
  },
  {
    "directive": "img-src and media-src",
    "purpose": "Limit fictional image, audio, and video sources.",
    "strongApproach": "Allow required application and content-delivery sources with careful data-URL decisions.",
    "weakApproach": "Allow any remote source without ownership review.",
    "validation": "Confirm legitimate media works and unapproved remote content does not load."
  },
  {
    "directive": "frame-src and frame-ancestors",
    "purpose": "Control which fictional content may be framed and which sites may frame the application.",
    "strongApproach": "Allow only approved embedded services and restrict framing of sensitive pages.",
    "weakApproach": "Permit arbitrary frames and embedding.",
    "validation": "Test required embeds and confirm unauthorized framing is denied."
  },
  {
    "directive": "form-action",
    "purpose": "Limit where fictional browser forms may submit.",
    "strongApproach": "Allow only approved application and identity destinations.",
    "weakApproach": "Permit form submission to arbitrary sites.",
    "validation": "Confirm legitimate forms submit and unapproved destinations are blocked."
  },
  {
    "directive": "reporting",
    "purpose": "Send fictional policy violation information to an approved monitoring destination.",
    "strongApproach": "Use structured, privacy-aware reporting with ownership, retention, filtering, and alert thresholds.",
    "weakApproach": "Collect raw reports indefinitely without review or protection.",
    "validation": "Confirm useful reports arrive without sensitive content and support actionable tuning."
  }
];

const evidenceMatrix = [
  {
    "source": "HTTP response and template",
    "supports": "The fictional response body, headers, content type, template path, and server-rendered context.",
    "limitation": "The response alone may not show later client-side DOM changes."
  },
  {
    "source": "Browser DOM and rendering record",
    "supports": "The fictional final page structure, text, attributes, destinations, loaded resources, and visible behavior.",
    "limitation": "Browser evidence may be incomplete and should be tied to the exact request and application version."
  },
  {
    "source": "Client application trace",
    "supports": "The fictional source, transformation, component, browser API, sink, and error path used during rendering.",
    "limitation": "A missing trace does not prove another browser path did not execute."
  },
  {
    "source": "Content-security reports",
    "supports": "The fictional blocked or report-only content type, source, directive, page, and policy version.",
    "limitation": "Policy reports indicate attempted behavior or configuration conflicts, not complete impact."
  },
  {
    "source": "Sanitizer or rendering test",
    "supports": "The fictional allowed and removed elements, attributes, links, destinations, malformed input, and output result.",
    "limitation": "Tests must match the deployed sanitizer version and exact configuration."
  },
  {
    "source": "Database or API record",
    "supports": "The fictional stored value, source system, object, owner, update time, and later retrieval.",
    "limitation": "Stored content requires separate evidence showing how each client renders it."
  },
  {
    "source": "User and owner report",
    "supports": "The fictional page, action, visible behavior, expected workflow, affected users, and business consequence.",
    "limitation": "Human observations need browser and application correlation."
  },
  {
    "source": "Code and configuration review",
    "supports": "The fictional safe binding, raw markup feature, DOM API, sanitizer, content policy, trusted template, and test coverage.",
    "limitation": "Review should be confirmed against the deployed build and runtime behavior."
  }
];

const workflow = [
  {
    "step": "1",
    "title": "Map sources and sinks",
    "detail": "List fictional URL, form, API, database, storage, file, message, and third-party data and every browser or document destination."
  },
  {
    "step": "2",
    "title": "Identify the output context",
    "detail": "Classify fictional destinations as HTML text, attribute, URL, style, script data, rich text, document, log, or isolated content."
  },
  {
    "step": "3",
    "title": "Use safe rendering",
    "detail": "Apply fictional framework bindings, context encoding, maintained sanitization, safe DOM APIs, and server-defined destinations."
  },
  {
    "step": "4",
    "title": "Add browser defense in depth",
    "detail": "Use fictional content security policy, trusted rendering policies, sandboxing, origin separation, and secure headers."
  },
  {
    "step": "5",
    "title": "Correlate evidence and impact",
    "detail": "Compare fictional request, response, browser, application, policy, user, and business records before claiming execution or impact."
  },
  {
    "step": "6",
    "title": "Remediate and validate",
    "detail": "Fix every affected path, test legitimate and inert unsafe-looking content, monitor reports, define rollback, and document residual risk."
  }
];

const investigationTimeline = [
  {
    "time": "09:12:01",
    "source": "Request",
    "event": "A fictional staff user searches for a course title containing reserved markup-like characters.",
    "meaning": "The request contains unusual but inert text that must remain data."
  },
  {
    "time": "09:12:02",
    "source": "Server render",
    "event": "The search results page uses the framework’s normal escaped text binding.",
    "meaning": "The server-rendered result preserves the value as text."
  },
  {
    "time": "09:12:03",
    "source": "Browser",
    "event": "The fictional reserved characters display visibly and create no new page elements.",
    "meaning": "The expected safe rendering behavior is confirmed."
  },
  {
    "time": "09:18:20",
    "source": "Stored content",
    "event": "A fictional announcement created through an older editor contains unsupported markup-like content.",
    "meaning": "A stored-data rendering path requires review."
  },
  {
    "time": "09:18:21",
    "source": "API",
    "event": "The announcement API returns the stored field as a string.",
    "meaning": "The API transports data but does not decide browser rendering safety."
  },
  {
    "time": "09:18:22",
    "source": "Client render",
    "event": "A legacy component inserts the announcement through a raw markup feature.",
    "meaning": "The component bypasses the framework’s normal safe text binding."
  },
  {
    "time": "09:18:23",
    "source": "Content policy",
    "event": "The fictional report-only policy records an unexpected inline behavior violation.",
    "meaning": "Browser defense identifies a risky rendering path but does not replace the required code fix."
  },
  {
    "time": "09:18:24",
    "source": "User report",
    "event": "A staff user reports that the announcement layout changed unexpectedly.",
    "meaning": "Visible page impact is confirmed, while active execution requires separate evidence."
  },
  {
    "time": "09:20:00",
    "source": "Investigation",
    "event": "The team maps the database value, API response, legacy component, raw markup sink, and browser result.",
    "meaning": "The complete source-to-sink path is established."
  },
  {
    "time": "09:22:00",
    "source": "Impact review",
    "event": "No fictional account change, session access, data export, navigation, or business transaction is found.",
    "meaning": "A rendering weakness is confirmed without confirmed account or business impact."
  },
  {
    "time": "09:28:00",
    "source": "Containment",
    "event": "The legacy announcement component is disabled for new publishing while existing announcements are rendered as plain text.",
    "meaning": "Narrow containment reduces exposure while preserving communication."
  },
  {
    "time": "09:35:00",
    "source": "Remediation",
    "event": "The application replaces raw markup insertion with safe text binding and adds a maintained sanitizer for the separate approved rich-text editor.",
    "meaning": "Plain text and rich text receive different defensive paths."
  },
  {
    "time": "09:41:00",
    "source": "Policy update",
    "event": "The fictional content policy removes an unnecessary inline allowance after compatibility testing.",
    "meaning": "Defense in depth is strengthened after the code fix."
  },
  {
    "time": "09:48:00",
    "source": "Positive test",
    "event": "Approved announcements, links, lists, and emphasis render correctly in the rich-text workflow.",
    "meaning": "Legitimate content remains available."
  },
  {
    "time": "09:52:00",
    "source": "Negative test",
    "event": "Unsupported elements, attributes, destinations, and inert markup-like samples are removed or displayed as text.",
    "meaning": "Unsafe rendering conditions are controlled."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "No new policy violations occur from the announcement components, and normal publishing remains stable.",
    "meaning": "Short-term validation supports closure."
  }
];

const commonMistakes = [
  "Assuming fictional stored data is trusted because it came from the application database.",
  "Using one encoding or escaping method for HTML text, attributes, URLs, styles, scripts, documents, and logs.",
  "Disabling the framework’s safe rendering defaults without a documented need and review.",
  "Allowing raw markup for plain-text fields.",
  "Using a sanitizer with an overbroad element, attribute, link, embed, or style allowlist.",
  "Treating content security policy as a replacement for safe rendering and input validation.",
  "Adding broad unsafe policy allowances to remove browser reports without fixing the underlying component.",
  "Trusting browser storage, URL fragments, third-party widgets, message data, or imported content.",
  "Testing only the server response while ignoring later client-side DOM changes.",
  "Treating a layout change as proof of account compromise or data loss without supporting evidence.",
  "Fixing one component while leaving mobile, legacy, administrative, preview, export, and notification views unchanged.",
  "Creating or running active scripts instead of using inert labels and supplied safe rendering evidence."
];

const quizQuestions = [
  {
    "question": "Why must fictional data be handled according to its exact output context?",
    "choices": [
      "HTML text, attributes, URLs, styles, script data, documents, and logs interpret characters differently.",
      "One encoding method is correct everywhere.",
      "Only database content needs output handling.",
      "Browsers ignore context."
    ],
    "answer": 0,
    "explanation": "Safe handling depends on how and where the destination interprets the data."
  },
  {
    "question": "Which browser-side rendering pattern is strongest for plain fictional text?",
    "choices": [
      "Use the framework’s normal escaped text binding or a safe text-insertion API.",
      "Insert the value through raw markup.",
      "Store the value in a hidden field and trust it.",
      "Disable browser policy."
    ],
    "answer": 0,
    "explanation": "Plain text should remain text through safe framework or DOM APIs."
  },
  {
    "question": "When is sanitization most appropriate?",
    "choices": [
      "When a fictional business workflow intentionally supports a limited, documented set of rich-text markup.",
      "For every plain-text field.",
      "As a replacement for authorization.",
      "To make any arbitrary script safe."
    ],
    "answer": 0,
    "explanation": "Sanitization is useful for narrowly defined rich content, not as a universal replacement for safe design."
  },
  {
    "question": "What is the strongest interpretation of a fictional content-security policy report?",
    "choices": [
      "The browser observed content or behavior that conflicted with the policy; root cause and impact still require investigation.",
      "Account compromise is proven.",
      "The user intentionally attacked the application.",
      "The policy should always be disabled."
    ],
    "answer": 0,
    "explanation": "A policy report is valuable evidence but not complete proof of intent or impact."
  },
  {
    "question": "A fictional API returns stored announcement text. Which component decides whether the browser renders it safely?",
    "choices": [
      "The application component and browser rendering path that place the value into the output context.",
      "The database alone.",
      "The user’s password.",
      "The response status code alone."
    ],
    "answer": 0,
    "explanation": "Transporting a string is separate from safely rendering it."
  },
  {
    "question": "Which content-policy change is strongest?",
    "choices": [
      "Review reports, fix unsafe components, test legitimate resources, remove unnecessary allowances, enforce, and monitor.",
      "Add broad unsafe allowances until reports stop.",
      "Allow every external source.",
      "Use policy without safe rendering."
    ],
    "answer": 0,
    "explanation": "Policy should support, not hide, a safe application design."
  },
  {
    "question": "Which closure plan is strongest after a fictional browser-rendering weakness?",
    "choices": [
      "Validate all affected source-to-sink paths, safe text and rich text, legitimate pages, disallowed content, policy behavior, user impact, monitoring, gaps, and owner approval.",
      "Close after changing one component.",
      "Close because no alert appears for one hour.",
      "Close after deleting the stored record."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies every affected rendering path and preserves legitimate use."
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

function RenderingContextGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Output Contexts
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Destinations That Need Different Defenses
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {renderingContexts.map((item) => (
          <div
            key={item.context}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.context}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.example}
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
                Defensive pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                {item.defense}
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

function DataSourceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Source-to-Sink Mapping
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Sources That Can Reach Browser Rendering
      </h2>

      <div className="mt-6 grid gap-5">
        {dataSources.map((item) => (
          <div
            key={item.source}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.source}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.flow}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Defensive question
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.defensiveQuestion}
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

function BrowserControlGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Browser Defense in Depth
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Controls That Work Together
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {browserControls.map((item) => (
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

function PolicyGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Content Security Policy
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Eight Policy Areas for Browser Control
      </h2>

      <div className="mt-6 grid gap-5">
        {cspDirectives.map((item) => (
          <div
            key={item.directive}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-white">{item.directive}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.purpose}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                  Strong approach
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.strongApproach}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                  Weak approach
                </p>
                <p className="mt-2 text-sm leading-6 text-red-50">
                  {item.weakApproach}
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

function EvidenceGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Evidence Matrix
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        What Browser and Rendering Evidence Can Prove
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
        Review Browser-Side Rendering in Six Steps
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
        Correlated Rendering Timeline
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Announcement from Storage to Validation
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

export default function CrossSiteScriptingAndBrowserSideDefensePage() {
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
              Lesson 4 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I8.4 Cross-Site Scripting and Browser-Side Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional applications keep untrusted data from becoming
            active browser content through safe framework bindings,
            context-specific output handling, maintained sanitization, safe DOM
            APIs, content security policy, isolation, monitoring, validation,
            and evidence-based investigation.
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
          lessonTitle="Cross-Site Scripting and Browser-Side Defense"
          lessonNumber={4}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional data can be safe in one output context and unsafe in another.",
            "I will not create, run, or test active scripts or attempt to exploit any real website.",
            "I will use inert labels, reserved-character samples, and supplied fictional rendering evidence only.",
            "I will separate rendering weakness, visible page effect, browser-policy event, account activity, data access, and business impact.",
            "I will never publish real source code, session data, private page content, browser storage, policy reports, or user information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Browser Must Know When Content Is Data"
        >
          <p className="leading-8">
            A fictional comment should remain text. An approved rich-text
            announcement may allow only a small set of formatting. A help link
            should use a server-approved destination. A third-party document
            preview should run in an isolated viewer. Defenders map every
            source-to-sink flow so the browser never mistakes untrusted content
            for page structure or instructions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak design
              </p>
              <p className="mt-2 leading-7">
                “The fictional value came from our database, so insert it through
                raw markup and allow any browser content it contains.”
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong design
              </p>
              <p className="mt-2 leading-7">
                “Treat stored content as untrusted, identify the exact output
                context, use safe binding or narrow sanitization, apply browser
                defense in depth, and validate the rendered result.”
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
          title="Browser-Side Weaknesses Can Affect Every Viewer of Shared Content"
        >
          <p className="leading-8">
            A fictional reflected issue may affect one request. A stored issue
            may reach many viewers. A client-side issue may appear only after
            browser code reads a URL, storage value, API response, or message.
            Strong defense covers server templates, client components, rich-text
            editors, previews, dashboards, exports, notifications, legacy views,
            and administrative consoles.
          </p>
        </SectionCard>

        <RenderingContextGuide />
        <DataSourceGuide />

        <SectionCard
          eyebrow="Core Concept"
          title="Use a Source-to-Sink Model"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              [
                "Source",
                "Where did the fictional data originate: URL, form, API, database, browser storage, file, message, or third party?",
              ],
              [
                "Transformation",
                "Was the fictional data parsed, decoded, normalized, combined, sanitized, mapped, or passed through unchanged?",
              ],
              [
                "Sink",
                "Where did the fictional data reach the browser: text, attribute, URL, style, script data, raw markup, document, or log viewer?",
              ],
              [
                "Control",
                "Which fictional safe binding, encoding, sanitizer, allowlist, policy, or isolation control applied?",
              ],
              [
                "Impact",
                "What fictional page, session, account, data, navigation, or business behavior actually changed?",
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

        <BrowserControlGuide />
        <PolicyGuide />
        <EvidenceGuide />
        <WorkflowGuide />
        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Browser-Side Defense Terms
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
          title="Fake Browser-Side Defense Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook announcements and reporting application."
          metrics={[
            {
              label: "Reviewed components",
              value: "64",
              note: "Fictional server templates, client components, rich-text editors, previews, notifications, exports, and administrative views.",
            },
            {
              label: "Policy events",
              value: "112",
              note: "Report-only and enforced content-policy events grouped by component, directive, source, and application version.",
            },
            {
              label: "Open findings",
              value: "4",
              note: "Legacy raw-markup component, third-party preview, sanitizer exception, and evidence-gap review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Legacy Announcement Component Uses Raw Markup Rendering"
          severity="High"
          time="09:18 AM"
          source="Fake Browser Defense Review Console"
          details="A fictional stored announcement passes through an API as a string, then a legacy client component inserts it through a raw markup feature. The browser report-only content policy records an unexpected inline behavior event, and a user reports changed page layout. No supplied evidence confirms account, session, data-export, or business impact."
          recommendation="Preserve the source-to-sink evidence, disable or restrict the affected component, render plain announcements as text, use a maintained sanitizer only for the approved rich-text workflow, tighten content policy after compatibility testing, review every related viewer, and validate both legitimate and disallowed content."
        />

        <FakeLogPanel
          title="Fake Browser Rendering and Remediation Timeline"
          logs={[
            "09:12:01 REQUEST search_value='inert_reserved_characters'",
            "09:12:02 SERVER_RENDER binding='escaped_text'",
            "09:12:03 BROWSER new_elements='0' displayed_as_text='true'",
            "09:18:20 STORED_CONTENT object='announcement-488' content_type='legacy_rich_text'",
            "09:18:21 API value_type='string'",
            "09:18:22 CLIENT_RENDER component='LegacyAnnouncement' sink='raw_markup'",
            "09:18:23 CSP_REPORT directive='script-src' mode='report_only'",
            "09:18:24 USER_REPORT effect='unexpected_layout_change'",
            "09:20:00 TRACE source='database' transformation='api' sink='raw_markup'",
            "09:22:00 IMPACT account_change='0' data_export='0' business_transaction='0'",
            "09:28:00 CONTAIN legacy_publish='disabled' existing_render='plain_text'",
            "09:35:00 REMEDIATE plain_text='safe_binding' rich_text='maintained_sanitizer'",
            "09:41:00 POLICY unnecessary_inline_allowance='removed_after_test'",
            "09:48:00 POSITIVE_TEST approved_rich_text='pass'",
            "09:52:00 NEGATIVE_TEST unsupported_content='removed_or_text'",
            "DAY7 MONITOR new_component_policy_events='0' publishing='stable'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Browser-Side Conclusion Is Best Supported?"
          evidence={[
            "The fictional announcement is stored in the application database.",
            "The API returns the value as a string.",
            "A legacy client component uses a raw markup rendering feature.",
            "A report-only browser policy records an unexpected inline behavior event.",
            "A user reports changed page layout.",
            "The team maps the source, API, component, sink, and browser result.",
            "No account change, session access, data export, navigation, or business transaction is found.",
            "After remediation, plain text uses safe binding and approved rich text uses a maintained sanitizer.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "A stored browser-rendering weakness is confirmed in the legacy component, visible page impact is confirmed, and account or business impact is not confirmed.",
            "The user account is definitely compromised.",
            "The database is trusted, so no weakness exists.",
            "Content security policy alone permanently fixes the component.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports an unsafe stored source-to-sink path and visible rendering effect, while stronger downstream impact requires separate evidence."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Browser-Side Defense"
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
          title="Complete a Fictional Browser-Side Rendering Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>

              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Rendering Review
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Review forty supplied fictional records covering requests,
                database values, APIs, browser storage, files, messages,
                templates, client components, DOM operations, sanitization,
                content policy, isolation, user reports, remediation, validation,
                monitoring, and closure.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>

              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory every fictional source and browser or document sink.</li>
                <li>Classify each output as HTML text, attribute, URL, style, script data, rich text, document, log, or isolated content.</li>
                <li>Map framework binding, encoding, sanitization, safe DOM APIs, trusted templates, policy, and sandbox controls.</li>
                <li>Separate reflected, stored, and client-side paths without creating active content.</li>
                <li>Correlate browser behavior, policy events, user reports, account evidence, data evidence, and business impact.</li>
                <li>Write findings with facts, confidence, alternatives, owners, remediation, validation, monitoring, rollback, and residual risk.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence and inert sample labels. Do not
            create or run active scripts, modify live pages, test real websites,
            access browser storage or sessions, bypass content policy, publish
            source code, or expose real user, application, policy, or private data.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Plain-Text Announcement Uses Raw Markup Rendering"
          scenario="A fictional announcement field is intended to support plain text only, but a legacy component inserts the stored string through a raw markup feature."
          choices={[
            {
              label: "Choice A",
              response:
                "Replace raw markup with safe text binding, review every related viewer, preserve source-to-sink evidence, test inert reserved-character samples, and validate that normal announcements remain readable.",
              outcome:
                "Best defensive choice. Plain-text content should remain text through safe rendering.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Keep raw markup and add a warning to users.",
              outcome:
                "Weak control. User awareness does not correct unsafe rendering.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Trust the value because it came from the application database.",
              outcome:
                "Unsafe. Stored data remains untrusted at new output boundaries.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Content-Policy Report Appears After a New Widget Launch"
          scenario="A fictional approved third-party support widget causes report-only policy events on selected pages. The widget is required for support, but its source and browser permissions have not been fully documented."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the provider and business owner, map required sources and permissions, isolate the widget where possible, test legitimate support behavior, allow only exact required destinations, enforce gradually, and monitor.",
              outcome:
                "Best defensive choice. It preserves the required service while keeping the exception narrow and evidence based.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Allow every source so the reports stop.",
              outcome:
                "Overbroad. This weakens browser defense beyond the approved widget.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Delete all content-policy reporting.",
              outcome:
                "Incomplete. Reporting supports investigation and safe tuning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Cross-Site Scripting and Browser-Side Defense Checklist"
          items={[
            "I inventory fictional URL, form, API, database, storage, file, message, and third-party data sources.",
            "I identify every HTML text, attribute, URL, style, script-data, rich-text, document, log, and isolated-content sink.",
            "I use framework-safe text binding for plain text and context-specific output handling for every other destination.",
            "I use a maintained, narrowly configured sanitizer only when limited rich text is required.",
            "I avoid raw markup and unsafe DOM operations for untrusted values.",
            "I use content security policy, trusted rendering policies, sandboxing, and origin separation as defense in depth.",
            "I correlate request, response, browser, component, policy, user, account, data, and business evidence before claiming impact.",
            "I review server, client, legacy, mobile, preview, export, notification, and administrative rendering paths.",
            "I validate legitimate content and inert disallowed-looking content after every remediation or policy change.",
            "I use only fictional evidence and never create active scripts or expose real source code, sessions, users, or private data.",
          ]}
        />

        <MiniQuiz
          title="I8.4 Mini Quiz: Cross-Site Scripting and Browser-Side Defense"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Browser-Side Defense Review using at least forty request, response, API, database, storage, file, message, template, component, DOM, sanitizer, content-policy, isolation, browser, user, remediation, validation, monitoring, and closure records. Include a source-to-sink map, output-context matrix, rendering-control inventory, policy review, normalized timeline, findings, owners, positive tests, negative tests, rollback, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional applications, pages, components, users, records, policies, content, and organizations.",
            "Include one safe plain-text path, one stored rendering weakness, one client-side sink weakness, one approved rich-text path, and one third-party policy exception.",
            "Use inert labels such as reserved_characters, unsupported_markup, unapproved_destination, and unexpected_inline_behavior.",
            "Keep rendering weakness, visible page effect, browser-policy event, account activity, data access, and business impact separate.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Browser-side defense starts by mapping fictional data sources to exact output sinks.",
            "Plain text, attributes, URLs, styles, script data, rich text, documents, and logs require different safe handling.",
            "Stored data and internal-system data remain untrusted when rendered in a new context.",
            "Content security policy and isolation provide defense in depth but do not replace safe rendering.",
            "Rendering weakness, visible page effect, account activity, data access, and business impact require separate evidence.",
            "Strong closure validates every affected component, legitimate content, disallowed content, policy behavior, monitoring, evidence gaps, and owner approval.",
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