import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const previousModule = "/high-school/advanced/identity-zero-trust-and-access-control";
const modulePath = "/high-school/advanced/cryptography-and-key-management-concepts";

const lessons = [
  {
    number: "A14.1",
    title: "Cryptography in System Design",
    href: `${modulePath}/cryptography-in-system-design`,
    focus:
      "Understand where cryptography belongs in secure architecture and why encryption, hashing, signatures, certificates, and key management solve different problems.",
    lab:
      "Build a fictional cryptography placement map covering data, trust boundaries, protection goals, owners, evidence, and design assumptions.",
    artifact: "Cryptography Architecture Map",
  },
  {
    number: "A14.2",
    title: "Symmetric and Asymmetric Encryption Concepts",
    href: `${modulePath}/symmetric-and-asymmetric-encryption-concepts`,
    focus:
      "Compare symmetric and asymmetric encryption conceptually, including performance, key relationships, architecture roles, and hybrid use.",
    lab:
      "Review fictional system flows and choose an appropriate encryption model using defensive architecture reasoning.",
    artifact: "Encryption Model Comparison",
  },
  {
    number: "A14.3",
    title: "Hashing, Salting, and Integrity Concepts",
    href: `${modulePath}/hashing-salting-and-integrity-concepts`,
    focus:
      "Distinguish hashing from encryption and study salting, integrity checking, password-storage concepts, and evidence limitations.",
    lab:
      "Classify fictional integrity requirements and identify where hashing, salting, or another protection goal belongs.",
    artifact: "Integrity Protection Review",
  },
  {
    number: "A14.4",
    title: "Digital Signatures Conceptually",
    href: `${modulePath}/digital-signatures-conceptually`,
    focus:
      "Explain how digital signatures support authenticity and integrity and how signing differs from encryption.",
    lab:
      "Evaluate fictional signed artifacts, signer ownership, verification evidence, lifecycle, and trust assumptions.",
    artifact: "Digital Signature Trust Review",
  },
  {
    number: "A14.5",
    title: "Certificates and PKI Concepts",
    href: `${modulePath}/certificates-and-pki-concepts`,
    focus:
      "Understand certificates, certificate authorities, trust chains, identity binding, validity, revocation concepts, and PKI governance.",
    lab:
      "Review a fictional certificate inventory and map trust, ownership, expiration, renewal, and dependency evidence.",
    artifact: "Certificate and PKI Trust Register",
  },
  {
    number: "A14.6",
    title: "Key Storage and Rotation",
    href: `${modulePath}/key-storage-and-rotation`,
    focus:
      "Study key ownership, storage boundaries, generation, distribution, rotation, recovery, retirement, and evidence at a safe conceptual level.",
    lab:
      "Build a fictional key lifecycle register covering purpose, owner, storage class, rotation triggers, recovery, and retirement evidence.",
    artifact: "Key Lifecycle Register",
  },
  {
    number: "A14.7",
    title: "Common Crypto Design Mistakes",
    href: `${modulePath}/common-crypto-design-mistakes`,
    focus:
      "Recognize architecture mistakes such as unclear ownership, stale keys, inconsistent protection goals, missing rotation, and weak lifecycle governance.",
    lab:
      "Review fictional crypto architecture decisions and document safer design corrections without exploitation techniques.",
    artifact: "Crypto Design Mistake Review",
  },
  {
    number: "A14.8",
    title: "Encryption in Transit and At Rest",
    href: `${modulePath}/encryption-in-transit-and-at-rest`,
    focus:
      "Compare protection goals for data moving between systems and data stored in applications, databases, backups, devices, and cloud services.",
    lab:
      "Map fictional data flows and storage locations to transit/rest protection requirements, owners, and evidence.",
    artifact: "Data Protection Coverage Matrix",
  },
  {
    number: "A14.9",
    title: "Crypto Policy and Compliance Concepts",
    href: `${modulePath}/crypto-policy-and-compliance-concepts`,
    focus:
      "Connect cryptographic architecture to policy, standards, ownership, exceptions, evidence, review cadence, and compliance obligations.",
    lab:
      "Create a fictional crypto-governance decision register with policy requirements, evidence, exceptions, owners, and remediation.",
    artifact: "Cryptography Governance Register",
  },
  {
    number: "A14.10",
    title: "Key Management Design Lab",
    href: `${modulePath}/key-management-design-lab`,
    focus:
      "Integrate A14.1–A14.9 into one enterprise key-management and cryptography architecture review.",
    lab:
      "Produce a fictional Key-Management Design Recommendation with lifecycle, trust, monitoring, governance, resilience, findings, and decision criteria.",
    artifact: "Key-Management Design Recommendation",
  },
];

