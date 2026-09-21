import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import {
  progressConfig,
  TOTAL_CURRICULUM_LESSONS,
  calculateProgress,
} from "../../lib/progressConfig";
import {
  getTrackFromLessonId,
  type ProgressTrack,
} from "../../lib/progressIds";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims) {
    redirect("/login");
  }

  const userId = claimsData.claims.sub;

  const email =
    typeof claimsData.claims.email === "string"
      ? claimsData.claims.email
      : "CyberShield user";

  const { data: savedProgress, error: progressError } = await supabase
    .from("lesson_progress")
    .select("lesson_id, completed_at")
    .eq("user_id", userId)
    .order("completed_at", { ascending: false });

  const progressRows = savedProgress ?? [];

  const trackCounts: Record<ProgressTrack, number> = {
    kids: 0,
    junior: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  };

  for (const row of progressRows) {
    const track = getTrackFromLessonId(row.lesson_id);

    if (track) {
      trackCounts[track] += 1;
    }
  }

  const curriculumCompleted =
    trackCounts.kids +
    trackCounts.junior +
    trackCounts.beginner +
    trackCounts.intermediate +
    trackCounts.advanced;

  const overallProgress = calculateProgress(
    curriculumCompleted,
    TOTAL_CURRICULUM_LESSONS
  );

  const trackProgress = {
    kids: calculateProgress(
      trackCounts.kids,
      progressConfig.kids.totalLessons
    ),

    junior: calculateProgress(
      trackCounts.junior,
      progressConfig.junior.totalLessons
    ),

    beginner: calculateProgress(
      trackCounts.beginner,
      progressConfig.beginner.totalLessons
    ),

    intermediate: calculateProgress(
      trackCounts.intermediate,
      progressConfig.intermediate.totalLessons
    ),

    advanced: calculateProgress(
      trackCounts.advanced,
      progressConfig.advanced.totalLessons
    ),
  };

  const lessonsCompleted = progressRows.length;

  const tracks: ProgressTrack[] = [
    "kids",
    "junior",
    "beginner",
    "intermediate",
    "advanced",
  ];

  // Find the user's most recently completed curriculum lesson.
  // Route-based IDs contain "/" and can be opened directly.
  const latestCurriculumLesson = progressRows.find((row) => {
    return (
      row.lesson_id.includes("/") &&
      getTrackFromLessonId(row.lesson_id) !== null
    );
  });

  const latestTrack = latestCurriculumLesson
    ? getTrackFromLessonId(latestCurriculumLesson.lesson_id)
    : null;

  const continueHref = latestCurriculumLesson
    ? `/${latestCurriculumLesson.lesson_id}`
    : null;

  const lessonName = latestCurriculumLesson
    ? latestCurriculumLesson.lesson_id
        .split("/")
        .at(-1)
        ?.split("-")
        .map(
          (word: string) =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    : null;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            CyberShield Academy
          </p>

          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            My Progress
          </h1>

          <p className="mt-3 text-slate-400">
            Signed in as{" "}
            <span className="font-medium text-slate-200">
              {email}
            </span>
          </p>
        </div>

        {progressError && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            We could not load your saved progress right now.
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">
              Saved Lessons Completed
            </p>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              {lessonsCompleted}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">
              Curriculum Lessons Completed
            </p>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              {curriculumCompleted}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Out of {TOTAL_CURRICULUM_LESSONS}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">
              Overall Curriculum Progress
            </p>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              {overallProgress}%
            </p>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Continue Learning
          </p>

          {latestCurriculumLesson &&
          latestTrack &&
          continueHref ? (
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Most recent lesson
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {lessonName}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {progressConfig[latestTrack].label}
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  Return to your most recently completed lesson and use
                  its Next Lesson navigation to continue your
                  CyberShield learning journey.
                </p>
              </div>

              <Link
                href={continueHref}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Continue Learning
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-white">
                Start your learning journey
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Complete a curriculum lesson while signed in and
                CyberShield will remember where you left off.
              </p>
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Track Progress
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Your Learning Journey
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Progress is calculated from lessons you mark complete
              while signed in to your CyberShield Academy account.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {tracks.map((track) => {
              const config = progressConfig[track];
              const completed = trackCounts[track];
              const percentage = trackProgress[track];

              return (
                <div
                  key={track}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-white">
                        {config.label}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {completed} of {config.totalLessons} lessons
                        completed
                      </p>
                    </div>

                    <p className="text-lg font-bold text-cyan-400">
                      {percentage}%
                    </p>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Return to CyberShield
          </Link>

          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl border border-red-500/40 px-5 py-3 font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/10 sm:w-auto"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}