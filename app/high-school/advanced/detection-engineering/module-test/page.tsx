"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Question = {
  id: number;
  category: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const trackPath = "/high-school/advanced";
const modulePath = `${trackPath}/detection-engineering`;
const previousLesson = `${modulePath}/detection-engineering-capstone-lab`;
const nextModule = `${trackPath}/siem-and-alert-triage-concepts`;

const questions: Question[] = [
  {
    id: 1,
    category: "Detection Purpose",
    question: "What is the strongest starting point for a fictional detection engineering project?",
    choices: [
      "Choose the most dramatic alert title.",
      "Define a mission risk, bounded defender question, scope, evidence needs, and non-proof statement.",
      "Collect every available data source.",
      "Create a dashboard before identifying the decision.",
    ],
    answer: 1,
    explanation: "Detection engineering should begin with a meaningful defensive decision. Mission risk, scope, evidence, and limits must be clear before logic or alerts are designed.",
  },
  {
    id: 2,
    category: "Defender Questions",
    question: "Which fictional defender question is most appropriately bounded?",
    choices: [
      "Is the organization compromised?",
      "Who is the attacker?",
      "Did temporary emergency authority remain effectively active beyond its approved end without a valid extension?",
      "Why did this malicious activity happen?",
    ],
    answer: 2,
    explanation: "The third question is specific, evidence-driven, tied to a decision, and does not assume intent, compromise, or cause.",
  },
  {
    id: 3,
    category: "Telemetry",
    question: "Which statement best describes useful fictional detection telemetry?",
    choices: [
      "Every available record should be collected permanently.",
      "Only one source should be trusted to simplify analysis.",
      "Sources and fields should be purpose-limited, documented, health-aware, and connected to the defender question.",
      "Telemetry quality matters only after an alert fires.",
    ],
    answer: 2,
    explanation: "Useful telemetry is selected for a purpose and documented for provenance, field meaning, timing, coverage, privacy, and source health.",
  },
  {
    id: 4,
    category: "Source Health",
    question: "A required fictional group-membership source is delayed. What is the strongest detection behavior?",
    choices: [
      "Report full confidence because the source is still connected.",
      "Treat the condition as absent.",
      "Return Conditional or Source-Degraded behavior, lower the affected confidence, and request alternate evidence.",
      "Suppress every related alert.",
    ],
    answer: 2,
    explanation: "Delayed required evidence changes what can be concluded. The limitation should be visible rather than silently converted into certainty or absence.",
  },
  {
    id: 5,
    category: "Logic Concepts",
    question: "What should a fictional detection logic narrative include?",
    choices: [
      "Only a severity label.",
      "Conditions, relationships, timing, sequence, context, missing-data behavior, confidence, alternatives, and limits.",
      "Only the expected alert count.",
      "A claim that every match proves harmful intent.",
    ],
    answer: 1,
    explanation: "A logic narrative should explain how evidence becomes a bounded observation and how context, timing, source health, and uncertainty affect the result.",
  },
  {
    id: 6,
    category: "Behavior-Based Detection",
    question: "Which fictional behavior-based conclusion is strongest?",
    choices: [
      "A new destination proves compromise.",
      "Outside-hours activity proves unauthorized use.",
      "The observed behavior differs from the approved pattern and requires authorization, source-health, scope, and impact review.",
      "Rare behavior should always be blocked.",
    ],
    answer: 2,
    explanation: "Behavior differences are observations, not accusations. Professional analysis preserves approved explanations, source limits, and the need for contextual evidence.",
  },
  {
    id: 7,
    category: "Expected Behavior",
    question: "Why might a fictional approved activity remain visible as an Expected alert?",
    choices: [
      "Because approved activity is always risky.",
      "Because the detection intentionally reports the condition for awareness, lifecycle tracking, or review.",
      "Because every alert is a false positive.",
      "Because Expected alerts should receive the highest severity.",
    ],
    answer: 1,
    explanation: "A correctly detected approved condition can remain intentionally visible without being treated as a false positive or harmful event.",
  },
  {
    id: 8,
    category: "False Positives",
    question: "A fictional alert fires because extension evidence arrived late even though the extension was valid. Which label is strongest after review?",
    choices: [
      "False positive caused by timing or source-health context.",
      "Confirmed misuse.",
      "True negative.",
      "Known false negative.",
    ],
    answer: 0,
    explanation: "The risky interpretation was incorrect because valid authorization existed but arrived late. The root cause involves timing or evidence health.",
  },
  {
    id: 9,
    category: "False Negatives",
    question: "Why is a quiet fictional period not automatically a true negative?",
    choices: [
      "Because alerts must always fire.",
      "Because the condition may have occurred outside source coverage or during missing, delayed, or blind evidence.",
      "Because true negatives do not exist.",
      "Because only alert volume matters.",
    ],
    answer: 1,
    explanation: "A true negative requires sufficient evidence that the condition was absent and that the detection could evaluate the relevant scope and period.",
  },
  {
    id: 10,
    category: "Quality Metrics",
    question: "Why can a large reduction in fictional alert volume be misleading?",
    choices: [
      "Because fewer alerts always means worse detection.",
      "Because volume may fall due to broad suppression, source loss, or missed conditions rather than better quality.",
      "Because alert volume should never be measured.",
      "Because every detection should produce the same number of alerts.",
    ],
    answer: 1,
    explanation: "Detection quality must consider alert usefulness, expected alerts, false positives, false negatives, Unknown outcomes, source health, effort, impact, and residual risk.",
  },
  {
    id: 11,
    category: "Unknown Outcomes",
    question: "Two required fictional sources conflict and the available evidence cannot resolve the case. Which outcome is most responsible?",
    choices: [
      "Force a true positive label.",
      "Force a false positive label.",
      "Use Unknown or Source-Degraded with confidence limits, owners, and follow-up criteria.",
      "Close the case as a true negative.",
    ],
    answer: 2,
    explanation: "Unknown and Source-Degraded outcomes protect against false certainty when the supplied evidence cannot support a confident classification.",
  },
  {
    id: 12,
    category: "Detection Tuning",
    question: "Which fictional tuning change is safest for repeated valid-extension alerts?",
    choices: [
      "Suppress every emergency-role alert.",
      "Add precise extension, identity, purpose, destination, timing, owner, expiration, and source-health context.",
      "Raise every threshold.",
      "Remove the detection.",
    ],
    answer: 1,
    explanation: "Precise, current context addresses the root cause while preserving stale-authority coverage and avoiding broad suppression debt.",
  },
  {
    id: 13,
    category: "Exceptions",
    question: "Which fictional exception is best governed?",
    choices: [
      "Ignore all administrator activity during weekends.",
      "Exclude one approved identity, service, destination, purpose, change window, owner, and expiration with tests and rollback.",
      "Suppress outside-hours activity permanently.",
      "Ignore anything linked to a maintenance record.",
    ],
    answer: 1,
    explanation: "A professional exception is narrow, purpose-limited, owned, temporary, tested, reversible, and documented for residual risk.",
  },
  {
    id: 14,
    category: "Severity and Confidence",
    question: "Why should fictional severity and confidence be documented separately?",
    choices: [
      "Because severity is never useful.",
      "Because potential impact and evidence certainty are different dimensions.",
      "Because confidence replaces priority.",
      "Because High severity proves the alert is correct.",
    ],
    answer: 1,
    explanation: "A condition can have high potential impact but incomplete evidence, or strong evidence but limited impact. Combining them hides decision context.",
  },
  {
    id: 15,
    category: "Alert Mapping",
    question: "What makes a fictional alert decision-ready?",
    choices: [
      "A dramatic title and risk score.",
      "Observation, primary question, evidence, source health, context, confidence, severity, alternatives, owners, next questions, limits, and criteria.",
      "The full history of the identity.",
      "A High severity label alone.",
    ],
    answer: 1,
    explanation: "A decision-ready alert explains what matched, what remains unknown, what evidence matters, who owns the next question, and which decisions are justified.",
  },
  {
    id: 16,
    category: "Evidence Requests",
    question: "Which fictional evidence request is most privacy-aware?",
    choices: [
      "Provide the identity's full activity history.",
      "Provide every available personal and technical field.",
      "Provide only the role, assignment, approval, expiration, revocation, owner, and source-health evidence needed for the defined alert period.",
      "Publish the alert screenshot to a large review group.",
    ],
    answer: 2,
    explanation: "Purpose-limited, time-bounded evidence requests reduce unnecessary collection and exposure while supporting the defender question.",
  },
  {
    id: 17,
    category: "Closure",
    question: "Which fictional closure criterion is strongest?",
    choices: [
      "The alert stopped appearing.",
      "The analyst changed severity to Low.",
      "Authority, sessions, service state, source health, owner validation, corrective action, residual risk, and reopen criteria are addressed.",
      "The case has been open for a long time.",
    ],
    answer: 2,
    explanation: "Closure should reflect resolved evidence and lifecycle requirements rather than alert silence, elapsed time, or a label change.",
  },
  {
    id: 18,
    category: "Safe Testing",
    question: "What is the safest source for A5 fictional detection test data?",
    choices: [
      "Real logs with usernames removed.",
      "Production screenshots with values blurred.",
      "Completely invented records, sources, fields, identities, timestamps, relationships, and outcomes.",
      "Internal alerts copied into a test document.",
    ],
    answer: 2,
    explanation: "Complete invention protects real people, systems, suppliers, behavior, architecture, and defensive capabilities.",
  },
  {
    id: 19,
    category: "Expected Test Outcomes",
    question: "Why should fictional expected outcomes be defined before a test is reviewed?",
    choices: [
      "To ensure every test passes.",
      "To prevent reviewers from redefining success after seeing the observed result.",
      "To eliminate negative tests.",
      "To avoid recording evidence.",
    ],
    answer: 1,
    explanation: "A predefined test oracle makes mismatches, defects, and uncertain outcomes visible and reviewable.",
  },
  {
    id: 20,
    category: "Boundary Testing",
    question: "Which fictional test best evaluates an expiration boundary?",
    choices: [
      "One case several hours after expiration.",
      "Cases immediately before, exactly at, and immediately after the approved end.",
      "Only a current extension case.",
      "Only a source-blind case.",
    ],
    answer: 1,
    explanation: "Below, at, and above boundary cases reveal off-by-one, grace-period, clock, comparison, and exact-window defects.",
  },
  {
    id: 21,
    category: "Recovery Testing",
    question: "A fictional source returns after a blind period and replays queued records. What should the test evaluate?",
    choices: [
      "Only whether the source is connected.",
      "Replay markers, uniqueness, duplicates, event time, backlog, schema, historical reassessment, and recovery confidence.",
      "Only the current alert count.",
      "Whether all old records can be deleted.",
    ],
    answer: 1,
    explanation: "Recovery testing must verify that replay and backlog do not create duplicate flooding, false sequence, missed blind-period review, or false Healthy status.",
  },
  {
    id: 22,
    category: "Documentation",
    question: "What should appear first in a strong fictional detection specification?",
    choices: [
      "Technical syntax.",
      "Mission risk, defender question, purpose, scope, exclusions, ownership, and non-proof statement.",
      "Alert screenshots.",
      "A list of all possible data fields.",
    ],
    answer: 1,
    explanation: "The specification should first establish why the capability exists and which bounded decision it supports.",
  },
  {
    id: 23,
    category: "Traceability",
    question: "Why should fictional requirements be linked to tests, alerts, changes, and owners?",
    choices: [
      "To make the documentation longer.",
      "To show which behaviors are validated, who is accountable, why changes occurred, and which gaps remain.",
      "To prove untested conditions work.",
      "To remove the need for review triggers.",
    ],
    answer: 1,
    explanation: "Traceability connects design intent, evidence, validation, operations, ownership, and lifecycle while exposing unresolved gaps.",
  },
  {
    id: 24,
    category: "Readiness",
    question: "When should a fictional detection program remain Conditional?",
    choices: [
      "Whenever it has any documentation.",
      "When important source, test, coverage, privacy, owner, quality, or lifecycle conditions remain unresolved.",
      "Only when alert volume is high.",
      "Never; completed projects should always be Approved.",
    ],
    answer: 1,
    explanation: "Conditional status is an honest evidence-based decision showing that useful capability exists but important readiness conditions remain.",
  },
  {
    id: 25,
    category: "Portfolio Safety",
    question: "Which approach is safest for a public Detection Engineering portfolio?",
    choices: [
      "Use real rules without organization names.",
      "Use real alerts with fake usernames.",
      "Invent every organization, source, field, event, alert, test, owner, date, decision, and outcome.",
      "Use internal diagrams after removing labels.",
    ],
    answer: 2,
    explanation: "Complete fictionalization prevents exposure of real systems, people, incidents, suppliers, architecture, evidence, and defensive capabilities.",
  },
];