const learningOutcomes = [
  "Explain the different security goals served by encryption, hashing, digital signatures, certificates, and key management.",
  "Compare symmetric, asymmetric, and hybrid encryption models at an architecture level without relying on implementation shortcuts.",
  "Evaluate cryptographic trust relationships using purpose, ownership, key lifecycle, certificate lifecycle, storage boundaries, and evidence.",
  "Identify common cryptographic design mistakes such as unclear ownership, stale keys, missing rotation, weak policy alignment, and protection gaps.",
  "Connect encryption in transit and at rest to data flows, storage locations, application boundaries, backups, recovery, and operational resilience.",
  "Produce a Key-Management Design Recommendation integrating architecture, governance, monitoring, lifecycle, exceptions, and evidence.",
];

const snapshot = [
  { label: "Level", value: "Advanced", note: "Architecture and governance reasoning" },
  { label: "Lessons", value: "10", note: "A14.1 through A14.10" },
  { label: "Assessment", value: "25 Questions", note: "Module test after A14.10" },
  { label: "Portfolio", value: "Final Recommendation", note: "Key-management design" },
];

const reviewPattern = [
  {
    number: "01",
    title: "Define the protection goal",
    description:
      "Start with confidentiality, integrity, authenticity, trust, lifecycle control, or the combination the system actually needs.",
  },
  {
    number: "02",
    title: "Map data, identities, and trust",
    description:
      "Identify data, systems, workloads, users, services, certificates, and keys that participate in the relationship.",
  },
  {
    number: "03",
    title: "Evaluate key and certificate lifecycle",
    description:
      "Review ownership, storage class, distribution, use, rotation, expiration, revocation, recovery, and retirement.",
  },
  {
    number: "04",
    title: "Verify evidence and resilience",
    description:
      "Confirm the architecture produces current evidence for state, source health, rotation, renewal, failure, and recovery.",
  },
  {
    number: "05",
    title: "Make a governance decision",
    description:
      "Classify the design as Confirmed, Conditional, Unknown, Blocked, Accepted Risk, or Not Applicable and assign next actions.",
  },
];

const evidencePreview = [
  {
    id: "CRY-01",
    asset: "Student Services Web Session",
    goal: "Confidentiality + service identity",
    design: "Protected transport with managed certificate lifecycle",
    owner: "Application Team",
    evidence: "Current certificate + endpoint policy + monitoring",
    state: "Confirmed",
  },
  {
    id: "CRY-02",
    asset: "Student Support Database",
    goal: "Confidentiality at rest",
    design: "Managed storage encryption with governed key ownership",
    owner: "Data Platform",
    evidence: "Storage policy + key lifecycle record",
    state: "Confirmed",
  },
  {
    id: "CRY-03",
    asset: "Reporting Export Workflow",
    goal: "Integrity + controlled disclosure",
    design: "Protected export path with policy-controlled access",
    owner: "Analytics Product Owner",
    evidence: "Current policy; rotation evidence due for review",
    state: "Conditional",
  },
  {
    id: "CRY-04",
    asset: "Partner Integration Certificate",
    goal: "Service identity + trust",
    design: "Partner certificate bound to integration service",
    owner: "Integration Owner",
    evidence: "Sponsor current; renewal approaching",
    state: "Conditional",
  },
  {
    id: "CRY-05",
    asset: "Legacy Reporting Key",
    goal: "Historical application encryption",
    design: "Legacy key with unclear ownership",
    owner: "Unknown",
    evidence: "Partial inventory + stale lifecycle metadata",
    state: "Blocked",
  },
  {
    id: "CRY-06",
    asset: "Backup Protection Key",
    goal: "Recovery confidentiality",
    design: "Recovery-bound key with documented lifecycle",
    owner: "Resilience Team",
    evidence: "Current recovery test + key inventory",
    state: "Confirmed",
  },
];

