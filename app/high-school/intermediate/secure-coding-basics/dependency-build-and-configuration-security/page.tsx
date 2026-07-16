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
const modulePath = `${trackPath}/secure-coding-basics`;
const previousLesson = `${modulePath}/error-handling-logging-and-secrets`;
const nextLesson = `${modulePath}/secure-code-review-and-testing`;

const objectives = [
  "Explain how fictional dependencies, packages, lockfiles, registries, build tools, artifacts, images, runtimes, configuration, feature flags, deployment identities, and infrastructure settings affect application security.",
  "Distinguish inventory, provenance, integrity, support status, known risk, reachability, exploitability, compensating controls, business exposure, remediation priority, and residual risk.",
  "Review a fictional build and deployment pipeline for trusted sources, pinned versions, artifact verification, least privilege, secret isolation, approval gates, environment separation, rollback, and evidence.",
  "Evaluate fictional runtime and infrastructure configuration for secure defaults, exposed services, debug settings, certificates, headers, identities, permissions, logging, drift, and ownership.",
  "Create a professional fictional Dependency, Build, and Configuration Security Review with findings, owners, validation, monitoring, rollback, evidence gaps, residual risk, and closure criteria."
];
const vocabulary = [
  [
    "Dependency",
    "A fictional library, package, module, framework, runtime, service, image, or component required by an application or build."
  ],
  [
    "Lockfile",
    "A fictional file recording exact resolved dependency versions and integrity metadata for repeatable installation."
  ],
  [
    "Software inventory",
    "A fictional record of direct and transitive components, versions, sources, owners, environments, support status, and usage."
  ],
  [
    "Artifact",
    "A fictional build output such as an application bundle, package, image, binary, deployment archive, or configuration package."
  ],
  [
    "Artifact integrity",
    "Fictional assurance that the reviewed artifact is the same one produced, approved, stored, and deployed without unauthorized change."
  ],
  [
    "Build pipeline",
    "A fictional automated process that retrieves source, dependencies, tools, secrets, tests, builds, signs, stores, and deploys artifacts."
  ],
  [
    "Secure baseline",
    "A fictional approved set of runtime, operating, network, application, header, certificate, logging, identity, and permission settings."
  ],
  [
    "Configuration drift",
    "A fictional difference between the approved baseline and the actual deployed environment."
  ],
  [
    "Residual risk",
    "The fictional risk remaining after updates, isolation, configuration, monitoring, exceptions, and validation are considered."
  ]
];
const dependencyLifecycle = [
  {
    "title": "1. Define the need",
    "summary": "A fictional team documents why a new library, package, service, runtime, or image is required.",
    "details": [
      [
        "Controls",
        "Business need, owner, approved capability, data access, environment, alternatives, maintenance plan, and retirement condition."
      ],
      [
        "Evidence",
        "Design record, owner approval, dependency request, architecture link, and intended consumers."
      ],
      [
        "Failure mode",
        "A package is added for convenience without clear purpose, owner, review, or removal plan."
      ]
    ]
  },
  {
    "title": "2. Select the source",
    "summary": "The fictional component comes from an approved registry, repository, vendor, or internal build system.",
    "details": [
      [
        "Controls",
        "Trusted source, exact package identity, namespace review, publisher or owner, transport protection, and registry policy."
      ],
      [
        "Evidence",
        "Registry record, source URL category, owner, package identity, signature or integrity metadata, and approval."
      ],
      [
        "Failure mode",
        "A similarly named or untrusted package is accepted because the name looks familiar."
      ]
    ]
  },
  {
    "title": "3. Pin and resolve",
    "summary": "The fictional build resolves exact versions and records them for repeatable installation.",
    "details": [
      [
        "Controls",
        "Exact versions, lockfile, integrity metadata, transitive inventory, reproducible install, and update policy."
      ],
      [
        "Evidence",
        "Manifest, lockfile, resolved dependency graph, integrity values, and clean-build comparison."
      ],
      [
        "Failure mode",
        "Broad version ranges or floating tags allow different components to appear across builds."
      ]
    ]
  },
  {
    "title": "4. Evaluate risk",
    "summary": "The fictional team reviews support status, known risk, maintenance health, reachability, privilege, data access, and business exposure.",
    "details": [
      [
        "Controls",
        "Advisory review, support lifecycle, reachable code analysis, usage map, compensating controls, priority, and owner."
      ],
      [
        "Evidence",
        "Inventory, advisory record, code or architecture usage, runtime evidence, tests, and risk decision."
      ],
      [
        "Failure mode",
        "Every advisory is treated as proof of exploitation or every unused-looking package is ignored without evidence."
      ]
    ]
  },
  {
    "title": "5. Build and test",
    "summary": "The fictional component is installed and used through a controlled pipeline with security and regression validation.",
    "details": [
      [
        "Controls",
        "Isolated build, least-privileged identity, no uncontrolled scripts, secret isolation, tests, policy gates, and artifact verification."
      ],
      [
        "Evidence",
        "Build ID, tool versions, dependency graph, test results, policy results, and generated artifact hash."
      ],
      [
        "Failure mode",
        "Package installation executes with broad credentials, network access, or access to unrelated secrets."
      ]
    ]
  },
  {
    "title": "6. Deploy and monitor",
    "summary": "The fictional approved artifact is deployed with the reviewed dependency and runtime configuration.",
    "details": [
      [
        "Controls",
        "Artifact identity, environment policy, runtime version, health checks, logging, monitoring, rollback, and owner routing."
      ],
      [
        "Evidence",
        "Deployment record, artifact digest, runtime inventory, configuration comparison, health metrics, and alerts."
      ],
      [
        "Failure mode",
        "A different artifact, runtime, or package set reaches production than the one that passed review."
      ]
    ]
  },
  {
    "title": "7. Update and remediate",
    "summary": "The fictional team evaluates new versions, known risks, support deadlines, and compatibility changes through controlled change.",
    "details": [
      [
        "Controls",
        "Prioritization, staged update, compatibility tests, negative tests, deployment validation, monitoring, and rollback."
      ],
      [
        "Evidence",
        "Change ticket, before and after versions, tests, risk decision, deployment, and old-version removal."
      ],
      [
        "Failure mode",
        "Updates are delayed indefinitely or installed directly in production without validation."
      ]
    ]
  },
  {
    "title": "8. Retire and verify",
    "summary": "The fictional component, runtime, image, service, rule, secret, and configuration are removed when no longer needed.",
    "details": [
      [
        "Controls",
        "Usage confirmation, manifest cleanup, lockfile update, image cleanup, secret and identity removal, inventory update, and monitoring."
      ],
      [
        "Evidence",
        "Retirement ticket, repository change, clean build, deployment inventory, access denial, and owner sign-off."
      ],
      [
        "Failure mode",
        "Unused components and vulnerable runtimes remain in images, caches, recovery paths, or dormant services."
      ]
    ]
  }
];
const riskFactors = [
  {
    "title": "Known risk and support status",
    "summary": "Review fictional advisories, end-of-support dates, maintainer status, and available fixed versions.",
    "details": [
      [
        "Lower concern",
        "Supported component, no relevant known issue, timely maintenance, and approved source."
      ],
      [
        "Higher concern",
        "Unsupported or abandoned component, relevant advisory, no fix, or uncertain publisher ownership."
      ],
      [
        "Evidence",
        "Advisory record, version, support notice, maintainer history, and owner review."
      ]
    ]
  },
  {
    "title": "Reachability",
    "summary": "Determine whether the fictional application loads, calls, or exposes the affected code path.",
    "details": [
      [
        "Lower concern",
        "Component exists only in development tooling or an unreachable optional path with evidence."
      ],
      [
        "Higher concern",
        "Component runs in production on ordinary requests, file processing, authentication, or privileged workflows."
      ],
      [
        "Evidence",
        "Build graph, source reference, runtime trace, route map, feature flag, and safe test."
      ]
    ]
  },
  {
    "title": "Privilege and data access",
    "summary": "Evaluate what the fictional component or workload can read, change, execute, or reach.",
    "details": [
      [
        "Lower concern",
        "Isolated process with narrow read-only access and no secrets or sensitive data."
      ],
      [
        "Higher concern",
        "Broad service identity, write access, secret access, production network reach, or privileged host capability."
      ],
      [
        "Evidence",
        "Identity policy, file and network permissions, secret access, service map, and runtime configuration."
      ]
    ]
  },
  {
    "title": "Exposure",
    "summary": "Review which fictional users, routes, files, messages, integrations, and environments can reach the component.",
    "details": [
      [
        "Lower concern",
        "Small test-only workflow with approved users and no nonpublic data."
      ],
      [
        "Higher concern",
        "Internet-facing route, broad authenticated population, third-party input, or critical shared service."
      ],
      [
        "Evidence",
        "Route inventory, user population, environment map, listener, integration, and data flow."
      ]
    ]
  },
  {
    "title": "Existing controls",
    "summary": "Assess how fictional isolation, validation, least privilege, network policy, feature flags, monitoring, and rollback reduce risk.",
    "details": [
      [
        "Lower concern",
        "Independent controls are present, tested, monitored, and owned."
      ],
      [
        "Higher concern",
        "Controls are missing, inconsistent, bypassable, untested, or unsupported by evidence."
      ],
      [
        "Evidence",
        "Architecture, configuration, code review, tests, policy results, and monitoring."
      ]
    ]
  },
  {
    "title": "Business consequence",
    "summary": "Connect fictional technical exposure to privacy, integrity, availability, evidence, decision, and trust impact.",
    "details": [
      [
        "Lower concern",
        "Minor internal inconvenience with easy recovery and no sensitive data."
      ],
      [
        "Higher concern",
        "Nonpublic data, privileged action, critical support workflow, export, payment, identity, or prolonged outage."
      ],
      [
        "Evidence",
        "Business owner, data classification, workflow dependency, recovery requirement, and impact statement."
      ]
    ]
  },
  {
    "title": "Update complexity",
    "summary": "Estimate fictional compatibility, migration, testing, deployment, monitoring, and rollback needs.",
    "details": [
      [
        "Lower concern",
        "Small isolated update with strong automated coverage and reversible deployment."
      ],
      [
        "Higher concern",
        "Breaking runtime change, many consumers, data migration, unknown owners, or limited rollback."
      ],
      [
        "Evidence",
        "Dependency graph, compatibility notes, consumers, tests, deployment design, and rollback plan."
      ]
    ]
  },
  {
    "title": "Evidence confidence",
    "summary": "Measure how strongly fictional inventory, build, runtime, test, and operational sources support the conclusion.",
    "details": [
      [
        "Lower confidence",
        "Stale inventory, missing lockfile, unverified artifact, incomplete logs, or uncertain runtime usage."
      ],
      [
        "Higher confidence",
        "Independent source, build, deployment, runtime, test, and business evidence agree."
      ],
      [
        "Evidence",
        "Source count, timestamps, artifact identity, runtime inventory, tests, monitoring, and evidence gaps."
      ]
    ]
  }
];
const pipelineStages = [
  {
    "title": "Source retrieval",
    "summary": "The fictional pipeline retrieves approved source from a protected repository and exact reviewed revision.",
    "details": [
      [
        "Controls",
        "Protected branch, reviewed change, signed or verified revision where used, least-privileged checkout identity, and no untrusted fork secrets."
      ],
      [
        "Evidence",
        "Commit reference, pull request, approvals, repository policy, pipeline trigger, and source digest."
      ],
      [
        "Failure mode",
        "A branch, fork, or unreviewed revision can trigger a privileged build."
      ]
    ]
  },
  {
    "title": "Tool and runner selection",
    "summary": "The fictional build uses approved runner images, compilers, package managers, and security tools.",
    "details": [
      [
        "Controls",
        "Pinned runner image, supported tool versions, isolated workspace, clean environment, and limited network and host access."
      ],
      [
        "Evidence",
        "Runner image digest, tool inventory, environment policy, job identity, and clean-run record."
      ],
      [
        "Failure mode",
        "Mutable runner images or shared workspaces preserve unknown tools, credentials, or artifacts."
      ]
    ]
  },
  {
    "title": "Dependency installation",
    "summary": "The fictional build installs the exact dependency graph from approved sources.",
    "details": [
      [
        "Controls",
        "Lockfile enforcement, integrity verification, trusted registry, script policy, cache validation, and transitive inventory."
      ],
      [
        "Evidence",
        "Manifest, lockfile, registry, integrity result, install log, cache ID, and graph."
      ],
      [
        "Failure mode",
        "Install scripts receive broad secrets or floating versions resolve differently between builds."
      ]
    ]
  },
  {
    "title": "Secret and identity access",
    "summary": "The fictional job receives only the credentials required for the current stage.",
    "details": [
      [
        "Controls",
        "Stage-specific identity, environment separation, short-lived credentials, no secrets for untrusted contributions, and redaction."
      ],
      [
        "Evidence",
        "Job identity, granted secret names, audience, environment, access event, and duration."
      ],
      [
        "Failure mode",
        "Every build step can read production secrets, signing keys, and deployment credentials."
      ]
    ]
  },
  {
    "title": "Build and test",
    "summary": "The fictional application is compiled, packaged, and validated in a controlled workspace.",
    "details": [
      [
        "Controls",
        "Reproducible commands, security and functional tests, policy gates, resource limits, isolated output, and no manual replacement."
      ],
      [
        "Evidence",
        "Build ID, command category, test results, policy results, dependency graph, and output digest."
      ],
      [
        "Failure mode",
        "A failed test is ignored or an artifact is manually rebuilt outside the reviewed pipeline."
      ]
    ]
  },
  {
    "title": "Artifact storage and signing",
    "summary": "The fictional output is stored immutably with identity, provenance, integrity, and retention metadata.",
    "details": [
      [
        "Controls",
        "Immutable repository, artifact digest, build identity, provenance, restricted signing, retention, and access review."
      ],
      [
        "Evidence",
        "Artifact ID, digest, build reference, signature or attestation metadata, owner, and repository record."
      ],
      [
        "Failure mode",
        "Artifacts can be overwritten, replaced, or signed by unrelated identities."
      ]
    ]
  },
  {
    "title": "Deployment",
    "summary": "The fictional deployment selects the approved artifact and applies version-controlled environment configuration.",
    "details": [
      [
        "Controls",
        "Artifact digest, deployment identity, environment approval, configuration template, secret references, migration plan, smoke tests, and rollback."
      ],
      [
        "Evidence",
        "Release ticket, artifact ID, environment, configuration digest, deployment result, and health check."
      ],
      [
        "Failure mode",
        "A mutable tag or local artifact deploys instead of the reviewed output."
      ]
    ]
  },
  {
    "title": "Post-deployment validation",
    "summary": "The fictional team verifies runtime, configuration, dependency, business, monitoring, and rollback health.",
    "details": [
      [
        "Controls",
        "Runtime inventory, configuration comparison, positive and negative smoke tests, source health, business metrics, and rollback readiness."
      ],
      [
        "Evidence",
        "Runtime versions, drift report, test results, alerts, business checks, and owner approval."
      ],
      [
        "Failure mode",
        "The release is considered complete when the deployment command succeeds."
      ]
    ]
  }
];
const configurationAreas = [
  {
    "title": "Runtime and framework",
    "summary": "Use fictional supported versions with secure defaults and documented update ownership.",
    "details": [
      [
        "Review",
        "Version, support date, debug state, modules, startup options, memory and process limits, and owner."
      ],
      [
        "Risk",
        "Unsupported runtime, debug mode, unnecessary modules, unsafe flags, or inconsistent environment values."
      ],
      [
        "Validation",
        "Approved version runs, debug detail is absent, unsupported modules are disabled, and runtime inventory matches the baseline."
      ]
    ]
  },
  {
    "title": "Network listeners and routes",
    "summary": "Expose only fictional required hosts, ports, protocols, routes, health endpoints, and administrative interfaces.",
    "details": [
      [
        "Review",
        "Listeners, bind addresses, proxy routes, management paths, health checks, firewall or policy, and ownership."
      ],
      [
        "Risk",
        "Unnecessary management, debug, metrics, database, or internal service endpoints become reachable."
      ],
      [
        "Validation",
        "Approved paths work while unused ports, unapproved hosts, and administrative routes are denied."
      ]
    ]
  },
  {
    "title": "TLS and certificates",
    "summary": "Protect fictional transport with approved protocols, certificates, names, trust, renewal, and rollback.",
    "details": [
      [
        "Review",
        "Certificate inventory, issuer, names, expiry, protocol policy, private-key handling, automation, and recovery."
      ],
      [
        "Risk",
        "Expired, mismatched, weak, shared, or unmanaged certificates create trust and availability failures."
      ],
      [
        "Validation",
        "Production and recovery paths trust the new certificate, old values retire safely, and monitoring alerts before expiry."
      ]
    ]
  },
  {
    "title": "Headers and cookies",
    "summary": "Apply fictional browser and session protections consistently across routes, redirects, errors, APIs, and legacy paths.",
    "details": [
      [
        "Review",
        "Transport policy, content policy, framing, content type, referrer behavior, cache controls, cookie attributes, scope, and lifetime."
      ],
      [
        "Risk",
        "Coverage gaps on errors, redirects, static routes, subdomains, or legacy services weaken otherwise strong controls."
      ],
      [
        "Validation",
        "Expected headers and cookie attributes appear on all reviewed paths and negative browser conditions fail."
      ]
    ]
  },
  {
    "title": "Secrets and environment values",
    "summary": "Reference fictional managed secrets and validate all nonsecret configuration through approved schemas and baselines.",
    "details": [
      [
        "Review",
        "Secret references, environment separation, defaults, required values, redaction, rotation, and owner."
      ],
      [
        "Risk",
        "Hard-coded secrets, missing values, unsafe defaults, production reuse, environment dumps, or broad secret access."
      ],
      [
        "Validation",
        "Approved values load, missing or invalid configuration blocks startup safely, and no secret value appears in evidence."
      ]
    ]
  },
  {
    "title": "Permissions and service identities",
    "summary": "Grant fictional processes only required files, secrets, databases, queues, services, and deployment actions.",
    "details": [
      [
        "Review",
        "Runtime identity, file permissions, network access, secret policy, downstream operations, environment, and review date."
      ],
      [
        "Risk",
        "Shared or privileged identities expand blast radius and weaken attribution."
      ],
      [
        "Validation",
        "Required operations pass while unrelated resources, environments, and actions are denied."
      ]
    ]
  },
  {
    "title": "Feature flags and change controls",
    "summary": "Use fictional flags as controlled release tools rather than authorization or permanent hidden configuration.",
    "details": [
      [
        "Review",
        "Owner, environment, audience, default, expiry, dependency, rollback, monitoring, and cleanup date."
      ],
      [
        "Risk",
        "Old flags preserve unsafe code, expose features to wrong users, or create inconsistent paths."
      ],
      [
        "Validation",
        "Approved audiences and environments receive the feature, wrong users do not, and rollback behavior is tested."
      ]
    ]
  },
  {
    "title": "Logging, monitoring, and drift",
    "summary": "Detect fictional missing sources, baseline differences, unsafe changes, expired components, and owner gaps.",
    "details": [
      [
        "Review",
        "Source inventory, expected event volume, parser health, drift rules, certificate and dependency monitors, alert owner, and retention."
      ],
      [
        "Risk",
        "The environment changes silently after release or critical evidence disappears."
      ],
      [
        "Validation",
        "Known safe drift and source-loss tests create owned alerts and the environment can be restored to baseline."
      ]
    ]
  }
];
const artifactChecks = [
  {
    "title": "Source identity",
    "summary": "Confirm the fictional artifact maps to the reviewed source revision and pull request.",
    "details": [
      [
        "Evidence",
        "Commit or revision, repository, pull request, approvals, pipeline run, and source digest."
      ],
      [
        "Failure signal",
        "The artifact lacks source reference or maps to an unreviewed branch."
      ],
      [
        "Validation",
        "Rebuild from the recorded source and compare expected artifact identity."
      ]
    ]
  },
  {
    "title": "Dependency identity",
    "summary": "Confirm the fictional artifact contains the approved direct and transitive dependency graph.",
    "details": [
      [
        "Evidence",
        "Manifest, lockfile, component inventory, package source, versions, and integrity metadata."
      ],
      [
        "Failure signal",
        "Runtime inventory contains undeclared or unexpected versions."
      ],
      [
        "Validation",
        "Compare clean build, stored artifact inventory, and deployed runtime inventory."
      ]
    ]
  },
  {
    "title": "Build identity",
    "summary": "Confirm the fictional artifact was produced by the approved pipeline, runner, tools, and workload identity.",
    "details": [
      [
        "Evidence",
        "Build ID, runner image, tool versions, job identity, policy results, and timestamps."
      ],
      [
        "Failure signal",
        "A local or manual build replaces the pipeline output."
      ],
      [
        "Validation",
        "Only approved build identities can publish to the artifact repository."
      ]
    ]
  },
  {
    "title": "Integrity metadata",
    "summary": "Confirm the fictional artifact digest and optional signing or attestation metadata remain consistent.",
    "details": [
      [
        "Evidence",
        "Digest, repository record, signature or attestation metadata, access log, and retention."
      ],
      [
        "Failure signal",
        "The artifact can be overwritten or digest differs between build and deployment."
      ],
      [
        "Validation",
        "Deployment rejects an artifact whose identity or integrity does not match policy."
      ]
    ]
  },
  {
    "title": "Secret absence",
    "summary": "Confirm the fictional artifact does not contain embedded secrets, credentials, private keys, or environment dumps.",
    "details": [
      [
        "Evidence",
        "Approved scanning result, image or package review, build logs, secret references, and exception record."
      ],
      [
        "Failure signal",
        "Inert placeholder secret values appear in layers, files, metadata, or source maps."
      ],
      [
        "Validation",
        "Test placeholders are absent and runtime retrieves values only through approved references."
      ]
    ]
  },
  {
    "title": "Configuration separation",
    "summary": "Keep fictional environment-specific values outside the reusable artifact where appropriate.",
    "details": [
      [
        "Evidence",
        "Artifact contents, deployment template, environment values, secret references, and configuration schema."
      ],
      [
        "Failure signal",
        "Production endpoints, secrets, or flags are embedded in a shared artifact."
      ],
      [
        "Validation",
        "The same approved artifact can deploy to test and production with separate governed configuration."
      ]
    ]
  },
  {
    "title": "Repository and retention",
    "summary": "Store the fictional artifact in an approved immutable repository with access, retention, and cleanup rules.",
    "details": [
      [
        "Evidence",
        "Artifact repository, owner, permissions, retention class, access events, and deletion policy."
      ],
      [
        "Failure signal",
        "Artifacts are copied through personal drives, chats, or mutable shared folders."
      ],
      [
        "Validation",
        "Unauthorized publish and overwrite attempts fail; expired artifacts retire according to policy."
      ]
    ]
  },
  {
    "title": "Deployment match",
    "summary": "Confirm the fictional deployed runtime uses the exact approved artifact and expected configuration.",
    "details": [
      [
        "Evidence",
        "Deployment ID, artifact digest, runtime image or package ID, configuration digest, and health result."
      ],
      [
        "Failure signal",
        "The deployment references a mutable tag or unknown local package."
      ],
      [
        "Validation",
        "Runtime inventory and deployment evidence match the release record."
      ]
    ]
  }
];
const exceptions = [
  {
    "title": "Temporary unsupported dependency",
    "summary": "A fictional component cannot be updated immediately because a critical workflow depends on an older interface.",
    "details": [
      [
        "Required controls",
        "Exact scope, reachability review, isolation, least privilege, monitoring, owner, update plan, deadline, and rollback."
      ],
      [
        "Evidence",
        "Business dependency, technical blocker, affected routes, tests, compensating controls, and approval."
      ],
      [
        "Closure",
        "Update or remove the component, validate workflows, retire the exception, and confirm no old version remains."
      ]
    ]
  },
  {
    "title": "Emergency configuration change",
    "summary": "A fictional service requires a rapid setting change to restore availability.",
    "details": [
      [
        "Required controls",
        "Narrow change, authorized owner, before-and-after evidence, backup, extra monitoring, rollback, and follow-up review."
      ],
      [
        "Evidence",
        "Incident or change record, exact setting, approver, deployment, health result, and due date."
      ],
      [
        "Closure",
        "Return to the approved baseline or formally update the baseline after full review and testing."
      ]
    ]
  },
  {
    "title": "Legacy runtime during migration",
    "summary": "A fictional service temporarily remains on an older supported or nearly unsupported runtime.",
    "details": [
      [
        "Required controls",
        "Limited exposure, isolated network, reduced privileges, dependency freeze, enhanced monitoring, migration owner, and milestone dates."
      ],
      [
        "Evidence",
        "Runtime inventory, route scope, controls, test plan, migration progress, and owner review."
      ],
      [
        "Closure",
        "Move to the approved runtime, remove the old image and service, validate, monitor, and retire the exception."
      ]
    ]
  },
  {
    "title": "Feature flag retains old path",
    "summary": "A fictional rollback flag temporarily keeps a legacy implementation available.",
    "details": [
      [
        "Required controls",
        "Restricted audience, short expiry, clear owner, monitoring, safe defaults, no authorization reliance, and cleanup ticket."
      ],
      [
        "Evidence",
        "Flag policy, environment, audience, default, usage, tests, expiry, and owner."
      ],
      [
        "Closure",
        "Remove the old code and flag after validation and rollback confidence are complete."
      ]
    ]
  }
];
const investigationTimeline = [
  {
    "time": "08:00",
    "source": "Inventory",
    "event": "A fictional reporting application records direct and transitive packages, runtime, base image, owners, and environments.",
    "meaning": "The dependency and runtime scope is established."
  },
  {
    "time": "08:10",
    "source": "Advisory review",
    "event": "A fictional image-processing package has a relevant high-severity advisory with an available fixed version.",
    "meaning": "Known risk exists, but priority still requires reachability and exposure review."
  },
  {
    "time": "08:20",
    "source": "Usage review",
    "event": "The package is loaded only by a file-preview worker that processes teacher-uploaded documents.",
    "meaning": "The affected code is reachable through a defined workflow."
  },
  {
    "time": "08:25",
    "source": "Privilege review",
    "event": "The worker uses a shared service identity with read and write access to all support-document buckets.",
    "meaning": "The workload has broader access than required."
  },
  {
    "time": "08:30",
    "source": "Build review",
    "event": "The lockfile pins the vulnerable package, but the worker image uses a mutable base-image tag.",
    "meaning": "Dependency identity is repeatable while base-image identity is not."
  },
  {
    "time": "08:35",
    "source": "Configuration review",
    "event": "The worker runs with debug logging and includes complete document names in standard events.",
    "meaning": "A configuration and privacy weakness increases exposure."
  },
  {
    "time": "08:40",
    "source": "Containment",
    "event": "New preview processing is paused, the worker identity is reduced to one test bucket, and debug logging is disabled.",
    "meaning": "Narrow controls reduce immediate exposure while preserving unrelated application workflows."
  },
  {
    "time": "09:00",
    "source": "Remediation build",
    "event": "The fixed package and pinned base image are built through the approved pipeline with a named worker identity.",
    "meaning": "Dependency, artifact, and service-identity controls are improved together."
  },
  {
    "time": "09:15",
    "source": "Artifact review",
    "event": "The fictional image digest, source revision, dependency graph, build ID, tests, and provenance metadata are recorded.",
    "meaning": "The artifact can be traced from source to deployment."
  },
  {
    "time": "09:30",
    "source": "Positive test",
    "event": "Approved document preview succeeds in the isolated test environment.",
    "meaning": "Legitimate workflow remains available."
  },
  {
    "time": "09:35",
    "source": "Negative test",
    "event": "Unsupported files, oversized files, wrong-tenant objects, unrelated buckets, debug mode, and old package versions are denied or absent.",
    "meaning": "Several unsafe and unauthorized conditions are controlled."
  },
  {
    "time": "09:45",
    "source": "Deployment",
    "event": "The approved image digest and version-controlled configuration deploy through the production pipeline.",
    "meaning": "The reviewed artifact and settings move into production."
  },
  {
    "time": "10:00",
    "source": "Runtime validation",
    "event": "Production inventory matches the approved package, base image, runtime, identity, listeners, and configuration.",
    "meaning": "The deployed state matches the release evidence."
  },
  {
    "time": "Day 7",
    "source": "Monitoring",
    "event": "Preview health is stable, no old-image use appears, source delivery is normal, and no configuration drift is detected.",
    "meaning": "Short-term operational evidence supports remediation."
  },
  {
    "time": "Day 30",
    "source": "Owner review",
    "event": "The team confirms update policy, image retirement, service permissions, alert ownership, and exception closure.",
    "meaning": "Lifecycle ownership continues after deployment."
  }
];
const commonMistakes = [
  "Treating every fictional dependency advisory as proof of exploitation or ignoring it because no incident is confirmed.",
  "Reviewing only direct packages while missing transitive components, runtimes, base images, build tools, and services.",
  "Using floating versions, broad ranges, mutable tags, or uncontrolled registries in reviewed builds.",
  "Allowing untrusted pull requests or package installation steps to access production secrets or deployment identities.",
  "Scanning source but failing to verify the final artifact, runtime inventory, or deployed configuration.",
  "Assuming an artifact digest alone proves trusted source, approved dependencies, secure build identity, and safe configuration.",
  "Using shared overprivileged service identities across builds, applications, environments, and targets.",
  "Applying secure settings to the main route while legacy, error, recovery, health, static, or administrative paths remain different.",
  "Making direct production changes without updating version-controlled configuration and drift monitoring.",
  "Updating a dependency without positive, negative, compatibility, business, deployment, monitoring, and rollback validation.",
  "Keeping temporary exceptions without exact scope, owner, expiry, compensating controls, evidence, and closure criteria.",
  "Publishing real package inventories, source revisions, build logs, images, credentials, hostnames, or production configuration in a portfolio artifact."
];
const quizQuestions = [
  {
    "question": "What is the strongest fictional dependency-risk conclusion?",
    "choices": [
      "Combine support status, advisory relevance, reachability, privilege, exposure, existing controls, business consequence, update complexity, and evidence confidence.",
      "Treat every advisory as proof of compromise.",
      "Ignore transitive dependencies.",
      "Prioritize only by severity title."
    ],
    "answer": 0,
    "explanation": "Dependency risk requires technical, operational, business, and evidence context."
  },
  {
    "question": "Why are fictional lockfiles important?",
    "choices": [
      "They record exact resolved versions and integrity metadata for repeatable dependency installation.",
      "They authorize every package.",
      "They replace source review.",
      "They prove runtime configuration is secure."
    ],
    "answer": 0,
    "explanation": "Lockfiles improve repeatability but do not replace provenance, risk review, testing, or deployment validation."
  },
  {
    "question": "Which fictional build-pipeline design is strongest?",
    "choices": [
      "Protected source, pinned tools and dependencies, isolated runner, stage-specific identity, secret isolation, tests, artifact integrity, controlled deployment, and post-release validation.",
      "A shared workstation with production credentials.",
      "Mutable tags and manual artifact replacement.",
      "Untrusted changes with signing-key access."
    ],
    "answer": 0,
    "explanation": "Strong pipelines control identity, inputs, execution, artifacts, deployment, evidence, and rollback."
  },
  {
    "question": "What does fictional artifact integrity most directly support?",
    "choices": [
      "The reviewed artifact is the same artifact stored and selected for deployment without unauthorized change.",
      "The application has no security weaknesses.",
      "Every dependency is supported.",
      "Every configuration value is correct."
    ],
    "answer": 0,
    "explanation": "Integrity is one part of trust and must be combined with source, build, dependency, and configuration evidence."
  },
  {
    "question": "Which fictional configuration practice is strongest?",
    "choices": [
      "Version-controlled secure baselines, exact owners, environment separation, safe defaults, validation, drift detection, monitoring, and rollback.",
      "Manual production edits with no record.",
      "Debug mode on every environment.",
      "One shared service identity for all workloads."
    ],
    "answer": 0,
    "explanation": "Configuration security depends on controlled, repeatable, monitored settings."
  },
  {
    "question": "How should a fictional temporary exception be managed?",
    "choices": [
      "Use exact scope, evidence, owner, reason, compensating controls, monitoring, expiry, remediation plan, rollback, and closure criteria.",
      "Leave it undocumented.",
      "Make it permanent by default.",
      "Apply it to every environment."
    ],
    "answer": 0,
    "explanation": "Exceptions should be narrow, temporary, visible, owned, and testable."
  },
  {
    "question": "Which closure plan is strongest after a fictional dependency and configuration finding?",
    "choices": [
      "Verify fixed versions, artifact identity, runtime inventory, service permissions, secure configuration, positive and negative workflows, source health, drift, old-version removal, rollback, residual risk, and owner approval.",
      "Close after updating the manifest only.",
      "Close after one successful build.",
      "Close because no user complained."
    ],
    "answer": 0,
    "explanation": "Professional closure validates source-to-runtime state and operational evidence."
  }
];

