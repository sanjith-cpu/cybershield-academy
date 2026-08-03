"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  id: number;
  domain: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/siem-and-alert-triage-concepts`;
const previousLesson = `${modulePath}/siem-triage-lab`;

const questions: Question[] = [
  {
    id: 1,
    domain: "SIEM Purpose",
    question:
      "Which statement best describes the fictional purpose of a SIEM?",
    choices: [
      "It automatically proves that every unusual event is harmful.",
      "It collects, normalizes, correlates, and presents evidence so defenders can make structured decisions.",
      "It replaces service owners, identity owners, and source owners.",
      "It guarantees complete visibility into every system.",
    ],
    answer: 1,
    explanation:
      "A SIEM supports defensive decisions by organizing evidence. It does not prove intent, replace accountable owners, or guarantee complete visibility.",
  },
  {
    id: 2,
    domain: "Log Collection",
    question:
      "A fictional source is connected, but records arrive twenty minutes late. Which statement is strongest?",
    choices: [
      "The source is Healthy because records eventually arrive.",
      "The source should be treated as Conditional or Degraded because freshness affects time-sensitive conclusions.",
      "All delayed records should be deleted.",
      "The delay proves harmful activity occurred.",
    ],
    answer: 1,
    explanation:
      "Connectivity alone does not equal healthy evidence. Freshness and decision impact should affect the source-health state.",
  },
  {
    id: 3,
    domain: "Normalization",
    question:
      "Why should fictional source values remain traceable after normalization?",
    choices: [
      "So analysts can preserve original meaning, transformation logic, and limitations.",
      "So every source can be forced into exactly the same meaning.",
      "So source-health review becomes unnecessary.",
      "So enrichment can replace direct evidence.",
    ],
    answer: 0,
    explanation:
      "Traceability lets reviewers understand what the source recorded, how it was transformed, and where semantic risk remains.",
  },
  {
    id: 4,
    domain: "Normalization",
    question:
      "A fictional extension source is delayed and shows no visible extension. What is the strongest normalized state?",
    choices: [
      "extension_state=none",
      "extension_state=approved",
      "extension_state=unknown",
      "extension_state=malicious",
    ],
    answer: 2,
    explanation:
      "A delayed source prevents a confident absence conclusion. Unknown preserves the evidence limitation.",
  },
  {
    id: 5,
    domain: "Correlation",
    question:
      "Which fictional correlation is most useful for a stale-authority alert?",
    choices: [
      "Joining unrelated alerts because they share the same severity.",
      "Joining role, approval, extension, group, session, service, destination, timing, and source-health evidence around one bounded question.",
      "Joining every event from the same day.",
      "Joining records only by alert title.",
    ],
    answer: 1,
    explanation:
      "Useful correlation connects evidence that helps answer a specific defender question while preserving limitations and provenance.",
  },
  {
    id: 6,
    domain: "Alert Rules",
    question:
      "What should a strong fictional alert contract include?",
    choices: [
      "Only the alert title and severity.",
      "Observation, defender question, evidence, source health, confidence, severity, priority, alternatives, owners, and non-proof statements.",
      "A claim that harmful intent is confirmed.",
      "A request to investigate everything.",
    ],
    answer: 1,
    explanation:
      "A strong alert contract explains what matched, what evidence exists, how reliable it is, what decision is needed, and what the alert does not prove.",
  },
  {
    id: 7,
    domain: "Severity and Priority",
    question:
      "Which statement correctly separates severity from priority?",
    choices: [
      "Severity and priority are always identical.",
      "Severity estimates potential consequence, while priority decides review urgency using confidence, active effect, scope, source health, time sensitivity, and recoverability.",
      "Priority measures only alert age.",
      "Severity proves current impact.",
    ],
    answer: 1,
    explanation:
      "Severity concerns potential consequence. Priority combines consequence with current evidence and operational urgency.",
  },
  {
    id: 8,
    domain: "Confidence",
    question:
      "A fictional role and session source are Healthy, but extension and group sources are limited. Which assessment is strongest?",
    choices: [
      "Observation confidence may be High while authorization confidence remains Moderate.",
      "All confidence must be High.",
      "All confidence must be Low.",
      "Confidence should be ignored because severity is High.",
    ],
    answer: 0,
    explanation:
      "Confidence should be conclusion-specific. Strong observation evidence can coexist with limited authorization evidence.",
  },
  {
    id: 9,
    domain: "Priority",
    question:
      "Which fictional condition most strongly supports High priority?",
    choices: [
      "A Low-severity alert that is one week old and fully owned.",
      "A privileged session remains active after expiration, the authorization evidence is limited, and the response opportunity is short.",
      "An alert title contains the word critical.",
      "The alert count is high.",
    ],
    answer: 1,
    explanation:
      "Privilege, active session state, uncertain authorization, and time sensitivity create a defensible High-priority decision.",
  },
  {
    id: 10,
    domain: "Triage Questions",
    question:
      "Which fictional triage question is most professional?",
    choices: [
      "Why did this user attack the service?",
      "Did a valid matching extension exist for the identity, role, service, destination, purpose, and alert period?",
      "Can someone send every record about this identity?",
      "Who should be blamed?",
    ],
    answer: 1,
    explanation:
      "The strongest question is neutral, bounded, evidence-oriented, and directly connected to an authorization decision.",
  },
  {
    id: 11,
    domain: "Evidence Review",
    question:
      "What should a fictional evidence note include?",
    choices: [
      "Only the analyst's conclusion.",
      "Source, provenance, timing, health, observation, what it supports, what it does not prove, owner, and case use.",
      "Every available personal detail.",
      "Only a screenshot.",
    ],
    answer: 1,
    explanation:
      "Evidence notes should preserve traceability, meaning, limitations, and purpose without unnecessary information.",
  },
  {
    id: 12,
    domain: "Alternative Explanations",
    question:
      "Why should fictional analysts document alternative explanations?",
    choices: [
      "To avoid making any decision.",
      "To compare approved, technical, timing, source-health, ownership, change, and recovery possibilities against the evidence.",
      "To make the case longer.",
      "To prove the alert is a false positive.",
    ],
    answer: 1,
    explanation:
      "Alternative explanations reduce confirmation bias and guide targeted evidence review.",
  },
  {
    id: 13,
    domain: "Escalation",
    question:
      "What is fictional escalation?",
    choices: [
      "A punishment for an owner.",
      "An evidence-based expansion of expertise, authority, communication, coordination, or urgency.",
      "An automatic response to every High-severity alert.",
      "A transfer that ends the original case owner's responsibility.",
    ],
    answer: 1,
    explanation:
      "Escalation broadens the review because a decision exceeds routine scope. It should not assign blame or abandon ownership.",
  },
  {
    id: 14,
    domain: "Escalation",
    question:
      "A fictional identity owner misses a deadline while a privileged session remains active. What is the strongest response?",
    choices: [
      "Treat nonresponse as proof of misuse.",
      "Activate escalation aging and the documented alternate-owner or leadership path while preserving the bounded question.",
      "Wait indefinitely.",
      "Close the case.",
    ],
    answer: 1,
    explanation:
      "The blocked time-sensitive decision should escalate, but nonresponse itself does not prove authorization state or intent.",
  },
  {
    id: 15,
    domain: "Case Management",
    question:
      "Which fictional case note is strongest?",
    choices: [
      "Suspicious user fixed.",
      "Role and session remained Active after approval_end. Extension evidence was delayed and group evidence Degraded. Revocation was initiated; validation and source reconciliation remain open.",
      "Checked logs. Looks okay.",
      "Confirmed attack.",
    ],
    answer: 1,
    explanation:
      "The strongest note separates observation, source health, action, validation, and unresolved work.",
  },
  {
    id: 16,
    domain: "Case Management",
    question:
      "Why should fictional actions and outcomes be documented separately?",
    choices: [
      "Because actions never matter.",
      "Because performing an action does not prove the intended state was achieved or validated.",
      "Because outcomes occur before actions.",
      "Because validation should remain hidden.",
    ],
    answer: 1,
    explanation:
      "For example, initiating role revocation does not prove sessions, groups, sources, or service state reached the intended result.",
  },
  {
    id: 17,
    domain: "Source Health",
    question:
      "A required fictional source is Blind during the key alert period. Which case state is strongest?",
    choices: [
      "Expected",
      "Resolved",
      "Source-Degraded or Unknown, with alternate evidence and reassessment requirements",
      "Confirmed harmful activity",
    ],
    answer: 2,
    explanation:
      "A Blind period limits both confirmation and absence conclusions and should remain visible in the case state.",
  },
  {
    id: 18,
    domain: "Dashboards",
    question:
      "A fictional dashboard shows an average review time of eight minutes, but several High-priority alerts waited more than one hour. What should be added?",
    choices: [
      "Nothing; the average is enough.",
      "Median, percentiles, distribution, priority segments, and oldest-case review.",
      "A lower threshold.",
      "A personal analyst leaderboard.",
    ],
    answer: 1,
    explanation:
      "Distribution and tail measures reveal severe delays hidden by one average.",
  },
  {
    id: 19,
    domain: "Metrics",
    question:
      "Why must a fictional rate define its denominator?",
    choices: [
      "Because every metric must look technical.",
      "Because the full relevant population determines what the percentage actually means.",
      "Because the denominator is always raw alert count.",
      "Because denominators remove source-health problems.",
    ],
    answer: 1,
    explanation:
      "Changing or unclear populations can make rates misleading and incomparable.",
  },
  {
    id: 20,
    domain: "Metrics",
    question:
      "Which fictional metric set is most balanced?",
    choices: [
      "Alert volume and closure speed only.",
      "Volume, uniqueness, source health, coverage, timeliness, quality, workload, privacy, recovery, and residual risk.",
      "Number of escalations only.",
      "Individual analyst case counts only.",
    ],
    answer: 1,
    explanation:
      "Balanced metrics reduce the chance that one target rewards harmful behavior or hides important risk.",
  },
  {
    id: 21,
    domain: "Noise Reduction",
    question:
      "What is the strongest first step when a fictional alert creates too much noise?",
    choices: [
      "Raise the threshold immediately.",
      "Suppress the rule permanently.",
      "Measure the problem and classify the root cause before choosing a change.",
      "Delete the rule.",
    ],
    answer: 2,
    explanation:
      "Noise may originate in sources, mappings, context, grouping, thresholds, routing, recovery, or documentation. The change should address the real cause.",
  },
  {
    id: 22,
    domain: "Grouping",
    question:
      "Which fictional condition should usually break alert grouping?",
    choices: [
      "The same alert title appears again.",
      "A new destination, session, service, severity, result, scope, or source-health state appears.",
      "The analyst is busy.",
      "The alert is older than five minutes.",
    ],
    answer: 1,
    explanation:
      "Break conditions preserve meaningful novelty, widening scope, and changed risk.",
  },
  {
    id: 23,
    domain: "Tuning Validation",
    question:
      "Shadow mode reduces fictional raw alerts by 60% but hides a changed destination. What should happen?",
    choices: [
      "Approve the change because volume improved.",
      "Remove the failed test.",
      "Reject or revise the change, preserve the last validated state, and rerun regression plus rollback tests.",
      "Suppress the destination field.",
    ],
    answer: 2,
    explanation:
      "A coverage-preservation failure outweighs raw-count improvement.",
  },
  {
    id: 24,
    domain: "Closure and Reopening",
    question:
      "When is a fictional case ready for closure?",
    choices: [
      "When alerts stop.",
      "When one action is completed.",
      "When the primary question, evidence, source health, authorization, scope, impact, owner actions, validation, residual risk, and reopen criteria are complete enough.",
      "When the case becomes old.",
    ],
    answer: 2,
    explanation:
      "Closure is an evidence and lifecycle decision, not a silence, age, or action-completion decision.",
  },
  {
    id: 25,
    domain: "Safety and Ethics",
    question:
      "Which approach is required for a public CyberShield SIEM portfolio artifact?",
    choices: [
      "Sanitize a real case by changing names.",
      "Use real screenshots with blurred details.",
      "Invent every organization, alert, source, identity, service, owner, date, value, decision, action, and outcome.",
      "Use real owner messages without addresses.",
    ],
    answer: 2,
    explanation:
      "Complete fictionalization protects real people, systems, suppliers, priorities, incidents, and defensive capabilities.",
  },
];

const domainReview = [
  {
    domain: "SIEM Foundations",
    questions: "1–6",
    focus:
      "Purpose, collection, normalization, correlation, and alert contracts.",
  },
  {
    domain: "Decision Quality",
    questions: "7–12",
    focus:
      "Severity, confidence, priority, triage questions, evidence, and alternatives.",
  },
  {
    domain: "Escalation and Cases",
    questions: "13–17",
    focus:
      "Escalation, owner deadlines, case notes, actions, validation, and source health.",
  },
  {
    domain: "Dashboards and Quality",
    questions: "18–23",
    focus:
      "Metrics, denominators, balanced measures, root cause, grouping, and tuning validation.",
  },
  {
    domain: "Lifecycle and Safety",
    questions: "24–25",
    focus:
      "Closure, reopening, ethics, privacy, and complete fictionalization.",
  },
];

function scoreLabel(score: number) {
  if (score >= 23) return "Advanced Mastery";
  if (score >= 20) return "Module Ready";
  if (score >= 17) return "Developing";
  return "Review Recommended";
}

function scoreMessage(score: number) {
  if (score >= 23) {
    return "Excellent work. Your answers show strong command of evidence-aware SIEM triage, governance, lifecycle, and quality improvement.";
  }

  if (score >= 20) {
    return "You reached the recommended mastery benchmark. Review any missed explanations before continuing.";
  }

  if (score >= 17) {
    return "You understand much of the workflow, but several decision-quality areas need review before the next module.";
  }

  return "Return to the lesson links below, review the missed domains, and retake the assessment when ready.";
}

export default function SiemAndAlertTriageModuleTestPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total + (answers[question.id] === question.answer ? 1 : 0),
        0,
      ),
    [answers],
  );

  const answeredCount = Object.keys(answers).length;
  const percent = Math.round((score / questions.length) * 100);
  const passed = score >= 20;

  const selectAnswer = (questionId: number, choiceIndex: number) => {
    if (submitted) return;

    setAnswers((current) => ({
      ...current,
      [questionId]: choiceIndex,
    }));
  };

  const submitTest = () => {
    if (answeredCount !== questions.length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetTest = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">
              Module A6
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              25-Question Assessment
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A6 Module Test: SIEM and Alert Triage Concepts
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of SIEM evidence, source health,
            normalization, correlation, alert design, prioritization, triage,
            escalation, case management, dashboards, metrics, quality
            improvement, closure, reopening, privacy, and fictional safety.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
            >
              Module A6
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              Advanced Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        {submitted && (
          <section
            className={`rounded-3xl border p-7 ${
              passed
                ? "border-emerald-400/40 bg-emerald-400/10"
                : "border-yellow-400/40 bg-yellow-400/10"
            }`}
          >
            <p
              className={`text-sm font-black uppercase tracking-[0.2em] ${
                passed ? "text-emerald-200" : "text-yellow-200"
              }`}
            >
              Assessment Complete
            </p>

            <div className="mt-4 grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center">
                <p className="text-5xl font-black text-white">
                  {score}/{questions.length}
                </p>
                <p className="mt-2 text-xl font-bold text-cyan-200">
                  {percent}%
                </p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-purple-200">
                  {scoreLabel(score)}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  {passed
                    ? "Recommended mastery benchmark reached"
                    : "More review is recommended"}
                </h2>
                <p className="mt-3 leading-7 text-slate-200">
                  {scoreMessage(score)}
                </p>

                <button
                  type="button"
                  onClick={resetTest}
                  className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Reset and Retake
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Test Instructions
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Complete All 25 Questions
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-3xl font-black">{answeredCount}/25</p>
              <p className="mt-2 text-sm font-semibold">Questions answered</p>
            </div>

            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50">
              <p className="text-3xl font-black">20/25</p>
              <p className="mt-2 text-sm font-semibold">
                Recommended mastery benchmark
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-3xl font-black">Hidden</p>
              <p className="mt-2 text-sm font-semibold">
                Answers until submission
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 leading-7 text-yellow-50">
            Choose one response for every question. The test will not submit
            until all questions are answered. Correct answers and explanations
            appear only after submission.
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Assessment Domains
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            What This Test Measures
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {domainReview.map((item) => (
              <article
                key={item.domain}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-black text-cyan-100">{item.domain}</h3>
                  <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">
                    Questions {item.questions}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.focus}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6">
          {questions.map((question) => {
            const selected = answers[question.id];
            const isCorrect = selected === question.answer;

            return (
              <article
                key={question.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Question {question.id} of {questions.length}
                    </p>
                    <p className="mt-1 text-sm font-bold text-purple-200">
                      {question.domain}
                    </p>
                  </div>

                  {submitted && (
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${
                        isCorrect
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                          : "border-red-400/40 bg-red-400/10 text-red-200"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Review"}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-xl font-black leading-8 text-white">
                  {question.question}
                </h2>

                <div className="mt-5 grid gap-3">
                  {question.choices.map((choice, choiceIndex) => {
                    const isSelected = selected === choiceIndex;
                    const isAnswer = question.answer === choiceIndex;

                    let choiceClass =
                      "border-slate-700 bg-slate-950 text-slate-200 hover:border-cyan-400/60";

                    if (isSelected && !submitted) {
                      choiceClass =
                        "border-cyan-400 bg-cyan-400/10 text-cyan-50";
                    }

                    if (submitted && isAnswer) {
                      choiceClass =
                        "border-emerald-400 bg-emerald-400/10 text-emerald-50";
                    } else if (submitted && isSelected && !isAnswer) {
                      choiceClass =
                        "border-red-400 bg-red-400/10 text-red-50";
                    } else if (submitted) {
                      choiceClass =
                        "border-slate-800 bg-slate-950 text-slate-400";
                    }

                    return (
                      <button
                        key={`${question.id}-${choiceIndex}`}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          selectAnswer(question.id, choiceIndex)
                        }
                        className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${choiceClass}`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-current font-black">
                          {String.fromCharCode(65 + choiceIndex)}
                        </span>
                        <span className="leading-7">{choice}</span>
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
                      Explanation
                    </p>
                    <p className="mt-2 leading-7">{question.explanation}</p>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {!submitted && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Submission Status
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  {answeredCount === questions.length
                    ? "All questions are answered"
                    : `${questions.length - answeredCount} question${
                        questions.length - answeredCount === 1 ? "" : "s"
                      } remaining`}
                </h2>
                <p className="mt-2 text-slate-300">
                  Answers and explanations stay hidden until you submit.
                </p>
              </div>

              <button
                type="button"
                disabled={answeredCount !== questions.length}
                onClick={submitTest}
                className={`rounded-xl px-6 py-4 font-black transition ${
                  answeredCount === questions.length
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "cursor-not-allowed bg-slate-800 text-slate-500"
                }`}
              >
                Submit A6 Module Test
              </button>
            </div>
          </section>
        )}

        {submitted && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
              Review Guidance
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Use Missed Questions as a Study Map
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              Review each explanation, identify the domain behind every missed
              question, return to the corresponding A6 lesson, and retake the
              assessment after you can explain why the strongest response
              preserves evidence, source health, ownership, uncertainty,
              coverage, privacy, validation, and lifecycle quality.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                ["A6.1", "What a SIEM Does", `${modulePath}/what-a-siem-does`],
                [
                  "A6.2",
                  "Log Collection and Normalization Concepts",
                  `${modulePath}/log-collection-and-normalization-concepts`,
                ],
                [
                  "A6.3",
                  "Correlation and Alert Rules",
                  `${modulePath}/correlation-and-alert-rules`,
                ],
                [
                  "A6.4",
                  "Alert Severity and Priority",
                  `${modulePath}/alert-severity-and-priority`,
                ],
                [
                  "A6.5",
                  "Triage Questions and Evidence Review",
                  `${modulePath}/triage-questions-and-evidence-review`,
                ],
                [
                  "A6.6",
                  "Escalation Criteria",
                  `${modulePath}/escalation-criteria`,
                ],
                [
                  "A6.7",
                  "Case Management and Notes",
                  `${modulePath}/case-management-and-notes`,
                ],
                [
                  "A6.8",
                  "Dashboards and Metrics",
                  `${modulePath}/dashboards-and-metrics`,
                ],
                [
                  "A6.9",
                  "Reducing Noise and Improving Quality",
                  `${modulePath}/reducing-noise-and-improving-quality`,
                ],
                [
                  "A6.10",
                  "SIEM Triage Lab",
                  `${modulePath}/siem-triage-lab`,
                ],
              ].map(([number, title, href]) => (
                <Link
                  key={number}
                  href={href}
                  className="rounded-2xl border border-slate-700 bg-slate-950 p-4 transition hover:border-cyan-400/60"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    {number}
                  </p>
                  <p className="mt-2 font-bold text-white">{title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            This Assessment Is Entirely Fictional and Defensive
          </h2>
          <p className="mt-3 leading-7">
            The test does not authorize access, investigation, monitoring,
            collection, querying, tuning, suppression, escalation, response, or
            changes involving any real SIEM, alert, case, account, endpoint,
            network, domain, service, supplier, organization, or person.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Return to A6
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Review your results, revisit the lessons connected to any missed
            domains, and use the module homepage to confirm that every A6 page
            is complete.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous Lesson
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Module A6 Homepage
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
            >
              Advanced Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}