const masteryBands = [
  {
    minimum: 23,
    title: "Advanced Detection Engineering Mastery",
    message: "You demonstrated strong command of detection purpose, evidence, source health, logic, behavior, quality, tuning, alert decisions, safe testing, documentation, governance, and lifecycle.",
  },
  {
    minimum: 20,
    title: "Strong Detection Engineering Readiness",
    message: "You understand the major A5 concepts. Review the explanations for missed questions before beginning A6.",
  },
  {
    minimum: 17,
    title: "Developing Advanced Readiness",
    message: "You have a useful foundation, but several advanced decision areas need review. Revisit the connected A5 lessons and retake the test.",
  },
  {
    minimum: 0,
    title: "A5 Review Recommended",
    message: "Return to the A5 lessons and focus on source health, quality labels, tuning tradeoffs, alert questions, safe testing, and documentation before retaking the assessment.",
  },
];

export default function DetectionEngineeringModuleTestPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const answeredCount = Object.keys(answers).length;

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total + (answers[question.id] === question.answer ? 1 : 0),
        0,
      ),
    [answers],
  );

  const percentage = Math.round((score / questions.length) * 100);

  const mastery =
    masteryBands.find((band) => score >= band.minimum) ??
    masteryBands[masteryBands.length - 1];

  const selectAnswer = (questionId: number, choiceIndex: number) => {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionId]: choiceIndex }));
  };

  const submitTest = () => {
    if (answeredCount !== questions.length) return;
    setSubmitted(true);
    setShowReview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetTest = () => {
    setAnswers({});
    setSubmitted(false);
    setShowReview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">High School Advanced</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">Module A5</span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-200">25-Question Assessment</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">Hidden Answers until Submission</span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A5 Module Test: Detection Engineering
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate your understanding of detection goals, telemetry, source health, logic, behavior, quality, tuning, defender questions, safe fake-data testing, documentation, governance, privacy, and lifecycle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Previous Lesson
            </Link>
            <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
              Module A5
            </Link>
            <Link href={nextModule} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200">
              Next Module Preview
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        {submitted ? (
          <section className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-7 shadow-2xl shadow-emerald-950/30">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Assessment Complete</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-2xl border border-emerald-300/30 bg-slate-950/80 p-6 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Final Score</p>
                <p className="mt-3 text-6xl font-black text-white">
                  {score}<span className="text-2xl text-slate-400"> / 25</span>
                </p>
                <p className="mt-3 text-2xl font-black text-emerald-200">{percentage}%</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6">
                <h2 className="text-2xl font-black text-white">{mastery.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{mastery.message}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button type="button" onClick={() => setShowReview((current) => !current)} className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300">
                    {showReview ? "Hide Answer Review" : "Review Every Answer"}
                  </button>
                  <button type="button" onClick={resetTest} className="rounded-xl border border-slate-600 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
                    Retake Test
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-2xl shadow-cyan-950/30">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Test Instructions</p>
                <h2 className="mt-3 text-2xl font-black text-white">Answer All 25 Questions before Submitting</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Select one answer for each question. Correct answers and explanations remain hidden until the full test is submitted.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-300/30 bg-slate-950/80 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Completion</p>
                <p className="mt-3 text-4xl font-black text-white">{answeredCount} / {questions.length}</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-cyan-400 transition-all duration-300" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {questions.length - answeredCount === 0
                    ? "All questions are answered. You may submit the test."
                    : `${questions.length - answeredCount} question${questions.length - answeredCount === 1 ? "" : "s"} remaining.`}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">Assessment Safety Boundary</p>
          <p className="mt-3 leading-7">
            Every organization, source, field, identity, service, event, alert, test, owner, date, decision, and outcome in this assessment is fictional. The questions do not authorize access, monitoring, testing, scanning, investigation, configuration, or changes to any real system.
          </p>
        </section>

        <div className="grid gap-6">
          {questions.map((question) => {
            const selected = answers[question.id];
            const isCorrect = selected === question.answer;

            return (
              <section
                key={question.id}
                className={`rounded-2xl border p-6 transition ${
                  submitted
                    ? isCorrect
                      ? "border-emerald-400/40 bg-emerald-400/10"
                      : "border-red-400/40 bg-red-400/10"
                    : selected !== undefined
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-slate-800 bg-slate-900/70"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">{question.id}</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-purple-200">{question.category}</span>
                  {submitted && (
                    <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
                      isCorrect
                        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        : "border border-red-400/30 bg-red-400/10 text-red-200"
                    }`}>
                      {isCorrect ? "Correct" : "Review Needed"}
                    </span>
                  )}
                </div>

                <h2 className="mt-5 text-xl font-black leading-8 text-white">{question.question}</h2>

                <div className="mt-5 grid gap-3">
                  {question.choices.map((choice, choiceIndex) => {
                    const isSelected = selected === choiceIndex;
                    const isAnswer = question.answer === choiceIndex;

                    let choiceStyle = "border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-400/60";
                    if (!submitted && isSelected) choiceStyle = "border-cyan-400 bg-cyan-400/15 text-cyan-50";
                    if (submitted && isAnswer) choiceStyle = "border-emerald-400 bg-emerald-400/15 text-emerald-50";
                    else if (submitted && isSelected && !isAnswer) choiceStyle = "border-red-400 bg-red-400/15 text-red-50";

                    return (
                      <button
                        key={`${question.id}-${choiceIndex}`}
                        type="button"
                        disabled={submitted}
                        onClick={() => selectAnswer(question.id, choiceIndex)}
                        className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${choiceStyle} ${submitted ? "cursor-default" : ""}`}
                      >
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-sm font-black ${
                          submitted && isAnswer
                            ? "border-emerald-300 bg-emerald-300 text-slate-950"
                            : submitted && isSelected && !isAnswer
                              ? "border-red-300 bg-red-300 text-slate-950"
                              : isSelected
                                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                                : "border-slate-600 bg-slate-900 text-slate-300"
                        }`}>
                          {String.fromCharCode(65 + choiceIndex)}
                        </span>
                        <span className="pt-1 font-semibold leading-6">{choice}</span>
                      </button>
                    );
                  })}
                </div>

                {submitted && showReview && (
                  <div className="mt-5 rounded-xl border border-blue-400/30 bg-blue-400/10 p-5 text-blue-50">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Explanation</p>
                    <p className="mt-2 leading-7">{question.explanation}</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {!submitted && (
          <section className="sticky bottom-4 rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-black text-white">{answeredCount} of {questions.length} questions answered</p>
                <p className="mt-1 text-sm text-slate-400">Answers and explanations appear only after submission.</p>
              </div>
              <button
                type="button"
                onClick={submitTest}
                disabled={answeredCount !== questions.length}
                className={`rounded-xl px-6 py-3 font-black transition ${
                  answeredCount === questions.length
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "cursor-not-allowed bg-slate-800 text-slate-500"
                }`}
              >
                Submit A5 Module Test
              </button>
            </div>
          </section>
        )}

        {submitted && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Module Completion</p>
            <h2 className="mt-3 text-2xl font-black text-white">Detection Engineering Review Path</h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              Review missed explanations, revisit the related A5 lessons, and retake the assessment until you can explain why the other options create evidence, quality, privacy, coverage, or lifecycle problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={modulePath} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
                Return to Module A5
              </Link>
              <Link href={previousLesson} className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200">
                Review A5.10 Capstone
              </Link>
              <Link href={nextModule} className="rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300">
                Continue to A6
              </Link>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}