type DetailItem = {
  title: string;
  summary: string;
  details: string[][];
};

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

function DetailSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: DetailItem[];
}) {
  const detailStyles = [
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-50",
    "border-blue-400/25 bg-blue-400/10 text-blue-50",
    "border-red-400/25 bg-red-400/10 text-red-50",
  ];

  const labelStyles = [
    "text-emerald-200",
    "text-blue-200",
    "text-red-200",
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>

      <div className="mt-6 grid gap-5">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-lg font-black text-cyan-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.summary}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {item.details.map(([label, detail], index) => (
                <div
                  key={`${item.title}-${label}`}
                  className={`rounded-xl border p-4 ${
                    detailStyles[index % detailStyles.length]
                  }`}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.16em] ${
                      labelStyles[index % labelStyles.length]
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6">{detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineGuide() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Correlated Remediation Timeline
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Follow a Fictional Dependency from Risk Review to Operational Closure
      </h2>

      <div className="mt-6 grid gap-3">
        {investigationTimeline.map((item) => (
          <div
            key={`${item.time}-${item.source}`}
            className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 lg:grid-cols-[0.22fr_0.35fr_1fr_1fr]"
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

export default function DependencyBuildAndConfigurationSecurityPage() {
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
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 8
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I9.6 Dependency, Build, and Configuration Security
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how fictional teams inventory dependencies, protect build
            pipelines, verify artifacts, secure configuration, monitor drift,
            validate deployments, and retire unsafe components.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I9: Secure Coding Basics"
          lessonTitle="Dependency, Build, and Configuration Security"
          lessonNumber={6}
          totalLessons={8}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that fictional dependency risk depends on support status, reachability, privilege, exposure, controls, business consequence, and evidence.",
            "I will separate source, dependency, build, artifact, deployment, runtime, configuration, and monitoring evidence.",
            "I will review direct and transitive packages, tools, runtimes, images, services, identities, feature flags, and recovery paths.",
            "I will use only supplied fictional inventories, pipeline records, configurations, tests, and organizations.",
            "I will never test real registries, builds, repositories, deployments, credentials, images, networks, or production systems.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="The Code You Wrote Is Only One Part of the Application You Deploy"
        >
          <p className="leading-8">
            A fictional application may use hundreds of direct and transitive
            components, a runtime, a base image, build tools, package registries,
            service identities, deployment templates, feature flags, certificates,
            and monitoring rules. A safe source review can still be weakened by
            a mutable image tag, broad build credential, unsupported runtime,
            debug setting, incorrect listener, or artifact that does not match
            the approved build.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak conclusion
              </p>
              <p className="mt-2 leading-7">
                A fictional scanner found a high-severity package advisory, so
                the entire application is compromised.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Strong conclusion
              </p>
              <p className="mt-2 leading-7">
                Confirm the exact component and version, source, reachability,
                privilege, exposure, controls, artifact, runtime, business
                consequence, update path, validation, and residual risk.
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
          title="Security Must Survive the Full Source-to-Runtime Chain"
        >
          <p className="leading-8">
            Fictional security reviews are incomplete if they stop at source
            code. The reviewed source must produce the expected dependency
            graph, pass through a trusted build, create an identifiable artifact,
            deploy through an approved identity, receive secure configuration,
            run on supported infrastructure, produce healthy evidence, and
            remain aligned with the baseline after change.
          </p>
        </SectionCard>

        <DetailSection
          eyebrow="Dependency Lifecycle"
          title="Eight Stages from Need to Retirement"
          items={dependencyLifecycle}
        />

        <DetailSection
          eyebrow="Risk Prioritization"
          title="Eight Factors for Evidence-Based Dependency Decisions"
          items={riskFactors}
        />

        <SectionCard
          eyebrow="Core Concept"
          title="Use the Sourceā€“Componentā€“Buildā€“Artifactā€“Runtimeā€“Evidence Chain"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Source", "Which fictional repository, registry, publisher, revision, package, image, or vendor is approved?"],
              ["Component", "Which fictional direct or transitive version, runtime, tool, service, or image is actually required and reachable?"],
              ["Build", "Which fictional runner, identity, secret scope, tools, tests, policies, and commands produced the output?"],
              ["Artifact", "Which fictional digest, inventory, provenance, repository, access, and retention identify the approved output?"],
              ["Runtime", "Which fictional environment, configuration, identity, listeners, certificates, flags, permissions, and dependencies are active?"],
              ["Evidence", "Which fictional tests, deployment records, runtime inventory, drift, monitoring, business checks, rollback, and owner decisions prove the result?"],
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

        <DetailSection
          eyebrow="Build Pipeline"
          title="Eight Stages for Trusted and Repeatable Delivery"
          items={pipelineStages}
        />

        <DetailSection
          eyebrow="Secure Configuration"
          title="Eight Runtime and Infrastructure Areas"
          items={configurationAreas}
        />

        <DetailSection
          eyebrow="Artifact Verification"
          title="Eight Checks Before Deployment"
          items={artifactChecks}
        />

        <DetailSection
          eyebrow="Exceptions"
          title="Four Controlled Temporary Risk Decisions"
          items={exceptions}
        />

        <TimelineGuide />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Dependency, Build, and Configuration Terms
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
          title="Fake Dependency, Build, and Configuration Dashboard"
          subtitle="Training dashboard for the fictional Meadowbrook environment."
          metrics={[
            {
              label: "Inventoried components",
              value: "286",
              note: "Fictional direct and transitive packages, tools, runtimes, base images, services, and deployment components.",
            },
            {
              label: "Verified artifacts",
              value: "18",
              note: "Artifacts linked to reviewed source, dependency graph, build identity, tests, digest, repository, and deployment.",
            },
            {
              label: "Open findings",
              value: "7",
              note: "Relevant advisory, mutable image tag, broad service identity, debug setting, listener, drift, and exception cases.",
            },
          ]}
        />

        <FakeAlertCard
          title="Reachable Package Risk Combines with Broad Worker Configuration"
          severity="High"
          time="08:35 AM"
          source="Fake Dependency and Build Review Console"
          details="A fictional file-preview worker loads an image-processing package with a relevant high-severity advisory and available fixed version. The worker uses a shared identity with broad bucket access, a mutable base-image tag, debug logging, and complete document names in standard events."
          recommendation="Pause new preview processing, reduce the worker identity, disable debug logging, pin the base image, update the package through the approved pipeline, preserve artifact and provenance evidence, validate approved and denied file workflows, confirm runtime inventory and old-version removal, monitor source health and drift, retain rollback, document residual risk, and obtain owner approval."
        />

        <FakeLogPanel
          title="Fake Dependency and Configuration Remediation Timeline"
          logs={[
            "08:00 INVENTORY packages='recorded' runtime='recorded' base_image='recorded'",
            "08:10 ADVISORY package='image-worker-lib' severity='high' fixed_version='available'",
            "08:20 REACHABILITY workflow='teacher_document_preview' reachable='true'",
            "08:25 IDENTITY worker='shared' bucket_scope='all_support_documents'",
            "08:30 BUILD lockfile='pinned' base_image_tag='mutable'",
            "08:35 CONFIG debug='true' document_names_in_logs='true'",
            "08:40 CONTAIN previews='paused' identity_scope='test_bucket' debug='disabled'",
            "09:00 REMEDIATE package='fixed' base_image='digest_pinned' identity='named'",
            "09:15 ARTIFACT source='linked' graph='linked' build='linked' digest='recorded'",
            "09:30 POSITIVE_TEST approved_preview='pass'",
            "09:35 NEGATIVE_TEST unsupported='deny' oversized='deny' wrong_tenant='deny' unrelated_bucket='deny'",
            "09:45 DEPLOY artifact_digest='approved' config='version_controlled'",
            "10:00 RUNTIME_VERIFY package='fixed' image='approved' identity='least_privileged' drift='0'",
            "DAY7 MONITOR health='stable' old_image_use='0' source_health='normal'",
            "DAY30 REVIEW update_policy='confirmed' old_image='retired' exception='closed'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Dependency and Configuration Conclusion Is Best Supported?"
          evidence={[
            "The fictional package version has a relevant high-severity advisory and an available fixed release.",
            "The package is reachable through the teacher document-preview workflow.",
            "The worker identity can read and write all support-document buckets.",
            "The worker image uses a mutable base-image tag and debug logging.",
            "New preview processing is paused, identity scope is reduced, and debug logging is disabled.",
            "The fixed package and pinned base image are built through the approved pipeline.",
            "The artifact is linked to source, dependency graph, build identity, tests, and digest.",
            "Approved preview succeeds while unsupported, oversized, wrong-tenant, unrelated-bucket, debug, and old-version conditions are denied or absent.",
          ]}
          question="Which conclusion is strongest?"
          options={[
            "The fictional worker had a reachable dependency risk combined with excessive permissions and weak build and configuration controls; narrow containment reduced exposure, and the reviewed update, artifact, deployment, and validation evidence supports remediation.",
            "The entire production environment was compromised.",
            "The advisory alone proves harmful use.",
            "The lockfile proves the mutable base image and service permissions were safe.",
          ]}
          bestAnswer={0}
          explanation="The evidence supports a specific combined dependency, privilege, build, and configuration finding without supporting a total-compromise claim."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Dependency, Build, and Configuration Security"
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
          title="Complete a Fictional Dependency and Deployment Review"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Meadowbrook Reporting and Preview Services
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Review forty-eight supplied fictional records covering manifests,
                lockfiles, transitive graphs, registries, advisories, support
                status, reachability, runners, tools, identities, secrets,
                builds, tests, artifacts, images, runtimes, configuration,
                deployments, drift, exceptions, monitoring, rollback, and owners.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required Analysis
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Inventory fictional direct and transitive packages, runtimes, tools, base images, services, sources, owners, and environments.</li>
                <li>Evaluate support, advisory relevance, reachability, privilege, exposure, controls, business consequence, update complexity, and confidence.</li>
                <li>Review protected source, runners, dependency installation, secret access, tests, artifact storage, deployment, and post-release validation.</li>
                <li>Compare runtime, listeners, certificates, headers, cookies, secrets, identities, flags, logging, monitoring, and drift with the baseline.</li>
                <li>Design positive, negative, compatibility, artifact, deployment, source-health, old-version, drift, and rollback tests.</li>
                <li>Document findings, owners, remediation, exceptions, evidence gaps, residual risk, and closure criteria.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            Use only supplied fictional evidence. Do not access real repositories,
            registries, builds, images, package systems, credentials, pipelines,
            deployments, networks, cloud resources, or production environments.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Scanner Finds a High-Severity Advisory"
          scenario="A fictional package scanner reports a high-severity advisory, but the team has not confirmed the exact runtime version, reachability, privileges, or affected workflow."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the component and version, source, support status, reachability, runtime usage, privileges, exposure, controls, business impact, update path, owner, tests, and evidence gaps before setting final priority.",
              outcome:
                "Best defensive choice. Priority is based on the actual fictional environment rather than the title alone.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Declare complete compromise immediately.",
              outcome:
                "Unsupported. An advisory is risk evidence, not proof of successful harmful use.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Ignore the advisory because no incident is confirmed.",
              outcome:
                "Unsafe. Relevant known risk still requires structured evaluation and ownership.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Production Setting Was Changed Manually"
          scenario="A fictional operator disabled a failing health check directly in production, but the version-controlled configuration still enables it."
          choices={[
            {
              label: "Choice A",
              response:
                "Preserve before-and-after evidence, assess the outage and security reason, restore the approved baseline or formally review a narrow change, test health and failure behavior, update configuration, monitor drift, retain rollback, and document owner approval.",
              outcome:
                "Best defensive choice. The deployed state and controlled source become consistent again.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Leave production different because the service currently works.",
              outcome:
                "Risky. Undocumented drift weakens repeatability, recovery, and future deployment safety.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable every health check in every environment.",
              outcome:
                "Overbroad. The response should match the exact failure and evidence.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Dependency, Build, and Configuration Security Checklist"
          items={[
            "I inventory fictional direct and transitive dependencies, tools, runtimes, base images, services, sources, owners, environments, and support status.",
            "I evaluate advisory relevance, reachability, privilege, exposure, existing controls, business consequence, update complexity, and confidence.",
            "I enforce approved registries, exact versions, lockfiles, integrity metadata, repeatable builds, and transitive visibility.",
            "I protect fictional build runners with isolated workspaces, pinned tools, stage-specific identities, secret isolation, policy gates, and resource limits.",
            "I link fictional artifacts to reviewed source, dependency graph, build identity, tests, digest, repository, retention, and deployment.",
            "I use version-controlled baselines for runtimes, listeners, certificates, headers, cookies, secrets, identities, feature flags, logging, and monitoring.",
            "I validate the exact approved artifact and configuration in the deployed runtime.",
            "I monitor source health, known risk, support deadlines, certificate lifecycle, old versions, service permissions, and configuration drift.",
            "I manage exceptions with exact scope, owner, evidence, compensating controls, expiry, remediation, rollback, and closure criteria.",
            "I use only fictional evidence and never expose or access real packages, repositories, builds, credentials, images, deployments, or production data.",
          ]}
        />

        <MiniQuiz
          title="I9.6 Mini Quiz: Dependency, Build, and Configuration Security"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fictional Dependency, Build, and Configuration Security Review using at least forty-eight manifest, lockfile, dependency-graph, registry, advisory, support, reachability, runner, tool, identity, secret, build, test, artifact, image, runtime, configuration, deployment, drift, exception, monitoring, rollback, and owner records. Include a component inventory, risk matrix, pipeline map, artifact verification record, baseline comparison, findings, positive tests, negative tests, exceptions, evidence gaps, residual risk, and closure criteria."
          tips={[
            "Use only fictional packages, versions, registries, builds, images, configurations, identities, environments, tests, and organizations.",
            "For every finding, identify exact component or setting, source, runtime use, privilege, exposure, controls, business impact, owner, update, and validation.",
            "Keep advisory, reachable weakness, attempted activity, successful harmful use, configuration state, and business impact separate.",
            "Do not include real repository names, package inventories, credentials, source revisions, build logs, images, hostnames, or production settings.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Fictional dependency risk depends on exact identity, support, known risk, reachability, privilege, exposure, controls, business consequence, and evidence.",
            "A trusted source review is incomplete unless the dependency graph, build identity, artifact, deployment, runtime, and configuration also match.",
            "Strong build pipelines isolate untrusted inputs, use stage-specific identities, protect secrets, verify artifacts, enforce tests, and preserve rollback.",
            "Secure configuration requires supported runtimes, narrow listeners, managed certificates, consistent headers and cookies, least-privileged identities, safe flags, logging, and drift detection.",
            "Exceptions must be narrow, time limited, owned, monitored, testable, and connected to a clear remediation and closure plan.",
            "Professional closure verifies fixed versions, artifact and runtime identity, configuration, permissions, positive and negative workflows, monitoring, old-version removal, rollback, residual risk, and owner approval.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module I9
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