const protectionGoals = [
  {
    title: "Confidentiality",
    description:
      "Protect information from unauthorized disclosure. Encryption may support this goal when keys and lifecycle are governed correctly.",
  },
  {
    title: "Integrity",
    description:
      "Provide evidence that information has not changed unexpectedly. Hashing and signatures may support integrity in different ways.",
  },
  {
    title: "Authenticity",
    description:
      "Support confidence about the identity of a signer, service, or trusted endpoint through signatures, certificates, or related trust systems.",
  },
  {
    title: "Trust lifecycle",
    description:
      "Ensure keys, certificates, and cryptographic relationships can be issued, changed, rotated, revoked, recovered, and retired safely.",
  },
  {
    title: "Resilience",
    description:
      "Protect critical data while still supporting legitimate recovery, backup restoration, certificate renewal, and operational continuity.",
  },
  {
    title: "Evidence",
    description:
      "Produce enough metadata to show that protection, ownership, rotation, renewal, and policy requirements remain current.",
  },
];

const roles = [
  {
    role: "Security Architect",
    work:
      "Defines cryptographic protection goals and decides where cryptographic trust belongs in the system.",
  },
  {
    role: "Cloud Security Engineer",
    work:
      "Designs managed encryption, storage protection, certificate, and key-management boundaries.",
  },
  {
    role: "Application Security Engineer",
    work:
      "Reviews how applications use cryptographic protections and identifies unsafe design assumptions.",
  },
  {
    role: "Identity / PKI Engineer",
    work:
      "Manages certificate trust, issuing relationships, renewal, revocation, and service identity.",
  },
  {
    role: "Security Operations Analyst",
    work:
      "Monitors certificate, key, policy, and cryptographic evidence for operational issues.",
  },
  {
    role: "Governance / Risk Analyst",
    work:
      "Connects cryptographic design to policy, compliance, exceptions, ownership, and residual risk.",
  },
];

const safety = [
  "Use fictional architectures, synthetic evidence, and provider-neutral examples.",
  "Do not attempt to break, weaken, bypass, or defeat real encryption.",
  "Do not request, expose, recover, or manipulate real keys, credentials, tokens, certificates, or secrets.",
  "Do not perform cryptographic cracking, password attacks, key extraction, downgrade attacks, or certificate abuse.",
  "Keep implementation discussion defensive, conceptual, and appropriate for authorized system design.",
];

const portfolioPieces = [
  "A14.1 — Cryptography Architecture Map",
  "A14.2 — Encryption Model Comparison",
  "A14.3 — Integrity Protection Review",
  "A14.4 — Digital Signature Trust Review",
  "A14.5 — Certificate and PKI Trust Register",
  "A14.6 — Key Lifecycle Register",
  "A14.7 — Crypto Design Mistake Review",
  "A14.8 — Data Protection Coverage Matrix",
  "A14.9 — Cryptography Governance Register",
  "A14.10 — Key-Management Design Recommendation",
];

export default function A14CryptographyAndKeyManagementConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Advanced Track
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Professional Defensive Learning
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Advanced Module 14
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A14 — Cryptography and Key Management Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cryptography protects data and trust relationships only when the
            architecture uses the right protection for the right purpose.
            Encryption, hashing, digital signatures, certificates, and keys are
            related, but they are not interchangeable.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            A14 focuses on design decisions, lifecycle, ownership, governance,
            evidence, resilience, and common mistakes. It does not teach
            cryptographic attacks, cracking, key theft, or bypass techniques.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A13
            </Link>
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A14.1
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Main Question
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            How do you design cryptographic protection that stays trustworthy
            throughout its lifecycle?
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            A secure architecture does more than check whether encryption is
            present. It asks what protection goal exists, who owns the keys,
            where trust begins and ends, how certificates and keys change over
            time, what happens during failure or recovery, and what evidence
            proves the design still matches policy.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Safety boundary</p>
            <p className="mt-2 leading-7">
              A14 is strictly defensive. All keys, certificates, logs,
              cryptographic states, services, data flows, and architecture
              records are fictional. No lesson requires attacking, cracking,
              extracting, bypassing, or manipulating real cryptographic systems.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Protection Goals
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Start With the Security Goal, Not the Algorithm Name
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {protectionGoals.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Professional Review Pattern
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            A Practical Module-Level Cryptography Review
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            This five-part pattern is useful for the module as a whole.
            Individual lessons will use the structure that best fits the topic
            instead of repeating one rigid framework every time.
          </p>

          <div className="mt-6 grid gap-5">
            {reviewPattern.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-purple-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-purple-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Learning Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Six Capabilities You Will Build
          </h2>
          <div className="mt-6 grid gap-4">
            {learningOutcomes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
            Lesson Sequence
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Ten Advanced Lessons
          </h2>

          <div className="mt-6 grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6 md:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                      {lesson.number}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {lesson.title}
                    </h3>
                  </div>

                  <Link
                    href={lesson.href}
                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open Lesson
                  </Link>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">
                      {lesson.focus}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-purple-200">
                      Defensive Lab
                    </p>
                    <p className="mt-2 text-sm leading-7 text-purple-50">
                      {lesson.lab}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Portfolio Piece
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50">
                      {lesson.artifact}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Fictional Evidence Preview
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Northbridge Cryptography Architecture Snapshot
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Throughout A14, you will work with evidence like this: architecture
            records showing protection goals, ownership, lifecycle, design, and
            current evidence state.
          </p>

          <div className="mt-6 grid gap-5">
            {evidencePreview.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-100">
                    {item.id}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-black text-slate-300">
                    {item.state}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-white">{item.asset}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Protection goal", item.goal],
                    ["Design", item.design],
                    ["Owner", item.owner],
                    ["Evidence", item.evidence],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
            Defensive Boundaries
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            What A14 Will and Will Not Do
          </h2>
          <div className="mt-6 grid gap-4">
            {safety.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">
            Career Connection
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Professionals Who Work With These Decisions
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="text-lg font-black text-purple-50">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">{item.work}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Portfolio Outcome
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Key-Management Design Recommendation
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            Each lesson contributes one piece to the final A14 artifact. By the
            end of A14.10, you will be able to present a fictional
            key-management recommendation explaining protection goals,
            encryption models, integrity, signatures, PKI, key lifecycle, data
            protection coverage, governance, findings, and architecture decisions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {portfolioPieces.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Module Test
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            A14 — 25-Question Assessment
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            After A14.10, the module test will contain exactly 25 questions
            covering encryption types, hashing and salting, digital signatures,
            certificates and PKI, key storage and rotation, encryption in
            transit and at rest, crypto policy, and common crypto design mistakes.
          </p>

          <Link
            href={`${modulePath}/module-test`}
            className="mt-6 inline-block rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-black text-cyan-100 transition hover:bg-cyan-400/20"
          >
            A14 Module Test
          </Link>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Begin Module 14
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Start With Cryptography in System Design
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-cyan-50">
            A14.1 begins by placing cryptography inside the architecture before
            asking which mechanism to use. That foundation makes later key,
            certificate, integrity, transit/rest, and policy decisions easier
            to reason about.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousModule}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
            >
              Previous: A13
            </Link>
            <Link
              href={lessons[0].href}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start A14.1
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}