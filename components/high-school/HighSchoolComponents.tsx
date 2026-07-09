"use client";

import { useMemo, useState } from "react";

type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

type ScenarioChoice = {
  label: string;
  response: string;
  outcome: string;
  tone?: "best" | "caution" | "risk";
};

type DashboardMetric = {
  label: string;
  value: string;
  note: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function LessonProgressBar({
  track,
  moduleTitle,
  lessonTitle,
  lessonNumber,
  totalLessons,
}: {
  track: string;
  moduleTitle: string;
  lessonTitle: string;
  lessonNumber: number;
  totalLessons: number;
}) {
  const percent = Math.round((lessonNumber / totalLessons) * 100);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Lesson Progress</p>
          <h2 className="mt-2 text-xl font-bold text-white">{lessonTitle}</h2>
          <p className="mt-1 text-sm text-slate-400">
            {track} • {moduleTitle} • Lesson {lessonNumber} of {totalLessons}
          </p>
        </div>
        <div className="text-sm font-semibold text-cyan-200">{percent}% complete</div>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full border border-slate-700 bg-slate-950">
        <div className="h-full rounded-full bg-cyan-400" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}

export function ReadinessCheck({
  title = "Before You Start",
  items,
}: {
  title?: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const readyCount = checked.filter(Boolean).length;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Readiness Check</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          {readyCount}/{items.length} ready
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() =>
              setChecked((current) => current.map((value, i) => (i === index ? !value : value)))
            }
            className={cx(
              "rounded-2xl border p-4 text-left transition",
              checked[index]
                ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
                : "border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-400/60"
            )}
          >
            <span className="mr-3 font-bold">{checked[index] ? "✓" : "○"}</span>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export function VisualDiagramCard({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: string[];
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Model</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-300">{description}</p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
              {index + 1}
            </div>
            <p className="mt-4 font-semibold text-cyan-100">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FakeAlertCard({
  title,
  severity = "Medium",
  time,
  source,
  details,
  recommendation,
}: {
  title: string;
  severity?: "Low" | "Medium" | "High";
  time: string;
  source: string;
  details: string;
  recommendation: string;
}) {
  const severityStyle =
    severity === "High"
      ? "border-red-400/40 bg-red-400/10 text-red-100"
      : severity === "Medium"
        ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-100"
        : "border-emerald-400/40 bg-emerald-400/10 text-emerald-100";

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake SOC Alert</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-slate-400">Source: {source} • Time: {time}</p>
        </div>
        <span className={cx("rounded-full border px-4 py-2 text-sm font-bold", severityStyle)}>
          {severity} Severity
        </span>
      </div>
      <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
        {details}
      </div>
      <div className="mt-4 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-100">
        <span className="font-bold">Defensive recommendation:</span> {recommendation}
      </div>
    </section>
  );
}

export function FakeLogPanel({
  title,
  logs,
}: {
  title: string;
  logs: string[];
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Log Panel</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <div className="border-b border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-300">
          training-log-viewer.log
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-7 text-cyan-100">
          {logs.join("\n")}
        </pre>
      </div>
      <p className="mt-3 text-sm text-slate-500">Training note: this is fake data for defensive analysis practice only.</p>
    </section>
  );
}

export function FakeDashboardCard({
  title,
  subtitle,
  metrics,
}: {
  title: string;
  subtitle: string;
  metrics: DashboardMetric[];
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Fake Dashboard</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-2 text-3xl font-black text-cyan-200">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-300">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AnalyzeEvidenceCard({
  title,
  evidence,
  question,
  options,
  bestAnswer,
  explanation,
}: {
  title: string;
  evidence: string[];
  question: string;
  options: string[];
  bestAnswer: number;
  explanation: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">Analyze the Evidence</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-5 grid gap-3">
        {evidence.map((item) => (
          <div key={item} className="rounded-2xl border border-yellow-400/30 bg-slate-950 p-4 text-yellow-50">
            {item}
          </div>
        ))}
      </div>

      <h3 className="mt-6 font-bold text-white">{question}</h3>
      <div className="mt-3 grid gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            disabled={submitted}
            onClick={() => setSelected(index)}
            className={cx(
              "rounded-2xl border p-4 text-left transition",
              selected === index ? "border-cyan-400 bg-cyan-400/10 text-cyan-100" : "border-slate-700 bg-slate-950 text-slate-300",
              submitted && index === bestAnswer && "border-emerald-400 bg-emerald-400/10 text-emerald-100",
              submitted && selected === index && index !== bestAnswer && "border-red-400 bg-red-400/10 text-red-100"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={selected === null}
          onClick={() => setSubmitted(true)}
          className="mt-4 rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit evidence choice
        </button>
      ) : (
        <div className="mt-4 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-100">
          {explanation}
        </div>
      )}
    </section>
  );
}

export function ScenarioDecisionLab({
  title,
  scenario,
  choices,
}: {
  title: string;
  scenario: string;
  choices: ScenarioChoice[];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Scenario Decision Lab</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">{scenario}</p>

      <div className="mt-5 grid gap-3">
        {choices.map((choice, index) => (
          <button
            key={choice.label}
            type="button"
            onClick={() => setSelected(index)}
            className={cx(
              "rounded-2xl border p-4 text-left transition hover:border-cyan-400/70",
              selected === index ? "border-cyan-400 bg-cyan-400/10 text-cyan-100" : "border-slate-700 bg-slate-950 text-slate-300"
            )}
          >
            <span className="font-bold text-white">{choice.label}: </span>
            {choice.response}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className={cx(
            "mt-4 rounded-2xl border p-4",
            choices[selected].tone === "risk"
              ? "border-red-400/40 bg-red-400/10 text-red-100"
              : choices[selected].tone === "caution"
                ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-100"
                : "border-emerald-400/40 bg-emerald-400/10 text-emerald-100"
          )}
        >
          <span className="font-bold">Outcome:</span> {choices[selected].outcome}
        </div>
      )}
    </section>
  );
}

export function MiniQuiz({
  title = "Mini Scored Quiz",
  questions,
}: {
  title?: string;
  questions: QuizQuestion[];
}) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => total + (selected[index] === question.answer ? 1 : 0), 0);
  }, [questions, selected]);

  const percent = Math.round((score / questions.length) * 100);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Check Your Understanding</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-slate-400">Choose your answers first. Explanations appear only after submission.</p>
        </div>
        {submitted && (
          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center">
            <p className="text-2xl font-black text-cyan-100">{percent}%</p>
            <p className="text-sm text-cyan-200">{score}/{questions.length} correct</p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-5">
        {questions.map((question, questionIndex) => (
          <div key={question.question} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="font-bold text-white">
              {questionIndex + 1}. {question.question}
            </h3>
            <div className="mt-4 grid gap-3">
              {question.choices.map((choice, choiceIndex) => (
                <button
                  key={choice}
                  type="button"
                  disabled={submitted}
                  onClick={() => setSelected((current) => ({ ...current, [questionIndex]: choiceIndex }))}
                  className={cx(
                    "rounded-2xl border p-4 text-left transition",
                    selected[questionIndex] === choiceIndex
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                      : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400/60",
                    submitted && choiceIndex === question.answer && "border-emerald-400 bg-emerald-400/10 text-emerald-100",
                    submitted && selected[questionIndex] === choiceIndex && choiceIndex !== question.answer &&
                      "border-red-400 bg-red-400/10 text-red-100"
                  )}
                >
                  {choice}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 text-slate-300">
                <span className="font-bold text-cyan-200">Explanation:</span> {question.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={Object.keys(selected).length !== questions.length}
          onClick={() => setSubmitted(true)}
          className="mt-6 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit quiz
        </button>
      ) : (
        <div className="mt-6 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-100">
          Score recorded for practice. Review the explanations, then continue to the portfolio prompt.
        </div>
      )}
    </section>
  );
}

export function DefenderChecklist({
  title = "Defender Checklist",
  items,
}: {
  title?: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  return (
    <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Defender Habits</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() =>
              setChecked((current) => current.map((value, i) => (i === index ? !value : value)))
            }
            className={cx(
              "rounded-2xl border p-4 text-left transition",
              checked[index]
                ? "border-emerald-400 bg-emerald-400/10 text-emerald-100"
                : "border-slate-700 bg-slate-950 text-slate-300 hover:border-emerald-400/60"
            )}
          >
            <span className="mr-3 font-bold">{checked[index] ? "✓" : "□"}</span>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export function PortfolioPrompt({
  title,
  prompt,
  tips,
}: {
  title: string;
  prompt: string;
  tips: string[];
}) {
  return (
    <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Portfolio Prompt</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 text-cyan-50">{prompt}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
            {tip}
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeyTakeaways({
  takeaways,
}: {
  takeaways: string[];
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Takeaways</p>
      <h2 className="mt-2 text-2xl font-bold text-white">What You Should Remember</h2>
      <div className="mt-5 grid gap-3">
        {takeaways.map((takeaway, index) => (
          <div key={takeaway} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
            <span className="mr-3 font-black text-cyan-300">{index + 1}.</span>
            {takeaway}
          </div>
        ))}
      </div>
    </section>
  );
}