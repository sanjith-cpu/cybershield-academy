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
const modulePath = `${trackPath}/secure-coding-basics`;
const previousLesson = `${modulePath}/secure-coding-basics-lab`;

const questions = [
  {
    "question": "Which statement best describes a secure development lifecycle?",
    "choices": [
      "Security requirements, threat modeling, implementation, testing, deployment, monitoring, and improvement are integrated throughout development.",
      "Security begins only after release.",
      "Only the security team owns security.",
      "One scanner completes security work."
    ],
    "answer": 0,
    "explanation": "Secure development integrates security across the entire lifecycle."
  },
  {
    "question": "What is the strongest purpose of a threat model?",
    "choices": [
      "Connect assets, users, data flows, trust boundaries, misuse cases, controls, evidence, owners, and residual risk.",
      "Create attack instructions.",
      "Replace requirements and testing.",
      "Prove every possible threat has occurred."
    ],
    "answer": 0,
    "explanation": "Threat modeling organizes defensive reasoning and makes assumptions and controls visible."
  },
  {
    "question": "Why is a trust boundary important?",
    "choices": [
      "Identity, data, privilege, ownership, or control assumptions change and should be revalidated.",
      "The page changes color.",
      "A browser tab opens.",
      "A log receives a timestamp."
    ],
    "answer": 0,
    "explanation": "Trust boundaries identify transitions where controls should verify assumptions again."
  },
  {
    "question": "Which input-validation design is strongest?",
    "choices": [
      "A strict server-side contract defining approved fields, types, formats, ranges, sizes, relationships, states, and business rules.",
      "Client-side checks only.",
      "A list of blocked words.",
      "Trust hidden form values."
    ],
    "answer": 0,
    "explanation": "The server must enforce the authoritative input contract."
  },
  {
    "question": "What does parameterization primarily protect?",
    "choices": [
      "The separation between data values and the structure of a supported operation.",
      "Every authorization decision.",
      "Every browser output context.",
      "Every file upload."
    ],
    "answer": 0,
    "explanation": "Parameterization protects value–structure separation but does not replace other controls."
  },
  {
    "question": "Why must stored data still be handled safely when displayed?",
    "choices": [
      "Data can become unsafe when moved into a new browser, document, URL, log, message, or export context.",
      "Stored data is always executable.",
      "Databases always create unsafe content.",
      "Output safety matters only for passwords."
    ],
    "answer": 0,
    "explanation": "Safety depends on the exact output context, not merely the source."
  },
  {
    "question": "Which file-upload approach is strongest?",
    "choices": [
      "Approved purpose, type and size policy, generated storage ID, private storage, isolated processing, authorization, expiry, and deletion.",
      "Trust the extension.",
      "Use a public folder.",
      "Allow unlimited files."
    ],
    "answer": 0,
    "explanation": "File security requires layered controls across the full lifecycle."
  },
  {
    "question": "Which statement correctly separates authentication and authorization?",
    "choices": [
      "Authentication evaluates identity evidence; authorization decides whether the recognized identity may perform a specific action on a specific object.",
      "They are identical.",
      "Authorization creates passwords.",
      "Authentication proves every business action is approved."
    ],
    "answer": 0,
    "explanation": "A successfully authenticated identity may still be denied an object or action."
  },
  {
    "question": "Which object-authorization design is strongest?",
    "choices": [
      "Resolve the object under the trusted tenant and verify role, ownership or assignment, action, field scope, workflow state, and current session.",
      "Trust the URL identifier.",
      "Hide the link.",
      "Allow every signed-in user."
    ],
    "answer": 0,
    "explanation": "Object authorization requires exact trusted server-side context."
  },
  {
    "question": "Why should a session rotate after sign-in or privilege elevation?",
    "choices": [
      "A new identifier represents the higher-trust state and allows the previous identifier to be invalidated.",
      "It removes expiration.",
      "It grants every role.",
      "It proves user intent."
    ],
    "answer": 0,
    "explanation": "Rotation helps prevent earlier session state from crossing a trust change."
  },
  {
    "question": "What should happen after an account role is removed?",
    "choices": [
      "Current access should reflect the new role state, including session refresh or revocation according to policy.",
      "Old sessions keep the role forever.",
      "Only the menu changes.",
      "The account becomes an administrator."
    ],
    "answer": 0,
    "explanation": "Stale authorization should not remain active after role changes."
  },
  {
    "question": "Which user-facing error response is strongest?",
    "choices": [
      "A clear safe message, stable error code, request reference, and next step without internal or sensitive details.",
      "The full stack trace.",
      "The database query and connection value.",
      "The entire request body."
    ],
    "answer": 0,
    "explanation": "Users need useful guidance while protected diagnostics remain internal."
  },
  {
    "question": "Why are structured events stronger than unbounded free-form log strings?",
    "choices": [
      "They support consistent fields, correlation, validation, safe rendering, searching, ownership, and controlled redaction.",
      "They authorize every action.",
      "They remove retention.",
      "They prove business impact alone."
    ],
    "answer": 0,
    "explanation": "Structured fields improve evidence quality and reduce ambiguity."
  },
  {
    "question": "Which value should never appear completely in standard logs?",
    "choices": [
      "A password, bearer token, session cookie, API key, recovery value, or private signing key.",
      "A stable reason code.",
      "A request ID.",
      "A bounded route category."
    ],
    "answer": 0,
    "explanation": "Secrets should be excluded and replaced with safe metadata."
  },
  {
    "question": "What should secret rotation include?",
    "choices": [
      "Issue a replacement, update consumers, validate health, revoke the old version, monitor, retain rollback, and obtain owner approval.",
      "Change it without testing.",
      "Keep the old value active.",
      "Send it through chat."
    ],
    "answer": 0,
    "explanation": "Rotation is a controlled lifecycle process."
  },
  {
    "question": "What is the strongest service-identity design?",
    "choices": [
      "A named identity per workload with exact audience, environment, resource, action, lifetime, logging, and retirement.",
      "One shared administrator identity.",
      "A production credential reused in development.",
      "An unowned identity."
    ],
    "answer": 0,
    "explanation": "Distinct least-privileged identities improve scope and attribution."
  },
  {
    "question": "What is the strongest way to prioritize a dependency advisory?",
    "choices": [
      "Combine exact component and version, support status, reachability, privilege, exposure, controls, business consequence, update path, and evidence confidence.",
      "Use severity only.",
      "Ignore it without an incident.",
      "Treat it as proof of compromise."
    ],
    "answer": 0,
    "explanation": "Dependency priority depends on the actual environment and business context."
  },
  {
    "question": "Why are lockfiles useful?",
    "choices": [
      "They record exact resolved versions and integrity metadata for repeatable dependency installation.",
      "They authorize every package.",
      "They replace source review.",
      "They prove runtime configuration."
    ],
    "answer": 0,
    "explanation": "Lockfiles improve repeatability but do not replace validation and deployment evidence."
  },
  {
    "question": "Which build-pipeline design is strongest?",
    "choices": [
      "Protected source, pinned tools and dependencies, isolated runner, stage-specific identity, secret isolation, tests, artifact verification, controlled deployment, and post-release validation.",
      "A shared workstation with production credentials.",
      "Mutable tags and manual replacement.",
      "Untrusted changes with signing-key access."
    ],
    "answer": 0,
    "explanation": "Strong pipelines control identity, inputs, execution, artifacts, and deployment."
  },
  {
    "question": "What does artifact integrity most directly support?",
    "choices": [
      "The reviewed artifact is the same artifact stored and selected for deployment without unauthorized change.",
      "The application has no weaknesses.",
      "Every dependency is supported.",
      "Every configuration value is correct."
    ],
    "answer": 0,
    "explanation": "Integrity is one part of source-to-runtime trust."
  },
  {
    "question": "How should a static-analysis warning be handled?",
    "choices": [
      "Validate the exact source, sink, data flow, control, reachability, configuration, runtime, and test evidence before concluding.",
      "Treat the title as proof.",
      "Ignore every warning.",
      "Close it because code compiles."
    ],
    "answer": 0,
    "explanation": "Automated findings identify questions and require context."
  },
  {
    "question": "Why are positive and negative tests both required?",
    "choices": [
      "Positive tests preserve approved workflows, while negative tests prove unsafe and unauthorized conditions are denied.",
      "Positive tests include every negative case.",
      "Negative tests replace requirements.",
      "Only negative tests matter."
    ],
    "answer": 0,
    "explanation": "Security controls should protect the system without breaking legitimate use."
  },
  {
    "question": "What makes a regression test valuable?",
    "choices": [
      "It reproduces the original unsafe condition and permanently verifies the corrected expected result.",
      "It runs only once.",
      "It hides the finding.",
      "It replaces deployment validation."
    ],
    "answer": 0,
    "explanation": "Regression tests reduce the chance that a corrected weakness returns."
  },
  {
    "question": "Which finding statement is strongest?",
    "choices": [
      "The reviewed export route trusted browser tenant and field selection, and a supplied test created an unapproved-tenant export in the test environment.",
      "The entire production environment is compromised.",
      "Security is broken everywhere.",
      "A high-severity warning proves impact."
    ],
    "answer": 0,
    "explanation": "Strong findings use exact scope and supported evidence."
  },
  {
    "question": "Which evidence best supports closure of a secure-coding finding?",
    "choices": [
      "Corrected implementation, positive and negative tests, regression coverage, approved artifact, deployed runtime, source health, monitoring, business outcome, rollback, residual risk, and owner approval.",
      "A comment saying fixed.",
      "One passing unit test.",
      "The pull request was merged."
    ],
    "answer": 0,
    "explanation": "Professional closure verifies the complete technical and operational chain."
  }
];
const scoreBands = [
  [
    "23–25 correct",
    "Advanced Module Mastery",
    "You can connect secure development, implementation, testing, deployment, evidence, and closure across the module."
  ],
  [
    "20–22 correct",
    "Strong Readiness",
    "Review missed questions and explain why the best answer is stronger than every alternative."
  ],
  [
    "16–19 correct",
    "Developing Readiness",
    "Revisit the matching lessons and repeat the test after completing the mastery checklist."
  ],
  [
    "0–15 correct",
    "More Review Recommended",
    "Focus on trusted server controls, evidence chains, validation, and professional closure."
  ]
];
const reviewAreas = [
  [
    "Secure development and threat modeling",
    "Requirements, assets, trust boundaries, misuse cases, controls, owners, evidence, and residual risk.",
    "I9.1–I9.2"
  ],
  [
    "Input, output, and data handling",
    "Server contracts, parameterization, output contexts, files, minimization, retention, and deletion.",
    "I9.3"
  ],
  [
    "Identity, sessions, and authorization",
    "Authentication, current sessions, object and tenant access, workflow state, and privileged approval.",
    "I9.4"
  ],
  [
    "Errors, logs, and secrets",
    "Safe errors, structured minimized evidence, redaction, managed secrets, service identities, and source health.",
    "I9.5"
  ],
  [
    "Dependencies, build, and configuration",
    "Component risk, pipelines, artifacts, baselines, deployment validation, drift, rollback, and exceptions.",
    "I9.6"
  ],
  [
    "Code review, testing, and closure",
    "Tool validation, positive and negative tests, regression coverage, findings, deployment, monitoring, and closure.",
    "I9.7–I9.8"
  ]
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

export default function SecureCodingBasicsModuleTestPage() {
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
              Module I9
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Assessment
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9 Secure Coding Basics Module Test
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Complete this twenty-five-question assessment covering secure
            development, threat modeling, input and output safety, identity,
            sessions, authorization, errors, logging, secrets, dependencies,
            builds, configuration, review, testing, deployment, evidence, and
            closure.
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
            "I completed or reviewed all eight I9 lessons before starting this test.",
            "I will answer each question before revealing the correct answer and explanation.",
            "I will use missed questions to identify which lesson and control area I should review.",
            "I understand that every scenario, account, system, log, file, and organization in this assessment is fictional.",
            "I will not use this test as permission to access, probe, alter, or inspect any real system.",
          ]}
        />

        <SectionCard
          eyebrow="Assessment Rules"
          title="How to Use This Module Test"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
              <h3 className="font-black text-cyan-100">Before revealing answers</h3>
              <p className="mt-3 leading-7">
                Read the full question, compare all choices, and select the
                strongest evidence-based defensive response.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <h3 className="font-black text-emerald-100">After revealing answers</h3>
              <p className="mt-3 leading-7">
                Record missed questions, explain why your choice was weaker, and
                connect the correct answer to the matching lesson.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
              <h3 className="font-black text-yellow-100">Scoring</h3>
              <p className="mt-3 leading-7">
                Give yourself one point for each correct answer. Use the score
                guide only after completing all twenty-five questions.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <h3 className="font-black text-purple-100">Professional standard</h3>
              <p className="mt-3 leading-7">
                Strong answers preserve exact scope, trusted controls, multiple
                evidence sources, legitimate workflows, ownership, and
                measurable closure.
              </p>
            </div>
          </div>
        </SectionCard>

        <MiniQuiz
          title="I9 Secure Coding Basics: 25-Question Module Test"
          questions={questions}
        />

        <SectionCard eyebrow="Score Guide" title="Interpret Your Result">
          <div className="grid gap-4 md:grid-cols-2">
            {scoreBands.map(([range, title, description]) => (
              <div
                key={range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                  {range}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Mastery Review"
          title="Connect Missed Questions to the Correct Lessons"
        >
          <div className="grid gap-4">
            {reviewAreas.map(([area, mastery, lessons]) => (
              <div
                key={area}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-5 lg:grid-cols-[0.55fr_1.2fr_0.3fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Control area
                  </p>
                  <p className="mt-2 font-black text-cyan-100">{area}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Mastery statement
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {mastery}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Review
                  </p>
                  <p className="mt-2 font-black text-emerald-200">{lessons}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <DefenderChecklist
          title="I9 Module Mastery Checklist"
          items={[
            "I can explain why secure development begins with measurable requirements and continues through monitoring and improvement.",
            "I can map assets, data flows, trust boundaries, attack surface, misuse cases, controls, evidence, owners, and residual risk.",
            "I can distinguish input validation, structural allowlisting, parameterization, authorization, output handling, minimization, retention, and deletion.",
            "I can separate authentication, session state, route access, object access, field scope, tenant isolation, workflow authorization, and privileged approval.",
            "I can design safe user errors, protected diagnostics, structured minimized logs, redaction, managed secrets, service identities, rotation, and source-health monitoring.",
            "I can evaluate dependency and configuration risk using exact identity, support, reachability, privilege, exposure, controls, business consequence, and evidence.",
            "I can explain protected source, isolated builds, stage-specific identities, artifact integrity, controlled deployment, runtime validation, drift detection, and rollback.",
            "I can validate automated findings using exact code path, configuration, runtime, controls, tests, data state, business outcome, and evidence limitations.",
            "I can design positive, negative, boundary, authorization, session, file, dependency, configuration, regression, deployment, monitoring, and rollback tests.",
            "I can close a finding only after correction, retesting, artifact and runtime validation, source health, monitoring, business confirmation, residual risk, and owner approval.",
          ]}
        />

        <PortfolioPrompt
          title="Final Module Portfolio Check"
          prompt="Create a one-page fictional Secure Coding Basics Summary connecting one requirement, one threat model, one implementation finding, one safe test, one remediation, one regression test, one deployment validation, one monitoring result, one residual-risk statement, and one owner approval."
          tips={[
            "Use only fictional systems, applications, accounts, routes, code-review summaries, logs, tests, and organizations.",
            "Separate confirmed facts, supported conclusions, assumptions, evidence gaps, test impact, production evidence, remediation, and closure.",
            "Demonstrate both legitimate workflow success and denial of unsafe or unauthorized conditions.",
            "Do not include real source code, credentials, repositories, hostnames, logs, student data, package inventories, configurations, or private findings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Secure coding connects requirements, threat models, implementation, configuration, testing, deployment, monitoring, and improvement.",
            "Trusted server-side controls should validate input, identity, session, authorization, object relationships, workflow state, output context, and data handling.",
            "Errors, logs, secrets, service identities, dependencies, artifacts, and configuration require explicit security ownership.",
            "Automated tools identify questions; defensible conclusions require exact scope, multiple evidence sources, safe reproduction, and business context.",
            "Positive, negative, regression, deployment, source-health, business, and rollback tests work together to prove a correction.",
            "Professional closure requires measurable technical, operational, business, evidence, residual-risk, and ownership conditions.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to Module I9
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