"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  category: string;
};

const modulePath =
  "/high-school/beginner/intro-to-cryptography-concepts";
const previousLesson = `${modulePath}/cryptography-decision-lab`;

const questions: Question[] = [
  {
    category: "Cryptography Goals",
    prompt: "What is one main purpose of cryptography?",
    choices: [
      "To help protect information and support trust in digital systems.",
      "To make every file public.",
      "To replace every other cybersecurity control.",
      "To remove the need for account security.",
    ],
    answer: 0,
    explanation:
      "Cryptography helps protect confidentiality, integrity, authenticity, and trusted communication.",
  },
  {
    category: "Confidentiality",
    prompt: "Which cryptographic goal focuses on keeping information private?",
    choices: [
      "Confidentiality.",
      "Availability only.",
      "Compression.",
      "Formatting.",
    ],
    answer: 0,
    explanation:
      "Confidentiality limits information access to approved users, devices, and services.",
  },
  {
    category: "Integrity",
    prompt: "Which cryptographic goal focuses on detecting unauthorized changes?",
    choices: [
      "Integrity.",
      "Screen brightness.",
      "Storage capacity.",
      "File naming.",
    ],
    answer: 0,
    explanation:
      "Integrity helps users determine whether data remains accurate and unchanged.",
  },
  {
    category: "Authenticity",
    prompt: "What can authenticity help verify?",
    choices: [
      "That information or identity comes from the expected source.",
      "That every file is encrypted.",
      "That no backup is needed.",
      "That a device has unlimited storage.",
    ],
    answer: 0,
    explanation:
      "Authenticity supports confidence in the expected sender, publisher, website, device, or service.",
  },
  {
    category: "Plaintext",
    prompt: "What is plaintext?",
    choices: [
      "Readable information before encryption or after authorized decryption.",
      "A protected hash value.",
      "A browser warning.",
      "A certificate authority.",
    ],
    answer: 0,
    explanation:
      "Plaintext is the readable form of information.",
  },
  {
    category: "Ciphertext",
    prompt: "What is ciphertext?",
    choices: [
      "Protected output created by encryption.",
      "A public website name.",
      "A list of approved users.",
      "A backup schedule.",
    ],
    answer: 0,
    explanation:
      "Ciphertext is transformed data that should not be readable without the correct authorized key and process.",
  },
  {
    category: "Algorithms and Keys",
    prompt: "How do an algorithm and key work together?",
    choices: [
      "The algorithm defines the process, while the key controls the specific cryptographic result.",
      "The key replaces the algorithm.",
      "The algorithm must always remain secret.",
      "The key makes access controls unnecessary.",
    ],
    answer: 0,
    explanation:
      "The algorithm defines the mathematical process, while the key controls a specific encryption, decryption, signing, or verification result.",
  },
  {
    category: "Key Protection",
    prompt: "Which item normally requires the strongest secrecy?",
    choices: [
      "A secret or private key.",
      "The public name of an approved algorithm.",
      "The lesson title.",
      "The file extension.",
    ],
    answer: 0,
    explanation:
      "Modern cryptography normally depends on protecting secret and private keys rather than hiding the algorithm.",
  },
  {
    category: "Symmetric Encryption",
    prompt: "What makes encryption symmetric?",
    choices: [
      "The same shared secret key is used for encryption and decryption.",
      "No key is used.",
      "Only public keys are used.",
      "The algorithm is hidden.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption uses one shared secret key for both encryption and decryption.",
  },
  {
    category: "Symmetric Encryption",
    prompt: "What is one main advantage of symmetric encryption?",
    choices: [
      "It is efficient for protecting large amounts of data.",
      "The secret key can be public.",
      "It automatically proves one unique sender.",
      "It removes the need for recovery planning.",
    ],
    answer: 0,
    explanation:
      "Symmetric encryption is commonly used for files, backups, storage, and large data because it is efficient.",
  },
  {
    category: "Shared-Key Risk",
    prompt: "What is one major challenge of symmetric encryption?",
    choices: [
      "Distributing and protecting the shared secret key.",
      "Choosing a folder color.",
      "Creating a public link.",
      "Finding a filename.",
    ],
    answer: 0,
    explanation:
      "Every approved participant must receive and protect the same secret without exposing it.",
  },
  {
    category: "Key Rotation",
    prompt: "What should happen if a shared secret may have been exposed?",
    choices: [
      "Report the issue, limit access, rotate the key, and review affected data.",
      "Keep using the same key forever.",
      "Post the key publicly.",
      "Delete every ciphertext file immediately.",
    ],
    answer: 0,
    explanation:
      "Possible key exposure requires containment, reporting, replacement, and review.",
  },
  {
    category: "Asymmetric Encryption",
    prompt: "What makes cryptography asymmetric?",
    choices: [
      "It uses a related public key and private key for different operations.",
      "It uses no keys.",
      "It always uses one shared secret.",
      "It requires every key to be public.",
    ],
    answer: 0,
    explanation:
      "Asymmetric cryptography uses a key pair with separate public and private roles.",
  },
  {
    category: "Public Key",
    prompt: "Which key may normally be shared openly?",
    choices: [
      "The public key.",
      "The private key.",
      "Every recovery secret.",
      "Every account password.",
    ],
    answer: 0,
    explanation:
      "A public key may be shared, but its identity still must be verified.",
  },
  {
    category: "Private Key",
    prompt: "Which key must remain protected?",
    choices: [
      "The private key.",
      "The public key.",
      "The website name.",
      "The certificate expiration date.",
    ],
    answer: 0,
    explanation:
      "The private key supports sensitive operations and must remain restricted.",
  },
  {
    category: "Digital Signatures",
    prompt: "What can a digital signature help verify?",
    choices: [
      "The source and integrity of digital information.",
      "That the content is automatically secret.",
      "That backups are unnecessary.",
      "That every user should receive the private key.",
    ],
    answer: 0,
    explanation:
      "Digital signatures can support authenticity and integrity, but they do not automatically provide confidentiality.",
  },
  {
    category: "Private-Key Exposure",
    prompt: "What should happen after suspected private-key exposure?",
    choices: [
      "Report, revoke or retire the key, issue a replacement, and review impact.",
      "Keep using the key.",
      "Publish the key.",
      "Ignore the event if misuse is not visible.",
    ],
    answer: 0,
    explanation:
      "Possible private-key exposure damages trust and requires containment, replacement, and review.",
  },
  {
    category: "Hashing",
    prompt: "What does a cryptographic hash function produce?",
    choices: [
      "A fixed-length digital fingerprint of the input.",
      "A public encryption key.",
      "A readable backup copy.",
      "A certificate authority.",
    ],
    answer: 0,
    explanation:
      "A cryptographic hash function produces a fixed-length value representing the input data.",
  },
  {
    category: "Hashing",
    prompt: "What normally happens if a file changes?",
    choices: [
      "Its cryptographic hash should change.",
      "Its hash must remain identical.",
      "It automatically becomes encrypted.",
      "Its owner always changes.",
    ],
    answer: 0,
    explanation:
      "Even a small change in input should normally produce a different cryptographic hash.",
  },
  {
    category: "Hashing vs Encryption",
    prompt: "Is hashing the same as encryption?",
    choices: [
      "No. Hashing is designed as a one-way integrity process, while encryption supports authorized recovery.",
      "Yes. Every hash can be decrypted.",
      "Yes. Both always use the same key.",
      "Yes. Hashing always hides data for later recovery.",
    ],
    answer: 0,
    explanation:
      "Encryption is intended to be reversible with authorized keys, while hashing is designed to be one-way.",
  },
  {
    category: "Integrity Verification",
    prompt: "What should happen if a downloaded file hash does not match the trusted value?",
    choices: [
      "Do not use the file; verify the source, preserve evidence, and obtain a trusted copy.",
      "Install it if the filename looks correct.",
      "Disable security tools.",
      "Change the expected hash to match the file.",
    ],
    answer: 0,
    explanation:
      "A mismatch may indicate corruption, incomplete transfer, or unauthorized modification.",
  },
  {
    category: "Certificates",
    prompt: "What does a digital certificate connect?",
    choices: [
      "An identity, such as a website, with a public key.",
      "A password with a backup folder.",
      "A filename with a cloud account.",
      "A device color with a network.",
    ],
    answer: 0,
    explanation:
      "A certificate helps connect a trusted identity with a public key.",
  },
  {
    category: "HTTPS",
    prompt: "What does HTTPS help protect?",
    choices: [
      "Data moving between a browser and website.",
      "Every file stored everywhere forever.",
      "The honesty of all website content.",
      "All user decisions after visiting the page.",
    ],
    answer: 0,
    explanation:
      "HTTPS protects data in transit between the browser and website, but it does not guarantee trustworthy content or intent.",
  },
  {
    category: "Certificate Warnings",
    prompt: "What should a user do after seeing a certificate warning on a login page?",
    choices: [
      "Stop, avoid entering information, verify the official site, and report the warning.",
      "Bypass the warning immediately.",
      "Enter the password before the page closes.",
      "Disable browser security.",
    ],
    answer: 0,
    explanation:
      "Certificate warnings may indicate identity, date, trust, or connection problems and should not be ignored.",
  },
  {
    category: "Cryptography Decision",
    prompt:
      "A private backup must remain unreadable to unauthorized users, show whether it changed, and remain recoverable after a device failure. What is the best plan?",
    choices: [
      "Use approved encryption, protected key access, a trusted integrity value, separate backup storage, limited recovery roles, and tested restoration.",
      "Rename the backup and store it beside the original.",
      "Use hashing only and make the backup public.",
      "Encrypt it but store the key in the same public folder.",
    ],
    answer: 0,
    explanation:
      "The complete plan addresses confidentiality, integrity, key protection, storage separation, access, and recovery.",
  },
];

function resultMessage(score: number) {
  if (score >= 23) {
    return "Excellent mastery. You are ready to explain and apply the major cryptography concepts from Module B12.";
  }

  if (score >= 20) {
    return "Strong result. Review the explanations for the questions you missed before moving forward.";
  }

  if (score >= 17) {
    return "Good foundation. Revisit the lessons connected to your missed questions, then retake the test.";
  }

  return "More review is recommended. Return to the Module B12 lessons, study the weak categories, and try again.";
}

export default function IntroToCryptographyConceptsModuleTestPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      answers.reduce<number>(
        (total, selected, index) =>
          total + (selected === questions[index].answer ? 1 : 0),
        0
      ),
    [answers]
  );

  const answeredCount = answers.filter((answer) => answer !== null).length;
  const percentage = Math.round((score / questions.length) * 100);

  const submitTest = () => {
    if (answeredCount !== questions.length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetTest = () => {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B12
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12 Module Test: Introduction to Cryptography Concepts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete 25 questions covering cryptographic goals, plaintext,
            ciphertext, algorithms, keys, symmetric encryption, asymmetric
            encryption, hashing, signatures, certificates, HTTPS, warnings,
            and defensive cryptography decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href={modulePath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Beginner Track
            </Link>
            <a
              href="#test-questions"
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Test
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        {submitted && (
          <section className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6 shadow-2xl shadow-cyan-950/30">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Test Results
            </p>

            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Correct answers</p>
                <p className="mt-2 text-4xl font-black text-white">
                  {score}/{questions.length}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Percentage</p>
                <p className="mt-2 text-4xl font-black text-white">
                  {percentage}%
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Status</p>
                <p className="mt-2 text-xl font-black text-white">
                  {percentage >= 80 ? "Ready to continue" : "Review recommended"}
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-200">
              {resultMessage(score)}
            </p>

            <button
              type="button"
              onClick={resetTest}
              className="mt-5 rounded-xl border border-cyan-400/40 px-5 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400/10"
            >
              Retake Test
            </button>
          </section>
        )}

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Test Instructions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Complete every question before submitting
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">25 questions</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Multiple-choice and scenario-based cryptography questions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">Answers stay hidden</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Scores and explanations appear only after submission.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="font-black text-cyan-100">Fake examples only</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Do not use real passwords, secret keys, private keys, MFA codes,
                recovery codes, certificates, account data, or sensitive files.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-bold text-slate-300">
              <span>Questions answered</span>
              <span>
                {answeredCount}/{questions.length}
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{
                  width: `${(answeredCount / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </section>

        <section id="test-questions" className="grid gap-6 scroll-mt-8">
          {questions.map((question, questionIndex) => (
            <article
              key={`${question.category}-${questionIndex}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                  {question.category}
                </span>

                <span className="text-sm font-bold text-slate-400">
                  Question {questionIndex + 1} of {questions.length}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-black leading-8 text-white">
                {questionIndex + 1}. {question.prompt}
              </h2>

              <div className="mt-5 grid gap-3">
                {question.choices.map((choice, choiceIndex) => {
                  const selected = answers[questionIndex] === choiceIndex;
                  const isCorrect = question.answer === choiceIndex;

                  return (
                    <button
                      key={choice}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        setAnswers((current) =>
                          current.map((answer, index) =>
                            index === questionIndex ? choiceIndex : answer
                          )
                        )
                      }
                      className={`rounded-xl border p-4 text-left leading-7 transition ${
                        submitted
                          ? isCorrect
                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                            : selected
                              ? "border-red-400 bg-red-400/10 text-red-100"
                              : "border-slate-800 bg-slate-950 text-slate-400"
                          : selected
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                            : "border-slate-700 bg-slate-950 text-slate-200 hover:border-cyan-400"
                      }`}
                    >
                      <span className="mr-3 font-black">
                        {String.fromCharCode(65 + choiceIndex)}.
                      </span>
                      {choice}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950 p-5">
                  <p className="font-black text-cyan-200">Explanation</p>
                  <p className="mt-2 leading-7 text-slate-300">
                    {question.explanation}
                  </p>
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          {!submitted ? (
            <>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Submit Module Test
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                {answeredCount === questions.length
                  ? "All questions are answered"
                  : `${questions.length - answeredCount} question${
                      questions.length - answeredCount === 1 ? "" : "s"
                    } remaining`}
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Your score and answer explanations will appear only after you
                submit the complete test.
              </p>

              <button
                type="button"
                onClick={submitTest}
                disabled={answeredCount !== questions.length}
                className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit Test
              </button>
            </>
          ) : (
            <>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Test Submitted
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                Review every explanation before leaving
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Use the explanations to identify which Module B12 lessons you
                should review before continuing.
              </p>

              <button
                type="button"
                onClick={resetTest}
                className="mt-5 rounded-xl border border-cyan-400/40 px-6 py-3 font-black text-cyan-100 transition hover:bg-cyan-400/10"
              >
                Retake Test
              </button>
            </>
          )}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Module B12 Navigation
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: B12.7 Cryptography Decision Lab
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href="/high-school/beginner"
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Beginner Track
            </Link>
            <a
              href="#test-questions"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Review Questions
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}