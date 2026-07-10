import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "B12.1",
    title: "What Cryptography Does",
    route: "what-cryptography-does",
    focus:
      "Understand how cryptography helps protect confidentiality, integrity, authenticity, and trust in digital systems.",
    lab:
      "Match fictional messages, files, accounts, and connections with the cryptographic goal they need.",
  },
  {
    number: "B12.2",
    title: "Plaintext, Ciphertext, Algorithms, and Keys",
    route: "plaintext-ciphertext-algorithms-and-keys",
    focus:
      "Learn the basic language of cryptography and how algorithms and keys transform readable information into protected ciphertext.",
    lab:
      "Label a fictional encryption workflow and identify which parts must remain secret and which may be public.",
  },
  {
    number: "B12.3",
    title: "Symmetric Encryption Basics",
    route: "symmetric-encryption-basics",
    focus:
      "Explore how one shared secret key can protect data efficiently and why secure key sharing and storage matter.",
    lab:
      "Review fictional symmetric-encryption scenarios and identify key-distribution, storage, and access risks.",
  },
  {
    number: "B12.4",
    title: "Asymmetric Encryption Basics",
    route: "asymmetric-encryption-basics",
    focus:
      "Understand public and private keys, secure exchange, digital signatures, and why the private key must remain protected.",
    lab:
      "Sort fictional public-key and private-key actions into safe and unsafe choices.",
  },
  {
    number: "B12.5",
    title: "Hashing and Data Integrity",
    route: "hashing-and-data-integrity",
    focus:
      "Learn how cryptographic hashes create fixed-length fingerprints used to detect changes and support integrity checking.",
    lab:
      "Compare fictional file hashes before and after approved changes and explain what the differences mean.",
  },
  {
    number: "B12.6",
    title: "Certificates and Secure Connections",
    route: "certificates-and-secure-connections",
    focus:
      "Learn how certificates, trusted authorities, HTTPS, browser warnings, and identity checks support secure connections.",
    lab:
      "Inspect fictional certificate and browser evidence and choose the safest response to each connection.",
  },
  {
    number: "B12.7",
    title: "Cryptography Decision Lab",
    route: "cryptography-decision-lab",
    focus:
      "Apply encryption, keys, hashing, signatures, certificates, and secure-connection concepts to defensive scenarios.",
    lab:
      "Build a fictional protection plan for messages, files, software downloads, websites, accounts, and backups.",
  },
];

const moduleStats = [
  ["Track", "High School Beginner"],
  ["Module", "B12 of 15"],
  ["Lessons", "7"],
  ["Module Test", "25 questions"],
];

const objectives = [
  "Explain how cryptography supports confidentiality, integrity, authenticity, and trust.",
  "Use the terms plaintext, ciphertext, algorithm, key, encryption, and decryption correctly.",
  "Compare symmetric and asymmetric encryption at a beginner level.",
  "Explain how hashing helps detect changes without reversing the original data.",
  "Recognize the role of certificates, HTTPS, browser warnings, and trusted identity checks.",
];

const protectionFlow = [
  {
    label: "Identify the goal",
    text:
      "Decide whether the data needs confidentiality, integrity, authenticity, secure exchange, or several protections together.",
  },
  {
    label: "Choose the method",
    text:
      "Match encryption, hashing, signatures, certificates, and secure connections to the defensive need.",
  },
  {
    label: "Protect the keys",
    text:
      "Limit access to secret and private keys, use approved storage, and never share them through untrusted channels.",
  },
  {
    label: "Verify identity",
    text:
      "Check trusted certificates, official services, expected names, and approved warnings before sending sensitive data.",
  },
  {
    label: "Confirm the result",
    text:
      "Verify that protected data, signatures, hashes, and connections behave as expected through approved tools.",
  },
];

const fakeCryptoEvents = [
  [
    "Encryption",
    "Private school file stored as readable plaintext",
    "Protect with approved encryption",
  ],
  [
    "Hashing",
    "Downloaded file hash differs from the publisher value",
    "Stop and verify source",
  ],
  [
    "Certificate",
    "Browser warns that the site identity cannot be verified",
    "Do not continue",
  ],
  [
    "Key safety",
    "Private key is attached to a public message",
    "Revoke and report",
  ],
];

export default function IntroToCryptographyConceptsModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-cyan-500/20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/high-school"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← High School Hub
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Beginner Track
            </Link>
            <Link
              href="/high-school/beginner/data-protection-and-backups"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              ← Previous Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Beginner Track →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-cyan-200">
                Beginner Module B12
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Introduction to Cryptography Concepts
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Learn how encryption, keys, hashing, signatures, certificates,
                and secure connections help protect digital information and
                build trust online.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/high-school/beginner/intro-to-cryptography-concepts/what-cryptography-does"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Module
                </Link>
                <Link
                  href="/high-school/beginner/intro-to-cryptography-concepts/module-test"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Module Test
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <h2 className="text-xl font-black text-cyan-200">
                Module Snapshot
              </h2>
              <div className="mt-5 space-y-4">
                {moduleStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-bold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Module Mission
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Understand how cryptography protects information and verifies trust.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Cryptography helps keep information private, detect unauthorized
              changes, verify identity, protect stored data, and establish safer
              digital connections. This module focuses on defensive concepts and
              careful decision-making rather than complex mathematics.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-200">
              Safety Reminder
            </p>
            <p className="mt-3 leading-7 text-yellow-50">
              Every key, certificate, hash, message, file, account, website, and
              connection in this module is fictional. Students should never
              share real private keys, recovery secrets, passwords, MFA codes,
              or protected personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Visual Framework
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              The cryptography protection workflow
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Strong cryptographic decisions begin with the protection goal and
              continue through trusted methods, protected keys, identity checks,
              and verification.
            </p>

            <div className="mt-6 space-y-3">
              {protectionFlow.map((step, index) => (
                <div
                  key={step.label}
                  className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-lg font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div className="hidden h-px w-10 bg-cyan-400/30 sm:block" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                  Fake Data Panel
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Defensive Crypto Events
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Fake Data
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {fakeCryptoEvents.map(([area, event, response]) => (
                <div
                  key={`${area}-${event}`}
                  className="grid gap-2 border-b border-slate-800 bg-slate-950/60 p-4 text-sm last:border-0 sm:grid-cols-[0.35fr_1fr_0.45fr] sm:gap-3"
                >
                  <span className="font-mono font-bold text-cyan-200">
                    {area}
                  </span>
                  <span className="text-slate-300">{event}</span>
                  <span className="text-right font-bold text-emerald-200">
                    {response}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This panel is fictional. Students review displayed evidence only
              and never expose real cryptographic keys, private data, or account
              secrets.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Learning Path
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">B12 Lessons</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each lesson uses fictional messages, files, keys, certificates,
            hashes, downloads, accounts, websites, and secure-connection
            scenarios to build practical defensive understanding.
          </p>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.number}
              href={`/high-school/beginner/intro-to-cryptography-concepts/${lesson.route}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
            >
              <div className="grid gap-5 lg:grid-cols-[0.25fr_1fr_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-cyan-300">
                    {lesson.number}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Lesson {index + 1}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-100">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.focus}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    Safe Lab
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {lesson.lab}
                  </p>
                </div>

                <span className="text-sm font-bold text-cyan-300">Open →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Objectives
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              By the end, students can:
            </h2>

            <div className="mt-5 space-y-3">
              {objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-300">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Module Assessment
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              B12 Module Test
            </h2>
            <p className="mt-4 leading-7 text-emerald-50">
              The module ends with a 25-question scored test covering
              cryptographic goals, plaintext, ciphertext, algorithms, keys,
              symmetric encryption, asymmetric encryption, hashing, signatures,
              certificates, HTTPS, browser warnings, and defensive decision
              making. Answers and explanations remain hidden until submission.
            </p>
            <Link
              href="/high-school/beginner/intro-to-cryptography-concepts/module-test"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Open Module Test →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <Link
            href="/high-school/beginner/data-protection-and-backups"
            className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            ← Previous Module
          </Link>
          <Link
            href="/high-school/beginner/intro-to-cryptography-concepts/what-cryptography-does"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start B12.1 →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}